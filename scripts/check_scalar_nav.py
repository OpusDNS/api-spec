#!/usr/bin/env python3
"""Fail when a nav entry in ``scalar/scalar.config.json`` points at a missing file.

Scalar renders such an entry as nothing, and ``scalar project check-config`` does
not catch it. Used by the Validate Scalar docs check and by the Generate TLD
Knowledge Base workflow before it opens its PR.

Run from the api-spec root:

    python scripts/check_scalar_nav.py
"""

from __future__ import annotations

import argparse
import json
import sys
from collections.abc import Iterator
from pathlib import Path


def walk(value: object) -> Iterator[dict]:
    if isinstance(value, dict):
        yield value
        for child in value.values():
            yield from walk(child)
    elif isinstance(value, list):
        for child in value:
            yield from walk(child)


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__.splitlines()[0])
    parser.add_argument("--root", type=Path, default=Path("scalar"), help="Scalar project directory")
    args = parser.parse_args()

    config = json.loads((args.root / "scalar.config.json").read_text(encoding="utf-8"))
    missing = sorted(
        node["filepath"]
        for node in walk(config)
        if isinstance(node.get("filepath"), str) and not (args.root / node["filepath"]).is_file()
    )
    if missing:
        print("nav entries point at files that do not exist:")
        for path in missing:
            print(f"  {path}")
        return 1
    print("all nav filepaths resolve")
    return 0


if __name__ == "__main__":
    sys.exit(main())
