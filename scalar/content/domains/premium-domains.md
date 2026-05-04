# Premium domains

Some domain names carry premium pricing set by the registry. These are typically
short, memorable, or high-value names that cost more than the standard price for
their TLD. Premium prices apply to registration and may also affect renewals,
transfers, and restores.

## Identifying premium domains

When you check domain availability with `GET /v1/domains/check`, each result
includes an `is_premium` flag and, when applicable, a `premium_pricing` object
with prices per action.

```bash
curl --get "$OPUSDNS_API_BASE/v1/domains/check" \
  --header "X-Api-Key: $OPUSDNS_API_KEY" \
  --data-urlencode "domains=luxury.com"
```

A premium domain returns pricing information in the response:

```json
{
  "results": [
    {
      "domain": "luxury.com",
      "available": true,
      "is_premium": true,
      "premium_pricing": {
        "prices": [
          { "action": "registration", "price": "2500.00", "currency": "USD" },
          { "action": "renewal", "price": "250.00", "currency": "USD" },
          { "action": "transfer", "price": "2500.00", "currency": "USD" },
          { "action": "restore", "price": "350.00", "currency": "USD" }
        ]
      }
    }
  ]
}
```

A standard-priced domain has `is_premium: false` and no `premium_pricing`.

## The `expected_price` field

When you register, renew, transfer, or restore a premium domain, include the
`expected_price` field in your request. This acts as a price confirmation — if
the actual registry price does not match, the API rejects the request instead of
charging you a different amount.

```json
{
  "name": "luxury.com",
  "expected_price": "2500.00",
  "contacts": {
    "registrant": "contact_01h45ytscbebyvny4gc8cr8ma2"
  },
  "renewal_mode": "renew",
  "period": { "unit": "y", "value": 1 }
}
```

- If `expected_price` is **missing** for a premium domain, the API returns an
  error requiring you to confirm the price.
- If `expected_price` **does not match** the registry price, the API returns a
  mismatch error.
- If `expected_price` is provided for a **non-premium** domain, the API returns
  an error indicating that price confirmation is not applicable.

> **Tip:** Always check `premium_pricing` in the availability response before
> submitting a registration, transfer, or other operation on a premium domain.
> Use the returned price as your `expected_price` value.

## Supported operations

Premium pricing and the `expected_price` field are supported on:

| Operation | Endpoint | Notes |
| --- | --- | --- |
| Registration | [`POST /v1/domains`](/api-reference) | Include `expected_price` in the request body. |
| Renewal | [`POST /v1/domains/{domain_reference}/renew`](/api-reference) | Premium renewals may cost more than standard renewals. |
| Transfer | [`POST /v1/domains/{domain_reference}/transfer`](/api-reference) | The transfer price may differ from the registration price. |
| Restore | [`POST /v1/domains/{domain_reference}/restore`](/api-reference) | Restore fees for premium domains can be significantly higher. |

## Registering a premium domain

```bash
curl "$OPUSDNS_API_BASE/v1/domains" \
  --request POST \
  --header "X-Api-Key: $OPUSDNS_API_KEY" \
  --header "Content-Type: application/json" \
  --data '{
    "name": "luxury.com",
    "expected_price": "2500.00",
    "contacts": {
      "registrant": "contact_01h45ytscbebyvny4gc8cr8ma2",
      "admin": "contact_01h45ytscbebyvny4gc8cr8ma2",
      "tech": "contact_01h45ytscbebyvny4gc8cr8ma2",
      "billing": "contact_01h45ytscbebyvny4gc8cr8ma2"
    },
    "renewal_mode": "renew",
    "period": { "unit": "y", "value": 1 }
  }'
```

## Renewing a premium domain

```bash
curl "$OPUSDNS_API_BASE/v1/domains/luxury.com/renew" \
  --request POST \
  --header "X-Api-Key: $OPUSDNS_API_KEY" \
  --header "Content-Type: application/json" \
  --data '{
    "period": { "unit": "y", "value": 1 },
    "current_expiry_date": "2026-06-01",
    "expected_price": "250.00"
  }'
```

## Restoring a premium domain

```bash
curl "$OPUSDNS_API_BASE/v1/domains/luxury.com/restore" \
  --request POST \
  --header "X-Api-Key: $OPUSDNS_API_KEY" \
  --header "Content-Type: application/json" \
  --data '{
    "reason": "Domain deleted in error",
    "expected_price": "350.00"
  }'
```

## Filtering domains by premium status

Use the `is_premium` query parameter on `GET /v1/domains` to filter your domain
list:

```bash
# List only premium domains
curl --get "$OPUSDNS_API_BASE/v1/domains" \
  --header "X-Api-Key: $OPUSDNS_API_KEY" \
  --data-urlencode "is_premium=true"
```

```bash
# List only standard-priced domains
curl --get "$OPUSDNS_API_BASE/v1/domains" \
  --header "X-Api-Key: $OPUSDNS_API_KEY" \
  --data-urlencode "is_premium=false"
```

Each domain in the response includes `is_premium` so you can identify premium
domains without a separate availability check.

## Related API Reference

- [`GET /v1/domains/check`](/api-reference)
- [`POST /v1/domains`](/api-reference)
- [`POST /v1/domains/{domain_reference}/renew`](/api-reference)
- [`POST /v1/domains/{domain_reference}/restore`](/api-reference)
- [`GET /v1/domains`](/api-reference)
