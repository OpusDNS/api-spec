# Domain forwarding metrics

OpusDNS tracks every redirect that passes through your domain forwards,
giving you visibility into traffic patterns, visitor demographics, and
redirect performance.

Two sets of routes serve this data:

- [`GET /v1/domain-forwards/statistics`](/api-reference#tag/domain-forward/GET/v1/domain-forwards/statistics)
  returns totals, a time series and an optional top list in one call.
  [`GET /v1/domain-forwards/statistics/movers`](/api-reference#tag/domain-forward/GET/v1/domain-forwards/statistics/movers)
  lists the domains whose redirects dropped or rose most.
- The [`/v1/domain-forwards/metrics` routes](#metrics-routes) return one view per call.
  They will be deprecated in favor of the statistics route.

## Statistics

For a window you choose, one call returns:

- `totals`: the redirects served in the window, the unique visits, and the
  forwards that were invoked and configured.
- `buckets`: the redirects and unique visits per hour, day, week or month, oldest first.
  Every bucket of the window is present, also one without redirects.
- `breakdown`: a top list of the redirects grouped by one dimension, if you ask for one.

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
      "period_start": "2026-10-18",
      "period_end": "2026-10-18",
      "start": "2026-10-18T00:00:00Z",
      "end": "2026-10-19T00:00:00Z",
      "covered_from": "2026-10-18",
      "covered_to": "2026-10-18",
      "total_visits": 15100,
      "unique_visits": 6020,
      "partial": false
    },
    {
      "period_start": "2026-10-19",
      "period_end": "2026-10-19",
      "start": "2026-10-19T00:00:00Z",
      "end": "2026-10-20T00:00:00Z",
      "covered_from": "2026-10-19",
      "covered_to": "2026-10-19",
      "total_visits": 21400,
      "unique_visits": 7310,
      "partial": false
    },
    {
      "period_start": "2026-10-20",
      "period_end": "2026-10-20",
      "start": "2026-10-20T00:00:00Z",
      "end": "2026-10-21T00:00:00Z",
      "covered_from": "2026-10-20",
      "covered_to": "2026-10-20",
      "total_visits": 15800,
      "unique_visits": 6480,
      "partial": true
    }
  ],
  "breakdown": [],
  "breakdown_approximate": false,
  "data_available_from": "2026-09-01T00:00:00Z",
  "data_available_to": "2026-10-20T13:41:07Z"
}
```

The window and each bucket are given as days and as instants:

| Fields | Meaning |
| --- | --- |
| `start_date`, `end_date` | First and last day of the window, both inclusive. |
| `start`, `end` | The window as instants. `start` is inclusive, `end` exclusive. |
| `period_start`, `period_end` | First and last day of a bucket, both inclusive. An hourly bucket holds the day of its hour in both. |
| `start`, `end` (in a bucket) | The bucket as instants. `end` is exclusive and equals the `start` of the next bucket. |
| `covered_from`, `covered_to` | The days the bucket's counts include. See [Partial buckets and buckets without data](#partial-buckets-and-buckets-without-data). |

To tell hourly buckets apart, use their `start` and `end`.

### Parameters

| Parameter | Description |
| --- | --- |
| `start_date` | First day of the window, inclusive. `YYYY-MM-DD`, in UTC. |
| `end_date` | Last day of the window, inclusive. Same format. |
| `start` | Start of the window as an instant, inclusive. RFC 3339; a value without an offset is read as UTC. Only with `granularity=hour`, instead of `start_date` and `end_date`. |
| `end` | End of the window as an instant, exclusive. Same format. Only with `granularity=hour`. |
| `granularity` | Bucket width: `hour`, `day` (default), `week` or `month`. |
| `hostname` | Count one forward, matched exactly (e.g., `www.example.com`). Cannot be combined with `domain`. |
| `domain` | Count a domain and all its subdomains. Cannot be combined with `hostname`. |
| `protocol` | Count only redirects requested over `http` or `https`. |
| `exclude_bots` | Set to `true` to leave out bots: redirects whose platform is `Bot` or `Unknown`, and crawlers named by their user agent (Googlebot, Applebot, Meta's crawlers and others), whatever platform they report. For redirects stored before November 2026, only the platform is checked. |
| `include_sub_organizations` | Set to `true` to count the forwards of your sub-organizations too. By default only your own organization is counted. |
| `breakdown` | Adds a top list grouped by `browser`, `platform`, `country`, `status_code`, `user_agent`, `referrer`, `url`, `fqdn`, `domain`, `forward` or `rule`. Default `none`: no top list. `breakdown=domain` cannot be combined with the `domain` filter. For `url`, see [URL breakdown](#url-breakdown). |
| `breakdown_limit` | How many rows the top list holds, from 1 to 100. Default `10`. |

Give exactly one pair, `start_date` and `end_date` or `start` and `end`:

- Dates work with every granularity and cover whole days.
  `start_date=2026-10-18` and `end_date=2026-10-20` are three days, from 2026-10-18 00:00 to 2026-10-21 00:00 UTC.
- Instants work only with `granularity=hour`, for a rolling window such as the last 24 hours.

Mixing the pairs, giving only half of one, or giving instants with another granularity is rejected with `422`.

Without a filter, the counts cover all forwards of your organization.
`hostname` and `domain` need view access to the zone.

### Choosing a granularity

These combinations give a readable chart:

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

Buckets start on the hour or on the day, in UTC.
Weeks start on Monday and months on the 1st.
With `start` and `end`, hourly counts are read in whole hours: a `start` of 14:20 still counts the hour from 14:00 in full.
With `hostname` or `protocol`, the counts follow the exact instants instead.

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

The response also holds `totals`, 24 `buckets` and the other fields shown above.
For a window of instants, `start_date` is the day of `start`, and `end_date` the day of the window's last instant.
An `end` at midnight does not reach into the next day.

### Partial buckets and buckets without data

A bucket counts the days it shares with your window and with the data, which
runs from `data_available_from` to `data_available_to`.
`covered_from` and `covered_to` are the first and last of those days.

`partial` is `true` when a bucket does not count its whole span:

- your window cuts the bucket,
- the bucket begins before `data_available_from`, or
- the bucket reaches `data_available_to` and is still filling.

Do not compare a partial bucket with its neighbours: a lower count may only mean that it is incomplete.

A bucket that shares no time with the data has no counts.
Its `total_visits`, `unique_visits`, `covered_from` and `covered_to` are `null`, and `partial` is `true`.
`null` means that there is no data. `0` means that there were no redirects.
When no bucket has data, `total_visits`, `unique_visits` and `invoked_forwards` in `totals` are `null` too.
`configured_forwards` is always a number, because it counts the rules configured now.

| Field | Meaning |
| --- | --- |
| `data_available_from` | Earliest instant the data holds: the start of retention or the first counted redirect, whichever is later. `null` when there is no data. |
| `data_available_to` | Time of the latest counted redirect. `null` when there is no data. |

### Breakdowns

Set `breakdown` to a dimension to add a top list.
`breakdown` then holds up to `breakdown_limit` rows, most redirects first.
Without a breakdown, it is an empty list.

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
  "breakdown": [
    { "key": "DE", "total_visits": 30100, "unique_visits": 8200 },
    { "key": "US", "total_visits": 9800, "unique_visits": 3100 },
    { "key": "", "total_visits": 410, "unique_visits": 130 }
  ],
  "breakdown_approximate": false
}
```

