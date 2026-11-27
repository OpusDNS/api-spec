# Unlock and auth code set by the registry

The registry generates the auth code. Your current registrar can't choose it. OpusDNS requests the transfer with it. The registry completes the transfer without an approval.

![Swimlane in three lanes: your current registrar, the registry and OpusDNS. You unlock the domain at your current registrar. You get the auth code, which the registry sets. OpusDNS requests the transfer at the registry. The registry transfers the domain without an approval. The domain is in your OpusDNS account.](/images/transfer-patterns/unlock-registry-auth-code.svg)

## Steps

1. Remove the transfer lock at your current registrar.
2. Get the auth code from your current registrar or the registry, depending on the TLD.
3. OpusDNS requests the transfer at the registry with the auth code.
4. The registry completes the transfer without an approval.

Which of these steps OpusDNS takes for you depends on your registrar. Its page in [Your registrar](/transfers/overview#your-registrar) shows them.

## TLDs

[.be](/tld-knowledge-base/cctlds/be).

Each TLD links its page in the TLD Knowledge Base, with its transfer rules, such as its transfer lock and how long a transfer takes.

## Registries

The registries of these TLDs:

- [DNS Belgium](https://www.dnsbelgium.be): [.be](/tld-knowledge-base/cctlds/be)
