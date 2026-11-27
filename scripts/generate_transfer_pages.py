#!/usr/bin/env python3
"""Generate the Transfers pages from OpusDNS's registrar capability export.

The export is a JSON file: ``tld_types`` maps each TLD to ``ccTLD`` or
``gTLD``, and ``registrars`` maps each registrar a customer can connect to its
per-TLD answers: ``tld``, ``flows.transfer_to_opusdns`` (the steps of
transferring a domain from that registrar to OpusDNS) and ``actions`` (what
OpusDNS can do with a connected domain there). This script writes into
``scalar/content/transfers/`` an overview, ``patterns/`` with a page per
transfer pattern and per TLD, and ``registrars/`` with a page per registrar. It
refreshes the ``/transfers`` route and its tab in ``scalar/scalar.config.json``
and writes ``scripts/tld_knowledge_base/transfer_pages.json``, from which the
TLD Knowledge Base links each TLD to its transfer page.

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
REGISTRAR_ROUTE = f"{ROUTE}/registrars"
PATTERN_ROUTE = f"{ROUTE}/patterns"
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

REGISTRAR_PAGE_NOTE = (
    f"For gTLDs, these steps follow ICANN's [Transfer Policy]({ICANN_POLICY}). Each TLD with transfers follows one of the "
    f"[transfer patterns]({ROUTE}/overview#transfer-patterns)."
)

# The steps that differ between registrars and TLDs. A TLD's other steps are
# the usual ones or fewer, such as no notification where nothing is approved,
# so the matrix shows only these. The run fails where that stops holding.
MATRIX_COLUMNS = [
    ("Remove the lock", {"update_transfer_lock"}),
    ("Get the auth code", {"read_auth_code", "reset_auth_code"}),
    ("Approve", {"approve_transfer_out", "push_transfer_out"}),
]
MATRIX_ACTIONS = set().union(*(actions for _, actions in MATRIX_COLUMNS))

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

# At a gTLD the registry completes the transfer after five days without an
# approval (ICANN Transfer Policy I.A.3.5, I.A.6.2), so the customer's
# approval is optional.
OPTIONAL_APPROVAL = "Optional: approve it at {r} to finish sooner. Otherwise the registry completes the transfer after five days."


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
    ("registry", True, True): Pattern("registry-auth-code-approval", "Unlock, auth code set by the registry, and approval"),
    ("none", True, False): Pattern("no-auth-code", "No auth code, with approval"),
    "push": Pattern("push", "Push to a tag"),
}

# What a TLD without transfers does instead, until the TLD specs carry a reference for it.
TLD_NOTES = {
    "is": "ISNIC works without registrars. A `.is` domain changes provider when its admin contact changes at "
          "ISNIC. See [ISNIC's FAQ](https://www.isnic.is/en/faq).",
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
    lock = bool(policies.get("transfer_lock_policy", {}).get("supported_by_registry"))
    return code, policies.get("transfer_ack") not in (None, "none"), lock


@dataclass(frozen=True)
class RegistrySide:
    key: object  # into PATTERNS, None where the TLD has no transfers
    lock: bool
    renews: bool
    deny: bool  # the losing side can deny a transfer, also where nobody approves it
    days: int | None  # the transfer time, None where the spec gives it in other units


def registry_side(row: dict) -> RegistrySide:
    policies = row["specification"]["transfer_policies"]
    lock = bool(policies.get("transfer_lock_policy", {}).get("supported_by_registry"))
    days = re.fullmatch(r"(\d+)D", str(policies.get("transfer_time") or ""))
    deny = policies.get("transfer_nack") not in (None, "none")
    return RegistrySide(pattern_key(row), lock, bool(policies.get("transfer_renews_domain")), deny, int(days[1]) if days else None)


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


def tld_path(tld: str, key: object) -> str:
    """The TLD's transfer page: below its pattern, or on its own where it has no transfers."""
    return f"{PATTERN_ROUTE}/{PATTERNS[key].slug}/{tld}" if key is not None else f"{PATTERN_ROUTE}/{tld}"


