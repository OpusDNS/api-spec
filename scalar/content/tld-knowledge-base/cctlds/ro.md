# 🇷🇴 .ro — Romania

> The **.ro** is a country-code top-level domain (ccTLD) operated by National Institute for R&D in Informatics (ROTLD). This article documents the technical, operational, and contractual requirements for the TLD, along with special considerations for registry, registrar, and domain management.

## General Information

| Property | Value |
| --- | --- |
| TLD Type | ccTLD |
| Registry | National Institute for R&D in Informatics (ROTLD) |
| Registry Country | Romania |
| Registry Website | [www.rotld.ro](https://www.rotld.ro/) |
| Provisioning Protocol | EPP |
| Second-Level Registration | ✅ Yes |
| Accreditation Required | ✅ Yes |

## Domain Lifecycle

| Property | Value |
| --- | --- |
| Registration Period | 1–10 years |
| Renewal Period | 1–10 years |
| Transfer Renewal Period | 1 year |
| Deletion Policy | At expiration |
| Auto-Renew Enabled | ❌ No |
| Auto-Renewal Before Expiry | 7 days before expiration |
| Sync After Operations | registration, renewal |

**Grace periods**

| Period | Duration |
| --- | --- |
| Add Grace Period | 0 days |
| Standard Grace Period | 0 days |
| Redemption Period | 30 days |
| Pending Restore | 7 days |
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
| Supported Roles | Domain Owner, Administrator, Technical Contact, Billing Contact |
| Thick WHOIS | ✅ Yes |
| Privacy Proxy Allowed | ❌ No |
| Contacts Transferable | ❌ No |
| Allowed Postal Types | International |
| AuthInfo Required | ✅ Yes (6–40 characters) |

## Nameservers & DNS

| Property | Value |
| --- | --- |
| Nameserver Count | 0–6 |
| Host Objects Allowed | ✅ Yes |
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
| Confirmation Required | ❌ No |

## WHOIS & RDAP

| Property | Value |
| --- | --- |
| WHOIS Server | `whois.rotld.ro` |

## Dispute Resolution

| Property | Value |
| --- | --- |
| Dispute Resolution Available | ❌ No |

## Implementation Notes

- Ensure complete TLS/SSL configuration for every registry environment.
- Enable DNSSEC wherever the registry supports it.
- Make sure AuthInfo/transfer secrets meet the registry's length and format requirements.
- Review the registry's supported domain statuses and dispute-resolution policies before launch.
