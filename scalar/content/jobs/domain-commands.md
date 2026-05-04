# Domain commands

This page covers the domain-related commands available in the Jobs API:
registering, updating, and transferring domains — both individually and in
bulk.

## domain_create

Register a single domain:

```json
{
  "type": "domain_create",
  "idempotency_key": "reg-example-com-2026",
  "payload": {
    "name": "example.com",
    "contacts": {
      "registrant": "contact_01h45ytscbebyvny4gc8cr8ma2",
      "admin": "contact_01h45ytscbebyvny4gc8cr8ma2",
      "tech": "contact_01h45ytscbebyvny4gc8cr8ma2"
    },
    "nameservers": ["ns1.opusdns.com", "ns2.opusdns.net"],
    "renewal_mode": "renew",
    "period": { "unit": "y", "value": 1 },
    "create_zone": true
  }
}
```

### Payload fields

| Field | Required | Default | Description |
| --- | --- | --- | --- |
| `name` | Yes | — | Domain name to register. |
| `contacts` | Yes | — | Contact handles or contact IDs for registrant, admin, tech, and billing. |
| `period` | Yes | — | Registration period. `unit` is `"y"` (years), `value` is the number of years. |
| `renewal_mode` | Yes | — | How the domain renews: `renew`, `autoexpire`, `autodelete`, or `renewonce`. |
| `nameservers` | No | `null` | Array of nameserver hostnames. |
| `create_zone` | No | `false` | If `true`, automatically create an OpusDNS DNS zone for this domain. |
| `auth_code` | No | `null` | Authorization code (6–32 characters). Used for specific TLDs that require it at registration. |
| `expected_price` | No | `null` | Expected price. If set and the actual price differs, the registration is rejected. |
| `attributes` | No | `null` | TLD-specific registry attributes (keyed by attribute name). |
| `claims_notice_acceptance_hash` | No | `null` | TMCH claims notice hash (for domains under trademark protection). |

### Contacts

The `contacts` field accepts either contact IDs or inline contact handles:

**Using contact IDs** (recommended for bulk operations):

```json
"contacts": {
  "registrant": "contact_01h45ytscbebyvny4gc8cr8ma2",
  "admin": "contact_01h45ytscbebyvny4gc8cr8ma2",
  "tech": "contact_01h45ytscbebyvny4gc8cr8ma2"
}
```

**Using inline contact handles** (for one-off registrations):

```json
"contacts": {
  "registrant": {
    "first_name": "Jane",
    "last_name": "Doe",
    "email": "jane@example.com",
    "phone": "+49.30123456",
    "street": "Friedrichstraße 123",
    "city": "Berlin",
    "postal_code": "10117",
    "country": "DE"
  }
}
```

## domain_create_bulk

Register multiple domains efficiently using the template + instances pattern:

```json
{
  "type": "domain_create_bulk",
  "payload": {
    "template": {
      "contacts": {
        "registrant": "contact_01h45ytscbebyvny4gc8cr8ma2",
        "admin": "contact_01h45ytscbebyvny4gc8cr8ma2",
        "tech": "contact_01h45ytscbebyvny4gc8cr8ma2"
      },
      "nameservers": ["ns1.opusdns.com", "ns2.opusdns.net"],
      "renewal_mode": "renew",
      "period": { "unit": "y", "value": 1 },
      "create_zone": true
    },
    "instances": [
      { "name": "example.com" },
      { "name": "example.net" },
      { "name": "example.org" },
      { "name": "my-brand.de", "period": { "unit": "y", "value": 2 } }
    ]
  }
}
```

The **template** defines shared defaults — contacts, nameservers, renewal
mode, and period apply to every instance. Each **instance** specifies the
domain name and can optionally override any template field.

<scalar-callout type="info">
Up to 1,000 instances per bulk command. Instance-level overrides completely replace the template's setting for that field.
</scalar-callout>

## domain_update

Update settings on a single domain:

```json
{
  "type": "domain_update",
  "payload": {
    "domain_id": "domain_01h45ytscbebyvny4gc8cr8ma2",
    "renewal_mode": "autoexpire",
    "nameservers": ["ns1.newprovider.com", "ns2.newprovider.com"]
  }
}
```

### Payload fields

| Field | Required | Description |
| --- | --- | --- |
| `domain_id` | Yes | The domain to update (TypeID). |
| `contacts` | No | Updated contact handles or IDs. |
| `nameservers` | No | New nameserver list. |
| `renewal_mode` | No | New renewal mode. |
| `statuses` | No | Set the full list of client statuses (replaces existing). |
| `status_changes` | No | Add or remove specific statuses (relative change). |
| `auth_code` | No | Set a new authorization code. |

### Statuses vs. status_changes

<scalar-callout type="danger">
<code>statuses</code> and <code>status_changes</code> are mutually exclusive — use one or the other, never both in the same command.
</scalar-callout>

**`statuses`** — replaces the entire status set:

```json
{
  "type": "domain_update",
  "payload": {
    "domain_id": "domain_01h45ytscbebyvny4gc8cr8ma2",
    "statuses": ["clientTransferProhibited", "clientDeleteProhibited"]
  }
}
```

**`status_changes`** — adds or removes specific statuses without affecting
others:

```json
{
  "type": "domain_update",
  "payload": {
    "domain_id": "domain_01h45ytscbebyvny4gc8cr8ma2",
    "status_changes": {
      "add": ["clientTransferProhibited"],
      "remove": ["clientHold"]
    }
  }
}
```

## domain_update_bulk

Update settings across many domains at once. This is particularly powerful
with `status_changes` in the template:

### Example: Lock transfers across your portfolio

