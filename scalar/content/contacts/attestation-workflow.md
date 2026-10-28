# Attestation workflow

When a registry flags one of your contacts for verification, follow this
workflow to identify the affected domains, review the required claims, and
submit attestations through the API.

For background on verification concepts (claims, methods, proofs, deadlines),
see the [Contact verification overview](/products/contacts/verification).
For how a request is tracked on each domain, and how each registry handles it, see [Verification cases](/products/contacts/verification-cases).

## Flow overview

1. Identify domains and contacts requiring verification.
2. Check which claims need to be attested for the affected contact.
3. Submit attestations with the appropriate method, proof, and reference.
4. Confirm the attestation result and track status tag removal.

## 1. Identify affected domains and contacts

When verification is required, both the affected **domains** and **contacts**
are tagged with `VERIFICATION_REQUIRED`.
Domains also list their active [verification cases](/products/contacts/verification-cases) in `active_verifications`, with the claims and deadlines of each case.

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
You can combine <code>status_tags</code> with <code>status_tag_mode</code> (<code>match_any</code>, <code>match_all</code>, or <code>match_none</code>) to control how multiple status tag filters are combined.
</scalar-callout>

### Check the active_verifications field on domains

Every domain response includes `active_verifications`: the domain's active verification cases, oldest first.
The list is empty when no verification is pending.

```bash
curl "$OPUSDNS_API_BASE/v1/domains/example.de" \
  --header "X-Api-Key: $OPUSDNS_API_KEY"
```

```json
{
  "domain_id": "domain_01jxe1nzrmf78scaqbkjx0va0f",
  "name": "example.de",
  "active_verifications": [
    {
      "verification_id": "domain_verification_01jxe1p4a2f7r8s9t0v1w2x3y4",
      "source": "REGISTRY",
      "trigger": "REGISTRY_REQUEST",
      "status": "OPEN",
      "claims": ["email", "name", "address"],
      "deadlines": [
        { "type": "verification", "date": "2026-07-15T00:00:00Z" },
        { "type": "dedelegation", "date": "2026-07-15T00:00:00Z" },
        { "type": "deletion", "date": "2026-08-15T00:00:00Z" }
      ],
      "contact_id": "contact_01jxe1nzrmf78scaqbkjx0va0f",
      "opened_on": "2026-06-15T00:00:00Z"
    }
  ]
}
```

### Verification fields

| Field | Type | Description |
| --- | --- | --- |
| `active_verifications` | `object[]` | The domain's active verification cases, at most one per source, oldest first. Empty when no verification is pending. |
| `active_verifications[].source` | `string` | `REGISTRY` or `ICANN`. |
| `active_verifications[].claims` | `string[]` | Identity claims that require verification: `name`, `legal_entity`, `address`, `email`, `phone`. Empty when the registry does not name them. |
| `active_verifications[].deadlines` | `object[]` | Deadlines with consequences if verification is not completed. |
| `active_verifications[].deadlines[].type` | `string` | `verification`: the date to act by, the earliest of the case's dates. `dedelegation`: DNS stops resolving. `deletion`: the domain is permanently removed. |
| `active_verifications[].deadlines[].date` | `string` | ISO 8601 UTC timestamp of the deadline. |
| `active_verifications[].contact_id` | `string` | The registrant contact to attest. |

