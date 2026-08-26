"""Unit tests for the MCP docs sync and its Scalar nav patcher.

Run from the ``scripts/`` directory (or repo root) with ``python -m pytest``.
"""

from __future__ import annotations

import json
from pathlib import Path

import pytest

import sync_mcp_docs
from mcp_docs import scalar_config

MANIFEST = {
    "route": "/mcp-server",
    "tab": {"title": "MCP", "icon": "phosphor/regular/plugs"},
    "group": {"title": "MCP server", "icon": "phosphor/regular/plugs"},
    "children": [
        {
            "type": "page",
            "route": "/",
            "title": "Overview",
            "icon": "line/interface-home-house",
            "file": "pages/overview.md",
        },
        {
            "type": "group",
            "route": "/tools",
            "title": "Tools reference",
            "icon": "line/programming-script-code",
            "children": [
                {
                    "type": "page",
                    "route": "/",
                    "title": "All tools",
                    "icon": "line/programming-script-code",
                    "file": "generated/tools.md",
                }
            ],
        },
    ],
}

BASE_CONFIG = {
    "navigation": {
        "tabs": [
            {"title": "Guides", "icon": "line/a", "to": "/", "newTab": False},
            {"title": "API Reference", "icon": "line/b", "to": "/api-reference", "newTab": False},
            {"title": "TLD Info", "icon": "line/c", "to": "/tld-knowledge-base", "newTab": False},
            {"title": "Changelog", "icon": "line/d", "to": "/changelog", "newTab": False},
        ],
        "routes": {
            "/": {"type": "group", "title": "Guides", "children": {}},
            "/api-reference": {"type": "openapi", "title": "API Reference"},
            "/tld-knowledge-base": {"type": "group", "title": "TLD KB", "children": {}},
        },
    }
}


def write_config(tmp_path: Path, config: dict | None = None) -> Path:
    path = tmp_path / "scalar.config.json"
    body = json.dumps(config if config is not None else BASE_CONFIG, indent=2, ensure_ascii=False)
    path.write_text(body + "\n", encoding="utf-8")
    return path


def write_source(tmp_path: Path, manifest: dict = MANIFEST) -> Path:
    source = tmp_path / "src"
    (source / "pages").mkdir(parents=True)
    (source / "generated").mkdir(parents=True)
    (source / "_partials").mkdir(parents=True)
    (source / "pages" / "overview.md").write_text("# Overview\n", encoding="utf-8")
    (source / "generated" / "tools.md").write_text("# Tools\n", encoding="utf-8")
    (source / "_partials" / "intro.md").write_text("not published\n", encoding="utf-8")
    (source / "README.md").write_text("not published\n", encoding="utf-8")
    (source / "nav.json").write_text(json.dumps(manifest, indent=2) + "\n", encoding="utf-8")
    return source


# --- nav patcher ---------------------------------------------------------


def test_registers_route_and_tab(tmp_path: Path) -> None:
    path = write_config(tmp_path)
    assert scalar_config.update_config(path, manifest=MANIFEST) is True

    config = json.loads(path.read_text(encoding="utf-8"))
    group = config["navigation"]["routes"]["/mcp-server"]
    assert group["title"] == "MCP server"
    assert group["children"]["/"]["filepath"] == "content/mcp-server/pages/overview.md"
    assert group["children"]["/tools"]["children"]["/"]["filepath"] == (
        "content/mcp-server/generated/tools.md"
    )

    # Inserted before TLD Info, so Changelog stays last.
    tabs = [t["to"] for t in config["navigation"]["tabs"]]
    assert tabs == ["/", "/api-reference", "/mcp-server", "/tld-knowledge-base", "/changelog"]


def test_second_run_is_a_noop(tmp_path: Path) -> None:
    path = write_config(tmp_path)
    assert scalar_config.update_config(path, manifest=MANIFEST) is True
    before = path.read_text(encoding="utf-8")
    assert scalar_config.update_config(path, manifest=MANIFEST) is False
    assert path.read_text(encoding="utf-8") == before


def test_tab_is_updated_in_place_not_duplicated(tmp_path: Path) -> None:
    path = write_config(tmp_path)
    scalar_config.update_config(path, manifest=MANIFEST)
    renamed = dict(MANIFEST, tab={"title": "MCP server", "icon": "line/arrow-right"})
    scalar_config.update_config(path, manifest=renamed)

    tabs = json.loads(path.read_text(encoding="utf-8"))["navigation"]["tabs"]
    mcp = [t for t in tabs if t["to"] == "/mcp-server"]
    assert len(mcp) == 1
    assert mcp[0]["title"] == "MCP server"


def test_removed_pages_propagate(tmp_path: Path) -> None:
    path = write_config(tmp_path)
    scalar_config.update_config(path, manifest=MANIFEST)
    trimmed = dict(MANIFEST, children=MANIFEST["children"][:1])
    scalar_config.update_config(path, manifest=trimmed)

    children = json.loads(path.read_text(encoding="utf-8"))["navigation"]["routes"]["/mcp-server"][
        "children"
    ]
    assert set(children) == {"/"}


def test_leaves_other_sections_untouched(tmp_path: Path) -> None:
    path = write_config(tmp_path)
    scalar_config.update_config(path, manifest=MANIFEST)
    config = json.loads(path.read_text(encoding="utf-8"))
    assert config["navigation"]["routes"]["/tld-knowledge-base"] == (
        BASE_CONFIG["navigation"]["routes"]["/tld-knowledge-base"]
    )
    assert config["navigation"]["routes"]["/api-reference"] == (
        BASE_CONFIG["navigation"]["routes"]["/api-reference"]
    )


