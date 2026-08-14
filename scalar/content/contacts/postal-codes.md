# Postal codes

The `postal_code` of a contact is validated against the country's published
postal format and stored in that country's canonical notation. Validation runs
when the contact is written — with `POST /v1/contacts`, or with the
`contact_create` and `contact_create_bulk`
[job commands](/automation/jobs/dns-commands) — so a postal code a registry
would refuse fails immediately, with the field named, instead of failing at the
registry after the contact has been stored.

## Validated countries

An invalid postal code is refused for these countries:

| Country | Example format |
| --- | --- |
| `AT` Austria | `1010` |
| `BE` Belgium | `4000` |
| `CA` Canada | `H3Z 2Y7` |
| `CH` Switzerland | `2544` |
| `CZ` Czechia | `100 00` |
| `DE` Germany | `26133` |
| `DK` Denmark | `8660` |
| `ES` Spain | `28039` |
| `FR` France | `33380` |
| `GB` United Kingdom | `EC1Y 8SY` |
| `IT` Italy | `00144` |
| `LU` Luxembourg | `4750` |
| `NL` Netherlands | `1234 AB` |
| `NO` Norway | `0025` |
| `SE` Sweden | `11455` |
| `US` United States | `95014` |

Contacts in any other country accept whatever you submit. One rule applies
everywhere: a postal code containing non-ASCII characters is rejected for every
country, because it cannot be transmitted to a registry.

## Rejected postal codes

An invalid postal code returns `422` with a `request-validation-failed` problem
that names the field, so it can be mapped back to a form field:

```json
{
  "type": "request-validation-failed",
  "title": "Request validation error.",
  "status": 422,
  "errors": [
    {
      "type": "invalid_postal_code",
      "loc": ["body", "postal_code"],
      "msg": "'93053' is not a valid postal code for country 'NL', expected a format like '1234 AB'",
      "input": "93053",
      "ctx": {
        "message": "'93053' is not a valid postal code for country 'NL', expected a format like '1234 AB'"
      }
    }
  ]
}
```

`type` is `invalid_postal_code` — a stable key for this rejection — and `msg`
quotes the value you submitted together with an example of the expected format.

## What gets stored

Postal codes are canonicalized on write, so the stored value can differ from
what you submitted:

| Submitted | Country | Stored |
| --- | --- | --- |
| `1234AB` | `NL` | `1234 AB` |
| `1234 ab` | `NL` | `1234 AB` |
| `D-26133` | `DE` | `26133` |
| `NL-1234AB` | `NL` | `1234 AB` |
| `12345 6789` | `US` | `12345-6789` |
| `100 00` | `CZ` | `100 00` |

- Dutch postal codes are stored in the official national notation — four
  digits, a space, two upper-case letters. Both `1234AB` and `1234 ab` are
  accepted.
- The cross-border country prefix (`D-`, `NL-`, `F-`, …) is not part of a postal
  code and is stripped. It is only stripped when it matches the contact's own
  country: `F-26133` on a `DE` contact keeps the `F-` and is rejected as an
  invalid German postal code.
- US ZIP+4 is stored in the hyphenated form.
- Where a space is part of the national format, as in `CZ` and `GB`, it is kept.

## Registry-specific formats

Some registries require a different form than the national notation — SIDN, for
example, requires a `.nl` postal code without the space. OpusDNS applies those
rules when it builds the registry request. Store and submit the national format
and never pre-format a postal code for a registry; the value you read back from
the API is always the canonical national form.

## Imported contacts

Contacts mirrored from another registrar or registry — domain import,
transfer-in, and registrar sync — are canonicalized where possible but are
never rejected for their postal code format, so an off-format value held at the
losing registrar cannot fail an import.

## Registry rejections

A registry can still refuse an address for its own reasons. Where the registry
reports which field was at fault, that text is included in the `detail` of the
resulting problem, after the generic result code:

```
2308: Validation of the transaction failed. Contact address group: A postcode has to be four numbers and two letters.
```

## Errors

| Code | Status | Meaning |
| --- | --- | --- |
| `invalid_postal_code` | 422 | The postal code is not valid for the contact's country. Returned as an error `type` inside a `request-validation-failed` problem, with `loc` naming `postal_code`. |
| `ERROR_REGISTRY_POLICY` | 422 | The registry rejected the request. `detail` carries the registry's field-level message where the registry provides one. |

## Related API Reference

- [`POST /v1/contacts`](/api-reference#tag/contact/POST/v1/contacts)
- [`GET /v1/contacts`](/api-reference#tag/contact/GET/v1/contacts)
- [`GET /v1/contacts/{contact_id}`](/api-reference#tag/contact/GET/v1/contacts/{contact_id})
