# Initialize verification

<scalar-callout type="info">
This feature is coming soon. The endpoints described below are under active development and will be available in a future release.
</scalar-callout>

In addition to responding to registry-initiated verification requests, OpusDNS
will support **proactively registering contacts for verification** — allowing
you to verify identity claims before a registry requires it and to manage the
full verification lifecycle through the API.

## Why initialize verification proactively?

When a registry like DENIC flags a contact for verification, you are working
against a deadline. Proactive verification lets you:

- **Verify contacts ahead of time** — submit attestations before a registry
  imposes deadlines, so your domains are never at risk of de-delegation or
  deletion.
- **Stay compliant** — ensure all contacts meet NIS2 identity verification
  requirements without waiting for registry enforcement.
- **Manage the lifecycle** — keep contact data in sync with the verification
  system and re-attest when verifications expire.

## How it will work

### Register a contact for verification

You will be able to register a contact in the verification system, which
initializes verification records for all applicable claims (name, address,
email, phone, and legal entity where relevant):

```bash
curl "$OPUSDNS_API_BASE/v1/contacts/$CONTACT_ID/verifications/initialize" \
  --request POST \
  --header "X-Api-Key: $OPUSDNS_API_KEY" \
  --header "Content-Type: application/json"
```

Once registered, you can immediately submit attestations using the existing
[attestation workflow](/products/contacts/attestation-workflow) — the same
`attest` endpoint works for both registry-initiated and proactively initialized
verifications.

### Update contact data

If contact details change after registration (e.g., a new address or updated
email), updating the contact through the API may invalidate existing
verifications for the affected claims. Those claims will revert to `UNVERIFIED`
and require re-attestation.

### Verification expiry

Verified claims have an expiration date (typically one year from attestation).
When a verification expires, the claim state changes to `EXPIRED` and
re-attestation is required. You can monitor expiry dates in the verification
status response:

```json
{
  "claim": "NAME",
  "state": "VERIFIED",
  "method": "PHYSICAL_DOCUMENT",
  "proof": "PASSPORT",
  "attestation_reference": "REF-2026-001",
  "verified_on": "2026-05-10T14:30:00Z",
  "expires_on": "2027-05-10T14:30:00Z"
}
```

Plan ahead by tracking `expires_on` dates and re-submitting attestations before
they lapse.

### Pre-verification vs. post-verification

| Scenario | What to do |
| --- | --- |
| **New contact, no registry requirement yet** | Initialize verification and submit attestations proactively. When the registry eventually requires verification, the contact is already verified. |
| **Registry has flagged a contact** | Follow the [attestation workflow](/products/contacts/attestation-workflow) to respond before the deadline. |
| **Verification expired** | Re-submit attestations using the same `attest` endpoint. The claim will transition from `EXPIRED` back to `VERIFIED`. |
| **Contact data changed** | Update the contact. Any affected claims revert to `UNVERIFIED` — re-attest those claims. |

## What's coming

- **Initialize endpoint** — register any contact for verification proactively.
- **Contact data sync** — update contact details in the verification system
  when they change in OpusDNS.
- **Expiry notifications** — receive events and email notifications when
  verifications are approaching expiry.

## Next steps

- [Contact verification overview](/products/contacts/verification) — claims,
  methods, proofs, and deadline reference
- [Attestation workflow](/products/contacts/attestation-workflow) — respond to
  verification requests step by step
