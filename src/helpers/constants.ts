import type {
  AllocationMethodType,
  AssignablePublicRole,
  AttributeType,
  BatchSortField,
  BatchStatus,
  BillingTransactionAction,
  BillingTransactionProductType,
  BillingTransactionSortField,
  BillingTransactionStatus,
  ComplianceStatus,
  ConditionOperator,
  ContactAttributeSetSortField,
  ContactIncludeField,
  ContactSortField,
  ContactType,
  ContactVerificationClaim,
  ContactVerificationMethod,
  ContactVerificationProof,
  ContactVerificationState,
  Currency,
  DeletePolicyType,
  DnsChangeAction,
  DnsProtectedReason,
  DnsRrsetType,
  DnssecAlgorithm,
  DnssecDigestType,
  DnssecModeType,
  DnssecRecordType,
  DnssecStatus,
  DomainAttributeKey,
  DomainAvailabilityStatus,
  DomainClientStatus,
  DomainContactType,
  DomainForwardSortField,
  DomainForwardZoneSortField,
  DomainIncludeField,
  DomainSortField,
  DomainStatus,
  EmailForwardLogSortField,
  EmailForwardLogStatus,
  EmailForwardSortField,
  EmailForwardZoneSortField,
  EmailVerificationStatus,
  EventObjectType,
  EventSortField,
  EventSubtype,
  EventType,
  EventVersion,
  ExecutingEntity,
  HTTPMethod,
  HolderEntitlement,
  HostStatus,
  HttpProtocol,
  IPAddressType,
  InvoiceResponsePaymentStatus,
  InvoiceResponseStatus,
  InvoiceResponseType,
  JobStatus,
  LaunchPhaseType,
  LegalRequirementOperationType,
  LegalRequirementType,
  LocalPresenceRequirementType,
  MemoryFactKind,
  MessageContextKind,
  MessageRole,
  MetricsGrouping,
  ObjectEventType,
  ObjectLogSortField,
  OrganizationCredentialStatus,
  OrganizationSortField,
  OrganizationStatus,
  ParkingSortField,
  PatchOp,
  PeriodUnit,
  PostTransferRequirements,
  PostalAddressType,
  PremiumAffectsType,
  PremiumSourceType,
  Protocol,
  PublicResource,
  PublicRole,
  PublicScope,
  RedirectCode,
  RegistrantChangeType,
  RegistryHandleAttributeType,
  RenewalMode,
  ReportStatus,
  ReportTriggerType,
  ReportType,
  RequestHistorySortField,
  ReservedSourceType,
  SortOrder,
  StatusTagType,
  SyncOperationType,
  TLDType,
  TagColor,
  TagFilterMode,
  TagSortField,
  TagType,
  TimeRange,
  TransferAckType,
  UserSortField,
  UserStatus,
  VerificationClaimType,
  VerificationDeadlineType,
  VerificationType,
  ZoneIncludeField,
  ZoneSortField,
} from './schemas';

export const ALLOCATION_METHOD_TYPE = {
  FCFS: "fcfs",
  AUCTION: "auction",
  LOTTERY: "lottery",
} as const satisfies Record<string, AllocationMethodType>;

export const ALLOCATION_METHOD_TYPE_VALUES = [
  'fcfs',
  'auction',
  'lottery',
] as const satisfies ReadonlyArray<AllocationMethodType>;

export const ASSIGNABLE_PUBLIC_ROLE = {
  ADMIN: "admin",
  VIEWER: "viewer",
  DOMAIN_MANAGER: "domain_manager",
  DNS_MANAGER: "dns_manager",
  BILLING_MANAGER: "billing_manager",
} as const satisfies Record<string, AssignablePublicRole>;

export const ASSIGNABLE_PUBLIC_ROLE_VALUES = [
  'admin',
  'viewer',
  'domain_manager',
  'dns_manager',
  'billing_manager',
] as const satisfies ReadonlyArray<AssignablePublicRole>;

export const ATTRIBUTE_TYPE = {
  ENUM: "enum",
  STRING: "string",
  BOOLEAN: "boolean",
  DATETIME: "datetime",
  INTEGER: "integer",
  COUNTRY_CODE: "country_code",
} as const satisfies Record<string, AttributeType>;

export const ATTRIBUTE_TYPE_VALUES = [
  'enum',
  'string',
  'boolean',
  'datetime',
  'integer',
  'country_code',
] as const satisfies ReadonlyArray<AttributeType>;

export const BATCH_SORT_FIELD = {
  CREATED_ON: "created_on",
  STARTED_AT: "started_at",
  FINISHED_AT: "finished_at",
} as const satisfies Record<string, BatchSortField>;

export const BATCH_SORT_FIELD_VALUES = [
  'created_on',
  'started_at',
  'finished_at',
] as const satisfies ReadonlyArray<BatchSortField>;

export const BATCH_STATUS = {
  PENDING: "pending",
  COMPLETE: "complete",
} as const satisfies Record<string, BatchStatus>;

export const BATCH_STATUS_VALUES = [
  'pending',
  'complete',
] as const satisfies ReadonlyArray<BatchStatus>;

export const BILLING_TRANSACTION_ACTION = {
  CREATE: "create",
  TRANSFER: "transfer",
  RENEW: "renew",
  RESTORE: "restore",
  TRADE: "trade",
  APPLICATION: "application",
  SERVICE_FEE: "service_fee",
  WALLET_TOP_UP: "wallet_top_up",
} as const satisfies Record<string, BillingTransactionAction>;

export const BILLING_TRANSACTION_ACTION_VALUES = [
  'create',
  'transfer',
  'renew',
  'restore',
  'trade',
  'application',
  'service_fee',
  'wallet_top_up',
] as const satisfies ReadonlyArray<BillingTransactionAction>;

export const BILLING_TRANSACTION_PRODUCT_TYPE = {
  DOMAIN: "domain",
  ZONES: "zones",
  EMAIL_FORWARD: "email_forward",
  DOMAIN_FORWARD: "domain_forward",
  ACCOUNT_WALLET: "account_wallet",
  VANITY_NAMESERVER: "vanity_nameserver",
} as const satisfies Record<string, BillingTransactionProductType>;

export const BILLING_TRANSACTION_PRODUCT_TYPE_VALUES = [
  'domain',
  'zones',
  'email_forward',
  'domain_forward',
  'account_wallet',
  'vanity_nameserver',
] as const satisfies ReadonlyArray<BillingTransactionProductType>;

export const BILLING_TRANSACTION_SORT_FIELD = {
  PRODUCT_TYPE: "product_type",
  ACTION: "action",
  STATUS: "status",
  CREATED_ON: "created_on",
  COMPLETED_ON: "completed_on",
} as const satisfies Record<string, BillingTransactionSortField>;

export const BILLING_TRANSACTION_SORT_FIELD_VALUES = [
  'product_type',
  'action',
  'status',
  'created_on',
  'completed_on',
] as const satisfies ReadonlyArray<BillingTransactionSortField>;

export const BILLING_TRANSACTION_STATUS = {
  PENDING: "pending",
  SUCCEEDED: "succeeded",
  FAILED: "failed",
  CANCELED: "canceled",
} as const satisfies Record<string, BillingTransactionStatus>;

export const BILLING_TRANSACTION_STATUS_VALUES = [
  'pending',
  'succeeded',
  'failed',
  'canceled',
] as const satisfies ReadonlyArray<BillingTransactionStatus>;

export const COMPLIANCE_STATUS = {
  PREPARING: "preparing",
  PENDING: "pending",
  APPROVED: "approved",
  DISAPPROVED: "disapproved",
  EXPIRED: "expired",
} as const satisfies Record<string, ComplianceStatus>;

