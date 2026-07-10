# Using OpusDNS Nameservers

When you host DNS with OpusDNS, your domains should point to the OpusDNS
nameservers. We operate separate nameserver infrastructure for production
and sandbox environments.

## Production nameservers

Use these nameservers for live domains:

| Nameserver | Hostname |
| --- | --- |
| Primary | `ns1.opusdns.com` |
| Secondary | `ns2.opusdns.net` |

Set them when registering or transferring a domain:

```json
"nameservers": [
  { "hostname": "ns1.opusdns.com" },
  { "hostname": "ns2.opusdns.net" }
]
```

## Sandbox nameservers

The sandbox environment uses its own nameservers. Domains registered in the
sandbox should use these instead:

| Nameserver | Hostname |
| --- | --- |
| Primary | `ns1.sandbox.opusdns.com` |
| Secondary | `ns2.sandbox.opusdns.net` |

```json
"nameservers": [
  { "hostname": "ns1.sandbox.opusdns.com" },
  { "hostname": "ns2.sandbox.opusdns.net" }
]
```

<scalar-callout type="warning">
Production and sandbox nameservers are not interchangeable. Using production nameservers in the sandbox (or vice versa) will result in DNS resolution failures.
</scalar-callout>

## Using your own nameservers

You are not limited to OpusDNS nameservers — any nameserver hostname can be
set on a domain. If the nameserver hostname is subordinate to a domain in your
account (e.g. `ns1.example.com` serving `example.com`), the registry requires
a host object with glue records before domains can reference it. Create one
with the host endpoints first — see
[Host objects (glue records)](/products/domains/host-objects).

## When to set nameservers

You can set nameservers at several points:

- **During registration** — pass `nameservers` in the `POST /v1/domains` request. See [Register a domain](/products/domains/register).
- **During transfer** — pass `nameservers` in the `POST /v1/domains/transfer` request. See [Transfer a domain](/products/domains/transfer).
- **After registration** — update nameservers with `PATCH /v1/domains/{domain_reference}`. See [Manage a domain](/products/domains/manage).
- **In bulk** — use `domain_create_bulk`, `domain_transfer_bulk`, or `domain_update_bulk` in the [Jobs API](/automation/jobs/overview).

When a domain's nameservers change, OpusDNS automatically reconciles the
DNSSEC data published at the registry with the zone's DNSSEC state, so stale
records from a previous provider cannot break resolution. See
[Automatic DNSSEC reconciliation](/products/domains/dnssec#automatic-dnssec-reconciliation).

## Nameservers vs. zones

Setting nameservers and creating a DNS zone are independent operations:

| `create_zone` | `nameservers` provided | Result |
| --- | --- | --- |
| `true` | Yes | Creates a DNS zone **and** points the domain to the provided nameservers. |
| `true` | No | Creates a DNS zone only. Nameservers are not changed at the registry. |
| `false` | Yes | Points the domain to the provided nameservers. No zone is created. |
| `false` | No | No DNS action. |

<scalar-callout type="info">
Setting <code>create_zone: true</code> provisions a zone on OpusDNS infrastructure but does not automatically set nameservers at the registry. Always provide both if you want OpusDNS to handle DNS end-to-end.
</scalar-callout>
