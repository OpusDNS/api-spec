# Sub-organizations

An MCP session signs you in as yourself, so by default every tool acts on your
own organization. If your account is a parent of other organizations — the usual
reseller shape — pass `organizationId` to act on one of them instead:

```json
{
  "selector": { "expires_in_30_days": true },
  "fields": ["name", "expires_on"],
  "organizationId": "organization_01h45ytscbebyvny4gc8cr8ma2"
}
```

Every tool that reaches the API takes it: `call_operation`, `portfolio_summary`,
`portfolio_query`, `bulk_preview`, `bulk_submit`, `job_batch_status` and
`job_batch_control`. `search_operations` and `describe_operation` do not — they
read the API catalog and never touch your data.

## Finding the id

It is the organization's TypeID, `organization_` followed by 26 characters. The
agent can look it up for you — ask it to list your organizations, and it will
call the organizations list operation through `call_operation`.

<scalar-callout type="warning">
It is the <strong>id</strong>, not the organization's name. A name is not
accepted and is rejected before anything is sent.
</scalar-callout>

## What you can reach

Only organizations below your own. The target must be a descendant of the
account you signed in as; OpusDNS enforces that and answers `403` otherwise, so
the parameter grants nothing your account did not already have. Permissions are
unchanged too: your role in that organization still decides what you may do
there.

## It applies per call, not per session

There is no "switch organization and stay there". Each tool call carries its own
`organizationId`, and a call without one acts on your own organization.

<scalar-callout type="danger">
This matters most for bulk. <code>bulk_preview</code> and
<code>bulk_submit</code> resolve the selector separately, so a preview against a
sub-organization followed by a submit without the parameter would preview one
set of domains and submit against another. Keep the parameter identical across
both calls.
</scalar-callout>

## Approvals name the organization

An approval prompt for a scoped action says which organization it is for:

```
Approve: domain_update_bulk on 412 domain(s) matching tld=["com"] (POST /v1/jobs)? Risk: writes data. Acting on sub-organization organization_01h45ytscbebyvny4gc8cr8ma2.
```

The approval is bound to it, exactly as it is bound to the path, the query and
the body. Approve an action for one organization and the same action aimed at a
sibling — or at your own account — does not match, and you are asked again. See
[Approvals and confirmations](/mcp-server/approvals).

## Related

- [Tool workflows](/mcp-server/tool-workflows)
- [Bulk operations with Jobs](/mcp-server/bulk-operations)
- [Organizations](/account/organizations/overview),
  [Roles &amp; permissions](/account/organizations/roles)
