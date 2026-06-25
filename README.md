# OpusDNS API Types, Specification and Constants

This repository contains the [OpenAPI specification](https://swagger.io/specification/) for the backend API of [OpusDNS](https://www.opusdns.com/) along with generated TypeScript types and constants.

## Installation

```bash
npm install @opusdns/api
```

## Usage

Import the types, constants, and schemas you need directly from the package:

```typescript
import { 
  Domain, 
  DOMAIN_AVAILABILITY_STATUS, 
  paths, 
  operations, 
  components,
  GET_Domains_Request,
  POST_Domains_Request_Body,
  ALLOCATION_METHOD_TYPE
} from '@opusdns/api';
```

### Available Exports

#### Schema Types
- `paths` - OpenAPI paths interface
- `operations` - OpenAPI operations interface  
- `components` - OpenAPI components interface

#### Domain Types
- `Domain` - Domain object type
- `DomainCreate` - Domain creation type
- `DomainUpdate` - Domain update type
- `DomainRenewRequest` - Domain renewal type

#### Request/Response Types
- `GET_Domains_Request` - GET domains request type
- `POST_Domains_Request_Body` - POST domains request body type
- `GET_Domains_Response` - GET domains response type

#### Constants
- `DOMAIN_AVAILABILITY_STATUS` - Domain availability status enum
- `ALLOCATION_METHOD_TYPE` - Allocation method type enum
- `DOMAIN_STATUS` - Domain status enum
- `CONTACT_ROLE_TYPE` - Contact role type enum

#### DNS Types
- `DnsZone` - DNS zone type
- `DnsRecord` - DNS record type
- `DnsRrset` - DNS RRset type

#### Organization Types
- `Organization` - Organization type
- `User` - User type
- `Contact` - Contact type

## Documentation

There are two documentation setups in this repository:

### Legacy: GitHub Pages API Reference (production)

The `docs/` folder is a static site that embeds
[`@scalar/api-reference`](https://github.com/scalar/scalar) and is published
via GitHub Pages on [developers.opusdns.com](https://developers.opusdns.com/).
Source of truth: [`docs/index.html`](./docs/index.html). Do **not** put
guides/Markdown content here.

### Scalar Docs 2.0 (local preview)

A more sophisticated documentation setup using
[Scalar Docs 2.0](https://scalar.com/products/docs/getting-started) is
contained in [`scalar/`](./scalar/). The Scalar project config lives at
[`scalar/scalar.config.json`](./scalar/scalar.config.json), guide content lives
under [`scalar/content/`](./scalar/content/), and the API reference is
fetched from the raw GitHub copy of [`src/openapi.yaml`](./src/openapi.yaml).

To preview locally:

```bash
npm install
npm --prefix scalar install
npm run docs:preview
# → http://localhost:7970
```

### Links

- [Main website](https://www.opusdns.com/)
- [Developer docs](https://developers.opusdns.com/)
