/**
 * Array type aliases for OpenAPI schemas
 *
 * This file contains TypeScript array type aliases for OpenAPI schema objects.
 * Each array type represents a collection of the corresponding schema type.
 * These types are used throughout the API for request/response arrays.
 *
 * @remarks
 * - All array types follow the pattern: `TypeNameArray = TypeName[]`
 * - Array types are automatically generated from OpenAPI schema references
 * - Each type includes documentation from the original OpenAPI schema
 * - These types ensure type safety when working with API arrays
 *
 * @example
 * ```typescript
 * // Using array types for API responses
 * const domains: DomainArray = await api.getDomains();
 * const contacts: ContactSchemaArray = await api.getContacts();
 * ```
 *
 * This file is auto-generated from the OpenAPI specification.
 * Do not edit manually.
 */
import { DomainDnssecData, DomainDnssecDataCreate, OrganizationAttribute, OrganizationAttributeUpdate, IpRestriction, TldResponseShort, AttributeCondition, DomainContactType, ContactAttributeLinkDetail, ContactAttributeDefinition, PostalAddressType, ContactConfigBase, DnsChange, DnsRecordCreate, DnsRecord, DnsRrsetCreate, DnsRecordPatchOp, DnsRrset, DnsRrsetPatchOp, DomainAvailabilityCheck, ContactHandle, Nameserver, BrowserStatsBucket, GeoStatsBucket, TimeSeriesBucket, DomainForwardPatchOp, PlatformStatsBucket, HttpRedirectList, ReferrerStatsBucket, StatusCodeStatsBucket, UserAgentStatsBucket, VisitsByKeyBucket, DomainForward, DeletePolicyType, SyncOperationType, DomainContact, DomainHost, DomainSearchSuggestionWithPrice, DomainStatus, DomainClientStatus, EmailForwardAliasCreate, EmailForwardLogEvent, EmailForwardAliasMetrics, EmailForwardAlias, EmailForward, PriceInfo, ValidationError, LaunchPhaseBase, LocalPresenceRequirementType, OrganizationAttribute2, User, OrganizationAttributeCreate, UserCreate, BillingTransaction, ContactAttributeSet, ContactSchema, DnsZone, DomainForwardZone, Domain, EmailForwardLog, EmailForwardZone, EventResponse, Invoice, ObjectLog, Organization, Parking, RequestHistory, UserPublic, Period, Permission, PremiumAffectsType, Relation, TldBase, PostTransferRequirements, UserAttributeBase, DomainAvailability } from './schemas.d';

/**
 * DomainDnssecDataResponse
 *
 * @remarks
 * Array type for DomainDnssecDataResponse objects. Used when the API returns a collection of DomainDnssecDataResponse instances.
 *
 * @example
 * ```typescript
 * const items: DomainDnssecDataArray = await api.getDomainDnssecDatas();
 * ```
 *
 * @see {@link DomainDnssecData} - The individual DomainDnssecDataResponse type definition
 */
export type DomainDnssecDataArray = DomainDnssecData[];
/**
 * DomainDnssecDataCreate
 *
 * @remarks
 * Array type for DomainDnssecDataCreate objects. Used when the API returns a collection of DomainDnssecDataCreate instances.
 *
 * @example
 * ```typescript
 * const items: DomainDnssecDataCreateArray = await api.getDomainDnssecDataCreates();
 * ```
 *
 * @see {@link DomainDnssecDataCreate} - The individual DomainDnssecDataCreate type definition
 */
export type DomainDnssecDataCreateArray = DomainDnssecDataCreate[];
/**
 * OrganizationAttributeResponse
 *
 * @remarks
 * Array type for OrganizationAttributeResponse objects. Used when the API returns a collection of OrganizationAttributeResponse instances.
 *
 * @example
 * ```typescript
 * const items: OrganizationAttributeArray = await api.getOrganizationAttributes();
 * ```
 *
 * @see {@link OrganizationAttribute} - The individual OrganizationAttributeResponse type definition
 */
export type OrganizationAttributeArray = OrganizationAttribute[];
/**
 * OrganizationAttributeUpdate
 *
 * @remarks
 * Array type for OrganizationAttributeUpdate objects. Used when the API returns a collection of OrganizationAttributeUpdate instances.
 *
 * @example
 * ```typescript
 * const items: OrganizationAttributeUpdateArray = await api.getOrganizationAttributeUpdates();
 * ```
 *
 * @see {@link OrganizationAttributeUpdate} - The individual OrganizationAttributeUpdate type definition
 */
