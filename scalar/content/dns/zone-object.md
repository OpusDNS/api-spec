# The zone object

A zone represents a DNS zone hosted on the OpusDNS nameserver infrastructure.
Zones contain resource record sets (RRsets), each holding one or more DNS
records.

## Example response

```json
{
  "dns_zone_id": "zone_01h45ytscbebyvny4gc8cr8ma2",
  "name": "example.com",
  "dnssec_status": "enabled",
  "domain_parts": {
    "domain": "example",
    "subdomain": null,
    "suffix": "com"
  },
  "rrsets": [
    {
      "name": "example.com.",
      "type": "A",
      "ttl": 3600,
      "protected": false,
      "protected_reason": null,
      "records": [
        { "rdata": "93.184.216.34", "protected": false, "protected_reason": null }
      ]
    },
    {
      "name": "example.com.",
      "type": "SOA",
      "ttl": 3600,
      "protected": true,
      "protected_reason": "SYSTEM_MANAGED_SOA",
      "records": [
        { "rdata": "ns1.opusdns.com. hostmaster.example.com. 2026050401 3600 900 1209600 300", "protected": true, "protected_reason": "SYSTEM_MANAGED_SOA" }
      ]
    },
    {
      "name": "example.com.",
      "type": "NS",
      "ttl": 3600,
      "protected": true,
      "protected_reason": "SYSTEM_MANAGED_NS",
      "records": [
        { "rdata": "ns1.opusdns.com.", "protected": true, "protected_reason": "SYSTEM_MANAGED_NS" },
        { "rdata": "ns2.opusdns.net.", "protected": true, "protected_reason": "SYSTEM_MANAGED_NS" }
      ]
    }
  ],
  "tags": null,
  "created_on": "2026-01-15T10:30:00Z",
  "updated_on": "2026-01-15T10:30:00Z"
}
```

## Fields

| Field | Type | Description |
| --- | --- | --- |
| `dns_zone_id` | `string` | Unique identifier (TypeID format, prefixed with `zone_`). |
| `name` | `string` | The zone name (e.g., `example.com`). |
| `dnssec_status` | `string` | DNSSEC signing status: `enabled` or `disabled`. |
| `domain_parts` | `object` | Parsed components of the zone name. |
| `domain_parts.domain` | `string \| null` | The second-level domain label (e.g., `example`). |
| `domain_parts.subdomain` | `string \| null` | The subdomain label, if any. |
| `domain_parts.suffix` | `string \| null` | The TLD suffix (e.g., `com`). |
| `rrsets` | `array` | Resource record sets in the zone. See [RRset structure](#rrset-structure). |
| `tags` | `array \| null` | Tags assigned to the zone. Only included when `?include=tags` is specified. |
| `created_on` | `datetime` | When the zone was created. |
| `updated_on` | `datetime` | When the zone was last modified. |

## RRset structure

Each RRset groups DNS records of the same name and type.

| Field | Type | Description |
| --- | --- | --- |
| `name` | `string` | The fully-qualified record name (e.g., `example.com.`). |
| `type` | `string` | The record type. See [Supported record types](#supported-record-types). |
| `ttl` | `integer` | Time-to-live in seconds. |
| `records` | `array` | Individual DNS records. See [Record structure](#record-structure). |
| `protected` | `boolean` | Whether the RRset is system-managed. |
| `protected_reason` | `string \| null` | Why the RRset is protected. See [Protected records](#protected-records). |

## Record structure

Each record within an RRset holds a single `rdata` value.

| Field | Type | Description |
| --- | --- | --- |
| `rdata` | `string` | The record data (e.g., an IP address, hostname, or TXT value). |
| `protected` | `boolean` | Whether this individual record is system-managed. |
| `protected_reason` | `string \| null` | Why the record is protected. |

## Supported record types

OpusDNS supports 21 DNS record types:

| Type | Description | Example rdata |
| --- | --- | --- |
| `A` | IPv4 address | `93.184.216.34` |
| `AAAA` | IPv6 address | `2606:2800:220:1:248:1893:25c8:1946` |
| `ALIAS` | ANAME/alias record (zone apex CNAME alternative) | `other.example.com.` |
| `CAA` | Certificate Authority Authorization | `0 issue "letsencrypt.org"` |
| `CERT` | Certificate record | `PKIX 1 SHA-256 ...` |
| `CNAME` | Canonical name | `www.example.com.` |
| `DNSKEY` | DNSSEC public key | `257 3 13 ...` |
| `DS` | Delegation signer | `12345 13 2 ...` |
| `HTTPS` | HTTPS service binding | `1 . alpn="h2,h3"` |
| `MX` | Mail exchange | `10 mail.example.com.` |
| `NAPTR` | Naming Authority Pointer | `100 10 "u" "sip+E2U" "!^.*$!sip:info@example.com!" .` |
| `NS` | Nameserver | `ns1.opusdns.com.` |
| `PTR` | Pointer (reverse DNS) | `host.example.com.` |
| `TXT` | Text record | `"v=spf1 include:_spf.example.com ~all"` |
| `SOA` | Start of Authority | `ns1.opusdns.com. hostmaster.example.com. ...` |
| `SRV` | Service locator | `10 5 5060 sip.example.com.` |
| `SMIMEA` | S/MIME certificate association | `3 1 1 ...` |
| `SSHFP` | SSH fingerprint | `2 1 123456...` |
| `SVCB` | Service binding | `1 . alpn="h2"` |
| `TLSA` | TLS certificate association | `3 1 1 ...` |
| `URI` | Uniform Resource Identifier | `10 1 "https://example.com"` |

## Protected records

Certain records are system-managed and cannot be modified through the API.
Protected records and RRsets have `protected: true` and a `protected_reason`:

| Reason | Description |
| --- | --- |
| `SYSTEM_MANAGED_SOA` | The SOA record is automatically managed by OpusDNS. |
| `SYSTEM_MANAGED_NS` | NS records at the zone apex are managed by OpusDNS. |
| `EMAIL_FORWARD` | Records created for email forwarding configuration. |
| `DOMAIN_FORWARD` | Records created for domain forwarding (HTTP redirects). |
| `GENERIC` | Other system-managed records. |

Attempting to modify a protected record will result in an error. To change
email or domain forwarding records, use the respective forwarding APIs instead.

## Related API Reference

- [`GET /v1/dns`](/api-reference#tag/dns/GET/v1/dns)
- [`GET /v1/dns/{zone_name}`](/api-reference#tag/dns/GET/v1/dns/{zone_name})
- [`POST /v1/dns`](/api-reference#tag/dns/POST/v1/dns)
