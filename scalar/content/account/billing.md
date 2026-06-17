# Billing & transactions

All OpusDNS charges — domain registrations, renewals, transfers, and
services — are billed to the parent organization's account balance.
When a suborganization performs a paid operation, the cost is deducted from
the parent's balance. Suborganizations do not have their own payment methods
or account balances.

<scalar-callout type="warning">
For prepaid accounts, operations are rejected when the account balance is insufficient. Make sure to maintain adequate funds to avoid failed registrations or renewals.
</scalar-callout>

## Invoices

List invoices for an organization:

```bash
curl "$OPUSDNS_API_BASE/v1/organizations/organization_01h45ytscbebyvny4gc8cr8ma2/billing/invoices?page=1&page_size=25" \
  --header "X-Api-Key: $OPUSDNS_API_KEY"
```

## Transactions

View the transaction history. Each transaction shows the amount, currency,
timestamp, and which operation triggered it:

```bash
curl "$OPUSDNS_API_BASE/v1/organizations/organization_01h45ytscbebyvny4gc8cr8ma2/transactions?page=1&page_size=25" \
  --header "X-Api-Key: $OPUSDNS_API_KEY"
```

### Transaction detail

Get full details for a specific transaction:

```bash
curl "$OPUSDNS_API_BASE/v1/organizations/organization_01h45ytscbebyvny4gc8cr8ma2/transactions/billing_transaction_01h45ytscbebyvny4gc8cr8ma2" \
  --header "X-Api-Key: $OPUSDNS_API_KEY"
```

## Pricing

Retrieve the product pricing that applies to an organization. This is
useful for displaying costs to your customers or validating expected prices
before submitting operations:

```bash
curl "$OPUSDNS_API_BASE/v1/organizations/organization_01h45ytscbebyvny4gc8cr8ma2/pricing/product-type/domain" \
  --header "X-Api-Key: $OPUSDNS_API_KEY"
```

## Billing metadata

Organization details include billing configuration in the
`billing_metadata` field:

| Field | Description |
| --- | --- |
| `billing_model` | How the organization is billed — e.g., `prepaid` or `postpaid`. |
| `credit_limit` | Maximum credit allowed (for postpaid models). |
| `customer_number` | Your internal customer reference number. |

## Account balance

The `account_balance` on the organization response shows the current funds
available. For prepaid accounts, operations are rejected when the balance
is insufficient. Top up your balance through the
[OpusDNS Dashboard](https://app.opusdns.com).

## Related API Reference

- [`GET /v1/organizations/{organization_id}/billing/invoices`](/api-reference#tag/organization/GET/v1/organizations/{organization_id}/billing/invoices)
- [`GET /v1/organizations/{organization_id}/transactions`](/api-reference#tag/organization/GET/v1/organizations/{organization_id}/transactions)
- [`GET /v1/organizations/{organization_id}/transactions/{transaction_id}`](/api-reference#tag/organization/GET/v1/organizations/{organization_id}/transactions/{transaction_id})
- [`GET /v1/organizations/{organization_id}/pricing/product-type/{product_type}`](/api-reference#tag/organization/GET/v1/organizations/{organization_id}/pricing/product-type/{product_type})
