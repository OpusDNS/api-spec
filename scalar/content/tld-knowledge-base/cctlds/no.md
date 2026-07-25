# 🇳🇴 .no — Norway

> The **.no** is a country-code top-level domain (ccTLD) operated by Norid AS. This article documents the technical, operational, and contractual requirements for the TLD, along with special considerations for registry, registrar, and domain management.

## General Information

| Property | Value |
| --- | --- |
| TLD Type | ccTLD |
| Registry | Norid AS |
| Registry Country | Norway |
| Registry Website | [www.norid.no](https://www.norid.no) |
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
| Auto-Renew Enabled | ❌ No |
| Auto-Renewal Before Expiry | On expiration |
| Sync After Operations | registration, transfer |

**Grace periods**

| Period | Duration |
| --- | --- |
| Add Grace Period | 0 days |
| Standard Grace Period | 0 days |
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
| Domain Length | 2–63 characters |
| IDN Support | ❌ No |
| Premium Domains | ❌ No |
| Reserved Domains | ❌ No |
| Registry Lock | ❌ No |

## Contacts & Roles

| Property | Value |
| --- | --- |
| Required Contacts | Domain Owner, Technical Contact |
| Supported Roles | Domain Owner, Technical Contact |
| Thick WHOIS | ✅ Yes |
| Privacy Proxy Allowed | ❌ No |
| Contacts Transferable | ❌ No |
| Allowed Postal Types | Local |
| AuthInfo Required | ✅ Yes (8–64 characters) |

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
| Transfer Lock Enabled | ✅ Yes (0 days after registration; 0 days after transfer) |
| Transfer Duration | 0 days |
| Transfer Extends Domain | ❌ No |
| Transfer via AuthInfo | ✅ Yes |
| Confirmation Required | ❌ No |

## WHOIS & RDAP

| Property | Value |
| --- | --- |
| WHOIS Server | `whois.norid.no` |

## Dispute Resolution

| Property | Value |
| --- | --- |
| Dispute Resolution Available | ❌ No |

## Local Presence

| Property | Value |
| --- | --- |
| Local Presence Required | ✅ Yes |
| Applies To Roles | Domain Owner |
| Requirements | Physical Address, Business Entity |
| Eligible Countries | NO |

## Registration model

`.no` registrations are **two-step**: `POST /v1/domains` accepts the registration request, but the domain is only registered at Norid once the **applicant declaration** is signed. The registrant receives an email with a signing link, with reminders on days **7, 14, 21 and 27**. 
If the declaration is not signed within **30 days**, the request is cancelled and refunded.

## Contact Attributes

`.no` registrations identify the **registrant** (called *subscriber* by Norid) through a registry-verified identity:

| Attribute | Type | Required | Applies to | Allowed values |
| --- | --- | --- | --- | --- |
| `NOR_ID_IDENTITY_TYPE` | Enum | ✅ Yes | Registrant | `ORGANIZATION_NUMBER`, `ANONYMOUS_PERSON_IDENTIFIER`, `LOCAL_IDENTITY` |
| `NOR_ID_IDENTITY_VALUE` | String | ✅ Yes | Registrant | See below |
| `NOR_ID_CONTACT_TYPE` | Enum | ➖ Optional | Any | `PERSON`, `ORGANIZATION`, `ROLE` (derived automatically when omitted) |

- `ORGANIZATION_NUMBER`:
  - a 9-digit organization number registered in the [Brønnøysund register](https://www.brreg.no/) (MOD11 check digit). 
  - Requires an **organization** contact (`org` field set).
- `ANONYMOUS_PERSON_IDENTIFIER`: 
  - a Norid person ID in the `N.PRI.xxxxxxxx` format, created by the registrant with [Norid's personal ID tool](https://pid.norid.no/). 
  - Requires a **person** contact (no `org`).
- The contact type is derived from the contact: 
  - `org` set → `ORGANIZATION`, otherwise `PERSON`. 
  - Technical contacts are always created as `ROLE` contacts (Norid requirement) and carry no identity.

## Identity verification by the registry

Norid cross-checks the contact data against the official Norwegian registers at contact creation:

- **Organizations**: the organization number must match the organization name in the Brønnøysund register (`EC004033 Name and identity mismatch`).
- **Persons**: the contact name must match the person registered for the personal ID in the National Population Register (Folkeregisteret), also `EC004033`. The match is case-insensitive but **strict about Norwegian letters**: a name registered as `Aktiv Ærfugl` is rejected when submitted as `AKTIV AERFUGL` (transliterated `AE`/`OE`/`AA` forms are not accepted). Use the exact spelling with `Æ`, `Ø`, `Å`.

## Registrant address

The registrant must have a **Norwegian postal address**: country `NO` and a 4-digit Norwegian postcode matching the Norwegian postal service's address lists. Both are validated upfront:

- a non-`NO` registrant country is rejected (local presence policy);
- a postcode that is not a 4-digit Norwegian postcode is rejected with a `422` pointing at `contacts.registrant[0].postal_code`.

Technical contacts may have foreign addresses.

## Applicant declaration

- The declaration is signed on a hosted page linked from the registrant email - resellers can also submit an already-signed declaration through [`POST /v1/domains/tld-specific/no/{domain}/applicant-declaration`](/api-reference#tag/domain_tld_specific/POST/v1/domains/tld-specific/no/{domain_reference}/applicant-declaration).
- For **person** registrants the declaration must be signed by the registrant themselves: 
  - the signed name must match the registrant contact name;
  - it gets compared case-insensitively, accepting transliterated Norwegian letters; 
  - A mismatch returns `400`, `ERROR_NORID_DECLARATION_NAME_MISMATCH`.
- For **organization** registrants the signer is any person authorized by the organization, so the signed name is free text.
- The signature (name, date, IP, user agent) is stored for auditing and sent to Norid. The registrant receives a copy of the data by email.