export type OrganizationAttributeUpdateArray = OrganizationAttributeUpdate[];
/**
 * IpRestrictionResponse
 *
 * @remarks
 * Array type for IpRestrictionResponse objects. Used when the API returns a collection of IpRestrictionResponse instances.
 *
 * @example
 * ```typescript
 * const items: IpRestrictionArray = await api.getIpRestrictions();
 * ```
 *
 * @see {@link IpRestriction} - The individual IpRestrictionResponse type definition
 */
export type IpRestrictionArray = IpRestriction[];
/**
 * TldResponseShort
 *
 * @remarks
 * Array type for TldResponseShort objects. Used when the API returns a collection of TldResponseShort instances.
 *
 * @example
 * ```typescript
 * const items: TldResponseShortArray = await api.getTldResponseShorts();
 * ```
 *
 * @see {@link TldResponseShort} - The individual TldResponseShort type definition
 */
export type TldResponseShortArray = TldResponseShort[];
/**
 * AttributeCondition
 *
 * @remarks
 * Array type for AttributeCondition objects. Used when the API returns a collection of AttributeCondition instances.
 *
 * @example
 * ```typescript
 * const items: AttributeConditionArray = await api.getAttributeConditions();
 * ```
 *
 * @see {@link AttributeCondition} - The individual AttributeCondition type definition
 */
export type AttributeConditionArray = AttributeCondition[];
/**
 * DomainContactType
 *
 * @remarks
 * Array type for DomainContactType objects. Used when the API returns a collection of DomainContactType instances.
 *
 * @example
 * ```typescript
 * const items: DomainContactTypeArray = await api.getDomainContactTypes();
 * ```
 *
 * @see {@link DomainContactType} - The individual DomainContactType type definition
 */
export type DomainContactTypeArray = DomainContactType[];
/**
 * ContactAttributeLinkDetail
 *
 * @remarks
 * Array type for ContactAttributeLinkDetail objects. Used when the API returns a collection of ContactAttributeLinkDetail instances.
 *
 * @example
 * ```typescript
 * const items: ContactAttributeLinkDetailArray = await api.getContactAttributeLinkDetails();
 * ```
 *
 * @see {@link ContactAttributeLinkDetail} - The individual ContactAttributeLinkDetail type definition
 */
export type ContactAttributeLinkDetailArray = ContactAttributeLinkDetail[];
/**
 * ContactAttributeDefinition. Definition of a possible attribute for a TLD.
 *
 * @remarks
 * Array type for ContactAttributeDefinition objects. Used when the API returns a collection of ContactAttributeDefinition instances.
 *
 * @example
 * ```typescript
 * const items: ContactAttributeDefinitionArray = await api.getContactAttributeDefinitions();
 * ```
 *
 * @see {@link ContactAttributeDefinition} - The individual ContactAttributeDefinition type definition
 */
export type ContactAttributeDefinitionArray = ContactAttributeDefinition[];
/**
 * PostalAddressType
 *
 * @remarks
 * Array type for PostalAddressType objects. Used when the API returns a collection of PostalAddressType instances.
 *
 * @example
 * ```typescript
 * const items: PostalAddressTypeArray = await api.getPostalAddressTypes();
 * ```
 *
 * @see {@link PostalAddressType} - The individual PostalAddressType type definition
 */
export type PostalAddressTypeArray = PostalAddressType[];
/**
 * ContactConfigBase
 *
 * @remarks
 * Array type for ContactConfigBase objects. Used when the API returns a collection of ContactConfigBase instances.
 *
 * @example
 * ```typescript
 * const items: ContactConfigBaseArray = await api.getContactConfigBases();
 * ```
 *
 * @see {@link ContactConfigBase} - The individual ContactConfigBase type definition
 */
export type ContactConfigBaseArray = ContactConfigBase[];
/**
 * DnsChangeResponse
 *
 * @remarks
 * Array type for DnsChangeResponse objects. Used when the API returns a collection of DnsChangeResponse instances.
 *
 * @example
 * ```typescript
 * const items: DnsChangeArray = await api.getDnsChanges();
 * ```
 *
 * @see {@link DnsChange} - The individual DnsChangeResponse type definition
 */
export type DnsChangeArray = DnsChange[];
/**
 * DnsRecordCreate
 *
 * @remarks
 * Array type for DnsRecordCreate objects. Used when the API returns a collection of DnsRecordCreate instances.
 *
 * @example
 * ```typescript
 * const items: DnsRecordCreateArray = await api.getDnsRecordCreates();
 * ```
 *
 * @see {@link DnsRecordCreate} - The individual DnsRecordCreate type definition
 */
