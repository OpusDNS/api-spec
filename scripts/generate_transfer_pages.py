#!/usr/bin/env python3
"""Generate the Transfers pages from OpusDNS's registrar capability export.

The export is a JSON file: ``tld_types`` maps each TLD to ``ccTLD`` or
``gTLD``, and ``registrars`` maps each registrar a customer can connect to its
per-TLD answers: ``tld``, ``flows.transfer_to_opusdns`` (the steps of
transferring a domain from that registrar to OpusDNS) and ``actions`` (what
OpusDNS can do with a connected domain there). This script writes an overview
and one page per registrar into ``scalar/content/transfers/`` and refreshes the
``/transfers`` route and its tab in ``scalar/scalar.config.json``.

Every sentence of the export must have its published wording in SENTENCES, so
a new one fails the run instead of reaching the public docs unreviewed.

    python scripts/generate_transfer_pages.py --input capabilities.json
"""

from __future__ import annotations

import argparse
import json
import re
from collections import Counter, defaultdict
from dataclasses import dataclass
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parent.parent
DEFAULT_OUTPUT = REPO_ROOT / "scalar" / "content" / "transfers"
DEFAULT_CONFIG = REPO_ROOT / "scalar" / "scalar.config.json"
KNOWLEDGE_BASE = REPO_ROOT / "scalar" / "content" / "tld-knowledge-base"
ROUTE = "/transfers"
TAB = {"title": "Transfers", "icon": "line/arrow-right", "to": ROUTE, "newTab": False}


@dataclass(frozen=True)
class Registrar:
    api_value: str
    name: str  # as the pages name it
    short: str  # as the export's sentences name it
    slug: str


REGISTRARS = {
    "centralnic": Registrar("CENTRALNIC", "CentralNic Reseller", "CentralNic Reseller", "centralnic"),
    "enom": Registrar("ENOM", "eNom", "eNom", "enom"),
    "internetx": Registrar("INTERNETX", "InterNetX", "InternetX", "internetx"),
    "moniker": Registrar("MONIKER", "Moniker", "Moniker", "moniker"),
    "nic_direct": Registrar("NIC_DIRECT", "NIC Direct", "NIC Direct", "nic-direct"),
    "nicmanager": Registrar("NICMANAGER", "NICManager", "NICManager", "nicmanager"),
    "openprovider": Registrar("OPENPROVIDER", "Openprovider", "Openprovider", "openprovider"),
    "opensrs": Registrar("OPENSRS", "OpenSRS", "OpenSRS", "opensrs"),
    "partnergate": Registrar("DOMAIN_BESTELLSYSTEM", "PartnerGate", "PartnerGate", "domain-bestellsystem"),
    "realtimeregister": Registrar("REALTIMEREGISTER", "Realtime Register", "Realtime Register", "realtime-register"),
}

# A transfer from another OpusDNS account is refused when both organizations
# use the same registry account (ERROR_DOMAIN_TRANSFER_INTERNAL_NOT_SUPPORTED),
# which is the usual case, so it gets no page.
EXCLUDED = {"opusdns"}

WHO = {
    "opusdns": ("✅", "OpusDNS"),
    "customer": ("↗️", "You, at {r}"),
    "registrant": ("✉️", "The holder, by email"),
    "registry": ("⚙️", "The registry"),
    None: ("➖", "Not at this TLD"),
}

LEGEND_WORDS = {
    "✅": "OpusDNS does it for you",
    "↗️": "you do it at your registrar",
    "✉️": "the domain's holder approves by email",
    "⚙️": "the registry does it on its own",
    "➖": "the TLD doesn't have it",
}

