# Contact verification routes are going away

*29 October 2026*

Registrant verification now runs as [verification cases](/products/contacts/verification-cases) on domains: ICANN's email verification and the registries' requests alike.
The older per-contact verification routes are deprecated and will be removed:

| Environment | Removed on |
| --- | --- |
| Sandbox | 5 January 2027 |
| Production | 12 January 2027 |

Sandbox goes a week earlier, so you can check your integration there before production changes.

## What is removed

| Route | What it did | Use instead |
| --- | --- | --- |
| [`GET /v1/contacts/{contact_id}/verification`](/api-reference#tag/contact/GET/v1/contacts/{contact_id}/verification) | The status of the contact's email verification. | [`GET /v1/contacts/{contact_id}/verification-cases`](/api-reference#tag/contact/GET/v1/contacts/{contact_id}/verification-cases) for what the contact is asked to verify, on which domains and by when; [`GET /v1/contacts/{contact_id}/verifications`](/api-reference#tag/contact/GET/v1/contacts/{contact_id}/verifications) for what is verified. |
| [`POST /v1/contacts/{contact_id}/verification?type=email`](/api-reference#tag/contact/POST/v1/contacts/{contact_id}/verification) | Started or resent the verification mail. | Nothing to start: an ICANN case mails the registrant when it opens. To mail again, [`POST /v1/domains/{domain_reference}/verifications/{verification_id}/resend`](/api-reference#tag/domain/POST/v1/domains/{domain_reference}/verifications/{verification_id}/resend). |
| `POST /v1/contacts/{contact_id}/verification?type=api` and [`PUT /v1/contacts/{contact_id}/verification`](/api-reference#tag/contact/PUT/v1/contacts/{contact_id}/verification) | Let an organization with delegated contact verification confirm an email address with a token. | [`POST /v1/contacts/{contact_id}/verifications/attest`](/api-reference#tag/contact/POST/v1/contacts/{contact_id}/verifications/attest) with the `EMAIL` claim, the method `REACHABILITY` and the proof `EMAIL_VER_TRANSACTION_LOG`. |
| [`DELETE /v1/contacts/{contact_id}/verification`](/api-reference#tag/contact/DELETE/v1/contacts/{contact_id}/verification) | Canceled the verification. | Nothing: a case ends with its domain, when the domain is deleted or transferred away. |
| `GET` and `PUT /v1/contacts/verification` | Served the confirmation page behind the link in the mail. | Nothing: these were never meant for integrations. Registrants keep using the link in the mail. |

## What stays

- [`GET /v1/contacts/{contact_id}/verifications`](/api-reference#tag/contact/GET/v1/contacts/{contact_id}/verifications) and [`POST /v1/contacts/{contact_id}/verifications/attest`](/api-reference#tag/contact/POST/v1/contacts/{contact_id}/verifications/attest), with their plural `verifications`, are unchanged.
- `GET /v1/contacts/verify` stays for now: it is the link in the confirmation mail, not a route for integrations.

## Moving over

Reading what a contact still has to verify:

```bash
# Before (removed in January 2027)
curl "$OPUSDNS_API_BASE/v1/contacts/$CONTACT_ID/verification" \
  --header "X-Api-Key: $OPUSDNS_API_KEY"

# After
curl "$OPUSDNS_API_BASE/v1/contacts/$CONTACT_ID/verification-cases" \
  --header "X-Api-Key: $OPUSDNS_API_KEY"
```

Each case names the domain, who asks (`ICANN` or `REGISTRY`), the claims, the deadlines and its status, and stays in the list after it closes.

Sending the registrant a new confirmation mail:

```bash
# Before (removed in January 2027)
curl --request POST "$OPUSDNS_API_BASE/v1/contacts/$CONTACT_ID/verification?type=email" \
  --header "X-Api-Key: $OPUSDNS_API_KEY"

# After: per open ICANN case; one mail covers every case of the email address
curl --request POST \
  "$OPUSDNS_API_BASE/v1/domains/example.com/verifications/$VERIFICATION_ID/resend" \
  --header "X-Api-Key: $OPUSDNS_API_KEY"
```

To find a case's `verification_id`, read the domain's `active_verifications` or [`GET /v1/domains/{domain_reference}/verifications`](/api-reference#tag/domain/GET/v1/domains/{domain_reference}/verifications).

## What to do

1. Search your integration for `/verification` without the trailing `s` on contact routes.
2. Replace each call as listed above.
3. Test against sandbox before 5 January 2027.

## Related

- [Verification cases](/products/contacts/verification-cases), including [ICANN cases](/products/contacts/verification-cases#icann-cases)
- [Attestation workflow](/products/contacts/attestation-workflow)
- [Changelog, 28 October 2026](/changelog)
