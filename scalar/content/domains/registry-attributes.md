# Registry-specific attributes

Some TLDs require additional information about contacts beyond the standard
fields like name, address, and email. These are called **registry-specific
attributes** — things like entity type, tax IDs, nexus categories, or legal
status declarations mandated by the registry operator.

The OpusDNS API handles these through **contact attribute sets**: reusable
bundles of key–value pairs that you create once and link to one or more
contacts.

## Flow overview

1. Query the TLD specification to discover which attributes are required.
2. Create a contact attribute set with the correct values.
3. Link the attribute set to a contact.

## 1. Discover required attributes

Use the TLD specifications endpoint to check whether a TLD requires
registry-specific attributes. The `contacts.possible_attributes` array lists
every attribute the registry accepts or requires.

```bash
curl "$OPUSDNS_API_BASE/v1/tlds/us" \
  --header "X-Api-Key: $OPUSDNS_API_KEY"
```

The response includes a `contacts.possible_attributes` array. Each entry is a
`ContactAttributeDefinition`:

```json
{
  "contacts": {
    "possible_attributes": [
      {
        "key": "US_NEXUS_CATEGORY",
        "type": "enum",
        "values": ["C11", "C12", "C21", "C31", "C32"],
        "required": true,
        "contact_roles": ["registrant"]
      },
      {
        "key": "US_APP_PURPOSE",
        "type": "enum",
        "values": ["P1", "P2", "P3", "P4", "P5"],
        "required": true,
        "contact_roles": ["registrant"]
      },
      {
        "key": "US_NEXUS_COUNTRY_CODE",
        "type": "country_code",
        "required": true,
        "contact_roles": ["registrant"],
        "conditions": [
          {
            "field": "US_NEXUS_CATEGORY",
            "operator": "in",
            "value": ["C31", "C32"]
          }
        ]
      }
    ]
  }
}
```

### Attribute definition fields

| Field | Description |
| --- | --- |
| `key` | Unique attribute identifier (e.g. `US_NEXUS_CATEGORY`, `DE_CONTACT_TYPE`) |
| `type` | Data type — `enum`, `string`, `boolean`, `datetime`, `integer`, or `country_code` |
| `values` | Allowed values when `type` is `enum` |
| `required` | Whether the attribute is required when its conditions are met |
| `contact_roles` | Roles this attribute applies to (e.g. `registrant`, `admin`). `null` means all roles |
| `conditions` | Conditions that must all be true for this attribute to apply. `null` means always active |

### Conditional attributes

Some attributes only apply when another attribute has a specific value. For
example, `US_NEXUS_COUNTRY_CODE` is only required when `US_NEXUS_CATEGORY` is
`C31` or `C32`. Conditions use operators like `equals`, `not_equals`, `in`, and
`not_in`.

## 2. Create an attribute set

Once you know which attributes are needed, create a contact attribute set with
`POST /v1/contacts/attribute-sets`. Each set is scoped to a single TLD.

```bash
curl "$OPUSDNS_API_BASE/v1/contacts/attribute-sets" \
  --request POST \
  --header "X-Api-Key: $OPUSDNS_API_KEY" \
  --header "Content-Type: application/json" \
  --data '{
    "label": "US registrant - personal",
    "tld": "us",
    "attributes": {
      "US_NEXUS_CATEGORY": "C11",
      "US_APP_PURPOSE": "P1"
    }
  }'
```

The response includes the created set with its ID:

```json
{
  "contact_attribute_set_id": "cas_01j5...",
  "organization_id": "org_01h4...",
  "label": "US registrant - personal",
  "tld": "us",
  "attributes": {
    "US_NEXUS_CATEGORY": "C11",
    "US_APP_PURPOSE": "P1"
  },
  "linked_contacts": 0,
  "created_on": "2025-01-15T10:30:00Z",
  "updated_on": "2025-01-15T10:30:00Z"
}
```

The `label` must be unique per TLD within your organization. The `tld` field
accepts formats like `us`, `.us`, or `US` — it is normalized automatically.

The API validates that the provided attribute keys are valid for the given TLD.
If the TLD has no `possible_attributes` or you supply an invalid key, the
request is rejected.

## 3. Link the attribute set to a contact

After creating the set, link it to a contact with
`PATCH /v1/contacts/{contact_id}/link/{contact_attribute_set_id}`.

```bash
curl "$OPUSDNS_API_BASE/v1/contacts/contact_01h45ytscbebyvny4gc8cr8ma2/link/cas_01j5..." \
  --request PATCH \
  --header "X-Api-Key: $OPUSDNS_API_KEY"
```

A contact can only have one attribute set linked per TLD. Attempting to link a
second set for the same TLD returns a `409` conflict.

Once linked, the attribute values are automatically applied when the contact is
used for domain operations on that TLD.

## List attribute sets

