# Connect Cursor, VS Code, and ChatGPT

All of these clients talk to the same endpoint with the same credentials:
`https://api.opusdns.com/mcp`, remote Streamable HTTP, browser OAuth. What
differs is the config file and the key it nests the server under.

| Client | Remote HTTP | Browser sign-in | Bridge needed | Approval prompt |
| --- | --- | --- | --- | --- |
| Claude Code | Yes | Yes | No | In the client (Path A) |
| Claude desktop and web | Yes | Yes | No | In the client (Path A) |
| Cursor | Yes | Yes | No | Relayed by the agent (Path B) |
| VS Code | Yes | Yes | No | Relayed by the agent (Path B) |
| ChatGPT custom connectors | Yes | Yes | No | Relayed by the agent (Path B) |
| OpenAI Responses API `mcp` tool | Yes | **No** — needs a token you already hold | No | Relayed by the agent (Path B) |
| stdio-only clients | No | Through a bridge | Yes | Relayed by the agent (Path B) |

The last column is about *who draws the prompt*, not about how strongly the
action is gated — the gate is server-side either way. A client gets Path A only
if it negotiates protocol revision `2026-07-28` **and** declares elicitation;
everything else falls back to Path B, which works everywhere. See
[Approvals and confirmations](/mcp-server/approvals).

## Cursor

Write `~/.cursor/mcp.json` for every project, or `.cursor/mcp.json` in a project
root for one:

```json
{
  "mcpServers": {
    "opusdns": {
      "url": "https://api.opusdns.com/mcp"
    }
  }
}
```

Then open Cursor's MCP settings; the server appears with a sign-in action.
Complete the browser flow.

<scalar-callout type="info">
Some Cursor versions also expect an explicit <code>"type": "http"</code>
alongside <code>"url"</code>. Adding it is harmless on versions that do not
require it.
</scalar-callout>

## VS Code

Write `.vscode/mcp.json` in the workspace, or use the **MCP: Add Server** command
for a user-level install.

```json
{
  "servers": {
    "opusdns": {
      "type": "http",
      "url": "https://api.opusdns.com/mcp"
    }
  }
}
```

<scalar-callout type="warning">
VS Code nests servers under <code>servers</code>, not
<code>mcpServers</code>. Copying a config from another client's documentation
without changing that key is the most common reason the server never appears.
</scalar-callout>

## ChatGPT

ChatGPT reaches custom MCP servers through developer mode in its connector
settings: create a connector, paste `https://api.opusdns.com/mcp`, and set
authentication to OAuth.

<scalar-callout type="info">
Availability and the exact location of that setting depend on your ChatGPT plan
and have moved more than once. Follow
<a href="https://platform.openai.com/docs">OpenAI's own documentation</a> for the
current steps; the only OpusDNS-specific values are the URL above and choosing
OAuth.
</scalar-callout>

### OpenAI Responses API

For a programmatic agent rather than the ChatGPT app:

```json
{
  "model": "gpt-5",
  "tools": [
    {
      "type": "mcp",
      "server_label": "opusdns",
      "server_url": "https://api.opusdns.com/mcp",
      "authorization": "<OpusDNS access token>",
      "require_approval": "always"
    }
  ]
}
```

<scalar-callout type="danger">
This path takes a bearer token you have already obtained — it does not run an
interactive OAuth flow, and the MCP endpoint does not accept API keys. You have
to mint an access token yourself against
<code>https://auth.opusdns.com/realms/opusdns</code>. The device-code grant is
the practical option for a headless agent; request <code>offline_access</code> so
you can refresh, because access tokens are short-lived. See
<a href="/mcp-server/connect/oauth">OAuth details</a>.
</scalar-callout>

Keep `require_approval` on. The server gates writes on its own side regardless,
but a model that cannot see an approval prompt will simply stop at the
confirmation payload — see [Approvals and
confirmations](/mcp-server/approvals).

## Any other MCP client

Everything a client needs:

- **URL** — `https://api.opusdns.com/mcp`
- **Transport** — Streamable HTTP. POST JSON-RPC with
  `Accept: application/json, text/event-stream`
- **Authentication** — OAuth 2.1 authorization code with PKCE (`S256`). Dynamic
  Client Registration is supported, so no credential has to be provisioned by
  hand
- **Scopes to request** — `openid profile email opusdns:mcp offline_access`
- **Session** — none. The server is stateless
- **CORS** — open, and `WWW-Authenticate` is exposed, so a browser-based client
  can read the challenge

For a client that only speaks stdio, bridge it:
`npx -y mcp-remote https://api.opusdns.com/mcp`.

Full discovery chain and token requirements: [OAuth
details](/mcp-server/connect/oauth).
