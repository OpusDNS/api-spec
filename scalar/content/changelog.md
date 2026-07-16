# Changelog

Track notable updates to the OpusDNS API and developer documentation here.

## 2026

### 16 July 2026

- Added **independent billing for suborganizations**: create a suborganization
  with `billing_mode: "independent"` and it gets its own wallet, invoices, and
  payment methods instead of rolling up to your account. Consolidated billing
  remains the default and is unchanged. Also added the monthly
  **suborganization billing transactions report** covering spend across your
  whole organization tree. See
  [Billing modes](/account/organizations/manage#billing-modes).

### 10 July 2026

- Added **automatic DNSSEC reconciliation** on inbound transfers and nameserver
  changes. Stale DS records imported from a previous DNS provider — which could
  previously break resolution (`SERVFAIL`) once a domain moved to OpusDNS
  nameservers — are now removed or replaced automatically. Domains on external
  nameservers are never touched. See
  [Automatic DNSSEC reconciliation](/products/domains/dnssec#automatic-dnssec-reconciliation).

### 07 July 2026

- Onboarded **`.lu`** (Luxembourg). Published its
  [TLD Knowledge Base](/tld-knowledge-base) page.

### 02 July 2026

- Onboarded **8 new gTLDs**: `.to` (Tonga), `.country`, `.diy`, `.food`, `.hiv`,
  `.lifestyle`, `.living`, and `.sexy`. Published their
  [TLD Knowledge Base](/tld-knowledge-base) pages.

### 30 June 2026

- Made the **`contacts` section optional on domain transfers**. For TLDs that do
  not require any contacts on an inbound transfer - where every supported contact
  role has a minimum of `0` in the TLD specification (for example `.ca` and
  `.ch`) - you can
  now omit `contacts` entirely instead of sending an empty object. This applies to
  `POST /v1/domains/transfer` as well as the `domain_transfer` and
  `domain_transfer_bulk` job commands. TLDs that require one or more contact roles
  still reject transfers submitted without them.

### 26 June 2026

- Onboarded **13 new gTLDs**: `.best`, `.cam`, `.case`, `.dealer`, `.fans`,
  `.frl`, `.help`, `.inc`, `.kred`, `.luxury`, `.ooo`, `.reit`, and `.saarland`.
  Published their [TLD Knowledge Base](/tld-knowledge-base) pages.

### 25 June 2026

- Onboarded **`.name`** and **`.cc`**. Published their
  [TLD Knowledge Base](/tld-knowledge-base) pages.

### 24 June 2026

- Onboarded **`.blog`**. Published its
  [TLD Knowledge Base](/tld-knowledge-base) page.

### 21 June 2026

- Added **vanity nameservers** — serve your DNS zones under your own branded
  nameserver names (for example `ns1.example.com`) while OpusDNS continues to
  answer the DNS. Create and manage vanity nameserver sets with
  `POST`/`GET`/`DELETE /v1/vanity-nameserver-sets`, choose an organization
  default with `PATCH /v1/vanity-nameserver-sets/{set_id}/default`, and brand
  individual zones via `vanity_nameserver_set_id` (on zone creation, or with
  `PATCH /v1/dns/{zone_name}/vanity-set`).
- Added the **`/check` diagnostic** — `POST /v1/vanity-nameserver-sets/check`
  reports whether a set's nameservers resolve to the anycast pool, whether glue
  is in place, and what (if anything) still needs publishing.
- Published the [Vanity nameservers](/products/dns/vanity-nameservers) guide.

### 19 June 2026

- Onboarded **21 new TLDs**, including the Bahrain ccTLD bundle and its
  Arabic-script variant:
  - `.bh`, `.biz.bh`, `.cc.bh`, `.com.bh`, `.edu.bh`, `.info.bh`, `.me.bh`,
    `.name.bh`, `.net.bh`, `.org.bh`, and `.xn--mgbcpq6gpa1a` (Bahrain)
  - `.co.nl`, `.co.no`, `.co.com`
  - `.fm` (Micronesia), `.fo` (Faroe Islands), `.gd` (Grenada),
    `.gl` (Greenland), `.radio.am`, `.radio.fm`, `.vg` (British Virgin Islands)
- Published their [TLD Knowledge Base](/tld-knowledge-base) pages.

### 18 June 2026

- Onboarded **`.it`** (Italy), **`.sk`** (Slovakia), and **`.latino`**.
  Published their [TLD Knowledge Base](/tld-knowledge-base) pages.

### 17 June 2026

- Onboarded **`.cloud`**. Published its
  [TLD Knowledge Base](/tld-knowledge-base) page.

### 16 June 2026

- Released the **role-based permissions** system. Access is now governed by
  roles built from `resource:scope` permissions (scopes: `read`, `manage`,
  `delete`).
- Added **built-in roles** — `admin`, `viewer`, `domain_manager`, `dns_manager`,
  and `billing_manager` — available in every organization.
- Added **custom roles** — define organization-owned roles with exactly the
  permissions you need via `POST /v1/organizations/roles`, and manage them with
  `GET`/`PATCH`/`DELETE /v1/organizations/roles/{label}`. Retrieve the grantable
  permission catalog from `GET /v1/organizations/role-permissions`.
- Added **per-user role assignment** — `GET` and `PUT /v1/users/{user_id}/role`
  set a user's built-in or custom role. API keys are granted a role at issuance.
- Published the [Roles & permissions](/account/organizations/roles) guide and a
  roles section in [User management](/account/users).

### 12 June 2026

- Added **host object management** — create, retrieve, update, and delete
  nameserver host objects (glue records) for hostnames subordinate to domains
  in your account: `POST /v1/hosts` and
  `GET`/`PUT`/`DELETE /v1/hosts/{host_reference}`. Hosts can be referenced by
  ID or hostname.
- Published the [Host objects (glue records)](/products/domains/host-objects)
  guide and linked it from the nameservers, registration, and transfer guides.

- Added **batch retry** — re-attempt jobs in a batch that ended in `failed` or
  `dead_letter` state without rebuilding the batch.
  `POST /v1/jobs/{batch_id}/retry` re-queues all eligible jobs in one call;
  jobs in any other state are left untouched.
- Added an optional repeatable `error_class` query parameter on batch retry to
  re-attempt only specific failure types (for example,
  `?error_class=BillingInsufficientFundsError` after an account top-up).
  Multiple values are OR'd.
- Added **single-job retry** — `POST /v1/job/{job_id}/retry` re-queues an
  individual `failed` or `dead_letter` job. Retrying a job in any other state
  returns `409 Conflict`.
- Updated the [Managing batches](/products/jobs/managing-batches) guide with
  retry usage, including how `error_class` filtering helps recover from
  mixed-failure batches.

### 12 May 2026

- Added **status tags** — system-managed labels that are automatically assigned
  to domains based on their state. The first status tag type is
  `VERIFICATION_REQUIRED`, applied when a registry mandates holder verification.
- Domain list endpoints now support `status_tags` and `status_tag_mode` filters
  to find domains by their current status conditions.
- When requesting `include=tags`, domain responses now return both user `tags`
  and `status_tags` in separate arrays.
- Published the [User tags](/automation/tags/user-tags) and
  [Status tags](/automation/tags/status-tags) documentation guides.

### 08 May 2026

- Released the V1 event payload format. All events now use a standardized
  `event_data` structure with `version`, `message`, optional `error`, and
  optional `details` fields. See [the event object](/products/events/event-object)
  for the full schema.
- Changed the event ID prefix from `epp_event_` to `event_`.
- Added typed `details` for renewal events (`expires_on`) and verification
  events (`verification_deadlines`, `verification_claims`, `registrants`).
- Migrated all existing production events to the V1 payload format.
- Removed the `source` field from the event response.

### 05 May 2026

- Launched the new OpusDNS API Docs experience, including guides for
  authentication, domains, DNS, forwarding, jobs, events, account management,
  and TLD-specific operations.
- Published authentication documentation covering token retrieval, header usage,
  and credential management.
- Published the Reports API and Tags API in the public OpenAPI schema.
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

### 01 October 2025

- OpusDNS launches! 🚀
- Added the Domain API for core domain lifecycle operations.
- Added the DNS API for hosted zones, DNS records, and DNSSEC.
- Added the Contacts API for domain contact management.
- Added the Organizations and Users APIs for account management.
- Added API authentication with API keys and bearer tokens.
