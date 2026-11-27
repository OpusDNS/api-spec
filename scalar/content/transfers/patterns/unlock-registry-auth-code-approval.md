# Unlock, auth code set by the registry, and approval

The registry generates the auth code. Your current registrar can't choose it. OpusDNS requests the transfer with it. Your current registrar can then approve or deny the transfer.

![Swimlane in three lanes: your current registrar, the registry and OpusDNS. You unlock the domain at your current registrar. You get the auth code, which the registry sets. OpusDNS requests the transfer at the registry. Your current registrar approves or denies it, within five days at gTLDs. The registry transfers the domain. The domain is in your OpusDNS account.](/images/transfer-patterns/unlock-registry-auth-code-approval.svg)

## Steps

1. Remove the transfer lock at your current registrar.
2. Get the auth code from your current registrar or the registry, depending on the TLD.
3. OpusDNS requests the transfer at the registry with the auth code.
4. Your current registrar approves or denies the transfer. Some registrars ask the domain's holder by email. At gTLDs, the registry completes it after five days without an answer. See [How a gTLD transfer works](/transfers/overview#how-a-gtld-transfer-works).

Which of these steps OpusDNS takes for you depends on your registrar. Its page in [Your registrar](/transfers/overview#your-registrar) shows them.

## TLDs

[.cymru](/tld-knowledge-base/gtlds/cymru), [.wales](/tld-knowledge-base/gtlds/wales).

Each TLD links its page in the TLD Knowledge Base, with its transfer rules, such as its transfer lock and how long a transfer takes.

## Registries

The registries of these TLDs:

- [Nominet UK](https://www.nominet.uk): [.cymru](/tld-knowledge-base/gtlds/cymru), [.wales](/tld-knowledge-base/gtlds/wales)