# ICANN Transfer Policy, version of 21 February 2024 (I.A.5.2, I.A.2.2, I.A.6.1,
# I.A.3.7, I.A.3.5, I.A.6.2). The revised policy from the Transfer Policy Review
# renames the code (TAC), turns the 60 days into a mandatory 30 days and may
# renumber the sections: revisit the text and its section links when it takes effect.
ICANN_POLICY = "https://www.icann.org/resources/pages/transfer-policy-2024-02-21-en"
ICANN_TEXT = "\n".join([
    f"For gTLDs such as `.com`, ICANN's [Transfer Policy]({ICANN_POLICY}) sets the rules. All "
    "registrars accredited by ICANN and all gTLD registries must follow it.",
    "",
    "- Your current registrar must remove the transfer lock and give you the auth code. It has five "
    f"calendar days to do so after you ask ([section I.A.5.2]({ICANN_POLICY})).",
    "- OpusDNS requests the transfer at the registry with the auth code. The registry checks the code.",
    "- Your current registrar can deny the transfer, but only for the reasons the policy lists "
    f"([section I.A.3.7]({ICANN_POLICY})). Examples are fraud or a registration or transfer in the "
    "last 60 days.",
    "- If your current registrar doesn't deny the transfer within five calendar days, the registry "
    "completes it. Your current registrar can also approve it earlier.",
])

CCTLD_TEXT = "\n".join([
    "ccTLD registries don't follow ICANN's Transfer Policy. Each sets its own rules, so the steps "
    "often differ from the ones above. For example:",
    "",
    "- `.de` and `.ch` have no transfer lock.",
    "- `.de` and `.se` complete a transfer at once, without an approval.",
    "- At `.lu`, the domain's holder approves the transfer by email.",
    "- At `.se` and `.nu`, only the registry issues auth codes.",
    "- A `.uk` domain is pushed to the new registrar's tag instead of requested.",
    "",
    "The [TLD Knowledge Base](/tld-knowledge-base) describes each TLD's rules, and each registrar's "
    "page lists the TLDs whose steps differ.",
])

REGISTRAR_PAGE_NOTE = (
    f"For gTLDs, these steps follow ICANN's [Transfer Policy]({ICANN_POLICY}). ccTLDs often differ. "
    "See [Transfer to OpusDNS](/transfers/overview) for both."
)

CORE_STEPS = [
    ("update_transfer_lock", "Remove the lock"),
    ("read_auth_code", "Get the auth code"),
    ("approve_transfer_out", "Approve"),
]

STEP_LABELS = {
    "update_privacy": "Turn WHOIS privacy off",
    "update_transfer_lock": "Remove the transfer lock",
    "read_auth_code": "Get the auth code",
    "reset_auth_code": "Get a new auth code",
    "request_transfer": "Request the transfer",
    "notify_transfer_out": "The registry notifies {r}",
    "approve_transfer_out": "Approve the transfer",
    "push_transfer_out": "Push the domain to OpusDNS's tag",
    "complete_transfer": "The registry transfers the domain",
    "finalize_transfer": "Finish the transfer",
}

MANAGE_ACTIONS = [
    ("status", "read_transfer_lock", "See the transfer lock"),
    ("status", "update_transfer_lock", "Set or remove the transfer lock"),
    ("dns", "read_nameservers", "See the nameservers"),
    ("dns", "update_nameservers", "Change the nameservers"),
    ("contacts", "read_contacts", "See the contacts"),
    ("contacts", "update_registrant", "Change the registrant"),
    ("contacts", "update_contacts", "Change the other contacts"),
    ("contacts", "delete_contacts", "Remove a contact role"),
    ("privacy", "read_privacy", "See WHOIS privacy"),
    ("privacy", "update_privacy", "Turn WHOIS privacy on or off"),
]

