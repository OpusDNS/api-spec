# Transfer from eNom

[Connect](/products/connected-registrars/connect) your eNom account and [request the transfer](/products/connected-registrars/transfer-to-opusdns). Which steps OpusDNS then takes at eNom depends on your TLD. The table below shows them for every TLD. Send the auth code as `auth_code` only where it shows ↗️ under Get the auth code. In the API, eNom is `ENOM`.

✅ OpusDNS does it for you · ↗️ you do it at your registrar · 👤 the domain's holder approves by email · ➖ the TLD doesn't have it

## By transfer pattern

Your TLD's transfer pattern sets which steps a transfer has. ➖ marks a step the TLD doesn't have. eNom sets which of the other steps OpusDNS can take for you. Search this page for your TLD. If it isn't listed exactly, it is in the first row.

| Transfer pattern | TLDs | Remove the lock | Get the auth code | Approve |
| --- | --- | :---: | :---: | :---: |
| [gTLDs and most ccTLDs](/transfers/patterns/gtlds) | Every other TLD, such as [.com](/transfers/patterns/gtlds/com), [.net](/transfers/patterns/gtlds/net) and [.org](/transfers/patterns/gtlds/org) | ✅ OpusDNS | ✅ OpusDNS | ↗️ You, optional |
| [Auth code set by the registry](/transfers/patterns/registry-auth-code) | [.cz](/transfers/patterns/registry-auth-code/cz), [.dk](/transfers/patterns/registry-auth-code/dk), [.eu](/transfers/patterns/registry-auth-code/eu), [.gr](/transfers/patterns/registry-auth-code/gr), [.lt](/transfers/patterns/registry-auth-code/lt), [.nl](/transfers/patterns/registry-auth-code/nl), [.nu](/transfers/patterns/registry-auth-code/nu), [.ro](/transfers/patterns/registry-auth-code/ro), [.se](/transfers/patterns/registry-auth-code/se) | ➖ | ✅ OpusDNS | ➖ |
| [Auth code only](/transfers/patterns/auth-code) | [.ch](/transfers/patterns/auth-code/ch), [.de](/transfers/patterns/auth-code/de), [.li](/transfers/patterns/auth-code/li), [.no](/transfers/patterns/auth-code/no), [.pl](/transfers/patterns/auth-code/pl), [.pt](/transfers/patterns/auth-code/pt), [.si](/transfers/patterns/auth-code/si) | ➖ | ✅ OpusDNS | ➖ |
| [Unlock and auth code](/transfers/patterns/unlock-auth-code) | [.ca](/transfers/patterns/unlock-auth-code/ca), [.cl](/transfers/patterns/unlock-auth-code/cl), [.ee](/transfers/patterns/unlock-auth-code/ee), [.gg](/transfers/patterns/unlock-auth-code/gg), [.je](/transfers/patterns/unlock-auth-code/je), [.sk](/transfers/patterns/unlock-auth-code/sk) | ✅ OpusDNS | ✅ OpusDNS | ➖ |
| [No auth code, with approval](/transfers/patterns/no-auth-code) | [.co.za](/transfers/patterns/no-auth-code/co.za), [.lu](/transfers/patterns/no-auth-code/lu), [.net.za](/transfers/patterns/no-auth-code/net.za), [.org.za](/transfers/patterns/no-auth-code/org.za), [.web.za](/transfers/patterns/no-auth-code/web.za) | ➖ | ➖ | ↗️ You, at eNom |
| [Auth code and approval](/transfers/patterns/auth-code-approval) | [.at](/transfers/patterns/auth-code-approval/at), [.it](/transfers/patterns/auth-code-approval/it), [.mx](/transfers/patterns/auth-code-approval/mx) | ➖ | ✅ OpusDNS | ↗️ You, at eNom |
| [Unlock, auth code set by the registry, and approval](/transfers/patterns/unlock-registry-auth-code-approval) | [.cymru](/transfers/patterns/unlock-registry-auth-code-approval/cymru), [.wales](/transfers/patterns/unlock-registry-auth-code-approval/wales) | ✅ OpusDNS | ✅ OpusDNS | ↗️ You, optional |
| [Unlock and auth code set by the registry](/transfers/patterns/unlock-registry-auth-code) | [.be](/transfers/patterns/unlock-registry-auth-code/be) | ✅ OpusDNS | ✅ OpusDNS | ➖ |
| [Push to a tag](/transfers/patterns/push) | [.uk](/transfers/patterns/push/uk) | ✅ OpusDNS | ➖ | ↗️ You, at eNom (push) |

