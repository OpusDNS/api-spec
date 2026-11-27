# Transfer from InterNetX

Transferring a domain from InterNetX to OpusDNS takes a few steps. This page shows, for each TLD, which steps OpusDNS takes for you and which you take at InterNetX. OpusDNS takes its steps once you have [connected](/products/connected-registrars/connect) your InterNetX account (`INTERNETX` in the API) and [requested the transfer](/products/connected-registrars/transfer-to-opusdns). Leave out the auth code where OpusDNS gets it for you.

✅ OpusDNS does it for you · ↗️ you do it at your registrar · ✉️ the domain's holder approves by email · ⚙️ the registry does it on its own · ➖ the TLD doesn't have it

At most TLDs, the steps that depend on the registrar:

| Remove the lock | Get the auth code | Approve |
| :---: | :---: | :---: |
| ✅ OpusDNS | ✅ OpusDNS | ✅ OpusDNS |

While WHOIS privacy is on, turn it off at InterNetX first: InterNetX refuses to remove the lock under it.

## At most TLDs

| # | Step | Who | What happens |
| --- | --- | --- | --- |
| 1 | Turn WHOIS privacy off | ↗️ You, at InterNetX | InterNetX refuses to remove the lock while WHOIS privacy is on. Turn it off at InterNetX first. |
| 2 | Remove the transfer lock | ✅ OpusDNS | OpusDNS removes the transfer lock at InterNetX. |
| 3 | Get the auth code | ✅ OpusDNS | OpusDNS reads the auth code at InterNetX. |
| 4 | Request the transfer | ✅ OpusDNS | OpusDNS sends the transfer to the registry. |
| 5 | The registry notifies InterNetX | ⚙️ The registry | The registry tells InterNetX about the transfer. |
| 6 | Approve the transfer | ✅ OpusDNS | OpusDNS approves the transfer at InterNetX. |
| 7 | The registry transfers the domain | ⚙️ The registry | The registry transfers the domain to OpusDNS. |
| 8 | Finish the transfer | ✅ OpusDNS | OpusDNS books the transfer, sets the transfer lock and stops syncing the domain from InterNetX. |

Step 1 applies only while WHOIS privacy is on, and only at TLDs that have a WHOIS privacy service.

For gTLDs, these steps follow ICANN's [Transfer Policy](https://www.icann.org/resources/pages/transfer-policy-2024-02-21-en). ccTLDs often differ. See [Transfer to OpusDNS](/transfers/overview) for both.

## TLDs with other steps

Search this page for a TLD, such as `.se`. A TLD that isn't listed takes the steps above.

| TLDs | Steps |
| --- | --- |
| [.ch](/tld-knowledge-base/cctlds/ch), [.cz](/tld-knowledge-base/cctlds/cz), [.de](/tld-knowledge-base/cctlds/de), [.dk](/tld-knowledge-base/cctlds/dk), [.eu](/tld-knowledge-base/cctlds/eu), [.gr](/tld-knowledge-base/cctlds/gr), [.li](/tld-knowledge-base/cctlds/li), [.lt](/tld-knowledge-base/cctlds/lt), [.nl](/tld-knowledge-base/cctlds/nl), [.no](/tld-knowledge-base/cctlds/no), [.pl](/tld-knowledge-base/cctlds/pl), [.pt](/tld-knowledge-base/cctlds/pt), [.ro](/tld-knowledge-base/cctlds/ro), [.si](/tld-knowledge-base/cctlds/si) | ✅ Get the auth code → ✅ Request the transfer → ⚙️ The registry transfers the domain → ✅ Finish the transfer |
| [.be](/tld-knowledge-base/cctlds/be), .cl, .ee, [.gg](/tld-knowledge-base/cctlds/gg), [.je](/tld-knowledge-base/cctlds/je), [.sk](/tld-knowledge-base/cctlds/sk) | ✅ Remove the transfer lock → ✅ Get the auth code → ✅ Request the transfer → ⚙️ The registry transfers the domain → ✅ Finish the transfer |
| [.co.za](/tld-knowledge-base/cctlds/co.za), [.net.za](/tld-knowledge-base/cctlds/net.za), [.org.za](/tld-knowledge-base/cctlds/org.za), [.web.za](/tld-knowledge-base/cctlds/web.za) | ✅ Request the transfer → ⚙️ The registry notifies InterNetX → ✅ Approve the transfer → ⚙️ The registry transfers the domain → ✅ Finish the transfer |
| [.at](/tld-knowledge-base/cctlds/at), [.it](/tld-knowledge-base/cctlds/it), [.mx](/tld-knowledge-base/cctlds/mx) | ✅ Get the auth code → ✅ Request the transfer → ⚙️ The registry notifies InterNetX → ✅ Approve the transfer → ⚙️ The registry transfers the domain → ✅ Finish the transfer |
| [.nu](/tld-knowledge-base/cctlds/nu), [.se](/tld-knowledge-base/cctlds/se) | ↗️ Get a new auth code → ✅ Request the transfer → ⚙️ The registry transfers the domain → ✅ Finish the transfer |
| [.ca](/tld-knowledge-base/cctlds/ca) | ↗️ Turn WHOIS privacy off → ✅ Remove the transfer lock → ✅ Get the auth code → ✅ Request the transfer → ⚙️ The registry transfers the domain → ✅ Finish the transfer |
| [.com.se](/tld-knowledge-base/cctlds/com.se) | ↗️ Turn WHOIS privacy off → ✅ Remove the transfer lock → ↗️ Get a new auth code → ✅ Request the transfer → ⚙️ The registry notifies InterNetX → ✅ Approve the transfer → ⚙️ The registry transfers the domain → ✅ Finish the transfer |
| .is | The TLD has no transfers. |
| [.lu](/tld-knowledge-base/cctlds/lu) | ✅ Request the transfer → ⚙️ The registry notifies InterNetX → ✉️ Approve the transfer → ⚙️ The registry transfers the domain → ✅ Finish the transfer |
| [.uk](/tld-knowledge-base/cctlds/uk) | ✅ Remove the transfer lock → ✅ Book the domain at OpusDNS → ✅ Push the domain to OpusDNS's tag → ⚙️ The registry transfers the domain → ✅ Finish the transfer |

