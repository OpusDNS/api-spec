# .cz domain operations

`.cz` domains are managed by [CZ.NIC](https://www.nic.cz), the registry for the
Czech Republic. CZ.NIC runs the FRED registry system, which exposes auth code
delivery as a registry-level extension command rather than as part of the
standard domain lifecycle.

## Request an auth code

CZ.NIC does not return the authorization code on a domain info lookup, so it
cannot be read back through the standard domain endpoints. You have to
explicitly request it, and the registry sends it to the domain holder's email
address on file.

```bash
curl "$OPUSDNS_API_BASE/v1/domains/tld-specific/cz/example.cz/auth_code/request" \
  --request POST \
  --header "X-Api-Key: $OPUSDNS_API_KEY"
```

### Response

```json
{
  "name": "example.cz",
  "success": true
}
```

| Field | Type | Description |
| --- | --- | --- |
| `name` | `string` | The domain name. |
| `success` | `boolean` | Whether the request was successfully submitted to CZ.NIC. |
| `detail` | `string` | Error details. Only present when `success` is `false`. |

> **Note:** This endpoint submits the request to CZ.NIC — it does not return the
> auth code directly. The holder will receive the code via email from the
> registry.

## Transfer behavior

`.cz` transfers follow the standard EPP transfer process once the holder has
received the auth code via email.

| Policy | Value |
| --- | --- |
| Auth code required | Yes, and it is set by the registry, not by the registrar |
| Auth code validity | 7 days after the request |
| Transfer acknowledgement | None, transfers complete immediately |
| Transfer lock | Not supported by CZ.NIC |
| Transfer renews the domain | No |

Because the code expires after 7 days, request it only when the transfer is
about to be started.

## Related API Reference

- [`POST /v1/domains/tld-specific/cz/{domain_reference}/auth_code/request`](/api-reference#tag/domain_tld_specific/POST/v1/domains/tld-specific/cz/{domain_reference}/auth_code/request)
