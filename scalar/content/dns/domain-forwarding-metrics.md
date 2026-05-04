# Domain forwarding metrics

OpusDNS tracks every redirect that passes through your domain forwards,
giving you visibility into traffic patterns, visitor demographics, and
redirect performance.

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

All metrics endpoints accept the same filter parameters:

| Parameter | Description |
| --- | --- |
| `hostname` | Filter to a specific source hostname (e.g., `example.com`). |
| `domain` | Filter by domain. |
| `protocol` | Filter by protocol: `http` or `https`. |
| `time_range` | Time window: `1h`, `1d`, `7d`, or `30d`. |
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

- [`GET /v1/domain-forwards/metrics`](/api-reference#tag/domain_forward/GET/v1/domain-forwards/metrics)
- [`GET /v1/domain-forwards/metrics/time-series`](/api-reference#tag/domain_forward/GET/v1/domain-forwards/metrics/time-series)
- [`GET /v1/domain-forwards/metrics/browser`](/api-reference#tag/domain_forward/GET/v1/domain-forwards/metrics/browser)
- [`GET /v1/domain-forwards/metrics/geo`](/api-reference#tag/domain_forward/GET/v1/domain-forwards/metrics/geo)
- [`GET /v1/domain-forwards/metrics/visits-by-key`](/api-reference#tag/domain_forward/GET/v1/domain-forwards/metrics/visits-by-key)