export type DnsRecordCreateArray = DnsRecordCreate[];
/**
 * DnsRecordResponse
 *
 * @remarks
 * Array type for DnsRecordResponse objects. Used when the API returns a collection of DnsRecordResponse instances.
 *
 * @example
 * ```typescript
 * const items: DnsRecordArray = await api.getDnsRecords();
 * ```
 *
 * @see {@link DnsRecord} - The individual DnsRecordResponse type definition
 */
export type DnsRecordArray = DnsRecord[];
/**
 * DnsRrsetCreate
 *
 * @remarks
 * Array type for DnsRrsetCreate objects. Used when the API returns a collection of DnsRrsetCreate instances.
 *
 * @example
 * ```typescript
 * const items: DnsRrsetCreateArray = await api.getDnsRrsetCreates();
 * ```
 *
 * @see {@link DnsRrsetCreate} - The individual DnsRrsetCreate type definition
 */
export type DnsRrsetCreateArray = DnsRrsetCreate[];
/**
 * DnsRecordPatchOp
 *
 * @remarks
 * Array type for DnsRecordPatchOp objects. Used when the API returns a collection of DnsRecordPatchOp instances.
 *
 * @example
 * ```typescript
 * const items: DnsRecordPatchOpArray = await api.getDnsRecordPatchOps();
 * ```
 *
 * @see {@link DnsRecordPatchOp} - The individual DnsRecordPatchOp type definition
 */
export type DnsRecordPatchOpArray = DnsRecordPatchOp[];
/**
 * DnsRrsetResponse
 *
 * @remarks
 * Array type for DnsRrsetResponse objects. Used when the API returns a collection of DnsRrsetResponse instances.
 *
 * @example
 * ```typescript
 * const items: DnsRrsetArray = await api.getDnsRrsets();
 * ```
 *
 * @see {@link DnsRrset} - The individual DnsRrsetResponse type definition
 */
export type DnsRrsetArray = DnsRrset[];
/**
 * DnsRrsetPatchOp
 *
 * @remarks
 * Array type for DnsRrsetPatchOp objects. Used when the API returns a collection of DnsRrsetPatchOp instances.
 *
 * @example
 * ```typescript
 * const items: DnsRrsetPatchOpArray = await api.getDnsRrsetPatchOps();
 * ```
 *
 * @see {@link DnsRrsetPatchOp} - The individual DnsRrsetPatchOp type definition
 */
export type DnsRrsetPatchOpArray = DnsRrsetPatchOp[];
/**
 * DomainAvailabilityResponse
 *
 * @remarks
 * Array type for DomainAvailabilityResponse objects. Used when the API returns a collection of DomainAvailabilityResponse instances.
 *
 * @example
 * ```typescript
 * const items: DomainAvailabilityCheckArray = await api.getDomainAvailabilityChecks();
 * ```
 *
 * @see {@link DomainAvailabilityCheck} - The individual DomainAvailabilityResponse type definition
 */
export type DomainAvailabilityCheckArray = DomainAvailabilityCheck[];
/**
 * ContactHandle
 *
 * @remarks
 * Array type for ContactHandle objects. Used when the API returns a collection of ContactHandle instances.
 *
 * @example
 * ```typescript
 * const items: ContactHandleArray = await api.getContactHandles();
 * ```
 *
 * @see {@link ContactHandle} - The individual ContactHandle type definition
 */
export type ContactHandleArray = ContactHandle[];
/**
 * Nameserver
 *
 * @remarks
 * Array type for Nameserver objects. Used when the API returns a collection of Nameserver instances.
 *
 * @example
 * ```typescript
 * const items: NameserverArray = await api.getNameservers();
 * ```
 *
 * @see {@link Nameserver} - The individual Nameserver type definition
 */
export type NameserverArray = Nameserver[];
/**
 * BrowserStatsBucket
 *
 * @remarks
 * Array type for BrowserStatsBucket objects. Used when the API returns a collection of BrowserStatsBucket instances.
 *
 * @example
 * ```typescript
 * const items: BrowserStatsBucketArray = await api.getBrowserStatsBuckets();
 * ```
 *
 * @see {@link BrowserStatsBucket} - The individual BrowserStatsBucket type definition
 */
export type BrowserStatsBucketArray = BrowserStatsBucket[];
/**
 * GeoStatsBucket
 *
 * @remarks
 * Array type for GeoStatsBucket objects. Used when the API returns a collection of GeoStatsBucket instances.
 *
 * @example
 * ```typescript
 * const items: GeoStatsBucketArray = await api.getGeoStatsBuckets();
 * ```
 *
 * @see {@link GeoStatsBucket} - The individual GeoStatsBucket type definition
 */
