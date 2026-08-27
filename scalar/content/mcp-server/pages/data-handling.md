# Data handling

Connecting an MCP client changes who sees your data. This page is what to hand
whoever approves the connector.

## Where your data goes

```
your MCP client  →  api.opusdns.com/mcp  →  the OpusDNS API
                 ←  results, into the model's context
```

A tool result travels back into the context of the AI client you chose. From
that point your **AI vendor's terms** govern what happens to it — how long it is
retained, whether it is used for training, who at that vendor can see it.
OpusDNS does not run the model, is not party to that relationship, and cannot
control retention on the other side of it.

<scalar-callout type="warning">
This is the choice that matters most, and it is yours rather than ours: which
client you connect. Everything below is about the OpusDNS side of the line.
</scalar-callout>

## What the agent can reach

Everything your own account can reach — and, on a call that carries
[`organizationId`](/mcp-server/sub-organizations), everything the named
sub-organization can. `call_operation` covers the whole API, so that includes
the contact endpoints — **registrant names, postal addresses,
phone numbers and email addresses can appear in a tool result**, and therefore
in the model's context, whenever the agent reads a contact.

Two tools exist partly to keep that surface small:

- `portfolio_summary` answers "how big, what is expiring" with counts only.
- `portfolio_query` returns just the fields you name, so listing domains does not
  drag every attribute along with them.

Ask for the narrowest thing that answers the question, and expect an agent left
to its own devices to read more than you would have.

<scalar-callout type="danger">
If you are subject to the GDPR, treat the AI vendor as a processor of any
registrant data your agent reads, and check that your own agreements cover it
before connecting production. The <a href="/mcp-server">sandbox</a> is a separate
account with its own data, which is the place to try things out.
</scalar-callout>

## What OpusDNS keeps

The MCP server is a thin layer in front of the API, and it is deliberately
uninteresting as a store:

| | |
| --- | --- |
| Logged per request | The request line only — method, path, status code, duration, source address and a request ID |
| Not logged | Domain names, request bodies, response bodies, and the arguments you pass a tool — with one exception: the optional label you give a bulk submission is recorded, so a batch can be traced back |
| Kept between calls | Nothing about your domains. The one exception is an approval marker, so an approval cannot be used twice; it expires within minutes and carries no domain names and no request contents |
| Sent to third parties | Nothing. The server talks to the OpusDNS API, the OpusDNS identity provider, and its own store for the approval marker above — all OpusDNS infrastructure |

Calls the server makes on your behalf arrive at the OpusDNS API as ordinary API
requests, and appear in your account's request history like any other client's.

## Sign-in

The client authenticates you with OAuth against the OpusDNS identity provider
and holds the resulting credentials itself, on your machine. The MCP server never
stores them, and it accepts no API keys. Ending that access is
[Disconnecting](/mcp-server/connect/disconnect).

## Policies

Processing of personal data by OpusDNS is covered by the
[OpusDNS privacy policy](https://www.opusdns.com/privacy-policy). Connecting the
MCP server introduces no separate processor: the tools reach the same OpusDNS API
your account already uses, with your own permissions.

## Related

- [Results and errors](/mcp-server/results) — what a tool hands back, and how
  much of it
- [Approvals and confirmations](/mcp-server/approvals) — what an agent may
  *do*, as against what it may see
- [Roles &amp; permissions](/account/organizations/roles) — an MCP session
  inherits your own permissions, no more
- [Disconnecting](/mcp-server/connect/disconnect)
