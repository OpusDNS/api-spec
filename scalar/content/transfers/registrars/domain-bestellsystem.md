# Transfer from PartnerGate

At most TLDs, first remove the transfer lock at PartnerGate. Then connect your PartnerGate account and request the transfer. OpusDNS gets the auth code and approves the transfer at PartnerGate. Leave out `auth_code` in the request. In the API, PartnerGate is `DOMAIN_BESTELLSYSTEM`.

✅ OpusDNS does it for you · ↗️ you do it at your registrar · 👤 the domain's holder approves by email · ⚙️ the registry does it on its own · ➖ the TLD doesn't have it

## Who takes which step

Search this page for a TLD, such as `.se`. A TLD that isn't listed takes the steps in the first row.

| TLDs | Remove the lock | Get the auth code | Approve |
| --- | :---: | :---: | :---: |
| Most TLDs | ↗️ You, at PartnerGate | ✅ OpusDNS | ✅ OpusDNS |
| [.ch](/tld-knowledge-base/cctlds/ch), [.cz](/tld-knowledge-base/cctlds/cz), [.de](/tld-knowledge-base/cctlds/de), [.dk](/tld-knowledge-base/cctlds/dk), [.eu](/tld-knowledge-base/cctlds/eu), [.gr](/tld-knowledge-base/cctlds/gr), [.li](/tld-knowledge-base/cctlds/li), [.lt](/tld-knowledge-base/cctlds/lt), [.nl](/tld-knowledge-base/cctlds/nl), [.no](/tld-knowledge-base/cctlds/no), [.pl](/tld-knowledge-base/cctlds/pl), [.pt](/tld-knowledge-base/cctlds/pt), [.ro](/tld-knowledge-base/cctlds/ro), [.si](/tld-knowledge-base/cctlds/si) | ➖ | ✅ OpusDNS | ➖ |
| [.be](/tld-knowledge-base/cctlds/be), [.ca](/tld-knowledge-base/cctlds/ca), .cl, .ee, [.gg](/tld-knowledge-base/cctlds/gg), [.je](/tld-knowledge-base/cctlds/je), [.sk](/tld-knowledge-base/cctlds/sk) | ↗️ You, at PartnerGate | ✅ OpusDNS | ➖ |
| [.co.za](/tld-knowledge-base/cctlds/co.za), [.net.za](/tld-knowledge-base/cctlds/net.za), [.org.za](/tld-knowledge-base/cctlds/org.za), [.web.za](/tld-knowledge-base/cctlds/web.za) | ➖ | ➖ | ✅ OpusDNS |
| [.at](/tld-knowledge-base/cctlds/at), [.it](/tld-knowledge-base/cctlds/it), [.mx](/tld-knowledge-base/cctlds/mx) | ➖ | ✅ OpusDNS | ✅ OpusDNS |
| [.nu](/tld-knowledge-base/cctlds/nu), [.se](/tld-knowledge-base/cctlds/se) | ➖ | ↗️ You, at PartnerGate (a new one) | ➖ |
| [.com.se](/tld-knowledge-base/cctlds/com.se) | ↗️ You, at PartnerGate | ↗️ You, at PartnerGate (a new one) | ✅ OpusDNS |
| [.lu](/tld-knowledge-base/cctlds/lu) | ➖ | ➖ | 👤 The holder, by email |
| [.uk](/tld-knowledge-base/cctlds/uk) | ↗️ You, at PartnerGate | ➖ | ↗️ You, at PartnerGate (push) |

No transfers at .is.

At [.uk](/tld-knowledge-base/cctlds/uk), the domain is pushed to OpusDNS's tag instead of approved.

## The steps at most TLDs

