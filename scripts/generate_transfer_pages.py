#!/usr/bin/env python3
"""Generate the Transfers pages from OpusDNS's registrar capability export.

The export is a JSON file: ``tld_types`` maps each TLD to ``ccTLD`` or
``gTLD``, and ``registrars`` maps each registrar a customer can connect to its
per-TLD answers: ``tld``, ``flows.transfer_to_opusdns`` (the steps of
transferring a domain from that registrar to OpusDNS) and ``actions`` (what
OpusDNS can do with a connected domain there). This script writes into
``scalar/content/transfers/`` an overview, ``patterns/`` with a page per
transfer pattern, and ``registrars/`` with a page per registrar. It refreshes the
``/transfers`` route and its tab in ``scalar/scalar.config.json``, writes
``scripts/tld_knowledge_base/transfer_pages.json``, from which the TLD Knowledge
Base links each TLD to its pattern, and ``scalar/content/connect/registrars.md``,
what OpusDNS can do with a connected domain at each registrar.

Every sentence of the export must be in SENTENCES, so a new one fails the run:
shown, it would reach the public docs unreviewed, and hidden, it can mean a step
or a limit the pages don't show yet.

    python scripts/generate_transfer_pages.py --input capabilities.json
"""

from __future__ import annotations

import argparse
import json
from xml.sax.saxutils import escape
import re
from collections import Counter, defaultdict
from dataclasses import dataclass
from pathlib import Path

import transfer_swimlanes as swim

REPO_ROOT = Path(__file__).resolve().parent.parent
DEFAULT_OUTPUT = REPO_ROOT / "scalar" / "content" / "transfers"
DEFAULT_CONFIG = REPO_ROOT / "scalar" / "scalar.config.json"
KNOWLEDGE_BASE = REPO_ROOT / "scalar" / "content" / "tld-knowledge-base"
ROUTE = "/transfers"
REGISTRAR_ROUTE = f"{ROUTE}/registrars"
PATTERN_ROUTE = f"{ROUTE}/patterns"
# What OpusDNS can do with a connected domain per registrar, in the Guides' Connected
# registrars group. Its nav entry is static: this script writes only the page.
MANAGING_PAGE = REPO_ROOT / "scalar" / "content" / "connect" / "registrars.md"
MANAGING_ROUTE = "/products/connected-registrars/registrars"
# A swimlane per pattern, served as /images/transfer-patterns/<slug>.svg.
SWIMLANES = REPO_ROOT / "scalar" / "content" / "assets" / "images" / "transfer-patterns"
SUPPORT_URL = "https://support.opusdns.com/"
# The Knowledge Base generator links each TLD to its transfer page from this file.
TRANSFER_PAGES_FILE = REPO_ROOT / "scripts" / "tld_knowledge_base" / "transfer_pages.json"
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
    "registrant": ("👤", "The holder, by email"),
    "registry": ("⚙️", "The registry"),
    None: ("➖", ""),
}

LEGEND_WORDS = {
    "✅": "OpusDNS does it for you",
    "↗️": "you do it at your registrar",
    "👤": "the domain's holder approves by email",
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
    "- Until 9 February 2027, a `.uk` domain is pushed to the new registrar's tag instead of requested.",
    "",
    "The [TLD Knowledge Base](/tld-knowledge-base) describes each TLD's rules, and each registrar's "
    "page lists the TLDs whose steps differ.",
])

# The steps that differ between registrars and TLDs. The others are OpusDNS's or
# the registry's, which the pattern pages describe, so the matrix shows only these.
# A step of the customer's or the holder's outside them fails the run.
MATRIX_COLUMNS = [
    ("Remove the lock", {"update_transfer_lock"}),
    ("Get the auth code", {"read_auth_code", "reset_auth_code"}),
    ("Approve", {"approve_transfer_out", "push_transfer_out"}),
]
MATRIX_ACTIONS = set().union(*(actions for _, actions in MATRIX_COLUMNS))

