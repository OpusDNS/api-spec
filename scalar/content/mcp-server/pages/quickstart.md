# Quickstart

Connect a client, ask a question, make a change. About ten minutes, all of it in
the sandbox, none of it billable.

<scalar-callout type="info">
This walkthrough uses the <strong>sandbox</strong>
(<code>https://sandbox.opusdns.com/mcp</code>). It is a separate account and a
separate sign-in from production, so nothing here can touch live domains. When
you are ready, swap one URL — see step 5.
</scalar-callout>

## Before you start

- A sandbox account. It is free and independent of your production account.
- An MCP client that speaks remote Streamable HTTP. This page uses Claude Code
  because it is a single command; every other client is on
  [Connect your client](/mcp-server/connect).

You do **not** need an API key. The MCP endpoint authenticates with OAuth in
your browser and rejects API keys.

## 1. Add the server

```bash
claude mcp add --transport http opusdns-sandbox https://sandbox.opusdns.com/mcp
```

Then run `/mcp` inside Claude Code, pick **opusdns-sandbox**, and complete the
sign-in that opens in your browser. There is nothing to paste back.

Check it worked:

```bash
claude mcp list
```

The server should be listed as connected. If it is not, the symptom is almost
certainly in [Troubleshooting](/mcp-server/troubleshooting#connecting).

## 2. Ask a read question

Read questions answer straight away — nothing to approve, because nothing
changes.

> *"How many domains do I have, and what is expiring in the next 90 days?"*

The model calls `portfolio_summary`, which takes no arguments and returns one
small object:

```json
{
  "status": "ok",
  "operationId": "get_domain_summary_v1_domains_summary_get",
  "httpStatus": 200,
  "data": {
    "domains": {
      "total_count": 28,
      "by_tld": { "com": 7, "de": 8, "net": 4, "org": 5, "io": 4 },
      "expiring_soon": { "next_30_days": 6, "next_60_days": 9, "next_90_days": 11 }
    }
  },
  "truncated": false
}
```

That single call is why the tools stay usable on a large portfolio: the answer
is a summary, not a list of every domain.

## 3. Preview a change

Now a change. Ask for something narrow:

> *"Show me what would happen if I turned off auto-renew on every .io domain."*

The model calls `bulk_preview`. It resolves the selector against your portfolio
server-side and shows you the plan — it submits nothing and asks for no
approval:

<!-- example: bulk_preview -->

```json
{
  "templateType": "domain_update_bulk",
  "template": { "renewal_mode": "expire" },
  "selector": { "tld": ["io"] },
  "sampleSize": 3
}
```

The reply's `matchedDomains` is the number that matters. **Read it before you
approve anything** — it is the difference between changing four domains and
changing four thousand.

## 4. Approve the change

> *"Yes, do it."*

The model calls `bulk_submit` with the same arguments. This one writes, so it
stops and asks you first. Depending on your client you either get an approval
prompt in the client itself, or a `confirmation_required` payload the model
relays to you; both are described in
[Approvals and confirmations](/mcp-server/approvals).

The prompt names the command, the count and the filters:

```
Approve: domain_update_bulk on 4 domain(s) matching tld=["io"] (POST /v1/jobs)? Risk: writes data.
```

Approve it, and the answer carries a `batch_id`:

```json
{
  "status": "ok",
  "operationId": "create_batch_v1_jobs_post",
  "httpStatus": 201,
  "data": { "batch_id": "batch_01k3n0m5xrf9pab6t2wqzhkvr3", "jobs_created": 4 },
  "truncated": false
}
```

Ask *"is that batch done?"* and the model calls `job_batch_status` with that id.

## 5. Move to production

Same client, one different URL:

```bash
claude mcp add --transport http opusdns https://api.opusdns.com/mcp
```

Production is a separate sign-in. You can keep both connected at once — see
[Adding the sandbox alongside production](/mcp-server/connect#adding-the-sandbox-alongside-production).

## What just happened

- You never typed a domain name. The **selector** described the set, and the
  server resolved it against your portfolio.
- The change went out as **one Jobs batch**, not as a loop of single calls.
- Nothing ran before you approved it, and the approval was bound to the exact
  set of domains the preview matched. If that set changes, you are asked again.
- The batch outlives the conversation. Closing the client neither pauses nor
  cancels it.

## Next

- [Recipes](/mcp-server/recipes) — worked examples for the jobs people actually
  do
- [Approvals and confirmations](/mcp-server/approvals) — what is gated and why
- [Bulk operations with Jobs](/mcp-server/bulk-operations) — selectors,
  templates and limits in full
- [Results and errors](/mcp-server/results) — what every tool hands back
