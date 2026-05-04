# Transfer a domain

This guide walks you through transferring a domain to OpusDNS from another
registrar, including preparation, monitoring, and handling edge cases.

## Flow overview

1. Prepare the domain at the current registrar (unlock, get auth code).
2. Create or select contacts.
3. Start the transfer with `POST /v1/domains/transfer`.
4. Monitor the transfer status.
5. Handle completion or cancel if needed.

## Before you begin

Transferring a domain involves coordination between the losing registrar (where
the domain currently lives) and OpusDNS (the gaining registrar). A few things
must be true before you can start:

- The domain must be **unlocked** at the current registrar (no `clientTransferProhibited` status).
- You need the **auth code** (also called EPP code or transfer key) from the current registrar.
- The domain must have been registered for at least **60 days** (ICANN policy for most gTLDs).
- The domain must not have been transferred within the last **60 days**.
- The domain must not be in a **redemption** or **pending delete** state.

<scalar-callout type="info">
Transfer policies vary by TLD. Some ccTLDs (country-code domains) have different requirements. Check the <a href="/products/tlds/specifications">TLD specifications</a> for specifics.
</scalar-callout>

## 1. Collect the auth code

Contact your current registrar to obtain the domain's authorization code. This
code proves you have the right to transfer the domain.

- Most registrars provide this through their control panel or support team.
- Auth codes typically expire after a set period (often 5–14 days).
- Some TLDs use alternative transfer mechanisms — see
  [.uk operations](/products/tld-operations/uk) for `.uk` releases
  and [.eu operations](/products/tld-operations/eu) / [.be operations](/products/tld-operations/be) for auth code requests.

## 2. Prepare contacts

Like registrations, transfers require `contacts` and `renewal_mode`. You can
reuse existing contacts or create new ones with `POST /v1/contacts`.

```bash
curl "$OPUSDNS_API_BASE/v1/contacts" \
  --request POST \
  --header "X-Api-Key: $OPUSDNS_API_KEY" \
  --header "Content-Type: application/json" \
  --data '{
    "first_name": "Jane",
    "last_name": "Smith",
    "email": "jane@example.com",
    "phone": "+49.1234567890",
    "street": "Musterstraße 1",
    "city": "Berlin",
    "postal_code": "10115",
    "country": "DE",
    "org": "Example GmbH"
  }'
```

<scalar-callout type="info">
Check which contact roles the TLD requires before submitting the transfer. See <a href="/products/tlds/specifications">TLD specifications</a>.
</scalar-callout>

## 3. Start the transfer

Use `POST /v1/domains/transfer` to initiate the inbound transfer:

```bash
curl "$OPUSDNS_API_BASE/v1/domains/transfer" \
  --request POST \
  --header "X-Api-Key: $OPUSDNS_API_KEY" \
  --header "Content-Type: application/json" \
  --data '{
    "name": "example.com",
    "auth_code": "xK9#mP2$vL5nQ8wR",
    "contacts": {
      "registrant": "contact_01h45ytscbebyvny4gc8cr8ma2",
      "admin": "contact_01h45ytscbebyvny4gc8cr8ma2",
      "tech": "contact_01h45ytscbebyvny4gc8cr8ma2",
      "billing": "contact_01h45ytscbebyvny4gc8cr8ma2"
    },
    "renewal_mode": "renew",
    "period": {
      "unit": "y",
      "value": 1
    },
    "nameservers": [
      { "hostname": "ns1.example.net" },
      { "hostname": "ns2.example.net" }
    ],
    "create_zone": true
  }'
```

### Request fields

| Field | Required | Description |
| --- | --- | --- |
| `name` | Yes | The fully qualified domain name to transfer (e.g., `example.com`). |
| `auth_code` | Yes | The authorization code from the current registrar. |
| `contacts` | Yes | Contact IDs keyed by role. At minimum, a `registrant` is always required. |
| `renewal_mode` | Yes | `"renew"` for automatic renewal or `"expire"` to let the domain expire. |
| `period` | No | Additional registration period added on transfer completion. If omitted, the registry default policy applies. |
| `nameservers` | No | Nameservers to set after transfer completes. If omitted, the existing nameservers from the previous registrar are imported. See [Nameservers](/products/domains/nameservers) for the OpusDNS nameserver hostnames. |
| `create_zone` | No | Set to `true` to provision a DNS zone on OpusDNS nameservers after transfer. |
| `expected_price` | No | Price confirmation for [premium domains](/products/domains/premium). |
| `attributes` | No | [Registry-specific attributes](/products/domains/registry-attributes) required by certain TLDs. |

