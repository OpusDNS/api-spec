# Delete a domain

When you no longer need a domain, you can delete it through the OpusDNS API.
This guide explains the deletion process and the domain lifecycle stages that
follow.

## Delete a domain

Send a `DELETE` request to `/v1/domains/{domain_reference}`:

```bash
curl "$OPUSDNS_API_BASE/v1/domains/example.com" \
  --request DELETE \
  --header "X-Api-Key: $OPUSDNS_API_KEY"
```

A successful deletion returns a `204 No Content` response.

## Domain lifecycle after deletion

After you delete a domain, it goes through several stages before it becomes
available for registration again. The exact timing depends on the TLD and
registry policies.

```
Active → Pending Delete → Redemption Period → Pending Purge → Available
```

| Stage | Description |
| --- | --- |
| **Active** | The domain is registered and functioning normally. |
| **Pending Delete** | The deletion has been requested. The domain may still be recoverable. |
| **Redemption Period** | A grace period during which the domain can be restored (usually at a higher cost). |
| **Pending Purge** | The domain is queued for final removal from the registry. It cannot be restored. |
| **Available** | The domain is released and can be registered by anyone. |

<scalar-callout type="warning">
Redemption period lengths and restore fees vary by TLD. Check the <a href="/products/tlds/specifications">TLD specifications</a> for details on specific extensions.
</scalar-callout>

## Prerequisites

Before a domain can be deleted, make sure it does not have any blocking
statuses. The following statuses prevent deletion:

- `clientDeleteProhibited`
- `serverDeleteProhibited`
- `pendingTransfer`

If any of these are active, remove them first using the
[domain update endpoint](/products/domains/manage).

## Cancellation vs. deletion

- **Deletion** removes the domain from your account and begins the registry
  deletion process.
- If you want to keep the domain but stop automatic renewal, change the
  `renewal_mode` to `"expire"` instead of deleting it. The domain will
  remain active until its expiry date.

```bash
curl "$OPUSDNS_API_BASE/v1/domains/example.com" \
  --request PATCH \
  --header "X-Api-Key: $OPUSDNS_API_KEY" \
  --header "Content-Type: application/json" \
  --data '{
    "renewal_mode": "expire"
  }'
```

## Restoring a deleted domain

If a domain is in the redemption period, you can still restore it. See the
[Restore a domain](/products/domains/restore) guide.

## Related API Reference

- [`DELETE /v1/domains/{domain_reference}`](/api-reference#tag/domain/DELETE/v1/domains/{domain_reference})
- [`PATCH /v1/domains/{domain_reference}`](/api-reference#tag/domain/PATCH/v1/domains/{domain_reference})
- [`POST /v1/domains/{domain_reference}/restore`](/api-reference#tag/domain/POST/v1/domains/{domain_reference}/restore)
