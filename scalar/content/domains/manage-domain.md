# Manage a domain

After registering or transferring a domain, you can update its configuration at
any time using the OpusDNS API. This guide covers the most common management
tasks.

## Update nameservers

Replace the nameservers on a domain with `PATCH /v1/domains/{domain_reference}`.
Pass the full set of nameservers you want — the existing list is replaced
entirely. See [Using OpusDNS Nameservers](/products/domains/nameservers) for the OpusDNS
nameserver hostnames.

```bash
curl "$OPUSDNS_API_BASE/v1/domains/example.com" \
  --request PATCH \
  --header "X-Api-Key: $OPUSDNS_API_KEY" \
  --header "Content-Type: application/json" \
  --data '{
    "nameservers": [
      { "hostname": "ns1.newprovider.net" },
      { "hostname": "ns2.newprovider.net" }
    ]
  }'
```

<scalar-callout type="info">
If you set <code>create_zone: true</code> during registration, the domain already points to OpusDNS nameservers and a DNS zone was provisioned automatically.
</scalar-callout>

## Update contacts

Change any contact role by providing the contact ID for that role:

```bash
curl "$OPUSDNS_API_BASE/v1/domains/example.com" \
  --request PATCH \
  --header "X-Api-Key: $OPUSDNS_API_KEY" \
  --header "Content-Type: application/json" \
  --data '{
    "contacts": {
      "registrant": "contact_01h45ytscbebyvny4gc8cr8ma2",
      "admin": "contact_01j7abc123def456ghi789jkl"
    }
  }'
```

You only need to include the roles you want to change. Roles you omit remain
unchanged.

## Change renewal mode

Set `renewal_mode` to control what happens when the domain approaches its expiry
date:

| Mode | Behavior |
| --- | --- |
| `renew` | Automatically renews before expiration |
| `expire` | Domain is not renewed and will eventually be deleted |

```bash
curl "$OPUSDNS_API_BASE/v1/domains/example.com" \
  --request PATCH \
  --header "X-Api-Key: $OPUSDNS_API_KEY" \
  --header "Content-Type: application/json" \
  --data '{
    "renewal_mode": "expire"
  }'
```

## Manage domain statuses

Domain statuses control what operations are allowed. You can manage them in two
ways:

### Option 1: Declarative replacement

Set `statuses` to replace the entire status list. This is useful when you know
the exact set of statuses you want:

```bash
curl "$OPUSDNS_API_BASE/v1/domains/example.com" \
  --request PATCH \
  --header "X-Api-Key: $OPUSDNS_API_KEY" \
  --header "Content-Type: application/json" \
  --data '{
    "statuses": ["clientTransferProhibited"]
  }'
```

### Option 2: Delta changes

Use `status_changes` to add or remove individual statuses without affecting
others:

```bash
curl "$OPUSDNS_API_BASE/v1/domains/example.com" \
  --request PATCH \
  --header "X-Api-Key: $OPUSDNS_API_KEY" \
  --header "Content-Type: application/json" \
  --data '{
    "status_changes": {
      "add": ["clientTransferProhibited"],
      "remove": ["clientDeleteProhibited"]
    }
  }'
```

<scalar-callout type="danger">
You cannot use <code>statuses</code> and <code>status_changes</code> in the same request. The <code>add</code> and <code>remove</code> lists must not overlap.
</scalar-callout>

### Transfer lock

The `transfer_lock` field in the domain response is derived from the
`clientTransferProhibited` status. To lock or unlock a domain for transfers,
add or remove that status.

### Blocking statuses

Certain statuses prevent domain updates entirely. If any of these are active,
you must remove them before making other changes:

- `clientUpdateProhibited`
- `serverUpdateProhibited`
- `pendingTransfer`
- `pendingRestore`
- `pendingDelete`
- `redemptionPeriod`

## Rotate auth code

Generate a new authorization code for a domain:

```bash
curl "$OPUSDNS_API_BASE/v1/domains/example.com" \
  --request PATCH \
  --header "X-Api-Key: $OPUSDNS_API_KEY" \
  --header "Content-Type: application/json" \
  --data '{
    "auth_code": "NEW-AUTH-CODE-VALUE"
  }'
```

The auth code is required when transferring the domain to another registrar.

## Retrieve domain details

Fetch the current state of a domain by name or ID:

```bash
curl "$OPUSDNS_API_BASE/v1/domains/example.com" \
  --header "X-Api-Key: $OPUSDNS_API_KEY"
```

The response includes all domain details: nameservers, contacts, statuses,
registration and expiry dates, renewal mode, and more.

## Related API Reference

- [`PATCH /v1/domains/{domain_reference}`](/api-reference#tag/domain/PATCH/v1/domains/{domain_reference})
- [`GET /v1/domains/{domain_reference}`](/api-reference#tag/domain/GET/v1/domains/{domain_reference})
