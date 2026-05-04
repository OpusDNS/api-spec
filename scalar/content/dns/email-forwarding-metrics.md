# Email forwarding metrics

OpusDNS tracks every email that passes through your forwarding configuration,
giving you visibility into delivery success rates, per-alias performance,
and detailed forwarding logs for troubleshooting.

## Delivery metrics

Get an overview of delivery performance for an email forward:

```bash
curl "$OPUSDNS_API_BASE/v1/email-forwards/email_forward_01h45ytscbebyvny4gc8cr8ma2/metrics" \
  --header "X-Api-Key: $OPUSDNS_API_KEY"
```

```json
{
  "total_logs": 1542,
  "alias_count": 3,
  "by_status": {
    "DELIVERED": 1480,
    "QUEUED": 12,
    "REFUSED": 8,
    "SOFT-BOUNCE": 30,
    "HARD-BOUNCE": 12
  },
  "rates": {
    "delivery_rate": 95.98,
    "queued_rate": 0.78,
    "refused_rate": 0.52,
    "bounce_rate": 2.72
  },
  "by_alias": [
    {
      "alias": "info",
      "total_logs": 820,
      "by_status": { "DELIVERED": 805, "SOFT-BOUNCE": 10, "HARD-BOUNCE": 5 }
    },
    {
      "alias": "support",
      "total_logs": 612,
      "by_status": { "DELIVERED": 590, "QUEUED": 12, "REFUSED": 5, "SOFT-BOUNCE": 5 }
    }
  ],
  "filters": {
    "domain": "example.com",
    "start_time": null,
    "end_time": null,
    "include_aliases": true
  }
}
```

### Response fields

| Field | Description |
| --- | --- |
| `total_logs` | Total number of forwarded emails tracked. |
| `alias_count` | Number of aliases configured on this forward. |
| `by_status` | Email counts grouped by delivery status. |
| `rates` | Percentage rates for each delivery outcome. |
| `by_alias` | Per-alias breakdown (only when `include_aliases=true`). |
| `filters` | The filter parameters that were applied. |

### Delivery statuses

| Status | What it means | Action |
| --- | --- | --- |
| `DELIVERED` | Email reached the destination mailbox. | None needed. |
| `QUEUED` | Email is queued and will be delivered shortly. | Wait — delivery is in progress. |
| `REFUSED` | Destination server rejected the email. | Check if the destination address accepts external mail. |
| `SOFT-BOUNCE` | Temporary failure — delivery will be retried. | Usually resolves on its own. Monitor for patterns. |
| `HARD-BOUNCE` | Permanent failure — the address is invalid. | Update the alias `forward_to` addresses. |

### Filtering by time

Narrow metrics to a specific time window:

```bash
curl --get "$OPUSDNS_API_BASE/v1/email-forwards/email_forward_01h45ytscbebyvny4gc8cr8ma2/metrics" \
  --header "X-Api-Key: $OPUSDNS_API_KEY" \
  --data-urlencode "start_time=2026-05-01T00:00:00Z" \
  --data-urlencode "end_time=2026-05-04T23:59:59Z"
```

## Interpreting your metrics

### Healthy forwarding

A healthy email forwarding setup typically shows:
- **Delivery rate above 95%**
- **Low bounce rate** (under 2%)
- **No hard bounces** — these indicate invalid destination addresses

<scalar-callout type="danger">
A high hard-bounce rate means one or more <code>forward_to</code> addresses are invalid. Update stale addresses immediately to maintain good email deliverability.
</scalar-callout>

### Common issues

**High hard-bounce rate** — one or more `forward_to` addresses are invalid.
Review your aliases and update any stale addresses:

```bash
curl "$OPUSDNS_API_BASE/v1/email-forwards/email_forward_01h45ytscbebyvny4gc8cr8ma2/aliases/email_forward_alias_01h45ytscbebyvny4gc8cr8ma2" \
  --request PUT \
  --header "X-Api-Key: $OPUSDNS_API_KEY" \
  --header "Content-Type: application/json" \
  --data '{ "forward_to": ["valid-address@company.com"] }'
```

**High refused rate** — the destination mail server is blocking forwarded
emails. This can happen if the destination has strict SPF/DMARC policies.
Contact your email provider to whitelist forwarded mail.

**Persistent soft-bounces** — the destination server has intermittent issues.
If soft-bounces for a specific alias persist over days, the destination
address may have become invalid.

## Forwarding logs

For detailed troubleshooting, inspect individual forwarding logs to see
exactly what happened with each email:

```bash
curl "$OPUSDNS_API_BASE/v1/archive/email-forward-logs/email_forward_01h45ytscbebyvny4gc8cr8ma2?page=1&page_size=25" \
  --header "X-Api-Key: $OPUSDNS_API_KEY"
```

Each log entry contains:

| Field | Description |
| --- | --- |
| `sender_email` | Who sent the original email. |
| `recipient_email` | The alias address that received it (e.g., `info@example.com`). |
| `forward_email` | Where it was forwarded to. |
| `subject` | The email subject line. |
| `final_status` | Delivery outcome (`DELIVERED`, `REFUSED`, etc.). |
| `events` | Processing events with timestamps and status codes. |
| `created_on` | When the email was received. |

### Filter logs by alias

To see logs for a specific alias only:

```bash
curl "$OPUSDNS_API_BASE/v1/archive/email-forward-logs/aliases/email_forward_alias_01h45ytscbebyvny4gc8cr8ma2?page=1&page_size=25" \
  --header "X-Api-Key: $OPUSDNS_API_KEY"
```

This is useful when one alias has delivery issues while others work fine.

## Related API Reference

- [`GET /v1/email-forwards/{email_forward_id}/metrics`](/api-reference#tag/email_forward/GET/v1/email-forwards/{email_forward_id}/metrics)
- [`GET /v1/archive/email-forward-logs/{email_forward_id}`](/api-reference#tag/archive/GET/v1/archive/email-forward-logs/{email_forward_id})
- [`GET /v1/archive/email-forward-logs/aliases/{email_forward_alias_id}`](/api-reference#tag/archive/GET/v1/archive/email-forward-logs/aliases/{email_forward_alias_id})
