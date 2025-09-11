/**
 * Auto-generated const objects and arrays from OpenAPI specification
 *
 * This file contains constant objects and arrays derived from OpenAPI schema enums.
 * Each constant provides both an object form (for key-value access) and an array form (for iteration/validation).
 * These constants use existing types from schemas.ts to avoid duplication and ensure type safety.
 *
 * @remarks
 * - String enums generate both objects and arrays with proper type annotations
 * - Integer enums generate typed arrays only
 * - All constants use 'as const' for maximum type safety
 * - Keys follow SCREAMING_SNAKE_CASE convention for consistency
 *
 * @example
 * ```typescript
 * // Using the object form for key-value access
 * const status = BULK_OPERATION_STATUS.SUCCESS;
 * 
 * // Using the array form for iteration
 * const allStatuses = BULK_OPERATION_STATUS_VALUES;
 * ```
 */

import { AgreementType, AllocationMethodType, BillingTransactionAction, BillingTransactionProductType, ContactRoleType, ContactSortField, Currency, DeletePolicyType, DnsChangeAction, DnsRrsetType, DnssecAlgorithm, DnssecDigestType, DnssecModeType, DnssecRecordType, DnssecStatus, DomainAvailabilityStatus, DomainClientStatus, DomainContactType, DomainSortField, DomainStatus, EmailVerificationStatus, EventObjectType, EventSubtype, EventType, GrantType, LaunchPhaseType, LocalPresenceRequirementType, OrganizationCredentialStatus, OrganizationStatus, PatchOp, PeriodUnit, Permission, PostTransferRequirements, PostalAddressType, PremiumAffectsType, PremiumSourceType, RegistrantChangeType, RegistryHandleAttributeType, Relation, RenewalMode, ReservedSourceType, SortOrder, SyncOperationType, TLDType, TransferAckType, UserNotificationStatus, UserStatus, VerificationType, ZoneSortField } from './schemas';

/**
 * AgreementType. Auto-generated enum for AgreementType
 *
 * @remarks
 * This constant provides both object and array forms for the AgreementType enum.
 * The object form allows key-value access, while the array form enables iteration and validation.
 *
 * @example
 * ```typescript
 * // Using the object form for key-value access
 * const status = AGREEMENT_TYPE.SUCCESS;
 * 
 * // Using the array form for iteration
 * const allStatuses = AGREEMENT_TYPE_VALUES;
 * console.log(`Available statuses: ${allStatuses.join(', ')}`);
 * ```
 *
 * @see {@link AgreementType} - The TypeScript type definition
 */
export const AGREEMENT_TYPE = {
  TERMS_AND_CONDITIONS: "terms_and_conditions",
  MASTER_SERVICE_AGREEMENT: "master_service_agreement",
  ACTING_AS_TRADER: "acting_as_trader",
} as const satisfies Record<string, AgreementType>;

/**
 * Array of all AgreementType enum values
 *
 * @remarks
 * This constant provides a array containing all valid AgreementType enum values.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all values
 * for (const value of AGREEMENT_TYPE_VALUES) {
 *   console.log(`Processing: ${value}`);
 * }
 * 
 * // Validation
 * const isValid = AGREEMENT_TYPE_VALUES.includes(someValue);
 * ```
 *
 * @see {@link AgreementType} - The TypeScript type definition
 * @see {@link AGREEMENT_TYPE} - The object form of this enum
 */
export const AGREEMENT_TYPE_VALUES = [
  'terms_and_conditions',
  'master_service_agreement',
  'acting_as_trader'
] as const satisfies [string, ...string[]] | AgreementType[];

/**
 * AllocationMethodType. Auto-generated enum for AllocationMethodType
 *
 * @remarks
 * This constant provides both object and array forms for the AllocationMethodType enum.
 * The object form allows key-value access, while the array form enables iteration and validation.
 *
 * @example
 * ```typescript
 * // Using the object form for key-value access
 * const status = ALLOCATION_METHOD_TYPE.SUCCESS;
 * 
 * // Using the array form for iteration
 * const allStatuses = ALLOCATION_METHOD_TYPE_VALUES;
 * console.log(`Available statuses: ${allStatuses.join(', ')}`);
 * ```
 *
 * @see {@link AllocationMethodType} - The TypeScript type definition
 */
export const ALLOCATION_METHOD_TYPE = {
  FCFS: "fcfs",
  AUCTION: "auction",
  LOTTERY: "lottery",
} as const satisfies Record<string, AllocationMethodType>;

/**
 * Array of all AllocationMethodType enum values
 *
 * @remarks
 * This constant provides a array containing all valid AllocationMethodType enum values.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all values
 * for (const value of ALLOCATION_METHOD_TYPE_VALUES) {
 *   console.log(`Processing: ${value}`);
 * }
 * 
 * // Validation
 * const isValid = ALLOCATION_METHOD_TYPE_VALUES.includes(someValue);
 * ```
 *
 * @see {@link AllocationMethodType} - The TypeScript type definition
 * @see {@link ALLOCATION_METHOD_TYPE} - The object form of this enum
 */
export const ALLOCATION_METHOD_TYPE_VALUES = [
  'fcfs',
  'auction',
  'lottery'
] as const satisfies [string, ...string[]] | AllocationMethodType[];

/**
 * BillingTransactionAction. Auto-generated enum for BillingTransactionAction
 *
 * @remarks
 * This constant provides both object and array forms for the BillingTransactionAction enum.
 * The object form allows key-value access, while the array form enables iteration and validation.
 *
 * @example
 * ```typescript
 * // Using the object form for key-value access
 * const status = BILLING_TRANSACTION_ACTION.SUCCESS;
 * 
 * // Using the array form for iteration
 * const allStatuses = BILLING_TRANSACTION_ACTION_VALUES;
 * console.log(`Available statuses: ${allStatuses.join(', ')}`);
 * ```
 *
 * @see {@link BillingTransactionAction} - The TypeScript type definition
 */
export const BILLING_TRANSACTION_ACTION = {
  CREATE: "create",
  TRANSFER: "transfer",
  RENEW: "renew",
  RESTORE: "restore",
  TRADE: "trade",
  APPLICATION: "application",
} as const satisfies Record<string, BillingTransactionAction>;

/**
 * Array of all BillingTransactionAction enum values
 *
 * @remarks
 * This constant provides a array containing all valid BillingTransactionAction enum values.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all values
 * for (const value of BILLING_TRANSACTION_ACTION_VALUES) {
 *   console.log(`Processing: ${value}`);
 * }
 * 
 * // Validation
 * const isValid = BILLING_TRANSACTION_ACTION_VALUES.includes(someValue);
 * ```
 *
 * @see {@link BillingTransactionAction} - The TypeScript type definition
 * @see {@link BILLING_TRANSACTION_ACTION} - The object form of this enum
 */
export const BILLING_TRANSACTION_ACTION_VALUES = [
  'create',
  'transfer',
  'renew',
  'restore',
  'trade',
  'application'
] as const satisfies [string, ...string[]] | BillingTransactionAction[];

/**
 * BillingTransactionProductType. Auto-generated enum for BillingTransactionProductType
 *
 * @remarks
 * This constant provides both object and array forms for the BillingTransactionProductType enum.
 * The object form allows key-value access, while the array form enables iteration and validation.
 *
 * @example
 * ```typescript
 * // Using the object form for key-value access
 * const status = BILLING_TRANSACTION_PRODUCT_TYPE.SUCCESS;
 * 
 * // Using the array form for iteration
 * const allStatuses = BILLING_TRANSACTION_PRODUCT_TYPE_VALUES;
 * console.log(`Available statuses: ${allStatuses.join(', ')}`);
 * ```
 *
 * @see {@link BillingTransactionProductType} - The TypeScript type definition
 */
export const BILLING_TRANSACTION_PRODUCT_TYPE = {
  DOMAIN: "domain",
  ZONE: "zone",
  EMAIL_FORWARD: "email_forward",
  DOMAIN_FORWARD: "domain_forward",
} as const satisfies Record<string, BillingTransactionProductType>;

/**
 * Array of all BillingTransactionProductType enum values
 *
 * @remarks
 * This constant provides a array containing all valid BillingTransactionProductType enum values.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all values
 * for (const value of BILLING_TRANSACTION_PRODUCT_TYPE_VALUES) {
 *   console.log(`Processing: ${value}`);
 * }
 * 
 * // Validation
 * const isValid = BILLING_TRANSACTION_PRODUCT_TYPE_VALUES.includes(someValue);
 * ```
 *
 * @see {@link BillingTransactionProductType} - The TypeScript type definition
 * @see {@link BILLING_TRANSACTION_PRODUCT_TYPE} - The object form of this enum
 */
export const BILLING_TRANSACTION_PRODUCT_TYPE_VALUES = [
  'domain',
  'zone',
  'email_forward',
  'domain_forward'
] as const satisfies [string, ...string[]] | BillingTransactionProductType[];

/**
 * ContactRoleType. Auto-generated enum for ContactRoleType
 *
 * @remarks
 * This constant provides both object and array forms for the ContactRoleType enum.
 * The object form allows key-value access, while the array form enables iteration and validation.
 *
 * @example
 * ```typescript
 * // Using the object form for key-value access
 * const status = CONTACT_ROLE_TYPE.SUCCESS;
 * 
 * // Using the array form for iteration
 * const allStatuses = CONTACT_ROLE_TYPE_VALUES;
 * console.log(`Available statuses: ${allStatuses.join(', ')}`);
 * ```
 *
 * @see {@link ContactRoleType} - The TypeScript type definition
 */
export const CONTACT_ROLE_TYPE = {
  REGISTRANT: "registrant",
  ADMIN: "admin",
  TECH: "tech",
  BILLING: "billing",
} as const satisfies Record<string, ContactRoleType>;

/**
 * Array of all ContactRoleType enum values
 *
 * @remarks
 * This constant provides a array containing all valid ContactRoleType enum values.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all values
 * for (const value of CONTACT_ROLE_TYPE_VALUES) {
 *   console.log(`Processing: ${value}`);
 * }
 * 
 * // Validation
 * const isValid = CONTACT_ROLE_TYPE_VALUES.includes(someValue);
 * ```
 *
 * @see {@link ContactRoleType} - The TypeScript type definition
 * @see {@link CONTACT_ROLE_TYPE} - The object form of this enum
 */
export const CONTACT_ROLE_TYPE_VALUES = [
  'registrant',
  'admin',
  'tech',
  'billing'
] as const satisfies [string, ...string[]] | ContactRoleType[];

