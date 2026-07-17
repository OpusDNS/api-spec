# Manage suborganizations

Create, list, inspect, and update suborganizations under your parent
organization.

## Creating a suborganization

```bash
curl "$OPUSDNS_API_BASE/v1/organizations" \
  --request POST \
  --header "X-Api-Key: $OPUSDNS_API_KEY" \
  --header "Content-Type: application/json" \
  --data '{
    "name": "Customer A",
    "country_code": "DE",
    "city": "Berlin",
    "address_1": "Friedrichstraße 123",
    "postal_code": "10117",
    "currency": "EUR",
    "default_locale": "de"
  }'
```

### Organization fields

| Field | Required | Description |
| --- | --- | --- |
| `name` | Yes | Display name for the organization. |
| `billing_mode` | No | `consolidated` (default) or `independent` — see [Billing modes](#billing-modes). **Cannot be changed after creation.** |
| `country_code` | No | ISO 3166-1 alpha-2 country code. |
| `city` | No | City. |
| `address_1` | No | First line of the street address. |
| `address_2` | No | Second line of the street address. |
| `postal_code` | No | Postal or ZIP code. |
| `state` | No | State or province. |
| `currency` | No | Default currency for billing. |
| `default_locale` | No | Preferred locale for the organization. |
| `business_number` | No | Business registration number. |
| `tax_id` | No | Tax identification number (e.g., VAT ID). |
| `tax_id_type` | No | Type of tax ID. |
| `tax_rate` | No | Tax rate applied to transactions. |
| `attributes` | No | Custom key-value attributes (see [Attributes](/account/organizations/attributes)). |
| `users` | No | Users to create in the new organization. |

### Provisioning users at creation

You can create the suborganization and its initial users in a single request.
Each user is scoped to the new organization — they have no visibility into
the parent or other suborganizations:

```bash
curl "$OPUSDNS_API_BASE/v1/organizations" \
  --request POST \
  --header "X-Api-Key: $OPUSDNS_API_KEY" \
  --header "Content-Type: application/json" \
  --data '{
    "name": "Customer A",
    "country_code": "DE",
    "city": "Berlin",
    "address_1": "Friedrichstraße 123",
    "postal_code": "10117",
    "currency": "EUR",
    "users": [
      {
        "username": "customer-a-admin",
        "email": "admin@customer-a.com",
        "first_name": "Alice",
        "last_name": "Admin",
        "locale": "de_DE"
      },
      {
        "username": "customer-a-tech",
        "email": "tech@customer-a.com",
        "first_name": "Bob",
        "last_name": "Tech",
        "locale": "de_DE"
      }
    ]
  }'
```

Each user requires `username`, `email`, `first_name`, `last_name`, and
`locale` (underscore form, e.g. `en_US`). The **first user in the list becomes
the organization's owner**; subsequent users are created as admins.

You can add more users later with the [User management](/account/users) API.

## Billing modes

Every suborganization is created in one of two billing modes, set with the
`billing_mode` field on the create request:

| | `consolidated` (default) | `independent` |
| --- | --- | --- |
| Charges & invoices | Roll up to your (parent) account | The suborganization's own account |
| Wallet & payment methods | Yours | Its own wallet, balance, and payment methods |
| Extra required fields | None | `currency`, `country_code` |

**`billing_mode` is permanent.** It cannot be changed after creation — an
update request that includes `billing_mode` is rejected. Choose deliberately;
converting an organization between modes means deleting and recreating it.

### Creating an independent suborganization

```bash
curl "$OPUSDNS_API_BASE/v1/organizations" \
  --request POST \
  --header "X-Api-Key: $OPUSDNS_API_KEY" \
  --header "Content-Type: application/json" \
  --data '{
    "name": "Customer B (self-billed)",
    "billing_mode": "independent",
    "currency": "EUR",
    "country_code": "DE",
    "address_1": "Friedrichstraße 123",
    "city": "Berlin",
    "postal_code": "10117",
    "tax_id": "DE123456789",
    "users": [
      {
        "username": "customer-b-owner",
        "email": "billing@customer-b.example",
        "first_name": "Carol",
        "last_name": "Owner",
        "locale": "de_DE"
      }
    ]
  }'
```

Requirements and behavior:

- **`currency`** is required and must be `EUR` or `USD`. It becomes the
  organization's billing currency permanently.
- **`country_code`** is required.
- A **billing contact** is needed: the first user in `users[]` is used if
  present, otherwise your parent organization's owner. Include a full street
  address at creation — it is required later for checkout and balance top-ups.
- Provisioning is **synchronous and all-or-nothing**: a successful response
  means the organization's billing account, wallet, and payment setup all
  exist. If anything fails, nothing is created.
- New independent suborganizations start on **prepaid** terms. Contact support
  to arrange different payment terms.

### Errors

| HTTP | Error code | Meaning |
| --- | --- | --- |
| 422 | `ERROR_INDEPENDENT_BILLING_NOT_ALLOWED` | Independent billing is only available for suborganizations created directly under your top-level (billing) organization. |
| 422 | `ERROR_INDEPENDENT_BILLING_ATTRIBUTES_INVALID` | `currency` or `country_code` missing or invalid — the response lists every problem in `invalid_fields`. |
| 422 | `ERROR_INDEPENDENT_BILLING_CONTACT_NOT_FOUND` | No billing contact could be resolved — include a user in `users[]`. |

### Viewing an independent suborganization's billing

An independent suborganization sees its own invoices, transactions, and
billing data through the normal billing endpoints. As the parent, you can view
a suborganization's billing by sending its ID in the `X-Organization-Context`
header on those same endpoints:

```bash
curl "$OPUSDNS_API_BASE/v1/organizations/organization_01h45.../transactions" \
  --header "X-Api-Key: $OPUSDNS_API_KEY" \
  --header "X-Organization-Context: organization_01h46..."
```

For a consolidated view of spend across your whole organization tree —
including independent suborganizations — a monthly **suborganization billing
transactions report** is available via the [Reports API](/api-reference#tag/report):
each row is one transaction, with columns for the organization that incurred
it and the organization that was billed for it.

## Listing suborganizations

List all suborganizations under your current organization:

```bash
curl "$OPUSDNS_API_BASE/v1/organizations?page=1&page_size=25" \
  --header "X-Api-Key: $OPUSDNS_API_KEY"
```

### Searching and filtering

```bash
curl --get "$OPUSDNS_API_BASE/v1/organizations" \
  --header "X-Api-Key: $OPUSDNS_API_KEY" \
  --data-urlencode "search=Customer" \
  --data-urlencode "country_code=DE" \
  --data-urlencode "sort_by=name" \
  --data-urlencode "sort_order=asc"
```

| Parameter | Description |
| --- | --- |
| `search` | Search by organization name. |
| `country_code` | Filter by country code. |
| `sort_by` | Sort by `created_on`, `name`, or `country_code`. |
| `sort_order` | `asc` or `desc`. |
| `page` | Page number (default: 1). |
| `page_size` | Results per page (default: 10, max: 1000). |

## Getting organization details

Retrieve full details including billing data, active plan, and users:

```bash
curl "$OPUSDNS_API_BASE/v1/organizations/organization_01h45ytscbebyvny4gc8cr8ma2" \
  --header "X-Api-Key: $OPUSDNS_API_KEY"
```

```json
{
  "organization_id": "organization_01h45ytscbebyvny4gc8cr8ma2",
  "name": "Customer A",
  "status": "active",
  "country_code": "DE",
  "parent_organization_id": "organization_01h35xrscbebyvny4gc8cr8ma2",
  "account_balance": 150.00,
  "active_plan": {
    "plan_id": "plan_01h45ytscbebyvny4gc8cr8ma2",
    "name": "Professional",
    "plan_level": 2,
    "amount": 29.99,
    "currency": "EUR"
  },
  "billing_metadata": {
    "billing_model": "prepaid",
    "credit_limit": 500.00,
    "customer_number": "CUST-00123"
  },
  "users": [
    {
      "user_id": "user_01h45ytscbebyvny4gc8cr8ma2",
      "username": "customer-a-admin",
      "email": "admin@customer-a.com",
      "status": "active"
    }
  ],
  "created_on": "2026-01-15T10:00:00Z"
}
```

### Response fields

| Field | Description |
| --- | --- |
| `organization_id` | Unique identifier. |
| `name` | Display name. |
| `status` | `active` or `inactive`. |
| `parent_organization_id` | The parent organization (your reseller account). |
| `account_balance` | Current account balance. |
| `active_plan` | The billing plan — includes plan ID, name, level, amount, and currency. |
| `billing_metadata` | Billing configuration — model (`prepaid`/`postpaid`), credit limit, customer number. |
| `users` | Users that belong to this organization. |
| `created_on` | When the organization was created. |

## Updating an organization

Update any field with a PATCH request. Only include the fields you want to
change:

```bash
curl "$OPUSDNS_API_BASE/v1/organizations/organization_01h45ytscbebyvny4gc8cr8ma2" \
  --request PATCH \
  --header "X-Api-Key: $OPUSDNS_API_KEY" \
  --header "Content-Type: application/json" \
  --data '{
    "name": "Customer A - Rebranded",
    "city": "Munich",
    "default_locale": "en"
  }'
```

## Related API Reference

- [`POST /v1/organizations`](/api-reference#tag/organization/POST/v1/organizations)
- [`GET /v1/organizations`](/api-reference#tag/organization/GET/v1/organizations)
- [`GET /v1/organizations/{organization_id}`](/api-reference#tag/organization/GET/v1/organizations/{organization_id})
- [`PATCH /v1/organizations/{organization_id}`](/api-reference#tag/organization/PATCH/v1/organizations/{organization_id})
