# Transfer from InterNetX

Transferring a domain from InterNetX to OpusDNS takes a few steps. This page shows which steps OpusDNS takes for you at each TLD and which stay with you. OpusDNS takes its steps once you have [connected](/products/connected-registrars/connect) your InterNetX account and [requested the transfer](/products/connected-registrars/transfer-to-opusdns). In the API, InterNetX is `INTERNETX`. Leave out the auth code where OpusDNS gets it for you.

✅ OpusDNS does it for you · ↗️ you do it at your registrar · 👤 the domain's holder approves by email · ⚙️ the registry does it on its own · ➖ the TLD doesn't have it

## Who takes which step

Search this page for a TLD, such as `.se`. A TLD that isn't listed takes the steps in the first row.

| TLDs | Remove the lock | Get the auth code | Approve |
| --- | :---: | :---: | :---: |
| Most TLDs | ✅ OpusDNS | ✅ OpusDNS | ✅ OpusDNS |
| [.ch](/tld-knowledge-base/cctlds/ch), [.cz](/tld-knowledge-base/cctlds/cz), [.de](/tld-knowledge-base/cctlds/de), [.dk](/tld-knowledge-base/cctlds/dk), [.eu](/tld-knowledge-base/cctlds/eu), [.gr](/tld-knowledge-base/cctlds/gr), [.li](/tld-knowledge-base/cctlds/li), [.lt](/tld-knowledge-base/cctlds/lt), [.nl](/tld-knowledge-base/cctlds/nl), [.no](/tld-knowledge-base/cctlds/no), [.pl](/tld-knowledge-base/cctlds/pl), [.pt](/tld-knowledge-base/cctlds/pt), [.ro](/tld-knowledge-base/cctlds/ro), [.si](/tld-knowledge-base/cctlds/si) | ➖ | ✅ OpusDNS | ➖ |
| [.be](/tld-knowledge-base/cctlds/be), [.ca](/tld-knowledge-base/cctlds/ca), .cl, .ee, [.gg](/tld-knowledge-base/cctlds/gg), [.je](/tld-knowledge-base/cctlds/je), [.sk](/tld-knowledge-base/cctlds/sk) | ✅ OpusDNS | ✅ OpusDNS | ➖ |
| [.co.za](/tld-knowledge-base/cctlds/co.za), [.net.za](/tld-knowledge-base/cctlds/net.za), [.org.za](/tld-knowledge-base/cctlds/org.za), [.web.za](/tld-knowledge-base/cctlds/web.za) | ➖ | ➖ | ✅ OpusDNS |
| [.at](/tld-knowledge-base/cctlds/at), [.it](/tld-knowledge-base/cctlds/it), [.mx](/tld-knowledge-base/cctlds/mx) | ➖ | ✅ OpusDNS | ✅ OpusDNS |
| [.nu](/tld-knowledge-base/cctlds/nu), [.se](/tld-knowledge-base/cctlds/se) | ➖ | ↗️ You, at InterNetX (a new one) | ➖ |
| [.com.se](/tld-knowledge-base/cctlds/com.se) | ✅ OpusDNS | ↗️ You, at InterNetX (a new one) | ✅ OpusDNS |
| [.lu](/tld-knowledge-base/cctlds/lu) | ➖ | ➖ | 👤 The holder, by email |
| [.uk](/tld-knowledge-base/cctlds/uk) | ✅ OpusDNS | ➖ | ✅ OpusDNS (push) |

No transfers at .is.

At [.uk](/tld-knowledge-base/cctlds/uk), the domain is pushed to OpusDNS's tag instead of approved.

At TLDs with a WHOIS privacy service, InterNetX refuses to remove the lock while privacy is on. Turn it off at InterNetX first.

## The steps at most TLDs