export const COMPLIANCE_STATUS_VALUES = [
  'preparing',
  'pending',
  'approved',
  'disapproved',
  'expired',
] as const satisfies ReadonlyArray<ComplianceStatus>;

export const CONDITION_OPERATOR = {
  EQUALS: "equals",
  NOT_EQUALS: "not_equals",
  IN: "in",
  NOT_IN: "not_in",
} as const satisfies Record<string, ConditionOperator>;

export const CONDITION_OPERATOR_VALUES = [
  'equals',
  'not_equals',
  'in',
  'not_in',
] as const satisfies ReadonlyArray<ConditionOperator>;

export const CONTACT_ATTRIBUTE_SET_SORT_FIELD = {
  LABEL: "label",
  TLD: "tld",
  CREATED_ON: "created_on",
  UPDATED_ON: "updated_on",
} as const satisfies Record<string, ContactAttributeSetSortField>;

export const CONTACT_ATTRIBUTE_SET_SORT_FIELD_VALUES = [
  'label',
  'tld',
  'created_on',
  'updated_on',
] as const satisfies ReadonlyArray<ContactAttributeSetSortField>;

export const CONTACT_INCLUDE_FIELD = {
  TAGS: "tags",
} as const satisfies Record<string, ContactIncludeField>;

export const CONTACT_INCLUDE_FIELD_VALUES = [
  'tags',
] as const satisfies ReadonlyArray<ContactIncludeField>;

export const CONTACT_SORT_FIELD = {
  FIRST_NAME: "first_name",
  LAST_NAME: "last_name",
  EMAIL: "email",
  CREATED_ON: "created_on",
} as const satisfies Record<string, ContactSortField>;

export const CONTACT_SORT_FIELD_VALUES = [
  'first_name',
  'last_name',
  'email',
  'created_on',
] as const satisfies ReadonlyArray<ContactSortField>;

export const CONTACT_TYPE = {
  OWNER: "owner",
  AGENT: "agent",
  THIRD_PARTY: "third party",
} as const satisfies Record<string, ContactType>;

export const CONTACT_TYPE_VALUES = [
  'owner',
  'agent',
  'third party',
] as const satisfies ReadonlyArray<ContactType>;

export const CONTACT_VERIFICATION_CLAIM = {
  NAME: "NAME",
  ADDRESS: "ADDRESS",
  EMAIL: "EMAIL",
  PHONE: "PHONE",
  LEGAL_ENTITY: "LEGAL_ENTITY",
} as const satisfies Record<string, ContactVerificationClaim>;

export const CONTACT_VERIFICATION_CLAIM_VALUES = [
  'NAME',
  'ADDRESS',
  'EMAIL',
  'PHONE',
  'LEGAL_ENTITY',
] as const satisfies ReadonlyArray<ContactVerificationClaim>;

export const CONTACT_VERIFICATION_METHOD = {
  AUTH: "AUTH",
  VDIG: "VDIG",
  ELECTRONIC_DOCUMENT: "ELECTRONIC_DOCUMENT",
  PHYSICAL_DOCUMENT: "PHYSICAL_DOCUMENT",
  BVR: "BVR",
  PVR: "PVR",
  DATA: "DATA",
  REACHABILITY: "REACHABILITY",
} as const satisfies Record<string, ContactVerificationMethod>;

export const CONTACT_VERIFICATION_METHOD_VALUES = [
  'AUTH',
  'VDIG',
  'ELECTRONIC_DOCUMENT',
  'PHYSICAL_DOCUMENT',
  'BVR',
  'PVR',
  'DATA',
  'REACHABILITY',
] as const satisfies ReadonlyArray<ContactVerificationMethod>;

export const CONTACT_VERIFICATION_PROOF = {
  IDCARD: "IDCARD",
  PASSPORT: "PASSPORT",
  POPULATION_REGISTER: "POPULATION_REGISTER",
  RESIDENCE_PERMIT: "RESIDENCE_PERMIT",
  PROOF_OF_ARRIVAL: "PROOF_OF_ARRIVAL",
  DRIVERS_LICENCE: "DRIVERS_LICENCE",
  COMPANY_REGISTER: "COMPANY_REGISTER",
  COMPANY_STATEMENT: "COMPANY_STATEMENT",
  BANK_ACCOUNT: "BANK_ACCOUNT",
  ONLINE_PAYMENT_ACCOUNT: "ONLINE_PAYMENT_ACCOUNT",
  UTILITY_ACCOUNT: "UTILITY_ACCOUNT",
  BANK_STATEMENT: "BANK_STATEMENT",
  TAX_STATEMENT: "TAX_STATEMENT",
  WRITTEN_ATTESTATION: "WRITTEN_ATTESTATION",
  DIGITAL_ATTESTATION: "DIGITAL_ATTESTATION",
  POSTAL_VER_TRANSACTION_LOG: "POSTAL_VER_TRANSACTION_LOG",
  EMAIL_VER_TRANSACTION_LOG: "EMAIL_VER_TRANSACTION_LOG",
  ADDRESS_DATABASE: "ADDRESS_DATABASE",
} as const satisfies Record<string, ContactVerificationProof>;

export const CONTACT_VERIFICATION_PROOF_VALUES = [
  'IDCARD',
  'PASSPORT',
  'POPULATION_REGISTER',
  'RESIDENCE_PERMIT',
  'PROOF_OF_ARRIVAL',
  'DRIVERS_LICENCE',
  'COMPANY_REGISTER',
  'COMPANY_STATEMENT',
  'BANK_ACCOUNT',
  'ONLINE_PAYMENT_ACCOUNT',
  'UTILITY_ACCOUNT',
  'BANK_STATEMENT',
  'TAX_STATEMENT',
  'WRITTEN_ATTESTATION',
  'DIGITAL_ATTESTATION',
  'POSTAL_VER_TRANSACTION_LOG',
  'EMAIL_VER_TRANSACTION_LOG',
  'ADDRESS_DATABASE',
] as const satisfies ReadonlyArray<ContactVerificationProof>;

export const CONTACT_VERIFICATION_STATE = {
  UNVERIFIED: "UNVERIFIED",
  VERIFIED: "VERIFIED",
  IN_PROGRESS: "IN_PROGRESS",
  EXPIRED: "EXPIRED",
} as const satisfies Record<string, ContactVerificationState>;

export const CONTACT_VERIFICATION_STATE_VALUES = [
  'UNVERIFIED',
  'VERIFIED',
  'IN_PROGRESS',
  'EXPIRED',
] as const satisfies ReadonlyArray<ContactVerificationState>;

export const CURRENCY = {
  USD: "USD",
  EUR: "EUR",
} as const satisfies Record<string, Currency>;

export const CURRENCY_VALUES = [
  'USD',
  'EUR',
] as const satisfies ReadonlyArray<Currency>;

export const DELETE_POLICY_TYPE = {
  IMMEDIATE: "immediate",
  EXPIRATION: "expiration",
} as const satisfies Record<string, DeletePolicyType>;

export const DELETE_POLICY_TYPE_VALUES = [
  'immediate',
  'expiration',
] as const satisfies ReadonlyArray<DeletePolicyType>;

export const DNS_CHANGE_ACTION = {
  CREATE_ZONE: "create_zone",
  DELETE_ZONE: "delete_zone",
  CREATE_RECORD: "create_record",
  DELETE_RECORD: "delete_record",
  ENABLE_DNSSEC: "enable_dnssec",
  DISABLE_DNSSEC: "disable_dnssec",
} as const satisfies Record<string, DnsChangeAction>;

export const DNS_CHANGE_ACTION_VALUES = [
  'create_zone',
  'delete_zone',
  'create_record',
  'delete_record',
  'enable_dnssec',
  'disable_dnssec',
] as const satisfies ReadonlyArray<DnsChangeAction>;

