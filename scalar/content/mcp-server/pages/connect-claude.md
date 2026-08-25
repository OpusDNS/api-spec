# Connect Claude and Claude Code

Everything you need for either client:

- **URL** — `https://api.opusdns.com/mcp` (sandbox:
  `https://sandbox.opusdns.com/mcp`)
- **Transport** — remote Streamable HTTP
- **Authentication** — OAuth 2.1 in the browser. No API key, no token to paste.

<scalar-callout type="info">
You do not create a credential for the MCP server. The client registers itself
with the OpusDNS identity provider automatically and then opens a browser for
you to sign in. The API keys described in
<a href="/introduction/authentication">Authentication</a> are for direct API
calls and are <strong>not</strong> accepted by the MCP endpoint.
</scalar-callout>

## Claude Code

Add the server:

```bash
claude mcp add --transport http opusdns https://api.opusdns.com/mcp
```

Then, inside Claude Code, run `/mcp`, select **opusdns**, and complete the
browser sign-in. From a shell instead:

```bash
claude mcp login opusdns
```

By default the server is registered for the current project only. To make it
available everywhere, or to check it in for your team:

```bash
claude mcp add --transport http --scope user opusdns https://api.opusdns.com/mcp
claude mcp add --transport http --scope project opusdns https://api.opusdns.com/mcp
```

The project scope writes a shared `.mcp.json`:

```json
{
  "mcpServers": {
    "opusdns": {
      "type": "http",
      "url": "https://api.opusdns.com/mcp"
    }
  }
}
```

<scalar-callout type="warning">
The <code>"type"</code> field is required. An entry with a <code>url</code> and
no <code>type</code> is read as a local command, and the server is skipped.
</scalar-callout>

Inspect and remove:

```bash
claude mcp list
claude mcp get opusdns
claude mcp remove opusdns
```

### Adding the sandbox alongside production

```bash
claude mcp add --transport http opusdns-sandbox https://sandbox.opusdns.com/mcp
```

<scalar-callout type="warning">
Production and sandbox are separate identity realms, so each connector needs its
own sign-in and neither can see the other's domains. Give them distinct names —
an agent offered two connectors with the same name will pick one arbitrarily.
</scalar-callout>

## Claude desktop and Claude on the web

Open **Settings → Connectors → Add custom connector**, name it `OpusDNS`, paste
`https://api.opusdns.com/mcp`, add it, then choose **Connect** and complete the
browser sign-in.

<scalar-callout type="info">
Custom connectors are a paid-plan feature, and on team and enterprise plans an
administrator may need to allow custom connectors for the organization first.
</scalar-callout>

## Clients that only speak stdio

Older clients cannot open a remote HTTP connection themselves and need a local
bridge:

```json
{
  "mcpServers": {
    "opusdns": {
      "command": "npx",
      "args": ["-y", "mcp-remote", "https://api.opusdns.com/mcp"]
    }
  }
}
```

For Claude desktop that file is `claude_desktop_config.json`, under
`~/Library/Application Support/Claude/` on macOS and `%APPDATA%\Claude\` on
Windows. The bridge runs the OAuth flow on first use and caches the tokens on
disk; delete its cache directory to force a fresh sign-in.

<scalar-callout type="warning">
<code>mcp-remote</code> is a third-party npm package, not maintained or
supported by OpusDNS. Prefer a client with native remote HTTP support. If you use
the bridge, you are running third-party code that holds your OpusDNS access
token on disk.
</scalar-callout>

## Next

- [Tool workflows](/mcp-server/tool-workflows) — what to ask for first
- [Approvals and confirmations](/mcp-server/approvals) — what a confirmation
  prompt looks like
- [OAuth details](/mcp-server/connect/oauth) — the flow in full, for writing
  your own client
