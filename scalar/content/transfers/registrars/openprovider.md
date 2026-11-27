# Transfer from Openprovider

[Connect](/products/connected-registrars/connect) your Openprovider account and [request the transfer](/products/connected-registrars/transfer-to-opusdns). At most TLDs, OpusDNS then removes the transfer lock and gets the auth code at Openprovider. Leave out `auth_code` in the request. At gTLDs, you can approve the transfer at Openprovider to finish sooner. In the API, Openprovider is `OPENPROVIDER`.

✅ OpusDNS does it for you · ↗️ you do it at your registrar · 👤 the domain's holder approves by email · ⚙️ the registry does it on its own · ➖ the TLD doesn't have it

## By transfer pattern

Your TLD's transfer pattern sets which steps a transfer has. ➖ marks a step the TLD doesn't have. Openprovider sets which of the other steps OpusDNS can take for you. Each TLD's page names its pattern.

| Transfer pattern | TLDs | Remove the lock | Get the auth code | Approve |
| --- | --- | :---: | :---: | :---: |
| [gTLDs and most ccTLDs](/transfers/patterns/gtlds) | 499, such as [.com](/transfers/patterns/gtlds/com), [.net](/transfers/patterns/gtlds/net) and [.org](/transfers/patterns/gtlds/org) | ✅ OpusDNS | ✅ OpusDNS | ↗️ You, optional |
| [Auth code set by the registry](/transfers/patterns/registry-auth-code) | 9, such as [.cz](/transfers/patterns/registry-auth-code/cz), [.dk](/transfers/patterns/registry-auth-code/dk) and [.eu](/transfers/patterns/registry-auth-code/eu) | ➖ | ✅ OpusDNS | ➖ |
| [Auth code only](/transfers/patterns/auth-code) | 7, such as [.ch](/transfers/patterns/auth-code/ch), [.de](/transfers/patterns/auth-code/de) and [.li](/transfers/patterns/auth-code/li) | ➖ | ✅ OpusDNS | ➖ |
| [Unlock and auth code](/transfers/patterns/unlock-auth-code) | [.ca](/transfers/patterns/unlock-auth-code/ca), [.cl](/transfers/patterns/unlock-auth-code/cl), [.ee](/transfers/patterns/unlock-auth-code/ee), [.gg](/transfers/patterns/unlock-auth-code/gg), [.je](/transfers/patterns/unlock-auth-code/je), [.sk](/transfers/patterns/unlock-auth-code/sk) | ✅ OpusDNS | ✅ OpusDNS | ➖ |
| [No auth code, with approval](/transfers/patterns/no-auth-code) | [.co.za](/transfers/patterns/no-auth-code/co.za), [.lu](/transfers/patterns/no-auth-code/lu), [.net.za](/transfers/patterns/no-auth-code/net.za), [.org.za](/transfers/patterns/no-auth-code/org.za), [.web.za](/transfers/patterns/no-auth-code/web.za) | ➖ | ➖ | ↗️ You, at Openprovider |
| [Auth code and approval](/transfers/patterns/auth-code-approval) | [.at](/transfers/patterns/auth-code-approval/at), [.it](/transfers/patterns/auth-code-approval/it), [.mx](/transfers/patterns/auth-code-approval/mx) | ➖ | ✅ OpusDNS | ↗️ You, at Openprovider |
| [Unlock, auth code set by the registry, and approval](/transfers/patterns/unlock-registry-auth-code-approval) | [.cymru](/transfers/patterns/unlock-registry-auth-code-approval/cymru), [.wales](/transfers/patterns/unlock-registry-auth-code-approval/wales) | ✅ OpusDNS | ✅ OpusDNS | ↗️ You, optional |
| [Unlock and auth code set by the registry](/transfers/patterns/unlock-registry-auth-code) | [.be](/transfers/patterns/unlock-registry-auth-code/be) | ✅ OpusDNS | ✅ OpusDNS | ➖ |
| [Push to a tag](/transfers/patterns/push) | [.uk](/transfers/patterns/push/uk) | ✅ OpusDNS | ➖ | ✅ OpusDNS (push) |

