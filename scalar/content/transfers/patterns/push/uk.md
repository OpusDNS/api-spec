# Transferring a .uk domain

`.uk` follows the [Push to a tag](/transfers/patterns/push) pattern. Its registry has a transfer lock. A transfer doesn't extend the registration. The registry completes a transfer at once.

## Steps

1. Remove the transfer lock at your current registrar.
2. OpusDNS records the transfer.
3. Your current registrar pushes the domain to OpusDNS's registrar tag, `OPUSDNS`.
4. The registry moves the domain to OpusDNS.

## At your registrar

With a connected account, OpusDNS takes some of these steps for you. Which ones depends on your registrar:

✅ OpusDNS does it for you · ↗️ you do it at your registrar · ➖ the TLD doesn't have it

| Registrar | Remove the lock | Get the auth code | Approve |
| --- | :---: | :---: | :---: |
| [CentralNic Reseller](/transfers/registrars/centralnic) | ✅ OpusDNS | ➖ | ✅ OpusDNS (push) |
| [eNom](/transfers/registrars/enom) | ✅ OpusDNS | ➖ | ↗️ You, at eNom (push) |
| [InterNetX](/transfers/registrars/internetx) | ✅ OpusDNS | ➖ | ✅ OpusDNS (push) |
| [Moniker](/transfers/registrars/moniker) | ✅ OpusDNS | ➖ | ✅ OpusDNS (push) |
| [NIC Direct](/transfers/registrars/nic-direct) | ↗️ You, at NIC Direct | ➖ | ↗️ You, at NIC Direct (push) |
| [NICManager](/transfers/registrars/nicmanager) | ✅ OpusDNS | ➖ | ↗️ You, at NICManager (push) |
| [Openprovider](/transfers/registrars/openprovider) | ✅ OpusDNS | ➖ | ✅ OpusDNS (push) |
| [OpenSRS](/transfers/registrars/opensrs) | ✅ OpusDNS | ➖ | ✅ OpusDNS (push) |
| [PartnerGate](/transfers/registrars/domain-bestellsystem) | ↗️ You, at PartnerGate | ➖ | ↗️ You, at PartnerGate (push) |
| [Realtime Register](/transfers/registrars/realtime-register) | ↗️ You, at Realtime Register | ➖ | ✅ OpusDNS (push) |

The [TLD Knowledge Base](/tld-knowledge-base/cctlds/uk) has more on `.uk`.
