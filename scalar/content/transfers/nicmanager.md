# Transfer from NICManager

Transferring a domain from NICManager to OpusDNS takes a few steps. This page shows, for each TLD, which steps OpusDNS takes for you and which you take at NICManager. OpusDNS takes its steps once you have [connected](/products/connected-registrars/connect) your NICManager account (`NICMANAGER` in the API) and [requested the transfer](/products/connected-registrars/transfer-to-opusdns). Leave out the auth code where OpusDNS gets it for you.

✅ OpusDNS does it for you · ↗️ you do it at your registrar · ✉️ the domain's holder approves by email · ⚙️ the registry does it on its own

## At most TLDs

| # | Step | Who | What happens |
| --- | --- | --- | --- |
| 1 | Remove the transfer lock | ✅ OpusDNS | OpusDNS removes the transfer lock at NICManager. |
| 2 | Get the auth code | ↗️ You, at NICManager | Get the auth code at NICManager and send it as `auth_code`. |
| 3 | Request the transfer | ✅ OpusDNS | OpusDNS sends the transfer to the registry. |
| 4 | The registry notifies NICManager | ⚙️ The registry | The registry tells NICManager about the transfer. |
| 5 | Approve the transfer | ✅ OpusDNS | OpusDNS approves the transfer at NICManager. |
| 6 | The registry transfers the domain | ⚙️ The registry | The registry transfers the domain to OpusDNS. |
| 7 | Finish the transfer | ✅ OpusDNS | OpusDNS books the transfer, sets the transfer lock and stops syncing the domain from NICManager. |

For gTLDs, such as `.com`, these steps follow ICANN's Transfer Policy, which every registrar accredited by ICANN and every gTLD registry must follow. The current registrar removes the lock and hands out the auth code on request, within five days at the latest. The new registrar requests the transfer with the code, and the registry checks it. The current registrar can approve the transfer at once or deny it, but only for the reasons the policy lists, such as fraud or a registration or transfer in the last 60 days. If it doesn't deny it within five days, the registry completes the transfer. ccTLD registries set their own rules, so their steps often differ.

## TLDs with other steps

Search this page for a TLD, such as `.se`. A TLD that isn't listed takes the steps above.

| TLDs | Steps |
| --- | --- |
| [.ch](/tld-knowledge-base/cctlds/ch), [.cz](/tld-knowledge-base/cctlds/cz), [.de](/tld-knowledge-base/cctlds/de), [.dk](/tld-knowledge-base/cctlds/dk), [.eu](/tld-knowledge-base/cctlds/eu), [.gr](/tld-knowledge-base/cctlds/gr), [.li](/tld-knowledge-base/cctlds/li), [.lt](/tld-knowledge-base/cctlds/lt), [.nl](/tld-knowledge-base/cctlds/nl), [.no](/tld-knowledge-base/cctlds/no), [.pl](/tld-knowledge-base/cctlds/pl), [.pt](/tld-knowledge-base/cctlds/pt), [.ro](/tld-knowledge-base/cctlds/ro), [.si](/tld-knowledge-base/cctlds/si) | ↗️ Get the auth code → ✅ Request the transfer → ⚙️ The registry transfers the domain → ✅ Finish the transfer |
| [.be](/tld-knowledge-base/cctlds/be), [.ca](/tld-knowledge-base/cctlds/ca), .cl, .ee, [.gg](/tld-knowledge-base/cctlds/gg), [.je](/tld-knowledge-base/cctlds/je), [.sk](/tld-knowledge-base/cctlds/sk) | ✅ Remove the transfer lock → ↗️ Get the auth code → ✅ Request the transfer → ⚙️ The registry transfers the domain → ✅ Finish the transfer |
| [.co.za](/tld-knowledge-base/cctlds/co.za), [.net.za](/tld-knowledge-base/cctlds/net.za), [.org.za](/tld-knowledge-base/cctlds/org.za), [.web.za](/tld-knowledge-base/cctlds/web.za) | ✅ Request the transfer → ⚙️ The registry notifies NICManager → ✅ Approve the transfer → ⚙️ The registry transfers the domain → ✅ Finish the transfer |
| [.at](/tld-knowledge-base/cctlds/at), [.it](/tld-knowledge-base/cctlds/it), [.mx](/tld-knowledge-base/cctlds/mx) | ↗️ Get the auth code → ✅ Request the transfer → ⚙️ The registry notifies NICManager → ✅ Approve the transfer → ⚙️ The registry transfers the domain → ✅ Finish the transfer |
| [.nu](/tld-knowledge-base/cctlds/nu), [.se](/tld-knowledge-base/cctlds/se) | ↗️ Get a new auth code → ✅ Request the transfer → ⚙️ The registry transfers the domain → ✅ Finish the transfer |
| [.com.se](/tld-knowledge-base/cctlds/com.se) | ✅ Remove the transfer lock → ↗️ Get a new auth code → ✅ Request the transfer → ⚙️ The registry notifies NICManager → ✅ Approve the transfer → ⚙️ The registry transfers the domain → ✅ Finish the transfer |
| .is | The TLD has no transfers. |
| [.lu](/tld-knowledge-base/cctlds/lu) | ✅ Request the transfer → ⚙️ The registry notifies NICManager → ✉️ Approve the transfer → ⚙️ The registry transfers the domain → ✅ Finish the transfer |
| [.uk](/tld-knowledge-base/cctlds/uk) | ✅ Remove the transfer lock → ✅ Book the domain at OpusDNS → ↗️ Push the domain to OpusDNS's tag → ⚙️ The registry transfers the domain → ✅ Finish the transfer |

