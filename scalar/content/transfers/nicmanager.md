# Transfer from NICManager

Transferring a domain from NICManager to OpusDNS takes a few steps. This page shows which steps OpusDNS takes for you at each TLD and which stay with you. OpusDNS takes its steps once you have [connected](/products/connected-registrars/connect) your NICManager account and [requested the transfer](/products/connected-registrars/transfer-to-opusdns). In the API, NICManager is `NICMANAGER`. Leave out the auth code where OpusDNS gets it for you.

✅ OpusDNS does it for you · ↗️ you do it at your registrar · 👤 the domain's holder approves by email · ⚙️ the registry does it on its own · ➖ the TLD doesn't have it

## Who takes which step

Search this page for a TLD, such as `.se`. A TLD that isn't listed takes the steps in the first row.

| TLDs | Remove the lock | Get the auth code | Approve |
| --- | :---: | :---: | :---: |
| Most TLDs | ✅ OpusDNS | ↗️ You, at NICManager | ✅ OpusDNS |
| [.ch](/tld-knowledge-base/cctlds/ch), [.cz](/tld-knowledge-base/cctlds/cz), [.de](/tld-knowledge-base/cctlds/de), [.dk](/tld-knowledge-base/cctlds/dk), [.eu](/tld-knowledge-base/cctlds/eu), [.gr](/tld-knowledge-base/cctlds/gr), [.li](/tld-knowledge-base/cctlds/li), [.lt](/tld-knowledge-base/cctlds/lt), [.nl](/tld-knowledge-base/cctlds/nl), [.no](/tld-knowledge-base/cctlds/no), [.pl](/tld-knowledge-base/cctlds/pl), [.pt](/tld-knowledge-base/cctlds/pt), [.ro](/tld-knowledge-base/cctlds/ro), [.si](/tld-knowledge-base/cctlds/si) | ➖ | ↗️ You, at NICManager | ➖ |
| [.be](/tld-knowledge-base/cctlds/be), [.ca](/tld-knowledge-base/cctlds/ca), .cl, .ee, [.gg](/tld-knowledge-base/cctlds/gg), [.je](/tld-knowledge-base/cctlds/je), [.sk](/tld-knowledge-base/cctlds/sk) | ✅ OpusDNS | ↗️ You, at NICManager | ➖ |
| [.co.za](/tld-knowledge-base/cctlds/co.za), [.net.za](/tld-knowledge-base/cctlds/net.za), [.org.za](/tld-knowledge-base/cctlds/org.za), [.web.za](/tld-knowledge-base/cctlds/web.za) | ➖ | ➖ | ✅ OpusDNS |
| [.at](/tld-knowledge-base/cctlds/at), [.it](/tld-knowledge-base/cctlds/it), [.mx](/tld-knowledge-base/cctlds/mx) | ➖ | ↗️ You, at NICManager | ✅ OpusDNS |
| [.nu](/tld-knowledge-base/cctlds/nu), [.se](/tld-knowledge-base/cctlds/se) | ➖ | ↗️ You, at NICManager (a new one) | ➖ |
| [.com.se](/tld-knowledge-base/cctlds/com.se) | ✅ OpusDNS | ↗️ You, at NICManager (a new one) | ✅ OpusDNS |
| [.lu](/tld-knowledge-base/cctlds/lu) | ➖ | ➖ | 👤 The holder, by email |
| [.uk](/tld-knowledge-base/cctlds/uk) | ✅ OpusDNS | ➖ | ↗️ You, at NICManager (push) |

No transfers at .is.

At [.uk](/tld-knowledge-base/cctlds/uk), the domain is pushed to OpusDNS's tag instead of approved.

## The steps at most TLDs

