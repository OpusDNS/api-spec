/**
 * Key constants for OpusDNS API response objects.
 *
 * This file is auto-generated from the OpenAPI specification.
 * Do not edit manually.
 */

import { Body_issue_organization_token_v1_auth_token_post } from './schemas';
import { EmailForwardBulkDeleteResult } from './schemas';
import { EmailForwardBulkUpdateResult } from './schemas';
import { BulkOperationResult } from './schemas';
import { ContactCreate } from './schemas';
import { Contact } from './schemas';
import { ContactSchema } from './schemas';
import { ContactVerificationApi } from './schemas';
import { ContactVerificationEmail } from './schemas';
import { ContactVerification } from './schemas';
import { DeletedEvent } from './schemas';
import { DnsChange } from './schemas';
import { DnsChanges } from './schemas';
import { DnsRecordCreate } from './schemas';
import { DnsRecord } from './schemas';
import { DnsRrsetCreate } from './schemas';
import { DnsRrset } from './schemas';
import { DnsZoneCreate } from './schemas';
import { DnsZone } from './schemas';
import { DnsZoneRrsetsCreate } from './schemas';
import { DomainAvailability } from './schemas';
import { DomainAvailabilityMeta } from './schemas';
import { DomainCheck } from './schemas';
import { DomainContact } from './schemas';
import { DomainCreate } from './schemas';
import { DomainDnssecDataCreate } from './schemas';
import { DomainDnssecData } from './schemas';
import { DomainNameParts } from './schemas';
import { DomainPeriod } from './schemas';
import { DomainRenewRequest } from './schemas';
import { DomainRenew } from './schemas';
import { Domain } from './schemas';
import { DomainSearchMeta } from './schemas';
import { DomainSearch } from './schemas';
import { DomainSearchSuggestion } from './schemas';
import { DomainTransferIn } from './schemas';
import { DomainUpdate } from './schemas';
import { EmailForward } from './schemas';
import { EmailForwardBulkDelete } from './schemas';
import { EmailForwardBulkUpdate } from './schemas';
import { EmailForwardBulkUpdateItem } from './schemas';
import { EmailForwardCreate } from './schemas';
import { EmailForwardUpdate } from './schemas';
import { EventResponse } from './schemas';
import { EventSchema } from './schemas';
import { HTTPValidationError } from './schemas';
import { IpRestrictionCreate } from './schemas';
import { IpRestriction } from './schemas';
import { IpRestrictionUpdate } from './schemas';
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
import { PermissionSet } from './schemas';
import { PlanUpdate } from './schemas';
import { Problem } from './schemas';
import { RelationSet } from './schemas';
import { SignupCreate } from './schemas';
import { SpiceDbRelationshipUpdate } from './schemas';
import { TermsOfServiceAccept } from './schemas';
import { TransferEvent } from './schemas';
import { User } from './schemas';
import { UserAttributeUpdate } from './schemas';
import { UserCreate } from './schemas';
import { UserNotification } from './schemas';
import { UserNotificationSummary } from './schemas';
import { UserToken } from './schemas';
import { UserUpdate } from './schemas';
import { UserWithAttributes } from './schemas';
import { UserWithRelationPermissions } from './schemas';
import { ValidationError } from './schemas';
import { DomainAvailabilityList } from './schemas';
import { DomainAvailabilityCheck } from './schemas';

export const BODY_ISSUE_ORGANIZATION_TOKEN_V1_AUTH_TOKEN_POST_KEY_CLIENT_ID = 'client_id' as keyof Body_issue_organization_token_v1_auth_token_post;
export const BODY_ISSUE_ORGANIZATION_TOKEN_V1_AUTH_TOKEN_POST_KEY_CLIENT_SECRET = 'client_secret' as keyof Body_issue_organization_token_v1_auth_token_post;
export const BODY_ISSUE_ORGANIZATION_TOKEN_V1_AUTH_TOKEN_POST_KEY_GRANT_TYPE = 'grant_type' as keyof Body_issue_organization_token_v1_auth_token_post;
export const BODY_ISSUE_ORGANIZATION_TOKEN_V1_AUTH_TOKEN_POST_KEY_PASSWORD = 'password' as keyof Body_issue_organization_token_v1_auth_token_post;
export const BODY_ISSUE_ORGANIZATION_TOKEN_V1_AUTH_TOKEN_POST_KEY_USERNAME = 'username' as keyof Body_issue_organization_token_v1_auth_token_post;

export const BODY_ISSUE_ORGANIZATION_TOKEN_V1_AUTH_TOKEN_POST_KEYS = [
  BODY_ISSUE_ORGANIZATION_TOKEN_V1_AUTH_TOKEN_POST_KEY_CLIENT_ID,
  BODY_ISSUE_ORGANIZATION_TOKEN_V1_AUTH_TOKEN_POST_KEY_CLIENT_SECRET,
  BODY_ISSUE_ORGANIZATION_TOKEN_V1_AUTH_TOKEN_POST_KEY_GRANT_TYPE,
  BODY_ISSUE_ORGANIZATION_TOKEN_V1_AUTH_TOKEN_POST_KEY_PASSWORD,
  BODY_ISSUE_ORGANIZATION_TOKEN_V1_AUTH_TOKEN_POST_KEY_USERNAME,
] as const;

export const EMAIL_FORWARD_BULK_DELETE_RESULT_KEY_RESULTS = 'results' as keyof EmailForwardBulkDeleteResult;

export const EMAIL_FORWARD_BULK_DELETE_RESULT_KEYS = [
  EMAIL_FORWARD_BULK_DELETE_RESULT_KEY_RESULTS,
] as const;

export const EMAIL_FORWARD_BULK_UPDATE_RESULT_KEY_RESULTS = 'results' as keyof EmailForwardBulkUpdateResult;

export const EMAIL_FORWARD_BULK_UPDATE_RESULT_KEYS = [
  EMAIL_FORWARD_BULK_UPDATE_RESULT_KEY_RESULTS,
] as const;

export const BULK_OPERATION_RESULT_KEY_ERROR_MESSAGE = 'error_message' as keyof BulkOperationResult;
export const BULK_OPERATION_RESULT_KEY_STATUS = 'status' as keyof BulkOperationResult;

export const BULK_OPERATION_RESULT_KEYS = [
  BULK_OPERATION_RESULT_KEY_ERROR_MESSAGE,
  BULK_OPERATION_RESULT_KEY_STATUS,
] as const;

export const CONTACT_CREATE_KEY_CITY = 'city' as keyof ContactCreate;
export const CONTACT_CREATE_KEY_COUNTRY = 'country' as keyof ContactCreate;
export const CONTACT_CREATE_KEY_DISCLOSE = 'disclose' as keyof ContactCreate;
export const CONTACT_CREATE_KEY_EMAIL = 'email' as keyof ContactCreate;
export const CONTACT_CREATE_KEY_FAX = 'fax' as keyof ContactCreate;
export const CONTACT_CREATE_KEY_FIRST_NAME = 'first_name' as keyof ContactCreate;
export const CONTACT_CREATE_KEY_LAST_NAME = 'last_name' as keyof ContactCreate;
export const CONTACT_CREATE_KEY_ORG = 'org' as keyof ContactCreate;
export const CONTACT_CREATE_KEY_PHONE = 'phone' as keyof ContactCreate;
export const CONTACT_CREATE_KEY_POSTAL_CODE = 'postal_code' as keyof ContactCreate;
export const CONTACT_CREATE_KEY_STATE = 'state' as keyof ContactCreate;
export const CONTACT_CREATE_KEY_STREET = 'street' as keyof ContactCreate;
export const CONTACT_CREATE_KEY_TITLE = 'title' as keyof ContactCreate;

export const CONTACT_CREATE_KEYS = [
  CONTACT_CREATE_KEY_CITY,
  CONTACT_CREATE_KEY_COUNTRY,
  CONTACT_CREATE_KEY_DISCLOSE,
  CONTACT_CREATE_KEY_EMAIL,
  CONTACT_CREATE_KEY_FAX,
  CONTACT_CREATE_KEY_FIRST_NAME,
  CONTACT_CREATE_KEY_LAST_NAME,
  CONTACT_CREATE_KEY_ORG,
  CONTACT_CREATE_KEY_PHONE,
  CONTACT_CREATE_KEY_POSTAL_CODE,
  CONTACT_CREATE_KEY_STATE,
  CONTACT_CREATE_KEY_STREET,
  CONTACT_CREATE_KEY_TITLE,
] as const;

export const CONTACT_KEY_CITY = 'city' as keyof Contact;
export const CONTACT_KEY_COUNTRY = 'country' as keyof Contact;
export const CONTACT_KEY_DISCLOSE = 'disclose' as keyof Contact;
export const CONTACT_KEY_EMAIL = 'email' as keyof Contact;
export const CONTACT_KEY_FAX = 'fax' as keyof Contact;
export const CONTACT_KEY_FIRST_NAME = 'first_name' as keyof Contact;
export const CONTACT_KEY_LAST_NAME = 'last_name' as keyof Contact;
export const CONTACT_KEY_ORG = 'org' as keyof Contact;
export const CONTACT_KEY_PHONE = 'phone' as keyof Contact;
export const CONTACT_KEY_POSTAL_CODE = 'postal_code' as keyof Contact;
export const CONTACT_KEY_STATE = 'state' as keyof Contact;
export const CONTACT_KEY_STREET = 'street' as keyof Contact;
export const CONTACT_KEY_TITLE = 'title' as keyof Contact;

export const CONTACT_KEYS = [
  CONTACT_KEY_CITY,
  CONTACT_KEY_COUNTRY,
  CONTACT_KEY_DISCLOSE,
  CONTACT_KEY_EMAIL,
  CONTACT_KEY_FAX,
  CONTACT_KEY_FIRST_NAME,
  CONTACT_KEY_LAST_NAME,
  CONTACT_KEY_ORG,
  CONTACT_KEY_PHONE,
  CONTACT_KEY_POSTAL_CODE,
  CONTACT_KEY_STATE,
  CONTACT_KEY_STREET,
  CONTACT_KEY_TITLE,
] as const;

export const CONTACT_SCHEMA_KEY_CITY = 'city' as keyof ContactSchema;
export const CONTACT_SCHEMA_KEY_CONTACT_ID = 'contact_id' as keyof ContactSchema;
export const CONTACT_SCHEMA_KEY_COUNTRY = 'country' as keyof ContactSchema;
export const CONTACT_SCHEMA_KEY_CREATED_ON = 'created_on' as keyof ContactSchema;
export const CONTACT_SCHEMA_KEY_DELETED_ON = 'deleted_on' as keyof ContactSchema;
export const CONTACT_SCHEMA_KEY_DISCLOSE = 'disclose' as keyof ContactSchema;
export const CONTACT_SCHEMA_KEY_EMAIL = 'email' as keyof ContactSchema;
export const CONTACT_SCHEMA_KEY_FAX = 'fax' as keyof ContactSchema;
export const CONTACT_SCHEMA_KEY_FIRST_NAME = 'first_name' as keyof ContactSchema;
export const CONTACT_SCHEMA_KEY_LAST_NAME = 'last_name' as keyof ContactSchema;
export const CONTACT_SCHEMA_KEY_ORG = 'org' as keyof ContactSchema;
export const CONTACT_SCHEMA_KEY_ORGANIZATION_ID = 'organization_id' as keyof ContactSchema;
export const CONTACT_SCHEMA_KEY_PHONE = 'phone' as keyof ContactSchema;
export const CONTACT_SCHEMA_KEY_POSTAL_CODE = 'postal_code' as keyof ContactSchema;
export const CONTACT_SCHEMA_KEY_STATE = 'state' as keyof ContactSchema;
export const CONTACT_SCHEMA_KEY_STREET = 'street' as keyof ContactSchema;
export const CONTACT_SCHEMA_KEY_TITLE = 'title' as keyof ContactSchema;

export const CONTACT_SCHEMA_KEYS = [
  CONTACT_SCHEMA_KEY_CITY,
  CONTACT_SCHEMA_KEY_CONTACT_ID,
  CONTACT_SCHEMA_KEY_COUNTRY,
  CONTACT_SCHEMA_KEY_CREATED_ON,
  CONTACT_SCHEMA_KEY_DELETED_ON,
  CONTACT_SCHEMA_KEY_DISCLOSE,
  CONTACT_SCHEMA_KEY_EMAIL,
  CONTACT_SCHEMA_KEY_FAX,
  CONTACT_SCHEMA_KEY_FIRST_NAME,
  CONTACT_SCHEMA_KEY_LAST_NAME,
  CONTACT_SCHEMA_KEY_ORG,
  CONTACT_SCHEMA_KEY_ORGANIZATION_ID,
  CONTACT_SCHEMA_KEY_PHONE,
  CONTACT_SCHEMA_KEY_POSTAL_CODE,
  CONTACT_SCHEMA_KEY_STATE,
  CONTACT_SCHEMA_KEY_STREET,
  CONTACT_SCHEMA_KEY_TITLE,
] as const;

