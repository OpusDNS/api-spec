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

[developers.opusdns.com](https://developers.opusdns.com/) is served by
[Scalar Docs 2.0](https://scalar.com/products/docs/getting-started) from
[`scalar/`](./scalar/) in this repository.

### How publishing works

**Merging to `main` publishes.** Scalar's GitHub integration builds `main`; there
is no deploy workflow in this repo and no Scalar token. The custom domain is
declared in the config itself
([`scalar/scalar.config.json`](./scalar/scalar.config.json), `siteConfig.customDomain`),
not in CI. Nothing in the repository shows this connection, so it is written down
here: if publishing ever stops, the integration in the Scalar dashboard is where
to look.

**Every PR gets a preview.** The same integration builds each pull request and
posts a throwaway URL as a comment (`…--opusdns-api-spec.apidocumentation.com`),
so you can read a change as rendered before merging it. Use it — a bad `filepath`
or an icon name Scalar does not know renders as nothing rather than failing, and
merging is what makes that public.

The preview does not, however, cover the two sync workflows' own PRs: GitHub
suppresses workflow runs for PRs opened with `GITHUB_TOKEN`, so those workflows
validate the config inline before opening theirs.

### Layout

| Path | What |
| --- | --- |
| `scalar/scalar.config.json` | The whole site: tabs, sidebar routes, theme. Every page's title, icon and URL live here — content files carry no frontmatter |
| `scalar/content/` | Guide Markdown |
| `scalar/content/tld-knowledge-base/` | **Generated** from `OpusDNS/tld-specifications` by `scripts/generate_tld_knowledge_base.py` |
| `scalar/content/mcp-server/` | **Generated** in `OpusDNS/opusdns-mcp` and mirrored here by `scripts/sync_mcp_docs.py` |
| `src/openapi.yaml` | The spec. The API Reference tab is fetched by Scalar from the raw GitHub URL at build time, so it is eventually consistent rather than bundled |

Two workflows write `scalar.config.json`: **Generate TLD Knowledge Base** and
**Sync MCP Server Docs**. Each rebuilds only the subtree it owns and both
serialise identically (`json.dumps(..., indent=2, ensure_ascii=False)` plus a
trailing newline), so hand edits should match that style — otherwise the next bot
PR reformats your lines.

### Local preview

```bash
npm install
npm --prefix scalar install
npm run docs:preview
# → http://localhost:7970

npm --prefix scalar run check   # validate scalar.config.json
```

Run `check` before pushing anything that touches the config. A `filepath`
pointing at a file that does not exist, or an icon name Scalar does not know,
renders as nothing — and merging is what publishes.

### The legacy `docs/` folder

[`docs/`](./docs/) is a static GitHub Pages site that embeds
[`@scalar/api-reference`](https://github.com/scalar/scalar). GitHub Pages is
still configured for it, but DNS points at Scalar, so **it is not what serves the
domain**. Treat it as vestigial; do not put content there.

### Links

- [Main website](https://www.opusdns.com/)
- [Developer docs](https://developers.opusdns.com/)
