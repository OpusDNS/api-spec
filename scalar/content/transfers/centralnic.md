# Transfer from CentralNic Reseller

What moving a domain from CentralNic Reseller to OpusDNS takes, at each TLD: which steps OpusDNS takes for you and which you take at CentralNic Reseller. OpusDNS takes its steps once you have [connected](/products/connected-registrars/connect) your CentralNic Reseller account (`CENTRALNIC` in the API) and [requested the transfer](/products/connected-registrars/transfer-to-opusdns) without an auth code.

✅ OpusDNS does it for you · ↗️ you do it at your registrar · ✉️ the domain's holder approves by email · ⚙️ the registry does it on its own · ➖ the TLD doesn't have it

## At most TLDs

| # | Step | Who | What happens |
| --- | --- | --- | --- |
| 1 | Remove the transfer lock | ✅ OpusDNS | OpusDNS removes the transfer lock at CentralNic Reseller. |
| 2 | Get the auth code | ✅ OpusDNS | OpusDNS reads the auth code at CentralNic Reseller. |
| 3 | Request the transfer | ✅ OpusDNS | OpusDNS sends the transfer to the registry. |
| 4 | The registry notifies CentralNic Reseller | ⚙️ The registry | The registry tells CentralNic Reseller about the transfer. |
| 5 | Approve the transfer | ✅ OpusDNS | OpusDNS approves the transfer at CentralNic Reseller. |
| 6 | The registry moves the domain | ⚙️ The registry | The registry moves the domain to OpusDNS. |
| 7 | Finish the transfer | ✅ OpusDNS | OpusDNS books the transfer, sets the transfer lock and stops mirroring the domain from CentralNic Reseller. |

For gTLDs, such as `.com`, these steps follow ICANN's Transfer Policy, which binds every ICANN-accredited registrar and gTLD registry: a locked domain can't be transferred, the new registrar requests the transfer with the auth code, and the current registrar can approve it. If it doesn't, the registry completes the transfer after five days. ccTLD registries set their own rules, so their steps often differ.

## TLDs with other steps

Search this page for a TLD, such as `.se`. A TLD that isn't listed takes the steps above.

| TLDs | Steps |
| --- | --- |
| [.ch](/tld-knowledge-base/cctlds/ch), [.cz](/tld-knowledge-base/cctlds/cz), [.de](/tld-knowledge-base/cctlds/de), [.dk](/tld-knowledge-base/cctlds/dk), [.eu](/tld-knowledge-base/cctlds/eu), [.gr](/tld-knowledge-base/cctlds/gr), [.li](/tld-knowledge-base/cctlds/li), [.lt](/tld-knowledge-base/cctlds/lt), [.nl](/tld-knowledge-base/cctlds/nl), [.no](/tld-knowledge-base/cctlds/no), [.nu](/tld-knowledge-base/cctlds/nu), [.pl](/tld-knowledge-base/cctlds/pl), [.pt](/tld-knowledge-base/cctlds/pt), [.ro](/tld-knowledge-base/cctlds/ro), [.se](/tld-knowledge-base/cctlds/se), [.si](/tld-knowledge-base/cctlds/si) | ✅ Get the auth code → ✅ Request the transfer → ⚙️ The registry moves the domain → ✅ Finish the transfer |
| [.be](/tld-knowledge-base/cctlds/be), [.ca](/tld-knowledge-base/cctlds/ca), .cl, [.gg](/tld-knowledge-base/cctlds/gg), [.je](/tld-knowledge-base/cctlds/je), [.sk](/tld-knowledge-base/cctlds/sk) | ✅ Remove the transfer lock → ✅ Get the auth code → ✅ Request the transfer → ⚙️ The registry moves the domain → ✅ Finish the transfer |
| [.co.za](/tld-knowledge-base/cctlds/co.za), [.net.za](/tld-knowledge-base/cctlds/net.za), [.org.za](/tld-knowledge-base/cctlds/org.za), [.web.za](/tld-knowledge-base/cctlds/web.za) | ✅ Request the transfer → ⚙️ The registry notifies CentralNic Reseller → ✅ Approve the transfer → ⚙️ The registry moves the domain → ✅ Finish the transfer |
| [.at](/tld-knowledge-base/cctlds/at), [.it](/tld-knowledge-base/cctlds/it), [.mx](/tld-knowledge-base/cctlds/mx) | ✅ Get the auth code → ✅ Request the transfer → ⚙️ The registry notifies CentralNic Reseller → ✅ Approve the transfer → ⚙️ The registry moves the domain → ✅ Finish the transfer |
| .ee | ✅ Remove the transfer lock → ✅ Get the auth code → ✅ Request the transfer → ⚙️ The registry moves the domain → ✅ Finish the transfer |
| .is | The TLD has no transfers. |
| [.lu](/tld-knowledge-base/cctlds/lu) | ✅ Request the transfer → ⚙️ The registry notifies CentralNic Reseller → ✉️ Approve the transfer → ⚙️ The registry moves the domain → ✅ Finish the transfer |
| [.uk](/tld-knowledge-base/cctlds/uk) | ✅ Remove the transfer lock → ✅ Book the domain at OpusDNS → ✅ Push the domain to OpusDNS's tag → ⚙️ The registry moves the domain → ✅ Finish the transfer |

## Managing a connected domain

Until it moves, what OpusDNS can do with a domain you hold at CentralNic Reseller:

