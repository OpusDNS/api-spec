# Verification cases

When a registry or ICANN asks to verify the registrant of a domain, OpusDNS opens a verification case on that domain.
The case records what has to be verified, by when, and how the request ended.

This guide explains the case, how it appears on domain reads, how to read a domain's case history, and how each registry opens and closes cases.
For claims, methods and proofs, see [Contact verification](/products/contacts/verification).
To submit evidence, see the [Attestation workflow](/products/contacts/attestation-workflow).

## The case

| Field | Description |
| --- | --- |
| `verification_id` | The case ID, a TypeID with the prefix `domain_verification_`. Verification events carry the same ID. |
| `source` | Who asks for the verification: `REGISTRY` (the registry, for example under NIS2) or `ICANN` (ICANN's registrant verification). |
| `trigger` | What opened the case. See [Triggers](#triggers). |
| `status` | Where the case stands. See [Statuses](#statuses). |
| `claims` | What has to be verified about the registrant: `name`, `legal_entity`, `address`, `email` or `phone`. Empty when the source does not say. |
| `deadlines` | The case's deadlines. See [Deadlines](#deadlines). |
| `contact_id` | The registrant contact the case is about. |
| `opened_on` | When the case was opened. |
| `closed_on` | When the case was closed, `null` while it is active. Only in the [case history](#case-history). |
| `close_reason` | Why the case was closed, `null` while it is active. Only in the [case history](#case-history). |

A domain has at most one active case per source.
Today, OpusDNS opens cases for registry requests; the `ICANN` source is reserved for ICANN registrant verification.

### Statuses

`OPEN`, `SUBMITTED` and `OVERDUE` are active statuses; the other statuses close the case.

| Status | Meaning |
| --- | --- |
| `OPEN` | Waiting for evidence or for the registry. |
| `SUBMITTED` | Evidence was submitted and the case waits for the registry. |
| `OVERDUE` | The verification deadline passed while the case was open. |
| `SATISFIED` | The verification is done. Close reason `EVIDENCE_VERIFIED` or `REGISTRY_CLEARED`. |
| `FAILED` | The registry rejected the verification. Close reason `REGISTRY_REJECTED`. |
| `CANCELED` | The case ended without a verification. Close reason `SUPERSEDED`, `DOMAIN_DELETED`, `TRANSFERRED_OUT` or `TRANSFER_ABORTED`. |

<scalar-callout type="info">
OpusDNS does not move cases to <code>SUBMITTED</code> or <code>OVERDUE</code> yet. Accept both values in your integration, together with any value added to these lists later.
</scalar-callout>

### Triggers

| Trigger | Meaning |
| --- | --- |
| `CREATE` | The domain was registered. |
| `REGISTRANT_CHANGE` | The domain's registrant changed. |
| `TRANSFER` | The domain was transferred in. |
| `REGISTRY_REQUEST` | A registry message or a registry sync asked for the verification. |
| `BACKFILL` | The case was created from registry messages that arrived before verification cases existed. |

### Close reasons

| Close reason | Meaning |
| --- | --- |
| `EVIDENCE_VERIFIED` | The evidence was verified. |
| `REGISTRY_CLEARED` | The registry reported the verification as done. |
| `REGISTRY_REJECTED` | The registry rejected the verification. |
| `SUPERSEDED` | A newer case for another registrant or another owner replaced it. |
| `DOMAIN_DELETED` | The domain was deleted. |
| `TRANSFERRED_OUT` | The domain was transferred away from OpusDNS. |
| `TRANSFER_ABORTED` | The transfer that opened the case did not complete. |

## Deadlines

Each deadline is an object with a `type` and a `date`, listed in the order `verification`, `dedelegation`, `deletion`.

| Type | Meaning |
| --- | --- |
| `verification` | The date to act by. It is present whenever the case has any date, and it is the earliest of the case's dates. |
| `dedelegation` | The date the registry takes the domain out of DNS. |
| `deletion` | The date the registry deletes the domain. |

A registry either states the date to act by itself (nic.at, Internetstiftelsen) or only names the consequences (DENIC).
In the second case, the `verification` deadline is the earliest consequence date, usually the `dedelegation` date:

```json
"deadlines": [
  { "type": "verification", "date": "2026-11-20T13:01:05Z" },
  { "type": "dedelegation", "date": "2026-11-20T13:01:05Z" },
  { "type": "deletion", "date": "2027-02-18T13:01:05Z" }
]
```

When the registry moves or drops a date, the deadlines follow.

<scalar-callout type="warning">
Deadlines are enforced by the registry. A domain that is not verified in time can be taken out of DNS and, later, deleted.
</scalar-callout>

## Active cases on domain reads

Every domain read, [`GET /v1/domains`](/api-reference#tag/domain/GET/v1/domains) and [`GET /v1/domains/{domain_reference}`](/api-reference#tag/domain/GET/v1/domains/{domain_reference}), carries the domain's active cases in `active_verifications`:

```json
{
  "domain_id": "domain_01jxe1nzrmf78scaqbkjx0va0f",
  "name": "example.at",
  "active_verifications": [
    {
      "verification_id": "domain_verification_01jxe1p4a2f7r8s9t0v1w2x3y4",
      "source": "REGISTRY",
      "trigger": "REGISTRY_REQUEST",
      "status": "OPEN",
      "claims": ["address", "name", "email"],
      "deadlines": [
        { "type": "verification", "date": "2026-11-05T08:00:00Z" }
      ],
      "contact_id": "contact_01jxe1nzrmf78scaqbkjx0va0f",
      "opened_on": "2026-10-22T09:14:03Z"
    }
  ]
}
```

- The list is always present, and empty when no case is active.
- It holds at most one case per source.
- It is ordered oldest first, by `opened_on`.
- It lists only the cases of the domain's current owner.

To list every domain with an active case, filter by the [status tag](#status-tag):

```bash
curl --get "$OPUSDNS_API_BASE/v1/domains" \
  --header "X-Api-Key: $OPUSDNS_API_KEY" \
  --data-urlencode "status_tags=VERIFICATION_REQUIRED"
```

<scalar-callout type="warning">
The field <code>verification_required</code> is deprecated. It merges all active cases into one <code>claims</code> list and the earliest date per deadline type, and it is <code>null</code> when no case is active. Read <code>active_verifications</code> instead.
</scalar-callout>

## Case history

[`GET /v1/domains/{domain_reference}/verifications`](/api-reference#tag/domain/GET/v1/domains/{domain_reference}/verifications) lists a domain's cases, active and closed, newest first.
`domain_reference` is the domain's ID or name, and the endpoint needs the `domains:read` permission.
It is paginated with `page` and `page_size` (default 10, at most 1000).

```bash
curl "$OPUSDNS_API_BASE/v1/domains/example.de/verifications" \
  --header "X-Api-Key: $OPUSDNS_API_KEY"
```

```json
{
  "results": [
    {
      "verification_id": "domain_verification_01jxe1p4a2f7r8s9t0v1w2x3y4",
      "source": "REGISTRY",
      "trigger": "REGISTRY_REQUEST",
      "status": "SATISFIED",
      "claims": ["address", "name"],
      "deadlines": [
        { "type": "verification", "date": "2026-11-20T13:01:05Z" },
        { "type": "dedelegation", "date": "2026-11-20T13:01:05Z" },
        { "type": "deletion", "date": "2027-02-18T13:01:05Z" }
      ],
      "contact_id": "contact_01jxe1nzrmf78scaqbkjx0va0f",
      "opened_on": "2026-10-21T13:01:05Z",
      "closed_on": "2026-10-24T08:42:17Z",
      "close_reason": "REGISTRY_CLEARED"
    }
  ],
  "pagination": {
    "current_page": 1,
    "page_size": 10,
    "total_items": 1,
    "total_pages": 1,
    "has_next_page": false,
    "has_previous_page": false
  }
}
```

The history holds only the cases from while your organization owns the domain.

## Status tag

The status tag `VERIFICATION_REQUIRED` is set on a domain exactly while it has an active case, and removed when the last active case closes.
The registrant contact carries the same tag while one of its cases is active.
See [Status tags](/automation/tags/status-tags).

## Events

Every change to a case logs a `DOMAIN` event of type `VERIFICATION`, whose `object_id` is the domain name:

| Subtype | When |
| --- | --- |
| `NOTIFICATION` | A case opened, or its claims or deadlines changed. |
| `SUCCESS` | The case was satisfied. |
| `FAILURE` | The registry rejected the verification. |
| `CANCELED` | The case ended without a verification. |
| `OVERDUE` | The verification deadline passed while the case was open. |

The event's `details` carry the case ID, the source, the claims, the deadlines and the registrant.
See [Verification details](/automation/events/event-object#verification-details).

When a registry asks to verify a contact rather than a domain (DENIC, DNS Belgium and Punktum dk can), OpusDNS also emails your organization.
See [Notifications](/products/contacts/verification#notifications).

## Case lifecycle

- **Registrant change.** When the registrant changes, the active registry case moves to the new registrant with the same claims and deadlines. If the new registrant has the same email address or registry handle, the case continues. Otherwise the case closes as `CANCELED` with `SUPERSEDED`, and a new case opens with the trigger `REGISTRANT_CHANGE`.
- **Domain deleted or transferred out.** The domain's active cases close with `DOMAIN_DELETED` or `TRANSFERRED_OUT`. A transfer that does not complete closes its case with `TRANSFER_ABORTED`.
- **Domain moved to another organization.** The active cases move with the domain and stay open.

## Registries

| Registry | A case opens on | It closes on | Claims | Deadlines | How the verification is done |
| --- | --- | --- | --- | --- | --- |
| DENIC (`.de`) | A request about a contact, for every domain of that contact; the domain's registry data | DENIC reports the contact verified, or its data no longer shows a deadline | From DENIC's request | `verification`, `dedelegation`, `deletion` | You [attest](/products/contacts/attestation-workflow) the claims; OpusDNS sends the attestation to DENIC. |
| nic.at (`.at`) | "Domain holder verification required", and nic.at's reminder | "Domain holder verification successful" | `name`, `address`, `email` | `verification` | You attest name (or legal entity), address and email; OpusDNS sends the verification report to nic.at. |
| Internetstiftelsen (`.se`) | "Registrant data needs verification before" a date | "Registrant verified" or "Data control flag removed" | none | `verification` | The registry checks the holder's data. If it fails the check, correct it with a registrant change. |
| DNS Belgium (`.be`) | "Verification required" for a domain or a contact | "Verification approved" | none | none | The holder verifies with DNS Belgium, which contacts the holder directly. |
| Punktum dk (`.dk`) | A contact's ID, data or email check | The check is completed | none | none | The holder completes Punktum dk's check. |
| DNS.pt (`.pt`) | A proof request | No clearing message is processed | none | none | The holder answers DNS.pt's proof request. |
| EURid (`.eu`) | A registrant validation scheduled for suspension | The scheduled suspension is cleared | none | none | The holder verifies at [my.eurid.eu](https://my.eurid.eu). |

Attestations for registries that do not take them from OpusDNS are stored with the contact, but they do not close the case.
The case closes when the registry reports the verification as done.

## Related API reference

- [`GET /v1/domains/{domain_reference}/verifications`](/api-reference#tag/domain/GET/v1/domains/{domain_reference}/verifications)
- [`GET /v1/domains/{domain_reference}`](/api-reference#tag/domain/GET/v1/domains/{domain_reference})
- [`GET /v1/domains`](/api-reference#tag/domain/GET/v1/domains)
- [`POST /v1/contacts/{contact_id}/verifications/attest`](/api-reference#tag/contact/POST/v1/contacts/{contact_id}/verifications/attest)
- [`GET /v1/events`](/api-reference#tag/event/GET/v1/events)