| # | Step | What happens |
| --- | --- | --- |
| 1 | ↗️ Turn WHOIS privacy off | InterNetX refuses to remove the lock while WHOIS privacy is on. Turn it off at InterNetX first. |
| 2 | ✅ Remove the transfer lock | OpusDNS removes the transfer lock at InterNetX. |
| 3 | ✅ Get the auth code | OpusDNS reads the auth code at InterNetX. |
| 4 | ✅ Request the transfer | OpusDNS sends the transfer to the registry. |
| 5 | ⚙️ The registry notifies InterNetX | The registry tells InterNetX about the transfer. |
| 6 | ✅ Approve the transfer | OpusDNS approves the transfer at InterNetX. |
| 7 | ⚙️ The registry transfers the domain | The registry transfers the domain to OpusDNS. |
| 8 | ✅ Finish the transfer | OpusDNS adds the domain to your account, sets the transfer lock and stops syncing it from InterNetX. |

Step 1 applies only while WHOIS privacy is on, and only at TLDs that have a WHOIS privacy service.

For gTLDs, these steps follow ICANN's [Transfer Policy](https://www.icann.org/resources/pages/transfer-policy-2024-02-21-en). ccTLDs often differ. See [Transfer to OpusDNS](/transfers/overview) for both.

## Managing a connected domain

Until you transfer a domain, OpusDNS can take some actions on it at InterNetX. The others stay with you.

### Transfer lock

| Action | Note |
| --- | --- |
| ✅ See the transfer lock | OpusDNS reads the transfer lock at InterNetX. |
| ✅ Set or remove the transfer lock | OpusDNS sets and removes the lock through the InterNetX API. |

TLDs where this differs:

| TLDs | What differs |
| --- | --- |
| [.at](/tld-knowledge-base/cctlds/at), [.ch](/tld-knowledge-base/cctlds/ch), [.co.za](/tld-knowledge-base/cctlds/co.za), [.cz](/tld-knowledge-base/cctlds/cz), [.de](/tld-knowledge-base/cctlds/de), [.dk](/tld-knowledge-base/cctlds/dk), [.eu](/tld-knowledge-base/cctlds/eu), [.gr](/tld-knowledge-base/cctlds/gr), .is, [.it](/tld-knowledge-base/cctlds/it), [.li](/tld-knowledge-base/cctlds/li), [.lt](/tld-knowledge-base/cctlds/lt), [.lu](/tld-knowledge-base/cctlds/lu), [.mx](/tld-knowledge-base/cctlds/mx), [.net.za](/tld-knowledge-base/cctlds/net.za), [.nl](/tld-knowledge-base/cctlds/nl), [.no](/tld-knowledge-base/cctlds/no), [.nu](/tld-knowledge-base/cctlds/nu), [.org.za](/tld-knowledge-base/cctlds/org.za), [.pl](/tld-knowledge-base/cctlds/pl), [.pt](/tld-knowledge-base/cctlds/pt), [.ro](/tld-knowledge-base/cctlds/ro), [.se](/tld-knowledge-base/cctlds/se), [.si](/tld-knowledge-base/cctlds/si), [.web.za](/tld-knowledge-base/cctlds/web.za) | ➖ No transfer lock |

### Nameservers

| Action | Note |
| --- | --- |
| ✅ See the nameservers | OpusDNS reads the nameservers in each sync. |
| ✅ Change the nameservers | OpusDNS changes the nameservers through the InterNetX API. |

### Contacts

| Action | Note |
| --- | --- |
| ✅ See the contacts | OpusDNS reads the contacts in each sync. |
| ↗️ Change the registrant | OpusDNS can't change the registrant of a connected domain. Change it at InterNetX. |
| ↗️ Change the other contacts | OpusDNS can't change the other contacts of a connected domain. Change them at InterNetX. |
| ↗️ Remove a contact role | OpusDNS can't remove a contact from a connected domain. Remove it at InterNetX. Not every TLD allows it. See the [TLD Knowledge Base](/tld-knowledge-base). |

### WHOIS privacy

| Action | Note |
| --- | --- |
| ↗️ See WHOIS privacy | OpusDNS has no access to WHOIS privacy at InterNetX. Check it at InterNetX. |
| ↗️ Turn WHOIS privacy on or off | OpusDNS has no access to WHOIS privacy at InterNetX. Change it at InterNetX. |
