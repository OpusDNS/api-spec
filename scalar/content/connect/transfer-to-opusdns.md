# Move a connected domain to OpusDNS

If your organization holds a domain through a
[connected registrar account](/products/connected-registrars/connect), you can
transfer it to OpusDNS without asking that registrar for the auth code. Leave
`auth_code` out of the transfer request: when the transfer runs, OpusDNS
prepares the domain at the connected registrar itself.

## When this applies

OpusDNS prepares the domain at the connected registrar when:

- your organization holds the domain through **exactly one** connected account,
  and
- OpusDNS isn't the domain's registrar yet: no transfer of it to OpusDNS is
  under way or done.

Otherwise the request is an ordinary [transfer](/products/domains/transfer): a
TLD that needs an auth code refuses a request without one with
`422 ERROR_POLICY_VALIDATION`. If the domain shows up in two connected accounts,
send the auth code yourself.

## Start the transfer

Send the same request as for any [transfer](/products/domains/transfer), without
`auth_code`:

```bash
curl "$OPUSDNS_API_BASE/v1/domains/transfer" \
  --request POST \
  --header "X-Api-Key: $OPUSDNS_API_KEY" \
  --header "Content-Type: application/json" \
  --data '{
    "name": "example.com",
    "contacts": {
      "registrant": "contact_01h45ytscbebyvny4gc8cr8ma2",
      "admin": "contact_01h45ytscbebyvny4gc8cr8ma2",
      "tech": "contact_01h45ytscbebyvny4gc8cr8ma2",
      "billing": "contact_01h45ytscbebyvny4gc8cr8ma2"
    },
    "renewal_mode": "renew"
  }'
```

Contacts, period, nameservers and monitoring work as described in
[Transfer a domain](/products/domains/transfer).

## What OpusDNS does at the connected registrar

![Swimlane: you send the transfer request; OpusDNS checks the statuses, removes the transfer lock and fetches the auth code at your current registrar, requests the transfer at the registry and approves it at your current registrar; the registry moves the domain into your OpusDNS account.](/images/connected-domain-transfer.svg)

The usual order for a gTLD, such as `.com`. gTLD transfers follow ICANN's
Transfer Policy, which binds every ICANN-accredited registrar and gTLD registry,
so these steps are the same at every registry. ccTLD registries set their own
rules, and their steps often differ. Which steps apply also depends on your
registrar: [Transfers](/transfers/overview) lists them for every registrar and
TLD.

Once the request has passed every check and the price is reserved, and before
the transfer goes to the registry, OpusDNS:

1. **Reads the domain at the connected registrar.** If the registrar reports
   `serverTransferProhibited`, `redemptionPeriod`, `pendingDelete`,
   `pendingRestore` or `pendingTransfer`, the transfer stops with
   `409 ERROR_DOMAIN_TRANSFER_NOT_ALLOWED`, and `prohibiting_statuses` lists
   them. Nothing has changed at the registrar at that point.
2. **Removes the transfer lock, where it sees one.** If the registrar doesn't
   report whether the domain is locked, OpusDNS changes nothing. If it is
   locked, remove the lock at the registrar yourself, because a registry
   refuses to transfer a locked domain.
3. **Fetches the auth code, where the TLD needs one.** If you send `auth_code`
   anyway, OpusDNS uses yours and only removes the lock.

If the transfer request fails and the registry is known to hold no transfer of
the domain, OpusDNS sets the transfer lock it removed again. A transfer that is
rejected or cancelled later leaves the lock off: set it again at the registrar.

## What depends on the registrar and the TLD

| Step | Depends on |
| --- | --- |
| Remove the transfer lock | The TLD: not every registry has a transfer lock. The registrar: OpusDNS removes only a lock the registrar reports. |
| Fetch the auth code | The TLD: some need none, such as `.uk`. |
| Approve the transfer | The TLD: some complete a transfer without approval. The registrar: whether it can approve through OpusDNS. |
| Push the domain (`.uk`) | The TLD: `.uk` transfers by push instead of request and approval. The registrar: whether it can push through OpusDNS. |

### Approval

For TLDs where the losing registrar can approve a transfer, OpusDNS then asks
the connected registrar to approve it, so the transfer doesn't have to wait for
the pending period to end. If that registrar can't approve it through OpusDNS,
the transfer completes as any other: see the
[transfer timeline](/products/domains/transfer#transfer-timeline).

### .uk domains

A `.uk` transfer needs no auth code. OpusDNS records the transfer and asks the
connected registrar to push the domain to OpusDNS's Nominet tag, `OPUSDNS`. If
that registrar can't push it through OpusDNS, push it to `OPUSDNS` there
yourself. See [.uk operations](/products/tld-operations/uk).

## When the connected registrar refuses

| Response | Meaning | What to do |
| --- | --- | --- |
| `409 ERROR_DOMAIN_TRANSFER_NOT_ALLOWED` with `prohibiting_statuses` | A status prevents the transfer. | Resolve it at the registrar, then try again. |
| `409 ERROR_DOMAIN_TRANSFER_NOT_ALLOWED` with `registrar` | The registrar refused to report the domain, remove the lock or hand out the auth code. `reason` says which, `registrar` names the registrar. | Resolve it at the registrar. If it refused to hand out the auth code, send `auth_code` yourself. |
| `409 ERROR_REGISTRAR_BLOCKED` | A setting on the domain at the registrar refuses the change. `blocker` names it, for example `whois_privacy`. | Change the setting at the registrar (for `whois_privacy`, turn WHOIS privacy off), then try again. |
| `422 ERROR_REGISTRAR_CREDENTIAL_REJECTED` | The registrar rejected the connected account's login details or refused access, for example because OpusDNS's IP address isn't allowed. | [Update the login details](/api-reference#tag/connect/PUT/v1/connect/registrars/{registrar_credential_id}), then try again. |
| `503 ERROR_DOMAIN_REGISTRAR_UNAVAILABLE` | The registrar couldn't be reached. | Try again after the time in `Retry-After`. |

## Related API Reference

- [`POST /v1/domains/transfer`](/api-reference#tag/domain/POST/v1/domains/transfer)
- [`GET /v1/connect/registrars`](/api-reference#tag/connect/GET/v1/connect/registrars)
- [`PUT /v1/connect/registrars/{registrar_credential_id}`](/api-reference#tag/connect/PUT/v1/connect/registrars/{registrar_credential_id})
