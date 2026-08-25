# 🇫🇷 .fr — France

> The **.fr** is a country-code top-level domain (ccTLD) operated by AFNIC (Association Française pour le Nommage Internet en Coopération). This article documents the technical, operational, and contractual requirements for the TLD, along with special considerations for registry, registrar, and domain management.

## General Information

| Property | Value |
| --- | --- |
| TLD Type | ccTLD |
| Registry | AFNIC (Association Française pour le Nommage Internet en Coopération) |
| Registry Country | France |
| Registry Website | [www.afnic.fr](https://www.afnic.fr) |
| Provisioning Protocol | EPP |
| Second-Level Registration | ✅ Yes |
| Accreditation Required | ✅ Yes |

## Domain Lifecycle

| Property | Value |
| --- | --- |
| Registration Period | 1–10 years |
| Renewal Period | 1–10 years |
| Transfer Renewal Period | 1 year |
| Deletion Policy | Immediate |
| Auto-Renew Enabled | ✅ Yes |
| Auto-Renewal Before Expiry | 7 days before expiration |
| Sync After Operations | registration, renewal, transfer |

**Grace periods**

| Period | Duration |
| --- | --- |
| Add Grace Period | 5 days |
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
| Required Contacts | Domain Owner, Administrator, Technical Contact |
| Supported Roles | Domain Owner, Administrator, Technical Contact |
| Thick WHOIS | ✅ Yes |
| Privacy Proxy Allowed | ❌ No |
| Contacts Transferable | ❌ No |
| Allowed Postal Types | Local |
| AuthInfo Required | ✅ Yes (12–63 characters) |

## Nameservers & DNS

| Property | Value |
| --- | --- |
| Nameserver Count | 0–8 |
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
| Transfer Duration | 8 days |
| Transfer Extends Domain | ✅ Yes (+1 year) |
| Transfer via AuthInfo | ✅ Yes |
| Confirmation Required | ✅ Yes (registrar) |

## WHOIS & RDAP

| Property | Value |
| --- | --- |
| WHOIS Server | `whois.nic.fr` |
| RDAP Server | [rdap.nic.fr](https://rdap.nic.fr) |

## Dispute Resolution

| Property | Value |
| --- | --- |
| Dispute Resolution Available | ❌ No |

## Contact Attributes

AFNIC models every contact as either a **natural person** (`PP` — *personne physique*) or a
**legal entity** (`PM` — *personne morale*), and that choice decides which of the remaining
attributes apply.

Two things set the AFNIC TLDs apart from most ccTLDs:

- the attributes are required on **every** contact role — registrant, administrative, and
  technical — not on the registrant alone;
- the roles do not have to agree. A `PP` registrant with a `PM` technical contact is a normal
  `.fr` registration.

| Attribute | Type | Required | Applies to | Allowed values |
| --- | --- | --- | --- | --- |
| `AFNIC_CONTACT_TYPE` | Enum | ✅ Required | Every role | `PP` (natural person) or `PM` (legal entity) |

### Natural person (`PP`)

| Attribute | Type | Required | Allowed values |
| --- | --- | --- | --- |
| `AFNIC_PP_FIRST_NAME` | String | ✅ Required | The contact's first name. It is sent to AFNIC in addition to the standard `name` field, which carries the full name |
| `AFNIC_ID_STATUS` | Enum | ➖ Optional | `ok`, `no`, `pending`, `problem`, `ko`, `deprecated`, `control`, `delayed` |
| `AFNIC_REACHABLE_MEDIA` | Enum | ➖ Optional | `email` or `voice` — the channel through which the registrant was reached |
| `AFNIC_REACHABLE_STATUS` | Boolean | ➖ Optional | Whether that channel was confirmed |

`AFNIC_REACHABLE_STATUS` is only sent to the registry when `AFNIC_REACHABLE_MEDIA` is set
alongside it — a status on its own is dropped, because AFNIC carries the confirmation as an
attribute of the channel.

### Legal entity (`PM`)

| Attribute | Type | Required | Allowed values |
| --- | --- | --- | --- |
| `AFNIC_PM_LEGAL_STATUS` | Enum | ✅ Required | `company`, `association`, or `other` |
| `AFNIC_PM_SIREN` | String | ➖ Optional | SIREN or SIRET number from the French business register |
| `AFNIC_PM_VAT` | String | ➖ Optional | European VAT number |
| `AFNIC_PM_TRADEMARK` | String | ➖ Optional | Trademark registration number |
| `AFNIC_PM_DUNS` | Integer | ➖ Optional | D-U-N-S number |
| `AFNIC_PM_LOCAL` | String | ➖ Optional | Identifier from another official register, for an entity that has none of the above |
| `AFNIC_ID_STATUS` | Enum | ➖ Optional | Same values as for a natural person |

The five identifiers apply to the `company` and `other` legal statuses. An entity may supply
several; AFNIC accepts them together.

#### Associations

An `association` identifies itself through its WALDEC number, or through its publication in the
*Journal Officiel* — one of the two is mandatory, and a create that carries neither is rejected
before it reaches the registry.

| Attribute | Type | Required | Allowed values |
| --- | --- | --- | --- |
| `AFNIC_PM_ASSOC_WALDEC` | String | ➖ Conditional | WALDEC number of the association |
| `AFNIC_PM_ASSOC_PUBL_DATE` | Datetime | ➖ Conditional | Date of publication in the *Journal Officiel* |
| `AFNIC_PM_ASSOC_PUBL_PAGE` | Integer | ➖ Conditional | Page of that publication |
| `AFNIC_PM_ASSOC_PUBL_ANNOUNCE` | Integer | ➖ Optional | Announcement number within the publication |
| `AFNIC_PM_ASSOC_DECL` | Datetime | ➖ Optional | Date the association was declared |

Supply **either** `AFNIC_PM_ASSOC_WALDEC`, **or** `AFNIC_PM_ASSOC_PUBL_DATE` together with
`AFNIC_PM_ASSOC_PUBL_PAGE`. When a WALDEC number is present it is what gets sent, and the
publication attributes are ignored. `AFNIC_PM_ASSOC_DECL` and `AFNIC_PM_ASSOC_PUBL_ANNOUNCE`
only add detail to the publication route; neither satisfies the requirement on its own.

```json
{
  "type": "policy-validation-error",
  "title": "Policy Validation Error",
  "status": 422,
  "code": "ERROR_POLICY_VALIDATION",
  "detail": "PM association requires AFNIC_PM_ASSOC_WALDEC or (AFNIC_PM_ASSOC_PUBL_DATE + AFNIC_PM_ASSOC_PUBL_PAGE)"
}
```

### Registry-managed attributes

| Attribute | Type | Allowed values |
| --- | --- | --- |
| `AFNIC_RESTRICTED_PUBLICATION` | Boolean | Whether AFNIC restricts publication of the contact's details |

`AFNIC_RESTRICTED_PUBLICATION` is read back from AFNIC when a contact is imported or read; it is
not sent on a contact create, so setting it on an attribute set has no effect.

### Example attribute sets

A natural person:

```bash
curl "$OPUSDNS_API_BASE/v1/contacts/attribute-sets" \
  --request POST \
  --header "X-Api-Key: $OPUSDNS_API_KEY" \
  --header "Content-Type: application/json" \
  --data '{
    "label": "FR registrant - individual",
    "tld": "fr",
    "attributes": {
      "AFNIC_CONTACT_TYPE": "PP",
      "AFNIC_PP_FIRST_NAME": "Pierre"
    }
  }'
```

An association identified by its *Journal Officiel* publication:

```bash
curl "$OPUSDNS_API_BASE/v1/contacts/attribute-sets" \
  --request POST \
  --header "X-Api-Key: $OPUSDNS_API_KEY" \
  --header "Content-Type: application/json" \
  --data '{
    "label": "FR registrant - association",
    "tld": "fr",
    "attributes": {
      "AFNIC_CONTACT_TYPE": "PM",
      "AFNIC_PM_LEGAL_STATUS": "association",
      "AFNIC_PM_ASSOC_PUBL_DATE": "2015-03-14T00:00:00Z",
      "AFNIC_PM_ASSOC_PUBL_PAGE": 118
    }
  }'
```

> ⚠️ **Reusing one contact for every role?** `AFNIC_CONTACT_TYPE` is required on the
> administrative and technical contacts too, not only the registrant. A create that carries it
> on the registrant alone is rejected before it reaches the registry:
>
> ```json
> {
>   "type": "policy-validation-error",
>   "title": "Policy Validation Error",
>   "status": 422,
>   "code": "ERROR_POLICY_VALIDATION",
>   "errors": [
>     {
>       "detail": "Attribute 'AFNIC_CONTACT_TYPE' is required for admin contacts",
>       "pointer": "contacts.admin[0].attributes.AFNIC_CONTACT_TYPE"
>     }
>   ],
>   "detail": "Policy validation failed"
> }
> ```

These constraints are machine-readable: each `possible_attributes` entry returned by
[`GET /v1/tlds/fr`](/api-reference#tag/tld/GET/v1/tlds/{tld}) carries its own `type`,
`values`, `required`, `contact_roles`, and `conditions` fields. Build forms from the
specification rather than hard-coding the `PP`/`PM` split.

## Contact handles

AFNIC assigns contact handles itself — a handle cannot be chosen when creating a contact, and an
existing AFNIC handle cannot be adopted through the API.

## Transfers and registrant changes

The registrant is **not** part of a `.fr` transfer request: an inbound transfer keeps the
registrant the domain already has at the registry. The administrative and technical contacts are
supplied with the transfer as usual.

To move a domain to a different holder, transfer it first and then change the registrant with a
domain update — `.fr` supports a registrant change through
[`PATCH /v1/domains/{domain_reference}`](/api-reference#tag/domain/PATCH/v1/domains/{domain_reference}).
