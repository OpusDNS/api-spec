# IP restrictions

Restrict API access to specific IP addresses or CIDR ranges. When IP
restrictions are enabled, requests from unauthorized networks are rejected
— adding a security layer on top of API key authentication.

## How it works

IP restrictions are configured per organization. Once you add at least one
restriction, only requests originating from an allowed network are accepted.
Requests from any other IP address receive a `403 Forbidden` response.

<scalar-callout type="danger">
Make sure to add all IP addresses your application uses before enabling restrictions. If you lock yourself out, contact <a href="mailto:support@opusdns.com">OpusDNS Support</a> for assistance.
</scalar-callout>

## Listing restrictions

View all currently configured IP restrictions:

```bash
curl "$OPUSDNS_API_BASE/v1/organizations/ip-restrictions" \
  --header "X-Api-Key: $OPUSDNS_API_KEY"
```

Each restriction includes a `last_used_on` timestamp showing when a request
last matched that rule — useful for identifying stale restrictions.

## Creating a restriction

Allow a specific IP range:

```bash
curl "$OPUSDNS_API_BASE/v1/organizations/ip-restrictions" \
  --request POST \
  --header "X-Api-Key: $OPUSDNS_API_KEY" \
  --header "Content-Type: application/json" \
  --data '{ "ip_network": "203.0.113.0/24" }'
```

Single IP addresses are automatically normalized to `/32` (IPv4) or `/128`
(IPv6). For example, submitting `203.0.113.10` is stored as
`203.0.113.10/32`.

### Common patterns

**Allow a single server:**

```json
{ "ip_network": "203.0.113.10" }
```

**Allow a subnet:**

```json
{ "ip_network": "10.0.0.0/16" }
```

**Allow an IPv6 range:**

```json
{ "ip_network": "2001:db8::/32" }
```

## Getting a restriction

```bash
curl "$OPUSDNS_API_BASE/v1/organizations/ip-restrictions/ip_restriction_01h45ytscbebyvny4gc8cr8ma2" \
  --header "X-Api-Key: $OPUSDNS_API_KEY"
```

## Updating a restriction

Change the allowed network range:

```bash
curl "$OPUSDNS_API_BASE/v1/organizations/ip-restrictions/ip_restriction_01h45ytscbebyvny4gc8cr8ma2" \
  --request PATCH \
  --header "X-Api-Key: $OPUSDNS_API_KEY" \
  --header "Content-Type: application/json" \
  --data '{ "ip_network": "203.0.113.0/25" }'
```

## Deleting a restriction

Remove a restriction to stop allowing that network:

```bash
curl "$OPUSDNS_API_BASE/v1/organizations/ip-restrictions/ip_restriction_01h45ytscbebyvny4gc8cr8ma2" \
  --request DELETE \
  --header "X-Api-Key: $OPUSDNS_API_KEY"
```

<scalar-callout type="warning">
If you delete the last restriction, IP filtering is effectively disabled and all networks are allowed again.
</scalar-callout>

## Related API Reference

- [`GET /v1/organizations/ip-restrictions`](/api-reference#tag/organization/GET/v1/organizations/ip-restrictions)
- [`POST /v1/organizations/ip-restrictions`](/api-reference#tag/organization/POST/v1/organizations/ip-restrictions)
- [`GET /v1/organizations/ip-restrictions/{ip_restriction_id}`](/api-reference#tag/organization/GET/v1/organizations/ip-restrictions/{ip_restriction_id})
- [`PATCH /v1/organizations/ip-restrictions/{ip_restriction_id}`](/api-reference#tag/organization/PATCH/v1/organizations/ip-restrictions/{ip_restriction_id})
- [`DELETE /v1/organizations/ip-restrictions/{ip_restriction_id}`](/api-reference#tag/organization/DELETE/v1/organizations/ip-restrictions/{ip_restriction_id})
