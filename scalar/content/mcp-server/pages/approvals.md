# Approvals and confirmations

Anything that is not a read is blocked before it reaches the OpusDNS API and
requires your explicit approval. How you are asked depends on your client; the
check on the server is the same either way.

## What is gated

Every `POST`, `PUT`, `PATCH` and `DELETE`, with one exception: a `POST` that only
checks availability counts as a read, because asking whether a name is free has
no side effect. In today's API that exception covers exactly one operation,
`POST /v1/availability/stream`.

Reads — every `GET`, plus that one availability call — run without asking.

### The risk wording

Each approval names the risk of the operation:

| Operation | Risk shown |
| --- | --- |
| Register a domain (`POST /v1/domains`) | can create costs, writes data |
| Renew a domain | can create costs, writes data |
| Update a domain (`PATCH /v1/domains/{domain_reference}`) | writes data, can delete or transfer resources |
| Submit a batch (`POST /v1/jobs`) | writes data |
| Cancel a batch (`DELETE /v1/jobs/{batch_id}`) | writes data, can delete or transfer resources |
| Pause a batch | writes data |
| Patch zone RRsets | writes data |

<scalar-callout type="info">
The risk wording is derived from the operation's own description, so it
occasionally reads more alarming than the operation is. <strong>Update a
domain</strong> is labelled "can delete or transfer resources" because setting a
transfer lock is one of the things it does. The wording changes what the prompt
says, never whether approval is required.
</scalar-callout>

## Which path your client takes

| Client | Path | What you see |
| --- | --- | --- |
| Claude Code | A | An approval prompt in the terminal |
| Claude desktop and web | A | An approval prompt in the conversation |
| Cursor | B | The agent relays the `confirmation_required` payload and asks |
| VS Code | B | The agent relays the payload and asks |
| ChatGPT / OpenAI Responses API | B | The agent relays the payload and asks |

Path A needs two things at once: protocol revision `2026-07-28` **and** a
declared elicitation capability. A client missing either gets Path B, which
works everywhere. Both enforce the same gate server-side; they differ only in who
draws the prompt.

## Path A — your client asks you directly

Clients on protocol revision `2026-07-28` that support elicitation get a
multi-round-trip request: the tool call terminates with an input request, and the
client renders its own approval prompt.

```json
{
  "resultType": "input_required",
  "inputRequests": {
    "approval": {
      "method": "elicitation/create",
      "params": {
        "mode": "form",
        "message": "Approve: Renew a domain (POST /v1/domains/{domain_reference}/renew)? Risk: can create costs, writes data.",
        "requestedSchema": {
          "type": "object",
          "properties": {
            "note": {
              "type": "string",
              "description": "Optional note recorded with the approval."
            }
          }
        }
      }
    }
  },
  "requestState": "eyJ2IjoxLCJvcGVyYXRpb25JZCI6…"
}
```

The client asks you, then retries the same call with `requestState` echoed back
verbatim and your answer under `inputResponses`:

```json
{
  "name": "call_operation",
  "arguments": {
    "operationId": "renew_domain_v1_domains__domain_reference__renew_post",
    "pathParams": { "domain_reference": "acme-labs.com" },
    "body": {
      "period": { "unit": "y", "value": 1 },
      "current_expiry_date": "2026-11-04T00:00:00Z"
    }
  },
  "requestState": "eyJ2IjoxLCJvcGVyYXRpb25JZCI6…",
  "inputResponses": {
    "approval": { "action": "accept", "content": { "note": "approved by kr" } }
  }
}
```

Only `"action": "accept"` executes.

<scalar-callout type="info">
On this path the prompt is rendered by your client and the model never holds an
unapproved token. It is the stronger of the two paths — prefer a client that
supports it.
</scalar-callout>

## Path B — the confirmation payload

Every other client gets a payload the model has to relay to you:

