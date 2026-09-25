# Changelog

Track notable updates to the OpusDNS API and developer documentation here.

## 2026

### 25 September 2026

- Changed **the domain summary to count only your own organization's
  domains**.
  [`GET /v1/domains/summary`](/api-reference#tag/domain/GET/v1/domains/summary)
  counted your organization and all of its sub-organizations in every field.
  `total_count`, `by_status`, `by_status_tag`, `by_tld` and `expiring_soon`
  now cover your own organization's domains alone. `by_organization` still
  lists your organization and each of its sub-organizations with their counts,
  so the whole tree stays visible there, and a sub-organization that shares
  your organization's name no longer takes the bare name as its key. The
  response shape is unchanged; if you have sub-organizations, the numbers are
  lower.

- Changed **domain statistics to count only your own organization's domains by
  default**, the same scope as the domain summary.
  [`GET /v1/domains/statistics`](/api-reference#tag/domain/GET/v1/domains/statistics)
  counted your organization and all of its sub-organizations, with no way to
  ask for your organization alone, so a parent organization's activity figures
  disagreed with its summary. The totals, `buckets` and `breakdown=tld` now
  cover your own organization's domains. Pass `include_sub_organizations=true`
  to count your sub-organizations too, as before.

  **This is a breaking change** if you have sub-organizations: without the new
  parameter your counts are lower than they were. `breakdown=organization`
  ranks your organization against its sub-organizations, so it now needs
  `include_sub_organizations=true` and is refused with `422` without it.

### 23 September 2026

- Added **the product waitlist**. Some products are not generally available yet,
  and reach their first customers through a waitlist rather than a switch you
  can flip yourself.
  [`GET /v1/organizations/product-waitlist`](/api-reference#tag/product_waitlist/GET/v1/organizations/product-waitlist)
  lists the waitlisted products your organization can see and where you stand
  on each: `can_apply` when you may apply, then `pending` once you have,
  `granted` once OpusDNS has switched the product on for you, or `rejected`.
  [`POST /v1/organizations/product-waitlist/{product}/apply`](/api-reference#tag/product_waitlist/POST/v1/organizations/product-waitlist/{product}/apply)
  applies, optionally with a `note` of up to 1000 characters saying what you
  would use the product for - the one thing that helps most when we work through
  the queue.

  Applications are per person: anyone in an invited organization can apply, and
  each of them once per product. A second apply from the same person is refused
  with `409 ERROR_WAITLIST_ALREADY_APPLIED` rather than returning the
  application you already have, so read the list for your current state instead
  of re-applying to check it. A rejected application is reconsidered by OpusDNS,
  never by applying again, and it does not stop your colleagues from applying.
  Applying needs a signed-in user; an API key sees the list with `can_apply`
  always `false`.

  The first product on the waitlist is the **AI Concierge**. A granted
  application enables it for the person who applied - there is nothing further
  to accept, and it appears the next time they load the dashboard. Colleagues
  who also want it apply themselves, or ask us to add them.

  One thing to expect: the set you see is the set you can apply for. A product
  your organization has not been invited to is left out of the list entirely,
  and its apply route answers `404`, so neither response tells you whether such
  a product exists.

### 22 September 2026

- Onboarded **`.com.pt`**, the Portuguese second-level extension. See the
  [`.pt` TLD Knowledge Base](/tld-knowledge-base/cctlds/pt) page.

### 18 September 2026

- Fixed **cancelling an inbound `.uk` transfer**.
  [`DELETE /v1/domains/{domain_reference}/transfer`](/api-reference#tag/domain/DELETE/v1/domains/{domain_reference}/transfer)
  answered `400 ERROR_REGISTRY_REQUEST` for every `.uk` domain, leaving the
  domain in `pendingTransfer` with the transfer's billing reservation held and
  no way out through the API. A `.uk` transfer-in sends no EPP transfer command
  in the first place - completion comes from the losing registrar releasing the
  IPS tag - so there was no registry-side transfer to cancel, and the registry
  refused the attempt before any of the local cleanup ran. The cancel now skips
  that registry call for `.uk` and does what it always meant to: release the
  pending transfer transaction, drop the inbound transfer tag, and remove the
  domain. Every other registry is unchanged. See
  [.uk operations](/products/tld-operations/uk).

- Fixed **the signup rejection when a VAT ID fails its qualified check**. A VAT
  ID that is valid in itself but whose registered company name or city does not
  match the organization you submitted was answered with no `errors` array and a
  message stating the VAT ID was valid - nothing a client could attach to a
  field, and nothing that explained the rejection.
  [`POST /v1/auth/signup`](/api-reference#tag/authentication/POST/v1/auth/signup)
  and
  [`POST /v1/organizations`](/api-reference#tag/organization/POST/v1/organizations)
  now answer with an entry whose `loc` is `["body", "organization", "tax_id"]`,
  typed `vat-company-details-mismatch`, whose `msg` names the detail that
  failed, for example "VAT ID is valid, but its registered company name did not
  match the submitted organization details." Where the member state confirmed
  neither
  field, the message says the details could not be confirmed rather than naming
  one. The VAT ID itself being invalid, unassigned or malformed is unchanged.

### 17 September 2026

- Fixed **DNSSEC key material longer than 255 characters**. A `KEY_DATA` record
  submitted to
  [`PUT /v1/domains/{domain_reference}/dnssec`](/api-reference#tag/domain/PUT/v1/domains/{domain_reference}/dnssec)
  failed with a `500` whenever its `public_key` ran past 255 characters - which
  is every RSA key of 2048 bits or more, at 348 characters for RSA-2048, 520 for
  RSA-3072 and 688 for RSA-4096. Only ECDSA and Ed25519 keys, at 44 to 128
  characters, were short enough to be stored. `public_key` now has no length
  limit, so a key of any algorithm and size is accepted. `DS_DATA` records were
  never affected. See [DNSSEC](/products/domains/dnssec).

### 15 September 2026

- Added a **nameserver filter to the domain list**:
  [`GET /v1/domains`](/api-reference#tag/domain/GET/v1/domains) now takes
  `nameserver`, and returns the domains with a nameserver whose hostname
  contains that text. `nameserver=ns1.example.com` finds the domains delegating
  to that one host; `nameserver=cloudflare` finds every domain on that provider,
  which is the quickest way to see what a nameserver migration has left to move.

  Only the nameservers a domain currently delegates to are matched - the ones
  reported in its `nameservers` field - so a host it used to point at does not
  bring it back. Matching ignores case, and the text is taken literally, so `%`
  and `_` are not wildcards. A rooted hostname such as `ns1.example.com.` loses
  its trailing dot, but a trailing dot after a single label anchors at a label
  boundary: `ns1.` matches `ns1.example.com` and not `ns10.example.com`. The
  filter combines with the others as usual, for example
  `?nameserver=cloudflare&tld=com`.

  One thing to expect: unlike the other filters, this one reads the nameservers
  of every domain in scope rather than a field on the domain itself, so the
  response is slower - the more so the larger your portfolio.

### 14 September 2026

- Added **domain statistics**:
  [`GET /v1/domains/statistics`](/api-reference#tag/domain/GET/v1/domains/statistics)
  returns how the portfolio of your organization and its sub-organizations
  moved per day, week or month (`granularity`) between `start_date` and
  `end_date` (inclusive, up to 400 days): domains `create`d and `transfer`red
  to OpusDNS, `delete`d and `transfer_out`, plus `renew`als and `restore`s,
  and `net` (created and transferred in, minus deleted and transferred out).
  Optionally restricted to one TLD (`tld=com`) or broken down by
  sub-organization or TLD (`breakdown=organization|tld`).

  Every bucket the window touches is present, so the series can be charted as
  is; a bucket marked `partial` reaches outside the window. Renewals and
  restores are counted once per day a domain was renewed or restored, so a
  domain renewed in two different months counts in both. Domains held at a
  connected external registrar are not counted yet.

  These counts are read from the domain event log, which begins later than the
  domains themselves. `data_available_from` reports the oldest event it holds:
  a window reaching further back is empty before that instant rather than
  genuinely zero. Complements
  [`GET /v1/domains/summary`](/api-reference#tag/domain/GET/v1/domains/summary),
  which reports the current portfolio.

- Launched **whitelabel branding**! Serve the OpusDNS dashboard and its
  transactional emails under your own brand - name, logo, colors, fonts, and
  support links - on a hostname you choose, so your customers never see OpusDNS.
  Manage it end to end from `/v1/whitelabel-branding`. See
  [Whitelabel branding](/account/whitelabel).

  - **Two tiers.** The **base** tier serves you on a subdomain of an
    OpusDNS-owned zone - nothing needed but a name. The **plus** tier serves you
    on your own domain for a fully unbranded experience, verified and provisioned
    for you (with `create_zone` to stand the DNS zone up if needed).

  - **A branding document** (`/v1/whitelabel-branding/document`) drives the look
    and content: your `brand` name and logos, a `theme` with light/dark color
    palettes, radius, and fonts, and `content` for support and legal links,
    footer, email signature, and per-template email copy. Every field is
    optional and falls back to the OpusDNS defaults. The palette covers brand,
    surface, sidebar, table, status, and chart colors - including
    `sidebar_accent`, `sidebar_border`, `table_header`, `table_row`, `body`, and
    `link`. See [Palette colors](/account/whitelabel#palette-colors).

  - **Assets and email previews.** Upload your logos and fonts
    (`/v1/whitelabel-branding/assets`) and preview any transactional email
    against a draft document before you save
    (`/v1/whitelabel-branding/email/preview`).

- Added **eIDAS-based attestation of a contact verification**: an entry sent to
  [`POST /v1/contacts/{contact_id}/verifications/attest`](/api-reference#tag/contact/POST/v1/contacts/{contact_id}/verifications/attest)
  with `"method": "AUTH"` now carries an `eid` object naming the scheme the
  claim was verified under - `eid_scheme` plus a `level_of_assurance` of `LOW`,
  `SUBSTANTIAL` or `HIGH`, which has to be a level that scheme is notified for.
  An `AUTH` attestation without it is rejected, and the stored verification
  reports the eID details back. eIDAS schemes have no official machine-readable
  identifiers, so the ones to use are listed per country, with the levels each
  scheme is notified for. `PHONE_VER_TRANSACTION_LOG` was added to the proofs at
  the same time. See
  [Attesting an eIDAS-based verification](/products/contacts/attestation-workflow#attesting-an-eidas-based-verification).

- Added **verification policies to the TLD specification**:
  [`GET /v1/tlds/{tld}`](/api-reference#tag/tld/GET/v1/tlds/{tld}) now returns
  `verification_policies`, keyed by `identity_verification` and
  `email_verification`, so the verification a registry imposes can be read
  before you send anything rather than discovered from a rejection. Each policy
  states whether it is `enabled`, the `contact_roles` it covers, the `trigger`
  operations that set it off (`domain_registration`, `domain_inbound_transfer`,
  `domain_modification`), its `validity_period`, whether the domain is suspended
  on failure and after what `suspension_delay`, and its `required_claims` - each
  a claim such as `EMAIL`, `PHONE`, `NAME` or `LEGAL_ENTITY`, with the
  `accepted_proofs` the registry takes for it where it restricts them - `.pt`,
  onboarded the same week, is the first TLD to carry one. See
  [TLD specifications](/products/tlds/specifications).

- Onboarded **[`.pt`](/tld-knowledge-base/cctlds/pt)** (Portugal, operated by
  Associação DNS.PT). Published its TLD Knowledge Base page. Portuguese law
  requires the registrant's email address and phone number to be verified before
  the contact can be used, and that verification is valid for three years;
  registrations, inbound transfers and contact changes are refused until it is in
  place, while renewals are exempt. A `.pt` domain carries a domain owner only:
  the administrative and technical roles belong to the registrar and are neither
  accepted on a request nor reported back. Every contact also carries a fiscal
  number, which the registry treats as the contact's unique key.

### 11 September 2026

- Added **domain `attributes` to the bulk update command**: the
  `domain_update_bulk` command submitted to
  [`POST /v1/jobs`](/api-reference#tag/jobs/POST/v1/jobs) takes `attributes` on
  its template and on each instance, validated exactly as
  [`PATCH /v1/domains/{domain_reference}`](/api-reference#tag/domain/PATCH/v1/domains/{domain_reference})
  validates them, and merged the way the command's other fields are. Until now
  the key was discarded on the way in, so a batch that set one reported success
  having written nothing. The single `domain_update` command takes it too.

  A system-owned or registration-time key, or an empty value clearing a
  protected one, on the template or on any instance rejects the whole batch at
  submit with a `422`, as it already did for bulk create and transfer. Checks
  that depend on the TLD - `monthly` where the registry sells no one-month
  renewal - can only run once the instance resolves to a domain, so they fail
  that instance's job, without a retry, and leave the rest of the batch running.
  See [Domain commands](/automation/jobs/domain-commands).

### 9 September 2026

- Changed **`auto_renew_period` to be the authoritative renewal cadence on every
  write path**. `period` is the term you are buying now; `auto_renew_period` is
  the cadence of the next renewal. They are separate facts, but three paths
  conflated them: a create recorded no cadence at all unless you sent one, the
  `.de` create derived one from `period.unit` and overwrote the value you sent,
  and a transfer-in preferred `period` over the attribute - so a monthly cadence
  asked for on a two-year transfer was silently stored as yearly.

  One rule now applies to every create and transfer-in, `.no` and the retried
  ones included: a cadence you supply wins; otherwise a one-month term derives
  `monthly`, a year-unit or absent term derives `yearly`, and a longer
  month-unit term derives nothing. A cadence already stored is never
  overwritten. An explicit `monthly` on a TLD whose registry sells no one-month
  renewal is refused with a `422` on create and transfer-in, matching the update
  path. Such a request used to answer `201`/`200` and store `yearly`.

### 8 September 2026

- Changed **DNS zone-validation failures to answer `422` with an array of
  errors**. [`POST /v1/dns`](/api-reference#tag/dns/POST/v1/dns),
  [`PATCH /v1/dns/{zone_name}/records`](/api-reference#tag/dns/PATCH/v1/dns/{zone_name}/records)
  and the two rrset routes answered `400`, with `errors` as a dict keyed by
  check name and then by rrset name - a shape that was never documented and that
  no client parsed, so a rejected write surfaced as a generic failure with the
  reason nowhere useful.

  These now answer `422` with `errors` as an array of entries shaped exactly
  like the request-validation errors the API already raises by itself: a `loc`
  anchoring the offending element, such as `["body", "rrsets", 0]`, an `msg`
  spelling the rule out, a `type` naming it (`cname_conflict`), and an `input`
  echoing what you sent. The `type` `dns-zone-validation`, the `code`
  `ERROR_ZONE_VALIDATION_FAILED` and `zone_name` keep the values they had, so
  one parser now covers both kinds of `422` a DNS write can return. Both
  variants are documented side by side on the routes that raise them.

- Fixed **domain `attributes` being dropped on update for every registry but
  DENIC**.
  [`PATCH /v1/domains/{domain_reference}`](/api-reference#tag/domain/PATCH/v1/domains/{domain_reference})
  accepted an `attributes` body for any TLD, but only the `.de` path stored it:
  a PATCH setting `auto_renew_period` on a `.com` answered `200`, wrote nothing
  and logged nothing, and the next renewal kept the old cadence. Every registry
  now stores what you send.

  Two rules come with it. `monthly` is refused where the TLD has no month-unit
  renewal period, so a stored cadence is always one the renewal can honour. And
  records the platform writes at registration - the attestation keys and the
  derived `.no` applicant values - are not writable on update, nor can a
  protected attribute be cleared by sending an empty value.

### 7 September 2026

- Added **inline contact attributes to the domain response**: each entry of
  `contacts[]` returned by
  [`GET /v1/domains/{domain_reference}`](/api-reference#tag/domain/GET/v1/domains/{domain_reference}),
  [`GET /v1/domains`](/api-reference#tag/domain/GET/v1/domains) and the domain
  create, transfer and update responses can now carry an `attributes` map
  holding the registry-specific attributes you supplied inline on that contact
  for that role, for example `{"contact_id": "contact_01…", "contact_type":
  "tech", "attributes": {"AFNIC_CONTACT_TYPE": "PM"}}`. The key is omitted for
  contacts submitted without inline attributes, so existing responses are
  unchanged, and attributes applied from a linked contact attribute set are not
  reported.

### 2 September 2026

- Changed **independent billing for suborganizations to require approval**:
  `billing_mode: "independent"` on
  [`POST /v1/organizations`](/api-reference#tag/organization/POST/v1/organizations)
  is now accepted only for top-level organizations that have been enabled for
  the feature. Other requests are rejected with `422
  ERROR_INDEPENDENT_BILLING_NOT_APPROVED`; consolidated billing and existing
  independent suborganizations are unaffected. Contact
  [support@opusdns.com](mailto:support@opusdns.com) for more information about
  this feature. See [Billing modes](/account/organizations/manage#billing-modes).

- Changed **the production environment to serve timezone-aware (RFC 3339)
  datetimes by default**, completing the staged cutover: every datetime in a
  public `/v1` response now carries a trailing `Z`. The `X-Datetime-Format:
  rfc3339` header remains accepted and is now a no-op. See
  [Timezone-aware datetimes (RFC 3339)](/upcoming-changes/rfc3339-datetimes).

- Added **the registrar credential to domains held at a connected registrar**:
  request `include=registrar_credential` on
  [`GET /v1/domains`](/api-reference#tag/domain/GET/v1/domains) or
  [`GET /v1/domains/{domain_reference}`](/api-reference#tag/domain/GET/v1/domains/{domain_reference})
  and each domain synced from a connected registrar carries a
  `registrar_credential` object with its `registrar_credential_id`, `name` and
  `registrar`; natively registered domains return `null`. The domain list also
  gained two repeatable filters, `registrar_credential_id` and `registrar`, so
  you can list the domains behind one credential or one registrar. Values
  within a parameter are OR-ed and the two parameters are AND-ed, as with `tld`
  and `tag_ids`.

- Changed **domain `attributes` values to be validated**: `auto_renew_period`
  accepts only `monthly` or `yearly`, and any other value is rejected with a
  `422` naming the accepted values, on domain create, transfer-in and update and
  at bulk job submission. Keys the platform writes itself
  (`verification_required`, `nor_id_declaration`, `nor_id_declaration_token`,
  `punktum_dk_tracking_no`) are now rejected if supplied, as the promotion keys
  already were. The `attributes` field in the API Reference now lists every
  key with its accepted values, the TLDs it applies to and whether it is read
  from the request or written by the platform. Changing `auto_renew_period`
  takes effect at the next renewal; the current expiry date does not move.

### 1 September 2026

- Onboarded **[`.bayern`](/tld-knowledge-base/gtlds/bayern)** (Bayern Connect
  GmbH) and **[`.nrw`](/tld-knowledge-base/gtlds/nrw)** (Minds + Machines GmbH),
  both served over the Tango registry backend. Published their TLD Knowledge Base
  pages. Both lock a domain for 60 days after a registration or a transfer.
  `.nrw` additionally requires the domain owner to hold a physical address in
  Germany.

- Onboarded **[`.berlin`](/tld-knowledge-base/gtlds/berlin)** and
  **[`.hamburg`](/tld-knowledge-base/gtlds/hamburg)** (both operated by TLD-BOX
  Registrydienstleistungen GmbH). Published their TLD Knowledge Base pages. Both
  require a domain owner, administrative and technical contact, each carrying a
  physical address, and both lock a domain for 60 days after a registration or a
  transfer.

- Onboarded **[`.dk`](/tld-knowledge-base/cctlds/dk)** (Denmark, operated by
  Punktum dk). Published its TLD Knowledge Base page. A `.dk` registration is an
  application rather than an allocation: the registry queues it, and the domain is
  activated only once the registrant's data and ID control has completed. That
  control is run by Punktum dk, using MitID for registrants residing in Denmark
  and a risk assessment for everyone else.

### 28 August 2026

- Onboarded **[`.mx`](/tld-knowledge-base/cctlds/mx)** (Mexico, operated by
  Registry .MX) together with its second-level extensions `.com.mx` and
  `.org.mx`. Published its TLD Knowledge Base page.

### 27 August 2026

- Added **an `in_use` filter to the contact list**: `GET /v1/contacts?in_use=true`
  returns only contacts attached to at least one domain, and `in_use=false` only
  contacts attached to none. A contact counts as in use through any role -
  registrant, admin, tech, or billing. Omitting the parameter keeps the
  unfiltered listing. See
  [`GET /v1/contacts`](/api-reference#tag/contact/GET/v1/contacts).

### 25 August 2026

- Onboarded **[`.se`](/tld-knowledge-base/cctlds/se)** (Sweden) and
  **[`.nu`](/tld-knowledge-base/cctlds/nu)** (Niue), both operated by
  Internetstiftelsen (The Swedish Internet Foundation). Published their TLD
  Knowledge Base pages. For both TLDs the registry owns the auth code — request a
  fresh one with
  [`POST /v1/domains/tld-specific/se/{domain_reference}/auth_code/request`](/api-reference#tag/domain_tld_specific/POST/v1/domains/tld-specific/se/{domain_reference}/auth_code/request)
  (or the `.nu` equivalent), which invalidates the previous code — and transfers
  complete immediately, with no pending window.

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
