# Register a domain

This guide walks you through registering a new domain with the OpusDNS API,
from checking availability to confirming the registration is complete.

## Flow overview

1. Check whether the domain is available.
2. Prepare contacts for the required roles.
3. Check TLD requirements (optional but recommended).
4. Register the domain.
5. Confirm the result and monitor events.

## 1. Check availability

Before submitting a registration, check one or more domains with
`POST /v1/domains/check`. You can check multiple domains in a single request:

```bash
curl "$OPUSDNS_API_BASE/v1/domains/check" \
  --request POST \
  --header "X-Api-Key: $OPUSDNS_API_KEY" \
  --header "Content-Type: application/json" \
  --data '{
    "domains": ["example.com", "example.net", "example.de"]
  }'
```

The response returns one result per domain with an availability status:

```json
{
  "results": [
    {
      "domain": "example.com",
      "available": true,
      "status": "available",
      "is_premium": false
    },
    {
      "domain": "example.net",
      "available": false,
      "status": "unavailable",
      "is_premium": false
    }
  ]
}
```

The `is_premium` flag indicates whether the domain carries premium pricing. When `true`, a `premium_pricing` object is included with prices per action — see [Premium domains](/products/domains/premium) for details.

### Availability statuses

| Status | Meaning |
| --- | --- |
| `available` | The domain can be registered immediately. |
| `unavailable` | The domain is already registered and cannot be registered. |
| `market_available` | The domain is available through an aftermarket or secondary market. |
| `tmch_claim` | The domain matches a trademark in the Trademark Clearinghouse. Registration requires a claims notice acceptance. |
| `error` | The check could not be completed — for example, the TLD is not supported. |

Continue only when the status is `available` (or `tmch_claim` if you intend to
handle claims).

## 2. Prepare contacts

Domain registrations require contact data. Contacts represent the people or
organizations responsible for the domain.

### Contact roles

| Role | Purpose | Required? |
| --- | --- | --- |
| `registrant` | Legal domain holder | Always required |
| `admin` | Administrative contact | Required by most TLDs |
| `tech` | Technical contact | Required by most TLDs |
| `billing` | Billing contact | Required by some TLDs |

<scalar-callout type="info">
Check the <a href="/products/tlds/specifications">TLD specifications</a> to see which contact roles a specific TLD requires.
</scalar-callout>

### Create a contact

If you do not have contacts yet, create them with `POST /v1/contacts`:

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

The response includes a `contact_id` that you use in the registration request.
You can reuse the same contact for multiple roles if appropriate.

### Registry-specific attributes

Some TLDs require additional contact attributes — for example, `.us` requires a
nexus category and application purpose, `.de` may require specific general
request fields. See [Registry-specific attributes](/products/domains/registry-attributes)
for details on creating and linking attribute sets.

## 3. Check TLD requirements (recommended)

Before registering, query the TLD specification to understand any specific
requirements:

```bash
curl "$OPUSDNS_API_BASE/v1/tlds/com" \
  --header "X-Api-Key: $OPUSDNS_API_KEY"
```

This tells you:

- Which contact roles are required
- Allowed registration periods (minimum and maximum)
- Nameserver requirements (minimum and maximum count)
- Whether DNSSEC is supported
- Whether registry-specific attributes are needed

## 4. Register the domain

Register the domain with `POST /v1/domains`:

```bash
curl "$OPUSDNS_API_BASE/v1/domains" \
  --request POST \
  --header "X-Api-Key: $OPUSDNS_API_KEY" \
  --header "Content-Type: application/json" \
  --data '{
    "name": "example.com",
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
| `name` | Yes | The fully qualified domain name to register (e.g., `example.com`). |
| `contacts` | Yes | Contact IDs keyed by role. At minimum, a `registrant` is always required. |
| `renewal_mode` | Yes | `"renew"` for automatic renewal or `"expire"` to let the domain expire. |
| `period` | Yes | Registration length. Uses `unit` (`y` for years, `m` for months, `d` for days) and `value`. |
| `nameservers` | No | Array of nameserver objects with `hostname`. If omitted, the domain is registered without nameservers. See [Using OpusDNS Nameservers](/products/domains/nameservers) for the OpusDNS nameserver hostnames. |
| `create_zone` | No | Set to `true` to automatically provision a DNS zone on OpusDNS nameservers. |
| `expected_price` | No | Price confirmation for [premium domains](/products/domains/premium). |
| `attributes` | No | [Registry-specific attributes](/products/domains/registry-attributes) required by certain TLDs. |
| `claims_notice_acceptance_hash` | No | Required when registering a domain with a `tmch_claim` status during a claims phase. |

### DNS zone and nameserver behavior

<scalar-callout type="info">
The <code>create_zone</code> and <code>nameservers</code> fields are independent — each triggers a separate post-registration job. See <a href="/products/domains/nameservers">Using OpusDNS Nameservers</a> for the full breakdown and when to use each option.
</scalar-callout>

### Trademark Claims (TMCH)

If the availability check returned `tmch_claim`, the domain matches a
trademark in the Trademark Clearinghouse. See
[Trademarked Domains](/products/domains/trademarked-domains) for the full
claims notice workflow.

## 5. Confirm the result

The registration returns a `DomainResponse` with the full domain details:

```json
{
  "domain_id": "dom_01h45ytscbebyvny4gc8cr8ma2",
  "name": "example.com",
  "sld": "example",
  "tld": "com",
  "roid": "12345678_DOMAIN_COM-VRSN",
  "renewal_mode": "renew",
  "transfer_lock": false,
  "is_premium": false,
  "registered_on": "2026-05-04T10:30:00Z",
  "expires_on": "2027-05-04T10:30:00Z",
  "nameservers": [
    { "hostname": "ns1.example.net" },
    { "hostname": "ns2.example.net" }
  ],
  "contacts": {
    "registrant": "contact_01h45ytscbebyvny4gc8cr8ma2",
    "admin": "contact_01h45ytscbebyvny4gc8cr8ma2",
    "tech": "contact_01h45ytscbebyvny4gc8cr8ma2",
    "billing": "contact_01h45ytscbebyvny4gc8cr8ma2"
  },
  "registry_statuses": ["ok"]
}
```

You can retrieve the domain at any time by name or ID:

```bash
curl "$OPUSDNS_API_BASE/v1/domains/example.com" \
  --header "X-Api-Key: $OPUSDNS_API_KEY"
