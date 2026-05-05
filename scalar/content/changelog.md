# Changelog

Track notable updates to the OpusDNS API and developer documentation here.

## Upcoming changes

- Event payloads are moving to a standardized V1 structure for newly generated
  customer-facing events. See [Event V1 payloads](/upcoming-changes/event-v1-payloads)
  for the upcoming response shape, typed renewal and verification details, and
  migration guidance for clients.

## 2026

### 05 May 2026

- Launched the new OpusDNS API Docs experience, including guides for
  authentication, domains, DNS, forwarding, jobs, events, account management,
  and TLD-specific operations.
- Published authentication documentation covering token retrieval, header usage,
  and credential management.
- Published the Reports API and Tags API in the public OpenAPI schema.
- Added Connect and AI Concierge endpoints to the published OpenAPI schema.
- Documented bulk DNS-zone command behavior in the Jobs guide.

### 23 April 2026

- Added the Tags API and expanded tagging across domains, contacts, and DNS
  zones.
- Added bulk tagging endpoints for applying tags to many resources at once.
- Added `tag_ids` filters for domain lists and search, plus tag support in
  inventory and DNS-zone CSV exports.
- Added an `is_premium` filter for domain listings.
- Added additional DNS record type support: `HTTPS`, `SVCB`, `NAPTR`, `SSHFP`,
  and `CERT`.
- Added `dnssec_status` support to bulk DNS-zone updates.
- Added `domain_forwards`, `expiring_domains`, and `email_forwards` report
  types.
- Added new default nameservers for staging and sandbox environments.
- Improved DNS record handling for duplicate records and fully qualified domain
  name comparisons.

### 16 April 2026

- Added premium-domain handling.
- Added EPP fee and charge support for domain pricing workflows.
- Added trademark-claims support for domain availability and registration
  workflows.
- Added support for retrieving trademark notices and accepting claims during
  domain registration.
- Added required attestation handling for `.music` and `.travel` registrations.
- Expanded TLD and registry coverage:
  - `.co`
  - `.mobile`
  - `.music`
  - `.link`
  - `.name`
  - `.cc`
  - `.us`
  - `.ua`
  - `.nl`
  - Google Registry TLDs

### 31 March 2026

- Published job batches and reports in the public API schema.
- Added the Reports API, including asynchronous report generation, downloads,
  filtering, pagination, and DNS zone report types.
- Added downloadable report archives.
- Added generic filterable report endpoints and standardized report field names.
- Improved Jobs API list responses with typed payloads, labels, sorting, and
  server-side status filtering.
- Added multi-value status filtering for batch jobs.
- Added filtering and sorting across jobs and batches, including status,
  correlation ID, and topic filters.
- Added batch domain-exists checks and streaming domain availability requests.

### 12 February 2026

- Expanded the Jobs API with bulk domain operations, DNS zone updates, DNS patch
  operations, contact creation, parking operations, and pause/resume controls.
- Added bulk multi-domain commands, bulk DNS-zone update commands, and DNS-zone
  patch batches.
- Added bulk contact creation and single contact creation as Jobs API commands.
- Added bulk parking operations.
- Added job ownership checks and the `MANAGE_JOBS` permission.
- Added support for domain names or `domain_id` values in bulk domain update
  payloads.
- Added Parking API support, including signup, restrictions, agreement
  validation, and metrics.

### 15 January 2026

- Added domain forwarding metrics filters, including protocol and status-code
  breakdowns for redirect traffic.
- Added forward-rule grouping in metrics aggregations.
- Added platform and browser aggregation fields for forwarding metrics.

## 2025

### 18 December 2025

- Added the Batch Jobs API and OpenAPI documentation for job workflows.
- Added job lookup and delete endpoints, batch deletion, TypeID job identifiers,
  and standard pagination for batch jobs.
- Added recurring-job updates and deletion.
- Added bulk job cancellation.
- Added timezone-aware datetime serialization across the Jobs API.
- Added alpha-2 country-code validation on contact creation.

### 04 December 2025

- Added domain forwarding metrics endpoints.
- Revised email forwarding endpoints around `email_forward_id`-based routing.
- Revised the Domain Forwarding API surface with clearer create, update, delete,
  and read operations.
- Added an endpoint to list all domain forwards in an organization.
- Added hostname validation and improved wildcard handling for domain forwards.
- Added cleanup behavior for DNS records when removing enabled forwarding rules.
- Added the Archive API with request-history and object-log endpoints.
- Improved email-forwarding search.

### 15 November 2025

- Introduced the Jobs service foundation for asynchronous API operations and
  bulk workflow orchestration.
- Added the foundation for job context propagation across asynchronous API
  workflows.
- Aligned DNS and Domains list endpoints with the public pagination format.
- Added DNSSEC operations to the Domains API.

### 14 October 2025

- Added domain forwarding to the API documentation and expanded the Domain
  Forwarding API.
- Added domain-forward rule models, domain-forward enabled zones, sub-zone
  handling, wildcard forwarding, and per-rule enable tracking.
- Added a TLD-specification list endpoint with `key` and `tld` filters.
- Increased TXT record support up to 65,535 bytes.
- Added `namestore` extension support for host commands on supported registries.
