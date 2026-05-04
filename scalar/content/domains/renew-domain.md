# Renew a domain

Domains with `renewal_mode: "renew"` are renewed automatically before they
expire. If you need to renew a domain manually — for example to extend it
further in advance — use the renew endpoint.

## Renew a domain

Send a `POST` request to `/v1/domains/{domain_reference}/renew`:

```bash
curl "$OPUSDNS_API_BASE/v1/domains/example.com/renew" \
  --request POST \
  --header "X-Api-Key: $OPUSDNS_API_KEY" \
  --header "Content-Type: application/json" \
  --data '{
    "period": {
      "unit": "y",
      "value": 1
    },
    "current_expiry_date": "2026-03-15"
  }'
```

### Request fields

| Field | Required | Description |
| --- | --- | --- |
| `period` | Yes | How long to extend the domain. Uses `unit` (`y`, `m`, or `d`) and `value`. |
| `current_expiry_date` | Yes | The domain's current expiry date. Acts as a safety check to prevent accidental double renewals. |
| `expected_price` | No | Price confirmation for [premium domains](/domains/premium). Required for premium domains; rejected for standard domains. |

### Response

A successful renewal returns:

```json
{
  "name": "example.com",
  "new_expiry_date": "2027-03-15",
  "period_extended": {
    "unit": "y",
    "value": 1
  }
}
```

> **Note:** For premium domains, include `expected_price` to confirm the renewal
> price. See [Premium domains](/domains/premium) for details.

## Domain reference

You can use either the domain name or the domain ID as the path parameter:

```
POST /v1/domains/example.com/renew
POST /v1/domains/dom_01h45ytscbebyvny4gc8cr8ma2/renew
```

## Related API Reference

- [`POST /v1/domains/{domain_reference}/renew`](/api-reference)
- [`GET /v1/domains/{domain_reference}`](/api-reference)
