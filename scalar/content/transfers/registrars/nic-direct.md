# Transfer from NIC Direct

At most TLDs, first remove the transfer lock at NIC Direct. Then [connect](/products/connected-registrars/connect) your NIC Direct account and [request the transfer](/products/connected-registrars/transfer-to-opusdns). OpusDNS gets the auth code and approves the transfer at NIC Direct. Leave out `auth_code` in the request. In the API, NIC Direct is `NIC_DIRECT`.

✅ OpusDNS does it for you · ↗️ you do it at your registrar · 👤 the domain's holder approves by email · ⚙️ the registry does it on its own · ➖ the TLD doesn't have it

## By transfer pattern

Your TLD's transfer pattern sets which steps a transfer has. ➖ marks a step the TLD doesn't have. NIC Direct sets which of the other steps OpusDNS can take for you. Each TLD's page names its pattern.

| Transfer pattern | TLDs | Remove the lock | Get the auth code | Approve |
| --- | --- | :---: | :---: | :---: |
| [gTLDs and most ccTLDs](/transfers/patterns/gtlds) | 499, such as [.com](/transfers/patterns/gtlds/com), [.net](/transfers/patterns/gtlds/net) and [.org](/transfers/patterns/gtlds/org) | ↗️ You, at NIC Direct | ✅ OpusDNS | ✅ OpusDNS |
| [Auth code set by the registry](/transfers/patterns/registry-auth-code) | 9, such as [.cz](/transfers/patterns/registry-auth-code/cz), [.dk](/transfers/patterns/registry-auth-code/dk) and [.eu](/transfers/patterns/registry-auth-code/eu) | ➖ | ✅ OpusDNS | ➖ |
| [Auth code only](/transfers/patterns/auth-code) | 7, such as [.ch](/transfers/patterns/auth-code/ch), [.de](/transfers/patterns/auth-code/de) and [.li](/transfers/patterns/auth-code/li) | ➖ | ✅ OpusDNS | ➖ |
| [Unlock and auth code](/transfers/patterns/unlock-auth-code) | [.ca](/transfers/patterns/unlock-auth-code/ca), [.cl](/transfers/patterns/unlock-auth-code/cl), [.ee](/transfers/patterns/unlock-auth-code/ee), [.gg](/transfers/patterns/unlock-auth-code/gg), [.je](/transfers/patterns/unlock-auth-code/je), [.sk](/transfers/patterns/unlock-auth-code/sk) | ↗️ You, at NIC Direct | ✅ OpusDNS | ➖ |
| [No auth code, with approval](/transfers/patterns/no-auth-code) | [.co.za](/transfers/patterns/no-auth-code/co.za), [.lu](/transfers/patterns/no-auth-code/lu), [.net.za](/transfers/patterns/no-auth-code/net.za), [.org.za](/transfers/patterns/no-auth-code/org.za), [.web.za](/transfers/patterns/no-auth-code/web.za) | ➖ | ➖ | ✅ OpusDNS |
| [Auth code and approval](/transfers/patterns/auth-code-approval) | [.at](/transfers/patterns/auth-code-approval/at), [.it](/transfers/patterns/auth-code-approval/it), [.mx](/transfers/patterns/auth-code-approval/mx) | ➖ | ✅ OpusDNS | ✅ OpusDNS |
| [Unlock, auth code set by the registry, and approval](/transfers/patterns/unlock-registry-auth-code-approval) | [.cymru](/transfers/patterns/unlock-registry-auth-code-approval/cymru), [.wales](/transfers/patterns/unlock-registry-auth-code-approval/wales) | ↗️ You, at NIC Direct | ✅ OpusDNS | ✅ OpusDNS |
| [Unlock and auth code set by the registry](/transfers/patterns/unlock-registry-auth-code) | [.be](/transfers/patterns/unlock-registry-auth-code/be) | ↗️ You, at NIC Direct | ✅ OpusDNS | ➖ |
| [Push to a tag](/transfers/patterns/push) | [.uk](/transfers/patterns/push/uk) | ↗️ You, at NIC Direct | ➖ | ↗️ You, at NIC Direct (push) |

These TLDs differ from their pattern's row:

| TLDs | Remove the lock | Get the auth code | Approve |
| --- | :---: | :---: | :---: |
| [.nu](/transfers/patterns/registry-auth-code/nu), [.se](/transfers/patterns/registry-auth-code/se) | ➖ | ↗️ You, at NIC Direct (a new one) | ➖ |
| [.com.se](/transfers/patterns/gtlds/com.se) | ↗️ You, at NIC Direct | ↗️ You, at NIC Direct (a new one) | ✅ OpusDNS |
| [.lu](/transfers/patterns/no-auth-code/lu) | ➖ | ➖ | 👤 The holder, by email |

[.is](/transfers/patterns/is) has no transfer at its registry. Its page explains what to do instead.

At [.uk](/transfers/patterns/push/uk), the domain is pushed to OpusDNS's tag instead of approved.

## The steps at most TLDs

| # | Step | What happens |
| --- | --- | --- |
| 1 | ↗️ Remove the transfer lock | Remove the transfer lock at NIC Direct. |
| 2 | ✅ Get the auth code | OpusDNS reads the auth code at NIC Direct. |
| 3 | ✅ Request the transfer | OpusDNS sends the transfer to the registry. |
| 4 | ⚙️ The registry notifies NIC Direct | The registry tells NIC Direct about the transfer. |
| 5 | ✅ Approve the transfer | OpusDNS approves the transfer at NIC Direct. |
| 6 | ⚙️ The registry transfers the domain | The registry transfers the domain to OpusDNS. |
| 7 | ✅ Finish the transfer | OpusDNS completes the transfer in your account, sets the transfer lock and stops syncing the domain from NIC Direct. |

For gTLDs, these steps follow ICANN's [Transfer Policy](https://www.icann.org/resources/pages/transfer-policy-2024-02-21-en). Each TLD with transfers follows one of the [transfer patterns](/transfers/overview#transfer-patterns).

## Managing a connected domain

Until you transfer a domain, OpusDNS can take some actions on it at NIC Direct. The others stay with you.

### Transfer lock

| Action | Note |
| --- | --- |
| ↗️ See the transfer lock | Check the transfer lock at NIC Direct. |
| ↗️ Set or remove the transfer lock | OpusDNS can't change the transfer lock at NIC Direct. Change it at NIC Direct. |

### Nameservers

| Action | Note |
| --- | --- |
| ✅ See the nameservers | OpusDNS reads the nameservers in each sync. |
| ↗️ Change the nameservers | OpusDNS can't change the nameservers at NIC Direct. Change them at NIC Direct. |

### Contacts

| Action | Note |
| --- | --- |
| ✅ See the contacts | OpusDNS reads the contacts in each sync. |
| ↗️ Change the registrant | OpusDNS can't change the registrant at NIC Direct. Change it at NIC Direct. |
| ↗️ Change the other contacts | OpusDNS can't change the other contacts at NIC Direct. Change them at NIC Direct. |
| ↗️ Remove a contact role | OpusDNS can't remove a contact from a connected domain. Remove it at NIC Direct. Not every TLD allows it. See the [TLD Knowledge Base](/tld-knowledge-base). |

### WHOIS privacy

| Action | Note |
| --- | --- |
| ↗️ See WHOIS privacy | OpusDNS has no access to WHOIS privacy at NIC Direct. Check it at NIC Direct. |
| ↗️ Turn WHOIS privacy on or off | OpusDNS has no access to WHOIS privacy at NIC Direct. Change it at NIC Direct. |