export const DNS_PROTECTED_REASON = {
  SYSTEM_MANAGED_SOA: "SYSTEM_MANAGED_SOA",
  SYSTEM_MANAGED_NS: "SYSTEM_MANAGED_NS",
  EMAIL_FORWARD: "EMAIL_FORWARD",
  DOMAIN_FORWARD: "DOMAIN_FORWARD",
  GENERIC: "GENERIC",
} as const satisfies Record<string, DnsProtectedReason>;

export const DNS_PROTECTED_REASON_VALUES = [
  'SYSTEM_MANAGED_SOA',
  'SYSTEM_MANAGED_NS',
  'EMAIL_FORWARD',
  'DOMAIN_FORWARD',
  'GENERIC',
] as const satisfies ReadonlyArray<DnsProtectedReason>;

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
  TLSA: "TLSA",
  SMIMEA: "SMIMEA",
  URI: "URI",
  HTTPS: "HTTPS",
  SVCB: "SVCB",
  NAPTR: "NAPTR",
  SSHFP: "SSHFP",
  CERT: "CERT",
} as const satisfies Record<string, DnsRrsetType>;

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
  'SRV',
  'TLSA',
  'SMIMEA',
  'URI',
  'HTTPS',
  'SVCB',
  'NAPTR',
  'SSHFP',
  'CERT',
] as const satisfies ReadonlyArray<DnsRrsetType>;

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
  23,
] as const satisfies ReadonlyArray<DnssecAlgorithm>;

export const DNSSEC_DIGEST_TYPE = [
  1,
  2,
  3,
  4,
  5,
  6,
] as const satisfies ReadonlyArray<DnssecDigestType>;

export const DNSSEC_MODE_TYPE = {
  DS: "DS",
  DNSKEY: "DNSKEY",
} as const satisfies Record<string, DnssecModeType>;

export const DNSSEC_MODE_TYPE_VALUES = [
  'DS',
  'DNSKEY',
] as const satisfies ReadonlyArray<DnssecModeType>;

export const DNSSEC_RECORD_TYPE = {
  DS_DATA: "ds_data",
  KEY_DATA: "key_data",
} as const satisfies Record<string, DnssecRecordType>;

export const DNSSEC_RECORD_TYPE_VALUES = [
  'ds_data',
  'key_data',
] as const satisfies ReadonlyArray<DnssecRecordType>;

export const DNSSEC_STATUS = {
  ENABLED: "enabled",
  DISABLED: "disabled",
} as const satisfies Record<string, DnssecStatus>;

export const DNSSEC_STATUS_VALUES = [
  'enabled',
  'disabled',
] as const satisfies ReadonlyArray<DnssecStatus>;

export const DOMAIN_ATTRIBUTE_KEY = {
  AUTO_RENEW_PERIOD: "auto_renew_period",
  MUSIC_REGISTRANT_ATTESTATION: "music_registrant_attestation",
  NIC_IT_COMPLIANCE_CONFIRMATION: "nic_it_compliance_confirmation",
  TRAVEL_INDUSTRY_ACKNOWLEDGEMENT: "travel_industry_acknowledgement",
  VERIFICATION_REQUIRED: "verification_required",
} as const satisfies Record<string, DomainAttributeKey>;

export const DOMAIN_ATTRIBUTE_KEY_VALUES = [
  'auto_renew_period',
  'music_registrant_attestation',
  'nic_it_compliance_confirmation',
  'travel_industry_acknowledgement',
  'verification_required',
] as const satisfies ReadonlyArray<DomainAttributeKey>;

export const DOMAIN_AVAILABILITY_STATUS = {
  AVAILABLE: "available",
  UNAVAILABLE: "unavailable",
  MARKET_AVAILABLE: "market_available",
  TMCH_CLAIM: "tmch_claim",
  ERROR: "error",
  UNKNOWN: "unknown",
} as const satisfies Record<string, DomainAvailabilityStatus>;

export const DOMAIN_AVAILABILITY_STATUS_VALUES = [
  'available',
  'unavailable',
  'market_available',
  'tmch_claim',
  'error',
  'unknown',
] as const satisfies ReadonlyArray<DomainAvailabilityStatus>;

export const DOMAIN_CLIENT_STATUS = {
  CLIENT_TRANSFER_PROHIBITED: "clientTransferProhibited",
  CLIENT_UPDATE_PROHIBITED: "clientUpdateProhibited",
  CLIENT_DELETE_PROHIBITED: "clientDeleteProhibited",
  CLIENT_RENEW_PROHIBITED: "clientRenewProhibited",
  CLIENT_HOLD: "clientHold",
} as const satisfies Record<string, DomainClientStatus>;

export const DOMAIN_CLIENT_STATUS_VALUES = [
  'clientTransferProhibited',
  'clientUpdateProhibited',
  'clientDeleteProhibited',
  'clientRenewProhibited',
  'clientHold',
] as const satisfies ReadonlyArray<DomainClientStatus>;

export const DOMAIN_CONTACT_TYPE = {
  REGISTRANT: "registrant",
  ADMIN: "admin",
  TECH: "tech",
  BILLING: "billing",
} as const satisfies Record<string, DomainContactType>;

export const DOMAIN_CONTACT_TYPE_VALUES = [
  'registrant',
  'admin',
  'tech',
  'billing',
] as const satisfies ReadonlyArray<DomainContactType>;

export const DOMAIN_FORWARD_SORT_FIELD = {
  HOSTNAME: "hostname",
  ENABLED: "enabled",
  CREATED_ON: "created_on",
  UPDATED_ON: "updated_on",
} as const satisfies Record<string, DomainForwardSortField>;

export const DOMAIN_FORWARD_SORT_FIELD_VALUES = [
  'hostname',
  'enabled',
  'created_on',
  'updated_on',
] as const satisfies ReadonlyArray<DomainForwardSortField>;

export const DOMAIN_FORWARD_ZONE_SORT_FIELD = {
  NAME: "name",
  CREATED_ON: "created_on",
  UPDATED_ON: "updated_on",
} as const satisfies Record<string, DomainForwardZoneSortField>;

export const DOMAIN_FORWARD_ZONE_SORT_FIELD_VALUES = [
  'name',
  'created_on',
  'updated_on',
] as const satisfies ReadonlyArray<DomainForwardZoneSortField>;

export const DOMAIN_INCLUDE_FIELD = {
  TAGS: "tags",
} as const satisfies Record<string, DomainIncludeField>;

export const DOMAIN_INCLUDE_FIELD_VALUES = [
  'tags',
] as const satisfies ReadonlyArray<DomainIncludeField>;

export const DOMAIN_SORT_FIELD = {
  NAME: "name",
  CREATED_ON: "created_on",
  UPDATED_ON: "updated_on",
  EXPIRES_ON: "expires_on",
  REGISTERED_ON: "registered_on",
} as const satisfies Record<string, DomainSortField>;

export const DOMAIN_SORT_FIELD_VALUES = [
  'name',
  'created_on',
  'updated_on',
  'expires_on',
  'registered_on',
] as const satisfies ReadonlyArray<DomainSortField>;

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
  'invalid',
] as const satisfies ReadonlyArray<DomainStatus>;

export const EMAIL_FORWARD_LOG_SORT_FIELD = {
  LOG_ID: "log_id",
  SENDER_EMAIL: "sender_email",
  RECIPIENT_EMAIL: "recipient_email",
  FORWARD_EMAIL: "forward_email",
  FINAL_STATUS: "final_status",
  CREATED_ON: "created_on",
  SYNCED_ON: "synced_on",
} as const satisfies Record<string, EmailForwardLogSortField>;

