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
import { BillingMetadata } from './schemas';
import { BillingPlan } from './schemas';
import { BillingTransaction } from './schemas';
import { ContactAttributeDefinition } from './schemas';
import { ContactConfigBase } from './schemas';
import { ContactCreate } from './schemas';
import { ContactHandle } from './schemas';
import { Contact } from './schemas';
import { ContactRoleAttributeRequirement } from './schemas';
import { ContactSchema } from './schemas';
import { ContactVerificationApi } from './schemas';
import { ContactVerificationEmail } from './schemas';
import { ContactVerification } from './schemas';
import { ContactsBase } from './schemas';
import { DeletedEvent } from './schemas';
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
import { DomainForward } from './schemas';
import { DomainForwardCreateRequest } from './schemas';
import { DomainForwardPatchOp } from './schemas';
import { DomainForwardPatchOps } from './schemas';
import { DomainForwardProtocolSetRequest } from './schemas';
import { DomainForwardProtocolSet } from './schemas';
import { DomainForwardSetCreateRequest } from './schemas';
import { DomainForwardSetRequest } from './schemas';
import { DomainForwardSet } from './schemas';
import { DomainForwardZone } from './schemas';
import { DomainHost } from './schemas';
import { DomainLifecycleBase } from './schemas';
import { DomainNameParts } from './schemas';
import { DomainPeriod } from './schemas';
import { DomainRenewRequest } from './schemas';
import { DomainRenew } from './schemas';
import { Domain } from './schemas';
import { DomainRestoreRequest } from './schemas';
import { DomainRestore } from './schemas';
import { DomainSearchMeta } from './schemas';
import { DomainSearch } from './schemas';
import { DomainSearchSuggestionPriceData } from './schemas';
import { DomainSearchSuggestionWithPrice } from './schemas';
import { DomainStatus2 } from './schemas';
import { DomainStatusesBase } from './schemas';
import { DomainSummaryData } from './schemas';
import { DomainSummary } from './schemas';
import { DomainTransferIn } from './schemas';
import { DomainTransitRequest } from './schemas';
import { DomainTransit } from './schemas';
import { DomainUpdate } from './schemas';
import { DomainWithdrawRequest } from './schemas';
import { DomainWithdraw } from './schemas';
import { DomainsExpiringSoon } from './schemas';
import { EmailForwardAlias } from './schemas';
import { EmailForwardAliasCreate } from './schemas';
import { EmailForwardAliasUpdate } from './schemas';
import { EmailForwardCreate } from './schemas';
import { EmailForwardLog } from './schemas';
import { EmailForwardLogEvent } from './schemas';
import { EmailForward } from './schemas';
import { EmailForwardZone } from './schemas';
import { EventResponse } from './schemas';
import { EventSchema } from './schemas';
import { GeneralAvailabilityBase } from './schemas';
import { GetPrices } from './schemas';
import { HTTPValidationError } from './schemas';
import { HostSchema } from './schemas';
import { HttpRedirectList } from './schemas';
import { HttpRedirectRemove } from './schemas';
import { HttpRedirectRequest } from './schemas';
import { HttpRedirectUpsert } from './schemas';
import { IdnBase } from './schemas';
import { Invoice } from './schemas';
import { IpRestrictionCreate } from './schemas';
import { IpRestriction } from './schemas';
import { IpRestrictionUpdate } from './schemas';
import { LaunchPhaseBase } from './schemas';
import { LaunchPhasesBase } from './schemas';
import { LocalPresenceBase } from './schemas';
import { Nameserver } from './schemas';
import { ObjectLog } from './schemas';
import { Organization } from './schemas';
import { OrganizationAttribute } from './schemas';
import { OrganizationAttributeCreate } from './schemas';
import { OrganizationAttribute2 } from './schemas';
import { OrganizationAttributeUpdate } from './schemas';
import { OrganizationCreate } from './schemas';
import { OrganizationToken } from './schemas';
import { OrganizationUpdate } from './schemas';
import { OrganizationWithBillingData } from './schemas';
import { PaginationMetadata } from './schemas';
import { PasswordUpdate } from './schemas';
import { Period } from './schemas';
import { PermissionSet } from './schemas';
import { PremiumDomainsBase } from './schemas';
import { PriceInfo } from './schemas';
import { PricingPeriod } from './schemas';
import { Problem } from './schemas';
import { PublicAuthRequestForm } from './schemas';
import { RdapBase } from './schemas';
import { RegistryLockBase } from './schemas';
import { RelationSet } from './schemas';
import { RenewalEvent } from './schemas';
import { RequestHistory } from './schemas';
import { ReservedDomainsBase } from './schemas';
import { RgpOperations } from './schemas';
import { SldLength } from './schemas';
import { SpiceDbRelationshipUpdate } from './schemas';
import { TldBase } from './schemas';
import { TldResponseShort } from './schemas';
import { TldSpecification } from './schemas';
import { TrademarkClaimsBase } from './schemas';
import { TransferEvent } from './schemas';
import { TransferLockPolicyBase } from './schemas';
import { TransferPoliciesBase } from './schemas';
import { User } from './schemas';
import { UserAttributeBase } from './schemas';
import { UserAttribute } from './schemas';
import { UserCreate } from './schemas';
import { UserPublic } from './schemas';
import { UserPublicWithAttributes } from './schemas';
import { UserToken } from './schemas';
import { UserUpdate } from './schemas';
import { UserWithRelationPermissions } from './schemas';
import { ValidationError } from './schemas';
import { WhoisBase } from './schemas';
import { WildcardHttpRedirectRequest } from './schemas';
import { RequestAuthcode } from './schemas';
import { RequestAuthcode2 } from './schemas';
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
export const KEY_ALLOWED_NUMBER_OF_NAMESERVER_BASE_MAX: keyof AllowedNumberOfNameserverBase = 'max';
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
export const KEY_ALLOWED_NUMBER_OF_NAMESERVER_BASE_MIN: keyof AllowedNumberOfNameserverBase = 'min';

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
 * Billing Model
 *
 * Payment terms for the organization.
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `billing_model` property of BillingMetadata objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = billingmetadata[KEY_BILLING_METADATA_BILLING_MODEL];
 * 
 * // Dynamic property access
 * const propertyName = KEY_BILLING_METADATA_BILLING_MODEL;
 * const value = billingmetadata[propertyName];
 * ```
 *
 * @see {@link BillingMetadata} - The TypeScript type definition
 * @see {@link KEYS_BILLING_METADATA} - Array of all keys for this type
 */
export const KEY_BILLING_METADATA_BILLING_MODEL: keyof BillingMetadata = 'billing_model';
/**
 * Credit Limit
 *
 * Credit limit for the organization.
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `credit_limit` property of BillingMetadata objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = billingmetadata[KEY_BILLING_METADATA_CREDIT_LIMIT];
 * 
 * // Dynamic property access
 * const propertyName = KEY_BILLING_METADATA_CREDIT_LIMIT;
 * const value = billingmetadata[propertyName];
 * ```
 *
 * @see {@link BillingMetadata} - The TypeScript type definition
 * @see {@link KEYS_BILLING_METADATA} - Array of all keys for this type
 */
export const KEY_BILLING_METADATA_CREDIT_LIMIT: keyof BillingMetadata = 'credit_limit';
/**
 * Customer Number
 *
 * Customer account number for the organization.
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `customer_number` property of BillingMetadata objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = billingmetadata[KEY_BILLING_METADATA_CUSTOMER_NUMBER];
 * 
 * // Dynamic property access
 * const propertyName = KEY_BILLING_METADATA_CUSTOMER_NUMBER;
 * const value = billingmetadata[propertyName];
 * ```
 *
 * @see {@link BillingMetadata} - The TypeScript type definition
 * @see {@link KEYS_BILLING_METADATA} - Array of all keys for this type
 */
export const KEY_BILLING_METADATA_CUSTOMER_NUMBER: keyof BillingMetadata = 'customer_number';

/**
 * Array of all BillingMetadata property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for BillingMetadata objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all keys
 * for (const key of KEYS_BILLING_METADATA) {
 *   console.log(`Property: ${key}, Value: ${billingmetadata[key]}`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_BILLING_METADATA.includes(someKey);
 * ```
 *
 * @see {@link BillingMetadata} - The TypeScript type definition
 */
export const KEYS_BILLING_METADATA = [
  KEY_BILLING_METADATA_BILLING_MODEL,
  KEY_BILLING_METADATA_CREDIT_LIMIT,
  KEY_BILLING_METADATA_CUSTOMER_NUMBER,
] as const satisfies (keyof BillingMetadata)[];

/**
 * Amount
 *
 * Price of the billing plan.
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `amount` property of BillingPlan objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = billingplan[KEY_BILLING_PLAN_AMOUNT];
 * 
 * // Dynamic property access
 * const propertyName = KEY_BILLING_PLAN_AMOUNT;
 * const value = billingplan[propertyName];
 * ```
 *
 * @see {@link BillingPlan} - The TypeScript type definition
 * @see {@link KEYS_BILLING_PLAN} - Array of all keys for this type
 */
export const KEY_BILLING_PLAN_AMOUNT: keyof BillingPlan = 'amount';
/**
 * currency property
 *
 * Currency of the billing plan.
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `currency` property of BillingPlan objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = billingplan[KEY_BILLING_PLAN_CURRENCY];
 * 
 * // Dynamic property access
 * const propertyName = KEY_BILLING_PLAN_CURRENCY;
 * const value = billingplan[propertyName];
 * ```
 *
 * @see {@link BillingPlan} - The TypeScript type definition
 * @see {@link KEYS_BILLING_PLAN} - Array of all keys for this type
 */
export const KEY_BILLING_PLAN_CURRENCY: keyof BillingPlan = 'currency';
/**
 * Name
 *
 * Name of the billing plan.
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `name` property of BillingPlan objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = billingplan[KEY_BILLING_PLAN_NAME];
 * 
 * // Dynamic property access
 * const propertyName = KEY_BILLING_PLAN_NAME;
 * const value = billingplan[propertyName];
 * ```
 *
 * @see {@link BillingPlan} - The TypeScript type definition
 * @see {@link KEYS_BILLING_PLAN} - Array of all keys for this type
 */
export const KEY_BILLING_PLAN_NAME: keyof BillingPlan = 'name';
/**
 * Plan Id
 *
 * Billing plan ID for the organization.
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `plan_id` property of BillingPlan objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = billingplan[KEY_BILLING_PLAN_PLAN_ID];
 * 
 * // Dynamic property access
 * const propertyName = KEY_BILLING_PLAN_PLAN_ID;
 * const value = billingplan[propertyName];
 * ```
 *
 * @see {@link BillingPlan} - The TypeScript type definition
 * @see {@link KEYS_BILLING_PLAN} - Array of all keys for this type
 */
export const KEY_BILLING_PLAN_PLAN_ID: keyof BillingPlan = 'plan_id';
/**
 * Plan Level
 *
 * Plan level such as 'basic', 'premium' or 'enterprise'.
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `plan_level` property of BillingPlan objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = billingplan[KEY_BILLING_PLAN_PLAN_LEVEL];
 * 
 * // Dynamic property access
 * const propertyName = KEY_BILLING_PLAN_PLAN_LEVEL;
 * const value = billingplan[propertyName];
 * ```
 *
 * @see {@link BillingPlan} - The TypeScript type definition
 * @see {@link KEYS_BILLING_PLAN} - Array of all keys for this type
 */
export const KEY_BILLING_PLAN_PLAN_LEVEL: keyof BillingPlan = 'plan_level';
/**
 * Type
 *
 * Plan type or billing interval.
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `type` property of BillingPlan objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = billingplan[KEY_BILLING_PLAN_TYPE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_BILLING_PLAN_TYPE;
 * const value = billingplan[propertyName];
 * ```
 *
 * @see {@link BillingPlan} - The TypeScript type definition
 * @see {@link KEYS_BILLING_PLAN} - Array of all keys for this type
 */
export const KEY_BILLING_PLAN_TYPE: keyof BillingPlan = 'type';

/**
 * Array of all BillingPlan property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for BillingPlan objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all keys
 * for (const key of KEYS_BILLING_PLAN) {
 *   console.log(`Property: ${key}, Value: ${billingplan[key]}`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_BILLING_PLAN.includes(someKey);
 * ```
 *
 * @see {@link BillingPlan} - The TypeScript type definition
 */
export const KEYS_BILLING_PLAN = [
  KEY_BILLING_PLAN_AMOUNT,
  KEY_BILLING_PLAN_CURRENCY,
  KEY_BILLING_PLAN_NAME,
  KEY_BILLING_PLAN_PLAN_ID,
  KEY_BILLING_PLAN_PLAN_LEVEL,
  KEY_BILLING_PLAN_TYPE,
] as const satisfies (keyof BillingPlan)[];

/**
 * action property
 *
 * The action performed in the transaction
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `action` property of BillingTransaction objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = billingtransaction[KEY_BILLING_TRANSACTION_ACTION];
 * 
 * // Dynamic property access
 * const propertyName = KEY_BILLING_TRANSACTION_ACTION;
 * const value = billingtransaction[propertyName];
 * ```
 *
 * @see {@link BillingTransaction} - The TypeScript type definition
 * @see {@link KEYS_BILLING_TRANSACTION} - Array of all keys for this type
 */
export const KEY_BILLING_TRANSACTION_ACTION: keyof BillingTransaction = 'action';
/**
 * Amount
 *
 * The amount of the transaction including VAT
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `amount` property of BillingTransaction objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = billingtransaction[KEY_BILLING_TRANSACTION_AMOUNT];
 * 
 * // Dynamic property access
 * const propertyName = KEY_BILLING_TRANSACTION_AMOUNT;
 * const value = billingtransaction[propertyName];
 * ```
 *
 * @see {@link BillingTransaction} - The TypeScript type definition
 * @see {@link KEYS_BILLING_TRANSACTION} - Array of all keys for this type
 */
export const KEY_BILLING_TRANSACTION_AMOUNT: keyof BillingTransaction = 'amount';
/**
 * Billing Transaction Id
 *
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `billing_transaction_id` property of BillingTransaction objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = billingtransaction[KEY_BILLING_TRANSACTION_BILLING_TRANSACTION_ID];
 * 
 * // Dynamic property access
 * const propertyName = KEY_BILLING_TRANSACTION_BILLING_TRANSACTION_ID;
 * const value = billingtransaction[propertyName];
 * ```
 *
 * @see {@link BillingTransaction} - The TypeScript type definition
 * @see {@link KEYS_BILLING_TRANSACTION} - Array of all keys for this type
 */
export const KEY_BILLING_TRANSACTION_BILLING_TRANSACTION_ID: keyof BillingTransaction = 'billing_transaction_id';
/**
 * Completed On
 *
 * The date/time the transaction completed
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `completed_on` property of BillingTransaction objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = billingtransaction[KEY_BILLING_TRANSACTION_COMPLETED_ON];
 * 
 * // Dynamic property access
 * const propertyName = KEY_BILLING_TRANSACTION_COMPLETED_ON;
 * const value = billingtransaction[propertyName];
 * ```
 *
 * @see {@link BillingTransaction} - The TypeScript type definition
 * @see {@link KEYS_BILLING_TRANSACTION} - Array of all keys for this type
 */
export const KEY_BILLING_TRANSACTION_COMPLETED_ON: keyof BillingTransaction = 'completed_on';
/**
 * Created On
 *
 * The date/time the transaction was created
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `created_on` property of BillingTransaction objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = billingtransaction[KEY_BILLING_TRANSACTION_CREATED_ON];
 * 
 * // Dynamic property access
 * const propertyName = KEY_BILLING_TRANSACTION_CREATED_ON;
 * const value = billingtransaction[propertyName];
 * ```
 *
 * @see {@link BillingTransaction} - The TypeScript type definition
 * @see {@link KEYS_BILLING_TRANSACTION} - Array of all keys for this type
 */
export const KEY_BILLING_TRANSACTION_CREATED_ON: keyof BillingTransaction = 'created_on';
/**
 * currency property
 *
 * The currency of the transaction
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `currency` property of BillingTransaction objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = billingtransaction[KEY_BILLING_TRANSACTION_CURRENCY];
 * 
 * // Dynamic property access
 * const propertyName = KEY_BILLING_TRANSACTION_CURRENCY;
 * const value = billingtransaction[propertyName];
 * ```
 *
 * @see {@link BillingTransaction} - The TypeScript type definition
 * @see {@link KEYS_BILLING_TRANSACTION} - Array of all keys for this type
 */
export const KEY_BILLING_TRANSACTION_CURRENCY: keyof BillingTransaction = 'currency';
/**
 * Price
 *
 * The price of the product without sales tax
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `price` property of BillingTransaction objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = billingtransaction[KEY_BILLING_TRANSACTION_PRICE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_BILLING_TRANSACTION_PRICE;
 * const value = billingtransaction[propertyName];
 * ```
 *
 * @see {@link BillingTransaction} - The TypeScript type definition
 * @see {@link KEYS_BILLING_TRANSACTION} - Array of all keys for this type
 */
export const KEY_BILLING_TRANSACTION_PRICE: keyof BillingTransaction = 'price';
/**
 * Product Reference
 *
 * The reference of the product
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `product_reference` property of BillingTransaction objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = billingtransaction[KEY_BILLING_TRANSACTION_PRODUCT_REFERENCE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_BILLING_TRANSACTION_PRODUCT_REFERENCE;
 * const value = billingtransaction[propertyName];
 * ```
 *
 * @see {@link BillingTransaction} - The TypeScript type definition
 * @see {@link KEYS_BILLING_TRANSACTION} - Array of all keys for this type
 */
export const KEY_BILLING_TRANSACTION_PRODUCT_REFERENCE: keyof BillingTransaction = 'product_reference';
/**
 * product_type property
 *
 * The type of product
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `product_type` property of BillingTransaction objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = billingtransaction[KEY_BILLING_TRANSACTION_PRODUCT_TYPE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_BILLING_TRANSACTION_PRODUCT_TYPE;
 * const value = billingtransaction[propertyName];
 * ```
 *
 * @see {@link BillingTransaction} - The TypeScript type definition
 * @see {@link KEYS_BILLING_TRANSACTION} - Array of all keys for this type
 */
export const KEY_BILLING_TRANSACTION_PRODUCT_TYPE: keyof BillingTransaction = 'product_type';
/**
 * status property
 *
 * The status of the transaction
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `status` property of BillingTransaction objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = billingtransaction[KEY_BILLING_TRANSACTION_STATUS];
 * 
 * // Dynamic property access
 * const propertyName = KEY_BILLING_TRANSACTION_STATUS;
 * const value = billingtransaction[propertyName];
 * ```
 *
 * @see {@link BillingTransaction} - The TypeScript type definition
 * @see {@link KEYS_BILLING_TRANSACTION} - Array of all keys for this type
 */
export const KEY_BILLING_TRANSACTION_STATUS: keyof BillingTransaction = 'status';
/**
 * Tax Amount
 *
 * The tax amount of the transaction
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `tax_amount` property of BillingTransaction objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = billingtransaction[KEY_BILLING_TRANSACTION_TAX_AMOUNT];
 * 
 * // Dynamic property access
 * const propertyName = KEY_BILLING_TRANSACTION_TAX_AMOUNT;
 * const value = billingtransaction[propertyName];
 * ```
 *
 * @see {@link BillingTransaction} - The TypeScript type definition
 * @see {@link KEYS_BILLING_TRANSACTION} - Array of all keys for this type
 */
export const KEY_BILLING_TRANSACTION_TAX_AMOUNT: keyof BillingTransaction = 'tax_amount';
/**
 * Tax Rate
 *
 * The tax rate of the transaction
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `tax_rate` property of BillingTransaction objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = billingtransaction[KEY_BILLING_TRANSACTION_TAX_RATE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_BILLING_TRANSACTION_TAX_RATE;
 * const value = billingtransaction[propertyName];
 * ```
 *
 * @see {@link BillingTransaction} - The TypeScript type definition
 * @see {@link KEYS_BILLING_TRANSACTION} - Array of all keys for this type
 */
export const KEY_BILLING_TRANSACTION_TAX_RATE: keyof BillingTransaction = 'tax_rate';
/**
 * Updated On
 *
 * The date/time the transaction was updated
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `updated_on` property of BillingTransaction objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = billingtransaction[KEY_BILLING_TRANSACTION_UPDATED_ON];
 * 
 * // Dynamic property access
 * const propertyName = KEY_BILLING_TRANSACTION_UPDATED_ON;
 * const value = billingtransaction[propertyName];
 * ```
 *
 * @see {@link BillingTransaction} - The TypeScript type definition
 * @see {@link KEYS_BILLING_TRANSACTION} - Array of all keys for this type
 */
export const KEY_BILLING_TRANSACTION_UPDATED_ON: keyof BillingTransaction = 'updated_on';

/**
 * Array of all BillingTransaction property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for BillingTransaction objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all keys
 * for (const key of KEYS_BILLING_TRANSACTION) {
 *   console.log(`Property: ${key}, Value: ${billingtransaction[key]}`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_BILLING_TRANSACTION.includes(someKey);
 * ```
 *
 * @see {@link BillingTransaction} - The TypeScript type definition
 */
export const KEYS_BILLING_TRANSACTION = [
  KEY_BILLING_TRANSACTION_ACTION,
  KEY_BILLING_TRANSACTION_AMOUNT,
  KEY_BILLING_TRANSACTION_BILLING_TRANSACTION_ID,
  KEY_BILLING_TRANSACTION_COMPLETED_ON,
  KEY_BILLING_TRANSACTION_CREATED_ON,
  KEY_BILLING_TRANSACTION_CURRENCY,
  KEY_BILLING_TRANSACTION_PRICE,
  KEY_BILLING_TRANSACTION_PRODUCT_REFERENCE,
  KEY_BILLING_TRANSACTION_PRODUCT_TYPE,
  KEY_BILLING_TRANSACTION_STATUS,
  KEY_BILLING_TRANSACTION_TAX_AMOUNT,
  KEY_BILLING_TRANSACTION_TAX_RATE,
  KEY_BILLING_TRANSACTION_UPDATED_ON,
] as const satisfies (keyof BillingTransaction)[];

/**
 * key property
 *
 * Unique identifier for the attribute
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `key` property of ContactAttributeDefinition objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = contactattributedefinition[KEY_CONTACT_ATTRIBUTE_DEFINITION_KEY];
 * 
 * // Dynamic property access
 * const propertyName = KEY_CONTACT_ATTRIBUTE_DEFINITION_KEY;
 * const value = contactattributedefinition[propertyName];
 * ```
 *
 * @see {@link ContactAttributeDefinition} - The TypeScript type definition
 * @see {@link KEYS_CONTACT_ATTRIBUTE_DEFINITION} - Array of all keys for this type
 */
export const KEY_CONTACT_ATTRIBUTE_DEFINITION_KEY: keyof ContactAttributeDefinition = 'key';
/**
 * type property
 *
 * Type of the attribute (e.g., 'enum', 'string', 'boolean')
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `type` property of ContactAttributeDefinition objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = contactattributedefinition[KEY_CONTACT_ATTRIBUTE_DEFINITION_TYPE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_CONTACT_ATTRIBUTE_DEFINITION_TYPE;
 * const value = contactattributedefinition[propertyName];
 * ```
 *
 * @see {@link ContactAttributeDefinition} - The TypeScript type definition
 * @see {@link KEYS_CONTACT_ATTRIBUTE_DEFINITION} - Array of all keys for this type
 */
export const KEY_CONTACT_ATTRIBUTE_DEFINITION_TYPE: keyof ContactAttributeDefinition = 'type';
/**
 * Values
 *
 * Allowed values for enum types
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `values` property of ContactAttributeDefinition objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = contactattributedefinition[KEY_CONTACT_ATTRIBUTE_DEFINITION_VALUES];
 * 
 * // Dynamic property access
 * const propertyName = KEY_CONTACT_ATTRIBUTE_DEFINITION_VALUES;
 * const value = contactattributedefinition[propertyName];
 * ```
 *
 * @see {@link ContactAttributeDefinition} - The TypeScript type definition
 * @see {@link KEYS_CONTACT_ATTRIBUTE_DEFINITION} - Array of all keys for this type
 */
export const KEY_CONTACT_ATTRIBUTE_DEFINITION_VALUES: keyof ContactAttributeDefinition = 'values';

/**
 * Array of all ContactAttributeDefinition property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for ContactAttributeDefinition objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all keys
 * for (const key of KEYS_CONTACT_ATTRIBUTE_DEFINITION) {
 *   console.log(`Property: ${key}, Value: ${contactattributedefinition[key]}`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_CONTACT_ATTRIBUTE_DEFINITION.includes(someKey);
 * ```
 *
 * @see {@link ContactAttributeDefinition} - The TypeScript type definition
 */
export const KEYS_CONTACT_ATTRIBUTE_DEFINITION = [
  KEY_CONTACT_ATTRIBUTE_DEFINITION_KEY,
  KEY_CONTACT_ATTRIBUTE_DEFINITION_TYPE,
  KEY_CONTACT_ATTRIBUTE_DEFINITION_VALUES,
] as const satisfies (keyof ContactAttributeDefinition)[];

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
export const KEY_CONTACT_CONFIG_BASE_MAX: keyof ContactConfigBase = 'max';
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
export const KEY_CONTACT_CONFIG_BASE_MIN: keyof ContactConfigBase = 'min';
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
export const KEY_CONTACT_CONFIG_BASE_TYPE: keyof ContactConfigBase = 'type';

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
export const KEY_CONTACT_CREATE_CITY: keyof ContactCreate = 'city';
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
export const KEY_CONTACT_CREATE_COUNTRY: keyof ContactCreate = 'country';
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
export const KEY_CONTACT_CREATE_DISCLOSE: keyof ContactCreate = 'disclose';
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
export const KEY_CONTACT_CREATE_EMAIL: keyof ContactCreate = 'email';
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
export const KEY_CONTACT_CREATE_FAX: keyof ContactCreate = 'fax';
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
export const KEY_CONTACT_CREATE_FIRST_NAME: keyof ContactCreate = 'first_name';
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
export const KEY_CONTACT_CREATE_LAST_NAME: keyof ContactCreate = 'last_name';
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
export const KEY_CONTACT_CREATE_ORG: keyof ContactCreate = 'org';
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
export const KEY_CONTACT_CREATE_PHONE: keyof ContactCreate = 'phone';
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
export const KEY_CONTACT_CREATE_POSTAL_CODE: keyof ContactCreate = 'postal_code';
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
export const KEY_CONTACT_CREATE_STATE: keyof ContactCreate = 'state';
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
export const KEY_CONTACT_CREATE_STREET: keyof ContactCreate = 'street';
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
export const KEY_CONTACT_CREATE_TITLE: keyof ContactCreate = 'title';

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
 * Attributes
 *
 * Additional attributes related to the contact
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `attributes` property of ContactHandle objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = contacthandle[KEY_CONTACT_HANDLE_ATTRIBUTES];
 * 
 * // Dynamic property access
 * const propertyName = KEY_CONTACT_HANDLE_ATTRIBUTES;
 * const value = contacthandle[propertyName];
 * ```
 *
 * @see {@link ContactHandle} - The TypeScript type definition
 * @see {@link KEYS_CONTACT_HANDLE} - Array of all keys for this type
 */
export const KEY_CONTACT_HANDLE_ATTRIBUTES: keyof ContactHandle = 'attributes';
/**
 * Contact Id
 *
 * The contact id of the contact
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `contact_id` property of ContactHandle objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = contacthandle[KEY_CONTACT_HANDLE_CONTACT_ID];
 * 
 * // Dynamic property access
 * const propertyName = KEY_CONTACT_HANDLE_CONTACT_ID;
 * const value = contacthandle[propertyName];
 * ```
 *
 * @see {@link ContactHandle} - The TypeScript type definition
 * @see {@link KEYS_CONTACT_HANDLE} - Array of all keys for this type
 */
export const KEY_CONTACT_HANDLE_CONTACT_ID: keyof ContactHandle = 'contact_id';

/**
 * Array of all ContactHandle property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for ContactHandle objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all keys
 * for (const key of KEYS_CONTACT_HANDLE) {
 *   console.log(`Property: ${key}, Value: ${contacthandle[key]}`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_CONTACT_HANDLE.includes(someKey);
 * ```
 *
 * @see {@link ContactHandle} - The TypeScript type definition
 */
export const KEYS_CONTACT_HANDLE = [
  KEY_CONTACT_HANDLE_ATTRIBUTES,
  KEY_CONTACT_HANDLE_CONTACT_ID,
] as const satisfies (keyof ContactHandle)[];

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
export const KEY_CONTACT_CITY: keyof Contact = 'city';
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
export const KEY_CONTACT_COUNTRY: keyof Contact = 'country';
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
export const KEY_CONTACT_DISCLOSE: keyof Contact = 'disclose';
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
export const KEY_CONTACT_EMAIL: keyof Contact = 'email';
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
export const KEY_CONTACT_FAX: keyof Contact = 'fax';
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
export const KEY_CONTACT_FIRST_NAME: keyof Contact = 'first_name';
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
export const KEY_CONTACT_LAST_NAME: keyof Contact = 'last_name';
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
export const KEY_CONTACT_ORG: keyof Contact = 'org';
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
export const KEY_CONTACT_PHONE: keyof Contact = 'phone';
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
export const KEY_CONTACT_POSTAL_CODE: keyof Contact = 'postal_code';
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
export const KEY_CONTACT_STATE: keyof Contact = 'state';
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
export const KEY_CONTACT_STREET: keyof Contact = 'street';
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
export const KEY_CONTACT_TITLE: keyof Contact = 'title';

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
 * Attributes
 *
 * List of required attribute keys for this role
 *
 * @type {array}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `attributes` property of ContactRoleAttributeRequirement objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = contactroleattributerequirement[KEY_CONTACT_ROLE_ATTRIBUTE_REQUIREMENT_ATTRIBUTES];
 * 
 * // Dynamic property access
 * const propertyName = KEY_CONTACT_ROLE_ATTRIBUTE_REQUIREMENT_ATTRIBUTES;
 * const value = contactroleattributerequirement[propertyName];
 * ```
 *
 * @see {@link ContactRoleAttributeRequirement} - The TypeScript type definition
 * @see {@link KEYS_CONTACT_ROLE_ATTRIBUTE_REQUIREMENT} - Array of all keys for this type
 */
export const KEY_CONTACT_ROLE_ATTRIBUTE_REQUIREMENT_ATTRIBUTES: keyof ContactRoleAttributeRequirement = 'attributes';
/**
 * role property
 *
 * The role this requirement applies to
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `role` property of ContactRoleAttributeRequirement objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = contactroleattributerequirement[KEY_CONTACT_ROLE_ATTRIBUTE_REQUIREMENT_ROLE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_CONTACT_ROLE_ATTRIBUTE_REQUIREMENT_ROLE;
 * const value = contactroleattributerequirement[propertyName];
 * ```
 *
 * @see {@link ContactRoleAttributeRequirement} - The TypeScript type definition
 * @see {@link KEYS_CONTACT_ROLE_ATTRIBUTE_REQUIREMENT} - Array of all keys for this type
 */
export const KEY_CONTACT_ROLE_ATTRIBUTE_REQUIREMENT_ROLE: keyof ContactRoleAttributeRequirement = 'role';

/**
 * Array of all ContactRoleAttributeRequirement property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for ContactRoleAttributeRequirement objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all keys
 * for (const key of KEYS_CONTACT_ROLE_ATTRIBUTE_REQUIREMENT) {
 *   console.log(`Property: ${key}, Value: ${contactroleattributerequirement[key]}`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_CONTACT_ROLE_ATTRIBUTE_REQUIREMENT.includes(someKey);
 * ```
 *
 * @see {@link ContactRoleAttributeRequirement} - The TypeScript type definition
 */
export const KEYS_CONTACT_ROLE_ATTRIBUTE_REQUIREMENT = [
  KEY_CONTACT_ROLE_ATTRIBUTE_REQUIREMENT_ATTRIBUTES,
  KEY_CONTACT_ROLE_ATTRIBUTE_REQUIREMENT_ROLE,
] as const satisfies (keyof ContactRoleAttributeRequirement)[];

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
export const KEY_CONTACT_SCHEMA_CITY: keyof ContactSchema = 'city';
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
export const KEY_CONTACT_SCHEMA_CONTACT_ID: keyof ContactSchema = 'contact_id';
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
export const KEY_CONTACT_SCHEMA_COUNTRY: keyof ContactSchema = 'country';
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
export const KEY_CONTACT_SCHEMA_CREATED_ON: keyof ContactSchema = 'created_on';
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
export const KEY_CONTACT_SCHEMA_DELETED_ON: keyof ContactSchema = 'deleted_on';
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
export const KEY_CONTACT_SCHEMA_DISCLOSE: keyof ContactSchema = 'disclose';
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
export const KEY_CONTACT_SCHEMA_EMAIL: keyof ContactSchema = 'email';
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
export const KEY_CONTACT_SCHEMA_FAX: keyof ContactSchema = 'fax';
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
export const KEY_CONTACT_SCHEMA_FIRST_NAME: keyof ContactSchema = 'first_name';
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
export const KEY_CONTACT_SCHEMA_LAST_NAME: keyof ContactSchema = 'last_name';
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
export const KEY_CONTACT_SCHEMA_ORG: keyof ContactSchema = 'org';
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
export const KEY_CONTACT_SCHEMA_ORGANIZATION_ID: keyof ContactSchema = 'organization_id';
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
export const KEY_CONTACT_SCHEMA_PHONE: keyof ContactSchema = 'phone';
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
export const KEY_CONTACT_SCHEMA_POSTAL_CODE: keyof ContactSchema = 'postal_code';
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
export const KEY_CONTACT_SCHEMA_STATE: keyof ContactSchema = 'state';
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
export const KEY_CONTACT_SCHEMA_STREET: keyof ContactSchema = 'street';
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
export const KEY_CONTACT_SCHEMA_TITLE: keyof ContactSchema = 'title';

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
export const KEY_CONTACT_VERIFICATION_API_CANCELED_ON: keyof ContactVerificationApi = 'canceled_on';
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
export const KEY_CONTACT_VERIFICATION_API_CONTACT_ID: keyof ContactVerificationApi = 'contact_id';
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
export const KEY_CONTACT_VERIFICATION_API_CONTACT_VERIFICATION_ID: keyof ContactVerificationApi = 'contact_verification_id';
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
export const KEY_CONTACT_VERIFICATION_API_CREATED_ON: keyof ContactVerificationApi = 'created_on';
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
export const KEY_CONTACT_VERIFICATION_API_STATUS: keyof ContactVerificationApi = 'status';
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
export const KEY_CONTACT_VERIFICATION_API_TOKEN: keyof ContactVerificationApi = 'token';
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
export const KEY_CONTACT_VERIFICATION_API_TYPE: keyof ContactVerificationApi = 'type';
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
export const KEY_CONTACT_VERIFICATION_API_UPDATED_ON: keyof ContactVerificationApi = 'updated_on';
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
export const KEY_CONTACT_VERIFICATION_API_VERIFIED_ON: keyof ContactVerificationApi = 'verified_on';

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
export const KEY_CONTACT_VERIFICATION_EMAIL_CANCELED_ON: keyof ContactVerificationEmail = 'canceled_on';
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
export const KEY_CONTACT_VERIFICATION_EMAIL_CONTACT_ID: keyof ContactVerificationEmail = 'contact_id';
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
export const KEY_CONTACT_VERIFICATION_EMAIL_CONTACT_VERIFICATION_ID: keyof ContactVerificationEmail = 'contact_verification_id';
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
export const KEY_CONTACT_VERIFICATION_EMAIL_CREATED_ON: keyof ContactVerificationEmail = 'created_on';
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
export const KEY_CONTACT_VERIFICATION_EMAIL_STATUS: keyof ContactVerificationEmail = 'status';
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
export const KEY_CONTACT_VERIFICATION_EMAIL_TYPE: keyof ContactVerificationEmail = 'type';
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
export const KEY_CONTACT_VERIFICATION_EMAIL_UPDATED_ON: keyof ContactVerificationEmail = 'updated_on';
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
export const KEY_CONTACT_VERIFICATION_EMAIL_VERIFIED_ON: keyof ContactVerificationEmail = 'verified_on';

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
export const KEY_CONTACT_VERIFICATION_CANCELED_ON: keyof ContactVerification = 'canceled_on';
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
export const KEY_CONTACT_VERIFICATION_CONTACT_ID: keyof ContactVerification = 'contact_id';
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
export const KEY_CONTACT_VERIFICATION_CONTACT_VERIFICATION_ID: keyof ContactVerification = 'contact_verification_id';
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
export const KEY_CONTACT_VERIFICATION_CREATED_ON: keyof ContactVerification = 'created_on';
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
export const KEY_CONTACT_VERIFICATION_STATUS: keyof ContactVerification = 'status';
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
export const KEY_CONTACT_VERIFICATION_TYPE: keyof ContactVerification = 'type';
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
export const KEY_CONTACT_VERIFICATION_UPDATED_ON: keyof ContactVerification = 'updated_on';
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
export const KEY_CONTACT_VERIFICATION_VERIFIED_ON: keyof ContactVerification = 'verified_on';

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
export const KEY_CONTACTS_BASE_AUTHINFO_REQUIRED: keyof ContactsBase = 'authinfo_required';
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
export const KEY_CONTACTS_BASE_IS_THICK: keyof ContactsBase = 'is_thick';
/**
 * Possible Attributes
 *
 * List of possible attributes that can be set for this TLD
 *
 * @type {array}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `possible_attributes` property of ContactsBase objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = contactsbase[KEY_CONTACTS_BASE_POSSIBLE_ATTRIBUTES];
 * 
 * // Dynamic property access
 * const propertyName = KEY_CONTACTS_BASE_POSSIBLE_ATTRIBUTES;
 * const value = contactsbase[propertyName];
 * ```
 *
 * @see {@link ContactsBase} - The TypeScript type definition
 * @see {@link KEYS_CONTACTS_BASE} - Array of all keys for this type
 */
