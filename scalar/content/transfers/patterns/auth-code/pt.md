# Transferring a .pt domain

`.pt` follows the [Auth code, no approval](/transfers/patterns/auth-code) pattern. Its registry has no transfer lock. A transfer doesn't extend the registration. The registry completes a transfer at once.

## Steps

1. Get the auth code from your current registrar.
2. OpusDNS requests the transfer at the registry with the auth code.
3. The registry completes the transfer without an approval.

## At your registrar

With a connected account, OpusDNS takes some of these steps for you. Which ones depends on your registrar:

✅ OpusDNS does it for you · ↗️ you do it at your registrar · ➖ the TLD doesn't have it

| Registrar | Remove the lock | Get the auth code | Approve |
| --- | :---: | :---: | :---: |
| [CentralNic Reseller](/transfers/registrars/centralnic) | ➖ | ✅ OpusDNS | ➖ |
| [eNom](/transfers/registrars/enom) | ➖ | ✅ OpusDNS | ➖ |
| [InterNetX](/transfers/registrars/internetx) | ➖ | ✅ OpusDNS | ➖ |
| [Moniker](/transfers/registrars/moniker) | ➖ | ✅ OpusDNS | ➖ |
| [NIC Direct](/transfers/registrars/nic-direct) | ➖ | ✅ OpusDNS | ➖ |
| [NICManager](/transfers/registrars/nicmanager) | ➖ | ↗️ You, at NICManager | ➖ |
| [Openprovider](/transfers/registrars/openprovider) | ➖ | ✅ OpusDNS | ➖ |
| [OpenSRS](/transfers/registrars/opensrs) | ➖ | ✅ OpusDNS | ➖ |
| [PartnerGate](/transfers/registrars/domain-bestellsystem) | ➖ | ✅ OpusDNS | ➖ |
| [Realtime Register](/transfers/registrars/realtime-register) | ➖ | ✅ OpusDNS | ➖ |

The [TLD Knowledge Base](/tld-knowledge-base/cctlds/pt) has more on `.pt`.
