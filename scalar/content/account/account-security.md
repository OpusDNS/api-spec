# Account security

OpusDNS uses the OpusDNS Authentication Platform to handle user identity,
login security, and credential management. These features are managed
through the [OpusDNS Dashboard](https://app.opusdns.com) — not through
the API.

## Two-factor authentication (2FA)

Every OpusDNS user must configure two-factor authentication in the Dashboard.
The OpusDNS Authentication Platform enforces 2FA during login and supports:

- **Authenticator apps** — TOTP-based codes from apps like Google
  Authenticator, Authy, or 1Password. After scanning the QR code, the
  user enters a one-time code on each login.
- **Recovery codes** — single-use backup codes generated when 2FA is
  enabled. Store these securely — they're the fallback if the
  authenticator device is lost.

<scalar-callout type="danger">
**2FA is mandatory.** All OpusDNS users are required to enable two-factor authentication. Users who have not configured 2FA will be prompted to set it up on their next login and cannot proceed until it is activated.
</scalar-callout>

## Passkeys

OpusDNS supports passkey authentication for passwordless login. Passkeys
use device-level biometrics (fingerprint, face recognition) or hardware
security keys (YubiKey, etc.) to authenticate — no password required.

Users can register passkeys from their account security settings in the
Dashboard. Once registered, a passkey can be used as the primary login
method or as a second factor alongside a password.

## Dashboard-only security settings

Credential recovery, access assignments, active sessions, login history, and
security events are handled through the
[OpusDNS Dashboard](https://app.opusdns.com), not through the API.
