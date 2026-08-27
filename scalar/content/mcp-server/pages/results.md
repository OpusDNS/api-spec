# Results and errors

Every tool hands back JSON, twice over: once as a text block and once as
`structuredContent`, with the same content. Your client may render either. This
page is the reference for the shapes; if you have a symptom rather than a shape,
start at [Troubleshooting](/mcp-server/troubleshooting).

## The seven result shapes

| `status` | What it means | Did anything run? |
| --- | --- | --- |
| `ok` | The OpusDNS API answered 2xx or 3xx | Yes |
| `api_error` | The OpusDNS API answered 4xx or 5xx | The call reached the API |
| `error` | The MCP server refused the call | No |
| `dry_run` | A `bulk_preview` result | No — nothing is submitted |
| `confirmation_required` | A gated action is waiting for your approval | No |
| `declined` | You declined a gated action | No |
| `not_found` | `describe_operation` does not know that `operationId` | Nothing to run |

A client on protocol revision `2026-07-28` that supports elicitation sees a
`resultType` of `input_required` instead of the `confirmation_required` payload
— the same approval, asked in the client's own UI. See
[Approvals and confirmations](/mcp-server/approvals).

## A successful call

```json
{
  "status": "ok",
  "operationId": "renew_domain_v1_domains__domain_reference__renew_post",
  "httpStatus": 200,
  "headers": {
    "content-type": "application/json",
    "x-server-request-id": "8f3c2e10-1b4a-4c6b-9e77-2a91f5d0c4aa"
  },
  "data": { "…": "whatever the operation returns" },
  "truncated": false
}
```

`headers` is a deliberately short allow-list — `content-type`, `x-request-id`,
`x-server-request-id` and `retry-after`, and nothing else.

<scalar-callout type="info">
<code>headers["x-server-request-id"]</code> is the one value worth keeping. It
identifies the request inside OpusDNS, and quoting it is the fastest way to get
a support answer.
</scalar-callout>

`portfolio_query` is the one read that replaces this envelope with its own
projection — `status`, `fields`, `results` and `pagination` — because returning
whole domain objects is exactly what it exists to avoid. If the page could not
be read whole, it hands back the envelope above instead, so `truncated: true`
stays visible rather than looking like an empty result.

## An error from the API

An HTTP error from OpusDNS is a **normal tool result**, not a protocol failure.
The status code and the API's own problem detail come back intact:

```json
{
  "status": "api_error",
  "operationId": "renew_domain_v1_domains__domain_reference__renew_post",
  "httpStatus": 402,
  "headers": { "content-type": "application/problem+json" },
  "data": { "detail": "Insufficient funds in wallet" },
  "truncated": false
}
```

Read `data` before retrying. A 402, a 409 and a 422 all mean something specific
and none of them is fixed by calling again.

Rate limiting arrives the same way: `httpStatus` 429, with
`headers["retry-after"]` carrying the number of seconds the API asks you to
wait.

## An error from the server

When the MCP server refuses a call before it reaches the API, the result carries
a machine-readable `code` beside the message, and the client marks it as an
error:

```json
{
  "status": "error",
  "code": "invalid_request",
  "message": "unknown templateType \"domain_renew_bulk\"; allowed: dns_zone_create_bulk, dns_zone_patch_rrsets_bulk, …"
}
```

| `code` | Meaning | What to do |
| --- | --- | --- |
| `invalid_request` | The arguments do not match the operation — a missing required field, a wrong type, a query or path parameter the operation does not declare (a misspelled selector filter), an unknown `templateType` or `action`, a selector that matched nothing or too much | Fix the arguments. Retrying unchanged fails again |
| `unknown_operation` | No operation in the catalog has that `operationId` | `search_operations` for the right id |
| `authentication_required` | No usable credentials for an API call | Sign in again |
| `upstream_timeout` | The OpusDNS API did not answer in time | Retry once; if it persists, check status |
| `upstream_unavailable` | The OpusDNS API could not be reached, or its response broke off before it was complete | Retry with backoff |
| `request_canceled` | The client gave up on the call before the API answered | Nothing to do; call again if it is still wanted |
| `selector_page_truncated` | One page of the domain list was too large for the response cap while resolving a bulk selector, so the selection could not be resolved completely | Narrow the selector, for example one TLD at a time |
| `tool_error` | Anything else the tool itself rejected | Read the message |

<scalar-callout type="info">
There is no <code>forbidden</code> code. Authorization is decided by the OpusDNS
API against your account's roles, so a refusal arrives as
<code>api_error</code> with <code>httpStatus: 403</code> and the API's own
explanation — not as a server error invented here.
</scalar-callout>

## Endpoint-level errors

These come back as HTTP responses on `/mcp` rather than as tool results, so your
client usually surfaces them as a connection problem.

| Response | Body | Meaning |
| --- | --- | --- |
| `401` | `{"error":"authentication_required"}` | No credentials were sent |
| `401` | `{"error":"invalid_token","error_description":"Bearer token could not be validated"}` | The token is expired, for the wrong realm, or has the wrong audience |
| `503` + `Retry-After: 1` | `{"error":"too_many_requests","error_description":"Server is busy, retry shortly."}` | The server instance is at its in-flight request cap |

A `401` always carries a `WWW-Authenticate` header pointing at the
protected-resource metadata, which is how a client knows where to sign in. See
[OAuth details](/mcp-server/connect/oauth).

## When a result is truncated

```json
{ "status": "ok", "truncated": true, "data": "…" }
```

Responses are capped so a single call cannot flood the model's context. Past the
cap the body is cut and `truncated` is set — and because the cut lands
mid-document, `data` is then a **string**, not parsed JSON.

Do not retry the same call: it will be cut in the same place. Ask for less
instead — a narrower filter, a smaller page, or `portfolio_query` with an
explicit `fields` list rather than a full domain listing.

## Related

- [Troubleshooting](/mcp-server/troubleshooting) — the same failures, keyed by
  symptom
- [Approvals and confirmations](/mcp-server/approvals)
- [Tool workflows](/mcp-server/tool-workflows)
