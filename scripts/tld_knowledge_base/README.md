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
    ├── countries.py        # ISO-3166 names + flag emoji
    ├── formatters.py       # value formatters (durations, yes/no, …)
    ├── render.py           # spec dict → Markdown
    └── scalar_config.py    # idempotent sidebar registration
```

Generated content lives in:

```
scalar/content/tld-knowledge-base/
├── cctlds/<tld>.md   # country-code TLDs
└── gtlds/<tld>.md    # generic TLDs
```

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
   python scripts/generate_tld_knowledge_base.py --tld nl   # single TLD
   python scripts/generate_tld_knowledge_base.py --dry-run  # preview only
   ```

   Useful flags:

   - `--input PATH` &mdash; directory with compiled spec YAML files
     (default: `../tld-specifications/compiled_specifications`).
   - `--output PATH` &mdash; target Markdown directory.
   - `--config PATH` &mdash; path to `scalar.config.json`.
   - `--include-disabled` &mdash; also render specs with
     `tld_configuration.enabled: false`.

3. Inspect the changes with `git diff` and open a pull request.

## CI

`.github/workflows/tld-knowledge-base.yaml` runs the generator automatically
on a weekly schedule, on `workflow_dispatch`, and whenever the
`tld-specifications` repository fires a `tld_specifications_updated`
repository dispatch event. Any non-empty diff is opened as a PR; merging it
publishes the new pages through Scalar.
