# Welcome to OpusDNS

OpusDNS is a modern domain wholesale platform built for registrars, hosting
providers, and anyone who manages domains at scale. Our API gives you
programmatic control over the full domain lifecycle — from availability checks
and registration to DNS management, forwarding, and automated renewals.

## What you can do with the API

| Capability | Description |
| --- | --- |
| **Domain management** | Register, transfer, renew, and delete domains across hundreds of TLDs. |
| **DNS hosting** | Create zones, manage records, and enable DNSSEC — all through a single API. |
| **Domain & email forwarding** | Set up HTTP redirects and email aliases with built-in analytics. |
| **Batch operations** | Submit bulk commands and let OpusDNS process them asynchronously. |
| **Events & polling** | Track every change to your domains in real time through the event stream. |

## Environments

OpusDNS provides two environments. Use the sandbox for development and testing
— it's completely isolated from production and free to use.

<scalar-callout type="success">
The sandbox environment is completely free — no charges apply for any operations, including domain registrations and transfers.
</scalar-callout>

| Environment | API base URL | Dashboard |
| --- | --- | --- |
| **Production** | `https://api.opusdns.com` | [app.opusdns.com](https://app.opusdns.com) |
| **Sandbox** | `https://sandbox.opusdns.com` | [app.sandbox.opusdns.com](https://app.sandbox.opusdns.com) |

## Resource IDs

The API uses [TypeIDs](https://github.com/jetify-com/typeid) — type-safe,
globally unique identifiers inspired by Stripe IDs. Every resource ID includes
a human-readable prefix that tells you what kind of resource it belongs to:

```
domain_01jxe1zw90f1t8vgpyfns8qwk1
user_01jxe1z8atfxpabknqbzhkvr3s
organization_01jxe20q5hf9p4bm3kfz7v0w6t
```

This makes debugging easier — you can immediately tell whether you're looking
at a domain, a user, or an organization, without needing to check the context.
Libraries are available for
[many languages](https://github.com/jetify-com/typeid?tab=readme-ov-file#official-implementations-by-jetify)
to work with TypeIDs natively.

## SDKs and tools

We maintain official client libraries and integrations:

- [**OpusDNS Go Client**](https://github.com/OpusDNS/opusdns-go-client) — full
  Go client covering every API endpoint.

Check [our GitHub](https://github.com/OpusDNS/) for the latest SDKs, plugins,
and open-source tooling.

## Getting help

- [**Support**](mailto:support@opusdns.com) — open a ticket for any API or
  integration questions.
- [**Knowledgebase**](https://help.opusdns.com/) — self-service guides and FAQs.
- [**Status**](https://status.opusdns.com/) — real-time platform availability.
