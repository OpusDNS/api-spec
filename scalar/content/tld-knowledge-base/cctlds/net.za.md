# 🇿🇦 .net.za — South Africa

> The **.net.za** is a country-code top-level domain (ccTLD) operated by ZARC. This article documents the technical, operational, and contractual requirements for the TLD, along with special considerations for registry, registrar, and domain management.

## General Information

| Property | Value |
| --- | --- |
| TLD Type | ccTLD |
| Registry | ZARC |
| Registry Country | South Africa |
| Registry Website | [zarc.web.za](https://zarc.web.za) |
| Provisioning Protocol | EPP |
| Second-Level Registration | ✅ Yes |
| Accreditation Required | ✅ Yes |

## Domain Lifecycle

| Property | Value |
| --- | --- |
| Registration Period | 1–5 years |
| Renewal Period | 1–5 years |
| Transfer Renewal Period | 1 year |
| Deletion Policy | Immediate, At expiration |
| Auto-Renew Enabled | ✅ Yes |
| Auto-Renewal Before Expiry | On expiration |
| Sync After Operations | registration, renewal, transfer |

**Grace periods**

| Period | Duration |
| --- | --- |
| Add Grace Period | 7 days |
| Standard Grace Period | 0 days |
| Redemption Period | 10 days |
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
| Domain Length | 1–63 characters |
| IDN Support | ❌ No |
| Premium Domains | ❌ No |
| Reserved Domains | ❌ No |
| Registry Lock | ❌ No |

## Contacts & Roles

| Property | Value |
| --- | --- |
| Required Contacts | Domain Owner, Administrator, Technical Contact, Billing Contact |
| Supported Roles | Domain Owner, Administrator, Technical Contact, Billing Contact |
| Thick WHOIS | ✅ Yes |
| Privacy Proxy Allowed | ❌ No |
| Contacts Transferable | ❌ No |
| Allowed Postal Types | Local, International |
| AuthInfo Required | ❌ No |

## Nameservers & DNS

| Property | Value |
| --- | --- |
| Nameserver Count | 2–5 |
| Host Objects Allowed | ❌ No |
| Registry Nameserver Check | ✅ Yes |
| DNSSEC Allowed | ❌ No |
| DNSSEC Required | ❌ No |
| CZDS (Zone Download) | ❌ No |

## Transfer Policy

| Property | Value |
| --- | --- |
| Transfer Lock Enabled | ❌ No |
| Transfer Duration | 5 days |
| Transfer Extends Domain | ❌ No |
| Transfer via AuthInfo | ❌ No |
| Confirmation Required | ✅ Yes (Both parties) |

## Dispute Resolution

| Property | Value |
| --- | --- |
| Dispute Resolution Available | ❌ No |

## Zones

`.co.za`, `.net.za`, `.org.za` and `.web.za` are served by the same registry under the same rules. Registration directly under `.za` is not available.

## Registration

- Registrations and renewals run from **1 to 5 years**.
- **Two to five name servers** are required.
- A registrant, an administrative, a technical and a billing contact are all required, exactly one of each.
- `.za` domains have **no auth code**. A value supplied on a create is ignored, and one supplied on an update is refused.

## Name server check

The registry checks that every name server answers authoritatively for the domain, at registration and on every name server change.

While the check fails at registration, the domain is registered but carries the `serverHold` status and is not published in the DNS. The registry repeats the check for **7 days** and removes the status once the name servers answer. After 7 days it stops checking, and the domain remains suspended until a domain update supplies name servers that answer. To use OpusDNS name servers, create the zone along with the domain so that they can answer for it.

A name server change that fails the check is refused as a whole. The name servers and statuses of the domain return to their previous values, and anything else sent in the same request is not applied either.

## Pending updates

Every change to a `.za` domain is processed asynchronously. The request is accepted and the domain carries the `pendingUpdate` status until the registry reports the outcome, which usually takes less than a minute. A change of registrant takes **5 days**.

While the status is present, another change to the name servers, contacts, statuses or renewal mode answers `409` with the code `ERROR_DOMAIN_UPDATE_PENDING`. Retry once the status has cleared.

> ⚠️ Combining a change of registrant with other changes makes all of them wait for 5 days, and a refused name server change also discards the change of registrant. Send them separately.

## Changing the registrant

The registrant of a `.za` domain is changed with a regular domain update: send the new registrant in `contacts.registrant` of [`PATCH /v1/domains/{domain_reference}`](/api-reference#tag/domain/PATCH/v1/domains/{domain_reference}). The registry notifies the registrant by email, and the change takes effect after **5 days**.

## Renewal

Renew up to a new expiry date **at most 5 years away**; a longer period is refused.

## Transfers

- A transfer needs **no auth code**, and it is refused during the **first 7 days** after registration.
- The transfer stays pending until the transfer period ends. The sponsoring registrar approves or rejects it, and the registrant can vote by email. **A transfer that nobody approves is cancelled**, and the domain stays where it is.
- The expiry date does not change.
- A transfer takes no contacts, and any supplied are refused. The domain arrives with **copies of its current contacts**, which can be replaced afterwards through a domain update. A change of registrant is then subject to the 5 days described above.
- The name servers are kept unless the request names new ones. They are checked as described above once the transfer completes.

## Deletion and restore

A deleted domain is suspended for 5 days and then held in a deletion phase for another 5 days before it is released. During those 10 days it can be restored with [`POST /v1/domains/{domain_reference}/restore`](/api-reference#tag/domain/POST/v1/domains/{domain_reference}/restore).

A domain with a pending update cannot be deleted until the update has ended.

## DNSSEC

DNSSEC data cannot currently be published for `.za` domains.
