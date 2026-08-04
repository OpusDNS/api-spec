# Contact verification

Certain registries require domain holders to verify their identity. When a
registry flags one of your contacts for verification, OpusDNS detects the
requirement, notifies you, and provides API endpoints to submit the required
attestations before the registry-imposed deadlines.

This guide explains what contact verification is, when it applies, and what
the key concepts are. For step-by-step instructions, see the
[Attestation workflow](/products/contacts/attestation-workflow).

## How verification works

1. A registry (e.g., DENIC for `.de` domains) determines that a contact's
   identity needs to be verified.
2. OpusDNS receives the verification requirement and flags all affected domains
   and contacts.
3. You receive an email notification and a
   [`VERIFICATION`](/automation/events/event-object) event with details about the
   affected contacts and domains.
4. You submit attestations via the API to prove the contact's identity claims.
5. Once all claims are verified, the registry clears the deadlines and OpusDNS
   removes the verification flags automatically.

<scalar-callout type="warning">
Verification deadlines are enforced by the registry. If you do not complete verification in time, your domain may be de-delegated (DNS stops resolving) or ultimately deleted. Always act promptly when you receive a verification notification.
</scalar-callout>

## Claims

Claims represent what the registry needs verified about a contact:

| Claim | Description |
| --- | --- |
| `NAME` | The contact's first and last name. |
| `ADDRESS` | The contact's postal address. |
| `EMAIL` | The contact's email address. |
| `PHONE` | The contact's phone number. |
| `LEGAL_ENTITY` | The organization or company name. |

## Verification methods

How the identity claim is proven:

| Method | Description |
| --- | --- |
| `AUTH` | Authentication-based verification. |
| `VDIG` | Video identification (online ID check). |
| `ELECTRONIC_DOCUMENT` | Electronic or digital document verification. |
| `PHYSICAL_DOCUMENT` | Physical document verification (scanned or photographed). |
| `BVR` | Postal verification via registered letter. |
| `PVR` | Postal verification via standard mail. |
| `DATA` | Data-based verification (cross-referencing authoritative databases). |
| `REACHABILITY` | Reachability check (e.g., confirming email or phone access). |

## Verification proofs

The specific type of evidence used:

| Proof | Description |
| --- | --- |
| `IDCARD` | National identity card. |
| `PASSPORT` | Passport. |
| `POPULATION_REGISTER` | Population or civil register extract. |
| `RESIDENCE_PERMIT` | Residence permit. |
| `PROOF_OF_ARRIVAL` | Proof of arrival / registration confirmation. |
| `DRIVERS_LICENCE` | Driver's licence. |
| `COMPANY_REGISTER` | Commercial register extract. |
| `COMPANY_STATEMENT` | Company statement or declaration. |
| `BANK_ACCOUNT` | Bank account verification. |
| `ONLINE_PAYMENT_ACCOUNT` | Online payment account verification. |
| `UTILITY_ACCOUNT` | Utility provider account. |
| `BANK_STATEMENT` | Bank statement. |
| `TAX_STATEMENT` | Tax statement. |
| `WRITTEN_ATTESTATION` | Written attestation or declaration. |
| `DIGITAL_ATTESTATION` | Digital attestation. |
| `POSTAL_VER_TRANSACTION_LOG` | Postal verification transaction log. |
| `EMAIL_VER_TRANSACTION_LOG` | Email verification transaction log. |
| `ADDRESS_DATABASE` | Address database verification. |

## Common attestation examples

| Use case | Method | Proof |
| --- | --- | --- |
| Verify name with a passport | `PHYSICAL_DOCUMENT` | `PASSPORT` |
| Verify name with an ID card | `PHYSICAL_DOCUMENT` | `IDCARD` |
| Verify address with a utility bill | `DATA` | `UTILITY_ACCOUNT` |
| Verify email via confirmation link | `REACHABILITY` | `EMAIL_VER_TRANSACTION_LOG` |
| Verify company via commercial register | `DATA` | `COMPANY_REGISTER` |
| Verify identity via video call | `VDIG` | `IDCARD` or `PASSPORT` |

## Verification states

Each claim on a contact has a verification state:

| State | Meaning |
| --- | --- |
| `UNVERIFIED` | Claim has not been verified. Attestation is required. |
| `IN_PROGRESS` | Attestation submitted, awaiting confirmation from the registry. |
| `VERIFIED` | Claim successfully verified. No action needed. |
| `EXPIRED` | Previous verification has expired. Re-attestation is required. |

## Deadlines

Verification deadlines are set by the registry. Missing them has real
consequences for your domains:

| Deadline type | What happens |
| --- | --- |
| `dedelegation` | The domain's DNS delegation is removed — it stops resolving. This is reversible once verification is completed. |
| `deletion` | The domain is permanently deleted from the registry. This cannot be undone. |

Deadlines follow a predictable sequence:

1. **Notification** — you are informed that verification is required.
2. **De-delegation** — if not resolved, DNS is removed and the domain goes
   offline.
3. **Deletion** — the domain is permanently removed from the registry.

<scalar-callout type="warning">
Always complete verification well before the de-delegation deadline to avoid any service interruption. Once a domain is deleted by the registry, it cannot be recovered through OpusDNS.
</scalar-callout>

## Notifications

When verification is required, OpusDNS sends an email notification to your
organization with details about the affected contacts and domains.

You can configure where these notifications are sent in your organization
settings:

| Setting | Description |
| --- | --- |
| **Verification notification email** | A specific email address to receive verification notifications. |
| **Enable/disable notifications** | Toggle verification email notifications on or off. |

If no specific email is configured, notifications are sent to your
organization's admin users.

## Next steps

- [Attestation workflow](/products/contacts/attestation-workflow) — respond to
  registry-initiated verification requests step by step
- [Initialize verification](/products/contacts/initialize-verification) —
  proactively register and verify contacts before a registry requires it
- [Events](/automation/events/event-object) — monitor verification events
- [Tags](/products/tags/overview) — filter domains and contacts by status tags

## Related API reference

- [`GET /v1/contacts/{contact_id}/verifications`](/api-reference#tag/contact/GET/v1/contacts/{contact_id}/verifications)
- [`POST /v1/contacts/{contact_id}/verifications/attest`](/api-reference#tag/contact/POST/v1/contacts/{contact_id}/verifications/attest)
- [`GET /v1/contacts`](/api-reference#tag/contact/GET/v1/contacts)
- [`GET /v1/domains/{domain_reference}`](/api-reference#tag/domain/GET/v1/domains/{domain_reference})
- [`GET /v1/domains`](/api-reference#tag/domain/GET/v1/domains)
- [`GET /v1/events`](/api-reference#tag/event/GET/v1/events)
