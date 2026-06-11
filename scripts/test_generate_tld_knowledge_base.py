"""Unit tests for the notes-merge and spec-filtering logic in ``generate_tld_knowledge_base``.

Run from the ``scripts/`` directory (or repo root) with ``python -m pytest``.
"""

from pathlib import Path

import pytest
import yaml

from generate_tld_knowledge_base import (
    DEFAULT_NOTES_NAME,
    NOTES_DIRNAME,
    is_manual,
    load_notes,
    load_specs,
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
