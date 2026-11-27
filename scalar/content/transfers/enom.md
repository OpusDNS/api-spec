# Transfer from eNom

Transferring a domain from eNom to OpusDNS takes a few steps. This page shows, for each TLD, which steps OpusDNS takes for you and which you take at eNom. OpusDNS takes its steps once you have [connected](/products/connected-registrars/connect) your eNom account (`ENOM` in the API) and [requested the transfer](/products/connected-registrars/transfer-to-opusdns). Leave out the auth code where OpusDNS gets it for you.

✅ OpusDNS does it for you · ↗️ you do it at your registrar · ✉️ the domain's holder approves by email · ⚙️ the registry does it on its own · ➖ the TLD doesn't have it

At most TLDs, the steps that depend on the registrar:

| Remove the lock | Get the auth code | Approve |
| :---: | :---: | :---: |
| ✅ OpusDNS | ✅ OpusDNS | ↗️ You, optional |

## At most TLDs

| # | Step | Who | What happens |
| --- | --- | --- | --- |
| 1 | Remove the transfer lock | ✅ OpusDNS | OpusDNS removes the transfer lock at eNom. |
| 2 | Get the auth code | ✅ OpusDNS | OpusDNS reads the auth code at eNom. |
| 3 | Request the transfer | ✅ OpusDNS | OpusDNS sends the transfer to the registry. |
| 4 | The registry notifies eNom | ⚙️ The registry | The registry tells eNom about the transfer. |
| 5 | Approve the transfer (optional) | ↗️ You, at eNom | Optional: approve it at eNom to finish sooner. Otherwise the registry completes the transfer after five days. |
| 6 | The registry transfers the domain | ⚙️ The registry | The registry transfers the domain to OpusDNS. |
| 7 | Finish the transfer | ✅ OpusDNS | OpusDNS books the transfer, sets the transfer lock and stops syncing the domain from eNom. |

For gTLDs, these steps follow ICANN's [Transfer Policy](https://www.icann.org/resources/pages/transfer-policy-2024-02-21-en). ccTLDs often differ. See [Transfer to OpusDNS](/transfers/overview) for both.

## TLDs with other steps

Search this page for a TLD, such as `.se`. A TLD that isn't listed takes the steps above.

