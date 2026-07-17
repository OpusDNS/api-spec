# Upcoming changes

Planned changes to the OpusDNS API that you can prepare for — and, where
available, opt into — before they become the default.

- [Timezone-aware datetimes (RFC 3339)](/upcoming-changes/rfc3339-datetimes) —
  datetime fields on the public `/v1` API gain an explicit UTC `Z` designator.
  Opt in today with the `X-Datetime-Format: rfc3339` header; the new format
  becomes the default per environment on a staged schedule.
