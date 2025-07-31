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

### Links

- [Main website](https://www.opusdns.com/)
- [Developer docs](https://developers.opusdns.com/)
