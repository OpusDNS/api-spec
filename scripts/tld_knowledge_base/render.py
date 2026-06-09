"""Render a compiled TLD specification dict to a Scalar Markdown page.

The layout follows the existing ``nl.md`` reference: a flag-prefixed H1, a
short intro blockquote, and a series of ``##`` sections with ``| Property |
Value |`` tables. Sections and rows are omitted when no data is available, so
each page reflects the underlying spec faithfully without empty placeholders.
"""

from __future__ import annotations

from dataclasses import dataclass
from typing import Any, Iterable

from . import countries, formatters as f


@dataclass(frozen=True)
class TLDInfo:
    """Identity information for a single compiled spec."""

    name: str  # bare TLD label, e.g. "nl"
    type: str  # "gTLD" | "ccTLD" | ...
    registry: str
    registry_country: str  # ISO-3166-1 alpha-2 from registry.address.country


def _tld_info(spec: dict[str, Any]) -> TLDInfo:
    config = spec.get("tld_configuration", {}) or {}
    tlds = config.get("tlds") or []
    first = tlds[0] if tlds else {}
    registry = config.get("registry") or {}
    address = registry.get("address") or {}
    return TLDInfo(
        name=str(first.get("name", "") or "").lower(),
        type=str(first.get("type", "") or ""),
        registry=str(registry.get("name", "") or ""),
        registry_country=str(address.get("country", "") or "").upper(),
    )


def is_cctld(spec: dict[str, Any]) -> bool:
    return _tld_info(spec).type.lower() == "cctld"


def page_slug(spec: dict[str, Any]) -> str:
    """Filename slug (without extension) for the rendered page."""
    return _tld_info(spec).name


def page_category(spec: dict[str, Any]) -> str:
    """Scalar sidebar group: ``"cctlds"`` or ``"gtlds"``."""
    return "cctlds" if is_cctld(spec) else "gtlds"


def page_title(spec: dict[str, Any]) -> str:
    """Sidebar title (flag/icon + ``.tld``)."""
    info = _tld_info(spec)
    icon = _icon_for(info)
    return f"{icon} .{info.name}".strip()


# ---------------------------------------------------------------------------
# Internal helpers
# ---------------------------------------------------------------------------


def _country_code(info: TLDInfo) -> str:
    """Best-available ISO-3166-1 alpha-2 country code for a ccTLD."""
    if info.registry_country and countries.country_name(info.registry_country):
        return info.registry_country
    return countries.tld_to_country_code(info.name)


def _icon_for(info: TLDInfo) -> str:
    if info.type.lower() == "cctld":
        code = _country_code(info)
        if code:
            flag = countries.flag_emoji(code)
            if flag:
                return flag
    return "🌐"


def _heading_country(info: TLDInfo) -> str:
    """Suffix appended to the H1: country name (ccTLD) or registry (gTLD)."""
    if info.type.lower() == "cctld":
        return countries.country_name(_country_code(info))
    return info.registry


def _section(title: str, rows: list[tuple[str, str]]) -> list[str]:
    """Render a ``## title`` followed by a two-column property table.

    Rows with an empty value are dropped; the whole section is omitted when no
    rows remain. Always returns the lines (including blank separators).
    """
    kept = [(prop, value) for prop, value in rows if value != "" and value is not None]
    if not kept:
        return []
    lines = [f"## {title}", "", "| Property | Value |", "| --- | --- |"]
    lines.extend(f"| {prop} | {value} |" for prop, value in kept)
    lines.append("")
    return lines


def _subsection(title: str, rows: list[tuple[str, str]]) -> list[str]:
    """Like ``_section`` but rendered as a bold caption + table (no ``##``)."""
    kept = [(prop, value) for prop, value in rows if value != "" and value is not None]
    if not kept:
        return []
    lines = [f"**{title}**", "", "| Period | Duration |", "| --- | --- |"]
    lines.extend(f"| {prop} | {value} |" for prop, value in kept)
    lines.append("")
    return lines


def _intro_blockquote(info: TLDInfo) -> list[str]:
    type_label = {
        "cctld": "country-code top-level domain (ccTLD)",
        "gtld": "generic top-level domain (gTLD)",
        "newtld": "new generic top-level domain (newTLD)",
    }.get(info.type.lower(), f"top-level domain ({info.type})")

    operator_clause = f" operated by {info.registry}" if info.registry else ""
    return [
        (
            f"> The **.{info.name}** is a {type_label}{operator_clause}. "
            "This article documents the technical, operational, and contractual "
            "requirements for the TLD, along with special considerations for "
            "registry, registrar, and domain management."
        ),
        "",
    ]


