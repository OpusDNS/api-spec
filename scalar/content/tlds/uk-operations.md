# .uk domain operations

`.uk` domains (including `.co.uk`, `.org.uk`, `.me.uk`, `.ltd.uk`, `.plc.uk`,
and `.net.uk`) are managed by [Nominet](https://www.nominet.uk). The `.uk`
namespace uses a tag-based transfer system that differs from the standard EPP
auth code model used by most other TLDs.

## Transfer in

To transfer a `.uk` domain into OpusDNS, the process works differently from
other TLDs. You must first create the transfer request in OpusDNS, then have
the current registrar release the domain to OpusDNS's Nominet tag.

### Step 1: Submit the transfer request

Create the transfer in OpusDNS first so we are ready to receive the domain:

```bash
curl "$OPUSDNS_API_BASE/v1/domains/transfer" \
  --request POST \
  --header "X-Api-Key: $OPUSDNS_API_KEY" \
  --header "Content-Type: application/json" \
  --data '{
    "name": "example.co.uk",
    "auth_code": "AUTH-CODE",
    "contacts": {
      "registrant": "contact_01h45ytscbebyvny4gc8cr8ma2"
    },
    "renewal_mode": "renew",
    "create_zone": true
  }'
```

### Step 2: Request the tag release

Ask the current registrar to release the domain to OpusDNS's Nominet tag. Once
they push the domain to our tag, the transfer completes and the domain appears
in your account.

> **Note:** `.uk` transfers are typically **immediate** — once the domain is
> released to OpusDNS's tag, it moves to your account without a pending period.

## Release (transfer out)

To transfer a `.uk` domain away from OpusDNS, you release it to the receiving
registrar's Nominet tag. This is known as a "push" transfer — the current
registrar initiates the move.

```bash
curl "$OPUSDNS_API_BASE/v1/domains/tld-specific/uk/example.co.uk/release" \
  --request POST \
  --header "X-Api-Key: $OPUSDNS_API_KEY" \
  --header "Content-Type: application/json" \
  --data '{
    "target_registrar_tag": "EXAMPLE-TAG"
  }'
```

### Request fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `target_registrar_tag` | `string` | Yes | The Nominet registrar tag of the receiving registrar (1–16 characters). You must obtain this from the registrar you are transferring to. |

### Response

```json
{
  "name": "example.co.uk",
  "target_registrar_tag": "EXAMPLE-TAG",
  "pending_handshake": false,
  "message": null
}
```

### Handshake process

The release result depends on the receiving registrar's configuration:

| `pending_handshake` | Meaning |
| --- | --- |
| `false` | The transfer completed immediately. The domain is now under the receiving registrar. |
| `true` | The receiving registrar requires a handshake. They have up to **5 days** to accept or reject the transfer. If they do not respond, the transfer is cancelled automatically. |

### Prerequisites

Before releasing a `.uk` domain:

- The domain must not have `transfer_lock` enabled. Unlock it first via
  `PATCH /v1/domains/{domain_reference}` with `"transfer_lock": false`.
- You need the receiving registrar's **Nominet tag** — this is different from an
  auth code. Contact the target registrar to obtain their tag.

## Supported extensions

The following `.uk` extensions are managed by Nominet and support these
operations:

| Extension | Supported |
| --- | --- |
| `.uk` | ✅ |
| `.co.uk` | ✅ |
| `.org.uk` | ✅ |
| `.me.uk` | ✅ |
| `.ltd.uk` | ✅ |
| `.plc.uk` | ✅ |
| `.net.uk` | ✅ |

## Related API Reference

- [`POST /v1/domains/transfer`](/api-reference#tag/domain/POST/v1/domains/transfer)
- [`POST /v1/domains/tld-specific/uk/{domain_reference}/release`](/api-reference#tag/domain_tld_specific/POST/v1/domains/tld-specific/uk/{domain_reference}/release)
