# .eu domain operations

`.eu` domains are managed by [EURid](https://eurid.eu), the registry for the
European Union. The OpusDNS API provides a dedicated endpoint for requesting
auth codes from the registry.

## Request an auth code

Request a new authorization code for a `.eu` domain directly from EURid. The
auth code is returned in the API response.

```bash
curl "$OPUSDNS_API_BASE/v1/domains/tld-specific/eu/example.eu/auth_code/request" \
  --request POST \
  --header "X-Api-Key: $OPUSDNS_API_KEY"
```

### Response

```json
{
  "name": "example.eu",
  "success": true,
  "auth_code": "aBcDeFgH1234",
  "auth_code_expires_on": "2026-06-04T10:30:00Z"
}
```

| Field | Type | Description |
| --- | --- | --- |
| `name` | `string` | The domain name. |
| `success` | `boolean` | Whether the auth code was successfully generated. |
| `auth_code` | `string` | The authorization code. Only present when `success` is `true`. |
| `auth_code_expires_on` | `datetime` | When the auth code expires. Only present when `success` is `true`. |
| `detail` | `string` | Error details. Only present when `success` is `false`. |

## Transfer behavior

`.eu` transfers follow the standard EPP transfer process once you have the auth
code. The losing registrar has 5 days to approve or reject the transfer. If no
action is taken, the transfer is auto-approved.

## Related API Reference

- [`POST /v1/domains/tld-specific/eu/{domain_reference}/auth_code/request`](/api-reference#tag/domain_tld_specific/POST/v1/domains/tld-specific/eu/{domain_reference}/auth_code/request)
