# The event object

The event object represents a notification about an operation that occurred on
a resource in your OpusDNS account. Events are returned by `GET /v1/events` and
`GET /v1/events/{event_id}`.

## Example response

```json
{
  "event_id": "event_01h45ytscbebyvny4gc8cr8ma2",
  "object_id": "dom_01h45ytscbebyvny4gc8cr8ma2",
  "object_type": "DOMAIN",
  "type": "REGISTRATION",
  "subtype": "SUCCESS",
  "event_data": {
    "version": "1.0",
    "message": "Domain example.com registered successfully"
  },
  "created_on": "2026-01-15T10:30:00Z",
  "acknowledged_on": null
}
```

## Fields

| Field | Type | Description |
| --- | --- | --- |
| `event_id` | `string` | Unique identifier for the event (TypeID format, prefixed with `event_`). |
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

The `event_data` object uses a standardized V1 structure. Every event includes
a `version` and a `message`. Failure events also include an `error` object, and
some events carry additional typed data in a `details` object.

| Field     | Required | Description                                                              |
|-----------|----------|--------------------------------------------------------------------------|
| `version` | Yes      | Payload format version. Always `"1.0"`.                                  |
| `message` | Yes      | Human-readable summary of the event.                                     |
| `error`   | No       | Structured failure information. Present only for failure events.         |
| `details` | No       | Typed event-specific data, such as renewal or verification details.      |

### Successful event

```json
{
  "event_id": "event_01h45ytscbebyvny4gc8cr8ma2",
  "object_id": "example.com",
  "object_type": "DOMAIN",
  "type": "INBOUND_TRANSFER",
  "subtype": "SUCCESS",
  "event_data": {
    "version": "1.0",
    "message": "Domain transferred in successfully"
  },
  "created_on": "2026-05-05T10:30:00Z",
  "acknowledged_on": null
}
```

### Failure event

Failure events include `event_data.error.code` and
`event_data.error.detail`. Registry error codes are preserved when available.

```json
{
  "event_id": "event_01h45ytscbebyvny4gc8cr8ma2",
  "object_id": "example.com",
  "object_type": "DOMAIN",
  "type": "OUTBOUND_TRANSFER",
  "subtype": "FAILURE",
  "event_data": {
    "version": "1.0",
    "message": "Outbound domain transfer failed",
    "error": {
      "code": "ERROR_DOMAIN_TRANSFER",
      "detail": "Outbound transfer failed for example.com"
    }
  },
  "created_on": "2026-05-05T10:30:00Z",
  "acknowledged_on": null
}
```

| Error field | Type     | Description                                |
|-------------|----------|--------------------------------------------|
| `code`      | `string` | Machine-readable error code.               |
| `detail`    | `string` | Human-readable explanation of the failure. |

### Renewal details

When a domain renewal succeeds, the event includes the new registration
expiration date under `event_data.details`.

```json
{
  "event_data": {
    "version": "1.0",
    "message": "Domain renewed successfully",
    "details": {
      "detail_type": "domain_renewal",
      "expires_on": "2027-01-01T00:00:00Z"
    }
  }
}
```

| Details field | Type       | Description                                             |
|---------------|------------|---------------------------------------------------------|
| `detail_type` | `string`   | Always `domain_renewal` for renewal details.            |
| `expires_on`  | `datetime` | The new registration expiration date after the renewal. |

### Verification details

When a domain needs verification, the event may include deadlines, required
verification claims, and registrant contact information.

```json
{
  "event_data": {
    "version": "1.0",
    "message": "Domain verification notification received",
    "details": {
      "detail_type": "domain_verification",
      "domain_id": "domain_01h455e1yewzjmrqt7xk5g8w4d",
      "verification_deadlines": [
        {
          "type": "dedelegation",
          "date": "2026-05-20T13:01:05+02:00"
        },
        {
          "type": "deletion",
          "date": "2026-08-18T13:01:05+02:00"
        }
      ],
      "verification_claims": [
        "address",
        "name"
      ],
      "registrants": [
        {
          "contact_id": "contact_01h455e1yewzjmrqt7xk5g8w6f",
          "name": "Jane Doe",
          "email": "jane.doe@example.com"
        }
      ]
    }
  }
}
```

| Details field            | Type     | Description                                                                                |
|--------------------------|----------|--------------------------------------------------------------------------------------------|
| `detail_type`            | `string` | Always `domain_verification` for verification details.                                     |
| `domain_id`              | `string` | TypeID of the domain that requires verification.                                           |
| `verification_deadlines` | `array`  | Deadlines that apply to the verification process.                                          |
| `verification_claims`    | `array`  | Claims that need verification. Values can include `name`, `address`, `email`, and `phone`. |
| `registrants`            | `array`  | Registrant contacts associated with the domain.                                            |

### Integration notes

Integrations that read `event_data` should:

1. Check `event_data.version`.
2. Use `event_data.message` as the primary event summary.
3. For failures, use `event_data.error.code` and `event_data.error.detail`.
4. For renewal events, read `event_data.details.expires_on` when
   `event_data.details.detail_type` is `domain_renewal`.
5. For verification events, read `verification_deadlines`,
   `verification_claims`, and `registrants` when
   `event_data.details.detail_type` is `domain_verification`.

<scalar-callout type="warning">
Older events that were created before the V1 migration may still contain the previous event_data shape. Integrations that process historical events should keep a fallback path for legacy event_data and use the top-level type and subtype fields to route those events.
</scalar-callout>

## Related API Reference

- [`GET /v1/events`](/api-reference#tag/event/GET/v1/events)
- [`GET /v1/events/{event_id}`](/api-reference#tag/event/GET/v1/events/{event_id})
- [`PATCH /v1/events/{event_id}`](/api-reference#tag/event/PATCH/v1/events/{event_id})