These TLDs differ from their pattern's row:

| TLDs | Remove the lock | Get the auth code | Approve |
| --- | :---: | :---: | :---: |
| [.ag](/transfers/patterns/gtlds/ag), [.ai](/transfers/patterns/gtlds/ai), [.bh](/transfers/patterns/gtlds/bh), [.biz.bh](/transfers/patterns/gtlds/biz.bh), [.bz](/transfers/patterns/gtlds/bz), [.cc](/transfers/patterns/gtlds/cc), [.cc.bh](/transfers/patterns/gtlds/cc.bh), [.co](/transfers/patterns/gtlds/co), [.co.nl](/transfers/patterns/gtlds/co.nl), [.co.no](/transfers/patterns/gtlds/co.no), [.com.bh](/transfers/patterns/gtlds/com.bh), [.com.de](/transfers/patterns/gtlds/com.de), [.edu.bh](/transfers/patterns/gtlds/edu.bh), [.fm](/transfers/patterns/gtlds/fm), [.fo](/transfers/patterns/gtlds/fo), [.fr](/transfers/patterns/gtlds/fr), [.gd](/transfers/patterns/gtlds/gd), [.gl](/transfers/patterns/gtlds/gl), [.info.bh](/transfers/patterns/gtlds/info.bh), [.io](/transfers/patterns/gtlds/io), [.lc](/transfers/patterns/gtlds/lc), [.lv](/transfers/patterns/gtlds/lv), [.me](/transfers/patterns/gtlds/me), [.me.bh](/transfers/patterns/gtlds/me.bh), [.mn](/transfers/patterns/gtlds/mn), [.name.bh](/transfers/patterns/gtlds/name.bh), [.net.bh](/transfers/patterns/gtlds/net.bh), [.org.bh](/transfers/patterns/gtlds/org.bh), [.pm](/transfers/patterns/gtlds/pm), [.pr](/transfers/patterns/gtlds/pr), [.radio.am](/transfers/patterns/gtlds/radio.am), [.radio.fm](/transfers/patterns/gtlds/radio.fm), [.re](/transfers/patterns/gtlds/re), [.sc](/transfers/patterns/gtlds/sc), [.tf](/transfers/patterns/gtlds/tf), [.to](/transfers/patterns/gtlds/to), [.tv](/transfers/patterns/gtlds/tv), [.us](/transfers/patterns/gtlds/us), [.vc](/transfers/patterns/gtlds/vc), [.vg](/transfers/patterns/gtlds/vg), [.vu](/transfers/patterns/gtlds/vu), [.wf](/transfers/patterns/gtlds/wf), [.ws](/transfers/patterns/gtlds/ws), [.yt](/transfers/patterns/gtlds/yt) | ✅ OpusDNS | ✅ OpusDNS | ↗️ You, at Openprovider |
| [.nu](/transfers/patterns/registry-auth-code/nu), [.se](/transfers/patterns/registry-auth-code/se) | ➖ | ↗️ You, at Openprovider (a new one) | ➖ |
| [.com.se](/transfers/patterns/gtlds/com.se) | ✅ OpusDNS | ↗️ You, at Openprovider (a new one) | ↗️ You, at Openprovider |
| [.lu](/transfers/patterns/no-auth-code/lu) | ➖ | ➖ | 👤 The holder, by email |

[.is](/transfers/patterns/is) has no transfer at its registry. Its page explains what to do instead.

At [.uk](/transfers/patterns/push/uk), the domain is pushed to OpusDNS's tag instead of approved.

## The steps at most TLDs

