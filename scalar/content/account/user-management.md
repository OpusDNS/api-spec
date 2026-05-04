# User management

Every user in OpusDNS belongs to exactly one organization. A user in your
parent organization can manage all suborganizations and their resources. A
user created inside a suborganization is scoped to that suborganization only
— they cannot see or access other organizations.

Each user has a globally unique username and email address, and can hold
custom attributes for your integration needs. Roles, permissions, passwords,
and security settings are managed through the
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
  "created_on": "2026-01-15T10:00:00Z",
  "last_login": "2026-05-04T09:30:00Z"
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