| Action | Who | Note |
| --- | --- | --- |
| See the transfer lock | ✅ OpusDNS | OpusDNS reads the transfer lock at CentralNic Reseller. |
| Set or remove the transfer lock | ✅ OpusDNS | OpusDNS changes the lock through the CentralNic Reseller API. |
| See the nameservers | ✅ OpusDNS | OpusDNS reads the nameservers in each sync. |
| Change the nameservers | ✅ OpusDNS | OpusDNS changes the nameservers through the CentralNic Reseller API. |
| See the contacts | ✅ OpusDNS | OpusDNS reads the contacts in each sync. |
| Change the registrant | ↗️ You, at CentralNic Reseller | OpusDNS cannot change the registrant on connected domains yet. Change it at CentralNic Reseller. |
| Change the other contacts | ↗️ You, at CentralNic Reseller | OpusDNS cannot change the other contacts on connected domains yet. Change them at CentralNic Reseller. |
| Remove a contact role | ↗️ You, at CentralNic Reseller | OpusDNS cannot remove a contact from a connected domain. Remove it at CentralNic Reseller. Not every TLD allows it: see the TLD Knowledge Base. |
| See WHOIS privacy | ↗️ You, at CentralNic Reseller | OpusDNS has no access to WHOIS privacy at CentralNic Reseller yet. Check it at CentralNic Reseller. |
| Turn WHOIS privacy on or off | ↗️ You, at CentralNic Reseller | OpusDNS has no access to WHOIS privacy at CentralNic Reseller yet. Change it at CentralNic Reseller. |

TLDs where this differs:

| TLD | What differs |
| --- | --- |
| [.at](/tld-knowledge-base/cctlds/at) | ➖ See the transfer lock: no transfer lock<br>➖ Set or remove the transfer lock: no transfer lock |
| [.ch](/tld-knowledge-base/cctlds/ch) | ➖ See the transfer lock: no transfer lock<br>➖ Set or remove the transfer lock: no transfer lock |
| [.co.za](/tld-knowledge-base/cctlds/co.za) | ➖ See the transfer lock: no transfer lock<br>➖ Set or remove the transfer lock: no transfer lock |
| [.cz](/tld-knowledge-base/cctlds/cz) | ➖ See the transfer lock: no transfer lock<br>➖ Set or remove the transfer lock: no transfer lock |
| [.de](/tld-knowledge-base/cctlds/de) | ➖ See the transfer lock: no transfer lock<br>➖ Set or remove the transfer lock: no transfer lock |
| [.dk](/tld-knowledge-base/cctlds/dk) | ➖ See the transfer lock: no transfer lock<br>➖ Set or remove the transfer lock: no transfer lock |
| [.eu](/tld-knowledge-base/cctlds/eu) | ➖ See the transfer lock: no transfer lock<br>➖ Set or remove the transfer lock: no transfer lock |
| [.gr](/tld-knowledge-base/cctlds/gr) | ➖ See the transfer lock: no transfer lock<br>➖ Set or remove the transfer lock: no transfer lock |
| .is | ➖ See the transfer lock: no transfer lock<br>➖ Set or remove the transfer lock: no transfer lock |
| [.it](/tld-knowledge-base/cctlds/it) | ➖ See the transfer lock: no transfer lock<br>➖ Set or remove the transfer lock: no transfer lock |
| [.li](/tld-knowledge-base/cctlds/li) | ➖ See the transfer lock: no transfer lock<br>➖ Set or remove the transfer lock: no transfer lock |
| [.lt](/tld-knowledge-base/cctlds/lt) | ➖ See the transfer lock: no transfer lock<br>➖ Set or remove the transfer lock: no transfer lock |
| [.lu](/tld-knowledge-base/cctlds/lu) | ➖ See the transfer lock: no transfer lock<br>➖ Set or remove the transfer lock: no transfer lock |
| [.mx](/tld-knowledge-base/cctlds/mx) | ➖ See the transfer lock: no transfer lock<br>➖ Set or remove the transfer lock: no transfer lock |
| [.net.za](/tld-knowledge-base/cctlds/net.za) | ➖ See the transfer lock: no transfer lock<br>➖ Set or remove the transfer lock: no transfer lock |
| [.nl](/tld-knowledge-base/cctlds/nl) | ➖ See the transfer lock: no transfer lock<br>➖ Set or remove the transfer lock: no transfer lock |
| [.no](/tld-knowledge-base/cctlds/no) | ➖ See the transfer lock: no transfer lock<br>➖ Set or remove the transfer lock: no transfer lock |
| [.nu](/tld-knowledge-base/cctlds/nu) | ➖ See the transfer lock: no transfer lock<br>➖ Set or remove the transfer lock: no transfer lock |
| [.org.za](/tld-knowledge-base/cctlds/org.za) | ➖ See the transfer lock: no transfer lock<br>➖ Set or remove the transfer lock: no transfer lock |
| [.pl](/tld-knowledge-base/cctlds/pl) | ➖ See the transfer lock: no transfer lock<br>➖ Set or remove the transfer lock: no transfer lock |
| [.pt](/tld-knowledge-base/cctlds/pt) | ➖ See the transfer lock: no transfer lock<br>➖ Set or remove the transfer lock: no transfer lock |
| [.ro](/tld-knowledge-base/cctlds/ro) | ➖ See the transfer lock: no transfer lock<br>➖ Set or remove the transfer lock: no transfer lock |
| [.se](/tld-knowledge-base/cctlds/se) | ➖ See the transfer lock: no transfer lock<br>➖ Set or remove the transfer lock: no transfer lock |
| [.si](/tld-knowledge-base/cctlds/si) | ➖ See the transfer lock: no transfer lock<br>➖ Set or remove the transfer lock: no transfer lock |
| [.web.za](/tld-knowledge-base/cctlds/web.za) | ➖ See the transfer lock: no transfer lock<br>➖ Set or remove the transfer lock: no transfer lock |
