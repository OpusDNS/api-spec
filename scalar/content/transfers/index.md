# Transfer to OpusDNS

Transferring a domain from another registrar to OpusDNS takes a few steps at that registrar, at the registry and at OpusDNS.

## How a gTLD transfer works

![Swimlane: you unlock the domain and get the auth code at your current registrar. OpusDNS requests the transfer at the registry with the auth code, and the transfer is pending. Your current registrar approves or denies it within five days. The registry transfers the domain into your OpusDNS account.](/images/gtld-transfer.svg)

For gTLDs, such as `.com`, these steps follow ICANN's Transfer Policy, which every registrar accredited by ICANN and every gTLD registry must follow. The current registrar removes the lock and hands out the auth code on request, within five days at the latest. The new registrar requests the transfer with the code, and the registry checks it. The current registrar can approve the transfer at once or deny it, but only for the reasons the policy lists, such as fraud or a registration or transfer in the last 60 days. If it doesn't deny it within five days, the registry completes the transfer. ccTLD registries set their own rules, so their steps often differ.

With a [connected](/products/connected-registrars/connect) account, OpusDNS takes steps 1 and 2 for you. At most registrars it also approves step 5, so the transfer doesn't wait five days. See [Transfer a connected domain to OpusDNS](/products/connected-registrars/transfer-to-opusdns).

## At your registrar

Who takes these steps with a connected account, for gTLDs:

✅ OpusDNS does it for you · ↗️ you do it at your registrar · ✉️ the domain's holder approves by email

| Registrar | Remove the lock | Get the auth code | Approve |
| --- | :---: | :---: | :---: |
| [CentralNic Reseller](/transfers/centralnic) | ✅ | ✅ | ✅ |
| [eNom](/transfers/enom) | ✅ | ✅ | ↗️ |
| [InterNetX](/transfers/internetx) | ✅ | ✅ | ✅ |
| [Moniker](/transfers/moniker) | ✅ | ✅ | ✅ |
| [NIC Direct](/transfers/nic-direct) | ↗️ | ✅ | ✅ |
| [NICManager](/transfers/nicmanager) | ✅ | ↗️ | ✅ |
| [Openprovider](/transfers/openprovider) | ✅ | ✅ | ↗️ |
| [OpenSRS](/transfers/opensrs) | ✅ | ✅ | ✉️ |
| [PartnerGate](/transfers/domain-bestellsystem) | ↗️ | ✅ | ✅ |
| [Realtime Register](/transfers/realtime-register) | ↗️ | ✅ | ↗️ |

At gTLDs, approving only speeds the transfer up. Without an answer, the registry completes it after five days.

Each registrar's page lists every step, the TLDs whose steps differ, and what OpusDNS can do with a domain you hold there until you transfer it.
