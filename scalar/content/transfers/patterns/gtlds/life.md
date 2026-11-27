# Transferring a .life domain

`.life` follows the [gTLDs and most ccTLDs](/transfers/patterns/gtlds) pattern. Its registry is [Identity Digital Inc.](https://www.identity.digital). The registry has a transfer lock. A transfer extends the registration. A transfer takes up to 5 days. As a gTLD, it follows ICANN's [Transfer Policy](https://www.icann.org/resources/pages/transfer-policy-2024-02-21-en).

## Steps

1. Remove the transfer lock at your current registrar.
2. Get the auth code from your current registrar.
3. OpusDNS requests the transfer at the registry with the auth code.
4. Your current registrar approves or denies the transfer. Some registrars ask the domain's holder by email. At gTLDs, the registry completes it after five days without an answer. See [How a gTLD transfer works](/transfers/overview#how-a-gtld-transfer-works).

## At your registrar

With a connected account, OpusDNS takes some of these steps for you. Which ones depends on your registrar:

✅ OpusDNS does it for you · ↗️ you do it at your registrar · 👤 the domain's holder approves by email

| Registrar | Remove the lock | Get the auth code | Approve |
| --- | :---: | :---: | :---: |
| [CentralNic Reseller](/transfers/registrars/centralnic) | ✅ OpusDNS | ✅ OpusDNS | ✅ OpusDNS |
| [eNom](/transfers/registrars/enom) | ✅ OpusDNS | ✅ OpusDNS | ↗️ You, optional |
| [InterNetX](/transfers/registrars/internetx) | ✅ OpusDNS | ✅ OpusDNS | ✅ OpusDNS |
| [Moniker](/transfers/registrars/moniker) | ✅ OpusDNS | ✅ OpusDNS | ✅ OpusDNS |
| [NIC Direct](/transfers/registrars/nic-direct) | ↗️ You, at NIC Direct | ✅ OpusDNS | ✅ OpusDNS |
| [NICManager](/transfers/registrars/nicmanager) | ✅ OpusDNS | ↗️ You, at NICManager | ✅ OpusDNS |
| [Openprovider](/transfers/registrars/openprovider) | ✅ OpusDNS | ✅ OpusDNS | ↗️ You, optional |
| [OpenSRS](/transfers/registrars/opensrs) | ✅ OpusDNS | ✅ OpusDNS | 👤 The holder, by email |
| [PartnerGate](/transfers/registrars/domain-bestellsystem) | ↗️ You, at PartnerGate | ✅ OpusDNS | ✅ OpusDNS |
| [Realtime Register](/transfers/registrars/realtime-register) | ↗️ You, at Realtime Register | ✅ OpusDNS | ↗️ You, optional |

InterNetX refuses to remove the lock while WHOIS privacy is on. Turn it off there first.

The [TLD Knowledge Base](/tld-knowledge-base/gtlds/life) has more on `.life`.