export const KEY_CONTACTS_BASE_POSSIBLE_ATTRIBUTES: keyof ContactsBase = 'possible_attributes';
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
export const KEY_CONTACTS_BASE_PRIVACY_PROXY: keyof ContactsBase = 'privacy_proxy';
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
export const KEY_CONTACTS_BASE_REGISTRANT_CHANGE: keyof ContactsBase = 'registrant_change';
/**
 * Required Attributes
 *
 * List of attribute requirements by role
 *
 * @type {array}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `required_attributes` property of ContactsBase objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = contactsbase[KEY_CONTACTS_BASE_REQUIRED_ATTRIBUTES];
 * 
 * // Dynamic property access
 * const propertyName = KEY_CONTACTS_BASE_REQUIRED_ATTRIBUTES;
 * const value = contactsbase[propertyName];
 * ```
 *
 * @see {@link ContactsBase} - The TypeScript type definition
 * @see {@link KEYS_CONTACTS_BASE} - Array of all keys for this type
 */
export const KEY_CONTACTS_BASE_REQUIRED_ATTRIBUTES: keyof ContactsBase = 'required_attributes';
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
export const KEY_CONTACTS_BASE_SUPPORT_CHECK: keyof ContactsBase = 'support_check';
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
export const KEY_CONTACTS_BASE_SUPPORT_CLIENT_CONTACT_ID: keyof ContactsBase = 'support_client_contact_id';
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
export const KEY_CONTACTS_BASE_SUPPORT_TRANSFER: keyof ContactsBase = 'support_transfer';
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
export const KEY_CONTACTS_BASE_SUPPORTED_POSTAL_TYPES: keyof ContactsBase = 'supported_postal_types';
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
export const KEY_CONTACTS_BASE_SUPPORTED_ROLES: keyof ContactsBase = 'supported_roles';

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
  KEY_CONTACTS_BASE_POSSIBLE_ATTRIBUTES,
  KEY_CONTACTS_BASE_PRIVACY_PROXY,
  KEY_CONTACTS_BASE_REGISTRANT_CHANGE,
  KEY_CONTACTS_BASE_REQUIRED_ATTRIBUTES,
  KEY_CONTACTS_BASE_SUPPORT_CHECK,
  KEY_CONTACTS_BASE_SUPPORT_CLIENT_CONTACT_ID,
  KEY_CONTACTS_BASE_SUPPORT_TRANSFER,
  KEY_CONTACTS_BASE_SUPPORTED_POSTAL_TYPES,
  KEY_CONTACTS_BASE_SUPPORTED_ROLES,
] as const satisfies (keyof ContactsBase)[];

/**
 * date property
 *
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `date` property of DeletedEvent objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = deletedevent[KEY_DELETED_EVENT_DATE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DELETED_EVENT_DATE;
 * const value = deletedevent[propertyName];
 * ```
 *
 * @see {@link DeletedEvent} - The TypeScript type definition
 * @see {@link KEYS_DELETED_EVENT} - Array of all keys for this type
 */
export const KEY_DELETED_EVENT_DATE: keyof DeletedEvent = 'date';

/**
 * Array of all DeletedEvent property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for DeletedEvent objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all keys
 * for (const key of KEYS_DELETED_EVENT) {
 *   console.log(`Property: ${key}, Value: ${deletedevent[key]}`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_DELETED_EVENT.includes(someKey);
 * ```
 *
 * @see {@link DeletedEvent} - The TypeScript type definition
 */
export const KEYS_DELETED_EVENT = [
  KEY_DELETED_EVENT_DATE,
] as const satisfies (keyof DeletedEvent)[];

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
export const KEY_DNS_CHANGE_ACTION: keyof DnsChange = 'action';
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
export const KEY_DNS_CHANGE_RECORD_DATA: keyof DnsChange = 'record_data';
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
export const KEY_DNS_CHANGE_RRSET_NAME: keyof DnsChange = 'rrset_name';
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
export const KEY_DNS_CHANGE_RRSET_TYPE: keyof DnsChange = 'rrset_type';
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
export const KEY_DNS_CHANGE_TTL: keyof DnsChange = 'ttl';

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
export const KEY_DNS_CHANGES_CHANGES: keyof DnsChanges = 'changes';
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
export const KEY_DNS_CHANGES_CHANGESET_ID: keyof DnsChanges = 'changeset_id';
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
export const KEY_DNS_CHANGES_NUM_CHANGES: keyof DnsChanges = 'num_changes';
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
export const KEY_DNS_CHANGES_ZONE_NAME: keyof DnsChanges = 'zone_name';

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
export const KEY_DNS_CONFIGURATION_BASE_ALLOWED_NUMBER_OF_NAMESERVER: keyof DnsConfigurationBase = 'allowed_number_of_nameserver';
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
export const KEY_DNS_CONFIGURATION_BASE_CZDS_AVAILABLE: keyof DnsConfigurationBase = 'czds_available';
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
export const KEY_DNS_CONFIGURATION_BASE_DNSSEC_ALLOWED: keyof DnsConfigurationBase = 'dnssec_allowed';
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
export const KEY_DNS_CONFIGURATION_BASE_DNSSEC_MANDATORY: keyof DnsConfigurationBase = 'dnssec_mandatory';
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
export const KEY_DNS_CONFIGURATION_BASE_DNSSEC_MODE: keyof DnsConfigurationBase = 'dnssec_mode';
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
export const KEY_DNS_CONFIGURATION_BASE_HOST_OBJECTS: keyof DnsConfigurationBase = 'host_objects';
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
export const KEY_DNS_CONFIGURATION_BASE_HOST_PARENT_CHECK_TLDS: keyof DnsConfigurationBase = 'host_parent_check_tlds';
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
export const KEY_DNS_CONFIGURATION_BASE_REGISTRY_NAMESERVER_CHECK: keyof DnsConfigurationBase = 'registry_nameserver_check';
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
export const KEY_DNS_CONFIGURATION_BASE_REGISTRY_ROOT_NAMESERVER_UPDATE: keyof DnsConfigurationBase = 'registry_root_nameserver_update';

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
export const KEY_DNS_RECORD_CREATE_RDATA: keyof DnsRecordCreate = 'rdata';

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
export const KEY_DNS_RECORD_PATCH_OP_OP: keyof DnsRecordPatchOp = 'op';
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
export const KEY_DNS_RECORD_PATCH_OP_RECORD: keyof DnsRecordPatchOp = 'record';

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
export const KEY_DNS_RECORD_RDATA: keyof DnsRecord = 'rdata';

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
export const KEY_DNS_RRSET_CREATE_NAME: keyof DnsRrsetCreate = 'name';
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
export const KEY_DNS_RRSET_CREATE_RECORDS: keyof DnsRrsetCreate = 'records';
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
export const KEY_DNS_RRSET_CREATE_TTL: keyof DnsRrsetCreate = 'ttl';
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
export const KEY_DNS_RRSET_CREATE_TYPE: keyof DnsRrsetCreate = 'type';

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
export const KEY_DNS_RRSET_PATCH_NAME: keyof DnsRrsetPatch = 'name';
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
export const KEY_DNS_RRSET_PATCH_RECORDS: keyof DnsRrsetPatch = 'records';
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
export const KEY_DNS_RRSET_PATCH_TTL: keyof DnsRrsetPatch = 'ttl';
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
export const KEY_DNS_RRSET_PATCH_TYPE: keyof DnsRrsetPatch = 'type';

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
export const KEY_DNS_RRSET_PATCH_OP_OP: keyof DnsRrsetPatchOp = 'op';
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
export const KEY_DNS_RRSET_PATCH_OP_RRSET: keyof DnsRrsetPatchOp = 'rrset';

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
export const KEY_DNS_RRSET_NAME: keyof DnsRrset = 'name';
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
export const KEY_DNS_RRSET_RECORDS: keyof DnsRrset = 'records';
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
export const KEY_DNS_RRSET_TTL: keyof DnsRrset = 'ttl';
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
export const KEY_DNS_RRSET_TYPE: keyof DnsRrset = 'type';

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
export const KEY_DNS_RRSET_WITH_ONE_RECORD_PATCH_NAME: keyof DnsRrsetWithOneRecordPatch = 'name';
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
export const KEY_DNS_RRSET_WITH_ONE_RECORD_PATCH_RDATA: keyof DnsRrsetWithOneRecordPatch = 'rdata';
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
export const KEY_DNS_RRSET_WITH_ONE_RECORD_PATCH_TTL: keyof DnsRrsetWithOneRecordPatch = 'ttl';
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
export const KEY_DNS_RRSET_WITH_ONE_RECORD_PATCH_TYPE: keyof DnsRrsetWithOneRecordPatch = 'type';

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
export const KEY_DNS_ZONE_CREATE_DNSSEC_STATUS: keyof DnsZoneCreate = 'dnssec_status';
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
export const KEY_DNS_ZONE_CREATE_NAME: keyof DnsZoneCreate = 'name';
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
export const KEY_DNS_ZONE_CREATE_RRSETS: keyof DnsZoneCreate = 'rrsets';

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
export const KEY_DNS_ZONE_RECORDS_PATCH_OPS_OPS: keyof DnsZoneRecordsPatchOps = 'ops';

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
 * Created On
 *
 * The date/time the entry was created on
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `created_on` property of DnsZone objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = dnszone[KEY_DNS_ZONE_CREATED_ON];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DNS_ZONE_CREATED_ON;
 * const value = dnszone[propertyName];
 * ```
 *
 * @see {@link DnsZone} - The TypeScript type definition
 * @see {@link KEYS_DNS_ZONE} - Array of all keys for this type
 */
export const KEY_DNS_ZONE_CREATED_ON: keyof DnsZone = 'created_on';
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
export const KEY_DNS_ZONE_DNSSEC_STATUS: keyof DnsZone = 'dnssec_status';
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
export const KEY_DNS_ZONE_DOMAIN_PARTS: keyof DnsZone = 'domain_parts';
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
export const KEY_DNS_ZONE_NAME: keyof DnsZone = 'name';
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
export const KEY_DNS_ZONE_RRSETS: keyof DnsZone = 'rrsets';
/**
 * Updated On
 *
 * The date/time the entry was last updated on
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `updated_on` property of DnsZone objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = dnszone[KEY_DNS_ZONE_UPDATED_ON];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DNS_ZONE_UPDATED_ON;
 * const value = dnszone[propertyName];
 * ```
 *
 * @see {@link DnsZone} - The TypeScript type definition
 * @see {@link KEYS_DNS_ZONE} - Array of all keys for this type
 */
export const KEY_DNS_ZONE_UPDATED_ON: keyof DnsZone = 'updated_on';

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
  KEY_DNS_ZONE_CREATED_ON,
  KEY_DNS_ZONE_DNSSEC_STATUS,
  KEY_DNS_ZONE_DOMAIN_PARTS,
  KEY_DNS_ZONE_NAME,
  KEY_DNS_ZONE_RRSETS,
  KEY_DNS_ZONE_UPDATED_ON,
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
export const KEY_DNS_ZONE_RRSETS_CREATE_RRSETS: keyof DnsZoneRrsetsCreate = 'rrsets';

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
export const KEY_DNS_ZONE_RRSETS_PATCH_OPS_OPS: keyof DnsZoneRrsetsPatchOps = 'ops';

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
export const KEY_DNS_ZONE_SUMMARY_TOTAL_ZONES: keyof DnsZoneSummary = 'total_zones';
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
export const KEY_DNS_ZONE_SUMMARY_ZONES_BY_DNSSEC: keyof DnsZoneSummary = 'zones_by_dnssec';

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
export const KEY_DOMAIN_AVAILABILITY_DOMAIN: keyof DomainAvailability = 'domain';
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
export const KEY_DOMAIN_AVAILABILITY_STATUS: keyof DomainAvailability = 'status';

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
export const KEY_DOMAIN_AVAILABILITY_META_PROCESSING_TIME_MS: keyof DomainAvailabilityMeta = 'processing_time_ms';
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
export const KEY_DOMAIN_AVAILABILITY_META_TOTAL: keyof DomainAvailabilityMeta = 'total';

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
export const KEY_DOMAIN_CHECK_RESULTS: keyof DomainCheck = 'results';

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
export const KEY_DOMAIN_CONTACT_CONTACT_ID: keyof DomainContact = 'contact_id';
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
export const KEY_DOMAIN_CONTACT_CONTACT_TYPE: keyof DomainContact = 'contact_type';

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
export const KEY_DOMAIN_CREATE_AUTH_CODE: keyof DomainCreate = 'auth_code';
/**
 * Contacts
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
export const KEY_DOMAIN_CREATE_CONTACTS: keyof DomainCreate = 'contacts';
/**
 * Create Zone
 *
 * Create a zone for the domain on OpusDNS nameserver infrastructure
 *
 * @type {boolean}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `create_zone` property of DomainCreate objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = domaincreate[KEY_DOMAIN_CREATE_CREATE_ZONE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DOMAIN_CREATE_CREATE_ZONE;
 * const value = domaincreate[propertyName];
 * ```
 *
 * @see {@link DomainCreate} - The TypeScript type definition
 * @see {@link KEYS_DOMAIN_CREATE} - Array of all keys for this type
 */
export const KEY_DOMAIN_CREATE_CREATE_ZONE: keyof DomainCreate = 'create_zone';
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
export const KEY_DOMAIN_CREATE_NAME: keyof DomainCreate = 'name';
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
export const KEY_DOMAIN_CREATE_NAMESERVERS: keyof DomainCreate = 'nameservers';
/**
 * period property
 *
 * The registration period of the domain
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
export const KEY_DOMAIN_CREATE_PERIOD: keyof DomainCreate = 'period';
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
export const KEY_DOMAIN_CREATE_RENEWAL_MODE: keyof DomainCreate = 'renewal_mode';

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
  KEY_DOMAIN_CREATE_CREATE_ZONE,
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
export const KEY_DOMAIN_DNSSEC_DATA_CREATE_ALGORITHM: keyof DomainDnssecDataCreate = 'algorithm';
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
export const KEY_DOMAIN_DNSSEC_DATA_CREATE_DIGEST: keyof DomainDnssecDataCreate = 'digest';
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
export const KEY_DOMAIN_DNSSEC_DATA_CREATE_DIGEST_TYPE: keyof DomainDnssecDataCreate = 'digest_type';
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
export const KEY_DOMAIN_DNSSEC_DATA_CREATE_FLAGS: keyof DomainDnssecDataCreate = 'flags';
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
export const KEY_DOMAIN_DNSSEC_DATA_CREATE_KEY_TAG: keyof DomainDnssecDataCreate = 'key_tag';
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
export const KEY_DOMAIN_DNSSEC_DATA_CREATE_PROTOCOL: keyof DomainDnssecDataCreate = 'protocol';
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
export const KEY_DOMAIN_DNSSEC_DATA_CREATE_PUBLIC_KEY: keyof DomainDnssecDataCreate = 'public_key';
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
export const KEY_DOMAIN_DNSSEC_DATA_CREATE_RECORD_TYPE: keyof DomainDnssecDataCreate = 'record_type';

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
export const KEY_DOMAIN_DNSSEC_DATA_ALGORITHM: keyof DomainDnssecData = 'algorithm';
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
export const KEY_DOMAIN_DNSSEC_DATA_CREATED_ON: keyof DomainDnssecData = 'created_on';
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
export const KEY_DOMAIN_DNSSEC_DATA_DIGEST: keyof DomainDnssecData = 'digest';
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
export const KEY_DOMAIN_DNSSEC_DATA_DIGEST_TYPE: keyof DomainDnssecData = 'digest_type';
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
export const KEY_DOMAIN_DNSSEC_DATA_DOMAIN_DNSSEC_DATA_ID: keyof DomainDnssecData = 'domain_dnssec_data_id';
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
export const KEY_DOMAIN_DNSSEC_DATA_DOMAIN_ID: keyof DomainDnssecData = 'domain_id';
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
export const KEY_DOMAIN_DNSSEC_DATA_FLAGS: keyof DomainDnssecData = 'flags';
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
export const KEY_DOMAIN_DNSSEC_DATA_KEY_TAG: keyof DomainDnssecData = 'key_tag';
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
export const KEY_DOMAIN_DNSSEC_DATA_PROTOCOL: keyof DomainDnssecData = 'protocol';
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
export const KEY_DOMAIN_DNSSEC_DATA_PUBLIC_KEY: keyof DomainDnssecData = 'public_key';
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
export const KEY_DOMAIN_DNSSEC_DATA_RECORD_TYPE: keyof DomainDnssecData = 'record_type';
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
export const KEY_DOMAIN_DNSSEC_DATA_UPDATED_ON: keyof DomainDnssecData = 'updated_on';

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
 * Created On
 *
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `created_on` property of DomainForward objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = domainforward[KEY_DOMAIN_FORWARD_CREATED_ON];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DOMAIN_FORWARD_CREATED_ON;
 * const value = domainforward[propertyName];
 * ```
 *
 * @see {@link DomainForward} - The TypeScript type definition
 * @see {@link KEYS_DOMAIN_FORWARD} - Array of all keys for this type
 */
export const KEY_DOMAIN_FORWARD_CREATED_ON: keyof DomainForward = 'created_on';
/**
 * Enabled
 *
 *
 * @type {boolean}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `enabled` property of DomainForward objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = domainforward[KEY_DOMAIN_FORWARD_ENABLED];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DOMAIN_FORWARD_ENABLED;
 * const value = domainforward[propertyName];
 * ```
 *
 * @see {@link DomainForward} - The TypeScript type definition
 * @see {@link KEYS_DOMAIN_FORWARD} - Array of all keys for this type
 */
export const KEY_DOMAIN_FORWARD_ENABLED: keyof DomainForward = 'enabled';
/**
 * Hostname
 *
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `hostname` property of DomainForward objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = domainforward[KEY_DOMAIN_FORWARD_HOSTNAME];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DOMAIN_FORWARD_HOSTNAME;
 * const value = domainforward[propertyName];
 * ```
 *
 * @see {@link DomainForward} - The TypeScript type definition
 * @see {@link KEYS_DOMAIN_FORWARD} - Array of all keys for this type
 */
export const KEY_DOMAIN_FORWARD_HOSTNAME: keyof DomainForward = 'hostname';
/**
 * http property
 *
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `http` property of DomainForward objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = domainforward[KEY_DOMAIN_FORWARD_HTTP];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DOMAIN_FORWARD_HTTP;
 * const value = domainforward[propertyName];
 * ```
 *
 * @see {@link DomainForward} - The TypeScript type definition
 * @see {@link KEYS_DOMAIN_FORWARD} - Array of all keys for this type
 */
export const KEY_DOMAIN_FORWARD_HTTP: keyof DomainForward = 'http';
/**
 * https property
 *
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `https` property of DomainForward objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = domainforward[KEY_DOMAIN_FORWARD_HTTPS];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DOMAIN_FORWARD_HTTPS;
 * const value = domainforward[propertyName];
 * ```
 *
 * @see {@link DomainForward} - The TypeScript type definition
 * @see {@link KEYS_DOMAIN_FORWARD} - Array of all keys for this type
 */
export const KEY_DOMAIN_FORWARD_HTTPS: keyof DomainForward = 'https';
/**
 * Updated On
 *
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `updated_on` property of DomainForward objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = domainforward[KEY_DOMAIN_FORWARD_UPDATED_ON];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DOMAIN_FORWARD_UPDATED_ON;
 * const value = domainforward[propertyName];
 * ```
 *
 * @see {@link DomainForward} - The TypeScript type definition
 * @see {@link KEYS_DOMAIN_FORWARD} - Array of all keys for this type
 */
export const KEY_DOMAIN_FORWARD_UPDATED_ON: keyof DomainForward = 'updated_on';

/**
 * Array of all DomainForward property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for DomainForward objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all keys
 * for (const key of KEYS_DOMAIN_FORWARD) {
 *   console.log(`Property: ${key}, Value: ${domainforward[key]}`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_DOMAIN_FORWARD.includes(someKey);
 * ```
 *
 * @see {@link DomainForward} - The TypeScript type definition
 */
export const KEYS_DOMAIN_FORWARD = [
  KEY_DOMAIN_FORWARD_CREATED_ON,
  KEY_DOMAIN_FORWARD_ENABLED,
  KEY_DOMAIN_FORWARD_HOSTNAME,
  KEY_DOMAIN_FORWARD_HTTP,
  KEY_DOMAIN_FORWARD_HTTPS,
  KEY_DOMAIN_FORWARD_UPDATED_ON,
] as const satisfies (keyof DomainForward)[];

/**
 * Enabled
 *
 *
 * @type {boolean}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `enabled` property of DomainForwardCreateRequest objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = domainforwardcreaterequest[KEY_DOMAIN_FORWARD_CREATE_REQUEST_ENABLED];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DOMAIN_FORWARD_CREATE_REQUEST_ENABLED;
 * const value = domainforwardcreaterequest[propertyName];
 * ```
 *
 * @see {@link DomainForwardCreateRequest} - The TypeScript type definition
 * @see {@link KEYS_DOMAIN_FORWARD_CREATE_REQUEST} - Array of all keys for this type
 */
export const KEY_DOMAIN_FORWARD_CREATE_REQUEST_ENABLED: keyof DomainForwardCreateRequest = 'enabled';
/**
 * Hostname
 *
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `hostname` property of DomainForwardCreateRequest objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = domainforwardcreaterequest[KEY_DOMAIN_FORWARD_CREATE_REQUEST_HOSTNAME];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DOMAIN_FORWARD_CREATE_REQUEST_HOSTNAME;
 * const value = domainforwardcreaterequest[propertyName];
 * ```
 *
 * @see {@link DomainForwardCreateRequest} - The TypeScript type definition
 * @see {@link KEYS_DOMAIN_FORWARD_CREATE_REQUEST} - Array of all keys for this type
 */
export const KEY_DOMAIN_FORWARD_CREATE_REQUEST_HOSTNAME: keyof DomainForwardCreateRequest = 'hostname';
/**
 * http property
 *
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `http` property of DomainForwardCreateRequest objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = domainforwardcreaterequest[KEY_DOMAIN_FORWARD_CREATE_REQUEST_HTTP];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DOMAIN_FORWARD_CREATE_REQUEST_HTTP;
 * const value = domainforwardcreaterequest[propertyName];
 * ```
 *
 * @see {@link DomainForwardCreateRequest} - The TypeScript type definition
 * @see {@link KEYS_DOMAIN_FORWARD_CREATE_REQUEST} - Array of all keys for this type
 */
export const KEY_DOMAIN_FORWARD_CREATE_REQUEST_HTTP: keyof DomainForwardCreateRequest = 'http';
/**
 * https property
 *
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `https` property of DomainForwardCreateRequest objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = domainforwardcreaterequest[KEY_DOMAIN_FORWARD_CREATE_REQUEST_HTTPS];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DOMAIN_FORWARD_CREATE_REQUEST_HTTPS;
 * const value = domainforwardcreaterequest[propertyName];
 * ```
 *
 * @see {@link DomainForwardCreateRequest} - The TypeScript type definition
 * @see {@link KEYS_DOMAIN_FORWARD_CREATE_REQUEST} - Array of all keys for this type
 */
export const KEY_DOMAIN_FORWARD_CREATE_REQUEST_HTTPS: keyof DomainForwardCreateRequest = 'https';

/**
 * Array of all DomainForwardCreateRequest property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for DomainForwardCreateRequest objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all keys
 * for (const key of KEYS_DOMAIN_FORWARD_CREATE_REQUEST) {
 *   console.log(`Property: ${key}, Value: ${domainforwardcreaterequest[key]}`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_DOMAIN_FORWARD_CREATE_REQUEST.includes(someKey);
 * ```
 *
 * @see {@link DomainForwardCreateRequest} - The TypeScript type definition
 */
export const KEYS_DOMAIN_FORWARD_CREATE_REQUEST = [
  KEY_DOMAIN_FORWARD_CREATE_REQUEST_ENABLED,
  KEY_DOMAIN_FORWARD_CREATE_REQUEST_HOSTNAME,
  KEY_DOMAIN_FORWARD_CREATE_REQUEST_HTTP,
  KEY_DOMAIN_FORWARD_CREATE_REQUEST_HTTPS,
] as const satisfies (keyof DomainForwardCreateRequest)[];

/**
 * op property
 *
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `op` property of DomainForwardPatchOp objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = domainforwardpatchop[KEY_DOMAIN_FORWARD_PATCH_OP_OP];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DOMAIN_FORWARD_PATCH_OP_OP;
 * const value = domainforwardpatchop[propertyName];
 * ```
 *
 * @see {@link DomainForwardPatchOp} - The TypeScript type definition
 * @see {@link KEYS_DOMAIN_FORWARD_PATCH_OP} - Array of all keys for this type
 */
export const KEY_DOMAIN_FORWARD_PATCH_OP_OP: keyof DomainForwardPatchOp = 'op';
/**
 * Redirect
 *
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `redirect` property of DomainForwardPatchOp objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = domainforwardpatchop[KEY_DOMAIN_FORWARD_PATCH_OP_REDIRECT];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DOMAIN_FORWARD_PATCH_OP_REDIRECT;
 * const value = domainforwardpatchop[propertyName];
 * ```
 *
 * @see {@link DomainForwardPatchOp} - The TypeScript type definition
 * @see {@link KEYS_DOMAIN_FORWARD_PATCH_OP} - Array of all keys for this type
 */
export const KEY_DOMAIN_FORWARD_PATCH_OP_REDIRECT: keyof DomainForwardPatchOp = 'redirect';

/**
 * Array of all DomainForwardPatchOp property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for DomainForwardPatchOp objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all keys
 * for (const key of KEYS_DOMAIN_FORWARD_PATCH_OP) {
 *   console.log(`Property: ${key}, Value: ${domainforwardpatchop[key]}`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_DOMAIN_FORWARD_PATCH_OP.includes(someKey);
 * ```
 *
 * @see {@link DomainForwardPatchOp} - The TypeScript type definition
 */
export const KEYS_DOMAIN_FORWARD_PATCH_OP = [
  KEY_DOMAIN_FORWARD_PATCH_OP_OP,
  KEY_DOMAIN_FORWARD_PATCH_OP_REDIRECT,
] as const satisfies (keyof DomainForwardPatchOp)[];

/**
 * Ops
 *
 *
 * @type {array}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `ops` property of DomainForwardPatchOps objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = domainforwardpatchops[KEY_DOMAIN_FORWARD_PATCH_OPS_OPS];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DOMAIN_FORWARD_PATCH_OPS_OPS;
 * const value = domainforwardpatchops[propertyName];
 * ```
 *
 * @see {@link DomainForwardPatchOps} - The TypeScript type definition
 * @see {@link KEYS_DOMAIN_FORWARD_PATCH_OPS} - Array of all keys for this type
 */
export const KEY_DOMAIN_FORWARD_PATCH_OPS_OPS: keyof DomainForwardPatchOps = 'ops';

/**
 * Array of all DomainForwardPatchOps property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for DomainForwardPatchOps objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all keys
 * for (const key of KEYS_DOMAIN_FORWARD_PATCH_OPS) {
 *   console.log(`Property: ${key}, Value: ${domainforwardpatchops[key]}`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_DOMAIN_FORWARD_PATCH_OPS.includes(someKey);
 * ```
 *
 * @see {@link DomainForwardPatchOps} - The TypeScript type definition
 */
export const KEYS_DOMAIN_FORWARD_PATCH_OPS = [
  KEY_DOMAIN_FORWARD_PATCH_OPS_OPS,
] as const satisfies (keyof DomainForwardPatchOps)[];

/**
 * Redirects
 *
 *
 * @type {array}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `redirects` property of DomainForwardProtocolSetRequest objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = domainforwardprotocolsetrequest[KEY_DOMAIN_FORWARD_PROTOCOL_SET_REQUEST_REDIRECTS];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DOMAIN_FORWARD_PROTOCOL_SET_REQUEST_REDIRECTS;
 * const value = domainforwardprotocolsetrequest[propertyName];
 * ```
 *
 * @see {@link DomainForwardProtocolSetRequest} - The TypeScript type definition
 * @see {@link KEYS_DOMAIN_FORWARD_PROTOCOL_SET_REQUEST} - Array of all keys for this type
 */
export const KEY_DOMAIN_FORWARD_PROTOCOL_SET_REQUEST_REDIRECTS: keyof DomainForwardProtocolSetRequest = 'redirects';

/**
 * Array of all DomainForwardProtocolSetRequest property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for DomainForwardProtocolSetRequest objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all keys
 * for (const key of KEYS_DOMAIN_FORWARD_PROTOCOL_SET_REQUEST) {
 *   console.log(`Property: ${key}, Value: ${domainforwardprotocolsetrequest[key]}`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_DOMAIN_FORWARD_PROTOCOL_SET_REQUEST.includes(someKey);
 * ```
 *
 * @see {@link DomainForwardProtocolSetRequest} - The TypeScript type definition
 */
export const KEYS_DOMAIN_FORWARD_PROTOCOL_SET_REQUEST = [
  KEY_DOMAIN_FORWARD_PROTOCOL_SET_REQUEST_REDIRECTS,
] as const satisfies (keyof DomainForwardProtocolSetRequest)[];

/**
 * Created On
 *
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `created_on` property of DomainForwardProtocolSet objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = domainforwardprotocolset[KEY_DOMAIN_FORWARD_PROTOCOL_SET_CREATED_ON];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DOMAIN_FORWARD_PROTOCOL_SET_CREATED_ON;
 * const value = domainforwardprotocolset[propertyName];
 * ```
 *
 * @see {@link DomainForwardProtocolSet} - The TypeScript type definition
 * @see {@link KEYS_DOMAIN_FORWARD_PROTOCOL_SET} - Array of all keys for this type
 */
export const KEY_DOMAIN_FORWARD_PROTOCOL_SET_CREATED_ON: keyof DomainForwardProtocolSet = 'created_on';
/**
 * Redirects
 *
 *
 * @type {array}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `redirects` property of DomainForwardProtocolSet objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = domainforwardprotocolset[KEY_DOMAIN_FORWARD_PROTOCOL_SET_REDIRECTS];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DOMAIN_FORWARD_PROTOCOL_SET_REDIRECTS;
 * const value = domainforwardprotocolset[propertyName];
 * ```
 *
 * @see {@link DomainForwardProtocolSet} - The TypeScript type definition
 * @see {@link KEYS_DOMAIN_FORWARD_PROTOCOL_SET} - Array of all keys for this type
 */
export const KEY_DOMAIN_FORWARD_PROTOCOL_SET_REDIRECTS: keyof DomainForwardProtocolSet = 'redirects';
/**
 * Updated On
 *
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `updated_on` property of DomainForwardProtocolSet objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = domainforwardprotocolset[KEY_DOMAIN_FORWARD_PROTOCOL_SET_UPDATED_ON];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DOMAIN_FORWARD_PROTOCOL_SET_UPDATED_ON;
 * const value = domainforwardprotocolset[propertyName];
 * ```
 *
 * @see {@link DomainForwardProtocolSet} - The TypeScript type definition
 * @see {@link KEYS_DOMAIN_FORWARD_PROTOCOL_SET} - Array of all keys for this type
 */
export const KEY_DOMAIN_FORWARD_PROTOCOL_SET_UPDATED_ON: keyof DomainForwardProtocolSet = 'updated_on';

/**
 * Array of all DomainForwardProtocolSet property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for DomainForwardProtocolSet objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all keys
 * for (const key of KEYS_DOMAIN_FORWARD_PROTOCOL_SET) {
 *   console.log(`Property: ${key}, Value: ${domainforwardprotocolset[key]}`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_DOMAIN_FORWARD_PROTOCOL_SET.includes(someKey);
 * ```
 *
 * @see {@link DomainForwardProtocolSet} - The TypeScript type definition
 */
export const KEYS_DOMAIN_FORWARD_PROTOCOL_SET = [
  KEY_DOMAIN_FORWARD_PROTOCOL_SET_CREATED_ON,
  KEY_DOMAIN_FORWARD_PROTOCOL_SET_REDIRECTS,
  KEY_DOMAIN_FORWARD_PROTOCOL_SET_UPDATED_ON,
] as const satisfies (keyof DomainForwardProtocolSet)[];

/**
 * protocol property
 *
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `protocol` property of DomainForwardSetCreateRequest objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = domainforwardsetcreaterequest[KEY_DOMAIN_FORWARD_SET_CREATE_REQUEST_PROTOCOL];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DOMAIN_FORWARD_SET_CREATE_REQUEST_PROTOCOL;
 * const value = domainforwardsetcreaterequest[propertyName];
 * ```
 *
 * @see {@link DomainForwardSetCreateRequest} - The TypeScript type definition
 * @see {@link KEYS_DOMAIN_FORWARD_SET_CREATE_REQUEST} - Array of all keys for this type
 */
export const KEY_DOMAIN_FORWARD_SET_CREATE_REQUEST_PROTOCOL: keyof DomainForwardSetCreateRequest = 'protocol';
/**
 * Redirects
 *
 *
 * @type {array}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `redirects` property of DomainForwardSetCreateRequest objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = domainforwardsetcreaterequest[KEY_DOMAIN_FORWARD_SET_CREATE_REQUEST_REDIRECTS];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DOMAIN_FORWARD_SET_CREATE_REQUEST_REDIRECTS;
 * const value = domainforwardsetcreaterequest[propertyName];
 * ```
 *
 * @see {@link DomainForwardSetCreateRequest} - The TypeScript type definition
 * @see {@link KEYS_DOMAIN_FORWARD_SET_CREATE_REQUEST} - Array of all keys for this type
 */
export const KEY_DOMAIN_FORWARD_SET_CREATE_REQUEST_REDIRECTS: keyof DomainForwardSetCreateRequest = 'redirects';

/**
 * Array of all DomainForwardSetCreateRequest property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for DomainForwardSetCreateRequest objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all keys
 * for (const key of KEYS_DOMAIN_FORWARD_SET_CREATE_REQUEST) {
 *   console.log(`Property: ${key}, Value: ${domainforwardsetcreaterequest[key]}`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_DOMAIN_FORWARD_SET_CREATE_REQUEST.includes(someKey);
 * ```
 *
 * @see {@link DomainForwardSetCreateRequest} - The TypeScript type definition
 */
export const KEYS_DOMAIN_FORWARD_SET_CREATE_REQUEST = [
  KEY_DOMAIN_FORWARD_SET_CREATE_REQUEST_PROTOCOL,
  KEY_DOMAIN_FORWARD_SET_CREATE_REQUEST_REDIRECTS,
] as const satisfies (keyof DomainForwardSetCreateRequest)[];

/**
 * Redirects
 *
 *
 * @type {array}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `redirects` property of DomainForwardSetRequest objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = domainforwardsetrequest[KEY_DOMAIN_FORWARD_SET_REQUEST_REDIRECTS];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DOMAIN_FORWARD_SET_REQUEST_REDIRECTS;
 * const value = domainforwardsetrequest[propertyName];
 * ```
 *
 * @see {@link DomainForwardSetRequest} - The TypeScript type definition
 * @see {@link KEYS_DOMAIN_FORWARD_SET_REQUEST} - Array of all keys for this type
 */
export const KEY_DOMAIN_FORWARD_SET_REQUEST_REDIRECTS: keyof DomainForwardSetRequest = 'redirects';

/**
 * Array of all DomainForwardSetRequest property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for DomainForwardSetRequest objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all keys
 * for (const key of KEYS_DOMAIN_FORWARD_SET_REQUEST) {
 *   console.log(`Property: ${key}, Value: ${domainforwardsetrequest[key]}`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_DOMAIN_FORWARD_SET_REQUEST.includes(someKey);
 * ```
 *
 * @see {@link DomainForwardSetRequest} - The TypeScript type definition
 */
export const KEYS_DOMAIN_FORWARD_SET_REQUEST = [
  KEY_DOMAIN_FORWARD_SET_REQUEST_REDIRECTS,
] as const satisfies (keyof DomainForwardSetRequest)[];

/**
 * Created On
 *
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `created_on` property of DomainForwardSet objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = domainforwardset[KEY_DOMAIN_FORWARD_SET_CREATED_ON];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DOMAIN_FORWARD_SET_CREATED_ON;
 * const value = domainforwardset[propertyName];
 * ```
 *
 * @see {@link DomainForwardSet} - The TypeScript type definition
 * @see {@link KEYS_DOMAIN_FORWARD_SET} - Array of all keys for this type
 */
export const KEY_DOMAIN_FORWARD_SET_CREATED_ON: keyof DomainForwardSet = 'created_on';
/**
 * Hostname
 *
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `hostname` property of DomainForwardSet objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = domainforwardset[KEY_DOMAIN_FORWARD_SET_HOSTNAME];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DOMAIN_FORWARD_SET_HOSTNAME;
 * const value = domainforwardset[propertyName];
 * ```
 *
 * @see {@link DomainForwardSet} - The TypeScript type definition
 * @see {@link KEYS_DOMAIN_FORWARD_SET} - Array of all keys for this type
 */
export const KEY_DOMAIN_FORWARD_SET_HOSTNAME: keyof DomainForwardSet = 'hostname';
/**
 * protocol property
 *
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `protocol` property of DomainForwardSet objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = domainforwardset[KEY_DOMAIN_FORWARD_SET_PROTOCOL];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DOMAIN_FORWARD_SET_PROTOCOL;
 * const value = domainforwardset[propertyName];
 * ```
 *
 * @see {@link DomainForwardSet} - The TypeScript type definition
 * @see {@link KEYS_DOMAIN_FORWARD_SET} - Array of all keys for this type
 */
