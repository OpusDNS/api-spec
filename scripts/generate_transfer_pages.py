#!/usr/bin/env python3
"""Generate the Transfers pages from OpusDNS's registrar capability export.

The export is a JSON file: ``tld_types`` maps each TLD to ``ccTLD`` or
``gTLD``, and ``registrars`` maps each registrar a customer can connect to its
per-TLD answers: ``tld``, ``flows.transfer_to_opusdns`` (the steps of moving a
domain from that registrar to OpusDNS) and ``actions`` (what OpusDNS can do
with a connected domain there). This script writes an overview and one page
per registrar into ``scalar/content/transfers/`` and refreshes the
``/transfers`` route and its tab in ``scalar/scalar.config.json``.

Every sentence the export may contain must have an entry here, so a new one
fails the run instead of reaching the public docs unreviewed.

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
    "opusdns": Registrar("OPUSDNS", "another OpusDNS account", "OpusDNS", "opusdns"),
    "partnergate": Registrar("DOMAIN_BESTELLSYSTEM", "PartnerGate", "PartnerGate", "domain-bestellsystem"),
    "realtimeregister": Registrar("REALTIMEREGISTER", "Realtime Register", "Realtime Register", "realtime-register"),
}

WHO = {
    "opusdns": ("✅", "OpusDNS"),
    "customer": ("↗️", "You, at {r}"),
    "registrant": ("✉️", "The holder, by email"),
    "registry": ("⚙️", "The registry"),
    None: ("➖", "Not at this TLD"),
}

LEGEND = (
    "✅ OpusDNS does it for you · ↗️ you do it at your registrar · "
    "✉️ the domain's holder approves by email · ⚙️ the registry does it on its own · "
    "➖ the TLD doesn't have it"
)

GTLD_NOTE = (
    "For gTLDs, such as `.com`, these steps follow ICANN's Transfer Policy, which binds every "
    "ICANN-accredited registrar and gTLD registry: a locked domain can't be transferred, the new "
    "registrar requests the transfer with the auth code, and the current registrar can approve it. "
    "If it doesn't, the registry completes the transfer after five days. ccTLD registries set their "
    "own rules, so their steps often differ."
)

# The steps of a transfer, with their short labels.
STEP_LABELS = {
    "update_privacy": "Turn WHOIS privacy off",
    "update_transfer_lock": "Remove the transfer lock",
    "read_auth_code": "Get the auth code",
    "reset_auth_code": "Get a new auth code",
    "request_transfer": "Request the transfer",
    "notify_transfer_out": "The registry notifies {r}",
    "approve_transfer_out": "Approve the transfer",
    "push_transfer_out": "Push the domain to OpusDNS's tag",
    "complete_transfer": "The registry moves the domain",
    "finalize_transfer": "Finish the transfer",
}

# What a customer may still do with a connected domain, apart from moving it.
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

# Sentences naming the TLD ({tld}): the sentence for most TLDs, and the short
# reason a TLD that differs shows.
TLD_SENTENCES = {
    "{tld} has no transfers.": ("The TLD has no transfers.", "no transfers"),
    "{tld} has no transfer lock.": ("The TLD has no transfer lock.", "no transfer lock"),
    "{tld} requires every contact it has.": ("The TLD requires every contact it has.", "every contact is required"),
    "{tld} has only the registrant, and it is required.": ("The TLD has only the registrant, and it is required.", "only the registrant, which is required"),
    "{tld} has only the registrant. Change it with update_registrant.": ("The TLD has only the registrant. Change it as the registrant.", "only the registrant"),
    "The {tld} spec has no contacts.": ("The TLD states no contacts.", "no contacts stated"),
    "{tld} has no registrant change.": ("The TLD has no registrant change.", "no registrant change"),
    "{tld} has no privacy service.": ("The TLD has no WHOIS privacy service.", "no WHOIS privacy service"),
    "{tld} takes no nameservers.": ("The TLD takes no nameservers.", "no nameservers"),
    "OpusDNS sends the transfer to the {tld} registry.": ("OpusDNS sends the transfer to the registry.", ""),
    "OpusDNS books the domain and has it pushed. The {tld} registry gets no transfer request.": (
        "OpusDNS books the domain and has it pushed to its tag. The registry gets no transfer request.", ""),
    "The {tld} registry tells {r} about the transfer.": ("The registry tells {r} about the transfer.", ""),
    "The holder of the {tld} domain approves the transfer.": ("The holder of the domain approves the transfer by email.", ""),
    "The {tld} registry moves the domain to OpusDNS.": ("The registry moves the domain to OpusDNS.", ""),
    "The {tld} registry moves the domain to OpusDNS's tag.": ("The registry moves the domain to OpusDNS's tag.", ""),
}


def registrar_order(key: str) -> tuple[bool, str]:
    """Alphabetical, with another OpusDNS account last."""
    return key == "opusdns", REGISTRARS[key].name.lower()


def kb_link(tld: str, tld_types: dict[str, str]) -> str:
    folder = "cctlds" if tld_types.get(tld) == "ccTLD" else "gtlds"
    if (KNOWLEDGE_BASE / folder / f"{tld}.md").exists():
        return f"[.{tld}](/tld-knowledge-base/{folder}/{tld})"
    return f".{tld}"


def template(sentence: str, tld: str, reg: Registrar) -> str:
    sentence = re.sub(r"\." + re.escape(tld) + r"(?![\w.-])", "{tld}", sentence)
    if reg.short != "OpusDNS":
        return sentence.replace(reg.short, "{r}")
    # A connected OpusDNS account: "OpusDNS" is also every sentence's subject,
    # so only the registrar's positions become {r}.
    return re.sub(r"(?<=\bat )OpusDNS|(?<=\bfrom )OpusDNS|(?<=through the )OpusDNS(?= API)|(?<=\btells )OpusDNS", "{r}", sentence)


def say(tmpl: str, reg: Registrar, *, short: bool = False) -> str:
    if "{tld}" in tmpl:
        if tmpl not in TLD_SENTENCES:
            raise SystemExit(f"no wording for {tmpl!r}: add it to TLD_SENTENCES")
        tmpl = TLD_SENTENCES[tmpl][1 if short else 0]
    return tmpl.replace("{r}", reg.name)


def who(entity: str | None, reg: Registrar) -> tuple[str, str]:
    symbol, words = WHO[entity]
    return symbol, words.replace("{r}", reg.name)


# --- transfer steps --------------------------------------------------------


@dataclass(frozen=True)
class Step:
    action: str
    entity: str
    template: str


def steps_of(row: dict, reg: Registrar) -> tuple[tuple[Step, ...], str]:
    flow = row["flows"]["transfer_to_opusdns"]
    steps = tuple(Step(s["action"], s["executing_entity"], template(s["detail"], row["tld"], reg)) for s in flow["steps"])
    return steps, template(flow["detail"], row["tld"], reg)


def step_label(step: Step, reg: Registrar) -> str:
    if step.action == "request_transfer" and "books the domain" in step.template:
        return "Book the domain at OpusDNS"
    return STEP_LABELS[step.action].replace("{r}", reg.name)


def chain(steps: tuple[Step, ...], detail: str, reg: Registrar) -> str:
    if not steps:
        return say(detail, reg)
    return " → ".join(f"{WHO[s.entity][0]} {step_label(s, reg)}" for s in steps)


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
    symbol, words = who(usual.entity, reg)
    note = say(usual.template, reg)
    if usual.entity is None and {c[action].entity for c in per_tld.values()} == {"customer", None}:
        # OpusDNS does it at no TLD: where the TLD has it, at the registrar.
        at_registrar = next(c[action] for c in per_tld.values() if c[action].entity == "customer")
        symbol, words = who("customer", reg)
        note = say(at_registrar.template, reg) + " Not every TLD allows it: see the TLD Knowledge Base."
    return symbol, words, note


# --- pages -------------------------------------------------------------------


def most_common(values):
    return Counter(values).most_common(1)[0][0]


def without_privacy(flow: tuple[tuple[Step, ...], str]) -> tuple[tuple[Step, ...], str]:
    """The privacy step applies only while privacy is on, and only at TLDs with
    a privacy service; TLDs are compared without it."""
    steps, detail = flow
    return tuple(s for s in steps if s.action != "update_privacy"), detail


def render_registrar(key: str, rows: list[dict], tld_types: dict[str, str]) -> str:
    reg = REGISTRARS[key]
    flows = {row["tld"]: steps_of(row, reg) for row in rows}
    usual_steps, usual_detail = most_common(flows.values())
    usual_key = without_privacy((usual_steps, usual_detail))
    groups: dict[tuple, list[str]] = defaultdict(list)
    for tld, flow in sorted(flows.items()):
        if without_privacy(flow) != usual_key:
            groups[without_privacy(flow)].append(tld)

    lines = [
        f"# Transfer from {reg.name}",
        "",
        f"What moving a domain from {reg.name} to OpusDNS takes, at each TLD: which steps OpusDNS "
        f"takes for you and which you take at {reg.name}. OpusDNS takes its steps once you have "
        f"[connected](/products/connected-registrars/connect) your {reg.name} account "
        f"(`{reg.api_value}` in the API) and [requested the transfer](/products/connected-registrars/transfer-to-opusdns) "
        "without an auth code.",
        "",
        LEGEND,
        "",
        "## At most TLDs",
        "",
        "| # | Step | Who | What happens |",
        "| --- | --- | --- | --- |",
    ]
    for i, step in enumerate(usual_steps, 1):
        symbol, words = who(step.entity, reg)
        lines.append(f"| {i} | {step_label(step, reg)} | {symbol} {words} | {say(step.template, reg)} |")
    if not usual_steps:
        lines.append(f"| — | — | — | {say(usual_detail, reg)} |")
    if any(s.action == "update_privacy" for s in usual_steps):
        lines += ["", "Step 1 applies only while WHOIS privacy is on, and only at TLDs that have a WHOIS privacy service."]
    lines += [
        "",
        GTLD_NOTE,
        "",
        "## TLDs with other steps",
        "",
        "Search this page for a TLD, such as `.se`. A TLD that isn't listed takes the steps above.",
        "",
        "| TLDs | Steps |",
        "| --- | --- |",
    ]
    for (steps, detail), tlds in sorted(groups.items(), key=lambda item: (-len(item[1]), item[1][0])):
        lines.append(f"| {', '.join(kb_link(t, tld_types) for t in tlds)} | {chain(steps, detail, reg)} |")
    if not groups:
        lines.append("| — | Every TLD takes the steps above. |")

    per_tld = {row["tld"]: manage_cells(row, reg) for row in rows}
    usual = {a: most_common(c[a] for c in per_tld.values()) for _, a, _ in MANAGE_ACTIONS}
    lines += [
        "",
        "## Managing a connected domain",
        "",
        f"Until it moves, what OpusDNS can do with a domain you hold at {reg.name}:",
        "",
        "| Action | Who | Note |",
        "| --- | --- | --- |",
    ]
    for _, action, label in MANAGE_ACTIONS:
        symbol, words, note = at_most_tlds(per_tld, action, usual[action], reg)
        lines.append(f"| {label} | {symbol} {words} | {note} |")
    differing = []
    for tld in sorted(per_tld):
        diffs = []
        for _, action, label in MANAGE_ACTIONS:
            cell = per_tld[tld][action]
            if matters(cell, usual[action]):
                reason = say(cell.template, reg, short=True) if "{tld}" in cell.template else ""
                diffs.append(f"{WHO[cell.entity][0]} {label}" + (f": {reason}" if reason else ""))
        if diffs:
            differing.append(f"| {kb_link(tld, tld_types)} | {'<br>'.join(diffs)} |")
    if differing:
        lines += ["", "TLDs where this differs:", "", "| TLD | What differs |", "| --- | --- |", *differing]
    lines.append("")
    return "\n".join(lines)


def render_overview(data: dict) -> str:
    keys = sorted(data["registrars"], key=registrar_order)
    usual = {}
    uk = {}
    for key in keys:
        reg = REGISTRARS[key]
        flows = {row["tld"]: steps_of(row, reg) for row in data["registrars"][key]}
        usual[key] = {s.action: s.entity for s in most_common(flows.values())[0]}
        uk[key] = {s.action: s.entity for s in flows.get("uk", ((), ""))[0]}
    columns = [
        ("update_privacy", "WHOIS privacy off¹", usual),
        ("update_transfer_lock", "Remove the lock", usual),
        ("read_auth_code", "Get the auth code", usual),
        ("request_transfer", "Request", usual),
        ("approve_transfer_out", "Approve", usual),
        ("push_transfer_out", "`.uk` push", uk),
    ]
    lines = [
        "# Transfer to OpusDNS",
        "",
        "Moving a domain from another registrar to OpusDNS takes a few steps at that registrar, at "
        "the registry and at OpusDNS. Once you have [connected](/products/connected-registrars/connect) "
        "your account there, OpusDNS takes most of them for you; which ones depends on the registrar "
        "and on the TLD.",
        "",
        GTLD_NOTE,
        "",
        "Who takes the steps that depend on the registrar, at most TLDs:",
        "",
        LEGEND,
        "",
        "| Registrar | " + " | ".join(label for _, label, _ in columns) + " |",
        "| --- | " + " | ".join(":---:" for _ in columns) + " |",
    ]
    for k in keys:
        cells = [WHO[table[k][action]][0] if action in table[k] else "➖" for action, _, table in columns]
        lines.append(f"| [{REGISTRARS[k].name}]({ROUTE}/{REGISTRARS[k].slug}) | " + " | ".join(cells) + " |")
    lines += ["", "¹ Only while WHOIS privacy is on."]
    lines += [
        "",
        "Each registrar's page lists the TLDs whose steps differ, and what OpusDNS can do with a "
        "domain you hold there until it moves. See also "
        "[Move a connected domain to OpusDNS](/products/connected-registrars/transfer-to-opusdns).",
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
    unknown = set(data["registrars"]) - set(REGISTRARS)
    if unknown:
        raise SystemExit(f"unknown registrars {sorted(unknown)}: add them to REGISTRARS")
    args.output.mkdir(parents=True, exist_ok=True)
    for key, rows in data["registrars"].items():
        (args.output / f"{REGISTRARS[key].slug}.md").write_text(render_registrar(key, rows, data["tld_types"]), encoding="utf-8")
    (args.output / "index.md").write_text(render_overview(data), encoding="utf-8")
    update_config(args.config, list(data["registrars"]))


if __name__ == "__main__":
    main()
