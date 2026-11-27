# Transfer from PartnerGate

What moving a domain from PartnerGate to OpusDNS takes, at each TLD: which steps OpusDNS takes for you and which you take at PartnerGate. OpusDNS takes its steps once you have [connected](/products/connected-registrars/connect) your PartnerGate account (`DOMAIN_BESTELLSYSTEM` in the API) and [requested the transfer](/products/connected-registrars/transfer-to-opusdns) without an auth code.

✅ OpusDNS does it for you · ↗️ you do it at your registrar · ✉️ the domain's holder approves by email · ⚙️ the registry does it on its own · ➖ the TLD doesn't have it

## At most TLDs

| # | Step | Who | What happens |
| --- | --- | --- | --- |
| 1 | Remove the transfer lock | ↗️ You, at PartnerGate | OpusDNS cannot see the lock at PartnerGate, so it leaves it. Remove it at PartnerGate. |
| 2 | Get the auth code | ✅ OpusDNS | OpusDNS reads the auth code at PartnerGate. |
| 3 | Request the transfer | ✅ OpusDNS | OpusDNS sends the transfer to the registry. |
| 4 | The registry notifies PartnerGate | ⚙️ The registry | The registry tells PartnerGate about the transfer. |
| 5 | Approve the transfer | ✅ OpusDNS | OpusDNS approves the transfer at PartnerGate. |
| 6 | The registry moves the domain | ⚙️ The registry | The registry moves the domain to OpusDNS. |
| 7 | Finish the transfer | ✅ OpusDNS | OpusDNS books the transfer, sets the transfer lock and stops mirroring the domain from PartnerGate. |

For gTLDs, such as `.com`, these steps follow ICANN's Transfer Policy, which binds every ICANN-accredited registrar and gTLD registry: a locked domain can't be transferred, the new registrar requests the transfer with the auth code, and the current registrar can approve it. If it doesn't, the registry completes the transfer after five days. ccTLD registries set their own rules, so their steps often differ.

## TLDs with other steps

Search this page for a TLD, such as `.se`. A TLD that isn't listed takes the steps above.

| TLDs | Steps |
| --- | --- |
| [.ch](/tld-knowledge-base/cctlds/ch), [.cz](/tld-knowledge-base/cctlds/cz), [.de](/tld-knowledge-base/cctlds/de), [.dk](/tld-knowledge-base/cctlds/dk), [.eu](/tld-knowledge-base/cctlds/eu), [.gr](/tld-knowledge-base/cctlds/gr), [.li](/tld-knowledge-base/cctlds/li), [.lt](/tld-knowledge-base/cctlds/lt), [.nl](/tld-knowledge-base/cctlds/nl), [.no](/tld-knowledge-base/cctlds/no), [.pl](/tld-knowledge-base/cctlds/pl), [.pt](/tld-knowledge-base/cctlds/pt), [.ro](/tld-knowledge-base/cctlds/ro), [.si](/tld-knowledge-base/cctlds/si) | ✅ Get the auth code → ✅ Request the transfer → ⚙️ The registry moves the domain → ✅ Finish the transfer |
| [.be](/tld-knowledge-base/cctlds/be), [.ca](/tld-knowledge-base/cctlds/ca), .cl, [.gg](/tld-knowledge-base/cctlds/gg), [.je](/tld-knowledge-base/cctlds/je), [.sk](/tld-knowledge-base/cctlds/sk) | ↗️ Remove the transfer lock → ✅ Get the auth code → ✅ Request the transfer → ⚙️ The registry moves the domain → ✅ Finish the transfer |
| [.co.za](/tld-knowledge-base/cctlds/co.za), [.net.za](/tld-knowledge-base/cctlds/net.za), [.org.za](/tld-knowledge-base/cctlds/org.za), [.web.za](/tld-knowledge-base/cctlds/web.za) | ✅ Request the transfer → ⚙️ The registry notifies PartnerGate → ✅ Approve the transfer → ⚙️ The registry moves the domain → ✅ Finish the transfer |
| [.at](/tld-knowledge-base/cctlds/at), [.it](/tld-knowledge-base/cctlds/it), [.mx](/tld-knowledge-base/cctlds/mx) | ✅ Get the auth code → ✅ Request the transfer → ⚙️ The registry notifies PartnerGate → ✅ Approve the transfer → ⚙️ The registry moves the domain → ✅ Finish the transfer |
| [.nu](/tld-knowledge-base/cctlds/nu), [.se](/tld-knowledge-base/cctlds/se) | ↗️ Get a new auth code → ✅ Request the transfer → ⚙️ The registry moves the domain → ✅ Finish the transfer |
| [.com.se](/tld-knowledge-base/cctlds/com.se) | ↗️ Remove the transfer lock → ↗️ Get a new auth code → ✅ Request the transfer → ⚙️ The registry notifies PartnerGate → ✅ Approve the transfer → ⚙️ The registry moves the domain → ✅ Finish the transfer |
| .ee | ↗️ Remove the transfer lock → ✅ Get the auth code → ✅ Request the transfer → ⚙️ The registry moves the domain → ✅ Finish the transfer |
| .is | The TLD has no transfers. |
| [.lu](/tld-knowledge-base/cctlds/lu) | ✅ Request the transfer → ⚙️ The registry notifies PartnerGate → ✉️ Approve the transfer → ⚙️ The registry moves the domain → ✅ Finish the transfer |
| [.uk](/tld-knowledge-base/cctlds/uk) | ↗️ Remove the transfer lock → ✅ Book the domain at OpusDNS → ↗️ Push the domain to OpusDNS's tag → ⚙️ The registry moves the domain → ✅ Finish the transfer |

