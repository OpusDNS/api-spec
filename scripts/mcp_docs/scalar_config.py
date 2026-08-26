"""Idempotent updates to the ``/mcp-server`` section of ``scalar.config.json``.

A sibling of ``scripts/tld_knowledge_base/scalar_config.py``, deliberately not
an extension of it: that module's signature is TLD-shaped, and two bots writing
the same 3600-line file are easier to reason about with independent blast radii.
Both only ever rebuild the subtree they own, and both serialise identically, so a
concurrent run is an ordinary git conflict rather than a corrupted config.

What this module owns, and nothing else:

* ``navigation.routes["/mcp-server"]`` — rebuilt wholesale from the manifest, so
  a removed page propagates instead of leaving a dead sidebar entry.
* the ``navigation.tabs`` entry whose ``to`` is ``/mcp-server``.
"""

from __future__ import annotations

import json
import re
from pathlib import Path
from typing import Any, Iterator

ROUTE = "/mcp-server"

# The route is deliberately not "/mcp": developers.opusdns.com/mcp is Scalar's
# own documentation-MCP endpoint (registrar-abstraction-service consumes it as
# DOCUMENTATION_MCP_URL), so a docs page there would be permanently shadowed.
FORBIDDEN_ROUTES = {"/mcp"}

# Insert the tab after this one, which keeps Changelog last where it reads best.
TAB_AFTER = "/tld-knowledge-base"

# Icons come from two sets, both already in use across the config. A typo renders
# as nothing at all and `scalar project check-config` does not catch it, so the
# shape is asserted before writing.
ICON_RE = re.compile(r"^(line|phosphor/regular)/[a-z0-9-]+$")


class ConfigError(RuntimeError):
    """Raised when the config or the manifest is not in a shape we can write."""


def update_config(
    config_path: Path,
    *,
    manifest: dict[str, Any],
    content_root: str = "content/mcp-server",
    scalar_root: Path | None = None,
) -> bool:
    """Register the manifest's pages under ``/mcp-server``.

    ``scalar_root`` is the directory the config's ``filepath`` values are
    relative to; when given, every filepath this function writes is checked to
    exist. Returns True when the file was actually modified.
    """
    raw = config_path.read_text(encoding="utf-8")
    config = json.loads(raw)

    _validate_manifest(manifest)

    routes = _locate_routes(config)
    group = routes.setdefault(ROUTE, {})
    group["type"] = "group"
    group["title"] = manifest["group"]["title"]
    group["icon"] = manifest["group"]["icon"]
    # Replaced wholesale so removals propagate.
    group["children"] = _build_children(manifest["children"], content_root)

    _upsert_tab(config, manifest["tab"])

    if scalar_root is not None:
        _check_filepaths(group, scalar_root)

    new_raw = json.dumps(config, indent=2, ensure_ascii=False) + "\n"
    # Re-parse before writing: a config the site cannot load takes the whole of
    # developers.opusdns.com down, and merging is what publishes.
    json.loads(new_raw)
    if new_raw == raw:
        return False
    config_path.write_text(new_raw, encoding="utf-8")
    return True


# ---------------------------------------------------------------------------
# Internal helpers
# ---------------------------------------------------------------------------


def _validate_manifest(manifest: dict[str, Any]) -> None:
    for key in ("route", "tab", "group", "children"):
        if key not in manifest:
            raise ConfigError(f"manifest is missing {key!r}")
    if manifest["route"] != ROUTE:
        raise ConfigError(f"manifest route is {manifest['route']!r}, expected {ROUTE!r}")
    if manifest["route"] in FORBIDDEN_ROUTES:
        raise ConfigError(f"{manifest['route']!r} is reserved by Scalar's own MCP endpoint")
    if not manifest["children"]:
        # Refuse to publish an empty tree: a bad or partial checkout would
        # otherwise silently wipe the whole published section.
        raise ConfigError("manifest declares no pages; refusing to empty the published section")
    for label in ("tab", "group"):
        for key in ("title", "icon"):
            if not manifest[label].get(key):
                raise ConfigError(f"manifest {label} is missing {key!r}")
        _check_icon(manifest[label]["icon"])


def _check_icon(icon: str) -> None:
    if not ICON_RE.match(icon):
        raise ConfigError(
            f"icon {icon!r} is not of the form line/<name> or phosphor/regular/<name>; "
            "a name Scalar does not know renders as nothing"
        )


def _build_children(entries: list[dict[str, Any]], content_root: str) -> dict[str, Any]:
    out: dict[str, Any] = {}
    for entry in entries:
        route = entry["route"]
        if route in out:
            raise ConfigError(f"duplicate route {route!r} in the manifest")
        _check_icon(entry["icon"])
        if entry["type"] == "group":
            out[route] = {
                "type": "group",
                "title": entry["title"],
                "icon": entry["icon"],
                "children": _build_children(entry.get("children") or [], content_root),
            }
        elif entry["type"] == "page":
            if not entry.get("file"):
                raise ConfigError(f"page {route!r} has no file")
            out[route] = {
                "type": "page",
                "title": entry["title"],
                "icon": entry["icon"],
                "filepath": f"{content_root}/{entry['file']}",
                "showInSidebar": True,
            }
        else:
            raise ConfigError(f"unknown manifest entry type {entry['type']!r} at {route!r}")
    return out


def _upsert_tab(config: dict[str, Any], label: dict[str, Any]) -> None:
    """Add or refresh the MCP tab.

    ``navigation.tabs`` is a list, so idempotency comes from matching on ``to``
    rather than from a dict key. Key order matches the existing entries because
    json.dumps writes insertion order and a different order is a pointless diff.
    """
    tabs = (config.get("navigation") or {}).get("tabs")
    if not isinstance(tabs, list):
        raise ConfigError("could not locate navigation.tabs in scalar.config.json")

    tab = {"title": label["title"], "icon": label["icon"], "to": ROUTE, "newTab": False}
    for i, existing in enumerate(tabs):
        if isinstance(existing, dict) and existing.get("to") == ROUTE:
            tabs[i] = tab
            return

    for i, existing in enumerate(tabs):
        if isinstance(existing, dict) and existing.get("to") == TAB_AFTER:
            tabs.insert(i, tab)
            return
    tabs.append(tab)


def _locate_routes(config: dict[str, Any]) -> dict[str, Any]:
    """Return ``navigation.routes``.

    Prefer the documented location. Fall back to walking for a dict that already
    holds ``/api-reference`` — a key that certainly exists — so a wrapper rename
    does not silently create a second, unreachable routes object. (The TLD
    patcher locates its own section by name, which cannot work here on the first
    run, when ``/mcp-server`` does not exist yet.)
    """
    routes = (config.get("navigation") or {}).get("routes")
    if isinstance(routes, dict):
        return routes
    for value in _walk_dicts(config):
        if isinstance(value.get("/api-reference"), dict):
            return value
    raise ConfigError("could not locate navigation.routes in scalar.config.json")


def _walk_dicts(value: Any) -> Iterator[dict[str, Any]]:
    if isinstance(value, dict):
        yield value
        for child in value.values():
            yield from _walk_dicts(child)
    elif isinstance(value, list):
        for child in value:
            yield from _walk_dicts(child)


def _check_filepaths(group: dict[str, Any], scalar_root: Path) -> None:
    missing = [
        node["filepath"]
        for node in _walk_dicts(group)
        if node.get("type") == "page" and not (scalar_root / node["filepath"]).is_file()
    ]
    if missing:
        raise ConfigError(
            "the nav would point at pages that do not exist: " + ", ".join(sorted(missing))
        )