export const CONTACT_VERIFICATION_API_KEY_CANCELED_ON = 'canceled_on' as keyof ContactVerificationApi;
export const CONTACT_VERIFICATION_API_KEY_CONTACT_ID = 'contact_id' as keyof ContactVerificationApi;
export const CONTACT_VERIFICATION_API_KEY_CONTACT_VERIFICATION_ID = 'contact_verification_id' as keyof ContactVerificationApi;
export const CONTACT_VERIFICATION_API_KEY_CREATED_ON = 'created_on' as keyof ContactVerificationApi;
export const CONTACT_VERIFICATION_API_KEY_STATUS = 'status' as keyof ContactVerificationApi;
export const CONTACT_VERIFICATION_API_KEY_TOKEN = 'token' as keyof ContactVerificationApi;
export const CONTACT_VERIFICATION_API_KEY_TYPE = 'type' as keyof ContactVerificationApi;
export const CONTACT_VERIFICATION_API_KEY_UPDATED_ON = 'updated_on' as keyof ContactVerificationApi;
export const CONTACT_VERIFICATION_API_KEY_VERIFIED_ON = 'verified_on' as keyof ContactVerificationApi;

export const CONTACT_VERIFICATION_API_KEYS = [
  CONTACT_VERIFICATION_API_KEY_CANCELED_ON,
  CONTACT_VERIFICATION_API_KEY_CONTACT_ID,
  CONTACT_VERIFICATION_API_KEY_CONTACT_VERIFICATION_ID,
  CONTACT_VERIFICATION_API_KEY_CREATED_ON,
  CONTACT_VERIFICATION_API_KEY_STATUS,
  CONTACT_VERIFICATION_API_KEY_TOKEN,
  CONTACT_VERIFICATION_API_KEY_TYPE,
  CONTACT_VERIFICATION_API_KEY_UPDATED_ON,
  CONTACT_VERIFICATION_API_KEY_VERIFIED_ON,
] as const;

export const CONTACT_VERIFICATION_EMAIL_KEY_CANCELED_ON = 'canceled_on' as keyof ContactVerificationEmail;
export const CONTACT_VERIFICATION_EMAIL_KEY_CONTACT_ID = 'contact_id' as keyof ContactVerificationEmail;
export const CONTACT_VERIFICATION_EMAIL_KEY_CONTACT_VERIFICATION_ID = 'contact_verification_id' as keyof ContactVerificationEmail;
export const CONTACT_VERIFICATION_EMAIL_KEY_CREATED_ON = 'created_on' as keyof ContactVerificationEmail;
export const CONTACT_VERIFICATION_EMAIL_KEY_STATUS = 'status' as keyof ContactVerificationEmail;
export const CONTACT_VERIFICATION_EMAIL_KEY_TYPE = 'type' as keyof ContactVerificationEmail;
export const CONTACT_VERIFICATION_EMAIL_KEY_UPDATED_ON = 'updated_on' as keyof ContactVerificationEmail;
export const CONTACT_VERIFICATION_EMAIL_KEY_VERIFIED_ON = 'verified_on' as keyof ContactVerificationEmail;

export const CONTACT_VERIFICATION_EMAIL_KEYS = [
  CONTACT_VERIFICATION_EMAIL_KEY_CANCELED_ON,
  CONTACT_VERIFICATION_EMAIL_KEY_CONTACT_ID,
  CONTACT_VERIFICATION_EMAIL_KEY_CONTACT_VERIFICATION_ID,
  CONTACT_VERIFICATION_EMAIL_KEY_CREATED_ON,
  CONTACT_VERIFICATION_EMAIL_KEY_STATUS,
  CONTACT_VERIFICATION_EMAIL_KEY_TYPE,
  CONTACT_VERIFICATION_EMAIL_KEY_UPDATED_ON,
  CONTACT_VERIFICATION_EMAIL_KEY_VERIFIED_ON,
] as const;

export const CONTACT_VERIFICATION_KEY_CANCELED_ON = 'canceled_on' as keyof ContactVerification;
export const CONTACT_VERIFICATION_KEY_CONTACT_ID = 'contact_id' as keyof ContactVerification;
export const CONTACT_VERIFICATION_KEY_CONTACT_VERIFICATION_ID = 'contact_verification_id' as keyof ContactVerification;
export const CONTACT_VERIFICATION_KEY_CREATED_ON = 'created_on' as keyof ContactVerification;
export const CONTACT_VERIFICATION_KEY_STATUS = 'status' as keyof ContactVerification;
export const CONTACT_VERIFICATION_KEY_TYPE = 'type' as keyof ContactVerification;
export const CONTACT_VERIFICATION_KEY_UPDATED_ON = 'updated_on' as keyof ContactVerification;
export const CONTACT_VERIFICATION_KEY_VERIFIED_ON = 'verified_on' as keyof ContactVerification;

export const CONTACT_VERIFICATION_KEYS = [
  CONTACT_VERIFICATION_KEY_CANCELED_ON,
  CONTACT_VERIFICATION_KEY_CONTACT_ID,
  CONTACT_VERIFICATION_KEY_CONTACT_VERIFICATION_ID,
  CONTACT_VERIFICATION_KEY_CREATED_ON,
  CONTACT_VERIFICATION_KEY_STATUS,
  CONTACT_VERIFICATION_KEY_TYPE,
  CONTACT_VERIFICATION_KEY_UPDATED_ON,
  CONTACT_VERIFICATION_KEY_VERIFIED_ON,
] as const;

export const DELETED_EVENT_KEY_DATE = 'date' as keyof DeletedEvent;

export const DELETED_EVENT_KEYS = [
  DELETED_EVENT_KEY_DATE,
] as const;

export const DNS_CHANGE_KEY_ACTION = 'action' as keyof DnsChange;
export const DNS_CHANGE_KEY_RECORD_DATA = 'record_data' as keyof DnsChange;
export const DNS_CHANGE_KEY_RRSET_NAME = 'rrset_name' as keyof DnsChange;
export const DNS_CHANGE_KEY_RRSET_TYPE = 'rrset_type' as keyof DnsChange;
export const DNS_CHANGE_KEY_TTL = 'ttl' as keyof DnsChange;

export const DNS_CHANGE_KEYS = [
  DNS_CHANGE_KEY_ACTION,
  DNS_CHANGE_KEY_RECORD_DATA,
  DNS_CHANGE_KEY_RRSET_NAME,
  DNS_CHANGE_KEY_RRSET_TYPE,
  DNS_CHANGE_KEY_TTL,
] as const;

export const DNS_CHANGES_KEY_CHANGES = 'changes' as keyof DnsChanges;
export const DNS_CHANGES_KEY_CHANGESET_ID = 'changeset_id' as keyof DnsChanges;
export const DNS_CHANGES_KEY_NUM_CHANGES = 'num_changes' as keyof DnsChanges;
export const DNS_CHANGES_KEY_ZONE_NAME = 'zone_name' as keyof DnsChanges;

export const DNS_CHANGES_KEYS = [
  DNS_CHANGES_KEY_CHANGES,
  DNS_CHANGES_KEY_CHANGESET_ID,
  DNS_CHANGES_KEY_NUM_CHANGES,
  DNS_CHANGES_KEY_ZONE_NAME,
] as const;

export const DNS_RECORD_CREATE_KEY_RDATA = 'rdata' as keyof DnsRecordCreate;

export const DNS_RECORD_CREATE_KEYS = [
  DNS_RECORD_CREATE_KEY_RDATA,
] as const;

export const DNS_RECORD_KEY_RDATA = 'rdata' as keyof DnsRecord;

export const DNS_RECORD_KEYS = [
  DNS_RECORD_KEY_RDATA,
] as const;

export const DNS_RRSET_CREATE_KEY_NAME = 'name' as keyof DnsRrsetCreate;
export const DNS_RRSET_CREATE_KEY_RECORDS = 'records' as keyof DnsRrsetCreate;
export const DNS_RRSET_CREATE_KEY_TTL = 'ttl' as keyof DnsRrsetCreate;
export const DNS_RRSET_CREATE_KEY_TYPE = 'type' as keyof DnsRrsetCreate;

export const DNS_RRSET_CREATE_KEYS = [
  DNS_RRSET_CREATE_KEY_NAME,
  DNS_RRSET_CREATE_KEY_RECORDS,
  DNS_RRSET_CREATE_KEY_TTL,
  DNS_RRSET_CREATE_KEY_TYPE,
] as const;

export const DNS_RRSET_KEY_NAME = 'name' as keyof DnsRrset;
export const DNS_RRSET_KEY_RECORDS = 'records' as keyof DnsRrset;
export const DNS_RRSET_KEY_TTL = 'ttl' as keyof DnsRrset;
export const DNS_RRSET_KEY_TYPE = 'type' as keyof DnsRrset;

export const DNS_RRSET_KEYS = [
  DNS_RRSET_KEY_NAME,
  DNS_RRSET_KEY_RECORDS,
  DNS_RRSET_KEY_TTL,
  DNS_RRSET_KEY_TYPE,
] as const;

export const DNS_ZONE_CREATE_KEY_DNSSEC_STATUS = 'dnssec_status' as keyof DnsZoneCreate;
export const DNS_ZONE_CREATE_KEY_NAME = 'name' as keyof DnsZoneCreate;
export const DNS_ZONE_CREATE_KEY_RRSETS = 'rrsets' as keyof DnsZoneCreate;

export const DNS_ZONE_CREATE_KEYS = [
  DNS_ZONE_CREATE_KEY_DNSSEC_STATUS,
  DNS_ZONE_CREATE_KEY_NAME,
  DNS_ZONE_CREATE_KEY_RRSETS,
] as const;

export const DNS_ZONE_KEY_DNSSEC_STATUS = 'dnssec_status' as keyof DnsZone;
export const DNS_ZONE_KEY_DOMAIN_PARTS = 'domain_parts' as keyof DnsZone;
export const DNS_ZONE_KEY_NAME = 'name' as keyof DnsZone;
export const DNS_ZONE_KEY_RRSETS = 'rrsets' as keyof DnsZone;

export const DNS_ZONE_KEYS = [
  DNS_ZONE_KEY_DNSSEC_STATUS,
  DNS_ZONE_KEY_DOMAIN_PARTS,
  DNS_ZONE_KEY_NAME,
  DNS_ZONE_KEY_RRSETS,
] as const;

export const DNS_ZONE_RRSETS_CREATE_KEY_RRSETS = 'rrsets' as keyof DnsZoneRrsetsCreate;

export const DNS_ZONE_RRSETS_CREATE_KEYS = [
  DNS_ZONE_RRSETS_CREATE_KEY_RRSETS,
] as const;

export const DOMAIN_AVAILABILITY_KEY_DOMAIN = 'domain' as keyof DomainAvailability;
export const DOMAIN_AVAILABILITY_KEY_STATUS = 'status' as keyof DomainAvailability;

export const DOMAIN_AVAILABILITY_KEYS = [
  DOMAIN_AVAILABILITY_KEY_DOMAIN,
  DOMAIN_AVAILABILITY_KEY_STATUS,
] as const;

export const DOMAIN_AVAILABILITY_META_KEY_PROCESSING_TIME_MS = 'processing_time_ms' as keyof DomainAvailabilityMeta;
export const DOMAIN_AVAILABILITY_META_KEY_TOTAL = 'total' as keyof DomainAvailabilityMeta;

export const DOMAIN_AVAILABILITY_META_KEYS = [
  DOMAIN_AVAILABILITY_META_KEY_PROCESSING_TIME_MS,
  DOMAIN_AVAILABILITY_META_KEY_TOTAL,
] as const;

export const DOMAIN_CHECK_KEY_RESULTS = 'results' as keyof DomainCheck;

export const DOMAIN_CHECK_KEYS = [
  DOMAIN_CHECK_KEY_RESULTS,
] as const;

export const DOMAIN_CONTACT_KEY_CONTACT_ID = 'contact_id' as keyof DomainContact;
export const DOMAIN_CONTACT_KEY_CONTACT_TYPE = 'contact_type' as keyof DomainContact;