/**
 * ContactSortField. Auto-generated enum for ContactSortField
 *
 * @remarks
 * This constant provides both object and array forms for the ContactSortField enum.
 * The object form allows key-value access, while the array form enables iteration and validation.
 *
 * @example
 * ```typescript
 * // Using the object form for key-value access
 * const status = CONTACT_SORT_FIELD.SUCCESS;
 * 
 * // Using the array form for iteration
 * const allStatuses = CONTACT_SORT_FIELD_VALUES;
 * console.log(`Available statuses: ${allStatuses.join(', ')}`);
 * ```
 *
 * @see {@link ContactSortField} - The TypeScript type definition
 */
export const CONTACT_SORT_FIELD = {
  FIRST_NAME: "first_name",
  LAST_NAME: "last_name",
  EMAIL: "email",
  CREATED_ON: "created_on",
} as const satisfies Record<string, ContactSortField>;

/**
 * Array of all ContactSortField enum values
 *
 * @remarks
 * This constant provides a array containing all valid ContactSortField enum values.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all values
 * for (const value of CONTACT_SORT_FIELD_VALUES) {
 *   console.log(`Processing: ${value}`);
 * }
 * 
 * // Validation
 * const isValid = CONTACT_SORT_FIELD_VALUES.includes(someValue);
 * ```
 *
 * @see {@link ContactSortField} - The TypeScript type definition
 * @see {@link CONTACT_SORT_FIELD} - The object form of this enum
 */
export const CONTACT_SORT_FIELD_VALUES = [
  'first_name',
  'last_name',
  'email',
  'created_on'
] as const satisfies [string, ...string[]] | ContactSortField[];

/**
 * Currency. Auto-generated enum for Currency
 *
 * @remarks
 * This constant provides both object and array forms for the Currency enum.
 * The object form allows key-value access, while the array form enables iteration and validation.
 *
 * @example
 * ```typescript
 * // Using the object form for key-value access
 * const status = CURRENCY.SUCCESS;
 * 
 * // Using the array form for iteration
 * const allStatuses = CURRENCY_VALUES;
 * console.log(`Available statuses: ${allStatuses.join(', ')}`);
 * ```
 *
 * @see {@link Currency} - The TypeScript type definition
 */
export const CURRENCY = {
  USD: "USD",
  EUR: "EUR",
} as const satisfies Record<string, Currency>;

/**
 * Array of all Currency enum values
 *
 * @remarks
 * This constant provides a array containing all valid Currency enum values.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all values
 * for (const value of CURRENCY_VALUES) {
 *   console.log(`Processing: ${value}`);
 * }
 * 
 * // Validation
 * const isValid = CURRENCY_VALUES.includes(someValue);
 * ```
 *
 * @see {@link Currency} - The TypeScript type definition
 * @see {@link CURRENCY} - The object form of this enum
 */
export const CURRENCY_VALUES = [
  'USD',
  'EUR'
] as const satisfies [string, ...string[]] | Currency[];

/**
 * DeletePolicyType. Auto-generated enum for DeletePolicyType
 *
 * @remarks
 * This constant provides both object and array forms for the DeletePolicyType enum.
 * The object form allows key-value access, while the array form enables iteration and validation.
 *
 * @example
 * ```typescript
 * // Using the object form for key-value access
 * const status = DELETE_POLICY_TYPE.SUCCESS;
 * 
 * // Using the array form for iteration
 * const allStatuses = DELETE_POLICY_TYPE_VALUES;
 * console.log(`Available statuses: ${allStatuses.join(', ')}`);
 * ```
 *
 * @see {@link DeletePolicyType} - The TypeScript type definition
 */
export const DELETE_POLICY_TYPE = {
  IMMEDIATE: "immediate",
  EXPIRATION: "expiration",
} as const satisfies Record<string, DeletePolicyType>;

/**
 * Array of all DeletePolicyType enum values
 *
 * @remarks
 * This constant provides a array containing all valid DeletePolicyType enum values.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all values
 * for (const value of DELETE_POLICY_TYPE_VALUES) {
 *   console.log(`Processing: ${value}`);
 * }
 * 
 * // Validation
 * const isValid = DELETE_POLICY_TYPE_VALUES.includes(someValue);
 * ```
 *
 * @see {@link DeletePolicyType} - The TypeScript type definition
 * @see {@link DELETE_POLICY_TYPE} - The object form of this enum
 */
export const DELETE_POLICY_TYPE_VALUES = [
  'immediate',
  'expiration'
] as const satisfies [string, ...string[]] | DeletePolicyType[];

/**
 * DnsChangeAction. Auto-generated enum for DnsChangeAction
 *
 * @remarks
 * This constant provides both object and array forms for the DnsChangeAction enum.
 * The object form allows key-value access, while the array form enables iteration and validation.
 *
 * @example
 * ```typescript
 * // Using the object form for key-value access
 * const status = DNS_CHANGE_ACTION.SUCCESS;
 * 
 * // Using the array form for iteration
 * const allStatuses = DNS_CHANGE_ACTION_VALUES;
 * console.log(`Available statuses: ${allStatuses.join(', ')}`);
 * ```
 *
 * @see {@link DnsChangeAction} - The TypeScript type definition
 */
export const DNS_CHANGE_ACTION = {
  CREATE_ZONE: "create_zone",
  DELETE_ZONE: "delete_zone",
  CREATE_RECORD: "create_record",
  DELETE_RECORD: "delete_record",
  ENABLE_DNSSEC: "enable_dnssec",
  DISABLE_DNSSEC: "disable_dnssec",
} as const satisfies Record<string, DnsChangeAction>;

/**
 * Array of all DnsChangeAction enum values
 *
 * @remarks
 * This constant provides a array containing all valid DnsChangeAction enum values.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all values
 * for (const value of DNS_CHANGE_ACTION_VALUES) {
 *   console.log(`Processing: ${value}`);
 * }
 * 
 * // Validation
 * const isValid = DNS_CHANGE_ACTION_VALUES.includes(someValue);
 * ```
 *
 * @see {@link DnsChangeAction} - The TypeScript type definition
 * @see {@link DNS_CHANGE_ACTION} - The object form of this enum
 */
export const DNS_CHANGE_ACTION_VALUES = [
  'create_zone',
  'delete_zone',
  'create_record',
  'delete_record',
  'enable_dnssec',
  'disable_dnssec'
] as const satisfies [string, ...string[]] | DnsChangeAction[];

/**
 * DnsRrsetType. Auto-generated enum for DnsRrsetType
 *
 * @remarks
 * This constant provides both object and array forms for the DnsRrsetType enum.
 * The object form allows key-value access, while the array form enables iteration and validation.
 *
 * @example
 * ```typescript
 * // Using the object form for key-value access
 * const status = DNS_RRSET_TYPE.SUCCESS;
 * 
 * // Using the array form for iteration
 * const allStatuses = DNS_RRSET_TYPE_VALUES;
 * console.log(`Available statuses: ${allStatuses.join(', ')}`);
 * ```
 *
 * @see {@link DnsRrsetType} - The TypeScript type definition
 */
export const DNS_RRSET_TYPE = {
  A: "A",
  AAAA: "AAAA",
  ALIAS: "ALIAS",
  CAA: "CAA",
  CNAME: "CNAME",
  DNSKEY: "DNSKEY",
  DS: "DS",
  MX: "MX",
  NS: "NS",
  PTR: "PTR",
  TXT: "TXT",
  SOA: "SOA",
  SRV: "SRV",
} as const satisfies Record<string, DnsRrsetType>;

/**
 * Array of all DnsRrsetType enum values
 *
 * @remarks
 * This constant provides a array containing all valid DnsRrsetType enum values.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all values
 * for (const value of DNS_RRSET_TYPE_VALUES) {
 *   console.log(`Processing: ${value}`);
 * }
 * 
 * // Validation
 * const isValid = DNS_RRSET_TYPE_VALUES.includes(someValue);
 * ```
 *
 * @see {@link DnsRrsetType} - The TypeScript type definition
 * @see {@link DNS_RRSET_TYPE} - The object form of this enum
 */
export const DNS_RRSET_TYPE_VALUES = [
  'A',
  'AAAA',
  'ALIAS',
  'CAA',
  'CNAME',
  'DNSKEY',
  'DS',
  'MX',
  'NS',
  'PTR',
  'TXT',
  'SOA',
  'SRV'
] as const satisfies [string, ...string[]] | DnsRrsetType[];

/**
 * DnssecAlgorithm. Auto-generated enum for DnssecAlgorithm
 *
 * @remarks
 * This constant provides an array of integer values for the DnssecAlgorithm enum.
 * Integer enums are represented as typed arrays for efficient iteration and validation.
 *
 * @example
 * ```typescript
 * // Using the array for iteration
 * const algorithms = DNSSEC_ALGORITHM;
 * console.log(`Available algorithms: ${algorithms.join(', ')}`);
 * ```
 *
 * @see {@link DnssecAlgorithm} - The TypeScript type definition
 */
export const DNSSEC_ALGORITHM = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  10,
  12,
  13,
  14,
  15,
  16,
  17,
  23
] as const satisfies DnssecAlgorithm[];

/**
 * DnssecDigestType. Auto-generated enum for DnssecDigestType
 *
 * @remarks
 * This constant provides an array of integer values for the DnssecDigestType enum.
 * Integer enums are represented as typed arrays for efficient iteration and validation.
 *
 * @example
 * ```typescript
 * // Using the array for iteration
 * const algorithms = DNSSEC_ALGORITHM;
 * console.log(`Available algorithms: ${algorithms.join(', ')}`);
 * ```
 *
 * @see {@link DnssecDigestType} - The TypeScript type definition
 */
export const DNSSEC_DIGEST_TYPE = [
  1,
  2,
  3,
  4,
  5,
  6
] as const satisfies DnssecDigestType[];

/**
 * DnssecModeType. Auto-generated enum for DnssecModeType
 *
 * @remarks
 * This constant provides both object and array forms for the DnssecModeType enum.
 * The object form allows key-value access, while the array form enables iteration and validation.
 *
 * @example
 * ```typescript
 * // Using the object form for key-value access
 * const status = DNSSEC_MODE_TYPE.SUCCESS;
 * 
 * // Using the array form for iteration
 * const allStatuses = DNSSEC_MODE_TYPE_VALUES;
 * console.log(`Available statuses: ${allStatuses.join(', ')}`);
 * ```
 *
 * @see {@link DnssecModeType} - The TypeScript type definition
 */
export const DNSSEC_MODE_TYPE = {
  DS: "DS",
  DNSKEY: "DNSKEY",
} as const satisfies Record<string, DnssecModeType>;