### Registration period behavior

The `period` field in transfer requests works differently from registrations:

- **Provided:** The specified period is added to the domain's existing
  expiry date upon transfer completion. Most gTLDs add 1 year by default.
- **Omitted:** The registry's default transfer policy applies. For most gTLDs,
  this adds 1 year to the current expiry.

## 4. Monitor the transfer

The initial response is a `DomainResponse` with a `pendingTransfer` status.
Transfers do not complete instantly — they require registry processing and
potentially approval from the losing registrar.

### Check the transfer status

Poll the domain to see the current state:

```bash
curl "$OPUSDNS_API_BASE/v1/domains/example.com" \
  --header "X-Api-Key: $OPUSDNS_API_KEY"
```

### Transfer timeline

| Phase | Duration | What happens |
| --- | --- | --- |
| Initiated | Immediate | OpusDNS sends the transfer request to the registry. |
| Pending | 1–5 days | The losing registrar can approve or reject. If no action, auto-approval kicks in (for most gTLDs). |
| Completed | After approval | The domain moves to OpusDNS. Status changes to `ok`. |
| Failed | Varies | Auth code invalid, domain locked, or losing registrar rejected. |

<scalar-callout type="success">
Some TLDs complete the transfer instantly without a pending period. For example, <strong>.de domains</strong> are transferred immediately — once the transfer request is submitted with a valid auth code, the domain moves to your account right away with no approval wait time.
</scalar-callout>

### Monitor via events

You can also track transfer progress through the events system:

```bash
curl --get "$OPUSDNS_API_BASE/v1/events" \
  --header "X-Api-Key: $OPUSDNS_API_KEY" \
  --data-urlencode "object_type=DOMAIN" \
  --data-urlencode "type=TRANSFER"
```

Events will notify you when the transfer succeeds or fails. See the
[Events overview](/products/events/overview) for details.

## 5. Cancel if needed

If a transfer must be stopped while it is still pending, use
`DELETE /v1/domains/{domain_reference}/transfer`:

```bash
curl "$OPUSDNS_API_BASE/v1/domains/example.com/transfer" \
  --request DELETE \
  --header "X-Api-Key: $OPUSDNS_API_KEY"
```

This cancels the in-progress transfer and removes the domain object from your
account. Cancellation is only possible while the transfer is in `pendingTransfer`
status — once the registry completes the transfer, it cannot be reversed through
the API.

## What happens after a successful transfer

Once the transfer completes:

- The domain no longer has status `pendingTransfer` — it transitions to its normal state.
- The expiry date is extended by the transfer period (typically 1 year).
- Contacts are set to those provided in the transfer request.
- Nameservers are updated if provided, otherwise the existing nameservers are imported from the previous registrar.
- A DNS zone is created if `create_zone` was set to `true`.
- A transfer event is created (check `/v1/events`).

## Troubleshooting

### Common transfer failures

| Issue | Cause | Resolution |
| --- | --- | --- |
| Invalid auth code | The code is wrong or has expired. | Get a fresh auth code from the current registrar. |
| Domain is locked | `clientTransferProhibited` is set at the losing registrar. | Ask the current registrar to unlock the domain. |
| Transfer rejected | The losing registrar or registrant rejected the transfer. | Confirm consent with the domain owner and retry. |
| Domain too new | The domain was registered less than 60 days ago. | Wait until the 60-day period has passed. |
| Recent transfer | The domain was transferred within the last 60 days. | Wait until 60 days have passed since the last transfer. |

### TLD-specific transfer mechanisms

Not all TLDs follow the standard auth-code-based transfer process:

- **.uk domains** require a registrar tag change (release). See [.uk operations](/products/tld-operations/uk).
- **.eu / .be domains** have specific auth code request endpoints. See [.eu operations](/products/tld-operations/eu) and [.be operations](/products/tld-operations/be).

## Next steps

- [Manage a domain](/products/domains/manage) — update settings after transfer
- [Managing DNSSEC](/products/domains/dnssec) — configure DNSSEC on your transferred domain
- [Events overview](/products/events/overview) — track transfer events

## Related API Reference

- [`POST /v1/domains/transfer`](/api-reference#tag/domain/POST/v1/domains/transfer)
- [`GET /v1/domains/{domain_reference}`](/api-reference#tag/domain/GET/v1/domains/{domain_reference})
- [`DELETE /v1/domains/{domain_reference}/transfer`](/api-reference#tag/domain/DELETE/v1/domains/{domain_reference}/transfer)
- [`POST /v1/contacts`](/api-reference#tag/contact/POST/v1/contacts)
