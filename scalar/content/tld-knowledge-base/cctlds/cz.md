# 🇨🇿 .cz — Czechia

> The **.cz** is a country-code top-level domain (ccTLD) operated by CZ.NIC, z. s. p. o.. This article documents the technical, operational, and contractual requirements for the TLD, along with special considerations for registry, registrar, and domain management.

## General Information

| Property | Value |
| --- | --- |
| TLD Type | ccTLD |
| Registry | CZ.NIC, z. s. p. o. |
| Registry Country | Czechia |
| Registry Website | [www.nic.cz](https://www.nic.cz) |
| Provisioning Protocol | EPP |
| Second-Level Registration | ✅ Yes |
| Accreditation Required | ✅ Yes |

## Domain Lifecycle

| Property | Value |
| --- | --- |
| Registration Period | 1 year |
| Renewal Period | 1 year |
| Transfer Renewal Period | 1 year |
| Deletion Policy | Immediate |
| Auto-Renew Enabled | ❌ No |
| Auto-Renewal Before Expiry | On expiration |
| Sync After Operations | registration, renewal, transfer |

**Grace periods**

| Period | Duration |
| --- | --- |
| Add Grace Period | 0 days |
| Standard Grace Period | 30 days |
| Redemption Period | 31 days |
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
| Supported Roles | Domain Owner, Administrator |
| Thick WHOIS | ✅ Yes |
| Privacy Proxy Allowed | ❌ No |
| Contacts Transferable | ✅ Yes |
| Allowed Postal Types | Local |
| AuthInfo Required | ✅ Yes (8–32 characters) |

## Nameservers & DNS

| Property | Value |
| --- | --- |
| Nameserver Count | 2–10 |
| Host Objects Allowed | ❌ No |
| Registry Nameserver Check | ✅ Yes |
| DNSSEC Allowed | ✅ Yes |
| DNSSEC Required | ❌ No |
| DNSSEC Mode | DNSKEY |
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
| WHOIS Server | `whois.nic.cz` |
| RDAP Server | [rdap.nic.cz](https://rdap.nic.cz/) |

## Dispute Resolution

| Property | Value |
| --- | --- |
| Dispute Resolution Available | ❌ No |

## Implementation Notes

- Ensure complete TLS/SSL configuration for every registry environment.
- Enable DNSSEC wherever the registry supports it.
- Make sure AuthInfo/transfer secrets meet the registry's length and format requirements.
- Review the registry's supported domain statuses and dispute-resolution policies before launch.