/**
 * Array of all DnssecModeType enum values
 *
 * @remarks
 * This constant provides a array containing all valid DnssecModeType enum values.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all values
 * for (const value of DNSSEC_MODE_TYPE_VALUES) {
 *   console.log(`Processing: ${value}`);
 * }
 * 
 * // Validation
 * const isValid = DNSSEC_MODE_TYPE_VALUES.includes(someValue);
 * ```
 *
 * @see {@link DnssecModeType} - The TypeScript type definition
 * @see {@link DNSSEC_MODE_TYPE} - The object form of this enum
 */
export const DNSSEC_MODE_TYPE_VALUES = [
  'DS',
  'DNSKEY'
] as const satisfies [string, ...string[]] | DnssecModeType[];

/**
 * DnssecRecordType. Auto-generated enum for DnssecRecordType
 *
 * @remarks
 * This constant provides both object and array forms for the DnssecRecordType enum.
 * The object form allows key-value access, while the array form enables iteration and validation.
 *
 * @example
 * ```typescript
 * // Using the object form for key-value access
 * const status = DNSSEC_RECORD_TYPE.SUCCESS;
 * 
 * // Using the array form for iteration
 * const allStatuses = DNSSEC_RECORD_TYPE_VALUES;
 * console.log(`Available statuses: ${allStatuses.join(', ')}`);
 * ```
 *
 * @see {@link DnssecRecordType} - The TypeScript type definition
 */
export const DNSSEC_RECORD_TYPE = {
  DS_DATA: "ds_data",
  KEY_DATA: "key_data",
} as const satisfies Record<string, DnssecRecordType>;

/**
 * Array of all DnssecRecordType enum values
 *
 * @remarks
 * This constant provides a array containing all valid DnssecRecordType enum values.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all values
 * for (const value of DNSSEC_RECORD_TYPE_VALUES) {
 *   console.log(`Processing: ${value}`);
 * }
 * 
 * // Validation
 * const isValid = DNSSEC_RECORD_TYPE_VALUES.includes(someValue);
 * ```
 *
 * @see {@link DnssecRecordType} - The TypeScript type definition
 * @see {@link DNSSEC_RECORD_TYPE} - The object form of this enum
 */
export const DNSSEC_RECORD_TYPE_VALUES = [
  'ds_data',
  'key_data'
] as const satisfies [string, ...string[]] | DnssecRecordType[];

/**
 * DnssecStatus. Auto-generated enum for DnssecStatus
 *
 * @remarks
 * This constant provides both object and array forms for the DnssecStatus enum.
 * The object form allows key-value access, while the array form enables iteration and validation.
 *
 * @example
 * ```typescript
 * // Using the object form for key-value access
 * const status = DNSSEC_STATUS.SUCCESS;
 * 
 * // Using the array form for iteration
 * const allStatuses = DNSSEC_STATUS_VALUES;
 * console.log(`Available statuses: ${allStatuses.join(', ')}`);
 * ```
 *
 * @see {@link DnssecStatus} - The TypeScript type definition
 */
export const DNSSEC_STATUS = {
  ENABLED: "enabled",
  DISABLED: "disabled",
} as const satisfies Record<string, DnssecStatus>;

/**
 * Array of all DnssecStatus enum values
 *
 * @remarks
 * This constant provides a array containing all valid DnssecStatus enum values.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all values
 * for (const value of DNSSEC_STATUS_VALUES) {
 *   console.log(`Processing: ${value}`);
 * }
 * 
 * // Validation
 * const isValid = DNSSEC_STATUS_VALUES.includes(someValue);
 * ```
 *
 * @see {@link DnssecStatus} - The TypeScript type definition
 * @see {@link DNSSEC_STATUS} - The object form of this enum
 */
export const DNSSEC_STATUS_VALUES = [
  'enabled',
  'disabled'
] as const satisfies [string, ...string[]] | DnssecStatus[];

/**
 * DomainAvailabilityStatus. Auto-generated enum for DomainAvailabilityStatus
 *
 * @remarks
 * This constant provides both object and array forms for the DomainAvailabilityStatus enum.
 * The object form allows key-value access, while the array form enables iteration and validation.
 *
 * @example
 * ```typescript
 * // Using the object form for key-value access
 * const status = DOMAIN_AVAILABILITY_STATUS.SUCCESS;
 * 
 * // Using the array form for iteration
 * const allStatuses = DOMAIN_AVAILABILITY_STATUS_VALUES;
 * console.log(`Available statuses: ${allStatuses.join(', ')}`);
 * ```
 *
 * @see {@link DomainAvailabilityStatus} - The TypeScript type definition
 */
export const DOMAIN_AVAILABILITY_STATUS = {
  AVAILABLE: "available",
  UNAVAILABLE: "unavailable",
  MARKET_AVAILABLE: "market_available",
  TMCH_CLAIM: "tmch_claim",
  ERROR: "error",
} as const satisfies Record<string, DomainAvailabilityStatus>;

/**
 * Array of all DomainAvailabilityStatus enum values
 *
 * @remarks
 * This constant provides a array containing all valid DomainAvailabilityStatus enum values.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all values
 * for (const value of DOMAIN_AVAILABILITY_STATUS_VALUES) {
 *   console.log(`Processing: ${value}`);
 * }
 * 
 * // Validation
 * const isValid = DOMAIN_AVAILABILITY_STATUS_VALUES.includes(someValue);
 * ```
 *
 * @see {@link DomainAvailabilityStatus} - The TypeScript type definition
 * @see {@link DOMAIN_AVAILABILITY_STATUS} - The object form of this enum
 */
export const DOMAIN_AVAILABILITY_STATUS_VALUES = [
  'available',
  'unavailable',
  'market_available',
  'tmch_claim',
  'error'
] as const satisfies [string, ...string[]] | DomainAvailabilityStatus[];

/**
 * DomainClientStatus. Auto-generated enum for DomainClientStatus
 *
 * @remarks
 * This constant provides both object and array forms for the DomainClientStatus enum.
 * The object form allows key-value access, while the array form enables iteration and validation.
 *
 * @example
 * ```typescript
 * // Using the object form for key-value access
 * const status = DOMAIN_CLIENT_STATUS.SUCCESS;
 * 
 * // Using the array form for iteration
 * const allStatuses = DOMAIN_CLIENT_STATUS_VALUES;
 * console.log(`Available statuses: ${allStatuses.join(', ')}`);
 * ```
 *
 * @see {@link DomainClientStatus} - The TypeScript type definition
 */
export const DOMAIN_CLIENT_STATUS = {
  CLIENT_TRANSFER_PROHIBITED: "clientTransferProhibited",
  CLIENT_UPDATE_PROHIBITED: "clientUpdateProhibited",
  CLIENT_DELETE_PROHIBITED: "clientDeleteProhibited",
  CLIENT_RENEW_PROHIBITED: "clientRenewProhibited",
  CLIENT_HOLD: "clientHold",
} as const satisfies Record<string, DomainClientStatus>;

/**
 * Array of all DomainClientStatus enum values
 *
 * @remarks
 * This constant provides a array containing all valid DomainClientStatus enum values.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all values
 * for (const value of DOMAIN_CLIENT_STATUS_VALUES) {
 *   console.log(`Processing: ${value}`);
 * }
 * 
 * // Validation
 * const isValid = DOMAIN_CLIENT_STATUS_VALUES.includes(someValue);
 * ```
 *
 * @see {@link DomainClientStatus} - The TypeScript type definition
 * @see {@link DOMAIN_CLIENT_STATUS} - The object form of this enum
 */
export const DOMAIN_CLIENT_STATUS_VALUES = [
  'clientTransferProhibited',
  'clientUpdateProhibited',
  'clientDeleteProhibited',
  'clientRenewProhibited',
  'clientHold'
] as const satisfies [string, ...string[]] | DomainClientStatus[];

/**
 * DomainContactType. Auto-generated enum for DomainContactType
 *
 * @remarks
 * This constant provides both object and array forms for the DomainContactType enum.
 * The object form allows key-value access, while the array form enables iteration and validation.
 *
 * @example
 * ```typescript
 * // Using the object form for key-value access
 * const status = DOMAIN_CONTACT_TYPE.SUCCESS;
 * 
 * // Using the array form for iteration
 * const allStatuses = DOMAIN_CONTACT_TYPE_VALUES;
 * console.log(`Available statuses: ${allStatuses.join(', ')}`);
 * ```
 *
 * @see {@link DomainContactType} - The TypeScript type definition
 */
export const DOMAIN_CONTACT_TYPE = {
  REGISTRANT: "registrant",
  ADMIN: "admin",
  TECH: "tech",
  BILLING: "billing",
} as const satisfies Record<string, DomainContactType>;

/**
 * Array of all DomainContactType enum values
 *
 * @remarks
 * This constant provides a array containing all valid DomainContactType enum values.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all values
 * for (const value of DOMAIN_CONTACT_TYPE_VALUES) {
 *   console.log(`Processing: ${value}`);
 * }
 * 
 * // Validation
 * const isValid = DOMAIN_CONTACT_TYPE_VALUES.includes(someValue);
 * ```
 *
 * @see {@link DomainContactType} - The TypeScript type definition
 * @see {@link DOMAIN_CONTACT_TYPE} - The object form of this enum
 */
export const DOMAIN_CONTACT_TYPE_VALUES = [
  'registrant',
  'admin',
  'tech',
  'billing'
] as const satisfies [string, ...string[]] | DomainContactType[];

/**
 * DomainSortField. Auto-generated enum for DomainSortField
 *
 * @remarks
 * This constant provides both object and array forms for the DomainSortField enum.
 * The object form allows key-value access, while the array form enables iteration and validation.
 *
 * @example
 * ```typescript
 * // Using the object form for key-value access
 * const status = DOMAIN_SORT_FIELD.SUCCESS;
 * 
 * // Using the array form for iteration
 * const allStatuses = DOMAIN_SORT_FIELD_VALUES;
 * console.log(`Available statuses: ${allStatuses.join(', ')}`);
 * ```
 *
 * @see {@link DomainSortField} - The TypeScript type definition
 */
export const DOMAIN_SORT_FIELD = {
  NAME: "name",
  CREATED_ON: "created_on",
  UPDATED_ON: "updated_on",
  EXPIRES_ON: "expires_on",
  REGISTERED_ON: "registered_on",
} as const satisfies Record<string, DomainSortField>;

/**
 * Array of all DomainSortField enum values
 *
 * @remarks
 * This constant provides a array containing all valid DomainSortField enum values.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all values
 * for (const value of DOMAIN_SORT_FIELD_VALUES) {
 *   console.log(`Processing: ${value}`);
 * }
 * 
 * // Validation
 * const isValid = DOMAIN_SORT_FIELD_VALUES.includes(someValue);
 * ```
 *
 * @see {@link DomainSortField} - The TypeScript type definition
 * @see {@link DOMAIN_SORT_FIELD} - The object form of this enum
 */
