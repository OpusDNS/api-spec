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
import { DomainDnssecData, DomainDnssecDataCreate, OrganizationAttribute, OrganizationAttributeUpdate, IpRestriction, TldResponseShort, BulkOperationResult, PostalAddressType, ContactConfigBase, DnsChange, DnsRecordCreate, DnsRecord, DnsRrsetCreate, DnsRecordPatchOp, DnsRrset, DnsRrsetPatchOp, DomainAvailabilityCheck, Nameserver, DeletePolicyType, SyncOperationType, DomainContact, DomainStatus, DomainSearchSuggestion, DomainClientStatus, EmailForwardBulkUpdateItem, ValidationError, LaunchPhaseBase, LocalPresenceRequirementType, ContactRoleType, OrganizationAttribute2, User, OrganizationAttributeCreate, UserCreate, ContactSchema, DnsZone, Domain, EmailForward, EventResponse, OrganizationCredential, Organization, UserNotificationSummary, Period, Permission, PremiumAffectsType, Relation, TldBase, PostTransferRequirements, UserAttributeBase, UserAttributeUpdate, DomainAvailability } from './schemas.d';

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
 * BulkOperationResult
 *
 * @remarks
 * Array type for BulkOperationResult objects. Used when the API returns a collection of BulkOperationResult instances.
 *
 * @example
 * ```typescript
 * const items: BulkOperationResultArray = await api.getBulkOperationResults();
 * ```
 *
 * @see {@link BulkOperationResult} - The individual BulkOperationResult type definition
 */
export type BulkOperationResultArray = BulkOperationResult[];
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
 * DomainSearchSuggestion
 *
 * @remarks
 * Array type for DomainSearchSuggestion objects. Used when the API returns a collection of DomainSearchSuggestion instances.
 *
 * @example
 * ```typescript
 * const items: DomainSearchSuggestionArray = await api.getDomainSearchSuggestions();
 * ```
 *
 * @see {@link DomainSearchSuggestion} - The individual DomainSearchSuggestion type definition
 */
export type DomainSearchSuggestionArray = DomainSearchSuggestion[];
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
 * EmailForwardBulkUpdateItem
 *
 * @remarks
 * Array type for EmailForwardBulkUpdateItem objects. Used when the API returns a collection of EmailForwardBulkUpdateItem instances.
 *
 * @example
 * ```typescript
 * const items: EmailForwardBulkUpdateItemArray = await api.getEmailForwardBulkUpdateItems();
 * ```
 *
 * @see {@link EmailForwardBulkUpdateItem} - The individual EmailForwardBulkUpdateItem type definition
 */
export type EmailForwardBulkUpdateItemArray = EmailForwardBulkUpdateItem[];
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
 * ContactRoleType
 *
 * @remarks
 * Array type for ContactRoleType objects. Used when the API returns a collection of ContactRoleType instances.
 *
 * @example
 * ```typescript
 * const items: ContactRoleTypeArray = await api.getContactRoleTypes();
 * ```
 *
 * @see {@link ContactRoleType} - The individual ContactRoleType type definition
 */
export type ContactRoleTypeArray = ContactRoleType[];
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
 * EmailForward
 *
 * @remarks
 * Array type for EmailForward objects. Used when the API returns a collection of EmailForward instances.
 *
 * @example
 * ```typescript
 * const items: EmailForwardArray = await api.getEmailForwards();
 * ```
 *
 * @see {@link EmailForward} - The individual EmailForward type definition
 */
export type EmailForwardArray = EmailForward[];
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
 * OrganizationCredential
 *
 * @remarks
 * Array type for OrganizationCredential objects. Used when the API returns a collection of OrganizationCredential instances.
 *
 * @example
 * ```typescript
 * const items: OrganizationCredentialArray = await api.getOrganizationCredentials();
 * ```
 *
 * @see {@link OrganizationCredential} - The individual OrganizationCredential type definition
 */
export type OrganizationCredentialArray = OrganizationCredential[];
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
 * UserNotificationSummary
 *
 * @remarks
 * Array type for UserNotificationSummary objects. Used when the API returns a collection of UserNotificationSummary instances.
 *
 * @example
 * ```typescript
 * const items: UserNotificationSummaryArray = await api.getUserNotificationSummarys();
 * ```
 *
 * @see {@link UserNotificationSummary} - The individual UserNotificationSummary type definition
 */
export type UserNotificationSummaryArray = UserNotificationSummary[];
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
 * UserAttributeUpdate
 *
 * @remarks
 * Array type for UserAttributeUpdate objects. Used when the API returns a collection of UserAttributeUpdate instances.
 *
 * @example
 * ```typescript
 * const items: UserAttributeUpdateArray = await api.getUserAttributeUpdates();
 * ```
 *
 * @see {@link UserAttributeUpdate} - The individual UserAttributeUpdate type definition
 */
export type UserAttributeUpdateArray = UserAttributeUpdate[];
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