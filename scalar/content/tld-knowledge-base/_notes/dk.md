## Registration model

A `.dk` registration is an **application**, not an immediate allocation. [`POST /v1/domains`](/api-reference#tag/domain/POST/v1/domains) is accepted and the request enters a registry queue that clears in anything from a few seconds to a few days. The domain does not exist at the registry until it does, and a lookup before then reports the name as unavailable with the reason `Enqueued`.

Once the queue clears, a second gate applies: the domain is **activated only after the registrant's data and ID control has completed**. Both gates are reported through registry notifications, described below.

Registrations and renewals are **one year**, and no other period is accepted.

## Contacts

`.dk` is a thick registry that recognises a **registrant only**. Administrative, technical and billing contacts are not supported and are rejected if supplied.

Contact handles are minted by the registry; a handle supplied on a create is ignored. Contacts can be neither deleted nor transferred at the registry, and a contact that is no longer referenced is removed automatically once it has been unused for 14 days.

### Contact attributes

| Attribute | Type | Required | Applies to |
| --- | --- | --- | --- |
| `PUNKTUM_DK_USER_TYPE` | Enum | ✅ Yes | Registrant |
| `PUNKTUM_DK_CVR` | String | Conditional | Legal entities |
| `PUNKTUM_DK_PNUMBER` | String | ➖ Optional | Legal entities |
| `PUNKTUM_DK_EAN` | String | ➖ Optional | Danish legal entities |
| `PUNKTUM_DK_SECONDARY_EMAIL` | String | ➖ Optional | Any |
| `PUNKTUM_DK_MOBILEPHONE` | String | ➖ Optional | Any |
| `PUNKTUM_DK_SOLE_PROPRIETORSHIP` | Boolean | ➖ Optional | Foreign contacts |

`PUNKTUM_DK_USER_TYPE` is one of `company`, `public_organization`, `association` or `individual`, and it determines how the remaining attributes are interpreted.

`PUNKTUM_DK_CVR` carries the Danish CVR number or a European VAT number. It is **mandatory for a Danish company, public organization or association**, optional elsewhere in the EU and EEA, and **not supported for an `individual`** — supplying it on an individual contact is rejected.

`PUNKTUM_DK_EAN`, when supplied, must correspond to the CVR number on the same contact.

`PUNKTUM_DK_SOLE_PROPRIETORSHIP` applies only to contacts outside Denmark. Danish contacts are classified from the CVR register and the attribute is rejected on them.

### Contact data is maintained by the registry

Once a contact is matched to an authoritative register, the registry takes ownership of its name and address and keeps them in step with that register:

- Danish individuals are bound to the Central Person Register (CPR).
- Danish companies, public organizations and associations are bound to the Central Business Register (CVR).
- Companies elsewhere in the EU are bound through their VAT number and the VIES service.

For those contacts, name and address are maintained by the registry and changes submitted through the API do not take effect. Contacts outside those categories are maintained normally.

The registry does not implement `contact:disclose`, and there is no privacy or proxy service.

## Data and ID control

Danish law requires the registry to hold verified contact information for every `.dk` registrant. The control is run by **Punktum dk**, not by the registrar, and it is free of charge.

### How it runs

1. The domain is registered and remains **inactive**.
2. Punktum dk emails the registrant with a request for data and ID control.
3. The registrant completes the control on Punktum dk's self-service portal.
4. The domain is activated.

**Registrants residing in Denmark** identify themselves with **MitID**, the Danish national electronic identity, and confirm their CPR or CVR number on Punktum dk's portal. The number is matched against the register and then discarded. There is no way to complete this step on the registrant's behalf: the CPR number is never transmitted over the registry's interface and never reaches the registrar.

**Registrants residing outside Denmark** are assessed on a risk basis. Many are activated without any ID control at all. Those the registry does flag are asked to supply documentation proving their identity and address.

In both cases the registrant may additionally be asked to confirm their email address by replying to a verification message.

### Deadlines

**Every request states its own deadline**, and that date is the one to work from. The registry's terms set the response window at **25 days**, shortened to 10 in exceptional circumstances, but the deadline attached to a given request is what governs it.

A control request that expires or is rejected suspends the registrant's domains, and the registrant is recorded as unknown. The suspension applies to **every domain held by that registrant**, not only the one that triggered the control. If the control is still incomplete **30 days** later, those domains are deleted.

Email confirmation requests are far shorter lived than identity checks, often expiring within a day or two of being issued.

### Changing a verified email address

An email address that has been verified must be verified again after it is changed, and the change only takes effect once that happens. This applies to both the primary and the secondary address.

## Registrant change

A change of registrant is submitted through [`PATCH /v1/domains/{domain_reference}`](/api-reference#tag/domain/PATCH/v1/domains/{domain_reference}) and is subject to two registry rules:

- It **cannot be combined with any other change**. A request that alters the registrant along with name servers, contacts or the auth code is rejected. Submit the registrant change on its own.
- It requires the registrant's confirmation. The registry accepts the request, places the domain in a pending state, and completes the change once the confirmation is given.

A registrant change also triggers a new data and ID control for the incoming registrant.

## Transfers

A `.dk` transfer is **immediate**. The registry settles it on receipt rather than opening a transfer window, so there is no pending phase, no acknowledgement or rejection by the losing registrar, and no transfer notification to wait for.

- The transfer request carries **no period** and the domain is **not renewed** by the transfer. The expiry date is unchanged.
- The auth code is **time limited** and can only be issued by the registrar currently sponsoring the domain.
- The registrant contact is **cloned by the registry** as part of the transfer, so the domain ends up with a new registrant handle.
- A domain carrying the registry's VID service cannot be transferred to registrar management at all.

For a Danish registrant, and for a flagged foreign registrant, the data and ID control has to be complete **before** the transfer settles.

## Renewal

Renewals are explicit and always **one year**. Three registry rules apply:

- A renewal is only accepted within **two months of the expiry date**.
- The total registration term may not exceed **14 months** after the renewal.
- The renewal is charged to the billing contact registered with Punktum dk, so the registrar account must hold that privilege.

## Deletion and restore

A deleted `.dk` domain enters a **30 day redemption period** during which it can be restored with [`POST /v1/domains/{domain_reference}/restore`](/api-reference#tag/domain/POST/v1/domains/{domain_reference}/restore).

The registry does not implement the two-step RGP restore. There is no restore request phase and no report to file afterwards: a single restore call completes the operation.

> ⚠️ A redemption period **caused by a failed data or ID control cannot be restored**. When the domain entered redemption because the registrant's ID control expired or was rejected, rather than because the domain was deleted or allowed to expire, the restore is refused. Completing the outstanding control is the only way back, and it has to happen before the redemption period ends.

The notification that opens the redemption period carries the **exact date** on which the domain will be deleted.

## Name servers

- A domain carries **at least two and at most seven** name servers.
- A name server must already exist at the registry before it can be attached to a domain.
- The registry **queries the name servers** as part of the change and rejects the request if the zone does not answer for the domain.

> ⚠️ Changing the name servers on a signed domain **removes all of its DS records**. Re-publish the DNSSEC data after the change.

## Domain statuses

`.dk` supports **no client-managed statuses**. Transfer locks, update locks and holds are applied by the registry alone and cannot be set or cleared through the API. Clearing a registry-applied status is arranged with Punktum dk directly.

## Registry notifications

Punktum dk reports what it does to a domain and to its contacts through notifications, and the changes are reconciled onto the domain automatically. The notifications cover:

| Notification | What it means |
| --- | --- |
| Registered and activated | The application succeeded and the domain resolves |
| Registered, but not activated | The domain exists and is waiting on the registrant's data or ID control |
| Application cancelled or rejected | The application did not result in a registration |
| Data or ID control required | The registrant has been asked to complete a control |
| Data or ID control completed, expired or cancelled | The outcome of a control that was requested earlier |
| Email confirmation required or confirmed | A primary or secondary address needs verification, or has been verified |
| Registrant changed, or not completed in time | The outcome of a change of registrant |
| Name servers or DS records changed | The delegation was altered |
| Added to or removed from the portfolio | The domain was transferred in or out |
| Deleted, or deletion stopped | The domain was deleted, or a pending deletion was cancelled |
