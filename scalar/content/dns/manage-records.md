# Manage DNS records

OpusDNS provides two approaches for modifying DNS records within a zone:
**RRset-level** operations that manage entire record sets at once, and
**record-level** operations that target individual records within an RRset.

## Concepts

An **RRset** (Resource Record Set) is a group of DNS records that share the
same name and type. For example, two A records for `example.com.` form a
single RRset.

A **record** is a single entry within an RRset, identified by its `rdata`
value.

## RRset-level operations

Use `PATCH /v1/dns/{zone_name}/rrsets` to add, replace, or remove entire
RRsets. Each operation specifies an `op` (`upsert` or `remove`) and the full
RRset definition.

### Upsert an RRset

Upserting creates the RRset if it does not exist, or replaces it entirely if
it does:

```bash
curl "$OPUSDNS_API_BASE/v1/dns/example.com/rrsets" \
  --request PATCH \
  --header "X-Api-Key: $OPUSDNS_API_KEY" \
  --header "Content-Type: application/json" \
  --data '{
    "ops": [
      {
        "op": "upsert",
        "rrset": {
          "name": "example.com.",
          "type": "A",
          "ttl": 3600,
          "records": [
            { "rdata": "93.184.216.34" },
            { "rdata": "93.184.216.35" }
          ]
        }
      }
    ]
  }'
```

### Remove an RRset

Removes the entire RRset (all records of that name and type):

```bash
curl "$OPUSDNS_API_BASE/v1/dns/example.com/rrsets" \
  --request PATCH \
  --header "X-Api-Key: $OPUSDNS_API_KEY" \
  --header "Content-Type: application/json" \
  --data '{
    "ops": [
      {
        "op": "remove",
        "rrset": {
          "name": "staging.example.com.",
          "type": "A",
          "ttl": 3600,
          "records": []
        }
      }
    ]
  }'
```

### Multiple operations in one request

You can combine multiple upsert and remove operations:

```bash
curl "$OPUSDNS_API_BASE/v1/dns/example.com/rrsets" \
  --request PATCH \
  --header "X-Api-Key: $OPUSDNS_API_KEY" \
  --header "Content-Type: application/json" \
  --data '{
    "ops": [
      {
        "op": "upsert",
        "rrset": {
          "name": "example.com.",
          "type": "MX",
          "ttl": 3600,
          "records": [
            { "rdata": "10 mail.example.com." },
            { "rdata": "20 mail2.example.com." }
          ]
        }
      },
      {
        "op": "remove",
        "rrset": {
          "name": "old.example.com.",
          "type": "CNAME",
          "ttl": 3600,
          "records": []
        }
      }
    ]
  }'
```

## Record-level operations

Use `PATCH /v1/dns/{zone_name}/records` to add or remove individual records
without replacing the entire RRset. Each operation targets a single record
identified by name, type, and rdata.

### Add a single record

```bash
curl "$OPUSDNS_API_BASE/v1/dns/example.com/records" \
  --request PATCH \
  --header "X-Api-Key: $OPUSDNS_API_KEY" \
  --header "Content-Type: application/json" \
  --data '{
    "ops": [
      {
        "op": "upsert",
        "record": {
          "name": "example.com.",
          "type": "A",
          "ttl": 3600,
          "rdata": "93.184.216.36"
        }
      }
    ]
  }'
```

This adds the record to the existing A RRset for `example.com.` without
affecting other records in the set.

### Remove a single record

```bash
curl "$OPUSDNS_API_BASE/v1/dns/example.com/records" \
  --request PATCH \
  --header "X-Api-Key: $OPUSDNS_API_KEY" \
  --header "Content-Type: application/json" \
  --data '{
    "ops": [
      {
        "op": "remove",
        "record": {
          "name": "example.com.",
          "type": "A",
          "ttl": 3600,
          "rdata": "93.184.216.36"
        }
      }
    ]
  }'
```

## Full zone replacement

Use `PUT /v1/dns/{zone_name}/rrsets` to replace all non-protected RRsets in a
zone at once. This is useful for syncing zone data from an external source.

```bash
curl "$OPUSDNS_API_BASE/v1/dns/example.com/rrsets" \
  --request PUT \
  --header "X-Api-Key: $OPUSDNS_API_KEY" \
  --header "Content-Type: application/json" \
  --data '{
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
      }
    ]
  }'
```

<scalar-callout type="danger">
This replaces all modifiable RRsets. Any existing RRsets not included in the request body will be removed. Protected records (SOA, NS) are not affected.
</scalar-callout>

## Common examples

### Add an A record

```json
{
  "ops": [{
    "op": "upsert",
    "record": { "name": "app.example.com.", "type": "A", "ttl": 300, "rdata": "10.0.1.1" }
  }]
}
```

### Add MX records

```json
{
  "ops": [{
    "op": "upsert",
    "rrset": {
      "name": "example.com.", "type": "MX", "ttl": 3600,
      "records": [
        { "rdata": "10 mail.example.com." },
        { "rdata": "20 backup-mail.example.com." }
      ]
    }
  }]
}
```

### Add a CNAME record

```json
{
  "ops": [{
    "op": "upsert",
    "record": { "name": "www.example.com.", "type": "CNAME", "ttl": 3600, "rdata": "example.com." }
  }]
}
```

### Add a TXT record (SPF)

```json
{
  "ops": [{
    "op": "upsert",
    "record": { "name": "example.com.", "type": "TXT", "ttl": 3600, "rdata": "\"v=spf1 include:_spf.google.com ~all\"" }
  }]
}
```

### Add a SRV record

```json
{
  "ops": [{
    "op": "upsert",
    "record": { "name": "_sip._tcp.example.com.", "type": "SRV", "ttl": 3600, "rdata": "10 5 5060 sip.example.com." }
  }]
}
```

## Protected records

Certain records are system-managed and cannot be modified:

- **SOA** and **NS** records at the zone apex are managed by OpusDNS.
- Records created by **email forwarding** or **domain forwarding** are
  managed through their respective APIs.

Attempting to modify a protected record returns an error. See
[the zone object](/products/dns/zone-object#protected-records) for the full
list of protection reasons.

## Choosing an approach

| Scenario | Recommended approach |
| --- | --- |
| Add or remove a single record | Record-level `PATCH .../records` |
| Replace all records of a name+type | RRset-level `PATCH .../rrsets` with `upsert` |
| Sync entire zone from external source | `PUT .../rrsets` (full replacement) |
| Batch multiple changes atomically | RRset-level `PATCH .../rrsets` with multiple ops |

## Related API Reference

- [`PATCH /v1/dns/{zone_name}/records`](/api-reference#tag/dns/PATCH/v1/dns/{zone_name}/records)
- [`PATCH /v1/dns/{zone_name}/rrsets`](/api-reference#tag/dns/PATCH/v1/dns/{zone_name}/rrsets)
- [`PUT /v1/dns/{zone_name}/rrsets`](/api-reference#tag/dns/PUT/v1/dns/{zone_name}/rrsets)
