# FAQ

Short answers. Each one links to the page that has the detail.

## Getting connected

**Do I need an API key?**
No. The MCP endpoint uses OAuth in your browser and does not accept API keys.
API keys are for direct HTTP calls. See
[Connect your client](/mcp-server/connect).

**Which clients work?**
Anything that speaks remote Streamable HTTP: Claude Code, Claude desktop and
web, Cursor, VS Code, ChatGPT, the OpenAI Responses API. Clients that only speak
stdio need a bridge. ChatGPT is the one exception worth knowing before you
start: it only shows the tools in developer mode, which OpenAI does not offer on
the free plan. See
[Cursor, VS Code, and ChatGPT](/mcp-server/connect/editors).

**Is there a sandbox?**
Yes — `https://sandbox.opusdns.com/mcp`. Separate account, separate sign-in,
free, and fully isolated from production. Start there.

**Is there an `mcp.opusdns.com`?**
No. That hostname does not resolve. The endpoint lives on the API host:
`https://api.opusdns.com/mcp`.

**Does it cost anything to connect?**
No. Registrations, renewals and transfers cost what they always cost; the
connection itself does not.

## What it can do

**Can the model delete or transfer my domains without asking?**
No. Every write, every cost-bearing operation and every deletion or transfer is
blocked before it reaches the OpusDNS API and needs your explicit approval. The
gate is enforced by the server, not by instructions to the model, so a model
cannot talk its way past it. See
[Approvals and confirmations](/mcp-server/approvals).

**How do I know which tools only read?**
Each tool is annotated, and your client shows it. Six of the nine are read-only;
`call_operation`, `bulk_submit` and `job_batch_control` are the three that can
change things. The full list is in the
[Tools reference](/mcp-server/tools).

**How many domains can one bulk change touch?**
1,000. That is the Jobs limit on instances in a single command, and a batch
built from a selector is one command. Split the selector and submit more than
one batch. See [Recipes](/mcp-server/recipes).

**Can it act on my customer's organization?**
Yes, if that organization is below yours. Pass `organizationId` on every call.
It confers no reach your own credentials did not already have. See
[Sub-organizations](/mcp-server/sub-organizations).

**Does it support prompts, resources or sampling?**
No. The server declares tools only.

## While it is working

**Why is it asking me to approve the same thing twice?**
Because the action changed between the two attempts. The approval is bound to
the exact action — including the resolved list of domains for a bulk operation —
so a selector that now matches a different set is a different action. It is also
what happens when an approval expires. See
[Approvals and confirmations](/mcp-server/approvals).

**What happens to a running batch if I close the conversation?**
Nothing. The batch runs inside OpusDNS Jobs and finishes on its own. Reconnect
later and ask for its status by `batch_id`, or steer it from the
[dashboard](/automation/jobs/managing-batches).

**A result came back marked `"truncated": true`. Now what?**
Ask for less — a narrower filter or fewer fields. Retrying the same call cuts it
in the same place. See [Results and errors](/mcp-server/results).

## Data and access

**Does OpusDNS see my prompts?**
No. OpusDNS sees the tool calls your client makes, not the conversation around
them. What your AI provider sees is between you and them. See
[Data handling](/mcp-server/data-handling).

**How do I cut off access?**
Removing the connector stops your client from calling. Signing out invalidates
the session. Disabling the account is the immediate, complete answer. See
[Disconnecting](/mcp-server/connect/disconnect).

**Should I use this or the REST API?**
MCP for interactive work with a person in the loop; the API for unattended
automation, because the approval gate is not optional here. See
[MCP or the REST API?](/mcp-server/mcp-or-api).