def pattern_intro(key: object, pattern: Pattern) -> str:
    if key == "push":
        return "Your current registrar pushes the domain to OpusDNS's registrar tag. There is no auth code and no approval."
    code, approval, lock = key
    sentences = [{
        "registrar": "Your current registrar gives you the auth code. OpusDNS requests the transfer with it.",
        "registry": "The registry generates the auth code. Your current registrar can't choose it. OpusDNS requests the transfer with it.",
        "none": "These TLDs need no auth code. OpusDNS requests the transfer.",
    }[code]]
    sentences.append("Your current registrar can then approve or deny the transfer." if approval
                     else "The registry completes the transfer without an approval.")
    if not lock:
        sentences.append("The registry has no transfer lock.")
    if pattern.note:
        sentences.append(pattern.note)
    return " ".join(sentences)


def pattern_steps(key: object, lock: bool, gtld: bool) -> list[str]:
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
    approve = "Your current registrar approves or denies the transfer. Some registrars ask the domain's holder by email."
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

    def label(self, reg: Registrar) -> str:
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
        return f"{named} has no transfer at its registry. Its page explains what to do instead."
    return f"{named} have no transfer at their registries. Their pages explain what to do instead."


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


def registrar_intro(usual: Flow, reg: Registrar) -> str:
    """What the registrar's usual steps leave to the customer, before and after the request."""
    lock, code, approve = (next((s for s in usual.steps if s.action in actions), None) for _, actions in MATRIX_COLUMNS)
    first, by_opusdns = [], []
    if lock and lock.entity == "customer":
        first.append(f"remove the transfer lock at {reg.name}")
    elif lock and lock.entity == "opusdns":
        by_opusdns.append("removes the transfer lock")
    if code and code.entity == "customer":
        first.append(f"get the auth code at {reg.name}")
    elif code and code.entity == "opusdns":
        by_opusdns.append("gets the auth code")
    if approve and approve.entity == "opusdns":
        by_opusdns.append("pushes the domain to its tag" if approve.action == "push_transfer_out" else "approves the transfer")
    sentences = [f"At most TLDs, first {and_join(first)}."] if first else []
    request = "[request the transfer](/products/connected-registrars/transfer-to-opusdns)"
    if code and code.entity == "customer":
        request += " with the code as `auth_code`"
    connect = "[{}onnect](/products/connected-registrars/connect)"
    sentences.append(f"{'Then ' + connect.format('c') if first else connect.format('C')} your {reg.name} account and {request}.")
    if by_opusdns:
        sentences.append(f"{'OpusDNS' if first else 'At most TLDs, OpusDNS then'} {and_join(by_opusdns)} at {reg.name}.")
    if code and code.entity == "opusdns":
        sentences.append("Leave out `auth_code` in the request.")
    if approve and approve.entity == "registrant":
        sentences.append(f"{reg.name} emails the domain's holder, who approves the transfer.")
    elif approve and approve.optional():
        sentences.append(f"At gTLDs, you can approve the transfer at {reg.name} to finish sooner.")
    elif approve and approve.entity == "customer":
        sentences.append(f"Approve the transfer at {reg.name}.")
    sentences.append(f"In the API, {reg.name} is `{reg.api_value}`.")
    return " ".join(sentences)


