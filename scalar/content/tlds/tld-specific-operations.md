# TLD-specific operations

Some TLDs have unique registry requirements that go beyond the standard domain
lifecycle. The OpusDNS API provides dedicated endpoints for these
TLD-specific operations.

## .eu — Request auth code

`.eu` domains managed by EURid require you to explicitly request an
authorization code before transferring the domain away. The auth code is sent
to the registrant's email address on file.

```bash
curl "$OPUSDNS_API_BASE/v1/domains/tld-specific/eu/example.eu/auth_code/request" \
  --request POST \
  --header "X-Api-Key: $OPUSDNS_API_KEY"
```

The response confirms the request was submitted. The registrant will receive
the auth code via email from the registry.

> **Note:** This endpoint only requests the code — it does not return the code
> directly. The registrant must retrieve it from their email.

## .be — Request auth code

`.be` domains managed by DNS Belgium follow a similar process. Request an auth
code to be sent to the registrant:

```bash
curl "$OPUSDNS_API_BASE/v1/domains/tld-specific/be/example.be/auth_code/request" \
  --request POST \
  --header "X-Api-Key: $OPUSDNS_API_KEY"
```

## .de — Transit

`.de` domains managed by DENIC support a transit operation. This disconnects the
domain from the current registrar, putting it into a transit state at the
registry. The domain remains functional but is no longer managed by any
registrar.

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

| Field | Type | Description |
| --- | --- | --- |
| `disconnect` | boolean | Whether to disconnect the domain from the registrar |

### Response

```json
{
  "name": "example.de",
  "success": true
}
```

> **Note:** Transit is specific to DENIC's registry model. A domain in transit
> can be picked up by another DENIC-accredited registrar.

## .at — Withdraw

`.at` domains managed by nic.at support a withdraw operation. This removes the
domain from the registry entirely.

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

| Field | Type | Description |
| --- | --- | --- |
| `zone_delete` | boolean | Whether to also delete the DNS zone for the domain |

### Response

```json
{
  "name": "example.at",
  "success": true
}
```

## .uk — Release (push transfer)

`.uk` domains managed by Nominet use a tag-based transfer system instead of
auth codes. To transfer a `.uk` domain to another registrar, you release it to
their Nominet tag.

```bash
curl "$OPUSDNS_API_BASE/v1/domains/tld-specific/uk/example.uk/release" \
  --request POST \
  --header "X-Api-Key: $OPUSDNS_API_KEY" \
  --header "Content-Type: application/json" \
  --data '{
    "tag": "TARGET-REGISTRAR-TAG"
  }'
```

> **Note:** The receiving registrar's Nominet tag must be known in advance.
> This is different from a standard auth code transfer — the domain is pushed
> directly to the target registrar.

## Supported TLDs

| TLD | Operation | Endpoint |
| --- | --- | --- |
| `.eu` | Request auth code | `POST /v1/domains/tld-specific/eu/{domain}/auth_code/request` |
| `.be` | Request auth code | `POST /v1/domains/tld-specific/be/{domain}/auth_code/request` |
| `.de` | Transit | `POST /v1/domains/tld-specific/de/{domain}/transit` |
| `.at` | Withdraw | `POST /v1/domains/tld-specific/at/{domain}/withdraw` |
| `.uk` | Release | `POST /v1/domains/tld-specific/uk/{domain}/release` |

## Related API Reference

- [`POST /v1/domains/tld-specific/eu/{domain_reference}/auth_code/request`](/api-reference#tag/domain_tld_specific/POST/v1/domains/tld-specific/eu/{domain_reference}/auth_code/request)
- [`POST /v1/domains/tld-specific/be/{domain_reference}/auth_code/request`](/api-reference#tag/domain_tld_specific/POST/v1/domains/tld-specific/be/{domain_reference}/auth_code/request)
- [`POST /v1/domains/tld-specific/de/{domain_reference}/transit`](/api-reference#tag/domain_tld_specific/POST/v1/domains/tld-specific/de/{domain_reference}/transit)
- [`POST /v1/domains/tld-specific/at/{domain_reference}/withdraw`](/api-reference#tag/domain_tld_specific/POST/v1/domains/tld-specific/at/{domain_reference}/withdraw)
- [`POST /v1/domains/tld-specific/uk/{domain_reference}/release`](/api-reference#tag/domain_tld_specific/POST/v1/domains/tld-specific/uk/{domain_reference}/release)
