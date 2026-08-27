# MCP or the REST API?

Both reach the same registrar. They differ in who is driving.

| Use the MCP server when | Use the REST API when |
| --- | --- |
| A person is in the loop and reads the answers | Nothing is watching, and nothing may stop to ask |
| The work is exploratory — "what is expiring", "which of these are locked" | The work is defined in advance and repeats |
| The shape of the task changes as you learn | The shape is fixed and encoded in your code |
| You want one-off portfolio changes with an explicit approval | You are building a pipeline, a cron job, or an event handler |
| You are asking in words | You are calling in code |

<scalar-callout type="warning">
The approval gate on the MCP server cannot be turned off. That is a feature for
interactive work and a blocker for unattended automation — a nightly job that
hits an approval prompt simply stops. Automate against the API.
</scalar-callout>

## What is the same

- **The same operations.** Every OpusDNS API endpoint is reachable through
  `call_operation`; the bulk tools submit the same
  [Jobs](/automation/jobs/overview) batches you would `POST /v1/jobs` yourself.
- **The same permissions.** Authorization is decided by your account's roles.
  Connecting over MCP grants nothing your account did not already have.
- **The same limits.** Jobs caps a command at 1,000 instances either way.
- **The same request IDs.** `x-server-request-id` identifies a request for
  support regardless of how it arrived.

## What is different

| | MCP server | REST API |
| --- | --- | --- |
| Credential | OAuth in a browser, no key to store | An API key you create and store |
| Approval | Server-enforced on every write | None — your code is responsible |
| Discovery | `search_operations` over the catalog | [API Reference](/api-reference) |
| Result size | Capped and projected to fit a model's context | Whatever the endpoint returns |
| Who sees the data | Your AI client and its model provider | Only your systems |

That last row is the one worth thinking about before connecting a production
account. [Data handling](/mcp-server/data-handling) spells out what does and
does not leave OpusDNS.

## Using both

The common shape is an agent that explores and a script that executes: ask over
MCP to work out *which* domains and *what* change, then encode the result as a
Jobs batch in your own code once the answer stops changing. The selector you
converged on in conversation is the same filter set `GET /v1/domains` takes.

## Next

- [Quickstart](/mcp-server/quickstart) — the MCP path, end to end
- [API Quickstart](/introduction/quickstart) — the same operations over HTTP
- [Bulk operations with Jobs](/mcp-server/bulk-operations)
