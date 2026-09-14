# Whitelabel branding

Whitelabel branding lets you serve the OpusDNS dashboard and its transactional
emails under your own brand — your name, logo, colors, fonts, and support links,
on a hostname you choose — so your customers never see OpusDNS.

An organization has **one** whitelabel configuration at a time. `GET
/v1/whitelabel-branding` returns it, or `404` when nothing is set up yet.

## Tiers

A whitelabel runs on one of two tiers. Both are paid, and a whitelabel is a
single subscription — the tiers are alternatives, not add-ons.

| Tier | Served on | What you provide |
| --- | --- | --- |
| **Base** | A subdomain of a zone OpusDNS owns (`app.<label>.<suffix>`) | Just a label. |
| **Plus** | Your own domain, for a fully unbranded experience | A label **and** an OpusDNS-hosted domain you own. |

Every whitelabel keeps a managed subdomain regardless of tier, composed from its
`label` as `app.<label>.<suffix>` (dashboard) and `auth.<label>.<suffix>`
(login). On base that managed pair is what gets served. On plus your own domain
is served instead, and the managed pair is published alongside it as a backup
address.

<scalar-callout type="info">
Because every whitelabel composes its label against a base-tier zone, both tiers are only purchasable in environments configured with one. Where none is configured, creating a whitelabel answers `403`.
</scalar-callout>

## Buying a whitelabel

