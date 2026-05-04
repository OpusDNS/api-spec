# Jobs overview

The Jobs API lets you submit large numbers of operations for asynchronous
execution. Instead of making thousands of individual API calls, you bundle
commands into a **batch**, and OpusDNS processes them reliably in the
background.

## Core concepts

### Batches and jobs

A **batch** is a container that holds one or more commands. When you submit a
batch, OpusDNS creates individual **jobs** for each command (or each instance
in a bulk command). Each job is processed independently and tracked through
its own lifecycle.

```
Batch (up to 50,000 commands)
├── Job 1  →  domain_create "example.com"       → succeeded
├── Job 2  →  domain_create "example.net"       → succeeded
├── Job 3  →  domain_create "example.org"       → failed
└── ...
```

### Single vs. bulk commands

There are two categories of commands:

**Single-resource commands** create one job per command. Each command targets
a specific resource:

```json
{
  "type": "domain_create",
  "payload": {
    "name": "example.com",
    "contacts": { "registrant": "contact_01h45ytscbebyvny4gc8cr8ma2" },
    "renewal_mode": "renew",
    "period": { "unit": "y", "value": 1 }
  }
}
```

**Bulk commands** use a **template + instances** pattern. The template defines
shared settings, and each instance specifies a target resource with optional
overrides. Each instance becomes its own job:

```json
{
  "type": "domain_create_bulk",
  "payload": {
    "template": {
      "contacts": { "registrant": "contact_01h45ytscbebyvny4gc8cr8ma2" },
      "renewal_mode": "renew",
      "period": { "unit": "y", "value": 1 }
    },
    "instances": [
      { "name": "example.com" },
      { "name": "example.net" },
      { "name": "example.org" }
    ]
  }
}
```

This is significantly more efficient than submitting 3 individual
`domain_create` commands — shared fields are defined once in the template
rather than repeated in every command.

<scalar-callout type="warning">
Instance-level overrides completely replace the template's setting for that field — they are not merged. If an instance specifies <code>contacts</code>, it replaces the template's contacts entirely.
</scalar-callout>

## Submitting a batch

Create a batch with `POST /v1/jobs`:

```bash
curl "$OPUSDNS_API_BASE/v1/jobs" \
  --request POST \
  --header "X-Api-Key: $OPUSDNS_API_KEY" \
  --header "Content-Type: application/json" \
  --data '{
    "label": "Q1 2026 bulk registration",
    "commands": [
      {
        "type": "domain_create",
        "payload": {
          "name": "example1.com",
          "contacts": {
            "registrant": "contact_01h45ytscbebyvny4gc8cr8ma2"
          },
          "renewal_mode": "renew",
          "period": { "unit": "y", "value": 1 }
        }
      },
      {
        "type": "domain_create",
        "payload": {
          "name": "example2.com",
          "contacts": {
            "registrant": "contact_01h45ytscbebyvny4gc8cr8ma2"
          },
          "renewal_mode": "renew",
          "period": { "unit": "y", "value": 1 }
        }
      }
    ]
  }'
```

### Batch request fields

| Field | Required | Default | Description |
| --- | --- | --- | --- |
| `commands` | Yes | — | Array of command objects. Up to **50,000** per batch. |
| `label` | No | `null` | Human-readable label to identify the batch. |
| `paused` | No | `false` | If `true`, jobs are created in a paused state. |
| `not_before` | No | `null` | UTC timestamp — jobs stay `blocked` until this time. |

### Batch response

```json
{
  "batch_id": "batch_01h45ytscbebyvny4gc8cr8ma2",
  "total_commands": 2,
  "jobs_created": 2,
  "jobs_duplicated": 0,
  "jobs_failed": 0,
  "duplicates": [],
  "errors": [],
  "status_url": "/v1/jobs/batch_01h45ytscbebyvny4gc8cr8ma2"
}
```

| Field | Description |
| --- | --- |
| `batch_id` | Unique identifier for the batch. |
| `total_commands` | Total number of commands submitted. |
| `jobs_created` | Number of jobs successfully created. |
| `jobs_duplicated` | Commands skipped due to duplicate idempotency keys. |
| `jobs_failed` | Commands that failed validation at submission time. |
| `duplicates` | Array of duplicate command details (index, existing job/batch IDs). |
| `errors` | Array of command errors (index, error message, error code). |
| `status_url` | URL to poll for batch progress. |

## Job lifecycle

