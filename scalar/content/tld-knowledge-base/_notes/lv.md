## Contact Attributes

`.lv` registrations carry two registry-specific contact attributes beyond the standard EPP fields. They identify the **registrant** (holder) of the domain:

| Attribute | Type | Required | Applies to | Allowed values |
| --- | --- | --- | --- | --- |
| `NIC_LV_REG_NR` | String | ➖ Conditional | Registrant | Registration number, 3-20 characters (letters, digits and `#:./-`) |
| `NIC_LV_VAT_NR` | String | ➖ Conditional | Registrant | VAT number, 3-20 characters (letters, digits and `#:./-`) |

- `NIC_LV_REG_NR` holds a **registration number**: a personal code for a natural person, or a company registration number for a legal entity.
- `NIC_LV_VAT_NR` holds a **VAT number**.

Which attribute is required depends on the registrant:

| Registrant | Required attribute |
| --- | --- |
| Latvian (natural person or legal entity) | `NIC_LV_REG_NR` |
| Foreign EU legal entity | `NIC_LV_VAT_NR` |
| Foreign non-EU | none |

These constraints are machine-readable: each `possible_attributes` entry returned by [`GET /v1/tlds/lv`](/api-reference#tag/tld/GET/v1/tlds/{tld}) carries its own `type`, `required`, and `contact_roles` fields.

## Contact roles

A `.lv` domain is managed with a registrant and an administrative contact. Two role rules apply:

- the **administrative contact must be a natural person** (no `org`);
- when the **registrant is a natural person**, the administrative contact must reference the **same contact** as the registrant.

> ⚠️ **Reusing one contact for every role?** When the registrant is a natural person, the admin has to be that same contact:
>
> ```json
> {
>   "type": "policy-validation-error",
>   "title": "Policy Validation Error",
>   "status": 422,
>   "code": "ERROR_POLICY_VALIDATION",
>   "errors": [
>     {
>       "detail": "When the .lv holder is a natural person, the administrative contact must be the same contact as the registrant",
>       "pointer": "contacts.admin"
>     }
>   ],
>   "detail": "Policy validation failed"
> }
> ```

## Transfers

On an inbound transfer the registrant and administrative contact are preserved as they already are on the domain — they cannot be set in the transfer request:

- the **registrant** cannot be changed through a transfer or a domain update;
- the **administrative contact** is kept during the transfer. When the registrant is an organization, the admin is a separate individual and can be changed with a domain update afterwards. When the registrant is a natural person, the admin is the same contact as the registrant, so it changes only when the registrant changes.

The billing and technical contacts are managed automatically and are set when the transfer completes; they are not part of the transfer request.
