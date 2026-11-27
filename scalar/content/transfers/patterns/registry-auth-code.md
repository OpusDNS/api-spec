# Auth code set by the registry

The registry generates the auth code. Your current registrar can't choose it. OpusDNS requests the transfer with it. The registry completes the transfer without an approval. The registry has no transfer lock.

![Swimlane in three lanes: your current registrar, the registry and OpusDNS. You get the auth code, which the registry sets. OpusDNS requests the transfer at the registry. The registry transfers the domain without an approval. The domain is in your OpusDNS account.](/images/transfer-patterns/registry-auth-code.svg)

## Steps

1. Get the auth code from your current registrar or the registry, depending on the TLD.
2. OpusDNS requests the transfer at the registry with the auth code.
3. The registry completes the transfer without an approval.

Which of these steps OpusDNS takes for you depends on your registrar. Its page in [Your registrar](/transfers/overview#your-registrar) shows them.

## TLDs

[.cz](/tld-knowledge-base/cctlds/cz), [.dk](/tld-knowledge-base/cctlds/dk), [.eu](/tld-knowledge-base/cctlds/eu), [.gr](/tld-knowledge-base/cctlds/gr), [.lt](/tld-knowledge-base/cctlds/lt), [.nl](/tld-knowledge-base/cctlds/nl), [.nu](/tld-knowledge-base/cctlds/nu), [.ro](/tld-knowledge-base/cctlds/ro), [.se](/tld-knowledge-base/cctlds/se).

The [TLD Knowledge Base](/tld-knowledge-base) has each TLD's transfer rules, such as its transfer lock and how long a transfer takes.

## Registries

The registries of these TLDs:

- [Internetstiftelsen (The Swedish Internet Foundation)](https://internetstiftelsen.se): [.nu](/tld-knowledge-base/cctlds/nu), [.se](/tld-knowledge-base/cctlds/se)
- [CZ.NIC, z. s. p. o.](https://www.nic.cz): [.cz](/tld-knowledge-base/cctlds/cz)
- [DOMREG (Kaunas University of Technology)](https://www.domreg.lt): [.lt](/tld-knowledge-base/cctlds/lt)
- [EURid vzw/asbl](http://eurid.eu/): [.eu](/tld-knowledge-base/cctlds/eu)
- [National Institute for R&D in Informatics (ROTLD)](https://www.rotld.ro/): [.ro](/tld-knowledge-base/cctlds/ro)
- [Punktum dk A/S](https://punktum.dk): [.dk](/tld-knowledge-base/cctlds/dk)
- [Registry of .gr and .ελ Domain Names (ICS-FORTH)](https://www.gr): [.gr](/tld-knowledge-base/cctlds/gr)
- [SIDN](https://www.sidn.nl): [.nl](/tld-knowledge-base/cctlds/nl)
