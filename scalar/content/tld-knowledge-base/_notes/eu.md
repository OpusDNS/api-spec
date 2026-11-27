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
