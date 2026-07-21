import type {
  AllowedNumberOfNameserverBase,
  AttributeCondition,
  BillingMetadata,
  BillingTransaction,
  BrowserStatsBucket,
  BulkObjectTagChanges,
  ClaimsNotice,
  ClaimsNoticesRequest,
  ClaimsNotices,
  ClearVanityNameserverSetDefaultRes,
  CommandError,
  ContactAttestReq,
  ContactAttestRes,
  ContactAttestVerificationReq,
  ContactAttributeDefinition,
  ContactAttributeLinkDetail,
  ContactAttributeLink,
  ContactAttributeSetCreate,
  ContactAttributeSet,
  ContactAttributeSetUpdate,
  ContactConfigBase,
  ContactCreate,
  ContactCreateBulkCommand,
  ContactCreateBulkInstance,
  ContactCreateBulkPayload,
  ContactCreateBulkTemplate,
  ContactCreateCommand,
  ContactCreatePayloadData,
  ContactCreateWorkerPayload,
  ContactCreateWorkerResult,
  ContactHandle,
  Contact,
  ContactVerificationApi,
  ContactVerificationEmail,
  ContactVerification,
  ContactVerificationStatus,
  ContactsBase,
  ContactsContext,
  ContactsContextCreate,
  ContextList,
  ContextMeta,
  ContextPayload_DomainForward,
  ContextPayload_DomainSearchSuggestionWithPrice,
  ContextPayload_EmailForward,
  ContextPayload_RegistrarContact,
  ContextPayload_RegistrarDomain,
  ContextPayload_RegistrarZone,
  Conversation,
  ConversationCreateRequest,
  ConversationList,
  ConversationPatchRequest,
  CreateJobBatch,
  CreateReportReq,
  CustomRoleCreate,
  CustomRoleUpdate,
  DnsChange,
  DnsChanges,
  DnsConfigurationBase,
  DnsRecordCreate,
  DnsRecordDTO,
  DnsRecordPatchOp,
  DnsRecord,
  DnsRrsetCreate,
  DnsRrsetDTO,
  DnsRrsetPatch,
  DnsRrsetPatchOp,
  DnsRrset,
  DnsRrsetWithOneRecordPatch,
  DnsZoneCreate,
  DnsZoneCreateBulkCommand,
  DnsZoneCreateBulkInstance,
  DnsZoneCreateBulkPayload,
  DnsZoneCreateBulkTemplate,
  DnsZoneCreateCommand,
  DnsZoneCreatePayloadData,
  DnsZoneCreateWorkerPayload,
  DnsZoneCreateWorkerResult,
  DnsZoneDTO,
  DnsZonePatchRecordsBulkCommand,
  DnsZonePatchRecordsBulkInstance,
  DnsZonePatchRecordsBulkPayload,
  DnsZonePatchRecordsWorkerPayload,
  DnsZonePatchRrsetsBulkCommand,
  DnsZonePatchRrsetsBulkInstance,
  DnsZonePatchRrsetsBulkPayload,
  DnsZonePatchRrsetsWorkerPayload,
  DnsZoneRecordsPatchOps,
  DnsZone,
  DnsZoneRestampVanityNsBulkCommand,
  DnsZoneRestampVanityNsBulkInstance,
  DnsZoneRestampVanityNsBulkPayload,
  DnsZoneRestampVanityNsBulkTemplate,
  DnsZoneRestampVanityNsWorkerPayload,
  DnsZoneRrsetsCreate,
  DnsZoneRrsetsPatchOps,
  DnsZoneSummary,
  DnsZoneUpdateBulkCommand,
  DnsZoneUpdateBulkInstance,
  DnsZoneUpdateBulkPayload,
  DnsZoneUpdateBulkTemplate,
  DnsZoneUpdateCommand,
  DnsZoneUpdatePayloadData,
  DnsZoneUpdateWorkerPayload,
  DnsZoneVanitySetUpdateRes,
  DomainAvailability,
  DomainAvailabilityMeta,
  DomainAvailabilityRequest,
  DomainCheck,
  DomainContact,
  DomainCreate,
  DomainCreateBulkCommand,
  DomainCreateBulkInstance,
  DomainCreateBulkPayload,
  DomainCreateBulkTemplate,
  DomainCreateCommand,
  DomainCreatePayloadData,
  DomainCreateWorkerPayload,
  DomainCreateWorkerResult,
  DomainDnssecDataCreate,
  DomainDnssecData,
  DomainForward,
  DomainForwardBrowserStats,
  DomainForwardCreateBulkCommand,
  DomainForwardCreateBulkInstance,
  DomainForwardCreateBulkPayload,
  DomainForwardCreateBulkTemplate,
  DomainForwardCreateRequest,
  DomainForwardDeleteBulkCommand,
  DomainForwardDeleteBulkInstance,
  DomainForwardDeleteBulkPayload,
  DomainForwardDisableBulkCommand,
  DomainForwardDisableBulkInstance,
  DomainForwardDisableBulkPayload,
  DomainForwardEnableBulkCommand,
  DomainForwardEnableBulkInstance,
  DomainForwardEnableBulkPayload,
  DomainForwardGeoStats,
  DomainForwardMetrics,
  DomainForwardMetricsTimeSeries,
  DomainForwardPatchOp,
  DomainForwardPatchOps,
  DomainForwardPlatformStats,
  DomainForwardProtocolSetRequest,
  DomainForwardProtocolSet,
  DomainForwardReferrerStats,
  DomainForwardSetCreateRequest,
  DomainForwardSetRequest,
  DomainForwardSet,
  DomainForwardStatusCodeStats,
  DomainForwardUpdateBulkCommand,
  DomainForwardUpdateBulkInstance,
  DomainForwardUpdateBulkPayload,
  DomainForwardUpdateBulkTemplate,
  DomainForwardUserAgentStats,
  DomainForwardVisitsByKey,
  DomainForwardZone,
  DomainForwardsContext,
  DomainForwardsContextCreate,
  DomainHost,
  DomainLifecycleBase,
  DomainNameParts,
  DomainPeriod,
  DomainRecommendationsContext,
  DomainRecommendationsContextCreate,
  DomainRenewRequest,
  DomainRenew,
  DomainRenewalDetails,
  Domain,
  DomainRestoreRequest,
  DomainRestore,
  DomainSearchMeta,
  DomainSearch,
  DomainSearchSuggestionPriceData,
  DomainSearchSuggestionWithPrice,
  DomainStatus2,
  DomainStatusesBase,
  DomainSummaryData,
  DomainSummary,
  DomainTransferBulkCommand,
  DomainTransferBulkInstance,
  DomainTransferBulkPayload,
  DomainTransferBulkTemplate,
  DomainTransferCommand,
  DomainTransferIn,
  DomainTransferPayloadData,
  DomainTransferWorkerPayload,
  DomainTransitRequest,
  DomainTransit,
  DomainUpdate,
  DomainUpdateBulkCommand,
  DomainUpdateBulkInstance,
  DomainUpdateBulkPayload,
  DomainUpdateBulkTemplate,
  DomainUpdateCommand,
  DomainUpdatePayloadData,
  DomainUpdateWorkerPayload,
  DomainVerificationDetails,
  DomainWithdrawRequest,
  DomainWithdraw,
  DomainsContext,
  DomainsContextCreate,
  DomainsExpiringSoon,
  DuplicateCommand,
  EmailForwardAlias,
  EmailForwardAliasCreate,
  EmailForwardAliasMetrics,
  EmailForwardAliasUpdate,
  EmailForwardCreate,
  EmailForwardCreateBulkCommand,
  EmailForwardCreateBulkInstance,
  EmailForwardCreateBulkPayload,
  EmailForwardCreateBulkTemplate,
  EmailForwardDeleteBulkCommand,
  EmailForwardDeleteBulkInstance,
  EmailForwardDeleteBulkPayload,
  EmailForwardDisableBulkCommand,
  EmailForwardDisableBulkInstance,
  EmailForwardDisableBulkPayload,
  EmailForwardEnableBulkCommand,
  EmailForwardEnableBulkInstance,
  EmailForwardEnableBulkPayload,
  EmailForwardLog,
  EmailForwardLogEvent,
  EmailForwardMetrics,
  EmailForwardMetricsFilters,
  EmailForwardMetricsRates,
  EmailForward,
  EmailForwardUpdateBulkCommand,
  EmailForwardUpdateBulkInstance,
  EmailForwardUpdateBulkPayload,
  EmailForwardUpdateBulkTemplate,
  EmailForwardZone,
  EmailForwardsContext,
  EmailForwardsContextCreate,
  EventData,
  EventError,
  EventResponse,
  GeneralAvailabilityBase,
  GeoStatsBucket,
  GetPrices,
  HTTPValidationError,
  HostCreate,
  HostIpSchema,
  Host,
  HostSchema,
  HostUpdate,
  HttpRedirectList,
  HttpRedirectRemove,
  HttpRedirectRequest,
  HttpRedirectUpsert,
  IdnBase,
  Invoice,
  IpRestrictionCreate,
  IpRestriction,
  IpRestrictionUpdate,
  JobBatchMetadata,
  JobBatchRequest,
  JobBatchRetry,
  JobBatchStatus,
  JobCountsByStatus,
  Job,
  LaunchPhaseBase,
  LaunchPhasesBase,
  LegalRequirementBase,
  ListVanityNameserverSetsRes,
  ListZonesReferencingSetRes,
  LocalPresenceBase,
  MemoryFact,
  MemoryFactCreateRequest,
  MemoryFactList,
  MemoryFactPatchRequest,
  Message,
  MessageCreateRequest,
  MessageList,
  Nameserver,
  NorIdDeclarationConfirmRequest,
  NorIdDeclaration,
  NorIdResellerDeclarationRequest,
  ObjectLog,
  ObjectTagChanges,
  ObjectTagChanges2,
  Organization,
  OrganizationAttribute,
  OrganizationAttributeCreate,
  OrganizationAttribute2,
  OrganizationAttributeUpdate,
  OrganizationCreate,
  OrganizationCredential,
  OrganizationToken,
  OrganizationUpdate,
  OrganizationWithBillingData,
  PageResponse_EmailForwardLog,
  PageResponse_JobBatchMetadata,
  PageResponse_Job,
  PageResponse_ObjectLog,
  PageResponse_Parking,
  PageResponse_RequestHistory,
  PaginationMetadata,
  PaginationMetadataDTO,
  ParkingActionPayloadData,
  ParkingAgreementAcceptance,
  ParkingCreateBulkCommand,
  ParkingCreateBulkInstance,
  ParkingCreateBulkPayload,
  ParkingCreateBulkTemplate,
  ParkingCreatePayloadData,
  ParkingCreateWorkerPayload,
  ParkingDeleteBulkCommand,
  ParkingDeleteBulkInstance,
  ParkingDeleteBulkPayload,
  ParkingDeleteWorkerPayload,
  ParkingDisableBulkCommand,
  ParkingDisableBulkInstance,
  ParkingDisableBulkPayload,
  ParkingDisableWorkerPayload,
  ParkingEnableBulkCommand,
  ParkingEnableBulkInstance,
  ParkingEnableBulkPayload,
  ParkingEnableWorkerPayload,
  ParkingMetrics,
  Parking,
  ParkingSignupRequest,
  ParkingSignup,
  ParkingSignupStatus,
  ParkingStatistics,
  ParkingTotalMetrics,
  Period,
  PlatformStatsBucket,
  PremiumDomainsBase,
  PremiumPriceEntryRes,
  PremiumPricingAction,
  PremiumPricingRes,
  PremiumPricing,
  PriceInfo,
  PricingPeriod,
  Problem,
  ProductCreateRes,
  PublicAuthRequestForm,
  PublicPermissionSet,
  PublicReportListRes,
  PublicReportRes,
  PublicRoleAssignment,
  PublicRoleAssignmentRequest,
  PublicRoleDefinition,
  RdapBase,
  ReferrerStatsBucket,
  RegistrarContact,
  RegistrarDomain,
  RegistrarNameserver,
  RegistrarRRSet,
  RegistrarRecord,
  RegistrarZone,
  RegistryLockBase,
  RequestHistory,
  ReservedDomainsBase,
  RgpOperations,
  SetVanityNameserverSetDefaultRes,
  SldLength,
  StatusChanges,
  StatusCodeStatsBucket,
  StatusTag,
  TagCreate,
  TagEnriched,
  Tag,
  TagUpdate,
  TimeSeriesBucket,
  TldBase,
  TldResponseShort,
  TldSpecification,
  TmAddr,
  TmClaim,
  TmClassDesc,
  TmContact,
  TmCourt,
  TmHolder,
  TmJurDesc,
  TmNotExactMatch,
  TmUdrp,
  TrademarkClaimsBase,
  TransferLockPolicyBase,
  TransferPoliciesBase,
  User,
  UserAgentStatsBucket,
  UserAttributeBase,
  UserAttribute,
  UserCreate,
  UserOrganizationMeta,
  UserProfile,
  UserPublic,
  UserPublicWithAttributes,
  UserPublicWithRole,
  UserToken,
  UserUpdate,
  ValidationError,
  VanityNameserverDTO,
  VanityNameserverSetCreate,
  VanityNameserverSetDTO,
  VanityNameserverSetSummaryDTO,
  VanityNsCheckPublicReq,
  VanityNsCheckRes,
  VanityNsCheckResultDTO,
  VanityNsCheckSummaryDTO,
  VerificationDeadline,
  VerificationRegistrantDetails,
  Verification,
  VisitsByKeyBucket,
  WhitelabelBrandingCreate,
  WhitelabelBranding,
  WhoisBase,
  ZoneVanitySetUpdate,
  ZonesContext,
  ZonesContextCreate,
  RequestAuthcode,
  RequestAuthcode2,
  RequestAuthcode3,
  DomainAvailabilityList,
  DomainAvailabilityCheck,
} from './schemas';

export const KEY_ALLOWED_NUMBER_OF_NAMESERVER_BASE_MAX = 'max' satisfies keyof AllowedNumberOfNameserverBase;
export const KEY_ALLOWED_NUMBER_OF_NAMESERVER_BASE_MIN = 'min' satisfies keyof AllowedNumberOfNameserverBase;

export const KEYS_ALLOWED_NUMBER_OF_NAMESERVER_BASE = [
  KEY_ALLOWED_NUMBER_OF_NAMESERVER_BASE_MAX,
  KEY_ALLOWED_NUMBER_OF_NAMESERVER_BASE_MIN,
] as const satisfies (keyof AllowedNumberOfNameserverBase)[];

export const KEY_ATTRIBUTE_CONDITION_FIELD = 'field' satisfies keyof AttributeCondition;
export const KEY_ATTRIBUTE_CONDITION_OPERATOR = 'operator' satisfies keyof AttributeCondition;
export const KEY_ATTRIBUTE_CONDITION_VALUE = 'value' satisfies keyof AttributeCondition;

export const KEYS_ATTRIBUTE_CONDITION = [
  KEY_ATTRIBUTE_CONDITION_FIELD,
  KEY_ATTRIBUTE_CONDITION_OPERATOR,
  KEY_ATTRIBUTE_CONDITION_VALUE,
] as const satisfies (keyof AttributeCondition)[];

export const KEY_BILLING_METADATA_BILLING_MODEL = 'billing_model' satisfies keyof BillingMetadata;
export const KEY_BILLING_METADATA_CREDIT_LIMIT = 'credit_limit' satisfies keyof BillingMetadata;
export const KEY_BILLING_METADATA_CUSTOMER_NUMBER = 'customer_number' satisfies keyof BillingMetadata;

export const KEYS_BILLING_METADATA = [
  KEY_BILLING_METADATA_BILLING_MODEL,
  KEY_BILLING_METADATA_CREDIT_LIMIT,
  KEY_BILLING_METADATA_CUSTOMER_NUMBER,
] as const satisfies (keyof BillingMetadata)[];

export const KEY_BILLING_TRANSACTION_ACTION = 'action' satisfies keyof BillingTransaction;
export const KEY_BILLING_TRANSACTION_AMOUNT = 'amount' satisfies keyof BillingTransaction;
export const KEY_BILLING_TRANSACTION_BILLING_TRANSACTION_ID = 'billing_transaction_id' satisfies keyof BillingTransaction;
export const KEY_BILLING_TRANSACTION_COMPLETED_ON = 'completed_on' satisfies keyof BillingTransaction;
export const KEY_BILLING_TRANSACTION_CREATED_ON = 'created_on' satisfies keyof BillingTransaction;
export const KEY_BILLING_TRANSACTION_CURRENCY = 'currency' satisfies keyof BillingTransaction;
export const KEY_BILLING_TRANSACTION_PRICE = 'price' satisfies keyof BillingTransaction;
export const KEY_BILLING_TRANSACTION_PRODUCT_REFERENCE = 'product_reference' satisfies keyof BillingTransaction;
export const KEY_BILLING_TRANSACTION_PRODUCT_TYPE = 'product_type' satisfies keyof BillingTransaction;
export const KEY_BILLING_TRANSACTION_STATUS = 'status' satisfies keyof BillingTransaction;
export const KEY_BILLING_TRANSACTION_TAX_AMOUNT = 'tax_amount' satisfies keyof BillingTransaction;
export const KEY_BILLING_TRANSACTION_TAX_RATE = 'tax_rate' satisfies keyof BillingTransaction;
export const KEY_BILLING_TRANSACTION_UNIT = 'unit' satisfies keyof BillingTransaction;
export const KEY_BILLING_TRANSACTION_UPDATED_ON = 'updated_on' satisfies keyof BillingTransaction;
export const KEY_BILLING_TRANSACTION_VOLUME = 'volume' satisfies keyof BillingTransaction;

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
  KEY_BILLING_TRANSACTION_UNIT,
  KEY_BILLING_TRANSACTION_UPDATED_ON,
  KEY_BILLING_TRANSACTION_VOLUME,
] as const satisfies (keyof BillingTransaction)[];

export const KEY_BROWSER_STATS_BUCKET_KEY = 'key' satisfies keyof BrowserStatsBucket;
export const KEY_BROWSER_STATS_BUCKET_TOTAL = 'total' satisfies keyof BrowserStatsBucket;
export const KEY_BROWSER_STATS_BUCKET_UNIQUE = 'unique' satisfies keyof BrowserStatsBucket;

export const KEYS_BROWSER_STATS_BUCKET = [
  KEY_BROWSER_STATS_BUCKET_KEY,
  KEY_BROWSER_STATS_BUCKET_TOTAL,
  KEY_BROWSER_STATS_BUCKET_UNIQUE,
] as const satisfies (keyof BrowserStatsBucket)[];

export const KEY_BULK_OBJECT_TAG_CHANGES_ADD = 'add' satisfies keyof BulkObjectTagChanges;
export const KEY_BULK_OBJECT_TAG_CHANGES_OBJECTS = 'objects' satisfies keyof BulkObjectTagChanges;
export const KEY_BULK_OBJECT_TAG_CHANGES_REMOVE = 'remove' satisfies keyof BulkObjectTagChanges;
export const KEY_BULK_OBJECT_TAG_CHANGES_REPLACE = 'replace' satisfies keyof BulkObjectTagChanges;
export const KEY_BULK_OBJECT_TAG_CHANGES_TYPE = 'type' satisfies keyof BulkObjectTagChanges;

export const KEYS_BULK_OBJECT_TAG_CHANGES = [
  KEY_BULK_OBJECT_TAG_CHANGES_ADD,
  KEY_BULK_OBJECT_TAG_CHANGES_OBJECTS,
  KEY_BULK_OBJECT_TAG_CHANGES_REMOVE,
  KEY_BULK_OBJECT_TAG_CHANGES_REPLACE,
  KEY_BULK_OBJECT_TAG_CHANGES_TYPE,
] as const satisfies (keyof BulkObjectTagChanges)[];

export const KEY_CLAIMS_NOTICE_CLAIMS = 'claims' satisfies keyof ClaimsNotice;
export const KEY_CLAIMS_NOTICE_CLAIMS_KEY = 'claims_key' satisfies keyof ClaimsNotice;
export const KEY_CLAIMS_NOTICE_CLAIMS_NOTICE_ACCEPTANCE_HASH = 'claims_notice_acceptance_hash' satisfies keyof ClaimsNotice;
export const KEY_CLAIMS_NOTICE_LABEL = 'label' satisfies keyof ClaimsNotice;
export const KEY_CLAIMS_NOTICE_NOTICE_FOOTER = 'notice_footer' satisfies keyof ClaimsNotice;
export const KEY_CLAIMS_NOTICE_NOTICE_FOOTER_URL = 'notice_footer_url' satisfies keyof ClaimsNotice;
export const KEY_CLAIMS_NOTICE_NOTICE_INTRO = 'notice_intro' satisfies keyof ClaimsNotice;
export const KEY_CLAIMS_NOTICE_NOTICE_NOT_EXACT_MATCH_INTRO = 'notice_not_exact_match_intro' satisfies keyof ClaimsNotice;
export const KEY_CLAIMS_NOTICE_NOTICE_TITLE = 'notice_title' satisfies keyof ClaimsNotice;
export const KEY_CLAIMS_NOTICE_RENDERED_HTML = 'rendered_html' satisfies keyof ClaimsNotice;

export const KEYS_CLAIMS_NOTICE = [
  KEY_CLAIMS_NOTICE_CLAIMS,
  KEY_CLAIMS_NOTICE_CLAIMS_KEY,
  KEY_CLAIMS_NOTICE_CLAIMS_NOTICE_ACCEPTANCE_HASH,
  KEY_CLAIMS_NOTICE_LABEL,
  KEY_CLAIMS_NOTICE_NOTICE_FOOTER,
  KEY_CLAIMS_NOTICE_NOTICE_FOOTER_URL,
  KEY_CLAIMS_NOTICE_NOTICE_INTRO,
  KEY_CLAIMS_NOTICE_NOTICE_NOT_EXACT_MATCH_INTRO,
  KEY_CLAIMS_NOTICE_NOTICE_TITLE,
  KEY_CLAIMS_NOTICE_RENDERED_HTML,
] as const satisfies (keyof ClaimsNotice)[];

export const KEY_CLAIMS_NOTICES_REQUEST_CLAIMS_KEYS = 'claims_keys' satisfies keyof ClaimsNoticesRequest;

export const KEYS_CLAIMS_NOTICES_REQUEST = [
  KEY_CLAIMS_NOTICES_REQUEST_CLAIMS_KEYS,
] as const satisfies (keyof ClaimsNoticesRequest)[];

export const KEY_CLAIMS_NOTICES_CLAIMS_NOTICES = 'claims_notices' satisfies keyof ClaimsNotices;

export const KEYS_CLAIMS_NOTICES = [
  KEY_CLAIMS_NOTICES_CLAIMS_NOTICES,
] as const satisfies (keyof ClaimsNotices)[];

export const KEY_CLEAR_VANITY_NAMESERVER_SET_DEFAULT_RES_CLEARED = 'cleared' satisfies keyof ClearVanityNameserverSetDefaultRes;

export const KEYS_CLEAR_VANITY_NAMESERVER_SET_DEFAULT_RES = [
  KEY_CLEAR_VANITY_NAMESERVER_SET_DEFAULT_RES_CLEARED,
] as const satisfies (keyof ClearVanityNameserverSetDefaultRes)[];

export const KEY_COMMAND_ERROR_CODE = 'code' satisfies keyof CommandError;
export const KEY_COMMAND_ERROR_ERROR = 'error' satisfies keyof CommandError;
export const KEY_COMMAND_ERROR_INDEX = 'index' satisfies keyof CommandError;
export const KEY_COMMAND_ERROR_INSTANCE_INDEX = 'instance_index' satisfies keyof CommandError;
export const KEY_COMMAND_ERROR_RESOURCE_KEY = 'resource_key' satisfies keyof CommandError;
export const KEY_COMMAND_ERROR_TYPE = 'type' satisfies keyof CommandError;

export const KEYS_COMMAND_ERROR = [
  KEY_COMMAND_ERROR_CODE,
  KEY_COMMAND_ERROR_ERROR,
  KEY_COMMAND_ERROR_INDEX,
  KEY_COMMAND_ERROR_INSTANCE_INDEX,
  KEY_COMMAND_ERROR_RESOURCE_KEY,
  KEY_COMMAND_ERROR_TYPE,
] as const satisfies (keyof CommandError)[];

export const KEY_CONTACT_ATTEST_REQ_ATTESTATIONS = 'attestations' satisfies keyof ContactAttestReq;

export const KEYS_CONTACT_ATTEST_REQ = [
  KEY_CONTACT_ATTEST_REQ_ATTESTATIONS,
] as const satisfies (keyof ContactAttestReq)[];

export const KEY_CONTACT_ATTEST_RES_VERIFICATIONS = 'verifications' satisfies keyof ContactAttestRes;

export const KEYS_CONTACT_ATTEST_RES = [
  KEY_CONTACT_ATTEST_RES_VERIFICATIONS,
] as const satisfies (keyof ContactAttestRes)[];

export const KEY_CONTACT_ATTEST_VERIFICATION_REQ_ATTESTATION_REFERENCE = 'attestation_reference' satisfies keyof ContactAttestVerificationReq;
export const KEY_CONTACT_ATTEST_VERIFICATION_REQ_CLAIM = 'claim' satisfies keyof ContactAttestVerificationReq;
export const KEY_CONTACT_ATTEST_VERIFICATION_REQ_METHOD = 'method' satisfies keyof ContactAttestVerificationReq;
export const KEY_CONTACT_ATTEST_VERIFICATION_REQ_PROOF = 'proof' satisfies keyof ContactAttestVerificationReq;

export const KEYS_CONTACT_ATTEST_VERIFICATION_REQ = [
  KEY_CONTACT_ATTEST_VERIFICATION_REQ_ATTESTATION_REFERENCE,
  KEY_CONTACT_ATTEST_VERIFICATION_REQ_CLAIM,
  KEY_CONTACT_ATTEST_VERIFICATION_REQ_METHOD,
  KEY_CONTACT_ATTEST_VERIFICATION_REQ_PROOF,
] as const satisfies (keyof ContactAttestVerificationReq)[];

export const KEY_CONTACT_ATTRIBUTE_DEFINITION_CONDITIONS = 'conditions' satisfies keyof ContactAttributeDefinition;
export const KEY_CONTACT_ATTRIBUTE_DEFINITION_CONTACT_ROLES = 'contact_roles' satisfies keyof ContactAttributeDefinition;
export const KEY_CONTACT_ATTRIBUTE_DEFINITION_KEY = 'key' satisfies keyof ContactAttributeDefinition;
export const KEY_CONTACT_ATTRIBUTE_DEFINITION_REQUIRED = 'required' satisfies keyof ContactAttributeDefinition;
export const KEY_CONTACT_ATTRIBUTE_DEFINITION_TYPE = 'type' satisfies keyof ContactAttributeDefinition;
export const KEY_CONTACT_ATTRIBUTE_DEFINITION_VALUES = 'values' satisfies keyof ContactAttributeDefinition;

export const KEYS_CONTACT_ATTRIBUTE_DEFINITION = [
  KEY_CONTACT_ATTRIBUTE_DEFINITION_CONDITIONS,
  KEY_CONTACT_ATTRIBUTE_DEFINITION_CONTACT_ROLES,
  KEY_CONTACT_ATTRIBUTE_DEFINITION_KEY,
  KEY_CONTACT_ATTRIBUTE_DEFINITION_REQUIRED,
  KEY_CONTACT_ATTRIBUTE_DEFINITION_TYPE,
  KEY_CONTACT_ATTRIBUTE_DEFINITION_VALUES,
] as const satisfies (keyof ContactAttributeDefinition)[];

export const KEY_CONTACT_ATTRIBUTE_LINK_DETAIL_ATTRIBUTES = 'attributes' satisfies keyof ContactAttributeLinkDetail;
export const KEY_CONTACT_ATTRIBUTE_LINK_DETAIL_CONTACT_ATTRIBUTE_SET_ID = 'contact_attribute_set_id' satisfies keyof ContactAttributeLinkDetail;
export const KEY_CONTACT_ATTRIBUTE_LINK_DETAIL_LABEL = 'label' satisfies keyof ContactAttributeLinkDetail;
export const KEY_CONTACT_ATTRIBUTE_LINK_DETAIL_TLD = 'tld' satisfies keyof ContactAttributeLinkDetail;

export const KEYS_CONTACT_ATTRIBUTE_LINK_DETAIL = [
  KEY_CONTACT_ATTRIBUTE_LINK_DETAIL_ATTRIBUTES,
  KEY_CONTACT_ATTRIBUTE_LINK_DETAIL_CONTACT_ATTRIBUTE_SET_ID,
  KEY_CONTACT_ATTRIBUTE_LINK_DETAIL_LABEL,
  KEY_CONTACT_ATTRIBUTE_LINK_DETAIL_TLD,
] as const satisfies (keyof ContactAttributeLinkDetail)[];

export const KEY_CONTACT_ATTRIBUTE_LINK_CONTACT_ATTRIBUTE_LINK_ID = 'contact_attribute_link_id' satisfies keyof ContactAttributeLink;
export const KEY_CONTACT_ATTRIBUTE_LINK_CONTACT_ATTRIBUTE_SET_ID = 'contact_attribute_set_id' satisfies keyof ContactAttributeLink;
export const KEY_CONTACT_ATTRIBUTE_LINK_CONTACT_ID = 'contact_id' satisfies keyof ContactAttributeLink;
export const KEY_CONTACT_ATTRIBUTE_LINK_CREATED_ON = 'created_on' satisfies keyof ContactAttributeLink;
export const KEY_CONTACT_ATTRIBUTE_LINK_TLD = 'tld' satisfies keyof ContactAttributeLink;

export const KEYS_CONTACT_ATTRIBUTE_LINK = [
  KEY_CONTACT_ATTRIBUTE_LINK_CONTACT_ATTRIBUTE_LINK_ID,
  KEY_CONTACT_ATTRIBUTE_LINK_CONTACT_ATTRIBUTE_SET_ID,
  KEY_CONTACT_ATTRIBUTE_LINK_CONTACT_ID,
  KEY_CONTACT_ATTRIBUTE_LINK_CREATED_ON,
  KEY_CONTACT_ATTRIBUTE_LINK_TLD,
] as const satisfies (keyof ContactAttributeLink)[];

export const KEY_CONTACT_ATTRIBUTE_SET_CREATE_ATTRIBUTES = 'attributes' satisfies keyof ContactAttributeSetCreate;
export const KEY_CONTACT_ATTRIBUTE_SET_CREATE_LABEL = 'label' satisfies keyof ContactAttributeSetCreate;
export const KEY_CONTACT_ATTRIBUTE_SET_CREATE_TLD = 'tld' satisfies keyof ContactAttributeSetCreate;

export const KEYS_CONTACT_ATTRIBUTE_SET_CREATE = [
  KEY_CONTACT_ATTRIBUTE_SET_CREATE_ATTRIBUTES,
  KEY_CONTACT_ATTRIBUTE_SET_CREATE_LABEL,
  KEY_CONTACT_ATTRIBUTE_SET_CREATE_TLD,
] as const satisfies (keyof ContactAttributeSetCreate)[];

export const KEY_CONTACT_ATTRIBUTE_SET_ATTRIBUTES = 'attributes' satisfies keyof ContactAttributeSet;
export const KEY_CONTACT_ATTRIBUTE_SET_CONTACT_ATTRIBUTE_SET_ID = 'contact_attribute_set_id' satisfies keyof ContactAttributeSet;
export const KEY_CONTACT_ATTRIBUTE_SET_CREATED_ON = 'created_on' satisfies keyof ContactAttributeSet;
export const KEY_CONTACT_ATTRIBUTE_SET_LABEL = 'label' satisfies keyof ContactAttributeSet;
export const KEY_CONTACT_ATTRIBUTE_SET_LINKED_CONTACTS = 'linked_contacts' satisfies keyof ContactAttributeSet;
export const KEY_CONTACT_ATTRIBUTE_SET_ORGANIZATION_ID = 'organization_id' satisfies keyof ContactAttributeSet;
export const KEY_CONTACT_ATTRIBUTE_SET_TLD = 'tld' satisfies keyof ContactAttributeSet;
export const KEY_CONTACT_ATTRIBUTE_SET_UPDATED_ON = 'updated_on' satisfies keyof ContactAttributeSet;

export const KEYS_CONTACT_ATTRIBUTE_SET = [
  KEY_CONTACT_ATTRIBUTE_SET_ATTRIBUTES,
  KEY_CONTACT_ATTRIBUTE_SET_CONTACT_ATTRIBUTE_SET_ID,
  KEY_CONTACT_ATTRIBUTE_SET_CREATED_ON,
  KEY_CONTACT_ATTRIBUTE_SET_LABEL,
  KEY_CONTACT_ATTRIBUTE_SET_LINKED_CONTACTS,
  KEY_CONTACT_ATTRIBUTE_SET_ORGANIZATION_ID,
  KEY_CONTACT_ATTRIBUTE_SET_TLD,
  KEY_CONTACT_ATTRIBUTE_SET_UPDATED_ON,
] as const satisfies (keyof ContactAttributeSet)[];

export const KEY_CONTACT_ATTRIBUTE_SET_UPDATE_LABEL = 'label' satisfies keyof ContactAttributeSetUpdate;

export const KEYS_CONTACT_ATTRIBUTE_SET_UPDATE = [
  KEY_CONTACT_ATTRIBUTE_SET_UPDATE_LABEL,
] as const satisfies (keyof ContactAttributeSetUpdate)[];

export const KEY_CONTACT_CONFIG_BASE_MAX = 'max' satisfies keyof ContactConfigBase;
export const KEY_CONTACT_CONFIG_BASE_MIN = 'min' satisfies keyof ContactConfigBase;
export const KEY_CONTACT_CONFIG_BASE_TYPE = 'type' satisfies keyof ContactConfigBase;

export const KEYS_CONTACT_CONFIG_BASE = [
  KEY_CONTACT_CONFIG_BASE_MAX,
  KEY_CONTACT_CONFIG_BASE_MIN,
  KEY_CONTACT_CONFIG_BASE_TYPE,
] as const satisfies (keyof ContactConfigBase)[];

export const KEY_CONTACT_CREATE_CITY = 'city' satisfies keyof ContactCreate;
export const KEY_CONTACT_CREATE_COUNTRY = 'country' satisfies keyof ContactCreate;
export const KEY_CONTACT_CREATE_DISCLOSE = 'disclose' satisfies keyof ContactCreate;
export const KEY_CONTACT_CREATE_EMAIL = 'email' satisfies keyof ContactCreate;
export const KEY_CONTACT_CREATE_FAX = 'fax' satisfies keyof ContactCreate;
export const KEY_CONTACT_CREATE_FIRST_NAME = 'first_name' satisfies keyof ContactCreate;
export const KEY_CONTACT_CREATE_LAST_NAME = 'last_name' satisfies keyof ContactCreate;
export const KEY_CONTACT_CREATE_ORG = 'org' satisfies keyof ContactCreate;
export const KEY_CONTACT_CREATE_PHONE = 'phone' satisfies keyof ContactCreate;
export const KEY_CONTACT_CREATE_POSTAL_CODE = 'postal_code' satisfies keyof ContactCreate;
export const KEY_CONTACT_CREATE_STATE = 'state' satisfies keyof ContactCreate;
export const KEY_CONTACT_CREATE_STREET = 'street' satisfies keyof ContactCreate;
export const KEY_CONTACT_CREATE_TITLE = 'title' satisfies keyof ContactCreate;

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

export const KEY_CONTACT_CREATE_BULK_COMMAND_COMMAND = 'command' satisfies keyof ContactCreateBulkCommand;
export const KEY_CONTACT_CREATE_BULK_COMMAND_IDEMPOTENCY_KEY = 'idempotency_key' satisfies keyof ContactCreateBulkCommand;
export const KEY_CONTACT_CREATE_BULK_COMMAND_PAYLOAD = 'payload' satisfies keyof ContactCreateBulkCommand;
export const KEY_CONTACT_CREATE_BULK_COMMAND_VERSION = 'version' satisfies keyof ContactCreateBulkCommand;

export const KEYS_CONTACT_CREATE_BULK_COMMAND = [
  KEY_CONTACT_CREATE_BULK_COMMAND_COMMAND,
  KEY_CONTACT_CREATE_BULK_COMMAND_IDEMPOTENCY_KEY,
  KEY_CONTACT_CREATE_BULK_COMMAND_PAYLOAD,
  KEY_CONTACT_CREATE_BULK_COMMAND_VERSION,
] as const satisfies (keyof ContactCreateBulkCommand)[];

export const KEY_CONTACT_CREATE_BULK_INSTANCE_CITY = 'city' satisfies keyof ContactCreateBulkInstance;
export const KEY_CONTACT_CREATE_BULK_INSTANCE_COUNTRY = 'country' satisfies keyof ContactCreateBulkInstance;
export const KEY_CONTACT_CREATE_BULK_INSTANCE_DISCLOSE = 'disclose' satisfies keyof ContactCreateBulkInstance;
export const KEY_CONTACT_CREATE_BULK_INSTANCE_EMAIL = 'email' satisfies keyof ContactCreateBulkInstance;
export const KEY_CONTACT_CREATE_BULK_INSTANCE_FAX = 'fax' satisfies keyof ContactCreateBulkInstance;
export const KEY_CONTACT_CREATE_BULK_INSTANCE_FIRST_NAME = 'first_name' satisfies keyof ContactCreateBulkInstance;
export const KEY_CONTACT_CREATE_BULK_INSTANCE_LAST_NAME = 'last_name' satisfies keyof ContactCreateBulkInstance;
export const KEY_CONTACT_CREATE_BULK_INSTANCE_ORG = 'org' satisfies keyof ContactCreateBulkInstance;
export const KEY_CONTACT_CREATE_BULK_INSTANCE_PHONE = 'phone' satisfies keyof ContactCreateBulkInstance;
export const KEY_CONTACT_CREATE_BULK_INSTANCE_POSTAL_CODE = 'postal_code' satisfies keyof ContactCreateBulkInstance;
export const KEY_CONTACT_CREATE_BULK_INSTANCE_STATE = 'state' satisfies keyof ContactCreateBulkInstance;
export const KEY_CONTACT_CREATE_BULK_INSTANCE_STREET = 'street' satisfies keyof ContactCreateBulkInstance;
export const KEY_CONTACT_CREATE_BULK_INSTANCE_TITLE = 'title' satisfies keyof ContactCreateBulkInstance;

export const KEYS_CONTACT_CREATE_BULK_INSTANCE = [
  KEY_CONTACT_CREATE_BULK_INSTANCE_CITY,
  KEY_CONTACT_CREATE_BULK_INSTANCE_COUNTRY,
  KEY_CONTACT_CREATE_BULK_INSTANCE_DISCLOSE,
  KEY_CONTACT_CREATE_BULK_INSTANCE_EMAIL,
  KEY_CONTACT_CREATE_BULK_INSTANCE_FAX,
  KEY_CONTACT_CREATE_BULK_INSTANCE_FIRST_NAME,
  KEY_CONTACT_CREATE_BULK_INSTANCE_LAST_NAME,
  KEY_CONTACT_CREATE_BULK_INSTANCE_ORG,
  KEY_CONTACT_CREATE_BULK_INSTANCE_PHONE,
  KEY_CONTACT_CREATE_BULK_INSTANCE_POSTAL_CODE,
  KEY_CONTACT_CREATE_BULK_INSTANCE_STATE,
  KEY_CONTACT_CREATE_BULK_INSTANCE_STREET,
  KEY_CONTACT_CREATE_BULK_INSTANCE_TITLE,
] as const satisfies (keyof ContactCreateBulkInstance)[];

export const KEY_CONTACT_CREATE_BULK_PAYLOAD_INSTANCES = 'instances' satisfies keyof ContactCreateBulkPayload;
export const KEY_CONTACT_CREATE_BULK_PAYLOAD_TEMPLATE = 'template' satisfies keyof ContactCreateBulkPayload;

export const KEYS_CONTACT_CREATE_BULK_PAYLOAD = [
  KEY_CONTACT_CREATE_BULK_PAYLOAD_INSTANCES,
  KEY_CONTACT_CREATE_BULK_PAYLOAD_TEMPLATE,
] as const satisfies (keyof ContactCreateBulkPayload)[];

export const KEY_CONTACT_CREATE_BULK_TEMPLATE_COUNTRY = 'country' satisfies keyof ContactCreateBulkTemplate;
export const KEY_CONTACT_CREATE_BULK_TEMPLATE_DISCLOSE = 'disclose' satisfies keyof ContactCreateBulkTemplate;
export const KEY_CONTACT_CREATE_BULK_TEMPLATE_ORG = 'org' satisfies keyof ContactCreateBulkTemplate;
export const KEY_CONTACT_CREATE_BULK_TEMPLATE_STATE = 'state' satisfies keyof ContactCreateBulkTemplate;
export const KEY_CONTACT_CREATE_BULK_TEMPLATE_TITLE = 'title' satisfies keyof ContactCreateBulkTemplate;

export const KEYS_CONTACT_CREATE_BULK_TEMPLATE = [
  KEY_CONTACT_CREATE_BULK_TEMPLATE_COUNTRY,
  KEY_CONTACT_CREATE_BULK_TEMPLATE_DISCLOSE,
  KEY_CONTACT_CREATE_BULK_TEMPLATE_ORG,
  KEY_CONTACT_CREATE_BULK_TEMPLATE_STATE,
  KEY_CONTACT_CREATE_BULK_TEMPLATE_TITLE,
] as const satisfies (keyof ContactCreateBulkTemplate)[];

export const KEY_CONTACT_CREATE_COMMAND_COMMAND = 'command' satisfies keyof ContactCreateCommand;
export const KEY_CONTACT_CREATE_COMMAND_IDEMPOTENCY_KEY = 'idempotency_key' satisfies keyof ContactCreateCommand;
export const KEY_CONTACT_CREATE_COMMAND_PAYLOAD = 'payload' satisfies keyof ContactCreateCommand;
export const KEY_CONTACT_CREATE_COMMAND_VERSION = 'version' satisfies keyof ContactCreateCommand;

export const KEYS_CONTACT_CREATE_COMMAND = [
  KEY_CONTACT_CREATE_COMMAND_COMMAND,
  KEY_CONTACT_CREATE_COMMAND_IDEMPOTENCY_KEY,
  KEY_CONTACT_CREATE_COMMAND_PAYLOAD,
  KEY_CONTACT_CREATE_COMMAND_VERSION,
] as const satisfies (keyof ContactCreateCommand)[];

export const KEY_CONTACT_CREATE_PAYLOAD_DATA_CITY = 'city' satisfies keyof ContactCreatePayloadData;
export const KEY_CONTACT_CREATE_PAYLOAD_DATA_COUNTRY = 'country' satisfies keyof ContactCreatePayloadData;
export const KEY_CONTACT_CREATE_PAYLOAD_DATA_DISCLOSE = 'disclose' satisfies keyof ContactCreatePayloadData;
export const KEY_CONTACT_CREATE_PAYLOAD_DATA_EMAIL = 'email' satisfies keyof ContactCreatePayloadData;
export const KEY_CONTACT_CREATE_PAYLOAD_DATA_FAX = 'fax' satisfies keyof ContactCreatePayloadData;
export const KEY_CONTACT_CREATE_PAYLOAD_DATA_FIRST_NAME = 'first_name' satisfies keyof ContactCreatePayloadData;
export const KEY_CONTACT_CREATE_PAYLOAD_DATA_LAST_NAME = 'last_name' satisfies keyof ContactCreatePayloadData;
export const KEY_CONTACT_CREATE_PAYLOAD_DATA_ORG = 'org' satisfies keyof ContactCreatePayloadData;
export const KEY_CONTACT_CREATE_PAYLOAD_DATA_PHONE = 'phone' satisfies keyof ContactCreatePayloadData;
export const KEY_CONTACT_CREATE_PAYLOAD_DATA_POSTAL_CODE = 'postal_code' satisfies keyof ContactCreatePayloadData;
export const KEY_CONTACT_CREATE_PAYLOAD_DATA_STATE = 'state' satisfies keyof ContactCreatePayloadData;
export const KEY_CONTACT_CREATE_PAYLOAD_DATA_STREET = 'street' satisfies keyof ContactCreatePayloadData;
export const KEY_CONTACT_CREATE_PAYLOAD_DATA_TITLE = 'title' satisfies keyof ContactCreatePayloadData;

export const KEYS_CONTACT_CREATE_PAYLOAD_DATA = [
  KEY_CONTACT_CREATE_PAYLOAD_DATA_CITY,
  KEY_CONTACT_CREATE_PAYLOAD_DATA_COUNTRY,
  KEY_CONTACT_CREATE_PAYLOAD_DATA_DISCLOSE,
  KEY_CONTACT_CREATE_PAYLOAD_DATA_EMAIL,
  KEY_CONTACT_CREATE_PAYLOAD_DATA_FAX,
  KEY_CONTACT_CREATE_PAYLOAD_DATA_FIRST_NAME,
  KEY_CONTACT_CREATE_PAYLOAD_DATA_LAST_NAME,
  KEY_CONTACT_CREATE_PAYLOAD_DATA_ORG,
  KEY_CONTACT_CREATE_PAYLOAD_DATA_PHONE,
  KEY_CONTACT_CREATE_PAYLOAD_DATA_POSTAL_CODE,
  KEY_CONTACT_CREATE_PAYLOAD_DATA_STATE,
  KEY_CONTACT_CREATE_PAYLOAD_DATA_STREET,
  KEY_CONTACT_CREATE_PAYLOAD_DATA_TITLE,
] as const satisfies (keyof ContactCreatePayloadData)[];

export const KEY_CONTACT_CREATE_WORKER_PAYLOAD_CONTACT = 'contact' satisfies keyof ContactCreateWorkerPayload;
export const KEY_CONTACT_CREATE_WORKER_PAYLOAD_OPERATION = 'operation' satisfies keyof ContactCreateWorkerPayload;
export const KEY_CONTACT_CREATE_WORKER_PAYLOAD_TYPE = 'type' satisfies keyof ContactCreateWorkerPayload;

export const KEYS_CONTACT_CREATE_WORKER_PAYLOAD = [
  KEY_CONTACT_CREATE_WORKER_PAYLOAD_CONTACT,
  KEY_CONTACT_CREATE_WORKER_PAYLOAD_OPERATION,
  KEY_CONTACT_CREATE_WORKER_PAYLOAD_TYPE,
] as const satisfies (keyof ContactCreateWorkerPayload)[];

export const KEY_CONTACT_CREATE_WORKER_RESULT_CONTACT_ID = 'contact_id' satisfies keyof ContactCreateWorkerResult;
export const KEY_CONTACT_CREATE_WORKER_RESULT_TYPE = 'type' satisfies keyof ContactCreateWorkerResult;

export const KEYS_CONTACT_CREATE_WORKER_RESULT = [
  KEY_CONTACT_CREATE_WORKER_RESULT_CONTACT_ID,
  KEY_CONTACT_CREATE_WORKER_RESULT_TYPE,
] as const satisfies (keyof ContactCreateWorkerResult)[];

export const KEY_CONTACT_HANDLE_ATTRIBUTES = 'attributes' satisfies keyof ContactHandle;
export const KEY_CONTACT_HANDLE_CONTACT_ID = 'contact_id' satisfies keyof ContactHandle;

export const KEYS_CONTACT_HANDLE = [
  KEY_CONTACT_HANDLE_ATTRIBUTES,
  KEY_CONTACT_HANDLE_CONTACT_ID,
] as const satisfies (keyof ContactHandle)[];

export const KEY_CONTACT_ATTRIBUTE_SETS = 'attribute_sets' satisfies keyof Contact;
export const KEY_CONTACT_CITY = 'city' satisfies keyof Contact;
export const KEY_CONTACT_CONTACT_ID = 'contact_id' satisfies keyof Contact;
export const KEY_CONTACT_COUNTRY = 'country' satisfies keyof Contact;
export const KEY_CONTACT_CREATED_ON = 'created_on' satisfies keyof Contact;
export const KEY_CONTACT_DISCLOSE = 'disclose' satisfies keyof Contact;
export const KEY_CONTACT_EMAIL = 'email' satisfies keyof Contact;
export const KEY_CONTACT_FAX = 'fax' satisfies keyof Contact;
export const KEY_CONTACT_FIRST_NAME = 'first_name' satisfies keyof Contact;
export const KEY_CONTACT_LAST_NAME = 'last_name' satisfies keyof Contact;
export const KEY_CONTACT_ORG = 'org' satisfies keyof Contact;
export const KEY_CONTACT_ORGANIZATION_ID = 'organization_id' satisfies keyof Contact;
export const KEY_CONTACT_PHONE = 'phone' satisfies keyof Contact;
export const KEY_CONTACT_POSTAL_CODE = 'postal_code' satisfies keyof Contact;
export const KEY_CONTACT_STATE = 'state' satisfies keyof Contact;
export const KEY_CONTACT_STATUS_TAGS = 'status_tags' satisfies keyof Contact;
export const KEY_CONTACT_STREET = 'street' satisfies keyof Contact;
export const KEY_CONTACT_TAGS = 'tags' satisfies keyof Contact;
export const KEY_CONTACT_TITLE = 'title' satisfies keyof Contact;

export const KEYS_CONTACT = [
  KEY_CONTACT_ATTRIBUTE_SETS,
  KEY_CONTACT_CITY,
  KEY_CONTACT_CONTACT_ID,
  KEY_CONTACT_COUNTRY,
  KEY_CONTACT_CREATED_ON,
  KEY_CONTACT_DISCLOSE,
  KEY_CONTACT_EMAIL,
  KEY_CONTACT_FAX,
  KEY_CONTACT_FIRST_NAME,
  KEY_CONTACT_LAST_NAME,
  KEY_CONTACT_ORG,
  KEY_CONTACT_ORGANIZATION_ID,
  KEY_CONTACT_PHONE,
  KEY_CONTACT_POSTAL_CODE,
  KEY_CONTACT_STATE,
  KEY_CONTACT_STATUS_TAGS,
  KEY_CONTACT_STREET,
  KEY_CONTACT_TAGS,
  KEY_CONTACT_TITLE,
] as const satisfies (keyof Contact)[];

export const KEY_CONTACT_VERIFICATION_API_CANCELED_ON = 'canceled_on' satisfies keyof ContactVerificationApi;
export const KEY_CONTACT_VERIFICATION_API_CONTACT_ID = 'contact_id' satisfies keyof ContactVerificationApi;
export const KEY_CONTACT_VERIFICATION_API_CONTACT_VERIFICATION_ID = 'contact_verification_id' satisfies keyof ContactVerificationApi;
export const KEY_CONTACT_VERIFICATION_API_CREATED_ON = 'created_on' satisfies keyof ContactVerificationApi;
export const KEY_CONTACT_VERIFICATION_API_STATUS = 'status' satisfies keyof ContactVerificationApi;
export const KEY_CONTACT_VERIFICATION_API_TOKEN = 'token' satisfies keyof ContactVerificationApi;
export const KEY_CONTACT_VERIFICATION_API_TYPE = 'type' satisfies keyof ContactVerificationApi;
export const KEY_CONTACT_VERIFICATION_API_UPDATED_ON = 'updated_on' satisfies keyof ContactVerificationApi;
export const KEY_CONTACT_VERIFICATION_API_VERIFIED_ON = 'verified_on' satisfies keyof ContactVerificationApi;

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

export const KEY_CONTACT_VERIFICATION_EMAIL_CANCELED_ON = 'canceled_on' satisfies keyof ContactVerificationEmail;
export const KEY_CONTACT_VERIFICATION_EMAIL_CONTACT_ID = 'contact_id' satisfies keyof ContactVerificationEmail;
export const KEY_CONTACT_VERIFICATION_EMAIL_CONTACT_VERIFICATION_ID = 'contact_verification_id' satisfies keyof ContactVerificationEmail;
export const KEY_CONTACT_VERIFICATION_EMAIL_CREATED_ON = 'created_on' satisfies keyof ContactVerificationEmail;
export const KEY_CONTACT_VERIFICATION_EMAIL_STATUS = 'status' satisfies keyof ContactVerificationEmail;
export const KEY_CONTACT_VERIFICATION_EMAIL_TYPE = 'type' satisfies keyof ContactVerificationEmail;
export const KEY_CONTACT_VERIFICATION_EMAIL_UPDATED_ON = 'updated_on' satisfies keyof ContactVerificationEmail;
export const KEY_CONTACT_VERIFICATION_EMAIL_VERIFIED_ON = 'verified_on' satisfies keyof ContactVerificationEmail;

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

export const KEY_CONTACT_VERIFICATION_CANCELED_ON = 'canceled_on' satisfies keyof ContactVerification;
export const KEY_CONTACT_VERIFICATION_CONTACT_ID = 'contact_id' satisfies keyof ContactVerification;
export const KEY_CONTACT_VERIFICATION_CONTACT_VERIFICATION_ID = 'contact_verification_id' satisfies keyof ContactVerification;
export const KEY_CONTACT_VERIFICATION_CREATED_ON = 'created_on' satisfies keyof ContactVerification;
export const KEY_CONTACT_VERIFICATION_STATUS = 'status' satisfies keyof ContactVerification;
export const KEY_CONTACT_VERIFICATION_TYPE = 'type' satisfies keyof ContactVerification;
export const KEY_CONTACT_VERIFICATION_UPDATED_ON = 'updated_on' satisfies keyof ContactVerification;
export const KEY_CONTACT_VERIFICATION_VERIFIED_ON = 'verified_on' satisfies keyof ContactVerification;

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

export const KEY_CONTACT_VERIFICATION_STATUS_ATTESTATION_REFERENCE = 'attestation_reference' satisfies keyof ContactVerificationStatus;
export const KEY_CONTACT_VERIFICATION_STATUS_CLAIM = 'claim' satisfies keyof ContactVerificationStatus;
export const KEY_CONTACT_VERIFICATION_STATUS_EXPIRES_ON = 'expires_on' satisfies keyof ContactVerificationStatus;
export const KEY_CONTACT_VERIFICATION_STATUS_METHOD = 'method' satisfies keyof ContactVerificationStatus;
export const KEY_CONTACT_VERIFICATION_STATUS_PROOF = 'proof' satisfies keyof ContactVerificationStatus;
export const KEY_CONTACT_VERIFICATION_STATUS_STATE = 'state' satisfies keyof ContactVerificationStatus;
export const KEY_CONTACT_VERIFICATION_STATUS_VERIFIED_ON = 'verified_on' satisfies keyof ContactVerificationStatus;

export const KEYS_CONTACT_VERIFICATION_STATUS = [
  KEY_CONTACT_VERIFICATION_STATUS_ATTESTATION_REFERENCE,
  KEY_CONTACT_VERIFICATION_STATUS_CLAIM,
  KEY_CONTACT_VERIFICATION_STATUS_EXPIRES_ON,
  KEY_CONTACT_VERIFICATION_STATUS_METHOD,
  KEY_CONTACT_VERIFICATION_STATUS_PROOF,
  KEY_CONTACT_VERIFICATION_STATUS_STATE,
  KEY_CONTACT_VERIFICATION_STATUS_VERIFIED_ON,
] as const satisfies (keyof ContactVerificationStatus)[];

export const KEY_CONTACTS_BASE_AUTHINFO_REQUIRED = 'authinfo_required' satisfies keyof ContactsBase;
export const KEY_CONTACTS_BASE_IS_THICK = 'is_thick' satisfies keyof ContactsBase;
export const KEY_CONTACTS_BASE_POSSIBLE_ATTRIBUTES = 'possible_attributes' satisfies keyof ContactsBase;
export const KEY_CONTACTS_BASE_PRIVACY_PROXY = 'privacy_proxy' satisfies keyof ContactsBase;
export const KEY_CONTACTS_BASE_REGISTRANT_CHANGE = 'registrant_change' satisfies keyof ContactsBase;
export const KEY_CONTACTS_BASE_SUPPORT_CHECK = 'support_check' satisfies keyof ContactsBase;
export const KEY_CONTACTS_BASE_SUPPORT_CLIENT_CONTACT_ID = 'support_client_contact_id' satisfies keyof ContactsBase;
export const KEY_CONTACTS_BASE_SUPPORT_TRANSFER = 'support_transfer' satisfies keyof ContactsBase;
export const KEY_CONTACTS_BASE_SUPPORTED_POSTAL_TYPES = 'supported_postal_types' satisfies keyof ContactsBase;
export const KEY_CONTACTS_BASE_SUPPORTED_ROLES = 'supported_roles' satisfies keyof ContactsBase;
export const KEY_CONTACTS_BASE_TRANSFER_SUPPORTED_ROLES = 'transfer_supported_roles' satisfies keyof ContactsBase;
export const KEY_CONTACTS_BASE_UPDATE_SUPPORTED_ROLES = 'update_supported_roles' satisfies keyof ContactsBase;

export const KEYS_CONTACTS_BASE = [
  KEY_CONTACTS_BASE_AUTHINFO_REQUIRED,
  KEY_CONTACTS_BASE_IS_THICK,
  KEY_CONTACTS_BASE_POSSIBLE_ATTRIBUTES,
  KEY_CONTACTS_BASE_PRIVACY_PROXY,
  KEY_CONTACTS_BASE_REGISTRANT_CHANGE,
  KEY_CONTACTS_BASE_SUPPORT_CHECK,
  KEY_CONTACTS_BASE_SUPPORT_CLIENT_CONTACT_ID,
  KEY_CONTACTS_BASE_SUPPORT_TRANSFER,
  KEY_CONTACTS_BASE_SUPPORTED_POSTAL_TYPES,
  KEY_CONTACTS_BASE_SUPPORTED_ROLES,
  KEY_CONTACTS_BASE_TRANSFER_SUPPORTED_ROLES,
  KEY_CONTACTS_BASE_UPDATE_SUPPORTED_ROLES,
] as const satisfies (keyof ContactsBase)[];

export const KEY_CONTACTS_CONTEXT_CONTEXT_ID = 'context_id' satisfies keyof ContactsContext;
export const KEY_CONTACTS_CONTEXT_CONVERSATION_ID = 'conversation_id' satisfies keyof ContactsContext;
export const KEY_CONTACTS_CONTEXT_CREATED_AT = 'created_at' satisfies keyof ContactsContext;
export const KEY_CONTACTS_CONTEXT_KIND = 'kind' satisfies keyof ContactsContext;
export const KEY_CONTACTS_CONTEXT_ORGANIZATION_ID = 'organization_id' satisfies keyof ContactsContext;
export const KEY_CONTACTS_CONTEXT_PAYLOAD = 'payload' satisfies keyof ContactsContext;
export const KEY_CONTACTS_CONTEXT_USER_ID = 'user_id' satisfies keyof ContactsContext;

export const KEYS_CONTACTS_CONTEXT = [
  KEY_CONTACTS_CONTEXT_CONTEXT_ID,
  KEY_CONTACTS_CONTEXT_CONVERSATION_ID,
  KEY_CONTACTS_CONTEXT_CREATED_AT,
  KEY_CONTACTS_CONTEXT_KIND,
  KEY_CONTACTS_CONTEXT_ORGANIZATION_ID,
  KEY_CONTACTS_CONTEXT_PAYLOAD,
  KEY_CONTACTS_CONTEXT_USER_ID,
] as const satisfies (keyof ContactsContext)[];

export const KEY_CONTACTS_CONTEXT_CREATE_KIND = 'kind' satisfies keyof ContactsContextCreate;
export const KEY_CONTACTS_CONTEXT_CREATE_PAYLOAD = 'payload' satisfies keyof ContactsContextCreate;

export const KEYS_CONTACTS_CONTEXT_CREATE = [
  KEY_CONTACTS_CONTEXT_CREATE_KIND,
  KEY_CONTACTS_CONTEXT_CREATE_PAYLOAD,
] as const satisfies (keyof ContactsContextCreate)[];

export const KEY_CONTEXT_LIST_PAGINATION = 'pagination' satisfies keyof ContextList;
export const KEY_CONTEXT_LIST_RESULTS = 'results' satisfies keyof ContextList;

export const KEYS_CONTEXT_LIST = [
  KEY_CONTEXT_LIST_PAGINATION,
  KEY_CONTEXT_LIST_RESULTS,
] as const satisfies (keyof ContextList)[];

export const KEY_CONTEXT_META_PROCESSING_TIME_MS = 'processing_time_ms' satisfies keyof ContextMeta;
export const KEY_CONTEXT_META_TOTAL = 'total' satisfies keyof ContextMeta;

export const KEYS_CONTEXT_META = [
  KEY_CONTEXT_META_PROCESSING_TIME_MS,
  KEY_CONTEXT_META_TOTAL,
] as const satisfies (keyof ContextMeta)[];

export const KEY_CONTEXT_PAYLOAD_DOMAIN_FORWARD_META = 'meta' satisfies keyof ContextPayload_DomainForward;
export const KEY_CONTEXT_PAYLOAD_DOMAIN_FORWARD_PAGINATION = 'pagination' satisfies keyof ContextPayload_DomainForward;
export const KEY_CONTEXT_PAYLOAD_DOMAIN_FORWARD_RESULTS = 'results' satisfies keyof ContextPayload_DomainForward;

export const KEYS_CONTEXT_PAYLOAD_DOMAIN_FORWARD = [
  KEY_CONTEXT_PAYLOAD_DOMAIN_FORWARD_META,
  KEY_CONTEXT_PAYLOAD_DOMAIN_FORWARD_PAGINATION,
  KEY_CONTEXT_PAYLOAD_DOMAIN_FORWARD_RESULTS,
] as const satisfies (keyof ContextPayload_DomainForward)[];

export const KEY_CONTEXT_PAYLOAD_DOMAIN_SEARCH_SUGGESTION_WITH_PRICE_META = 'meta' satisfies keyof ContextPayload_DomainSearchSuggestionWithPrice;
export const KEY_CONTEXT_PAYLOAD_DOMAIN_SEARCH_SUGGESTION_WITH_PRICE_PAGINATION = 'pagination' satisfies keyof ContextPayload_DomainSearchSuggestionWithPrice;
export const KEY_CONTEXT_PAYLOAD_DOMAIN_SEARCH_SUGGESTION_WITH_PRICE_RESULTS = 'results' satisfies keyof ContextPayload_DomainSearchSuggestionWithPrice;

export const KEYS_CONTEXT_PAYLOAD_DOMAIN_SEARCH_SUGGESTION_WITH_PRICE = [
  KEY_CONTEXT_PAYLOAD_DOMAIN_SEARCH_SUGGESTION_WITH_PRICE_META,
  KEY_CONTEXT_PAYLOAD_DOMAIN_SEARCH_SUGGESTION_WITH_PRICE_PAGINATION,
  KEY_CONTEXT_PAYLOAD_DOMAIN_SEARCH_SUGGESTION_WITH_PRICE_RESULTS,
] as const satisfies (keyof ContextPayload_DomainSearchSuggestionWithPrice)[];

export const KEY_CONTEXT_PAYLOAD_EMAIL_FORWARD_META = 'meta' satisfies keyof ContextPayload_EmailForward;
export const KEY_CONTEXT_PAYLOAD_EMAIL_FORWARD_PAGINATION = 'pagination' satisfies keyof ContextPayload_EmailForward;
export const KEY_CONTEXT_PAYLOAD_EMAIL_FORWARD_RESULTS = 'results' satisfies keyof ContextPayload_EmailForward;

export const KEYS_CONTEXT_PAYLOAD_EMAIL_FORWARD = [
  KEY_CONTEXT_PAYLOAD_EMAIL_FORWARD_META,
  KEY_CONTEXT_PAYLOAD_EMAIL_FORWARD_PAGINATION,
  KEY_CONTEXT_PAYLOAD_EMAIL_FORWARD_RESULTS,
] as const satisfies (keyof ContextPayload_EmailForward)[];

export const KEY_CONTEXT_PAYLOAD_REGISTRAR_CONTACT_META = 'meta' satisfies keyof ContextPayload_RegistrarContact;
export const KEY_CONTEXT_PAYLOAD_REGISTRAR_CONTACT_PAGINATION = 'pagination' satisfies keyof ContextPayload_RegistrarContact;
export const KEY_CONTEXT_PAYLOAD_REGISTRAR_CONTACT_RESULTS = 'results' satisfies keyof ContextPayload_RegistrarContact;

export const KEYS_CONTEXT_PAYLOAD_REGISTRAR_CONTACT = [
  KEY_CONTEXT_PAYLOAD_REGISTRAR_CONTACT_META,
  KEY_CONTEXT_PAYLOAD_REGISTRAR_CONTACT_PAGINATION,
  KEY_CONTEXT_PAYLOAD_REGISTRAR_CONTACT_RESULTS,
] as const satisfies (keyof ContextPayload_RegistrarContact)[];

export const KEY_CONTEXT_PAYLOAD_REGISTRAR_DOMAIN_META = 'meta' satisfies keyof ContextPayload_RegistrarDomain;
export const KEY_CONTEXT_PAYLOAD_REGISTRAR_DOMAIN_PAGINATION = 'pagination' satisfies keyof ContextPayload_RegistrarDomain;
export const KEY_CONTEXT_PAYLOAD_REGISTRAR_DOMAIN_RESULTS = 'results' satisfies keyof ContextPayload_RegistrarDomain;

export const KEYS_CONTEXT_PAYLOAD_REGISTRAR_DOMAIN = [
  KEY_CONTEXT_PAYLOAD_REGISTRAR_DOMAIN_META,
  KEY_CONTEXT_PAYLOAD_REGISTRAR_DOMAIN_PAGINATION,
  KEY_CONTEXT_PAYLOAD_REGISTRAR_DOMAIN_RESULTS,
] as const satisfies (keyof ContextPayload_RegistrarDomain)[];

export const KEY_CONTEXT_PAYLOAD_REGISTRAR_ZONE_META = 'meta' satisfies keyof ContextPayload_RegistrarZone;
export const KEY_CONTEXT_PAYLOAD_REGISTRAR_ZONE_PAGINATION = 'pagination' satisfies keyof ContextPayload_RegistrarZone;
export const KEY_CONTEXT_PAYLOAD_REGISTRAR_ZONE_RESULTS = 'results' satisfies keyof ContextPayload_RegistrarZone;

export const KEYS_CONTEXT_PAYLOAD_REGISTRAR_ZONE = [
  KEY_CONTEXT_PAYLOAD_REGISTRAR_ZONE_META,
  KEY_CONTEXT_PAYLOAD_REGISTRAR_ZONE_PAGINATION,
  KEY_CONTEXT_PAYLOAD_REGISTRAR_ZONE_RESULTS,
] as const satisfies (keyof ContextPayload_RegistrarZone)[];

export const KEY_CONVERSATION_CONVERSATION_ID = 'conversation_id' satisfies keyof Conversation;
export const KEY_CONVERSATION_CREATED_AT = 'created_at' satisfies keyof Conversation;
export const KEY_CONVERSATION_LAST_MESSAGE_AT = 'last_message_at' satisfies keyof Conversation;
export const KEY_CONVERSATION_MESSAGE_COUNT = 'message_count' satisfies keyof Conversation;
export const KEY_CONVERSATION_METADATA = 'metadata' satisfies keyof Conversation;
export const KEY_CONVERSATION_ORGANIZATION_ID = 'organization_id' satisfies keyof Conversation;
export const KEY_CONVERSATION_SUMMARY = 'summary' satisfies keyof Conversation;
export const KEY_CONVERSATION_TITLE = 'title' satisfies keyof Conversation;
export const KEY_CONVERSATION_UPDATED_AT = 'updated_at' satisfies keyof Conversation;
export const KEY_CONVERSATION_USER_ID = 'user_id' satisfies keyof Conversation;

export const KEYS_CONVERSATION = [
  KEY_CONVERSATION_CONVERSATION_ID,
  KEY_CONVERSATION_CREATED_AT,
  KEY_CONVERSATION_LAST_MESSAGE_AT,
  KEY_CONVERSATION_MESSAGE_COUNT,
  KEY_CONVERSATION_METADATA,
  KEY_CONVERSATION_ORGANIZATION_ID,
  KEY_CONVERSATION_SUMMARY,
  KEY_CONVERSATION_TITLE,
  KEY_CONVERSATION_UPDATED_AT,
  KEY_CONVERSATION_USER_ID,
] as const satisfies (keyof Conversation)[];

export const KEY_CONVERSATION_CREATE_REQUEST_METADATA = 'metadata' satisfies keyof ConversationCreateRequest;
export const KEY_CONVERSATION_CREATE_REQUEST_TITLE = 'title' satisfies keyof ConversationCreateRequest;

export const KEYS_CONVERSATION_CREATE_REQUEST = [
  KEY_CONVERSATION_CREATE_REQUEST_METADATA,
  KEY_CONVERSATION_CREATE_REQUEST_TITLE,
] as const satisfies (keyof ConversationCreateRequest)[];

export const KEY_CONVERSATION_LIST_PAGINATION = 'pagination' satisfies keyof ConversationList;
export const KEY_CONVERSATION_LIST_RESULTS = 'results' satisfies keyof ConversationList;

export const KEYS_CONVERSATION_LIST = [
  KEY_CONVERSATION_LIST_PAGINATION,
  KEY_CONVERSATION_LIST_RESULTS,
] as const satisfies (keyof ConversationList)[];

export const KEY_CONVERSATION_PATCH_REQUEST_METADATA = 'metadata' satisfies keyof ConversationPatchRequest;
export const KEY_CONVERSATION_PATCH_REQUEST_TITLE = 'title' satisfies keyof ConversationPatchRequest;

export const KEYS_CONVERSATION_PATCH_REQUEST = [
  KEY_CONVERSATION_PATCH_REQUEST_METADATA,
  KEY_CONVERSATION_PATCH_REQUEST_TITLE,
] as const satisfies (keyof ConversationPatchRequest)[];

export const KEY_CREATE_JOB_BATCH_BATCH_ID = 'batch_id' satisfies keyof CreateJobBatch;
export const KEY_CREATE_JOB_BATCH_DUPLICATES = 'duplicates' satisfies keyof CreateJobBatch;
export const KEY_CREATE_JOB_BATCH_ERRORS = 'errors' satisfies keyof CreateJobBatch;
export const KEY_CREATE_JOB_BATCH_JOBS_CREATED = 'jobs_created' satisfies keyof CreateJobBatch;
export const KEY_CREATE_JOB_BATCH_JOBS_DUPLICATED = 'jobs_duplicated' satisfies keyof CreateJobBatch;
export const KEY_CREATE_JOB_BATCH_JOBS_FAILED = 'jobs_failed' satisfies keyof CreateJobBatch;
export const KEY_CREATE_JOB_BATCH_STATUS_URL = 'status_url' satisfies keyof CreateJobBatch;
export const KEY_CREATE_JOB_BATCH_TOTAL_COMMANDS = 'total_commands' satisfies keyof CreateJobBatch;

export const KEYS_CREATE_JOB_BATCH = [
  KEY_CREATE_JOB_BATCH_BATCH_ID,
  KEY_CREATE_JOB_BATCH_DUPLICATES,
  KEY_CREATE_JOB_BATCH_ERRORS,
  KEY_CREATE_JOB_BATCH_JOBS_CREATED,
  KEY_CREATE_JOB_BATCH_JOBS_DUPLICATED,
  KEY_CREATE_JOB_BATCH_JOBS_FAILED,
  KEY_CREATE_JOB_BATCH_STATUS_URL,
  KEY_CREATE_JOB_BATCH_TOTAL_COMMANDS,
] as const satisfies (keyof CreateJobBatch)[];

export const KEY_CREATE_REPORT_REQ_REGISTRAR_CREDENTIAL_ID = 'registrar_credential_id' satisfies keyof CreateReportReq;
export const KEY_CREATE_REPORT_REQ_REPORT_TYPE = 'report_type' satisfies keyof CreateReportReq;

export const KEYS_CREATE_REPORT_REQ = [
  KEY_CREATE_REPORT_REQ_REGISTRAR_CREDENTIAL_ID,
  KEY_CREATE_REPORT_REQ_REPORT_TYPE,
] as const satisfies (keyof CreateReportReq)[];

export const KEY_CUSTOM_ROLE_CREATE_DESCRIPTION = 'description' satisfies keyof CustomRoleCreate;
export const KEY_CUSTOM_ROLE_CREATE_NAME = 'name' satisfies keyof CustomRoleCreate;
export const KEY_CUSTOM_ROLE_CREATE_PERMISSIONS = 'permissions' satisfies keyof CustomRoleCreate;

export const KEYS_CUSTOM_ROLE_CREATE = [
  KEY_CUSTOM_ROLE_CREATE_DESCRIPTION,
  KEY_CUSTOM_ROLE_CREATE_NAME,
  KEY_CUSTOM_ROLE_CREATE_PERMISSIONS,
] as const satisfies (keyof CustomRoleCreate)[];

export const KEY_CUSTOM_ROLE_UPDATE_DESCRIPTION = 'description' satisfies keyof CustomRoleUpdate;
export const KEY_CUSTOM_ROLE_UPDATE_NAME = 'name' satisfies keyof CustomRoleUpdate;
export const KEY_CUSTOM_ROLE_UPDATE_PERMISSIONS = 'permissions' satisfies keyof CustomRoleUpdate;

export const KEYS_CUSTOM_ROLE_UPDATE = [
  KEY_CUSTOM_ROLE_UPDATE_DESCRIPTION,
  KEY_CUSTOM_ROLE_UPDATE_NAME,
  KEY_CUSTOM_ROLE_UPDATE_PERMISSIONS,
] as const satisfies (keyof CustomRoleUpdate)[];

export const KEY_DNS_CHANGE_ACTION = 'action' satisfies keyof DnsChange;
export const KEY_DNS_CHANGE_RECORD_DATA = 'record_data' satisfies keyof DnsChange;
export const KEY_DNS_CHANGE_RRSET_NAME = 'rrset_name' satisfies keyof DnsChange;
export const KEY_DNS_CHANGE_RRSET_TYPE = 'rrset_type' satisfies keyof DnsChange;
export const KEY_DNS_CHANGE_TTL = 'ttl' satisfies keyof DnsChange;

export const KEYS_DNS_CHANGE = [
  KEY_DNS_CHANGE_ACTION,
  KEY_DNS_CHANGE_RECORD_DATA,
  KEY_DNS_CHANGE_RRSET_NAME,
  KEY_DNS_CHANGE_RRSET_TYPE,
  KEY_DNS_CHANGE_TTL,
] as const satisfies (keyof DnsChange)[];

export const KEY_DNS_CHANGES_CHANGES = 'changes' satisfies keyof DnsChanges;
export const KEY_DNS_CHANGES_CHANGESET_ID = 'changeset_id' satisfies keyof DnsChanges;
export const KEY_DNS_CHANGES_NUM_CHANGES = 'num_changes' satisfies keyof DnsChanges;
export const KEY_DNS_CHANGES_ZONE_NAME = 'zone_name' satisfies keyof DnsChanges;

export const KEYS_DNS_CHANGES = [
  KEY_DNS_CHANGES_CHANGES,
  KEY_DNS_CHANGES_CHANGESET_ID,
  KEY_DNS_CHANGES_NUM_CHANGES,
  KEY_DNS_CHANGES_ZONE_NAME,
] as const satisfies (keyof DnsChanges)[];

export const KEY_DNS_CONFIGURATION_BASE_ALLOWED_NUMBER_OF_NAMESERVER = 'allowed_number_of_nameserver' satisfies keyof DnsConfigurationBase;
export const KEY_DNS_CONFIGURATION_BASE_CZDS_AVAILABLE = 'czds_available' satisfies keyof DnsConfigurationBase;
export const KEY_DNS_CONFIGURATION_BASE_DNSSEC_ALLOWED = 'dnssec_allowed' satisfies keyof DnsConfigurationBase;
export const KEY_DNS_CONFIGURATION_BASE_DNSSEC_MANDATORY = 'dnssec_mandatory' satisfies keyof DnsConfigurationBase;
export const KEY_DNS_CONFIGURATION_BASE_DNSSEC_MODE = 'dnssec_mode' satisfies keyof DnsConfigurationBase;
export const KEY_DNS_CONFIGURATION_BASE_HOST_OBJECTS = 'host_objects' satisfies keyof DnsConfigurationBase;
export const KEY_DNS_CONFIGURATION_BASE_HOST_PARENT_CHECK_TLDS = 'host_parent_check_tlds' satisfies keyof DnsConfigurationBase;
export const KEY_DNS_CONFIGURATION_BASE_REGISTRY_NAMESERVER_CHECK = 'registry_nameserver_check' satisfies keyof DnsConfigurationBase;
export const KEY_DNS_CONFIGURATION_BASE_REGISTRY_ROOT_NAMESERVER_UPDATE = 'registry_root_nameserver_update' satisfies keyof DnsConfigurationBase;

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

export const KEY_DNS_RECORD_CREATE_RDATA = 'rdata' satisfies keyof DnsRecordCreate;

export const KEYS_DNS_RECORD_CREATE = [
  KEY_DNS_RECORD_CREATE_RDATA,
] as const satisfies (keyof DnsRecordCreate)[];

export const KEY_DNS_RECORD_DTO_RDATA = 'rdata' satisfies keyof DnsRecordDTO;

export const KEYS_DNS_RECORD_DTO = [
  KEY_DNS_RECORD_DTO_RDATA,
] as const satisfies (keyof DnsRecordDTO)[];

export const KEY_DNS_RECORD_PATCH_OP_OP = 'op' satisfies keyof DnsRecordPatchOp;
export const KEY_DNS_RECORD_PATCH_OP_RECORD = 'record' satisfies keyof DnsRecordPatchOp;

export const KEYS_DNS_RECORD_PATCH_OP = [
  KEY_DNS_RECORD_PATCH_OP_OP,
  KEY_DNS_RECORD_PATCH_OP_RECORD,
] as const satisfies (keyof DnsRecordPatchOp)[];

export const KEY_DNS_RECORD_PROTECTED = 'protected' satisfies keyof DnsRecord;
export const KEY_DNS_RECORD_PROTECTED_REASON = 'protected_reason' satisfies keyof DnsRecord;
export const KEY_DNS_RECORD_RDATA = 'rdata' satisfies keyof DnsRecord;

export const KEYS_DNS_RECORD = [
  KEY_DNS_RECORD_PROTECTED,
  KEY_DNS_RECORD_PROTECTED_REASON,
  KEY_DNS_RECORD_RDATA,
] as const satisfies (keyof DnsRecord)[];

export const KEY_DNS_RRSET_CREATE_NAME = 'name' satisfies keyof DnsRrsetCreate;
export const KEY_DNS_RRSET_CREATE_RECORDS = 'records' satisfies keyof DnsRrsetCreate;
export const KEY_DNS_RRSET_CREATE_TTL = 'ttl' satisfies keyof DnsRrsetCreate;
export const KEY_DNS_RRSET_CREATE_TYPE = 'type' satisfies keyof DnsRrsetCreate;

export const KEYS_DNS_RRSET_CREATE = [
  KEY_DNS_RRSET_CREATE_NAME,
  KEY_DNS_RRSET_CREATE_RECORDS,
  KEY_DNS_RRSET_CREATE_TTL,
  KEY_DNS_RRSET_CREATE_TYPE,
] as const satisfies (keyof DnsRrsetCreate)[];

export const KEY_DNS_RRSET_DTO_NAME = 'name' satisfies keyof DnsRrsetDTO;
export const KEY_DNS_RRSET_DTO_RECORDS = 'records' satisfies keyof DnsRrsetDTO;
export const KEY_DNS_RRSET_DTO_TTL = 'ttl' satisfies keyof DnsRrsetDTO;
export const KEY_DNS_RRSET_DTO_TYPE = 'type' satisfies keyof DnsRrsetDTO;

export const KEYS_DNS_RRSET_DTO = [
  KEY_DNS_RRSET_DTO_NAME,
  KEY_DNS_RRSET_DTO_RECORDS,
  KEY_DNS_RRSET_DTO_TTL,
  KEY_DNS_RRSET_DTO_TYPE,
] as const satisfies (keyof DnsRrsetDTO)[];

export const KEY_DNS_RRSET_PATCH_NAME = 'name' satisfies keyof DnsRrsetPatch;
export const KEY_DNS_RRSET_PATCH_RECORDS = 'records' satisfies keyof DnsRrsetPatch;
export const KEY_DNS_RRSET_PATCH_TTL = 'ttl' satisfies keyof DnsRrsetPatch;
export const KEY_DNS_RRSET_PATCH_TYPE = 'type' satisfies keyof DnsRrsetPatch;

export const KEYS_DNS_RRSET_PATCH = [
  KEY_DNS_RRSET_PATCH_NAME,
  KEY_DNS_RRSET_PATCH_RECORDS,
  KEY_DNS_RRSET_PATCH_TTL,
  KEY_DNS_RRSET_PATCH_TYPE,
] as const satisfies (keyof DnsRrsetPatch)[];

export const KEY_DNS_RRSET_PATCH_OP_OP = 'op' satisfies keyof DnsRrsetPatchOp;
export const KEY_DNS_RRSET_PATCH_OP_RRSET = 'rrset' satisfies keyof DnsRrsetPatchOp;

export const KEYS_DNS_RRSET_PATCH_OP = [
  KEY_DNS_RRSET_PATCH_OP_OP,
  KEY_DNS_RRSET_PATCH_OP_RRSET,
] as const satisfies (keyof DnsRrsetPatchOp)[];

export const KEY_DNS_RRSET_NAME = 'name' satisfies keyof DnsRrset;
export const KEY_DNS_RRSET_PROTECTED = 'protected' satisfies keyof DnsRrset;
export const KEY_DNS_RRSET_PROTECTED_REASON = 'protected_reason' satisfies keyof DnsRrset;
export const KEY_DNS_RRSET_RECORDS = 'records' satisfies keyof DnsRrset;
export const KEY_DNS_RRSET_TTL = 'ttl' satisfies keyof DnsRrset;
export const KEY_DNS_RRSET_TYPE = 'type' satisfies keyof DnsRrset;

export const KEYS_DNS_RRSET = [
  KEY_DNS_RRSET_NAME,
  KEY_DNS_RRSET_PROTECTED,
  KEY_DNS_RRSET_PROTECTED_REASON,
  KEY_DNS_RRSET_RECORDS,
  KEY_DNS_RRSET_TTL,
  KEY_DNS_RRSET_TYPE,
] as const satisfies (keyof DnsRrset)[];

export const KEY_DNS_RRSET_WITH_ONE_RECORD_PATCH_NAME = 'name' satisfies keyof DnsRrsetWithOneRecordPatch;
export const KEY_DNS_RRSET_WITH_ONE_RECORD_PATCH_RDATA = 'rdata' satisfies keyof DnsRrsetWithOneRecordPatch;
export const KEY_DNS_RRSET_WITH_ONE_RECORD_PATCH_TTL = 'ttl' satisfies keyof DnsRrsetWithOneRecordPatch;
export const KEY_DNS_RRSET_WITH_ONE_RECORD_PATCH_TYPE = 'type' satisfies keyof DnsRrsetWithOneRecordPatch;

export const KEYS_DNS_RRSET_WITH_ONE_RECORD_PATCH = [
  KEY_DNS_RRSET_WITH_ONE_RECORD_PATCH_NAME,
  KEY_DNS_RRSET_WITH_ONE_RECORD_PATCH_RDATA,
  KEY_DNS_RRSET_WITH_ONE_RECORD_PATCH_TTL,
  KEY_DNS_RRSET_WITH_ONE_RECORD_PATCH_TYPE,
] as const satisfies (keyof DnsRrsetWithOneRecordPatch)[];

export const KEY_DNS_ZONE_CREATE_DNSSEC_STATUS = 'dnssec_status' satisfies keyof DnsZoneCreate;
export const KEY_DNS_ZONE_CREATE_NAME = 'name' satisfies keyof DnsZoneCreate;
export const KEY_DNS_ZONE_CREATE_RRSETS = 'rrsets' satisfies keyof DnsZoneCreate;
export const KEY_DNS_ZONE_CREATE_VANITY_NAMESERVER_SET_ID = 'vanity_nameserver_set_id' satisfies keyof DnsZoneCreate;

export const KEYS_DNS_ZONE_CREATE = [
  KEY_DNS_ZONE_CREATE_DNSSEC_STATUS,
  KEY_DNS_ZONE_CREATE_NAME,
  KEY_DNS_ZONE_CREATE_RRSETS,
  KEY_DNS_ZONE_CREATE_VANITY_NAMESERVER_SET_ID,
] as const satisfies (keyof DnsZoneCreate)[];

export const KEY_DNS_ZONE_CREATE_BULK_COMMAND_COMMAND = 'command' satisfies keyof DnsZoneCreateBulkCommand;
export const KEY_DNS_ZONE_CREATE_BULK_COMMAND_IDEMPOTENCY_KEY = 'idempotency_key' satisfies keyof DnsZoneCreateBulkCommand;
export const KEY_DNS_ZONE_CREATE_BULK_COMMAND_PAYLOAD = 'payload' satisfies keyof DnsZoneCreateBulkCommand;
export const KEY_DNS_ZONE_CREATE_BULK_COMMAND_VERSION = 'version' satisfies keyof DnsZoneCreateBulkCommand;

export const KEYS_DNS_ZONE_CREATE_BULK_COMMAND = [
  KEY_DNS_ZONE_CREATE_BULK_COMMAND_COMMAND,
  KEY_DNS_ZONE_CREATE_BULK_COMMAND_IDEMPOTENCY_KEY,
  KEY_DNS_ZONE_CREATE_BULK_COMMAND_PAYLOAD,
  KEY_DNS_ZONE_CREATE_BULK_COMMAND_VERSION,
] as const satisfies (keyof DnsZoneCreateBulkCommand)[];

export const KEY_DNS_ZONE_CREATE_BULK_INSTANCE_DNSSEC_STATUS = 'dnssec_status' satisfies keyof DnsZoneCreateBulkInstance;
export const KEY_DNS_ZONE_CREATE_BULK_INSTANCE_NAME = 'name' satisfies keyof DnsZoneCreateBulkInstance;
export const KEY_DNS_ZONE_CREATE_BULK_INSTANCE_RRSETS = 'rrsets' satisfies keyof DnsZoneCreateBulkInstance;

export const KEYS_DNS_ZONE_CREATE_BULK_INSTANCE = [
  KEY_DNS_ZONE_CREATE_BULK_INSTANCE_DNSSEC_STATUS,
  KEY_DNS_ZONE_CREATE_BULK_INSTANCE_NAME,
  KEY_DNS_ZONE_CREATE_BULK_INSTANCE_RRSETS,
] as const satisfies (keyof DnsZoneCreateBulkInstance)[];

export const KEY_DNS_ZONE_CREATE_BULK_PAYLOAD_INSTANCES = 'instances' satisfies keyof DnsZoneCreateBulkPayload;
export const KEY_DNS_ZONE_CREATE_BULK_PAYLOAD_TEMPLATE = 'template' satisfies keyof DnsZoneCreateBulkPayload;

export const KEYS_DNS_ZONE_CREATE_BULK_PAYLOAD = [
  KEY_DNS_ZONE_CREATE_BULK_PAYLOAD_INSTANCES,
  KEY_DNS_ZONE_CREATE_BULK_PAYLOAD_TEMPLATE,
] as const satisfies (keyof DnsZoneCreateBulkPayload)[];

export const KEY_DNS_ZONE_CREATE_BULK_TEMPLATE_DNSSEC_STATUS = 'dnssec_status' satisfies keyof DnsZoneCreateBulkTemplate;
export const KEY_DNS_ZONE_CREATE_BULK_TEMPLATE_RRSETS = 'rrsets' satisfies keyof DnsZoneCreateBulkTemplate;

export const KEYS_DNS_ZONE_CREATE_BULK_TEMPLATE = [
  KEY_DNS_ZONE_CREATE_BULK_TEMPLATE_DNSSEC_STATUS,
  KEY_DNS_ZONE_CREATE_BULK_TEMPLATE_RRSETS,
] as const satisfies (keyof DnsZoneCreateBulkTemplate)[];

export const KEY_DNS_ZONE_CREATE_COMMAND_COMMAND = 'command' satisfies keyof DnsZoneCreateCommand;
export const KEY_DNS_ZONE_CREATE_COMMAND_IDEMPOTENCY_KEY = 'idempotency_key' satisfies keyof DnsZoneCreateCommand;
export const KEY_DNS_ZONE_CREATE_COMMAND_PAYLOAD = 'payload' satisfies keyof DnsZoneCreateCommand;
export const KEY_DNS_ZONE_CREATE_COMMAND_VERSION = 'version' satisfies keyof DnsZoneCreateCommand;

export const KEYS_DNS_ZONE_CREATE_COMMAND = [
  KEY_DNS_ZONE_CREATE_COMMAND_COMMAND,
  KEY_DNS_ZONE_CREATE_COMMAND_IDEMPOTENCY_KEY,
  KEY_DNS_ZONE_CREATE_COMMAND_PAYLOAD,
  KEY_DNS_ZONE_CREATE_COMMAND_VERSION,
] as const satisfies (keyof DnsZoneCreateCommand)[];

export const KEY_DNS_ZONE_CREATE_PAYLOAD_DATA_DNSSEC_STATUS = 'dnssec_status' satisfies keyof DnsZoneCreatePayloadData;
export const KEY_DNS_ZONE_CREATE_PAYLOAD_DATA_NAME = 'name' satisfies keyof DnsZoneCreatePayloadData;
export const KEY_DNS_ZONE_CREATE_PAYLOAD_DATA_RRSETS = 'rrsets' satisfies keyof DnsZoneCreatePayloadData;
export const KEY_DNS_ZONE_CREATE_PAYLOAD_DATA_VANITY_NAMESERVER_SET_ID = 'vanity_nameserver_set_id' satisfies keyof DnsZoneCreatePayloadData;

export const KEYS_DNS_ZONE_CREATE_PAYLOAD_DATA = [
  KEY_DNS_ZONE_CREATE_PAYLOAD_DATA_DNSSEC_STATUS,
  KEY_DNS_ZONE_CREATE_PAYLOAD_DATA_NAME,
  KEY_DNS_ZONE_CREATE_PAYLOAD_DATA_RRSETS,
  KEY_DNS_ZONE_CREATE_PAYLOAD_DATA_VANITY_NAMESERVER_SET_ID,
] as const satisfies (keyof DnsZoneCreatePayloadData)[];

export const KEY_DNS_ZONE_CREATE_WORKER_PAYLOAD_OPERATION = 'operation' satisfies keyof DnsZoneCreateWorkerPayload;
export const KEY_DNS_ZONE_CREATE_WORKER_PAYLOAD_TYPE = 'type' satisfies keyof DnsZoneCreateWorkerPayload;
export const KEY_DNS_ZONE_CREATE_WORKER_PAYLOAD_ZONE = 'zone' satisfies keyof DnsZoneCreateWorkerPayload;

export const KEYS_DNS_ZONE_CREATE_WORKER_PAYLOAD = [
  KEY_DNS_ZONE_CREATE_WORKER_PAYLOAD_OPERATION,
  KEY_DNS_ZONE_CREATE_WORKER_PAYLOAD_TYPE,
  KEY_DNS_ZONE_CREATE_WORKER_PAYLOAD_ZONE,
] as const satisfies (keyof DnsZoneCreateWorkerPayload)[];

export const KEY_DNS_ZONE_CREATE_WORKER_RESULT_TYPE = 'type' satisfies keyof DnsZoneCreateWorkerResult;
export const KEY_DNS_ZONE_CREATE_WORKER_RESULT_ZONE_NAME = 'zone_name' satisfies keyof DnsZoneCreateWorkerResult;

export const KEYS_DNS_ZONE_CREATE_WORKER_RESULT = [
  KEY_DNS_ZONE_CREATE_WORKER_RESULT_TYPE,
  KEY_DNS_ZONE_CREATE_WORKER_RESULT_ZONE_NAME,
] as const satisfies (keyof DnsZoneCreateWorkerResult)[];

export const KEY_DNS_ZONE_DTO_CREATED_ON = 'created_on' satisfies keyof DnsZoneDTO;
export const KEY_DNS_ZONE_DTO_DNSSEC_STATUS = 'dnssec_status' satisfies keyof DnsZoneDTO;
export const KEY_DNS_ZONE_DTO_NAME = 'name' satisfies keyof DnsZoneDTO;
export const KEY_DNS_ZONE_DTO_RRSETS = 'rrsets' satisfies keyof DnsZoneDTO;
export const KEY_DNS_ZONE_DTO_UPDATED_ON = 'updated_on' satisfies keyof DnsZoneDTO;
export const KEY_DNS_ZONE_DTO_VANITY_NAMESERVER_SET_ID = 'vanity_nameserver_set_id' satisfies keyof DnsZoneDTO;

export const KEYS_DNS_ZONE_DTO = [
  KEY_DNS_ZONE_DTO_CREATED_ON,
  KEY_DNS_ZONE_DTO_DNSSEC_STATUS,
  KEY_DNS_ZONE_DTO_NAME,
  KEY_DNS_ZONE_DTO_RRSETS,
  KEY_DNS_ZONE_DTO_UPDATED_ON,
  KEY_DNS_ZONE_DTO_VANITY_NAMESERVER_SET_ID,
] as const satisfies (keyof DnsZoneDTO)[];

export const KEY_DNS_ZONE_PATCH_RECORDS_BULK_COMMAND_COMMAND = 'command' satisfies keyof DnsZonePatchRecordsBulkCommand;
export const KEY_DNS_ZONE_PATCH_RECORDS_BULK_COMMAND_IDEMPOTENCY_KEY = 'idempotency_key' satisfies keyof DnsZonePatchRecordsBulkCommand;
export const KEY_DNS_ZONE_PATCH_RECORDS_BULK_COMMAND_PAYLOAD = 'payload' satisfies keyof DnsZonePatchRecordsBulkCommand;
export const KEY_DNS_ZONE_PATCH_RECORDS_BULK_COMMAND_VERSION = 'version' satisfies keyof DnsZonePatchRecordsBulkCommand;

export const KEYS_DNS_ZONE_PATCH_RECORDS_BULK_COMMAND = [
  KEY_DNS_ZONE_PATCH_RECORDS_BULK_COMMAND_COMMAND,
  KEY_DNS_ZONE_PATCH_RECORDS_BULK_COMMAND_IDEMPOTENCY_KEY,
  KEY_DNS_ZONE_PATCH_RECORDS_BULK_COMMAND_PAYLOAD,
  KEY_DNS_ZONE_PATCH_RECORDS_BULK_COMMAND_VERSION,
] as const satisfies (keyof DnsZonePatchRecordsBulkCommand)[];

export const KEY_DNS_ZONE_PATCH_RECORDS_BULK_INSTANCE_OPS = 'ops' satisfies keyof DnsZonePatchRecordsBulkInstance;
export const KEY_DNS_ZONE_PATCH_RECORDS_BULK_INSTANCE_ZONE_NAME = 'zone_name' satisfies keyof DnsZonePatchRecordsBulkInstance;

export const KEYS_DNS_ZONE_PATCH_RECORDS_BULK_INSTANCE = [
  KEY_DNS_ZONE_PATCH_RECORDS_BULK_INSTANCE_OPS,
  KEY_DNS_ZONE_PATCH_RECORDS_BULK_INSTANCE_ZONE_NAME,
] as const satisfies (keyof DnsZonePatchRecordsBulkInstance)[];

export const KEY_DNS_ZONE_PATCH_RECORDS_BULK_PAYLOAD_INSTANCES = 'instances' satisfies keyof DnsZonePatchRecordsBulkPayload;

export const KEYS_DNS_ZONE_PATCH_RECORDS_BULK_PAYLOAD = [
  KEY_DNS_ZONE_PATCH_RECORDS_BULK_PAYLOAD_INSTANCES,
] as const satisfies (keyof DnsZonePatchRecordsBulkPayload)[];

export const KEY_DNS_ZONE_PATCH_RECORDS_WORKER_PAYLOAD_OPERATION = 'operation' satisfies keyof DnsZonePatchRecordsWorkerPayload;
export const KEY_DNS_ZONE_PATCH_RECORDS_WORKER_PAYLOAD_TYPE = 'type' satisfies keyof DnsZonePatchRecordsWorkerPayload;
export const KEY_DNS_ZONE_PATCH_RECORDS_WORKER_PAYLOAD_ZONE = 'zone' satisfies keyof DnsZonePatchRecordsWorkerPayload;

export const KEYS_DNS_ZONE_PATCH_RECORDS_WORKER_PAYLOAD = [
  KEY_DNS_ZONE_PATCH_RECORDS_WORKER_PAYLOAD_OPERATION,
  KEY_DNS_ZONE_PATCH_RECORDS_WORKER_PAYLOAD_TYPE,
  KEY_DNS_ZONE_PATCH_RECORDS_WORKER_PAYLOAD_ZONE,
] as const satisfies (keyof DnsZonePatchRecordsWorkerPayload)[];

export const KEY_DNS_ZONE_PATCH_RRSETS_BULK_COMMAND_COMMAND = 'command' satisfies keyof DnsZonePatchRrsetsBulkCommand;
export const KEY_DNS_ZONE_PATCH_RRSETS_BULK_COMMAND_IDEMPOTENCY_KEY = 'idempotency_key' satisfies keyof DnsZonePatchRrsetsBulkCommand;
export const KEY_DNS_ZONE_PATCH_RRSETS_BULK_COMMAND_PAYLOAD = 'payload' satisfies keyof DnsZonePatchRrsetsBulkCommand;
export const KEY_DNS_ZONE_PATCH_RRSETS_BULK_COMMAND_VERSION = 'version' satisfies keyof DnsZonePatchRrsetsBulkCommand;

export const KEYS_DNS_ZONE_PATCH_RRSETS_BULK_COMMAND = [
  KEY_DNS_ZONE_PATCH_RRSETS_BULK_COMMAND_COMMAND,
  KEY_DNS_ZONE_PATCH_RRSETS_BULK_COMMAND_IDEMPOTENCY_KEY,
  KEY_DNS_ZONE_PATCH_RRSETS_BULK_COMMAND_PAYLOAD,
  KEY_DNS_ZONE_PATCH_RRSETS_BULK_COMMAND_VERSION,
] as const satisfies (keyof DnsZonePatchRrsetsBulkCommand)[];

export const KEY_DNS_ZONE_PATCH_RRSETS_BULK_INSTANCE_OPS = 'ops' satisfies keyof DnsZonePatchRrsetsBulkInstance;
export const KEY_DNS_ZONE_PATCH_RRSETS_BULK_INSTANCE_ZONE_NAME = 'zone_name' satisfies keyof DnsZonePatchRrsetsBulkInstance;

export const KEYS_DNS_ZONE_PATCH_RRSETS_BULK_INSTANCE = [
  KEY_DNS_ZONE_PATCH_RRSETS_BULK_INSTANCE_OPS,
  KEY_DNS_ZONE_PATCH_RRSETS_BULK_INSTANCE_ZONE_NAME,
] as const satisfies (keyof DnsZonePatchRrsetsBulkInstance)[];

export const KEY_DNS_ZONE_PATCH_RRSETS_BULK_PAYLOAD_INSTANCES = 'instances' satisfies keyof DnsZonePatchRrsetsBulkPayload;

export const KEYS_DNS_ZONE_PATCH_RRSETS_BULK_PAYLOAD = [
  KEY_DNS_ZONE_PATCH_RRSETS_BULK_PAYLOAD_INSTANCES,
] as const satisfies (keyof DnsZonePatchRrsetsBulkPayload)[];

export const KEY_DNS_ZONE_PATCH_RRSETS_WORKER_PAYLOAD_OPERATION = 'operation' satisfies keyof DnsZonePatchRrsetsWorkerPayload;
export const KEY_DNS_ZONE_PATCH_RRSETS_WORKER_PAYLOAD_TYPE = 'type' satisfies keyof DnsZonePatchRrsetsWorkerPayload;
export const KEY_DNS_ZONE_PATCH_RRSETS_WORKER_PAYLOAD_ZONE = 'zone' satisfies keyof DnsZonePatchRrsetsWorkerPayload;

export const KEYS_DNS_ZONE_PATCH_RRSETS_WORKER_PAYLOAD = [
  KEY_DNS_ZONE_PATCH_RRSETS_WORKER_PAYLOAD_OPERATION,
  KEY_DNS_ZONE_PATCH_RRSETS_WORKER_PAYLOAD_TYPE,
  KEY_DNS_ZONE_PATCH_RRSETS_WORKER_PAYLOAD_ZONE,
] as const satisfies (keyof DnsZonePatchRrsetsWorkerPayload)[];

export const KEY_DNS_ZONE_RECORDS_PATCH_OPS_OPS = 'ops' satisfies keyof DnsZoneRecordsPatchOps;

export const KEYS_DNS_ZONE_RECORDS_PATCH_OPS = [
  KEY_DNS_ZONE_RECORDS_PATCH_OPS_OPS,
] as const satisfies (keyof DnsZoneRecordsPatchOps)[];

export const KEY_DNS_ZONE_CREATED_ON = 'created_on' satisfies keyof DnsZone;
export const KEY_DNS_ZONE_DNS_ZONE_ID = 'dns_zone_id' satisfies keyof DnsZone;
export const KEY_DNS_ZONE_DNSSEC_STATUS = 'dnssec_status' satisfies keyof DnsZone;
export const KEY_DNS_ZONE_DOMAIN_PARTS = 'domain_parts' satisfies keyof DnsZone;
export const KEY_DNS_ZONE_NAME = 'name' satisfies keyof DnsZone;
export const KEY_DNS_ZONE_RRSETS = 'rrsets' satisfies keyof DnsZone;
export const KEY_DNS_ZONE_TAGS = 'tags' satisfies keyof DnsZone;
export const KEY_DNS_ZONE_UPDATED_ON = 'updated_on' satisfies keyof DnsZone;
export const KEY_DNS_ZONE_VANITY_NAMESERVER_SET_ID = 'vanity_nameserver_set_id' satisfies keyof DnsZone;

export const KEYS_DNS_ZONE = [
  KEY_DNS_ZONE_CREATED_ON,
  KEY_DNS_ZONE_DNS_ZONE_ID,
  KEY_DNS_ZONE_DNSSEC_STATUS,
  KEY_DNS_ZONE_DOMAIN_PARTS,
  KEY_DNS_ZONE_NAME,
  KEY_DNS_ZONE_RRSETS,
  KEY_DNS_ZONE_TAGS,
  KEY_DNS_ZONE_UPDATED_ON,
  KEY_DNS_ZONE_VANITY_NAMESERVER_SET_ID,
] as const satisfies (keyof DnsZone)[];

export const KEY_DNS_ZONE_RESTAMP_VANITY_NS_BULK_COMMAND_COMMAND = 'command' satisfies keyof DnsZoneRestampVanityNsBulkCommand;
export const KEY_DNS_ZONE_RESTAMP_VANITY_NS_BULK_COMMAND_IDEMPOTENCY_KEY = 'idempotency_key' satisfies keyof DnsZoneRestampVanityNsBulkCommand;
export const KEY_DNS_ZONE_RESTAMP_VANITY_NS_BULK_COMMAND_PAYLOAD = 'payload' satisfies keyof DnsZoneRestampVanityNsBulkCommand;
export const KEY_DNS_ZONE_RESTAMP_VANITY_NS_BULK_COMMAND_VERSION = 'version' satisfies keyof DnsZoneRestampVanityNsBulkCommand;

export const KEYS_DNS_ZONE_RESTAMP_VANITY_NS_BULK_COMMAND = [
  KEY_DNS_ZONE_RESTAMP_VANITY_NS_BULK_COMMAND_COMMAND,
  KEY_DNS_ZONE_RESTAMP_VANITY_NS_BULK_COMMAND_IDEMPOTENCY_KEY,
  KEY_DNS_ZONE_RESTAMP_VANITY_NS_BULK_COMMAND_PAYLOAD,
  KEY_DNS_ZONE_RESTAMP_VANITY_NS_BULK_COMMAND_VERSION,
] as const satisfies (keyof DnsZoneRestampVanityNsBulkCommand)[];

export const KEY_DNS_ZONE_RESTAMP_VANITY_NS_BULK_INSTANCE_NAME = 'name' satisfies keyof DnsZoneRestampVanityNsBulkInstance;
export const KEY_DNS_ZONE_RESTAMP_VANITY_NS_BULK_INSTANCE_VANITY_NAMESERVER_SET_ID = 'vanity_nameserver_set_id' satisfies keyof DnsZoneRestampVanityNsBulkInstance;

export const KEYS_DNS_ZONE_RESTAMP_VANITY_NS_BULK_INSTANCE = [
  KEY_DNS_ZONE_RESTAMP_VANITY_NS_BULK_INSTANCE_NAME,
  KEY_DNS_ZONE_RESTAMP_VANITY_NS_BULK_INSTANCE_VANITY_NAMESERVER_SET_ID,
] as const satisfies (keyof DnsZoneRestampVanityNsBulkInstance)[];

export const KEY_DNS_ZONE_RESTAMP_VANITY_NS_BULK_PAYLOAD_INSTANCES = 'instances' satisfies keyof DnsZoneRestampVanityNsBulkPayload;
export const KEY_DNS_ZONE_RESTAMP_VANITY_NS_BULK_PAYLOAD_TEMPLATE = 'template' satisfies keyof DnsZoneRestampVanityNsBulkPayload;

export const KEYS_DNS_ZONE_RESTAMP_VANITY_NS_BULK_PAYLOAD = [
  KEY_DNS_ZONE_RESTAMP_VANITY_NS_BULK_PAYLOAD_INSTANCES,
  KEY_DNS_ZONE_RESTAMP_VANITY_NS_BULK_PAYLOAD_TEMPLATE,
] as const satisfies (keyof DnsZoneRestampVanityNsBulkPayload)[];

export const KEY_DNS_ZONE_RESTAMP_VANITY_NS_BULK_TEMPLATE_VANITY_NAMESERVER_SET_ID = 'vanity_nameserver_set_id' satisfies keyof DnsZoneRestampVanityNsBulkTemplate;

export const KEYS_DNS_ZONE_RESTAMP_VANITY_NS_BULK_TEMPLATE = [
  KEY_DNS_ZONE_RESTAMP_VANITY_NS_BULK_TEMPLATE_VANITY_NAMESERVER_SET_ID,
] as const satisfies (keyof DnsZoneRestampVanityNsBulkTemplate)[];

export const KEY_DNS_ZONE_RESTAMP_VANITY_NS_WORKER_PAYLOAD_OPERATION = 'operation' satisfies keyof DnsZoneRestampVanityNsWorkerPayload;
export const KEY_DNS_ZONE_RESTAMP_VANITY_NS_WORKER_PAYLOAD_TYPE = 'type' satisfies keyof DnsZoneRestampVanityNsWorkerPayload;
export const KEY_DNS_ZONE_RESTAMP_VANITY_NS_WORKER_PAYLOAD_ZONE = 'zone' satisfies keyof DnsZoneRestampVanityNsWorkerPayload;

export const KEYS_DNS_ZONE_RESTAMP_VANITY_NS_WORKER_PAYLOAD = [
  KEY_DNS_ZONE_RESTAMP_VANITY_NS_WORKER_PAYLOAD_OPERATION,
  KEY_DNS_ZONE_RESTAMP_VANITY_NS_WORKER_PAYLOAD_TYPE,
  KEY_DNS_ZONE_RESTAMP_VANITY_NS_WORKER_PAYLOAD_ZONE,
] as const satisfies (keyof DnsZoneRestampVanityNsWorkerPayload)[];

export const KEY_DNS_ZONE_RRSETS_CREATE_RRSETS = 'rrsets' satisfies keyof DnsZoneRrsetsCreate;

export const KEYS_DNS_ZONE_RRSETS_CREATE = [
  KEY_DNS_ZONE_RRSETS_CREATE_RRSETS,
] as const satisfies (keyof DnsZoneRrsetsCreate)[];

export const KEY_DNS_ZONE_RRSETS_PATCH_OPS_OPS = 'ops' satisfies keyof DnsZoneRrsetsPatchOps;

export const KEYS_DNS_ZONE_RRSETS_PATCH_OPS = [
  KEY_DNS_ZONE_RRSETS_PATCH_OPS_OPS,
] as const satisfies (keyof DnsZoneRrsetsPatchOps)[];

export const KEY_DNS_ZONE_SUMMARY_TOTAL_ZONES = 'total_zones' satisfies keyof DnsZoneSummary;
export const KEY_DNS_ZONE_SUMMARY_ZONES_BY_DNSSEC = 'zones_by_dnssec' satisfies keyof DnsZoneSummary;

export const KEYS_DNS_ZONE_SUMMARY = [
  KEY_DNS_ZONE_SUMMARY_TOTAL_ZONES,
  KEY_DNS_ZONE_SUMMARY_ZONES_BY_DNSSEC,
] as const satisfies (keyof DnsZoneSummary)[];

export const KEY_DNS_ZONE_UPDATE_BULK_COMMAND_COMMAND = 'command' satisfies keyof DnsZoneUpdateBulkCommand;
export const KEY_DNS_ZONE_UPDATE_BULK_COMMAND_IDEMPOTENCY_KEY = 'idempotency_key' satisfies keyof DnsZoneUpdateBulkCommand;
export const KEY_DNS_ZONE_UPDATE_BULK_COMMAND_PAYLOAD = 'payload' satisfies keyof DnsZoneUpdateBulkCommand;
export const KEY_DNS_ZONE_UPDATE_BULK_COMMAND_VERSION = 'version' satisfies keyof DnsZoneUpdateBulkCommand;

export const KEYS_DNS_ZONE_UPDATE_BULK_COMMAND = [
  KEY_DNS_ZONE_UPDATE_BULK_COMMAND_COMMAND,
  KEY_DNS_ZONE_UPDATE_BULK_COMMAND_IDEMPOTENCY_KEY,
  KEY_DNS_ZONE_UPDATE_BULK_COMMAND_PAYLOAD,
  KEY_DNS_ZONE_UPDATE_BULK_COMMAND_VERSION,
] as const satisfies (keyof DnsZoneUpdateBulkCommand)[];

export const KEY_DNS_ZONE_UPDATE_BULK_INSTANCE_DNSSEC_STATUS = 'dnssec_status' satisfies keyof DnsZoneUpdateBulkInstance;
export const KEY_DNS_ZONE_UPDATE_BULK_INSTANCE_NAME = 'name' satisfies keyof DnsZoneUpdateBulkInstance;
export const KEY_DNS_ZONE_UPDATE_BULK_INSTANCE_RRSETS = 'rrsets' satisfies keyof DnsZoneUpdateBulkInstance;

export const KEYS_DNS_ZONE_UPDATE_BULK_INSTANCE = [
  KEY_DNS_ZONE_UPDATE_BULK_INSTANCE_DNSSEC_STATUS,
  KEY_DNS_ZONE_UPDATE_BULK_INSTANCE_NAME,
  KEY_DNS_ZONE_UPDATE_BULK_INSTANCE_RRSETS,
] as const satisfies (keyof DnsZoneUpdateBulkInstance)[];

export const KEY_DNS_ZONE_UPDATE_BULK_PAYLOAD_INSTANCES = 'instances' satisfies keyof DnsZoneUpdateBulkPayload;
export const KEY_DNS_ZONE_UPDATE_BULK_PAYLOAD_TEMPLATE = 'template' satisfies keyof DnsZoneUpdateBulkPayload;

export const KEYS_DNS_ZONE_UPDATE_BULK_PAYLOAD = [
  KEY_DNS_ZONE_UPDATE_BULK_PAYLOAD_INSTANCES,
  KEY_DNS_ZONE_UPDATE_BULK_PAYLOAD_TEMPLATE,
] as const satisfies (keyof DnsZoneUpdateBulkPayload)[];

export const KEY_DNS_ZONE_UPDATE_BULK_TEMPLATE_DNSSEC_STATUS = 'dnssec_status' satisfies keyof DnsZoneUpdateBulkTemplate;
export const KEY_DNS_ZONE_UPDATE_BULK_TEMPLATE_RRSETS = 'rrsets' satisfies keyof DnsZoneUpdateBulkTemplate;

export const KEYS_DNS_ZONE_UPDATE_BULK_TEMPLATE = [
  KEY_DNS_ZONE_UPDATE_BULK_TEMPLATE_DNSSEC_STATUS,
  KEY_DNS_ZONE_UPDATE_BULK_TEMPLATE_RRSETS,
] as const satisfies (keyof DnsZoneUpdateBulkTemplate)[];

export const KEY_DNS_ZONE_UPDATE_COMMAND_COMMAND = 'command' satisfies keyof DnsZoneUpdateCommand;
export const KEY_DNS_ZONE_UPDATE_COMMAND_IDEMPOTENCY_KEY = 'idempotency_key' satisfies keyof DnsZoneUpdateCommand;
export const KEY_DNS_ZONE_UPDATE_COMMAND_PAYLOAD = 'payload' satisfies keyof DnsZoneUpdateCommand;
export const KEY_DNS_ZONE_UPDATE_COMMAND_VERSION = 'version' satisfies keyof DnsZoneUpdateCommand;

export const KEYS_DNS_ZONE_UPDATE_COMMAND = [
  KEY_DNS_ZONE_UPDATE_COMMAND_COMMAND,
  KEY_DNS_ZONE_UPDATE_COMMAND_IDEMPOTENCY_KEY,
  KEY_DNS_ZONE_UPDATE_COMMAND_PAYLOAD,
  KEY_DNS_ZONE_UPDATE_COMMAND_VERSION,
] as const satisfies (keyof DnsZoneUpdateCommand)[];

export const KEY_DNS_ZONE_UPDATE_PAYLOAD_DATA_DNSSEC_STATUS = 'dnssec_status' satisfies keyof DnsZoneUpdatePayloadData;
export const KEY_DNS_ZONE_UPDATE_PAYLOAD_DATA_NAME = 'name' satisfies keyof DnsZoneUpdatePayloadData;
export const KEY_DNS_ZONE_UPDATE_PAYLOAD_DATA_RRSETS = 'rrsets' satisfies keyof DnsZoneUpdatePayloadData;
export const KEY_DNS_ZONE_UPDATE_PAYLOAD_DATA_VANITY_NAMESERVER_SET_ID = 'vanity_nameserver_set_id' satisfies keyof DnsZoneUpdatePayloadData;

export const KEYS_DNS_ZONE_UPDATE_PAYLOAD_DATA = [
  KEY_DNS_ZONE_UPDATE_PAYLOAD_DATA_DNSSEC_STATUS,
  KEY_DNS_ZONE_UPDATE_PAYLOAD_DATA_NAME,
  KEY_DNS_ZONE_UPDATE_PAYLOAD_DATA_RRSETS,
  KEY_DNS_ZONE_UPDATE_PAYLOAD_DATA_VANITY_NAMESERVER_SET_ID,
] as const satisfies (keyof DnsZoneUpdatePayloadData)[];

export const KEY_DNS_ZONE_UPDATE_WORKER_PAYLOAD_OPERATION = 'operation' satisfies keyof DnsZoneUpdateWorkerPayload;
export const KEY_DNS_ZONE_UPDATE_WORKER_PAYLOAD_TYPE = 'type' satisfies keyof DnsZoneUpdateWorkerPayload;
export const KEY_DNS_ZONE_UPDATE_WORKER_PAYLOAD_ZONE = 'zone' satisfies keyof DnsZoneUpdateWorkerPayload;

export const KEYS_DNS_ZONE_UPDATE_WORKER_PAYLOAD = [
  KEY_DNS_ZONE_UPDATE_WORKER_PAYLOAD_OPERATION,
  KEY_DNS_ZONE_UPDATE_WORKER_PAYLOAD_TYPE,
  KEY_DNS_ZONE_UPDATE_WORKER_PAYLOAD_ZONE,
] as const satisfies (keyof DnsZoneUpdateWorkerPayload)[];

export const KEY_DNS_ZONE_VANITY_SET_UPDATE_RES_ZONE = 'zone' satisfies keyof DnsZoneVanitySetUpdateRes;

export const KEYS_DNS_ZONE_VANITY_SET_UPDATE_RES = [
  KEY_DNS_ZONE_VANITY_SET_UPDATE_RES_ZONE,
] as const satisfies (keyof DnsZoneVanitySetUpdateRes)[];

export const KEY_DOMAIN_AVAILABILITY_DOMAIN = 'domain' satisfies keyof DomainAvailability;
export const KEY_DOMAIN_AVAILABILITY_STATUS = 'status' satisfies keyof DomainAvailability;

export const KEYS_DOMAIN_AVAILABILITY = [
  KEY_DOMAIN_AVAILABILITY_DOMAIN,
  KEY_DOMAIN_AVAILABILITY_STATUS,
] as const satisfies (keyof DomainAvailability)[];

export const KEY_DOMAIN_AVAILABILITY_META_PROCESSING_TIME_MS = 'processing_time_ms' satisfies keyof DomainAvailabilityMeta;
export const KEY_DOMAIN_AVAILABILITY_META_TOTAL = 'total' satisfies keyof DomainAvailabilityMeta;

export const KEYS_DOMAIN_AVAILABILITY_META = [
  KEY_DOMAIN_AVAILABILITY_META_PROCESSING_TIME_MS,
  KEY_DOMAIN_AVAILABILITY_META_TOTAL,
] as const satisfies (keyof DomainAvailabilityMeta)[];

export const KEY_DOMAIN_AVAILABILITY_REQUEST_DOMAINS = 'domains' satisfies keyof DomainAvailabilityRequest;

export const KEYS_DOMAIN_AVAILABILITY_REQUEST = [
  KEY_DOMAIN_AVAILABILITY_REQUEST_DOMAINS,
] as const satisfies (keyof DomainAvailabilityRequest)[];

export const KEY_DOMAIN_CHECK_RESULTS = 'results' satisfies keyof DomainCheck;

export const KEYS_DOMAIN_CHECK = [
  KEY_DOMAIN_CHECK_RESULTS,
] as const satisfies (keyof DomainCheck)[];

export const KEY_DOMAIN_CONTACT_CONTACT_ID = 'contact_id' satisfies keyof DomainContact;
export const KEY_DOMAIN_CONTACT_CONTACT_TYPE = 'contact_type' satisfies keyof DomainContact;

export const KEYS_DOMAIN_CONTACT = [
  KEY_DOMAIN_CONTACT_CONTACT_ID,
  KEY_DOMAIN_CONTACT_CONTACT_TYPE,
] as const satisfies (keyof DomainContact)[];

export const KEY_DOMAIN_CREATE_ATTRIBUTES = 'attributes' satisfies keyof DomainCreate;
export const KEY_DOMAIN_CREATE_AUTH_CODE = 'auth_code' satisfies keyof DomainCreate;
export const KEY_DOMAIN_CREATE_CLAIMS_NOTICE_ACCEPTANCE_HASH = 'claims_notice_acceptance_hash' satisfies keyof DomainCreate;
export const KEY_DOMAIN_CREATE_CONTACTS = 'contacts' satisfies keyof DomainCreate;
export const KEY_DOMAIN_CREATE_CREATE_ZONE = 'create_zone' satisfies keyof DomainCreate;
export const KEY_DOMAIN_CREATE_EXPECTED_PRICE = 'expected_price' satisfies keyof DomainCreate;
export const KEY_DOMAIN_CREATE_NAME = 'name' satisfies keyof DomainCreate;
export const KEY_DOMAIN_CREATE_NAMESERVERS = 'nameservers' satisfies keyof DomainCreate;
export const KEY_DOMAIN_CREATE_PERIOD = 'period' satisfies keyof DomainCreate;
export const KEY_DOMAIN_CREATE_RENEWAL_MODE = 'renewal_mode' satisfies keyof DomainCreate;

export const KEYS_DOMAIN_CREATE = [
  KEY_DOMAIN_CREATE_ATTRIBUTES,
  KEY_DOMAIN_CREATE_AUTH_CODE,
  KEY_DOMAIN_CREATE_CLAIMS_NOTICE_ACCEPTANCE_HASH,
  KEY_DOMAIN_CREATE_CONTACTS,
  KEY_DOMAIN_CREATE_CREATE_ZONE,
  KEY_DOMAIN_CREATE_EXPECTED_PRICE,
  KEY_DOMAIN_CREATE_NAME,
  KEY_DOMAIN_CREATE_NAMESERVERS,
  KEY_DOMAIN_CREATE_PERIOD,
  KEY_DOMAIN_CREATE_RENEWAL_MODE,
] as const satisfies (keyof DomainCreate)[];

export const KEY_DOMAIN_CREATE_BULK_COMMAND_COMMAND = 'command' satisfies keyof DomainCreateBulkCommand;
export const KEY_DOMAIN_CREATE_BULK_COMMAND_IDEMPOTENCY_KEY = 'idempotency_key' satisfies keyof DomainCreateBulkCommand;
export const KEY_DOMAIN_CREATE_BULK_COMMAND_PAYLOAD = 'payload' satisfies keyof DomainCreateBulkCommand;
export const KEY_DOMAIN_CREATE_BULK_COMMAND_VERSION = 'version' satisfies keyof DomainCreateBulkCommand;

export const KEYS_DOMAIN_CREATE_BULK_COMMAND = [
  KEY_DOMAIN_CREATE_BULK_COMMAND_COMMAND,
  KEY_DOMAIN_CREATE_BULK_COMMAND_IDEMPOTENCY_KEY,
  KEY_DOMAIN_CREATE_BULK_COMMAND_PAYLOAD,
  KEY_DOMAIN_CREATE_BULK_COMMAND_VERSION,
] as const satisfies (keyof DomainCreateBulkCommand)[];

export const KEY_DOMAIN_CREATE_BULK_INSTANCE_ATTRIBUTES = 'attributes' satisfies keyof DomainCreateBulkInstance;
export const KEY_DOMAIN_CREATE_BULK_INSTANCE_AUTH_CODE = 'auth_code' satisfies keyof DomainCreateBulkInstance;
export const KEY_DOMAIN_CREATE_BULK_INSTANCE_CONTACTS = 'contacts' satisfies keyof DomainCreateBulkInstance;
export const KEY_DOMAIN_CREATE_BULK_INSTANCE_CREATE_ZONE = 'create_zone' satisfies keyof DomainCreateBulkInstance;
export const KEY_DOMAIN_CREATE_BULK_INSTANCE_EXPECTED_PRICE = 'expected_price' satisfies keyof DomainCreateBulkInstance;
export const KEY_DOMAIN_CREATE_BULK_INSTANCE_NAME = 'name' satisfies keyof DomainCreateBulkInstance;
export const KEY_DOMAIN_CREATE_BULK_INSTANCE_NAMESERVERS = 'nameservers' satisfies keyof DomainCreateBulkInstance;
export const KEY_DOMAIN_CREATE_BULK_INSTANCE_PERIOD = 'period' satisfies keyof DomainCreateBulkInstance;
export const KEY_DOMAIN_CREATE_BULK_INSTANCE_RENEWAL_MODE = 'renewal_mode' satisfies keyof DomainCreateBulkInstance;

export const KEYS_DOMAIN_CREATE_BULK_INSTANCE = [
  KEY_DOMAIN_CREATE_BULK_INSTANCE_ATTRIBUTES,
  KEY_DOMAIN_CREATE_BULK_INSTANCE_AUTH_CODE,
  KEY_DOMAIN_CREATE_BULK_INSTANCE_CONTACTS,
  KEY_DOMAIN_CREATE_BULK_INSTANCE_CREATE_ZONE,
  KEY_DOMAIN_CREATE_BULK_INSTANCE_EXPECTED_PRICE,
  KEY_DOMAIN_CREATE_BULK_INSTANCE_NAME,
  KEY_DOMAIN_CREATE_BULK_INSTANCE_NAMESERVERS,
  KEY_DOMAIN_CREATE_BULK_INSTANCE_PERIOD,
  KEY_DOMAIN_CREATE_BULK_INSTANCE_RENEWAL_MODE,
] as const satisfies (keyof DomainCreateBulkInstance)[];

export const KEY_DOMAIN_CREATE_BULK_PAYLOAD_INSTANCES = 'instances' satisfies keyof DomainCreateBulkPayload;
export const KEY_DOMAIN_CREATE_BULK_PAYLOAD_TEMPLATE = 'template' satisfies keyof DomainCreateBulkPayload;

export const KEYS_DOMAIN_CREATE_BULK_PAYLOAD = [
  KEY_DOMAIN_CREATE_BULK_PAYLOAD_INSTANCES,
  KEY_DOMAIN_CREATE_BULK_PAYLOAD_TEMPLATE,
] as const satisfies (keyof DomainCreateBulkPayload)[];

export const KEY_DOMAIN_CREATE_BULK_TEMPLATE_ATTRIBUTES = 'attributes' satisfies keyof DomainCreateBulkTemplate;
export const KEY_DOMAIN_CREATE_BULK_TEMPLATE_AUTH_CODE = 'auth_code' satisfies keyof DomainCreateBulkTemplate;
export const KEY_DOMAIN_CREATE_BULK_TEMPLATE_CONTACTS = 'contacts' satisfies keyof DomainCreateBulkTemplate;
export const KEY_DOMAIN_CREATE_BULK_TEMPLATE_CREATE_ZONE = 'create_zone' satisfies keyof DomainCreateBulkTemplate;
export const KEY_DOMAIN_CREATE_BULK_TEMPLATE_NAMESERVERS = 'nameservers' satisfies keyof DomainCreateBulkTemplate;
export const KEY_DOMAIN_CREATE_BULK_TEMPLATE_PERIOD = 'period' satisfies keyof DomainCreateBulkTemplate;
export const KEY_DOMAIN_CREATE_BULK_TEMPLATE_RENEWAL_MODE = 'renewal_mode' satisfies keyof DomainCreateBulkTemplate;

export const KEYS_DOMAIN_CREATE_BULK_TEMPLATE = [
  KEY_DOMAIN_CREATE_BULK_TEMPLATE_ATTRIBUTES,
  KEY_DOMAIN_CREATE_BULK_TEMPLATE_AUTH_CODE,
  KEY_DOMAIN_CREATE_BULK_TEMPLATE_CONTACTS,
  KEY_DOMAIN_CREATE_BULK_TEMPLATE_CREATE_ZONE,
  KEY_DOMAIN_CREATE_BULK_TEMPLATE_NAMESERVERS,
  KEY_DOMAIN_CREATE_BULK_TEMPLATE_PERIOD,
  KEY_DOMAIN_CREATE_BULK_TEMPLATE_RENEWAL_MODE,
] as const satisfies (keyof DomainCreateBulkTemplate)[];

export const KEY_DOMAIN_CREATE_COMMAND_COMMAND = 'command' satisfies keyof DomainCreateCommand;
export const KEY_DOMAIN_CREATE_COMMAND_IDEMPOTENCY_KEY = 'idempotency_key' satisfies keyof DomainCreateCommand;
export const KEY_DOMAIN_CREATE_COMMAND_PAYLOAD = 'payload' satisfies keyof DomainCreateCommand;
export const KEY_DOMAIN_CREATE_COMMAND_VERSION = 'version' satisfies keyof DomainCreateCommand;

export const KEYS_DOMAIN_CREATE_COMMAND = [
  KEY_DOMAIN_CREATE_COMMAND_COMMAND,
  KEY_DOMAIN_CREATE_COMMAND_IDEMPOTENCY_KEY,
  KEY_DOMAIN_CREATE_COMMAND_PAYLOAD,
  KEY_DOMAIN_CREATE_COMMAND_VERSION,
] as const satisfies (keyof DomainCreateCommand)[];

export const KEY_DOMAIN_CREATE_PAYLOAD_DATA_ATTRIBUTES = 'attributes' satisfies keyof DomainCreatePayloadData;
export const KEY_DOMAIN_CREATE_PAYLOAD_DATA_AUTH_CODE = 'auth_code' satisfies keyof DomainCreatePayloadData;
export const KEY_DOMAIN_CREATE_PAYLOAD_DATA_CLAIMS_NOTICE_ACCEPTANCE_HASH = 'claims_notice_acceptance_hash' satisfies keyof DomainCreatePayloadData;
export const KEY_DOMAIN_CREATE_PAYLOAD_DATA_CONTACTS = 'contacts' satisfies keyof DomainCreatePayloadData;
export const KEY_DOMAIN_CREATE_PAYLOAD_DATA_CREATE_ZONE = 'create_zone' satisfies keyof DomainCreatePayloadData;
export const KEY_DOMAIN_CREATE_PAYLOAD_DATA_EXPECTED_PRICE = 'expected_price' satisfies keyof DomainCreatePayloadData;
export const KEY_DOMAIN_CREATE_PAYLOAD_DATA_NAME = 'name' satisfies keyof DomainCreatePayloadData;
export const KEY_DOMAIN_CREATE_PAYLOAD_DATA_NAMESERVERS = 'nameservers' satisfies keyof DomainCreatePayloadData;
export const KEY_DOMAIN_CREATE_PAYLOAD_DATA_PERIOD = 'period' satisfies keyof DomainCreatePayloadData;
export const KEY_DOMAIN_CREATE_PAYLOAD_DATA_RENEWAL_MODE = 'renewal_mode' satisfies keyof DomainCreatePayloadData;

export const KEYS_DOMAIN_CREATE_PAYLOAD_DATA = [
  KEY_DOMAIN_CREATE_PAYLOAD_DATA_ATTRIBUTES,
  KEY_DOMAIN_CREATE_PAYLOAD_DATA_AUTH_CODE,
  KEY_DOMAIN_CREATE_PAYLOAD_DATA_CLAIMS_NOTICE_ACCEPTANCE_HASH,
  KEY_DOMAIN_CREATE_PAYLOAD_DATA_CONTACTS,
  KEY_DOMAIN_CREATE_PAYLOAD_DATA_CREATE_ZONE,
  KEY_DOMAIN_CREATE_PAYLOAD_DATA_EXPECTED_PRICE,
  KEY_DOMAIN_CREATE_PAYLOAD_DATA_NAME,
  KEY_DOMAIN_CREATE_PAYLOAD_DATA_NAMESERVERS,
  KEY_DOMAIN_CREATE_PAYLOAD_DATA_PERIOD,
  KEY_DOMAIN_CREATE_PAYLOAD_DATA_RENEWAL_MODE,
] as const satisfies (keyof DomainCreatePayloadData)[];

export const KEY_DOMAIN_CREATE_WORKER_PAYLOAD_DOMAIN = 'domain' satisfies keyof DomainCreateWorkerPayload;
export const KEY_DOMAIN_CREATE_WORKER_PAYLOAD_OPERATION = 'operation' satisfies keyof DomainCreateWorkerPayload;
export const KEY_DOMAIN_CREATE_WORKER_PAYLOAD_TYPE = 'type' satisfies keyof DomainCreateWorkerPayload;

export const KEYS_DOMAIN_CREATE_WORKER_PAYLOAD = [
  KEY_DOMAIN_CREATE_WORKER_PAYLOAD_DOMAIN,
  KEY_DOMAIN_CREATE_WORKER_PAYLOAD_OPERATION,
  KEY_DOMAIN_CREATE_WORKER_PAYLOAD_TYPE,
] as const satisfies (keyof DomainCreateWorkerPayload)[];

export const KEY_DOMAIN_CREATE_WORKER_RESULT_DOMAIN_ID = 'domain_id' satisfies keyof DomainCreateWorkerResult;
export const KEY_DOMAIN_CREATE_WORKER_RESULT_TYPE = 'type' satisfies keyof DomainCreateWorkerResult;

export const KEYS_DOMAIN_CREATE_WORKER_RESULT = [
  KEY_DOMAIN_CREATE_WORKER_RESULT_DOMAIN_ID,
  KEY_DOMAIN_CREATE_WORKER_RESULT_TYPE,
] as const satisfies (keyof DomainCreateWorkerResult)[];

export const KEY_DOMAIN_DNSSEC_DATA_CREATE_ALGORITHM = 'algorithm' satisfies keyof DomainDnssecDataCreate;
export const KEY_DOMAIN_DNSSEC_DATA_CREATE_DIGEST = 'digest' satisfies keyof DomainDnssecDataCreate;
export const KEY_DOMAIN_DNSSEC_DATA_CREATE_DIGEST_TYPE = 'digest_type' satisfies keyof DomainDnssecDataCreate;
export const KEY_DOMAIN_DNSSEC_DATA_CREATE_FLAGS = 'flags' satisfies keyof DomainDnssecDataCreate;
export const KEY_DOMAIN_DNSSEC_DATA_CREATE_KEY_TAG = 'key_tag' satisfies keyof DomainDnssecDataCreate;
export const KEY_DOMAIN_DNSSEC_DATA_CREATE_PROTOCOL = 'protocol' satisfies keyof DomainDnssecDataCreate;
export const KEY_DOMAIN_DNSSEC_DATA_CREATE_PUBLIC_KEY = 'public_key' satisfies keyof DomainDnssecDataCreate;
export const KEY_DOMAIN_DNSSEC_DATA_CREATE_RECORD_TYPE = 'record_type' satisfies keyof DomainDnssecDataCreate;

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

export const KEY_DOMAIN_DNSSEC_DATA_ALGORITHM = 'algorithm' satisfies keyof DomainDnssecData;
export const KEY_DOMAIN_DNSSEC_DATA_CREATED_ON = 'created_on' satisfies keyof DomainDnssecData;
export const KEY_DOMAIN_DNSSEC_DATA_DIGEST = 'digest' satisfies keyof DomainDnssecData;
export const KEY_DOMAIN_DNSSEC_DATA_DIGEST_TYPE = 'digest_type' satisfies keyof DomainDnssecData;
export const KEY_DOMAIN_DNSSEC_DATA_DOMAIN_DNSSEC_DATA_ID = 'domain_dnssec_data_id' satisfies keyof DomainDnssecData;
export const KEY_DOMAIN_DNSSEC_DATA_DOMAIN_ID = 'domain_id' satisfies keyof DomainDnssecData;
export const KEY_DOMAIN_DNSSEC_DATA_FLAGS = 'flags' satisfies keyof DomainDnssecData;
export const KEY_DOMAIN_DNSSEC_DATA_KEY_TAG = 'key_tag' satisfies keyof DomainDnssecData;
export const KEY_DOMAIN_DNSSEC_DATA_PROTOCOL = 'protocol' satisfies keyof DomainDnssecData;
export const KEY_DOMAIN_DNSSEC_DATA_PUBLIC_KEY = 'public_key' satisfies keyof DomainDnssecData;
export const KEY_DOMAIN_DNSSEC_DATA_RECORD_TYPE = 'record_type' satisfies keyof DomainDnssecData;
export const KEY_DOMAIN_DNSSEC_DATA_UPDATED_ON = 'updated_on' satisfies keyof DomainDnssecData;

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

export const KEY_DOMAIN_FORWARD_CREATED_ON = 'created_on' satisfies keyof DomainForward;
export const KEY_DOMAIN_FORWARD_DOMAIN_FORWARD_ID = 'domain_forward_id' satisfies keyof DomainForward;
export const KEY_DOMAIN_FORWARD_ENABLED = 'enabled' satisfies keyof DomainForward;
export const KEY_DOMAIN_FORWARD_HOSTNAME = 'hostname' satisfies keyof DomainForward;
export const KEY_DOMAIN_FORWARD_HTTP = 'http' satisfies keyof DomainForward;
export const KEY_DOMAIN_FORWARD_HTTPS = 'https' satisfies keyof DomainForward;
export const KEY_DOMAIN_FORWARD_PARKING_ID = 'parking_id' satisfies keyof DomainForward;
export const KEY_DOMAIN_FORWARD_UPDATED_ON = 'updated_on' satisfies keyof DomainForward;

export const KEYS_DOMAIN_FORWARD = [
  KEY_DOMAIN_FORWARD_CREATED_ON,
  KEY_DOMAIN_FORWARD_DOMAIN_FORWARD_ID,
  KEY_DOMAIN_FORWARD_ENABLED,
  KEY_DOMAIN_FORWARD_HOSTNAME,
  KEY_DOMAIN_FORWARD_HTTP,
  KEY_DOMAIN_FORWARD_HTTPS,
  KEY_DOMAIN_FORWARD_PARKING_ID,
  KEY_DOMAIN_FORWARD_UPDATED_ON,
] as const satisfies (keyof DomainForward)[];

export const KEY_DOMAIN_FORWARD_BROWSER_STATS_RESULTS = 'results' satisfies keyof DomainForwardBrowserStats;

export const KEYS_DOMAIN_FORWARD_BROWSER_STATS = [
  KEY_DOMAIN_FORWARD_BROWSER_STATS_RESULTS,
] as const satisfies (keyof DomainForwardBrowserStats)[];

export const KEY_DOMAIN_FORWARD_CREATE_BULK_COMMAND_COMMAND = 'command' satisfies keyof DomainForwardCreateBulkCommand;
export const KEY_DOMAIN_FORWARD_CREATE_BULK_COMMAND_IDEMPOTENCY_KEY = 'idempotency_key' satisfies keyof DomainForwardCreateBulkCommand;
export const KEY_DOMAIN_FORWARD_CREATE_BULK_COMMAND_PAYLOAD = 'payload' satisfies keyof DomainForwardCreateBulkCommand;
export const KEY_DOMAIN_FORWARD_CREATE_BULK_COMMAND_VERSION = 'version' satisfies keyof DomainForwardCreateBulkCommand;

export const KEYS_DOMAIN_FORWARD_CREATE_BULK_COMMAND = [
  KEY_DOMAIN_FORWARD_CREATE_BULK_COMMAND_COMMAND,
  KEY_DOMAIN_FORWARD_CREATE_BULK_COMMAND_IDEMPOTENCY_KEY,
  KEY_DOMAIN_FORWARD_CREATE_BULK_COMMAND_PAYLOAD,
  KEY_DOMAIN_FORWARD_CREATE_BULK_COMMAND_VERSION,
] as const satisfies (keyof DomainForwardCreateBulkCommand)[];

export const KEY_DOMAIN_FORWARD_CREATE_BULK_INSTANCE_ENABLED = 'enabled' satisfies keyof DomainForwardCreateBulkInstance;
export const KEY_DOMAIN_FORWARD_CREATE_BULK_INSTANCE_HOSTNAME = 'hostname' satisfies keyof DomainForwardCreateBulkInstance;
export const KEY_DOMAIN_FORWARD_CREATE_BULK_INSTANCE_HTTP = 'http' satisfies keyof DomainForwardCreateBulkInstance;
export const KEY_DOMAIN_FORWARD_CREATE_BULK_INSTANCE_HTTPS = 'https' satisfies keyof DomainForwardCreateBulkInstance;

export const KEYS_DOMAIN_FORWARD_CREATE_BULK_INSTANCE = [
  KEY_DOMAIN_FORWARD_CREATE_BULK_INSTANCE_ENABLED,
  KEY_DOMAIN_FORWARD_CREATE_BULK_INSTANCE_HOSTNAME,
  KEY_DOMAIN_FORWARD_CREATE_BULK_INSTANCE_HTTP,
  KEY_DOMAIN_FORWARD_CREATE_BULK_INSTANCE_HTTPS,
] as const satisfies (keyof DomainForwardCreateBulkInstance)[];

export const KEY_DOMAIN_FORWARD_CREATE_BULK_PAYLOAD_INSTANCES = 'instances' satisfies keyof DomainForwardCreateBulkPayload;
export const KEY_DOMAIN_FORWARD_CREATE_BULK_PAYLOAD_TEMPLATE = 'template' satisfies keyof DomainForwardCreateBulkPayload;

export const KEYS_DOMAIN_FORWARD_CREATE_BULK_PAYLOAD = [
  KEY_DOMAIN_FORWARD_CREATE_BULK_PAYLOAD_INSTANCES,
  KEY_DOMAIN_FORWARD_CREATE_BULK_PAYLOAD_TEMPLATE,
] as const satisfies (keyof DomainForwardCreateBulkPayload)[];

export const KEY_DOMAIN_FORWARD_CREATE_BULK_TEMPLATE_AUTO_CREATE_ZONE = 'auto_create_zone' satisfies keyof DomainForwardCreateBulkTemplate;
export const KEY_DOMAIN_FORWARD_CREATE_BULK_TEMPLATE_ENABLED = 'enabled' satisfies keyof DomainForwardCreateBulkTemplate;
export const KEY_DOMAIN_FORWARD_CREATE_BULK_TEMPLATE_HTTP = 'http' satisfies keyof DomainForwardCreateBulkTemplate;
export const KEY_DOMAIN_FORWARD_CREATE_BULK_TEMPLATE_HTTPS = 'https' satisfies keyof DomainForwardCreateBulkTemplate;

export const KEYS_DOMAIN_FORWARD_CREATE_BULK_TEMPLATE = [
  KEY_DOMAIN_FORWARD_CREATE_BULK_TEMPLATE_AUTO_CREATE_ZONE,
  KEY_DOMAIN_FORWARD_CREATE_BULK_TEMPLATE_ENABLED,
  KEY_DOMAIN_FORWARD_CREATE_BULK_TEMPLATE_HTTP,
  KEY_DOMAIN_FORWARD_CREATE_BULK_TEMPLATE_HTTPS,
] as const satisfies (keyof DomainForwardCreateBulkTemplate)[];

export const KEY_DOMAIN_FORWARD_CREATE_REQUEST_ENABLED = 'enabled' satisfies keyof DomainForwardCreateRequest;
export const KEY_DOMAIN_FORWARD_CREATE_REQUEST_HOSTNAME = 'hostname' satisfies keyof DomainForwardCreateRequest;
export const KEY_DOMAIN_FORWARD_CREATE_REQUEST_HTTP = 'http' satisfies keyof DomainForwardCreateRequest;
export const KEY_DOMAIN_FORWARD_CREATE_REQUEST_HTTPS = 'https' satisfies keyof DomainForwardCreateRequest;

export const KEYS_DOMAIN_FORWARD_CREATE_REQUEST = [
  KEY_DOMAIN_FORWARD_CREATE_REQUEST_ENABLED,
  KEY_DOMAIN_FORWARD_CREATE_REQUEST_HOSTNAME,
  KEY_DOMAIN_FORWARD_CREATE_REQUEST_HTTP,
  KEY_DOMAIN_FORWARD_CREATE_REQUEST_HTTPS,
] as const satisfies (keyof DomainForwardCreateRequest)[];

export const KEY_DOMAIN_FORWARD_DELETE_BULK_COMMAND_COMMAND = 'command' satisfies keyof DomainForwardDeleteBulkCommand;
export const KEY_DOMAIN_FORWARD_DELETE_BULK_COMMAND_IDEMPOTENCY_KEY = 'idempotency_key' satisfies keyof DomainForwardDeleteBulkCommand;
export const KEY_DOMAIN_FORWARD_DELETE_BULK_COMMAND_PAYLOAD = 'payload' satisfies keyof DomainForwardDeleteBulkCommand;
export const KEY_DOMAIN_FORWARD_DELETE_BULK_COMMAND_VERSION = 'version' satisfies keyof DomainForwardDeleteBulkCommand;

export const KEYS_DOMAIN_FORWARD_DELETE_BULK_COMMAND = [
  KEY_DOMAIN_FORWARD_DELETE_BULK_COMMAND_COMMAND,
  KEY_DOMAIN_FORWARD_DELETE_BULK_COMMAND_IDEMPOTENCY_KEY,
  KEY_DOMAIN_FORWARD_DELETE_BULK_COMMAND_PAYLOAD,
  KEY_DOMAIN_FORWARD_DELETE_BULK_COMMAND_VERSION,
] as const satisfies (keyof DomainForwardDeleteBulkCommand)[];

export const KEY_DOMAIN_FORWARD_DELETE_BULK_INSTANCE_HOSTNAME = 'hostname' satisfies keyof DomainForwardDeleteBulkInstance;

export const KEYS_DOMAIN_FORWARD_DELETE_BULK_INSTANCE = [
  KEY_DOMAIN_FORWARD_DELETE_BULK_INSTANCE_HOSTNAME,
] as const satisfies (keyof DomainForwardDeleteBulkInstance)[];

export const KEY_DOMAIN_FORWARD_DELETE_BULK_PAYLOAD_INSTANCES = 'instances' satisfies keyof DomainForwardDeleteBulkPayload;

export const KEYS_DOMAIN_FORWARD_DELETE_BULK_PAYLOAD = [
  KEY_DOMAIN_FORWARD_DELETE_BULK_PAYLOAD_INSTANCES,
] as const satisfies (keyof DomainForwardDeleteBulkPayload)[];

export const KEY_DOMAIN_FORWARD_DISABLE_BULK_COMMAND_COMMAND = 'command' satisfies keyof DomainForwardDisableBulkCommand;
export const KEY_DOMAIN_FORWARD_DISABLE_BULK_COMMAND_IDEMPOTENCY_KEY = 'idempotency_key' satisfies keyof DomainForwardDisableBulkCommand;
export const KEY_DOMAIN_FORWARD_DISABLE_BULK_COMMAND_PAYLOAD = 'payload' satisfies keyof DomainForwardDisableBulkCommand;
export const KEY_DOMAIN_FORWARD_DISABLE_BULK_COMMAND_VERSION = 'version' satisfies keyof DomainForwardDisableBulkCommand;

export const KEYS_DOMAIN_FORWARD_DISABLE_BULK_COMMAND = [
  KEY_DOMAIN_FORWARD_DISABLE_BULK_COMMAND_COMMAND,
  KEY_DOMAIN_FORWARD_DISABLE_BULK_COMMAND_IDEMPOTENCY_KEY,
  KEY_DOMAIN_FORWARD_DISABLE_BULK_COMMAND_PAYLOAD,
  KEY_DOMAIN_FORWARD_DISABLE_BULK_COMMAND_VERSION,
] as const satisfies (keyof DomainForwardDisableBulkCommand)[];

export const KEY_DOMAIN_FORWARD_DISABLE_BULK_INSTANCE_HOSTNAME = 'hostname' satisfies keyof DomainForwardDisableBulkInstance;

export const KEYS_DOMAIN_FORWARD_DISABLE_BULK_INSTANCE = [
  KEY_DOMAIN_FORWARD_DISABLE_BULK_INSTANCE_HOSTNAME,
] as const satisfies (keyof DomainForwardDisableBulkInstance)[];

export const KEY_DOMAIN_FORWARD_DISABLE_BULK_PAYLOAD_INSTANCES = 'instances' satisfies keyof DomainForwardDisableBulkPayload;

export const KEYS_DOMAIN_FORWARD_DISABLE_BULK_PAYLOAD = [
  KEY_DOMAIN_FORWARD_DISABLE_BULK_PAYLOAD_INSTANCES,
] as const satisfies (keyof DomainForwardDisableBulkPayload)[];

export const KEY_DOMAIN_FORWARD_ENABLE_BULK_COMMAND_COMMAND = 'command' satisfies keyof DomainForwardEnableBulkCommand;
export const KEY_DOMAIN_FORWARD_ENABLE_BULK_COMMAND_IDEMPOTENCY_KEY = 'idempotency_key' satisfies keyof DomainForwardEnableBulkCommand;
export const KEY_DOMAIN_FORWARD_ENABLE_BULK_COMMAND_PAYLOAD = 'payload' satisfies keyof DomainForwardEnableBulkCommand;
export const KEY_DOMAIN_FORWARD_ENABLE_BULK_COMMAND_VERSION = 'version' satisfies keyof DomainForwardEnableBulkCommand;

export const KEYS_DOMAIN_FORWARD_ENABLE_BULK_COMMAND = [
  KEY_DOMAIN_FORWARD_ENABLE_BULK_COMMAND_COMMAND,
  KEY_DOMAIN_FORWARD_ENABLE_BULK_COMMAND_IDEMPOTENCY_KEY,
  KEY_DOMAIN_FORWARD_ENABLE_BULK_COMMAND_PAYLOAD,
  KEY_DOMAIN_FORWARD_ENABLE_BULK_COMMAND_VERSION,
] as const satisfies (keyof DomainForwardEnableBulkCommand)[];

export const KEY_DOMAIN_FORWARD_ENABLE_BULK_INSTANCE_HOSTNAME = 'hostname' satisfies keyof DomainForwardEnableBulkInstance;

export const KEYS_DOMAIN_FORWARD_ENABLE_BULK_INSTANCE = [
  KEY_DOMAIN_FORWARD_ENABLE_BULK_INSTANCE_HOSTNAME,
] as const satisfies (keyof DomainForwardEnableBulkInstance)[];

export const KEY_DOMAIN_FORWARD_ENABLE_BULK_PAYLOAD_INSTANCES = 'instances' satisfies keyof DomainForwardEnableBulkPayload;

export const KEYS_DOMAIN_FORWARD_ENABLE_BULK_PAYLOAD = [
  KEY_DOMAIN_FORWARD_ENABLE_BULK_PAYLOAD_INSTANCES,
] as const satisfies (keyof DomainForwardEnableBulkPayload)[];

export const KEY_DOMAIN_FORWARD_GEO_STATS_RESULTS = 'results' satisfies keyof DomainForwardGeoStats;

export const KEYS_DOMAIN_FORWARD_GEO_STATS = [
  KEY_DOMAIN_FORWARD_GEO_STATS_RESULTS,
] as const satisfies (keyof DomainForwardGeoStats)[];

export const KEY_DOMAIN_FORWARD_METRICS_CONFIGURED_FORWARDS = 'configured_forwards' satisfies keyof DomainForwardMetrics;
export const KEY_DOMAIN_FORWARD_METRICS_INVOKED_FORWARDS = 'invoked_forwards' satisfies keyof DomainForwardMetrics;
export const KEY_DOMAIN_FORWARD_METRICS_TOTAL_VISITS = 'total_visits' satisfies keyof DomainForwardMetrics;
export const KEY_DOMAIN_FORWARD_METRICS_UNIQUE_VISITS = 'unique_visits' satisfies keyof DomainForwardMetrics;

export const KEYS_DOMAIN_FORWARD_METRICS = [
  KEY_DOMAIN_FORWARD_METRICS_CONFIGURED_FORWARDS,
  KEY_DOMAIN_FORWARD_METRICS_INVOKED_FORWARDS,
  KEY_DOMAIN_FORWARD_METRICS_TOTAL_VISITS,
  KEY_DOMAIN_FORWARD_METRICS_UNIQUE_VISITS,
] as const satisfies (keyof DomainForwardMetrics)[];

export const KEY_DOMAIN_FORWARD_METRICS_TIME_SERIES_RESULTS = 'results' satisfies keyof DomainForwardMetricsTimeSeries;

export const KEYS_DOMAIN_FORWARD_METRICS_TIME_SERIES = [
  KEY_DOMAIN_FORWARD_METRICS_TIME_SERIES_RESULTS,
] as const satisfies (keyof DomainForwardMetricsTimeSeries)[];

export const KEY_DOMAIN_FORWARD_PATCH_OP_OP = 'op' satisfies keyof DomainForwardPatchOp;
export const KEY_DOMAIN_FORWARD_PATCH_OP_REDIRECT = 'redirect' satisfies keyof DomainForwardPatchOp;

export const KEYS_DOMAIN_FORWARD_PATCH_OP = [
  KEY_DOMAIN_FORWARD_PATCH_OP_OP,
  KEY_DOMAIN_FORWARD_PATCH_OP_REDIRECT,
] as const satisfies (keyof DomainForwardPatchOp)[];

export const KEY_DOMAIN_FORWARD_PATCH_OPS_OPS = 'ops' satisfies keyof DomainForwardPatchOps;

export const KEYS_DOMAIN_FORWARD_PATCH_OPS = [
  KEY_DOMAIN_FORWARD_PATCH_OPS_OPS,
] as const satisfies (keyof DomainForwardPatchOps)[];

export const KEY_DOMAIN_FORWARD_PLATFORM_STATS_RESULTS = 'results' satisfies keyof DomainForwardPlatformStats;

export const KEYS_DOMAIN_FORWARD_PLATFORM_STATS = [
  KEY_DOMAIN_FORWARD_PLATFORM_STATS_RESULTS,
] as const satisfies (keyof DomainForwardPlatformStats)[];

export const KEY_DOMAIN_FORWARD_PROTOCOL_SET_REQUEST_REDIRECTS = 'redirects' satisfies keyof DomainForwardProtocolSetRequest;

export const KEYS_DOMAIN_FORWARD_PROTOCOL_SET_REQUEST = [
  KEY_DOMAIN_FORWARD_PROTOCOL_SET_REQUEST_REDIRECTS,
] as const satisfies (keyof DomainForwardProtocolSetRequest)[];

export const KEY_DOMAIN_FORWARD_PROTOCOL_SET_CREATED_ON = 'created_on' satisfies keyof DomainForwardProtocolSet;
export const KEY_DOMAIN_FORWARD_PROTOCOL_SET_REDIRECTS = 'redirects' satisfies keyof DomainForwardProtocolSet;
export const KEY_DOMAIN_FORWARD_PROTOCOL_SET_UPDATED_ON = 'updated_on' satisfies keyof DomainForwardProtocolSet;

export const KEYS_DOMAIN_FORWARD_PROTOCOL_SET = [
  KEY_DOMAIN_FORWARD_PROTOCOL_SET_CREATED_ON,
  KEY_DOMAIN_FORWARD_PROTOCOL_SET_REDIRECTS,
  KEY_DOMAIN_FORWARD_PROTOCOL_SET_UPDATED_ON,
] as const satisfies (keyof DomainForwardProtocolSet)[];

export const KEY_DOMAIN_FORWARD_REFERRER_STATS_RESULTS = 'results' satisfies keyof DomainForwardReferrerStats;

export const KEYS_DOMAIN_FORWARD_REFERRER_STATS = [
  KEY_DOMAIN_FORWARD_REFERRER_STATS_RESULTS,
] as const satisfies (keyof DomainForwardReferrerStats)[];

export const KEY_DOMAIN_FORWARD_SET_CREATE_REQUEST_PROTOCOL = 'protocol' satisfies keyof DomainForwardSetCreateRequest;
export const KEY_DOMAIN_FORWARD_SET_CREATE_REQUEST_REDIRECTS = 'redirects' satisfies keyof DomainForwardSetCreateRequest;

export const KEYS_DOMAIN_FORWARD_SET_CREATE_REQUEST = [
  KEY_DOMAIN_FORWARD_SET_CREATE_REQUEST_PROTOCOL,
  KEY_DOMAIN_FORWARD_SET_CREATE_REQUEST_REDIRECTS,
] as const satisfies (keyof DomainForwardSetCreateRequest)[];

export const KEY_DOMAIN_FORWARD_SET_REQUEST_REDIRECTS = 'redirects' satisfies keyof DomainForwardSetRequest;

export const KEYS_DOMAIN_FORWARD_SET_REQUEST = [
  KEY_DOMAIN_FORWARD_SET_REQUEST_REDIRECTS,
] as const satisfies (keyof DomainForwardSetRequest)[];

export const KEY_DOMAIN_FORWARD_SET_CREATED_ON = 'created_on' satisfies keyof DomainForwardSet;
export const KEY_DOMAIN_FORWARD_SET_HOSTNAME = 'hostname' satisfies keyof DomainForwardSet;
export const KEY_DOMAIN_FORWARD_SET_PROTOCOL = 'protocol' satisfies keyof DomainForwardSet;
export const KEY_DOMAIN_FORWARD_SET_REDIRECTS = 'redirects' satisfies keyof DomainForwardSet;
export const KEY_DOMAIN_FORWARD_SET_UPDATED_ON = 'updated_on' satisfies keyof DomainForwardSet;

export const KEYS_DOMAIN_FORWARD_SET = [
  KEY_DOMAIN_FORWARD_SET_CREATED_ON,
  KEY_DOMAIN_FORWARD_SET_HOSTNAME,
  KEY_DOMAIN_FORWARD_SET_PROTOCOL,
  KEY_DOMAIN_FORWARD_SET_REDIRECTS,
  KEY_DOMAIN_FORWARD_SET_UPDATED_ON,
] as const satisfies (keyof DomainForwardSet)[];

export const KEY_DOMAIN_FORWARD_STATUS_CODE_STATS_RESULTS = 'results' satisfies keyof DomainForwardStatusCodeStats;

export const KEYS_DOMAIN_FORWARD_STATUS_CODE_STATS = [
  KEY_DOMAIN_FORWARD_STATUS_CODE_STATS_RESULTS,
] as const satisfies (keyof DomainForwardStatusCodeStats)[];

export const KEY_DOMAIN_FORWARD_UPDATE_BULK_COMMAND_COMMAND = 'command' satisfies keyof DomainForwardUpdateBulkCommand;
export const KEY_DOMAIN_FORWARD_UPDATE_BULK_COMMAND_IDEMPOTENCY_KEY = 'idempotency_key' satisfies keyof DomainForwardUpdateBulkCommand;
export const KEY_DOMAIN_FORWARD_UPDATE_BULK_COMMAND_PAYLOAD = 'payload' satisfies keyof DomainForwardUpdateBulkCommand;
export const KEY_DOMAIN_FORWARD_UPDATE_BULK_COMMAND_VERSION = 'version' satisfies keyof DomainForwardUpdateBulkCommand;

export const KEYS_DOMAIN_FORWARD_UPDATE_BULK_COMMAND = [
  KEY_DOMAIN_FORWARD_UPDATE_BULK_COMMAND_COMMAND,
  KEY_DOMAIN_FORWARD_UPDATE_BULK_COMMAND_IDEMPOTENCY_KEY,
  KEY_DOMAIN_FORWARD_UPDATE_BULK_COMMAND_PAYLOAD,
  KEY_DOMAIN_FORWARD_UPDATE_BULK_COMMAND_VERSION,
] as const satisfies (keyof DomainForwardUpdateBulkCommand)[];

export const KEY_DOMAIN_FORWARD_UPDATE_BULK_INSTANCE_ENABLED = 'enabled' satisfies keyof DomainForwardUpdateBulkInstance;
export const KEY_DOMAIN_FORWARD_UPDATE_BULK_INSTANCE_HOSTNAME = 'hostname' satisfies keyof DomainForwardUpdateBulkInstance;
export const KEY_DOMAIN_FORWARD_UPDATE_BULK_INSTANCE_HTTP = 'http' satisfies keyof DomainForwardUpdateBulkInstance;
export const KEY_DOMAIN_FORWARD_UPDATE_BULK_INSTANCE_HTTPS = 'https' satisfies keyof DomainForwardUpdateBulkInstance;

export const KEYS_DOMAIN_FORWARD_UPDATE_BULK_INSTANCE = [
  KEY_DOMAIN_FORWARD_UPDATE_BULK_INSTANCE_ENABLED,
  KEY_DOMAIN_FORWARD_UPDATE_BULK_INSTANCE_HOSTNAME,
  KEY_DOMAIN_FORWARD_UPDATE_BULK_INSTANCE_HTTP,
  KEY_DOMAIN_FORWARD_UPDATE_BULK_INSTANCE_HTTPS,
] as const satisfies (keyof DomainForwardUpdateBulkInstance)[];

export const KEY_DOMAIN_FORWARD_UPDATE_BULK_PAYLOAD_INSTANCES = 'instances' satisfies keyof DomainForwardUpdateBulkPayload;
export const KEY_DOMAIN_FORWARD_UPDATE_BULK_PAYLOAD_TEMPLATE = 'template' satisfies keyof DomainForwardUpdateBulkPayload;

export const KEYS_DOMAIN_FORWARD_UPDATE_BULK_PAYLOAD = [
  KEY_DOMAIN_FORWARD_UPDATE_BULK_PAYLOAD_INSTANCES,
  KEY_DOMAIN_FORWARD_UPDATE_BULK_PAYLOAD_TEMPLATE,
] as const satisfies (keyof DomainForwardUpdateBulkPayload)[];

export const KEY_DOMAIN_FORWARD_UPDATE_BULK_TEMPLATE_ENABLED = 'enabled' satisfies keyof DomainForwardUpdateBulkTemplate;
export const KEY_DOMAIN_FORWARD_UPDATE_BULK_TEMPLATE_HTTP = 'http' satisfies keyof DomainForwardUpdateBulkTemplate;
export const KEY_DOMAIN_FORWARD_UPDATE_BULK_TEMPLATE_HTTPS = 'https' satisfies keyof DomainForwardUpdateBulkTemplate;

export const KEYS_DOMAIN_FORWARD_UPDATE_BULK_TEMPLATE = [
  KEY_DOMAIN_FORWARD_UPDATE_BULK_TEMPLATE_ENABLED,
  KEY_DOMAIN_FORWARD_UPDATE_BULK_TEMPLATE_HTTP,
  KEY_DOMAIN_FORWARD_UPDATE_BULK_TEMPLATE_HTTPS,
] as const satisfies (keyof DomainForwardUpdateBulkTemplate)[];

export const KEY_DOMAIN_FORWARD_USER_AGENT_STATS_RESULTS = 'results' satisfies keyof DomainForwardUserAgentStats;

export const KEYS_DOMAIN_FORWARD_USER_AGENT_STATS = [
  KEY_DOMAIN_FORWARD_USER_AGENT_STATS_RESULTS,
] as const satisfies (keyof DomainForwardUserAgentStats)[];

export const KEY_DOMAIN_FORWARD_VISITS_BY_KEY_RESULTS = 'results' satisfies keyof DomainForwardVisitsByKey;

export const KEYS_DOMAIN_FORWARD_VISITS_BY_KEY = [
  KEY_DOMAIN_FORWARD_VISITS_BY_KEY_RESULTS,
] as const satisfies (keyof DomainForwardVisitsByKey)[];

export const KEY_DOMAIN_FORWARD_ZONE_DOMAIN_FORWARDS = 'domain_forwards' satisfies keyof DomainForwardZone;
export const KEY_DOMAIN_FORWARD_ZONE_ZONE_ID = 'zone_id' satisfies keyof DomainForwardZone;
export const KEY_DOMAIN_FORWARD_ZONE_ZONE_NAME = 'zone_name' satisfies keyof DomainForwardZone;

export const KEYS_DOMAIN_FORWARD_ZONE = [
  KEY_DOMAIN_FORWARD_ZONE_DOMAIN_FORWARDS,
  KEY_DOMAIN_FORWARD_ZONE_ZONE_ID,
  KEY_DOMAIN_FORWARD_ZONE_ZONE_NAME,
] as const satisfies (keyof DomainForwardZone)[];

export const KEY_DOMAIN_FORWARDS_CONTEXT_CONTEXT_ID = 'context_id' satisfies keyof DomainForwardsContext;
export const KEY_DOMAIN_FORWARDS_CONTEXT_CONVERSATION_ID = 'conversation_id' satisfies keyof DomainForwardsContext;
export const KEY_DOMAIN_FORWARDS_CONTEXT_CREATED_AT = 'created_at' satisfies keyof DomainForwardsContext;
export const KEY_DOMAIN_FORWARDS_CONTEXT_KIND = 'kind' satisfies keyof DomainForwardsContext;
export const KEY_DOMAIN_FORWARDS_CONTEXT_ORGANIZATION_ID = 'organization_id' satisfies keyof DomainForwardsContext;
export const KEY_DOMAIN_FORWARDS_CONTEXT_PAYLOAD = 'payload' satisfies keyof DomainForwardsContext;
export const KEY_DOMAIN_FORWARDS_CONTEXT_USER_ID = 'user_id' satisfies keyof DomainForwardsContext;

export const KEYS_DOMAIN_FORWARDS_CONTEXT = [
  KEY_DOMAIN_FORWARDS_CONTEXT_CONTEXT_ID,
  KEY_DOMAIN_FORWARDS_CONTEXT_CONVERSATION_ID,
  KEY_DOMAIN_FORWARDS_CONTEXT_CREATED_AT,
  KEY_DOMAIN_FORWARDS_CONTEXT_KIND,
  KEY_DOMAIN_FORWARDS_CONTEXT_ORGANIZATION_ID,
  KEY_DOMAIN_FORWARDS_CONTEXT_PAYLOAD,
  KEY_DOMAIN_FORWARDS_CONTEXT_USER_ID,
] as const satisfies (keyof DomainForwardsContext)[];

export const KEY_DOMAIN_FORWARDS_CONTEXT_CREATE_KIND = 'kind' satisfies keyof DomainForwardsContextCreate;
export const KEY_DOMAIN_FORWARDS_CONTEXT_CREATE_PAYLOAD = 'payload' satisfies keyof DomainForwardsContextCreate;

export const KEYS_DOMAIN_FORWARDS_CONTEXT_CREATE = [
  KEY_DOMAIN_FORWARDS_CONTEXT_CREATE_KIND,
  KEY_DOMAIN_FORWARDS_CONTEXT_CREATE_PAYLOAD,
] as const satisfies (keyof DomainForwardsContextCreate)[];

export const KEY_DOMAIN_HOST_HOST_ID = 'host_id' satisfies keyof DomainHost;

export const KEYS_DOMAIN_HOST = [
  KEY_DOMAIN_HOST_HOST_ID,
] as const satisfies (keyof DomainHost)[];

export const KEY_DOMAIN_LIFECYCLE_BASE_ADD_GRACE_PERIOD = 'add_grace_period' satisfies keyof DomainLifecycleBase;
export const KEY_DOMAIN_LIFECYCLE_BASE_AUTO_RENEW_BEFORE_EXPIRATION = 'auto_renew_before_expiration' satisfies keyof DomainLifecycleBase;
export const KEY_DOMAIN_LIFECYCLE_BASE_DEFAULT_TRANSFER_RENEWAL_PERIOD = 'default_transfer_renewal_period' satisfies keyof DomainLifecycleBase;
export const KEY_DOMAIN_LIFECYCLE_BASE_DELETE_BEFORE_EXPIRATION = 'delete_before_expiration' satisfies keyof DomainLifecycleBase;
export const KEY_DOMAIN_LIFECYCLE_BASE_DELETE_POLICY = 'delete_policy' satisfies keyof DomainLifecycleBase;
export const KEY_DOMAIN_LIFECYCLE_BASE_EXPLICIT_RENEW = 'explicit_renew' satisfies keyof DomainLifecycleBase;
export const KEY_DOMAIN_LIFECYCLE_BASE_GRACE_PERIOD = 'grace_period' satisfies keyof DomainLifecycleBase;
export const KEY_DOMAIN_LIFECYCLE_BASE_PENDING_DELETE = 'pending_delete' satisfies keyof DomainLifecycleBase;
export const KEY_DOMAIN_LIFECYCLE_BASE_REDEMPTION_PERIOD = 'redemption_period' satisfies keyof DomainLifecycleBase;
export const KEY_DOMAIN_LIFECYCLE_BASE_REGISTRATION_PERIODS = 'registration_periods' satisfies keyof DomainLifecycleBase;
export const KEY_DOMAIN_LIFECYCLE_BASE_REGISTRY_AUTO_RENEW = 'registry_auto_renew' satisfies keyof DomainLifecycleBase;
export const KEY_DOMAIN_LIFECYCLE_BASE_RENEWAL_PERIODS = 'renewal_periods' satisfies keyof DomainLifecycleBase;
export const KEY_DOMAIN_LIFECYCLE_BASE_RGP_OPERATIONS = 'rgp_operations' satisfies keyof DomainLifecycleBase;
export const KEY_DOMAIN_LIFECYCLE_BASE_SYNC_AFTER_OPERATIONS = 'sync_after_operations' satisfies keyof DomainLifecycleBase;
export const KEY_DOMAIN_LIFECYCLE_BASE_TRANSFER_GRACE_PERIOD = 'transfer_grace_period' satisfies keyof DomainLifecycleBase;
export const KEY_DOMAIN_LIFECYCLE_BASE_TRANSFER_RENEWAL_PERIODS = 'transfer_renewal_periods' satisfies keyof DomainLifecycleBase;

export const KEYS_DOMAIN_LIFECYCLE_BASE = [
  KEY_DOMAIN_LIFECYCLE_BASE_ADD_GRACE_PERIOD,
  KEY_DOMAIN_LIFECYCLE_BASE_AUTO_RENEW_BEFORE_EXPIRATION,
  KEY_DOMAIN_LIFECYCLE_BASE_DEFAULT_TRANSFER_RENEWAL_PERIOD,
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
  KEY_DOMAIN_LIFECYCLE_BASE_TRANSFER_GRACE_PERIOD,
  KEY_DOMAIN_LIFECYCLE_BASE_TRANSFER_RENEWAL_PERIODS,
] as const satisfies (keyof DomainLifecycleBase)[];

export const KEY_DOMAIN_NAME_PARTS_DOMAIN = 'domain' satisfies keyof DomainNameParts;
export const KEY_DOMAIN_NAME_PARTS_SUBDOMAIN = 'subdomain' satisfies keyof DomainNameParts;
export const KEY_DOMAIN_NAME_PARTS_SUFFIX = 'suffix' satisfies keyof DomainNameParts;

export const KEYS_DOMAIN_NAME_PARTS = [
  KEY_DOMAIN_NAME_PARTS_DOMAIN,
  KEY_DOMAIN_NAME_PARTS_SUBDOMAIN,
  KEY_DOMAIN_NAME_PARTS_SUFFIX,
] as const satisfies (keyof DomainNameParts)[];

export const KEY_DOMAIN_PERIOD_UNIT = 'unit' satisfies keyof DomainPeriod;
export const KEY_DOMAIN_PERIOD_VALUE = 'value' satisfies keyof DomainPeriod;

export const KEYS_DOMAIN_PERIOD = [
  KEY_DOMAIN_PERIOD_UNIT,
  KEY_DOMAIN_PERIOD_VALUE,
] as const satisfies (keyof DomainPeriod)[];

export const KEY_DOMAIN_RECOMMENDATIONS_CONTEXT_CONTEXT_ID = 'context_id' satisfies keyof DomainRecommendationsContext;
export const KEY_DOMAIN_RECOMMENDATIONS_CONTEXT_CONVERSATION_ID = 'conversation_id' satisfies keyof DomainRecommendationsContext;
export const KEY_DOMAIN_RECOMMENDATIONS_CONTEXT_CREATED_AT = 'created_at' satisfies keyof DomainRecommendationsContext;
export const KEY_DOMAIN_RECOMMENDATIONS_CONTEXT_KIND = 'kind' satisfies keyof DomainRecommendationsContext;
export const KEY_DOMAIN_RECOMMENDATIONS_CONTEXT_ORGANIZATION_ID = 'organization_id' satisfies keyof DomainRecommendationsContext;
export const KEY_DOMAIN_RECOMMENDATIONS_CONTEXT_PAYLOAD = 'payload' satisfies keyof DomainRecommendationsContext;
export const KEY_DOMAIN_RECOMMENDATIONS_CONTEXT_USER_ID = 'user_id' satisfies keyof DomainRecommendationsContext;

export const KEYS_DOMAIN_RECOMMENDATIONS_CONTEXT = [
  KEY_DOMAIN_RECOMMENDATIONS_CONTEXT_CONTEXT_ID,
  KEY_DOMAIN_RECOMMENDATIONS_CONTEXT_CONVERSATION_ID,
  KEY_DOMAIN_RECOMMENDATIONS_CONTEXT_CREATED_AT,
  KEY_DOMAIN_RECOMMENDATIONS_CONTEXT_KIND,
  KEY_DOMAIN_RECOMMENDATIONS_CONTEXT_ORGANIZATION_ID,
  KEY_DOMAIN_RECOMMENDATIONS_CONTEXT_PAYLOAD,
  KEY_DOMAIN_RECOMMENDATIONS_CONTEXT_USER_ID,
] as const satisfies (keyof DomainRecommendationsContext)[];

export const KEY_DOMAIN_RECOMMENDATIONS_CONTEXT_CREATE_KIND = 'kind' satisfies keyof DomainRecommendationsContextCreate;
export const KEY_DOMAIN_RECOMMENDATIONS_CONTEXT_CREATE_PAYLOAD = 'payload' satisfies keyof DomainRecommendationsContextCreate;

export const KEYS_DOMAIN_RECOMMENDATIONS_CONTEXT_CREATE = [
  KEY_DOMAIN_RECOMMENDATIONS_CONTEXT_CREATE_KIND,
  KEY_DOMAIN_RECOMMENDATIONS_CONTEXT_CREATE_PAYLOAD,
] as const satisfies (keyof DomainRecommendationsContextCreate)[];

export const KEY_DOMAIN_RENEW_REQUEST_CURRENT_EXPIRY_DATE = 'current_expiry_date' satisfies keyof DomainRenewRequest;
export const KEY_DOMAIN_RENEW_REQUEST_EXPECTED_PRICE = 'expected_price' satisfies keyof DomainRenewRequest;
export const KEY_DOMAIN_RENEW_REQUEST_PERIOD = 'period' satisfies keyof DomainRenewRequest;

export const KEYS_DOMAIN_RENEW_REQUEST = [
  KEY_DOMAIN_RENEW_REQUEST_CURRENT_EXPIRY_DATE,
  KEY_DOMAIN_RENEW_REQUEST_EXPECTED_PRICE,
  KEY_DOMAIN_RENEW_REQUEST_PERIOD,
] as const satisfies (keyof DomainRenewRequest)[];

export const KEY_DOMAIN_RENEW_NAME = 'name' satisfies keyof DomainRenew;
export const KEY_DOMAIN_RENEW_NEW_EXPIRY_DATE = 'new_expiry_date' satisfies keyof DomainRenew;
export const KEY_DOMAIN_RENEW_PERIOD_EXTENDED = 'period_extended' satisfies keyof DomainRenew;

export const KEYS_DOMAIN_RENEW = [
  KEY_DOMAIN_RENEW_NAME,
  KEY_DOMAIN_RENEW_NEW_EXPIRY_DATE,
  KEY_DOMAIN_RENEW_PERIOD_EXTENDED,
] as const satisfies (keyof DomainRenew)[];

export const KEY_DOMAIN_RENEWAL_DETAILS_DETAIL_TYPE = 'detail_type' satisfies keyof DomainRenewalDetails;
export const KEY_DOMAIN_RENEWAL_DETAILS_EXPIRES_ON = 'expires_on' satisfies keyof DomainRenewalDetails;

export const KEYS_DOMAIN_RENEWAL_DETAILS = [
  KEY_DOMAIN_RENEWAL_DETAILS_DETAIL_TYPE,
  KEY_DOMAIN_RENEWAL_DETAILS_EXPIRES_ON,
] as const satisfies (keyof DomainRenewalDetails)[];

export const KEY_DOMAIN_AUTH_CODE = 'auth_code' satisfies keyof Domain;
export const KEY_DOMAIN_AUTH_CODE_EXPIRES_ON = 'auth_code_expires_on' satisfies keyof Domain;
export const KEY_DOMAIN_CANCELED_ON = 'canceled_on' satisfies keyof Domain;
export const KEY_DOMAIN_CONTACTS = 'contacts' satisfies keyof Domain;
export const KEY_DOMAIN_CREATED_ON = 'created_on' satisfies keyof Domain;
export const KEY_DOMAIN_DELETED_ON = 'deleted_on' satisfies keyof Domain;
export const KEY_DOMAIN_DOMAIN_ID = 'domain_id' satisfies keyof Domain;
export const KEY_DOMAIN_EXPIRES_ON = 'expires_on' satisfies keyof Domain;
export const KEY_DOMAIN_HOSTS = 'hosts' satisfies keyof Domain;
export const KEY_DOMAIN_IS_PREMIUM = 'is_premium' satisfies keyof Domain;
export const KEY_DOMAIN_NAME = 'name' satisfies keyof Domain;
export const KEY_DOMAIN_NAMESERVERS = 'nameservers' satisfies keyof Domain;
export const KEY_DOMAIN_OWNER_ID = 'owner_id' satisfies keyof Domain;
export const KEY_DOMAIN_REGISTERED_ON = 'registered_on' satisfies keyof Domain;
export const KEY_DOMAIN_REGISTRY_ACCOUNT_ID = 'registry_account_id' satisfies keyof Domain;
export const KEY_DOMAIN_REGISTRY_STATUSES = 'registry_statuses' satisfies keyof Domain;
export const KEY_DOMAIN_RENEWAL_MODE = 'renewal_mode' satisfies keyof Domain;
export const KEY_DOMAIN_RENEWAL_PERIOD = 'renewal_period' satisfies keyof Domain;
export const KEY_DOMAIN_ROID = 'roid' satisfies keyof Domain;
export const KEY_DOMAIN_SLD = 'sld' satisfies keyof Domain;
export const KEY_DOMAIN_STATUS_TAGS = 'status_tags' satisfies keyof Domain;
export const KEY_DOMAIN_TAGS = 'tags' satisfies keyof Domain;
export const KEY_DOMAIN_TLD = 'tld' satisfies keyof Domain;
export const KEY_DOMAIN_TRANSFER_LOCK = 'transfer_lock' satisfies keyof Domain;
export const KEY_DOMAIN_UPDATED_ON = 'updated_on' satisfies keyof Domain;
export const KEY_DOMAIN_VERIFICATION_REQUIRED = 'verification_required' satisfies keyof Domain;

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
  KEY_DOMAIN_IS_PREMIUM,
  KEY_DOMAIN_NAME,
  KEY_DOMAIN_NAMESERVERS,
  KEY_DOMAIN_OWNER_ID,
  KEY_DOMAIN_REGISTERED_ON,
  KEY_DOMAIN_REGISTRY_ACCOUNT_ID,
  KEY_DOMAIN_REGISTRY_STATUSES,
  KEY_DOMAIN_RENEWAL_MODE,
  KEY_DOMAIN_RENEWAL_PERIOD,
  KEY_DOMAIN_ROID,
  KEY_DOMAIN_SLD,
  KEY_DOMAIN_STATUS_TAGS,
  KEY_DOMAIN_TAGS,
  KEY_DOMAIN_TLD,
  KEY_DOMAIN_TRANSFER_LOCK,
  KEY_DOMAIN_UPDATED_ON,
  KEY_DOMAIN_VERIFICATION_REQUIRED,
] as const satisfies (keyof Domain)[];

export const KEY_DOMAIN_RESTORE_REQUEST_ADDITIONAL_INFO = 'additional_info' satisfies keyof DomainRestoreRequest;
export const KEY_DOMAIN_RESTORE_REQUEST_EXPECTED_PRICE = 'expected_price' satisfies keyof DomainRestoreRequest;
export const KEY_DOMAIN_RESTORE_REQUEST_REASON = 'reason' satisfies keyof DomainRestoreRequest;

export const KEYS_DOMAIN_RESTORE_REQUEST = [
  KEY_DOMAIN_RESTORE_REQUEST_ADDITIONAL_INFO,
  KEY_DOMAIN_RESTORE_REQUEST_EXPECTED_PRICE,
  KEY_DOMAIN_RESTORE_REQUEST_REASON,
] as const satisfies (keyof DomainRestoreRequest)[];

export const KEY_DOMAIN_RESTORE_DOMAIN_ID = 'domain_id' satisfies keyof DomainRestore;
export const KEY_DOMAIN_RESTORE_NAME = 'name' satisfies keyof DomainRestore;
export const KEY_DOMAIN_RESTORE_RESTORED_AT = 'restored_at' satisfies keyof DomainRestore;

export const KEYS_DOMAIN_RESTORE = [
  KEY_DOMAIN_RESTORE_DOMAIN_ID,
  KEY_DOMAIN_RESTORE_NAME,
  KEY_DOMAIN_RESTORE_RESTORED_AT,
] as const satisfies (keyof DomainRestore)[];

export const KEY_DOMAIN_SEARCH_META_PROCESSING_TIME_MS = 'processing_time_ms' satisfies keyof DomainSearchMeta;
export const KEY_DOMAIN_SEARCH_META_TOTAL = 'total' satisfies keyof DomainSearchMeta;

export const KEYS_DOMAIN_SEARCH_META = [
  KEY_DOMAIN_SEARCH_META_PROCESSING_TIME_MS,
  KEY_DOMAIN_SEARCH_META_TOTAL,
] as const satisfies (keyof DomainSearchMeta)[];

export const KEY_DOMAIN_SEARCH_META = 'meta' satisfies keyof DomainSearch;
export const KEY_DOMAIN_SEARCH_RESULTS = 'results' satisfies keyof DomainSearch;

export const KEYS_DOMAIN_SEARCH = [
  KEY_DOMAIN_SEARCH_META,
  KEY_DOMAIN_SEARCH_RESULTS,
] as const satisfies (keyof DomainSearch)[];

export const KEY_DOMAIN_SEARCH_SUGGESTION_PRICE_DATA_AMOUNT = 'amount' satisfies keyof DomainSearchSuggestionPriceData;
export const KEY_DOMAIN_SEARCH_SUGGESTION_PRICE_DATA_CURRENCY = 'currency' satisfies keyof DomainSearchSuggestionPriceData;
export const KEY_DOMAIN_SEARCH_SUGGESTION_PRICE_DATA_PERIOD = 'period' satisfies keyof DomainSearchSuggestionPriceData;

export const KEYS_DOMAIN_SEARCH_SUGGESTION_PRICE_DATA = [
  KEY_DOMAIN_SEARCH_SUGGESTION_PRICE_DATA_AMOUNT,
  KEY_DOMAIN_SEARCH_SUGGESTION_PRICE_DATA_CURRENCY,
  KEY_DOMAIN_SEARCH_SUGGESTION_PRICE_DATA_PERIOD,
] as const satisfies (keyof DomainSearchSuggestionPriceData)[];

export const KEY_DOMAIN_SEARCH_SUGGESTION_WITH_PRICE_AVAILABLE = 'available' satisfies keyof DomainSearchSuggestionWithPrice;
export const KEY_DOMAIN_SEARCH_SUGGESTION_WITH_PRICE_DOMAIN = 'domain' satisfies keyof DomainSearchSuggestionWithPrice;
export const KEY_DOMAIN_SEARCH_SUGGESTION_WITH_PRICE_PREMIUM = 'premium' satisfies keyof DomainSearchSuggestionWithPrice;
export const KEY_DOMAIN_SEARCH_SUGGESTION_WITH_PRICE_PRICE = 'price' satisfies keyof DomainSearchSuggestionWithPrice;
export const KEY_DOMAIN_SEARCH_SUGGESTION_WITH_PRICE_RENEWAL_PRICE = 'renewal_price' satisfies keyof DomainSearchSuggestionWithPrice;

export const KEYS_DOMAIN_SEARCH_SUGGESTION_WITH_PRICE = [
  KEY_DOMAIN_SEARCH_SUGGESTION_WITH_PRICE_AVAILABLE,
  KEY_DOMAIN_SEARCH_SUGGESTION_WITH_PRICE_DOMAIN,
  KEY_DOMAIN_SEARCH_SUGGESTION_WITH_PRICE_PREMIUM,
  KEY_DOMAIN_SEARCH_SUGGESTION_WITH_PRICE_PRICE,
  KEY_DOMAIN_SEARCH_SUGGESTION_WITH_PRICE_RENEWAL_PRICE,
] as const satisfies (keyof DomainSearchSuggestionWithPrice)[];

export const KEY_DOMAIN_STATUS2_STATUS = 'status' satisfies keyof DomainStatus2;

export const KEYS_DOMAIN_STATUS2 = [
  KEY_DOMAIN_STATUS2_STATUS,
] as const satisfies (keyof DomainStatus2)[];

export const KEY_DOMAIN_STATUSES_BASE_DEFAULT = 'default' satisfies keyof DomainStatusesBase;
export const KEY_DOMAIN_STATUSES_BASE_STATUS_MAPPING = 'status_mapping' satisfies keyof DomainStatusesBase;
export const KEY_DOMAIN_STATUSES_BASE_SUPPORTED_STATUSES = 'supported_statuses' satisfies keyof DomainStatusesBase;

export const KEYS_DOMAIN_STATUSES_BASE = [
  KEY_DOMAIN_STATUSES_BASE_DEFAULT,
  KEY_DOMAIN_STATUSES_BASE_STATUS_MAPPING,
  KEY_DOMAIN_STATUSES_BASE_SUPPORTED_STATUSES,
] as const satisfies (keyof DomainStatusesBase)[];

export const KEY_DOMAIN_SUMMARY_DATA_BY_ORGANIZATION = 'by_organization' satisfies keyof DomainSummaryData;
export const KEY_DOMAIN_SUMMARY_DATA_BY_STATUS = 'by_status' satisfies keyof DomainSummaryData;
export const KEY_DOMAIN_SUMMARY_DATA_BY_TLD = 'by_tld' satisfies keyof DomainSummaryData;
export const KEY_DOMAIN_SUMMARY_DATA_EXPIRING_SOON = 'expiring_soon' satisfies keyof DomainSummaryData;
export const KEY_DOMAIN_SUMMARY_DATA_TOTAL_COUNT = 'total_count' satisfies keyof DomainSummaryData;

export const KEYS_DOMAIN_SUMMARY_DATA = [
  KEY_DOMAIN_SUMMARY_DATA_BY_ORGANIZATION,
  KEY_DOMAIN_SUMMARY_DATA_BY_STATUS,
  KEY_DOMAIN_SUMMARY_DATA_BY_TLD,
  KEY_DOMAIN_SUMMARY_DATA_EXPIRING_SOON,
  KEY_DOMAIN_SUMMARY_DATA_TOTAL_COUNT,
] as const satisfies (keyof DomainSummaryData)[];

export const KEY_DOMAIN_SUMMARY_DOMAINS = 'domains' satisfies keyof DomainSummary;
export const KEY_DOMAIN_SUMMARY_ORGANIZATION_ID = 'organization_id' satisfies keyof DomainSummary;

export const KEYS_DOMAIN_SUMMARY = [
  KEY_DOMAIN_SUMMARY_DOMAINS,
  KEY_DOMAIN_SUMMARY_ORGANIZATION_ID,
] as const satisfies (keyof DomainSummary)[];

export const KEY_DOMAIN_TRANSFER_BULK_COMMAND_COMMAND = 'command' satisfies keyof DomainTransferBulkCommand;
export const KEY_DOMAIN_TRANSFER_BULK_COMMAND_IDEMPOTENCY_KEY = 'idempotency_key' satisfies keyof DomainTransferBulkCommand;
export const KEY_DOMAIN_TRANSFER_BULK_COMMAND_PAYLOAD = 'payload' satisfies keyof DomainTransferBulkCommand;
export const KEY_DOMAIN_TRANSFER_BULK_COMMAND_VERSION = 'version' satisfies keyof DomainTransferBulkCommand;

export const KEYS_DOMAIN_TRANSFER_BULK_COMMAND = [
  KEY_DOMAIN_TRANSFER_BULK_COMMAND_COMMAND,
  KEY_DOMAIN_TRANSFER_BULK_COMMAND_IDEMPOTENCY_KEY,
  KEY_DOMAIN_TRANSFER_BULK_COMMAND_PAYLOAD,
  KEY_DOMAIN_TRANSFER_BULK_COMMAND_VERSION,
] as const satisfies (keyof DomainTransferBulkCommand)[];

export const KEY_DOMAIN_TRANSFER_BULK_INSTANCE_ATTRIBUTES = 'attributes' satisfies keyof DomainTransferBulkInstance;
export const KEY_DOMAIN_TRANSFER_BULK_INSTANCE_AUTH_CODE = 'auth_code' satisfies keyof DomainTransferBulkInstance;
export const KEY_DOMAIN_TRANSFER_BULK_INSTANCE_CONTACTS = 'contacts' satisfies keyof DomainTransferBulkInstance;
export const KEY_DOMAIN_TRANSFER_BULK_INSTANCE_CREATE_ZONE = 'create_zone' satisfies keyof DomainTransferBulkInstance;
export const KEY_DOMAIN_TRANSFER_BULK_INSTANCE_EXPECTED_PRICE = 'expected_price' satisfies keyof DomainTransferBulkInstance;
export const KEY_DOMAIN_TRANSFER_BULK_INSTANCE_NAME = 'name' satisfies keyof DomainTransferBulkInstance;
export const KEY_DOMAIN_TRANSFER_BULK_INSTANCE_NAMESERVERS = 'nameservers' satisfies keyof DomainTransferBulkInstance;
export const KEY_DOMAIN_TRANSFER_BULK_INSTANCE_PERIOD = 'period' satisfies keyof DomainTransferBulkInstance;
export const KEY_DOMAIN_TRANSFER_BULK_INSTANCE_RENEWAL_MODE = 'renewal_mode' satisfies keyof DomainTransferBulkInstance;

export const KEYS_DOMAIN_TRANSFER_BULK_INSTANCE = [
  KEY_DOMAIN_TRANSFER_BULK_INSTANCE_ATTRIBUTES,
  KEY_DOMAIN_TRANSFER_BULK_INSTANCE_AUTH_CODE,
  KEY_DOMAIN_TRANSFER_BULK_INSTANCE_CONTACTS,
  KEY_DOMAIN_TRANSFER_BULK_INSTANCE_CREATE_ZONE,
  KEY_DOMAIN_TRANSFER_BULK_INSTANCE_EXPECTED_PRICE,
  KEY_DOMAIN_TRANSFER_BULK_INSTANCE_NAME,
  KEY_DOMAIN_TRANSFER_BULK_INSTANCE_NAMESERVERS,
  KEY_DOMAIN_TRANSFER_BULK_INSTANCE_PERIOD,
  KEY_DOMAIN_TRANSFER_BULK_INSTANCE_RENEWAL_MODE,
] as const satisfies (keyof DomainTransferBulkInstance)[];

export const KEY_DOMAIN_TRANSFER_BULK_PAYLOAD_INSTANCES = 'instances' satisfies keyof DomainTransferBulkPayload;
export const KEY_DOMAIN_TRANSFER_BULK_PAYLOAD_TEMPLATE = 'template' satisfies keyof DomainTransferBulkPayload;

export const KEYS_DOMAIN_TRANSFER_BULK_PAYLOAD = [
  KEY_DOMAIN_TRANSFER_BULK_PAYLOAD_INSTANCES,
  KEY_DOMAIN_TRANSFER_BULK_PAYLOAD_TEMPLATE,
] as const satisfies (keyof DomainTransferBulkPayload)[];

export const KEY_DOMAIN_TRANSFER_BULK_TEMPLATE_ATTRIBUTES = 'attributes' satisfies keyof DomainTransferBulkTemplate;
export const KEY_DOMAIN_TRANSFER_BULK_TEMPLATE_CONTACTS = 'contacts' satisfies keyof DomainTransferBulkTemplate;
export const KEY_DOMAIN_TRANSFER_BULK_TEMPLATE_CREATE_ZONE = 'create_zone' satisfies keyof DomainTransferBulkTemplate;
export const KEY_DOMAIN_TRANSFER_BULK_TEMPLATE_NAMESERVERS = 'nameservers' satisfies keyof DomainTransferBulkTemplate;
export const KEY_DOMAIN_TRANSFER_BULK_TEMPLATE_PERIOD = 'period' satisfies keyof DomainTransferBulkTemplate;
export const KEY_DOMAIN_TRANSFER_BULK_TEMPLATE_RENEWAL_MODE = 'renewal_mode' satisfies keyof DomainTransferBulkTemplate;

export const KEYS_DOMAIN_TRANSFER_BULK_TEMPLATE = [
  KEY_DOMAIN_TRANSFER_BULK_TEMPLATE_ATTRIBUTES,
  KEY_DOMAIN_TRANSFER_BULK_TEMPLATE_CONTACTS,
  KEY_DOMAIN_TRANSFER_BULK_TEMPLATE_CREATE_ZONE,
  KEY_DOMAIN_TRANSFER_BULK_TEMPLATE_NAMESERVERS,
  KEY_DOMAIN_TRANSFER_BULK_TEMPLATE_PERIOD,
  KEY_DOMAIN_TRANSFER_BULK_TEMPLATE_RENEWAL_MODE,
] as const satisfies (keyof DomainTransferBulkTemplate)[];

export const KEY_DOMAIN_TRANSFER_COMMAND_COMMAND = 'command' satisfies keyof DomainTransferCommand;
export const KEY_DOMAIN_TRANSFER_COMMAND_IDEMPOTENCY_KEY = 'idempotency_key' satisfies keyof DomainTransferCommand;
export const KEY_DOMAIN_TRANSFER_COMMAND_PAYLOAD = 'payload' satisfies keyof DomainTransferCommand;
export const KEY_DOMAIN_TRANSFER_COMMAND_VERSION = 'version' satisfies keyof DomainTransferCommand;

export const KEYS_DOMAIN_TRANSFER_COMMAND = [
  KEY_DOMAIN_TRANSFER_COMMAND_COMMAND,
  KEY_DOMAIN_TRANSFER_COMMAND_IDEMPOTENCY_KEY,
  KEY_DOMAIN_TRANSFER_COMMAND_PAYLOAD,
  KEY_DOMAIN_TRANSFER_COMMAND_VERSION,
] as const satisfies (keyof DomainTransferCommand)[];

export const KEY_DOMAIN_TRANSFER_IN_ATTRIBUTES = 'attributes' satisfies keyof DomainTransferIn;
export const KEY_DOMAIN_TRANSFER_IN_AUTH_CODE = 'auth_code' satisfies keyof DomainTransferIn;
export const KEY_DOMAIN_TRANSFER_IN_CONTACTS = 'contacts' satisfies keyof DomainTransferIn;
export const KEY_DOMAIN_TRANSFER_IN_CREATE_ZONE = 'create_zone' satisfies keyof DomainTransferIn;
export const KEY_DOMAIN_TRANSFER_IN_EXPECTED_PRICE = 'expected_price' satisfies keyof DomainTransferIn;
export const KEY_DOMAIN_TRANSFER_IN_NAME = 'name' satisfies keyof DomainTransferIn;
export const KEY_DOMAIN_TRANSFER_IN_NAMESERVERS = 'nameservers' satisfies keyof DomainTransferIn;
export const KEY_DOMAIN_TRANSFER_IN_PERIOD = 'period' satisfies keyof DomainTransferIn;
export const KEY_DOMAIN_TRANSFER_IN_RENEWAL_MODE = 'renewal_mode' satisfies keyof DomainTransferIn;

export const KEYS_DOMAIN_TRANSFER_IN = [
  KEY_DOMAIN_TRANSFER_IN_ATTRIBUTES,
  KEY_DOMAIN_TRANSFER_IN_AUTH_CODE,
  KEY_DOMAIN_TRANSFER_IN_CONTACTS,
  KEY_DOMAIN_TRANSFER_IN_CREATE_ZONE,
  KEY_DOMAIN_TRANSFER_IN_EXPECTED_PRICE,
  KEY_DOMAIN_TRANSFER_IN_NAME,
  KEY_DOMAIN_TRANSFER_IN_NAMESERVERS,
  KEY_DOMAIN_TRANSFER_IN_PERIOD,
  KEY_DOMAIN_TRANSFER_IN_RENEWAL_MODE,
] as const satisfies (keyof DomainTransferIn)[];

export const KEY_DOMAIN_TRANSFER_PAYLOAD_DATA_ATTRIBUTES = 'attributes' satisfies keyof DomainTransferPayloadData;
export const KEY_DOMAIN_TRANSFER_PAYLOAD_DATA_AUTH_CODE = 'auth_code' satisfies keyof DomainTransferPayloadData;
export const KEY_DOMAIN_TRANSFER_PAYLOAD_DATA_CONTACTS = 'contacts' satisfies keyof DomainTransferPayloadData;
export const KEY_DOMAIN_TRANSFER_PAYLOAD_DATA_CREATE_ZONE = 'create_zone' satisfies keyof DomainTransferPayloadData;
export const KEY_DOMAIN_TRANSFER_PAYLOAD_DATA_EXPECTED_PRICE = 'expected_price' satisfies keyof DomainTransferPayloadData;
export const KEY_DOMAIN_TRANSFER_PAYLOAD_DATA_NAME = 'name' satisfies keyof DomainTransferPayloadData;
export const KEY_DOMAIN_TRANSFER_PAYLOAD_DATA_NAMESERVERS = 'nameservers' satisfies keyof DomainTransferPayloadData;
export const KEY_DOMAIN_TRANSFER_PAYLOAD_DATA_PERIOD = 'period' satisfies keyof DomainTransferPayloadData;
export const KEY_DOMAIN_TRANSFER_PAYLOAD_DATA_RENEWAL_MODE = 'renewal_mode' satisfies keyof DomainTransferPayloadData;

export const KEYS_DOMAIN_TRANSFER_PAYLOAD_DATA = [
  KEY_DOMAIN_TRANSFER_PAYLOAD_DATA_ATTRIBUTES,
  KEY_DOMAIN_TRANSFER_PAYLOAD_DATA_AUTH_CODE,
  KEY_DOMAIN_TRANSFER_PAYLOAD_DATA_CONTACTS,
  KEY_DOMAIN_TRANSFER_PAYLOAD_DATA_CREATE_ZONE,
  KEY_DOMAIN_TRANSFER_PAYLOAD_DATA_EXPECTED_PRICE,
  KEY_DOMAIN_TRANSFER_PAYLOAD_DATA_NAME,
  KEY_DOMAIN_TRANSFER_PAYLOAD_DATA_NAMESERVERS,
  KEY_DOMAIN_TRANSFER_PAYLOAD_DATA_PERIOD,
  KEY_DOMAIN_TRANSFER_PAYLOAD_DATA_RENEWAL_MODE,
] as const satisfies (keyof DomainTransferPayloadData)[];

export const KEY_DOMAIN_TRANSFER_WORKER_PAYLOAD_DOMAIN = 'domain' satisfies keyof DomainTransferWorkerPayload;
export const KEY_DOMAIN_TRANSFER_WORKER_PAYLOAD_OPERATION = 'operation' satisfies keyof DomainTransferWorkerPayload;
export const KEY_DOMAIN_TRANSFER_WORKER_PAYLOAD_TYPE = 'type' satisfies keyof DomainTransferWorkerPayload;

export const KEYS_DOMAIN_TRANSFER_WORKER_PAYLOAD = [
  KEY_DOMAIN_TRANSFER_WORKER_PAYLOAD_DOMAIN,
  KEY_DOMAIN_TRANSFER_WORKER_PAYLOAD_OPERATION,
  KEY_DOMAIN_TRANSFER_WORKER_PAYLOAD_TYPE,
] as const satisfies (keyof DomainTransferWorkerPayload)[];

export const KEY_DOMAIN_TRANSIT_REQUEST_DISCONNECT = 'disconnect' satisfies keyof DomainTransitRequest;

export const KEYS_DOMAIN_TRANSIT_REQUEST = [
  KEY_DOMAIN_TRANSIT_REQUEST_DISCONNECT,
] as const satisfies (keyof DomainTransitRequest)[];

export const KEY_DOMAIN_TRANSIT_NAME = 'name' satisfies keyof DomainTransit;
export const KEY_DOMAIN_TRANSIT_SUCCESS = 'success' satisfies keyof DomainTransit;

export const KEYS_DOMAIN_TRANSIT = [
  KEY_DOMAIN_TRANSIT_NAME,
  KEY_DOMAIN_TRANSIT_SUCCESS,
] as const satisfies (keyof DomainTransit)[];

export const KEY_DOMAIN_UPDATE_ATTRIBUTES = 'attributes' satisfies keyof DomainUpdate;
export const KEY_DOMAIN_UPDATE_AUTH_CODE = 'auth_code' satisfies keyof DomainUpdate;
export const KEY_DOMAIN_UPDATE_CONTACTS = 'contacts' satisfies keyof DomainUpdate;
export const KEY_DOMAIN_UPDATE_NAMESERVERS = 'nameservers' satisfies keyof DomainUpdate;
export const KEY_DOMAIN_UPDATE_RENEWAL_MODE = 'renewal_mode' satisfies keyof DomainUpdate;
export const KEY_DOMAIN_UPDATE_STATUS_CHANGES = 'status_changes' satisfies keyof DomainUpdate;
export const KEY_DOMAIN_UPDATE_STATUSES = 'statuses' satisfies keyof DomainUpdate;

export const KEYS_DOMAIN_UPDATE = [
  KEY_DOMAIN_UPDATE_ATTRIBUTES,
  KEY_DOMAIN_UPDATE_AUTH_CODE,
  KEY_DOMAIN_UPDATE_CONTACTS,
  KEY_DOMAIN_UPDATE_NAMESERVERS,
  KEY_DOMAIN_UPDATE_RENEWAL_MODE,
  KEY_DOMAIN_UPDATE_STATUS_CHANGES,
  KEY_DOMAIN_UPDATE_STATUSES,
] as const satisfies (keyof DomainUpdate)[];

export const KEY_DOMAIN_UPDATE_BULK_COMMAND_COMMAND = 'command' satisfies keyof DomainUpdateBulkCommand;
export const KEY_DOMAIN_UPDATE_BULK_COMMAND_IDEMPOTENCY_KEY = 'idempotency_key' satisfies keyof DomainUpdateBulkCommand;
export const KEY_DOMAIN_UPDATE_BULK_COMMAND_PAYLOAD = 'payload' satisfies keyof DomainUpdateBulkCommand;
export const KEY_DOMAIN_UPDATE_BULK_COMMAND_VERSION = 'version' satisfies keyof DomainUpdateBulkCommand;

export const KEYS_DOMAIN_UPDATE_BULK_COMMAND = [
  KEY_DOMAIN_UPDATE_BULK_COMMAND_COMMAND,
  KEY_DOMAIN_UPDATE_BULK_COMMAND_IDEMPOTENCY_KEY,
  KEY_DOMAIN_UPDATE_BULK_COMMAND_PAYLOAD,
  KEY_DOMAIN_UPDATE_BULK_COMMAND_VERSION,
] as const satisfies (keyof DomainUpdateBulkCommand)[];

export const KEY_DOMAIN_UPDATE_BULK_INSTANCE_AUTH_CODE = 'auth_code' satisfies keyof DomainUpdateBulkInstance;
export const KEY_DOMAIN_UPDATE_BULK_INSTANCE_CONTACTS = 'contacts' satisfies keyof DomainUpdateBulkInstance;
export const KEY_DOMAIN_UPDATE_BULK_INSTANCE_DOMAIN_ID = 'domain_id' satisfies keyof DomainUpdateBulkInstance;
export const KEY_DOMAIN_UPDATE_BULK_INSTANCE_NAME = 'name' satisfies keyof DomainUpdateBulkInstance;
export const KEY_DOMAIN_UPDATE_BULK_INSTANCE_NAMESERVERS = 'nameservers' satisfies keyof DomainUpdateBulkInstance;
export const KEY_DOMAIN_UPDATE_BULK_INSTANCE_RENEWAL_MODE = 'renewal_mode' satisfies keyof DomainUpdateBulkInstance;
export const KEY_DOMAIN_UPDATE_BULK_INSTANCE_STATUS_CHANGES = 'status_changes' satisfies keyof DomainUpdateBulkInstance;
export const KEY_DOMAIN_UPDATE_BULK_INSTANCE_STATUSES = 'statuses' satisfies keyof DomainUpdateBulkInstance;

export const KEYS_DOMAIN_UPDATE_BULK_INSTANCE = [
  KEY_DOMAIN_UPDATE_BULK_INSTANCE_AUTH_CODE,
  KEY_DOMAIN_UPDATE_BULK_INSTANCE_CONTACTS,
  KEY_DOMAIN_UPDATE_BULK_INSTANCE_DOMAIN_ID,
  KEY_DOMAIN_UPDATE_BULK_INSTANCE_NAME,
  KEY_DOMAIN_UPDATE_BULK_INSTANCE_NAMESERVERS,
  KEY_DOMAIN_UPDATE_BULK_INSTANCE_RENEWAL_MODE,
  KEY_DOMAIN_UPDATE_BULK_INSTANCE_STATUS_CHANGES,
  KEY_DOMAIN_UPDATE_BULK_INSTANCE_STATUSES,
] as const satisfies (keyof DomainUpdateBulkInstance)[];

export const KEY_DOMAIN_UPDATE_BULK_PAYLOAD_INSTANCES = 'instances' satisfies keyof DomainUpdateBulkPayload;
export const KEY_DOMAIN_UPDATE_BULK_PAYLOAD_TEMPLATE = 'template' satisfies keyof DomainUpdateBulkPayload;

export const KEYS_DOMAIN_UPDATE_BULK_PAYLOAD = [
  KEY_DOMAIN_UPDATE_BULK_PAYLOAD_INSTANCES,
  KEY_DOMAIN_UPDATE_BULK_PAYLOAD_TEMPLATE,
] as const satisfies (keyof DomainUpdateBulkPayload)[];

export const KEY_DOMAIN_UPDATE_BULK_TEMPLATE_CONTACTS = 'contacts' satisfies keyof DomainUpdateBulkTemplate;
export const KEY_DOMAIN_UPDATE_BULK_TEMPLATE_NAMESERVERS = 'nameservers' satisfies keyof DomainUpdateBulkTemplate;
export const KEY_DOMAIN_UPDATE_BULK_TEMPLATE_RENEWAL_MODE = 'renewal_mode' satisfies keyof DomainUpdateBulkTemplate;
export const KEY_DOMAIN_UPDATE_BULK_TEMPLATE_STATUS_CHANGES = 'status_changes' satisfies keyof DomainUpdateBulkTemplate;
export const KEY_DOMAIN_UPDATE_BULK_TEMPLATE_STATUSES = 'statuses' satisfies keyof DomainUpdateBulkTemplate;

export const KEYS_DOMAIN_UPDATE_BULK_TEMPLATE = [
  KEY_DOMAIN_UPDATE_BULK_TEMPLATE_CONTACTS,
  KEY_DOMAIN_UPDATE_BULK_TEMPLATE_NAMESERVERS,
  KEY_DOMAIN_UPDATE_BULK_TEMPLATE_RENEWAL_MODE,
  KEY_DOMAIN_UPDATE_BULK_TEMPLATE_STATUS_CHANGES,
  KEY_DOMAIN_UPDATE_BULK_TEMPLATE_STATUSES,
] as const satisfies (keyof DomainUpdateBulkTemplate)[];

export const KEY_DOMAIN_UPDATE_COMMAND_COMMAND = 'command' satisfies keyof DomainUpdateCommand;
export const KEY_DOMAIN_UPDATE_COMMAND_IDEMPOTENCY_KEY = 'idempotency_key' satisfies keyof DomainUpdateCommand;
export const KEY_DOMAIN_UPDATE_COMMAND_PAYLOAD = 'payload' satisfies keyof DomainUpdateCommand;
export const KEY_DOMAIN_UPDATE_COMMAND_VERSION = 'version' satisfies keyof DomainUpdateCommand;

export const KEYS_DOMAIN_UPDATE_COMMAND = [
  KEY_DOMAIN_UPDATE_COMMAND_COMMAND,
  KEY_DOMAIN_UPDATE_COMMAND_IDEMPOTENCY_KEY,
  KEY_DOMAIN_UPDATE_COMMAND_PAYLOAD,
  KEY_DOMAIN_UPDATE_COMMAND_VERSION,
] as const satisfies (keyof DomainUpdateCommand)[];

export const KEY_DOMAIN_UPDATE_PAYLOAD_DATA_ATTRIBUTES = 'attributes' satisfies keyof DomainUpdatePayloadData;
export const KEY_DOMAIN_UPDATE_PAYLOAD_DATA_AUTH_CODE = 'auth_code' satisfies keyof DomainUpdatePayloadData;
export const KEY_DOMAIN_UPDATE_PAYLOAD_DATA_CONTACTS = 'contacts' satisfies keyof DomainUpdatePayloadData;
export const KEY_DOMAIN_UPDATE_PAYLOAD_DATA_DOMAIN_ID = 'domain_id' satisfies keyof DomainUpdatePayloadData;
export const KEY_DOMAIN_UPDATE_PAYLOAD_DATA_NAMESERVERS = 'nameservers' satisfies keyof DomainUpdatePayloadData;
export const KEY_DOMAIN_UPDATE_PAYLOAD_DATA_RENEWAL_MODE = 'renewal_mode' satisfies keyof DomainUpdatePayloadData;
export const KEY_DOMAIN_UPDATE_PAYLOAD_DATA_STATUS_CHANGES = 'status_changes' satisfies keyof DomainUpdatePayloadData;
export const KEY_DOMAIN_UPDATE_PAYLOAD_DATA_STATUSES = 'statuses' satisfies keyof DomainUpdatePayloadData;

export const KEYS_DOMAIN_UPDATE_PAYLOAD_DATA = [
  KEY_DOMAIN_UPDATE_PAYLOAD_DATA_ATTRIBUTES,
  KEY_DOMAIN_UPDATE_PAYLOAD_DATA_AUTH_CODE,
  KEY_DOMAIN_UPDATE_PAYLOAD_DATA_CONTACTS,
  KEY_DOMAIN_UPDATE_PAYLOAD_DATA_DOMAIN_ID,
  KEY_DOMAIN_UPDATE_PAYLOAD_DATA_NAMESERVERS,
  KEY_DOMAIN_UPDATE_PAYLOAD_DATA_RENEWAL_MODE,
  KEY_DOMAIN_UPDATE_PAYLOAD_DATA_STATUS_CHANGES,
  KEY_DOMAIN_UPDATE_PAYLOAD_DATA_STATUSES,
] as const satisfies (keyof DomainUpdatePayloadData)[];

export const KEY_DOMAIN_UPDATE_WORKER_PAYLOAD_DOMAIN = 'domain' satisfies keyof DomainUpdateWorkerPayload;
export const KEY_DOMAIN_UPDATE_WORKER_PAYLOAD_OPERATION = 'operation' satisfies keyof DomainUpdateWorkerPayload;
export const KEY_DOMAIN_UPDATE_WORKER_PAYLOAD_TYPE = 'type' satisfies keyof DomainUpdateWorkerPayload;

export const KEYS_DOMAIN_UPDATE_WORKER_PAYLOAD = [
  KEY_DOMAIN_UPDATE_WORKER_PAYLOAD_DOMAIN,
  KEY_DOMAIN_UPDATE_WORKER_PAYLOAD_OPERATION,
  KEY_DOMAIN_UPDATE_WORKER_PAYLOAD_TYPE,
] as const satisfies (keyof DomainUpdateWorkerPayload)[];

export const KEY_DOMAIN_VERIFICATION_DETAILS_DETAIL_TYPE = 'detail_type' satisfies keyof DomainVerificationDetails;
export const KEY_DOMAIN_VERIFICATION_DETAILS_DOMAIN_ID = 'domain_id' satisfies keyof DomainVerificationDetails;
export const KEY_DOMAIN_VERIFICATION_DETAILS_REGISTRANTS = 'registrants' satisfies keyof DomainVerificationDetails;
export const KEY_DOMAIN_VERIFICATION_DETAILS_VERIFICATION_CLAIMS = 'verification_claims' satisfies keyof DomainVerificationDetails;
export const KEY_DOMAIN_VERIFICATION_DETAILS_VERIFICATION_DEADLINES = 'verification_deadlines' satisfies keyof DomainVerificationDetails;

export const KEYS_DOMAIN_VERIFICATION_DETAILS = [
  KEY_DOMAIN_VERIFICATION_DETAILS_DETAIL_TYPE,
  KEY_DOMAIN_VERIFICATION_DETAILS_DOMAIN_ID,
  KEY_DOMAIN_VERIFICATION_DETAILS_REGISTRANTS,
  KEY_DOMAIN_VERIFICATION_DETAILS_VERIFICATION_CLAIMS,
  KEY_DOMAIN_VERIFICATION_DETAILS_VERIFICATION_DEADLINES,
] as const satisfies (keyof DomainVerificationDetails)[];

export const KEY_DOMAIN_WITHDRAW_REQUEST_ZONE_DELETE = 'zone_delete' satisfies keyof DomainWithdrawRequest;

export const KEYS_DOMAIN_WITHDRAW_REQUEST = [
  KEY_DOMAIN_WITHDRAW_REQUEST_ZONE_DELETE,
] as const satisfies (keyof DomainWithdrawRequest)[];

export const KEY_DOMAIN_WITHDRAW_NAME = 'name' satisfies keyof DomainWithdraw;
export const KEY_DOMAIN_WITHDRAW_SUCCESS = 'success' satisfies keyof DomainWithdraw;

export const KEYS_DOMAIN_WITHDRAW = [
  KEY_DOMAIN_WITHDRAW_NAME,
  KEY_DOMAIN_WITHDRAW_SUCCESS,
] as const satisfies (keyof DomainWithdraw)[];

export const KEY_DOMAINS_CONTEXT_CONTEXT_ID = 'context_id' satisfies keyof DomainsContext;
export const KEY_DOMAINS_CONTEXT_CONVERSATION_ID = 'conversation_id' satisfies keyof DomainsContext;
export const KEY_DOMAINS_CONTEXT_CREATED_AT = 'created_at' satisfies keyof DomainsContext;
export const KEY_DOMAINS_CONTEXT_KIND = 'kind' satisfies keyof DomainsContext;
export const KEY_DOMAINS_CONTEXT_ORGANIZATION_ID = 'organization_id' satisfies keyof DomainsContext;
export const KEY_DOMAINS_CONTEXT_PAYLOAD = 'payload' satisfies keyof DomainsContext;
export const KEY_DOMAINS_CONTEXT_USER_ID = 'user_id' satisfies keyof DomainsContext;

export const KEYS_DOMAINS_CONTEXT = [
  KEY_DOMAINS_CONTEXT_CONTEXT_ID,
  KEY_DOMAINS_CONTEXT_CONVERSATION_ID,
  KEY_DOMAINS_CONTEXT_CREATED_AT,
  KEY_DOMAINS_CONTEXT_KIND,
  KEY_DOMAINS_CONTEXT_ORGANIZATION_ID,
  KEY_DOMAINS_CONTEXT_PAYLOAD,
  KEY_DOMAINS_CONTEXT_USER_ID,
] as const satisfies (keyof DomainsContext)[];

export const KEY_DOMAINS_CONTEXT_CREATE_KIND = 'kind' satisfies keyof DomainsContextCreate;
export const KEY_DOMAINS_CONTEXT_CREATE_PAYLOAD = 'payload' satisfies keyof DomainsContextCreate;

export const KEYS_DOMAINS_CONTEXT_CREATE = [
  KEY_DOMAINS_CONTEXT_CREATE_KIND,
  KEY_DOMAINS_CONTEXT_CREATE_PAYLOAD,
] as const satisfies (keyof DomainsContextCreate)[];

export const KEY_DOMAINS_EXPIRING_SOON_NEXT_30_DAYS = 'next_30_days' satisfies keyof DomainsExpiringSoon;
export const KEY_DOMAINS_EXPIRING_SOON_NEXT_60_DAYS = 'next_60_days' satisfies keyof DomainsExpiringSoon;
export const KEY_DOMAINS_EXPIRING_SOON_NEXT_90_DAYS = 'next_90_days' satisfies keyof DomainsExpiringSoon;

export const KEYS_DOMAINS_EXPIRING_SOON = [
  KEY_DOMAINS_EXPIRING_SOON_NEXT_30_DAYS,
  KEY_DOMAINS_EXPIRING_SOON_NEXT_60_DAYS,
  KEY_DOMAINS_EXPIRING_SOON_NEXT_90_DAYS,
] as const satisfies (keyof DomainsExpiringSoon)[];

export const KEY_DUPLICATE_COMMAND_EXISTING_BATCH_ID = 'existing_batch_id' satisfies keyof DuplicateCommand;
export const KEY_DUPLICATE_COMMAND_EXISTING_JOB_ID = 'existing_job_id' satisfies keyof DuplicateCommand;
export const KEY_DUPLICATE_COMMAND_INDEX = 'index' satisfies keyof DuplicateCommand;
export const KEY_DUPLICATE_COMMAND_INSTANCE_INDEX = 'instance_index' satisfies keyof DuplicateCommand;
export const KEY_DUPLICATE_COMMAND_RESOURCE_KEY = 'resource_key' satisfies keyof DuplicateCommand;

export const KEYS_DUPLICATE_COMMAND = [
  KEY_DUPLICATE_COMMAND_EXISTING_BATCH_ID,
  KEY_DUPLICATE_COMMAND_EXISTING_JOB_ID,
  KEY_DUPLICATE_COMMAND_INDEX,
  KEY_DUPLICATE_COMMAND_INSTANCE_INDEX,
  KEY_DUPLICATE_COMMAND_RESOURCE_KEY,
] as const satisfies (keyof DuplicateCommand)[];

export const KEY_EMAIL_FORWARD_ALIAS_ALIAS = 'alias' satisfies keyof EmailForwardAlias;
export const KEY_EMAIL_FORWARD_ALIAS_EMAIL_FORWARD_ALIAS_ID = 'email_forward_alias_id' satisfies keyof EmailForwardAlias;
export const KEY_EMAIL_FORWARD_ALIAS_FORWARD_TO = 'forward_to' satisfies keyof EmailForwardAlias;

export const KEYS_EMAIL_FORWARD_ALIAS = [
  KEY_EMAIL_FORWARD_ALIAS_ALIAS,
  KEY_EMAIL_FORWARD_ALIAS_EMAIL_FORWARD_ALIAS_ID,
  KEY_EMAIL_FORWARD_ALIAS_FORWARD_TO,
] as const satisfies (keyof EmailForwardAlias)[];

export const KEY_EMAIL_FORWARD_ALIAS_CREATE_ALIAS = 'alias' satisfies keyof EmailForwardAliasCreate;
export const KEY_EMAIL_FORWARD_ALIAS_CREATE_FORWARD_TO = 'forward_to' satisfies keyof EmailForwardAliasCreate;

export const KEYS_EMAIL_FORWARD_ALIAS_CREATE = [
  KEY_EMAIL_FORWARD_ALIAS_CREATE_ALIAS,
  KEY_EMAIL_FORWARD_ALIAS_CREATE_FORWARD_TO,
] as const satisfies (keyof EmailForwardAliasCreate)[];

export const KEY_EMAIL_FORWARD_ALIAS_METRICS_ALIAS = 'alias' satisfies keyof EmailForwardAliasMetrics;
export const KEY_EMAIL_FORWARD_ALIAS_METRICS_BY_STATUS = 'by_status' satisfies keyof EmailForwardAliasMetrics;
export const KEY_EMAIL_FORWARD_ALIAS_METRICS_TOTAL_LOGS = 'total_logs' satisfies keyof EmailForwardAliasMetrics;

export const KEYS_EMAIL_FORWARD_ALIAS_METRICS = [
  KEY_EMAIL_FORWARD_ALIAS_METRICS_ALIAS,
  KEY_EMAIL_FORWARD_ALIAS_METRICS_BY_STATUS,
  KEY_EMAIL_FORWARD_ALIAS_METRICS_TOTAL_LOGS,
] as const satisfies (keyof EmailForwardAliasMetrics)[];

export const KEY_EMAIL_FORWARD_ALIAS_UPDATE_FORWARD_TO = 'forward_to' satisfies keyof EmailForwardAliasUpdate;

export const KEYS_EMAIL_FORWARD_ALIAS_UPDATE = [
  KEY_EMAIL_FORWARD_ALIAS_UPDATE_FORWARD_TO,
] as const satisfies (keyof EmailForwardAliasUpdate)[];

export const KEY_EMAIL_FORWARD_CREATE_ALIASES = 'aliases' satisfies keyof EmailForwardCreate;
export const KEY_EMAIL_FORWARD_CREATE_ENABLED = 'enabled' satisfies keyof EmailForwardCreate;
export const KEY_EMAIL_FORWARD_CREATE_HOSTNAME = 'hostname' satisfies keyof EmailForwardCreate;

export const KEYS_EMAIL_FORWARD_CREATE = [
  KEY_EMAIL_FORWARD_CREATE_ALIASES,
  KEY_EMAIL_FORWARD_CREATE_ENABLED,
  KEY_EMAIL_FORWARD_CREATE_HOSTNAME,
] as const satisfies (keyof EmailForwardCreate)[];

export const KEY_EMAIL_FORWARD_CREATE_BULK_COMMAND_COMMAND = 'command' satisfies keyof EmailForwardCreateBulkCommand;
export const KEY_EMAIL_FORWARD_CREATE_BULK_COMMAND_IDEMPOTENCY_KEY = 'idempotency_key' satisfies keyof EmailForwardCreateBulkCommand;
export const KEY_EMAIL_FORWARD_CREATE_BULK_COMMAND_PAYLOAD = 'payload' satisfies keyof EmailForwardCreateBulkCommand;
export const KEY_EMAIL_FORWARD_CREATE_BULK_COMMAND_VERSION = 'version' satisfies keyof EmailForwardCreateBulkCommand;

export const KEYS_EMAIL_FORWARD_CREATE_BULK_COMMAND = [
  KEY_EMAIL_FORWARD_CREATE_BULK_COMMAND_COMMAND,
  KEY_EMAIL_FORWARD_CREATE_BULK_COMMAND_IDEMPOTENCY_KEY,
  KEY_EMAIL_FORWARD_CREATE_BULK_COMMAND_PAYLOAD,
  KEY_EMAIL_FORWARD_CREATE_BULK_COMMAND_VERSION,
] as const satisfies (keyof EmailForwardCreateBulkCommand)[];

export const KEY_EMAIL_FORWARD_CREATE_BULK_INSTANCE_ALIASES = 'aliases' satisfies keyof EmailForwardCreateBulkInstance;
export const KEY_EMAIL_FORWARD_CREATE_BULK_INSTANCE_ENABLED = 'enabled' satisfies keyof EmailForwardCreateBulkInstance;
export const KEY_EMAIL_FORWARD_CREATE_BULK_INSTANCE_HOSTNAME = 'hostname' satisfies keyof EmailForwardCreateBulkInstance;

export const KEYS_EMAIL_FORWARD_CREATE_BULK_INSTANCE = [
  KEY_EMAIL_FORWARD_CREATE_BULK_INSTANCE_ALIASES,
  KEY_EMAIL_FORWARD_CREATE_BULK_INSTANCE_ENABLED,
  KEY_EMAIL_FORWARD_CREATE_BULK_INSTANCE_HOSTNAME,
] as const satisfies (keyof EmailForwardCreateBulkInstance)[];

export const KEY_EMAIL_FORWARD_CREATE_BULK_PAYLOAD_INSTANCES = 'instances' satisfies keyof EmailForwardCreateBulkPayload;
export const KEY_EMAIL_FORWARD_CREATE_BULK_PAYLOAD_TEMPLATE = 'template' satisfies keyof EmailForwardCreateBulkPayload;

export const KEYS_EMAIL_FORWARD_CREATE_BULK_PAYLOAD = [
  KEY_EMAIL_FORWARD_CREATE_BULK_PAYLOAD_INSTANCES,
  KEY_EMAIL_FORWARD_CREATE_BULK_PAYLOAD_TEMPLATE,
] as const satisfies (keyof EmailForwardCreateBulkPayload)[];

export const KEY_EMAIL_FORWARD_CREATE_BULK_TEMPLATE_ALIASES = 'aliases' satisfies keyof EmailForwardCreateBulkTemplate;
export const KEY_EMAIL_FORWARD_CREATE_BULK_TEMPLATE_AUTO_CREATE_ZONE = 'auto_create_zone' satisfies keyof EmailForwardCreateBulkTemplate;
export const KEY_EMAIL_FORWARD_CREATE_BULK_TEMPLATE_ENABLED = 'enabled' satisfies keyof EmailForwardCreateBulkTemplate;

export const KEYS_EMAIL_FORWARD_CREATE_BULK_TEMPLATE = [
  KEY_EMAIL_FORWARD_CREATE_BULK_TEMPLATE_ALIASES,
  KEY_EMAIL_FORWARD_CREATE_BULK_TEMPLATE_AUTO_CREATE_ZONE,
  KEY_EMAIL_FORWARD_CREATE_BULK_TEMPLATE_ENABLED,
] as const satisfies (keyof EmailForwardCreateBulkTemplate)[];

export const KEY_EMAIL_FORWARD_DELETE_BULK_COMMAND_COMMAND = 'command' satisfies keyof EmailForwardDeleteBulkCommand;
export const KEY_EMAIL_FORWARD_DELETE_BULK_COMMAND_IDEMPOTENCY_KEY = 'idempotency_key' satisfies keyof EmailForwardDeleteBulkCommand;
export const KEY_EMAIL_FORWARD_DELETE_BULK_COMMAND_PAYLOAD = 'payload' satisfies keyof EmailForwardDeleteBulkCommand;
export const KEY_EMAIL_FORWARD_DELETE_BULK_COMMAND_VERSION = 'version' satisfies keyof EmailForwardDeleteBulkCommand;

export const KEYS_EMAIL_FORWARD_DELETE_BULK_COMMAND = [
  KEY_EMAIL_FORWARD_DELETE_BULK_COMMAND_COMMAND,
  KEY_EMAIL_FORWARD_DELETE_BULK_COMMAND_IDEMPOTENCY_KEY,
  KEY_EMAIL_FORWARD_DELETE_BULK_COMMAND_PAYLOAD,
  KEY_EMAIL_FORWARD_DELETE_BULK_COMMAND_VERSION,
] as const satisfies (keyof EmailForwardDeleteBulkCommand)[];

export const KEY_EMAIL_FORWARD_DELETE_BULK_INSTANCE_EMAIL_FORWARD_ID = 'email_forward_id' satisfies keyof EmailForwardDeleteBulkInstance;
export const KEY_EMAIL_FORWARD_DELETE_BULK_INSTANCE_HOSTNAME = 'hostname' satisfies keyof EmailForwardDeleteBulkInstance;

export const KEYS_EMAIL_FORWARD_DELETE_BULK_INSTANCE = [
  KEY_EMAIL_FORWARD_DELETE_BULK_INSTANCE_EMAIL_FORWARD_ID,
  KEY_EMAIL_FORWARD_DELETE_BULK_INSTANCE_HOSTNAME,
] as const satisfies (keyof EmailForwardDeleteBulkInstance)[];

export const KEY_EMAIL_FORWARD_DELETE_BULK_PAYLOAD_INSTANCES = 'instances' satisfies keyof EmailForwardDeleteBulkPayload;

export const KEYS_EMAIL_FORWARD_DELETE_BULK_PAYLOAD = [
  KEY_EMAIL_FORWARD_DELETE_BULK_PAYLOAD_INSTANCES,
] as const satisfies (keyof EmailForwardDeleteBulkPayload)[];

export const KEY_EMAIL_FORWARD_DISABLE_BULK_COMMAND_COMMAND = 'command' satisfies keyof EmailForwardDisableBulkCommand;
export const KEY_EMAIL_FORWARD_DISABLE_BULK_COMMAND_IDEMPOTENCY_KEY = 'idempotency_key' satisfies keyof EmailForwardDisableBulkCommand;
export const KEY_EMAIL_FORWARD_DISABLE_BULK_COMMAND_PAYLOAD = 'payload' satisfies keyof EmailForwardDisableBulkCommand;
export const KEY_EMAIL_FORWARD_DISABLE_BULK_COMMAND_VERSION = 'version' satisfies keyof EmailForwardDisableBulkCommand;

export const KEYS_EMAIL_FORWARD_DISABLE_BULK_COMMAND = [
  KEY_EMAIL_FORWARD_DISABLE_BULK_COMMAND_COMMAND,
  KEY_EMAIL_FORWARD_DISABLE_BULK_COMMAND_IDEMPOTENCY_KEY,
  KEY_EMAIL_FORWARD_DISABLE_BULK_COMMAND_PAYLOAD,
  KEY_EMAIL_FORWARD_DISABLE_BULK_COMMAND_VERSION,
] as const satisfies (keyof EmailForwardDisableBulkCommand)[];

export const KEY_EMAIL_FORWARD_DISABLE_BULK_INSTANCE_EMAIL_FORWARD_ID = 'email_forward_id' satisfies keyof EmailForwardDisableBulkInstance;
export const KEY_EMAIL_FORWARD_DISABLE_BULK_INSTANCE_HOSTNAME = 'hostname' satisfies keyof EmailForwardDisableBulkInstance;

export const KEYS_EMAIL_FORWARD_DISABLE_BULK_INSTANCE = [
  KEY_EMAIL_FORWARD_DISABLE_BULK_INSTANCE_EMAIL_FORWARD_ID,
  KEY_EMAIL_FORWARD_DISABLE_BULK_INSTANCE_HOSTNAME,
] as const satisfies (keyof EmailForwardDisableBulkInstance)[];

export const KEY_EMAIL_FORWARD_DISABLE_BULK_PAYLOAD_INSTANCES = 'instances' satisfies keyof EmailForwardDisableBulkPayload;

export const KEYS_EMAIL_FORWARD_DISABLE_BULK_PAYLOAD = [
  KEY_EMAIL_FORWARD_DISABLE_BULK_PAYLOAD_INSTANCES,
] as const satisfies (keyof EmailForwardDisableBulkPayload)[];

export const KEY_EMAIL_FORWARD_ENABLE_BULK_COMMAND_COMMAND = 'command' satisfies keyof EmailForwardEnableBulkCommand;
export const KEY_EMAIL_FORWARD_ENABLE_BULK_COMMAND_IDEMPOTENCY_KEY = 'idempotency_key' satisfies keyof EmailForwardEnableBulkCommand;
export const KEY_EMAIL_FORWARD_ENABLE_BULK_COMMAND_PAYLOAD = 'payload' satisfies keyof EmailForwardEnableBulkCommand;
export const KEY_EMAIL_FORWARD_ENABLE_BULK_COMMAND_VERSION = 'version' satisfies keyof EmailForwardEnableBulkCommand;

export const KEYS_EMAIL_FORWARD_ENABLE_BULK_COMMAND = [
  KEY_EMAIL_FORWARD_ENABLE_BULK_COMMAND_COMMAND,
  KEY_EMAIL_FORWARD_ENABLE_BULK_COMMAND_IDEMPOTENCY_KEY,
  KEY_EMAIL_FORWARD_ENABLE_BULK_COMMAND_PAYLOAD,
  KEY_EMAIL_FORWARD_ENABLE_BULK_COMMAND_VERSION,
] as const satisfies (keyof EmailForwardEnableBulkCommand)[];

export const KEY_EMAIL_FORWARD_ENABLE_BULK_INSTANCE_EMAIL_FORWARD_ID = 'email_forward_id' satisfies keyof EmailForwardEnableBulkInstance;
export const KEY_EMAIL_FORWARD_ENABLE_BULK_INSTANCE_HOSTNAME = 'hostname' satisfies keyof EmailForwardEnableBulkInstance;

export const KEYS_EMAIL_FORWARD_ENABLE_BULK_INSTANCE = [
  KEY_EMAIL_FORWARD_ENABLE_BULK_INSTANCE_EMAIL_FORWARD_ID,
  KEY_EMAIL_FORWARD_ENABLE_BULK_INSTANCE_HOSTNAME,
] as const satisfies (keyof EmailForwardEnableBulkInstance)[];

export const KEY_EMAIL_FORWARD_ENABLE_BULK_PAYLOAD_INSTANCES = 'instances' satisfies keyof EmailForwardEnableBulkPayload;

export const KEYS_EMAIL_FORWARD_ENABLE_BULK_PAYLOAD = [
  KEY_EMAIL_FORWARD_ENABLE_BULK_PAYLOAD_INSTANCES,
] as const satisfies (keyof EmailForwardEnableBulkPayload)[];

export const KEY_EMAIL_FORWARD_LOG_CREATED_ON = 'created_on' satisfies keyof EmailForwardLog;
export const KEY_EMAIL_FORWARD_LOG_DOMAIN = 'domain' satisfies keyof EmailForwardLog;
export const KEY_EMAIL_FORWARD_LOG_EVENTS = 'events' satisfies keyof EmailForwardLog;
export const KEY_EMAIL_FORWARD_LOG_FINAL_STATUS = 'final_status' satisfies keyof EmailForwardLog;
export const KEY_EMAIL_FORWARD_LOG_FORWARD_EMAIL = 'forward_email' satisfies keyof EmailForwardLog;
export const KEY_EMAIL_FORWARD_LOG_FORWARD_NAME = 'forward_name' satisfies keyof EmailForwardLog;
export const KEY_EMAIL_FORWARD_LOG_HOSTNAME = 'hostname' satisfies keyof EmailForwardLog;
export const KEY_EMAIL_FORWARD_LOG_LOG_ID = 'log_id' satisfies keyof EmailForwardLog;
export const KEY_EMAIL_FORWARD_LOG_MESSAGE_ID = 'message_id' satisfies keyof EmailForwardLog;
export const KEY_EMAIL_FORWARD_LOG_RECIPIENT_EMAIL = 'recipient_email' satisfies keyof EmailForwardLog;
export const KEY_EMAIL_FORWARD_LOG_RECIPIENT_NAME = 'recipient_name' satisfies keyof EmailForwardLog;
export const KEY_EMAIL_FORWARD_LOG_SENDER_EMAIL = 'sender_email' satisfies keyof EmailForwardLog;
export const KEY_EMAIL_FORWARD_LOG_SENDER_NAME = 'sender_name' satisfies keyof EmailForwardLog;
export const KEY_EMAIL_FORWARD_LOG_SUBJECT = 'subject' satisfies keyof EmailForwardLog;
export const KEY_EMAIL_FORWARD_LOG_SYNCED_ON = 'synced_on' satisfies keyof EmailForwardLog;
export const KEY_EMAIL_FORWARD_LOG_TRANSPORT = 'transport' satisfies keyof EmailForwardLog;

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

export const KEY_EMAIL_FORWARD_LOG_EVENT_CODE = 'code' satisfies keyof EmailForwardLogEvent;
export const KEY_EMAIL_FORWARD_LOG_EVENT_CREATED = 'created' satisfies keyof EmailForwardLogEvent;
export const KEY_EMAIL_FORWARD_LOG_EVENT_ID = 'id' satisfies keyof EmailForwardLogEvent;
export const KEY_EMAIL_FORWARD_LOG_EVENT_LOCAL = 'local' satisfies keyof EmailForwardLogEvent;
export const KEY_EMAIL_FORWARD_LOG_EVENT_MESSAGE = 'message' satisfies keyof EmailForwardLogEvent;
export const KEY_EMAIL_FORWARD_LOG_EVENT_SERVER = 'server' satisfies keyof EmailForwardLogEvent;
export const KEY_EMAIL_FORWARD_LOG_EVENT_STATUS = 'status' satisfies keyof EmailForwardLogEvent;

export const KEYS_EMAIL_FORWARD_LOG_EVENT = [
  KEY_EMAIL_FORWARD_LOG_EVENT_CODE,
  KEY_EMAIL_FORWARD_LOG_EVENT_CREATED,
  KEY_EMAIL_FORWARD_LOG_EVENT_ID,
  KEY_EMAIL_FORWARD_LOG_EVENT_LOCAL,
  KEY_EMAIL_FORWARD_LOG_EVENT_MESSAGE,
  KEY_EMAIL_FORWARD_LOG_EVENT_SERVER,
  KEY_EMAIL_FORWARD_LOG_EVENT_STATUS,
] as const satisfies (keyof EmailForwardLogEvent)[];

export const KEY_EMAIL_FORWARD_METRICS_ALIAS_COUNT = 'alias_count' satisfies keyof EmailForwardMetrics;
export const KEY_EMAIL_FORWARD_METRICS_BY_ALIAS = 'by_alias' satisfies keyof EmailForwardMetrics;
export const KEY_EMAIL_FORWARD_METRICS_BY_STATUS = 'by_status' satisfies keyof EmailForwardMetrics;
export const KEY_EMAIL_FORWARD_METRICS_FILTERS = 'filters' satisfies keyof EmailForwardMetrics;
export const KEY_EMAIL_FORWARD_METRICS_RATES = 'rates' satisfies keyof EmailForwardMetrics;
export const KEY_EMAIL_FORWARD_METRICS_TOTAL_LOGS = 'total_logs' satisfies keyof EmailForwardMetrics;

export const KEYS_EMAIL_FORWARD_METRICS = [
  KEY_EMAIL_FORWARD_METRICS_ALIAS_COUNT,
  KEY_EMAIL_FORWARD_METRICS_BY_ALIAS,
  KEY_EMAIL_FORWARD_METRICS_BY_STATUS,
  KEY_EMAIL_FORWARD_METRICS_FILTERS,
  KEY_EMAIL_FORWARD_METRICS_RATES,
  KEY_EMAIL_FORWARD_METRICS_TOTAL_LOGS,
] as const satisfies (keyof EmailForwardMetrics)[];

export const KEY_EMAIL_FORWARD_METRICS_FILTERS_DOMAIN = 'domain' satisfies keyof EmailForwardMetricsFilters;
export const KEY_EMAIL_FORWARD_METRICS_FILTERS_END_TIME = 'end_time' satisfies keyof EmailForwardMetricsFilters;
export const KEY_EMAIL_FORWARD_METRICS_FILTERS_INCLUDE_ALIASES = 'include_aliases' satisfies keyof EmailForwardMetricsFilters;
export const KEY_EMAIL_FORWARD_METRICS_FILTERS_START_TIME = 'start_time' satisfies keyof EmailForwardMetricsFilters;

export const KEYS_EMAIL_FORWARD_METRICS_FILTERS = [
  KEY_EMAIL_FORWARD_METRICS_FILTERS_DOMAIN,
  KEY_EMAIL_FORWARD_METRICS_FILTERS_END_TIME,
  KEY_EMAIL_FORWARD_METRICS_FILTERS_INCLUDE_ALIASES,
  KEY_EMAIL_FORWARD_METRICS_FILTERS_START_TIME,
] as const satisfies (keyof EmailForwardMetricsFilters)[];

export const KEY_EMAIL_FORWARD_METRICS_RATES_BOUNCE_RATE = 'bounce_rate' satisfies keyof EmailForwardMetricsRates;
export const KEY_EMAIL_FORWARD_METRICS_RATES_DELIVERY_RATE = 'delivery_rate' satisfies keyof EmailForwardMetricsRates;
export const KEY_EMAIL_FORWARD_METRICS_RATES_QUEUED_RATE = 'queued_rate' satisfies keyof EmailForwardMetricsRates;
export const KEY_EMAIL_FORWARD_METRICS_RATES_REFUSED_RATE = 'refused_rate' satisfies keyof EmailForwardMetricsRates;

export const KEYS_EMAIL_FORWARD_METRICS_RATES = [
  KEY_EMAIL_FORWARD_METRICS_RATES_BOUNCE_RATE,
  KEY_EMAIL_FORWARD_METRICS_RATES_DELIVERY_RATE,
  KEY_EMAIL_FORWARD_METRICS_RATES_QUEUED_RATE,
  KEY_EMAIL_FORWARD_METRICS_RATES_REFUSED_RATE,
] as const satisfies (keyof EmailForwardMetricsRates)[];

export const KEY_EMAIL_FORWARD_ALIASES = 'aliases' satisfies keyof EmailForward;
export const KEY_EMAIL_FORWARD_CREATED_ON = 'created_on' satisfies keyof EmailForward;
export const KEY_EMAIL_FORWARD_EMAIL_FORWARD_ID = 'email_forward_id' satisfies keyof EmailForward;
export const KEY_EMAIL_FORWARD_ENABLED = 'enabled' satisfies keyof EmailForward;
export const KEY_EMAIL_FORWARD_HOSTNAME = 'hostname' satisfies keyof EmailForward;
export const KEY_EMAIL_FORWARD_UPDATED_ON = 'updated_on' satisfies keyof EmailForward;

export const KEYS_EMAIL_FORWARD = [
  KEY_EMAIL_FORWARD_ALIASES,
  KEY_EMAIL_FORWARD_CREATED_ON,
  KEY_EMAIL_FORWARD_EMAIL_FORWARD_ID,
  KEY_EMAIL_FORWARD_ENABLED,
  KEY_EMAIL_FORWARD_HOSTNAME,
  KEY_EMAIL_FORWARD_UPDATED_ON,
] as const satisfies (keyof EmailForward)[];

export const KEY_EMAIL_FORWARD_UPDATE_BULK_COMMAND_COMMAND = 'command' satisfies keyof EmailForwardUpdateBulkCommand;
export const KEY_EMAIL_FORWARD_UPDATE_BULK_COMMAND_IDEMPOTENCY_KEY = 'idempotency_key' satisfies keyof EmailForwardUpdateBulkCommand;
export const KEY_EMAIL_FORWARD_UPDATE_BULK_COMMAND_PAYLOAD = 'payload' satisfies keyof EmailForwardUpdateBulkCommand;
export const KEY_EMAIL_FORWARD_UPDATE_BULK_COMMAND_VERSION = 'version' satisfies keyof EmailForwardUpdateBulkCommand;

export const KEYS_EMAIL_FORWARD_UPDATE_BULK_COMMAND = [
  KEY_EMAIL_FORWARD_UPDATE_BULK_COMMAND_COMMAND,
  KEY_EMAIL_FORWARD_UPDATE_BULK_COMMAND_IDEMPOTENCY_KEY,
  KEY_EMAIL_FORWARD_UPDATE_BULK_COMMAND_PAYLOAD,
  KEY_EMAIL_FORWARD_UPDATE_BULK_COMMAND_VERSION,
] as const satisfies (keyof EmailForwardUpdateBulkCommand)[];

export const KEY_EMAIL_FORWARD_UPDATE_BULK_INSTANCE_ALIASES = 'aliases' satisfies keyof EmailForwardUpdateBulkInstance;
export const KEY_EMAIL_FORWARD_UPDATE_BULK_INSTANCE_EMAIL_FORWARD_ID = 'email_forward_id' satisfies keyof EmailForwardUpdateBulkInstance;
export const KEY_EMAIL_FORWARD_UPDATE_BULK_INSTANCE_ENABLED = 'enabled' satisfies keyof EmailForwardUpdateBulkInstance;
export const KEY_EMAIL_FORWARD_UPDATE_BULK_INSTANCE_HOSTNAME = 'hostname' satisfies keyof EmailForwardUpdateBulkInstance;

export const KEYS_EMAIL_FORWARD_UPDATE_BULK_INSTANCE = [
  KEY_EMAIL_FORWARD_UPDATE_BULK_INSTANCE_ALIASES,
  KEY_EMAIL_FORWARD_UPDATE_BULK_INSTANCE_EMAIL_FORWARD_ID,
  KEY_EMAIL_FORWARD_UPDATE_BULK_INSTANCE_ENABLED,
  KEY_EMAIL_FORWARD_UPDATE_BULK_INSTANCE_HOSTNAME,
] as const satisfies (keyof EmailForwardUpdateBulkInstance)[];

export const KEY_EMAIL_FORWARD_UPDATE_BULK_PAYLOAD_INSTANCES = 'instances' satisfies keyof EmailForwardUpdateBulkPayload;
export const KEY_EMAIL_FORWARD_UPDATE_BULK_PAYLOAD_TEMPLATE = 'template' satisfies keyof EmailForwardUpdateBulkPayload;

export const KEYS_EMAIL_FORWARD_UPDATE_BULK_PAYLOAD = [
  KEY_EMAIL_FORWARD_UPDATE_BULK_PAYLOAD_INSTANCES,
  KEY_EMAIL_FORWARD_UPDATE_BULK_PAYLOAD_TEMPLATE,
] as const satisfies (keyof EmailForwardUpdateBulkPayload)[];

export const KEY_EMAIL_FORWARD_UPDATE_BULK_TEMPLATE_ALIASES = 'aliases' satisfies keyof EmailForwardUpdateBulkTemplate;
export const KEY_EMAIL_FORWARD_UPDATE_BULK_TEMPLATE_ENABLED = 'enabled' satisfies keyof EmailForwardUpdateBulkTemplate;

export const KEYS_EMAIL_FORWARD_UPDATE_BULK_TEMPLATE = [
  KEY_EMAIL_FORWARD_UPDATE_BULK_TEMPLATE_ALIASES,
  KEY_EMAIL_FORWARD_UPDATE_BULK_TEMPLATE_ENABLED,
] as const satisfies (keyof EmailForwardUpdateBulkTemplate)[];

export const KEY_EMAIL_FORWARD_ZONE_EMAIL_FORWARDS = 'email_forwards' satisfies keyof EmailForwardZone;
export const KEY_EMAIL_FORWARD_ZONE_ZONE_ID = 'zone_id' satisfies keyof EmailForwardZone;
export const KEY_EMAIL_FORWARD_ZONE_ZONE_NAME = 'zone_name' satisfies keyof EmailForwardZone;

export const KEYS_EMAIL_FORWARD_ZONE = [
  KEY_EMAIL_FORWARD_ZONE_EMAIL_FORWARDS,
  KEY_EMAIL_FORWARD_ZONE_ZONE_ID,
  KEY_EMAIL_FORWARD_ZONE_ZONE_NAME,
] as const satisfies (keyof EmailForwardZone)[];

export const KEY_EMAIL_FORWARDS_CONTEXT_CONTEXT_ID = 'context_id' satisfies keyof EmailForwardsContext;
export const KEY_EMAIL_FORWARDS_CONTEXT_CONVERSATION_ID = 'conversation_id' satisfies keyof EmailForwardsContext;
export const KEY_EMAIL_FORWARDS_CONTEXT_CREATED_AT = 'created_at' satisfies keyof EmailForwardsContext;
export const KEY_EMAIL_FORWARDS_CONTEXT_KIND = 'kind' satisfies keyof EmailForwardsContext;
export const KEY_EMAIL_FORWARDS_CONTEXT_ORGANIZATION_ID = 'organization_id' satisfies keyof EmailForwardsContext;
export const KEY_EMAIL_FORWARDS_CONTEXT_PAYLOAD = 'payload' satisfies keyof EmailForwardsContext;
export const KEY_EMAIL_FORWARDS_CONTEXT_USER_ID = 'user_id' satisfies keyof EmailForwardsContext;

export const KEYS_EMAIL_FORWARDS_CONTEXT = [
  KEY_EMAIL_FORWARDS_CONTEXT_CONTEXT_ID,
  KEY_EMAIL_FORWARDS_CONTEXT_CONVERSATION_ID,
  KEY_EMAIL_FORWARDS_CONTEXT_CREATED_AT,
  KEY_EMAIL_FORWARDS_CONTEXT_KIND,
  KEY_EMAIL_FORWARDS_CONTEXT_ORGANIZATION_ID,
  KEY_EMAIL_FORWARDS_CONTEXT_PAYLOAD,
  KEY_EMAIL_FORWARDS_CONTEXT_USER_ID,
] as const satisfies (keyof EmailForwardsContext)[];

export const KEY_EMAIL_FORWARDS_CONTEXT_CREATE_KIND = 'kind' satisfies keyof EmailForwardsContextCreate;
export const KEY_EMAIL_FORWARDS_CONTEXT_CREATE_PAYLOAD = 'payload' satisfies keyof EmailForwardsContextCreate;

export const KEYS_EMAIL_FORWARDS_CONTEXT_CREATE = [
  KEY_EMAIL_FORWARDS_CONTEXT_CREATE_KIND,
  KEY_EMAIL_FORWARDS_CONTEXT_CREATE_PAYLOAD,
] as const satisfies (keyof EmailForwardsContextCreate)[];

export const KEY_EVENT_DATA_DETAILS = 'details' satisfies keyof EventData;
export const KEY_EVENT_DATA_ERROR = 'error' satisfies keyof EventData;
export const KEY_EVENT_DATA_MESSAGE = 'message' satisfies keyof EventData;
export const KEY_EVENT_DATA_VERSION = 'version' satisfies keyof EventData;

export const KEYS_EVENT_DATA = [
  KEY_EVENT_DATA_DETAILS,
  KEY_EVENT_DATA_ERROR,
  KEY_EVENT_DATA_MESSAGE,
  KEY_EVENT_DATA_VERSION,
] as const satisfies (keyof EventData)[];

export const KEY_EVENT_ERROR_CODE = 'code' satisfies keyof EventError;
export const KEY_EVENT_ERROR_DETAIL = 'detail' satisfies keyof EventError;

export const KEYS_EVENT_ERROR = [
  KEY_EVENT_ERROR_CODE,
  KEY_EVENT_ERROR_DETAIL,
] as const satisfies (keyof EventError)[];

export const KEY_EVENT_RESPONSE_ACKNOWLEDGED_ON = 'acknowledged_on' satisfies keyof EventResponse;
export const KEY_EVENT_RESPONSE_CREATED_ON = 'created_on' satisfies keyof EventResponse;
export const KEY_EVENT_RESPONSE_EVENT_DATA = 'event_data' satisfies keyof EventResponse;
export const KEY_EVENT_RESPONSE_EVENT_ID = 'event_id' satisfies keyof EventResponse;
export const KEY_EVENT_RESPONSE_OBJECT_ID = 'object_id' satisfies keyof EventResponse;
export const KEY_EVENT_RESPONSE_OBJECT_TYPE = 'object_type' satisfies keyof EventResponse;
export const KEY_EVENT_RESPONSE_SUBTYPE = 'subtype' satisfies keyof EventResponse;
export const KEY_EVENT_RESPONSE_TYPE = 'type' satisfies keyof EventResponse;

export const KEYS_EVENT_RESPONSE = [
  KEY_EVENT_RESPONSE_ACKNOWLEDGED_ON,
  KEY_EVENT_RESPONSE_CREATED_ON,
  KEY_EVENT_RESPONSE_EVENT_DATA,
  KEY_EVENT_RESPONSE_EVENT_ID,
  KEY_EVENT_RESPONSE_OBJECT_ID,
  KEY_EVENT_RESPONSE_OBJECT_TYPE,
  KEY_EVENT_RESPONSE_SUBTYPE,
  KEY_EVENT_RESPONSE_TYPE,
] as const satisfies (keyof EventResponse)[];

export const KEY_GENERAL_AVAILABILITY_BASE_START_DATE = 'start_date' satisfies keyof GeneralAvailabilityBase;

export const KEYS_GENERAL_AVAILABILITY_BASE = [
  KEY_GENERAL_AVAILABILITY_BASE_START_DATE,
] as const satisfies (keyof GeneralAvailabilityBase)[];

export const KEY_GEO_STATS_BUCKET_KEY = 'key' satisfies keyof GeoStatsBucket;
export const KEY_GEO_STATS_BUCKET_TOTAL = 'total' satisfies keyof GeoStatsBucket;

export const KEYS_GEO_STATS_BUCKET = [
  KEY_GEO_STATS_BUCKET_KEY,
  KEY_GEO_STATS_BUCKET_TOTAL,
] as const satisfies (keyof GeoStatsBucket)[];

export const KEY_GET_PRICES_PRICES = 'prices' satisfies keyof GetPrices;

export const KEYS_GET_PRICES = [
  KEY_GET_PRICES_PRICES,
] as const satisfies (keyof GetPrices)[];

export const KEY_HTTP_VALIDATION_ERROR_ERRORS = 'errors' satisfies keyof HTTPValidationError;
export const KEY_HTTP_VALIDATION_ERROR_STATUS = 'status' satisfies keyof HTTPValidationError;
export const KEY_HTTP_VALIDATION_ERROR_TITLE = 'title' satisfies keyof HTTPValidationError;
export const KEY_HTTP_VALIDATION_ERROR_TYPE = 'type' satisfies keyof HTTPValidationError;

export const KEYS_HTTP_VALIDATION_ERROR = [
  KEY_HTTP_VALIDATION_ERROR_ERRORS,
  KEY_HTTP_VALIDATION_ERROR_STATUS,
  KEY_HTTP_VALIDATION_ERROR_TITLE,
  KEY_HTTP_VALIDATION_ERROR_TYPE,
] as const satisfies (keyof HTTPValidationError)[];

export const KEY_HOST_CREATE_HOSTNAME = 'hostname' satisfies keyof HostCreate;
export const KEY_HOST_CREATE_IP_ADDRESSES = 'ip_addresses' satisfies keyof HostCreate;

export const KEYS_HOST_CREATE = [
  KEY_HOST_CREATE_HOSTNAME,
  KEY_HOST_CREATE_IP_ADDRESSES,
] as const satisfies (keyof HostCreate)[];

export const KEY_HOST_IP_SCHEMA_ADDRESS = 'address' satisfies keyof HostIpSchema;
export const KEY_HOST_IP_SCHEMA_CREATED_ON = 'created_on' satisfies keyof HostIpSchema;
export const KEY_HOST_IP_SCHEMA_HOST_ID = 'host_id' satisfies keyof HostIpSchema;
export const KEY_HOST_IP_SCHEMA_HOST_IP_ID = 'host_ip_id' satisfies keyof HostIpSchema;
export const KEY_HOST_IP_SCHEMA_TYPE = 'type' satisfies keyof HostIpSchema;
export const KEY_HOST_IP_SCHEMA_UPDATED_ON = 'updated_on' satisfies keyof HostIpSchema;

export const KEYS_HOST_IP_SCHEMA = [
  KEY_HOST_IP_SCHEMA_ADDRESS,
  KEY_HOST_IP_SCHEMA_CREATED_ON,
  KEY_HOST_IP_SCHEMA_HOST_ID,
  KEY_HOST_IP_SCHEMA_HOST_IP_ID,
  KEY_HOST_IP_SCHEMA_TYPE,
  KEY_HOST_IP_SCHEMA_UPDATED_ON,
] as const satisfies (keyof HostIpSchema)[];

export const KEY_HOST_CREATED_ON = 'created_on' satisfies keyof Host;
export const KEY_HOST_HOST_ID = 'host_id' satisfies keyof Host;
export const KEY_HOST_HOSTNAME = 'hostname' satisfies keyof Host;
export const KEY_HOST_IP_ADDRESSES = 'ip_addresses' satisfies keyof Host;
export const KEY_HOST_UPDATED_ON = 'updated_on' satisfies keyof Host;

export const KEYS_HOST = [
  KEY_HOST_CREATED_ON,
  KEY_HOST_HOST_ID,
  KEY_HOST_HOSTNAME,
  KEY_HOST_IP_ADDRESSES,
  KEY_HOST_UPDATED_ON,
] as const satisfies (keyof Host)[];

export const KEY_HOST_SCHEMA_CREATED_ON = 'created_on' satisfies keyof HostSchema;
export const KEY_HOST_SCHEMA_DOMAIN_ID = 'domain_id' satisfies keyof HostSchema;
export const KEY_HOST_SCHEMA_HOST_ID = 'host_id' satisfies keyof HostSchema;
export const KEY_HOST_SCHEMA_HOSTNAME = 'hostname' satisfies keyof HostSchema;
export const KEY_HOST_SCHEMA_REGISTRY_ACCOUNT_ID = 'registry_account_id' satisfies keyof HostSchema;
export const KEY_HOST_SCHEMA_STATUS = 'status' satisfies keyof HostSchema;
export const KEY_HOST_SCHEMA_UPDATED_ON = 'updated_on' satisfies keyof HostSchema;

export const KEYS_HOST_SCHEMA = [
  KEY_HOST_SCHEMA_CREATED_ON,
  KEY_HOST_SCHEMA_DOMAIN_ID,
  KEY_HOST_SCHEMA_HOST_ID,
  KEY_HOST_SCHEMA_HOSTNAME,
  KEY_HOST_SCHEMA_REGISTRY_ACCOUNT_ID,
  KEY_HOST_SCHEMA_STATUS,
  KEY_HOST_SCHEMA_UPDATED_ON,
] as const satisfies (keyof HostSchema)[];

export const KEY_HOST_UPDATE_IP_ADDRESSES = 'ip_addresses' satisfies keyof HostUpdate;

export const KEYS_HOST_UPDATE = [
  KEY_HOST_UPDATE_IP_ADDRESSES,
] as const satisfies (keyof HostUpdate)[];

export const KEY_HTTP_REDIRECT_LIST_PROTECTED = 'protected' satisfies keyof HttpRedirectList;
export const KEY_HTTP_REDIRECT_LIST_REDIRECT_CODE = 'redirect_code' satisfies keyof HttpRedirectList;
export const KEY_HTTP_REDIRECT_LIST_REQUEST_HOSTNAME = 'request_hostname' satisfies keyof HttpRedirectList;
export const KEY_HTTP_REDIRECT_LIST_REQUEST_PATH = 'request_path' satisfies keyof HttpRedirectList;
export const KEY_HTTP_REDIRECT_LIST_REQUEST_PROTOCOL = 'request_protocol' satisfies keyof HttpRedirectList;
export const KEY_HTTP_REDIRECT_LIST_REQUEST_SUBDOMAIN = 'request_subdomain' satisfies keyof HttpRedirectList;
export const KEY_HTTP_REDIRECT_LIST_TARGET_HOSTNAME = 'target_hostname' satisfies keyof HttpRedirectList;
export const KEY_HTTP_REDIRECT_LIST_TARGET_PATH = 'target_path' satisfies keyof HttpRedirectList;
export const KEY_HTTP_REDIRECT_LIST_TARGET_PROTOCOL = 'target_protocol' satisfies keyof HttpRedirectList;

export const KEYS_HTTP_REDIRECT_LIST = [
  KEY_HTTP_REDIRECT_LIST_PROTECTED,
  KEY_HTTP_REDIRECT_LIST_REDIRECT_CODE,
  KEY_HTTP_REDIRECT_LIST_REQUEST_HOSTNAME,
  KEY_HTTP_REDIRECT_LIST_REQUEST_PATH,
  KEY_HTTP_REDIRECT_LIST_REQUEST_PROTOCOL,
  KEY_HTTP_REDIRECT_LIST_REQUEST_SUBDOMAIN,
  KEY_HTTP_REDIRECT_LIST_TARGET_HOSTNAME,
  KEY_HTTP_REDIRECT_LIST_TARGET_PATH,
  KEY_HTTP_REDIRECT_LIST_TARGET_PROTOCOL,
] as const satisfies (keyof HttpRedirectList)[];

export const KEY_HTTP_REDIRECT_REMOVE_REQUEST_HOSTNAME = 'request_hostname' satisfies keyof HttpRedirectRemove;
export const KEY_HTTP_REDIRECT_REMOVE_REQUEST_PATH = 'request_path' satisfies keyof HttpRedirectRemove;
export const KEY_HTTP_REDIRECT_REMOVE_REQUEST_PROTOCOL = 'request_protocol' satisfies keyof HttpRedirectRemove;
export const KEY_HTTP_REDIRECT_REMOVE_REQUEST_SUBDOMAIN = 'request_subdomain' satisfies keyof HttpRedirectRemove;

export const KEYS_HTTP_REDIRECT_REMOVE = [
  KEY_HTTP_REDIRECT_REMOVE_REQUEST_HOSTNAME,
  KEY_HTTP_REDIRECT_REMOVE_REQUEST_PATH,
  KEY_HTTP_REDIRECT_REMOVE_REQUEST_PROTOCOL,
  KEY_HTTP_REDIRECT_REMOVE_REQUEST_SUBDOMAIN,
] as const satisfies (keyof HttpRedirectRemove)[];

export const KEY_HTTP_REDIRECT_REQUEST_REDIRECT_CODE = 'redirect_code' satisfies keyof HttpRedirectRequest;
export const KEY_HTTP_REDIRECT_REQUEST_REQUEST_PATH = 'request_path' satisfies keyof HttpRedirectRequest;
export const KEY_HTTP_REDIRECT_REQUEST_TARGET_HOSTNAME = 'target_hostname' satisfies keyof HttpRedirectRequest;
export const KEY_HTTP_REDIRECT_REQUEST_TARGET_PATH = 'target_path' satisfies keyof HttpRedirectRequest;
export const KEY_HTTP_REDIRECT_REQUEST_TARGET_PROTOCOL = 'target_protocol' satisfies keyof HttpRedirectRequest;

export const KEYS_HTTP_REDIRECT_REQUEST = [
  KEY_HTTP_REDIRECT_REQUEST_REDIRECT_CODE,
  KEY_HTTP_REDIRECT_REQUEST_REQUEST_PATH,
  KEY_HTTP_REDIRECT_REQUEST_TARGET_HOSTNAME,
  KEY_HTTP_REDIRECT_REQUEST_TARGET_PATH,
  KEY_HTTP_REDIRECT_REQUEST_TARGET_PROTOCOL,
] as const satisfies (keyof HttpRedirectRequest)[];

export const KEY_HTTP_REDIRECT_UPSERT_REDIRECT_CODE = 'redirect_code' satisfies keyof HttpRedirectUpsert;
export const KEY_HTTP_REDIRECT_UPSERT_REQUEST_HOSTNAME = 'request_hostname' satisfies keyof HttpRedirectUpsert;
export const KEY_HTTP_REDIRECT_UPSERT_REQUEST_PATH = 'request_path' satisfies keyof HttpRedirectUpsert;
export const KEY_HTTP_REDIRECT_UPSERT_REQUEST_PROTOCOL = 'request_protocol' satisfies keyof HttpRedirectUpsert;
export const KEY_HTTP_REDIRECT_UPSERT_REQUEST_SUBDOMAIN = 'request_subdomain' satisfies keyof HttpRedirectUpsert;
export const KEY_HTTP_REDIRECT_UPSERT_TARGET_HOSTNAME = 'target_hostname' satisfies keyof HttpRedirectUpsert;
export const KEY_HTTP_REDIRECT_UPSERT_TARGET_PATH = 'target_path' satisfies keyof HttpRedirectUpsert;
export const KEY_HTTP_REDIRECT_UPSERT_TARGET_PROTOCOL = 'target_protocol' satisfies keyof HttpRedirectUpsert;

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

export const KEY_IDN_BASE_IDN_CAPABLE = 'idn_capable' satisfies keyof IdnBase;
export const KEY_IDN_BASE_IDN_TABLES = 'idn_tables' satisfies keyof IdnBase;

export const KEYS_IDN_BASE = [
  KEY_IDN_BASE_IDN_CAPABLE,
  KEY_IDN_BASE_IDN_TABLES,
] as const satisfies (keyof IdnBase)[];

export const KEY_INVOICE_AMOUNT = 'amount' satisfies keyof Invoice;
export const KEY_INVOICE_CURRENCY = 'currency' satisfies keyof Invoice;
export const KEY_INVOICE_EXTERNAL_ID = 'external_id' satisfies keyof Invoice;
export const KEY_INVOICE_FEES_AMOUNT = 'fees_amount' satisfies keyof Invoice;
export const KEY_INVOICE_FILE_URL = 'file_url' satisfies keyof Invoice;
export const KEY_INVOICE_INVOICE_TYPE = 'invoice_type' satisfies keyof Invoice;
export const KEY_INVOICE_ISSUING_DATE = 'issuing_date' satisfies keyof Invoice;
export const KEY_INVOICE_NUMBER = 'number' satisfies keyof Invoice;
export const KEY_INVOICE_PAYMENT_DUE_DATE = 'payment_due_date' satisfies keyof Invoice;
export const KEY_INVOICE_PAYMENT_OVERDUE = 'payment_overdue' satisfies keyof Invoice;
export const KEY_INVOICE_PAYMENT_STATUS = 'payment_status' satisfies keyof Invoice;
export const KEY_INVOICE_STATUS = 'status' satisfies keyof Invoice;
export const KEY_INVOICE_TAXES_AMOUNT = 'taxes_amount' satisfies keyof Invoice;

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

export const KEY_IP_RESTRICTION_CREATE_IP_NETWORK = 'ip_network' satisfies keyof IpRestrictionCreate;
export const KEY_IP_RESTRICTION_CREATE_ORGANIZATION_ID = 'organization_id' satisfies keyof IpRestrictionCreate;

export const KEYS_IP_RESTRICTION_CREATE = [
  KEY_IP_RESTRICTION_CREATE_IP_NETWORK,
  KEY_IP_RESTRICTION_CREATE_ORGANIZATION_ID,
] as const satisfies (keyof IpRestrictionCreate)[];

export const KEY_IP_RESTRICTION_CREATED_ON = 'created_on' satisfies keyof IpRestriction;
export const KEY_IP_RESTRICTION_IP_NETWORK = 'ip_network' satisfies keyof IpRestriction;
export const KEY_IP_RESTRICTION_IP_RESTRICTION_ID = 'ip_restriction_id' satisfies keyof IpRestriction;
export const KEY_IP_RESTRICTION_LAST_USED_ON = 'last_used_on' satisfies keyof IpRestriction;
export const KEY_IP_RESTRICTION_ORGANIZATION_ID = 'organization_id' satisfies keyof IpRestriction;

export const KEYS_IP_RESTRICTION = [
  KEY_IP_RESTRICTION_CREATED_ON,
  KEY_IP_RESTRICTION_IP_NETWORK,
  KEY_IP_RESTRICTION_IP_RESTRICTION_ID,
  KEY_IP_RESTRICTION_LAST_USED_ON,
  KEY_IP_RESTRICTION_ORGANIZATION_ID,
] as const satisfies (keyof IpRestriction)[];

export const KEY_IP_RESTRICTION_UPDATE_IP_NETWORK = 'ip_network' satisfies keyof IpRestrictionUpdate;
export const KEY_IP_RESTRICTION_UPDATE_LAST_USED_ON = 'last_used_on' satisfies keyof IpRestrictionUpdate;

export const KEYS_IP_RESTRICTION_UPDATE = [
  KEY_IP_RESTRICTION_UPDATE_IP_NETWORK,
  KEY_IP_RESTRICTION_UPDATE_LAST_USED_ON,
] as const satisfies (keyof IpRestrictionUpdate)[];

export const KEY_JOB_BATCH_METADATA_BATCH_ID = 'batch_id' satisfies keyof JobBatchMetadata;
export const KEY_JOB_BATCH_METADATA_CREATED_ON = 'created_on' satisfies keyof JobBatchMetadata;
export const KEY_JOB_BATCH_METADATA_FINISHED_AT = 'finished_at' satisfies keyof JobBatchMetadata;
export const KEY_JOB_BATCH_METADATA_JOB_COUNTS = 'job_counts' satisfies keyof JobBatchMetadata;
export const KEY_JOB_BATCH_METADATA_LABEL = 'label' satisfies keyof JobBatchMetadata;
export const KEY_JOB_BATCH_METADATA_STARTED_AT = 'started_at' satisfies keyof JobBatchMetadata;
export const KEY_JOB_BATCH_METADATA_STATUS = 'status' satisfies keyof JobBatchMetadata;
export const KEY_JOB_BATCH_METADATA_TOTAL_JOBS = 'total_jobs' satisfies keyof JobBatchMetadata;

export const KEYS_JOB_BATCH_METADATA = [
  KEY_JOB_BATCH_METADATA_BATCH_ID,
  KEY_JOB_BATCH_METADATA_CREATED_ON,
  KEY_JOB_BATCH_METADATA_FINISHED_AT,
  KEY_JOB_BATCH_METADATA_JOB_COUNTS,
  KEY_JOB_BATCH_METADATA_LABEL,
  KEY_JOB_BATCH_METADATA_STARTED_AT,
  KEY_JOB_BATCH_METADATA_STATUS,
  KEY_JOB_BATCH_METADATA_TOTAL_JOBS,
] as const satisfies (keyof JobBatchMetadata)[];

export const KEY_JOB_BATCH_REQUEST_COMMANDS = 'commands' satisfies keyof JobBatchRequest;
export const KEY_JOB_BATCH_REQUEST_LABEL = 'label' satisfies keyof JobBatchRequest;
export const KEY_JOB_BATCH_REQUEST_NOT_BEFORE = 'not_before' satisfies keyof JobBatchRequest;
export const KEY_JOB_BATCH_REQUEST_PAUSED = 'paused' satisfies keyof JobBatchRequest;

export const KEYS_JOB_BATCH_REQUEST = [
  KEY_JOB_BATCH_REQUEST_COMMANDS,
  KEY_JOB_BATCH_REQUEST_LABEL,
  KEY_JOB_BATCH_REQUEST_NOT_BEFORE,
  KEY_JOB_BATCH_REQUEST_PAUSED,
] as const satisfies (keyof JobBatchRequest)[];

export const KEY_JOB_BATCH_RETRY_BATCH_ID = 'batch_id' satisfies keyof JobBatchRetry;
export const KEY_JOB_BATCH_RETRY_BLOCKED_COUNT = 'blocked_count' satisfies keyof JobBatchRetry;
export const KEY_JOB_BATCH_RETRY_QUEUED_COUNT = 'queued_count' satisfies keyof JobBatchRetry;
export const KEY_JOB_BATCH_RETRY_RETRIED_COUNT = 'retried_count' satisfies keyof JobBatchRetry;

export const KEYS_JOB_BATCH_RETRY = [
  KEY_JOB_BATCH_RETRY_BATCH_ID,
  KEY_JOB_BATCH_RETRY_BLOCKED_COUNT,
  KEY_JOB_BATCH_RETRY_QUEUED_COUNT,
  KEY_JOB_BATCH_RETRY_RETRIED_COUNT,
] as const satisfies (keyof JobBatchRetry)[];

export const KEY_JOB_BATCH_STATUS_BATCH_ID = 'batch_id' satisfies keyof JobBatchStatus;
export const KEY_JOB_BATCH_STATUS_BLOCKED = 'blocked' satisfies keyof JobBatchStatus;
export const KEY_JOB_BATCH_STATUS_CANCELED = 'canceled' satisfies keyof JobBatchStatus;
export const KEY_JOB_BATCH_STATUS_DEAD_LETTER = 'dead_letter' satisfies keyof JobBatchStatus;
export const KEY_JOB_BATCH_STATUS_FAILED = 'failed' satisfies keyof JobBatchStatus;
export const KEY_JOB_BATCH_STATUS_LABEL = 'label' satisfies keyof JobBatchStatus;
export const KEY_JOB_BATCH_STATUS_PAUSED = 'paused' satisfies keyof JobBatchStatus;
export const KEY_JOB_BATCH_STATUS_PROGRESS_PERCENTAGE = 'progress_percentage' satisfies keyof JobBatchStatus;
export const KEY_JOB_BATCH_STATUS_QUEUED = 'queued' satisfies keyof JobBatchStatus;
export const KEY_JOB_BATCH_STATUS_RUNNING = 'running' satisfies keyof JobBatchStatus;
export const KEY_JOB_BATCH_STATUS_SUCCEEDED = 'succeeded' satisfies keyof JobBatchStatus;
export const KEY_JOB_BATCH_STATUS_TOTAL = 'total' satisfies keyof JobBatchStatus;

export const KEYS_JOB_BATCH_STATUS = [
  KEY_JOB_BATCH_STATUS_BATCH_ID,
  KEY_JOB_BATCH_STATUS_BLOCKED,
  KEY_JOB_BATCH_STATUS_CANCELED,
  KEY_JOB_BATCH_STATUS_DEAD_LETTER,
  KEY_JOB_BATCH_STATUS_FAILED,
  KEY_JOB_BATCH_STATUS_LABEL,
  KEY_JOB_BATCH_STATUS_PAUSED,
  KEY_JOB_BATCH_STATUS_PROGRESS_PERCENTAGE,
  KEY_JOB_BATCH_STATUS_QUEUED,
  KEY_JOB_BATCH_STATUS_RUNNING,
  KEY_JOB_BATCH_STATUS_SUCCEEDED,
  KEY_JOB_BATCH_STATUS_TOTAL,
] as const satisfies (keyof JobBatchStatus)[];

export const KEY_JOB_COUNTS_BY_STATUS_BLOCKED = 'blocked' satisfies keyof JobCountsByStatus;
export const KEY_JOB_COUNTS_BY_STATUS_CANCELED = 'canceled' satisfies keyof JobCountsByStatus;
export const KEY_JOB_COUNTS_BY_STATUS_DEAD_LETTER = 'dead_letter' satisfies keyof JobCountsByStatus;
export const KEY_JOB_COUNTS_BY_STATUS_FAILED = 'failed' satisfies keyof JobCountsByStatus;
export const KEY_JOB_COUNTS_BY_STATUS_PAUSED = 'paused' satisfies keyof JobCountsByStatus;
export const KEY_JOB_COUNTS_BY_STATUS_QUEUED = 'queued' satisfies keyof JobCountsByStatus;
export const KEY_JOB_COUNTS_BY_STATUS_RUNNING = 'running' satisfies keyof JobCountsByStatus;
export const KEY_JOB_COUNTS_BY_STATUS_SUCCEEDED = 'succeeded' satisfies keyof JobCountsByStatus;

export const KEYS_JOB_COUNTS_BY_STATUS = [
  KEY_JOB_COUNTS_BY_STATUS_BLOCKED,
  KEY_JOB_COUNTS_BY_STATUS_CANCELED,
  KEY_JOB_COUNTS_BY_STATUS_DEAD_LETTER,
  KEY_JOB_COUNTS_BY_STATUS_FAILED,
  KEY_JOB_COUNTS_BY_STATUS_PAUSED,
  KEY_JOB_COUNTS_BY_STATUS_QUEUED,
  KEY_JOB_COUNTS_BY_STATUS_RUNNING,
  KEY_JOB_COUNTS_BY_STATUS_SUCCEEDED,
] as const satisfies (keyof JobCountsByStatus)[];

export const KEY_JOB_ATTEMPTS = 'attempts' satisfies keyof Job;
export const KEY_JOB_COMMAND = 'command' satisfies keyof Job;
export const KEY_JOB_CREATED_ON = 'created_on' satisfies keyof Job;
export const KEY_JOB_DISPLAY = 'display' satisfies keyof Job;
export const KEY_JOB_DOMAIN_NAME = 'domain_name' satisfies keyof Job;
export const KEY_JOB_ERROR_CLASS = 'error_class' satisfies keyof Job;
export const KEY_JOB_ERROR_CODE = 'error_code' satisfies keyof Job;
export const KEY_JOB_ERROR_DETAILS = 'error_details' satisfies keyof Job;
export const KEY_JOB_ERROR_MESSAGE = 'error_message' satisfies keyof Job;
export const KEY_JOB_FINISHED_AT = 'finished_at' satisfies keyof Job;
export const KEY_JOB_JOB_ID = 'job_id' satisfies keyof Job;
export const KEY_JOB_OPERATION = 'operation' satisfies keyof Job;
export const KEY_JOB_PAUSED_AT = 'paused_at' satisfies keyof Job;
export const KEY_JOB_PAYLOAD = 'payload' satisfies keyof Job;
export const KEY_JOB_RESOURCE_KEY = 'resource_key' satisfies keyof Job;
export const KEY_JOB_RESULT = 'result' satisfies keyof Job;
export const KEY_JOB_STARTED_AT = 'started_at' satisfies keyof Job;
export const KEY_JOB_STATUS = 'status' satisfies keyof Job;

export const KEYS_JOB = [
  KEY_JOB_ATTEMPTS,
  KEY_JOB_COMMAND,
  KEY_JOB_CREATED_ON,
  KEY_JOB_DISPLAY,
  KEY_JOB_DOMAIN_NAME,
  KEY_JOB_ERROR_CLASS,
  KEY_JOB_ERROR_CODE,
  KEY_JOB_ERROR_DETAILS,
  KEY_JOB_ERROR_MESSAGE,
  KEY_JOB_FINISHED_AT,
  KEY_JOB_JOB_ID,
  KEY_JOB_OPERATION,
  KEY_JOB_PAUSED_AT,
  KEY_JOB_PAYLOAD,
  KEY_JOB_RESOURCE_KEY,
  KEY_JOB_RESULT,
  KEY_JOB_STARTED_AT,
  KEY_JOB_STATUS,
] as const satisfies (keyof Job)[];

export const KEY_LAUNCH_PHASE_BASE_ALLOCATION = 'allocation' satisfies keyof LaunchPhaseBase;
export const KEY_LAUNCH_PHASE_BASE_END_DATE = 'end_date' satisfies keyof LaunchPhaseBase;
export const KEY_LAUNCH_PHASE_BASE_SMD_REQUIRED = 'smd_required' satisfies keyof LaunchPhaseBase;
export const KEY_LAUNCH_PHASE_BASE_START_DATE = 'start_date' satisfies keyof LaunchPhaseBase;
export const KEY_LAUNCH_PHASE_BASE_SUPPORTED = 'supported' satisfies keyof LaunchPhaseBase;
export const KEY_LAUNCH_PHASE_BASE_TYPE = 'type' satisfies keyof LaunchPhaseBase;

export const KEYS_LAUNCH_PHASE_BASE = [
  KEY_LAUNCH_PHASE_BASE_ALLOCATION,
  KEY_LAUNCH_PHASE_BASE_END_DATE,
  KEY_LAUNCH_PHASE_BASE_SMD_REQUIRED,
  KEY_LAUNCH_PHASE_BASE_START_DATE,
  KEY_LAUNCH_PHASE_BASE_SUPPORTED,
  KEY_LAUNCH_PHASE_BASE_TYPE,
] as const satisfies (keyof LaunchPhaseBase)[];

export const KEY_LAUNCH_PHASES_BASE_GENERAL_AVAILABILITY = 'general_availability' satisfies keyof LaunchPhasesBase;
export const KEY_LAUNCH_PHASES_BASE_PHASES = 'phases' satisfies keyof LaunchPhasesBase;
export const KEY_LAUNCH_PHASES_BASE_TRADEMARK_CLAIMS = 'trademark_claims' satisfies keyof LaunchPhasesBase;

export const KEYS_LAUNCH_PHASES_BASE = [
  KEY_LAUNCH_PHASES_BASE_GENERAL_AVAILABILITY,
  KEY_LAUNCH_PHASES_BASE_PHASES,
  KEY_LAUNCH_PHASES_BASE_TRADEMARK_CLAIMS,
] as const satisfies (keyof LaunchPhasesBase)[];

export const KEY_LEGAL_REQUIREMENT_BASE_KEY = 'key' satisfies keyof LegalRequirementBase;
export const KEY_LEGAL_REQUIREMENT_BASE_OPERATIONS = 'operations' satisfies keyof LegalRequirementBase;
export const KEY_LEGAL_REQUIREMENT_BASE_TYPE = 'type' satisfies keyof LegalRequirementBase;
export const KEY_LEGAL_REQUIREMENT_BASE_URL = 'url' satisfies keyof LegalRequirementBase;

export const KEYS_LEGAL_REQUIREMENT_BASE = [
  KEY_LEGAL_REQUIREMENT_BASE_KEY,
  KEY_LEGAL_REQUIREMENT_BASE_OPERATIONS,
  KEY_LEGAL_REQUIREMENT_BASE_TYPE,
  KEY_LEGAL_REQUIREMENT_BASE_URL,
] as const satisfies (keyof LegalRequirementBase)[];

export const KEY_LIST_VANITY_NAMESERVER_SETS_RES_PAGINATION = 'pagination' satisfies keyof ListVanityNameserverSetsRes;
export const KEY_LIST_VANITY_NAMESERVER_SETS_RES_RESULTS = 'results' satisfies keyof ListVanityNameserverSetsRes;

export const KEYS_LIST_VANITY_NAMESERVER_SETS_RES = [
  KEY_LIST_VANITY_NAMESERVER_SETS_RES_PAGINATION,
  KEY_LIST_VANITY_NAMESERVER_SETS_RES_RESULTS,
] as const satisfies (keyof ListVanityNameserverSetsRes)[];

export const KEY_LIST_ZONES_REFERENCING_SET_RES_PAGINATION = 'pagination' satisfies keyof ListZonesReferencingSetRes;
export const KEY_LIST_ZONES_REFERENCING_SET_RES_RESULTS = 'results' satisfies keyof ListZonesReferencingSetRes;

export const KEYS_LIST_ZONES_REFERENCING_SET_RES = [
  KEY_LIST_ZONES_REFERENCING_SET_RES_PAGINATION,
  KEY_LIST_ZONES_REFERENCING_SET_RES_RESULTS,
] as const satisfies (keyof ListZonesReferencingSetRes)[];

export const KEY_LOCAL_PRESENCE_BASE_ELIGIBLE_COUNTRIES = 'eligible_countries' satisfies keyof LocalPresenceBase;
export const KEY_LOCAL_PRESENCE_BASE_EXEMPTIONS = 'exemptions' satisfies keyof LocalPresenceBase;
export const KEY_LOCAL_PRESENCE_BASE_REQUIRED = 'required' satisfies keyof LocalPresenceBase;
export const KEY_LOCAL_PRESENCE_BASE_REQUIREMENT = 'requirement' satisfies keyof LocalPresenceBase;
export const KEY_LOCAL_PRESENCE_BASE_TYPE = 'type' satisfies keyof LocalPresenceBase;

export const KEYS_LOCAL_PRESENCE_BASE = [
  KEY_LOCAL_PRESENCE_BASE_ELIGIBLE_COUNTRIES,
  KEY_LOCAL_PRESENCE_BASE_EXEMPTIONS,
  KEY_LOCAL_PRESENCE_BASE_REQUIRED,
  KEY_LOCAL_PRESENCE_BASE_REQUIREMENT,
  KEY_LOCAL_PRESENCE_BASE_TYPE,
] as const satisfies (keyof LocalPresenceBase)[];

export const KEY_MEMORY_FACT_CREATED_AT = 'created_at' satisfies keyof MemoryFact;
export const KEY_MEMORY_FACT_EXPIRES_AT = 'expires_at' satisfies keyof MemoryFact;
export const KEY_MEMORY_FACT_FACT_ID = 'fact_id' satisfies keyof MemoryFact;
export const KEY_MEMORY_FACT_KEY = 'key' satisfies keyof MemoryFact;
export const KEY_MEMORY_FACT_KIND = 'kind' satisfies keyof MemoryFact;
export const KEY_MEMORY_FACT_ORGANIZATION_ID = 'organization_id' satisfies keyof MemoryFact;
export const KEY_MEMORY_FACT_UPDATED_AT = 'updated_at' satisfies keyof MemoryFact;
export const KEY_MEMORY_FACT_VALUE = 'value' satisfies keyof MemoryFact;

export const KEYS_MEMORY_FACT = [
  KEY_MEMORY_FACT_CREATED_AT,
  KEY_MEMORY_FACT_EXPIRES_AT,
  KEY_MEMORY_FACT_FACT_ID,
  KEY_MEMORY_FACT_KEY,
  KEY_MEMORY_FACT_KIND,
  KEY_MEMORY_FACT_ORGANIZATION_ID,
  KEY_MEMORY_FACT_UPDATED_AT,
  KEY_MEMORY_FACT_VALUE,
] as const satisfies (keyof MemoryFact)[];

export const KEY_MEMORY_FACT_CREATE_REQUEST_KEY = 'key' satisfies keyof MemoryFactCreateRequest;
export const KEY_MEMORY_FACT_CREATE_REQUEST_KIND = 'kind' satisfies keyof MemoryFactCreateRequest;
export const KEY_MEMORY_FACT_CREATE_REQUEST_TTL_SECONDS = 'ttl_seconds' satisfies keyof MemoryFactCreateRequest;
export const KEY_MEMORY_FACT_CREATE_REQUEST_VALUE = 'value' satisfies keyof MemoryFactCreateRequest;

export const KEYS_MEMORY_FACT_CREATE_REQUEST = [
  KEY_MEMORY_FACT_CREATE_REQUEST_KEY,
  KEY_MEMORY_FACT_CREATE_REQUEST_KIND,
  KEY_MEMORY_FACT_CREATE_REQUEST_TTL_SECONDS,
  KEY_MEMORY_FACT_CREATE_REQUEST_VALUE,
] as const satisfies (keyof MemoryFactCreateRequest)[];

export const KEY_MEMORY_FACT_LIST_NEXT_CURSOR = 'next_cursor' satisfies keyof MemoryFactList;
export const KEY_MEMORY_FACT_LIST_RESULTS = 'results' satisfies keyof MemoryFactList;

export const KEYS_MEMORY_FACT_LIST = [
  KEY_MEMORY_FACT_LIST_NEXT_CURSOR,
  KEY_MEMORY_FACT_LIST_RESULTS,
] as const satisfies (keyof MemoryFactList)[];

export const KEY_MEMORY_FACT_PATCH_REQUEST_TTL_SECONDS = 'ttl_seconds' satisfies keyof MemoryFactPatchRequest;
export const KEY_MEMORY_FACT_PATCH_REQUEST_VALUE = 'value' satisfies keyof MemoryFactPatchRequest;

export const KEYS_MEMORY_FACT_PATCH_REQUEST = [
  KEY_MEMORY_FACT_PATCH_REQUEST_TTL_SECONDS,
  KEY_MEMORY_FACT_PATCH_REQUEST_VALUE,
] as const satisfies (keyof MemoryFactPatchRequest)[];

export const KEY_MESSAGE_CONTENT = 'content' satisfies keyof Message;
export const KEY_MESSAGE_CONVERSATION_ID = 'conversation_id' satisfies keyof Message;
export const KEY_MESSAGE_CREATED_AT = 'created_at' satisfies keyof Message;
export const KEY_MESSAGE_MESSAGE_ID = 'message_id' satisfies keyof Message;
export const KEY_MESSAGE_METADATA = 'metadata' satisfies keyof Message;
export const KEY_MESSAGE_ROLE = 'role' satisfies keyof Message;

export const KEYS_MESSAGE = [
  KEY_MESSAGE_CONTENT,
  KEY_MESSAGE_CONVERSATION_ID,
  KEY_MESSAGE_CREATED_AT,
  KEY_MESSAGE_MESSAGE_ID,
  KEY_MESSAGE_METADATA,
  KEY_MESSAGE_ROLE,
] as const satisfies (keyof Message)[];

export const KEY_MESSAGE_CREATE_REQUEST_CONTENT = 'content' satisfies keyof MessageCreateRequest;
export const KEY_MESSAGE_CREATE_REQUEST_METADATA = 'metadata' satisfies keyof MessageCreateRequest;
export const KEY_MESSAGE_CREATE_REQUEST_N8N_HISTORY_ID = 'n8n_history_id' satisfies keyof MessageCreateRequest;
export const KEY_MESSAGE_CREATE_REQUEST_ROLE = 'role' satisfies keyof MessageCreateRequest;

export const KEYS_MESSAGE_CREATE_REQUEST = [
  KEY_MESSAGE_CREATE_REQUEST_CONTENT,
  KEY_MESSAGE_CREATE_REQUEST_METADATA,
  KEY_MESSAGE_CREATE_REQUEST_N8N_HISTORY_ID,
  KEY_MESSAGE_CREATE_REQUEST_ROLE,
] as const satisfies (keyof MessageCreateRequest)[];

export const KEY_MESSAGE_LIST_PAGINATION = 'pagination' satisfies keyof MessageList;
export const KEY_MESSAGE_LIST_RESULTS = 'results' satisfies keyof MessageList;

export const KEYS_MESSAGE_LIST = [
  KEY_MESSAGE_LIST_PAGINATION,
  KEY_MESSAGE_LIST_RESULTS,
] as const satisfies (keyof MessageList)[];

export const KEY_NAMESERVER_HOSTNAME = 'hostname' satisfies keyof Nameserver;
export const KEY_NAMESERVER_IP_ADDRESSES = 'ip_addresses' satisfies keyof Nameserver;

export const KEYS_NAMESERVER = [
  KEY_NAMESERVER_HOSTNAME,
  KEY_NAMESERVER_IP_ADDRESSES,
] as const satisfies (keyof Nameserver)[];

export const KEY_NOR_ID_DECLARATION_CONFIRM_REQUEST_ACCEPT_NAME = 'accept_name' satisfies keyof NorIdDeclarationConfirmRequest;

export const KEYS_NOR_ID_DECLARATION_CONFIRM_REQUEST = [
  KEY_NOR_ID_DECLARATION_CONFIRM_REQUEST_ACCEPT_NAME,
] as const satisfies (keyof NorIdDeclarationConfirmRequest)[];

export const KEY_NOR_ID_DECLARATION_DECLARATION_CONTRACT_TEXT = 'declaration_contract_text' satisfies keyof NorIdDeclaration;
export const KEY_NOR_ID_DECLARATION_DECLARATION_HEADER = 'declaration_header' satisfies keyof NorIdDeclaration;
export const KEY_NOR_ID_DECLARATION_DECLARATION_INTRODUCTION = 'declaration_introduction' satisfies keyof NorIdDeclaration;
export const KEY_NOR_ID_DECLARATION_DECLARATION_VERSION = 'declaration_version' satisfies keyof NorIdDeclaration;
export const KEY_NOR_ID_DECLARATION_DOMAIN_NAME = 'domain_name' satisfies keyof NorIdDeclaration;
export const KEY_NOR_ID_DECLARATION_EXPIRES_ON = 'expires_on' satisfies keyof NorIdDeclaration;
export const KEY_NOR_ID_DECLARATION_IDENTITY_TYPE = 'identity_type' satisfies keyof NorIdDeclaration;
export const KEY_NOR_ID_DECLARATION_IDENTITY_VALUE = 'identity_value' satisfies keyof NorIdDeclaration;
export const KEY_NOR_ID_DECLARATION_STATUS = 'status' satisfies keyof NorIdDeclaration;
export const KEY_NOR_ID_DECLARATION_SUBSCRIBER_NAME = 'subscriber_name' satisfies keyof NorIdDeclaration;

export const KEYS_NOR_ID_DECLARATION = [
  KEY_NOR_ID_DECLARATION_DECLARATION_CONTRACT_TEXT,
  KEY_NOR_ID_DECLARATION_DECLARATION_HEADER,
  KEY_NOR_ID_DECLARATION_DECLARATION_INTRODUCTION,
  KEY_NOR_ID_DECLARATION_DECLARATION_VERSION,
  KEY_NOR_ID_DECLARATION_DOMAIN_NAME,
  KEY_NOR_ID_DECLARATION_EXPIRES_ON,
  KEY_NOR_ID_DECLARATION_IDENTITY_TYPE,
  KEY_NOR_ID_DECLARATION_IDENTITY_VALUE,
  KEY_NOR_ID_DECLARATION_STATUS,
  KEY_NOR_ID_DECLARATION_SUBSCRIBER_NAME,
] as const satisfies (keyof NorIdDeclaration)[];

export const KEY_NOR_ID_RESELLER_DECLARATION_REQUEST_ACCEPT_DATE = 'accept_date' satisfies keyof NorIdResellerDeclarationRequest;
export const KEY_NOR_ID_RESELLER_DECLARATION_REQUEST_ACCEPT_NAME = 'accept_name' satisfies keyof NorIdResellerDeclarationRequest;

export const KEYS_NOR_ID_RESELLER_DECLARATION_REQUEST = [
  KEY_NOR_ID_RESELLER_DECLARATION_REQUEST_ACCEPT_DATE,
  KEY_NOR_ID_RESELLER_DECLARATION_REQUEST_ACCEPT_NAME,
] as const satisfies (keyof NorIdResellerDeclarationRequest)[];

export const KEY_OBJECT_LOG_ACTION = 'action' satisfies keyof ObjectLog;
export const KEY_OBJECT_LOG_CREATED_ON = 'created_on' satisfies keyof ObjectLog;
export const KEY_OBJECT_LOG_DETAILS = 'details' satisfies keyof ObjectLog;
export const KEY_OBJECT_LOG_OBJECT_ID = 'object_id' satisfies keyof ObjectLog;
export const KEY_OBJECT_LOG_OBJECT_LOG_ID = 'object_log_id' satisfies keyof ObjectLog;
export const KEY_OBJECT_LOG_OBJECT_TYPE = 'object_type' satisfies keyof ObjectLog;
export const KEY_OBJECT_LOG_PERFORMED_BY_ID = 'performed_by_id' satisfies keyof ObjectLog;
export const KEY_OBJECT_LOG_PERFORMED_BY_TYPE = 'performed_by_type' satisfies keyof ObjectLog;
export const KEY_OBJECT_LOG_SERVER_REQUEST_ID = 'server_request_id' satisfies keyof ObjectLog;

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

export const KEY_OBJECT_TAG_CHANGES_ADD = 'add' satisfies keyof ObjectTagChanges;
export const KEY_OBJECT_TAG_CHANGES_REMOVE = 'remove' satisfies keyof ObjectTagChanges;

export const KEYS_OBJECT_TAG_CHANGES = [
  KEY_OBJECT_TAG_CHANGES_ADD,
  KEY_OBJECT_TAG_CHANGES_REMOVE,
] as const satisfies (keyof ObjectTagChanges)[];

export const KEY_OBJECT_TAG_CHANGES2_ADDED = 'added' satisfies keyof ObjectTagChanges2;
export const KEY_OBJECT_TAG_CHANGES2_REMOVED = 'removed' satisfies keyof ObjectTagChanges2;
export const KEY_OBJECT_TAG_CHANGES2_UNRESOLVED = 'unresolved' satisfies keyof ObjectTagChanges2;

export const KEYS_OBJECT_TAG_CHANGES2 = [
  KEY_OBJECT_TAG_CHANGES2_ADDED,
  KEY_OBJECT_TAG_CHANGES2_REMOVED,
  KEY_OBJECT_TAG_CHANGES2_UNRESOLVED,
] as const satisfies (keyof ObjectTagChanges2)[];

export const KEY_ORGANIZATION_ADDRESS_1 = 'address_1' satisfies keyof Organization;
export const KEY_ORGANIZATION_ADDRESS_2 = 'address_2' satisfies keyof Organization;
export const KEY_ORGANIZATION_ATTRIBUTES = 'attributes' satisfies keyof Organization;
export const KEY_ORGANIZATION_BILLING_MODE = 'billing_mode' satisfies keyof Organization;
export const KEY_ORGANIZATION_BUSINESS_NUMBER = 'business_number' satisfies keyof Organization;
export const KEY_ORGANIZATION_CITY = 'city' satisfies keyof Organization;
export const KEY_ORGANIZATION_COUNTRY_CODE = 'country_code' satisfies keyof Organization;
export const KEY_ORGANIZATION_CREATED_ON = 'created_on' satisfies keyof Organization;
export const KEY_ORGANIZATION_CURRENCY = 'currency' satisfies keyof Organization;
export const KEY_ORGANIZATION_DEFAULT_LOCALE = 'default_locale' satisfies keyof Organization;
export const KEY_ORGANIZATION_DELETED_ON = 'deleted_on' satisfies keyof Organization;
export const KEY_ORGANIZATION_KEYCLOAK_ORGANIZATION_ID = 'keycloak_organization_id' satisfies keyof Organization;
export const KEY_ORGANIZATION_NAME = 'name' satisfies keyof Organization;
export const KEY_ORGANIZATION_ORGANIZATION_ID = 'organization_id' satisfies keyof Organization;
export const KEY_ORGANIZATION_PARENT_ORGANIZATION_ID = 'parent_organization_id' satisfies keyof Organization;
export const KEY_ORGANIZATION_POSTAL_CODE = 'postal_code' satisfies keyof Organization;
export const KEY_ORGANIZATION_STATE = 'state' satisfies keyof Organization;
export const KEY_ORGANIZATION_STATUS = 'status' satisfies keyof Organization;
export const KEY_ORGANIZATION_TAX_ID = 'tax_id' satisfies keyof Organization;
export const KEY_ORGANIZATION_TAX_ID_TYPE = 'tax_id_type' satisfies keyof Organization;
export const KEY_ORGANIZATION_TAX_RATE = 'tax_rate' satisfies keyof Organization;
export const KEY_ORGANIZATION_USERS = 'users' satisfies keyof Organization;

export const KEYS_ORGANIZATION = [
  KEY_ORGANIZATION_ADDRESS_1,
  KEY_ORGANIZATION_ADDRESS_2,
  KEY_ORGANIZATION_ATTRIBUTES,
  KEY_ORGANIZATION_BILLING_MODE,
  KEY_ORGANIZATION_BUSINESS_NUMBER,
  KEY_ORGANIZATION_CITY,
  KEY_ORGANIZATION_COUNTRY_CODE,
  KEY_ORGANIZATION_CREATED_ON,
  KEY_ORGANIZATION_CURRENCY,
  KEY_ORGANIZATION_DEFAULT_LOCALE,
  KEY_ORGANIZATION_DELETED_ON,
  KEY_ORGANIZATION_KEYCLOAK_ORGANIZATION_ID,
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

export const KEY_ORGANIZATION_ATTRIBUTE_CREATED_ON = 'created_on' satisfies keyof OrganizationAttribute;
export const KEY_ORGANIZATION_ATTRIBUTE_KEY = 'key' satisfies keyof OrganizationAttribute;
export const KEY_ORGANIZATION_ATTRIBUTE_ORGANIZATION_ATTRIBUTE_ID = 'organization_attribute_id' satisfies keyof OrganizationAttribute;
export const KEY_ORGANIZATION_ATTRIBUTE_PRIVATE = 'private' satisfies keyof OrganizationAttribute;
export const KEY_ORGANIZATION_ATTRIBUTE_PROTECTED = 'protected' satisfies keyof OrganizationAttribute;
export const KEY_ORGANIZATION_ATTRIBUTE_UPDATED_ON = 'updated_on' satisfies keyof OrganizationAttribute;
export const KEY_ORGANIZATION_ATTRIBUTE_VALUE = 'value' satisfies keyof OrganizationAttribute;

export const KEYS_ORGANIZATION_ATTRIBUTE = [
  KEY_ORGANIZATION_ATTRIBUTE_CREATED_ON,
  KEY_ORGANIZATION_ATTRIBUTE_KEY,
  KEY_ORGANIZATION_ATTRIBUTE_ORGANIZATION_ATTRIBUTE_ID,
  KEY_ORGANIZATION_ATTRIBUTE_PRIVATE,
  KEY_ORGANIZATION_ATTRIBUTE_PROTECTED,
  KEY_ORGANIZATION_ATTRIBUTE_UPDATED_ON,
  KEY_ORGANIZATION_ATTRIBUTE_VALUE,
] as const satisfies (keyof OrganizationAttribute)[];

export const KEY_ORGANIZATION_ATTRIBUTE_CREATE_KEY = 'key' satisfies keyof OrganizationAttributeCreate;
export const KEY_ORGANIZATION_ATTRIBUTE_CREATE_PRIVATE = 'private' satisfies keyof OrganizationAttributeCreate;
export const KEY_ORGANIZATION_ATTRIBUTE_CREATE_PROTECTED = 'protected' satisfies keyof OrganizationAttributeCreate;
export const KEY_ORGANIZATION_ATTRIBUTE_CREATE_VALUE = 'value' satisfies keyof OrganizationAttributeCreate;

export const KEYS_ORGANIZATION_ATTRIBUTE_CREATE = [
  KEY_ORGANIZATION_ATTRIBUTE_CREATE_KEY,
  KEY_ORGANIZATION_ATTRIBUTE_CREATE_PRIVATE,
  KEY_ORGANIZATION_ATTRIBUTE_CREATE_PROTECTED,
  KEY_ORGANIZATION_ATTRIBUTE_CREATE_VALUE,
] as const satisfies (keyof OrganizationAttributeCreate)[];

export const KEY_ORGANIZATION_ATTRIBUTE2_CREATED_ON = 'created_on' satisfies keyof OrganizationAttribute2;
export const KEY_ORGANIZATION_ATTRIBUTE2_KEY = 'key' satisfies keyof OrganizationAttribute2;
export const KEY_ORGANIZATION_ATTRIBUTE2_ORGANIZATION_ATTRIBUTE_ID = 'organization_attribute_id' satisfies keyof OrganizationAttribute2;
export const KEY_ORGANIZATION_ATTRIBUTE2_PROTECTED = 'protected' satisfies keyof OrganizationAttribute2;
export const KEY_ORGANIZATION_ATTRIBUTE2_UPDATED_ON = 'updated_on' satisfies keyof OrganizationAttribute2;
export const KEY_ORGANIZATION_ATTRIBUTE2_VALUE = 'value' satisfies keyof OrganizationAttribute2;

export const KEYS_ORGANIZATION_ATTRIBUTE2 = [
  KEY_ORGANIZATION_ATTRIBUTE2_CREATED_ON,
  KEY_ORGANIZATION_ATTRIBUTE2_KEY,
  KEY_ORGANIZATION_ATTRIBUTE2_ORGANIZATION_ATTRIBUTE_ID,
  KEY_ORGANIZATION_ATTRIBUTE2_PROTECTED,
  KEY_ORGANIZATION_ATTRIBUTE2_UPDATED_ON,
  KEY_ORGANIZATION_ATTRIBUTE2_VALUE,
] as const satisfies (keyof OrganizationAttribute2)[];

export const KEY_ORGANIZATION_ATTRIBUTE_UPDATE_KEY = 'key' satisfies keyof OrganizationAttributeUpdate;
export const KEY_ORGANIZATION_ATTRIBUTE_UPDATE_PRIVATE = 'private' satisfies keyof OrganizationAttributeUpdate;
export const KEY_ORGANIZATION_ATTRIBUTE_UPDATE_PROTECTED = 'protected' satisfies keyof OrganizationAttributeUpdate;
export const KEY_ORGANIZATION_ATTRIBUTE_UPDATE_VALUE = 'value' satisfies keyof OrganizationAttributeUpdate;

export const KEYS_ORGANIZATION_ATTRIBUTE_UPDATE = [
  KEY_ORGANIZATION_ATTRIBUTE_UPDATE_KEY,
  KEY_ORGANIZATION_ATTRIBUTE_UPDATE_PRIVATE,
  KEY_ORGANIZATION_ATTRIBUTE_UPDATE_PROTECTED,
  KEY_ORGANIZATION_ATTRIBUTE_UPDATE_VALUE,
] as const satisfies (keyof OrganizationAttributeUpdate)[];

export const KEY_ORGANIZATION_CREATE_ADDRESS_1 = 'address_1' satisfies keyof OrganizationCreate;
export const KEY_ORGANIZATION_CREATE_ADDRESS_2 = 'address_2' satisfies keyof OrganizationCreate;
export const KEY_ORGANIZATION_CREATE_ATTRIBUTES = 'attributes' satisfies keyof OrganizationCreate;
export const KEY_ORGANIZATION_CREATE_BILLING_MODE = 'billing_mode' satisfies keyof OrganizationCreate;
export const KEY_ORGANIZATION_CREATE_BUSINESS_NUMBER = 'business_number' satisfies keyof OrganizationCreate;
export const KEY_ORGANIZATION_CREATE_CITY = 'city' satisfies keyof OrganizationCreate;
export const KEY_ORGANIZATION_CREATE_COUNTRY_CODE = 'country_code' satisfies keyof OrganizationCreate;
export const KEY_ORGANIZATION_CREATE_CURRENCY = 'currency' satisfies keyof OrganizationCreate;
export const KEY_ORGANIZATION_CREATE_DEFAULT_LOCALE = 'default_locale' satisfies keyof OrganizationCreate;
export const KEY_ORGANIZATION_CREATE_NAME = 'name' satisfies keyof OrganizationCreate;
export const KEY_ORGANIZATION_CREATE_PARENT_ORGANIZATION_ID = 'parent_organization_id' satisfies keyof OrganizationCreate;
export const KEY_ORGANIZATION_CREATE_POSTAL_CODE = 'postal_code' satisfies keyof OrganizationCreate;
export const KEY_ORGANIZATION_CREATE_STATE = 'state' satisfies keyof OrganizationCreate;
export const KEY_ORGANIZATION_CREATE_TAX_ID = 'tax_id' satisfies keyof OrganizationCreate;
export const KEY_ORGANIZATION_CREATE_TAX_ID_TYPE = 'tax_id_type' satisfies keyof OrganizationCreate;
export const KEY_ORGANIZATION_CREATE_TAX_RATE = 'tax_rate' satisfies keyof OrganizationCreate;
export const KEY_ORGANIZATION_CREATE_USERS = 'users' satisfies keyof OrganizationCreate;

export const KEYS_ORGANIZATION_CREATE = [
  KEY_ORGANIZATION_CREATE_ADDRESS_1,
  KEY_ORGANIZATION_CREATE_ADDRESS_2,
  KEY_ORGANIZATION_CREATE_ATTRIBUTES,
  KEY_ORGANIZATION_CREATE_BILLING_MODE,
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

export const KEY_ORGANIZATION_CREDENTIAL_API_KEY_DESCRIPTION = 'api_key_description' satisfies keyof OrganizationCredential;
export const KEY_ORGANIZATION_CREDENTIAL_API_KEY_ID = 'api_key_id' satisfies keyof OrganizationCredential;
export const KEY_ORGANIZATION_CREDENTIAL_API_KEY_NAME = 'api_key_name' satisfies keyof OrganizationCredential;
export const KEY_ORGANIZATION_CREDENTIAL_CREATED_ON = 'created_on' satisfies keyof OrganizationCredential;
export const KEY_ORGANIZATION_CREDENTIAL_DELETED_ON = 'deleted_on' satisfies keyof OrganizationCredential;
export const KEY_ORGANIZATION_CREDENTIAL_EXPIRES_AT = 'expires_at' satisfies keyof OrganizationCredential;
export const KEY_ORGANIZATION_CREDENTIAL_LAST_USED_ON = 'last_used_on' satisfies keyof OrganizationCredential;
export const KEY_ORGANIZATION_CREDENTIAL_ORGANIZATION_ID = 'organization_id' satisfies keyof OrganizationCredential;
export const KEY_ORGANIZATION_CREDENTIAL_ROLE = 'role' satisfies keyof OrganizationCredential;
export const KEY_ORGANIZATION_CREDENTIAL_STATUS = 'status' satisfies keyof OrganizationCredential;

export const KEYS_ORGANIZATION_CREDENTIAL = [
  KEY_ORGANIZATION_CREDENTIAL_API_KEY_DESCRIPTION,
  KEY_ORGANIZATION_CREDENTIAL_API_KEY_ID,
  KEY_ORGANIZATION_CREDENTIAL_API_KEY_NAME,
  KEY_ORGANIZATION_CREDENTIAL_CREATED_ON,
  KEY_ORGANIZATION_CREDENTIAL_DELETED_ON,
  KEY_ORGANIZATION_CREDENTIAL_EXPIRES_AT,
  KEY_ORGANIZATION_CREDENTIAL_LAST_USED_ON,
  KEY_ORGANIZATION_CREDENTIAL_ORGANIZATION_ID,
  KEY_ORGANIZATION_CREDENTIAL_ROLE,
  KEY_ORGANIZATION_CREDENTIAL_STATUS,
] as const satisfies (keyof OrganizationCredential)[];

export const KEY_ORGANIZATION_TOKEN_ACCESS_TOKEN = 'access_token' satisfies keyof OrganizationToken;
export const KEY_ORGANIZATION_TOKEN_EXPIRES_IN = 'expires_in' satisfies keyof OrganizationToken;
export const KEY_ORGANIZATION_TOKEN_TOKEN_TYPE = 'token_type' satisfies keyof OrganizationToken;

export const KEYS_ORGANIZATION_TOKEN = [
  KEY_ORGANIZATION_TOKEN_ACCESS_TOKEN,
  KEY_ORGANIZATION_TOKEN_EXPIRES_IN,
  KEY_ORGANIZATION_TOKEN_TOKEN_TYPE,
] as const satisfies (keyof OrganizationToken)[];

export const KEY_ORGANIZATION_UPDATE_ADDRESS_1 = 'address_1' satisfies keyof OrganizationUpdate;
export const KEY_ORGANIZATION_UPDATE_ADDRESS_2 = 'address_2' satisfies keyof OrganizationUpdate;
export const KEY_ORGANIZATION_UPDATE_BUSINESS_NUMBER = 'business_number' satisfies keyof OrganizationUpdate;
export const KEY_ORGANIZATION_UPDATE_CITY = 'city' satisfies keyof OrganizationUpdate;
export const KEY_ORGANIZATION_UPDATE_COUNTRY_CODE = 'country_code' satisfies keyof OrganizationUpdate;
export const KEY_ORGANIZATION_UPDATE_DEFAULT_LOCALE = 'default_locale' satisfies keyof OrganizationUpdate;
export const KEY_ORGANIZATION_UPDATE_NAME = 'name' satisfies keyof OrganizationUpdate;
export const KEY_ORGANIZATION_UPDATE_POSTAL_CODE = 'postal_code' satisfies keyof OrganizationUpdate;
export const KEY_ORGANIZATION_UPDATE_STATE = 'state' satisfies keyof OrganizationUpdate;
export const KEY_ORGANIZATION_UPDATE_TAX_ID = 'tax_id' satisfies keyof OrganizationUpdate;
export const KEY_ORGANIZATION_UPDATE_TAX_ID_TYPE = 'tax_id_type' satisfies keyof OrganizationUpdate;
export const KEY_ORGANIZATION_UPDATE_TAX_RATE = 'tax_rate' satisfies keyof OrganizationUpdate;

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

export const KEY_ORGANIZATION_WITH_BILLING_DATA_ACCOUNT_BALANCE = 'account_balance' satisfies keyof OrganizationWithBillingData;
export const KEY_ORGANIZATION_WITH_BILLING_DATA_ADDRESS_1 = 'address_1' satisfies keyof OrganizationWithBillingData;
export const KEY_ORGANIZATION_WITH_BILLING_DATA_ADDRESS_2 = 'address_2' satisfies keyof OrganizationWithBillingData;
export const KEY_ORGANIZATION_WITH_BILLING_DATA_ATTRIBUTES = 'attributes' satisfies keyof OrganizationWithBillingData;
export const KEY_ORGANIZATION_WITH_BILLING_DATA_BILLING_METADATA = 'billing_metadata' satisfies keyof OrganizationWithBillingData;
export const KEY_ORGANIZATION_WITH_BILLING_DATA_BILLING_MODE = 'billing_mode' satisfies keyof OrganizationWithBillingData;
export const KEY_ORGANIZATION_WITH_BILLING_DATA_BUSINESS_NUMBER = 'business_number' satisfies keyof OrganizationWithBillingData;
export const KEY_ORGANIZATION_WITH_BILLING_DATA_CITY = 'city' satisfies keyof OrganizationWithBillingData;
export const KEY_ORGANIZATION_WITH_BILLING_DATA_COUNTRY_CODE = 'country_code' satisfies keyof OrganizationWithBillingData;
export const KEY_ORGANIZATION_WITH_BILLING_DATA_CREATED_ON = 'created_on' satisfies keyof OrganizationWithBillingData;
export const KEY_ORGANIZATION_WITH_BILLING_DATA_CURRENCY = 'currency' satisfies keyof OrganizationWithBillingData;
export const KEY_ORGANIZATION_WITH_BILLING_DATA_DEFAULT_LOCALE = 'default_locale' satisfies keyof OrganizationWithBillingData;
export const KEY_ORGANIZATION_WITH_BILLING_DATA_DELETED_ON = 'deleted_on' satisfies keyof OrganizationWithBillingData;
export const KEY_ORGANIZATION_WITH_BILLING_DATA_KEYCLOAK_ORGANIZATION_ID = 'keycloak_organization_id' satisfies keyof OrganizationWithBillingData;
export const KEY_ORGANIZATION_WITH_BILLING_DATA_NAME = 'name' satisfies keyof OrganizationWithBillingData;
export const KEY_ORGANIZATION_WITH_BILLING_DATA_ORGANIZATION_ID = 'organization_id' satisfies keyof OrganizationWithBillingData;
export const KEY_ORGANIZATION_WITH_BILLING_DATA_PARENT_ORGANIZATION_ID = 'parent_organization_id' satisfies keyof OrganizationWithBillingData;
export const KEY_ORGANIZATION_WITH_BILLING_DATA_POSTAL_CODE = 'postal_code' satisfies keyof OrganizationWithBillingData;
export const KEY_ORGANIZATION_WITH_BILLING_DATA_STATE = 'state' satisfies keyof OrganizationWithBillingData;
export const KEY_ORGANIZATION_WITH_BILLING_DATA_STATUS = 'status' satisfies keyof OrganizationWithBillingData;
export const KEY_ORGANIZATION_WITH_BILLING_DATA_TAX_ID = 'tax_id' satisfies keyof OrganizationWithBillingData;
export const KEY_ORGANIZATION_WITH_BILLING_DATA_TAX_ID_TYPE = 'tax_id_type' satisfies keyof OrganizationWithBillingData;
export const KEY_ORGANIZATION_WITH_BILLING_DATA_TAX_RATE = 'tax_rate' satisfies keyof OrganizationWithBillingData;
export const KEY_ORGANIZATION_WITH_BILLING_DATA_USERS = 'users' satisfies keyof OrganizationWithBillingData;

export const KEYS_ORGANIZATION_WITH_BILLING_DATA = [
  KEY_ORGANIZATION_WITH_BILLING_DATA_ACCOUNT_BALANCE,
  KEY_ORGANIZATION_WITH_BILLING_DATA_ADDRESS_1,
  KEY_ORGANIZATION_WITH_BILLING_DATA_ADDRESS_2,
  KEY_ORGANIZATION_WITH_BILLING_DATA_ATTRIBUTES,
  KEY_ORGANIZATION_WITH_BILLING_DATA_BILLING_METADATA,
  KEY_ORGANIZATION_WITH_BILLING_DATA_BILLING_MODE,
  KEY_ORGANIZATION_WITH_BILLING_DATA_BUSINESS_NUMBER,
  KEY_ORGANIZATION_WITH_BILLING_DATA_CITY,
  KEY_ORGANIZATION_WITH_BILLING_DATA_COUNTRY_CODE,
  KEY_ORGANIZATION_WITH_BILLING_DATA_CREATED_ON,
  KEY_ORGANIZATION_WITH_BILLING_DATA_CURRENCY,
  KEY_ORGANIZATION_WITH_BILLING_DATA_DEFAULT_LOCALE,
  KEY_ORGANIZATION_WITH_BILLING_DATA_DELETED_ON,
  KEY_ORGANIZATION_WITH_BILLING_DATA_KEYCLOAK_ORGANIZATION_ID,
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

export const KEY_PAGE_RESPONSE_EMAIL_FORWARD_LOG_PAGINATION = 'pagination' satisfies keyof PageResponse_EmailForwardLog;
export const KEY_PAGE_RESPONSE_EMAIL_FORWARD_LOG_RESULTS = 'results' satisfies keyof PageResponse_EmailForwardLog;

export const KEYS_PAGE_RESPONSE_EMAIL_FORWARD_LOG = [
  KEY_PAGE_RESPONSE_EMAIL_FORWARD_LOG_PAGINATION,
  KEY_PAGE_RESPONSE_EMAIL_FORWARD_LOG_RESULTS,
] as const satisfies (keyof PageResponse_EmailForwardLog)[];

export const KEY_PAGE_RESPONSE_JOB_BATCH_METADATA_PAGINATION = 'pagination' satisfies keyof PageResponse_JobBatchMetadata;
export const KEY_PAGE_RESPONSE_JOB_BATCH_METADATA_RESULTS = 'results' satisfies keyof PageResponse_JobBatchMetadata;

export const KEYS_PAGE_RESPONSE_JOB_BATCH_METADATA = [
  KEY_PAGE_RESPONSE_JOB_BATCH_METADATA_PAGINATION,
  KEY_PAGE_RESPONSE_JOB_BATCH_METADATA_RESULTS,
] as const satisfies (keyof PageResponse_JobBatchMetadata)[];

export const KEY_PAGE_RESPONSE_JOB_PAGINATION = 'pagination' satisfies keyof PageResponse_Job;
export const KEY_PAGE_RESPONSE_JOB_RESULTS = 'results' satisfies keyof PageResponse_Job;

export const KEYS_PAGE_RESPONSE_JOB = [
  KEY_PAGE_RESPONSE_JOB_PAGINATION,
  KEY_PAGE_RESPONSE_JOB_RESULTS,
] as const satisfies (keyof PageResponse_Job)[];

export const KEY_PAGE_RESPONSE_OBJECT_LOG_PAGINATION = 'pagination' satisfies keyof PageResponse_ObjectLog;
export const KEY_PAGE_RESPONSE_OBJECT_LOG_RESULTS = 'results' satisfies keyof PageResponse_ObjectLog;

export const KEYS_PAGE_RESPONSE_OBJECT_LOG = [
  KEY_PAGE_RESPONSE_OBJECT_LOG_PAGINATION,
  KEY_PAGE_RESPONSE_OBJECT_LOG_RESULTS,
] as const satisfies (keyof PageResponse_ObjectLog)[];

export const KEY_PAGE_RESPONSE_PARKING_PAGINATION = 'pagination' satisfies keyof PageResponse_Parking;
export const KEY_PAGE_RESPONSE_PARKING_RESULTS = 'results' satisfies keyof PageResponse_Parking;

export const KEYS_PAGE_RESPONSE_PARKING = [
  KEY_PAGE_RESPONSE_PARKING_PAGINATION,
  KEY_PAGE_RESPONSE_PARKING_RESULTS,
] as const satisfies (keyof PageResponse_Parking)[];

export const KEY_PAGE_RESPONSE_REQUEST_HISTORY_PAGINATION = 'pagination' satisfies keyof PageResponse_RequestHistory;
export const KEY_PAGE_RESPONSE_REQUEST_HISTORY_RESULTS = 'results' satisfies keyof PageResponse_RequestHistory;

export const KEYS_PAGE_RESPONSE_REQUEST_HISTORY = [
  KEY_PAGE_RESPONSE_REQUEST_HISTORY_PAGINATION,
  KEY_PAGE_RESPONSE_REQUEST_HISTORY_RESULTS,
] as const satisfies (keyof PageResponse_RequestHistory)[];

export const KEY_PAGINATION_METADATA_CURRENT_PAGE = 'current_page' satisfies keyof PaginationMetadata;
export const KEY_PAGINATION_METADATA_HAS_NEXT_PAGE = 'has_next_page' satisfies keyof PaginationMetadata;
export const KEY_PAGINATION_METADATA_HAS_PREVIOUS_PAGE = 'has_previous_page' satisfies keyof PaginationMetadata;
export const KEY_PAGINATION_METADATA_PAGE_SIZE = 'page_size' satisfies keyof PaginationMetadata;
export const KEY_PAGINATION_METADATA_TOTAL_ITEMS = 'total_items' satisfies keyof PaginationMetadata;
export const KEY_PAGINATION_METADATA_TOTAL_PAGES = 'total_pages' satisfies keyof PaginationMetadata;

export const KEYS_PAGINATION_METADATA = [
  KEY_PAGINATION_METADATA_CURRENT_PAGE,
  KEY_PAGINATION_METADATA_HAS_NEXT_PAGE,
  KEY_PAGINATION_METADATA_HAS_PREVIOUS_PAGE,
  KEY_PAGINATION_METADATA_PAGE_SIZE,
  KEY_PAGINATION_METADATA_TOTAL_ITEMS,
  KEY_PAGINATION_METADATA_TOTAL_PAGES,
] as const satisfies (keyof PaginationMetadata)[];

export const KEY_PAGINATION_METADATA_DTO_CURRENT_PAGE = 'current_page' satisfies keyof PaginationMetadataDTO;
export const KEY_PAGINATION_METADATA_DTO_HAS_NEXT_PAGE = 'has_next_page' satisfies keyof PaginationMetadataDTO;
export const KEY_PAGINATION_METADATA_DTO_HAS_PREVIOUS_PAGE = 'has_previous_page' satisfies keyof PaginationMetadataDTO;
export const KEY_PAGINATION_METADATA_DTO_PAGE_SIZE = 'page_size' satisfies keyof PaginationMetadataDTO;
export const KEY_PAGINATION_METADATA_DTO_TOTAL_ITEMS = 'total_items' satisfies keyof PaginationMetadataDTO;
export const KEY_PAGINATION_METADATA_DTO_TOTAL_PAGES = 'total_pages' satisfies keyof PaginationMetadataDTO;

export const KEYS_PAGINATION_METADATA_DTO = [
  KEY_PAGINATION_METADATA_DTO_CURRENT_PAGE,
  KEY_PAGINATION_METADATA_DTO_HAS_NEXT_PAGE,
  KEY_PAGINATION_METADATA_DTO_HAS_PREVIOUS_PAGE,
  KEY_PAGINATION_METADATA_DTO_PAGE_SIZE,
  KEY_PAGINATION_METADATA_DTO_TOTAL_ITEMS,
  KEY_PAGINATION_METADATA_DTO_TOTAL_PAGES,
] as const satisfies (keyof PaginationMetadataDTO)[];

export const KEY_PARKING_ACTION_PAYLOAD_DATA_PARKING_REFERENCE = 'parking_reference' satisfies keyof ParkingActionPayloadData;

export const KEYS_PARKING_ACTION_PAYLOAD_DATA = [
  KEY_PARKING_ACTION_PAYLOAD_DATA_PARKING_REFERENCE,
] as const satisfies (keyof ParkingActionPayloadData)[];

export const KEY_PARKING_AGREEMENT_ACCEPTANCE_ACCEPTED = 'accepted' satisfies keyof ParkingAgreementAcceptance;
export const KEY_PARKING_AGREEMENT_ACCEPTANCE_URL = 'url' satisfies keyof ParkingAgreementAcceptance;
export const KEY_PARKING_AGREEMENT_ACCEPTANCE_VERSION = 'version' satisfies keyof ParkingAgreementAcceptance;

export const KEYS_PARKING_AGREEMENT_ACCEPTANCE = [
  KEY_PARKING_AGREEMENT_ACCEPTANCE_ACCEPTED,
  KEY_PARKING_AGREEMENT_ACCEPTANCE_URL,
  KEY_PARKING_AGREEMENT_ACCEPTANCE_VERSION,
] as const satisfies (keyof ParkingAgreementAcceptance)[];

export const KEY_PARKING_CREATE_BULK_COMMAND_COMMAND = 'command' satisfies keyof ParkingCreateBulkCommand;
export const KEY_PARKING_CREATE_BULK_COMMAND_IDEMPOTENCY_KEY = 'idempotency_key' satisfies keyof ParkingCreateBulkCommand;
export const KEY_PARKING_CREATE_BULK_COMMAND_PAYLOAD = 'payload' satisfies keyof ParkingCreateBulkCommand;
export const KEY_PARKING_CREATE_BULK_COMMAND_VERSION = 'version' satisfies keyof ParkingCreateBulkCommand;

export const KEYS_PARKING_CREATE_BULK_COMMAND = [
  KEY_PARKING_CREATE_BULK_COMMAND_COMMAND,
  KEY_PARKING_CREATE_BULK_COMMAND_IDEMPOTENCY_KEY,
  KEY_PARKING_CREATE_BULK_COMMAND_PAYLOAD,
  KEY_PARKING_CREATE_BULK_COMMAND_VERSION,
] as const satisfies (keyof ParkingCreateBulkCommand)[];

export const KEY_PARKING_CREATE_BULK_INSTANCE_DOMAIN = 'domain' satisfies keyof ParkingCreateBulkInstance;
export const KEY_PARKING_CREATE_BULK_INSTANCE_ENABLED = 'enabled' satisfies keyof ParkingCreateBulkInstance;

export const KEYS_PARKING_CREATE_BULK_INSTANCE = [
  KEY_PARKING_CREATE_BULK_INSTANCE_DOMAIN,
  KEY_PARKING_CREATE_BULK_INSTANCE_ENABLED,
] as const satisfies (keyof ParkingCreateBulkInstance)[];

export const KEY_PARKING_CREATE_BULK_PAYLOAD_INSTANCES = 'instances' satisfies keyof ParkingCreateBulkPayload;
export const KEY_PARKING_CREATE_BULK_PAYLOAD_TEMPLATE = 'template' satisfies keyof ParkingCreateBulkPayload;

export const KEYS_PARKING_CREATE_BULK_PAYLOAD = [
  KEY_PARKING_CREATE_BULK_PAYLOAD_INSTANCES,
  KEY_PARKING_CREATE_BULK_PAYLOAD_TEMPLATE,
] as const satisfies (keyof ParkingCreateBulkPayload)[];

export const KEY_PARKING_CREATE_BULK_TEMPLATE_ENABLED = 'enabled' satisfies keyof ParkingCreateBulkTemplate;

export const KEYS_PARKING_CREATE_BULK_TEMPLATE = [
  KEY_PARKING_CREATE_BULK_TEMPLATE_ENABLED,
] as const satisfies (keyof ParkingCreateBulkTemplate)[];

export const KEY_PARKING_CREATE_PAYLOAD_DATA_DOMAIN = 'domain' satisfies keyof ParkingCreatePayloadData;
export const KEY_PARKING_CREATE_PAYLOAD_DATA_ENABLED = 'enabled' satisfies keyof ParkingCreatePayloadData;

export const KEYS_PARKING_CREATE_PAYLOAD_DATA = [
  KEY_PARKING_CREATE_PAYLOAD_DATA_DOMAIN,
  KEY_PARKING_CREATE_PAYLOAD_DATA_ENABLED,
] as const satisfies (keyof ParkingCreatePayloadData)[];

export const KEY_PARKING_CREATE_WORKER_PAYLOAD_OPERATION = 'operation' satisfies keyof ParkingCreateWorkerPayload;
export const KEY_PARKING_CREATE_WORKER_PAYLOAD_PARKING = 'parking' satisfies keyof ParkingCreateWorkerPayload;
export const KEY_PARKING_CREATE_WORKER_PAYLOAD_TYPE = 'type' satisfies keyof ParkingCreateWorkerPayload;

export const KEYS_PARKING_CREATE_WORKER_PAYLOAD = [
  KEY_PARKING_CREATE_WORKER_PAYLOAD_OPERATION,
  KEY_PARKING_CREATE_WORKER_PAYLOAD_PARKING,
  KEY_PARKING_CREATE_WORKER_PAYLOAD_TYPE,
] as const satisfies (keyof ParkingCreateWorkerPayload)[];

export const KEY_PARKING_DELETE_BULK_COMMAND_COMMAND = 'command' satisfies keyof ParkingDeleteBulkCommand;
export const KEY_PARKING_DELETE_BULK_COMMAND_IDEMPOTENCY_KEY = 'idempotency_key' satisfies keyof ParkingDeleteBulkCommand;
export const KEY_PARKING_DELETE_BULK_COMMAND_PAYLOAD = 'payload' satisfies keyof ParkingDeleteBulkCommand;
export const KEY_PARKING_DELETE_BULK_COMMAND_VERSION = 'version' satisfies keyof ParkingDeleteBulkCommand;

export const KEYS_PARKING_DELETE_BULK_COMMAND = [
  KEY_PARKING_DELETE_BULK_COMMAND_COMMAND,
  KEY_PARKING_DELETE_BULK_COMMAND_IDEMPOTENCY_KEY,
  KEY_PARKING_DELETE_BULK_COMMAND_PAYLOAD,
  KEY_PARKING_DELETE_BULK_COMMAND_VERSION,
] as const satisfies (keyof ParkingDeleteBulkCommand)[];

export const KEY_PARKING_DELETE_BULK_INSTANCE_PARKING_REFERENCE = 'parking_reference' satisfies keyof ParkingDeleteBulkInstance;

export const KEYS_PARKING_DELETE_BULK_INSTANCE = [
  KEY_PARKING_DELETE_BULK_INSTANCE_PARKING_REFERENCE,
] as const satisfies (keyof ParkingDeleteBulkInstance)[];

export const KEY_PARKING_DELETE_BULK_PAYLOAD_INSTANCES = 'instances' satisfies keyof ParkingDeleteBulkPayload;

export const KEYS_PARKING_DELETE_BULK_PAYLOAD = [
  KEY_PARKING_DELETE_BULK_PAYLOAD_INSTANCES,
] as const satisfies (keyof ParkingDeleteBulkPayload)[];

export const KEY_PARKING_DELETE_WORKER_PAYLOAD_OPERATION = 'operation' satisfies keyof ParkingDeleteWorkerPayload;
export const KEY_PARKING_DELETE_WORKER_PAYLOAD_PARKING = 'parking' satisfies keyof ParkingDeleteWorkerPayload;
export const KEY_PARKING_DELETE_WORKER_PAYLOAD_TYPE = 'type' satisfies keyof ParkingDeleteWorkerPayload;

export const KEYS_PARKING_DELETE_WORKER_PAYLOAD = [
  KEY_PARKING_DELETE_WORKER_PAYLOAD_OPERATION,
  KEY_PARKING_DELETE_WORKER_PAYLOAD_PARKING,
  KEY_PARKING_DELETE_WORKER_PAYLOAD_TYPE,
] as const satisfies (keyof ParkingDeleteWorkerPayload)[];

export const KEY_PARKING_DISABLE_BULK_COMMAND_COMMAND = 'command' satisfies keyof ParkingDisableBulkCommand;
export const KEY_PARKING_DISABLE_BULK_COMMAND_IDEMPOTENCY_KEY = 'idempotency_key' satisfies keyof ParkingDisableBulkCommand;
export const KEY_PARKING_DISABLE_BULK_COMMAND_PAYLOAD = 'payload' satisfies keyof ParkingDisableBulkCommand;
export const KEY_PARKING_DISABLE_BULK_COMMAND_VERSION = 'version' satisfies keyof ParkingDisableBulkCommand;

export const KEYS_PARKING_DISABLE_BULK_COMMAND = [
  KEY_PARKING_DISABLE_BULK_COMMAND_COMMAND,
  KEY_PARKING_DISABLE_BULK_COMMAND_IDEMPOTENCY_KEY,
  KEY_PARKING_DISABLE_BULK_COMMAND_PAYLOAD,
  KEY_PARKING_DISABLE_BULK_COMMAND_VERSION,
] as const satisfies (keyof ParkingDisableBulkCommand)[];

export const KEY_PARKING_DISABLE_BULK_INSTANCE_PARKING_REFERENCE = 'parking_reference' satisfies keyof ParkingDisableBulkInstance;

export const KEYS_PARKING_DISABLE_BULK_INSTANCE = [
  KEY_PARKING_DISABLE_BULK_INSTANCE_PARKING_REFERENCE,
] as const satisfies (keyof ParkingDisableBulkInstance)[];

export const KEY_PARKING_DISABLE_BULK_PAYLOAD_INSTANCES = 'instances' satisfies keyof ParkingDisableBulkPayload;

export const KEYS_PARKING_DISABLE_BULK_PAYLOAD = [
  KEY_PARKING_DISABLE_BULK_PAYLOAD_INSTANCES,
] as const satisfies (keyof ParkingDisableBulkPayload)[];

export const KEY_PARKING_DISABLE_WORKER_PAYLOAD_OPERATION = 'operation' satisfies keyof ParkingDisableWorkerPayload;
export const KEY_PARKING_DISABLE_WORKER_PAYLOAD_PARKING = 'parking' satisfies keyof ParkingDisableWorkerPayload;
export const KEY_PARKING_DISABLE_WORKER_PAYLOAD_TYPE = 'type' satisfies keyof ParkingDisableWorkerPayload;

export const KEYS_PARKING_DISABLE_WORKER_PAYLOAD = [
  KEY_PARKING_DISABLE_WORKER_PAYLOAD_OPERATION,
  KEY_PARKING_DISABLE_WORKER_PAYLOAD_PARKING,
  KEY_PARKING_DISABLE_WORKER_PAYLOAD_TYPE,
] as const satisfies (keyof ParkingDisableWorkerPayload)[];

export const KEY_PARKING_ENABLE_BULK_COMMAND_COMMAND = 'command' satisfies keyof ParkingEnableBulkCommand;
export const KEY_PARKING_ENABLE_BULK_COMMAND_IDEMPOTENCY_KEY = 'idempotency_key' satisfies keyof ParkingEnableBulkCommand;
export const KEY_PARKING_ENABLE_BULK_COMMAND_PAYLOAD = 'payload' satisfies keyof ParkingEnableBulkCommand;
export const KEY_PARKING_ENABLE_BULK_COMMAND_VERSION = 'version' satisfies keyof ParkingEnableBulkCommand;

export const KEYS_PARKING_ENABLE_BULK_COMMAND = [
  KEY_PARKING_ENABLE_BULK_COMMAND_COMMAND,
  KEY_PARKING_ENABLE_BULK_COMMAND_IDEMPOTENCY_KEY,
  KEY_PARKING_ENABLE_BULK_COMMAND_PAYLOAD,
  KEY_PARKING_ENABLE_BULK_COMMAND_VERSION,
] as const satisfies (keyof ParkingEnableBulkCommand)[];

export const KEY_PARKING_ENABLE_BULK_INSTANCE_PARKING_REFERENCE = 'parking_reference' satisfies keyof ParkingEnableBulkInstance;

export const KEYS_PARKING_ENABLE_BULK_INSTANCE = [
  KEY_PARKING_ENABLE_BULK_INSTANCE_PARKING_REFERENCE,
] as const satisfies (keyof ParkingEnableBulkInstance)[];

export const KEY_PARKING_ENABLE_BULK_PAYLOAD_INSTANCES = 'instances' satisfies keyof ParkingEnableBulkPayload;

export const KEYS_PARKING_ENABLE_BULK_PAYLOAD = [
  KEY_PARKING_ENABLE_BULK_PAYLOAD_INSTANCES,
] as const satisfies (keyof ParkingEnableBulkPayload)[];

export const KEY_PARKING_ENABLE_WORKER_PAYLOAD_OPERATION = 'operation' satisfies keyof ParkingEnableWorkerPayload;
export const KEY_PARKING_ENABLE_WORKER_PAYLOAD_PARKING = 'parking' satisfies keyof ParkingEnableWorkerPayload;
export const KEY_PARKING_ENABLE_WORKER_PAYLOAD_TYPE = 'type' satisfies keyof ParkingEnableWorkerPayload;

export const KEYS_PARKING_ENABLE_WORKER_PAYLOAD = [
  KEY_PARKING_ENABLE_WORKER_PAYLOAD_OPERATION,
  KEY_PARKING_ENABLE_WORKER_PAYLOAD_PARKING,
  KEY_PARKING_ENABLE_WORKER_PAYLOAD_TYPE,
] as const satisfies (keyof ParkingEnableWorkerPayload)[];

export const KEY_PARKING_METRICS_METRICS = 'metrics' satisfies keyof ParkingMetrics;
export const KEY_PARKING_METRICS_RENEWAL_COST = 'renewal_cost' satisfies keyof ParkingMetrics;
export const KEY_PARKING_METRICS_RENEWAL_COST_CURRENCY = 'renewal_cost_currency' satisfies keyof ParkingMetrics;
export const KEY_PARKING_METRICS_REVENUE_PROGRESS = 'revenue_progress' satisfies keyof ParkingMetrics;

export const KEYS_PARKING_METRICS = [
  KEY_PARKING_METRICS_METRICS,
  KEY_PARKING_METRICS_RENEWAL_COST,
  KEY_PARKING_METRICS_RENEWAL_COST_CURRENCY,
  KEY_PARKING_METRICS_REVENUE_PROGRESS,
] as const satisfies (keyof ParkingMetrics)[];

export const KEY_PARKING_COMPLIANCE_STATUS = 'compliance_status' satisfies keyof Parking;
export const KEY_PARKING_CONTENT_LANGUAGE = 'content_language' satisfies keyof Parking;
export const KEY_PARKING_CONTENT_URL = 'content_url' satisfies keyof Parking;
export const KEY_PARKING_CREATED_ON = 'created_on' satisfies keyof Parking;
export const KEY_PARKING_DOMAIN = 'domain' satisfies keyof Parking;
export const KEY_PARKING_ENABLED = 'enabled' satisfies keyof Parking;
export const KEY_PARKING_NOTE = 'note' satisfies keyof Parking;
export const KEY_PARKING_PARKING_ID = 'parking_id' satisfies keyof Parking;
export const KEY_PARKING_UPDATED_ON = 'updated_on' satisfies keyof Parking;

export const KEYS_PARKING = [
  KEY_PARKING_COMPLIANCE_STATUS,
  KEY_PARKING_CONTENT_LANGUAGE,
  KEY_PARKING_CONTENT_URL,
  KEY_PARKING_CREATED_ON,
  KEY_PARKING_DOMAIN,
  KEY_PARKING_ENABLED,
  KEY_PARKING_NOTE,
  KEY_PARKING_PARKING_ID,
  KEY_PARKING_UPDATED_ON,
] as const satisfies (keyof Parking)[];

export const KEY_PARKING_SIGNUP_REQUEST_AGREEMENT = 'agreement' satisfies keyof ParkingSignupRequest;

export const KEYS_PARKING_SIGNUP_REQUEST = [
  KEY_PARKING_SIGNUP_REQUEST_AGREEMENT,
] as const satisfies (keyof ParkingSignupRequest)[];

export const KEY_PARKING_SIGNUP_AGREEMENT_STORED = 'agreement_stored' satisfies keyof ParkingSignup;
export const KEY_PARKING_SIGNUP_SUCCESS = 'success' satisfies keyof ParkingSignup;

export const KEYS_PARKING_SIGNUP = [
  KEY_PARKING_SIGNUP_AGREEMENT_STORED,
  KEY_PARKING_SIGNUP_SUCCESS,
] as const satisfies (keyof ParkingSignup)[];

export const KEY_PARKING_SIGNUP_STATUS_ACCEPTED_AT = 'accepted_at' satisfies keyof ParkingSignupStatus;
export const KEY_PARKING_SIGNUP_STATUS_AGREEMENT_VERSION = 'agreement_version' satisfies keyof ParkingSignupStatus;
export const KEY_PARKING_SIGNUP_STATUS_HAS_ACCEPTED_AGREEMENT = 'has_accepted_agreement' satisfies keyof ParkingSignupStatus;

export const KEYS_PARKING_SIGNUP_STATUS = [
  KEY_PARKING_SIGNUP_STATUS_ACCEPTED_AT,
  KEY_PARKING_SIGNUP_STATUS_AGREEMENT_VERSION,
  KEY_PARKING_SIGNUP_STATUS_HAS_ACCEPTED_AGREEMENT,
] as const satisfies (keyof ParkingSignupStatus)[];

export const KEY_PARKING_STATISTICS_CONVERSIONS = 'conversions' satisfies keyof ParkingStatistics;
export const KEY_PARKING_STATISTICS_REVENUE = 'revenue' satisfies keyof ParkingStatistics;
export const KEY_PARKING_STATISTICS_REVENUE_CURRENCY = 'revenue_currency' satisfies keyof ParkingStatistics;
export const KEY_PARKING_STATISTICS_RPC = 'rpc' satisfies keyof ParkingStatistics;
export const KEY_PARKING_STATISTICS_RPM = 'rpm' satisfies keyof ParkingStatistics;
export const KEY_PARKING_STATISTICS_VIEWS = 'views' satisfies keyof ParkingStatistics;

export const KEYS_PARKING_STATISTICS = [
  KEY_PARKING_STATISTICS_CONVERSIONS,
  KEY_PARKING_STATISTICS_REVENUE,
  KEY_PARKING_STATISTICS_REVENUE_CURRENCY,
  KEY_PARKING_STATISTICS_RPC,
  KEY_PARKING_STATISTICS_RPM,
  KEY_PARKING_STATISTICS_VIEWS,
] as const satisfies (keyof ParkingStatistics)[];

export const KEY_PARKING_TOTAL_METRICS_TOTAL_COUNT = 'total_count' satisfies keyof ParkingTotalMetrics;
export const KEY_PARKING_TOTAL_METRICS_TOTAL_METRICS = 'total_metrics' satisfies keyof ParkingTotalMetrics;

export const KEYS_PARKING_TOTAL_METRICS = [
  KEY_PARKING_TOTAL_METRICS_TOTAL_COUNT,
  KEY_PARKING_TOTAL_METRICS_TOTAL_METRICS,
] as const satisfies (keyof ParkingTotalMetrics)[];

export const KEY_PERIOD_UNIT = 'unit' satisfies keyof Period;
export const KEY_PERIOD_VALUE = 'value' satisfies keyof Period;

export const KEYS_PERIOD = [
  KEY_PERIOD_UNIT,
  KEY_PERIOD_VALUE,
] as const satisfies (keyof Period)[];

export const KEY_PLATFORM_STATS_BUCKET_KEY = 'key' satisfies keyof PlatformStatsBucket;
export const KEY_PLATFORM_STATS_BUCKET_TOTAL = 'total' satisfies keyof PlatformStatsBucket;
export const KEY_PLATFORM_STATS_BUCKET_UNIQUE = 'unique' satisfies keyof PlatformStatsBucket;

export const KEYS_PLATFORM_STATS_BUCKET = [
  KEY_PLATFORM_STATS_BUCKET_KEY,
  KEY_PLATFORM_STATS_BUCKET_TOTAL,
  KEY_PLATFORM_STATS_BUCKET_UNIQUE,
] as const satisfies (keyof PlatformStatsBucket)[];

export const KEY_PREMIUM_DOMAINS_BASE_AFFECTS = 'affects' satisfies keyof PremiumDomainsBase;
export const KEY_PREMIUM_DOMAINS_BASE_SOURCE = 'source' satisfies keyof PremiumDomainsBase;
export const KEY_PREMIUM_DOMAINS_BASE_SUPPORTED = 'supported' satisfies keyof PremiumDomainsBase;

export const KEYS_PREMIUM_DOMAINS_BASE = [
  KEY_PREMIUM_DOMAINS_BASE_AFFECTS,
  KEY_PREMIUM_DOMAINS_BASE_SOURCE,
  KEY_PREMIUM_DOMAINS_BASE_SUPPORTED,
] as const satisfies (keyof PremiumDomainsBase)[];

export const KEY_PREMIUM_PRICE_ENTRY_RES_ACTION = 'action' satisfies keyof PremiumPriceEntryRes;
export const KEY_PREMIUM_PRICE_ENTRY_RES_CURRENCY = 'currency' satisfies keyof PremiumPriceEntryRes;
export const KEY_PREMIUM_PRICE_ENTRY_RES_PRICE = 'price' satisfies keyof PremiumPriceEntryRes;

export const KEYS_PREMIUM_PRICE_ENTRY_RES = [
  KEY_PREMIUM_PRICE_ENTRY_RES_ACTION,
  KEY_PREMIUM_PRICE_ENTRY_RES_CURRENCY,
  KEY_PREMIUM_PRICE_ENTRY_RES_PRICE,
] as const satisfies (keyof PremiumPriceEntryRes)[];

export const KEY_PREMIUM_PRICING_ACTION_ACTION = 'action' satisfies keyof PremiumPricingAction;
export const KEY_PREMIUM_PRICING_ACTION_CURRENCY = 'currency' satisfies keyof PremiumPricingAction;
export const KEY_PREMIUM_PRICING_ACTION_PRICE = 'price' satisfies keyof PremiumPricingAction;

export const KEYS_PREMIUM_PRICING_ACTION = [
  KEY_PREMIUM_PRICING_ACTION_ACTION,
  KEY_PREMIUM_PRICING_ACTION_CURRENCY,
  KEY_PREMIUM_PRICING_ACTION_PRICE,
] as const satisfies (keyof PremiumPricingAction)[];

export const KEY_PREMIUM_PRICING_RES_PRICES = 'prices' satisfies keyof PremiumPricingRes;

export const KEYS_PREMIUM_PRICING_RES = [
  KEY_PREMIUM_PRICING_RES_PRICES,
] as const satisfies (keyof PremiumPricingRes)[];

export const KEY_PREMIUM_PRICING_PRICES = 'prices' satisfies keyof PremiumPricing;

export const KEYS_PREMIUM_PRICING = [
  KEY_PREMIUM_PRICING_PRICES,
] as const satisfies (keyof PremiumPricing)[];

export const KEY_PRICE_INFO_CURRENCY = 'currency' satisfies keyof PriceInfo;
export const KEY_PRICE_INFO_PERIOD = 'period' satisfies keyof PriceInfo;
export const KEY_PRICE_INFO_PRICE = 'price' satisfies keyof PriceInfo;
export const KEY_PRICE_INFO_PRODUCT_ACTION = 'product_action' satisfies keyof PriceInfo;
export const KEY_PRICE_INFO_PRODUCT_CLASS = 'product_class' satisfies keyof PriceInfo;
export const KEY_PRICE_INFO_PRODUCT_TYPE = 'product_type' satisfies keyof PriceInfo;

export const KEYS_PRICE_INFO = [
  KEY_PRICE_INFO_CURRENCY,
  KEY_PRICE_INFO_PERIOD,
  KEY_PRICE_INFO_PRICE,
  KEY_PRICE_INFO_PRODUCT_ACTION,
  KEY_PRICE_INFO_PRODUCT_CLASS,
  KEY_PRICE_INFO_PRODUCT_TYPE,
] as const satisfies (keyof PriceInfo)[];

export const KEY_PRICING_PERIOD_UNIT = 'unit' satisfies keyof PricingPeriod;
export const KEY_PRICING_PERIOD_VALUE = 'value' satisfies keyof PricingPeriod;

export const KEYS_PRICING_PERIOD = [
  KEY_PRICING_PERIOD_UNIT,
  KEY_PRICING_PERIOD_VALUE,
] as const satisfies (keyof PricingPeriod)[];

export const KEY_PROBLEM_DETAIL = 'detail' satisfies keyof Problem;
export const KEY_PROBLEM_STATUS = 'status' satisfies keyof Problem;
export const KEY_PROBLEM_TITLE = 'title' satisfies keyof Problem;
export const KEY_PROBLEM_TYPE = 'type' satisfies keyof Problem;

export const KEYS_PROBLEM = [
  KEY_PROBLEM_DETAIL,
  KEY_PROBLEM_STATUS,
  KEY_PROBLEM_TITLE,
  KEY_PROBLEM_TYPE,
] as const satisfies (keyof Problem)[];

export const KEY_PRODUCT_CREATE_RES_PRODUCT_NAME = 'product_name' satisfies keyof ProductCreateRes;
export const KEY_PRODUCT_CREATE_RES_SUBSCRIBABLE_ID = 'subscribable_id' satisfies keyof ProductCreateRes;
export const KEY_PRODUCT_CREATE_RES_SUBSCRIPTION_ID = 'subscription_id' satisfies keyof ProductCreateRes;

export const KEYS_PRODUCT_CREATE_RES = [
  KEY_PRODUCT_CREATE_RES_PRODUCT_NAME,
  KEY_PRODUCT_CREATE_RES_SUBSCRIBABLE_ID,
  KEY_PRODUCT_CREATE_RES_SUBSCRIPTION_ID,
] as const satisfies (keyof ProductCreateRes)[];

export const KEY_PUBLIC_AUTH_REQUEST_FORM_CLIENT_ID = 'client_id' satisfies keyof PublicAuthRequestForm;
export const KEY_PUBLIC_AUTH_REQUEST_FORM_CLIENT_SECRET = 'client_secret' satisfies keyof PublicAuthRequestForm;
export const KEY_PUBLIC_AUTH_REQUEST_FORM_GRANT_TYPE = 'grant_type' satisfies keyof PublicAuthRequestForm;

export const KEYS_PUBLIC_AUTH_REQUEST_FORM = [
  KEY_PUBLIC_AUTH_REQUEST_FORM_CLIENT_ID,
  KEY_PUBLIC_AUTH_REQUEST_FORM_CLIENT_SECRET,
  KEY_PUBLIC_AUTH_REQUEST_FORM_GRANT_TYPE,
] as const satisfies (keyof PublicAuthRequestForm)[];

export const KEY_PUBLIC_PERMISSION_SET_PERMISSIONS = 'permissions' satisfies keyof PublicPermissionSet;

export const KEYS_PUBLIC_PERMISSION_SET = [
  KEY_PUBLIC_PERMISSION_SET_PERMISSIONS,
] as const satisfies (keyof PublicPermissionSet)[];

export const KEY_PUBLIC_REPORT_LIST_RES_PAGINATION = 'pagination' satisfies keyof PublicReportListRes;
export const KEY_PUBLIC_REPORT_LIST_RES_RESULTS = 'results' satisfies keyof PublicReportListRes;

export const KEYS_PUBLIC_REPORT_LIST_RES = [
  KEY_PUBLIC_REPORT_LIST_RES_PAGINATION,
  KEY_PUBLIC_REPORT_LIST_RES_RESULTS,
] as const satisfies (keyof PublicReportListRes)[];

export const KEY_PUBLIC_REPORT_RES_CREATED_ON = 'created_on' satisfies keyof PublicReportRes;
export const KEY_PUBLIC_REPORT_RES_FILE_SIZE_BYTES = 'file_size_bytes' satisfies keyof PublicReportRes;
export const KEY_PUBLIC_REPORT_RES_GENERATED_ON = 'generated_on' satisfies keyof PublicReportRes;
export const KEY_PUBLIC_REPORT_RES_ORGANIZATION_ID = 'organization_id' satisfies keyof PublicReportRes;
export const KEY_PUBLIC_REPORT_RES_RECORD_COUNT = 'record_count' satisfies keyof PublicReportRes;
export const KEY_PUBLIC_REPORT_RES_REPORT_ID = 'report_id' satisfies keyof PublicReportRes;
export const KEY_PUBLIC_REPORT_RES_REPORT_TYPE = 'report_type' satisfies keyof PublicReportRes;
export const KEY_PUBLIC_REPORT_RES_STATUS = 'status' satisfies keyof PublicReportRes;
export const KEY_PUBLIC_REPORT_RES_TRIGGER_TYPE = 'trigger_type' satisfies keyof PublicReportRes;
export const KEY_PUBLIC_REPORT_RES_UPDATED_ON = 'updated_on' satisfies keyof PublicReportRes;

export const KEYS_PUBLIC_REPORT_RES = [
  KEY_PUBLIC_REPORT_RES_CREATED_ON,
  KEY_PUBLIC_REPORT_RES_FILE_SIZE_BYTES,
  KEY_PUBLIC_REPORT_RES_GENERATED_ON,
  KEY_PUBLIC_REPORT_RES_ORGANIZATION_ID,
  KEY_PUBLIC_REPORT_RES_RECORD_COUNT,
  KEY_PUBLIC_REPORT_RES_REPORT_ID,
  KEY_PUBLIC_REPORT_RES_REPORT_TYPE,
  KEY_PUBLIC_REPORT_RES_STATUS,
  KEY_PUBLIC_REPORT_RES_TRIGGER_TYPE,
  KEY_PUBLIC_REPORT_RES_UPDATED_ON,
] as const satisfies (keyof PublicReportRes)[];

export const KEY_PUBLIC_ROLE_ASSIGNMENT_ROLE = 'role' satisfies keyof PublicRoleAssignment;

export const KEYS_PUBLIC_ROLE_ASSIGNMENT = [
  KEY_PUBLIC_ROLE_ASSIGNMENT_ROLE,
] as const satisfies (keyof PublicRoleAssignment)[];

export const KEY_PUBLIC_ROLE_ASSIGNMENT_REQUEST_ROLE = 'role' satisfies keyof PublicRoleAssignmentRequest;

export const KEYS_PUBLIC_ROLE_ASSIGNMENT_REQUEST = [
  KEY_PUBLIC_ROLE_ASSIGNMENT_REQUEST_ROLE,
] as const satisfies (keyof PublicRoleAssignmentRequest)[];

export const KEY_PUBLIC_ROLE_DEFINITION_BUILT_IN = 'built_in' satisfies keyof PublicRoleDefinition;
export const KEY_PUBLIC_ROLE_DEFINITION_CREATED_ON = 'created_on' satisfies keyof PublicRoleDefinition;
export const KEY_PUBLIC_ROLE_DEFINITION_DESCRIPTION = 'description' satisfies keyof PublicRoleDefinition;
export const KEY_PUBLIC_ROLE_DEFINITION_LABEL = 'label' satisfies keyof PublicRoleDefinition;
export const KEY_PUBLIC_ROLE_DEFINITION_NAME = 'name' satisfies keyof PublicRoleDefinition;
export const KEY_PUBLIC_ROLE_DEFINITION_PERMISSIONS = 'permissions' satisfies keyof PublicRoleDefinition;
export const KEY_PUBLIC_ROLE_DEFINITION_UPDATED_ON = 'updated_on' satisfies keyof PublicRoleDefinition;

export const KEYS_PUBLIC_ROLE_DEFINITION = [
  KEY_PUBLIC_ROLE_DEFINITION_BUILT_IN,
  KEY_PUBLIC_ROLE_DEFINITION_CREATED_ON,
  KEY_PUBLIC_ROLE_DEFINITION_DESCRIPTION,
  KEY_PUBLIC_ROLE_DEFINITION_LABEL,
  KEY_PUBLIC_ROLE_DEFINITION_NAME,
  KEY_PUBLIC_ROLE_DEFINITION_PERMISSIONS,
  KEY_PUBLIC_ROLE_DEFINITION_UPDATED_ON,
] as const satisfies (keyof PublicRoleDefinition)[];

export const KEY_RDAP_BASE_RDAP_SERVER = 'rdap_server' satisfies keyof RdapBase;

export const KEYS_RDAP_BASE = [
  KEY_RDAP_BASE_RDAP_SERVER,
] as const satisfies (keyof RdapBase)[];

export const KEY_REFERRER_STATS_BUCKET_KEY = 'key' satisfies keyof ReferrerStatsBucket;
export const KEY_REFERRER_STATS_BUCKET_TOTAL = 'total' satisfies keyof ReferrerStatsBucket;
export const KEY_REFERRER_STATS_BUCKET_UNIQUE = 'unique' satisfies keyof ReferrerStatsBucket;

export const KEYS_REFERRER_STATS_BUCKET = [
  KEY_REFERRER_STATS_BUCKET_KEY,
  KEY_REFERRER_STATS_BUCKET_TOTAL,
  KEY_REFERRER_STATS_BUCKET_UNIQUE,
] as const satisfies (keyof ReferrerStatsBucket)[];

export const KEY_REGISTRAR_CONTACT_CITY = 'city' satisfies keyof RegistrarContact;
export const KEY_REGISTRAR_CONTACT_COUNTRY = 'country' satisfies keyof RegistrarContact;
export const KEY_REGISTRAR_CONTACT_EMAIL = 'email' satisfies keyof RegistrarContact;
export const KEY_REGISTRAR_CONTACT_FAX = 'fax' satisfies keyof RegistrarContact;
export const KEY_REGISTRAR_CONTACT_FIRST_NAME = 'first_name' satisfies keyof RegistrarContact;
export const KEY_REGISTRAR_CONTACT_ID = 'id' satisfies keyof RegistrarContact;
export const KEY_REGISTRAR_CONTACT_LAST_NAME = 'last_name' satisfies keyof RegistrarContact;
export const KEY_REGISTRAR_CONTACT_ORG = 'org' satisfies keyof RegistrarContact;
export const KEY_REGISTRAR_CONTACT_PHONE = 'phone' satisfies keyof RegistrarContact;
export const KEY_REGISTRAR_CONTACT_POSTAL_CODE = 'postal_code' satisfies keyof RegistrarContact;
export const KEY_REGISTRAR_CONTACT_STATE = 'state' satisfies keyof RegistrarContact;
export const KEY_REGISTRAR_CONTACT_STREET = 'street' satisfies keyof RegistrarContact;
export const KEY_REGISTRAR_CONTACT_TITLE = 'title' satisfies keyof RegistrarContact;

export const KEYS_REGISTRAR_CONTACT = [
  KEY_REGISTRAR_CONTACT_CITY,
  KEY_REGISTRAR_CONTACT_COUNTRY,
  KEY_REGISTRAR_CONTACT_EMAIL,
  KEY_REGISTRAR_CONTACT_FAX,
  KEY_REGISTRAR_CONTACT_FIRST_NAME,
  KEY_REGISTRAR_CONTACT_ID,
  KEY_REGISTRAR_CONTACT_LAST_NAME,
  KEY_REGISTRAR_CONTACT_ORG,
  KEY_REGISTRAR_CONTACT_PHONE,
  KEY_REGISTRAR_CONTACT_POSTAL_CODE,
  KEY_REGISTRAR_CONTACT_STATE,
  KEY_REGISTRAR_CONTACT_STREET,
  KEY_REGISTRAR_CONTACT_TITLE,
] as const satisfies (keyof RegistrarContact)[];

export const KEY_REGISTRAR_DOMAIN_CONTACTS = 'contacts' satisfies keyof RegistrarDomain;
export const KEY_REGISTRAR_DOMAIN_CONTACTS_DEDUP = 'contacts_dedup' satisfies keyof RegistrarDomain;
export const KEY_REGISTRAR_DOMAIN_EXPIRY_DATE = 'expiry_date' satisfies keyof RegistrarDomain;
export const KEY_REGISTRAR_DOMAIN_NAME = 'name' satisfies keyof RegistrarDomain;
export const KEY_REGISTRAR_DOMAIN_NAMESERVERS = 'nameservers' satisfies keyof RegistrarDomain;
export const KEY_REGISTRAR_DOMAIN_REGISTRAR = 'registrar' satisfies keyof RegistrarDomain;
export const KEY_REGISTRAR_DOMAIN_STATUSES = 'statuses' satisfies keyof RegistrarDomain;
export const KEY_REGISTRAR_DOMAIN_ZONE = 'zone' satisfies keyof RegistrarDomain;

export const KEYS_REGISTRAR_DOMAIN = [
  KEY_REGISTRAR_DOMAIN_CONTACTS,
  KEY_REGISTRAR_DOMAIN_CONTACTS_DEDUP,
  KEY_REGISTRAR_DOMAIN_EXPIRY_DATE,
  KEY_REGISTRAR_DOMAIN_NAME,
  KEY_REGISTRAR_DOMAIN_NAMESERVERS,
  KEY_REGISTRAR_DOMAIN_REGISTRAR,
  KEY_REGISTRAR_DOMAIN_STATUSES,
  KEY_REGISTRAR_DOMAIN_ZONE,
] as const satisfies (keyof RegistrarDomain)[];

export const KEY_REGISTRAR_NAMESERVER_HOSTNAME = 'hostname' satisfies keyof RegistrarNameserver;
export const KEY_REGISTRAR_NAMESERVER_IP_ADDRESSES = 'ip_addresses' satisfies keyof RegistrarNameserver;

export const KEYS_REGISTRAR_NAMESERVER = [
  KEY_REGISTRAR_NAMESERVER_HOSTNAME,
  KEY_REGISTRAR_NAMESERVER_IP_ADDRESSES,
] as const satisfies (keyof RegistrarNameserver)[];

export const KEY_REGISTRAR_RR_SET_NAME = 'name' satisfies keyof RegistrarRRSet;
export const KEY_REGISTRAR_RR_SET_PRIORITY = 'priority' satisfies keyof RegistrarRRSet;
export const KEY_REGISTRAR_RR_SET_RECORD = 'record' satisfies keyof RegistrarRRSet;
export const KEY_REGISTRAR_RR_SET_TTL = 'ttl' satisfies keyof RegistrarRRSet;
export const KEY_REGISTRAR_RR_SET_TYPE = 'type' satisfies keyof RegistrarRRSet;

export const KEYS_REGISTRAR_RR_SET = [
  KEY_REGISTRAR_RR_SET_NAME,
  KEY_REGISTRAR_RR_SET_PRIORITY,
  KEY_REGISTRAR_RR_SET_RECORD,
  KEY_REGISTRAR_RR_SET_TTL,
  KEY_REGISTRAR_RR_SET_TYPE,
] as const satisfies (keyof RegistrarRRSet)[];

export const KEY_REGISTRAR_RECORD_RDATA = 'rdata' satisfies keyof RegistrarRecord;

export const KEYS_REGISTRAR_RECORD = [
  KEY_REGISTRAR_RECORD_RDATA,
] as const satisfies (keyof RegistrarRecord)[];

export const KEY_REGISTRAR_ZONE_NAME = 'name' satisfies keyof RegistrarZone;
export const KEY_REGISTRAR_ZONE_RRSETS = 'rrsets' satisfies keyof RegistrarZone;

export const KEYS_REGISTRAR_ZONE = [
  KEY_REGISTRAR_ZONE_NAME,
  KEY_REGISTRAR_ZONE_RRSETS,
] as const satisfies (keyof RegistrarZone)[];

export const KEY_REGISTRY_LOCK_BASE_PREVENTS = 'prevents' satisfies keyof RegistryLockBase;
export const KEY_REGISTRY_LOCK_BASE_REMOVAL_PROCESS = 'removal_process' satisfies keyof RegistryLockBase;
export const KEY_REGISTRY_LOCK_BASE_REQUIRES_MANUAL_REQUEST = 'requires_manual_request' satisfies keyof RegistryLockBase;
export const KEY_REGISTRY_LOCK_BASE_SUPPORTED = 'supported' satisfies keyof RegistryLockBase;

export const KEYS_REGISTRY_LOCK_BASE = [
  KEY_REGISTRY_LOCK_BASE_PREVENTS,
  KEY_REGISTRY_LOCK_BASE_REMOVAL_PROCESS,
  KEY_REGISTRY_LOCK_BASE_REQUIRES_MANUAL_REQUEST,
  KEY_REGISTRY_LOCK_BASE_SUPPORTED,
] as const satisfies (keyof RegistryLockBase)[];

export const KEY_REQUEST_HISTORY_CLIENT_IP = 'client_ip' satisfies keyof RequestHistory;
export const KEY_REQUEST_HISTORY_DURATION = 'duration' satisfies keyof RequestHistory;
export const KEY_REQUEST_HISTORY_METHOD = 'method' satisfies keyof RequestHistory;
export const KEY_REQUEST_HISTORY_PATH = 'path' satisfies keyof RequestHistory;
export const KEY_REQUEST_HISTORY_PERFORMED_BY_ID = 'performed_by_id' satisfies keyof RequestHistory;
export const KEY_REQUEST_HISTORY_PERFORMED_BY_TYPE = 'performed_by_type' satisfies keyof RequestHistory;
export const KEY_REQUEST_HISTORY_REQUEST_BODY = 'request_body' satisfies keyof RequestHistory;
export const KEY_REQUEST_HISTORY_REQUEST_COMPLETED_AT = 'request_completed_at' satisfies keyof RequestHistory;
export const KEY_REQUEST_HISTORY_REQUEST_STARTED_AT = 'request_started_at' satisfies keyof RequestHistory;
export const KEY_REQUEST_HISTORY_RESPONSE_BODY = 'response_body' satisfies keyof RequestHistory;
export const KEY_REQUEST_HISTORY_SERVER_REQUEST_ID = 'server_request_id' satisfies keyof RequestHistory;
export const KEY_REQUEST_HISTORY_STATUS_CODE = 'status_code' satisfies keyof RequestHistory;

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

export const KEY_RESERVED_DOMAINS_BASE_SOURCE = 'source' satisfies keyof ReservedDomainsBase;
export const KEY_RESERVED_DOMAINS_BASE_SUPPORTED = 'supported' satisfies keyof ReservedDomainsBase;
export const KEY_RESERVED_DOMAINS_BASE_URL = 'url' satisfies keyof ReservedDomainsBase;

export const KEYS_RESERVED_DOMAINS_BASE = [
  KEY_RESERVED_DOMAINS_BASE_SOURCE,
  KEY_RESERVED_DOMAINS_BASE_SUPPORTED,
  KEY_RESERVED_DOMAINS_BASE_URL,
] as const satisfies (keyof ReservedDomainsBase)[];

export const KEY_RGP_OPERATIONS_REPORT = 'report' satisfies keyof RgpOperations;
export const KEY_RGP_OPERATIONS_REQUEST = 'request' satisfies keyof RgpOperations;

export const KEYS_RGP_OPERATIONS = [
  KEY_RGP_OPERATIONS_REPORT,
  KEY_RGP_OPERATIONS_REQUEST,
] as const satisfies (keyof RgpOperations)[];

export const KEY_SET_VANITY_NAMESERVER_SET_DEFAULT_RES_VANITY_NAMESERVER_SET = 'vanity_nameserver_set' satisfies keyof SetVanityNameserverSetDefaultRes;

export const KEYS_SET_VANITY_NAMESERVER_SET_DEFAULT_RES = [
  KEY_SET_VANITY_NAMESERVER_SET_DEFAULT_RES_VANITY_NAMESERVER_SET,
] as const satisfies (keyof SetVanityNameserverSetDefaultRes)[];

export const KEY_SLD_LENGTH_MAX = 'max' satisfies keyof SldLength;
export const KEY_SLD_LENGTH_MIN = 'min' satisfies keyof SldLength;

export const KEYS_SLD_LENGTH = [
  KEY_SLD_LENGTH_MAX,
  KEY_SLD_LENGTH_MIN,
] as const satisfies (keyof SldLength)[];

export const KEY_STATUS_CHANGES_ADD = 'add' satisfies keyof StatusChanges;
export const KEY_STATUS_CHANGES_REMOVE = 'remove' satisfies keyof StatusChanges;

export const KEYS_STATUS_CHANGES = [
  KEY_STATUS_CHANGES_ADD,
  KEY_STATUS_CHANGES_REMOVE,
] as const satisfies (keyof StatusChanges)[];

export const KEY_STATUS_CODE_STATS_BUCKET_KEY = 'key' satisfies keyof StatusCodeStatsBucket;
export const KEY_STATUS_CODE_STATS_BUCKET_TOTAL = 'total' satisfies keyof StatusCodeStatsBucket;

export const KEYS_STATUS_CODE_STATS_BUCKET = [
  KEY_STATUS_CODE_STATS_BUCKET_KEY,
  KEY_STATUS_CODE_STATS_BUCKET_TOTAL,
] as const satisfies (keyof StatusCodeStatsBucket)[];

export const KEY_STATUS_TAG_COLOR = 'color' satisfies keyof StatusTag;
export const KEY_STATUS_TAG_DESCRIPTION = 'description' satisfies keyof StatusTag;
export const KEY_STATUS_TAG_LABEL = 'label' satisfies keyof StatusTag;
export const KEY_STATUS_TAG_TAG_TYPE = 'tag_type' satisfies keyof StatusTag;

export const KEYS_STATUS_TAG = [
  KEY_STATUS_TAG_COLOR,
  KEY_STATUS_TAG_DESCRIPTION,
  KEY_STATUS_TAG_LABEL,
  KEY_STATUS_TAG_TAG_TYPE,
] as const satisfies (keyof StatusTag)[];

export const KEY_TAG_CREATE_COLOR = 'color' satisfies keyof TagCreate;
export const KEY_TAG_CREATE_DESCRIPTION = 'description' satisfies keyof TagCreate;
export const KEY_TAG_CREATE_LABEL = 'label' satisfies keyof TagCreate;
export const KEY_TAG_CREATE_TYPE = 'type' satisfies keyof TagCreate;

export const KEYS_TAG_CREATE = [
  KEY_TAG_CREATE_COLOR,
  KEY_TAG_CREATE_DESCRIPTION,
  KEY_TAG_CREATE_LABEL,
  KEY_TAG_CREATE_TYPE,
] as const satisfies (keyof TagCreate)[];

export const KEY_TAG_ENRICHED_COLOR = 'color' satisfies keyof TagEnriched;
export const KEY_TAG_ENRICHED_LABEL = 'label' satisfies keyof TagEnriched;
export const KEY_TAG_ENRICHED_TAG_ID = 'tag_id' satisfies keyof TagEnriched;

export const KEYS_TAG_ENRICHED = [
  KEY_TAG_ENRICHED_COLOR,
  KEY_TAG_ENRICHED_LABEL,
  KEY_TAG_ENRICHED_TAG_ID,
] as const satisfies (keyof TagEnriched)[];

export const KEY_TAG_COLOR = 'color' satisfies keyof Tag;
export const KEY_TAG_CREATED_ON = 'created_on' satisfies keyof Tag;
export const KEY_TAG_DESCRIPTION = 'description' satisfies keyof Tag;
export const KEY_TAG_LABEL = 'label' satisfies keyof Tag;
export const KEY_TAG_OBJECT_COUNT = 'object_count' satisfies keyof Tag;
export const KEY_TAG_TAG_ID = 'tag_id' satisfies keyof Tag;
export const KEY_TAG_TYPE = 'type' satisfies keyof Tag;
export const KEY_TAG_UPDATED_ON = 'updated_on' satisfies keyof Tag;

export const KEYS_TAG = [
  KEY_TAG_COLOR,
  KEY_TAG_CREATED_ON,
  KEY_TAG_DESCRIPTION,
  KEY_TAG_LABEL,
  KEY_TAG_OBJECT_COUNT,
  KEY_TAG_TAG_ID,
  KEY_TAG_TYPE,
  KEY_TAG_UPDATED_ON,
] as const satisfies (keyof Tag)[];

export const KEY_TAG_UPDATE_COLOR = 'color' satisfies keyof TagUpdate;
export const KEY_TAG_UPDATE_DESCRIPTION = 'description' satisfies keyof TagUpdate;
export const KEY_TAG_UPDATE_LABEL = 'label' satisfies keyof TagUpdate;

export const KEYS_TAG_UPDATE = [
  KEY_TAG_UPDATE_COLOR,
  KEY_TAG_UPDATE_DESCRIPTION,
  KEY_TAG_UPDATE_LABEL,
] as const satisfies (keyof TagUpdate)[];

export const KEY_TIME_SERIES_BUCKET_TIMESTAMP = 'timestamp' satisfies keyof TimeSeriesBucket;
export const KEY_TIME_SERIES_BUCKET_TOTAL = 'total' satisfies keyof TimeSeriesBucket;

export const KEYS_TIME_SERIES_BUCKET = [
  KEY_TIME_SERIES_BUCKET_TIMESTAMP,
  KEY_TIME_SERIES_BUCKET_TOTAL,
] as const satisfies (keyof TimeSeriesBucket)[];

export const KEY_TLD_BASE_NAME = 'name' satisfies keyof TldBase;
export const KEY_TLD_BASE_THIRD_LEVEL_STRUCTURE = 'third_level_structure' satisfies keyof TldBase;
export const KEY_TLD_BASE_TYPE = 'type' satisfies keyof TldBase;

export const KEYS_TLD_BASE = [
  KEY_TLD_BASE_NAME,
  KEY_TLD_BASE_THIRD_LEVEL_STRUCTURE,
  KEY_TLD_BASE_TYPE,
] as const satisfies (keyof TldBase)[];

export const KEY_TLD_RESPONSE_SHORT_TLD = 'tld' satisfies keyof TldResponseShort;
export const KEY_TLD_RESPONSE_SHORT_TYPE = 'type' satisfies keyof TldResponseShort;

export const KEYS_TLD_RESPONSE_SHORT = [
  KEY_TLD_RESPONSE_SHORT_TLD,
  KEY_TLD_RESPONSE_SHORT_TYPE,
] as const satisfies (keyof TldResponseShort)[];

export const KEY_TLD_SPECIFICATION_CHARACTERS = 'characters' satisfies keyof TldSpecification;
export const KEY_TLD_SPECIFICATION_CONTACTS = 'contacts' satisfies keyof TldSpecification;
export const KEY_TLD_SPECIFICATION_DNS_CONFIGURATION = 'dns_configuration' satisfies keyof TldSpecification;
export const KEY_TLD_SPECIFICATION_DOMAIN_LIFECYCLE = 'domain_lifecycle' satisfies keyof TldSpecification;
export const KEY_TLD_SPECIFICATION_DOMAIN_STATUSES = 'domain_statuses' satisfies keyof TldSpecification;
export const KEY_TLD_SPECIFICATION_IDN = 'idn' satisfies keyof TldSpecification;
export const KEY_TLD_SPECIFICATION_LAUNCH_PHASES = 'launch_phases' satisfies keyof TldSpecification;
export const KEY_TLD_SPECIFICATION_LEGAL_REQUIREMENTS = 'legal_requirements' satisfies keyof TldSpecification;
export const KEY_TLD_SPECIFICATION_LOCAL_PRESENCE = 'local_presence' satisfies keyof TldSpecification;
export const KEY_TLD_SPECIFICATION_PARKING_ENABLED = 'parking_enabled' satisfies keyof TldSpecification;
export const KEY_TLD_SPECIFICATION_PREMIUM_DOMAINS = 'premium_domains' satisfies keyof TldSpecification;
export const KEY_TLD_SPECIFICATION_RDAP = 'rdap' satisfies keyof TldSpecification;
export const KEY_TLD_SPECIFICATION_REGISTRY_LOCK = 'registry_lock' satisfies keyof TldSpecification;
export const KEY_TLD_SPECIFICATION_RESERVED_DOMAINS = 'reserved_domains' satisfies keyof TldSpecification;
export const KEY_TLD_SPECIFICATION_TLDS = 'tlds' satisfies keyof TldSpecification;
export const KEY_TLD_SPECIFICATION_TRANSFER_POLICIES = 'transfer_policies' satisfies keyof TldSpecification;
export const KEY_TLD_SPECIFICATION_WHOIS = 'whois' satisfies keyof TldSpecification;

export const KEYS_TLD_SPECIFICATION = [
  KEY_TLD_SPECIFICATION_CHARACTERS,
  KEY_TLD_SPECIFICATION_CONTACTS,
  KEY_TLD_SPECIFICATION_DNS_CONFIGURATION,
  KEY_TLD_SPECIFICATION_DOMAIN_LIFECYCLE,
  KEY_TLD_SPECIFICATION_DOMAIN_STATUSES,
  KEY_TLD_SPECIFICATION_IDN,
  KEY_TLD_SPECIFICATION_LAUNCH_PHASES,
  KEY_TLD_SPECIFICATION_LEGAL_REQUIREMENTS,
  KEY_TLD_SPECIFICATION_LOCAL_PRESENCE,
  KEY_TLD_SPECIFICATION_PARKING_ENABLED,
  KEY_TLD_SPECIFICATION_PREMIUM_DOMAINS,
  KEY_TLD_SPECIFICATION_RDAP,
  KEY_TLD_SPECIFICATION_REGISTRY_LOCK,
  KEY_TLD_SPECIFICATION_RESERVED_DOMAINS,
  KEY_TLD_SPECIFICATION_TLDS,
  KEY_TLD_SPECIFICATION_TRANSFER_POLICIES,
  KEY_TLD_SPECIFICATION_WHOIS,
] as const satisfies (keyof TldSpecification)[];

export const KEY_TM_ADDR_CC = 'cc' satisfies keyof TmAddr;
export const KEY_TM_ADDR_CITY = 'city' satisfies keyof TmAddr;
export const KEY_TM_ADDR_PC = 'pc' satisfies keyof TmAddr;
export const KEY_TM_ADDR_SP = 'sp' satisfies keyof TmAddr;
export const KEY_TM_ADDR_STREET = 'street' satisfies keyof TmAddr;

export const KEYS_TM_ADDR = [
  KEY_TM_ADDR_CC,
  KEY_TM_ADDR_CITY,
  KEY_TM_ADDR_PC,
  KEY_TM_ADDR_SP,
  KEY_TM_ADDR_STREET,
] as const satisfies (keyof TmAddr)[];

export const KEY_TM_CLAIM_CLASS_DESCS = 'class_descs' satisfies keyof TmClaim;
export const KEY_TM_CLAIM_CONTACTS = 'contacts' satisfies keyof TmClaim;
export const KEY_TM_CLAIM_GOODS_AND_SERVICES = 'goods_and_services' satisfies keyof TmClaim;
export const KEY_TM_CLAIM_HOLDERS = 'holders' satisfies keyof TmClaim;
export const KEY_TM_CLAIM_JUR_DESC = 'jur_desc' satisfies keyof TmClaim;
export const KEY_TM_CLAIM_MARK_NAME = 'mark_name' satisfies keyof TmClaim;
export const KEY_TM_CLAIM_NOT_EXACT_MATCH = 'not_exact_match' satisfies keyof TmClaim;

export const KEYS_TM_CLAIM = [
  KEY_TM_CLAIM_CLASS_DESCS,
  KEY_TM_CLAIM_CONTACTS,
  KEY_TM_CLAIM_GOODS_AND_SERVICES,
  KEY_TM_CLAIM_HOLDERS,
  KEY_TM_CLAIM_JUR_DESC,
  KEY_TM_CLAIM_MARK_NAME,
  KEY_TM_CLAIM_NOT_EXACT_MATCH,
] as const satisfies (keyof TmClaim)[];

export const KEY_TM_CLASS_DESC_CLASS_NUM = 'class_num' satisfies keyof TmClassDesc;
export const KEY_TM_CLASS_DESC_DESCRIPTION = 'description' satisfies keyof TmClassDesc;

export const KEYS_TM_CLASS_DESC = [
  KEY_TM_CLASS_DESC_CLASS_NUM,
  KEY_TM_CLASS_DESC_DESCRIPTION,
] as const satisfies (keyof TmClassDesc)[];

export const KEY_TM_CONTACT_ADDR = 'addr' satisfies keyof TmContact;
export const KEY_TM_CONTACT_EMAIL = 'email' satisfies keyof TmContact;
export const KEY_TM_CONTACT_FAX = 'fax' satisfies keyof TmContact;
export const KEY_TM_CONTACT_NAME = 'name' satisfies keyof TmContact;
export const KEY_TM_CONTACT_ORG = 'org' satisfies keyof TmContact;
export const KEY_TM_CONTACT_TYPE = 'type' satisfies keyof TmContact;
export const KEY_TM_CONTACT_VOICE = 'voice' satisfies keyof TmContact;

export const KEYS_TM_CONTACT = [
  KEY_TM_CONTACT_ADDR,
  KEY_TM_CONTACT_EMAIL,
  KEY_TM_CONTACT_FAX,
  KEY_TM_CONTACT_NAME,
  KEY_TM_CONTACT_ORG,
  KEY_TM_CONTACT_TYPE,
  KEY_TM_CONTACT_VOICE,
] as const satisfies (keyof TmContact)[];

export const KEY_TM_COURT_CC = 'cc' satisfies keyof TmCourt;
export const KEY_TM_COURT_COURT_NAME = 'court_name' satisfies keyof TmCourt;
export const KEY_TM_COURT_REF_NUM = 'ref_num' satisfies keyof TmCourt;
export const KEY_TM_COURT_REGION = 'region' satisfies keyof TmCourt;

export const KEYS_TM_COURT = [
  KEY_TM_COURT_CC,
  KEY_TM_COURT_COURT_NAME,
  KEY_TM_COURT_REF_NUM,
  KEY_TM_COURT_REGION,
] as const satisfies (keyof TmCourt)[];

export const KEY_TM_HOLDER_ADDR = 'addr' satisfies keyof TmHolder;
export const KEY_TM_HOLDER_EMAIL = 'email' satisfies keyof TmHolder;
export const KEY_TM_HOLDER_ENTITLEMENT = 'entitlement' satisfies keyof TmHolder;
export const KEY_TM_HOLDER_FAX = 'fax' satisfies keyof TmHolder;
export const KEY_TM_HOLDER_NAME = 'name' satisfies keyof TmHolder;
export const KEY_TM_HOLDER_ORG = 'org' satisfies keyof TmHolder;
export const KEY_TM_HOLDER_VOICE = 'voice' satisfies keyof TmHolder;

export const KEYS_TM_HOLDER = [
  KEY_TM_HOLDER_ADDR,
  KEY_TM_HOLDER_EMAIL,
  KEY_TM_HOLDER_ENTITLEMENT,
  KEY_TM_HOLDER_FAX,
  KEY_TM_HOLDER_NAME,
  KEY_TM_HOLDER_ORG,
  KEY_TM_HOLDER_VOICE,
] as const satisfies (keyof TmHolder)[];

export const KEY_TM_JUR_DESC_DESCRIPTION = 'description' satisfies keyof TmJurDesc;
export const KEY_TM_JUR_DESC_JUR_CC = 'jur_cc' satisfies keyof TmJurDesc;

export const KEYS_TM_JUR_DESC = [
  KEY_TM_JUR_DESC_DESCRIPTION,
  KEY_TM_JUR_DESC_JUR_CC,
] as const satisfies (keyof TmJurDesc)[];

export const KEY_TM_NOT_EXACT_MATCH_COURT = 'court' satisfies keyof TmNotExactMatch;
export const KEY_TM_NOT_EXACT_MATCH_INTRO = 'intro' satisfies keyof TmNotExactMatch;
export const KEY_TM_NOT_EXACT_MATCH_UDRP = 'udrp' satisfies keyof TmNotExactMatch;

export const KEYS_TM_NOT_EXACT_MATCH = [
  KEY_TM_NOT_EXACT_MATCH_COURT,
  KEY_TM_NOT_EXACT_MATCH_INTRO,
  KEY_TM_NOT_EXACT_MATCH_UDRP,
] as const satisfies (keyof TmNotExactMatch)[];

export const KEY_TM_UDRP_CASE_NO = 'case_no' satisfies keyof TmUdrp;
export const KEY_TM_UDRP_UDRP_PROVIDER = 'udrp_provider' satisfies keyof TmUdrp;

export const KEYS_TM_UDRP = [
  KEY_TM_UDRP_CASE_NO,
  KEY_TM_UDRP_UDRP_PROVIDER,
] as const satisfies (keyof TmUdrp)[];

export const KEY_TRADEMARK_CLAIMS_BASE_END_DATE = 'end_date' satisfies keyof TrademarkClaimsBase;
export const KEY_TRADEMARK_CLAIMS_BASE_START_DATE = 'start_date' satisfies keyof TrademarkClaimsBase;
export const KEY_TRADEMARK_CLAIMS_BASE_SUPPORTED = 'supported' satisfies keyof TrademarkClaimsBase;
export const KEY_TRADEMARK_CLAIMS_BASE_TMCH_REQUIRED = 'tmch_required' satisfies keyof TrademarkClaimsBase;

export const KEYS_TRADEMARK_CLAIMS_BASE = [
  KEY_TRADEMARK_CLAIMS_BASE_END_DATE,
  KEY_TRADEMARK_CLAIMS_BASE_START_DATE,
  KEY_TRADEMARK_CLAIMS_BASE_SUPPORTED,
  KEY_TRADEMARK_CLAIMS_BASE_TMCH_REQUIRED,
] as const satisfies (keyof TrademarkClaimsBase)[];

export const KEY_TRANSFER_LOCK_POLICY_BASE_SUPPORTED_BY_REGISTRAR = 'supported_by_registrar' satisfies keyof TransferLockPolicyBase;
export const KEY_TRANSFER_LOCK_POLICY_BASE_SUPPORTED_BY_REGISTRY = 'supported_by_registry' satisfies keyof TransferLockPolicyBase;

export const KEYS_TRANSFER_LOCK_POLICY_BASE = [
  KEY_TRANSFER_LOCK_POLICY_BASE_SUPPORTED_BY_REGISTRAR,
  KEY_TRANSFER_LOCK_POLICY_BASE_SUPPORTED_BY_REGISTRY,
] as const satisfies (keyof TransferLockPolicyBase)[];

export const KEY_TRANSFER_POLICIES_BASE_AUTHINFO_MAX_LENGTH = 'authinfo_max_length' satisfies keyof TransferPoliciesBase;
export const KEY_TRANSFER_POLICIES_BASE_AUTHINFO_MIN_LENGTH = 'authinfo_min_length' satisfies keyof TransferPoliciesBase;
export const KEY_TRANSFER_POLICIES_BASE_AUTHINFO_PATTERN = 'authinfo_pattern' satisfies keyof TransferPoliciesBase;
export const KEY_TRANSFER_POLICIES_BASE_AUTHINFO_REQUIRED = 'authinfo_required' satisfies keyof TransferPoliciesBase;
export const KEY_TRANSFER_POLICIES_BASE_AUTHINFO_SET_BY_REGISTRAR = 'authinfo_set_by_registrar' satisfies keyof TransferPoliciesBase;
export const KEY_TRANSFER_POLICIES_BASE_AUTHINFO_TIME_LIMITED = 'authinfo_time_limited' satisfies keyof TransferPoliciesBase;
export const KEY_TRANSFER_POLICIES_BASE_AUTHINFO_VALIDITY_PERIOD = 'authinfo_validity_period' satisfies keyof TransferPoliciesBase;
export const KEY_TRANSFER_POLICIES_BASE_INFO_CONTACT_AUTHINFO = 'info_contact_authinfo' satisfies keyof TransferPoliciesBase;
export const KEY_TRANSFER_POLICIES_BASE_INFO_DOMAIN_AUTHINFO = 'info_domain_authinfo' satisfies keyof TransferPoliciesBase;
export const KEY_TRANSFER_POLICIES_BASE_POST_TRANSFER_REQUIREMENTS = 'post_transfer_requirements' satisfies keyof TransferPoliciesBase;
export const KEY_TRANSFER_POLICIES_BASE_TRANSFER_ACK = 'transfer_ack' satisfies keyof TransferPoliciesBase;
export const KEY_TRANSFER_POLICIES_BASE_TRANSFER_EMAIL_REQUIRED = 'transfer_email_required' satisfies keyof TransferPoliciesBase;
export const KEY_TRANSFER_POLICIES_BASE_TRANSFER_LOCK_POLICY = 'transfer_lock_policy' satisfies keyof TransferPoliciesBase;
export const KEY_TRANSFER_POLICIES_BASE_TRANSFER_NACK = 'transfer_nack' satisfies keyof TransferPoliciesBase;
export const KEY_TRANSFER_POLICIES_BASE_TRANSFER_RENEWAL_PERIOD = 'transfer_renewal_period' satisfies keyof TransferPoliciesBase;
export const KEY_TRANSFER_POLICIES_BASE_TRANSFER_RENEWS_DOMAIN = 'transfer_renews_domain' satisfies keyof TransferPoliciesBase;
export const KEY_TRANSFER_POLICIES_BASE_TRANSFER_TIME = 'transfer_time' satisfies keyof TransferPoliciesBase;

export const KEYS_TRANSFER_POLICIES_BASE = [
  KEY_TRANSFER_POLICIES_BASE_AUTHINFO_MAX_LENGTH,
  KEY_TRANSFER_POLICIES_BASE_AUTHINFO_MIN_LENGTH,
  KEY_TRANSFER_POLICIES_BASE_AUTHINFO_PATTERN,
  KEY_TRANSFER_POLICIES_BASE_AUTHINFO_REQUIRED,
  KEY_TRANSFER_POLICIES_BASE_AUTHINFO_SET_BY_REGISTRAR,
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

export const KEY_USER_CREATED_ON = 'created_on' satisfies keyof User;
export const KEY_USER_EMAIL = 'email' satisfies keyof User;
export const KEY_USER_FIRST_NAME = 'first_name' satisfies keyof User;
export const KEY_USER_KEYCLOAK_USER_ID = 'keycloak_user_id' satisfies keyof User;
export const KEY_USER_LAST_NAME = 'last_name' satisfies keyof User;
export const KEY_USER_LOCALE = 'locale' satisfies keyof User;
export const KEY_USER_ORGANIZATION_ID = 'organization_id' satisfies keyof User;
export const KEY_USER_PHONE = 'phone' satisfies keyof User;
export const KEY_USER_UPDATED_ON = 'updated_on' satisfies keyof User;
export const KEY_USER_USER_ID = 'user_id' satisfies keyof User;
export const KEY_USER_USERNAME = 'username' satisfies keyof User;

export const KEYS_USER = [
  KEY_USER_CREATED_ON,
  KEY_USER_EMAIL,
  KEY_USER_FIRST_NAME,
  KEY_USER_KEYCLOAK_USER_ID,
  KEY_USER_LAST_NAME,
  KEY_USER_LOCALE,
  KEY_USER_ORGANIZATION_ID,
  KEY_USER_PHONE,
  KEY_USER_UPDATED_ON,
  KEY_USER_USER_ID,
  KEY_USER_USERNAME,
] as const satisfies (keyof User)[];

export const KEY_USER_AGENT_STATS_BUCKET_KEY = 'key' satisfies keyof UserAgentStatsBucket;
export const KEY_USER_AGENT_STATS_BUCKET_TOTAL = 'total' satisfies keyof UserAgentStatsBucket;
export const KEY_USER_AGENT_STATS_BUCKET_UNIQUE = 'unique' satisfies keyof UserAgentStatsBucket;

export const KEYS_USER_AGENT_STATS_BUCKET = [
  KEY_USER_AGENT_STATS_BUCKET_KEY,
  KEY_USER_AGENT_STATS_BUCKET_TOTAL,
  KEY_USER_AGENT_STATS_BUCKET_UNIQUE,
] as const satisfies (keyof UserAgentStatsBucket)[];

export const KEY_USER_ATTRIBUTE_BASE_KEY = 'key' satisfies keyof UserAttributeBase;
export const KEY_USER_ATTRIBUTE_BASE_VALUE = 'value' satisfies keyof UserAttributeBase;

export const KEYS_USER_ATTRIBUTE_BASE = [
  KEY_USER_ATTRIBUTE_BASE_KEY,
  KEY_USER_ATTRIBUTE_BASE_VALUE,
] as const satisfies (keyof UserAttributeBase)[];

export const KEY_USER_ATTRIBUTE_KEY = 'key' satisfies keyof UserAttribute;
export const KEY_USER_ATTRIBUTE_VALUE = 'value' satisfies keyof UserAttribute;

export const KEYS_USER_ATTRIBUTE = [
  KEY_USER_ATTRIBUTE_KEY,
  KEY_USER_ATTRIBUTE_VALUE,
] as const satisfies (keyof UserAttribute)[];

export const KEY_USER_CREATE_EMAIL = 'email' satisfies keyof UserCreate;
export const KEY_USER_CREATE_FIRST_NAME = 'first_name' satisfies keyof UserCreate;
export const KEY_USER_CREATE_LAST_NAME = 'last_name' satisfies keyof UserCreate;
export const KEY_USER_CREATE_LOCALE = 'locale' satisfies keyof UserCreate;
export const KEY_USER_CREATE_PASSWORD = 'password' satisfies keyof UserCreate;
export const KEY_USER_CREATE_PHONE = 'phone' satisfies keyof UserCreate;
export const KEY_USER_CREATE_USER_ATTRIBUTES = 'user_attributes' satisfies keyof UserCreate;
export const KEY_USER_CREATE_USERNAME = 'username' satisfies keyof UserCreate;

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

export const KEY_USER_ORGANIZATION_META_CURRENCY = 'currency' satisfies keyof UserOrganizationMeta;
export const KEY_USER_ORGANIZATION_META_PARENT_ORGANIZATION_ID = 'parent_organization_id' satisfies keyof UserOrganizationMeta;

export const KEYS_USER_ORGANIZATION_META = [
  KEY_USER_ORGANIZATION_META_CURRENCY,
  KEY_USER_ORGANIZATION_META_PARENT_ORGANIZATION_ID,
] as const satisfies (keyof UserOrganizationMeta)[];

export const KEY_USER_PROFILE_CREATED_ON = 'created_on' satisfies keyof UserProfile;
export const KEY_USER_PROFILE_EMAIL = 'email' satisfies keyof UserProfile;
export const KEY_USER_PROFILE_FIRST_NAME = 'first_name' satisfies keyof UserProfile;
export const KEY_USER_PROFILE_LAST_NAME = 'last_name' satisfies keyof UserProfile;
export const KEY_USER_PROFILE_LOCALE = 'locale' satisfies keyof UserProfile;
export const KEY_USER_PROFILE_ORGANIZATION = 'organization' satisfies keyof UserProfile;
export const KEY_USER_PROFILE_ORGANIZATION_ID = 'organization_id' satisfies keyof UserProfile;
export const KEY_USER_PROFILE_PERMISSIONS = 'permissions' satisfies keyof UserProfile;
export const KEY_USER_PROFILE_PHONE = 'phone' satisfies keyof UserProfile;
export const KEY_USER_PROFILE_ROLE = 'role' satisfies keyof UserProfile;
export const KEY_USER_PROFILE_UPDATED_ON = 'updated_on' satisfies keyof UserProfile;
export const KEY_USER_PROFILE_USER_ATTRIBUTES = 'user_attributes' satisfies keyof UserProfile;
export const KEY_USER_PROFILE_USER_ID = 'user_id' satisfies keyof UserProfile;
export const KEY_USER_PROFILE_USERNAME = 'username' satisfies keyof UserProfile;

export const KEYS_USER_PROFILE = [
  KEY_USER_PROFILE_CREATED_ON,
  KEY_USER_PROFILE_EMAIL,
  KEY_USER_PROFILE_FIRST_NAME,
  KEY_USER_PROFILE_LAST_NAME,
  KEY_USER_PROFILE_LOCALE,
  KEY_USER_PROFILE_ORGANIZATION,
  KEY_USER_PROFILE_ORGANIZATION_ID,
  KEY_USER_PROFILE_PERMISSIONS,
  KEY_USER_PROFILE_PHONE,
  KEY_USER_PROFILE_ROLE,
  KEY_USER_PROFILE_UPDATED_ON,
  KEY_USER_PROFILE_USER_ATTRIBUTES,
  KEY_USER_PROFILE_USER_ID,
  KEY_USER_PROFILE_USERNAME,
] as const satisfies (keyof UserProfile)[];

export const KEY_USER_PUBLIC_CREATED_ON = 'created_on' satisfies keyof UserPublic;
export const KEY_USER_PUBLIC_EMAIL = 'email' satisfies keyof UserPublic;
export const KEY_USER_PUBLIC_FIRST_NAME = 'first_name' satisfies keyof UserPublic;
export const KEY_USER_PUBLIC_LAST_NAME = 'last_name' satisfies keyof UserPublic;
export const KEY_USER_PUBLIC_LOCALE = 'locale' satisfies keyof UserPublic;
export const KEY_USER_PUBLIC_ORGANIZATION_ID = 'organization_id' satisfies keyof UserPublic;
export const KEY_USER_PUBLIC_PHONE = 'phone' satisfies keyof UserPublic;
export const KEY_USER_PUBLIC_UPDATED_ON = 'updated_on' satisfies keyof UserPublic;
export const KEY_USER_PUBLIC_USER_ID = 'user_id' satisfies keyof UserPublic;
export const KEY_USER_PUBLIC_USERNAME = 'username' satisfies keyof UserPublic;

export const KEYS_USER_PUBLIC = [
  KEY_USER_PUBLIC_CREATED_ON,
  KEY_USER_PUBLIC_EMAIL,
  KEY_USER_PUBLIC_FIRST_NAME,
  KEY_USER_PUBLIC_LAST_NAME,
  KEY_USER_PUBLIC_LOCALE,
  KEY_USER_PUBLIC_ORGANIZATION_ID,
  KEY_USER_PUBLIC_PHONE,
  KEY_USER_PUBLIC_UPDATED_ON,
  KEY_USER_PUBLIC_USER_ID,
  KEY_USER_PUBLIC_USERNAME,
] as const satisfies (keyof UserPublic)[];

export const KEY_USER_PUBLIC_WITH_ATTRIBUTES_CREATED_ON = 'created_on' satisfies keyof UserPublicWithAttributes;
export const KEY_USER_PUBLIC_WITH_ATTRIBUTES_EMAIL = 'email' satisfies keyof UserPublicWithAttributes;
export const KEY_USER_PUBLIC_WITH_ATTRIBUTES_FIRST_NAME = 'first_name' satisfies keyof UserPublicWithAttributes;
export const KEY_USER_PUBLIC_WITH_ATTRIBUTES_LAST_NAME = 'last_name' satisfies keyof UserPublicWithAttributes;
export const KEY_USER_PUBLIC_WITH_ATTRIBUTES_LOCALE = 'locale' satisfies keyof UserPublicWithAttributes;
export const KEY_USER_PUBLIC_WITH_ATTRIBUTES_ORGANIZATION_ID = 'organization_id' satisfies keyof UserPublicWithAttributes;
export const KEY_USER_PUBLIC_WITH_ATTRIBUTES_PHONE = 'phone' satisfies keyof UserPublicWithAttributes;
export const KEY_USER_PUBLIC_WITH_ATTRIBUTES_UPDATED_ON = 'updated_on' satisfies keyof UserPublicWithAttributes;
export const KEY_USER_PUBLIC_WITH_ATTRIBUTES_USER_ATTRIBUTES = 'user_attributes' satisfies keyof UserPublicWithAttributes;
export const KEY_USER_PUBLIC_WITH_ATTRIBUTES_USER_ID = 'user_id' satisfies keyof UserPublicWithAttributes;
export const KEY_USER_PUBLIC_WITH_ATTRIBUTES_USERNAME = 'username' satisfies keyof UserPublicWithAttributes;

export const KEYS_USER_PUBLIC_WITH_ATTRIBUTES = [
  KEY_USER_PUBLIC_WITH_ATTRIBUTES_CREATED_ON,
  KEY_USER_PUBLIC_WITH_ATTRIBUTES_EMAIL,
  KEY_USER_PUBLIC_WITH_ATTRIBUTES_FIRST_NAME,
  KEY_USER_PUBLIC_WITH_ATTRIBUTES_LAST_NAME,
  KEY_USER_PUBLIC_WITH_ATTRIBUTES_LOCALE,
  KEY_USER_PUBLIC_WITH_ATTRIBUTES_ORGANIZATION_ID,
  KEY_USER_PUBLIC_WITH_ATTRIBUTES_PHONE,
  KEY_USER_PUBLIC_WITH_ATTRIBUTES_UPDATED_ON,
  KEY_USER_PUBLIC_WITH_ATTRIBUTES_USER_ATTRIBUTES,
  KEY_USER_PUBLIC_WITH_ATTRIBUTES_USER_ID,
  KEY_USER_PUBLIC_WITH_ATTRIBUTES_USERNAME,
] as const satisfies (keyof UserPublicWithAttributes)[];

export const KEY_USER_PUBLIC_WITH_ROLE_CREATED_ON = 'created_on' satisfies keyof UserPublicWithRole;
export const KEY_USER_PUBLIC_WITH_ROLE_EMAIL = 'email' satisfies keyof UserPublicWithRole;
export const KEY_USER_PUBLIC_WITH_ROLE_FIRST_NAME = 'first_name' satisfies keyof UserPublicWithRole;
export const KEY_USER_PUBLIC_WITH_ROLE_LAST_NAME = 'last_name' satisfies keyof UserPublicWithRole;
export const KEY_USER_PUBLIC_WITH_ROLE_LOCALE = 'locale' satisfies keyof UserPublicWithRole;
export const KEY_USER_PUBLIC_WITH_ROLE_ORGANIZATION_ID = 'organization_id' satisfies keyof UserPublicWithRole;
export const KEY_USER_PUBLIC_WITH_ROLE_PHONE = 'phone' satisfies keyof UserPublicWithRole;
export const KEY_USER_PUBLIC_WITH_ROLE_ROLE = 'role' satisfies keyof UserPublicWithRole;
export const KEY_USER_PUBLIC_WITH_ROLE_UPDATED_ON = 'updated_on' satisfies keyof UserPublicWithRole;
export const KEY_USER_PUBLIC_WITH_ROLE_USER_ID = 'user_id' satisfies keyof UserPublicWithRole;
export const KEY_USER_PUBLIC_WITH_ROLE_USERNAME = 'username' satisfies keyof UserPublicWithRole;

export const KEYS_USER_PUBLIC_WITH_ROLE = [
  KEY_USER_PUBLIC_WITH_ROLE_CREATED_ON,
  KEY_USER_PUBLIC_WITH_ROLE_EMAIL,
  KEY_USER_PUBLIC_WITH_ROLE_FIRST_NAME,
  KEY_USER_PUBLIC_WITH_ROLE_LAST_NAME,
  KEY_USER_PUBLIC_WITH_ROLE_LOCALE,
  KEY_USER_PUBLIC_WITH_ROLE_ORGANIZATION_ID,
  KEY_USER_PUBLIC_WITH_ROLE_PHONE,
  KEY_USER_PUBLIC_WITH_ROLE_ROLE,
  KEY_USER_PUBLIC_WITH_ROLE_UPDATED_ON,
  KEY_USER_PUBLIC_WITH_ROLE_USER_ID,
  KEY_USER_PUBLIC_WITH_ROLE_USERNAME,
] as const satisfies (keyof UserPublicWithRole)[];

export const KEY_USER_TOKEN_ACCESS_TOKEN = 'access_token' satisfies keyof UserToken;
export const KEY_USER_TOKEN_EXPIRES_IN = 'expires_in' satisfies keyof UserToken;
export const KEY_USER_TOKEN_REFRESH_EXPIRES_IN = 'refresh_expires_in' satisfies keyof UserToken;
export const KEY_USER_TOKEN_REFRESH_TOKEN = 'refresh_token' satisfies keyof UserToken;
export const KEY_USER_TOKEN_TOKEN_TYPE = 'token_type' satisfies keyof UserToken;

export const KEYS_USER_TOKEN = [
  KEY_USER_TOKEN_ACCESS_TOKEN,
  KEY_USER_TOKEN_EXPIRES_IN,
  KEY_USER_TOKEN_REFRESH_EXPIRES_IN,
  KEY_USER_TOKEN_REFRESH_TOKEN,
  KEY_USER_TOKEN_TOKEN_TYPE,
] as const satisfies (keyof UserToken)[];

export const KEY_USER_UPDATE_EMAIL = 'email' satisfies keyof UserUpdate;
export const KEY_USER_UPDATE_FIRST_NAME = 'first_name' satisfies keyof UserUpdate;
export const KEY_USER_UPDATE_LAST_NAME = 'last_name' satisfies keyof UserUpdate;
export const KEY_USER_UPDATE_LOCALE = 'locale' satisfies keyof UserUpdate;
export const KEY_USER_UPDATE_PHONE = 'phone' satisfies keyof UserUpdate;
export const KEY_USER_UPDATE_USER_ATTRIBUTES = 'user_attributes' satisfies keyof UserUpdate;
export const KEY_USER_UPDATE_USERNAME = 'username' satisfies keyof UserUpdate;

export const KEYS_USER_UPDATE = [
  KEY_USER_UPDATE_EMAIL,
  KEY_USER_UPDATE_FIRST_NAME,
  KEY_USER_UPDATE_LAST_NAME,
  KEY_USER_UPDATE_LOCALE,
  KEY_USER_UPDATE_PHONE,
  KEY_USER_UPDATE_USER_ATTRIBUTES,
  KEY_USER_UPDATE_USERNAME,
] as const satisfies (keyof UserUpdate)[];

export const KEY_VALIDATION_ERROR_CTX = 'ctx' satisfies keyof ValidationError;
export const KEY_VALIDATION_ERROR_INPUT = 'input' satisfies keyof ValidationError;
export const KEY_VALIDATION_ERROR_LOC = 'loc' satisfies keyof ValidationError;
export const KEY_VALIDATION_ERROR_MSG = 'msg' satisfies keyof ValidationError;
export const KEY_VALIDATION_ERROR_TYPE = 'type' satisfies keyof ValidationError;

export const KEYS_VALIDATION_ERROR = [
  KEY_VALIDATION_ERROR_CTX,
  KEY_VALIDATION_ERROR_INPUT,
  KEY_VALIDATION_ERROR_LOC,
  KEY_VALIDATION_ERROR_MSG,
  KEY_VALIDATION_ERROR_TYPE,
] as const satisfies (keyof ValidationError)[];

export const KEY_VANITY_NAMESERVER_DTO_HOSTNAME = 'hostname' satisfies keyof VanityNameserverDTO;
export const KEY_VANITY_NAMESERVER_DTO_POSITION = 'position' satisfies keyof VanityNameserverDTO;

export const KEYS_VANITY_NAMESERVER_DTO = [
  KEY_VANITY_NAMESERVER_DTO_HOSTNAME,
  KEY_VANITY_NAMESERVER_DTO_POSITION,
] as const satisfies (keyof VanityNameserverDTO)[];

export const KEY_VANITY_NAMESERVER_SET_CREATE_HOSTNAMES = 'hostnames' satisfies keyof VanityNameserverSetCreate;
export const KEY_VANITY_NAMESERVER_SET_CREATE_NAME = 'name' satisfies keyof VanityNameserverSetCreate;
export const KEY_VANITY_NAMESERVER_SET_CREATE_PARENT_DOMAIN_NAME = 'parent_domain_name' satisfies keyof VanityNameserverSetCreate;
export const KEY_VANITY_NAMESERVER_SET_CREATE_SOA_RNAME = 'soa_rname' satisfies keyof VanityNameserverSetCreate;

export const KEYS_VANITY_NAMESERVER_SET_CREATE = [
  KEY_VANITY_NAMESERVER_SET_CREATE_HOSTNAMES,
  KEY_VANITY_NAMESERVER_SET_CREATE_NAME,
  KEY_VANITY_NAMESERVER_SET_CREATE_PARENT_DOMAIN_NAME,
  KEY_VANITY_NAMESERVER_SET_CREATE_SOA_RNAME,
] as const satisfies (keyof VanityNameserverSetCreate)[];

export const KEY_VANITY_NAMESERVER_SET_DTO_NAME = 'name' satisfies keyof VanityNameserverSetDTO;
export const KEY_VANITY_NAMESERVER_SET_DTO_NAMESERVERS = 'nameservers' satisfies keyof VanityNameserverSetDTO;
export const KEY_VANITY_NAMESERVER_SET_DTO_PARENT_DOMAIN_NAME = 'parent_domain_name' satisfies keyof VanityNameserverSetDTO;
export const KEY_VANITY_NAMESERVER_SET_DTO_SET_ID = 'set_id' satisfies keyof VanityNameserverSetDTO;
export const KEY_VANITY_NAMESERVER_SET_DTO_SOA_RNAME = 'soa_rname' satisfies keyof VanityNameserverSetDTO;

export const KEYS_VANITY_NAMESERVER_SET_DTO = [
  KEY_VANITY_NAMESERVER_SET_DTO_NAME,
  KEY_VANITY_NAMESERVER_SET_DTO_NAMESERVERS,
  KEY_VANITY_NAMESERVER_SET_DTO_PARENT_DOMAIN_NAME,
  KEY_VANITY_NAMESERVER_SET_DTO_SET_ID,
  KEY_VANITY_NAMESERVER_SET_DTO_SOA_RNAME,
] as const satisfies (keyof VanityNameserverSetDTO)[];

export const KEY_VANITY_NAMESERVER_SET_SUMMARY_DTO_IS_DEFAULT = 'is_default' satisfies keyof VanityNameserverSetSummaryDTO;
export const KEY_VANITY_NAMESERVER_SET_SUMMARY_DTO_NAME = 'name' satisfies keyof VanityNameserverSetSummaryDTO;
export const KEY_VANITY_NAMESERVER_SET_SUMMARY_DTO_NAMESERVERS = 'nameservers' satisfies keyof VanityNameserverSetSummaryDTO;
export const KEY_VANITY_NAMESERVER_SET_SUMMARY_DTO_ORGANIZATION_ID = 'organization_id' satisfies keyof VanityNameserverSetSummaryDTO;
export const KEY_VANITY_NAMESERVER_SET_SUMMARY_DTO_PARENT_DOMAIN_NAME = 'parent_domain_name' satisfies keyof VanityNameserverSetSummaryDTO;
export const KEY_VANITY_NAMESERVER_SET_SUMMARY_DTO_SET_ID = 'set_id' satisfies keyof VanityNameserverSetSummaryDTO;
export const KEY_VANITY_NAMESERVER_SET_SUMMARY_DTO_SOA_RNAME = 'soa_rname' satisfies keyof VanityNameserverSetSummaryDTO;
export const KEY_VANITY_NAMESERVER_SET_SUMMARY_DTO_STATUS = 'status' satisfies keyof VanityNameserverSetSummaryDTO;

export const KEYS_VANITY_NAMESERVER_SET_SUMMARY_DTO = [
  KEY_VANITY_NAMESERVER_SET_SUMMARY_DTO_IS_DEFAULT,
  KEY_VANITY_NAMESERVER_SET_SUMMARY_DTO_NAME,
  KEY_VANITY_NAMESERVER_SET_SUMMARY_DTO_NAMESERVERS,
  KEY_VANITY_NAMESERVER_SET_SUMMARY_DTO_ORGANIZATION_ID,
  KEY_VANITY_NAMESERVER_SET_SUMMARY_DTO_PARENT_DOMAIN_NAME,
  KEY_VANITY_NAMESERVER_SET_SUMMARY_DTO_SET_ID,
  KEY_VANITY_NAMESERVER_SET_SUMMARY_DTO_SOA_RNAME,
  KEY_VANITY_NAMESERVER_SET_SUMMARY_DTO_STATUS,
] as const satisfies (keyof VanityNameserverSetSummaryDTO)[];

export const KEY_VANITY_NS_CHECK_PUBLIC_REQ_SET_ID = 'set_id' satisfies keyof VanityNsCheckPublicReq;

export const KEYS_VANITY_NS_CHECK_PUBLIC_REQ = [
  KEY_VANITY_NS_CHECK_PUBLIC_REQ_SET_ID,
] as const satisfies (keyof VanityNsCheckPublicReq)[];

export const KEY_VANITY_NS_CHECK_RES_CHECKS = 'checks' satisfies keyof VanityNsCheckRes;
export const KEY_VANITY_NS_CHECK_RES_PARENT_DOMAIN_NAME = 'parent_domain_name' satisfies keyof VanityNsCheckRes;
export const KEY_VANITY_NS_CHECK_RES_SET_ID = 'set_id' satisfies keyof VanityNsCheckRes;
export const KEY_VANITY_NS_CHECK_RES_STATUS = 'status' satisfies keyof VanityNsCheckRes;
export const KEY_VANITY_NS_CHECK_RES_SUMMARY = 'summary' satisfies keyof VanityNsCheckRes;

export const KEYS_VANITY_NS_CHECK_RES = [
  KEY_VANITY_NS_CHECK_RES_CHECKS,
  KEY_VANITY_NS_CHECK_RES_PARENT_DOMAIN_NAME,
  KEY_VANITY_NS_CHECK_RES_SET_ID,
  KEY_VANITY_NS_CHECK_RES_STATUS,
  KEY_VANITY_NS_CHECK_RES_SUMMARY,
] as const satisfies (keyof VanityNsCheckRes)[];

export const KEY_VANITY_NS_CHECK_RESULT_DTO_CONFIDENCE = 'confidence' satisfies keyof VanityNsCheckResultDTO;
export const KEY_VANITY_NS_CHECK_RESULT_DTO_DETAIL = 'detail' satisfies keyof VanityNsCheckResultDTO;
export const KEY_VANITY_NS_CHECK_RESULT_DTO_ID = 'id' satisfies keyof VanityNsCheckResultDTO;
export const KEY_VANITY_NS_CHECK_RESULT_DTO_LABEL = 'label' satisfies keyof VanityNsCheckResultDTO;
export const KEY_VANITY_NS_CHECK_RESULT_DTO_OBSERVED = 'observed' satisfies keyof VanityNsCheckResultDTO;
export const KEY_VANITY_NS_CHECK_RESULT_DTO_REMEDIATION = 'remediation' satisfies keyof VanityNsCheckResultDTO;
export const KEY_VANITY_NS_CHECK_RESULT_DTO_SEVERITY = 'severity' satisfies keyof VanityNsCheckResultDTO;
export const KEY_VANITY_NS_CHECK_RESULT_DTO_SOURCE = 'source' satisfies keyof VanityNsCheckResultDTO;
export const KEY_VANITY_NS_CHECK_RESULT_DTO_STATUS = 'status' satisfies keyof VanityNsCheckResultDTO;

export const KEYS_VANITY_NS_CHECK_RESULT_DTO = [
  KEY_VANITY_NS_CHECK_RESULT_DTO_CONFIDENCE,
  KEY_VANITY_NS_CHECK_RESULT_DTO_DETAIL,
  KEY_VANITY_NS_CHECK_RESULT_DTO_ID,
  KEY_VANITY_NS_CHECK_RESULT_DTO_LABEL,
  KEY_VANITY_NS_CHECK_RESULT_DTO_OBSERVED,
  KEY_VANITY_NS_CHECK_RESULT_DTO_REMEDIATION,
  KEY_VANITY_NS_CHECK_RESULT_DTO_SEVERITY,
  KEY_VANITY_NS_CHECK_RESULT_DTO_SOURCE,
  KEY_VANITY_NS_CHECK_RESULT_DTO_STATUS,
] as const satisfies (keyof VanityNsCheckResultDTO)[];

export const KEY_VANITY_NS_CHECK_SUMMARY_DTO_DETAIL = 'detail' satisfies keyof VanityNsCheckSummaryDTO;
export const KEY_VANITY_NS_CHECK_SUMMARY_DTO_STATE = 'state' satisfies keyof VanityNsCheckSummaryDTO;

export const KEYS_VANITY_NS_CHECK_SUMMARY_DTO = [
  KEY_VANITY_NS_CHECK_SUMMARY_DTO_DETAIL,
  KEY_VANITY_NS_CHECK_SUMMARY_DTO_STATE,
] as const satisfies (keyof VanityNsCheckSummaryDTO)[];

export const KEY_VERIFICATION_DEADLINE_DATE = 'date' satisfies keyof VerificationDeadline;
export const KEY_VERIFICATION_DEADLINE_TYPE = 'type' satisfies keyof VerificationDeadline;

export const KEYS_VERIFICATION_DEADLINE = [
  KEY_VERIFICATION_DEADLINE_DATE,
  KEY_VERIFICATION_DEADLINE_TYPE,
] as const satisfies (keyof VerificationDeadline)[];

export const KEY_VERIFICATION_REGISTRANT_DETAILS_CONTACT_ID = 'contact_id' satisfies keyof VerificationRegistrantDetails;
export const KEY_VERIFICATION_REGISTRANT_DETAILS_EMAIL = 'email' satisfies keyof VerificationRegistrantDetails;
export const KEY_VERIFICATION_REGISTRANT_DETAILS_NAME = 'name' satisfies keyof VerificationRegistrantDetails;

export const KEYS_VERIFICATION_REGISTRANT_DETAILS = [
  KEY_VERIFICATION_REGISTRANT_DETAILS_CONTACT_ID,
  KEY_VERIFICATION_REGISTRANT_DETAILS_EMAIL,
  KEY_VERIFICATION_REGISTRANT_DETAILS_NAME,
] as const satisfies (keyof VerificationRegistrantDetails)[];

export const KEY_VERIFICATION_CLAIMS = 'claims' satisfies keyof Verification;
export const KEY_VERIFICATION_DEADLINES = 'deadlines' satisfies keyof Verification;

export const KEYS_VERIFICATION = [
  KEY_VERIFICATION_CLAIMS,
  KEY_VERIFICATION_DEADLINES,
] as const satisfies (keyof Verification)[];

export const KEY_VISITS_BY_KEY_BUCKET_KEY = 'key' satisfies keyof VisitsByKeyBucket;
export const KEY_VISITS_BY_KEY_BUCKET_TOTAL = 'total' satisfies keyof VisitsByKeyBucket;
export const KEY_VISITS_BY_KEY_BUCKET_UNIQUE = 'unique' satisfies keyof VisitsByKeyBucket;

export const KEYS_VISITS_BY_KEY_BUCKET = [
  KEY_VISITS_BY_KEY_BUCKET_KEY,
  KEY_VISITS_BY_KEY_BUCKET_TOTAL,
  KEY_VISITS_BY_KEY_BUCKET_UNIQUE,
] as const satisfies (keyof VisitsByKeyBucket)[];

export const KEY_WHITELABEL_BRANDING_CREATE_AUTH_HOSTNAME = 'auth_hostname' satisfies keyof WhitelabelBrandingCreate;
export const KEY_WHITELABEL_BRANDING_CREATE_HOSTNAME = 'hostname' satisfies keyof WhitelabelBrandingCreate;

export const KEYS_WHITELABEL_BRANDING_CREATE = [
  KEY_WHITELABEL_BRANDING_CREATE_AUTH_HOSTNAME,
  KEY_WHITELABEL_BRANDING_CREATE_HOSTNAME,
] as const satisfies (keyof WhitelabelBrandingCreate)[];

export const KEY_WHITELABEL_BRANDING_AUTH_HOSTNAME = 'auth_hostname' satisfies keyof WhitelabelBranding;
export const KEY_WHITELABEL_BRANDING_CREATED_ON = 'created_on' satisfies keyof WhitelabelBranding;
export const KEY_WHITELABEL_BRANDING_FAILURE_REASON = 'failure_reason' satisfies keyof WhitelabelBranding;
export const KEY_WHITELABEL_BRANDING_HOSTNAME = 'hostname' satisfies keyof WhitelabelBranding;
export const KEY_WHITELABEL_BRANDING_KEYCLOAK_CLIENT_ID = 'keycloak_client_id' satisfies keyof WhitelabelBranding;
export const KEY_WHITELABEL_BRANDING_ONBOARDING_STATUS = 'onboarding_status' satisfies keyof WhitelabelBranding;
export const KEY_WHITELABEL_BRANDING_ORGANIZATION_ID = 'organization_id' satisfies keyof WhitelabelBranding;
export const KEY_WHITELABEL_BRANDING_UPDATED_ON = 'updated_on' satisfies keyof WhitelabelBranding;
export const KEY_WHITELABEL_BRANDING_VERIFICATION_DOMAIN = 'verification_domain' satisfies keyof WhitelabelBranding;
export const KEY_WHITELABEL_BRANDING_WHITELABEL_BRANDING_ID = 'whitelabel_branding_id' satisfies keyof WhitelabelBranding;

export const KEYS_WHITELABEL_BRANDING = [
  KEY_WHITELABEL_BRANDING_AUTH_HOSTNAME,
  KEY_WHITELABEL_BRANDING_CREATED_ON,
  KEY_WHITELABEL_BRANDING_FAILURE_REASON,
  KEY_WHITELABEL_BRANDING_HOSTNAME,
  KEY_WHITELABEL_BRANDING_KEYCLOAK_CLIENT_ID,
  KEY_WHITELABEL_BRANDING_ONBOARDING_STATUS,
  KEY_WHITELABEL_BRANDING_ORGANIZATION_ID,
  KEY_WHITELABEL_BRANDING_UPDATED_ON,
  KEY_WHITELABEL_BRANDING_VERIFICATION_DOMAIN,
  KEY_WHITELABEL_BRANDING_WHITELABEL_BRANDING_ID,
] as const satisfies (keyof WhitelabelBranding)[];

export const KEY_WHOIS_BASE_WHOIS_SERVER = 'whois_server' satisfies keyof WhoisBase;

export const KEYS_WHOIS_BASE = [
  KEY_WHOIS_BASE_WHOIS_SERVER,
] as const satisfies (keyof WhoisBase)[];

export const KEY_ZONE_VANITY_SET_UPDATE_VANITY_NAMESERVER_SET_ID = 'vanity_nameserver_set_id' satisfies keyof ZoneVanitySetUpdate;

export const KEYS_ZONE_VANITY_SET_UPDATE = [
  KEY_ZONE_VANITY_SET_UPDATE_VANITY_NAMESERVER_SET_ID,
] as const satisfies (keyof ZoneVanitySetUpdate)[];

export const KEY_ZONES_CONTEXT_CONTEXT_ID = 'context_id' satisfies keyof ZonesContext;
export const KEY_ZONES_CONTEXT_CONVERSATION_ID = 'conversation_id' satisfies keyof ZonesContext;
export const KEY_ZONES_CONTEXT_CREATED_AT = 'created_at' satisfies keyof ZonesContext;
export const KEY_ZONES_CONTEXT_KIND = 'kind' satisfies keyof ZonesContext;
export const KEY_ZONES_CONTEXT_ORGANIZATION_ID = 'organization_id' satisfies keyof ZonesContext;
export const KEY_ZONES_CONTEXT_PAYLOAD = 'payload' satisfies keyof ZonesContext;
export const KEY_ZONES_CONTEXT_USER_ID = 'user_id' satisfies keyof ZonesContext;

export const KEYS_ZONES_CONTEXT = [
  KEY_ZONES_CONTEXT_CONTEXT_ID,
  KEY_ZONES_CONTEXT_CONVERSATION_ID,
  KEY_ZONES_CONTEXT_CREATED_AT,
  KEY_ZONES_CONTEXT_KIND,
  KEY_ZONES_CONTEXT_ORGANIZATION_ID,
  KEY_ZONES_CONTEXT_PAYLOAD,
  KEY_ZONES_CONTEXT_USER_ID,
] as const satisfies (keyof ZonesContext)[];

export const KEY_ZONES_CONTEXT_CREATE_KIND = 'kind' satisfies keyof ZonesContextCreate;
export const KEY_ZONES_CONTEXT_CREATE_PAYLOAD = 'payload' satisfies keyof ZonesContextCreate;

export const KEYS_ZONES_CONTEXT_CREATE = [
  KEY_ZONES_CONTEXT_CREATE_KIND,
  KEY_ZONES_CONTEXT_CREATE_PAYLOAD,
] as const satisfies (keyof ZonesContextCreate)[];

export const KEY_REQUEST_AUTHCODE_DETAIL = 'detail' satisfies keyof RequestAuthcode;
export const KEY_REQUEST_AUTHCODE_NAME = 'name' satisfies keyof RequestAuthcode;
export const KEY_REQUEST_AUTHCODE_SUCCESS = 'success' satisfies keyof RequestAuthcode;

export const KEYS_REQUEST_AUTHCODE = [
  KEY_REQUEST_AUTHCODE_DETAIL,
  KEY_REQUEST_AUTHCODE_NAME,
  KEY_REQUEST_AUTHCODE_SUCCESS,
] as const satisfies (keyof RequestAuthcode)[];

export const KEY_REQUEST_AUTHCODE2_AUTH_CODE = 'auth_code' satisfies keyof RequestAuthcode2;
export const KEY_REQUEST_AUTHCODE2_AUTH_CODE_EXPIRES_ON = 'auth_code_expires_on' satisfies keyof RequestAuthcode2;
export const KEY_REQUEST_AUTHCODE2_DETAIL = 'detail' satisfies keyof RequestAuthcode2;
export const KEY_REQUEST_AUTHCODE2_NAME = 'name' satisfies keyof RequestAuthcode2;
export const KEY_REQUEST_AUTHCODE2_SUCCESS = 'success' satisfies keyof RequestAuthcode2;

export const KEYS_REQUEST_AUTHCODE2 = [
  KEY_REQUEST_AUTHCODE2_AUTH_CODE,
  KEY_REQUEST_AUTHCODE2_AUTH_CODE_EXPIRES_ON,
  KEY_REQUEST_AUTHCODE2_DETAIL,
  KEY_REQUEST_AUTHCODE2_NAME,
  KEY_REQUEST_AUTHCODE2_SUCCESS,
] as const satisfies (keyof RequestAuthcode2)[];

export const KEY_REQUEST_AUTHCODE3_AUTH_CODE = 'auth_code' satisfies keyof RequestAuthcode3;
export const KEY_REQUEST_AUTHCODE3_AUTH_CODE_EXPIRES_ON = 'auth_code_expires_on' satisfies keyof RequestAuthcode3;
export const KEY_REQUEST_AUTHCODE3_DETAIL = 'detail' satisfies keyof RequestAuthcode3;
export const KEY_REQUEST_AUTHCODE3_NAME = 'name' satisfies keyof RequestAuthcode3;
export const KEY_REQUEST_AUTHCODE3_SUCCESS = 'success' satisfies keyof RequestAuthcode3;

export const KEYS_REQUEST_AUTHCODE3 = [
  KEY_REQUEST_AUTHCODE3_AUTH_CODE,
  KEY_REQUEST_AUTHCODE3_AUTH_CODE_EXPIRES_ON,
  KEY_REQUEST_AUTHCODE3_DETAIL,
  KEY_REQUEST_AUTHCODE3_NAME,
  KEY_REQUEST_AUTHCODE3_SUCCESS,
] as const satisfies (keyof RequestAuthcode3)[];

export const KEY_DOMAIN_AVAILABILITY_LIST_META = 'meta' satisfies keyof DomainAvailabilityList;
export const KEY_DOMAIN_AVAILABILITY_LIST_RESULTS = 'results' satisfies keyof DomainAvailabilityList;

export const KEYS_DOMAIN_AVAILABILITY_LIST = [
  KEY_DOMAIN_AVAILABILITY_LIST_META,
  KEY_DOMAIN_AVAILABILITY_LIST_RESULTS,
] as const satisfies (keyof DomainAvailabilityList)[];

export const KEY_DOMAIN_AVAILABILITY_CHECK_AVAILABLE = 'available' satisfies keyof DomainAvailabilityCheck;
export const KEY_DOMAIN_AVAILABILITY_CHECK_CLAIMS_KEY = 'claims_key' satisfies keyof DomainAvailabilityCheck;
export const KEY_DOMAIN_AVAILABILITY_CHECK_DOMAIN = 'domain' satisfies keyof DomainAvailabilityCheck;
export const KEY_DOMAIN_AVAILABILITY_CHECK_IS_PREMIUM = 'is_premium' satisfies keyof DomainAvailabilityCheck;
export const KEY_DOMAIN_AVAILABILITY_CHECK_PREMIUM_PRICING = 'premium_pricing' satisfies keyof DomainAvailabilityCheck;
export const KEY_DOMAIN_AVAILABILITY_CHECK_REASON = 'reason' satisfies keyof DomainAvailabilityCheck;

export const KEYS_DOMAIN_AVAILABILITY_CHECK = [
  KEY_DOMAIN_AVAILABILITY_CHECK_AVAILABLE,
  KEY_DOMAIN_AVAILABILITY_CHECK_CLAIMS_KEY,
  KEY_DOMAIN_AVAILABILITY_CHECK_DOMAIN,
  KEY_DOMAIN_AVAILABILITY_CHECK_IS_PREMIUM,
  KEY_DOMAIN_AVAILABILITY_CHECK_PREMIUM_PRICING,
  KEY_DOMAIN_AVAILABILITY_CHECK_REASON,
] as const satisfies (keyof DomainAvailabilityCheck)[];
