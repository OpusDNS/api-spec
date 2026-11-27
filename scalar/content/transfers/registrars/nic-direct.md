# Transfer from NIC Direct

[Connect](/products/connected-registrars/connect) your NIC Direct account and [request the transfer](/products/connected-registrars/transfer-to-opusdns). Which steps OpusDNS then takes at NIC Direct depends on your TLD. The table below shows them for every TLD. Send the auth code as `auth_code` only where it shows ↗️ under Get the auth code. In the API, NIC Direct is `NIC_DIRECT`.

✅ OpusDNS does it for you · ↗️ you do it at your registrar · 👤 the domain's holder approves by email · ➖ the TLD doesn't have it

## By transfer pattern

Your TLD's transfer pattern sets which steps a transfer has. ➖ marks a step the TLD doesn't have. NIC Direct sets which of the other steps OpusDNS can take for you. Search this page for your TLD. If it isn't listed exactly, it is in the first row.

| Transfer pattern | TLDs | Remove the lock | Get the auth code | Approve |
| --- | --- | :---: | :---: | :---: |
| [gTLDs and most ccTLDs](/transfers/patterns/gtlds) | Every other TLD, such as [.com](/transfers/patterns/gtlds/com), [.net](/transfers/patterns/gtlds/net) and [.org](/transfers/patterns/gtlds/org) | ↗️ You, at NIC Direct | ✅ OpusDNS | ✅ OpusDNS |
| [Auth code set by the registry](/transfers/patterns/registry-auth-code) | [.cz](/transfers/patterns/registry-auth-code/cz), [.dk](/transfers/patterns/registry-auth-code/dk), [.eu](/transfers/patterns/registry-auth-code/eu), [.gr](/transfers/patterns/registry-auth-code/gr), [.lt](/transfers/patterns/registry-auth-code/lt), [.nl](/transfers/patterns/registry-auth-code/nl), [.nu](/transfers/patterns/registry-auth-code/nu), [.ro](/transfers/patterns/registry-auth-code/ro), [.se](/transfers/patterns/registry-auth-code/se) | ➖ | ✅ OpusDNS | ➖ |
| [Auth code only](/transfers/patterns/auth-code) | [.ch](/transfers/patterns/auth-code/ch), [.de](/transfers/patterns/auth-code/de), [.li](/transfers/patterns/auth-code/li), [.no](/transfers/patterns/auth-code/no), [.pl](/transfers/patterns/auth-code/pl), [.pt](/transfers/patterns/auth-code/pt), [.si](/transfers/patterns/auth-code/si) | ➖ | ✅ OpusDNS | ➖ |
| [Unlock and auth code](/transfers/patterns/unlock-auth-code) | [.ca](/transfers/patterns/unlock-auth-code/ca), [.cl](/transfers/patterns/unlock-auth-code/cl), [.ee](/transfers/patterns/unlock-auth-code/ee), [.gg](/transfers/patterns/unlock-auth-code/gg), [.je](/transfers/patterns/unlock-auth-code/je), [.sk](/transfers/patterns/unlock-auth-code/sk) | ↗️ You, at NIC Direct | ✅ OpusDNS | ➖ |
| [No auth code, with approval](/transfers/patterns/no-auth-code) | [.co.za](/transfers/patterns/no-auth-code/co.za), [.lu](/transfers/patterns/no-auth-code/lu), [.net.za](/transfers/patterns/no-auth-code/net.za), [.org.za](/transfers/patterns/no-auth-code/org.za), [.web.za](/transfers/patterns/no-auth-code/web.za) | ➖ | ➖ | ✅ OpusDNS |
| [Auth code and approval](/transfers/patterns/auth-code-approval) | [.at](/transfers/patterns/auth-code-approval/at), [.it](/transfers/patterns/auth-code-approval/it), [.mx](/transfers/patterns/auth-code-approval/mx) | ➖ | ✅ OpusDNS | ✅ OpusDNS |
| [Unlock, auth code set by the registry, and approval](/transfers/patterns/unlock-registry-auth-code-approval) | [.cymru](/transfers/patterns/unlock-registry-auth-code-approval/cymru), [.wales](/transfers/patterns/unlock-registry-auth-code-approval/wales) | ↗️ You, at NIC Direct | ✅ OpusDNS | ✅ OpusDNS |
| [Unlock and auth code set by the registry](/transfers/patterns/unlock-registry-auth-code) | [.be](/transfers/patterns/unlock-registry-auth-code/be) | ↗️ You, at NIC Direct | ✅ OpusDNS | ➖ |
| [Push to a tag](/transfers/patterns/push) | [.uk](/transfers/patterns/push/uk) | ↗️ You, at NIC Direct | ➖ | ↗️ You, at NIC Direct (push) |

These TLDs differ from their pattern's row:

| Transfer pattern | TLDs | Remove the lock | Get the auth code | Approve |
| --- | --- | :---: | :---: | :---: |
| [Auth code set by the registry](/transfers/patterns/registry-auth-code) | [.nu](/transfers/patterns/registry-auth-code/nu), [.se](/transfers/patterns/registry-auth-code/se) | ➖ | ↗️ You, at NIC Direct (a new one) | ➖ |
| [gTLDs and most ccTLDs](/transfers/patterns/gtlds) | [.com.se](/transfers/patterns/gtlds/com.se) | ↗️ You, at NIC Direct | ↗️ You, at NIC Direct (a new one) | ✅ OpusDNS |
| [No auth code, with approval](/transfers/patterns/no-auth-code) | [.lu](/transfers/patterns/no-auth-code/lu) | ➖ | ➖ | 👤 The holder, by email |

[.is](/transfers/patterns/is) has no transfer at its registry. Its page explains what to do instead.

At [.uk](/transfers/patterns/push/uk), the domain is pushed to OpusDNS's tag instead of approved.

Until you transfer a domain, OpusDNS can make some changes to it at NIC Direct. See [What OpusDNS can do at NIC Direct](/products/connected-registrars/registrars#nic-direct).
