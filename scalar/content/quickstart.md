# Quickstart

Use this guide to make your first authenticated request and confirm that your
account can read domain data.

## 1. Choose an API environment

The OpenAPI document defines two servers:

| Environment | Base URL |
| --- | --- |
| Production | `https://api.opusdns.com` |
| Sandbox | `https://sandbox.opusdns.com` |

For development, start with the sandbox:

```bash
export OPUSDNS_API_BASE="https://sandbox.opusdns.com"
export OPUSDNS_API_KEY="your-api-key"
```

## 2. Authenticate requests

The simplest way to authenticate server-to-server requests is an API key:

```http
X-Api-Key: <your-api-key>
```

OAuth bearer tokens are also supported. Use the [Authentication](/authentication)
guide when you need OAuth instead of an API key.

## 3. Check domain availability

```bash
curl --get "$OPUSDNS_API_BASE/v1/domains/check" \
  --header "X-Api-Key: $OPUSDNS_API_KEY" \
  --data-urlencode "domains=example.com" \
  --data-urlencode "domains=example.net"
```

The response contains one result per domain and a status such as `available`,
`unavailable`, `market_available`, `tmch_claim`, or `error`.

## 4. List your domains

```bash
curl "$OPUSDNS_API_BASE/v1/domains?page=1&page_size=10" \
  --header "X-Api-Key: $OPUSDNS_API_KEY"
```

## 5. Next steps

- [Register a domain](/domains/register)
- [Transfer a domain](/domains/transfer)
- [Authentication](/authentication)
- [API Reference](/api-reference)
