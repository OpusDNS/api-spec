# The event object

The event object represents a notification about an operation that occurred on
a resource in your OpusDNS account. Events are returned by `GET /v1/events` and
`GET /v1/events/{event_id}`.

## Example response

```json
{
  "event_id": "epp_event_01h45ytscbebyvny4gc8cr8ma2",
  "object_id": "dom_01h45ytscbebyvny4gc8cr8ma2",
  "object_type": "DOMAIN",
  "type": "REGISTRATION",
  "subtype": "SUCCESS",
  "event_data": {
    "version": "1",
    "messages": [
      {
        "status": "success",
        "operation": "DOMAIN_REGISTRATION",
        "message": "Domain example.com registered successfully"
      }
    ]
  },
  "created_on": "2026-01-15T10:30:00Z",
  "acknowledged_on": null
}
```

## Fields

| Field | Type | Description |
| --- | --- | --- |
| `event_id` | `string` | Unique identifier for the event (TypeID format, prefixed with `epp_event_`). |
| `object_id` | `string \| null` | The ID of the resource this event relates to (e.g., a domain ID or contact ID). |
| `object_type` | `string` | The type of resource. See [Object types](#object-types). |
| `type` | `string \| null` | The category of operation. See [Event types](#event-types). |
| `subtype` | `string \| null` | The outcome of the operation. See [Subtypes](#subtypes). |
| `event_data` | `object` | Structured payload with event details. See [Event data](#event-data). |
| `created_on` | `datetime` | When the event was created. |
| `acknowledged_on` | `datetime \| null` | When the event was acknowledged. `null` if not yet acknowledged. |

## Object types

The `object_type` field indicates which kind of resource the event relates to.

| Object type | Description |
| --- | --- |
| `DOMAIN` | A domain in your account. |
| `CONTACT` | A contact record. |
| `HOST` | A subordinate host (glue record). |
| `RAW` | A raw registry event not mapped to a specific resource type. |
| `UNKNOWN` | The object type could not be determined. |

## Event types

The `type` field indicates which operation triggered the event.

| Type | Description |
| --- | --- |
| `REGISTRATION` | A domain was registered. |
| `RENEWAL` | A domain was renewed. |
| `MODIFICATION` | A domain or contact was modified. |
| `DELETION` | A domain was deleted. |
| `INBOUND_TRANSFER` | A domain was transferred into OpusDNS. |
| `OUTBOUND_TRANSFER` | A domain was transferred away from OpusDNS. |
| `TRANSIT` | A domain entered transit state (TLD-specific, e.g., `.de`). |
| `WITHDRAW` | A domain was withdrawn from the registry (TLD-specific, e.g., `.at`). |
| `VERIFICATION` | A contact or domain verification event. |

## Subtypes

The `subtype` field indicates the outcome or stage of the operation.

| Subtype | Description |
| --- | --- |
| `NOTIFICATION` | Informational — an operation started or needs your attention. |
| `SUCCESS` | The operation completed successfully. |
| `FAILURE` | The operation failed. |
| `CANCELED` | The operation was canceled. |

## Event data

The `event_data` object contains structured details about the event. It always
includes a `version` field and a `messages` array.

### Messages

Each message in the `messages` array describes what happened:

```json
{
  "status": "success",
  "operation": "DOMAIN_REGISTRATION",
  "message": "Domain example.com registered successfully"
}
```

| Field | Type | Description |
| --- | --- | --- |
| `status` | `string` | `success`, `info`, or `error`. |
| `operation` | `string` | The specific operation that occurred. See [Operations](#operations). |
| `message` | `string` | Human-readable description of what happened. |
| `code` | `string` | Error code. Only present when `status` is `error`. |
| `detail` | `string` | Additional error context. Only present when `status` is `error`. |

### Operations

The `operation` field identifies the specific action:

| Operation | Description |
| --- | --- |
| `DOMAIN_REGISTRATION` | A domain registration completed or failed. |
| `DOMAIN_RENEWAL` | A domain renewal completed or failed. |
| `DOMAIN_MODIFICATION` | A domain was updated. |
| `DOMAIN_DELETION` | A domain was deleted. |
| `DOMAIN_INBOUND_TRANSFER` | An inbound transfer completed or failed. |
| `DOMAIN_OUTBOUND_TRANSFER` | An outbound transfer completed or failed. |
| `DOMAIN_TRANSIT` | A `.de` domain entered transit state. |
| `DOMAIN_WITHDRAW` | An `.at` domain was withdrawn. |
| `DOMAIN_VERIFICATION` | A domain verification event occurred. |
| `CONTACT_VERIFICATION` | A contact verification event occurred. |

### Additional details

Some events include a `details` object with extra structured data.

**Renewal events** may include the new expiration date:

```json
{
  "details": {
    "registration_expiration_date": "2027-03-15"
  }
}
```

**Verification events** may include verification claims:

```json
{
  "details": {
    "domain_id": "dom_01h45ytscbebyvny4gc8cr8ma2",
    "domain_name": "example.com",
    "verification_claims": [...],
    "registrants": [...]
  }
}
```

## Related API Reference

- [`GET /v1/events`](/api-reference#tag/event/GET/v1/events)
- [`GET /v1/events/{event_id}`](/api-reference#tag/event/GET/v1/events/{event_id})
- [`PATCH /v1/events/{event_id}`](/api-reference#tag/event/PATCH/v1/events/{event_id})