export const KEY_DOMAIN_FORWARD_SET_PROTOCOL: keyof DomainForwardSet = 'protocol';
/**
 * Redirects
 *
 *
 * @type {array}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `redirects` property of DomainForwardSet objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = domainforwardset[KEY_DOMAIN_FORWARD_SET_REDIRECTS];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DOMAIN_FORWARD_SET_REDIRECTS;
 * const value = domainforwardset[propertyName];
 * ```
 *
 * @see {@link DomainForwardSet} - The TypeScript type definition
 * @see {@link KEYS_DOMAIN_FORWARD_SET} - Array of all keys for this type
 */
export const KEY_DOMAIN_FORWARD_SET_REDIRECTS: keyof DomainForwardSet = 'redirects';
/**
 * Updated On
 *
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `updated_on` property of DomainForwardSet objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = domainforwardset[KEY_DOMAIN_FORWARD_SET_UPDATED_ON];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DOMAIN_FORWARD_SET_UPDATED_ON;
 * const value = domainforwardset[propertyName];
 * ```
 *
 * @see {@link DomainForwardSet} - The TypeScript type definition
 * @see {@link KEYS_DOMAIN_FORWARD_SET} - Array of all keys for this type
 */
export const KEY_DOMAIN_FORWARD_SET_UPDATED_ON: keyof DomainForwardSet = 'updated_on';

/**
 * Array of all DomainForwardSet property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for DomainForwardSet objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all keys
 * for (const key of KEYS_DOMAIN_FORWARD_SET) {
 *   console.log(`Property: ${key}, Value: ${domainforwardset[key]}`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_DOMAIN_FORWARD_SET.includes(someKey);
 * ```
 *
 * @see {@link DomainForwardSet} - The TypeScript type definition
 */
export const KEYS_DOMAIN_FORWARD_SET = [
  KEY_DOMAIN_FORWARD_SET_CREATED_ON,
  KEY_DOMAIN_FORWARD_SET_HOSTNAME,
  KEY_DOMAIN_FORWARD_SET_PROTOCOL,
  KEY_DOMAIN_FORWARD_SET_REDIRECTS,
  KEY_DOMAIN_FORWARD_SET_UPDATED_ON,
] as const satisfies (keyof DomainForwardSet)[];

/**
 * Domain Forwards
 *
 *
 * @type {array}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `domain_forwards` property of DomainForwardZone objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = domainforwardzone[KEY_DOMAIN_FORWARD_ZONE_DOMAIN_FORWARDS];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DOMAIN_FORWARD_ZONE_DOMAIN_FORWARDS;
 * const value = domainforwardzone[propertyName];
 * ```
 *
 * @see {@link DomainForwardZone} - The TypeScript type definition
 * @see {@link KEYS_DOMAIN_FORWARD_ZONE} - Array of all keys for this type
 */
export const KEY_DOMAIN_FORWARD_ZONE_DOMAIN_FORWARDS: keyof DomainForwardZone = 'domain_forwards';
/**
 * Zone Id
 *
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `zone_id` property of DomainForwardZone objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = domainforwardzone[KEY_DOMAIN_FORWARD_ZONE_ZONE_ID];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DOMAIN_FORWARD_ZONE_ZONE_ID;
 * const value = domainforwardzone[propertyName];
 * ```
 *
 * @see {@link DomainForwardZone} - The TypeScript type definition
 * @see {@link KEYS_DOMAIN_FORWARD_ZONE} - Array of all keys for this type
 */
export const KEY_DOMAIN_FORWARD_ZONE_ZONE_ID: keyof DomainForwardZone = 'zone_id';
/**
 * Zone Name
 *
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `zone_name` property of DomainForwardZone objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = domainforwardzone[KEY_DOMAIN_FORWARD_ZONE_ZONE_NAME];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DOMAIN_FORWARD_ZONE_ZONE_NAME;
 * const value = domainforwardzone[propertyName];
 * ```
 *
 * @see {@link DomainForwardZone} - The TypeScript type definition
 * @see {@link KEYS_DOMAIN_FORWARD_ZONE} - Array of all keys for this type
 */
export const KEY_DOMAIN_FORWARD_ZONE_ZONE_NAME: keyof DomainForwardZone = 'zone_name';

/**
 * Array of all DomainForwardZone property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for DomainForwardZone objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all keys
 * for (const key of KEYS_DOMAIN_FORWARD_ZONE) {
 *   console.log(`Property: ${key}, Value: ${domainforwardzone[key]}`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_DOMAIN_FORWARD_ZONE.includes(someKey);
 * ```
 *
 * @see {@link DomainForwardZone} - The TypeScript type definition
 */
export const KEYS_DOMAIN_FORWARD_ZONE = [
  KEY_DOMAIN_FORWARD_ZONE_DOMAIN_FORWARDS,
  KEY_DOMAIN_FORWARD_ZONE_ZONE_ID,
  KEY_DOMAIN_FORWARD_ZONE_ZONE_NAME,
] as const satisfies (keyof DomainForwardZone)[];

/**
 * Host Id
 *
 * The host id of the host
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `host_id` property of DomainHost objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = domainhost[KEY_DOMAIN_HOST_HOST_ID];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DOMAIN_HOST_HOST_ID;
 * const value = domainhost[propertyName];
 * ```
 *
 * @see {@link DomainHost} - The TypeScript type definition
 * @see {@link KEYS_DOMAIN_HOST} - Array of all keys for this type
 */
export const KEY_DOMAIN_HOST_HOST_ID: keyof DomainHost = 'host_id';

/**
 * Array of all DomainHost property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for DomainHost objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all keys
 * for (const key of KEYS_DOMAIN_HOST) {
 *   console.log(`Property: ${key}, Value: ${domainhost[key]}`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_DOMAIN_HOST.includes(someKey);
 * ```
 *
 * @see {@link DomainHost} - The TypeScript type definition
 */
export const KEYS_DOMAIN_HOST = [
  KEY_DOMAIN_HOST_HOST_ID,
] as const satisfies (keyof DomainHost)[];

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
export const KEY_DOMAIN_LIFECYCLE_BASE_ADD_GRACE_PERIOD: keyof DomainLifecycleBase = 'add_grace_period';
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
export const KEY_DOMAIN_LIFECYCLE_BASE_AUTO_RENEW_BEFORE_EXPIRATION: keyof DomainLifecycleBase = 'auto_renew_before_expiration';
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
export const KEY_DOMAIN_LIFECYCLE_BASE_DELETE_BEFORE_EXPIRATION: keyof DomainLifecycleBase = 'delete_before_expiration';
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
export const KEY_DOMAIN_LIFECYCLE_BASE_DELETE_POLICY: keyof DomainLifecycleBase = 'delete_policy';
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
export const KEY_DOMAIN_LIFECYCLE_BASE_EXPLICIT_RENEW: keyof DomainLifecycleBase = 'explicit_renew';
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
export const KEY_DOMAIN_LIFECYCLE_BASE_GRACE_PERIOD: keyof DomainLifecycleBase = 'grace_period';
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
export const KEY_DOMAIN_LIFECYCLE_BASE_PENDING_DELETE: keyof DomainLifecycleBase = 'pending_delete';
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
export const KEY_DOMAIN_LIFECYCLE_BASE_REDEMPTION_PERIOD: keyof DomainLifecycleBase = 'redemption_period';
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
export const KEY_DOMAIN_LIFECYCLE_BASE_REGISTRATION_PERIODS: keyof DomainLifecycleBase = 'registration_periods';
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
export const KEY_DOMAIN_LIFECYCLE_BASE_REGISTRY_AUTO_RENEW: keyof DomainLifecycleBase = 'registry_auto_renew';
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
export const KEY_DOMAIN_LIFECYCLE_BASE_RENEWAL_PERIODS: keyof DomainLifecycleBase = 'renewal_periods';
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
export const KEY_DOMAIN_LIFECYCLE_BASE_RGP_OPERATIONS: keyof DomainLifecycleBase = 'rgp_operations';
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
export const KEY_DOMAIN_LIFECYCLE_BASE_SYNC_AFTER_OPERATIONS: keyof DomainLifecycleBase = 'sync_after_operations';

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
export const KEY_DOMAIN_NAME_PARTS_DOMAIN: keyof DomainNameParts = 'domain';
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
export const KEY_DOMAIN_NAME_PARTS_SUBDOMAIN: keyof DomainNameParts = 'subdomain';
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
export const KEY_DOMAIN_NAME_PARTS_SUFFIX: keyof DomainNameParts = 'suffix';

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
export const KEY_DOMAIN_PERIOD_UNIT: keyof DomainPeriod = 'unit';
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
export const KEY_DOMAIN_PERIOD_VALUE: keyof DomainPeriod = 'value';

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
export const KEY_DOMAIN_RENEW_REQUEST_CURRENT_EXPIRY_DATE: keyof DomainRenewRequest = 'current_expiry_date';
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
export const KEY_DOMAIN_RENEW_REQUEST_PERIOD: keyof DomainRenewRequest = 'period';

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
export const KEY_DOMAIN_RENEW_NAME: keyof DomainRenew = 'name';
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
export const KEY_DOMAIN_RENEW_NEW_EXPIRY_DATE: keyof DomainRenew = 'new_expiry_date';
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
export const KEY_DOMAIN_RENEW_PERIOD_EXTENDED: keyof DomainRenew = 'period_extended';

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
export const KEY_DOMAIN_AUTH_CODE: keyof Domain = 'auth_code';
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
export const KEY_DOMAIN_AUTH_CODE_EXPIRES_ON: keyof Domain = 'auth_code_expires_on';
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
export const KEY_DOMAIN_CANCELED_ON: keyof Domain = 'canceled_on';
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
export const KEY_DOMAIN_CONTACTS: keyof Domain = 'contacts';
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
export const KEY_DOMAIN_CREATED_ON: keyof Domain = 'created_on';
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
export const KEY_DOMAIN_DELETED_ON: keyof Domain = 'deleted_on';
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
export const KEY_DOMAIN_DOMAIN_ID: keyof Domain = 'domain_id';
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
export const KEY_DOMAIN_EXPIRES_ON: keyof Domain = 'expires_on';
/**
 * Hosts
 *
 * The subordinate hosts of the domain
 *
 * @type {array}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `hosts` property of Domain objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = domain[KEY_DOMAIN_HOSTS];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DOMAIN_HOSTS;
 * const value = domain[propertyName];
 * ```
 *
 * @see {@link Domain} - The TypeScript type definition
 * @see {@link KEYS_DOMAIN} - Array of all keys for this type
 */
export const KEY_DOMAIN_HOSTS: keyof Domain = 'hosts';
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
export const KEY_DOMAIN_NAME: keyof Domain = 'name';
/**
 * Nameservers
 *
 * The nameservers of the domain
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
export const KEY_DOMAIN_NAMESERVERS: keyof Domain = 'nameservers';
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
export const KEY_DOMAIN_OWNER_ID: keyof Domain = 'owner_id';
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
export const KEY_DOMAIN_REGISTERED_ON: keyof Domain = 'registered_on';
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
export const KEY_DOMAIN_REGISTRY_ACCOUNT_ID: keyof Domain = 'registry_account_id';
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
export const KEY_DOMAIN_REGISTRY_STATUSES: keyof Domain = 'registry_statuses';
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
export const KEY_DOMAIN_RENEWAL_MODE: keyof Domain = 'renewal_mode';
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
export const KEY_DOMAIN_ROID: keyof Domain = 'roid';
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
export const KEY_DOMAIN_SLD: keyof Domain = 'sld';
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
export const KEY_DOMAIN_TLD: keyof Domain = 'tld';
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
export const KEY_DOMAIN_TRANSFER_LOCK: keyof Domain = 'transfer_lock';
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
export const KEY_DOMAIN_UPDATED_ON: keyof Domain = 'updated_on';

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
  KEY_DOMAIN_HOSTS,
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
 * Additional Info
 *
 * Additional information to include in the restore operation
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `additional_info` property of DomainRestoreRequest objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = domainrestorerequest[KEY_DOMAIN_RESTORE_REQUEST_ADDITIONAL_INFO];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DOMAIN_RESTORE_REQUEST_ADDITIONAL_INFO;
 * const value = domainrestorerequest[propertyName];
 * ```
 *
 * @see {@link DomainRestoreRequest} - The TypeScript type definition
 * @see {@link KEYS_DOMAIN_RESTORE_REQUEST} - Array of all keys for this type
 */
export const KEY_DOMAIN_RESTORE_REQUEST_ADDITIONAL_INFO: keyof DomainRestoreRequest = 'additional_info';
/**
 * Auto Renew
 *
 * Whether to automatically renew the domain after restore
 *
 * @type {boolean}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `auto_renew` property of DomainRestoreRequest objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = domainrestorerequest[KEY_DOMAIN_RESTORE_REQUEST_AUTO_RENEW];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DOMAIN_RESTORE_REQUEST_AUTO_RENEW;
 * const value = domainrestorerequest[propertyName];
 * ```
 *
 * @see {@link DomainRestoreRequest} - The TypeScript type definition
 * @see {@link KEYS_DOMAIN_RESTORE_REQUEST} - Array of all keys for this type
 */
export const KEY_DOMAIN_RESTORE_REQUEST_AUTO_RENEW: keyof DomainRestoreRequest = 'auto_renew';
/**
 * Reason
 *
 * Reason for restoring the domain
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `reason` property of DomainRestoreRequest objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = domainrestorerequest[KEY_DOMAIN_RESTORE_REQUEST_REASON];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DOMAIN_RESTORE_REQUEST_REASON;
 * const value = domainrestorerequest[propertyName];
 * ```
 *
 * @see {@link DomainRestoreRequest} - The TypeScript type definition
 * @see {@link KEYS_DOMAIN_RESTORE_REQUEST} - Array of all keys for this type
 */
export const KEY_DOMAIN_RESTORE_REQUEST_REASON: keyof DomainRestoreRequest = 'reason';

/**
 * Array of all DomainRestoreRequest property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for DomainRestoreRequest objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all keys
 * for (const key of KEYS_DOMAIN_RESTORE_REQUEST) {
 *   console.log(`Property: ${key}, Value: ${domainrestorerequest[key]}`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_DOMAIN_RESTORE_REQUEST.includes(someKey);
 * ```
 *
 * @see {@link DomainRestoreRequest} - The TypeScript type definition
 */
export const KEYS_DOMAIN_RESTORE_REQUEST = [
  KEY_DOMAIN_RESTORE_REQUEST_ADDITIONAL_INFO,
  KEY_DOMAIN_RESTORE_REQUEST_AUTO_RENEW,
  KEY_DOMAIN_RESTORE_REQUEST_REASON,
] as const satisfies (keyof DomainRestoreRequest)[];

/**
 * Domain Id
 *
 * The ID of the restored domain
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `domain_id` property of DomainRestore objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = domainrestore[KEY_DOMAIN_RESTORE_DOMAIN_ID];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DOMAIN_RESTORE_DOMAIN_ID;
 * const value = domainrestore[propertyName];
 * ```
 *
 * @see {@link DomainRestore} - The TypeScript type definition
 * @see {@link KEYS_DOMAIN_RESTORE} - Array of all keys for this type
 */
export const KEY_DOMAIN_RESTORE_DOMAIN_ID: keyof DomainRestore = 'domain_id';
/**
 * Expiration Date
 *
 * The new expiration date after restore
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `expiration_date` property of DomainRestore objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = domainrestore[KEY_DOMAIN_RESTORE_EXPIRATION_DATE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DOMAIN_RESTORE_EXPIRATION_DATE;
 * const value = domainrestore[propertyName];
 * ```
 *
 * @see {@link DomainRestore} - The TypeScript type definition
 * @see {@link KEYS_DOMAIN_RESTORE} - Array of all keys for this type
 */
export const KEY_DOMAIN_RESTORE_EXPIRATION_DATE: keyof DomainRestore = 'expiration_date';
/**
 * Name
 *
 * The name of the restored domain
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `name` property of DomainRestore objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = domainrestore[KEY_DOMAIN_RESTORE_NAME];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DOMAIN_RESTORE_NAME;
 * const value = domainrestore[propertyName];
 * ```
 *
 * @see {@link DomainRestore} - The TypeScript type definition
 * @see {@link KEYS_DOMAIN_RESTORE} - Array of all keys for this type
 */
export const KEY_DOMAIN_RESTORE_NAME: keyof DomainRestore = 'name';
/**
 * Restored At
 *
 * When the domain restore operation was completed
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `restored_at` property of DomainRestore objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = domainrestore[KEY_DOMAIN_RESTORE_RESTORED_AT];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DOMAIN_RESTORE_RESTORED_AT;
 * const value = domainrestore[propertyName];
 * ```
 *
 * @see {@link DomainRestore} - The TypeScript type definition
 * @see {@link KEYS_DOMAIN_RESTORE} - Array of all keys for this type
 */
export const KEY_DOMAIN_RESTORE_RESTORED_AT: keyof DomainRestore = 'restored_at';

/**
 * Array of all DomainRestore property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for DomainRestore objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all keys
 * for (const key of KEYS_DOMAIN_RESTORE) {
 *   console.log(`Property: ${key}, Value: ${domainrestore[key]}`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_DOMAIN_RESTORE.includes(someKey);
 * ```
 *
 * @see {@link DomainRestore} - The TypeScript type definition
 */
export const KEYS_DOMAIN_RESTORE = [
  KEY_DOMAIN_RESTORE_DOMAIN_ID,
  KEY_DOMAIN_RESTORE_EXPIRATION_DATE,
  KEY_DOMAIN_RESTORE_NAME,
  KEY_DOMAIN_RESTORE_RESTORED_AT,
] as const satisfies (keyof DomainRestore)[];

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
export const KEY_DOMAIN_SEARCH_META_PROCESSING_TIME_MS: keyof DomainSearchMeta = 'processing_time_ms';
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
export const KEY_DOMAIN_SEARCH_META_TOTAL: keyof DomainSearchMeta = 'total';

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
export const KEY_DOMAIN_SEARCH_META: keyof DomainSearch = 'meta';
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
export const KEY_DOMAIN_SEARCH_RESULTS: keyof DomainSearch = 'results';

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
 * Amount
 *
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `amount` property of DomainSearchSuggestionPriceData objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = domainsearchsuggestionpricedata[KEY_DOMAIN_SEARCH_SUGGESTION_PRICE_DATA_AMOUNT];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DOMAIN_SEARCH_SUGGESTION_PRICE_DATA_AMOUNT;
 * const value = domainsearchsuggestionpricedata[propertyName];
 * ```
 *
 * @see {@link DomainSearchSuggestionPriceData} - The TypeScript type definition
 * @see {@link KEYS_DOMAIN_SEARCH_SUGGESTION_PRICE_DATA} - Array of all keys for this type
 */
export const KEY_DOMAIN_SEARCH_SUGGESTION_PRICE_DATA_AMOUNT: keyof DomainSearchSuggestionPriceData = 'amount';
/**
 * Currency
 *
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `currency` property of DomainSearchSuggestionPriceData objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = domainsearchsuggestionpricedata[KEY_DOMAIN_SEARCH_SUGGESTION_PRICE_DATA_CURRENCY];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DOMAIN_SEARCH_SUGGESTION_PRICE_DATA_CURRENCY;
 * const value = domainsearchsuggestionpricedata[propertyName];
 * ```
 *
 * @see {@link DomainSearchSuggestionPriceData} - The TypeScript type definition
 * @see {@link KEYS_DOMAIN_SEARCH_SUGGESTION_PRICE_DATA} - Array of all keys for this type
 */
export const KEY_DOMAIN_SEARCH_SUGGESTION_PRICE_DATA_CURRENCY: keyof DomainSearchSuggestionPriceData = 'currency';
/**
 * period property
 *
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `period` property of DomainSearchSuggestionPriceData objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = domainsearchsuggestionpricedata[KEY_DOMAIN_SEARCH_SUGGESTION_PRICE_DATA_PERIOD];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DOMAIN_SEARCH_SUGGESTION_PRICE_DATA_PERIOD;
 * const value = domainsearchsuggestionpricedata[propertyName];
 * ```
 *
 * @see {@link DomainSearchSuggestionPriceData} - The TypeScript type definition
 * @see {@link KEYS_DOMAIN_SEARCH_SUGGESTION_PRICE_DATA} - Array of all keys for this type
 */
export const KEY_DOMAIN_SEARCH_SUGGESTION_PRICE_DATA_PERIOD: keyof DomainSearchSuggestionPriceData = 'period';

/**
 * Array of all DomainSearchSuggestionPriceData property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for DomainSearchSuggestionPriceData objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all keys
 * for (const key of KEYS_DOMAIN_SEARCH_SUGGESTION_PRICE_DATA) {
 *   console.log(`Property: ${key}, Value: ${domainsearchsuggestionpricedata[key]}`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_DOMAIN_SEARCH_SUGGESTION_PRICE_DATA.includes(someKey);
 * ```
 *
 * @see {@link DomainSearchSuggestionPriceData} - The TypeScript type definition
 */
export const KEYS_DOMAIN_SEARCH_SUGGESTION_PRICE_DATA = [
  KEY_DOMAIN_SEARCH_SUGGESTION_PRICE_DATA_AMOUNT,
  KEY_DOMAIN_SEARCH_SUGGESTION_PRICE_DATA_CURRENCY,
  KEY_DOMAIN_SEARCH_SUGGESTION_PRICE_DATA_PERIOD,
] as const satisfies (keyof DomainSearchSuggestionPriceData)[];

/**
 * Available
 *
 *
 * @type {boolean}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `available` property of DomainSearchSuggestionWithPrice objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = domainsearchsuggestionwithprice[KEY_DOMAIN_SEARCH_SUGGESTION_WITH_PRICE_AVAILABLE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DOMAIN_SEARCH_SUGGESTION_WITH_PRICE_AVAILABLE;
 * const value = domainsearchsuggestionwithprice[propertyName];
 * ```
 *
 * @see {@link DomainSearchSuggestionWithPrice} - The TypeScript type definition
 * @see {@link KEYS_DOMAIN_SEARCH_SUGGESTION_WITH_PRICE} - Array of all keys for this type
 */
export const KEY_DOMAIN_SEARCH_SUGGESTION_WITH_PRICE_AVAILABLE: keyof DomainSearchSuggestionWithPrice = 'available';
/**
 * Domain
 *
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `domain` property of DomainSearchSuggestionWithPrice objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = domainsearchsuggestionwithprice[KEY_DOMAIN_SEARCH_SUGGESTION_WITH_PRICE_DOMAIN];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DOMAIN_SEARCH_SUGGESTION_WITH_PRICE_DOMAIN;
 * const value = domainsearchsuggestionwithprice[propertyName];
 * ```
 *
 * @see {@link DomainSearchSuggestionWithPrice} - The TypeScript type definition
 * @see {@link KEYS_DOMAIN_SEARCH_SUGGESTION_WITH_PRICE} - Array of all keys for this type
 */
export const KEY_DOMAIN_SEARCH_SUGGESTION_WITH_PRICE_DOMAIN: keyof DomainSearchSuggestionWithPrice = 'domain';
/**
 * Premium
 *
 *
 * @type {boolean}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `premium` property of DomainSearchSuggestionWithPrice objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = domainsearchsuggestionwithprice[KEY_DOMAIN_SEARCH_SUGGESTION_WITH_PRICE_PREMIUM];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DOMAIN_SEARCH_SUGGESTION_WITH_PRICE_PREMIUM;
 * const value = domainsearchsuggestionwithprice[propertyName];
 * ```
 *
 * @see {@link DomainSearchSuggestionWithPrice} - The TypeScript type definition
 * @see {@link KEYS_DOMAIN_SEARCH_SUGGESTION_WITH_PRICE} - Array of all keys for this type
 */
export const KEY_DOMAIN_SEARCH_SUGGESTION_WITH_PRICE_PREMIUM: keyof DomainSearchSuggestionWithPrice = 'premium';
/**
 * price property
 *
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `price` property of DomainSearchSuggestionWithPrice objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = domainsearchsuggestionwithprice[KEY_DOMAIN_SEARCH_SUGGESTION_WITH_PRICE_PRICE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DOMAIN_SEARCH_SUGGESTION_WITH_PRICE_PRICE;
 * const value = domainsearchsuggestionwithprice[propertyName];
 * ```
 *
 * @see {@link DomainSearchSuggestionWithPrice} - The TypeScript type definition
 * @see {@link KEYS_DOMAIN_SEARCH_SUGGESTION_WITH_PRICE} - Array of all keys for this type
 */
export const KEY_DOMAIN_SEARCH_SUGGESTION_WITH_PRICE_PRICE: keyof DomainSearchSuggestionWithPrice = 'price';

/**
 * Array of all DomainSearchSuggestionWithPrice property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for DomainSearchSuggestionWithPrice objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all keys
 * for (const key of KEYS_DOMAIN_SEARCH_SUGGESTION_WITH_PRICE) {
 *   console.log(`Property: ${key}, Value: ${domainsearchsuggestionwithprice[key]}`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_DOMAIN_SEARCH_SUGGESTION_WITH_PRICE.includes(someKey);
 * ```
 *
 * @see {@link DomainSearchSuggestionWithPrice} - The TypeScript type definition
 */
export const KEYS_DOMAIN_SEARCH_SUGGESTION_WITH_PRICE = [
  KEY_DOMAIN_SEARCH_SUGGESTION_WITH_PRICE_AVAILABLE,
  KEY_DOMAIN_SEARCH_SUGGESTION_WITH_PRICE_DOMAIN,
  KEY_DOMAIN_SEARCH_SUGGESTION_WITH_PRICE_PREMIUM,
  KEY_DOMAIN_SEARCH_SUGGESTION_WITH_PRICE_PRICE,
] as const satisfies (keyof DomainSearchSuggestionWithPrice)[];

/**
 * Status
 *
 * The status of the domain
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `status` property of DomainStatus2 objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = domainstatus2[KEY_DOMAIN_STATUS2_STATUS];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DOMAIN_STATUS2_STATUS;
 * const value = domainstatus2[propertyName];
 * ```
 *
 * @see {@link DomainStatus2} - The TypeScript type definition
 * @see {@link KEYS_DOMAIN_STATUS2} - Array of all keys for this type
 */
export const KEY_DOMAIN_STATUS2_STATUS: keyof DomainStatus2 = 'status';

/**
 * Array of all DomainStatus2 property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for DomainStatus2 objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all keys
 * for (const key of KEYS_DOMAIN_STATUS2) {
 *   console.log(`Property: ${key}, Value: ${domainstatus2[key]}`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_DOMAIN_STATUS2.includes(someKey);
 * ```
 *
 * @see {@link DomainStatus2} - The TypeScript type definition
 */
export const KEYS_DOMAIN_STATUS2 = [
  KEY_DOMAIN_STATUS2_STATUS,
] as const satisfies (keyof DomainStatus2)[];

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
export const KEY_DOMAIN_STATUSES_BASE_DEFAULT: keyof DomainStatusesBase = 'default';
/**
 * Status Mapping
 *
 * Mapping of registry-specific statuses to their equivalent default ones, if any
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `status_mapping` property of DomainStatusesBase objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = domainstatusesbase[KEY_DOMAIN_STATUSES_BASE_STATUS_MAPPING];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DOMAIN_STATUSES_BASE_STATUS_MAPPING;
 * const value = domainstatusesbase[propertyName];
 * ```
 *
 * @see {@link DomainStatusesBase} - The TypeScript type definition
 * @see {@link KEYS_DOMAIN_STATUSES_BASE} - Array of all keys for this type
 */
export const KEY_DOMAIN_STATUSES_BASE_STATUS_MAPPING: keyof DomainStatusesBase = 'status_mapping';
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
export const KEY_DOMAIN_STATUSES_BASE_SUPPORTED_STATUSES: keyof DomainStatusesBase = 'supported_statuses';

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
  KEY_DOMAIN_STATUSES_BASE_STATUS_MAPPING,
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
export const KEY_DOMAIN_SUMMARY_DATA_BY_STATUS: keyof DomainSummaryData = 'by_status';
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
export const KEY_DOMAIN_SUMMARY_DATA_BY_TLD: keyof DomainSummaryData = 'by_tld';
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
export const KEY_DOMAIN_SUMMARY_DATA_EXPIRING_SOON: keyof DomainSummaryData = 'expiring_soon';
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
export const KEY_DOMAIN_SUMMARY_DATA_TOTAL_COUNT: keyof DomainSummaryData = 'total_count';

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
export const KEY_DOMAIN_SUMMARY_DOMAINS: keyof DomainSummary = 'domains';
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
export const KEY_DOMAIN_SUMMARY_ORGANIZATION_ID: keyof DomainSummary = 'organization_id';

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
 * Attributes
 *
 * Additional attributes of the domain
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `attributes` property of DomainTransferIn objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = domaintransferin[KEY_DOMAIN_TRANSFER_IN_ATTRIBUTES];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DOMAIN_TRANSFER_IN_ATTRIBUTES;
 * const value = domaintransferin[propertyName];
 * ```
 *
 * @see {@link DomainTransferIn} - The TypeScript type definition
 * @see {@link KEYS_DOMAIN_TRANSFER_IN} - Array of all keys for this type
 */
export const KEY_DOMAIN_TRANSFER_IN_ATTRIBUTES: keyof DomainTransferIn = 'attributes';
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
export const KEY_DOMAIN_TRANSFER_IN_AUTH_CODE: keyof DomainTransferIn = 'auth_code';
/**
 * Contacts
 *
 * The contacts of the domain
 *
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
export const KEY_DOMAIN_TRANSFER_IN_CONTACTS: keyof DomainTransferIn = 'contacts';
/**
 * Create Zone
 *
 * Create a zone for the domain on OpusDNS nameserver infrastructure
 *
 * @type {boolean}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `create_zone` property of DomainTransferIn objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = domaintransferin[KEY_DOMAIN_TRANSFER_IN_CREATE_ZONE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DOMAIN_TRANSFER_IN_CREATE_ZONE;
 * const value = domaintransferin[propertyName];
 * ```
 *
 * @see {@link DomainTransferIn} - The TypeScript type definition
 * @see {@link KEYS_DOMAIN_TRANSFER_IN} - Array of all keys for this type
 */
export const KEY_DOMAIN_TRANSFER_IN_CREATE_ZONE: keyof DomainTransferIn = 'create_zone';
/**
 * Name
 *
 * The domain to be created
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
export const KEY_DOMAIN_TRANSFER_IN_NAME: keyof DomainTransferIn = 'name';
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
export const KEY_DOMAIN_TRANSFER_IN_NAMESERVERS: keyof DomainTransferIn = 'nameservers';
/**
 * renewal_mode property
 *
 * The renewal mode of the domain
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
export const KEY_DOMAIN_TRANSFER_IN_RENEWAL_MODE: keyof DomainTransferIn = 'renewal_mode';

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
  KEY_DOMAIN_TRANSFER_IN_ATTRIBUTES,
  KEY_DOMAIN_TRANSFER_IN_AUTH_CODE,
  KEY_DOMAIN_TRANSFER_IN_CONTACTS,
  KEY_DOMAIN_TRANSFER_IN_CREATE_ZONE,
  KEY_DOMAIN_TRANSFER_IN_NAME,
  KEY_DOMAIN_TRANSFER_IN_NAMESERVERS,
  KEY_DOMAIN_TRANSFER_IN_RENEWAL_MODE,
] as const satisfies (keyof DomainTransferIn)[];

/**
 * Disconnect
 *
 * Disconnect the domain from current nameserver and update to DENIC nameserver
 *
 * @type {boolean}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `disconnect` property of DomainTransitRequest objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = domaintransitrequest[KEY_DOMAIN_TRANSIT_REQUEST_DISCONNECT];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DOMAIN_TRANSIT_REQUEST_DISCONNECT;
 * const value = domaintransitrequest[propertyName];
 * ```
 *
 * @see {@link DomainTransitRequest} - The TypeScript type definition
 * @see {@link KEYS_DOMAIN_TRANSIT_REQUEST} - Array of all keys for this type
 */
export const KEY_DOMAIN_TRANSIT_REQUEST_DISCONNECT: keyof DomainTransitRequest = 'disconnect';

/**
 * Array of all DomainTransitRequest property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for DomainTransitRequest objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all keys
 * for (const key of KEYS_DOMAIN_TRANSIT_REQUEST) {
 *   console.log(`Property: ${key}, Value: ${domaintransitrequest[key]}`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_DOMAIN_TRANSIT_REQUEST.includes(someKey);
 * ```
 *
 * @see {@link DomainTransitRequest} - The TypeScript type definition
 */
export const KEYS_DOMAIN_TRANSIT_REQUEST = [
  KEY_DOMAIN_TRANSIT_REQUEST_DISCONNECT,
] as const satisfies (keyof DomainTransitRequest)[];

/**
 * Name
 *
 * The domain name that was transited
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `name` property of DomainTransit objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = domaintransit[KEY_DOMAIN_TRANSIT_NAME];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DOMAIN_TRANSIT_NAME;
 * const value = domaintransit[propertyName];
 * ```
 *
 * @see {@link DomainTransit} - The TypeScript type definition
 * @see {@link KEYS_DOMAIN_TRANSIT} - Array of all keys for this type
 */
export const KEY_DOMAIN_TRANSIT_NAME: keyof DomainTransit = 'name';
/**
 * Success
 *
 * Whether the transit operation was successful
 *
 * @type {boolean}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `success` property of DomainTransit objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = domaintransit[KEY_DOMAIN_TRANSIT_SUCCESS];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DOMAIN_TRANSIT_SUCCESS;
 * const value = domaintransit[propertyName];
 * ```
 *
 * @see {@link DomainTransit} - The TypeScript type definition
 * @see {@link KEYS_DOMAIN_TRANSIT} - Array of all keys for this type
 */
export const KEY_DOMAIN_TRANSIT_SUCCESS: keyof DomainTransit = 'success';

/**
 * Array of all DomainTransit property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for DomainTransit objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all keys
 * for (const key of KEYS_DOMAIN_TRANSIT) {
 *   console.log(`Property: ${key}, Value: ${domaintransit[key]}`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_DOMAIN_TRANSIT.includes(someKey);
 * ```
 *
 * @see {@link DomainTransit} - The TypeScript type definition
 */
export const KEYS_DOMAIN_TRANSIT = [
  KEY_DOMAIN_TRANSIT_NAME,
  KEY_DOMAIN_TRANSIT_SUCCESS,
] as const satisfies (keyof DomainTransit)[];

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
export const KEY_DOMAIN_UPDATE_AUTH_CODE: keyof DomainUpdate = 'auth_code';
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
export const KEY_DOMAIN_UPDATE_CONTACTS: keyof DomainUpdate = 'contacts';
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
export const KEY_DOMAIN_UPDATE_NAMESERVERS: keyof DomainUpdate = 'nameservers';
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
export const KEY_DOMAIN_UPDATE_RENEWAL_MODE: keyof DomainUpdate = 'renewal_mode';
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
export const KEY_DOMAIN_UPDATE_STATUSES: keyof DomainUpdate = 'statuses';

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
 * Zone Delete
 *
 * Informs the registry whether the zone for that domain has been already deleted - as took from the docs: "(...) the registrar informs the registry that he has stopped the nameservice for the specified domain"
 *
 * @type {boolean}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `zone_delete` property of DomainWithdrawRequest objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = domainwithdrawrequest[KEY_DOMAIN_WITHDRAW_REQUEST_ZONE_DELETE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DOMAIN_WITHDRAW_REQUEST_ZONE_DELETE;
 * const value = domainwithdrawrequest[propertyName];
 * ```
 *
 * @see {@link DomainWithdrawRequest} - The TypeScript type definition
 * @see {@link KEYS_DOMAIN_WITHDRAW_REQUEST} - Array of all keys for this type
 */
export const KEY_DOMAIN_WITHDRAW_REQUEST_ZONE_DELETE: keyof DomainWithdrawRequest = 'zone_delete';

/**
 * Array of all DomainWithdrawRequest property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for DomainWithdrawRequest objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all keys
 * for (const key of KEYS_DOMAIN_WITHDRAW_REQUEST) {
 *   console.log(`Property: ${key}, Value: ${domainwithdrawrequest[key]}`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_DOMAIN_WITHDRAW_REQUEST.includes(someKey);
 * ```
 *
 * @see {@link DomainWithdrawRequest} - The TypeScript type definition
 */
export const KEYS_DOMAIN_WITHDRAW_REQUEST = [
  KEY_DOMAIN_WITHDRAW_REQUEST_ZONE_DELETE,
] as const satisfies (keyof DomainWithdrawRequest)[];

/**
 * Name
 *
 * The domain name that was withdrawn
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `name` property of DomainWithdraw objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = domainwithdraw[KEY_DOMAIN_WITHDRAW_NAME];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DOMAIN_WITHDRAW_NAME;
 * const value = domainwithdraw[propertyName];
 * ```
 *
 * @see {@link DomainWithdraw} - The TypeScript type definition
 * @see {@link KEYS_DOMAIN_WITHDRAW} - Array of all keys for this type
 */
export const KEY_DOMAIN_WITHDRAW_NAME: keyof DomainWithdraw = 'name';
/**
 * Success
 *
 * Whether the withdraw operation was successful
 *
 * @type {boolean}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `success` property of DomainWithdraw objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = domainwithdraw[KEY_DOMAIN_WITHDRAW_SUCCESS];
 * 
 * // Dynamic property access
 * const propertyName = KEY_DOMAIN_WITHDRAW_SUCCESS;
 * const value = domainwithdraw[propertyName];
 * ```
 *
 * @see {@link DomainWithdraw} - The TypeScript type definition
 * @see {@link KEYS_DOMAIN_WITHDRAW} - Array of all keys for this type
 */
export const KEY_DOMAIN_WITHDRAW_SUCCESS: keyof DomainWithdraw = 'success';

/**
 * Array of all DomainWithdraw property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for DomainWithdraw objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all keys
 * for (const key of KEYS_DOMAIN_WITHDRAW) {
 *   console.log(`Property: ${key}, Value: ${domainwithdraw[key]}`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_DOMAIN_WITHDRAW.includes(someKey);
 * ```
 *
 * @see {@link DomainWithdraw} - The TypeScript type definition
 */
export const KEYS_DOMAIN_WITHDRAW = [
  KEY_DOMAIN_WITHDRAW_NAME,
  KEY_DOMAIN_WITHDRAW_SUCCESS,
] as const satisfies (keyof DomainWithdraw)[];

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
export const KEY_DOMAINS_EXPIRING_SOON_NEXT_30_DAYS: keyof DomainsExpiringSoon = 'next_30_days';
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
export const KEY_DOMAINS_EXPIRING_SOON_NEXT_60_DAYS: keyof DomainsExpiringSoon = 'next_60_days';
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
export const KEY_DOMAINS_EXPIRING_SOON_NEXT_90_DAYS: keyof DomainsExpiringSoon = 'next_90_days';

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
export const KEY_EMAIL_FORWARD_ALIAS_ALIAS: keyof EmailForwardAlias = 'alias';
/**
 * Email Forward Alias Id
 *
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `email_forward_alias_id` property of EmailForwardAlias objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = emailforwardalias[KEY_EMAIL_FORWARD_ALIAS_EMAIL_FORWARD_ALIAS_ID];
 * 
 * // Dynamic property access
 * const propertyName = KEY_EMAIL_FORWARD_ALIAS_EMAIL_FORWARD_ALIAS_ID;
 * const value = emailforwardalias[propertyName];
 * ```
 *
 * @see {@link EmailForwardAlias} - The TypeScript type definition
 * @see {@link KEYS_EMAIL_FORWARD_ALIAS} - Array of all keys for this type
 */
export const KEY_EMAIL_FORWARD_ALIAS_EMAIL_FORWARD_ALIAS_ID: keyof EmailForwardAlias = 'email_forward_alias_id';
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
export const KEY_EMAIL_FORWARD_ALIAS_FORWARD_TO: keyof EmailForwardAlias = 'forward_to';

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
  KEY_EMAIL_FORWARD_ALIAS_EMAIL_FORWARD_ALIAS_ID,
  KEY_EMAIL_FORWARD_ALIAS_FORWARD_TO,
] as const satisfies (keyof EmailForwardAlias)[];

