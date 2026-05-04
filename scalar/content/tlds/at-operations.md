# .at domain operations

`.at` domains are managed by [nic.at](https://www.nic.at), the registry for
Austria. The OpusDNS API provides a dedicated withdraw endpoint for `.at`
domains.

## Withdraw

The withdraw operation removes a `.at` domain from the registry. This is
different from a standard deletion — it signals to the registry that the
registrar is withdrawing the domain.

```bash
curl "$OPUSDNS_API_BASE/v1/domains/tld-specific/at/example.at/withdraw" \
  --request POST \
  --header "X-Api-Key: $OPUSDNS_API_KEY" \
  --header "Content-Type: application/json" \
  --data '{
    "zone_delete": true
  }'
```

### Request fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `zone_delete` | `boolean` | Yes | Whether to inform the registry that the DNS zone for the domain has already been deleted. |

### Response

```json
{
  "name": "example.at",
  "success": true
}
```

> **Note:** The `zone_delete` field informs nic.at whether the nameservice for
> the domain has already been stopped. This is part of nic.at's registry
> protocol.

## Related API Reference

- [`POST /v1/domains/tld-specific/at/{domain_reference}/withdraw`](/api-reference#tag/domain_tld_specific/POST/v1/domains/tld-specific/at/{domain_reference}/withdraw)
