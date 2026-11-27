# Transfer to OpusDNS

Transferring a domain from another registrar to OpusDNS takes a few steps at that registrar, at the registry and at OpusDNS.

## How a gTLD transfer works

![Swimlane: you unlock the domain and get the auth code at your current registrar. OpusDNS requests the transfer at the registry with the auth code, and the transfer is pending. Your current registrar approves or denies it within five days. The registry transfers the domain into your OpusDNS account.](/images/gtld-transfer.svg)

For gTLDs such as `.com`, ICANN's [Transfer Policy](https://www.icann.org/resources/pages/transfer-policy-2024-02-21-en) sets the rules. All registrars accredited by ICANN and all gTLD registries must follow it.

- Your current registrar must remove the transfer lock and give you the auth code. It has five calendar days to do so after you ask ([section I.A.5.2](https://www.icann.org/resources/pages/transfer-policy-2024-02-21-en)).
- OpusDNS requests the transfer at the registry with the auth code. The registry checks the code.
- Your current registrar can deny the transfer, but only for the reasons the policy lists ([section I.A.3.7](https://www.icann.org/resources/pages/transfer-policy-2024-02-21-en)). Examples are fraud or a registration or transfer in the last 60 days.
- If your current registrar doesn't deny the transfer within five calendar days, the registry completes it. Your current registrar can also approve it earlier.

## ccTLDs

ccTLD registries don't follow ICANN's Transfer Policy. Each sets its own rules, so the steps often differ from the ones above. For example:

- `.de` and `.ch` have no transfer lock.
- `.de` and `.se` complete a transfer at once, without an approval.
- At `.lu`, the domain's holder approves the transfer by email.
- At `.se` and `.nu`, only the registry issues auth codes.
- A `.uk` domain is pushed to the new registrar's tag instead of requested.

The [TLD Knowledge Base](/tld-knowledge-base) describes each TLD's rules, and each registrar's page lists the TLDs whose steps differ.

TLDs with the same steps share a workflow:

- [gTLDs and most ccTLDs](/transfers/gtlds): 502 TLDs
- [Auth code, completes at once](/transfers/auth-code): 13 TLDs
- [Auth code from the registry](/transfers/registry-auth-code): 10 TLDs
- [No auth code, with approval](/transfers/no-auth-code): 5 TLDs
- [Auth code from the registry, with approval](/transfers/registry-auth-code-approval): 2 TLDs
- [Push to a tag](/transfers/push): 1 TLD

## With a connected account

If you have [connected](/products/connected-registrars/connect) your account at the current registrar, you can usually request the transfer without the auth code. OpusDNS then takes the steps at your current registrar that the registrar's API allows:

1. It checks the domain's statuses. If one blocks the transfer, it stops before it changes anything.
2. It removes the transfer lock, where the registrar shows it.
3. It gets the auth code, where the registrar hands it out.
4. It approves the pending transfer, where the registrar lets it.

If the request fails before the registry has it, OpusDNS sets the lock again.

See [Transfer a connected domain to OpusDNS](/products/connected-registrars/transfer-to-opusdns) for more details.

> [!WARNING]
> **Some steps stay with you.** The [page for your registrar](#your-registrar) in these docs lists them. Read it before you start a transfer. Typical cases are:
>
> - A lock that OpusDNS can't see or can't remove through the registrar's API.
> - A setting at the registrar that blocks the transfer.
> - An auth code that the registrar's API doesn't hand out.
> - An approval that the registrar's API can't give. Sometimes a third party takes part in it. For example, the domain's holder answers an email from the registrar.
>
> Your registrar's own documentation explains how to take these steps there.

## Your registrar

Each registrar has its own page in these docs. It shows which steps OpusDNS takes there and at which TLDs they differ. It also shows what OpusDNS can do with your domain there until you transfer it.

- [CentralNic Reseller](/transfers/registrars/centralnic)
- [eNom](/transfers/registrars/enom)
- [InterNetX](/transfers/registrars/internetx)
- [Moniker](/transfers/registrars/moniker)
- [NIC Direct](/transfers/registrars/nic-direct)
- [NICManager](/transfers/registrars/nicmanager)
- [Openprovider](/transfers/registrars/openprovider)
- [OpenSRS](/transfers/registrars/opensrs)
- [PartnerGate](/transfers/registrars/domain-bestellsystem)
- [Realtime Register](/transfers/registrars/realtime-register)