export const DOMAIN_SORT_FIELD_VALUES = [
  'name',
  'created_on',
  'updated_on',
  'expires_on',
  'registered_on'
] as const satisfies [string, ...string[]] | DomainSortField[];

/**
 * DomainStatus. Auto-generated enum for DomainStatus
 *
 * @remarks
 * This constant provides both object and array forms for the DomainStatus enum.
 * The object form allows key-value access, while the array form enables iteration and validation.
 *
 * @example
 * ```typescript
 * // Using the object form for key-value access
 * const status = DOMAIN_STATUS.SUCCESS;
 * 
 * // Using the array form for iteration
 * const allStatuses = DOMAIN_STATUS_VALUES;
 * console.log(`Available statuses: ${allStatuses.join(', ')}`);
 * ```
 *
 * @see {@link DomainStatus} - The TypeScript type definition
 */
export const DOMAIN_STATUS = {
  OK: "ok",
  SERVER_TRANSFER_PROHIBITED: "serverTransferProhibited",
  SERVER_UPDATE_PROHIBITED: "serverUpdateProhibited",
  SERVER_DELETE_PROHIBITED: "serverDeleteProhibited",
  SERVER_RENEW_PROHIBITED: "serverRenewProhibited",
  SERVER_RESTORE_PROHIBITED: "serverRestoreProhibited",
  SERVER_HOLD: "serverHold",
  TRANSFER_PERIOD: "transferPeriod",
  RENEW_PERIOD: "renewPeriod",
  REDEMPTION_PERIOD: "redemptionPeriod",
  PENDING_UPDATE: "pendingUpdate",
  PENDING_TRANSFER: "pendingTransfer",
  PENDING_RESTORE: "pendingRestore",
  PENDING_RENEW: "pendingRenew",
  PENDING_DELETE: "pendingDelete",
  PENDING_CREATE: "pendingCreate",
  INACTIVE: "inactive",
  AUTO_RENEW_PERIOD: "autoRenewPeriod",
  ADD_PERIOD: "addPeriod",
  DELETED: "deleted",
  CLIENT_TRANSFER_PROHIBITED: "clientTransferProhibited",
  CLIENT_UPDATE_PROHIBITED: "clientUpdateProhibited",
  CLIENT_DELETE_PROHIBITED: "clientDeleteProhibited",
  CLIENT_RENEW_PROHIBITED: "clientRenewProhibited",
  CLIENT_HOLD: "clientHold",
  FREE: "free",
  CONNECT: "connect",
  FAILED: "failed",
  INVALID: "invalid",
} as const satisfies Record<string, DomainStatus>;

/**
 * Array of all DomainStatus enum values
 *
 * @remarks
 * This constant provides a array containing all valid DomainStatus enum values.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all values
 * for (const value of DOMAIN_STATUS_VALUES) {
 *   console.log(`Processing: ${value}`);
 * }
 * 
 * // Validation
 * const isValid = DOMAIN_STATUS_VALUES.includes(someValue);
 * ```
 *
 * @see {@link DomainStatus} - The TypeScript type definition
 * @see {@link DOMAIN_STATUS} - The object form of this enum
 */
export const DOMAIN_STATUS_VALUES = [
  'ok',
  'serverTransferProhibited',
  'serverUpdateProhibited',
  'serverDeleteProhibited',
  'serverRenewProhibited',
  'serverRestoreProhibited',
  'serverHold',
  'transferPeriod',
  'renewPeriod',
  'redemptionPeriod',
  'pendingUpdate',
  'pendingTransfer',
  'pendingRestore',
  'pendingRenew',
  'pendingDelete',
  'pendingCreate',
  'inactive',
  'autoRenewPeriod',
  'addPeriod',
  'deleted',
  'clientTransferProhibited',
  'clientUpdateProhibited',
  'clientDeleteProhibited',
  'clientRenewProhibited',
  'clientHold',
  'free',
  'connect',
  'failed',
  'invalid'
] as const satisfies [string, ...string[]] | DomainStatus[];

/**
 * EmailVerificationStatus. Auto-generated enum for EmailVerificationStatus
 *
 * @remarks
 * This constant provides both object and array forms for the EmailVerificationStatus enum.
 * The object form allows key-value access, while the array form enables iteration and validation.
 *
 * @example
 * ```typescript
 * // Using the object form for key-value access
 * const status = EMAIL_VERIFICATION_STATUS.SUCCESS;
 * 
 * // Using the array form for iteration
 * const allStatuses = EMAIL_VERIFICATION_STATUS_VALUES;
 * console.log(`Available statuses: ${allStatuses.join(', ')}`);
 * ```
 *
 * @see {@link EmailVerificationStatus} - The TypeScript type definition
 */
export const EMAIL_VERIFICATION_STATUS = {
  VERIFIED: "verified",
  PENDING: "pending",
  CANCELED: "canceled",
} as const satisfies Record<string, EmailVerificationStatus>;

/**
 * Array of all EmailVerificationStatus enum values
 *
 * @remarks
 * This constant provides a array containing all valid EmailVerificationStatus enum values.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all values
 * for (const value of EMAIL_VERIFICATION_STATUS_VALUES) {
 *   console.log(`Processing: ${value}`);
 * }
 * 
 * // Validation
 * const isValid = EMAIL_VERIFICATION_STATUS_VALUES.includes(someValue);
 * ```
 *
 * @see {@link EmailVerificationStatus} - The TypeScript type definition
 * @see {@link EMAIL_VERIFICATION_STATUS} - The object form of this enum
 */
export const EMAIL_VERIFICATION_STATUS_VALUES = [
  'verified',
  'pending',
  'canceled'
] as const satisfies [string, ...string[]] | EmailVerificationStatus[];

/**
 * EventObjectType. Auto-generated enum for EventObjectType
 *
 * @remarks
 * This constant provides both object and array forms for the EventObjectType enum.
 * The object form allows key-value access, while the array form enables iteration and validation.
 *
 * @example
 * ```typescript
 * // Using the object form for key-value access
 * const status = EVENT_OBJECT_TYPE.SUCCESS;
 * 
 * // Using the array form for iteration
 * const allStatuses = EVENT_OBJECT_TYPE_VALUES;
 * console.log(`Available statuses: ${allStatuses.join(', ')}`);
 * ```
 *
 * @see {@link EventObjectType} - The TypeScript type definition
 */
export const EVENT_OBJECT_TYPE = {
  DOMAIN: "DOMAIN",
  CONTACT: "CONTACT",
  HOST: "HOST",
  RAW: "RAW",
  UNKNOWN: "UNKNOWN",
} as const satisfies Record<string, EventObjectType>;

/**
 * Array of all EventObjectType enum values
 *
 * @remarks
 * This constant provides a array containing all valid EventObjectType enum values.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all values
 * for (const value of EVENT_OBJECT_TYPE_VALUES) {
 *   console.log(`Processing: ${value}`);
 * }
 * 
 * // Validation
 * const isValid = EVENT_OBJECT_TYPE_VALUES.includes(someValue);
 * ```
 *
 * @see {@link EventObjectType} - The TypeScript type definition
 * @see {@link EVENT_OBJECT_TYPE} - The object form of this enum
 */
export const EVENT_OBJECT_TYPE_VALUES = [
  'DOMAIN',
  'CONTACT',
  'HOST',
  'RAW',
  'UNKNOWN'
] as const satisfies [string, ...string[]] | EventObjectType[];

/**
 * EventSubtype. Auto-generated enum for EventSubtype
 *
 * @remarks
 * This constant provides both object and array forms for the EventSubtype enum.
 * The object form allows key-value access, while the array form enables iteration and validation.
 *
 * @example
 * ```typescript
 * // Using the object form for key-value access
 * const status = EVENT_SUBTYPE.SUCCESS;
 * 
 * // Using the array form for iteration
 * const allStatuses = EVENT_SUBTYPE_VALUES;
 * console.log(`Available statuses: ${allStatuses.join(', ')}`);
 * ```
 *
 * @see {@link EventSubtype} - The TypeScript type definition
 */
export const EVENT_SUBTYPE = {
  NOTIFICATION: "NOTIFICATION",
  SUCCESS: "SUCCESS",
  FAILURE: "FAILURE",
  CANCELED: "CANCELED",
} as const satisfies Record<string, EventSubtype>;

/**
 * Array of all EventSubtype enum values
 *
 * @remarks
 * This constant provides a array containing all valid EventSubtype enum values.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all values
 * for (const value of EVENT_SUBTYPE_VALUES) {
 *   console.log(`Processing: ${value}`);
 * }
 * 
 * // Validation
 * const isValid = EVENT_SUBTYPE_VALUES.includes(someValue);
 * ```
 *
 * @see {@link EventSubtype} - The TypeScript type definition
 * @see {@link EVENT_SUBTYPE} - The object form of this enum
 */
export const EVENT_SUBTYPE_VALUES = [
  'NOTIFICATION',
  'SUCCESS',
  'FAILURE',
  'CANCELED'
] as const satisfies [string, ...string[]] | EventSubtype[];

/**
 * EventType. Auto-generated enum for EventType
 *
 * @remarks
 * This constant provides both object and array forms for the EventType enum.
 * The object form allows key-value access, while the array form enables iteration and validation.
 *
 * @example
 * ```typescript
 * // Using the object form for key-value access
 * const status = EVENT_TYPE.SUCCESS;
 * 
 * // Using the array form for iteration
 * const allStatuses = EVENT_TYPE_VALUES;
 * console.log(`Available statuses: ${allStatuses.join(', ')}`);
 * ```
 *
 * @see {@link EventType} - The TypeScript type definition
 */
export const EVENT_TYPE = {
  REGISTRATION: "REGISTRATION",
  RENEWAL: "RENEWAL",
  MODIFICATION: "MODIFICATION",
  DELETION: "DELETION",
  INBOUND_TRANSFER: "INBOUND_TRANSFER",
  OUTBOUND_TRANSFER: "OUTBOUND_TRANSFER",
} as const satisfies Record<string, EventType>;

/**
 * Array of all EventType enum values
 *
 * @remarks
 * This constant provides a array containing all valid EventType enum values.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all values
 * for (const value of EVENT_TYPE_VALUES) {
 *   console.log(`Processing: ${value}`);
 * }
 * 
 * // Validation
 * const isValid = EVENT_TYPE_VALUES.includes(someValue);
 * ```
 *
 * @see {@link EventType} - The TypeScript type definition
 * @see {@link EVENT_TYPE} - The object form of this enum
 */
