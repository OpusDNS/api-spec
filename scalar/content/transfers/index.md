# Transfer to OpusDNS

Transferring a domain from another registrar to OpusDNS takes a few steps at that registrar, at the registry and at OpusDNS.

## How a gTLD transfer works

![Swimlane: you unlock the domain and get the auth code at your current registrar. OpusDNS requests the transfer at the registry with the auth code, and the transfer is pending. Your current registrar approves or denies it within five days. The registry transfers the domain into your OpusDNS account.](/images/gtld-transfer.svg)

gTLD transfers, such as for `.com`, follow ICANN's [Transfer Policy](https://www.icann.org/resources/pages/transfer-policy-2024-02-21-en), which every registrar accredited by ICANN and every gTLD registry must follow. The current registrar removes the lock and hands out the auth code on request, within five calendar days at the latest. The new registrar requests the transfer with the code, and the registry checks it. The current registrar can deny the transfer, but only for the reasons the policy lists, such as fraud or a recent registration or transfer. If it doesn't deny it within five calendar days, the registry completes the transfer. It can also approve it earlier.

## ccTLDs

ccTLD registries don't follow ICANN's Transfer Policy. Each sets its own rules, so the steps often differ from the ones above. Some registries have no transfer lock, such as `.de` and `.ch`, and some complete a transfer at once without an approval, such as `.de` and `.se`. At `.lu` the domain's holder approves the transfer by email. At `.se` and `.nu` the registry issues the auth codes. A `.uk` domain is pushed to the new registrar's tag instead of requested. The [TLD Knowledge Base](/tld-knowledge-base) describes each TLD's rules.

## With a connected account

If you have [connected](/products/connected-registrars/connect) your account at the current registrar, you can usually request the transfer without the auth code. OpusDNS then takes the steps at your current registrar that the registrar's API allows. Before it changes anything there, it checks the domain's statuses and stops if one blocks the transfer. Then it removes the transfer lock where the registrar shows it, gets the auth code where the registrar hands it out, and approves the pending transfer where the registrar lets it. If the request fails before the registry has it, OpusDNS sets the lock again.

> [!WARNING]
> **Some steps stay with you.** Check your registrar's page before you start a transfer:
>
> - A lock OpusDNS can't see, or can't remove through the registrar's API.
> - A setting at the registrar that blocks the change, such as WHOIS privacy at InterNetX.
> - An auth code the registrar's API doesn't hand out, or one only the registry can issue, as at `.se` and `.nu`. Send it as `auth_code` in the request.
> - An approval that the registrar's API can't give, or that someone else gives, such as the domain's holder answering the registrar's email.

This works when your organization holds the domain through exactly one connected account. See [Transfer a connected domain to OpusDNS](/products/connected-registrars/transfer-to-opusdns) for the request and the errors.

## Your registrar

Each registrar's page lists which steps OpusDNS takes there, the TLDs whose steps differ, and what OpusDNS can do with a domain you hold there until you transfer it.

- [CentralNic Reseller](/transfers/centralnic)
- [eNom](/transfers/enom)
- [InterNetX](/transfers/internetx)
- [Moniker](/transfers/moniker)
- [NIC Direct](/transfers/nic-direct)
- [NICManager](/transfers/nicmanager)
- [Openprovider](/transfers/openprovider)
- [OpenSRS](/transfers/opensrs)
- [PartnerGate](/transfers/domain-bestellsystem)
- [Realtime Register](/transfers/realtime-register)
