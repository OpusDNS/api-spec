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
