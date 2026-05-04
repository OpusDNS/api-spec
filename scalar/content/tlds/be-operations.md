# .be domain operations

`.be` domains are managed by [DNS Belgium](https://www.dnsbelgium.be), the
registry for Belgium. The OpusDNS API provides a dedicated endpoint for
requesting auth codes from the registry.

## Request an auth code

`.be` domains require you to explicitly request a new authorization code from
DNS Belgium. The code is sent to the registrant's email address on file.

```bash
curl "$OPUSDNS_API_BASE/v1/domains/tld-specific/be/example.be/auth_code/request" \
  --request POST \
  --header "X-Api-Key: $OPUSDNS_API_KEY"
```

### Response

```json
{
  "name": "example.be",
  "success": true
}
```

| Field | Type | Description |
| --- | --- | --- |
| `name` | `string` | The domain name. |
| `success` | `boolean` | Whether the request was successfully submitted to DNS Belgium. |
| `detail` | `string` | Error details. Only present when `success` is `false`. |

> **Note:** This endpoint submits the request to DNS Belgium — it does not
> return the auth code directly. The registrant will receive the code via email
> from the registry.

### Prerequisites

The domain must not have `transfer_lock` enabled. Unlock it first via
`PATCH /v1/domains/{domain_reference}` with `"transfer_lock": false`.

## Transfer behavior

`.be` transfers follow the standard EPP transfer process once the registrant
has received the auth code via email.

## Related API Reference

- [`POST /v1/domains/tld-specific/be/{domain_reference}/auth_code/request`](/api-reference#tag/domain_tld_specific/POST/v1/domains/tld-specific/be/{domain_reference}/auth_code/request)
