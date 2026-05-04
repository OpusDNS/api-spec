# Transfer a domain

This flow shows how to start an inbound transfer to OpusDNS.

## Flow overview

1. Get the transfer authorization code from the current registrar.
2. Prepare or create the required contacts.
3. Start the transfer with `POST /v1/domains/transfer`.
4. Monitor the domain while it is in `pending_transfer`.
5. Cancel the transfer only if necessary.

Transfers are registry-dependent. The OpenAPI description notes that a domain
can remain in `pending_transfer` until completion and that approval can take up
to five days.

## 1. Collect the auth code

Ask the current registrar for the domain's auth code (also called EPP code or
transfer code). The API requires `auth_code` for transfer requests.

## 2. Prepare contacts

Like registrations, transfers require `contacts` and `renewal_mode`. You can
reuse existing contacts or create new ones with `POST /v1/contacts`.

## 3. Start the transfer

Use `POST /v1/domains/transfer`.
Use `renewal_mode: "renew"` for automatic renewal or `"expire"` when the domain
should not renew after transfer.

```bash
curl "$OPUSDNS_API_BASE/v1/domains/transfer" \
  --request POST \
  --header "X-Api-Key: $OPUSDNS_API_KEY" \
  --header "Content-Type: application/json" \
  --data '{
    "name": "example.com",
    "auth_code": "TRANSFER-CODE-FROM-CURRENT-REGISTRAR",
    "contacts": {
      "registrant": "contact_01h45ytscbebyvny4gc8cr8ma2",
      "admin": "contact_01h45ytscbebyvny4gc8cr8ma2",
      "tech": "contact_01h45ytscbebyvny4gc8cr8ma2",
      "billing": "contact_01h45ytscbebyvny4gc8cr8ma2"
    },
    "renewal_mode": "renew",
    "period": {
      "unit": "y",
      "value": 1
    },
    "nameservers": [
      { "hostname": "ns1.example.net" },
      { "hostname": "ns2.example.net" }
    ],
    "create_zone": true
  }'
```

`period` is optional for transfers. When provided, it represents an additional
registration period to add on transfer completion; otherwise registry default
policy applies.

## 4. Monitor the transfer

The initial response is a `DomainResponse`. After starting the transfer, read
the domain by name or ID:

```bash
curl "$OPUSDNS_API_BASE/v1/domains/example.com" \
  --header "X-Api-Key: $OPUSDNS_API_KEY"
```

While the transfer is running, expect a transfer-related status such as
`pending_transfer`.

## 5. Cancel if needed

If a transfer must be stopped, use `DELETE /v1/domains/{domain_reference}/transfer`.
This cancels the in-progress transfer and removes the domain object.

```bash
curl "$OPUSDNS_API_BASE/v1/domains/example.com/transfer" \
  --request DELETE \
  --header "X-Api-Key: $OPUSDNS_API_KEY"
```

## Related API Reference

- [`POST /v1/domains/transfer`](/api-reference)
- [`GET /v1/domains/{domain_reference}`](/api-reference)
- [`DELETE /v1/domains/{domain_reference}/transfer`](/api-reference)
