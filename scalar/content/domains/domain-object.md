# The domain object

The domain object represents a registered domain in your OpusDNS account. It is
returned by all domain endpoints — registration, transfer, update, and retrieval.

## Example response

```json
{
  "domain_id": "dom_01h45ytscbebyvny4gc8cr8ma2",
  "name": "example.com",
  "sld": "example",
  "tld": "com",
  "roid": "12345678_DOMAIN_COM-VRSN",
  "owner_id": "org_01h45ytscbebyvny4gc8cr8ma2",
  "registry_account_id": "ra_01h45ytscbebyvny4gc8cr8ma2",
  "renewal_mode": "renew",
  "transfer_lock": false,
  "is_premium": false,
  "registered_on": "2026-01-15T10:30:00Z",
  "expires_on": "2027-01-15T10:30:00Z",
  "created_on": "2026-01-15T10:30:00Z",
  "updated_on": "2026-03-20T14:00:00Z",
  "auth_code": "xK9#mP2$vL5nQ8wR",
  "auth_code_expires_on": "2026-04-20T14:00:00Z",
  "nameservers": [
    { "hostname": "ns1.example.net" },
    { "hostname": "ns2.example.net" }
  ],
  "contacts": [
    { "contact_id": "contact_01h45ytscbebyvny4gc8cr8ma2", "contact_type": "registrant" },
    { "contact_id": "contact_01h45ytscbebyvny4gc8cr8ma2", "contact_type": "admin" },
    { "contact_id": "contact_01h45ytscbebyvny4gc8cr8ma2", "contact_type": "tech" },
    { "contact_id": "contact_01h45ytscbebyvny4gc8cr8ma2", "contact_type": "billing" }
  ],
  "hosts": [],
  "registry_statuses": ["ok"],
  "tags": [],
  "status_tags": []
}
```

## Fields

### Identifiers

| Field | Type | Description |
| --- | --- | --- |
| `domain_id` | `string` | Unique identifier for the domain (TypeID format). |
| `name` | `string` | The fully qualified domain name (e.g., `example.com`). |
| `sld` | `string` | The second-level domain — the part before the TLD (e.g., `example`). |
| `tld` | `string` | The top-level domain (e.g., `com`, `de`, `io`). |
| `roid` | `string` | The registry object identifier assigned by the registry. |
| `owner_id` | `string` | The organization that owns this domain (TypeID format). |
| `registry_account_id` | `string` | The registry account used for this domain (TypeID format). |

### Configuration

| Field | Type | Description |
| --- | --- | --- |
| `renewal_mode` | `string` | How the domain handles expiry. `"renew"` — the domain auto-renews before expiration. `"expire"` — the domain is allowed to expire. |
| `transfer_lock` | `boolean` | Whether the domain is locked to prevent outbound transfers. When `true`, the domain cannot be transferred to another registrar. |
| `is_premium` | `boolean` | Whether this is a premium domain with non-standard pricing. See [Premium domains](/products/domains/premium). |

### Dates

| Field | Type | Description |
| --- | --- | --- |
| `registered_on` | `datetime` | When the domain was originally registered at the registry. |
| `expires_on` | `datetime` | When the domain's current registration period ends. |
| `created_on` | `datetime` | When the domain record was created in OpusDNS. |
| `updated_on` | `datetime` | When the domain record was last modified in OpusDNS. |
| `canceled_on` | `datetime` | When a deletion was requested. Present only if the domain has been deleted. |
| `deleted_on` | `datetime` | When the domain will be permanently removed. Present only if the domain is in a deletion lifecycle. |

### Auth code

| Field | Type | Description |
| --- | --- | --- |
| `auth_code` | `string` | The current authorization code for transferring the domain to another registrar. May be `null` if not yet generated or not applicable. |
| `auth_code_expires_on` | `datetime` | When the current auth code expires. After this time, a new auth code must be requested. |

### Nameservers

The `nameservers` array contains the DNS servers authoritative for this domain.

| Field | Type | Description |
| --- | --- | --- |
| `hostname` | `string` | The nameserver hostname (e.g., `ns1.example.net`). |
| `ip_addresses` | `string[]` | Glue record IP addresses. Only present for subordinate nameservers (nameservers under the domain itself). |

### Contacts

The `contacts` array lists the contacts associated with this domain, each with a role.

| Field | Type | Description |
| --- | --- | --- |
| `contact_id` | `string` | The identifier of the contact (TypeID format). |
| `contact_type` | `string` | The contact role: `registrant`, `admin`, `tech`, or `billing`. |

