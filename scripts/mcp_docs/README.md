# MCP server docs sync

`sync_mcp_docs.py` mirrors the published MCP server documentation from
[OpusDNS/opusdns-mcp](https://github.com/OpusDNS/opusdns-mcp) into
`scalar/content/mcp-server/` and registers the pages in
`scalar/scalar.config.json`.

## What it does not do

**It does not generate Markdown.** `opusdns-mcp` renders its own pages with
`make docs` from the committed `tools/list` snapshot, and its CI fails when the
committed output drifts from a fresh render. So there is exactly one renderer,
this repo needs no Go toolchain, and the two copies cannot disagree.

Contrast with the TLD knowledge base, whose generator *does* live here
(`scripts/generate_tld_knowledge_base.py`): its input is compiled YAML with no
renderer of its own upstream.

## Layout

```
scripts/
├── sync_mcp_docs.py         # CLI entry point
├── test_sync_mcp_docs.py    # stdlib-only tests: python -m pytest
└── mcp_docs/
    └── scalar_config.py     # idempotent /mcp-server nav + tab registration
```

The published tree mirrors the source tree, so the "do not edit" signal survives
the copy:

```
scalar/content/mcp-server/
├── pages/       # hand-written upstream
└── generated/   # rendered by `make docs` upstream — edit neither copy
```

`_partials/`, `README.md` and `nav.json` are inputs, not pages, and are never
copied.

## The interface: `nav.json`

Everything about the sidebar — which pages exist, their titles, icons and order —
comes from `docs/scalar/nav.json` in `opusdns-mcp`, which that repo generates from
`internal/docs/nav.go`. Adding a page upstream therefore needs no change here.

The trade-off is that nav editorial control sits in the engineering repo. If the
docs team needs to retitle a page without a Go change, add a `titleOverrides`
mapping in this package and apply it in `scalar_config.update_config`.

## Route

The tab lives at **`/mcp-server`**, not `/mcp`.
`developers.opusdns.com/mcp` is Scalar's own documentation-MCP endpoint —
`registrar-abstraction-service` consumes it as `DOCUMENTATION_MCP_URL` — so a
docs route there would be permanently shadowed. `scalar_config` rejects `/mcp`
outright.

## Local usage

From the repo root, with a sibling clone of `opusdns-mcp`:

```bash
python scripts/sync_mcp_docs.py --dry-run     # report, write nothing
python scripts/sync_mcp_docs.py               # copy + patch the nav
npm --prefix scalar run check                 # validate the config
npm run docs:preview                          # → http://localhost:7970
```

Flags: `--source` (default `../opusdns-mcp/docs/scalar`), `--content`,
`--config`, `--dry-run`.

## Safety properties

Both scripts fail closed, because merging to `main` publishes immediately and
there is no staging site:

- **An empty or page-less manifest is refused**, so a partial or failed checkout
  cannot silently wipe the published section.
- **A declared page that does not exist is an error**, checked both in the source
  tree and (after copying) against the `filepath` values written into the config.
- **Icons are shape-checked** — a name Scalar does not know renders as nothing,
  and `check-config` does not catch it.
- **The rewritten config is re-parsed before it is written.**
- **Only the `/mcp-server` subtree and the `/mcp-server` tab are touched.** Every
  other route, including the TLD bot's, is left byte-identical.
- **Re-running changes nothing**, and a page dropped from the manifest is pruned
  from both the content tree and the sidebar.