export const EMAIL_FORWARD_LOG_SORT_FIELD_VALUES = [
  'log_id',
  'sender_email',
  'recipient_email',
  'forward_email',
  'final_status',
  'created_on',
  'synced_on',
] as const satisfies ReadonlyArray<EmailForwardLogSortField>;

export const EMAIL_FORWARD_LOG_STATUS = {
  UNKNOWN: "UNKNOWN",
  QUEUED: "QUEUED",
  DELIVERED: "DELIVERED",
  REFUSED: "REFUSED",
  SOFT_BOUNCE: "SOFT-BOUNCE",
  HARD_BOUNCE: "HARD-BOUNCE",
} as const satisfies Record<string, EmailForwardLogStatus>;

export const EMAIL_FORWARD_LOG_STATUS_VALUES = [
  'UNKNOWN',
  'QUEUED',
  'DELIVERED',
  'REFUSED',
  'SOFT-BOUNCE',
  'HARD-BOUNCE',
] as const satisfies ReadonlyArray<EmailForwardLogStatus>;

export const EMAIL_FORWARD_SORT_FIELD = {
  HOSTNAME: "hostname",
  ENABLED: "enabled",
  CREATED_ON: "created_on",
  UPDATED_ON: "updated_on",
} as const satisfies Record<string, EmailForwardSortField>;

export const EMAIL_FORWARD_SORT_FIELD_VALUES = [
  'hostname',
  'enabled',
  'created_on',
  'updated_on',
] as const satisfies ReadonlyArray<EmailForwardSortField>;

export const EMAIL_FORWARD_ZONE_SORT_FIELD = {
  NAME: "name",
  CREATED_ON: "created_on",
  UPDATED_ON: "updated_on",
} as const satisfies Record<string, EmailForwardZoneSortField>;

export const EMAIL_FORWARD_ZONE_SORT_FIELD_VALUES = [
  'name',
  'created_on',
  'updated_on',
] as const satisfies ReadonlyArray<EmailForwardZoneSortField>;

export const EMAIL_VERIFICATION_STATUS = {
  VERIFIED: "verified",
  PENDING: "pending",
  CANCELED: "canceled",
} as const satisfies Record<string, EmailVerificationStatus>;

export const EMAIL_VERIFICATION_STATUS_VALUES = [
  'verified',
  'pending',
  'canceled',
] as const satisfies ReadonlyArray<EmailVerificationStatus>;

export const EVENT_OBJECT_TYPE = {
  DOMAIN: "DOMAIN",
  CONTACT: "CONTACT",
  HOST: "HOST",
  ACCOUNT: "ACCOUNT",
  VANITY_NS_SET: "VANITY_NS_SET",
  RAW: "RAW",
  UNKNOWN: "UNKNOWN",
} as const satisfies Record<string, EventObjectType>;

export const EVENT_OBJECT_TYPE_VALUES = [
  'DOMAIN',
  'CONTACT',
  'HOST',
  'ACCOUNT',
  'VANITY_NS_SET',
  'RAW',
  'UNKNOWN',
] as const satisfies ReadonlyArray<EventObjectType>;

export const EVENT_SORT_FIELD = {
  OBJECT_ID: "object_id",
  CREATED_ON: "created_on",
} as const satisfies Record<string, EventSortField>;

export const EVENT_SORT_FIELD_VALUES = [
  'object_id',
  'created_on',
] as const satisfies ReadonlyArray<EventSortField>;

export const EVENT_SUBTYPE = {
  NOTIFICATION: "NOTIFICATION",
  SUCCESS: "SUCCESS",
  FAILURE: "FAILURE",
  CANCELED: "CANCELED",
} as const satisfies Record<string, EventSubtype>;

export const EVENT_SUBTYPE_VALUES = [
  'NOTIFICATION',
  'SUCCESS',
  'FAILURE',
  'CANCELED',
] as const satisfies ReadonlyArray<EventSubtype>;

export const EVENT_TYPE = {
  REGISTRATION: "REGISTRATION",
  RENEWAL: "RENEWAL",
  MODIFICATION: "MODIFICATION",
  DELETION: "DELETION",
  INBOUND_TRANSFER: "INBOUND_TRANSFER",
  OUTBOUND_TRANSFER: "OUTBOUND_TRANSFER",
  TRANSIT: "TRANSIT",
  WITHDRAW: "WITHDRAW",
  VERIFICATION: "VERIFICATION",
  BALANCE: "BALANCE",
  VANITY_NS_PROVISION: "VANITY_NS_PROVISION",
  VANITY_NS_SUSPENSION: "VANITY_NS_SUSPENSION",
  VANITY_NS_RESTORATION: "VANITY_NS_RESTORATION",
  VANITY_NS_TERMINATION: "VANITY_NS_TERMINATION",
} as const satisfies Record<string, EventType>;

export const EVENT_TYPE_VALUES = [
  'REGISTRATION',
  'RENEWAL',
  'MODIFICATION',
  'DELETION',
  'INBOUND_TRANSFER',
  'OUTBOUND_TRANSFER',
  'TRANSIT',
  'WITHDRAW',
  'VERIFICATION',
  'BALANCE',
  'VANITY_NS_PROVISION',
  'VANITY_NS_SUSPENSION',
  'VANITY_NS_RESTORATION',
  'VANITY_NS_TERMINATION',
] as const satisfies ReadonlyArray<EventType>;

export const EVENT_VERSION = {
  "1_0": "1.0",
} as const satisfies Record<string, EventVersion>;

export const EVENT_VERSION_VALUES = [
  '1.0',
] as const satisfies ReadonlyArray<EventVersion>;

export const EXECUTING_ENTITY = {
  USER: "user",
  ORGANIZATION: "organization",
  SYSTEM: "system",
} as const satisfies Record<string, ExecutingEntity>;

export const EXECUTING_ENTITY_VALUES = [
  'user',
  'organization',
  'system',
] as const satisfies ReadonlyArray<ExecutingEntity>;

export const HTTP_METHOD = {
  CONNECT: "CONNECT",
  DELETE: "DELETE",
  GET: "GET",
  HEAD: "HEAD",
  OPTIONS: "OPTIONS",
  PATCH: "PATCH",
  POST: "POST",
  PUT: "PUT",
  TRACE: "TRACE",
} as const satisfies Record<string, HTTPMethod>;

export const HTTP_METHOD_VALUES = [
  'CONNECT',
  'DELETE',
  'GET',
  'HEAD',
  'OPTIONS',
  'PATCH',
  'POST',
  'PUT',
  'TRACE',
] as const satisfies ReadonlyArray<HTTPMethod>;

export const HOLDER_ENTITLEMENT = {
  OWNER: "owner",
  ASSIGNEE: "assignee",
  LICENSEE: "licensee",
} as const satisfies Record<string, HolderEntitlement>;

export const HOLDER_ENTITLEMENT_VALUES = [
  'owner',
  'assignee',
  'licensee',
] as const satisfies ReadonlyArray<HolderEntitlement>;

export const HOST_STATUS = {
  REQUESTED_CREATE: "requested_create",
  PENDING_CREATE: "pending_create",
  ACTIVE: "active",
  INACTIVE: "inactive",
  PENDING_DELETE: "pending_delete",
} as const satisfies Record<string, HostStatus>;

export const HOST_STATUS_VALUES = [
  'requested_create',
  'pending_create',
  'active',
  'inactive',
  'pending_delete',
] as const satisfies ReadonlyArray<HostStatus>;

export const HTTP_PROTOCOL = {
  HTTP: "http",
  HTTPS: "https",
} as const satisfies Record<string, HttpProtocol>;

export const HTTP_PROTOCOL_VALUES = [
  'http',
  'https',
] as const satisfies ReadonlyArray<HttpProtocol>;

export const IP_ADDRESS_TYPE = {
  V4: "v4",
  V6: "v6",
} as const satisfies Record<string, IPAddressType>;

