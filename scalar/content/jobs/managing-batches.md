# Managing batches

Once you've submitted a batch, you can monitor its progress, control
execution flow, handle errors, and inspect individual job results.

## Monitoring progress

### Batch status

Poll the batch endpoint to check overall progress:

```bash
curl "$OPUSDNS_API_BASE/v1/jobs/batch_01h45ytscbebyvny4gc8cr8ma2" \
  --header "X-Api-Key: $OPUSDNS_API_KEY"
```

```json
{
  "batch_id": "batch_01h45ytscbebyvny4gc8cr8ma2",
  "label": "Q1 2026 bulk registration",
  "status": "pending",
  "total_jobs": 150,
  "job_counts": {
    "blocked": 0,
    "queued": 12,
    "paused": 0,
    "running": 3,
    "succeeded": 130,
    "failed": 4,
    "canceled": 0,
    "dead_letter": 1
  },
  "progress_percentage": 90.0,
  "created_on": "2026-05-04T12:00:00Z",
  "started_at": "2026-05-04T12:00:01Z",
  "finished_at": null
}
```

The `progress_percentage` reflects how many jobs have reached a terminal
state (succeeded, failed, canceled, or dead_letter) out of the total.

When all jobs are done, `status` changes from `pending` to `complete`.

### Individual job results

List the jobs within a batch:

```bash
curl "$OPUSDNS_API_BASE/v1/jobs/batch_01h45ytscbebyvny4gc8cr8ma2/jobs?page=1&page_size=50" \
  --header "X-Api-Key: $OPUSDNS_API_KEY"
```

Each job response includes:

| Field | Description |
| --- | --- |
| `job_id` | Unique identifier for this job. |
| `status` | Current status (`queued`, `running`, `succeeded`, `failed`, etc.). |
| `command` | The command type that was executed. |
| `operation` | The operation being performed. |
| `domain_name` | The domain this job operates on (when applicable). |
| `resource_key` | The primary resource identifier. |
| `display` | Human-readable description of the job. |
| `attempts` | Number of execution attempts. |
| `error_class` | Error category (on failure). |
| `error_message` | Human-readable error detail (on failure). |
| `payload` | The command payload that was submitted. |
| `created_on` | When the job was created. |
| `started_at` | When execution began. |
| `finished_at` | When execution completed. |
| `paused_at` | When the job was paused (if applicable). |

### Filtering jobs by status

Use the `status` parameter (repeatable) to find specific jobs:

```bash
# Find all failed jobs
curl --get "$OPUSDNS_API_BASE/v1/jobs/batch_01h45ytscbebyvny4gc8cr8ma2/jobs" \
  --header "X-Api-Key: $OPUSDNS_API_KEY" \
  --data-urlencode "status=failed" \
  --data-urlencode "status=dead_letter"
```

```bash
# Find jobs still running
curl --get "$OPUSDNS_API_BASE/v1/jobs/batch_01h45ytscbebyvny4gc8cr8ma2/jobs" \
  --header "X-Api-Key: $OPUSDNS_API_KEY" \
  --data-urlencode "status=running"
```

### Sorting jobs

Control the order of results:

```bash
curl --get "$OPUSDNS_API_BASE/v1/jobs/batch_01h45ytscbebyvny4gc8cr8ma2/jobs" \
  --header "X-Api-Key: $OPUSDNS_API_KEY" \
  --data-urlencode "sort_by=finished_at" \
  --data-urlencode "sort_order=desc"
```

| Parameter | Values | Default |
| --- | --- | --- |
| `sort_by` | `created_on`, `started_at`, `finished_at` | `created_on` |
| `sort_order` | `asc`, `desc` | `desc` |
| `page` | 1+ | 1 |
| `page_size` | 1–1000 | 10 |

## Listing batches

View all batches for your organization:

```bash
curl "$OPUSDNS_API_BASE/v1/jobs?page=1&page_size=25" \
  --header "X-Api-Key: $OPUSDNS_API_KEY"
```

Each batch in the list includes metadata:

```json
{
  "batch_id": "batch_01h45ytscbebyvny4gc8cr8ma2",
  "label": "Q1 2026 bulk registration",
  "status": "complete",
  "total_jobs": 150,
  "job_counts": {
    "succeeded": 145,
    "failed": 4,
    "dead_letter": 1,
    "canceled": 0,
    "blocked": 0,
    "queued": 0,
    "paused": 0,
    "running": 0
  },
  "created_on": "2026-05-04T12:00:00Z",
  "started_at": "2026-05-04T12:00:01Z",
  "finished_at": "2026-05-04T12:15:30Z"
}
```