# Every sentence of the export, with the registrar as {r} and the TLD as
# {tld}: (the sentence as published, the short reason a differing TLD shows).
SENTENCES = {
    # flows
    "OpusDNS transfers the domain in. Unless it is rejected, the registry completes it within the transfer time.": (
        "OpusDNS transfers the domain in. Unless it is rejected, the registry completes it within the transfer time.", ""),
    "The domain moves to OpusDNS's tag once it is pushed.": ("The domain goes to OpusDNS's tag once it is pushed.", ""),
    "{tld} has no transfers.": ("The TLD has no transfers.", "no transfers"),
    # steps
    "{r} refuses to remove the lock while WHOIS privacy is on. Turn it off at {r} first.": (
        "{r} refuses to remove the lock while WHOIS privacy is on. Turn it off at {r} first.", ""),
    "OpusDNS removes the transfer lock at {r}.": ("OpusDNS removes the transfer lock at {r}.", ""),
    "Remove the transfer lock at {r}.": ("Remove the transfer lock at {r}.", ""),
    "OpusDNS cannot see the lock at {r}, so it leaves it. Remove it at {r}.": (
        "OpusDNS cannot see the lock at {r}, so it leaves it. Remove it at {r}.", ""),
    "OpusDNS reads the auth code at {r}.": ("OpusDNS reads the auth code at {r}.", ""),
    "Get the auth code at {r}.": ("Get the auth code at {r} and send it as `auth_code`.", ""),
    "Get a new auth code at {r}.": ("Get a new auth code at {r} and send it as `auth_code`.", ""),
    "OpusDNS sends the transfer to the {tld} registry.": ("OpusDNS sends the transfer to the registry.", ""),
    "OpusDNS books the domain and has it pushed. The {tld} registry gets no transfer request.": (
        "OpusDNS books the domain and has it pushed to its tag. The registry gets no transfer request.", ""),
    "The {tld} registry tells {r} about the transfer.": ("The registry tells {r} about the transfer.", ""),
    "OpusDNS approves the transfer at {r}.": ("OpusDNS approves the transfer at {r}.", ""),
    "Approve the transfer at {r}.": ("Approve the transfer at {r}.", ""),
    "The holder of the {tld} domain approves the transfer.": ("The holder of the domain approves the transfer by email.", ""),
    "{r} emails the domain's owner contact, who approves or declines the transfer. Without an answer, the registry completes it after the transfer time.": (
        "{r} emails the domain's owner contact, who approves or declines the transfer. Without an answer, the registry completes it after the transfer time.", ""),
    "OpusDNS pushes the domain to its tag at {r}.": ("OpusDNS pushes the domain to its tag at {r}.", ""),
    "Push the domain to OpusDNS's tag at {r}.": ("Push the domain to OpusDNS's tag at {r}.", ""),
    "The {tld} registry moves the domain to OpusDNS.": ("The registry transfers the domain to OpusDNS.", ""),
    "The {tld} registry moves the domain to OpusDNS's tag.": ("The registry transfers the domain to OpusDNS's tag.", ""),
    "OpusDNS books the transfer and stops mirroring the domain from {r}.": (
        "OpusDNS books the transfer and stops syncing the domain from {r}.", ""),
    "OpusDNS books the transfer, sets the transfer lock and stops mirroring the domain from {r}.": (
        "OpusDNS books the transfer, sets the transfer lock and stops syncing the domain from {r}.", ""),
    # managing a connected domain
    "OpusDNS reads the transfer lock at {r}.": ("OpusDNS reads the transfer lock at {r}.", ""),
    "OpusDNS does not read the lock at {r}. Check it at {r}.": ("OpusDNS does not read the lock at {r}. Check it at {r}.", ""),
    "Reading the transfer lock through OpusDNS isn't verified at {r} yet. Check it at {r}.": (
        "OpusDNS can't show the transfer lock at {r} yet. Check it at {r}.", ""),
    "OpusDNS changes the lock through the {r} API.": ("OpusDNS sets and removes the lock through the {r} API.", ""),
    "OpusDNS cannot change the transfer lock at {r}. Change it at {r}.": (
        "OpusDNS cannot change the transfer lock at {r}. Change it at {r}.", ""),
    "{tld} has no transfer lock.": ("The TLD has no transfer lock.", "no transfer lock"),
    "OpusDNS reads the nameservers in each sync.": ("OpusDNS reads the nameservers in each sync.", ""),
    "OpusDNS changes the nameservers through the {r} API.": ("OpusDNS changes the nameservers through the {r} API.", ""),
    "OpusDNS cannot change the nameservers at {r}. Change them at {r}.": (
        "OpusDNS cannot change the nameservers at {r}. Change them at {r}.", ""),
    "OpusDNS reads the contacts in each sync.": ("OpusDNS reads the contacts in each sync.", ""),
    "OpusDNS cannot change the registrant at {r}. Change it at {r}.": ("OpusDNS cannot change the registrant at {r}. Change it at {r}.", ""),
    "OpusDNS cannot change the registrant on connected domains yet. Change it at {r}.": (
        "OpusDNS cannot change the registrant on connected domains yet. Change it at {r}.", ""),
    "Changing the registrant through OpusDNS isn't verified at {r} yet. Change it at {r}.": (
        "OpusDNS can't change the registrant at {r} yet. Change it at {r}.", ""),
    "OpusDNS cannot change the other contacts at {r}. Change them at {r}.": (
        "OpusDNS cannot change the other contacts at {r}. Change them at {r}.", ""),
    "OpusDNS cannot change the other contacts on connected domains yet. Change them at {r}.": (
        "OpusDNS cannot change the other contacts on connected domains yet. Change them at {r}.", ""),
    "{tld} has only the registrant. Change it with update_registrant.": ("The TLD has only the registrant.", "only the registrant"),
    "OpusDNS cannot remove a contact from a connected domain. Remove it at {r}.": (
        "OpusDNS cannot remove a contact from a connected domain. Remove it at {r}.", ""),
    "{tld} requires every contact it has.": ("The TLD requires every contact it has.", "every contact is required"),
    "{tld} has only the registrant, and it is required.": ("The TLD has only the registrant, and it is required.", "only the registrant, which is required"),
    "OpusDNS has no access to WHOIS privacy at {r} yet. Check it at {r}.": (
        "OpusDNS has no access to WHOIS privacy at {r} yet. Check it at {r}.", ""),
    "OpusDNS has no access to WHOIS privacy at {r} yet. Change it at {r}.": (
        "OpusDNS has no access to WHOIS privacy at {r} yet. Change it at {r}.", ""),
    "{tld} has no privacy service.": ("The TLD has no WHOIS privacy service.", "no WHOIS privacy service"),
}

