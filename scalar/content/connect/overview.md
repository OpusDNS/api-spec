# Connect a registrar

Connect your accounts at other registrars to see their domains, DNS zones and
contacts in OpusDNS, alongside the domains you registered with us. OpusDNS reads
them from the registrar in a sync. It stores the login details encrypted and
never returns them.

## Flow overview

1. Connect an account with `POST /v1/connect/registrars`.
2. Follow the first sync until it ends.
3. Check the domains that didn't sync.
4. Keep the account up to date: OpusDNS syncs most accounts once a day, and you
   can start a sync yourself.

## Before you begin

- Connect's endpoints require the **AI Concierge** in addition to the
  `registrar_credentials` permissions of the user's role. An API key can call
  them only after OpusDNS has enabled the AI Concierge for that key.
- To connect a `NIC_DIRECT` account, OpusDNS has to enable it for your
  organization first. Until then, connecting one returns
  `403 ERROR_REGISTRAR_NOT_ENABLED`.
- The sandbox supports only registrars with a test system: `INTERNETX`,
  `CENTRALNIC`, `NICMANAGER`, `OPUSDNS` and `ENOM`. Other registrars return
  `403 ERROR_REGISTRAR_NOT_SUPPORTED_IN_ENVIRONMENT`.

## 1. Connect an account

