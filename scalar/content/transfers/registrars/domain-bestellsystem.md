# Transfer from PartnerGate

[Connect](/products/connected-registrars/connect) your PartnerGate account and [request the transfer](/products/connected-registrars/transfer-to-opusdns). Which steps OpusDNS then takes at PartnerGate depends on your TLD's transfer pattern. The table below shows them for every TLD. Leave out `auth_code` where it shows ✅ under Get the auth code. In the API, PartnerGate is `DOMAIN_BESTELLSYSTEM`.

✅ OpusDNS does it for you · ↗️ you do it at your registrar · 👤 the domain's holder approves by email · ⚙️ the registry does it on its own · ➖ the TLD doesn't have it

## By transfer pattern

Your TLD's transfer pattern sets which steps a transfer has. ➖ marks a step the TLD doesn't have. PartnerGate sets which of the other steps OpusDNS can take for you. Search this page for your TLD. If it isn't listed, it is in the first row.

| Transfer pattern | TLDs | Remove the lock | Get the auth code | Approve |
| --- | --- | :---: | :---: | :---: |
| [gTLDs and most ccTLDs](/transfers/patterns/gtlds) | Every other TLD, such as [.com](/transfers/patterns/gtlds/com), [.net](/transfers/patterns/gtlds/net) and [.org](/transfers/patterns/gtlds/org) | ↗️ You, at PartnerGate | ✅ OpusDNS | ✅ OpusDNS |
| [Auth code set by the registry](/transfers/patterns/registry-auth-code) | [.cz](/transfers/patterns/registry-auth-code/cz), [.dk](/transfers/patterns/registry-auth-code/dk), [.eu](/transfers/patterns/registry-auth-code/eu), [.gr](/transfers/patterns/registry-auth-code/gr), [.lt](/transfers/patterns/registry-auth-code/lt), [.nl](/transfers/patterns/registry-auth-code/nl), [.nu](/transfers/patterns/registry-auth-code/nu), [.ro](/transfers/patterns/registry-auth-code/ro), [.se](/transfers/patterns/registry-auth-code/se) | ➖ | ✅ OpusDNS | ➖ |
| [Auth code only](/transfers/patterns/auth-code) | [.ch](/transfers/patterns/auth-code/ch), [.de](/transfers/patterns/auth-code/de), [.li](/transfers/patterns/auth-code/li), [.no](/transfers/patterns/auth-code/no), [.pl](/transfers/patterns/auth-code/pl), [.pt](/transfers/patterns/auth-code/pt), [.si](/transfers/patterns/auth-code/si) | ➖ | ✅ OpusDNS | ➖ |
| [Unlock and auth code](/transfers/patterns/unlock-auth-code) | [.ca](/transfers/patterns/unlock-auth-code/ca), [.cl](/transfers/patterns/unlock-auth-code/cl), [.ee](/transfers/patterns/unlock-auth-code/ee), [.gg](/transfers/patterns/unlock-auth-code/gg), [.je](/transfers/patterns/unlock-auth-code/je), [.sk](/transfers/patterns/unlock-auth-code/sk) | ↗️ You, at PartnerGate | ✅ OpusDNS | ➖ |
| [No auth code, with approval](/transfers/patterns/no-auth-code) | [.co.za](/transfers/patterns/no-auth-code/co.za), [.lu](/transfers/patterns/no-auth-code/lu), [.net.za](/transfers/patterns/no-auth-code/net.za), [.org.za](/transfers/patterns/no-auth-code/org.za), [.web.za](/transfers/patterns/no-auth-code/web.za) | ➖ | ➖ | ✅ OpusDNS |
| [Auth code and approval](/transfers/patterns/auth-code-approval) | [.at](/transfers/patterns/auth-code-approval/at), [.it](/transfers/patterns/auth-code-approval/it), [.mx](/transfers/patterns/auth-code-approval/mx) | ➖ | ✅ OpusDNS | ✅ OpusDNS |
| [Unlock, auth code set by the registry, and approval](/transfers/patterns/unlock-registry-auth-code-approval) | [.cymru](/transfers/patterns/unlock-registry-auth-code-approval/cymru), [.wales](/transfers/patterns/unlock-registry-auth-code-approval/wales) | ↗️ You, at PartnerGate | ✅ OpusDNS | ✅ OpusDNS |
| [Unlock and auth code set by the registry](/transfers/patterns/unlock-registry-auth-code) | [.be](/transfers/patterns/unlock-registry-auth-code/be) | ↗️ You, at PartnerGate | ✅ OpusDNS | ➖ |
| [Push to a tag](/transfers/patterns/push) | [.uk](/transfers/patterns/push/uk) | ↗️ You, at PartnerGate | ➖ | ↗️ You, at PartnerGate (push) |

These TLDs differ from their pattern's row:

| TLDs | Remove the lock | Get the auth code | Approve |
| --- | :---: | :---: | :---: |
| [.nu](/transfers/patterns/registry-auth-code/nu), [.se](/transfers/patterns/registry-auth-code/se) | ➖ | ↗️ You, at PartnerGate (a new one) | ➖ |
| [.com.se](/transfers/patterns/gtlds/com.se) | ↗️ You, at PartnerGate | ↗️ You, at PartnerGate (a new one) | ✅ OpusDNS |
| [.lu](/transfers/patterns/no-auth-code/lu) | ➖ | ➖ | 👤 The holder, by email |

[.is](/transfers/patterns/is) has no transfer at its registry. Its page explains what to do instead.

At [.uk](/transfers/patterns/push/uk), the domain is pushed to OpusDNS's tag instead of approved.

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