| # | Step | What happens |
| --- | --- | --- |
| 1 | ✅ Remove the transfer lock | OpusDNS removes the transfer lock at Openprovider. |
| 2 | ✅ Get the auth code | OpusDNS reads the auth code at Openprovider. |
| 3 | ✅ Request the transfer | OpusDNS sends the transfer to the registry. |
| 4 | ⚙️ The registry notifies Openprovider | The registry tells Openprovider about the transfer. |
| 5 | ↗️ Approve the transfer (optional) | Optional: approve it at Openprovider to finish sooner. Otherwise the registry completes the transfer after five days. |
| 6 | ⚙️ The registry transfers the domain | The registry transfers the domain to OpusDNS. |
| 7 | ✅ Finish the transfer | OpusDNS completes the transfer in your account, sets the transfer lock and stops syncing the domain from Openprovider. |

For gTLDs, these steps follow ICANN's [Transfer Policy](https://www.icann.org/resources/pages/transfer-policy-2024-02-21-en). Each TLD with transfers follows one of the [transfer patterns](/transfers/overview#transfer-patterns).

## Managing a connected domain

Until you transfer a domain, OpusDNS can take some actions on it at Openprovider. The others stay with you.

### Transfer lock

| Action | Note |
| --- | --- |
| ✅ See the transfer lock | OpusDNS reads the transfer lock at Openprovider. |
| ✅ Set or remove the transfer lock | OpusDNS sets and removes the lock through the Openprovider API. |

TLDs where this differs:

| TLDs | What differs |
| --- | --- |
| [.at](/tld-knowledge-base/cctlds/at), [.ch](/tld-knowledge-base/cctlds/ch), [.co.za](/tld-knowledge-base/cctlds/co.za), [.cz](/tld-knowledge-base/cctlds/cz), [.de](/tld-knowledge-base/cctlds/de), [.dk](/tld-knowledge-base/cctlds/dk), [.eu](/tld-knowledge-base/cctlds/eu), [.gr](/tld-knowledge-base/cctlds/gr), .is, [.it](/tld-knowledge-base/cctlds/it), [.li](/tld-knowledge-base/cctlds/li), [.lt](/tld-knowledge-base/cctlds/lt), [.lu](/tld-knowledge-base/cctlds/lu), [.mx](/tld-knowledge-base/cctlds/mx), [.net.za](/tld-knowledge-base/cctlds/net.za), [.nl](/tld-knowledge-base/cctlds/nl), [.no](/tld-knowledge-base/cctlds/no), [.nu](/tld-knowledge-base/cctlds/nu), [.org.za](/tld-knowledge-base/cctlds/org.za), [.pl](/tld-knowledge-base/cctlds/pl), [.pt](/tld-knowledge-base/cctlds/pt), [.ro](/tld-knowledge-base/cctlds/ro), [.se](/tld-knowledge-base/cctlds/se), [.si](/tld-knowledge-base/cctlds/si), [.web.za](/tld-knowledge-base/cctlds/web.za) | ➖ No transfer lock |

### Nameservers

| Action | Note |
| --- | --- |
| ✅ See the nameservers | OpusDNS reads the nameservers in each sync. |
| ✅ Change the nameservers | OpusDNS changes the nameservers through the Openprovider API. |

### Contacts

| Action | Note |
| --- | --- |
| ✅ See the contacts | OpusDNS reads the contacts in each sync. |
| ↗️ Change the registrant | OpusDNS can't change the registrant at Openprovider. Change it at Openprovider. |
| ↗️ Change the other contacts | OpusDNS can't change the other contacts at Openprovider. Change them at Openprovider. |
| ↗️ Remove a contact role | OpusDNS can't remove a contact from a connected domain. Remove it at Openprovider. Not every TLD allows it. See the [TLD Knowledge Base](/tld-knowledge-base). |

### WHOIS privacy

| Action | Note |
| --- | --- |
| ↗️ See WHOIS privacy | OpusDNS has no access to WHOIS privacy at Openprovider. Check it at Openprovider. |
| ↗️ Turn WHOIS privacy on or off | OpusDNS has no access to WHOIS privacy at Openprovider. Change it at Openprovider. |
