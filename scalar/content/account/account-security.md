# Account security

OpusDNS uses a dedicated authentication platform to handle user identity,
login security, and credential management. These features are managed
through the [OpusDNS Dashboard](https://app.opusdns.com) — not through
the API.

## Passwords and password resets

Users set and reset their passwords through the OpusDNS Dashboard login
flow. When a user forgets their password, they can request a reset link
from the login page. Admins cannot set or change passwords on behalf of
other users via the API.

## Two-factor authentication (2FA)

Users can enable two-factor authentication from their account security
settings in the Dashboard. OpusDNS supports:

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

## Roles, permissions, and session management

User roles, permission assignments, and active session management are all
handled through the Dashboard. Visit the
[OpusDNS Dashboard](https://app.opusdns.com) to:

- Assign or revoke roles for users in your organization.
- View and terminate active user sessions.
- Review login history and security events.