export const IP_ADDRESS_TYPE_VALUES = [
  'v4',
  'v6',
] as const satisfies ReadonlyArray<IPAddressType>;

export const INVOICE_RESPONSE_PAYMENT_STATUS = {
  PENDING: "pending",
  FAILED: "failed",
  SUCCEEDED: "succeeded",
} as const satisfies Record<string, InvoiceResponsePaymentStatus>;

export const INVOICE_RESPONSE_PAYMENT_STATUS_VALUES = [
  'pending',
  'failed',
  'succeeded',
] as const satisfies ReadonlyArray<InvoiceResponsePaymentStatus>;

export const INVOICE_RESPONSE_STATUS = {
  DRAFT: "draft",
  FINALIZED: "finalized",
  FAILED: "failed",
  PENDING: "pending",
  VOIDED: "voided",
} as const satisfies Record<string, InvoiceResponseStatus>;

export const INVOICE_RESPONSE_STATUS_VALUES = [
  'draft',
  'finalized',
  'failed',
  'pending',
  'voided',
] as const satisfies ReadonlyArray<InvoiceResponseStatus>;

export const INVOICE_RESPONSE_TYPE = {
  SUBSCRIPTION: "subscription",
  ADD_ON: "add_on",
  CREDIT: "credit",
  ONE_OFF: "one_off",
  ADVANCE_CHARGES: "advance_charges",
  PROGRESSIVE_BILLING: "progressive_billing",
} as const satisfies Record<string, InvoiceResponseType>;

export const INVOICE_RESPONSE_TYPE_VALUES = [
  'subscription',
  'add_on',
  'credit',
  'one_off',
  'advance_charges',
  'progressive_billing',
] as const satisfies ReadonlyArray<InvoiceResponseType>;

export const JOB_STATUS = {
  BLOCKED: "blocked",
  QUEUED: "queued",
  PAUSED: "paused",
  RUNNING: "running",
  SUCCEEDED: "succeeded",
  FAILED: "failed",
  CANCELED: "canceled",
  DEAD_LETTER: "dead_letter",
} as const satisfies Record<string, JobStatus>;

export const JOB_STATUS_VALUES = [
  'blocked',
  'queued',
  'paused',
  'running',
  'succeeded',
  'failed',
  'canceled',
  'dead_letter',
] as const satisfies ReadonlyArray<JobStatus>;

export const LAUNCH_PHASE_TYPE = {
  SUNRISE: "sunrise",
  LANDRUSH: "landrush",
  EAP: "eap",
} as const satisfies Record<string, LaunchPhaseType>;

export const LAUNCH_PHASE_TYPE_VALUES = [
  'sunrise',
  'landrush',
  'eap',
] as const satisfies ReadonlyArray<LaunchPhaseType>;

export const LEGAL_REQUIREMENT_OPERATION_TYPE = {
  REGISTRATION: "registration",
  TRANSFER: "transfer",
  RENEWAL: "renewal",
  REGISTRANT_CHANGE: "registrant_change",
} as const satisfies Record<string, LegalRequirementOperationType>;

export const LEGAL_REQUIREMENT_OPERATION_TYPE_VALUES = [
  'registration',
  'transfer',
  'renewal',
  'registrant_change',
] as const satisfies ReadonlyArray<LegalRequirementOperationType>;

export const LEGAL_REQUIREMENT_TYPE = {
  NOTICE: "notice",
  CONFIRMATION: "confirmation",
} as const satisfies Record<string, LegalRequirementType>;

export const LEGAL_REQUIREMENT_TYPE_VALUES = [
  'notice',
  'confirmation',
] as const satisfies ReadonlyArray<LegalRequirementType>;

export const LOCAL_PRESENCE_REQUIREMENT_TYPE = {
  PHYSICAL_ADDRESS: "physical_address",
  BUSINESS_ENTITY: "business_entity",
} as const satisfies Record<string, LocalPresenceRequirementType>;

export const LOCAL_PRESENCE_REQUIREMENT_TYPE_VALUES = [
  'physical_address',
  'business_entity',
] as const satisfies ReadonlyArray<LocalPresenceRequirementType>;

export const MEMORY_FACT_KIND = {
  PREFERENCE: "preference",
  NOTE: "note",
  OTHER: "other",
} as const satisfies Record<string, MemoryFactKind>;

export const MEMORY_FACT_KIND_VALUES = [
  'preference',
  'note',
  'other',
] as const satisfies ReadonlyArray<MemoryFactKind>;

export const MESSAGE_CONTEXT_KIND = {
  ZONES: "zones",
  CONTACTS: "contacts",
  DOMAINS: "domains",
} as const satisfies Record<string, MessageContextKind>;

export const MESSAGE_CONTEXT_KIND_VALUES = [
  'zones',
  'contacts',
  'domains',
] as const satisfies ReadonlyArray<MessageContextKind>;

export const MESSAGE_ROLE = {
  USER: "user",
  ASSISTANT: "assistant",
  SYSTEM: "system",
  TOOL: "tool",
} as const satisfies Record<string, MessageRole>;

export const MESSAGE_ROLE_VALUES = [
  'user',
  'assistant',
  'system',
  'tool',
] as const satisfies ReadonlyArray<MessageRole>;

export const METRICS_GROUPING = {
  URL: "url",
  FQDN: "fqdn",
  DOMAIN: "domain",
  FORWARD: "forward",
  RULE: "rule",
} as const satisfies Record<string, MetricsGrouping>;

export const METRICS_GROUPING_VALUES = [
  'url',
  'fqdn',
  'domain',
  'forward',
  'rule',
] as const satisfies ReadonlyArray<MetricsGrouping>;

export const OBJECT_EVENT_TYPE = {
  CREATED: "CREATED",
  UPDATED: "UPDATED",
  DELETED: "DELETED",
  IMPORTED: "IMPORTED",
  TRANSFER_STARTED: "TRANSFER_STARTED",
  TRANSFER_COMPLETED: "TRANSFER_COMPLETED",
  TRANSFER_OUT_STARTED: "TRANSFER_OUT_STARTED",
  TRANSFER_OUT_COMPLETED: "TRANSFER_OUT_COMPLETED",
  RENEWED: "RENEWED",
  RESTORED: "RESTORED",
  BILLING_TRANSACTION_RESERVED: "BILLING_TRANSACTION_RESERVED",
  BILLING_TRANSACTION_SUCCEEDED: "BILLING_TRANSACTION_SUCCEEDED",
  BILLING_TRANSACTION_FAILED: "BILLING_TRANSACTION_FAILED",
  BILLING_TRANSACTION_CANCELLED: "BILLING_TRANSACTION_CANCELLED",
} as const satisfies Record<string, ObjectEventType>;

export const OBJECT_EVENT_TYPE_VALUES = [
  'CREATED',
  'UPDATED',
  'DELETED',
  'IMPORTED',
  'TRANSFER_STARTED',
  'TRANSFER_COMPLETED',
  'TRANSFER_OUT_STARTED',
  'TRANSFER_OUT_COMPLETED',
  'RENEWED',
  'RESTORED',
  'BILLING_TRANSACTION_RESERVED',
  'BILLING_TRANSACTION_SUCCEEDED',
  'BILLING_TRANSACTION_FAILED',
  'BILLING_TRANSACTION_CANCELLED',
] as const satisfies ReadonlyArray<ObjectEventType>;

export const OBJECT_LOG_SORT_FIELD = {
  OBJECT_LOG_ID: "object_log_id",
  OBJECT_ID: "object_id",
  OBJECT_TYPE: "object_type",
  ACTION: "action",
  CREATED_ON: "created_on",
  SERVER_REQUEST_ID: "server_request_id",
  PERFORMED_BY_TYPE: "performed_by_type",
  PERFORMED_BY_ID: "performed_by_id",
} as const satisfies Record<string, ObjectLogSortField>;