def render_registrar(key: str, rows: list[dict], tld_types: dict[str, str]) -> str:
    reg = REGISTRARS[key]

    paths = {row["tld"]: tld_path(row["tld"], pattern_key(row)) for row in rows}

    def link(tld: str) -> str:
        return f"[.{tld}]({paths[tld]})"

    def tlds_of(tlds: list[str]) -> str:
        return ", ".join(map(link, tlds))

    flows = {row["tld"]: flow_of(row, reg, tld_types) for row in rows}
    for flow in flows.values():
        for step in flow.steps:
            step.note(reg)
        say(flow.detail, reg)
    per_tld = {row["tld"]: manage_cells(row, reg) for row in rows}
    with_steps = {tld: flow for tld, flow in flows.items() if flow.steps}
    if not with_steps:
        raise SystemExit(f"{reg.name}: no TLD has transfer steps")
    cells = {tld: flow.cells(reg) for tld, flow in with_steps.items()}
    usual_cells = most_common(cells.values())
    usual = most_common(flow for tld, flow in with_steps.items() if cells[tld] == usual_cells)

    def outside_matrix(flow: Flow) -> set[tuple[str, str]]:
        return {(s.action, s.entity) for s in flow.steps if s.action not in MATRIX_ACTIONS | {"update_privacy"}}

    for tld, flow in sorted(with_steps.items()):
        # A TLD of the first row takes exactly the steps of the steps table.
        same = outside_matrix(flow) == outside_matrix(usual)
        if not (same if cells[tld] == usual_cells else outside_matrix(flow) <= outside_matrix(usual)):
            raise SystemExit(f"{reg.name}: .{tld} takes a step the matrix doesn't show: add a column to MATRIX_COLUMNS")
    by_pattern: dict[object, list[str]] = defaultdict(list)
    for row in sorted(rows, key=lambda r: r["tld"]):
        if row["tld"] in with_steps:
            by_pattern[pattern_key(row)].append(row["tld"])
    table, differing = [], defaultdict(list)
    for key, tlds in by_size(by_pattern):
        pattern, row_cells = PATTERNS[key], most_common(cells[t] for t in tlds)
        shown = tlds_of(tlds) if len(tlds) <= 6 else f"{len(tlds)}, such as {examples(tlds, link)}"
        table.append(f"| [{pattern.title}]({PATTERN_ROUTE}/{pattern.slug}) | {shown} | " + " | ".join(row_cells) + " |")
        for tld in tlds:
            if cells[tld] != row_cells:
                differing[cells[tld]].append(tld)
    no_transfers: dict[str, list[str]] = defaultdict(list)
    for tld in sorted(flows):
        if not flows[tld].steps:
            no_transfers[flows[tld].detail].append(tld)

    lines = [
        f"# Transfer from {reg.name}",
        "",
        registrar_intro(usual, reg),
        "",
        legend({WHO[s.entity][0] for f in flows.values() for s in f.steps} | {WHO[c.entity][0] for cells in per_tld.values() for c in cells.values()} | {"↗️"}),
        "",
        "## By transfer pattern",
        "",
        f"Your TLD's transfer pattern sets which steps a transfer has. ➖ marks a step the TLD doesn't have. "
        f"{reg.name} sets which of the other steps OpusDNS can take for you. Each TLD's page names its pattern.",
        "",
        "| Transfer pattern | TLDs | " + " | ".join(label for label, _ in MATRIX_COLUMNS) + " |",
        "| --- | --- | " + " | ".join(":---:" for _ in MATRIX_COLUMNS) + " |",
        *table,
    ]
    if differing:
        lines += ["", "These TLDs differ from their pattern's row:", "",
                  "| TLDs | " + " | ".join(label for label, _ in MATRIX_COLUMNS) + " |",
                  "| --- | " + " | ".join(":---:" for _ in MATRIX_COLUMNS) + " |",
                  *(f"| {tlds_of(tlds)} | " + " | ".join(found) + " |" for found, tlds in by_size(differing))]
    for detail, tlds in by_size(no_transfers):
        reason = say(detail, reg, short=True)
        if not reason:
            raise SystemExit(f"{detail!r}: a flow without steps needs a short reason in SENTENCES")
        lines += ["", no_transfer_line(reason, tlds_of(tlds), len(tlds))]
    pushed = sorted(tld for tld, flow in with_steps.items() if any(s.action == "push_transfer_out" for s in flow.steps))
    if pushed:
        lines += ["", f"At {tlds_of(pushed)}, the domain is pushed to OpusDNS's tag instead of approved."]
    if any(s.action == "update_privacy" for flow in flows.values() for s in flow.steps):
        lines += ["", f"At TLDs with a WHOIS privacy service, {reg.name} refuses to remove the lock while privacy "
                  f"is on. Turn it off at {reg.name} first."]

    lines += ["", "## The steps at most TLDs", "", "| # | Step | What happens |", "| --- | --- | --- |"]
    for i, step in enumerate(usual.steps, 1):
        lines.append(f"| {i} | {step.shown(reg)} | {step.note(reg)} |")
    lines += ["", REGISTRAR_PAGE_NOTE]

    usual_manage = {a: most_common(c[a] for c in per_tld.values()) for _, a, _ in MANAGE_ACTIONS}
    lines += [
        "",
        "## Managing a connected domain",
        "",
        f"Until you transfer a domain, OpusDNS can take some actions on it at {reg.name}. The others stay with you.",
    ]
    for group, title in MANAGE_GROUPS.items():
        actions = [(action, label) for g, action, label in MANAGE_ACTIONS if g == group]
        lines += ["", f"### {title}", "", "| Action | Note |", "| --- | --- |"]
        for action, label in actions:
            symbol, note = at_most_tlds(per_tld, action, usual_manage[action], reg)
            lines.append(f"| {symbol} {label} | {note} |")
        found = differences(per_tld, actions, usual_manage, reg)
        if found:
            lines += ["", "TLDs where this differs:", "", "| TLDs | What differs |", "| --- | --- |"]
            lines += [f"| {', '.join(kb_link(t, tld_types) for t in tlds)} | {text} |" for text, tlds in by_size(found)]
    lines.append("")
    return "\n".join(lines)


