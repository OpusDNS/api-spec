# 🇺🇰 .uk — United Kingdom

> The **.uk** is a country-code top-level domain (ccTLD) operated by Nominet UK. This article documents the technical, operational, and contractual requirements for the TLD, along with special considerations for registry, registrar, and domain management.

## General Information

| Property | Value |
| --- | --- |
| TLD Type | ccTLD |
| Registry | Nominet UK |
| Registry Country | United Kingdom |
| Registry Website | [www.nominet.uk](https://www.nominet.uk) |
| Provisioning Protocol | EPP |
| Second-Level Registration | ✅ Yes |
| Accreditation Required | ✅ Yes |

## Domain Lifecycle

| Property | Value |
| --- | --- |
| Registration Period | 1–10 years |
| Renewal Period | 1–10 years |
| Transfer Renewal Period | 1 year |
| Deletion Policy | Immediate, At expiration |
| Auto-Renew Enabled | ❌ No |
| Auto-Renewal Before Expiry | On expiration |
| Sync After Operations | registration, renewal |

**Grace periods**

| Period | Duration |
| --- | --- |
| Add Grace Period | 5 days |
| Standard Grace Period | 30 days |
| Redemption Period | 60 days |
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
| Domain Length | 1–63 characters |
| IDN Support | ❌ No |
| Premium Domains | ❌ No |
| Reserved Domains | ❌ No |
| Registry Lock | ✅ Yes |

## Contacts & Roles

| Property | Value |
| --- | --- |
| Required Contacts | Domain Owner |
| Supported Roles | Domain Owner, Administrator, Technical Contact, Billing Contact |
| Thick WHOIS | ✅ Yes |
| Privacy Proxy Allowed | ❌ No |
| Contacts Transferable | ❌ No |
| Allowed Postal Types | Local, International |
| AuthInfo Required | ❌ No |

## Nameservers & DNS

| Property | Value |
| --- | --- |
| Nameserver Count | 0–10 |
| Host Objects Allowed | ✅ Yes |
| Registry Nameserver Check | ❌ No |
| DNSSEC Allowed | ✅ Yes |
| DNSSEC Required | ❌ No |
| DNSSEC Mode | DS |
| CZDS (Zone Download) | ❌ No |

## Transfer Policy

| Property | Value |
| --- | --- |
| Transfer Lock Enabled | ✅ Yes (0 days after registration; 0 days after transfer) |
| Transfer Duration | 0 days |
| Transfer Extends Domain | ❌ No |
| Transfer via AuthInfo | ❌ No |
| Confirmation Required | ✅ Yes (registrar) |

## WHOIS & RDAP

| Property | Value |
| --- | --- |
| WHOIS Server | `whois.nic.uk` |
| RDAP Server | [rdap.nominet.uk/uk](https://rdap.nominet.uk/uk/) |

## Dispute Resolution

| Property | Value |
| --- | --- |
| Dispute Resolution Available | ✅ Yes |
| Procedure | DRS |
| Reference | [www.nominet.uk/disputes](https://www.nominet.uk/disputes/) |
| UDRP Support | ❌ No |
| URS Support | ❌ No |

## Implementation Notes

- Ensure complete TLS/SSL configuration in all environments.
- DNSSEC should be actively used when supported.
- AuthInfo must meet minimum requirements (≥ 1 characters).
- Note different status codes or dispute policies for ccTLDs.
- Check if third-level structures (`co.uk`, etc.) need separate documentation.