`POST /v1/whitelabel-branding` buys a whitelabel on the chosen tier with a
billing period. A `label` is required for both tiers; a plus purchase also
carries the custom `hostname` and its dashboard/login subdomains. See the
[API reference](/api-reference#tag/whitelabel) for the exact request body.

The purchase reserves billing and creates the subscription, then onboarding runs
asynchronously — the response is `202`, and you re-`GET` the config to watch it
converge:

- **Base** skips domain verification (the zone is OpusDNS-owned) but still points
  each managed host at the whitelabel edge, which issues a per-host certificate
  on demand.
- **Plus** verifies that the custom domain is an OpusDNS-hosted zone owned by your
  organization, then points both hosts at the edge. Pass `create_zone: true` to
  have onboarding stand the zone up if it does not already exist. You still have
  to delegate the domain to the OpusDNS nameservers.

Labels are validated on the way in, and reserved labels are rejected with a
`400`.

### Retrying onboarding

`POST /v1/whitelabel-branding/recheck` re-runs onboarding — the retry after you
fix your DNS setup. A plus recheck may also carry a corrected `hostname` and
subdomains to re-point the config before re-running, accepted only before
provisioning has started. A base whitelabel takes no re-point: its hostnames come
from its label, so move it with `PATCH` instead.

## Managing the configuration

`PATCH /v1/whitelabel-branding` changes the config without touching its
subscription or price:

- **Relabel** (`label`) moves the managed subdomain to a different label at any
  time, including while active. On base this changes the served host; on plus it
  moves the backup pair and leaves the custom domain unchanged (re-point that
  through recheck). A label already taken answers `409` — labels are
  first-come-first-served.
- **Disable / enable** (`enabled`) stops or resumes serving. Disabling withdraws
  the routing and disables the login client; the configuration, branding
  document, and provisioning history are kept, so re-enabling brings it back
  without re-provisioning.
- **Renewal mode** (`renewal_mode`) sets the subscription's auto-renew intent.
  Cancelling keeps the whitelabel serving out its paid term and terminates it at
  the end.

Like the other write routes, a change that moves serving is asynchronous: the
change is recorded, then a job converges the login client and the routing
shortly after.

<scalar-callout type="warning">
Disabling a whitelabel does **not** cancel its subscription — billing continues until the subscription itself is cancelled. A disabled whitelabel is frozen: `/recheck` and `/tier` answer `409` until you re-enable it.
</scalar-callout>

### Upgrading to plus

`POST /v1/whitelabel-branding/tier` upgrades a base whitelabel to plus in place,
with the plus domain fields. The subscription keeps its term and renewal date and
renews at the plus price; a yearly term additionally settles a one-time prorated
fee for the remaining whole months now, while a monthly term pays nothing now.
The managed subdomain label is kept. Downgrades are not offered — cancel and
rebook instead — so a whitelabel already on plus answers `409`.

### Restoring a terminated whitelabel

`POST /v1/whitelabel-branding/restore` brings a terminated whitelabel back,
reserving the restore fee, reactivating the subscription, and re-provisioning
from the preserved state. Only a terminated config is restorable.

## The branding document

The look and content of the branded dashboard and emails come from a **branding
document**, edited independently of the subscription and usable before a
whitelabel is even purchased:

- `GET /v1/whitelabel-branding/document` returns the stored document.
- `PUT` (or `POST`) `/v1/whitelabel-branding/document` upserts it.

Every field is optional, so a partial document round-trips and unset fields fall
back to the OpusDNS defaults. The document has four top-level sections:

| Section | Holds |
| --- | --- |
| `brand` | Display name and logo variants (light, dark, icon, favicon). |
| `theme` | `radius`, `font_family`, `font_url`, and a `light` / `dark` color **palette**. |
| `content` | Support and legal links, footer, email signature, and per-template email copy overrides. |
| `auth` | OIDC bootstrap for the pre-login app (system-owned; set during onboarding). |

### Palette colors

Each palette (`theme.light` and `theme.dark`) is a set of optional hex colors
(`#rgb` or `#rrggbb`). They map to the surfaces of the dashboard:

- **Brand** — `primary`, `primary_foreground`, `secondary`,
  `secondary_foreground`, `accent`, `accent_foreground`.
- **Surfaces** — `background`, `foreground`, `body`, `body_foreground`, `card`,
  `card_foreground`, `muted`, `muted_foreground`, `border`, `input`, `link`.
- **Sidebar** — `sidebar`, `sidebar_foreground`, `sidebar_accent`,
  `sidebar_accent_foreground`, `sidebar_border`.
- **Tables** — `table`, `table_header`, `table_row`, `table_row_interactive`.
- **Status** — `danger`, `success`, `warning`, `info`.
- **Series** — `tag_colors` and `chart_colors` (lists of hex colors).

### Assets and email previews

Logo and font URLs on the document must point at assets you have uploaded to
OpusDNS — external URLs are rejected:

- `GET` / `POST` `/v1/whitelabel-branding/assets` list and upload assets (images
  and fonts, up to 5 MB each); `DELETE /v1/whitelabel-branding/assets/{asset_id}`
  removes one. An asset still referenced by the document cannot be deleted
  (`409`).
- `GET /v1/whitelabel-branding/email/templates` lists the editable transactional
  email templates and their content blocks, and `POST
  /v1/whitelabel-branding/email/preview` renders a template against a draft
  document for live editing.

## Permissions

Read routes require the `whitelabel_branding:view` permission; every write route
requires `whitelabel_branding:manage`. See
[Roles & permissions](/account/organizations/roles).

## Related API Reference

- [`GET /v1/whitelabel-branding`](/api-reference#tag/whitelabel/GET/v1/whitelabel-branding)
- [`POST /v1/whitelabel-branding`](/api-reference#tag/whitelabel/POST/v1/whitelabel-branding)
- [`PATCH /v1/whitelabel-branding`](/api-reference#tag/whitelabel/PATCH/v1/whitelabel-branding)
- [`POST /v1/whitelabel-branding/tier`](/api-reference#tag/whitelabel/POST/v1/whitelabel-branding/tier)
- [`POST /v1/whitelabel-branding/recheck`](/api-reference#tag/whitelabel/POST/v1/whitelabel-branding/recheck)
- [`POST /v1/whitelabel-branding/restore`](/api-reference#tag/whitelabel/POST/v1/whitelabel-branding/restore)
- [`GET /v1/whitelabel-branding/document`](/api-reference#tag/whitelabel/GET/v1/whitelabel-branding/document)
- [`PUT /v1/whitelabel-branding/document`](/api-reference#tag/whitelabel/PUT/v1/whitelabel-branding/document)
- [`GET /v1/whitelabel-branding/assets`](/api-reference#tag/whitelabel/GET/v1/whitelabel-branding/assets)
- [`POST /v1/whitelabel-branding/email/preview`](/api-reference#tag/whitelabel/POST/v1/whitelabel-branding/email/preview)