# The groups of the capabilities response, in its order, without its transfer group.
MANAGE_GROUPS = {"status": "Transfer lock", "dns": "Nameservers", "contacts": "Contacts", "privacy": "WHOIS privacy"}

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
        "OpusDNS can't see the lock at {r}, so it leaves it. Remove it at {r}.", ""),
    "OpusDNS reads the auth code at {r}.": ("OpusDNS reads the auth code at {r}.", ""),
    "Get the auth code at {r}.": ("Get the auth code at {r} and send it as `auth_code`.", ""),
    "Get a new auth code at {r}.": ("Get a new auth code at {r} and send it as `auth_code`.", ""),
    "OpusDNS sends the transfer to the {tld} registry.": ("OpusDNS sends the transfer to the registry.", ""),
    "OpusDNS books the domain and has it pushed. The {tld} registry gets no transfer request.": (
        "OpusDNS records the transfer and has the domain pushed to its tag. The registry gets no transfer request.", ""),
    "The {tld} registry tells {r} about the transfer.": ("The registry tells {r} about the transfer.", ""),
    "OpusDNS approves the transfer at {r}.": ("OpusDNS approves the transfer at {r}.", ""),
    "Approve the transfer at {r}.": ("Approve the transfer at {r}.", ""),
    "The holder of the {tld} domain approves the transfer.": ("The holder of the domain approves the transfer by email.", ""),
    "{r} emails the domain's owner contact, who approves or declines the transfer. Without an answer, the registry completes it after the transfer time.": (
        "{r} emails the domain's holder, who approves or declines the transfer. Without an answer, the registry "
        "completes it after the pending period. At gTLDs, that is five days.", ""),
    "OpusDNS pushes the domain to its tag at {r}.": ("OpusDNS pushes the domain to its tag at {r}.", ""),
    "Push the domain to OpusDNS's tag at {r}.": ("Push the domain to OpusDNS's tag at {r}.", ""),
    "The {tld} registry moves the domain to OpusDNS.": ("The registry transfers the domain to OpusDNS.", ""),
    "The {tld} registry moves the domain to OpusDNS's tag.": ("The registry transfers the domain to OpusDNS's tag.", ""),
    "OpusDNS books the transfer and stops mirroring the domain from {r}.": (
        "OpusDNS completes the transfer in your account and stops syncing the domain from {r}.", ""),
    "OpusDNS books the transfer, sets the transfer lock and stops mirroring the domain from {r}.": (
        "OpusDNS completes the transfer in your account, sets the transfer lock and stops syncing the domain from {r}.", ""),
    # managing a connected domain
    "OpusDNS reads the transfer lock at {r}.": ("OpusDNS reads the transfer lock at {r}.", ""),
    "OpusDNS does not read the lock at {r}. Check it at {r}.": ("OpusDNS doesn't read the lock at {r}. Check it at {r}.", ""),
    "Reading the transfer lock through OpusDNS isn't verified at {r} yet. Check it at {r}.": (
        "Check the transfer lock at {r}.", ""),
    "OpusDNS changes the lock through the {r} API.": ("OpusDNS sets and removes the lock through the {r} API.", ""),
    "OpusDNS cannot change the transfer lock at {r}. Change it at {r}.": (
        "OpusDNS can't change the transfer lock at {r}. Change it at {r}.", ""),
    "{tld} has no transfer lock.": ("The TLD has no transfer lock.", "no transfer lock"),
    "OpusDNS reads the nameservers in each sync.": ("OpusDNS reads the nameservers in each sync.", ""),
    "OpusDNS changes the nameservers through the {r} API.": ("OpusDNS changes the nameservers through the {r} API.", ""),
    "OpusDNS cannot change the nameservers at {r}. Change them at {r}.": (
        "OpusDNS can't change the nameservers at {r}. Change them at {r}.", ""),
    "OpusDNS reads the contacts in each sync.": ("OpusDNS reads the contacts in each sync.", ""),
    "OpusDNS cannot change the registrant at {r}. Change it at {r}.": ("OpusDNS can't change the registrant at {r}. Change it at {r}.", ""),
    "OpusDNS cannot change the registrant on connected domains yet. Change it at {r}.": (
        "OpusDNS can't change the registrant of a connected domain. Change it at {r}.", ""),
    "Changing the registrant through OpusDNS isn't verified at {r} yet. Change it at {r}.": (
        "Change the registrant at {r}.", ""),
    "OpusDNS cannot change the other contacts at {r}. Change them at {r}.": (
        "OpusDNS can't change the other contacts at {r}. Change them at {r}.", ""),
    "OpusDNS cannot change the other contacts on connected domains yet. Change them at {r}.": (
        "OpusDNS can't change the other contacts of a connected domain. Change them at {r}.", ""),
    "{tld} has only the registrant. Change it with update_registrant.": ("The TLD has only the registrant.", "only the registrant"),
    "OpusDNS cannot remove a contact from a connected domain. Remove it at {r}.": (
        "OpusDNS can't remove a contact from a connected domain. Remove it at {r}.", ""),
    "{tld} requires every contact it has.": ("The TLD requires every contact it has.", "every contact is required"),
    "{tld} has only the registrant, and it is required.": ("The TLD has only the registrant, and it is required.", "only the registrant, which is required"),
    "OpusDNS has no access to WHOIS privacy at {r} yet. Check it at {r}.": (
        "OpusDNS has no access to WHOIS privacy at {r}. Check it at {r}.", ""),
    "OpusDNS has no access to WHOIS privacy at {r} yet. Change it at {r}.": (
        "OpusDNS has no access to WHOIS privacy at {r}. Change it at {r}.", ""),
    "{tld} has no privacy service.": ("The TLD has no WHOIS privacy service.", "no WHOIS privacy service"),
}

# --- transfer patterns -------------------------------------------------------


@dataclass(frozen=True)
class Pattern:
    slug: str
    title: str
    note: str = ""  # said after the intro the key gives


# Keyed by the registry's side of a transfer: whether the registrar sets the auth code
# (TLD spec: authinfo_set_by_registrar), whether the transfer waits for the losing
# side's approval, and whether the registry has a transfer lock. The intro and the steps
# follow from the key. A key without a name fails the run.
PATTERNS = {
    ("registrar", True, True): Pattern("gtlds", "gTLDs and most ccTLDs",
                                       "gTLDs follow ICANN's rules for this, and most ccTLDs work the same way."),
    ("registrar", True, False): Pattern("auth-code-approval", "Auth code and approval"),
    ("registrar", False, True): Pattern("unlock-auth-code", "Unlock and auth code"),
    ("registrar", False, False): Pattern("auth-code", "Auth code only"),
    ("registry", False, False): Pattern("registry-auth-code", "Auth code set by the registry"),
    ("registry", False, True): Pattern("unlock-registry-auth-code", "Unlock and auth code set by the registry"),
    ("registry", True, True): Pattern("unlock-registry-auth-code-approval", "Unlock, auth code set by the registry, and approval"),
    ("none", True, False): Pattern("no-auth-code", "No auth code, with approval"),
    "push": Pattern("push", "Push to a tag"),
}

