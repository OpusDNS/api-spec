"""Unit tests for the notes-merge and spec-filtering logic in ``generate_tld_knowledge_base``.

Run from the ``scripts/`` directory (or repo root) with ``python -m pytest``.
"""

import json
from pathlib import Path

import pytest
import yaml

from generate_tld_knowledge_base import (
    DEFAULT_NOTES_NAME,
    NOTES_DIRNAME,
    is_manual,
    load_excluded,
    load_notes,
    load_specs,
    main,
)


def _write(output_dir: Path, name: str, content: str) -> None:
    notes_dir = output_dir / NOTES_DIRNAME
    notes_dir.mkdir(parents=True, exist_ok=True)
    (notes_dir / name).write_text(content, encoding="utf-8")


def test_per_tld_file_overrides_default(tmp_path: Path) -> None:
    _write(tmp_path, "ca.md", "## CA\n\nca body\n")
    _write(tmp_path, DEFAULT_NOTES_NAME, "## Default\n\ndefault body\n")
    result = load_notes(tmp_path, "ca")
    assert "ca body" in result
    assert "default body" not in result


def test_falls_back_to_default_when_no_per_tld_file(tmp_path: Path) -> None:
    _write(tmp_path, DEFAULT_NOTES_NAME, "## Default\n\ndefault body\n")
    assert "default body" in load_notes(tmp_path, "xyz")


def test_returns_empty_when_no_notes_exist(tmp_path: Path) -> None:
    assert load_notes(tmp_path, "xyz") == ""


def test_empty_per_tld_file_warns_and_falls_back(tmp_path: Path, capsys: pytest.CaptureFixture[str]) -> None:
    _write(tmp_path, "ca.md", "\n   \n")
    _write(tmp_path, DEFAULT_NOTES_NAME, "## Default\n\ndefault body\n")
    result = load_notes(tmp_path, "ca")
    assert "default body" in result
    assert "exists but is empty" in capsys.readouterr().err


@pytest.mark.parametrize("raw", ["body", "\n\nbody\n\n\n", "\nbody\n"])
def test_surrounding_whitespace_normalises_to_single_separators(tmp_path: Path, raw: str) -> None:
    _write(tmp_path, DEFAULT_NOTES_NAME, raw)
    assert load_notes(tmp_path, "xyz") == "\nbody\n"


def test_append_is_idempotent_against_render_output(tmp_path: Path) -> None:
    _write(tmp_path, DEFAULT_NOTES_NAME, "## Notes\n\nbody\n")
    page = "# Title\n\n## Section\n\nrow\n"  # render() ends with a single trailing newline
    merged = page + load_notes(tmp_path, "xyz")
    assert merged == "# Title\n\n## Section\n\nrow\n\n## Notes\n\nbody\n"
    assert merged == page + load_notes(tmp_path, "xyz")


def test_load_excluded_missing_file_is_empty(tmp_path: Path) -> None:
    assert load_excluded(tmp_path / "nope.txt") == set()


def test_load_excluded_strips_comments_blanks_and_yaml_suffix(tmp_path: Path) -> None:
    target = tmp_path / "excluded_tlds.txt"
    target.write_text(
        "\n".join([
            "# header",
            "si",
            "it  # in OTE",
            "",
            "cn.com.yaml",
            "  lu  ",
            "",
        ]),
        encoding="utf-8",
    )
    assert load_excluded(target) == {"si", "it", "cn.com", "lu"}


def _write_spec(
    input_dir: Path,
    name: str,
    *,
    enabled: bool = True,
    provisioning_protocol: str = "EPP",
) -> None:
    spec = {
        "tld_configuration": {
            "enabled": enabled,
            "tlds": [{"name": name, "type": "gTLD"}],
            "registry": {
                "name": "Example Registry",
                "provisioning_protocol": provisioning_protocol,
            },
        }
    }
    (input_dir / f"{name}.yaml").write_text(yaml.safe_dump(spec), encoding="utf-8")


def _loaded_slugs(input_dir: Path, **kwargs: bool) -> set[str]:
    kwargs.setdefault("include_disabled", False)
    kwargs.setdefault("include_manual", False)
    specs = load_specs(input_dir, allowlist=None, **kwargs)
    return {data["tld_configuration"]["tlds"][0]["name"] for _path, data in specs}


