# Domain forwarding

Domain forwarding redirects visitors from one URL to another using HTTP
redirects. Common use cases include:

- **Brand consolidation** — redirect `old-brand.com` to `new-brand.com`
- **Non-www to www** — redirect `example.com` to `www.example.com`
- **HTTP to HTTPS** — force secure connections
- **Path redirects** — send `/blog` to a separate blog platform
- **Wildcard redirects** — catch all subdomains with `*.example.com`

OpusDNS automatically manages the DNS records required for forwarding. When
you enable a forward, the necessary A/AAAA records are created and marked as
protected so they cannot be accidentally modified.

## Prerequisites

<scalar-callout type="info">
A DNS zone for the hostname must exist on OpusDNS and the hostname must resolve through OpusDNS nameservers. See <a href="/products/dns/manage-zones">Manage zones</a>.
</scalar-callout>

## Set up a basic redirect

This example redirects all HTTPS traffic from `example.com` to
`www.example.com` with a 301 permanent redirect:

```bash
curl "$OPUSDNS_API_BASE/v1/domain-forwards" \
  --request POST \
  --header "X-Api-Key: $OPUSDNS_API_KEY" \
  --header "Content-Type: application/json" \
  --data '{
    "hostname": "example.com",
    "enabled": true,
    "https": {
      "redirects": [
        {
          "request_path": "/",
          "target_protocol": "https",
          "target_hostname": "www.example.com",
          "target_path": "/",
          "redirect_code": 301
        }
      ]
    }
  }'
```

Setting `enabled: true` immediately activates the forward and creates the
required DNS records. If you omit it (defaults to `false`), the configuration
is saved but no DNS records are created until you enable it.

### Redirect rule fields

Each redirect rule maps an incoming request to a target destination:

| Field | Type | Description |
| --- | --- | --- |
| `request_path` | `string` | The incoming path to match (e.g., `/`, `/blog`). |
| `target_protocol` | `string` | Where to redirect: `http` or `https`. |
| `target_hostname` | `string` | Destination hostname. |
| `target_path` | `string` | Destination path. |
| `redirect_code` | `integer` | HTTP status code for the redirect. |

### Choosing a redirect code

| Code | When to use |
| --- | --- |
| `301` | Permanent move. Search engines transfer SEO value. Browsers cache aggressively. |
| `302` | Temporary redirect. Use when the original URL will come back. |
| `307` | Temporary redirect that preserves the HTTP method (POST stays POST). |
| `308` | Permanent redirect that preserves the HTTP method. |

For most use cases, `301` is the right choice. Use `302` or `307` for
temporary redirects during migrations.

## Common scenarios

### Redirect HTTP to HTTPS

Force all HTTP traffic to use HTTPS. This requires both an HTTP and HTTPS
forward set:

```bash
curl "$OPUSDNS_API_BASE/v1/domain-forwards" \
  --request POST \
  --header "X-Api-Key: $OPUSDNS_API_KEY" \
  --header "Content-Type: application/json" \
  --data '{
    "hostname": "example.com",
    "enabled": true,
    "http": {
      "redirects": [
        {
          "request_path": "/",
          "target_protocol": "https",
          "target_hostname": "example.com",
          "target_path": "/",
          "redirect_code": 301
        }
      ]
    }
  }'
```

### Redirect an old domain to a new one

After a rebrand, redirect the old domain permanently:

```bash
curl "$OPUSDNS_API_BASE/v1/domain-forwards" \
  --request POST \
  --header "X-Api-Key: $OPUSDNS_API_KEY" \
  --header "Content-Type: application/json" \
  --data '{
    "hostname": "old-brand.com",
    "enabled": true,
    "https": {
      "redirects": [
        {
          "request_path": "/",
          "target_protocol": "https",
          "target_hostname": "new-brand.com",
          "target_path": "/",
          "redirect_code": 301
        }
      ]
    }
  }'
```

### Wildcard subdomain redirect

Catch all subdomains and redirect them to the main domain:

```bash
curl "$OPUSDNS_API_BASE/v1/domain-forwards" \
  --request POST \
  --header "X-Api-Key: $OPUSDNS_API_KEY" \
  --header "Content-Type: application/json" \
  --data '{
    "hostname": "*.example.com",
    "enabled": true,
    "https": {
      "redirects": [
        {
          "request_path": "/",
          "target_protocol": "https",
          "target_hostname": "example.com",
          "target_path": "/",
          "redirect_code": 301
        }
      ]
    }
  }'
```

## Managing forwards

### Add a path-specific redirect

After the initial setup, you can add redirects for specific paths using the
patch endpoint. This adds a `/blog` redirect without affecting existing rules:

```bash
curl "$OPUSDNS_API_BASE/v1/domain-forwards" \
  --request PATCH \
  --header "X-Api-Key: $OPUSDNS_API_KEY" \
  --header "Content-Type: application/json" \
  --data '{
    "ops": [
      {
        "op": "upsert",
        "redirect": {
          "request_protocol": "https",
          "request_hostname": "example.com",
          "request_path": "/blog",
          "target_protocol": "https",
          "target_hostname": "blog.example.com",
          "target_path": "/",
          "redirect_code": 301
        }
      }
    ]
  }'
```

### Temporarily disable a forward

Disabling removes the DNS records but keeps the configuration intact. This is
useful during migrations or debugging:

```bash
curl "$OPUSDNS_API_BASE/v1/domain-forwards/example.com/disable" \
  --request PATCH \
  --header "X-Api-Key: $OPUSDNS_API_KEY"
```

Re-enable when ready:

```bash
curl "$OPUSDNS_API_BASE/v1/domain-forwards/example.com/enable" \
  --request PATCH \
  --header "X-Api-Key: $OPUSDNS_API_KEY"
```

### Remove a forward

Delete the entire forward configuration and its DNS records:

```bash
curl "$OPUSDNS_API_BASE/v1/domain-forwards/example.com" \
  --request DELETE \
  --header "X-Api-Key: $OPUSDNS_API_KEY"
```

## Traffic analytics

OpusDNS tracks redirect traffic automatically. See
[Metrics & analytics](/products/domain-forwarding/metrics) for a full guide
on monitoring traffic by browser, platform, geography, referrer, and more.

## Related API Reference

- [`POST /v1/domain-forwards`](/api-reference#tag/domain_forward/POST/v1/domain-forwards)
- [`GET /v1/domain-forwards`](/api-reference#tag/domain_forward/GET/v1/domain-forwards)
- [`PATCH /v1/domain-forwards`](/api-reference#tag/domain_forward/PATCH/v1/domain-forwards)
- [`GET /v1/domain-forwards/metrics`](/api-reference#tag/domain_forward/GET/v1/domain-forwards/metrics)