export const DOMAIN_CONTACT_KEYS = [
  DOMAIN_CONTACT_KEY_CONTACT_ID,
  DOMAIN_CONTACT_KEY_CONTACT_TYPE,
] as const;

export const DOMAIN_CREATE_KEY_AUTH_CODE = 'auth_code' as keyof DomainCreate;
export const DOMAIN_CREATE_KEY_CONTACTS = 'contacts' as keyof DomainCreate;
export const DOMAIN_CREATE_KEY_NAME = 'name' as keyof DomainCreate;
export const DOMAIN_CREATE_KEY_NAMESERVERS = 'nameservers' as keyof DomainCreate;
export const DOMAIN_CREATE_KEY_PERIOD = 'period' as keyof DomainCreate;
export const DOMAIN_CREATE_KEY_RENEWAL_MODE = 'renewal_mode' as keyof DomainCreate;

export const DOMAIN_CREATE_KEYS = [
  DOMAIN_CREATE_KEY_AUTH_CODE,
  DOMAIN_CREATE_KEY_CONTACTS,
  DOMAIN_CREATE_KEY_NAME,
  DOMAIN_CREATE_KEY_NAMESERVERS,
  DOMAIN_CREATE_KEY_PERIOD,
  DOMAIN_CREATE_KEY_RENEWAL_MODE,
] as const;

export const DOMAIN_DNSSEC_DATA_CREATE_KEY_ALGORITHM = 'algorithm' as keyof DomainDnssecDataCreate;
export const DOMAIN_DNSSEC_DATA_CREATE_KEY_DIGEST = 'digest' as keyof DomainDnssecDataCreate;
export const DOMAIN_DNSSEC_DATA_CREATE_KEY_DIGEST_TYPE = 'digest_type' as keyof DomainDnssecDataCreate;
export const DOMAIN_DNSSEC_DATA_CREATE_KEY_FLAGS = 'flags' as keyof DomainDnssecDataCreate;
export const DOMAIN_DNSSEC_DATA_CREATE_KEY_KEY_TAG = 'key_tag' as keyof DomainDnssecDataCreate;
export const DOMAIN_DNSSEC_DATA_CREATE_KEY_PROTOCOL = 'protocol' as keyof DomainDnssecDataCreate;
export const DOMAIN_DNSSEC_DATA_CREATE_KEY_PUBLIC_KEY = 'public_key' as keyof DomainDnssecDataCreate;
export const DOMAIN_DNSSEC_DATA_CREATE_KEY_RECORD_TYPE = 'record_type' as keyof DomainDnssecDataCreate;

export const DOMAIN_DNSSEC_DATA_CREATE_KEYS = [
  DOMAIN_DNSSEC_DATA_CREATE_KEY_ALGORITHM,
  DOMAIN_DNSSEC_DATA_CREATE_KEY_DIGEST,
  DOMAIN_DNSSEC_DATA_CREATE_KEY_DIGEST_TYPE,
  DOMAIN_DNSSEC_DATA_CREATE_KEY_FLAGS,
  DOMAIN_DNSSEC_DATA_CREATE_KEY_KEY_TAG,
  DOMAIN_DNSSEC_DATA_CREATE_KEY_PROTOCOL,
  DOMAIN_DNSSEC_DATA_CREATE_KEY_PUBLIC_KEY,
  DOMAIN_DNSSEC_DATA_CREATE_KEY_RECORD_TYPE,
] as const;

export const DOMAIN_DNSSEC_DATA_KEY_ALGORITHM = 'algorithm' as keyof DomainDnssecData;
export const DOMAIN_DNSSEC_DATA_KEY_CREATED_ON = 'created_on' as keyof DomainDnssecData;
export const DOMAIN_DNSSEC_DATA_KEY_DIGEST = 'digest' as keyof DomainDnssecData;
export const DOMAIN_DNSSEC_DATA_KEY_DIGEST_TYPE = 'digest_type' as keyof DomainDnssecData;
export const DOMAIN_DNSSEC_DATA_KEY_DOMAIN_DNSSEC_DATA_ID = 'domain_dnssec_data_id' as keyof DomainDnssecData;
export const DOMAIN_DNSSEC_DATA_KEY_DOMAIN_ID = 'domain_id' as keyof DomainDnssecData;
export const DOMAIN_DNSSEC_DATA_KEY_FLAGS = 'flags' as keyof DomainDnssecData;
export const DOMAIN_DNSSEC_DATA_KEY_KEY_TAG = 'key_tag' as keyof DomainDnssecData;
export const DOMAIN_DNSSEC_DATA_KEY_PROTOCOL = 'protocol' as keyof DomainDnssecData;
export const DOMAIN_DNSSEC_DATA_KEY_PUBLIC_KEY = 'public_key' as keyof DomainDnssecData;
export const DOMAIN_DNSSEC_DATA_KEY_RECORD_TYPE = 'record_type' as keyof DomainDnssecData;
export const DOMAIN_DNSSEC_DATA_KEY_UPDATED_ON = 'updated_on' as keyof DomainDnssecData;

export const DOMAIN_DNSSEC_DATA_KEYS = [
  DOMAIN_DNSSEC_DATA_KEY_ALGORITHM,
  DOMAIN_DNSSEC_DATA_KEY_CREATED_ON,
  DOMAIN_DNSSEC_DATA_KEY_DIGEST,
  DOMAIN_DNSSEC_DATA_KEY_DIGEST_TYPE,
  DOMAIN_DNSSEC_DATA_KEY_DOMAIN_DNSSEC_DATA_ID,
  DOMAIN_DNSSEC_DATA_KEY_DOMAIN_ID,
  DOMAIN_DNSSEC_DATA_KEY_FLAGS,
  DOMAIN_DNSSEC_DATA_KEY_KEY_TAG,
  DOMAIN_DNSSEC_DATA_KEY_PROTOCOL,
  DOMAIN_DNSSEC_DATA_KEY_PUBLIC_KEY,
  DOMAIN_DNSSEC_DATA_KEY_RECORD_TYPE,
  DOMAIN_DNSSEC_DATA_KEY_UPDATED_ON,
] as const;

export const DOMAIN_NAME_PARTS_KEY_DOMAIN = 'domain' as keyof DomainNameParts;
export const DOMAIN_NAME_PARTS_KEY_SUBDOMAIN = 'subdomain' as keyof DomainNameParts;
export const DOMAIN_NAME_PARTS_KEY_SUFFIX = 'suffix' as keyof DomainNameParts;

export const DOMAIN_NAME_PARTS_KEYS = [
  DOMAIN_NAME_PARTS_KEY_DOMAIN,
  DOMAIN_NAME_PARTS_KEY_SUBDOMAIN,
  DOMAIN_NAME_PARTS_KEY_SUFFIX,
] as const;

export const DOMAIN_PERIOD_KEY_UNIT = 'unit' as keyof DomainPeriod;
export const DOMAIN_PERIOD_KEY_VALUE = 'value' as keyof DomainPeriod;

export const DOMAIN_PERIOD_KEYS = [
  DOMAIN_PERIOD_KEY_UNIT,
  DOMAIN_PERIOD_KEY_VALUE,
] as const;

export const DOMAIN_RENEW_REQUEST_KEY_CURRENT_EXPIRY_DATE = 'current_expiry_date' as keyof DomainRenewRequest;
export const DOMAIN_RENEW_REQUEST_KEY_PERIOD = 'period' as keyof DomainRenewRequest;

export const DOMAIN_RENEW_REQUEST_KEYS = [
  DOMAIN_RENEW_REQUEST_KEY_CURRENT_EXPIRY_DATE,
  DOMAIN_RENEW_REQUEST_KEY_PERIOD,
] as const;

export const DOMAIN_RENEW_KEY_NAME = 'name' as keyof DomainRenew;
export const DOMAIN_RENEW_KEY_NEW_EXPIRY_DATE = 'new_expiry_date' as keyof DomainRenew;
export const DOMAIN_RENEW_KEY_PERIOD_EXTENDED = 'period_extended' as keyof DomainRenew;

export const DOMAIN_RENEW_KEYS = [
  DOMAIN_RENEW_KEY_NAME,
  DOMAIN_RENEW_KEY_NEW_EXPIRY_DATE,
  DOMAIN_RENEW_KEY_PERIOD_EXTENDED,
] as const;

export const DOMAIN_KEY_AUTH_CODE = 'auth_code' as keyof Domain;
export const DOMAIN_KEY_AUTH_CODE_EXPIRES_ON = 'auth_code_expires_on' as keyof Domain;
export const DOMAIN_KEY_CANCELED_ON = 'canceled_on' as keyof Domain;
export const DOMAIN_KEY_CONTACTS = 'contacts' as keyof Domain;
export const DOMAIN_KEY_CREATED_ON = 'created_on' as keyof Domain;
export const DOMAIN_KEY_DELETED_ON = 'deleted_on' as keyof Domain;
export const DOMAIN_KEY_DOMAIN_ID = 'domain_id' as keyof Domain;
export const DOMAIN_KEY_EXPIRES_ON = 'expires_on' as keyof Domain;
export const DOMAIN_KEY_NAME = 'name' as keyof Domain;
export const DOMAIN_KEY_NAMESERVERS = 'nameservers' as keyof Domain;
export const DOMAIN_KEY_OWNER_ID = 'owner_id' as keyof Domain;
export const DOMAIN_KEY_REGISTERED_ON = 'registered_on' as keyof Domain;
export const DOMAIN_KEY_REGISTRY_ACCOUNT_ID = 'registry_account_id' as keyof Domain;
export const DOMAIN_KEY_REGISTRY_STATUSES = 'registry_statuses' as keyof Domain;
export const DOMAIN_KEY_RENEWAL_MODE = 'renewal_mode' as keyof Domain;
export const DOMAIN_KEY_ROID = 'roid' as keyof Domain;
export const DOMAIN_KEY_SLD = 'sld' as keyof Domain;
export const DOMAIN_KEY_TLD = 'tld' as keyof Domain;
export const DOMAIN_KEY_TRANSFER_LOCK = 'transfer_lock' as keyof Domain;
export const DOMAIN_KEY_UPDATED_ON = 'updated_on' as keyof Domain;

export const DOMAIN_KEYS = [
  DOMAIN_KEY_AUTH_CODE,
  DOMAIN_KEY_AUTH_CODE_EXPIRES_ON,
  DOMAIN_KEY_CANCELED_ON,
  DOMAIN_KEY_CONTACTS,
  DOMAIN_KEY_CREATED_ON,
  DOMAIN_KEY_DELETED_ON,
  DOMAIN_KEY_DOMAIN_ID,
  DOMAIN_KEY_EXPIRES_ON,
  DOMAIN_KEY_NAME,
  DOMAIN_KEY_NAMESERVERS,
  DOMAIN_KEY_OWNER_ID,
  DOMAIN_KEY_REGISTERED_ON,
  DOMAIN_KEY_REGISTRY_ACCOUNT_ID,
  DOMAIN_KEY_REGISTRY_STATUSES,
  DOMAIN_KEY_RENEWAL_MODE,
  DOMAIN_KEY_ROID,
  DOMAIN_KEY_SLD,
  DOMAIN_KEY_TLD,
  DOMAIN_KEY_TRANSFER_LOCK,
  DOMAIN_KEY_UPDATED_ON,
] as const;

export const DOMAIN_SEARCH_META_KEY_PROCESSING_TIME_MS = 'processing_time_ms' as keyof DomainSearchMeta;
export const DOMAIN_SEARCH_META_KEY_TOTAL = 'total' as keyof DomainSearchMeta;

export const DOMAIN_SEARCH_META_KEYS = [
  DOMAIN_SEARCH_META_KEY_PROCESSING_TIME_MS,
  DOMAIN_SEARCH_META_KEY_TOTAL,
] as const;

export const DOMAIN_SEARCH_KEY_META = 'meta' as keyof DomainSearch;
export const DOMAIN_SEARCH_KEY_RESULTS = 'results' as keyof DomainSearch;

export const DOMAIN_SEARCH_KEYS = [
  DOMAIN_SEARCH_KEY_META,
  DOMAIN_SEARCH_KEY_RESULTS,
] as const;

export const DOMAIN_SEARCH_SUGGESTION_KEY_AVAILABLE = 'available' as keyof DomainSearchSuggestion;
export const DOMAIN_SEARCH_SUGGESTION_KEY_DOMAIN = 'domain' as keyof DomainSearchSuggestion;
export const DOMAIN_SEARCH_SUGGESTION_KEY_PREMIUM = 'premium' as keyof DomainSearchSuggestion;

