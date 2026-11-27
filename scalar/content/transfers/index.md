# Transfer to OpusDNS

Moving a domain from another registrar to OpusDNS takes a few steps at that registrar, at the registry and at OpusDNS. Once you have [connected](/products/connected-registrars/connect) your account there, OpusDNS takes most of them for you; which ones depends on the registrar and on the TLD.

For gTLDs, such as `.com`, these steps follow ICANN's Transfer Policy, which binds every ICANN-accredited registrar and gTLD registry: a locked domain can't be transferred, the new registrar requests the transfer with the auth code, and the current registrar can approve it. If it doesn't, the registry completes the transfer after five days. ccTLD registries set their own rules, so their steps often differ.

Who takes the steps that depend on the registrar, at most TLDs:

✅ OpusDNS does it for you · ↗️ you do it at your registrar · ✉️ the domain's holder approves by email · ⚙️ the registry does it on its own · ➖ the TLD doesn't have it

| Registrar | WHOIS privacy off¹ | Remove the lock | Get the auth code | Request | Approve | `.uk` push |
| --- | :---: | :---: | :---: | :---: | :---: | :---: |
| [CentralNic Reseller](/transfers/centralnic) | ➖ | ✅ | ✅ | ✅ | ✅ | ✅ |
| [eNom](/transfers/enom) | ➖ | ✅ | ✅ | ✅ | ↗️ | ↗️ |
| [InterNetX](/transfers/internetx) | ↗️ | ✅ | ✅ | ✅ | ✅ | ✅ |
| [Moniker](/transfers/moniker) | ➖ | ✅ | ✅ | ✅ | ✅ | ✅ |
| [NIC Direct](/transfers/nic-direct) | ➖ | ↗️ | ✅ | ✅ | ✅ | ↗️ |
| [NICManager](/transfers/nicmanager) | ➖ | ✅ | ↗️ | ✅ | ✅ | ↗️ |
| [Openprovider](/transfers/openprovider) | ➖ | ✅ | ✅ | ✅ | ↗️ | ✅ |
| [OpenSRS](/transfers/opensrs) | ➖ | ✅ | ✅ | ✅ | ✉️ | ✅ |
| [PartnerGate](/transfers/domain-bestellsystem) | ➖ | ↗️ | ✅ | ✅ | ✅ | ↗️ |
| [Realtime Register](/transfers/realtime-register) | ➖ | ↗️ | ✅ | ✅ | ↗️ | ✅ |
| [another OpusDNS account](/transfers/opusdns) | ➖ | ✅ | ✅ | ✅ | ✅ | ↗️ |

¹ Only while WHOIS privacy is on.

Each registrar's page lists the TLDs whose steps differ, and what OpusDNS can do with a domain you hold there until it moves. See also [Move a connected domain to OpusDNS](/products/connected-registrars/transfer-to-opusdns).
