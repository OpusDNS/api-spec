# Organization attributes

Attributes are custom key-value pairs you can attach to any organization.
Use them to store integration-specific metadata like CRM IDs, customer
tiers, internal notes, or any data your system needs to associate with an
organization.

## How attributes work

Each attribute has a `key` and `value`, plus two visibility flags:

| Field | Description |
| --- | --- |
| `key` | Unique identifier for the attribute within the organization. |
| `value` | The attribute value (string). |
| `private` | If `true`, the attribute is hidden from suborganizations. |
| `protected` | If `true`, the attribute is read-only and cannot be modified via the API. |

Private attributes are useful for storing internal metadata (like a customer
tier or internal notes) that suborganization users should not see. Protected
attributes are typically set by the system or an admin and should not be
changed programmatically.

## Listing attributes

### Current organization

```bash
curl "$OPUSDNS_API_BASE/v1/organizations/attributes" \
  --header "X-Api-Key: $OPUSDNS_API_KEY"
```

### Specific organization

```bash
curl "$OPUSDNS_API_BASE/v1/organizations/organization_01h45ytscbebyvny4gc8cr8ma2/attributes" \
  --header "X-Api-Key: $OPUSDNS_API_KEY"
```

### Filter by key

Retrieve only specific attributes by passing `keys[]`:

```bash
curl --get "$OPUSDNS_API_BASE/v1/organizations/attributes" \
  --header "X-Api-Key: $OPUSDNS_API_KEY" \
  --data-urlencode "keys=crm_id" \
  --data-urlencode "keys=tier" \
  --data-urlencode "keys=onboarding_status"
```

## Setting attributes

### On the current organization

```bash
curl "$OPUSDNS_API_BASE/v1/organizations/attributes" \
  --request PATCH \
  --header "X-Api-Key: $OPUSDNS_API_KEY" \
  --header "Content-Type: application/json" \
  --data '{
    "attributes": [
      { "key": "crm_id", "value": "CRM-12345" },
      { "key": "tier", "value": "enterprise" },
      { "key": "internal_notes", "value": "VIP customer - priority support", "private": true }
    ]
  }'
```

### On a specific organization

```bash
curl "$OPUSDNS_API_BASE/v1/organizations/organization_01h45ytscbebyvny4gc8cr8ma2/attributes" \
  --request PATCH \
  --header "X-Api-Key: $OPUSDNS_API_KEY" \
  --header "Content-Type: application/json" \
  --data '{
    "attributes": [
      { "key": "crm_id", "value": "CRM-67890" },
      { "key": "tier", "value": "standard" }
    ]
  }'
```

Attributes are upserted — if a key already exists, its value is updated. If
it doesn't exist, a new attribute is created.

## Use cases

### Map organizations to your CRM

Store your internal customer IDs alongside OpusDNS organizations:

```json
{ "key": "crm_id", "value": "CRM-12345" }
```

This lets you look up the OpusDNS organization for a given CRM customer
without maintaining a separate mapping table.

### Tag organizations by tier

Track service levels or pricing tiers:

```json
{ "key": "tier", "value": "enterprise" }
```

### Internal metadata

Store notes or flags that suborganization users should not see:

```json
{ "key": "internal_flag", "value": "review_pending", "private": true }
```

## Related API Reference

- [`GET /v1/organizations/attributes`](/api-reference#tag/organization/GET/v1/organizations/attributes)
- [`PATCH /v1/organizations/attributes`](/api-reference#tag/organization/PATCH/v1/organizations/attributes)
- [`GET /v1/organizations/{organization_id}/attributes`](/api-reference#tag/organization/GET/v1/organizations/{organization_id}/attributes)
- [`PATCH /v1/organizations/{organization_id}/attributes`](/api-reference#tag/organization/PATCH/v1/organizations/{organization_id}/attributes)
