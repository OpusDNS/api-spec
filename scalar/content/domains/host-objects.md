# Host Objects (Glue Records)

A host object represents a nameserver hostname registered at a registry. When a
nameserver hostname is subordinate to a domain in your portfolio — for example
`ns1.example.com` serving `example.com` — the registry requires a host object
carrying one or more IP addresses, commonly known as **glue records**, so that
resolvers can reach the nameserver even though its address lives inside the
zone it serves.

## When you need a host object

You need a host object when you want to use your own (vanity) nameservers
whose hostnames sit under a domain you manage with OpusDNS:

1. Create the host object with its IP addresses (`POST /v1/hosts`).
2. Point your domains at the new nameserver hostname, e.g. via
   `PATCH /v1/domains/{domain_reference}`. See [Manage a domain](/products/domains/manage).

You do **not** need a host object for external nameservers (e.g. your DNS
provider's hostnames such as `ns1.yourdns.com`) — simply reference them by
hostname when setting a domain's nameservers.

<scalar-callout type="info">
The host endpoints manage <strong>subordinate</strong> host objects: the parent
domain of the hostname must be managed in your OpusDNS account. Requests for
hostnames whose parent domain is not in your account are rejected with
<code>ERROR_PARENT_DOMAIN_NOT_FOUND</code>.
</scalar-callout>

## Create a host object

Provide the hostname and at least one IP address. The host object is created at
the registry of the parent domain:

```bash
curl "$OPUSDNS_API_BASE/v1/hosts" \
  --request POST \
  --header "X-Api-Key: $OPUSDNS_API_KEY" \
  --header "Content-Type: application/json" \
  --data '{
    "hostname": "ns1.example.com",
    "ip_addresses": ["192.0.2.53", "2001:db8::53"]
  }'
```

| Field | Required | Notes |
| --- | --- | --- |
| `hostname` | Yes | Must be subordinate to a domain in your account. |
| `ip_addresses` | Yes | One or more IPv4 and/or IPv6 addresses. |

The response returns the host object:

```json
{
  "host_id": "host_01h455vb4pex5vsknk084sn02q",
  "hostname": "ns1.example.com",
  "ip_addresses": ["192.0.2.53", "2001:db8::53"],
  "created_on": "2026-06-12T09:00:00Z",
  "updated_on": "2026-06-12T09:00:00Z"
}
```

## Retrieve a host object

`GET`, `PUT`, and `DELETE` accept either the host ID (`host_...`) or the
hostname as the `{host_reference}` path parameter:

```bash
curl "$OPUSDNS_API_BASE/v1/hosts/ns1.example.com" \
  --header "X-Api-Key: $OPUSDNS_API_KEY"
```

## Update a host object

`PUT /v1/hosts/{host_reference}` replaces the host's IP addresses with the
provided list:

```bash
curl "$OPUSDNS_API_BASE/v1/hosts/ns1.example.com" \
  --request PUT \
  --header "X-Api-Key: $OPUSDNS_API_KEY" \
  --header "Content-Type: application/json" \
  --data '{
    "ip_addresses": ["192.0.2.54", "2001:db8::54"]
  }'
```

If the provided addresses already match the current state at the registry, the
request succeeds without performing a registry update.

## Delete a host object

```bash
curl "$OPUSDNS_API_BASE/v1/hosts/ns1.example.com" \
  --request DELETE \
  --header "X-Api-Key: $OPUSDNS_API_KEY"
```

A host that is still in use as a nameserver by one or more domains cannot be
deleted and returns `ERROR_HOST_IN_USE`. Update the affected domains to use
different nameservers first.

## Errors

| Code | Status | Meaning |
| --- | --- | --- |
| `ERROR_PARENT_DOMAIN_NOT_FOUND` | 404 | The parent domain of the hostname is not managed in your account. |
| `ERROR_HOST_NOT_FOUND` | 404 | No host object matches the given reference. |
| `ERROR_HOST_ALREADY_EXISTS` | 409 | A host object with this hostname already exists. |
| `ERROR_HOST_IN_USE` | 409 | The host is referenced as a nameserver by one or more domains and cannot be deleted. |
| `ERROR_HOST_OBJECTS_NOT_SUPPORTED` | 422 | The TLD of the parent domain does not use host objects. |

## Related API Reference

- [`POST /v1/hosts`](/api-reference#tag/host/POST/v1/hosts)
- [`GET /v1/hosts/{host_reference}`](/api-reference#tag/host/GET/v1/hosts/{host_reference})
- [`PUT /v1/hosts/{host_reference}`](/api-reference#tag/host/PUT/v1/hosts/{host_reference})
- [`DELETE /v1/hosts/{host_reference}`](/api-reference#tag/host/DELETE/v1/hosts/{host_reference})