| # | Step | What happens |
| --- | --- | --- |
| 1 | ↗️ Remove the transfer lock | OpusDNS can't see the lock at PartnerGate, so it leaves it. Remove it at PartnerGate. |
| 2 | ✅ Get the auth code | OpusDNS reads the auth code at PartnerGate. |
| 3 | ✅ Request the transfer | OpusDNS sends the transfer to the registry. |
| 4 | ⚙️ The registry notifies PartnerGate | The registry tells PartnerGate about the transfer. |
| 5 | ✅ Approve the transfer | OpusDNS approves the transfer at PartnerGate. |
| 6 | ⚙️ The registry transfers the domain | The registry transfers the domain to OpusDNS. |
| 7 | ✅ Finish the transfer | OpusDNS completes the transfer in your account, sets the transfer lock and stops syncing the domain from PartnerGate. |

For gTLDs, these steps follow ICANN's [Transfer Policy](https://www.icann.org/resources/pages/transfer-policy-2024-02-21-en). Every TLD follows one of the [transfer workflows](/transfers/overview#transfer-workflows).

## Managing a connected domain

Until you transfer a domain, OpusDNS can take some actions on it at PartnerGate. The others stay with you.

### Transfer lock

| Action | Note |
| --- | --- |
| ↗️ See the transfer lock | OpusDNS doesn't read the lock at PartnerGate. Check it at PartnerGate. |
| ✅ Set or remove the transfer lock | OpusDNS sets and removes the lock through the PartnerGate API. |

TLDs where this differs:

| TLDs | What differs |
| --- | --- |
| [.at](/tld-knowledge-base/cctlds/at), [.ch](/tld-knowledge-base/cctlds/ch), [.co.za](/tld-knowledge-base/cctlds/co.za), [.cz](/tld-knowledge-base/cctlds/cz), [.de](/tld-knowledge-base/cctlds/de), [.dk](/tld-knowledge-base/cctlds/dk), [.eu](/tld-knowledge-base/cctlds/eu), [.gr](/tld-knowledge-base/cctlds/gr), .is, [.it](/tld-knowledge-base/cctlds/it), [.li](/tld-knowledge-base/cctlds/li), [.lt](/tld-knowledge-base/cctlds/lt), [.lu](/tld-knowledge-base/cctlds/lu), [.mx](/tld-knowledge-base/cctlds/mx), [.net.za](/tld-knowledge-base/cctlds/net.za), [.nl](/tld-knowledge-base/cctlds/nl), [.no](/tld-knowledge-base/cctlds/no), [.nu](/tld-knowledge-base/cctlds/nu), [.org.za](/tld-knowledge-base/cctlds/org.za), [.pl](/tld-knowledge-base/cctlds/pl), [.pt](/tld-knowledge-base/cctlds/pt), [.ro](/tld-knowledge-base/cctlds/ro), [.se](/tld-knowledge-base/cctlds/se), [.si](/tld-knowledge-base/cctlds/si), [.web.za](/tld-knowledge-base/cctlds/web.za) | ➖ Set or remove the transfer lock: no transfer lock |

### Nameservers

| Action | Note |
| --- | --- |
| ✅ See the nameservers | OpusDNS reads the nameservers in each sync. |
| ✅ Change the nameservers | OpusDNS changes the nameservers through the PartnerGate API. |

### Contacts

| Action | Note |
| --- | --- |
| ✅ See the contacts | OpusDNS reads the contacts in each sync. |
| ↗️ Change the registrant | OpusDNS can't change the registrant at PartnerGate. Change it at PartnerGate. |
| ↗️ Change the other contacts | OpusDNS can't change the other contacts of a connected domain. Change them at PartnerGate. |
| ↗️ Remove a contact role | OpusDNS can't remove a contact from a connected domain. Remove it at PartnerGate. Not every TLD allows it. See the [TLD Knowledge Base](/tld-knowledge-base). |

### WHOIS privacy

| Action | Note |
| --- | --- |
| ↗️ See WHOIS privacy | OpusDNS has no access to WHOIS privacy at PartnerGate. Check it at PartnerGate. |
| ↗️ Turn WHOIS privacy on or off | OpusDNS has no access to WHOIS privacy at PartnerGate. Change it at PartnerGate. |
