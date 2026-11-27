# Transfer from Realtime Register

At most TLDs, first remove the transfer lock at Realtime Register. Then [connect](/products/connected-registrars/connect) your Realtime Register account and [request the transfer](/products/connected-registrars/transfer-to-opusdns). OpusDNS gets the auth code at Realtime Register. Leave out `auth_code` in the request. At gTLDs, you can approve the transfer at Realtime Register to finish sooner. In the API, Realtime Register is `REALTIMEREGISTER`.

✅ OpusDNS does it for you · ↗️ you do it at your registrar · 👤 the domain's holder approves by email · ⚙️ the registry does it on its own · ➖ the TLD doesn't have it

## Who takes which step

Search this page for a TLD, such as `.se`. A TLD that isn't listed takes the steps in the first row.

| TLDs | Remove the lock | Get the auth code | Approve |
| --- | :---: | :---: | :---: |
| Most TLDs | ↗️ You, at Realtime Register | ✅ OpusDNS | ↗️ You, optional |
| [.ag](/transfers/patterns/gtlds/ag), [.ai](/transfers/patterns/gtlds/ai), [.bh](/transfers/patterns/gtlds/bh), [.biz.bh](/transfers/patterns/gtlds/biz.bh), [.bz](/transfers/patterns/gtlds/bz), [.cc](/transfers/patterns/gtlds/cc), [.cc.bh](/transfers/patterns/gtlds/cc.bh), [.co](/transfers/patterns/gtlds/co), [.co.nl](/transfers/patterns/gtlds/co.nl), [.co.no](/transfers/patterns/gtlds/co.no), [.com.bh](/transfers/patterns/gtlds/com.bh), [.com.de](/transfers/patterns/gtlds/com.de), [.edu.bh](/transfers/patterns/gtlds/edu.bh), [.fm](/transfers/patterns/gtlds/fm), [.fo](/transfers/patterns/gtlds/fo), [.fr](/transfers/patterns/gtlds/fr), [.gd](/transfers/patterns/gtlds/gd), [.gl](/transfers/patterns/gtlds/gl), [.info.bh](/transfers/patterns/gtlds/info.bh), [.io](/transfers/patterns/gtlds/io), [.lc](/transfers/patterns/gtlds/lc), [.lv](/transfers/patterns/gtlds/lv), [.me](/transfers/patterns/gtlds/me), [.me.bh](/transfers/patterns/gtlds/me.bh), [.mn](/transfers/patterns/gtlds/mn), [.name.bh](/transfers/patterns/gtlds/name.bh), [.net.bh](/transfers/patterns/gtlds/net.bh), [.org.bh](/transfers/patterns/gtlds/org.bh), [.pm](/transfers/patterns/gtlds/pm), [.pr](/transfers/patterns/gtlds/pr), [.radio.am](/transfers/patterns/gtlds/radio.am), [.radio.fm](/transfers/patterns/gtlds/radio.fm), [.re](/transfers/patterns/gtlds/re), [.sc](/transfers/patterns/gtlds/sc), [.tf](/transfers/patterns/gtlds/tf), [.to](/transfers/patterns/gtlds/to), [.tv](/transfers/patterns/gtlds/tv), [.us](/transfers/patterns/gtlds/us), [.vc](/transfers/patterns/gtlds/vc), [.vg](/transfers/patterns/gtlds/vg), [.vu](/transfers/patterns/gtlds/vu), [.wf](/transfers/patterns/gtlds/wf), [.ws](/transfers/patterns/gtlds/ws), [.yt](/transfers/patterns/gtlds/yt) | ↗️ You, at Realtime Register | ✅ OpusDNS | ↗️ You, at Realtime Register |
| [.ch](/transfers/patterns/auth-code/ch), [.cz](/transfers/patterns/registry-auth-code/cz), [.de](/transfers/patterns/auth-code/de), [.dk](/transfers/patterns/registry-auth-code/dk), [.eu](/transfers/patterns/registry-auth-code/eu), [.gr](/transfers/patterns/registry-auth-code/gr), [.li](/transfers/patterns/auth-code/li), [.lt](/transfers/patterns/registry-auth-code/lt), [.nl](/transfers/patterns/registry-auth-code/nl), [.no](/transfers/patterns/auth-code/no), [.pl](/transfers/patterns/auth-code/pl), [.pt](/transfers/patterns/auth-code/pt), [.ro](/transfers/patterns/registry-auth-code/ro), [.si](/transfers/patterns/auth-code/si) | ➖ | ✅ OpusDNS | ➖ |
| [.be](/transfers/patterns/registry-auth-code/be), [.ca](/transfers/patterns/auth-code/ca), [.cl](/transfers/patterns/gtlds/cl), [.ee](/transfers/patterns/auth-code/ee), [.gg](/transfers/patterns/auth-code/gg), [.je](/transfers/patterns/auth-code/je), [.sk](/transfers/patterns/auth-code/sk) | ↗️ You, at Realtime Register | ✅ OpusDNS | ➖ |
| [.co.za](/transfers/patterns/no-auth-code/co.za), [.net.za](/transfers/patterns/no-auth-code/net.za), [.org.za](/transfers/patterns/no-auth-code/org.za), [.web.za](/transfers/patterns/no-auth-code/web.za) | ➖ | ➖ | ↗️ You, at Realtime Register |
| [.at](/transfers/patterns/gtlds/at), [.it](/transfers/patterns/gtlds/it), [.mx](/transfers/patterns/gtlds/mx) | ➖ | ✅ OpusDNS | ↗️ You, at Realtime Register |
| [.nu](/transfers/patterns/registry-auth-code/nu), [.se](/transfers/patterns/registry-auth-code/se) | ➖ | ↗️ You, at Realtime Register (a new one) | ➖ |
| [.com.se](/transfers/patterns/gtlds/com.se) | ↗️ You, at Realtime Register | ↗️ You, at Realtime Register (a new one) | ↗️ You, at Realtime Register |
| [.lu](/transfers/patterns/no-auth-code/lu) | ➖ | ➖ | 👤 The holder, by email |
| [.uk](/transfers/patterns/push/uk) | ↗️ You, at Realtime Register | ➖ | ✅ OpusDNS (push) |