# ---------------------------------------------------------------------------
# Section builders
# ---------------------------------------------------------------------------


def _general_information(info: TLDInfo, config: dict[str, Any]) -> list[str]:
    registry = config.get("registry") or {}
    address = registry.get("address") or {}
    country = address.get("country") or countries.tld_to_country_code(info.name)
    country_label = countries.country_name(country) or country or ""

    rows: list[tuple[str, str]] = [
        ("TLD Type", info.type),
        ("Registry", registry.get("name", "") or ""),
        ("Registry Country", country_label),
        ("Registry Website", _link_value(registry.get("website"))),
        ("Provisioning Protocol", registry.get("provisioning_protocol", "") or ""),
        (
            "Second-Level Registration",
            f.yes_no(_first(config.get("tlds")) and _first(config.get("tlds")).get("second_level_registration")),
        ),
        ("Accreditation Required", f.yes_no((config.get("registrar") or {}).get("accredited"))),
    ]
    return _section("General Information", rows)


def _domain_lifecycle(config: dict[str, Any]) -> list[str]:
    lifecycle = config.get("domain_lifecycle") or {}
    rows: list[tuple[str, str]] = [
        ("Registration Period", f.humanize_period_list(lifecycle.get("registration_periods"))),
        ("Renewal Period", f.humanize_period_list(lifecycle.get("renewal_periods"))),
        (
            "Transfer Renewal Period",
            f.humanize_period_list(lifecycle.get("transfer_renewal_periods")),
        ),
        (
            "Deletion Policy",
            f.join_labels(lifecycle.get("delete_policy") or [], f.DELETE_POLICY_LABELS),
        ),
        ("Auto-Renew Enabled", f.yes_no(lifecycle.get("registry_auto_renew"))),
        (
            "Auto-Renewal Before Expiry",
            f.offset_before_expiration(lifecycle.get("auto_renew_before_expiration")),
        ),
        (
            "Sync After Operations",
            ", ".join(sorted(lifecycle.get("sync_after_operations") or [])),
        ),
    ]
    lines = _section("Domain Lifecycle", rows)

    grace_rows: list[tuple[str, str]] = [
        ("Add Grace Period", f.humanize_duration(lifecycle.get("add_grace_period"))),
        ("Standard Grace Period", f.humanize_duration(lifecycle.get("grace_period"))),
        ("Redemption Period", f.humanize_duration(lifecycle.get("redemption_period"))),
        ("Pending Restore", f.humanize_duration(lifecycle.get("pending_restore"))),
        ("Pending Delete", f.humanize_duration(lifecycle.get("pending_delete"))),
    ]
    lines.extend(_subsection("Grace periods", grace_rows))
    return lines


def _launch_phases(config: dict[str, Any]) -> list[str]:
    launch = config.get("launch_phases") or {}
    phases = launch.get("phases") or []
    ga = (launch.get("general_availability") or {}).get("start_date")
    tmch = (launch.get("trademark_claims") or {}).get("supported")

    rows: list[tuple[str, str]] = []
    for phase in phases:
        if not isinstance(phase, dict) or not phase.get("supported"):
            continue
        label = str(phase.get("type", "")).title() or "Phase"
        start = phase.get("start_date")
        end = phase.get("end_date")
        when = " – ".join(
            iso for iso in (_iso_date(start), _iso_date(end)) if iso
        )
        rows.append((label, f"✅ Supported" + (f" ({when})" if when else "")))

    rows.append(("General Availability", f.general_availability(ga)))
    rows.append(("TMCH / Trademark Claims", f.yes_no(tmch)))
    return _section("Launch Phases & Availability", rows)


def _domain_characteristics(config: dict[str, Any]) -> list[str]:
    chars = config.get("characters") or {}
    idn = config.get("idn") or {}
    premium = (config.get("premium_domains") or {}).get("supported")
    reserved = (config.get("reserved_domains") or {}).get("supported")
    registry_lock = (config.get("registry_lock") or {}).get("supported")

    idn_value = f.yes_no(idn.get("idn_capable"))
    idn_tables = idn.get("idn_tables") or []
    if idn.get("idn_capable") and idn_tables:
        idn_value = f"{f.YES} ({len(idn_tables)} tables)"

    rows: list[tuple[str, str]] = [
        ("Domain Length", f.char_range(chars.get("min"), chars.get("max"))),
        ("IDN Support", idn_value),
        ("Premium Domains", f.yes_no(premium)),
        ("Reserved Domains", f.yes_no(reserved)),
        ("Registry Lock", f.yes_no(registry_lock)),
    ]
    return _section("Domain Characteristics", rows)