The response also holds `start_date`, `end_date`, `start`, `end`, `granularity`, `totals` and `buckets`, as shown above.

| Dimension | `key` |
| --- | --- |
| `browser` | Browser name, e.g. `Chrome`, `Safari`, `Firefox`. |
| `platform` | Operating system or device, e.g. `Windows`, `MacOS`, `iOS`, `Bot`. |
| `country` | ISO 3166-1 alpha-2 country code. An empty string means the country is unknown. |
| `status_code` | The redirect code configured on the rule, as a string, e.g. `301`. |
| `user_agent` | The user agent string, as the visitor sent it. |
| `referrer` | The referring site. `direct` when the request had no referrer. |
| `url` | Host and path of the redirected request, without query string, e.g. `www.example.com/shop`. Needs a `domain` filter. |
| `fqdn` | The host name the visitor requested, e.g. `www.example.com`. |
| `domain` | The domain without subdomains, e.g. `example.com`. |
| `forward` | The source hostname of the forward that served the redirect, e.g. `www.example.com`, or `*.example.com` for a wildcard forward. |
| `rule` | The source of the redirect rule that served the redirect: hostname and path, e.g. `www.example.com/blog`. |

Country data is derived from IP addresses.
This product includes GeoLite2 data created by MaxMind, available from
[https://www.maxmind.com](https://www.maxmind.com).

`breakdown_approximate` is `true` when the list may miss values or count them too low:

- `user_agent`, `referrer`, `fqdn`, `domain`, `forward` and `rule` have very many distinct values.
  For them OpusDNS keeps daily top lists, and days that are over are usually read from those lists.
  A value that did not make a day's list is missing for that day.
  The current day, and queries with a `hostname`, `domain` or `protocol` filter, are counted from all requests.
- `url` is built from daily top 5 lists (see [URL breakdown](#url-breakdown)).
  `breakdown_approximate` is `true` as soon as the window includes a day that is over.

`browser`, `platform`, `country` and `status_code` are counted exactly.
Rarely, a query has more distinct values than OpusDNS can rank at once.
OpusDNS then leaves out the rest and sets `breakdown_approximate` to `true` as well.

### URL breakdown

OpusDNS keeps request paths for 13 months only as daily top lists:
per domain and day, the 5 values of host and path with the most hits, each with at least 3 hits that day.
Query strings are not kept.

For `breakdown=url`, this means:

- It needs a `domain` filter. Without one the request is rejected with `422`.
  There is no list of URLs across all domains of an organization.
- It cannot be combined with `hostname` or `protocol` (`422`).
- Over several days, the list is the sum of the daily top 5 lists.
  A path that did not make a day's list is missing for that day, so counts can be too low.
  Paths with fewer than 3 hits a day never appear.
- The `key` is host and path only, e.g. `www.example.com/shop`.

### Deleted and transferred forwards

Every redirect counts for the organization that owned the forward when the redirect happened.
If a forward or domain is deleted, or moved to another organization, its past traffic stays with the former owner until retention ends.
It stays in that owner's totals, buckets and organization-wide breakdowns (`domain`, `fqdn`, `forward`, `rule`).
The new owner sees only the traffic from the time it owns the forward.
The `domain` and `hostname` filters work only for zones you currently have.

### Estimates

`unique_visits` and `invoked_forwards` are estimates, counted with HyperLogLog.
A unique visit is a distinct client IP address. OpusDNS stores only a keyed hash of it.

Unique visits are counted over the whole window, not added up from the buckets.
A visitor who came on two days counts once in `totals` and once in each of the two day buckets.
The unique visits of the buckets therefore do not add up to the total.

`total_visits` is exact.

### Invoked and configured forwards

`invoked_forwards` counts the distinct forwards that served at least one redirect in the window.
A forward is identified by its source hostname, such as `www.example.com` or `*.example.com`.
Forwards that were deleted or moved to another organization since then count too.

`configured_forwards` counts the redirect rules configured now, whatever the window.
It counts rules, not forwards, and leaves out deleted forwards.
`invoked_forwards` can therefore be higher than `configured_forwards`.

The `/v1/domain-forwards/metrics` route counts distinct pairs of domain and path as `invoked_forwards`.
Its number and the one of the statistics route are not comparable.

### Limits and retention

| What | Limit |
| --- | --- |
| `hour` granularity | The window must start within the last 35 days. |
| `day`, `week` and `month` granularity | The window must start within the last 25 months. |
| `hostname` and `protocol` filters | The window must start within the last 35 days. |
| Breakdowns | Kept for 13 months. Over a window that starts earlier, the top list counts only the last 13 months, while `buckets` and `totals` reach further back. |
| Breakdowns by `user_agent`, `referrer`, `fqdn`, `domain`, `forward` and `rule` with a `domain` filter | The window must start within the last 35 days. |

A window that starts earlier than its limit allows is rejected with `400`.

### Errors

| Status | When |
| --- | --- |
| `400` | The window starts earlier than the limits above allow. The `detail` names the parameter you sent, `start_date` or `start`. Also when `include_sub_organizations` is `true` and your organization has more than 1000 organizations in its sub-tree. |
| `403` | You lack permission to view your organization's domain forwards, or view access to the zone of `hostname` or `domain`. |
| `404` | OpusDNS has no zone for `hostname` or `domain`. |
| `422` | The query is invalid: no window, only half of a pair, both pairs, instants with a granularity other than `hour`, `end_date` before `start_date` or `end` not after `start`, a window longer than the granularity allows or outside 1970-01-01 to 2099-12-31, `hostname` and `domain` both set, `breakdown=domain` together with the `domain` filter, or `breakdown=url` without `domain` or together with `hostname` or `protocol`. |
| `501` | Statistics are not available in this environment. |
| `503` | Statistics are temporarily unavailable. Try again later. |

### Migrating from /v1/domain-forwards/metrics

Each metrics route maps to one call of the statistics route.
The metrics routes take a relative `time_range`.
The statistics route takes an absolute window: `start_date` and `end_date`, or, with `granularity=hour`, `start` and `end`.

| Metrics route | Statistics parameters | Read from the response |
| --- | --- | --- |
| `/metrics` | none beyond the window | `totals` |
| `/metrics/time-series` | `granularity` | `buckets` |
| `/metrics/browser` | `breakdown=browser` | `breakdown` |
| `/metrics/platform` | `breakdown=platform` | `breakdown` |
| `/metrics/user-agent` | `breakdown=user_agent` | `breakdown` |
| `/metrics/referrer` | `breakdown=referrer` | `breakdown` |
| `/metrics/geo` | `breakdown=country` | `breakdown` |
| `/metrics/status-code` | `breakdown=status_code` | `breakdown` |
| `/metrics/visits-by-key?grouping=…` | `breakdown=fqdn`, `domain`, `forward` or `rule` | `breakdown` |
| `/metrics/visits-by-key?grouping=url` | `breakdown=url&domain=...`, with the [top 5 limitation](#url-breakdown) | `breakdown` |

The filters keep their names: `hostname`, `domain`, `protocol` and `exclude_bots`.
`time_range` becomes a window:

| `time_range` | Window | Closest `granularity` |
| --- | --- | --- |
| `1h` | `start` one hour before `end` | `hour` |
| `1d` | `start` 24 hours before `end` | `hour` |
| `7d` | `start_date` to `end_date`, 7 days | `day` |
| `30d` | `start_date` to `end_date`, 30 days | `day` |
| `1y` | `start_date` to `end_date`, one year | `month` |

The statistics route has no `minute` granularity.
For `1h`, use `granularity=hour` with `start` one hour before `end`: you get one or two hourly buckets.

There is no full replacement for `grouping=url`.
Per domain, `breakdown=url&domain=example.com` returns the daily top 5 paths with at least 3 hits.
There is no organization-wide list of URLs.

Three things differ:

- **Response shape.** The metrics routes answer `results`: entries with `key`, `total` and `unique`,
  and `timestamp` and `total` for the time series.
  The statistics route answers `buckets` with `total_visits` and `unique_visits` per bucket,
  and `breakdown` with `key`, `total_visits` and `unique_visits` per row.
  The referrer, geo and status code routes have no unique count; the statistics route has one for every dimension.
  `/metrics` answers `total_visits`, `unique_visits`, `invoked_forwards` and `configured_forwards` at the top level.
  The statistics route has them under `totals`.
- **`invoked_forwards`** counts something else. See [Invoked and configured forwards](#invoked-and-configured-forwards).
- **`exclude_bots`** also leaves out crawlers named by their user agent, whatever platform they report.
  The metrics routes check the platform only.
  For redirects stored before November 2026, both check the platform only.

## Movers

[`GET /v1/domain-forwards/statistics/movers`](/api-reference#tag/domain-forward/GET/v1/domain-forwards/statistics/movers)
lists the domains of your organization whose redirects dropped or rose most.
It compares the last 7 or 30 days that are over with the same number of days before them.

A sharp drop often means that the domain no longer points at the OpusDNS redirect servers.
A sharp rise can be a campaign or a redirect loop.

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

The route has no window and no `hostname`, `domain` or `protocol` filter. It takes these parameters:

| Parameter | Description |
| --- | --- |
| `period` | `7d` or `30d` (default). The period is compared with the period of the same length before it. |
| `direction` | `drop` (default) lists the domains that lost the most redirects, `rise` the domains that gained the most. |
| `limit` | How many domains to list, from 1 to 100. Default `20`. |
| `min_visits` | Leaves out domains with fewer redirects than this in both periods. `0` or more. Default `100`. |
| `exclude_bots` | Set to `true` to leave out bots, as on the [statistics route](#parameters). |
| `include_sub_organizations` | Set to `true` to include the forwards of your sub-organizations. By default only your own organization is counted. |

Both periods are whole days in UTC.
`period_end` is the newest complete day with data, at most yesterday: the current day never counts.

| Field | Description |
| --- | --- |
| `period`, `direction` | As requested. |
| `period_start`, `period_end` | First and last day of the period. |
| `previous_period_start`, `previous_period_end` | First and last day of the period it is compared with. |
| `results` | The domains with the largest drop or rise, largest first, at most `limit`. They are ranked by `change`, the difference in redirects, not by `change_ratio`. An empty list when no domain qualifies. |
| `domain` | The domain whose forwards served the redirects, without a trailing dot. |
| `organization_id` | The organization the redirects were counted for. |
| `total_visits` | Redirects served in the period. |
| `previous_total_visits` | Redirects served in the previous period. |
| `change` | `total_visits` minus `previous_total_visits`. |
| `change_ratio` | `change` divided by `previous_total_visits`, e.g. `-0.5` when the redirects halved. `null` when the previous period had no redirects. |
| `data_available_from` | Earliest instant the data holds. `null` when there is no data. |
| `data_available_to` | Time of the latest counted redirect. `null` when there is no data. |
| `complete` | `false` while the previous period begins before `data_available_from`. Its counts are then too low, and a rise may only be the data catching up. `true` when the data covers both periods. |

Redirects count for the organization that owned the forward at the time
(see [Deleted and transferred forwards](#deleted-and-transferred-forwards)).

Errors:

| Status | When |
| --- | --- |
| `400` | `include_sub_organizations` is `true` and your organization has more than 1000 organizations in its sub-tree, or the query was refused. The `detail` says why. |
| `403` | You lack permission to view your organization's domain forwards. |
| `422` | A parameter is invalid: an unknown `period` or `direction`, `limit` outside 1 to 100, or a negative `min_visits`. |
| `501` | Statistics are not available in this environment. |
| `503` | Statistics are temporarily unavailable. Try again later. |

## Metrics routes

These routes return one view per call.
They will be deprecated: use the [statistics route](#statistics) for new integrations.

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