| TLDs | Steps |
| --- | --- |
| [.ag](/tld-knowledge-base/cctlds/ag), [.ai](/tld-knowledge-base/cctlds/ai), [.bh](/tld-knowledge-base/cctlds/bh), [.biz.bh](/tld-knowledge-base/cctlds/biz.bh), [.bz](/tld-knowledge-base/cctlds/bz), [.cc](/tld-knowledge-base/cctlds/cc), [.cc.bh](/tld-knowledge-base/cctlds/cc.bh), [.co](/tld-knowledge-base/cctlds/co), [.co.nl](/tld-knowledge-base/cctlds/co.nl), [.co.no](/tld-knowledge-base/cctlds/co.no), [.com.bh](/tld-knowledge-base/cctlds/com.bh), [.com.de](/tld-knowledge-base/cctlds/com.de), [.edu.bh](/tld-knowledge-base/cctlds/edu.bh), [.fm](/tld-knowledge-base/cctlds/fm), [.fo](/tld-knowledge-base/cctlds/fo), [.fr](/tld-knowledge-base/cctlds/fr), [.gd](/tld-knowledge-base/cctlds/gd), [.gl](/tld-knowledge-base/cctlds/gl), [.info.bh](/tld-knowledge-base/cctlds/info.bh), [.io](/tld-knowledge-base/cctlds/io), [.lc](/tld-knowledge-base/cctlds/lc), [.lv](/tld-knowledge-base/cctlds/lv), [.me](/tld-knowledge-base/cctlds/me), [.me.bh](/tld-knowledge-base/cctlds/me.bh), [.mn](/tld-knowledge-base/cctlds/mn), [.name.bh](/tld-knowledge-base/cctlds/name.bh), [.net.bh](/tld-knowledge-base/cctlds/net.bh), [.org.bh](/tld-knowledge-base/cctlds/org.bh), [.pm](/tld-knowledge-base/cctlds/pm), [.pr](/tld-knowledge-base/cctlds/pr), [.radio.am](/tld-knowledge-base/cctlds/radio.am), [.radio.fm](/tld-knowledge-base/cctlds/radio.fm), [.re](/tld-knowledge-base/cctlds/re), [.sc](/tld-knowledge-base/cctlds/sc), [.tf](/tld-knowledge-base/cctlds/tf), [.to](/tld-knowledge-base/cctlds/to), [.tv](/tld-knowledge-base/cctlds/tv), [.us](/tld-knowledge-base/cctlds/us), [.vc](/tld-knowledge-base/cctlds/vc), [.vg](/tld-knowledge-base/cctlds/vg), [.vu](/tld-knowledge-base/cctlds/vu), [.wf](/tld-knowledge-base/cctlds/wf), [.ws](/tld-knowledge-base/cctlds/ws), [.yt](/tld-knowledge-base/cctlds/yt) | ✅ Remove the transfer lock → ✅ Get the auth code → ✅ Request the transfer → ⚙️ The registry notifies eNom → ↗️ Approve the transfer → ⚙️ The registry transfers the domain → ✅ Finish the transfer |
| [.ch](/tld-knowledge-base/cctlds/ch), [.cz](/tld-knowledge-base/cctlds/cz), [.de](/tld-knowledge-base/cctlds/de), [.dk](/tld-knowledge-base/cctlds/dk), [.eu](/tld-knowledge-base/cctlds/eu), [.gr](/tld-knowledge-base/cctlds/gr), [.li](/tld-knowledge-base/cctlds/li), [.lt](/tld-knowledge-base/cctlds/lt), [.nl](/tld-knowledge-base/cctlds/nl), [.no](/tld-knowledge-base/cctlds/no), [.pl](/tld-knowledge-base/cctlds/pl), [.pt](/tld-knowledge-base/cctlds/pt), [.ro](/tld-knowledge-base/cctlds/ro), [.si](/tld-knowledge-base/cctlds/si) | ✅ Get the auth code → ✅ Request the transfer → ⚙️ The registry transfers the domain → ✅ Finish the transfer |
| [.be](/tld-knowledge-base/cctlds/be), [.ca](/tld-knowledge-base/cctlds/ca), .cl, .ee, [.gg](/tld-knowledge-base/cctlds/gg), [.je](/tld-knowledge-base/cctlds/je), [.sk](/tld-knowledge-base/cctlds/sk) | ✅ Remove the transfer lock → ✅ Get the auth code → ✅ Request the transfer → ⚙️ The registry transfers the domain → ✅ Finish the transfer |
| [.co.za](/tld-knowledge-base/cctlds/co.za), [.net.za](/tld-knowledge-base/cctlds/net.za), [.org.za](/tld-knowledge-base/cctlds/org.za), [.web.za](/tld-knowledge-base/cctlds/web.za) | ✅ Request the transfer → ⚙️ The registry notifies eNom → ↗️ Approve the transfer → ⚙️ The registry transfers the domain → ✅ Finish the transfer |
| [.at](/tld-knowledge-base/cctlds/at), [.it](/tld-knowledge-base/cctlds/it), [.mx](/tld-knowledge-base/cctlds/mx) | ✅ Get the auth code → ✅ Request the transfer → ⚙️ The registry notifies eNom → ↗️ Approve the transfer → ⚙️ The registry transfers the domain → ✅ Finish the transfer |
| [.nu](/tld-knowledge-base/cctlds/nu), [.se](/tld-knowledge-base/cctlds/se) | ↗️ Get a new auth code → ✅ Request the transfer → ⚙️ The registry transfers the domain → ✅ Finish the transfer |
| [.com.se](/tld-knowledge-base/cctlds/com.se) | ✅ Remove the transfer lock → ↗️ Get a new auth code → ✅ Request the transfer → ⚙️ The registry notifies eNom → ↗️ Approve the transfer → ⚙️ The registry transfers the domain → ✅ Finish the transfer |
| .is | The TLD has no transfers. |
| [.lu](/tld-knowledge-base/cctlds/lu) | ✅ Request the transfer → ⚙️ The registry notifies eNom → ✉️ Approve the transfer → ⚙️ The registry transfers the domain → ✅ Finish the transfer |
| [.uk](/tld-knowledge-base/cctlds/uk) | ✅ Remove the transfer lock → ✅ Book the domain at OpusDNS → ↗️ Push the domain to OpusDNS's tag → ⚙️ The registry transfers the domain → ✅ Finish the transfer |

