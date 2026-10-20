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
| ChatGPT custom MCP servers | Yes | Yes | No | Relayed by the agent (Path B) |
| OpenAI Responses API `mcp` tool | Yes | **No** — needs a token you already hold | No | Relayed by the agent (Path B) |
| stdio-only clients | No | Through a bridge | Yes | Relayed by the agent (Path B) |

The last column is about *who draws the prompt*, not about how strongly the
action is gated — the gate is server-side either way. A client gets Path A only
if it negotiates protocol revision `2026-07-28` **and** declares elicitation;
everything else falls back to Path B, which works everywhere. See
[Approvals and confirmations](/mcp-server/approvals).

ChatGPT adds gates the other clients do not have: the plan decides whether the
tools can write at all, and in a workspace only some roles may add the server.
See [ChatGPT](#chatgpt).

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

In ChatGPT on the web, open **Plugins**, select **+**, then **Add custom MCP
server**. Enter `https://api.opusdns.com/mcp` as the endpoint URL, choose OAuth
for authentication, acknowledge the risk warning, and select **Create as a
plugin**. The only OpusDNS-specific values are that URL and choosing OAuth.
Developer mode is no longer needed, and ChatGPT no longer requires a server to
expose tools named `search` and `fetch`.

<scalar-callout type="warning">
Full MCP support — every tool this server exposes, writes included — is
<a href="https://help.openai.com/en/articles/12584461-connecting-custom-mcp-servers-in-chatgpt">available
only to ChatGPT Business and Enterprise/Edu workspaces on the web</a>. Pro
accounts can connect a custom MCP server with read/fetch permissions only, and
the mobile apps cannot connect one at all. This is an OpenAI product limitation;
nothing on the OpusDNS side can lift it.
</scalar-callout>

In a Business workspace only admins and owners can add the server and publish it
for the workspace. In Enterprise/Edu, admins can also let selected members add
it through role-based access control; publishing stays with admins and owners.
Members see the server once it is published. OpenAI moves these menus often —
the setup used to sit behind a developer mode toggle under Settings, and before
that under Connectors → Advanced — so treat OpenAI's documentation, not any
particular path, as authoritative.

Once a workspace has published the server, ChatGPT works from a snapshot of its
tool list. If a server release changes a tool, calls to it can fail until an
admin refreshes the tool list in the workspace's app settings.

Deep research uses custom MCP servers for reads only, which puts `bulk_submit`
out of reach there.

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
<code>https://auth.opusdns.com/realms/production</code>. The device-code grant is
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