export type GeoStatsBucketArray = GeoStatsBucket[];
/**
 * TimeSeriesBucket
 *
 * @remarks
 * Array type for TimeSeriesBucket objects. Used when the API returns a collection of TimeSeriesBucket instances.
 *
 * @example
 * ```typescript
 * const items: TimeSeriesBucketArray = await api.getTimeSeriesBuckets();
 * ```
 *
 * @see {@link TimeSeriesBucket} - The individual TimeSeriesBucket type definition
 */
export type TimeSeriesBucketArray = TimeSeriesBucket[];
/**
 * DomainForwardPatchOp
 *
 * @remarks
 * Array type for DomainForwardPatchOp objects. Used when the API returns a collection of DomainForwardPatchOp instances.
 *
 * @example
 * ```typescript
 * const items: DomainForwardPatchOpArray = await api.getDomainForwardPatchOps();
 * ```
 *
 * @see {@link DomainForwardPatchOp} - The individual DomainForwardPatchOp type definition
 */
export type DomainForwardPatchOpArray = DomainForwardPatchOp[];
/**
 * PlatformStatsBucket
 *
 * @remarks
 * Array type for PlatformStatsBucket objects. Used when the API returns a collection of PlatformStatsBucket instances.
 *
 * @example
 * ```typescript
 * const items: PlatformStatsBucketArray = await api.getPlatformStatsBuckets();
 * ```
 *
 * @see {@link PlatformStatsBucket} - The individual PlatformStatsBucket type definition
 */
export type PlatformStatsBucketArray = PlatformStatsBucket[];
/**
 * HttpRedirectListResponse
 *
 * @remarks
 * Array type for HttpRedirectListResponse objects. Used when the API returns a collection of HttpRedirectListResponse instances.
 *
 * @example
 * ```typescript
 * const items: HttpRedirectListArray = await api.getHttpRedirectLists();
 * ```
 *
 * @see {@link HttpRedirectList} - The individual HttpRedirectListResponse type definition
 */
export type HttpRedirectListArray = HttpRedirectList[];
/**
 * ReferrerStatsBucket
 *
 * @remarks
 * Array type for ReferrerStatsBucket objects. Used when the API returns a collection of ReferrerStatsBucket instances.
 *
 * @example
 * ```typescript
 * const items: ReferrerStatsBucketArray = await api.getReferrerStatsBuckets();
 * ```
 *
 * @see {@link ReferrerStatsBucket} - The individual ReferrerStatsBucket type definition
 */
export type ReferrerStatsBucketArray = ReferrerStatsBucket[];
/**
 * StatusCodeStatsBucket
 *
 * @remarks
 * Array type for StatusCodeStatsBucket objects. Used when the API returns a collection of StatusCodeStatsBucket instances.
 *
 * @example
 * ```typescript
 * const items: StatusCodeStatsBucketArray = await api.getStatusCodeStatsBuckets();
 * ```
 *
 * @see {@link StatusCodeStatsBucket} - The individual StatusCodeStatsBucket type definition
 */
export type StatusCodeStatsBucketArray = StatusCodeStatsBucket[];
/**
 * UserAgentStatsBucket
 *
 * @remarks
 * Array type for UserAgentStatsBucket objects. Used when the API returns a collection of UserAgentStatsBucket instances.
 *
 * @example
 * ```typescript
 * const items: UserAgentStatsBucketArray = await api.getUserAgentStatsBuckets();
 * ```
 *
 * @see {@link UserAgentStatsBucket} - The individual UserAgentStatsBucket type definition
 */
export type UserAgentStatsBucketArray = UserAgentStatsBucket[];
/**
 * VisitsByKeyBucket
 *
 * @remarks
 * Array type for VisitsByKeyBucket objects. Used when the API returns a collection of VisitsByKeyBucket instances.
 *
 * @example
 * ```typescript
 * const items: VisitsByKeyBucketArray = await api.getVisitsByKeyBuckets();
 * ```
 *
 * @see {@link VisitsByKeyBucket} - The individual VisitsByKeyBucket type definition
 */
export type VisitsByKeyBucketArray = VisitsByKeyBucket[];
/**
 * DomainForward
 *
 * @remarks
 * Array type for DomainForward objects. Used when the API returns a collection of DomainForward instances.
 *
 * @example
 * ```typescript
 * const items: DomainForwardArray = await api.getDomainForwards();
 * ```
 *
 * @see {@link DomainForward} - The individual DomainForward type definition
 */
