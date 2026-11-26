# 🇪🇺 .eu — European Union

> The **.eu** is a country-code top-level domain (ccTLD) operated by EURid vzw/asbl. This article documents the technical, operational, and contractual requirements for the TLD, along with special considerations for registry, registrar, and domain management.

## General Information

| Property | Value |
| --- | --- |
| TLD Type | ccTLD |
| Registry | EURid vzw/asbl |
| Registry Country | Belgium |
| Registry Website | [eurid.eu](http://eurid.eu/) |
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
| Auto-Renew Enabled | ✅ Yes |
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
| Domain Length | 2–63 characters |
| IDN Support | ✅ Yes |
| Premium Domains | ❌ No |
| Reserved Domains | ❌ No |
| Registry Lock | ✅ Yes |

## Contacts & Roles

| Property | Value |
| --- | --- |
| Required Contacts | Domain Owner, Technical Contact |
| Supported Roles | Domain Owner, Technical Contact |
| Thick WHOIS | ✅ Yes |
| Privacy Proxy Allowed | ❌ No |
| Contacts Transferable | ❌ No |
| Allowed Postal Types | Local |
| AuthInfo Required | ✅ Yes (8–32 characters) |

## Nameservers & DNS

| Property | Value |
| --- | --- |
| Nameserver Count | 0–9 |
| Host Objects Allowed | ❌ No |
| Registry Nameserver Check | ❌ No |
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
| Transfer via AuthInfo | ✅ Yes |
| Confirmation Required | ❌ No |

## WHOIS & RDAP

| Property | Value |
| --- | --- |
| WHOIS Server | `whois.eurid.eu` |

## Dispute Resolution

| Property | Value |
| --- | --- |
| Dispute Resolution Available | ✅ Yes |
| Procedure | ADR |
| Reference | [eu.adr.eu](http://eu.adr.eu/) |
| UDRP Support | ❌ No |
| URS Support | ❌ No |

## Registrant eligibility

A `.eu` domain can be registered by a natural person who resides in the European Economic Area (EEA), by an organization established in the EEA, and by a citizen of an EEA country who lives outside it. On this page, the EEA means the European Union, including its territories, together with Iceland, Liechtenstein and Norway.

Set the registrant's `country` to the country where the registrant resides. Do not enter the country of citizenship in `country`: a citizen who lives outside the EEA declares the citizenship with the `EURID_COUNTRY_OF_CITIZENSHIP` attribute described below.

## Contact Attributes

`.eu` takes a registry-specific attribute on the **registrant** contact, beyond the standard contact fields:

| Attribute | Type | Required | Applies to | Allowed values |
| --- | --- | --- | --- | --- |
| `EURID_COUNTRY_OF_CITIZENSHIP` | Enum | ➖ Conditional | Registrant | Country code of an EEA country |

The attribute holds the two-letter ISO 3166-1 code of the registrant's country of citizenship. The accepted codes are those of the 27 member states of the European Union and of Iceland, Liechtenstein and Norway: `AT`, `BE`, `BG`, `CY`, `CZ`, `DE`, `DK`, `EE`, `ES`, `FI`, `FR`, `GR`, `HR`, `HU`, `IE`, `IT`, `LT`, `LU`, `LV`, `MT`, `NL`, `PL`, `PT`, `RO`, `SE`, `SI`, `SK`, `IS`, `LI` and `NO`.

Whether the attribute is required depends on the registrant:

| Registrant | `EURID_COUNTRY_OF_CITIZENSHIP` |
| --- | --- |
| Natural person (no `org`) whose `country` is outside the EEA | Required |
| Natural person (no `org`) whose `country` is in the EEA | Optional |
| Organization (`org` set) | Refused |

A registration with [`POST /v1/domains`](/api-reference#tag/domain/POST/v1/domains), a transfer with [`POST /v1/domains/transfer`](/api-reference#tag/domain/POST/v1/domains/transfer) or a change of registrant with [`PATCH /v1/domains/{domain_reference}`](/api-reference#tag/domain/PATCH/v1/domains/{domain_reference}) is refused with `422` when the registrant does not follow these rules:

- a registrant whose `country` is outside the EEA and that sends no `EURID_COUNTRY_OF_CITIZENSHIP` is refused because the contact country is not eligible for `.eu`;
- an organization that sends `EURID_COUNTRY_OF_CITIZENSHIP` is refused, and the error points at the attribute.

### Sending the attribute

Send the attribute in one of two ways:

- **Inline**, on the domain request. Send `contacts.registrant` as a list, with the attribute in the `attributes` of its entry:

  ```json
  {
    "contact_id": "contact_01h45ytscbebyvny4gc8cr8ma2",
    "attributes": {
      "EURID_COUNTRY_OF_CITIZENSHIP": "PT"
    }
  }
  ```

- **Stored on the contact**, in a contact attribute set for the TLD `eu`, created with [`POST /v1/contacts/attribute-sets`](/api-reference#tag/contact/POST/v1/contacts/attribute-sets) and linked to the contact with [`PATCH /v1/contacts/{contact_id}/link/{contact_attribute_set_id}`](/api-reference#tag/contact/PATCH/v1/contacts/{contact_id}/link/{contact_attribute_set_id}). The value is then applied whenever the contact is the registrant of a `.eu` domain. See [Registry-specific attributes](/products/domains/registry-attributes).

The attribute is listed in the `possible_attributes` returned by [`GET /v1/tlds/eu`](/api-reference#tag/tld/GET/v1/tlds/{tld}), with its `values` and `contact_roles`. Its `required` field is `false`, because whether the attribute is required depends on the `org` and `country` of the registrant, as described above. The country rule is the `.eu` local presence requirement in the same response: `local_presence.eligible_countries` lists the EEA countries, and `local_presence.exemptions` names `EURID_COUNTRY_OF_CITIZENSHIP`, which exempts the registrant from it.