Send the registrar, a name of your choice and the account's login details. Each
registrar needs different fields in `credentials`. The request schema of
[Connect a registrar account](/api-reference#tag/connect/POST/v1/connect/registrars)
lists them. For example, an `INTERNETX` account:

```bash
curl "$OPUSDNS_API_BASE/v1/connect/registrars" \
  --request POST \
  --header "X-Api-Key: $OPUSDNS_API_KEY" \
  --header "Content-Type: application/json" \
  --data '{
    "registrar": "INTERNETX",
    "name": "Main account",
    "credentials": {
      "username": "api-user",
      "password": "your-password"
    }
  }'
```

The response is the connected account. Keep its `registrar_credential_id`: the
sync endpoints take it.

```json
{
  "registrar_credential_id": "registrar_credential_01h45ytscbebyvny4gc8cr8ma2",
  "organization_id": "organization_01h45ytscbebyvny4gc8cr8ma2",
  "name": "Main account",
  "registrar": "INTERNETX",
  "created_on": "2026-01-15T10:30:00Z",
  "updated_on": "2026-01-15T10:30:00Z"
}
```

- Each name can be used once per registrar. A second account with the same name
  and registrar returns `409 ERROR_CREDENTIAL_ALREADY_EXISTS`.
- Each `NIC_DIRECT` account can be connected only once. Connecting it again
  returns `409 ERROR_CREDENTIAL_ACCOUNT_ALREADY_CONNECTED`.

## 2. Follow the first sync

The first sync starts automatically. Poll
[Get sync status](/api-reference#tag/connect/GET/v1/connect/registrars/{registrar_credential_id}/sync)
until `status` is `completed`, `failed` or `cancelled`:

```bash
curl "$OPUSDNS_API_BASE/v1/connect/registrars/registrar_credential_01h45ytscbebyvny4gc8cr8ma2/sync" \
  --header "X-Api-Key: $OPUSDNS_API_KEY"
```

| status | Meaning |
| --- | --- |
| `pending` | Waiting to start. If `batch_id` is empty, no sync was started yet: start one. |
| `running` | In progress. `progress_percentage` shows how far it has got. |
| `completed` | Done. Domains that couldn't be synced are counted in `failed`. |
| `failed` | The sync itself failed. See `error_code` and `error_message`. |
| `cancelled` | Stopped with [Cancel a sync](/api-reference#tag/connect/DELETE/v1/connect/registrars/{registrar_credential_id}/sync). |

When the sync itself fails:

| error_code | What to do |
| --- | --- |
| `ERROR_CREDENTIAL_AUTH` | The registrar rejected the login details. [Update them](/api-reference#tag/connect/PUT/v1/connect/registrars/{registrar_credential_id}). |
| `ERROR_CREDENTIAL_ACCESS` | The registrar refused access, for example because OpusDNS's IP address isn't allowed for this account. |
| `ERROR_CREDENTIAL_SYNC` | The registrar couldn't be reached or returned an error. Try again later. |

Not every failure has an `error_code`. `error_message` always describes what
went wrong, and `error_detail` contains the registrar's own message when it sent
one.

## 3. Check the domains that didn't sync

[List sync failures](/api-reference#tag/connect/GET/v1/connect/registrars/{registrar_credential_id}/sync/failures)
shows each domain the latest sync couldn't sync. Each entry's `error` says why
in `code`, and `retryable` tells whether a later sync may succeed. Programs
should branch on `code`. The codes are listed under
[Connect](/api-reference#tag/connect) in the API Reference.

## 4. Keep the account up to date

OpusDNS syncs most connected accounts once a day. To refresh sooner, start a
sync yourself:

```bash
curl "$OPUSDNS_API_BASE/v1/connect/registrars/registrar_credential_01h45ytscbebyvny4gc8cr8ma2/sync" \
  --request POST \
  --header "X-Api-Key: $OPUSDNS_API_KEY"
```

It answers `202` with the new sync and its status URL in `Location`, or `200`
with the one already running or just finishing. Both return the same object as
Get sync status.

When the login details change at the registrar,
[update them](/api-reference#tag/connect/PUT/v1/connect/registrars/{registrar_credential_id})
in OpusDNS too.

## Disconnect an account

[Disconnect a registrar account](/api-reference#tag/connect/DELETE/v1/connect/registrars/{registrar_credential_id})
removes the connection. Disconnecting an account changes nothing at the
registrar.

## Accounts of suborganizations

An unknown account ID returns `403`, as does one from an organization outside
yours. An account of one of your suborganizations returns `404` unless you send
the request in that organization's context (`X-Organization-Context`).

## Next steps

- [Transfer a connected domain to OpusDNS](/products/connected-registrars/transfer-to-opusdns): transfer a domain without asking the registrar for its auth code.
- [Transfers](/transfers/overview): the steps of a transfer at each registrar and TLD.
- [What OpusDNS can do per registrar](/products/connected-registrars/registrars): the changes OpusDNS makes at each registrar until you transfer a domain.

## Related API Reference

- [`POST /v1/connect/registrars`](/api-reference#tag/connect/POST/v1/connect/registrars)
- [`GET /v1/connect/registrars`](/api-reference#tag/connect/GET/v1/connect/registrars)
- [`GET /v1/connect/registrars/{registrar_credential_id}`](/api-reference#tag/connect/GET/v1/connect/registrars/{registrar_credential_id})
- [`PUT /v1/connect/registrars/{registrar_credential_id}`](/api-reference#tag/connect/PUT/v1/connect/registrars/{registrar_credential_id})
- [`DELETE /v1/connect/registrars/{registrar_credential_id}`](/api-reference#tag/connect/DELETE/v1/connect/registrars/{registrar_credential_id})
- [`POST /v1/connect/registrars/{registrar_credential_id}/sync`](/api-reference#tag/connect/POST/v1/connect/registrars/{registrar_credential_id}/sync)
- [`GET /v1/connect/registrars/{registrar_credential_id}/sync`](/api-reference#tag/connect/GET/v1/connect/registrars/{registrar_credential_id}/sync)
- [`DELETE /v1/connect/registrars/{registrar_credential_id}/sync`](/api-reference#tag/connect/DELETE/v1/connect/registrars/{registrar_credential_id}/sync)
- [`GET /v1/connect/registrars/{registrar_credential_id}/sync/failures`](/api-reference#tag/connect/GET/v1/connect/registrars/{registrar_credential_id}/sync/failures)
