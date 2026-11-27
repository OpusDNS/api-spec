# Transferring a .it domain

`.it` follows the [Auth code and approval](/transfers/patterns/auth-code-approval) pattern. Its registry is [Istituto di Informatica e Telematica (IIT-CNR)](https://www.nic.it). The registry has no transfer lock. A transfer doesn't extend the registration. A transfer takes up to 1 day.

## Steps

1. Get the auth code from your current registrar.
2. OpusDNS requests the transfer at the registry with the auth code.
3. Your current registrar approves or denies the transfer. Some registrars ask the domain's holder by email.

## At your registrar

With a connected account, OpusDNS takes some of these steps for you. Which ones depends on your registrar:

✅ OpusDNS does it for you · ↗️ you do it at your registrar · 👤 the domain's holder approves by email · ➖ the TLD doesn't have it

| Registrar | Remove the lock | Get the auth code | Approve |
| --- | :---: | :---: | :---: |
| [CentralNic Reseller](/transfers/registrars/centralnic) | ➖ | ✅ OpusDNS | ✅ OpusDNS |
| [eNom](/transfers/registrars/enom) | ➖ | ✅ OpusDNS | ↗️ You, at eNom |
| [InterNetX](/transfers/registrars/internetx) | ➖ | ✅ OpusDNS | ✅ OpusDNS |
| [Moniker](/transfers/registrars/moniker) | ➖ | ✅ OpusDNS | ✅ OpusDNS |
| [NIC Direct](/transfers/registrars/nic-direct) | ➖ | ✅ OpusDNS | ✅ OpusDNS |
| [NICManager](/transfers/registrars/nicmanager) | ➖ | ↗️ You, at NICManager | ✅ OpusDNS |
| [Openprovider](/transfers/registrars/openprovider) | ➖ | ✅ OpusDNS | ↗️ You, at Openprovider |
| [OpenSRS](/transfers/registrars/opensrs) | ➖ | ✅ OpusDNS | 👤 The holder, by email |
| [PartnerGate](/transfers/registrars/domain-bestellsystem) | ➖ | ✅ OpusDNS | ✅ OpusDNS |
| [Realtime Register](/transfers/registrars/realtime-register) | ➖ | ✅ OpusDNS | ↗️ You, at Realtime Register |

The [TLD Knowledge Base](/tld-knowledge-base/cctlds/it) has more on `.it`.