No transfers at [.is](/transfers/patterns/is).

At [.uk](/transfers/patterns/push/uk), the domain is pushed to OpusDNS's tag instead of approved.

## The steps at most TLDs

| # | Step | What happens |
| --- | --- | --- |
| 1 | ↗️ Remove the transfer lock | Remove the transfer lock at Realtime Register. |
| 2 | ✅ Get the auth code | OpusDNS reads the auth code at Realtime Register. |
| 3 | ✅ Request the transfer | OpusDNS sends the transfer to the registry. |
| 4 | ⚙️ The registry notifies Realtime Register | The registry tells Realtime Register about the transfer. |
| 5 | ↗️ Approve the transfer (optional) | Optional: approve it at Realtime Register to finish sooner. Otherwise the registry completes the transfer after five days. |
| 6 | ⚙️ The registry transfers the domain | The registry transfers the domain to OpusDNS. |
| 7 | ✅ Finish the transfer | OpusDNS completes the transfer in your account, sets the transfer lock and stops syncing the domain from Realtime Register. |

For gTLDs, these steps follow ICANN's [Transfer Policy](https://www.icann.org/resources/pages/transfer-policy-2024-02-21-en). Every TLD follows one of the [transfer patterns](/transfers/overview#transfer-patterns).

## Managing a connected domain

Until you transfer a domain, OpusDNS can take some actions on it at Realtime Register. The others stay with you.

### Transfer lock

| Action | Note |
| --- | --- |
| ↗️ See the transfer lock | Check the transfer lock at Realtime Register. |
| ↗️ Set or remove the transfer lock | OpusDNS can't change the transfer lock at Realtime Register. Change it at Realtime Register. |

### Nameservers

| Action | Note |
| --- | --- |
| ✅ See the nameservers | OpusDNS reads the nameservers in each sync. |
| ✅ Change the nameservers | OpusDNS changes the nameservers through the Realtime Register API. |

### Contacts

| Action | Note |
| --- | --- |
| ✅ See the contacts | OpusDNS reads the contacts in each sync. |
| ↗️ Change the registrant | OpusDNS can't change the registrant at Realtime Register. Change it at Realtime Register. |
| ↗️ Change the other contacts | OpusDNS can't change the other contacts at Realtime Register. Change them at Realtime Register. |
| ↗️ Remove a contact role | OpusDNS can't remove a contact from a connected domain. Remove it at Realtime Register. Not every TLD allows it. See the [TLD Knowledge Base](/tld-knowledge-base). |

### WHOIS privacy

| Action | Note |
| --- | --- |
| ↗️ See WHOIS privacy | OpusDNS has no access to WHOIS privacy at Realtime Register. Check it at Realtime Register. |
| ↗️ Turn WHOIS privacy on or off | OpusDNS has no access to WHOIS privacy at Realtime Register. Change it at Realtime Register. |
