# 🇲🇽 .mx — Mexico

> The **.mx** is a country-code top-level domain (ccTLD) operated by Registry .MX. This article documents the technical, operational, and contractual requirements for the TLD, along with special considerations for registry, registrar, and domain management.

## General Information

| Property | Value |
| --- | --- |
| TLD Type | ccTLD |
| Registry | Registry .MX |
| Registry Country | Mexico |
| Registry Website | [www.registry.mx](https://www.registry.mx) |
| Provisioning Protocol | EPP |
| Second-Level Registration | ✅ Yes |
| Accreditation Required | ✅ Yes |

## Domain Lifecycle

| Property | Value |
| --- | --- |
| Registration Period | 1–5 years |
| Renewal Period | 1–5 years |
| Transfer Renewal Period | 1 year |
| Deletion Policy | Immediate |
| Auto-Renew Enabled | ❌ No |
| Auto-Renewal Before Expiry | On expiration |
| Sync After Operations | registration, transfer |

**Grace periods**

| Period | Duration |
| --- | --- |
| Add Grace Period | 0 days |
| Standard Grace Period | 0 days |
| Redemption Period | 30 days |
| Pending Restore | 0 days |
| Pending Delete | 0 days |

## Launch Phases & Availability

| Property | Value |
| --- | --- |
| General Availability | ✅ TLD is live |
| TMCH / Trademark Claims | ❌ No |

## Domain Characteristics

| Property | Value |
| --- | --- |
| Domain Length | 3–63 characters |
| IDN Support | ❌ No |
| Premium Domains | ❌ No |
| Reserved Domains | ✅ Yes |
| Registry Lock | ❌ No |

## Contacts & Roles

| Property | Value |
| --- | --- |
| Required Contacts | Domain Owner, Administrator, Technical Contact, Billing Contact |
| Supported Roles | Domain Owner, Administrator, Technical Contact, Billing Contact |
| Thick WHOIS | ✅ Yes |
| Privacy Proxy Allowed | ❌ No |
| Contacts Transferable | ❌ No |
| Allowed Postal Types | Local |
| AuthInfo Required | ✅ Yes (6–20 characters) |

## Nameservers & DNS

| Property | Value |
| --- | --- |
| Nameserver Count | 0–10 |
| Host Objects Allowed | ✅ Yes |
| Registry Nameserver Check | ✅ Yes |
| DNSSEC Allowed | ✅ Yes |
| DNSSEC Required | ❌ No |
| DNSSEC Mode | DS |
| CZDS (Zone Download) | ❌ No |

## Transfer Policy

| Property | Value |
| --- | --- |
| Transfer Lock Enabled | ✅ Yes (0 days after registration; 0 days after transfer) |
| Transfer Duration | 5 days |
| Transfer Extends Domain | ✅ Yes (+1 year) |
| Transfer via AuthInfo | ✅ Yes |
| Confirmation Required | ✅ Yes (registrar) |

## WHOIS & RDAP

| Property | Value |
| --- | --- |
| WHOIS Server | `whois.mx` |

## Dispute Resolution

| Property | Value |
| --- | --- |
| Dispute Resolution Available | ❌ No |

## Registration Levels

`.mx` is registered both directly at the second level (`example.mx`) and under two third-level structures:

| Level | Example |
| --- | --- |
| `mx` | `example.mx` |
| `com.mx` | `example.com.mx` |
| `org.mx` | `example.org.mx` |

All three are served by the same registry and share the specification returned by [`GET /v1/tlds/mx`](/api-reference#tag/tld/GET/v1/tlds/{tld}).

## Contacts

`.mx` is a thick registry and requires **all four roles** — registrant, administrative, technical and billing — with exactly one contact each. They are mandatory on a registration, on a transfer request and on any update that changes contacts; omitting one is rejected before the request reaches the registry.

Every contact is checked against the registry's own `contact:create` rules first, so a value the registry would refuse surfaces as a `422` rather than as a registry error:

| Field | Requirement |
| --- | --- |
| `first_name` + `last_name` | 3 to 95 characters |
| `org` | at most 100 characters |
| `street` | at most 100 characters |
| `city` | at most 35 characters |
| `state` | ✅ Required, at most 30 characters |
| `postal_code` | at most 10 characters |
| `email` | 6 to 100 characters |

`state` is the notable one: RFC 5733 treats it as optional and the registry does not, so a `.mx` contact without a state or province is rejected.

### The state must match the registry catalogue

For addresses in **Mexico, the United States and Canada** the registry keeps a catalogue of state names, and `state` has to be spelled exactly as it appears there. Any other country is free text.

Two consequences are worth noting:

- Mexican states are catalogued in Spanish, with their accents: `Ciudad de México`, `Nuevo León`, `Querétaro`, `Michoacán`, `Yucatán`, `San Luis Potosí`. `Ciudad de Mexico` is not the same string.
- The Canadian catalogue uses `Quebec` without an accent and `Yukon Territory` rather than `Yukon`.

> ⚠️ A state the registry does not catalogue for that country is rejected up front:
>
> ```json
> {
>   "type": "policy-validation-error",
>   "title": "Policy Validation Error",
>   "status": 422,
>   "code": "ERROR_POLICY_VALIDATION",
>   "errors": [
>     {
>       "detail": "'Mexico City' is not a state Registry .MX catalogues for MX; it must be spelled exactly as in the .mx state catalogue",
>       "pointer": "contacts.registrant[0]"
>     }
>   ],
>   "detail": "Policy validation failed"
> }
> ```

### Contact data is always public

The registry does not implement `contact:disclose`. Every element of a contact is published in full, and there is no privacy or proxy service to opt into. Use contact data the holder is willing to see published.

### Contacts are not deleted or transferred at the registry

Each registrar keeps its contacts in its own repository, and the registry supports neither deleting nor transferring them. A contact that is no longer referenced by a domain remains in the repository.

## Transfers

A `.mx` transfer is requested with the auth code and settled by the losing registrar, who approves or rejects it. Without a response from them, the registry approves it automatically once the transfer window elapses.

- The transfer request carries **no period**. The registry renews the domain for **one year** once the transfer is approved, and that renewal is not optional.
- **All four contacts are required on the transfer request**, exactly as on a registration. They are applied to the domain once the transfer completes.
- Contacts do **not** move with the domain. The handles the losing registrar had on it remain in their repository and are never readable by the gaining registrar, so nothing is imported from them: the domain carries the contacts supplied in the transfer request.
- Subordinate hosts are transferred along with the domain. While the request is pending, they carry `pendingTransfer` too.

See [`POST /v1/domains/transfer`](/api-reference#tag/domain/POST/v1/domains/transfer).

## Deletion and Restore

`.mx` implements no RGP. A deleted domain enters **`pendingDelete` for 30 days**, and that window is the 30 day redemption period listed above: the domain is restorable throughout it, the `redemptionPeriod` status never appears, and there is no restore report to file afterwards.

Restoring during those 30 days is a normal [`POST /v1/domains/{domain_reference}/restore`](/api-reference#tag/domain/POST/v1/domains/{domain_reference}/restore). Once they elapse the domain is permanently deleted and the name returns to the available pool.

A restore extends the registration by one year only when the domain is already past its expiry date. A domain deleted before expiry is restored with the expiry date it had.

## Registry Notifications

Registry .MX reports what it does to a domain through its own notifications, and the changes are reconciled onto the domain automatically. The notifications are:

| Notification | What it means |
| --- | --- |
| Suspension for non-payment | The registry suspended the domain; it stops resolving |
| Suspension for phishing | Suspended by the registry's abuse process |
| Suspension by external authority | Suspended on the instruction of an authority outside the registry |
| Release of a suspension | The phishing or external-authority suspension was lifted |
| Pending creation of a reserved name | The registration is held while the registry waits for supporting documents |
| Entered or restored from `pendingDelete` | The 30 day restore window opened or was closed by a restore |
| Cession | The domain was ceded and is no longer in the portfolio |

Suspensions are applied by the registry and cannot be lifted over EPP: clearing one is arranged with the registry directly, through the process that caused it.