export const EVENT_TYPE_VALUES = [
  'REGISTRATION',
  'RENEWAL',
  'MODIFICATION',
  'DELETION',
  'INBOUND_TRANSFER',
  'OUTBOUND_TRANSFER'
] as const satisfies [string, ...string[]] | EventType[];

/**
 * GrantType. Auto-generated enum for GrantType
 *
 * @remarks
 * This constant provides both object and array forms for the GrantType enum.
 * The object form allows key-value access, while the array form enables iteration and validation.
 *
 * @example
 * ```typescript
 * // Using the object form for key-value access
 * const status = GRANT_TYPE.SUCCESS;
 * 
 * // Using the array form for iteration
 * const allStatuses = GRANT_TYPE_VALUES;
 * console.log(`Available statuses: ${allStatuses.join(', ')}`);
 * ```
 *
 * @see {@link GrantType} - The TypeScript type definition
 */
export const GRANT_TYPE = {
  CLIENT_CREDENTIALS: "client_credentials",
  PASSWORD: "password",
  REFRESH_TOKEN: "refresh_token",
} as const satisfies Record<string, GrantType>;

/**
 * Array of all GrantType enum values
 *
 * @remarks
 * This constant provides a array containing all valid GrantType enum values.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all values
 * for (const value of GRANT_TYPE_VALUES) {
 *   console.log(`Processing: ${value}`);
 * }
 * 
 * // Validation
 * const isValid = GRANT_TYPE_VALUES.includes(someValue);
 * ```
 *
 * @see {@link GrantType} - The TypeScript type definition
 * @see {@link GRANT_TYPE} - The object form of this enum
 */
export const GRANT_TYPE_VALUES = [
  'client_credentials',
  'password',
  'refresh_token'
] as const satisfies [string, ...string[]] | GrantType[];

/**
 * LaunchPhaseType. Auto-generated enum for LaunchPhaseType
 *
 * @remarks
 * This constant provides both object and array forms for the LaunchPhaseType enum.
 * The object form allows key-value access, while the array form enables iteration and validation.
 *
 * @example
 * ```typescript
 * // Using the object form for key-value access
 * const status = LAUNCH_PHASE_TYPE.SUCCESS;
 * 
 * // Using the array form for iteration
 * const allStatuses = LAUNCH_PHASE_TYPE_VALUES;
 * console.log(`Available statuses: ${allStatuses.join(', ')}`);
 * ```
 *
 * @see {@link LaunchPhaseType} - The TypeScript type definition
 */
export const LAUNCH_PHASE_TYPE = {
  SUNRISE: "sunrise",
  LANDRUSH: "landrush",
  EAP: "eap",
} as const satisfies Record<string, LaunchPhaseType>;

/**
 * Array of all LaunchPhaseType enum values
 *
 * @remarks
 * This constant provides a array containing all valid LaunchPhaseType enum values.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all values
 * for (const value of LAUNCH_PHASE_TYPE_VALUES) {
 *   console.log(`Processing: ${value}`);
 * }
 * 
 * // Validation
 * const isValid = LAUNCH_PHASE_TYPE_VALUES.includes(someValue);
 * ```
 *
 * @see {@link LaunchPhaseType} - The TypeScript type definition
 * @see {@link LAUNCH_PHASE_TYPE} - The object form of this enum
 */
export const LAUNCH_PHASE_TYPE_VALUES = [
  'sunrise',
  'landrush',
  'eap'
] as const satisfies [string, ...string[]] | LaunchPhaseType[];

/**
 * LocalPresenceRequirementType. Auto-generated enum for LocalPresenceRequirementType
 *
 * @remarks
 * This constant provides both object and array forms for the LocalPresenceRequirementType enum.
 * The object form allows key-value access, while the array form enables iteration and validation.
 *
 * @example
 * ```typescript
 * // Using the object form for key-value access
 * const status = LOCAL_PRESENCE_REQUIREMENT_TYPE.SUCCESS;
 * 
 * // Using the array form for iteration
 * const allStatuses = LOCAL_PRESENCE_REQUIREMENT_TYPE_VALUES;
 * console.log(`Available statuses: ${allStatuses.join(', ')}`);
 * ```
 *
 * @see {@link LocalPresenceRequirementType} - The TypeScript type definition
 */
export const LOCAL_PRESENCE_REQUIREMENT_TYPE = {
  PHYSICAL_ADDRESS: "physical_address",
  BUSINESS_ENTITY: "business_entity",
} as const satisfies Record<string, LocalPresenceRequirementType>;

/**
 * Array of all LocalPresenceRequirementType enum values
 *
 * @remarks
 * This constant provides a array containing all valid LocalPresenceRequirementType enum values.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all values
 * for (const value of LOCAL_PRESENCE_REQUIREMENT_TYPE_VALUES) {
 *   console.log(`Processing: ${value}`);
 * }
 * 
 * // Validation
 * const isValid = LOCAL_PRESENCE_REQUIREMENT_TYPE_VALUES.includes(someValue);
 * ```
 *
 * @see {@link LocalPresenceRequirementType} - The TypeScript type definition
 * @see {@link LOCAL_PRESENCE_REQUIREMENT_TYPE} - The object form of this enum
 */
export const LOCAL_PRESENCE_REQUIREMENT_TYPE_VALUES = [
  'physical_address',
  'business_entity'
] as const satisfies [string, ...string[]] | LocalPresenceRequirementType[];

/**
 * OrganizationCredentialStatus. Auto-generated enum for OrganizationCredentialStatus
 *
 * @remarks
 * This constant provides both object and array forms for the OrganizationCredentialStatus enum.
 * The object form allows key-value access, while the array form enables iteration and validation.
 *
 * @example
 * ```typescript
 * // Using the object form for key-value access
 * const status = ORGANIZATION_CREDENTIAL_STATUS.SUCCESS;
 * 
 * // Using the array form for iteration
 * const allStatuses = ORGANIZATION_CREDENTIAL_STATUS_VALUES;
 * console.log(`Available statuses: ${allStatuses.join(', ')}`);
 * ```
 *
 * @see {@link OrganizationCredentialStatus} - The TypeScript type definition
 */
export const ORGANIZATION_CREDENTIAL_STATUS = {
  ACTIVE: "active",
  REVOKED: "revoked",
} as const satisfies Record<string, OrganizationCredentialStatus>;

/**
 * Array of all OrganizationCredentialStatus enum values
 *
 * @remarks
 * This constant provides a array containing all valid OrganizationCredentialStatus enum values.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all values
 * for (const value of ORGANIZATION_CREDENTIAL_STATUS_VALUES) {
 *   console.log(`Processing: ${value}`);
 * }
 * 
 * // Validation
 * const isValid = ORGANIZATION_CREDENTIAL_STATUS_VALUES.includes(someValue);
 * ```
 *
 * @see {@link OrganizationCredentialStatus} - The TypeScript type definition
 * @see {@link ORGANIZATION_CREDENTIAL_STATUS} - The object form of this enum
 */
export const ORGANIZATION_CREDENTIAL_STATUS_VALUES = [
  'active',
  'revoked'
] as const satisfies [string, ...string[]] | OrganizationCredentialStatus[];

/**
 * OrganizationStatus. Auto-generated enum for OrganizationStatus
 *
 * @remarks
 * This constant provides both object and array forms for the OrganizationStatus enum.
 * The object form allows key-value access, while the array form enables iteration and validation.
 *
 * @example
 * ```typescript
 * // Using the object form for key-value access
 * const status = ORGANIZATION_STATUS.SUCCESS;
 * 
 * // Using the array form for iteration
 * const allStatuses = ORGANIZATION_STATUS_VALUES;
 * console.log(`Available statuses: ${allStatuses.join(', ')}`);
 * ```
 *
 * @see {@link OrganizationStatus} - The TypeScript type definition
 */
export const ORGANIZATION_STATUS = {
  ACTIVE: "active",
  INACTIVE: "inactive",
} as const satisfies Record<string, OrganizationStatus>;

/**
 * Array of all OrganizationStatus enum values
 *
 * @remarks
 * This constant provides a array containing all valid OrganizationStatus enum values.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all values
 * for (const value of ORGANIZATION_STATUS_VALUES) {
 *   console.log(`Processing: ${value}`);
 * }
 * 
 * // Validation
 * const isValid = ORGANIZATION_STATUS_VALUES.includes(someValue);
 * ```
 *
 * @see {@link OrganizationStatus} - The TypeScript type definition
 * @see {@link ORGANIZATION_STATUS} - The object form of this enum
 */
export const ORGANIZATION_STATUS_VALUES = [
  'active',
  'inactive'
] as const satisfies [string, ...string[]] | OrganizationStatus[];

/**
 * PatchOp. Auto-generated enum for PatchOp
 *
 * @remarks
 * This constant provides both object and array forms for the PatchOp enum.
 * The object form allows key-value access, while the array form enables iteration and validation.
 *
 * @example
 * ```typescript
 * // Using the object form for key-value access
 * const status = PATCH_OP.SUCCESS;
 * 
 * // Using the array form for iteration
 * const allStatuses = PATCH_OP_VALUES;
 * console.log(`Available statuses: ${allStatuses.join(', ')}`);
 * ```
 *
 * @see {@link PatchOp} - The TypeScript type definition
 */
export const PATCH_OP = {
  UPSERT: "upsert",
  REMOVE: "remove",
} as const satisfies Record<string, PatchOp>;

/**
 * Array of all PatchOp enum values
 *
 * @remarks
 * This constant provides a array containing all valid PatchOp enum values.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all values
 * for (const value of PATCH_OP_VALUES) {
 *   console.log(`Processing: ${value}`);
 * }
 * 
 * // Validation
 * const isValid = PATCH_OP_VALUES.includes(someValue);
 * ```
 *
 * @see {@link PatchOp} - The TypeScript type definition
 * @see {@link PATCH_OP} - The object form of this enum
 */
export const PATCH_OP_VALUES = [
  'upsert',
  'remove'
] as const satisfies [string, ...string[]] | PatchOp[];

/**
 * PeriodUnit. Auto-generated enum for PeriodUnit
 *
 * @remarks
 * This constant provides both object and array forms for the PeriodUnit enum.
 * The object form allows key-value access, while the array form enables iteration and validation.
 *
 * @example
 * ```typescript
 * // Using the object form for key-value access
 * const status = PERIOD_UNIT.SUCCESS;
 * 
 * // Using the array form for iteration
 * const allStatuses = PERIOD_UNIT_VALUES;
 * console.log(`Available statuses: ${allStatuses.join(', ')}`);
 * ```
 *
 * @see {@link PeriodUnit} - The TypeScript type definition
 */
export const PERIOD_UNIT = {
  Y: "y",
  M: "m",
  D: "d",
} as const satisfies Record<string, PeriodUnit>;

