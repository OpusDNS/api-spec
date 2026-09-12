## Contact Attributes

`.pt` registrations carry registry-specific contact attributes beyond the standard EPP fields:

| Attribute | Type | Required | Applies to | Allowed values |
| --- | --- | --- | --- | --- |
| `DNS_PT_VAT` | String | ✅ Required | All roles | VAT number or tax identification number of the contact |
| `DNS_PT_MOBILE` | String | ➖ Conditional | All roles | Mobile number in international format (e.g. `+351 92 2222222`) |

These per-attribute constraints are machine-readable: each `possible_attributes` entry returned by [`GET /v1/tlds/pt`](/api-reference#tag/tld/GET/v1/tlds/{tld}) carries its own `type`, `required`, and `contact_roles` fields.

## Fiscal number

`DNS_PT_VAT` is the fiscal identity of the contact and `.pt` treats it as the contact's unique key. Two contacts sharing a fiscal number are the same entity to the registry, so registering with a fiscal number it already knows reuses the existing registry contact rather than creating a second one, and the details already on file win.

Practical consequences:

- send the fiscal number that genuinely belongs to the contact, not a placeholder;
- the registry applies this across every registrar, so a fiscal number already registered through another provider resolves to that existing contact, and its details are the ones published;
- a contact whose details need correcting has to be updated rather than re-created under the same fiscal number;
- name and fiscal number cannot be changed afterwards. The data holder has to contact `.PT` directly to correct either.

For Portuguese contacts the fiscal number is validated for consistency and is used to tell a natural person from a legal one. Foreign contacts can supply the equivalent identifier from their own jurisdiction.

## Mobile number

`.pt` keeps a mobile number on every contact and uses it to verify the contact, so one always reaches the registry.

It is taken from the contact's `phone` whenever the numbering plan identifies that number as a mobile line. `DNS_PT_MOBILE` is only required when it does not, which covers landlines and numbering plans that never separate fixed from mobile lines - notably NANP, so every `+1` contact has to supply it explicitly.

> ⚠️ **Landline contact without a mobile?** Add `DNS_PT_MOBILE` to the contact's attributes:
>
> ```json
> {
>   "type": "policy-validation-error",
>   "title": "Policy Validation Error",
>   "status": 422,
>   "code": "ERROR_POLICY_VALIDATION",
>   "errors": [
>     {
>       "detail": "DNS_PT_MOBILE is required because the contact phone number is not a mobile line; .pt contacts need a mobile number for the RJC verification",
>       "pointer": "contacts.registrant[0].attributes.DNS_PT_MOBILE"
>     }
>   ],
>   "detail": "Policy validation failed"
> }
> ```

Supplying `DNS_PT_MOBILE` explicitly always overrides the derivation. Note that `.pt` stores a single phone number per contact and the mobile takes precedence, so it is the number that ends up on the contact at the registry.

## Contact verification

Portuguese law (the Cybersecurity Legal Regime, transposing NIS2) requires the data on every `.pt` contact to be verified as existing, correct, and belonging to the holder. `.pt` will not accept a registrant that has not been through it.

The registrant's **email address and phone number** both have to be verified before the contact can be used. Verification is submitted with [`POST /v1/contacts/{contact_id}/verifications/attest`](/api-reference#tag/contact/POST/v1/contacts/{contact_id}/verifications/attest) and the current per-claim state is readable at [`GET /v1/contacts/{contact_id}/verifications`](/api-reference#tag/contact/GET/v1/contacts/{contact_id}/verifications). The date the registry records is the moment the last required claim was verified.

A verification is **valid for 3 years**. It is required to register a domain, to receive one through an inbound transfer, and to change a domain's contacts. Renewals are exempt, so an expiring verification never blocks a renewal.

The requirement is published on the TLD itself: the `verification_policies.identity_verification` block of [`GET /v1/tlds/pt`](/api-reference#tag/tld/GET/v1/tlds/{tld}) lists the claims, the roles they apply to, the operations that trigger the check, and the validity period.

> ⚠️ **Contact not verified?** The request is refused before it reaches the registry, naming the claims that are missing:
>
> ```json
> {
>   "type": "policy-validation-error",
>   "title": "Policy Validation Error",
>   "status": 422,
>   "code": "ERROR_POLICY_VALIDATION",
>   "errors": [
>     {
>       "detail": "Contact contact_01jz…: has no verifications yet; EMAIL, PHONE must be verified before it can be used on this TLD",
>       "pointer": "contacts.registrant[0]"
>     }
>   ],
>   "detail": "Policy validation failed"
> }
> ```

## Contact roles

A `.pt` domain is managed with a registrant only:

| Role | Required |
| --- | --- |
| Registrant | ✅ Exactly one |
| Tech | ❌ Not accepted |
| Admin | ❌ Not accepted |
| Billing | ❌ Not accepted |

The registry derives the administrative and technical roles from the sponsoring registrar, so neither is a contact you supply. The technical role in particular is always the registrar's own registry handle, which is why it is neither accepted on a request nor reported back on the domain.

Contacts are only accepted in international (ASCII) form, so localized addresses are transliterated before they reach the registry.

## Transfers

A `.pt` transfer is **immediate**. The registry settles it on receipt rather than opening a transfer window, so there is no pending phase, no acknowledgement or rejection by the losing registrar, and no transfer notification to wait for. It does **not** extend the expiry date: the domain keeps the expiry it had.

A transfer request carries **no contacts**. The registrant travels with the domain and stays as it is, and the other roles belong to the registrar rather than to you, so there is nothing to send. Sending contacts is rejected.

Once the transfer completes, the domain is fully manageable: name servers, DNSSEC and the auth code are all yours to change immediately.

## Changing the holder

The holder of a `.pt` domain **cannot be changed through the API**. The registry does not accept it as a domain update, and a request that tries is refused.

`.PT` settles a change of holder through its own ownership-transfer process, which the incoming holder has to confirm directly with the registry. The incoming holder is subject to the same contact-verification rule as a new registration.

A domain whose holder changes that way stays with you as its registrar; only the holder moves.

## Domain deletion

Deleting a `.pt` domain starts a removal process at the registry rather than removing the name at once. The registry confirms the removal separately, and the domain remains visible until it does.

There is no redemption or restore for `.pt`: once a removal completes it cannot be undone, and the name returns to the pool under the registry's own rules.
