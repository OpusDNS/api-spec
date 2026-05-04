# DNSSEC for zones

OpusDNS can sign your DNS zones with DNSSEC, providing cryptographic
authentication of DNS responses. Zone-level DNSSEC is managed separately from
the domain-level DNSSEC records published at the registry.

## Two levels of DNSSEC

| Level | What it does | API |
| --- | --- | --- |
| **Zone signing** | Signs DNS responses from OpusDNS nameservers. | `POST /v1/dns/{zone_name}/dnssec/enable` |
| **Registry DS records** | Publishes DS records at the parent zone via the domain registrar. | `PUT /v1/domains/{domain_reference}/dnssec` |

When you use OpusDNS nameservers, enabling zone signing also handles the DS
record publication at the registry automatically. You typically only need to
manage registry DS records manually when using external nameservers.

For managing DS records at the registry level, see
[Managing DNSSEC](/products/domains/dnssec).

## Enable DNSSEC on a zone

```bash
curl "$OPUSDNS_API_BASE/v1/dns/example.com/dnssec/enable" \
  --request POST \
  --header "X-Api-Key: $OPUSDNS_API_KEY"
```

This signs the zone and begins serving DNSSEC-authenticated responses. You
can also enable DNSSEC when creating a zone by setting
`"dnssec_status": "enabled"` in the create request.

## Disable DNSSEC on a zone

```bash
curl "$OPUSDNS_API_BASE/v1/dns/example.com/dnssec/disable" \
  --request POST \
  --header "X-Api-Key: $OPUSDNS_API_KEY"
```

This removes zone signing. DNS responses will no longer include DNSSEC
signatures.

## Check DNSSEC status

The `dnssec_status` field on the zone object indicates the current signing
status:

```bash
curl "$OPUSDNS_API_BASE/v1/dns/example.com" \
  --header "X-Api-Key: $OPUSDNS_API_KEY"
```

```json
{
  "dns_zone_id": "zone_01h45ytscbebyvny4gc8cr8ma2",
  "name": "example.com",
  "dnssec_status": "enabled",
  ...
}
```

## Filter zones by DNSSEC status

List all zones with a specific signing status:

```bash
curl --get "$OPUSDNS_API_BASE/v1/dns" \
  --header "X-Api-Key: $OPUSDNS_API_KEY" \
  --data-urlencode "dnssec_status=enabled"
```

The [zones summary](/products/dns/manage-zones#get-zones-summary) endpoint
also provides a breakdown by DNSSEC status.

## Related API Reference

- [`POST /v1/dns/{zone_name}/dnssec/enable`](/api-reference#tag/dns/POST/v1/dns/{zone_name}/dnssec/enable)
- [`POST /v1/dns/{zone_name}/dnssec/disable`](/api-reference#tag/dns/POST/v1/dns/{zone_name}/dnssec/disable)
- [`GET /v1/domains/{domain_reference}/dnssec`](/api-reference#tag/domain/GET/v1/domains/{domain_reference}/dnssec)
- [`PUT /v1/domains/{domain_reference}/dnssec`](/api-reference#tag/domain/PUT/v1/domains/{domain_reference}/dnssec)
