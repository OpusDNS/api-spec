# Events overview

The OpusDNS API uses a polling-based event system to notify you about changes
to your domains, contacts, and other resources. Events are created automatically
when operations complete, fail, or require your attention.

## How events work

1. Operations like domain registrations, transfers, or renewals generate events.
2. You poll `GET /v1/events` to retrieve pending events.
3. After processing an event, you acknowledge it with `PATCH /v1/events/{event_id}`.
4. Acknowledged events are no longer returned in pending queries.

## List events

Retrieve events for your organization:

```bash
curl "$OPUSDNS_API_BASE/v1/events?page=1&page_size=25" \
  --header "X-Api-Key: $OPUSDNS_API_KEY"
```

### Filter options

| Parameter | Description |
| --- | --- |
| `object_type` | Filter by resource type: `DOMAIN`, `CONTACT`, `HOST` |
| `object_id` | Filter by specific resource ID |
| `type` | Filter by event type (see [the event object](/products/events/event-object)) |
| `subtype` | Filter by subtype: `NOTIFICATION`, `SUCCESS`, `FAILURE`, `CANCELED` |
| `acknowledged` | Filter by acknowledgment status: `true` or `false` |
| `sort_by` | Sort field |
| `sort_order` | Sort direction: `asc` or `desc` |

Example — list only failed domain events:

```bash
curl --get "$OPUSDNS_API_BASE/v1/events" \
  --header "X-Api-Key: $OPUSDNS_API_KEY" \
  --data-urlencode "object_type=DOMAIN" \
  --data-urlencode "subtype=FAILURE" \
  --data-urlencode "acknowledged=false"
```

## Get a single event

Retrieve the full details of an event:

```bash
curl "$OPUSDNS_API_BASE/v1/events/event_01h45ytscbebyvny4gc8cr8ma2" \
  --header "X-Api-Key: $OPUSDNS_API_KEY"
```

## Acknowledge an event

Mark an event as processed:

```bash
curl "$OPUSDNS_API_BASE/v1/events/event_01h45ytscbebyvny4gc8cr8ma2" \
  --request PATCH \
  --header "X-Api-Key: $OPUSDNS_API_KEY"
```

Once acknowledged, the event's `acknowledged_on` timestamp is set and it is
excluded from default pending queries.

## Polling strategy

<scalar-callout type="info">
Events use a polling model — there are no webhooks. Poll regularly and acknowledge events promptly to keep your pending queue clean.
</scalar-callout>

Since the event system is poll-based, consider these best practices:

1. **Poll regularly** — check for new events on a schedule (e.g., every 30
   seconds to 5 minutes, depending on your needs).
2. **Filter by acknowledgment** — use `acknowledged=false` to only retrieve
   events you have not yet processed.
3. **Acknowledge promptly** — mark events as acknowledged after processing to
   keep your pending queue clean.
4. **Use pagination** — for high-volume accounts, page through results to
   avoid missing events.

## Related API Reference

- [`GET /v1/events`](/api-reference#tag/event/GET/v1/events)
- [`GET /v1/events/{event_id}`](/api-reference#tag/event/GET/v1/events/{event_id})
- [`PATCH /v1/events/{event_id}`](/api-reference#tag/event/PATCH/v1/events/{event_id})