```json
{
  "status": "confirmation_required",
  "message": "Confirmation required before executing POST /v1/domains/{domain_reference}/renew (Renew a domain). Risk: can create costs, writes data. Ask the user for explicit approval, then retry the exact same action with this confirmation token.",
  "confirmationToken": "eyJ2IjoxLCJvcGVyYXRpb25JZCI6…",
  "expiresAt": "2026-08-25T14:35:12Z",
  "operationId": "renew_domain_v1_domains__domain_reference__renew_post",
  "safety": { "read": false, "write": true, "cost": true, "destructive": false }
}
```

### Retrying with a confirmation token

Repeat the **identical** call with the token added as an argument:

<!-- example: call_operation -->
```json
{
  "operationId": "renew_domain_v1_domains__domain_reference__renew_post",
  "pathParams": { "domain_reference": "acme-labs.com" },
  "body": {
    "period": { "unit": "y", "value": 1 },
    "current_expiry_date": "2026-11-04T00:00:00Z"
  },
  "confirmationToken": "eyJ2IjoxLCJvcGVyYXRpb25JZCI6…"
}
```

<scalar-callout type="warning">
On this path your client has to actually show you the action and get your
approval before retrying. The server can verify that the token belongs to this
exact action, but it cannot verify that a human saw it. Choosing a client you
trust with that is part of the security model — which is why Path A is
preferable where it is available.
</scalar-callout>

## What the approval is bound to

There is one token type. On Path A it travels as `requestState`; on Path B as
`confirmationToken`. It is signed, and it binds:

| Bound to | Consequence |
| --- | --- |
| The operation | A token for one operation cannot approve another |
| A hash of the normalised action — path parameters, query, body, and the resolved list of domains for a bulk call | Change one byte of the request and the token stops matching |
| The signed-in user | Someone else's token is useless |
| The client and the granted scopes | A different client, or a re-login with different scopes, invalidates it |
| An expiry, about 5 minutes | It cannot be banked for later |

It is also **single use**, and it is consumed only after every other check has
passed — so a retry that does not match never burns a token that is still valid.

<scalar-callout type="danger">
Approval is enforced by the server, before any request reaches the OpusDNS API.
The gate sits in the one code path every tool call flows through, so it cannot be
bypassed by prompt engineering, by reaching for a different tool, or by a model
that decides the instructions do not apply to it.
</scalar-callout>

## Declining, dismissing, and being asked again

**You decline or dismiss the prompt.** The call returns:

```json
{
  "status": "declined",
  "operationId": "renew_domain_v1_domains__domain_reference__renew_post",
  "message": "The user declined this action. Nothing was executed. Do not retry unless the user asks for it again."
}
```

Nothing was sent upstream, and the token was **not** consumed — it simply
expires. You can still approve the same action before it does.

**The client retried but lost your answer.** The confirmation check fails and you
are asked again, which is what the protocol prescribes for a missing response.
Nothing is consumed.

**The token expired, was already used, or does not match.** You get a fresh
challenge. See
[Troubleshooting](/mcp-server/troubleshooting#approval-keeps-being-requested).

## Approving a bulk action safely

Three things to read in the prompt before you say yes:

1. **The count.** Does `matchedDomains` from the preview match what you
   expected? 412 and 4,127 look alike in a hurry.
2. **The selector echo.** The prompt spells out the filters — `tld=["com"],
   expires_in_30_days=true`. If it says *"the entire portfolio (no filters)"*,
   the selector was empty.
3. **The organization.** If you are acting for a customer, the prompt names the
   sub-organization. If it does not, you are about to change your own portfolio.

## Bulk approvals bind the resolved set

For a bulk call, the resolved list of domains is part of what the token binds.
The list is sorted before it is hashed, so re-resolving the same selector
reproduces the same approval — but if a domain was added, removed or renamed
between the challenge and the retry, the hash no longer matches and you are asked
again.

<scalar-callout type="info">
This is a feature. It means you approve "these 412 domains", not "a bulk update,
roughly".
</scalar-callout>

## Related

- [Bulk operations with Jobs](/mcp-server/bulk-operations)
- [Results and errors](/mcp-server/results) — the shapes an approval can return
- [Roles &amp; permissions](/account/organizations/roles) — approval is not
  authorization; the API still decides what your account may do
- [Troubleshooting](/mcp-server/troubleshooting)
