# Organizations

OpusDNS uses a two-level organization model. Your account is the **parent
organization**, and you can create **suborganizations** beneath it — one for
each customer, department, or business unit you manage.

## How organizations work

### Parent and suborganizations

When you sign up for OpusDNS, you get a parent organization. This is your
reseller account — it holds your billing plan, account balance, and API
credentials. Underneath it, you create suborganizations to separate and
manage different portfolios:

```
Your Reseller Account (parent organization)
├── Customer A        (suborganization)
├── Customer B        (suborganization)
├── Customer C        (suborganization)
└── Internal Domains  (suborganization)
```

The structure is flat — suborganizations sit directly under the parent. There
are no sub-suborganizations.

<scalar-callout type="info">
The organization structure is strictly two-level. You cannot nest suborganizations within other suborganizations.
</scalar-callout>

### What's isolated

Each suborganization has its own:

- **Domains** — registered and managed independently.
- **DNS zones** — zones and records are scoped to the suborganization.
- **Users** — each user belongs to exactly one organization.
- **Contacts** — contacts are per-organization.
- **Settings** — custom attributes, locale, and configuration.

### What's shared

**Billing flows through the parent.** When a suborganization registers a
domain, renews, or uses any paid service, the cost is charged to the parent
organization's account balance. Suborganizations don't have their own payment
methods — the parent pays for everything.

This model is designed for resellers and hosting providers: you manage your
customers as suborganizations, and all charges consolidate on your single
reseller account. See [Billing & transactions](/account/organizations/billing)
for details on tracking spending.

<scalar-callout type="warning">
All charges from suborganizations are billed to the parent organization. Monitor your account balance to prevent failed operations.
</scalar-callout>

### Users and access

Users belong to exactly one organization — either the parent or a specific
suborganization. A user in the parent organization can manage
suborganizations and their resources. A user in a suborganization can only
access that suborganization's resources.

```
Your Reseller Account
├── Admin User (full access to parent + all suborganizations)
├── Billing User (manages invoices and transactions)
│
├── Customer A
│   ├── Customer A Admin (manages Customer A's domains only)
│   └── Customer A Tech  (manages Customer A's DNS only)
│
└── Customer B
    └── Customer B Admin (manages Customer B's domains only)
```

When creating a suborganization, you can provision users for it in the same
request. You can also create users later via the
[User management](/account/users) API.

## Organization statuses

| Status | Description |
| --- | --- |
| `active` | Organization is operational. |
| `inactive` | Organization is disabled — domains and services are frozen. |

## Roles

Roles determine what permissions users and API keys have within an organization
— through built-in roles or your own custom roles. See
[Roles & permissions](/account/organizations/roles) for the full guide, and
[User management](/account/users) for how to assign a role to a user.

## Related API Reference

- [`POST /v1/organizations`](/api-reference#tag/organization/POST/v1/organizations)
- [`GET /v1/organizations`](/api-reference#tag/organization/GET/v1/organizations)
- [`GET /v1/organizations/{organization_id}`](/api-reference#tag/organization/GET/v1/organizations/{organization_id})
- [`PATCH /v1/organizations/{organization_id}`](/api-reference#tag/organization/PATCH/v1/organizations/{organization_id})
- [`GET /v1/organizations/roles`](/api-reference#tag/organization/GET/v1/organizations/roles)