All fields of a case are described in [Verification cases](/products/contacts/verification-cases#the-case).

<scalar-callout type="warning">
The field <code>verification_required</code> is deprecated. It merges all active cases into one <code>claims</code> list and the earliest date per deadline type, and it is <code>null</code> when nothing is pending. Read <code>active_verifications</code> instead.
</scalar-callout>

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
| `attestations[].claim` | Yes | The claim being verified. See [Claims](/products/contacts/verification#claims). |
| `attestations[].method` | Yes | How the claim is being verified. See [Methods](/products/contacts/verification#verification-methods). |
| `attestations[].proof` | Yes | The specific evidence type used. See [Proofs](/products/contacts/verification#verification-proofs). |
| `attestations[].attestation_reference` | Yes | Your reference identifier for the attestation (max 255 characters). |

### Attesting an eIDAS-based verification

Use method `AUTH` when the claim was verified by an eID provider under an
eIDAS-notified scheme.

For method `AUTH`, the `eid` object is required. A request that sets
`"method": "AUTH"` without an `eid` object is rejected.

```json
{
  "attestations": [
    {
      "claim": "NAME",
      "method": "AUTH",
      "proof": "IDCARD",
      "attestation_reference": "REF-2026-001",
      "eid": {
        "eid_scheme": "de-eid",
        "level_of_assurance": "HIGH"
      }
    }
  ]
}
```

| Field | Required | Description |
| --- | --- | --- |
| `attestations[].eid` | For method `AUTH` | Details of the eID scheme used. |
| `attestations[].eid.eid_scheme` | Yes | Scheme identifier from the table below. |
| `attestations[].eid.level_of_assurance` | Yes | `LOW`, `SUBSTANTIAL`, or `HIGH`. Must be a level the scheme is notified for. |

#### eID scheme identifiers

eIDAS schemes have no official machine-readable identifiers, so use the
identifiers below. The level columns show which levels of assurance each scheme
is notified for.

The notified schemes and their levels of assurance are maintained by the
European Commission. For the authoritative source, see the
[eIDAS Dashboard](https://eidas.ec.europa.eu/efda/notified-eid/); for a
consolidated overview, see
[Overview of pre-notified and notified eID schemes under eIDAS](https://ec.europa.eu/digital-building-blocks/sites/display/EIDCOMMUNITY/Overview+of+pre-notified+and+notified+eID+schemes+under+eIDAS)
in the eID User Community.

| eid_scheme              | country | scheme_name                                                   | LOW | SUBSTANTIAL | HIGH |
| ----------------------- | ------- | ------------------------------------------------------------- | --- | ----------- | ---- |
| `at-id-austria`         | AT      | ID Austria                                                    |     |             | ✓    |
| `be-fas-ecards`         | BE      | Belgian eID (FAS / eCards)                                    |     |             | ✓    |
| `be-fas-itsme`          | BE      | Belgian eID (FAS / itsme®)                                    |     |             | ✓    |
| `bg-evrotrust`          | BG      | Evrotrust eID                                                 | ✓   | ✓           | ✓    |
| `hr-nias`               | HR      | NIAS                                                          |     |             | ✓    |
| `cy-national-eid`       | CY      | Cyprus National eID                                           |     |             | ✓    |
| `cz-national`           | CZ      | National identification scheme                                |     |             | ✓    |
| `cz-mojeid`             | CZ      | Mobile eGovernment Key (mojeID)                               | ✓   | ✓           | ✓    |
| `dk-mitid`              | DK      | MitID eID                                                     |     | ✓           | ✓    |
| `ee-eid`                | EE      | Estonian eID (ID card, Digi-ID, Mobile-ID, e-Residency, etc.) |     |             | ✓    |
| `fi-citizen-cert`       | FI      | Citizen Certificate                                           |     |             | ✓    |
| `fr-franceconnect-plus` | FR      | FranceConnect+ / La Poste Digital Identity                    |     | ✓           |      |
| `fr-france-identite`    | FR      | France Identité                                               |     |             | ✓    |
| `de-eid`                | DE      | German eID (Extended Access Control)                          |     |             | ✓    |
| `it-cie`                | IT      | Italian eID - National ID card (CIE)                          | ✓   | ✓           | ✓    |
| `it-spid`               | IT      | SPID - Public System of Digital Identity                      | ✓   | ✓           | ✓    |
| `lv-eid`                | LV      | Latvian eID scheme                                            |     | ✓           | ✓    |
| `li-eid`                | LI      | eID.li                                                        |     | ✓           | ✓    |
| `lt-eid`                | LT      | Lithuanian National Identity card (eID/ATK)                   |     |             | ✓    |
| `lu-eid-card`           | LU      | Luxembourg national identity card                             |     |             | ✓    |
| `mt-identity-malta`     | MT      | Identity Malta                                                |     |             | ✓    |
| `nl-digid`              | NL      | DigiD                                                         |     | ✓           | ✓    |
| `nl-eherkenning`        | NL      | eHerkenning (Trust Framework)                                 |     | ✓           | ✓    |
| `no-bankid`             | NO      | Norwegian eID - BankID                                        |     |             | ✓    |
| `no-buypass`            | NO      | Norwegian eID - Buypass ID                                    |     |             | ✓    |
| `pl-peis`               | PL      | Public Electronic Identification System                       |     | ✓           | ✓    |
| `pt-cmd`                | PT      | Chave Móvel Digital                                           |     |             | ✓    |
| `pt-cartao-cidadao`     | PT      | Cartão de Cidadão                                             |     |             | ✓    |
| `ro-eid`                | RO      | Romanian eID scheme                                           |     | ✓           |      |
| `sk-national`           | SK      | National identity scheme                                      |     |             | ✓    |
| `si-eid-card`           | SI      | Slovenian eID card                                            |     |             | ✓    |
| `es-dnie`               | ES      | DNIe                                                          |     |             | ✓    |
| `se-eid`                | SE      | Swedish eID (Svensk e-legitimation)                           |     | ✓           | ✓    |

### Registry-specific constraints

Every attestation is stored with the contact.
DENIC and nic.at also receive it from OpusDNS, and add rules on top of the request format above.
These rules apply only while a case of that registry waits on the contact.

| TLD | Registry | What OpusDNS sends | Rules |
| --- | --- | --- | --- |
| `.de` | DENIC | Once the attested claims cover every claim DENIC's cases ask for, OpusDNS sends them to each DENIC handle of the contact and then syncs the contact's domains. | Every attestation DENIC can record needs an `attestation_reference`, which DENIC stores with the verification. Attestations with different methods, proofs or references are sent as separate entries. DENIC cannot record the proof `PHONE_VER_TRANSACTION_LOG`; such an attestation is stored but not sent. |
| `.at` | nic.at | Once name (or legal entity), address and email are verified, OpusDNS sends a verification report to each nic.at handle of the contact. When the contact is created at nic.at later, for another `.at` registration, the report goes along. | The evidence counts for three years. |

<scalar-callout type="warning">
A request that breaks a registry rule is rejected as a whole: no attestation in it is stored or sent.
</scalar-callout>

### ICANN email confirmation

An organization with delegated contact verification confirms its registrants' email addresses for ICANN by attesting the `EMAIL` claim with the method `REACHABILITY` and the proof `EMAIL_VER_TRANSACTION_LOG`.
It satisfies every active ICANN case of that email address in the organization.
For other organizations, the registrant confirms through the link in OpusDNS's mail, and an attested `EMAIL` claim counts for the registries only.
See [ICANN cases](/products/contacts/verification-cases#icann-cases).

### Response

The response returns the updated verification state for all claims — same
format as the GET endpoint.

### Error responses

| Status | Code | Meaning |
| --- | --- | --- |
| `400` | `ERROR_DOMAIN_VERIFICATION_MISSING_REFERENCE` | A DENIC case waits on the contact and an attestation DENIC can record has no `attestation_reference`. See [Registry-specific constraints](#registry-specific-constraints). |
| `404` | `ERROR_CONTACT_VERIFICATION_UPSTREAM_NOT_FOUND` | Contact has not been registered for verification. |
| `502` | `ERROR_CONTACT_VERIFICATION_UPSTREAM_ERROR` | Verification service temporarily unavailable. |

## 4. After attestation

The attest endpoint returns the updated verification state for all claims
directly in the response. You can immediately see whether each claim moved to
`VERIFIED` or `IN_PROGRESS`.

An attestation does not change the verification case itself.
The case stays active until the registry reports the verification as done.
The exception is the [ICANN email confirmation](#icann-email-confirmation), which satisfies the ICANN cases shortly after the attestation.
For DENIC, OpusDNS syncs the contact's domains right after sending the attestation, which picks up DENIC's answer.
Then OpusDNS automatically:

- closes the case as `SATISFIED`, so it leaves `active_verifications` on the domain;
- removes the `VERIFICATION_REQUIRED` status tag from the domain, and from the contact once none of its cases is active;
- logs a `DOMAIN` event of type `VERIFICATION` and subtype `SUCCESS`.

If any claims are still `IN_PROGRESS` after attestation (awaiting registry
confirmation), you can check back later using the GET endpoint:

```bash
curl "$OPUSDNS_API_BASE/v1/contacts/$CONTACT_ID/verifications" \
  --header "X-Api-Key: $OPUSDNS_API_KEY"
```

You can also follow the verification cases through the events API:

```bash
curl --get "$OPUSDNS_API_BASE/v1/events" \
  --header "X-Api-Key: $OPUSDNS_API_KEY" \
  --data-urlencode "object_type=DOMAIN" \
  --data-urlencode "type=VERIFICATION"
```

Or read a domain's cases, active and closed:

```bash
curl "$OPUSDNS_API_BASE/v1/domains/example.de/verifications" \
  --header "X-Api-Key: $OPUSDNS_API_KEY"
```

<scalar-callout type="info">
By default, the events API returns only pending (unacknowledged) events. Pass <code>acknowledged=true</code> to list events you have already acknowledged.
</scalar-callout>

## Troubleshooting

| Issue | Cause | Resolution |
| --- | --- | --- |
| `404` on GET verification status | Contact hasn't been flagged for verification yet. | Wait for the verification process to initialize, or check that you're using the correct contact ID. |
| `400` missing reference | A DENIC case waits on the contact and an attestation has no `attestation_reference`. | Send the request again with an `attestation_reference` on every attestation. See [Registry-specific constraints](#registry-specific-constraints). |
| Claims stuck in `IN_PROGRESS` | Registry hasn't confirmed the attestation yet. | Wait and poll again. Registry confirmation can take time. |
| Case still active after all claims are `VERIFIED` | The registry has not reported the verification as done yet, or it does not take attestations from OpusDNS. | For `.de` and `.at`, wait for the registry. For other registries, the holder completes the registry's own check; see [Registries](/products/contacts/verification-cases#registries). |
| Domain tag removed but contact tag remains | Another domain of the contact still has an active case. | Check the contact's other domains with `status_tags=VERIFICATION_REQUIRED`. |

## Next steps

- [Contact verification overview](/products/contacts/verification) — claims,
  methods, proofs, and deadline reference
- [Verification cases](/products/contacts/verification-cases): the case on each domain, its history, and how each registry opens and closes it
- [Initialize verification](/products/contacts/initialize-verification) —
  proactively register contacts for verification
