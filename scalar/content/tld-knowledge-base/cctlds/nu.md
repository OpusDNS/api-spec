# 🇳🇺 .nu — Niue

> The **.nu** is a country-code top-level domain (ccTLD) operated by Internetstiftelsen (The Swedish Internet Foundation). This article documents the technical, operational, and contractual requirements for the TLD, along with special considerations for registry, registrar, and domain management.

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

`.nu` is the ccTLD for Niue, operated from Sweden by Internetstiftelsen on the same EPP platform as [`.se`](/tld-knowledge-base/cctlds/se) and under the same technical rules. There is no local presence requirement.

## Contact Attributes

`.nu` provisions the holder only, and that holder must carry a personal or organisational number:

| Attribute | Type | Required | Applies to | Format |
| --- | --- | --- | --- | --- |
| `REGISTRY_SE_ORG_NO` | String | ✅ Required | Domain Owner | A bracketed ISO 3166-1 alpha-2 country code followed by 1 to 123 characters, 127 overall |
| `REGISTRY_SE_VAT_NO` | String | ➖ Optional | Domain Owner | A two-letter country code followed by a country-specific string of letters and digits, 32 overall |

The country code identifies the jurisdiction where the person or company is **registered**, which is not necessarily the country in the contact's postal address. A German company operating from Stockholm is `[DE]`, not `[SE]`.

`REGISTRY_SE_ORG_NO` is immutable once the handle exists at the registry. `REGISTRY_SE_VAT_NO` can be changed.

### `[SE]` is validated for real

Any country code other than `[SE]` accepts a free-form identifier, which is the common case for `.nu` since it has no local presence requirement. `[SE]` does not: the registry requires a genuine Swedish personal or organisational number, six digits, a dash, four digits, and it checks the number itself rather than just its shape.

> ⚠️ A well-formed but non-existent number is rejected. `[SE]111111-1111` matches the documented format and still fails:
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
> Use a real number, such as `[SE]802405-0190`, or a non-Swedish country code when the holder is registered elsewhere.

If the holder has no organisation name and the country code is `[SE]`, the registry expects a personal number rather than an organisational one.

## Auth Codes

`.nu` auth codes belong to the registry. A registrar can never choose the value: the registry generates it, returns it in the registration response, and a domain info request does not expose it afterwards.

Request a fresh one with [`POST /v1/domains/tld-specific/se/{domain_reference}/auth_code/request`](/api-reference#tag/domain_tld_specific/POST/v1/domains/tld-specific/se/{domain_reference}/auth_code/request), which returns the code directly and **invalidates the previous one**. This is how a code spent on a transfer gets replaced. The path segment is `se` for both TLDs; pass a `.nu` domain in `{domain_reference}`.

## Transfers

`.nu` transfers complete **immediately**: there is no pending window, no approval and no rejection. The request either succeeds outright or fails.

Two consequences worth planning for:

- the gaining registrar learns the outcome from the transfer response itself, with nothing to wait for;
- the losing registrar is informed afterwards and cannot stop it.

Transfers do not extend the registration period, and the auth code is consumed in the process.

## Registrant verification

Internetstiftelsen may hold a new registration while it verifies the holder's data. The domain is created, but the registry applies `serverHold`, `serverTransferProhibited` and `serverRenewProhibited`, so it does not resolve and cannot be transferred or renewed while the check is open.

The check clears when the registry accepts the holder data, or when the holder is replaced with one that passes. Either outcome is reported by the registry and reconciled onto the domain automatically, so those statuses disappear on their own. Nothing is required beyond correcting the holder when the registry asks for it.

## Registry lock

Registry lock blocks updates, transfers and deletions, and can be requested when registering or updating a domain. **The registry does not support unlocking over EPP**, so removal is arranged out of band with Internetstiftelsen.
