# .uk domain operations

`.uk` domains (including `.co.uk`, `.org.uk`, `.me.uk`, `.ltd.uk`, `.plc.uk`,
and `.net.uk`) are managed by [Nominet](https://www.nominet.uk). The `.uk`
namespace uses a tag-based transfer system that differs from the standard EPP
auth code model used by most other TLDs.

<scalar-callout type="info">
OpusDNS's Nominet tag is <strong>OPUSDNS</strong>.
</scalar-callout>

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
    "contacts": {
      "registrant": "contact_01h45ytscbebyvny4gc8cr8ma2"
    },
    "renewal_mode": "renew",
    "create_zone": true
  }'
```

<scalar-callout type="info">
For <code>.uk</code> domains no auth code is needed because Nominet uses a tag-based transfer system.
</scalar-callout>

### Step 2: Request the tag release

Ask the current registrar to release the domain to OpusDNS's Nominet tag,
**`OPUSDNS`**. Once they push the domain to our tag, the transfer completes and
the domain appears in your account.

> **Note:** `.uk` transfers are typically **immediate** — once the domain is
> released to OpusDNS's tag, it moves to your account without a pending period.

## Transfer out

To transfer a `.uk` domain away from OpusDNS, the domain must be released to the
receiving registrar's Nominet tag. This transfer-out release is not currently
exposed through the public API.

<scalar-callout type="info">
Use the dashboard or contact support when you need to push a <code>.uk</code> domain to another registrar. You will need the receiving registrar's Nominet tag.
</scalar-callout>

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