/**
 * Array of all PeriodUnit enum values
 *
 * @remarks
 * This constant provides a array containing all valid PeriodUnit enum values.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all values
 * for (const value of PERIOD_UNIT_VALUES) {
 *   console.log(`Processing: ${value}`);
 * }
 * 
 * // Validation
 * const isValid = PERIOD_UNIT_VALUES.includes(someValue);
 * ```
 *
 * @see {@link PeriodUnit} - The TypeScript type definition
 * @see {@link PERIOD_UNIT} - The object form of this enum
 */
export const PERIOD_UNIT_VALUES = [
  'y',
  'm',
  'd'
] as const satisfies [string, ...string[]] | PeriodUnit[];

/**
 * Permission. Auto-generated enum for Permission
 *
 * @remarks
 * This constant provides both object and array forms for the Permission enum.
 * The object form allows key-value access, while the array form enables iteration and validation.
 *
 * @example
 * ```typescript
 * // Using the object form for key-value access
 * const status = PERMISSION.SUCCESS;
 * 
 * // Using the array form for iteration
 * const allStatuses = PERMISSION_VALUES;
 * console.log(`Available statuses: ${allStatuses.join(', ')}`);
 * ```
 *
 * @see {@link Permission} - The TypeScript type definition
 */
export const PERMISSION = {
  ACKNOWLEDGE: "acknowledge",
  BULK_CREATE: "bulk_create",
  BULK_DELETE: "bulk_delete",
  BULK_RENEW_EXPIRE: "bulk_renew_expire",
  BULK_TRANSFER_TRADE: "bulk_transfer_trade",
  BULK_UPDATE: "bulk_update",
  CORPORATE_PLAN: "corporate_plan",
  CREATE: "create",
  DELETE: "delete",
  ENTERPRISE_PLAN: "enterprise_plan",
  HAS_ACCEPTED_TOS: "has_accepted_tos",
  MANAGE_API_KEYS: "manage_api_keys",
  MANAGE_BILLING: "manage_billing",
  MANAGE_CMS_CONTENT: "manage_cms_content",
  MANAGE_CONTACTS: "manage_contacts",
  MANAGE_DNS_ZONES: "manage_dns_zones",
  MANAGE_DOMAINS: "manage_domains",
  MANAGE_EMAIL_FORWARDS: "manage_email_forwards",
  MANAGE_OPUSDNS_API_KEYS: "manage_opusdns_api_keys",
  MANAGE_PRODUCTS: "manage_products",
  MANAGE_RESELLER: "manage_reseller",
  MANAGE_USER_RELATIONS: "manage_user_relations",
  MANAGE_USERS: "manage_users",
  PLAN_MANAGER: "plan_manager",
  PREMIUM_PLAN: "premium_plan",
  RENEW_EXPIRE: "renew_expire",
  STARTER_PLAN: "starter_plan",
  TRANSFER_TRADE: "transfer_trade",
  UPDATE: "update",
  VERIFY: "verify",
  VIEW: "view",
  VIEW_AUDIT_LOGS: "view_audit_logs",
} as const satisfies Record<string, Permission>;

/**
 * Array of all Permission enum values
 *
 * @remarks
 * This constant provides a array containing all valid Permission enum values.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all values
 * for (const value of PERMISSION_VALUES) {
 *   console.log(`Processing: ${value}`);
 * }
 * 
 * // Validation
 * const isValid = PERMISSION_VALUES.includes(someValue);
 * ```
 *
 * @see {@link Permission} - The TypeScript type definition
 * @see {@link PERMISSION} - The object form of this enum
 */
export const PERMISSION_VALUES = [
  'acknowledge',
  'bulk_create',
  'bulk_delete',
  'bulk_renew_expire',
  'bulk_transfer_trade',
  'bulk_update',
  'corporate_plan',
  'create',
  'delete',
  'enterprise_plan',
  'has_accepted_tos',
  'manage_api_keys',
  'manage_billing',
  'manage_cms_content',
  'manage_contacts',
  'manage_dns_zones',
  'manage_domains',
  'manage_email_forwards',
  'manage_opusdns_api_keys',
  'manage_products',
  'manage_reseller',
  'manage_user_relations',
  'manage_users',
  'plan_manager',
  'premium_plan',
  'renew_expire',
  'starter_plan',
  'transfer_trade',
  'update',
  'verify',
  'view',
  'view_audit_logs'
] as const satisfies [string, ...string[]] | Permission[];

/**
 * PostTransferRequirements. Auto-generated enum for PostTransferRequirements
 *
 * @remarks
 * This constant provides both object and array forms for the PostTransferRequirements enum.
 * The object form allows key-value access, while the array form enables iteration and validation.
 *
 * @example
 * ```typescript
 * // Using the object form for key-value access
 * const status = POST_TRANSFER_REQUIREMENTS.SUCCESS;
 * 
 * // Using the array form for iteration
 * const allStatuses = POST_TRANSFER_REQUIREMENTS_VALUES;
 * console.log(`Available statuses: ${allStatuses.join(', ')}`);
 * ```
 *
 * @see {@link PostTransferRequirements} - The TypeScript type definition
 */
export const POST_TRANSFER_REQUIREMENTS = {
  UPDATE_CONTACTS: "update_contacts",
  TLD_SPECIFIC: "tld_specific",
} as const satisfies Record<string, PostTransferRequirements>;

/**
 * Array of all PostTransferRequirements enum values
 *
 * @remarks
 * This constant provides a array containing all valid PostTransferRequirements enum values.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all values
 * for (const value of POST_TRANSFER_REQUIREMENTS_VALUES) {
 *   console.log(`Processing: ${value}`);
 * }
 * 
 * // Validation
 * const isValid = POST_TRANSFER_REQUIREMENTS_VALUES.includes(someValue);
 * ```
 *
 * @see {@link PostTransferRequirements} - The TypeScript type definition
 * @see {@link POST_TRANSFER_REQUIREMENTS} - The object form of this enum
 */
export const POST_TRANSFER_REQUIREMENTS_VALUES = [
  'update_contacts',
  'tld_specific'
] as const satisfies [string, ...string[]] | PostTransferRequirements[];

/**
 * PostalAddressType. Auto-generated enum for PostalAddressType
 *
 * @remarks
 * This constant provides both object and array forms for the PostalAddressType enum.
 * The object form allows key-value access, while the array form enables iteration and validation.
 *
 * @example
 * ```typescript
 * // Using the object form for key-value access
 * const status = POSTAL_ADDRESS_TYPE.SUCCESS;
 * 
 * // Using the array form for iteration
 * const allStatuses = POSTAL_ADDRESS_TYPE_VALUES;
 * console.log(`Available statuses: ${allStatuses.join(', ')}`);
 * ```
 *
 * @see {@link PostalAddressType} - The TypeScript type definition
 */
export const POSTAL_ADDRESS_TYPE = {
  LOC: "loc",
  INT: "int",
} as const satisfies Record<string, PostalAddressType>;

/**
 * Array of all PostalAddressType enum values
 *
 * @remarks
 * This constant provides a array containing all valid PostalAddressType enum values.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all values
 * for (const value of POSTAL_ADDRESS_TYPE_VALUES) {
 *   console.log(`Processing: ${value}`);
 * }
 * 
 * // Validation
 * const isValid = POSTAL_ADDRESS_TYPE_VALUES.includes(someValue);
 * ```
 *
 * @see {@link PostalAddressType} - The TypeScript type definition
 * @see {@link POSTAL_ADDRESS_TYPE} - The object form of this enum
 */
export const POSTAL_ADDRESS_TYPE_VALUES = [
  'loc',
  'int'
] as const satisfies [string, ...string[]] | PostalAddressType[];

/**
 * PremiumAffectsType. Auto-generated enum for PremiumAffectsType
 *
 * @remarks
 * This constant provides both object and array forms for the PremiumAffectsType enum.
 * The object form allows key-value access, while the array form enables iteration and validation.
 *
 * @example
 * ```typescript
 * // Using the object form for key-value access
 * const status = PREMIUM_AFFECTS_TYPE.SUCCESS;
 * 
 * // Using the array form for iteration
 * const allStatuses = PREMIUM_AFFECTS_TYPE_VALUES;
 * console.log(`Available statuses: ${allStatuses.join(', ')}`);
 * ```
 *
 * @see {@link PremiumAffectsType} - The TypeScript type definition
 */
export const PREMIUM_AFFECTS_TYPE = {
  REGISTRATION: "registration",
  RENEWAL: "renewal",
} as const satisfies Record<string, PremiumAffectsType>;

/**
 * Array of all PremiumAffectsType enum values
 *
 * @remarks
 * This constant provides a array containing all valid PremiumAffectsType enum values.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all values
 * for (const value of PREMIUM_AFFECTS_TYPE_VALUES) {
 *   console.log(`Processing: ${value}`);
 * }
 * 
 * // Validation
 * const isValid = PREMIUM_AFFECTS_TYPE_VALUES.includes(someValue);
 * ```
 *
 * @see {@link PremiumAffectsType} - The TypeScript type definition
 * @see {@link PREMIUM_AFFECTS_TYPE} - The object form of this enum
 */
export const PREMIUM_AFFECTS_TYPE_VALUES = [
  'registration',
  'renewal'
] as const satisfies [string, ...string[]] | PremiumAffectsType[];

/**
 * PremiumSourceType. Auto-generated enum for PremiumSourceType
 *
 * @remarks
 * This constant provides both object and array forms for the PremiumSourceType enum.
 * The object form allows key-value access, while the array form enables iteration and validation.
 *
 * @example
 * ```typescript
 * // Using the object form for key-value access
 * const status = PREMIUM_SOURCE_TYPE.SUCCESS;
 * 
 * // Using the array form for iteration
 * const allStatuses = PREMIUM_SOURCE_TYPE_VALUES;
 * console.log(`Available statuses: ${allStatuses.join(', ')}`);
 * ```
 *
 * @see {@link PremiumSourceType} - The TypeScript type definition
 */
export const PREMIUM_SOURCE_TYPE = {
  EPP: "EPP",
  API: "API",
  CSV: "CSV",
  MANUAL: "manual",
} as const satisfies Record<string, PremiumSourceType>;

/**
 * Array of all PremiumSourceType enum values
 *
 * @remarks
 * This constant provides a array containing all valid PremiumSourceType enum values.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all values
 * for (const value of PREMIUM_SOURCE_TYPE_VALUES) {
 *   console.log(`Processing: ${value}`);
 * }
 * 
 * // Validation
 * const isValid = PREMIUM_SOURCE_TYPE_VALUES.includes(someValue);
 * ```
 *
 * @see {@link PremiumSourceType} - The TypeScript type definition
 * @see {@link PREMIUM_SOURCE_TYPE} - The object form of this enum
 */
