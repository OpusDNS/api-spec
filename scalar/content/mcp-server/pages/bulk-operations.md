# Bulk operations with Jobs

A change across many domains never becomes many tool calls. You supply a
selector and one shared template; the server resolves the matching domains and
submits a single [Jobs](/automation/jobs/overview) batch, where the loop, the
retries and the error handling all run server-side.

Three consequences worth knowing:

- The model never transcribes a domain name, so it cannot mistype one.
- One approval covers the whole batch, bound to the exact resolved set.
- Progress and retries live in the Jobs service, so a dropped conversation does
  not orphan a half-finished change.

## Template types

| Family | `templateType` | Instances addressed by |
| --- | --- | --- |
| Domains | `domain_update_bulk` | `domain_id` |
| DNS zones | `dns_zone_create_bulk`, `dns_zone_update_bulk`, `dns_zone_patch_rrsets_bulk` | `name` |
| Domain (URL) forwards | `domain_forward_create_bulk`, `domain_forward_update_bulk`, `domain_forward_enable_bulk`, `domain_forward_disable_bulk`, `domain_forward_delete_bulk` | `hostname` |
| Email forwards | `email_forward_create_bulk`, `email_forward_update_bulk`, `email_forward_enable_bulk`, `email_forward_disable_bulk`, `email_forward_delete_bulk` | `hostname` |

The always-current list, including the Jobs commands that are deliberately not
reachable this way and why, is on [Bulk
templates](/mcp-server/tools/templates).

## The selector

The selector is the [`GET /v1/domains`](/api-reference) filter set — the same
object [`portfolio_query` uses](/mcp-server/tool-workflows#the-selector).
Resolution pages the domain list server-side and sorts the result, so the same
selector always produces the same batch and therefore the same approval.

<scalar-callout type="danger">
An empty selector targets <strong>every domain in your account</strong>. The
approval prompt says so in as many words — "matching the entire portfolio (no
filters)". Read the prompt, not the intent.
</scalar-callout>

## `hostnamePrefix`, for forward templates

Forward instances are addressed by hostname, built as `hostnamePrefix` plus the
resolved domain. Pass `"*."` to target wildcard subdomain forwards
(`*.acme-labs.com`), or leave it out for the apex (`acme-labs.com`).

Supplying it for a template that is not hostname-addressed is rejected:

```
hostnamePrefix is only valid for hostname-addressed templates (*_forward_*_bulk); the "domain_update_bulk" template keys on "domain_id"
```

## Step 1 — preview

`bulk_preview` with:

```json
{
  "templateType": "domain_update_bulk",
  "template": { "status_changes": { "add": ["clientTransferProhibited"] } },
  "selector": { "tld": ["com"], "expires_in_30_days": true },
  "sampleSize": 3
}
```

returns:

```json
{
  "status": "dry_run",
  "templateType": "domain_update_bulk",
  "command": "domain_update_bulk",
  "matchedDomains": 412,
  "template": { "status_changes": { "add": ["clientTransferProhibited"] } },
  "sampleDomains": [
    { "name": "acme-labs.com", "domain_id": "domain_01h45ytscbebyvny4gc8cr8ma2" },
    { "name": "acme-labs.net", "domain_id": "domain_01h45yv2m8fbcwnz9pq3kr7txe" },
    { "name": "acme-shop.com", "domain_id": "domain_01h45yw7q2gdexpa4bt6mn8zvc" }
  ],
  "sampleInstances": [
    { "domain_id": "domain_01h45ytscbebyvny4gc8cr8ma2" },
    { "domain_id": "domain_01h45yv2m8fbcwnz9pq3kr7txe" },
    { "domain_id": "domain_01h45yw7q2gdexpa4bt6mn8zvc" }
  ],
  "note": "Nothing was submitted. Call bulk_submit with the same templateType, template and selector to execute. You will be asked to approve the action first."
}
```

`matchedDomains` is the full count; `sampleDomains` and `sampleInstances` are
only the first few, `sampleSize` of them (10 by default).

<scalar-callout type="success">
<code>bulk_preview</code> submits nothing and needs no approval. Always preview
first — the preview is what tells you the selector matched 412 domains rather
than 4,127.
</scalar-callout>

