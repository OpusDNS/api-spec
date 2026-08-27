# Recipes

Worked answers to the jobs people actually bring to a registrar. Each recipe is
the sentence you type, the calls it turns into, and the one thing that catches
people out.

Every request payload below is checked against the tool's real input schema
before it is published, so what you see is what the server accepts.

<scalar-callout type="info">
Every recipe that changes something is a two-step: <code>bulk_preview</code>
first — it submits nothing and asks for no approval — then
<code>bulk_submit</code> with the <strong>same</strong> arguments. The preview's
<code>matchedDomains</code> is the number to read before you approve.
</scalar-callout>

## Reading

### What is expiring, and how bad is it

> *"How many domains do I have, and what is expiring in the next 90 days?"*

`portfolio_summary` takes no arguments and answers both halves in one small
object. Only when you need the names does the model go on to `portfolio_query`:

<!-- example: portfolio_query -->

```json
{
  "selector": { "expires_in_30_days": true },
  "fields": ["name", "expires_on", "renewal_mode"],
  "pageSize": 50
}
```

**Watch out for** asking for the domain list first. `portfolio_summary` is a
fraction of the size and usually answers the question on its own.

### List domains by tag

> *"Which domains are tagged migration?"*

`tag_ids` takes tag **IDs**, not labels. The model resolves the label first —
`search_operations` for the tags list operation, then `call_operation` — and
only then filters:

<!-- example: portfolio_query -->

```json
{
  "selector": { "tag_ids": ["tag_01h45ytscbebyvny4gc8cr8ma2"] },
  "fields": ["name", "expires_on", "status_tags", "tags"],
  "pageSize": 100
}
```

**Watch out for** `status_tags` and `tags` coming back `null`. The domain list
only populates them when the request asks for them, so add
`"include": ["tags"]` to the selector when you project either field.

### Answer a question without pulling registrant data into the model

> *"Which .de domains renew automatically?"*

Use `portfolio_query` with an explicit `fields` list rather than
`call_operation` on the domains endpoint. The projection happens server-side, so
contact and registrant data never enters the conversation at all. See
[Data handling](/mcp-server/data-handling).

## Changing many domains

### Turn auto-renew off for a TLD

> *"Turn off auto-renew on every .io that expires this quarter."*

<!-- example: bulk_preview -->

```json
{
  "templateType": "domain_update_bulk",
  "template": { "renewal_mode": "expire" },
  "selector": { "tld": ["io"], "expires_in_90_days": true }
}
```

`renewal_mode` is `renew` or `expire`. Submit with `bulk_submit` and the
identical arguments.

**Watch out for** the direction. `expire` means *let it lapse* — this is the one
recipe where getting it backwards costs you the domain.

### Lock transfers across a tag

> *"Lock transfers on everything tagged migration."*

<!-- example: bulk_preview -->

```json
{
  "templateType": "domain_update_bulk",
  "template": { "status_changes": { "add": ["clientTransferProhibited"] } },
  "selector": { "tag_ids": ["tag_01h45ytscbebyvny4gc8cr8ma2"] }
}
```

`status_changes` is relative — `add` and `remove` against the current state,
which is what you want across a mixed portfolio. The sibling field `statuses`
*replaces* the whole set.

**Watch out for** passing the tag label instead of its id. The selector matches
nothing and the submit is refused with `selector matched no domains`.

### Move a set of domains to new nameservers

> *"Point everything on the old nameservers at ns1/ns2.opusdns.com."*

<!-- example: bulk_preview -->

```json
{
  "templateType": "domain_update_bulk",
  "template": {
    "nameservers": [
      { "hostname": "ns1.opusdns.com" },
      { "hostname": "ns2.opusdns.net" }
    ]
  },
  "selector": { "tld": ["com", "net"] }
}
```

**Watch out for** the shape: `nameservers` is a list of **objects** with a
`hostname`, not a list of strings. A glue record adds `ip_addresses` alongside.

### Give a set of domains a standard DNS zone

> *"Create zones for the new .io domains with a www record."*

<!-- example: bulk_preview -->

```json
{
  "templateType": "dns_zone_create_bulk",
  "template": {
    "dnssec_status": "disabled",
    "rrsets": [
      {
        "name": "www",
        "type": "A",
        "ttl": 3600,
        "records": [{ "rdata": "203.0.113.10" }]
      }
    ]
  },
  "selector": { "tld": ["io"] }
}
```

Zone templates are addressed by domain name rather than domain id, which the
server handles — you still only supply the selector.

### Replace a record across many zones

> *"Point www at 203.0.113.10 on all the .io zones."*

<!-- example: bulk_preview -->

```json
{
  "templateType": "dns_zone_patch_rrsets_bulk",
  "template": {
    "ops": [
      {
        "op": "upsert",
        "rrset": {
          "name": "www",
          "type": "A",
          "ttl": 300,
          "records": [{ "rdata": "203.0.113.10" }]
        }
      }
    ]
  },
  "selector": { "tld": ["io"] }
}
```

`upsert` replaces the whole RRset for that `(name, type)` — any prior records
are discarded — and `remove` deletes it outright. The server writes the `ops`
into each resolved zone, so `sampleInstances` shows a `zone_name` alongside
them.

