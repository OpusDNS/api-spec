# Disconnecting

Three different things end an agent's access, and they are not
interchangeable: the credentials your client has stored, the sign-in session
behind them, and the OpusDNS account the agent was acting for. Removing the
connector stops the agent; on its own it does not invalidate a token that has
already been issued.

## Remove the server from your client

Your credentials live in the client, never on the MCP server, so this is the
step that actually deletes them.

| Client | How |
| --- | --- |
| Claude Code | `claude mcp logout opusdns` clears the stored credentials; `claude mcp remove opusdns` also drops the entry |
| Claude desktop and web | **Settings → Connectors**, then remove the connector |
| Cursor | Delete the entry from `~/.cursor/mcp.json`, or from the project's `.cursor/mcp.json` |
| VS Code | Delete the entry from `.vscode/mcp.json`, or remove the server from the MCP view |
| `mcp-remote` bridge | Delete its cache directory, `~/.mcp-auth` |

<scalar-callout type="warning">
The bridge is the one people forget. It caches your access token on disk under
your home directory, so deleting the server from a client's config file leaves
the credential behind. Remove the cache directory too.
</scalar-callout>

## Sign out

Signing out at the OpusDNS identity provider ends the session your client
renews against:

- Production — `https://auth.opusdns.com/realms/opusdns/account`
- Sandbox — `https://auth.opusdns.com/realms/opusdns-sandbox/account`

An access token that has already been issued keeps working until it expires.
Signing out stops the client obtaining a new one; it does not reach back and
cancel the one it already has.

## Cut access off immediately

Deleting the user the agent signed in as removes their OpusDNS sign-in
altogether, and every tool call checks the account it is acting for — so the
next call fails, whatever the client still holds. See
[User management](/account/users).

<scalar-callout type="info">
You cannot delete your own account or the last admin in an organization, so
this is a step for a second administrator. If you are locking yourself out of
your own agent, remove the connector and sign out instead.
</scalar-callout>

## What disconnecting does not do

- **It does not touch your API keys.** They are a separate credential, are never
  accepted by the MCP endpoint, and are managed from
  [Authentication](/introduction/authentication).
- **It does not stop work already submitted.** A bulk batch runs in
  [Jobs](/automation/jobs/overview), not in the conversation, so disconnecting
  neither pauses nor cancels it — steer it from
  [Managing batches](/automation/jobs/managing-batches).
- **It leaves nothing to revoke on the approval side.** Each approval is single
  use and expires within minutes of being issued. See
  [Approvals and confirmations](/mcp-server/approvals).

## Related

- [Connect Claude and Claude Code](/mcp-server/connect)
- [OAuth details](/mcp-server/connect/oauth)
- [Roles &amp; permissions](/account/organizations/roles)
