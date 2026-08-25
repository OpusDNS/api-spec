# TLD Knowledge Base generator

`generate_tld_knowledge_base.py` turns compiled TLD specifications from
[OpusDNS/tld-specifications](https://github.com/OpusDNS/tld-specifications)
into the Markdown pages served by Scalar under
`scalar/content/tld-knowledge-base/` and registers them in
`scalar/scalar.config.json`.

## Layout

```
scripts/
├── generate_tld_knowledge_base.py   # CLI entry point
└── tld_knowledge_base/
    ├── countries.py              # ISO-3166 names + flag emoji
    ├── excluded_tlds.txt         # pre-launch docs holdback
    ├── formatters.py             # value formatters (durations, yes/no, …)
    ├── registry_backends.yaml    # which backend to document for multi-backend TLDs
    ├── render.py                 # spec dict → Markdown
    └── scalar_config.py          # idempotent sidebar registration
```

## Input layout

`compile_tld_specs.py` writes `compiled_specifications/<backend>/<tld>/<version>.yaml`, and
the generator reads only that tree. It used to write a flat `<tld>.yaml` alongside; those are
no longer produced, but `compiled_specifications/` is gitignored and nothing prunes it, so an
older checkout keeps serving stale flat files forever. They are ignored with a warning —
delete them.

## Multi-backend TLDs

A handful of TLDs are compiled under two registry backends, usually because a migration is
coming: `.nl` (`sidn` → `sidn_hello`), `.lu` (`dns_lu` → `restena_lu`). The knowledge base
publishes one page per TLD, so each needs an entry in `registry_backends.yaml` naming the
backend to document. Without one the generator fails rather than picking, because the choice
silently swaps the page's registry, contact rules and lifecycle.

`migrates_to` / `migrates_on` in that file are documentation, not automation. The generator
never flips a backend on a date — registry migrations slip — but it warns once `migrates_on`
has passed, so a stale entry shows up in the weekly run. Leave `migrates_on` out when the date
is not confirmed.

Generated content lives in:

```
scalar/content/tld-knowledge-base/
├── cctlds/<tld>.md   # country-code TLDs (generated)
├── gtlds/<tld>.md    # generic TLDs (generated)
└── _notes/           # hand-authored, appended to each page (not generated)
    ├── _default.md   # used when a TLD has no notes file of its own
    └── <tld>.md      # per-TLD override (e.g. ca.md)
```

## Notes (the closing section of each page)

The generated tables are spec-derived and overwritten on every run, so they are
not the place for prose. Instead, each page's closing section is sourced from a
hand-authored Markdown file under `_notes/` and appended verbatim during
generation:

- `_notes/<tld>.md` if it exists, otherwise `_notes/_default.md`.
- Files in `_notes/` are inputs — they are never pruned or regenerated, and they
  are not registered as Scalar routes, so they only ever appear *inside* the TLD
  page they are merged into.
- Author whatever `##` sections you like (e.g. `ca.md` documents the
  `CIRA_CPR` Canadian Presence Requirement legal types). A per-TLD file fully
  replaces the default — it does not stack on top of it.

## Local usage

1. Make sure a sibling clone of `tld-specifications` exists at
   `../tld-specifications` and you have compiled it once:

   ```bash
   cd ../tld-specifications
   pip install -r requirements.txt
   python scripts/compile_tld_specs.py --schema ./specifications/schema.json
   ```

2. Run the generator from the `api-spec` root:

   ```bash
   pip install pyyaml
   python scripts/generate_tld_knowledge_base.py            # all enabled TLDs
   python scripts/generate_tld_knowledge_base.py --dry-run  # preview only
   ```

   Prefer the full run even when you only touched one TLD's notes: pages whose
   content did not change are left alone, so `git diff` is the filter. A full run
   is also the only run that reconciles the corpus &mdash; it prunes pages whose
   TLD is gone and rewrites the generated half of the `scalar.config.json`
   sidebar.

   `--tld nl` renders just that page and skips both of those steps, precisely
   because a partial run cannot reconcile a whole corpus. Use it to iterate on one
   page; finish with a full run so removals and the sidebar land.

   Useful flags:

   - `--input PATH` &mdash; directory with compiled spec YAML files
     (default: `../tld-specifications/compiled_specifications`).
   - `--output PATH` &mdash; target Markdown directory.
   - `--config PATH` &mdash; path to `scalar.config.json`.
   - `--include-disabled` &mdash; also render specs with
     `tld_configuration.enabled: false`.
   - `--tld NAME` &mdash; limit generation to one TLD; may be repeated.
   - `--backends-file PATH` &mdash; path to `registry_backends.yaml`.

3. Inspect the changes with `git diff` and open a pull request.

## CI

`.github/workflows/tld-knowledge-base.yaml` runs the generator automatically
on a weekly schedule, on `workflow_dispatch`, and whenever the
`tld-specifications` repository fires a `tld_specifications_updated`
repository dispatch event. Any non-empty diff is opened as a PR; merging it
publishes the new pages through Scalar.
