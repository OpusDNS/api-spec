# 🌐 .berlin — TLD-BOX Registrydienstleistungen GmbH

> The **.berlin** is a generic top-level domain (gTLD) operated by TLD-BOX Registrydienstleistungen GmbH. This article documents the technical, operational, and contractual requirements for the TLD, along with special considerations for registry, registrar, and domain management.

## General Information

| Property | Value |
| --- | --- |
| TLD Type | gTLD |
| Registry | TLD-BOX Registrydienstleistungen GmbH |
| Registry Country | Austria |
| Registry Website | [www.nic.at/en/tldbox](https://www.nic.at/en/tldbox) |
| Provisioning Protocol | EPP |
| Second-Level Registration | ✅ Yes |
| Accreditation Required | ❌ No |

## Domain Lifecycle

| Property | Value |
| --- | --- |
| Registration Period | 1–10 years |
| Renewal Period | 1–10 years |
| Transfer Renewal Period | 1 year |
| Deletion Policy | Immediate, At expiration |
| Auto-Renew Enabled | ✅ Yes |
| Auto-Renewal Before Expiry | 7 days before expiration |
| Sync After Operations | registration, renewal, transfer |

**Grace periods**

| Period | Duration |
| --- | --- |
| Add Grace Period | 5 days |
| Standard Grace Period | 45 days |
| Redemption Period | 30 days |
| Pending Restore | 7 days |
| Pending Delete | 5 days |

## Launch Phases & Availability

| Property | Value |
| --- | --- |
| General Availability | ✅ TLD is live |
| TMCH / Trademark Claims | ❌ No |

## Domain Characteristics

| Property | Value |
| --- | --- |
| Domain Length | 1–63 characters |
| IDN Support | ✅ Yes (2 tables) |
| Premium Domains | ❌ No |
| Reserved Domains | ❌ No |
| Registry Lock | ❌ No |

## Contacts & Roles

| Property | Value |
| --- | --- |
| Required Contacts | Domain Owner, Administrator, Technical Contact |
| Supported Roles | Domain Owner, Administrator, Technical Contact |
| Thick WHOIS | ✅ Yes |
| Privacy Proxy Allowed | ✅ Yes |
| Contacts Transferable | ❌ No |
| Allowed Postal Types | International |
| AuthInfo Required | ✅ Yes (12–63 characters) |

## Nameservers & DNS

| Property | Value |
| --- | --- |
| Nameserver Count | 0–13 |
| Host Objects Allowed | ✅ Yes |
| Registry Nameserver Check | ❌ No |
| DNSSEC Allowed | ✅ Yes |
| DNSSEC Required | ❌ No |
| DNSSEC Mode | DS |
| CZDS (Zone Download) | ✅ Yes |

## Transfer Policy

| Property | Value |
| --- | --- |
| Transfer Lock Enabled | ✅ Yes (60 days after registration; 60 days after transfer) |
| Transfer Duration | 5 days |
| Transfer Extends Domain | ✅ Yes (+1 year) |
| Transfer via AuthInfo | ✅ Yes |
| Confirmation Required | ✅ Yes (registrar) |

## WHOIS & RDAP

| Property | Value |
| --- | --- |
| WHOIS Server | `whois.nic.berlin` |
| RDAP Server | [rdap.nic.berlin/v1](https://rdap.nic.berlin/v1/) |

## Dispute Resolution

| Property | Value |
| --- | --- |
| Dispute Resolution Available | ✅ Yes |
| Procedure | UDRP |
| Reference | [www.icann.org/resources/pages/help/dndr/udrp-en](https://www.icann.org/resources/pages/help/dndr/udrp-en) |
| UDRP Support | ✅ Yes |
| URS Support | ✅ Yes |

## Local Presence

| Property | Value |
| --- | --- |
| Local Presence Required | ✅ Yes |
| Applies To Roles | Domain Owner, Administrator, Technical Contact |
| Requirements | Physical Address |
| Eligible Countries | Any |

## Implementation Notes

- Ensure complete TLS/SSL configuration for every registry environment.
- Enable DNSSEC wherever the registry supports it.
- Make sure AuthInfo/transfer secrets meet the registry's length and format requirements.
- Review the registry's supported domain statuses and dispute-resolution policies before launch.
