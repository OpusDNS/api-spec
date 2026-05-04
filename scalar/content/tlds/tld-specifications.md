# TLD specifications

Every Top-Level Domain (TLD) has its own rules for registration, transfers,
DNS configuration, and more. The OpusDNS API provides endpoints to query these
specifications so you can build TLD-aware workflows.

## List your supported TLDs

Retrieve the TLDs available to your organization:

```bash
curl "$OPUSDNS_API_BASE/v1/tlds/portfolio" \
  --header "X-Api-Key: $OPUSDNS_API_KEY"
```

This returns the list of TLDs enabled for your account. Only these TLDs can be
used for domain registration and availability checks.

## List all TLD specifications

Query the full specification catalog:

```bash
curl "$OPUSDNS_API_BASE/v1/tlds/" \
  --header "X-Api-Key: $OPUSDNS_API_KEY"
```

You can filter the response to specific TLDs or fields:

```bash
curl --get "$OPUSDNS_API_BASE/v1/tlds/" \
  --header "X-Api-Key: $OPUSDNS_API_KEY" \
  --data-urlencode "tlds=com" \
  --data-urlencode "tlds=net" \
  --data-urlencode "fields=domain_lifecycle" \
  --data-urlencode "fields=transfer_policies"
```

## Get a single TLD specification

Retrieve the full specification for one TLD:

```bash
curl "$OPUSDNS_API_BASE/v1/tlds/com" \
  --header "X-Api-Key: $OPUSDNS_API_KEY"
```

## Specification categories

A TLD specification contains the following sections:

### Domain lifecycle

Defines registration, renewal, and expiration rules:

- **Registration periods** — minimum and maximum registration length
- **Renewal periods** — allowed renewal durations
- **Grace periods** — time after expiration before the domain enters redemption
- **Redemption period** — window to restore a deleted domain
- **Auto-renew behavior** — whether the registry auto-renews and when

### Transfer policies

Rules governing domain transfers:

- **Auth code requirements** — whether an authorization code is needed
- **Transfer lock** — minimum lock period after registration or transfer
- **Transfer timing** — how long transfers take to complete
- **Renewal on transfer** — whether the domain is renewed when transferred
- **Post-transfer requirements** — actions needed after a transfer completes

### DNS configuration

Nameserver and DNSSEC rules:

- **Nameserver limits** — minimum and maximum number of nameservers
- **DNSSEC support** — whether DNSSEC is allowed, mandatory, or unsupported
- **DNSSEC mode** — DS records, KEY records, or both
- **Host object rules** — constraints on glue records and host objects

### Contact requirements

What contact information the registry requires:

- **Required roles** — which contact roles must be provided (registrant, admin,
  tech, billing)
- **Local presence** — whether a local address or representative is required
- **Registry-specific attributes** — additional fields like tax ID, company
  registration number, or intended use

### Premium domains

- **Premium support** — whether the TLD has premium-priced domains
- **Pricing source** — where premium pricing comes from
- **Affected operations** — which operations (register, renew, transfer) can
  have premium pricing

### Launch phases

For new TLDs or TLDs with special registration periods:

- **Landrush** — early registration before general availability
- **Early Access Program (EAP)** — registration at decreasing premium prices
- **General Availability** — open registration for everyone

### Other features

- **IDN support** — whether internationalized domain names are available
- **Registry lock** — enhanced security lock at the registry level
- **Reserved domains** — domains the registry has reserved
- **Legal requirements** — terms, dispute resolution, and compliance rules

## Example: checking before registration

Before registering a domain, query the TLD spec to understand requirements:

```bash
# Check what contacts are needed for .de domains
curl "$OPUSDNS_API_BASE/v1/tlds/de" \
  --header "X-Api-Key: $OPUSDNS_API_KEY" \
  | jq '.contacts'
```

This helps you prepare the correct contact data and registration parameters
before submitting your request.

## Related API Reference

- [`GET /v1/tlds/`](/api-reference#tag/tld/GET/v1/tlds/)
- [`GET /v1/tlds/portfolio`](/api-reference#tag/tld/GET/v1/tlds/portfolio)
- [`GET /v1/tlds/{tld}`](/api-reference#tag/tld/GET/v1/tlds/{tld})
