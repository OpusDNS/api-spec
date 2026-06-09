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
