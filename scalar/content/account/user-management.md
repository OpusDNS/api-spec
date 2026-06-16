# User management

Every user in OpusDNS belongs to exactly one organization. A user in your
parent organization can manage all suborganizations and their resources. A
user created inside a suborganization is scoped to that suborganization only
— they cannot see or access other organizations.

Each user has a globally unique username and email address, and can hold
custom attributes for your integration needs. Access and security settings are
managed through the
[OpusDNS Dashboard](https://app.opusdns.com).

## Creating a user

Create a new user within your organization. The user will belong to the
organization that your API key is scoped to:

```bash
curl "$OPUSDNS_API_BASE/v1/users" \
  --request POST \
  --header "X-Api-Key: $OPUSDNS_API_KEY" \
  --header "Content-Type: application/json" \
  --data '{
    "username": "jane.doe",
    "email": "jane@example.com",
    "first_name": "Jane",
    "last_name": "Doe",
    "locale": "en"
  }'
```

### User fields

| Field | Required | Description |
| --- | --- | --- |
| `username` | Yes | Unique username (globally unique across OpusDNS). |
| `email` | No | Email address (globally unique). |
| `first_name` | No | First name. |
| `last_name` | No | Last name. |
| `locale` | No | Preferred locale (e.g., `en`, `de`). |
| `phone` | No | Phone number. |
| `user_attributes` | No | Custom key-value attributes. |

## Listing users

List all users in your organization:

```bash
curl "$OPUSDNS_API_BASE/v1/organizations/users?page=1&page_size=25" \
  --header "X-Api-Key: $OPUSDNS_API_KEY"
```

| Parameter | Description |
| --- | --- |
| `sort_by` | Sort by `created_on`, `username`, or `email`. |
| `sort_order` | `asc` or `desc`. |

## Getting user details

Retrieve the currently authenticated user:

```bash
curl "$OPUSDNS_API_BASE/v1/users/me" \
  --header "X-Api-Key: $OPUSDNS_API_KEY"
```

Or get a specific user by ID:

```bash
curl "$OPUSDNS_API_BASE/v1/users/user_01h45ytscbebyvny4gc8cr8ma2" \
  --header "X-Api-Key: $OPUSDNS_API_KEY"
```

Both return the user record:

```json
{
  "user_id": "user_01h45ytscbebyvny4gc8cr8ma2",
  "organization_id": "organization_01h35xrscbebyvny4gc8cr8ma2",
  "username": "jane.doe",
  "email": "jane@example.com",
  "first_name": "Jane",
  "last_name": "Doe",
  "locale": "en",
  "status": "active",
  "created_on": "2026-01-15T10:00:00Z"
}
```

You can request specific attributes by passing `attributes[]` query
parameters:

```bash
curl --get "$OPUSDNS_API_BASE/v1/users/user_01h45ytscbebyvny4gc8cr8ma2" \
  --header "X-Api-Key: $OPUSDNS_API_KEY" \
  --data-urlencode "attributes=department" \
  --data-urlencode "attributes=team"
```

## Updating a user

Update user fields with a PATCH request:

```bash
curl "$OPUSDNS_API_BASE/v1/users/user_01h45ytscbebyvny4gc8cr8ma2" \
  --request PATCH \
  --header "X-Api-Key: $OPUSDNS_API_KEY" \
  --header "Content-Type: application/json" \
  --data '{
    "first_name": "Jane",
    "last_name": "Smith",
    "locale": "de"
  }'
```

Only include the fields you want to change.

## Roles

Each user holds a single role that determines what they can do within the
organization. See [Roles & permissions](/account/organizations/roles) for how
roles and permissions work, and the list of built-in roles.

### Getting a user's role

```bash
curl "$OPUSDNS_API_BASE/v1/users/user_01h45ytscbebyvny4gc8cr8ma2/role" \
  --header "X-Api-Key: $OPUSDNS_API_KEY"
```

```json
{
  "role": "domain_manager"
}
```

### Setting a user's role

Assign a role with a `PUT` request, replacing any existing role. Pass either a
built-in role name (for example `viewer`) or the label of a custom role owned by
the user's organization (for example `support_staff`):

```bash
curl "$OPUSDNS_API_BASE/v1/users/user_01h45ytscbebyvny4gc8cr8ma2/role" \
  --request PUT \
  --header "X-Api-Key: $OPUSDNS_API_KEY" \
  --header "Content-Type: application/json" \
  --data '{
    "role": "support_staff"
  }'
```

<scalar-callout type="info">
The `owner` role cannot be assigned through this endpoint — it is report-only and established when the organization is created. Sending `owner` returns a validation error.
</scalar-callout>

## Deleting a user

Remove a user from the organization:

```bash
curl "$OPUSDNS_API_BASE/v1/users/user_01h45ytscbebyvny4gc8cr8ma2" \
  --request DELETE \
  --header "X-Api-Key: $OPUSDNS_API_KEY"
```

<scalar-callout type="warning">
You cannot delete yourself or the last admin user in an organization. These operations return a conflict error.
</scalar-callout>

## Related API Reference

- [`POST /v1/users`](/api-reference#tag/user/POST/v1/users)
- [`GET /v1/users/me`](/api-reference#tag/user/GET/v1/users/me)
- [`GET /v1/users/{user_id}`](/api-reference#tag/user/GET/v1/users/{user_id})
- [`PATCH /v1/users/{user_id}`](/api-reference#tag/user/PATCH/v1/users/{user_id})
- [`DELETE /v1/users/{user_id}`](/api-reference#tag/user/DELETE/v1/users/{user_id})
- [`GET /v1/users/{user_id}/role`](/api-reference#tag/user/GET/v1/users/{user_id}/role)
- [`PUT /v1/users/{user_id}/role`](/api-reference#tag/user/PUT/v1/users/{user_id}/role)