**Watch out for** `upsert` being a replace, not an append. Adding one A record
to a name that already has two means listing all three.

### Redirect a set of domains to one landing page

> *"Redirect all the defensive registrations to the main site."*

<!-- example: bulk_preview -->

```json
{
  "templateType": "domain_forward_create_bulk",
  "template": {
    "enabled": true,
    "auto_create_zone": true,
    "https": {
      "redirects": [
        {
          "request_path": "/",
          "target_protocol": "https",
          "target_hostname": "www.acme-labs.com",
          "target_path": "/",
          "redirect_code": 301
        }
      ]
    }
  },
  "selector": { "tag_ids": ["tag_01h45ytscbebyvny4gc8cr8ma2"] },
  "hostnamePrefix": ""
}
```

`hostnamePrefix` decides *what* gets forwarded: `""` (the default) is the apex,
`"*."` is the wildcard subdomain. Run it twice to cover both.

**Watch out for** forgetting `auto_create_zone`. A forward needs a zone; without
it, domains that have none fail individually inside the batch.

### Switch off the wildcard forwards again

> *"Turn off the wildcard redirects on those."*

<!-- example: bulk_preview -->

```json
{
  "templateType": "domain_forward_disable_bulk",
  "template": {},
  "selector": { "tag_ids": ["tag_01h45ytscbebyvny4gc8cr8ma2"] },
  "hostnamePrefix": "*."
}
```

**Watch out for** `template`. The enable, disable and delete commands carry no
template of their own, but the tool still requires the argument — pass `{}`.

### Catch-all email forwarding across a portfolio

> *"Forward all mail on the .com domains to ops@acme-labs.com."*

<!-- example: bulk_preview -->

```json
{
  "templateType": "email_forward_create_bulk",
  "template": {
    "enabled": true,
    "auto_create_zone": true,
    "aliases": [{ "alias": "*", "forward_to": ["ops@acme-labs.com"] }]
  },
  "selector": { "tld": ["com"] }
}
```

### Change more than 1,000 domains

A batch is a single Jobs command, and one command carries at most 1,000
instances. A selector that resolves to more is refused before anything is
submitted:

```
selector matched more than the limit of 1000 domains; narrow the selector and
submit more than one batch, for example one TLD at a time
```

Split the work along a filter that partitions cleanly — one TLD at a time is
usually the least surprising:

> *"Do the .com domains first, then .de, then the rest."*

Each narrowed selector is its own preview, its own approval and its own
`batch_id`. Keep the ids: they are how you check and steer each half afterwards.

## Steering a batch

### Rescue a half-failed batch

> *"Batch batch_01k3n0m5xrf9pab6t2wqzhkvr3 has failures — retry only the ones
> that ran out of funds."*

First the state:

<!-- example: job_batch_status -->

```json
{ "batchId": "batch_01k3n0m5xrf9pab6t2wqzhkvr3" }
```

Then a targeted retry. `errorClass` is a list, and omitting it retries every
failed job in the batch:

<!-- example: job_batch_control -->

```json
{
  "batchId": "batch_01k3n0m5xrf9pab6t2wqzhkvr3",
  "action": "retry",
  "errorClass": ["BillingInsufficientFundsError"]
}
```

`pause`, `resume` and `cancel` take the same shape without `errorClass`. All
four are gated, so each one asks for approval.

**Watch out for** retrying before you have fixed the cause. A retry of an
insufficient-funds failure with the wallet still empty just fails again.

## One domain at a time

### Renew a single domain

> *"Renew acme-labs.com for a year."*

`search_operations` finds the operation, and because exactly one matches, its
`detail` comes back inline — no `describe_operation` hop:

<!-- example: call_operation -->

```json
{
  "operationId": "renew_domain_v1_domains__domain_reference__renew_post",
  "pathParams": { "domain_reference": "acme-labs.com" },
  "body": {
    "period": { "unit": "y", "value": 1 },
    "current_expiry_date": "2026-11-04T00:00:00Z"
  }
}
```

`domain_reference` accepts a name or a domain id. `current_expiry_date` is
required and is what stops a renewal being applied twice.

**Watch out for** looping this tool over a list of domains. That is what the
bulk tools exist for, and a loop costs one approval per domain.

## Acting for a customer

### Run any of the above inside a sub-organization

Add `organizationId` to **every** call in the sequence — the preview and the
submit both:

<!-- example: bulk_preview -->

```json
{
  "templateType": "domain_update_bulk",
  "template": { "renewal_mode": "expire" },
  "selector": { "tld": ["io"] },
  "organizationId": "organization_01h45ytscbebyvny4gc8cr8ma2"
}
```

**Watch out for** setting it on one leg only. A preview and a submit that
disagree about the organization are two different actions, so the approval will
not carry over. See [Sub-organizations](/mcp-server/sub-organizations).

## Related

- [Bulk operations with Jobs](/mcp-server/bulk-operations) — selectors,
  templates and limits in full
- [Bulk templates](/mcp-server/tools/templates) — every `templateType`, and the
  Jobs commands deliberately not reachable this way
- [Approvals and confirmations](/mcp-server/approvals)
- [Results and errors](/mcp-server/results)
