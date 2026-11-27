# Transfer from eNom

To transfer a domain from eNom, [connect](/products/connected-registrars/connect) your eNom account and [request the transfer](/products/connected-registrars/transfer-to-opusdns). In the API, eNom is `ENOM`.

## By transfer pattern

Your TLD's transfer pattern sets which steps a transfer has. eNom sets which of them OpusDNS can take for you. ➖ marks a step your TLD doesn't have. Where the table shows ↗️ under Get the auth code, send the code as `auth_code` in your request.

Search this page for your TLD. If it isn't listed exactly, it is in the first row.

| Transfer pattern | TLDs | Remove the lock | Get the auth code | Approve |
| --- | --- | :---: | :---: | :---: |
| [gTLDs and most ccTLDs](/transfers/patterns/gtlds) | Every other TLD, such as [.com](/tld-knowledge-base/gtlds/com), [.net](/tld-knowledge-base/gtlds/net) and [.org](/tld-knowledge-base/gtlds/org) | ✅ OpusDNS | ✅ OpusDNS | ↗️ You, optional |
| [Auth code set by the registry](/transfers/patterns/registry-auth-code) | [.cz](/tld-knowledge-base/cctlds/cz), [.dk](/tld-knowledge-base/cctlds/dk), [.eu](/tld-knowledge-base/cctlds/eu), [.gr](/tld-knowledge-base/cctlds/gr), [.lt](/tld-knowledge-base/cctlds/lt), [.nl](/tld-knowledge-base/cctlds/nl), [.nu](/tld-knowledge-base/cctlds/nu), [.ro](/tld-knowledge-base/cctlds/ro), [.se](/tld-knowledge-base/cctlds/se) | ➖ | ✅ OpusDNS | ➖ |
| [Auth code only](/transfers/patterns/auth-code) | [.ch](/tld-knowledge-base/cctlds/ch), [.de](/tld-knowledge-base/cctlds/de), [.li](/tld-knowledge-base/cctlds/li), [.no](/tld-knowledge-base/cctlds/no), [.pl](/tld-knowledge-base/cctlds/pl), [.pt](/tld-knowledge-base/cctlds/pt), [.si](/tld-knowledge-base/cctlds/si) | ➖ | ✅ OpusDNS | ➖ |
| [Unlock and auth code](/transfers/patterns/unlock-auth-code) | [.ca](/tld-knowledge-base/cctlds/ca), .cl, .ee, [.gg](/tld-knowledge-base/cctlds/gg), [.je](/tld-knowledge-base/cctlds/je), [.sk](/tld-knowledge-base/cctlds/sk) | ✅ OpusDNS | ✅ OpusDNS | ➖ |
| [No auth code, with approval](/transfers/patterns/no-auth-code) | [.co.za](/tld-knowledge-base/cctlds/co.za), [.lu](/tld-knowledge-base/cctlds/lu), [.net.za](/tld-knowledge-base/cctlds/net.za), [.org.za](/tld-knowledge-base/cctlds/org.za), [.web.za](/tld-knowledge-base/cctlds/web.za) | ➖ | ➖ | ↗️ You, at eNom |
| [Auth code and approval](/transfers/patterns/auth-code-approval) | [.at](/tld-knowledge-base/cctlds/at), [.it](/tld-knowledge-base/cctlds/it), [.mx](/tld-knowledge-base/cctlds/mx) | ➖ | ✅ OpusDNS | ↗️ You, at eNom |
| [Unlock, auth code set by the registry, and approval](/transfers/patterns/unlock-registry-auth-code-approval) | [.cymru](/tld-knowledge-base/gtlds/cymru), [.wales](/tld-knowledge-base/gtlds/wales) | ✅ OpusDNS | ✅ OpusDNS | ↗️ You, optional |
| [Unlock and auth code set by the registry](/transfers/patterns/unlock-registry-auth-code) | [.be](/tld-knowledge-base/cctlds/be) | ✅ OpusDNS | ✅ OpusDNS | ➖ |
| [Push to a tag](/transfers/patterns/push) | [.uk](/tld-knowledge-base/cctlds/uk) | ✅ OpusDNS | ➖ | ↗️ You, at eNom (push) |

These TLDs differ from their pattern's row:

