# DNS & infrastructure commands

This page covers the DNS zone, contact, and parking commands available in the
Jobs API.

## DNS zone commands

### dns_zone_create

Create a single DNS zone with optional records:

```json
{
  "type": "dns_zone_create",
  "payload": {
    "name": "example.com",
    "dnssec_status": "enabled",
    "rrsets": [
      {
        "name": "@",
        "type": "A",
        "ttl": 300,
        "records": [{ "rdata": "203.0.113.10" }]
      },
      {
        "name": "www",
        "type": "CNAME",
        "ttl": 300,
        "records": [{ "rdata": "example.com." }]
      }
    ]
  }
}
```

| Field | Required | Default | Description |
| --- | --- | --- | --- |
| `name` | Yes | — | Zone name (typically matches the domain name). |
| `dnssec_status` | No | `disabled` | Enable or disable DNSSEC zone signing. |
| `rrsets` | No | `[]` | Initial resource record sets to create. |

### dns_zone_update

Update an existing DNS zone. This is a full replacement — whatever RRsets you
supply become the zone's RRsets. Records not included are removed:

```json
{
  "type": "dns_zone_update",
  "payload": {
    "name": "example.com",
    "dnssec_status": "enabled",
    "rrsets": [
      {
        "name": "@",
        "type": "A",
        "ttl": 300,
        "records": [{ "rdata": "203.0.113.20" }]
      }
    ]
  }
}
```

<scalar-callout type="warning">
System-managed record types (SOA, DNSKEY, DS) cannot be set via this command.
</scalar-callout>

### dns_zone_create_bulk

Create multiple DNS zones at once:

```json
{
  "type": "dns_zone_create_bulk",
  "payload": {
    "template": {
      "dnssec_status": "enabled",
      "rrsets": [
        {
          "name": "@",
          "type": "A",
          "ttl": 300,
          "records": [{ "rdata": "203.0.113.10" }]
        }
      ]
    },
    "instances": [
      { "name": "example.com" },
      { "name": "example.net" },
      {
        "name": "example.org",
        "rrsets": [
          {
            "name": "@",
            "type": "A",
            "ttl": 300,
            "records": [{ "rdata": "203.0.113.99" }]
          }
        ]
      }
    ]
  }
}
```

The template's RRsets apply to all instances unless overridden. In this
example, `example.org` gets its own A record while the other two zones share
the template's.

### dns_zone_update_bulk

Replace RRsets and zone attributes across multiple zones. This is the bulk
equivalent of `PUT /v1/dns/{zone_name}/rrsets`.

Both `rrsets` and `dnssec_status` are partial-update fields:

| Value | Behavior |
| --- | --- |
| Omitted (both template and instance) | Leave unchanged on the zone. |
| `[]` (rrsets only) | Delete all records. |
| `[...]` or a status value | Replace with the provided value. |

An instance with neither `rrsets` nor `dnssec_status` (after template merge)
is rejected as a no-op.

#### Example: Set records and enable DNSSEC

```json
{
  "type": "dns_zone_update_bulk",
  "payload": {
    "template": {
      "rrsets": [
        {
          "name": "@",
          "type": "A",
          "ttl": 300,
          "records": [{ "rdata": "203.0.113.10" }]
        }
      ],
      "dnssec_status": "enabled"
    },
    "instances": [
      { "name": "example.com" },
      {
        "name": "example.net",
        "rrsets": [
          {
            "name": "@",
            "type": "A",
            "ttl": 300,
            "records": [{ "rdata": "203.0.113.20" }]
          }
        ]
      }
    ]
  }
}
```

#### Example: Toggle DNSSEC without touching records

Omit `rrsets` everywhere to only change DNSSEC status:

```json
{
  "type": "dns_zone_update_bulk",
  "payload": {
    "template": { "dnssec_status": "enabled" },
    "instances": [
      { "name": "example.com" },
      { "name": "example.net" },
      { "name": "example.org" }
    ]
  }
}
```

### dns_zone_patch_rrsets_bulk

Upsert or remove entire RRsets by `(name, type)` across multiple zones. This
is the bulk equivalent of `PATCH /v1/dns/{zone_name}/rrsets`.

Each instance specifies a zone and an array of operations:

- **`upsert`** — create or replace the RRset. Any prior records for that
  `(name, type)` are discarded.
- **`remove`** — delete the entire RRset.

```json
{
  "type": "dns_zone_patch_rrsets_bulk",
  "payload": {
    "instances": [
      {
        "zone_name": "example.com",
        "ops": [
          {
            "op": "upsert",
            "rrset": {
              "name": "www",
              "type": "A",
              "ttl": 300,
              "records": [
                { "rdata": "203.0.113.10" },
                { "rdata": "203.0.113.11" }
              ]
            }
          },
          {
            "op": "remove",
            "rrset": {
              "name": "old",
              "type": "CNAME",
              "ttl": 300,
              "records": []
            }
          }
        ]
      }
    ]
  }
}
```

<scalar-callout type="info">
Up to 100 operations per instance for RRset-level patches.
</scalar-callout>

### dns_zone_patch_records_bulk