export const PREMIUM_SOURCE_TYPE_VALUES = [
  'EPP',
  'API',
  'CSV',
  'manual'
] as const satisfies [string, ...string[]] | PremiumSourceType[];

/**
 * RegistrantChangeType. Auto-generated enum for RegistrantChangeType
 *
 * @remarks
 * This constant provides both object and array forms for the RegistrantChangeType enum.
 * The object form allows key-value access, while the array form enables iteration and validation.
 *
 * @example
 * ```typescript
 * // Using the object form for key-value access
 * const status = REGISTRANT_CHANGE_TYPE.SUCCESS;
 * 
 * // Using the array form for iteration
 * const allStatuses = REGISTRANT_CHANGE_TYPE_VALUES;
 * console.log(`Available statuses: ${allStatuses.join(', ')}`);
 * ```
 *
 * @see {@link RegistrantChangeType} - The TypeScript type definition
 */
export const REGISTRANT_CHANGE_TYPE = {
  UPDATE: "update",
  TRADE: "trade",
} as const satisfies Record<string, RegistrantChangeType>;

/**
 * Array of all RegistrantChangeType enum values
 *
 * @remarks
 * This constant provides a array containing all valid RegistrantChangeType enum values.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all values
 * for (const value of REGISTRANT_CHANGE_TYPE_VALUES) {
 *   console.log(`Processing: ${value}`);
 * }
 * 
 * // Validation
 * const isValid = REGISTRANT_CHANGE_TYPE_VALUES.includes(someValue);
 * ```
 *
 * @see {@link RegistrantChangeType} - The TypeScript type definition
 * @see {@link REGISTRANT_CHANGE_TYPE} - The object form of this enum
 */
export const REGISTRANT_CHANGE_TYPE_VALUES = [
  'update',
  'trade'
] as const satisfies [string, ...string[]] | RegistrantChangeType[];

/**
 * RegistryHandleAttributeType. Registry handle attribute types for type-safe attribute key access.
 *
 * @remarks
 * This constant provides both object and array forms for the RegistryHandleAttributeType enum.
 * The object form allows key-value access, while the array form enables iteration and validation.
 *
 * @example
 * ```typescript
 * // Using the object form for key-value access
 * const status = REGISTRY_HANDLE_ATTRIBUTE_TYPE.SUCCESS;
 * 
 * // Using the array form for iteration
 * const allStatuses = REGISTRY_HANDLE_ATTRIBUTE_TYPE_VALUES;
 * console.log(`Available statuses: ${allStatuses.join(', ')}`);
 * ```
 *
 * @see {@link RegistryHandleAttributeType} - The TypeScript type definition
 */
export const REGISTRY_HANDLE_ATTRIBUTE_TYPE = {
  AT-EXT-CONTACT:TYPE: "at-ext-contact:type",
} as const satisfies Record<string, RegistryHandleAttributeType>;

/**
 * Array of all RegistryHandleAttributeType enum values
 *
 * @remarks
 * This constant provides a array containing all valid RegistryHandleAttributeType enum values.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all values
 * for (const value of REGISTRY_HANDLE_ATTRIBUTE_TYPE_VALUES) {
 *   console.log(`Processing: ${value}`);
 * }
 * 
 * // Validation
 * const isValid = REGISTRY_HANDLE_ATTRIBUTE_TYPE_VALUES.includes(someValue);
 * ```
 *
 * @see {@link RegistryHandleAttributeType} - The TypeScript type definition
 * @see {@link REGISTRY_HANDLE_ATTRIBUTE_TYPE} - The object form of this enum
 */
export const REGISTRY_HANDLE_ATTRIBUTE_TYPE_VALUES = [
  'at-ext-contact:type'
] as const satisfies [string, ...string[]] | RegistryHandleAttributeType[];

/**
 * Relation. Auto-generated enum for Relation
 *
 * @remarks
 * This constant provides both object and array forms for the Relation enum.
 * The object form allows key-value access, while the array form enables iteration and validation.
 *
 * @example
 * ```typescript
 * // Using the object form for key-value access
 * const status = RELATION.SUCCESS;
 * 
 * // Using the array form for iteration
 * const allStatuses = RELATION_VALUES;
 * console.log(`Available statuses: ${allStatuses.join(', ')}`);
 * ```
 *
 * @see {@link Relation} - The TypeScript type definition
 */
export const RELATION = {
  ACCEPTED_TOS: "accepted_tos",
  ADMIN: "admin",
  API_ADMIN: "api_admin",
  BILLING_MANAGER: "billing_manager",
  CLIENT_API_KEY: "client_api_key",
  CMS_CONTENT_EDITOR: "cms_content_editor",
  CONTACT_MANAGER: "contact_manager",
  DOMAIN_MANAGER: "domain_manager",
  EMAIL_FORWARD_MANAGER: "email_forward_manager",
  MEMBER: "member",
  OPUSDNS_INTERNAL_API_KEY: "opusdns_internal_api_key",
  ORGANIZATION_MANAGER: "organization_manager",
  OWNER: "owner",
  PARENT: "parent",
  PRODUCT_MANAGER: "product_manager",
  RECIPIENT: "recipient",
  RESELLER_MANAGER: "reseller_manager",
  ROOT_ADMIN: "root_admin",
  SELF: "self",
} as const satisfies Record<string, Relation>;

/**
 * Array of all Relation enum values
 *
 * @remarks
 * This constant provides a array containing all valid Relation enum values.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all values
 * for (const value of RELATION_VALUES) {
 *   console.log(`Processing: ${value}`);
 * }
 * 
 * // Validation
 * const isValid = RELATION_VALUES.includes(someValue);
 * ```
 *
 * @see {@link Relation} - The TypeScript type definition
 * @see {@link RELATION} - The object form of this enum
 */
export const RELATION_VALUES = [
  'accepted_tos',
  'admin',
  'api_admin',
  'billing_manager',
  'client_api_key',
  'cms_content_editor',
  'contact_manager',
  'domain_manager',
  'email_forward_manager',
  'member',
  'opusdns_internal_api_key',
  'organization_manager',
  'owner',
  'parent',
  'product_manager',
  'recipient',
  'reseller_manager',
  'root_admin',
  'self'
] as const satisfies [string, ...string[]] | Relation[];

/**
 * RenewalMode. Auto-generated enum for RenewalMode
 *
 * @remarks
 * This constant provides both object and array forms for the RenewalMode enum.
 * The object form allows key-value access, while the array form enables iteration and validation.
 *
 * @example
 * ```typescript
 * // Using the object form for key-value access
 * const status = RENEWAL_MODE.SUCCESS;
 * 
 * // Using the array form for iteration
 * const allStatuses = RENEWAL_MODE_VALUES;
 * console.log(`Available statuses: ${allStatuses.join(', ')}`);
 * ```
 *
 * @see {@link RenewalMode} - The TypeScript type definition
 */
export const RENEWAL_MODE = {
  RENEW: "renew",
  EXPIRE: "expire",
  DELETE: "delete",
} as const satisfies Record<string, RenewalMode>;

/**
 * Array of all RenewalMode enum values
 *
 * @remarks
 * This constant provides a array containing all valid RenewalMode enum values.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all values
 * for (const value of RENEWAL_MODE_VALUES) {
 *   console.log(`Processing: ${value}`);
 * }
 * 
 * // Validation
 * const isValid = RENEWAL_MODE_VALUES.includes(someValue);
 * ```
 *
 * @see {@link RenewalMode} - The TypeScript type definition
 * @see {@link RENEWAL_MODE} - The object form of this enum
 */
export const RENEWAL_MODE_VALUES = [
  'renew',
  'expire',
  'delete'
] as const satisfies [string, ...string[]] | RenewalMode[];

/**
 * ReservedSourceType. Auto-generated enum for ReservedSourceType
 *
 * @remarks
 * This constant provides both object and array forms for the ReservedSourceType enum.
 * The object form allows key-value access, while the array form enables iteration and validation.
 *
 * @example
 * ```typescript
 * // Using the object form for key-value access
 * const status = RESERVED_SOURCE_TYPE.SUCCESS;
 * 
 * // Using the array form for iteration
 * const allStatuses = RESERVED_SOURCE_TYPE_VALUES;
 * console.log(`Available statuses: ${allStatuses.join(', ')}`);
 * ```
 *
 * @see {@link ReservedSourceType} - The TypeScript type definition
 */
export const RESERVED_SOURCE_TYPE = {
  API: "API",
  CSV: "CSV",
  MANUAL: "manual",
} as const satisfies Record<string, ReservedSourceType>;

/**
 * Array of all ReservedSourceType enum values
 *
 * @remarks
 * This constant provides a array containing all valid ReservedSourceType enum values.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all values
 * for (const value of RESERVED_SOURCE_TYPE_VALUES) {
 *   console.log(`Processing: ${value}`);
 * }
 * 
 * // Validation
 * const isValid = RESERVED_SOURCE_TYPE_VALUES.includes(someValue);
 * ```
 *
 * @see {@link ReservedSourceType} - The TypeScript type definition
 * @see {@link RESERVED_SOURCE_TYPE} - The object form of this enum
 */
export const RESERVED_SOURCE_TYPE_VALUES = [
  'API',
  'CSV',
  'manual'
] as const satisfies [string, ...string[]] | ReservedSourceType[];

/**
 * SortOrder. Auto-generated enum for SortOrder
 *
 * @remarks
 * This constant provides both object and array forms for the SortOrder enum.
 * The object form allows key-value access, while the array form enables iteration and validation.
 *
 * @example
 * ```typescript
 * // Using the object form for key-value access
 * const status = SORT_ORDER.SUCCESS;
 * 
 * // Using the array form for iteration
 * const allStatuses = SORT_ORDER_VALUES;
 * console.log(`Available statuses: ${allStatuses.join(', ')}`);
 * ```
 *
 * @see {@link SortOrder} - The TypeScript type definition
 */
export const SORT_ORDER = {
  ASC: "asc",
  DESC: "desc",
} as const satisfies Record<string, SortOrder>;

/**
 * Array of all SortOrder enum values
 *
 * @remarks
 * This constant provides a array containing all valid SortOrder enum values.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all values
 * for (const value of SORT_ORDER_VALUES) {
 *   console.log(`Processing: ${value}`);
 * }
 * 
 * // Validation
 * const isValid = SORT_ORDER_VALUES.includes(someValue);
 * ```
 *
 * @see {@link SortOrder} - The TypeScript type definition
 * @see {@link SORT_ORDER} - The object form of this enum
 */
export const SORT_ORDER_VALUES = [
  'asc',
  'desc'
] as const satisfies [string, ...string[]] | SortOrder[];

