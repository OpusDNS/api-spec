# Contact verification

Certain registries require domain holders to verify their identity. When a
registry flags one of your contacts for verification, OpusDNS detects the
requirement, notifies you, and provides API endpoints to submit the required
attestations before the registry-imposed deadlines.

This guide explains how contact verification works, how to check which domains
are affected, and how to resolve verification requirements through the API.

## How verification works

1. A registry (e.g., DENIC for `.de` domains) determines that a contact's
   identity needs to be verified.
2. OpusDNS receives the verification requirement and flags all affected domains.
3. You receive an email notification with details about the affected contacts
   and domains.
4. You submit attestations via the API to prove the contact's identity claims.
5. Once all claims are verified, the registry clears the deadlines and OpusDNS
   removes the verification flags automatically.

<scalar-callout type="warning">
Verification deadlines are enforced by the registry. If you do not complete verification in time, your domain may be de-delegated (DNS stops resolving) or ultimately deleted. Always act promptly when you receive a verification notification.
</scalar-callout>

## Flow overview

1. Identify domains requiring verification.
2. Check which claims need to be attested for the affected contact.
3. Submit attestations with the appropriate method, proof, and reference.
4. Confirm the attestation result and track status tag removal.

## 1. Identify affected domains and contacts

When verification is required, both the affected **domains** and **contacts**
are tagged with `VERIFICATION_REQUIRED`. Domains also include a
`verification_required` field in their response containing the specific claims
and deadlines.

### Filter domains by status tag

List all domains currently requiring verification:

```bash
curl --get "$OPUSDNS_API_BASE/v1/domains" \
  --header "X-Api-Key: $OPUSDNS_API_KEY" \
  --data-urlencode "status_tags=VERIFICATION_REQUIRED"
```

### Filter contacts by status tag

List all contacts currently requiring verification:

```bash
curl --get "$OPUSDNS_API_BASE/v1/contacts" \
  --header "X-Api-Key: $OPUSDNS_API_KEY" \
  --data-urlencode "status_tags=VERIFICATION_REQUIRED" \
  --data-urlencode "include=tags"
```

The response includes a `status_tags` field on each contact when `include=tags`
is specified:

```json
{
  "contact_id": "contact_01jxe1nzrmf78scaqbkjx0va0f",
  "first_name": "Jane",
  "last_name": "Smith",
  "status_tags": [
    {
      "label": "VERIFICATION REQUIRED",
      "type": "VERIFICATION_REQUIRED"
    }
  ]
}
```

<scalar-callout type="info">
You can combine <code>status_tags</code> with <code>status_tag_mode</code> (<code>match_any</code> or <code>match_all</code>) to control how multiple status tag filters are combined.
</scalar-callout>

### Check the verification_required field on domains

Every domain response includes a `verification_required` field. When
verification is needed, it contains the pending claims and deadlines. When no
verification is required, it is `null`.

```bash
curl "$OPUSDNS_API_BASE/v1/domains/example.de" \
  --header "X-Api-Key: $OPUSDNS_API_KEY"
```

```json
{
  "domain_id": "domain_01jxe1nzrmf78scaqbkjx0va0f",
  "name": "example.de",
  "verification_required": {
    "claims": ["email", "name", "address"],
    "deadlines": [
      {
        "type": "dedelegation",
        "date": "2026-07-15T00:00:00Z"
      },
      {
        "type": "deletion",
        "date": "2026-08-15T00:00:00Z"
      }
    ]
  }
}
```

When no verification is pending, the field is `null`:

```json
{
  "domain_id": "domain_01jxe1nzrmf78scaqbkjx0va0f",
  "name": "example.de",
  "verification_required": null
}
```

### Verification fields

| Field | Type | Description |
| --- | --- | --- |
| `verification_required` | `object \| null` | Present when verification is required, `null` otherwise. |
| `verification_required.claims` | `string[]` | Identity claims that require verification. Values: `name`, `address`, `email`, `phone`. |
| `verification_required.deadlines` | `object[]` | Registry-imposed deadlines with consequences if verification is not completed. |
| `verification_required.deadlines[].type` | `string` | `dedelegation` — DNS stops resolving. `deletion` — domain is permanently removed. |
| `verification_required.deadlines[].date` | `string` | ISO 8601 UTC timestamp of the deadline. |

## 2. Check verification status

Retrieve the current verification state for a contact. This returns the status
of each individual claim:

```bash
curl "$OPUSDNS_API_BASE/v1/contacts/$CONTACT_ID/verifications" \
  --header "X-Api-Key: $OPUSDNS_API_KEY"
```

### Response

```json
{
  "verifications": [
    {
      "claim": "NAME",
      "state": "VERIFIED",
      "method": "PHYSICAL_DOCUMENT",
      "proof": "PASSPORT",
      "attestation_reference": "REF-2026-001",
      "verified_on": "2026-05-10T14:30:00Z",
      "expires_on": "2027-05-10T14:30:00Z"
    },
    {
      "claim": "ADDRESS",
      "state": "UNVERIFIED",
      "method": null,
      "proof": null,
      "attestation_reference": null,
      "verified_on": null,
      "expires_on": null
    },
    {
      "claim": "EMAIL",
      "state": "IN_PROGRESS",
      "method": "REACHABILITY",
      "proof": "EMAIL_VER_TRANSACTION_LOG",
      "attestation_reference": "email-verif-20260518",
      "verified_on": null,
      "expires_on": null
    }
  ]
}
```

### Verification states

