# API Quickstart

Get up and running with the OpusDNS API in under five minutes. By the end of
this guide you'll have made your first authenticated request and confirmed
that your credentials work.

## 1. Create your account

If you don't have an account yet, sign up at
[app.opusdns.com/signup](https://app.opusdns.com/signup). For testing, create
a separate sandbox account at
[app.sandbox.opusdns.com](https://app.sandbox.opusdns.com) — the sandbox is
free and completely isolated from production.

## 2. Generate an API key

Open the dashboard and navigate to
[API Credentials](https://app.opusdns.com/developer/api-credentials). Create a
new credential, then copy and store the API key securely.

<scalar-callout type="danger">
Your API key and client secret are only displayed once at creation time. Copy them immediately — they cannot be retrieved later.
</scalar-callout>

## 3. Set up your environment

Export your API key and base URL so the examples below work out of the box:

```bash
export OPUSDNS_API_BASE="https://sandbox.opusdns.com"
export OPUSDNS_API_KEY="opk_your_api_key_here"
```

## 4. Make your first request

Verify your credentials by listing domains on your account:

```bash
curl "$OPUSDNS_API_BASE/v1/domains?page=1&page_size=10" \
  --header "X-Api-Key: $OPUSDNS_API_KEY"
```

A successful response returns a JSON array of domains (or an empty array if
your account is new):

```json
{
  "items": [],
  "total": 0,
  "page": 1,
  "page_size": 10
}
```

## 5. Check domain availability

Now try checking whether a domain is available for registration:

```bash
curl "$OPUSDNS_API_BASE/v1/domains/check" \
  --request POST \
  --header "X-Api-Key: $OPUSDNS_API_KEY" \
  --header "Content-Type: application/json" \
  --data '{
    "domains": ["example.com", "example.net"]
  }'
```

The response contains one result per domain with a status like `available`,
`unavailable`, `market_available`, `tmch_claim`, or `error`.

## 6. Register a domain

Once you've found an available domain, register it:

```bash
curl "$OPUSDNS_API_BASE/v1/domains" \
  --request POST \
  --header "X-Api-Key: $OPUSDNS_API_KEY" \
  --header "Content-Type: application/json" \
  --data '{
    "domain": "my-new-domain.com",
    "period": 1,
    "registrant_id": "contact_01jxe1z8atfxpabknqbzhkvr3s",
    "admin_id": "contact_01jxe1z8atfxpabknqbzhkvr3s",
    "tech_id": "contact_01jxe1z8atfxpabknqbzhkvr3s",
    "nameservers": ["ns1.opusdns.com", "ns2.opusdns.net"]
  }'
```

<scalar-callout type="info">
In the sandbox, domain registrations are simulated — no real domains are created and no charges apply.
</scalar-callout>

## Next steps

- [Authentication](/introduction/authentication) — learn about OAuth tokens
  and when to use them.
- [Register a domain](/products/domains/register) — full registration guide
  with contacts, nameservers, and TLD-specific attributes.
- [Transfer a domain](/products/domains/transfer) — move existing domains to
  OpusDNS.
- [API Reference](/api-reference) — browse every endpoint.
