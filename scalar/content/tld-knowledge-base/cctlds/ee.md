# 🇪🇪 .ee — Estonia

> The **.ee** is a country-code top-level domain (ccTLD) operated by Eesti Interneti Sihtasutus (Estonian Internet Foundation). This article documents the technical, operational, and contractual requirements for the TLD, along with special considerations for registry, registrar, and domain management.

## General Information

| Property | Value |
| --- | --- |
| TLD Type | ccTLD |
| Registry | Eesti Interneti Sihtasutus (Estonian Internet Foundation) |
| Registry Country | Estonia |
| Registry Website | [www.internet.ee](https://www.internet.ee) |
| Provisioning Protocol | EPP |
| Second-Level Registration | ✅ Yes |
| Accreditation Required | ✅ Yes |

## Domain Lifecycle

| Property | Value |
| --- | --- |
| Registration Period | 1–10 years |
| Renewal Period | 1–10 years |
| Transfer Renewal Period | 1 year |
| Deletion Policy | At expiration |
| Auto-Renew Enabled | ❌ No |
| Auto-Renewal Before Expiry | On expiration |
| Sync After Operations | registration, renewal, transfer |

**Grace periods**

| Period | Duration |
| --- | --- |
| Add Grace Period | 0 days |
| Standard Grace Period | 15 days |
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
| Domain Length | 1–63 characters |
| IDN Support | ✅ Yes |
| Premium Domains | ❌ No |
| Reserved Domains | ✅ Yes |
| Registry Lock | ❌ No |

## Contacts & Roles

| Property | Value |
| --- | --- |
| Required Contacts | Domain Owner, Administrator, Technical Contact |
| Supported Roles | Domain Owner, Administrator, Technical Contact |
| Thick WHOIS | ✅ Yes |
| Privacy Proxy Allowed | ❌ No |
| Contacts Transferable | ❌ No |
| Allowed Postal Types | International |
| AuthInfo Required | ✅ Yes (1–255 characters) |

## Nameservers & DNS

| Property | Value |
| --- | --- |
| Nameserver Count | 2–11 |
| Host Objects Allowed | ❌ No |
| Registry Nameserver Check | ✅ Yes |
| DNSSEC Allowed | ✅ Yes |
| DNSSEC Required | ❌ No |
| DNSSEC Mode | DNSKEY |
| CZDS (Zone Download) | ❌ No |

## Transfer Policy

| Property | Value |
| --- | --- |
| Transfer Lock Enabled | ✅ Yes (0 days after registration; 0 days after transfer) |
| Transfer Duration | 0 days |
| Transfer Extends Domain | ❌ No |
| Transfer via AuthInfo | ✅ Yes |
| Confirmation Required | ❌ No |

## WHOIS & RDAP

| Property | Value |
| --- | --- |
| WHOIS Server | `whois.tld.ee` |

## Dispute Resolution

| Property | Value |
| --- | --- |
| Dispute Resolution Available | ✅ Yes |
| Procedure | Domain Disputes Committee |
| Reference | [www.internet.ee/domain-disputes/domain-disputes-committee](https://www.internet.ee/domain-disputes/domain-disputes-committee) |
| UDRP Support | ❌ No |
| URS Support | ❌ No |

## Contacts

A `.ee` domain carries one registrant, **one to ten** administrative contacts and **one to ten** technical contacts. Billing contacts are not supported.

An administrative contact must be at least 18 years old.

## Contact Attributes

Every `.ee` contact carries three registry-specific attributes, all of them required:

| Attribute | Type | Required | Applies to | Allowed values |
| --- | --- | --- | --- | --- |
| `INTERNET_EE_IDENT_TYPE` | Enum | ✅ Yes | All roles | `priv` \| `birthday` \| `org` |
| `INTERNET_EE_IDENT_CC` | Country code | ✅ Yes | All roles | Two-letter country code |
| `INTERNET_EE_IDENT_VALUE` | String | ✅ Yes | All roles | Depends on `INTERNET_EE_IDENT_TYPE`, see below |

These per-attribute constraints are machine-readable: each `possible_attributes` entry returned by [`GET /v1/tlds/ee`](/api-reference#tag/tld/GET/v1/tlds/{tld}) carries its own `type`, `required`, and `values` fields.

## Identification

`INTERNET_EE_IDENT_TYPE` states how the contact is identified, and determines what the other two attributes hold:

| `INTERNET_EE_IDENT_TYPE` | Identifies | `INTERNET_EE_IDENT_CC` | `INTERNET_EE_IDENT_VALUE` | Example |
| --- | --- | --- | --- | --- |
| `priv` | A natural person with a personal identification code | Country that issued the code | Personal identification code | `EE`, `38001085718` |
| `birthday` | A natural person with no personal identification code | Country of nationality | Date of birth as `YYYY-MM-DD` | `DE`, `1987-01-01` |
| `org` | An organization | Country of registration | Company registration number | `DE`, `HRB 123456` |

An Estonian personal identification code or company registration number must be a valid, existing one.

## Registration

A registration through [`POST /v1/domains`](/api-reference#tag/domain/POST/v1/domains) requires the domain attribute `internet_ee_registrant_agreement` set to `true`. It confirms that the registrant accepts the [`.ee` Domain Regulation](https://www.internet.ee/domains/ee-domain-regulation).

```json
{
  "attributes": {
    "internet_ee_registrant_agreement": "true"
  }
}
```

## Name servers and DNSSEC

- A domain carries **2 to 11** name servers.
- DNSSEC data is supplied as key data, not as DS records. Send records with `record_type` set to `key_data`, carrying `flags`, `protocol`, `algorithm` and `public_key`, to [`PUT /v1/domains/{domain_reference}/dnssec`](/api-reference#tag/domain/PUT/v1/domains/{domain_reference}/dnssec).

## Domain statuses

`clientHold` is the only status that can be set on a `.ee` domain, through `statuses` or `status_changes` on [`PATCH /v1/domains/{domain_reference}`](/api-reference#tag/domain/PATCH/v1/domains/{domain_reference}). The other client statuses are not available, so a transfer lock cannot be set on a `.ee` domain.

## Transfers

A `.ee` transfer is **immediate**. [`POST /v1/domains/transfer`](/api-reference#tag/domain/POST/v1/domains/transfer) completes it, with no pending phase and nothing for either registrar to approve or reject.

- An `auth_code` is required.
- The transfer does **not renew** the domain, and the expiry date does not change.
- Contacts are optional in the request. When none are supplied, the domain keeps its existing contacts.

## Deletion and restore

A `.ee` domain is not deleted immediately. After [`DELETE /v1/domains/{domain_reference}`](/api-reference#tag/domain/DELETE/v1/domains/{domain_reference}), the domain remains registered until its expiry date and is not renewed.

The domain can be restored with [`POST /v1/domains/{domain_reference}/restore`](/api-reference#tag/domain/POST/v1/domains/{domain_reference}/restore):

- Until the expiry date, the restore takes the deletion back and does not renew the domain.
- For **45 days** after the expiry date, the restore renews the domain for one year.