# What a TLD without transfers does instead, until the TLD specs carry a reference for it.
TLD_NOTES = {
    "is": "ISNIC works without registrars. A .is domain changes provider when its contacts change at ISNIC. "
          "See [ISNIC's FAQ](https://www.isnic.is/en/faq).",
}

# A registry's announced change, by TLD: the pattern it has until then, and the note its
# pages show. Once the export shows the change, the run fails until the note goes.
UPCOMING = {
    "uk": ("push", "From 9 February 2027, Nominet replaces the push with an auth code. Your current registrar then "
                   "gives you a Transfer Authorisation Code, valid for 14 days. With it, the transfer completes at once. "
                   "See [Nominet's FAQ](https://registrars.nominet.uk/registry/dot-uk/faq/)."),
}

# Named first where a page names a few gTLDs as examples.
EXAMPLE_TLDS = ("com", "net", "org")


def pattern_key(row: dict) -> object:
    """The registry's side of a transfer, from the capabilities' specification:
    None where the TLD has no transfers."""
    policies = row["specification"]["transfer_policies"]
    if not policies.get("supported", True):
        return None
    if row["actions"]["transfer"]["push_transfer_out"]["supported_by_registry"]:
        return "push"
    if not policies.get("authinfo_required"):
        code = "none"
    else:
        code = "registrar" if policies.get("authinfo_set_by_registrar") else "registry"
    lock = bool((policies.get("transfer_lock_policy") or {}).get("supported_by_registry"))
    return code, policies.get("transfer_ack") not in (None, "none"), lock


@dataclass(frozen=True)
class RegistrySide:
    key: object  # into PATTERNS, None where the TLD has no transfers
    lock: bool
    holder: bool  # the domain's holder approves, not the registrar (TLD spec: transfer_ack registrant)


def registry_side(row: dict) -> RegistrySide:
    policies = row["specification"]["transfer_policies"]
    lock = bool((policies.get("transfer_lock_policy") or {}).get("supported_by_registry"))
    return RegistrySide(pattern_key(row), lock, policies.get("transfer_ack") == "registrant")


def registry_facts(data: dict) -> dict[str, RegistrySide]:
    """Each TLD's registry side. It is the registry's, so every registrar must report the same."""
    found: dict[str, set[RegistrySide]] = defaultdict(set)
    for rows in data["registrars"].values():
        for row in rows:
            found[row["tld"]].add(registry_side(row))
    split = sorted(tld for tld, sides in found.items() if len(sides) > 1)
    if split:
        raise SystemExit(f"registrars disagree on the registry's side of {split}")
    facts = {tld: next(iter(sides)) for tld, sides in found.items()}
    done = sorted(tld for tld, (until, _) in UPCOMING.items() if tld in facts and facts[tld].key != until)
    if done:
        raise SystemExit(f"the export shows the announced change of {done}: remove it from UPCOMING")
    unknown = {side.key for side in facts.values() if side.key is not None and side.key not in PATTERNS}
    if unknown:
        raise SystemExit(f"no pattern wording for {sorted(map(str, unknown))}: add it to PATTERNS")
    return facts


def ordered_patterns(facts: dict[str, RegistrySide]) -> list[tuple[Pattern, list[str]]]:
    """The patterns the export uses, the most common first, each with its TLDs."""
    tlds: dict[object, list[str]] = defaultdict(list)
    for tld in sorted(facts):
        if facts[tld].key is not None:
            tlds[facts[tld].key].append(tld)
    return [(PATTERNS[key], found) for key, found in by_size(tlds)]


# Who approves, by whether the TLDs' holders do: none, all, or some of them.
APPROVERS = {
    "registrar": ("Your current registrar can then approve or deny the transfer.",
                  "Your current registrar approves or denies the transfer. Some registrars ask the domain's holder by email."),
    "holder": ("The domain's holder then approves or denies the transfer by email.",
               "The domain's holder approves or denies the transfer by email."),
    "either": ("Your current registrar or the domain's holder then approves or denies the transfer, depending on the TLD.",
               "Your current registrar or the domain's holder approves or denies the transfer, depending on the TLD."),
}


def approver(holders: list[bool]) -> str:
    return "holder" if all(holders) else "either" if any(holders) else "registrar"


def pattern_intro(key: object, pattern: Pattern, who: str) -> str:
    if key == "push":
        return "Your current registrar pushes the domain to OpusDNS's registrar tag. There is no auth code and no approval."
    code, approval, lock = key
    sentences = [{
        "registrar": "Your current registrar gives you the auth code. OpusDNS requests the transfer with it.",
        "registry": "The registry generates the auth code. Your current registrar can't choose it. OpusDNS requests the transfer with it.",
        "none": "These TLDs need no auth code. OpusDNS requests the transfer.",
    }[code]]
    sentences.append(APPROVERS[who][0] if approval else "The registry completes the transfer without an approval.")
    if not lock:
        sentences.append("The registry has no transfer lock.")
    if pattern.note:
        sentences.append(pattern.note)
    return " ".join(sentences)


def pattern_steps(key: object, lock: bool, gtld: bool, who: str) -> list[str]:
    steps = ["Remove the transfer lock at your current registrar."] if lock else []
    if key == "push":
        return steps + ["OpusDNS records the transfer.",
                        "Your current registrar pushes the domain to OpusDNS's registrar tag, `OPUSDNS`.",
                        "The registry moves the domain to OpusDNS."]
    code, approval, _ = key
    if code == "registrar":
        steps.append("Get the auth code from your current registrar.")
    elif code == "registry":
        steps.append("Get the auth code from your current registrar or the registry, depending on the TLD.")
    steps.append("OpusDNS requests the transfer at the registry" + (" with the auth code." if code != "none" else "."))
    if not approval:
        return steps + ["The registry completes the transfer without an approval."]
    approve = APPROVERS[who][1]
    if gtld:
        approve += (" At gTLDs, the registry completes it after five days without an answer. "
                    "See [How a gTLD transfer works](/transfers/overview#how-a-gtld-transfer-works).")
    return steps + [approve]


