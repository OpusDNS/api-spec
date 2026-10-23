# .at: NIS2 holder verification

*23 October 2026*

Since 1 October 2026, the Austrian NIS2 law (NISG 2026) requires nic.at to make sure that the holder data of `.at` domains is correct and complete.
When nic.at finds anomalies in a holder's data, it asks the registrar to verify that domain holder.
This page explains what that means for your `.at` domains, how OpusDNS handles nic.at's requests, and what you need to do.

## What nic.at checks

nic.at requests a verification only for specific domains, when its checks of the stored holder data find anomalies.
The holder data has to be correct and complete:

- the full name, with the legal form for an organisation;
- the postal address;
- the email address;
- the phone number, which is mandatory for new `.at` registrations since 1 October 2026.

## nic.at's timeline

| When | What happens |
| --- | --- |
| Request | nic.at asks the registrar to verify the holder. The holder data has to be verified within 14 days. |
| After 14 days | nic.at sends a reminder with a final deadline of 7 more days. If the verification through the registrar has not succeeded, nic.at may also contact the holder directly. |
| After 21 days | nic.at suspends the domain (`serverHold`): the website and the email addresses on the domain stop working. |
| 30 days later | If the holder is still not verified, nic.at revokes the domain. It is deleted about eight weeks later and can then be registered by anyone. |

The dates in nic.at's request are binding; the table shows nic.at's general rules.

## How OpusDNS handles a request

1. nic.at sends OpusDNS a "Domain holder verification required" message for the domain, with its date.
2. OpusDNS opens a [verification case](/products/contacts/verification-cases) on the domain. It asks for the claims `name`, `address` and `email`, and its `verification` deadline is nic.at's date.
3. You see the request in three places:
   - the domain's `active_verifications`, in [`GET /v1/domains`](/api-reference#tag/domain/GET/v1/domains) and [`GET /v1/domains/{domain_reference}`](/api-reference#tag/domain/GET/v1/domains/{domain_reference});
   - the status tag `VERIFICATION_REQUIRED` on the domain and its registrant contact;
   - a `DOMAIN` event of type `VERIFICATION` and subtype `NOTIFICATION` in [`GET /v1/events`](/api-reference#tag/event/GET/v1/events).
4. Once the registrant's name (or legal entity), address and email are attested, OpusDNS sends nic.at a verification report for each nic.at handle of the contact.
5. When nic.at confirms with "Domain holder verification successful", OpusDNS closes the case, removes the tag and logs a `SUCCESS` event.

## What you need to do

1. Check the domain holder's identity and data, and keep the evidence on file.
   For example: an ID card or passport for a person's name, a company register extract for an organisation, a registration form or utility bill for the address, and a confirmation link for the email address.
2. Attest the registrant contact's name (or legal entity), address and email with [`POST /v1/contacts/{contact_id}/verifications/attest`](/api-reference#tag/contact/POST/v1/contacts/{contact_id}/verifications/attest), or in the dashboard on the contact.
   The [Attestation workflow](/products/contacts/attestation-workflow) lists the methods and proofs, with a request example.
3. Do this before the deadline in the case.

An attestation stays valid for three years.
It covers every `.at` domain of that contact, and nic.at also receives it when the contact is created at nic.at for a later registration.

If the holder data itself is wrong, correct it with a registrant change.
The open case then moves to the new registrant, who still needs the attestation.

## More information

- [Verification cases](/products/contacts/verification-cases): the case on each domain, its history and how each registry handles it
- [`.at` operations](/products/tld-operations/at#domain-holder-verification)
- nic.at: [NIS2 / NISG 2026 FAQ](https://www.nic.at/en/how-at-works/faqs/nis2-nisg2026-en)
- nic.at: [What's changing for .at domains as of 1 October 2026](https://www.nic.at/en/news/nic-at/nisg-2026-whats-changing-for-at-domains-as-of-1-october-2026)

Questions? Contact [support@opusdns.com](mailto:support@opusdns.com).
