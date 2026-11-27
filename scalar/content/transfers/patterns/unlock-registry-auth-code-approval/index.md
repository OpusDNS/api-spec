# Unlock, auth code set by the registry, and approval

The registry generates the auth code. Your current registrar can't choose it. OpusDNS requests the transfer with it. Your current registrar can then approve or deny the transfer.

## Steps

1. Remove the transfer lock at your current registrar.
2. Get the auth code from your current registrar or the registry, depending on the TLD.
3. OpusDNS requests the transfer at the registry with the auth code.
4. Your current registrar approves or denies the transfer. Some registrars ask the domain's holder by email. At gTLDs, the registry completes it after five days without an answer. See [How a gTLD transfer works](/transfers/overview#how-a-gtld-transfer-works).

Each TLD's page shows which of these steps OpusDNS takes at your registrar.

## TLDs

[.cymru](/transfers/patterns/unlock-registry-auth-code-approval/cymru), [.wales](/transfers/patterns/unlock-registry-auth-code-approval/wales).

## Registries

The registries of these TLDs:

- [Nominet UK](https://www.nominet.uk): [.cymru](/transfers/patterns/unlock-registry-auth-code-approval/cymru), [.wales](/transfers/patterns/unlock-registry-auth-code-approval/wales)
