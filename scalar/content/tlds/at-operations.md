# .at domain operations

`.at` domains are managed by [nic.at](https://www.nic.at), the registry for
Austria. The OpusDNS API provides a dedicated withdraw endpoint for `.at`
domains.

## Withdraw

The withdraw operation removes a `.at` domain from the registry. This is
different from a standard deletion — it signals to the registry that the
registrar is withdrawing the domain.

```bash
curl "$OPUSDNS_API_BASE/v1/domains/tld-specific/at/example.at/withdraw" \
  --request POST \
  --header "X-Api-Key: $OPUSDNS_API_KEY" \
  --header "Content-Type: application/json" \
  --data '{
    "zone_delete": true
  }'
```

### Request fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `zone_delete` | `boolean` | Yes | Whether to inform the registry that the DNS zone for the domain has already been deleted. |

### Response

```json
{
  "name": "example.at",
  "success": true
}
```

> **Note:** The `zone_delete` field informs nic.at whether the nameservice for
> the domain has already been stopped. This is part of nic.at's registry
> protocol.

## Domain holder verification

Under the Austrian NIS2 law (NISG 2026), nic.at can ask the registrar to verify the holder of a `.at` domain.
It sends a "Domain holder verification required" message with a date, and a reminder before that date.

1. OpusDNS opens a [verification case](/products/contacts/verification-cases) on the domain, with the claims `name`, `address` and `email` and nic.at's date as the `verification` deadline. The domain and its registrant contact get the `VERIFICATION_REQUIRED` status tag, and a `VERIFICATION` event is logged.
2. You [attest](/products/contacts/attestation-workflow) the registrant contact's name (or legal entity for an organisation), address and email.
3. Once all three are verified, OpusDNS sends nic.at a verification report for each nic.at handle of the contact. The evidence counts for three years.
4. The case closes when nic.at reports "Domain holder verification successful".

If the holder is not verified in time, nic.at suspends the domain (`serverHold`) and later revokes it.
See nic.at's [NISG 2026 FAQ](https://www.nic.at/en/how-at-works/faqs/nis2-nisg2026-en) for its deadlines.

## Related API Reference

- [`POST /v1/domains/tld-specific/at/{domain_reference}/withdraw`](/api-reference#tag/domain-tld-specific/POST/v1/domains/tld-specific/at/{domain_reference}/withdraw)
