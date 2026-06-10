## Contact Attributes

`.ca` registrations carry a registry-specific contact attribute beyond the standard EPP fields:

| Attribute | Type | Required | Applies to | Allowed values |
| --- | --- | --- | --- | --- |
| `CIRA_CPR` | Enum | ✅ Required | Domain Owner | Any code in the table below |
| `CIRA_CPR` | Enum | ➖ Optional | Administrator | `CCT`, `RES`, `LGR`, `ABO` |

CIRA requires the administrator contact to be an **individual**, so its optional `CIRA_CPR` value is limited to the four individual categories (`CCT`, `RES`, `LGR`, `ABO`). The domain owner may use any category.

> ⚠️ **Reusing one contact for every role?** Do not copy the domain owner's `CIRA_CPR` onto the administrator contact. A non-individual value such as `EDU` or `GOV` is valid for the domain owner but rejected for the administrator:
>
> ```json
> {
>   "type": "policy-validation-error",
>   "title": "Policy Validation Error",
>   "status": 422,
>   "code": "ERROR_POLICY_VALIDATION",
>   "errors": [
>     {
>       "detail": "Invalid value 'EDU' for attribute 'CIRA_CPR'. Allowed values: CCT, RES, LGR, ABO",
>       "pointer": "contacts.admin[0].attributes.CIRA_CPR"
>     }
>   ],
>   "detail": "Policy validation failed"
> }
> ```
>
> Since the administrator's `CIRA_CPR` is optional, the simplest approach is to omit it for non-registrant roles.

These per-role constraints are machine-readable: each `possible_attributes` entry returned by [`GET /v1/tlds/ca`](/api-reference#tag/tld/GET/v1/tlds/{tld}) carries its own `values`, `required`, and `contact_roles` fields. Integrations that build forms from the TLD specification should filter the allowed values by contact role rather than offering the domain owner's list for every contact.

## Canadian Presence Requirement (CIRA_CPR)

Every `.ca` domain must satisfy CIRA's [Canadian Presence Requirements](https://www.cira.ca/en/resources/documents/domains/canadian-presence-requirements-registrants/). The registrant declares which legal type establishes their Canadian presence through the `CIRA_CPR` attribute.

| Code | Legal type | Individual |
| --- | --- | --- |
| `ABO` | Aboriginal Peoples (individuals or groups) indigenous to Canada | ✅ |
| `ASS` | Canadian unincorporated association | ❌ |
| `CCO` | Canadian corporation, or Canadian province or territory | ❌ |
| `CCT` | Canadian citizen | ✅ |
| `EDU` | Canadian educational institution | ❌ |
| `GOV` | Government or government entity in Canada | ❌ |
| `HOP` | Canadian hospital | ❌ |
| `INB` | Indian Band recognized by the Indian Act of Canada | ❌ |
| `LAM` | Canadian library, archive, or museum | ❌ |
| `LGR` | Legal Representative of a Canadian Citizen or Permanent Resident | ✅ |
| `MAJ` | Her/His Majesty the Queen/King | ❌ |
| `OMK` | Official mark registered in Canada | ❌ |
| `PLT` | Canadian political party | ❌ |
| `PRT` | Partnership registered in Canada | ❌ |
| `RES` | Permanent resident of Canada | ✅ |
| `TDM` | Trade-mark registered in Canada (by a non-Canadian owner) | ❌ |
| `TRD` | Canadian trade union | ❌ |
| `TRS` | Trust established in Canada | ❌ |

Registrants whose legal type is `TDM` or `OMK` are exempt from the Canadian local-presence requirement: a Canadian-registered trade-mark or official mark satisfies the Canadian Presence Requirement on its own, so the registrant need not be located in Canada.

### Organization requirement for non-individual categories

A contact using a non-individual category must have its `org` field set. If it is missing, the request is rejected:

```json
{
  "detail": "Organization is required for non-individual CIRA CPR category 'GOV'",
  "pointer": "contact.org"
}
```