export const DOMAIN_SEARCH_SUGGESTION_KEYS = [
  DOMAIN_SEARCH_SUGGESTION_KEY_AVAILABLE,
  DOMAIN_SEARCH_SUGGESTION_KEY_DOMAIN,
  DOMAIN_SEARCH_SUGGESTION_KEY_PREMIUM,
] as const;

export const DOMAIN_TRANSFER_IN_KEY_AUTH_CODE = 'auth_code' as keyof DomainTransferIn;
export const DOMAIN_TRANSFER_IN_KEY_CONTACTS = 'contacts' as keyof DomainTransferIn;
export const DOMAIN_TRANSFER_IN_KEY_NAME = 'name' as keyof DomainTransferIn;
export const DOMAIN_TRANSFER_IN_KEY_RENEWAL_MODE = 'renewal_mode' as keyof DomainTransferIn;

export const DOMAIN_TRANSFER_IN_KEYS = [
  DOMAIN_TRANSFER_IN_KEY_AUTH_CODE,
  DOMAIN_TRANSFER_IN_KEY_CONTACTS,
  DOMAIN_TRANSFER_IN_KEY_NAME,
  DOMAIN_TRANSFER_IN_KEY_RENEWAL_MODE,
] as const;

export const DOMAIN_UPDATE_KEY_AUTH_CODE = 'auth_code' as keyof DomainUpdate;
export const DOMAIN_UPDATE_KEY_CONTACTS = 'contacts' as keyof DomainUpdate;
export const DOMAIN_UPDATE_KEY_NAMESERVERS = 'nameservers' as keyof DomainUpdate;
export const DOMAIN_UPDATE_KEY_RENEWAL_MODE = 'renewal_mode' as keyof DomainUpdate;
export const DOMAIN_UPDATE_KEY_STATUSES = 'statuses' as keyof DomainUpdate;

export const DOMAIN_UPDATE_KEYS = [
  DOMAIN_UPDATE_KEY_AUTH_CODE,
  DOMAIN_UPDATE_KEY_CONTACTS,
  DOMAIN_UPDATE_KEY_NAMESERVERS,
  DOMAIN_UPDATE_KEY_RENEWAL_MODE,
  DOMAIN_UPDATE_KEY_STATUSES,
] as const;

export const EMAIL_FORWARD_KEY_CREATED_ON = 'created_on' as keyof EmailForward;
export const EMAIL_FORWARD_KEY_EMAIL_FORWARD_ID = 'email_forward_id' as keyof EmailForward;
export const EMAIL_FORWARD_KEY_SOURCE_ADDRESS = 'source_address' as keyof EmailForward;
export const EMAIL_FORWARD_KEY_STATUS = 'status' as keyof EmailForward;
export const EMAIL_FORWARD_KEY_TARGET_ADDRESS = 'target_address' as keyof EmailForward;
export const EMAIL_FORWARD_KEY_UPDATED_ON = 'updated_on' as keyof EmailForward;

export const EMAIL_FORWARD_KEYS = [
  EMAIL_FORWARD_KEY_CREATED_ON,
  EMAIL_FORWARD_KEY_EMAIL_FORWARD_ID,
  EMAIL_FORWARD_KEY_SOURCE_ADDRESS,
  EMAIL_FORWARD_KEY_STATUS,
  EMAIL_FORWARD_KEY_TARGET_ADDRESS,
  EMAIL_FORWARD_KEY_UPDATED_ON,
] as const;

export const EMAIL_FORWARD_BULK_DELETE_KEY_EMAIL_FORWARD_IDS = 'email_forward_ids' as keyof EmailForwardBulkDelete;

export const EMAIL_FORWARD_BULK_DELETE_KEYS = [
  EMAIL_FORWARD_BULK_DELETE_KEY_EMAIL_FORWARD_IDS,
] as const;

export const EMAIL_FORWARD_BULK_UPDATE_KEY_EMAIL_FORWARDS = 'email_forwards' as keyof EmailForwardBulkUpdate;

export const EMAIL_FORWARD_BULK_UPDATE_KEYS = [
  EMAIL_FORWARD_BULK_UPDATE_KEY_EMAIL_FORWARDS,
] as const;

export const EMAIL_FORWARD_BULK_UPDATE_ITEM_KEY_EMAIL_FORWARD_ID = 'email_forward_id' as keyof EmailForwardBulkUpdateItem;
export const EMAIL_FORWARD_BULK_UPDATE_ITEM_KEY_SOURCE_ADDRESS = 'source_address' as keyof EmailForwardBulkUpdateItem;
export const EMAIL_FORWARD_BULK_UPDATE_ITEM_KEY_STATUS = 'status' as keyof EmailForwardBulkUpdateItem;
export const EMAIL_FORWARD_BULK_UPDATE_ITEM_KEY_TARGET_ADDRESS = 'target_address' as keyof EmailForwardBulkUpdateItem;

export const EMAIL_FORWARD_BULK_UPDATE_ITEM_KEYS = [
  EMAIL_FORWARD_BULK_UPDATE_ITEM_KEY_EMAIL_FORWARD_ID,
  EMAIL_FORWARD_BULK_UPDATE_ITEM_KEY_SOURCE_ADDRESS,
  EMAIL_FORWARD_BULK_UPDATE_ITEM_KEY_STATUS,
  EMAIL_FORWARD_BULK_UPDATE_ITEM_KEY_TARGET_ADDRESS,
] as const;

export const EMAIL_FORWARD_CREATE_KEY_SOURCE_ADDRESS = 'source_address' as keyof EmailForwardCreate;
export const EMAIL_FORWARD_CREATE_KEY_STATUS = 'status' as keyof EmailForwardCreate;
export const EMAIL_FORWARD_CREATE_KEY_TARGET_ADDRESS = 'target_address' as keyof EmailForwardCreate;

export const EMAIL_FORWARD_CREATE_KEYS = [
  EMAIL_FORWARD_CREATE_KEY_SOURCE_ADDRESS,
  EMAIL_FORWARD_CREATE_KEY_STATUS,
  EMAIL_FORWARD_CREATE_KEY_TARGET_ADDRESS,
] as const;

export const EMAIL_FORWARD_UPDATE_KEY_SOURCE_ADDRESS = 'source_address' as keyof EmailForwardUpdate;
export const EMAIL_FORWARD_UPDATE_KEY_STATUS = 'status' as keyof EmailForwardUpdate;
export const EMAIL_FORWARD_UPDATE_KEY_TARGET_ADDRESS = 'target_address' as keyof EmailForwardUpdate;

export const EMAIL_FORWARD_UPDATE_KEYS = [
  EMAIL_FORWARD_UPDATE_KEY_SOURCE_ADDRESS,
  EMAIL_FORWARD_UPDATE_KEY_STATUS,
  EMAIL_FORWARD_UPDATE_KEY_TARGET_ADDRESS,
] as const;

export const EVENT_KEY_EVENT_DATA = 'event_data' as keyof EventResponse;
export const EVENT_KEY_EVENT_ID = 'event_id' as keyof EventResponse;
export const EVENT_KEY_OBJECT_ID = 'object_id' as keyof EventResponse;
export const EVENT_KEY_OBJECT_TYPE = 'object_type' as keyof EventResponse;
export const EVENT_KEY_SUBTYPE = 'subtype' as keyof EventResponse;
export const EVENT_KEY_TYPE = 'type' as keyof EventResponse;

export const EVENT_KEYS = [
  EVENT_KEY_EVENT_DATA,
  EVENT_KEY_EVENT_ID,
  EVENT_KEY_OBJECT_ID,
  EVENT_KEY_OBJECT_TYPE,
  EVENT_KEY_SUBTYPE,
  EVENT_KEY_TYPE,
] as const;

export const EVENT_SCHEMA_KEY_ACKNOWLEDGED_ON = 'acknowledged_on' as keyof EventSchema;
export const EVENT_SCHEMA_KEY_CREATED_ON = 'created_on' as keyof EventSchema;
export const EVENT_SCHEMA_KEY_EVENT_DATA = 'event_data' as keyof EventSchema;
export const EVENT_SCHEMA_KEY_EVENT_ID = 'event_id' as keyof EventSchema;
export const EVENT_SCHEMA_KEY_MESSAGE_QUEUE_ID = 'message_queue_id' as keyof EventSchema;
export const EVENT_SCHEMA_KEY_OBJECT_ID = 'object_id' as keyof EventSchema;
export const EVENT_SCHEMA_KEY_OBJECT_TYPE = 'object_type' as keyof EventSchema;
export const EVENT_SCHEMA_KEY_SOURCE = 'source' as keyof EventSchema;
export const EVENT_SCHEMA_KEY_SOURCE_EVENT_ID = 'source_event_id' as keyof EventSchema;
export const EVENT_SCHEMA_KEY_SUBTYPE = 'subtype' as keyof EventSchema;
export const EVENT_SCHEMA_KEY_TARGET = 'target' as keyof EventSchema;
export const EVENT_SCHEMA_KEY_TYPE = 'type' as keyof EventSchema;

export const EVENT_SCHEMA_KEYS = [
  EVENT_SCHEMA_KEY_ACKNOWLEDGED_ON,
  EVENT_SCHEMA_KEY_CREATED_ON,
  EVENT_SCHEMA_KEY_EVENT_DATA,
  EVENT_SCHEMA_KEY_EVENT_ID,
  EVENT_SCHEMA_KEY_MESSAGE_QUEUE_ID,
  EVENT_SCHEMA_KEY_OBJECT_ID,
  EVENT_SCHEMA_KEY_OBJECT_TYPE,
  EVENT_SCHEMA_KEY_SOURCE,
  EVENT_SCHEMA_KEY_SOURCE_EVENT_ID,
  EVENT_SCHEMA_KEY_SUBTYPE,
  EVENT_SCHEMA_KEY_TARGET,
  EVENT_SCHEMA_KEY_TYPE,
] as const;

export const H_T_T_P_VALIDATION_ERROR_KEY_ERRORS = 'errors' as keyof HTTPValidationError;
export const H_T_T_P_VALIDATION_ERROR_KEY_STATUS = 'status' as keyof HTTPValidationError;
export const H_T_T_P_VALIDATION_ERROR_KEY_TITLE = 'title' as keyof HTTPValidationError;
export const H_T_T_P_VALIDATION_ERROR_KEY_TYPE = 'type' as keyof HTTPValidationError;

export const H_T_T_P_VALIDATION_ERROR_KEYS = [
  H_T_T_P_VALIDATION_ERROR_KEY_ERRORS,
  H_T_T_P_VALIDATION_ERROR_KEY_STATUS,
  H_T_T_P_VALIDATION_ERROR_KEY_TITLE,
  H_T_T_P_VALIDATION_ERROR_KEY_TYPE,
] as const;

export const IP_RESTRICTION_CREATE_KEY_IP_NETWORK = 'ip_network' as keyof IpRestrictionCreate;
export const IP_RESTRICTION_CREATE_KEY_ORGANIZATION_ID = 'organization_id' as keyof IpRestrictionCreate;

export const IP_RESTRICTION_CREATE_KEYS = [
  IP_RESTRICTION_CREATE_KEY_IP_NETWORK,
  IP_RESTRICTION_CREATE_KEY_ORGANIZATION_ID,
] as const;

export const IP_RESTRICTION_KEY_CREATED_ON = 'created_on' as keyof IpRestriction;
export const IP_RESTRICTION_KEY_IP_NETWORK = 'ip_network' as keyof IpRestriction;
export const IP_RESTRICTION_KEY_IP_RESTRICTION_ID = 'ip_restriction_id' as keyof IpRestriction;
export const IP_RESTRICTION_KEY_LAST_USED_ON = 'last_used_on' as keyof IpRestriction;
export const IP_RESTRICTION_KEY_ORGANIZATION_ID = 'organization_id' as keyof IpRestriction;

export const IP_RESTRICTION_KEYS = [
  IP_RESTRICTION_KEY_CREATED_ON,
  IP_RESTRICTION_KEY_IP_NETWORK,
  IP_RESTRICTION_KEY_IP_RESTRICTION_ID,
  IP_RESTRICTION_KEY_LAST_USED_ON,
  IP_RESTRICTION_KEY_ORGANIZATION_ID,
] as const;

export const IP_RESTRICTION_UPDATE_KEY_IP_NETWORK = 'ip_network' as keyof IpRestrictionUpdate;
export const IP_RESTRICTION_UPDATE_KEY_LAST_USED_ON = 'last_used_on' as keyof IpRestrictionUpdate;

export const IP_RESTRICTION_UPDATE_KEYS = [
  IP_RESTRICTION_UPDATE_KEY_IP_NETWORK,
  IP_RESTRICTION_UPDATE_KEY_LAST_USED_ON,
] as const;