export const OBJECT_LOG_SORT_FIELD_VALUES = [
  'object_log_id',
  'object_id',
  'object_type',
  'action',
  'created_on',
  'server_request_id',
  'performed_by_type',
  'performed_by_id',
] as const satisfies ReadonlyArray<ObjectLogSortField>;

export const ORGANIZATION_CREDENTIAL_STATUS = {
  ACTIVE: "active",
  EXPIRED: "expired",
  REVOKED: "revoked",
} as const satisfies Record<string, OrganizationCredentialStatus>;

export const ORGANIZATION_CREDENTIAL_STATUS_VALUES = [
  'active',
  'expired',
  'revoked',
] as const satisfies ReadonlyArray<OrganizationCredentialStatus>;

export const ORGANIZATION_SORT_FIELD = {
  CREATED_ON: "created_on",
  NAME: "name",
  COUNTRY_CODE: "country_code",
} as const satisfies Record<string, OrganizationSortField>;

export const ORGANIZATION_SORT_FIELD_VALUES = [
  'created_on',
  'name',
  'country_code',
] as const satisfies ReadonlyArray<OrganizationSortField>;

export const ORGANIZATION_STATUS = {
  ACTIVE: "active",
  INACTIVE: "inactive",
} as const satisfies Record<string, OrganizationStatus>;

export const ORGANIZATION_STATUS_VALUES = [
  'active',
  'inactive',
] as const satisfies ReadonlyArray<OrganizationStatus>;

export const PARKING_SORT_FIELD = {
  DOMAIN: "domain",
  CREATED_ON: "created_on",
  UPDATED_ON: "updated_on",
} as const satisfies Record<string, ParkingSortField>;

export const PARKING_SORT_FIELD_VALUES = [
  'domain',
  'created_on',
  'updated_on',
] as const satisfies ReadonlyArray<ParkingSortField>;

export const PATCH_OP = {
  UPSERT: "upsert",
  REMOVE: "remove",
} as const satisfies Record<string, PatchOp>;

export const PATCH_OP_VALUES = [
  'upsert',
  'remove',
] as const satisfies ReadonlyArray<PatchOp>;

export const PERIOD_UNIT = {
  Y: "y",
  M: "m",
  D: "d",
} as const satisfies Record<string, PeriodUnit>;

export const PERIOD_UNIT_VALUES = [
  'y',
  'm',
  'd',
] as const satisfies ReadonlyArray<PeriodUnit>;

export const POST_TRANSFER_REQUIREMENTS = {
  UPDATE_CONTACTS: "update_contacts",
  TLD_SPECIFIC: "tld_specific",
} as const satisfies Record<string, PostTransferRequirements>;

export const POST_TRANSFER_REQUIREMENTS_VALUES = [
  'update_contacts',
  'tld_specific',
] as const satisfies ReadonlyArray<PostTransferRequirements>;

export const POSTAL_ADDRESS_TYPE = {
  LOC: "loc",
  INT: "int",
} as const satisfies Record<string, PostalAddressType>;

export const POSTAL_ADDRESS_TYPE_VALUES = [
  'loc',
  'int',
] as const satisfies ReadonlyArray<PostalAddressType>;

export const PREMIUM_AFFECTS_TYPE = {
  REGISTRATION: "registration",
  DELETE: "delete",
  RENEWAL: "renewal",
  UPDATE: "update",
  TRANSFER: "transfer",
  RESTORE: "restore",
  CUSTOM: "custom",
} as const satisfies Record<string, PremiumAffectsType>;

export const PREMIUM_AFFECTS_TYPE_VALUES = [
  'registration',
  'delete',
  'renewal',
  'update',
  'transfer',
  'restore',
  'custom',
] as const satisfies ReadonlyArray<PremiumAffectsType>;

export const PREMIUM_SOURCE_TYPE = {
  EPP: "EPP",
  API: "API",
  CSV: "CSV",
  MANUAL: "manual",
} as const satisfies Record<string, PremiumSourceType>;

export const PREMIUM_SOURCE_TYPE_VALUES = [
  'EPP',
  'API',
  'CSV',
  'manual',
] as const satisfies ReadonlyArray<PremiumSourceType>;

export const PROTOCOL = {
  HTTP: "http",
  HTTPS: "https",
} as const satisfies Record<string, Protocol>;

export const PROTOCOL_VALUES = [
  'http',
  'https',
] as const satisfies ReadonlyArray<Protocol>;

export const PUBLIC_RESOURCE = {
  ORGANIZATION: "organization",
  DOMAINS: "domains",
  CONTACTS: "contacts",
  DNS: "dns",
  HOSTS: "hosts",
  EMAIL_FORWARDS: "email_forwards",
  DOMAIN_FORWARDS: "domain_forwards",
  PARKING: "parking",
  EVENTS: "events",
  JOBS: "jobs",
  BILLING: "billing",
  USERS: "users",
  API_KEYS: "api_keys",
  REGISTRAR_CREDENTIALS: "registrar_credentials",
  TAGS: "tags",
  AUDIT_LOGS: "audit_logs",
  VANITY_NS: "vanity_ns",
  AI_CONCIERGE: "ai_concierge",
} as const satisfies Record<string, PublicResource>;

export const PUBLIC_RESOURCE_VALUES = [
  'organization',
  'domains',
  'contacts',
  'dns',
  'hosts',
  'email_forwards',
  'domain_forwards',
  'parking',
  'events',
  'jobs',
  'billing',
  'users',
  'api_keys',
  'registrar_credentials',
  'tags',
  'audit_logs',
  'vanity_ns',
  'ai_concierge',
] as const satisfies ReadonlyArray<PublicResource>;

export const PUBLIC_ROLE = {
  OWNER: "owner",
  ADMIN: "admin",
  VIEWER: "viewer",
  DOMAIN_MANAGER: "domain_manager",
  DNS_MANAGER: "dns_manager",
  BILLING_MANAGER: "billing_manager",
} as const satisfies Record<string, PublicRole>;

export const PUBLIC_ROLE_VALUES = [
  'owner',
  'admin',
  'viewer',
  'domain_manager',
  'dns_manager',
  'billing_manager',
] as const satisfies ReadonlyArray<PublicRole>;

export const PUBLIC_SCOPE = {
  READ: "read",
  MANAGE: "manage",
  DELETE: "delete",
} as const satisfies Record<string, PublicScope>;

export const PUBLIC_SCOPE_VALUES = [
  'read',
  'manage',
  'delete',
] as const satisfies ReadonlyArray<PublicScope>;

export const REDIRECT_CODE = [
  301,
  302,
  307,
  308,
] as const satisfies ReadonlyArray<RedirectCode>;

export const REGISTRANT_CHANGE_TYPE = {
  UPDATE: "update",
  TRADE: "trade",
} as const satisfies Record<string, RegistrantChangeType>;

export const REGISTRANT_CHANGE_TYPE_VALUES = [
  'update',
  'trade',
] as const satisfies ReadonlyArray<RegistrantChangeType>;