/**
 * Alias
 *
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `alias` property of EmailForwardAliasCreate objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = emailforwardaliascreate[KEY_EMAIL_FORWARD_ALIAS_CREATE_ALIAS];
 * 
 * // Dynamic property access
 * const propertyName = KEY_EMAIL_FORWARD_ALIAS_CREATE_ALIAS;
 * const value = emailforwardaliascreate[propertyName];
 * ```
 *
 * @see {@link EmailForwardAliasCreate} - The TypeScript type definition
 * @see {@link KEYS_EMAIL_FORWARD_ALIAS_CREATE} - Array of all keys for this type
 */
export const KEY_EMAIL_FORWARD_ALIAS_CREATE_ALIAS: keyof EmailForwardAliasCreate = 'alias';
/**
 * Forward To
 *
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `forward_to` property of EmailForwardAliasCreate objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = emailforwardaliascreate[KEY_EMAIL_FORWARD_ALIAS_CREATE_FORWARD_TO];
 * 
 * // Dynamic property access
 * const propertyName = KEY_EMAIL_FORWARD_ALIAS_CREATE_FORWARD_TO;
 * const value = emailforwardaliascreate[propertyName];
 * ```
 *
 * @see {@link EmailForwardAliasCreate} - The TypeScript type definition
 * @see {@link KEYS_EMAIL_FORWARD_ALIAS_CREATE} - Array of all keys for this type
 */
export const KEY_EMAIL_FORWARD_ALIAS_CREATE_FORWARD_TO: keyof EmailForwardAliasCreate = 'forward_to';

/**
 * Array of all EmailForwardAliasCreate property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for EmailForwardAliasCreate objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all keys
 * for (const key of KEYS_EMAIL_FORWARD_ALIAS_CREATE) {
 *   console.log(`Property: ${key}, Value: ${emailforwardaliascreate[key]}`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_EMAIL_FORWARD_ALIAS_CREATE.includes(someKey);
 * ```
 *
 * @see {@link EmailForwardAliasCreate} - The TypeScript type definition
 */
export const KEYS_EMAIL_FORWARD_ALIAS_CREATE = [
  KEY_EMAIL_FORWARD_ALIAS_CREATE_ALIAS,
  KEY_EMAIL_FORWARD_ALIAS_CREATE_FORWARD_TO,
] as const satisfies (keyof EmailForwardAliasCreate)[];

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
export const KEY_EMAIL_FORWARD_ALIAS_UPDATE_FORWARD_TO: keyof EmailForwardAliasUpdate = 'forward_to';

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
 * Aliases
 *
 *
 * @type {array}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `aliases` property of EmailForwardCreate objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = emailforwardcreate[KEY_EMAIL_FORWARD_CREATE_ALIASES];
 * 
 * // Dynamic property access
 * const propertyName = KEY_EMAIL_FORWARD_CREATE_ALIASES;
 * const value = emailforwardcreate[propertyName];
 * ```
 *
 * @see {@link EmailForwardCreate} - The TypeScript type definition
 * @see {@link KEYS_EMAIL_FORWARD_CREATE} - Array of all keys for this type
 */
export const KEY_EMAIL_FORWARD_CREATE_ALIASES: keyof EmailForwardCreate = 'aliases';
/**
 * Enabled
 *
 *
 * @type {boolean}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `enabled` property of EmailForwardCreate objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = emailforwardcreate[KEY_EMAIL_FORWARD_CREATE_ENABLED];
 * 
 * // Dynamic property access
 * const propertyName = KEY_EMAIL_FORWARD_CREATE_ENABLED;
 * const value = emailforwardcreate[propertyName];
 * ```
 *
 * @see {@link EmailForwardCreate} - The TypeScript type definition
 * @see {@link KEYS_EMAIL_FORWARD_CREATE} - Array of all keys for this type
 */
export const KEY_EMAIL_FORWARD_CREATE_ENABLED: keyof EmailForwardCreate = 'enabled';
/**
 * Hostname
 *
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `hostname` property of EmailForwardCreate objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = emailforwardcreate[KEY_EMAIL_FORWARD_CREATE_HOSTNAME];
 * 
 * // Dynamic property access
 * const propertyName = KEY_EMAIL_FORWARD_CREATE_HOSTNAME;
 * const value = emailforwardcreate[propertyName];
 * ```
 *
 * @see {@link EmailForwardCreate} - The TypeScript type definition
 * @see {@link KEYS_EMAIL_FORWARD_CREATE} - Array of all keys for this type
 */
export const KEY_EMAIL_FORWARD_CREATE_HOSTNAME: keyof EmailForwardCreate = 'hostname';

/**
 * Array of all EmailForwardCreate property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for EmailForwardCreate objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all keys
 * for (const key of KEYS_EMAIL_FORWARD_CREATE) {
 *   console.log(`Property: ${key}, Value: ${emailforwardcreate[key]}`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_EMAIL_FORWARD_CREATE.includes(someKey);
 * ```
 *
 * @see {@link EmailForwardCreate} - The TypeScript type definition
 */
export const KEYS_EMAIL_FORWARD_CREATE = [
  KEY_EMAIL_FORWARD_CREATE_ALIASES,
  KEY_EMAIL_FORWARD_CREATE_ENABLED,
  KEY_EMAIL_FORWARD_CREATE_HOSTNAME,
] as const satisfies (keyof EmailForwardCreate)[];

/**
 * Created On
 *
 * Timestamp when email was received by ImprovMX
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `created_on` property of EmailForwardLog objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = emailforwardlog[KEY_EMAIL_FORWARD_LOG_CREATED_ON];
 * 
 * // Dynamic property access
 * const propertyName = KEY_EMAIL_FORWARD_LOG_CREATED_ON;
 * const value = emailforwardlog[propertyName];
 * ```
 *
 * @see {@link EmailForwardLog} - The TypeScript type definition
 * @see {@link KEYS_EMAIL_FORWARD_LOG} - Array of all keys for this type
 */
export const KEY_EMAIL_FORWARD_LOG_CREATED_ON: keyof EmailForwardLog = 'created_on';
/**
 * Domain
 *
 * Domain name
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `domain` property of EmailForwardLog objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = emailforwardlog[KEY_EMAIL_FORWARD_LOG_DOMAIN];
 * 
 * // Dynamic property access
 * const propertyName = KEY_EMAIL_FORWARD_LOG_DOMAIN;
 * const value = emailforwardlog[propertyName];
 * ```
 *
 * @see {@link EmailForwardLog} - The TypeScript type definition
 * @see {@link KEYS_EMAIL_FORWARD_LOG} - Array of all keys for this type
 */
export const KEY_EMAIL_FORWARD_LOG_DOMAIN: keyof EmailForwardLog = 'domain';
/**
 * Events
 *
 * List of processing events
 *
 * @type {array}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `events` property of EmailForwardLog objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = emailforwardlog[KEY_EMAIL_FORWARD_LOG_EVENTS];
 * 
 * // Dynamic property access
 * const propertyName = KEY_EMAIL_FORWARD_LOG_EVENTS;
 * const value = emailforwardlog[propertyName];
 * ```
 *
 * @see {@link EmailForwardLog} - The TypeScript type definition
 * @see {@link KEYS_EMAIL_FORWARD_LOG} - Array of all keys for this type
 */
export const KEY_EMAIL_FORWARD_LOG_EVENTS: keyof EmailForwardLog = 'events';
/**
 * Final Status
 *
 * Final status of the email (QUEUED, DELIVERED, REFUSED, SOFT-BOUNCE, HARD-BOUNCE)
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `final_status` property of EmailForwardLog objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = emailforwardlog[KEY_EMAIL_FORWARD_LOG_FINAL_STATUS];
 * 
 * // Dynamic property access
 * const propertyName = KEY_EMAIL_FORWARD_LOG_FINAL_STATUS;
 * const value = emailforwardlog[propertyName];
 * ```
 *
 * @see {@link EmailForwardLog} - The TypeScript type definition
 * @see {@link KEYS_EMAIL_FORWARD_LOG} - Array of all keys for this type
 */
export const KEY_EMAIL_FORWARD_LOG_FINAL_STATUS: keyof EmailForwardLog = 'final_status';
/**
 * Forward Email
 *
 * Forward destination email address
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `forward_email` property of EmailForwardLog objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = emailforwardlog[KEY_EMAIL_FORWARD_LOG_FORWARD_EMAIL];
 * 
 * // Dynamic property access
 * const propertyName = KEY_EMAIL_FORWARD_LOG_FORWARD_EMAIL;
 * const value = emailforwardlog[propertyName];
 * ```
 *
 * @see {@link EmailForwardLog} - The TypeScript type definition
 * @see {@link KEYS_EMAIL_FORWARD_LOG} - Array of all keys for this type
 */
export const KEY_EMAIL_FORWARD_LOG_FORWARD_EMAIL: keyof EmailForwardLog = 'forward_email';
/**
 * Forward Name
 *
 * Forward destination name
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `forward_name` property of EmailForwardLog objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = emailforwardlog[KEY_EMAIL_FORWARD_LOG_FORWARD_NAME];
 * 
 * // Dynamic property access
 * const propertyName = KEY_EMAIL_FORWARD_LOG_FORWARD_NAME;
 * const value = emailforwardlog[propertyName];
 * ```
 *
 * @see {@link EmailForwardLog} - The TypeScript type definition
 * @see {@link KEYS_EMAIL_FORWARD_LOG} - Array of all keys for this type
 */
export const KEY_EMAIL_FORWARD_LOG_FORWARD_NAME: keyof EmailForwardLog = 'forward_name';
/**
 * Hostname
 *
 * Hostname that received the email
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `hostname` property of EmailForwardLog objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = emailforwardlog[KEY_EMAIL_FORWARD_LOG_HOSTNAME];
 * 
 * // Dynamic property access
 * const propertyName = KEY_EMAIL_FORWARD_LOG_HOSTNAME;
 * const value = emailforwardlog[propertyName];
 * ```
 *
 * @see {@link EmailForwardLog} - The TypeScript type definition
 * @see {@link KEYS_EMAIL_FORWARD_LOG} - Array of all keys for this type
 */
export const KEY_EMAIL_FORWARD_LOG_HOSTNAME: keyof EmailForwardLog = 'hostname';
/**
 * Log Id
 *
 * Unique ID of the log from ImprovMX
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `log_id` property of EmailForwardLog objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = emailforwardlog[KEY_EMAIL_FORWARD_LOG_LOG_ID];
 * 
 * // Dynamic property access
 * const propertyName = KEY_EMAIL_FORWARD_LOG_LOG_ID;
 * const value = emailforwardlog[propertyName];
 * ```
 *
 * @see {@link EmailForwardLog} - The TypeScript type definition
 * @see {@link KEYS_EMAIL_FORWARD_LOG} - Array of all keys for this type
 */
export const KEY_EMAIL_FORWARD_LOG_LOG_ID: keyof EmailForwardLog = 'log_id';
/**
 * Message Id
 *
 * Email message ID
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `message_id` property of EmailForwardLog objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = emailforwardlog[KEY_EMAIL_FORWARD_LOG_MESSAGE_ID];
 * 
 * // Dynamic property access
 * const propertyName = KEY_EMAIL_FORWARD_LOG_MESSAGE_ID;
 * const value = emailforwardlog[propertyName];
 * ```
 *
 * @see {@link EmailForwardLog} - The TypeScript type definition
 * @see {@link KEYS_EMAIL_FORWARD_LOG} - Array of all keys for this type
 */
export const KEY_EMAIL_FORWARD_LOG_MESSAGE_ID: keyof EmailForwardLog = 'message_id';
/**
 * Recipient Email
 *
 * Recipient email address (the alias)
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `recipient_email` property of EmailForwardLog objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = emailforwardlog[KEY_EMAIL_FORWARD_LOG_RECIPIENT_EMAIL];
 * 
 * // Dynamic property access
 * const propertyName = KEY_EMAIL_FORWARD_LOG_RECIPIENT_EMAIL;
 * const value = emailforwardlog[propertyName];
 * ```
 *
 * @see {@link EmailForwardLog} - The TypeScript type definition
 * @see {@link KEYS_EMAIL_FORWARD_LOG} - Array of all keys for this type
 */
export const KEY_EMAIL_FORWARD_LOG_RECIPIENT_EMAIL: keyof EmailForwardLog = 'recipient_email';
/**
 * Recipient Name
 *
 * Recipient name
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `recipient_name` property of EmailForwardLog objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = emailforwardlog[KEY_EMAIL_FORWARD_LOG_RECIPIENT_NAME];
 * 
 * // Dynamic property access
 * const propertyName = KEY_EMAIL_FORWARD_LOG_RECIPIENT_NAME;
 * const value = emailforwardlog[propertyName];
 * ```
 *
 * @see {@link EmailForwardLog} - The TypeScript type definition
 * @see {@link KEYS_EMAIL_FORWARD_LOG} - Array of all keys for this type
 */
export const KEY_EMAIL_FORWARD_LOG_RECIPIENT_NAME: keyof EmailForwardLog = 'recipient_name';
/**
 * Sender Email
 *
 * Sender email address
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `sender_email` property of EmailForwardLog objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = emailforwardlog[KEY_EMAIL_FORWARD_LOG_SENDER_EMAIL];
 * 
 * // Dynamic property access
 * const propertyName = KEY_EMAIL_FORWARD_LOG_SENDER_EMAIL;
 * const value = emailforwardlog[propertyName];
 * ```
 *
 * @see {@link EmailForwardLog} - The TypeScript type definition
 * @see {@link KEYS_EMAIL_FORWARD_LOG} - Array of all keys for this type
 */
export const KEY_EMAIL_FORWARD_LOG_SENDER_EMAIL: keyof EmailForwardLog = 'sender_email';
/**
 * Sender Name
 *
 * Sender name
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `sender_name` property of EmailForwardLog objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = emailforwardlog[KEY_EMAIL_FORWARD_LOG_SENDER_NAME];
 * 
 * // Dynamic property access
 * const propertyName = KEY_EMAIL_FORWARD_LOG_SENDER_NAME;
 * const value = emailforwardlog[propertyName];
 * ```
 *
 * @see {@link EmailForwardLog} - The TypeScript type definition
 * @see {@link KEYS_EMAIL_FORWARD_LOG} - Array of all keys for this type
 */
export const KEY_EMAIL_FORWARD_LOG_SENDER_NAME: keyof EmailForwardLog = 'sender_name';
/**
 * Subject
 *
 * Email subject
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `subject` property of EmailForwardLog objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = emailforwardlog[KEY_EMAIL_FORWARD_LOG_SUBJECT];
 * 
 * // Dynamic property access
 * const propertyName = KEY_EMAIL_FORWARD_LOG_SUBJECT;
 * const value = emailforwardlog[propertyName];
 * ```
 *
 * @see {@link EmailForwardLog} - The TypeScript type definition
 * @see {@link KEYS_EMAIL_FORWARD_LOG} - Array of all keys for this type
 */
export const KEY_EMAIL_FORWARD_LOG_SUBJECT: keyof EmailForwardLog = 'subject';
/**
 * Synced On
 *
 * Timestamp when record was synced to ClickHouse
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `synced_on` property of EmailForwardLog objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = emailforwardlog[KEY_EMAIL_FORWARD_LOG_SYNCED_ON];
 * 
 * // Dynamic property access
 * const propertyName = KEY_EMAIL_FORWARD_LOG_SYNCED_ON;
 * const value = emailforwardlog[propertyName];
 * ```
 *
 * @see {@link EmailForwardLog} - The TypeScript type definition
 * @see {@link KEYS_EMAIL_FORWARD_LOG} - Array of all keys for this type
 */
export const KEY_EMAIL_FORWARD_LOG_SYNCED_ON: keyof EmailForwardLog = 'synced_on';
/**
 * Transport
 *
 * Transport method (mx or smtp)
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `transport` property of EmailForwardLog objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = emailforwardlog[KEY_EMAIL_FORWARD_LOG_TRANSPORT];
 * 
 * // Dynamic property access
 * const propertyName = KEY_EMAIL_FORWARD_LOG_TRANSPORT;
 * const value = emailforwardlog[propertyName];
 * ```
 *
 * @see {@link EmailForwardLog} - The TypeScript type definition
 * @see {@link KEYS_EMAIL_FORWARD_LOG} - Array of all keys for this type
 */
export const KEY_EMAIL_FORWARD_LOG_TRANSPORT: keyof EmailForwardLog = 'transport';

/**
 * Array of all EmailForwardLog property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for EmailForwardLog objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all keys
 * for (const key of KEYS_EMAIL_FORWARD_LOG) {
 *   console.log(`Property: ${key}, Value: ${emailforwardlog[key]}`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_EMAIL_FORWARD_LOG.includes(someKey);
 * ```
 *
 * @see {@link EmailForwardLog} - The TypeScript type definition
 */
export const KEYS_EMAIL_FORWARD_LOG = [
  KEY_EMAIL_FORWARD_LOG_CREATED_ON,
  KEY_EMAIL_FORWARD_LOG_DOMAIN,
  KEY_EMAIL_FORWARD_LOG_EVENTS,
  KEY_EMAIL_FORWARD_LOG_FINAL_STATUS,
  KEY_EMAIL_FORWARD_LOG_FORWARD_EMAIL,
  KEY_EMAIL_FORWARD_LOG_FORWARD_NAME,
  KEY_EMAIL_FORWARD_LOG_HOSTNAME,
  KEY_EMAIL_FORWARD_LOG_LOG_ID,
  KEY_EMAIL_FORWARD_LOG_MESSAGE_ID,
  KEY_EMAIL_FORWARD_LOG_RECIPIENT_EMAIL,
  KEY_EMAIL_FORWARD_LOG_RECIPIENT_NAME,
  KEY_EMAIL_FORWARD_LOG_SENDER_EMAIL,
  KEY_EMAIL_FORWARD_LOG_SENDER_NAME,
  KEY_EMAIL_FORWARD_LOG_SUBJECT,
  KEY_EMAIL_FORWARD_LOG_SYNCED_ON,
  KEY_EMAIL_FORWARD_LOG_TRANSPORT,
] as const satisfies (keyof EmailForwardLog)[];

/**
 * Code
 *
 * Event status code
 *
 * @type {integer}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `code` property of EmailForwardLogEvent objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = emailforwardlogevent[KEY_EMAIL_FORWARD_LOG_EVENT_CODE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_EMAIL_FORWARD_LOG_EVENT_CODE;
 * const value = emailforwardlogevent[propertyName];
 * ```
 *
 * @see {@link EmailForwardLogEvent} - The TypeScript type definition
 * @see {@link KEYS_EMAIL_FORWARD_LOG_EVENT} - Array of all keys for this type
 */
export const KEY_EMAIL_FORWARD_LOG_EVENT_CODE: keyof EmailForwardLogEvent = 'code';
/**
 * Created
 *
 * Timestamp when the event occurred
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `created` property of EmailForwardLogEvent objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = emailforwardlogevent[KEY_EMAIL_FORWARD_LOG_EVENT_CREATED];
 * 
 * // Dynamic property access
 * const propertyName = KEY_EMAIL_FORWARD_LOG_EVENT_CREATED;
 * const value = emailforwardlogevent[propertyName];
 * ```
 *
 * @see {@link EmailForwardLogEvent} - The TypeScript type definition
 * @see {@link KEYS_EMAIL_FORWARD_LOG_EVENT} - Array of all keys for this type
 */
export const KEY_EMAIL_FORWARD_LOG_EVENT_CREATED: keyof EmailForwardLogEvent = 'created';
/**
 * Id
 *
 * Event ID
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `id` property of EmailForwardLogEvent objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = emailforwardlogevent[KEY_EMAIL_FORWARD_LOG_EVENT_ID];
 * 
 * // Dynamic property access
 * const propertyName = KEY_EMAIL_FORWARD_LOG_EVENT_ID;
 * const value = emailforwardlogevent[propertyName];
 * ```
 *
 * @see {@link EmailForwardLogEvent} - The TypeScript type definition
 * @see {@link KEYS_EMAIL_FORWARD_LOG_EVENT} - Array of all keys for this type
 */
export const KEY_EMAIL_FORWARD_LOG_EVENT_ID: keyof EmailForwardLogEvent = 'id';
/**
 * Local
 *
 * ImprovMX server that processed the event
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `local` property of EmailForwardLogEvent objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = emailforwardlogevent[KEY_EMAIL_FORWARD_LOG_EVENT_LOCAL];
 * 
 * // Dynamic property access
 * const propertyName = KEY_EMAIL_FORWARD_LOG_EVENT_LOCAL;
 * const value = emailforwardlogevent[propertyName];
 * ```
 *
 * @see {@link EmailForwardLogEvent} - The TypeScript type definition
 * @see {@link KEYS_EMAIL_FORWARD_LOG_EVENT} - Array of all keys for this type
 */
export const KEY_EMAIL_FORWARD_LOG_EVENT_LOCAL: keyof EmailForwardLogEvent = 'local';
/**
 * Message
 *
 * Event message
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `message` property of EmailForwardLogEvent objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = emailforwardlogevent[KEY_EMAIL_FORWARD_LOG_EVENT_MESSAGE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_EMAIL_FORWARD_LOG_EVENT_MESSAGE;
 * const value = emailforwardlogevent[propertyName];
 * ```
 *
 * @see {@link EmailForwardLogEvent} - The TypeScript type definition
 * @see {@link KEYS_EMAIL_FORWARD_LOG_EVENT} - Array of all keys for this type
 */
export const KEY_EMAIL_FORWARD_LOG_EVENT_MESSAGE: keyof EmailForwardLogEvent = 'message';
/**
 * Server
 *
 * Server that processed the event
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `server` property of EmailForwardLogEvent objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = emailforwardlogevent[KEY_EMAIL_FORWARD_LOG_EVENT_SERVER];
 * 
 * // Dynamic property access
 * const propertyName = KEY_EMAIL_FORWARD_LOG_EVENT_SERVER;
 * const value = emailforwardlogevent[propertyName];
 * ```
 *
 * @see {@link EmailForwardLogEvent} - The TypeScript type definition
 * @see {@link KEYS_EMAIL_FORWARD_LOG_EVENT} - Array of all keys for this type
 */
export const KEY_EMAIL_FORWARD_LOG_EVENT_SERVER: keyof EmailForwardLogEvent = 'server';
/**
 * Status
 *
 * Event status (QUEUED, DELIVERED, REFUSED, SOFT-BOUNCE, HARD-BOUNCE)
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `status` property of EmailForwardLogEvent objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = emailforwardlogevent[KEY_EMAIL_FORWARD_LOG_EVENT_STATUS];
 * 
 * // Dynamic property access
 * const propertyName = KEY_EMAIL_FORWARD_LOG_EVENT_STATUS;
 * const value = emailforwardlogevent[propertyName];
 * ```
 *
 * @see {@link EmailForwardLogEvent} - The TypeScript type definition
 * @see {@link KEYS_EMAIL_FORWARD_LOG_EVENT} - Array of all keys for this type
 */
export const KEY_EMAIL_FORWARD_LOG_EVENT_STATUS: keyof EmailForwardLogEvent = 'status';

/**
 * Array of all EmailForwardLogEvent property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for EmailForwardLogEvent objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all keys
 * for (const key of KEYS_EMAIL_FORWARD_LOG_EVENT) {
 *   console.log(`Property: ${key}, Value: ${emailforwardlogevent[key]}`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_EMAIL_FORWARD_LOG_EVENT.includes(someKey);
 * ```
 *
 * @see {@link EmailForwardLogEvent} - The TypeScript type definition
 */
export const KEYS_EMAIL_FORWARD_LOG_EVENT = [
  KEY_EMAIL_FORWARD_LOG_EVENT_CODE,
  KEY_EMAIL_FORWARD_LOG_EVENT_CREATED,
  KEY_EMAIL_FORWARD_LOG_EVENT_ID,
  KEY_EMAIL_FORWARD_LOG_EVENT_LOCAL,
  KEY_EMAIL_FORWARD_LOG_EVENT_MESSAGE,
  KEY_EMAIL_FORWARD_LOG_EVENT_SERVER,
  KEY_EMAIL_FORWARD_LOG_EVENT_STATUS,
] as const satisfies (keyof EmailForwardLogEvent)[];

/**
 * Aliases
 *
 *
 * @type {array}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `aliases` property of EmailForward objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = emailforward[KEY_EMAIL_FORWARD_ALIASES];
 * 
 * // Dynamic property access
 * const propertyName = KEY_EMAIL_FORWARD_ALIASES;
 * const value = emailforward[propertyName];
 * ```
 *
 * @see {@link EmailForward} - The TypeScript type definition
 * @see {@link KEYS_EMAIL_FORWARD} - Array of all keys for this type
 */
export const KEY_EMAIL_FORWARD_ALIASES: keyof EmailForward = 'aliases';
/**
 * Created On
 *
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `created_on` property of EmailForward objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = emailforward[KEY_EMAIL_FORWARD_CREATED_ON];
 * 
 * // Dynamic property access
 * const propertyName = KEY_EMAIL_FORWARD_CREATED_ON;
 * const value = emailforward[propertyName];
 * ```
 *
 * @see {@link EmailForward} - The TypeScript type definition
 * @see {@link KEYS_EMAIL_FORWARD} - Array of all keys for this type
 */
export const KEY_EMAIL_FORWARD_CREATED_ON: keyof EmailForward = 'created_on';
/**
 * Email Forward Id
 *
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `email_forward_id` property of EmailForward objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = emailforward[KEY_EMAIL_FORWARD_EMAIL_FORWARD_ID];
 * 
 * // Dynamic property access
 * const propertyName = KEY_EMAIL_FORWARD_EMAIL_FORWARD_ID;
 * const value = emailforward[propertyName];
 * ```
 *
 * @see {@link EmailForward} - The TypeScript type definition
 * @see {@link KEYS_EMAIL_FORWARD} - Array of all keys for this type
 */
export const KEY_EMAIL_FORWARD_EMAIL_FORWARD_ID: keyof EmailForward = 'email_forward_id';
/**
 * Enabled
 *
 *
 * @type {boolean}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `enabled` property of EmailForward objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = emailforward[KEY_EMAIL_FORWARD_ENABLED];
 * 
 * // Dynamic property access
 * const propertyName = KEY_EMAIL_FORWARD_ENABLED;
 * const value = emailforward[propertyName];
 * ```
 *
 * @see {@link EmailForward} - The TypeScript type definition
 * @see {@link KEYS_EMAIL_FORWARD} - Array of all keys for this type
 */
export const KEY_EMAIL_FORWARD_ENABLED: keyof EmailForward = 'enabled';
/**
 * Hostname
 *
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `hostname` property of EmailForward objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = emailforward[KEY_EMAIL_FORWARD_HOSTNAME];
 * 
 * // Dynamic property access
 * const propertyName = KEY_EMAIL_FORWARD_HOSTNAME;
 * const value = emailforward[propertyName];
 * ```
 *
 * @see {@link EmailForward} - The TypeScript type definition
 * @see {@link KEYS_EMAIL_FORWARD} - Array of all keys for this type
 */
export const KEY_EMAIL_FORWARD_HOSTNAME: keyof EmailForward = 'hostname';
/**
 * Updated On
 *
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `updated_on` property of EmailForward objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = emailforward[KEY_EMAIL_FORWARD_UPDATED_ON];
 * 
 * // Dynamic property access
 * const propertyName = KEY_EMAIL_FORWARD_UPDATED_ON;
 * const value = emailforward[propertyName];
 * ```
 *
 * @see {@link EmailForward} - The TypeScript type definition
 * @see {@link KEYS_EMAIL_FORWARD} - Array of all keys for this type
 */
export const KEY_EMAIL_FORWARD_UPDATED_ON: keyof EmailForward = 'updated_on';

/**
 * Array of all EmailForward property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for EmailForward objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all keys
 * for (const key of KEYS_EMAIL_FORWARD) {
 *   console.log(`Property: ${key}, Value: ${emailforward[key]}`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_EMAIL_FORWARD.includes(someKey);
 * ```
 *
 * @see {@link EmailForward} - The TypeScript type definition
 */
export const KEYS_EMAIL_FORWARD = [
  KEY_EMAIL_FORWARD_ALIASES,
  KEY_EMAIL_FORWARD_CREATED_ON,
  KEY_EMAIL_FORWARD_EMAIL_FORWARD_ID,
  KEY_EMAIL_FORWARD_ENABLED,
  KEY_EMAIL_FORWARD_HOSTNAME,
  KEY_EMAIL_FORWARD_UPDATED_ON,
] as const satisfies (keyof EmailForward)[];

/**
 * Email Forwards
 *
 *
 * @type {array}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `email_forwards` property of EmailForwardZone objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = emailforwardzone[KEY_EMAIL_FORWARD_ZONE_EMAIL_FORWARDS];
 * 
 * // Dynamic property access
 * const propertyName = KEY_EMAIL_FORWARD_ZONE_EMAIL_FORWARDS;
 * const value = emailforwardzone[propertyName];
 * ```
 *
 * @see {@link EmailForwardZone} - The TypeScript type definition
 * @see {@link KEYS_EMAIL_FORWARD_ZONE} - Array of all keys for this type
 */
export const KEY_EMAIL_FORWARD_ZONE_EMAIL_FORWARDS: keyof EmailForwardZone = 'email_forwards';
/**
 * Zone Id
 *
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `zone_id` property of EmailForwardZone objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = emailforwardzone[KEY_EMAIL_FORWARD_ZONE_ZONE_ID];
 * 
 * // Dynamic property access
 * const propertyName = KEY_EMAIL_FORWARD_ZONE_ZONE_ID;
 * const value = emailforwardzone[propertyName];
 * ```
 *
 * @see {@link EmailForwardZone} - The TypeScript type definition
 * @see {@link KEYS_EMAIL_FORWARD_ZONE} - Array of all keys for this type
 */
export const KEY_EMAIL_FORWARD_ZONE_ZONE_ID: keyof EmailForwardZone = 'zone_id';
/**
 * Zone Name
 *
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `zone_name` property of EmailForwardZone objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = emailforwardzone[KEY_EMAIL_FORWARD_ZONE_ZONE_NAME];
 * 
 * // Dynamic property access
 * const propertyName = KEY_EMAIL_FORWARD_ZONE_ZONE_NAME;
 * const value = emailforwardzone[propertyName];
 * ```
 *
 * @see {@link EmailForwardZone} - The TypeScript type definition
 * @see {@link KEYS_EMAIL_FORWARD_ZONE} - Array of all keys for this type
 */
export const KEY_EMAIL_FORWARD_ZONE_ZONE_NAME: keyof EmailForwardZone = 'zone_name';

/**
 * Array of all EmailForwardZone property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for EmailForwardZone objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all keys
 * for (const key of KEYS_EMAIL_FORWARD_ZONE) {
 *   console.log(`Property: ${key}, Value: ${emailforwardzone[key]}`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_EMAIL_FORWARD_ZONE.includes(someKey);
 * ```
 *
 * @see {@link EmailForwardZone} - The TypeScript type definition
 */
export const KEYS_EMAIL_FORWARD_ZONE = [
  KEY_EMAIL_FORWARD_ZONE_EMAIL_FORWARDS,
  KEY_EMAIL_FORWARD_ZONE_ZONE_ID,
  KEY_EMAIL_FORWARD_ZONE_ZONE_NAME,
] as const satisfies (keyof EmailForwardZone)[];

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
export const KEY_EVENT_RESPONSE_EVENT_DATA: keyof EventResponse = 'event_data';
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
export const KEY_EVENT_RESPONSE_EVENT_ID: keyof EventResponse = 'event_id';
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
export const KEY_EVENT_RESPONSE_OBJECT_ID: keyof EventResponse = 'object_id';
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
export const KEY_EVENT_RESPONSE_OBJECT_TYPE: keyof EventResponse = 'object_type';
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
export const KEY_EVENT_RESPONSE_SUBTYPE: keyof EventResponse = 'subtype';
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
export const KEY_EVENT_RESPONSE_TYPE: keyof EventResponse = 'type';

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
export const KEY_EVENT_SCHEMA_ACKNOWLEDGED_ON: keyof EventSchema = 'acknowledged_on';
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
export const KEY_EVENT_SCHEMA_CREATED_ON: keyof EventSchema = 'created_on';
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
export const KEY_EVENT_SCHEMA_EVENT_DATA: keyof EventSchema = 'event_data';
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
export const KEY_EVENT_SCHEMA_EVENT_ID: keyof EventSchema = 'event_id';
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
export const KEY_EVENT_SCHEMA_MESSAGE_QUEUE_ID: keyof EventSchema = 'message_queue_id';
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
export const KEY_EVENT_SCHEMA_OBJECT_ID: keyof EventSchema = 'object_id';
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
export const KEY_EVENT_SCHEMA_OBJECT_TYPE: keyof EventSchema = 'object_type';
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
export const KEY_EVENT_SCHEMA_SOURCE: keyof EventSchema = 'source';
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
export const KEY_EVENT_SCHEMA_SOURCE_EVENT_ID: keyof EventSchema = 'source_event_id';
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
export const KEY_EVENT_SCHEMA_SUBTYPE: keyof EventSchema = 'subtype';
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
export const KEY_EVENT_SCHEMA_TARGET: keyof EventSchema = 'target';
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
export const KEY_EVENT_SCHEMA_TYPE: keyof EventSchema = 'type';

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
export const KEY_GENERAL_AVAILABILITY_BASE_START_DATE: keyof GeneralAvailabilityBase = 'start_date';

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
 * Prices
 *
 * List of prices
 *
 * @type {array}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `prices` property of GetPrices objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = getprices[KEY_GET_PRICES_PRICES];
 * 
 * // Dynamic property access
 * const propertyName = KEY_GET_PRICES_PRICES;
 * const value = getprices[propertyName];
 * ```
 *
 * @see {@link GetPrices} - The TypeScript type definition
 * @see {@link KEYS_GET_PRICES} - Array of all keys for this type
 */
export const KEY_GET_PRICES_PRICES: keyof GetPrices = 'prices';

/**
 * Array of all GetPrices property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for GetPrices objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all keys
 * for (const key of KEYS_GET_PRICES) {
 *   console.log(`Property: ${key}, Value: ${getprices[key]}`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_GET_PRICES.includes(someKey);
 * ```
 *
 * @see {@link GetPrices} - The TypeScript type definition
 */
export const KEYS_GET_PRICES = [
  KEY_GET_PRICES_PRICES,
] as const satisfies (keyof GetPrices)[];

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
export const KEY_H_T_T_P_VALIDATION_ERROR_ERRORS: keyof HTTPValidationError = 'errors';
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
export const KEY_H_T_T_P_VALIDATION_ERROR_STATUS: keyof HTTPValidationError = 'status';
/**
 * Problem title
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
export const KEY_H_T_T_P_VALIDATION_ERROR_TITLE: keyof HTTPValidationError = 'title';
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
export const KEY_H_T_T_P_VALIDATION_ERROR_TYPE: keyof HTTPValidationError = 'type';

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
 * Created On
 *
 * The date/time the entry was created on
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `created_on` property of HostSchema objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = hostschema[KEY_HOST_SCHEMA_CREATED_ON];
 * 
 * // Dynamic property access
 * const propertyName = KEY_HOST_SCHEMA_CREATED_ON;
 * const value = hostschema[propertyName];
 * ```
 *
 * @see {@link HostSchema} - The TypeScript type definition
 * @see {@link KEYS_HOST_SCHEMA} - Array of all keys for this type
 */
