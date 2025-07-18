/**
 * Auto-generated enums from OpenAPI schema
 * Generated on: 2025-07-18T23:11:55.928Z
 */

/**
 * BULK_OPERATION_STATUS
 */
export enum BULK_OPERATION_STATUS {
  SUCCESS = "success",
  FAILED = "failed",
}

/**
 * CONTACT_SORT_FIELD
 */
export enum CONTACT_SORT_FIELD {
  FIRST_NAME = "first_name",
  LAST_NAME = "last_name",
  EMAIL = "email",
  CREATED_ON = "created_on",
}

/**
 * CURRENCY
 */
export enum CURRENCY {
  USD = "USD",
  EUR = "EUR",
}

/**
 * DNS_CHANGE_ACTION
 */
export enum DNS_CHANGE_ACTION {
  CREATE_ZONE = "create_zone",
  DELETE_ZONE = "delete_zone",
  CREATE_RECORD = "create_record",
  DELETE_RECORD = "delete_record",
  ENABLE_DNSSEC = "enable_dnssec",
  DISABLE_DNSSEC = "disable_dnssec",
}

/**
 * DNS_RRSET_TYPE
 */
export enum DNS_RRSET_TYPE {
  A = "A",
  AAAA = "AAAA",
  ALIAS = "ALIAS",
  CAA = "CAA",
  CNAME = "CNAME",
  DNSKEY = "DNSKEY",
  DS = "DS",
  MX = "MX",
  NS = "NS",
  PTR = "PTR",
  TXT = "TXT",
  SOA = "SOA",
  SRV = "SRV",
}

/**
 * DNSSEC_ALGORITHM
 */
export const DNSSECALGORITHM = [1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 13, 14, 15, 16, 17, 23] as const;

export type Dnssecalgorithm = typeof DNSSECALGORITHM[number];

/**
 * DNSSEC_DIGEST_TYPE
 */
export const DNSSECDIGESTTYPE = [1, 2, 3, 4, 5, 6] as const;

export type Dnssecdigesttype = typeof DNSSECDIGESTTYPE[number];

/**
 * DNSSEC_RECORD_TYPE
 */
export enum DNSSEC_RECORD_TYPE {
  DS_DATA = "ds_data",
  KEY_DATA = "key_data",
}

/**
 * DNSSEC_STATUS
 */
export enum DNSSEC_STATUS {
  ENABLED = "enabled",
  DISABLED = "disabled",
}

/**
 * DOMAIN_AVAILABILITY_STATUS
 */
export enum DOMAIN_AVAILABILITY_STATUS {
  AVAILABLE = "available",
  UNAVAILABLE = "unavailable",
  MARKET_AVAILABLE = "market_available",
  TMCH_CLAIM = "tmch_claim",
  ERROR = "error",
}

/**
 * DOMAIN_CLIENT_STATUS
 */
export enum DOMAIN_CLIENT_STATUS {
  CLIENTTRANSFERPROHIBITED = "clientTransferProhibited",
  CLIENTUPDATEPROHIBITED = "clientUpdateProhibited",
  CLIENTDELETEPROHIBITED = "clientDeleteProhibited",
  CLIENTRENEWPROHIBITED = "clientRenewProhibited",
  CLIENTHOLD = "clientHold",
}

/**
 * DOMAIN_CONTACT_TYPE
 */
export enum DOMAIN_CONTACT_TYPE {
  REGISTRANT = "registrant",
  ADMIN = "admin",
  TECH = "tech",
  BILLING = "billing",
}

/**
 * DOMAIN_SORT_FIELD
 */
export enum DOMAIN_SORT_FIELD {
  NAME = "name",
  CREATED_ON = "created_on",
  UPDATED_ON = "updated_on",
  EXPIRES_ON = "expires_on",
  REGISTERED_ON = "registered_on",
}

/**
 * DOMAIN_STATUS
 */
export enum DOMAIN_STATUS {
  OK = "ok",
  SERVERTRANSFERPROHIBITED = "serverTransferProhibited",
  SERVERUPDATEPROHIBITED = "serverUpdateProhibited",
  SERVERDELETEPROHIBITED = "serverDeleteProhibited",
  SERVERRENEWPROHIBITED = "serverRenewProhibited",
  SERVERHOLD = "serverHold",
  TRANSFERPERIOD = "transferPeriod",
  RENEWPERIOD = "renewPeriod",
  REDEMPTIONPERIOD = "redemptionPeriod",
  PENDINGUPDATE = "pendingUpdate",
  PENDINGTRANSFER = "pendingTransfer",
  PENDINGRESTORE = "pendingRestore",
  PENDINGRENEW = "pendingRenew",
  PENDINGDELETE = "pendingDelete",
  PENDINGCREATE = "pendingCreate",
  INACTIVE = "inactive",
  AUTORENEWPERIOD = "autoRenewPeriod",
  ADDPERIOD = "addPeriod",
  DELETED = "deleted",
  CLIENTTRANSFERPROHIBITED = "clientTransferProhibited",
  CLIENTUPDATEPROHIBITED = "clientUpdateProhibited",
  CLIENTDELETEPROHIBITED = "clientDeleteProhibited",
  CLIENTRENEWPROHIBITED = "clientRenewProhibited",
  CLIENTHOLD = "clientHold",
}

/**
 * EMAIL_FORWARD_STATUS
 */
export enum EMAIL_FORWARD_STATUS {
  ACTIVE = "active",
  INACTIVE = "inactive",
}

/**
 * EMAIL_VERIFICATION_STATUS
 */
export enum EMAIL_VERIFICATION_STATUS {
  VERIFIED = "verified",
  PENDING = "pending",
  CANCELED = "canceled",
}

/**
 * EVENT_OBJECT_TYPE
 */
