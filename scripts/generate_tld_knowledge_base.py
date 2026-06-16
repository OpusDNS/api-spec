#!/usr/bin/env python3
"""Generate the OpusDNS TLD Knowledge Base from compiled TLD specs.

Reads compiled YAML specifications, writes one Markdown page per enabled,
non-manual TLD into ``scalar/content/tld-knowledge-base/{cctlds,gtlds}/<tld>.md``
and refreshes the sidebar in ``scalar/scalar.config.json``.
"""

from __future__ import annotations

import argparse
import sys
from pathlib import Path
from typing import Iterable

import yaml

REPO_ROOT = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(REPO_ROOT / "scripts"))

from tld_knowledge_base import render, scalar_config  # noqa: E402

DEFAULT_INPUT = REPO_ROOT.parent / "tld-specifications" / "compiled_specifications"
DEFAULT_OUTPUT = REPO_ROOT / "scalar" / "content" / "tld-knowledge-base"
DEFAULT_CONFIG = REPO_ROOT / "scalar" / "scalar.config.json"
DEFAULT_EXCLUDE_FILE = REPO_ROOT / "scripts" / "tld_knowledge_base" / "excluded_tlds.txt"

# Manually-provisioned TLDs (specifications/ras_manual in OpusDNS/tld-specifications)
# are enabled in the API but should not be published in the knowledge base.
MANUAL_PROVISIONING_PROTOCOL = "Custom"
# Must stay in sync with the provisioning_protocol enum in
# OpusDNS/tld-specifications specifications/schema.json; an unknown value means
# this script can no longer tell manual TLDs apart, so it fails fast.
PROVISIONING_PROTOCOLS = {"EPP", "RRI", "RRP", MANUAL_PROVISIONING_PROTOCOL}


def is_manual(config: dict, source: str) -> bool:
    registry = config.get("registry") or {}
    protocol = registry.get("provisioning_protocol")
    if protocol is not None and protocol not in PROVISIONING_PROTOCOLS:
        raise SystemExit(
            f"{source}: unknown registry.provisioning_protocol {protocol!r}; "
            f"expected one of {sorted(PROVISIONING_PROTOCOLS)}"
        )
    return protocol == MANUAL_PROVISIONING_PROTOCOL


def parse_args(argv: list[str] | None = None) -> argparse.Namespace:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument(
        "--input",
        type=Path,
        default=DEFAULT_INPUT,
        help="Directory containing compiled TLD spec YAML files (default: %(default)s)",
    )
    parser.add_argument(
        "--output",
        type=Path,
        default=DEFAULT_OUTPUT,
        help="Target directory for Markdown pages (default: %(default)s)",
    )
    parser.add_argument(
        "--config",
        type=Path,
        default=DEFAULT_CONFIG,
        help="Path to scalar.config.json (default: %(default)s)",
    )
    parser.add_argument(
        "--include-disabled",
        action="store_true",
        help="Also render TLDs whose tld_configuration.enabled is false",
    )
    parser.add_argument(
        "--include-manual",
        action="store_true",
        help=(
            "Also render manually-provisioned TLDs "
            f"(registry provisioning_protocol {MANUAL_PROVISIONING_PROTOCOL!r})"
        ),
    )
    parser.add_argument(
        "--exclude-file",
        type=Path,
        default=DEFAULT_EXCLUDE_FILE,
        help="File listing TLD spec names to exclude from the knowledge base (default: %(default)s)",
    )
    parser.add_argument(
        "--include-excluded",
        action="store_true",
        help="Also render TLDs listed in the exclude file",
    )
    parser.add_argument(
        "--dry-run",
        action="store_true",
        help="Render and diff but do not write any files",
    )
    parser.add_argument(
        "--tld",
        action="append",
        help="Limit generation to specific TLD(s); may be repeated",
    )
    return parser.parse_args(argv)


def load_excluded(path: Path) -> set[str]:
    """TLD names to keep out of the knowledge base, read from ``path``.

    One TLD name per line (e.g. ``si``, ``cn.com``); a trailing ``.yaml`` is
    tolerated. Anything after ``#`` is a comment. A missing file means nothing
    is excluded.
    """
    if not path.exists():
        return set()
    names: set[str] = set()
    for line in path.read_text(encoding="utf-8").splitlines():
        entry = line.split("#", 1)[0].strip()
        if entry:
            names.add(entry.removesuffix(".yaml"))
    return names


def tld_name(spec: dict) -> str:
    tlds = (spec.get("tld_configuration") or {}).get("tlds") or []
    return tlds[0].get("name", "") if tlds else ""


def apply_exclusions(
    specs: list[tuple[Path, dict]],
    excluded: set[str],
) -> list[tuple[Path, dict]]:
    if not excluded:
        return specs
    present = {tld_name(spec) for _path, spec in specs}
    for missing in sorted(excluded - present):
        print(
            f"::warning::excluded TLD '{missing}' matches no spec; "
            "remove it from the exclude file or fix the name",
            file=sys.stderr,
        )
    return [(path, spec) for path, spec in specs if tld_name(spec) not in excluded]