These TLDs differ from their pattern's row:

| Transfer pattern | TLDs | Remove the lock | Get the auth code | Approve |
| --- | --- | :---: | :---: | :---: |
| [gTLDs and most ccTLDs](/transfers/patterns/gtlds) | [.ag](/transfers/patterns/gtlds/ag), [.ai](/transfers/patterns/gtlds/ai), [.bh](/transfers/patterns/gtlds/bh), [.biz.bh](/transfers/patterns/gtlds/biz.bh), [.bz](/transfers/patterns/gtlds/bz), [.cc](/transfers/patterns/gtlds/cc), [.cc.bh](/transfers/patterns/gtlds/cc.bh), [.co](/transfers/patterns/gtlds/co), [.co.nl](/transfers/patterns/gtlds/co.nl), [.co.no](/transfers/patterns/gtlds/co.no), [.com.bh](/transfers/patterns/gtlds/com.bh), [.com.de](/transfers/patterns/gtlds/com.de), [.edu.bh](/transfers/patterns/gtlds/edu.bh), [.fm](/transfers/patterns/gtlds/fm), [.fo](/transfers/patterns/gtlds/fo), [.fr](/transfers/patterns/gtlds/fr), [.gd](/transfers/patterns/gtlds/gd), [.gl](/transfers/patterns/gtlds/gl), [.info.bh](/transfers/patterns/gtlds/info.bh), [.io](/transfers/patterns/gtlds/io), [.lc](/transfers/patterns/gtlds/lc), [.lv](/transfers/patterns/gtlds/lv), [.me](/transfers/patterns/gtlds/me), [.me.bh](/transfers/patterns/gtlds/me.bh), [.mn](/transfers/patterns/gtlds/mn), [.name.bh](/transfers/patterns/gtlds/name.bh), [.net.bh](/transfers/patterns/gtlds/net.bh), [.org.bh](/transfers/patterns/gtlds/org.bh), [.pm](/transfers/patterns/gtlds/pm), [.pr](/transfers/patterns/gtlds/pr), [.radio.am](/transfers/patterns/gtlds/radio.am), [.radio.fm](/transfers/patterns/gtlds/radio.fm), [.re](/transfers/patterns/gtlds/re), [.sc](/transfers/patterns/gtlds/sc), [.tf](/transfers/patterns/gtlds/tf), [.to](/transfers/patterns/gtlds/to), [.tv](/transfers/patterns/gtlds/tv), [.us](/transfers/patterns/gtlds/us), [.vc](/transfers/patterns/gtlds/vc), [.vg](/transfers/patterns/gtlds/vg), [.vu](/transfers/patterns/gtlds/vu), [.wf](/transfers/patterns/gtlds/wf), [.ws](/transfers/patterns/gtlds/ws), [.yt](/transfers/patterns/gtlds/yt) | ✅ OpusDNS | ✅ OpusDNS | ↗️ You, at eNom |
| [Auth code set by the registry](/transfers/patterns/registry-auth-code) | [.nu](/transfers/patterns/registry-auth-code/nu), [.se](/transfers/patterns/registry-auth-code/se) | ➖ | ↗️ You, at eNom (a new one) | ➖ |
| [gTLDs and most ccTLDs](/transfers/patterns/gtlds) | [.com.se](/transfers/patterns/gtlds/com.se) | ✅ OpusDNS | ↗️ You, at eNom (a new one) | ↗️ You, at eNom |
| [No auth code, with approval](/transfers/patterns/no-auth-code) | [.lu](/transfers/patterns/no-auth-code/lu) | ➖ | ➖ | 👤 The holder, by email |

[.is](/transfers/patterns/is) has no transfer at its registry. Its page explains what to do instead.

At [.uk](/transfers/patterns/push/uk), the domain is pushed to OpusDNS's tag instead of approved.

Until you transfer a domain, OpusDNS can make some changes to it at eNom. See [What OpusDNS can do at eNom](/products/connected-registrars/registrars#enom).
