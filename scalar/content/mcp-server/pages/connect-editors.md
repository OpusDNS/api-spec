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

ChatGPT adds a second gate the other clients do not have: signing in is one
thing, *seeing* the tools is another, and the latter needs developer mode, which
is not offered on the free plan. See [ChatGPT](#chatgpt).

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

Create a connector, paste `https://api.opusdns.com/mcp`, and set authentication
to OAuth. The only OpusDNS-specific values are that URL and choosing OAuth.

Sign-in itself works on any plan: Dynamic Client Registration completes, the
browser flow completes, and the server answers `tools/list` with its full tool
list. Whether ChatGPT then *shows* those tools is a separate, plan-dependent
question.

<scalar-callout type="warning">
Outside developer mode, ChatGPT surfaces only tools named <code>search</code>
and <code>fetch</code>. This server exposes neither, so on a plan without
developer mode a connector that authenticated perfectly still reports no tools.
Developer mode is
<a href="https://developers.openai.com/api/docs/guides/developer-mode">available
to Pro, Plus, Business, Enterprise, and Education accounts on the web</a> — it
does not exist on the free plan. This is an OpenAI product limitation; nothing
on the OpusDNS side can lift it.
</scalar-callout>

On a plan that offers it, the toggle is under **Settings → Security and login**.
It has moved before — it lived under Connectors → Advanced until Connectors was
renamed to Plugins — so treat OpenAI's documentation, not any particular path,
as authoritative. With developer mode on, every tool this server exposes is
available, writes included, subject to your confirmation settings.

Two limits survive developer mode: agent mode does not use custom connectors at
all, and deep research uses them for reads only, which puts `bulk_submit` out of
reach there.

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
