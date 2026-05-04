# Manage zones

A DNS zone is the authoritative container for all DNS records of a domain. You
can create zones independently or have them created automatically during
domain registration by setting `create_zone: true`.

## Create a zone

```bash
curl "$OPUSDNS_API_BASE/v1/dns" \
  --request POST \
  --header "X-Api-Key: $OPUSDNS_API_KEY" \
  --header "Content-Type: application/json" \
  --data '{
    "name": "example.com"
  }'
```

### Request fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `string` | Yes | The zone name (e.g., `example.com`). |
| `rrsets` | `array` | No | Initial RRsets to create with the zone. |
| `dnssec_status` | `string` | No | `enabled` or `disabled` (default: `disabled`). |

### Create with initial records

You can provision a zone with records in a single request:

```bash
curl "$OPUSDNS_API_BASE/v1/dns" \
  --request POST \
  --header "X-Api-Key: $OPUSDNS_API_KEY" \
  --header "Content-Type: application/json" \
  --data '{
    "name": "example.com",
    "dnssec_status": "enabled",
    "rrsets": [
      {
        "name": "example.com.",
        "type": "A",
        "ttl": 3600,
        "records": [{ "rdata": "93.184.216.34" }]
      },
      {
        "name": "www.example.com.",
        "type": "CNAME",
        "ttl": 3600,
        "records": [{ "rdata": "example.com." }]
      },
      {
        "name": "example.com.",
        "type": "MX",
        "ttl": 3600,
        "records": [
          { "rdata": "10 mail.example.com." },
          { "rdata": "20 mail2.example.com." }
        ]
      }
    ]
  }'
```

### Automatic zone creation

When registering or transferring a domain, you can set `create_zone: true` in
the request body. This creates a DNS zone for the domain on the OpusDNS
nameserver infrastructure. Note that `create_zone` and setting `nameservers`
are independent operations — see
[Register a domain](/products/domains/register) for details.

## List zones

Retrieve a paginated list of zones:

```bash
curl "$OPUSDNS_API_BASE/v1/dns?page=1&page_size=25" \
  --header "X-Api-Key: $OPUSDNS_API_KEY"
```

### Filter and sort options

| Parameter | Description |
| --- | --- |
| `name` | Filter by exact zone name. |
| `search` | Search zones by name (partial match). |
| `suffix` | Filter by TLD suffix (e.g., `com`, `de`). |
| `dnssec_status` | Filter by DNSSEC status: `enabled` or `disabled`. |
| `tag_ids` | Filter by tag IDs (comma-separated). |
| `tag_mode` | Tag matching mode when filtering by multiple tags. |
| `created_after` | Zones created after this date. |
| `created_before` | Zones created before this date. |
| `updated_after` | Zones updated after this date. |
| `updated_before` | Zones updated before this date. |
| `sort_by` | Sort field: `name`, `created_on`, `updated_on`, or `dnssec_status`. |
| `sort_order` | Sort direction: `asc` or `desc`. |
| `include` | Include additional data: `tags`. |

Example — list all DNSSEC-enabled `.de` zones:

```bash
curl --get "$OPUSDNS_API_BASE/v1/dns" \
  --header "X-Api-Key: $OPUSDNS_API_KEY" \
  --data-urlencode "suffix=de" \
  --data-urlencode "dnssec_status=enabled" \
  --data-urlencode "sort_by=name" \
  --data-urlencode "sort_order=asc"
```

## Get a zone

Retrieve a single zone with all its records:

```bash
curl "$OPUSDNS_API_BASE/v1/dns/example.com" \
  --header "X-Api-Key: $OPUSDNS_API_KEY"
```

To include tags:

```bash
curl "$OPUSDNS_API_BASE/v1/dns/example.com?include=tags" \
  --header "X-Api-Key: $OPUSDNS_API_KEY"
```

## Get zones summary

Get aggregate statistics about your zones:

```bash
curl "$OPUSDNS_API_BASE/v1/dns/summary" \
  --header "X-Api-Key: $OPUSDNS_API_KEY"
```

Returns the total number of zones and a breakdown by DNSSEC status:

```json
{
  "total_zones": 142,
  "zones_by_dnssec": {
    "enabled": 89,
    "disabled": 53
  }
}
```

## Delete a zone

Remove a zone and all its records:

```bash
curl "$OPUSDNS_API_BASE/v1/dns/example.com" \
  --request DELETE \
  --header "X-Api-Key: $OPUSDNS_API_KEY"
```

<scalar-callout type="danger">
Deleting a zone removes all DNS records. This does not affect the domain registration itself — the domain will continue to exist but will no longer resolve through OpusDNS nameservers.
</scalar-callout>

## Related API Reference

- [`GET /v1/dns`](/api-reference#tag/dns/GET/v1/dns)
- [`POST /v1/dns`](/api-reference#tag/dns/POST/v1/dns)
- [`GET /v1/dns/{zone_name}`](/api-reference#tag/dns/GET/v1/dns/{zone_name})
- [`GET /v1/dns/summary`](/api-reference#tag/dns/GET/v1/dns/summary)
- [`DELETE /v1/dns/{zone_name}`](/api-reference#tag/dns/DELETE/v1/dns/{zone_name})