## Step 2 — submit

`bulk_submit` takes the same arguments, plus an optional `label`. The first call
returns an approval challenge whose prompt names the command and the resolved
set:

```
Approve: domain_update_bulk on 412 domain(s) matching expires_in_30_days=true, tld=["com"] (POST /v1/jobs)? Risk: writes data.
```

After you approve:

```json
{
  "status": "ok",
  "operationId": "create_batch_v1_jobs_post",
  "httpStatus": 201,
  "data": {
    "batch_id": "batch_01k3n0m5xrf9pab6t2wqzhkvr3",
    "total_commands": 1,
    "jobs_created": 412,
    "jobs_duplicated": 0,
    "jobs_failed": 0,
    "status_url": "/v1/jobs/batch_01k3n0m5xrf9pab6t2wqzhkvr3"
  },
  "truncated": false
}
```

`total_commands` is `1`: a batch built from a selector is **one** bulk command
carrying every instance. `jobs_created` is the per-domain count.

### What the server posts

```json
{
  "label": "Lock .com renewals expiring in 30 days",
  "commands": [
    {
      "command": "domain_update_bulk",
      "payload": {
        "template": { "status_changes": { "add": ["clientTransferProhibited"] } },
        "instances": [
          { "domain_id": "domain_01h45ytscbebyvny4gc8cr8ma2" },
          { "domain_id": "domain_01h45yv2m8fbcwnz9pq3kr7txe" }
        ]
      }
    }
  ]
}
```

## Limits

A batch is one command, and the Jobs API allows 1,000 instances per command, so
**a selector may resolve to at most 1,000 domains**. To change more, narrow the
selector and submit more than one batch — one TLD at a time, for example.

The errors you will meet:

| Message | Meaning |
| --- | --- |
| `selector matched no domains; nothing to submit` | Filters too narrow, or `tag_ids` was given a label instead of an ID |
| `selector matched 1204 domains, exceeding the limit of 1000` | Narrow the selector and submit in parts |
| `selector matched more than the limit of 1000 domains; narrow the selector` | Same, detected while paging |

## Step 3 — watch it

`job_batch_status` with `{ "batchId": "batch_01k3n0m5xrf9pab6t2wqzhkvr3" }`
returns the batch's progress percentage and its job counts by state — `queued`,
`running`, `succeeded`, `failed`, `dead_letter` and the rest. The lifecycle those
states belong to is documented in [Jobs
overview](/automation/jobs/overview) and [Managing
batches](/automation/jobs/managing-batches).

## Step 4 — steer it

`job_batch_control` takes an `action`:

| `action` | Effect | Approval |
| --- | --- | --- |
| `pause` | Pause the eligible jobs | Yes |
| `resume` | Resume a paused batch | Yes |
| `retry` | Retry failed jobs, optionally only one `errorClass` | Yes |
| `cancel` | Cancel the jobs still queued | Yes |

`errorClass` is what makes `retry` useful: retry only the jobs that failed for
one reason — say insufficient funds, after topping up — and leave failures with a
different cause alone. See [Managing
batches](/automation/jobs/managing-batches).

The approval prompt for a pause reads:

```
Approve: pause job batch batch_01k3n0m5xrf9pab6t2wqzhkvr3 (POST /v1/jobs/{batch_id}/pause)? Risk: writes data.
```

<scalar-callout type="info">
Pause, resume and cancel answer <code>204 No Content</code>, so the tool result
carries <code>"httpStatus": 204</code> and an empty <code>data</code>. That is
success, not a truncated response. Retry is the exception: it answers
<code>200</code> with <code>batch_id</code>, <code>retried_count</code>,
<code>queued_count</code> and <code>blocked_count</code>, so you can see how many
jobs it actually picked up.
</scalar-callout>

## Related

- [Bulk templates](/mcp-server/tools/templates)
- [Jobs overview](/automation/jobs/overview), [Domain
  commands](/automation/jobs/domain-commands), [Managing
  batches](/automation/jobs/managing-batches)
- [User tags](/automation/tags/user-tags) — resolving a tag label to its ID
- [Approvals and confirmations](/mcp-server/approvals)