```json
{
  "type": "domain_update_bulk",
  "payload": {
    "template": {
      "status_changes": {
        "add": ["clientTransferProhibited"]
      }
    },
    "instances": [
      { "name": "example.com" },
      { "name": "example.net" },
      { "name": "example.org" }
    ]
  }
}
```

### Example: Bulk update with per-domain overrides

If one domain needs different treatment, its instance can override the
template:

```json
{
  "type": "domain_update_bulk",
  "payload": {
    "template": {
      "status_changes": {
        "add": ["clientTransferProhibited"]
      }
    },
    "instances": [
      { "name": "example.com" },
      { "name": "example.net" },
      {
        "name": "special-case.com",
        "status_changes": {
          "remove": ["clientHold"]
        }
      }
    ]
  }
}
```

In this example, `special-case.com` uses its own `status_changes` (removing
`clientHold`) instead of the template's (adding `clientTransferProhibited`).
An instance-level override **completely replaces** the template's setting for
that field.

### Example: Change nameservers in bulk

```json
{
  "type": "domain_update_bulk",
  "payload": {
    "template": {
      "nameservers": ["ns1.opusdns.com", "ns2.opusdns.net"]
    },
    "instances": [
      { "name": "example.com" },
      { "name": "example.net" },
      { "name": "example.org" }
    ]
  }
}
```

### Instance identification

Each instance can identify the target domain by either `name` or `domain_id`,
but not both:

```json
{ "name": "example.com" }
// or
{ "domain_id": "domain_01h45ytscbebyvny4gc8cr8ma2" }
```

## domain_transfer

Initiate an inbound transfer for a single domain:

```json
{
  "type": "domain_transfer",
  "idempotency_key": "transfer-example-com-2026",
  "payload": {
    "name": "example.com",
    "auth_code": "Xy9!kL2m",
    "contacts": {
      "registrant": "contact_01h45ytscbebyvny4gc8cr8ma2",
      "admin": "contact_01h45ytscbebyvny4gc8cr8ma2",
      "tech": "contact_01h45ytscbebyvny4gc8cr8ma2"
    },
    "renewal_mode": "renew",
    "period": { "unit": "y", "value": 1 },
    "create_zone": true
  }
}
```

### Payload fields

| Field | Required | Description |
| --- | --- | --- |
| `name` | Yes | Domain name to transfer. |
| `auth_code` | Yes | Authorization code from the current registrar (6–32 characters). |
| `contacts` | Yes | Contact handles or IDs. |
| `renewal_mode` | Yes | Renewal mode after transfer. |
| `period` | No | Transfer period. |
| `nameservers` | No | Nameservers to set after transfer completes. |
| `create_zone` | No | If `true`, create a DNS zone automatically. Defaults to `false`. |
| `expected_price` | No | Expected transfer price. Rejects if actual price differs. |
| `attributes` | No | TLD-specific registry attributes. |

## domain_transfer_bulk

Transfer multiple domains using the template + instances pattern:

```json
{
  "type": "domain_transfer_bulk",
  "payload": {
    "template": {
      "contacts": {
        "registrant": "contact_01h45ytscbebyvny4gc8cr8ma2",
        "admin": "contact_01h45ytscbebyvny4gc8cr8ma2",
        "tech": "contact_01h45ytscbebyvny4gc8cr8ma2"
      },
      "renewal_mode": "renew",
      "create_zone": true
    },
    "instances": [
      { "name": "example.com", "auth_code": "Xy9!kL2m" },
      { "name": "example.net", "auth_code": "Ab3$nR7p" },
      { "name": "example.org", "auth_code": "Cd5&hT1q" }
    ]
  }
}
```

Each instance must include its own `auth_code` since authorization codes are
unique per domain. Shared settings like contacts, renewal mode, and zone
creation go in the template.

## Full batch example

Here's a real-world example combining multiple command types in a single
batch:

```bash
curl "$OPUSDNS_API_BASE/v1/jobs" \
  --request POST \
  --header "X-Api-Key: $OPUSDNS_API_KEY" \
  --header "Content-Type: application/json" \
  --data '{
    "label": "Portfolio setup - May 2026",
    "commands": [
      {
        "type": "domain_create_bulk",
        "idempotency_key": "may-2026-registrations",
        "payload": {
          "template": {
            "contacts": {
              "registrant": "contact_01h45ytscbebyvny4gc8cr8ma2"
            },
            "renewal_mode": "renew",
            "period": { "unit": "y", "value": 1 },
            "create_zone": true
          },
          "instances": [
            { "name": "newbrand.com" },
            { "name": "newbrand.net" },
            { "name": "newbrand.de", "period": { "unit": "y", "value": 2 } }
          ]
        }
      },
      {
        "type": "domain_transfer_bulk",
        "payload": {
          "template": {
            "contacts": {
              "registrant": "contact_01h45ytscbebyvny4gc8cr8ma2"
            },
            "renewal_mode": "renew"
          },
          "instances": [
            { "name": "existing-domain.com", "auth_code": "Xy9!kL2m" },
            { "name": "existing-domain.eu", "auth_code": "Mn4@pQ8w" }
          ]
        }
      },
      {
        "type": "domain_update_bulk",
        "payload": {
          "template": {
            "status_changes": {
              "add": ["clientTransferProhibited"]
            }
          },
          "instances": [
            { "name": "protect-this.com" },
            { "name": "protect-that.net" }
          ]
        }
      }
    ]
  }'
```

This single batch registers 3 domains, transfers 2 domains, and locks 2
domains — creating 7 jobs total.

## Related pages

- [Jobs overview](/automation/jobs/overview) — concepts, lifecycle, and limits.
- [DNS & infrastructure commands](/automation/jobs/dns-commands) — DNS zone,
  contact, and parking commands.
- [Managing batches](/automation/jobs/managing-batches) — monitoring,
  pause/resume, error handling.