def test_locates_routes_through_a_renamed_wrapper(tmp_path: Path) -> None:
    """The fallback walk keeps a wrapper rename from creating a second, dead tree."""
    moved = {"sidebar": {"routes": dict(BASE_CONFIG["navigation"]["routes"])}, "navigation": {"tabs": list(BASE_CONFIG["navigation"]["tabs"])}}
    path = write_config(tmp_path, moved)
    scalar_config.update_config(path, manifest=MANIFEST)
    config = json.loads(path.read_text(encoding="utf-8"))
    assert "/mcp-server" in config["sidebar"]["routes"]


def test_refuses_an_empty_manifest(tmp_path: Path) -> None:
    path = write_config(tmp_path)
    with pytest.raises(scalar_config.ConfigError, match="no pages"):
        scalar_config.update_config(path, manifest=dict(MANIFEST, children=[]))


def test_refuses_the_reserved_mcp_route(tmp_path: Path) -> None:
    """/mcp on the docs domain is Scalar's own MCP endpoint."""
    path = write_config(tmp_path)
    with pytest.raises(scalar_config.ConfigError):
        scalar_config.update_config(path, manifest=dict(MANIFEST, route="/mcp"))


def test_refuses_a_malformed_icon(tmp_path: Path) -> None:
    path = write_config(tmp_path)
    bad = dict(MANIFEST, tab={"title": "MCP", "icon": "phosphor/plugs"})
    with pytest.raises(scalar_config.ConfigError, match="icon"):
        scalar_config.update_config(path, manifest=bad)


def test_refuses_a_page_with_no_file(tmp_path: Path) -> None:
    path = write_config(tmp_path)
    bad = dict(
        MANIFEST,
        children=[{"type": "page", "route": "/x", "title": "X", "icon": "line/a"}],
    )
    with pytest.raises(scalar_config.ConfigError, match="no file"):
        scalar_config.update_config(path, manifest=bad)


def test_checks_filepaths_exist_when_asked(tmp_path: Path) -> None:
    path = write_config(tmp_path)
    with pytest.raises(scalar_config.ConfigError, match="do not exist"):
        scalar_config.update_config(path, manifest=MANIFEST, scalar_root=tmp_path)


def test_serialisation_matches_the_tld_patcher(tmp_path: Path) -> None:
    """Two bots write this file; a different style means each reformats the other."""
    path = write_config(tmp_path)
    scalar_config.update_config(path, manifest=MANIFEST)
    raw = path.read_text(encoding="utf-8")
    config = json.loads(raw)
    assert raw == json.dumps(config, indent=2, ensure_ascii=False) + "\n"


# --- sync script ---------------------------------------------------------


def test_copies_declared_pages_and_nothing_else(tmp_path: Path) -> None:
    source = write_source(tmp_path)
    content = tmp_path / "content" / "mcp-server"
    config = write_config(tmp_path)

    assert sync_mcp_docs.main(
        ["--source", str(source), "--content", str(content), "--config", str(config)]
    ) == 0

    assert (content / "pages" / "overview.md").read_text(encoding="utf-8") == "# Overview\n"
    assert (content / "generated" / "tools.md").exists()
    # Partials are merged upstream and the README documents the source tree.
    assert not (content / "_partials").exists()
    assert not (content / "README.md").exists()
    assert not (content / "nav.json").exists()


def test_prunes_pages_the_manifest_dropped(tmp_path: Path) -> None:
    source = write_source(tmp_path)
    content = tmp_path / "content" / "mcp-server"
    config = write_config(tmp_path)
    args = ["--source", str(source), "--content", str(content), "--config", str(config)]
    sync_mcp_docs.main(args)

    stale = content / "pages" / "gone.md"
    stale.write_text("# Gone\n", encoding="utf-8")
    sync_mcp_docs.main(args)
    assert not stale.exists()
    assert (content / "pages" / "overview.md").exists()


def test_dry_run_writes_nothing(tmp_path: Path) -> None:
    source = write_source(tmp_path)
    content = tmp_path / "content" / "mcp-server"
    config = write_config(tmp_path)
    before = config.read_text(encoding="utf-8")

    sync_mcp_docs.main(
        ["--source", str(source), "--content", str(content), "--config", str(config), "--dry-run"]
    )
    assert not content.exists()
    assert config.read_text(encoding="utf-8") == before
    assert not (config.parent / ".scalar.config.dry-run.json").exists()


def test_fails_when_a_declared_page_is_missing(tmp_path: Path) -> None:
    source = write_source(tmp_path)
    (source / "pages" / "overview.md").unlink()
    with pytest.raises(SystemExit, match="pages/overview.md"):
        sync_mcp_docs.main(
            [
                "--source",
                str(source),
                "--content",
                str(tmp_path / "content" / "mcp-server"),
                "--config",
                str(write_config(tmp_path)),
            ]
        )


def test_fails_without_a_manifest(tmp_path: Path) -> None:
    source = write_source(tmp_path)
    (source / "nav.json").unlink()
    with pytest.raises(SystemExit, match="nav.json"):
        sync_mcp_docs.main(["--source", str(source)])


def test_fails_on_an_empty_manifest(tmp_path: Path) -> None:
    """A bad checkout must not silently empty the published section."""
    source = write_source(tmp_path, dict(MANIFEST, children=[]))
    with pytest.raises(SystemExit, match="refusing to empty"):
        sync_mcp_docs.main(["--source", str(source)])
