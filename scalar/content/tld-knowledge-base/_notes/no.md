## Registration model

`.no` registrations are **deferred**: `POST /v1/domains` validates the request, reserves billing and creates the registry contacts, but the domain is only registered at Norid after the **applicant declaration** is signed. The registrant receives an email with a signing link; the declaration expires after **30 days** (with reminder emails), at which point the request is cancelled and refunded.

## Contact Attributes

`.no` registrations identify the **registrant** (subscriber) through a registry-verified identity:

| Attribute | Type | Required | Applies to | Allowed values |
| --- | --- | --- | --- | --- |
| `NOR_ID_IDENTITY_TYPE` | Enum | ✅ Yes | Registrant | `organizationNumber`, `anonymousPersonIdentifier`, `localIdentity` |
| `NOR_ID_IDENTITY_VALUE` | String | ✅ Yes | Registrant | See below |
| `NOR_ID_CONTACT_TYPE` | Enum | ➖ Optional | Any | `person`, `organization`, `role` (derived automatically when omitted) |

- `organizationNumber`:
  - a 9-digit organization number registered in the [Brønnøysund register](https://www.brreg.no/) (MOD11 check digit). 
  - Requires an **organization** contact (`org` field set).
- `anonymousPersonIdentifier`: 
  - a Norid person ID in the `N.PRI.xxxxxxxx` format, created by the registrant with [Norid's personal ID tool](https://pid.norid.no/). 
  - Requires a **person** contact (no `org`).
- The contact type is derived from the contact: 
  - `org` set → `organization`, otherwise `person`. 
  - Technical contacts are always created as `role` contacts (Norid requirement) and carry no identity.

## Identity verification by the registry

Norid cross-checks the contact data against the official Norwegian registers at contact creation:

- **Organizations**: the organization number must match the organization name in the Brønnøysund register (`EC004033 Name and identity mismatch`).
- **Persons**: the contact name must match the person registered for the personal ID in the National Population Register (Folkeregisteret), also `EC004033`. The match is case-insensitive but **strict about Norwegian letters**: a name registered as `Aktiv Ærfugl` is rejected when submitted as `AKTIV AERFUGL` (transliterated `AE`/`OE`/`AA` forms are not accepted). Use the exact spelling with `Æ`, `Ø`, `Å`.

## Registrant address

The subscriber must have a **Norwegian postal address**: country `NO` and a 4-digit Norwegian postcode matching the Norwegian postal service's address lists. Both are validated before any registry contact is created:

- a non-`NO` registrant country is rejected (local presence policy);
- a postcode that is not a 4-digit Norwegian postcode is rejected with a `422` pointing at `contacts.registrant[0].postal_code`.

Technical contacts may have foreign addresses.

## Applicant declaration

- The declaration is signed on a hosted page linked from the registrant email - resellers can also submit a signed declaration through the API.
- For **person** registrants the declaration must be signed by the subscriber: 
  - the signed name must match the registrant contact name;
  - it gets compared case-insensitively, accepting transliterated Norwegian letters; 
  - A mismatch returns `400`, `ERROR_NORID_DECLARATION_NAME_MISMATCH`.
- For **organization** registrants the signer is any person authorized by the organization, so the signed name is free text.
- The signature (name, date, IP, user agent) is stored for auditing and sent to Norid. The registrant receives a copy of the data by email.
