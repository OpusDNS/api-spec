# Auth code set by the registry

The registry generates the auth code. Your current registrar can't choose it. OpusDNS requests the transfer with it. The registry completes the transfer without an approval.

## Steps

1. Remove the transfer lock at your current registrar, where the TLD has one.
2. Get the auth code from your current registrar or the registry, depending on the TLD.
3. OpusDNS requests the transfer at the registry with the auth code.
4. The registry completes the transfer without an approval.

## TLDs

[.be](/transfers/patterns/registry-auth-code/be), [.cz](/transfers/patterns/registry-auth-code/cz), [.dk](/transfers/patterns/registry-auth-code/dk), [.eu](/transfers/patterns/registry-auth-code/eu), [.gr](/transfers/patterns/registry-auth-code/gr), [.lt](/transfers/patterns/registry-auth-code/lt), [.nl](/transfers/patterns/registry-auth-code/nl), [.nu](/transfers/patterns/registry-auth-code/nu), [.ro](/transfers/patterns/registry-auth-code/ro), [.se](/transfers/patterns/registry-auth-code/se).

A transfer lock only at [.be](/transfers/patterns/registry-auth-code/be).

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

Some TLDs differ at some registrars. Each TLD's page shows its own.