def and_join(items: list[str]) -> str:
    return items[0] if len(items) == 1 else ", ".join(items[:-1]) + " and " + items[-1]


def examples(tlds: list[str], link, count: int = 3) -> str:
    known = [t for t in EXAMPLE_TLDS if t in tlds]
    picked = (known + [t for t in sorted(tlds) if t not in known])[:count]
    return and_join([link(t) for t in picked])


def registrar_order(key: str) -> str:
    return REGISTRARS[key].name.lower()


def kb_path(tld: str, tld_types: dict[str, str]) -> str | None:
    folder = "cctlds" if tld_types.get(tld) == "ccTLD" else "gtlds"
    return f"/tld-knowledge-base/{folder}/{tld}" if (KNOWLEDGE_BASE / folder / f"{tld}.md").exists() else None


def registry_of(tld: str, tld_types: dict[str, str]) -> tuple[str, str | None] | None:
    """The TLD's registry and its website, from its Knowledge Base page, which the
    TLD specs generate. None where the TLD has no page there."""
    path = kb_path(tld, tld_types)
    if path is None:
        return None
    page = (KNOWLEDGE_BASE / f"{path.removeprefix('/tld-knowledge-base/')}.md").read_text(encoding="utf-8")
    name = re.search(r"(?m)^\| Registry \| (.+?) \|$", page)
    if name is None:
        raise SystemExit(f"the Knowledge Base page of .{tld} names no registry")
    site = re.search(r"(?m)^\| Registry Website \| \[[^\]]*\]\(([^)]+)\) \|$", page)
    return name[1], site[1] if site else None


def link_tlds(text: str, tld_types: dict[str, str]) -> str:
    """Each `.tld` of a written text as a link to its Knowledge Base page, where it has one."""
    return re.sub(r"`\.([a-z0-9][a-z0-9.-]*)`", lambda m: kb_link(m[1], tld_types) if kb_path(m[1], tld_types) else m[0], text)


def kb_link(tld: str, tld_types: dict[str, str]) -> str:
    path = kb_path(tld, tld_types)
    return f"[.{tld}]({path})" if path else f".{tld}"


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


@dataclass(frozen=True)
class Flow:
    steps: tuple[Step, ...]
    detail: str

    def cell(self, actions: set[str], reg: Registrar) -> str:
        step = next((s for s in self.steps if s.action in actions), None)
        if step is None:
            return "➖"
        symbol, words = WHO[step.entity]
        if step.optional():
            return f"{symbol} You, optional"
        words = words.replace("{r}", reg.name)
        if step.action == "reset_auth_code":
            return f"{symbol} {words} (a new one)"
        if step.action == "push_transfer_out":
            return f"{symbol} {words} (push)"
        return f"{symbol} {words}"

    def cells(self, reg: Registrar) -> tuple[str, ...]:
        """The privacy step has no column: it applies only while privacy is on,
        and only at TLDs with a privacy service, so whether a TLD is listed
        ignores it."""
        return tuple(self.cell(actions, reg) for _, actions in MATRIX_COLUMNS)


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


def at_most_tlds(per_tld: dict[str, dict[str, Cell]], action: str, usual: Cell, reg: Registrar) -> tuple[str, str]:
    symbol = WHO[usual.entity][0]
    note = say(usual.template, reg)
    if usual.entity is None and {c[action].entity for c in per_tld.values()} == {"customer", None}:
        # OpusDNS does it at no TLD: where the TLD has it, at the registrar.
        at_registrar = next(c[action] for c in per_tld.values() if c[action].entity == "customer")
        symbol = WHO["customer"][0]
        note = say(at_registrar.template, reg) + " Not every TLD allows it. See the [TLD Knowledge Base](/tld-knowledge-base)."
    return symbol, note


def no_transfer_line(reason: str, named: str, count: int) -> str:
    if reason != "no transfers":
        return f"{sentence_case(reason)} at {named}."
    if count == 1:
        return f"{named} has no transfer at its registry."
    return f"{named} have no transfer at their registries."


def sentence_case(text: str) -> str:
    return text[:1].upper() + text[1:]


def differences(per_tld: dict[str, dict[str, Cell]], actions: list[tuple[str, str]], usual: dict[str, Cell], reg: Registrar) -> dict[str, list[str]]:
    """What differs from the usual cells within one group, mapped to its TLDs.
    A reason all of the group's actions share, such as no transfer lock, is
    said once."""
    found: dict[str, list[str]] = defaultdict(list)
    for tld in sorted(per_tld):
        diffs = [(label, per_tld[tld][action]) for action, label in actions if matters(per_tld[tld][action], usual[action])]
        if not diffs:
            continue
        reasons = {say(cell.template, reg, short=True) for _, cell in diffs}
        entities = {cell.entity for _, cell in diffs}
        if len(diffs) == len(actions) and len(reasons) == 1 and "" not in reasons and len(entities) == 1:
            text = f"{WHO[entities.pop()][0]} {sentence_case(reasons.pop())}"
        else:
            parts = []
            for label, cell in diffs:
                reason = say(cell.template, reg, short=True)
                parts.append(f"{WHO[cell.entity][0]} {label}" + (f": {reason}" if reason else ""))
            text = "<br>".join(parts)
        found[text].append(tld)
    return found


# --- pages -------------------------------------------------------------------


