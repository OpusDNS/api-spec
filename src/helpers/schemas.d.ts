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
 * AttributeCondition
 *
 * @remarks
 * Type alias for the `AttributeCondition` OpenAPI schema.
 * This type represents attributecondition data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getAttributeCondition();
 * const item: AttributeCondition = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type AttributeCondition = components['schemas']['AttributeCondition'];
/**
 * AttributeType
 *
 * @remarks
 * Type alias for the `AttributeType` OpenAPI schema.
 * This type represents attributetype data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getAttributeType();
 * const item: AttributeType = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type AttributeType = components['schemas']['AttributeType'];
/**
 * BatchSortField
 *
 * @remarks
 * Type alias for the `BatchSortField` OpenAPI schema.
 * This type represents batchsortfield data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getBatchSortField();
 * const item: BatchSortField = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type BatchSortField = components['schemas']['BatchSortField'];
/**
 * BatchStatus
 *
 * @remarks
 * Type alias for the `BatchStatus` OpenAPI schema.
 * This type represents batchstatus data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getBatchStatus();
 * const item: BatchStatus = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type BatchStatus = components['schemas']['BatchStatus'];
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
 * BillingTransactionResponse
 *
 * @remarks
 * Type alias for the `BillingTransactionResponse` OpenAPI schema.
 * This type represents billingtransactionresponse data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getBillingTransaction();
 * const item: BillingTransaction = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type BillingTransaction = components['schemas']['BillingTransactionResponse'];
/**
 * BillingTransactionSortField
 *
 * @remarks
 * Type alias for the `BillingTransactionSortField` OpenAPI schema.
 * This type represents billingtransactionsortfield data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getBillingTransactionSortField();
 * const item: BillingTransactionSortField = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type BillingTransactionSortField = components['schemas']['BillingTransactionSortField'];
/**
 * BillingTransactionStatus
 *
 * @remarks
 * Type alias for the `BillingTransactionStatus` OpenAPI schema.
 * This type represents billingtransactionstatus data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getBillingTransactionStatus();
 * const item: BillingTransactionStatus = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type BillingTransactionStatus = components['schemas']['BillingTransactionStatus'];
/**
 * BrowserStatsBucket
 *
 * @remarks
 * Type alias for the `BrowserStatsBucket` OpenAPI schema.
 * This type represents browserstatsbucket data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getBrowserStatsBucket();
 * const item: BrowserStatsBucket = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type BrowserStatsBucket = components['schemas']['BrowserStatsBucket'];
/**
 * BulkObjectTagChanges
 *
 * @remarks
 * Type alias for the `BulkObjectTagChanges` OpenAPI schema.
 * This type represents bulkobjecttagchanges data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getBulkObjectTagChanges();
 * const item: BulkObjectTagChanges = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type BulkObjectTagChanges = components['schemas']['BulkObjectTagChanges'];
/**
 * CommandError
 *
 * @remarks
 * Type alias for the `CommandError` OpenAPI schema.
 * This type represents commanderror data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getCommandError();
 * const item: CommandError = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type CommandError = components['schemas']['CommandError'];
/**
 * ComplianceStatus
 *
 * @remarks
 * Type alias for the `ComplianceStatus` OpenAPI schema.
 * This type represents compliancestatus data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getComplianceStatus();
 * const item: ComplianceStatus = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type ComplianceStatus = components['schemas']['ComplianceStatus'];
/**
 * ConditionOperator
 *
 * @remarks
 * Type alias for the `ConditionOperator` OpenAPI schema.
 * This type represents conditionoperator data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getConditionOperator();
 * const item: ConditionOperator = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type ConditionOperator = components['schemas']['ConditionOperator'];
/**
 * ContactAttributeDefinition. Definition of a possible attribute for a TLD.
 *
 * @remarks
 * Type alias for the `ContactAttributeDefinition` OpenAPI schema.
 * This type represents contactattributedefinition data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getContactAttributeDefinition();
 * const item: ContactAttributeDefinition = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type ContactAttributeDefinition = components['schemas']['ContactAttributeDefinition'];
/**
 * ContactAttributeLinkDetail
 *
 * @remarks
 * Type alias for the `ContactAttributeLinkDetail` OpenAPI schema.
 * This type represents contactattributelinkdetail data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getContactAttributeLinkDetail();
 * const item: ContactAttributeLinkDetail = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type ContactAttributeLinkDetail = components['schemas']['ContactAttributeLinkDetail'];
/**
 * ContactAttributeLinkResponse
 *
 * @remarks
 * Type alias for the `ContactAttributeLinkResponse` OpenAPI schema.
 * This type represents contactattributelinkresponse data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getContactAttributeLink();
 * const item: ContactAttributeLink = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type ContactAttributeLink = components['schemas']['ContactAttributeLinkResponse'];
/**
 * ContactAttributeSetCreate
 *
 * @remarks
 * Type alias for the `ContactAttributeSetCreate` OpenAPI schema.
 * This type represents contactattributesetcreate data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getContactAttributeSetCreate();
 * const item: ContactAttributeSetCreate = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type ContactAttributeSetCreate = components['schemas']['ContactAttributeSetCreate'];
/**
 * ContactAttributeSetResponse
 *
 * @remarks
 * Type alias for the `ContactAttributeSetResponse` OpenAPI schema.
 * This type represents contactattributesetresponse data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getContactAttributeSet();
 * const item: ContactAttributeSet = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type ContactAttributeSet = components['schemas']['ContactAttributeSetResponse'];
/**
 * ContactAttributeSetSortField
 *
 * @remarks
 * Type alias for the `ContactAttributeSetSortField` OpenAPI schema.
 * This type represents contactattributesetsortfield data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getContactAttributeSetSortField();
 * const item: ContactAttributeSetSortField = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type ContactAttributeSetSortField = components['schemas']['ContactAttributeSetSortField'];
/**
 * ContactAttributeSetUpdate
 *
 * @remarks
 * Type alias for the `ContactAttributeSetUpdate` OpenAPI schema.
 * This type represents contactattributesetupdate data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getContactAttributeSetUpdate();
 * const item: ContactAttributeSetUpdate = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type ContactAttributeSetUpdate = components['schemas']['ContactAttributeSetUpdate'];
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
 * ContactCreateBulkCommand
 *
 * @remarks
 * Type alias for the `ContactCreateBulkCommand` OpenAPI schema.
 * This type represents contactcreatebulkcommand data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getContactCreateBulkCommand();
 * const item: ContactCreateBulkCommand = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type ContactCreateBulkCommand = components['schemas']['ContactCreateBulkCommand'];
/**
 * ContactCreateBulkInstance
 *
 * @remarks
 * Type alias for the `ContactCreateBulkInstance` OpenAPI schema.
 * This type represents contactcreatebulkinstance data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getContactCreateBulkInstance();
 * const item: ContactCreateBulkInstance = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type ContactCreateBulkInstance = components['schemas']['ContactCreateBulkInstance'];
/**
 * ContactCreateBulkPayload
 *
 * @remarks
 * Type alias for the `ContactCreateBulkPayload` OpenAPI schema.
 * This type represents contactcreatebulkpayload data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getContactCreateBulkPayload();
 * const item: ContactCreateBulkPayload = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type ContactCreateBulkPayload = components['schemas']['ContactCreateBulkPayload'];
/**
 * ContactCreateBulkTemplate
 *
 * @remarks
 * Type alias for the `ContactCreateBulkTemplate` OpenAPI schema.
 * This type represents contactcreatebulktemplate data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getContactCreateBulkTemplate();
 * const item: ContactCreateBulkTemplate = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type ContactCreateBulkTemplate = components['schemas']['ContactCreateBulkTemplate'];
/**
 * ContactCreateCommand
 *
 * @remarks
 * Type alias for the `ContactCreateCommand` OpenAPI schema.
 * This type represents contactcreatecommand data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getContactCreateCommand();
 * const item: ContactCreateCommand = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type ContactCreateCommand = components['schemas']['ContactCreateCommand'];
/**
 * ContactCreatePayloadData
 *
 * @remarks
 * Type alias for the `ContactCreatePayloadData` OpenAPI schema.
 * This type represents contactcreatepayloaddata data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getContactCreatePayloadData();
 * const item: ContactCreatePayloadData = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type ContactCreatePayloadData = components['schemas']['ContactCreatePayloadData'];
/**
 * ContactCreateWorkerPayload
 *
 * @remarks
 * Type alias for the `ContactCreateWorkerPayload` OpenAPI schema.
 * This type represents contactcreateworkerpayload data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getContactCreateWorkerPayload();
 * const item: ContactCreateWorkerPayload = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type ContactCreateWorkerPayload = components['schemas']['ContactCreateWorkerPayload'];
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
 * ContactIdList. The contacts of the domain
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
 * CreateJobBatchResponse
 *
 * @remarks
 * Type alias for the `CreateJobBatchResponse` OpenAPI schema.
 * This type represents createjobbatchresponse data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getCreateJobBatch();
 * const item: CreateJobBatch = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type CreateJobBatch = components['schemas']['CreateJobBatchResponse'];
/**
 * CreateReportReq
 *
 * @remarks
 * Type alias for the `CreateReportReq` OpenAPI schema.
 * This type represents createreportreq data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getCreateReportReq();
 * const item: CreateReportReq = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type CreateReportReq = components['schemas']['CreateReportReq'];
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
 * DeletedEvent
 *
 * @remarks
 * Type alias for the `DeletedEvent` OpenAPI schema.
 * This type represents deletedevent data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getDeletedEvent();
 * const item: DeletedEvent = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type DeletedEvent = components['schemas']['DeletedEvent'];
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
 * DnsProtectedReason
 *
 * @remarks
 * Type alias for the `DnsProtectedReason` OpenAPI schema.
 * This type represents dnsprotectedreason data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getDnsProtectedReason();
 * const item: DnsProtectedReason = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type DnsProtectedReason = components['schemas']['DnsProtectedReason'];
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
 * DnsZoneCreateBulkCommand
 *
 * @remarks
 * Type alias for the `DnsZoneCreateBulkCommand` OpenAPI schema.
 * This type represents dnszonecreatebulkcommand data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getDnsZoneCreateBulkCommand();
 * const item: DnsZoneCreateBulkCommand = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type DnsZoneCreateBulkCommand = components['schemas']['DnsZoneCreateBulkCommand'];
/**
 * DnsZoneCreateBulkInstance
 *
 * @remarks
 * Type alias for the `DnsZoneCreateBulkInstance` OpenAPI schema.
 * This type represents dnszonecreatebulkinstance data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getDnsZoneCreateBulkInstance();
 * const item: DnsZoneCreateBulkInstance = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type DnsZoneCreateBulkInstance = components['schemas']['DnsZoneCreateBulkInstance'];
/**
 * DnsZoneCreateBulkPayload
 *
 * @remarks
 * Type alias for the `DnsZoneCreateBulkPayload` OpenAPI schema.
 * This type represents dnszonecreatebulkpayload data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getDnsZoneCreateBulkPayload();
 * const item: DnsZoneCreateBulkPayload = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type DnsZoneCreateBulkPayload = components['schemas']['DnsZoneCreateBulkPayload'];
/**
 * DnsZoneCreateBulkTemplate
 *
 * @remarks
 * Type alias for the `DnsZoneCreateBulkTemplate` OpenAPI schema.
 * This type represents dnszonecreatebulktemplate data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getDnsZoneCreateBulkTemplate();
 * const item: DnsZoneCreateBulkTemplate = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type DnsZoneCreateBulkTemplate = components['schemas']['DnsZoneCreateBulkTemplate'];
/**
 * DnsZoneCreateCommand
 *
 * @remarks
 * Type alias for the `DnsZoneCreateCommand` OpenAPI schema.
 * This type represents dnszonecreatecommand data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getDnsZoneCreateCommand();
 * const item: DnsZoneCreateCommand = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type DnsZoneCreateCommand = components['schemas']['DnsZoneCreateCommand'];
/**
 * DnsZoneCreatePayloadData
 *
 * @remarks
 * Type alias for the `DnsZoneCreatePayloadData` OpenAPI schema.
 * This type represents dnszonecreatepayloaddata data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getDnsZoneCreatePayloadData();
 * const item: DnsZoneCreatePayloadData = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type DnsZoneCreatePayloadData = components['schemas']['DnsZoneCreatePayloadData'];
/**
 * DnsZoneCreateWorkerPayload
 *
 * @remarks
 * Type alias for the `DnsZoneCreateWorkerPayload` OpenAPI schema.
 * This type represents dnszonecreateworkerpayload data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getDnsZoneCreateWorkerPayload();
 * const item: DnsZoneCreateWorkerPayload = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type DnsZoneCreateWorkerPayload = components['schemas']['DnsZoneCreateWorkerPayload'];
/**
 * DnsZonePatchRecordsBulkCommand
 *
 * @remarks
 * Type alias for the `DnsZonePatchRecordsBulkCommand` OpenAPI schema.
 * This type represents dnszonepatchrecordsbulkcommand data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getDnsZonePatchRecordsBulkCommand();
 * const item: DnsZonePatchRecordsBulkCommand = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type DnsZonePatchRecordsBulkCommand = components['schemas']['DnsZonePatchRecordsBulkCommand'];
/**
 * DnsZonePatchRecordsBulkInstance
 *
 * @remarks
 * Type alias for the `DnsZonePatchRecordsBulkInstance` OpenAPI schema.
 * This type represents dnszonepatchrecordsbulkinstance data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getDnsZonePatchRecordsBulkInstance();
 * const item: DnsZonePatchRecordsBulkInstance = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type DnsZonePatchRecordsBulkInstance = components['schemas']['DnsZonePatchRecordsBulkInstance'];
/**
 * DnsZonePatchRecordsBulkPayload
 *
 * @remarks
 * Type alias for the `DnsZonePatchRecordsBulkPayload` OpenAPI schema.
 * This type represents dnszonepatchrecordsbulkpayload data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getDnsZonePatchRecordsBulkPayload();
 * const item: DnsZonePatchRecordsBulkPayload = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type DnsZonePatchRecordsBulkPayload = components['schemas']['DnsZonePatchRecordsBulkPayload'];
/**
 * DnsZonePatchRecordsWorkerPayload
 *
 * @remarks
 * Type alias for the `DnsZonePatchRecordsWorkerPayload` OpenAPI schema.
 * This type represents dnszonepatchrecordsworkerpayload data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getDnsZonePatchRecordsWorkerPayload();
 * const item: DnsZonePatchRecordsWorkerPayload = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type DnsZonePatchRecordsWorkerPayload = components['schemas']['DnsZonePatchRecordsWorkerPayload'];
/**
 * DnsZonePatchRrsetsBulkCommand
 *
 * @remarks
 * Type alias for the `DnsZonePatchRrsetsBulkCommand` OpenAPI schema.
 * This type represents dnszonepatchrrsetsbulkcommand data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getDnsZonePatchRrsetsBulkCommand();
 * const item: DnsZonePatchRrsetsBulkCommand = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type DnsZonePatchRrsetsBulkCommand = components['schemas']['DnsZonePatchRrsetsBulkCommand'];
/**
 * DnsZonePatchRrsetsBulkInstance
 *
 * @remarks
 * Type alias for the `DnsZonePatchRrsetsBulkInstance` OpenAPI schema.
 * This type represents dnszonepatchrrsetsbulkinstance data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getDnsZonePatchRrsetsBulkInstance();
 * const item: DnsZonePatchRrsetsBulkInstance = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type DnsZonePatchRrsetsBulkInstance = components['schemas']['DnsZonePatchRrsetsBulkInstance'];
/**
 * DnsZonePatchRrsetsBulkPayload
 *
 * @remarks
 * Type alias for the `DnsZonePatchRrsetsBulkPayload` OpenAPI schema.
 * This type represents dnszonepatchrrsetsbulkpayload data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getDnsZonePatchRrsetsBulkPayload();
 * const item: DnsZonePatchRrsetsBulkPayload = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type DnsZonePatchRrsetsBulkPayload = components['schemas']['DnsZonePatchRrsetsBulkPayload'];
/**
 * DnsZonePatchRrsetsWorkerPayload
 *
 * @remarks
 * Type alias for the `DnsZonePatchRrsetsWorkerPayload` OpenAPI schema.
 * This type represents dnszonepatchrrsetsworkerpayload data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getDnsZonePatchRrsetsWorkerPayload();
 * const item: DnsZonePatchRrsetsWorkerPayload = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type DnsZonePatchRrsetsWorkerPayload = components['schemas']['DnsZonePatchRrsetsWorkerPayload'];
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
 * DnsZoneUpdateBulkCommand
 *
 * @remarks
 * Type alias for the `DnsZoneUpdateBulkCommand` OpenAPI schema.
 * This type represents dnszoneupdatebulkcommand data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getDnsZoneUpdateBulkCommand();
 * const item: DnsZoneUpdateBulkCommand = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type DnsZoneUpdateBulkCommand = components['schemas']['DnsZoneUpdateBulkCommand'];
/**
 * DnsZoneUpdateBulkInstance
 *
 * @remarks
 * Type alias for the `DnsZoneUpdateBulkInstance` OpenAPI schema.
 * This type represents dnszoneupdatebulkinstance data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getDnsZoneUpdateBulkInstance();
 * const item: DnsZoneUpdateBulkInstance = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type DnsZoneUpdateBulkInstance = components['schemas']['DnsZoneUpdateBulkInstance'];
/**
 * DnsZoneUpdateBulkPayload
 *
 * @remarks
 * Type alias for the `DnsZoneUpdateBulkPayload` OpenAPI schema.
 * This type represents dnszoneupdatebulkpayload data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getDnsZoneUpdateBulkPayload();
 * const item: DnsZoneUpdateBulkPayload = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type DnsZoneUpdateBulkPayload = components['schemas']['DnsZoneUpdateBulkPayload'];
/**
 * DnsZoneUpdateBulkTemplate
 *
 * @remarks
 * Type alias for the `DnsZoneUpdateBulkTemplate` OpenAPI schema.
 * This type represents dnszoneupdatebulktemplate data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getDnsZoneUpdateBulkTemplate();
 * const item: DnsZoneUpdateBulkTemplate = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type DnsZoneUpdateBulkTemplate = components['schemas']['DnsZoneUpdateBulkTemplate'];
/**
 * DnsZoneUpdateCommand
 *
 * @remarks
 * Type alias for the `DnsZoneUpdateCommand` OpenAPI schema.
 * This type represents dnszoneupdatecommand data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getDnsZoneUpdateCommand();
 * const item: DnsZoneUpdateCommand = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type DnsZoneUpdateCommand = components['schemas']['DnsZoneUpdateCommand'];
/**
 * DnsZoneUpdatePayloadData
 *
 * @remarks
 * Type alias for the `DnsZoneUpdatePayloadData` OpenAPI schema.
 * This type represents dnszoneupdatepayloaddata data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getDnsZoneUpdatePayloadData();
 * const item: DnsZoneUpdatePayloadData = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type DnsZoneUpdatePayloadData = components['schemas']['DnsZoneUpdatePayloadData'];
/**
 * DnsZoneUpdateWorkerPayload
 *
 * @remarks
 * Type alias for the `DnsZoneUpdateWorkerPayload` OpenAPI schema.
 * This type represents dnszoneupdateworkerpayload data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getDnsZoneUpdateWorkerPayload();
 * const item: DnsZoneUpdateWorkerPayload = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type DnsZoneUpdateWorkerPayload = components['schemas']['DnsZoneUpdateWorkerPayload'];
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
 * DomainAttributeKey
 *
 * @remarks
 * Type alias for the `DomainAttributeKey` OpenAPI schema.
 * This type represents domainattributekey data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getDomainAttributeKey();
 * const item: DomainAttributeKey = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type DomainAttributeKey = components['schemas']['DomainAttributeKey'];
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
 * DomainAvailabilityRequest
 *
 * @remarks
 * Type alias for the `DomainAvailabilityRequest` OpenAPI schema.
 * This type represents domainavailabilityrequest data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getDomainAvailabilityRequest();
 * const item: DomainAvailabilityRequest = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type DomainAvailabilityRequest = components['schemas']['DomainAvailabilityRequest'];
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
 * DomainContactHandles. The contacts of the domain
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
 * DomainCreateBulkCommand
 *
 * @remarks
 * Type alias for the `DomainCreateBulkCommand` OpenAPI schema.
 * This type represents domaincreatebulkcommand data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getDomainCreateBulkCommand();
 * const item: DomainCreateBulkCommand = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type DomainCreateBulkCommand = components['schemas']['DomainCreateBulkCommand'];
/**
 * DomainCreateBulkInstance
 *
 * @remarks
 * Type alias for the `DomainCreateBulkInstance` OpenAPI schema.
 * This type represents domaincreatebulkinstance data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getDomainCreateBulkInstance();
 * const item: DomainCreateBulkInstance = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type DomainCreateBulkInstance = components['schemas']['DomainCreateBulkInstance'];
/**
 * DomainCreateBulkPayload
 *
 * @remarks
 * Type alias for the `DomainCreateBulkPayload` OpenAPI schema.
 * This type represents domaincreatebulkpayload data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getDomainCreateBulkPayload();
 * const item: DomainCreateBulkPayload = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type DomainCreateBulkPayload = components['schemas']['DomainCreateBulkPayload'];
/**
 * DomainCreateBulkTemplate
 *
 * @remarks
 * Type alias for the `DomainCreateBulkTemplate` OpenAPI schema.
 * This type represents domaincreatebulktemplate data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getDomainCreateBulkTemplate();
 * const item: DomainCreateBulkTemplate = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type DomainCreateBulkTemplate = components['schemas']['DomainCreateBulkTemplate'];
/**
 * DomainCreateCommand
 *
 * @remarks
 * Type alias for the `DomainCreateCommand` OpenAPI schema.
 * This type represents domaincreatecommand data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getDomainCreateCommand();
 * const item: DomainCreateCommand = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type DomainCreateCommand = components['schemas']['DomainCreateCommand'];
/**
 * DomainCreatePayloadData
 *
 * @remarks
 * Type alias for the `DomainCreatePayloadData` OpenAPI schema.
 * This type represents domaincreatepayloaddata data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getDomainCreatePayloadData();
 * const item: DomainCreatePayloadData = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type DomainCreatePayloadData = components['schemas']['DomainCreatePayloadData'];
/**
 * DomainCreateWorkerPayload
 *
 * @remarks
 * Type alias for the `DomainCreateWorkerPayload` OpenAPI schema.
 * This type represents domaincreateworkerpayload data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getDomainCreateWorkerPayload();
 * const item: DomainCreateWorkerPayload = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type DomainCreateWorkerPayload = components['schemas']['DomainCreateWorkerPayload'];
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
 * DomainForward
 *
 * @remarks
 * Type alias for the `DomainForward` OpenAPI schema.
 * This type represents domainforward data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getDomainForward();
 * const item: DomainForward = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type DomainForward = components['schemas']['DomainForward'];
/**
 * DomainForwardBrowserStatsResponse
 *
 * @remarks
 * Type alias for the `DomainForwardBrowserStatsResponse` OpenAPI schema.
 * This type represents domainforwardbrowserstatsresponse data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getDomainForwardBrowserStats();
 * const item: DomainForwardBrowserStats = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type DomainForwardBrowserStats = components['schemas']['DomainForwardBrowserStatsResponse'];
/**
 * DomainForwardCreateRequest
 *
 * @remarks
 * Type alias for the `DomainForwardCreateRequest` OpenAPI schema.
 * This type represents domainforwardcreaterequest data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getDomainForwardCreateRequest();
 * const item: DomainForwardCreateRequest = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type DomainForwardCreateRequest = components['schemas']['DomainForwardCreateRequest'];
/**
 * DomainForwardGeoStatsResponse
 *
 * @remarks
 * Type alias for the `DomainForwardGeoStatsResponse` OpenAPI schema.
 * This type represents domainforwardgeostatsresponse data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getDomainForwardGeoStats();
 * const item: DomainForwardGeoStats = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type DomainForwardGeoStats = components['schemas']['DomainForwardGeoStatsResponse'];
/**
 * DomainForwardMetricsResponse
 *
 * @remarks
 * Type alias for the `DomainForwardMetricsResponse` OpenAPI schema.
 * This type represents domainforwardmetricsresponse data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getDomainForwardMetrics();
 * const item: DomainForwardMetrics = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type DomainForwardMetrics = components['schemas']['DomainForwardMetricsResponse'];
/**
 * DomainForwardMetricsTimeSeriesResponse
 *
 * @remarks
 * Type alias for the `DomainForwardMetricsTimeSeriesResponse` OpenAPI schema.
 * This type represents domainforwardmetricstimeseriesresponse data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getDomainForwardMetricsTimeSeries();
 * const item: DomainForwardMetricsTimeSeries = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type DomainForwardMetricsTimeSeries = components['schemas']['DomainForwardMetricsTimeSeriesResponse'];
/**
 * DomainForwardPatchOp
 *
 * @remarks
 * Type alias for the `DomainForwardPatchOp` OpenAPI schema.
 * This type represents domainforwardpatchop data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getDomainForwardPatchOp();
 * const item: DomainForwardPatchOp = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type DomainForwardPatchOp = components['schemas']['DomainForwardPatchOp'];
/**
 * DomainForwardPatchOps
 *
 * @remarks
 * Type alias for the `DomainForwardPatchOps` OpenAPI schema.
 * This type represents domainforwardpatchops data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getDomainForwardPatchOps();
 * const item: DomainForwardPatchOps = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type DomainForwardPatchOps = components['schemas']['DomainForwardPatchOps'];
/**
 * DomainForwardPlatformStatsResponse
 *
 * @remarks
 * Type alias for the `DomainForwardPlatformStatsResponse` OpenAPI schema.
 * This type represents domainforwardplatformstatsresponse data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getDomainForwardPlatformStats();
 * const item: DomainForwardPlatformStats = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type DomainForwardPlatformStats = components['schemas']['DomainForwardPlatformStatsResponse'];
/**
 * DomainForwardProtocolSetRequest
 *
 * @remarks
 * Type alias for the `DomainForwardProtocolSetRequest` OpenAPI schema.
 * This type represents domainforwardprotocolsetrequest data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getDomainForwardProtocolSetRequest();
 * const item: DomainForwardProtocolSetRequest = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type DomainForwardProtocolSetRequest = components['schemas']['DomainForwardProtocolSetRequest'];
/**
 * DomainForwardProtocolSetResponse
 *
 * @remarks
 * Type alias for the `DomainForwardProtocolSetResponse` OpenAPI schema.
 * This type represents domainforwardprotocolsetresponse data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getDomainForwardProtocolSet();
 * const item: DomainForwardProtocolSet = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type DomainForwardProtocolSet = components['schemas']['DomainForwardProtocolSetResponse'];
/**
 * DomainForwardReferrerStatsResponse
 *
 * @remarks
 * Type alias for the `DomainForwardReferrerStatsResponse` OpenAPI schema.
 * This type represents domainforwardreferrerstatsresponse data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getDomainForwardReferrerStats();
 * const item: DomainForwardReferrerStats = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type DomainForwardReferrerStats = components['schemas']['DomainForwardReferrerStatsResponse'];
/**
 * DomainForwardSetCreateRequest
 *
 * @remarks
 * Type alias for the `DomainForwardSetCreateRequest` OpenAPI schema.
 * This type represents domainforwardsetcreaterequest data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getDomainForwardSetCreateRequest();
 * const item: DomainForwardSetCreateRequest = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type DomainForwardSetCreateRequest = components['schemas']['DomainForwardSetCreateRequest'];
/**
 * DomainForwardSetRequest
 *
 * @remarks
 * Type alias for the `DomainForwardSetRequest` OpenAPI schema.
 * This type represents domainforwardsetrequest data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getDomainForwardSetRequest();
 * const item: DomainForwardSetRequest = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type DomainForwardSetRequest = components['schemas']['DomainForwardSetRequest'];
/**
 * DomainForwardSetResponse
 *
 * @remarks
 * Type alias for the `DomainForwardSetResponse` OpenAPI schema.
 * This type represents domainforwardsetresponse data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getDomainForwardSet();
 * const item: DomainForwardSet = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type DomainForwardSet = components['schemas']['DomainForwardSetResponse'];
/**
 * DomainForwardSortField
 *
 * @remarks
 * Type alias for the `DomainForwardSortField` OpenAPI schema.
 * This type represents domainforwardsortfield data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getDomainForwardSortField();
 * const item: DomainForwardSortField = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type DomainForwardSortField = components['schemas']['DomainForwardSortField'];
/**
 * DomainForwardStatusCodeStatsResponse
 *
 * @remarks
 * Type alias for the `DomainForwardStatusCodeStatsResponse` OpenAPI schema.
 * This type represents domainforwardstatuscodestatsresponse data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getDomainForwardStatusCodeStats();
 * const item: DomainForwardStatusCodeStats = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type DomainForwardStatusCodeStats = components['schemas']['DomainForwardStatusCodeStatsResponse'];
/**
 * DomainForwardUserAgentStatsResponse
 *
 * @remarks
 * Type alias for the `DomainForwardUserAgentStatsResponse` OpenAPI schema.
 * This type represents domainforwarduseragentstatsresponse data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getDomainForwardUserAgentStats();
 * const item: DomainForwardUserAgentStats = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type DomainForwardUserAgentStats = components['schemas']['DomainForwardUserAgentStatsResponse'];
/**
 * DomainForwardVisitsByKeyResponse
 *
 * @remarks
 * Type alias for the `DomainForwardVisitsByKeyResponse` OpenAPI schema.
 * This type represents domainforwardvisitsbykeyresponse data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getDomainForwardVisitsByKey();
 * const item: DomainForwardVisitsByKey = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type DomainForwardVisitsByKey = components['schemas']['DomainForwardVisitsByKeyResponse'];
/**
 * DomainForwardZone
 *
 * @remarks
 * Type alias for the `DomainForwardZone` OpenAPI schema.
 * This type represents domainforwardzone data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getDomainForwardZone();
 * const item: DomainForwardZone = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type DomainForwardZone = components['schemas']['DomainForwardZone'];
/**
 * DomainForwardZoneSortField
 *
 * @remarks
 * Type alias for the `DomainForwardZoneSortField` OpenAPI schema.
 * This type represents domainforwardzonesortfield data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getDomainForwardZoneSortField();
 * const item: DomainForwardZoneSortField = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type DomainForwardZoneSortField = components['schemas']['DomainForwardZoneSortField'];
/**
 * DomainHostResponse
 *
 * @remarks
 * Type alias for the `DomainHostResponse` OpenAPI schema.
 * This type represents domainhostresponse data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getDomainHost();
 * const item: DomainHost = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type DomainHost = components['schemas']['DomainHostResponse'];
/**
 * DomainIncludeField
 *
 * @remarks
 * Type alias for the `DomainIncludeField` OpenAPI schema.
 * This type represents domainincludefield data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getDomainIncludeField();
 * const item: DomainIncludeField = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type DomainIncludeField = components['schemas']['DomainIncludeField'];
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
 * DomainStatusResponse
 *
 * @remarks
 * Type alias for the `DomainStatusResponse` OpenAPI schema.
 * This type represents domainstatusresponse data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getDomainStatus2();
 * const item: DomainStatus2 = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type DomainStatus2 = components['schemas']['DomainStatusResponse'];
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
 * DomainTransferBulkCommand
 *
 * @remarks
 * Type alias for the `DomainTransferBulkCommand` OpenAPI schema.
 * This type represents domaintransferbulkcommand data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getDomainTransferBulkCommand();
 * const item: DomainTransferBulkCommand = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type DomainTransferBulkCommand = components['schemas']['DomainTransferBulkCommand'];
/**
 * DomainTransferBulkInstance
 *
 * @remarks
 * Type alias for the `DomainTransferBulkInstance` OpenAPI schema.
 * This type represents domaintransferbulkinstance data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getDomainTransferBulkInstance();
 * const item: DomainTransferBulkInstance = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type DomainTransferBulkInstance = components['schemas']['DomainTransferBulkInstance'];
/**
 * DomainTransferBulkPayload
 *
 * @remarks
 * Type alias for the `DomainTransferBulkPayload` OpenAPI schema.
 * This type represents domaintransferbulkpayload data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getDomainTransferBulkPayload();
 * const item: DomainTransferBulkPayload = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type DomainTransferBulkPayload = components['schemas']['DomainTransferBulkPayload'];
/**
 * DomainTransferBulkTemplate
 *
 * @remarks
 * Type alias for the `DomainTransferBulkTemplate` OpenAPI schema.
 * This type represents domaintransferbulktemplate data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getDomainTransferBulkTemplate();
 * const item: DomainTransferBulkTemplate = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type DomainTransferBulkTemplate = components['schemas']['DomainTransferBulkTemplate'];
/**
 * DomainTransferCommand
 *
 * @remarks
 * Type alias for the `DomainTransferCommand` OpenAPI schema.
 * This type represents domaintransfercommand data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getDomainTransferCommand();
 * const item: DomainTransferCommand = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type DomainTransferCommand = components['schemas']['DomainTransferCommand'];
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
 * DomainTransferPayloadData
 *
 * @remarks
 * Type alias for the `DomainTransferPayloadData` OpenAPI schema.
 * This type represents domaintransferpayloaddata data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getDomainTransferPayloadData();
 * const item: DomainTransferPayloadData = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type DomainTransferPayloadData = components['schemas']['DomainTransferPayloadData'];
/**
 * DomainTransferWorkerPayload
 *
 * @remarks
 * Type alias for the `DomainTransferWorkerPayload` OpenAPI schema.
 * This type represents domaintransferworkerpayload data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getDomainTransferWorkerPayload();
 * const item: DomainTransferWorkerPayload = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type DomainTransferWorkerPayload = components['schemas']['DomainTransferWorkerPayload'];
/**
 * DomainTransitRequest
 *
 * @remarks
 * Type alias for the `DomainTransitRequest` OpenAPI schema.
 * This type represents domaintransitrequest data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getDomainTransitRequest();
 * const item: DomainTransitRequest = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type DomainTransitRequest = components['schemas']['DomainTransitRequest'];
/**
 * DomainTransitResponse
 *
 * @remarks
 * Type alias for the `DomainTransitResponse` OpenAPI schema.
 * This type represents domaintransitresponse data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getDomainTransit();
 * const item: DomainTransit = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type DomainTransit = components['schemas']['DomainTransitResponse'];
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
 * DomainUpdateBulkCommand
 *
 * @remarks
 * Type alias for the `DomainUpdateBulkCommand` OpenAPI schema.
 * This type represents domainupdatebulkcommand data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getDomainUpdateBulkCommand();
 * const item: DomainUpdateBulkCommand = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type DomainUpdateBulkCommand = components['schemas']['DomainUpdateBulkCommand'];
/**
 * DomainUpdateBulkInstance
 *
 * @remarks
 * Type alias for the `DomainUpdateBulkInstance` OpenAPI schema.
 * This type represents domainupdatebulkinstance data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getDomainUpdateBulkInstance();
 * const item: DomainUpdateBulkInstance = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type DomainUpdateBulkInstance = components['schemas']['DomainUpdateBulkInstance'];
/**
 * DomainUpdateBulkPayload
 *
 * @remarks
 * Type alias for the `DomainUpdateBulkPayload` OpenAPI schema.
 * This type represents domainupdatebulkpayload data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getDomainUpdateBulkPayload();
 * const item: DomainUpdateBulkPayload = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type DomainUpdateBulkPayload = components['schemas']['DomainUpdateBulkPayload'];
/**
 * DomainUpdateBulkTemplate
 *
 * @remarks
 * Type alias for the `DomainUpdateBulkTemplate` OpenAPI schema.
 * This type represents domainupdatebulktemplate data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getDomainUpdateBulkTemplate();
 * const item: DomainUpdateBulkTemplate = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type DomainUpdateBulkTemplate = components['schemas']['DomainUpdateBulkTemplate'];
/**
 * DomainUpdateCommand
 *
 * @remarks
 * Type alias for the `DomainUpdateCommand` OpenAPI schema.
 * This type represents domainupdatecommand data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getDomainUpdateCommand();
 * const item: DomainUpdateCommand = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type DomainUpdateCommand = components['schemas']['DomainUpdateCommand'];
/**
 * DomainUpdatePayloadData
 *
 * @remarks
 * Type alias for the `DomainUpdatePayloadData` OpenAPI schema.
 * This type represents domainupdatepayloaddata data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getDomainUpdatePayloadData();
 * const item: DomainUpdatePayloadData = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type DomainUpdatePayloadData = components['schemas']['DomainUpdatePayloadData'];
/**
 * DomainUpdateWorkerPayload
 *
 * @remarks
 * Type alias for the `DomainUpdateWorkerPayload` OpenAPI schema.
 * This type represents domainupdateworkerpayload data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getDomainUpdateWorkerPayload();
 * const item: DomainUpdateWorkerPayload = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type DomainUpdateWorkerPayload = components['schemas']['DomainUpdateWorkerPayload'];
/**
 * DomainWithdrawRequest
 *
 * @remarks
 * Type alias for the `DomainWithdrawRequest` OpenAPI schema.
 * This type represents domainwithdrawrequest data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getDomainWithdrawRequest();
 * const item: DomainWithdrawRequest = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type DomainWithdrawRequest = components['schemas']['DomainWithdrawRequest'];
/**
 * DomainWithdrawResponse
 *
 * @remarks
 * Type alias for the `DomainWithdrawResponse` OpenAPI schema.
 * This type represents domainwithdrawresponse data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getDomainWithdraw();
 * const item: DomainWithdraw = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type DomainWithdraw = components['schemas']['DomainWithdrawResponse'];
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
 * EmailForwardAliasCreate
 *
 * @remarks
 * Type alias for the `EmailForwardAliasCreate` OpenAPI schema.
 * This type represents emailforwardaliascreate data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getEmailForwardAliasCreate();
 * const item: EmailForwardAliasCreate = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type EmailForwardAliasCreate = components['schemas']['EmailForwardAliasCreate'];
/**
 * EmailForwardAliasMetrics
 *
 * @remarks
 * Type alias for the `EmailForwardAliasMetrics` OpenAPI schema.
 * This type represents emailforwardaliasmetrics data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getEmailForwardAliasMetrics();
 * const item: EmailForwardAliasMetrics = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type EmailForwardAliasMetrics = components['schemas']['EmailForwardAliasMetrics'];
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
 * EmailForwardCreate
 *
 * @remarks
 * Type alias for the `EmailForwardCreate` OpenAPI schema.
 * This type represents emailforwardcreate data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getEmailForwardCreate();
 * const item: EmailForwardCreate = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type EmailForwardCreate = components['schemas']['EmailForwardCreate'];
/**
 * EmailForwardLog
 *
 * @remarks
 * Type alias for the `EmailForwardLog` OpenAPI schema.
 * This type represents emailforwardlog data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getEmailForwardLog();
 * const item: EmailForwardLog = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type EmailForwardLog = components['schemas']['EmailForwardLog'];
/**
 * EmailForwardLogEvent
 *
 * @remarks
 * Type alias for the `EmailForwardLogEvent` OpenAPI schema.
 * This type represents emailforwardlogevent data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getEmailForwardLogEvent();
 * const item: EmailForwardLogEvent = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type EmailForwardLogEvent = components['schemas']['EmailForwardLogEvent'];
/**
 * EmailForwardLogSortField
 *
 * @remarks
 * Type alias for the `EmailForwardLogSortField` OpenAPI schema.
 * This type represents emailforwardlogsortfield data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getEmailForwardLogSortField();
 * const item: EmailForwardLogSortField = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type EmailForwardLogSortField = components['schemas']['EmailForwardLogSortField'];
/**
 * EmailForwardLogStatus
 *
 * @remarks
 * Type alias for the `EmailForwardLogStatus` OpenAPI schema.
 * This type represents emailforwardlogstatus data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getEmailForwardLogStatus();
 * const item: EmailForwardLogStatus = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type EmailForwardLogStatus = components['schemas']['EmailForwardLogStatus'];
/**
 * EmailForwardMetrics
 *
 * @remarks
 * Type alias for the `EmailForwardMetrics` OpenAPI schema.
 * This type represents emailforwardmetrics data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getEmailForwardMetrics();
 * const item: EmailForwardMetrics = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type EmailForwardMetrics = components['schemas']['EmailForwardMetrics'];
/**
 * EmailForwardMetricsFilters
 *
 * @remarks
 * Type alias for the `EmailForwardMetricsFilters` OpenAPI schema.
 * This type represents emailforwardmetricsfilters data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getEmailForwardMetricsFilters();
 * const item: EmailForwardMetricsFilters = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type EmailForwardMetricsFilters = components['schemas']['EmailForwardMetricsFilters'];
/**
 * EmailForwardMetricsRates
 *
 * @remarks
 * Type alias for the `EmailForwardMetricsRates` OpenAPI schema.
 * This type represents emailforwardmetricsrates data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getEmailForwardMetricsRates();
 * const item: EmailForwardMetricsRates = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type EmailForwardMetricsRates = components['schemas']['EmailForwardMetricsRates'];
/**
 * EmailForwardResponse
 *
 * @remarks
 * Type alias for the `EmailForwardResponse` OpenAPI schema.
 * This type represents emailforwardresponse data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getEmailForward();
 * const item: EmailForward = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type EmailForward = components['schemas']['EmailForwardResponse'];
/**
 * EmailForwardSortField
 *
 * @remarks
 * Type alias for the `EmailForwardSortField` OpenAPI schema.
 * This type represents emailforwardsortfield data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getEmailForwardSortField();
 * const item: EmailForwardSortField = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type EmailForwardSortField = components['schemas']['EmailForwardSortField'];
/**
 * EmailForwardZone
 *
 * @remarks
 * Type alias for the `EmailForwardZone` OpenAPI schema.
 * This type represents emailforwardzone data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getEmailForwardZone();
 * const item: EmailForwardZone = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type EmailForwardZone = components['schemas']['EmailForwardZone'];
/**
 * EmailForwardZoneSortField
 *
 * @remarks
 * Type alias for the `EmailForwardZoneSortField` OpenAPI schema.
 * This type represents emailforwardzonesortfield data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getEmailForwardZoneSortField();
 * const item: EmailForwardZoneSortField = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type EmailForwardZoneSortField = components['schemas']['EmailForwardZoneSortField'];
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
 * EmptyEvent
 *
 * @remarks
 * Type alias for the `EmptyEvent` OpenAPI schema.
 * This type represents emptyevent data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getEmptyEvent();
 * const item: EmptyEvent = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type EmptyEvent = components['schemas']['EmptyEvent'];
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
 * EventSortField
 *
 * @remarks
 * Type alias for the `EventSortField` OpenAPI schema.
 * This type represents eventsortfield data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getEventSortField();
 * const item: EventSortField = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type EventSortField = components['schemas']['EventSortField'];
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
 * ExecutingEntity
 *
 * @remarks
 * Type alias for the `ExecutingEntity` OpenAPI schema.
 * This type represents executingentity data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getExecutingEntity();
 * const item: ExecutingEntity = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type ExecutingEntity = components['schemas']['ExecutingEntity'];
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
 * GeoStatsBucket
 *
 * @remarks
 * Type alias for the `GeoStatsBucket` OpenAPI schema.
 * This type represents geostatsbucket data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getGeoStatsBucket();
 * const item: GeoStatsBucket = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type GeoStatsBucket = components['schemas']['GeoStatsBucket'];
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
 * HTTPMethod. HTTP methods and descriptions

Methods from the following RFCs are all observed:

    * RFC 9110: HTTP Semantics, obsoletes 7231, which obsoleted 2616
    * RFC 5789: PATCH Method for HTTP
 *
 * @remarks
 * Type alias for the `HTTPMethod` OpenAPI schema.
 * This type represents httpmethod data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getHTTPMethod();
 * const item: HTTPMethod = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type HTTPMethod = components['schemas']['HTTPMethod'];
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
 * HostSchema
 *
 * @remarks
 * Type alias for the `HostSchema` OpenAPI schema.
 * This type represents hostschema data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getHostSchema();
 * const item: HostSchema = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type HostSchema = components['schemas']['HostSchema'];
/**
 * HostStatus
 *
 * @remarks
 * Type alias for the `HostStatus` OpenAPI schema.
 * This type represents hoststatus data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getHostStatus();
 * const item: HostStatus = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type HostStatus = components['schemas']['HostStatus'];
/**
 * HttpProtocol
 *
 * @remarks
 * Type alias for the `HttpProtocol` OpenAPI schema.
 * This type represents httpprotocol data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getHttpProtocol();
 * const item: HttpProtocol = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type HttpProtocol = components['schemas']['HttpProtocol'];
/**
 * HttpRedirectListResponse
 *
 * @remarks
 * Type alias for the `HttpRedirectListResponse` OpenAPI schema.
 * This type represents httpredirectlistresponse data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getHttpRedirectList();
 * const item: HttpRedirectList = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type HttpRedirectList = components['schemas']['HttpRedirectListResponse'];
/**
 * HttpRedirectRemove
 *
 * @remarks
 * Type alias for the `HttpRedirectRemove` OpenAPI schema.
 * This type represents httpredirectremove data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getHttpRedirectRemove();
 * const item: HttpRedirectRemove = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type HttpRedirectRemove = components['schemas']['HttpRedirectRemove'];
/**
 * HttpRedirectRequest
 *
 * @remarks
 * Type alias for the `HttpRedirectRequest` OpenAPI schema.
 * This type represents httpredirectrequest data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getHttpRedirectRequest();
 * const item: HttpRedirectRequest = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type HttpRedirectRequest = components['schemas']['HttpRedirectRequest'];
/**
 * HttpRedirectUpsert
 *
 * @remarks
 * Type alias for the `HttpRedirectUpsert` OpenAPI schema.
 * This type represents httpredirectupsert data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getHttpRedirectUpsert();
 * const item: HttpRedirectUpsert = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type HttpRedirectUpsert = components['schemas']['HttpRedirectUpsert'];
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
 * InvoiceResponse
 *
 * @remarks
 * Type alias for the `InvoiceResponse` OpenAPI schema.
 * This type represents invoiceresponse data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getInvoice();
 * const item: Invoice = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type Invoice = components['schemas']['InvoiceResponse'];
/**
 * InvoiceResponsePaymentStatus
 *
 * @remarks
 * Type alias for the `InvoiceResponsePaymentStatus` OpenAPI schema.
 * This type represents invoiceresponsepaymentstatus data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getInvoiceResponsePaymentStatus();
 * const item: InvoiceResponsePaymentStatus = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type InvoiceResponsePaymentStatus = components['schemas']['InvoiceResponsePaymentStatus'];
/**
 * InvoiceResponseStatus
 *
 * @remarks
 * Type alias for the `InvoiceResponseStatus` OpenAPI schema.
 * This type represents invoiceresponsestatus data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getInvoiceResponseStatus();
 * const item: InvoiceResponseStatus = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type InvoiceResponseStatus = components['schemas']['InvoiceResponseStatus'];
/**
 * InvoiceResponseType
 *
 * @remarks
 * Type alias for the `InvoiceResponseType` OpenAPI schema.
 * This type represents invoiceresponsetype data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getInvoiceResponseType();
 * const item: InvoiceResponseType = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type InvoiceResponseType = components['schemas']['InvoiceResponseType'];
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
 * JobBatchMetadataResponse
 *
 * @remarks
 * Type alias for the `JobBatchMetadataResponse` OpenAPI schema.
 * This type represents jobbatchmetadataresponse data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getJobBatchMetadata();
 * const item: JobBatchMetadata = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type JobBatchMetadata = components['schemas']['JobBatchMetadataResponse'];
/**
 * JobBatchRequest
 *
 * @remarks
 * Type alias for the `JobBatchRequest` OpenAPI schema.
 * This type represents jobbatchrequest data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getJobBatchRequest();
 * const item: JobBatchRequest = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type JobBatchRequest = components['schemas']['JobBatchRequest'];
/**
 * JobBatchStatusResponse
 *
 * @remarks
 * Type alias for the `JobBatchStatusResponse` OpenAPI schema.
 * This type represents jobbatchstatusresponse data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getJobBatchStatus();
 * const item: JobBatchStatus = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type JobBatchStatus = components['schemas']['JobBatchStatusResponse'];
/**
 * JobCountsByStatus
 *
 * @remarks
 * Type alias for the `JobCountsByStatus` OpenAPI schema.
 * This type represents jobcountsbystatus data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getJobCountsByStatus();
 * const item: JobCountsByStatus = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type JobCountsByStatus = components['schemas']['JobCountsByStatus'];
/**
 * JobResponse
 *
 * @remarks
 * Type alias for the `JobResponse` OpenAPI schema.
 * This type represents jobresponse data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getJob();
 * const item: Job = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type Job = components['schemas']['JobResponse'];
/**
 * JobStatus
 *
 * @remarks
 * Type alias for the `JobStatus` OpenAPI schema.
 * This type represents jobstatus data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getJobStatus();
 * const item: JobStatus = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type JobStatus = components['schemas']['JobStatus'];
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
 * LegalRequirementBase
 *
 * @remarks
 * Type alias for the `LegalRequirementBase` OpenAPI schema.
 * This type represents legalrequirementbase data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getLegalRequirementBase();
 * const item: LegalRequirementBase = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type LegalRequirementBase = components['schemas']['LegalRequirementBase'];
/**
 * LegalRequirementOperationType
 *
 * @remarks
 * Type alias for the `LegalRequirementOperationType` OpenAPI schema.
 * This type represents legalrequirementoperationtype data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getLegalRequirementOperationType();
 * const item: LegalRequirementOperationType = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type LegalRequirementOperationType = components['schemas']['LegalRequirementOperationType'];
/**
 * LegalRequirementType
 *
 * @remarks
 * Type alias for the `LegalRequirementType` OpenAPI schema.
 * This type represents legalrequirementtype data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getLegalRequirementType();
 * const item: LegalRequirementType = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type LegalRequirementType = components['schemas']['LegalRequirementType'];
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
 * MetricsGrouping
 *
 * @remarks
 * Type alias for the `MetricsGrouping` OpenAPI schema.
 * This type represents metricsgrouping data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getMetricsGrouping();
 * const item: MetricsGrouping = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type MetricsGrouping = components['schemas']['MetricsGrouping'];
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
 * ObjectEventType
 *
 * @remarks
 * Type alias for the `ObjectEventType` OpenAPI schema.
 * This type represents objecteventtype data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getObjectEventType();
 * const item: ObjectEventType = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type ObjectEventType = components['schemas']['ObjectEventType'];
/**
 * ObjectLog
 *
 * @remarks
 * Type alias for the `ObjectLog` OpenAPI schema.
 * This type represents objectlog data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getObjectLog();
 * const item: ObjectLog = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type ObjectLog = components['schemas']['ObjectLog'];
/**
 * ObjectLogSortField
 *
 * @remarks
 * Type alias for the `ObjectLogSortField` OpenAPI schema.
 * This type represents objectlogsortfield data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getObjectLogSortField();
 * const item: ObjectLogSortField = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type ObjectLogSortField = components['schemas']['ObjectLogSortField'];
/**
 * ObjectTagChanges
 *
 * @remarks
 * Type alias for the `ObjectTagChanges` OpenAPI schema.
 * This type represents objecttagchanges data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getObjectTagChanges();
 * const item: ObjectTagChanges = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type ObjectTagChanges = components['schemas']['ObjectTagChanges'];
/**
 * ObjectTagChangesResponse
 *
 * @remarks
 * Type alias for the `ObjectTagChangesResponse` OpenAPI schema.
 * This type represents objecttagchangesresponse data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getObjectTagChanges2();
 * const item: ObjectTagChanges2 = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type ObjectTagChanges2 = components['schemas']['ObjectTagChangesResponse'];
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
 * OrganizationSortField
 *
 * @remarks
 * Type alias for the `OrganizationSortField` OpenAPI schema.
 * This type represents organizationsortfield data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getOrganizationSortField();
 * const item: OrganizationSortField = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type OrganizationSortField = components['schemas']['OrganizationSortField'];
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
 * Pagination[BillingTransactionResponse]
 *
 * @remarks
 * Type alias for the `Pagination_BillingTransactionResponse_` OpenAPI schema.
 * This type represents pagination[billingtransactionresponse] data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getPagination_BillingTransaction();
 * const item: Pagination_BillingTransaction = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type Pagination_BillingTransaction = components['schemas']['Pagination_BillingTransactionResponse_'];
/**
 * Pagination[ContactAttributeSetResponse]
 *
 * @remarks
 * Type alias for the `Pagination_ContactAttributeSetResponse_` OpenAPI schema.
 * This type represents pagination[contactattributesetresponse] data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getPagination_ContactAttributeSet();
 * const item: Pagination_ContactAttributeSet = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type Pagination_ContactAttributeSet = components['schemas']['Pagination_ContactAttributeSetResponse_'];
/**
 * Pagination[ContactResponse]
 *
 * @remarks
 * Type alias for the `Pagination_ContactResponse_` OpenAPI schema.
 * This type represents pagination[contactresponse] data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getPagination_Contact();
 * const item: Pagination_Contact = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type Pagination_Contact = components['schemas']['Pagination_ContactResponse_'];
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
 * Pagination[DomainForwardZone]
 *
 * @remarks
 * Type alias for the `Pagination_DomainForwardZone_` OpenAPI schema.
 * This type represents pagination[domainforwardzone] data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getPagination_DomainForwardZone();
 * const item: Pagination_DomainForwardZone = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type Pagination_DomainForwardZone = components['schemas']['Pagination_DomainForwardZone_'];
/**
 * Pagination[DomainForward]
 *
 * @remarks
 * Type alias for the `Pagination_DomainForward_` OpenAPI schema.
 * This type represents pagination[domainforward] data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getPagination_DomainForward();
 * const item: Pagination_DomainForward = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type Pagination_DomainForward = components['schemas']['Pagination_DomainForward_'];
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
 * Pagination[EmailForwardLog]
 *
 * @remarks
 * Type alias for the `Pagination_EmailForwardLog_` OpenAPI schema.
 * This type represents pagination[emailforwardlog] data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getPagination_EmailForwardLog();
 * const item: Pagination_EmailForwardLog = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type Pagination_EmailForwardLog = components['schemas']['Pagination_EmailForwardLog_'];
/**
 * Pagination[EmailForwardResponse]
 *
 * @remarks
 * Type alias for the `Pagination_EmailForwardResponse_` OpenAPI schema.
 * This type represents pagination[emailforwardresponse] data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getPagination_EmailForward();
 * const item: Pagination_EmailForward = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type Pagination_EmailForward = components['schemas']['Pagination_EmailForwardResponse_'];
/**
 * Pagination[EmailForwardZone]
 *
 * @remarks
 * Type alias for the `Pagination_EmailForwardZone_` OpenAPI schema.
 * This type represents pagination[emailforwardzone] data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getPagination_EmailForwardZone();
 * const item: Pagination_EmailForwardZone = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type Pagination_EmailForwardZone = components['schemas']['Pagination_EmailForwardZone_'];
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
 * Pagination[InvoiceResponse]
 *
 * @remarks
 * Type alias for the `Pagination_InvoiceResponse_` OpenAPI schema.
 * This type represents pagination[invoiceresponse] data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getPagination_Invoice();
 * const item: Pagination_Invoice = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type Pagination_Invoice = components['schemas']['Pagination_InvoiceResponse_'];
/**
 * Pagination[JobBatchMetadataResponse]
 *
 * @remarks
 * Type alias for the `Pagination_JobBatchMetadataResponse_` OpenAPI schema.
 * This type represents pagination[jobbatchmetadataresponse] data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getPagination_JobBatchMetadata();
 * const item: Pagination_JobBatchMetadata = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type Pagination_JobBatchMetadata = components['schemas']['Pagination_JobBatchMetadataResponse_'];
/**
 * Pagination[JobResponse]
 *
 * @remarks
 * Type alias for the `Pagination_JobResponse_` OpenAPI schema.
 * This type represents pagination[jobresponse] data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getPagination_Job();
 * const item: Pagination_Job = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type Pagination_Job = components['schemas']['Pagination_JobResponse_'];
/**
 * Pagination[ObjectLog]
 *
 * @remarks
 * Type alias for the `Pagination_ObjectLog_` OpenAPI schema.
 * This type represents pagination[objectlog] data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getPagination_ObjectLog();
 * const item: Pagination_ObjectLog = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type Pagination_ObjectLog = components['schemas']['Pagination_ObjectLog_'];
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
 * Pagination[ParkingResponse]
 *
 * @remarks
 * Type alias for the `Pagination_ParkingResponse_` OpenAPI schema.
 * This type represents pagination[parkingresponse] data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getPagination_Parking();
 * const item: Pagination_Parking = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type Pagination_Parking = components['schemas']['Pagination_ParkingResponse_'];
/**
 * Pagination[RequestHistory]
 *
 * @remarks
 * Type alias for the `Pagination_RequestHistory_` OpenAPI schema.
 * This type represents pagination[requesthistory] data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getPagination_RequestHistory();
 * const item: Pagination_RequestHistory = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type Pagination_RequestHistory = components['schemas']['Pagination_RequestHistory_'];
/**
 * Pagination[TagResponse]
 *
 * @remarks
 * Type alias for the `Pagination_TagResponse_` OpenAPI schema.
 * This type represents pagination[tagresponse] data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getPagination_Tag();
 * const item: Pagination_Tag = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type Pagination_Tag = components['schemas']['Pagination_TagResponse_'];
/**
 * Pagination[UserPublic]
 *
 * @remarks
 * Type alias for the `Pagination_UserPublic_` OpenAPI schema.
 * This type represents pagination[userpublic] data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getPagination_UserPublic();
 * const item: Pagination_UserPublic = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type Pagination_UserPublic = components['schemas']['Pagination_UserPublic_'];
/**
 * ParkingActionPayloadData
 *
 * @remarks
 * Type alias for the `ParkingActionPayloadData` OpenAPI schema.
 * This type represents parkingactionpayloaddata data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getParkingActionPayloadData();
 * const item: ParkingActionPayloadData = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type ParkingActionPayloadData = components['schemas']['ParkingActionPayloadData'];
/**
 * ParkingAgreementAcceptance. Parking agreement acceptance details.
 *
 * @remarks
 * Type alias for the `ParkingAgreementAcceptance` OpenAPI schema.
 * This type represents parkingagreementacceptance data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getParkingAgreementAcceptance();
 * const item: ParkingAgreementAcceptance = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type ParkingAgreementAcceptance = components['schemas']['ParkingAgreementAcceptance'];
/**
 * ParkingCreateBulkCommand
 *
 * @remarks
 * Type alias for the `ParkingCreateBulkCommand` OpenAPI schema.
 * This type represents parkingcreatebulkcommand data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getParkingCreateBulkCommand();
 * const item: ParkingCreateBulkCommand = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type ParkingCreateBulkCommand = components['schemas']['ParkingCreateBulkCommand'];
/**
 * ParkingCreateBulkInstance
 *
 * @remarks
 * Type alias for the `ParkingCreateBulkInstance` OpenAPI schema.
 * This type represents parkingcreatebulkinstance data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getParkingCreateBulkInstance();
 * const item: ParkingCreateBulkInstance = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type ParkingCreateBulkInstance = components['schemas']['ParkingCreateBulkInstance'];
/**
 * ParkingCreateBulkPayload
 *
 * @remarks
 * Type alias for the `ParkingCreateBulkPayload` OpenAPI schema.
 * This type represents parkingcreatebulkpayload data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getParkingCreateBulkPayload();
 * const item: ParkingCreateBulkPayload = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type ParkingCreateBulkPayload = components['schemas']['ParkingCreateBulkPayload'];
/**
 * ParkingCreateBulkTemplate
 *
 * @remarks
 * Type alias for the `ParkingCreateBulkTemplate` OpenAPI schema.
 * This type represents parkingcreatebulktemplate data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getParkingCreateBulkTemplate();
 * const item: ParkingCreateBulkTemplate = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type ParkingCreateBulkTemplate = components['schemas']['ParkingCreateBulkTemplate'];
/**
 * ParkingCreatePayloadData
 *
 * @remarks
 * Type alias for the `ParkingCreatePayloadData` OpenAPI schema.
 * This type represents parkingcreatepayloaddata data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getParkingCreatePayloadData();
 * const item: ParkingCreatePayloadData = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type ParkingCreatePayloadData = components['schemas']['ParkingCreatePayloadData'];
/**
 * ParkingCreateWorkerPayload
 *
 * @remarks
 * Type alias for the `ParkingCreateWorkerPayload` OpenAPI schema.
 * This type represents parkingcreateworkerpayload data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getParkingCreateWorkerPayload();
 * const item: ParkingCreateWorkerPayload = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type ParkingCreateWorkerPayload = components['schemas']['ParkingCreateWorkerPayload'];
/**
 * ParkingDeleteBulkCommand
 *
 * @remarks
 * Type alias for the `ParkingDeleteBulkCommand` OpenAPI schema.
 * This type represents parkingdeletebulkcommand data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getParkingDeleteBulkCommand();
 * const item: ParkingDeleteBulkCommand = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type ParkingDeleteBulkCommand = components['schemas']['ParkingDeleteBulkCommand'];
/**
 * ParkingDeleteBulkInstance
 *
 * @remarks
 * Type alias for the `ParkingDeleteBulkInstance` OpenAPI schema.
 * This type represents parkingdeletebulkinstance data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getParkingDeleteBulkInstance();
 * const item: ParkingDeleteBulkInstance = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type ParkingDeleteBulkInstance = components['schemas']['ParkingDeleteBulkInstance'];
/**
 * ParkingDeleteBulkPayload
 *
 * @remarks
 * Type alias for the `ParkingDeleteBulkPayload` OpenAPI schema.
 * This type represents parkingdeletebulkpayload data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getParkingDeleteBulkPayload();
 * const item: ParkingDeleteBulkPayload = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type ParkingDeleteBulkPayload = components['schemas']['ParkingDeleteBulkPayload'];
/**
 * ParkingDeleteWorkerPayload
 *
 * @remarks
 * Type alias for the `ParkingDeleteWorkerPayload` OpenAPI schema.
 * This type represents parkingdeleteworkerpayload data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getParkingDeleteWorkerPayload();
 * const item: ParkingDeleteWorkerPayload = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type ParkingDeleteWorkerPayload = components['schemas']['ParkingDeleteWorkerPayload'];
/**
 * ParkingDisableBulkCommand
 *
 * @remarks
 * Type alias for the `ParkingDisableBulkCommand` OpenAPI schema.
 * This type represents parkingdisablebulkcommand data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getParkingDisableBulkCommand();
 * const item: ParkingDisableBulkCommand = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type ParkingDisableBulkCommand = components['schemas']['ParkingDisableBulkCommand'];
/**
 * ParkingDisableBulkInstance
 *
 * @remarks
 * Type alias for the `ParkingDisableBulkInstance` OpenAPI schema.
 * This type represents parkingdisablebulkinstance data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getParkingDisableBulkInstance();
 * const item: ParkingDisableBulkInstance = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type ParkingDisableBulkInstance = components['schemas']['ParkingDisableBulkInstance'];
/**
 * ParkingDisableBulkPayload
 *
 * @remarks
 * Type alias for the `ParkingDisableBulkPayload` OpenAPI schema.
 * This type represents parkingdisablebulkpayload data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getParkingDisableBulkPayload();
 * const item: ParkingDisableBulkPayload = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type ParkingDisableBulkPayload = components['schemas']['ParkingDisableBulkPayload'];
/**
 * ParkingDisableWorkerPayload
 *
 * @remarks
 * Type alias for the `ParkingDisableWorkerPayload` OpenAPI schema.
 * This type represents parkingdisableworkerpayload data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getParkingDisableWorkerPayload();
 * const item: ParkingDisableWorkerPayload = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type ParkingDisableWorkerPayload = components['schemas']['ParkingDisableWorkerPayload'];
/**
 * ParkingEnableBulkCommand
 *
 * @remarks
 * Type alias for the `ParkingEnableBulkCommand` OpenAPI schema.
 * This type represents parkingenablebulkcommand data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getParkingEnableBulkCommand();
 * const item: ParkingEnableBulkCommand = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type ParkingEnableBulkCommand = components['schemas']['ParkingEnableBulkCommand'];
/**
 * ParkingEnableBulkInstance
 *
 * @remarks
 * Type alias for the `ParkingEnableBulkInstance` OpenAPI schema.
 * This type represents parkingenablebulkinstance data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getParkingEnableBulkInstance();
 * const item: ParkingEnableBulkInstance = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type ParkingEnableBulkInstance = components['schemas']['ParkingEnableBulkInstance'];
/**
 * ParkingEnableBulkPayload
 *
 * @remarks
 * Type alias for the `ParkingEnableBulkPayload` OpenAPI schema.
 * This type represents parkingenablebulkpayload data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getParkingEnableBulkPayload();
 * const item: ParkingEnableBulkPayload = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type ParkingEnableBulkPayload = components['schemas']['ParkingEnableBulkPayload'];
/**
 * ParkingEnableWorkerPayload
 *
 * @remarks
 * Type alias for the `ParkingEnableWorkerPayload` OpenAPI schema.
 * This type represents parkingenableworkerpayload data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getParkingEnableWorkerPayload();
 * const item: ParkingEnableWorkerPayload = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type ParkingEnableWorkerPayload = components['schemas']['ParkingEnableWorkerPayload'];
/**
 * ParkingMetricsResponse
 *
 * @remarks
 * Type alias for the `ParkingMetricsResponse` OpenAPI schema.
 * This type represents parkingmetricsresponse data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getParkingMetrics();
 * const item: ParkingMetrics = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type ParkingMetrics = components['schemas']['ParkingMetricsResponse'];
/**
 * ParkingResponse
 *
 * @remarks
 * Type alias for the `ParkingResponse` OpenAPI schema.
 * This type represents parkingresponse data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getParking();
 * const item: Parking = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type Parking = components['schemas']['ParkingResponse'];
/**
 * ParkingSignupRequest. Request to sign up for parking (accept parking agreement).
 *
 * @remarks
 * Type alias for the `ParkingSignupRequest` OpenAPI schema.
 * This type represents parkingsignuprequest data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getParkingSignupRequest();
 * const item: ParkingSignupRequest = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type ParkingSignupRequest = components['schemas']['ParkingSignupRequest'];
/**
 * ParkingSignupResponse. Response after parking signup.
 *
 * @remarks
 * Type alias for the `ParkingSignupResponse` OpenAPI schema.
 * This type represents parkingsignupresponse data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getParkingSignup();
 * const item: ParkingSignup = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type ParkingSignup = components['schemas']['ParkingSignupResponse'];
/**
 * ParkingSignupStatusResponse. Response for checking parking signup status.
 *
 * @remarks
 * Type alias for the `ParkingSignupStatusResponse` OpenAPI schema.
 * This type represents parkingsignupstatusresponse data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getParkingSignupStatus();
 * const item: ParkingSignupStatus = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type ParkingSignupStatus = components['schemas']['ParkingSignupStatusResponse'];
/**
 * ParkingSortField
 *
 * @remarks
 * Type alias for the `ParkingSortField` OpenAPI schema.
 * This type represents parkingsortfield data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getParkingSortField();
 * const item: ParkingSortField = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type ParkingSortField = components['schemas']['ParkingSortField'];
/**
 * ParkingStatistics
 *
 * @remarks
 * Type alias for the `ParkingStatistics` OpenAPI schema.
 * This type represents parkingstatistics data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getParkingStatistics();
 * const item: ParkingStatistics = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type ParkingStatistics = components['schemas']['ParkingStatistics'];
/**
 * ParkingTotalMetricsResponse
 *
 * @remarks
 * Type alias for the `ParkingTotalMetricsResponse` OpenAPI schema.
 * This type represents parkingtotalmetricsresponse data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getParkingTotalMetrics();
 * const item: ParkingTotalMetrics = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type ParkingTotalMetrics = components['schemas']['ParkingTotalMetricsResponse'];
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
 * PeriodStr
 *
 * @remarks
 * Type alias for the `PeriodStr` OpenAPI schema.
 * This type represents periodstr data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getPeriodStr();
 * const item: PeriodStr = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type PeriodStr = components['schemas']['PeriodStr'];
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
 * PlatformStatsBucket
 *
 * @remarks
 * Type alias for the `PlatformStatsBucket` OpenAPI schema.
 * This type represents platformstatsbucket data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getPlatformStatsBucket();
 * const item: PlatformStatsBucket = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type PlatformStatsBucket = components['schemas']['PlatformStatsBucket'];
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
 * PremiumPriceEntryRes. A single premium price entry for a specific action
 *
 * @remarks
 * Type alias for the `PremiumPriceEntryRes` OpenAPI schema.
 * This type represents premiumpriceentryres data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getPremiumPriceEntryRes();
 * const item: PremiumPriceEntryRes = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type PremiumPriceEntryRes = components['schemas']['PremiumPriceEntryRes'];
/**
 * PremiumPricingAction
 *
 * @remarks
 * Type alias for the `PremiumPricingAction` OpenAPI schema.
 * This type represents premiumpricingaction data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getPremiumPricingAction();
 * const item: PremiumPricingAction = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type PremiumPricingAction = components['schemas']['PremiumPricingAction'];
/**
 * PremiumPricingRes. Premium pricing details for a domain
 *
 * @remarks
 * Type alias for the `PremiumPricingRes` OpenAPI schema.
 * This type represents premiumpricingres data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getPremiumPricingRes();
 * const item: PremiumPricingRes = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type PremiumPricingRes = components['schemas']['PremiumPricingRes'];
/**
 * PremiumPricingResponse
 *
 * @remarks
 * Type alias for the `PremiumPricingResponse` OpenAPI schema.
 * This type represents premiumpricingresponse data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getPremiumPricing();
 * const item: PremiumPricing = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type PremiumPricing = components['schemas']['PremiumPricingResponse'];
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
 * PricingPeriod
 *
 * @remarks
 * Type alias for the `PricingPeriod` OpenAPI schema.
 * This type represents pricingperiod data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getPricingPeriod();
 * const item: PricingPeriod = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type PricingPeriod = components['schemas']['PricingPeriod'];
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
 * Protocol
 *
 * @remarks
 * Type alias for the `Protocol` OpenAPI schema.
 * This type represents protocol data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getProtocol();
 * const item: Protocol = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type Protocol = components['schemas']['Protocol'];
/**
 * PublicAuthRequestForm
 *
 * @remarks
 * Type alias for the `PublicAuthRequestForm` OpenAPI schema.
 * This type represents publicauthrequestform data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getPublicAuthRequestForm();
 * const item: PublicAuthRequestForm = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type PublicAuthRequestForm = components['schemas']['PublicAuthRequestForm'];
/**
 * PublicReportListRes
 *
 * @remarks
 * Type alias for the `PublicReportListRes` OpenAPI schema.
 * This type represents publicreportlistres data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getPublicReportListRes();
 * const item: PublicReportListRes = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type PublicReportListRes = components['schemas']['PublicReportListRes'];
/**
 * PublicReportRes
 *
 * @remarks
 * Type alias for the `PublicReportRes` OpenAPI schema.
 * This type represents publicreportres data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getPublicReportRes();
 * const item: PublicReportRes = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type PublicReportRes = components['schemas']['PublicReportRes'];
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
 * RedirectCode
 *
 * @remarks
 * Type alias for the `RedirectCode` OpenAPI schema.
 * This type represents redirectcode data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getRedirectCode();
 * const item: RedirectCode = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type RedirectCode = components['schemas']['RedirectCode'];
/**
 * ReferrerStatsBucket
 *
 * @remarks
 * Type alias for the `ReferrerStatsBucket` OpenAPI schema.
 * This type represents referrerstatsbucket data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getReferrerStatsBucket();
 * const item: ReferrerStatsBucket = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type ReferrerStatsBucket = components['schemas']['ReferrerStatsBucket'];
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
 * RenewalEvent
 *
 * @remarks
 * Type alias for the `RenewalEvent` OpenAPI schema.
 * This type represents renewalevent data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getRenewalEvent();
 * const item: RenewalEvent = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type RenewalEvent = components['schemas']['RenewalEvent'];
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
 * ReportStatus
 *
 * @remarks
 * Type alias for the `ReportStatus` OpenAPI schema.
 * This type represents reportstatus data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getReportStatus();
 * const item: ReportStatus = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type ReportStatus = components['schemas']['ReportStatus'];
/**
 * ReportTriggerType
 *
 * @remarks
 * Type alias for the `ReportTriggerType` OpenAPI schema.
 * This type represents reporttriggertype data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getReportTriggerType();
 * const item: ReportTriggerType = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type ReportTriggerType = components['schemas']['ReportTriggerType'];
/**
 * ReportType
 *
 * @remarks
 * Type alias for the `ReportType` OpenAPI schema.
 * This type represents reporttype data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getReportType();
 * const item: ReportType = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type ReportType = components['schemas']['ReportType'];
/**
 * RequestHistory
 *
 * @remarks
 * Type alias for the `RequestHistory` OpenAPI schema.
 * This type represents requesthistory data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getRequestHistory();
 * const item: RequestHistory = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type RequestHistory = components['schemas']['RequestHistory'];
/**
 * RequestHistorySortField
 *
 * @remarks
 * Type alias for the `RequestHistorySortField` OpenAPI schema.
 * This type represents requesthistorysortfield data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getRequestHistorySortField();
 * const item: RequestHistorySortField = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type RequestHistorySortField = components['schemas']['RequestHistorySortField'];
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
 * StatusChanges
 *
 * @remarks
 * Type alias for the `StatusChanges` OpenAPI schema.
 * This type represents statuschanges data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getStatusChanges();
 * const item: StatusChanges = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type StatusChanges = components['schemas']['StatusChanges'];
/**
 * StatusCodeStatsBucket
 *
 * @remarks
 * Type alias for the `StatusCodeStatsBucket` OpenAPI schema.
 * This type represents statuscodestatsbucket data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getStatusCodeStatsBucket();
 * const item: StatusCodeStatsBucket = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type StatusCodeStatsBucket = components['schemas']['StatusCodeStatsBucket'];
/**
 * StrictMoneyDecimal
 *
 * @remarks
 * Type alias for the `StrictMoneyDecimal` OpenAPI schema.
 * This type represents strictmoneydecimal data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getStrictMoneyDecimal();
 * const item: StrictMoneyDecimal = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type StrictMoneyDecimal = components['schemas']['StrictMoneyDecimal'];
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
 * TagColor
 *
 * @remarks
 * Type alias for the `TagColor` OpenAPI schema.
 * This type represents tagcolor data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getTagColor();
 * const item: TagColor = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type TagColor = components['schemas']['TagColor'];
/**
 * TagCreate
 *
 * @remarks
 * Type alias for the `TagCreate` OpenAPI schema.
 * This type represents tagcreate data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getTagCreate();
 * const item: TagCreate = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type TagCreate = components['schemas']['TagCreate'];
/**
 * TagEnrichedResponse
 *
 * @remarks
 * Type alias for the `TagEnrichedResponse` OpenAPI schema.
 * This type represents tagenrichedresponse data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getTagEnriched();
 * const item: TagEnriched = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type TagEnriched = components['schemas']['TagEnrichedResponse'];
/**
 * TagFilterMode
 *
 * @remarks
 * Type alias for the `TagFilterMode` OpenAPI schema.
 * This type represents tagfiltermode data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getTagFilterMode();
 * const item: TagFilterMode = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type TagFilterMode = components['schemas']['TagFilterMode'];
/**
 * TagResponse
 *
 * @remarks
 * Type alias for the `TagResponse` OpenAPI schema.
 * This type represents tagresponse data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getTag();
 * const item: Tag = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type Tag = components['schemas']['TagResponse'];
/**
 * TagSortField
 *
 * @remarks
 * Type alias for the `TagSortField` OpenAPI schema.
 * This type represents tagsortfield data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getTagSortField();
 * const item: TagSortField = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type TagSortField = components['schemas']['TagSortField'];
/**
 * TagType
 *
 * @remarks
 * Type alias for the `TagType` OpenAPI schema.
 * This type represents tagtype data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getTagType();
 * const item: TagType = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type TagType = components['schemas']['TagType'];
/**
 * TagUpdate
 *
 * @remarks
 * Type alias for the `TagUpdate` OpenAPI schema.
 * This type represents tagupdate data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getTagUpdate();
 * const item: TagUpdate = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type TagUpdate = components['schemas']['TagUpdate'];
/**
 * TimeRange
 *
 * @remarks
 * Type alias for the `TimeRange` OpenAPI schema.
 * This type represents timerange data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getTimeRange();
 * const item: TimeRange = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type TimeRange = components['schemas']['TimeRange'];
/**
 * TimeSeriesBucket
 *
 * @remarks
 * Type alias for the `TimeSeriesBucket` OpenAPI schema.
 * This type represents timeseriesbucket data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getTimeSeriesBucket();
 * const item: TimeSeriesBucket = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type TimeSeriesBucket = components['schemas']['TimeSeriesBucket'];
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
 * TransferEvent
 *
 * @remarks
 * Type alias for the `TransferEvent` OpenAPI schema.
 * This type represents transferevent data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getTransferEvent();
 * const item: TransferEvent = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type TransferEvent = components['schemas']['TransferEvent'];
/**
 * TransferLockPolicyBase
 *
 * @remarks
 * Type alias for the `TransferLockPolicyBase` OpenAPI schema.
 * This type represents transferlockpolicybase data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getTransferLockPolicyBase();
 * const item: TransferLockPolicyBase = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type TransferLockPolicyBase = components['schemas']['TransferLockPolicyBase'];
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
 * UserAgentStatsBucket
 *
 * @remarks
 * Type alias for the `UserAgentStatsBucket` OpenAPI schema.
 * This type represents useragentstatsbucket data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getUserAgentStatsBucket();
 * const item: UserAgentStatsBucket = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type UserAgentStatsBucket = components['schemas']['UserAgentStatsBucket'];
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
 * UserAttributeResponse
 *
 * @remarks
 * Type alias for the `UserAttributeResponse` OpenAPI schema.
 * This type represents userattributeresponse data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getUserAttribute();
 * const item: UserAttribute = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type UserAttribute = components['schemas']['UserAttributeResponse'];
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
 * UserPublic
 *
 * @remarks
 * Type alias for the `UserPublic` OpenAPI schema.
 * This type represents userpublic data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getUserPublic();
 * const item: UserPublic = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type UserPublic = components['schemas']['UserPublic'];
/**
 * UserPublicWithAttributes
 *
 * @remarks
 * Type alias for the `UserPublicWithAttributes` OpenAPI schema.
 * This type represents userpublicwithattributes data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getUserPublicWithAttributes();
 * const item: UserPublicWithAttributes = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type UserPublicWithAttributes = components['schemas']['UserPublicWithAttributes'];
/**
 * UserSortField
 *
 * @remarks
 * Type alias for the `UserSortField` OpenAPI schema.
 * This type represents usersortfield data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getUserSortField();
 * const item: UserSortField = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type UserSortField = components['schemas']['UserSortField'];
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
 * VisitsByKeyBucket
 *
 * @remarks
 * Type alias for the `VisitsByKeyBucket` OpenAPI schema.
 * This type represents visitsbykeybucket data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getVisitsByKeyBucket();
 * const item: VisitsByKeyBucket = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type VisitsByKeyBucket = components['schemas']['VisitsByKeyBucket'];
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
 * ZoneIncludeField
 *
 * @remarks
 * Type alias for the `ZoneIncludeField` OpenAPI schema.
 * This type represents zoneincludefield data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getZoneIncludeField();
 * const item: ZoneIncludeField = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type ZoneIncludeField = components['schemas']['ZoneIncludeField'];
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
 * RequestAuthcodeResponse
 *
 * @remarks
 * Type alias for the `api__domain__tld_specific__be__models__RequestAuthcodeResponse` OpenAPI schema.
 * This type represents requestauthcoderesponse data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getRequestAuthcode();
 * const item: RequestAuthcode = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type RequestAuthcode = components['schemas']['api__domain__tld_specific__be__models__RequestAuthcodeResponse'];
/**
 * RequestAuthcodeResponse
 *
 * @remarks
 * Type alias for the `api__domain__tld_specific__eu__models__RequestAuthcodeResponse` OpenAPI schema.
 * This type represents requestauthcoderesponse data structures used in API requests and responses.
 *
 * @example
 * ```typescript
 * const response = await api.getRequestAuthcode2();
 * const item: RequestAuthcode2 = response.results;
 * ```
 *
 * @see {@link components} - The OpenAPI components schema definition
 */
export type RequestAuthcode2 = components['schemas']['api__domain__tld_specific__eu__models__RequestAuthcodeResponse'];
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