## Managing a connected domain

What OpusDNS can do with a domain you hold at InterNetX until you transfer it:

| Action | Who | Note |
| --- | --- | --- |
| See the transfer lock | ✅ OpusDNS | OpusDNS reads the transfer lock at InterNetX. |
| Set or remove the transfer lock | ✅ OpusDNS | OpusDNS sets and removes the lock through the InterNetX API. |
| See the nameservers | ✅ OpusDNS | OpusDNS reads the nameservers in each sync. |
| Change the nameservers | ✅ OpusDNS | OpusDNS changes the nameservers through the InterNetX API. |
| See the contacts | ✅ OpusDNS | OpusDNS reads the contacts in each sync. |
| Change the registrant | ↗️ You, at InterNetX | OpusDNS cannot change the registrant on connected domains yet. Change it at InterNetX. |
| Change the other contacts | ↗️ You, at InterNetX | OpusDNS cannot change the other contacts on connected domains yet. Change them at InterNetX. |
| Remove a contact role | ↗️ You, at InterNetX | OpusDNS cannot remove a contact from a connected domain. Remove it at InterNetX. Not every TLD allows it: see the TLD Knowledge Base. |
| See WHOIS privacy | ↗️ You, at InterNetX | OpusDNS has no access to WHOIS privacy at InterNetX yet. Check it at InterNetX. |
| Turn WHOIS privacy on or off | ↗️ You, at InterNetX | OpusDNS has no access to WHOIS privacy at InterNetX yet. Change it at InterNetX. |

TLDs where this differs:

| TLDs | What differs |
| --- | --- |
| [.at](/tld-knowledge-base/cctlds/at), [.ch](/tld-knowledge-base/cctlds/ch), [.co.za](/tld-knowledge-base/cctlds/co.za), [.cz](/tld-knowledge-base/cctlds/cz), [.de](/tld-knowledge-base/cctlds/de), [.dk](/tld-knowledge-base/cctlds/dk), [.eu](/tld-knowledge-base/cctlds/eu), [.gr](/tld-knowledge-base/cctlds/gr), .is, [.it](/tld-knowledge-base/cctlds/it), [.li](/tld-knowledge-base/cctlds/li), [.lt](/tld-knowledge-base/cctlds/lt), [.lu](/tld-knowledge-base/cctlds/lu), [.mx](/tld-knowledge-base/cctlds/mx), [.net.za](/tld-knowledge-base/cctlds/net.za), [.nl](/tld-knowledge-base/cctlds/nl), [.no](/tld-knowledge-base/cctlds/no), [.nu](/tld-knowledge-base/cctlds/nu), [.org.za](/tld-knowledge-base/cctlds/org.za), [.pl](/tld-knowledge-base/cctlds/pl), [.pt](/tld-knowledge-base/cctlds/pt), [.ro](/tld-knowledge-base/cctlds/ro), [.se](/tld-knowledge-base/cctlds/se), [.si](/tld-knowledge-base/cctlds/si), [.web.za](/tld-knowledge-base/cctlds/web.za) | ➖ See the transfer lock: no transfer lock<br>➖ Set or remove the transfer lock: no transfer lock |
