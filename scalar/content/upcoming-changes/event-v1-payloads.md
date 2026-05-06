# Upcoming change: Event V1 payloads

We are standardizing the event_data returned by the Events API. After this change, newly generated events will use one
predictable V1 payload shape.

The poll and acknowledge operations still work the same way. The change is focused on the contents of `event_data`, so
clients can read event messages, errors, renewal dates, and verification data consistently without having to understand
TLD-specific differences.

<scalar-callout type="info">
This upcoming format applies to all events returned by the Events API.
</scalar-callout>

## The new shape

Every new event includes a `version` and a `message`.

```json
{
  "version": "1.0",
  "message": "Domain transferred in successfully"
}
```

Failure events also include an `error` object:

```json
{
  "version": "1.0",
  "message": "Outbound domain transfer failed",
  "error": {
    "code": "ERROR_DOMAIN_TRANSFER",
    "detail": "Outbound transfer failed for example.com"
  }
}
```

Events with additional structured data also include a `details` object:

```json
{
  "version": "1.0",
  "message": "Domain renewed successfully",
  "details": {
    "detail_type": "domain_renewal",
    "expires_on": "2027-01-01T00:00:00Z"
  }
}
```

## Why we are making this change

Older event payloads were not consistent across all event types. Some events had
custom fields, some failure events nested error information differently, and
some generated events could contain empty payloads.

The V1 format provides a stable contract:

| Field     | Required | Purpose                                                                  |
|-----------|----------|--------------------------------------------------------------------------|
| `version` | Yes      | Detect the V1 event payload format. New V1 payloads use `"1.0"`.         |
| `message` | Yes      | Display or log a human-readable summary of the event.                    |
| `error`   | No       | Read structured failure information. Present only for failure events.    |
| `details` | No       | Read typed event-specific data, such as renewal or verification details. |

The event object still carries the top-level routing metadata used for event processing:

| Event field   | Meaning                                                                           |
|---------------|-----------------------------------------------------------------------------------|
| `object_type` | Which resource type the event belongs to, such as `DOMAIN`, `CONTACT`, or `HOST`. |
| `object_id`   | Which resource the event is about.                                                |
| `type`        | The operation category, such as `INBOUND_TRANSFER`, `RENEWAL`, or `VERIFICATION`. |
| `subtype`     | The event stage or outcome: `NOTIFICATION`, `SUCCESS`, `FAILURE`, or `CANCELED`.  |

The top-level `type` and `subtype` fields are intended for event routing.
The `event_data` object carries the message, failure details, and extra typed
data for the event.

## Successful event example

```json
{
  "event_id": "epp_event_01h45ytscbebyvny4gc8cr8ma2",
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

## Failure event example

Failure events include `event_data.error.code` and
`event_data.error.detail`. Registry error codes are preserved when available.

```json
{
  "event_id": "epp_event_01h45ytscbebyvny4gc8cr8ma2",
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

<scalar-callout type="warning">
Failure payloads no longer include the old exception object. Read <code>event_data.error.code</code> and <code>event_data.error.detail</code> instead.
</scalar-callout>

## Renewal details

When a domain renewal succeeds, the event will include the new registration
expiration date under `event_data.details`.

```json
{
  "event_id": "epp_event_01h45ytscbebyvny4gc8cr8ma2",
  "object_id": "example.com",
  "object_type": "DOMAIN",
  "type": "RENEWAL",
  "subtype": "SUCCESS",
  "event_data": {
    "version": "1.0",
    "message": "Domain renewed successfully",
    "details": {
      "detail_type": "domain_renewal",
      "expires_on": "2027-01-01T00:00:00Z"
    }
  },
  "created_on": "2026-05-05T10:30:00Z",
  "acknowledged_on": null
}
```

| Details field | Type       | Description                                             |
|---------------|------------|---------------------------------------------------------|
| `detail_type` | `string`   | Always `domain_renewal` for renewal details.            |
| `expires_on`  | `datetime` | The new registration expiration date after the renewal. |

## Verification details

When a domain needs verification, the event may include deadlines, required
verification claims, and registrant contact information.

```json
{
  "event_id": "epp_event_01h45ytscbebyvny4gc8cr8ma2",
  "object_id": "example.de",
  "object_type": "DOMAIN",
  "type": "VERIFICATION",
  "subtype": "NOTIFICATION",
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
  },
  "created_on": "2026-05-05T10:30:00Z",
  "acknowledged_on": null
}
```

| Details field            | Type     | Description                                                                                |
|--------------------------|----------|--------------------------------------------------------------------------------------------|
| `detail_type`            | `string` | Always `domain_verification` for verification details.                                     |
| `domain_id`              | `string` | TypeID of the domain that requires verification.                                           |
| `verification_deadlines` | `array`  | Deadlines that apply to the verification process.                                          |
| `verification_claims`    | `array`  | Claims that need verification. Values can include `name`, `address`, `email`, and `phone`. |
| `registrants`            | `array`  | Registrant contacts associated with the domain.                                            |

Each verification deadline has this shape:

```json
{
  "type": "dedelegation",
  "date": "2026-05-20T13:01:05+02:00"
}
```

| Deadline field | Type       | Description                   |
|----------------|------------|-------------------------------|
| `type`         | `string`   | `dedelegation` or `deletion`. |
| `date`         | `datetime` | The deadline timestamp.       |

Each registrant has this shape:

```json
{
  "contact_id": "contact_01h455e1yewzjmrqt7xk5g8w6f",
  "name": "Jane Doe",
  "email": "jane.doe@example.com"
}
```

## Integration updates

Integrations that read `event_data` should handle the V1 fields:

1. Check `event_data.version`.
2. Use `event_data.message` as the primary event summary.
3. For failures, use `event_data.error.code` and `event_data.error.detail`.
4. For renewal events, read
   `event_data.details.expires_on` when
   `event_data.details.detail_type` is `domain_renewal`.
5. For verification events, read `verification_deadlines`,
   `verification_claims`, and `registrants` when
   `event_data.details.detail_type` is `domain_verification`.

<scalar-callout type="warning">
During rollout, older events that were created before this change may still contain the previous event_data shape. Integrations that process historical events should keep a fallback path for legacy event_data and use the top-level type and subtype fields to route those events.
</scalar-callout>

## What changed from the previous payload

| Before                                           | After                                                                                 |
|--------------------------------------------------|---------------------------------------------------------------------------------------|
| Event data could include a `messages` array.     | Event data has one top-level `message` string.                                        |
| Error details could be nested or inconsistent.   | Failure events use `error.code` and `error.detail`.                                   |
| Renewal dates could appear as custom fields.     | Renewal dates are in `details.expires_on`.                                            |
| Verification data could appear as custom fields. | Verification data is grouped under `details` with deadlines, claims, and registrants. |
| Some generated events could have empty payloads. | New customer-facing events always include non-empty V1 event data.                    |

## Related API Reference

- [`GET /v1/events`](/api-reference#tag/event/GET/v1/events)
- [`GET /v1/events/{event_id}`](/api-reference#tag/event/GET/v1/events/{event_id})
- [`PATCH /v1/events/{event_id}`](/api-reference#tag/event/PATCH/v1/events/{event_id})
