# Troubleshooting

Symptom first, in the words the server actually uses.

## Connecting

### The host cannot be resolved

You used `mcp.opusdns.com`. There is no such host. The endpoint is
`https://api.opusdns.com/mcp`.

### `401` with `{"error":"authentication_required"}`

No bearer token was sent, or you sent an `X-Api-Key`. API keys are not accepted
by the MCP endpoint — complete the OAuth sign-in instead. In Claude Code that is
`/mcp`, or `claude mcp login <name>`. See
[OAuth details](/mcp-server/connect/oauth).

### `401` with `{"error":"invalid_token","error_description":"Bearer token could not be validated"}`

The token was rejected. The usual causes, in order of likelihood: it expired; it
was minted for the wrong realm (a sandbox token against production, or the
reverse); or it lacks the required audience because the `opusdns:mcp` scope was
not requested. Sign out and back in.

### `invalid_scope` during sign-in

Your client asked the authorization server for a scope it was not registered
with. This is the case the resource metadata is deliberately shaped to avoid —
see [Why `offline_access` is
advertised](/mcp-server/connect/oauth#why-offline-access-is-advertised).

### The server never appears in my client

Check the wrapper key and the transport type. VS Code nests servers under
`servers`; Claude Code and Cursor use `mcpServers`. In Claude Code and VS Code an
entry with a `url` and no `"type": "http"` is read as a local command and
skipped. See [Connect Cursor, VS Code, and
ChatGPT](/mcp-server/connect/editors).

### `403` from a tool call

Authentication worked; your organization role does not permit that operation.
Approval is not authorization — see [Roles &amp;
permissions](/account/organizations/roles).

### `503` with `Retry-After: 1`

```json
{ "error": "too_many_requests", "error_description": "Server is busy, retry shortly." }
```

The concurrency cap. It counts requests in flight on one server instance across
all callers, not just yours, so it can trip because the service is busy rather
than because of anything you did. Retry after a second.

## Approvals

### Approval keeps being requested

One of:

- The retried call was not byte-identical. The approval binds the path
  parameters, the query and the body.
- A bulk selector resolved to a different set of domains than when you approved.
  Preview again and approve the new set.
- More than about five minutes elapsed.
- The token had already been used. Each one works once.
- You signed in again, or a different client is doing the retry. The approval
  binds the user, the client and the granted scopes.

### The agent says the action was declined

`{"status":"declined"}` means the prompt was declined or dismissed. Nothing ran,
and the token was not consumed — you can still approve the same action until it
expires.

### My client never shows an approval prompt

It is on the text path, and it should be showing you the
`confirmation_required` payload before it retries. If it retries silently, that
is a client behaviour to raise with the client's vendor: the server can verify
that a token matches an action, but not that a human saw it. See [Path
B](/mcp-server/approvals#path-b-the-confirmation-payload).

## Bulk

| Symptom | Cause |
| --- | --- |
| `selector matched no domains; nothing to submit` | Filters too narrow — or `tag_ids` was given a tag label instead of a tag ID |
| `selector matched 1204 domains, exceeding the limit of 1000` | One batch is one command, and a command holds 1,000 instances. Narrow the selector and submit in parts |
| `unknown templateType "..."` | The error lists the allowed values. See [Bulk templates](/mcp-server/tools/templates) |
| `hostnamePrefix is only valid for hostname-addressed templates` | Only the forward templates take a prefix |
| `"httpStatus": 204` with empty `data` | Success. Pause, resume and cancel return no content |

## Results

### `"truncated": true`

The API response exceeded the per-call size limit and was cut short. Narrow the
request — for `portfolio_query`, ask for fewer `fields` or a smaller `pageSize`.

### `"status": "api_error"`

A normal HTTP error from the OpusDNS API, not a protocol failure. `httpStatus`
carries the status and `data` carries the API's problem detail.

### My client sends numbers as strings and it still works

It does. Common client serialisation quirks — a page number as `"2"`, a list as a
JSON string — are repaired before the request is validated. You do not need to
work around it.

## Getting help

Send an `X-Request-Id` header on your requests and it is echoed back. Results
that came from an OpusDNS API call — anything with an `httpStatus` — also carry
`headers["x-server-request-id"]`, the API's own request ID, when the API sent
one. Quote whichever you have when you contact
[support](https://support.opusdns.com/), and check
[status.opusdns.com](https://status.opusdns.com/) first for anything that looks
like an outage.
