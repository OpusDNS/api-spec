# Trademarked Domains

Some domain names are protected by trademarks registered in the
**Trademark Clearinghouse (TMCH)**. When you attempt to register one of these
domains, the registry requires you to acknowledge a claims notice before the
registration can proceed.

## How it works

The TMCH is a centralized database of verified trademarks, mandated by ICANN
for all new generic TLDs (gTLDs). During a TLD's **claims period** — typically
the first 90 days after general availability — any registration attempt for a
domain matching a registered trademark triggers a claims notice.

<scalar-callout type="info">
Claims periods are set by each TLD's registry. Some TLDs extend claims
indefinitely. Check the <a href="/products/tlds/specifications">TLD specifications</a>
for details on a specific TLD's policies.
</scalar-callout>

## Identifying trademarked domains

When you check domain availability with `POST /v1/domains/check`, a trademarked
domain returns the status `tmch_claim`:

```json
{
  "results": [
    {
      "domain": "brandname.shop",
      "available": true,
      "status": "tmch_claim",
      "is_premium": false
    }
  ]
}
```

The `tmch_claim` status means the domain **is available** for registration, but
a claims notice must be acknowledged first.

| Status | Meaning |
| --- | --- |
| `available` | Available with no trademark restrictions. |
| `tmch_claim` | Available, but requires claims notice acceptance. |
| `unavailable` | Already registered by another party. |
| `market_available` | Available on the aftermarket. |
| `error` | The registry could not process the check. |

## Registration workflow

Registering a trademarked domain requires three steps beyond a normal
registration:

### 1. Retrieve the claims notice

After the availability check returns `tmch_claim`, retrieve the claims notice
for the domain:

```bash
curl "$OPUSDNS_API_BASE/v1/domains/claims/{domain_name}" \
  --header "X-Api-Key: $OPUSDNS_API_KEY"
```

The response contains the trademark information that must be presented to the
registrant, including:

- Trademark holder name and contact details
- Goods and services description
- Jurisdiction and registration number
- Notice expiration timestamp

### 2. Present the notice to the registrant

<scalar-callout type="warning">
ICANN policy requires that the claims notice is presented to the registrant
<strong>in full</strong> and that the registrant explicitly acknowledges it
before you proceed. Programmatically accepting notices without genuine
registrant acknowledgment violates ICANN's Registrar Accreditation Agreement.
</scalar-callout>

The registrant must review the trademark information and confirm they
understand that:

- The domain they are registering matches a registered trademark.
- They have a legitimate right or interest in the domain name.
- They are not registering the domain in bad faith.

### 3. Submit the registration with the acceptance hash

Once the registrant has acknowledged the notice, include the
`claims_notice_acceptance_hash` in your registration request:

```bash
curl "$OPUSDNS_API_BASE/v1/domains" \
  --request POST \
  --header "X-Api-Key: $OPUSDNS_API_KEY" \
  --header "Content-Type: application/json" \
  --data '{
    "name": "brandname.shop",
    "contacts": {
      "registrant": "contact_01h45ytscbebyvny4gc8cr8ma2"
    },
    "renewal_mode": "renew",
    "period": { "unit": "y", "value": 1 },
    "claims_notice_acceptance_hash": "abc123...def456"
  }'
```

<scalar-callout type="danger">
Claims notice acceptance hashes expire. If the hash has expired when you
submit the registration, the request will be rejected and you must retrieve a
new claims notice.
</scalar-callout>

## Bulk registration with TMCH

When using the [Jobs API](/automation/jobs/overview) for bulk domain
registration, you can include the `claims_notice_acceptance_hash` per instance:

```json
{
  "command": "domain_create_bulk",
  "payload": {
    "template": {
      "contacts": {
        "registrant": "contact_01h45ytscbebyvny4gc8cr8ma2"
      },
      "renewal_mode": "renew",
      "period": { "unit": "y", "value": 1 }
    },
    "instances": [
      {
        "name": "brand-one.shop",
        "claims_notice_acceptance_hash": "hash1..."
      },
      {
        "name": "brand-two.store",
        "claims_notice_acceptance_hash": "hash2..."
      }
    ]
  }
}
```

## Related guides

- [Register a domain](/products/domains/register) — full registration workflow
- [Premium domains](/products/domains/premium) — handling premium-priced names
- [TLD specifications](/products/tlds/specifications) — TLD policies and phases
- [Jobs: Domain commands](/automation/jobs/domain-commands) — bulk registration

## Related API Reference

- [`POST /v1/domains/check`](/api-reference#tag/domain/POST/v1/domains/check)
- [`POST /v1/domains`](/api-reference#tag/domain/POST/v1/domains)
- [`GET /v1/domains/claims/{domain_name}`](/api-reference#tag/domain/GET/v1/domains/claims/{domain_name})