def registrar_table(data: dict, tlds: list[str]) -> list[str]:
    """Each registrar's cells for these TLDs: per column the most common one,
    counted where a TLD has the step at all."""
    wanted, rows, symbols = set(tlds), [], {"↗️"}
    for key in sorted(data["registrars"], key=registrar_order):
        reg = REGISTRARS[key]
        flows = [flow_of(row, reg, data["tld_types"]) for row in data["registrars"][key] if row["tld"] in wanted]
        if not flows:
            continue
        cells = []
        for _, actions in MATRIX_COLUMNS:
            taken = [cell for cell in (flow.cell(actions, reg) for flow in flows) if cell != "➖"]
            cells.append(most_common(taken) if taken else "➖")
        symbols |= {cell.split(" ", 1)[0] for cell in cells}
        rows.append(f"| [{reg.name}]({REGISTRAR_ROUTE}/{reg.slug}) | " + " | ".join(cells) + " |")
    return [
        "## At your registrar",
        "",
        "With a connected account, OpusDNS takes some of these steps for you. Which ones depends on your registrar:",
        "",
        legend(symbols),
        "",
        "| Registrar | " + " | ".join(label for label, _ in MATRIX_COLUMNS) + " |",
        "| --- | " + " | ".join(":---:" for _ in MATRIX_COLUMNS) + " |",
        *rows,
    ]


def render_pattern(pattern: Pattern, tlds: list[str], data: dict, facts: dict[str, RegistrySide]) -> str:
    tld_types = data["tld_types"]
    key = facts[tlds[0]].key

    def link(tld: str) -> str:
        return f"[.{tld}]({tld_path(tld, facts[tld].key)})"

    gtlds = [t for t in tlds if tld_types.get(t) == "gTLD"]
    cctlds = [t for t in tlds if t not in gtlds]
    named = [f"{len(gtlds)} gTLDs, such as {examples(gtlds, link)}" if len(gtlds) > 20 else ", ".join(map(link, gtlds))] if gtlds else []
    if cctlds:
        named.append(("these ccTLDs: " if gtlds else "") + ", ".join(map(link, cctlds)))
    lines = [f"# {pattern.title}", "", pattern_intro(key, pattern)]
    for tld in (t for t in tlds if t in UPCOMING):
        lines += ["", "> [!NOTE]", f"> {link(tld)}: {UPCOMING[tld][1]}"]
    steps = pattern_steps(key, any(facts[t].lock for t in tlds), bool(gtlds))
    lines += ["", "## Steps", "", *[f"{i}. {step}" for i, step in enumerate(steps, 1)]]
    lines += ["", "Each TLD's page shows which of these steps OpusDNS takes at your registrar."]
    lines += ["", "## TLDs", "", sentence_case(", and ".join(named)) + "."]
    by_registry: dict[str, list[str]] = defaultdict(list)
    sites: dict[str, list[str]] = defaultdict(list)
    for tld in tlds:
        registry = registry_of(tld, tld_types)
        if registry:
            by_registry[registry[0]].append(tld)
            if registry[1]:
                sites[registry[0]].append(registry[1])
    if by_registry:
        lines += ["", "## Registries", "", "These registries handle transfers this way:", ""]
        for name, found in sorted(by_registry.items(), key=lambda item: (-len(item[1]), item[0].lower())):
            shown = ", ".join(map(link, found[:5])) + (f" and {len(found) - 5} more" if len(found) > 5 else "")
            # One registry can name a website per TLD: the one most of them name.
            lines.append(f"- {f'[{name}]({most_common(sites[name])})' if sites[name] else name}: {shown}")
    lines.append("")
    return "\n".join(lines)