export const NAMESERVER_KEY_HOSTNAME = 'hostname' as keyof Nameserver;
export const NAMESERVER_KEY_IP_ADDRESSES = 'ip_addresses' as keyof Nameserver;

export const NAMESERVER_KEYS = [
  NAMESERVER_KEY_HOSTNAME,
  NAMESERVER_KEY_IP_ADDRESSES,
] as const;

export const NOTIFICATION_KEY_AUTHOR = 'author' as keyof Notification;
export const NOTIFICATION_KEY_CREATED_ON = 'created_on' as keyof Notification;
export const NOTIFICATION_KEY_MESSAGE = 'message' as keyof Notification;
export const NOTIFICATION_KEY_NOTIFICATION_ID = 'notification_id' as keyof Notification;
export const NOTIFICATION_KEY_PUBLISH_DATE = 'publish_date' as keyof Notification;
export const NOTIFICATION_KEY_SOURCE = 'source' as keyof Notification;
export const NOTIFICATION_KEY_SUBJECT = 'subject' as keyof Notification;
export const NOTIFICATION_KEY_TARGET = 'target' as keyof Notification;
export const NOTIFICATION_KEY_TYPE = 'type' as keyof Notification;
export const NOTIFICATION_KEY_UPDATED_ON = 'updated_on' as keyof Notification;

export const NOTIFICATION_KEYS = [
  NOTIFICATION_KEY_AUTHOR,
  NOTIFICATION_KEY_CREATED_ON,
  NOTIFICATION_KEY_MESSAGE,
  NOTIFICATION_KEY_NOTIFICATION_ID,
  NOTIFICATION_KEY_PUBLISH_DATE,
  NOTIFICATION_KEY_SOURCE,
  NOTIFICATION_KEY_SUBJECT,
  NOTIFICATION_KEY_TARGET,
  NOTIFICATION_KEY_TYPE,
  NOTIFICATION_KEY_UPDATED_ON,
] as const;

export const NOTIFICATION_CREATE_KEY_AUTHOR = 'author' as keyof NotificationCreate;
export const NOTIFICATION_CREATE_KEY_MESSAGE = 'message' as keyof NotificationCreate;
export const NOTIFICATION_CREATE_KEY_PUBLISH_DATE = 'publish_date' as keyof NotificationCreate;
export const NOTIFICATION_CREATE_KEY_SOURCE = 'source' as keyof NotificationCreate;
export const NOTIFICATION_CREATE_KEY_SUBJECT = 'subject' as keyof NotificationCreate;
export const NOTIFICATION_CREATE_KEY_TARGET = 'target' as keyof NotificationCreate;
export const NOTIFICATION_CREATE_KEY_TYPE = 'type' as keyof NotificationCreate;

export const NOTIFICATION_CREATE_KEYS = [
  NOTIFICATION_CREATE_KEY_AUTHOR,
  NOTIFICATION_CREATE_KEY_MESSAGE,
  NOTIFICATION_CREATE_KEY_PUBLISH_DATE,
  NOTIFICATION_CREATE_KEY_SOURCE,
  NOTIFICATION_CREATE_KEY_SUBJECT,
  NOTIFICATION_CREATE_KEY_TARGET,
  NOTIFICATION_CREATE_KEY_TYPE,
] as const;

export const NOTIFICATION_SUMMARY_KEY_AUTHOR = 'author' as keyof NotificationSummary;
export const NOTIFICATION_SUMMARY_KEY_MESSAGE = 'message' as keyof NotificationSummary;
export const NOTIFICATION_SUMMARY_KEY_NOTIFICATION_ID = 'notification_id' as keyof NotificationSummary;
export const NOTIFICATION_SUMMARY_KEY_PUBLISH_DATE = 'publish_date' as keyof NotificationSummary;
export const NOTIFICATION_SUMMARY_KEY_SOURCE = 'source' as keyof NotificationSummary;
export const NOTIFICATION_SUMMARY_KEY_SUBJECT = 'subject' as keyof NotificationSummary;
export const NOTIFICATION_SUMMARY_KEY_TARGET = 'target' as keyof NotificationSummary;
export const NOTIFICATION_SUMMARY_KEY_TYPE = 'type' as keyof NotificationSummary;

export const NOTIFICATION_SUMMARY_KEYS = [
  NOTIFICATION_SUMMARY_KEY_AUTHOR,
  NOTIFICATION_SUMMARY_KEY_MESSAGE,
  NOTIFICATION_SUMMARY_KEY_NOTIFICATION_ID,
  NOTIFICATION_SUMMARY_KEY_PUBLISH_DATE,
  NOTIFICATION_SUMMARY_KEY_SOURCE,
  NOTIFICATION_SUMMARY_KEY_SUBJECT,
  NOTIFICATION_SUMMARY_KEY_TARGET,
  NOTIFICATION_SUMMARY_KEY_TYPE,
] as const;

export const NOTIFICATION_UPDATE_KEY_AUTHOR = 'author' as keyof NotificationUpdate;
export const NOTIFICATION_UPDATE_KEY_MESSAGE = 'message' as keyof NotificationUpdate;
export const NOTIFICATION_UPDATE_KEY_PUBLISH_DATE = 'publish_date' as keyof NotificationUpdate;
export const NOTIFICATION_UPDATE_KEY_SOURCE = 'source' as keyof NotificationUpdate;
export const NOTIFICATION_UPDATE_KEY_SUBJECT = 'subject' as keyof NotificationUpdate;
export const NOTIFICATION_UPDATE_KEY_TARGET = 'target' as keyof NotificationUpdate;
export const NOTIFICATION_UPDATE_KEY_TYPE = 'type' as keyof NotificationUpdate;

export const NOTIFICATION_UPDATE_KEYS = [
  NOTIFICATION_UPDATE_KEY_AUTHOR,
  NOTIFICATION_UPDATE_KEY_MESSAGE,
  NOTIFICATION_UPDATE_KEY_PUBLISH_DATE,
  NOTIFICATION_UPDATE_KEY_SOURCE,
  NOTIFICATION_UPDATE_KEY_SUBJECT,
  NOTIFICATION_UPDATE_KEY_TARGET,
  NOTIFICATION_UPDATE_KEY_TYPE,
] as const;

export const ORGANIZATION_KEY_ADDRESS_1 = 'address_1' as keyof Organization;
export const ORGANIZATION_KEY_ADDRESS_2 = 'address_2' as keyof Organization;
export const ORGANIZATION_KEY_ATTRIBUTES = 'attributes' as keyof Organization;
export const ORGANIZATION_KEY_BUSINESS_NUMBER = 'business_number' as keyof Organization;
export const ORGANIZATION_KEY_CITY = 'city' as keyof Organization;
export const ORGANIZATION_KEY_COUNTRY_CODE = 'country_code' as keyof Organization;
export const ORGANIZATION_KEY_CREATED_ON = 'created_on' as keyof Organization;
export const ORGANIZATION_KEY_CURRENCY = 'currency' as keyof Organization;
export const ORGANIZATION_KEY_DEFAULT_LOCALE = 'default_locale' as keyof Organization;
export const ORGANIZATION_KEY_DELETED_ON = 'deleted_on' as keyof Organization;
export const ORGANIZATION_KEY_NAME = 'name' as keyof Organization;
export const ORGANIZATION_KEY_ORGANIZATION_ID = 'organization_id' as keyof Organization;
export const ORGANIZATION_KEY_PARENT_ORGANIZATION_ID = 'parent_organization_id' as keyof Organization;
export const ORGANIZATION_KEY_POSTAL_CODE = 'postal_code' as keyof Organization;
export const ORGANIZATION_KEY_STATE = 'state' as keyof Organization;
export const ORGANIZATION_KEY_STATUS = 'status' as keyof Organization;
export const ORGANIZATION_KEY_TAX_ID = 'tax_id' as keyof Organization;
export const ORGANIZATION_KEY_TAX_ID_TYPE = 'tax_id_type' as keyof Organization;
export const ORGANIZATION_KEY_TAX_RATE = 'tax_rate' as keyof Organization;
export const ORGANIZATION_KEY_USERS = 'users' as keyof Organization;

export const ORGANIZATION_KEYS = [
  ORGANIZATION_KEY_ADDRESS_1,
  ORGANIZATION_KEY_ADDRESS_2,
  ORGANIZATION_KEY_ATTRIBUTES,
  ORGANIZATION_KEY_BUSINESS_NUMBER,
  ORGANIZATION_KEY_CITY,
  ORGANIZATION_KEY_COUNTRY_CODE,
  ORGANIZATION_KEY_CREATED_ON,
  ORGANIZATION_KEY_CURRENCY,
  ORGANIZATION_KEY_DEFAULT_LOCALE,
  ORGANIZATION_KEY_DELETED_ON,
  ORGANIZATION_KEY_NAME,
  ORGANIZATION_KEY_ORGANIZATION_ID,
  ORGANIZATION_KEY_PARENT_ORGANIZATION_ID,
  ORGANIZATION_KEY_POSTAL_CODE,
  ORGANIZATION_KEY_STATE,
  ORGANIZATION_KEY_STATUS,
  ORGANIZATION_KEY_TAX_ID,
  ORGANIZATION_KEY_TAX_ID_TYPE,
  ORGANIZATION_KEY_TAX_RATE,
  ORGANIZATION_KEY_USERS,
] as const;

export const ORGANIZATION_ATTRIBUTE_KEY_CREATED_ON = 'created_on' as keyof OrganizationAttribute;
export const ORGANIZATION_ATTRIBUTE_KEY_KEY = 'key' as keyof OrganizationAttribute;
export const ORGANIZATION_ATTRIBUTE_KEY_ORGANIZATION_ATTRIBUTE_ID = 'organization_attribute_id' as keyof OrganizationAttribute;
export const ORGANIZATION_ATTRIBUTE_KEY_PRIVATE = 'private' as keyof OrganizationAttribute;
export const ORGANIZATION_ATTRIBUTE_KEY_PROTECTED = 'protected' as keyof OrganizationAttribute;
export const ORGANIZATION_ATTRIBUTE_KEY_UPDATED_ON = 'updated_on' as keyof OrganizationAttribute;
export const ORGANIZATION_ATTRIBUTE_KEY_VALUE = 'value' as keyof OrganizationAttribute;

export const ORGANIZATION_ATTRIBUTE_KEYS = [
  ORGANIZATION_ATTRIBUTE_KEY_CREATED_ON,
  ORGANIZATION_ATTRIBUTE_KEY_KEY,
  ORGANIZATION_ATTRIBUTE_KEY_ORGANIZATION_ATTRIBUTE_ID,
  ORGANIZATION_ATTRIBUTE_KEY_PRIVATE,
  ORGANIZATION_ATTRIBUTE_KEY_PROTECTED,
  ORGANIZATION_ATTRIBUTE_KEY_UPDATED_ON,
  ORGANIZATION_ATTRIBUTE_KEY_VALUE,
] as const;

export const ORGANIZATION_ATTRIBUTE_CREATE_KEY_KEY = 'key' as keyof OrganizationAttributeCreate;
export const ORGANIZATION_ATTRIBUTE_CREATE_KEY_PRIVATE = 'private' as keyof OrganizationAttributeCreate;
export const ORGANIZATION_ATTRIBUTE_CREATE_KEY_PROTECTED = 'protected' as keyof OrganizationAttributeCreate;
export const ORGANIZATION_ATTRIBUTE_CREATE_KEY_VALUE = 'value' as keyof OrganizationAttributeCreate;

export const ORGANIZATION_ATTRIBUTE_CREATE_KEYS = [
  ORGANIZATION_ATTRIBUTE_CREATE_KEY_KEY,
  ORGANIZATION_ATTRIBUTE_CREATE_KEY_PRIVATE,
  ORGANIZATION_ATTRIBUTE_CREATE_KEY_PROTECTED,
  ORGANIZATION_ATTRIBUTE_CREATE_KEY_VALUE,
] as const;

export const ORGANIZATION_ATTRIBUTE2_KEY_CREATED_ON = 'created_on' as keyof OrganizationAttribute2;
export const ORGANIZATION_ATTRIBUTE2_KEY_KEY = 'key' as keyof OrganizationAttribute2;
export const ORGANIZATION_ATTRIBUTE2_KEY_ORGANIZATION_ATTRIBUTE_ID = 'organization_attribute_id' as keyof OrganizationAttribute2;
export const ORGANIZATION_ATTRIBUTE2_KEY_PROTECTED = 'protected' as keyof OrganizationAttribute2;
export const ORGANIZATION_ATTRIBUTE2_KEY_UPDATED_ON = 'updated_on' as keyof OrganizationAttribute2;
export const ORGANIZATION_ATTRIBUTE2_KEY_VALUE = 'value' as keyof OrganizationAttribute2;

