# 🇬🇷 .gr — Greece

> The **.gr** is a country-code top-level domain (ccTLD) operated by Registry of .gr and .ελ Domain Names (ICS-FORTH). This article documents the technical, operational, and contractual requirements for the TLD, along with special considerations for registry, registrar, and domain management.

## General Information

| Property | Value |
| --- | --- |
| TLD Type | ccTLD |
| Registry | Registry of .gr and .ελ Domain Names (ICS-FORTH) |
| Registry Country | Greece |
| Registry Website | [www.gr](https://www.gr) |
| Provisioning Protocol | EPP |
| Second-Level Registration | ✅ Yes |
| Accreditation Required | ✅ Yes |

## Domain Lifecycle

| Property | Value |
| --- | --- |
| Registration Period | 2–10 years |
| Renewal Period | 2–10 years |
| Transfer Renewal Period | 1 year |
| Deletion Policy | At expiration |
| Auto-Renew Enabled | ❌ No |
| Auto-Renewal Before Expiry | 7 days before expiration |
| Sync After Operations | registration, renewal, transfer |

**Grace periods**

| Period | Duration |
| --- | --- |
| Add Grace Period | 0 days |
| Standard Grace Period | 15 days |
| Redemption Period | 0 days |
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
| IDN Support | ✅ Yes |
| Premium Domains | ❌ No |
| Reserved Domains | ❌ No |
| Registry Lock | ❌ No |

## Contacts & Roles

| Property | Value |
| --- | --- |
| Required Contacts | Domain Owner |
| Supported Roles | Domain Owner, Administrator, Technical Contact, Billing Contact |
| Thick WHOIS | ✅ Yes |
| Privacy Proxy Allowed | ❌ No |
| Contacts Transferable | ❌ No |
| Allowed Postal Types | Local |
| AuthInfo Required | ✅ Yes (16–16 characters) |

## Nameservers & DNS

| Property | Value |
| --- | --- |
| Nameserver Count | 0–13 |
| Host Objects Allowed | ✅ Yes |
| Registry Nameserver Check | ❌ No |
| DNSSEC Allowed | ✅ Yes |
| DNSSEC Required | ❌ No |
| DNSSEC Mode | DS |
| CZDS (Zone Download) | ❌ No |

## Transfer Policy

| Property | Value |
| --- | --- |
| Transfer Lock Enabled | ❌ No |
| Transfer Duration | 0 days |
| Transfer Extends Domain | ❌ No |
| Transfer via AuthInfo | ✅ Yes |
| Confirmation Required | ❌ No |

## Dispute Resolution

| Property | Value |
| --- | --- |
| Dispute Resolution Available | ❌ No |

## Zones

Registration is available directly under `.gr`. `.ελ`, `.gov.gr` and the other second-level zones are not offered.

## Registration

- Registrations run for **2, 4, 6, 8 or 10 years**. Any other `period` on [`POST /v1/domains`](/api-reference#tag/domain/POST/v1/domains) is refused with `422`.
- A registrant is required. An administrative, a technical and a billing contact are optional, with at most one of each.
- Name servers are optional. A domain without name servers carries the `inactive` status.
- Name servers under the domain being registered, such as `ns1.example.gr` for `example.gr`, cannot be supplied at registration. Add them through a domain update once the registration is confirmed.
- An `auth_code` supplied at registration is ignored.

A new registration is returned with the `pendingCreate` status, and the registry usually confirms it within minutes. The price is reserved when the request is accepted and is charged once the registration is confirmed. Until then, a domain update, a renewal and a deletion are refused. Read the domain with [`GET /v1/domains/{domain_reference}`](/api-reference#tag/domain/GET/v1/domains/{domain_reference}) to see when `pendingCreate` has been removed.

## Geographic names

Geographic names cannot currently be registered. [`GET /v1/domains/check`](/api-reference#tag/domain/GET/v1/domains/check) reports such a name as unavailable, and [`POST /v1/domains`](/api-reference#tag/domain/POST/v1/domains) refuses it with `409` and the code `ERROR_DOMAIN_EXISTS`, whether or not the name is already held. The `detail` of the response reads `Domain is not available at the registry: Domain conditionally available`.

## Contacts

`.gr` has no additional contact attributes. The rules below apply in every role, each time a contact is added to a `.gr` domain through a registration, a transfer or a domain update.

| Field | Required | Allowed characters |
| --- | --- | --- |
| `state` | Required | Greek and Latin |
| `first_name`, `last_name`, `org`, `street`, `city`, `postal_code` | As on any other TLD | Greek and Latin |

Greek and Latin means the Unicode blocks Basic Latin, Latin-1 Supplement, Greek and Coptic, and Greek Extended. Letters from other Latin blocks, such as `š` or `ł`, are refused, as are control characters, the non-breaking space and `¬`.

A contact that does not meet these rules is refused with `422`:

```json
{
  "type": "policy-validation-error",
  "title": "Policy Validation Error",
  "status": 422,
  "code": "ERROR_POLICY_VALIDATION",
  "errors": [
    {
      "detail": "A .gr contact must provide a state or province",
      "pointer": "contacts.registrant[0].state"
    },
    {
      "detail": ".gr only accepts Greek and Latin characters; city contains an unsupported one",
      "pointer": "contacts.registrant[0].city"
    }
  ],
  "detail": "Policy validation failed"
}
```

The name and organization of a contact cannot be changed once it exists. To correct them, create a new contact with [`POST /v1/contacts`](/api-reference#tag/contact/POST/v1/contacts) and set it on the domain through a domain update. For the registrant, this is a change of registrant.

## Auth codes

`.gr` auth codes are generated by the registry and cannot be chosen or changed. An `auth_code` supplied on a domain update is refused with `422`, and the `auth_code` of a `.gr` domain is always `null`.

Request a code with [`POST /v1/domains/{domain_reference}/auth-code`](/api-reference#tag/domain/POST/v1/domains/{domain_reference}/auth-code). The response has `delivery` set to `registrant_email`, no `auth_code`, and the masked address of the registrant in `recipients`. The registrant receives an email with a link, and the page at that link shows the code. OpusDNS never receives the code.

- A code has **16 characters**.
- A code is valid for **14 days**, or until a transfer uses it, whichever comes first.
- Requests are limited to **10 per domain in 24 hours** and **5 per 60 seconds** across OpusDNS. A request beyond these limits is refused and can be retried later.

## Transfers

A `.gr` transfer is **immediate**. [`POST /v1/domains/transfer`](/api-reference#tag/domain/POST/v1/domains/transfer) completes it, with no pending phase and nothing for either registrar to approve or reject.

- An `auth_code` is required. The current holder obtains it through the current registrar, as described under Auth codes. The transfer invalidates the code.
- The transfer adds **no period**, and the expiry date does not change. Omit `period` from the request: any value other than 1 year is refused with `422`, and 1 year has no effect on the expiry date.
- The **holder does not change**. A `contacts.registrant` in the request is refused with `422`. The domain carries a copy of its current registrant, imported as a contact in your organization. To move the domain to a different holder, change the registrant after the transfer.
- An administrative, a technical and a billing contact supplied in the request, and name servers, are set once the transfer has completed.

A transfer to another registrar is equally immediate. Once the new registrar has used the auth code, the domain is removed from your organization.

## Changing the registrant

The registrant of a `.gr` domain is changed with a regular domain update: send the new registrant in `contacts.registrant` of [`PATCH /v1/domains/{domain_reference}`](/api-reference#tag/domain/PATCH/v1/domains/{domain_reference}). The change takes effect immediately.

When the request carries other changes as well, the registrant is applied last. If it is then refused, the response is `422`, the other changes remain applied, and the domain is refreshed from the registry. Send the change of registrant again on its own.

A change of registrant of a geographic name does not take effect immediately, because it requires an approval outside OpusDNS. The domain shows the new registrant and carries the `pendingUpdate` status until the decision. If the change is rejected, the previous registrant remains the holder, while the domain continues to show the new one.

## Renewal

- Renewals run for **2, 4, 6, 8 or 10 years**. Any other `period` on [`POST /v1/domains/{domain_reference}/renew`](/api-reference#tag/domain/POST/v1/domains/{domain_reference}/renew) is refused with `422`.
- Renew up to a new expiry date **at most 10 years away**. A longer period is refused.
- An automatic renewal runs for **2 years**.
- A renewal is refused while the domain carries `pendingDelete`, so renew before the expiry date.

## Deletion and expiry

A `.gr` domain cannot be deleted immediately. [`DELETE /v1/domains/{domain_reference}`](/api-reference#tag/domain/DELETE/v1/domains/{domain_reference}) answers `204`, records the request in `canceled_on`, and marks the domain `pendingDelete`. The domain remains registered until its expiry date and is removed **15 days after that date**.

- A deletion cannot be undone: [`POST /v1/domains/{domain_reference}/restore`](/api-reference#tag/domain/POST/v1/domains/{domain_reference}/restore) is refused.
- The `pendingDelete` status can be removed again before the expiry date, when the domain is refreshed from the registry. The deletion still stands, as `canceled_on` shows.

A domain that reaches its expiry date without a renewal carries `pendingDelete`, `serverHold` and `serverUpdateProhibited`, is no longer published in the DNS, and is removed 15 days later.

## Domain statuses

`.gr` has no client-managed statuses. `statuses` and `status_changes` on a domain update are ignored, so a domain cannot be locked against a transfer, an update or a deletion.
