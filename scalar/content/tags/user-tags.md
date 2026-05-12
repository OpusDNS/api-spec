# User tags

User tags are custom labels you create to organize and filter your domains,
contacts, and zones. Use them to categorize resources by project, team,
environment, client, or anything else that fits your workflow.

## Tag properties

| Field | Type | Description |
| --- | --- | --- |
| `tag_id` | `string` | Unique identifier for the tag (TypeID format, e.g. `tag_01h45ytscbebyvny4gc8cr8ma2`). |
| `label` | `string` | The display name of the tag. Must be unique per type within your organization. |
| `type` | `string` | The resource type this tag applies to: `DOMAIN`, `CONTACT`, or `ZONE`. |
| `color` | `string` | Display color, from `color-1` through `color-10`. Colors are intentionally generic so that API consumers can map them to values that match their own branding and UI. |
| `description` | `string` | An optional description of what this tag represents. |
| `object_count` | `integer` | Number of objects currently assigned this tag. |

## Create a tag

```bash
curl "$OPUSDNS_API_BASE/v1/tags" \
  --request POST \
  --header "X-Api-Key: $OPUSDNS_API_KEY" \
  --header "Content-Type: application/json" \
  --data '{
    "label": "Production",
    "type": "DOMAIN",
    "color": "color-3",
    "description": "Domains used in production environments"
  }'
```

Response:

```json
{
  "tag_id": "tag_01h45ytscbebyvny4gc8cr8ma2",
  "label": "Production",
  "type": "DOMAIN",
  "color": "color-3",
  "description": "Domains used in production environments",
  "object_count": 0,
  "created_on": "2026-05-12T10:00:00Z",
  "updated_on": "2026-05-12T10:00:00Z"
}
```

## List tags

Retrieve all tags for your organization, optionally filtered by type:

```bash
curl "$OPUSDNS_API_BASE/v1/tags?tag_types=DOMAIN" \
  --header "X-Api-Key: $OPUSDNS_API_KEY"
```

The response is paginated and supports sorting by `label`, `created_on`, or
`updated_on`.

## Update a tag

Change the label, color, or description of an existing tag:

```bash
curl "$OPUSDNS_API_BASE/v1/tags/tag_01h45ytscbebyvny4gc8cr8ma2" \
  --request PATCH \
  --header "X-Api-Key: $OPUSDNS_API_KEY" \
  --header "Content-Type: application/json" \
  --data '{
    "label": "Staging",
    "color": "color-5"
  }'
```

## Delete a tag

Deleting a tag removes it from all assigned objects.

```bash
curl "$OPUSDNS_API_BASE/v1/tags/tag_01h45ytscbebyvny4gc8cr8ma2" \
  --request DELETE \
  --header "X-Api-Key: $OPUSDNS_API_KEY"
```

## Assign tags to objects

You can tag domains, contacts, and zones. There are two approaches depending
on whether you want to operate from the tag side or the object side.

### Bulk assign by object

Use `POST /v1/tags/objects` to add, remove, or replace tags across multiple
objects at once:

```bash
curl "$OPUSDNS_API_BASE/v1/tags/objects" \
  --request POST \
  --header "X-Api-Key: $OPUSDNS_API_KEY" \
  --header "Content-Type: application/json" \
  --data '{
    "type": "DOMAIN",
    "objects": [
      "domain_01h45ytscbebyvny4gc8cr8ma2",
      "domain_01j7abc123def456ghi789jkl"
    ],
    "add": [
      "tag_01h45ytscbebyvny4gc8cr8ma2"
    ]
  }'
```

You can use `add` and `remove` together to change tags in a single request.
Alternatively, pass `replace` to set the exact tag list for the given objects,
removing any tags not in the list.

<scalar-callout type="warning">
The <code>replace</code> field is mutually exclusive with <code>add</code> and <code>remove</code>. An empty <code>replace</code> list removes all tags from the objects.
</scalar-callout>

### Assign objects to a tag

Use `POST /v1/tags/{tag_id}/objects` to add or remove objects from a specific
tag:

```bash
curl "$OPUSDNS_API_BASE/v1/tags/tag_01h45ytscbebyvny4gc8cr8ma2/objects" \
  --request POST \
  --header "X-Api-Key: $OPUSDNS_API_KEY" \
  --header "Content-Type: application/json" \
  --data '{
    "add": [
      { "object_type": "DOMAIN", "object_id": "domain_01h45ytscbebyvny4gc8cr8ma2" }
    ]
  }'
```

## Include tags in domain responses

By default, domain responses do not include tag data. To include tags, add
`include=tags` as a query parameter:

```bash
curl "$OPUSDNS_API_BASE/v1/domains?include=tags" \
  --header "X-Api-Key: $OPUSDNS_API_KEY"
```

Each domain in the response will contain an additional `tags` array:

```json
{
  "domain_id": "domain_01h45ytscbebyvny4gc8cr8ma2",
  "name": "example.com",
  "tags": [
    { "tag_id": "tag_01h45ytscbebyvny4gc8cr8ma2", "label": "Production", "color": "color-3" }
  ]
}
```

| Field | Type | Description |
| --- | --- | --- |
| `tag_id` | `string` | The tag identifier. |
| `label` | `string` | The tag's display name. |
| `color` | `string` | The tag's display color. |

## Filter domains by user tags

Pass `tag_ids` to filter domains that have specific tags assigned:

```bash
curl "$OPUSDNS_API_BASE/v1/domains?tag_ids=tag_01h45ytscbebyvny4gc8cr8ma2&include=tags" \
  --header "X-Api-Key: $OPUSDNS_API_KEY"
```

When filtering by multiple tags, control the matching behavior with
`tag_mode`:

| Mode | Behavior |
| --- | --- |
| `match_any` | Domain matches if it has **at least one** of the specified tags. This is the default. |
| `match_all` | Domain matches only if it has **all** of the specified tags. |

```bash
curl "$OPUSDNS_API_BASE/v1/domains?tag_ids=tag_01a,tag_02b&tag_mode=match_all&include=tags" \
  --header "X-Api-Key: $OPUSDNS_API_KEY"
```

## Related API Reference

- [`GET /v1/tags`](/api-reference#tag/tag/GET/v1/tags)
- [`POST /v1/tags`](/api-reference#tag/tag/POST/v1/tags)
- [`GET /v1/tags/{tag_id}`](/api-reference#tag/tag/GET/v1/tags/{tag_id})
- [`PATCH /v1/tags/{tag_id}`](/api-reference#tag/tag/PATCH/v1/tags/{tag_id})
- [`DELETE /v1/tags/{tag_id}`](/api-reference#tag/tag/DELETE/v1/tags/{tag_id})
- [`POST /v1/tags/objects`](/api-reference#tag/tag/POST/v1/tags/objects)
- [`POST /v1/tags/{tag_id}/objects`](/api-reference#tag/tag/POST/v1/tags/{tag_id}/objects)
- [`GET /v1/domains`](/api-reference#tag/domain/GET/v1/domains)
