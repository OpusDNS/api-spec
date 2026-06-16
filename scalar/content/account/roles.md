# Roles & permissions

Roles control what each user and API key can do inside an organization. A role
is a named bundle of **permissions**, and every permission grants a single
**scope** on a single **resource**. OpusDNS ships a set of **built-in roles**
that cover the most common needs, and you can define your own **custom roles**
when you need a more specific set of permissions.

Roles are scoped to an organization. A user or API key in a suborganization can
only ever hold a role defined in — and limited to — that suborganization.

## Permissions

A permission is written as a `resource:scope` string, for example
`domains:read` or `dns:manage`. The scope describes what level of access the
permission grants:

| Scope | Grants |
| --- | --- |
| `read` | View resources of this type (list and get). |
| `manage` | Create and update resources of this type. |
| `delete` | Delete resources of this type. |

Permissions exist for each resource area of the API:

`organization`, `domains`, `contacts`, `dns`, `hosts`, `email_forwards`,
`domain_forwards`, `parking`, `events`, `jobs`, `billing`, `users`, `api_keys`,
`registrar_credentials`, `tags`, `audit_logs`

To retrieve the exact catalog of permissions a custom role may grant, call:

```bash
curl "$OPUSDNS_API_BASE/v1/organizations/role-permissions" \
  --header "X-Api-Key: $OPUSDNS_API_KEY"
```

```json
{
  "permissions": [
    "audit_logs:read",
    "billing:manage",
    "billing:read",
    "contacts:delete",
    "contacts:manage",
    "contacts:read",
    "dns:delete",
    "dns:manage",
    "dns:read",
    "domains:delete",
    "domains:manage",
    "domains:read"
  ]
}
```

## Built-in roles

Built-in roles are maintained by OpusDNS and are available in every
organization. They are immutable — you cannot change or delete them.

| Role | What it grants |
| --- | --- |
| `owner` | Full access. The organization's first user / super-admin. Report-only — see below. |
| `admin` | Full access to every resource in the organization. |
| `viewer` | Read-only access across domains, DNS, contacts, hosts, forwarding, parking, events, jobs, and users. |
| `domain_manager` | Full access (read/manage/delete) to domains, DNS, contacts, hosts, email & domain forwarding, parking, events, and jobs. |
| `dns_manager` | Full access to DNS zones, email forwarding, and domain forwarding. |
| `billing_manager` | Read and manage billing. |

<scalar-callout type="info">
`owner` is **report-only**. It identifies the organization's first user and is never assigned through the role API — it is established when the organization is created. The remaining built-in roles are freely assignable.
</scalar-callout>

## Custom roles

When the built-in roles don't fit, create a custom role with exactly the
permissions you need. Custom roles are owned by your organization.

Each custom role has a **label** — a `snake_case` identifier derived from its
display name (for example, the name `Support Staff` produces the label
`support_staff`). The label is unique within the organization and is used as the
URL path parameter for the role.

<scalar-callout type="info">
Custom roles cannot grant the escalation-bearing `admin` or `owner` permissions. Use the built-in `admin` role when full access is required.
</scalar-callout>

### Listing roles

List every role assignable in the organization — the built-in roles plus your
custom roles:

```bash
curl "$OPUSDNS_API_BASE/v1/organizations/roles" \
  --header "X-Api-Key: $OPUSDNS_API_KEY"
```

```json
[
  {
    "label": "admin",
    "name": "Admin",
    "description": "Full access to the organization.",
    "built_in": true,
    "permissions": ["organization:manage", "domains:manage", "dns:manage"]
  },
  {
    "label": "support_staff",
    "name": "Support Staff",
    "description": "Read domains and manage DNS.",
    "built_in": false,
    "permissions": ["domains:read", "dns:manage"],
    "created_on": "2026-06-16T10:00:00Z",
    "updated_on": "2026-06-16T10:00:00Z"
  }
]
```

### Creating a custom role

```bash
curl "$OPUSDNS_API_BASE/v1/organizations/roles" \
  --request POST \
  --header "X-Api-Key: $OPUSDNS_API_KEY" \
  --header "Content-Type: application/json" \
  --data '{
    "name": "Support Staff",
    "description": "Read domains and manage DNS.",
    "permissions": ["domains:read", "dns:manage"]
  }'
```

| Field | Required | Description |
| --- | --- | --- |
| `name` | Yes | Display name (1–64 chars). The label is derived from this. |
| `description` | No | Free-text description of the role. |
| `permissions` | Yes | List of `resource:scope` strings the role grants. |

The response is the created role, including its generated `label`:

```json
{
  "label": "support_staff",
  "name": "Support Staff",
  "description": "Read domains and manage DNS.",
  "built_in": false,
  "permissions": ["dns:manage", "domains:read"],
  "created_on": "2026-06-16T10:00:00Z",
  "updated_on": "2026-06-16T10:00:00Z"
}
```

A name that resolves to a built-in role label, or a duplicate name within the
organization, returns `409 Conflict`.

### Getting a single role

Retrieve any role — built-in or custom — by its label:

```bash
curl "$OPUSDNS_API_BASE/v1/organizations/roles/support_staff" \
  --header "X-Api-Key: $OPUSDNS_API_KEY"
```

### Updating a custom role

Update a custom role's name, description, and/or permissions. Provide only the
fields you want to change. When `permissions` is included it is a **full
replacement** of the role's permission set.

```bash
curl "$OPUSDNS_API_BASE/v1/organizations/roles/support_staff" \
  --request PATCH \
  --header "X-Api-Key: $OPUSDNS_API_KEY" \
  --header "Content-Type: application/json" \
  --data '{
    "permissions": ["domains:read", "dns:manage", "dns:delete"]
  }'
```

<scalar-callout type="info">
Permission changes take effect immediately for every user and API key that holds the role. Built-in roles are immutable and return `409 Conflict` if you attempt to update them.
</scalar-callout>

### Deleting a custom role

```bash
curl "$OPUSDNS_API_BASE/v1/organizations/roles/support_staff" \
  --request DELETE \
  --header "X-Api-Key: $OPUSDNS_API_KEY"
```

<scalar-callout type="warning">
A role cannot be deleted while it is still assigned to any user or API key — reassign those subjects first, or the request returns `409 Conflict`. Built-in roles cannot be deleted.
</scalar-callout>

## Assigning roles

Roles are granted per subject:

- **Users** — assign a role with the
  [User management](/account/users) role endpoints.
- **API keys** — every API key carries its own role, granted when the key is
  issued (defaulting to `admin`, full access). A key's role governs its
  permissions exactly like a user's role, and applies independently of the user
  who created the key. Choose or change a key's role from the **API Credentials**
  page of the [OpusDNS Dashboard](https://app.opusdns.com/developer/api-credentials).
  Grant each key the narrowest role it needs.

You can assign either a built-in role (by name, for example `viewer`) or a
custom role (by its label, for example `support_staff`).

## Related API Reference

- [`GET /v1/organizations/roles`](/api-reference#tag/organization/GET/v1/organizations/roles)
- [`POST /v1/organizations/roles`](/api-reference#tag/organization/POST/v1/organizations/roles)
- [`GET /v1/organizations/role-permissions`](/api-reference#tag/organization/GET/v1/organizations/role-permissions)
- [`GET /v1/organizations/roles/{label}`](/api-reference#tag/organization/GET/v1/organizations/roles/{label})
- [`PATCH /v1/organizations/roles/{label}`](/api-reference#tag/organization/PATCH/v1/organizations/roles/{label})
- [`DELETE /v1/organizations/roles/{label}`](/api-reference#tag/organization/DELETE/v1/organizations/roles/{label})
