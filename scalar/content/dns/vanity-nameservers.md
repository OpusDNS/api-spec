# Vanity nameservers

By default, every DNS zone hosted at OpusDNS answers from the shared OpusDNS
nameservers (`ns1.opusdns.com` / `ns2.opusdns.net`). **Vanity nameservers** let
you present your zones under nameserver names on your own domain — for example
`ns1.example.com` and `ns2.example.com` — so your brand appears in the
delegation and `NS` records. OpusDNS still answers the DNS from its anycast
network; only the *names* change.

A group of branded nameservers is a **vanity nameserver set**. A set has:

- a **name** for your own reference;
- a **parent domain** — the domain the nameserver hostnames live under (e.g.
  `example.com` for `ns1.example.com`);
- two or more **nameserver hostnames** (e.g. `ns1.example.com`,
  `ns2.example.com`);
- an **SOA responsible name** (`soa_rname`) — the contact stamped into the
  `SOA` record of every zone the set brands, in DNS format (e.g.
  `hostmaster.example.com`).

Once a set is **active**, you can point your DNS zones at it: new zones can use
it automatically (if it is your organization default), or any zone — new or
existing — can be branded with a specific set explicitly.

## How it works: where is the parent domain registered?

How much you have to do yourself depends on **where the parent domain is
registered**. The API behaves the same either way; the difference is the setup
you are responsible for.