def _contacts_and_roles(config: dict[str, Any]) -> list[str]:
    contacts = config.get("contacts") or {}
    transfer = config.get("transfer_policies") or {}

    auth_required = transfer.get("authinfo_required")
    auth_value = f.yes_no(auth_required)
    if auth_required:
        min_len = transfer.get("authinfo_min_length")
        max_len = transfer.get("authinfo_max_length")
        if min_len or max_len:
            auth_value = f"{f.YES} ({f.char_range(min_len, max_len)})"

    rows: list[tuple[str, str]] = [
        ("Required Contacts", f.required_roles(contacts.get("supported_roles"))),
        ("Supported Roles", f.supported_roles(contacts.get("supported_roles"))),
        ("Thick WHOIS", f.yes_no(contacts.get("is_thick"))),
        ("Privacy Proxy Allowed", f.yes_no(contacts.get("privacy_proxy"))),
        ("Contacts Transferable", f.yes_no(contacts.get("support_transfer"))),
        (
            "Allowed Postal Types",
            f.join_labels(contacts.get("supported_postal_types") or [], f.POSTAL_TYPE_LABELS),
        ),
        ("AuthInfo Required", auth_value),
    ]
    return _section("Contacts & Roles", rows)


def _nameservers_and_dns(config: dict[str, Any]) -> list[str]:
    dns = config.get("dns_configuration") or {}
    ns_range = dns.get("allowed_number_of_nameserver") or {}

    rows: list[tuple[str, str]] = [
        ("Nameserver Count", f.count_range(ns_range.get("min"), ns_range.get("max"))),
        ("Host Objects Allowed", f.yes_no(dns.get("host_objects"))),
        ("Registry Nameserver Check", f.yes_no(dns.get("registry_nameserver_check"))),
        ("DNSSEC Allowed", f.yes_no(dns.get("dnssec_allowed"))),
        ("DNSSEC Required", f.yes_no(dns.get("dnssec_mandatory"))),
        ("DNSSEC Mode", dns.get("dnssec_mode", "") or ""),
        ("CZDS (Zone Download)", f.yes_no(dns.get("czds_available"))),
    ]
    return _section("Nameservers & DNS", rows)


def _transfer_policy(config: dict[str, Any]) -> list[str]:
    transfer = config.get("transfer_policies") or {}
    lock_policy = transfer.get("transfer_lock_policy") or {}
    lock_duration = transfer.get("transfer_lock_duration") or {}
    lock_supported = bool(lock_policy.get("supported_by_registry") or lock_policy.get("supported_by_registrar"))

    lock_value = f.yes_no(lock_supported)
    if lock_supported:
        post_reg = f.humanize_duration(lock_duration.get("post_registration"))
        post_xfer = f.humanize_duration(lock_duration.get("post_transfer"))
        if post_reg or post_xfer:
            parts = []
            if post_reg:
                parts.append(f"{post_reg} after registration")
            if post_xfer:
                parts.append(f"{post_xfer} after transfer")
            lock_value = f"{f.YES} ({'; '.join(parts)})"

    extends = transfer.get("transfer_renews_domain")
    extends_value = f.yes_no(extends)
    if extends:
        period = f.humanize_period_list([transfer.get("transfer_renewal_period")])
        if period:
            extends_value = f"{f.YES} (+{period})"

    rows: list[tuple[str, str]] = [
        ("Transfer Lock Enabled", lock_value),
        ("Transfer Duration", f.humanize_duration(transfer.get("transfer_time"))),
        ("Transfer Extends Domain", extends_value),
        ("Transfer via AuthInfo", f.yes_no(transfer.get("info_domain_authinfo"))),
        (
            "Confirmation Required",
            _confirmation_label(transfer.get("transfer_ack"), transfer.get("transfer_nack")),
        ),
    ]
    return _section("Transfer Policy", rows)


def _confirmation_label(ack: Any, nack: Any) -> str:
    ack = (str(ack or "").lower() or "none")
    nack = (str(nack or "").lower() or "none")
    if ack == "none" and nack == "none":
        return f.NO
    labels = {
        "both": "Both parties",
        "losing": "Losing registrar",
        "gaining": "Gaining registrar",
        "registrant": "Registrant",
        "none": "None",
    }
    return f"{f.YES} ({labels.get(ack, ack)})"


def _whois_and_rdap(config: dict[str, Any]) -> list[str]:
    whois = (config.get("whois") or {}).get("whois_server")
    rdap = (config.get("rdap") or {}).get("rdap_server")
    rows: list[tuple[str, str]] = [
        ("WHOIS Server", f"`{whois}`" if whois else ""),
        ("RDAP Server", _link_value(rdap)),
    ]
    return _section("WHOIS & RDAP", rows)