## Managing a connected domain

What OpusDNS can do with a domain you hold at NICManager until you transfer it:

| Action | Who | Note |
| --- | --- | --- |
| See the transfer lock | ✅ OpusDNS | OpusDNS reads the transfer lock at NICManager. |
| Set or remove the transfer lock | ✅ OpusDNS | OpusDNS sets and removes the lock through the NICManager API. |
| See the nameservers | ✅ OpusDNS | OpusDNS reads the nameservers in each sync. |
| Change the nameservers | ↗️ You, at NICManager | OpusDNS cannot change the nameservers at NICManager. Change them at NICManager. |
| See the contacts | ✅ OpusDNS | OpusDNS reads the contacts in each sync. |
| Change the registrant | ↗️ You, at NICManager | OpusDNS cannot change the registrant at NICManager. Change it at NICManager. |
| Change the other contacts | ↗️ You, at NICManager | OpusDNS cannot change the other contacts at NICManager. Change them at NICManager. |
| Remove a contact role | ↗️ You, at NICManager | OpusDNS cannot remove a contact from a connected domain. Remove it at NICManager. Not every TLD allows it: see the TLD Knowledge Base. |
| See WHOIS privacy | ↗️ You, at NICManager | OpusDNS has no access to WHOIS privacy at NICManager yet. Check it at NICManager. |
| Turn WHOIS privacy on or off | ↗️ You, at NICManager | OpusDNS has no access to WHOIS privacy at NICManager yet. Change it at NICManager. |

TLDs where this differs:

| TLDs | What differs |
| --- | --- |
| [.at](/tld-knowledge-base/cctlds/at), [.ch](/tld-knowledge-base/cctlds/ch), [.co.za](/tld-knowledge-base/cctlds/co.za), [.cz](/tld-knowledge-base/cctlds/cz), [.de](/tld-knowledge-base/cctlds/de), [.dk](/tld-knowledge-base/cctlds/dk), [.eu](/tld-knowledge-base/cctlds/eu), [.gr](/tld-knowledge-base/cctlds/gr), .is, [.it](/tld-knowledge-base/cctlds/it), [.li](/tld-knowledge-base/cctlds/li), [.lt](/tld-knowledge-base/cctlds/lt), [.lu](/tld-knowledge-base/cctlds/lu), [.mx](/tld-knowledge-base/cctlds/mx), [.net.za](/tld-knowledge-base/cctlds/net.za), [.nl](/tld-knowledge-base/cctlds/nl), [.no](/tld-knowledge-base/cctlds/no), [.nu](/tld-knowledge-base/cctlds/nu), [.org.za](/tld-knowledge-base/cctlds/org.za), [.pl](/tld-knowledge-base/cctlds/pl), [.pt](/tld-knowledge-base/cctlds/pt), [.ro](/tld-knowledge-base/cctlds/ro), [.se](/tld-knowledge-base/cctlds/se), [.si](/tld-knowledge-base/cctlds/si), [.web.za](/tld-knowledge-base/cctlds/web.za) | ➖ See the transfer lock: no transfer lock<br>➖ Set or remove the transfer lock: no transfer lock |