# At a gTLD the registry completes the transfer after five days without an
# approval (ICANN Transfer Policy I.A.3.5, I.A.6.2), so the customer's
# approval is optional.
OPTIONAL_APPROVAL = "Optional: approve it at {r} to finish sooner. Otherwise the registry completes the transfer after five days."


def registrar_order(key: str) -> str:
    return REGISTRARS[key].name.lower()


def kb_link(tld: str, tld_types: dict[str, str]) -> str:
    folder = "cctlds" if tld_types.get(tld) == "ccTLD" else "gtlds"
    if (KNOWLEDGE_BASE / folder / f"{tld}.md").exists():
        return f"[.{tld}](/tld-knowledge-base/{folder}/{tld})"
    return f".{tld}"


def template(sentence: str, tld: str, reg: Registrar) -> str:
    sentence = re.sub(r"\." + re.escape(tld) + r"(?![\w.-])", "{tld}", sentence)
    return sentence.replace(reg.short, "{r}")


def say(tmpl: str, reg: Registrar, *, short: bool = False) -> str:
    if tmpl not in SENTENCES:
        raise SystemExit(f"no published wording for {tmpl!r}: add it to SENTENCES")
    return SENTENCES[tmpl][1 if short else 0].replace("{r}", reg.name)


def legend(symbols: set[str]) -> str:
    return " · ".join(f"{symbol} {text}" for symbol, text in LEGEND_WORDS.items() if symbol in symbols)


# --- transfer steps --------------------------------------------------------


@dataclass(frozen=True)
class Step:
    action: str
    entity: str
    template: str
    gtld: bool

    def optional(self) -> bool:
        return self.action == "approve_transfer_out" and self.entity == "customer" and self.gtld

    def label(self, reg: Registrar) -> str:
        if self.action == "request_transfer" and "books the domain" in self.template:
            return "Book the domain at OpusDNS"
        label = STEP_LABELS[self.action].replace("{r}", reg.name)
        return label + " (optional)" if self.optional() else label

    def note(self, reg: Registrar) -> str:
        say(self.template, reg)  # every sentence needs its wording, also where it is replaced
        if self.optional():
            return OPTIONAL_APPROVAL.replace("{r}", reg.name)
        return say(self.template, reg)

    def shown(self, reg: Registrar) -> str:
        return f"{WHO[self.entity][0]} {self.label(reg)}"


@dataclass(frozen=True)
class Flow:
    steps: tuple[Step, ...]
    detail: str

    def chain(self, reg: Registrar) -> str:
        if not self.steps:
            return say(self.detail, reg)
        return " → ".join(step.shown(reg) for step in self.steps)

    def without_privacy(self, reg: Registrar) -> str:
        """The privacy step applies only while privacy is on, and only at TLDs
        with a privacy service, so whether a TLD is listed ignores it."""
        return Flow(tuple(s for s in self.steps if s.action != "update_privacy"), self.detail).chain(reg)


