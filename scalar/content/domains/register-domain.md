# Register a domain

This flow shows the core steps for registering a new domain through the OpusDNS
API.

## Flow overview

1. Check whether the domain is available.
2. Make sure you have contacts for the required roles.
3. Register the domain with contacts, renewal mode, period, and nameservers.
4. Read the created domain and track follow-up events or jobs if needed.

## 1. Check availability

Before submitting a registration, check the domain with `GET /v1/domains/check`.

```bash
curl --get "$OPUSDNS_API_BASE/v1/domains/check" \
  --header "X-Api-Key: $OPUSDNS_API_KEY" \
  --data-urlencode "domains=example.com"
```

Continue only when the result is registrable for your use case. Availability
statuses include `available`, `unavailable`, `market_available`, `tmch_claim`,
and `error`.

## 2. Prepare contacts

Domain registrations require contact data. The `contacts` property accepts
contact IDs keyed by role, or registry contact handle objects keyed by role.

Common roles are:

| Role | Purpose |
| --- | --- |
| `registrant` | Legal domain holder |
| `admin` | Administrative contact |
| `tech` | Technical contact |
| `billing` | Billing contact |

If you do not have contacts yet, create them first with `POST /v1/contacts`.

## 3. Register the domain

Register the domain with `POST /v1/domains`.
Use `renewal_mode: "renew"` for automatic renewal or `"expire"` when the domain
should not renew. Registration periods use `y`, `m`, or `d` for years, months,
or days.

```bash
curl "$OPUSDNS_API_BASE/v1/domains" \
  --request POST \
  --header "X-Api-Key: $OPUSDNS_API_KEY" \
  --header "Content-Type: application/json" \
  --data '{
    "name": "example.com",
    "contacts": {
      "registrant": "contact_01h45ytscbebyvny4gc8cr8ma2",
      "admin": "contact_01h45ytscbebyvny4gc8cr8ma2",
      "tech": "contact_01h45ytscbebyvny4gc8cr8ma2",
      "billing": "contact_01h45ytscbebyvny4gc8cr8ma2"
    },
    "renewal_mode": "renew",
    "period": {
      "unit": "y",
      "value": 1
    },
    "nameservers": [
      { "hostname": "ns1.example.net" },
      { "hostname": "ns2.example.net" }
    ],
    "create_zone": true
  }'
```

> **Note:** If the domain has premium pricing, include `expected_price` in your
> request to confirm the price. See [Premium domains](/domains/premium) for
> details.

## 4. Confirm the result

The create call returns a `DomainResponse`. You can also retrieve the domain
later with either its ID or name:

```bash
curl "$OPUSDNS_API_BASE/v1/domains/example.com" \
  --header "X-Api-Key: $OPUSDNS_API_KEY"
```

## Related API Reference

- [`GET /v1/domains/check`](/api-reference)
- [`POST /v1/domains`](/api-reference)
- [`GET /v1/domains/{domain_reference}`](/api-reference)