export const ORGANIZATION_ATTRIBUTE2_KEYS = [
  ORGANIZATION_ATTRIBUTE2_KEY_CREATED_ON,
  ORGANIZATION_ATTRIBUTE2_KEY_KEY,
  ORGANIZATION_ATTRIBUTE2_KEY_ORGANIZATION_ATTRIBUTE_ID,
  ORGANIZATION_ATTRIBUTE2_KEY_PROTECTED,
  ORGANIZATION_ATTRIBUTE2_KEY_UPDATED_ON,
  ORGANIZATION_ATTRIBUTE2_KEY_VALUE,
] as const;

export const ORGANIZATION_ATTRIBUTE_UPDATE_KEY_KEY = 'key' as keyof OrganizationAttributeUpdate;
export const ORGANIZATION_ATTRIBUTE_UPDATE_KEY_PRIVATE = 'private' as keyof OrganizationAttributeUpdate;
export const ORGANIZATION_ATTRIBUTE_UPDATE_KEY_PROTECTED = 'protected' as keyof OrganizationAttributeUpdate;
export const ORGANIZATION_ATTRIBUTE_UPDATE_KEY_VALUE = 'value' as keyof OrganizationAttributeUpdate;

export const ORGANIZATION_ATTRIBUTE_UPDATE_KEYS = [
  ORGANIZATION_ATTRIBUTE_UPDATE_KEY_KEY,
  ORGANIZATION_ATTRIBUTE_UPDATE_KEY_PRIVATE,
  ORGANIZATION_ATTRIBUTE_UPDATE_KEY_PROTECTED,
  ORGANIZATION_ATTRIBUTE_UPDATE_KEY_VALUE,
] as const;

export const ORGANIZATION_CREATE_KEY_ADDRESS_1 = 'address_1' as keyof OrganizationCreate;
export const ORGANIZATION_CREATE_KEY_ADDRESS_2 = 'address_2' as keyof OrganizationCreate;
export const ORGANIZATION_CREATE_KEY_ATTRIBUTES = 'attributes' as keyof OrganizationCreate;
export const ORGANIZATION_CREATE_KEY_BUSINESS_NUMBER = 'business_number' as keyof OrganizationCreate;
export const ORGANIZATION_CREATE_KEY_CITY = 'city' as keyof OrganizationCreate;
export const ORGANIZATION_CREATE_KEY_COUNTRY_CODE = 'country_code' as keyof OrganizationCreate;
export const ORGANIZATION_CREATE_KEY_CURRENCY = 'currency' as keyof OrganizationCreate;
export const ORGANIZATION_CREATE_KEY_DEFAULT_LOCALE = 'default_locale' as keyof OrganizationCreate;
export const ORGANIZATION_CREATE_KEY_NAME = 'name' as keyof OrganizationCreate;
export const ORGANIZATION_CREATE_KEY_PARENT_ORGANIZATION_ID = 'parent_organization_id' as keyof OrganizationCreate;
export const ORGANIZATION_CREATE_KEY_POSTAL_CODE = 'postal_code' as keyof OrganizationCreate;
export const ORGANIZATION_CREATE_KEY_STATE = 'state' as keyof OrganizationCreate;
export const ORGANIZATION_CREATE_KEY_TAX_ID = 'tax_id' as keyof OrganizationCreate;
export const ORGANIZATION_CREATE_KEY_TAX_ID_TYPE = 'tax_id_type' as keyof OrganizationCreate;
export const ORGANIZATION_CREATE_KEY_TAX_RATE = 'tax_rate' as keyof OrganizationCreate;
export const ORGANIZATION_CREATE_KEY_USERS = 'users' as keyof OrganizationCreate;

export const ORGANIZATION_CREATE_KEYS = [
  ORGANIZATION_CREATE_KEY_ADDRESS_1,
  ORGANIZATION_CREATE_KEY_ADDRESS_2,
  ORGANIZATION_CREATE_KEY_ATTRIBUTES,
  ORGANIZATION_CREATE_KEY_BUSINESS_NUMBER,
  ORGANIZATION_CREATE_KEY_CITY,
  ORGANIZATION_CREATE_KEY_COUNTRY_CODE,
  ORGANIZATION_CREATE_KEY_CURRENCY,
  ORGANIZATION_CREATE_KEY_DEFAULT_LOCALE,
  ORGANIZATION_CREATE_KEY_NAME,
  ORGANIZATION_CREATE_KEY_PARENT_ORGANIZATION_ID,
  ORGANIZATION_CREATE_KEY_POSTAL_CODE,
  ORGANIZATION_CREATE_KEY_STATE,
  ORGANIZATION_CREATE_KEY_TAX_ID,
  ORGANIZATION_CREATE_KEY_TAX_ID_TYPE,
  ORGANIZATION_CREATE_KEY_TAX_RATE,
  ORGANIZATION_CREATE_KEY_USERS,
] as const;

export const ORGANIZATION_CREDENTIAL_KEY_API_KEY_DESCRIPTION = 'api_key_description' as keyof OrganizationCredential;
export const ORGANIZATION_CREDENTIAL_KEY_API_KEY_ID = 'api_key_id' as keyof OrganizationCredential;
export const ORGANIZATION_CREDENTIAL_KEY_API_KEY_NAME = 'api_key_name' as keyof OrganizationCredential;
export const ORGANIZATION_CREDENTIAL_KEY_CREATED_ON = 'created_on' as keyof OrganizationCredential;
export const ORGANIZATION_CREDENTIAL_KEY_DELETED_ON = 'deleted_on' as keyof OrganizationCredential;
export const ORGANIZATION_CREDENTIAL_KEY_LAST_USED_ON = 'last_used_on' as keyof OrganizationCredential;
export const ORGANIZATION_CREDENTIAL_KEY_ORGANIZATION_ID = 'organization_id' as keyof OrganizationCredential;
export const ORGANIZATION_CREDENTIAL_KEY_STATUS = 'status' as keyof OrganizationCredential;

export const ORGANIZATION_CREDENTIAL_KEYS = [
  ORGANIZATION_CREDENTIAL_KEY_API_KEY_DESCRIPTION,
  ORGANIZATION_CREDENTIAL_KEY_API_KEY_ID,
  ORGANIZATION_CREDENTIAL_KEY_API_KEY_NAME,
  ORGANIZATION_CREDENTIAL_KEY_CREATED_ON,
  ORGANIZATION_CREDENTIAL_KEY_DELETED_ON,
  ORGANIZATION_CREDENTIAL_KEY_LAST_USED_ON,
  ORGANIZATION_CREDENTIAL_KEY_ORGANIZATION_ID,
  ORGANIZATION_CREDENTIAL_KEY_STATUS,
] as const;

export const ORGANIZATION_CREDENTIAL_CREATED_KEY_API_KEY = 'api_key' as keyof OrganizationCredentialCreated;
export const ORGANIZATION_CREDENTIAL_CREATED_KEY_API_KEY_DESCRIPTION = 'api_key_description' as keyof OrganizationCredentialCreated;
export const ORGANIZATION_CREDENTIAL_CREATED_KEY_API_KEY_NAME = 'api_key_name' as keyof OrganizationCredentialCreated;
export const ORGANIZATION_CREDENTIAL_CREATED_KEY_CLIENT_ID = 'client_id' as keyof OrganizationCredentialCreated;
export const ORGANIZATION_CREDENTIAL_CREATED_KEY_CLIENT_SECRET = 'client_secret' as keyof OrganizationCredentialCreated;
export const ORGANIZATION_CREDENTIAL_CREATED_KEY_CREATED_ON = 'created_on' as keyof OrganizationCredentialCreated;
export const ORGANIZATION_CREDENTIAL_CREATED_KEY_DELETED_ON = 'deleted_on' as keyof OrganizationCredentialCreated;
export const ORGANIZATION_CREDENTIAL_CREATED_KEY_LAST_USED_ON = 'last_used_on' as keyof OrganizationCredentialCreated;
export const ORGANIZATION_CREDENTIAL_CREATED_KEY_STATUS = 'status' as keyof OrganizationCredentialCreated;

export const ORGANIZATION_CREDENTIAL_CREATED_KEYS = [
  ORGANIZATION_CREDENTIAL_CREATED_KEY_API_KEY,
  ORGANIZATION_CREDENTIAL_CREATED_KEY_API_KEY_DESCRIPTION,
  ORGANIZATION_CREDENTIAL_CREATED_KEY_API_KEY_NAME,
  ORGANIZATION_CREDENTIAL_CREATED_KEY_CLIENT_ID,
  ORGANIZATION_CREDENTIAL_CREATED_KEY_CLIENT_SECRET,
  ORGANIZATION_CREDENTIAL_CREATED_KEY_CREATED_ON,
  ORGANIZATION_CREDENTIAL_CREATED_KEY_DELETED_ON,
  ORGANIZATION_CREDENTIAL_CREATED_KEY_LAST_USED_ON,
  ORGANIZATION_CREDENTIAL_CREATED_KEY_STATUS,
] as const;

export const ORGANIZATION_CREDENTIAL_EXTRA_KEY_API_KEY_DESCRIPTION = 'api_key_description' as keyof OrganizationCredentialExtra;
export const ORGANIZATION_CREDENTIAL_EXTRA_KEY_API_KEY_NAME = 'api_key_name' as keyof OrganizationCredentialExtra;
export const ORGANIZATION_CREDENTIAL_EXTRA_KEY_EXPIRES_AT = 'expires_at' as keyof OrganizationCredentialExtra;

export const ORGANIZATION_CREDENTIAL_EXTRA_KEYS = [
  ORGANIZATION_CREDENTIAL_EXTRA_KEY_API_KEY_DESCRIPTION,
  ORGANIZATION_CREDENTIAL_EXTRA_KEY_API_KEY_NAME,
  ORGANIZATION_CREDENTIAL_EXTRA_KEY_EXPIRES_AT,
] as const;

export const ORGANIZATION_TOKEN_KEY_ACCESS_TOKEN = 'access_token' as keyof OrganizationToken;
export const ORGANIZATION_TOKEN_KEY_EXPIRES_IN = 'expires_in' as keyof OrganizationToken;
export const ORGANIZATION_TOKEN_KEY_TOKEN_TYPE = 'token_type' as keyof OrganizationToken;

export const ORGANIZATION_TOKEN_KEYS = [
  ORGANIZATION_TOKEN_KEY_ACCESS_TOKEN,
  ORGANIZATION_TOKEN_KEY_EXPIRES_IN,
  ORGANIZATION_TOKEN_KEY_TOKEN_TYPE,
] as const;

export const ORGANIZATION_UPDATE_KEY_ADDRESS_1 = 'address_1' as keyof OrganizationUpdate;
export const ORGANIZATION_UPDATE_KEY_ADDRESS_2 = 'address_2' as keyof OrganizationUpdate;
export const ORGANIZATION_UPDATE_KEY_BUSINESS_NUMBER = 'business_number' as keyof OrganizationUpdate;
export const ORGANIZATION_UPDATE_KEY_CITY = 'city' as keyof OrganizationUpdate;
export const ORGANIZATION_UPDATE_KEY_COUNTRY_CODE = 'country_code' as keyof OrganizationUpdate;
export const ORGANIZATION_UPDATE_KEY_DEFAULT_LOCALE = 'default_locale' as keyof OrganizationUpdate;
export const ORGANIZATION_UPDATE_KEY_NAME = 'name' as keyof OrganizationUpdate;
export const ORGANIZATION_UPDATE_KEY_POSTAL_CODE = 'postal_code' as keyof OrganizationUpdate;
export const ORGANIZATION_UPDATE_KEY_STATE = 'state' as keyof OrganizationUpdate;
export const ORGANIZATION_UPDATE_KEY_TAX_ID = 'tax_id' as keyof OrganizationUpdate;
export const ORGANIZATION_UPDATE_KEY_TAX_ID_TYPE = 'tax_id_type' as keyof OrganizationUpdate;
export const ORGANIZATION_UPDATE_KEY_TAX_RATE = 'tax_rate' as keyof OrganizationUpdate;