| Transfer pattern | TLDs | Remove the lock | Get the auth code | Approve |
| --- | --- | :---: | :---: | :---: |
| [gTLDs and most ccTLDs](/transfers/patterns/gtlds) | [.ag](/tld-knowledge-base/cctlds/ag), [.ai](/tld-knowledge-base/cctlds/ai), [.bh](/tld-knowledge-base/cctlds/bh), [.biz.bh](/tld-knowledge-base/cctlds/biz.bh), [.bz](/tld-knowledge-base/cctlds/bz), [.cc](/tld-knowledge-base/cctlds/cc), [.cc.bh](/tld-knowledge-base/cctlds/cc.bh), [.co](/tld-knowledge-base/cctlds/co), [.co.nl](/tld-knowledge-base/cctlds/co.nl), [.co.no](/tld-knowledge-base/cctlds/co.no), [.com.bh](/tld-knowledge-base/cctlds/com.bh), [.com.de](/tld-knowledge-base/cctlds/com.de), [.edu.bh](/tld-knowledge-base/cctlds/edu.bh), [.fm](/tld-knowledge-base/cctlds/fm), [.fo](/tld-knowledge-base/cctlds/fo), [.fr](/tld-knowledge-base/cctlds/fr), [.gd](/tld-knowledge-base/cctlds/gd), [.gl](/tld-knowledge-base/cctlds/gl), [.info.bh](/tld-knowledge-base/cctlds/info.bh), [.io](/tld-knowledge-base/cctlds/io), [.lc](/tld-knowledge-base/cctlds/lc), [.lv](/tld-knowledge-base/cctlds/lv), [.me](/tld-knowledge-base/cctlds/me), [.me.bh](/tld-knowledge-base/cctlds/me.bh), [.mn](/tld-knowledge-base/cctlds/mn), [.name.bh](/tld-knowledge-base/cctlds/name.bh), [.net.bh](/tld-knowledge-base/cctlds/net.bh), [.org.bh](/tld-knowledge-base/cctlds/org.bh), [.pm](/tld-knowledge-base/cctlds/pm), [.pr](/tld-knowledge-base/cctlds/pr), [.radio.am](/tld-knowledge-base/cctlds/radio.am), [.radio.fm](/tld-knowledge-base/cctlds/radio.fm), [.re](/tld-knowledge-base/cctlds/re), [.sc](/tld-knowledge-base/cctlds/sc), [.tf](/tld-knowledge-base/cctlds/tf), [.to](/tld-knowledge-base/cctlds/to), [.tv](/tld-knowledge-base/cctlds/tv), [.us](/tld-knowledge-base/cctlds/us), [.vc](/tld-knowledge-base/cctlds/vc), [.vg](/tld-knowledge-base/cctlds/vg), [.vu](/tld-knowledge-base/cctlds/vu), [.wf](/tld-knowledge-base/cctlds/wf), [.ws](/tld-knowledge-base/cctlds/ws), [.yt](/tld-knowledge-base/cctlds/yt) | ✅ OpusDNS | ✅ OpusDNS | ↗️ You, at eNom |
| [Auth code set by the registry](/transfers/patterns/registry-auth-code) | [.nu](/tld-knowledge-base/cctlds/nu), [.se](/tld-knowledge-base/cctlds/se) | ➖ | ↗️ You, at eNom (a new one) | ➖ |
| [gTLDs and most ccTLDs](/transfers/patterns/gtlds) | [.com.se](/tld-knowledge-base/cctlds/com.se) | ✅ OpusDNS | ↗️ You, at eNom (a new one) | ↗️ You, at eNom |
| [No auth code, with approval](/transfers/patterns/no-auth-code) | [.lu](/tld-knowledge-base/cctlds/lu) | ➖ | ➖ | 👤 The holder, by email |

.is has no transfer at its registry. See [Transfer to OpusDNS](/transfers/overview#transfer-patterns) for what to do instead.

At [.uk](/tld-knowledge-base/cctlds/uk), the domain is pushed to OpusDNS's tag instead of approved.

Until you transfer a domain, OpusDNS can make some changes to it at eNom. See [What OpusDNS can do at eNom](/products/connected-registrars/registrars#enom).