def _dispute_resolution(config: dict[str, Any]) -> list[str]:
    disputes = config.get("dispute_resolutions") or []
    supported = [d for d in disputes if isinstance(d, dict) and d.get("supported")]
    if not supported:
        return _section("Dispute Resolution", [("Dispute Resolution Available", f.NO)])

    primary = supported[0]
    udrp = next((d for d in disputes if str(d.get("name", "")).upper() == "UDRP"), None)
    urs = next((d for d in disputes if str(d.get("name", "")).upper() == "URS"), None)

    rows: list[tuple[str, str]] = [
        ("Dispute Resolution Available", f.YES),
        ("Procedure", primary.get("name", "") or ""),
        ("Reference", _link_value(primary.get("reference"))),
        ("UDRP Support", f.yes_no(udrp and udrp.get("supported"))),
        ("URS Support", f.yes_no(urs and urs.get("supported"))),
    ]
    return _section("Dispute Resolution", rows)


def _local_presence(config: dict[str, Any]) -> list[str]:
    local = config.get("local_presence") or {}
    if not local.get("required"):
        return []
    rows: list[tuple[str, str]] = [
        ("Local Presence Required", f.YES),
        (
            "Applies To Roles",
            f.join_labels(local.get("type") or [], f.CONTACT_ROLE_LABELS),
        ),
        (
            "Requirements",
            ", ".join(str(r).replace("_", " ").title() for r in local.get("requirement") or []),
        ),
        (
            "Eligible Countries",
            ", ".join(local.get("eligible_countries") or []) or "Any",
        ),
    ]
    return _section("Local Presence", rows)


def _implementation_notes(config: dict[str, Any]) -> list[str]:
    dns = config.get("dns_configuration") or {}
    transfer = config.get("transfer_policies") or {}
    info_type = (_first(config.get("tlds")) or {}).get("type", "").lower()

    notes: list[str] = ["- Ensure complete TLS/SSL configuration in all environments."]

    if dns.get("dnssec_mandatory"):
        notes.append("- DNSSEC is mandatory and must be configured at registration time.")
    elif dns.get("dnssec_allowed"):
        notes.append("- DNSSEC should be actively used when supported.")

    min_len = transfer.get("authinfo_min_length")
    if min_len:
        notes.append(f"- AuthInfo must meet minimum requirements (≥ {min_len} characters).")

    if info_type == "cctld":
        notes.append("- Note different status codes or dispute policies for ccTLDs.")
        notes.append(
            "- Check if third-level structures (`co.uk`, etc.) need separate documentation."
        )

    return ["## Implementation Notes", "", *notes, ""]


# ---------------------------------------------------------------------------
# Public entry point
# ---------------------------------------------------------------------------


def render(spec: dict[str, Any]) -> str:
    """Return the full Markdown document for a single compiled spec dict."""
    info = _tld_info(spec)
    config = spec.get("tld_configuration") or {}

    suffix = _heading_country(info)
    icon = _icon_for(info)
    title_suffix = f" — {suffix}" if suffix else ""
    lines: list[str] = [f"# {icon} .{info.name}{title_suffix}".strip(), ""]
    lines.extend(_intro_blockquote(info))
    lines.extend(_general_information(info, config))
    lines.extend(_domain_lifecycle(config))
    lines.extend(_launch_phases(config))
    lines.extend(_domain_characteristics(config))
    lines.extend(_contacts_and_roles(config))
    lines.extend(_nameservers_and_dns(config))
    lines.extend(_transfer_policy(config))
    lines.extend(_whois_and_rdap(config))
    lines.extend(_dispute_resolution(config))
    lines.extend(_local_presence(config))
    lines.extend(_implementation_notes(config))

    # Normalise: collapse trailing blank lines and ensure a single newline EOF.
    while lines and lines[-1] == "":
        lines.pop()
    return "\n".join(lines) + "\n"


# ---------------------------------------------------------------------------
# Small utilities
# ---------------------------------------------------------------------------


def _first(items: Any) -> Any:
    if isinstance(items, list) and items:
        return items[0]
    return None


def _iso_date(value: Any) -> str:
    text = str(value or "").strip()
    if not text:
        return ""
    return text.split("T", 1)[0]


def _link_value(value: Any) -> str:
    text = str(value or "").strip()
    if not text:
        return ""
    if text.startswith(("http://", "https://")):
        display = text.rstrip("/").split("://", 1)[1]
        return f"[{display}]({text})"
    return text


def _flatten(items: Iterable[Any]) -> list[str]:
    out: list[str] = []
    for item in items:
        if isinstance(item, (list, tuple)):
            out.extend(_flatten(item))
        else:
            out.append(str(item))
    return out