def most_common(values):
    return Counter(values).most_common(1)[0][0]


def by_size(groups: dict) -> list:
    return sorted(groups.items(), key=lambda item: (-len(item[1]), item[1][0]))


def render_registrar(key: str, rows: list[dict], tld_types: dict[str, str]) -> str:
    reg = REGISTRARS[key]

    def link(tld: str) -> str:
        return kb_link(tld, tld_types)

    def tlds_of(tlds: list[str]) -> str:
        return ", ".join(map(link, tlds))

    flows = {row["tld"]: flow_of(row, reg, tld_types) for row in rows}
    for flow in flows.values():
        for step in flow.steps:
            say(step.template, reg)
        say(flow.detail, reg)
    with_steps = {tld: flow for tld, flow in flows.items() if flow.steps}
    if not with_steps:
        raise SystemExit(f"{reg.name}: no TLD has transfer steps")
    cells = {tld: flow.cells(reg) for tld, flow in with_steps.items()}
    for tld, flow in sorted(with_steps.items()):
        hidden = [s for s in flow.steps if s.action not in MATRIX_ACTIONS | {"update_privacy"} and s.entity in ("customer", "registrant")]
        if hidden:
            raise SystemExit(f"{reg.name}: .{tld} leaves {hidden[0].action} to someone, which the matrix doesn't show: "
                             "add a column to MATRIX_COLUMNS")
    by_pattern: dict[object, list[str]] = defaultdict(list)
    for row in sorted(rows, key=lambda r: r["tld"]):
        if row["tld"] in with_steps:
            by_pattern[pattern_key(row)].append(row["tld"])
    table, differing = [], defaultdict(list)
    for i, (key, tlds) in enumerate(by_size(by_pattern)):
        pattern, row_cells = PATTERNS[key], most_common(cells[t] for t in tlds)
        # Every other row lists its TLDs, so the first can stand for the rest.
        shown = f"Every other TLD, such as {examples(tlds, link)}" if i == 0 and len(by_pattern) > 1 else tlds_of(tlds)
        table.append(f"| [{pattern.title}]({PATTERN_ROUTE}/{pattern.slug}) | {shown} | " + " | ".join(row_cells) + " |")
        for tld in tlds:
            if cells[tld] != row_cells:
                differing[(key, cells[tld])].append(tld)
    no_transfers: dict[str, list[str]] = defaultdict(list)
    for tld in sorted(flows):
        if not flows[tld].steps:
            no_transfers[flows[tld].detail].append(tld)

    lines = [
        f"# Transfer from {reg.name}",
        "",
        f"To transfer a domain from {reg.name}, [connect](/products/connected-registrars/connect) your {reg.name} "
        "account and [request the transfer](/products/connected-registrars/transfer-to-opusdns). In the API, "
        f"{reg.name} is `{reg.api_value}`.",
        "",
        "## By transfer pattern",
        "",
        f"Your TLD's transfer pattern sets which steps a transfer has. {reg.name} sets which of them OpusDNS can "
        "take for you. ➖ marks a step your TLD doesn't have. Where the table shows ↗️ under Get the auth code, "
        "send the code as `auth_code` in your request.",
        "",
        "Search this page for your TLD. If it isn't listed exactly, it is in the first row.",
        "",
        "| Transfer pattern | TLDs | " + " | ".join(label for label, _ in MATRIX_COLUMNS) + " |",
        "| --- | --- | " + " | ".join(":---:" for _ in MATRIX_COLUMNS) + " |",
        *table,
    ]
    if differing:
        lines += ["", "These TLDs differ from their pattern's row:", "",
                  "| Transfer pattern | TLDs | " + " | ".join(label for label, _ in MATRIX_COLUMNS) + " |",
                  "| --- | --- | " + " | ".join(":---:" for _ in MATRIX_COLUMNS) + " |",
                  *(f"| [{PATTERNS[key].title}]({PATTERN_ROUTE}/{PATTERNS[key].slug}) | {tlds_of(tlds)} | " + " | ".join(found) + " |"
                    for (key, found), tlds in by_size(differing))]
    for detail, tlds in by_size(no_transfers):
        reason = say(detail, reg, short=True)
        if not reason:
            raise SystemExit(f"{detail!r}: a flow without steps needs a short reason in SENTENCES")
        lines += ["", no_transfer_line(reason, tlds_of(tlds), len(tlds))
                  + " See [Transfer to OpusDNS](/transfers/overview#transfer-patterns) for what to do instead."]
    pushed = sorted(tld for tld, flow in with_steps.items() if any(s.action == "push_transfer_out" for s in flow.steps))
    if pushed:
        lines += ["", f"At {tlds_of(pushed)}, the domain is pushed to OpusDNS's tag instead of approved."]
    if any(s.action == "update_privacy" for flow in flows.values() for s in flow.steps):
        lines += ["", f"At TLDs with a WHOIS privacy service, {reg.name} refuses to remove the lock while privacy "
                  f"is on. Turn it off at {reg.name} first."]

    lines += ["", f"Until you transfer a domain, OpusDNS can make some changes to it at {reg.name}. See "
              f"[What OpusDNS can do at {reg.name}]({MANAGING_ROUTE}#{anchor(reg.name)})."]
    lines.append("")
    return "\n".join(lines)


