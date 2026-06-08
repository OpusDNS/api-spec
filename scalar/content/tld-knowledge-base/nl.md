# 🇳🇱 .nl — Netherlands

> The **.nl** is a country-code top-level domain (ccTLD) operated by SIDN. This article documents the technical, operational, and contractual requirements for the TLD, along with special considerations for registry, registrar, and domain management.

## General Information

| Property | Value |
| --- | --- |
| TLD Type | ccTLD |
| Registry | SIDN |

## Domain Lifecycle

| Property | Value |
| --- | --- |
| Registration Period | 1 year |
| Renewal Period | 1 year |
| Deletion Policy | Immediate |
| Auto-Renew Enabled | ✅ Yes |
| Auto-Renewal Before Expiry | 0 days before expiration |

**Grace periods**

| Period | Duration |
| --- | --- |
| Add Grace Period | 0 days |
| Standard Grace Period | 0 days |
| Redemption Period | 40 days |
| Pending Restore | 0 days |
| Pending Delete | 0 days |

## Launch Phases & Availability

| Property | Value |
| --- | --- |
| General Availability | ✅ TLD is live |
| TMCH / Trademark Claims | ✅ Yes |

## Domain Characteristics

| Property | Value |
| --- | --- |
| Domain Length | 2–63 characters |
| IDN Support | ✅ Yes |
| Premium Domains | ✅ Yes |
| Reserved Domains | ✅ Yes |
| Registry Lock | ✅ Yes |

## Contacts & Roles

| Property | Value |
| --- | --- |
| Required Contacts | Domain Owner, Administrator, Technical Contact |
| Supported Roles | Domain Owner, Administrator, Technical Contact |
| Privacy Proxy Allowed | ✅ Yes |
| Contacts Transferable | ✅ Yes |
| Allowed Postal Types | Local |
| AuthInfo Required | ✅ Yes |

## Nameservers & DNS

| Property | Value |
| --- | --- |
| Nameserver Count | 0–13 |
| Host Objects Allowed | ✅ Yes |
| DNSSEC Allowed | ✅ Yes |
| DNSSEC Required | ✅ Yes |
| DNSSEC Mode | DNSKEY |
| CZDS (Zone Download) | ✅ Yes |

## Transfer Policy

| Property | Value |
| --- | --- |
| Transfer Lock Enabled | ✅ Yes |
| Lock Duration | 0 days after registration and transfer |
| Transfer Duration | 0 days |
| Transfer Extends Domain | ✅ Yes |
| Transfer via AuthInfo | ✅ Yes |
| Confirmation Required | ❌ No |

## WHOIS & RDAP

| Property | Value |
| --- | --- |
| WHOIS Server | `whois.sidn.nl` |
| RDAP Server | [https://rdap.sidn.nl/](https://rdap.sidn.nl/) |

## Dispute Resolution

| Property | Value |
| --- | --- |
| Dispute Resolution Available | ✅ Yes |
| Procedure | SIDN Dispute Resolution |
| Reference | [sidn.nl/en/registrars/dispute-resolution-nl](https://www.sidn.nl/en/registrars/dispute-resolution-nl) |
| UDRP Support | ✅ Yes |
| URS Support | ✅ Yes |

## Implementation Notes

- Ensure complete TLS/SSL configuration in all environments.
- DNSSEC should be actively used when supported.
- AuthInfo must meet minimum requirements (e.g., 12 characters).
- Note different status codes or dispute policies for ccTLDs.
- Check if third-level structures (`co.uk`, etc.) need separate documentation.
