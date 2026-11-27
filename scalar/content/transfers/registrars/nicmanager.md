# Transfer from NICManager

[Connect](/products/connected-registrars/connect) your NICManager account and [request the transfer](/products/connected-registrars/transfer-to-opusdns). Which steps OpusDNS then takes at NICManager depends on your TLD. The table below shows them for every TLD. Send the auth code as `auth_code` only where it shows ↗️ under Get the auth code. In the API, NICManager is `NICMANAGER`.

✅ OpusDNS does it for you · ↗️ you do it at your registrar · 👤 the domain's holder approves by email · ➖ the TLD doesn't have it

## By transfer pattern

Your TLD's transfer pattern sets which steps a transfer has. ➖ marks a step the TLD doesn't have. NICManager sets which of the other steps OpusDNS can take for you. Search this page for your TLD. If it isn't listed exactly, it is in the first row.

| Transfer pattern | TLDs | Remove the lock | Get the auth code | Approve |
| --- | --- | :---: | :---: | :---: |
| [gTLDs and most ccTLDs](/transfers/patterns/gtlds) | Every other TLD, such as [.com](/tld-knowledge-base/gtlds/com), [.net](/tld-knowledge-base/gtlds/net) and [.org](/tld-knowledge-base/gtlds/org) | ✅ OpusDNS | ↗️ You, at NICManager | ✅ OpusDNS |
| [Auth code set by the registry](/transfers/patterns/registry-auth-code) | [.cz](/tld-knowledge-base/cctlds/cz), [.dk](/tld-knowledge-base/cctlds/dk), [.eu](/tld-knowledge-base/cctlds/eu), [.gr](/tld-knowledge-base/cctlds/gr), [.lt](/tld-knowledge-base/cctlds/lt), [.nl](/tld-knowledge-base/cctlds/nl), [.nu](/tld-knowledge-base/cctlds/nu), [.ro](/tld-knowledge-base/cctlds/ro), [.se](/tld-knowledge-base/cctlds/se) | ➖ | ↗️ You, at NICManager | ➖ |
| [Auth code only](/transfers/patterns/auth-code) | [.ch](/tld-knowledge-base/cctlds/ch), [.de](/tld-knowledge-base/cctlds/de), [.li](/tld-knowledge-base/cctlds/li), [.no](/tld-knowledge-base/cctlds/no), [.pl](/tld-knowledge-base/cctlds/pl), [.pt](/tld-knowledge-base/cctlds/pt), [.si](/tld-knowledge-base/cctlds/si) | ➖ | ↗️ You, at NICManager | ➖ |
| [Unlock and auth code](/transfers/patterns/unlock-auth-code) | [.ca](/tld-knowledge-base/cctlds/ca), .cl, .ee, [.gg](/tld-knowledge-base/cctlds/gg), [.je](/tld-knowledge-base/cctlds/je), [.sk](/tld-knowledge-base/cctlds/sk) | ✅ OpusDNS | ↗️ You, at NICManager | ➖ |
| [No auth code, with approval](/transfers/patterns/no-auth-code) | [.co.za](/tld-knowledge-base/cctlds/co.za), [.lu](/tld-knowledge-base/cctlds/lu), [.net.za](/tld-knowledge-base/cctlds/net.za), [.org.za](/tld-knowledge-base/cctlds/org.za), [.web.za](/tld-knowledge-base/cctlds/web.za) | ➖ | ➖ | ✅ OpusDNS |
| [Auth code and approval](/transfers/patterns/auth-code-approval) | [.at](/tld-knowledge-base/cctlds/at), [.it](/tld-knowledge-base/cctlds/it), [.mx](/tld-knowledge-base/cctlds/mx) | ➖ | ↗️ You, at NICManager | ✅ OpusDNS |
| [Unlock, auth code set by the registry, and approval](/transfers/patterns/unlock-registry-auth-code-approval) | [.cymru](/tld-knowledge-base/gtlds/cymru), [.wales](/tld-knowledge-base/gtlds/wales) | ✅ OpusDNS | ↗️ You, at NICManager | ✅ OpusDNS |
| [Unlock and auth code set by the registry](/transfers/patterns/unlock-registry-auth-code) | [.be](/tld-knowledge-base/cctlds/be) | ✅ OpusDNS | ↗️ You, at NICManager | ➖ |
| [Push to a tag](/transfers/patterns/push) | [.uk](/tld-knowledge-base/cctlds/uk) | ✅ OpusDNS | ➖ | ↗️ You, at NICManager (push) |

These TLDs differ from their pattern's row:

| Transfer pattern | TLDs | Remove the lock | Get the auth code | Approve |
| --- | --- | :---: | :---: | :---: |
| [Auth code set by the registry](/transfers/patterns/registry-auth-code) | [.nu](/tld-knowledge-base/cctlds/nu), [.se](/tld-knowledge-base/cctlds/se) | ➖ | ↗️ You, at NICManager (a new one) | ➖ |
| [gTLDs and most ccTLDs](/transfers/patterns/gtlds) | [.com.se](/tld-knowledge-base/cctlds/com.se) | ✅ OpusDNS | ↗️ You, at NICManager (a new one) | ✅ OpusDNS |
| [No auth code, with approval](/transfers/patterns/no-auth-code) | [.lu](/tld-knowledge-base/cctlds/lu) | ➖ | ➖ | 👤 The holder, by email |

.is has no transfer at its registry. See [Transfer to OpusDNS](/transfers/overview#transfer-patterns) for what to do instead.

At [.uk](/tld-knowledge-base/cctlds/uk), the domain is pushed to OpusDNS's tag instead of approved.

Until you transfer a domain, OpusDNS can make some changes to it at NICManager. See [What OpusDNS can do at NICManager](/products/connected-registrars/registrars#nicmanager).
