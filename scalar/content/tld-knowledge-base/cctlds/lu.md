# 🇱🇺 .lu — Luxembourg

> The **.lu** is a country-code top-level domain (ccTLD) operated by Fondation RESTENA (DNS-LU). This article documents the technical, operational, and contractual requirements for the TLD, along with special considerations for registry, registrar, and domain management.

## General Information

| Property | Value |
| --- | --- |
| TLD Type | ccTLD |
| Registry | Fondation RESTENA (DNS-LU) |
| Registry Country | Luxembourg |
| Registry Website | [www.dns.lu](https://www.dns.lu) |
| Provisioning Protocol | EPP |
| Second-Level Registration | ❌ No |
| Accreditation Required | ✅ Yes |

## Domain Lifecycle

| Property | Value |
| --- | --- |
| Registration Period | 1 year |
| Renewal Period | 1 year |
| Transfer Renewal Period | 1 year |
| Deletion Policy | Immediate |
| Auto-Renew Enabled | ✅ Yes |
| Auto-Renewal Before Expiry | On expiration |
| Sync After Operations | registration, transfer |

**Grace periods**

| Period | Duration |
| --- | --- |
| Add Grace Period | 0 days |
| Standard Grace Period | 0 days |
| Redemption Period | 30 days |
| Pending Restore | 0 days |
| Pending Delete | 5 days |

## Launch Phases & Availability

| Property | Value |
| --- | --- |
| General Availability | ✅ TLD is live |
| TMCH / Trademark Claims | ❌ No |

## Domain Characteristics

| Property | Value |
| --- | --- |
| Domain Length | 3–63 characters |
| IDN Support | ✅ Yes |
| Premium Domains | ❌ No |
| Reserved Domains | ❌ No |
| Registry Lock | ❌ No |

## Contacts & Roles

| Property | Value |
| --- | --- |
| Required Contacts | Domain Owner, Administrator, Technical Contact |
| Supported Roles | Domain Owner, Administrator, Technical Contact |
| Thick WHOIS | ✅ Yes |
| Privacy Proxy Allowed | ❌ No |
| Contacts Transferable | ❌ No |
| Allowed Postal Types | Local |
| AuthInfo Required | ❌ No |

## Nameservers & DNS

| Property | Value |
| --- | --- |
| Nameserver Count | 2–10 |
| Host Objects Allowed | ✅ Yes |
| Registry Nameserver Check | ✅ Yes |
| DNSSEC Allowed | ✅ Yes |
| DNSSEC Required | ❌ No |
| DNSSEC Mode | DS |
| CZDS (Zone Download) | ❌ No |

## Transfer Policy

| Property | Value |
| --- | --- |
| Transfer Lock Enabled | ✅ Yes (60 days after registration; 0 days after transfer) |
| Transfer Duration | 12 days |
| Transfer Extends Domain | ❌ No |
| Transfer via AuthInfo | ❌ No |
| Confirmation Required | ✅ Yes (Registrant) |

## WHOIS & RDAP

| Property | Value |
| --- | --- |
| WHOIS Server | `whois.dns.lu` |

## Dispute Resolution

| Property | Value |
| --- | --- |
| Dispute Resolution Available | ❌ No |

## Implementation Notes

- Ensure complete TLS/SSL configuration for every registry environment.
- Enable DNSSEC wherever the registry supports it.
- Make sure AuthInfo/transfer secrets meet the registry's length and format requirements.
- Review the registry's supported domain statuses and dispute-resolution policies before launch.
