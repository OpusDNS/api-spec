# 🇮🇹 .it — Italy

> The **.it** is a country-code top-level domain (ccTLD) operated by Istituto di Informatica e Telematica (IIT-CNR). This article documents the technical, operational, and contractual requirements for the TLD, along with special considerations for registry, registrar, and domain management.

## General Information

| Property | Value |
| --- | --- |
| TLD Type | ccTLD |
| Registry | Istituto di Informatica e Telematica (IIT-CNR) |
| Registry Country | Italy |
| Registry Website | [www.nic.it](https://www.nic.it) |
| Provisioning Protocol | EPP |
| Second-Level Registration | ✅ Yes |
| Accreditation Required | ✅ Yes |

## Domain Lifecycle

| Property | Value |
| --- | --- |
| Registration Period | 1 year |
| Renewal Period | 1 year |
| Transfer Renewal Period | 1 year |
| Deletion Policy | At expiration |
| Auto-Renew Enabled | ✅ Yes |
| Auto-Renewal Before Expiry | On expiration |
| Sync After Operations | registration |

**Grace periods**

| Period | Duration |
| --- | --- |
| Add Grace Period | 0 days |
| Standard Grace Period | 15 days |
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
| Domain Length | 3–63 characters |
| IDN Support | ✅ Yes |
| Premium Domains | ❌ No |
| Reserved Domains | ❌ No |
| Registry Lock | ❌ No |

## Contacts & Roles

| Property | Value |
| --- | --- |
| Required Contacts | Domain Owner, Administrator, Technical Contact |
| Supported Roles | Domain Owner, Administrator, Technical Contact |
| Thick WHOIS | ✅ Yes |
| Privacy Proxy Allowed | ❌ No |
| Contacts Transferable | ❌ No |
| Allowed Postal Types | Local |
| AuthInfo Required | ✅ Yes (6–32 characters) |

## Nameservers & DNS

| Property | Value |
| --- | --- |
| Nameserver Count | 2–13 |
| Host Objects Allowed | ❌ No |
| Registry Nameserver Check | ✅ Yes |
| DNSSEC Allowed | ✅ Yes |
| DNSSEC Required | ❌ No |
| DNSSEC Mode | DS |
| CZDS (Zone Download) | ❌ No |

## Transfer Policy

| Property | Value |
| --- | --- |
| Transfer Lock Enabled | ❌ No |
| Transfer Duration | 1 day |
| Transfer Extends Domain | ❌ No |
| Transfer via AuthInfo | ❌ No |
| Confirmation Required | ✅ Yes (Both parties) |

## WHOIS & RDAP

| Property | Value |
| --- | --- |
| WHOIS Server | `whois.nic.it` |
| RDAP Server | [rdap.pubtest.nic.it](https://rdap.pubtest.nic.it/) |

## Dispute Resolution

| Property | Value |
| --- | --- |
| Dispute Resolution Available | ❌ No |

## Contact Attributes

`.it` carries two registry-specific attributes on the **registrant** contact, beyond the standard EPP fields. Both are required on registrations and inbound transfers:

| Attribute | Type | Required | Applies to | Allowed values |
| --- | --- | --- | --- | --- |
| `NIC_IT_ENTITY_TYPE` | Enum | ✅ Required | Registrant | See the entity-type table below |
| `NIC_IT_REG_CODE` | String | ✅ Required | Registrant | Tax or registration code, 1-36 chars (format depends on the entity type) |

### Entity types (`NIC_IT_ENTITY_TYPE`)

The registrant declares its legal nature through `NIC_IT_ENTITY_TYPE`. That value drives the nationality, organization, and registration-code rules below. The registry code is the number NIC.it echoes back in policy errors (e.g. "entity type = 1").

| Value | Legal nature | Registry code | Natural person |
| --- | --- | --- | --- |
| `natural_person` | Natural person | 1 | ✅ |
| `company` | Company / one-person company | 2 | ❌ |
| `individual_firm` | Freelancer / sole proprietor | 3 | ❌ |
| `non_profit` | Non-profit organization | 4 | ❌ |
| `public_org` | Public organization | 5 | ❌ |
| `other` | Other entity | 6 | ❌ |
| `foreign_legal_entity` | Foreign (non-Italian) legal entity | 7 | ❌ |

### Registration code (`NIC_IT_REG_CODE`)

The expected format depends on the entity type and nationality:

| Entity type | Expected code |
| --- | --- |
| `natural_person` (Italian) | 16-character Codice Fiscale |
| `natural_person` (non-Italian) | Home-country identifier (no format check) |
| `company`, `public_org`, `other` | 11-digit Partita IVA |
| `individual_firm` | Codice Fiscale or Partita IVA |
| `non_profit` | Partita IVA, or the literal `N.A.` when none exists |
| `foreign_legal_entity` | Home-country identifier (no format check) |

### Nationality, province, and organization

The registrant's standard fields are constrained by the entity type:

- **Country** (`contact.country`):
   - Italian legal types (`company`, `individual_firm`, `non_profit`, `public_org`, `other`) must be `IT`
   - `foreign_legal_entity` must be a non-`IT` country in the EEA plus Vatican, San Marino, Switzerland, and the UK
   - `natural_person` may be any country in that same EEA-plus set, including `IT`
- **Province** (`contact.state`): required and must be a valid 2-letter Italian province code (e.g. `RM`, `MI`, `NA`) whenever the country is `IT`
- **Organization** (`contact.org`):
   - required for every legal-entity type
   - for `natural_person` it must be omitted or equal the contact's full name

### Per-role rules

`.it` is a thick registry with a registrant, admin, and tech contact. A few cross-role rules are enforced before the request reaches the registry:

- **registrant** and **admin** contacts are required for registrations
- **tech** contact is required on both create and update
- for a `natural_person` registrant, the **admin** contact must reference the same contact as the registrant
- the registrant is immutable through a normal update: omit it and the existing registrant is kept; it cannot be replaced via `update`

> ⚠️ **Reusing one contact for every role?** For a `natural_person` registrant the admin has to be that same contact, and any contacts update must still carry a tech. The two failures integrators hit most:
>
> ```json
> {
>   "type": "policy-validation-error",
>   "title": "Policy Validation Error",
>   "status": 422,
>   "code": "ERROR_POLICY_VALIDATION",
>   "errors": [
>     {
>       "detail": "For 'natural_person' registrant, the admin contact must reference the same contact as the registrant",
>       "pointer": "contacts.admin[0].contact_id"
>     }
>   ],
>   "detail": "Policy validation failed"
> }
> ```
>
> ```json
> {
>   "type": "policy-validation-error",
>   "title": "Policy Validation Error",
>   "status": 422,
>   "code": "ERROR_POLICY_VALIDATION",
>   "errors": [
>     {
>       "detail": "Tech contact is required",
>       "pointer": "contacts.tech"
>     }
>   ],
>   "detail": "Policy validation failed"
> }
> ```

The attribute constraints are machine-readable: each `possible_attributes` entry returned by [`GET /v1/tlds/it`](/api-reference#tag/tld/GET/v1/tlds/{tld}) carries its own `values`, `required`, and `contact_roles` fields.

## Registrant Policy Acknowledgement

`.it` registrations and inbound transfers require the registrar to confirm — on the registrant's behalf — compliance with the Registro .it (IIT-CNR) policies, and to pass those policies on to the domain owner. Surface the acknowledgement below to the end user **before** submitting a `.it` create or transfer; the confirmation is mandatory for both operations.

| Policy | Reference |
| --- | --- |
| Terms of Service | [Terms of Service (PDF)](https://cdn.prod.website-files.com/66f35e9c0faa52510e6c6d4c/68ac34bfb6a7a14ab952248d_TermsOfService_en.pdf) |
| Dispute Resolution Policy (.it) | [nic.it — Legal / Dispute Resolution](https://www.nic.it/en/manage-your-it/legal) |
| Privacy Policy | [nic.it — Privacy Policy](https://www.nic.it/en/privacy-policy) |

### Confirmation text

Present a single **required** checkbox. The registrant must accept it for the create or transfer to proceed. Suggested copy in English and German:

**English**

> Please confirm that you comply with the following policies and that you will pass them on to the domain owner accordingly.
>
> - [Terms of Service](https://cdn.prod.website-files.com/66f35e9c0faa52510e6c6d4c/68ac34bfb6a7a14ab952248d_TermsOfService_en.pdf)
> - [Dispute Resolution Policy .it](https://www.nic.it/en/manage-your-it/legal)
> - [Privacy Policy](https://www.nic.it/en/privacy-policy)
>
> ☐ I hereby confirm my compliance with the policies listed above.

**Deutsch**

> Bitte bestätigen Sie die Einhaltung der folgenden Policies bzw. dass Sie diese entsprechend an den Inhaber der Domain weitergeben.
>
> - [Servicebedingungen](https://cdn.prod.website-files.com/66f35e9c0faa52510e6c6d4c/68ac34bfb6a7a14ab952248d_TermsOfService_en.pdf)
> - [Dispute Resolution .it](https://www.nic.it/en/manage-your-it/legal)
> - [Datenschutzerklärung](https://www.nic.it/en/privacy-policy)
>
> ☐ Hiermit bestätige ich die Einhaltung der genannten Policies.

> ℹ️ The acknowledgement is required for **both** `.it` registrations and inbound transfers. Capture the confirmation at the point of sale for each operation — a prior registration does not carry the acknowledgement over to a later transfer.