| Parent domain | What OpusDNS does | What you do |
| --- | --- | --- |
| **Registered with OpusDNS** | Provisions the zone, assigns anycast addresses, and registers the nameserver glue at the registry automatically. The set activates on its own. | Nothing extra — just create the set. |
| **Registered elsewhere** | Assigns anycast addresses and verifies that the nameservers resolve to them. | Publish `A` / `AAAA` records for the nameserver hostnames pointing at the assigned anycast addresses, and register glue at your registrar if needed (see [Glue records](#glue-records)). |

<scalar-callout type="info">
Use the <a href="#check-the-status-of-a-set"><code>/check</code> diagnostic</a> at any time to see exactly which prerequisites are satisfied and which are still outstanding. It returns more detail when OpusDNS manages the parent domain, because we can read the registry directly.
</scalar-callout>

## Create a vanity nameserver set

```bash
curl "$OPUSDNS_API_BASE/v1/vanity-nameserver-sets" \
  --request POST \
  --header "X-Api-Key: $OPUSDNS_API_KEY" \
  --header "Content-Type: application/json" \
  --data '{
    "name": "Example brand nameservers",
    "parent_domain_name": "example.com",
    "soa_rname": "hostmaster.example.com",
    "hostnames": ["ns1.example.com", "ns2.example.com"]
  }'
```

<scalar-callout type="info">
A vanity nameserver set carries a fee to <strong>create</strong>, a recurring fee to <strong>renew</strong> annually, and a fee to <strong>restore</strong> during its grace period. See your pricing information for exact figures.
</scalar-callout>

### Request fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `string` | Yes | A human-readable label for the set. |
| `parent_domain_name` | `string` | Yes | The apex domain the hostnames live under. Every hostname must be a subdomain of it. |
| `soa_rname` | `string` | Yes | The `SOA` responsible name stamped into branded zones, in DNS format (e.g. `hostmaster.example.com`). |
| `hostnames` | `array` | Yes | Two or more fully-qualified nameserver hostnames, ordered by intended position. |

The call returns **`202 Accepted`** with the created set. The set starts in
status `provisioning` and activates asynchronously (see
[What to expect after creating](#what-to-expect-after-creating)).

```json
{
  "set_id": "vns_01kvn2kr1qep2bd7e60tt65fxn",
  "organization_id": "organization_01kvn2kr34e9ts01z1330tkvfx",
  "name": "Example brand nameservers",
  "parent_domain_name": "example.com",
  "soa_rname": "hostmaster.example.com",
  "status": "provisioning",
  "is_default": false,
  "nameservers": [
    { "hostname": "ns1.example.com", "position": 0 },
    { "hostname": "ns2.example.com", "position": 1 }
  ]
}
```

The nameserver in `position` `0` becomes the primary (`SOA` `MNAME`) for zones
branded with the set.

## What to expect after creating

Activation happens **asynchronously** — the `202` response means the request
was accepted, not that the set is live. OpusDNS sets up the zone, confirms the
nameservers are correctly in place, and only then moves the set to `active`. A
set will not activate until its prerequisites actually check out, and what is
required depends on where the parent domain is registered:

- **Parent domain managed by OpusDNS** — provisioning and glue registration are
  automatic and usually complete within a minute or two. Registry steps can take
  longer to settle and are retried for a period to allow for registry
  propagation.
- **Parent domain registered elsewhere** — OpusDNS repeatedly checks that the
  nameserver hostnames resolve to the assigned anycast addresses, for a limited
  window. Publish your `A` / `AAAA` records before creating the set, or shortly
  after, so the check succeeds inside that window.

A set has one of the following statuses:

| Status | Meaning |
| --- | --- |
| `provisioning` | Being set up; not yet serving as a vanity delegation. |
| `active` | Live and usable to brand zones. |
| `suspended` | Temporarily inactive (see [Lifecycle](#lifecycle-renewal-grace-and-deletion)). Existing zones keep working. |
| `failed` | Activation did not complete in time. |
| `deleting` | Being torn down. |

<scalar-callout type="info">
A <code>failed</code> set is <strong>not</strong> permanent. Once the prerequisites are in place — for example, after you finish publishing your records — <a href="#retry-a-failed-set">retry the set</a> to re-run activation for the same set, with no need to delete it and start over. Use <code>/check</code> first to confirm what was missing is now resolved.
</scalar-callout>

## The anycast addresses to publish

<scalar-callout type="success">
If your parent domain is <strong>registered with OpusDNS</strong>, you do not need to publish anything — OpusDNS sets up the nameserver <code>A</code> / <code>AAAA</code> records and registers the glue at the registry automatically. The rest of this section applies only when your parent domain is registered elsewhere.
</scalar-callout>

If your parent domain is registered elsewhere, point **every** nameserver
hostname in the set at OpusDNS's shared anycast pool. Publish all of the
following records for **each** hostname (e.g. for both `ns1.example.com` and
`ns2.example.com`), and use the same addresses when you register glue at your
registrar:

| Type | Value |
| --- | --- |
| `A` | `192.174.68.145` |
| `A` | `176.97.158.145` |
| `AAAA` | `2001:67c:1bc::145` |
| `AAAA` | `2001:67c:10b8::145` |

So each nameserver hostname resolves to both IPv4 addresses (two `A` records)
and both IPv6 addresses (two `AAAA` records).

<scalar-callout type="info">
The <a href="#check-the-status-of-a-set"><code>/check</code> diagnostic</a> reports the exact addresses your set must publish under each check's <code>observed.required_records</code>. If that output ever differs from the list above, treat <code>/check</code> as authoritative.
</scalar-callout>

## Use a set for your DNS zones

There are three ways to make a zone use a vanity NS set.

### Set it as your organization default

```bash
curl "$OPUSDNS_API_BASE/v1/vanity-nameserver-sets/$SET_ID/default" \
  --request PATCH \
  --header "X-Api-Key: $OPUSDNS_API_KEY"
```

After this, **new** zones created with no explicit set are automatically branded
with it.

- When the **first** set in your organization becomes active, it automatically
  becomes the default.
- With **multiple** active sets, only one is the default at a time; selecting a
  new default changes which set brands newly created zones, but does not change
  existing zones.
- Changing the default only affects zones created *after* the change. Each zone
  remembers the set it was branded with.

To stop a set from being applied to new zones while leaving existing zones
working, make sure it is **not** the default — either choose a different
default, or clear the default entirely:

```bash
curl "$OPUSDNS_API_BASE/v1/vanity-nameserver-sets/default" \
  --request DELETE \
  --header "X-Api-Key: $OPUSDNS_API_KEY"
```

After clearing, new zones fall back to the standard OpusDNS nameservers.
Existing zones keep the branding they already have.

### Brand a new zone explicitly

When [creating a zone](/products/dns/manage-zones), include
`vanity_nameserver_set_id` with the `set_id`. This works for *any* active set,
default or not:

```bash
curl "$OPUSDNS_API_BASE/v1/dns" \
  --request POST \
  --header "X-Api-Key: $OPUSDNS_API_KEY" \
  --header "Content-Type: application/json" \
  --data '{
    "name": "example.net",
    "vanity_nameserver_set_id": "vns_01kvn2kr1qep2bd7e60tt65fxn"
  }'
```

### Re-brand or unbrand an existing zone

A pre-existing zone can be re-stamped with a different set — or reset back to
the OpusDNS defaults — at any time, without recreating it:

```bash
curl "$OPUSDNS_API_BASE/v1/dns/example.net/vanity-set" \
  --request PATCH \
  --header "X-Api-Key: $OPUSDNS_API_KEY" \
  --header "Content-Type: application/json" \
  --data '{
    "vanity_nameserver_set_id": "vns_01kvn2kr1qep2bd7e60tt65fxn"
  }'
```

Set `vanity_nameserver_set_id` to `null` to unbrand the zone and restamp its
apex back to the standard OpusDNS nameservers. This rewrites the zone's apex
`NS` records and `SOA` at the DNS provider (and re-signs the zone if DNSSEC is
enabled). Afterwards the zone appears in the set's
[zones listing](#list-the-zones-using-a-set).

<scalar-callout type="warning">
The target set must be <code>active</code> and belong to your organization. A suspended set returns <code>409</code>, a missing or other-organization set returns <code>404</code>. Re-branding requires both DNS-zone and vanity-NS manage permissions.
</scalar-callout>

<scalar-callout type="info">
To re-brand (or unbrand) <strong>many zones at once</strong>, use the bulk jobs API with the <code>dns_zone_restamp_vanity_ns_bulk</code> command — see <a href="/automation/jobs/dns-commands">DNS bulk commands</a>.
</scalar-callout>

### List the zones using a set

```bash
curl "$OPUSDNS_API_BASE/v1/vanity-nameserver-sets/$SET_ID/zones" \
  --header "X-Api-Key: $OPUSDNS_API_KEY"
```

Returns the zones currently branded with the set (paginated). Useful before
deleting a set, since a set in use cannot be deleted.

## Check the status of a set

The `/check` endpoint is a **read-only health report** for a set. It changes
nothing — it tells you what is correctly set up, what is missing, and what is
optional-but-recommended. It is the quickest way to see why a set has not gone
active, or why a customer's vanity nameservers "aren't working."

```bash
curl "$OPUSDNS_API_BASE/v1/vanity-nameserver-sets/check" \
  --request POST \
  --header "X-Api-Key: $OPUSDNS_API_KEY" \
  --header "Content-Type: application/json" \
  --data '{
    "set_id": "vns_01kvn2kr1qep2bd7e60tt65fxn"
  }'
```

The response carries an overall `summary` and a list of individual `checks`:

```json
{
  "set_id": "vns_01kvn2kr1qep2bd7e60tt65fxn",
  "parent_domain_name": "example.com",
  "status": "provisioning",
  "summary": {
    "state": "action_required",
    "detail": "Nameserver A/AAAA records are not yet published for ns1.example.com, ns2.example.com."
  },
  "checks": [
    {
      "id": "ns_a_records",
      "label": "Nameserver A/AAAA records",
      "status": "fail",
      "severity": "required",
      "source": "public_dns",
      "confidence": "authoritative",
      "detail": "Vanity NS hostnames are not yet resolving to the assigned anycast addresses.",
      "observed": {
        "required_records": {
          "A": ["192.174.68.145", "176.97.158.145"],
          "AAAA": ["2001:67c:1bc::145", "2001:67c:10b8::145"]
        }
      },
      "remediation": "Publish A (and AAAA) records for each nameserver hostname pointing at the addresses in required_records."
    }
  ]
}
```

### The overall summary state

| `state` | Meaning | Your action |
| --- | --- | --- |
| `ready` | Everything checks out — nameservers resolve and glue is in place. | None. |
| `propagating` | Setup is correct but a change has not fully appeared in DNS yet. | Wait and re-check — no action needed. |
| `action_required` | Something you must do is missing — e.g. nameserver `A` records are not published, or glue is not registered. | Follow the `remediation` on the failing check. |
| `degraded` | Registered values do not match what is visible in DNS (a misconfiguration or stale delegation). | Investigate the mismatch. |

### The individual checks

| Check | What it answers | When present |
| --- | --- | --- |
| `ns_a_records` *(required)* | Do the nameserver hostnames resolve to the assigned anycast addresses? `observed.required_records` lists the exact addresses you should publish. | Always. |
| `registry_glue_registered` *(recommended)* | Is the nameserver glue registered at the registry, and to which addresses? Read directly from the registry. | Only when the parent domain is managed by OpusDNS. |
| `registry_glue_visible` *(recommended)* | Is the glue visible in public DNS yet (at the parent TLD's nameservers)? Reflects propagation. | Always. |

Each check reports a `status` (`pass` / `warn` / `fail` / `info`), a `severity`
(`required` / `recommended` / `optional`), the `observed` values, and — when
relevant — a `remediation` hint.

<scalar-callout type="success">
A common and <strong>healthy</strong> situation is <code>registry_glue_registered = pass</code> with <code>registry_glue_visible = warn</code> and an overall state of <code>propagating</code>: the glue is registered correctly and DNS just hasn't caught up yet. It clears on its own.
</scalar-callout>

## Retry a failed set

A `failed` set means activation did not complete within its window — usually
because the nameserver `A` / `AAAA` records or registry glue were not in place in
time. Once you have fixed what was missing, re-run activation for the **same**
set instead of recreating it:

```bash
curl "$OPUSDNS_API_BASE/v1/vanity-nameserver-sets/$SET_ID/retry" \
  --request POST \
  --header "X-Api-Key: $OPUSDNS_API_KEY"
```

The call returns **`202 Accepted`**; the set returns to `provisioning` and
activation runs again, asynchronously, exactly as it did on create. Retry applies
only to `failed` sets — calling it on a set in any other status returns `409`.

<scalar-callout type="info">
Run <a href="#check-the-status-of-a-set"><code>/check</code></a> before retrying to confirm the prerequisites are now satisfied, so the re-run succeeds instead of failing again.
</scalar-callout>

## Glue records

**Glue records** are the IP addresses attached to a nameserver at the
registry/TLD level. They are needed when a nameserver lives *under the same
domain it serves* — "in-bailiwick", e.g. using `ns1.example.com` to serve
`example.com` itself — because otherwise resolving the nameserver would be
circular.

- When the **parent domain is registered with OpusDNS**, glue is registered
  automatically — you do not need to do anything.
- When the **parent domain is registered elsewhere**, register glue (sometimes
  called "host records", "child hosts", or "private nameservers") at *your*
  registrar, pointing the nameserver hostnames at the anycast addresses from
  `/check`. If your domain is registered with OpusDNS but managed as a host
  object, see [Host objects (glue records)](/products/domains/host-objects).
- Glue is **only required for in-bailiwick use**. If you only point *other*
  domains at your branded nameservers, glue is not strictly required — which is
  why the glue checks are advisory, not blocking.

## Lifecycle: renewal, grace, and deletion

A vanity nameserver set is a **subscription that renews annually for a fee**. As
long as it renews, it keeps working with no action needed. See your pricing
information for the renewal figure.

### If the subscription lapses

If a renewal does not go through, the set enters a **30-day grace period**:

- **At the start of grace**, the set is **suspended** and automatically removed
  as the organization default, so it stops being applied to *new* zones. Zones
  that already use it **keep working normally** throughout grace.
- **Restore it during grace** to return it to normal:

  ```bash
  curl "$OPUSDNS_API_BASE/v1/vanity-nameserver-sets/$SET_ID/restore" \
    --request POST \
    --header "X-Api-Key: $OPUSDNS_API_KEY"
  ```

  A restored set comes back `active`, but not automatically as the default —
  re-select it as the default if you want it to brand new zones again. Restoring
  incurs a fee; see your pricing information.
- **At the end of grace**, if it has not been restored, OpusDNS automatically
  restamps every zone still using the set back to the standard OpusDNS
  nameservers and tears the set down. Those zones are then served by the OpusDNS
  nameservers again.

### Deleting a set

Delete a set with `DELETE /v1/vanity-nameserver-sets/{set_id}`. The set must
first be **out of use** — deletion is refused with `409` while:

- **any zone still references the set** — re-stamp every such zone onto a
  different set, or back to the OpusDNS defaults
  ([Re-brand or unbrand a zone](#re-brand-or-unbrand-an-existing-zone)), first;
  or
- **the set is the organization default and other active sets exist** — choose a
  different default first. (Deleting your only active set is fine.)

```bash
curl "$OPUSDNS_API_BASE/v1/vanity-nameserver-sets/$SET_ID" \
  --request DELETE \
  --header "X-Api-Key: $OPUSDNS_API_KEY"
```

When accepted, the call returns `202 Accepted` and the set is torn down
asynchronously.

<scalar-callout type="warning">
Deleting a set takes down the vanity NS configuration, but does <strong>not</strong> remove nameserver glue / host records registered at the registry. If you no longer want those nameservers to exist at all, remove the glue / host records separately — for an externally-registered domain, at your own registrar.
</scalar-callout>

## API reference

| Method and path | Purpose |
| --- | --- |
| `POST /v1/vanity-nameserver-sets` | Create a set. Returns `202` plus the set. |
| `GET /v1/vanity-nameserver-sets` | List your organization's sets (paginated). |
| `GET /v1/vanity-nameserver-sets/{set_id}` | Get one set. |
| `POST /v1/vanity-nameserver-sets/check` | Run the read-only diagnostic on a set. |
| `GET /v1/vanity-nameserver-sets/{set_id}/zones` | List the DNS zones branded with the set. |
| `PATCH /v1/vanity-nameserver-sets/{set_id}/default` | Make the set your organization default. |
| `DELETE /v1/vanity-nameserver-sets/default` | Clear the organization default. |
| `POST /v1/vanity-nameserver-sets/{set_id}/restore` | Restore a suspended set during its grace period. |
| `POST /v1/vanity-nameserver-sets/{set_id}/retry` | Re-run activation for a `failed` set. Returns `202`. |
| `DELETE /v1/vanity-nameserver-sets/{set_id}` | Delete a set (must be out of use first). Returns `202`. |
| `PATCH /v1/dns/{zone_name}/vanity-set` | Re-brand an existing zone with a set, or clear it (`null`) back to OpusDNS defaults. |

An organization can have **multiple** active sets at once (for example,
different brands), coexisting independently. Only one can be the default at a
time.

## Troubleshooting

<scalar-callout type="info">
<strong>"My set has been provisioning for a while, or it went to <code>failed</code>."</strong><br/>
Activation only completes once the prerequisites check out, within a limited window. If your records or glue were not in place in time, the set is marked <code>failed</code>. Run <code>/check</code> to see what is missing, fix it, then <a href="#retry-a-failed-set">retry the set</a> to re-run activation — no need to recreate it.
</scalar-callout>

<scalar-callout type="info">
<strong>"I created a set but my domains still show the OpusDNS nameservers."</strong><br/>
Setting or changing the organization default only brands <em>new</em> zones created after the change. To switch an existing zone, re-stamp it with <code>PATCH /v1/dns/{zone_name}/vanity-set</code>.
</scalar-callout>

<scalar-callout type="info">
<strong>"My domain is registered elsewhere — what exactly do I do?"</strong><br/>
(1) Run <code>/check</code> to get the assigned anycast addresses. (2) At your DNS host, publish <code>A</code> (and <code>AAAA</code>) records for each nameserver hostname pointing at those addresses. (3) At your registrar, register the nameservers as host / glue records if you will use them for the parent domain itself. (4) Re-run <code>/check</code> to confirm.
</scalar-callout>
