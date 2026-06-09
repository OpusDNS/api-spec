"""Deterministic value formatters used when rendering TLD specs to Markdown.
"""

from __future__ import annotations

import re
from datetime import datetime, timezone
from typing import Any, Iterable

YES = "✅ Yes"
NO = "❌ No"

# Readable labels for EPP contact roles.
CONTACT_ROLE_LABELS = {
    "registrant": "Domain Owner",
    "admin": "Administrator",
    "tech": "Technical Contact",
    "billing": "Billing Contact",
}

# Readable labels for postal info types.
POSTAL_TYPE_LABELS = {
    "loc": "Local",
    "int": "International",
}

# Readable labels for deletion policies.
DELETE_POLICY_LABELS = {
    "immediate": "Immediate",
    "expiration": "At expiration",
}


def yes_no(value: Any) -> str:
    """Render a boolean as a ✅/❌ lozenge."""
    return YES if bool(value) else NO


def _duration_token(token: Any) -> tuple[int, str] | None:
    """Parse a single duration token such as ``5D``, ``-7D``, ``P120D``, ``1Y``.

    Returns ``(amount, unit)`` where ``unit`` is ``"day"``, ``"year"`` or
    ``"month"``, with a non-negative amount, or ``None`` if unparseable.
    """
    if token is None:
        return None
    text = str(token).strip().upper()
    if not text:
        return None
    # Strip ISO-8601 duration prefix ("P120D" -> "120D", "-P30D" -> "-30D").
    text = text.replace("P", "")
    match = re.fullmatch(r"[+-]?(\d+)\s*([DMY])", text)
    if not match:
        return None
    amount = int(match.group(1))
    unit = {"D": "day", "M": "month", "Y": "year"}[match.group(2)]
    return amount, unit


def humanize_duration(token: Any, *, zero: str = "0 days") -> str:
    """Render a single duration token as e.g. ``"5 days"`` / ``"1 year"``.

    Falls back to the original string when the token is not a duration.
    """
    parsed = _duration_token(token)
    if parsed is None:
        return "" if token is None else str(token)
    amount, unit = parsed
    if amount == 0:
        return zero
    plural = "" if amount == 1 else "s"
    return f"{amount} {unit}{plural}"


def humanize_period_list(periods: Any) -> str:
    """Render a list of year periods (``[1Y, 2Y, ... 10Y]``) as a range.

    ``[1Y]`` -> ``"1 year"``; ``[1Y..10Y]`` -> ``"1–10 years"``.
    """
    if not periods:
        return ""
    if not isinstance(periods, (list, tuple)):
        periods = [periods]

    years: list[int] = []
    for item in periods:
        parsed = _duration_token(item)
        if parsed and parsed[1] == "year":
            years.append(parsed[0])
    if not years:
        # Fall back to a comma-joined representation of raw values.
        return ", ".join(str(p) for p in periods if p is not None)

    lo, hi = min(years), max(years)
    if lo == hi:
        return f"{lo} year" if lo == 1 else f"{lo} years"
    return f"{lo}–{hi} years"


def offset_before_expiration(token: Any) -> str:
    """Render a signed offset relative to expiration, e.g. ``-7D``.

    ``0D`` -> ``"On expiration"``; ``-7D`` -> ``"7 days before expiration"``.
    """
    parsed = _duration_token(token)
    if parsed is None:
        return "" if token is None else str(token)
    amount, unit = parsed
    if amount == 0:
        return "On expiration"
    plural = "" if amount == 1 else "s"
    return f"{amount} {unit}{plural} before expiration"


def general_availability(start_date: Any) -> str:
    """Render the general-availability state.

    A start date in the past means the TLD is live; a future date is shown as-is.
    """
    if not start_date:
        return NO
    parsed = _parse_date(start_date)
    if parsed is None:
        return f"✅ {start_date}"
    if parsed <= datetime.now(timezone.utc):
        return "✅ TLD is live"
    return f"🗓️ From {parsed.date().isoformat()}"


def _parse_date(value: Any) -> datetime | None:
    text = str(value).strip()
    if not text:
        return None
    text = text.replace("Z", "+00:00")
    try:
        dt = datetime.fromisoformat(text)
    except ValueError:
        return None
    if dt.tzinfo is None:
        dt = dt.replace(tzinfo=timezone.utc)
    return dt


def join_labels(values: Iterable[Any], mapping: dict[str, str]) -> str:
    """Map and join a list of keys via ``mapping`` (unknown keys kept as-is)."""
    labels: list[str] = []
    for value in values or []:
        key = str(value)
        labels.append(mapping.get(key, key))
    return ", ".join(labels)


def supported_roles(roles: Any) -> str:
    """Render the supported contact roles (those with ``max`` > 0)."""
    labels: list[str] = []
    for role in roles or []:
        if not isinstance(role, dict):
            continue
        if (role.get("max") or 0) <= 0:
            continue
        key = str(role.get("type", ""))
        labels.append(CONTACT_ROLE_LABELS.get(key, key))
    return ", ".join(labels)


def required_roles(roles: Any) -> str:
    """Render the required contact roles (those with ``min`` >= 1)."""
    labels: list[str] = []
    for role in roles or []:
        if not isinstance(role, dict):
            continue
        if (role.get("min") or 0) < 1:
            continue
        key = str(role.get("type", ""))
        labels.append(CONTACT_ROLE_LABELS.get(key, key))
    return ", ".join(labels)


def char_range(min_value: Any, max_value: Any) -> str:
    """Render a character-count range, e.g. ``"2–63 characters"``."""
    if min_value is None and max_value is None:
        return ""
    if min_value is None:
        return f"up to {max_value} characters"
    if max_value is None:
        return f"from {min_value} characters"
    return f"{min_value}–{max_value} characters"


def count_range(min_value: Any, max_value: Any) -> str:
    """Render a plain numeric range, e.g. ``"0–13"``."""
    if min_value is None and max_value is None:
        return ""
    if min_value is None:
        return f"up to {max_value}"
    if max_value is None:
        return f"from {min_value}"
    return f"{min_value}–{max_value}"
