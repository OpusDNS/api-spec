# 🇸🇪 .se — Sweden

> The **.se** is a country-code top-level domain (ccTLD) operated by Internetstiftelsen (The Swedish Internet Foundation). This article documents the technical, operational, and contractual requirements for the TLD, along with special considerations for registry, registrar, and domain management.

## General Information

| Property | Value |
| --- | --- |
| TLD Type | ccTLD |
| Registry | Internetstiftelsen (The Swedish Internet Foundation) |
| Registry Country | Sweden |
| Registry Website | [internetstiftelsen.se](https://internetstiftelsen.se) |
| Provisioning Protocol | EPP |
| Second-Level Registration | ❌ No |
| Accreditation Required | ✅ Yes |

## Domain Lifecycle

| Property | Value |
| --- | --- |
| Registration Period | 1–10 years |
| Renewal Period | 1–10 years |
| Transfer Renewal Period | 1 year |
| Deletion Policy | Immediate, At expiration |
| Auto-Renew Enabled | ❌ No |
| Auto-Renewal Before Expiry | On expiration |
| Sync After Operations | registration, transfer |

**Grace periods**

| Period | Duration |
| --- | --- |
| Add Grace Period | 0 days |
| Standard Grace Period | 10 days |
| Redemption Period | 60 days |
| Pending Restore | 0 days |
| Pending Delete | 7 days |

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
| Registry Lock | ✅ Yes |

## Contacts & Roles

| Property | Value |
| --- | --- |
| Required Contacts | Domain Owner |
| Supported Roles | Domain Owner |
| Thick WHOIS | ✅ Yes |
| Privacy Proxy Allowed | ❌ No |
| Contacts Transferable | ❌ No |
| Allowed Postal Types | Local, International |
| AuthInfo Required | ✅ Yes (9–64 characters) |

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
| Transfer Lock Enabled | ❌ No |
| Transfer Duration | 0 days |
| Transfer Extends Domain | ❌ No |
| Transfer via AuthInfo | ❌ No |
| Confirmation Required | ❌ No |

## WHOIS & RDAP

| Property | Value |
| --- | --- |
| WHOIS Server | `whois.iis.se` |

## Dispute Resolution

| Property | Value |
| --- | --- |
| Dispute Resolution Available | ❌ No |

## Contact Attributes

`.se` provisions the holder (the registrant) only, and that holder must carry a personal or organization number:

| Attribute | Type | Required | Applies to | Format |
| --- | --- | --- | --- | --- |
| `REGISTRY_SE_ORG_NO` | String | ✅ Required | Domain Owner | A bracketed ISO 3166-1 alpha-2 country code followed by 1 to 123 characters, 127 characters overall |
| `REGISTRY_SE_VAT_NO` | String | ➖ Optional | Domain Owner | A two-letter country code followed by a country-specific string of letters and digits, 32 characters overall |

The country code identifies the jurisdiction in which the person or company is **registered**, which is not necessarily the country in the contact's postal address. A German company operating from Stockholm is `[DE]`, not `[SE]`.

`REGISTRY_SE_ORG_NO` is immutable once the handle exists at the registry. `REGISTRY_SE_VAT_NO` can be changed.

### `[SE]` numbers are verified by the registry

For every country code other than `[SE]`, the registry accepts a free-form identifier. `[SE]` is the exception: it requires a valid Swedish personal or organization number — six digits, a hyphen, then four digits (`[SE]NNNNNN-NNNN`) — and the registry verifies the number itself, not only its format.

> ⚠️ A correctly formatted but non-existent number is rejected. `[SE]111111-1111` matches the documented format and still fails:
>
> ```json
> {
>   "type": "registry-request",
>   "title": "Registry Request Error",
>   "status": 400,
>   "code": "ERROR_REGISTRY_REQUEST",
>   "detail": "2004: Parameter value range error: Value error personal/organization identification number"
> }
> ```
>
> Supply the holder's own personal or organization number, or use a non-Swedish country code when the holder is registered elsewhere.

Internetstiftelsen's EPP specification uses `[SE]802405-0190` as its worked example (§7.1.5). That is Internetstiftelsen's own organisationsnummer — a live number, not a test value — so treat it as illustrative and submit the holder's own number instead.

When the holder has no organization name and the country code is `[SE]`, the registry expects a personal number rather than an organization number.

## Auth Codes

`.se` auth codes are owned by the registry. A registrar cannot choose the value: the registry generates it, returns it in the registration response, and does not expose it in a later domain info request.

Request a fresh code with [`POST /v1/domains/tld-specific/se/{domain_reference}/auth_code/request`](/api-reference#tag/domain_tld_specific/POST/v1/domains/tld-specific/se/{domain_reference}/auth_code/request), which returns the code directly and **invalidates the previous one**. This is how a code consumed by a transfer is replaced.

## Transfers

`.se` transfers complete **immediately**: there is no pending window, no approval and no rejection. A transfer request either succeeds outright or fails.

Two consequences are worth planning for:

- the gaining registrar learns the outcome from the transfer response itself, with no notification to wait for;
- the losing registrar is notified after the fact and cannot prevent the transfer.

Transfers do not extend the registration period, and the auth code is consumed in the process.

## Contacts on an Inbound Transfer

Transferring a `.se` domain in does not move its contact with it. The registry **clones** the holder under your account as a new handle, and that clone is incomplete: it retains the name, email address, phone number and `iis:orgno`, but the postal address is returned as empty strings.

A cloned holder is returned in this form:

```json
{
  "id": "76uFie8Nap2SVSfN",
  "roid": "CONTACT_0000129392-TEST",
  "email": "person@example.com",
  "voice": "+46.812345678",
  "postal_infos": [
    {
      "type": "loc",
      "name": "Full Name",
      "org": null,
      "street": [""],
      "city": "",
      "sp": null,
      "pc": null,
      "cc": ""
    }
  ],
  "status": ["ok", "linked"]
}
```

The street, city, state, postal code and country the holder had at the losing registrar are **not carried over**, and cannot be recovered from the registry.

Because a contact cannot be stored without an address, the import populates each empty field with OpusDNS's own company address rather than leaving it blank. An imported `.se` holder therefore arrives with `Franz-Mayer-Str. 1`, `Regensburg`, `93053`, `DE`, even though the holder has no connection to that address. The name, email address, phone number and `REGISTRY_SE_ORG_NO` are the holder's own.

> ⚠️ **Update the holder after an inbound transfer.** The placeholder address is a technical stand-in, not the holder's data. Correct it with `PATCH /v1/contacts/{contact_id}` once the transfer completes, and the change is propagated to the registry.

## Holder Verification

Internetstiftelsen may hold a new registration while it verifies the holder's data. The domain is created, but the registry applies `serverHold`, `serverTransferProhibited` and `serverRenewProhibited`, so it does not resolve and cannot be transferred or renewed while the check is open.

The check clears when the registry accepts the holder data, or when the holder is replaced with one that passes. Either outcome is reported by the registry and reconciled onto the domain automatically, so these statuses are removed without intervention. No action is required beyond correcting the holder data when the registry asks for it.

## Registry Lock

Registry lock blocks updates, transfers and deletions, and can be requested when registering or updating a domain. **The registry does not support unlocking over EPP**, so removal must be arranged directly with Internetstiftelsen.