## Managing a connected domain

Until it moves, what OpusDNS can do with a domain you hold at PartnerGate:

| Action | Who | Note |
| --- | --- | --- |
| See the transfer lock | ↗️ You, at PartnerGate | OpusDNS does not read the lock at PartnerGate. Check it at PartnerGate. |
| Set or remove the transfer lock | ✅ OpusDNS | OpusDNS changes the lock through the PartnerGate API. |
| See the nameservers | ✅ OpusDNS | OpusDNS reads the nameservers in each sync. |
| Change the nameservers | ✅ OpusDNS | OpusDNS changes the nameservers through the PartnerGate API. |
| See the contacts | ✅ OpusDNS | OpusDNS reads the contacts in each sync. |
| Change the registrant | ↗️ You, at PartnerGate | OpusDNS cannot change the registrant at PartnerGate. Change it at PartnerGate. |
| Change the other contacts | ↗️ You, at PartnerGate | OpusDNS cannot change the other contacts on connected domains yet. Change them at PartnerGate. |
| Remove a contact role | ↗️ You, at PartnerGate | OpusDNS cannot remove a contact from a connected domain. Remove it at PartnerGate. Not every TLD allows it: see the TLD Knowledge Base. |
| See WHOIS privacy | ↗️ You, at PartnerGate | OpusDNS has no access to WHOIS privacy at PartnerGate yet. Check it at PartnerGate. |
| Turn WHOIS privacy on or off | ↗️ You, at PartnerGate | OpusDNS has no access to WHOIS privacy at PartnerGate yet. Change it at PartnerGate. |

TLDs where this differs:

| TLD | What differs |
| --- | --- |
| [.at](/tld-knowledge-base/cctlds/at) | ➖ Set or remove the transfer lock: no transfer lock |
| [.ch](/tld-knowledge-base/cctlds/ch) | ➖ Set or remove the transfer lock: no transfer lock |
| [.co.za](/tld-knowledge-base/cctlds/co.za) | ➖ Set or remove the transfer lock: no transfer lock |
| [.cz](/tld-knowledge-base/cctlds/cz) | ➖ Set or remove the transfer lock: no transfer lock |
| [.de](/tld-knowledge-base/cctlds/de) | ➖ Set or remove the transfer lock: no transfer lock |
| [.dk](/tld-knowledge-base/cctlds/dk) | ➖ Set or remove the transfer lock: no transfer lock |
| [.eu](/tld-knowledge-base/cctlds/eu) | ➖ Set or remove the transfer lock: no transfer lock |
| [.gr](/tld-knowledge-base/cctlds/gr) | ➖ Set or remove the transfer lock: no transfer lock |
| .is | ➖ Set or remove the transfer lock: no transfer lock |
| [.it](/tld-knowledge-base/cctlds/it) | ➖ Set or remove the transfer lock: no transfer lock |
| [.li](/tld-knowledge-base/cctlds/li) | ➖ Set or remove the transfer lock: no transfer lock |
| [.lt](/tld-knowledge-base/cctlds/lt) | ➖ Set or remove the transfer lock: no transfer lock |
| [.lu](/tld-knowledge-base/cctlds/lu) | ➖ Set or remove the transfer lock: no transfer lock |
| [.mx](/tld-knowledge-base/cctlds/mx) | ➖ Set or remove the transfer lock: no transfer lock |
| [.net.za](/tld-knowledge-base/cctlds/net.za) | ➖ Set or remove the transfer lock: no transfer lock |
| [.nl](/tld-knowledge-base/cctlds/nl) | ➖ Set or remove the transfer lock: no transfer lock |
| [.no](/tld-knowledge-base/cctlds/no) | ➖ Set or remove the transfer lock: no transfer lock |
| [.nu](/tld-knowledge-base/cctlds/nu) | ➖ Set or remove the transfer lock: no transfer lock |
| [.org.za](/tld-knowledge-base/cctlds/org.za) | ➖ Set or remove the transfer lock: no transfer lock |
| [.pl](/tld-knowledge-base/cctlds/pl) | ➖ Set or remove the transfer lock: no transfer lock |
| [.pt](/tld-knowledge-base/cctlds/pt) | ➖ Set or remove the transfer lock: no transfer lock |
| [.ro](/tld-knowledge-base/cctlds/ro) | ➖ Set or remove the transfer lock: no transfer lock |
| [.se](/tld-knowledge-base/cctlds/se) | ➖ Set or remove the transfer lock: no transfer lock |
| [.si](/tld-knowledge-base/cctlds/si) | ➖ Set or remove the transfer lock: no transfer lock |
| [.web.za](/tld-knowledge-base/cctlds/web.za) | ➖ Set or remove the transfer lock: no transfer lock |
