# Auth code set by the registry, with approval

The registry generates the auth code. Your current registrar can't choose it. OpusDNS requests the transfer with it. Your current registrar can then approve or deny the transfer.

## Steps

1. Remove the transfer lock at your current registrar.
2. Get the auth code from your current registrar or the registry, depending on the TLD.
3. OpusDNS requests the transfer at the registry with the auth code.
4. Your current registrar approves or denies the transfer.

## TLDs

[.cymru](/transfers/patterns/registry-auth-code-approval/cymru), [.wales](/transfers/patterns/registry-auth-code-approval/wales).

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

Some TLDs differ at some registrars. Each TLD's page shows its own.