def flow_of(row: dict, reg: Registrar, tld_types: dict[str, str]) -> Flow:
    flow = row["flows"]["transfer_to_opusdns"]
    gtld = tld_types.get(row["tld"]) == "gTLD"
    steps = tuple(Step(s["action"], s["executing_entity"], template(s["detail"], row["tld"], reg), gtld) for s in flow["steps"])
    return Flow(steps, template(flow["detail"], row["tld"], reg))


# --- managing a connected domain --------------------------------------------


@dataclass(frozen=True)
class Cell:
    entity: str | None
    template: str


def manage_cells(row: dict, reg: Registrar) -> dict[str, Cell]:
    return {
        key: Cell(row["actions"][group][key]["executing_entity"], template(row["actions"][group][key]["detail"], row["tld"], reg))
        for group, key, _ in MANAGE_ACTIONS
    }


def matters(cell: Cell, usual: Cell) -> bool:
    """A TLD is listed where it changes OpusDNS's part or who else acts. Where
    OpusDNS does the action at neither, whether the TLD has it at all is the
    TLD Knowledge Base's to say."""
    return cell != usual and not ({cell.entity, usual.entity} <= {"customer", None})


def at_most_tlds(per_tld: dict[str, dict[str, Cell]], action: str, usual: Cell, reg: Registrar) -> tuple[str, str, str]:
    symbol, words = WHO[usual.entity]
    note = say(usual.template, reg)
    if usual.entity is None and {c[action].entity for c in per_tld.values()} == {"customer", None}:
        # OpusDNS does it at no TLD: where the TLD has it, at the registrar.
        at_registrar = next(c[action] for c in per_tld.values() if c[action].entity == "customer")
        symbol, words = WHO["customer"]
        note = say(at_registrar.template, reg) + " Not every TLD allows it: see the TLD Knowledge Base."
    return symbol, words.replace("{r}", reg.name), note


# --- pages -------------------------------------------------------------------


def most_common(values):
    return Counter(values).most_common(1)[0][0]


def glance(flow: Flow, action: str, reg: Registrar) -> str:
    step = next((s for s in flow.steps if s.action == action), None)
    if step is None:
        return "➖"
    symbol, words = WHO[step.entity]
    words = "You, optional" if step.optional() else words.replace("{r}", reg.name)
    return f"{symbol} {words}"