export const REGISTRY_HANDLE_ATTRIBUTE_TYPE = {
  AT_EXT_CONTACT_TYPE: "at-ext-contact:type",
  DE_CONTACT_TYPE: "DE_CONTACT_TYPE",
  DNSBE_TYPE: "dnsbe:type",
  EURID_TYPE: "eurid:type",
  AFNIC_CONTACT_TYPE: "AFNIC_CONTACT_TYPE",
  AFNIC_PP_FIRST_NAME: "AFNIC_PP_FIRST_NAME",
  AFNIC_PM_LEGAL_STATUS: "AFNIC_PM_LEGAL_STATUS",
  AFNIC_PM_SIREN: "AFNIC_PM_SIREN",
  AFNIC_PM_VAT: "AFNIC_PM_VAT",
  AFNIC_PM_TRADEMARK: "AFNIC_PM_TRADEMARK",
  AFNIC_PM_ASSOC_WALDEC: "AFNIC_PM_ASSOC_WALDEC",
  AFNIC_PM_ASSOC_PUBL_DATE: "AFNIC_PM_ASSOC_PUBL_DATE",
  AFNIC_PM_ASSOC_PUBL_ANNOUNCE: "AFNIC_PM_ASSOC_PUBL_ANNOUNCE",
  AFNIC_PM_ASSOC_PUBL_PAGE: "AFNIC_PM_ASSOC_PUBL_PAGE",
  AFNIC_PM_ASSOC_DECL: "AFNIC_PM_ASSOC_DECL",
  AFNIC_PM_DUNS: "AFNIC_PM_DUNS",
  AFNIC_PM_LOCAL: "AFNIC_PM_LOCAL",
  AFNIC_ID_STATUS: "AFNIC_ID_STATUS",
  AFNIC_REACHABLE_MEDIA: "AFNIC_REACHABLE_MEDIA",
  AFNIC_REACHABLE_STATUS: "AFNIC_REACHABLE_STATUS",
  AFNIC_RESTRICTED_PUBLICATION: "AFNIC_RESTRICTED_PUBLICATION",
  ROTLD_CONTACT_TYPE: "ROTLD_CONTACT_TYPE",
  ROTLD_CNP_FISCAL_CODE: "ROTLD_CNP_FISCAL_CODE",
  ROTLD_ID_NUMBER: "ROTLD_ID_NUMBER",
  ROTLD_REGISTRATION_NUMBER: "ROTLD_REGISTRATION_NUMBER",
  ROTLD_DOMAIN_NAME: "ROTLD_DOMAIN_NAME",
  NOMINET_CONTACT_TYPE: "NOMINET_CONTACT_TYPE",
  NOMINET_CO_NO: "NOMINET_CO_NO",
  NOMINET_TRAD_NAME: "NOMINET_TRAD_NAME",
  CIRA_CPR: "CIRA_CPR",
  SIDN_LEGAL_FORM: "SIDN_LEGAL_FORM",
  SIDN_LEGAL_REG_NO: "SIDN_LEGAL_REG_NO",
  US_NEXUS_CATEGORY: "US_NEXUS_CATEGORY",
  US_NEXUS_COUNTRY_CODE: "US_NEXUS_COUNTRY_CODE",
  US_APP_PURPOSE: "US_APP_PURPOSE",
  NIC_IT_ENTITY_TYPE: "NIC_IT_ENTITY_TYPE",
  NIC_IT_REG_CODE: "NIC_IT_REG_CODE",
  CZ_NIC_IDENT_TYPE: "CZ_NIC_IDENT_TYPE",
  CZ_NIC_IDENT_VALUE: "CZ_NIC_IDENT_VALUE",
  CZ_NIC_VAT: "CZ_NIC_VAT",
  CZ_NIC_NOTIFY_EMAIL: "CZ_NIC_NOTIFY_EMAIL",
  DNS_LU_CONTACT_ROLE: "DNS_LU_CONTACT_ROLE",
  SK_NIC_LEGAL_FORM: "SK_NIC_LEGAL_FORM",
  SK_NIC_IDENT_VALUE: "SK_NIC_IDENT_VALUE",
} as const satisfies Record<string, RegistryHandleAttributeType>;

export const REGISTRY_HANDLE_ATTRIBUTE_TYPE_VALUES = [
  'at-ext-contact:type',
  'DE_CONTACT_TYPE',
  'dnsbe:type',
  'eurid:type',
  'AFNIC_CONTACT_TYPE',
  'AFNIC_PP_FIRST_NAME',
  'AFNIC_PM_LEGAL_STATUS',
  'AFNIC_PM_SIREN',
  'AFNIC_PM_VAT',
  'AFNIC_PM_TRADEMARK',
  'AFNIC_PM_ASSOC_WALDEC',
  'AFNIC_PM_ASSOC_PUBL_DATE',
  'AFNIC_PM_ASSOC_PUBL_ANNOUNCE',
  'AFNIC_PM_ASSOC_PUBL_PAGE',
  'AFNIC_PM_ASSOC_DECL',
  'AFNIC_PM_DUNS',
  'AFNIC_PM_LOCAL',
  'AFNIC_ID_STATUS',
  'AFNIC_REACHABLE_MEDIA',
  'AFNIC_REACHABLE_STATUS',
  'AFNIC_RESTRICTED_PUBLICATION',
  'ROTLD_CONTACT_TYPE',
  'ROTLD_CNP_FISCAL_CODE',
  'ROTLD_ID_NUMBER',
  'ROTLD_REGISTRATION_NUMBER',
  'ROTLD_DOMAIN_NAME',
  'NOMINET_CONTACT_TYPE',
  'NOMINET_CO_NO',
  'NOMINET_TRAD_NAME',
  'CIRA_CPR',
  'SIDN_LEGAL_FORM',
  'SIDN_LEGAL_REG_NO',
  'US_NEXUS_CATEGORY',
  'US_NEXUS_COUNTRY_CODE',
  'US_APP_PURPOSE',
  'NIC_IT_ENTITY_TYPE',
  'NIC_IT_REG_CODE',
  'CZ_NIC_IDENT_TYPE',
  'CZ_NIC_IDENT_VALUE',
  'CZ_NIC_VAT',
  'CZ_NIC_NOTIFY_EMAIL',
  'DNS_LU_CONTACT_ROLE',
  'SK_NIC_LEGAL_FORM',
  'SK_NIC_IDENT_VALUE',
] as const satisfies ReadonlyArray<RegistryHandleAttributeType>;

export const RENEWAL_MODE = {
  RENEW: "renew",
  EXPIRE: "expire",
} as const satisfies Record<string, RenewalMode>;

export const RENEWAL_MODE_VALUES = [
  'renew',
  'expire',
] as const satisfies ReadonlyArray<RenewalMode>;

export const REPORT_STATUS = {
  PENDING: "pending",
  GENERATING: "generating",
  COMPLETED: "completed",
  FAILED: "failed",
} as const satisfies Record<string, ReportStatus>;

export const REPORT_STATUS_VALUES = [
  'pending',
  'generating',
  'completed',
  'failed',
] as const satisfies ReadonlyArray<ReportStatus>;

export const REPORT_TRIGGER_TYPE = {
  ON_DEMAND: "on_demand",
  SCHEDULED: "scheduled",
} as const satisfies Record<string, ReportTriggerType>;

export const REPORT_TRIGGER_TYPE_VALUES = [
  'on_demand',
  'scheduled',
] as const satisfies ReadonlyArray<ReportTriggerType>;

export const REPORT_TYPE = {
  DOMAIN_INVENTORY: "domain_inventory",
  DNS_ZONE_SUMMARY: "dns_zone_summary",
  DNS_ZONE_RECORDS: "dns_zone_records",
  DOMAIN_FORWARDS: "domain_forwards",
  EXPIRING_DOMAINS: "expiring_domains",
  EMAIL_FORWARDS: "email_forwards",
  REGISTRAR_PORTFOLIO_PDF: "registrar_portfolio_pdf",
  BILLING_TRANSACTIONS: "billing_transactions",
  BILLING_TRANSACTIONS_MONTHLY: "billing_transactions_monthly",
} as const satisfies Record<string, ReportType>;