export const ORGANIZATION_UPDATE_KEYS = [
  ORGANIZATION_UPDATE_KEY_ADDRESS_1,
  ORGANIZATION_UPDATE_KEY_ADDRESS_2,
  ORGANIZATION_UPDATE_KEY_BUSINESS_NUMBER,
  ORGANIZATION_UPDATE_KEY_CITY,
  ORGANIZATION_UPDATE_KEY_COUNTRY_CODE,
  ORGANIZATION_UPDATE_KEY_DEFAULT_LOCALE,
  ORGANIZATION_UPDATE_KEY_NAME,
  ORGANIZATION_UPDATE_KEY_POSTAL_CODE,
  ORGANIZATION_UPDATE_KEY_STATE,
  ORGANIZATION_UPDATE_KEY_TAX_ID,
  ORGANIZATION_UPDATE_KEY_TAX_ID_TYPE,
  ORGANIZATION_UPDATE_KEY_TAX_RATE,
] as const;

export const ORGANIZATION_WITH_PLAN_KEY_ADDRESS_1 = 'address_1' as keyof OrganizationWithPlan;
export const ORGANIZATION_WITH_PLAN_KEY_ADDRESS_2 = 'address_2' as keyof OrganizationWithPlan;
export const ORGANIZATION_WITH_PLAN_KEY_ATTRIBUTES = 'attributes' as keyof OrganizationWithPlan;
export const ORGANIZATION_WITH_PLAN_KEY_BUSINESS_NUMBER = 'business_number' as keyof OrganizationWithPlan;
export const ORGANIZATION_WITH_PLAN_KEY_CITY = 'city' as keyof OrganizationWithPlan;
export const ORGANIZATION_WITH_PLAN_KEY_COUNTRY_CODE = 'country_code' as keyof OrganizationWithPlan;
export const ORGANIZATION_WITH_PLAN_KEY_CREATED_ON = 'created_on' as keyof OrganizationWithPlan;
export const ORGANIZATION_WITH_PLAN_KEY_CURRENCY = 'currency' as keyof OrganizationWithPlan;
export const ORGANIZATION_WITH_PLAN_KEY_DEFAULT_LOCALE = 'default_locale' as keyof OrganizationWithPlan;
export const ORGANIZATION_WITH_PLAN_KEY_DELETED_ON = 'deleted_on' as keyof OrganizationWithPlan;
export const ORGANIZATION_WITH_PLAN_KEY_NAME = 'name' as keyof OrganizationWithPlan;
export const ORGANIZATION_WITH_PLAN_KEY_ORGANIZATION_ID = 'organization_id' as keyof OrganizationWithPlan;
export const ORGANIZATION_WITH_PLAN_KEY_PARENT_ORGANIZATION_ID = 'parent_organization_id' as keyof OrganizationWithPlan;
export const ORGANIZATION_WITH_PLAN_KEY_PLAN = 'plan' as keyof OrganizationWithPlan;
export const ORGANIZATION_WITH_PLAN_KEY_POSTAL_CODE = 'postal_code' as keyof OrganizationWithPlan;
export const ORGANIZATION_WITH_PLAN_KEY_STATE = 'state' as keyof OrganizationWithPlan;
export const ORGANIZATION_WITH_PLAN_KEY_STATUS = 'status' as keyof OrganizationWithPlan;
export const ORGANIZATION_WITH_PLAN_KEY_TAX_ID = 'tax_id' as keyof OrganizationWithPlan;
export const ORGANIZATION_WITH_PLAN_KEY_TAX_ID_TYPE = 'tax_id_type' as keyof OrganizationWithPlan;
export const ORGANIZATION_WITH_PLAN_KEY_TAX_RATE = 'tax_rate' as keyof OrganizationWithPlan;
export const ORGANIZATION_WITH_PLAN_KEY_USERS = 'users' as keyof OrganizationWithPlan;

export const ORGANIZATION_WITH_PLAN_KEYS = [
  ORGANIZATION_WITH_PLAN_KEY_ADDRESS_1,
  ORGANIZATION_WITH_PLAN_KEY_ADDRESS_2,
  ORGANIZATION_WITH_PLAN_KEY_ATTRIBUTES,
  ORGANIZATION_WITH_PLAN_KEY_BUSINESS_NUMBER,
  ORGANIZATION_WITH_PLAN_KEY_CITY,
  ORGANIZATION_WITH_PLAN_KEY_COUNTRY_CODE,
  ORGANIZATION_WITH_PLAN_KEY_CREATED_ON,
  ORGANIZATION_WITH_PLAN_KEY_CURRENCY,
  ORGANIZATION_WITH_PLAN_KEY_DEFAULT_LOCALE,
  ORGANIZATION_WITH_PLAN_KEY_DELETED_ON,
  ORGANIZATION_WITH_PLAN_KEY_NAME,
  ORGANIZATION_WITH_PLAN_KEY_ORGANIZATION_ID,
  ORGANIZATION_WITH_PLAN_KEY_PARENT_ORGANIZATION_ID,
  ORGANIZATION_WITH_PLAN_KEY_PLAN,
  ORGANIZATION_WITH_PLAN_KEY_POSTAL_CODE,
  ORGANIZATION_WITH_PLAN_KEY_STATE,
  ORGANIZATION_WITH_PLAN_KEY_STATUS,
  ORGANIZATION_WITH_PLAN_KEY_TAX_ID,
  ORGANIZATION_WITH_PLAN_KEY_TAX_ID_TYPE,
  ORGANIZATION_WITH_PLAN_KEY_TAX_RATE,
  ORGANIZATION_WITH_PLAN_KEY_USERS,
] as const;

export const PAGINATION_METADATA_KEY_CURRENT_PAGE = 'current_page' as keyof PaginationMetadata;
export const PAGINATION_METADATA_KEY_HAS_NEXT_PAGE = 'has_next_page' as keyof PaginationMetadata;
export const PAGINATION_METADATA_KEY_HAS_PREVIOUS_PAGE = 'has_previous_page' as keyof PaginationMetadata;
export const PAGINATION_METADATA_KEY_PAGE_SIZE = 'page_size' as keyof PaginationMetadata;
export const PAGINATION_METADATA_KEY_TOTAL_ITEMS = 'total_items' as keyof PaginationMetadata;
export const PAGINATION_METADATA_KEY_TOTAL_PAGES = 'total_pages' as keyof PaginationMetadata;

export const PAGINATION_METADATA_KEYS = [
  PAGINATION_METADATA_KEY_CURRENT_PAGE,
  PAGINATION_METADATA_KEY_HAS_NEXT_PAGE,
  PAGINATION_METADATA_KEY_HAS_PREVIOUS_PAGE,
  PAGINATION_METADATA_KEY_PAGE_SIZE,
  PAGINATION_METADATA_KEY_TOTAL_ITEMS,
  PAGINATION_METADATA_KEY_TOTAL_PAGES,
] as const;

export const PERMISSION_SET_KEY_PERMISSIONS = 'permissions' as keyof PermissionSet;

export const PERMISSION_SET_KEYS = [
  PERMISSION_SET_KEY_PERMISSIONS,
] as const;

export const PLAN_UPDATE_KEY_PLAN = 'plan' as keyof PlanUpdate;

export const PLAN_UPDATE_KEYS = [
  PLAN_UPDATE_KEY_PLAN,
] as const;

export const PROBLEM_KEY_DETAIL = 'detail' as keyof Problem;
export const PROBLEM_KEY_STATUS = 'status' as keyof Problem;
export const PROBLEM_KEY_TITLE = 'title' as keyof Problem;
export const PROBLEM_KEY_TYPE = 'type' as keyof Problem;

export const PROBLEM_KEYS = [
  PROBLEM_KEY_DETAIL,
  PROBLEM_KEY_STATUS,
  PROBLEM_KEY_TITLE,
  PROBLEM_KEY_TYPE,
] as const;

export const RELATION_SET_KEY_RELATIONS = 'relations' as keyof RelationSet;

export const RELATION_SET_KEYS = [
  RELATION_SET_KEY_RELATIONS,
] as const;

export const SIGNUP_CREATE_KEY_ORGANIZATION = 'organization' as keyof SignupCreate;
export const SIGNUP_CREATE_KEY_TERMS_OF_SERVICE = 'terms_of_service' as keyof SignupCreate;
export const SIGNUP_CREATE_KEY_USER = 'user' as keyof SignupCreate;

export const SIGNUP_CREATE_KEYS = [
  SIGNUP_CREATE_KEY_ORGANIZATION,
  SIGNUP_CREATE_KEY_TERMS_OF_SERVICE,
  SIGNUP_CREATE_KEY_USER,
] as const;

export const SPICE_DB_RELATIONSHIP_UPDATE_KEY_ADD = 'add' as keyof SpiceDbRelationshipUpdate;
export const SPICE_DB_RELATIONSHIP_UPDATE_KEY_REMOVE = 'remove' as keyof SpiceDbRelationshipUpdate;

export const SPICE_DB_RELATIONSHIP_UPDATE_KEYS = [
  SPICE_DB_RELATIONSHIP_UPDATE_KEY_ADD,
  SPICE_DB_RELATIONSHIP_UPDATE_KEY_REMOVE,
] as const;

export const TERMS_OF_SERVICE_ACCEPT_KEY_ACCEPTED = 'accepted' as keyof TermsOfServiceAccept;

export const TERMS_OF_SERVICE_ACCEPT_KEYS = [
  TERMS_OF_SERVICE_ACCEPT_KEY_ACCEPTED,
] as const;

export const TRANSFER_EVENT_KEY_CURRENT_REGISTRAR = 'current_registrar' as keyof TransferEvent;
export const TRANSFER_EVENT_KEY_EXECUTION_DATE = 'execution_date' as keyof TransferEvent;
export const TRANSFER_EVENT_KEY_EXPIRATION_DATE = 'expiration_date' as keyof TransferEvent;
export const TRANSFER_EVENT_KEY_MESSAGE = 'message' as keyof TransferEvent;
export const TRANSFER_EVENT_KEY_REQUESTING_REGISTRAR = 'requesting_registrar' as keyof TransferEvent;

export const TRANSFER_EVENT_KEYS = [
  TRANSFER_EVENT_KEY_CURRENT_REGISTRAR,
  TRANSFER_EVENT_KEY_EXECUTION_DATE,
  TRANSFER_EVENT_KEY_EXPIRATION_DATE,
  TRANSFER_EVENT_KEY_MESSAGE,
  TRANSFER_EVENT_KEY_REQUESTING_REGISTRAR,
] as const;

export const USER_KEY_CREATED_ON = 'created_on' as keyof User;
export const USER_KEY_DELETED_ON = 'deleted_on' as keyof User;
export const USER_KEY_EMAIL = 'email' as keyof User;
export const USER_KEY_FIRST_NAME = 'first_name' as keyof User;
export const USER_KEY_LAST_NAME = 'last_name' as keyof User;
export const USER_KEY_LOCALE = 'locale' as keyof User;
export const USER_KEY_ORGANIZATION_ID = 'organization_id' as keyof User;
export const USER_KEY_PHONE = 'phone' as keyof User;
export const USER_KEY_STATUS = 'status' as keyof User;
export const USER_KEY_UPDATED_ON = 'updated_on' as keyof User;
export const USER_KEY_USER_ID = 'user_id' as keyof User;
export const USER_KEY_USERNAME = 'username' as keyof User;

export const USER_KEYS = [
  USER_KEY_CREATED_ON,
  USER_KEY_DELETED_ON,
  USER_KEY_EMAIL,
  USER_KEY_FIRST_NAME,
  USER_KEY_LAST_NAME,
  USER_KEY_LOCALE,
  USER_KEY_ORGANIZATION_ID,
  USER_KEY_PHONE,
  USER_KEY_STATUS,
  USER_KEY_UPDATED_ON,
  USER_KEY_USER_ID,
  USER_KEY_USERNAME,
] as const;

export const USER_ATTRIBUTE_UPDATE_KEY_KEY = 'key' as keyof UserAttributeUpdate;
export const USER_ATTRIBUTE_UPDATE_KEY_VALUE = 'value' as keyof UserAttributeUpdate;

export const USER_ATTRIBUTE_UPDATE_KEYS = [
  USER_ATTRIBUTE_UPDATE_KEY_KEY,
  USER_ATTRIBUTE_UPDATE_KEY_VALUE,
] as const;

export const USER_CREATE_KEY_EMAIL = 'email' as keyof UserCreate;
export const USER_CREATE_KEY_FIRST_NAME = 'first_name' as keyof UserCreate;
export const USER_CREATE_KEY_LAST_NAME = 'last_name' as keyof UserCreate;
export const USER_CREATE_KEY_LOCALE = 'locale' as keyof UserCreate;
export const USER_CREATE_KEY_PASSWORD = 'password' as keyof UserCreate;
export const USER_CREATE_KEY_PHONE = 'phone' as keyof UserCreate;
export const USER_CREATE_KEY_USERNAME = 'username' as keyof UserCreate;

