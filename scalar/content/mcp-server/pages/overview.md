# OpusDNS MCP server <span class="opusdns-beta-badge">Beta</span>

The OpusDNS MCP server is a remote [Model Context
Protocol](https://modelcontextprotocol.io) server that exposes the OpusDNS
Domain API to AI clients. It is hosted by OpusDNS — there is nothing to install
and no server to run. Point any MCP client that speaks remote Streamable HTTP at
the endpoint, sign in with your OpusDNS account, and the client gets nine tools
that cover the whole API.

<scalar-callout type="info">
New here? The <a href="/mcp-server/quickstart">Quickstart</a> gets you from
nothing to an approved change in about ten minutes, in the sandbox. Building
unattended automation instead? Read
<a href="/mcp-server/mcp-or-api">MCP or the REST API?</a> first.
</scalar-callout>

## Try asking

Once your client is connected, you talk to it in your own words — the model
picks the tools. A few that exercise each family:

- *"How many domains do I have, and what is expiring in the next 90 days?"*
- *"Which of my .com domains expire in the next 30 days? Just the names and
  dates."*
- *"Lock transfers on everything tagged migration."*
- *"Renew acme-labs.com for a year."*
- *"Turn off auto-renew on every .io that expires this quarter."*
- *"Batch batch_01k3n0m5xrf9pab6t2wqzhkvr3 has failures — retry only the ones
  that ran out of funds."*

The first two answer straight away. The rest write, so each one stops and asks
you to approve it before anything reaches the OpusDNS API — and the bulk ones
show you how many domains matched before you decide.

## Endpoints

| Environment | MCP endpoint |
| --- | --- |
| Production | `https://api.opusdns.com/mcp` |
| Sandbox | `https://sandbox.opusdns.com/mcp` |

<scalar-callout type="warning">
The MCP endpoint lives on the API host: <code>https://api.opusdns.com/mcp</code>.
There is no <code>mcp.opusdns.com</code> — that hostname does not resolve.
</scalar-callout>

The sandbox is a separate account and a separate identity realm, free and fully
isolated from production. Use it to try the tools out.

## What you get: nine tools

**Discovery** — every operation in the OpusDNS API is reachable through three
tools, so the client's context holds three tool definitions instead of hundreds.

| Tool | Purpose |
| --- | --- |
| `search_operations` | Relevance-ranked search of the API catalog |
| `describe_operation` | Parameters, request body and safety for one operation |
| `call_operation` | Call one operation |

**Bulk** — multi-domain mutations run through
[OpusDNS Jobs](/automation/jobs/overview), never a loop.

| Tool | Purpose |
| --- | --- |
| `bulk_preview` | Resolve a selector and show the planned batch. Submits nothing |
| `bulk_submit` | Submit the batch, after you approve it |
| `job_batch_status` | Progress and per-state job counts |
| `job_batch_control` | Pause, resume, retry or cancel a batch |

**Portfolio** — compact reads that stay small on large accounts.

| Tool | Purpose |
| --- | --- |
| `portfolio_summary` | Totals and breakdowns by status, TLD and expiry |
| `portfolio_query` | List domains, projecting only the fields you ask for |

Full parameter reference: [Tools reference](/mcp-server/tools). Worked examples:
[Tool workflows](/mcp-server/tool-workflows).

## Approvals

Anything that is not a read — every write, every cost-bearing operation, every
deletion or transfer — is blocked before any request reaches the OpusDNS API and
requires your explicit approval.

<scalar-callout type="info">
Approval is enforced by the server, not by instructions to the model. A model
cannot talk its way past the gate, and the approval is bound to the exact
action — including the exact resolved list of domains for a bulk operation. See
<a href="/mcp-server/approvals">Approvals and confirmations</a>.
</scalar-callout>

## Limits

| Limit | Value |
| --- | --- |
| Approval lifetime | About 5 minutes, single use |
| Domains one bulk selector may resolve to | 1,000 |
| `portfolio_query` page size | 200 maximum |
| Concurrent in-flight requests per server instance | 32; above that, `503` with `Retry-After: 1` |
| API response size per tool call | 512 KiB; larger responses come back marked `"truncated": true` |
| Upstream API timeout | 10 seconds |
| Tool-list freshness hint | 15 minutes |

Defaults, where you do not say otherwise:

| Default | Value |
| --- | --- |
| `search_operations` results | 25 |
| `portfolio_query` page / page size | page 1, 50 rows |
| `bulk_preview` sample size | 10 resolved domains |

<scalar-callout type="info">
The 1,000-domain limit is the Jobs API's cap on instances in a single bulk
command, and a batch built from a selector is one command. To change more than
1,000 domains, narrow the selector and submit more than one batch — for example
one TLD at a time.
</scalar-callout>

## Protocol

- MCP protocol revision `2026-07-28`, negotiating down to earlier revisions for
  clients that do not speak it.
- Transport: Streamable HTTP. Not SSE-only, not stdio.
- Server identity: `opusdns-mcp`.
- Capabilities: tools only. No prompts, no resources, no sampling.
- **Stateless.** No session is established, so `Mcp-Session-Id` is not required
  and should not be relied on.

## Next

- [Quickstart](/mcp-server/quickstart) — connected, asking and approving in ten
  minutes
- [Connect your client](/mcp-server/connect) — Claude, Cursor, VS Code, ChatGPT
- [Recipes](/mcp-server/recipes) — worked examples for the jobs people actually
  do
- [Tool workflows](/mcp-server/tool-workflows) — one worked example per tool
  family
- [Sub-organizations](/mcp-server/sub-organizations) — acting on an organization
  below your own
- [Bulk operations with Jobs](/mcp-server/bulk-operations)
- [Results and errors](/mcp-server/results) — every shape a tool can return
- [Data handling](/mcp-server/data-handling) — what the agent sees and where it
  goes
- [API Quickstart](/introduction/quickstart) — the same operations over plain
  HTTP with an API key
- [API Reference](/api-reference) — every endpoint the tools can reach