Upsert or remove individual `rdata` values within RRsets across multiple
zones. This is the bulk equivalent of `PATCH /v1/dns/{zone_name}/records`.

Unlike the RRset-level patch, this operates on **single records** without
touching siblings:

- **`upsert`** — add or update one rdata value. Creates the RRset if it
  doesn't exist. Other records in the RRset are untouched.
- **`remove`** — remove just one rdata value. Other records in the RRset
  remain.

```json
{
  "type": "dns_zone_patch_records_bulk",
  "payload": {
    "instances": [
      {
        "zone_name": "example.com",
        "ops": [
          {
            "op": "upsert",
            "record": {
              "name": "@",
              "type": "MX",
              "ttl": 300,
              "rdata": "5 new-mail.example.com."
            }
          },
          {
            "op": "remove",
            "record": {
              "name": "@",
              "type": "MX",
              "ttl": 300,
              "rdata": "10 old-mail.example.com."
            }
          }
        ]
      }
    ]
  }
}
```

Note the key difference: RRset patches use `rrset` with a `records[]` array,
while record patches use `record` with a single `rdata` string.

<scalar-callout type="info">
Up to 100 operations per instance for record-level patches.
</scalar-callout>

### Choosing the right DNS command

| Command | Operates on | Use when |
| --- | --- | --- |
| `dns_zone_update_bulk` | Whole zone | Resetting all RRsets or toggling DNSSEC across zones. |
| `dns_zone_patch_rrsets_bulk` | Whole RRsets by `(name, type)` | Replacing all records of a given type at a given name. |
| `dns_zone_patch_records_bulk` | Individual rdata values | Adding or removing a single record without touching siblings. |

**Example scenario:** You're migrating mail to a new provider across 200
domains.

- Use `dns_zone_patch_records_bulk` if you need to add the new MX record
  while keeping the old one temporarily.
- Use `dns_zone_patch_rrsets_bulk` if you want to replace all MX records at
  once.
- Use `dns_zone_update_bulk` if you're rebuilding the entire zone from
  scratch.

## Contact commands

### contact_create

Create a single contact:

```json
{
  "type": "contact_create",
  "payload": {
    "first_name": "Jane",
    "last_name": "Doe",
    "email": "jane@example.com",
    "phone": "+49.30123456",
    "street": "Friedrichstraße 123",
    "city": "Berlin",
    "postal_code": "10117",
    "country": "DE",
    "disclose": true
  }
}
```

### Contact payload fields

| Field | Required | Description |
| --- | --- | --- |
| `first_name` | Yes | First name. |
| `last_name` | Yes | Last name. |
| `email` | Yes | Email address. |
| `phone` | Yes | Phone number (E.164 format). |
| `street` | Yes | Street address. |
| `city` | Yes | City. |
| `postal_code` | Yes | Postal/ZIP code. |
| `country` | Yes | Two-letter country code (ISO 3166-1 alpha-2). |
| `disclose` | Yes | Whether contact information is publicly visible. |
| `org` | No | Organization name. |
| `title` | No | Title (e.g., "Dr.", "Prof."). |
| `state` | No | State or province. |
| `fax` | No | Fax number (E.164 format). |

### contact_create_bulk

Create multiple contacts using the template + instances pattern:

```json
{
  "type": "contact_create_bulk",
  "payload": {
    "template": {
      "country": "DE",
      "city": "Berlin",
      "postal_code": "10117",
      "street": "Friedrichstraße 123",
      "disclose": true
    },
    "instances": [
      {
        "first_name": "Jane",
        "last_name": "Doe",
        "email": "jane@example.com",
        "phone": "+49.30123456"
      },
      {
        "first_name": "John",
        "last_name": "Smith",
        "email": "john@example.com",
        "phone": "+49.30654321"
      }
    ]
  }
}
```

Shared address fields go in the template. Per-contact fields (name, email,
phone) go in each instance.

## Parking commands

Parking commands manage placeholder pages for domains that aren't actively
used. All parking commands are bulk-only.

### parking_create_bulk

Create parking pages for multiple domains:

```json
{
  "type": "parking_create_bulk",
  "payload": {
    "instances": [
      { "name": "parked-domain.com" },
      { "name": "another-parked.net" }
    ]
  }
}
```

### parking_enable_bulk / parking_disable_bulk

Enable or disable parking on multiple domains:

```json
{
  "type": "parking_enable_bulk",
  "payload": {
    "instances": [
      { "name": "parked-domain.com" },
      { "name": "another-parked.net" }
    ]
  }
}
```

```json
{
  "type": "parking_disable_bulk",
  "payload": {
    "instances": [
      { "name": "parked-domain.com" }
    ]
  }
}
```

### parking_delete_bulk

Delete parking pages:

```json
{
  "type": "parking_delete_bulk",
  "payload": {
    "instances": [
      { "name": "parked-domain.com" }
    ]
  }
}
```

## Related pages

- [Jobs overview](/automation/jobs/overview) — concepts, lifecycle, and limits.
- [Domain commands](/automation/jobs/domain-commands) — domain registration,
  update, and transfer commands.
- [Managing batches](/automation/jobs/managing-batches) — monitoring,
  pause/resume, error handling.