def load_specs(
    input_dir: Path,
    *,
    include_disabled: bool,
    include_manual: bool,
    allowlist: set[str] | None,
) -> list[tuple[Path, dict]]:
    if not input_dir.exists():
        raise SystemExit(f"Input directory does not exist: {input_dir}")
    specs: list[tuple[Path, dict]] = []
    skipped_manual = 0
    for path in sorted(input_dir.glob("*.yaml")):
        try:
            data = yaml.safe_load(path.read_text(encoding="utf-8")) or {}
        except yaml.YAMLError as exc:
            print(f"::warning::failed to parse {path.name}: {exc}", file=sys.stderr)
            continue
        config = data.get("tld_configuration") or {}
        if not include_disabled and not config.get("enabled"):
            continue
        if not include_manual and is_manual(config, path.name):
            skipped_manual += 1
            continue
        slug = render.page_slug(data)
        if allowlist is not None and slug not in allowlist:
            continue
        specs.append((path, data))
    if skipped_manual:
        print(
            f"skipped {skipped_manual} manually-provisioned spec(s); "
            "use --include-manual to render them",
            file=sys.stderr,
        )
    return specs


NOTES_DIRNAME = "_notes"
DEFAULT_NOTES_NAME = "_default.md"


def load_notes(output_dir: Path, slug: str) -> str:
    """Return the trailing notes block for a TLD, or "".

    Looks for a per-TLD ``_notes/<slug>.md`` and falls back to
    ``_notes/_default.md``. A file counts as present only when it has
    non-whitespace content; an existing-but-blank per-TLD file is treated as a
    mistake (it warns and falls back to the default) rather than silently
    suppressing notes. The returned text is normalised so it always starts on
    its own blank line and ends with a single trailing newline, keeping page
    output idempotent regardless of the source file's surrounding whitespace.
    """
    notes_dir = output_dir / NOTES_DIRNAME
    per_tld = notes_dir / f"{slug}.md"
    for candidate in (per_tld, notes_dir / DEFAULT_NOTES_NAME):
        if not candidate.exists():
            continue
        raw = candidate.read_text(encoding="utf-8")
        if raw.strip():
            return f"\n{raw.strip(chr(10))}\n"
        if candidate == per_tld:
            print(
                f"::warning::{candidate} exists but is empty; "
                f"falling back to {DEFAULT_NOTES_NAME}",
                file=sys.stderr,
            )
    return ""


def write_pages(
    specs: Iterable[tuple[Path, dict]],
    output_dir: Path,
    *,
    dry_run: bool,
) -> list[tuple[str, str, str]]:
    """Render and write Markdown pages; return ``(category, slug, title)`` tuples."""
    entries: list[tuple[str, str, str]] = []
    for _path, spec in specs:
        slug = render.page_slug(spec)
        if not slug:
            continue
        category = render.page_category(spec)
        title = render.page_title(spec)
        markdown = render.render(spec) + load_notes(output_dir, slug)
        target = output_dir / category / f"{slug}.md"
        if dry_run:
            print(f"[dry-run] would write {target.relative_to(output_dir.parent)}")
        else:
            target.parent.mkdir(parents=True, exist_ok=True)
            previous = target.read_text(encoding="utf-8") if target.exists() else None
            if previous != markdown:
                target.write_text(markdown, encoding="utf-8")
                print(f"wrote {target.relative_to(output_dir.parent)}")
        entries.append((category, slug, title))
    return entries


def prune_stale_pages(
    output_dir: Path,
    keep: set[tuple[str, str]],
    *,
    dry_run: bool,
) -> None:
    """Remove previously-generated pages that are no longer in scope."""
    for category in ("cctlds", "gtlds"):
        category_dir = output_dir / category
        if not category_dir.exists():
            continue
        for path in sorted(category_dir.glob("*.md")):
            if (category, path.stem) in keep:
                continue
            if dry_run:
                print(f"[dry-run] would remove {path.relative_to(output_dir.parent)}")
            else:
                path.unlink()
                print(f"removed {path.relative_to(output_dir.parent)}")


def main(argv: list[str] | None = None) -> int:
    args = parse_args(argv)
    allowlist = set(args.tld) if args.tld else None
    specs = load_specs(
        args.input,
        include_disabled=args.include_disabled,
        include_manual=args.include_manual,
        allowlist=allowlist,
    )
    if not args.include_excluded:
        specs = apply_exclusions(specs, load_excluded(args.exclude_file))
    if not specs:
        print("No matching compiled spec files found.", file=sys.stderr)
        return 1

    if not (args.output / NOTES_DIRNAME / DEFAULT_NOTES_NAME).exists():
        print(
            f"::warning::{args.output / NOTES_DIRNAME / DEFAULT_NOTES_NAME} not found; "
            "pages without their own _notes file will have no closing notes section",
            file=sys.stderr,
        )

    entries = write_pages(specs, args.output, dry_run=args.dry_run)
    keep = {(category, slug) for category, slug, _ in entries}
    prune_stale_pages(args.output, keep, dry_run=args.dry_run)

    if args.dry_run:
        print(f"[dry-run] would refresh {args.config}")
        return 0

    changed = scalar_config.update_config(args.config, entries=entries)
    print(f"{'updated' if changed else 'unchanged'} {args.config.name}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
