# Authentication

OpusDNS supports two authentication methods:

| Method | Header | Best for |
| --- | --- | --- |
| API key | `X-Api-Key: <api-key>` | Server-to-server integrations |
| OAuth token | `Authorization: Bearer <token>` | User-scoped OAuth flows |

## API key authentication

Create an API key in the [OpusDNS Dashboard](https://app.opusdns.com/) and send
it with every request:

```bash
curl "$OPUSDNS_API_BASE/v1/domains" \
  --header "X-Api-Key: $OPUSDNS_API_KEY"
```

## OAuth bearer tokens

OAuth tokens are issued by the auth token endpoint and sent in the standard
`Authorization` header:

```http
Authorization: Bearer <token>
```

Use API keys for most backend integrations unless your application specifically
needs an OAuth flow.
