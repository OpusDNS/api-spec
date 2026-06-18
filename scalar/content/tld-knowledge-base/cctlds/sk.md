# 🇸🇰 .sk — Slovakia

> The **.sk** is a country-code top-level domain (ccTLD) operated by SK-NIC, a.s.. This article documents the technical, operational, and contractual requirements for the TLD, along with special considerations for registry, registrar, and domain management.

## General Information

| Property | Value |
| --- | --- |
| TLD Type | ccTLD |
| Registry | SK-NIC, a.s. |
| Registry Country | Slovakia |
| Registry Website | [www.sk-nic.sk](https://www.sk-nic.sk) |
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
| Sync After Operations | registration, renewal, transfer |

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
| TMCH / Trademark Claims | ❌ No |

## Domain Characteristics

| Property | Value |
| --- | --- |
| Domain Length | 1–63 characters |
| IDN Support | ❌ No |
| Premium Domains | ❌ No |
| Reserved Domains | ❌ No |
| Registry Lock | ❌ No |

## Contacts & Roles

| Property | Value |
| --- | --- |
| Required Contacts | Domain Owner, Administrator, Technical Contact |
| Supported Roles | Domain Owner, Administrator, Technical Contact, Billing Contact |
| Thick WHOIS | ✅ Yes |
| Privacy Proxy Allowed | ❌ No |
| Contacts Transferable | ✅ Yes |
| Allowed Postal Types | Local, International |
| AuthInfo Required | ✅ Yes (16–63 characters) |

## Nameservers & DNS

| Property | Value |
| --- | --- |
| Nameserver Count | 0–13 |
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
| Transfer Extends Domain | ✅ Yes (+1 year) |
| Transfer via AuthInfo | ✅ Yes |
| Confirmation Required | ❌ No |

## WHOIS & RDAP

| Property | Value |
| --- | --- |
| WHOIS Server | `whois.sk-nic.sk` |

## Dispute Resolution

| Property | Value |
| --- | --- |
| Dispute Resolution Available | ❌ No |

## Local Presence

| Property | Value |
| --- | --- |
| Local Presence Required | ✅ Yes |
| Applies To Roles | Domain Owner |
| Requirements | Physical Address |
| Eligible Countries | AT, BE, BG, HR, CY, CZ, DK, EE, FI, FR, DE, GR, HU, IE, IT, LV, LT, LU, MT, NL, PL, PT, RO, SK, SI, ES, SE, IS, LI, NO, CH, GB |

## Contact Attributes

`.sk` registrations carry registry-specific contact attributes beyond the standard EPP fields:

| Attribute | Type | Required | Applies to | Allowed values                                                     |
| --- | --- | --- | --- |--------------------------------------------------------------------|
| `SK_NIC_LEGAL_FORM` | Enum | ➖  Optional | All roles | `CORP` \| `PERS`                                                   |
| `SK_NIC_IDENT_VALUE` | String | ➖  Optional | All roles | Company identifier (`CORP`) or date of birth `YYYY-MM-DD` (`PERS`) |

The extension exists to discern the **legal form** of the contact, mainly for personal-data-protection reasons. 
When `SK_NIC_LEGAL_FORM` is omitted, the legal form is derived from the contact: a contact with an `org` is treated as `CORP`, otherwise `PERS`. 
Supplying `SK_NIC_LEGAL_FORM` explicitly overrides that derivation (needed for a self-employed entrepreneur, who is a natural person but registers as `CORP`).

These per-attribute constraints are machine-readable: each `possible_attributes` entry returned by [`GET /v1/tlds/sk`](/api-reference#tag/tld/GET/v1/tlds/{tld}) carries its own `type`, `required`, and `values` fields.

## Legal Form & Identification

Each `.sk` contact declares its legal form through `SK_NIC_LEGAL_FORM`, and may optionally provide an identifier through `SK_NIC_IDENT_VALUE`. The identifier type depends on the legal form.

| Legal form | Constant | Identifier (`SK_NIC_IDENT_VALUE`) | Format |
| --- | --- | --- | --- |
| Natural person | `PERS` | Date of birth | `YYYY-MM-DD` (e.g. `1987-01-01`) |
| Legal person or self-employed entrepreneur | `CORP` | Company identifier (IČO for Slovak legal persons; the equivalent business number from the relevant official register for foreign legal persons) | String, up to 32 characters |

The identifier is **not mandatory**, but the registry strongly recommends providing it to better identify the user and to support their claim to the domain.