Retrieve all attribute sets in your organization with
`GET /v1/contacts/attribute-sets`. You can filter by `tld` or `label`.

```bash
curl --get "$OPUSDNS_API_BASE/v1/contacts/attribute-sets" \
  --header "X-Api-Key: $OPUSDNS_API_KEY" \
  --data-urlencode "tld=us"
```

## Update an attribute set

Update the label of an existing attribute set with
`PATCH /v1/contacts/attribute-sets/{contact_attribute_set_id}`.

```bash
curl "$OPUSDNS_API_BASE/v1/contacts/attribute-sets/cas_01j5..." \
  --request PATCH \
  --header "X-Api-Key: $OPUSDNS_API_KEY" \
  --header "Content-Type: application/json" \
  --data '{
    "label": "US registrant - business"
  }'
```

## Delete an attribute set

Remove an attribute set with
`DELETE /v1/contacts/attribute-sets/{contact_attribute_set_id}`.

```bash
curl "$OPUSDNS_API_BASE/v1/contacts/attribute-sets/cas_01j5..." \
  --request DELETE \
  --header "X-Api-Key: $OPUSDNS_API_KEY"
```

## Supported TLDs and attributes

The following TLDs currently require or accept registry-specific attributes.
Use `GET /v1/tlds/{tld}` for the authoritative, up-to-date list.

| TLD | Registry | Key attributes | Roles |
| --- | --- | --- | --- |
| `.us` | GoDaddy (Neustar) | `US_NEXUS_CATEGORY`, `US_APP_PURPOSE`, `US_NEXUS_COUNTRY_CODE` | registrant |
| `.de` | DENIC | `DE_CONTACT_TYPE` | registrant |
| `.eu` | EURid | `eurid:type` | registrant, tech |
| `.be` | DNS Belgium | `dnsbe:type` | registrant, tech |
| `.fr` | AFNIC | `AFNIC_CONTACT_TYPE`, `AFNIC_PP_FIRST_NAME`, `AFNIC_PM_LEGAL_STATUS`, `AFNIC_PM_SIREN`, and more | registrant, admin, tech |
| `.re`, `.pm`, `.wf`, `.yt`, `.tf` | AFNIC | Same as `.fr` | registrant, admin, tech |
| `.uk` | Nominet | `NOMINET_CONTACT_TYPE`, `NOMINET_CO_NO`, `NOMINET_TRAD_NAME` | registrant |
| `.ca` | CIRA | `CIRA_CPR` | registrant, admin |
| `.nl` | SIDN | `SIDN_LEGAL_FORM`, `SIDN_LEGAL_REG_NO` | registrant, admin, tech |
| `.ro` | ROTLD | `ROTLD_CONTACT_TYPE`, `ROTLD_CNP_FISCAL_CODE`, `ROTLD_ID_NUMBER`, `ROTLD_REGISTRATION_NUMBER` | registrant, admin, tech, billing |

### Example: .fr registration (AFNIC)

AFNIC TLDs distinguish between natural persons (`PP`) and legal entities
(`PM`). A natural person requires `AFNIC_CONTACT_TYPE` and
`AFNIC_PP_FIRST_NAME`. A legal entity requires `AFNIC_PM_LEGAL_STATUS` and,
depending on the status, identifiers like `AFNIC_PM_SIREN` or association
details.

```bash
curl "$OPUSDNS_API_BASE/v1/contacts/attribute-sets" \
  --request POST \
  --header "X-Api-Key: $OPUSDNS_API_KEY" \
  --header "Content-Type: application/json" \
  --data '{
    "label": "FR registrant - company",
    "tld": "fr",
    "attributes": {
      "AFNIC_CONTACT_TYPE": "PM",
      "AFNIC_PM_LEGAL_STATUS": "company",
      "AFNIC_PM_SIREN": "123456789"
    }
  }'
```

### Example: .de registration (DENIC)

```bash
curl "$OPUSDNS_API_BASE/v1/contacts/attribute-sets" \
  --request POST \
  --header "X-Api-Key: $OPUSDNS_API_KEY" \
  --header "Content-Type: application/json" \
  --data '{
    "label": "DE registrant - person",
    "tld": "de",
    "attributes": {
      "DE_CONTACT_TYPE": "PERSON"
    }
  }'
```

## Related API Reference

- [`GET /v1/tlds/{tld}`](/api-reference#tag/tld/GET/v1/tlds/{tld})
- [`POST /v1/contacts/attribute-sets`](/api-reference#tag/contact/POST/v1/contacts/attribute-sets)
- [`GET /v1/contacts/attribute-sets`](/api-reference#tag/contact/GET/v1/contacts/attribute-sets)
- [`PATCH /v1/contacts/{contact_id}/link/{contact_attribute_set_id}`](/api-reference#tag/contact/PATCH/v1/contacts/{contact_id}/link/{contact_attribute_set_id})
