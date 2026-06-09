#!/usr/bin/env python3
"""Generate the OpusDNS TLD Knowledge Base from compiled TLD specs.

Reads compiled YAML specifications, writes one Markdown page per enabled TLD
into ``scalar/content/tld-knowledge-base/{cctlds,gtlds}/<tld>.md`` and
refreshes the sidebar in ``scalar/scalar.config.json``.
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


def load_specs(
    input_dir: Path,
    *,
    include_disabled: bool,
    allowlist: set[str] | None,
) -> list[tuple[Path, dict]]:
    if not input_dir.exists():
        raise SystemExit(f"Input directory does not exist: {input_dir}")
    specs: list[tuple[Path, dict]] = []
    for path in sorted(input_dir.glob("*.yaml")):
        try:
            data = yaml.safe_load(path.read_text(encoding="utf-8")) or {}
        except yaml.YAMLError as exc:
            print(f"::warning::failed to parse {path.name}: {exc}", file=sys.stderr)
            continue
        config = data.get("tld_configuration") or {}
        if not include_disabled and not config.get("enabled"):
            continue
        slug = render.page_slug(data)
        if allowlist is not None and slug not in allowlist:
            continue
        specs.append((path, data))
    return specs


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
        markdown = render.render(spec)
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
    specs = load_specs(args.input, include_disabled=args.include_disabled, allowlist=allowlist)
    if not specs:
        print("No matching compiled spec files found.", file=sys.stderr)
        return 1

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