@pytest.mark.parametrize(
    ("kwargs", "expected"),
    [
        ({}, {"epp"}),
        ({"include_manual": True}, {"epp", "manual"}),
        ({"include_disabled": True}, {"epp", "disabled"}),
        ({"include_disabled": True, "include_manual": True}, {"epp", "disabled", "manual"}),
    ],
)
def test_load_specs_excludes_manual_and_disabled_tlds(
    tmp_path: Path, kwargs: dict[str, bool], expected: set[str]
) -> None:
    _write_spec(tmp_path, "epp")
    _write_spec(tmp_path, "manual", provisioning_protocol="Custom")
    _write_spec(tmp_path, "disabled", enabled=False)
    assert _loaded_slugs(tmp_path, **kwargs) == expected


@pytest.mark.parametrize(
    "config",
    [
        {},
        {"registry": None},
        {"registry": {}},
        {"registry": {"provisioning_protocol": None}},
        {"registry": {"provisioning_protocol": "EPP"}},
        {"registry": {"provisioning_protocol": "RRI"}},
    ],
)
def test_is_manual_treats_missing_or_known_protocols_as_not_manual(config: dict) -> None:
    assert not is_manual(config, "x.yaml")


def test_is_manual_detects_manual_protocol() -> None:
    assert is_manual({"registry": {"provisioning_protocol": "Custom"}}, "x.yaml")


@pytest.mark.parametrize("protocol", ["custom", "MANUAL", "API"])
def test_is_manual_fails_fast_on_unknown_protocol(protocol: str) -> None:
    with pytest.raises(SystemExit, match="unknown registry.provisioning_protocol"):
        is_manual({"registry": {"provisioning_protocol": protocol}}, "x.yaml")


# ---------------------------------------------------------------------------
# --tld runs render part of the corpus, so they must not reconcile the whole of it
# ---------------------------------------------------------------------------


def _generated_corpus(tmp_path: Path) -> tuple[Path, Path, Path]:
    """Build an input dir, an output dir and a config, then generate them in full."""
    input_dir = tmp_path / "compiled"
    input_dir.mkdir()
    for name in ("keep", "target"):
        _write_spec(input_dir, name)

    output_dir = tmp_path / "tld-knowledge-base"
    _write(output_dir, DEFAULT_NOTES_NAME, "## Notes\n\ndefault\n")

    config_path = tmp_path / "scalar.config.json"
    config_path.write_text(
        json.dumps({"navigation": {"routes": {"/tld-knowledge-base": {"children": {}}}}}),
        encoding="utf-8",
    )

    argv = ["--input", str(input_dir), "--output", str(output_dir), "--config", str(config_path)]
    assert main(argv) == 0
    return input_dir, output_dir, config_path


def _page_slugs(output_dir: Path) -> set[str]:
    return {
        path.stem
        for category in ("cctlds", "gtlds")
        for path in (output_dir / category).glob("*.md")
    }


def _sidebar_slugs(config_path: Path) -> set[str]:
    config = json.loads(config_path.read_text(encoding="utf-8"))
    groups = config["navigation"]["routes"]["/tld-knowledge-base"]["children"]
    return {slug.lstrip("/") for group in groups.values() for slug in group["children"]}


def test_tld_run_leaves_other_pages_and_sidebar_alone(tmp_path: Path) -> None:
    input_dir, output_dir, config_path = _generated_corpus(tmp_path)
    assert _page_slugs(output_dir) == {"keep", "target"}
    assert _sidebar_slugs(config_path) == {"keep", "target"}

    _write(output_dir, "target.md", "## Notes\n\ntarget-specific\n")
    argv = [
        "--input", str(input_dir),
        "--output", str(output_dir),
        "--config", str(config_path),
        "--tld", "target",
    ]
    assert main(argv) == 0

    # The allowlisted page picked up its new notes...
    assert "target-specific" in (output_dir / "gtlds" / "target.md").read_text(encoding="utf-8")
    # ...and nothing else was pruned or dropped from the sidebar.
    assert _page_slugs(output_dir) == {"keep", "target"}
    assert _sidebar_slugs(config_path) == {"keep", "target"}


def test_full_run_still_prunes_a_page_that_left_the_corpus(tmp_path: Path) -> None:
    input_dir, output_dir, config_path = _generated_corpus(tmp_path)

    (input_dir / "keep.yaml").unlink()
    argv = ["--input", str(input_dir), "--output", str(output_dir), "--config", str(config_path)]
    assert main(argv) == 0

    assert _page_slugs(output_dir) == {"target"}
    assert _sidebar_slugs(config_path) == {"target"}
