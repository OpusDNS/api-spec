# Restore a domain

If a domain has been deleted and is in the redemption period, you can restore it
to bring it back to active status. Restoring a domain is typically more
expensive than a standard renewal and must be done within the registry's grace
period.

## Restore a domain

Send a `POST` request to `/v1/domains/{domain_reference}/restore`:

```bash
curl "$OPUSDNS_API_BASE/v1/domains/example.com/restore" \
  --request POST \
  --header "X-Api-Key: $OPUSDNS_API_KEY" \
  --header "Content-Type: application/json" \
  --data '{
    "reason": "Domain deleted in error",
    "expected_price": "80.00"
  }'
```

### Request fields

| Field | Required | Description |
| --- | --- | --- |
| `reason` | No | A short explanation for the restore request. Some registries require this. |
| `additional_info` | No | Extra context about the restore, if needed. |
| `expected_price` | No | Price confirmation for [premium domains](/products/domains/premium). Required for premium domains; rejected for standard domains. |

### Response

A successful restore returns:

```json
{
  "domain_id": "dom_01h45ytscbebyvny4gc8cr8ma2",
  "name": "example.com",
  "restored_at": "2026-01-15T10:30:00Z"
}
```

## When can you restore?

A domain can only be restored while it is in the **redemption period**. This
is the grace period after deletion during which the registry holds the domain
before permanently releasing it.

| Domain status | Can restore? |
| --- | --- |
| Active | No — domain is not deleted |
| Pending Delete | Depends on registry policy |
| Redemption Period | **Yes** |
| Pending Purge | No — too late |

<scalar-callout type="info">
Redemption period length and restore pricing vary by TLD. Check the <a href="/products/tlds/specifications">TLD specifications</a> for details on specific extensions.
</scalar-callout>

<scalar-callout type="warning">
For premium domains, include <code>expected_price</code> to confirm the restore price. See <a href="/products/domains/premium">Premium domains</a> for details.
</scalar-callout>

## Related API Reference

- [`POST /v1/domains/{domain_reference}/restore`](/api-reference#tag/domain/POST/v1/domains/{domain_reference}/restore)
- [`DELETE /v1/domains/{domain_reference}`](/api-reference#tag/domain/DELETE/v1/domains/{domain_reference})
- [`GET /v1/domains/{domain_reference}`](/api-reference#tag/domain/GET/v1/domains/{domain_reference})