### Hosts

The `hosts` array contains subordinate hosts (also known as glue records) — nameservers
whose hostnames are under this domain.

| Field | Type | Description |
| --- | --- | --- |
| `host_id` | `string` | The identifier of the subordinate host. |

### Registry statuses

The `registry_statuses` array contains all EPP status codes currently set on the
domain at the registry level. These indicate what operations are allowed or
restricted.

#### Common statuses

| Status | Meaning |
| --- | --- |
| `ok` | The domain is in a normal state with no restrictions. |
| `inactive` | The domain has no nameservers or is not resolving. |
| `addPeriod` | The domain was recently registered and is in the add grace period. |
| `renewPeriod` | The domain was recently renewed and is in the renew grace period. |
| `autoRenewPeriod` | The domain was auto-renewed and is in the auto-renew grace period. |
| `transferPeriod` | The domain was recently transferred and is in the transfer grace period. |

#### Pending statuses

| Status | Meaning |
| --- | --- |
| `pendingCreate` | A registration is being processed. |
| `pendingTransfer` | An inbound or outbound transfer is in progress. |
| `pendingUpdate` | A domain update is being processed at the registry. |
| `pendingRenew` | A renewal is being processed. |
| `pendingDelete` | The domain is scheduled for deletion. |
| `pendingRestore` | A restore from redemption is being processed. |

#### Server-side restrictions

These are set by the registry and cannot be removed by the registrar.

| Status | Meaning |
| --- | --- |
| `serverTransferProhibited` | The registry has blocked transfers. |
| `serverUpdateProhibited` | The registry has blocked updates. |
| `serverDeleteProhibited` | The registry has blocked deletion. |
| `serverRenewProhibited` | The registry has blocked renewal. |
| `serverRestoreProhibited` | The registry has blocked restores. |
| `serverHold` | The domain is suspended by the registry — it will not resolve. |

#### Client-side restrictions

These are set by the registrar (OpusDNS) at your request or automatically.

| Status | Meaning |
| --- | --- |
| `clientTransferProhibited` | Transfers are locked. Corresponds to `transfer_lock: true`. |
| `clientUpdateProhibited` | Updates are locked. |
| `clientDeleteProhibited` | Deletion is locked. |
| `clientRenewProhibited` | Renewal is locked. |
| `clientHold` | The domain is suspended — it will not resolve. |

#### Lifecycle statuses

| Status | Meaning |
| --- | --- |
| `redemptionPeriod` | The domain has been deleted and is in the redemption grace period. It can still be restored. |
| `deleted` | The domain has been permanently deleted. |

#### Other statuses

| Status | Meaning |
| --- | --- |
| `free` | The domain is available. |
| `connect` | The domain is part of a registry lock service. |
| `failed` | An operation on the domain has failed. |
| `invalid` | The domain is in an invalid state. |

### Tags

The `tags` array contains user-created tags assigned to this domain. The
`status_tags` array contains system-managed status tags that reflect domain
conditions requiring attention. Both fields are only included in the response
when you request them with `?include=tags`.

See [User tags](/automation/tags/user-tags) and
[Status tags](/automation/tags/status-tags) for details.

| Field | Type | Description |
| --- | --- | --- |
| `tags[].tag_id` | `string` | The tag identifier. |
| `tags[].label` | `string` | The tag's display name. |
| `tags[].color` | `string` | The tag's display color (`color-1` through `color-10`). Colors are intentionally generic so that API consumers can map them to values that fit their own branding. |
| `status_tags[].tag_type` | `string` | The status tag type identifier (e.g. `VERIFICATION_REQUIRED`). |
| `status_tags[].label` | `string` | Human-readable display label. |
| `status_tags[].description` | `string` | Optional description of the status condition. |
| `status_tags[].color` | `string` | Display color for UI rendering. Colors are intentionally generic (e.g. `color-1`) so that API consumers can map them to values that fit their own branding. |

## Related API Reference

- [`GET /v1/domains/{domain_reference}`](/api-reference#tag/domain/GET/v1/domains/{domain_reference})
- [`GET /v1/domains`](/api-reference#tag/domain/GET/v1/domains)
- [`POST /v1/domains`](/api-reference#tag/domain/POST/v1/domains)
- [`PATCH /v1/domains/{domain_reference}`](/api-reference#tag/domain/PATCH/v1/domains/{domain_reference})
