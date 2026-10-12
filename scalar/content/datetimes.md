# Datetimes

Every datetime the public `/v1` API returns is a UTC instant serialized as
**RFC 3339** with an explicit `Z` designator:

```json
{
  "domain": "example.com",
  "registered_on": "2026-01-15T09:30:00Z",
  "expires_on": "2027-01-15T09:30:00Z"
}
```

Parse the trailing `Z` as UTC. Most standard datetime libraries do this natively,
including JavaScript's `new Date()`.

## The `X-Datetime-Format` header

`X-Datetime-Format: rfc3339` is accepted on every request and has no effect.
Responses use the format above whether or not you send it, and sending it never
causes an error, so existing clients that set it need no change.

## Before the cutover

Until the cutover, most `/v1` datetime fields were serialized without a timezone
marker (`"2026-01-15T09:30:00"`). They represented the same UTC instants, but the
naive form is not valid RFC 3339: JavaScript's `new Date()` parses it as local
time, and strict RFC 3339 parsers reject it. The `X-Datetime-Format: rfc3339`
header let clients opt in to the new format early.

| Environment | Default cutover date  |
| ----------- | --------------------- |
| Sandbox     | Tuesday, 2026-08-18   |
| Production  | Wednesday, 2026-09-02 |

If your integration predates the cutover:

1. **Remove workarounds.** If you compensated for local-time parsing, for example
   by appending `Z` or subtracting an offset, remove that code: the response
   already carries `Z`, and keeping it double-shifts the value.
2. **Check storage and display.** Confirm downstream storage and UI show the
   correct instant, not a shifted one.

Jobs, reports, and RDAP endpoints already returned tz-aware datetimes and were
unchanged.
