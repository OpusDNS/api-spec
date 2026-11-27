# Transfer from Realtime Register

What moving a domain from Realtime Register to OpusDNS takes, at each TLD: which steps OpusDNS takes for you and which you take at Realtime Register. OpusDNS takes its steps once you have [connected](/products/connected-registrars/connect) your Realtime Register account (`REALTIMEREGISTER` in the API) and [requested the transfer](/products/connected-registrars/transfer-to-opusdns) without an auth code.

✅ OpusDNS does it for you · ↗️ you do it at your registrar · ✉️ the domain's holder approves by email · ⚙️ the registry does it on its own · ➖ the TLD doesn't have it

## At most TLDs

| # | Step | Who | What happens |
| --- | --- | --- | --- |
| 1 | Remove the transfer lock | ↗️ You, at Realtime Register | Remove the transfer lock at Realtime Register. |
| 2 | Get the auth code | ✅ OpusDNS | OpusDNS reads the auth code at Realtime Register. |
| 3 | Request the transfer | ✅ OpusDNS | OpusDNS sends the transfer to the registry. |
| 4 | The registry notifies Realtime Register | ⚙️ The registry | The registry tells Realtime Register about the transfer. |
| 5 | Approve the transfer | ↗️ You, at Realtime Register | Approve the transfer at Realtime Register. |
| 6 | The registry moves the domain | ⚙️ The registry | The registry moves the domain to OpusDNS. |
| 7 | Finish the transfer | ✅ OpusDNS | OpusDNS books the transfer, sets the transfer lock and stops mirroring the domain from Realtime Register. |

For gTLDs, such as `.com`, these steps follow ICANN's Transfer Policy, which binds every ICANN-accredited registrar and gTLD registry: a locked domain can't be transferred, the new registrar requests the transfer with the auth code, and the current registrar can approve it. If it doesn't, the registry completes the transfer after five days. ccTLD registries set their own rules, so their steps often differ.

## TLDs with other steps

Search this page for a TLD, such as `.se`. A TLD that isn't listed takes the steps above.

| TLDs | Steps |
| --- | --- |
| [.ch](/tld-knowledge-base/cctlds/ch), [.cz](/tld-knowledge-base/cctlds/cz), [.de](/tld-knowledge-base/cctlds/de), [.dk](/tld-knowledge-base/cctlds/dk), [.eu](/tld-knowledge-base/cctlds/eu), [.gr](/tld-knowledge-base/cctlds/gr), [.li](/tld-knowledge-base/cctlds/li), [.lt](/tld-knowledge-base/cctlds/lt), [.nl](/tld-knowledge-base/cctlds/nl), [.no](/tld-knowledge-base/cctlds/no), [.pl](/tld-knowledge-base/cctlds/pl), [.pt](/tld-knowledge-base/cctlds/pt), [.ro](/tld-knowledge-base/cctlds/ro), [.si](/tld-knowledge-base/cctlds/si) | ✅ Get the auth code → ✅ Request the transfer → ⚙️ The registry moves the domain → ✅ Finish the transfer |
| [.be](/tld-knowledge-base/cctlds/be), [.ca](/tld-knowledge-base/cctlds/ca), .cl, [.gg](/tld-knowledge-base/cctlds/gg), [.je](/tld-knowledge-base/cctlds/je), [.sk](/tld-knowledge-base/cctlds/sk) | ↗️ Remove the transfer lock → ✅ Get the auth code → ✅ Request the transfer → ⚙️ The registry moves the domain → ✅ Finish the transfer |
| [.co.za](/tld-knowledge-base/cctlds/co.za), [.net.za](/tld-knowledge-base/cctlds/net.za), [.org.za](/tld-knowledge-base/cctlds/org.za), [.web.za](/tld-knowledge-base/cctlds/web.za) | ✅ Request the transfer → ⚙️ The registry notifies Realtime Register → ↗️ Approve the transfer → ⚙️ The registry moves the domain → ✅ Finish the transfer |
| [.at](/tld-knowledge-base/cctlds/at), [.it](/tld-knowledge-base/cctlds/it), [.mx](/tld-knowledge-base/cctlds/mx) | ✅ Get the auth code → ✅ Request the transfer → ⚙️ The registry notifies Realtime Register → ↗️ Approve the transfer → ⚙️ The registry moves the domain → ✅ Finish the transfer |
| [.nu](/tld-knowledge-base/cctlds/nu), [.se](/tld-knowledge-base/cctlds/se) | ↗️ Get a new auth code → ✅ Request the transfer → ⚙️ The registry moves the domain → ✅ Finish the transfer |
| [.com.se](/tld-knowledge-base/cctlds/com.se) | ↗️ Remove the transfer lock → ↗️ Get a new auth code → ✅ Request the transfer → ⚙️ The registry notifies Realtime Register → ↗️ Approve the transfer → ⚙️ The registry moves the domain → ✅ Finish the transfer |
| .ee | ↗️ Remove the transfer lock → ✅ Get the auth code → ✅ Request the transfer → ⚙️ The registry moves the domain → ✅ Finish the transfer |
| .is | The TLD has no transfers. |
| [.lu](/tld-knowledge-base/cctlds/lu) | ✅ Request the transfer → ⚙️ The registry notifies Realtime Register → ✉️ Approve the transfer → ⚙️ The registry moves the domain → ✅ Finish the transfer |
| [.uk](/tld-knowledge-base/cctlds/uk) | ↗️ Remove the transfer lock → ✅ Book the domain at OpusDNS → ✅ Push the domain to OpusDNS's tag → ⚙️ The registry moves the domain → ✅ Finish the transfer |

## Managing a connected domain

Until it moves, what OpusDNS can do with a domain you hold at Realtime Register:

| Action | Who | Note |
| --- | --- | --- |
| See the transfer lock | ↗️ You, at Realtime Register | Reading the transfer lock through OpusDNS isn't verified at Realtime Register yet. Check it at Realtime Register. |
| Set or remove the transfer lock | ↗️ You, at Realtime Register | OpusDNS cannot change the transfer lock at Realtime Register. Change it at Realtime Register. |
| See the nameservers | ✅ OpusDNS | OpusDNS reads the nameservers in each sync. |
| Change the nameservers | ✅ OpusDNS | OpusDNS changes the nameservers through the Realtime Register API. |
| See the contacts | ✅ OpusDNS | OpusDNS reads the contacts in each sync. |
| Change the registrant | ↗️ You, at Realtime Register | OpusDNS cannot change the registrant at Realtime Register. Change it at Realtime Register. |
| Change the other contacts | ↗️ You, at Realtime Register | OpusDNS cannot change the other contacts at Realtime Register. Change them at Realtime Register. |
| Remove a contact role | ↗️ You, at Realtime Register | OpusDNS cannot remove a contact from a connected domain. Remove it at Realtime Register. Not every TLD allows it: see the TLD Knowledge Base. |
| See WHOIS privacy | ↗️ You, at Realtime Register | OpusDNS has no access to WHOIS privacy at Realtime Register yet. Check it at Realtime Register. |
| Turn WHOIS privacy on or off | ↗️ You, at Realtime Register | OpusDNS has no access to WHOIS privacy at Realtime Register yet. Change it at Realtime Register. |