export const KEY_HOST_SCHEMA_CREATED_ON: keyof HostSchema = 'created_on';
/**
 * Domain Id
 *
 * The domain that the host object belongs to
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `domain_id` property of HostSchema objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = hostschema[KEY_HOST_SCHEMA_DOMAIN_ID];
 * 
 * // Dynamic property access
 * const propertyName = KEY_HOST_SCHEMA_DOMAIN_ID;
 * const value = hostschema[propertyName];
 * ```
 *
 * @see {@link HostSchema} - The TypeScript type definition
 * @see {@link KEYS_HOST_SCHEMA} - Array of all keys for this type
 */
export const KEY_HOST_SCHEMA_DOMAIN_ID: keyof HostSchema = 'domain_id';
/**
 * Host Id
 *
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `host_id` property of HostSchema objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = hostschema[KEY_HOST_SCHEMA_HOST_ID];
 * 
 * // Dynamic property access
 * const propertyName = KEY_HOST_SCHEMA_HOST_ID;
 * const value = hostschema[propertyName];
 * ```
 *
 * @see {@link HostSchema} - The TypeScript type definition
 * @see {@link KEYS_HOST_SCHEMA} - Array of all keys for this type
 */
export const KEY_HOST_SCHEMA_HOST_ID: keyof HostSchema = 'host_id';
/**
 * Hostname
 *
 * Hostname of the host object
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `hostname` property of HostSchema objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = hostschema[KEY_HOST_SCHEMA_HOSTNAME];
 * 
 * // Dynamic property access
 * const propertyName = KEY_HOST_SCHEMA_HOSTNAME;
 * const value = hostschema[propertyName];
 * ```
 *
 * @see {@link HostSchema} - The TypeScript type definition
 * @see {@link KEYS_HOST_SCHEMA} - Array of all keys for this type
 */
export const KEY_HOST_SCHEMA_HOSTNAME: keyof HostSchema = 'hostname';
/**
 * Registry Account Id
 *
 * The registry account that the host object belongs to
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `registry_account_id` property of HostSchema objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = hostschema[KEY_HOST_SCHEMA_REGISTRY_ACCOUNT_ID];
 * 
 * // Dynamic property access
 * const propertyName = KEY_HOST_SCHEMA_REGISTRY_ACCOUNT_ID;
 * const value = hostschema[propertyName];
 * ```
 *
 * @see {@link HostSchema} - The TypeScript type definition
 * @see {@link KEYS_HOST_SCHEMA} - Array of all keys for this type
 */
export const KEY_HOST_SCHEMA_REGISTRY_ACCOUNT_ID: keyof HostSchema = 'registry_account_id';
/**
 * status property
 *
 * Status of the host object
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `status` property of HostSchema objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = hostschema[KEY_HOST_SCHEMA_STATUS];
 * 
 * // Dynamic property access
 * const propertyName = KEY_HOST_SCHEMA_STATUS;
 * const value = hostschema[propertyName];
 * ```
 *
 * @see {@link HostSchema} - The TypeScript type definition
 * @see {@link KEYS_HOST_SCHEMA} - Array of all keys for this type
 */
export const KEY_HOST_SCHEMA_STATUS: keyof HostSchema = 'status';
/**
 * Updated On
 *
 * The date/time the entry was last updated on
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `updated_on` property of HostSchema objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = hostschema[KEY_HOST_SCHEMA_UPDATED_ON];
 * 
 * // Dynamic property access
 * const propertyName = KEY_HOST_SCHEMA_UPDATED_ON;
 * const value = hostschema[propertyName];
 * ```
 *
 * @see {@link HostSchema} - The TypeScript type definition
 * @see {@link KEYS_HOST_SCHEMA} - Array of all keys for this type
 */
export const KEY_HOST_SCHEMA_UPDATED_ON: keyof HostSchema = 'updated_on';

/**
 * Array of all HostSchema property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for HostSchema objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all keys
 * for (const key of KEYS_HOST_SCHEMA) {
 *   console.log(`Property: ${key}, Value: ${hostschema[key]}`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_HOST_SCHEMA.includes(someKey);
 * ```
 *
 * @see {@link HostSchema} - The TypeScript type definition
 */
export const KEYS_HOST_SCHEMA = [
  KEY_HOST_SCHEMA_CREATED_ON,
  KEY_HOST_SCHEMA_DOMAIN_ID,
  KEY_HOST_SCHEMA_HOST_ID,
  KEY_HOST_SCHEMA_HOSTNAME,
  KEY_HOST_SCHEMA_REGISTRY_ACCOUNT_ID,
  KEY_HOST_SCHEMA_STATUS,
  KEY_HOST_SCHEMA_UPDATED_ON,
] as const satisfies (keyof HostSchema)[];

/**
 * redirect_code property
 *
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `redirect_code` property of HttpRedirectList objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = httpredirectlist[KEY_HTTP_REDIRECT_LIST_REDIRECT_CODE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_HTTP_REDIRECT_LIST_REDIRECT_CODE;
 * const value = httpredirectlist[propertyName];
 * ```
 *
 * @see {@link HttpRedirectList} - The TypeScript type definition
 * @see {@link KEYS_HTTP_REDIRECT_LIST} - Array of all keys for this type
 */
export const KEY_HTTP_REDIRECT_LIST_REDIRECT_CODE: keyof HttpRedirectList = 'redirect_code';
/**
 * Request Hostname
 *
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `request_hostname` property of HttpRedirectList objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = httpredirectlist[KEY_HTTP_REDIRECT_LIST_REQUEST_HOSTNAME];
 * 
 * // Dynamic property access
 * const propertyName = KEY_HTTP_REDIRECT_LIST_REQUEST_HOSTNAME;
 * const value = httpredirectlist[propertyName];
 * ```
 *
 * @see {@link HttpRedirectList} - The TypeScript type definition
 * @see {@link KEYS_HTTP_REDIRECT_LIST} - Array of all keys for this type
 */
export const KEY_HTTP_REDIRECT_LIST_REQUEST_HOSTNAME: keyof HttpRedirectList = 'request_hostname';
/**
 * Request Path
 *
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `request_path` property of HttpRedirectList objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = httpredirectlist[KEY_HTTP_REDIRECT_LIST_REQUEST_PATH];
 * 
 * // Dynamic property access
 * const propertyName = KEY_HTTP_REDIRECT_LIST_REQUEST_PATH;
 * const value = httpredirectlist[propertyName];
 * ```
 *
 * @see {@link HttpRedirectList} - The TypeScript type definition
 * @see {@link KEYS_HTTP_REDIRECT_LIST} - Array of all keys for this type
 */
export const KEY_HTTP_REDIRECT_LIST_REQUEST_PATH: keyof HttpRedirectList = 'request_path';
/**
 * request_protocol property
 *
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `request_protocol` property of HttpRedirectList objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = httpredirectlist[KEY_HTTP_REDIRECT_LIST_REQUEST_PROTOCOL];
 * 
 * // Dynamic property access
 * const propertyName = KEY_HTTP_REDIRECT_LIST_REQUEST_PROTOCOL;
 * const value = httpredirectlist[propertyName];
 * ```
 *
 * @see {@link HttpRedirectList} - The TypeScript type definition
 * @see {@link KEYS_HTTP_REDIRECT_LIST} - Array of all keys for this type
 */
export const KEY_HTTP_REDIRECT_LIST_REQUEST_PROTOCOL: keyof HttpRedirectList = 'request_protocol';
/**
 * Request Subdomain
 *
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `request_subdomain` property of HttpRedirectList objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = httpredirectlist[KEY_HTTP_REDIRECT_LIST_REQUEST_SUBDOMAIN];
 * 
 * // Dynamic property access
 * const propertyName = KEY_HTTP_REDIRECT_LIST_REQUEST_SUBDOMAIN;
 * const value = httpredirectlist[propertyName];
 * ```
 *
 * @see {@link HttpRedirectList} - The TypeScript type definition
 * @see {@link KEYS_HTTP_REDIRECT_LIST} - Array of all keys for this type
 */
export const KEY_HTTP_REDIRECT_LIST_REQUEST_SUBDOMAIN: keyof HttpRedirectList = 'request_subdomain';
/**
 * Target Hostname
 *
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `target_hostname` property of HttpRedirectList objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = httpredirectlist[KEY_HTTP_REDIRECT_LIST_TARGET_HOSTNAME];
 * 
 * // Dynamic property access
 * const propertyName = KEY_HTTP_REDIRECT_LIST_TARGET_HOSTNAME;
 * const value = httpredirectlist[propertyName];
 * ```
 *
 * @see {@link HttpRedirectList} - The TypeScript type definition
 * @see {@link KEYS_HTTP_REDIRECT_LIST} - Array of all keys for this type
 */
export const KEY_HTTP_REDIRECT_LIST_TARGET_HOSTNAME: keyof HttpRedirectList = 'target_hostname';
/**
 * Target Path
 *
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `target_path` property of HttpRedirectList objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = httpredirectlist[KEY_HTTP_REDIRECT_LIST_TARGET_PATH];
 * 
 * // Dynamic property access
 * const propertyName = KEY_HTTP_REDIRECT_LIST_TARGET_PATH;
 * const value = httpredirectlist[propertyName];
 * ```
 *
 * @see {@link HttpRedirectList} - The TypeScript type definition
 * @see {@link KEYS_HTTP_REDIRECT_LIST} - Array of all keys for this type
 */
export const KEY_HTTP_REDIRECT_LIST_TARGET_PATH: keyof HttpRedirectList = 'target_path';
/**
 * target_protocol property
 *
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `target_protocol` property of HttpRedirectList objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = httpredirectlist[KEY_HTTP_REDIRECT_LIST_TARGET_PROTOCOL];
 * 
 * // Dynamic property access
 * const propertyName = KEY_HTTP_REDIRECT_LIST_TARGET_PROTOCOL;
 * const value = httpredirectlist[propertyName];
 * ```
 *
 * @see {@link HttpRedirectList} - The TypeScript type definition
 * @see {@link KEYS_HTTP_REDIRECT_LIST} - Array of all keys for this type
 */
export const KEY_HTTP_REDIRECT_LIST_TARGET_PROTOCOL: keyof HttpRedirectList = 'target_protocol';

/**
 * Array of all HttpRedirectList property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for HttpRedirectList objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all keys
 * for (const key of KEYS_HTTP_REDIRECT_LIST) {
 *   console.log(`Property: ${key}, Value: ${httpredirectlist[key]}`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_HTTP_REDIRECT_LIST.includes(someKey);
 * ```
 *
 * @see {@link HttpRedirectList} - The TypeScript type definition
 */
export const KEYS_HTTP_REDIRECT_LIST = [
  KEY_HTTP_REDIRECT_LIST_REDIRECT_CODE,
  KEY_HTTP_REDIRECT_LIST_REQUEST_HOSTNAME,
  KEY_HTTP_REDIRECT_LIST_REQUEST_PATH,
  KEY_HTTP_REDIRECT_LIST_REQUEST_PROTOCOL,
  KEY_HTTP_REDIRECT_LIST_REQUEST_SUBDOMAIN,
  KEY_HTTP_REDIRECT_LIST_TARGET_HOSTNAME,
  KEY_HTTP_REDIRECT_LIST_TARGET_PATH,
  KEY_HTTP_REDIRECT_LIST_TARGET_PROTOCOL,
] as const satisfies (keyof HttpRedirectList)[];

/**
 * Request Hostname
 *
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `request_hostname` property of HttpRedirectRemove objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = httpredirectremove[KEY_HTTP_REDIRECT_REMOVE_REQUEST_HOSTNAME];
 * 
 * // Dynamic property access
 * const propertyName = KEY_HTTP_REDIRECT_REMOVE_REQUEST_HOSTNAME;
 * const value = httpredirectremove[propertyName];
 * ```
 *
 * @see {@link HttpRedirectRemove} - The TypeScript type definition
 * @see {@link KEYS_HTTP_REDIRECT_REMOVE} - Array of all keys for this type
 */
export const KEY_HTTP_REDIRECT_REMOVE_REQUEST_HOSTNAME: keyof HttpRedirectRemove = 'request_hostname';
/**
 * Request Path
 *
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `request_path` property of HttpRedirectRemove objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = httpredirectremove[KEY_HTTP_REDIRECT_REMOVE_REQUEST_PATH];
 * 
 * // Dynamic property access
 * const propertyName = KEY_HTTP_REDIRECT_REMOVE_REQUEST_PATH;
 * const value = httpredirectremove[propertyName];
 * ```
 *
 * @see {@link HttpRedirectRemove} - The TypeScript type definition
 * @see {@link KEYS_HTTP_REDIRECT_REMOVE} - Array of all keys for this type
 */
export const KEY_HTTP_REDIRECT_REMOVE_REQUEST_PATH: keyof HttpRedirectRemove = 'request_path';
/**
 * request_protocol property
 *
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `request_protocol` property of HttpRedirectRemove objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = httpredirectremove[KEY_HTTP_REDIRECT_REMOVE_REQUEST_PROTOCOL];
 * 
 * // Dynamic property access
 * const propertyName = KEY_HTTP_REDIRECT_REMOVE_REQUEST_PROTOCOL;
 * const value = httpredirectremove[propertyName];
 * ```
 *
 * @see {@link HttpRedirectRemove} - The TypeScript type definition
 * @see {@link KEYS_HTTP_REDIRECT_REMOVE} - Array of all keys for this type
 */
export const KEY_HTTP_REDIRECT_REMOVE_REQUEST_PROTOCOL: keyof HttpRedirectRemove = 'request_protocol';
/**
 * Request Subdomain
 *
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `request_subdomain` property of HttpRedirectRemove objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = httpredirectremove[KEY_HTTP_REDIRECT_REMOVE_REQUEST_SUBDOMAIN];
 * 
 * // Dynamic property access
 * const propertyName = KEY_HTTP_REDIRECT_REMOVE_REQUEST_SUBDOMAIN;
 * const value = httpredirectremove[propertyName];
 * ```
 *
 * @see {@link HttpRedirectRemove} - The TypeScript type definition
 * @see {@link KEYS_HTTP_REDIRECT_REMOVE} - Array of all keys for this type
 */
export const KEY_HTTP_REDIRECT_REMOVE_REQUEST_SUBDOMAIN: keyof HttpRedirectRemove = 'request_subdomain';

/**
 * Array of all HttpRedirectRemove property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for HttpRedirectRemove objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all keys
 * for (const key of KEYS_HTTP_REDIRECT_REMOVE) {
 *   console.log(`Property: ${key}, Value: ${httpredirectremove[key]}`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_HTTP_REDIRECT_REMOVE.includes(someKey);
 * ```
 *
 * @see {@link HttpRedirectRemove} - The TypeScript type definition
 */
export const KEYS_HTTP_REDIRECT_REMOVE = [
  KEY_HTTP_REDIRECT_REMOVE_REQUEST_HOSTNAME,
  KEY_HTTP_REDIRECT_REMOVE_REQUEST_PATH,
  KEY_HTTP_REDIRECT_REMOVE_REQUEST_PROTOCOL,
  KEY_HTTP_REDIRECT_REMOVE_REQUEST_SUBDOMAIN,
] as const satisfies (keyof HttpRedirectRemove)[];

/**
 * redirect_code property
 *
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `redirect_code` property of HttpRedirectRequest objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = httpredirectrequest[KEY_HTTP_REDIRECT_REQUEST_REDIRECT_CODE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_HTTP_REDIRECT_REQUEST_REDIRECT_CODE;
 * const value = httpredirectrequest[propertyName];
 * ```
 *
 * @see {@link HttpRedirectRequest} - The TypeScript type definition
 * @see {@link KEYS_HTTP_REDIRECT_REQUEST} - Array of all keys for this type
 */
export const KEY_HTTP_REDIRECT_REQUEST_REDIRECT_CODE: keyof HttpRedirectRequest = 'redirect_code';
/**
 * Request Path
 *
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `request_path` property of HttpRedirectRequest objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = httpredirectrequest[KEY_HTTP_REDIRECT_REQUEST_REQUEST_PATH];
 * 
 * // Dynamic property access
 * const propertyName = KEY_HTTP_REDIRECT_REQUEST_REQUEST_PATH;
 * const value = httpredirectrequest[propertyName];
 * ```
 *
 * @see {@link HttpRedirectRequest} - The TypeScript type definition
 * @see {@link KEYS_HTTP_REDIRECT_REQUEST} - Array of all keys for this type
 */
export const KEY_HTTP_REDIRECT_REQUEST_REQUEST_PATH: keyof HttpRedirectRequest = 'request_path';
/**
 * Target Hostname
 *
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `target_hostname` property of HttpRedirectRequest objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = httpredirectrequest[KEY_HTTP_REDIRECT_REQUEST_TARGET_HOSTNAME];
 * 
 * // Dynamic property access
 * const propertyName = KEY_HTTP_REDIRECT_REQUEST_TARGET_HOSTNAME;
 * const value = httpredirectrequest[propertyName];
 * ```
 *
 * @see {@link HttpRedirectRequest} - The TypeScript type definition
 * @see {@link KEYS_HTTP_REDIRECT_REQUEST} - Array of all keys for this type
 */
export const KEY_HTTP_REDIRECT_REQUEST_TARGET_HOSTNAME: keyof HttpRedirectRequest = 'target_hostname';
/**
 * Target Path
 *
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `target_path` property of HttpRedirectRequest objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = httpredirectrequest[KEY_HTTP_REDIRECT_REQUEST_TARGET_PATH];
 * 
 * // Dynamic property access
 * const propertyName = KEY_HTTP_REDIRECT_REQUEST_TARGET_PATH;
 * const value = httpredirectrequest[propertyName];
 * ```
 *
 * @see {@link HttpRedirectRequest} - The TypeScript type definition
 * @see {@link KEYS_HTTP_REDIRECT_REQUEST} - Array of all keys for this type
 */
export const KEY_HTTP_REDIRECT_REQUEST_TARGET_PATH: keyof HttpRedirectRequest = 'target_path';
/**
 * target_protocol property
 *
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `target_protocol` property of HttpRedirectRequest objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = httpredirectrequest[KEY_HTTP_REDIRECT_REQUEST_TARGET_PROTOCOL];
 * 
 * // Dynamic property access
 * const propertyName = KEY_HTTP_REDIRECT_REQUEST_TARGET_PROTOCOL;
 * const value = httpredirectrequest[propertyName];
 * ```
 *
 * @see {@link HttpRedirectRequest} - The TypeScript type definition
 * @see {@link KEYS_HTTP_REDIRECT_REQUEST} - Array of all keys for this type
 */
export const KEY_HTTP_REDIRECT_REQUEST_TARGET_PROTOCOL: keyof HttpRedirectRequest = 'target_protocol';

/**
 * Array of all HttpRedirectRequest property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for HttpRedirectRequest objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all keys
 * for (const key of KEYS_HTTP_REDIRECT_REQUEST) {
 *   console.log(`Property: ${key}, Value: ${httpredirectrequest[key]}`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_HTTP_REDIRECT_REQUEST.includes(someKey);
 * ```
 *
 * @see {@link HttpRedirectRequest} - The TypeScript type definition
 */
export const KEYS_HTTP_REDIRECT_REQUEST = [
  KEY_HTTP_REDIRECT_REQUEST_REDIRECT_CODE,
  KEY_HTTP_REDIRECT_REQUEST_REQUEST_PATH,
  KEY_HTTP_REDIRECT_REQUEST_TARGET_HOSTNAME,
  KEY_HTTP_REDIRECT_REQUEST_TARGET_PATH,
  KEY_HTTP_REDIRECT_REQUEST_TARGET_PROTOCOL,
] as const satisfies (keyof HttpRedirectRequest)[];

/**
 * redirect_code property
 *
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `redirect_code` property of HttpRedirectUpsert objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = httpredirectupsert[KEY_HTTP_REDIRECT_UPSERT_REDIRECT_CODE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_HTTP_REDIRECT_UPSERT_REDIRECT_CODE;
 * const value = httpredirectupsert[propertyName];
 * ```
 *
 * @see {@link HttpRedirectUpsert} - The TypeScript type definition
 * @see {@link KEYS_HTTP_REDIRECT_UPSERT} - Array of all keys for this type
 */
export const KEY_HTTP_REDIRECT_UPSERT_REDIRECT_CODE: keyof HttpRedirectUpsert = 'redirect_code';
/**
 * Request Hostname
 *
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `request_hostname` property of HttpRedirectUpsert objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = httpredirectupsert[KEY_HTTP_REDIRECT_UPSERT_REQUEST_HOSTNAME];
 * 
 * // Dynamic property access
 * const propertyName = KEY_HTTP_REDIRECT_UPSERT_REQUEST_HOSTNAME;
 * const value = httpredirectupsert[propertyName];
 * ```
 *
 * @see {@link HttpRedirectUpsert} - The TypeScript type definition
 * @see {@link KEYS_HTTP_REDIRECT_UPSERT} - Array of all keys for this type
 */
export const KEY_HTTP_REDIRECT_UPSERT_REQUEST_HOSTNAME: keyof HttpRedirectUpsert = 'request_hostname';
/**
 * Request Path
 *
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `request_path` property of HttpRedirectUpsert objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = httpredirectupsert[KEY_HTTP_REDIRECT_UPSERT_REQUEST_PATH];
 * 
 * // Dynamic property access
 * const propertyName = KEY_HTTP_REDIRECT_UPSERT_REQUEST_PATH;
 * const value = httpredirectupsert[propertyName];
 * ```
 *
 * @see {@link HttpRedirectUpsert} - The TypeScript type definition
 * @see {@link KEYS_HTTP_REDIRECT_UPSERT} - Array of all keys for this type
 */
export const KEY_HTTP_REDIRECT_UPSERT_REQUEST_PATH: keyof HttpRedirectUpsert = 'request_path';
/**
 * request_protocol property
 *
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `request_protocol` property of HttpRedirectUpsert objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = httpredirectupsert[KEY_HTTP_REDIRECT_UPSERT_REQUEST_PROTOCOL];
 * 
 * // Dynamic property access
 * const propertyName = KEY_HTTP_REDIRECT_UPSERT_REQUEST_PROTOCOL;
 * const value = httpredirectupsert[propertyName];
 * ```
 *
 * @see {@link HttpRedirectUpsert} - The TypeScript type definition
 * @see {@link KEYS_HTTP_REDIRECT_UPSERT} - Array of all keys for this type
 */
export const KEY_HTTP_REDIRECT_UPSERT_REQUEST_PROTOCOL: keyof HttpRedirectUpsert = 'request_protocol';
/**
 * Request Subdomain
 *
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `request_subdomain` property of HttpRedirectUpsert objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = httpredirectupsert[KEY_HTTP_REDIRECT_UPSERT_REQUEST_SUBDOMAIN];
 * 
 * // Dynamic property access
 * const propertyName = KEY_HTTP_REDIRECT_UPSERT_REQUEST_SUBDOMAIN;
 * const value = httpredirectupsert[propertyName];
 * ```
 *
 * @see {@link HttpRedirectUpsert} - The TypeScript type definition
 * @see {@link KEYS_HTTP_REDIRECT_UPSERT} - Array of all keys for this type
 */
export const KEY_HTTP_REDIRECT_UPSERT_REQUEST_SUBDOMAIN: keyof HttpRedirectUpsert = 'request_subdomain';
/**
 * Target Hostname
 *
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `target_hostname` property of HttpRedirectUpsert objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = httpredirectupsert[KEY_HTTP_REDIRECT_UPSERT_TARGET_HOSTNAME];
 * 
 * // Dynamic property access
 * const propertyName = KEY_HTTP_REDIRECT_UPSERT_TARGET_HOSTNAME;
 * const value = httpredirectupsert[propertyName];
 * ```
 *
 * @see {@link HttpRedirectUpsert} - The TypeScript type definition
 * @see {@link KEYS_HTTP_REDIRECT_UPSERT} - Array of all keys for this type
 */
export const KEY_HTTP_REDIRECT_UPSERT_TARGET_HOSTNAME: keyof HttpRedirectUpsert = 'target_hostname';
/**
 * Target Path
 *
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `target_path` property of HttpRedirectUpsert objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = httpredirectupsert[KEY_HTTP_REDIRECT_UPSERT_TARGET_PATH];
 * 
 * // Dynamic property access
 * const propertyName = KEY_HTTP_REDIRECT_UPSERT_TARGET_PATH;
 * const value = httpredirectupsert[propertyName];
 * ```
 *
 * @see {@link HttpRedirectUpsert} - The TypeScript type definition
 * @see {@link KEYS_HTTP_REDIRECT_UPSERT} - Array of all keys for this type
 */
export const KEY_HTTP_REDIRECT_UPSERT_TARGET_PATH: keyof HttpRedirectUpsert = 'target_path';
/**
 * target_protocol property
 *
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `target_protocol` property of HttpRedirectUpsert objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = httpredirectupsert[KEY_HTTP_REDIRECT_UPSERT_TARGET_PROTOCOL];
 * 
 * // Dynamic property access
 * const propertyName = KEY_HTTP_REDIRECT_UPSERT_TARGET_PROTOCOL;
 * const value = httpredirectupsert[propertyName];
 * ```
 *
 * @see {@link HttpRedirectUpsert} - The TypeScript type definition
 * @see {@link KEYS_HTTP_REDIRECT_UPSERT} - Array of all keys for this type
 */
export const KEY_HTTP_REDIRECT_UPSERT_TARGET_PROTOCOL: keyof HttpRedirectUpsert = 'target_protocol';

/**
 * Array of all HttpRedirectUpsert property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for HttpRedirectUpsert objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all keys
 * for (const key of KEYS_HTTP_REDIRECT_UPSERT) {
 *   console.log(`Property: ${key}, Value: ${httpredirectupsert[key]}`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_HTTP_REDIRECT_UPSERT.includes(someKey);
 * ```
 *
 * @see {@link HttpRedirectUpsert} - The TypeScript type definition
 */
export const KEYS_HTTP_REDIRECT_UPSERT = [
  KEY_HTTP_REDIRECT_UPSERT_REDIRECT_CODE,
  KEY_HTTP_REDIRECT_UPSERT_REQUEST_HOSTNAME,
  KEY_HTTP_REDIRECT_UPSERT_REQUEST_PATH,
  KEY_HTTP_REDIRECT_UPSERT_REQUEST_PROTOCOL,
  KEY_HTTP_REDIRECT_UPSERT_REQUEST_SUBDOMAIN,
  KEY_HTTP_REDIRECT_UPSERT_TARGET_HOSTNAME,
  KEY_HTTP_REDIRECT_UPSERT_TARGET_PATH,
  KEY_HTTP_REDIRECT_UPSERT_TARGET_PROTOCOL,
] as const satisfies (keyof HttpRedirectUpsert)[];

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
export const KEY_IDN_BASE_IDN_CAPABLE: keyof IdnBase = 'idn_capable';
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
export const KEY_IDN_BASE_IDN_TABLES: keyof IdnBase = 'idn_tables';

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
 * Amount
 *
 * Total invoice amount
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `amount` property of Invoice objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = invoice[KEY_INVOICE_AMOUNT];
 * 
 * // Dynamic property access
 * const propertyName = KEY_INVOICE_AMOUNT;
 * const value = invoice[propertyName];
 * ```
 *
 * @see {@link Invoice} - The TypeScript type definition
 * @see {@link KEYS_INVOICE} - Array of all keys for this type
 */
export const KEY_INVOICE_AMOUNT: keyof Invoice = 'amount';
/**
 * currency property
 *
 * Invoice currency
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `currency` property of Invoice objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = invoice[KEY_INVOICE_CURRENCY];
 * 
 * // Dynamic property access
 * const propertyName = KEY_INVOICE_CURRENCY;
 * const value = invoice[propertyName];
 * ```
 *
 * @see {@link Invoice} - The TypeScript type definition
 * @see {@link KEYS_INVOICE} - Array of all keys for this type
 */
export const KEY_INVOICE_CURRENCY: keyof Invoice = 'currency';
/**
 * External Id
 *
 * Lago ID (external) for this invoice
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `external_id` property of Invoice objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = invoice[KEY_INVOICE_EXTERNAL_ID];
 * 
 * // Dynamic property access
 * const propertyName = KEY_INVOICE_EXTERNAL_ID;
 * const value = invoice[propertyName];
 * ```
 *
 * @see {@link Invoice} - The TypeScript type definition
 * @see {@link KEYS_INVOICE} - Array of all keys for this type
 */
export const KEY_INVOICE_EXTERNAL_ID: keyof Invoice = 'external_id';
/**
 * Fees Amount
 *
 * Fees amount
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `fees_amount` property of Invoice objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = invoice[KEY_INVOICE_FEES_AMOUNT];
 * 
 * // Dynamic property access
 * const propertyName = KEY_INVOICE_FEES_AMOUNT;
 * const value = invoice[propertyName];
 * ```
 *
 * @see {@link Invoice} - The TypeScript type definition
 * @see {@link KEYS_INVOICE} - Array of all keys for this type
 */
export const KEY_INVOICE_FEES_AMOUNT: keyof Invoice = 'fees_amount';
/**
 * File Url
 *
 * URL to invoice PDF file
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `file_url` property of Invoice objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = invoice[KEY_INVOICE_FILE_URL];
 * 
 * // Dynamic property access
 * const propertyName = KEY_INVOICE_FILE_URL;
 * const value = invoice[propertyName];
 * ```
 *
 * @see {@link Invoice} - The TypeScript type definition
 * @see {@link KEYS_INVOICE} - Array of all keys for this type
 */
export const KEY_INVOICE_FILE_URL: keyof Invoice = 'file_url';
/**
 * invoice_type property
 *
 * Invoice type
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `invoice_type` property of Invoice objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = invoice[KEY_INVOICE_INVOICE_TYPE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_INVOICE_INVOICE_TYPE;
 * const value = invoice[propertyName];
 * ```
 *
 * @see {@link Invoice} - The TypeScript type definition
 * @see {@link KEYS_INVOICE} - Array of all keys for this type
 */
export const KEY_INVOICE_INVOICE_TYPE: keyof Invoice = 'invoice_type';
/**
 * Issuing Date
 *
 * Invoice issuing date
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `issuing_date` property of Invoice objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = invoice[KEY_INVOICE_ISSUING_DATE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_INVOICE_ISSUING_DATE;
 * const value = invoice[propertyName];
 * ```
 *
 * @see {@link Invoice} - The TypeScript type definition
 * @see {@link KEYS_INVOICE} - Array of all keys for this type
 */
export const KEY_INVOICE_ISSUING_DATE: keyof Invoice = 'issuing_date';
/**
 * Number
 *
 * Invoice number
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `number` property of Invoice objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = invoice[KEY_INVOICE_NUMBER];
 * 
 * // Dynamic property access
 * const propertyName = KEY_INVOICE_NUMBER;
 * const value = invoice[propertyName];
 * ```
 *
 * @see {@link Invoice} - The TypeScript type definition
 * @see {@link KEYS_INVOICE} - Array of all keys for this type
 */
export const KEY_INVOICE_NUMBER: keyof Invoice = 'number';
/**
 * Payment Due Date
 *
 * Payment due date
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `payment_due_date` property of Invoice objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = invoice[KEY_INVOICE_PAYMENT_DUE_DATE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_INVOICE_PAYMENT_DUE_DATE;
 * const value = invoice[propertyName];
 * ```
 *
 * @see {@link Invoice} - The TypeScript type definition
 * @see {@link KEYS_INVOICE} - Array of all keys for this type
 */
export const KEY_INVOICE_PAYMENT_DUE_DATE: keyof Invoice = 'payment_due_date';
/**
 * Payment Overdue
 *
 * Whether payment is overdue
 *
 * @type {boolean}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `payment_overdue` property of Invoice objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = invoice[KEY_INVOICE_PAYMENT_OVERDUE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_INVOICE_PAYMENT_OVERDUE;
 * const value = invoice[propertyName];
 * ```
 *
 * @see {@link Invoice} - The TypeScript type definition
 * @see {@link KEYS_INVOICE} - Array of all keys for this type
 */
export const KEY_INVOICE_PAYMENT_OVERDUE: keyof Invoice = 'payment_overdue';
/**
 * payment_status property
 *
 * Payment status
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `payment_status` property of Invoice objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = invoice[KEY_INVOICE_PAYMENT_STATUS];
 * 
 * // Dynamic property access
 * const propertyName = KEY_INVOICE_PAYMENT_STATUS;
 * const value = invoice[propertyName];
 * ```
 *
 * @see {@link Invoice} - The TypeScript type definition
 * @see {@link KEYS_INVOICE} - Array of all keys for this type
 */
export const KEY_INVOICE_PAYMENT_STATUS: keyof Invoice = 'payment_status';
/**
 * status property
 *
 * Invoice status
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `status` property of Invoice objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = invoice[KEY_INVOICE_STATUS];
 * 
 * // Dynamic property access
 * const propertyName = KEY_INVOICE_STATUS;
 * const value = invoice[propertyName];
 * ```
 *
 * @see {@link Invoice} - The TypeScript type definition
 * @see {@link KEYS_INVOICE} - Array of all keys for this type
 */
export const KEY_INVOICE_STATUS: keyof Invoice = 'status';
/**
 * Taxes Amount
 *
 * Taxes amount
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `taxes_amount` property of Invoice objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = invoice[KEY_INVOICE_TAXES_AMOUNT];
 * 
 * // Dynamic property access
 * const propertyName = KEY_INVOICE_TAXES_AMOUNT;
 * const value = invoice[propertyName];
 * ```
 *
 * @see {@link Invoice} - The TypeScript type definition
 * @see {@link KEYS_INVOICE} - Array of all keys for this type
 */
export const KEY_INVOICE_TAXES_AMOUNT: keyof Invoice = 'taxes_amount';

/**
 * Array of all Invoice property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for Invoice objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all keys
 * for (const key of KEYS_INVOICE) {
 *   console.log(`Property: ${key}, Value: ${invoice[key]}`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_INVOICE.includes(someKey);
 * ```
 *
 * @see {@link Invoice} - The TypeScript type definition
 */
export const KEYS_INVOICE = [
  KEY_INVOICE_AMOUNT,
  KEY_INVOICE_CURRENCY,
  KEY_INVOICE_EXTERNAL_ID,
  KEY_INVOICE_FEES_AMOUNT,
  KEY_INVOICE_FILE_URL,
  KEY_INVOICE_INVOICE_TYPE,
  KEY_INVOICE_ISSUING_DATE,
  KEY_INVOICE_NUMBER,
  KEY_INVOICE_PAYMENT_DUE_DATE,
  KEY_INVOICE_PAYMENT_OVERDUE,
  KEY_INVOICE_PAYMENT_STATUS,
  KEY_INVOICE_STATUS,
  KEY_INVOICE_TAXES_AMOUNT,
] as const satisfies (keyof Invoice)[];

/**
 * Ip Network
 *
 * IP address or CIDR network range. Individual IPs can be specified without CIDR notation.
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
export const KEY_IP_RESTRICTION_CREATE_IP_NETWORK: keyof IpRestrictionCreate = 'ip_network';
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
export const KEY_IP_RESTRICTION_CREATE_ORGANIZATION_ID: keyof IpRestrictionCreate = 'organization_id';

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
export const KEY_IP_RESTRICTION_CREATED_ON: keyof IpRestriction = 'created_on';
/**
 * Ip Network
 *
 * IP address or CIDR network range. Single IPs are returned with /32 (IPv4) or /128 (IPv6) notation.
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
export const KEY_IP_RESTRICTION_IP_NETWORK: keyof IpRestriction = 'ip_network';
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
export const KEY_IP_RESTRICTION_IP_RESTRICTION_ID: keyof IpRestriction = 'ip_restriction_id';
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
export const KEY_IP_RESTRICTION_LAST_USED_ON: keyof IpRestriction = 'last_used_on';
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
export const KEY_IP_RESTRICTION_ORGANIZATION_ID: keyof IpRestriction = 'organization_id';

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
 * IP address or CIDR network range to replace the existing restriction.
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
export const KEY_IP_RESTRICTION_UPDATE_IP_NETWORK: keyof IpRestrictionUpdate = 'ip_network';
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
export const KEY_IP_RESTRICTION_UPDATE_LAST_USED_ON: keyof IpRestrictionUpdate = 'last_used_on';

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
export const KEY_LAUNCH_PHASE_BASE_ALLOCATION: keyof LaunchPhaseBase = 'allocation';
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
export const KEY_LAUNCH_PHASE_BASE_END_DATE: keyof LaunchPhaseBase = 'end_date';
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
export const KEY_LAUNCH_PHASE_BASE_SMD_REQUIRED: keyof LaunchPhaseBase = 'smd_required';
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
export const KEY_LAUNCH_PHASE_BASE_START_DATE: keyof LaunchPhaseBase = 'start_date';
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
export const KEY_LAUNCH_PHASE_BASE_SUPPORTED: keyof LaunchPhaseBase = 'supported';
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
export const KEY_LAUNCH_PHASE_BASE_TYPE: keyof LaunchPhaseBase = 'type';

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
export const KEY_LAUNCH_PHASES_BASE_GENERAL_AVAILABILITY: keyof LaunchPhasesBase = 'general_availability';
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
export const KEY_LAUNCH_PHASES_BASE_PHASES: keyof LaunchPhasesBase = 'phases';
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
export const KEY_LAUNCH_PHASES_BASE_TRADEMARK_CLAIMS: keyof LaunchPhasesBase = 'trademark_claims';

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
export const KEY_LOCAL_PRESENCE_BASE_ELIGIBLE_COUNTRIES: keyof LocalPresenceBase = 'eligible_countries';
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
export const KEY_LOCAL_PRESENCE_BASE_REQUIRED: keyof LocalPresenceBase = 'required';
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
export const KEY_LOCAL_PRESENCE_BASE_REQUIREMENT: keyof LocalPresenceBase = 'requirement';
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
export const KEY_LOCAL_PRESENCE_BASE_TYPE: keyof LocalPresenceBase = 'type';

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
export const KEY_NAMESERVER_HOSTNAME: keyof Nameserver = 'hostname';
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
export const KEY_NAMESERVER_IP_ADDRESSES: keyof Nameserver = 'ip_addresses';

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
 * action property
 *
 * Action performed
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `action` property of ObjectLog objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = objectlog[KEY_OBJECT_LOG_ACTION];
 * 
 * // Dynamic property access
 * const propertyName = KEY_OBJECT_LOG_ACTION;
 * const value = objectlog[propertyName];
 * ```
 *
 * @see {@link ObjectLog} - The TypeScript type definition
 * @see {@link KEYS_OBJECT_LOG} - Array of all keys for this type
 */
