# 🇨🇦 .ca — Canada

> The **.ca** is a country-code top-level domain (ccTLD) operated by Canadian Internet Registration Authority (CIRA). This article documents the technical, operational, and contractual requirements for the TLD, along with special considerations for registry, registrar, and domain management.

## General Information

| Property | Value |
| --- | --- |
| TLD Type | ccTLD |
| Registry | Canadian Internet Registration Authority (CIRA) |
| Registry Country | Canada |
| Registry Website | [www.cira.ca](https://www.cira.ca) |
| Provisioning Protocol | EPP |
| Second-Level Registration | ❌ No |
| Accreditation Required | ✅ Yes |

## Domain Lifecycle

| Property | Value |
| --- | --- |
| Registration Period | 1–10 years |
| Renewal Period | 1–10 years |
| Transfer Renewal Period | 1 year |
| Deletion Policy | Immediate, At expiration |
| Auto-Renew Enabled | ✅ Yes |
| Auto-Renewal Before Expiry | On expiration |
| Sync After Operations | registration, renewal, transfer |

**Grace periods**

| Period | Duration |
| --- | --- |
| Add Grace Period | 5 days |
| Standard Grace Period | 45 days |
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
| Domain Length | 2–63 characters |
| IDN Support | ✅ Yes |
| Premium Domains | ❌ No |
| Reserved Domains | ✅ Yes |
| Registry Lock | ❌ No |

## Contacts & Roles

| Property | Value |
| --- | --- |
| Required Contacts | Domain Owner, Administrator |
| Supported Roles | Domain Owner, Administrator, Technical Contact, Billing Contact |
| Thick WHOIS | ✅ Yes |
| Privacy Proxy Allowed | ✅ Yes |
| Contacts Transferable | ❌ No |
| Allowed Postal Types | Local |
| AuthInfo Required | ✅ Yes (6–16 characters) |

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
| Transfer Lock Enabled | ✅ Yes (60 days after registration; 60 days after transfer) |
| Transfer Duration | 0 days |
| Transfer Extends Domain | ✅ Yes (+1 year) |
| Transfer via AuthInfo | ✅ Yes |
| Confirmation Required | ❌ No |

## WHOIS & RDAP

| Property | Value |
| --- | --- |
| WHOIS Server | `whois.cira.ca` |
| RDAP Server | [rdap.ca.fury.ca](https://rdap.ca.fury.ca/) |

## Dispute Resolution

| Property | Value |
| --- | --- |
| Dispute Resolution Available | ✅ Yes |
| Procedure | CDRP |
| Reference | [www.cira.ca/en/resources/documents/domains/cira-domain-name-dispute-resolution-rules-16](https://www.cira.ca/en/resources/documents/domains/cira-domain-name-dispute-resolution-rules-16/) |
| UDRP Support | ❌ No |
| URS Support | ❌ No |

## Local Presence

| Property | Value |
| --- | --- |
| Local Presence Required | ✅ Yes |
| Applies To Roles | Domain Owner |
| Requirements | Physical Address, Business Entity |
| Eligible Countries | CA |

## Contact Attributes

`.ca` registrations carry a registry-specific contact attribute beyond the standard EPP fields:

| Attribute | Type | Required | Applies to | Allowed values |
| --- | --- | --- | --- | --- |
| `CIRA_CPR` | Enum | ✅ Required | Domain Owner | Any code in the table below |
| `CIRA_CPR` | Enum | ❌ Optional | Administrator | `CCT`, `RES`, `LGR`, `ABO` |

## Canadian Presence Requirement (CIRA_CPR)

Every `.ca` domain must satisfy CIRA's [Canadian Presence Requirements](https://www.cira.ca/en/resources/documents/domains/canadian-presence-requirements-registrants/). The registrant declares which legal type establishes their Canadian presence through the `CIRA_CPR` attribute.

| Code | Legal type |
| --- | --- |
| `ABO` | Aboriginal Peoples (individuals or groups) indigenous to Canada |
| `ASS` | Canadian unincorporated association |
| `CCO` | Canadian corporation, or Canadian province or territory |
| `CCT` | Canadian citizen |
| `EDU` | Canadian educational institution |
| `GOV` | Government or government entity in Canada |
| `HOP` | Canadian hospital |
| `INB` | Indian Band recognized by the Indian Act of Canada |
| `LAM` | Canadian library, archive, or museum |
| `LGR` | Legal Representative of a Canadian Citizen or Permanent Resident |
| `MAJ` | Her/His Majesty the Queen/King |
| `OMK` | Official mark registered in Canada |
| `PLT` | Canadian political party |
| `PRT` | Partnership registered in Canada |
| `RES` | Permanent resident of Canada |
| `TDM` | Trade-mark registered in Canada (by a non-Canadian owner) |
| `TRD` | Canadian trade union |
| `TRS` | Trust established in Canada |

Registrants whose legal type is `TDM` or `OMK` are exempt from the Canadian local-presence requirement: a Canadian-registered trade-mark or official mark satisfies the Canadian Presence Requirement on its own, so the registrant need not be located in Canada.