export enum EVENT_OBJECT_TYPE {
  DOMAIN = "DOMAIN",
  CONTACT = "CONTACT",
  HOST = "HOST",
  RAW = "RAW",
  UNKNOWN = "UNKNOWN",
}

/**
 * EVENT_SUBTYPE
 */
export enum EVENT_SUBTYPE {
  NOTIFICATION = "NOTIFICATION",
  SUCCESS = "SUCCESS",
  FAILURE = "FAILURE",
  CANCELED = "CANCELED",
}

/**
 * EVENT_TYPE
 */
export enum EVENT_TYPE {
  REGISTRATION = "REGISTRATION",
  RENEWAL = "RENEWAL",
  MODIFICATION = "MODIFICATION",
  DELETION = "DELETION",
  INBOUND_TRANSFER = "INBOUND_TRANSFER",
  OUTBOUND_TRANSFER = "OUTBOUND_TRANSFER",
}

/**
 * GRANT_TYPE
 */
export enum GRANT_TYPE {
  CLIENT_CREDENTIALS = "client_credentials",
  PASSWORD = "password",
  REFRESH_TOKEN = "refresh_token",
}

/**
 * ORGANIZATION_CREDENTIAL_STATUS
 */
export enum ORGANIZATION_CREDENTIAL_STATUS {
  ACTIVE = "active",
  REVOKED = "revoked",
}

/**
 * ORGANIZATION_STATUS
 */
export enum ORGANIZATION_STATUS {
  ACTIVE = "active",
  INACTIVE = "inactive",
}

/**
 * PERIOD_UNIT
 */
export enum PERIOD_UNIT {
  Y = "y",
  M = "m",
  D = "d",
}

/**
 * PERMISSION
 */
export enum PERMISSION {
  ACKNOWLEDGE = "acknowledge",
  BULK_CREATE = "bulk_create",
  BULK_DELETE = "bulk_delete",
  BULK_RENEW_EXPIRE = "bulk_renew_expire",
  BULK_TRANSFER_TRADE = "bulk_transfer_trade",
  BULK_UPDATE = "bulk_update",
  CREATE = "create",
  DELETE = "delete",
  ENTERPRISE = "enterprise",
  MANAGE_API_KEYS = "manage_api_keys",
  MANAGE_BILLING = "manage_billing",
  MANAGE_CMS_CONTENT = "manage_cms_content",
  MANAGE_CONTACTS = "manage_contacts",
  MANAGE_DNS_ZONES = "manage_dns_zones",
  MANAGE_DOMAINS = "manage_domains",
  MANAGE_EMAIL_FORWARDS = "manage_email_forwards",
  MANAGE_OPUSDNS_API_KEYS = "manage_opusdns_api_keys",
  MANAGE_PRODUCTS = "manage_products",
  MANAGE_RESELLER = "manage_reseller",
  MANAGE_USER_RELATIONS = "manage_user_relations",
  MANAGE_USERS = "manage_users",
  PLAN_MANAGER = "plan_manager",
  PREMIUM = "premium",
  PREMIUM_RESELLER = "premium_reseller",
  RENEW_EXPIRE = "renew_expire",
  SIGN_ORG_TOS = "sign_org_tos",
  STARTER = "starter",
  TRANSFER_TRADE = "transfer_trade",
  UPDATE = "update",
  VERIFY = "verify",
  VIEW = "view",
  VIEW_AUDIT_LOGS = "view_audit_logs",
}

/**
 * PLAN_RELATION
 */
export enum PLAN_RELATION {
  BASIC_PLAN = "basic_plan",
  ENTERPRISE_PLAN = "enterprise_plan",
  PREMIUM_PLAN = "premium_plan",
  STARTER_PLAN = "starter_plan",
}

/**
 * RELATION
 */
export enum RELATION {
  ACCEPTED_TOS = "accepted_tos",
  ADMIN = "admin",
  API_ADMIN = "api_admin",
  BILLING_MANAGER = "billing_manager",
  CLIENT_API_KEY = "client_api_key",
  CMS_CONTENT_EDITOR = "cms_content_editor",
  CONTACT_MANAGER = "contact_manager",
  DOMAIN_MANAGER = "domain_manager",
  EMAIL_FORWARD_MANAGER = "email_forward_manager",
  MEMBER = "member",
  OPUSDNS_INTERNAL_API_KEY = "opusdns_internal_api_key",
  ORGANIZATION_MANAGER = "organization_manager",
  OWNER = "owner",
  PARENT = "parent",
  PRODUCT_MANAGER = "product_manager",
  RECIPIENT = "recipient",
  RESELLER_MANAGER = "reseller_manager",
  ROOT_ADMIN = "root_admin",
  SELF = "self",
}

/**
 * RENEWAL_MODE
 */
export enum RENEWAL_MODE {
  RENEW = "renew",
  EXPIRE = "expire",
  DELETE = "delete",
}

/**
 * SORT_ORDER
 */
export enum SORT_ORDER {
  ASC = "asc",
  DESC = "desc",
}

/**
 * USER_NOTIFICATION_STATUS
 */
export enum USER_NOTIFICATION_STATUS {
  READ = "read",
  UNREAD = "unread",
}

/**
 * USER_STATUS
 */
export enum USER_STATUS {
  ACTIVE = "active",
  INACTIVE = "inactive",
}

/**
 * VERIFICATION_TYPE
 */
export enum VERIFICATION_TYPE {
  API = "api",
  EMAIL = "email",
}

/**
 * ZONE_SORT_FIELD
 */
export enum ZONE_SORT_FIELD {
  NAME = "name",
  CREATED_ON = "created_on",
  UPDATED_ON = "updated_on",
  DNSSEC_STATUS = "dnssec_status",
}