export type DomainForwardArray = DomainForward[];
/**
 * DeletePolicyType
 *
 * @remarks
 * Array type for DeletePolicyType objects. Used when the API returns a collection of DeletePolicyType instances.
 *
 * @example
 * ```typescript
 * const items: DeletePolicyTypeArray = await api.getDeletePolicyTypes();
 * ```
 *
 * @see {@link DeletePolicyType} - The individual DeletePolicyType type definition
 */
export type DeletePolicyTypeArray = DeletePolicyType[];
/**
 * SyncOperationType
 *
 * @remarks
 * Array type for SyncOperationType objects. Used when the API returns a collection of SyncOperationType instances.
 *
 * @example
 * ```typescript
 * const items: SyncOperationTypeArray = await api.getSyncOperationTypes();
 * ```
 *
 * @see {@link SyncOperationType} - The individual SyncOperationType type definition
 */
export type SyncOperationTypeArray = SyncOperationType[];
/**
 * DomainContactResponse
 *
 * @remarks
 * Array type for DomainContactResponse objects. Used when the API returns a collection of DomainContactResponse instances.
 *
 * @example
 * ```typescript
 * const items: DomainContactArray = await api.getDomainContacts();
 * ```
 *
 * @see {@link DomainContact} - The individual DomainContactResponse type definition
 */
export type DomainContactArray = DomainContact[];
/**
 * DomainHostResponse
 *
 * @remarks
 * Array type for DomainHostResponse objects. Used when the API returns a collection of DomainHostResponse instances.
 *
 * @example
 * ```typescript
 * const items: DomainHostArray = await api.getDomainHosts();
 * ```
 *
 * @see {@link DomainHost} - The individual DomainHostResponse type definition
 */
export type DomainHostArray = DomainHost[];
/**
 * DomainSearchSuggestionWithPrice
 *
 * @remarks
 * Array type for DomainSearchSuggestionWithPrice objects. Used when the API returns a collection of DomainSearchSuggestionWithPrice instances.
 *
 * @example
 * ```typescript
 * const items: DomainSearchSuggestionWithPriceArray = await api.getDomainSearchSuggestionWithPrices();
 * ```
 *
 * @see {@link DomainSearchSuggestionWithPrice} - The individual DomainSearchSuggestionWithPrice type definition
 */
export type DomainSearchSuggestionWithPriceArray = DomainSearchSuggestionWithPrice[];
/**
 * DomainStatus
 *
 * @remarks
 * Array type for DomainStatus objects. Used when the API returns a collection of DomainStatus instances.
 *
 * @example
 * ```typescript
 * const items: DomainStatusArray = await api.getDomainStatuss();
 * ```
 *
 * @see {@link DomainStatus} - The individual DomainStatus type definition
 */
export type DomainStatusArray = DomainStatus[];
/**
 * DomainClientStatus
 *
 * @remarks
 * Array type for DomainClientStatus objects. Used when the API returns a collection of DomainClientStatus instances.
 *
 * @example
 * ```typescript
 * const items: DomainClientStatusArray = await api.getDomainClientStatuss();
 * ```
 *
 * @see {@link DomainClientStatus} - The individual DomainClientStatus type definition
 */
export type DomainClientStatusArray = DomainClientStatus[];
/**
 * EmailForwardAliasCreate
 *
 * @remarks
 * Array type for EmailForwardAliasCreate objects. Used when the API returns a collection of EmailForwardAliasCreate instances.
 *
 * @example
 * ```typescript
 * const items: EmailForwardAliasCreateArray = await api.getEmailForwardAliasCreates();
 * ```
 *
 * @see {@link EmailForwardAliasCreate} - The individual EmailForwardAliasCreate type definition
 */
export type EmailForwardAliasCreateArray = EmailForwardAliasCreate[];
/**
 * EmailForwardLogEvent
 *
 * @remarks
 * Array type for EmailForwardLogEvent objects. Used when the API returns a collection of EmailForwardLogEvent instances.
 *
 * @example
 * ```typescript
 * const items: EmailForwardLogEventArray = await api.getEmailForwardLogEvents();
 * ```
 *
 * @see {@link EmailForwardLogEvent} - The individual EmailForwardLogEvent type definition
 */
export type EmailForwardLogEventArray = EmailForwardLogEvent[];
/**
 * EmailForwardAliasMetrics
 *
 * @remarks
 * Array type for EmailForwardAliasMetrics objects. Used when the API returns a collection of EmailForwardAliasMetrics instances.
 *
 * @example
 * ```typescript
 * const items: EmailForwardAliasMetricsArray = await api.getEmailForwardAliasMetricss();
 * ```
 *
 * @see {@link EmailForwardAliasMetrics} - The individual EmailForwardAliasMetrics type definition
 */
