# Initialize verification

<scalar-callout type="info">
This feature is coming soon. The endpoints described below are under active development and will be available in a future release.
</scalar-callout>

In addition to responding to registry-initiated verification requests, OpusDNS
will allow you to **trigger verification processes directly** — initiating
email confirmations, identity checks, and other verification flows for your
contacts without waiting for a registry to require them.

## Why trigger verification proactively?

When a registry like DENIC flags a contact for verification, you are working
against a deadline. Proactive verification lets you:

- **Verify contacts ahead of time** — complete verification before a registry
  imposes deadlines, so your domains are never at risk of de-delegation or
  deletion.
- **Stay compliant** — ensure all contacts meet NIS2 identity verification
  requirements without waiting for registry enforcement.
- **Automate verification flows** — trigger email reachability checks, identity
  verification sessions, and other processes directly through the API instead of
  managing them externally.

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

Once registered, you can trigger verification processes or submit attestations
for any of the contact's claims.

### Trigger verification processes

Instead of only submitting external attestations, you will be able to kick off
verification flows that OpusDNS manages on your behalf:

- **Email verification** — send a confirmation email to the contact's address.
  Once the registrant confirms, the `EMAIL` claim transitions to `VERIFIED`
  automatically.
- **Identity verification** — initiate an identity check session (e.g., video
  identification or document upload) where the registrant verifies their name
  and address directly.

These flows handle the verification end-to-end — you trigger them via the API,
the registrant completes the required steps, and the claim states update
automatically.

### Combine with attestations

You can use both approaches together:

| Approach | Best for |
| --- | --- |
| **Trigger a verification process** | Claims you want OpusDNS to verify directly with the registrant (e.g., email reachability, identity check). |
| **Submit an attestation** | Claims you have already verified externally (e.g., passport checked in person, address confirmed via utility bill). |

For example, you might trigger an email verification flow for the `EMAIL` claim
while submitting a `PHYSICAL_DOCUMENT` attestation for the `NAME` claim — both
in the same verification lifecycle.

### Verification expiry

Verified claims have an expiration date (typically one year from verification).
When a verification expires, the claim state changes to `EXPIRED` and
re-verification is required. You can monitor expiry dates in the verification
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

Plan ahead by tracking `expires_on` dates and re-triggering verification or
re-submitting attestations before they lapse.

## What's coming

- **Initialize endpoint** — register any contact for verification proactively.
- **Email verification flow** — trigger email reachability checks directly
  through the API.
- **Identity verification flow** — initiate identity check sessions for
  registrants.
- **Expiry notifications** — receive events and email notifications when
  verifications are approaching expiry.

## Next steps

- [Contact verification overview](/products/contacts/verification) — claims,
  methods, proofs, and deadline reference
- [Attestation workflow](/products/contacts/attestation-workflow) — respond to
  verification requests step by step
