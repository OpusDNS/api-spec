/**
 * Direct type aliases for OpenAPI schemas
 *
 * This file contains TypeScript type aliases that directly reference OpenAPI schema definitions.
 * Each type alias provides a clean, developer-friendly name for the corresponding OpenAPI schema.
 * These types are used throughout the API for request/response objects and data structures.
 *
 * @remarks
 * - All types follow the pattern: `TypeName = components['schemas']['SchemaName']`
 * - Type names are automatically generated from OpenAPI schema names
 * - Each type includes documentation from the original OpenAPI schema
 * - These types ensure type safety when working with API data
 *
 * @example
 * ```typescript
 * // Using schema types for API responses
 * const response = await api.getDomain('example.com');
 * const domain: Domain = response.results;
 * 
 * const contactsResponse = await api.getContacts();
 * const contacts: Contact[] = contactsResponse.results;
 * ```
 *
 * This file is auto-generated from the OpenAPI specification.
 * Do not edit manually.
 */
import { components } from '../schema';

/**
 * AgreementType
 *
 * @remarks
 * Type alias for the `AgreementType` OpenAPI schema.
 * This type represents agreementtype data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getAgreementType();
 * const item: AgreementType = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type AgreementType = components['schemas']['AgreementType'];
/**
 * AllocationMethodType
 *
 * @remarks
 * Type alias for the `AllocationMethodType` OpenAPI schema.
 * This type represents allocationmethodtype data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getAllocationMethodType();
 * const item: AllocationMethodType = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type AllocationMethodType = components['schemas']['AllocationMethodType'];
/**
 * AllowedNumberOfNameserverBase
 *
 * @remarks
 * Type alias for the `AllowedNumberOfNameserverBase` OpenAPI schema.
 * This type represents allowednumberofnameserverbase data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getAllowedNumberOfNameserverBase();
 * const item: AllowedNumberOfNameserverBase = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type AllowedNumberOfNameserverBase = components['schemas']['AllowedNumberOfNameserverBase'];
/**
 * BillingMetadata
 *
 * @remarks
 * Type alias for the `BillingMetadata` OpenAPI schema.
 * This type represents billingmetadata data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getBillingMetadata();
 * const item: BillingMetadata = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type BillingMetadata = components['schemas']['BillingMetadata'];
/**
 * BillingPlan
 *
 * @remarks
 * Type alias for the `BillingPlan` OpenAPI schema.
 * This type represents billingplan data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getBillingPlan();
 * const item: BillingPlan = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type BillingPlan = components['schemas']['BillingPlan'];
/**
 * BillingTransactionAction
 *
 * @remarks
 * Type alias for the `BillingTransactionAction` OpenAPI schema.
 * This type represents billingtransactionaction data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getBillingTransactionAction();
 * const item: BillingTransactionAction = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type BillingTransactionAction = components['schemas']['BillingTransactionAction'];
/**
 * BillingTransactionProductType
 *
 * @remarks
 * Type alias for the `BillingTransactionProductType` OpenAPI schema.
 * This type represents billingtransactionproducttype data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getBillingTransactionProductType();
 * const item: BillingTransactionProductType = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type BillingTransactionProductType = components['schemas']['BillingTransactionProductType'];
/**
 * Body_issue_organization_token_v1_auth_token_post
 *
 * @remarks
 * Type alias for the `Body_issue_organization_token_v1_auth_token_post` OpenAPI schema.
 * This type represents body_issue_organization_token_v1_auth_token_post data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getBody_issue_organization_token_v1_auth_token_post();
 * const item: Body_issue_organization_token_v1_auth_token_post = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type Body_issue_organization_token_v1_auth_token_post = components['schemas']['Body_issue_organization_token_v1_auth_token_post'];
/**
 * ContactConfigBase
 *
 * @remarks
 * Type alias for the `ContactConfigBase` OpenAPI schema.
 * This type represents contactconfigbase data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getContactConfigBase();
 * const item: ContactConfigBase = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type ContactConfigBase = components['schemas']['ContactConfigBase'];
/**
 * ContactCreate
 *
 * @remarks
 * Type alias for the `ContactCreate` OpenAPI schema.
 * This type represents contactcreate data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getContactCreate();
 * const item: ContactCreate = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type ContactCreate = components['schemas']['ContactCreate'];
/**
 * ContactHandle
 *
 * @remarks
 * Type alias for the `ContactHandle` OpenAPI schema.
 * This type represents contacthandle data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getContactHandle();
 * const item: ContactHandle = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type ContactHandle = components['schemas']['ContactHandle'];
/**
 * ContactIdList
 *
 * @remarks
 * Type alias for the `ContactIdList` OpenAPI schema.
 * This type represents contactidlist data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getContactIdList();
 * const item: ContactIdList = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type ContactIdList = components['schemas']['ContactIdList'];
/**
 * ContactResponse
 *
 * @remarks
 * Type alias for the `ContactResponse` OpenAPI schema.
 * This type represents contactresponse data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getContact();
 * const item: Contact = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type Contact = components['schemas']['ContactResponse'];
/**
 * ContactRoleType
 *
 * @remarks
 * Type alias for the `ContactRoleType` OpenAPI schema.
 * This type represents contactroletype data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getContactRoleType();
 * const item: ContactRoleType = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type ContactRoleType = components['schemas']['ContactRoleType'];
/**
 * ContactSchema
 *
 * @remarks
 * Type alias for the `ContactSchema` OpenAPI schema.
 * This type represents contactschema data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getContactSchema();
 * const item: ContactSchema = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type ContactSchema = components['schemas']['ContactSchema'];
/**
 * ContactSortField
 *
 * @remarks
 * Type alias for the `ContactSortField` OpenAPI schema.
 * This type represents contactsortfield data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getContactSortField();
 * const item: ContactSortField = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type ContactSortField = components['schemas']['ContactSortField'];
/**
 * ContactVerificationApiResponse
 *
 * @remarks
 * Type alias for the `ContactVerificationApiResponse` OpenAPI schema.
 * This type represents contactverificationapiresponse data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getContactVerificationApi();
 * const item: ContactVerificationApi = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type ContactVerificationApi = components['schemas']['ContactVerificationApiResponse'];
/**
 * ContactVerificationEmailResponse
 *
 * @remarks
 * Type alias for the `ContactVerificationEmailResponse` OpenAPI schema.
 * This type represents contactverificationemailresponse data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getContactVerificationEmail();
 * const item: ContactVerificationEmail = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type ContactVerificationEmail = components['schemas']['ContactVerificationEmailResponse'];
/**
 * ContactVerificationResponse
 *
 * @remarks
 * Type alias for the `ContactVerificationResponse` OpenAPI schema.
 * This type represents contactverificationresponse data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getContactVerification();
 * const item: ContactVerification = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type ContactVerification = components['schemas']['ContactVerificationResponse'];
/**
 * ContactsBase
 *
 * @remarks
 * Type alias for the `ContactsBase` OpenAPI schema.
 * This type represents contactsbase data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getContactsBase();
 * const item: ContactsBase = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type ContactsBase = components['schemas']['ContactsBase'];
/**
 * Currency
 *
 * @remarks
 * Type alias for the `Currency` OpenAPI schema.
 * This type represents currency data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getCurrency();
 * const item: Currency = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type Currency = components['schemas']['Currency'];
/**
 * DeletePolicyType
 *
 * @remarks
 * Type alias for the `DeletePolicyType` OpenAPI schema.
 * This type represents deletepolicytype data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getDeletePolicyType();
 * const item: DeletePolicyType = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type DeletePolicyType = components['schemas']['DeletePolicyType'];
/**
 * DnsChangeAction
 *
 * @remarks
 * Type alias for the `DnsChangeAction` OpenAPI schema.
 * This type represents dnschangeaction data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getDnsChangeAction();
 * const item: DnsChangeAction = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type DnsChangeAction = components['schemas']['DnsChangeAction'];
/**
 * DnsChangeResponse
 *
 * @remarks
 * Type alias for the `DnsChangeResponse` OpenAPI schema.
 * This type represents dnschangeresponse data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getDnsChange();
 * const item: DnsChange = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type DnsChange = components['schemas']['DnsChangeResponse'];
/**
 * DnsChangesResponse
 *
 * @remarks
 * Type alias for the `DnsChangesResponse` OpenAPI schema.
 * This type represents dnschangesresponse data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getDnsChanges();
 * const item: DnsChanges = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type DnsChanges = components['schemas']['DnsChangesResponse'];
/**
 * DnsConfigurationBase
 *
 * @remarks
 * Type alias for the `DnsConfigurationBase` OpenAPI schema.
 * This type represents dnsconfigurationbase data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getDnsConfigurationBase();
 * const item: DnsConfigurationBase = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type DnsConfigurationBase = components['schemas']['DnsConfigurationBase'];
/**
 * DnsRecordCreate
 *
 * @remarks
 * Type alias for the `DnsRecordCreate` OpenAPI schema.
 * This type represents dnsrecordcreate data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getDnsRecordCreate();
 * const item: DnsRecordCreate = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type DnsRecordCreate = components['schemas']['DnsRecordCreate'];
/**
 * DnsRecordPatchOp
 *
 * @remarks
 * Type alias for the `DnsRecordPatchOp` OpenAPI schema.
 * This type represents dnsrecordpatchop data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getDnsRecordPatchOp();
 * const item: DnsRecordPatchOp = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type DnsRecordPatchOp = components['schemas']['DnsRecordPatchOp'];
/**
 * DnsRecordResponse
 *
 * @remarks
 * Type alias for the `DnsRecordResponse` OpenAPI schema.
 * This type represents dnsrecordresponse data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getDnsRecord();
 * const item: DnsRecord = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type DnsRecord = components['schemas']['DnsRecordResponse'];
/**
 * DnsRrsetCreate
 *
 * @remarks
 * Type alias for the `DnsRrsetCreate` OpenAPI schema.
 * This type represents dnsrrsetcreate data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getDnsRrsetCreate();
 * const item: DnsRrsetCreate = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type DnsRrsetCreate = components['schemas']['DnsRrsetCreate'];
/**
 * DnsRrsetPatch
 *
 * @remarks
 * Type alias for the `DnsRrsetPatch` OpenAPI schema.
 * This type represents dnsrrsetpatch data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getDnsRrsetPatch();
 * const item: DnsRrsetPatch = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type DnsRrsetPatch = components['schemas']['DnsRrsetPatch'];
/**
 * DnsRrsetPatchOp
 *
 * @remarks
 * Type alias for the `DnsRrsetPatchOp` OpenAPI schema.
 * This type represents dnsrrsetpatchop data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getDnsRrsetPatchOp();
 * const item: DnsRrsetPatchOp = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type DnsRrsetPatchOp = components['schemas']['DnsRrsetPatchOp'];
/**
 * DnsRrsetResponse
 *
 * @remarks
 * Type alias for the `DnsRrsetResponse` OpenAPI schema.
 * This type represents dnsrrsetresponse data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getDnsRrset();
 * const item: DnsRrset = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type DnsRrset = components['schemas']['DnsRrsetResponse'];
/**
 * DnsRrsetType
 *
 * @remarks
 * Type alias for the `DnsRrsetType` OpenAPI schema.
 * This type represents dnsrrsettype data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getDnsRrsetType();
 * const item: DnsRrsetType = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type DnsRrsetType = components['schemas']['DnsRrsetType'];
/**
 * DnsRrsetWithOneRecordPatch
 *
 * @remarks
 * Type alias for the `DnsRrsetWithOneRecordPatch` OpenAPI schema.
 * This type represents dnsrrsetwithonerecordpatch data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getDnsRrsetWithOneRecordPatch();
 * const item: DnsRrsetWithOneRecordPatch = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type DnsRrsetWithOneRecordPatch = components['schemas']['DnsRrsetWithOneRecordPatch'];
/**
 * DnsZoneCreate
 *
 * @remarks
 * Type alias for the `DnsZoneCreate` OpenAPI schema.
 * This type represents dnszonecreate data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getDnsZoneCreate();
 * const item: DnsZoneCreate = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type DnsZoneCreate = components['schemas']['DnsZoneCreate'];
/**
 * DnsZoneRecordsPatchOps
 *
 * @remarks
 * Type alias for the `DnsZoneRecordsPatchOps` OpenAPI schema.
 * This type represents dnszonerecordspatchops data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getDnsZoneRecordsPatchOps();
 * const item: DnsZoneRecordsPatchOps = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type DnsZoneRecordsPatchOps = components['schemas']['DnsZoneRecordsPatchOps'];
/**
 * DnsZoneResponse
 *
 * @remarks
 * Type alias for the `DnsZoneResponse` OpenAPI schema.
 * This type represents dnszoneresponse data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getDnsZone();
 * const item: DnsZone = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type DnsZone = components['schemas']['DnsZoneResponse'];
/**
 * DnsZoneRrsetsCreate
 *
 * @remarks
 * Type alias for the `DnsZoneRrsetsCreate` OpenAPI schema.
 * This type represents dnszonerrsetscreate data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getDnsZoneRrsetsCreate();
 * const item: DnsZoneRrsetsCreate = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type DnsZoneRrsetsCreate = components['schemas']['DnsZoneRrsetsCreate'];
/**
 * DnsZoneRrsetsPatchOps
 *
 * @remarks
 * Type alias for the `DnsZoneRrsetsPatchOps` OpenAPI schema.
 * This type represents dnszonerrsetspatchops data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getDnsZoneRrsetsPatchOps();
 * const item: DnsZoneRrsetsPatchOps = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type DnsZoneRrsetsPatchOps = components['schemas']['DnsZoneRrsetsPatchOps'];
/**
 * DnsZoneSummary
 *
 * @remarks
 * Type alias for the `DnsZoneSummary` OpenAPI schema.
 * This type represents dnszonesummary data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getDnsZoneSummary();
 * const item: DnsZoneSummary = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type DnsZoneSummary = components['schemas']['DnsZoneSummary'];
/**
 * DnssecAlgorithm
 *
 * @remarks
 * Type alias for the `DnssecAlgorithm` OpenAPI schema.
 * This type represents dnssecalgorithm data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getDnssecAlgorithm();
 * const item: DnssecAlgorithm = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type DnssecAlgorithm = components['schemas']['DnssecAlgorithm'];
/**
 * DnssecDigestType
 *
 * @remarks
 * Type alias for the `DnssecDigestType` OpenAPI schema.
 * This type represents dnssecdigesttype data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getDnssecDigestType();
 * const item: DnssecDigestType = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type DnssecDigestType = components['schemas']['DnssecDigestType'];
/**
 * DnssecModeType
 *
 * @remarks
 * Type alias for the `DnssecModeType` OpenAPI schema.
 * This type represents dnssecmodetype data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getDnssecModeType();
 * const item: DnssecModeType = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type DnssecModeType = components['schemas']['DnssecModeType'];
/**
 * DnssecRecordType
 *
 * @remarks
 * Type alias for the `DnssecRecordType` OpenAPI schema.
 * This type represents dnssecrecordtype data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getDnssecRecordType();
 * const item: DnssecRecordType = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type DnssecRecordType = components['schemas']['DnssecRecordType'];
/**
 * DnssecStatus
 *
 * @remarks
 * Type alias for the `DnssecStatus` OpenAPI schema.
 * This type represents dnssecstatus data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getDnssecStatus();
 * const item: DnssecStatus = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type DnssecStatus = components['schemas']['DnssecStatus'];
/**
 * DomainAvailability
 *
 * @remarks
 * Type alias for the `DomainAvailability` OpenAPI schema.
 * This type represents domainavailability data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getDomainAvailability();
 * const item: DomainAvailability = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type DomainAvailability = components['schemas']['DomainAvailability'];
/**
 * DomainAvailabilityMeta
 *
 * @remarks
 * Type alias for the `DomainAvailabilityMeta` OpenAPI schema.
 * This type represents domainavailabilitymeta data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getDomainAvailabilityMeta();
 * const item: DomainAvailabilityMeta = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type DomainAvailabilityMeta = components['schemas']['DomainAvailabilityMeta'];
/**
 * DomainAvailabilityStatus
 *
 * @remarks
 * Type alias for the `DomainAvailabilityStatus` OpenAPI schema.
 * This type represents domainavailabilitystatus data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getDomainAvailabilityStatus();
 * const item: DomainAvailabilityStatus = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type DomainAvailabilityStatus = components['schemas']['DomainAvailabilityStatus'];
/**
 * DomainCheckResponse
 *
 * @remarks
 * Type alias for the `DomainCheckResponse` OpenAPI schema.
 * This type represents domaincheckresponse data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getDomainCheck();
 * const item: DomainCheck = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type DomainCheck = components['schemas']['DomainCheckResponse'];
/**
 * DomainClientStatus
 *
 * @remarks
 * Type alias for the `DomainClientStatus` OpenAPI schema.
 * This type represents domainclientstatus data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getDomainClientStatus();
 * const item: DomainClientStatus = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type DomainClientStatus = components['schemas']['DomainClientStatus'];
/**
 * DomainContactHandles
 *
 * @remarks
 * Type alias for the `DomainContactHandles` OpenAPI schema.
 * This type represents domaincontacthandles data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getDomainContactHandles();
 * const item: DomainContactHandles = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type DomainContactHandles = components['schemas']['DomainContactHandles'];
/**
 * DomainContactResponse
 *
 * @remarks
 * Type alias for the `DomainContactResponse` OpenAPI schema.
 * This type represents domaincontactresponse data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getDomainContact();
 * const item: DomainContact = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type DomainContact = components['schemas']['DomainContactResponse'];
/**
 * DomainContactType
 *
 * @remarks
 * Type alias for the `DomainContactType` OpenAPI schema.
 * This type represents domaincontacttype data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getDomainContactType();
 * const item: DomainContactType = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type DomainContactType = components['schemas']['DomainContactType'];
/**
 * DomainCreate
 *
 * @remarks
 * Type alias for the `DomainCreate` OpenAPI schema.
 * This type represents domaincreate data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getDomainCreate();
 * const item: DomainCreate = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type DomainCreate = components['schemas']['DomainCreate'];
/**
 * DomainDnssecDataCreate
 *
 * @remarks
 * Type alias for the `DomainDnssecDataCreate` OpenAPI schema.
 * This type represents domaindnssecdatacreate data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getDomainDnssecDataCreate();
 * const item: DomainDnssecDataCreate = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type DomainDnssecDataCreate = components['schemas']['DomainDnssecDataCreate'];
/**
 * DomainDnssecDataResponse
 *
 * @remarks
 * Type alias for the `DomainDnssecDataResponse` OpenAPI schema.
 * This type represents domaindnssecdataresponse data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getDomainDnssecData();
 * const item: DomainDnssecData = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type DomainDnssecData = components['schemas']['DomainDnssecDataResponse'];
/**
 * DomainLifecycleBase
 *
 * @remarks
 * Type alias for the `DomainLifecycleBase` OpenAPI schema.
 * This type represents domainlifecyclebase data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getDomainLifecycleBase();
 * const item: DomainLifecycleBase = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type DomainLifecycleBase = components['schemas']['DomainLifecycleBase'];
/**
 * DomainNameParts
 *
 * @remarks
 * Type alias for the `DomainNameParts` OpenAPI schema.
 * This type represents domainnameparts data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getDomainNameParts();
 * const item: DomainNameParts = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type DomainNameParts = components['schemas']['DomainNameParts'];
/**
 * DomainPeriod
 *
 * @remarks
 * Type alias for the `DomainPeriod` OpenAPI schema.
 * This type represents domainperiod data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getDomainPeriod();
 * const item: DomainPeriod = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type DomainPeriod = components['schemas']['DomainPeriod'];
/**
 * DomainRenewRequest
 *
 * @remarks
 * Type alias for the `DomainRenewRequest` OpenAPI schema.
 * This type represents domainrenewrequest data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getDomainRenewRequest();
 * const item: DomainRenewRequest = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type DomainRenewRequest = components['schemas']['DomainRenewRequest'];
/**
 * DomainRenewResponse
 *
 * @remarks
 * Type alias for the `DomainRenewResponse` OpenAPI schema.
 * This type represents domainrenewresponse data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getDomainRenew();
 * const item: DomainRenew = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type DomainRenew = components['schemas']['DomainRenewResponse'];
/**
 * DomainResponse
 *
 * @remarks
 * Type alias for the `DomainResponse` OpenAPI schema.
 * This type represents domainresponse data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getDomain();
 * const item: Domain = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type Domain = components['schemas']['DomainResponse'];
/**
 * DomainRestoreRequest
 *
 * @remarks
 * Type alias for the `DomainRestoreRequest` OpenAPI schema.
 * This type represents domainrestorerequest data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getDomainRestoreRequest();
 * const item: DomainRestoreRequest = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type DomainRestoreRequest = components['schemas']['DomainRestoreRequest'];
/**
 * DomainRestoreResponse
 *
 * @remarks
 * Type alias for the `DomainRestoreResponse` OpenAPI schema.
 * This type represents domainrestoreresponse data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getDomainRestore();
 * const item: DomainRestore = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type DomainRestore = components['schemas']['DomainRestoreResponse'];
/**
 * DomainSearchMeta
 *
 * @remarks
 * Type alias for the `DomainSearchMeta` OpenAPI schema.
 * This type represents domainsearchmeta data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getDomainSearchMeta();
 * const item: DomainSearchMeta = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type DomainSearchMeta = components['schemas']['DomainSearchMeta'];
/**
 * DomainSearchResponse
 *
 * @remarks
 * Type alias for the `DomainSearchResponse` OpenAPI schema.
 * This type represents domainsearchresponse data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getDomainSearch();
 * const item: DomainSearch = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type DomainSearch = components['schemas']['DomainSearchResponse'];
/**
 * DomainSearchSuggestionPriceData
 *
 * @remarks
 * Type alias for the `DomainSearchSuggestionPriceData` OpenAPI schema.
 * This type represents domainsearchsuggestionpricedata data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getDomainSearchSuggestionPriceData();
 * const item: DomainSearchSuggestionPriceData = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type DomainSearchSuggestionPriceData = components['schemas']['DomainSearchSuggestionPriceData'];
/**
 * DomainSearchSuggestionWithPrice
 *
 * @remarks
 * Type alias for the `DomainSearchSuggestionWithPrice` OpenAPI schema.
 * This type represents domainsearchsuggestionwithprice data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getDomainSearchSuggestionWithPrice();
 * const item: DomainSearchSuggestionWithPrice = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type DomainSearchSuggestionWithPrice = components['schemas']['DomainSearchSuggestionWithPrice'];
/**
 * DomainSortField
 *
 * @remarks
 * Type alias for the `DomainSortField` OpenAPI schema.
 * This type represents domainsortfield data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getDomainSortField();
 * const item: DomainSortField = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type DomainSortField = components['schemas']['DomainSortField'];
/**
 * DomainStatus
 *
 * @remarks
 * Type alias for the `DomainStatus` OpenAPI schema.
 * This type represents domainstatus data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getDomainStatus();
 * const item: DomainStatus = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type DomainStatus = components['schemas']['DomainStatus'];
/**
 * DomainStatusesBase
 *
 * @remarks
 * Type alias for the `DomainStatusesBase` OpenAPI schema.
 * This type represents domainstatusesbase data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getDomainStatusesBase();
 * const item: DomainStatusesBase = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type DomainStatusesBase = components['schemas']['DomainStatusesBase'];
/**
 * DomainSummaryData
 *
 * @remarks
 * Type alias for the `DomainSummaryData` OpenAPI schema.
 * This type represents domainsummarydata data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getDomainSummaryData();
 * const item: DomainSummaryData = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type DomainSummaryData = components['schemas']['DomainSummaryData'];
/**
 * DomainSummaryResponse
 *
 * @remarks
 * Type alias for the `DomainSummaryResponse` OpenAPI schema.
 * This type represents domainsummaryresponse data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getDomainSummary();
 * const item: DomainSummary = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type DomainSummary = components['schemas']['DomainSummaryResponse'];
/**
 * DomainTransferIn
 *
 * @remarks
 * Type alias for the `DomainTransferIn` OpenAPI schema.
 * This type represents domaintransferin data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getDomainTransferIn();
 * const item: DomainTransferIn = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type DomainTransferIn = components['schemas']['DomainTransferIn'];
/**
 * DomainUpdate
 *
 * @remarks
 * Type alias for the `DomainUpdate` OpenAPI schema.
 * This type represents domainupdate data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getDomainUpdate();
 * const item: DomainUpdate = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type DomainUpdate = components['schemas']['DomainUpdate'];
/**
 * DomainsExpiringSoon
 *
 * @remarks
 * Type alias for the `DomainsExpiringSoon` OpenAPI schema.
 * This type represents domainsexpiringsoon data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getDomainsExpiringSoon();
 * const item: DomainsExpiringSoon = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type DomainsExpiringSoon = components['schemas']['DomainsExpiringSoon'];
/**
 * EmailForwardAlias
 *
 * @remarks
 * Type alias for the `EmailForwardAlias` OpenAPI schema.
 * This type represents emailforwardalias data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getEmailForwardAlias();
 * const item: EmailForwardAlias = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type EmailForwardAlias = components['schemas']['EmailForwardAlias'];
/**
 * EmailForwardAliasUpdate
 *
 * @remarks
 * Type alias for the `EmailForwardAliasUpdate` OpenAPI schema.
 * This type represents emailforwardaliasupdate data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getEmailForwardAliasUpdate();
 * const item: EmailForwardAliasUpdate = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type EmailForwardAliasUpdate = components['schemas']['EmailForwardAliasUpdate'];
/**
 * EmailVerificationStatus
 *
 * @remarks
 * Type alias for the `EmailVerificationStatus` OpenAPI schema.
 * This type represents emailverificationstatus data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getEmailVerificationStatus();
 * const item: EmailVerificationStatus = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type EmailVerificationStatus = components['schemas']['EmailVerificationStatus'];
/**
 * EppDateTime
 *
 * @remarks
 * Type alias for the `EppDateTime` OpenAPI schema.
 * This type represents eppdatetime data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getEppDateTime();
 * const item: EppDateTime = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type EppDateTime = components['schemas']['EppDateTime'];
/**
 * EventObjectType
 *
 * @remarks
 * Type alias for the `EventObjectType` OpenAPI schema.
 * This type represents eventobjecttype data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getEventObjectType();
 * const item: EventObjectType = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type EventObjectType = components['schemas']['EventObjectType'];
/**
 * EventResponse
 *
 * @remarks
 * Type alias for the `EventResponse` OpenAPI schema.
 * This type represents eventresponse data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getEventResponse();
 * const item: EventResponse = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type EventResponse = components['schemas']['EventResponse'];
/**
 * EventSchema
 *
 * @remarks
 * Type alias for the `EventSchema` OpenAPI schema.
 * This type represents eventschema data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getEventSchema();
 * const item: EventSchema = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type EventSchema = components['schemas']['EventSchema'];
/**
 * EventSubtype
 *
 * @remarks
 * Type alias for the `EventSubtype` OpenAPI schema.
 * This type represents eventsubtype data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getEventSubtype();
 * const item: EventSubtype = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type EventSubtype = components['schemas']['EventSubtype'];
/**
 * EventType
 *
 * @remarks
 * Type alias for the `EventType` OpenAPI schema.
 * This type represents eventtype data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getEventType();
 * const item: EventType = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type EventType = components['schemas']['EventType'];
/**
 * GeneralAvailabilityBase
 *
 * @remarks
 * Type alias for the `GeneralAvailabilityBase` OpenAPI schema.
 * This type represents generalavailabilitybase data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getGeneralAvailabilityBase();
 * const item: GeneralAvailabilityBase = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type GeneralAvailabilityBase = components['schemas']['GeneralAvailabilityBase'];
/**
 * GetCurrentAvailablePlansResponse
 *
 * @remarks
 * Type alias for the `GetCurrentAvailablePlansResponse` OpenAPI schema.
 * This type represents getcurrentavailableplansresponse data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getGetCurrentAvailablePlans();
 * const item: GetCurrentAvailablePlans = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type GetCurrentAvailablePlans = components['schemas']['GetCurrentAvailablePlansResponse'];
/**
 * GetPricesResponse
 *
 * @remarks
 * Type alias for the `GetPricesResponse` OpenAPI schema.
 * This type represents getpricesresponse data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getGetPrices();
 * const item: GetPrices = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type GetPrices = components['schemas']['GetPricesResponse'];
/**
 * GrantType
 *
 * @remarks
 * Type alias for the `GrantType` OpenAPI schema.
 * This type represents granttype data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getGrantType();
 * const item: GrantType = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type GrantType = components['schemas']['GrantType'];
/**
 * RequestValidationError
 *
 * @remarks
 * Type alias for the `HTTPValidationError` OpenAPI schema.
 * This type represents requestvalidationerror data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getHTTPValidationError();
 * const item: HTTPValidationError = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type HTTPValidationError = components['schemas']['HTTPValidationError'];
/**
 * IdnBase
 *
 * @remarks
 * Type alias for the `IdnBase` OpenAPI schema.
 * This type represents idnbase data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getIdnBase();
 * const item: IdnBase = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type IdnBase = components['schemas']['IdnBase'];
/**
 * IpRestrictionCreate. Create an IP restriction for an organization.

Accepts either a single IP address or a CIDR network range.
Individual IP addresses are stored and returned with CIDR notation (/32 for IPv4, /128 for IPv6).
 *
 * @remarks
 * Type alias for the `IpRestrictionCreate` OpenAPI schema.
 * This type represents iprestrictioncreate data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getIpRestrictionCreate();
 * const item: IpRestrictionCreate = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type IpRestrictionCreate = components['schemas']['IpRestrictionCreate'];
/**
 * IpRestrictionResponse
 *
 * @remarks
 * Type alias for the `IpRestrictionResponse` OpenAPI schema.
 * This type represents iprestrictionresponse data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getIpRestriction();
 * const item: IpRestriction = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type IpRestriction = components['schemas']['IpRestrictionResponse'];
/**
 * IpRestrictionUpdate. Update an existing IP restriction.

You can update the IP network range or the last usage timestamp.
 *
 * @remarks
 * Type alias for the `IpRestrictionUpdate` OpenAPI schema.
 * This type represents iprestrictionupdate data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getIpRestrictionUpdate();
 * const item: IpRestrictionUpdate = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type IpRestrictionUpdate = components['schemas']['IpRestrictionUpdate'];
/**
 * JsonValue
 *
 * @remarks
 * Type alias for the `JsonValue` OpenAPI schema.
 * This type represents jsonvalue data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getJsonValue();
 * const item: JsonValue = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type JsonValue = components['schemas']['JsonValue'];
/**
 * LaunchPhaseBase
 *
 * @remarks
 * Type alias for the `LaunchPhaseBase` OpenAPI schema.
 * This type represents launchphasebase data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getLaunchPhaseBase();
 * const item: LaunchPhaseBase = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type LaunchPhaseBase = components['schemas']['LaunchPhaseBase'];
/**
 * LaunchPhaseType
 *
 * @remarks
 * Type alias for the `LaunchPhaseType` OpenAPI schema.
 * This type represents launchphasetype data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getLaunchPhaseType();
 * const item: LaunchPhaseType = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type LaunchPhaseType = components['schemas']['LaunchPhaseType'];
/**
 * LaunchPhasesBase
 *
 * @remarks
 * Type alias for the `LaunchPhasesBase` OpenAPI schema.
 * This type represents launchphasesbase data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getLaunchPhasesBase();
 * const item: LaunchPhasesBase = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type LaunchPhasesBase = components['schemas']['LaunchPhasesBase'];
/**
 * LocalPresenceBase
 *
 * @remarks
 * Type alias for the `LocalPresenceBase` OpenAPI schema.
 * This type represents localpresencebase data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getLocalPresenceBase();
 * const item: LocalPresenceBase = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type LocalPresenceBase = components['schemas']['LocalPresenceBase'];
/**
 * LocalPresenceRequirementType
 *
 * @remarks
 * Type alias for the `LocalPresenceRequirementType` OpenAPI schema.
 * This type represents localpresencerequirementtype data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getLocalPresenceRequirementType();
 * const item: LocalPresenceRequirementType = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type LocalPresenceRequirementType = components['schemas']['LocalPresenceRequirementType'];
/**
 * Nameserver
 *
 * @remarks
 * Type alias for the `Nameserver` OpenAPI schema.
 * This type represents nameserver data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getNameserver();
 * const item: Nameserver = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type Nameserver = components['schemas']['Nameserver'];
/**
 * Notification
 *
 * @remarks
 * Type alias for the `Notification` OpenAPI schema.
 * This type represents notification data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getNotification();
 * const item: Notification = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type Notification = components['schemas']['Notification'];
/**
 * NotificationCreate
 *
 * @remarks
 * Type alias for the `NotificationCreate` OpenAPI schema.
 * This type represents notificationcreate data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getNotificationCreate();
 * const item: NotificationCreate = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type NotificationCreate = components['schemas']['NotificationCreate'];
/**
 * NotificationSummary
 *
 * @remarks
 * Type alias for the `NotificationSummary` OpenAPI schema.
 * This type represents notificationsummary data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getNotificationSummary();
 * const item: NotificationSummary = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type NotificationSummary = components['schemas']['NotificationSummary'];
/**
 * NotificationUpdate
 *
 * @remarks
 * Type alias for the `NotificationUpdate` OpenAPI schema.
 * This type represents notificationupdate data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getNotificationUpdate();
 * const item: NotificationUpdate = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type NotificationUpdate = components['schemas']['NotificationUpdate'];
/**
 * Organization
 *
 * @remarks
 * Type alias for the `Organization` OpenAPI schema.
 * This type represents organization data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getOrganization();
 * const item: Organization = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type Organization = components['schemas']['Organization'];
/**
 * OrganizationAttribute
 *
 * @remarks
 * Type alias for the `OrganizationAttribute` OpenAPI schema.
 * This type represents organizationattribute data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getOrganizationAttribute();
 * const item: OrganizationAttribute = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type OrganizationAttribute = components['schemas']['OrganizationAttribute'];
/**
 * OrganizationAttributeCreate
 *
 * @remarks
 * Type alias for the `OrganizationAttributeCreate` OpenAPI schema.
 * This type represents organizationattributecreate data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getOrganizationAttributeCreate();
 * const item: OrganizationAttributeCreate = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type OrganizationAttributeCreate = components['schemas']['OrganizationAttributeCreate'];
/**
 * OrganizationAttributeResponse
 *
 * @remarks
 * Type alias for the `OrganizationAttributeResponse` OpenAPI schema.
 * This type represents organizationattributeresponse data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getOrganizationAttribute2();
 * const item: OrganizationAttribute2 = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type OrganizationAttribute2 = components['schemas']['OrganizationAttributeResponse'];
/**
 * OrganizationAttributeUpdate
 *
 * @remarks
 * Type alias for the `OrganizationAttributeUpdate` OpenAPI schema.
 * This type represents organizationattributeupdate data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getOrganizationAttributeUpdate();
 * const item: OrganizationAttributeUpdate = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type OrganizationAttributeUpdate = components['schemas']['OrganizationAttributeUpdate'];
/**
 * OrganizationCreate
 *
 * @remarks
 * Type alias for the `OrganizationCreate` OpenAPI schema.
 * This type represents organizationcreate data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getOrganizationCreate();
 * const item: OrganizationCreate = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type OrganizationCreate = components['schemas']['OrganizationCreate'];
/**
 * OrganizationCredential
 *
 * @remarks
 * Type alias for the `OrganizationCredential` OpenAPI schema.
 * This type represents organizationcredential data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getOrganizationCredential();
 * const item: OrganizationCredential = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type OrganizationCredential = components['schemas']['OrganizationCredential'];
/**
 * OrganizationCredentialCreated
 *
 * @remarks
 * Type alias for the `OrganizationCredentialCreated` OpenAPI schema.
 * This type represents organizationcredentialcreated data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getOrganizationCredentialCreated();
 * const item: OrganizationCredentialCreated = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type OrganizationCredentialCreated = components['schemas']['OrganizationCredentialCreated'];
/**
 * OrganizationCredentialExtra
 *
 * @remarks
 * Type alias for the `OrganizationCredentialExtra` OpenAPI schema.
 * This type represents organizationcredentialextra data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getOrganizationCredentialExtra();
 * const item: OrganizationCredentialExtra = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type OrganizationCredentialExtra = components['schemas']['OrganizationCredentialExtra'];
/**
 * OrganizationCredentialStatus
 *
 * @remarks
 * Type alias for the `OrganizationCredentialStatus` OpenAPI schema.
 * This type represents organizationcredentialstatus data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getOrganizationCredentialStatus();
 * const item: OrganizationCredentialStatus = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type OrganizationCredentialStatus = components['schemas']['OrganizationCredentialStatus'];
/**
 * OrganizationStatus
 *
 * @remarks
 * Type alias for the `OrganizationStatus` OpenAPI schema.
 * This type represents organizationstatus data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getOrganizationStatus();
 * const item: OrganizationStatus = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type OrganizationStatus = components['schemas']['OrganizationStatus'];
/**
 * OrganizationTokenResponse
 *
 * @remarks
 * Type alias for the `OrganizationTokenResponse` OpenAPI schema.
 * This type represents organizationtokenresponse data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getOrganizationToken();
 * const item: OrganizationToken = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type OrganizationToken = components['schemas']['OrganizationTokenResponse'];
/**
 * OrganizationUpdate
 *
 * @remarks
 * Type alias for the `OrganizationUpdate` OpenAPI schema.
 * This type represents organizationupdate data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getOrganizationUpdate();
 * const item: OrganizationUpdate = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type OrganizationUpdate = components['schemas']['OrganizationUpdate'];
/**
 * OrganizationWithBillingData
 *
 * @remarks
 * Type alias for the `OrganizationWithBillingData` OpenAPI schema.
 * This type represents organizationwithbillingdata data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getOrganizationWithBillingData();
 * const item: OrganizationWithBillingData = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type OrganizationWithBillingData = components['schemas']['OrganizationWithBillingData'];
/**
 * PaginationMetadata
 *
 * @remarks
 * Type alias for the `PaginationMetadata` OpenAPI schema.
 * This type represents paginationmetadata data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getPaginationMetadata();
 * const item: PaginationMetadata = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type PaginationMetadata = components['schemas']['PaginationMetadata'];
/**
 * Pagination[ContactSchema]
 *
 * @remarks
 * Type alias for the `Pagination_ContactSchema_` OpenAPI schema.
 * This type represents pagination[contactschema] data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getPagination_ContactSchema();
 * const item: Pagination_ContactSchema = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type Pagination_ContactSchema = components['schemas']['Pagination_ContactSchema_'];
/**
 * Pagination[DnsZoneResponse]
 *
 * @remarks
 * Type alias for the `Pagination_DnsZoneResponse_` OpenAPI schema.
 * This type represents pagination[dnszoneresponse] data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getPagination_DnsZone();
 * const item: Pagination_DnsZone = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type Pagination_DnsZone = components['schemas']['Pagination_DnsZoneResponse_'];
/**
 * Pagination[DomainResponse]
 *
 * @remarks
 * Type alias for the `Pagination_DomainResponse_` OpenAPI schema.
 * This type represents pagination[domainresponse] data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getPagination_Domain();
 * const item: Pagination_Domain = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type Pagination_Domain = components['schemas']['Pagination_DomainResponse_'];
/**
 * Pagination[EmailForwardAlias]
 *
 * @remarks
 * Type alias for the `Pagination_EmailForwardAlias_` OpenAPI schema.
 * This type represents pagination[emailforwardalias] data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getPagination_EmailForwardAlias();
 * const item: Pagination_EmailForwardAlias = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type Pagination_EmailForwardAlias = components['schemas']['Pagination_EmailForwardAlias_'];
/**
 * Pagination[EventResponse]
 *
 * @remarks
 * Type alias for the `Pagination_EventResponse_` OpenAPI schema.
 * This type represents pagination[eventresponse] data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getPagination_Event();
 * const item: Pagination_Event = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type Pagination_Event = components['schemas']['Pagination_EventResponse_'];
/**
 * Pagination[OrganizationCredential]
 *
 * @remarks
 * Type alias for the `Pagination_OrganizationCredential_` OpenAPI schema.
 * This type represents pagination[organizationcredential] data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getPagination_OrganizationCredential();
 * const item: Pagination_OrganizationCredential = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type Pagination_OrganizationCredential = components['schemas']['Pagination_OrganizationCredential_'];
/**
 * Pagination[Organization]
 *
 * @remarks
 * Type alias for the `Pagination_Organization_` OpenAPI schema.
 * This type represents pagination[organization] data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getPagination_Organization();
 * const item: Pagination_Organization = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type Pagination_Organization = components['schemas']['Pagination_Organization_'];
/**
 * Pagination[UserNotificationSummary]
 *
 * @remarks
 * Type alias for the `Pagination_UserNotificationSummary_` OpenAPI schema.
 * This type represents pagination[usernotificationsummary] data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getPagination_UserNotificationSummary();
 * const item: Pagination_UserNotificationSummary = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type Pagination_UserNotificationSummary = components['schemas']['Pagination_UserNotificationSummary_'];
/**
 * Pagination[User]
 *
 * @remarks
 * Type alias for the `Pagination_User_` OpenAPI schema.
 * This type represents pagination[user] data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getPagination_User();
 * const item: Pagination_User = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type Pagination_User = components['schemas']['Pagination_User_'];
/**
 * PasswordUpdate
 *
 * @remarks
 * Type alias for the `PasswordUpdate` OpenAPI schema.
 * This type represents passwordupdate data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getPasswordUpdate();
 * const item: PasswordUpdate = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type PasswordUpdate = components['schemas']['PasswordUpdate'];
/**
 * PatchOp
 *
 * @remarks
 * Type alias for the `PatchOp` OpenAPI schema.
 * This type represents patchop data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getPatchOp();
 * const item: PatchOp = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type PatchOp = components['schemas']['PatchOp'];
/**
 * Period
 *
 * @remarks
 * Type alias for the `Period` OpenAPI schema.
 * This type represents period data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getPeriod();
 * const item: Period = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type Period = components['schemas']['Period'];
/**
 * PeriodList
 *
 * @remarks
 * Type alias for the `PeriodList` OpenAPI schema.
 * This type represents periodlist data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getPeriodList();
 * const item: PeriodList = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type PeriodList = components['schemas']['PeriodList'];
/**
 * PeriodUnit
 *
 * @remarks
 * Type alias for the `PeriodUnit` OpenAPI schema.
 * This type represents periodunit data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getPeriodUnit();
 * const item: PeriodUnit = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type PeriodUnit = components['schemas']['PeriodUnit'];
/**
 * Permission
 *
 * @remarks
 * Type alias for the `Permission` OpenAPI schema.
 * This type represents permission data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getPermission();
 * const item: Permission = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type Permission = components['schemas']['Permission'];
/**
 * PermissionSet
 *
 * @remarks
 * Type alias for the `PermissionSet` OpenAPI schema.
 * This type represents permissionset data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getPermissionSet();
 * const item: PermissionSet = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type PermissionSet = components['schemas']['PermissionSet'];
/**
 * PlanInfo
 *
 * @remarks
 * Type alias for the `PlanInfo` OpenAPI schema.
 * This type represents planinfo data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getPlanInfo();
 * const item: PlanInfo = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type PlanInfo = components['schemas']['PlanInfo'];
/**
 * PlanRelation
 *
 * @remarks
 * Type alias for the `PlanRelation` OpenAPI schema.
 * This type represents planrelation data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getPlanRelation();
 * const item: PlanRelation = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type PlanRelation = components['schemas']['PlanRelation'];
/**
 * PlanUpdate
 *
 * @remarks
 * Type alias for the `PlanUpdate` OpenAPI schema.
 * This type represents planupdate data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getPlanUpdate();
 * const item: PlanUpdate = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type PlanUpdate = components['schemas']['PlanUpdate'];
/**
 * PostTransferRequirements
 *
 * @remarks
 * Type alias for the `PostTransferRequirements` OpenAPI schema.
 * This type represents posttransferrequirements data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getPostTransferRequirements();
 * const item: PostTransferRequirements = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type PostTransferRequirements = components['schemas']['PostTransferRequirements'];
/**
 * PostalAddressType
 *
 * @remarks
 * Type alias for the `PostalAddressType` OpenAPI schema.
 * This type represents postaladdresstype data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getPostalAddressType();
 * const item: PostalAddressType = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type PostalAddressType = components['schemas']['PostalAddressType'];
/**
 * PremiumAffectsType
 *
 * @remarks
 * Type alias for the `PremiumAffectsType` OpenAPI schema.
 * This type represents premiumaffectstype data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getPremiumAffectsType();
 * const item: PremiumAffectsType = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type PremiumAffectsType = components['schemas']['PremiumAffectsType'];
/**
 * PremiumDomainsBase
 *
 * @remarks
 * Type alias for the `PremiumDomainsBase` OpenAPI schema.
 * This type represents premiumdomainsbase data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getPremiumDomainsBase();
 * const item: PremiumDomainsBase = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type PremiumDomainsBase = components['schemas']['PremiumDomainsBase'];
/**
 * PremiumSourceType
 *
 * @remarks
 * Type alias for the `PremiumSourceType` OpenAPI schema.
 * This type represents premiumsourcetype data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getPremiumSourceType();
 * const item: PremiumSourceType = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type PremiumSourceType = components['schemas']['PremiumSourceType'];
/**
 * PriceInfo
 *
 * @remarks
 * Type alias for the `PriceInfo` OpenAPI schema.
 * This type represents priceinfo data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getPriceInfo();
 * const item: PriceInfo = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type PriceInfo = components['schemas']['PriceInfo'];
/**
 * Problem
 *
 * @remarks
 * Type alias for the `Problem` OpenAPI schema.
 * This type represents problem data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getProblem();
 * const item: Problem = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type Problem = components['schemas']['Problem'];
/**
 * RdapBase
 *
 * @remarks
 * Type alias for the `RdapBase` OpenAPI schema.
 * This type represents rdapbase data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getRdapBase();
 * const item: RdapBase = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type RdapBase = components['schemas']['RdapBase'];
/**
 * RegistrantChangeType
 *
 * @remarks
 * Type alias for the `RegistrantChangeType` OpenAPI schema.
 * This type represents registrantchangetype data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getRegistrantChangeType();
 * const item: RegistrantChangeType = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type RegistrantChangeType = components['schemas']['RegistrantChangeType'];
/**
 * RegistryHandleAttributeType. Registry handle attribute types for type-safe attribute key access.
 *
 * @remarks
 * Type alias for the `RegistryHandleAttributeType` OpenAPI schema.
 * This type represents registryhandleattributetype data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getRegistryHandleAttributeType();
 * const item: RegistryHandleAttributeType = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type RegistryHandleAttributeType = components['schemas']['RegistryHandleAttributeType'];
/**
 * RegistryLockBase
 *
 * @remarks
 * Type alias for the `RegistryLockBase` OpenAPI schema.
 * This type represents registrylockbase data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getRegistryLockBase();
 * const item: RegistryLockBase = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type RegistryLockBase = components['schemas']['RegistryLockBase'];
/**
 * Relation
 *
 * @remarks
 * Type alias for the `Relation` OpenAPI schema.
 * This type represents relation data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getRelation();
 * const item: Relation = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type Relation = components['schemas']['Relation'];
/**
 * RelationSet
 *
 * @remarks
 * Type alias for the `RelationSet` OpenAPI schema.
 * This type represents relationset data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getRelationSet();
 * const item: RelationSet = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type RelationSet = components['schemas']['RelationSet'];
/**
 * RenewalMode
 *
 * @remarks
 * Type alias for the `RenewalMode` OpenAPI schema.
 * This type represents renewalmode data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getRenewalMode();
 * const item: RenewalMode = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type RenewalMode = components['schemas']['RenewalMode'];
/**
 * ReservedDomainsBase
 *
 * @remarks
 * Type alias for the `ReservedDomainsBase` OpenAPI schema.
 * This type represents reserveddomainsbase data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getReservedDomainsBase();
 * const item: ReservedDomainsBase = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type ReservedDomainsBase = components['schemas']['ReservedDomainsBase'];
/**
 * ReservedSourceType
 *
 * @remarks
 * Type alias for the `ReservedSourceType` OpenAPI schema.
 * This type represents reservedsourcetype data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getReservedSourceType();
 * const item: ReservedSourceType = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type ReservedSourceType = components['schemas']['ReservedSourceType'];
/**
 * RgpOperations
 *
 * @remarks
 * Type alias for the `RgpOperations` OpenAPI schema.
 * This type represents rgpoperations data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getRgpOperations();
 * const item: RgpOperations = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type RgpOperations = components['schemas']['RgpOperations'];
/**
 * SignupCreate
 *
 * @remarks
 * Type alias for the `SignupCreate` OpenAPI schema.
 * This type represents signupcreate data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getSignupCreate();
 * const item: SignupCreate = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type SignupCreate = components['schemas']['SignupCreate'];
/**
 * SldLength
 *
 * @remarks
 * Type alias for the `SldLength` OpenAPI schema.
 * This type represents sldlength data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getSldLength();
 * const item: SldLength = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type SldLength = components['schemas']['SldLength'];
/**
 * SortOrder
 *
 * @remarks
 * Type alias for the `SortOrder` OpenAPI schema.
 * This type represents sortorder data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getSortOrder();
 * const item: SortOrder = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type SortOrder = components['schemas']['SortOrder'];
/**
 * SpiceDbRelationshipUpdate
 *
 * @remarks
 * Type alias for the `SpiceDbRelationshipUpdate` OpenAPI schema.
 * This type represents spicedbrelationshipupdate data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getSpiceDbRelationshipUpdate();
 * const item: SpiceDbRelationshipUpdate = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type SpiceDbRelationshipUpdate = components['schemas']['SpiceDbRelationshipUpdate'];
/**
 * StartPasswordReset
 *
 * @remarks
 * Type alias for the `StartPasswordReset` OpenAPI schema.
 * This type represents startpasswordreset data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getStartPasswordReset();
 * const item: StartPasswordReset = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type StartPasswordReset = components['schemas']['StartPasswordReset'];
/**
 * SyncOperationType
 *
 * @remarks
 * Type alias for the `SyncOperationType` OpenAPI schema.
 * This type represents syncoperationtype data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getSyncOperationType();
 * const item: SyncOperationType = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type SyncOperationType = components['schemas']['SyncOperationType'];
/**
 * TLDType
 *
 * @remarks
 * Type alias for the `TLDType` OpenAPI schema.
 * This type represents tldtype data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getTLDType();
 * const item: TLDType = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type TLDType = components['schemas']['TLDType'];
/**
 * TermsOfServiceAccept
 *
 * @remarks
 * Type alias for the `TermsOfServiceAccept` OpenAPI schema.
 * This type represents termsofserviceaccept data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getTermsOfServiceAccept();
 * const item: TermsOfServiceAccept = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type TermsOfServiceAccept = components['schemas']['TermsOfServiceAccept'];
/**
 * TldBase
 *
 * @remarks
 * Type alias for the `TldBase` OpenAPI schema.
 * This type represents tldbase data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getTldBase();
 * const item: TldBase = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type TldBase = components['schemas']['TldBase'];
/**
 * TldResponseShort
 *
 * @remarks
 * Type alias for the `TldResponseShort` OpenAPI schema.
 * This type represents tldresponseshort data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getTldResponseShort();
 * const item: TldResponseShort = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type TldResponseShort = components['schemas']['TldResponseShort'];
/**
 * TldSpecificationResponse
 *
 * @remarks
 * Type alias for the `TldSpecificationResponse` OpenAPI schema.
 * This type represents tldspecificationresponse data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getTldSpecification();
 * const item: TldSpecification = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type TldSpecification = components['schemas']['TldSpecificationResponse'];
/**
 * TrademarkClaimsBase
 *
 * @remarks
 * Type alias for the `TrademarkClaimsBase` OpenAPI schema.
 * This type represents trademarkclaimsbase data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getTrademarkClaimsBase();
 * const item: TrademarkClaimsBase = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type TrademarkClaimsBase = components['schemas']['TrademarkClaimsBase'];
/**
 * TransferAckType
 *
 * @remarks
 * Type alias for the `TransferAckType` OpenAPI schema.
 * This type represents transferacktype data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getTransferAckType();
 * const item: TransferAckType = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type TransferAckType = components['schemas']['TransferAckType'];
/**
 * TransferPoliciesBase
 *
 * @remarks
 * Type alias for the `TransferPoliciesBase` OpenAPI schema.
 * This type represents transferpoliciesbase data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getTransferPoliciesBase();
 * const item: TransferPoliciesBase = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type TransferPoliciesBase = components['schemas']['TransferPoliciesBase'];
/**
 * User
 *
 * @remarks
 * Type alias for the `User` OpenAPI schema.
 * This type represents user data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getUser();
 * const item: User = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type User = components['schemas']['User'];
/**
 * UserAgreementAcceptance
 *
 * @remarks
 * Type alias for the `UserAgreementAcceptance` OpenAPI schema.
 * This type represents useragreementacceptance data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getUserAgreementAcceptance();
 * const item: UserAgreementAcceptance = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type UserAgreementAcceptance = components['schemas']['UserAgreementAcceptance'];
/**
 * UserAttributeBase
 *
 * @remarks
 * Type alias for the `UserAttributeBase` OpenAPI schema.
 * This type represents userattributebase data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getUserAttributeBase();
 * const item: UserAttributeBase = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type UserAttributeBase = components['schemas']['UserAttributeBase'];
/**
 * UserCreate
 *
 * @remarks
 * Type alias for the `UserCreate` OpenAPI schema.
 * This type represents usercreate data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getUserCreate();
 * const item: UserCreate = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type UserCreate = components['schemas']['UserCreate'];
/**
 * UserNotification
 *
 * @remarks
 * Type alias for the `UserNotification` OpenAPI schema.
 * This type represents usernotification data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getUserNotification();
 * const item: UserNotification = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type UserNotification = components['schemas']['UserNotification'];
/**
 * UserNotificationStatus
 *
 * @remarks
 * Type alias for the `UserNotificationStatus` OpenAPI schema.
 * This type represents usernotificationstatus data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getUserNotificationStatus();
 * const item: UserNotificationStatus = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type UserNotificationStatus = components['schemas']['UserNotificationStatus'];
/**
 * UserNotificationSummary
 *
 * @remarks
 * Type alias for the `UserNotificationSummary` OpenAPI schema.
 * This type represents usernotificationsummary data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getUserNotificationSummary();
 * const item: UserNotificationSummary = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type UserNotificationSummary = components['schemas']['UserNotificationSummary'];
/**
 * UserPasswordResetEmailResponse
 *
 * @remarks
 * Type alias for the `UserPasswordResetEmailResponse` OpenAPI schema.
 * This type represents userpasswordresetemailresponse data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getUserPasswordResetEmail();
 * const item: UserPasswordResetEmail = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type UserPasswordResetEmail = components['schemas']['UserPasswordResetEmailResponse'];
/**
 * UserStatus
 *
 * @remarks
 * Type alias for the `UserStatus` OpenAPI schema.
 * This type represents userstatus data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getUserStatus();
 * const item: UserStatus = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type UserStatus = components['schemas']['UserStatus'];
/**
 * UserTokenResponse
 *
 * @remarks
 * Type alias for the `UserTokenResponse` OpenAPI schema.
 * This type represents usertokenresponse data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getUserToken();
 * const item: UserToken = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type UserToken = components['schemas']['UserTokenResponse'];
/**
 * UserUpdate
 *
 * @remarks
 * Type alias for the `UserUpdate` OpenAPI schema.
 * This type represents userupdate data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getUserUpdate();
 * const item: UserUpdate = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type UserUpdate = components['schemas']['UserUpdate'];
/**
 * UserVerificationApiResponse
 *
 * @remarks
 * Type alias for the `UserVerificationApiResponse` OpenAPI schema.
 * This type represents userverificationapiresponse data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getUserVerificationApi();
 * const item: UserVerificationApi = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type UserVerificationApi = components['schemas']['UserVerificationApiResponse'];
/**
 * UserVerificationEmailResponse
 *
 * @remarks
 * Type alias for the `UserVerificationEmailResponse` OpenAPI schema.
 * This type represents userverificationemailresponse data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getUserVerificationEmail();
 * const item: UserVerificationEmail = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type UserVerificationEmail = components['schemas']['UserVerificationEmailResponse'];
/**
 * UserVerificationResponse
 *
 * @remarks
 * Type alias for the `UserVerificationResponse` OpenAPI schema.
 * This type represents userverificationresponse data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getUserVerification();
 * const item: UserVerification = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type UserVerification = components['schemas']['UserVerificationResponse'];
/**
 * UserWithAttributes
 *
 * @remarks
 * Type alias for the `UserWithAttributes` OpenAPI schema.
 * This type represents userwithattributes data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getUserWithAttributes();
 * const item: UserWithAttributes = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type UserWithAttributes = components['schemas']['UserWithAttributes'];
/**
 * UserWithRelationPermissions
 *
 * @remarks
 * Type alias for the `UserWithRelationPermissions` OpenAPI schema.
 * This type represents userwithrelationpermissions data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getUserWithRelationPermissions();
 * const item: UserWithRelationPermissions = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type UserWithRelationPermissions = components['schemas']['UserWithRelationPermissions'];
/**
 * ValidationError
 *
 * @remarks
 * Type alias for the `ValidationError` OpenAPI schema.
 * This type represents validationerror data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getValidationError();
 * const item: ValidationError = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type ValidationError = components['schemas']['ValidationError'];
/**
 * VerificationType
 *
 * @remarks
 * Type alias for the `VerificationType` OpenAPI schema.
 * This type represents verificationtype data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getVerificationType();
 * const item: VerificationType = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type VerificationType = components['schemas']['VerificationType'];
/**
 * WhoisBase
 *
 * @remarks
 * Type alias for the `WhoisBase` OpenAPI schema.
 * This type represents whoisbase data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getWhoisBase();
 * const item: WhoisBase = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type WhoisBase = components['schemas']['WhoisBase'];
/**
 * ZoneSortField
 *
 * @remarks
 * Type alias for the `ZoneSortField` OpenAPI schema.
 * This type represents zonesortfield data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getZoneSortField();
 * const item: ZoneSortField = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type ZoneSortField = components['schemas']['ZoneSortField'];
/**
 * DomainAvailabilityResponse
 *
 * @remarks
 * Type alias for the `common__models__availability__datasource__DomainAvailabilityResponse` OpenAPI schema.
 * This type represents domainavailabilityresponse data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getDomainAvailabilityList();
 * const item: DomainAvailabilityList = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type DomainAvailabilityList = components['schemas']['common__models__availability__datasource__DomainAvailabilityResponse'];
/**
 * DomainAvailabilityResponse
 *
 * @remarks
 * Type alias for the `common__models__domain__domain__DomainAvailabilityResponse` OpenAPI schema.
 * This type represents domainavailabilityresponse data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getDomainAvailabilityCheck();
 * const item: DomainAvailabilityCheck = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type DomainAvailabilityCheck = components['schemas']['common__models__domain__domain__DomainAvailabilityResponse'];