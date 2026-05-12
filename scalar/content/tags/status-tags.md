# Status tags

Status tags are system-managed labels that OpusDNS assigns automatically
based on the state of a domain. Unlike [user tags](/products/domains/user-tags),
you cannot create, modify, or remove status tags through the API — they are
controlled entirely by the system and reflect conditions that may require your
attention.

## How status tags work

When a domain enters a state that requires action or awareness, OpusDNS
assigns the corresponding status tag automatically via a background process.
Once the condition is resolved, the tag is removed. No API calls are needed on
your part to manage these tags.

## Available status tags

| Tag type | Label | Description |
| --- | --- | --- |
| `VERIFICATION_REQUIRED` | VERIFICATION REQUIRED | The domain requires identity verification from the registrant. Assigned when a registry mandates holder verification and removed once verification is completed. |

<scalar-callout type="info">
Additional status tag types may be introduced over time. Your integration should handle unknown <code>tag_type</code> values gracefully.
</scalar-callout>

## Status tag response format

When you request `include=tags` on a domain endpoint, each domain includes a
`status_tags` array alongside the user `tags` array:

```json
{
  "domain_id": "domain_01h45ytscbebyvny4gc8cr8ma2",
  "name": "example.com",
  "tags": [],
  "status_tags": [
    {
      "tag_type": "VERIFICATION_REQUIRED",
      "label": "VERIFICATION REQUIRED",
      "color": "color-1"
    }
  ]
}
```

| Field | Type | Description |
| --- | --- | --- |
| `tag_type` | `string` | The status tag type identifier (e.g. `VERIFICATION_REQUIRED`). Use this for programmatic checks. |
| `label` | `string` | Human-readable display label. |
| `description` | `string` | Optional description of the status condition. |
| `color` | `string` | Display color for UI rendering. |

## Include status tags in responses

Status tags are returned together with user tags when you add `include=tags`
to a domain request:

```bash
curl "$OPUSDNS_API_BASE/v1/domains?include=tags" \
  --header "X-Api-Key: $OPUSDNS_API_KEY"
```

This works on both the domain list and single-domain endpoints:

```bash
curl "$OPUSDNS_API_BASE/v1/domains/example.com?include=tags" \
  --header "X-Api-Key: $OPUSDNS_API_KEY"
```

## Filter domains by status tags

Use the `status_tags` parameter to find domains with specific status
conditions:

```bash
curl "$OPUSDNS_API_BASE/v1/domains?status_tags=VERIFICATION_REQUIRED&include=tags" \
  --header "X-Api-Key: $OPUSDNS_API_KEY"
```

### Filter mode

When filtering by multiple status tags, control the matching behavior with
`status_tag_mode`:

| Mode | Behavior |
| --- | --- |
| `match_any` | Domain matches if it has **at least one** of the specified status tags. This is the default. |
| `match_all` | Domain matches only if it has **all** of the specified status tags. |

```bash
curl "$OPUSDNS_API_BASE/v1/domains?status_tags=VERIFICATION_REQUIRED&status_tag_mode=match_all&include=tags" \
  --header "X-Api-Key: $OPUSDNS_API_KEY"
```

## Status tags vs. registry statuses

Status tags and registry statuses serve different purposes:

| | Status tags | Registry statuses |
| --- | --- | --- |
| **Source** | Assigned by OpusDNS based on internal processes | Set by the domain registry (e.g. Verisign, EURid) |
| **Purpose** | Indicate conditions that may need your attention | Control what operations are allowed on the domain |
| **Management** | Automatic — no API calls needed | Can be managed via `PATCH /v1/domains/{domain_reference}` |
| **Examples** | `VERIFICATION_REQUIRED` | `clientTransferProhibited`, `ok`, `pendingTransfer` |

Both are visible in the domain response but in separate fields:
`status_tags` for OpusDNS status tags and `registry_statuses` for EPP status
codes.

## Related guides

- [User tags](/products/domains/user-tags) — create and manage your own tags
- [The domain object](/products/domains/domain-object) — full domain response reference
- [Manage a domain](/products/domains/manage) — update domain configuration

## Related API Reference

- [`GET /v1/domains`](/api-reference#tag/domain/GET/v1/domains)
- [`GET /v1/domains/{domain_reference}`](/api-reference#tag/domain/GET/v1/domains/{domain_reference})
