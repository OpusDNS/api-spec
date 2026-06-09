"""Idempotent updates to ``scalar/scalar.config.json``.

We keep manually-curated entries untouched and only manage the
``/tld-knowledge-base/cctlds`` and ``/gtlds`` sidebar groups: every generated
page is registered (or refreshed) with its flag-prefixed title and content
filepath.
"""

from __future__ import annotations

import json
from collections.abc import Iterable
from pathlib import Path
from typing import Any

KNOWLEDGE_BASE_KEY = "/tld-knowledge-base"
CCTLDS_KEY = "/cctlds"
GTLDS_KEY = "/gtlds"


def update_config(
    config_path: Path,
    *,
    entries: Iterable[tuple[str, str, str]],
    content_root: str = "content/tld-knowledge-base",
) -> bool:
    """Refresh the TLD-knowledge-base section in ``scalar.config.json``.

    ``entries`` is an iterable of ``(category, slug, title)`` tuples where
    ``category`` is ``"cctlds"`` or ``"gtlds"``.

    Returns ``True`` when the file was actually modified.
    """
    raw = config_path.read_text(encoding="utf-8")
    config = json.loads(raw)
    sidebar = _locate_sidebar(config)
    if sidebar is None:
        raise RuntimeError("Could not locate the sidebar config in scalar.config.json")

    kb = sidebar.setdefault(KNOWLEDGE_BASE_KEY, _empty_knowledge_base())
    kb_children = kb.setdefault("children", {})

    cctlds = kb_children.setdefault(CCTLDS_KEY, _empty_group("ccTLDs"))
    gtlds = kb_children.setdefault(GTLDS_KEY, _empty_group("gTLDs"))

    # Replace generated children wholesale so removals propagate.
    cctlds["children"] = {}
    gtlds["children"] = {}

    for category, slug, title in sorted(entries, key=lambda item: (item[0], item[1])):
        target = cctlds if category == "cctlds" else gtlds
        target["children"][f"/{slug}"] = {
            "type": "page",
            "title": title,
            "filepath": f"{content_root}/{category}/{slug}.md",
            "showInSidebar": True,
        }

    new_raw = json.dumps(config, indent=2, ensure_ascii=False) + "\n"
    if new_raw == raw:
        return False
    config_path.write_text(new_raw, encoding="utf-8")
    return True


# ---------------------------------------------------------------------------
# Internal helpers
# ---------------------------------------------------------------------------


def _locate_sidebar(config: dict[str, Any]) -> dict[str, Any] | None:
    """Find the dict that already contains ``/tld-knowledge-base``.

    The current ``scalar.config.json`` nests it under
    ``navigation.routes``; we walk the whole structure so we stay resilient to
    wrapper renames or reorganisations.
    """
    for value in _walk_dicts(config):
        if KNOWLEDGE_BASE_KEY in value and isinstance(value[KNOWLEDGE_BASE_KEY], dict):
            return value
    return None


def _walk_dicts(value: Any):
    if isinstance(value, dict):
        yield value
        for child in value.values():
            yield from _walk_dicts(child)
    elif isinstance(value, list):
        for child in value:
            yield from _walk_dicts(child)


def _empty_knowledge_base() -> dict[str, Any]:
    return {
        "type": "group",
        "title": "TLD Knowledge Base",
        "icon": "line/travel-map-earth-globe",
        "children": {},
    }


def _empty_group(title: str) -> dict[str, Any]:
    return {
        "type": "group",
        "title": title,
        "icon": "line/travel-map-earth-globe",
        "children": {},
    }