export type EmailForwardAliasMetricsArray = EmailForwardAliasMetrics[];
/**
 * EmailForwardAlias
 *
 * @remarks
 * Array type for EmailForwardAlias objects. Used when the API returns a collection of EmailForwardAlias instances.
 *
 * @example
 * ```typescript
 * const items: EmailForwardAliasArray = await api.getEmailForwardAliass();
 * ```
 *
 * @see {@link EmailForwardAlias} - The individual EmailForwardAlias type definition
 */
export type EmailForwardAliasArray = EmailForwardAlias[];
/**
 * EmailForwardResponse
 *
 * @remarks
 * Array type for EmailForwardResponse objects. Used when the API returns a collection of EmailForwardResponse instances.
 *
 * @example
 * ```typescript
 * const items: EmailForwardArray = await api.getEmailForwards();
 * ```
 *
 * @see {@link EmailForward} - The individual EmailForwardResponse type definition
 */
export type EmailForwardArray = EmailForward[];
/**
 * PriceInfo
 *
 * @remarks
 * Array type for PriceInfo objects. Used when the API returns a collection of PriceInfo instances.
 *
 * @example
 * ```typescript
 * const items: PriceInfoArray = await api.getPriceInfos();
 * ```
 *
 * @see {@link PriceInfo} - The individual PriceInfo type definition
 */
export type PriceInfoArray = PriceInfo[];
/**
 * ValidationError
 *
 * @remarks
 * Array type for ValidationError objects. Used when the API returns a collection of ValidationError instances.
 *
 * @example
 * ```typescript
 * const items: ValidationErrorArray = await api.getValidationErrors();
 * ```
 *
 * @see {@link ValidationError} - The individual ValidationError type definition
 */
export type ValidationErrorArray = ValidationError[];
/**
 * LaunchPhaseBase
 *
 * @remarks
 * Array type for LaunchPhaseBase objects. Used when the API returns a collection of LaunchPhaseBase instances.
 *
 * @example
 * ```typescript
 * const items: LaunchPhaseBaseArray = await api.getLaunchPhaseBases();
 * ```
 *
 * @see {@link LaunchPhaseBase} - The individual LaunchPhaseBase type definition
 */
export type LaunchPhaseBaseArray = LaunchPhaseBase[];
/**
 * LocalPresenceRequirementType
 *
 * @remarks
 * Array type for LocalPresenceRequirementType objects. Used when the API returns a collection of LocalPresenceRequirementType instances.
 *
 * @example
 * ```typescript
 * const items: LocalPresenceRequirementTypeArray = await api.getLocalPresenceRequirementTypes();
 * ```
 *
 * @see {@link LocalPresenceRequirementType} - The individual LocalPresenceRequirementType type definition
 */
export type LocalPresenceRequirementTypeArray = LocalPresenceRequirementType[];
/**
 * OrganizationAttribute
 *
 * @remarks
 * Array type for OrganizationAttribute objects. Used when the API returns a collection of OrganizationAttribute instances.
 *
 * @example
 * ```typescript
 * const items: OrganizationAttribute2Array = await api.getOrganizationAttribute2s();
 * ```
 *
 * @see {@link OrganizationAttribute2} - The individual OrganizationAttribute type definition
 */
export type OrganizationAttribute2Array = OrganizationAttribute2[];
/**
 * User
 *
 * @remarks
 * Array type for User objects. Used when the API returns a collection of User instances.
 *
 * @example
 * ```typescript
 * const items: UserArray = await api.getUsers();
 * ```
 *
 * @see {@link User} - The individual User type definition
 */
export type UserArray = User[];
/**
 * OrganizationAttributeCreate
 *
 * @remarks
 * Array type for OrganizationAttributeCreate objects. Used when the API returns a collection of OrganizationAttributeCreate instances.
 *
 * @example
 * ```typescript
 * const items: OrganizationAttributeCreateArray = await api.getOrganizationAttributeCreates();
 * ```
 *
 * @see {@link OrganizationAttributeCreate} - The individual OrganizationAttributeCreate type definition
 */
export type OrganizationAttributeCreateArray = OrganizationAttributeCreate[];
/**
 * UserCreate
 *
 * @remarks
 * Array type for UserCreate objects. Used when the API returns a collection of UserCreate instances.
 *
 * @example
 * ```typescript
 * const items: UserCreateArray = await api.getUserCreates();
 * ```
 *
 * @see {@link UserCreate} - The individual UserCreate type definition
 */
