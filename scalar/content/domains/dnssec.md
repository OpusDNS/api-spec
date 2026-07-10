# Managing DNSSEC

DNSSEC (Domain Name System Security Extensions) adds a layer of trust to DNS
responses by cryptographically signing records. The OpusDNS API lets you manage
DNSSEC data for your domains.

## Check DNSSEC status

Retrieve the current DNSSEC records for a domain:

```bash
curl "$OPUSDNS_API_BASE/v1/domains/example.com/dnssec" \
  --header "X-Api-Key: $OPUSDNS_API_KEY"
```

The response returns an array of DNSSEC data records (DS or KEY records)
currently published at the registry.

## Enable DNSSEC

If your domain's TLD supports DNSSEC, enable it with:

```bash
curl "$OPUSDNS_API_BASE/v1/domains/example.com/dnssec/enable" \
  --request POST \
  --header "X-Api-Key: $OPUSDNS_API_KEY"
```

This activates DNSSEC signing for the domain. The API will return an error if
the TLD does not support DNSSEC or if DNSSEC is already enabled.

## Disable DNSSEC

To remove DNSSEC protection from a domain:

```bash
curl "$OPUSDNS_API_BASE/v1/domains/example.com/dnssec/disable" \
  --request POST \
  --header "X-Api-Key: $OPUSDNS_API_KEY"
```

## Manage DNSSEC records

### Add or replace DNSSEC data

Use `PUT` to set the DNSSEC records. This replaces any existing records with
the ones you provide:

```bash
curl "$OPUSDNS_API_BASE/v1/domains/example.com/dnssec" \
  --request PUT \
  --header "X-Api-Key: $OPUSDNS_API_KEY" \
  --header "Content-Type: application/json" \
  --data '[
    {
      "key_tag": 12345,
      "algorithm": 13,
      "digest_type": 2,
      "digest": "49FD46E6C4B45C55D4AC..."
    }
  ]'
```

### DS record fields

When providing DS (Delegation Signer) records:

| Field | Type | Description |
| --- | --- | --- |
| `key_tag` | integer | Identifier for the DNSKEY record |
| `algorithm` | integer | Cryptographic algorithm number |
| `digest_type` | integer | Hash algorithm used for the digest |
| `digest` | string | Hex-encoded hash of the DNSKEY record |

### KEY record fields

Some registries accept KEY records instead of DS records:

| Field | Type | Description |
| --- | --- | --- |
| `flags` | integer | DNSKEY flags field (e.g., 257 for KSK) |
| `protocol` | integer | Protocol number (always 3 for DNSSEC) |
| `algorithm` | integer | Cryptographic algorithm number |
| `public_key` | string | Base64-encoded public key |

<scalar-callout type="info">
Whether to use DS or KEY records depends on the TLD's registry. Check the <a href="/products/tlds/specifications">TLD specifications</a> for DNSSEC mode details.
</scalar-callout>

### Remove all DNSSEC data

Delete all published DNSSEC records:

```bash
curl "$OPUSDNS_API_BASE/v1/domains/example.com/dnssec" \
  --request DELETE \
  --header "X-Api-Key: $OPUSDNS_API_KEY"
```

## Automatic DNSSEC reconciliation

When a domain transfers to OpusDNS, any DNSSEC records already published at
the registry are imported along with the rest of the domain data. If those
records point to keys held by a previous DNS provider, resolvers expect
DNSSEC-signed responses that the new nameservers cannot produce, and the
domain stops resolving (`SERVFAIL`).

To prevent this, OpusDNS automatically reconciles the registry DNSSEC data
with your zone's DNSSEC state after an inbound transfer completes and after
a domain's nameservers change:

| Nameservers | Zone DNSSEC status | Action |
| --- | --- | --- |
| External (not OpusDNS) | — | DNSSEC data is left untouched — you manage it yourself. |
| OpusDNS | Enabled | The zone's current DNSSEC data is published to the registry, replacing any stale records. |
| OpusDNS | Disabled, or no zone exists | All DNSSEC data is removed from the registry. |

Reconciliation runs asynchronously after the transfer or nameserver update
completes, so there may be a short delay before the registry records reflect
the final state. It is skipped for TLDs that do not support DNSSEC.

If reconciliation fails, a domain event with type `MODIFICATION` and subtype
`FAILURE` is created — see the [Events overview](/products/events/overview).
You can always inspect the current registry records with
`GET /v1/domains/{domain_reference}/dnssec` and correct them manually.

## TLD support

Not all TLDs support DNSSEC. The TLD specification includes:

- Whether DNSSEC is **allowed** for the TLD
- Whether DNSSEC is **mandatory**
- The DNSSEC **mode** (DS records, KEY records, or both)

Query the TLD specification to check support before enabling DNSSEC:

```bash
curl "$OPUSDNS_API_BASE/v1/tlds/com" \
  --header "X-Api-Key: $OPUSDNS_API_KEY"
```

Look for the `dns_configuration.dnssec` section in the response.

## Related API Reference

- [`GET /v1/domains/{domain_reference}/dnssec`](/api-reference#tag/domain/GET/v1/domains/{domain_reference}/dnssec)
- [`PUT /v1/domains/{domain_reference}/dnssec`](/api-reference#tag/domain/PUT/v1/domains/{domain_reference}/dnssec)
- [`DELETE /v1/domains/{domain_reference}/dnssec`](/api-reference#tag/domain/DELETE/v1/domains/{domain_reference}/dnssec)
- [`POST /v1/domains/{domain_reference}/dnssec/enable`](/api-reference#tag/domain/POST/v1/domains/{domain_reference}/dnssec/enable)
- [`POST /v1/domains/{domain_reference}/dnssec/disable`](/api-reference#tag/domain/POST/v1/domains/{domain_reference}/dnssec/disable)