def pattern_context(tlds: list[str], data: dict, facts: dict[str, RegistrySide]) -> tuple[object, bool, bool, str]:
    """The pattern's key, and whether its TLDs have a lock, include gTLDs, and who approves."""
    gtld = any(data["tld_types"].get(t) == "gTLD" for t in tlds)
    locks = {facts[t].lock for t in tlds}
    if len(locks) > 1:
        # Only the push pattern's key leaves the lock out.
        raise SystemExit(f"the TLDs of the {facts[tlds[0]].key} pattern disagree on the transfer lock: add the lock to its key")
    return facts[tlds[0]].key, locks.pop(), gtld, approver([facts[t].holder for t in tlds])


def pattern_swimlane(pattern: Pattern, key: object, lock: bool, gtld: bool, who: str) -> tuple[str, str]:
    """The pattern's swimlane, in the lanes and colours of the gTLD one, and its text alternative."""
    steps, said, labels = [], [], {}
    if lock:
        steps.append(("reg", swim.AMBER, ["Unlock the", "domain"]))
        said.append("You unlock the domain at your current registrar.")
    if key == "push":
        steps += [("op", swim.BLUE, ["Record the", "transfer"]), ("reg", swim.PURPLE, ["Push the", "domain"]),
                  ("ry", swim.TEAL, ["Move the", "domain"])]
        said += ["OpusDNS records the transfer.", "Your current registrar pushes the domain to OpusDNS's tag.",
                 "The registry moves the domain."]
    else:
        code, approval, _ = key
        if code != "none":
            steps.append(("reg", swim.AMBER, ["Get the", "auth code"]))
            said.append("You get the auth code, which the registry sets." if code == "registry" else "You get the auth code.")
            if code == "registry":
                labels[len(steps) - 1] = "set by the registry"
        steps.append(("op", swim.BLUE, ["Request the", "transfer"]))
        said.append("OpusDNS requests the transfer at the registry.")
        if approval:
            steps.append(("ry", swim.TEAL, ["Transfer", "pending"]))
            if who == "holder":
                steps.append(("reg", swim.AMBER, ["Holder", "approves"]))
                said.append("The domain's holder approves or denies it by email.")
            else:
                steps.append(("reg", swim.PURPLE, ["Approve", "or deny"]))
                said.append("Your current registrar or the domain's holder approves or denies it." if who == "either"
                            else "Your current registrar approves or denies it.")
            notes = (["or the holder"] if who == "either" else []) + (["within 5 days at gTLDs"] if gtld else [])
            if notes:
                labels[len(steps) - 1] = ", ".join(notes)
            if gtld:
                said[-1] = said[-1][:-1] + ", within five days at gTLDs."
        steps.append(("ry", swim.TEAL, ["Transfer", "the domain"]))
        said.append("The registry transfers the domain." if approval else "The registry transfers the domain without an approval.")
    steps.append(("op", swim.BLUE, ["In your", "account"]))
    said.append("The domain is in your OpusDNS account.")
    holder = any(text == ["Holder", "approves"] for _, _, text in steps)
    you = any(colour == swim.AMBER and text != ["Holder", "approves"] for _, colour, text in steps)
    amber = "You or the domain's holder" if holder and you else "The domain's holder" if holder else "You"
    names = {swim.AMBER: amber, swim.PURPLE: "Your current registrar", swim.TEAL: "The registry", swim.BLUE: "OpusDNS"}
    used = {colour for _, colour, _ in steps}
    legend = [(colour, name) for colour, name in names.items() if colour in used]
    alt = "Swimlane in three lanes: your current registrar, the registry and OpusDNS. " + " ".join(said)
    labels = {i: escape(label) for i, label in labels.items()}
    return swim.svg(escape(f"{pattern.title}: a transfer to OpusDNS"), escape(alt), swim.LANES, steps, legend, None, labels), alt


def render_pattern(pattern: Pattern, tlds: list[str], data: dict, facts: dict[str, RegistrySide]) -> str:
    tld_types = data["tld_types"]
    key, lock, gtld, who = pattern_context(tlds, data, facts)

    def link(tld: str) -> str:
        return kb_link(tld, tld_types)

    gtlds = [t for t in tlds if tld_types.get(t) == "gTLD"]
    cctlds = [t for t in tlds if t not in gtlds]
    named = [f"{len(gtlds)} gTLDs, such as {examples(gtlds, link)}" if len(gtlds) > 20 else ", ".join(map(link, gtlds))] if gtlds else []
    if cctlds:
        named.append(("these ccTLDs: " if gtlds else "") + ", ".join(map(link, cctlds)))
    lines = [f"# {pattern.title}", "", pattern_intro(key, pattern, who)]
    for tld in (t for t in tlds if t in UPCOMING):
        lines += ["", "> [!NOTE]", f"> {link(tld)}: {UPCOMING[tld][1]}"]
    _, alt = pattern_swimlane(pattern, key, lock, gtld, who)
    lines += ["", f"![{alt}](/images/{SWIMLANES.name}/{pattern.slug}.svg)"]
    steps = pattern_steps(key, lock, gtld, who)
    lines += ["", "## Steps", "", *[f"{i}. {step}" for i, step in enumerate(steps, 1)]]
    lines += ["", "Which of these steps OpusDNS takes for you depends on your registrar. Its page in "
              "[Your registrar](/transfers/overview#your-registrar) shows them."]
    lines += ["", "## TLDs", "", sentence_case(", and ".join(named)) + ".", "",
              "Each TLD links its page in the TLD Knowledge Base, with its transfer rules, such as its transfer lock "
              "and how long a transfer takes."]
    by_registry: dict[str, list[str]] = defaultdict(list)
    sites: dict[str, list[str]] = defaultdict(list)
    for tld in tlds:
        registry = registry_of(tld, tld_types)
        if registry:
            by_registry[registry[0]].append(tld)
            if registry[1]:
                sites[registry[0]].append(registry[1])
    if by_registry:
        lines += ["", "## Registries", "", "The registries of these TLDs:", ""]
        for name, found in sorted(by_registry.items(), key=lambda item: (-len(item[1]), item[0].lower())):
            shown = ", ".join(map(link, found[:5])) + (f" and {len(found) - 5} more" if len(found) > 5 else "")
            # One registry can name a website per TLD: the one most of them name.
            lines.append(f"- {f'[{name}]({most_common(sites[name])})' if sites[name] else name}: {shown}")
    lines.append("")
    return "\n".join(lines)