### Filtering and sorting batches

```bash
# Only pending batches, newest first
curl --get "$OPUSDNS_API_BASE/v1/jobs" \
  --header "X-Api-Key: $OPUSDNS_API_KEY" \
  --data-urlencode "status=pending" \
  --data-urlencode "sort_by=created_on" \
  --data-urlencode "sort_order=desc"
```

| Parameter | Values | Default |
| --- | --- | --- |
| `status` | `pending`, `complete` | all |
| `sort_by` | `created_on`, `started_at`, `finished_at` | `created_on` |
| `sort_order` | `asc`, `desc` | `desc` |

## Controlling execution

### Pause a batch

Temporarily stop processing. Queued jobs are held, and no new jobs start.
Jobs that are already `running` will complete:

```bash
curl "$OPUSDNS_API_BASE/v1/jobs/batch_01h45ytscbebyvny4gc8cr8ma2/pause" \
  --request POST \
  --header "X-Api-Key: $OPUSDNS_API_KEY"
```

Returns `204 No Content` on success.

### Resume a batch

Resume processing of paused jobs:

```bash
curl "$OPUSDNS_API_BASE/v1/jobs/batch_01h45ytscbebyvny4gc8cr8ma2/resume" \
  --request POST \
  --header "X-Api-Key: $OPUSDNS_API_KEY"
```

### Cancel a batch

Cancel all pending jobs in a batch. Completed and currently running jobs are
not affected:

```bash
curl "$OPUSDNS_API_BASE/v1/jobs/batch_01h45ytscbebyvny4gc8cr8ma2" \
  --request DELETE \
  --header "X-Api-Key: $OPUSDNS_API_KEY"
```

Returns `204 No Content` on success.

### Starting paused

<scalar-callout type="success">
For large or critical batches, create them paused so you can review all jobs before committing to execution.
</scalar-callout>

Create a batch in a paused state for review before execution:

```bash
curl "$OPUSDNS_API_BASE/v1/jobs" \
  --request POST \
  --header "X-Api-Key: $OPUSDNS_API_KEY" \
  --header "Content-Type: application/json" \
  --data '{
    "label": "Review before running",
    "paused": true,
    "commands": [...]
  }'
```

Inspect the batch and its jobs, then resume when ready:

```bash
# Review the jobs
curl "$OPUSDNS_API_BASE/v1/jobs/batch_01h45ytscbebyvny4gc8cr8ma2/jobs?page_size=100" \
  --header "X-Api-Key: $OPUSDNS_API_KEY"

# Everything looks good — resume
curl "$OPUSDNS_API_BASE/v1/jobs/batch_01h45ytscbebyvny4gc8cr8ma2/resume" \
  --request POST \
  --header "X-Api-Key: $OPUSDNS_API_KEY"
```

## Error handling

### Submission errors

Errors caught at submission time appear in the batch response:

```json
{
  "batch_id": "batch_01h45ytscbebyvny4gc8cr8ma2",
  "total_commands": 3,
  "jobs_created": 2,
  "jobs_failed": 1,
  "errors": [
    {
      "index": 2,
      "error": "Invalid domain name format",
      "code": "INVALID_DOMAIN_NAME",
      "type": "validation-error",
      "resource_key": "not-a-valid-domain",
      "instance_index": null
    }
  ]
}
```

| Error field | Description |
| --- | --- |
| `index` | Position of the command in the `commands` array (0-based). |
| `instance_index` | For bulk commands, the position within `instances` (0-based). `null` for single commands. |
| `error` | Human-readable error message. |
| `code` | Stable error code for programmatic handling. |
| `type` | RFC 9457 problem type identifier. |
| `resource_key` | The resource that caused the error (e.g., domain name). |

### Batch-level errors

| Error | HTTP status | Description |
| --- | --- | --- |
| `ERROR_BATCH_EMPTY` | 400 | The `commands` array is empty. |
| `ERROR_BATCH_JOB_CREATION_FAILED` | 503 | Internal error creating jobs. Retry the request. |
| `ERROR_BATCH_NOT_FOUND` | 404 | The batch ID does not exist. |
| `ERROR_BATCH_STATUS_FETCH_FAILED` | 503 | Temporary error fetching batch status. Retry. |