/**
 * SyncOperationType. Auto-generated enum for SyncOperationType
 *
 * @remarks
 * This constant provides both object and array forms for the SyncOperationType enum.
 * The object form allows key-value access, while the array form enables iteration and validation.
 *
 * @example
 * ```typescript
 * // Using the object form for key-value access
 * const status = SYNC_OPERATION_TYPE.SUCCESS;
 * 
 * // Using the array form for iteration
 * const allStatuses = SYNC_OPERATION_TYPE_VALUES;
 * console.log(`Available statuses: ${allStatuses.join(', ')}`);
 * ```
 *
 * @see {@link SyncOperationType} - The TypeScript type definition
 */
export const SYNC_OPERATION_TYPE = {
  REGISTRATION: "registration",
  RENEWAL: "renewal",
  TRANSFER: "transfer",
} as const satisfies Record<string, SyncOperationType>;

/**
 * Array of all SyncOperationType enum values
 *
 * @remarks
 * This constant provides a array containing all valid SyncOperationType enum values.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all values
 * for (const value of SYNC_OPERATION_TYPE_VALUES) {
 *   console.log(`Processing: ${value}`);
 * }
 * 
 * // Validation
 * const isValid = SYNC_OPERATION_TYPE_VALUES.includes(someValue);
 * ```
 *
 * @see {@link SyncOperationType} - The TypeScript type definition
 * @see {@link SYNC_OPERATION_TYPE} - The object form of this enum
 */
export const SYNC_OPERATION_TYPE_VALUES = [
  'registration',
  'renewal',
  'transfer'
] as const satisfies [string, ...string[]] | SyncOperationType[];

/**
 * TLDType. Auto-generated enum for TLDType
 *
 * @remarks
 * This constant provides both object and array forms for the TLDType enum.
 * The object form allows key-value access, while the array form enables iteration and validation.
 *
 * @example
 * ```typescript
 * // Using the object form for key-value access
 * const status = TLD_TYPE.SUCCESS;
 * 
 * // Using the array form for iteration
 * const allStatuses = TLD_TYPE_VALUES;
 * console.log(`Available statuses: ${allStatuses.join(', ')}`);
 * ```
 *
 * @see {@link TLDType} - The TypeScript type definition
 */
export const TLD_TYPE = {
  G_TLD: "gTLD",
  CC_TLD: "ccTLD",
} as const satisfies Record<string, TLDType>;

/**
 * Array of all TLDType enum values
 *
 * @remarks
 * This constant provides a array containing all valid TLDType enum values.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all values
 * for (const value of TLD_TYPE_VALUES) {
 *   console.log(`Processing: ${value}`);
 * }
 * 
 * // Validation
 * const isValid = TLD_TYPE_VALUES.includes(someValue);
 * ```
 *
 * @see {@link TLDType} - The TypeScript type definition
 * @see {@link TLD_TYPE} - The object form of this enum
 */
export const TLD_TYPE_VALUES = [
  'gTLD',
  'ccTLD'
] as const satisfies [string, ...string[]] | TLDType[];

/**
 * TransferAckType. Auto-generated enum for TransferAckType
 *
 * @remarks
 * This constant provides both object and array forms for the TransferAckType enum.
 * The object form allows key-value access, while the array form enables iteration and validation.
 *
 * @example
 * ```typescript
 * // Using the object form for key-value access
 * const status = TRANSFER_ACK_TYPE.SUCCESS;
 * 
 * // Using the array form for iteration
 * const allStatuses = TRANSFER_ACK_TYPE_VALUES;
 * console.log(`Available statuses: ${allStatuses.join(', ')}`);
 * ```
 *
 * @see {@link TransferAckType} - The TypeScript type definition
 */
export const TRANSFER_ACK_TYPE = {
  NONE: "none",
  REGISTRAR: "registrar",
  REGISTRANT: "registrant",
  BOTH: "both",
} as const satisfies Record<string, TransferAckType>;

/**
 * Array of all TransferAckType enum values
 *
 * @remarks
 * This constant provides a array containing all valid TransferAckType enum values.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all values
 * for (const value of TRANSFER_ACK_TYPE_VALUES) {
 *   console.log(`Processing: ${value}`);
 * }
 * 
 * // Validation
 * const isValid = TRANSFER_ACK_TYPE_VALUES.includes(someValue);
 * ```
 *
 * @see {@link TransferAckType} - The TypeScript type definition
 * @see {@link TRANSFER_ACK_TYPE} - The object form of this enum
 */
export const TRANSFER_ACK_TYPE_VALUES = [
  'none',
  'registrar',
  'registrant',
  'both'
] as const satisfies [string, ...string[]] | TransferAckType[];

/**
 * UserNotificationStatus. Auto-generated enum for UserNotificationStatus
 *
 * @remarks
 * This constant provides both object and array forms for the UserNotificationStatus enum.
 * The object form allows key-value access, while the array form enables iteration and validation.
 *
 * @example
 * ```typescript
 * // Using the object form for key-value access
 * const status = USER_NOTIFICATION_STATUS.SUCCESS;
 * 
 * // Using the array form for iteration
 * const allStatuses = USER_NOTIFICATION_STATUS_VALUES;
 * console.log(`Available statuses: ${allStatuses.join(', ')}`);
 * ```
 *
 * @see {@link UserNotificationStatus} - The TypeScript type definition
 */
export const USER_NOTIFICATION_STATUS = {
  READ: "read",
  UNREAD: "unread",
} as const satisfies Record<string, UserNotificationStatus>;

/**
 * Array of all UserNotificationStatus enum values
 *
 * @remarks
 * This constant provides a array containing all valid UserNotificationStatus enum values.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all values
 * for (const value of USER_NOTIFICATION_STATUS_VALUES) {
 *   console.log(`Processing: ${value}`);
 * }
 * 
 * // Validation
 * const isValid = USER_NOTIFICATION_STATUS_VALUES.includes(someValue);
 * ```
 *
 * @see {@link UserNotificationStatus} - The TypeScript type definition
 * @see {@link USER_NOTIFICATION_STATUS} - The object form of this enum
 */
export const USER_NOTIFICATION_STATUS_VALUES = [
  'read',
  'unread'
] as const satisfies [string, ...string[]] | UserNotificationStatus[];

/**
 * UserStatus. Auto-generated enum for UserStatus
 *
 * @remarks
 * This constant provides both object and array forms for the UserStatus enum.
 * The object form allows key-value access, while the array form enables iteration and validation.
 *
 * @example
 * ```typescript
 * // Using the object form for key-value access
 * const status = USER_STATUS.SUCCESS;
 * 
 * // Using the array form for iteration
 * const allStatuses = USER_STATUS_VALUES;
 * console.log(`Available statuses: ${allStatuses.join(', ')}`);
 * ```
 *
 * @see {@link UserStatus} - The TypeScript type definition
 */
export const USER_STATUS = {
  ACTIVE: "active",
  INACTIVE: "inactive",
} as const satisfies Record<string, UserStatus>;

/**
 * Array of all UserStatus enum values
 *
 * @remarks
 * This constant provides a array containing all valid UserStatus enum values.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all values
 * for (const value of USER_STATUS_VALUES) {
 *   console.log(`Processing: ${value}`);
 * }
 * 
 * // Validation
 * const isValid = USER_STATUS_VALUES.includes(someValue);
 * ```
 *
 * @see {@link UserStatus} - The TypeScript type definition
 * @see {@link USER_STATUS} - The object form of this enum
 */
export const USER_STATUS_VALUES = [
  'active',
  'inactive'
] as const satisfies [string, ...string[]] | UserStatus[];

/**
 * VerificationType. Auto-generated enum for VerificationType
 *
 * @remarks
 * This constant provides both object and array forms for the VerificationType enum.
 * The object form allows key-value access, while the array form enables iteration and validation.
 *
 * @example
 * ```typescript
 * // Using the object form for key-value access
 * const status = VERIFICATION_TYPE.SUCCESS;
 * 
 * // Using the array form for iteration
 * const allStatuses = VERIFICATION_TYPE_VALUES;
 * console.log(`Available statuses: ${allStatuses.join(', ')}`);
 * ```
 *
 * @see {@link VerificationType} - The TypeScript type definition
 */
export const VERIFICATION_TYPE = {
  API: "api",
  EMAIL: "email",
} as const satisfies Record<string, VerificationType>;

/**
 * Array of all VerificationType enum values
 *
 * @remarks
 * This constant provides a array containing all valid VerificationType enum values.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all values
 * for (const value of VERIFICATION_TYPE_VALUES) {
 *   console.log(`Processing: ${value}`);
 * }
 * 
 * // Validation
 * const isValid = VERIFICATION_TYPE_VALUES.includes(someValue);
 * ```
 *
 * @see {@link VerificationType} - The TypeScript type definition
 * @see {@link VERIFICATION_TYPE} - The object form of this enum
 */
export const VERIFICATION_TYPE_VALUES = [
  'api',
  'email'
] as const satisfies [string, ...string[]] | VerificationType[];

/**
 * ZoneSortField. Auto-generated enum for ZoneSortField
 *
 * @remarks
 * This constant provides both object and array forms for the ZoneSortField enum.
 * The object form allows key-value access, while the array form enables iteration and validation.
 *
 * @example
 * ```typescript
 * // Using the object form for key-value access
 * const status = ZONE_SORT_FIELD.SUCCESS;
 * 
 * // Using the array form for iteration
 * const allStatuses = ZONE_SORT_FIELD_VALUES;
 * console.log(`Available statuses: ${allStatuses.join(', ')}`);
 * ```
 *
 * @see {@link ZoneSortField} - The TypeScript type definition
 */
export const ZONE_SORT_FIELD = {
  NAME: "name",
  CREATED_ON: "created_on",
  UPDATED_ON: "updated_on",
  DNSSEC_STATUS: "dnssec_status",
} as const satisfies Record<string, ZoneSortField>;

/**
 * Array of all ZoneSortField enum values
 *
 * @remarks
 * This constant provides a array containing all valid ZoneSortField enum values.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all values
 * for (const value of ZONE_SORT_FIELD_VALUES) {
 *   console.log(`Processing: ${value}`);
 * }
 * 
 * // Validation
 * const isValid = ZONE_SORT_FIELD_VALUES.includes(someValue);
 * ```
 *
 * @see {@link ZoneSortField} - The TypeScript type definition
 * @see {@link ZONE_SORT_FIELD} - The object form of this enum
 */
export const ZONE_SORT_FIELD_VALUES = [
  'name',
  'created_on',
  'updated_on',
  'dnssec_status'
] as const satisfies [string, ...string[]] | ZoneSortField[];

