## Contact Attributes

`.lv` uses the **LvContact** EPP extension (`http://www.nic.lv/epp/schema/lvcontact-ext-1.0`) to carry two registry-specific identifiers. They are only relevant when a contact is used as the **registrant** (holder) of a domain; admin and tech contacts never carry them.

| Attribute | Type | Required | Applies to | Notes |
| --- | --- | --- | --- | --- |
| `NIC_LV_REG_NR` | String | Conditional | Registrant | Personal code (Latvian natural person) or enterprise registration number (Latvian company). Required for a Latvian registrant. |
| `NIC_LV_VAT_NR` | String | Optional | Registrant | EU VAT number. Used by a foreign EU legal entity (and, optionally, a Latvian company). |

### What each identifier is

- **`NIC_LV_REG_NR`** maps to `lvcontact:regNr`:
   - for a Latvian **natural person** (no `org`), it holds the personal code (e.g. `010171-10123`);
   - for a Latvian **company** (with `org`), it holds the registration number from the Latvian Register of Enterprises.
- **`NIC_LV_VAT_NR`** maps to `lvcontact:vatNr`: the EU VAT number (e.g. `LV40003014197`).

Whether a contact is a legal entity or a natural person is decided by the presence or absence of `org`: a non-empty `org` means a legal entity, otherwise a natural person. The registry validates the deeper semantics (real personal code, enterprise number, VAT) itself.

### Who provides what

`.lv` has **no local-presence requirement**: a registrant may be a Latvian or a foreign person or company.

| Registrant | `NIC_LV_REG_NR` | `NIC_LV_VAT_NR` | LvContact extension sent |
| --- | --- | --- | --- |
| Latvian company | Enterprise registration number | VAT (optional) | ✅ |
| Latvian natural person | Personal code | - | ✅ |
| Foreign EU legal entity | - | EU VAT number | ✅ (vatNr only) |
| Foreign non-EU | - | - | ❌ (no extension) |

Only the validation we can enforce up front is applied: a Latvian registrant must carry `NIC_LV_REG_NR`, and any value provided must satisfy the registry schema (`lvcontact:orgRegNoType`: 3-20 characters of letters, digits and `#:./-`). The full personal-code / VAT semantics are left to the registry. These rules run only for `.lv` domain operations; they are never enforced on the generic contact endpoint.

## Per-role rules

`.lv` always associates four contacts with a domain, but only two are managed by the registrar:

- **registrant** and **administrative** contacts are sent by us;
- **billing** (the registrar's primary person) and **technical** (one of the registrar's hostmasters) are assigned by the registry through `__DEFAULT__`, so they are not part of the request.

Cross-role rules enforced before the request reaches the registry:

- the **administrative contact must be a natural person** (no `org`);
- when the holder (registrant) is a **natural person**, the administrative contact must reference the **same contact** as the registrant;
- changing the registrant is a **trade** (transfer of the right to use the domain), performed through `domain:update` with a new holder, not a contact swap.

## Nameservers

`.lv` does **not** implement host objects (RFC 5732). Nameservers are attributes of the domain and are sent as `domain:hostAttr`; a subordinate (in-bailiwick) host carries its glue address inline. Between 2 and 5 nameservers are allowed, and at least 2 are required for the domain to be published in the zone.

## Postal address

Only a single `loc` postal address is accepted; an `int`-only contact is rejected by the registry with `2003 Missing postal address for contact!`. For Latvian contacts (`cc = LV`) the registry expects the postal code in `LV-NNNN` form (four digits), but this is a registry-side rule and is never forced from the generic contact endpoint.

## Registration period and renewal

Only **1-year** registrations are accepted over EPP. There is no EPP `domain:renew` command on `.lv`; renewal is handled by the registry out of band (invoicing). An unpaid or breached domain enters a **30-day hold** before deletion.

## AuthInfo

The domain authInfo must be acceptable to the registry's runtime password policy; a reused or weak value is rejected with `2306 Please, choose different AuthInfo`. A freshly generated random auth code is used, which always satisfies it.

## IDN

The registry is IDN-capable (Latvian diacritics), but IDN support is **not enabled** for `.lv` in our configuration yet.
