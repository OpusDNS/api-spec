# Transferring a .ca domain

`.ca` follows the [Auth code, no approval](/transfers/patterns/auth-code) pattern. Its registry has a transfer lock. A transfer extends the registration. The registry completes a transfer at once.

## Steps

1. Remove the transfer lock at your current registrar.
2. Get the auth code from your current registrar.
3. OpusDNS requests the transfer at the registry with the auth code.
4. The registry completes the transfer without an approval.

## At your registrar

With a connected account, OpusDNS takes some of these steps for you. Which ones depends on your registrar:

✅ OpusDNS does it for you · ↗️ you do it at your registrar · ➖ the TLD doesn't have it

| Registrar | Remove the lock | Get the auth code | Approve |
| --- | :---: | :---: | :---: |
| [CentralNic Reseller](/transfers/registrars/centralnic) | ✅ OpusDNS | ✅ OpusDNS | ➖ |
| [eNom](/transfers/registrars/enom) | ✅ OpusDNS | ✅ OpusDNS | ➖ |
| [InterNetX](/transfers/registrars/internetx) | ✅ OpusDNS | ✅ OpusDNS | ➖ |
| [Moniker](/transfers/registrars/moniker) | ✅ OpusDNS | ✅ OpusDNS | ➖ |
| [NIC Direct](/transfers/registrars/nic-direct) | ↗️ You, at NIC Direct | ✅ OpusDNS | ➖ |
| [NICManager](/transfers/registrars/nicmanager) | ✅ OpusDNS | ↗️ You, at NICManager | ➖ |
| [Openprovider](/transfers/registrars/openprovider) | ✅ OpusDNS | ✅ OpusDNS | ➖ |
| [OpenSRS](/transfers/registrars/opensrs) | ✅ OpusDNS | ✅ OpusDNS | ➖ |
| [PartnerGate](/transfers/registrars/domain-bestellsystem) | ↗️ You, at PartnerGate | ✅ OpusDNS | ➖ |
| [Realtime Register](/transfers/registrars/realtime-register) | ↗️ You, at Realtime Register | ✅ OpusDNS | ➖ |

InterNetX refuses to remove the lock while WHOIS privacy is on. Turn it off there first.

The [TLD Knowledge Base](/tld-knowledge-base/cctlds/ca) has more on `.ca`.