def render_registrar(key: str, rows: list[dict], tld_types: dict[str, str]) -> str:
    reg = REGISTRARS[key]
    flows = {row["tld"]: flow_of(row, reg, tld_types) for row in rows}
    for flow in flows.values():
        for step in flow.steps:
            step.note(reg)
        say(flow.detail, reg)
    per_tld = {row["tld"]: manage_cells(row, reg) for row in rows}
    usual_key = most_common(f.without_privacy(reg) for f in flows.values())
    usual_tlds = sorted(t for t, f in flows.items() if f.without_privacy(reg) == usual_key)
    usual = most_common(flows[t] for t in usual_tlds)
    groups: dict[str, list[str]] = defaultdict(list)
    for tld in sorted(flows):
        if flows[tld].without_privacy(reg) != usual_key:
            groups[flows[tld].chain(reg)].append(tld)

    lines = [
        f"# Transfer from {reg.name}",
        "",
        f"Transferring a domain from {reg.name} to OpusDNS takes a few steps. This page shows, for each "
        f"TLD, which steps OpusDNS takes for you and which you take at {reg.name}. OpusDNS takes its steps "
        f"once you have [connected](/products/connected-registrars/connect) your {reg.name} account "
        f"(`{reg.api_value}` in the API) and [requested the transfer](/products/connected-registrars/transfer-to-opusdns). "
        "Leave out the auth code where OpusDNS gets it for you.",
        "",
        legend({WHO[s.entity][0] for f in flows.values() for s in f.steps} | {WHO[c.entity][0] for cells in per_tld.values() for c in cells.values()} | {"↗️"}),
        "",
        "At most TLDs, the steps that depend on the registrar:",
        "",
        "| " + " | ".join(label for _, label in CORE_STEPS) + " |",
        "| " + " | ".join(":---:" for _ in CORE_STEPS) + " |",
        "| " + " | ".join(glance(usual, action, reg) for action, _ in CORE_STEPS) + " |",
        *(["", f"While WHOIS privacy is on, turn it off at {reg.name} first: {reg.name} refuses to remove the lock under it."]
          if any(s.action == "update_privacy" for s in usual.steps) else []),
        "",
        "## At most TLDs",
        "",
        "| # | Step | Who | What happens |",
        "| --- | --- | --- | --- |",
    ]
    for i, step in enumerate(usual.steps, 1):
        symbol, words = WHO[step.entity]
        lines.append(f"| {i} | {step.label(reg)} | {symbol} {words.replace('{r}', reg.name)} | {step.note(reg)} |")
    if not usual.steps:
        lines.append(f"| | | | {say(usual.detail, reg)} |")
    if any(s.action == "update_privacy" for s in usual.steps):
        lines += ["", "Step 1 applies only while WHOIS privacy is on, and only at TLDs that have a WHOIS privacy service."]
    lines += [
        "",
        REGISTRAR_PAGE_NOTE,
        "",
        "## TLDs with other steps",
        "",
        "Search this page for a TLD, such as `.se`. A TLD that isn't listed takes the steps above.",
        "",
        "| TLDs | Steps |",
        "| --- | --- |",
    ]
    for chain, tlds in sorted(groups.items(), key=lambda item: (-len(item[1]), item[1][0])):
        lines.append(f"| {', '.join(kb_link(t, tld_types) for t in tlds)} | {chain} |")
    if not groups:
        lines.append("| All | Every TLD takes the steps above. |")

    usual_cells = {a: most_common(c[a] for c in per_tld.values()) for _, a, _ in MANAGE_ACTIONS}
    lines += [
        "",
        "## Managing a connected domain",
        "",
        f"What OpusDNS can do with a domain you hold at {reg.name} until you transfer it:",
        "",
        "| Action | Who | Note |",
        "| --- | --- | --- |",
    ]
    for _, action, label in MANAGE_ACTIONS:
        symbol, words, note = at_most_tlds(per_tld, action, usual_cells[action], reg)
        lines.append(f"| {label} | {symbol} {words} | {note} |")
    differing: dict[str, list[str]] = defaultdict(list)
    for tld in sorted(per_tld):
        diffs = []
        for _, action, label in MANAGE_ACTIONS:
            cell = per_tld[tld][action]
            if matters(cell, usual_cells[action]):
                reason = say(cell.template, reg, short=True)
                diffs.append(f"{WHO[cell.entity][0]} {label}" + (f": {reason}" if reason else ""))
        if diffs:
            differing["<br>".join(diffs)].append(tld)
    if differing:
        lines += ["", "TLDs where this differs:", "", "| TLDs | What differs |", "| --- | --- |"]
        for diff, tlds in sorted(differing.items(), key=lambda item: (-len(item[1]), item[1][0])):
            lines.append(f"| {', '.join(kb_link(t, tld_types) for t in tlds)} | {diff} |")
    lines.append("")
    return "\n".join(lines)


