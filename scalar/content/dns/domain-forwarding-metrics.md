# Domain forwarding metrics

OpusDNS tracks every redirect that passes through your domain forwards,
giving you visibility into traffic patterns, visitor demographics, and
redirect performance.

Two sets of routes serve this data:

- [`GET /v1/domain-forwards/statistics`](/api-reference#tag/domain-forward/GET/v1/domain-forwards/statistics)
  returns totals, a time series and an optional top list in one call.
  [`GET /v1/domain-forwards/statistics/movers`](/api-reference#tag/domain-forward/GET/v1/domain-forwards/statistics/movers)
  lists the domains whose redirects dropped or rose most.
  Both are described first.
- The `/v1/domain-forwards/metrics` routes return one view per route.
  They will be deprecated in favor of the statistics route.
  They are described [further down](#metrics-routes).

## Statistics

One call returns three things for a window you choose:

- `totals`: the redirects served in the window, the unique visits, and the
  forwards that were invoked and configured.
- `buckets`: one entry per time bucket, oldest first, with the redirects and
  unique visits of each. A bucket without traffic is present and holds `0`.
- `breakdown`: a top list of the redirects grouped by one dimension. It is
  `null` unless you ask for it with `breakdown`.

```bash
curl --get "$OPUSDNS_API_BASE/v1/domain-forwards/statistics" \
  --header "X-Api-Key: $OPUSDNS_API_KEY" \
  --data-urlencode "start_date=2026-10-18" \
  --data-urlencode "end_date=2026-10-20" \
  --data-urlencode "granularity=day"
```

```json
{
  "start_date": "2026-10-18",
  "end_date": "2026-10-20",
  "start": "2026-10-18T00:00:00Z",
  "end": "2026-10-21T00:00:00Z",
  "granularity": "day",
  "totals": {
    "total_visits": 52300,
    "unique_visits": 14870,
    "invoked_forwards": 41,
    "configured_forwards": 58
  },
  "buckets": [
    {
      "period_start": "2026-10-18T00:00:00Z",
      "period_end": "2026-10-19T00:00:00Z",
      "total_visits": 15100,
      "unique_visits": 6020,
      "partial": false
    },
    {
      "period_start": "2026-10-19T00:00:00Z",
      "period_end": "2026-10-20T00:00:00Z",
      "total_visits": 21400,
      "unique_visits": 7310,
      "partial": false
    },
    {
      "period_start": "2026-10-20T00:00:00Z",
      "period_end": "2026-10-21T00:00:00Z",
      "total_visits": 15800,
      "unique_visits": 6480,
      "partial": true
    }
  ],
  "breakdown": null,
  "data_available_from": "2026-09-01T00:00:00Z",
  "data_available_to": "2026-10-20T13:41:07Z"
}
```

The response gives the window twice: as days (`start_date` and `end_date`, both inclusive)
and as instants (`start` inclusive, `end` exclusive).

### Parameters

| Parameter | Description |
| --- | --- |
| `start_date` | First day of the window, inclusive. `YYYY-MM-DD`, in UTC. |
| `end_date` | Last day of the window, inclusive. Same format. |
| `start` | Start of the window as an instant, inclusive. RFC 3339, in UTC. A value without an offset is read as UTC. Only with `granularity=hour`, instead of `start_date` and `end_date`. |
| `end` | End of the window as an instant, exclusive. Same format. Only with `granularity=hour`. |
| `granularity` | Bucket width: `hour`, `day` (default), `week` or `month`. |
| `hostname` | Count one forward, matched exactly (e.g., `www.example.com`). Excludes `domain`. |
| `domain` | Count a domain and all its subdomains. Excludes `hostname`. |
| `protocol` | Count only redirects requested over `http` or `https`. |
| `exclude_bots` | Set to `true` to leave out bots: redirects whose platform is `Bot` or `Unknown`, and crawlers named by their user agent (Googlebot, Applebot, Meta's crawlers and others), whatever platform they report. Redirects stored before November 2026 are left out by platform only. |
| `include_sub_organizations` | Set to `true` to count the forwards of your sub-organizations too. By default only your own organization is counted. |
| `breakdown` | Adds a top list grouped by `browser`, `platform`, `country`, `status_code`, `user_agent`, `referrer`, `url`, `fqdn`, `domain`, `forward` or `rule`. `url` needs a `domain` filter and cannot be combined with `hostname` or `protocol` (see [URL breakdown](#url-breakdown)). |
| `breakdown_limit` | How many items the top list holds, from 1 to 100. Default `10`. |

Give exactly one pair: `start_date` and `end_date`, or `start` and `end`.
The dates work with every granularity and cover whole days:
`start_date=2026-10-18` and `end_date=2026-10-20` are three days, from 2026-10-18 00:00 to 2026-10-21 00:00 UTC.
`start` and `end` work only with `granularity=hour`, for a rolling window such as the last 24 hours.
Mixing the pairs, giving only half of one, or `start` and `end` with another granularity is rejected with `422`.

Without a filter, the counts cover all forwards of your organization.
`hostname` and `domain` need view access to the zone.
`breakdown=domain` cannot be combined with the `domain` filter.
`breakdown=url` needs the `domain` filter and cannot be combined with `hostname` or `protocol`.

### Choosing a granularity

Pick the bucket width that fits the window. These pairs give a readable chart:

| Time range | Window | Granularity | Buckets |
| --- | --- | --- | --- |
| Last day | `start` and `end`, 24 hours apart | `hour` | 24 or 25 |
| Last 7 days | `start_date` to `end_date`, 7 days | `day` | 7 |
| Last 30 days | `start_date` to `end_date`, 30 days | `day` | 30 |
| Last year | `start_date` to `end_date`, one year | `month` | 12 or 13 |

`hour` takes dates too: `start_date` and `end_date` on the same day give 24 buckets.

Each granularity has a longest window:

| Granularity | Longest window |
| --- | --- |
| `hour` | 31 days |
| `day` | 366 days |
| `week` | 366 days |
| `month` | 25 calendar months |

Days count both ends: 2026-10-01 to 2026-10-31 is 31 days.
With `start` and `end`, `end` may be at most 31 days after `start`.
Months count from the month of `start_date` to the month of `end_date`, both included.
A longer window is rejected with `422`.

Buckets start on the hour or the day, in UTC.
Weeks start on Monday and months on the 1st.
A window of dates always covers whole days.
With `start` and `end`, hourly counts are read in whole hours, so a time of day
inside an hour does not cut that hour.
The exceptions are the `hostname` and `protocol` filters: they read the raw log,
which honours the exact window.

Example: the last 30 days, one bucket per day, HTTPS only, without bots:

```bash
curl --get "$OPUSDNS_API_BASE/v1/domain-forwards/statistics" \
  --header "X-Api-Key: $OPUSDNS_API_KEY" \
  --data-urlencode "start_date=2026-10-04" \
  --data-urlencode "end_date=2026-11-02" \
  --data-urlencode "granularity=day" \
  --data-urlencode "protocol=https" \
  --data-urlencode "exclude_bots=true"
```

Example: the last 24 hours, one bucket per hour:

```bash
curl --get "$OPUSDNS_API_BASE/v1/domain-forwards/statistics" \
  --header "X-Api-Key: $OPUSDNS_API_KEY" \
  --data-urlencode "start=2026-10-19T14:00:00Z" \
  --data-urlencode "end=2026-10-20T14:00:00Z" \
  --data-urlencode "granularity=hour"
```

```json
{
  "start_date": "2026-10-19",
  "end_date": "2026-10-20",
  "start": "2026-10-19T14:00:00Z",
  "end": "2026-10-20T14:00:00Z",
  "granularity": "hour"
}
```

The response also carries `totals`, 24 `buckets` and the other fields, as above.
For a window of instants, `start_date` is the day `start` falls in and `end_date` the day of the window's last instant.
An `end` at midnight does not reach into the next day.

### Partial buckets

A bucket with `partial` set to `true` does not cover its whole span. This happens when:

- your window cuts the bucket,
- the bucket begins before `data_available_from`, or
- the bucket reaches `data_available_to`, the latest redirect OpusDNS has
  counted, so it is still filling.

A bucket without any data is partial too.
Do not read a partial bucket as a rise or fall against its neighbours.

`data_available_from` is the earliest instant the data holds.
A window that reaches further back is empty before it, which is not the same as zero redirects.
Both fields are `null` when there is no data.

### Breakdowns

Set `breakdown` to add a top list.
The list holds at most `breakdown_limit` items, most redirects first:

```bash
curl --get "$OPUSDNS_API_BASE/v1/domain-forwards/statistics" \
  --header "X-Api-Key: $OPUSDNS_API_KEY" \
  --data-urlencode "start_date=2026-10-18" \
  --data-urlencode "end_date=2026-10-20" \
  --data-urlencode "breakdown=country" \
  --data-urlencode "breakdown_limit=3"
```

```json
{
  "breakdown": {
    "dimension": "country",
    "approximate": false,
    "items": [
      { "value": "DE", "total_visits": 30100, "unique_visits": 8200 },
      { "value": "US", "total_visits": 9800, "unique_visits": 3100 },
      { "value": "", "total_visits": 410, "unique_visits": 130 }
    ]
  }
}
```

The response also carries `start_date`, `end_date`, `start`, `end`, `granularity`, `totals` and `buckets`, as above.

| Dimension | `value` |
| --- | --- |
| `browser` | Browser name, e.g. `Chrome`, `Safari`, `Firefox`. |
| `platform` | Operating system or device, e.g. `Windows`, `MacOS`, `iOS`, `Bot`. |
| `country` | ISO 3166-1 alpha-2 country code. An empty string means the country is unknown. |
| `status_code` | The redirect code configured on the rule, as a string, e.g. `301`. |
| `user_agent` | The raw user agent string. |
| `referrer` | The referring site. `direct` when the request had no referrer. |
| `url` | Host and path of the redirected request, without query string, e.g. `www.example.com/shop`. Needs a `domain` filter. |
| `fqdn` | A fully-qualified domain name. |
| `domain` | A root domain. |
| `forward` | A forward configuration. |
| `rule` | A redirect rule. |

Country data is derived from IP addresses.
This product includes GeoLite2 data created by MaxMind, available from
[https://www.maxmind.com](https://www.maxmind.com).

For `user_agent`, `referrer`, `fqdn`, `domain`, `forward` and `rule`, a
window of more than one day is answered from per-day top lists.
The counts are sums of those lists, and a value that never made a day's top
list is missing or undercounted.
`approximate` is `true` in that case.
It is always `false` for `browser`, `platform`, `country` and `status_code`,
and for any query filtered by `hostname` or `protocol`.
`url` is always built from daily top lists (see below), so it is approximate as soon as those lists are read.

### URL breakdown

OpusDNS does not keep full request paths.
For each domain and day it keeps only the top 5 values of host and path, and only values with at least 3 hits that day.
These lists are kept for 13 months.

`breakdown=url` reads them, which has these consequences:

- It needs a `domain` filter. Without one the request is rejected with `422`.
  There is no list of URLs across all domains of an organization.
- It cannot be combined with `hostname` or `protocol` (`422`), because paths are not stored per request.
- Over more than one day the list is an approximation: the sum of the daily top 5 lists.
  A path that never made a day's list is missing, and the counts of the others can be too low.
  Rare paths (fewer than 3 hits a day) never appear.
- The value is host and path only (`www.example.com/shop`). The query string is not kept.

### Deleted and transferred forwards

Every redirect counts for the organization that owned the forward when the redirect happened.
If a forward or domain is deleted, or moved to another organization, its past traffic stays in the totals, time series and organization-wide breakdowns (`domain`, `fqdn`, `forward`, `rule`) of the former owner until retention ends.
The new owner sees only the traffic from the time it owns the forward.
The `domain` and `hostname` filters work only for zones you currently have.
`invoked_forwards` counts forwards with traffic in the window, including deleted ones, so it can exceed `configured_forwards`.

### Estimates

`unique_visits` and `invoked_forwards` are estimates, counted with a
HyperLogLog sketch.
A unique visit is a distinct client IP address. OpusDNS stores it only as a keyed hash.

OpusDNS merges the sketches over the whole window instead of adding up the
buckets.
The unique visits of the buckets therefore do not add up to the total.

`total_visits` is exact.

### How `invoked_forwards` differs from the metrics route

`invoked_forwards` counts the distinct forwards that served at least one
redirect in the window.
A forward is identified by its source hostname, such as `www.example.com` or
`*.example.com`.
The `/v1/domain-forwards/metrics` route counted distinct pairs of domain and path.
The two numbers are not comparable.

`configured_forwards` is the number of redirect rules configured now.
It does not depend on the window.
It counts rules, not forwards, and leaves out deleted forwards, so it is no upper bound for `invoked_forwards`.

### Limits and retention

| What | Limit |
| --- | --- |
| `hostname` and `protocol` filters | The window must start within the last 35 days. An earlier start is rejected with `400`. |
| `hour` granularity | The window must start within the last 35 days. An earlier start is rejected with `400`. |
| `day`, `week` and `month` granularity | The window must start within the last 25 months. An earlier start is rejected with `400`. |
| Breakdowns by `browser`, `platform`, `country` and `status_code` | 13 months. |
| Breakdowns by `user_agent`, `referrer`, `fqdn`, `domain`, `forward` and `rule` | 13 months. Approximate over more than one day. With a `domain` filter, the window must start within the last 35 days (`400` otherwise). |
| Breakdown by `url` | 13 months. Needs a `domain` filter. Top 5 per domain and day, at least 3 hits that day. Approximate. |

A breakdown over a window that reaches back further than its retention counts what is kept.
`data_available_from` says where the data begins.

Other errors:

| Status | When |
| --- | --- |
| `400` | The window starts further back than the data is kept (see the limits above), or your organization has more than 1000 organizations in its sub-tree and `include_sub_organizations` is `true`. The `detail` names the parameter you sent, `start_date` or `start`. |
| `403` | You lack permission to view your organization's domain forwards, or view access to the zone of `hostname` or `domain`. |
| `404` | OpusDNS has no zone for `hostname` or `domain`. |
| `422` | The query is invalid: no window, only half of a pair, both pairs, `start` and `end` with a granularity other than `hour`, `end_date` before `start_date` or `end` not after `start`, a window longer than the granularity allows or outside 1970-01-01 to 2099-12-31, `hostname` and `domain` both set, `breakdown=domain` together with the `domain` filter, or `breakdown=url` without `domain` or together with `hostname` or `protocol`. |
| `501` | Statistics are not available in this environment. |
| `503` | Statistics are temporarily unavailable. Try again later. |

### Migrating from /v1/domain-forwards/metrics

Each metrics route maps to one call of the statistics route.
The metrics routes take a relative `time_range`.
Statistics takes an absolute window: `start_date` and `end_date`, or, with `granularity=hour`, `start` and `end`.

| Metrics route | Statistics parameters | Read from the response |
| --- | --- | --- |
| `/metrics` | none beyond the window | `totals` |
| `/metrics/time-series` | `granularity` | `buckets` |
| `/metrics/browser` | `breakdown=browser` | `breakdown.items` |
| `/metrics/platform` | `breakdown=platform` | `breakdown.items` |
| `/metrics/user-agent` | `breakdown=user_agent` | `breakdown.items` |
| `/metrics/referrer` | `breakdown=referrer` | `breakdown.items` |
| `/metrics/geo` | `breakdown=country` | `breakdown.items` |
| `/metrics/status-code` | `breakdown=status_code` | `breakdown.items` |
| `/metrics/visits-by-key?grouping=…` | `breakdown=fqdn`, `domain`, `forward` or `rule` | `breakdown.items` |
| `/metrics/visits-by-key?grouping=url` | `breakdown=url&domain=...`, with the [top 5 limitation](#url-breakdown) | `breakdown.items` |

The filters carry over under the same names: `hostname`, `domain`, `protocol` and `exclude_bots`.
`time_range` becomes a window:

| `time_range` | Window | Closest `granularity` |
| --- | --- | --- |
| `1h` | `start` one hour before `end` | `hour` |
| `1d` | `start` 24 hours before `end` | `hour` |
| `7d` | `start_date` to `end_date`, 7 days | `day` |
| `30d` | `start_date` to `end_date`, 30 days | `day` |
| `1y` | `start_date` to `end_date`, one year | `month` |

Statistics has no `minute` granularity, so `1h` has no per-minute equivalent.
Use `granularity=hour` with `start` one hour before `end`: you get one or two hourly buckets.
A time of day inside an hour does not cut that hour (see [Choosing a granularity](#choosing-a-granularity)).

`url` has no full replacement.
Per domain, `breakdown=url&domain=example.com` returns the top 5 paths per day with at least 3 hits.
Without a domain there is no replacement for the organization-wide URL list of `visits-by-key`: statistics does not offer one.

Three things differ:

- **Response shape.** The metrics routes answered `results`, a list of
  entries with `key`, `total` and `unique`, and `timestamp` and `total` for the
  time series.
  Statistics answers `buckets` with `period_start`, `period_end`, `total_visits`
  and `unique_visits`, and `breakdown.items` with `value`, `total_visits` and
  `unique_visits`.
  The referrer, geo and status code routes had no unique count.
  `/metrics` answered `total_visits`, `unique_visits`, `invoked_forwards` and
  `configured_forwards` at the top level; they are now under `totals`.
- **`invoked_forwards`.** See [above](#how-invoked_forwards-differs-from-the-metrics-route).
- **`exclude_bots`.** Statistics also leaves out crawlers named by their user agent, whatever platform they report.
  The metrics routes go by platform only.
  Redirects stored before November 2026 are left out by platform only on both.

## Movers

[`GET /v1/domain-forwards/statistics/movers`](/api-reference#tag/domain-forward/GET/v1/domain-forwards/statistics/movers)
lists the domains of your organization whose redirects dropped or rose most.
It compares the last 7 or 30 days that are over with the same number of days before them.

A sharp drop often means the domain no longer points at the OpusDNS redirect servers.
A sharp rise can be a campaign or a misconfigured redirect loop.

```bash
curl --get "$OPUSDNS_API_BASE/v1/domain-forwards/statistics/movers" \
  --header "X-Api-Key: $OPUSDNS_API_KEY" \
  --data-urlencode "period=30d" \
  --data-urlencode "direction=drop" \
  --data-urlencode "limit=2"
```

```json
{
  "period": "30d",
  "period_start": "2026-10-07",
  "period_end": "2026-11-05",
  "previous_period_start": "2026-09-07",
  "previous_period_end": "2026-10-06",
  "direction": "drop",
  "results": [
    {
      "domain": "moved-away.example",
      "organization_id": "organization_01h45ytscbebyvny4gc8cr8ma2",
      "total_visits": 120,
      "previous_total_visits": 9800,
      "change": -9680,
      "change_ratio": -0.98776
    },
    {
      "domain": "shop.example",
      "organization_id": "organization_01h45ytscbebyvny4gc8cr8ma2",
      "total_visits": 4100,
      "previous_total_visits": 6900,
      "change": -2800,
      "change_ratio": -0.4058
    }
  ],
  "data_available_from": "2026-08-01T00:00:00Z",
  "data_available_to": "2026-11-06T13:41:07Z",
  "complete": true
}
```

The route takes these parameters, and no window and no `hostname`, `domain` or `protocol` filter:

| Parameter | Description |
| --- | --- |
| `period` | `7d` or `30d` (default). The period is compared with the period of the same length before it. |
| `direction` | `drop` (default) lists the domains that lost the most redirects, `rise` the domains that gained the most. |
| `limit` | How many domains to list, from 1 to 100. Default `20`. |
| `min_visits` | Leaves out domains with fewer total visits (redirects) than this in both periods. `0` or more. Default `100`. |
| `exclude_bots` | Set to `true` to leave out bots, as on [statistics](#parameters). |
| `include_sub_organizations` | Set to `true` to include the forwards of your sub-organizations. By default only your own organization is counted. |

Both periods are whole days in UTC.
`period_end` is the newest complete day with data, at most yesterday, so the running day never counts.

| Field | Description |
| --- | --- |
| `period`, `direction` | As you asked. |
| `period_start`, `period_end` | First and last day of the period. |
| `previous_period_start`, `previous_period_end` | First and last day of the period it is compared with. |
| `results` | The domains with the largest drop or rise, ranked by `change` (the difference in total visits, not `change_ratio`), largest first, at most `limit`. An empty list when no domain qualifies. |
| `domain` | The domain whose forwards served the redirects, without a trailing dot. |
| `organization_id` | The organization the redirects were counted for. |
| `total_visits` | Redirects served in the period. |
| `previous_total_visits` | Redirects served in the previous period. |
| `change` | `total_visits` minus `previous_total_visits`. |
| `change_ratio` | `change` divided by `previous_total_visits`, e.g. `-0.5` when the redirects halved. `null` when the previous period had no redirects. |
| `data_available_from` | Earliest instant the data holds. `null` when there is no data. |
| `data_available_to` | Time of the latest counted redirect. `null` when there is no data. |
| `complete` | `false` while the previous period begins before `data_available_from`. Its counts are then too low, and a rise may only be the data catching up. `true` when data covers both periods. |

Redirects count for the organization that owned the forward at the time, as on statistics
(see [Deleted and transferred forwards](#deleted-and-transferred-forwards)).

Errors:

| Status | When |
| --- | --- |
| `400` | Your organization has more than 1000 organizations in its sub-tree and `include_sub_organizations` is `true`, or the query was refused. The `detail` says why. |
| `403` | You lack permission to view your organization's domain forwards. |
| `422` | A parameter is invalid: an unknown `period` or `direction`, `limit` outside 1 to 100, or a negative `min_visits`. |
| `501` | Statistics are not available in this environment. |
| `503` | Statistics are temporarily unavailable. Try again later. |

## Metrics routes

These routes return one view per call.
They stay available.

## Overview metrics

Get a high-level summary of all your domain forwards:

```bash
curl "$OPUSDNS_API_BASE/v1/domain-forwards/metrics" \
  --header "X-Api-Key: $OPUSDNS_API_KEY"
```

```json
{
  "configured_forwards": 12,
  "invoked_forwards": 8,
  "total_visits": 45230,
  "unique_visits": 31450
}
```

| Field | Description |
| --- | --- |
| `configured_forwards` | Total number of domain forwards set up in your account. |
| `invoked_forwards` | How many forwards actually received traffic. |
| `total_visits` | Total redirect count (includes repeat visitors). |
| `unique_visits` | Unique visitor count (deduplicated). |

## Filtering

All metrics routes accept the same filter parameters:

| Parameter | Description |
| --- | --- |
| `hostname` | Filter to a specific source hostname (e.g., `example.com`). |
| `domain` | Filter by domain. |
| `protocol` | Filter by protocol: `http` or `https`. |
| `time_range` | Time window: `1h`, `1d`, `7d`, `30d`, or `1y`. |
| `exclude_bots` | Set to `true` to exclude bot and unknown traffic. |

Example — last 7 days of HTTPS traffic for a specific domain, excluding bots:

```bash
curl --get "$OPUSDNS_API_BASE/v1/domain-forwards/metrics" \
  --header "X-Api-Key: $OPUSDNS_API_KEY" \
  --data-urlencode "hostname=example.com" \
  --data-urlencode "protocol=https" \
  --data-urlencode "time_range=7d" \
  --data-urlencode "exclude_bots=true"
```

## Traffic over time

See how redirect traffic changes over time, bucketed by hourly or daily
intervals depending on the time range:

```bash
curl --get "$OPUSDNS_API_BASE/v1/domain-forwards/metrics/time-series" \
  --header "X-Api-Key: $OPUSDNS_API_KEY" \
  --data-urlencode "time_range=7d"
```

Use this to spot traffic spikes, detect unusual patterns, or verify that a
newly configured forward is receiving traffic.

## Visitor breakdowns

### By browser

See which browsers your visitors use:

```bash
curl --get "$OPUSDNS_API_BASE/v1/domain-forwards/metrics/browser" \
  --header "X-Api-Key: $OPUSDNS_API_KEY" \
  --data-urlencode "time_range=30d"
```

Returns traffic counts for Chrome, Safari, Firefox, Edge, and others.

### By platform

Understand which operating systems and devices are being used:

```bash
curl --get "$OPUSDNS_API_BASE/v1/domain-forwards/metrics/platform" \
  --header "X-Api-Key: $OPUSDNS_API_KEY" \
  --data-urlencode "time_range=30d"
```

Returns breakdowns for Windows, macOS, iOS, Android, Linux, and others.

### By geographic location

See where your redirect traffic originates from:

```bash
curl --get "$OPUSDNS_API_BASE/v1/domain-forwards/metrics/geo" \
  --header "X-Api-Key: $OPUSDNS_API_KEY" \
  --data-urlencode "time_range=30d"
```

Returns visit counts grouped by country code.

### By referrer

Discover where your visitors are coming from:

```bash
curl --get "$OPUSDNS_API_BASE/v1/domain-forwards/metrics/referrer" \
  --header "X-Api-Key: $OPUSDNS_API_KEY" \
  --data-urlencode "time_range=30d"
```

Useful for understanding which external sites link to your redirected domains.

### By user agent

Get the raw user agent strings for detailed traffic analysis:

```bash
curl --get "$OPUSDNS_API_BASE/v1/domain-forwards/metrics/user-agent" \
  --header "X-Api-Key: $OPUSDNS_API_KEY" \
  --data-urlencode "time_range=7d" \
  --data-urlencode "exclude_bots=true"
```

## Redirect status codes

See the distribution of HTTP redirect codes being served:

```bash
curl --get "$OPUSDNS_API_BASE/v1/domain-forwards/metrics/status-code" \
  --header "X-Api-Key: $OPUSDNS_API_KEY" \
  --data-urlencode "time_range=30d"
```

This shows how many redirects used 301, 302, 307, or 308 status codes. If
you see unexpected codes, check your forward set configuration.

## Visits grouped by key

Aggregate visit metrics by different dimensions:

```bash
curl --get "$OPUSDNS_API_BASE/v1/domain-forwards/metrics/visits-by-key" \
  --header "X-Api-Key: $OPUSDNS_API_KEY" \
  --data-urlencode "grouping=domain" \
  --data-urlencode "time_range=30d"
```

| Grouping | What it shows |
| --- | --- |
| `url` | Visits per individual redirect URL. |
| `fqdn` | Visits per fully-qualified domain name. |
| `domain` | Visits aggregated by root domain. |
| `forward` | Visits per forward configuration. |

This is useful for identifying which of your domain forwards receives the
most traffic, or which specific redirect URLs are most popular.

## Related API Reference

- [`GET /v1/domain-forwards/statistics`](/api-reference#tag/domain-forward/GET/v1/domain-forwards/statistics)
- [`GET /v1/domain-forwards/statistics/movers`](/api-reference#tag/domain-forward/GET/v1/domain-forwards/statistics/movers)
- [`GET /v1/domain-forwards/metrics`](/api-reference#tag/domain-forward/GET/v1/domain-forwards/metrics)
- [`GET /v1/domain-forwards/metrics/time-series`](/api-reference#tag/domain-forward/GET/v1/domain-forwards/metrics/time-series)
- [`GET /v1/domain-forwards/metrics/browser`](/api-reference#tag/domain-forward/GET/v1/domain-forwards/metrics/browser)
- [`GET /v1/domain-forwards/metrics/geo`](/api-reference#tag/domain-forward/GET/v1/domain-forwards/metrics/geo)
- [`GET /v1/domain-forwards/metrics/visits-by-key`](/api-reference#tag/domain-forward/GET/v1/domain-forwards/metrics/visits-by-key)