export type UserCreateArray = UserCreate[];
/**
 * BillingTransactionResponse
 *
 * @remarks
 * Array type for BillingTransactionResponse objects. Used when the API returns a collection of BillingTransactionResponse instances.
 *
 * @example
 * ```typescript
 * const items: BillingTransactionArray = await api.getBillingTransactions();
 * ```
 *
 * @see {@link BillingTransaction} - The individual BillingTransactionResponse type definition
 */
export type BillingTransactionArray = BillingTransaction[];
/**
 * ContactAttributeSetResponse
 *
 * @remarks
 * Array type for ContactAttributeSetResponse objects. Used when the API returns a collection of ContactAttributeSetResponse instances.
 *
 * @example
 * ```typescript
 * const items: ContactAttributeSetArray = await api.getContactAttributeSets();
 * ```
 *
 * @see {@link ContactAttributeSet} - The individual ContactAttributeSetResponse type definition
 */
export type ContactAttributeSetArray = ContactAttributeSet[];
/**
 * ContactSchema
 *
 * @remarks
 * Array type for ContactSchema objects. Used when the API returns a collection of ContactSchema instances.
 *
 * @example
 * ```typescript
 * const items: ContactSchemaArray = await api.getContactSchemas();
 * ```
 *
 * @see {@link ContactSchema} - The individual ContactSchema type definition
 */
export type ContactSchemaArray = ContactSchema[];
/**
 * DnsZoneResponse
 *
 * @remarks
 * Array type for DnsZoneResponse objects. Used when the API returns a collection of DnsZoneResponse instances.
 *
 * @example
 * ```typescript
 * const items: DnsZoneArray = await api.getDnsZones();
 * ```
 *
 * @see {@link DnsZone} - The individual DnsZoneResponse type definition
 */
export type DnsZoneArray = DnsZone[];
/**
 * DomainForwardZone
 *
 * @remarks
 * Array type for DomainForwardZone objects. Used when the API returns a collection of DomainForwardZone instances.
 *
 * @example
 * ```typescript
 * const items: DomainForwardZoneArray = await api.getDomainForwardZones();
 * ```
 *
 * @see {@link DomainForwardZone} - The individual DomainForwardZone type definition
 */
export type DomainForwardZoneArray = DomainForwardZone[];
/**
 * DomainResponse
 *
 * @remarks
 * Array type for DomainResponse objects. Used when the API returns a collection of DomainResponse instances.
 *
 * @example
 * ```typescript
 * const items: DomainArray = await api.getDomains();
 * ```
 *
 * @see {@link Domain} - The individual DomainResponse type definition
 */
export type DomainArray = Domain[];
/**
 * EmailForwardLog
 *
 * @remarks
 * Array type for EmailForwardLog objects. Used when the API returns a collection of EmailForwardLog instances.
 *
 * @example
 * ```typescript
 * const items: EmailForwardLogArray = await api.getEmailForwardLogs();
 * ```
 *
 * @see {@link EmailForwardLog} - The individual EmailForwardLog type definition
 */
export type EmailForwardLogArray = EmailForwardLog[];
/**
 * EmailForwardZone
 *
 * @remarks
 * Array type for EmailForwardZone objects. Used when the API returns a collection of EmailForwardZone instances.
 *
 * @example
 * ```typescript
 * const items: EmailForwardZoneArray = await api.getEmailForwardZones();
 * ```
 *
 * @see {@link EmailForwardZone} - The individual EmailForwardZone type definition
 */
export type EmailForwardZoneArray = EmailForwardZone[];
/**
 * EventResponse
 *
 * @remarks
 * Array type for EventResponse objects. Used when the API returns a collection of EventResponse instances.
 *
 * @example
 * ```typescript
 * const items: EventResponseArray = await api.getEventResponses();
 * ```
 *
 * @see {@link EventResponse} - The individual EventResponse type definition
 */
export type EventResponseArray = EventResponse[];
/**
 * InvoiceResponse
 *
 * @remarks
 * Array type for InvoiceResponse objects. Used when the API returns a collection of InvoiceResponse instances.
 *
 * @example
 * ```typescript
 * const items: InvoiceArray = await api.getInvoices();
 * ```
 *
 * @see {@link Invoice} - The individual InvoiceResponse type definition
 */
export type InvoiceArray = Invoice[];
/**
 * ObjectLog
 *
 * @remarks
 * Array type for ObjectLog objects. Used when the API returns a collection of ObjectLog instances.
 *
 * @example
 * ```typescript
 * const items: ObjectLogArray = await api.getObjectLogs();
 * ```
 *
 * @see {@link ObjectLog} - The individual ObjectLog type definition
 */
