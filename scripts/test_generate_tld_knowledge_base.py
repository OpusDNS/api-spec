"""Unit tests for the notes-merge logic in ``generate_tld_knowledge_base``.

Run from the ``scripts/`` directory (or repo root) with ``python -m pytest``.
"""

from pathlib import Path

import pytest

from generate_tld_knowledge_base import DEFAULT_NOTES_NAME, NOTES_DIRNAME, load_notes


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