```

### Monitor registration events

Registration may trigger asynchronous events. Poll the events endpoint to track
the outcome:

```bash
curl --get "$OPUSDNS_API_BASE/v1/events" \
  --header "X-Api-Key: $OPUSDNS_API_KEY" \
  --data-urlencode "object_type=DOMAIN" \
  --data-urlencode "type=REGISTRATION"
```

See the [Events overview](/products/events/overview) for details on event types and
acknowledgment.

## Common scenarios

### Register with OpusDNS nameservers

The simplest approach — let OpusDNS handle DNS:

```bash
curl "$OPUSDNS_API_BASE/v1/domains" \
  --request POST \
  --header "X-Api-Key: $OPUSDNS_API_KEY" \
  --header "Content-Type: application/json" \
  --data '{
    "name": "example.com",
    "contacts": {
      "registrant": "contact_01h45ytscbebyvny4gc8cr8ma2"
    },
    "renewal_mode": "renew",
    "period": { "unit": "y", "value": 1 },
    "nameservers": [
      { "hostname": "ns1.opusdns.com" },
      { "hostname": "ns2.opusdns.net" }
    ],
    "create_zone": true
  }'
```

### Register with external nameservers

Point to your own DNS infrastructure:

```bash
curl "$OPUSDNS_API_BASE/v1/domains" \
  --request POST \
  --header "X-Api-Key: $OPUSDNS_API_KEY" \
  --header "Content-Type: application/json" \
  --data '{
    "name": "example.com",
    "contacts": {
      "registrant": "contact_01h45ytscbebyvny4gc8cr8ma2"
    },
    "renewal_mode": "renew",
    "period": { "unit": "y", "value": 1 },
    "nameservers": [
      { "hostname": "ns1.yourdns.com" },
      { "hostname": "ns2.yourdns.com" }
    ]
  }'
```

### Register without automatic renewal

Use `"expire"` if you do not want the domain to auto-renew:

```bash
curl "$OPUSDNS_API_BASE/v1/domains" \
  --request POST \
  --header "X-Api-Key: $OPUSDNS_API_KEY" \
  --header "Content-Type: application/json" \
  --data '{
    "name": "example.com",
    "contacts": {
      "registrant": "contact_01h45ytscbebyvny4gc8cr8ma2"
    },
    "renewal_mode": "expire",
    "period": { "unit": "y", "value": 2 }
  }'
```

You can always change the renewal mode later. See [Manage a domain](/products/domains/manage).

## Next steps

- [Manage a domain](/products/domains/manage) — update nameservers, contacts, and settings
- [Premium domains](/products/domains/premium) — handling premium-priced registrations
- [Registry-specific attributes](/products/domains/registry-attributes) — additional data
  required by certain TLDs
- [Managing DNSSEC](/products/domains/dnssec) — enable DNSSEC after registration

## Related API Reference

- [`POST /v1/domains/check`](/api-reference#tag/domain/POST/v1/domains/check)
- [`POST /v1/domains`](/api-reference#tag/domain/POST/v1/domains)
- [`POST /v1/contacts`](/api-reference#tag/contact/POST/v1/contacts)
- [`GET /v1/domains/{domain_reference}`](/api-reference#tag/domain/GET/v1/domains/{domain_reference})
- [`GET /v1/tlds/{tld}`](/api-reference#tag/tld/GET/v1/tlds/{tld})