Each job transitions through a defined set of statuses:

```
blocked → queued → running → succeeded
                           → failed
                           → dead_letter
              ↕
           paused
              ↓
          canceled
```

| Status | Description |
| --- | --- |
| `blocked` | Waiting for eligibility — either scheduled via `not_before` or awaiting capacity. |
| `queued` | Eligible and waiting for a worker to pick it up. |
| `paused` | Paused by user action. Must be explicitly resumed. |
| `running` | Currently being executed. |
| `succeeded` | Completed successfully. |
| `failed` | Execution failed. Check `error_class` and `error_message` on the job. |
| `canceled` | Canceled before execution started. |
| `dead_letter` | Permanently failed after exhausting all retry attempts. |

The batch has its own status:

| Batch status | Meaning |
| --- | --- |
| `pending` | At least one job is still in a non-terminal state. |
| `complete` | All jobs have reached a terminal state (succeeded, failed, canceled, or dead_letter). |

## Scheduling

Use `not_before` to schedule a batch for future execution:

```json
{
  "label": "Scheduled renewal update",
  "not_before": "2026-06-01T00:00:00Z",
  "commands": [...]
}
```

Jobs remain `blocked` until the scheduled time, then move to `queued` for
processing. This is useful for maintenance windows, coordinated rollouts,
or time-sensitive operations.

## Idempotency

Include an `idempotency_key` on any command to prevent duplicate processing:

```json
{
  "type": "domain_create",
  "idempotency_key": "reg-example-com-2026-q1",
  "payload": {
    "name": "example.com",
    ...
  }
}
```

<scalar-callout type="warning">
Always use idempotency keys for domain registrations and transfers — accidental duplicates have financial impact.
</scalar-callout>

If a job with the same idempotency key has already been processed, the
command is skipped. The batch response reports these in the `duplicates`
array:

```json
{
  "duplicates": [
    {
      "index": 0,
      "existing_job_id": "job_01h45ytscbebyvny4gc8cr8ma2",
      "existing_batch_id": "batch_01h35xrscbebyvny4gc8cr8ma2",
      "resource_key": "example.com"
    }
  ]
}
```

This is especially important for domain registrations and transfers where
accidental duplicates would have financial impact.

## Limits

| Constraint | Limit |
| --- | --- |
| Commands per batch | 50,000 |
| Instances per bulk command | 1,000 |
| Operations per DNS bulk patch instance | 100 |

## Available commands

### Single-resource commands

| Command | Description |
| --- | --- |
| `domain_create` | Register a domain. |
| `domain_update` | Update domain settings (contacts, nameservers, statuses, renewal mode). |
| `domain_transfer` | Initiate an inbound domain transfer. |
| `dns_zone_create` | Create a DNS zone with optional records. |
| `dns_zone_update` | Update an existing DNS zone. |
| `contact_create` | Create a contact. |

### Bulk commands

| Command | Description |
| --- | --- |
| `domain_create_bulk` | Register multiple domains. |
| `domain_update_bulk` | Update multiple domains. |
| `domain_transfer_bulk` | Transfer multiple domains. |
| `dns_zone_create_bulk` | Create multiple DNS zones. |
| `dns_zone_update_bulk` | Replace RRsets and zone attributes across zones. |
| `dns_zone_patch_rrsets_bulk` | Upsert or remove entire RRsets across zones. |
| `dns_zone_patch_records_bulk` | Upsert or remove individual records across zones. |
| `contact_create_bulk` | Create multiple contacts. |
| `parking_create_bulk` | Create parking pages for multiple domains. |
| `parking_enable_bulk` | Enable parking on multiple domains. |
| `parking_disable_bulk` | Disable parking on multiple domains. |
| `parking_delete_bulk` | Delete parking pages for multiple domains. |

See [Domain commands](/automation/jobs/domain-commands) and
[DNS & infrastructure commands](/automation/jobs/dns-commands) for full
payload details and examples.

## Related API Reference

- [`POST /v1/jobs`](/api-reference#tag/jobs/POST/v1/jobs)
- [`GET /v1/jobs`](/api-reference#tag/jobs/GET/v1/jobs)
- [`GET /v1/jobs/{batch_id}`](/api-reference#tag/jobs/GET/v1/jobs/{batch_id})
- [`GET /v1/jobs/{batch_id}/jobs`](/api-reference#tag/jobs/GET/v1/jobs/{batch_id}/jobs)
