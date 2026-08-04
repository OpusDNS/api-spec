# Initialize verification

<scalar-callout type="info">
This feature is coming soon and is under active development.
</scalar-callout>

In addition to responding to registry-initiated verification requests, OpusDNS
will allow you to **trigger verification processes directly** — initiating
email confirmations, identity checks, and other verification flows for your
contacts without waiting for a registry to require them.

## Why verify proactively?

When a registry like DENIC flags a contact for verification, you are working
against a deadline. By triggering verification ahead of time, you can:

- **Avoid deadline pressure** — contacts are already verified when the registry
  eventually requires it, so your domains are never at risk.
- **Stay NIS2 compliant** — meet identity verification requirements without
  waiting for registry enforcement.

## Verification flows

OpusDNS will support triggering the following verification processes directly
for your registrants:

- **Email verification** — sends a confirmation email to the contact. Once the
  registrant confirms, the `EMAIL` claim is verified automatically.
- **Identity verification** — initiates an identity check session (e.g., video
  identification or document upload) where the registrant verifies their name
  and address directly.

These flows are managed end-to-end by OpusDNS — you trigger them, the
registrant completes the required steps, and the claim states update
automatically.

You can also combine triggered flows with
[external attestations](/products/contacts/attestation-workflow) — for example,
trigger an email verification for the `EMAIL` claim while submitting a document
attestation for the `NAME` claim.

## Next steps

- [Contact verification overview](/products/contacts/verification) — claims,
  methods, proofs, and deadline reference
- [Attestation workflow](/products/contacts/attestation-workflow) — respond to
  verification requests step by step
