# 🇮🇸 .is — Iceland

> The **.is** is a country-code top-level domain (ccTLD) operated by ISNIC - Internet á Íslandi hf.. This article documents the technical, operational, and contractual requirements for the TLD, along with special considerations for registry, registrar, and domain management.

## General Information

| Property | Value |
| --- | --- |
| TLD Type | ccTLD |
| Registry | ISNIC - Internet á Íslandi hf. |
| Registry Country | Iceland |
| Registry Website | [www.isnic.is](https://www.isnic.is) |
| Provisioning Protocol | EPP |
| Second-Level Registration | ✅ Yes |
| Accreditation Required | ✅ Yes |

## Domain Lifecycle

| Property | Value |
| --- | --- |
| Registration Period | 1–5 years |
| Renewal Period | 1–5 years |
| Transfer Renewal Period | 1 year |
| Deletion Policy | Immediate |
| Auto-Renew Enabled | ❌ No |
| Auto-Renewal Before Expiry | On expiration |
| Sync After Operations | registration, renewal |

**Grace periods**

| Period | Duration |
| --- | --- |
| Add Grace Period | 0 days |
| Standard Grace Period | 30 days |
| Redemption Period | 0 days |
| Pending Restore | 0 days |
| Pending Delete | 0 days |

## Launch Phases & Availability

| Property | Value |
| --- | --- |
| General Availability | ✅ TLD is live |
| TMCH / Trademark Claims | ❌ No |

## Domain Characteristics

| Property | Value |
| --- | --- |
| Domain Length | 1–63 characters |
| IDN Support | ✅ Yes |
| Premium Domains | ❌ No |
| Reserved Domains | ❌ No |
| Registry Lock | ❌ No |

## Contacts & Roles

| Property | Value |
| --- | --- |
| Required Contacts | Domain Owner |
| Supported Roles | Domain Owner |
| Thick WHOIS | ✅ Yes |
| Privacy Proxy Allowed | ❌ No |
| Contacts Transferable | ❌ No |
| Allowed Postal Types | Local |
| AuthInfo Required | ❌ No |

## Nameservers & DNS

| Property | Value |
| --- | --- |
| Nameserver Count | 0–13 |
| Host Objects Allowed | ✅ Yes |
| Registry Nameserver Check | ✅ Yes |
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
| Confirmation Required | ❌ No |

## WHOIS & RDAP

| Property | Value |
| --- | --- |
| WHOIS Server | `whois.isnic.is` |

## Dispute Resolution

| Property | Value |
| --- | --- |
| Dispute Resolution Available | ❌ No |

## Implementation Notes

- Ensure complete TLS/SSL configuration for every registry environment.
- Enable DNSSEC wherever the registry supports it.
- Make sure AuthInfo/transfer secrets meet the registry's length and format requirements.
- Review the registry's supported domain statuses and dispute-resolution policies before launch.
