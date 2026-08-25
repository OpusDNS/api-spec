# Tool workflows

Three worked examples, one per tool family. A successful tool call returns its
payload twice over — as a text block and as `structuredContent`, with the same
content — so your client may render either. (A tool-level failure returns text
only, flagged as an error.) The examples below show the payload.

## Discovery: call one operation

### 1. Find the operation

`search_operations` with:

```json
{ "query": "renew domain", "limit": 10 }
```

comes back as:

```json
{
  "count": 2,
  "total": 2,
  "results": [
    {
      "operationId": "renew_domain_v1_domains__domain_reference__renew_post",
      "method": "POST",
      "path": "/v1/domains/{domain_reference}/renew",
      "tags": ["domain"],
      "summary": "Renew a domain",
      "safety": { "read": false, "write": true, "cost": true, "destructive": false }
    },
    {
      "operationId": "epp_check_domain_v1_domains_check_get",
      "method": "GET",
      "path": "/v1/domains/check",
      "tags": ["availability"],
      "summary": "Check domain availability",
      "safety": { "read": true, "write": false, "cost": false, "destructive": false }
    }
  ]
}
```

Two fields are worth understanding.

`total` counts the operations in the **top relevance tier** — those matching the
most of your query terms — including any beyond `limit`. So `total` larger than
`count` means the results were capped and the query should be narrowed. It is not
a count of the whole catalog.

`detail` is absent here, and that is the normal case. It is inlined only when
`total` is exactly 1 *and* the operation's request-body schema is small enough,
so that a search with one unambiguous answer saves a round trip. Two operations
matched, so pick one and run `describe_operation` on its id:

```json
{ "operationId": "renew_domain_v1_domains__domain_reference__renew_post" }
```

which returns the operation's parameters, request-body schema and safety flags,
plus `requiresConfirmation`.

### 2. Call it

`call_operation` with:

```json
{
  "operationId": "renew_domain_v1_domains__domain_reference__renew_post",
  "pathParams": { "domain_reference": "acme-labs.com" },
  "body": {
    "period": { "unit": "y", "value": 1 },
    "current_expiry_date": "2026-11-04T00:00:00Z"
  }
}
```

`domain_reference` accepts either a domain name or a domain ID. `period` and
`current_expiry_date` are both required — passing the expiry you believe is
current is what stops a renewal being applied twice.

### 3. Approve it

Renewal writes data and costs money, so this first call does not execute. It
returns a confirmation challenge instead, and your client asks you to approve it.
See [Approvals and confirmations](/mcp-server/approvals).

### 4. Read the result

After approval, the same call returns:

```json
{
  "status": "ok",
  "operationId": "renew_domain_v1_domains__domain_reference__renew_post",
  "httpStatus": 200,
  "headers": {
    "content-type": "application/json",
    "x-server-request-id": "8f3c2e10-1b4a-4c6b-9e77-2a91f5d0c4aa"
  },
  "data": { "…the updated domain…" },
  "truncated": false
}
```

<scalar-callout type="info">
<code>status</code> is <code>"ok"</code> for a 2xx or 3xx response and
<code>"api_error"</code> for 4xx and 5xx. An HTTP error from OpusDNS is a normal
tool result carrying <code>httpStatus</code> and the API's problem detail in
<code>data</code> — not a protocol failure. Quote
<code>headers["x-server-request-id"]</code> when you contact support.
</scalar-callout>

## Portfolio: read a lot of domains cheaply

`portfolio_summary` takes no arguments and answers "how big is this account, and
what is expiring":

```json
{
  "status": "ok",
  "operationId": "get_domain_summary_v1_domains_summary_get",
  "httpStatus": 200,
  "data": {
    "organization_id": "organization_01h45ytscbebyvny4gc8cr8ma2",
    "domains": {
      "total_count": 4127,
      "by_status": { "ok": 4001, "pendingTransfer": 12, "clientTransferProhibited": 114 },
      "by_tld": { "com": 2610, "de": 802, "io": 415 },
      "expiring_soon": { "next_30_days": 412, "next_60_days": 733, "next_90_days": 1104 }
    }
  }
}
```

`portfolio_query` lists domains but returns only the fields you name, which is
what keeps a four-thousand-domain account out of the model's context:

```json
{
  "selector": { "tld": ["com"], "expires_in_30_days": true },
  "fields": ["name", "domain_id", "expires_on", "renewal_mode"],
  "pageSize": 50
}
```

```json
{
  "status": "ok",
  "fields": ["name", "domain_id", "expires_on", "renewal_mode"],
  "results": [
    {
      "name": "acme-labs.com",
      "domain_id": "domain_01h45ytscbebyvny4gc8cr8ma2",
      "expires_on": "2026-09-14T00:00:00Z",
      "renewal_mode": "expire"
    }
  ],
  "pagination": {
    "current_page": 1,
    "page_size": 50,
    "total_items": 412,
    "total_pages": 9,
    "has_next_page": true,
    "has_previous_page": false
  }
}
```

Omit `fields` and you get `name`, `domain_id`, `expires_on`, `renewal_mode` and
`status_tags`. `pageSize` is capped server-side at 200.

### The selector

`selector` is the filter set of [`GET /v1/domains`](/api-reference), and the same
object drives the bulk tools. The filters worth knowing:

| Filter | Type | Notes |
| --- | --- | --- |
| `tag_ids` | list of tag IDs | IDs such as `tag_01h45ytscbebyvny4gc8cr8ma2`, **not** labels |
| `tag_mode` | `match_any` or `match_all` | Defaults to `match_any` |
| `status_tags` | list | For example `VERIFICATION_REQUIRED`, `INBOUND_TRANSFER_PENDING` |
| `tld` | list | For example `["com", "org"]` |
| `search`, `name`, `sld` | string | Match by full name, second-level label, or free text |
| `expires_in_30_days`, `expires_in_60_days`, `expires_in_90_days` | boolean | |
| `expires_before`, `expires_after` | RFC 3339 | Also `created_*`, `updated_*`, `registered_*`, `transferred_*` |
| `transfer_lock`, `is_premium` | boolean | |
| `registry_statuses` | list | |

<scalar-callout type="warning">
<code>tag_ids</code> takes tag <strong>IDs</strong>, not labels. Ask for the tag
by name and the agent will look its ID up first. See
<a href="/automation/tags/user-tags">User tags</a>.
</scalar-callout>

<scalar-callout type="danger">
An empty selector matches <strong>every domain in the account</strong>. That is
harmless for a read, and consequential for
<a href="/mcp-server/bulk-operations">a bulk submission</a>.
</scalar-callout>

## Bulk: change many domains at once

Two calls — `bulk_preview`, then `bulk_submit` with the same arguments. The
selector resolves server-side, so the model never transcribes a domain name, and
the approval you give is bound to the exact set that was resolved.

Full walkthrough: [Bulk operations with
Jobs](/mcp-server/bulk-operations).

## Related

- [Tools reference](/mcp-server/tools) — every parameter of every tool
- [Renew a domain](/products/domains/renew), [Manage a
  domain](/products/domains/manage)
- [API Reference](/api-reference)
