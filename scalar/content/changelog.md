# Changelog

Track notable updates to the OpusDNS API and developer documentation here.

## 2026

### 25 August 2026

- Released **the OpusDNS MCP server**, documented under the new **MCP** tab. It is
  a hosted [Model Context Protocol](https://modelcontextprotocol.io) endpoint at
  `https://api.opusdns.com/mcp` (sandbox: `https://sandbox.opusdns.com/mcp`) that
  lets an AI client work with your account through nine tools: catalog search and
  single operations, portfolio reads that project only the fields you ask for, and
  multi-domain changes submitted as [Jobs](/automation/jobs/overview) batches
  rather than a loop. Sign-in is browser OAuth and API keys are not accepted;
  everything that is not a read is blocked server-side until you explicitly
  approve it, and the approval is bound to the exact action, including the
  resolved list of domains for a bulk change. The new pages cover connecting each
  client, worked workflows, approvals, bulk operations, what the agent can see,
  and troubleshooting. See [OpusDNS MCP server](/mcp-server).

- Added **an exclusionary tag filter mode**: `match_none` returns only the objects
  carrying **none** of the listed tags, including objects that carry no tags at
  all. It is accepted wherever `match_any` and `match_all` already were —
  `tag_mode` on `GET /v1/domains`, `GET /v1/contacts` and `GET /v1/dns`, and
  `status_tag_mode` on `GET /v1/domains` and `GET /v1/contacts`. See
  [User tags](/automation/tags/user-tags#filter-mode) and
  [Status tags](/automation/tags/status-tags#filter-mode).

- Added **status tag counts to the domain summary**: `GET /v1/domains/summary`
  now returns a `by_status_tag` breakdown alongside `by_status`, `by_tld`, and
  `by_organization`. Only status tags with at least one domain are included, so
  the map is empty rather than zero-filled when nothing is tagged.

- Fixed **`match_all` tag filtering when the same tag is repeated** in the query
  string. `?status_tags=X&status_tags=X` compared a distinct-tag count against
  the number of values supplied and therefore matched nothing; repeated values
  are now collapsed.

- Added **`create_zone` to whitelabel Plus onboarding**. A Plus create or upgrade
  can now ask OpusDNS to create the customer's DNS zone as part of onboarding
  instead of requiring a separate zone create first. The flag is remembered and
  re-applied on every recheck, and a caller who created without it can opt in on
  a later recheck. A zone that cannot be created fails onboarding with the new
  `zone_create_failed` code. Domain verification is unchanged — the customer
  still has to delegate the domain to the OpusDNS nameservers.

- Documented **the AFNIC contact attributes** on the TLD Knowledge Base pages for
  [`.fr`](/tld-knowledge-base/cctlds/fr#contact-attributes),
  [`.re`](/tld-knowledge-base/cctlds/re#contact-attributes),
  [`.pm`](/tld-knowledge-base/cctlds/pm#contact-attributes),
  [`.wf`](/tld-knowledge-base/cctlds/wf#contact-attributes),
  [`.yt`](/tld-knowledge-base/cctlds/yt#contact-attributes) and
  [`.tf`](/tld-knowledge-base/cctlds/tf#contact-attributes) — the `PP`/`PM`
  split, the identifiers each legal status accepts, the association rules, and
  the fact that AFNIC requires the attributes on every contact role rather than
  on the registrant alone.

### 24 August 2026

- Added **spec-selection overrides to the TLD specification endpoint**.
  `GET /v1/tlds/{tld}` accepts optional `backend`, `customer_spec_ref`, and
  `version` query parameters to read a specific registry backend's specification
  instead of the one resolved for your organization. Omitting them keeps the
  existing behaviour.

- Changed **`.dk` contact pre-verification to be optional**. Punktum dk runs its
  own data and identity control and reports the outcome over poll;
  `PUNKTUM_DK_CONTACT_VERIFIED` previously had to be asserted on every `.dk`
  contact. It is now an optional attribute — omit it to let the registry perform
  the control, or assert it to declare the contact already verified.

### 22 August 2026

- Added **the `DNSSEC_PENDING` status tag**. A domain carries it while a deferred
  DNSSEC registry submission is being retried, so a zone that reads as signed
  while the parent still holds no DS is visible rather than silently
  misreported. The tag is removed on every terminal outcome. See
  [Status tags](/automation/tags/status-tags).

### 21 August 2026

- Changed **enabling DNSSEC to complete asynchronously when the registry defers
  the DS submission**. Some registries — DENIC among them — check the domain's
  public nameservers before accepting a DS and reject a submission made before
  the new key material has propagated. Rather than failing, the zone stays
  signed and the submission is retried in the background for roughly 16 minutes;
  if that budget runs out, DNSSEC is switched back off and the registry's own
  diagnostic reaches you as a domain modification failure event.

  `POST /v1/domains/{domain_reference}/dnssec/enable` and
  `POST /v1/dns/{zone_name}/dnssec/enable` now answer **`202 Accepted`** when the
  submission was deferred, instead of always answering `200`. A concurrent
  disable that supersedes the enable returns **`409 Conflict`** with
  `ERROR_DOMAIN_DNSSEC_ENABLE_SUPERSEDED`. On the zone route, `DnsChangesResponse`
  carries the outcome in `dnssec_registry_publish` — `published`, `deferred`,
  `skipped`, `withdrawn`, or `failed`, and `null` when the response makes no
  statement about a registry submission. A signed zone with no DS at the parent
  resolves as unsigned, so the intermediate state is safe. See
  [Domain DNSSEC](/products/domains/dnssec).

- Fixed **IDN registrations on Verisign TLDs**. Registering an internationalized
  domain under `.com`, `.net`, `.cc`, or `.name` failed at the registry with
  `Language tag required for IDN label domain names`, because the required
  language tag was not sent. It is now included on registration. Note that the
  API does not convert a Unicode name to its A-label for you — send the
  punycode form (`xn--…`).

### 20 August 2026

- Added **typed credential errors to registrar sync**. When a connected
  registrar rejects the stored credentials, the sync status now reports a stable
  `error_code` — `ERROR_CREDENTIAL_AUTH` when the credentials were rejected, or
  `ERROR_CREDENTIAL_ACCESS` when the account denied access (for example, a
  calling IP that is not allowlisted) — alongside an actionable `error_message`
  and the registrar's own diagnostic in `error_detail`. These failures are no
  longer retried, so they surface immediately instead of after several minutes
  of backoff.

- Added **the `IMPORT_REQUESTED` and `IMPORT_PENDING` status tags**, carried by
  domains during a bulk import while their initial registry synchronization is
  queued and then running. See
  [Status tags](/automation/tags/status-tags).

### 19 August 2026

- Added **the `EXTERNAL` status tag**, assigned to every domain mirrored into
  your portfolio from a connected external registrar. It distinguishes mirrored
  domains from the ones OpusDNS sponsors, and can be filtered on like any other
  status tag. See [Status tags](/automation/tags/status-tags).

- Added **the billing period to the whitelabel subscription block**. The nested
  `subscription` object now carries `period` in the same shape the create body
  accepts (`{"value": 1, "unit": "m"}`), so a client can tell whether a
  whitelabel renews monthly or yearly without a second lookup.

- Changed **`.dk` contact validation to run before the request reaches the
  registry**. `PUNKTUM_DK_CVR` is required for a Danish legal entity and refused
  on a Danish individual, and `PUNKTUM_DK_SOLE_PROPRIETORSHIP` is refused on any
  Danish contact — all three previously failed only once Punktum dk saw them.
  EU/EEA legal entities outside Denmark may still supply a CVR and are not
  required to.

### 18 August 2026

- Changed **the sandbox environment to serve timezone-aware (RFC 3339) datetimes
  by default**, on schedule per the announced staged cutover. Every datetime in
  public `/v1` responses from sandbox now carries the explicit UTC designator
  (trailing `Z`); the `X-Datetime-Format: rfc3339` header remains accepted there
  and is now a no-op. Production follows on Tuesday, 2026-09-01. See
  [Timezone-aware datetimes (RFC 3339)](/upcoming-changes/rfc3339-datetimes) for
  migration guidance.

- Added **a `read_only` flag to the domain object**: a domain marked read-only
  is listed in your portfolio but cannot be managed — updates, renewals, and
  deletions are rejected. OpusDNS sets and removes the flag; it cannot be
  changed through the API. It is used for domains imported ahead of a
  migration, domains locked for legal reasons, and domains managed at an
  external registrar. The flag is included in every domain response and
  `GET /v1/domains` accepts a `read_only` query parameter to filter by it. See
  [The domain object](/products/domains/domain-object) and
  [Read-only domains](/products/domains/manage#read-only-domains).

### 14 August 2026

- Added **postal code validation on contacts**: `postal_code` is validated
  against the country's published format for an initial set of 16 countries
  (`AT`, `BE`, `CA`, `CH`, `CZ`, `DE`, `DK`, `ES`, `FR`, `GB`, `IT`, `LU`,
  `NL`, `NO`, `SE`, `US`). Contacts in every other country are unaffected. An
  invalid postal code returns a `422` request-validation error whose error
  `type` is `invalid_postal_code`, locating the `postal_code` field. A postal
  code containing non-ASCII characters is rejected for every country, because
  it cannot be transmitted to a registry. See
  [Postal codes](/products/contacts/postal-codes).

- Changed **postal codes to be stored in a canonical form**: Dutch postal codes
  are stored in the official national notation (`1234 AB` — both `1234AB` and
  `1234 ab` are accepted), cross-border country prefixes are stripped
  (`D-26133` → `26133` for a `DE` contact), and US ZIP+4 is normalized to the
  hyphenated form (`12345 6789` → `12345-6789`). Existing Dutch contact data
  was migrated to the canonical form. See
  [What gets stored](/products/contacts/postal-codes#what-gets-stored).

- Added **the registry's own field-level validation messages** to registry
  errors. Where a registry reports which field it refused, an
  `ERROR_REGISTRY_POLICY` on a domain or contact operation now carries that text
  in `detail` after the generic result code, instead of the result code text
  alone. For a `.nl` postcode rejected by SIDN, `detail` now ends with
  `Contact address group: A postcode has to be four numbers and two letters.`

### 11 August 2026

- Onboarded the Welsh geographic TLDs
  **[`.wales`](/tld-knowledge-base/gtlds/wales)** and
  **[`.cymru`](/tld-knowledge-base/gtlds/cymru)** (operated by Nominet).
  Published their TLD Knowledge Base pages.

### 10 August 2026

- Onboarded **[`.pl`](/tld-knowledge-base/cctlds/pl)** (Poland) together with
  its second-level extensions `.com.pl`, `.net.pl`, and `.org.pl`;
  **[`.gg`](/tld-knowledge-base/cctlds/gg)** (Guernsey) together with `.co.gg`,
  `.net.gg`, and `.org.gg`; and **[`.je`](/tld-knowledge-base/cctlds/je)**
  (Jersey) together with `.co.je`, `.net.je`, and `.org.je`. Published their TLD
  Knowledge Base pages.

- Onboarded the Belgian geographic TLDs
  **[`.brussels`](/tld-knowledge-base/gtlds/brussels)** and
  **[`.vlaanderen`](/tld-knowledge-base/gtlds/vlaanderen)**. Published their TLD
  Knowledge Base pages.

### 04 August 2026

- Added **sub-zone delegation**: NS records below the zone apex are now
  fully supported on every zone endpoint — include them when creating a zone,
  or manage them with the RRset and record PATCH endpoints like any other
  record type. OpusDNS nameservers serve the delegation as a standard DNS
  referral. Delegations from DNSSEC-signed zones are insecure delegations
  (child DS records are not supported). See
  [Delegate a subdomain](/products/dns/subzone-delegation).

- Changed **writes targeting system-managed records to return errors instead
  of silently doing nothing**. Previously, a `PUT`/`PATCH` that tried to
  modify or remove the zone apex NS, SOA, DNSKEY, or DS records could return
  `204 No Content` while the request had no effect. These now return
  `409 Conflict` with a `protected_reason`. Zone responses also report
  `protected: true` consistently for every system-managed RRset. If your
  integration echoes a full zone read back into a write, filter out RRsets
  with `protected: true` first — see
  [Protected records](/products/dns/zone-object#protected-records).

### 03 August 2026

- Onboarded **[`.lt`](/tld-knowledge-base/cctlds/lt)** (Lithuania) and
  **[`.ws`](/tld-knowledge-base/cctlds/ws)** (Samoa). Published their TLD
  Knowledge Base pages.

### 31 July 2026

- Onboarded **[`.vegas`](/tld-knowledge-base/gtlds/vegas)**. Published its TLD
  Knowledge Base page.

### 30 July 2026

- Onboarded **[`.no`](/tld-knowledge-base/cctlds/no)** (Norway). Published its
  TLD Knowledge Base page.

- Added **outbound transfer resolution** — approve or reject a pending
  transfer of a domain away from OpusDNS directly via the API:
  `POST /v1/domains/{domain_reference}/transfer/outbound` with an `action` of
  `approve` or `reject`. Approving acknowledges the transfer at the registry;
  the domain remains in your account until the registry confirms the transfer
  has completed. Requires the domain to have a pending transfer, and is
  available for TLDs whose registry lets the losing registrar act on
  transfers. See
  [Outbound transfers](/products/domains/transfer#outbound-transfers).

### 22 July 2026

- Onboarded **[`.si`](/tld-knowledge-base/cctlds/si)** (Slovenia). Published its
  TLD Knowledge Base page.

### 17 July 2026

- Onboarded **[`.lv`](/tld-knowledge-base/cctlds/lv)** (Latvia) together with
  its second-level extensions `.asn.lv`, `.com.lv`, `.conf.lv`, `.edu.lv`,
  `.id.lv`, `.net.lv`, and `.org.lv`. Published its TLD Knowledge Base page.

- Added **independent billing for suborganizations**: create a suborganization
  with `billing_mode: "independent"` and it gets its own wallet, invoices, and
  payment methods instead of rolling up to your account. Consolidated billing
  remains the default and is unchanged. Also added the monthly
  **suborganization billing transactions report** covering spend across your
  whole organization tree. See
  [Billing modes](/account/organizations/manage#billing-modes).

- Added **opt-in RFC 3339 datetimes**: send the `X-Datetime-Format: rfc3339`
  request header on any public `/v1` endpoint and every datetime in the response
  is returned as timezone-aware UTC with a trailing `Z`. This fixes clients (such
  as JavaScript's `new Date()`) that misparse today's marker-less timestamps as
  local time. The tz-aware format becomes the default per environment on a staged
  schedule, after which the header is a no-op. See
  [Timezone-aware datetimes (RFC 3339)](/upcoming-changes/rfc3339-datetimes) for
  the cutover dates and migration guidance.

### 10 July 2026

- Added **automatic DNSSEC reconciliation** on inbound transfers and nameserver
  changes. Stale DS records imported from a previous DNS provider — which could
  previously break resolution (`SERVFAIL`) once a domain moved to OpusDNS
  nameservers — are now removed or replaced automatically. Domains on external
  nameservers are never touched. See
  [Automatic DNSSEC reconciliation](/products/domains/dnssec#automatic-dnssec-reconciliation).

### 08 July 2026

- Onboarded **3 IDN gTLDs** operated by Public Interest Registry:
  [`.xn--c1avg`](/tld-knowledge-base/gtlds/xn--c1avg) (.орг),
  [`.xn--i1b6b1a6a2e`](/tld-knowledge-base/gtlds/xn--i1b6b1a6a2e) (.संगठन), and
  [`.xn--nqv7f`](/tld-knowledge-base/gtlds/xn--nqv7f) (.机构). Their TLD Knowledge
  Base pages are published.
- Onboarded **[`.juegos`](/tld-knowledge-base/gtlds/juegos)**. Its TLD Knowledge
  Base page is published.

### 07 July 2026

- Onboarded **[`.lu`](/tld-knowledge-base/cctlds/lu)** (Luxembourg). Published
  its TLD Knowledge Base page.

### 06 July 2026

- Onboarded **`.co.at`** and **`.or.at`**, the Austrian second-level
  extensions. See the [`.at` TLD Knowledge Base](/tld-knowledge-base/cctlds/at)
  page.

### 02 July 2026

- Onboarded **8 new gTLDs**: [`.to`](/tld-knowledge-base/cctlds/to) (Tonga),
  [`.country`](/tld-knowledge-base/gtlds/country),
  [`.diy`](/tld-knowledge-base/gtlds/diy),
  [`.food`](/tld-knowledge-base/gtlds/food),
  [`.hiv`](/tld-knowledge-base/gtlds/hiv),
  [`.lifestyle`](/tld-knowledge-base/gtlds/lifestyle),
  [`.living`](/tld-knowledge-base/gtlds/living), and
  [`.sexy`](/tld-knowledge-base/gtlds/sexy). Published their TLD Knowledge Base
  pages.

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

- Onboarded **13 new gTLDs**: [`.best`](/tld-knowledge-base/gtlds/best),
  [`.cam`](/tld-knowledge-base/gtlds/cam),
  [`.case`](/tld-knowledge-base/gtlds/case),
  [`.dealer`](/tld-knowledge-base/gtlds/dealer),
  [`.fans`](/tld-knowledge-base/gtlds/fans),
  [`.frl`](/tld-knowledge-base/gtlds/frl),
  [`.help`](/tld-knowledge-base/gtlds/help),
  [`.inc`](/tld-knowledge-base/gtlds/inc),
  [`.kred`](/tld-knowledge-base/gtlds/kred),
  [`.luxury`](/tld-knowledge-base/gtlds/luxury),
  [`.ooo`](/tld-knowledge-base/gtlds/ooo),
  [`.reit`](/tld-knowledge-base/gtlds/reit), and
  [`.saarland`](/tld-knowledge-base/gtlds/saarland). Published their TLD
  Knowledge Base pages.

### 25 June 2026

- Onboarded **[`.name`](/tld-knowledge-base/gtlds/name)** and
  **[`.cc`](/tld-knowledge-base/cctlds/cc)**. Published their TLD Knowledge Base
  pages.

### 24 June 2026

- Onboarded **[`.blog`](/tld-knowledge-base/gtlds/blog)**. Published its TLD
  Knowledge Base page.

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
  - [`.bh`](/tld-knowledge-base/cctlds/bh),
    [`.biz.bh`](/tld-knowledge-base/cctlds/biz.bh),
    [`.cc.bh`](/tld-knowledge-base/cctlds/cc.bh),
    [`.com.bh`](/tld-knowledge-base/cctlds/com.bh),
    [`.edu.bh`](/tld-knowledge-base/cctlds/edu.bh),
    [`.info.bh`](/tld-knowledge-base/cctlds/info.bh),
    [`.me.bh`](/tld-knowledge-base/cctlds/me.bh),
    [`.name.bh`](/tld-knowledge-base/cctlds/name.bh),
    [`.net.bh`](/tld-knowledge-base/cctlds/net.bh),
    [`.org.bh`](/tld-knowledge-base/cctlds/org.bh), and
    [`.xn--mgbcpq6gpa1a`](/tld-knowledge-base/gtlds/xn--mgbcpq6gpa1a) (Bahrain)
  - [`.co.nl`](/tld-knowledge-base/cctlds/co.nl),
    [`.co.no`](/tld-knowledge-base/cctlds/co.no),
    [`.co.com`](/tld-knowledge-base/gtlds/co.com)
  - [`.fm`](/tld-knowledge-base/cctlds/fm) (Micronesia),
    [`.fo`](/tld-knowledge-base/cctlds/fo) (Faroe Islands),
    [`.gd`](/tld-knowledge-base/cctlds/gd) (Grenada),
    [`.gl`](/tld-knowledge-base/cctlds/gl) (Greenland),
    [`.radio.am`](/tld-knowledge-base/cctlds/radio.am),
    [`.radio.fm`](/tld-knowledge-base/cctlds/radio.fm),
    [`.vg`](/tld-knowledge-base/cctlds/vg) (British Virgin Islands)
- Published their TLD Knowledge Base pages.

### 18 June 2026

- Onboarded **[`.it`](/tld-knowledge-base/cctlds/it)** (Italy),
  **[`.sk`](/tld-knowledge-base/cctlds/sk)** and **`.org.sk`** (Slovakia), and
  **[`.latino`](/tld-knowledge-base/gtlds/latino)**. Published their TLD
  Knowledge Base pages.

### 17 June 2026

- Onboarded **[`.cloud`](/tld-knowledge-base/gtlds/cloud)**. Published its TLD
  Knowledge Base page.

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

### 15 June 2026

- Onboarded **[`.cz`](/tld-knowledge-base/cctlds/cz)** (Czechia). Published its
  TLD Knowledge Base page.

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
- Updated the [Managing batches](/automation/jobs/managing-batches) guide with
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
  optional `details` fields. See [the event object](/automation/events/event-object)
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
