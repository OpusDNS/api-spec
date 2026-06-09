# 🇺🇸 .sc — United States

> The **.sc** is a country-code top-level domain (ccTLD) operated by Identity Digital Inc.. This article documents the technical, operational, and contractual requirements for the TLD, along with special considerations for registry, registrar, and domain management.

## General Information

| Property | Value |
| --- | --- |
| TLD Type | ccTLD |
| Registry | Identity Digital Inc. |
| Registry Country | United States |
| Registry Website | [nic.sc](https://nic.sc) |
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
| Auto-Renew Enabled | ✅ Yes |
| Auto-Renewal Before Expiry | 7 days before expiration |
| Sync After Operations | registration, renewal, transfer |

**Grace periods**

| Period | Duration |
| --- | --- |
| Add Grace Period | 5 days |
| Standard Grace Period | 45 days |
| Redemption Period | 30 days |
| Pending Restore | 5 days |
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
| Required Contacts | Domain Owner, Technical Contact, Administrator |
| Supported Roles | Domain Owner, Technical Contact, Administrator, Billing Contact |
| Thick WHOIS | ✅ Yes |
| Privacy Proxy Allowed | ✅ Yes |
| Contacts Transferable | ❌ No |
| Allowed Postal Types | Local, International |
| AuthInfo Required | ✅ Yes (8–32 characters) |

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
| Confirmation Required | ✅ Yes (Both parties) |

## WHOIS & RDAP

| Property | Value |
| --- | --- |
| WHOIS Server | `whois.identitydigital.services` |
| RDAP Server | [rdap.identitydigital.services/rdap](https://rdap.identitydigital.services/rdap/) |

## Dispute Resolution

| Property | Value |
| --- | --- |
| Dispute Resolution Available | ✅ Yes |
| Procedure | UDRP |
| Reference | [nic.sc/en/forms/Uniform-Domain-Name-Dispute-Resolution-Policy.pdf](https://nic.sc/en/forms/Uniform-Domain-Name-Dispute-Resolution-Policy.pdf) |
| UDRP Support | ✅ Yes |
| URS Support | ❌ No |

## Implementation Notes

- Ensure complete TLS/SSL configuration in all environments.
- DNSSEC should be actively used when supported.
- AuthInfo must meet minimum requirements (≥ 8 characters).
- Note different status codes or dispute policies for ccTLDs.
- Check if third-level structures (`co.uk`, etc.) need separate documentation.