export const USER_CREATE_KEYS = [
  USER_CREATE_KEY_EMAIL,
  USER_CREATE_KEY_FIRST_NAME,
  USER_CREATE_KEY_LAST_NAME,
  USER_CREATE_KEY_LOCALE,
  USER_CREATE_KEY_PASSWORD,
  USER_CREATE_KEY_PHONE,
  USER_CREATE_KEY_USERNAME,
] as const;

export const USER_NOTIFICATION_KEY_CREATED_ON = 'created_on' as keyof UserNotification;
export const USER_NOTIFICATION_KEY_NOTIFICATION = 'notification' as keyof UserNotification;
export const USER_NOTIFICATION_KEY_NOTIFICATION_ID = 'notification_id' as keyof UserNotification;
export const USER_NOTIFICATION_KEY_STATUS = 'status' as keyof UserNotification;
export const USER_NOTIFICATION_KEY_UPDATED_ON = 'updated_on' as keyof UserNotification;
export const USER_NOTIFICATION_KEY_USER_ID = 'user_id' as keyof UserNotification;
export const USER_NOTIFICATION_KEY_USER_NOTIFICATION_ID = 'user_notification_id' as keyof UserNotification;

export const USER_NOTIFICATION_KEYS = [
  USER_NOTIFICATION_KEY_CREATED_ON,
  USER_NOTIFICATION_KEY_NOTIFICATION,
  USER_NOTIFICATION_KEY_NOTIFICATION_ID,
  USER_NOTIFICATION_KEY_STATUS,
  USER_NOTIFICATION_KEY_UPDATED_ON,
  USER_NOTIFICATION_KEY_USER_ID,
  USER_NOTIFICATION_KEY_USER_NOTIFICATION_ID,
] as const;

export const USER_NOTIFICATION_SUMMARY_KEY_NOTIFICATION = 'notification' as keyof UserNotificationSummary;
export const USER_NOTIFICATION_SUMMARY_KEY_STATUS = 'status' as keyof UserNotificationSummary;
export const USER_NOTIFICATION_SUMMARY_KEY_USER_NOTIFICATION_ID = 'user_notification_id' as keyof UserNotificationSummary;

export const USER_NOTIFICATION_SUMMARY_KEYS = [
  USER_NOTIFICATION_SUMMARY_KEY_NOTIFICATION,
  USER_NOTIFICATION_SUMMARY_KEY_STATUS,
  USER_NOTIFICATION_SUMMARY_KEY_USER_NOTIFICATION_ID,
] as const;

export const USER_TOKEN_KEY_ACCESS_TOKEN = 'access_token' as keyof UserToken;
export const USER_TOKEN_KEY_EXPIRES_IN = 'expires_in' as keyof UserToken;
export const USER_TOKEN_KEY_REFRESH_EXPIRES_IN = 'refresh_expires_in' as keyof UserToken;
export const USER_TOKEN_KEY_REFRESH_TOKEN = 'refresh_token' as keyof UserToken;
export const USER_TOKEN_KEY_TOKEN_TYPE = 'token_type' as keyof UserToken;

export const USER_TOKEN_KEYS = [
  USER_TOKEN_KEY_ACCESS_TOKEN,
  USER_TOKEN_KEY_EXPIRES_IN,
  USER_TOKEN_KEY_REFRESH_EXPIRES_IN,
  USER_TOKEN_KEY_REFRESH_TOKEN,
  USER_TOKEN_KEY_TOKEN_TYPE,
] as const;

export const USER_UPDATE_KEY_EMAIL = 'email' as keyof UserUpdate;
export const USER_UPDATE_KEY_FIRST_NAME = 'first_name' as keyof UserUpdate;
export const USER_UPDATE_KEY_LAST_NAME = 'last_name' as keyof UserUpdate;
export const USER_UPDATE_KEY_LOCALE = 'locale' as keyof UserUpdate;
export const USER_UPDATE_KEY_PHONE = 'phone' as keyof UserUpdate;
export const USER_UPDATE_KEY_USER_ATTRIBUTES = 'user_attributes' as keyof UserUpdate;
export const USER_UPDATE_KEY_USERNAME = 'username' as keyof UserUpdate;

export const USER_UPDATE_KEYS = [
  USER_UPDATE_KEY_EMAIL,
  USER_UPDATE_KEY_FIRST_NAME,
  USER_UPDATE_KEY_LAST_NAME,
  USER_UPDATE_KEY_LOCALE,
  USER_UPDATE_KEY_PHONE,
  USER_UPDATE_KEY_USER_ATTRIBUTES,
  USER_UPDATE_KEY_USERNAME,
] as const;

export const USER_WITH_ATTRIBUTES_KEY_CREATED_ON = 'created_on' as keyof UserWithAttributes;
export const USER_WITH_ATTRIBUTES_KEY_DELETED_ON = 'deleted_on' as keyof UserWithAttributes;
export const USER_WITH_ATTRIBUTES_KEY_EMAIL = 'email' as keyof UserWithAttributes;
export const USER_WITH_ATTRIBUTES_KEY_FIRST_NAME = 'first_name' as keyof UserWithAttributes;
export const USER_WITH_ATTRIBUTES_KEY_LAST_NAME = 'last_name' as keyof UserWithAttributes;
export const USER_WITH_ATTRIBUTES_KEY_LOCALE = 'locale' as keyof UserWithAttributes;
export const USER_WITH_ATTRIBUTES_KEY_ORGANIZATION_ID = 'organization_id' as keyof UserWithAttributes;
export const USER_WITH_ATTRIBUTES_KEY_PHONE = 'phone' as keyof UserWithAttributes;
export const USER_WITH_ATTRIBUTES_KEY_STATUS = 'status' as keyof UserWithAttributes;
export const USER_WITH_ATTRIBUTES_KEY_UPDATED_ON = 'updated_on' as keyof UserWithAttributes;
export const USER_WITH_ATTRIBUTES_KEY_USER_ATTRIBUTES = 'user_attributes' as keyof UserWithAttributes;
export const USER_WITH_ATTRIBUTES_KEY_USER_ID = 'user_id' as keyof UserWithAttributes;
export const USER_WITH_ATTRIBUTES_KEY_USERNAME = 'username' as keyof UserWithAttributes;

export const USER_WITH_ATTRIBUTES_KEYS = [
  USER_WITH_ATTRIBUTES_KEY_CREATED_ON,
  USER_WITH_ATTRIBUTES_KEY_DELETED_ON,
  USER_WITH_ATTRIBUTES_KEY_EMAIL,
  USER_WITH_ATTRIBUTES_KEY_FIRST_NAME,
  USER_WITH_ATTRIBUTES_KEY_LAST_NAME,
  USER_WITH_ATTRIBUTES_KEY_LOCALE,
  USER_WITH_ATTRIBUTES_KEY_ORGANIZATION_ID,
  USER_WITH_ATTRIBUTES_KEY_PHONE,
  USER_WITH_ATTRIBUTES_KEY_STATUS,
  USER_WITH_ATTRIBUTES_KEY_UPDATED_ON,
  USER_WITH_ATTRIBUTES_KEY_USER_ATTRIBUTES,
  USER_WITH_ATTRIBUTES_KEY_USER_ID,
  USER_WITH_ATTRIBUTES_KEY_USERNAME,
] as const;

export const USER_WITH_RELATION_PERMISSIONS_KEY_CREATED_ON = 'created_on' as keyof UserWithRelationPermissions;
export const USER_WITH_RELATION_PERMISSIONS_KEY_DELETED_ON = 'deleted_on' as keyof UserWithRelationPermissions;
export const USER_WITH_RELATION_PERMISSIONS_KEY_EMAIL = 'email' as keyof UserWithRelationPermissions;
export const USER_WITH_RELATION_PERMISSIONS_KEY_FIRST_NAME = 'first_name' as keyof UserWithRelationPermissions;
export const USER_WITH_RELATION_PERMISSIONS_KEY_LAST_NAME = 'last_name' as keyof UserWithRelationPermissions;
export const USER_WITH_RELATION_PERMISSIONS_KEY_LOCALE = 'locale' as keyof UserWithRelationPermissions;
export const USER_WITH_RELATION_PERMISSIONS_KEY_ORGANIZATION_ID = 'organization_id' as keyof UserWithRelationPermissions;
export const USER_WITH_RELATION_PERMISSIONS_KEY_PERMISSIONS = 'permissions' as keyof UserWithRelationPermissions;
export const USER_WITH_RELATION_PERMISSIONS_KEY_PHONE = 'phone' as keyof UserWithRelationPermissions;
export const USER_WITH_RELATION_PERMISSIONS_KEY_RELATIONS = 'relations' as keyof UserWithRelationPermissions;
export const USER_WITH_RELATION_PERMISSIONS_KEY_STATUS = 'status' as keyof UserWithRelationPermissions;
export const USER_WITH_RELATION_PERMISSIONS_KEY_UPDATED_ON = 'updated_on' as keyof UserWithRelationPermissions;
export const USER_WITH_RELATION_PERMISSIONS_KEY_USER_ATTRIBUTES = 'user_attributes' as keyof UserWithRelationPermissions;
export const USER_WITH_RELATION_PERMISSIONS_KEY_USER_ID = 'user_id' as keyof UserWithRelationPermissions;
export const USER_WITH_RELATION_PERMISSIONS_KEY_USERNAME = 'username' as keyof UserWithRelationPermissions;

export const USER_WITH_RELATION_PERMISSIONS_KEYS = [
  USER_WITH_RELATION_PERMISSIONS_KEY_CREATED_ON,
  USER_WITH_RELATION_PERMISSIONS_KEY_DELETED_ON,
  USER_WITH_RELATION_PERMISSIONS_KEY_EMAIL,
  USER_WITH_RELATION_PERMISSIONS_KEY_FIRST_NAME,
  USER_WITH_RELATION_PERMISSIONS_KEY_LAST_NAME,
  USER_WITH_RELATION_PERMISSIONS_KEY_LOCALE,
  USER_WITH_RELATION_PERMISSIONS_KEY_ORGANIZATION_ID,
  USER_WITH_RELATION_PERMISSIONS_KEY_PERMISSIONS,
  USER_WITH_RELATION_PERMISSIONS_KEY_PHONE,
  USER_WITH_RELATION_PERMISSIONS_KEY_RELATIONS,
  USER_WITH_RELATION_PERMISSIONS_KEY_STATUS,
  USER_WITH_RELATION_PERMISSIONS_KEY_UPDATED_ON,
  USER_WITH_RELATION_PERMISSIONS_KEY_USER_ATTRIBUTES,
  USER_WITH_RELATION_PERMISSIONS_KEY_USER_ID,
  USER_WITH_RELATION_PERMISSIONS_KEY_USERNAME,
] as const;

export const VALIDATION_ERROR_KEY_LOC = 'loc' as keyof ValidationError;
export const VALIDATION_ERROR_KEY_MSG = 'msg' as keyof ValidationError;
export const VALIDATION_ERROR_KEY_TYPE = 'type' as keyof ValidationError;

export const VALIDATION_ERROR_KEYS = [
  VALIDATION_ERROR_KEY_LOC,
  VALIDATION_ERROR_KEY_MSG,
  VALIDATION_ERROR_KEY_TYPE,
] as const;

export const DOMAIN_AVAILABILITY_LIST_KEY_META = 'meta' as keyof DomainAvailabilityList;
export const DOMAIN_AVAILABILITY_LIST_KEY_RESULTS = 'results' as keyof DomainAvailabilityList;

export const DOMAIN_AVAILABILITY_LIST_KEYS = [
  DOMAIN_AVAILABILITY_LIST_KEY_META,
  DOMAIN_AVAILABILITY_LIST_KEY_RESULTS,
] as const;

export const DOMAIN_AVAILABILITY_CHECK_KEY_AVAILABLE = 'available' as keyof DomainAvailabilityCheck;
export const DOMAIN_AVAILABILITY_CHECK_KEY_DOMAIN = 'domain' as keyof DomainAvailabilityCheck;
export const DOMAIN_AVAILABILITY_CHECK_KEY_REASON = 'reason' as keyof DomainAvailabilityCheck;

export const DOMAIN_AVAILABILITY_CHECK_KEYS = [
  DOMAIN_AVAILABILITY_CHECK_KEY_AVAILABLE,
  DOMAIN_AVAILABILITY_CHECK_KEY_DOMAIN,
  DOMAIN_AVAILABILITY_CHECK_KEY_REASON,
] as const;