| State | Meaning |
| --- | --- |
| `UNVERIFIED` | Claim has not been verified. Attestation is required. |
| `IN_PROGRESS` | Attestation submitted, awaiting confirmation from the registry. |
| `VERIFIED` | Claim successfully verified. No action needed. |
| `EXPIRED` | Previous verification has expired. Re-attestation is required. |

### Error responses

| Status | Meaning |
| --- | --- |
| `404` | Contact has not yet been flagged for verification. This typically means verification has not been initiated for this contact. |
| `502` | The verification service is temporarily unavailable. Retry later. |

## 3. Submit attestations

Submit one or more attestations to verify identity claims for a contact:

```bash
curl "$OPUSDNS_API_BASE/v1/contacts/$CONTACT_ID/verifications/attest" \
  --request POST \
  --header "X-Api-Key: $OPUSDNS_API_KEY" \
  --header "Content-Type: application/json" \
  --data '{
    "attestations": [
      {
        "claim": "NAME",
        "method": "PHYSICAL_DOCUMENT",
        "proof": "PASSPORT",
        "attestation_reference": "REF-2026-001"
      },
      {
        "claim": "ADDRESS",
        "method": "PHYSICAL_DOCUMENT",
        "proof": "PASSPORT",
        "attestation_reference": "REF-2026-001"
      }
    ]
  }'
```

### Request fields

| Field | Required | Description |
| --- | --- | --- |
| `attestations` | Yes | Array of attestation objects (max 50 per request). |
| `attestations[].claim` | Yes | The claim being verified. See [Claims](#claims). |
| `attestations[].method` | Yes | How the claim is being verified. See [Methods](#verification-methods). |
| `attestations[].proof` | Yes | The specific evidence type used. See [Proofs](#verification-proofs). |
| `attestations[].attestation_reference` | Yes | Your reference identifier for the attestation (max 255 characters). |

### Response

The response returns the updated verification state for all claims — same
format as the GET endpoint.

<scalar-callout type="info">
<strong>.de domain constraint:</strong> When the contact is a registrant on <code>.de</code> domains that currently require verification, all attestations in a single request <strong>must</strong> share the same <code>method</code>, <code>proof</code>, and <code>attestation_reference</code>. This is a DENIC registry limitation — submit separate requests if you need different methods or proofs for different claims.
</scalar-callout>

### Error responses

| Status | Code | Meaning |
| --- | --- | --- |
| `400` | `ERROR_DOMAIN_VERIFICATION_INCONSISTENT_METHOD_PROOF` | Attestations in the request use different methods or proofs (not allowed for `.de`). |
| `404` | `ERROR_CONTACT_VERIFICATION_UPSTREAM_NOT_FOUND` | Contact has not been registered for verification. |
| `502` | `ERROR_CONTACT_VERIFICATION_UPSTREAM_ERROR` | Verification service temporarily unavailable. |

## 4. After attestation

The attest endpoint returns the updated verification state for all claims
directly in the response. You can immediately see whether each claim moved to
`VERIFIED` or `IN_PROGRESS`.

Once all claims reach the `VERIFIED` state, the registry clears the deadlines.
OpusDNS automatically:

- Removes the `VERIFICATION_REQUIRED` status tag from the **contact** immediately after successful attestation.
- Removes the `VERIFICATION_REQUIRED` status tag from affected **domains** on the next domain sync.
- Sets `verification_required` to `null` on affected domain responses.

If any claims are still `IN_PROGRESS` after attestation (awaiting registry
confirmation), you can check back later using the GET endpoint:

```bash
curl "$OPUSDNS_API_BASE/v1/contacts/$CONTACT_ID/verifications" \
  --header "X-Api-Key: $OPUSDNS_API_KEY"
```

You can also monitor verification-related events through the events API:

```bash
curl --get "$OPUSDNS_API_BASE/v1/events" \
  --header "X-Api-Key: $OPUSDNS_API_KEY" \
  --data-urlencode "object_type=CONTACT" \
  --data-urlencode "type=VERIFICATION"
```

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

## Troubleshooting

| Issue | Cause | Resolution |
| --- | --- | --- |
| `404` on GET verification status | Contact hasn't been flagged for verification yet. | Wait for the verification process to initialize, or check that you're using the correct contact ID. |
| `400` inconsistent method/proof | Multiple attestations use different methods or proofs in one request (`.de` restriction). | Submit separate requests — one per method/proof combination. |
| Claims stuck in `IN_PROGRESS` | Registry hasn't confirmed the attestation yet. | Wait and poll again. Registry confirmation can take time. |
| Contact tag removed but domain tag remains | Contact tag is removed immediately after attestation; domain tags are cleared on the next sync cycle. | Wait a few minutes for the domain sync to run. |
| `verification_required` still present after `VERIFIED` | Domain hasn't synced yet. | The field is cleared on the next domain sync cycle. This typically happens within minutes. |

## Next steps

- [Manage a domain](/products/domains/manage) — update domain settings
- [Events overview](/products/events/overview) — monitor verification events
- [Tags](/products/tags/overview) — filter domains and contacts by status tags

## Related API reference

- [`GET /v1/contacts/{contact_id}/verifications`](/api-reference#tag/contact/GET/v1/contacts/{contact_id}/verifications)
- [`POST /v1/contacts/{contact_id}/verifications/attest`](/api-reference#tag/contact/POST/v1/contacts/{contact_id}/verifications/attest)
- [`GET /v1/contacts`](/api-reference#tag/contact/GET/v1/contacts)
- [`GET /v1/domains/{domain_reference}`](/api-reference#tag/domain/GET/v1/domains/{domain_reference})
- [`GET /v1/domains`](/api-reference#tag/domain/GET/v1/domains)
- [`GET /v1/events`](/api-reference#tag/event/GET/v1/events)
