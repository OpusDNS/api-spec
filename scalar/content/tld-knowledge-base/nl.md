> The .nl is a **ccTLD**. This article documents all technical, operational, and contractual requirements for this TLD as well as special considerations when dealing with registry, registrar, and domain management.

---

## General Information

| Field | Value |
|-------|-------|
| TLD Type | ccTLD |

---

## Domain Lifecycle

| Field | Value |
|-------|-------|
| Registration Period | 1 Jahr |
| Renewal Period | 1 Jahr |
| Grace Periods | Add Grace Period: 0 days<br>Standard Grace Period: 0 days<br>Redemption Period: 40 days<br>Pending Restore: 0 days<br>Pending Delete: 0 days |
| Deletion Policies | Immediate |
| Auto-Renew Enabled | Yes |
| Auto-Renewal Before Expiry | 0 days before expiration |

---

## Launch Phases & Availability

| Field | Value |
|-------|-------|
| General Availability | TLD is live |
| TMCH/Trademark Claims | Yes |

---

## Domain Characteristics

| Field | Value |
|-------|-------|
| Domain Length | 2 to 63 characters |
| IDN Support | Yes |
| Premium Domains | Yes |
| Reserved Domains | Yes |
| Registry Lock | Yes |

---

## Contacts & Roles

| Field | Value |
|-------|-------|
| Required Contacts | Domain Owner, Administrator, Technical Contact |
| Supported Roles | Domain Owner, Administrator, Technical Contact |
| Privacy Proxy Allowed | Yes |
| Contacts Transferable | Yes |
| Allowed Postal Types | Local |
| AuthInfo Required | Yes, Length: None |

---

## Nameservers & DNS

| Field | Value |
|-------|-------|
| Nameserver Count | 0 to 13 |
| Host Objects Allowed | Yes |
| DNSSEC Allowed | Yes |
| DNSSEC Required | Yes |
| DNSSEC Mode | DNSKEY |
| Update Interval | None |
| CZDS (Zone Download) | Yes |

---

## Transfer Policy

| Field | Value |
|-------|-------|
| Transfer Lock Enabled | Yes |
| Lock Duration | 0 days after registration and transfer |
| Transfer Duration | 0 days |
| Transfer Extends Domain | Yes, Time: None |
| Transfer via AuthInfo | Yes |
| Confirmation Required | No |

---

## WHOIS & RDAP

| Field | Value |
|-------|-------|
| WHOIS Server | whois.sidn.nl |
| RDAP Server | https://rdap.sidn.nl/ |

---

## Dispute Resolution

| Field | Value |
|-------|-------|
| Dispute Resolution Available | Yes |
| Procedure | SIDN Dispute Resolution |
| Reference | https://www.sidn.nl/en/registrars/dispute-resolution-nl |
| UDRP Support | Yes |
| URS Support | Yes |

---

## Implementation Notes

- Ensure complete TLS/SSL configuration in all environments
- DNSSEC should be actively used when supported
- AuthInfo must meet minimum requirements (e.g., 12 characters)
- Note different status codes or dispute policies for ccTLDs
- Check if third-level structures (co.uk etc.) need separate documentation
