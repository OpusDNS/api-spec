# Delegate a subdomain

Sub-zone delegation hands authority for a subdomain to a different set of
nameservers, while the parent zone stays on OpusDNS. This is done with **NS
records below the zone apex** — for example, delegating `internal.example.com`
to your own infrastructure, or `shop.example.com` to another provider.

Delegation NS RRsets are ordinary records: create them at zone creation or with
any of the [record management endpoints](/products/dns/manage-records), and
remove them the same way. This is different from changing the nameservers of
the **whole domain** — for that, update the
[domain's nameservers](/products/domains/nameservers) instead. NS records *at* the zone apex are
system-managed by OpusDNS and cannot be modified through the zone endpoints.

## Delegate a subdomain

Add an NS RRset at the subdomain you want to delegate:

```bash
curl "$OPUSDNS_API_BASE/v1/dns/example.com/rrsets" \
  --request PATCH \
  --header "X-Api-Key: $OPUSDNS_API_KEY" \
  --header "Content-Type: application/json" \
  --data '{
    "ops": [
      {
        "op": "upsert",
        "rrset": {
          "name": "internal.example.com.",
          "type": "NS",
          "ttl": 3600,
          "records": [
            { "rdata": "ns1.other-provider.net." },
            { "rdata": "ns2.other-provider.net." }
          ]
        }
      }
    ]
  }'
```

From that moment, OpusDNS nameservers answer queries for
`internal.example.com` (and every name below it) with a **referral** to
`ns1.other-provider.net.` and `ns2.other-provider.net.` — those nameservers
are now authoritative for the delegated subtree.

You can also include delegation NS RRsets directly in the `rrsets` array when
[creating a zone](/products/dns/manage-zones).

## Remove a delegation

Remove the NS RRset and the parent zone becomes authoritative for the subtree
again:

```bash
curl "$OPUSDNS_API_BASE/v1/dns/example.com/rrsets" \
  --request PATCH \
  --header "X-Api-Key: $OPUSDNS_API_KEY" \
  --header "Content-Type: application/json" \
  --data '{
    "ops": [
      {
        "op": "remove",
        "rrset": {
          "name": "internal.example.com.",
          "type": "NS",
          "ttl": 3600,
          "records": []
        }
      }
    ]
  }'
```

Individual nameservers can be added or removed one at a time with the
record-level endpoint (`PATCH /v1/dns/{zone_name}/records`), like any other
record type.

## What to know before delegating

- **Records below a delegation point stop resolving publicly.** Once
  `internal.example.com` is delegated, any records the parent zone holds at or
  below that name — including [domain forwards](/products/dns/domain-forwarding),
  [email forwards](/products/dns/email-forwarding), and parking — are no longer
  served; the delegated nameservers are authoritative for that subtree. The
  records remain stored in the zone and resolve again if the delegation is
  removed.
- **Delegations from DNSSEC-signed zones are insecure delegations.** Child DS
  records are not supported, so the delegated subtree is not covered by the
  parent's chain of trust. The delegation itself works — resolvers simply treat
  the subtree as unsigned. DS RRsets in zone payloads are rejected.
- **The delegated nameservers must be set up separately.** OpusDNS publishes
  the referral; serving the actual records for the subtree is up to the
  nameservers you delegate to.
