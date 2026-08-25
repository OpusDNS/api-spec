# OAuth details

Most clients handle all of this for you — this page is for writing your own
client, or debugging one that will not connect.

The server is an OAuth 2.1 protected resource. It authenticates the caller and
forwards the identity to the OpusDNS API; the API decides what that identity is
allowed to do.

## The discovery chain

### 1. An unauthenticated call is challenged

```bash
curl -i -X POST 'https://api.opusdns.com/mcp' \
  --header 'Content-Type: application/json' \
  --header 'Accept: application/json, text/event-stream' \
  --data '{"jsonrpc":"2.0","id":1,"method":"tools/list","params":{}}'
```

```http
HTTP/2 401
www-authenticate: Bearer resource_metadata="https://api.opusdns.com/.well-known/oauth-protected-resource"

{"error":"authentication_required"}
```

The `WWW-Authenticate` header is the entry point: it names the metadata document
rather than the authorization server, so the resource can move realms without
clients being reconfigured.

### 2. Fetch the protected-resource metadata

```bash
curl https://api.opusdns.com/.well-known/oauth-protected-resource
```

```json
{
  "resource": "https://api.opusdns.com/mcp",
  "authorization_servers": ["https://auth.opusdns.com/realms/opusdns"],
  "bearer_methods_supported": ["header"],
  "scopes_supported": ["profile", "email", "opusdns:mcp", "offline_access"],
  "resource_documentation": "https://developers.opusdns.com/mcp-server"
}
```

Sandbox differs in two fields: the authorization server is
`https://auth.opusdns.com/realms/opusdns-sandbox` and the resource is
`https://sandbox.opusdns.com/mcp`.

The document is also served at
`/.well-known/oauth-protected-resource/mcp`, for clients that append the
resource path.

### 3. Fetch the authorization-server metadata

```bash
curl https://auth.opusdns.com/realms/opusdns/.well-known/openid-configuration
```

Supported grants include authorization code with PKCE (`S256`), refresh token,
and device code. The device-code grant is the one to use for an agent with no
browser.

### 4. Register

Dynamic Client Registration is enabled, so a client can register itself:

```bash
curl -X POST \
  https://auth.opusdns.com/realms/opusdns/clients-registrations/openid-connect \
  --header 'Content-Type: application/json' \
  --data '{"client_name":"my-agent","redirect_uris":["http://127.0.0.1:8976/callback"]}'
```

There is no client to request from OpusDNS and no ticket to file.

### 5. Authorize, exchange, call

Run the authorization-code flow with PKCE, then send the access token on every
call:

```bash
curl -X POST 'https://api.opusdns.com/mcp' \
  --header 'Authorization: Bearer <access_token>' \
  --header 'Content-Type: application/json' \
  --header 'Accept: application/json, text/event-stream' \
  --data '{"jsonrpc":"2.0","id":1,"method":"tools/list","params":{}}'
```

## Scopes

| Scope | Why |
| --- | --- |
| `openid` | Sent on the authorization request, but deliberately **absent** from `scopes_supported` |
| `profile`, `email` | Identify the signed-in user |
| `opusdns:mcp` | The resource scope for this server |
| `offline_access` | Refresh tokens, so you are not re-prompted every hour |

The two oddities in that table are deliberate, and both change what a client has
to do.

### Why `openid` is not advertised

`openid` is the OpenID Connect authentication marker, not a resource scope, and
the identity provider's client-registration policy rejects it during Dynamic
Client Registration because it is not a registerable client scope.

So: keep sending `openid` on the authorization request, where it is handled
specially. Just do not build your registration scope set by copying
`scopes_supported` and expecting `openid` to be in it.

### Why offline access is advertised

RFC 9728 says a resource server SHOULD NOT advertise the `offline_access` scope.
This one does, on purpose.

Clients commonly build their Dynamic Client Registration scope set from
`scopes_supported`, and the identity provider grants a registered client only the
scopes it registered with. The client then appends `offline_access` at the
authorization step, because the *authorization server* advertises it. If the
resource metadata omitted it, the authorization request would ask for a scope the
client was never granted, and the provider would answer `invalid_scope`.
Advertising it reconciles the two scope sets so refresh tokens work.

<scalar-callout type="info">
If you are writing your own client: treat <code>scopes_supported</code> here as
the set to register with, not as an RFC-pure list of resource scopes.
</scalar-callout>

## What the server checks

| Check | Requirement |
| --- | --- |
| Signature | Verified against the realm's published signing keys |
| `iss` | Must match the environment's realm issuer exactly |
| `exp` | Must be present and in the future. A token with no `exp` is rejected |
| `aud` | Must include the audience the deployment requires |

Request the `opusdns:mcp` scope and the resulting token carries the audience the
server requires. A token minted for the sandbox realm will not authenticate
against production, and vice versa.

## Metadata aliases and redirects

Some clients probe for authorization-server metadata at the resource URL rather
than following the protected-resource document. Those probes are redirected to
the realm:

| Path | Behaviour |
| --- | --- |
| `/.well-known/oauth-protected-resource` | The metadata document |
| `/.well-known/oauth-protected-resource/mcp` | The same document |
| `…/.well-known/openid-configuration` | `302` to the realm's discovery document |
| `…/.well-known/oauth-authorization-server` | `302` to the realm's discovery document |

## What is not supported

<scalar-callout type="danger">
The hosted MCP endpoint does not accept API keys. An
<code>X-Api-Key</code> header is ignored, the request counts as anonymous, and
you get <code>401 {"error":"authentication_required"}</code>. Use the OAuth flow.
API keys remain the right credential for direct API calls — see
<a href="/introduction/authentication">Authentication</a>.
</scalar-callout>

## Permissions come from your account, not from scopes

Authentication proves who you are. Authorization is decided by the OpusDNS API
from your organization roles, and it answers `403` when you lack the right.
Holding `opusdns:mcp` does not grant write access to anything.

<scalar-callout type="warning">
An MCP session inherits your own permissions. If your account can delete domains,
so can an agent acting for you — which is what the approval gate is for. See
<a href="/mcp-server/approvals">Approvals and confirmations</a> and
<a href="/account/organizations/roles">Roles &amp; permissions</a>.
</scalar-callout>
