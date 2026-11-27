# Push to a tag

Your current registrar pushes the domain to OpusDNS's registrar tag. There is no auth code and no approval.

> [!NOTE]
> [.uk](/tld-knowledge-base/cctlds/uk): From 9 February 2027, Nominet replaces the push with an auth code. Your current registrar then gives you a Transfer Authorisation Code, valid for 14 days. With it, the transfer completes at once. See [Nominet's FAQ](https://registrars.nominet.uk/registry/dot-uk/faq/).

![Swimlane in three lanes: your current registrar, the registry and OpusDNS. You unlock the domain at your current registrar. OpusDNS records the transfer. Your current registrar pushes the domain to OpusDNS's tag. The registry moves the domain. The domain is in your OpusDNS account.](/images/transfer-patterns/push.svg)

## Steps

1. Remove the transfer lock at your current registrar.
2. OpusDNS records the transfer.
3. Your current registrar pushes the domain to OpusDNS's registrar tag, `OPUSDNS`.
4. The registry moves the domain to OpusDNS.

Which of these steps OpusDNS takes for you depends on your registrar. Its page in [Your registrar](/transfers/overview#your-registrar) shows them.

## TLDs

[.uk](/tld-knowledge-base/cctlds/uk).

The [TLD Knowledge Base](/tld-knowledge-base) has each TLD's transfer rules, such as its transfer lock and how long a transfer takes.

## Registries

The registries of these TLDs:

- [Nominet UK](https://www.nominet.uk): [.uk](/tld-knowledge-base/cctlds/uk)