export const REPORT_TYPE_VALUES = [
  'domain_inventory',
  'dns_zone_summary',
  'dns_zone_records',
  'domain_forwards',
  'expiring_domains',
  'email_forwards',
  'registrar_portfolio_pdf',
  'billing_transactions',
  'billing_transactions_monthly',
] as const satisfies ReadonlyArray<ReportType>;

export const REQUEST_HISTORY_SORT_FIELD = {
  METHOD: "method",
  PATH: "path",
  STATUS_CODE: "status_code",
  DURATION: "duration",
  SERVER_REQUEST_ID: "server_request_id",
  PERFORMED_BY_TYPE: "performed_by_type",
  PERFORMED_BY_ID: "performed_by_id",
  CREATED_ON: "created_on",
  REQUEST_STARTED_AT: "request_started_at",
  REQUEST_COMPLETED_AT: "request_completed_at",
} as const satisfies Record<string, RequestHistorySortField>;

export const REQUEST_HISTORY_SORT_FIELD_VALUES = [
  'method',
  'path',
  'status_code',
  'duration',
  'server_request_id',
  'performed_by_type',
  'performed_by_id',
  'created_on',
  'request_started_at',
  'request_completed_at',
] as const satisfies ReadonlyArray<RequestHistorySortField>;

export const RESERVED_SOURCE_TYPE = {
  API: "API",
  CSV: "CSV",
  MANUAL: "manual",
} as const satisfies Record<string, ReservedSourceType>;

export const RESERVED_SOURCE_TYPE_VALUES = [
  'API',
  'CSV',
  'manual',
] as const satisfies ReadonlyArray<ReservedSourceType>;

export const SORT_ORDER = {
  ASC: "asc",
  DESC: "desc",
} as const satisfies Record<string, SortOrder>;

export const SORT_ORDER_VALUES = [
  'asc',
  'desc',
] as const satisfies ReadonlyArray<SortOrder>;

export const STATUS_TAG_TYPE = {
  VERIFICATION_REQUIRED: "VERIFICATION_REQUIRED",
} as const satisfies Record<string, StatusTagType>;

export const STATUS_TAG_TYPE_VALUES = [
  'VERIFICATION_REQUIRED',
] as const satisfies ReadonlyArray<StatusTagType>;

export const SYNC_OPERATION_TYPE = {
  REGISTRATION: "registration",
  RENEWAL: "renewal",
  TRANSFER: "transfer",
} as const satisfies Record<string, SyncOperationType>;

export const SYNC_OPERATION_TYPE_VALUES = [
  'registration',
  'renewal',
  'transfer',
] as const satisfies ReadonlyArray<SyncOperationType>;

export const TLD_TYPE = {
  G_TLD: "gTLD",
  CC_TLD: "ccTLD",
} as const satisfies Record<string, TLDType>;

export const TLD_TYPE_VALUES = [
  'gTLD',
  'ccTLD',
] as const satisfies ReadonlyArray<TLDType>;

export const TAG_COLOR = {
  COLOR_1: "color-1",
  COLOR_2: "color-2",
  COLOR_3: "color-3",
  COLOR_4: "color-4",
  COLOR_5: "color-5",
  COLOR_6: "color-6",
  COLOR_7: "color-7",
  COLOR_8: "color-8",
  COLOR_9: "color-9",
  COLOR_10: "color-10",
} as const satisfies Record<string, TagColor>;

export const TAG_COLOR_VALUES = [
  'color-1',
  'color-2',
  'color-3',
  'color-4',
  'color-5',
  'color-6',
  'color-7',
  'color-8',
  'color-9',
  'color-10',
] as const satisfies ReadonlyArray<TagColor>;

export const TAG_FILTER_MODE = {
  MATCH_ANY: "match_any",
  MATCH_ALL: "match_all",
} as const satisfies Record<string, TagFilterMode>;

export const TAG_FILTER_MODE_VALUES = [
  'match_any',
  'match_all',
] as const satisfies ReadonlyArray<TagFilterMode>;

export const TAG_SORT_FIELD = {
  LABEL: "label",
  CREATED_ON: "created_on",
  UPDATED_ON: "updated_on",
} as const satisfies Record<string, TagSortField>;

export const TAG_SORT_FIELD_VALUES = [
  'label',
  'created_on',
  'updated_on',
] as const satisfies ReadonlyArray<TagSortField>;

export const TAG_TYPE = {
  DOMAIN: "DOMAIN",
  CONTACT: "CONTACT",
  ZONE: "ZONE",
} as const satisfies Record<string, TagType>;

export const TAG_TYPE_VALUES = [
  'DOMAIN',
  'CONTACT',
  'ZONE',
] as const satisfies ReadonlyArray<TagType>;

export const TIME_RANGE = {
  "1H": "1h",
  "1D": "1d",
  "7D": "7d",
  "30D": "30d",
  "1Y": "1y",
} as const satisfies Record<string, TimeRange>;

export const TIME_RANGE_VALUES = [
  '1h',
  '1d',
  '7d',
  '30d',
  '1y',
] as const satisfies ReadonlyArray<TimeRange>;

export const TRANSFER_ACK_TYPE = {
  NONE: "none",
  REGISTRAR: "registrar",
  REGISTRANT: "registrant",
  BOTH: "both",
} as const satisfies Record<string, TransferAckType>;

export const TRANSFER_ACK_TYPE_VALUES = [
  'none',
  'registrar',
  'registrant',
  'both',
] as const satisfies ReadonlyArray<TransferAckType>;

export const USER_SORT_FIELD = {
  CREATED_ON: "created_on",
  USERNAME: "username",
  EMAIL: "email",
} as const satisfies Record<string, UserSortField>;

export const USER_SORT_FIELD_VALUES = [
  'created_on',
  'username',
  'email',
] as const satisfies ReadonlyArray<UserSortField>;

export const USER_STATUS = {
  ACTIVE: "active",
  INACTIVE: "inactive",
} as const satisfies Record<string, UserStatus>;

export const USER_STATUS_VALUES = [
  'active',
  'inactive',
] as const satisfies ReadonlyArray<UserStatus>;

export const VERIFICATION_CLAIM_TYPE = {
  NAME: "name",
  ADDRESS: "address",
  EMAIL: "email",
  PHONE: "phone",
} as const satisfies Record<string, VerificationClaimType>;

export const VERIFICATION_CLAIM_TYPE_VALUES = [
  'name',
  'address',
  'email',
  'phone',
] as const satisfies ReadonlyArray<VerificationClaimType>;

export const VERIFICATION_DEADLINE_TYPE = {
  DEDELEGATION: "dedelegation",
  DELETION: "deletion",
} as const satisfies Record<string, VerificationDeadlineType>;

export const VERIFICATION_DEADLINE_TYPE_VALUES = [
  'dedelegation',
  'deletion',
] as const satisfies ReadonlyArray<VerificationDeadlineType>;

export const VERIFICATION_TYPE = {
  API: "api",
  EMAIL: "email",
} as const satisfies Record<string, VerificationType>;

export const VERIFICATION_TYPE_VALUES = [
  'api',
  'email',
] as const satisfies ReadonlyArray<VerificationType>;

export const ZONE_INCLUDE_FIELD = {
  TAGS: "tags",
} as const satisfies Record<string, ZoneIncludeField>;

export const ZONE_INCLUDE_FIELD_VALUES = [
  'tags',
] as const satisfies ReadonlyArray<ZoneIncludeField>;

export const ZONE_SORT_FIELD = {
  NAME: "name",
  CREATED_ON: "created_on",
  UPDATED_ON: "updated_on",
  DNSSEC_STATUS: "dnssec_status",
} as const satisfies Record<string, ZoneSortField>;

export const ZONE_SORT_FIELD_VALUES = [
  'name',
  'created_on',
  'updated_on',
  'dnssec_status',
] as const satisfies ReadonlyArray<ZoneSortField>;
