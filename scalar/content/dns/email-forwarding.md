# Email forwarding

Email forwarding lets you receive emails at your domain and automatically
forward them to existing mailboxes — without running a mail server. Common
use cases include:

- **Professional email** — use `info@yourdomain.com` instead of a personal Gmail
- **Team distribution** — forward `support@yourdomain.com` to multiple team members
- **Department routing** — separate aliases for sales, billing, and support
- **Domain parking** — catch emails on domains you own but don't actively host

OpusDNS automatically manages the MX and TXT DNS records needed for email
forwarding. These records are marked as protected so they cannot be
accidentally modified.

## Prerequisites

<scalar-callout type="info">
A DNS zone for the hostname must exist on OpusDNS and the hostname must resolve through OpusDNS nameservers. See <a href="/products/dns/manage-zones">Manage zones</a>.
</scalar-callout>

## Set up email forwarding

This example creates email forwarding for `example.com` with two aliases:
`info@example.com` forwards to a personal mailbox, and
`support@example.com` forwards to two team members.

```bash
curl "$OPUSDNS_API_BASE/v1/email-forwards" \
  --request POST \
  --header "X-Api-Key: $OPUSDNS_API_KEY" \
  --header "Content-Type: application/json" \
  --data '{
    "hostname": "example.com",
    "enabled": true,
    "aliases": [
      {
        "alias": "info",
        "forward_to": ["john@gmail.com"]
      },
      {
        "alias": "support",
        "forward_to": ["alice@company.com", "bob@company.com"]
      }
    ]
  }'
```

Setting `enabled: true` activates forwarding immediately and creates the
required MX records. Emails sent to `info@example.com` will start arriving
at `john@gmail.com` as soon as DNS propagates.

### How aliases work

Each alias maps a local address to one or more destination mailboxes:

| Field | Description |
| --- | --- |
| `alias` | The local part before the `@` (e.g., `info` for `info@example.com`). |
| `forward_to` | One or more email addresses that receive the forwarded mail. |

An alias can forward to multiple addresses — every destination receives a
copy of the email.

## Common scenarios

### Add a new alias to an existing forward

After the initial setup, add more aliases as your team grows. You need the
email forward ID from the create response:

```bash
curl "$OPUSDNS_API_BASE/v1/email-forwards/email_forward_01h45ytscbebyvny4gc8cr8ma2/aliases" \
  --request POST \
  --header "X-Api-Key: $OPUSDNS_API_KEY" \
  --header "Content-Type: application/json" \
  --data '{
    "alias": "sales",
    "forward_to": ["sales-team@company.com"]
  }'
```

### Change where an alias forwards to

Update the destination addresses for an existing alias:

```bash
curl "$OPUSDNS_API_BASE/v1/email-forwards/email_forward_01h45ytscbebyvny4gc8cr8ma2/aliases/email_forward_alias_01h45ytscbebyvny4gc8cr8ma2" \
  --request PUT \
  --header "X-Api-Key: $OPUSDNS_API_KEY" \
  --header "Content-Type: application/json" \
  --data '{
    "forward_to": ["new-hire@company.com", "manager@company.com"]
  }'
```

### Remove an alias

```bash
curl "$OPUSDNS_API_BASE/v1/email-forwards/email_forward_01h45ytscbebyvny4gc8cr8ma2/aliases/email_forward_alias_01h45ytscbebyvny4gc8cr8ma2" \
  --request DELETE \
  --header "X-Api-Key: $OPUSDNS_API_KEY"
```

## Pause and resume forwarding

Disabling removes the MX records but keeps your alias configuration intact.
This is useful if you temporarily need to stop forwarding without losing
your setup:

```bash
curl "$OPUSDNS_API_BASE/v1/email-forwards/email_forward_01h45ytscbebyvny4gc8cr8ma2/disable" \
  --request PATCH \
  --header "X-Api-Key: $OPUSDNS_API_KEY"
```

Re-enable when ready:

```bash
curl "$OPUSDNS_API_BASE/v1/email-forwards/email_forward_01h45ytscbebyvny4gc8cr8ma2/enable" \
  --request PATCH \
  --header "X-Api-Key: $OPUSDNS_API_KEY"
```

## Remove email forwarding

Delete the entire configuration and all aliases:

```bash
curl "$OPUSDNS_API_BASE/v1/email-forwards/email_forward_01h45ytscbebyvny4gc8cr8ma2" \
  --request DELETE \
  --header "X-Api-Key: $OPUSDNS_API_KEY"
```

## Monitoring delivery

OpusDNS tracks every forwarded email. See
[Metrics & logs](/products/email-forwarding/metrics) for a full guide on
delivery rates, per-alias breakdowns, troubleshooting bounces, and
forwarding logs.

## Related API Reference

- [`POST /v1/email-forwards`](/api-reference#tag/email_forward/POST/v1/email-forwards)
- [`GET /v1/email-forwards`](/api-reference#tag/email_forward/GET/v1/email-forwards)
- [`GET /v1/email-forwards/{email_forward_id}`](/api-reference#tag/email_forward/GET/v1/email-forwards/{email_forward_id})
- [`GET /v1/email-forwards/{email_forward_id}/metrics`](/api-reference#tag/email_forward/GET/v1/email-forwards/{email_forward_id}/metrics)
