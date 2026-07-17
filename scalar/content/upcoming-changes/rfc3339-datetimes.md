# Timezone-aware datetimes (RFC 3339)

The public `/v1` API is standardizing datetime fields on **RFC 3339** with an
explicit UTC designator. You can opt in today with a request header, and the new
format becomes the default on a staged schedule per environment.

## What is changing

All datetimes the API returns represent UTC instants. Today most fields are
serialized without a timezone marker; the new format appends `Z`.

**Before:**

```json
{
  "domain": "example.com",
  "registered_on": "2026-01-15T09:30:00",
  "expires_on": "2027-01-15T09:30:00"
}
```

**After:**

```json
{
  "domain": "example.com",
  "registered_on": "2026-01-15T09:30:00Z",
  "expires_on": "2027-01-15T09:30:00Z"
}
```

The values represent the same instants — only the serialization gains the `Z`.

## Why it matters

The naive form (no `Z`, no offset) is not valid RFC 3339 and is **parsed as local
time** by several clients. The most common pitfall is JavaScript:

```js
// Response value: "2026-01-15T09:30:00"
new Date("2026-01-15T09:30:00");
// → interpreted in the browser's local timezone, NOT UTC.
// A viewer at UTC-5 sees 09:30 rendered as if it were 09:30 local — a 5-hour error.

// New format: "2026-01-15T09:30:00Z"
new Date("2026-01-15T09:30:00Z");
// → correctly parsed as the UTC instant.
```

Strict RFC 3339 parsers in other languages reject the naive form outright. This is
the root cause behind mismatched expiry dates and off-by-hours timestamps in
integrations.

## Opt in today

Send this header on any public `/v1` request:

```
X-Datetime-Format: rfc3339
```

Every datetime in the response is normalized to UTC and serialized with a trailing
`Z`. The header:

- affects only the request it is sent on (no account-level state),
- is the exact value `rfc3339` (any other value, or an absent header, keeps today's
  behavior until the default cutover),
- remains valid forever — after cutover it is a no-op and never returns an error.

```bash
curl "$OPUSDNS_API_BASE/v1/domains/example.com" \
  --header "X-Api-Key: $OPUSDNS_API_KEY" \
  --header "X-Datetime-Format: rfc3339"
```

<scalar-callout type="info">
Point <code>$OPUSDNS_API_BASE</code> at <code>https://api.opusdns.com</code> for
production. Adding this header is a non-breaking change.
</scalar-callout>

## Migration guidance

1. **Parse `Z` correctly.** Ensure your datetime library treats the trailing `Z` as
   UTC. Most standard libraries do this natively.
2. **JavaScript:** if you currently compensate for `new Date()` local-time parsing
   (for example, manually appending `Z`, or subtracting an offset), remove that
   workaround when you adopt the header — the response already carries `Z`.
3. **Test end to end** with the header before your environment's cutover date, then
   remove any bespoke naive-datetime handling.
4. **Storage and display:** confirm downstream storage and UI render the corrected
   instant, not a double-shifted value.

## Cutover schedule

On these dates the tz-aware format becomes the default per environment; no header is
required. The header keeps working after cutover and simply becomes a no-op (it is
always accepted and never causes an error). Adopt the header before your target date
so the switch is a no-op for you.

| Environment        | Default cutover date |
| ------------------ | -------------------- |
| Preview1 / Staging | Monday, 2026-08-04   |
| Sandbox            | Monday, 2026-08-18   |
| Production         | Monday, 2026-09-01   |

## Scope

- Applies to public `/v1` endpoints.
- Jobs, reports, and RDAP endpoints already return tz-aware datetimes and are
  unchanged.

## Rollback and exceptions

If the cutover causes problems for your integration, we can revert the default for an
environment quickly, and we can evaluate a per-account exception on request. If you
need either — or more time to migrate — contact us **before** your environment's
cutover date at [support@opusdns.com](mailto:support@opusdns.com).