export const KEY_OBJECT_LOG_ACTION: keyof ObjectLog = 'action';
/**
 * Created On
 *
 * Timestamp when the log was created
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `created_on` property of ObjectLog objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = objectlog[KEY_OBJECT_LOG_CREATED_ON];
 * 
 * // Dynamic property access
 * const propertyName = KEY_OBJECT_LOG_CREATED_ON;
 * const value = objectlog[propertyName];
 * ```
 *
 * @see {@link ObjectLog} - The TypeScript type definition
 * @see {@link KEYS_OBJECT_LOG} - Array of all keys for this type
 */
export const KEY_OBJECT_LOG_CREATED_ON: keyof ObjectLog = 'created_on';
/**
 * Details
 *
 * Changes made to the object
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `details` property of ObjectLog objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = objectlog[KEY_OBJECT_LOG_DETAILS];
 * 
 * // Dynamic property access
 * const propertyName = KEY_OBJECT_LOG_DETAILS;
 * const value = objectlog[propertyName];
 * ```
 *
 * @see {@link ObjectLog} - The TypeScript type definition
 * @see {@link KEYS_OBJECT_LOG} - Array of all keys for this type
 */
export const KEY_OBJECT_LOG_DETAILS: keyof ObjectLog = 'details';
/**
 * Object Id
 *
 * ID of the object
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `object_id` property of ObjectLog objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = objectlog[KEY_OBJECT_LOG_OBJECT_ID];
 * 
 * // Dynamic property access
 * const propertyName = KEY_OBJECT_LOG_OBJECT_ID;
 * const value = objectlog[propertyName];
 * ```
 *
 * @see {@link ObjectLog} - The TypeScript type definition
 * @see {@link KEYS_OBJECT_LOG} - Array of all keys for this type
 */
export const KEY_OBJECT_LOG_OBJECT_ID: keyof ObjectLog = 'object_id';
/**
 * Object Log Id
 *
 * Unique ID of the log
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `object_log_id` property of ObjectLog objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = objectlog[KEY_OBJECT_LOG_OBJECT_LOG_ID];
 * 
 * // Dynamic property access
 * const propertyName = KEY_OBJECT_LOG_OBJECT_LOG_ID;
 * const value = objectlog[propertyName];
 * ```
 *
 * @see {@link ObjectLog} - The TypeScript type definition
 * @see {@link KEYS_OBJECT_LOG} - Array of all keys for this type
 */
export const KEY_OBJECT_LOG_OBJECT_LOG_ID: keyof ObjectLog = 'object_log_id';
/**
 * Object Type
 *
 * Type of the object
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `object_type` property of ObjectLog objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = objectlog[KEY_OBJECT_LOG_OBJECT_TYPE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_OBJECT_LOG_OBJECT_TYPE;
 * const value = objectlog[propertyName];
 * ```
 *
 * @see {@link ObjectLog} - The TypeScript type definition
 * @see {@link KEYS_OBJECT_LOG} - Array of all keys for this type
 */
export const KEY_OBJECT_LOG_OBJECT_TYPE: keyof ObjectLog = 'object_type';
/**
 * Performed By Id
 *
 * ID of the actor who performed the action
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `performed_by_id` property of ObjectLog objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = objectlog[KEY_OBJECT_LOG_PERFORMED_BY_ID];
 * 
 * // Dynamic property access
 * const propertyName = KEY_OBJECT_LOG_PERFORMED_BY_ID;
 * const value = objectlog[propertyName];
 * ```
 *
 * @see {@link ObjectLog} - The TypeScript type definition
 * @see {@link KEYS_OBJECT_LOG} - Array of all keys for this type
 */
export const KEY_OBJECT_LOG_PERFORMED_BY_ID: keyof ObjectLog = 'performed_by_id';
/**
 * Performed By Type
 *
 * Type of the actor who performed the action
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `performed_by_type` property of ObjectLog objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = objectlog[KEY_OBJECT_LOG_PERFORMED_BY_TYPE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_OBJECT_LOG_PERFORMED_BY_TYPE;
 * const value = objectlog[propertyName];
 * ```
 *
 * @see {@link ObjectLog} - The TypeScript type definition
 * @see {@link KEYS_OBJECT_LOG} - Array of all keys for this type
 */
export const KEY_OBJECT_LOG_PERFORMED_BY_TYPE: keyof ObjectLog = 'performed_by_type';
/**
 * Server Request Id
 *
 * Server request ID
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `server_request_id` property of ObjectLog objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = objectlog[KEY_OBJECT_LOG_SERVER_REQUEST_ID];
 * 
 * // Dynamic property access
 * const propertyName = KEY_OBJECT_LOG_SERVER_REQUEST_ID;
 * const value = objectlog[propertyName];
 * ```
 *
 * @see {@link ObjectLog} - The TypeScript type definition
 * @see {@link KEYS_OBJECT_LOG} - Array of all keys for this type
 */
export const KEY_OBJECT_LOG_SERVER_REQUEST_ID: keyof ObjectLog = 'server_request_id';

/**
 * Array of all ObjectLog property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for ObjectLog objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all keys
 * for (const key of KEYS_OBJECT_LOG) {
 *   console.log(`Property: ${key}, Value: ${objectlog[key]}`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_OBJECT_LOG.includes(someKey);
 * ```
 *
 * @see {@link ObjectLog} - The TypeScript type definition
 */