def anchor(heading: str) -> str:
    """The id Scalar gives a heading of letters, digits and spaces."""
    return re.sub(r"[^a-z0-9]+", "-", heading.lower()).strip("-")


def render_managing(data: dict) -> str:
    tld_types = data["tld_types"]
    keys = sorted(data["registrars"], key=registrar_order)
    per = {k: {row["tld"]: manage_cells(row, REGISTRARS[k]) for row in data["registrars"][k]} for k in keys}
    usual = {k: {a: most_common(c[a] for c in per[k].values()) for _, a, _ in MANAGE_ACTIONS} for k in keys}
    shown = {k: {a: at_most_tlds(per[k], a, usual[k][a], REGISTRARS[k]) for _, a, _ in MANAGE_ACTIONS} for k in keys}
    exceptions = {a for k in keys for _, a, _ in MANAGE_ACTIONS if any(matters(c[a], usual[k][a]) for c in per[k].values())}
    same = [(a, label) for _, a, label in MANAGE_ACTIONS if len({shown[k][a][0] for k in keys}) == 1 and a not in exceptions]
    varying = [(a, label) for _, a, label in MANAGE_ACTIONS if (a, label) not in same]
    lines = [
        "# What OpusDNS can do per registrar",
        "",
        "Until you transfer a domain to OpusDNS, it stays at your current registrar. OpusDNS syncs it from there "
        "and makes some changes there for you. This page shows which ones, for each registrar.",
        "",
        legend({shown[k][a][0] for k in keys for _, a, _ in MANAGE_ACTIONS}
               | {WHO[c[a].entity][0] for k in keys for c in per[k].values() for _, a, _ in MANAGE_ACTIONS} | {"↗️"}),
    ]
    if same:
        lines += ["", "## At every registrar", "", *[f"- {shown[keys[0]][a][0]} {label}" for a, label in same]]
    if varying:
        lines += ["", "## Depends on the registrar", "",
                  "| Registrar | " + " | ".join(label for _, label in varying) + " |",
                  "| --- | " + " | ".join(":---:" for _ in varying) + " |",
                  *[f"| [{REGISTRARS[k].name}](#{anchor(REGISTRARS[k].name)}) | " + " | ".join(shown[k][a][0] for a, _ in varying) + " |"
                    for k in keys]]
    for k in keys:
        reg = REGISTRARS[k]
        lines += ["", f"## {reg.name}", "",
                  f"To transfer a domain from {reg.name}, see [Transfer from {reg.name}]({REGISTRAR_ROUTE}/{reg.slug})."]
        for group, title in MANAGE_GROUPS.items():
            actions = [(action, label) for g, action, label in MANAGE_ACTIONS if g == group]
            lines += ["", f"**{title}**", "", "| Action | Note |", "| --- | --- |"]
            lines += [f"| {shown[k][action][0]} {label} | {shown[k][action][1]} |" for action, label in actions]
            found = differences(per[k], actions, usual[k], reg)
            if found:
                lines += ["", "TLDs where this differs:", "", "| TLDs | What differs |", "| --- | --- |"]
                lines += [f"| {', '.join(kb_link(t, tld_types) for t in tlds)} | {text} |" for text, tlds in by_size(found)]
    lines.append("")
    return "\n".join(lines)


def render_overview(data: dict, facts: dict[str, RegistrySide]) -> str:
    keys = sorted(data["registrars"], key=registrar_order)
    without = sorted(tld for tld, side in facts.items() if side.key is None)
    tld_types = data["tld_types"]
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
        link_tlds(ICANN_TEXT, tld_types),
        "",
        "## ccTLDs",
        "",
        link_tlds(CCTLD_TEXT, tld_types),
        "",
        "## Transfer patterns",
        "",
        "TLDs with the same steps share a transfer pattern:",
        "",
        *[f"- [{pattern.title}]({PATTERN_ROUTE}/{pattern.slug}): {len(tlds)} TLD{'' if len(tlds) == 1 else 's'}" for pattern, tlds in ordered_patterns(facts)],
        *(["", " ".join([no_transfer_line("no transfers", ", ".join(kb_link(t, tld_types) for t in without), len(without)),
                          *(TLD_NOTES[t] for t in without if t in TLD_NOTES),
                          f"To move such a domain to OpusDNS, contact [OpusDNS support]({SUPPORT_URL})."])] if without else []),
        "",
        "## With a connected account",
        "",
        "If you have [connected](/products/connected-registrars/connect) your account at the current "
        "registrar, you can usually request the transfer without the auth code. OpusDNS then takes the "
        "steps at your current registrar that the registrar's API allows:",
        "",
        "1. It checks the domain's statuses. If one blocks the transfer, it stops before it changes "
        "anything.",
        "2. It removes the transfer lock, where the registrar shows it.",
        "3. It gets the auth code, where the registrar hands it out.",
        "4. It approves the pending transfer, where the registrar lets it.",
        "",
        "If the request fails before the registry has it, OpusDNS sets the lock again.",
        "",
        "See [Transfer a connected domain to OpusDNS](/products/connected-registrars/transfer-to-opusdns) "
        "for more details.",
        "",
        "> [!WARNING]",
        "> **Some steps stay with you.** The [page for your registrar](#your-registrar) in these docs "
        "lists them. Read it before you start a transfer. Typical cases are:",
        ">",
        "> - A lock that OpusDNS can't see or can't remove through the registrar's API.",
        "> - A setting at the registrar that blocks the transfer.",
        "> - An auth code that the registrar's API doesn't hand out.",
        "> - An approval that the registrar's API can't give. Sometimes a third party takes part in "
        "it. For example, the domain's holder answers an email from the registrar.",
        ">",
        "> Your registrar's own documentation explains how to take these steps there.",
        "",
        "## Your registrar",
        "",
        "Each registrar has its own page in these docs. It shows which steps OpusDNS takes there and at "
        "which TLDs they differ. [What OpusDNS can do per registrar](/products/connected-registrars/registrars) "
        "shows what OpusDNS can do with your domain there until you transfer it.",
        "",
        *[f"- [{REGISTRARS[k].name}]({REGISTRAR_ROUTE}/{REGISTRARS[k].slug})" for k in keys],
        "",
    ]
    return "\n".join(lines)