def render_tld(tld: str, data: dict, side: RegistrySide) -> str:
    name = f"`.{tld}`"
    lines = [f"# Transferring a .{tld} domain", ""]
    if side.key is None:
        lines.append(f"{name} has no transfer at its registry. OpusDNS can't request one.")
        if tld in TLD_NOTES:
            lines += ["", TLD_NOTES[tld]]
        lines += ["", f"To move a {name} domain to OpusDNS, contact [OpusDNS support]({SUPPORT_URL}).", ""]
        return "\n".join(lines)
    pattern = PATTERNS[side.key]
    registry = registry_of(tld, data["tld_types"])
    facts = [f"{name} follows the [{pattern.title}]({PATTERN_ROUTE}/{pattern.slug}) pattern."]
    if registry:
        facts.append(f"Its registry is {f'[{registry[0]}]({registry[1]})' if registry[1] else registry[0]}.")
    facts += [
        "The registry has a transfer lock." if side.lock else "The registry has no transfer lock.",
        "A transfer extends the registration." if side.renews else "A transfer doesn't extend the registration.",
    ]
    if side.deny and isinstance(side.key, tuple) and not side.key[1]:
        facts.append("Your current registrar can still deny a transfer.")
    if side.days == 0:
        facts.append("The registry completes a transfer at once.")
    elif side.days:
        facts.append(f"A transfer takes up to {side.days} day{'' if side.days == 1 else 's'}.")
    if data["tld_types"].get(tld) == "gTLD":
        facts.append(f"As a gTLD, it follows ICANN's [Transfer Policy]({ICANN_POLICY}).")
    lines.append(" ".join(facts))
    if tld in UPCOMING:
        lines += ["", "> [!NOTE]", f"> {UPCOMING[tld][1]}"]
    lines += ["", "## Steps", ""]
    gtld = data["tld_types"].get(tld) == "gTLD"
    steps = [step.replace(", depending on the TLD", "") for step in pattern_steps(side.key, side.lock, gtld)]
    lines += [f"{i}. {step}" for i, step in enumerate(steps, 1)]
    lines += ["", *registrar_table(data, [tld])]
    privacy = [
        REGISTRARS[key].name
        for key in sorted(data["registrars"], key=registrar_order)
        if any(s["action"] == "update_privacy" for row in data["registrars"][key] if row["tld"] == tld for s in row["flows"]["transfer_to_opusdns"]["steps"])
    ]
    if privacy:
        lines += ["", f"{and_join(privacy)} {'refuses' if len(privacy) == 1 else 'refuse'} to remove the lock while WHOIS "
                  "privacy is on. Turn it off there first."]
    kb = kb_path(tld, data["tld_types"])
    if kb:
        lines += ["", f"The [TLD Knowledge Base]({kb}) has more on {name}."]
    lines.append("")
    return "\n".join(lines)