export type ObjectLogArray = ObjectLog[];
/**
 * Organization
 *
 * @remarks
 * Array type for Organization objects. Used when the API returns a collection of Organization instances.
 *
 * @example
 * ```typescript
 * const items: OrganizationArray = await api.getOrganizations();
 * ```
 *
 * @see {@link Organization} - The individual Organization type definition
 */
export type OrganizationArray = Organization[];
/**
 * ParkingResponse
 *
 * @remarks
 * Array type for ParkingResponse objects. Used when the API returns a collection of ParkingResponse instances.
 *
 * @example
 * ```typescript
 * const items: ParkingArray = await api.getParkings();
 * ```
 *
 * @see {@link Parking} - The individual ParkingResponse type definition
 */
export type ParkingArray = Parking[];
/**
 * RequestHistory
 *
 * @remarks
 * Array type for RequestHistory objects. Used when the API returns a collection of RequestHistory instances.
 *
 * @example
 * ```typescript
 * const items: RequestHistoryArray = await api.getRequestHistorys();
 * ```
 *
 * @see {@link RequestHistory} - The individual RequestHistory type definition
 */
export type RequestHistoryArray = RequestHistory[];
/**
 * UserPublic
 *
 * @remarks
 * Array type for UserPublic objects. Used when the API returns a collection of UserPublic instances.
 *
 * @example
 * ```typescript
 * const items: UserPublicArray = await api.getUserPublics();
 * ```
 *
 * @see {@link UserPublic} - The individual UserPublic type definition
 */
export type UserPublicArray = UserPublic[];
/**
 * Period
 *
 * @remarks
 * Array type for Period objects. Used when the API returns a collection of Period instances.
 *
 * @example
 * ```typescript
 * const items: PeriodArray = await api.getPeriods();
 * ```
 *
 * @see {@link Period} - The individual Period type definition
 */
export type PeriodArray = Period[];
/**
 * Permission
 *
 * @remarks
 * Array type for Permission objects. Used when the API returns a collection of Permission instances.
 *
 * @example
 * ```typescript
 * const items: PermissionArray = await api.getPermissions();
 * ```
 *
 * @see {@link Permission} - The individual Permission type definition
 */
export type PermissionArray = Permission[];
/**
 * PremiumAffectsType
 *
 * @remarks
 * Array type for PremiumAffectsType objects. Used when the API returns a collection of PremiumAffectsType instances.
 *
 * @example
 * ```typescript
 * const items: PremiumAffectsTypeArray = await api.getPremiumAffectsTypes();
 * ```
 *
 * @see {@link PremiumAffectsType} - The individual PremiumAffectsType type definition
 */
export type PremiumAffectsTypeArray = PremiumAffectsType[];
/**
 * Relation
 *
 * @remarks
 * Array type for Relation objects. Used when the API returns a collection of Relation instances.
 *
 * @example
 * ```typescript
 * const items: RelationArray = await api.getRelations();
 * ```
 *
 * @see {@link Relation} - The individual Relation type definition
 */
export type RelationArray = Relation[];
/**
 * TldBase
 *
 * @remarks
 * Array type for TldBase objects. Used when the API returns a collection of TldBase instances.
 *
 * @example
 * ```typescript
 * const items: TldBaseArray = await api.getTldBases();
 * ```
 *
 * @see {@link TldBase} - The individual TldBase type definition
 */
export type TldBaseArray = TldBase[];
/**
 * PostTransferRequirements
 *
 * @remarks
 * Array type for PostTransferRequirements objects. Used when the API returns a collection of PostTransferRequirements instances.
 *
 * @example
 * ```typescript
 * const items: PostTransferRequirementsArray = await api.getPostTransferRequirementss();
 * ```
 *
 * @see {@link PostTransferRequirements} - The individual PostTransferRequirements type definition
 */
export type PostTransferRequirementsArray = PostTransferRequirements[];
/**
 * UserAttributeBase
 *
 * @remarks
 * Array type for UserAttributeBase objects. Used when the API returns a collection of UserAttributeBase instances.
 *
 * @example
 * ```typescript
 * const items: UserAttributeBaseArray = await api.getUserAttributeBases();
 * ```
 *
 * @see {@link UserAttributeBase} - The individual UserAttributeBase type definition
 */
export type UserAttributeBaseArray = UserAttributeBase[];
/**
 * DomainAvailability
 *
 * @remarks
 * Array type for DomainAvailability objects. Used when the API returns a collection of DomainAvailability instances.
 *
 * @example
 * ```typescript
 * const items: DomainAvailabilityArray = await api.getDomainAvailabilitys();
 * ```
 *
 * @see {@link DomainAvailability} - The individual DomainAvailability type definition
 */
export type DomainAvailabilityArray = DomainAvailability[];