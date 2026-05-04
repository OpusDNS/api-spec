# .de domain operations

`.de` domains are managed by [DENIC](https://www.denic.de), the registry for
Germany. The OpusDNS API provides a dedicated transit endpoint for `.de` domains.

## Transit

The transit operation disconnects a `.de` domain from its current registrar,
putting it into a transit state at the registry. The domain remains functional
and continues to resolve, but is no longer managed by any registrar.

```bash
curl "$OPUSDNS_API_BASE/v1/domains/tld-specific/de/example.de/transit" \
  --request POST \
  --header "X-Api-Key: $OPUSDNS_API_KEY" \
  --header "Content-Type: application/json" \
  --data '{
    "disconnect": true
  }'
```

### Request fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `disconnect` | `boolean` | Yes | Set to `true` to disconnect the domain from the current registrar and update to DENIC nameservers. |

### Response

```json
{
  "name": "example.de",
  "success": true
}
```

### What happens during transit

1. The domain is disconnected from OpusDNS as the managing registrar.
2. DENIC takes over nameserver resolution using their default nameservers.
3. The domain enters a transit state and can be picked up by any
   DENIC-accredited registrar.

> **Note:** Transit is specific to DENIC's registry model. It is commonly used
> when the domain holder wants to switch registrars without a traditional
> auth-code-based transfer.

## Transfer behavior

`.de` domain transfers are **immediate**. When you transfer a `.de` domain into
OpusDNS using `POST /v1/domains/transfer`, the transfer completes right away —
there is no pending period or approval wait time. The domain moves to your
account as soon as the transfer request is processed.

## Related API Reference

- [`POST /v1/domains/tld-specific/de/{domain_reference}/transit`](/api-reference#tag/domain_tld_specific/POST/v1/domains/tld-specific/de/{domain_reference}/transit)