| # | Step | What happens |
| --- | --- | --- |
| 1 | ✅ Remove the transfer lock | OpusDNS removes the transfer lock at NICManager. |
| 2 | ↗️ Get the auth code | Get the auth code at NICManager and send it as `auth_code`. |
| 3 | ✅ Request the transfer | OpusDNS sends the transfer to the registry. |
| 4 | ⚙️ The registry notifies NICManager | The registry tells NICManager about the transfer. |
| 5 | ✅ Approve the transfer | OpusDNS approves the transfer at NICManager. |
| 6 | ⚙️ The registry transfers the domain | The registry transfers the domain to OpusDNS. |
| 7 | ✅ Finish the transfer | OpusDNS completes the transfer in your account, sets the transfer lock and stops syncing the domain from NICManager. |

For gTLDs, these steps follow ICANN's [Transfer Policy](https://www.icann.org/resources/pages/transfer-policy-2024-02-21-en). ccTLDs often differ. See [Transfer to OpusDNS](/transfers/overview) for both.

## Managing a connected domain

Until you transfer a domain, OpusDNS can take some actions on it at NICManager. The others stay with you.

### Transfer lock

| Action | Note |
| --- | --- |
| ✅ See the transfer lock | OpusDNS reads the transfer lock at NICManager. |
| ✅ Set or remove the transfer lock | OpusDNS sets and removes the lock through the NICManager API. |

TLDs where this differs:

| TLDs | What differs |
| --- | --- |
| [.at](/tld-knowledge-base/cctlds/at), [.ch](/tld-knowledge-base/cctlds/ch), [.co.za](/tld-knowledge-base/cctlds/co.za), [.cz](/tld-knowledge-base/cctlds/cz), [.de](/tld-knowledge-base/cctlds/de), [.dk](/tld-knowledge-base/cctlds/dk), [.eu](/tld-knowledge-base/cctlds/eu), [.gr](/tld-knowledge-base/cctlds/gr), .is, [.it](/tld-knowledge-base/cctlds/it), [.li](/tld-knowledge-base/cctlds/li), [.lt](/tld-knowledge-base/cctlds/lt), [.lu](/tld-knowledge-base/cctlds/lu), [.mx](/tld-knowledge-base/cctlds/mx), [.net.za](/tld-knowledge-base/cctlds/net.za), [.nl](/tld-knowledge-base/cctlds/nl), [.no](/tld-knowledge-base/cctlds/no), [.nu](/tld-knowledge-base/cctlds/nu), [.org.za](/tld-knowledge-base/cctlds/org.za), [.pl](/tld-knowledge-base/cctlds/pl), [.pt](/tld-knowledge-base/cctlds/pt), [.ro](/tld-knowledge-base/cctlds/ro), [.se](/tld-knowledge-base/cctlds/se), [.si](/tld-knowledge-base/cctlds/si), [.web.za](/tld-knowledge-base/cctlds/web.za) | ➖ No transfer lock |

### Nameservers

| Action | Note |
| --- | --- |
| ✅ See the nameservers | OpusDNS reads the nameservers in each sync. |
| ↗️ Change the nameservers | OpusDNS can't change the nameservers at NICManager. Change them at NICManager. |

### Contacts

| Action | Note |
| --- | --- |
| ✅ See the contacts | OpusDNS reads the contacts in each sync. |
| ↗️ Change the registrant | OpusDNS can't change the registrant at NICManager. Change it at NICManager. |
| ↗️ Change the other contacts | OpusDNS can't change the other contacts at NICManager. Change them at NICManager. |
| ↗️ Remove a contact role | OpusDNS can't remove a contact from a connected domain. Remove it at NICManager. Not every TLD allows it. See the [TLD Knowledge Base](/tld-knowledge-base). |

### WHOIS privacy

| Action | Note |
| --- | --- |
| ↗️ See WHOIS privacy | OpusDNS has no access to WHOIS privacy at NICManager. Check it at NICManager. |
| ↗️ Turn WHOIS privacy on or off | OpusDNS has no access to WHOIS privacy at NICManager. Change it at NICManager. |