def render_overview(data: dict, facts: dict[str, RegistrySide]) -> str:
    keys = sorted(data["registrars"], key=registrar_order)
    without = sorted(tld for tld, side in facts.items() if side.key is None)
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
        "## Transfer patterns",
        "",
        "TLDs with the same steps share a transfer pattern:",
        "",
        *[f"- [{pattern.title}]({PATTERN_ROUTE}/{pattern.slug}): {len(tlds)} TLD{'' if len(tlds) == 1 else 's'}" for pattern, tlds in ordered_patterns(facts)],
        *(["", no_transfer_line("no transfers", ", ".join(f"[.{t}]({tld_path(t, None)})" for t in without), len(without))] if without else []),
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
        "which TLDs they differ. It also shows what OpusDNS can do with your domain there until you "
        "transfer it.",
        "",
        *[f"- [{REGISTRARS[k].name}]({REGISTRAR_ROUTE}/{REGISTRARS[k].slug})" for k in keys],
        "",
    ]
    return "\n".join(lines)


def nav_page(title: str, filepath: str, *, sidebar: bool = True, **extra) -> dict:
    return {"type": "page", "title": title, **extra, "filepath": filepath, "showInSidebar": sidebar}


def update_config(config_path: Path, keys: list[str], patterns: list[tuple[Pattern, list[str]]], without: list[str]) -> bool:
    raw = config_path.read_text(encoding="utf-8")
    config = json.loads(raw)
    navigation = config["navigation"]
    tabs = navigation["tabs"]
    if not any(tab.get("to") == ROUTE for tab in tabs):
        after = next(i for i, tab in enumerate(tabs) if tab.get("to") == "/tld-knowledge-base")
        tabs.insert(after + 1, dict(TAB))
    folder = PATTERN_ROUTE.removeprefix("/")
    by_pattern = {
        f"/{pattern.slug}": {
            "type": "group",
            "title": pattern.title,
            "children": {
                "/": nav_page("Overview", f"content/{folder}/{pattern.slug}/index.md"),
                **{f"/{tld}": nav_page(f".{tld}", f"content/{folder}/{pattern.slug}/{tld}.md") for tld in tlds},
            },
        }
        for pattern, tlds in patterns
    }
    # The sidebar lists TLDs by pattern. One without transfers has none, so its page stays out of the sidebar.
    by_pattern |= {f"/{tld}": nav_page(f".{tld}", f"content/{folder}/{tld}.md", sidebar=False) for tld in without}
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
    args = parser.parse_args(argv)
    data = json.loads(args.input.read_text(encoding="utf-8"))
    data["registrars"] = {k: v for k, v in data["registrars"].items() if k not in EXCLUDED}
    unknown = set(data["registrars"]) - set(REGISTRARS)
    if unknown:
        raise SystemExit(f"unknown registrars {sorted(unknown)}: add them to REGISTRARS")
    facts = registry_facts(data)
    patterns = ordered_patterns(facts)
    without = sorted(tld for tld, side in facts.items() if side.key is None)
    pages = {"index.md": render_overview(data, facts)}
    for pattern, tlds in patterns:
        pages[f"patterns/{pattern.slug}/index.md"] = render_pattern(pattern, tlds, data, facts)
        pages |= {f"patterns/{pattern.slug}/{tld}.md": render_tld(tld, data, facts[tld]) for tld in tlds}
    pages |= {f"patterns/{tld}.md": render_tld(tld, data, facts[tld]) for tld in without}
    for key, rows in data["registrars"].items():
        pages[f"registrars/{REGISTRARS[key].slug}.md"] = render_registrar(key, rows, data["tld_types"])
    for name, text in pages.items():
        (args.output / name).parent.mkdir(parents=True, exist_ok=True)
        (args.output / name).write_text(text, encoding="utf-8")
    links = {
        tld: {"title": PATTERNS[side.key].title if side.key is not None else "No transfers", "path": tld_path(tld, side.key)}
        for tld, side in sorted(facts.items())
    }
    args.tld_pages_file.write_text(json.dumps(links, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    update_config(args.config, list(data["registrars"]), patterns, without)
    stale = sorted(str(p.relative_to(args.output)) for p in args.output.rglob("*.md") if str(p.relative_to(args.output)) not in pages)
    if stale:
        raise SystemExit(f"pages no longer generated, remove them: {stale}")


if __name__ == "__main__":
    main()
