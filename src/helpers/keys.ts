/**
 * Key constants for OpusDNS API response objects
 *
 * This file contains TypeScript constants for API response object property keys.
 * Each key constant provides a type-safe way to access properties of API response objects.
 * These constants are derived from OpenAPI schema properties and include comprehensive descriptions.
 *
 * @remarks
 * - Individual key constants follow the pattern: `KEY_TYPE_NAME_PROPERTY_NAME`
 * - Key arrays follow the pattern: `KEYS_TYPE_NAME` and are typed as `readonly (keyof TypeName)[]`
 * - All keys are typed with `as keyof TypeName` for type safety
 * - Key constants include descriptions from the OpenAPI schema
 * - These constants ensure type safety when accessing response object properties
 *
 * @example
 * ```typescript
 * // Using key constants for type-safe property access
 * const domainName = domain[KEY_DOMAIN_NAME];
 * const domainStatus = domain[KEY_DOMAIN_STATUS];
 *
 * // Using key arrays for iteration
 * const allKeys = KEYS_DOMAIN;
 * for (const key of allKeys) {
 *   console.log(domain[key]);
 * }
 * ```
 *
 * This file is auto-generated from the OpenAPI specification.
 * Do not edit manually.
 */

import { AllowedNumberOfNameserverBase } from './schemas';
import { Body_issue_organization_token_v1_auth_token_post } from './schemas';
import { ContactConfigBase } from './schemas';
import { ContactCreate } from './schemas';
import { Contact } from './schemas';
import { ContactSchema } from './schemas';
import { ContactVerificationApi } from './schemas';
import { ContactVerificationEmail } from './schemas';
import { ContactVerification } from './schemas';
import { ContactsBase } from './schemas';
import { DnsChange } from './schemas';
import { DnsChanges } from './schemas';
import { DnsConfigurationBase } from './schemas';
import { DnsRecordCreate } from './schemas';
import { DnsRecordPatchOp } from './schemas';
import { DnsRecord } from './schemas';
import { DnsRrsetCreate } from './schemas';
import { DnsRrsetPatch } from './schemas';
import { DnsRrsetPatchOp } from './schemas';
import { DnsRrset } from './schemas';
import { DnsRrsetWithOneRecordPatch } from './schemas';
import { DnsZoneCreate } from './schemas';
import { DnsZoneRecordsPatchOps } from './schemas';
import { DnsZone } from './schemas';
import { DnsZoneRrsetsCreate } from './schemas';
import { DnsZoneRrsetsPatchOps } from './schemas';
import { DnsZoneSummary } from './schemas';
import { DomainAvailability } from './schemas';
import { DomainAvailabilityMeta } from './schemas';
import { DomainCheck } from './schemas';
import { DomainContact } from './schemas';
import { DomainCreate } from './schemas';
import { DomainDnssecDataCreate } from './schemas';
import { DomainDnssecData } from './schemas';
import { DomainLifecycleBase } from './schemas';
import { DomainNameParts } from './schemas';
import { DomainPeriod } from './schemas';
import { DomainRenewRequest } from './schemas';
import { DomainRenew } from './schemas';
import { Domain } from './schemas';
import { DomainSearchMeta } from './schemas';
import { DomainSearch } from './schemas';
import { DomainSearchSuggestion } from './schemas';
import { DomainStatusesBase } from './schemas';
import { DomainSummaryData } from './schemas';
import { DomainSummary } from './schemas';
import { DomainTransferIn } from './schemas';
import { DomainUpdate } from './schemas';
import { DomainsExpiringSoon } from './schemas';
import { EmailForwardAlias } from './schemas';
import { EmailForwardAliasUpdate } from './schemas';
import { EventResponse } from './schemas';
import { EventSchema } from './schemas';
import { GeneralAvailabilityBase } from './schemas';
import { HTTPValidationError } from './schemas';
import { IdnBase } from './schemas';
import { IpRestrictionCreate } from './schemas';
import { IpRestriction } from './schemas';
import { IpRestrictionUpdate } from './schemas';
import { LaunchPhaseBase } from './schemas';
import { LaunchPhasesBase } from './schemas';
import { LocalPresenceBase } from './schemas';
import { Nameserver } from './schemas';
import { Notification } from './schemas';
import { NotificationCreate } from './schemas';
import { NotificationSummary } from './schemas';
import { NotificationUpdate } from './schemas';
import { Organization } from './schemas';
import { OrganizationAttribute } from './schemas';
import { OrganizationAttributeCreate } from './schemas';
import { OrganizationAttribute2 } from './schemas';
import { OrganizationAttributeUpdate } from './schemas';
import { OrganizationCreate } from './schemas';
import { OrganizationCredential } from './schemas';
import { OrganizationCredentialCreated } from './schemas';
import { OrganizationCredentialExtra } from './schemas';
import { OrganizationToken } from './schemas';
import { OrganizationUpdate } from './schemas';
import { OrganizationWithPlan } from './schemas';
import { PaginationMetadata } from './schemas';
import { Period } from './schemas';
import { PermissionSet } from './schemas';
import { PlanUpdate } from './schemas';
import { PremiumDomainsBase } from './schemas';
import { Problem } from './schemas';
import { RdapBase } from './schemas';
import { RegistryLockBase } from './schemas';
import { RelationSet } from './schemas';
import { ReservedDomainsBase } from './schemas';
import { RgpOperations } from './schemas';
import { SignupCreate } from './schemas';
import { SldLength } from './schemas';
import { SpiceDbRelationshipUpdate } from './schemas';
import { TermsOfServiceAccept } from './schemas';
import { TldBase } from './schemas';
import { TldResponseShort } from './schemas';
import { TldSpecification } from './schemas';
import { TrademarkClaimsBase } from './schemas';
import { TransferPoliciesBase } from './schemas';
import { User } from './schemas';
import { UserAttributeBase } from './schemas';
import { UserCreate } from './schemas';
import { UserNotification } from './schemas';
import { UserNotificationSummary } from './schemas';
import { UserToken } from './schemas';
import { UserUpdate } from './schemas';
import { UserWithAttributes } from './schemas';
import { UserWithRelationPermissions } from './schemas';
import { ValidationError } from './schemas';
import { WhoisBase } from './schemas';
import { DomainAvailabilityList } from './schemas';
import { DomainAvailabilityCheck } from './schemas';

/**
 * Max
 *
 * Maximum number of nameserver per domain name
 *
 * @type {integer}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `max` property of AllowedNumberOfNameserverBase objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = allowednumberofnameserverbase[KEY_ALLOWED_NUMBER_OF_NAMESERVER_BASE_MAX];
 * 
 * // Dynamic property access
 * const propertyName = KEY_ALLOWED_NUMBER_OF_NAMESERVER_BASE_MAX;
 * const value = allowednumberofnameserverbase[propertyName];
 * ```
 *
 * @see {@link AllowedNumberOfNameserverBase} - The TypeScript type definition
 * @see {@link KEYS_ALLOWED_NUMBER_OF_NAMESERVER_BASE} - Array of all keys for this type
 */
export const KEY_ALLOWED_NUMBER_OF_NAMESERVER_BASE_MAX = 'max' as keyof AllowedNumberOfNameserverBase;
/**
 * Min
 *
 * Minimum number of nameserver per domain name
 *
 * @type {integer}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `min` property of AllowedNumberOfNameserverBase objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = allowednumberofnameserverbase[KEY_ALLOWED_NUMBER_OF_NAMESERVER_BASE_MIN];
 * 
 * // Dynamic property access
 * const propertyName = KEY_ALLOWED_NUMBER_OF_NAMESERVER_BASE_MIN;
 * const value = allowednumberofnameserverbase[propertyName];
 * ```
 *
 * @see {@link AllowedNumberOfNameserverBase} - The TypeScript type definition
 * @see {@link KEYS_ALLOWED_NUMBER_OF_NAMESERVER_BASE} - Array of all keys for this type
 */
export const KEY_ALLOWED_NUMBER_OF_NAMESERVER_BASE_MIN = 'min' as keyof AllowedNumberOfNameserverBase;

/**
 * Array of all AllowedNumberOfNameserverBase property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for AllowedNumberOfNameserverBase objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all keys
 * for (const key of KEYS_ALLOWED_NUMBER_OF_NAMESERVER_BASE) {
 *   console.log(`Property: ${key}, Value: ${allowednumberofnameserverbase[key]}`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_ALLOWED_NUMBER_OF_NAMESERVER_BASE.includes(someKey);
 * ```
 *
 * @see {@link AllowedNumberOfNameserverBase} - The TypeScript type definition
 */
export const KEYS_ALLOWED_NUMBER_OF_NAMESERVER_BASE = [
  KEY_ALLOWED_NUMBER_OF_NAMESERVER_BASE_MAX,
  KEY_ALLOWED_NUMBER_OF_NAMESERVER_BASE_MIN,
] as const satisfies (keyof AllowedNumberOfNameserverBase)[];

/**
 * Client Id
 *
 * The organization ID associated with the credentials.
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `client_id` property of Body_issue_organization_token_v1_auth_token_post objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = body_issue_organization_token_v1_auth_token_post[KEY_BODY_ISSUE_ORGANIZATION_TOKEN_V1_AUTH_TOKEN_POST_CLIENT_ID];
 * 
 * // Dynamic property access
 * const propertyName = KEY_BODY_ISSUE_ORGANIZATION_TOKEN_V1_AUTH_TOKEN_POST_CLIENT_ID;
 * const value = body_issue_organization_token_v1_auth_token_post[propertyName];
 * ```
 *
 * @see {@link Body_issue_organization_token_v1_auth_token_post} - The TypeScript type definition
 * @see {@link KEYS_BODY_ISSUE_ORGANIZATION_TOKEN_V1_AUTH_TOKEN_POST} - Array of all keys for this type
 */
export const KEY_BODY_ISSUE_ORGANIZATION_TOKEN_V1_AUTH_TOKEN_POST_CLIENT_ID = 'client_id' as keyof Body_issue_organization_token_v1_auth_token_post;
/**
 * Client Secret
 *
 * Client secret for authentication.
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `client_secret` property of Body_issue_organization_token_v1_auth_token_post objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = body_issue_organization_token_v1_auth_token_post[KEY_BODY_ISSUE_ORGANIZATION_TOKEN_V1_AUTH_TOKEN_POST_CLIENT_SECRET];
 * 
 * // Dynamic property access
 * const propertyName = KEY_BODY_ISSUE_ORGANIZATION_TOKEN_V1_AUTH_TOKEN_POST_CLIENT_SECRET;
 * const value = body_issue_organization_token_v1_auth_token_post[propertyName];
 * ```
 *
 * @see {@link Body_issue_organization_token_v1_auth_token_post} - The TypeScript type definition
 * @see {@link KEYS_BODY_ISSUE_ORGANIZATION_TOKEN_V1_AUTH_TOKEN_POST} - Array of all keys for this type
 */
export const KEY_BODY_ISSUE_ORGANIZATION_TOKEN_V1_AUTH_TOKEN_POST_CLIENT_SECRET = 'client_secret' as keyof Body_issue_organization_token_v1_auth_token_post;
/**
 * grant_type property
 *
 * The grant type for the authentication request.
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `grant_type` property of Body_issue_organization_token_v1_auth_token_post objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = body_issue_organization_token_v1_auth_token_post[KEY_BODY_ISSUE_ORGANIZATION_TOKEN_V1_AUTH_TOKEN_POST_GRANT_TYPE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_BODY_ISSUE_ORGANIZATION_TOKEN_V1_AUTH_TOKEN_POST_GRANT_TYPE;
 * const value = body_issue_organization_token_v1_auth_token_post[propertyName];
 * ```
 *
 * @see {@link Body_issue_organization_token_v1_auth_token_post} - The TypeScript type definition
 * @see {@link KEYS_BODY_ISSUE_ORGANIZATION_TOKEN_V1_AUTH_TOKEN_POST} - Array of all keys for this type
 */
export const KEY_BODY_ISSUE_ORGANIZATION_TOKEN_V1_AUTH_TOKEN_POST_GRANT_TYPE = 'grant_type' as keyof Body_issue_organization_token_v1_auth_token_post;
/**
 * Password
 *
 * Password for the user.
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `password` property of Body_issue_organization_token_v1_auth_token_post objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = body_issue_organization_token_v1_auth_token_post[KEY_BODY_ISSUE_ORGANIZATION_TOKEN_V1_AUTH_TOKEN_POST_PASSWORD];
 * 
 * // Dynamic property access
 * const propertyName = KEY_BODY_ISSUE_ORGANIZATION_TOKEN_V1_AUTH_TOKEN_POST_PASSWORD;
 * const value = body_issue_organization_token_v1_auth_token_post[propertyName];
 * ```
 *
 * @see {@link Body_issue_organization_token_v1_auth_token_post} - The TypeScript type definition
 * @see {@link KEYS_BODY_ISSUE_ORGANIZATION_TOKEN_V1_AUTH_TOKEN_POST} - Array of all keys for this type
 */
export const KEY_BODY_ISSUE_ORGANIZATION_TOKEN_V1_AUTH_TOKEN_POST_PASSWORD = 'password' as keyof Body_issue_organization_token_v1_auth_token_post;
/**
 * Username
 *
 * Username for authentication.
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `username` property of Body_issue_organization_token_v1_auth_token_post objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = body_issue_organization_token_v1_auth_token_post[KEY_BODY_ISSUE_ORGANIZATION_TOKEN_V1_AUTH_TOKEN_POST_USERNAME];
 * 
 * // Dynamic property access
 * const propertyName = KEY_BODY_ISSUE_ORGANIZATION_TOKEN_V1_AUTH_TOKEN_POST_USERNAME;
 * const value = body_issue_organization_token_v1_auth_token_post[propertyName];
 * ```
 *
 * @see {@link Body_issue_organization_token_v1_auth_token_post} - The TypeScript type definition
 * @see {@link KEYS_BODY_ISSUE_ORGANIZATION_TOKEN_V1_AUTH_TOKEN_POST} - Array of all keys for this type
 */
export const KEY_BODY_ISSUE_ORGANIZATION_TOKEN_V1_AUTH_TOKEN_POST_USERNAME = 'username' as keyof Body_issue_organization_token_v1_auth_token_post;

/**
 * Array of all Body_issue_organization_token_v1_auth_token_post property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for Body_issue_organization_token_v1_auth_token_post objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all keys
 * for (const key of KEYS_BODY_ISSUE_ORGANIZATION_TOKEN_V1_AUTH_TOKEN_POST) {
 *   console.log(`Property: ${key}, Value: ${body_issue_organization_token_v1_auth_token_post[key]}`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_BODY_ISSUE_ORGANIZATION_TOKEN_V1_AUTH_TOKEN_POST.includes(someKey);
 * ```
 *
 * @see {@link Body_issue_organization_token_v1_auth_token_post} - The TypeScript type definition
 */
export const KEYS_BODY_ISSUE_ORGANIZATION_TOKEN_V1_AUTH_TOKEN_POST = [
  KEY_BODY_ISSUE_ORGANIZATION_TOKEN_V1_AUTH_TOKEN_POST_CLIENT_ID,
  KEY_BODY_ISSUE_ORGANIZATION_TOKEN_V1_AUTH_TOKEN_POST_CLIENT_SECRET,
  KEY_BODY_ISSUE_ORGANIZATION_TOKEN_V1_AUTH_TOKEN_POST_GRANT_TYPE,
  KEY_BODY_ISSUE_ORGANIZATION_TOKEN_V1_AUTH_TOKEN_POST_PASSWORD,
  KEY_BODY_ISSUE_ORGANIZATION_TOKEN_V1_AUTH_TOKEN_POST_USERNAME,
] as const satisfies (keyof Body_issue_organization_token_v1_auth_token_post)[];

/**
 * Max
 *
 * Maximum contacts per domain name
 *
 * @type {integer}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `max` property of ContactConfigBase objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = contactconfigbase[KEY_CONTACT_CONFIG_BASE_MAX];
 * 
 * // Dynamic property access
 * const propertyName = KEY_CONTACT_CONFIG_BASE_MAX;
 * const value = contactconfigbase[propertyName];
 * ```
 *
 * @see {@link ContactConfigBase} - The TypeScript type definition
 * @see {@link KEYS_CONTACT_CONFIG_BASE} - Array of all keys for this type
 */
export const KEY_CONTACT_CONFIG_BASE_MAX = 'max' as keyof ContactConfigBase;
/**
 * Min
 *
 * Minimum contacts per domain name
 *
 * @type {integer}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `min` property of ContactConfigBase objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = contactconfigbase[KEY_CONTACT_CONFIG_BASE_MIN];
 * 
 * // Dynamic property access
 * const propertyName = KEY_CONTACT_CONFIG_BASE_MIN;
 * const value = contactconfigbase[propertyName];
 * ```
 *
 * @see {@link ContactConfigBase} - The TypeScript type definition
 * @see {@link KEYS_CONTACT_CONFIG_BASE} - Array of all keys for this type
 */
export const KEY_CONTACT_CONFIG_BASE_MIN = 'min' as keyof ContactConfigBase;
/**
 * type property
 *
 * The type of contact
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `type` property of ContactConfigBase objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = contactconfigbase[KEY_CONTACT_CONFIG_BASE_TYPE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_CONTACT_CONFIG_BASE_TYPE;
 * const value = contactconfigbase[propertyName];
 * ```
 *
 * @see {@link ContactConfigBase} - The TypeScript type definition
 * @see {@link KEYS_CONTACT_CONFIG_BASE} - Array of all keys for this type
 */
export const KEY_CONTACT_CONFIG_BASE_TYPE = 'type' as keyof ContactConfigBase;

/**
 * Array of all ContactConfigBase property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for ContactConfigBase objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all keys
 * for (const key of KEYS_CONTACT_CONFIG_BASE) {
 *   console.log(`Property: ${key}, Value: ${contactconfigbase[key]}`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_CONTACT_CONFIG_BASE.includes(someKey);
 * ```
 *
 * @see {@link ContactConfigBase} - The TypeScript type definition
 */
export const KEYS_CONTACT_CONFIG_BASE = [
  KEY_CONTACT_CONFIG_BASE_MAX,
  KEY_CONTACT_CONFIG_BASE_MIN,
  KEY_CONTACT_CONFIG_BASE_TYPE,
] as const satisfies (keyof ContactConfigBase)[];

/**
 * City
 *
 * The city of the contact
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `city` property of ContactCreate objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = contactcreate[KEY_CONTACT_CREATE_CITY];
 * 
 * // Dynamic property access
 * const propertyName = KEY_CONTACT_CREATE_CITY;
 * const value = contactcreate[propertyName];
 * ```
 *
 * @see {@link ContactCreate} - The TypeScript type definition
 * @see {@link KEYS_CONTACT_CREATE} - Array of all keys for this type
 */
export const KEY_CONTACT_CREATE_CITY = 'city' as keyof ContactCreate;
/**
 * Country
 *
 * The country of the contact
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `country` property of ContactCreate objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = contactcreate[KEY_CONTACT_CREATE_COUNTRY];
 * 
 * // Dynamic property access
 * const propertyName = KEY_CONTACT_CREATE_COUNTRY;
 * const value = contactcreate[propertyName];
 * ```
 *
 * @see {@link ContactCreate} - The TypeScript type definition
 * @see {@link KEYS_CONTACT_CREATE} - Array of all keys for this type
 */
export const KEY_CONTACT_CREATE_COUNTRY = 'country' as keyof ContactCreate;
/**
 * Disclose
 *
 * Whether the contact should be disclosed
 *
 * @type {boolean}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `disclose` property of ContactCreate objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = contactcreate[KEY_CONTACT_CREATE_DISCLOSE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_CONTACT_CREATE_DISCLOSE;
 * const value = contactcreate[propertyName];
 * ```
 *
 * @see {@link ContactCreate} - The TypeScript type definition
 * @see {@link KEYS_CONTACT_CREATE} - Array of all keys for this type
 */
export const KEY_CONTACT_CREATE_DISCLOSE = 'disclose' as keyof ContactCreate;
/**
 * Email
 *
 * The email of the contact
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `email` property of ContactCreate objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = contactcreate[KEY_CONTACT_CREATE_EMAIL];
 * 
 * // Dynamic property access
 * const propertyName = KEY_CONTACT_CREATE_EMAIL;
 * const value = contactcreate[propertyName];
 * ```
 *
 * @see {@link ContactCreate} - The TypeScript type definition
 * @see {@link KEYS_CONTACT_CREATE} - Array of all keys for this type
 */
export const KEY_CONTACT_CREATE_EMAIL = 'email' as keyof ContactCreate;
/**
 * Fax
 *
 * The contacts's fax number
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `fax` property of ContactCreate objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = contactcreate[KEY_CONTACT_CREATE_FAX];
 * 
 * // Dynamic property access
 * const propertyName = KEY_CONTACT_CREATE_FAX;
 * const value = contactcreate[propertyName];
 * ```
 *
 * @see {@link ContactCreate} - The TypeScript type definition
 * @see {@link KEYS_CONTACT_CREATE} - Array of all keys for this type
 */
export const KEY_CONTACT_CREATE_FAX = 'fax' as keyof ContactCreate;
/**
 * First Name
 *
 * The first name of the contact
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `first_name` property of ContactCreate objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = contactcreate[KEY_CONTACT_CREATE_FIRST_NAME];
 * 
 * // Dynamic property access
 * const propertyName = KEY_CONTACT_CREATE_FIRST_NAME;
 * const value = contactcreate[propertyName];
 * ```
 *
 * @see {@link ContactCreate} - The TypeScript type definition
 * @see {@link KEYS_CONTACT_CREATE} - Array of all keys for this type
 */
export const KEY_CONTACT_CREATE_FIRST_NAME = 'first_name' as keyof ContactCreate;
/**
 * Last Name
 *
 * The last name of the contact
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `last_name` property of ContactCreate objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = contactcreate[KEY_CONTACT_CREATE_LAST_NAME];
 * 
 * // Dynamic property access
 * const propertyName = KEY_CONTACT_CREATE_LAST_NAME;
 * const value = contactcreate[propertyName];
 * ```
 *
 * @see {@link ContactCreate} - The TypeScript type definition
 * @see {@link KEYS_CONTACT_CREATE} - Array of all keys for this type
 */
export const KEY_CONTACT_CREATE_LAST_NAME = 'last_name' as keyof ContactCreate;
/**
 * Org
 *
 * The organization of the contact
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `org` property of ContactCreate objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = contactcreate[KEY_CONTACT_CREATE_ORG];
 * 
 * // Dynamic property access
 * const propertyName = KEY_CONTACT_CREATE_ORG;
 * const value = contactcreate[propertyName];
 * ```
 *
 * @see {@link ContactCreate} - The TypeScript type definition
 * @see {@link KEYS_CONTACT_CREATE} - Array of all keys for this type
 */
export const KEY_CONTACT_CREATE_ORG = 'org' as keyof ContactCreate;
/**
 * Phone
 *
 * The contact's phone number
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `phone` property of ContactCreate objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = contactcreate[KEY_CONTACT_CREATE_PHONE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_CONTACT_CREATE_PHONE;
 * const value = contactcreate[propertyName];
 * ```
 *
 * @see {@link ContactCreate} - The TypeScript type definition
 * @see {@link KEYS_CONTACT_CREATE} - Array of all keys for this type
 */
export const KEY_CONTACT_CREATE_PHONE = 'phone' as keyof ContactCreate;
/**
 * Postal Code
 *
 * The postal code of the contact
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `postal_code` property of ContactCreate objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = contactcreate[KEY_CONTACT_CREATE_POSTAL_CODE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_CONTACT_CREATE_POSTAL_CODE;
 * const value = contactcreate[propertyName];
 * ```
 *
 * @see {@link ContactCreate} - The TypeScript type definition
 * @see {@link KEYS_CONTACT_CREATE} - Array of all keys for this type
 */
export const KEY_CONTACT_CREATE_POSTAL_CODE = 'postal_code' as keyof ContactCreate;
/**
 * State
 *
 * The state of the contact
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `state` property of ContactCreate objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = contactcreate[KEY_CONTACT_CREATE_STATE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_CONTACT_CREATE_STATE;
 * const value = contactcreate[propertyName];
 * ```
 *
 * @see {@link ContactCreate} - The TypeScript type definition
 * @see {@link KEYS_CONTACT_CREATE} - Array of all keys for this type
 */
export const KEY_CONTACT_CREATE_STATE = 'state' as keyof ContactCreate;
/**
 * Street
 *
 * The address of the contact
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `street` property of ContactCreate objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = contactcreate[KEY_CONTACT_CREATE_STREET];
 * 
 * // Dynamic property access
 * const propertyName = KEY_CONTACT_CREATE_STREET;
 * const value = contactcreate[propertyName];
 * ```
 *
 * @see {@link ContactCreate} - The TypeScript type definition
 * @see {@link KEYS_CONTACT_CREATE} - Array of all keys for this type
 */
export const KEY_CONTACT_CREATE_STREET = 'street' as keyof ContactCreate;
/**
 * Title
 *
 * The title of the contact
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `title` property of ContactCreate objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = contactcreate[KEY_CONTACT_CREATE_TITLE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_CONTACT_CREATE_TITLE;
 * const value = contactcreate[propertyName];
 * ```
 *
 * @see {@link ContactCreate} - The TypeScript type definition
 * @see {@link KEYS_CONTACT_CREATE} - Array of all keys for this type
 */
export const KEY_CONTACT_CREATE_TITLE = 'title' as keyof ContactCreate;

/**
 * Array of all ContactCreate property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for ContactCreate objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all keys
 * for (const key of KEYS_CONTACT_CREATE) {
 *   console.log(`Property: ${key}, Value: ${contactcreate[key]}`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_CONTACT_CREATE.includes(someKey);
 * ```
 *
 * @see {@link ContactCreate} - The TypeScript type definition
 */
export const KEYS_CONTACT_CREATE = [
  KEY_CONTACT_CREATE_CITY,
  KEY_CONTACT_CREATE_COUNTRY,
  KEY_CONTACT_CREATE_DISCLOSE,
  KEY_CONTACT_CREATE_EMAIL,
  KEY_CONTACT_CREATE_FAX,
  KEY_CONTACT_CREATE_FIRST_NAME,
  KEY_CONTACT_CREATE_LAST_NAME,
  KEY_CONTACT_CREATE_ORG,
  KEY_CONTACT_CREATE_PHONE,
  KEY_CONTACT_CREATE_POSTAL_CODE,
  KEY_CONTACT_CREATE_STATE,
  KEY_CONTACT_CREATE_STREET,
  KEY_CONTACT_CREATE_TITLE,
] as const satisfies (keyof ContactCreate)[];

/**
 * City
 *
 * The city of the contact
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `city` property of Contact objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = contact[KEY_CONTACT_CITY];
 * 
 * // Dynamic property access
 * const propertyName = KEY_CONTACT_CITY;
 * const value = contact[propertyName];
 * ```
 *
 * @see {@link Contact} - The TypeScript type definition
 * @see {@link KEYS_CONTACT} - Array of all keys for this type
 */
export const KEY_CONTACT_CITY = 'city' as keyof Contact;
/**
 * Country
 *
 * The country of the contact
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `country` property of Contact objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = contact[KEY_CONTACT_COUNTRY];
 * 
 * // Dynamic property access
 * const propertyName = KEY_CONTACT_COUNTRY;
 * const value = contact[propertyName];
 * ```
 *
 * @see {@link Contact} - The TypeScript type definition
 * @see {@link KEYS_CONTACT} - Array of all keys for this type
 */
export const KEY_CONTACT_COUNTRY = 'country' as keyof Contact;
/**
 * Disclose
 *
 * Whether the contact should be disclosed
 *
 * @type {boolean}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `disclose` property of Contact objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = contact[KEY_CONTACT_DISCLOSE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_CONTACT_DISCLOSE;
 * const value = contact[propertyName];
 * ```
 *
 * @see {@link Contact} - The TypeScript type definition
 * @see {@link KEYS_CONTACT} - Array of all keys for this type
 */
export const KEY_CONTACT_DISCLOSE = 'disclose' as keyof Contact;
/**
 * Email
 *
 * The email of the contact
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `email` property of Contact objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = contact[KEY_CONTACT_EMAIL];
 * 
 * // Dynamic property access
 * const propertyName = KEY_CONTACT_EMAIL;
 * const value = contact[propertyName];
 * ```
 *
 * @see {@link Contact} - The TypeScript type definition
 * @see {@link KEYS_CONTACT} - Array of all keys for this type
 */
export const KEY_CONTACT_EMAIL = 'email' as keyof Contact;
/**
 * Fax
 *
 * The contacts's fax number
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `fax` property of Contact objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = contact[KEY_CONTACT_FAX];
 * 
 * // Dynamic property access
 * const propertyName = KEY_CONTACT_FAX;
 * const value = contact[propertyName];
 * ```
 *
 * @see {@link Contact} - The TypeScript type definition
 * @see {@link KEYS_CONTACT} - Array of all keys for this type
 */
export const KEY_CONTACT_FAX = 'fax' as keyof Contact;
/**
 * First Name
 *
 * The first name of the contact
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `first_name` property of Contact objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = contact[KEY_CONTACT_FIRST_NAME];
 * 
 * // Dynamic property access
 * const propertyName = KEY_CONTACT_FIRST_NAME;
 * const value = contact[propertyName];
 * ```
 *
 * @see {@link Contact} - The TypeScript type definition
 * @see {@link KEYS_CONTACT} - Array of all keys for this type
 */
export const KEY_CONTACT_FIRST_NAME = 'first_name' as keyof Contact;
/**
 * Last Name
 *
 * The last name of the contact
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `last_name` property of Contact objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = contact[KEY_CONTACT_LAST_NAME];
 * 
 * // Dynamic property access
 * const propertyName = KEY_CONTACT_LAST_NAME;
 * const value = contact[propertyName];
 * ```
 *
 * @see {@link Contact} - The TypeScript type definition
 * @see {@link KEYS_CONTACT} - Array of all keys for this type
 */
export const KEY_CONTACT_LAST_NAME = 'last_name' as keyof Contact;
/**
 * Org
 *
 * The organization of the contact
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `org` property of Contact objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = contact[KEY_CONTACT_ORG];
 * 
 * // Dynamic property access
 * const propertyName = KEY_CONTACT_ORG;
 * const value = contact[propertyName];
 * ```
 *
 * @see {@link Contact} - The TypeScript type definition
 * @see {@link KEYS_CONTACT} - Array of all keys for this type
 */
export const KEY_CONTACT_ORG = 'org' as keyof Contact;
/**
 * Phone
 *
 * The contact's phone number
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `phone` property of Contact objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = contact[KEY_CONTACT_PHONE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_CONTACT_PHONE;
 * const value = contact[propertyName];
 * ```
 *
 * @see {@link Contact} - The TypeScript type definition
 * @see {@link KEYS_CONTACT} - Array of all keys for this type
 */
export const KEY_CONTACT_PHONE = 'phone' as keyof Contact;
/**
 * Postal Code
 *
 * The postal code of the contact
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `postal_code` property of Contact objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = contact[KEY_CONTACT_POSTAL_CODE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_CONTACT_POSTAL_CODE;
 * const value = contact[propertyName];
 * ```
 *
 * @see {@link Contact} - The TypeScript type definition
 * @see {@link KEYS_CONTACT} - Array of all keys for this type
 */
export const KEY_CONTACT_POSTAL_CODE = 'postal_code' as keyof Contact;
/**
 * State
 *
 * The state of the contact
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `state` property of Contact objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = contact[KEY_CONTACT_STATE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_CONTACT_STATE;
 * const value = contact[propertyName];
 * ```
 *
 * @see {@link Contact} - The TypeScript type definition
 * @see {@link KEYS_CONTACT} - Array of all keys for this type
 */
export const KEY_CONTACT_STATE = 'state' as keyof Contact;
/**
 * Street
 *
 * The address of the contact
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `street` property of Contact objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = contact[KEY_CONTACT_STREET];
 * 
 * // Dynamic property access
 * const propertyName = KEY_CONTACT_STREET;
 * const value = contact[propertyName];
 * ```
 *
 * @see {@link Contact} - The TypeScript type definition
 * @see {@link KEYS_CONTACT} - Array of all keys for this type
 */
export const KEY_CONTACT_STREET = 'street' as keyof Contact;
/**
 * Title
 *
 * The title of the contact
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `title` property of Contact objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = contact[KEY_CONTACT_TITLE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_CONTACT_TITLE;
 * const value = contact[propertyName];
 * ```
 *
 * @see {@link Contact} - The TypeScript type definition
 * @see {@link KEYS_CONTACT} - Array of all keys for this type
 */
export const KEY_CONTACT_TITLE = 'title' as keyof Contact;

/**
 * Array of all Contact property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for Contact objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all keys
 * for (const key of KEYS_CONTACT) {
 *   console.log(`Property: ${key}, Value: ${contact[key]}`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_CONTACT.includes(someKey);
 * ```
 *
 * @see {@link Contact} - The TypeScript type definition
 */
export const KEYS_CONTACT = [
  KEY_CONTACT_CITY,
  KEY_CONTACT_COUNTRY,
  KEY_CONTACT_DISCLOSE,
  KEY_CONTACT_EMAIL,
  KEY_CONTACT_FAX,
  KEY_CONTACT_FIRST_NAME,
  KEY_CONTACT_LAST_NAME,
  KEY_CONTACT_ORG,
  KEY_CONTACT_PHONE,
  KEY_CONTACT_POSTAL_CODE,
  KEY_CONTACT_STATE,
  KEY_CONTACT_STREET,
  KEY_CONTACT_TITLE,
] as const satisfies (keyof Contact)[];

/**
 * City
 *
 * The city of the contact
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `city` property of ContactSchema objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = contactschema[KEY_CONTACT_SCHEMA_CITY];
 * 
 * // Dynamic property access
 * const propertyName = KEY_CONTACT_SCHEMA_CITY;
 * const value = contactschema[propertyName];
 * ```
 *
 * @see {@link ContactSchema} - The TypeScript type definition
 * @see {@link KEYS_CONTACT_SCHEMA} - Array of all keys for this type
 */
export const KEY_CONTACT_SCHEMA_CITY = 'city' as keyof ContactSchema;
/**
 * Contact Id
 *
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `contact_id` property of ContactSchema objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = contactschema[KEY_CONTACT_SCHEMA_CONTACT_ID];
 * 
 * // Dynamic property access
 * const propertyName = KEY_CONTACT_SCHEMA_CONTACT_ID;
 * const value = contactschema[propertyName];
 * ```
 *
 * @see {@link ContactSchema} - The TypeScript type definition
 * @see {@link KEYS_CONTACT_SCHEMA} - Array of all keys for this type
 */
export const KEY_CONTACT_SCHEMA_CONTACT_ID = 'contact_id' as keyof ContactSchema;
/**
 * Country
 *
 * The country of the contact
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `country` property of ContactSchema objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = contactschema[KEY_CONTACT_SCHEMA_COUNTRY];
 * 
 * // Dynamic property access
 * const propertyName = KEY_CONTACT_SCHEMA_COUNTRY;
 * const value = contactschema[propertyName];
 * ```
 *
 * @see {@link ContactSchema} - The TypeScript type definition
 * @see {@link KEYS_CONTACT_SCHEMA} - Array of all keys for this type
 */
export const KEY_CONTACT_SCHEMA_COUNTRY = 'country' as keyof ContactSchema;
/**
 * Created On
 *
 * The date/time the entry was created on
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `created_on` property of ContactSchema objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = contactschema[KEY_CONTACT_SCHEMA_CREATED_ON];
 * 
 * // Dynamic property access
 * const propertyName = KEY_CONTACT_SCHEMA_CREATED_ON;
 * const value = contactschema[propertyName];
 * ```
 *
 * @see {@link ContactSchema} - The TypeScript type definition
 * @see {@link KEYS_CONTACT_SCHEMA} - Array of all keys for this type
 */
export const KEY_CONTACT_SCHEMA_CREATED_ON = 'created_on' as keyof ContactSchema;
/**
 * Deleted On
 *
 * The date/time the entry was deleted on
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `deleted_on` property of ContactSchema objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = contactschema[KEY_CONTACT_SCHEMA_DELETED_ON];
 * 
 * // Dynamic property access
 * const propertyName = KEY_CONTACT_SCHEMA_DELETED_ON;
 * const value = contactschema[propertyName];
 * ```
 *
 * @see {@link ContactSchema} - The TypeScript type definition
 * @see {@link KEYS_CONTACT_SCHEMA} - Array of all keys for this type
 */
export const KEY_CONTACT_SCHEMA_DELETED_ON = 'deleted_on' as keyof ContactSchema;
/**
 * Disclose
 *
 * Whether the contact should be disclosed
 *
 * @type {boolean}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `disclose` property of ContactSchema objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = contactschema[KEY_CONTACT_SCHEMA_DISCLOSE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_CONTACT_SCHEMA_DISCLOSE;
 * const value = contactschema[propertyName];
 * ```
 *
 * @see {@link ContactSchema} - The TypeScript type definition
 * @see {@link KEYS_CONTACT_SCHEMA} - Array of all keys for this type
 */
export const KEY_CONTACT_SCHEMA_DISCLOSE = 'disclose' as keyof ContactSchema;
/**
 * Email
 *
 * The email of the contact
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `email` property of ContactSchema objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = contactschema[KEY_CONTACT_SCHEMA_EMAIL];
 * 
 * // Dynamic property access
 * const propertyName = KEY_CONTACT_SCHEMA_EMAIL;
 * const value = contactschema[propertyName];
 * ```
 *
 * @see {@link ContactSchema} - The TypeScript type definition
 * @see {@link KEYS_CONTACT_SCHEMA} - Array of all keys for this type
 */
export const KEY_CONTACT_SCHEMA_EMAIL = 'email' as keyof ContactSchema;
/**
 * Fax
 *
 * The contacts's fax number
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `fax` property of ContactSchema objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = contactschema[KEY_CONTACT_SCHEMA_FAX];
 * 
 * // Dynamic property access
 * const propertyName = KEY_CONTACT_SCHEMA_FAX;
 * const value = contactschema[propertyName];
 * ```
 *
 * @see {@link ContactSchema} - The TypeScript type definition
 * @see {@link KEYS_CONTACT_SCHEMA} - Array of all keys for this type
 */
export const KEY_CONTACT_SCHEMA_FAX = 'fax' as keyof ContactSchema;
/**
 * First Name
 *
 * The first name of the contact
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `first_name` property of ContactSchema objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = contactschema[KEY_CONTACT_SCHEMA_FIRST_NAME];
 * 
 * // Dynamic property access
 * const propertyName = KEY_CONTACT_SCHEMA_FIRST_NAME;
 * const value = contactschema[propertyName];
 * ```
 *
 * @see {@link ContactSchema} - The TypeScript type definition
 * @see {@link KEYS_CONTACT_SCHEMA} - Array of all keys for this type
 */
export const KEY_CONTACT_SCHEMA_FIRST_NAME = 'first_name' as keyof ContactSchema;
/**
 * Last Name
 *
 * The last name of the contact
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `last_name` property of ContactSchema objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = contactschema[KEY_CONTACT_SCHEMA_LAST_NAME];
 * 
 * // Dynamic property access
 * const propertyName = KEY_CONTACT_SCHEMA_LAST_NAME;
 * const value = contactschema[propertyName];
 * ```
 *
 * @see {@link ContactSchema} - The TypeScript type definition
 * @see {@link KEYS_CONTACT_SCHEMA} - Array of all keys for this type
 */
export const KEY_CONTACT_SCHEMA_LAST_NAME = 'last_name' as keyof ContactSchema;
/**
 * Org
 *
 * The organization of the contact
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `org` property of ContactSchema objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = contactschema[KEY_CONTACT_SCHEMA_ORG];
 * 
 * // Dynamic property access
 * const propertyName = KEY_CONTACT_SCHEMA_ORG;
 * const value = contactschema[propertyName];
 * ```
 *
 * @see {@link ContactSchema} - The TypeScript type definition
 * @see {@link KEYS_CONTACT_SCHEMA} - Array of all keys for this type
 */
export const KEY_CONTACT_SCHEMA_ORG = 'org' as keyof ContactSchema;
/**
 * Organization Id
 *
 * The organization that owns the domain
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `organization_id` property of ContactSchema objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = contactschema[KEY_CONTACT_SCHEMA_ORGANIZATION_ID];
 * 
 * // Dynamic property access
 * const propertyName = KEY_CONTACT_SCHEMA_ORGANIZATION_ID;
 * const value = contactschema[propertyName];
 * ```
 *
 * @see {@link ContactSchema} - The TypeScript type definition
 * @see {@link KEYS_CONTACT_SCHEMA} - Array of all keys for this type
 */
export const KEY_CONTACT_SCHEMA_ORGANIZATION_ID = 'organization_id' as keyof ContactSchema;
/**
 * Phone
 *
 * The contact's phone number
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `phone` property of ContactSchema objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = contactschema[KEY_CONTACT_SCHEMA_PHONE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_CONTACT_SCHEMA_PHONE;
 * const value = contactschema[propertyName];
 * ```
 *
 * @see {@link ContactSchema} - The TypeScript type definition
 * @see {@link KEYS_CONTACT_SCHEMA} - Array of all keys for this type
 */
export const KEY_CONTACT_SCHEMA_PHONE = 'phone' as keyof ContactSchema;
/**
 * Postal Code
 *
 * The postal code of the contact
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `postal_code` property of ContactSchema objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = contactschema[KEY_CONTACT_SCHEMA_POSTAL_CODE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_CONTACT_SCHEMA_POSTAL_CODE;
 * const value = contactschema[propertyName];
 * ```
 *
 * @see {@link ContactSchema} - The TypeScript type definition
 * @see {@link KEYS_CONTACT_SCHEMA} - Array of all keys for this type
 */
export const KEY_CONTACT_SCHEMA_POSTAL_CODE = 'postal_code' as keyof ContactSchema;
/**
 * State
 *
 * The state of the contact
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `state` property of ContactSchema objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = contactschema[KEY_CONTACT_SCHEMA_STATE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_CONTACT_SCHEMA_STATE;
 * const value = contactschema[propertyName];
 * ```
 *
 * @see {@link ContactSchema} - The TypeScript type definition
 * @see {@link KEYS_CONTACT_SCHEMA} - Array of all keys for this type
 */
export const KEY_CONTACT_SCHEMA_STATE = 'state' as keyof ContactSchema;
/**
 * Street
 *
 * The address of the contact
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `street` property of ContactSchema objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = contactschema[KEY_CONTACT_SCHEMA_STREET];
 * 
 * // Dynamic property access
 * const propertyName = KEY_CONTACT_SCHEMA_STREET;
 * const value = contactschema[propertyName];
 * ```
 *
 * @see {@link ContactSchema} - The TypeScript type definition
 * @see {@link KEYS_CONTACT_SCHEMA} - Array of all keys for this type
 */
export const KEY_CONTACT_SCHEMA_STREET = 'street' as keyof ContactSchema;
/**
 * Title
 *
 * The title of the contact
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `title` property of ContactSchema objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = contactschema[KEY_CONTACT_SCHEMA_TITLE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_CONTACT_SCHEMA_TITLE;
 * const value = contactschema[propertyName];
 * ```
 *
 * @see {@link ContactSchema} - The TypeScript type definition
 * @see {@link KEYS_CONTACT_SCHEMA} - Array of all keys for this type
 */
export const KEY_CONTACT_SCHEMA_TITLE = 'title' as keyof ContactSchema;

/**
 * Array of all ContactSchema property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for ContactSchema objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all keys
 * for (const key of KEYS_CONTACT_SCHEMA) {
 *   console.log(`Property: ${key}, Value: ${contactschema[key]}`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_CONTACT_SCHEMA.includes(someKey);
 * ```
 *
 * @see {@link ContactSchema} - The TypeScript type definition
 */
export const KEYS_CONTACT_SCHEMA = [
  KEY_CONTACT_SCHEMA_CITY,
  KEY_CONTACT_SCHEMA_CONTACT_ID,
  KEY_CONTACT_SCHEMA_COUNTRY,
  KEY_CONTACT_SCHEMA_CREATED_ON,
  KEY_CONTACT_SCHEMA_DELETED_ON,
  KEY_CONTACT_SCHEMA_DISCLOSE,
  KEY_CONTACT_SCHEMA_EMAIL,
  KEY_CONTACT_SCHEMA_FAX,
  KEY_CONTACT_SCHEMA_FIRST_NAME,
  KEY_CONTACT_SCHEMA_LAST_NAME,
  KEY_CONTACT_SCHEMA_ORG,
  KEY_CONTACT_SCHEMA_ORGANIZATION_ID,
  KEY_CONTACT_SCHEMA_PHONE,
  KEY_CONTACT_SCHEMA_POSTAL_CODE,
  KEY_CONTACT_SCHEMA_STATE,
  KEY_CONTACT_SCHEMA_STREET,
  KEY_CONTACT_SCHEMA_TITLE,
] as const satisfies (keyof ContactSchema)[];

/**
 * Canceled On
 *
 * The date the verification was cancelled
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `canceled_on` property of ContactVerificationApi objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = contactverificationapi[KEY_CONTACT_VERIFICATION_API_CANCELED_ON];
 * 
 * // Dynamic property access
 * const propertyName = KEY_CONTACT_VERIFICATION_API_CANCELED_ON;
 * const value = contactverificationapi[propertyName];
 * ```
 *
 * @see {@link ContactVerificationApi} - The TypeScript type definition
 * @see {@link KEYS_CONTACT_VERIFICATION_API} - Array of all keys for this type
 */
export const KEY_CONTACT_VERIFICATION_API_CANCELED_ON = 'canceled_on' as keyof ContactVerificationApi;
/**
 * Contact Id
 *
 * The contact that is being verified
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `contact_id` property of ContactVerificationApi objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = contactverificationapi[KEY_CONTACT_VERIFICATION_API_CONTACT_ID];
 * 
 * // Dynamic property access
 * const propertyName = KEY_CONTACT_VERIFICATION_API_CONTACT_ID;
 * const value = contactverificationapi[propertyName];
 * ```
 *
 * @see {@link ContactVerificationApi} - The TypeScript type definition
 * @see {@link KEYS_CONTACT_VERIFICATION_API} - Array of all keys for this type
 */
export const KEY_CONTACT_VERIFICATION_API_CONTACT_ID = 'contact_id' as keyof ContactVerificationApi;
/**
 * Contact Verification Id
 *
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `contact_verification_id` property of ContactVerificationApi objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = contactverificationapi[KEY_CONTACT_VERIFICATION_API_CONTACT_VERIFICATION_ID];
 * 
 * // Dynamic property access
 * const propertyName = KEY_CONTACT_VERIFICATION_API_CONTACT_VERIFICATION_ID;
 * const value = contactverificationapi[propertyName];
 * ```
 *
 * @see {@link ContactVerificationApi} - The TypeScript type definition
 * @see {@link KEYS_CONTACT_VERIFICATION_API} - Array of all keys for this type
 */
export const KEY_CONTACT_VERIFICATION_API_CONTACT_VERIFICATION_ID = 'contact_verification_id' as keyof ContactVerificationApi;
/**
 * Created On
 *
 * The date/time the entry was created on
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `created_on` property of ContactVerificationApi objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = contactverificationapi[KEY_CONTACT_VERIFICATION_API_CREATED_ON];
 * 
 * // Dynamic property access
 * const propertyName = KEY_CONTACT_VERIFICATION_API_CREATED_ON;
 * const value = contactverificationapi[propertyName];
 * ```
 *
 * @see {@link ContactVerificationApi} - The TypeScript type definition
 * @see {@link KEYS_CONTACT_VERIFICATION_API} - Array of all keys for this type
 */
export const KEY_CONTACT_VERIFICATION_API_CREATED_ON = 'created_on' as keyof ContactVerificationApi;
/**
 * status property
 *
 * Current status of the email verification
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `status` property of ContactVerificationApi objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = contactverificationapi[KEY_CONTACT_VERIFICATION_API_STATUS];
 * 
 * // Dynamic property access
 * const propertyName = KEY_CONTACT_VERIFICATION_API_STATUS;
 * const value = contactverificationapi[propertyName];
 * ```
 *
 * @see {@link ContactVerificationApi} - The TypeScript type definition
 * @see {@link KEYS_CONTACT_VERIFICATION_API} - Array of all keys for this type
 */
export const KEY_CONTACT_VERIFICATION_API_STATUS = 'status' as keyof ContactVerificationApi;
/**
 * Token
 *
 * The token to verify the email address
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `token` property of ContactVerificationApi objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = contactverificationapi[KEY_CONTACT_VERIFICATION_API_TOKEN];
 * 
 * // Dynamic property access
 * const propertyName = KEY_CONTACT_VERIFICATION_API_TOKEN;
 * const value = contactverificationapi[propertyName];
 * ```
 *
 * @see {@link ContactVerificationApi} - The TypeScript type definition
 * @see {@link KEYS_CONTACT_VERIFICATION_API} - Array of all keys for this type
 */
export const KEY_CONTACT_VERIFICATION_API_TOKEN = 'token' as keyof ContactVerificationApi;
/**
 * type property
 *
 * The type of verification: 'api' for retrieving token via API, 'email' for retrieving via email
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `type` property of ContactVerificationApi objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = contactverificationapi[KEY_CONTACT_VERIFICATION_API_TYPE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_CONTACT_VERIFICATION_API_TYPE;
 * const value = contactverificationapi[propertyName];
 * ```
 *
 * @see {@link ContactVerificationApi} - The TypeScript type definition
 * @see {@link KEYS_CONTACT_VERIFICATION_API} - Array of all keys for this type
 */
export const KEY_CONTACT_VERIFICATION_API_TYPE = 'type' as keyof ContactVerificationApi;
/**
 * Updated On
 *
 * The date/time the entry was last updated on
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `updated_on` property of ContactVerificationApi objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = contactverificationapi[KEY_CONTACT_VERIFICATION_API_UPDATED_ON];
 * 
 * // Dynamic property access
 * const propertyName = KEY_CONTACT_VERIFICATION_API_UPDATED_ON;
 * const value = contactverificationapi[propertyName];
 * ```
 *
 * @see {@link ContactVerificationApi} - The TypeScript type definition
 * @see {@link KEYS_CONTACT_VERIFICATION_API} - Array of all keys for this type
 */
export const KEY_CONTACT_VERIFICATION_API_UPDATED_ON = 'updated_on' as keyof ContactVerificationApi;
/**
 * Verified On
 *
 * The date the verification was verified
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `verified_on` property of ContactVerificationApi objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = contactverificationapi[KEY_CONTACT_VERIFICATION_API_VERIFIED_ON];
 * 
 * // Dynamic property access
 * const propertyName = KEY_CONTACT_VERIFICATION_API_VERIFIED_ON;
 * const value = contactverificationapi[propertyName];
 * ```
 *
 * @see {@link ContactVerificationApi} - The TypeScript type definition
 * @see {@link KEYS_CONTACT_VERIFICATION_API} - Array of all keys for this type
 */
export const KEY_CONTACT_VERIFICATION_API_VERIFIED_ON = 'verified_on' as keyof ContactVerificationApi;

/**
 * Array of all ContactVerificationApi property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for ContactVerificationApi objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all keys
 * for (const key of KEYS_CONTACT_VERIFICATION_API) {
 *   console.log(`Property: ${key}, Value: ${contactverificationapi[key]}`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_CONTACT_VERIFICATION_API.includes(someKey);
 * ```
 *
 * @see {@link ContactVerificationApi} - The TypeScript type definition
 */
export const KEYS_CONTACT_VERIFICATION_API = [
  KEY_CONTACT_VERIFICATION_API_CANCELED_ON,
  KEY_CONTACT_VERIFICATION_API_CONTACT_ID,
  KEY_CONTACT_VERIFICATION_API_CONTACT_VERIFICATION_ID,
  KEY_CONTACT_VERIFICATION_API_CREATED_ON,
  KEY_CONTACT_VERIFICATION_API_STATUS,
  KEY_CONTACT_VERIFICATION_API_TOKEN,
  KEY_CONTACT_VERIFICATION_API_TYPE,
  KEY_CONTACT_VERIFICATION_API_UPDATED_ON,
  KEY_CONTACT_VERIFICATION_API_VERIFIED_ON,
] as const satisfies (keyof ContactVerificationApi)[];

/**
 * Canceled On
 *
 * The date the verification was cancelled
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `canceled_on` property of ContactVerificationEmail objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = contactverificationemail[KEY_CONTACT_VERIFICATION_EMAIL_CANCELED_ON];
 * 
 * // Dynamic property access
 * const propertyName = KEY_CONTACT_VERIFICATION_EMAIL_CANCELED_ON;
 * const value = contactverificationemail[propertyName];
 * ```
 *
 * @see {@link ContactVerificationEmail} - The TypeScript type definition
 * @see {@link KEYS_CONTACT_VERIFICATION_EMAIL} - Array of all keys for this type
 */
export const KEY_CONTACT_VERIFICATION_EMAIL_CANCELED_ON = 'canceled_on' as keyof ContactVerificationEmail;
/**
 * Contact Id
 *
 * The contact that is being verified
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `contact_id` property of ContactVerificationEmail objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = contactverificationemail[KEY_CONTACT_VERIFICATION_EMAIL_CONTACT_ID];
 * 
 * // Dynamic property access
 * const propertyName = KEY_CONTACT_VERIFICATION_EMAIL_CONTACT_ID;
 * const value = contactverificationemail[propertyName];
 * ```
 *
 * @see {@link ContactVerificationEmail} - The TypeScript type definition
 * @see {@link KEYS_CONTACT_VERIFICATION_EMAIL} - Array of all keys for this type
 */
export const KEY_CONTACT_VERIFICATION_EMAIL_CONTACT_ID = 'contact_id' as keyof ContactVerificationEmail;
/**
 * Contact Verification Id
 *
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `contact_verification_id` property of ContactVerificationEmail objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = contactverificationemail[KEY_CONTACT_VERIFICATION_EMAIL_CONTACT_VERIFICATION_ID];
 * 
 * // Dynamic property access
 * const propertyName = KEY_CONTACT_VERIFICATION_EMAIL_CONTACT_VERIFICATION_ID;
 * const value = contactverificationemail[propertyName];
 * ```
 *
 * @see {@link ContactVerificationEmail} - The TypeScript type definition
 * @see {@link KEYS_CONTACT_VERIFICATION_EMAIL} - Array of all keys for this type
 */
export const KEY_CONTACT_VERIFICATION_EMAIL_CONTACT_VERIFICATION_ID = 'contact_verification_id' as keyof ContactVerificationEmail;
/**
 * Created On
 *
 * The date/time the entry was created on
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `created_on` property of ContactVerificationEmail objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = contactverificationemail[KEY_CONTACT_VERIFICATION_EMAIL_CREATED_ON];
 * 
 * // Dynamic property access
 * const propertyName = KEY_CONTACT_VERIFICATION_EMAIL_CREATED_ON;
 * const value = contactverificationemail[propertyName];
 * ```
 *
 * @see {@link ContactVerificationEmail} - The TypeScript type definition
 * @see {@link KEYS_CONTACT_VERIFICATION_EMAIL} - Array of all keys for this type
 */
export const KEY_CONTACT_VERIFICATION_EMAIL_CREATED_ON = 'created_on' as keyof ContactVerificationEmail;
/**
 * status property
 *
 * Current status of the email verification
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `status` property of ContactVerificationEmail objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = contactverificationemail[KEY_CONTACT_VERIFICATION_EMAIL_STATUS];
 * 
 * // Dynamic property access
 * const propertyName = KEY_CONTACT_VERIFICATION_EMAIL_STATUS;
 * const value = contactverificationemail[propertyName];
 * ```
 *
 * @see {@link ContactVerificationEmail} - The TypeScript type definition
 * @see {@link KEYS_CONTACT_VERIFICATION_EMAIL} - Array of all keys for this type
 */
export const KEY_CONTACT_VERIFICATION_EMAIL_STATUS = 'status' as keyof ContactVerificationEmail;
/**
 * type property
 *
 * The type of verification: 'api' for retrieving token via API, 'email' for retrieving via email
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `type` property of ContactVerificationEmail objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = contactverificationemail[KEY_CONTACT_VERIFICATION_EMAIL_TYPE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_CONTACT_VERIFICATION_EMAIL_TYPE;
 * const value = contactverificationemail[propertyName];
 * ```
 *
 * @see {@link ContactVerificationEmail} - The TypeScript type definition
 * @see {@link KEYS_CONTACT_VERIFICATION_EMAIL} - Array of all keys for this type
 */
export const KEY_CONTACT_VERIFICATION_EMAIL_TYPE = 'type' as keyof ContactVerificationEmail;
/**
 * Updated On
 *
 * The date/time the entry was last updated on
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `updated_on` property of ContactVerificationEmail objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = contactverificationemail[KEY_CONTACT_VERIFICATION_EMAIL_UPDATED_ON];
 * 
 * // Dynamic property access
 * const propertyName = KEY_CONTACT_VERIFICATION_EMAIL_UPDATED_ON;
 * const value = contactverificationemail[propertyName];
 * ```
 *
 * @see {@link ContactVerificationEmail} - The TypeScript type definition
 * @see {@link KEYS_CONTACT_VERIFICATION_EMAIL} - Array of all keys for this type
 */
export const KEY_CONTACT_VERIFICATION_EMAIL_UPDATED_ON = 'updated_on' as keyof ContactVerificationEmail;
/**
 * Verified On
 *
 * The date the verification was verified
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `verified_on` property of ContactVerificationEmail objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = contactverificationemail[KEY_CONTACT_VERIFICATION_EMAIL_VERIFIED_ON];
 * 
 * // Dynamic property access
 * const propertyName = KEY_CONTACT_VERIFICATION_EMAIL_VERIFIED_ON;
 * const value = contactverificationemail[propertyName];
 * ```
 *
 * @see {@link ContactVerificationEmail} - The TypeScript type definition
 * @see {@link KEYS_CONTACT_VERIFICATION_EMAIL} - Array of all keys for this type
 */
export const KEY_CONTACT_VERIFICATION_EMAIL_VERIFIED_ON = 'verified_on' as keyof ContactVerificationEmail;

/**
 * Array of all ContactVerificationEmail property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for ContactVerificationEmail objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all keys
 * for (const key of KEYS_CONTACT_VERIFICATION_EMAIL) {
 *   console.log(`Property: ${key}, Value: ${contactverificationemail[key]}`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_CONTACT_VERIFICATION_EMAIL.includes(someKey);
 * ```
 *
 * @see {@link ContactVerificationEmail} - The TypeScript type definition
 */
export const KEYS_CONTACT_VERIFICATION_EMAIL = [
  KEY_CONTACT_VERIFICATION_EMAIL_CANCELED_ON,
  KEY_CONTACT_VERIFICATION_EMAIL_CONTACT_ID,
  KEY_CONTACT_VERIFICATION_EMAIL_CONTACT_VERIFICATION_ID,
  KEY_CONTACT_VERIFICATION_EMAIL_CREATED_ON,
  KEY_CONTACT_VERIFICATION_EMAIL_STATUS,
  KEY_CONTACT_VERIFICATION_EMAIL_TYPE,
  KEY_CONTACT_VERIFICATION_EMAIL_UPDATED_ON,
  KEY_CONTACT_VERIFICATION_EMAIL_VERIFIED_ON,
] as const satisfies (keyof ContactVerificationEmail)[];

/**
 * Canceled On
 *
 * The date the verification was cancelled
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `canceled_on` property of ContactVerification objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = contactverification[KEY_CONTACT_VERIFICATION_CANCELED_ON];
 * 
 * // Dynamic property access
 * const propertyName = KEY_CONTACT_VERIFICATION_CANCELED_ON;
 * const value = contactverification[propertyName];
 * ```
 *
 * @see {@link ContactVerification} - The TypeScript type definition
 * @see {@link KEYS_CONTACT_VERIFICATION} - Array of all keys for this type
 */
export const KEY_CONTACT_VERIFICATION_CANCELED_ON = 'canceled_on' as keyof ContactVerification;
/**
 * Contact Id
 *
 * The contact that is being verified
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `contact_id` property of ContactVerification objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = contactverification[KEY_CONTACT_VERIFICATION_CONTACT_ID];
 * 
 * // Dynamic property access
 * const propertyName = KEY_CONTACT_VERIFICATION_CONTACT_ID;
 * const value = contactverification[propertyName];
 * ```
 *
 * @see {@link ContactVerification} - The TypeScript type definition
 * @see {@link KEYS_CONTACT_VERIFICATION} - Array of all keys for this type
 */
export const KEY_CONTACT_VERIFICATION_CONTACT_ID = 'contact_id' as keyof ContactVerification;
/**
 * Contact Verification Id
 *
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `contact_verification_id` property of ContactVerification objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = contactverification[KEY_CONTACT_VERIFICATION_CONTACT_VERIFICATION_ID];
 * 
 * // Dynamic property access
 * const propertyName = KEY_CONTACT_VERIFICATION_CONTACT_VERIFICATION_ID;
 * const value = contactverification[propertyName];
 * ```
 *
 * @see {@link ContactVerification} - The TypeScript type definition
 * @see {@link KEYS_CONTACT_VERIFICATION} - Array of all keys for this type
 */
export const KEY_CONTACT_VERIFICATION_CONTACT_VERIFICATION_ID = 'contact_verification_id' as keyof ContactVerification;
/**
 * Created On
 *
 * The date/time the entry was created on
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `created_on` property of ContactVerification objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = contactverification[KEY_CONTACT_VERIFICATION_CREATED_ON];
 * 
 * // Dynamic property access
 * const propertyName = KEY_CONTACT_VERIFICATION_CREATED_ON;
 * const value = contactverification[propertyName];
 * ```
 *
 * @see {@link ContactVerification} - The TypeScript type definition
 * @see {@link KEYS_CONTACT_VERIFICATION} - Array of all keys for this type
 */
export const KEY_CONTACT_VERIFICATION_CREATED_ON = 'created_on' as keyof ContactVerification;
/**
 * status property
 *
 * Current status of the email verification
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `status` property of ContactVerification objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = contactverification[KEY_CONTACT_VERIFICATION_STATUS];
 * 
 * // Dynamic property access
 * const propertyName = KEY_CONTACT_VERIFICATION_STATUS;
 * const value = contactverification[propertyName];
 * ```
 *
 * @see {@link ContactVerification} - The TypeScript type definition
 * @see {@link KEYS_CONTACT_VERIFICATION} - Array of all keys for this type
 */
export const KEY_CONTACT_VERIFICATION_STATUS = 'status' as keyof ContactVerification;
/**
 * type property
 *
 * The type of verification: 'api' for retrieving token via API, 'email' for retrieving via email
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `type` property of ContactVerification objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = contactverification[KEY_CONTACT_VERIFICATION_TYPE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_CONTACT_VERIFICATION_TYPE;
 * const value = contactverification[propertyName];
 * ```
 *
 * @see {@link ContactVerification} - The TypeScript type definition
 * @see {@link KEYS_CONTACT_VERIFICATION} - Array of all keys for this type
 */
export const KEY_CONTACT_VERIFICATION_TYPE = 'type' as keyof ContactVerification;
/**
 * Updated On
 *
 * The date/time the entry was last updated on
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `updated_on` property of ContactVerification objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = contactverification[KEY_CONTACT_VERIFICATION_UPDATED_ON];
 * 
 * // Dynamic property access
 * const propertyName = KEY_CONTACT_VERIFICATION_UPDATED_ON;
 * const value = contactverification[propertyName];
 * ```
 *
 * @see {@link ContactVerification} - The TypeScript type definition
 * @see {@link KEYS_CONTACT_VERIFICATION} - Array of all keys for this type
 */
export const KEY_CONTACT_VERIFICATION_UPDATED_ON = 'updated_on' as keyof ContactVerification;
/**
 * Verified On
 *
 * The date the verification was verified
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `verified_on` property of ContactVerification objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = contactverification[KEY_CONTACT_VERIFICATION_VERIFIED_ON];
 * 
 * // Dynamic property access
 * const propertyName = KEY_CONTACT_VERIFICATION_VERIFIED_ON;
 * const value = contactverification[propertyName];
 * ```
 *
 * @see {@link ContactVerification} - The TypeScript type definition
 * @see {@link KEYS_CONTACT_VERIFICATION} - Array of all keys for this type
 */
export const KEY_CONTACT_VERIFICATION_VERIFIED_ON = 'verified_on' as keyof ContactVerification;

/**
 * Array of all ContactVerification property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for ContactVerification objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all keys
 * for (const key of KEYS_CONTACT_VERIFICATION) {
 *   console.log(`Property: ${key}, Value: ${contactverification[key]}`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_CONTACT_VERIFICATION.includes(someKey);
 * ```
 *
 * @see {@link ContactVerification} - The TypeScript type definition
 */
export const KEYS_CONTACT_VERIFICATION = [
  KEY_CONTACT_VERIFICATION_CANCELED_ON,
  KEY_CONTACT_VERIFICATION_CONTACT_ID,
  KEY_CONTACT_VERIFICATION_CONTACT_VERIFICATION_ID,
  KEY_CONTACT_VERIFICATION_CREATED_ON,
  KEY_CONTACT_VERIFICATION_STATUS,
  KEY_CONTACT_VERIFICATION_TYPE,
  KEY_CONTACT_VERIFICATION_UPDATED_ON,
  KEY_CONTACT_VERIFICATION_VERIFIED_ON,
] as const satisfies (keyof ContactVerification)[];

/**
 * Authinfo Required
 *
 * Whether the registry requires authinfo for contact creation
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `authinfo_required` property of ContactsBase objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = contactsbase[KEY_CONTACTS_BASE_AUTHINFO_REQUIRED];
 * 
 * // Dynamic property access
 * const propertyName = KEY_CONTACTS_BASE_AUTHINFO_REQUIRED;
 * const value = contactsbase[propertyName];
 * ```
 *
 * @see {@link ContactsBase} - The TypeScript type definition
 * @see {@link KEYS_CONTACTS_BASE} - Array of all keys for this type
 */
export const KEY_CONTACTS_BASE_AUTHINFO_REQUIRED = 'authinfo_required' as keyof ContactsBase;
/**
 * Is Thick
 *
 * Whether the registry supports thick contacts
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `is_thick` property of ContactsBase objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = contactsbase[KEY_CONTACTS_BASE_IS_THICK];
 * 
 * // Dynamic property access
 * const propertyName = KEY_CONTACTS_BASE_IS_THICK;
 * const value = contactsbase[propertyName];
 * ```
 *
 * @see {@link ContactsBase} - The TypeScript type definition
 * @see {@link KEYS_CONTACTS_BASE} - Array of all keys for this type
 */
export const KEY_CONTACTS_BASE_IS_THICK = 'is_thick' as keyof ContactsBase;
/**
 * Privacy Proxy
 *
 * Whether a privacy service is allowed
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `privacy_proxy` property of ContactsBase objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = contactsbase[KEY_CONTACTS_BASE_PRIVACY_PROXY];
 * 
 * // Dynamic property access
 * const propertyName = KEY_CONTACTS_BASE_PRIVACY_PROXY;
 * const value = contactsbase[propertyName];
 * ```
 *
 * @see {@link ContactsBase} - The TypeScript type definition
 * @see {@link KEYS_CONTACTS_BASE} - Array of all keys for this type
 */
export const KEY_CONTACTS_BASE_PRIVACY_PROXY = 'privacy_proxy' as keyof ContactsBase;
/**
 * registrant_change property
 *
 * Whether the registrant can change through update or trade
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `registrant_change` property of ContactsBase objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = contactsbase[KEY_CONTACTS_BASE_REGISTRANT_CHANGE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_CONTACTS_BASE_REGISTRANT_CHANGE;
 * const value = contactsbase[propertyName];
 * ```
 *
 * @see {@link ContactsBase} - The TypeScript type definition
 * @see {@link KEYS_CONTACTS_BASE} - Array of all keys for this type
 */
export const KEY_CONTACTS_BASE_REGISTRANT_CHANGE = 'registrant_change' as keyof ContactsBase;
/**
 * Support Check
 *
 * Whether the registry supports contact checks
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `support_check` property of ContactsBase objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = contactsbase[KEY_CONTACTS_BASE_SUPPORT_CHECK];
 * 
 * // Dynamic property access
 * const propertyName = KEY_CONTACTS_BASE_SUPPORT_CHECK;
 * const value = contactsbase[propertyName];
 * ```
 *
 * @see {@link ContactsBase} - The TypeScript type definition
 * @see {@link KEYS_CONTACTS_BASE} - Array of all keys for this type
 */
export const KEY_CONTACTS_BASE_SUPPORT_CHECK = 'support_check' as keyof ContactsBase;
/**
 * Support Client Contact Id
 *
 * Whether the registry supports client defined contact ID
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `support_client_contact_id` property of ContactsBase objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = contactsbase[KEY_CONTACTS_BASE_SUPPORT_CLIENT_CONTACT_ID];
 * 
 * // Dynamic property access
 * const propertyName = KEY_CONTACTS_BASE_SUPPORT_CLIENT_CONTACT_ID;
 * const value = contactsbase[propertyName];
 * ```
 *
 * @see {@link ContactsBase} - The TypeScript type definition
 * @see {@link KEYS_CONTACTS_BASE} - Array of all keys for this type
 */
export const KEY_CONTACTS_BASE_SUPPORT_CLIENT_CONTACT_ID = 'support_client_contact_id' as keyof ContactsBase;
/**
 * Support Transfer
 *
 * Whether the registry supports contact transfer
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `support_transfer` property of ContactsBase objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = contactsbase[KEY_CONTACTS_BASE_SUPPORT_TRANSFER];
 * 
 * // Dynamic property access
 * const propertyName = KEY_CONTACTS_BASE_SUPPORT_TRANSFER;
 * const value = contactsbase[propertyName];
 * ```
 *
 * @see {@link ContactsBase} - The TypeScript type definition
 * @see {@link KEYS_CONTACTS_BASE} - Array of all keys for this type
 */
export const KEY_CONTACTS_BASE_SUPPORT_TRANSFER = 'support_transfer' as keyof ContactsBase;
/**
 * Supported Postal Types
 *
 * Supported postal address types
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `supported_postal_types` property of ContactsBase objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = contactsbase[KEY_CONTACTS_BASE_SUPPORTED_POSTAL_TYPES];
 * 
 * // Dynamic property access
 * const propertyName = KEY_CONTACTS_BASE_SUPPORTED_POSTAL_TYPES;
 * const value = contactsbase[propertyName];
 * ```
 *
 * @see {@link ContactsBase} - The TypeScript type definition
 * @see {@link KEYS_CONTACTS_BASE} - Array of all keys for this type
 */
export const KEY_CONTACTS_BASE_SUPPORTED_POSTAL_TYPES = 'supported_postal_types' as keyof ContactsBase;
/**
 * Supported Roles
 *
 * Supported contact roles
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `supported_roles` property of ContactsBase objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = contactsbase[KEY_CONTACTS_BASE_SUPPORTED_ROLES];
 * 
 * // Dynamic property access
 * const propertyName = KEY_CONTACTS_BASE_SUPPORTED_ROLES;
 * const value = contactsbase[propertyName];
 * ```
 *
 * @see {@link ContactsBase} - The TypeScript type definition
 * @see {@link KEYS_CONTACTS_BASE} - Array of all keys for this type
 */
export const KEY_CONTACTS_BASE_SUPPORTED_ROLES = 'supported_roles' as keyof ContactsBase;

/**
 * Array of all ContactsBase property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for ContactsBase objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all keys
 * for (const key of KEYS_CONTACTS_BASE) {
 *   console.log(`Property: ${key}, Value: ${contactsbase[key]}`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_CONTACTS_BASE.includes(someKey);
 * ```
 *
 * @see {@link ContactsBase} - The TypeScript type definition
 */
export const KEYS_CONTACTS_BASE = [
  KEY_CONTACTS_BASE_AUTHINFO_REQUIRED,
  KEY_CONTACTS_BASE_IS_THICK,
  KEY_CONTACTS_BASE_PRIVACY_PROXY,
  KEY_CONTACTS_BASE_REGISTRANT_CHANGE,
  KEY_CONTACTS_BASE_SUPPORT_CHECK,
  KEY_CONTACTS_BASE_SUPPORT_CLIENT_CONTACT_ID,
  KEY_CONTACTS_BASE_SUPPORT_TRANSFER,
  KEY_CONTACTS_BASE_SUPPORTED_POSTAL_TYPES,
  KEY_CONTACTS_BASE_SUPPORTED_ROLES,
] as const satisfies (keyof ContactsBase)[];

/**
 * action property
 *
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `action` property of DnsChange objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = dnschange[KEY_DNS_CHANGE_ACTION];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DNS_CHANGE_ACTION;
 * const value = dnschange[propertyName];
 * ```
 *
 * @see {@link DnsChange} - The TypeScript type definition
 * @see {@link KEYS_DNS_CHANGE} - Array of all keys for this type
 */
export const KEY_DNS_CHANGE_ACTION = 'action' as keyof DnsChange;
/**
 * Record Data
 *
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `record_data` property of DnsChange objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = dnschange[KEY_DNS_CHANGE_RECORD_DATA];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DNS_CHANGE_RECORD_DATA;
 * const value = dnschange[propertyName];
 * ```
 *
 * @see {@link DnsChange} - The TypeScript type definition
 * @see {@link KEYS_DNS_CHANGE} - Array of all keys for this type
 */
export const KEY_DNS_CHANGE_RECORD_DATA = 'record_data' as keyof DnsChange;
/**
 * Rrset Name
 *
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `rrset_name` property of DnsChange objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = dnschange[KEY_DNS_CHANGE_RRSET_NAME];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DNS_CHANGE_RRSET_NAME;
 * const value = dnschange[propertyName];
 * ```
 *
 * @see {@link DnsChange} - The TypeScript type definition
 * @see {@link KEYS_DNS_CHANGE} - Array of all keys for this type
 */
export const KEY_DNS_CHANGE_RRSET_NAME = 'rrset_name' as keyof DnsChange;
/**
 * rrset_type property
 *
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `rrset_type` property of DnsChange objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = dnschange[KEY_DNS_CHANGE_RRSET_TYPE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DNS_CHANGE_RRSET_TYPE;
 * const value = dnschange[propertyName];
 * ```
 *
 * @see {@link DnsChange} - The TypeScript type definition
 * @see {@link KEYS_DNS_CHANGE} - Array of all keys for this type
 */
export const KEY_DNS_CHANGE_RRSET_TYPE = 'rrset_type' as keyof DnsChange;
/**
 * Ttl
 *
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `ttl` property of DnsChange objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = dnschange[KEY_DNS_CHANGE_TTL];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DNS_CHANGE_TTL;
 * const value = dnschange[propertyName];
 * ```
 *
 * @see {@link DnsChange} - The TypeScript type definition
 * @see {@link KEYS_DNS_CHANGE} - Array of all keys for this type
 */
export const KEY_DNS_CHANGE_TTL = 'ttl' as keyof DnsChange;

/**
 * Array of all DnsChange property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for DnsChange objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all keys
 * for (const key of KEYS_DNS_CHANGE) {
 *   console.log(`Property: ${key}, Value: ${dnschange[key]}`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_DNS_CHANGE.includes(someKey);
 * ```
 *
 * @see {@link DnsChange} - The TypeScript type definition
 */
export const KEYS_DNS_CHANGE = [
  KEY_DNS_CHANGE_ACTION,
  KEY_DNS_CHANGE_RECORD_DATA,
  KEY_DNS_CHANGE_RRSET_NAME,
  KEY_DNS_CHANGE_RRSET_TYPE,
  KEY_DNS_CHANGE_TTL,
] as const satisfies (keyof DnsChange)[];

/**
 * Changes
 *
 *
 * @type {array}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `changes` property of DnsChanges objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = dnschanges[KEY_DNS_CHANGES_CHANGES];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DNS_CHANGES_CHANGES;
 * const value = dnschanges[propertyName];
 * ```
 *
 * @see {@link DnsChanges} - The TypeScript type definition
 * @see {@link KEYS_DNS_CHANGES} - Array of all keys for this type
 */
export const KEY_DNS_CHANGES_CHANGES = 'changes' as keyof DnsChanges;
/**
 * Changeset Id
 *
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `changeset_id` property of DnsChanges objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = dnschanges[KEY_DNS_CHANGES_CHANGESET_ID];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DNS_CHANGES_CHANGESET_ID;
 * const value = dnschanges[propertyName];
 * ```
 *
 * @see {@link DnsChanges} - The TypeScript type definition
 * @see {@link KEYS_DNS_CHANGES} - Array of all keys for this type
 */
export const KEY_DNS_CHANGES_CHANGESET_ID = 'changeset_id' as keyof DnsChanges;
/**
 * Num Changes
 *
 *
 * @type {integer}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `num_changes` property of DnsChanges objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = dnschanges[KEY_DNS_CHANGES_NUM_CHANGES];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DNS_CHANGES_NUM_CHANGES;
 * const value = dnschanges[propertyName];
 * ```
 *
 * @see {@link DnsChanges} - The TypeScript type definition
 * @see {@link KEYS_DNS_CHANGES} - Array of all keys for this type
 */
export const KEY_DNS_CHANGES_NUM_CHANGES = 'num_changes' as keyof DnsChanges;
/**
 * Zone Name
 *
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `zone_name` property of DnsChanges objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = dnschanges[KEY_DNS_CHANGES_ZONE_NAME];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DNS_CHANGES_ZONE_NAME;
 * const value = dnschanges[propertyName];
 * ```
 *
 * @see {@link DnsChanges} - The TypeScript type definition
 * @see {@link KEYS_DNS_CHANGES} - Array of all keys for this type
 */
export const KEY_DNS_CHANGES_ZONE_NAME = 'zone_name' as keyof DnsChanges;

/**
 * Array of all DnsChanges property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for DnsChanges objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all keys
 * for (const key of KEYS_DNS_CHANGES) {
 *   console.log(`Property: ${key}, Value: ${dnschanges[key]}`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_DNS_CHANGES.includes(someKey);
 * ```
 *
 * @see {@link DnsChanges} - The TypeScript type definition
 */
export const KEYS_DNS_CHANGES = [
  KEY_DNS_CHANGES_CHANGES,
  KEY_DNS_CHANGES_CHANGESET_ID,
  KEY_DNS_CHANGES_NUM_CHANGES,
  KEY_DNS_CHANGES_ZONE_NAME,
] as const satisfies (keyof DnsChanges)[];

/**
 * allowed_number_of_nameserver property
 *
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `allowed_number_of_nameserver` property of DnsConfigurationBase objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = dnsconfigurationbase[KEY_DNS_CONFIGURATION_BASE_ALLOWED_NUMBER_OF_NAMESERVER];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DNS_CONFIGURATION_BASE_ALLOWED_NUMBER_OF_NAMESERVER;
 * const value = dnsconfigurationbase[propertyName];
 * ```
 *
 * @see {@link DnsConfigurationBase} - The TypeScript type definition
 * @see {@link KEYS_DNS_CONFIGURATION_BASE} - Array of all keys for this type
 */
export const KEY_DNS_CONFIGURATION_BASE_ALLOWED_NUMBER_OF_NAMESERVER = 'allowed_number_of_nameserver' as keyof DnsConfigurationBase;
/**
 * Czds Available
 *
 * Whether the zone is available in CZDS
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `czds_available` property of DnsConfigurationBase objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = dnsconfigurationbase[KEY_DNS_CONFIGURATION_BASE_CZDS_AVAILABLE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DNS_CONFIGURATION_BASE_CZDS_AVAILABLE;
 * const value = dnsconfigurationbase[propertyName];
 * ```
 *
 * @see {@link DnsConfigurationBase} - The TypeScript type definition
 * @see {@link KEYS_DNS_CONFIGURATION_BASE} - Array of all keys for this type
 */
export const KEY_DNS_CONFIGURATION_BASE_CZDS_AVAILABLE = 'czds_available' as keyof DnsConfigurationBase;
/**
 * Dnssec Allowed
 *
 * Whether the registry supports DNSSEC
 *
 * @type {boolean}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `dnssec_allowed` property of DnsConfigurationBase objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = dnsconfigurationbase[KEY_DNS_CONFIGURATION_BASE_DNSSEC_ALLOWED];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DNS_CONFIGURATION_BASE_DNSSEC_ALLOWED;
 * const value = dnsconfigurationbase[propertyName];
 * ```
 *
 * @see {@link DnsConfigurationBase} - The TypeScript type definition
 * @see {@link KEYS_DNS_CONFIGURATION_BASE} - Array of all keys for this type
 */
export const KEY_DNS_CONFIGURATION_BASE_DNSSEC_ALLOWED = 'dnssec_allowed' as keyof DnsConfigurationBase;
/**
 * Dnssec Mandatory
 *
 * Whether DNSSEC is mandatory for a domain name
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `dnssec_mandatory` property of DnsConfigurationBase objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = dnsconfigurationbase[KEY_DNS_CONFIGURATION_BASE_DNSSEC_MANDATORY];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DNS_CONFIGURATION_BASE_DNSSEC_MANDATORY;
 * const value = dnsconfigurationbase[propertyName];
 * ```
 *
 * @see {@link DnsConfigurationBase} - The TypeScript type definition
 * @see {@link KEYS_DNS_CONFIGURATION_BASE} - Array of all keys for this type
 */
export const KEY_DNS_CONFIGURATION_BASE_DNSSEC_MANDATORY = 'dnssec_mandatory' as keyof DnsConfigurationBase;
/**
 * dnssec_mode property
 *
 * DNSSEC mode
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `dnssec_mode` property of DnsConfigurationBase objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = dnsconfigurationbase[KEY_DNS_CONFIGURATION_BASE_DNSSEC_MODE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DNS_CONFIGURATION_BASE_DNSSEC_MODE;
 * const value = dnsconfigurationbase[propertyName];
 * ```
 *
 * @see {@link DnsConfigurationBase} - The TypeScript type definition
 * @see {@link KEYS_DNS_CONFIGURATION_BASE} - Array of all keys for this type
 */
export const KEY_DNS_CONFIGURATION_BASE_DNSSEC_MODE = 'dnssec_mode' as keyof DnsConfigurationBase;
/**
 * Host Objects
 *
 * Whether the registry supports host objects or use attributes
 *
 * @type {boolean}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `host_objects` property of DnsConfigurationBase objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = dnsconfigurationbase[KEY_DNS_CONFIGURATION_BASE_HOST_OBJECTS];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DNS_CONFIGURATION_BASE_HOST_OBJECTS;
 * const value = dnsconfigurationbase[propertyName];
 * ```
 *
 * @see {@link DnsConfigurationBase} - The TypeScript type definition
 * @see {@link KEYS_DNS_CONFIGURATION_BASE} - Array of all keys for this type
 */
export const KEY_DNS_CONFIGURATION_BASE_HOST_OBJECTS = 'host_objects' as keyof DnsConfigurationBase;
/**
 * Host Parent Check Tlds
 *
 * TLDs that require parent-host checks (ns1.example.com => example.com)
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `host_parent_check_tlds` property of DnsConfigurationBase objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = dnsconfigurationbase[KEY_DNS_CONFIGURATION_BASE_HOST_PARENT_CHECK_TLDS];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DNS_CONFIGURATION_BASE_HOST_PARENT_CHECK_TLDS;
 * const value = dnsconfigurationbase[propertyName];
 * ```
 *
 * @see {@link DnsConfigurationBase} - The TypeScript type definition
 * @see {@link KEYS_DNS_CONFIGURATION_BASE} - Array of all keys for this type
 */
export const KEY_DNS_CONFIGURATION_BASE_HOST_PARENT_CHECK_TLDS = 'host_parent_check_tlds' as keyof DnsConfigurationBase;
/**
 * Registry Nameserver Check
 *
 * Whether the registry checks the nameserver configuration
 *
 * @type {boolean}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `registry_nameserver_check` property of DnsConfigurationBase objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = dnsconfigurationbase[KEY_DNS_CONFIGURATION_BASE_REGISTRY_NAMESERVER_CHECK];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DNS_CONFIGURATION_BASE_REGISTRY_NAMESERVER_CHECK;
 * const value = dnsconfigurationbase[propertyName];
 * ```
 *
 * @see {@link DnsConfigurationBase} - The TypeScript type definition
 * @see {@link KEYS_DNS_CONFIGURATION_BASE} - Array of all keys for this type
 */
export const KEY_DNS_CONFIGURATION_BASE_REGISTRY_NAMESERVER_CHECK = 'registry_nameserver_check' as keyof DnsConfigurationBase;
/**
 * Registry Root Nameserver Update
 *
 * Number of hours until the root zone is updated, 0 = real-time
 *
 * @type {integer}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `registry_root_nameserver_update` property of DnsConfigurationBase objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = dnsconfigurationbase[KEY_DNS_CONFIGURATION_BASE_REGISTRY_ROOT_NAMESERVER_UPDATE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DNS_CONFIGURATION_BASE_REGISTRY_ROOT_NAMESERVER_UPDATE;
 * const value = dnsconfigurationbase[propertyName];
 * ```
 *
 * @see {@link DnsConfigurationBase} - The TypeScript type definition
 * @see {@link KEYS_DNS_CONFIGURATION_BASE} - Array of all keys for this type
 */
export const KEY_DNS_CONFIGURATION_BASE_REGISTRY_ROOT_NAMESERVER_UPDATE = 'registry_root_nameserver_update' as keyof DnsConfigurationBase;

/**
 * Array of all DnsConfigurationBase property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for DnsConfigurationBase objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all keys
 * for (const key of KEYS_DNS_CONFIGURATION_BASE) {
 *   console.log(`Property: ${key}, Value: ${dnsconfigurationbase[key]}`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_DNS_CONFIGURATION_BASE.includes(someKey);
 * ```
 *
 * @see {@link DnsConfigurationBase} - The TypeScript type definition
 */
export const KEYS_DNS_CONFIGURATION_BASE = [
  KEY_DNS_CONFIGURATION_BASE_ALLOWED_NUMBER_OF_NAMESERVER,
  KEY_DNS_CONFIGURATION_BASE_CZDS_AVAILABLE,
  KEY_DNS_CONFIGURATION_BASE_DNSSEC_ALLOWED,
  KEY_DNS_CONFIGURATION_BASE_DNSSEC_MANDATORY,
  KEY_DNS_CONFIGURATION_BASE_DNSSEC_MODE,
  KEY_DNS_CONFIGURATION_BASE_HOST_OBJECTS,
  KEY_DNS_CONFIGURATION_BASE_HOST_PARENT_CHECK_TLDS,
  KEY_DNS_CONFIGURATION_BASE_REGISTRY_NAMESERVER_CHECK,
  KEY_DNS_CONFIGURATION_BASE_REGISTRY_ROOT_NAMESERVER_UPDATE,
] as const satisfies (keyof DnsConfigurationBase)[];

/**
 * Rdata
 *
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `rdata` property of DnsRecordCreate objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = dnsrecordcreate[KEY_DNS_RECORD_CREATE_RDATA];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DNS_RECORD_CREATE_RDATA;
 * const value = dnsrecordcreate[propertyName];
 * ```
 *
 * @see {@link DnsRecordCreate} - The TypeScript type definition
 * @see {@link KEYS_DNS_RECORD_CREATE} - Array of all keys for this type
 */
export const KEY_DNS_RECORD_CREATE_RDATA = 'rdata' as keyof DnsRecordCreate;

/**
 * Array of all DnsRecordCreate property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for DnsRecordCreate objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all keys
 * for (const key of KEYS_DNS_RECORD_CREATE) {
 *   console.log(`Property: ${key}, Value: ${dnsrecordcreate[key]}`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_DNS_RECORD_CREATE.includes(someKey);
 * ```
 *
 * @see {@link DnsRecordCreate} - The TypeScript type definition
 */
export const KEYS_DNS_RECORD_CREATE = [
  KEY_DNS_RECORD_CREATE_RDATA,
] as const satisfies (keyof DnsRecordCreate)[];

/**
 * op property
 *
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `op` property of DnsRecordPatchOp objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = dnsrecordpatchop[KEY_DNS_RECORD_PATCH_OP_OP];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DNS_RECORD_PATCH_OP_OP;
 * const value = dnsrecordpatchop[propertyName];
 * ```
 *
 * @see {@link DnsRecordPatchOp} - The TypeScript type definition
 * @see {@link KEYS_DNS_RECORD_PATCH_OP} - Array of all keys for this type
 */
export const KEY_DNS_RECORD_PATCH_OP_OP = 'op' as keyof DnsRecordPatchOp;
/**
 * record property
 *
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `record` property of DnsRecordPatchOp objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = dnsrecordpatchop[KEY_DNS_RECORD_PATCH_OP_RECORD];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DNS_RECORD_PATCH_OP_RECORD;
 * const value = dnsrecordpatchop[propertyName];
 * ```
 *
 * @see {@link DnsRecordPatchOp} - The TypeScript type definition
 * @see {@link KEYS_DNS_RECORD_PATCH_OP} - Array of all keys for this type
 */
export const KEY_DNS_RECORD_PATCH_OP_RECORD = 'record' as keyof DnsRecordPatchOp;

/**
 * Array of all DnsRecordPatchOp property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for DnsRecordPatchOp objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all keys
 * for (const key of KEYS_DNS_RECORD_PATCH_OP) {
 *   console.log(`Property: ${key}, Value: ${dnsrecordpatchop[key]}`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_DNS_RECORD_PATCH_OP.includes(someKey);
 * ```
 *
 * @see {@link DnsRecordPatchOp} - The TypeScript type definition
 */
export const KEYS_DNS_RECORD_PATCH_OP = [
  KEY_DNS_RECORD_PATCH_OP_OP,
  KEY_DNS_RECORD_PATCH_OP_RECORD,
] as const satisfies (keyof DnsRecordPatchOp)[];

/**
 * Rdata
 *
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `rdata` property of DnsRecord objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = dnsrecord[KEY_DNS_RECORD_RDATA];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DNS_RECORD_RDATA;
 * const value = dnsrecord[propertyName];
 * ```
 *
 * @see {@link DnsRecord} - The TypeScript type definition
 * @see {@link KEYS_DNS_RECORD} - Array of all keys for this type
 */
export const KEY_DNS_RECORD_RDATA = 'rdata' as keyof DnsRecord;

/**
 * Array of all DnsRecord property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for DnsRecord objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all keys
 * for (const key of KEYS_DNS_RECORD) {
 *   console.log(`Property: ${key}, Value: ${dnsrecord[key]}`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_DNS_RECORD.includes(someKey);
 * ```
 *
 * @see {@link DnsRecord} - The TypeScript type definition
 */
export const KEYS_DNS_RECORD = [
  KEY_DNS_RECORD_RDATA,
] as const satisfies (keyof DnsRecord)[];

/**
 * Name
 *
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `name` property of DnsRrsetCreate objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = dnsrrsetcreate[KEY_DNS_RRSET_CREATE_NAME];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DNS_RRSET_CREATE_NAME;
 * const value = dnsrrsetcreate[propertyName];
 * ```
 *
 * @see {@link DnsRrsetCreate} - The TypeScript type definition
 * @see {@link KEYS_DNS_RRSET_CREATE} - Array of all keys for this type
 */
export const KEY_DNS_RRSET_CREATE_NAME = 'name' as keyof DnsRrsetCreate;
/**
 * Records
 *
 *
 * @type {array}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `records` property of DnsRrsetCreate objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = dnsrrsetcreate[KEY_DNS_RRSET_CREATE_RECORDS];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DNS_RRSET_CREATE_RECORDS;
 * const value = dnsrrsetcreate[propertyName];
 * ```
 *
 * @see {@link DnsRrsetCreate} - The TypeScript type definition
 * @see {@link KEYS_DNS_RRSET_CREATE} - Array of all keys for this type
 */
export const KEY_DNS_RRSET_CREATE_RECORDS = 'records' as keyof DnsRrsetCreate;
/**
 * Ttl
 *
 *
 * @type {integer}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `ttl` property of DnsRrsetCreate objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = dnsrrsetcreate[KEY_DNS_RRSET_CREATE_TTL];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DNS_RRSET_CREATE_TTL;
 * const value = dnsrrsetcreate[propertyName];
 * ```
 *
 * @see {@link DnsRrsetCreate} - The TypeScript type definition
 * @see {@link KEYS_DNS_RRSET_CREATE} - Array of all keys for this type
 */
export const KEY_DNS_RRSET_CREATE_TTL = 'ttl' as keyof DnsRrsetCreate;
/**
 * type property
 *
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `type` property of DnsRrsetCreate objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = dnsrrsetcreate[KEY_DNS_RRSET_CREATE_TYPE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DNS_RRSET_CREATE_TYPE;
 * const value = dnsrrsetcreate[propertyName];
 * ```
 *
 * @see {@link DnsRrsetCreate} - The TypeScript type definition
 * @see {@link KEYS_DNS_RRSET_CREATE} - Array of all keys for this type
 */
export const KEY_DNS_RRSET_CREATE_TYPE = 'type' as keyof DnsRrsetCreate;

/**
 * Array of all DnsRrsetCreate property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for DnsRrsetCreate objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all keys
 * for (const key of KEYS_DNS_RRSET_CREATE) {
 *   console.log(`Property: ${key}, Value: ${dnsrrsetcreate[key]}`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_DNS_RRSET_CREATE.includes(someKey);
 * ```
 *
 * @see {@link DnsRrsetCreate} - The TypeScript type definition
 */
export const KEYS_DNS_RRSET_CREATE = [
  KEY_DNS_RRSET_CREATE_NAME,
  KEY_DNS_RRSET_CREATE_RECORDS,
  KEY_DNS_RRSET_CREATE_TTL,
  KEY_DNS_RRSET_CREATE_TYPE,
] as const satisfies (keyof DnsRrsetCreate)[];

/**
 * Name
 *
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `name` property of DnsRrsetPatch objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = dnsrrsetpatch[KEY_DNS_RRSET_PATCH_NAME];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DNS_RRSET_PATCH_NAME;
 * const value = dnsrrsetpatch[propertyName];
 * ```
 *
 * @see {@link DnsRrsetPatch} - The TypeScript type definition
 * @see {@link KEYS_DNS_RRSET_PATCH} - Array of all keys for this type
 */
export const KEY_DNS_RRSET_PATCH_NAME = 'name' as keyof DnsRrsetPatch;
/**
 * Records
 *
 *
 * @type {array}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `records` property of DnsRrsetPatch objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = dnsrrsetpatch[KEY_DNS_RRSET_PATCH_RECORDS];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DNS_RRSET_PATCH_RECORDS;
 * const value = dnsrrsetpatch[propertyName];
 * ```
 *
 * @see {@link DnsRrsetPatch} - The TypeScript type definition
 * @see {@link KEYS_DNS_RRSET_PATCH} - Array of all keys for this type
 */
export const KEY_DNS_RRSET_PATCH_RECORDS = 'records' as keyof DnsRrsetPatch;
/**
 * Ttl
 *
 *
 * @type {integer}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `ttl` property of DnsRrsetPatch objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = dnsrrsetpatch[KEY_DNS_RRSET_PATCH_TTL];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DNS_RRSET_PATCH_TTL;
 * const value = dnsrrsetpatch[propertyName];
 * ```
 *
 * @see {@link DnsRrsetPatch} - The TypeScript type definition
 * @see {@link KEYS_DNS_RRSET_PATCH} - Array of all keys for this type
 */
export const KEY_DNS_RRSET_PATCH_TTL = 'ttl' as keyof DnsRrsetPatch;
/**
 * type property
 *
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `type` property of DnsRrsetPatch objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = dnsrrsetpatch[KEY_DNS_RRSET_PATCH_TYPE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DNS_RRSET_PATCH_TYPE;
 * const value = dnsrrsetpatch[propertyName];
 * ```
 *
 * @see {@link DnsRrsetPatch} - The TypeScript type definition
 * @see {@link KEYS_DNS_RRSET_PATCH} - Array of all keys for this type
 */
export const KEY_DNS_RRSET_PATCH_TYPE = 'type' as keyof DnsRrsetPatch;

/**
 * Array of all DnsRrsetPatch property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for DnsRrsetPatch objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all keys
 * for (const key of KEYS_DNS_RRSET_PATCH) {
 *   console.log(`Property: ${key}, Value: ${dnsrrsetpatch[key]}`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_DNS_RRSET_PATCH.includes(someKey);
 * ```
 *
 * @see {@link DnsRrsetPatch} - The TypeScript type definition
 */
export const KEYS_DNS_RRSET_PATCH = [
  KEY_DNS_RRSET_PATCH_NAME,
  KEY_DNS_RRSET_PATCH_RECORDS,
  KEY_DNS_RRSET_PATCH_TTL,
  KEY_DNS_RRSET_PATCH_TYPE,
] as const satisfies (keyof DnsRrsetPatch)[];

/**
 * op property
 *
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `op` property of DnsRrsetPatchOp objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = dnsrrsetpatchop[KEY_DNS_RRSET_PATCH_OP_OP];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DNS_RRSET_PATCH_OP_OP;
 * const value = dnsrrsetpatchop[propertyName];
 * ```
 *
 * @see {@link DnsRrsetPatchOp} - The TypeScript type definition
 * @see {@link KEYS_DNS_RRSET_PATCH_OP} - Array of all keys for this type
 */
export const KEY_DNS_RRSET_PATCH_OP_OP = 'op' as keyof DnsRrsetPatchOp;
/**
 * rrset property
 *
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `rrset` property of DnsRrsetPatchOp objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = dnsrrsetpatchop[KEY_DNS_RRSET_PATCH_OP_RRSET];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DNS_RRSET_PATCH_OP_RRSET;
 * const value = dnsrrsetpatchop[propertyName];
 * ```
 *
 * @see {@link DnsRrsetPatchOp} - The TypeScript type definition
 * @see {@link KEYS_DNS_RRSET_PATCH_OP} - Array of all keys for this type
 */
export const KEY_DNS_RRSET_PATCH_OP_RRSET = 'rrset' as keyof DnsRrsetPatchOp;

/**
 * Array of all DnsRrsetPatchOp property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for DnsRrsetPatchOp objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all keys
 * for (const key of KEYS_DNS_RRSET_PATCH_OP) {
 *   console.log(`Property: ${key}, Value: ${dnsrrsetpatchop[key]}`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_DNS_RRSET_PATCH_OP.includes(someKey);
 * ```
 *
 * @see {@link DnsRrsetPatchOp} - The TypeScript type definition
 */
export const KEYS_DNS_RRSET_PATCH_OP = [
  KEY_DNS_RRSET_PATCH_OP_OP,
  KEY_DNS_RRSET_PATCH_OP_RRSET,
] as const satisfies (keyof DnsRrsetPatchOp)[];

/**
 * Name
 *
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `name` property of DnsRrset objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = dnsrrset[KEY_DNS_RRSET_NAME];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DNS_RRSET_NAME;
 * const value = dnsrrset[propertyName];
 * ```
 *
 * @see {@link DnsRrset} - The TypeScript type definition
 * @see {@link KEYS_DNS_RRSET} - Array of all keys for this type
 */
export const KEY_DNS_RRSET_NAME = 'name' as keyof DnsRrset;
/**
 * Records
 *
 *
 * @type {array}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `records` property of DnsRrset objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = dnsrrset[KEY_DNS_RRSET_RECORDS];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DNS_RRSET_RECORDS;
 * const value = dnsrrset[propertyName];
 * ```
 *
 * @see {@link DnsRrset} - The TypeScript type definition
 * @see {@link KEYS_DNS_RRSET} - Array of all keys for this type
 */
export const KEY_DNS_RRSET_RECORDS = 'records' as keyof DnsRrset;
/**
 * Ttl
 *
 *
 * @type {integer}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `ttl` property of DnsRrset objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = dnsrrset[KEY_DNS_RRSET_TTL];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DNS_RRSET_TTL;
 * const value = dnsrrset[propertyName];
 * ```
 *
 * @see {@link DnsRrset} - The TypeScript type definition
 * @see {@link KEYS_DNS_RRSET} - Array of all keys for this type
 */
export const KEY_DNS_RRSET_TTL = 'ttl' as keyof DnsRrset;
/**
 * type property
 *
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `type` property of DnsRrset objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = dnsrrset[KEY_DNS_RRSET_TYPE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DNS_RRSET_TYPE;
 * const value = dnsrrset[propertyName];
 * ```
 *
 * @see {@link DnsRrset} - The TypeScript type definition
 * @see {@link KEYS_DNS_RRSET} - Array of all keys for this type
 */
export const KEY_DNS_RRSET_TYPE = 'type' as keyof DnsRrset;

/**
 * Array of all DnsRrset property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for DnsRrset objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all keys
 * for (const key of KEYS_DNS_RRSET) {
 *   console.log(`Property: ${key}, Value: ${dnsrrset[key]}`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_DNS_RRSET.includes(someKey);
 * ```
 *
 * @see {@link DnsRrset} - The TypeScript type definition
 */
export const KEYS_DNS_RRSET = [
  KEY_DNS_RRSET_NAME,
  KEY_DNS_RRSET_RECORDS,
  KEY_DNS_RRSET_TTL,
  KEY_DNS_RRSET_TYPE,
] as const satisfies (keyof DnsRrset)[];

/**
 * Name
 *
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `name` property of DnsRrsetWithOneRecordPatch objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = dnsrrsetwithonerecordpatch[KEY_DNS_RRSET_WITH_ONE_RECORD_PATCH_NAME];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DNS_RRSET_WITH_ONE_RECORD_PATCH_NAME;
 * const value = dnsrrsetwithonerecordpatch[propertyName];
 * ```
 *
 * @see {@link DnsRrsetWithOneRecordPatch} - The TypeScript type definition
 * @see {@link KEYS_DNS_RRSET_WITH_ONE_RECORD_PATCH} - Array of all keys for this type
 */
export const KEY_DNS_RRSET_WITH_ONE_RECORD_PATCH_NAME = 'name' as keyof DnsRrsetWithOneRecordPatch;
/**
 * Rdata
 *
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `rdata` property of DnsRrsetWithOneRecordPatch objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = dnsrrsetwithonerecordpatch[KEY_DNS_RRSET_WITH_ONE_RECORD_PATCH_RDATA];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DNS_RRSET_WITH_ONE_RECORD_PATCH_RDATA;
 * const value = dnsrrsetwithonerecordpatch[propertyName];
 * ```
 *
 * @see {@link DnsRrsetWithOneRecordPatch} - The TypeScript type definition
 * @see {@link KEYS_DNS_RRSET_WITH_ONE_RECORD_PATCH} - Array of all keys for this type
 */
export const KEY_DNS_RRSET_WITH_ONE_RECORD_PATCH_RDATA = 'rdata' as keyof DnsRrsetWithOneRecordPatch;
/**
 * Ttl
 *
 *
 * @type {integer}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `ttl` property of DnsRrsetWithOneRecordPatch objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = dnsrrsetwithonerecordpatch[KEY_DNS_RRSET_WITH_ONE_RECORD_PATCH_TTL];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DNS_RRSET_WITH_ONE_RECORD_PATCH_TTL;
 * const value = dnsrrsetwithonerecordpatch[propertyName];
 * ```
 *
 * @see {@link DnsRrsetWithOneRecordPatch} - The TypeScript type definition
 * @see {@link KEYS_DNS_RRSET_WITH_ONE_RECORD_PATCH} - Array of all keys for this type
 */
export const KEY_DNS_RRSET_WITH_ONE_RECORD_PATCH_TTL = 'ttl' as keyof DnsRrsetWithOneRecordPatch;
/**
 * type property
 *
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `type` property of DnsRrsetWithOneRecordPatch objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = dnsrrsetwithonerecordpatch[KEY_DNS_RRSET_WITH_ONE_RECORD_PATCH_TYPE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DNS_RRSET_WITH_ONE_RECORD_PATCH_TYPE;
 * const value = dnsrrsetwithonerecordpatch[propertyName];
 * ```
 *
 * @see {@link DnsRrsetWithOneRecordPatch} - The TypeScript type definition
 * @see {@link KEYS_DNS_RRSET_WITH_ONE_RECORD_PATCH} - Array of all keys for this type
 */
export const KEY_DNS_RRSET_WITH_ONE_RECORD_PATCH_TYPE = 'type' as keyof DnsRrsetWithOneRecordPatch;

/**
 * Array of all DnsRrsetWithOneRecordPatch property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for DnsRrsetWithOneRecordPatch objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all keys
 * for (const key of KEYS_DNS_RRSET_WITH_ONE_RECORD_PATCH) {
 *   console.log(`Property: ${key}, Value: ${dnsrrsetwithonerecordpatch[key]}`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_DNS_RRSET_WITH_ONE_RECORD_PATCH.includes(someKey);
 * ```
 *
 * @see {@link DnsRrsetWithOneRecordPatch} - The TypeScript type definition
 */
export const KEYS_DNS_RRSET_WITH_ONE_RECORD_PATCH = [
  KEY_DNS_RRSET_WITH_ONE_RECORD_PATCH_NAME,
  KEY_DNS_RRSET_WITH_ONE_RECORD_PATCH_RDATA,
  KEY_DNS_RRSET_WITH_ONE_RECORD_PATCH_TTL,
  KEY_DNS_RRSET_WITH_ONE_RECORD_PATCH_TYPE,
] as const satisfies (keyof DnsRrsetWithOneRecordPatch)[];

/**
 * dnssec_status property
 *
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `dnssec_status` property of DnsZoneCreate objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = dnszonecreate[KEY_DNS_ZONE_CREATE_DNSSEC_STATUS];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DNS_ZONE_CREATE_DNSSEC_STATUS;
 * const value = dnszonecreate[propertyName];
 * ```
 *
 * @see {@link DnsZoneCreate} - The TypeScript type definition
 * @see {@link KEYS_DNS_ZONE_CREATE} - Array of all keys for this type
 */
export const KEY_DNS_ZONE_CREATE_DNSSEC_STATUS = 'dnssec_status' as keyof DnsZoneCreate;
/**
 * Name
 *
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `name` property of DnsZoneCreate objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = dnszonecreate[KEY_DNS_ZONE_CREATE_NAME];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DNS_ZONE_CREATE_NAME;
 * const value = dnszonecreate[propertyName];
 * ```
 *
 * @see {@link DnsZoneCreate} - The TypeScript type definition
 * @see {@link KEYS_DNS_ZONE_CREATE} - Array of all keys for this type
 */
export const KEY_DNS_ZONE_CREATE_NAME = 'name' as keyof DnsZoneCreate;
/**
 * Rrsets
 *
 *
 * @type {array}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `rrsets` property of DnsZoneCreate objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = dnszonecreate[KEY_DNS_ZONE_CREATE_RRSETS];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DNS_ZONE_CREATE_RRSETS;
 * const value = dnszonecreate[propertyName];
 * ```
 *
 * @see {@link DnsZoneCreate} - The TypeScript type definition
 * @see {@link KEYS_DNS_ZONE_CREATE} - Array of all keys for this type
 */
export const KEY_DNS_ZONE_CREATE_RRSETS = 'rrsets' as keyof DnsZoneCreate;

/**
 * Array of all DnsZoneCreate property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for DnsZoneCreate objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all keys
 * for (const key of KEYS_DNS_ZONE_CREATE) {
 *   console.log(`Property: ${key}, Value: ${dnszonecreate[key]}`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_DNS_ZONE_CREATE.includes(someKey);
 * ```
 *
 * @see {@link DnsZoneCreate} - The TypeScript type definition
 */
export const KEYS_DNS_ZONE_CREATE = [
  KEY_DNS_ZONE_CREATE_DNSSEC_STATUS,
  KEY_DNS_ZONE_CREATE_NAME,
  KEY_DNS_ZONE_CREATE_RRSETS,
] as const satisfies (keyof DnsZoneCreate)[];

/**
 * Ops
 *
 *
 * @type {array}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `ops` property of DnsZoneRecordsPatchOps objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = dnszonerecordspatchops[KEY_DNS_ZONE_RECORDS_PATCH_OPS_OPS];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DNS_ZONE_RECORDS_PATCH_OPS_OPS;
 * const value = dnszonerecordspatchops[propertyName];
 * ```
 *
 * @see {@link DnsZoneRecordsPatchOps} - The TypeScript type definition
 * @see {@link KEYS_DNS_ZONE_RECORDS_PATCH_OPS} - Array of all keys for this type
 */
export const KEY_DNS_ZONE_RECORDS_PATCH_OPS_OPS = 'ops' as keyof DnsZoneRecordsPatchOps;

/**
 * Array of all DnsZoneRecordsPatchOps property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for DnsZoneRecordsPatchOps objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all keys
 * for (const key of KEYS_DNS_ZONE_RECORDS_PATCH_OPS) {
 *   console.log(`Property: ${key}, Value: ${dnszonerecordspatchops[key]}`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_DNS_ZONE_RECORDS_PATCH_OPS.includes(someKey);
 * ```
 *
 * @see {@link DnsZoneRecordsPatchOps} - The TypeScript type definition
 */
export const KEYS_DNS_ZONE_RECORDS_PATCH_OPS = [
  KEY_DNS_ZONE_RECORDS_PATCH_OPS_OPS,
] as const satisfies (keyof DnsZoneRecordsPatchOps)[];

/**
 * dnssec_status property
 *
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `dnssec_status` property of DnsZone objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = dnszone[KEY_DNS_ZONE_DNSSEC_STATUS];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DNS_ZONE_DNSSEC_STATUS;
 * const value = dnszone[propertyName];
 * ```
 *
 * @see {@link DnsZone} - The TypeScript type definition
 * @see {@link KEYS_DNS_ZONE} - Array of all keys for this type
 */
export const KEY_DNS_ZONE_DNSSEC_STATUS = 'dnssec_status' as keyof DnsZone;
/**
 * domain_parts property
 *
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `domain_parts` property of DnsZone objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = dnszone[KEY_DNS_ZONE_DOMAIN_PARTS];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DNS_ZONE_DOMAIN_PARTS;
 * const value = dnszone[propertyName];
 * ```
 *
 * @see {@link DnsZone} - The TypeScript type definition
 * @see {@link KEYS_DNS_ZONE} - Array of all keys for this type
 */
export const KEY_DNS_ZONE_DOMAIN_PARTS = 'domain_parts' as keyof DnsZone;
/**
 * Name
 *
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `name` property of DnsZone objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = dnszone[KEY_DNS_ZONE_NAME];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DNS_ZONE_NAME;
 * const value = dnszone[propertyName];
 * ```
 *
 * @see {@link DnsZone} - The TypeScript type definition
 * @see {@link KEYS_DNS_ZONE} - Array of all keys for this type
 */
export const KEY_DNS_ZONE_NAME = 'name' as keyof DnsZone;
/**
 * Rrsets
 *
 *
 * @type {array}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `rrsets` property of DnsZone objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = dnszone[KEY_DNS_ZONE_RRSETS];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DNS_ZONE_RRSETS;
 * const value = dnszone[propertyName];
 * ```
 *
 * @see {@link DnsZone} - The TypeScript type definition
 * @see {@link KEYS_DNS_ZONE} - Array of all keys for this type
 */
export const KEY_DNS_ZONE_RRSETS = 'rrsets' as keyof DnsZone;

/**
 * Array of all DnsZone property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for DnsZone objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all keys
 * for (const key of KEYS_DNS_ZONE) {
 *   console.log(`Property: ${key}, Value: ${dnszone[key]}`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_DNS_ZONE.includes(someKey);
 * ```
 *
 * @see {@link DnsZone} - The TypeScript type definition
 */
export const KEYS_DNS_ZONE = [
  KEY_DNS_ZONE_DNSSEC_STATUS,
  KEY_DNS_ZONE_DOMAIN_PARTS,
  KEY_DNS_ZONE_NAME,
  KEY_DNS_ZONE_RRSETS,
] as const satisfies (keyof DnsZone)[];

/**
 * Rrsets
 *
 *
 * @type {array}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `rrsets` property of DnsZoneRrsetsCreate objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = dnszonerrsetscreate[KEY_DNS_ZONE_RRSETS_CREATE_RRSETS];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DNS_ZONE_RRSETS_CREATE_RRSETS;
 * const value = dnszonerrsetscreate[propertyName];
 * ```
 *
 * @see {@link DnsZoneRrsetsCreate} - The TypeScript type definition
 * @see {@link KEYS_DNS_ZONE_RRSETS_CREATE} - Array of all keys for this type
 */
export const KEY_DNS_ZONE_RRSETS_CREATE_RRSETS = 'rrsets' as keyof DnsZoneRrsetsCreate;

/**
 * Array of all DnsZoneRrsetsCreate property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for DnsZoneRrsetsCreate objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all keys
 * for (const key of KEYS_DNS_ZONE_RRSETS_CREATE) {
 *   console.log(`Property: ${key}, Value: ${dnszonerrsetscreate[key]}`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_DNS_ZONE_RRSETS_CREATE.includes(someKey);
 * ```
 *
 * @see {@link DnsZoneRrsetsCreate} - The TypeScript type definition
 */
export const KEYS_DNS_ZONE_RRSETS_CREATE = [
  KEY_DNS_ZONE_RRSETS_CREATE_RRSETS,
] as const satisfies (keyof DnsZoneRrsetsCreate)[];

/**
 * Ops
 *
 *
 * @type {array}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `ops` property of DnsZoneRrsetsPatchOps objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = dnszonerrsetspatchops[KEY_DNS_ZONE_RRSETS_PATCH_OPS_OPS];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DNS_ZONE_RRSETS_PATCH_OPS_OPS;
 * const value = dnszonerrsetspatchops[propertyName];
 * ```
 *
 * @see {@link DnsZoneRrsetsPatchOps} - The TypeScript type definition
 * @see {@link KEYS_DNS_ZONE_RRSETS_PATCH_OPS} - Array of all keys for this type
 */
export const KEY_DNS_ZONE_RRSETS_PATCH_OPS_OPS = 'ops' as keyof DnsZoneRrsetsPatchOps;

/**
 * Array of all DnsZoneRrsetsPatchOps property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for DnsZoneRrsetsPatchOps objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all keys
 * for (const key of KEYS_DNS_ZONE_RRSETS_PATCH_OPS) {
 *   console.log(`Property: ${key}, Value: ${dnszonerrsetspatchops[key]}`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_DNS_ZONE_RRSETS_PATCH_OPS.includes(someKey);
 * ```
 *
 * @see {@link DnsZoneRrsetsPatchOps} - The TypeScript type definition
 */
export const KEYS_DNS_ZONE_RRSETS_PATCH_OPS = [
  KEY_DNS_ZONE_RRSETS_PATCH_OPS_OPS,
] as const satisfies (keyof DnsZoneRrsetsPatchOps)[];

/**
 * Total Zones
 *
 * Total number of DNS zones
 *
 * @type {integer}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `total_zones` property of DnsZoneSummary objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = dnszonesummary[KEY_DNS_ZONE_SUMMARY_TOTAL_ZONES];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DNS_ZONE_SUMMARY_TOTAL_ZONES;
 * const value = dnszonesummary[propertyName];
 * ```
 *
 * @see {@link DnsZoneSummary} - The TypeScript type definition
 * @see {@link KEYS_DNS_ZONE_SUMMARY} - Array of all keys for this type
 */
export const KEY_DNS_ZONE_SUMMARY_TOTAL_ZONES = 'total_zones' as keyof DnsZoneSummary;
/**
 * Zones By Dnssec
 *
 * Count of zones by DNSSEC status
 *
 * @type {object}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `zones_by_dnssec` property of DnsZoneSummary objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = dnszonesummary[KEY_DNS_ZONE_SUMMARY_ZONES_BY_DNSSEC];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DNS_ZONE_SUMMARY_ZONES_BY_DNSSEC;
 * const value = dnszonesummary[propertyName];
 * ```
 *
 * @see {@link DnsZoneSummary} - The TypeScript type definition
 * @see {@link KEYS_DNS_ZONE_SUMMARY} - Array of all keys for this type
 */
export const KEY_DNS_ZONE_SUMMARY_ZONES_BY_DNSSEC = 'zones_by_dnssec' as keyof DnsZoneSummary;

/**
 * Array of all DnsZoneSummary property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for DnsZoneSummary objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all keys
 * for (const key of KEYS_DNS_ZONE_SUMMARY) {
 *   console.log(`Property: ${key}, Value: ${dnszonesummary[key]}`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_DNS_ZONE_SUMMARY.includes(someKey);
 * ```
 *
 * @see {@link DnsZoneSummary} - The TypeScript type definition
 */
export const KEYS_DNS_ZONE_SUMMARY = [
  KEY_DNS_ZONE_SUMMARY_TOTAL_ZONES,
  KEY_DNS_ZONE_SUMMARY_ZONES_BY_DNSSEC,
] as const satisfies (keyof DnsZoneSummary)[];

/**
 * Domain
 *
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `domain` property of DomainAvailability objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = domainavailability[KEY_DOMAIN_AVAILABILITY_DOMAIN];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DOMAIN_AVAILABILITY_DOMAIN;
 * const value = domainavailability[propertyName];
 * ```
 *
 * @see {@link DomainAvailability} - The TypeScript type definition
 * @see {@link KEYS_DOMAIN_AVAILABILITY} - Array of all keys for this type
 */
export const KEY_DOMAIN_AVAILABILITY_DOMAIN = 'domain' as keyof DomainAvailability;
/**
 * status property
 *
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `status` property of DomainAvailability objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = domainavailability[KEY_DOMAIN_AVAILABILITY_STATUS];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DOMAIN_AVAILABILITY_STATUS;
 * const value = domainavailability[propertyName];
 * ```
 *
 * @see {@link DomainAvailability} - The TypeScript type definition
 * @see {@link KEYS_DOMAIN_AVAILABILITY} - Array of all keys for this type
 */
export const KEY_DOMAIN_AVAILABILITY_STATUS = 'status' as keyof DomainAvailability;

/**
 * Array of all DomainAvailability property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for DomainAvailability objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all keys
 * for (const key of KEYS_DOMAIN_AVAILABILITY) {
 *   console.log(`Property: ${key}, Value: ${domainavailability[key]}`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_DOMAIN_AVAILABILITY.includes(someKey);
 * ```
 *
 * @see {@link DomainAvailability} - The TypeScript type definition
 */
export const KEYS_DOMAIN_AVAILABILITY = [
  KEY_DOMAIN_AVAILABILITY_DOMAIN,
  KEY_DOMAIN_AVAILABILITY_STATUS,
] as const satisfies (keyof DomainAvailability)[];

/**
 * Processing Time Ms
 *
 *
 * @type {integer}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `processing_time_ms` property of DomainAvailabilityMeta objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = domainavailabilitymeta[KEY_DOMAIN_AVAILABILITY_META_PROCESSING_TIME_MS];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DOMAIN_AVAILABILITY_META_PROCESSING_TIME_MS;
 * const value = domainavailabilitymeta[propertyName];
 * ```
 *
 * @see {@link DomainAvailabilityMeta} - The TypeScript type definition
 * @see {@link KEYS_DOMAIN_AVAILABILITY_META} - Array of all keys for this type
 */
export const KEY_DOMAIN_AVAILABILITY_META_PROCESSING_TIME_MS = 'processing_time_ms' as keyof DomainAvailabilityMeta;
/**
 * Total
 *
 *
 * @type {integer}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `total` property of DomainAvailabilityMeta objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = domainavailabilitymeta[KEY_DOMAIN_AVAILABILITY_META_TOTAL];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DOMAIN_AVAILABILITY_META_TOTAL;
 * const value = domainavailabilitymeta[propertyName];
 * ```
 *
 * @see {@link DomainAvailabilityMeta} - The TypeScript type definition
 * @see {@link KEYS_DOMAIN_AVAILABILITY_META} - Array of all keys for this type
 */
export const KEY_DOMAIN_AVAILABILITY_META_TOTAL = 'total' as keyof DomainAvailabilityMeta;

/**
 * Array of all DomainAvailabilityMeta property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for DomainAvailabilityMeta objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all keys
 * for (const key of KEYS_DOMAIN_AVAILABILITY_META) {
 *   console.log(`Property: ${key}, Value: ${domainavailabilitymeta[key]}`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_DOMAIN_AVAILABILITY_META.includes(someKey);
 * ```
 *
 * @see {@link DomainAvailabilityMeta} - The TypeScript type definition
 */
export const KEYS_DOMAIN_AVAILABILITY_META = [
  KEY_DOMAIN_AVAILABILITY_META_PROCESSING_TIME_MS,
  KEY_DOMAIN_AVAILABILITY_META_TOTAL,
] as const satisfies (keyof DomainAvailabilityMeta)[];

/**
 * Results
 *
 *
 * @type {array}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `results` property of DomainCheck objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = domaincheck[KEY_DOMAIN_CHECK_RESULTS];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DOMAIN_CHECK_RESULTS;
 * const value = domaincheck[propertyName];
 * ```
 *
 * @see {@link DomainCheck} - The TypeScript type definition
 * @see {@link KEYS_DOMAIN_CHECK} - Array of all keys for this type
 */
export const KEY_DOMAIN_CHECK_RESULTS = 'results' as keyof DomainCheck;

/**
 * Array of all DomainCheck property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for DomainCheck objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all keys
 * for (const key of KEYS_DOMAIN_CHECK) {
 *   console.log(`Property: ${key}, Value: ${domaincheck[key]}`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_DOMAIN_CHECK.includes(someKey);
 * ```
 *
 * @see {@link DomainCheck} - The TypeScript type definition
 */
export const KEYS_DOMAIN_CHECK = [
  KEY_DOMAIN_CHECK_RESULTS,
] as const satisfies (keyof DomainCheck)[];

/**
 * Contact Id
 *
 * The contact id of the contact
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `contact_id` property of DomainContact objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = domaincontact[KEY_DOMAIN_CONTACT_CONTACT_ID];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DOMAIN_CONTACT_CONTACT_ID;
 * const value = domaincontact[propertyName];
 * ```
 *
 * @see {@link DomainContact} - The TypeScript type definition
 * @see {@link KEYS_DOMAIN_CONTACT} - Array of all keys for this type
 */
export const KEY_DOMAIN_CONTACT_CONTACT_ID = 'contact_id' as keyof DomainContact;
/**
 * contact_type property
 *
 * The type of contact
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `contact_type` property of DomainContact objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = domaincontact[KEY_DOMAIN_CONTACT_CONTACT_TYPE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DOMAIN_CONTACT_CONTACT_TYPE;
 * const value = domaincontact[propertyName];
 * ```
 *
 * @see {@link DomainContact} - The TypeScript type definition
 * @see {@link KEYS_DOMAIN_CONTACT} - Array of all keys for this type
 */
export const KEY_DOMAIN_CONTACT_CONTACT_TYPE = 'contact_type' as keyof DomainContact;

/**
 * Array of all DomainContact property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for DomainContact objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all keys
 * for (const key of KEYS_DOMAIN_CONTACT) {
 *   console.log(`Property: ${key}, Value: ${domaincontact[key]}`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_DOMAIN_CONTACT.includes(someKey);
 * ```
 *
 * @see {@link DomainContact} - The TypeScript type definition
 */
export const KEYS_DOMAIN_CONTACT = [
  KEY_DOMAIN_CONTACT_CONTACT_ID,
  KEY_DOMAIN_CONTACT_CONTACT_TYPE,
] as const satisfies (keyof DomainContact)[];

/**
 * Auth Code
 *
 * The auth code used for the domain
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `auth_code` property of DomainCreate objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = domaincreate[KEY_DOMAIN_CREATE_AUTH_CODE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DOMAIN_CREATE_AUTH_CODE;
 * const value = domaincreate[propertyName];
 * ```
 *
 * @see {@link DomainCreate} - The TypeScript type definition
 * @see {@link KEYS_DOMAIN_CREATE} - Array of all keys for this type
 */
export const KEY_DOMAIN_CREATE_AUTH_CODE = 'auth_code' as keyof DomainCreate;
/**
 * contacts property
 *
 * The contacts of the domain
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `contacts` property of DomainCreate objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = domaincreate[KEY_DOMAIN_CREATE_CONTACTS];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DOMAIN_CREATE_CONTACTS;
 * const value = domaincreate[propertyName];
 * ```
 *
 * @see {@link DomainCreate} - The TypeScript type definition
 * @see {@link KEYS_DOMAIN_CREATE} - Array of all keys for this type
 */
export const KEY_DOMAIN_CREATE_CONTACTS = 'contacts' as keyof DomainCreate;
/**
 * Name
 *
 * The domain to be created
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `name` property of DomainCreate objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = domaincreate[KEY_DOMAIN_CREATE_NAME];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DOMAIN_CREATE_NAME;
 * const value = domaincreate[propertyName];
 * ```
 *
 * @see {@link DomainCreate} - The TypeScript type definition
 * @see {@link KEYS_DOMAIN_CREATE} - Array of all keys for this type
 */
export const KEY_DOMAIN_CREATE_NAME = 'name' as keyof DomainCreate;
/**
 * Nameservers
 *
 * The name servers for the domain
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `nameservers` property of DomainCreate objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = domaincreate[KEY_DOMAIN_CREATE_NAMESERVERS];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DOMAIN_CREATE_NAMESERVERS;
 * const value = domaincreate[propertyName];
 * ```
 *
 * @see {@link DomainCreate} - The TypeScript type definition
 * @see {@link KEYS_DOMAIN_CREATE} - Array of all keys for this type
 */
export const KEY_DOMAIN_CREATE_NAMESERVERS = 'nameservers' as keyof DomainCreate;
/**
 * period property
 *
 * How long the domain should be registered for
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `period` property of DomainCreate objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = domaincreate[KEY_DOMAIN_CREATE_PERIOD];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DOMAIN_CREATE_PERIOD;
 * const value = domaincreate[propertyName];
 * ```
 *
 * @see {@link DomainCreate} - The TypeScript type definition
 * @see {@link KEYS_DOMAIN_CREATE} - Array of all keys for this type
 */
export const KEY_DOMAIN_CREATE_PERIOD = 'period' as keyof DomainCreate;
/**
 * renewal_mode property
 *
 * The renewal mode of the domain
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `renewal_mode` property of DomainCreate objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = domaincreate[KEY_DOMAIN_CREATE_RENEWAL_MODE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DOMAIN_CREATE_RENEWAL_MODE;
 * const value = domaincreate[propertyName];
 * ```
 *
 * @see {@link DomainCreate} - The TypeScript type definition
 * @see {@link KEYS_DOMAIN_CREATE} - Array of all keys for this type
 */
export const KEY_DOMAIN_CREATE_RENEWAL_MODE = 'renewal_mode' as keyof DomainCreate;

/**
 * Array of all DomainCreate property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for DomainCreate objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all keys
 * for (const key of KEYS_DOMAIN_CREATE) {
 *   console.log(`Property: ${key}, Value: ${domaincreate[key]}`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_DOMAIN_CREATE.includes(someKey);
 * ```
 *
 * @see {@link DomainCreate} - The TypeScript type definition
 */
export const KEYS_DOMAIN_CREATE = [
  KEY_DOMAIN_CREATE_AUTH_CODE,
  KEY_DOMAIN_CREATE_CONTACTS,
  KEY_DOMAIN_CREATE_NAME,
  KEY_DOMAIN_CREATE_NAMESERVERS,
  KEY_DOMAIN_CREATE_PERIOD,
  KEY_DOMAIN_CREATE_RENEWAL_MODE,
] as const satisfies (keyof DomainCreate)[];

/**
 * algorithm property
 *
 * DNSSEC algorithm used
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `algorithm` property of DomainDnssecDataCreate objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = domaindnssecdatacreate[KEY_DOMAIN_DNSSEC_DATA_CREATE_ALGORITHM];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DOMAIN_DNSSEC_DATA_CREATE_ALGORITHM;
 * const value = domaindnssecdatacreate[propertyName];
 * ```
 *
 * @see {@link DomainDnssecDataCreate} - The TypeScript type definition
 * @see {@link KEYS_DOMAIN_DNSSEC_DATA_CREATE} - Array of all keys for this type
 */
export const KEY_DOMAIN_DNSSEC_DATA_CREATE_ALGORITHM = 'algorithm' as keyof DomainDnssecDataCreate;
/**
 * Digest
 *
 * Digest value for DS records
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `digest` property of DomainDnssecDataCreate objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = domaindnssecdatacreate[KEY_DOMAIN_DNSSEC_DATA_CREATE_DIGEST];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DOMAIN_DNSSEC_DATA_CREATE_DIGEST;
 * const value = domaindnssecdatacreate[propertyName];
 * ```
 *
 * @see {@link DomainDnssecDataCreate} - The TypeScript type definition
 * @see {@link KEYS_DOMAIN_DNSSEC_DATA_CREATE} - Array of all keys for this type
 */
export const KEY_DOMAIN_DNSSEC_DATA_CREATE_DIGEST = 'digest' as keyof DomainDnssecDataCreate;
/**
 * digest_type property
 *
 * Digest type for DS records
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `digest_type` property of DomainDnssecDataCreate objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = domaindnssecdatacreate[KEY_DOMAIN_DNSSEC_DATA_CREATE_DIGEST_TYPE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DOMAIN_DNSSEC_DATA_CREATE_DIGEST_TYPE;
 * const value = domaindnssecdatacreate[propertyName];
 * ```
 *
 * @see {@link DomainDnssecDataCreate} - The TypeScript type definition
 * @see {@link KEYS_DOMAIN_DNSSEC_DATA_CREATE} - Array of all keys for this type
 */
export const KEY_DOMAIN_DNSSEC_DATA_CREATE_DIGEST_TYPE = 'digest_type' as keyof DomainDnssecDataCreate;
/**
 * Flags
 *
 * DNSKEY flags for key records
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `flags` property of DomainDnssecDataCreate objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = domaindnssecdatacreate[KEY_DOMAIN_DNSSEC_DATA_CREATE_FLAGS];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DOMAIN_DNSSEC_DATA_CREATE_FLAGS;
 * const value = domaindnssecdatacreate[propertyName];
 * ```
 *
 * @see {@link DomainDnssecDataCreate} - The TypeScript type definition
 * @see {@link KEYS_DOMAIN_DNSSEC_DATA_CREATE} - Array of all keys for this type
 */
export const KEY_DOMAIN_DNSSEC_DATA_CREATE_FLAGS = 'flags' as keyof DomainDnssecDataCreate;
/**
 * Key Tag
 *
 * Key tag for DS records
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `key_tag` property of DomainDnssecDataCreate objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = domaindnssecdatacreate[KEY_DOMAIN_DNSSEC_DATA_CREATE_KEY_TAG];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DOMAIN_DNSSEC_DATA_CREATE_KEY_TAG;
 * const value = domaindnssecdatacreate[propertyName];
 * ```
 *
 * @see {@link DomainDnssecDataCreate} - The TypeScript type definition
 * @see {@link KEYS_DOMAIN_DNSSEC_DATA_CREATE} - Array of all keys for this type
 */
export const KEY_DOMAIN_DNSSEC_DATA_CREATE_KEY_TAG = 'key_tag' as keyof DomainDnssecDataCreate;
/**
 * Protocol
 *
 * Protocol field for key records (typically 3)
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `protocol` property of DomainDnssecDataCreate objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = domaindnssecdatacreate[KEY_DOMAIN_DNSSEC_DATA_CREATE_PROTOCOL];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DOMAIN_DNSSEC_DATA_CREATE_PROTOCOL;
 * const value = domaindnssecdatacreate[propertyName];
 * ```
 *
 * @see {@link DomainDnssecDataCreate} - The TypeScript type definition
 * @see {@link KEYS_DOMAIN_DNSSEC_DATA_CREATE} - Array of all keys for this type
 */
export const KEY_DOMAIN_DNSSEC_DATA_CREATE_PROTOCOL = 'protocol' as keyof DomainDnssecDataCreate;
/**
 * Public Key
 *
 * Base64-encoded public key for key records
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `public_key` property of DomainDnssecDataCreate objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = domaindnssecdatacreate[KEY_DOMAIN_DNSSEC_DATA_CREATE_PUBLIC_KEY];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DOMAIN_DNSSEC_DATA_CREATE_PUBLIC_KEY;
 * const value = domaindnssecdatacreate[propertyName];
 * ```
 *
 * @see {@link DomainDnssecDataCreate} - The TypeScript type definition
 * @see {@link KEYS_DOMAIN_DNSSEC_DATA_CREATE} - Array of all keys for this type
 */
export const KEY_DOMAIN_DNSSEC_DATA_CREATE_PUBLIC_KEY = 'public_key' as keyof DomainDnssecDataCreate;
/**
 * record_type property
 *
 * Type of DNSSEC record (DS or Key)
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `record_type` property of DomainDnssecDataCreate objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = domaindnssecdatacreate[KEY_DOMAIN_DNSSEC_DATA_CREATE_RECORD_TYPE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DOMAIN_DNSSEC_DATA_CREATE_RECORD_TYPE;
 * const value = domaindnssecdatacreate[propertyName];
 * ```
 *
 * @see {@link DomainDnssecDataCreate} - The TypeScript type definition
 * @see {@link KEYS_DOMAIN_DNSSEC_DATA_CREATE} - Array of all keys for this type
 */
export const KEY_DOMAIN_DNSSEC_DATA_CREATE_RECORD_TYPE = 'record_type' as keyof DomainDnssecDataCreate;

/**
 * Array of all DomainDnssecDataCreate property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for DomainDnssecDataCreate objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all keys
 * for (const key of KEYS_DOMAIN_DNSSEC_DATA_CREATE) {
 *   console.log(`Property: ${key}, Value: ${domaindnssecdatacreate[key]}`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_DOMAIN_DNSSEC_DATA_CREATE.includes(someKey);
 * ```
 *
 * @see {@link DomainDnssecDataCreate} - The TypeScript type definition
 */
export const KEYS_DOMAIN_DNSSEC_DATA_CREATE = [
  KEY_DOMAIN_DNSSEC_DATA_CREATE_ALGORITHM,
  KEY_DOMAIN_DNSSEC_DATA_CREATE_DIGEST,
  KEY_DOMAIN_DNSSEC_DATA_CREATE_DIGEST_TYPE,
  KEY_DOMAIN_DNSSEC_DATA_CREATE_FLAGS,
  KEY_DOMAIN_DNSSEC_DATA_CREATE_KEY_TAG,
  KEY_DOMAIN_DNSSEC_DATA_CREATE_PROTOCOL,
  KEY_DOMAIN_DNSSEC_DATA_CREATE_PUBLIC_KEY,
  KEY_DOMAIN_DNSSEC_DATA_CREATE_RECORD_TYPE,
] as const satisfies (keyof DomainDnssecDataCreate)[];

/**
 * algorithm property
 *
 * DNSSEC algorithm used
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `algorithm` property of DomainDnssecData objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = domaindnssecdata[KEY_DOMAIN_DNSSEC_DATA_ALGORITHM];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DOMAIN_DNSSEC_DATA_ALGORITHM;
 * const value = domaindnssecdata[propertyName];
 * ```
 *
 * @see {@link DomainDnssecData} - The TypeScript type definition
 * @see {@link KEYS_DOMAIN_DNSSEC_DATA} - Array of all keys for this type
 */
export const KEY_DOMAIN_DNSSEC_DATA_ALGORITHM = 'algorithm' as keyof DomainDnssecData;
/**
 * Created On
 *
 * The date/time the entry was created on
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `created_on` property of DomainDnssecData objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = domaindnssecdata[KEY_DOMAIN_DNSSEC_DATA_CREATED_ON];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DOMAIN_DNSSEC_DATA_CREATED_ON;
 * const value = domaindnssecdata[propertyName];
 * ```
 *
 * @see {@link DomainDnssecData} - The TypeScript type definition
 * @see {@link KEYS_DOMAIN_DNSSEC_DATA} - Array of all keys for this type
 */
export const KEY_DOMAIN_DNSSEC_DATA_CREATED_ON = 'created_on' as keyof DomainDnssecData;
/**
 * Digest
 *
 * Digest value for DS records
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `digest` property of DomainDnssecData objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = domaindnssecdata[KEY_DOMAIN_DNSSEC_DATA_DIGEST];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DOMAIN_DNSSEC_DATA_DIGEST;
 * const value = domaindnssecdata[propertyName];
 * ```
 *
 * @see {@link DomainDnssecData} - The TypeScript type definition
 * @see {@link KEYS_DOMAIN_DNSSEC_DATA} - Array of all keys for this type
 */
export const KEY_DOMAIN_DNSSEC_DATA_DIGEST = 'digest' as keyof DomainDnssecData;
/**
 * digest_type property
 *
 * Digest type for DS records
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `digest_type` property of DomainDnssecData objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = domaindnssecdata[KEY_DOMAIN_DNSSEC_DATA_DIGEST_TYPE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DOMAIN_DNSSEC_DATA_DIGEST_TYPE;
 * const value = domaindnssecdata[propertyName];
 * ```
 *
 * @see {@link DomainDnssecData} - The TypeScript type definition
 * @see {@link KEYS_DOMAIN_DNSSEC_DATA} - Array of all keys for this type
 */
export const KEY_DOMAIN_DNSSEC_DATA_DIGEST_TYPE = 'digest_type' as keyof DomainDnssecData;
/**
 * Domain Dnssec Data Id
 *
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `domain_dnssec_data_id` property of DomainDnssecData objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = domaindnssecdata[KEY_DOMAIN_DNSSEC_DATA_DOMAIN_DNSSEC_DATA_ID];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DOMAIN_DNSSEC_DATA_DOMAIN_DNSSEC_DATA_ID;
 * const value = domaindnssecdata[propertyName];
 * ```
 *
 * @see {@link DomainDnssecData} - The TypeScript type definition
 * @see {@link KEYS_DOMAIN_DNSSEC_DATA} - Array of all keys for this type
 */
export const KEY_DOMAIN_DNSSEC_DATA_DOMAIN_DNSSEC_DATA_ID = 'domain_dnssec_data_id' as keyof DomainDnssecData;
/**
 * Domain Id
 *
 * The domain this DNSSEC record belongs to
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `domain_id` property of DomainDnssecData objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = domaindnssecdata[KEY_DOMAIN_DNSSEC_DATA_DOMAIN_ID];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DOMAIN_DNSSEC_DATA_DOMAIN_ID;
 * const value = domaindnssecdata[propertyName];
 * ```
 *
 * @see {@link DomainDnssecData} - The TypeScript type definition
 * @see {@link KEYS_DOMAIN_DNSSEC_DATA} - Array of all keys for this type
 */
export const KEY_DOMAIN_DNSSEC_DATA_DOMAIN_ID = 'domain_id' as keyof DomainDnssecData;
/**
 * Flags
 *
 * DNSKEY flags for key records
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `flags` property of DomainDnssecData objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = domaindnssecdata[KEY_DOMAIN_DNSSEC_DATA_FLAGS];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DOMAIN_DNSSEC_DATA_FLAGS;
 * const value = domaindnssecdata[propertyName];
 * ```
 *
 * @see {@link DomainDnssecData} - The TypeScript type definition
 * @see {@link KEYS_DOMAIN_DNSSEC_DATA} - Array of all keys for this type
 */
export const KEY_DOMAIN_DNSSEC_DATA_FLAGS = 'flags' as keyof DomainDnssecData;
/**
 * Key Tag
 *
 * Key tag for DS records
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `key_tag` property of DomainDnssecData objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = domaindnssecdata[KEY_DOMAIN_DNSSEC_DATA_KEY_TAG];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DOMAIN_DNSSEC_DATA_KEY_TAG;
 * const value = domaindnssecdata[propertyName];
 * ```
 *
 * @see {@link DomainDnssecData} - The TypeScript type definition
 * @see {@link KEYS_DOMAIN_DNSSEC_DATA} - Array of all keys for this type
 */
export const KEY_DOMAIN_DNSSEC_DATA_KEY_TAG = 'key_tag' as keyof DomainDnssecData;
/**
 * Protocol
 *
 * Protocol field for key records (typically 3)
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `protocol` property of DomainDnssecData objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = domaindnssecdata[KEY_DOMAIN_DNSSEC_DATA_PROTOCOL];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DOMAIN_DNSSEC_DATA_PROTOCOL;
 * const value = domaindnssecdata[propertyName];
 * ```
 *
 * @see {@link DomainDnssecData} - The TypeScript type definition
 * @see {@link KEYS_DOMAIN_DNSSEC_DATA} - Array of all keys for this type
 */
export const KEY_DOMAIN_DNSSEC_DATA_PROTOCOL = 'protocol' as keyof DomainDnssecData;
/**
 * Public Key
 *
 * Base64-encoded public key for key records
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `public_key` property of DomainDnssecData objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = domaindnssecdata[KEY_DOMAIN_DNSSEC_DATA_PUBLIC_KEY];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DOMAIN_DNSSEC_DATA_PUBLIC_KEY;
 * const value = domaindnssecdata[propertyName];
 * ```
 *
 * @see {@link DomainDnssecData} - The TypeScript type definition
 * @see {@link KEYS_DOMAIN_DNSSEC_DATA} - Array of all keys for this type
 */
export const KEY_DOMAIN_DNSSEC_DATA_PUBLIC_KEY = 'public_key' as keyof DomainDnssecData;
/**
 * record_type property
 *
 * Type of DNSSEC record (DS or Key)
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `record_type` property of DomainDnssecData objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = domaindnssecdata[KEY_DOMAIN_DNSSEC_DATA_RECORD_TYPE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DOMAIN_DNSSEC_DATA_RECORD_TYPE;
 * const value = domaindnssecdata[propertyName];
 * ```
 *
 * @see {@link DomainDnssecData} - The TypeScript type definition
 * @see {@link KEYS_DOMAIN_DNSSEC_DATA} - Array of all keys for this type
 */
export const KEY_DOMAIN_DNSSEC_DATA_RECORD_TYPE = 'record_type' as keyof DomainDnssecData;
/**
 * Updated On
 *
 * The date/time the entry was last updated on
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `updated_on` property of DomainDnssecData objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = domaindnssecdata[KEY_DOMAIN_DNSSEC_DATA_UPDATED_ON];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DOMAIN_DNSSEC_DATA_UPDATED_ON;
 * const value = domaindnssecdata[propertyName];
 * ```
 *
 * @see {@link DomainDnssecData} - The TypeScript type definition
 * @see {@link KEYS_DOMAIN_DNSSEC_DATA} - Array of all keys for this type
 */
export const KEY_DOMAIN_DNSSEC_DATA_UPDATED_ON = 'updated_on' as keyof DomainDnssecData;

/**
 * Array of all DomainDnssecData property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for DomainDnssecData objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all keys
 * for (const key of KEYS_DOMAIN_DNSSEC_DATA) {
 *   console.log(`Property: ${key}, Value: ${domaindnssecdata[key]}`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_DOMAIN_DNSSEC_DATA.includes(someKey);
 * ```
 *
 * @see {@link DomainDnssecData} - The TypeScript type definition
 */
export const KEYS_DOMAIN_DNSSEC_DATA = [
  KEY_DOMAIN_DNSSEC_DATA_ALGORITHM,
  KEY_DOMAIN_DNSSEC_DATA_CREATED_ON,
  KEY_DOMAIN_DNSSEC_DATA_DIGEST,
  KEY_DOMAIN_DNSSEC_DATA_DIGEST_TYPE,
  KEY_DOMAIN_DNSSEC_DATA_DOMAIN_DNSSEC_DATA_ID,
  KEY_DOMAIN_DNSSEC_DATA_DOMAIN_ID,
  KEY_DOMAIN_DNSSEC_DATA_FLAGS,
  KEY_DOMAIN_DNSSEC_DATA_KEY_TAG,
  KEY_DOMAIN_DNSSEC_DATA_PROTOCOL,
  KEY_DOMAIN_DNSSEC_DATA_PUBLIC_KEY,
  KEY_DOMAIN_DNSSEC_DATA_RECORD_TYPE,
  KEY_DOMAIN_DNSSEC_DATA_UPDATED_ON,
] as const satisfies (keyof DomainDnssecData)[];

/**
 * Add Grace Period
 *
 * Add grace period in days after registration in ISO 8601 format (e.g., 5D, 3D)
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `add_grace_period` property of DomainLifecycleBase objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = domainlifecyclebase[KEY_DOMAIN_LIFECYCLE_BASE_ADD_GRACE_PERIOD];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DOMAIN_LIFECYCLE_BASE_ADD_GRACE_PERIOD;
 * const value = domainlifecyclebase[propertyName];
 * ```
 *
 * @see {@link DomainLifecycleBase} - The TypeScript type definition
 * @see {@link KEYS_DOMAIN_LIFECYCLE_BASE} - Array of all keys for this type
 */
export const KEY_DOMAIN_LIFECYCLE_BASE_ADD_GRACE_PERIOD = 'add_grace_period' as keyof DomainLifecycleBase;
/**
 * Auto Renew Before Expiration
 *
 * Time before expiration to auto-renew a domain in ISO 8601 format (e.g., 5D, -7D)
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `auto_renew_before_expiration` property of DomainLifecycleBase objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = domainlifecyclebase[KEY_DOMAIN_LIFECYCLE_BASE_AUTO_RENEW_BEFORE_EXPIRATION];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DOMAIN_LIFECYCLE_BASE_AUTO_RENEW_BEFORE_EXPIRATION;
 * const value = domainlifecyclebase[propertyName];
 * ```
 *
 * @see {@link DomainLifecycleBase} - The TypeScript type definition
 * @see {@link KEYS_DOMAIN_LIFECYCLE_BASE} - Array of all keys for this type
 */
export const KEY_DOMAIN_LIFECYCLE_BASE_AUTO_RENEW_BEFORE_EXPIRATION = 'auto_renew_before_expiration' as keyof DomainLifecycleBase;
/**
 * Delete Before Expiration
 *
 * Time before expiration to delete a domain in ISO 8601 format (e.g., 5D, -7D)
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `delete_before_expiration` property of DomainLifecycleBase objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = domainlifecyclebase[KEY_DOMAIN_LIFECYCLE_BASE_DELETE_BEFORE_EXPIRATION];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DOMAIN_LIFECYCLE_BASE_DELETE_BEFORE_EXPIRATION;
 * const value = domainlifecyclebase[propertyName];
 * ```
 *
 * @see {@link DomainLifecycleBase} - The TypeScript type definition
 * @see {@link KEYS_DOMAIN_LIFECYCLE_BASE} - Array of all keys for this type
 */
export const KEY_DOMAIN_LIFECYCLE_BASE_DELETE_BEFORE_EXPIRATION = 'delete_before_expiration' as keyof DomainLifecycleBase;
/**
 * Delete Policy
 *
 * How a domain can be deleted
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `delete_policy` property of DomainLifecycleBase objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = domainlifecyclebase[KEY_DOMAIN_LIFECYCLE_BASE_DELETE_POLICY];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DOMAIN_LIFECYCLE_BASE_DELETE_POLICY;
 * const value = domainlifecyclebase[propertyName];
 * ```
 *
 * @see {@link DomainLifecycleBase} - The TypeScript type definition
 * @see {@link KEYS_DOMAIN_LIFECYCLE_BASE} - Array of all keys for this type
 */
export const KEY_DOMAIN_LIFECYCLE_BASE_DELETE_POLICY = 'delete_policy' as keyof DomainLifecycleBase;
/**
 * Explicit Renew
 *
 * Whether an explicit renewal is possible
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `explicit_renew` property of DomainLifecycleBase objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = domainlifecyclebase[KEY_DOMAIN_LIFECYCLE_BASE_EXPLICIT_RENEW];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DOMAIN_LIFECYCLE_BASE_EXPLICIT_RENEW;
 * const value = domainlifecyclebase[propertyName];
 * ```
 *
 * @see {@link DomainLifecycleBase} - The TypeScript type definition
 * @see {@link KEYS_DOMAIN_LIFECYCLE_BASE} - Array of all keys for this type
 */
export const KEY_DOMAIN_LIFECYCLE_BASE_EXPLICIT_RENEW = 'explicit_renew' as keyof DomainLifecycleBase;
/**
 * Grace Period
 *
 * Grace period after expiration in ISO 8601 format (e.g., 5D, -7D)
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `grace_period` property of DomainLifecycleBase objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = domainlifecyclebase[KEY_DOMAIN_LIFECYCLE_BASE_GRACE_PERIOD];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DOMAIN_LIFECYCLE_BASE_GRACE_PERIOD;
 * const value = domainlifecyclebase[propertyName];
 * ```
 *
 * @see {@link DomainLifecycleBase} - The TypeScript type definition
 * @see {@link KEYS_DOMAIN_LIFECYCLE_BASE} - Array of all keys for this type
 */
export const KEY_DOMAIN_LIFECYCLE_BASE_GRACE_PERIOD = 'grace_period' as keyof DomainLifecycleBase;
/**
 * Pending Delete
 *
 * Pending delete period in ISO 8601 format (e.g., 5D, 10D) after redemption_period
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `pending_delete` property of DomainLifecycleBase objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = domainlifecyclebase[KEY_DOMAIN_LIFECYCLE_BASE_PENDING_DELETE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DOMAIN_LIFECYCLE_BASE_PENDING_DELETE;
 * const value = domainlifecyclebase[propertyName];
 * ```
 *
 * @see {@link DomainLifecycleBase} - The TypeScript type definition
 * @see {@link KEYS_DOMAIN_LIFECYCLE_BASE} - Array of all keys for this type
 */
export const KEY_DOMAIN_LIFECYCLE_BASE_PENDING_DELETE = 'pending_delete' as keyof DomainLifecycleBase;
/**
 * Redemption Period
 *
 * Redemption period for domain recovery after grace period in ISO 8601 format (e.g., 5D, -7D)
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `redemption_period` property of DomainLifecycleBase objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = domainlifecyclebase[KEY_DOMAIN_LIFECYCLE_BASE_REDEMPTION_PERIOD];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DOMAIN_LIFECYCLE_BASE_REDEMPTION_PERIOD;
 * const value = domainlifecyclebase[propertyName];
 * ```
 *
 * @see {@link DomainLifecycleBase} - The TypeScript type definition
 * @see {@link KEYS_DOMAIN_LIFECYCLE_BASE} - Array of all keys for this type
 */
export const KEY_DOMAIN_LIFECYCLE_BASE_REDEMPTION_PERIOD = 'redemption_period' as keyof DomainLifecycleBase;
/**
 * registration_periods property
 *
 * List of allowed registration periods (e.g., '1y' or ['1y', '2y', '5y'])
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `registration_periods` property of DomainLifecycleBase objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = domainlifecyclebase[KEY_DOMAIN_LIFECYCLE_BASE_REGISTRATION_PERIODS];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DOMAIN_LIFECYCLE_BASE_REGISTRATION_PERIODS;
 * const value = domainlifecyclebase[propertyName];
 * ```
 *
 * @see {@link DomainLifecycleBase} - The TypeScript type definition
 * @see {@link KEYS_DOMAIN_LIFECYCLE_BASE} - Array of all keys for this type
 */
export const KEY_DOMAIN_LIFECYCLE_BASE_REGISTRATION_PERIODS = 'registration_periods' as keyof DomainLifecycleBase;
/**
 * Registry Auto Renew
 *
 * Does the registry enforce auto-renewal
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `registry_auto_renew` property of DomainLifecycleBase objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = domainlifecyclebase[KEY_DOMAIN_LIFECYCLE_BASE_REGISTRY_AUTO_RENEW];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DOMAIN_LIFECYCLE_BASE_REGISTRY_AUTO_RENEW;
 * const value = domainlifecyclebase[propertyName];
 * ```
 *
 * @see {@link DomainLifecycleBase} - The TypeScript type definition
 * @see {@link KEYS_DOMAIN_LIFECYCLE_BASE} - Array of all keys for this type
 */
export const KEY_DOMAIN_LIFECYCLE_BASE_REGISTRY_AUTO_RENEW = 'registry_auto_renew' as keyof DomainLifecycleBase;
/**
 * renewal_periods property
 *
 * List of allowed renewal periods (e.g., '1y' or ['1y', '2y', '5y'])
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `renewal_periods` property of DomainLifecycleBase objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = domainlifecyclebase[KEY_DOMAIN_LIFECYCLE_BASE_RENEWAL_PERIODS];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DOMAIN_LIFECYCLE_BASE_RENEWAL_PERIODS;
 * const value = domainlifecyclebase[propertyName];
 * ```
 *
 * @see {@link DomainLifecycleBase} - The TypeScript type definition
 * @see {@link KEYS_DOMAIN_LIFECYCLE_BASE} - Array of all keys for this type
 */
export const KEY_DOMAIN_LIFECYCLE_BASE_RENEWAL_PERIODS = 'renewal_periods' as keyof DomainLifecycleBase;
/**
 * rgp_operations property
 *
 * RGP operations supported by the registry
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `rgp_operations` property of DomainLifecycleBase objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = domainlifecyclebase[KEY_DOMAIN_LIFECYCLE_BASE_RGP_OPERATIONS];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DOMAIN_LIFECYCLE_BASE_RGP_OPERATIONS;
 * const value = domainlifecyclebase[propertyName];
 * ```
 *
 * @see {@link DomainLifecycleBase} - The TypeScript type definition
 * @see {@link KEYS_DOMAIN_LIFECYCLE_BASE} - Array of all keys for this type
 */
export const KEY_DOMAIN_LIFECYCLE_BASE_RGP_OPERATIONS = 'rgp_operations' as keyof DomainLifecycleBase;
/**
 * Sync After Operations
 *
 * Operations that trigger a sync with the registry
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `sync_after_operations` property of DomainLifecycleBase objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = domainlifecyclebase[KEY_DOMAIN_LIFECYCLE_BASE_SYNC_AFTER_OPERATIONS];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DOMAIN_LIFECYCLE_BASE_SYNC_AFTER_OPERATIONS;
 * const value = domainlifecyclebase[propertyName];
 * ```
 *
 * @see {@link DomainLifecycleBase} - The TypeScript type definition
 * @see {@link KEYS_DOMAIN_LIFECYCLE_BASE} - Array of all keys for this type
 */
export const KEY_DOMAIN_LIFECYCLE_BASE_SYNC_AFTER_OPERATIONS = 'sync_after_operations' as keyof DomainLifecycleBase;

/**
 * Array of all DomainLifecycleBase property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for DomainLifecycleBase objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all keys
 * for (const key of KEYS_DOMAIN_LIFECYCLE_BASE) {
 *   console.log(`Property: ${key}, Value: ${domainlifecyclebase[key]}`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_DOMAIN_LIFECYCLE_BASE.includes(someKey);
 * ```
 *
 * @see {@link DomainLifecycleBase} - The TypeScript type definition
 */
export const KEYS_DOMAIN_LIFECYCLE_BASE = [
  KEY_DOMAIN_LIFECYCLE_BASE_ADD_GRACE_PERIOD,
  KEY_DOMAIN_LIFECYCLE_BASE_AUTO_RENEW_BEFORE_EXPIRATION,
  KEY_DOMAIN_LIFECYCLE_BASE_DELETE_BEFORE_EXPIRATION,
  KEY_DOMAIN_LIFECYCLE_BASE_DELETE_POLICY,
  KEY_DOMAIN_LIFECYCLE_BASE_EXPLICIT_RENEW,
  KEY_DOMAIN_LIFECYCLE_BASE_GRACE_PERIOD,
  KEY_DOMAIN_LIFECYCLE_BASE_PENDING_DELETE,
  KEY_DOMAIN_LIFECYCLE_BASE_REDEMPTION_PERIOD,
  KEY_DOMAIN_LIFECYCLE_BASE_REGISTRATION_PERIODS,
  KEY_DOMAIN_LIFECYCLE_BASE_REGISTRY_AUTO_RENEW,
  KEY_DOMAIN_LIFECYCLE_BASE_RENEWAL_PERIODS,
  KEY_DOMAIN_LIFECYCLE_BASE_RGP_OPERATIONS,
  KEY_DOMAIN_LIFECYCLE_BASE_SYNC_AFTER_OPERATIONS,
] as const satisfies (keyof DomainLifecycleBase)[];

/**
 * Domain
 *
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `domain` property of DomainNameParts objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = domainnameparts[KEY_DOMAIN_NAME_PARTS_DOMAIN];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DOMAIN_NAME_PARTS_DOMAIN;
 * const value = domainnameparts[propertyName];
 * ```
 *
 * @see {@link DomainNameParts} - The TypeScript type definition
 * @see {@link KEYS_DOMAIN_NAME_PARTS} - Array of all keys for this type
 */
export const KEY_DOMAIN_NAME_PARTS_DOMAIN = 'domain' as keyof DomainNameParts;
/**
 * Subdomain
 *
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `subdomain` property of DomainNameParts objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = domainnameparts[KEY_DOMAIN_NAME_PARTS_SUBDOMAIN];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DOMAIN_NAME_PARTS_SUBDOMAIN;
 * const value = domainnameparts[propertyName];
 * ```
 *
 * @see {@link DomainNameParts} - The TypeScript type definition
 * @see {@link KEYS_DOMAIN_NAME_PARTS} - Array of all keys for this type
 */
export const KEY_DOMAIN_NAME_PARTS_SUBDOMAIN = 'subdomain' as keyof DomainNameParts;
/**
 * Suffix
 *
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `suffix` property of DomainNameParts objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = domainnameparts[KEY_DOMAIN_NAME_PARTS_SUFFIX];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DOMAIN_NAME_PARTS_SUFFIX;
 * const value = domainnameparts[propertyName];
 * ```
 *
 * @see {@link DomainNameParts} - The TypeScript type definition
 * @see {@link KEYS_DOMAIN_NAME_PARTS} - Array of all keys for this type
 */
export const KEY_DOMAIN_NAME_PARTS_SUFFIX = 'suffix' as keyof DomainNameParts;

/**
 * Array of all DomainNameParts property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for DomainNameParts objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all keys
 * for (const key of KEYS_DOMAIN_NAME_PARTS) {
 *   console.log(`Property: ${key}, Value: ${domainnameparts[key]}`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_DOMAIN_NAME_PARTS.includes(someKey);
 * ```
 *
 * @see {@link DomainNameParts} - The TypeScript type definition
 */
export const KEYS_DOMAIN_NAME_PARTS = [
  KEY_DOMAIN_NAME_PARTS_DOMAIN,
  KEY_DOMAIN_NAME_PARTS_SUBDOMAIN,
  KEY_DOMAIN_NAME_PARTS_SUFFIX,
] as const satisfies (keyof DomainNameParts)[];

/**
 * unit property
 *
 * The unit of the period
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `unit` property of DomainPeriod objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = domainperiod[KEY_DOMAIN_PERIOD_UNIT];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DOMAIN_PERIOD_UNIT;
 * const value = domainperiod[propertyName];
 * ```
 *
 * @see {@link DomainPeriod} - The TypeScript type definition
 * @see {@link KEYS_DOMAIN_PERIOD} - Array of all keys for this type
 */
export const KEY_DOMAIN_PERIOD_UNIT = 'unit' as keyof DomainPeriod;
/**
 * Value
 *
 * Amount of time in the unit
 *
 * @type {integer}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `value` property of DomainPeriod objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = domainperiod[KEY_DOMAIN_PERIOD_VALUE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DOMAIN_PERIOD_VALUE;
 * const value = domainperiod[propertyName];
 * ```
 *
 * @see {@link DomainPeriod} - The TypeScript type definition
 * @see {@link KEYS_DOMAIN_PERIOD} - Array of all keys for this type
 */
export const KEY_DOMAIN_PERIOD_VALUE = 'value' as keyof DomainPeriod;

/**
 * Array of all DomainPeriod property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for DomainPeriod objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all keys
 * for (const key of KEYS_DOMAIN_PERIOD) {
 *   console.log(`Property: ${key}, Value: ${domainperiod[key]}`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_DOMAIN_PERIOD.includes(someKey);
 * ```
 *
 * @see {@link DomainPeriod} - The TypeScript type definition
 */
export const KEYS_DOMAIN_PERIOD = [
  KEY_DOMAIN_PERIOD_UNIT,
  KEY_DOMAIN_PERIOD_VALUE,
] as const satisfies (keyof DomainPeriod)[];

/**
 * Current Expiry Date
 *
 * Current expiration date of the domain for validation
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `current_expiry_date` property of DomainRenewRequest objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = domainrenewrequest[KEY_DOMAIN_RENEW_REQUEST_CURRENT_EXPIRY_DATE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DOMAIN_RENEW_REQUEST_CURRENT_EXPIRY_DATE;
 * const value = domainrenewrequest[propertyName];
 * ```
 *
 * @see {@link DomainRenewRequest} - The TypeScript type definition
 * @see {@link KEYS_DOMAIN_RENEW_REQUEST} - Array of all keys for this type
 */
export const KEY_DOMAIN_RENEW_REQUEST_CURRENT_EXPIRY_DATE = 'current_expiry_date' as keyof DomainRenewRequest;
/**
 * period property
 *
 * How long to extend the domain registration
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `period` property of DomainRenewRequest objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = domainrenewrequest[KEY_DOMAIN_RENEW_REQUEST_PERIOD];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DOMAIN_RENEW_REQUEST_PERIOD;
 * const value = domainrenewrequest[propertyName];
 * ```
 *
 * @see {@link DomainRenewRequest} - The TypeScript type definition
 * @see {@link KEYS_DOMAIN_RENEW_REQUEST} - Array of all keys for this type
 */
export const KEY_DOMAIN_RENEW_REQUEST_PERIOD = 'period' as keyof DomainRenewRequest;

/**
 * Array of all DomainRenewRequest property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for DomainRenewRequest objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all keys
 * for (const key of KEYS_DOMAIN_RENEW_REQUEST) {
 *   console.log(`Property: ${key}, Value: ${domainrenewrequest[key]}`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_DOMAIN_RENEW_REQUEST.includes(someKey);
 * ```
 *
 * @see {@link DomainRenewRequest} - The TypeScript type definition
 */
export const KEYS_DOMAIN_RENEW_REQUEST = [
  KEY_DOMAIN_RENEW_REQUEST_CURRENT_EXPIRY_DATE,
  KEY_DOMAIN_RENEW_REQUEST_PERIOD,
] as const satisfies (keyof DomainRenewRequest)[];

/**
 * Name
 *
 * The domain name that was renewed
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `name` property of DomainRenew objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = domainrenew[KEY_DOMAIN_RENEW_NAME];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DOMAIN_RENEW_NAME;
 * const value = domainrenew[propertyName];
 * ```
 *
 * @see {@link DomainRenew} - The TypeScript type definition
 * @see {@link KEYS_DOMAIN_RENEW} - Array of all keys for this type
 */
export const KEY_DOMAIN_RENEW_NAME = 'name' as keyof DomainRenew;
/**
 * New Expiry Date
 *
 * New expiration date after renewal
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `new_expiry_date` property of DomainRenew objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = domainrenew[KEY_DOMAIN_RENEW_NEW_EXPIRY_DATE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DOMAIN_RENEW_NEW_EXPIRY_DATE;
 * const value = domainrenew[propertyName];
 * ```
 *
 * @see {@link DomainRenew} - The TypeScript type definition
 * @see {@link KEYS_DOMAIN_RENEW} - Array of all keys for this type
 */
export const KEY_DOMAIN_RENEW_NEW_EXPIRY_DATE = 'new_expiry_date' as keyof DomainRenew;
/**
 * period_extended property
 *
 * The period by which the domain was extended
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `period_extended` property of DomainRenew objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = domainrenew[KEY_DOMAIN_RENEW_PERIOD_EXTENDED];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DOMAIN_RENEW_PERIOD_EXTENDED;
 * const value = domainrenew[propertyName];
 * ```
 *
 * @see {@link DomainRenew} - The TypeScript type definition
 * @see {@link KEYS_DOMAIN_RENEW} - Array of all keys for this type
 */
export const KEY_DOMAIN_RENEW_PERIOD_EXTENDED = 'period_extended' as keyof DomainRenew;

/**
 * Array of all DomainRenew property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for DomainRenew objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all keys
 * for (const key of KEYS_DOMAIN_RENEW) {
 *   console.log(`Property: ${key}, Value: ${domainrenew[key]}`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_DOMAIN_RENEW.includes(someKey);
 * ```
 *
 * @see {@link DomainRenew} - The TypeScript type definition
 */
export const KEYS_DOMAIN_RENEW = [
  KEY_DOMAIN_RENEW_NAME,
  KEY_DOMAIN_RENEW_NEW_EXPIRY_DATE,
  KEY_DOMAIN_RENEW_PERIOD_EXTENDED,
] as const satisfies (keyof DomainRenew)[];

/**
 * Auth Code
 *
 * The auth code for the domain
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `auth_code` property of Domain objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = domain[KEY_DOMAIN_AUTH_CODE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DOMAIN_AUTH_CODE;
 * const value = domain[propertyName];
 * ```
 *
 * @see {@link Domain} - The TypeScript type definition
 * @see {@link KEYS_DOMAIN} - Array of all keys for this type
 */
export const KEY_DOMAIN_AUTH_CODE = 'auth_code' as keyof Domain;
/**
 * Auth Code Expires On
 *
 * When the auth code expires
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `auth_code_expires_on` property of Domain objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = domain[KEY_DOMAIN_AUTH_CODE_EXPIRES_ON];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DOMAIN_AUTH_CODE_EXPIRES_ON;
 * const value = domain[propertyName];
 * ```
 *
 * @see {@link Domain} - The TypeScript type definition
 * @see {@link KEYS_DOMAIN} - Array of all keys for this type
 */
export const KEY_DOMAIN_AUTH_CODE_EXPIRES_ON = 'auth_code_expires_on' as keyof Domain;
/**
 * Canceled On
 *
 * When the domain was deleted
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `canceled_on` property of Domain objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = domain[KEY_DOMAIN_CANCELED_ON];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DOMAIN_CANCELED_ON;
 * const value = domain[propertyName];
 * ```
 *
 * @see {@link Domain} - The TypeScript type definition
 * @see {@link KEYS_DOMAIN} - Array of all keys for this type
 */
export const KEY_DOMAIN_CANCELED_ON = 'canceled_on' as keyof Domain;
/**
 * Contacts
 *
 * The contacts of the domain
 *
 * @type {array}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `contacts` property of Domain objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = domain[KEY_DOMAIN_CONTACTS];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DOMAIN_CONTACTS;
 * const value = domain[propertyName];
 * ```
 *
 * @see {@link Domain} - The TypeScript type definition
 * @see {@link KEYS_DOMAIN} - Array of all keys for this type
 */
export const KEY_DOMAIN_CONTACTS = 'contacts' as keyof Domain;
/**
 * Created On
 *
 * The date/time the entry was created on
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `created_on` property of Domain objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = domain[KEY_DOMAIN_CREATED_ON];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DOMAIN_CREATED_ON;
 * const value = domain[propertyName];
 * ```
 *
 * @see {@link Domain} - The TypeScript type definition
 * @see {@link KEYS_DOMAIN} - Array of all keys for this type
 */
export const KEY_DOMAIN_CREATED_ON = 'created_on' as keyof Domain;
/**
 * Deleted On
 *
 * When the domain will be deleted
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `deleted_on` property of Domain objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = domain[KEY_DOMAIN_DELETED_ON];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DOMAIN_DELETED_ON;
 * const value = domain[propertyName];
 * ```
 *
 * @see {@link Domain} - The TypeScript type definition
 * @see {@link KEYS_DOMAIN} - Array of all keys for this type
 */
export const KEY_DOMAIN_DELETED_ON = 'deleted_on' as keyof Domain;
/**
 * Domain Id
 *
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `domain_id` property of Domain objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = domain[KEY_DOMAIN_DOMAIN_ID];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DOMAIN_DOMAIN_ID;
 * const value = domain[propertyName];
 * ```
 *
 * @see {@link Domain} - The TypeScript type definition
 * @see {@link KEYS_DOMAIN} - Array of all keys for this type
 */
export const KEY_DOMAIN_DOMAIN_ID = 'domain_id' as keyof Domain;
/**
 * Expires On
 *
 * When the domain expires
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `expires_on` property of Domain objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = domain[KEY_DOMAIN_EXPIRES_ON];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DOMAIN_EXPIRES_ON;
 * const value = domain[propertyName];
 * ```
 *
 * @see {@link Domain} - The TypeScript type definition
 * @see {@link KEYS_DOMAIN} - Array of all keys for this type
 */
export const KEY_DOMAIN_EXPIRES_ON = 'expires_on' as keyof Domain;
/**
 * Name
 *
 * The domain name
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `name` property of Domain objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = domain[KEY_DOMAIN_NAME];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DOMAIN_NAME;
 * const value = domain[propertyName];
 * ```
 *
 * @see {@link Domain} - The TypeScript type definition
 * @see {@link KEYS_DOMAIN} - Array of all keys for this type
 */
export const KEY_DOMAIN_NAME = 'name' as keyof Domain;
/**
 * Nameservers
 *
 * All the domain statuses
 *
 * @type {array}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `nameservers` property of Domain objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = domain[KEY_DOMAIN_NAMESERVERS];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DOMAIN_NAMESERVERS;
 * const value = domain[propertyName];
 * ```
 *
 * @see {@link Domain} - The TypeScript type definition
 * @see {@link KEYS_DOMAIN} - Array of all keys for this type
 */
export const KEY_DOMAIN_NAMESERVERS = 'nameservers' as keyof Domain;
/**
 * Owner Id
 *
 * The organization that owns the domain
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `owner_id` property of Domain objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = domain[KEY_DOMAIN_OWNER_ID];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DOMAIN_OWNER_ID;
 * const value = domain[propertyName];
 * ```
 *
 * @see {@link Domain} - The TypeScript type definition
 * @see {@link KEYS_DOMAIN} - Array of all keys for this type
 */
export const KEY_DOMAIN_OWNER_ID = 'owner_id' as keyof Domain;
/**
 * Registered On
 *
 * When the domain was registered
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `registered_on` property of Domain objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = domain[KEY_DOMAIN_REGISTERED_ON];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DOMAIN_REGISTERED_ON;
 * const value = domain[propertyName];
 * ```
 *
 * @see {@link Domain} - The TypeScript type definition
 * @see {@link KEYS_DOMAIN} - Array of all keys for this type
 */
export const KEY_DOMAIN_REGISTERED_ON = 'registered_on' as keyof Domain;
/**
 * Registry Account Id
 *
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `registry_account_id` property of Domain objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = domain[KEY_DOMAIN_REGISTRY_ACCOUNT_ID];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DOMAIN_REGISTRY_ACCOUNT_ID;
 * const value = domain[propertyName];
 * ```
 *
 * @see {@link Domain} - The TypeScript type definition
 * @see {@link KEYS_DOMAIN} - Array of all keys for this type
 */
export const KEY_DOMAIN_REGISTRY_ACCOUNT_ID = 'registry_account_id' as keyof Domain;
/**
 * Registry Statuses
 *
 * All the domain statuses
 *
 * @type {array}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `registry_statuses` property of Domain objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = domain[KEY_DOMAIN_REGISTRY_STATUSES];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DOMAIN_REGISTRY_STATUSES;
 * const value = domain[propertyName];
 * ```
 *
 * @see {@link Domain} - The TypeScript type definition
 * @see {@link KEYS_DOMAIN} - Array of all keys for this type
 */
export const KEY_DOMAIN_REGISTRY_STATUSES = 'registry_statuses' as keyof Domain;
/**
 * renewal_mode property
 *
 * The renewal mode of the domain
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `renewal_mode` property of Domain objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = domain[KEY_DOMAIN_RENEWAL_MODE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DOMAIN_RENEWAL_MODE;
 * const value = domain[propertyName];
 * ```
 *
 * @see {@link Domain} - The TypeScript type definition
 * @see {@link KEYS_DOMAIN} - Array of all keys for this type
 */
export const KEY_DOMAIN_RENEWAL_MODE = 'renewal_mode' as keyof Domain;
/**
 * Roid
 *
 * The registry object id of the domain
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `roid` property of Domain objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = domain[KEY_DOMAIN_ROID];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DOMAIN_ROID;
 * const value = domain[propertyName];
 * ```
 *
 * @see {@link Domain} - The TypeScript type definition
 * @see {@link KEYS_DOMAIN} - Array of all keys for this type
 */
export const KEY_DOMAIN_ROID = 'roid' as keyof Domain;
/**
 * Sld
 *
 * The second level domain
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `sld` property of Domain objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = domain[KEY_DOMAIN_SLD];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DOMAIN_SLD;
 * const value = domain[propertyName];
 * ```
 *
 * @see {@link Domain} - The TypeScript type definition
 * @see {@link KEYS_DOMAIN} - Array of all keys for this type
 */
export const KEY_DOMAIN_SLD = 'sld' as keyof Domain;
/**
 * Tld
 *
 * The top level domain of the domain
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `tld` property of Domain objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = domain[KEY_DOMAIN_TLD];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DOMAIN_TLD;
 * const value = domain[propertyName];
 * ```
 *
 * @see {@link Domain} - The TypeScript type definition
 * @see {@link KEYS_DOMAIN} - Array of all keys for this type
 */
export const KEY_DOMAIN_TLD = 'tld' as keyof Domain;
/**
 * Transfer Lock
 *
 * Whether the domain is locked for transfer
 *
 * @type {boolean}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `transfer_lock` property of Domain objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = domain[KEY_DOMAIN_TRANSFER_LOCK];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DOMAIN_TRANSFER_LOCK;
 * const value = domain[propertyName];
 * ```
 *
 * @see {@link Domain} - The TypeScript type definition
 * @see {@link KEYS_DOMAIN} - Array of all keys for this type
 */
export const KEY_DOMAIN_TRANSFER_LOCK = 'transfer_lock' as keyof Domain;
/**
 * Updated On
 *
 * The date/time the entry was last updated on
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `updated_on` property of Domain objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = domain[KEY_DOMAIN_UPDATED_ON];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DOMAIN_UPDATED_ON;
 * const value = domain[propertyName];
 * ```
 *
 * @see {@link Domain} - The TypeScript type definition
 * @see {@link KEYS_DOMAIN} - Array of all keys for this type
 */
export const KEY_DOMAIN_UPDATED_ON = 'updated_on' as keyof Domain;

/**
 * Array of all Domain property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for Domain objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all keys
 * for (const key of KEYS_DOMAIN) {
 *   console.log(`Property: ${key}, Value: ${domain[key]}`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_DOMAIN.includes(someKey);
 * ```
 *
 * @see {@link Domain} - The TypeScript type definition
 */
export const KEYS_DOMAIN = [
  KEY_DOMAIN_AUTH_CODE,
  KEY_DOMAIN_AUTH_CODE_EXPIRES_ON,
  KEY_DOMAIN_CANCELED_ON,
  KEY_DOMAIN_CONTACTS,
  KEY_DOMAIN_CREATED_ON,
  KEY_DOMAIN_DELETED_ON,
  KEY_DOMAIN_DOMAIN_ID,
  KEY_DOMAIN_EXPIRES_ON,
  KEY_DOMAIN_NAME,
  KEY_DOMAIN_NAMESERVERS,
  KEY_DOMAIN_OWNER_ID,
  KEY_DOMAIN_REGISTERED_ON,
  KEY_DOMAIN_REGISTRY_ACCOUNT_ID,
  KEY_DOMAIN_REGISTRY_STATUSES,
  KEY_DOMAIN_RENEWAL_MODE,
  KEY_DOMAIN_ROID,
  KEY_DOMAIN_SLD,
  KEY_DOMAIN_TLD,
  KEY_DOMAIN_TRANSFER_LOCK,
  KEY_DOMAIN_UPDATED_ON,
] as const satisfies (keyof Domain)[];

/**
 * Processing Time Ms
 *
 *
 * @type {integer}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `processing_time_ms` property of DomainSearchMeta objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = domainsearchmeta[KEY_DOMAIN_SEARCH_META_PROCESSING_TIME_MS];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DOMAIN_SEARCH_META_PROCESSING_TIME_MS;
 * const value = domainsearchmeta[propertyName];
 * ```
 *
 * @see {@link DomainSearchMeta} - The TypeScript type definition
 * @see {@link KEYS_DOMAIN_SEARCH_META} - Array of all keys for this type
 */
export const KEY_DOMAIN_SEARCH_META_PROCESSING_TIME_MS = 'processing_time_ms' as keyof DomainSearchMeta;
/**
 * Total
 *
 *
 * @type {integer}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `total` property of DomainSearchMeta objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = domainsearchmeta[KEY_DOMAIN_SEARCH_META_TOTAL];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DOMAIN_SEARCH_META_TOTAL;
 * const value = domainsearchmeta[propertyName];
 * ```
 *
 * @see {@link DomainSearchMeta} - The TypeScript type definition
 * @see {@link KEYS_DOMAIN_SEARCH_META} - Array of all keys for this type
 */
export const KEY_DOMAIN_SEARCH_META_TOTAL = 'total' as keyof DomainSearchMeta;

/**
 * Array of all DomainSearchMeta property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for DomainSearchMeta objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all keys
 * for (const key of KEYS_DOMAIN_SEARCH_META) {
 *   console.log(`Property: ${key}, Value: ${domainsearchmeta[key]}`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_DOMAIN_SEARCH_META.includes(someKey);
 * ```
 *
 * @see {@link DomainSearchMeta} - The TypeScript type definition
 */
export const KEYS_DOMAIN_SEARCH_META = [
  KEY_DOMAIN_SEARCH_META_PROCESSING_TIME_MS,
  KEY_DOMAIN_SEARCH_META_TOTAL,
] as const satisfies (keyof DomainSearchMeta)[];

/**
 * meta property
 *
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `meta` property of DomainSearch objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = domainsearch[KEY_DOMAIN_SEARCH_META];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DOMAIN_SEARCH_META;
 * const value = domainsearch[propertyName];
 * ```
 *
 * @see {@link DomainSearch} - The TypeScript type definition
 * @see {@link KEYS_DOMAIN_SEARCH} - Array of all keys for this type
 */
export const KEY_DOMAIN_SEARCH_META = 'meta' as keyof DomainSearch;
/**
 * Results
 *
 *
 * @type {array}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `results` property of DomainSearch objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = domainsearch[KEY_DOMAIN_SEARCH_RESULTS];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DOMAIN_SEARCH_RESULTS;
 * const value = domainsearch[propertyName];
 * ```
 *
 * @see {@link DomainSearch} - The TypeScript type definition
 * @see {@link KEYS_DOMAIN_SEARCH} - Array of all keys for this type
 */
export const KEY_DOMAIN_SEARCH_RESULTS = 'results' as keyof DomainSearch;

/**
 * Array of all DomainSearch property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for DomainSearch objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all keys
 * for (const key of KEYS_DOMAIN_SEARCH) {
 *   console.log(`Property: ${key}, Value: ${domainsearch[key]}`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_DOMAIN_SEARCH.includes(someKey);
 * ```
 *
 * @see {@link DomainSearch} - The TypeScript type definition
 */
export const KEYS_DOMAIN_SEARCH = [
  KEY_DOMAIN_SEARCH_META,
  KEY_DOMAIN_SEARCH_RESULTS,
] as const satisfies (keyof DomainSearch)[];

/**
 * Available
 *
 *
 * @type {boolean}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `available` property of DomainSearchSuggestion objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = domainsearchsuggestion[KEY_DOMAIN_SEARCH_SUGGESTION_AVAILABLE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DOMAIN_SEARCH_SUGGESTION_AVAILABLE;
 * const value = domainsearchsuggestion[propertyName];
 * ```
 *
 * @see {@link DomainSearchSuggestion} - The TypeScript type definition
 * @see {@link KEYS_DOMAIN_SEARCH_SUGGESTION} - Array of all keys for this type
 */
export const KEY_DOMAIN_SEARCH_SUGGESTION_AVAILABLE = 'available' as keyof DomainSearchSuggestion;
/**
 * Domain
 *
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `domain` property of DomainSearchSuggestion objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = domainsearchsuggestion[KEY_DOMAIN_SEARCH_SUGGESTION_DOMAIN];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DOMAIN_SEARCH_SUGGESTION_DOMAIN;
 * const value = domainsearchsuggestion[propertyName];
 * ```
 *
 * @see {@link DomainSearchSuggestion} - The TypeScript type definition
 * @see {@link KEYS_DOMAIN_SEARCH_SUGGESTION} - Array of all keys for this type
 */
export const KEY_DOMAIN_SEARCH_SUGGESTION_DOMAIN = 'domain' as keyof DomainSearchSuggestion;
/**
 * Premium
 *
 *
 * @type {boolean}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `premium` property of DomainSearchSuggestion objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = domainsearchsuggestion[KEY_DOMAIN_SEARCH_SUGGESTION_PREMIUM];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DOMAIN_SEARCH_SUGGESTION_PREMIUM;
 * const value = domainsearchsuggestion[propertyName];
 * ```
 *
 * @see {@link DomainSearchSuggestion} - The TypeScript type definition
 * @see {@link KEYS_DOMAIN_SEARCH_SUGGESTION} - Array of all keys for this type
 */
export const KEY_DOMAIN_SEARCH_SUGGESTION_PREMIUM = 'premium' as keyof DomainSearchSuggestion;

/**
 * Array of all DomainSearchSuggestion property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for DomainSearchSuggestion objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all keys
 * for (const key of KEYS_DOMAIN_SEARCH_SUGGESTION) {
 *   console.log(`Property: ${key}, Value: ${domainsearchsuggestion[key]}`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_DOMAIN_SEARCH_SUGGESTION.includes(someKey);
 * ```
 *
 * @see {@link DomainSearchSuggestion} - The TypeScript type definition
 */
export const KEYS_DOMAIN_SEARCH_SUGGESTION = [
  KEY_DOMAIN_SEARCH_SUGGESTION_AVAILABLE,
  KEY_DOMAIN_SEARCH_SUGGESTION_DOMAIN,
  KEY_DOMAIN_SEARCH_SUGGESTION_PREMIUM,
] as const satisfies (keyof DomainSearchSuggestion)[];

/**
 * Default
 *
 * The default status for an active domain with no restrictions
 *
 * @type {array}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `default` property of DomainStatusesBase objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = domainstatusesbase[KEY_DOMAIN_STATUSES_BASE_DEFAULT];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DOMAIN_STATUSES_BASE_DEFAULT;
 * const value = domainstatusesbase[propertyName];
 * ```
 *
 * @see {@link DomainStatusesBase} - The TypeScript type definition
 * @see {@link KEYS_DOMAIN_STATUSES_BASE} - Array of all keys for this type
 */
export const KEY_DOMAIN_STATUSES_BASE_DEFAULT = 'default' as keyof DomainStatusesBase;
/**
 * Supported Statuses
 *
 * Supported domain statuses
 *
 * @type {array}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `supported_statuses` property of DomainStatusesBase objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = domainstatusesbase[KEY_DOMAIN_STATUSES_BASE_SUPPORTED_STATUSES];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DOMAIN_STATUSES_BASE_SUPPORTED_STATUSES;
 * const value = domainstatusesbase[propertyName];
 * ```
 *
 * @see {@link DomainStatusesBase} - The TypeScript type definition
 * @see {@link KEYS_DOMAIN_STATUSES_BASE} - Array of all keys for this type
 */
export const KEY_DOMAIN_STATUSES_BASE_SUPPORTED_STATUSES = 'supported_statuses' as keyof DomainStatusesBase;

/**
 * Array of all DomainStatusesBase property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for DomainStatusesBase objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all keys
 * for (const key of KEYS_DOMAIN_STATUSES_BASE) {
 *   console.log(`Property: ${key}, Value: ${domainstatusesbase[key]}`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_DOMAIN_STATUSES_BASE.includes(someKey);
 * ```
 *
 * @see {@link DomainStatusesBase} - The TypeScript type definition
 */
export const KEYS_DOMAIN_STATUSES_BASE = [
  KEY_DOMAIN_STATUSES_BASE_DEFAULT,
  KEY_DOMAIN_STATUSES_BASE_SUPPORTED_STATUSES,
] as const satisfies (keyof DomainStatusesBase)[];

/**
 * By Status
 *
 * Domain counts by status (status: count)
 *
 * @type {object}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `by_status` property of DomainSummaryData objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = domainsummarydata[KEY_DOMAIN_SUMMARY_DATA_BY_STATUS];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DOMAIN_SUMMARY_DATA_BY_STATUS;
 * const value = domainsummarydata[propertyName];
 * ```
 *
 * @see {@link DomainSummaryData} - The TypeScript type definition
 * @see {@link KEYS_DOMAIN_SUMMARY_DATA} - Array of all keys for this type
 */
export const KEY_DOMAIN_SUMMARY_DATA_BY_STATUS = 'by_status' as keyof DomainSummaryData;
/**
 * By Tld
 *
 * Domain counts by TLD (tld: count)
 *
 * @type {object}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `by_tld` property of DomainSummaryData objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = domainsummarydata[KEY_DOMAIN_SUMMARY_DATA_BY_TLD];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DOMAIN_SUMMARY_DATA_BY_TLD;
 * const value = domainsummarydata[propertyName];
 * ```
 *
 * @see {@link DomainSummaryData} - The TypeScript type definition
 * @see {@link KEYS_DOMAIN_SUMMARY_DATA} - Array of all keys for this type
 */
export const KEY_DOMAIN_SUMMARY_DATA_BY_TLD = 'by_tld' as keyof DomainSummaryData;
/**
 * expiring_soon property
 *
 * Domains expiring soon
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `expiring_soon` property of DomainSummaryData objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = domainsummarydata[KEY_DOMAIN_SUMMARY_DATA_EXPIRING_SOON];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DOMAIN_SUMMARY_DATA_EXPIRING_SOON;
 * const value = domainsummarydata[propertyName];
 * ```
 *
 * @see {@link DomainSummaryData} - The TypeScript type definition
 * @see {@link KEYS_DOMAIN_SUMMARY_DATA} - Array of all keys for this type
 */
export const KEY_DOMAIN_SUMMARY_DATA_EXPIRING_SOON = 'expiring_soon' as keyof DomainSummaryData;
/**
 * Total Count
 *
 * Total number of domains
 *
 * @type {integer}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `total_count` property of DomainSummaryData objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = domainsummarydata[KEY_DOMAIN_SUMMARY_DATA_TOTAL_COUNT];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DOMAIN_SUMMARY_DATA_TOTAL_COUNT;
 * const value = domainsummarydata[propertyName];
 * ```
 *
 * @see {@link DomainSummaryData} - The TypeScript type definition
 * @see {@link KEYS_DOMAIN_SUMMARY_DATA} - Array of all keys for this type
 */
export const KEY_DOMAIN_SUMMARY_DATA_TOTAL_COUNT = 'total_count' as keyof DomainSummaryData;

/**
 * Array of all DomainSummaryData property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for DomainSummaryData objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all keys
 * for (const key of KEYS_DOMAIN_SUMMARY_DATA) {
 *   console.log(`Property: ${key}, Value: ${domainsummarydata[key]}`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_DOMAIN_SUMMARY_DATA.includes(someKey);
 * ```
 *
 * @see {@link DomainSummaryData} - The TypeScript type definition
 */
export const KEYS_DOMAIN_SUMMARY_DATA = [
  KEY_DOMAIN_SUMMARY_DATA_BY_STATUS,
  KEY_DOMAIN_SUMMARY_DATA_BY_TLD,
  KEY_DOMAIN_SUMMARY_DATA_EXPIRING_SOON,
  KEY_DOMAIN_SUMMARY_DATA_TOTAL_COUNT,
] as const satisfies (keyof DomainSummaryData)[];

/**
 * domains property
 *
 * Domain summary data
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `domains` property of DomainSummary objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = domainsummary[KEY_DOMAIN_SUMMARY_DOMAINS];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DOMAIN_SUMMARY_DOMAINS;
 * const value = domainsummary[propertyName];
 * ```
 *
 * @see {@link DomainSummary} - The TypeScript type definition
 * @see {@link KEYS_DOMAIN_SUMMARY} - Array of all keys for this type
 */
export const KEY_DOMAIN_SUMMARY_DOMAINS = 'domains' as keyof DomainSummary;
/**
 * Organization Id
 *
 * The organization ID
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `organization_id` property of DomainSummary objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = domainsummary[KEY_DOMAIN_SUMMARY_ORGANIZATION_ID];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DOMAIN_SUMMARY_ORGANIZATION_ID;
 * const value = domainsummary[propertyName];
 * ```
 *
 * @see {@link DomainSummary} - The TypeScript type definition
 * @see {@link KEYS_DOMAIN_SUMMARY} - Array of all keys for this type
 */
export const KEY_DOMAIN_SUMMARY_ORGANIZATION_ID = 'organization_id' as keyof DomainSummary;

/**
 * Array of all DomainSummary property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for DomainSummary objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all keys
 * for (const key of KEYS_DOMAIN_SUMMARY) {
 *   console.log(`Property: ${key}, Value: ${domainsummary[key]}`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_DOMAIN_SUMMARY.includes(someKey);
 * ```
 *
 * @see {@link DomainSummary} - The TypeScript type definition
 */
export const KEYS_DOMAIN_SUMMARY = [
  KEY_DOMAIN_SUMMARY_DOMAINS,
  KEY_DOMAIN_SUMMARY_ORGANIZATION_ID,
] as const satisfies (keyof DomainSummary)[];

/**
 * Auth Code
 *
 * The auth code for the domain
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `auth_code` property of DomainTransferIn objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = domaintransferin[KEY_DOMAIN_TRANSFER_IN_AUTH_CODE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DOMAIN_TRANSFER_IN_AUTH_CODE;
 * const value = domaintransferin[propertyName];
 * ```
 *
 * @see {@link DomainTransferIn} - The TypeScript type definition
 * @see {@link KEYS_DOMAIN_TRANSFER_IN} - Array of all keys for this type
 */
export const KEY_DOMAIN_TRANSFER_IN_AUTH_CODE = 'auth_code' as keyof DomainTransferIn;
/**
 * Contacts
 *
 * The contacts of the domain
 *
 * @type {object}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `contacts` property of DomainTransferIn objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = domaintransferin[KEY_DOMAIN_TRANSFER_IN_CONTACTS];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DOMAIN_TRANSFER_IN_CONTACTS;
 * const value = domaintransferin[propertyName];
 * ```
 *
 * @see {@link DomainTransferIn} - The TypeScript type definition
 * @see {@link KEYS_DOMAIN_TRANSFER_IN} - Array of all keys for this type
 */
export const KEY_DOMAIN_TRANSFER_IN_CONTACTS = 'contacts' as keyof DomainTransferIn;
/**
 * Name
 *
 * The domain name
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `name` property of DomainTransferIn objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = domaintransferin[KEY_DOMAIN_TRANSFER_IN_NAME];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DOMAIN_TRANSFER_IN_NAME;
 * const value = domaintransferin[propertyName];
 * ```
 *
 * @see {@link DomainTransferIn} - The TypeScript type definition
 * @see {@link KEYS_DOMAIN_TRANSFER_IN} - Array of all keys for this type
 */
export const KEY_DOMAIN_TRANSFER_IN_NAME = 'name' as keyof DomainTransferIn;
/**
 * Nameservers
 *
 * The name servers for the domain
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `nameservers` property of DomainTransferIn objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = domaintransferin[KEY_DOMAIN_TRANSFER_IN_NAMESERVERS];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DOMAIN_TRANSFER_IN_NAMESERVERS;
 * const value = domaintransferin[propertyName];
 * ```
 *
 * @see {@link DomainTransferIn} - The TypeScript type definition
 * @see {@link KEYS_DOMAIN_TRANSFER_IN} - Array of all keys for this type
 */
export const KEY_DOMAIN_TRANSFER_IN_NAMESERVERS = 'nameservers' as keyof DomainTransferIn;
/**
 * renewal_mode property
 *
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `renewal_mode` property of DomainTransferIn objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = domaintransferin[KEY_DOMAIN_TRANSFER_IN_RENEWAL_MODE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DOMAIN_TRANSFER_IN_RENEWAL_MODE;
 * const value = domaintransferin[propertyName];
 * ```
 *
 * @see {@link DomainTransferIn} - The TypeScript type definition
 * @see {@link KEYS_DOMAIN_TRANSFER_IN} - Array of all keys for this type
 */
export const KEY_DOMAIN_TRANSFER_IN_RENEWAL_MODE = 'renewal_mode' as keyof DomainTransferIn;

/**
 * Array of all DomainTransferIn property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for DomainTransferIn objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all keys
 * for (const key of KEYS_DOMAIN_TRANSFER_IN) {
 *   console.log(`Property: ${key}, Value: ${domaintransferin[key]}`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_DOMAIN_TRANSFER_IN.includes(someKey);
 * ```
 *
 * @see {@link DomainTransferIn} - The TypeScript type definition
 */
export const KEYS_DOMAIN_TRANSFER_IN = [
  KEY_DOMAIN_TRANSFER_IN_AUTH_CODE,
  KEY_DOMAIN_TRANSFER_IN_CONTACTS,
  KEY_DOMAIN_TRANSFER_IN_NAME,
  KEY_DOMAIN_TRANSFER_IN_NAMESERVERS,
  KEY_DOMAIN_TRANSFER_IN_RENEWAL_MODE,
] as const satisfies (keyof DomainTransferIn)[];

/**
 * Auth Code
 *
 * The new auth code for the domain
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `auth_code` property of DomainUpdate objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = domainupdate[KEY_DOMAIN_UPDATE_AUTH_CODE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DOMAIN_UPDATE_AUTH_CODE;
 * const value = domainupdate[propertyName];
 * ```
 *
 * @see {@link DomainUpdate} - The TypeScript type definition
 * @see {@link KEYS_DOMAIN_UPDATE} - Array of all keys for this type
 */
export const KEY_DOMAIN_UPDATE_AUTH_CODE = 'auth_code' as keyof DomainUpdate;
/**
 * Contacts
 *
 * The new contacts of the domain
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `contacts` property of DomainUpdate objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = domainupdate[KEY_DOMAIN_UPDATE_CONTACTS];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DOMAIN_UPDATE_CONTACTS;
 * const value = domainupdate[propertyName];
 * ```
 *
 * @see {@link DomainUpdate} - The TypeScript type definition
 * @see {@link KEYS_DOMAIN_UPDATE} - Array of all keys for this type
 */
export const KEY_DOMAIN_UPDATE_CONTACTS = 'contacts' as keyof DomainUpdate;
/**
 * Nameservers
 *
 * The new name servers for the domain
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `nameservers` property of DomainUpdate objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = domainupdate[KEY_DOMAIN_UPDATE_NAMESERVERS];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DOMAIN_UPDATE_NAMESERVERS;
 * const value = domainupdate[propertyName];
 * ```
 *
 * @see {@link DomainUpdate} - The TypeScript type definition
 * @see {@link KEYS_DOMAIN_UPDATE} - Array of all keys for this type
 */
export const KEY_DOMAIN_UPDATE_NAMESERVERS = 'nameservers' as keyof DomainUpdate;
/**
 * renewal_mode property
 *
 * The new renewal mode of the domain
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `renewal_mode` property of DomainUpdate objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = domainupdate[KEY_DOMAIN_UPDATE_RENEWAL_MODE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DOMAIN_UPDATE_RENEWAL_MODE;
 * const value = domainupdate[propertyName];
 * ```
 *
 * @see {@link DomainUpdate} - The TypeScript type definition
 * @see {@link KEYS_DOMAIN_UPDATE} - Array of all keys for this type
 */
export const KEY_DOMAIN_UPDATE_RENEWAL_MODE = 'renewal_mode' as keyof DomainUpdate;
/**
 * Statuses
 *
 * The new statuses of the domain
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `statuses` property of DomainUpdate objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = domainupdate[KEY_DOMAIN_UPDATE_STATUSES];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DOMAIN_UPDATE_STATUSES;
 * const value = domainupdate[propertyName];
 * ```
 *
 * @see {@link DomainUpdate} - The TypeScript type definition
 * @see {@link KEYS_DOMAIN_UPDATE} - Array of all keys for this type
 */
export const KEY_DOMAIN_UPDATE_STATUSES = 'statuses' as keyof DomainUpdate;

/**
 * Array of all DomainUpdate property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for DomainUpdate objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all keys
 * for (const key of KEYS_DOMAIN_UPDATE) {
 *   console.log(`Property: ${key}, Value: ${domainupdate[key]}`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_DOMAIN_UPDATE.includes(someKey);
 * ```
 *
 * @see {@link DomainUpdate} - The TypeScript type definition
 */
export const KEYS_DOMAIN_UPDATE = [
  KEY_DOMAIN_UPDATE_AUTH_CODE,
  KEY_DOMAIN_UPDATE_CONTACTS,
  KEY_DOMAIN_UPDATE_NAMESERVERS,
  KEY_DOMAIN_UPDATE_RENEWAL_MODE,
  KEY_DOMAIN_UPDATE_STATUSES,
] as const satisfies (keyof DomainUpdate)[];

/**
 * Next 30 Days
 *
 * Number of domains expiring in the next 30 days
 *
 * @type {integer}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `next_30_days` property of DomainsExpiringSoon objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = domainsexpiringsoon[KEY_DOMAINS_EXPIRING_SOON_NEXT_30_DAYS];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DOMAINS_EXPIRING_SOON_NEXT_30_DAYS;
 * const value = domainsexpiringsoon[propertyName];
 * ```
 *
 * @see {@link DomainsExpiringSoon} - The TypeScript type definition
 * @see {@link KEYS_DOMAINS_EXPIRING_SOON} - Array of all keys for this type
 */
export const KEY_DOMAINS_EXPIRING_SOON_NEXT_30_DAYS = 'next_30_days' as keyof DomainsExpiringSoon;
/**
 * Next 60 Days
 *
 * Number of domains expiring in the next 60 days
 *
 * @type {integer}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `next_60_days` property of DomainsExpiringSoon objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = domainsexpiringsoon[KEY_DOMAINS_EXPIRING_SOON_NEXT_60_DAYS];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DOMAINS_EXPIRING_SOON_NEXT_60_DAYS;
 * const value = domainsexpiringsoon[propertyName];
 * ```
 *
 * @see {@link DomainsExpiringSoon} - The TypeScript type definition
 * @see {@link KEYS_DOMAINS_EXPIRING_SOON} - Array of all keys for this type
 */
export const KEY_DOMAINS_EXPIRING_SOON_NEXT_60_DAYS = 'next_60_days' as keyof DomainsExpiringSoon;
/**
 * Next 90 Days
 *
 * Number of domains expiring in the next 90 days
 *
 * @type {integer}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `next_90_days` property of DomainsExpiringSoon objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = domainsexpiringsoon[KEY_DOMAINS_EXPIRING_SOON_NEXT_90_DAYS];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DOMAINS_EXPIRING_SOON_NEXT_90_DAYS;
 * const value = domainsexpiringsoon[propertyName];
 * ```
 *
 * @see {@link DomainsExpiringSoon} - The TypeScript type definition
 * @see {@link KEYS_DOMAINS_EXPIRING_SOON} - Array of all keys for this type
 */
export const KEY_DOMAINS_EXPIRING_SOON_NEXT_90_DAYS = 'next_90_days' as keyof DomainsExpiringSoon;

/**
 * Array of all DomainsExpiringSoon property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for DomainsExpiringSoon objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all keys
 * for (const key of KEYS_DOMAINS_EXPIRING_SOON) {
 *   console.log(`Property: ${key}, Value: ${domainsexpiringsoon[key]}`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_DOMAINS_EXPIRING_SOON.includes(someKey);
 * ```
 *
 * @see {@link DomainsExpiringSoon} - The TypeScript type definition
 */
export const KEYS_DOMAINS_EXPIRING_SOON = [
  KEY_DOMAINS_EXPIRING_SOON_NEXT_30_DAYS,
  KEY_DOMAINS_EXPIRING_SOON_NEXT_60_DAYS,
  KEY_DOMAINS_EXPIRING_SOON_NEXT_90_DAYS,
] as const satisfies (keyof DomainsExpiringSoon)[];

/**
 * Alias
 *
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `alias` property of EmailForwardAlias objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = emailforwardalias[KEY_EMAIL_FORWARD_ALIAS_ALIAS];
 * 
 * // Dynamic property access
 * const propertyName = KEY_EMAIL_FORWARD_ALIAS_ALIAS;
 * const value = emailforwardalias[propertyName];
 * ```
 *
 * @see {@link EmailForwardAlias} - The TypeScript type definition
 * @see {@link KEYS_EMAIL_FORWARD_ALIAS} - Array of all keys for this type
 */
export const KEY_EMAIL_FORWARD_ALIAS_ALIAS = 'alias' as keyof EmailForwardAlias;
/**
 * Forward To
 *
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `forward_to` property of EmailForwardAlias objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = emailforwardalias[KEY_EMAIL_FORWARD_ALIAS_FORWARD_TO];
 * 
 * // Dynamic property access
 * const propertyName = KEY_EMAIL_FORWARD_ALIAS_FORWARD_TO;
 * const value = emailforwardalias[propertyName];
 * ```
 *
 * @see {@link EmailForwardAlias} - The TypeScript type definition
 * @see {@link KEYS_EMAIL_FORWARD_ALIAS} - Array of all keys for this type
 */
export const KEY_EMAIL_FORWARD_ALIAS_FORWARD_TO = 'forward_to' as keyof EmailForwardAlias;

/**
 * Array of all EmailForwardAlias property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for EmailForwardAlias objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all keys
 * for (const key of KEYS_EMAIL_FORWARD_ALIAS) {
 *   console.log(`Property: ${key}, Value: ${emailforwardalias[key]}`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_EMAIL_FORWARD_ALIAS.includes(someKey);
 * ```
 *
 * @see {@link EmailForwardAlias} - The TypeScript type definition
 */
export const KEYS_EMAIL_FORWARD_ALIAS = [
  KEY_EMAIL_FORWARD_ALIAS_ALIAS,
  KEY_EMAIL_FORWARD_ALIAS_FORWARD_TO,
] as const satisfies (keyof EmailForwardAlias)[];

/**
 * Forward To
 *
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `forward_to` property of EmailForwardAliasUpdate objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = emailforwardaliasupdate[KEY_EMAIL_FORWARD_ALIAS_UPDATE_FORWARD_TO];
 * 
 * // Dynamic property access
 * const propertyName = KEY_EMAIL_FORWARD_ALIAS_UPDATE_FORWARD_TO;
 * const value = emailforwardaliasupdate[propertyName];
 * ```
 *
 * @see {@link EmailForwardAliasUpdate} - The TypeScript type definition
 * @see {@link KEYS_EMAIL_FORWARD_ALIAS_UPDATE} - Array of all keys for this type
 */
export const KEY_EMAIL_FORWARD_ALIAS_UPDATE_FORWARD_TO = 'forward_to' as keyof EmailForwardAliasUpdate;

/**
 * Array of all EmailForwardAliasUpdate property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for EmailForwardAliasUpdate objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all keys
 * for (const key of KEYS_EMAIL_FORWARD_ALIAS_UPDATE) {
 *   console.log(`Property: ${key}, Value: ${emailforwardaliasupdate[key]}`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_EMAIL_FORWARD_ALIAS_UPDATE.includes(someKey);
 * ```
 *
 * @see {@link EmailForwardAliasUpdate} - The TypeScript type definition
 */
export const KEYS_EMAIL_FORWARD_ALIAS_UPDATE = [
  KEY_EMAIL_FORWARD_ALIAS_UPDATE_FORWARD_TO,
] as const satisfies (keyof EmailForwardAliasUpdate)[];

/**
 * Event Data
 *
 *
 * @type {object}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `event_data` property of EventResponse objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = eventresponse[KEY_EVENT_RESPONSE_EVENT_DATA];
 * 
 * // Dynamic property access
 * const propertyName = KEY_EVENT_RESPONSE_EVENT_DATA;
 * const value = eventresponse[propertyName];
 * ```
 *
 * @see {@link EventResponse} - The TypeScript type definition
 * @see {@link KEYS_EVENT_RESPONSE} - Array of all keys for this type
 */
export const KEY_EVENT_RESPONSE_EVENT_DATA = 'event_data' as keyof EventResponse;
/**
 * Event Id
 *
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `event_id` property of EventResponse objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = eventresponse[KEY_EVENT_RESPONSE_EVENT_ID];
 * 
 * // Dynamic property access
 * const propertyName = KEY_EVENT_RESPONSE_EVENT_ID;
 * const value = eventresponse[propertyName];
 * ```
 *
 * @see {@link EventResponse} - The TypeScript type definition
 * @see {@link KEYS_EVENT_RESPONSE} - Array of all keys for this type
 */
export const KEY_EVENT_RESPONSE_EVENT_ID = 'event_id' as keyof EventResponse;
/**
 * Object Id
 *
 * The id of the object that the event is about
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `object_id` property of EventResponse objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = eventresponse[KEY_EVENT_RESPONSE_OBJECT_ID];
 * 
 * // Dynamic property access
 * const propertyName = KEY_EVENT_RESPONSE_OBJECT_ID;
 * const value = eventresponse[propertyName];
 * ```
 *
 * @see {@link EventResponse} - The TypeScript type definition
 * @see {@link KEYS_EVENT_RESPONSE} - Array of all keys for this type
 */
export const KEY_EVENT_RESPONSE_OBJECT_ID = 'object_id' as keyof EventResponse;
/**
 * object_type property
 *
 * The type of object that the event is about
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `object_type` property of EventResponse objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = eventresponse[KEY_EVENT_RESPONSE_OBJECT_TYPE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_EVENT_RESPONSE_OBJECT_TYPE;
 * const value = eventresponse[propertyName];
 * ```
 *
 * @see {@link EventResponse} - The TypeScript type definition
 * @see {@link KEYS_EVENT_RESPONSE} - Array of all keys for this type
 */
export const KEY_EVENT_RESPONSE_OBJECT_TYPE = 'object_type' as keyof EventResponse;
/**
 * subtype property
 *
 * The specific type/result of operation (considering the type property), more detailed (e.g., 'NOTIFICATION' with the 'DOMAIN_MODIFICATION' class)
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `subtype` property of EventResponse objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = eventresponse[KEY_EVENT_RESPONSE_SUBTYPE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_EVENT_RESPONSE_SUBTYPE;
 * const value = eventresponse[propertyName];
 * ```
 *
 * @see {@link EventResponse} - The TypeScript type definition
 * @see {@link KEYS_EVENT_RESPONSE} - Array of all keys for this type
 */
export const KEY_EVENT_RESPONSE_SUBTYPE = 'subtype' as keyof EventResponse;
/**
 * type property
 *
 * The type of the event - indicates the kind of operation occurring (e.g., 'ACCOUNT_CREATE', 'DOMAIN_MODIFICATION')
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `type` property of EventResponse objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = eventresponse[KEY_EVENT_RESPONSE_TYPE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_EVENT_RESPONSE_TYPE;
 * const value = eventresponse[propertyName];
 * ```
 *
 * @see {@link EventResponse} - The TypeScript type definition
 * @see {@link KEYS_EVENT_RESPONSE} - Array of all keys for this type
 */
export const KEY_EVENT_RESPONSE_TYPE = 'type' as keyof EventResponse;

/**
 * Array of all EventResponse property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for EventResponse objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all keys
 * for (const key of KEYS_EVENT_RESPONSE) {
 *   console.log(`Property: ${key}, Value: ${eventresponse[key]}`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_EVENT_RESPONSE.includes(someKey);
 * ```
 *
 * @see {@link EventResponse} - The TypeScript type definition
 */
export const KEYS_EVENT_RESPONSE = [
  KEY_EVENT_RESPONSE_EVENT_DATA,
  KEY_EVENT_RESPONSE_EVENT_ID,
  KEY_EVENT_RESPONSE_OBJECT_ID,
  KEY_EVENT_RESPONSE_OBJECT_TYPE,
  KEY_EVENT_RESPONSE_SUBTYPE,
  KEY_EVENT_RESPONSE_TYPE,
] as const satisfies (keyof EventResponse)[];

/**
 * Acknowledged On
 *
 * The date/time the event was acknowledged
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `acknowledged_on` property of EventSchema objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = eventschema[KEY_EVENT_SCHEMA_ACKNOWLEDGED_ON];
 * 
 * // Dynamic property access
 * const propertyName = KEY_EVENT_SCHEMA_ACKNOWLEDGED_ON;
 * const value = eventschema[propertyName];
 * ```
 *
 * @see {@link EventSchema} - The TypeScript type definition
 * @see {@link KEYS_EVENT_SCHEMA} - Array of all keys for this type
 */
export const KEY_EVENT_SCHEMA_ACKNOWLEDGED_ON = 'acknowledged_on' as keyof EventSchema;
/**
 * Created On
 *
 * The date/time the entry was created on
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `created_on` property of EventSchema objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = eventschema[KEY_EVENT_SCHEMA_CREATED_ON];
 * 
 * // Dynamic property access
 * const propertyName = KEY_EVENT_SCHEMA_CREATED_ON;
 * const value = eventschema[propertyName];
 * ```
 *
 * @see {@link EventSchema} - The TypeScript type definition
 * @see {@link KEYS_EVENT_SCHEMA} - Array of all keys for this type
 */
export const KEY_EVENT_SCHEMA_CREATED_ON = 'created_on' as keyof EventSchema;
/**
 * event_data property
 *
 * Additional details about the action
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `event_data` property of EventSchema objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = eventschema[KEY_EVENT_SCHEMA_EVENT_DATA];
 * 
 * // Dynamic property access
 * const propertyName = KEY_EVENT_SCHEMA_EVENT_DATA;
 * const value = eventschema[propertyName];
 * ```
 *
 * @see {@link EventSchema} - The TypeScript type definition
 * @see {@link KEYS_EVENT_SCHEMA} - Array of all keys for this type
 */
export const KEY_EVENT_SCHEMA_EVENT_DATA = 'event_data' as keyof EventSchema;
/**
 * Event Id
 *
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `event_id` property of EventSchema objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = eventschema[KEY_EVENT_SCHEMA_EVENT_ID];
 * 
 * // Dynamic property access
 * const propertyName = KEY_EVENT_SCHEMA_EVENT_ID;
 * const value = eventschema[propertyName];
 * ```
 *
 * @see {@link EventSchema} - The TypeScript type definition
 * @see {@link KEYS_EVENT_SCHEMA} - Array of all keys for this type
 */
export const KEY_EVENT_SCHEMA_EVENT_ID = 'event_id' as keyof EventSchema;
/**
 * Message Queue Id
 *
 * A composite key with the registry account + message queue ID from the poll operation.
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `message_queue_id` property of EventSchema objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = eventschema[KEY_EVENT_SCHEMA_MESSAGE_QUEUE_ID];
 * 
 * // Dynamic property access
 * const propertyName = KEY_EVENT_SCHEMA_MESSAGE_QUEUE_ID;
 * const value = eventschema[propertyName];
 * ```
 *
 * @see {@link EventSchema} - The TypeScript type definition
 * @see {@link KEYS_EVENT_SCHEMA} - Array of all keys for this type
 */
export const KEY_EVENT_SCHEMA_MESSAGE_QUEUE_ID = 'message_queue_id' as keyof EventSchema;
/**
 * Object Id
 *
 * The id of the object that the event is about
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `object_id` property of EventSchema objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = eventschema[KEY_EVENT_SCHEMA_OBJECT_ID];
 * 
 * // Dynamic property access
 * const propertyName = KEY_EVENT_SCHEMA_OBJECT_ID;
 * const value = eventschema[propertyName];
 * ```
 *
 * @see {@link EventSchema} - The TypeScript type definition
 * @see {@link KEYS_EVENT_SCHEMA} - Array of all keys for this type
 */
export const KEY_EVENT_SCHEMA_OBJECT_ID = 'object_id' as keyof EventSchema;
/**
 * object_type property
 *
 * The type of object that the event is about
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `object_type` property of EventSchema objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = eventschema[KEY_EVENT_SCHEMA_OBJECT_TYPE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_EVENT_SCHEMA_OBJECT_TYPE;
 * const value = eventschema[propertyName];
 * ```
 *
 * @see {@link EventSchema} - The TypeScript type definition
 * @see {@link KEYS_EVENT_SCHEMA} - Array of all keys for this type
 */
export const KEY_EVENT_SCHEMA_OBJECT_TYPE = 'object_type' as keyof EventSchema;
/**
 * Source
 *
 * The source of the event
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `source` property of EventSchema objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = eventschema[KEY_EVENT_SCHEMA_SOURCE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_EVENT_SCHEMA_SOURCE;
 * const value = eventschema[propertyName];
 * ```
 *
 * @see {@link EventSchema} - The TypeScript type definition
 * @see {@link KEYS_EVENT_SCHEMA} - Array of all keys for this type
 */
export const KEY_EVENT_SCHEMA_SOURCE = 'source' as keyof EventSchema;
/**
 * Source Event Id
 *
 * The reference of the original registry event (if any) that triggered this customer-facing event
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `source_event_id` property of EventSchema objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = eventschema[KEY_EVENT_SCHEMA_SOURCE_EVENT_ID];
 * 
 * // Dynamic property access
 * const propertyName = KEY_EVENT_SCHEMA_SOURCE_EVENT_ID;
 * const value = eventschema[propertyName];
 * ```
 *
 * @see {@link EventSchema} - The TypeScript type definition
 * @see {@link KEYS_EVENT_SCHEMA} - Array of all keys for this type
 */
export const KEY_EVENT_SCHEMA_SOURCE_EVENT_ID = 'source_event_id' as keyof EventSchema;
/**
 * subtype property
 *
 * The specific type/result of operation (considering the type property), more detailed (e.g., 'NOTIFICATION' with the 'DOMAIN_MODIFICATION' class)
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `subtype` property of EventSchema objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = eventschema[KEY_EVENT_SCHEMA_SUBTYPE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_EVENT_SCHEMA_SUBTYPE;
 * const value = eventschema[propertyName];
 * ```
 *
 * @see {@link EventSchema} - The TypeScript type definition
 * @see {@link KEYS_EVENT_SCHEMA} - Array of all keys for this type
 */
export const KEY_EVENT_SCHEMA_SUBTYPE = 'subtype' as keyof EventSchema;
/**
 * Target
 *
 * The target of the event
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `target` property of EventSchema objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = eventschema[KEY_EVENT_SCHEMA_TARGET];
 * 
 * // Dynamic property access
 * const propertyName = KEY_EVENT_SCHEMA_TARGET;
 * const value = eventschema[propertyName];
 * ```
 *
 * @see {@link EventSchema} - The TypeScript type definition
 * @see {@link KEYS_EVENT_SCHEMA} - Array of all keys for this type
 */
export const KEY_EVENT_SCHEMA_TARGET = 'target' as keyof EventSchema;
/**
 * type property
 *
 * The type of the event - indicates the kind of operation occurring (e.g., 'ACCOUNT_CREATE', 'DOMAIN_MODIFICATION')
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `type` property of EventSchema objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = eventschema[KEY_EVENT_SCHEMA_TYPE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_EVENT_SCHEMA_TYPE;
 * const value = eventschema[propertyName];
 * ```
 *
 * @see {@link EventSchema} - The TypeScript type definition
 * @see {@link KEYS_EVENT_SCHEMA} - Array of all keys for this type
 */
export const KEY_EVENT_SCHEMA_TYPE = 'type' as keyof EventSchema;

/**
 * Array of all EventSchema property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for EventSchema objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all keys
 * for (const key of KEYS_EVENT_SCHEMA) {
 *   console.log(`Property: ${key}, Value: ${eventschema[key]}`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_EVENT_SCHEMA.includes(someKey);
 * ```
 *
 * @see {@link EventSchema} - The TypeScript type definition
 */
export const KEYS_EVENT_SCHEMA = [
  KEY_EVENT_SCHEMA_ACKNOWLEDGED_ON,
  KEY_EVENT_SCHEMA_CREATED_ON,
  KEY_EVENT_SCHEMA_EVENT_DATA,
  KEY_EVENT_SCHEMA_EVENT_ID,
  KEY_EVENT_SCHEMA_MESSAGE_QUEUE_ID,
  KEY_EVENT_SCHEMA_OBJECT_ID,
  KEY_EVENT_SCHEMA_OBJECT_TYPE,
  KEY_EVENT_SCHEMA_SOURCE,
  KEY_EVENT_SCHEMA_SOURCE_EVENT_ID,
  KEY_EVENT_SCHEMA_SUBTYPE,
  KEY_EVENT_SCHEMA_TARGET,
  KEY_EVENT_SCHEMA_TYPE,
] as const satisfies (keyof EventSchema)[];

/**
 * Start Date
 *
 * Start date of general availability
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `start_date` property of GeneralAvailabilityBase objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = generalavailabilitybase[KEY_GENERAL_AVAILABILITY_BASE_START_DATE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_GENERAL_AVAILABILITY_BASE_START_DATE;
 * const value = generalavailabilitybase[propertyName];
 * ```
 *
 * @see {@link GeneralAvailabilityBase} - The TypeScript type definition
 * @see {@link KEYS_GENERAL_AVAILABILITY_BASE} - Array of all keys for this type
 */
export const KEY_GENERAL_AVAILABILITY_BASE_START_DATE = 'start_date' as keyof GeneralAvailabilityBase;

/**
 * Array of all GeneralAvailabilityBase property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for GeneralAvailabilityBase objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all keys
 * for (const key of KEYS_GENERAL_AVAILABILITY_BASE) {
 *   console.log(`Property: ${key}, Value: ${generalavailabilitybase[key]}`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_GENERAL_AVAILABILITY_BASE.includes(someKey);
 * ```
 *
 * @see {@link GeneralAvailabilityBase} - The TypeScript type definition
 */
export const KEYS_GENERAL_AVAILABILITY_BASE = [
  KEY_GENERAL_AVAILABILITY_BASE_START_DATE,
] as const satisfies (keyof GeneralAvailabilityBase)[];

/**
 * errors property
 *
 *
 * @type {array}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `errors` property of HTTPValidationError objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = httpvalidationerror[KEY_H_T_T_P_VALIDATION_ERROR_ERRORS];
 * 
 * // Dynamic property access
 * const propertyName = KEY_H_T_T_P_VALIDATION_ERROR_ERRORS;
 * const value = httpvalidationerror[propertyName];
 * ```
 *
 * @see {@link HTTPValidationError} - The TypeScript type definition
 * @see {@link KEYS_H_T_T_P_VALIDATION_ERROR} - Array of all keys for this type
 */
export const KEY_H_T_T_P_VALIDATION_ERROR_ERRORS = 'errors' as keyof HTTPValidationError;
/**
 * Status code
 *
 *
 * @type {integer}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `status` property of HTTPValidationError objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = httpvalidationerror[KEY_H_T_T_P_VALIDATION_ERROR_STATUS];
 * 
 * // Dynamic property access
 * const propertyName = KEY_H_T_T_P_VALIDATION_ERROR_STATUS;
 * const value = httpvalidationerror[propertyName];
 * ```
 *
 * @see {@link HTTPValidationError} - The TypeScript type definition
 * @see {@link KEYS_H_T_T_P_VALIDATION_ERROR} - Array of all keys for this type
 */
export const KEY_H_T_T_P_VALIDATION_ERROR_STATUS = 'status' as keyof HTTPValidationError;
/**
 * Problem Title
 *
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `title` property of HTTPValidationError objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = httpvalidationerror[KEY_H_T_T_P_VALIDATION_ERROR_TITLE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_H_T_T_P_VALIDATION_ERROR_TITLE;
 * const value = httpvalidationerror[propertyName];
 * ```
 *
 * @see {@link HTTPValidationError} - The TypeScript type definition
 * @see {@link KEYS_H_T_T_P_VALIDATION_ERROR} - Array of all keys for this type
 */
export const KEY_H_T_T_P_VALIDATION_ERROR_TITLE = 'title' as keyof HTTPValidationError;
/**
 * Problem type
 *
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `type` property of HTTPValidationError objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = httpvalidationerror[KEY_H_T_T_P_VALIDATION_ERROR_TYPE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_H_T_T_P_VALIDATION_ERROR_TYPE;
 * const value = httpvalidationerror[propertyName];
 * ```
 *
 * @see {@link HTTPValidationError} - The TypeScript type definition
 * @see {@link KEYS_H_T_T_P_VALIDATION_ERROR} - Array of all keys for this type
 */
export const KEY_H_T_T_P_VALIDATION_ERROR_TYPE = 'type' as keyof HTTPValidationError;

/**
 * Array of all HTTPValidationError property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for HTTPValidationError objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all keys
 * for (const key of KEYS_H_T_T_P_VALIDATION_ERROR) {
 *   console.log(`Property: ${key}, Value: ${httpvalidationerror[key]}`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_H_T_T_P_VALIDATION_ERROR.includes(someKey);
 * ```
 *
 * @see {@link HTTPValidationError} - The TypeScript type definition
 */
export const KEYS_H_T_T_P_VALIDATION_ERROR = [
  KEY_H_T_T_P_VALIDATION_ERROR_ERRORS,
  KEY_H_T_T_P_VALIDATION_ERROR_STATUS,
  KEY_H_T_T_P_VALIDATION_ERROR_TITLE,
  KEY_H_T_T_P_VALIDATION_ERROR_TYPE,
] as const satisfies (keyof HTTPValidationError)[];

/**
 * Idn Capable
 *
 * IDN allowed
 *
 * @type {boolean}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `idn_capable` property of IdnBase objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = idnbase[KEY_IDN_BASE_IDN_CAPABLE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_IDN_BASE_IDN_CAPABLE;
 * const value = idnbase[propertyName];
 * ```
 *
 * @see {@link IdnBase} - The TypeScript type definition
 * @see {@link KEYS_IDN_BASE} - Array of all keys for this type
 */
export const KEY_IDN_BASE_IDN_CAPABLE = 'idn_capable' as keyof IdnBase;
/**
 * Idn Tables
 *
 * Allowed IDN characters, file with the IDN codes
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `idn_tables` property of IdnBase objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = idnbase[KEY_IDN_BASE_IDN_TABLES];
 * 
 * // Dynamic property access
 * const propertyName = KEY_IDN_BASE_IDN_TABLES;
 * const value = idnbase[propertyName];
 * ```
 *
 * @see {@link IdnBase} - The TypeScript type definition
 * @see {@link KEYS_IDN_BASE} - Array of all keys for this type
 */
export const KEY_IDN_BASE_IDN_TABLES = 'idn_tables' as keyof IdnBase;

/**
 * Array of all IdnBase property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for IdnBase objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all keys
 * for (const key of KEYS_IDN_BASE) {
 *   console.log(`Property: ${key}, Value: ${idnbase[key]}`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_IDN_BASE.includes(someKey);
 * ```
 *
 * @see {@link IdnBase} - The TypeScript type definition
 */
export const KEYS_IDN_BASE = [
  KEY_IDN_BASE_IDN_CAPABLE,
  KEY_IDN_BASE_IDN_TABLES,
] as const satisfies (keyof IdnBase)[];

/**
 * Ip Network
 *
 * IP address or CIDR range for the restriction.
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `ip_network` property of IpRestrictionCreate objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = iprestrictioncreate[KEY_IP_RESTRICTION_CREATE_IP_NETWORK];
 * 
 * // Dynamic property access
 * const propertyName = KEY_IP_RESTRICTION_CREATE_IP_NETWORK;
 * const value = iprestrictioncreate[propertyName];
 * ```
 *
 * @see {@link IpRestrictionCreate} - The TypeScript type definition
 * @see {@link KEYS_IP_RESTRICTION_CREATE} - Array of all keys for this type
 */
export const KEY_IP_RESTRICTION_CREATE_IP_NETWORK = 'ip_network' as keyof IpRestrictionCreate;
/**
 * Organization Id
 *
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `organization_id` property of IpRestrictionCreate objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = iprestrictioncreate[KEY_IP_RESTRICTION_CREATE_ORGANIZATION_ID];
 * 
 * // Dynamic property access
 * const propertyName = KEY_IP_RESTRICTION_CREATE_ORGANIZATION_ID;
 * const value = iprestrictioncreate[propertyName];
 * ```
 *
 * @see {@link IpRestrictionCreate} - The TypeScript type definition
 * @see {@link KEYS_IP_RESTRICTION_CREATE} - Array of all keys for this type
 */
export const KEY_IP_RESTRICTION_CREATE_ORGANIZATION_ID = 'organization_id' as keyof IpRestrictionCreate;

/**
 * Array of all IpRestrictionCreate property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for IpRestrictionCreate objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all keys
 * for (const key of KEYS_IP_RESTRICTION_CREATE) {
 *   console.log(`Property: ${key}, Value: ${iprestrictioncreate[key]}`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_IP_RESTRICTION_CREATE.includes(someKey);
 * ```
 *
 * @see {@link IpRestrictionCreate} - The TypeScript type definition
 */
export const KEYS_IP_RESTRICTION_CREATE = [
  KEY_IP_RESTRICTION_CREATE_IP_NETWORK,
  KEY_IP_RESTRICTION_CREATE_ORGANIZATION_ID,
] as const satisfies (keyof IpRestrictionCreate)[];

/**
 * Created On
 *
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `created_on` property of IpRestriction objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = iprestriction[KEY_IP_RESTRICTION_CREATED_ON];
 * 
 * // Dynamic property access
 * const propertyName = KEY_IP_RESTRICTION_CREATED_ON;
 * const value = iprestriction[propertyName];
 * ```
 *
 * @see {@link IpRestriction} - The TypeScript type definition
 * @see {@link KEYS_IP_RESTRICTION} - Array of all keys for this type
 */
export const KEY_IP_RESTRICTION_CREATED_ON = 'created_on' as keyof IpRestriction;
/**
 * Ip Network
 *
 * IP address or CIDR range for the restriction.
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `ip_network` property of IpRestriction objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = iprestriction[KEY_IP_RESTRICTION_IP_NETWORK];
 * 
 * // Dynamic property access
 * const propertyName = KEY_IP_RESTRICTION_IP_NETWORK;
 * const value = iprestriction[propertyName];
 * ```
 *
 * @see {@link IpRestriction} - The TypeScript type definition
 * @see {@link KEYS_IP_RESTRICTION} - Array of all keys for this type
 */
export const KEY_IP_RESTRICTION_IP_NETWORK = 'ip_network' as keyof IpRestriction;
/**
 * Ip Restriction Id
 *
 *
 * @type {integer}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `ip_restriction_id` property of IpRestriction objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = iprestriction[KEY_IP_RESTRICTION_IP_RESTRICTION_ID];
 * 
 * // Dynamic property access
 * const propertyName = KEY_IP_RESTRICTION_IP_RESTRICTION_ID;
 * const value = iprestriction[propertyName];
 * ```
 *
 * @see {@link IpRestriction} - The TypeScript type definition
 * @see {@link KEYS_IP_RESTRICTION} - Array of all keys for this type
 */
export const KEY_IP_RESTRICTION_IP_RESTRICTION_ID = 'ip_restriction_id' as keyof IpRestriction;
/**
 * Last Used On
 *
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `last_used_on` property of IpRestriction objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = iprestriction[KEY_IP_RESTRICTION_LAST_USED_ON];
 * 
 * // Dynamic property access
 * const propertyName = KEY_IP_RESTRICTION_LAST_USED_ON;
 * const value = iprestriction[propertyName];
 * ```
 *
 * @see {@link IpRestriction} - The TypeScript type definition
 * @see {@link KEYS_IP_RESTRICTION} - Array of all keys for this type
 */
export const KEY_IP_RESTRICTION_LAST_USED_ON = 'last_used_on' as keyof IpRestriction;
/**
 * Organization Id
 *
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `organization_id` property of IpRestriction objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = iprestriction[KEY_IP_RESTRICTION_ORGANIZATION_ID];
 * 
 * // Dynamic property access
 * const propertyName = KEY_IP_RESTRICTION_ORGANIZATION_ID;
 * const value = iprestriction[propertyName];
 * ```
 *
 * @see {@link IpRestriction} - The TypeScript type definition
 * @see {@link KEYS_IP_RESTRICTION} - Array of all keys for this type
 */
export const KEY_IP_RESTRICTION_ORGANIZATION_ID = 'organization_id' as keyof IpRestriction;

/**
 * Array of all IpRestriction property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for IpRestriction objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all keys
 * for (const key of KEYS_IP_RESTRICTION) {
 *   console.log(`Property: ${key}, Value: ${iprestriction[key]}`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_IP_RESTRICTION.includes(someKey);
 * ```
 *
 * @see {@link IpRestriction} - The TypeScript type definition
 */
export const KEYS_IP_RESTRICTION = [
  KEY_IP_RESTRICTION_CREATED_ON,
  KEY_IP_RESTRICTION_IP_NETWORK,
  KEY_IP_RESTRICTION_IP_RESTRICTION_ID,
  KEY_IP_RESTRICTION_LAST_USED_ON,
  KEY_IP_RESTRICTION_ORGANIZATION_ID,
] as const satisfies (keyof IpRestriction)[];

/**
 * Ip Network
 *
 * IP address or CIDR range for the restriction.
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `ip_network` property of IpRestrictionUpdate objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = iprestrictionupdate[KEY_IP_RESTRICTION_UPDATE_IP_NETWORK];
 * 
 * // Dynamic property access
 * const propertyName = KEY_IP_RESTRICTION_UPDATE_IP_NETWORK;
 * const value = iprestrictionupdate[propertyName];
 * ```
 *
 * @see {@link IpRestrictionUpdate} - The TypeScript type definition
 * @see {@link KEYS_IP_RESTRICTION_UPDATE} - Array of all keys for this type
 */
export const KEY_IP_RESTRICTION_UPDATE_IP_NETWORK = 'ip_network' as keyof IpRestrictionUpdate;
/**
 * Last Used On
 *
 * Timestamp of the last usage.
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `last_used_on` property of IpRestrictionUpdate objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = iprestrictionupdate[KEY_IP_RESTRICTION_UPDATE_LAST_USED_ON];
 * 
 * // Dynamic property access
 * const propertyName = KEY_IP_RESTRICTION_UPDATE_LAST_USED_ON;
 * const value = iprestrictionupdate[propertyName];
 * ```
 *
 * @see {@link IpRestrictionUpdate} - The TypeScript type definition
 * @see {@link KEYS_IP_RESTRICTION_UPDATE} - Array of all keys for this type
 */
export const KEY_IP_RESTRICTION_UPDATE_LAST_USED_ON = 'last_used_on' as keyof IpRestrictionUpdate;

/**
 * Array of all IpRestrictionUpdate property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for IpRestrictionUpdate objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all keys
 * for (const key of KEYS_IP_RESTRICTION_UPDATE) {
 *   console.log(`Property: ${key}, Value: ${iprestrictionupdate[key]}`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_IP_RESTRICTION_UPDATE.includes(someKey);
 * ```
 *
 * @see {@link IpRestrictionUpdate} - The TypeScript type definition
 */
export const KEYS_IP_RESTRICTION_UPDATE = [
  KEY_IP_RESTRICTION_UPDATE_IP_NETWORK,
  KEY_IP_RESTRICTION_UPDATE_LAST_USED_ON,
] as const satisfies (keyof IpRestrictionUpdate)[];

/**
 * allocation property
 *
 * Allocation method
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `allocation` property of LaunchPhaseBase objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = launchphasebase[KEY_LAUNCH_PHASE_BASE_ALLOCATION];
 * 
 * // Dynamic property access
 * const propertyName = KEY_LAUNCH_PHASE_BASE_ALLOCATION;
 * const value = launchphasebase[propertyName];
 * ```
 *
 * @see {@link LaunchPhaseBase} - The TypeScript type definition
 * @see {@link KEYS_LAUNCH_PHASE_BASE} - Array of all keys for this type
 */
export const KEY_LAUNCH_PHASE_BASE_ALLOCATION = 'allocation' as keyof LaunchPhaseBase;
/**
 * End Date
 *
 * End date of the phase
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `end_date` property of LaunchPhaseBase objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = launchphasebase[KEY_LAUNCH_PHASE_BASE_END_DATE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_LAUNCH_PHASE_BASE_END_DATE;
 * const value = launchphasebase[propertyName];
 * ```
 *
 * @see {@link LaunchPhaseBase} - The TypeScript type definition
 * @see {@link KEYS_LAUNCH_PHASE_BASE} - Array of all keys for this type
 */
export const KEY_LAUNCH_PHASE_BASE_END_DATE = 'end_date' as keyof LaunchPhaseBase;
/**
 * Smd Required
 *
 * Whether an SMD file is required for participation
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `smd_required` property of LaunchPhaseBase objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = launchphasebase[KEY_LAUNCH_PHASE_BASE_SMD_REQUIRED];
 * 
 * // Dynamic property access
 * const propertyName = KEY_LAUNCH_PHASE_BASE_SMD_REQUIRED;
 * const value = launchphasebase[propertyName];
 * ```
 *
 * @see {@link LaunchPhaseBase} - The TypeScript type definition
 * @see {@link KEYS_LAUNCH_PHASE_BASE} - Array of all keys for this type
 */
export const KEY_LAUNCH_PHASE_BASE_SMD_REQUIRED = 'smd_required' as keyof LaunchPhaseBase;
/**
 * Start Date
 *
 * Start date of the phase
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `start_date` property of LaunchPhaseBase objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = launchphasebase[KEY_LAUNCH_PHASE_BASE_START_DATE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_LAUNCH_PHASE_BASE_START_DATE;
 * const value = launchphasebase[propertyName];
 * ```
 *
 * @see {@link LaunchPhaseBase} - The TypeScript type definition
 * @see {@link KEYS_LAUNCH_PHASE_BASE} - Array of all keys for this type
 */
export const KEY_LAUNCH_PHASE_BASE_START_DATE = 'start_date' as keyof LaunchPhaseBase;
/**
 * Supported
 *
 * Whether this phase is supported
 *
 * @type {boolean}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `supported` property of LaunchPhaseBase objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = launchphasebase[KEY_LAUNCH_PHASE_BASE_SUPPORTED];
 * 
 * // Dynamic property access
 * const propertyName = KEY_LAUNCH_PHASE_BASE_SUPPORTED;
 * const value = launchphasebase[propertyName];
 * ```
 *
 * @see {@link LaunchPhaseBase} - The TypeScript type definition
 * @see {@link KEYS_LAUNCH_PHASE_BASE} - Array of all keys for this type
 */
export const KEY_LAUNCH_PHASE_BASE_SUPPORTED = 'supported' as keyof LaunchPhaseBase;
/**
 * type property
 *
 * Type of launch phase
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `type` property of LaunchPhaseBase objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = launchphasebase[KEY_LAUNCH_PHASE_BASE_TYPE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_LAUNCH_PHASE_BASE_TYPE;
 * const value = launchphasebase[propertyName];
 * ```
 *
 * @see {@link LaunchPhaseBase} - The TypeScript type definition
 * @see {@link KEYS_LAUNCH_PHASE_BASE} - Array of all keys for this type
 */
export const KEY_LAUNCH_PHASE_BASE_TYPE = 'type' as keyof LaunchPhaseBase;

/**
 * Array of all LaunchPhaseBase property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for LaunchPhaseBase objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all keys
 * for (const key of KEYS_LAUNCH_PHASE_BASE) {
 *   console.log(`Property: ${key}, Value: ${launchphasebase[key]}`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_LAUNCH_PHASE_BASE.includes(someKey);
 * ```
 *
 * @see {@link LaunchPhaseBase} - The TypeScript type definition
 */
export const KEYS_LAUNCH_PHASE_BASE = [
  KEY_LAUNCH_PHASE_BASE_ALLOCATION,
  KEY_LAUNCH_PHASE_BASE_END_DATE,
  KEY_LAUNCH_PHASE_BASE_SMD_REQUIRED,
  KEY_LAUNCH_PHASE_BASE_START_DATE,
  KEY_LAUNCH_PHASE_BASE_SUPPORTED,
  KEY_LAUNCH_PHASE_BASE_TYPE,
] as const satisfies (keyof LaunchPhaseBase)[];

/**
 * general_availability property
 *
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `general_availability` property of LaunchPhasesBase objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = launchphasesbase[KEY_LAUNCH_PHASES_BASE_GENERAL_AVAILABILITY];
 * 
 * // Dynamic property access
 * const propertyName = KEY_LAUNCH_PHASES_BASE_GENERAL_AVAILABILITY;
 * const value = launchphasesbase[propertyName];
 * ```
 *
 * @see {@link LaunchPhasesBase} - The TypeScript type definition
 * @see {@link KEYS_LAUNCH_PHASES_BASE} - Array of all keys for this type
 */
export const KEY_LAUNCH_PHASES_BASE_GENERAL_AVAILABILITY = 'general_availability' as keyof LaunchPhasesBase;
/**
 * Phases
 *
 *
 * @type {array}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `phases` property of LaunchPhasesBase objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = launchphasesbase[KEY_LAUNCH_PHASES_BASE_PHASES];
 * 
 * // Dynamic property access
 * const propertyName = KEY_LAUNCH_PHASES_BASE_PHASES;
 * const value = launchphasesbase[propertyName];
 * ```
 *
 * @see {@link LaunchPhasesBase} - The TypeScript type definition
 * @see {@link KEYS_LAUNCH_PHASES_BASE} - Array of all keys for this type
 */
export const KEY_LAUNCH_PHASES_BASE_PHASES = 'phases' as keyof LaunchPhasesBase;
/**
 * trademark_claims property
 *
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `trademark_claims` property of LaunchPhasesBase objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = launchphasesbase[KEY_LAUNCH_PHASES_BASE_TRADEMARK_CLAIMS];
 * 
 * // Dynamic property access
 * const propertyName = KEY_LAUNCH_PHASES_BASE_TRADEMARK_CLAIMS;
 * const value = launchphasesbase[propertyName];
 * ```
 *
 * @see {@link LaunchPhasesBase} - The TypeScript type definition
 * @see {@link KEYS_LAUNCH_PHASES_BASE} - Array of all keys for this type
 */
export const KEY_LAUNCH_PHASES_BASE_TRADEMARK_CLAIMS = 'trademark_claims' as keyof LaunchPhasesBase;

/**
 * Array of all LaunchPhasesBase property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for LaunchPhasesBase objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all keys
 * for (const key of KEYS_LAUNCH_PHASES_BASE) {
 *   console.log(`Property: ${key}, Value: ${launchphasesbase[key]}`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_LAUNCH_PHASES_BASE.includes(someKey);
 * ```
 *
 * @see {@link LaunchPhasesBase} - The TypeScript type definition
 */
export const KEYS_LAUNCH_PHASES_BASE = [
  KEY_LAUNCH_PHASES_BASE_GENERAL_AVAILABILITY,
  KEY_LAUNCH_PHASES_BASE_PHASES,
  KEY_LAUNCH_PHASES_BASE_TRADEMARK_CLAIMS,
] as const satisfies (keyof LaunchPhasesBase)[];

/**
 * Eligible Countries
 *
 * ISO 3166-1 Alpha-2 country code
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `eligible_countries` property of LocalPresenceBase objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = localpresencebase[KEY_LOCAL_PRESENCE_BASE_ELIGIBLE_COUNTRIES];
 * 
 * // Dynamic property access
 * const propertyName = KEY_LOCAL_PRESENCE_BASE_ELIGIBLE_COUNTRIES;
 * const value = localpresencebase[propertyName];
 * ```
 *
 * @see {@link LocalPresenceBase} - The TypeScript type definition
 * @see {@link KEYS_LOCAL_PRESENCE_BASE} - Array of all keys for this type
 */
export const KEY_LOCAL_PRESENCE_BASE_ELIGIBLE_COUNTRIES = 'eligible_countries' as keyof LocalPresenceBase;
/**
 * Required
 *
 * Whether a local presence is required to register and maintain a domain name
 *
 * @type {boolean}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `required` property of LocalPresenceBase objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = localpresencebase[KEY_LOCAL_PRESENCE_BASE_REQUIRED];
 * 
 * // Dynamic property access
 * const propertyName = KEY_LOCAL_PRESENCE_BASE_REQUIRED;
 * const value = localpresencebase[propertyName];
 * ```
 *
 * @see {@link LocalPresenceBase} - The TypeScript type definition
 * @see {@link KEYS_LOCAL_PRESENCE_BASE} - Array of all keys for this type
 */
export const KEY_LOCAL_PRESENCE_BASE_REQUIRED = 'required' as keyof LocalPresenceBase;
/**
 * Requirement
 *
 * Type of local presence requirement
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `requirement` property of LocalPresenceBase objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = localpresencebase[KEY_LOCAL_PRESENCE_BASE_REQUIREMENT];
 * 
 * // Dynamic property access
 * const propertyName = KEY_LOCAL_PRESENCE_BASE_REQUIREMENT;
 * const value = localpresencebase[propertyName];
 * ```
 *
 * @see {@link LocalPresenceBase} - The TypeScript type definition
 * @see {@link KEYS_LOCAL_PRESENCE_BASE} - Array of all keys for this type
 */
export const KEY_LOCAL_PRESENCE_BASE_REQUIREMENT = 'requirement' as keyof LocalPresenceBase;
/**
 * Type
 *
 * Who must meet the requirement
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `type` property of LocalPresenceBase objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = localpresencebase[KEY_LOCAL_PRESENCE_BASE_TYPE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_LOCAL_PRESENCE_BASE_TYPE;
 * const value = localpresencebase[propertyName];
 * ```
 *
 * @see {@link LocalPresenceBase} - The TypeScript type definition
 * @see {@link KEYS_LOCAL_PRESENCE_BASE} - Array of all keys for this type
 */
export const KEY_LOCAL_PRESENCE_BASE_TYPE = 'type' as keyof LocalPresenceBase;

/**
 * Array of all LocalPresenceBase property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for LocalPresenceBase objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all keys
 * for (const key of KEYS_LOCAL_PRESENCE_BASE) {
 *   console.log(`Property: ${key}, Value: ${localpresencebase[key]}`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_LOCAL_PRESENCE_BASE.includes(someKey);
 * ```
 *
 * @see {@link LocalPresenceBase} - The TypeScript type definition
 */
export const KEYS_LOCAL_PRESENCE_BASE = [
  KEY_LOCAL_PRESENCE_BASE_ELIGIBLE_COUNTRIES,
  KEY_LOCAL_PRESENCE_BASE_REQUIRED,
  KEY_LOCAL_PRESENCE_BASE_REQUIREMENT,
  KEY_LOCAL_PRESENCE_BASE_TYPE,
] as const satisfies (keyof LocalPresenceBase)[];

/**
 * Hostname
 *
 * The name server of the domain
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `hostname` property of Nameserver objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = nameserver[KEY_NAMESERVER_HOSTNAME];
 * 
 * // Dynamic property access
 * const propertyName = KEY_NAMESERVER_HOSTNAME;
 * const value = nameserver[propertyName];
 * ```
 *
 * @see {@link Nameserver} - The TypeScript type definition
 * @see {@link KEYS_NAMESERVER} - Array of all keys for this type
 */
export const KEY_NAMESERVER_HOSTNAME = 'hostname' as keyof Nameserver;
/**
 * Ip Addresses
 *
 * The ip addresses of the name server
 *
 * @type {array}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `ip_addresses` property of Nameserver objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = nameserver[KEY_NAMESERVER_IP_ADDRESSES];
 * 
 * // Dynamic property access
 * const propertyName = KEY_NAMESERVER_IP_ADDRESSES;
 * const value = nameserver[propertyName];
 * ```
 *
 * @see {@link Nameserver} - The TypeScript type definition
 * @see {@link KEYS_NAMESERVER} - Array of all keys for this type
 */
export const KEY_NAMESERVER_IP_ADDRESSES = 'ip_addresses' as keyof Nameserver;

/**
 * Array of all Nameserver property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for Nameserver objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all keys
 * for (const key of KEYS_NAMESERVER) {
 *   console.log(`Property: ${key}, Value: ${nameserver[key]}`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_NAMESERVER.includes(someKey);
 * ```
 *
 * @see {@link Nameserver} - The TypeScript type definition
 */
export const KEYS_NAMESERVER = [
  KEY_NAMESERVER_HOSTNAME,
  KEY_NAMESERVER_IP_ADDRESSES,
] as const satisfies (keyof Nameserver)[];

/**
 * Author
 *
 * The user or system that created the notification
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `author` property of Notification objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = notification[KEY_NOTIFICATION_AUTHOR];
 * 
 * // Dynamic property access
 * const propertyName = KEY_NOTIFICATION_AUTHOR;
 * const value = notification[propertyName];
 * ```
 *
 * @see {@link Notification} - The TypeScript type definition
 * @see {@link KEYS_NOTIFICATION} - Array of all keys for this type
 */
export const KEY_NOTIFICATION_AUTHOR = 'author' as keyof Notification;
/**
 * Created On
 *
 * The date/time the entry was created on
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `created_on` property of Notification objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = notification[KEY_NOTIFICATION_CREATED_ON];
 * 
 * // Dynamic property access
 * const propertyName = KEY_NOTIFICATION_CREATED_ON;
 * const value = notification[propertyName];
 * ```
 *
 * @see {@link Notification} - The TypeScript type definition
 * @see {@link KEYS_NOTIFICATION} - Array of all keys for this type
 */
export const KEY_NOTIFICATION_CREATED_ON = 'created_on' as keyof Notification;
/**
 * Message
 *
 * The message content of the notification
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `message` property of Notification objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = notification[KEY_NOTIFICATION_MESSAGE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_NOTIFICATION_MESSAGE;
 * const value = notification[propertyName];
 * ```
 *
 * @see {@link Notification} - The TypeScript type definition
 * @see {@link KEYS_NOTIFICATION} - Array of all keys for this type
 */
export const KEY_NOTIFICATION_MESSAGE = 'message' as keyof Notification;
/**
 * Notification Id
 *
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `notification_id` property of Notification objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = notification[KEY_NOTIFICATION_NOTIFICATION_ID];
 * 
 * // Dynamic property access
 * const propertyName = KEY_NOTIFICATION_NOTIFICATION_ID;
 * const value = notification[propertyName];
 * ```
 *
 * @see {@link Notification} - The TypeScript type definition
 * @see {@link KEYS_NOTIFICATION} - Array of all keys for this type
 */
export const KEY_NOTIFICATION_NOTIFICATION_ID = 'notification_id' as keyof Notification;
/**
 * Publish Date
 *
 * The date/time the notification is to be published
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `publish_date` property of Notification objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = notification[KEY_NOTIFICATION_PUBLISH_DATE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_NOTIFICATION_PUBLISH_DATE;
 * const value = notification[propertyName];
 * ```
 *
 * @see {@link Notification} - The TypeScript type definition
 * @see {@link KEYS_NOTIFICATION} - Array of all keys for this type
 */
export const KEY_NOTIFICATION_PUBLISH_DATE = 'publish_date' as keyof Notification;
/**
 * Source
 *
 * Source of the notification
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `source` property of Notification objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = notification[KEY_NOTIFICATION_SOURCE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_NOTIFICATION_SOURCE;
 * const value = notification[propertyName];
 * ```
 *
 * @see {@link Notification} - The TypeScript type definition
 * @see {@link KEYS_NOTIFICATION} - Array of all keys for this type
 */
export const KEY_NOTIFICATION_SOURCE = 'source' as keyof Notification;
/**
 * Subject
 *
 * The subject of the notification
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `subject` property of Notification objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = notification[KEY_NOTIFICATION_SUBJECT];
 * 
 * // Dynamic property access
 * const propertyName = KEY_NOTIFICATION_SUBJECT;
 * const value = notification[propertyName];
 * ```
 *
 * @see {@link Notification} - The TypeScript type definition
 * @see {@link KEYS_NOTIFICATION} - Array of all keys for this type
 */
export const KEY_NOTIFICATION_SUBJECT = 'subject' as keyof Notification;
/**
 * Target
 *
 * Target audience (broadcast, account, user)
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `target` property of Notification objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = notification[KEY_NOTIFICATION_TARGET];
 * 
 * // Dynamic property access
 * const propertyName = KEY_NOTIFICATION_TARGET;
 * const value = notification[propertyName];
 * ```
 *
 * @see {@link Notification} - The TypeScript type definition
 * @see {@link KEYS_NOTIFICATION} - Array of all keys for this type
 */
export const KEY_NOTIFICATION_TARGET = 'target' as keyof Notification;
/**
 * Type
 *
 * The type of notification
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `type` property of Notification objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = notification[KEY_NOTIFICATION_TYPE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_NOTIFICATION_TYPE;
 * const value = notification[propertyName];
 * ```
 *
 * @see {@link Notification} - The TypeScript type definition
 * @see {@link KEYS_NOTIFICATION} - Array of all keys for this type
 */
export const KEY_NOTIFICATION_TYPE = 'type' as keyof Notification;
/**
 * Updated On
 *
 * The date/time the entry was last updated on
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `updated_on` property of Notification objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = notification[KEY_NOTIFICATION_UPDATED_ON];
 * 
 * // Dynamic property access
 * const propertyName = KEY_NOTIFICATION_UPDATED_ON;
 * const value = notification[propertyName];
 * ```
 *
 * @see {@link Notification} - The TypeScript type definition
 * @see {@link KEYS_NOTIFICATION} - Array of all keys for this type
 */
export const KEY_NOTIFICATION_UPDATED_ON = 'updated_on' as keyof Notification;

/**
 * Array of all Notification property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for Notification objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all keys
 * for (const key of KEYS_NOTIFICATION) {
 *   console.log(`Property: ${key}, Value: ${notification[key]}`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_NOTIFICATION.includes(someKey);
 * ```
 *
 * @see {@link Notification} - The TypeScript type definition
 */
export const KEYS_NOTIFICATION = [
  KEY_NOTIFICATION_AUTHOR,
  KEY_NOTIFICATION_CREATED_ON,
  KEY_NOTIFICATION_MESSAGE,
  KEY_NOTIFICATION_NOTIFICATION_ID,
  KEY_NOTIFICATION_PUBLISH_DATE,
  KEY_NOTIFICATION_SOURCE,
  KEY_NOTIFICATION_SUBJECT,
  KEY_NOTIFICATION_TARGET,
  KEY_NOTIFICATION_TYPE,
  KEY_NOTIFICATION_UPDATED_ON,
] as const satisfies (keyof Notification)[];

/**
 * Author
 *
 * The user or system that created the notification
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `author` property of NotificationCreate objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = notificationcreate[KEY_NOTIFICATION_CREATE_AUTHOR];
 * 
 * // Dynamic property access
 * const propertyName = KEY_NOTIFICATION_CREATE_AUTHOR;
 * const value = notificationcreate[propertyName];
 * ```
 *
 * @see {@link NotificationCreate} - The TypeScript type definition
 * @see {@link KEYS_NOTIFICATION_CREATE} - Array of all keys for this type
 */
export const KEY_NOTIFICATION_CREATE_AUTHOR = 'author' as keyof NotificationCreate;
/**
 * Message
 *
 * The message content of the notification
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `message` property of NotificationCreate objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = notificationcreate[KEY_NOTIFICATION_CREATE_MESSAGE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_NOTIFICATION_CREATE_MESSAGE;
 * const value = notificationcreate[propertyName];
 * ```
 *
 * @see {@link NotificationCreate} - The TypeScript type definition
 * @see {@link KEYS_NOTIFICATION_CREATE} - Array of all keys for this type
 */
export const KEY_NOTIFICATION_CREATE_MESSAGE = 'message' as keyof NotificationCreate;
/**
 * Publish Date
 *
 * The date/time the notification is to be published
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `publish_date` property of NotificationCreate objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = notificationcreate[KEY_NOTIFICATION_CREATE_PUBLISH_DATE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_NOTIFICATION_CREATE_PUBLISH_DATE;
 * const value = notificationcreate[propertyName];
 * ```
 *
 * @see {@link NotificationCreate} - The TypeScript type definition
 * @see {@link KEYS_NOTIFICATION_CREATE} - Array of all keys for this type
 */
export const KEY_NOTIFICATION_CREATE_PUBLISH_DATE = 'publish_date' as keyof NotificationCreate;
/**
 * Source
 *
 * Source of the notification
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `source` property of NotificationCreate objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = notificationcreate[KEY_NOTIFICATION_CREATE_SOURCE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_NOTIFICATION_CREATE_SOURCE;
 * const value = notificationcreate[propertyName];
 * ```
 *
 * @see {@link NotificationCreate} - The TypeScript type definition
 * @see {@link KEYS_NOTIFICATION_CREATE} - Array of all keys for this type
 */
export const KEY_NOTIFICATION_CREATE_SOURCE = 'source' as keyof NotificationCreate;
/**
 * Subject
 *
 * The subject of the notification
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `subject` property of NotificationCreate objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = notificationcreate[KEY_NOTIFICATION_CREATE_SUBJECT];
 * 
 * // Dynamic property access
 * const propertyName = KEY_NOTIFICATION_CREATE_SUBJECT;
 * const value = notificationcreate[propertyName];
 * ```
 *
 * @see {@link NotificationCreate} - The TypeScript type definition
 * @see {@link KEYS_NOTIFICATION_CREATE} - Array of all keys for this type
 */
export const KEY_NOTIFICATION_CREATE_SUBJECT = 'subject' as keyof NotificationCreate;
/**
 * Target
 *
 * Target audience (broadcast, account, user)
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `target` property of NotificationCreate objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = notificationcreate[KEY_NOTIFICATION_CREATE_TARGET];
 * 
 * // Dynamic property access
 * const propertyName = KEY_NOTIFICATION_CREATE_TARGET;
 * const value = notificationcreate[propertyName];
 * ```
 *
 * @see {@link NotificationCreate} - The TypeScript type definition
 * @see {@link KEYS_NOTIFICATION_CREATE} - Array of all keys for this type
 */
export const KEY_NOTIFICATION_CREATE_TARGET = 'target' as keyof NotificationCreate;
/**
 * Type
 *
 * The type of notification
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `type` property of NotificationCreate objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = notificationcreate[KEY_NOTIFICATION_CREATE_TYPE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_NOTIFICATION_CREATE_TYPE;
 * const value = notificationcreate[propertyName];
 * ```
 *
 * @see {@link NotificationCreate} - The TypeScript type definition
 * @see {@link KEYS_NOTIFICATION_CREATE} - Array of all keys for this type
 */
export const KEY_NOTIFICATION_CREATE_TYPE = 'type' as keyof NotificationCreate;

/**
 * Array of all NotificationCreate property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for NotificationCreate objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all keys
 * for (const key of KEYS_NOTIFICATION_CREATE) {
 *   console.log(`Property: ${key}, Value: ${notificationcreate[key]}`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_NOTIFICATION_CREATE.includes(someKey);
 * ```
 *
 * @see {@link NotificationCreate} - The TypeScript type definition
 */
export const KEYS_NOTIFICATION_CREATE = [
  KEY_NOTIFICATION_CREATE_AUTHOR,
  KEY_NOTIFICATION_CREATE_MESSAGE,
  KEY_NOTIFICATION_CREATE_PUBLISH_DATE,
  KEY_NOTIFICATION_CREATE_SOURCE,
  KEY_NOTIFICATION_CREATE_SUBJECT,
  KEY_NOTIFICATION_CREATE_TARGET,
  KEY_NOTIFICATION_CREATE_TYPE,
] as const satisfies (keyof NotificationCreate)[];

/**
 * Author
 *
 * The user or system that created the notification
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `author` property of NotificationSummary objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = notificationsummary[KEY_NOTIFICATION_SUMMARY_AUTHOR];
 * 
 * // Dynamic property access
 * const propertyName = KEY_NOTIFICATION_SUMMARY_AUTHOR;
 * const value = notificationsummary[propertyName];
 * ```
 *
 * @see {@link NotificationSummary} - The TypeScript type definition
 * @see {@link KEYS_NOTIFICATION_SUMMARY} - Array of all keys for this type
 */
export const KEY_NOTIFICATION_SUMMARY_AUTHOR = 'author' as keyof NotificationSummary;
/**
 * Message
 *
 * The message content of the notification
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `message` property of NotificationSummary objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = notificationsummary[KEY_NOTIFICATION_SUMMARY_MESSAGE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_NOTIFICATION_SUMMARY_MESSAGE;
 * const value = notificationsummary[propertyName];
 * ```
 *
 * @see {@link NotificationSummary} - The TypeScript type definition
 * @see {@link KEYS_NOTIFICATION_SUMMARY} - Array of all keys for this type
 */
export const KEY_NOTIFICATION_SUMMARY_MESSAGE = 'message' as keyof NotificationSummary;
/**
 * Notification Id
 *
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `notification_id` property of NotificationSummary objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = notificationsummary[KEY_NOTIFICATION_SUMMARY_NOTIFICATION_ID];
 * 
 * // Dynamic property access
 * const propertyName = KEY_NOTIFICATION_SUMMARY_NOTIFICATION_ID;
 * const value = notificationsummary[propertyName];
 * ```
 *
 * @see {@link NotificationSummary} - The TypeScript type definition
 * @see {@link KEYS_NOTIFICATION_SUMMARY} - Array of all keys for this type
 */
export const KEY_NOTIFICATION_SUMMARY_NOTIFICATION_ID = 'notification_id' as keyof NotificationSummary;
/**
 * Publish Date
 *
 * The date/time the notification is to be published
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `publish_date` property of NotificationSummary objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = notificationsummary[KEY_NOTIFICATION_SUMMARY_PUBLISH_DATE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_NOTIFICATION_SUMMARY_PUBLISH_DATE;
 * const value = notificationsummary[propertyName];
 * ```
 *
 * @see {@link NotificationSummary} - The TypeScript type definition
 * @see {@link KEYS_NOTIFICATION_SUMMARY} - Array of all keys for this type
 */
export const KEY_NOTIFICATION_SUMMARY_PUBLISH_DATE = 'publish_date' as keyof NotificationSummary;
/**
 * Source
 *
 * Source of the notification
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `source` property of NotificationSummary objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = notificationsummary[KEY_NOTIFICATION_SUMMARY_SOURCE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_NOTIFICATION_SUMMARY_SOURCE;
 * const value = notificationsummary[propertyName];
 * ```
 *
 * @see {@link NotificationSummary} - The TypeScript type definition
 * @see {@link KEYS_NOTIFICATION_SUMMARY} - Array of all keys for this type
 */
export const KEY_NOTIFICATION_SUMMARY_SOURCE = 'source' as keyof NotificationSummary;
/**
 * Subject
 *
 * The subject of the notification
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `subject` property of NotificationSummary objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = notificationsummary[KEY_NOTIFICATION_SUMMARY_SUBJECT];
 * 
 * // Dynamic property access
 * const propertyName = KEY_NOTIFICATION_SUMMARY_SUBJECT;
 * const value = notificationsummary[propertyName];
 * ```
 *
 * @see {@link NotificationSummary} - The TypeScript type definition
 * @see {@link KEYS_NOTIFICATION_SUMMARY} - Array of all keys for this type
 */
export const KEY_NOTIFICATION_SUMMARY_SUBJECT = 'subject' as keyof NotificationSummary;
/**
 * Target
 *
 * Target audience (broadcast, account, user)
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `target` property of NotificationSummary objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = notificationsummary[KEY_NOTIFICATION_SUMMARY_TARGET];
 * 
 * // Dynamic property access
 * const propertyName = KEY_NOTIFICATION_SUMMARY_TARGET;
 * const value = notificationsummary[propertyName];
 * ```
 *
 * @see {@link NotificationSummary} - The TypeScript type definition
 * @see {@link KEYS_NOTIFICATION_SUMMARY} - Array of all keys for this type
 */
export const KEY_NOTIFICATION_SUMMARY_TARGET = 'target' as keyof NotificationSummary;
/**
 * Type
 *
 * The type of notification
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `type` property of NotificationSummary objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = notificationsummary[KEY_NOTIFICATION_SUMMARY_TYPE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_NOTIFICATION_SUMMARY_TYPE;
 * const value = notificationsummary[propertyName];
 * ```
 *
 * @see {@link NotificationSummary} - The TypeScript type definition
 * @see {@link KEYS_NOTIFICATION_SUMMARY} - Array of all keys for this type
 */
export const KEY_NOTIFICATION_SUMMARY_TYPE = 'type' as keyof NotificationSummary;

/**
 * Array of all NotificationSummary property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for NotificationSummary objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all keys
 * for (const key of KEYS_NOTIFICATION_SUMMARY) {
 *   console.log(`Property: ${key}, Value: ${notificationsummary[key]}`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_NOTIFICATION_SUMMARY.includes(someKey);
 * ```
 *
 * @see {@link NotificationSummary} - The TypeScript type definition
 */
export const KEYS_NOTIFICATION_SUMMARY = [
  KEY_NOTIFICATION_SUMMARY_AUTHOR,
  KEY_NOTIFICATION_SUMMARY_MESSAGE,
  KEY_NOTIFICATION_SUMMARY_NOTIFICATION_ID,
  KEY_NOTIFICATION_SUMMARY_PUBLISH_DATE,
  KEY_NOTIFICATION_SUMMARY_SOURCE,
  KEY_NOTIFICATION_SUMMARY_SUBJECT,
  KEY_NOTIFICATION_SUMMARY_TARGET,
  KEY_NOTIFICATION_SUMMARY_TYPE,
] as const satisfies (keyof NotificationSummary)[];

/**
 * Author
 *
 * The user or system that created the notification
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `author` property of NotificationUpdate objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = notificationupdate[KEY_NOTIFICATION_UPDATE_AUTHOR];
 * 
 * // Dynamic property access
 * const propertyName = KEY_NOTIFICATION_UPDATE_AUTHOR;
 * const value = notificationupdate[propertyName];
 * ```
 *
 * @see {@link NotificationUpdate} - The TypeScript type definition
 * @see {@link KEYS_NOTIFICATION_UPDATE} - Array of all keys for this type
 */
export const KEY_NOTIFICATION_UPDATE_AUTHOR = 'author' as keyof NotificationUpdate;
/**
 * Message
 *
 * The message content of the notification
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `message` property of NotificationUpdate objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = notificationupdate[KEY_NOTIFICATION_UPDATE_MESSAGE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_NOTIFICATION_UPDATE_MESSAGE;
 * const value = notificationupdate[propertyName];
 * ```
 *
 * @see {@link NotificationUpdate} - The TypeScript type definition
 * @see {@link KEYS_NOTIFICATION_UPDATE} - Array of all keys for this type
 */
export const KEY_NOTIFICATION_UPDATE_MESSAGE = 'message' as keyof NotificationUpdate;
/**
 * Publish Date
 *
 * The date/time the notification is to be published
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `publish_date` property of NotificationUpdate objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = notificationupdate[KEY_NOTIFICATION_UPDATE_PUBLISH_DATE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_NOTIFICATION_UPDATE_PUBLISH_DATE;
 * const value = notificationupdate[propertyName];
 * ```
 *
 * @see {@link NotificationUpdate} - The TypeScript type definition
 * @see {@link KEYS_NOTIFICATION_UPDATE} - Array of all keys for this type
 */
export const KEY_NOTIFICATION_UPDATE_PUBLISH_DATE = 'publish_date' as keyof NotificationUpdate;
/**
 * Source
 *
 * Source of the notification
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `source` property of NotificationUpdate objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = notificationupdate[KEY_NOTIFICATION_UPDATE_SOURCE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_NOTIFICATION_UPDATE_SOURCE;
 * const value = notificationupdate[propertyName];
 * ```
 *
 * @see {@link NotificationUpdate} - The TypeScript type definition
 * @see {@link KEYS_NOTIFICATION_UPDATE} - Array of all keys for this type
 */
export const KEY_NOTIFICATION_UPDATE_SOURCE = 'source' as keyof NotificationUpdate;
/**
 * Subject
 *
 * The subject of the notification
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `subject` property of NotificationUpdate objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = notificationupdate[KEY_NOTIFICATION_UPDATE_SUBJECT];
 * 
 * // Dynamic property access
 * const propertyName = KEY_NOTIFICATION_UPDATE_SUBJECT;
 * const value = notificationupdate[propertyName];
 * ```
 *
 * @see {@link NotificationUpdate} - The TypeScript type definition
 * @see {@link KEYS_NOTIFICATION_UPDATE} - Array of all keys for this type
 */
export const KEY_NOTIFICATION_UPDATE_SUBJECT = 'subject' as keyof NotificationUpdate;
/**
 * Target
 *
 * Target audience (broadcast, account, user)
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `target` property of NotificationUpdate objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = notificationupdate[KEY_NOTIFICATION_UPDATE_TARGET];
 * 
 * // Dynamic property access
 * const propertyName = KEY_NOTIFICATION_UPDATE_TARGET;
 * const value = notificationupdate[propertyName];
 * ```
 *
 * @see {@link NotificationUpdate} - The TypeScript type definition
 * @see {@link KEYS_NOTIFICATION_UPDATE} - Array of all keys for this type
 */
export const KEY_NOTIFICATION_UPDATE_TARGET = 'target' as keyof NotificationUpdate;
/**
 * Type
 *
 * The type of notification
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `type` property of NotificationUpdate objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = notificationupdate[KEY_NOTIFICATION_UPDATE_TYPE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_NOTIFICATION_UPDATE_TYPE;
 * const value = notificationupdate[propertyName];
 * ```
 *
 * @see {@link NotificationUpdate} - The TypeScript type definition
 * @see {@link KEYS_NOTIFICATION_UPDATE} - Array of all keys for this type
 */
export const KEY_NOTIFICATION_UPDATE_TYPE = 'type' as keyof NotificationUpdate;

/**
 * Array of all NotificationUpdate property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for NotificationUpdate objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all keys
 * for (const key of KEYS_NOTIFICATION_UPDATE) {
 *   console.log(`Property: ${key}, Value: ${notificationupdate[key]}`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_NOTIFICATION_UPDATE.includes(someKey);
 * ```
 *
 * @see {@link NotificationUpdate} - The TypeScript type definition
 */
export const KEYS_NOTIFICATION_UPDATE = [
  KEY_NOTIFICATION_UPDATE_AUTHOR,
  KEY_NOTIFICATION_UPDATE_MESSAGE,
  KEY_NOTIFICATION_UPDATE_PUBLISH_DATE,
  KEY_NOTIFICATION_UPDATE_SOURCE,
  KEY_NOTIFICATION_UPDATE_SUBJECT,
  KEY_NOTIFICATION_UPDATE_TARGET,
  KEY_NOTIFICATION_UPDATE_TYPE,
] as const satisfies (keyof NotificationUpdate)[];

/**
 * Address 1
 *
 * First line of the organization's address.
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `address_1` property of Organization objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = organization[KEY_ORGANIZATION_ADDRESS_1];
 * 
 * // Dynamic property access
 * const propertyName = KEY_ORGANIZATION_ADDRESS_1;
 * const value = organization[propertyName];
 * ```
 *
 * @see {@link Organization} - The TypeScript type definition
 * @see {@link KEYS_ORGANIZATION} - Array of all keys for this type
 */
export const KEY_ORGANIZATION_ADDRESS_1 = 'address_1' as keyof Organization;
/**
 * Address 2
 *
 * Second line of the organization's address.
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `address_2` property of Organization objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = organization[KEY_ORGANIZATION_ADDRESS_2];
 * 
 * // Dynamic property access
 * const propertyName = KEY_ORGANIZATION_ADDRESS_2;
 * const value = organization[propertyName];
 * ```
 *
 * @see {@link Organization} - The TypeScript type definition
 * @see {@link KEYS_ORGANIZATION} - Array of all keys for this type
 */
export const KEY_ORGANIZATION_ADDRESS_2 = 'address_2' as keyof Organization;
/**
 * Attributes
 *
 *
 * @type {array}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `attributes` property of Organization objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = organization[KEY_ORGANIZATION_ATTRIBUTES];
 * 
 * // Dynamic property access
 * const propertyName = KEY_ORGANIZATION_ATTRIBUTES;
 * const value = organization[propertyName];
 * ```
 *
 * @see {@link Organization} - The TypeScript type definition
 * @see {@link KEYS_ORGANIZATION} - Array of all keys for this type
 */
export const KEY_ORGANIZATION_ATTRIBUTES = 'attributes' as keyof Organization;
/**
 * Business Number
 *
 * Government issued business identifier for the organization issued.
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `business_number` property of Organization objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = organization[KEY_ORGANIZATION_BUSINESS_NUMBER];
 * 
 * // Dynamic property access
 * const propertyName = KEY_ORGANIZATION_BUSINESS_NUMBER;
 * const value = organization[propertyName];
 * ```
 *
 * @see {@link Organization} - The TypeScript type definition
 * @see {@link KEYS_ORGANIZATION} - Array of all keys for this type
 */
export const KEY_ORGANIZATION_BUSINESS_NUMBER = 'business_number' as keyof Organization;
/**
 * City
 *
 * City of the organization's address.
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `city` property of Organization objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = organization[KEY_ORGANIZATION_CITY];
 * 
 * // Dynamic property access
 * const propertyName = KEY_ORGANIZATION_CITY;
 * const value = organization[propertyName];
 * ```
 *
 * @see {@link Organization} - The TypeScript type definition
 * @see {@link KEYS_ORGANIZATION} - Array of all keys for this type
 */
export const KEY_ORGANIZATION_CITY = 'city' as keyof Organization;
/**
 * Country Code
 *
 * ISO 3166-1 alpha-2 country code.
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `country_code` property of Organization objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = organization[KEY_ORGANIZATION_COUNTRY_CODE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_ORGANIZATION_COUNTRY_CODE;
 * const value = organization[propertyName];
 * ```
 *
 * @see {@link Organization} - The TypeScript type definition
 * @see {@link KEYS_ORGANIZATION} - Array of all keys for this type
 */
export const KEY_ORGANIZATION_COUNTRY_CODE = 'country_code' as keyof Organization;
/**
 * Created On
 *
 * The date/time the entry was created on
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `created_on` property of Organization objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = organization[KEY_ORGANIZATION_CREATED_ON];
 * 
 * // Dynamic property access
 * const propertyName = KEY_ORGANIZATION_CREATED_ON;
 * const value = organization[propertyName];
 * ```
 *
 * @see {@link Organization} - The TypeScript type definition
 * @see {@link KEYS_ORGANIZATION} - Array of all keys for this type
 */
export const KEY_ORGANIZATION_CREATED_ON = 'created_on' as keyof Organization;
/**
 * currency property
 *
 * The currency used by the organization.
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `currency` property of Organization objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = organization[KEY_ORGANIZATION_CURRENCY];
 * 
 * // Dynamic property access
 * const propertyName = KEY_ORGANIZATION_CURRENCY;
 * const value = organization[propertyName];
 * ```
 *
 * @see {@link Organization} - The TypeScript type definition
 * @see {@link KEYS_ORGANIZATION} - Array of all keys for this type
 */
export const KEY_ORGANIZATION_CURRENCY = 'currency' as keyof Organization;
/**
 * Default Locale
 *
 * Default locale for the organization.
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `default_locale` property of Organization objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = organization[KEY_ORGANIZATION_DEFAULT_LOCALE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_ORGANIZATION_DEFAULT_LOCALE;
 * const value = organization[propertyName];
 * ```
 *
 * @see {@link Organization} - The TypeScript type definition
 * @see {@link KEYS_ORGANIZATION} - Array of all keys for this type
 */
export const KEY_ORGANIZATION_DEFAULT_LOCALE = 'default_locale' as keyof Organization;
/**
 * Deleted On
 *
 * The date/time the entry was deleted on
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `deleted_on` property of Organization objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = organization[KEY_ORGANIZATION_DELETED_ON];
 * 
 * // Dynamic property access
 * const propertyName = KEY_ORGANIZATION_DELETED_ON;
 * const value = organization[propertyName];
 * ```
 *
 * @see {@link Organization} - The TypeScript type definition
 * @see {@link KEYS_ORGANIZATION} - Array of all keys for this type
 */
export const KEY_ORGANIZATION_DELETED_ON = 'deleted_on' as keyof Organization;
/**
 * Name
 *
 * Name of the organization.
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `name` property of Organization objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = organization[KEY_ORGANIZATION_NAME];
 * 
 * // Dynamic property access
 * const propertyName = KEY_ORGANIZATION_NAME;
 * const value = organization[propertyName];
 * ```
 *
 * @see {@link Organization} - The TypeScript type definition
 * @see {@link KEYS_ORGANIZATION} - Array of all keys for this type
 */
export const KEY_ORGANIZATION_NAME = 'name' as keyof Organization;
/**
 * Organization Id
 *
 * Unique identifier for the organization.
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `organization_id` property of Organization objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = organization[KEY_ORGANIZATION_ORGANIZATION_ID];
 * 
 * // Dynamic property access
 * const propertyName = KEY_ORGANIZATION_ORGANIZATION_ID;
 * const value = organization[propertyName];
 * ```
 *
 * @see {@link Organization} - The TypeScript type definition
 * @see {@link KEYS_ORGANIZATION} - Array of all keys for this type
 */
export const KEY_ORGANIZATION_ORGANIZATION_ID = 'organization_id' as keyof Organization;
/**
 * Parent Organization Id
 *
 * ID of the parent organization.
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `parent_organization_id` property of Organization objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = organization[KEY_ORGANIZATION_PARENT_ORGANIZATION_ID];
 * 
 * // Dynamic property access
 * const propertyName = KEY_ORGANIZATION_PARENT_ORGANIZATION_ID;
 * const value = organization[propertyName];
 * ```
 *
 * @see {@link Organization} - The TypeScript type definition
 * @see {@link KEYS_ORGANIZATION} - Array of all keys for this type
 */
export const KEY_ORGANIZATION_PARENT_ORGANIZATION_ID = 'parent_organization_id' as keyof Organization;
/**
 * Postal Code
 *
 * Postal code of the organization's address.
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `postal_code` property of Organization objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = organization[KEY_ORGANIZATION_POSTAL_CODE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_ORGANIZATION_POSTAL_CODE;
 * const value = organization[propertyName];
 * ```
 *
 * @see {@link Organization} - The TypeScript type definition
 * @see {@link KEYS_ORGANIZATION} - Array of all keys for this type
 */
export const KEY_ORGANIZATION_POSTAL_CODE = 'postal_code' as keyof Organization;
/**
 * State
 *
 * State or province of the organization's address.
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `state` property of Organization objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = organization[KEY_ORGANIZATION_STATE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_ORGANIZATION_STATE;
 * const value = organization[propertyName];
 * ```
 *
 * @see {@link Organization} - The TypeScript type definition
 * @see {@link KEYS_ORGANIZATION} - Array of all keys for this type
 */
export const KEY_ORGANIZATION_STATE = 'state' as keyof Organization;
/**
 * status property
 *
 * Status of the organization.
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `status` property of Organization objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = organization[KEY_ORGANIZATION_STATUS];
 * 
 * // Dynamic property access
 * const propertyName = KEY_ORGANIZATION_STATUS;
 * const value = organization[propertyName];
 * ```
 *
 * @see {@link Organization} - The TypeScript type definition
 * @see {@link KEYS_ORGANIZATION} - Array of all keys for this type
 */
export const KEY_ORGANIZATION_STATUS = 'status' as keyof Organization;
/**
 * Tax Id
 *
 * Tax ID of the organization.
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `tax_id` property of Organization objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = organization[KEY_ORGANIZATION_TAX_ID];
 * 
 * // Dynamic property access
 * const propertyName = KEY_ORGANIZATION_TAX_ID;
 * const value = organization[propertyName];
 * ```
 *
 * @see {@link Organization} - The TypeScript type definition
 * @see {@link KEYS_ORGANIZATION} - Array of all keys for this type
 */
export const KEY_ORGANIZATION_TAX_ID = 'tax_id' as keyof Organization;
/**
 * Tax Id Type
 *
 * Type of tax ID for the organization.
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `tax_id_type` property of Organization objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = organization[KEY_ORGANIZATION_TAX_ID_TYPE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_ORGANIZATION_TAX_ID_TYPE;
 * const value = organization[propertyName];
 * ```
 *
 * @see {@link Organization} - The TypeScript type definition
 * @see {@link KEYS_ORGANIZATION} - Array of all keys for this type
 */
export const KEY_ORGANIZATION_TAX_ID_TYPE = 'tax_id_type' as keyof Organization;
/**
 * Tax Rate
 *
 * Tax rate for the organization.
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `tax_rate` property of Organization objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = organization[KEY_ORGANIZATION_TAX_RATE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_ORGANIZATION_TAX_RATE;
 * const value = organization[propertyName];
 * ```
 *
 * @see {@link Organization} - The TypeScript type definition
 * @see {@link KEYS_ORGANIZATION} - Array of all keys for this type
 */
export const KEY_ORGANIZATION_TAX_RATE = 'tax_rate' as keyof Organization;
/**
 * Users
 *
 *
 * @type {array}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `users` property of Organization objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = organization[KEY_ORGANIZATION_USERS];
 * 
 * // Dynamic property access
 * const propertyName = KEY_ORGANIZATION_USERS;
 * const value = organization[propertyName];
 * ```
 *
 * @see {@link Organization} - The TypeScript type definition
 * @see {@link KEYS_ORGANIZATION} - Array of all keys for this type
 */
export const KEY_ORGANIZATION_USERS = 'users' as keyof Organization;

/**
 * Array of all Organization property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for Organization objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all keys
 * for (const key of KEYS_ORGANIZATION) {
 *   console.log(`Property: ${key}, Value: ${organization[key]}`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_ORGANIZATION.includes(someKey);
 * ```
 *
 * @see {@link Organization} - The TypeScript type definition
 */
export const KEYS_ORGANIZATION = [
  KEY_ORGANIZATION_ADDRESS_1,
  KEY_ORGANIZATION_ADDRESS_2,
  KEY_ORGANIZATION_ATTRIBUTES,
  KEY_ORGANIZATION_BUSINESS_NUMBER,
  KEY_ORGANIZATION_CITY,
  KEY_ORGANIZATION_COUNTRY_CODE,
  KEY_ORGANIZATION_CREATED_ON,
  KEY_ORGANIZATION_CURRENCY,
  KEY_ORGANIZATION_DEFAULT_LOCALE,
  KEY_ORGANIZATION_DELETED_ON,
  KEY_ORGANIZATION_NAME,
  KEY_ORGANIZATION_ORGANIZATION_ID,
  KEY_ORGANIZATION_PARENT_ORGANIZATION_ID,
  KEY_ORGANIZATION_POSTAL_CODE,
  KEY_ORGANIZATION_STATE,
  KEY_ORGANIZATION_STATUS,
  KEY_ORGANIZATION_TAX_ID,
  KEY_ORGANIZATION_TAX_ID_TYPE,
  KEY_ORGANIZATION_TAX_RATE,
  KEY_ORGANIZATION_USERS,
] as const satisfies (keyof Organization)[];

/**
 * Created On
 *
 * The date/time the entry was created on
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `created_on` property of OrganizationAttribute objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = organizationattribute[KEY_ORGANIZATION_ATTRIBUTE_CREATED_ON];
 * 
 * // Dynamic property access
 * const propertyName = KEY_ORGANIZATION_ATTRIBUTE_CREATED_ON;
 * const value = organizationattribute[propertyName];
 * ```
 *
 * @see {@link OrganizationAttribute} - The TypeScript type definition
 * @see {@link KEYS_ORGANIZATION_ATTRIBUTE} - Array of all keys for this type
 */
export const KEY_ORGANIZATION_ATTRIBUTE_CREATED_ON = 'created_on' as keyof OrganizationAttribute;
/**
 * Key
 *
 * Key of the attribute.
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `key` property of OrganizationAttribute objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = organizationattribute[KEY_ORGANIZATION_ATTRIBUTE_KEY];
 * 
 * // Dynamic property access
 * const propertyName = KEY_ORGANIZATION_ATTRIBUTE_KEY;
 * const value = organizationattribute[propertyName];
 * ```
 *
 * @see {@link OrganizationAttribute} - The TypeScript type definition
 * @see {@link KEYS_ORGANIZATION_ATTRIBUTE} - Array of all keys for this type
 */
export const KEY_ORGANIZATION_ATTRIBUTE_KEY = 'key' as keyof OrganizationAttribute;
/**
 * Organization Attribute Id
 *
 *
 * @type {integer}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `organization_attribute_id` property of OrganizationAttribute objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = organizationattribute[KEY_ORGANIZATION_ATTRIBUTE_ORGANIZATION_ATTRIBUTE_ID];
 * 
 * // Dynamic property access
 * const propertyName = KEY_ORGANIZATION_ATTRIBUTE_ORGANIZATION_ATTRIBUTE_ID;
 * const value = organizationattribute[propertyName];
 * ```
 *
 * @see {@link OrganizationAttribute} - The TypeScript type definition
 * @see {@link KEYS_ORGANIZATION_ATTRIBUTE} - Array of all keys for this type
 */
export const KEY_ORGANIZATION_ATTRIBUTE_ORGANIZATION_ATTRIBUTE_ID = 'organization_attribute_id' as keyof OrganizationAttribute;
/**
 * Private
 *
 * When true, the attribute is private and not visible to users.
 *
 * @type {boolean}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `private` property of OrganizationAttribute objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = organizationattribute[KEY_ORGANIZATION_ATTRIBUTE_PRIVATE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_ORGANIZATION_ATTRIBUTE_PRIVATE;
 * const value = organizationattribute[propertyName];
 * ```
 *
 * @see {@link OrganizationAttribute} - The TypeScript type definition
 * @see {@link KEYS_ORGANIZATION_ATTRIBUTE} - Array of all keys for this type
 */
export const KEY_ORGANIZATION_ATTRIBUTE_PRIVATE = 'private' as keyof OrganizationAttribute;
/**
 * Protected
 *
 * When true, the attribute is protected and cannot be modified by users.
 *
 * @type {boolean}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `protected` property of OrganizationAttribute objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = organizationattribute[KEY_ORGANIZATION_ATTRIBUTE_PROTECTED];
 * 
 * // Dynamic property access
 * const propertyName = KEY_ORGANIZATION_ATTRIBUTE_PROTECTED;
 * const value = organizationattribute[propertyName];
 * ```
 *
 * @see {@link OrganizationAttribute} - The TypeScript type definition
 * @see {@link KEYS_ORGANIZATION_ATTRIBUTE} - Array of all keys for this type
 */
export const KEY_ORGANIZATION_ATTRIBUTE_PROTECTED = 'protected' as keyof OrganizationAttribute;
/**
 * Updated On
 *
 * The date/time the entry was last updated on
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `updated_on` property of OrganizationAttribute objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = organizationattribute[KEY_ORGANIZATION_ATTRIBUTE_UPDATED_ON];
 * 
 * // Dynamic property access
 * const propertyName = KEY_ORGANIZATION_ATTRIBUTE_UPDATED_ON;
 * const value = organizationattribute[propertyName];
 * ```
 *
 * @see {@link OrganizationAttribute} - The TypeScript type definition
 * @see {@link KEYS_ORGANIZATION_ATTRIBUTE} - Array of all keys for this type
 */
export const KEY_ORGANIZATION_ATTRIBUTE_UPDATED_ON = 'updated_on' as keyof OrganizationAttribute;
/**
 * value property
 *
 * Value of the attribute.
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `value` property of OrganizationAttribute objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = organizationattribute[KEY_ORGANIZATION_ATTRIBUTE_VALUE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_ORGANIZATION_ATTRIBUTE_VALUE;
 * const value = organizationattribute[propertyName];
 * ```
 *
 * @see {@link OrganizationAttribute} - The TypeScript type definition
 * @see {@link KEYS_ORGANIZATION_ATTRIBUTE} - Array of all keys for this type
 */
export const KEY_ORGANIZATION_ATTRIBUTE_VALUE = 'value' as keyof OrganizationAttribute;

/**
 * Array of all OrganizationAttribute property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for OrganizationAttribute objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all keys
 * for (const key of KEYS_ORGANIZATION_ATTRIBUTE) {
 *   console.log(`Property: ${key}, Value: ${organizationattribute[key]}`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_ORGANIZATION_ATTRIBUTE.includes(someKey);
 * ```
 *
 * @see {@link OrganizationAttribute} - The TypeScript type definition
 */
export const KEYS_ORGANIZATION_ATTRIBUTE = [
  KEY_ORGANIZATION_ATTRIBUTE_CREATED_ON,
  KEY_ORGANIZATION_ATTRIBUTE_KEY,
  KEY_ORGANIZATION_ATTRIBUTE_ORGANIZATION_ATTRIBUTE_ID,
  KEY_ORGANIZATION_ATTRIBUTE_PRIVATE,
  KEY_ORGANIZATION_ATTRIBUTE_PROTECTED,
  KEY_ORGANIZATION_ATTRIBUTE_UPDATED_ON,
  KEY_ORGANIZATION_ATTRIBUTE_VALUE,
] as const satisfies (keyof OrganizationAttribute)[];

/**
 * Key
 *
 * Key of the attribute.
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `key` property of OrganizationAttributeCreate objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = organizationattributecreate[KEY_ORGANIZATION_ATTRIBUTE_CREATE_KEY];
 * 
 * // Dynamic property access
 * const propertyName = KEY_ORGANIZATION_ATTRIBUTE_CREATE_KEY;
 * const value = organizationattributecreate[propertyName];
 * ```
 *
 * @see {@link OrganizationAttributeCreate} - The TypeScript type definition
 * @see {@link KEYS_ORGANIZATION_ATTRIBUTE_CREATE} - Array of all keys for this type
 */
export const KEY_ORGANIZATION_ATTRIBUTE_CREATE_KEY = 'key' as keyof OrganizationAttributeCreate;
/**
 * Private
 *
 * When true, the attribute is private and not visible to users.
 *
 * @type {boolean}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `private` property of OrganizationAttributeCreate objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = organizationattributecreate[KEY_ORGANIZATION_ATTRIBUTE_CREATE_PRIVATE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_ORGANIZATION_ATTRIBUTE_CREATE_PRIVATE;
 * const value = organizationattributecreate[propertyName];
 * ```
 *
 * @see {@link OrganizationAttributeCreate} - The TypeScript type definition
 * @see {@link KEYS_ORGANIZATION_ATTRIBUTE_CREATE} - Array of all keys for this type
 */
export const KEY_ORGANIZATION_ATTRIBUTE_CREATE_PRIVATE = 'private' as keyof OrganizationAttributeCreate;
/**
 * Protected
 *
 * When true, the attribute is protected and cannot be modified by users.
 *
 * @type {boolean}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `protected` property of OrganizationAttributeCreate objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = organizationattributecreate[KEY_ORGANIZATION_ATTRIBUTE_CREATE_PROTECTED];
 * 
 * // Dynamic property access
 * const propertyName = KEY_ORGANIZATION_ATTRIBUTE_CREATE_PROTECTED;
 * const value = organizationattributecreate[propertyName];
 * ```
 *
 * @see {@link OrganizationAttributeCreate} - The TypeScript type definition
 * @see {@link KEYS_ORGANIZATION_ATTRIBUTE_CREATE} - Array of all keys for this type
 */
export const KEY_ORGANIZATION_ATTRIBUTE_CREATE_PROTECTED = 'protected' as keyof OrganizationAttributeCreate;
/**
 * value property
 *
 * Value of the attribute.
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `value` property of OrganizationAttributeCreate objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = organizationattributecreate[KEY_ORGANIZATION_ATTRIBUTE_CREATE_VALUE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_ORGANIZATION_ATTRIBUTE_CREATE_VALUE;
 * const value = organizationattributecreate[propertyName];
 * ```
 *
 * @see {@link OrganizationAttributeCreate} - The TypeScript type definition
 * @see {@link KEYS_ORGANIZATION_ATTRIBUTE_CREATE} - Array of all keys for this type
 */
export const KEY_ORGANIZATION_ATTRIBUTE_CREATE_VALUE = 'value' as keyof OrganizationAttributeCreate;

/**
 * Array of all OrganizationAttributeCreate property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for OrganizationAttributeCreate objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all keys
 * for (const key of KEYS_ORGANIZATION_ATTRIBUTE_CREATE) {
 *   console.log(`Property: ${key}, Value: ${organizationattributecreate[key]}`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_ORGANIZATION_ATTRIBUTE_CREATE.includes(someKey);
 * ```
 *
 * @see {@link OrganizationAttributeCreate} - The TypeScript type definition
 */
export const KEYS_ORGANIZATION_ATTRIBUTE_CREATE = [
  KEY_ORGANIZATION_ATTRIBUTE_CREATE_KEY,
  KEY_ORGANIZATION_ATTRIBUTE_CREATE_PRIVATE,
  KEY_ORGANIZATION_ATTRIBUTE_CREATE_PROTECTED,
  KEY_ORGANIZATION_ATTRIBUTE_CREATE_VALUE,
] as const satisfies (keyof OrganizationAttributeCreate)[];

/**
 * Created On
 *
 * The date/time the entry was created on
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `created_on` property of OrganizationAttribute2 objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = organizationattribute2[KEY_ORGANIZATION_ATTRIBUTE2_CREATED_ON];
 * 
 * // Dynamic property access
 * const propertyName = KEY_ORGANIZATION_ATTRIBUTE2_CREATED_ON;
 * const value = organizationattribute2[propertyName];
 * ```
 *
 * @see {@link OrganizationAttribute2} - The TypeScript type definition
 * @see {@link KEYS_ORGANIZATION_ATTRIBUTE2} - Array of all keys for this type
 */
export const KEY_ORGANIZATION_ATTRIBUTE2_CREATED_ON = 'created_on' as keyof OrganizationAttribute2;
/**
 * Key
 *
 * Key of the attribute.
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `key` property of OrganizationAttribute2 objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = organizationattribute2[KEY_ORGANIZATION_ATTRIBUTE2_KEY];
 * 
 * // Dynamic property access
 * const propertyName = KEY_ORGANIZATION_ATTRIBUTE2_KEY;
 * const value = organizationattribute2[propertyName];
 * ```
 *
 * @see {@link OrganizationAttribute2} - The TypeScript type definition
 * @see {@link KEYS_ORGANIZATION_ATTRIBUTE2} - Array of all keys for this type
 */
export const KEY_ORGANIZATION_ATTRIBUTE2_KEY = 'key' as keyof OrganizationAttribute2;
/**
 * Organization Attribute Id
 *
 *
 * @type {integer}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `organization_attribute_id` property of OrganizationAttribute2 objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = organizationattribute2[KEY_ORGANIZATION_ATTRIBUTE2_ORGANIZATION_ATTRIBUTE_ID];
 * 
 * // Dynamic property access
 * const propertyName = KEY_ORGANIZATION_ATTRIBUTE2_ORGANIZATION_ATTRIBUTE_ID;
 * const value = organizationattribute2[propertyName];
 * ```
 *
 * @see {@link OrganizationAttribute2} - The TypeScript type definition
 * @see {@link KEYS_ORGANIZATION_ATTRIBUTE2} - Array of all keys for this type
 */
export const KEY_ORGANIZATION_ATTRIBUTE2_ORGANIZATION_ATTRIBUTE_ID = 'organization_attribute_id' as keyof OrganizationAttribute2;
/**
 * Protected
 *
 * When true, the attribute is protected and cannot be modified by users.
 *
 * @type {boolean}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `protected` property of OrganizationAttribute2 objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = organizationattribute2[KEY_ORGANIZATION_ATTRIBUTE2_PROTECTED];
 * 
 * // Dynamic property access
 * const propertyName = KEY_ORGANIZATION_ATTRIBUTE2_PROTECTED;
 * const value = organizationattribute2[propertyName];
 * ```
 *
 * @see {@link OrganizationAttribute2} - The TypeScript type definition
 * @see {@link KEYS_ORGANIZATION_ATTRIBUTE2} - Array of all keys for this type
 */
export const KEY_ORGANIZATION_ATTRIBUTE2_PROTECTED = 'protected' as keyof OrganizationAttribute2;
/**
 * Updated On
 *
 * The date/time the entry was last updated on
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `updated_on` property of OrganizationAttribute2 objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = organizationattribute2[KEY_ORGANIZATION_ATTRIBUTE2_UPDATED_ON];
 * 
 * // Dynamic property access
 * const propertyName = KEY_ORGANIZATION_ATTRIBUTE2_UPDATED_ON;
 * const value = organizationattribute2[propertyName];
 * ```
 *
 * @see {@link OrganizationAttribute2} - The TypeScript type definition
 * @see {@link KEYS_ORGANIZATION_ATTRIBUTE2} - Array of all keys for this type
 */
export const KEY_ORGANIZATION_ATTRIBUTE2_UPDATED_ON = 'updated_on' as keyof OrganizationAttribute2;
/**
 * value property
 *
 * Value of the attribute.
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `value` property of OrganizationAttribute2 objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = organizationattribute2[KEY_ORGANIZATION_ATTRIBUTE2_VALUE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_ORGANIZATION_ATTRIBUTE2_VALUE;
 * const value = organizationattribute2[propertyName];
 * ```
 *
 * @see {@link OrganizationAttribute2} - The TypeScript type definition
 * @see {@link KEYS_ORGANIZATION_ATTRIBUTE2} - Array of all keys for this type
 */
export const KEY_ORGANIZATION_ATTRIBUTE2_VALUE = 'value' as keyof OrganizationAttribute2;

/**
 * Array of all OrganizationAttribute2 property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for OrganizationAttribute2 objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all keys
 * for (const key of KEYS_ORGANIZATION_ATTRIBUTE2) {
 *   console.log(`Property: ${key}, Value: ${organizationattribute2[key]}`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_ORGANIZATION_ATTRIBUTE2.includes(someKey);
 * ```
 *
 * @see {@link OrganizationAttribute2} - The TypeScript type definition
 */
export const KEYS_ORGANIZATION_ATTRIBUTE2 = [
  KEY_ORGANIZATION_ATTRIBUTE2_CREATED_ON,
  KEY_ORGANIZATION_ATTRIBUTE2_KEY,
  KEY_ORGANIZATION_ATTRIBUTE2_ORGANIZATION_ATTRIBUTE_ID,
  KEY_ORGANIZATION_ATTRIBUTE2_PROTECTED,
  KEY_ORGANIZATION_ATTRIBUTE2_UPDATED_ON,
  KEY_ORGANIZATION_ATTRIBUTE2_VALUE,
] as const satisfies (keyof OrganizationAttribute2)[];

/**
 * Key
 *
 * Key of the attribute.
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `key` property of OrganizationAttributeUpdate objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = organizationattributeupdate[KEY_ORGANIZATION_ATTRIBUTE_UPDATE_KEY];
 * 
 * // Dynamic property access
 * const propertyName = KEY_ORGANIZATION_ATTRIBUTE_UPDATE_KEY;
 * const value = organizationattributeupdate[propertyName];
 * ```
 *
 * @see {@link OrganizationAttributeUpdate} - The TypeScript type definition
 * @see {@link KEYS_ORGANIZATION_ATTRIBUTE_UPDATE} - Array of all keys for this type
 */
export const KEY_ORGANIZATION_ATTRIBUTE_UPDATE_KEY = 'key' as keyof OrganizationAttributeUpdate;
/**
 * Private
 *
 * When true, the attribute is private and not visible to users.
 *
 * @type {boolean}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `private` property of OrganizationAttributeUpdate objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = organizationattributeupdate[KEY_ORGANIZATION_ATTRIBUTE_UPDATE_PRIVATE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_ORGANIZATION_ATTRIBUTE_UPDATE_PRIVATE;
 * const value = organizationattributeupdate[propertyName];
 * ```
 *
 * @see {@link OrganizationAttributeUpdate} - The TypeScript type definition
 * @see {@link KEYS_ORGANIZATION_ATTRIBUTE_UPDATE} - Array of all keys for this type
 */
export const KEY_ORGANIZATION_ATTRIBUTE_UPDATE_PRIVATE = 'private' as keyof OrganizationAttributeUpdate;
/**
 * Protected
 *
 * When true, the attribute is protected and cannot be modified by users.
 *
 * @type {boolean}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `protected` property of OrganizationAttributeUpdate objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = organizationattributeupdate[KEY_ORGANIZATION_ATTRIBUTE_UPDATE_PROTECTED];
 * 
 * // Dynamic property access
 * const propertyName = KEY_ORGANIZATION_ATTRIBUTE_UPDATE_PROTECTED;
 * const value = organizationattributeupdate[propertyName];
 * ```
 *
 * @see {@link OrganizationAttributeUpdate} - The TypeScript type definition
 * @see {@link KEYS_ORGANIZATION_ATTRIBUTE_UPDATE} - Array of all keys for this type
 */
export const KEY_ORGANIZATION_ATTRIBUTE_UPDATE_PROTECTED = 'protected' as keyof OrganizationAttributeUpdate;
/**
 * value property
 *
 * Value of the attribute.
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `value` property of OrganizationAttributeUpdate objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = organizationattributeupdate[KEY_ORGANIZATION_ATTRIBUTE_UPDATE_VALUE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_ORGANIZATION_ATTRIBUTE_UPDATE_VALUE;
 * const value = organizationattributeupdate[propertyName];
 * ```
 *
 * @see {@link OrganizationAttributeUpdate} - The TypeScript type definition
 * @see {@link KEYS_ORGANIZATION_ATTRIBUTE_UPDATE} - Array of all keys for this type
 */
export const KEY_ORGANIZATION_ATTRIBUTE_UPDATE_VALUE = 'value' as keyof OrganizationAttributeUpdate;

/**
 * Array of all OrganizationAttributeUpdate property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for OrganizationAttributeUpdate objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all keys
 * for (const key of KEYS_ORGANIZATION_ATTRIBUTE_UPDATE) {
 *   console.log(`Property: ${key}, Value: ${organizationattributeupdate[key]}`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_ORGANIZATION_ATTRIBUTE_UPDATE.includes(someKey);
 * ```
 *
 * @see {@link OrganizationAttributeUpdate} - The TypeScript type definition
 */
export const KEYS_ORGANIZATION_ATTRIBUTE_UPDATE = [
  KEY_ORGANIZATION_ATTRIBUTE_UPDATE_KEY,
  KEY_ORGANIZATION_ATTRIBUTE_UPDATE_PRIVATE,
  KEY_ORGANIZATION_ATTRIBUTE_UPDATE_PROTECTED,
  KEY_ORGANIZATION_ATTRIBUTE_UPDATE_VALUE,
] as const satisfies (keyof OrganizationAttributeUpdate)[];

/**
 * Address 1
 *
 * First line of the organization's address.
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `address_1` property of OrganizationCreate objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = organizationcreate[KEY_ORGANIZATION_CREATE_ADDRESS_1];
 * 
 * // Dynamic property access
 * const propertyName = KEY_ORGANIZATION_CREATE_ADDRESS_1;
 * const value = organizationcreate[propertyName];
 * ```
 *
 * @see {@link OrganizationCreate} - The TypeScript type definition
 * @see {@link KEYS_ORGANIZATION_CREATE} - Array of all keys for this type
 */
export const KEY_ORGANIZATION_CREATE_ADDRESS_1 = 'address_1' as keyof OrganizationCreate;
/**
 * Address 2
 *
 * Second line of the organization's address.
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `address_2` property of OrganizationCreate objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = organizationcreate[KEY_ORGANIZATION_CREATE_ADDRESS_2];
 * 
 * // Dynamic property access
 * const propertyName = KEY_ORGANIZATION_CREATE_ADDRESS_2;
 * const value = organizationcreate[propertyName];
 * ```
 *
 * @see {@link OrganizationCreate} - The TypeScript type definition
 * @see {@link KEYS_ORGANIZATION_CREATE} - Array of all keys for this type
 */
export const KEY_ORGANIZATION_CREATE_ADDRESS_2 = 'address_2' as keyof OrganizationCreate;
/**
 * Attributes
 *
 * List of attributes for the organization.
 *
 * @type {array}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `attributes` property of OrganizationCreate objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = organizationcreate[KEY_ORGANIZATION_CREATE_ATTRIBUTES];
 * 
 * // Dynamic property access
 * const propertyName = KEY_ORGANIZATION_CREATE_ATTRIBUTES;
 * const value = organizationcreate[propertyName];
 * ```
 *
 * @see {@link OrganizationCreate} - The TypeScript type definition
 * @see {@link KEYS_ORGANIZATION_CREATE} - Array of all keys for this type
 */
export const KEY_ORGANIZATION_CREATE_ATTRIBUTES = 'attributes' as keyof OrganizationCreate;
/**
 * Business Number
 *
 * Government issued business identifier for the organization issued.
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `business_number` property of OrganizationCreate objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = organizationcreate[KEY_ORGANIZATION_CREATE_BUSINESS_NUMBER];
 * 
 * // Dynamic property access
 * const propertyName = KEY_ORGANIZATION_CREATE_BUSINESS_NUMBER;
 * const value = organizationcreate[propertyName];
 * ```
 *
 * @see {@link OrganizationCreate} - The TypeScript type definition
 * @see {@link KEYS_ORGANIZATION_CREATE} - Array of all keys for this type
 */
export const KEY_ORGANIZATION_CREATE_BUSINESS_NUMBER = 'business_number' as keyof OrganizationCreate;
/**
 * City
 *
 * City of the organization's address.
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `city` property of OrganizationCreate objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = organizationcreate[KEY_ORGANIZATION_CREATE_CITY];
 * 
 * // Dynamic property access
 * const propertyName = KEY_ORGANIZATION_CREATE_CITY;
 * const value = organizationcreate[propertyName];
 * ```
 *
 * @see {@link OrganizationCreate} - The TypeScript type definition
 * @see {@link KEYS_ORGANIZATION_CREATE} - Array of all keys for this type
 */
export const KEY_ORGANIZATION_CREATE_CITY = 'city' as keyof OrganizationCreate;
/**
 * Country Code
 *
 * ISO 3166-1 alpha-2 country code.
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `country_code` property of OrganizationCreate objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = organizationcreate[KEY_ORGANIZATION_CREATE_COUNTRY_CODE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_ORGANIZATION_CREATE_COUNTRY_CODE;
 * const value = organizationcreate[propertyName];
 * ```
 *
 * @see {@link OrganizationCreate} - The TypeScript type definition
 * @see {@link KEYS_ORGANIZATION_CREATE} - Array of all keys for this type
 */
export const KEY_ORGANIZATION_CREATE_COUNTRY_CODE = 'country_code' as keyof OrganizationCreate;
/**
 * currency property
 *
 * The currency used by the organization.
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `currency` property of OrganizationCreate objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = organizationcreate[KEY_ORGANIZATION_CREATE_CURRENCY];
 * 
 * // Dynamic property access
 * const propertyName = KEY_ORGANIZATION_CREATE_CURRENCY;
 * const value = organizationcreate[propertyName];
 * ```
 *
 * @see {@link OrganizationCreate} - The TypeScript type definition
 * @see {@link KEYS_ORGANIZATION_CREATE} - Array of all keys for this type
 */
export const KEY_ORGANIZATION_CREATE_CURRENCY = 'currency' as keyof OrganizationCreate;
/**
 * Default Locale
 *
 * Default locale for the organization.
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `default_locale` property of OrganizationCreate objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = organizationcreate[KEY_ORGANIZATION_CREATE_DEFAULT_LOCALE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_ORGANIZATION_CREATE_DEFAULT_LOCALE;
 * const value = organizationcreate[propertyName];
 * ```
 *
 * @see {@link OrganizationCreate} - The TypeScript type definition
 * @see {@link KEYS_ORGANIZATION_CREATE} - Array of all keys for this type
 */
export const KEY_ORGANIZATION_CREATE_DEFAULT_LOCALE = 'default_locale' as keyof OrganizationCreate;
/**
 * Name
 *
 * Name of the organization.
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `name` property of OrganizationCreate objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = organizationcreate[KEY_ORGANIZATION_CREATE_NAME];
 * 
 * // Dynamic property access
 * const propertyName = KEY_ORGANIZATION_CREATE_NAME;
 * const value = organizationcreate[propertyName];
 * ```
 *
 * @see {@link OrganizationCreate} - The TypeScript type definition
 * @see {@link KEYS_ORGANIZATION_CREATE} - Array of all keys for this type
 */
export const KEY_ORGANIZATION_CREATE_NAME = 'name' as keyof OrganizationCreate;
/**
 * Parent Organization Id
 *
 * ID of the parent organization.
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `parent_organization_id` property of OrganizationCreate objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = organizationcreate[KEY_ORGANIZATION_CREATE_PARENT_ORGANIZATION_ID];
 * 
 * // Dynamic property access
 * const propertyName = KEY_ORGANIZATION_CREATE_PARENT_ORGANIZATION_ID;
 * const value = organizationcreate[propertyName];
 * ```
 *
 * @see {@link OrganizationCreate} - The TypeScript type definition
 * @see {@link KEYS_ORGANIZATION_CREATE} - Array of all keys for this type
 */
export const KEY_ORGANIZATION_CREATE_PARENT_ORGANIZATION_ID = 'parent_organization_id' as keyof OrganizationCreate;
/**
 * Postal Code
 *
 * Postal code of the organization's address.
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `postal_code` property of OrganizationCreate objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = organizationcreate[KEY_ORGANIZATION_CREATE_POSTAL_CODE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_ORGANIZATION_CREATE_POSTAL_CODE;
 * const value = organizationcreate[propertyName];
 * ```
 *
 * @see {@link OrganizationCreate} - The TypeScript type definition
 * @see {@link KEYS_ORGANIZATION_CREATE} - Array of all keys for this type
 */
export const KEY_ORGANIZATION_CREATE_POSTAL_CODE = 'postal_code' as keyof OrganizationCreate;
/**
 * State
 *
 * State or province of the organization's address.
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `state` property of OrganizationCreate objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = organizationcreate[KEY_ORGANIZATION_CREATE_STATE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_ORGANIZATION_CREATE_STATE;
 * const value = organizationcreate[propertyName];
 * ```
 *
 * @see {@link OrganizationCreate} - The TypeScript type definition
 * @see {@link KEYS_ORGANIZATION_CREATE} - Array of all keys for this type
 */
export const KEY_ORGANIZATION_CREATE_STATE = 'state' as keyof OrganizationCreate;
/**
 * Tax Id
 *
 * Tax ID of the organization.
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `tax_id` property of OrganizationCreate objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = organizationcreate[KEY_ORGANIZATION_CREATE_TAX_ID];
 * 
 * // Dynamic property access
 * const propertyName = KEY_ORGANIZATION_CREATE_TAX_ID;
 * const value = organizationcreate[propertyName];
 * ```
 *
 * @see {@link OrganizationCreate} - The TypeScript type definition
 * @see {@link KEYS_ORGANIZATION_CREATE} - Array of all keys for this type
 */
export const KEY_ORGANIZATION_CREATE_TAX_ID = 'tax_id' as keyof OrganizationCreate;
/**
 * Tax Id Type
 *
 * Type of tax ID for the organization.
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `tax_id_type` property of OrganizationCreate objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = organizationcreate[KEY_ORGANIZATION_CREATE_TAX_ID_TYPE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_ORGANIZATION_CREATE_TAX_ID_TYPE;
 * const value = organizationcreate[propertyName];
 * ```
 *
 * @see {@link OrganizationCreate} - The TypeScript type definition
 * @see {@link KEYS_ORGANIZATION_CREATE} - Array of all keys for this type
 */
export const KEY_ORGANIZATION_CREATE_TAX_ID_TYPE = 'tax_id_type' as keyof OrganizationCreate;
/**
 * Tax Rate
 *
 * Tax rate for the organization.
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `tax_rate` property of OrganizationCreate objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = organizationcreate[KEY_ORGANIZATION_CREATE_TAX_RATE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_ORGANIZATION_CREATE_TAX_RATE;
 * const value = organizationcreate[propertyName];
 * ```
 *
 * @see {@link OrganizationCreate} - The TypeScript type definition
 * @see {@link KEYS_ORGANIZATION_CREATE} - Array of all keys for this type
 */
export const KEY_ORGANIZATION_CREATE_TAX_RATE = 'tax_rate' as keyof OrganizationCreate;
/**
 * Users
 *
 * List of users that needs to be created with the organization.
 *
 * @type {array}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `users` property of OrganizationCreate objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = organizationcreate[KEY_ORGANIZATION_CREATE_USERS];
 * 
 * // Dynamic property access
 * const propertyName = KEY_ORGANIZATION_CREATE_USERS;
 * const value = organizationcreate[propertyName];
 * ```
 *
 * @see {@link OrganizationCreate} - The TypeScript type definition
 * @see {@link KEYS_ORGANIZATION_CREATE} - Array of all keys for this type
 */
export const KEY_ORGANIZATION_CREATE_USERS = 'users' as keyof OrganizationCreate;

/**
 * Array of all OrganizationCreate property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for OrganizationCreate objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all keys
 * for (const key of KEYS_ORGANIZATION_CREATE) {
 *   console.log(`Property: ${key}, Value: ${organizationcreate[key]}`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_ORGANIZATION_CREATE.includes(someKey);
 * ```
 *
 * @see {@link OrganizationCreate} - The TypeScript type definition
 */
export const KEYS_ORGANIZATION_CREATE = [
  KEY_ORGANIZATION_CREATE_ADDRESS_1,
  KEY_ORGANIZATION_CREATE_ADDRESS_2,
  KEY_ORGANIZATION_CREATE_ATTRIBUTES,
  KEY_ORGANIZATION_CREATE_BUSINESS_NUMBER,
  KEY_ORGANIZATION_CREATE_CITY,
  KEY_ORGANIZATION_CREATE_COUNTRY_CODE,
  KEY_ORGANIZATION_CREATE_CURRENCY,
  KEY_ORGANIZATION_CREATE_DEFAULT_LOCALE,
  KEY_ORGANIZATION_CREATE_NAME,
  KEY_ORGANIZATION_CREATE_PARENT_ORGANIZATION_ID,
  KEY_ORGANIZATION_CREATE_POSTAL_CODE,
  KEY_ORGANIZATION_CREATE_STATE,
  KEY_ORGANIZATION_CREATE_TAX_ID,
  KEY_ORGANIZATION_CREATE_TAX_ID_TYPE,
  KEY_ORGANIZATION_CREATE_TAX_RATE,
  KEY_ORGANIZATION_CREATE_USERS,
] as const satisfies (keyof OrganizationCreate)[];

/**
 * Api Key Description
 *
 * Description of the organization credential.
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `api_key_description` property of OrganizationCredential objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = organizationcredential[KEY_ORGANIZATION_CREDENTIAL_API_KEY_DESCRIPTION];
 * 
 * // Dynamic property access
 * const propertyName = KEY_ORGANIZATION_CREDENTIAL_API_KEY_DESCRIPTION;
 * const value = organizationcredential[propertyName];
 * ```
 *
 * @see {@link OrganizationCredential} - The TypeScript type definition
 * @see {@link KEYS_ORGANIZATION_CREDENTIAL} - Array of all keys for this type
 */
export const KEY_ORGANIZATION_CREDENTIAL_API_KEY_DESCRIPTION = 'api_key_description' as keyof OrganizationCredential;
/**
 * Api Key Id
 *
 * Unique identifier of the organization credential.
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `api_key_id` property of OrganizationCredential objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = organizationcredential[KEY_ORGANIZATION_CREDENTIAL_API_KEY_ID];
 * 
 * // Dynamic property access
 * const propertyName = KEY_ORGANIZATION_CREDENTIAL_API_KEY_ID;
 * const value = organizationcredential[propertyName];
 * ```
 *
 * @see {@link OrganizationCredential} - The TypeScript type definition
 * @see {@link KEYS_ORGANIZATION_CREDENTIAL} - Array of all keys for this type
 */
export const KEY_ORGANIZATION_CREDENTIAL_API_KEY_ID = 'api_key_id' as keyof OrganizationCredential;
/**
 * Api Key Name
 *
 * Name of the organization credential. Only a-z, A-Z, 0-9, underscore, and hyphen are allowed.
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `api_key_name` property of OrganizationCredential objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = organizationcredential[KEY_ORGANIZATION_CREDENTIAL_API_KEY_NAME];
 * 
 * // Dynamic property access
 * const propertyName = KEY_ORGANIZATION_CREDENTIAL_API_KEY_NAME;
 * const value = organizationcredential[propertyName];
 * ```
 *
 * @see {@link OrganizationCredential} - The TypeScript type definition
 * @see {@link KEYS_ORGANIZATION_CREDENTIAL} - Array of all keys for this type
 */
export const KEY_ORGANIZATION_CREDENTIAL_API_KEY_NAME = 'api_key_name' as keyof OrganizationCredential;
/**
 * Created On
 *
 * The date/time the entry was created on
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `created_on` property of OrganizationCredential objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = organizationcredential[KEY_ORGANIZATION_CREDENTIAL_CREATED_ON];
 * 
 * // Dynamic property access
 * const propertyName = KEY_ORGANIZATION_CREDENTIAL_CREATED_ON;
 * const value = organizationcredential[propertyName];
 * ```
 *
 * @see {@link OrganizationCredential} - The TypeScript type definition
 * @see {@link KEYS_ORGANIZATION_CREDENTIAL} - Array of all keys for this type
 */
export const KEY_ORGANIZATION_CREDENTIAL_CREATED_ON = 'created_on' as keyof OrganizationCredential;
/**
 * Deleted On
 *
 * The date/time the entry was deleted on
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `deleted_on` property of OrganizationCredential objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = organizationcredential[KEY_ORGANIZATION_CREDENTIAL_DELETED_ON];
 * 
 * // Dynamic property access
 * const propertyName = KEY_ORGANIZATION_CREDENTIAL_DELETED_ON;
 * const value = organizationcredential[propertyName];
 * ```
 *
 * @see {@link OrganizationCredential} - The TypeScript type definition
 * @see {@link KEYS_ORGANIZATION_CREDENTIAL} - Array of all keys for this type
 */
export const KEY_ORGANIZATION_CREDENTIAL_DELETED_ON = 'deleted_on' as keyof OrganizationCredential;
/**
 * Last Used On
 *
 * The date/time the entry was deleted on
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `last_used_on` property of OrganizationCredential objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = organizationcredential[KEY_ORGANIZATION_CREDENTIAL_LAST_USED_ON];
 * 
 * // Dynamic property access
 * const propertyName = KEY_ORGANIZATION_CREDENTIAL_LAST_USED_ON;
 * const value = organizationcredential[propertyName];
 * ```
 *
 * @see {@link OrganizationCredential} - The TypeScript type definition
 * @see {@link KEYS_ORGANIZATION_CREDENTIAL} - Array of all keys for this type
 */
export const KEY_ORGANIZATION_CREDENTIAL_LAST_USED_ON = 'last_used_on' as keyof OrganizationCredential;
/**
 * Organization Id
 *
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `organization_id` property of OrganizationCredential objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = organizationcredential[KEY_ORGANIZATION_CREDENTIAL_ORGANIZATION_ID];
 * 
 * // Dynamic property access
 * const propertyName = KEY_ORGANIZATION_CREDENTIAL_ORGANIZATION_ID;
 * const value = organizationcredential[propertyName];
 * ```
 *
 * @see {@link OrganizationCredential} - The TypeScript type definition
 * @see {@link KEYS_ORGANIZATION_CREDENTIAL} - Array of all keys for this type
 */
export const KEY_ORGANIZATION_CREDENTIAL_ORGANIZATION_ID = 'organization_id' as keyof OrganizationCredential;
/**
 * status property
 *
 * The status of the organization credential.
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `status` property of OrganizationCredential objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = organizationcredential[KEY_ORGANIZATION_CREDENTIAL_STATUS];
 * 
 * // Dynamic property access
 * const propertyName = KEY_ORGANIZATION_CREDENTIAL_STATUS;
 * const value = organizationcredential[propertyName];
 * ```
 *
 * @see {@link OrganizationCredential} - The TypeScript type definition
 * @see {@link KEYS_ORGANIZATION_CREDENTIAL} - Array of all keys for this type
 */
export const KEY_ORGANIZATION_CREDENTIAL_STATUS = 'status' as keyof OrganizationCredential;

/**
 * Array of all OrganizationCredential property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for OrganizationCredential objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all keys
 * for (const key of KEYS_ORGANIZATION_CREDENTIAL) {
 *   console.log(`Property: ${key}, Value: ${organizationcredential[key]}`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_ORGANIZATION_CREDENTIAL.includes(someKey);
 * ```
 *
 * @see {@link OrganizationCredential} - The TypeScript type definition
 */
export const KEYS_ORGANIZATION_CREDENTIAL = [
  KEY_ORGANIZATION_CREDENTIAL_API_KEY_DESCRIPTION,
  KEY_ORGANIZATION_CREDENTIAL_API_KEY_ID,
  KEY_ORGANIZATION_CREDENTIAL_API_KEY_NAME,
  KEY_ORGANIZATION_CREDENTIAL_CREATED_ON,
  KEY_ORGANIZATION_CREDENTIAL_DELETED_ON,
  KEY_ORGANIZATION_CREDENTIAL_LAST_USED_ON,
  KEY_ORGANIZATION_CREDENTIAL_ORGANIZATION_ID,
  KEY_ORGANIZATION_CREDENTIAL_STATUS,
] as const satisfies (keyof OrganizationCredential)[];

/**
 * Api Key
 *
 * Unique identifier of the organization credential.
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `api_key` property of OrganizationCredentialCreated objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = organizationcredentialcreated[KEY_ORGANIZATION_CREDENTIAL_CREATED_API_KEY];
 * 
 * // Dynamic property access
 * const propertyName = KEY_ORGANIZATION_CREDENTIAL_CREATED_API_KEY;
 * const value = organizationcredentialcreated[propertyName];
 * ```
 *
 * @see {@link OrganizationCredentialCreated} - The TypeScript type definition
 * @see {@link KEYS_ORGANIZATION_CREDENTIAL_CREATED} - Array of all keys for this type
 */
export const KEY_ORGANIZATION_CREDENTIAL_CREATED_API_KEY = 'api_key' as keyof OrganizationCredentialCreated;
/**
 * Api Key Description
 *
 * Description of the organization credential.
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `api_key_description` property of OrganizationCredentialCreated objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = organizationcredentialcreated[KEY_ORGANIZATION_CREDENTIAL_CREATED_API_KEY_DESCRIPTION];
 * 
 * // Dynamic property access
 * const propertyName = KEY_ORGANIZATION_CREDENTIAL_CREATED_API_KEY_DESCRIPTION;
 * const value = organizationcredentialcreated[propertyName];
 * ```
 *
 * @see {@link OrganizationCredentialCreated} - The TypeScript type definition
 * @see {@link KEYS_ORGANIZATION_CREDENTIAL_CREATED} - Array of all keys for this type
 */
export const KEY_ORGANIZATION_CREDENTIAL_CREATED_API_KEY_DESCRIPTION = 'api_key_description' as keyof OrganizationCredentialCreated;
/**
 * Api Key Name
 *
 * Name of the organization credential. Only a-z, A-Z, 0-9, underscore, and hyphen are allowed.
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `api_key_name` property of OrganizationCredentialCreated objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = organizationcredentialcreated[KEY_ORGANIZATION_CREDENTIAL_CREATED_API_KEY_NAME];
 * 
 * // Dynamic property access
 * const propertyName = KEY_ORGANIZATION_CREDENTIAL_CREATED_API_KEY_NAME;
 * const value = organizationcredentialcreated[propertyName];
 * ```
 *
 * @see {@link OrganizationCredentialCreated} - The TypeScript type definition
 * @see {@link KEYS_ORGANIZATION_CREDENTIAL_CREATED} - Array of all keys for this type
 */
export const KEY_ORGANIZATION_CREDENTIAL_CREATED_API_KEY_NAME = 'api_key_name' as keyof OrganizationCredentialCreated;
/**
 * Client Id
 *
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `client_id` property of OrganizationCredentialCreated objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = organizationcredentialcreated[KEY_ORGANIZATION_CREDENTIAL_CREATED_CLIENT_ID];
 * 
 * // Dynamic property access
 * const propertyName = KEY_ORGANIZATION_CREDENTIAL_CREATED_CLIENT_ID;
 * const value = organizationcredentialcreated[propertyName];
 * ```
 *
 * @see {@link OrganizationCredentialCreated} - The TypeScript type definition
 * @see {@link KEYS_ORGANIZATION_CREDENTIAL_CREATED} - Array of all keys for this type
 */
export const KEY_ORGANIZATION_CREDENTIAL_CREATED_CLIENT_ID = 'client_id' as keyof OrganizationCredentialCreated;
/**
 * Client Secret
 *
 * Plaintext secret to be hashed (not stored directly in the DB).
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `client_secret` property of OrganizationCredentialCreated objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = organizationcredentialcreated[KEY_ORGANIZATION_CREDENTIAL_CREATED_CLIENT_SECRET];
 * 
 * // Dynamic property access
 * const propertyName = KEY_ORGANIZATION_CREDENTIAL_CREATED_CLIENT_SECRET;
 * const value = organizationcredentialcreated[propertyName];
 * ```
 *
 * @see {@link OrganizationCredentialCreated} - The TypeScript type definition
 * @see {@link KEYS_ORGANIZATION_CREDENTIAL_CREATED} - Array of all keys for this type
 */
export const KEY_ORGANIZATION_CREDENTIAL_CREATED_CLIENT_SECRET = 'client_secret' as keyof OrganizationCredentialCreated;
/**
 * Created On
 *
 * The date/time the entry was created on
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `created_on` property of OrganizationCredentialCreated objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = organizationcredentialcreated[KEY_ORGANIZATION_CREDENTIAL_CREATED_CREATED_ON];
 * 
 * // Dynamic property access
 * const propertyName = KEY_ORGANIZATION_CREDENTIAL_CREATED_CREATED_ON;
 * const value = organizationcredentialcreated[propertyName];
 * ```
 *
 * @see {@link OrganizationCredentialCreated} - The TypeScript type definition
 * @see {@link KEYS_ORGANIZATION_CREDENTIAL_CREATED} - Array of all keys for this type
 */
export const KEY_ORGANIZATION_CREDENTIAL_CREATED_CREATED_ON = 'created_on' as keyof OrganizationCredentialCreated;
/**
 * Deleted On
 *
 * The date/time the entry was deleted on
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `deleted_on` property of OrganizationCredentialCreated objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = organizationcredentialcreated[KEY_ORGANIZATION_CREDENTIAL_CREATED_DELETED_ON];
 * 
 * // Dynamic property access
 * const propertyName = KEY_ORGANIZATION_CREDENTIAL_CREATED_DELETED_ON;
 * const value = organizationcredentialcreated[propertyName];
 * ```
 *
 * @see {@link OrganizationCredentialCreated} - The TypeScript type definition
 * @see {@link KEYS_ORGANIZATION_CREDENTIAL_CREATED} - Array of all keys for this type
 */
export const KEY_ORGANIZATION_CREDENTIAL_CREATED_DELETED_ON = 'deleted_on' as keyof OrganizationCredentialCreated;
/**
 * Last Used On
 *
 * The date/time the entry was deleted on
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `last_used_on` property of OrganizationCredentialCreated objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = organizationcredentialcreated[KEY_ORGANIZATION_CREDENTIAL_CREATED_LAST_USED_ON];
 * 
 * // Dynamic property access
 * const propertyName = KEY_ORGANIZATION_CREDENTIAL_CREATED_LAST_USED_ON;
 * const value = organizationcredentialcreated[propertyName];
 * ```
 *
 * @see {@link OrganizationCredentialCreated} - The TypeScript type definition
 * @see {@link KEYS_ORGANIZATION_CREDENTIAL_CREATED} - Array of all keys for this type
 */
export const KEY_ORGANIZATION_CREDENTIAL_CREATED_LAST_USED_ON = 'last_used_on' as keyof OrganizationCredentialCreated;
/**
 * status property
 *
 * The status of the organization credential.
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `status` property of OrganizationCredentialCreated objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = organizationcredentialcreated[KEY_ORGANIZATION_CREDENTIAL_CREATED_STATUS];
 * 
 * // Dynamic property access
 * const propertyName = KEY_ORGANIZATION_CREDENTIAL_CREATED_STATUS;
 * const value = organizationcredentialcreated[propertyName];
 * ```
 *
 * @see {@link OrganizationCredentialCreated} - The TypeScript type definition
 * @see {@link KEYS_ORGANIZATION_CREDENTIAL_CREATED} - Array of all keys for this type
 */
export const KEY_ORGANIZATION_CREDENTIAL_CREATED_STATUS = 'status' as keyof OrganizationCredentialCreated;

/**
 * Array of all OrganizationCredentialCreated property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for OrganizationCredentialCreated objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all keys
 * for (const key of KEYS_ORGANIZATION_CREDENTIAL_CREATED) {
 *   console.log(`Property: ${key}, Value: ${organizationcredentialcreated[key]}`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_ORGANIZATION_CREDENTIAL_CREATED.includes(someKey);
 * ```
 *
 * @see {@link OrganizationCredentialCreated} - The TypeScript type definition
 */
export const KEYS_ORGANIZATION_CREDENTIAL_CREATED = [
  KEY_ORGANIZATION_CREDENTIAL_CREATED_API_KEY,
  KEY_ORGANIZATION_CREDENTIAL_CREATED_API_KEY_DESCRIPTION,
  KEY_ORGANIZATION_CREDENTIAL_CREATED_API_KEY_NAME,
  KEY_ORGANIZATION_CREDENTIAL_CREATED_CLIENT_ID,
  KEY_ORGANIZATION_CREDENTIAL_CREATED_CLIENT_SECRET,
  KEY_ORGANIZATION_CREDENTIAL_CREATED_CREATED_ON,
  KEY_ORGANIZATION_CREDENTIAL_CREATED_DELETED_ON,
  KEY_ORGANIZATION_CREDENTIAL_CREATED_LAST_USED_ON,
  KEY_ORGANIZATION_CREDENTIAL_CREATED_STATUS,
] as const satisfies (keyof OrganizationCredentialCreated)[];

/**
 * Api Key Description
 *
 * Description of the organization credential.
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `api_key_description` property of OrganizationCredentialExtra objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = organizationcredentialextra[KEY_ORGANIZATION_CREDENTIAL_EXTRA_API_KEY_DESCRIPTION];
 * 
 * // Dynamic property access
 * const propertyName = KEY_ORGANIZATION_CREDENTIAL_EXTRA_API_KEY_DESCRIPTION;
 * const value = organizationcredentialextra[propertyName];
 * ```
 *
 * @see {@link OrganizationCredentialExtra} - The TypeScript type definition
 * @see {@link KEYS_ORGANIZATION_CREDENTIAL_EXTRA} - Array of all keys for this type
 */
export const KEY_ORGANIZATION_CREDENTIAL_EXTRA_API_KEY_DESCRIPTION = 'api_key_description' as keyof OrganizationCredentialExtra;
/**
 * Api Key Name
 *
 * Name of the organization credential. Only a-z, A-Z, 0-9, underscore, and hyphen are allowed.
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `api_key_name` property of OrganizationCredentialExtra objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = organizationcredentialextra[KEY_ORGANIZATION_CREDENTIAL_EXTRA_API_KEY_NAME];
 * 
 * // Dynamic property access
 * const propertyName = KEY_ORGANIZATION_CREDENTIAL_EXTRA_API_KEY_NAME;
 * const value = organizationcredentialextra[propertyName];
 * ```
 *
 * @see {@link OrganizationCredentialExtra} - The TypeScript type definition
 * @see {@link KEYS_ORGANIZATION_CREDENTIAL_EXTRA} - Array of all keys for this type
 */
export const KEY_ORGANIZATION_CREDENTIAL_EXTRA_API_KEY_NAME = 'api_key_name' as keyof OrganizationCredentialExtra;
/**
 * Expires At
 *
 * The date and time the credential expiration.
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `expires_at` property of OrganizationCredentialExtra objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = organizationcredentialextra[KEY_ORGANIZATION_CREDENTIAL_EXTRA_EXPIRES_AT];
 * 
 * // Dynamic property access
 * const propertyName = KEY_ORGANIZATION_CREDENTIAL_EXTRA_EXPIRES_AT;
 * const value = organizationcredentialextra[propertyName];
 * ```
 *
 * @see {@link OrganizationCredentialExtra} - The TypeScript type definition
 * @see {@link KEYS_ORGANIZATION_CREDENTIAL_EXTRA} - Array of all keys for this type
 */
export const KEY_ORGANIZATION_CREDENTIAL_EXTRA_EXPIRES_AT = 'expires_at' as keyof OrganizationCredentialExtra;

/**
 * Array of all OrganizationCredentialExtra property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for OrganizationCredentialExtra objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all keys
 * for (const key of KEYS_ORGANIZATION_CREDENTIAL_EXTRA) {
 *   console.log(`Property: ${key}, Value: ${organizationcredentialextra[key]}`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_ORGANIZATION_CREDENTIAL_EXTRA.includes(someKey);
 * ```
 *
 * @see {@link OrganizationCredentialExtra} - The TypeScript type definition
 */
export const KEYS_ORGANIZATION_CREDENTIAL_EXTRA = [
  KEY_ORGANIZATION_CREDENTIAL_EXTRA_API_KEY_DESCRIPTION,
  KEY_ORGANIZATION_CREDENTIAL_EXTRA_API_KEY_NAME,
  KEY_ORGANIZATION_CREDENTIAL_EXTRA_EXPIRES_AT,
] as const satisfies (keyof OrganizationCredentialExtra)[];

/**
 * Access Token
 *
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `access_token` property of OrganizationToken objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = organizationtoken[KEY_ORGANIZATION_TOKEN_ACCESS_TOKEN];
 * 
 * // Dynamic property access
 * const propertyName = KEY_ORGANIZATION_TOKEN_ACCESS_TOKEN;
 * const value = organizationtoken[propertyName];
 * ```
 *
 * @see {@link OrganizationToken} - The TypeScript type definition
 * @see {@link KEYS_ORGANIZATION_TOKEN} - Array of all keys for this type
 */
export const KEY_ORGANIZATION_TOKEN_ACCESS_TOKEN = 'access_token' as keyof OrganizationToken;
/**
 * Expires In
 *
 *
 * @type {integer}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `expires_in` property of OrganizationToken objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = organizationtoken[KEY_ORGANIZATION_TOKEN_EXPIRES_IN];
 * 
 * // Dynamic property access
 * const propertyName = KEY_ORGANIZATION_TOKEN_EXPIRES_IN;
 * const value = organizationtoken[propertyName];
 * ```
 *
 * @see {@link OrganizationToken} - The TypeScript type definition
 * @see {@link KEYS_ORGANIZATION_TOKEN} - Array of all keys for this type
 */
export const KEY_ORGANIZATION_TOKEN_EXPIRES_IN = 'expires_in' as keyof OrganizationToken;
/**
 * Token Type
 *
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `token_type` property of OrganizationToken objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = organizationtoken[KEY_ORGANIZATION_TOKEN_TOKEN_TYPE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_ORGANIZATION_TOKEN_TOKEN_TYPE;
 * const value = organizationtoken[propertyName];
 * ```
 *
 * @see {@link OrganizationToken} - The TypeScript type definition
 * @see {@link KEYS_ORGANIZATION_TOKEN} - Array of all keys for this type
 */
export const KEY_ORGANIZATION_TOKEN_TOKEN_TYPE = 'token_type' as keyof OrganizationToken;

/**
 * Array of all OrganizationToken property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for OrganizationToken objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all keys
 * for (const key of KEYS_ORGANIZATION_TOKEN) {
 *   console.log(`Property: ${key}, Value: ${organizationtoken[key]}`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_ORGANIZATION_TOKEN.includes(someKey);
 * ```
 *
 * @see {@link OrganizationToken} - The TypeScript type definition
 */
export const KEYS_ORGANIZATION_TOKEN = [
  KEY_ORGANIZATION_TOKEN_ACCESS_TOKEN,
  KEY_ORGANIZATION_TOKEN_EXPIRES_IN,
  KEY_ORGANIZATION_TOKEN_TOKEN_TYPE,
] as const satisfies (keyof OrganizationToken)[];

/**
 * Address 1
 *
 * First line of the organization's address.
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `address_1` property of OrganizationUpdate objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = organizationupdate[KEY_ORGANIZATION_UPDATE_ADDRESS_1];
 * 
 * // Dynamic property access
 * const propertyName = KEY_ORGANIZATION_UPDATE_ADDRESS_1;
 * const value = organizationupdate[propertyName];
 * ```
 *
 * @see {@link OrganizationUpdate} - The TypeScript type definition
 * @see {@link KEYS_ORGANIZATION_UPDATE} - Array of all keys for this type
 */
export const KEY_ORGANIZATION_UPDATE_ADDRESS_1 = 'address_1' as keyof OrganizationUpdate;
/**
 * Address 2
 *
 * Second line of the organization's address.
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `address_2` property of OrganizationUpdate objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = organizationupdate[KEY_ORGANIZATION_UPDATE_ADDRESS_2];
 * 
 * // Dynamic property access
 * const propertyName = KEY_ORGANIZATION_UPDATE_ADDRESS_2;
 * const value = organizationupdate[propertyName];
 * ```
 *
 * @see {@link OrganizationUpdate} - The TypeScript type definition
 * @see {@link KEYS_ORGANIZATION_UPDATE} - Array of all keys for this type
 */
export const KEY_ORGANIZATION_UPDATE_ADDRESS_2 = 'address_2' as keyof OrganizationUpdate;
/**
 * Business Number
 *
 * Government issued business identifier for the organization issued.
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `business_number` property of OrganizationUpdate objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = organizationupdate[KEY_ORGANIZATION_UPDATE_BUSINESS_NUMBER];
 * 
 * // Dynamic property access
 * const propertyName = KEY_ORGANIZATION_UPDATE_BUSINESS_NUMBER;
 * const value = organizationupdate[propertyName];
 * ```
 *
 * @see {@link OrganizationUpdate} - The TypeScript type definition
 * @see {@link KEYS_ORGANIZATION_UPDATE} - Array of all keys for this type
 */
export const KEY_ORGANIZATION_UPDATE_BUSINESS_NUMBER = 'business_number' as keyof OrganizationUpdate;
/**
 * City
 *
 * City of the organization's address.
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `city` property of OrganizationUpdate objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = organizationupdate[KEY_ORGANIZATION_UPDATE_CITY];
 * 
 * // Dynamic property access
 * const propertyName = KEY_ORGANIZATION_UPDATE_CITY;
 * const value = organizationupdate[propertyName];
 * ```
 *
 * @see {@link OrganizationUpdate} - The TypeScript type definition
 * @see {@link KEYS_ORGANIZATION_UPDATE} - Array of all keys for this type
 */
export const KEY_ORGANIZATION_UPDATE_CITY = 'city' as keyof OrganizationUpdate;
/**
 * Country Code
 *
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `country_code` property of OrganizationUpdate objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = organizationupdate[KEY_ORGANIZATION_UPDATE_COUNTRY_CODE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_ORGANIZATION_UPDATE_COUNTRY_CODE;
 * const value = organizationupdate[propertyName];
 * ```
 *
 * @see {@link OrganizationUpdate} - The TypeScript type definition
 * @see {@link KEYS_ORGANIZATION_UPDATE} - Array of all keys for this type
 */
export const KEY_ORGANIZATION_UPDATE_COUNTRY_CODE = 'country_code' as keyof OrganizationUpdate;
/**
 * Default Locale
 *
 * Default locale for the organization.
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `default_locale` property of OrganizationUpdate objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = organizationupdate[KEY_ORGANIZATION_UPDATE_DEFAULT_LOCALE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_ORGANIZATION_UPDATE_DEFAULT_LOCALE;
 * const value = organizationupdate[propertyName];
 * ```
 *
 * @see {@link OrganizationUpdate} - The TypeScript type definition
 * @see {@link KEYS_ORGANIZATION_UPDATE} - Array of all keys for this type
 */
export const KEY_ORGANIZATION_UPDATE_DEFAULT_LOCALE = 'default_locale' as keyof OrganizationUpdate;
/**
 * Name
 *
 * Name of the organization.
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `name` property of OrganizationUpdate objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = organizationupdate[KEY_ORGANIZATION_UPDATE_NAME];
 * 
 * // Dynamic property access
 * const propertyName = KEY_ORGANIZATION_UPDATE_NAME;
 * const value = organizationupdate[propertyName];
 * ```
 *
 * @see {@link OrganizationUpdate} - The TypeScript type definition
 * @see {@link KEYS_ORGANIZATION_UPDATE} - Array of all keys for this type
 */
export const KEY_ORGANIZATION_UPDATE_NAME = 'name' as keyof OrganizationUpdate;
/**
 * Postal Code
 *
 * Postal code of the organization's address.
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `postal_code` property of OrganizationUpdate objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = organizationupdate[KEY_ORGANIZATION_UPDATE_POSTAL_CODE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_ORGANIZATION_UPDATE_POSTAL_CODE;
 * const value = organizationupdate[propertyName];
 * ```
 *
 * @see {@link OrganizationUpdate} - The TypeScript type definition
 * @see {@link KEYS_ORGANIZATION_UPDATE} - Array of all keys for this type
 */
export const KEY_ORGANIZATION_UPDATE_POSTAL_CODE = 'postal_code' as keyof OrganizationUpdate;
/**
 * State
 *
 * State or province of the organization's address.
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `state` property of OrganizationUpdate objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = organizationupdate[KEY_ORGANIZATION_UPDATE_STATE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_ORGANIZATION_UPDATE_STATE;
 * const value = organizationupdate[propertyName];
 * ```
 *
 * @see {@link OrganizationUpdate} - The TypeScript type definition
 * @see {@link KEYS_ORGANIZATION_UPDATE} - Array of all keys for this type
 */
export const KEY_ORGANIZATION_UPDATE_STATE = 'state' as keyof OrganizationUpdate;
/**
 * Tax Id
 *
 * Tax ID of the organization.
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `tax_id` property of OrganizationUpdate objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = organizationupdate[KEY_ORGANIZATION_UPDATE_TAX_ID];
 * 
 * // Dynamic property access
 * const propertyName = KEY_ORGANIZATION_UPDATE_TAX_ID;
 * const value = organizationupdate[propertyName];
 * ```
 *
 * @see {@link OrganizationUpdate} - The TypeScript type definition
 * @see {@link KEYS_ORGANIZATION_UPDATE} - Array of all keys for this type
 */
export const KEY_ORGANIZATION_UPDATE_TAX_ID = 'tax_id' as keyof OrganizationUpdate;
/**
 * Tax Id Type
 *
 * Type of tax ID for the organization.
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `tax_id_type` property of OrganizationUpdate objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = organizationupdate[KEY_ORGANIZATION_UPDATE_TAX_ID_TYPE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_ORGANIZATION_UPDATE_TAX_ID_TYPE;
 * const value = organizationupdate[propertyName];
 * ```
 *
 * @see {@link OrganizationUpdate} - The TypeScript type definition
 * @see {@link KEYS_ORGANIZATION_UPDATE} - Array of all keys for this type
 */
export const KEY_ORGANIZATION_UPDATE_TAX_ID_TYPE = 'tax_id_type' as keyof OrganizationUpdate;
/**
 * Tax Rate
 *
 * Tax rate for the organization.
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `tax_rate` property of OrganizationUpdate objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = organizationupdate[KEY_ORGANIZATION_UPDATE_TAX_RATE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_ORGANIZATION_UPDATE_TAX_RATE;
 * const value = organizationupdate[propertyName];
 * ```
 *
 * @see {@link OrganizationUpdate} - The TypeScript type definition
 * @see {@link KEYS_ORGANIZATION_UPDATE} - Array of all keys for this type
 */
export const KEY_ORGANIZATION_UPDATE_TAX_RATE = 'tax_rate' as keyof OrganizationUpdate;

/**
 * Array of all OrganizationUpdate property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for OrganizationUpdate objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all keys
 * for (const key of KEYS_ORGANIZATION_UPDATE) {
 *   console.log(`Property: ${key}, Value: ${organizationupdate[key]}`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_ORGANIZATION_UPDATE.includes(someKey);
 * ```
 *
 * @see {@link OrganizationUpdate} - The TypeScript type definition
 */
export const KEYS_ORGANIZATION_UPDATE = [
  KEY_ORGANIZATION_UPDATE_ADDRESS_1,
  KEY_ORGANIZATION_UPDATE_ADDRESS_2,
  KEY_ORGANIZATION_UPDATE_BUSINESS_NUMBER,
  KEY_ORGANIZATION_UPDATE_CITY,
  KEY_ORGANIZATION_UPDATE_COUNTRY_CODE,
  KEY_ORGANIZATION_UPDATE_DEFAULT_LOCALE,
  KEY_ORGANIZATION_UPDATE_NAME,
  KEY_ORGANIZATION_UPDATE_POSTAL_CODE,
  KEY_ORGANIZATION_UPDATE_STATE,
  KEY_ORGANIZATION_UPDATE_TAX_ID,
  KEY_ORGANIZATION_UPDATE_TAX_ID_TYPE,
  KEY_ORGANIZATION_UPDATE_TAX_RATE,
] as const satisfies (keyof OrganizationUpdate)[];

/**
 * Address 1
 *
 * First line of the organization's address.
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `address_1` property of OrganizationWithPlan objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = organizationwithplan[KEY_ORGANIZATION_WITH_PLAN_ADDRESS_1];
 * 
 * // Dynamic property access
 * const propertyName = KEY_ORGANIZATION_WITH_PLAN_ADDRESS_1;
 * const value = organizationwithplan[propertyName];
 * ```
 *
 * @see {@link OrganizationWithPlan} - The TypeScript type definition
 * @see {@link KEYS_ORGANIZATION_WITH_PLAN} - Array of all keys for this type
 */
export const KEY_ORGANIZATION_WITH_PLAN_ADDRESS_1 = 'address_1' as keyof OrganizationWithPlan;
/**
 * Address 2
 *
 * Second line of the organization's address.
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `address_2` property of OrganizationWithPlan objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = organizationwithplan[KEY_ORGANIZATION_WITH_PLAN_ADDRESS_2];
 * 
 * // Dynamic property access
 * const propertyName = KEY_ORGANIZATION_WITH_PLAN_ADDRESS_2;
 * const value = organizationwithplan[propertyName];
 * ```
 *
 * @see {@link OrganizationWithPlan} - The TypeScript type definition
 * @see {@link KEYS_ORGANIZATION_WITH_PLAN} - Array of all keys for this type
 */
export const KEY_ORGANIZATION_WITH_PLAN_ADDRESS_2 = 'address_2' as keyof OrganizationWithPlan;
/**
 * Attributes
 *
 *
 * @type {array}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `attributes` property of OrganizationWithPlan objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = organizationwithplan[KEY_ORGANIZATION_WITH_PLAN_ATTRIBUTES];
 * 
 * // Dynamic property access
 * const propertyName = KEY_ORGANIZATION_WITH_PLAN_ATTRIBUTES;
 * const value = organizationwithplan[propertyName];
 * ```
 *
 * @see {@link OrganizationWithPlan} - The TypeScript type definition
 * @see {@link KEYS_ORGANIZATION_WITH_PLAN} - Array of all keys for this type
 */
export const KEY_ORGANIZATION_WITH_PLAN_ATTRIBUTES = 'attributes' as keyof OrganizationWithPlan;
/**
 * Business Number
 *
 * Government issued business identifier for the organization issued.
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `business_number` property of OrganizationWithPlan objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = organizationwithplan[KEY_ORGANIZATION_WITH_PLAN_BUSINESS_NUMBER];
 * 
 * // Dynamic property access
 * const propertyName = KEY_ORGANIZATION_WITH_PLAN_BUSINESS_NUMBER;
 * const value = organizationwithplan[propertyName];
 * ```
 *
 * @see {@link OrganizationWithPlan} - The TypeScript type definition
 * @see {@link KEYS_ORGANIZATION_WITH_PLAN} - Array of all keys for this type
 */
export const KEY_ORGANIZATION_WITH_PLAN_BUSINESS_NUMBER = 'business_number' as keyof OrganizationWithPlan;
/**
 * City
 *
 * City of the organization's address.
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `city` property of OrganizationWithPlan objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = organizationwithplan[KEY_ORGANIZATION_WITH_PLAN_CITY];
 * 
 * // Dynamic property access
 * const propertyName = KEY_ORGANIZATION_WITH_PLAN_CITY;
 * const value = organizationwithplan[propertyName];
 * ```
 *
 * @see {@link OrganizationWithPlan} - The TypeScript type definition
 * @see {@link KEYS_ORGANIZATION_WITH_PLAN} - Array of all keys for this type
 */
export const KEY_ORGANIZATION_WITH_PLAN_CITY = 'city' as keyof OrganizationWithPlan;
/**
 * Country Code
 *
 * ISO 3166-1 alpha-2 country code.
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `country_code` property of OrganizationWithPlan objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = organizationwithplan[KEY_ORGANIZATION_WITH_PLAN_COUNTRY_CODE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_ORGANIZATION_WITH_PLAN_COUNTRY_CODE;
 * const value = organizationwithplan[propertyName];
 * ```
 *
 * @see {@link OrganizationWithPlan} - The TypeScript type definition
 * @see {@link KEYS_ORGANIZATION_WITH_PLAN} - Array of all keys for this type
 */
export const KEY_ORGANIZATION_WITH_PLAN_COUNTRY_CODE = 'country_code' as keyof OrganizationWithPlan;
/**
 * Created On
 *
 * The date/time the entry was created on
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `created_on` property of OrganizationWithPlan objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = organizationwithplan[KEY_ORGANIZATION_WITH_PLAN_CREATED_ON];
 * 
 * // Dynamic property access
 * const propertyName = KEY_ORGANIZATION_WITH_PLAN_CREATED_ON;
 * const value = organizationwithplan[propertyName];
 * ```
 *
 * @see {@link OrganizationWithPlan} - The TypeScript type definition
 * @see {@link KEYS_ORGANIZATION_WITH_PLAN} - Array of all keys for this type
 */
export const KEY_ORGANIZATION_WITH_PLAN_CREATED_ON = 'created_on' as keyof OrganizationWithPlan;
/**
 * currency property
 *
 * The currency used by the organization.
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `currency` property of OrganizationWithPlan objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = organizationwithplan[KEY_ORGANIZATION_WITH_PLAN_CURRENCY];
 * 
 * // Dynamic property access
 * const propertyName = KEY_ORGANIZATION_WITH_PLAN_CURRENCY;
 * const value = organizationwithplan[propertyName];
 * ```
 *
 * @see {@link OrganizationWithPlan} - The TypeScript type definition
 * @see {@link KEYS_ORGANIZATION_WITH_PLAN} - Array of all keys for this type
 */
export const KEY_ORGANIZATION_WITH_PLAN_CURRENCY = 'currency' as keyof OrganizationWithPlan;
/**
 * Default Locale
 *
 * Default locale for the organization.
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `default_locale` property of OrganizationWithPlan objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = organizationwithplan[KEY_ORGANIZATION_WITH_PLAN_DEFAULT_LOCALE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_ORGANIZATION_WITH_PLAN_DEFAULT_LOCALE;
 * const value = organizationwithplan[propertyName];
 * ```
 *
 * @see {@link OrganizationWithPlan} - The TypeScript type definition
 * @see {@link KEYS_ORGANIZATION_WITH_PLAN} - Array of all keys for this type
 */
export const KEY_ORGANIZATION_WITH_PLAN_DEFAULT_LOCALE = 'default_locale' as keyof OrganizationWithPlan;
/**
 * Deleted On
 *
 * The date/time the entry was deleted on
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `deleted_on` property of OrganizationWithPlan objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = organizationwithplan[KEY_ORGANIZATION_WITH_PLAN_DELETED_ON];
 * 
 * // Dynamic property access
 * const propertyName = KEY_ORGANIZATION_WITH_PLAN_DELETED_ON;
 * const value = organizationwithplan[propertyName];
 * ```
 *
 * @see {@link OrganizationWithPlan} - The TypeScript type definition
 * @see {@link KEYS_ORGANIZATION_WITH_PLAN} - Array of all keys for this type
 */
export const KEY_ORGANIZATION_WITH_PLAN_DELETED_ON = 'deleted_on' as keyof OrganizationWithPlan;
/**
 * Name
 *
 * Name of the organization.
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `name` property of OrganizationWithPlan objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = organizationwithplan[KEY_ORGANIZATION_WITH_PLAN_NAME];
 * 
 * // Dynamic property access
 * const propertyName = KEY_ORGANIZATION_WITH_PLAN_NAME;
 * const value = organizationwithplan[propertyName];
 * ```
 *
 * @see {@link OrganizationWithPlan} - The TypeScript type definition
 * @see {@link KEYS_ORGANIZATION_WITH_PLAN} - Array of all keys for this type
 */
export const KEY_ORGANIZATION_WITH_PLAN_NAME = 'name' as keyof OrganizationWithPlan;
/**
 * Organization Id
 *
 * Unique identifier for the organization.
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `organization_id` property of OrganizationWithPlan objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = organizationwithplan[KEY_ORGANIZATION_WITH_PLAN_ORGANIZATION_ID];
 * 
 * // Dynamic property access
 * const propertyName = KEY_ORGANIZATION_WITH_PLAN_ORGANIZATION_ID;
 * const value = organizationwithplan[propertyName];
 * ```
 *
 * @see {@link OrganizationWithPlan} - The TypeScript type definition
 * @see {@link KEYS_ORGANIZATION_WITH_PLAN} - Array of all keys for this type
 */
export const KEY_ORGANIZATION_WITH_PLAN_ORGANIZATION_ID = 'organization_id' as keyof OrganizationWithPlan;
/**
 * Parent Organization Id
 *
 * ID of the parent organization.
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `parent_organization_id` property of OrganizationWithPlan objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = organizationwithplan[KEY_ORGANIZATION_WITH_PLAN_PARENT_ORGANIZATION_ID];
 * 
 * // Dynamic property access
 * const propertyName = KEY_ORGANIZATION_WITH_PLAN_PARENT_ORGANIZATION_ID;
 * const value = organizationwithplan[propertyName];
 * ```
 *
 * @see {@link OrganizationWithPlan} - The TypeScript type definition
 * @see {@link KEYS_ORGANIZATION_WITH_PLAN} - Array of all keys for this type
 */
export const KEY_ORGANIZATION_WITH_PLAN_PARENT_ORGANIZATION_ID = 'parent_organization_id' as keyof OrganizationWithPlan;
/**
 * plan property
 *
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `plan` property of OrganizationWithPlan objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = organizationwithplan[KEY_ORGANIZATION_WITH_PLAN_PLAN];
 * 
 * // Dynamic property access
 * const propertyName = KEY_ORGANIZATION_WITH_PLAN_PLAN;
 * const value = organizationwithplan[propertyName];
 * ```
 *
 * @see {@link OrganizationWithPlan} - The TypeScript type definition
 * @see {@link KEYS_ORGANIZATION_WITH_PLAN} - Array of all keys for this type
 */
export const KEY_ORGANIZATION_WITH_PLAN_PLAN = 'plan' as keyof OrganizationWithPlan;
/**
 * Postal Code
 *
 * Postal code of the organization's address.
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `postal_code` property of OrganizationWithPlan objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = organizationwithplan[KEY_ORGANIZATION_WITH_PLAN_POSTAL_CODE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_ORGANIZATION_WITH_PLAN_POSTAL_CODE;
 * const value = organizationwithplan[propertyName];
 * ```
 *
 * @see {@link OrganizationWithPlan} - The TypeScript type definition
 * @see {@link KEYS_ORGANIZATION_WITH_PLAN} - Array of all keys for this type
 */
export const KEY_ORGANIZATION_WITH_PLAN_POSTAL_CODE = 'postal_code' as keyof OrganizationWithPlan;
/**
 * State
 *
 * State or province of the organization's address.
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `state` property of OrganizationWithPlan objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = organizationwithplan[KEY_ORGANIZATION_WITH_PLAN_STATE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_ORGANIZATION_WITH_PLAN_STATE;
 * const value = organizationwithplan[propertyName];
 * ```
 *
 * @see {@link OrganizationWithPlan} - The TypeScript type definition
 * @see {@link KEYS_ORGANIZATION_WITH_PLAN} - Array of all keys for this type
 */
export const KEY_ORGANIZATION_WITH_PLAN_STATE = 'state' as keyof OrganizationWithPlan;
/**
 * status property
 *
 * Status of the organization.
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `status` property of OrganizationWithPlan objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = organizationwithplan[KEY_ORGANIZATION_WITH_PLAN_STATUS];
 * 
 * // Dynamic property access
 * const propertyName = KEY_ORGANIZATION_WITH_PLAN_STATUS;
 * const value = organizationwithplan[propertyName];
 * ```
 *
 * @see {@link OrganizationWithPlan} - The TypeScript type definition
 * @see {@link KEYS_ORGANIZATION_WITH_PLAN} - Array of all keys for this type
 */
export const KEY_ORGANIZATION_WITH_PLAN_STATUS = 'status' as keyof OrganizationWithPlan;
/**
 * Tax Id
 *
 * Tax ID of the organization.
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `tax_id` property of OrganizationWithPlan objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = organizationwithplan[KEY_ORGANIZATION_WITH_PLAN_TAX_ID];
 * 
 * // Dynamic property access
 * const propertyName = KEY_ORGANIZATION_WITH_PLAN_TAX_ID;
 * const value = organizationwithplan[propertyName];
 * ```
 *
 * @see {@link OrganizationWithPlan} - The TypeScript type definition
 * @see {@link KEYS_ORGANIZATION_WITH_PLAN} - Array of all keys for this type
 */
export const KEY_ORGANIZATION_WITH_PLAN_TAX_ID = 'tax_id' as keyof OrganizationWithPlan;
/**
 * Tax Id Type
 *
 * Type of tax ID for the organization.
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `tax_id_type` property of OrganizationWithPlan objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = organizationwithplan[KEY_ORGANIZATION_WITH_PLAN_TAX_ID_TYPE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_ORGANIZATION_WITH_PLAN_TAX_ID_TYPE;
 * const value = organizationwithplan[propertyName];
 * ```
 *
 * @see {@link OrganizationWithPlan} - The TypeScript type definition
 * @see {@link KEYS_ORGANIZATION_WITH_PLAN} - Array of all keys for this type
 */
export const KEY_ORGANIZATION_WITH_PLAN_TAX_ID_TYPE = 'tax_id_type' as keyof OrganizationWithPlan;
/**
 * Tax Rate
 *
 * Tax rate for the organization.
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `tax_rate` property of OrganizationWithPlan objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = organizationwithplan[KEY_ORGANIZATION_WITH_PLAN_TAX_RATE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_ORGANIZATION_WITH_PLAN_TAX_RATE;
 * const value = organizationwithplan[propertyName];
 * ```
 *
 * @see {@link OrganizationWithPlan} - The TypeScript type definition
 * @see {@link KEYS_ORGANIZATION_WITH_PLAN} - Array of all keys for this type
 */
export const KEY_ORGANIZATION_WITH_PLAN_TAX_RATE = 'tax_rate' as keyof OrganizationWithPlan;
/**
 * Users
 *
 *
 * @type {array}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `users` property of OrganizationWithPlan objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = organizationwithplan[KEY_ORGANIZATION_WITH_PLAN_USERS];
 * 
 * // Dynamic property access
 * const propertyName = KEY_ORGANIZATION_WITH_PLAN_USERS;
 * const value = organizationwithplan[propertyName];
 * ```
 *
 * @see {@link OrganizationWithPlan} - The TypeScript type definition
 * @see {@link KEYS_ORGANIZATION_WITH_PLAN} - Array of all keys for this type
 */
export const KEY_ORGANIZATION_WITH_PLAN_USERS = 'users' as keyof OrganizationWithPlan;

/**
 * Array of all OrganizationWithPlan property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for OrganizationWithPlan objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all keys
 * for (const key of KEYS_ORGANIZATION_WITH_PLAN) {
 *   console.log(`Property: ${key}, Value: ${organizationwithplan[key]}`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_ORGANIZATION_WITH_PLAN.includes(someKey);
 * ```
 *
 * @see {@link OrganizationWithPlan} - The TypeScript type definition
 */
export const KEYS_ORGANIZATION_WITH_PLAN = [
  KEY_ORGANIZATION_WITH_PLAN_ADDRESS_1,
  KEY_ORGANIZATION_WITH_PLAN_ADDRESS_2,
  KEY_ORGANIZATION_WITH_PLAN_ATTRIBUTES,
  KEY_ORGANIZATION_WITH_PLAN_BUSINESS_NUMBER,
  KEY_ORGANIZATION_WITH_PLAN_CITY,
  KEY_ORGANIZATION_WITH_PLAN_COUNTRY_CODE,
  KEY_ORGANIZATION_WITH_PLAN_CREATED_ON,
  KEY_ORGANIZATION_WITH_PLAN_CURRENCY,
  KEY_ORGANIZATION_WITH_PLAN_DEFAULT_LOCALE,
  KEY_ORGANIZATION_WITH_PLAN_DELETED_ON,
  KEY_ORGANIZATION_WITH_PLAN_NAME,
  KEY_ORGANIZATION_WITH_PLAN_ORGANIZATION_ID,
  KEY_ORGANIZATION_WITH_PLAN_PARENT_ORGANIZATION_ID,
  KEY_ORGANIZATION_WITH_PLAN_PLAN,
  KEY_ORGANIZATION_WITH_PLAN_POSTAL_CODE,
  KEY_ORGANIZATION_WITH_PLAN_STATE,
  KEY_ORGANIZATION_WITH_PLAN_STATUS,
  KEY_ORGANIZATION_WITH_PLAN_TAX_ID,
  KEY_ORGANIZATION_WITH_PLAN_TAX_ID_TYPE,
  KEY_ORGANIZATION_WITH_PLAN_TAX_RATE,
  KEY_ORGANIZATION_WITH_PLAN_USERS,
] as const satisfies (keyof OrganizationWithPlan)[];

/**
 * Current Page
 *
 *
 * @type {integer}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `current_page` property of PaginationMetadata objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = paginationmetadata[KEY_PAGINATION_METADATA_CURRENT_PAGE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_PAGINATION_METADATA_CURRENT_PAGE;
 * const value = paginationmetadata[propertyName];
 * ```
 *
 * @see {@link PaginationMetadata} - The TypeScript type definition
 * @see {@link KEYS_PAGINATION_METADATA} - Array of all keys for this type
 */
export const KEY_PAGINATION_METADATA_CURRENT_PAGE = 'current_page' as keyof PaginationMetadata;
/**
 * Has Next Page
 *
 *
 * @type {boolean}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `has_next_page` property of PaginationMetadata objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = paginationmetadata[KEY_PAGINATION_METADATA_HAS_NEXT_PAGE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_PAGINATION_METADATA_HAS_NEXT_PAGE;
 * const value = paginationmetadata[propertyName];
 * ```
 *
 * @see {@link PaginationMetadata} - The TypeScript type definition
 * @see {@link KEYS_PAGINATION_METADATA} - Array of all keys for this type
 */
export const KEY_PAGINATION_METADATA_HAS_NEXT_PAGE = 'has_next_page' as keyof PaginationMetadata;
/**
 * Has Previous Page
 *
 *
 * @type {boolean}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `has_previous_page` property of PaginationMetadata objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = paginationmetadata[KEY_PAGINATION_METADATA_HAS_PREVIOUS_PAGE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_PAGINATION_METADATA_HAS_PREVIOUS_PAGE;
 * const value = paginationmetadata[propertyName];
 * ```
 *
 * @see {@link PaginationMetadata} - The TypeScript type definition
 * @see {@link KEYS_PAGINATION_METADATA} - Array of all keys for this type
 */
export const KEY_PAGINATION_METADATA_HAS_PREVIOUS_PAGE = 'has_previous_page' as keyof PaginationMetadata;
/**
 * Page Size
 *
 *
 * @type {integer}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `page_size` property of PaginationMetadata objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = paginationmetadata[KEY_PAGINATION_METADATA_PAGE_SIZE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_PAGINATION_METADATA_PAGE_SIZE;
 * const value = paginationmetadata[propertyName];
 * ```
 *
 * @see {@link PaginationMetadata} - The TypeScript type definition
 * @see {@link KEYS_PAGINATION_METADATA} - Array of all keys for this type
 */
export const KEY_PAGINATION_METADATA_PAGE_SIZE = 'page_size' as keyof PaginationMetadata;
/**
 * Total Items
 *
 *
 * @type {integer}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `total_items` property of PaginationMetadata objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = paginationmetadata[KEY_PAGINATION_METADATA_TOTAL_ITEMS];
 * 
 * // Dynamic property access
 * const propertyName = KEY_PAGINATION_METADATA_TOTAL_ITEMS;
 * const value = paginationmetadata[propertyName];
 * ```
 *
 * @see {@link PaginationMetadata} - The TypeScript type definition
 * @see {@link KEYS_PAGINATION_METADATA} - Array of all keys for this type
 */
export const KEY_PAGINATION_METADATA_TOTAL_ITEMS = 'total_items' as keyof PaginationMetadata;
/**
 * Total Pages
 *
 *
 * @type {integer}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `total_pages` property of PaginationMetadata objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = paginationmetadata[KEY_PAGINATION_METADATA_TOTAL_PAGES];
 * 
 * // Dynamic property access
 * const propertyName = KEY_PAGINATION_METADATA_TOTAL_PAGES;
 * const value = paginationmetadata[propertyName];
 * ```
 *
 * @see {@link PaginationMetadata} - The TypeScript type definition
 * @see {@link KEYS_PAGINATION_METADATA} - Array of all keys for this type
 */
export const KEY_PAGINATION_METADATA_TOTAL_PAGES = 'total_pages' as keyof PaginationMetadata;

/**
 * Array of all PaginationMetadata property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for PaginationMetadata objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all keys
 * for (const key of KEYS_PAGINATION_METADATA) {
 *   console.log(`Property: ${key}, Value: ${paginationmetadata[key]}`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_PAGINATION_METADATA.includes(someKey);
 * ```
 *
 * @see {@link PaginationMetadata} - The TypeScript type definition
 */
export const KEYS_PAGINATION_METADATA = [
  KEY_PAGINATION_METADATA_CURRENT_PAGE,
  KEY_PAGINATION_METADATA_HAS_NEXT_PAGE,
  KEY_PAGINATION_METADATA_HAS_PREVIOUS_PAGE,
  KEY_PAGINATION_METADATA_PAGE_SIZE,
  KEY_PAGINATION_METADATA_TOTAL_ITEMS,
  KEY_PAGINATION_METADATA_TOTAL_PAGES,
] as const satisfies (keyof PaginationMetadata)[];

/**
 * unit property
 *
 * The unit of the period
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `unit` property of Period objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = period[KEY_PERIOD_UNIT];
 * 
 * // Dynamic property access
 * const propertyName = KEY_PERIOD_UNIT;
 * const value = period[propertyName];
 * ```
 *
 * @see {@link Period} - The TypeScript type definition
 * @see {@link KEYS_PERIOD} - Array of all keys for this type
 */
export const KEY_PERIOD_UNIT = 'unit' as keyof Period;
/**
 * Value
 *
 * Amount of time in the unit
 *
 * @type {integer}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `value` property of Period objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = period[KEY_PERIOD_VALUE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_PERIOD_VALUE;
 * const value = period[propertyName];
 * ```
 *
 * @see {@link Period} - The TypeScript type definition
 * @see {@link KEYS_PERIOD} - Array of all keys for this type
 */
export const KEY_PERIOD_VALUE = 'value' as keyof Period;

/**
 * Array of all Period property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for Period objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all keys
 * for (const key of KEYS_PERIOD) {
 *   console.log(`Property: ${key}, Value: ${period[key]}`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_PERIOD.includes(someKey);
 * ```
 *
 * @see {@link Period} - The TypeScript type definition
 */
export const KEYS_PERIOD = [
  KEY_PERIOD_UNIT,
  KEY_PERIOD_VALUE,
] as const satisfies (keyof Period)[];

/**
 * Permissions
 *
 *
 * @type {array}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `permissions` property of PermissionSet objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = permissionset[KEY_PERMISSION_SET_PERMISSIONS];
 * 
 * // Dynamic property access
 * const propertyName = KEY_PERMISSION_SET_PERMISSIONS;
 * const value = permissionset[propertyName];
 * ```
 *
 * @see {@link PermissionSet} - The TypeScript type definition
 * @see {@link KEYS_PERMISSION_SET} - Array of all keys for this type
 */
export const KEY_PERMISSION_SET_PERMISSIONS = 'permissions' as keyof PermissionSet;

/**
 * Array of all PermissionSet property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for PermissionSet objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all keys
 * for (const key of KEYS_PERMISSION_SET) {
 *   console.log(`Property: ${key}, Value: ${permissionset[key]}`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_PERMISSION_SET.includes(someKey);
 * ```
 *
 * @see {@link PermissionSet} - The TypeScript type definition
 */
export const KEYS_PERMISSION_SET = [
  KEY_PERMISSION_SET_PERMISSIONS,
] as const satisfies (keyof PermissionSet)[];

/**
 * plan property
 *
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `plan` property of PlanUpdate objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = planupdate[KEY_PLAN_UPDATE_PLAN];
 * 
 * // Dynamic property access
 * const propertyName = KEY_PLAN_UPDATE_PLAN;
 * const value = planupdate[propertyName];
 * ```
 *
 * @see {@link PlanUpdate} - The TypeScript type definition
 * @see {@link KEYS_PLAN_UPDATE} - Array of all keys for this type
 */
export const KEY_PLAN_UPDATE_PLAN = 'plan' as keyof PlanUpdate;

/**
 * Array of all PlanUpdate property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for PlanUpdate objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all keys
 * for (const key of KEYS_PLAN_UPDATE) {
 *   console.log(`Property: ${key}, Value: ${planupdate[key]}`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_PLAN_UPDATE.includes(someKey);
 * ```
 *
 * @see {@link PlanUpdate} - The TypeScript type definition
 */
export const KEYS_PLAN_UPDATE = [
  KEY_PLAN_UPDATE_PLAN,
] as const satisfies (keyof PlanUpdate)[];

/**
 * Affects
 *
 * What operations are affected by premium status
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `affects` property of PremiumDomainsBase objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = premiumdomainsbase[KEY_PREMIUM_DOMAINS_BASE_AFFECTS];
 * 
 * // Dynamic property access
 * const propertyName = KEY_PREMIUM_DOMAINS_BASE_AFFECTS;
 * const value = premiumdomainsbase[propertyName];
 * ```
 *
 * @see {@link PremiumDomainsBase} - The TypeScript type definition
 * @see {@link KEYS_PREMIUM_DOMAINS_BASE} - Array of all keys for this type
 */
export const KEY_PREMIUM_DOMAINS_BASE_AFFECTS = 'affects' as keyof PremiumDomainsBase;
/**
 * source property
 *
 * Source of premium domain information
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `source` property of PremiumDomainsBase objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = premiumdomainsbase[KEY_PREMIUM_DOMAINS_BASE_SOURCE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_PREMIUM_DOMAINS_BASE_SOURCE;
 * const value = premiumdomainsbase[propertyName];
 * ```
 *
 * @see {@link PremiumDomainsBase} - The TypeScript type definition
 * @see {@link KEYS_PREMIUM_DOMAINS_BASE} - Array of all keys for this type
 */
export const KEY_PREMIUM_DOMAINS_BASE_SOURCE = 'source' as keyof PremiumDomainsBase;
/**
 * Supported
 *
 * Whether the registry has premium domains
 *
 * @type {boolean}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `supported` property of PremiumDomainsBase objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = premiumdomainsbase[KEY_PREMIUM_DOMAINS_BASE_SUPPORTED];
 * 
 * // Dynamic property access
 * const propertyName = KEY_PREMIUM_DOMAINS_BASE_SUPPORTED;
 * const value = premiumdomainsbase[propertyName];
 * ```
 *
 * @see {@link PremiumDomainsBase} - The TypeScript type definition
 * @see {@link KEYS_PREMIUM_DOMAINS_BASE} - Array of all keys for this type
 */
export const KEY_PREMIUM_DOMAINS_BASE_SUPPORTED = 'supported' as keyof PremiumDomainsBase;

/**
 * Array of all PremiumDomainsBase property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for PremiumDomainsBase objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all keys
 * for (const key of KEYS_PREMIUM_DOMAINS_BASE) {
 *   console.log(`Property: ${key}, Value: ${premiumdomainsbase[key]}`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_PREMIUM_DOMAINS_BASE.includes(someKey);
 * ```
 *
 * @see {@link PremiumDomainsBase} - The TypeScript type definition
 */
export const KEYS_PREMIUM_DOMAINS_BASE = [
  KEY_PREMIUM_DOMAINS_BASE_AFFECTS,
  KEY_PREMIUM_DOMAINS_BASE_SOURCE,
  KEY_PREMIUM_DOMAINS_BASE_SUPPORTED,
] as const satisfies (keyof PremiumDomainsBase)[];

/**
 * Problem detail
 *
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `detail` property of Problem objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = problem[KEY_PROBLEM_DETAIL];
 * 
 * // Dynamic property access
 * const propertyName = KEY_PROBLEM_DETAIL;
 * const value = problem[propertyName];
 * ```
 *
 * @see {@link Problem} - The TypeScript type definition
 * @see {@link KEYS_PROBLEM} - Array of all keys for this type
 */
export const KEY_PROBLEM_DETAIL = 'detail' as keyof Problem;
/**
 * Status code
 *
 *
 * @type {integer}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `status` property of Problem objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = problem[KEY_PROBLEM_STATUS];
 * 
 * // Dynamic property access
 * const propertyName = KEY_PROBLEM_STATUS;
 * const value = problem[propertyName];
 * ```
 *
 * @see {@link Problem} - The TypeScript type definition
 * @see {@link KEYS_PROBLEM} - Array of all keys for this type
 */
export const KEY_PROBLEM_STATUS = 'status' as keyof Problem;
/**
 * Problem Title
 *
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `title` property of Problem objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = problem[KEY_PROBLEM_TITLE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_PROBLEM_TITLE;
 * const value = problem[propertyName];
 * ```
 *
 * @see {@link Problem} - The TypeScript type definition
 * @see {@link KEYS_PROBLEM} - Array of all keys for this type
 */
export const KEY_PROBLEM_TITLE = 'title' as keyof Problem;
/**
 * Problem type
 *
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `type` property of Problem objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = problem[KEY_PROBLEM_TYPE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_PROBLEM_TYPE;
 * const value = problem[propertyName];
 * ```
 *
 * @see {@link Problem} - The TypeScript type definition
 * @see {@link KEYS_PROBLEM} - Array of all keys for this type
 */
export const KEY_PROBLEM_TYPE = 'type' as keyof Problem;

/**
 * Array of all Problem property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for Problem objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all keys
 * for (const key of KEYS_PROBLEM) {
 *   console.log(`Property: ${key}, Value: ${problem[key]}`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_PROBLEM.includes(someKey);
 * ```
 *
 * @see {@link Problem} - The TypeScript type definition
 */
export const KEYS_PROBLEM = [
  KEY_PROBLEM_DETAIL,
  KEY_PROBLEM_STATUS,
  KEY_PROBLEM_TITLE,
  KEY_PROBLEM_TYPE,
] as const satisfies (keyof Problem)[];

/**
 * Rdap Server
 *
 * RDAP server URL
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `rdap_server` property of RdapBase objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = rdapbase[KEY_RDAP_BASE_RDAP_SERVER];
 * 
 * // Dynamic property access
 * const propertyName = KEY_RDAP_BASE_RDAP_SERVER;
 * const value = rdapbase[propertyName];
 * ```
 *
 * @see {@link RdapBase} - The TypeScript type definition
 * @see {@link KEYS_RDAP_BASE} - Array of all keys for this type
 */
export const KEY_RDAP_BASE_RDAP_SERVER = 'rdap_server' as keyof RdapBase;

/**
 * Array of all RdapBase property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for RdapBase objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all keys
 * for (const key of KEYS_RDAP_BASE) {
 *   console.log(`Property: ${key}, Value: ${rdapbase[key]}`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_RDAP_BASE.includes(someKey);
 * ```
 *
 * @see {@link RdapBase} - The TypeScript type definition
 */
export const KEYS_RDAP_BASE = [
  KEY_RDAP_BASE_RDAP_SERVER,
] as const satisfies (keyof RdapBase)[];

/**
 * Prevents
 *
 * What operations are prevented by registry lock
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `prevents` property of RegistryLockBase objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = registrylockbase[KEY_REGISTRY_LOCK_BASE_PREVENTS];
 * 
 * // Dynamic property access
 * const propertyName = KEY_REGISTRY_LOCK_BASE_PREVENTS;
 * const value = registrylockbase[propertyName];
 * ```
 *
 * @see {@link RegistryLockBase} - The TypeScript type definition
 * @see {@link KEYS_REGISTRY_LOCK_BASE} - Array of all keys for this type
 */
export const KEY_REGISTRY_LOCK_BASE_PREVENTS = 'prevents' as keyof RegistryLockBase;
/**
 * Removal Process
 *
 * Process for unlocking the domain
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `removal_process` property of RegistryLockBase objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = registrylockbase[KEY_REGISTRY_LOCK_BASE_REMOVAL_PROCESS];
 * 
 * // Dynamic property access
 * const propertyName = KEY_REGISTRY_LOCK_BASE_REMOVAL_PROCESS;
 * const value = registrylockbase[propertyName];
 * ```
 *
 * @see {@link RegistryLockBase} - The TypeScript type definition
 * @see {@link KEYS_REGISTRY_LOCK_BASE} - Array of all keys for this type
 */
export const KEY_REGISTRY_LOCK_BASE_REMOVAL_PROCESS = 'removal_process' as keyof RegistryLockBase;
/**
 * Requires Manual Request
 *
 * Whether a manual request is required
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `requires_manual_request` property of RegistryLockBase objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = registrylockbase[KEY_REGISTRY_LOCK_BASE_REQUIRES_MANUAL_REQUEST];
 * 
 * // Dynamic property access
 * const propertyName = KEY_REGISTRY_LOCK_BASE_REQUIRES_MANUAL_REQUEST;
 * const value = registrylockbase[propertyName];
 * ```
 *
 * @see {@link RegistryLockBase} - The TypeScript type definition
 * @see {@link KEYS_REGISTRY_LOCK_BASE} - Array of all keys for this type
 */
export const KEY_REGISTRY_LOCK_BASE_REQUIRES_MANUAL_REQUEST = 'requires_manual_request' as keyof RegistryLockBase;
/**
 * Supported
 *
 * Whether the registry provides a Registry Lock feature
 *
 * @type {boolean}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `supported` property of RegistryLockBase objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = registrylockbase[KEY_REGISTRY_LOCK_BASE_SUPPORTED];
 * 
 * // Dynamic property access
 * const propertyName = KEY_REGISTRY_LOCK_BASE_SUPPORTED;
 * const value = registrylockbase[propertyName];
 * ```
 *
 * @see {@link RegistryLockBase} - The TypeScript type definition
 * @see {@link KEYS_REGISTRY_LOCK_BASE} - Array of all keys for this type
 */
export const KEY_REGISTRY_LOCK_BASE_SUPPORTED = 'supported' as keyof RegistryLockBase;

/**
 * Array of all RegistryLockBase property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for RegistryLockBase objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all keys
 * for (const key of KEYS_REGISTRY_LOCK_BASE) {
 *   console.log(`Property: ${key}, Value: ${registrylockbase[key]}`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_REGISTRY_LOCK_BASE.includes(someKey);
 * ```
 *
 * @see {@link RegistryLockBase} - The TypeScript type definition
 */
export const KEYS_REGISTRY_LOCK_BASE = [
  KEY_REGISTRY_LOCK_BASE_PREVENTS,
  KEY_REGISTRY_LOCK_BASE_REMOVAL_PROCESS,
  KEY_REGISTRY_LOCK_BASE_REQUIRES_MANUAL_REQUEST,
  KEY_REGISTRY_LOCK_BASE_SUPPORTED,
] as const satisfies (keyof RegistryLockBase)[];

/**
 * Relations
 *
 *
 * @type {array}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `relations` property of RelationSet objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = relationset[KEY_RELATION_SET_RELATIONS];
 * 
 * // Dynamic property access
 * const propertyName = KEY_RELATION_SET_RELATIONS;
 * const value = relationset[propertyName];
 * ```
 *
 * @see {@link RelationSet} - The TypeScript type definition
 * @see {@link KEYS_RELATION_SET} - Array of all keys for this type
 */
export const KEY_RELATION_SET_RELATIONS = 'relations' as keyof RelationSet;

/**
 * Array of all RelationSet property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for RelationSet objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all keys
 * for (const key of KEYS_RELATION_SET) {
 *   console.log(`Property: ${key}, Value: ${relationset[key]}`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_RELATION_SET.includes(someKey);
 * ```
 *
 * @see {@link RelationSet} - The TypeScript type definition
 */
export const KEYS_RELATION_SET = [
  KEY_RELATION_SET_RELATIONS,
] as const satisfies (keyof RelationSet)[];

/**
 * source property
 *
 * Source of reserved domain information
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `source` property of ReservedDomainsBase objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = reserveddomainsbase[KEY_RESERVED_DOMAINS_BASE_SOURCE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_RESERVED_DOMAINS_BASE_SOURCE;
 * const value = reserveddomainsbase[propertyName];
 * ```
 *
 * @see {@link ReservedDomainsBase} - The TypeScript type definition
 * @see {@link KEYS_RESERVED_DOMAINS_BASE} - Array of all keys for this type
 */
export const KEY_RESERVED_DOMAINS_BASE_SOURCE = 'source' as keyof ReservedDomainsBase;
/**
 * Supported
 *
 * Registry provides a reserved list
 *
 * @type {boolean}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `supported` property of ReservedDomainsBase objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = reserveddomainsbase[KEY_RESERVED_DOMAINS_BASE_SUPPORTED];
 * 
 * // Dynamic property access
 * const propertyName = KEY_RESERVED_DOMAINS_BASE_SUPPORTED;
 * const value = reserveddomainsbase[propertyName];
 * ```
 *
 * @see {@link ReservedDomainsBase} - The TypeScript type definition
 * @see {@link KEYS_RESERVED_DOMAINS_BASE} - Array of all keys for this type
 */
export const KEY_RESERVED_DOMAINS_BASE_SUPPORTED = 'supported' as keyof ReservedDomainsBase;
/**
 * Url
 *
 * Link to reserved list
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `url` property of ReservedDomainsBase objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = reserveddomainsbase[KEY_RESERVED_DOMAINS_BASE_URL];
 * 
 * // Dynamic property access
 * const propertyName = KEY_RESERVED_DOMAINS_BASE_URL;
 * const value = reserveddomainsbase[propertyName];
 * ```
 *
 * @see {@link ReservedDomainsBase} - The TypeScript type definition
 * @see {@link KEYS_RESERVED_DOMAINS_BASE} - Array of all keys for this type
 */
export const KEY_RESERVED_DOMAINS_BASE_URL = 'url' as keyof ReservedDomainsBase;

/**
 * Array of all ReservedDomainsBase property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for ReservedDomainsBase objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all keys
 * for (const key of KEYS_RESERVED_DOMAINS_BASE) {
 *   console.log(`Property: ${key}, Value: ${reserveddomainsbase[key]}`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_RESERVED_DOMAINS_BASE.includes(someKey);
 * ```
 *
 * @see {@link ReservedDomainsBase} - The TypeScript type definition
 */
export const KEYS_RESERVED_DOMAINS_BASE = [
  KEY_RESERVED_DOMAINS_BASE_SOURCE,
  KEY_RESERVED_DOMAINS_BASE_SUPPORTED,
  KEY_RESERVED_DOMAINS_BASE_URL,
] as const satisfies (keyof ReservedDomainsBase)[];

/**
 * Report
 *
 * Whether registry supports RGP restore report
 *
 * @type {boolean}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `report` property of RgpOperations objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = rgpoperations[KEY_RGP_OPERATIONS_REPORT];
 * 
 * // Dynamic property access
 * const propertyName = KEY_RGP_OPERATIONS_REPORT;
 * const value = rgpoperations[propertyName];
 * ```
 *
 * @see {@link RgpOperations} - The TypeScript type definition
 * @see {@link KEYS_RGP_OPERATIONS} - Array of all keys for this type
 */
export const KEY_RGP_OPERATIONS_REPORT = 'report' as keyof RgpOperations;
/**
 * Request
 *
 * Whether registry supports RGP restore request
 *
 * @type {boolean}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `request` property of RgpOperations objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = rgpoperations[KEY_RGP_OPERATIONS_REQUEST];
 * 
 * // Dynamic property access
 * const propertyName = KEY_RGP_OPERATIONS_REQUEST;
 * const value = rgpoperations[propertyName];
 * ```
 *
 * @see {@link RgpOperations} - The TypeScript type definition
 * @see {@link KEYS_RGP_OPERATIONS} - Array of all keys for this type
 */
export const KEY_RGP_OPERATIONS_REQUEST = 'request' as keyof RgpOperations;

/**
 * Array of all RgpOperations property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for RgpOperations objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all keys
 * for (const key of KEYS_RGP_OPERATIONS) {
 *   console.log(`Property: ${key}, Value: ${rgpoperations[key]}`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_RGP_OPERATIONS.includes(someKey);
 * ```
 *
 * @see {@link RgpOperations} - The TypeScript type definition
 */
export const KEYS_RGP_OPERATIONS = [
  KEY_RGP_OPERATIONS_REPORT,
  KEY_RGP_OPERATIONS_REQUEST,
] as const satisfies (keyof RgpOperations)[];

/**
 * organization property
 *
 * Organization signup.
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `organization` property of SignupCreate objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = signupcreate[KEY_SIGNUP_CREATE_ORGANIZATION];
 * 
 * // Dynamic property access
 * const propertyName = KEY_SIGNUP_CREATE_ORGANIZATION;
 * const value = signupcreate[propertyName];
 * ```
 *
 * @see {@link SignupCreate} - The TypeScript type definition
 * @see {@link KEYS_SIGNUP_CREATE} - Array of all keys for this type
 */
export const KEY_SIGNUP_CREATE_ORGANIZATION = 'organization' as keyof SignupCreate;
/**
 * terms_of_service property
 *
 * Optional terms of service acceptance.
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `terms_of_service` property of SignupCreate objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = signupcreate[KEY_SIGNUP_CREATE_TERMS_OF_SERVICE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_SIGNUP_CREATE_TERMS_OF_SERVICE;
 * const value = signupcreate[propertyName];
 * ```
 *
 * @see {@link SignupCreate} - The TypeScript type definition
 * @see {@link KEYS_SIGNUP_CREATE} - Array of all keys for this type
 */
export const KEY_SIGNUP_CREATE_TERMS_OF_SERVICE = 'terms_of_service' as keyof SignupCreate;
/**
 * user property
 *
 * User signup to platform.
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `user` property of SignupCreate objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = signupcreate[KEY_SIGNUP_CREATE_USER];
 * 
 * // Dynamic property access
 * const propertyName = KEY_SIGNUP_CREATE_USER;
 * const value = signupcreate[propertyName];
 * ```
 *
 * @see {@link SignupCreate} - The TypeScript type definition
 * @see {@link KEYS_SIGNUP_CREATE} - Array of all keys for this type
 */
export const KEY_SIGNUP_CREATE_USER = 'user' as keyof SignupCreate;

/**
 * Array of all SignupCreate property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for SignupCreate objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all keys
 * for (const key of KEYS_SIGNUP_CREATE) {
 *   console.log(`Property: ${key}, Value: ${signupcreate[key]}`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_SIGNUP_CREATE.includes(someKey);
 * ```
 *
 * @see {@link SignupCreate} - The TypeScript type definition
 */
export const KEYS_SIGNUP_CREATE = [
  KEY_SIGNUP_CREATE_ORGANIZATION,
  KEY_SIGNUP_CREATE_TERMS_OF_SERVICE,
  KEY_SIGNUP_CREATE_USER,
] as const satisfies (keyof SignupCreate)[];

/**
 * Max
 *
 * Maximum length of a domain name
 *
 * @type {integer}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `max` property of SldLength objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = sldlength[KEY_SLD_LENGTH_MAX];
 * 
 * // Dynamic property access
 * const propertyName = KEY_SLD_LENGTH_MAX;
 * const value = sldlength[propertyName];
 * ```
 *
 * @see {@link SldLength} - The TypeScript type definition
 * @see {@link KEYS_SLD_LENGTH} - Array of all keys for this type
 */
export const KEY_SLD_LENGTH_MAX = 'max' as keyof SldLength;
/**
 * Min
 *
 * Minimum length of a domain name
 *
 * @type {integer}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `min` property of SldLength objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = sldlength[KEY_SLD_LENGTH_MIN];
 * 
 * // Dynamic property access
 * const propertyName = KEY_SLD_LENGTH_MIN;
 * const value = sldlength[propertyName];
 * ```
 *
 * @see {@link SldLength} - The TypeScript type definition
 * @see {@link KEYS_SLD_LENGTH} - Array of all keys for this type
 */
export const KEY_SLD_LENGTH_MIN = 'min' as keyof SldLength;

/**
 * Array of all SldLength property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for SldLength objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all keys
 * for (const key of KEYS_SLD_LENGTH) {
 *   console.log(`Property: ${key}, Value: ${sldlength[key]}`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_SLD_LENGTH.includes(someKey);
 * ```
 *
 * @see {@link SldLength} - The TypeScript type definition
 */
export const KEYS_SLD_LENGTH = [
  KEY_SLD_LENGTH_MAX,
  KEY_SLD_LENGTH_MIN,
] as const satisfies (keyof SldLength)[];

/**
 * Add
 *
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `add` property of SpiceDbRelationshipUpdate objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = spicedbrelationshipupdate[KEY_SPICE_DB_RELATIONSHIP_UPDATE_ADD];
 * 
 * // Dynamic property access
 * const propertyName = KEY_SPICE_DB_RELATIONSHIP_UPDATE_ADD;
 * const value = spicedbrelationshipupdate[propertyName];
 * ```
 *
 * @see {@link SpiceDbRelationshipUpdate} - The TypeScript type definition
 * @see {@link KEYS_SPICE_DB_RELATIONSHIP_UPDATE} - Array of all keys for this type
 */
export const KEY_SPICE_DB_RELATIONSHIP_UPDATE_ADD = 'add' as keyof SpiceDbRelationshipUpdate;
/**
 * Remove
 *
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `remove` property of SpiceDbRelationshipUpdate objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = spicedbrelationshipupdate[KEY_SPICE_DB_RELATIONSHIP_UPDATE_REMOVE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_SPICE_DB_RELATIONSHIP_UPDATE_REMOVE;
 * const value = spicedbrelationshipupdate[propertyName];
 * ```
 *
 * @see {@link SpiceDbRelationshipUpdate} - The TypeScript type definition
 * @see {@link KEYS_SPICE_DB_RELATIONSHIP_UPDATE} - Array of all keys for this type
 */
export const KEY_SPICE_DB_RELATIONSHIP_UPDATE_REMOVE = 'remove' as keyof SpiceDbRelationshipUpdate;

/**
 * Array of all SpiceDbRelationshipUpdate property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for SpiceDbRelationshipUpdate objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all keys
 * for (const key of KEYS_SPICE_DB_RELATIONSHIP_UPDATE) {
 *   console.log(`Property: ${key}, Value: ${spicedbrelationshipupdate[key]}`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_SPICE_DB_RELATIONSHIP_UPDATE.includes(someKey);
 * ```
 *
 * @see {@link SpiceDbRelationshipUpdate} - The TypeScript type definition
 */
export const KEYS_SPICE_DB_RELATIONSHIP_UPDATE = [
  KEY_SPICE_DB_RELATIONSHIP_UPDATE_ADD,
  KEY_SPICE_DB_RELATIONSHIP_UPDATE_REMOVE,
] as const satisfies (keyof SpiceDbRelationshipUpdate)[];

/**
 * Accepted
 *
 *
 * @type {boolean}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `accepted` property of TermsOfServiceAccept objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = termsofserviceaccept[KEY_TERMS_OF_SERVICE_ACCEPT_ACCEPTED];
 * 
 * // Dynamic property access
 * const propertyName = KEY_TERMS_OF_SERVICE_ACCEPT_ACCEPTED;
 * const value = termsofserviceaccept[propertyName];
 * ```
 *
 * @see {@link TermsOfServiceAccept} - The TypeScript type definition
 * @see {@link KEYS_TERMS_OF_SERVICE_ACCEPT} - Array of all keys for this type
 */
export const KEY_TERMS_OF_SERVICE_ACCEPT_ACCEPTED = 'accepted' as keyof TermsOfServiceAccept;

/**
 * Array of all TermsOfServiceAccept property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for TermsOfServiceAccept objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all keys
 * for (const key of KEYS_TERMS_OF_SERVICE_ACCEPT) {
 *   console.log(`Property: ${key}, Value: ${termsofserviceaccept[key]}`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_TERMS_OF_SERVICE_ACCEPT.includes(someKey);
 * ```
 *
 * @see {@link TermsOfServiceAccept} - The TypeScript type definition
 */
export const KEYS_TERMS_OF_SERVICE_ACCEPT = [
  KEY_TERMS_OF_SERVICE_ACCEPT_ACCEPTED,
] as const satisfies (keyof TermsOfServiceAccept)[];

/**
 * Name
 *
 * The TLD being configured
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `name` property of TldBase objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = tldbase[KEY_TLD_BASE_NAME];
 * 
 * // Dynamic property access
 * const propertyName = KEY_TLD_BASE_NAME;
 * const value = tldbase[propertyName];
 * ```
 *
 * @see {@link TldBase} - The TypeScript type definition
 * @see {@link KEYS_TLD_BASE} - Array of all keys for this type
 */
export const KEY_TLD_BASE_NAME = 'name' as keyof TldBase;
/**
 * type property
 *
 * The type of the TLD (e.g., gTLD, ccTLD)
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `type` property of TldBase objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = tldbase[KEY_TLD_BASE_TYPE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_TLD_BASE_TYPE;
 * const value = tldbase[propertyName];
 * ```
 *
 * @see {@link TldBase} - The TypeScript type definition
 * @see {@link KEYS_TLD_BASE} - Array of all keys for this type
 */
export const KEY_TLD_BASE_TYPE = 'type' as keyof TldBase;

/**
 * Array of all TldBase property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for TldBase objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all keys
 * for (const key of KEYS_TLD_BASE) {
 *   console.log(`Property: ${key}, Value: ${tldbase[key]}`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_TLD_BASE.includes(someKey);
 * ```
 *
 * @see {@link TldBase} - The TypeScript type definition
 */
export const KEYS_TLD_BASE = [
  KEY_TLD_BASE_NAME,
  KEY_TLD_BASE_TYPE,
] as const satisfies (keyof TldBase)[];

/**
 * Tld
 *
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `tld` property of TldResponseShort objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = tldresponseshort[KEY_TLD_RESPONSE_SHORT_TLD];
 * 
 * // Dynamic property access
 * const propertyName = KEY_TLD_RESPONSE_SHORT_TLD;
 * const value = tldresponseshort[propertyName];
 * ```
 *
 * @see {@link TldResponseShort} - The TypeScript type definition
 * @see {@link KEYS_TLD_RESPONSE_SHORT} - Array of all keys for this type
 */
export const KEY_TLD_RESPONSE_SHORT_TLD = 'tld' as keyof TldResponseShort;
/**
 * type property
 *
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `type` property of TldResponseShort objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = tldresponseshort[KEY_TLD_RESPONSE_SHORT_TYPE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_TLD_RESPONSE_SHORT_TYPE;
 * const value = tldresponseshort[propertyName];
 * ```
 *
 * @see {@link TldResponseShort} - The TypeScript type definition
 * @see {@link KEYS_TLD_RESPONSE_SHORT} - Array of all keys for this type
 */
export const KEY_TLD_RESPONSE_SHORT_TYPE = 'type' as keyof TldResponseShort;

/**
 * Array of all TldResponseShort property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for TldResponseShort objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all keys
 * for (const key of KEYS_TLD_RESPONSE_SHORT) {
 *   console.log(`Property: ${key}, Value: ${tldresponseshort[key]}`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_TLD_RESPONSE_SHORT.includes(someKey);
 * ```
 *
 * @see {@link TldResponseShort} - The TypeScript type definition
 */
export const KEYS_TLD_RESPONSE_SHORT = [
  KEY_TLD_RESPONSE_SHORT_TLD,
  KEY_TLD_RESPONSE_SHORT_TYPE,
] as const satisfies (keyof TldResponseShort)[];

/**
 * characters property
 *
 * Character limits for domain names
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `characters` property of TldSpecification objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = tldspecification[KEY_TLD_SPECIFICATION_CHARACTERS];
 * 
 * // Dynamic property access
 * const propertyName = KEY_TLD_SPECIFICATION_CHARACTERS;
 * const value = tldspecification[propertyName];
 * ```
 *
 * @see {@link TldSpecification} - The TypeScript type definition
 * @see {@link KEYS_TLD_SPECIFICATION} - Array of all keys for this type
 */
export const KEY_TLD_SPECIFICATION_CHARACTERS = 'characters' as keyof TldSpecification;
/**
 * contacts property
 *
 * Contacts configuration
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `contacts` property of TldSpecification objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = tldspecification[KEY_TLD_SPECIFICATION_CONTACTS];
 * 
 * // Dynamic property access
 * const propertyName = KEY_TLD_SPECIFICATION_CONTACTS;
 * const value = tldspecification[propertyName];
 * ```
 *
 * @see {@link TldSpecification} - The TypeScript type definition
 * @see {@link KEYS_TLD_SPECIFICATION} - Array of all keys for this type
 */
export const KEY_TLD_SPECIFICATION_CONTACTS = 'contacts' as keyof TldSpecification;
/**
 * dns_configuration property
 *
 * DNS configuration
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `dns_configuration` property of TldSpecification objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = tldspecification[KEY_TLD_SPECIFICATION_DNS_CONFIGURATION];
 * 
 * // Dynamic property access
 * const propertyName = KEY_TLD_SPECIFICATION_DNS_CONFIGURATION;
 * const value = tldspecification[propertyName];
 * ```
 *
 * @see {@link TldSpecification} - The TypeScript type definition
 * @see {@link KEYS_TLD_SPECIFICATION} - Array of all keys for this type
 */
export const KEY_TLD_SPECIFICATION_DNS_CONFIGURATION = 'dns_configuration' as keyof TldSpecification;
/**
 * domain_lifecycle property
 *
 * Domain lifecycle configuration
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `domain_lifecycle` property of TldSpecification objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = tldspecification[KEY_TLD_SPECIFICATION_DOMAIN_LIFECYCLE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_TLD_SPECIFICATION_DOMAIN_LIFECYCLE;
 * const value = tldspecification[propertyName];
 * ```
 *
 * @see {@link TldSpecification} - The TypeScript type definition
 * @see {@link KEYS_TLD_SPECIFICATION} - Array of all keys for this type
 */
export const KEY_TLD_SPECIFICATION_DOMAIN_LIFECYCLE = 'domain_lifecycle' as keyof TldSpecification;
/**
 * domain_statuses property
 *
 * Domain statuses configuration
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `domain_statuses` property of TldSpecification objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = tldspecification[KEY_TLD_SPECIFICATION_DOMAIN_STATUSES];
 * 
 * // Dynamic property access
 * const propertyName = KEY_TLD_SPECIFICATION_DOMAIN_STATUSES;
 * const value = tldspecification[propertyName];
 * ```
 *
 * @see {@link TldSpecification} - The TypeScript type definition
 * @see {@link KEYS_TLD_SPECIFICATION} - Array of all keys for this type
 */
export const KEY_TLD_SPECIFICATION_DOMAIN_STATUSES = 'domain_statuses' as keyof TldSpecification;
/**
 * idn property
 *
 * IDN configuration
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `idn` property of TldSpecification objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = tldspecification[KEY_TLD_SPECIFICATION_IDN];
 * 
 * // Dynamic property access
 * const propertyName = KEY_TLD_SPECIFICATION_IDN;
 * const value = tldspecification[propertyName];
 * ```
 *
 * @see {@link TldSpecification} - The TypeScript type definition
 * @see {@link KEYS_TLD_SPECIFICATION} - Array of all keys for this type
 */
export const KEY_TLD_SPECIFICATION_IDN = 'idn' as keyof TldSpecification;
/**
 * launch_phases property
 *
 * Launch phases configuration
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `launch_phases` property of TldSpecification objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = tldspecification[KEY_TLD_SPECIFICATION_LAUNCH_PHASES];
 * 
 * // Dynamic property access
 * const propertyName = KEY_TLD_SPECIFICATION_LAUNCH_PHASES;
 * const value = tldspecification[propertyName];
 * ```
 *
 * @see {@link TldSpecification} - The TypeScript type definition
 * @see {@link KEYS_TLD_SPECIFICATION} - Array of all keys for this type
 */
export const KEY_TLD_SPECIFICATION_LAUNCH_PHASES = 'launch_phases' as keyof TldSpecification;
/**
 * local_presence property
 *
 * Local presence requirements
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `local_presence` property of TldSpecification objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = tldspecification[KEY_TLD_SPECIFICATION_LOCAL_PRESENCE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_TLD_SPECIFICATION_LOCAL_PRESENCE;
 * const value = tldspecification[propertyName];
 * ```
 *
 * @see {@link TldSpecification} - The TypeScript type definition
 * @see {@link KEYS_TLD_SPECIFICATION} - Array of all keys for this type
 */
export const KEY_TLD_SPECIFICATION_LOCAL_PRESENCE = 'local_presence' as keyof TldSpecification;
/**
 * premium_domains property
 *
 * Premium domains configuration
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `premium_domains` property of TldSpecification objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = tldspecification[KEY_TLD_SPECIFICATION_PREMIUM_DOMAINS];
 * 
 * // Dynamic property access
 * const propertyName = KEY_TLD_SPECIFICATION_PREMIUM_DOMAINS;
 * const value = tldspecification[propertyName];
 * ```
 *
 * @see {@link TldSpecification} - The TypeScript type definition
 * @see {@link KEYS_TLD_SPECIFICATION} - Array of all keys for this type
 */
export const KEY_TLD_SPECIFICATION_PREMIUM_DOMAINS = 'premium_domains' as keyof TldSpecification;
/**
 * rdap property
 *
 * RDAP configuration
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `rdap` property of TldSpecification objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = tldspecification[KEY_TLD_SPECIFICATION_RDAP];
 * 
 * // Dynamic property access
 * const propertyName = KEY_TLD_SPECIFICATION_RDAP;
 * const value = tldspecification[propertyName];
 * ```
 *
 * @see {@link TldSpecification} - The TypeScript type definition
 * @see {@link KEYS_TLD_SPECIFICATION} - Array of all keys for this type
 */
export const KEY_TLD_SPECIFICATION_RDAP = 'rdap' as keyof TldSpecification;
/**
 * registry_lock property
 *
 * Registry lock configuration
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `registry_lock` property of TldSpecification objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = tldspecification[KEY_TLD_SPECIFICATION_REGISTRY_LOCK];
 * 
 * // Dynamic property access
 * const propertyName = KEY_TLD_SPECIFICATION_REGISTRY_LOCK;
 * const value = tldspecification[propertyName];
 * ```
 *
 * @see {@link TldSpecification} - The TypeScript type definition
 * @see {@link KEYS_TLD_SPECIFICATION} - Array of all keys for this type
 */
export const KEY_TLD_SPECIFICATION_REGISTRY_LOCK = 'registry_lock' as keyof TldSpecification;
/**
 * reserved_domains property
 *
 * Reserved domains configuration
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `reserved_domains` property of TldSpecification objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = tldspecification[KEY_TLD_SPECIFICATION_RESERVED_DOMAINS];
 * 
 * // Dynamic property access
 * const propertyName = KEY_TLD_SPECIFICATION_RESERVED_DOMAINS;
 * const value = tldspecification[propertyName];
 * ```
 *
 * @see {@link TldSpecification} - The TypeScript type definition
 * @see {@link KEYS_TLD_SPECIFICATION} - Array of all keys for this type
 */
export const KEY_TLD_SPECIFICATION_RESERVED_DOMAINS = 'reserved_domains' as keyof TldSpecification;
/**
 * Tlds
 *
 * List of TLDs being configured
 *
 * @type {array}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `tlds` property of TldSpecification objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = tldspecification[KEY_TLD_SPECIFICATION_TLDS];
 * 
 * // Dynamic property access
 * const propertyName = KEY_TLD_SPECIFICATION_TLDS;
 * const value = tldspecification[propertyName];
 * ```
 *
 * @see {@link TldSpecification} - The TypeScript type definition
 * @see {@link KEYS_TLD_SPECIFICATION} - Array of all keys for this type
 */
export const KEY_TLD_SPECIFICATION_TLDS = 'tlds' as keyof TldSpecification;
/**
 * transfer_policies property
 *
 * Transfer policies configuration
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `transfer_policies` property of TldSpecification objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = tldspecification[KEY_TLD_SPECIFICATION_TRANSFER_POLICIES];
 * 
 * // Dynamic property access
 * const propertyName = KEY_TLD_SPECIFICATION_TRANSFER_POLICIES;
 * const value = tldspecification[propertyName];
 * ```
 *
 * @see {@link TldSpecification} - The TypeScript type definition
 * @see {@link KEYS_TLD_SPECIFICATION} - Array of all keys for this type
 */
export const KEY_TLD_SPECIFICATION_TRANSFER_POLICIES = 'transfer_policies' as keyof TldSpecification;
/**
 * whois property
 *
 * WHOIS configuration
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `whois` property of TldSpecification objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = tldspecification[KEY_TLD_SPECIFICATION_WHOIS];
 * 
 * // Dynamic property access
 * const propertyName = KEY_TLD_SPECIFICATION_WHOIS;
 * const value = tldspecification[propertyName];
 * ```
 *
 * @see {@link TldSpecification} - The TypeScript type definition
 * @see {@link KEYS_TLD_SPECIFICATION} - Array of all keys for this type
 */
export const KEY_TLD_SPECIFICATION_WHOIS = 'whois' as keyof TldSpecification;

/**
 * Array of all TldSpecification property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for TldSpecification objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all keys
 * for (const key of KEYS_TLD_SPECIFICATION) {
 *   console.log(`Property: ${key}, Value: ${tldspecification[key]}`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_TLD_SPECIFICATION.includes(someKey);
 * ```
 *
 * @see {@link TldSpecification} - The TypeScript type definition
 */
export const KEYS_TLD_SPECIFICATION = [
  KEY_TLD_SPECIFICATION_CHARACTERS,
  KEY_TLD_SPECIFICATION_CONTACTS,
  KEY_TLD_SPECIFICATION_DNS_CONFIGURATION,
  KEY_TLD_SPECIFICATION_DOMAIN_LIFECYCLE,
  KEY_TLD_SPECIFICATION_DOMAIN_STATUSES,
  KEY_TLD_SPECIFICATION_IDN,
  KEY_TLD_SPECIFICATION_LAUNCH_PHASES,
  KEY_TLD_SPECIFICATION_LOCAL_PRESENCE,
  KEY_TLD_SPECIFICATION_PREMIUM_DOMAINS,
  KEY_TLD_SPECIFICATION_RDAP,
  KEY_TLD_SPECIFICATION_REGISTRY_LOCK,
  KEY_TLD_SPECIFICATION_RESERVED_DOMAINS,
  KEY_TLD_SPECIFICATION_TLDS,
  KEY_TLD_SPECIFICATION_TRANSFER_POLICIES,
  KEY_TLD_SPECIFICATION_WHOIS,
] as const satisfies (keyof TldSpecification)[];

/**
 * End Date
 *
 * End date of trademark claims
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `end_date` property of TrademarkClaimsBase objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = trademarkclaimsbase[KEY_TRADEMARK_CLAIMS_BASE_END_DATE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_TRADEMARK_CLAIMS_BASE_END_DATE;
 * const value = trademarkclaimsbase[propertyName];
 * ```
 *
 * @see {@link TrademarkClaimsBase} - The TypeScript type definition
 * @see {@link KEYS_TRADEMARK_CLAIMS_BASE} - Array of all keys for this type
 */
export const KEY_TRADEMARK_CLAIMS_BASE_END_DATE = 'end_date' as keyof TrademarkClaimsBase;
/**
 * Start Date
 *
 * Start date of trademark claims
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `start_date` property of TrademarkClaimsBase objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = trademarkclaimsbase[KEY_TRADEMARK_CLAIMS_BASE_START_DATE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_TRADEMARK_CLAIMS_BASE_START_DATE;
 * const value = trademarkclaimsbase[propertyName];
 * ```
 *
 * @see {@link TrademarkClaimsBase} - The TypeScript type definition
 * @see {@link KEYS_TRADEMARK_CLAIMS_BASE} - Array of all keys for this type
 */
export const KEY_TRADEMARK_CLAIMS_BASE_START_DATE = 'start_date' as keyof TrademarkClaimsBase;
/**
 * Supported
 *
 * Whether trademark claims are supported
 *
 * @type {boolean}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `supported` property of TrademarkClaimsBase objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = trademarkclaimsbase[KEY_TRADEMARK_CLAIMS_BASE_SUPPORTED];
 * 
 * // Dynamic property access
 * const propertyName = KEY_TRADEMARK_CLAIMS_BASE_SUPPORTED;
 * const value = trademarkclaimsbase[propertyName];
 * ```
 *
 * @see {@link TrademarkClaimsBase} - The TypeScript type definition
 * @see {@link KEYS_TRADEMARK_CLAIMS_BASE} - Array of all keys for this type
 */
export const KEY_TRADEMARK_CLAIMS_BASE_SUPPORTED = 'supported' as keyof TrademarkClaimsBase;
/**
 * Tmch Required
 *
 * If true, claim notifications are mandatory within the timeframe
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `tmch_required` property of TrademarkClaimsBase objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = trademarkclaimsbase[KEY_TRADEMARK_CLAIMS_BASE_TMCH_REQUIRED];
 * 
 * // Dynamic property access
 * const propertyName = KEY_TRADEMARK_CLAIMS_BASE_TMCH_REQUIRED;
 * const value = trademarkclaimsbase[propertyName];
 * ```
 *
 * @see {@link TrademarkClaimsBase} - The TypeScript type definition
 * @see {@link KEYS_TRADEMARK_CLAIMS_BASE} - Array of all keys for this type
 */
export const KEY_TRADEMARK_CLAIMS_BASE_TMCH_REQUIRED = 'tmch_required' as keyof TrademarkClaimsBase;

/**
 * Array of all TrademarkClaimsBase property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for TrademarkClaimsBase objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all keys
 * for (const key of KEYS_TRADEMARK_CLAIMS_BASE) {
 *   console.log(`Property: ${key}, Value: ${trademarkclaimsbase[key]}`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_TRADEMARK_CLAIMS_BASE.includes(someKey);
 * ```
 *
 * @see {@link TrademarkClaimsBase} - The TypeScript type definition
 */
export const KEYS_TRADEMARK_CLAIMS_BASE = [
  KEY_TRADEMARK_CLAIMS_BASE_END_DATE,
  KEY_TRADEMARK_CLAIMS_BASE_START_DATE,
  KEY_TRADEMARK_CLAIMS_BASE_SUPPORTED,
  KEY_TRADEMARK_CLAIMS_BASE_TMCH_REQUIRED,
] as const satisfies (keyof TrademarkClaimsBase)[];

/**
 * Authinfo Max Length
 *
 * Maximum length of the auth info
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `authinfo_max_length` property of TransferPoliciesBase objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = transferpoliciesbase[KEY_TRANSFER_POLICIES_BASE_AUTHINFO_MAX_LENGTH];
 * 
 * // Dynamic property access
 * const propertyName = KEY_TRANSFER_POLICIES_BASE_AUTHINFO_MAX_LENGTH;
 * const value = transferpoliciesbase[propertyName];
 * ```
 *
 * @see {@link TransferPoliciesBase} - The TypeScript type definition
 * @see {@link KEYS_TRANSFER_POLICIES_BASE} - Array of all keys for this type
 */
export const KEY_TRANSFER_POLICIES_BASE_AUTHINFO_MAX_LENGTH = 'authinfo_max_length' as keyof TransferPoliciesBase;
/**
 * Authinfo Min Length
 *
 * Minimum length of the auth info
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `authinfo_min_length` property of TransferPoliciesBase objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = transferpoliciesbase[KEY_TRANSFER_POLICIES_BASE_AUTHINFO_MIN_LENGTH];
 * 
 * // Dynamic property access
 * const propertyName = KEY_TRANSFER_POLICIES_BASE_AUTHINFO_MIN_LENGTH;
 * const value = transferpoliciesbase[propertyName];
 * ```
 *
 * @see {@link TransferPoliciesBase} - The TypeScript type definition
 * @see {@link KEYS_TRANSFER_POLICIES_BASE} - Array of all keys for this type
 */
export const KEY_TRANSFER_POLICIES_BASE_AUTHINFO_MIN_LENGTH = 'authinfo_min_length' as keyof TransferPoliciesBase;
/**
 * Authinfo Required
 *
 * Whether an auth info is required for transfers
 *
 * @type {boolean}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `authinfo_required` property of TransferPoliciesBase objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = transferpoliciesbase[KEY_TRANSFER_POLICIES_BASE_AUTHINFO_REQUIRED];
 * 
 * // Dynamic property access
 * const propertyName = KEY_TRANSFER_POLICIES_BASE_AUTHINFO_REQUIRED;
 * const value = transferpoliciesbase[propertyName];
 * ```
 *
 * @see {@link TransferPoliciesBase} - The TypeScript type definition
 * @see {@link KEYS_TRANSFER_POLICIES_BASE} - Array of all keys for this type
 */
export const KEY_TRANSFER_POLICIES_BASE_AUTHINFO_REQUIRED = 'authinfo_required' as keyof TransferPoliciesBase;
/**
 * Authinfo Time Limited
 *
 * Whether an auth info has a time limit
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `authinfo_time_limited` property of TransferPoliciesBase objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = transferpoliciesbase[KEY_TRANSFER_POLICIES_BASE_AUTHINFO_TIME_LIMITED];
 * 
 * // Dynamic property access
 * const propertyName = KEY_TRANSFER_POLICIES_BASE_AUTHINFO_TIME_LIMITED;
 * const value = transferpoliciesbase[propertyName];
 * ```
 *
 * @see {@link TransferPoliciesBase} - The TypeScript type definition
 * @see {@link KEYS_TRANSFER_POLICIES_BASE} - Array of all keys for this type
 */
export const KEY_TRANSFER_POLICIES_BASE_AUTHINFO_TIME_LIMITED = 'authinfo_time_limited' as keyof TransferPoliciesBase;
/**
 * Authinfo Validity Period
 *
 * Validity period of the auth info (e.g., '5D' for 5 days)
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `authinfo_validity_period` property of TransferPoliciesBase objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = transferpoliciesbase[KEY_TRANSFER_POLICIES_BASE_AUTHINFO_VALIDITY_PERIOD];
 * 
 * // Dynamic property access
 * const propertyName = KEY_TRANSFER_POLICIES_BASE_AUTHINFO_VALIDITY_PERIOD;
 * const value = transferpoliciesbase[propertyName];
 * ```
 *
 * @see {@link TransferPoliciesBase} - The TypeScript type definition
 * @see {@link KEYS_TRANSFER_POLICIES_BASE} - Array of all keys for this type
 */
export const KEY_TRANSFER_POLICIES_BASE_AUTHINFO_VALIDITY_PERIOD = 'authinfo_validity_period' as keyof TransferPoliciesBase;
/**
 * Info Contact Authinfo
 *
 * Whether querying a foreign contact with authinfo is possible
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `info_contact_authinfo` property of TransferPoliciesBase objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = transferpoliciesbase[KEY_TRANSFER_POLICIES_BASE_INFO_CONTACT_AUTHINFO];
 * 
 * // Dynamic property access
 * const propertyName = KEY_TRANSFER_POLICIES_BASE_INFO_CONTACT_AUTHINFO;
 * const value = transferpoliciesbase[propertyName];
 * ```
 *
 * @see {@link TransferPoliciesBase} - The TypeScript type definition
 * @see {@link KEYS_TRANSFER_POLICIES_BASE} - Array of all keys for this type
 */
export const KEY_TRANSFER_POLICIES_BASE_INFO_CONTACT_AUTHINFO = 'info_contact_authinfo' as keyof TransferPoliciesBase;
/**
 * Info Domain Authinfo
 *
 * Whether querying a foreign domain with authinfo is possible
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `info_domain_authinfo` property of TransferPoliciesBase objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = transferpoliciesbase[KEY_TRANSFER_POLICIES_BASE_INFO_DOMAIN_AUTHINFO];
 * 
 * // Dynamic property access
 * const propertyName = KEY_TRANSFER_POLICIES_BASE_INFO_DOMAIN_AUTHINFO;
 * const value = transferpoliciesbase[propertyName];
 * ```
 *
 * @see {@link TransferPoliciesBase} - The TypeScript type definition
 * @see {@link KEYS_TRANSFER_POLICIES_BASE} - Array of all keys for this type
 */
export const KEY_TRANSFER_POLICIES_BASE_INFO_DOMAIN_AUTHINFO = 'info_domain_authinfo' as keyof TransferPoliciesBase;
/**
 * Post Transfer Requirements
 *
 * Post-transfer requirements: lists the behaviors, as in ['update_contacts', 'set_transfer_lock'] or [ 'tld_specific' ] for specific behavior
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `post_transfer_requirements` property of TransferPoliciesBase objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = transferpoliciesbase[KEY_TRANSFER_POLICIES_BASE_POST_TRANSFER_REQUIREMENTS];
 * 
 * // Dynamic property access
 * const propertyName = KEY_TRANSFER_POLICIES_BASE_POST_TRANSFER_REQUIREMENTS;
 * const value = transferpoliciesbase[propertyName];
 * ```
 *
 * @see {@link TransferPoliciesBase} - The TypeScript type definition
 * @see {@link KEYS_TRANSFER_POLICIES_BASE} - Array of all keys for this type
 */
export const KEY_TRANSFER_POLICIES_BASE_POST_TRANSFER_REQUIREMENTS = 'post_transfer_requirements' as keyof TransferPoliciesBase;
/**
 * transfer_ack property
 *
 * Whether a transfer can be approved
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `transfer_ack` property of TransferPoliciesBase objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = transferpoliciesbase[KEY_TRANSFER_POLICIES_BASE_TRANSFER_ACK];
 * 
 * // Dynamic property access
 * const propertyName = KEY_TRANSFER_POLICIES_BASE_TRANSFER_ACK;
 * const value = transferpoliciesbase[propertyName];
 * ```
 *
 * @see {@link TransferPoliciesBase} - The TypeScript type definition
 * @see {@link KEYS_TRANSFER_POLICIES_BASE} - Array of all keys for this type
 */
export const KEY_TRANSFER_POLICIES_BASE_TRANSFER_ACK = 'transfer_ack' as keyof TransferPoliciesBase;
/**
 * Transfer Email Required
 *
 * Whether an email confirmation is required to perform the transfer
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `transfer_email_required` property of TransferPoliciesBase objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = transferpoliciesbase[KEY_TRANSFER_POLICIES_BASE_TRANSFER_EMAIL_REQUIRED];
 * 
 * // Dynamic property access
 * const propertyName = KEY_TRANSFER_POLICIES_BASE_TRANSFER_EMAIL_REQUIRED;
 * const value = transferpoliciesbase[propertyName];
 * ```
 *
 * @see {@link TransferPoliciesBase} - The TypeScript type definition
 * @see {@link KEYS_TRANSFER_POLICIES_BASE} - Array of all keys for this type
 */
export const KEY_TRANSFER_POLICIES_BASE_TRANSFER_EMAIL_REQUIRED = 'transfer_email_required' as keyof TransferPoliciesBase;
/**
 * Transfer Lock Enabled
 *
 * Whether transfers are locked by default in our system
 *
 * @type {boolean}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `transfer_lock_enabled` property of TransferPoliciesBase objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = transferpoliciesbase[KEY_TRANSFER_POLICIES_BASE_TRANSFER_LOCK_ENABLED];
 * 
 * // Dynamic property access
 * const propertyName = KEY_TRANSFER_POLICIES_BASE_TRANSFER_LOCK_ENABLED;
 * const value = transferpoliciesbase[propertyName];
 * ```
 *
 * @see {@link TransferPoliciesBase} - The TypeScript type definition
 * @see {@link KEYS_TRANSFER_POLICIES_BASE} - Array of all keys for this type
 */
export const KEY_TRANSFER_POLICIES_BASE_TRANSFER_LOCK_ENABLED = 'transfer_lock_enabled' as keyof TransferPoliciesBase;
/**
 * transfer_nack property
 *
 * Whether a transfer can be denied
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `transfer_nack` property of TransferPoliciesBase objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = transferpoliciesbase[KEY_TRANSFER_POLICIES_BASE_TRANSFER_NACK];
 * 
 * // Dynamic property access
 * const propertyName = KEY_TRANSFER_POLICIES_BASE_TRANSFER_NACK;
 * const value = transferpoliciesbase[propertyName];
 * ```
 *
 * @see {@link TransferPoliciesBase} - The TypeScript type definition
 * @see {@link KEYS_TRANSFER_POLICIES_BASE} - Array of all keys for this type
 */
export const KEY_TRANSFER_POLICIES_BASE_TRANSFER_NACK = 'transfer_nack' as keyof TransferPoliciesBase;
/**
 * Transfer Renewal Period
 *
 * If transfer_renews_domain is true, the renewal period (e.g., '1Y' for 1 year)
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `transfer_renewal_period` property of TransferPoliciesBase objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = transferpoliciesbase[KEY_TRANSFER_POLICIES_BASE_TRANSFER_RENEWAL_PERIOD];
 * 
 * // Dynamic property access
 * const propertyName = KEY_TRANSFER_POLICIES_BASE_TRANSFER_RENEWAL_PERIOD;
 * const value = transferpoliciesbase[propertyName];
 * ```
 *
 * @see {@link TransferPoliciesBase} - The TypeScript type definition
 * @see {@link KEYS_TRANSFER_POLICIES_BASE} - Array of all keys for this type
 */
export const KEY_TRANSFER_POLICIES_BASE_TRANSFER_RENEWAL_PERIOD = 'transfer_renewal_period' as keyof TransferPoliciesBase;
/**
 * Transfer Renews Domain
 *
 * Whether a transfer triggers a domain renewal
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `transfer_renews_domain` property of TransferPoliciesBase objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = transferpoliciesbase[KEY_TRANSFER_POLICIES_BASE_TRANSFER_RENEWS_DOMAIN];
 * 
 * // Dynamic property access
 * const propertyName = KEY_TRANSFER_POLICIES_BASE_TRANSFER_RENEWS_DOMAIN;
 * const value = transferpoliciesbase[propertyName];
 * ```
 *
 * @see {@link TransferPoliciesBase} - The TypeScript type definition
 * @see {@link KEYS_TRANSFER_POLICIES_BASE} - Array of all keys for this type
 */
export const KEY_TRANSFER_POLICIES_BASE_TRANSFER_RENEWS_DOMAIN = 'transfer_renews_domain' as keyof TransferPoliciesBase;
/**
 * Transfer Time
 *
 * Time duration of transfers in ISO 8601 format (e.g., 5D, -7D) according to the policy, 0 = real-time
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `transfer_time` property of TransferPoliciesBase objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = transferpoliciesbase[KEY_TRANSFER_POLICIES_BASE_TRANSFER_TIME];
 * 
 * // Dynamic property access
 * const propertyName = KEY_TRANSFER_POLICIES_BASE_TRANSFER_TIME;
 * const value = transferpoliciesbase[propertyName];
 * ```
 *
 * @see {@link TransferPoliciesBase} - The TypeScript type definition
 * @see {@link KEYS_TRANSFER_POLICIES_BASE} - Array of all keys for this type
 */
export const KEY_TRANSFER_POLICIES_BASE_TRANSFER_TIME = 'transfer_time' as keyof TransferPoliciesBase;

/**
 * Array of all TransferPoliciesBase property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for TransferPoliciesBase objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all keys
 * for (const key of KEYS_TRANSFER_POLICIES_BASE) {
 *   console.log(`Property: ${key}, Value: ${transferpoliciesbase[key]}`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_TRANSFER_POLICIES_BASE.includes(someKey);
 * ```
 *
 * @see {@link TransferPoliciesBase} - The TypeScript type definition
 */
export const KEYS_TRANSFER_POLICIES_BASE = [
  KEY_TRANSFER_POLICIES_BASE_AUTHINFO_MAX_LENGTH,
  KEY_TRANSFER_POLICIES_BASE_AUTHINFO_MIN_LENGTH,
  KEY_TRANSFER_POLICIES_BASE_AUTHINFO_REQUIRED,
  KEY_TRANSFER_POLICIES_BASE_AUTHINFO_TIME_LIMITED,
  KEY_TRANSFER_POLICIES_BASE_AUTHINFO_VALIDITY_PERIOD,
  KEY_TRANSFER_POLICIES_BASE_INFO_CONTACT_AUTHINFO,
  KEY_TRANSFER_POLICIES_BASE_INFO_DOMAIN_AUTHINFO,
  KEY_TRANSFER_POLICIES_BASE_POST_TRANSFER_REQUIREMENTS,
  KEY_TRANSFER_POLICIES_BASE_TRANSFER_ACK,
  KEY_TRANSFER_POLICIES_BASE_TRANSFER_EMAIL_REQUIRED,
  KEY_TRANSFER_POLICIES_BASE_TRANSFER_LOCK_ENABLED,
  KEY_TRANSFER_POLICIES_BASE_TRANSFER_NACK,
  KEY_TRANSFER_POLICIES_BASE_TRANSFER_RENEWAL_PERIOD,
  KEY_TRANSFER_POLICIES_BASE_TRANSFER_RENEWS_DOMAIN,
  KEY_TRANSFER_POLICIES_BASE_TRANSFER_TIME,
] as const satisfies (keyof TransferPoliciesBase)[];

/**
 * Created On
 *
 * The date/time the entry was created on
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `created_on` property of User objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = user[KEY_USER_CREATED_ON];
 * 
 * // Dynamic property access
 * const propertyName = KEY_USER_CREATED_ON;
 * const value = user[propertyName];
 * ```
 *
 * @see {@link User} - The TypeScript type definition
 * @see {@link KEYS_USER} - Array of all keys for this type
 */
export const KEY_USER_CREATED_ON = 'created_on' as keyof User;
/**
 * Deleted On
 *
 * The date/time the entry was deleted on
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `deleted_on` property of User objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = user[KEY_USER_DELETED_ON];
 * 
 * // Dynamic property access
 * const propertyName = KEY_USER_DELETED_ON;
 * const value = user[propertyName];
 * ```
 *
 * @see {@link User} - The TypeScript type definition
 * @see {@link KEYS_USER} - Array of all keys for this type
 */
export const KEY_USER_DELETED_ON = 'deleted_on' as keyof User;
/**
 * Email
 *
 * The user's email address
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `email` property of User objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = user[KEY_USER_EMAIL];
 * 
 * // Dynamic property access
 * const propertyName = KEY_USER_EMAIL;
 * const value = user[propertyName];
 * ```
 *
 * @see {@link User} - The TypeScript type definition
 * @see {@link KEYS_USER} - Array of all keys for this type
 */
export const KEY_USER_EMAIL = 'email' as keyof User;
/**
 * First Name
 *
 * The user's first name
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `first_name` property of User objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = user[KEY_USER_FIRST_NAME];
 * 
 * // Dynamic property access
 * const propertyName = KEY_USER_FIRST_NAME;
 * const value = user[propertyName];
 * ```
 *
 * @see {@link User} - The TypeScript type definition
 * @see {@link KEYS_USER} - Array of all keys for this type
 */
export const KEY_USER_FIRST_NAME = 'first_name' as keyof User;
/**
 * Last Name
 *
 * The user's last name
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `last_name` property of User objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = user[KEY_USER_LAST_NAME];
 * 
 * // Dynamic property access
 * const propertyName = KEY_USER_LAST_NAME;
 * const value = user[propertyName];
 * ```
 *
 * @see {@link User} - The TypeScript type definition
 * @see {@link KEYS_USER} - Array of all keys for this type
 */
export const KEY_USER_LAST_NAME = 'last_name' as keyof User;
/**
 * Locale
 *
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `locale` property of User objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = user[KEY_USER_LOCALE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_USER_LOCALE;
 * const value = user[propertyName];
 * ```
 *
 * @see {@link User} - The TypeScript type definition
 * @see {@link KEYS_USER} - Array of all keys for this type
 */
export const KEY_USER_LOCALE = 'locale' as keyof User;
/**
 * Organization Id
 *
 * The user's organization id
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `organization_id` property of User objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = user[KEY_USER_ORGANIZATION_ID];
 * 
 * // Dynamic property access
 * const propertyName = KEY_USER_ORGANIZATION_ID;
 * const value = user[propertyName];
 * ```
 *
 * @see {@link User} - The TypeScript type definition
 * @see {@link KEYS_USER} - Array of all keys for this type
 */
export const KEY_USER_ORGANIZATION_ID = 'organization_id' as keyof User;
/**
 * Phone
 *
 * The user's phone number
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `phone` property of User objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = user[KEY_USER_PHONE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_USER_PHONE;
 * const value = user[propertyName];
 * ```
 *
 * @see {@link User} - The TypeScript type definition
 * @see {@link KEYS_USER} - Array of all keys for this type
 */
export const KEY_USER_PHONE = 'phone' as keyof User;
/**
 * status property
 *
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `status` property of User objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = user[KEY_USER_STATUS];
 * 
 * // Dynamic property access
 * const propertyName = KEY_USER_STATUS;
 * const value = user[propertyName];
 * ```
 *
 * @see {@link User} - The TypeScript type definition
 * @see {@link KEYS_USER} - Array of all keys for this type
 */
export const KEY_USER_STATUS = 'status' as keyof User;
/**
 * Updated On
 *
 * The date/time the entry was last updated on
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `updated_on` property of User objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = user[KEY_USER_UPDATED_ON];
 * 
 * // Dynamic property access
 * const propertyName = KEY_USER_UPDATED_ON;
 * const value = user[propertyName];
 * ```
 *
 * @see {@link User} - The TypeScript type definition
 * @see {@link KEYS_USER} - Array of all keys for this type
 */
export const KEY_USER_UPDATED_ON = 'updated_on' as keyof User;
/**
 * User Id
 *
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `user_id` property of User objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = user[KEY_USER_USER_ID];
 * 
 * // Dynamic property access
 * const propertyName = KEY_USER_USER_ID;
 * const value = user[propertyName];
 * ```
 *
 * @see {@link User} - The TypeScript type definition
 * @see {@link KEYS_USER} - Array of all keys for this type
 */
export const KEY_USER_USER_ID = 'user_id' as keyof User;
/**
 * Username
 *
 * The user's unique username
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `username` property of User objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = user[KEY_USER_USERNAME];
 * 
 * // Dynamic property access
 * const propertyName = KEY_USER_USERNAME;
 * const value = user[propertyName];
 * ```
 *
 * @see {@link User} - The TypeScript type definition
 * @see {@link KEYS_USER} - Array of all keys for this type
 */
export const KEY_USER_USERNAME = 'username' as keyof User;

/**
 * Array of all User property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for User objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all keys
 * for (const key of KEYS_USER) {
 *   console.log(`Property: ${key}, Value: ${user[key]}`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_USER.includes(someKey);
 * ```
 *
 * @see {@link User} - The TypeScript type definition
 */
export const KEYS_USER = [
  KEY_USER_CREATED_ON,
  KEY_USER_DELETED_ON,
  KEY_USER_EMAIL,
  KEY_USER_FIRST_NAME,
  KEY_USER_LAST_NAME,
  KEY_USER_LOCALE,
  KEY_USER_ORGANIZATION_ID,
  KEY_USER_PHONE,
  KEY_USER_STATUS,
  KEY_USER_UPDATED_ON,
  KEY_USER_USER_ID,
  KEY_USER_USERNAME,
] as const satisfies (keyof User)[];

/**
 * Key
 *
 * Key of the attribute.
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `key` property of UserAttributeBase objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = userattributebase[KEY_USER_ATTRIBUTE_BASE_KEY];
 * 
 * // Dynamic property access
 * const propertyName = KEY_USER_ATTRIBUTE_BASE_KEY;
 * const value = userattributebase[propertyName];
 * ```
 *
 * @see {@link UserAttributeBase} - The TypeScript type definition
 * @see {@link KEYS_USER_ATTRIBUTE_BASE} - Array of all keys for this type
 */
export const KEY_USER_ATTRIBUTE_BASE_KEY = 'key' as keyof UserAttributeBase;
/**
 * value property
 *
 * Value of the attribute.
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `value` property of UserAttributeBase objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = userattributebase[KEY_USER_ATTRIBUTE_BASE_VALUE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_USER_ATTRIBUTE_BASE_VALUE;
 * const value = userattributebase[propertyName];
 * ```
 *
 * @see {@link UserAttributeBase} - The TypeScript type definition
 * @see {@link KEYS_USER_ATTRIBUTE_BASE} - Array of all keys for this type
 */
export const KEY_USER_ATTRIBUTE_BASE_VALUE = 'value' as keyof UserAttributeBase;

/**
 * Array of all UserAttributeBase property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for UserAttributeBase objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all keys
 * for (const key of KEYS_USER_ATTRIBUTE_BASE) {
 *   console.log(`Property: ${key}, Value: ${userattributebase[key]}`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_USER_ATTRIBUTE_BASE.includes(someKey);
 * ```
 *
 * @see {@link UserAttributeBase} - The TypeScript type definition
 */
export const KEYS_USER_ATTRIBUTE_BASE = [
  KEY_USER_ATTRIBUTE_BASE_KEY,
  KEY_USER_ATTRIBUTE_BASE_VALUE,
] as const satisfies (keyof UserAttributeBase)[];

/**
 * Email
 *
 * The user's email address
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `email` property of UserCreate objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = usercreate[KEY_USER_CREATE_EMAIL];
 * 
 * // Dynamic property access
 * const propertyName = KEY_USER_CREATE_EMAIL;
 * const value = usercreate[propertyName];
 * ```
 *
 * @see {@link UserCreate} - The TypeScript type definition
 * @see {@link KEYS_USER_CREATE} - Array of all keys for this type
 */
export const KEY_USER_CREATE_EMAIL = 'email' as keyof UserCreate;
/**
 * First Name
 *
 * The user's first name
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `first_name` property of UserCreate objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = usercreate[KEY_USER_CREATE_FIRST_NAME];
 * 
 * // Dynamic property access
 * const propertyName = KEY_USER_CREATE_FIRST_NAME;
 * const value = usercreate[propertyName];
 * ```
 *
 * @see {@link UserCreate} - The TypeScript type definition
 * @see {@link KEYS_USER_CREATE} - Array of all keys for this type
 */
export const KEY_USER_CREATE_FIRST_NAME = 'first_name' as keyof UserCreate;
/**
 * Last Name
 *
 * The user's last name
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `last_name` property of UserCreate objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = usercreate[KEY_USER_CREATE_LAST_NAME];
 * 
 * // Dynamic property access
 * const propertyName = KEY_USER_CREATE_LAST_NAME;
 * const value = usercreate[propertyName];
 * ```
 *
 * @see {@link UserCreate} - The TypeScript type definition
 * @see {@link KEYS_USER_CREATE} - Array of all keys for this type
 */
export const KEY_USER_CREATE_LAST_NAME = 'last_name' as keyof UserCreate;
/**
 * Locale
 *
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `locale` property of UserCreate objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = usercreate[KEY_USER_CREATE_LOCALE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_USER_CREATE_LOCALE;
 * const value = usercreate[propertyName];
 * ```
 *
 * @see {@link UserCreate} - The TypeScript type definition
 * @see {@link KEYS_USER_CREATE} - Array of all keys for this type
 */
export const KEY_USER_CREATE_LOCALE = 'locale' as keyof UserCreate;
/**
 * Password
 *
 * Plaintext password for hashing during creation
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `password` property of UserCreate objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = usercreate[KEY_USER_CREATE_PASSWORD];
 * 
 * // Dynamic property access
 * const propertyName = KEY_USER_CREATE_PASSWORD;
 * const value = usercreate[propertyName];
 * ```
 *
 * @see {@link UserCreate} - The TypeScript type definition
 * @see {@link KEYS_USER_CREATE} - Array of all keys for this type
 */
export const KEY_USER_CREATE_PASSWORD = 'password' as keyof UserCreate;
/**
 * Phone
 *
 * The user's phone number
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `phone` property of UserCreate objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = usercreate[KEY_USER_CREATE_PHONE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_USER_CREATE_PHONE;
 * const value = usercreate[propertyName];
 * ```
 *
 * @see {@link UserCreate} - The TypeScript type definition
 * @see {@link KEYS_USER_CREATE} - Array of all keys for this type
 */
export const KEY_USER_CREATE_PHONE = 'phone' as keyof UserCreate;
/**
 * User Attributes
 *
 * User attributes
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `user_attributes` property of UserCreate objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = usercreate[KEY_USER_CREATE_USER_ATTRIBUTES];
 * 
 * // Dynamic property access
 * const propertyName = KEY_USER_CREATE_USER_ATTRIBUTES;
 * const value = usercreate[propertyName];
 * ```
 *
 * @see {@link UserCreate} - The TypeScript type definition
 * @see {@link KEYS_USER_CREATE} - Array of all keys for this type
 */
export const KEY_USER_CREATE_USER_ATTRIBUTES = 'user_attributes' as keyof UserCreate;
/**
 * Username
 *
 * The user's unique username
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `username` property of UserCreate objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = usercreate[KEY_USER_CREATE_USERNAME];
 * 
 * // Dynamic property access
 * const propertyName = KEY_USER_CREATE_USERNAME;
 * const value = usercreate[propertyName];
 * ```
 *
 * @see {@link UserCreate} - The TypeScript type definition
 * @see {@link KEYS_USER_CREATE} - Array of all keys for this type
 */
export const KEY_USER_CREATE_USERNAME = 'username' as keyof UserCreate;

/**
 * Array of all UserCreate property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for UserCreate objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all keys
 * for (const key of KEYS_USER_CREATE) {
 *   console.log(`Property: ${key}, Value: ${usercreate[key]}`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_USER_CREATE.includes(someKey);
 * ```
 *
 * @see {@link UserCreate} - The TypeScript type definition
 */
export const KEYS_USER_CREATE = [
  KEY_USER_CREATE_EMAIL,
  KEY_USER_CREATE_FIRST_NAME,
  KEY_USER_CREATE_LAST_NAME,
  KEY_USER_CREATE_LOCALE,
  KEY_USER_CREATE_PASSWORD,
  KEY_USER_CREATE_PHONE,
  KEY_USER_CREATE_USER_ATTRIBUTES,
  KEY_USER_CREATE_USERNAME,
] as const satisfies (keyof UserCreate)[];

/**
 * Created On
 *
 * The date/time the entry was created on
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `created_on` property of UserNotification objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = usernotification[KEY_USER_NOTIFICATION_CREATED_ON];
 * 
 * // Dynamic property access
 * const propertyName = KEY_USER_NOTIFICATION_CREATED_ON;
 * const value = usernotification[propertyName];
 * ```
 *
 * @see {@link UserNotification} - The TypeScript type definition
 * @see {@link KEYS_USER_NOTIFICATION} - Array of all keys for this type
 */
export const KEY_USER_NOTIFICATION_CREATED_ON = 'created_on' as keyof UserNotification;
/**
 * notification property
 *
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `notification` property of UserNotification objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = usernotification[KEY_USER_NOTIFICATION_NOTIFICATION];
 * 
 * // Dynamic property access
 * const propertyName = KEY_USER_NOTIFICATION_NOTIFICATION;
 * const value = usernotification[propertyName];
 * ```
 *
 * @see {@link UserNotification} - The TypeScript type definition
 * @see {@link KEYS_USER_NOTIFICATION} - Array of all keys for this type
 */
export const KEY_USER_NOTIFICATION_NOTIFICATION = 'notification' as keyof UserNotification;
/**
 * Notification Id
 *
 * Unique identifier for the notification
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `notification_id` property of UserNotification objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = usernotification[KEY_USER_NOTIFICATION_NOTIFICATION_ID];
 * 
 * // Dynamic property access
 * const propertyName = KEY_USER_NOTIFICATION_NOTIFICATION_ID;
 * const value = usernotification[propertyName];
 * ```
 *
 * @see {@link UserNotification} - The TypeScript type definition
 * @see {@link KEYS_USER_NOTIFICATION} - Array of all keys for this type
 */
export const KEY_USER_NOTIFICATION_NOTIFICATION_ID = 'notification_id' as keyof UserNotification;
/**
 * status property
 *
 * Whether the user has read the notification
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `status` property of UserNotification objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = usernotification[KEY_USER_NOTIFICATION_STATUS];
 * 
 * // Dynamic property access
 * const propertyName = KEY_USER_NOTIFICATION_STATUS;
 * const value = usernotification[propertyName];
 * ```
 *
 * @see {@link UserNotification} - The TypeScript type definition
 * @see {@link KEYS_USER_NOTIFICATION} - Array of all keys for this type
 */
export const KEY_USER_NOTIFICATION_STATUS = 'status' as keyof UserNotification;
/**
 * Updated On
 *
 * The date/time the entry was last updated on
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `updated_on` property of UserNotification objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = usernotification[KEY_USER_NOTIFICATION_UPDATED_ON];
 * 
 * // Dynamic property access
 * const propertyName = KEY_USER_NOTIFICATION_UPDATED_ON;
 * const value = usernotification[propertyName];
 * ```
 *
 * @see {@link UserNotification} - The TypeScript type definition
 * @see {@link KEYS_USER_NOTIFICATION} - Array of all keys for this type
 */
export const KEY_USER_NOTIFICATION_UPDATED_ON = 'updated_on' as keyof UserNotification;
/**
 * User Id
 *
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `user_id` property of UserNotification objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = usernotification[KEY_USER_NOTIFICATION_USER_ID];
 * 
 * // Dynamic property access
 * const propertyName = KEY_USER_NOTIFICATION_USER_ID;
 * const value = usernotification[propertyName];
 * ```
 *
 * @see {@link UserNotification} - The TypeScript type definition
 * @see {@link KEYS_USER_NOTIFICATION} - Array of all keys for this type
 */
export const KEY_USER_NOTIFICATION_USER_ID = 'user_id' as keyof UserNotification;
/**
 * User Notification Id
 *
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `user_notification_id` property of UserNotification objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = usernotification[KEY_USER_NOTIFICATION_USER_NOTIFICATION_ID];
 * 
 * // Dynamic property access
 * const propertyName = KEY_USER_NOTIFICATION_USER_NOTIFICATION_ID;
 * const value = usernotification[propertyName];
 * ```
 *
 * @see {@link UserNotification} - The TypeScript type definition
 * @see {@link KEYS_USER_NOTIFICATION} - Array of all keys for this type
 */
export const KEY_USER_NOTIFICATION_USER_NOTIFICATION_ID = 'user_notification_id' as keyof UserNotification;

/**
 * Array of all UserNotification property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for UserNotification objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all keys
 * for (const key of KEYS_USER_NOTIFICATION) {
 *   console.log(`Property: ${key}, Value: ${usernotification[key]}`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_USER_NOTIFICATION.includes(someKey);
 * ```
 *
 * @see {@link UserNotification} - The TypeScript type definition
 */
export const KEYS_USER_NOTIFICATION = [
  KEY_USER_NOTIFICATION_CREATED_ON,
  KEY_USER_NOTIFICATION_NOTIFICATION,
  KEY_USER_NOTIFICATION_NOTIFICATION_ID,
  KEY_USER_NOTIFICATION_STATUS,
  KEY_USER_NOTIFICATION_UPDATED_ON,
  KEY_USER_NOTIFICATION_USER_ID,
  KEY_USER_NOTIFICATION_USER_NOTIFICATION_ID,
] as const satisfies (keyof UserNotification)[];

/**
 * notification property
 *
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `notification` property of UserNotificationSummary objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = usernotificationsummary[KEY_USER_NOTIFICATION_SUMMARY_NOTIFICATION];
 * 
 * // Dynamic property access
 * const propertyName = KEY_USER_NOTIFICATION_SUMMARY_NOTIFICATION;
 * const value = usernotificationsummary[propertyName];
 * ```
 *
 * @see {@link UserNotificationSummary} - The TypeScript type definition
 * @see {@link KEYS_USER_NOTIFICATION_SUMMARY} - Array of all keys for this type
 */
export const KEY_USER_NOTIFICATION_SUMMARY_NOTIFICATION = 'notification' as keyof UserNotificationSummary;
/**
 * status property
 *
 * Whether the user has read the notification
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `status` property of UserNotificationSummary objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = usernotificationsummary[KEY_USER_NOTIFICATION_SUMMARY_STATUS];
 * 
 * // Dynamic property access
 * const propertyName = KEY_USER_NOTIFICATION_SUMMARY_STATUS;
 * const value = usernotificationsummary[propertyName];
 * ```
 *
 * @see {@link UserNotificationSummary} - The TypeScript type definition
 * @see {@link KEYS_USER_NOTIFICATION_SUMMARY} - Array of all keys for this type
 */
export const KEY_USER_NOTIFICATION_SUMMARY_STATUS = 'status' as keyof UserNotificationSummary;
/**
 * User Notification Id
 *
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `user_notification_id` property of UserNotificationSummary objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = usernotificationsummary[KEY_USER_NOTIFICATION_SUMMARY_USER_NOTIFICATION_ID];
 * 
 * // Dynamic property access
 * const propertyName = KEY_USER_NOTIFICATION_SUMMARY_USER_NOTIFICATION_ID;
 * const value = usernotificationsummary[propertyName];
 * ```
 *
 * @see {@link UserNotificationSummary} - The TypeScript type definition
 * @see {@link KEYS_USER_NOTIFICATION_SUMMARY} - Array of all keys for this type
 */
export const KEY_USER_NOTIFICATION_SUMMARY_USER_NOTIFICATION_ID = 'user_notification_id' as keyof UserNotificationSummary;

/**
 * Array of all UserNotificationSummary property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for UserNotificationSummary objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all keys
 * for (const key of KEYS_USER_NOTIFICATION_SUMMARY) {
 *   console.log(`Property: ${key}, Value: ${usernotificationsummary[key]}`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_USER_NOTIFICATION_SUMMARY.includes(someKey);
 * ```
 *
 * @see {@link UserNotificationSummary} - The TypeScript type definition
 */
export const KEYS_USER_NOTIFICATION_SUMMARY = [
  KEY_USER_NOTIFICATION_SUMMARY_NOTIFICATION,
  KEY_USER_NOTIFICATION_SUMMARY_STATUS,
  KEY_USER_NOTIFICATION_SUMMARY_USER_NOTIFICATION_ID,
] as const satisfies (keyof UserNotificationSummary)[];

/**
 * Access Token
 *
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `access_token` property of UserToken objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = usertoken[KEY_USER_TOKEN_ACCESS_TOKEN];
 * 
 * // Dynamic property access
 * const propertyName = KEY_USER_TOKEN_ACCESS_TOKEN;
 * const value = usertoken[propertyName];
 * ```
 *
 * @see {@link UserToken} - The TypeScript type definition
 * @see {@link KEYS_USER_TOKEN} - Array of all keys for this type
 */
export const KEY_USER_TOKEN_ACCESS_TOKEN = 'access_token' as keyof UserToken;
/**
 * Expires In
 *
 *
 * @type {integer}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `expires_in` property of UserToken objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = usertoken[KEY_USER_TOKEN_EXPIRES_IN];
 * 
 * // Dynamic property access
 * const propertyName = KEY_USER_TOKEN_EXPIRES_IN;
 * const value = usertoken[propertyName];
 * ```
 *
 * @see {@link UserToken} - The TypeScript type definition
 * @see {@link KEYS_USER_TOKEN} - Array of all keys for this type
 */
export const KEY_USER_TOKEN_EXPIRES_IN = 'expires_in' as keyof UserToken;
/**
 * Refresh Expires In
 *
 *
 * @type {integer}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `refresh_expires_in` property of UserToken objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = usertoken[KEY_USER_TOKEN_REFRESH_EXPIRES_IN];
 * 
 * // Dynamic property access
 * const propertyName = KEY_USER_TOKEN_REFRESH_EXPIRES_IN;
 * const value = usertoken[propertyName];
 * ```
 *
 * @see {@link UserToken} - The TypeScript type definition
 * @see {@link KEYS_USER_TOKEN} - Array of all keys for this type
 */
export const KEY_USER_TOKEN_REFRESH_EXPIRES_IN = 'refresh_expires_in' as keyof UserToken;
/**
 * Refresh Token
 *
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `refresh_token` property of UserToken objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = usertoken[KEY_USER_TOKEN_REFRESH_TOKEN];
 * 
 * // Dynamic property access
 * const propertyName = KEY_USER_TOKEN_REFRESH_TOKEN;
 * const value = usertoken[propertyName];
 * ```
 *
 * @see {@link UserToken} - The TypeScript type definition
 * @see {@link KEYS_USER_TOKEN} - Array of all keys for this type
 */
export const KEY_USER_TOKEN_REFRESH_TOKEN = 'refresh_token' as keyof UserToken;
/**
 * Token Type
 *
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `token_type` property of UserToken objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = usertoken[KEY_USER_TOKEN_TOKEN_TYPE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_USER_TOKEN_TOKEN_TYPE;
 * const value = usertoken[propertyName];
 * ```
 *
 * @see {@link UserToken} - The TypeScript type definition
 * @see {@link KEYS_USER_TOKEN} - Array of all keys for this type
 */
export const KEY_USER_TOKEN_TOKEN_TYPE = 'token_type' as keyof UserToken;

/**
 * Array of all UserToken property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for UserToken objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all keys
 * for (const key of KEYS_USER_TOKEN) {
 *   console.log(`Property: ${key}, Value: ${usertoken[key]}`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_USER_TOKEN.includes(someKey);
 * ```
 *
 * @see {@link UserToken} - The TypeScript type definition
 */
export const KEYS_USER_TOKEN = [
  KEY_USER_TOKEN_ACCESS_TOKEN,
  KEY_USER_TOKEN_EXPIRES_IN,
  KEY_USER_TOKEN_REFRESH_EXPIRES_IN,
  KEY_USER_TOKEN_REFRESH_TOKEN,
  KEY_USER_TOKEN_TOKEN_TYPE,
] as const satisfies (keyof UserToken)[];

/**
 * Email
 *
 * The user's email address
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `email` property of UserUpdate objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = userupdate[KEY_USER_UPDATE_EMAIL];
 * 
 * // Dynamic property access
 * const propertyName = KEY_USER_UPDATE_EMAIL;
 * const value = userupdate[propertyName];
 * ```
 *
 * @see {@link UserUpdate} - The TypeScript type definition
 * @see {@link KEYS_USER_UPDATE} - Array of all keys for this type
 */
export const KEY_USER_UPDATE_EMAIL = 'email' as keyof UserUpdate;
/**
 * First Name
 *
 * The user's first name
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `first_name` property of UserUpdate objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = userupdate[KEY_USER_UPDATE_FIRST_NAME];
 * 
 * // Dynamic property access
 * const propertyName = KEY_USER_UPDATE_FIRST_NAME;
 * const value = userupdate[propertyName];
 * ```
 *
 * @see {@link UserUpdate} - The TypeScript type definition
 * @see {@link KEYS_USER_UPDATE} - Array of all keys for this type
 */
export const KEY_USER_UPDATE_FIRST_NAME = 'first_name' as keyof UserUpdate;
/**
 * Last Name
 *
 * The user's last name
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `last_name` property of UserUpdate objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = userupdate[KEY_USER_UPDATE_LAST_NAME];
 * 
 * // Dynamic property access
 * const propertyName = KEY_USER_UPDATE_LAST_NAME;
 * const value = userupdate[propertyName];
 * ```
 *
 * @see {@link UserUpdate} - The TypeScript type definition
 * @see {@link KEYS_USER_UPDATE} - Array of all keys for this type
 */
export const KEY_USER_UPDATE_LAST_NAME = 'last_name' as keyof UserUpdate;
/**
 * Locale
 *
 * The user's locale
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `locale` property of UserUpdate objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = userupdate[KEY_USER_UPDATE_LOCALE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_USER_UPDATE_LOCALE;
 * const value = userupdate[propertyName];
 * ```
 *
 * @see {@link UserUpdate} - The TypeScript type definition
 * @see {@link KEYS_USER_UPDATE} - Array of all keys for this type
 */
export const KEY_USER_UPDATE_LOCALE = 'locale' as keyof UserUpdate;
/**
 * Phone
 *
 * The user's phone number
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `phone` property of UserUpdate objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = userupdate[KEY_USER_UPDATE_PHONE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_USER_UPDATE_PHONE;
 * const value = userupdate[propertyName];
 * ```
 *
 * @see {@link UserUpdate} - The TypeScript type definition
 * @see {@link KEYS_USER_UPDATE} - Array of all keys for this type
 */
export const KEY_USER_UPDATE_PHONE = 'phone' as keyof UserUpdate;
/**
 * User Attributes
 *
 * User attributes
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `user_attributes` property of UserUpdate objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = userupdate[KEY_USER_UPDATE_USER_ATTRIBUTES];
 * 
 * // Dynamic property access
 * const propertyName = KEY_USER_UPDATE_USER_ATTRIBUTES;
 * const value = userupdate[propertyName];
 * ```
 *
 * @see {@link UserUpdate} - The TypeScript type definition
 * @see {@link KEYS_USER_UPDATE} - Array of all keys for this type
 */
export const KEY_USER_UPDATE_USER_ATTRIBUTES = 'user_attributes' as keyof UserUpdate;
/**
 * Username
 *
 * The user's unique username
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `username` property of UserUpdate objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = userupdate[KEY_USER_UPDATE_USERNAME];
 * 
 * // Dynamic property access
 * const propertyName = KEY_USER_UPDATE_USERNAME;
 * const value = userupdate[propertyName];
 * ```
 *
 * @see {@link UserUpdate} - The TypeScript type definition
 * @see {@link KEYS_USER_UPDATE} - Array of all keys for this type
 */
export const KEY_USER_UPDATE_USERNAME = 'username' as keyof UserUpdate;

/**
 * Array of all UserUpdate property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for UserUpdate objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all keys
 * for (const key of KEYS_USER_UPDATE) {
 *   console.log(`Property: ${key}, Value: ${userupdate[key]}`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_USER_UPDATE.includes(someKey);
 * ```
 *
 * @see {@link UserUpdate} - The TypeScript type definition
 */
export const KEYS_USER_UPDATE = [
  KEY_USER_UPDATE_EMAIL,
  KEY_USER_UPDATE_FIRST_NAME,
  KEY_USER_UPDATE_LAST_NAME,
  KEY_USER_UPDATE_LOCALE,
  KEY_USER_UPDATE_PHONE,
  KEY_USER_UPDATE_USER_ATTRIBUTES,
  KEY_USER_UPDATE_USERNAME,
] as const satisfies (keyof UserUpdate)[];

/**
 * Created On
 *
 * The date/time the entry was created on
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `created_on` property of UserWithAttributes objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = userwithattributes[KEY_USER_WITH_ATTRIBUTES_CREATED_ON];
 * 
 * // Dynamic property access
 * const propertyName = KEY_USER_WITH_ATTRIBUTES_CREATED_ON;
 * const value = userwithattributes[propertyName];
 * ```
 *
 * @see {@link UserWithAttributes} - The TypeScript type definition
 * @see {@link KEYS_USER_WITH_ATTRIBUTES} - Array of all keys for this type
 */
export const KEY_USER_WITH_ATTRIBUTES_CREATED_ON = 'created_on' as keyof UserWithAttributes;
/**
 * Deleted On
 *
 * The date/time the entry was deleted on
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `deleted_on` property of UserWithAttributes objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = userwithattributes[KEY_USER_WITH_ATTRIBUTES_DELETED_ON];
 * 
 * // Dynamic property access
 * const propertyName = KEY_USER_WITH_ATTRIBUTES_DELETED_ON;
 * const value = userwithattributes[propertyName];
 * ```
 *
 * @see {@link UserWithAttributes} - The TypeScript type definition
 * @see {@link KEYS_USER_WITH_ATTRIBUTES} - Array of all keys for this type
 */
export const KEY_USER_WITH_ATTRIBUTES_DELETED_ON = 'deleted_on' as keyof UserWithAttributes;
/**
 * Email
 *
 * The user's email address
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `email` property of UserWithAttributes objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = userwithattributes[KEY_USER_WITH_ATTRIBUTES_EMAIL];
 * 
 * // Dynamic property access
 * const propertyName = KEY_USER_WITH_ATTRIBUTES_EMAIL;
 * const value = userwithattributes[propertyName];
 * ```
 *
 * @see {@link UserWithAttributes} - The TypeScript type definition
 * @see {@link KEYS_USER_WITH_ATTRIBUTES} - Array of all keys for this type
 */
export const KEY_USER_WITH_ATTRIBUTES_EMAIL = 'email' as keyof UserWithAttributes;
/**
 * First Name
 *
 * The user's first name
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `first_name` property of UserWithAttributes objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = userwithattributes[KEY_USER_WITH_ATTRIBUTES_FIRST_NAME];
 * 
 * // Dynamic property access
 * const propertyName = KEY_USER_WITH_ATTRIBUTES_FIRST_NAME;
 * const value = userwithattributes[propertyName];
 * ```
 *
 * @see {@link UserWithAttributes} - The TypeScript type definition
 * @see {@link KEYS_USER_WITH_ATTRIBUTES} - Array of all keys for this type
 */
export const KEY_USER_WITH_ATTRIBUTES_FIRST_NAME = 'first_name' as keyof UserWithAttributes;
/**
 * Last Name
 *
 * The user's last name
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `last_name` property of UserWithAttributes objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = userwithattributes[KEY_USER_WITH_ATTRIBUTES_LAST_NAME];
 * 
 * // Dynamic property access
 * const propertyName = KEY_USER_WITH_ATTRIBUTES_LAST_NAME;
 * const value = userwithattributes[propertyName];
 * ```
 *
 * @see {@link UserWithAttributes} - The TypeScript type definition
 * @see {@link KEYS_USER_WITH_ATTRIBUTES} - Array of all keys for this type
 */
export const KEY_USER_WITH_ATTRIBUTES_LAST_NAME = 'last_name' as keyof UserWithAttributes;
/**
 * Locale
 *
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `locale` property of UserWithAttributes objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = userwithattributes[KEY_USER_WITH_ATTRIBUTES_LOCALE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_USER_WITH_ATTRIBUTES_LOCALE;
 * const value = userwithattributes[propertyName];
 * ```
 *
 * @see {@link UserWithAttributes} - The TypeScript type definition
 * @see {@link KEYS_USER_WITH_ATTRIBUTES} - Array of all keys for this type
 */
export const KEY_USER_WITH_ATTRIBUTES_LOCALE = 'locale' as keyof UserWithAttributes;
/**
 * Organization Id
 *
 * The user's organization id
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `organization_id` property of UserWithAttributes objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = userwithattributes[KEY_USER_WITH_ATTRIBUTES_ORGANIZATION_ID];
 * 
 * // Dynamic property access
 * const propertyName = KEY_USER_WITH_ATTRIBUTES_ORGANIZATION_ID;
 * const value = userwithattributes[propertyName];
 * ```
 *
 * @see {@link UserWithAttributes} - The TypeScript type definition
 * @see {@link KEYS_USER_WITH_ATTRIBUTES} - Array of all keys for this type
 */
export const KEY_USER_WITH_ATTRIBUTES_ORGANIZATION_ID = 'organization_id' as keyof UserWithAttributes;
/**
 * Phone
 *
 * The user's phone number
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `phone` property of UserWithAttributes objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = userwithattributes[KEY_USER_WITH_ATTRIBUTES_PHONE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_USER_WITH_ATTRIBUTES_PHONE;
 * const value = userwithattributes[propertyName];
 * ```
 *
 * @see {@link UserWithAttributes} - The TypeScript type definition
 * @see {@link KEYS_USER_WITH_ATTRIBUTES} - Array of all keys for this type
 */
export const KEY_USER_WITH_ATTRIBUTES_PHONE = 'phone' as keyof UserWithAttributes;
/**
 * status property
 *
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `status` property of UserWithAttributes objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = userwithattributes[KEY_USER_WITH_ATTRIBUTES_STATUS];
 * 
 * // Dynamic property access
 * const propertyName = KEY_USER_WITH_ATTRIBUTES_STATUS;
 * const value = userwithattributes[propertyName];
 * ```
 *
 * @see {@link UserWithAttributes} - The TypeScript type definition
 * @see {@link KEYS_USER_WITH_ATTRIBUTES} - Array of all keys for this type
 */
export const KEY_USER_WITH_ATTRIBUTES_STATUS = 'status' as keyof UserWithAttributes;
/**
 * Updated On
 *
 * The date/time the entry was last updated on
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `updated_on` property of UserWithAttributes objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = userwithattributes[KEY_USER_WITH_ATTRIBUTES_UPDATED_ON];
 * 
 * // Dynamic property access
 * const propertyName = KEY_USER_WITH_ATTRIBUTES_UPDATED_ON;
 * const value = userwithattributes[propertyName];
 * ```
 *
 * @see {@link UserWithAttributes} - The TypeScript type definition
 * @see {@link KEYS_USER_WITH_ATTRIBUTES} - Array of all keys for this type
 */
export const KEY_USER_WITH_ATTRIBUTES_UPDATED_ON = 'updated_on' as keyof UserWithAttributes;
/**
 * User Attributes
 *
 * All of the user attributes
 *
 * @type {object}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `user_attributes` property of UserWithAttributes objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = userwithattributes[KEY_USER_WITH_ATTRIBUTES_USER_ATTRIBUTES];
 * 
 * // Dynamic property access
 * const propertyName = KEY_USER_WITH_ATTRIBUTES_USER_ATTRIBUTES;
 * const value = userwithattributes[propertyName];
 * ```
 *
 * @see {@link UserWithAttributes} - The TypeScript type definition
 * @see {@link KEYS_USER_WITH_ATTRIBUTES} - Array of all keys for this type
 */
export const KEY_USER_WITH_ATTRIBUTES_USER_ATTRIBUTES = 'user_attributes' as keyof UserWithAttributes;
/**
 * User Id
 *
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `user_id` property of UserWithAttributes objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = userwithattributes[KEY_USER_WITH_ATTRIBUTES_USER_ID];
 * 
 * // Dynamic property access
 * const propertyName = KEY_USER_WITH_ATTRIBUTES_USER_ID;
 * const value = userwithattributes[propertyName];
 * ```
 *
 * @see {@link UserWithAttributes} - The TypeScript type definition
 * @see {@link KEYS_USER_WITH_ATTRIBUTES} - Array of all keys for this type
 */
export const KEY_USER_WITH_ATTRIBUTES_USER_ID = 'user_id' as keyof UserWithAttributes;
/**
 * Username
 *
 * The user's unique username
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `username` property of UserWithAttributes objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = userwithattributes[KEY_USER_WITH_ATTRIBUTES_USERNAME];
 * 
 * // Dynamic property access
 * const propertyName = KEY_USER_WITH_ATTRIBUTES_USERNAME;
 * const value = userwithattributes[propertyName];
 * ```
 *
 * @see {@link UserWithAttributes} - The TypeScript type definition
 * @see {@link KEYS_USER_WITH_ATTRIBUTES} - Array of all keys for this type
 */
export const KEY_USER_WITH_ATTRIBUTES_USERNAME = 'username' as keyof UserWithAttributes;

/**
 * Array of all UserWithAttributes property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for UserWithAttributes objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all keys
 * for (const key of KEYS_USER_WITH_ATTRIBUTES) {
 *   console.log(`Property: ${key}, Value: ${userwithattributes[key]}`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_USER_WITH_ATTRIBUTES.includes(someKey);
 * ```
 *
 * @see {@link UserWithAttributes} - The TypeScript type definition
 */
export const KEYS_USER_WITH_ATTRIBUTES = [
  KEY_USER_WITH_ATTRIBUTES_CREATED_ON,
  KEY_USER_WITH_ATTRIBUTES_DELETED_ON,
  KEY_USER_WITH_ATTRIBUTES_EMAIL,
  KEY_USER_WITH_ATTRIBUTES_FIRST_NAME,
  KEY_USER_WITH_ATTRIBUTES_LAST_NAME,
  KEY_USER_WITH_ATTRIBUTES_LOCALE,
  KEY_USER_WITH_ATTRIBUTES_ORGANIZATION_ID,
  KEY_USER_WITH_ATTRIBUTES_PHONE,
  KEY_USER_WITH_ATTRIBUTES_STATUS,
  KEY_USER_WITH_ATTRIBUTES_UPDATED_ON,
  KEY_USER_WITH_ATTRIBUTES_USER_ATTRIBUTES,
  KEY_USER_WITH_ATTRIBUTES_USER_ID,
  KEY_USER_WITH_ATTRIBUTES_USERNAME,
] as const satisfies (keyof UserWithAttributes)[];

/**
 * Created On
 *
 * The date/time the entry was created on
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `created_on` property of UserWithRelationPermissions objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = userwithrelationpermissions[KEY_USER_WITH_RELATION_PERMISSIONS_CREATED_ON];
 * 
 * // Dynamic property access
 * const propertyName = KEY_USER_WITH_RELATION_PERMISSIONS_CREATED_ON;
 * const value = userwithrelationpermissions[propertyName];
 * ```
 *
 * @see {@link UserWithRelationPermissions} - The TypeScript type definition
 * @see {@link KEYS_USER_WITH_RELATION_PERMISSIONS} - Array of all keys for this type
 */
export const KEY_USER_WITH_RELATION_PERMISSIONS_CREATED_ON = 'created_on' as keyof UserWithRelationPermissions;
/**
 * Deleted On
 *
 * The date/time the entry was deleted on
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `deleted_on` property of UserWithRelationPermissions objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = userwithrelationpermissions[KEY_USER_WITH_RELATION_PERMISSIONS_DELETED_ON];
 * 
 * // Dynamic property access
 * const propertyName = KEY_USER_WITH_RELATION_PERMISSIONS_DELETED_ON;
 * const value = userwithrelationpermissions[propertyName];
 * ```
 *
 * @see {@link UserWithRelationPermissions} - The TypeScript type definition
 * @see {@link KEYS_USER_WITH_RELATION_PERMISSIONS} - Array of all keys for this type
 */
export const KEY_USER_WITH_RELATION_PERMISSIONS_DELETED_ON = 'deleted_on' as keyof UserWithRelationPermissions;
/**
 * Email
 *
 * The user's email address
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `email` property of UserWithRelationPermissions objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = userwithrelationpermissions[KEY_USER_WITH_RELATION_PERMISSIONS_EMAIL];
 * 
 * // Dynamic property access
 * const propertyName = KEY_USER_WITH_RELATION_PERMISSIONS_EMAIL;
 * const value = userwithrelationpermissions[propertyName];
 * ```
 *
 * @see {@link UserWithRelationPermissions} - The TypeScript type definition
 * @see {@link KEYS_USER_WITH_RELATION_PERMISSIONS} - Array of all keys for this type
 */
export const KEY_USER_WITH_RELATION_PERMISSIONS_EMAIL = 'email' as keyof UserWithRelationPermissions;
/**
 * First Name
 *
 * The user's first name
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `first_name` property of UserWithRelationPermissions objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = userwithrelationpermissions[KEY_USER_WITH_RELATION_PERMISSIONS_FIRST_NAME];
 * 
 * // Dynamic property access
 * const propertyName = KEY_USER_WITH_RELATION_PERMISSIONS_FIRST_NAME;
 * const value = userwithrelationpermissions[propertyName];
 * ```
 *
 * @see {@link UserWithRelationPermissions} - The TypeScript type definition
 * @see {@link KEYS_USER_WITH_RELATION_PERMISSIONS} - Array of all keys for this type
 */
export const KEY_USER_WITH_RELATION_PERMISSIONS_FIRST_NAME = 'first_name' as keyof UserWithRelationPermissions;
/**
 * Last Name
 *
 * The user's last name
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `last_name` property of UserWithRelationPermissions objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = userwithrelationpermissions[KEY_USER_WITH_RELATION_PERMISSIONS_LAST_NAME];
 * 
 * // Dynamic property access
 * const propertyName = KEY_USER_WITH_RELATION_PERMISSIONS_LAST_NAME;
 * const value = userwithrelationpermissions[propertyName];
 * ```
 *
 * @see {@link UserWithRelationPermissions} - The TypeScript type definition
 * @see {@link KEYS_USER_WITH_RELATION_PERMISSIONS} - Array of all keys for this type
 */
export const KEY_USER_WITH_RELATION_PERMISSIONS_LAST_NAME = 'last_name' as keyof UserWithRelationPermissions;
/**
 * Locale
 *
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `locale` property of UserWithRelationPermissions objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = userwithrelationpermissions[KEY_USER_WITH_RELATION_PERMISSIONS_LOCALE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_USER_WITH_RELATION_PERMISSIONS_LOCALE;
 * const value = userwithrelationpermissions[propertyName];
 * ```
 *
 * @see {@link UserWithRelationPermissions} - The TypeScript type definition
 * @see {@link KEYS_USER_WITH_RELATION_PERMISSIONS} - Array of all keys for this type
 */
export const KEY_USER_WITH_RELATION_PERMISSIONS_LOCALE = 'locale' as keyof UserWithRelationPermissions;
/**
 * Organization Id
 *
 * The user's organization id
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `organization_id` property of UserWithRelationPermissions objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = userwithrelationpermissions[KEY_USER_WITH_RELATION_PERMISSIONS_ORGANIZATION_ID];
 * 
 * // Dynamic property access
 * const propertyName = KEY_USER_WITH_RELATION_PERMISSIONS_ORGANIZATION_ID;
 * const value = userwithrelationpermissions[propertyName];
 * ```
 *
 * @see {@link UserWithRelationPermissions} - The TypeScript type definition
 * @see {@link KEYS_USER_WITH_RELATION_PERMISSIONS} - Array of all keys for this type
 */
export const KEY_USER_WITH_RELATION_PERMISSIONS_ORGANIZATION_ID = 'organization_id' as keyof UserWithRelationPermissions;
/**
 * Permissions
 *
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `permissions` property of UserWithRelationPermissions objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = userwithrelationpermissions[KEY_USER_WITH_RELATION_PERMISSIONS_PERMISSIONS];
 * 
 * // Dynamic property access
 * const propertyName = KEY_USER_WITH_RELATION_PERMISSIONS_PERMISSIONS;
 * const value = userwithrelationpermissions[propertyName];
 * ```
 *
 * @see {@link UserWithRelationPermissions} - The TypeScript type definition
 * @see {@link KEYS_USER_WITH_RELATION_PERMISSIONS} - Array of all keys for this type
 */
export const KEY_USER_WITH_RELATION_PERMISSIONS_PERMISSIONS = 'permissions' as keyof UserWithRelationPermissions;
/**
 * Phone
 *
 * The user's phone number
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `phone` property of UserWithRelationPermissions objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = userwithrelationpermissions[KEY_USER_WITH_RELATION_PERMISSIONS_PHONE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_USER_WITH_RELATION_PERMISSIONS_PHONE;
 * const value = userwithrelationpermissions[propertyName];
 * ```
 *
 * @see {@link UserWithRelationPermissions} - The TypeScript type definition
 * @see {@link KEYS_USER_WITH_RELATION_PERMISSIONS} - Array of all keys for this type
 */
export const KEY_USER_WITH_RELATION_PERMISSIONS_PHONE = 'phone' as keyof UserWithRelationPermissions;
/**
 * Relations
 *
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `relations` property of UserWithRelationPermissions objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = userwithrelationpermissions[KEY_USER_WITH_RELATION_PERMISSIONS_RELATIONS];
 * 
 * // Dynamic property access
 * const propertyName = KEY_USER_WITH_RELATION_PERMISSIONS_RELATIONS;
 * const value = userwithrelationpermissions[propertyName];
 * ```
 *
 * @see {@link UserWithRelationPermissions} - The TypeScript type definition
 * @see {@link KEYS_USER_WITH_RELATION_PERMISSIONS} - Array of all keys for this type
 */
export const KEY_USER_WITH_RELATION_PERMISSIONS_RELATIONS = 'relations' as keyof UserWithRelationPermissions;
/**
 * status property
 *
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `status` property of UserWithRelationPermissions objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = userwithrelationpermissions[KEY_USER_WITH_RELATION_PERMISSIONS_STATUS];
 * 
 * // Dynamic property access
 * const propertyName = KEY_USER_WITH_RELATION_PERMISSIONS_STATUS;
 * const value = userwithrelationpermissions[propertyName];
 * ```
 *
 * @see {@link UserWithRelationPermissions} - The TypeScript type definition
 * @see {@link KEYS_USER_WITH_RELATION_PERMISSIONS} - Array of all keys for this type
 */
export const KEY_USER_WITH_RELATION_PERMISSIONS_STATUS = 'status' as keyof UserWithRelationPermissions;
/**
 * Updated On
 *
 * The date/time the entry was last updated on
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `updated_on` property of UserWithRelationPermissions objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = userwithrelationpermissions[KEY_USER_WITH_RELATION_PERMISSIONS_UPDATED_ON];
 * 
 * // Dynamic property access
 * const propertyName = KEY_USER_WITH_RELATION_PERMISSIONS_UPDATED_ON;
 * const value = userwithrelationpermissions[propertyName];
 * ```
 *
 * @see {@link UserWithRelationPermissions} - The TypeScript type definition
 * @see {@link KEYS_USER_WITH_RELATION_PERMISSIONS} - Array of all keys for this type
 */
export const KEY_USER_WITH_RELATION_PERMISSIONS_UPDATED_ON = 'updated_on' as keyof UserWithRelationPermissions;
/**
 * User Attributes
 *
 * All of the user attributes
 *
 * @type {object}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `user_attributes` property of UserWithRelationPermissions objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = userwithrelationpermissions[KEY_USER_WITH_RELATION_PERMISSIONS_USER_ATTRIBUTES];
 * 
 * // Dynamic property access
 * const propertyName = KEY_USER_WITH_RELATION_PERMISSIONS_USER_ATTRIBUTES;
 * const value = userwithrelationpermissions[propertyName];
 * ```
 *
 * @see {@link UserWithRelationPermissions} - The TypeScript type definition
 * @see {@link KEYS_USER_WITH_RELATION_PERMISSIONS} - Array of all keys for this type
 */
export const KEY_USER_WITH_RELATION_PERMISSIONS_USER_ATTRIBUTES = 'user_attributes' as keyof UserWithRelationPermissions;
/**
 * User Id
 *
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `user_id` property of UserWithRelationPermissions objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = userwithrelationpermissions[KEY_USER_WITH_RELATION_PERMISSIONS_USER_ID];
 * 
 * // Dynamic property access
 * const propertyName = KEY_USER_WITH_RELATION_PERMISSIONS_USER_ID;
 * const value = userwithrelationpermissions[propertyName];
 * ```
 *
 * @see {@link UserWithRelationPermissions} - The TypeScript type definition
 * @see {@link KEYS_USER_WITH_RELATION_PERMISSIONS} - Array of all keys for this type
 */
export const KEY_USER_WITH_RELATION_PERMISSIONS_USER_ID = 'user_id' as keyof UserWithRelationPermissions;
/**
 * Username
 *
 * The user's unique username
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `username` property of UserWithRelationPermissions objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = userwithrelationpermissions[KEY_USER_WITH_RELATION_PERMISSIONS_USERNAME];
 * 
 * // Dynamic property access
 * const propertyName = KEY_USER_WITH_RELATION_PERMISSIONS_USERNAME;
 * const value = userwithrelationpermissions[propertyName];
 * ```
 *
 * @see {@link UserWithRelationPermissions} - The TypeScript type definition
 * @see {@link KEYS_USER_WITH_RELATION_PERMISSIONS} - Array of all keys for this type
 */
export const KEY_USER_WITH_RELATION_PERMISSIONS_USERNAME = 'username' as keyof UserWithRelationPermissions;

/**
 * Array of all UserWithRelationPermissions property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for UserWithRelationPermissions objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all keys
 * for (const key of KEYS_USER_WITH_RELATION_PERMISSIONS) {
 *   console.log(`Property: ${key}, Value: ${userwithrelationpermissions[key]}`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_USER_WITH_RELATION_PERMISSIONS.includes(someKey);
 * ```
 *
 * @see {@link UserWithRelationPermissions} - The TypeScript type definition
 */
export const KEYS_USER_WITH_RELATION_PERMISSIONS = [
  KEY_USER_WITH_RELATION_PERMISSIONS_CREATED_ON,
  KEY_USER_WITH_RELATION_PERMISSIONS_DELETED_ON,
  KEY_USER_WITH_RELATION_PERMISSIONS_EMAIL,
  KEY_USER_WITH_RELATION_PERMISSIONS_FIRST_NAME,
  KEY_USER_WITH_RELATION_PERMISSIONS_LAST_NAME,
  KEY_USER_WITH_RELATION_PERMISSIONS_LOCALE,
  KEY_USER_WITH_RELATION_PERMISSIONS_ORGANIZATION_ID,
  KEY_USER_WITH_RELATION_PERMISSIONS_PERMISSIONS,
  KEY_USER_WITH_RELATION_PERMISSIONS_PHONE,
  KEY_USER_WITH_RELATION_PERMISSIONS_RELATIONS,
  KEY_USER_WITH_RELATION_PERMISSIONS_STATUS,
  KEY_USER_WITH_RELATION_PERMISSIONS_UPDATED_ON,
  KEY_USER_WITH_RELATION_PERMISSIONS_USER_ATTRIBUTES,
  KEY_USER_WITH_RELATION_PERMISSIONS_USER_ID,
  KEY_USER_WITH_RELATION_PERMISSIONS_USERNAME,
] as const satisfies (keyof UserWithRelationPermissions)[];

/**
 * Location
 *
 *
 * @type {array}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `loc` property of ValidationError objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = validationerror[KEY_VALIDATION_ERROR_LOC];
 * 
 * // Dynamic property access
 * const propertyName = KEY_VALIDATION_ERROR_LOC;
 * const value = validationerror[propertyName];
 * ```
 *
 * @see {@link ValidationError} - The TypeScript type definition
 * @see {@link KEYS_VALIDATION_ERROR} - Array of all keys for this type
 */
export const KEY_VALIDATION_ERROR_LOC = 'loc' as keyof ValidationError;
/**
 * Message
 *
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `msg` property of ValidationError objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = validationerror[KEY_VALIDATION_ERROR_MSG];
 * 
 * // Dynamic property access
 * const propertyName = KEY_VALIDATION_ERROR_MSG;
 * const value = validationerror[propertyName];
 * ```
 *
 * @see {@link ValidationError} - The TypeScript type definition
 * @see {@link KEYS_VALIDATION_ERROR} - Array of all keys for this type
 */
export const KEY_VALIDATION_ERROR_MSG = 'msg' as keyof ValidationError;
/**
 * Error Type
 *
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `type` property of ValidationError objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = validationerror[KEY_VALIDATION_ERROR_TYPE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_VALIDATION_ERROR_TYPE;
 * const value = validationerror[propertyName];
 * ```
 *
 * @see {@link ValidationError} - The TypeScript type definition
 * @see {@link KEYS_VALIDATION_ERROR} - Array of all keys for this type
 */
export const KEY_VALIDATION_ERROR_TYPE = 'type' as keyof ValidationError;

/**
 * Array of all ValidationError property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for ValidationError objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all keys
 * for (const key of KEYS_VALIDATION_ERROR) {
 *   console.log(`Property: ${key}, Value: ${validationerror[key]}`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_VALIDATION_ERROR.includes(someKey);
 * ```
 *
 * @see {@link ValidationError} - The TypeScript type definition
 */
export const KEYS_VALIDATION_ERROR = [
  KEY_VALIDATION_ERROR_LOC,
  KEY_VALIDATION_ERROR_MSG,
  KEY_VALIDATION_ERROR_TYPE,
] as const satisfies (keyof ValidationError)[];

/**
 * Whois Server
 *
 * WHOIS server
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `whois_server` property of WhoisBase objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = whoisbase[KEY_WHOIS_BASE_WHOIS_SERVER];
 * 
 * // Dynamic property access
 * const propertyName = KEY_WHOIS_BASE_WHOIS_SERVER;
 * const value = whoisbase[propertyName];
 * ```
 *
 * @see {@link WhoisBase} - The TypeScript type definition
 * @see {@link KEYS_WHOIS_BASE} - Array of all keys for this type
 */
export const KEY_WHOIS_BASE_WHOIS_SERVER = 'whois_server' as keyof WhoisBase;

/**
 * Array of all WhoisBase property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for WhoisBase objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all keys
 * for (const key of KEYS_WHOIS_BASE) {
 *   console.log(`Property: ${key}, Value: ${whoisbase[key]}`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_WHOIS_BASE.includes(someKey);
 * ```
 *
 * @see {@link WhoisBase} - The TypeScript type definition
 */
export const KEYS_WHOIS_BASE = [
  KEY_WHOIS_BASE_WHOIS_SERVER,
] as const satisfies (keyof WhoisBase)[];

/**
 * meta property
 *
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `meta` property of DomainAvailabilityList objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = domainavailabilitylist[KEY_DOMAIN_AVAILABILITY_LIST_META];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DOMAIN_AVAILABILITY_LIST_META;
 * const value = domainavailabilitylist[propertyName];
 * ```
 *
 * @see {@link DomainAvailabilityList} - The TypeScript type definition
 * @see {@link KEYS_DOMAIN_AVAILABILITY_LIST} - Array of all keys for this type
 */
export const KEY_DOMAIN_AVAILABILITY_LIST_META = 'meta' as keyof DomainAvailabilityList;
/**
 * Results
 *
 *
 * @type {array}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `results` property of DomainAvailabilityList objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = domainavailabilitylist[KEY_DOMAIN_AVAILABILITY_LIST_RESULTS];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DOMAIN_AVAILABILITY_LIST_RESULTS;
 * const value = domainavailabilitylist[propertyName];
 * ```
 *
 * @see {@link DomainAvailabilityList} - The TypeScript type definition
 * @see {@link KEYS_DOMAIN_AVAILABILITY_LIST} - Array of all keys for this type
 */
export const KEY_DOMAIN_AVAILABILITY_LIST_RESULTS = 'results' as keyof DomainAvailabilityList;

/**
 * Array of all DomainAvailabilityList property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for DomainAvailabilityList objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all keys
 * for (const key of KEYS_DOMAIN_AVAILABILITY_LIST) {
 *   console.log(`Property: ${key}, Value: ${domainavailabilitylist[key]}`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_DOMAIN_AVAILABILITY_LIST.includes(someKey);
 * ```
 *
 * @see {@link DomainAvailabilityList} - The TypeScript type definition
 */
export const KEYS_DOMAIN_AVAILABILITY_LIST = [
  KEY_DOMAIN_AVAILABILITY_LIST_META,
  KEY_DOMAIN_AVAILABILITY_LIST_RESULTS,
] as const satisfies (keyof DomainAvailabilityList)[];

/**
 * Available
 *
 *
 * @type {boolean}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `available` property of DomainAvailabilityCheck objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = domainavailabilitycheck[KEY_DOMAIN_AVAILABILITY_CHECK_AVAILABLE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DOMAIN_AVAILABILITY_CHECK_AVAILABLE;
 * const value = domainavailabilitycheck[propertyName];
 * ```
 *
 * @see {@link DomainAvailabilityCheck} - The TypeScript type definition
 * @see {@link KEYS_DOMAIN_AVAILABILITY_CHECK} - Array of all keys for this type
 */
export const KEY_DOMAIN_AVAILABILITY_CHECK_AVAILABLE = 'available' as keyof DomainAvailabilityCheck;
/**
 * Domain
 *
 * The domain name
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `domain` property of DomainAvailabilityCheck objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = domainavailabilitycheck[KEY_DOMAIN_AVAILABILITY_CHECK_DOMAIN];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DOMAIN_AVAILABILITY_CHECK_DOMAIN;
 * const value = domainavailabilitycheck[propertyName];
 * ```
 *
 * @see {@link DomainAvailabilityCheck} - The TypeScript type definition
 * @see {@link KEYS_DOMAIN_AVAILABILITY_CHECK} - Array of all keys for this type
 */
export const KEY_DOMAIN_AVAILABILITY_CHECK_DOMAIN = 'domain' as keyof DomainAvailabilityCheck;
/**
 * Reason
 *
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `reason` property of DomainAvailabilityCheck objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = domainavailabilitycheck[KEY_DOMAIN_AVAILABILITY_CHECK_REASON];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DOMAIN_AVAILABILITY_CHECK_REASON;
 * const value = domainavailabilitycheck[propertyName];
 * ```
 *
 * @see {@link DomainAvailabilityCheck} - The TypeScript type definition
 * @see {@link KEYS_DOMAIN_AVAILABILITY_CHECK} - Array of all keys for this type
 */
export const KEY_DOMAIN_AVAILABILITY_CHECK_REASON = 'reason' as keyof DomainAvailabilityCheck;

/**
 * Array of all DomainAvailabilityCheck property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for DomainAvailabilityCheck objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all keys
 * for (const key of KEYS_DOMAIN_AVAILABILITY_CHECK) {
 *   console.log(`Property: ${key}, Value: ${domainavailabilitycheck[key]}`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_DOMAIN_AVAILABILITY_CHECK.includes(someKey);
 * ```
 *
 * @see {@link DomainAvailabilityCheck} - The TypeScript type definition
 */
export const KEYS_DOMAIN_AVAILABILITY_CHECK = [
  KEY_DOMAIN_AVAILABILITY_CHECK_AVAILABLE,
  KEY_DOMAIN_AVAILABILITY_CHECK_DOMAIN,
  KEY_DOMAIN_AVAILABILITY_CHECK_REASON,
] as const satisfies (keyof DomainAvailabilityCheck)[];