### Runtime job failures

Jobs that fail during execution have `error_class` and `error_message`
fields:

```json
{
  "job_id": "job_01h45ytscbebyvny4gc8cr8ma2",
  "status": "failed",
  "command": "domain_create",
  "domain_name": "taken-domain.com",
  "error_class": "DomainUnavailable",
  "error_message": "Domain taken-domain.com is not available for registration",
  "attempts": 1,
  "finished_at": "2026-05-04T12:01:15Z"
}
```

### Dead letter jobs

A job moves to `dead_letter` when it has exhausted all retry attempts. This
typically indicates a persistent issue that won't resolve with retries:

```bash
# Find dead letter jobs
curl --get "$OPUSDNS_API_BASE/v1/jobs/batch_01h45ytscbebyvny4gc8cr8ma2/jobs" \
  --header "X-Api-Key: $OPUSDNS_API_KEY" \
  --data-urlencode "status=dead_letter"
```

Dead letter jobs require manual investigation. Check the `error_class` and
`error_message` to understand what went wrong, fix the underlying issue, and
submit a new batch for the affected resources.

<scalar-callout type="danger">
Dead letter jobs will not be retried automatically. You must resolve the underlying issue and submit a new batch for the affected resources.
</scalar-callout>

### Handling duplicates

When commands have `idempotency_key` values that match previously processed
jobs, they appear in the `duplicates` array:

```json
{
  "duplicates": [
    {
      "index": 0,
      "existing_job_id": "job_01h45ytscbebyvny4gc8cr8ma2",
      "existing_batch_id": "batch_01h35xrscbebyvny4gc8cr8ma2",
      "resource_key": "example.com",
      "instance_index": null
    }
  ],
  "jobs_duplicated": 1
}
```

Duplicates are not errors — they're an intentional safeguard. Use the
`existing_job_id` and `existing_batch_id` to look up the original job's
result.

## Best practices

### Use labels consistently

Labels make it easy to identify batches when reviewing history:

```json
{
  "label": "Customer migration - ACME Corp - May 2026",
  "commands": [...]
}
```

### Use idempotency keys for critical operations

Always include idempotency keys for domain registrations and transfers where
accidental duplicates would have financial impact:

```json
{
  "type": "domain_create",
  "idempotency_key": "reg-example-com-2026-q1",
  "payload": { ... }
}
```

### Use bulk commands for efficiency

A single `domain_create_bulk` with 500 instances is more efficient than 500
individual `domain_create` commands. Shared fields are validated once rather
than 500 times.

### Start large batches paused

For batches with hundreds or thousands of commands, create them paused so you
can review before committing:

```json
{
  "paused": true,
  "label": "Large migration - review first",
  "commands": [...]
}
```

### Schedule for off-peak hours

Use `not_before` for large batches that don't need to run immediately:

```json
{
  "not_before": "2026-06-01T02:00:00Z",
  "label": "Scheduled maintenance - off-peak",
  "commands": [...]
}
```

### Monitor and react to failures

Build a workflow that polls for completion and handles failures:

1. Submit the batch and store the `batch_id`.
2. Poll `GET /v1/jobs/{batch_id}` until `status` is `complete`.
3. Check `job_counts.failed` and `job_counts.dead_letter`.
4. If either is non-zero, list failed jobs and take corrective action.
5. For recoverable failures, build a new batch with just the failed items.

## Related API Reference

- [`POST /v1/jobs`](/api-reference#tag/jobs/POST/v1/jobs)
- [`GET /v1/jobs`](/api-reference#tag/jobs/GET/v1/jobs)
- [`GET /v1/jobs/{batch_id}`](/api-reference#tag/jobs/GET/v1/jobs/{batch_id})
- [`DELETE /v1/jobs/{batch_id}`](/api-reference#tag/jobs/DELETE/v1/jobs/{batch_id})
- [`GET /v1/jobs/{batch_id}/jobs`](/api-reference#tag/jobs/GET/v1/jobs/{batch_id}/jobs)
- [`POST /v1/jobs/{batch_id}/pause`](/api-reference#tag/jobs/POST/v1/jobs/{batch_id}/pause)
- [`POST /v1/jobs/{batch_id}/resume`](/api-reference#tag/jobs/POST/v1/jobs/{batch_id}/resume)
