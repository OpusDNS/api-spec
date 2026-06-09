# 🇦🇹 .at — Austria

> The **.at** is a country-code top-level domain (ccTLD) operated by nic.at GmbH. This article documents the technical, operational, and contractual requirements for the TLD, along with special considerations for registry, registrar, and domain management.

## General Information

| Property | Value |
| --- | --- |
| TLD Type | ccTLD |
| Registry | nic.at GmbH |
| Registry Country | Austria |
| Registry Website | [www.nic.at](https://www.nic.at/) |
| Provisioning Protocol | EPP |
| Second-Level Registration | ✅ Yes |
| Accreditation Required | ✅ Yes |

## Domain Lifecycle

| Property | Value |
| --- | --- |
| Registration Period | 1 year |
| Renewal Period | 1 year |
| Transfer Renewal Period | 1 year |
| Deletion Policy | Immediate, At expiration |
| Auto-Renew Enabled | ✅ Yes |
| Auto-Renewal Before Expiry | 7 days before expiration |
| Sync After Operations | registration, renewal, transfer |

**Grace periods**

| Period | Duration |
| --- | --- |
| Add Grace Period | 0 days |
| Standard Grace Period | 0 days |
| Redemption Period | 60 days |
| Pending Restore | 7 days |
| Pending Delete | 59 days |

## Launch Phases & Availability

| Property | Value |
| --- | --- |
| General Availability | ✅ TLD is live |
| TMCH / Trademark Claims | ❌ No |

## Domain Characteristics

| Property | Value |
| --- | --- |
| Domain Length | 1–63 characters |
| IDN Support | ✅ Yes (1 tables) |
| Premium Domains | ❌ No |
| Reserved Domains | ❌ No |
| Registry Lock | ✅ Yes |

## Contacts & Roles

| Property | Value |
| --- | --- |
| Required Contacts | Domain Owner, Technical Contact |
| Supported Roles | Domain Owner, Technical Contact |
| Thick WHOIS | ✅ Yes |
| Privacy Proxy Allowed | ✅ Yes |
| Contacts Transferable | ❌ No |
| Allowed Postal Types | International |
| AuthInfo Required | ✅ Yes (6–16 characters) |

## Nameservers & DNS

| Property | Value |
| --- | --- |
| Nameserver Count | 2–8 |
| Host Objects Allowed | ❌ No |
| Registry Nameserver Check | ❌ No |
| DNSSEC Allowed | ✅ Yes |
| DNSSEC Required | ❌ No |
| DNSSEC Mode | DS |
| CZDS (Zone Download) | ❌ No |

## Transfer Policy

| Property | Value |
| --- | --- |
| Transfer Lock Enabled | ❌ No |
| Transfer Duration | 0 days |
| Transfer Extends Domain | ❌ No |
| Transfer via AuthInfo | ❌ No |
| Confirmation Required | ✅ Yes (Both parties) |

## WHOIS & RDAP

| Property | Value |
| --- | --- |
| WHOIS Server | `whois.nic.at` |

## Dispute Resolution

| Property | Value |
| --- | --- |
| Dispute Resolution Available | ✅ Yes |
| Procedure | Domain Dispute |
| Reference | [www.nic.at/en/how-at-works/faqs/domain-disputes-and-wait-status](https://www.nic.at/en/how-at-works/faqs/domain-disputes-and-wait-status) |
| UDRP Support | ❌ No |
| URS Support | ❌ No |

## Implementation Notes

- Ensure complete TLS/SSL configuration for every registry environment.
- Enable DNSSEC wherever the registry supports it.
- Make sure AuthInfo/transfer secrets meet the registry's length and format requirements.
- Review the registry's supported domain statuses and dispute-resolution policies before launch.