def nav_page(title: str, filepath: str, **extra) -> dict:
    return {"type": "page", "title": title, **extra, "filepath": filepath, "showInSidebar": True}


def update_config(config_path: Path, keys: list[str], patterns: list[Pattern]) -> bool:
    raw = config_path.read_text(encoding="utf-8")
    config = json.loads(raw)
    navigation = config["navigation"]
    tabs = navigation["tabs"]
    if not any(tab.get("to") == ROUTE for tab in tabs):
        after = next(i for i, tab in enumerate(tabs) if tab.get("to") == "/tld-knowledge-base")
        tabs.insert(after + 1, dict(TAB))
    by_pattern = {f"/{pattern.slug}": nav_page(pattern.title, f"content/transfers/patterns/{pattern.slug}.md") for pattern in patterns}
    navigation["routes"][ROUTE] = {
        "type": "group",
        "title": TAB["title"],
        "icon": TAB["icon"],
        "children": {
            "/overview": nav_page("Transfer to OpusDNS", "content/transfers/index.md", icon=TAB["icon"]),
            PATTERN_ROUTE.removeprefix(ROUTE): {"type": "group", "title": "Transfer patterns", "children": by_pattern},
            REGISTRAR_ROUTE.removeprefix(ROUTE): {
                "type": "group",
                "title": "Registrars",
                "children": {
                    f"/{REGISTRARS[key].slug}": nav_page(REGISTRARS[key].name, f"content/transfers/registrars/{REGISTRARS[key].slug}.md")
                    for key in sorted(keys, key=registrar_order)
                },
            },
        },
    }
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
    parser.add_argument("--tld-pages-file", type=Path, default=TRANSFER_PAGES_FILE)
    parser.add_argument("--managing-page", type=Path, default=MANAGING_PAGE)
    parser.add_argument("--swimlanes", type=Path, default=SWIMLANES)
    args = parser.parse_args(argv)
    data = json.loads(args.input.read_text(encoding="utf-8"))
    data["registrars"] = {k: v for k, v in data["registrars"].items() if k not in EXCLUDED}
    unknown = set(data["registrars"]) - set(REGISTRARS)
    if unknown:
        raise SystemExit(f"unknown registrars {sorted(unknown)}: add them to REGISTRARS")
    every = set().union(*({row["tld"] for row in rows} for rows in data["registrars"].values()))
    for key, rows in data["registrars"].items():
        missing = sorted(every - {row["tld"] for row in rows})
        if missing:
            raise SystemExit(f"{REGISTRARS[key].name}: the export has no answer for {missing}, so its page can't say \"every other TLD\"")
    facts = registry_facts(data)
    patterns = ordered_patterns(facts)
    pages = {"index.md": render_overview(data, facts)}
    swimlanes: dict[str, str] = {}
    for pattern, tlds in patterns:
        pages[f"patterns/{pattern.slug}.md"] = render_pattern(pattern, tlds, data, facts)
        swimlanes[f"{pattern.slug}.svg"] = pattern_swimlane(pattern, *pattern_context(tlds, data, facts))[0]
    for key, rows in data["registrars"].items():
        pages[f"registrars/{REGISTRARS[key].slug}.md"] = render_registrar(key, rows, data["tld_types"])
    for name, text in pages.items():
        (args.output / name).parent.mkdir(parents=True, exist_ok=True)
        (args.output / name).write_text(text, encoding="utf-8")
    links = {
        tld: {"title": PATTERNS[side.key].title, "path": f"{PATTERN_ROUTE}/{PATTERNS[side.key].slug}"}
        for tld, side in sorted(facts.items()) if side.key is not None
    }
    args.managing_page.write_text(render_managing(data), encoding="utf-8")
    args.swimlanes.mkdir(parents=True, exist_ok=True)
    for name, text in swimlanes.items():
        (args.swimlanes / name).write_text(text, encoding="utf-8")
    args.tld_pages_file.write_text(json.dumps(links, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    update_config(args.config, list(data["registrars"]), [pattern for pattern, _ in patterns])
    stale = sorted(str(p.relative_to(args.output)) for p in args.output.rglob("*.md") if str(p.relative_to(args.output)) not in pages)
    stale += sorted(p.name for p in args.swimlanes.glob("*.svg") if p.name not in swimlanes)
    if stale:
        raise SystemExit(f"pages no longer generated, remove them: {stale}")


if __name__ == "__main__":
    main()
