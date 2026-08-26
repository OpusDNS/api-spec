# MCP server docs sync

`sync_mcp_docs.py` mirrors the published MCP server documentation from
[OpusDNS/opusdns-mcp](https://github.com/OpusDNS/opusdns-mcp) into
`scalar/content/mcp-server/` and registers the pages in
`scalar/scalar.config.json`.

**It lives here but runs there.** There is no workflow in this repository that
invokes it. `opusdns-mcp` raises the pull request itself, from its
**Publish MCP docs to api-spec** workflow, which checks this repository out at the
workspace root and its own alongside it, runs this script, and opens the PR here
with the diff already in it.

That direction is deliberate. Pulling instead of pushing needed two credentials —
a dispatch token there and a deploy key here — which meant a **public** repository
held a key to a **private** one. Pushing needs one token, and it lives on the
private side pointing outward.

The trade: this repo can no longer trigger a resync when the script or the nav
patcher changes. The workflow over there keeps a weekly cron and a
`workflow_dispatch` for that, so a change here lands within a week, or
immediately if someone dispatches it.

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

From the repo root, with a sibling clone of `opusdns-mcp`. (CI passes
`--source mcp/docs/scalar` instead, because it checks that repo out inside this
one; the default suits a workstation where the two are siblings.)

```bash
python scripts/sync_mcp_docs.py --dry-run     # report, write nothing
python scripts/sync_mcp_docs.py               # copy + patch the nav
npm --prefix scalar run check                 # validate the config
npm run docs:preview                          # → http://localhost:7970
```

Flags: `--source` (default `../opusdns-mcp/docs/scalar`), `--content`,
`--config`, `--dry-run`.

## Safety properties

Both scripts fail closed, because merging to `main` publishes immediately. Scalar
previews each PR, but a bot PR opened with `GITHUB_TOKEN` gets no workflow run,
so these guards are what stands between a bad checkout and the live site:

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