## Managing a connected domain

What OpusDNS can do with a domain you hold at eNom until you transfer it:

| Action | Who | Note |
| --- | --- | --- |
| See the transfer lock | ✅ OpusDNS | OpusDNS reads the transfer lock at eNom. |
| Set or remove the transfer lock | ✅ OpusDNS | OpusDNS sets and removes the lock through the eNom API. |
| See the nameservers | ✅ OpusDNS | OpusDNS reads the nameservers in each sync. |
| Change the nameservers | ✅ OpusDNS | OpusDNS changes the nameservers through the eNom API. |
| See the contacts | ✅ OpusDNS | OpusDNS reads the contacts in each sync. |
| Change the registrant | ↗️ You, at eNom | OpusDNS cannot change the registrant on connected domains yet. Change it at eNom. |
| Change the other contacts | ↗️ You, at eNom | OpusDNS cannot change the other contacts at eNom. Change them at eNom. |
| Remove a contact role | ↗️ You, at eNom | OpusDNS cannot remove a contact from a connected domain. Remove it at eNom. Not every TLD allows it: see the TLD Knowledge Base. |
| See WHOIS privacy | ↗️ You, at eNom | OpusDNS has no access to WHOIS privacy at eNom yet. Check it at eNom. |
| Turn WHOIS privacy on or off | ↗️ You, at eNom | OpusDNS has no access to WHOIS privacy at eNom yet. Change it at eNom. |

TLDs where this differs:

| TLDs | What differs |
| --- | --- |
| [.at](/tld-knowledge-base/cctlds/at), [.ch](/tld-knowledge-base/cctlds/ch), [.co.za](/tld-knowledge-base/cctlds/co.za), [.cz](/tld-knowledge-base/cctlds/cz), [.de](/tld-knowledge-base/cctlds/de), [.dk](/tld-knowledge-base/cctlds/dk), [.eu](/tld-knowledge-base/cctlds/eu), [.gr](/tld-knowledge-base/cctlds/gr), .is, [.it](/tld-knowledge-base/cctlds/it), [.li](/tld-knowledge-base/cctlds/li), [.lt](/tld-knowledge-base/cctlds/lt), [.lu](/tld-knowledge-base/cctlds/lu), [.mx](/tld-knowledge-base/cctlds/mx), [.net.za](/tld-knowledge-base/cctlds/net.za), [.nl](/tld-knowledge-base/cctlds/nl), [.no](/tld-knowledge-base/cctlds/no), [.nu](/tld-knowledge-base/cctlds/nu), [.org.za](/tld-knowledge-base/cctlds/org.za), [.pl](/tld-knowledge-base/cctlds/pl), [.pt](/tld-knowledge-base/cctlds/pt), [.ro](/tld-knowledge-base/cctlds/ro), [.se](/tld-knowledge-base/cctlds/se), [.si](/tld-knowledge-base/cctlds/si), [.web.za](/tld-knowledge-base/cctlds/web.za) | ➖ See the transfer lock: no transfer lock<br>➖ Set or remove the transfer lock: no transfer lock |