export const KEYS_OBJECT_LOG = [
  KEY_OBJECT_LOG_ACTION,
  KEY_OBJECT_LOG_CREATED_ON,
  KEY_OBJECT_LOG_DETAILS,
  KEY_OBJECT_LOG_OBJECT_ID,
  KEY_OBJECT_LOG_OBJECT_LOG_ID,
  KEY_OBJECT_LOG_OBJECT_TYPE,
  KEY_OBJECT_LOG_PERFORMED_BY_ID,
  KEY_OBJECT_LOG_PERFORMED_BY_TYPE,
  KEY_OBJECT_LOG_SERVER_REQUEST_ID,
] as const satisfies (keyof ObjectLog)[];

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
export const KEY_ORGANIZATION_ADDRESS_1: keyof Organization = 'address_1';
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
export const KEY_ORGANIZATION_ADDRESS_2: keyof Organization = 'address_2';
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
export const KEY_ORGANIZATION_ATTRIBUTES: keyof Organization = 'attributes';
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
export const KEY_ORGANIZATION_BUSINESS_NUMBER: keyof Organization = 'business_number';
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
export const KEY_ORGANIZATION_CITY: keyof Organization = 'city';
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
export const KEY_ORGANIZATION_COUNTRY_CODE: keyof Organization = 'country_code';
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
export const KEY_ORGANIZATION_CREATED_ON: keyof Organization = 'created_on';
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
export const KEY_ORGANIZATION_CURRENCY: keyof Organization = 'currency';
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
export const KEY_ORGANIZATION_DEFAULT_LOCALE: keyof Organization = 'default_locale';
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
export const KEY_ORGANIZATION_DELETED_ON: keyof Organization = 'deleted_on';
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
export const KEY_ORGANIZATION_NAME: keyof Organization = 'name';
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
export const KEY_ORGANIZATION_ORGANIZATION_ID: keyof Organization = 'organization_id';
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
export const KEY_ORGANIZATION_PARENT_ORGANIZATION_ID: keyof Organization = 'parent_organization_id';
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
export const KEY_ORGANIZATION_POSTAL_CODE: keyof Organization = 'postal_code';
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
export const KEY_ORGANIZATION_STATE: keyof Organization = 'state';
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
export const KEY_ORGANIZATION_STATUS: keyof Organization = 'status';
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
export const KEY_ORGANIZATION_TAX_ID: keyof Organization = 'tax_id';
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
export const KEY_ORGANIZATION_TAX_ID_TYPE: keyof Organization = 'tax_id_type';
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
export const KEY_ORGANIZATION_TAX_RATE: keyof Organization = 'tax_rate';
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
export const KEY_ORGANIZATION_USERS: keyof Organization = 'users';

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
export const KEY_ORGANIZATION_ATTRIBUTE_CREATED_ON: keyof OrganizationAttribute = 'created_on';
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
export const KEY_ORGANIZATION_ATTRIBUTE_KEY: keyof OrganizationAttribute = 'key';
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
export const KEY_ORGANIZATION_ATTRIBUTE_ORGANIZATION_ATTRIBUTE_ID: keyof OrganizationAttribute = 'organization_attribute_id';
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
export const KEY_ORGANIZATION_ATTRIBUTE_PRIVATE: keyof OrganizationAttribute = 'private';
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
export const KEY_ORGANIZATION_ATTRIBUTE_PROTECTED: keyof OrganizationAttribute = 'protected';
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
export const KEY_ORGANIZATION_ATTRIBUTE_UPDATED_ON: keyof OrganizationAttribute = 'updated_on';
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
export const KEY_ORGANIZATION_ATTRIBUTE_VALUE: keyof OrganizationAttribute = 'value';

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
export const KEY_ORGANIZATION_ATTRIBUTE_CREATE_KEY: keyof OrganizationAttributeCreate = 'key';
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
export const KEY_ORGANIZATION_ATTRIBUTE_CREATE_PRIVATE: keyof OrganizationAttributeCreate = 'private';
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
export const KEY_ORGANIZATION_ATTRIBUTE_CREATE_PROTECTED: keyof OrganizationAttributeCreate = 'protected';
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
export const KEY_ORGANIZATION_ATTRIBUTE_CREATE_VALUE: keyof OrganizationAttributeCreate = 'value';

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
export const KEY_ORGANIZATION_ATTRIBUTE2_CREATED_ON: keyof OrganizationAttribute2 = 'created_on';
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
export const KEY_ORGANIZATION_ATTRIBUTE2_KEY: keyof OrganizationAttribute2 = 'key';
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
export const KEY_ORGANIZATION_ATTRIBUTE2_ORGANIZATION_ATTRIBUTE_ID: keyof OrganizationAttribute2 = 'organization_attribute_id';
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
export const KEY_ORGANIZATION_ATTRIBUTE2_PROTECTED: keyof OrganizationAttribute2 = 'protected';
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
export const KEY_ORGANIZATION_ATTRIBUTE2_UPDATED_ON: keyof OrganizationAttribute2 = 'updated_on';
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
export const KEY_ORGANIZATION_ATTRIBUTE2_VALUE: keyof OrganizationAttribute2 = 'value';

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
export const KEY_ORGANIZATION_ATTRIBUTE_UPDATE_KEY: keyof OrganizationAttributeUpdate = 'key';
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
export const KEY_ORGANIZATION_ATTRIBUTE_UPDATE_PRIVATE: keyof OrganizationAttributeUpdate = 'private';
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
export const KEY_ORGANIZATION_ATTRIBUTE_UPDATE_PROTECTED: keyof OrganizationAttributeUpdate = 'protected';
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
export const KEY_ORGANIZATION_ATTRIBUTE_UPDATE_VALUE: keyof OrganizationAttributeUpdate = 'value';

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
export const KEY_ORGANIZATION_CREATE_ADDRESS_1: keyof OrganizationCreate = 'address_1';
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
export const KEY_ORGANIZATION_CREATE_ADDRESS_2: keyof OrganizationCreate = 'address_2';
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
export const KEY_ORGANIZATION_CREATE_ATTRIBUTES: keyof OrganizationCreate = 'attributes';
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
export const KEY_ORGANIZATION_CREATE_BUSINESS_NUMBER: keyof OrganizationCreate = 'business_number';
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
export const KEY_ORGANIZATION_CREATE_CITY: keyof OrganizationCreate = 'city';
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
export const KEY_ORGANIZATION_CREATE_COUNTRY_CODE: keyof OrganizationCreate = 'country_code';
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
export const KEY_ORGANIZATION_CREATE_CURRENCY: keyof OrganizationCreate = 'currency';
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
export const KEY_ORGANIZATION_CREATE_DEFAULT_LOCALE: keyof OrganizationCreate = 'default_locale';
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
export const KEY_ORGANIZATION_CREATE_NAME: keyof OrganizationCreate = 'name';
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
export const KEY_ORGANIZATION_CREATE_PARENT_ORGANIZATION_ID: keyof OrganizationCreate = 'parent_organization_id';
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
export const KEY_ORGANIZATION_CREATE_POSTAL_CODE: keyof OrganizationCreate = 'postal_code';
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
export const KEY_ORGANIZATION_CREATE_STATE: keyof OrganizationCreate = 'state';
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
export const KEY_ORGANIZATION_CREATE_TAX_ID: keyof OrganizationCreate = 'tax_id';
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
export const KEY_ORGANIZATION_CREATE_TAX_ID_TYPE: keyof OrganizationCreate = 'tax_id_type';
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
export const KEY_ORGANIZATION_CREATE_TAX_RATE: keyof OrganizationCreate = 'tax_rate';
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
export const KEY_ORGANIZATION_CREATE_USERS: keyof OrganizationCreate = 'users';

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
export const KEY_ORGANIZATION_TOKEN_ACCESS_TOKEN: keyof OrganizationToken = 'access_token';
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
export const KEY_ORGANIZATION_TOKEN_EXPIRES_IN: keyof OrganizationToken = 'expires_in';
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
export const KEY_ORGANIZATION_TOKEN_TOKEN_TYPE: keyof OrganizationToken = 'token_type';

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
export const KEY_ORGANIZATION_UPDATE_ADDRESS_1: keyof OrganizationUpdate = 'address_1';
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
export const KEY_ORGANIZATION_UPDATE_ADDRESS_2: keyof OrganizationUpdate = 'address_2';
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
export const KEY_ORGANIZATION_UPDATE_BUSINESS_NUMBER: keyof OrganizationUpdate = 'business_number';
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
export const KEY_ORGANIZATION_UPDATE_CITY: keyof OrganizationUpdate = 'city';
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
export const KEY_ORGANIZATION_UPDATE_COUNTRY_CODE: keyof OrganizationUpdate = 'country_code';
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
export const KEY_ORGANIZATION_UPDATE_DEFAULT_LOCALE: keyof OrganizationUpdate = 'default_locale';
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
export const KEY_ORGANIZATION_UPDATE_NAME: keyof OrganizationUpdate = 'name';
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
export const KEY_ORGANIZATION_UPDATE_POSTAL_CODE: keyof OrganizationUpdate = 'postal_code';
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
export const KEY_ORGANIZATION_UPDATE_STATE: keyof OrganizationUpdate = 'state';
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
export const KEY_ORGANIZATION_UPDATE_TAX_ID: keyof OrganizationUpdate = 'tax_id';
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
export const KEY_ORGANIZATION_UPDATE_TAX_ID_TYPE: keyof OrganizationUpdate = 'tax_id_type';
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
export const KEY_ORGANIZATION_UPDATE_TAX_RATE: keyof OrganizationUpdate = 'tax_rate';

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
 * Account Balance
 *
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `account_balance` property of OrganizationWithBillingData objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = organizationwithbillingdata[KEY_ORGANIZATION_WITH_BILLING_DATA_ACCOUNT_BALANCE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_ORGANIZATION_WITH_BILLING_DATA_ACCOUNT_BALANCE;
 * const value = organizationwithbillingdata[propertyName];
 * ```
 *
 * @see {@link OrganizationWithBillingData} - The TypeScript type definition
 * @see {@link KEYS_ORGANIZATION_WITH_BILLING_DATA} - Array of all keys for this type
 */
export const KEY_ORGANIZATION_WITH_BILLING_DATA_ACCOUNT_BALANCE: keyof OrganizationWithBillingData = 'account_balance';
/**
 * active_plan property
 *
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `active_plan` property of OrganizationWithBillingData objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = organizationwithbillingdata[KEY_ORGANIZATION_WITH_BILLING_DATA_ACTIVE_PLAN];
 * 
 * // Dynamic property access
 * const propertyName = KEY_ORGANIZATION_WITH_BILLING_DATA_ACTIVE_PLAN;
 * const value = organizationwithbillingdata[propertyName];
 * ```
 *
 * @see {@link OrganizationWithBillingData} - The TypeScript type definition
 * @see {@link KEYS_ORGANIZATION_WITH_BILLING_DATA} - Array of all keys for this type
 */
export const KEY_ORGANIZATION_WITH_BILLING_DATA_ACTIVE_PLAN: keyof OrganizationWithBillingData = 'active_plan';
/**
 * Address 1
 *
 * First line of the organization's address.
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `address_1` property of OrganizationWithBillingData objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = organizationwithbillingdata[KEY_ORGANIZATION_WITH_BILLING_DATA_ADDRESS_1];
 * 
 * // Dynamic property access
 * const propertyName = KEY_ORGANIZATION_WITH_BILLING_DATA_ADDRESS_1;
 * const value = organizationwithbillingdata[propertyName];
 * ```
 *
 * @see {@link OrganizationWithBillingData} - The TypeScript type definition
 * @see {@link KEYS_ORGANIZATION_WITH_BILLING_DATA} - Array of all keys for this type
 */
export const KEY_ORGANIZATION_WITH_BILLING_DATA_ADDRESS_1: keyof OrganizationWithBillingData = 'address_1';
/**
 * Address 2
 *
 * Second line of the organization's address.
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `address_2` property of OrganizationWithBillingData objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = organizationwithbillingdata[KEY_ORGANIZATION_WITH_BILLING_DATA_ADDRESS_2];
 * 
 * // Dynamic property access
 * const propertyName = KEY_ORGANIZATION_WITH_BILLING_DATA_ADDRESS_2;
 * const value = organizationwithbillingdata[propertyName];
 * ```
 *
 * @see {@link OrganizationWithBillingData} - The TypeScript type definition
 * @see {@link KEYS_ORGANIZATION_WITH_BILLING_DATA} - Array of all keys for this type
 */
export const KEY_ORGANIZATION_WITH_BILLING_DATA_ADDRESS_2: keyof OrganizationWithBillingData = 'address_2';
/**
 * Attributes
 *
 *
 * @type {array}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `attributes` property of OrganizationWithBillingData objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = organizationwithbillingdata[KEY_ORGANIZATION_WITH_BILLING_DATA_ATTRIBUTES];
 * 
 * // Dynamic property access
 * const propertyName = KEY_ORGANIZATION_WITH_BILLING_DATA_ATTRIBUTES;
 * const value = organizationwithbillingdata[propertyName];
 * ```
 *
 * @see {@link OrganizationWithBillingData} - The TypeScript type definition
 * @see {@link KEYS_ORGANIZATION_WITH_BILLING_DATA} - Array of all keys for this type
 */
export const KEY_ORGANIZATION_WITH_BILLING_DATA_ATTRIBUTES: keyof OrganizationWithBillingData = 'attributes';
/**
 * billing_metadata property
 *
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `billing_metadata` property of OrganizationWithBillingData objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = organizationwithbillingdata[KEY_ORGANIZATION_WITH_BILLING_DATA_BILLING_METADATA];
 * 
 * // Dynamic property access
 * const propertyName = KEY_ORGANIZATION_WITH_BILLING_DATA_BILLING_METADATA;
 * const value = organizationwithbillingdata[propertyName];
 * ```
 *
 * @see {@link OrganizationWithBillingData} - The TypeScript type definition
 * @see {@link KEYS_ORGANIZATION_WITH_BILLING_DATA} - Array of all keys for this type
 */
export const KEY_ORGANIZATION_WITH_BILLING_DATA_BILLING_METADATA: keyof OrganizationWithBillingData = 'billing_metadata';
/**
 * Business Number
 *
 * Government issued business identifier for the organization issued.
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `business_number` property of OrganizationWithBillingData objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = organizationwithbillingdata[KEY_ORGANIZATION_WITH_BILLING_DATA_BUSINESS_NUMBER];
 * 
 * // Dynamic property access
 * const propertyName = KEY_ORGANIZATION_WITH_BILLING_DATA_BUSINESS_NUMBER;
 * const value = organizationwithbillingdata[propertyName];
 * ```
 *
 * @see {@link OrganizationWithBillingData} - The TypeScript type definition
 * @see {@link KEYS_ORGANIZATION_WITH_BILLING_DATA} - Array of all keys for this type
 */
export const KEY_ORGANIZATION_WITH_BILLING_DATA_BUSINESS_NUMBER: keyof OrganizationWithBillingData = 'business_number';
/**
 * City
 *
 * City of the organization's address.
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `city` property of OrganizationWithBillingData objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = organizationwithbillingdata[KEY_ORGANIZATION_WITH_BILLING_DATA_CITY];
 * 
 * // Dynamic property access
 * const propertyName = KEY_ORGANIZATION_WITH_BILLING_DATA_CITY;
 * const value = organizationwithbillingdata[propertyName];
 * ```
 *
 * @see {@link OrganizationWithBillingData} - The TypeScript type definition
 * @see {@link KEYS_ORGANIZATION_WITH_BILLING_DATA} - Array of all keys for this type
 */
export const KEY_ORGANIZATION_WITH_BILLING_DATA_CITY: keyof OrganizationWithBillingData = 'city';
/**
 * Country Code
 *
 * ISO 3166-1 alpha-2 country code.
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `country_code` property of OrganizationWithBillingData objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = organizationwithbillingdata[KEY_ORGANIZATION_WITH_BILLING_DATA_COUNTRY_CODE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_ORGANIZATION_WITH_BILLING_DATA_COUNTRY_CODE;
 * const value = organizationwithbillingdata[propertyName];
 * ```
 *
 * @see {@link OrganizationWithBillingData} - The TypeScript type definition
 * @see {@link KEYS_ORGANIZATION_WITH_BILLING_DATA} - Array of all keys for this type
 */
export const KEY_ORGANIZATION_WITH_BILLING_DATA_COUNTRY_CODE: keyof OrganizationWithBillingData = 'country_code';
/**
 * Created On
 *
 * The date/time the entry was created on
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `created_on` property of OrganizationWithBillingData objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = organizationwithbillingdata[KEY_ORGANIZATION_WITH_BILLING_DATA_CREATED_ON];
 * 
 * // Dynamic property access
 * const propertyName = KEY_ORGANIZATION_WITH_BILLING_DATA_CREATED_ON;
 * const value = organizationwithbillingdata[propertyName];
 * ```
 *
 * @see {@link OrganizationWithBillingData} - The TypeScript type definition
 * @see {@link KEYS_ORGANIZATION_WITH_BILLING_DATA} - Array of all keys for this type
 */
export const KEY_ORGANIZATION_WITH_BILLING_DATA_CREATED_ON: keyof OrganizationWithBillingData = 'created_on';
/**
 * currency property
 *
 * The currency used by the organization.
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `currency` property of OrganizationWithBillingData objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = organizationwithbillingdata[KEY_ORGANIZATION_WITH_BILLING_DATA_CURRENCY];
 * 
 * // Dynamic property access
 * const propertyName = KEY_ORGANIZATION_WITH_BILLING_DATA_CURRENCY;
 * const value = organizationwithbillingdata[propertyName];
 * ```
 *
 * @see {@link OrganizationWithBillingData} - The TypeScript type definition
 * @see {@link KEYS_ORGANIZATION_WITH_BILLING_DATA} - Array of all keys for this type
 */
export const KEY_ORGANIZATION_WITH_BILLING_DATA_CURRENCY: keyof OrganizationWithBillingData = 'currency';
/**
 * Default Locale
 *
 * Default locale for the organization.
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `default_locale` property of OrganizationWithBillingData objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = organizationwithbillingdata[KEY_ORGANIZATION_WITH_BILLING_DATA_DEFAULT_LOCALE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_ORGANIZATION_WITH_BILLING_DATA_DEFAULT_LOCALE;
 * const value = organizationwithbillingdata[propertyName];
 * ```
 *
 * @see {@link OrganizationWithBillingData} - The TypeScript type definition
 * @see {@link KEYS_ORGANIZATION_WITH_BILLING_DATA} - Array of all keys for this type
 */
export const KEY_ORGANIZATION_WITH_BILLING_DATA_DEFAULT_LOCALE: keyof OrganizationWithBillingData = 'default_locale';
/**
 * Deleted On
 *
 * The date/time the entry was deleted on
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `deleted_on` property of OrganizationWithBillingData objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = organizationwithbillingdata[KEY_ORGANIZATION_WITH_BILLING_DATA_DELETED_ON];
 * 
 * // Dynamic property access
 * const propertyName = KEY_ORGANIZATION_WITH_BILLING_DATA_DELETED_ON;
 * const value = organizationwithbillingdata[propertyName];
 * ```
 *
 * @see {@link OrganizationWithBillingData} - The TypeScript type definition
 * @see {@link KEYS_ORGANIZATION_WITH_BILLING_DATA} - Array of all keys for this type
 */
export const KEY_ORGANIZATION_WITH_BILLING_DATA_DELETED_ON: keyof OrganizationWithBillingData = 'deleted_on';
/**
 * Name
 *
 * Name of the organization.
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `name` property of OrganizationWithBillingData objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = organizationwithbillingdata[KEY_ORGANIZATION_WITH_BILLING_DATA_NAME];
 * 
 * // Dynamic property access
 * const propertyName = KEY_ORGANIZATION_WITH_BILLING_DATA_NAME;
 * const value = organizationwithbillingdata[propertyName];
 * ```
 *
 * @see {@link OrganizationWithBillingData} - The TypeScript type definition
 * @see {@link KEYS_ORGANIZATION_WITH_BILLING_DATA} - Array of all keys for this type
 */
export const KEY_ORGANIZATION_WITH_BILLING_DATA_NAME: keyof OrganizationWithBillingData = 'name';
/**
 * Organization Id
 *
 * Unique identifier for the organization.
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `organization_id` property of OrganizationWithBillingData objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = organizationwithbillingdata[KEY_ORGANIZATION_WITH_BILLING_DATA_ORGANIZATION_ID];
 * 
 * // Dynamic property access
 * const propertyName = KEY_ORGANIZATION_WITH_BILLING_DATA_ORGANIZATION_ID;
 * const value = organizationwithbillingdata[propertyName];
 * ```
 *
 * @see {@link OrganizationWithBillingData} - The TypeScript type definition
 * @see {@link KEYS_ORGANIZATION_WITH_BILLING_DATA} - Array of all keys for this type
 */
export const KEY_ORGANIZATION_WITH_BILLING_DATA_ORGANIZATION_ID: keyof OrganizationWithBillingData = 'organization_id';
/**
 * Parent Organization Id
 *
 * ID of the parent organization.
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `parent_organization_id` property of OrganizationWithBillingData objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = organizationwithbillingdata[KEY_ORGANIZATION_WITH_BILLING_DATA_PARENT_ORGANIZATION_ID];
 * 
 * // Dynamic property access
 * const propertyName = KEY_ORGANIZATION_WITH_BILLING_DATA_PARENT_ORGANIZATION_ID;
 * const value = organizationwithbillingdata[propertyName];
 * ```
 *
 * @see {@link OrganizationWithBillingData} - The TypeScript type definition
 * @see {@link KEYS_ORGANIZATION_WITH_BILLING_DATA} - Array of all keys for this type
 */
export const KEY_ORGANIZATION_WITH_BILLING_DATA_PARENT_ORGANIZATION_ID: keyof OrganizationWithBillingData = 'parent_organization_id';
/**
 * Postal Code
 *
 * Postal code of the organization's address.
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `postal_code` property of OrganizationWithBillingData objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = organizationwithbillingdata[KEY_ORGANIZATION_WITH_BILLING_DATA_POSTAL_CODE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_ORGANIZATION_WITH_BILLING_DATA_POSTAL_CODE;
 * const value = organizationwithbillingdata[propertyName];
 * ```
 *
 * @see {@link OrganizationWithBillingData} - The TypeScript type definition
 * @see {@link KEYS_ORGANIZATION_WITH_BILLING_DATA} - Array of all keys for this type
 */
export const KEY_ORGANIZATION_WITH_BILLING_DATA_POSTAL_CODE: keyof OrganizationWithBillingData = 'postal_code';
/**
 * State
 *
 * State or province of the organization's address.
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `state` property of OrganizationWithBillingData objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = organizationwithbillingdata[KEY_ORGANIZATION_WITH_BILLING_DATA_STATE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_ORGANIZATION_WITH_BILLING_DATA_STATE;
 * const value = organizationwithbillingdata[propertyName];
 * ```
 *
 * @see {@link OrganizationWithBillingData} - The TypeScript type definition
 * @see {@link KEYS_ORGANIZATION_WITH_BILLING_DATA} - Array of all keys for this type
 */
export const KEY_ORGANIZATION_WITH_BILLING_DATA_STATE: keyof OrganizationWithBillingData = 'state';
/**
 * status property
 *
 * Status of the organization.
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `status` property of OrganizationWithBillingData objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = organizationwithbillingdata[KEY_ORGANIZATION_WITH_BILLING_DATA_STATUS];
 * 
 * // Dynamic property access
 * const propertyName = KEY_ORGANIZATION_WITH_BILLING_DATA_STATUS;
 * const value = organizationwithbillingdata[propertyName];
 * ```
 *
 * @see {@link OrganizationWithBillingData} - The TypeScript type definition
 * @see {@link KEYS_ORGANIZATION_WITH_BILLING_DATA} - Array of all keys for this type
 */
export const KEY_ORGANIZATION_WITH_BILLING_DATA_STATUS: keyof OrganizationWithBillingData = 'status';
/**
 * Tax Id
 *
 * Tax ID of the organization.
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `tax_id` property of OrganizationWithBillingData objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = organizationwithbillingdata[KEY_ORGANIZATION_WITH_BILLING_DATA_TAX_ID];
 * 
 * // Dynamic property access
 * const propertyName = KEY_ORGANIZATION_WITH_BILLING_DATA_TAX_ID;
 * const value = organizationwithbillingdata[propertyName];
 * ```
 *
 * @see {@link OrganizationWithBillingData} - The TypeScript type definition
 * @see {@link KEYS_ORGANIZATION_WITH_BILLING_DATA} - Array of all keys for this type
 */
export const KEY_ORGANIZATION_WITH_BILLING_DATA_TAX_ID: keyof OrganizationWithBillingData = 'tax_id';
/**
 * Tax Id Type
 *
 * Type of tax ID for the organization.
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `tax_id_type` property of OrganizationWithBillingData objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = organizationwithbillingdata[KEY_ORGANIZATION_WITH_BILLING_DATA_TAX_ID_TYPE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_ORGANIZATION_WITH_BILLING_DATA_TAX_ID_TYPE;
 * const value = organizationwithbillingdata[propertyName];
 * ```
 *
 * @see {@link OrganizationWithBillingData} - The TypeScript type definition
 * @see {@link KEYS_ORGANIZATION_WITH_BILLING_DATA} - Array of all keys for this type
 */
export const KEY_ORGANIZATION_WITH_BILLING_DATA_TAX_ID_TYPE: keyof OrganizationWithBillingData = 'tax_id_type';
/**
 * Tax Rate
 *
 * Tax rate for the organization.
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `tax_rate` property of OrganizationWithBillingData objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = organizationwithbillingdata[KEY_ORGANIZATION_WITH_BILLING_DATA_TAX_RATE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_ORGANIZATION_WITH_BILLING_DATA_TAX_RATE;
 * const value = organizationwithbillingdata[propertyName];
 * ```
 *
 * @see {@link OrganizationWithBillingData} - The TypeScript type definition
 * @see {@link KEYS_ORGANIZATION_WITH_BILLING_DATA} - Array of all keys for this type
 */
export const KEY_ORGANIZATION_WITH_BILLING_DATA_TAX_RATE: keyof OrganizationWithBillingData = 'tax_rate';
/**
 * Users
 *
 *
 * @type {array}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `users` property of OrganizationWithBillingData objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = organizationwithbillingdata[KEY_ORGANIZATION_WITH_BILLING_DATA_USERS];
 * 
 * // Dynamic property access
 * const propertyName = KEY_ORGANIZATION_WITH_BILLING_DATA_USERS;
 * const value = organizationwithbillingdata[propertyName];
 * ```
 *
 * @see {@link OrganizationWithBillingData} - The TypeScript type definition
 * @see {@link KEYS_ORGANIZATION_WITH_BILLING_DATA} - Array of all keys for this type
 */
export const KEY_ORGANIZATION_WITH_BILLING_DATA_USERS: keyof OrganizationWithBillingData = 'users';

/**
 * Array of all OrganizationWithBillingData property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for OrganizationWithBillingData objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all keys
 * for (const key of KEYS_ORGANIZATION_WITH_BILLING_DATA) {
 *   console.log(`Property: ${key}, Value: ${organizationwithbillingdata[key]}`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_ORGANIZATION_WITH_BILLING_DATA.includes(someKey);
 * ```
 *
 * @see {@link OrganizationWithBillingData} - The TypeScript type definition
 */
export const KEYS_ORGANIZATION_WITH_BILLING_DATA = [
  KEY_ORGANIZATION_WITH_BILLING_DATA_ACCOUNT_BALANCE,
  KEY_ORGANIZATION_WITH_BILLING_DATA_ACTIVE_PLAN,
  KEY_ORGANIZATION_WITH_BILLING_DATA_ADDRESS_1,
  KEY_ORGANIZATION_WITH_BILLING_DATA_ADDRESS_2,
  KEY_ORGANIZATION_WITH_BILLING_DATA_ATTRIBUTES,
  KEY_ORGANIZATION_WITH_BILLING_DATA_BILLING_METADATA,
  KEY_ORGANIZATION_WITH_BILLING_DATA_BUSINESS_NUMBER,
  KEY_ORGANIZATION_WITH_BILLING_DATA_CITY,
  KEY_ORGANIZATION_WITH_BILLING_DATA_COUNTRY_CODE,
  KEY_ORGANIZATION_WITH_BILLING_DATA_CREATED_ON,
  KEY_ORGANIZATION_WITH_BILLING_DATA_CURRENCY,
  KEY_ORGANIZATION_WITH_BILLING_DATA_DEFAULT_LOCALE,
  KEY_ORGANIZATION_WITH_BILLING_DATA_DELETED_ON,
  KEY_ORGANIZATION_WITH_BILLING_DATA_NAME,
  KEY_ORGANIZATION_WITH_BILLING_DATA_ORGANIZATION_ID,
  KEY_ORGANIZATION_WITH_BILLING_DATA_PARENT_ORGANIZATION_ID,
  KEY_ORGANIZATION_WITH_BILLING_DATA_POSTAL_CODE,
  KEY_ORGANIZATION_WITH_BILLING_DATA_STATE,
  KEY_ORGANIZATION_WITH_BILLING_DATA_STATUS,
  KEY_ORGANIZATION_WITH_BILLING_DATA_TAX_ID,
  KEY_ORGANIZATION_WITH_BILLING_DATA_TAX_ID_TYPE,
  KEY_ORGANIZATION_WITH_BILLING_DATA_TAX_RATE,
  KEY_ORGANIZATION_WITH_BILLING_DATA_USERS,
] as const satisfies (keyof OrganizationWithBillingData)[];

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
export const KEY_PAGINATION_METADATA_CURRENT_PAGE: keyof PaginationMetadata = 'current_page';
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
export const KEY_PAGINATION_METADATA_HAS_NEXT_PAGE: keyof PaginationMetadata = 'has_next_page';
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
export const KEY_PAGINATION_METADATA_HAS_PREVIOUS_PAGE: keyof PaginationMetadata = 'has_previous_page';
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
export const KEY_PAGINATION_METADATA_PAGE_SIZE: keyof PaginationMetadata = 'page_size';
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
export const KEY_PAGINATION_METADATA_TOTAL_ITEMS: keyof PaginationMetadata = 'total_items';
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
export const KEY_PAGINATION_METADATA_TOTAL_PAGES: keyof PaginationMetadata = 'total_pages';

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
 * New Password
 *
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `new_password` property of PasswordUpdate objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = passwordupdate[KEY_PASSWORD_UPDATE_NEW_PASSWORD];
 * 
 * // Dynamic property access
 * const propertyName = KEY_PASSWORD_UPDATE_NEW_PASSWORD;
 * const value = passwordupdate[propertyName];
 * ```
 *
 * @see {@link PasswordUpdate} - The TypeScript type definition
 * @see {@link KEYS_PASSWORD_UPDATE} - Array of all keys for this type
 */
export const KEY_PASSWORD_UPDATE_NEW_PASSWORD: keyof PasswordUpdate = 'new_password';

/**
 * Array of all PasswordUpdate property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for PasswordUpdate objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all keys
 * for (const key of KEYS_PASSWORD_UPDATE) {
 *   console.log(`Property: ${key}, Value: ${passwordupdate[key]}`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_PASSWORD_UPDATE.includes(someKey);
 * ```
 *
 * @see {@link PasswordUpdate} - The TypeScript type definition
 */
export const KEYS_PASSWORD_UPDATE = [
  KEY_PASSWORD_UPDATE_NEW_PASSWORD,
] as const satisfies (keyof PasswordUpdate)[];

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
export const KEY_PERIOD_UNIT: keyof Period = 'unit';
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
export const KEY_PERIOD_VALUE: keyof Period = 'value';

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
export const KEY_PERMISSION_SET_PERMISSIONS: keyof PermissionSet = 'permissions';

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
export const KEY_PREMIUM_DOMAINS_BASE_AFFECTS: keyof PremiumDomainsBase = 'affects';
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
export const KEY_PREMIUM_DOMAINS_BASE_SOURCE: keyof PremiumDomainsBase = 'source';
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
export const KEY_PREMIUM_DOMAINS_BASE_SUPPORTED: keyof PremiumDomainsBase = 'supported';

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
 * Currency
 *
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `currency` property of PriceInfo objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = priceinfo[KEY_PRICE_INFO_CURRENCY];
 * 
 * // Dynamic property access
 * const propertyName = KEY_PRICE_INFO_CURRENCY;
 * const value = priceinfo[propertyName];
 * ```
 *
 * @see {@link PriceInfo} - The TypeScript type definition
 * @see {@link KEYS_PRICE_INFO} - Array of all keys for this type
 */
export const KEY_PRICE_INFO_CURRENCY: keyof PriceInfo = 'currency';
/**
 * period property
 *
 * Pricing period (e.g., 1 year, 2 months)
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `period` property of PriceInfo objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = priceinfo[KEY_PRICE_INFO_PERIOD];
 * 
 * // Dynamic property access
 * const propertyName = KEY_PRICE_INFO_PERIOD;
 * const value = priceinfo[propertyName];
 * ```
 *
 * @see {@link PriceInfo} - The TypeScript type definition
 * @see {@link KEYS_PRICE_INFO} - Array of all keys for this type
 */
export const KEY_PRICE_INFO_PERIOD: keyof PriceInfo = 'period';
/**
 * Price
 *
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `price` property of PriceInfo objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = priceinfo[KEY_PRICE_INFO_PRICE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_PRICE_INFO_PRICE;
 * const value = priceinfo[propertyName];
 * ```
 *
 * @see {@link PriceInfo} - The TypeScript type definition
 * @see {@link KEYS_PRICE_INFO} - Array of all keys for this type
 */
export const KEY_PRICE_INFO_PRICE: keyof PriceInfo = 'price';
/**
 * Product Action
 *
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `product_action` property of PriceInfo objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = priceinfo[KEY_PRICE_INFO_PRODUCT_ACTION];
 * 
 * // Dynamic property access
 * const propertyName = KEY_PRICE_INFO_PRODUCT_ACTION;
 * const value = priceinfo[propertyName];
 * ```
 *
 * @see {@link PriceInfo} - The TypeScript type definition
 * @see {@link KEYS_PRICE_INFO} - Array of all keys for this type
 */
export const KEY_PRICE_INFO_PRODUCT_ACTION: keyof PriceInfo = 'product_action';
/**
 * Product Class
 *
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `product_class` property of PriceInfo objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = priceinfo[KEY_PRICE_INFO_PRODUCT_CLASS];
 * 
 * // Dynamic property access
 * const propertyName = KEY_PRICE_INFO_PRODUCT_CLASS;
 * const value = priceinfo[propertyName];
 * ```
 *
 * @see {@link PriceInfo} - The TypeScript type definition
 * @see {@link KEYS_PRICE_INFO} - Array of all keys for this type
 */
export const KEY_PRICE_INFO_PRODUCT_CLASS: keyof PriceInfo = 'product_class';
/**
 * Product Type
 *
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `product_type` property of PriceInfo objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = priceinfo[KEY_PRICE_INFO_PRODUCT_TYPE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_PRICE_INFO_PRODUCT_TYPE;
 * const value = priceinfo[propertyName];
 * ```
 *
 * @see {@link PriceInfo} - The TypeScript type definition
 * @see {@link KEYS_PRICE_INFO} - Array of all keys for this type
 */
export const KEY_PRICE_INFO_PRODUCT_TYPE: keyof PriceInfo = 'product_type';

/**
 * Array of all PriceInfo property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for PriceInfo objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all keys
 * for (const key of KEYS_PRICE_INFO) {
 *   console.log(`Property: ${key}, Value: ${priceinfo[key]}`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_PRICE_INFO.includes(someKey);
 * ```
 *
 * @see {@link PriceInfo} - The TypeScript type definition
 */
export const KEYS_PRICE_INFO = [
  KEY_PRICE_INFO_CURRENCY,
  KEY_PRICE_INFO_PERIOD,
  KEY_PRICE_INFO_PRICE,
  KEY_PRICE_INFO_PRODUCT_ACTION,
  KEY_PRICE_INFO_PRODUCT_CLASS,
  KEY_PRICE_INFO_PRODUCT_TYPE,
] as const satisfies (keyof PriceInfo)[];

/**
 * unit property
 *
 * The unit of the period
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `unit` property of PricingPeriod objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = pricingperiod[KEY_PRICING_PERIOD_UNIT];
 * 
 * // Dynamic property access
 * const propertyName = KEY_PRICING_PERIOD_UNIT;
 * const value = pricingperiod[propertyName];
 * ```
 *
 * @see {@link PricingPeriod} - The TypeScript type definition
 * @see {@link KEYS_PRICING_PERIOD} - Array of all keys for this type
 */
export const KEY_PRICING_PERIOD_UNIT: keyof PricingPeriod = 'unit';
/**
 * Value
 *
 * Amount of time in the unit
 *
 * @type {integer}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `value` property of PricingPeriod objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = pricingperiod[KEY_PRICING_PERIOD_VALUE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_PRICING_PERIOD_VALUE;
 * const value = pricingperiod[propertyName];
 * ```
 *
 * @see {@link PricingPeriod} - The TypeScript type definition
 * @see {@link KEYS_PRICING_PERIOD} - Array of all keys for this type
 */
export const KEY_PRICING_PERIOD_VALUE: keyof PricingPeriod = 'value';

/**
 * Array of all PricingPeriod property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for PricingPeriod objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all keys
 * for (const key of KEYS_PRICING_PERIOD) {
 *   console.log(`Property: ${key}, Value: ${pricingperiod[key]}`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_PRICING_PERIOD.includes(someKey);
 * ```
 *
 * @see {@link PricingPeriod} - The TypeScript type definition
 */
export const KEYS_PRICING_PERIOD = [
  KEY_PRICING_PERIOD_UNIT,
  KEY_PRICING_PERIOD_VALUE,
] as const satisfies (keyof PricingPeriod)[];

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
export const KEY_PROBLEM_DETAIL: keyof Problem = 'detail';
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
export const KEY_PROBLEM_STATUS: keyof Problem = 'status';
/**
 * Problem title
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
export const KEY_PROBLEM_TITLE: keyof Problem = 'title';
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
export const KEY_PROBLEM_TYPE: keyof Problem = 'type';

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
 * Client Id
 *
 * The organization ID associated with the credentials.
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `client_id` property of PublicAuthRequestForm objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = publicauthrequestform[KEY_PUBLIC_AUTH_REQUEST_FORM_CLIENT_ID];
 * 
 * // Dynamic property access
 * const propertyName = KEY_PUBLIC_AUTH_REQUEST_FORM_CLIENT_ID;
 * const value = publicauthrequestform[propertyName];
 * ```
 *
 * @see {@link PublicAuthRequestForm} - The TypeScript type definition
 * @see {@link KEYS_PUBLIC_AUTH_REQUEST_FORM} - Array of all keys for this type
 */
export const KEY_PUBLIC_AUTH_REQUEST_FORM_CLIENT_ID: keyof PublicAuthRequestForm = 'client_id';
/**
 * Client Secret
 *
 * Client secret for authentication.
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `client_secret` property of PublicAuthRequestForm objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = publicauthrequestform[KEY_PUBLIC_AUTH_REQUEST_FORM_CLIENT_SECRET];
 * 
 * // Dynamic property access
 * const propertyName = KEY_PUBLIC_AUTH_REQUEST_FORM_CLIENT_SECRET;
 * const value = publicauthrequestform[propertyName];
 * ```
 *
 * @see {@link PublicAuthRequestForm} - The TypeScript type definition
 * @see {@link KEYS_PUBLIC_AUTH_REQUEST_FORM} - Array of all keys for this type
 */
export const KEY_PUBLIC_AUTH_REQUEST_FORM_CLIENT_SECRET: keyof PublicAuthRequestForm = 'client_secret';
/**
 * Grant Type
 *
 * The grant type for the authentication request (should always be 'client_credentials').
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `grant_type` property of PublicAuthRequestForm objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = publicauthrequestform[KEY_PUBLIC_AUTH_REQUEST_FORM_GRANT_TYPE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_PUBLIC_AUTH_REQUEST_FORM_GRANT_TYPE;
 * const value = publicauthrequestform[propertyName];
 * ```
 *
 * @see {@link PublicAuthRequestForm} - The TypeScript type definition
 * @see {@link KEYS_PUBLIC_AUTH_REQUEST_FORM} - Array of all keys for this type
 */
export const KEY_PUBLIC_AUTH_REQUEST_FORM_GRANT_TYPE: keyof PublicAuthRequestForm = 'grant_type';

/**
 * Array of all PublicAuthRequestForm property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for PublicAuthRequestForm objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all keys
 * for (const key of KEYS_PUBLIC_AUTH_REQUEST_FORM) {
 *   console.log(`Property: ${key}, Value: ${publicauthrequestform[key]}`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_PUBLIC_AUTH_REQUEST_FORM.includes(someKey);
 * ```
 *
 * @see {@link PublicAuthRequestForm} - The TypeScript type definition
 */
export const KEYS_PUBLIC_AUTH_REQUEST_FORM = [
  KEY_PUBLIC_AUTH_REQUEST_FORM_CLIENT_ID,
  KEY_PUBLIC_AUTH_REQUEST_FORM_CLIENT_SECRET,
  KEY_PUBLIC_AUTH_REQUEST_FORM_GRANT_TYPE,
] as const satisfies (keyof PublicAuthRequestForm)[];

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
export const KEY_RDAP_BASE_RDAP_SERVER: keyof RdapBase = 'rdap_server';

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
export const KEY_REGISTRY_LOCK_BASE_PREVENTS: keyof RegistryLockBase = 'prevents';
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
export const KEY_REGISTRY_LOCK_BASE_REMOVAL_PROCESS: keyof RegistryLockBase = 'removal_process';
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
export const KEY_REGISTRY_LOCK_BASE_REQUIRES_MANUAL_REQUEST: keyof RegistryLockBase = 'requires_manual_request';
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
export const KEY_REGISTRY_LOCK_BASE_SUPPORTED: keyof RegistryLockBase = 'supported';

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
export const KEY_RELATION_SET_RELATIONS: keyof RelationSet = 'relations';

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
 * Registration Expiration Date
 *
 * The new expiration date/time after the domain has been renewed
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `registration_expiration_date` property of RenewalEvent objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = renewalevent[KEY_RENEWAL_EVENT_REGISTRATION_EXPIRATION_DATE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_RENEWAL_EVENT_REGISTRATION_EXPIRATION_DATE;
 * const value = renewalevent[propertyName];
 * ```
 *
 * @see {@link RenewalEvent} - The TypeScript type definition
 * @see {@link KEYS_RENEWAL_EVENT} - Array of all keys for this type
 */
export const KEY_RENEWAL_EVENT_REGISTRATION_EXPIRATION_DATE: keyof RenewalEvent = 'registration_expiration_date';

/**
 * Array of all RenewalEvent property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for RenewalEvent objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all keys
 * for (const key of KEYS_RENEWAL_EVENT) {
 *   console.log(`Property: ${key}, Value: ${renewalevent[key]}`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_RENEWAL_EVENT.includes(someKey);
 * ```
 *
 * @see {@link RenewalEvent} - The TypeScript type definition
 */
export const KEYS_RENEWAL_EVENT = [
  KEY_RENEWAL_EVENT_REGISTRATION_EXPIRATION_DATE,
] as const satisfies (keyof RenewalEvent)[];

/**
 * Client Ip
 *
 * Client IP address
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `client_ip` property of RequestHistory objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = requesthistory[KEY_REQUEST_HISTORY_CLIENT_IP];
 * 
 * // Dynamic property access
 * const propertyName = KEY_REQUEST_HISTORY_CLIENT_IP;
 * const value = requesthistory[propertyName];
 * ```
 *
 * @see {@link RequestHistory} - The TypeScript type definition
 * @see {@link KEYS_REQUEST_HISTORY} - Array of all keys for this type
 */
export const KEY_REQUEST_HISTORY_CLIENT_IP: keyof RequestHistory = 'client_ip';
/**
 * Duration
 *
 * Request duration in milliseconds
 *
 * @type {number}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `duration` property of RequestHistory objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = requesthistory[KEY_REQUEST_HISTORY_DURATION];
 * 
 * // Dynamic property access
 * const propertyName = KEY_REQUEST_HISTORY_DURATION;
 * const value = requesthistory[propertyName];
 * ```
 *
 * @see {@link RequestHistory} - The TypeScript type definition
 * @see {@link KEYS_REQUEST_HISTORY} - Array of all keys for this type
 */
export const KEY_REQUEST_HISTORY_DURATION: keyof RequestHistory = 'duration';
/**
 * Method
 *
 * HTTP method
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `method` property of RequestHistory objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = requesthistory[KEY_REQUEST_HISTORY_METHOD];
 * 
 * // Dynamic property access
 * const propertyName = KEY_REQUEST_HISTORY_METHOD;
 * const value = requesthistory[propertyName];
 * ```
 *
 * @see {@link RequestHistory} - The TypeScript type definition
 * @see {@link KEYS_REQUEST_HISTORY} - Array of all keys for this type
 */
export const KEY_REQUEST_HISTORY_METHOD: keyof RequestHistory = 'method';
/**
 * Path
 *
 * Request path
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `path` property of RequestHistory objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = requesthistory[KEY_REQUEST_HISTORY_PATH];
 * 
 * // Dynamic property access
 * const propertyName = KEY_REQUEST_HISTORY_PATH;
 * const value = requesthistory[propertyName];
 * ```
 *
 * @see {@link RequestHistory} - The TypeScript type definition
 * @see {@link KEYS_REQUEST_HISTORY} - Array of all keys for this type
 */
export const KEY_REQUEST_HISTORY_PATH: keyof RequestHistory = 'path';
/**
 * Performed By Id
 *
 * ID of the actor who performed the request
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `performed_by_id` property of RequestHistory objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = requesthistory[KEY_REQUEST_HISTORY_PERFORMED_BY_ID];
 * 
 * // Dynamic property access
 * const propertyName = KEY_REQUEST_HISTORY_PERFORMED_BY_ID;
 * const value = requesthistory[propertyName];
 * ```
 *
 * @see {@link RequestHistory} - The TypeScript type definition
 * @see {@link KEYS_REQUEST_HISTORY} - Array of all keys for this type
 */
export const KEY_REQUEST_HISTORY_PERFORMED_BY_ID: keyof RequestHistory = 'performed_by_id';
/**
 * Performed By Type
 *
 * Type of the actor who performed the request
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `performed_by_type` property of RequestHistory objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = requesthistory[KEY_REQUEST_HISTORY_PERFORMED_BY_TYPE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_REQUEST_HISTORY_PERFORMED_BY_TYPE;
 * const value = requesthistory[propertyName];
 * ```
 *
 * @see {@link RequestHistory} - The TypeScript type definition
 * @see {@link KEYS_REQUEST_HISTORY} - Array of all keys for this type
 */
export const KEY_REQUEST_HISTORY_PERFORMED_BY_TYPE: keyof RequestHistory = 'performed_by_type';
/**
 * Request Body
 *
 * Request body
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `request_body` property of RequestHistory objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = requesthistory[KEY_REQUEST_HISTORY_REQUEST_BODY];
 * 
 * // Dynamic property access
 * const propertyName = KEY_REQUEST_HISTORY_REQUEST_BODY;
 * const value = requesthistory[propertyName];
 * ```
 *
 * @see {@link RequestHistory} - The TypeScript type definition
 * @see {@link KEYS_REQUEST_HISTORY} - Array of all keys for this type
 */
export const KEY_REQUEST_HISTORY_REQUEST_BODY: keyof RequestHistory = 'request_body';
/**
 * Request Completed At
 *
 * Timestamp when the request completed
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `request_completed_at` property of RequestHistory objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = requesthistory[KEY_REQUEST_HISTORY_REQUEST_COMPLETED_AT];
 * 
 * // Dynamic property access
 * const propertyName = KEY_REQUEST_HISTORY_REQUEST_COMPLETED_AT;
 * const value = requesthistory[propertyName];
 * ```
 *
 * @see {@link RequestHistory} - The TypeScript type definition
 * @see {@link KEYS_REQUEST_HISTORY} - Array of all keys for this type
 */
export const KEY_REQUEST_HISTORY_REQUEST_COMPLETED_AT: keyof RequestHistory = 'request_completed_at';
/**
 * Request Started At
 *
 * Timestamp when the request started
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `request_started_at` property of RequestHistory objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = requesthistory[KEY_REQUEST_HISTORY_REQUEST_STARTED_AT];
 * 
 * // Dynamic property access
 * const propertyName = KEY_REQUEST_HISTORY_REQUEST_STARTED_AT;
 * const value = requesthistory[propertyName];
 * ```
 *
 * @see {@link RequestHistory} - The TypeScript type definition
 * @see {@link KEYS_REQUEST_HISTORY} - Array of all keys for this type
 */
export const KEY_REQUEST_HISTORY_REQUEST_STARTED_AT: keyof RequestHistory = 'request_started_at';
/**
 * Response Body
 *
 * Response body
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `response_body` property of RequestHistory objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = requesthistory[KEY_REQUEST_HISTORY_RESPONSE_BODY];
 * 
 * // Dynamic property access
 * const propertyName = KEY_REQUEST_HISTORY_RESPONSE_BODY;
 * const value = requesthistory[propertyName];
 * ```
 *
 * @see {@link RequestHistory} - The TypeScript type definition
 * @see {@link KEYS_REQUEST_HISTORY} - Array of all keys for this type
 */
export const KEY_REQUEST_HISTORY_RESPONSE_BODY: keyof RequestHistory = 'response_body';
/**
 * Server Request Id
 *
 * Unique ID of the request
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `server_request_id` property of RequestHistory objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = requesthistory[KEY_REQUEST_HISTORY_SERVER_REQUEST_ID];
 * 
 * // Dynamic property access
 * const propertyName = KEY_REQUEST_HISTORY_SERVER_REQUEST_ID;
 * const value = requesthistory[propertyName];
 * ```
 *
 * @see {@link RequestHistory} - The TypeScript type definition
 * @see {@link KEYS_REQUEST_HISTORY} - Array of all keys for this type
 */
export const KEY_REQUEST_HISTORY_SERVER_REQUEST_ID: keyof RequestHistory = 'server_request_id';
/**
 * Status Code
 *
 * HTTP status code
 *
 * @type {integer}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `status_code` property of RequestHistory objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = requesthistory[KEY_REQUEST_HISTORY_STATUS_CODE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_REQUEST_HISTORY_STATUS_CODE;
 * const value = requesthistory[propertyName];
 * ```
 *
 * @see {@link RequestHistory} - The TypeScript type definition
 * @see {@link KEYS_REQUEST_HISTORY} - Array of all keys for this type
 */
export const KEY_REQUEST_HISTORY_STATUS_CODE: keyof RequestHistory = 'status_code';

/**
 * Array of all RequestHistory property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for RequestHistory objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all keys
 * for (const key of KEYS_REQUEST_HISTORY) {
 *   console.log(`Property: ${key}, Value: ${requesthistory[key]}`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_REQUEST_HISTORY.includes(someKey);
 * ```
 *
 * @see {@link RequestHistory} - The TypeScript type definition
 */
export const KEYS_REQUEST_HISTORY = [
  KEY_REQUEST_HISTORY_CLIENT_IP,
  KEY_REQUEST_HISTORY_DURATION,
  KEY_REQUEST_HISTORY_METHOD,
  KEY_REQUEST_HISTORY_PATH,
  KEY_REQUEST_HISTORY_PERFORMED_BY_ID,
  KEY_REQUEST_HISTORY_PERFORMED_BY_TYPE,
  KEY_REQUEST_HISTORY_REQUEST_BODY,
  KEY_REQUEST_HISTORY_REQUEST_COMPLETED_AT,
  KEY_REQUEST_HISTORY_REQUEST_STARTED_AT,
  KEY_REQUEST_HISTORY_RESPONSE_BODY,
  KEY_REQUEST_HISTORY_SERVER_REQUEST_ID,
  KEY_REQUEST_HISTORY_STATUS_CODE,
] as const satisfies (keyof RequestHistory)[];

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
export const KEY_RESERVED_DOMAINS_BASE_SOURCE: keyof ReservedDomainsBase = 'source';
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
export const KEY_RESERVED_DOMAINS_BASE_SUPPORTED: keyof ReservedDomainsBase = 'supported';
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
export const KEY_RESERVED_DOMAINS_BASE_URL: keyof ReservedDomainsBase = 'url';

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
export const KEY_RGP_OPERATIONS_REPORT: keyof RgpOperations = 'report';
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
export const KEY_RGP_OPERATIONS_REQUEST: keyof RgpOperations = 'request';

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
export const KEY_SLD_LENGTH_MAX: keyof SldLength = 'max';
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
export const KEY_SLD_LENGTH_MIN: keyof SldLength = 'min';

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
export const KEY_SPICE_DB_RELATIONSHIP_UPDATE_ADD: keyof SpiceDbRelationshipUpdate = 'add';
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
export const KEY_SPICE_DB_RELATIONSHIP_UPDATE_REMOVE: keyof SpiceDbRelationshipUpdate = 'remove';

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
export const KEY_TLD_BASE_NAME: keyof TldBase = 'name';
/**
 * Third Level Structure
 *
 * Name of the third levels (name and overrides)
 *
 * @type {array}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `third_level_structure` property of TldBase objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = tldbase[KEY_TLD_BASE_THIRD_LEVEL_STRUCTURE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_TLD_BASE_THIRD_LEVEL_STRUCTURE;
 * const value = tldbase[propertyName];
 * ```
 *
 * @see {@link TldBase} - The TypeScript type definition
 * @see {@link KEYS_TLD_BASE} - Array of all keys for this type
 */
export const KEY_TLD_BASE_THIRD_LEVEL_STRUCTURE: keyof TldBase = 'third_level_structure';
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
export const KEY_TLD_BASE_TYPE: keyof TldBase = 'type';

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
  KEY_TLD_BASE_THIRD_LEVEL_STRUCTURE,
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
export const KEY_TLD_RESPONSE_SHORT_TLD: keyof TldResponseShort = 'tld';
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
export const KEY_TLD_RESPONSE_SHORT_TYPE: keyof TldResponseShort = 'type';

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
export const KEY_TLD_SPECIFICATION_CHARACTERS: keyof TldSpecification = 'characters';
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
export const KEY_TLD_SPECIFICATION_CONTACTS: keyof TldSpecification = 'contacts';
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
export const KEY_TLD_SPECIFICATION_DNS_CONFIGURATION: keyof TldSpecification = 'dns_configuration';
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
export const KEY_TLD_SPECIFICATION_DOMAIN_LIFECYCLE: keyof TldSpecification = 'domain_lifecycle';
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
export const KEY_TLD_SPECIFICATION_DOMAIN_STATUSES: keyof TldSpecification = 'domain_statuses';
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
export const KEY_TLD_SPECIFICATION_IDN: keyof TldSpecification = 'idn';
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
export const KEY_TLD_SPECIFICATION_LAUNCH_PHASES: keyof TldSpecification = 'launch_phases';
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
export const KEY_TLD_SPECIFICATION_LOCAL_PRESENCE: keyof TldSpecification = 'local_presence';
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
export const KEY_TLD_SPECIFICATION_PREMIUM_DOMAINS: keyof TldSpecification = 'premium_domains';
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
export const KEY_TLD_SPECIFICATION_RDAP: keyof TldSpecification = 'rdap';
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
export const KEY_TLD_SPECIFICATION_REGISTRY_LOCK: keyof TldSpecification = 'registry_lock';
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
export const KEY_TLD_SPECIFICATION_RESERVED_DOMAINS: keyof TldSpecification = 'reserved_domains';
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
export const KEY_TLD_SPECIFICATION_TLDS: keyof TldSpecification = 'tlds';
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
export const KEY_TLD_SPECIFICATION_TRANSFER_POLICIES: keyof TldSpecification = 'transfer_policies';
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
export const KEY_TLD_SPECIFICATION_WHOIS: keyof TldSpecification = 'whois';

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
export const KEY_TRADEMARK_CLAIMS_BASE_END_DATE: keyof TrademarkClaimsBase = 'end_date';
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
export const KEY_TRADEMARK_CLAIMS_BASE_START_DATE: keyof TrademarkClaimsBase = 'start_date';
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
export const KEY_TRADEMARK_CLAIMS_BASE_SUPPORTED: keyof TrademarkClaimsBase = 'supported';
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
export const KEY_TRADEMARK_CLAIMS_BASE_TMCH_REQUIRED: keyof TrademarkClaimsBase = 'tmch_required';

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
 * Current Registrar
 *
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `current_registrar` property of TransferEvent objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = transferevent[KEY_TRANSFER_EVENT_CURRENT_REGISTRAR];
 * 
 * // Dynamic property access
 * const propertyName = KEY_TRANSFER_EVENT_CURRENT_REGISTRAR;
 * const value = transferevent[propertyName];
 * ```
 *
 * @see {@link TransferEvent} - The TypeScript type definition
 * @see {@link KEYS_TRANSFER_EVENT} - Array of all keys for this type
 */
export const KEY_TRANSFER_EVENT_CURRENT_REGISTRAR: keyof TransferEvent = 'current_registrar';
/**
 * execution_date property
 *
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `execution_date` property of TransferEvent objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = transferevent[KEY_TRANSFER_EVENT_EXECUTION_DATE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_TRANSFER_EVENT_EXECUTION_DATE;
 * const value = transferevent[propertyName];
 * ```
 *
 * @see {@link TransferEvent} - The TypeScript type definition
 * @see {@link KEYS_TRANSFER_EVENT} - Array of all keys for this type
 */
export const KEY_TRANSFER_EVENT_EXECUTION_DATE: keyof TransferEvent = 'execution_date';
/**
 * expiration_date property
 *
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `expiration_date` property of TransferEvent objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = transferevent[KEY_TRANSFER_EVENT_EXPIRATION_DATE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_TRANSFER_EVENT_EXPIRATION_DATE;
 * const value = transferevent[propertyName];
 * ```
 *
 * @see {@link TransferEvent} - The TypeScript type definition
 * @see {@link KEYS_TRANSFER_EVENT} - Array of all keys for this type
 */
export const KEY_TRANSFER_EVENT_EXPIRATION_DATE: keyof TransferEvent = 'expiration_date';
/**
 * Message
 *
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `message` property of TransferEvent objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = transferevent[KEY_TRANSFER_EVENT_MESSAGE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_TRANSFER_EVENT_MESSAGE;
 * const value = transferevent[propertyName];
 * ```
 *
 * @see {@link TransferEvent} - The TypeScript type definition
 * @see {@link KEYS_TRANSFER_EVENT} - Array of all keys for this type
 */
export const KEY_TRANSFER_EVENT_MESSAGE: keyof TransferEvent = 'message';
/**
 * Requesting Registrar
 *
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `requesting_registrar` property of TransferEvent objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = transferevent[KEY_TRANSFER_EVENT_REQUESTING_REGISTRAR];
 * 
 * // Dynamic property access
 * const propertyName = KEY_TRANSFER_EVENT_REQUESTING_REGISTRAR;
 * const value = transferevent[propertyName];
 * ```
 *
 * @see {@link TransferEvent} - The TypeScript type definition
 * @see {@link KEYS_TRANSFER_EVENT} - Array of all keys for this type
 */
export const KEY_TRANSFER_EVENT_REQUESTING_REGISTRAR: keyof TransferEvent = 'requesting_registrar';

/**
 * Array of all TransferEvent property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for TransferEvent objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all keys
 * for (const key of KEYS_TRANSFER_EVENT) {
 *   console.log(`Property: ${key}, Value: ${transferevent[key]}`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_TRANSFER_EVENT.includes(someKey);
 * ```
 *
 * @see {@link TransferEvent} - The TypeScript type definition
 */
export const KEYS_TRANSFER_EVENT = [
  KEY_TRANSFER_EVENT_CURRENT_REGISTRAR,
  KEY_TRANSFER_EVENT_EXECUTION_DATE,
  KEY_TRANSFER_EVENT_EXPIRATION_DATE,
  KEY_TRANSFER_EVENT_MESSAGE,
  KEY_TRANSFER_EVENT_REQUESTING_REGISTRAR,
] as const satisfies (keyof TransferEvent)[];

/**
 * Supported By Registrar
 *
 * Whether the registrar supports transfer locks
 *
 * @type {boolean}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `supported_by_registrar` property of TransferLockPolicyBase objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = transferlockpolicybase[KEY_TRANSFER_LOCK_POLICY_BASE_SUPPORTED_BY_REGISTRAR];
 * 
 * // Dynamic property access
 * const propertyName = KEY_TRANSFER_LOCK_POLICY_BASE_SUPPORTED_BY_REGISTRAR;
 * const value = transferlockpolicybase[propertyName];
 * ```
 *
 * @see {@link TransferLockPolicyBase} - The TypeScript type definition
 * @see {@link KEYS_TRANSFER_LOCK_POLICY_BASE} - Array of all keys for this type
 */
export const KEY_TRANSFER_LOCK_POLICY_BASE_SUPPORTED_BY_REGISTRAR: keyof TransferLockPolicyBase = 'supported_by_registrar';
/**
 * Supported By Registry
 *
 * Whether the registry supports transfer locks
 *
 * @type {boolean}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `supported_by_registry` property of TransferLockPolicyBase objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = transferlockpolicybase[KEY_TRANSFER_LOCK_POLICY_BASE_SUPPORTED_BY_REGISTRY];
 * 
 * // Dynamic property access
 * const propertyName = KEY_TRANSFER_LOCK_POLICY_BASE_SUPPORTED_BY_REGISTRY;
 * const value = transferlockpolicybase[propertyName];
 * ```
 *
 * @see {@link TransferLockPolicyBase} - The TypeScript type definition
 * @see {@link KEYS_TRANSFER_LOCK_POLICY_BASE} - Array of all keys for this type
 */
export const KEY_TRANSFER_LOCK_POLICY_BASE_SUPPORTED_BY_REGISTRY: keyof TransferLockPolicyBase = 'supported_by_registry';

/**
 * Array of all TransferLockPolicyBase property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for TransferLockPolicyBase objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all keys
 * for (const key of KEYS_TRANSFER_LOCK_POLICY_BASE) {
 *   console.log(`Property: ${key}, Value: ${transferlockpolicybase[key]}`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_TRANSFER_LOCK_POLICY_BASE.includes(someKey);
 * ```
 *
 * @see {@link TransferLockPolicyBase} - The TypeScript type definition
 */
export const KEYS_TRANSFER_LOCK_POLICY_BASE = [
  KEY_TRANSFER_LOCK_POLICY_BASE_SUPPORTED_BY_REGISTRAR,
  KEY_TRANSFER_LOCK_POLICY_BASE_SUPPORTED_BY_REGISTRY,
] as const satisfies (keyof TransferLockPolicyBase)[];

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
export const KEY_TRANSFER_POLICIES_BASE_AUTHINFO_MAX_LENGTH: keyof TransferPoliciesBase = 'authinfo_max_length';
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
export const KEY_TRANSFER_POLICIES_BASE_AUTHINFO_MIN_LENGTH: keyof TransferPoliciesBase = 'authinfo_min_length';
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
export const KEY_TRANSFER_POLICIES_BASE_AUTHINFO_REQUIRED: keyof TransferPoliciesBase = 'authinfo_required';
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
export const KEY_TRANSFER_POLICIES_BASE_AUTHINFO_TIME_LIMITED: keyof TransferPoliciesBase = 'authinfo_time_limited';
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
export const KEY_TRANSFER_POLICIES_BASE_AUTHINFO_VALIDITY_PERIOD: keyof TransferPoliciesBase = 'authinfo_validity_period';
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
export const KEY_TRANSFER_POLICIES_BASE_INFO_CONTACT_AUTHINFO: keyof TransferPoliciesBase = 'info_contact_authinfo';
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
export const KEY_TRANSFER_POLICIES_BASE_INFO_DOMAIN_AUTHINFO: keyof TransferPoliciesBase = 'info_domain_authinfo';
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
export const KEY_TRANSFER_POLICIES_BASE_POST_TRANSFER_REQUIREMENTS: keyof TransferPoliciesBase = 'post_transfer_requirements';
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
export const KEY_TRANSFER_POLICIES_BASE_TRANSFER_ACK: keyof TransferPoliciesBase = 'transfer_ack';
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
export const KEY_TRANSFER_POLICIES_BASE_TRANSFER_EMAIL_REQUIRED: keyof TransferPoliciesBase = 'transfer_email_required';
/**
 * transfer_lock_policy property
 *
 * Transfer lock policy
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `transfer_lock_policy` property of TransferPoliciesBase objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = transferpoliciesbase[KEY_TRANSFER_POLICIES_BASE_TRANSFER_LOCK_POLICY];
 * 
 * // Dynamic property access
 * const propertyName = KEY_TRANSFER_POLICIES_BASE_TRANSFER_LOCK_POLICY;
 * const value = transferpoliciesbase[propertyName];
 * ```
 *
 * @see {@link TransferPoliciesBase} - The TypeScript type definition
 * @see {@link KEYS_TRANSFER_POLICIES_BASE} - Array of all keys for this type
 */
export const KEY_TRANSFER_POLICIES_BASE_TRANSFER_LOCK_POLICY: keyof TransferPoliciesBase = 'transfer_lock_policy';
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
export const KEY_TRANSFER_POLICIES_BASE_TRANSFER_NACK: keyof TransferPoliciesBase = 'transfer_nack';
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
export const KEY_TRANSFER_POLICIES_BASE_TRANSFER_RENEWAL_PERIOD: keyof TransferPoliciesBase = 'transfer_renewal_period';
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
export const KEY_TRANSFER_POLICIES_BASE_TRANSFER_RENEWS_DOMAIN: keyof TransferPoliciesBase = 'transfer_renews_domain';
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
export const KEY_TRANSFER_POLICIES_BASE_TRANSFER_TIME: keyof TransferPoliciesBase = 'transfer_time';

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
  KEY_TRANSFER_POLICIES_BASE_TRANSFER_LOCK_POLICY,
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
export const KEY_USER_CREATED_ON: keyof User = 'created_on';
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
export const KEY_USER_DELETED_ON: keyof User = 'deleted_on';
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
export const KEY_USER_EMAIL: keyof User = 'email';
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
export const KEY_USER_FIRST_NAME: keyof User = 'first_name';
/**
 * Keycloak User Id
 *
 * Keycloak user id
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `keycloak_user_id` property of User objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = user[KEY_USER_KEYCLOAK_USER_ID];
 * 
 * // Dynamic property access
 * const propertyName = KEY_USER_KEYCLOAK_USER_ID;
 * const value = user[propertyName];
 * ```
 *
 * @see {@link User} - The TypeScript type definition
 * @see {@link KEYS_USER} - Array of all keys for this type
 */
export const KEY_USER_KEYCLOAK_USER_ID: keyof User = 'keycloak_user_id';
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
export const KEY_USER_LAST_NAME: keyof User = 'last_name';
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
export const KEY_USER_LOCALE: keyof User = 'locale';
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
export const KEY_USER_ORGANIZATION_ID: keyof User = 'organization_id';
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
export const KEY_USER_PHONE: keyof User = 'phone';
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
export const KEY_USER_STATUS: keyof User = 'status';
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
export const KEY_USER_UPDATED_ON: keyof User = 'updated_on';
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
export const KEY_USER_USER_ID: keyof User = 'user_id';
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
export const KEY_USER_USERNAME: keyof User = 'username';

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
  KEY_USER_KEYCLOAK_USER_ID,
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
export const KEY_USER_ATTRIBUTE_BASE_KEY: keyof UserAttributeBase = 'key';
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
export const KEY_USER_ATTRIBUTE_BASE_VALUE: keyof UserAttributeBase = 'value';

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
 * Key
 *
 * Key of the attribute.
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `key` property of UserAttribute objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = userattribute[KEY_USER_ATTRIBUTE_KEY];
 * 
 * // Dynamic property access
 * const propertyName = KEY_USER_ATTRIBUTE_KEY;
 * const value = userattribute[propertyName];
 * ```
 *
 * @see {@link UserAttribute} - The TypeScript type definition
 * @see {@link KEYS_USER_ATTRIBUTE} - Array of all keys for this type
 */
export const KEY_USER_ATTRIBUTE_KEY: keyof UserAttribute = 'key';
/**
 * value property
 *
 * Value of the attribute.
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `value` property of UserAttribute objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = userattribute[KEY_USER_ATTRIBUTE_VALUE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_USER_ATTRIBUTE_VALUE;
 * const value = userattribute[propertyName];
 * ```
 *
 * @see {@link UserAttribute} - The TypeScript type definition
 * @see {@link KEYS_USER_ATTRIBUTE} - Array of all keys for this type
 */
export const KEY_USER_ATTRIBUTE_VALUE: keyof UserAttribute = 'value';

/**
 * Array of all UserAttribute property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for UserAttribute objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all keys
 * for (const key of KEYS_USER_ATTRIBUTE) {
 *   console.log(`Property: ${key}, Value: ${userattribute[key]}`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_USER_ATTRIBUTE.includes(someKey);
 * ```
 *
 * @see {@link UserAttribute} - The TypeScript type definition
 */
export const KEYS_USER_ATTRIBUTE = [
  KEY_USER_ATTRIBUTE_KEY,
  KEY_USER_ATTRIBUTE_VALUE,
] as const satisfies (keyof UserAttribute)[];

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
export const KEY_USER_CREATE_EMAIL: keyof UserCreate = 'email';
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
export const KEY_USER_CREATE_FIRST_NAME: keyof UserCreate = 'first_name';
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
export const KEY_USER_CREATE_LAST_NAME: keyof UserCreate = 'last_name';
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
export const KEY_USER_CREATE_LOCALE: keyof UserCreate = 'locale';
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
export const KEY_USER_CREATE_PASSWORD: keyof UserCreate = 'password';
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
export const KEY_USER_CREATE_PHONE: keyof UserCreate = 'phone';
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
export const KEY_USER_CREATE_USER_ATTRIBUTES: keyof UserCreate = 'user_attributes';
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
export const KEY_USER_CREATE_USERNAME: keyof UserCreate = 'username';

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
 * This key constant provides type-safe access to the `created_on` property of UserPublic objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = userpublic[KEY_USER_PUBLIC_CREATED_ON];
 * 
 * // Dynamic property access
 * const propertyName = KEY_USER_PUBLIC_CREATED_ON;
 * const value = userpublic[propertyName];
 * ```
 *
 * @see {@link UserPublic} - The TypeScript type definition
 * @see {@link KEYS_USER_PUBLIC} - Array of all keys for this type
 */
export const KEY_USER_PUBLIC_CREATED_ON: keyof UserPublic = 'created_on';
/**
 * Deleted On
 *
 * The date/time the entry was deleted on
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `deleted_on` property of UserPublic objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = userpublic[KEY_USER_PUBLIC_DELETED_ON];
 * 
 * // Dynamic property access
 * const propertyName = KEY_USER_PUBLIC_DELETED_ON;
 * const value = userpublic[propertyName];
 * ```
 *
 * @see {@link UserPublic} - The TypeScript type definition
 * @see {@link KEYS_USER_PUBLIC} - Array of all keys for this type
 */
export const KEY_USER_PUBLIC_DELETED_ON: keyof UserPublic = 'deleted_on';
/**
 * Email
 *
 * The user's email address
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `email` property of UserPublic objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = userpublic[KEY_USER_PUBLIC_EMAIL];
 * 
 * // Dynamic property access
 * const propertyName = KEY_USER_PUBLIC_EMAIL;
 * const value = userpublic[propertyName];
 * ```
 *
 * @see {@link UserPublic} - The TypeScript type definition
 * @see {@link KEYS_USER_PUBLIC} - Array of all keys for this type
 */
export const KEY_USER_PUBLIC_EMAIL: keyof UserPublic = 'email';
/**
 * First Name
 *
 * The user's first name
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `first_name` property of UserPublic objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = userpublic[KEY_USER_PUBLIC_FIRST_NAME];
 * 
 * // Dynamic property access
 * const propertyName = KEY_USER_PUBLIC_FIRST_NAME;
 * const value = userpublic[propertyName];
 * ```
 *
 * @see {@link UserPublic} - The TypeScript type definition
 * @see {@link KEYS_USER_PUBLIC} - Array of all keys for this type
 */
export const KEY_USER_PUBLIC_FIRST_NAME: keyof UserPublic = 'first_name';
/**
 * Last Name
 *
 * The user's last name
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `last_name` property of UserPublic objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = userpublic[KEY_USER_PUBLIC_LAST_NAME];
 * 
 * // Dynamic property access
 * const propertyName = KEY_USER_PUBLIC_LAST_NAME;
 * const value = userpublic[propertyName];
 * ```
 *
 * @see {@link UserPublic} - The TypeScript type definition
 * @see {@link KEYS_USER_PUBLIC} - Array of all keys for this type
 */
export const KEY_USER_PUBLIC_LAST_NAME: keyof UserPublic = 'last_name';
/**
 * Locale
 *
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `locale` property of UserPublic objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = userpublic[KEY_USER_PUBLIC_LOCALE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_USER_PUBLIC_LOCALE;
 * const value = userpublic[propertyName];
 * ```
 *
 * @see {@link UserPublic} - The TypeScript type definition
 * @see {@link KEYS_USER_PUBLIC} - Array of all keys for this type
 */
export const KEY_USER_PUBLIC_LOCALE: keyof UserPublic = 'locale';
/**
 * Organization Id
 *
 * The user's organization id
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `organization_id` property of UserPublic objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = userpublic[KEY_USER_PUBLIC_ORGANIZATION_ID];
 * 
 * // Dynamic property access
 * const propertyName = KEY_USER_PUBLIC_ORGANIZATION_ID;
 * const value = userpublic[propertyName];
 * ```
 *
 * @see {@link UserPublic} - The TypeScript type definition
 * @see {@link KEYS_USER_PUBLIC} - Array of all keys for this type
 */
export const KEY_USER_PUBLIC_ORGANIZATION_ID: keyof UserPublic = 'organization_id';
/**
 * Phone
 *
 * The user's phone number
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `phone` property of UserPublic objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = userpublic[KEY_USER_PUBLIC_PHONE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_USER_PUBLIC_PHONE;
 * const value = userpublic[propertyName];
 * ```
 *
 * @see {@link UserPublic} - The TypeScript type definition
 * @see {@link KEYS_USER_PUBLIC} - Array of all keys for this type
 */
export const KEY_USER_PUBLIC_PHONE: keyof UserPublic = 'phone';
/**
 * status property
 *
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `status` property of UserPublic objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = userpublic[KEY_USER_PUBLIC_STATUS];
 * 
 * // Dynamic property access
 * const propertyName = KEY_USER_PUBLIC_STATUS;
 * const value = userpublic[propertyName];
 * ```
 *
 * @see {@link UserPublic} - The TypeScript type definition
 * @see {@link KEYS_USER_PUBLIC} - Array of all keys for this type
 */
export const KEY_USER_PUBLIC_STATUS: keyof UserPublic = 'status';
/**
 * Updated On
 *
 * The date/time the entry was last updated on
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `updated_on` property of UserPublic objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = userpublic[KEY_USER_PUBLIC_UPDATED_ON];
 * 
 * // Dynamic property access
 * const propertyName = KEY_USER_PUBLIC_UPDATED_ON;
 * const value = userpublic[propertyName];
 * ```
 *
 * @see {@link UserPublic} - The TypeScript type definition
 * @see {@link KEYS_USER_PUBLIC} - Array of all keys for this type
 */
export const KEY_USER_PUBLIC_UPDATED_ON: keyof UserPublic = 'updated_on';
/**
 * User Id
 *
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `user_id` property of UserPublic objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = userpublic[KEY_USER_PUBLIC_USER_ID];
 * 
 * // Dynamic property access
 * const propertyName = KEY_USER_PUBLIC_USER_ID;
 * const value = userpublic[propertyName];
 * ```
 *
 * @see {@link UserPublic} - The TypeScript type definition
 * @see {@link KEYS_USER_PUBLIC} - Array of all keys for this type
 */
export const KEY_USER_PUBLIC_USER_ID: keyof UserPublic = 'user_id';
/**
 * Username
 *
 * The user's unique username
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `username` property of UserPublic objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = userpublic[KEY_USER_PUBLIC_USERNAME];
 * 
 * // Dynamic property access
 * const propertyName = KEY_USER_PUBLIC_USERNAME;
 * const value = userpublic[propertyName];
 * ```
 *
 * @see {@link UserPublic} - The TypeScript type definition
 * @see {@link KEYS_USER_PUBLIC} - Array of all keys for this type
 */
export const KEY_USER_PUBLIC_USERNAME: keyof UserPublic = 'username';

/**
 * Array of all UserPublic property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for UserPublic objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all keys
 * for (const key of KEYS_USER_PUBLIC) {
 *   console.log(`Property: ${key}, Value: ${userpublic[key]}`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_USER_PUBLIC.includes(someKey);
 * ```
 *
 * @see {@link UserPublic} - The TypeScript type definition
 */
export const KEYS_USER_PUBLIC = [
  KEY_USER_PUBLIC_CREATED_ON,
  KEY_USER_PUBLIC_DELETED_ON,
  KEY_USER_PUBLIC_EMAIL,
  KEY_USER_PUBLIC_FIRST_NAME,
  KEY_USER_PUBLIC_LAST_NAME,
  KEY_USER_PUBLIC_LOCALE,
  KEY_USER_PUBLIC_ORGANIZATION_ID,
  KEY_USER_PUBLIC_PHONE,
  KEY_USER_PUBLIC_STATUS,
  KEY_USER_PUBLIC_UPDATED_ON,
  KEY_USER_PUBLIC_USER_ID,
  KEY_USER_PUBLIC_USERNAME,
] as const satisfies (keyof UserPublic)[];

/**
 * Created On
 *
 * The date/time the entry was created on
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `created_on` property of UserPublicWithAttributes objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = userpublicwithattributes[KEY_USER_PUBLIC_WITH_ATTRIBUTES_CREATED_ON];
 * 
 * // Dynamic property access
 * const propertyName = KEY_USER_PUBLIC_WITH_ATTRIBUTES_CREATED_ON;
 * const value = userpublicwithattributes[propertyName];
 * ```
 *
 * @see {@link UserPublicWithAttributes} - The TypeScript type definition
 * @see {@link KEYS_USER_PUBLIC_WITH_ATTRIBUTES} - Array of all keys for this type
 */
export const KEY_USER_PUBLIC_WITH_ATTRIBUTES_CREATED_ON: keyof UserPublicWithAttributes = 'created_on';
/**
 * Deleted On
 *
 * The date/time the entry was deleted on
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `deleted_on` property of UserPublicWithAttributes objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = userpublicwithattributes[KEY_USER_PUBLIC_WITH_ATTRIBUTES_DELETED_ON];
 * 
 * // Dynamic property access
 * const propertyName = KEY_USER_PUBLIC_WITH_ATTRIBUTES_DELETED_ON;
 * const value = userpublicwithattributes[propertyName];
 * ```
 *
 * @see {@link UserPublicWithAttributes} - The TypeScript type definition
 * @see {@link KEYS_USER_PUBLIC_WITH_ATTRIBUTES} - Array of all keys for this type
 */
export const KEY_USER_PUBLIC_WITH_ATTRIBUTES_DELETED_ON: keyof UserPublicWithAttributes = 'deleted_on';
/**
 * Email
 *
 * The user's email address
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `email` property of UserPublicWithAttributes objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = userpublicwithattributes[KEY_USER_PUBLIC_WITH_ATTRIBUTES_EMAIL];
 * 
 * // Dynamic property access
 * const propertyName = KEY_USER_PUBLIC_WITH_ATTRIBUTES_EMAIL;
 * const value = userpublicwithattributes[propertyName];
 * ```
 *
 * @see {@link UserPublicWithAttributes} - The TypeScript type definition
 * @see {@link KEYS_USER_PUBLIC_WITH_ATTRIBUTES} - Array of all keys for this type
 */
export const KEY_USER_PUBLIC_WITH_ATTRIBUTES_EMAIL: keyof UserPublicWithAttributes = 'email';
/**
 * First Name
 *
 * The user's first name
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `first_name` property of UserPublicWithAttributes objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = userpublicwithattributes[KEY_USER_PUBLIC_WITH_ATTRIBUTES_FIRST_NAME];
 * 
 * // Dynamic property access
 * const propertyName = KEY_USER_PUBLIC_WITH_ATTRIBUTES_FIRST_NAME;
 * const value = userpublicwithattributes[propertyName];
 * ```
 *
 * @see {@link UserPublicWithAttributes} - The TypeScript type definition
 * @see {@link KEYS_USER_PUBLIC_WITH_ATTRIBUTES} - Array of all keys for this type
 */
export const KEY_USER_PUBLIC_WITH_ATTRIBUTES_FIRST_NAME: keyof UserPublicWithAttributes = 'first_name';
/**
 * Last Name
 *
 * The user's last name
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `last_name` property of UserPublicWithAttributes objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = userpublicwithattributes[KEY_USER_PUBLIC_WITH_ATTRIBUTES_LAST_NAME];
 * 
 * // Dynamic property access
 * const propertyName = KEY_USER_PUBLIC_WITH_ATTRIBUTES_LAST_NAME;
 * const value = userpublicwithattributes[propertyName];
 * ```
 *
 * @see {@link UserPublicWithAttributes} - The TypeScript type definition
 * @see {@link KEYS_USER_PUBLIC_WITH_ATTRIBUTES} - Array of all keys for this type
 */
export const KEY_USER_PUBLIC_WITH_ATTRIBUTES_LAST_NAME: keyof UserPublicWithAttributes = 'last_name';
/**
 * Locale
 *
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `locale` property of UserPublicWithAttributes objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = userpublicwithattributes[KEY_USER_PUBLIC_WITH_ATTRIBUTES_LOCALE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_USER_PUBLIC_WITH_ATTRIBUTES_LOCALE;
 * const value = userpublicwithattributes[propertyName];
 * ```
 *
 * @see {@link UserPublicWithAttributes} - The TypeScript type definition
 * @see {@link KEYS_USER_PUBLIC_WITH_ATTRIBUTES} - Array of all keys for this type
 */
export const KEY_USER_PUBLIC_WITH_ATTRIBUTES_LOCALE: keyof UserPublicWithAttributes = 'locale';
/**
 * Organization Id
 *
 * The user's organization id
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `organization_id` property of UserPublicWithAttributes objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = userpublicwithattributes[KEY_USER_PUBLIC_WITH_ATTRIBUTES_ORGANIZATION_ID];
 * 
 * // Dynamic property access
 * const propertyName = KEY_USER_PUBLIC_WITH_ATTRIBUTES_ORGANIZATION_ID;
 * const value = userpublicwithattributes[propertyName];
 * ```
 *
 * @see {@link UserPublicWithAttributes} - The TypeScript type definition
 * @see {@link KEYS_USER_PUBLIC_WITH_ATTRIBUTES} - Array of all keys for this type
 */
export const KEY_USER_PUBLIC_WITH_ATTRIBUTES_ORGANIZATION_ID: keyof UserPublicWithAttributes = 'organization_id';
/**
 * Phone
 *
 * The user's phone number
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `phone` property of UserPublicWithAttributes objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = userpublicwithattributes[KEY_USER_PUBLIC_WITH_ATTRIBUTES_PHONE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_USER_PUBLIC_WITH_ATTRIBUTES_PHONE;
 * const value = userpublicwithattributes[propertyName];
 * ```
 *
 * @see {@link UserPublicWithAttributes} - The TypeScript type definition
 * @see {@link KEYS_USER_PUBLIC_WITH_ATTRIBUTES} - Array of all keys for this type
 */
export const KEY_USER_PUBLIC_WITH_ATTRIBUTES_PHONE: keyof UserPublicWithAttributes = 'phone';
/**
 * status property
 *
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `status` property of UserPublicWithAttributes objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = userpublicwithattributes[KEY_USER_PUBLIC_WITH_ATTRIBUTES_STATUS];
 * 
 * // Dynamic property access
 * const propertyName = KEY_USER_PUBLIC_WITH_ATTRIBUTES_STATUS;
 * const value = userpublicwithattributes[propertyName];
 * ```
 *
 * @see {@link UserPublicWithAttributes} - The TypeScript type definition
 * @see {@link KEYS_USER_PUBLIC_WITH_ATTRIBUTES} - Array of all keys for this type
 */
export const KEY_USER_PUBLIC_WITH_ATTRIBUTES_STATUS: keyof UserPublicWithAttributes = 'status';
/**
 * Updated On
 *
 * The date/time the entry was last updated on
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `updated_on` property of UserPublicWithAttributes objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = userpublicwithattributes[KEY_USER_PUBLIC_WITH_ATTRIBUTES_UPDATED_ON];
 * 
 * // Dynamic property access
 * const propertyName = KEY_USER_PUBLIC_WITH_ATTRIBUTES_UPDATED_ON;
 * const value = userpublicwithattributes[propertyName];
 * ```
 *
 * @see {@link UserPublicWithAttributes} - The TypeScript type definition
 * @see {@link KEYS_USER_PUBLIC_WITH_ATTRIBUTES} - Array of all keys for this type
 */
export const KEY_USER_PUBLIC_WITH_ATTRIBUTES_UPDATED_ON: keyof UserPublicWithAttributes = 'updated_on';
/**
 * User Attributes
 *
 * All of the user attributes
 *
 * @type {object}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `user_attributes` property of UserPublicWithAttributes objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = userpublicwithattributes[KEY_USER_PUBLIC_WITH_ATTRIBUTES_USER_ATTRIBUTES];
 * 
 * // Dynamic property access
 * const propertyName = KEY_USER_PUBLIC_WITH_ATTRIBUTES_USER_ATTRIBUTES;
 * const value = userpublicwithattributes[propertyName];
 * ```
 *
 * @see {@link UserPublicWithAttributes} - The TypeScript type definition
 * @see {@link KEYS_USER_PUBLIC_WITH_ATTRIBUTES} - Array of all keys for this type
 */
export const KEY_USER_PUBLIC_WITH_ATTRIBUTES_USER_ATTRIBUTES: keyof UserPublicWithAttributes = 'user_attributes';
/**
 * User Id
 *
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `user_id` property of UserPublicWithAttributes objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = userpublicwithattributes[KEY_USER_PUBLIC_WITH_ATTRIBUTES_USER_ID];
 * 
 * // Dynamic property access
 * const propertyName = KEY_USER_PUBLIC_WITH_ATTRIBUTES_USER_ID;
 * const value = userpublicwithattributes[propertyName];
 * ```
 *
 * @see {@link UserPublicWithAttributes} - The TypeScript type definition
 * @see {@link KEYS_USER_PUBLIC_WITH_ATTRIBUTES} - Array of all keys for this type
 */
export const KEY_USER_PUBLIC_WITH_ATTRIBUTES_USER_ID: keyof UserPublicWithAttributes = 'user_id';
/**
 * Username
 *
 * The user's unique username
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `username` property of UserPublicWithAttributes objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = userpublicwithattributes[KEY_USER_PUBLIC_WITH_ATTRIBUTES_USERNAME];
 * 
 * // Dynamic property access
 * const propertyName = KEY_USER_PUBLIC_WITH_ATTRIBUTES_USERNAME;
 * const value = userpublicwithattributes[propertyName];
 * ```
 *
 * @see {@link UserPublicWithAttributes} - The TypeScript type definition
 * @see {@link KEYS_USER_PUBLIC_WITH_ATTRIBUTES} - Array of all keys for this type
 */
export const KEY_USER_PUBLIC_WITH_ATTRIBUTES_USERNAME: keyof UserPublicWithAttributes = 'username';

/**
 * Array of all UserPublicWithAttributes property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for UserPublicWithAttributes objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all keys
 * for (const key of KEYS_USER_PUBLIC_WITH_ATTRIBUTES) {
 *   console.log(`Property: ${key}, Value: ${userpublicwithattributes[key]}`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_USER_PUBLIC_WITH_ATTRIBUTES.includes(someKey);
 * ```
 *
 * @see {@link UserPublicWithAttributes} - The TypeScript type definition
 */
export const KEYS_USER_PUBLIC_WITH_ATTRIBUTES = [
  KEY_USER_PUBLIC_WITH_ATTRIBUTES_CREATED_ON,
  KEY_USER_PUBLIC_WITH_ATTRIBUTES_DELETED_ON,
  KEY_USER_PUBLIC_WITH_ATTRIBUTES_EMAIL,
  KEY_USER_PUBLIC_WITH_ATTRIBUTES_FIRST_NAME,
  KEY_USER_PUBLIC_WITH_ATTRIBUTES_LAST_NAME,
  KEY_USER_PUBLIC_WITH_ATTRIBUTES_LOCALE,
  KEY_USER_PUBLIC_WITH_ATTRIBUTES_ORGANIZATION_ID,
  KEY_USER_PUBLIC_WITH_ATTRIBUTES_PHONE,
  KEY_USER_PUBLIC_WITH_ATTRIBUTES_STATUS,
  KEY_USER_PUBLIC_WITH_ATTRIBUTES_UPDATED_ON,
  KEY_USER_PUBLIC_WITH_ATTRIBUTES_USER_ATTRIBUTES,
  KEY_USER_PUBLIC_WITH_ATTRIBUTES_USER_ID,
  KEY_USER_PUBLIC_WITH_ATTRIBUTES_USERNAME,
] as const satisfies (keyof UserPublicWithAttributes)[];

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
export const KEY_USER_TOKEN_ACCESS_TOKEN: keyof UserToken = 'access_token';
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
export const KEY_USER_TOKEN_EXPIRES_IN: keyof UserToken = 'expires_in';
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
export const KEY_USER_TOKEN_REFRESH_EXPIRES_IN: keyof UserToken = 'refresh_expires_in';
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
export const KEY_USER_TOKEN_REFRESH_TOKEN: keyof UserToken = 'refresh_token';
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
export const KEY_USER_TOKEN_TOKEN_TYPE: keyof UserToken = 'token_type';

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
export const KEY_USER_UPDATE_EMAIL: keyof UserUpdate = 'email';
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
export const KEY_USER_UPDATE_FIRST_NAME: keyof UserUpdate = 'first_name';
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
export const KEY_USER_UPDATE_LAST_NAME: keyof UserUpdate = 'last_name';
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
export const KEY_USER_UPDATE_LOCALE: keyof UserUpdate = 'locale';
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
export const KEY_USER_UPDATE_PHONE: keyof UserUpdate = 'phone';
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
export const KEY_USER_UPDATE_USER_ATTRIBUTES: keyof UserUpdate = 'user_attributes';
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
export const KEY_USER_UPDATE_USERNAME: keyof UserUpdate = 'username';

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
export const KEY_USER_WITH_RELATION_PERMISSIONS_CREATED_ON: keyof UserWithRelationPermissions = 'created_on';
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
export const KEY_USER_WITH_RELATION_PERMISSIONS_DELETED_ON: keyof UserWithRelationPermissions = 'deleted_on';
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
export const KEY_USER_WITH_RELATION_PERMISSIONS_EMAIL: keyof UserWithRelationPermissions = 'email';
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
export const KEY_USER_WITH_RELATION_PERMISSIONS_FIRST_NAME: keyof UserWithRelationPermissions = 'first_name';
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
export const KEY_USER_WITH_RELATION_PERMISSIONS_LAST_NAME: keyof UserWithRelationPermissions = 'last_name';
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
export const KEY_USER_WITH_RELATION_PERMISSIONS_LOCALE: keyof UserWithRelationPermissions = 'locale';
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
export const KEY_USER_WITH_RELATION_PERMISSIONS_ORGANIZATION_ID: keyof UserWithRelationPermissions = 'organization_id';
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
export const KEY_USER_WITH_RELATION_PERMISSIONS_PERMISSIONS: keyof UserWithRelationPermissions = 'permissions';
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
export const KEY_USER_WITH_RELATION_PERMISSIONS_PHONE: keyof UserWithRelationPermissions = 'phone';
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
export const KEY_USER_WITH_RELATION_PERMISSIONS_RELATIONS: keyof UserWithRelationPermissions = 'relations';
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
export const KEY_USER_WITH_RELATION_PERMISSIONS_STATUS: keyof UserWithRelationPermissions = 'status';
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
export const KEY_USER_WITH_RELATION_PERMISSIONS_UPDATED_ON: keyof UserWithRelationPermissions = 'updated_on';
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
export const KEY_USER_WITH_RELATION_PERMISSIONS_USER_ATTRIBUTES: keyof UserWithRelationPermissions = 'user_attributes';
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
export const KEY_USER_WITH_RELATION_PERMISSIONS_USER_ID: keyof UserWithRelationPermissions = 'user_id';
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
export const KEY_USER_WITH_RELATION_PERMISSIONS_USERNAME: keyof UserWithRelationPermissions = 'username';

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
export const KEY_VALIDATION_ERROR_LOC: keyof ValidationError = 'loc';
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
export const KEY_VALIDATION_ERROR_MSG: keyof ValidationError = 'msg';
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
export const KEY_VALIDATION_ERROR_TYPE: keyof ValidationError = 'type';

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
export const KEY_WHOIS_BASE_WHOIS_SERVER: keyof WhoisBase = 'whois_server';

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
 * redirect_code property
 *
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `redirect_code` property of WildcardHttpRedirectRequest objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = wildcardhttpredirectrequest[KEY_WILDCARD_HTTP_REDIRECT_REQUEST_REDIRECT_CODE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_WILDCARD_HTTP_REDIRECT_REQUEST_REDIRECT_CODE;
 * const value = wildcardhttpredirectrequest[propertyName];
 * ```
 *
 * @see {@link WildcardHttpRedirectRequest} - The TypeScript type definition
 * @see {@link KEYS_WILDCARD_HTTP_REDIRECT_REQUEST} - Array of all keys for this type
 */
export const KEY_WILDCARD_HTTP_REDIRECT_REQUEST_REDIRECT_CODE: keyof WildcardHttpRedirectRequest = 'redirect_code';
/**
 * Request Path
 *
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `request_path` property of WildcardHttpRedirectRequest objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = wildcardhttpredirectrequest[KEY_WILDCARD_HTTP_REDIRECT_REQUEST_REQUEST_PATH];
 * 
 * // Dynamic property access
 * const propertyName = KEY_WILDCARD_HTTP_REDIRECT_REQUEST_REQUEST_PATH;
 * const value = wildcardhttpredirectrequest[propertyName];
 * ```
 *
 * @see {@link WildcardHttpRedirectRequest} - The TypeScript type definition
 * @see {@link KEYS_WILDCARD_HTTP_REDIRECT_REQUEST} - Array of all keys for this type
 */
export const KEY_WILDCARD_HTTP_REDIRECT_REQUEST_REQUEST_PATH: keyof WildcardHttpRedirectRequest = 'request_path';
/**
 * Request Subdomain
 *
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `request_subdomain` property of WildcardHttpRedirectRequest objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = wildcardhttpredirectrequest[KEY_WILDCARD_HTTP_REDIRECT_REQUEST_REQUEST_SUBDOMAIN];
 * 
 * // Dynamic property access
 * const propertyName = KEY_WILDCARD_HTTP_REDIRECT_REQUEST_REQUEST_SUBDOMAIN;
 * const value = wildcardhttpredirectrequest[propertyName];
 * ```
 *
 * @see {@link WildcardHttpRedirectRequest} - The TypeScript type definition
 * @see {@link KEYS_WILDCARD_HTTP_REDIRECT_REQUEST} - Array of all keys for this type
 */
export const KEY_WILDCARD_HTTP_REDIRECT_REQUEST_REQUEST_SUBDOMAIN: keyof WildcardHttpRedirectRequest = 'request_subdomain';
/**
 * Target Hostname
 *
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `target_hostname` property of WildcardHttpRedirectRequest objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = wildcardhttpredirectrequest[KEY_WILDCARD_HTTP_REDIRECT_REQUEST_TARGET_HOSTNAME];
 * 
 * // Dynamic property access
 * const propertyName = KEY_WILDCARD_HTTP_REDIRECT_REQUEST_TARGET_HOSTNAME;
 * const value = wildcardhttpredirectrequest[propertyName];
 * ```
 *
 * @see {@link WildcardHttpRedirectRequest} - The TypeScript type definition
 * @see {@link KEYS_WILDCARD_HTTP_REDIRECT_REQUEST} - Array of all keys for this type
 */
export const KEY_WILDCARD_HTTP_REDIRECT_REQUEST_TARGET_HOSTNAME: keyof WildcardHttpRedirectRequest = 'target_hostname';
/**
 * Target Path
 *
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `target_path` property of WildcardHttpRedirectRequest objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = wildcardhttpredirectrequest[KEY_WILDCARD_HTTP_REDIRECT_REQUEST_TARGET_PATH];
 * 
 * // Dynamic property access
 * const propertyName = KEY_WILDCARD_HTTP_REDIRECT_REQUEST_TARGET_PATH;
 * const value = wildcardhttpredirectrequest[propertyName];
 * ```
 *
 * @see {@link WildcardHttpRedirectRequest} - The TypeScript type definition
 * @see {@link KEYS_WILDCARD_HTTP_REDIRECT_REQUEST} - Array of all keys for this type
 */
export const KEY_WILDCARD_HTTP_REDIRECT_REQUEST_TARGET_PATH: keyof WildcardHttpRedirectRequest = 'target_path';
/**
 * target_protocol property
 *
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `target_protocol` property of WildcardHttpRedirectRequest objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = wildcardhttpredirectrequest[KEY_WILDCARD_HTTP_REDIRECT_REQUEST_TARGET_PROTOCOL];
 * 
 * // Dynamic property access
 * const propertyName = KEY_WILDCARD_HTTP_REDIRECT_REQUEST_TARGET_PROTOCOL;
 * const value = wildcardhttpredirectrequest[propertyName];
 * ```
 *
 * @see {@link WildcardHttpRedirectRequest} - The TypeScript type definition
 * @see {@link KEYS_WILDCARD_HTTP_REDIRECT_REQUEST} - Array of all keys for this type
 */
export const KEY_WILDCARD_HTTP_REDIRECT_REQUEST_TARGET_PROTOCOL: keyof WildcardHttpRedirectRequest = 'target_protocol';

/**
 * Array of all WildcardHttpRedirectRequest property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for WildcardHttpRedirectRequest objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all keys
 * for (const key of KEYS_WILDCARD_HTTP_REDIRECT_REQUEST) {
 *   console.log(`Property: ${key}, Value: ${wildcardhttpredirectrequest[key]}`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_WILDCARD_HTTP_REDIRECT_REQUEST.includes(someKey);
 * ```
 *
 * @see {@link WildcardHttpRedirectRequest} - The TypeScript type definition
 */
export const KEYS_WILDCARD_HTTP_REDIRECT_REQUEST = [
  KEY_WILDCARD_HTTP_REDIRECT_REQUEST_REDIRECT_CODE,
  KEY_WILDCARD_HTTP_REDIRECT_REQUEST_REQUEST_PATH,
  KEY_WILDCARD_HTTP_REDIRECT_REQUEST_REQUEST_SUBDOMAIN,
  KEY_WILDCARD_HTTP_REDIRECT_REQUEST_TARGET_HOSTNAME,
  KEY_WILDCARD_HTTP_REDIRECT_REQUEST_TARGET_PATH,
  KEY_WILDCARD_HTTP_REDIRECT_REQUEST_TARGET_PROTOCOL,
] as const satisfies (keyof WildcardHttpRedirectRequest)[];

/**
 * Detail
 *
 * Additional information about the result in case of failure
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `detail` property of RequestAuthcode objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = requestauthcode[KEY_REQUEST_AUTHCODE_DETAIL];
 * 
 * // Dynamic property access
 * const propertyName = KEY_REQUEST_AUTHCODE_DETAIL;
 * const value = requestauthcode[propertyName];
 * ```
 *
 * @see {@link RequestAuthcode} - The TypeScript type definition
 * @see {@link KEYS_REQUEST_AUTHCODE} - Array of all keys for this type
 */
export const KEY_REQUEST_AUTHCODE_DETAIL: keyof RequestAuthcode = 'detail';
/**
 * Name
 *
 * The domain name that had the auth code requested
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `name` property of RequestAuthcode objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = requestauthcode[KEY_REQUEST_AUTHCODE_NAME];
 * 
 * // Dynamic property access
 * const propertyName = KEY_REQUEST_AUTHCODE_NAME;
 * const value = requestauthcode[propertyName];
 * ```
 *
 * @see {@link RequestAuthcode} - The TypeScript type definition
 * @see {@link KEYS_REQUEST_AUTHCODE} - Array of all keys for this type
 */
export const KEY_REQUEST_AUTHCODE_NAME: keyof RequestAuthcode = 'name';
/**
 * Success
 *
 * Whether the request had a successful result from DNS Belgium
 *
 * @type {boolean}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `success` property of RequestAuthcode objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = requestauthcode[KEY_REQUEST_AUTHCODE_SUCCESS];
 * 
 * // Dynamic property access
 * const propertyName = KEY_REQUEST_AUTHCODE_SUCCESS;
 * const value = requestauthcode[propertyName];
 * ```
 *
 * @see {@link RequestAuthcode} - The TypeScript type definition
 * @see {@link KEYS_REQUEST_AUTHCODE} - Array of all keys for this type
 */
export const KEY_REQUEST_AUTHCODE_SUCCESS: keyof RequestAuthcode = 'success';

/**
 * Array of all RequestAuthcode property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for RequestAuthcode objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all keys
 * for (const key of KEYS_REQUEST_AUTHCODE) {
 *   console.log(`Property: ${key}, Value: ${requestauthcode[key]}`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_REQUEST_AUTHCODE.includes(someKey);
 * ```
 *
 * @see {@link RequestAuthcode} - The TypeScript type definition
 */
export const KEYS_REQUEST_AUTHCODE = [
  KEY_REQUEST_AUTHCODE_DETAIL,
  KEY_REQUEST_AUTHCODE_NAME,
  KEY_REQUEST_AUTHCODE_SUCCESS,
] as const satisfies (keyof RequestAuthcode)[];

/**
 * Auth Code
 *
 * The auth code returned by EURid
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `auth_code` property of RequestAuthcode2 objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = requestauthcode2[KEY_REQUEST_AUTHCODE2_AUTH_CODE];
 * 
 * // Dynamic property access
 * const propertyName = KEY_REQUEST_AUTHCODE2_AUTH_CODE;
 * const value = requestauthcode2[propertyName];
 * ```
 *
 * @see {@link RequestAuthcode2} - The TypeScript type definition
 * @see {@link KEYS_REQUEST_AUTHCODE2} - Array of all keys for this type
 */
export const KEY_REQUEST_AUTHCODE2_AUTH_CODE: keyof RequestAuthcode2 = 'auth_code';
/**
 * Auth Code Expires On
 *
 * The expiry date of the auth code
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `auth_code_expires_on` property of RequestAuthcode2 objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = requestauthcode2[KEY_REQUEST_AUTHCODE2_AUTH_CODE_EXPIRES_ON];
 * 
 * // Dynamic property access
 * const propertyName = KEY_REQUEST_AUTHCODE2_AUTH_CODE_EXPIRES_ON;
 * const value = requestauthcode2[propertyName];
 * ```
 *
 * @see {@link RequestAuthcode2} - The TypeScript type definition
 * @see {@link KEYS_REQUEST_AUTHCODE2} - Array of all keys for this type
 */
export const KEY_REQUEST_AUTHCODE2_AUTH_CODE_EXPIRES_ON: keyof RequestAuthcode2 = 'auth_code_expires_on';
/**
 * Detail
 *
 * Additional information about the result in case of failure
 *
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `detail` property of RequestAuthcode2 objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = requestauthcode2[KEY_REQUEST_AUTHCODE2_DETAIL];
 * 
 * // Dynamic property access
 * const propertyName = KEY_REQUEST_AUTHCODE2_DETAIL;
 * const value = requestauthcode2[propertyName];
 * ```
 *
 * @see {@link RequestAuthcode2} - The TypeScript type definition
 * @see {@link KEYS_REQUEST_AUTHCODE2} - Array of all keys for this type
 */
export const KEY_REQUEST_AUTHCODE2_DETAIL: keyof RequestAuthcode2 = 'detail';
/**
 * Name
 *
 * The domain name that had the auth code requested
 *
 * @type {string}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `name` property of RequestAuthcode2 objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = requestauthcode2[KEY_REQUEST_AUTHCODE2_NAME];
 * 
 * // Dynamic property access
 * const propertyName = KEY_REQUEST_AUTHCODE2_NAME;
 * const value = requestauthcode2[propertyName];
 * ```
 *
 * @see {@link RequestAuthcode2} - The TypeScript type definition
 * @see {@link KEYS_REQUEST_AUTHCODE2} - Array of all keys for this type
 */
export const KEY_REQUEST_AUTHCODE2_NAME: keyof RequestAuthcode2 = 'name';
/**
 * Success
 *
 * Whether the request had a successful result from EURid
 *
 * @type {boolean}
 *
 *
 * @remarks
 * This key constant provides type-safe access to the `success` property of RequestAuthcode2 objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * ```typescript
 * // Direct property access
 * const value = requestauthcode2[KEY_REQUEST_AUTHCODE2_SUCCESS];
 * 
 * // Dynamic property access
 * const propertyName = KEY_REQUEST_AUTHCODE2_SUCCESS;
 * const value = requestauthcode2[propertyName];
 * ```
 *
 * @see {@link RequestAuthcode2} - The TypeScript type definition
 * @see {@link KEYS_REQUEST_AUTHCODE2} - Array of all keys for this type
 */
export const KEY_REQUEST_AUTHCODE2_SUCCESS: keyof RequestAuthcode2 = 'success';

/**
 * Array of all RequestAuthcode2 property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for RequestAuthcode2 objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * ```typescript
 * // Iterating through all keys
 * for (const key of KEYS_REQUEST_AUTHCODE2) {
 *   console.log(`Property: ${key}, Value: ${requestauthcode2[key]}`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_REQUEST_AUTHCODE2.includes(someKey);
 * ```
 *
 * @see {@link RequestAuthcode2} - The TypeScript type definition
 */
export const KEYS_REQUEST_AUTHCODE2 = [
  KEY_REQUEST_AUTHCODE2_AUTH_CODE,
  KEY_REQUEST_AUTHCODE2_AUTH_CODE_EXPIRES_ON,
  KEY_REQUEST_AUTHCODE2_DETAIL,
  KEY_REQUEST_AUTHCODE2_NAME,
  KEY_REQUEST_AUTHCODE2_SUCCESS,
] as const satisfies (keyof RequestAuthcode2)[];

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
export const KEY_DOMAIN_AVAILABILITY_LIST_META: keyof DomainAvailabilityList = 'meta';
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
export const KEY_DOMAIN_AVAILABILITY_LIST_RESULTS: keyof DomainAvailabilityList = 'results';

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
export const KEY_DOMAIN_AVAILABILITY_CHECK_AVAILABLE: keyof DomainAvailabilityCheck = 'available';
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
export const KEY_DOMAIN_AVAILABILITY_CHECK_DOMAIN: keyof DomainAvailabilityCheck = 'domain';
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
export const KEY_DOMAIN_AVAILABILITY_CHECK_REASON: keyof DomainAvailabilityCheck = 'reason';

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