def render_overview(data: dict) -> str:
    keys = sorted(data["registrars"], key=registrar_order)
    lines = [
        "# Transfer to OpusDNS",
        "",
        "Transferring a domain from another registrar to OpusDNS takes a few steps at that registrar, "
        "at the registry and at OpusDNS.",
        "",
        "## How a gTLD transfer works",
        "",
        "![Swimlane: you unlock the domain and get the auth code at your current registrar. OpusDNS "
        "requests the transfer at the registry with the auth code, and the transfer is pending. Your "
        "current registrar approves or denies it within five days. The registry transfers the domain "
        "into your OpusDNS account.](/images/gtld-transfer.svg)",
        "",
        ICANN_TEXT,
        "",
        "## ccTLDs",
        "",
        CCTLD_TEXT,
        "",
        "## With a connected account",
        "",
        "If you have [connected](/products/connected-registrars/connect) your account at the current "
        "registrar, you can usually request the transfer without the auth code. OpusDNS then takes the steps "
        "at your current registrar that the registrar's API allows. Before it changes anything there, "
        "it checks the domain's statuses and stops if one blocks the transfer. Then it removes the "
        "transfer lock where the registrar shows it, gets the auth code where the registrar hands it "
        "out, and approves the pending transfer where the registrar lets it. If the request fails "
        "before the registry has it, OpusDNS sets the lock again.",
        "",
        "> [!WARNING]",
        "> **Some steps stay with you.** Check your registrar's page before you start a transfer:",
        ">",
        "> - A lock OpusDNS can't see, or can't remove through the registrar's API.",
        "> - A setting at the registrar that blocks the change, such as WHOIS privacy at InterNetX.",
        "> - An auth code the registrar's API doesn't hand out, or one only the registry can issue, as "
        "at `.se` and `.nu`. Send it as `auth_code` in the request.",
        "> - An approval that the registrar's API can't give, or that someone else gives, such as the "
        "domain's holder answering the registrar's email.",
        "",
        "This works when your organization holds the domain through exactly one connected account. "
        "See [Transfer a connected domain to OpusDNS](/products/connected-registrars/transfer-to-opusdns) "
        "for the request and the errors.",
        "",
        "## Your registrar",
        "",
        "Each registrar's page lists which steps OpusDNS takes there, the TLDs whose steps differ, and "
        "what OpusDNS can do with a domain you hold there until you transfer it.",
        "",
        *[f"- [{REGISTRARS[k].name}]({ROUTE}/{REGISTRARS[k].slug})" for k in keys],
        "",
    ]
    return "\n".join(lines)


def update_config(config_path: Path, keys: list[str]) -> bool:
    raw = config_path.read_text(encoding="utf-8")
    config = json.loads(raw)
    navigation = config["navigation"]
    tabs = navigation["tabs"]
    if not any(tab.get("to") == ROUTE for tab in tabs):
        after = next(i for i, tab in enumerate(tabs) if tab.get("to") == "/tld-knowledge-base")
        tabs.insert(after + 1, dict(TAB))
    children = {
        "/overview": {
            "type": "page",
            "title": "Transfer to OpusDNS",
            "icon": TAB["icon"],
            "filepath": "content/transfers/index.md",
            "showInSidebar": True,
        }
    }
    for key in sorted(keys, key=registrar_order):
        reg = REGISTRARS[key]
        children[f"/{reg.slug}"] = {
            "type": "page",
            "title": f"From {reg.name}",
            "filepath": f"content/transfers/{reg.slug}.md",
            "showInSidebar": True,
        }
    navigation["routes"][ROUTE] = {"type": "group", "title": TAB["title"], "icon": TAB["icon"], "children": children}
    new_raw = json.dumps(config, indent=2, ensure_ascii=False) + "\n"
    if new_raw == raw:
        return False
    config_path.write_text(new_raw, encoding="utf-8")
    return True


def main(argv: list[str] | None = None) -> None:
    parser = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    parser.add_argument("--input", type=Path, required=True, help="The registrar capability export (JSON)")
    parser.add_argument("--output", type=Path, default=DEFAULT_OUTPUT)
    parser.add_argument("--config", type=Path, default=DEFAULT_CONFIG)
    args = parser.parse_args(argv)
    data = json.loads(args.input.read_text(encoding="utf-8"))
    data["registrars"] = {k: v for k, v in data["registrars"].items() if k not in EXCLUDED}
    unknown = set(data["registrars"]) - set(REGISTRARS)
    if unknown:
        raise SystemExit(f"unknown registrars {sorted(unknown)}: add them to REGISTRARS")
    args.output.mkdir(parents=True, exist_ok=True)
    written = {"index.md"}
    for key, rows in data["registrars"].items():
        name = f"{REGISTRARS[key].slug}.md"
        (args.output / name).write_text(render_registrar(key, rows, data["tld_types"]), encoding="utf-8")
        written.add(name)
    (args.output / "index.md").write_text(render_overview(data), encoding="utf-8")
    update_config(args.config, list(data["registrars"]))
    stale = sorted(p.name for p in args.output.glob("*.md") if p.name not in written)
    if stale:
        raise SystemExit(f"pages of registrars no longer in the export, remove them: {stale}")


if __name__ == "__main__":
    main()
