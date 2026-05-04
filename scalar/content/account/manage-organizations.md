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
    "address": "Friedrichstraße 123",
    "postal_code": "10117",
    "currency": "EUR",
    "default_locale": "de"
  }'
```

### Organization fields

| Field | Required | Description |
| --- | --- | --- |
| `name` | Yes | Display name for the organization. |
| `country_code` | No | ISO 3166-1 alpha-2 country code. |
| `city` | No | City. |
| `address` | No | Street address. |
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
    "address": "Friedrichstraße 123",
    "postal_code": "10117",
    "currency": "EUR",
    "users": [
      {
        "username": "customer-a-admin",
        "email": "admin@customer-a.com",
        "first_name": "Alice",
        "last_name": "Admin"
      },
      {
        "username": "customer-a-tech",
        "email": "tech@customer-a.com",
        "first_name": "Bob",
        "last_name": "Tech"
      }
    ]
  }'
```

You can add more users later with the [User management](/account/users) API.

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
