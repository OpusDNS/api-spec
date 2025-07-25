/**
 * Key constants for OpusDNS API response objects.
 *
 * This file is auto-generated from the OpenAPI specification.
 * Do not edit manually.
 */

import { Get_AuthClientCredentials_Response_V1 } from './types';
import { Get_Availability_Response_V1 } from './types';
import { Get_Contacts_Response_V1 } from './types';
import { Get_ContactsBycontactId_Response_V1 } from './types';
import { Get_ContactsBycontactIdVerification_Response_V1 } from './types';
import { Get_ContactsVerification_Response_V1 } from './types';
import { Get_Dns_Response_V1 } from './types';
import { Get_DnsByzoneName_Response_V1 } from './types';
import { Get_Domains_Response_V1 } from './types';
import { Get_DomainsBydomainReference_Response_V1 } from './types';
import { Get_DomainsCheck_Response_V1 } from './types';
import { Get_DomainSearchSuggest_Response_V1 } from './types';
import { Get_DomainsSummary_Response_V1 } from './types';
import { Get_EmailForwards_Response_V1 } from './types';
import { Get_EmailForwardsByemailForwardId_Response_V1 } from './types';
import { Get_Event_Response_V1 } from './types';
import { Get_EventByeventId_Response_V1 } from './types';
import { Get_Notifications_Response_V1 } from './types';
import { Get_NotificationsBynotificationId_Response_V1 } from './types';
import { Get_Organizations_Response_V1 } from './types';
import { Get_OrganizationsByorganizationId_Response_V1 } from './types';
import { Get_OrganizationsIpRestrictionsByipRestrictionId_Response_V1 } from './types';
import { Get_OrganizationsUsers_Response_V1 } from './types';
import { Get_UsersByuserId_Response_V1 } from './types';
import { Get_UsersByuserIdPermissions_Response_V1 } from './types';
import { Get_UsersByuserIdRoles_Response_V1 } from './types';
import { Get_UsersMe_Response_V1 } from './types';
import { Patch_DomainsBydomainReference_Response_V1 } from './types';
import { Patch_EmailForwardsByemailForwardId_Response_V1 } from './types';
import { Patch_OrganizationsByorganizationIdPlan_Response_V1 } from './types';
import { Patch_OrganizationsIpRestrictionsByipRestrictionId_Response_V1 } from './types';
import { Patch_UsersByuserId_Response_V1 } from './types';
import { Patch_UsersByuserIdRoles_Response_V1 } from './types';
import { Post_Contacts_Response_V1 } from './types';
import { Post_Domains_Response_V1 } from './types';
import { Post_DomainsTransfer_Response_V1 } from './types';
import { Post_EmailForwards_Response_V1 } from './types';
import { Post_OrganizationsIpRestrictions_Response_V1 } from './types';
import { DomainAvailability } from './types';
import { Contact } from './types';
import { ContactSchema } from './types';
import { ContactVerification } from './types';
import { DnsZone } from './types';
import { DomainCheck } from './types';
import { Domain } from './types';
import { DomainSearch } from './types';
import { DomainSummary } from './types';
import { EmailForward } from './types';
import { EventSchema } from './types';
import { IpRestriction } from './types';
import { OrganizationWithPlan } from './types';
import { PermissionSet } from './types';
import { RelationSet } from './types';
import { UserNotification } from './types';
import { UserWithAttributes } from './types';
import { UserWithRelationPermissions } from './types';

export const GET_AUTH_CLIENT_CREDENTIALS_RESPONSE_V1_KEY_PAGINATION = 'pagination' as keyof Get_AuthClientCredentials_Response_V1;
export const GET_AUTH_CLIENT_CREDENTIALS_RESPONSE_V1_KEY_RESULTS = 'results' as keyof Get_AuthClientCredentials_Response_V1;

export const GET_AUTH_CLIENT_CREDENTIALS_RESPONSE_V1_KEYS = [
  GET_AUTH_CLIENT_CREDENTIALS_RESPONSE_V1_KEY_PAGINATION,
  GET_AUTH_CLIENT_CREDENTIALS_RESPONSE_V1_KEY_RESULTS,
] as const;

export const GET_AVAILABILITY_RESPONSE_V1_KEY_META = 'meta' as keyof Get_Availability_Response_V1;
export const GET_AVAILABILITY_RESPONSE_V1_KEY_RESULTS = 'results' as keyof Get_Availability_Response_V1;

export const GET_AVAILABILITY_RESPONSE_V1_KEYS = [
  GET_AVAILABILITY_RESPONSE_V1_KEY_META,
  GET_AVAILABILITY_RESPONSE_V1_KEY_RESULTS,
] as const;

export const GET_CONTACTS_RESPONSE_V1_KEY_PAGINATION = 'pagination' as keyof Get_Contacts_Response_V1;
export const GET_CONTACTS_RESPONSE_V1_KEY_RESULTS = 'results' as keyof Get_Contacts_Response_V1;

export const GET_CONTACTS_RESPONSE_V1_KEYS = [
  GET_CONTACTS_RESPONSE_V1_KEY_PAGINATION,
  GET_CONTACTS_RESPONSE_V1_KEY_RESULTS,
] as const;

export const GET_CONTACTS_BYCONTACT_ID_RESPONSE_V1_KEY_CITY = 'city' as keyof Get_ContactsBycontactId_Response_V1;
export const GET_CONTACTS_BYCONTACT_ID_RESPONSE_V1_KEY_CONTACT_ID = 'contact_id' as keyof Get_ContactsBycontactId_Response_V1;
export const GET_CONTACTS_BYCONTACT_ID_RESPONSE_V1_KEY_COUNTRY = 'country' as keyof Get_ContactsBycontactId_Response_V1;
export const GET_CONTACTS_BYCONTACT_ID_RESPONSE_V1_KEY_CREATED_ON = 'created_on' as keyof Get_ContactsBycontactId_Response_V1;
export const GET_CONTACTS_BYCONTACT_ID_RESPONSE_V1_KEY_DELETED_ON = 'deleted_on' as keyof Get_ContactsBycontactId_Response_V1;
export const GET_CONTACTS_BYCONTACT_ID_RESPONSE_V1_KEY_DISCLOSE = 'disclose' as keyof Get_ContactsBycontactId_Response_V1;
export const GET_CONTACTS_BYCONTACT_ID_RESPONSE_V1_KEY_EMAIL = 'email' as keyof Get_ContactsBycontactId_Response_V1;
export const GET_CONTACTS_BYCONTACT_ID_RESPONSE_V1_KEY_FAX = 'fax' as keyof Get_ContactsBycontactId_Response_V1;
export const GET_CONTACTS_BYCONTACT_ID_RESPONSE_V1_KEY_FIRST_NAME = 'first_name' as keyof Get_ContactsBycontactId_Response_V1;
export const GET_CONTACTS_BYCONTACT_ID_RESPONSE_V1_KEY_LAST_NAME = 'last_name' as keyof Get_ContactsBycontactId_Response_V1;
export const GET_CONTACTS_BYCONTACT_ID_RESPONSE_V1_KEY_ORG = 'org' as keyof Get_ContactsBycontactId_Response_V1;
export const GET_CONTACTS_BYCONTACT_ID_RESPONSE_V1_KEY_ORGANIZATION_ID = 'organization_id' as keyof Get_ContactsBycontactId_Response_V1;
export const GET_CONTACTS_BYCONTACT_ID_RESPONSE_V1_KEY_PHONE = 'phone' as keyof Get_ContactsBycontactId_Response_V1;
export const GET_CONTACTS_BYCONTACT_ID_RESPONSE_V1_KEY_POSTAL_CODE = 'postal_code' as keyof Get_ContactsBycontactId_Response_V1;
export const GET_CONTACTS_BYCONTACT_ID_RESPONSE_V1_KEY_STATE = 'state' as keyof Get_ContactsBycontactId_Response_V1;
export const GET_CONTACTS_BYCONTACT_ID_RESPONSE_V1_KEY_STREET = 'street' as keyof Get_ContactsBycontactId_Response_V1;
export const GET_CONTACTS_BYCONTACT_ID_RESPONSE_V1_KEY_TITLE = 'title' as keyof Get_ContactsBycontactId_Response_V1;

export const GET_CONTACTS_BYCONTACT_ID_RESPONSE_V1_KEYS = [
  GET_CONTACTS_BYCONTACT_ID_RESPONSE_V1_KEY_CITY,
  GET_CONTACTS_BYCONTACT_ID_RESPONSE_V1_KEY_CONTACT_ID,
  GET_CONTACTS_BYCONTACT_ID_RESPONSE_V1_KEY_COUNTRY,
  GET_CONTACTS_BYCONTACT_ID_RESPONSE_V1_KEY_CREATED_ON,
  GET_CONTACTS_BYCONTACT_ID_RESPONSE_V1_KEY_DELETED_ON,
  GET_CONTACTS_BYCONTACT_ID_RESPONSE_V1_KEY_DISCLOSE,
  GET_CONTACTS_BYCONTACT_ID_RESPONSE_V1_KEY_EMAIL,
  GET_CONTACTS_BYCONTACT_ID_RESPONSE_V1_KEY_FAX,
  GET_CONTACTS_BYCONTACT_ID_RESPONSE_V1_KEY_FIRST_NAME,
  GET_CONTACTS_BYCONTACT_ID_RESPONSE_V1_KEY_LAST_NAME,
  GET_CONTACTS_BYCONTACT_ID_RESPONSE_V1_KEY_ORG,
  GET_CONTACTS_BYCONTACT_ID_RESPONSE_V1_KEY_ORGANIZATION_ID,
  GET_CONTACTS_BYCONTACT_ID_RESPONSE_V1_KEY_PHONE,
  GET_CONTACTS_BYCONTACT_ID_RESPONSE_V1_KEY_POSTAL_CODE,
  GET_CONTACTS_BYCONTACT_ID_RESPONSE_V1_KEY_STATE,
  GET_CONTACTS_BYCONTACT_ID_RESPONSE_V1_KEY_STREET,
  GET_CONTACTS_BYCONTACT_ID_RESPONSE_V1_KEY_TITLE,
] as const;

export const GET_CONTACTS_BYCONTACT_ID_VERIFICATION_RESPONSE_V1_KEY_CANCELED_ON = 'canceled_on' as keyof Get_ContactsBycontactIdVerification_Response_V1;
export const GET_CONTACTS_BYCONTACT_ID_VERIFICATION_RESPONSE_V1_KEY_CONTACT_ID = 'contact_id' as keyof Get_ContactsBycontactIdVerification_Response_V1;
export const GET_CONTACTS_BYCONTACT_ID_VERIFICATION_RESPONSE_V1_KEY_CONTACT_VERIFICATION_ID = 'contact_verification_id' as keyof Get_ContactsBycontactIdVerification_Response_V1;
export const GET_CONTACTS_BYCONTACT_ID_VERIFICATION_RESPONSE_V1_KEY_CREATED_ON = 'created_on' as keyof Get_ContactsBycontactIdVerification_Response_V1;
export const GET_CONTACTS_BYCONTACT_ID_VERIFICATION_RESPONSE_V1_KEY_STATUS = 'status' as keyof Get_ContactsBycontactIdVerification_Response_V1;
export const GET_CONTACTS_BYCONTACT_ID_VERIFICATION_RESPONSE_V1_KEY_TYPE = 'type' as keyof Get_ContactsBycontactIdVerification_Response_V1;
export const GET_CONTACTS_BYCONTACT_ID_VERIFICATION_RESPONSE_V1_KEY_UPDATED_ON = 'updated_on' as keyof Get_ContactsBycontactIdVerification_Response_V1;
export const GET_CONTACTS_BYCONTACT_ID_VERIFICATION_RESPONSE_V1_KEY_VERIFIED_ON = 'verified_on' as keyof Get_ContactsBycontactIdVerification_Response_V1;

export const GET_CONTACTS_BYCONTACT_ID_VERIFICATION_RESPONSE_V1_KEYS = [
  GET_CONTACTS_BYCONTACT_ID_VERIFICATION_RESPONSE_V1_KEY_CANCELED_ON,
  GET_CONTACTS_BYCONTACT_ID_VERIFICATION_RESPONSE_V1_KEY_CONTACT_ID,
  GET_CONTACTS_BYCONTACT_ID_VERIFICATION_RESPONSE_V1_KEY_CONTACT_VERIFICATION_ID,
  GET_CONTACTS_BYCONTACT_ID_VERIFICATION_RESPONSE_V1_KEY_CREATED_ON,
  GET_CONTACTS_BYCONTACT_ID_VERIFICATION_RESPONSE_V1_KEY_STATUS,
  GET_CONTACTS_BYCONTACT_ID_VERIFICATION_RESPONSE_V1_KEY_TYPE,
  GET_CONTACTS_BYCONTACT_ID_VERIFICATION_RESPONSE_V1_KEY_UPDATED_ON,
  GET_CONTACTS_BYCONTACT_ID_VERIFICATION_RESPONSE_V1_KEY_VERIFIED_ON,
] as const;

export const GET_CONTACTS_VERIFICATION_RESPONSE_V1_KEY_CITY = 'city' as keyof Get_ContactsVerification_Response_V1;
export const GET_CONTACTS_VERIFICATION_RESPONSE_V1_KEY_COUNTRY = 'country' as keyof Get_ContactsVerification_Response_V1;
export const GET_CONTACTS_VERIFICATION_RESPONSE_V1_KEY_DISCLOSE = 'disclose' as keyof Get_ContactsVerification_Response_V1;
export const GET_CONTACTS_VERIFICATION_RESPONSE_V1_KEY_EMAIL = 'email' as keyof Get_ContactsVerification_Response_V1;
export const GET_CONTACTS_VERIFICATION_RESPONSE_V1_KEY_FAX = 'fax' as keyof Get_ContactsVerification_Response_V1;
export const GET_CONTACTS_VERIFICATION_RESPONSE_V1_KEY_FIRST_NAME = 'first_name' as keyof Get_ContactsVerification_Response_V1;
export const GET_CONTACTS_VERIFICATION_RESPONSE_V1_KEY_LAST_NAME = 'last_name' as keyof Get_ContactsVerification_Response_V1;
export const GET_CONTACTS_VERIFICATION_RESPONSE_V1_KEY_ORG = 'org' as keyof Get_ContactsVerification_Response_V1;
export const GET_CONTACTS_VERIFICATION_RESPONSE_V1_KEY_PHONE = 'phone' as keyof Get_ContactsVerification_Response_V1;
export const GET_CONTACTS_VERIFICATION_RESPONSE_V1_KEY_POSTAL_CODE = 'postal_code' as keyof Get_ContactsVerification_Response_V1;
export const GET_CONTACTS_VERIFICATION_RESPONSE_V1_KEY_STATE = 'state' as keyof Get_ContactsVerification_Response_V1;
export const GET_CONTACTS_VERIFICATION_RESPONSE_V1_KEY_STREET = 'street' as keyof Get_ContactsVerification_Response_V1;
export const GET_CONTACTS_VERIFICATION_RESPONSE_V1_KEY_TITLE = 'title' as keyof Get_ContactsVerification_Response_V1;

export const GET_CONTACTS_VERIFICATION_RESPONSE_V1_KEYS = [
  GET_CONTACTS_VERIFICATION_RESPONSE_V1_KEY_CITY,
  GET_CONTACTS_VERIFICATION_RESPONSE_V1_KEY_COUNTRY,
  GET_CONTACTS_VERIFICATION_RESPONSE_V1_KEY_DISCLOSE,
  GET_CONTACTS_VERIFICATION_RESPONSE_V1_KEY_EMAIL,
  GET_CONTACTS_VERIFICATION_RESPONSE_V1_KEY_FAX,
  GET_CONTACTS_VERIFICATION_RESPONSE_V1_KEY_FIRST_NAME,
  GET_CONTACTS_VERIFICATION_RESPONSE_V1_KEY_LAST_NAME,
  GET_CONTACTS_VERIFICATION_RESPONSE_V1_KEY_ORG,
  GET_CONTACTS_VERIFICATION_RESPONSE_V1_KEY_PHONE,
  GET_CONTACTS_VERIFICATION_RESPONSE_V1_KEY_POSTAL_CODE,
  GET_CONTACTS_VERIFICATION_RESPONSE_V1_KEY_STATE,
  GET_CONTACTS_VERIFICATION_RESPONSE_V1_KEY_STREET,
  GET_CONTACTS_VERIFICATION_RESPONSE_V1_KEY_TITLE,
] as const;

export const GET_DNS_RESPONSE_V1_KEY_PAGINATION = 'pagination' as keyof Get_Dns_Response_V1;
export const GET_DNS_RESPONSE_V1_KEY_RESULTS = 'results' as keyof Get_Dns_Response_V1;

export const GET_DNS_RESPONSE_V1_KEYS = [
  GET_DNS_RESPONSE_V1_KEY_PAGINATION,
  GET_DNS_RESPONSE_V1_KEY_RESULTS,
] as const;

export const GET_DNS_BYZONE_NAME_RESPONSE_V1_KEY_DNSSEC_STATUS = 'dnssec_status' as keyof Get_DnsByzoneName_Response_V1;
export const GET_DNS_BYZONE_NAME_RESPONSE_V1_KEY_DOMAIN_PARTS = 'domain_parts' as keyof Get_DnsByzoneName_Response_V1;
export const GET_DNS_BYZONE_NAME_RESPONSE_V1_KEY_NAME = 'name' as keyof Get_DnsByzoneName_Response_V1;
export const GET_DNS_BYZONE_NAME_RESPONSE_V1_KEY_RRSETS = 'rrsets' as keyof Get_DnsByzoneName_Response_V1;

export const GET_DNS_BYZONE_NAME_RESPONSE_V1_KEYS = [
  GET_DNS_BYZONE_NAME_RESPONSE_V1_KEY_DNSSEC_STATUS,
  GET_DNS_BYZONE_NAME_RESPONSE_V1_KEY_DOMAIN_PARTS,
  GET_DNS_BYZONE_NAME_RESPONSE_V1_KEY_NAME,
  GET_DNS_BYZONE_NAME_RESPONSE_V1_KEY_RRSETS,
] as const;

export const GET_DOMAINS_RESPONSE_V1_KEY_PAGINATION = 'pagination' as keyof Get_Domains_Response_V1;
export const GET_DOMAINS_RESPONSE_V1_KEY_RESULTS = 'results' as keyof Get_Domains_Response_V1;

export const GET_DOMAINS_RESPONSE_V1_KEYS = [
  GET_DOMAINS_RESPONSE_V1_KEY_PAGINATION,
  GET_DOMAINS_RESPONSE_V1_KEY_RESULTS,
] as const;

export const GET_DOMAINS_BYDOMAIN_REFERENCE_RESPONSE_V1_KEY_AUTH_CODE = 'auth_code' as keyof Get_DomainsBydomainReference_Response_V1;
export const GET_DOMAINS_BYDOMAIN_REFERENCE_RESPONSE_V1_KEY_AUTH_CODE_EXPIRES_ON = 'auth_code_expires_on' as keyof Get_DomainsBydomainReference_Response_V1;
export const GET_DOMAINS_BYDOMAIN_REFERENCE_RESPONSE_V1_KEY_CANCELED_ON = 'canceled_on' as keyof Get_DomainsBydomainReference_Response_V1;
export const GET_DOMAINS_BYDOMAIN_REFERENCE_RESPONSE_V1_KEY_CONTACTS = 'contacts' as keyof Get_DomainsBydomainReference_Response_V1;
export const GET_DOMAINS_BYDOMAIN_REFERENCE_RESPONSE_V1_KEY_CREATED_ON = 'created_on' as keyof Get_DomainsBydomainReference_Response_V1;
export const GET_DOMAINS_BYDOMAIN_REFERENCE_RESPONSE_V1_KEY_DELETED_ON = 'deleted_on' as keyof Get_DomainsBydomainReference_Response_V1;
export const GET_DOMAINS_BYDOMAIN_REFERENCE_RESPONSE_V1_KEY_DOMAIN_ID = 'domain_id' as keyof Get_DomainsBydomainReference_Response_V1;
export const GET_DOMAINS_BYDOMAIN_REFERENCE_RESPONSE_V1_KEY_EXPIRES_ON = 'expires_on' as keyof Get_DomainsBydomainReference_Response_V1;
export const GET_DOMAINS_BYDOMAIN_REFERENCE_RESPONSE_V1_KEY_NAME = 'name' as keyof Get_DomainsBydomainReference_Response_V1;
export const GET_DOMAINS_BYDOMAIN_REFERENCE_RESPONSE_V1_KEY_NAMESERVERS = 'nameservers' as keyof Get_DomainsBydomainReference_Response_V1;
export const GET_DOMAINS_BYDOMAIN_REFERENCE_RESPONSE_V1_KEY_OWNER_ID = 'owner_id' as keyof Get_DomainsBydomainReference_Response_V1;
export const GET_DOMAINS_BYDOMAIN_REFERENCE_RESPONSE_V1_KEY_REGISTERED_ON = 'registered_on' as keyof Get_DomainsBydomainReference_Response_V1;
export const GET_DOMAINS_BYDOMAIN_REFERENCE_RESPONSE_V1_KEY_REGISTRY_ACCOUNT_ID = 'registry_account_id' as keyof Get_DomainsBydomainReference_Response_V1;
export const GET_DOMAINS_BYDOMAIN_REFERENCE_RESPONSE_V1_KEY_REGISTRY_STATUSES = 'registry_statuses' as keyof Get_DomainsBydomainReference_Response_V1;
export const GET_DOMAINS_BYDOMAIN_REFERENCE_RESPONSE_V1_KEY_RENEWAL_MODE = 'renewal_mode' as keyof Get_DomainsBydomainReference_Response_V1;
export const GET_DOMAINS_BYDOMAIN_REFERENCE_RESPONSE_V1_KEY_ROID = 'roid' as keyof Get_DomainsBydomainReference_Response_V1;
export const GET_DOMAINS_BYDOMAIN_REFERENCE_RESPONSE_V1_KEY_SLD = 'sld' as keyof Get_DomainsBydomainReference_Response_V1;
export const GET_DOMAINS_BYDOMAIN_REFERENCE_RESPONSE_V1_KEY_TLD = 'tld' as keyof Get_DomainsBydomainReference_Response_V1;
export const GET_DOMAINS_BYDOMAIN_REFERENCE_RESPONSE_V1_KEY_TRANSFER_LOCK = 'transfer_lock' as keyof Get_DomainsBydomainReference_Response_V1;
export const GET_DOMAINS_BYDOMAIN_REFERENCE_RESPONSE_V1_KEY_UPDATED_ON = 'updated_on' as keyof Get_DomainsBydomainReference_Response_V1;

export const GET_DOMAINS_BYDOMAIN_REFERENCE_RESPONSE_V1_KEYS = [
  GET_DOMAINS_BYDOMAIN_REFERENCE_RESPONSE_V1_KEY_AUTH_CODE,
  GET_DOMAINS_BYDOMAIN_REFERENCE_RESPONSE_V1_KEY_AUTH_CODE_EXPIRES_ON,
  GET_DOMAINS_BYDOMAIN_REFERENCE_RESPONSE_V1_KEY_CANCELED_ON,
  GET_DOMAINS_BYDOMAIN_REFERENCE_RESPONSE_V1_KEY_CONTACTS,
  GET_DOMAINS_BYDOMAIN_REFERENCE_RESPONSE_V1_KEY_CREATED_ON,
  GET_DOMAINS_BYDOMAIN_REFERENCE_RESPONSE_V1_KEY_DELETED_ON,
  GET_DOMAINS_BYDOMAIN_REFERENCE_RESPONSE_V1_KEY_DOMAIN_ID,
  GET_DOMAINS_BYDOMAIN_REFERENCE_RESPONSE_V1_KEY_EXPIRES_ON,
  GET_DOMAINS_BYDOMAIN_REFERENCE_RESPONSE_V1_KEY_NAME,
  GET_DOMAINS_BYDOMAIN_REFERENCE_RESPONSE_V1_KEY_NAMESERVERS,
  GET_DOMAINS_BYDOMAIN_REFERENCE_RESPONSE_V1_KEY_OWNER_ID,
  GET_DOMAINS_BYDOMAIN_REFERENCE_RESPONSE_V1_KEY_REGISTERED_ON,
  GET_DOMAINS_BYDOMAIN_REFERENCE_RESPONSE_V1_KEY_REGISTRY_ACCOUNT_ID,
  GET_DOMAINS_BYDOMAIN_REFERENCE_RESPONSE_V1_KEY_REGISTRY_STATUSES,
  GET_DOMAINS_BYDOMAIN_REFERENCE_RESPONSE_V1_KEY_RENEWAL_MODE,
  GET_DOMAINS_BYDOMAIN_REFERENCE_RESPONSE_V1_KEY_ROID,
  GET_DOMAINS_BYDOMAIN_REFERENCE_RESPONSE_V1_KEY_SLD,
  GET_DOMAINS_BYDOMAIN_REFERENCE_RESPONSE_V1_KEY_TLD,
  GET_DOMAINS_BYDOMAIN_REFERENCE_RESPONSE_V1_KEY_TRANSFER_LOCK,
  GET_DOMAINS_BYDOMAIN_REFERENCE_RESPONSE_V1_KEY_UPDATED_ON,
] as const;

export const GET_DOMAINS_CHECK_RESPONSE_V1_KEY_RESULTS = 'results' as keyof Get_DomainsCheck_Response_V1;

export const GET_DOMAINS_CHECK_RESPONSE_V1_KEYS = [
  GET_DOMAINS_CHECK_RESPONSE_V1_KEY_RESULTS,
] as const;

export const GET_DOMAIN_SEARCH_SUGGEST_RESPONSE_V1_KEY_META = 'meta' as keyof Get_DomainSearchSuggest_Response_V1;
export const GET_DOMAIN_SEARCH_SUGGEST_RESPONSE_V1_KEY_RESULTS = 'results' as keyof Get_DomainSearchSuggest_Response_V1;

export const GET_DOMAIN_SEARCH_SUGGEST_RESPONSE_V1_KEYS = [
  GET_DOMAIN_SEARCH_SUGGEST_RESPONSE_V1_KEY_META,
  GET_DOMAIN_SEARCH_SUGGEST_RESPONSE_V1_KEY_RESULTS,
] as const;

export const GET_DOMAINS_SUMMARY_RESPONSE_V1_KEY_DOMAINS = 'domains' as keyof Get_DomainsSummary_Response_V1;
export const GET_DOMAINS_SUMMARY_RESPONSE_V1_KEY_ORGANIZATION_ID = 'organization_id' as keyof Get_DomainsSummary_Response_V1;

export const GET_DOMAINS_SUMMARY_RESPONSE_V1_KEYS = [
  GET_DOMAINS_SUMMARY_RESPONSE_V1_KEY_DOMAINS,
  GET_DOMAINS_SUMMARY_RESPONSE_V1_KEY_ORGANIZATION_ID,
] as const;

export const GET_EMAIL_FORWARDS_RESPONSE_V1_KEY_PAGINATION = 'pagination' as keyof Get_EmailForwards_Response_V1;
export const GET_EMAIL_FORWARDS_RESPONSE_V1_KEY_RESULTS = 'results' as keyof Get_EmailForwards_Response_V1;

export const GET_EMAIL_FORWARDS_RESPONSE_V1_KEYS = [
  GET_EMAIL_FORWARDS_RESPONSE_V1_KEY_PAGINATION,
  GET_EMAIL_FORWARDS_RESPONSE_V1_KEY_RESULTS,
] as const;

export const GET_EMAIL_FORWARDS_BYEMAIL_FORWARD_ID_RESPONSE_V1_KEY_CREATED_ON = 'created_on' as keyof Get_EmailForwardsByemailForwardId_Response_V1;
export const GET_EMAIL_FORWARDS_BYEMAIL_FORWARD_ID_RESPONSE_V1_KEY_EMAIL_FORWARD_ID = 'email_forward_id' as keyof Get_EmailForwardsByemailForwardId_Response_V1;
export const GET_EMAIL_FORWARDS_BYEMAIL_FORWARD_ID_RESPONSE_V1_KEY_SOURCE_ADDRESS = 'source_address' as keyof Get_EmailForwardsByemailForwardId_Response_V1;
export const GET_EMAIL_FORWARDS_BYEMAIL_FORWARD_ID_RESPONSE_V1_KEY_STATUS = 'status' as keyof Get_EmailForwardsByemailForwardId_Response_V1;
export const GET_EMAIL_FORWARDS_BYEMAIL_FORWARD_ID_RESPONSE_V1_KEY_TARGET_ADDRESS = 'target_address' as keyof Get_EmailForwardsByemailForwardId_Response_V1;
export const GET_EMAIL_FORWARDS_BYEMAIL_FORWARD_ID_RESPONSE_V1_KEY_UPDATED_ON = 'updated_on' as keyof Get_EmailForwardsByemailForwardId_Response_V1;

export const GET_EMAIL_FORWARDS_BYEMAIL_FORWARD_ID_RESPONSE_V1_KEYS = [
  GET_EMAIL_FORWARDS_BYEMAIL_FORWARD_ID_RESPONSE_V1_KEY_CREATED_ON,
  GET_EMAIL_FORWARDS_BYEMAIL_FORWARD_ID_RESPONSE_V1_KEY_EMAIL_FORWARD_ID,
  GET_EMAIL_FORWARDS_BYEMAIL_FORWARD_ID_RESPONSE_V1_KEY_SOURCE_ADDRESS,
  GET_EMAIL_FORWARDS_BYEMAIL_FORWARD_ID_RESPONSE_V1_KEY_STATUS,
  GET_EMAIL_FORWARDS_BYEMAIL_FORWARD_ID_RESPONSE_V1_KEY_TARGET_ADDRESS,
  GET_EMAIL_FORWARDS_BYEMAIL_FORWARD_ID_RESPONSE_V1_KEY_UPDATED_ON,
] as const;

export const GET_EVENT_RESPONSE_V1_KEY_PAGINATION = 'pagination' as keyof Get_Event_Response_V1;
export const GET_EVENT_RESPONSE_V1_KEY_RESULTS = 'results' as keyof Get_Event_Response_V1;

export const GET_EVENT_RESPONSE_V1_KEYS = [
  GET_EVENT_RESPONSE_V1_KEY_PAGINATION,
  GET_EVENT_RESPONSE_V1_KEY_RESULTS,
] as const;

export const GET_EVENT_BYEVENT_ID_RESPONSE_V1_KEY_ACKNOWLEDGED_ON = 'acknowledged_on' as keyof Get_EventByeventId_Response_V1;
export const GET_EVENT_BYEVENT_ID_RESPONSE_V1_KEY_CREATED_ON = 'created_on' as keyof Get_EventByeventId_Response_V1;
export const GET_EVENT_BYEVENT_ID_RESPONSE_V1_KEY_EVENT_DATA = 'event_data' as keyof Get_EventByeventId_Response_V1;
export const GET_EVENT_BYEVENT_ID_RESPONSE_V1_KEY_EVENT_ID = 'event_id' as keyof Get_EventByeventId_Response_V1;
export const GET_EVENT_BYEVENT_ID_RESPONSE_V1_KEY_MESSAGE_QUEUE_ID = 'message_queue_id' as keyof Get_EventByeventId_Response_V1;
export const GET_EVENT_BYEVENT_ID_RESPONSE_V1_KEY_OBJECT_ID = 'object_id' as keyof Get_EventByeventId_Response_V1;
export const GET_EVENT_BYEVENT_ID_RESPONSE_V1_KEY_OBJECT_TYPE = 'object_type' as keyof Get_EventByeventId_Response_V1;
export const GET_EVENT_BYEVENT_ID_RESPONSE_V1_KEY_SOURCE = 'source' as keyof Get_EventByeventId_Response_V1;
export const GET_EVENT_BYEVENT_ID_RESPONSE_V1_KEY_SOURCE_EVENT_ID = 'source_event_id' as keyof Get_EventByeventId_Response_V1;
export const GET_EVENT_BYEVENT_ID_RESPONSE_V1_KEY_SUBTYPE = 'subtype' as keyof Get_EventByeventId_Response_V1;
export const GET_EVENT_BYEVENT_ID_RESPONSE_V1_KEY_TARGET = 'target' as keyof Get_EventByeventId_Response_V1;
export const GET_EVENT_BYEVENT_ID_RESPONSE_V1_KEY_TYPE = 'type' as keyof Get_EventByeventId_Response_V1;

export const GET_EVENT_BYEVENT_ID_RESPONSE_V1_KEYS = [
  GET_EVENT_BYEVENT_ID_RESPONSE_V1_KEY_ACKNOWLEDGED_ON,
  GET_EVENT_BYEVENT_ID_RESPONSE_V1_KEY_CREATED_ON,
  GET_EVENT_BYEVENT_ID_RESPONSE_V1_KEY_EVENT_DATA,
  GET_EVENT_BYEVENT_ID_RESPONSE_V1_KEY_EVENT_ID,
  GET_EVENT_BYEVENT_ID_RESPONSE_V1_KEY_MESSAGE_QUEUE_ID,
  GET_EVENT_BYEVENT_ID_RESPONSE_V1_KEY_OBJECT_ID,
  GET_EVENT_BYEVENT_ID_RESPONSE_V1_KEY_OBJECT_TYPE,
  GET_EVENT_BYEVENT_ID_RESPONSE_V1_KEY_SOURCE,
  GET_EVENT_BYEVENT_ID_RESPONSE_V1_KEY_SOURCE_EVENT_ID,
  GET_EVENT_BYEVENT_ID_RESPONSE_V1_KEY_SUBTYPE,
  GET_EVENT_BYEVENT_ID_RESPONSE_V1_KEY_TARGET,
  GET_EVENT_BYEVENT_ID_RESPONSE_V1_KEY_TYPE,
] as const;

export const GET_NOTIFICATIONS_RESPONSE_V1_KEY_PAGINATION = 'pagination' as keyof Get_Notifications_Response_V1;
export const GET_NOTIFICATIONS_RESPONSE_V1_KEY_RESULTS = 'results' as keyof Get_Notifications_Response_V1;

export const GET_NOTIFICATIONS_RESPONSE_V1_KEYS = [
  GET_NOTIFICATIONS_RESPONSE_V1_KEY_PAGINATION,
  GET_NOTIFICATIONS_RESPONSE_V1_KEY_RESULTS,
] as const;

export const GET_NOTIFICATIONS_BYNOTIFICATION_ID_RESPONSE_V1_KEY_CREATED_ON = 'created_on' as keyof Get_NotificationsBynotificationId_Response_V1;
export const GET_NOTIFICATIONS_BYNOTIFICATION_ID_RESPONSE_V1_KEY_NOTIFICATION = 'notification' as keyof Get_NotificationsBynotificationId_Response_V1;
export const GET_NOTIFICATIONS_BYNOTIFICATION_ID_RESPONSE_V1_KEY_NOTIFICATION_ID = 'notification_id' as keyof Get_NotificationsBynotificationId_Response_V1;
export const GET_NOTIFICATIONS_BYNOTIFICATION_ID_RESPONSE_V1_KEY_STATUS = 'status' as keyof Get_NotificationsBynotificationId_Response_V1;
export const GET_NOTIFICATIONS_BYNOTIFICATION_ID_RESPONSE_V1_KEY_UPDATED_ON = 'updated_on' as keyof Get_NotificationsBynotificationId_Response_V1;
export const GET_NOTIFICATIONS_BYNOTIFICATION_ID_RESPONSE_V1_KEY_USER_ID = 'user_id' as keyof Get_NotificationsBynotificationId_Response_V1;
export const GET_NOTIFICATIONS_BYNOTIFICATION_ID_RESPONSE_V1_KEY_USER_NOTIFICATION_ID = 'user_notification_id' as keyof Get_NotificationsBynotificationId_Response_V1;

export const GET_NOTIFICATIONS_BYNOTIFICATION_ID_RESPONSE_V1_KEYS = [
  GET_NOTIFICATIONS_BYNOTIFICATION_ID_RESPONSE_V1_KEY_CREATED_ON,
  GET_NOTIFICATIONS_BYNOTIFICATION_ID_RESPONSE_V1_KEY_NOTIFICATION,
  GET_NOTIFICATIONS_BYNOTIFICATION_ID_RESPONSE_V1_KEY_NOTIFICATION_ID,
  GET_NOTIFICATIONS_BYNOTIFICATION_ID_RESPONSE_V1_KEY_STATUS,
  GET_NOTIFICATIONS_BYNOTIFICATION_ID_RESPONSE_V1_KEY_UPDATED_ON,
  GET_NOTIFICATIONS_BYNOTIFICATION_ID_RESPONSE_V1_KEY_USER_ID,
  GET_NOTIFICATIONS_BYNOTIFICATION_ID_RESPONSE_V1_KEY_USER_NOTIFICATION_ID,
] as const;

export const GET_ORGANIZATIONS_RESPONSE_V1_KEY_PAGINATION = 'pagination' as keyof Get_Organizations_Response_V1;
export const GET_ORGANIZATIONS_RESPONSE_V1_KEY_RESULTS = 'results' as keyof Get_Organizations_Response_V1;

export const GET_ORGANIZATIONS_RESPONSE_V1_KEYS = [
  GET_ORGANIZATIONS_RESPONSE_V1_KEY_PAGINATION,
  GET_ORGANIZATIONS_RESPONSE_V1_KEY_RESULTS,
] as const;

export const GET_ORGANIZATIONS_BYORGANIZATION_ID_RESPONSE_V1_KEY_ADDRESS_1 = 'address_1' as keyof Get_OrganizationsByorganizationId_Response_V1;
export const GET_ORGANIZATIONS_BYORGANIZATION_ID_RESPONSE_V1_KEY_ADDRESS_2 = 'address_2' as keyof Get_OrganizationsByorganizationId_Response_V1;
export const GET_ORGANIZATIONS_BYORGANIZATION_ID_RESPONSE_V1_KEY_ATTRIBUTES = 'attributes' as keyof Get_OrganizationsByorganizationId_Response_V1;
export const GET_ORGANIZATIONS_BYORGANIZATION_ID_RESPONSE_V1_KEY_BUSINESS_NUMBER = 'business_number' as keyof Get_OrganizationsByorganizationId_Response_V1;
export const GET_ORGANIZATIONS_BYORGANIZATION_ID_RESPONSE_V1_KEY_CITY = 'city' as keyof Get_OrganizationsByorganizationId_Response_V1;
export const GET_ORGANIZATIONS_BYORGANIZATION_ID_RESPONSE_V1_KEY_COUNTRY_CODE = 'country_code' as keyof Get_OrganizationsByorganizationId_Response_V1;
export const GET_ORGANIZATIONS_BYORGANIZATION_ID_RESPONSE_V1_KEY_CREATED_ON = 'created_on' as keyof Get_OrganizationsByorganizationId_Response_V1;
export const GET_ORGANIZATIONS_BYORGANIZATION_ID_RESPONSE_V1_KEY_CURRENCY = 'currency' as keyof Get_OrganizationsByorganizationId_Response_V1;
export const GET_ORGANIZATIONS_BYORGANIZATION_ID_RESPONSE_V1_KEY_DEFAULT_LOCALE = 'default_locale' as keyof Get_OrganizationsByorganizationId_Response_V1;
export const GET_ORGANIZATIONS_BYORGANIZATION_ID_RESPONSE_V1_KEY_DELETED_ON = 'deleted_on' as keyof Get_OrganizationsByorganizationId_Response_V1;
export const GET_ORGANIZATIONS_BYORGANIZATION_ID_RESPONSE_V1_KEY_NAME = 'name' as keyof Get_OrganizationsByorganizationId_Response_V1;
export const GET_ORGANIZATIONS_BYORGANIZATION_ID_RESPONSE_V1_KEY_ORGANIZATION_ID = 'organization_id' as keyof Get_OrganizationsByorganizationId_Response_V1;
export const GET_ORGANIZATIONS_BYORGANIZATION_ID_RESPONSE_V1_KEY_PARENT_ORGANIZATION_ID = 'parent_organization_id' as keyof Get_OrganizationsByorganizationId_Response_V1;
export const GET_ORGANIZATIONS_BYORGANIZATION_ID_RESPONSE_V1_KEY_PLAN = 'plan' as keyof Get_OrganizationsByorganizationId_Response_V1;
export const GET_ORGANIZATIONS_BYORGANIZATION_ID_RESPONSE_V1_KEY_POSTAL_CODE = 'postal_code' as keyof Get_OrganizationsByorganizationId_Response_V1;
export const GET_ORGANIZATIONS_BYORGANIZATION_ID_RESPONSE_V1_KEY_STATE = 'state' as keyof Get_OrganizationsByorganizationId_Response_V1;
export const GET_ORGANIZATIONS_BYORGANIZATION_ID_RESPONSE_V1_KEY_STATUS = 'status' as keyof Get_OrganizationsByorganizationId_Response_V1;
export const GET_ORGANIZATIONS_BYORGANIZATION_ID_RESPONSE_V1_KEY_TAX_ID = 'tax_id' as keyof Get_OrganizationsByorganizationId_Response_V1;
export const GET_ORGANIZATIONS_BYORGANIZATION_ID_RESPONSE_V1_KEY_TAX_ID_TYPE = 'tax_id_type' as keyof Get_OrganizationsByorganizationId_Response_V1;
export const GET_ORGANIZATIONS_BYORGANIZATION_ID_RESPONSE_V1_KEY_TAX_RATE = 'tax_rate' as keyof Get_OrganizationsByorganizationId_Response_V1;
export const GET_ORGANIZATIONS_BYORGANIZATION_ID_RESPONSE_V1_KEY_USERS = 'users' as keyof Get_OrganizationsByorganizationId_Response_V1;

export const GET_ORGANIZATIONS_BYORGANIZATION_ID_RESPONSE_V1_KEYS = [
  GET_ORGANIZATIONS_BYORGANIZATION_ID_RESPONSE_V1_KEY_ADDRESS_1,
  GET_ORGANIZATIONS_BYORGANIZATION_ID_RESPONSE_V1_KEY_ADDRESS_2,
  GET_ORGANIZATIONS_BYORGANIZATION_ID_RESPONSE_V1_KEY_ATTRIBUTES,
  GET_ORGANIZATIONS_BYORGANIZATION_ID_RESPONSE_V1_KEY_BUSINESS_NUMBER,
  GET_ORGANIZATIONS_BYORGANIZATION_ID_RESPONSE_V1_KEY_CITY,
  GET_ORGANIZATIONS_BYORGANIZATION_ID_RESPONSE_V1_KEY_COUNTRY_CODE,
  GET_ORGANIZATIONS_BYORGANIZATION_ID_RESPONSE_V1_KEY_CREATED_ON,
  GET_ORGANIZATIONS_BYORGANIZATION_ID_RESPONSE_V1_KEY_CURRENCY,
  GET_ORGANIZATIONS_BYORGANIZATION_ID_RESPONSE_V1_KEY_DEFAULT_LOCALE,
  GET_ORGANIZATIONS_BYORGANIZATION_ID_RESPONSE_V1_KEY_DELETED_ON,
  GET_ORGANIZATIONS_BYORGANIZATION_ID_RESPONSE_V1_KEY_NAME,
  GET_ORGANIZATIONS_BYORGANIZATION_ID_RESPONSE_V1_KEY_ORGANIZATION_ID,
  GET_ORGANIZATIONS_BYORGANIZATION_ID_RESPONSE_V1_KEY_PARENT_ORGANIZATION_ID,
  GET_ORGANIZATIONS_BYORGANIZATION_ID_RESPONSE_V1_KEY_PLAN,
  GET_ORGANIZATIONS_BYORGANIZATION_ID_RESPONSE_V1_KEY_POSTAL_CODE,
  GET_ORGANIZATIONS_BYORGANIZATION_ID_RESPONSE_V1_KEY_STATE,
  GET_ORGANIZATIONS_BYORGANIZATION_ID_RESPONSE_V1_KEY_STATUS,
  GET_ORGANIZATIONS_BYORGANIZATION_ID_RESPONSE_V1_KEY_TAX_ID,
  GET_ORGANIZATIONS_BYORGANIZATION_ID_RESPONSE_V1_KEY_TAX_ID_TYPE,
  GET_ORGANIZATIONS_BYORGANIZATION_ID_RESPONSE_V1_KEY_TAX_RATE,
  GET_ORGANIZATIONS_BYORGANIZATION_ID_RESPONSE_V1_KEY_USERS,
] as const;

export const GET_ORGANIZATIONS_IP_RESTRICTIONS_BYIP_RESTRICTION_ID_RESPONSE_V1_KEY_CREATED_ON = 'created_on' as keyof Get_OrganizationsIpRestrictionsByipRestrictionId_Response_V1;
export const GET_ORGANIZATIONS_IP_RESTRICTIONS_BYIP_RESTRICTION_ID_RESPONSE_V1_KEY_IP_NETWORK = 'ip_network' as keyof Get_OrganizationsIpRestrictionsByipRestrictionId_Response_V1;
export const GET_ORGANIZATIONS_IP_RESTRICTIONS_BYIP_RESTRICTION_ID_RESPONSE_V1_KEY_IP_RESTRICTION_ID = 'ip_restriction_id' as keyof Get_OrganizationsIpRestrictionsByipRestrictionId_Response_V1;
export const GET_ORGANIZATIONS_IP_RESTRICTIONS_BYIP_RESTRICTION_ID_RESPONSE_V1_KEY_LAST_USED_ON = 'last_used_on' as keyof Get_OrganizationsIpRestrictionsByipRestrictionId_Response_V1;
export const GET_ORGANIZATIONS_IP_RESTRICTIONS_BYIP_RESTRICTION_ID_RESPONSE_V1_KEY_ORGANIZATION_ID = 'organization_id' as keyof Get_OrganizationsIpRestrictionsByipRestrictionId_Response_V1;

export const GET_ORGANIZATIONS_IP_RESTRICTIONS_BYIP_RESTRICTION_ID_RESPONSE_V1_KEYS = [
  GET_ORGANIZATIONS_IP_RESTRICTIONS_BYIP_RESTRICTION_ID_RESPONSE_V1_KEY_CREATED_ON,
  GET_ORGANIZATIONS_IP_RESTRICTIONS_BYIP_RESTRICTION_ID_RESPONSE_V1_KEY_IP_NETWORK,
  GET_ORGANIZATIONS_IP_RESTRICTIONS_BYIP_RESTRICTION_ID_RESPONSE_V1_KEY_IP_RESTRICTION_ID,
  GET_ORGANIZATIONS_IP_RESTRICTIONS_BYIP_RESTRICTION_ID_RESPONSE_V1_KEY_LAST_USED_ON,
  GET_ORGANIZATIONS_IP_RESTRICTIONS_BYIP_RESTRICTION_ID_RESPONSE_V1_KEY_ORGANIZATION_ID,
] as const;

export const GET_ORGANIZATIONS_USERS_RESPONSE_V1_KEY_PAGINATION = 'pagination' as keyof Get_OrganizationsUsers_Response_V1;
export const GET_ORGANIZATIONS_USERS_RESPONSE_V1_KEY_RESULTS = 'results' as keyof Get_OrganizationsUsers_Response_V1;

export const GET_ORGANIZATIONS_USERS_RESPONSE_V1_KEYS = [
  GET_ORGANIZATIONS_USERS_RESPONSE_V1_KEY_PAGINATION,
  GET_ORGANIZATIONS_USERS_RESPONSE_V1_KEY_RESULTS,
] as const;

export const GET_USERS_BYUSER_ID_RESPONSE_V1_KEY_CREATED_ON = 'created_on' as keyof Get_UsersByuserId_Response_V1;
export const GET_USERS_BYUSER_ID_RESPONSE_V1_KEY_DELETED_ON = 'deleted_on' as keyof Get_UsersByuserId_Response_V1;
export const GET_USERS_BYUSER_ID_RESPONSE_V1_KEY_EMAIL = 'email' as keyof Get_UsersByuserId_Response_V1;
export const GET_USERS_BYUSER_ID_RESPONSE_V1_KEY_FIRST_NAME = 'first_name' as keyof Get_UsersByuserId_Response_V1;
export const GET_USERS_BYUSER_ID_RESPONSE_V1_KEY_LAST_NAME = 'last_name' as keyof Get_UsersByuserId_Response_V1;
export const GET_USERS_BYUSER_ID_RESPONSE_V1_KEY_LOCALE = 'locale' as keyof Get_UsersByuserId_Response_V1;
export const GET_USERS_BYUSER_ID_RESPONSE_V1_KEY_ORGANIZATION_ID = 'organization_id' as keyof Get_UsersByuserId_Response_V1;
export const GET_USERS_BYUSER_ID_RESPONSE_V1_KEY_PHONE = 'phone' as keyof Get_UsersByuserId_Response_V1;
export const GET_USERS_BYUSER_ID_RESPONSE_V1_KEY_STATUS = 'status' as keyof Get_UsersByuserId_Response_V1;
export const GET_USERS_BYUSER_ID_RESPONSE_V1_KEY_UPDATED_ON = 'updated_on' as keyof Get_UsersByuserId_Response_V1;
export const GET_USERS_BYUSER_ID_RESPONSE_V1_KEY_USER_ATTRIBUTES = 'user_attributes' as keyof Get_UsersByuserId_Response_V1;
export const GET_USERS_BYUSER_ID_RESPONSE_V1_KEY_USER_ID = 'user_id' as keyof Get_UsersByuserId_Response_V1;
export const GET_USERS_BYUSER_ID_RESPONSE_V1_KEY_USERNAME = 'username' as keyof Get_UsersByuserId_Response_V1;

export const GET_USERS_BYUSER_ID_RESPONSE_V1_KEYS = [
  GET_USERS_BYUSER_ID_RESPONSE_V1_KEY_CREATED_ON,
  GET_USERS_BYUSER_ID_RESPONSE_V1_KEY_DELETED_ON,
  GET_USERS_BYUSER_ID_RESPONSE_V1_KEY_EMAIL,
  GET_USERS_BYUSER_ID_RESPONSE_V1_KEY_FIRST_NAME,
  GET_USERS_BYUSER_ID_RESPONSE_V1_KEY_LAST_NAME,
  GET_USERS_BYUSER_ID_RESPONSE_V1_KEY_LOCALE,
  GET_USERS_BYUSER_ID_RESPONSE_V1_KEY_ORGANIZATION_ID,
  GET_USERS_BYUSER_ID_RESPONSE_V1_KEY_PHONE,
  GET_USERS_BYUSER_ID_RESPONSE_V1_KEY_STATUS,
  GET_USERS_BYUSER_ID_RESPONSE_V1_KEY_UPDATED_ON,
  GET_USERS_BYUSER_ID_RESPONSE_V1_KEY_USER_ATTRIBUTES,
  GET_USERS_BYUSER_ID_RESPONSE_V1_KEY_USER_ID,
  GET_USERS_BYUSER_ID_RESPONSE_V1_KEY_USERNAME,
] as const;

export const GET_USERS_BYUSER_ID_PERMISSIONS_RESPONSE_V1_KEY_PERMISSIONS = 'permissions' as keyof Get_UsersByuserIdPermissions_Response_V1;

export const GET_USERS_BYUSER_ID_PERMISSIONS_RESPONSE_V1_KEYS = [
  GET_USERS_BYUSER_ID_PERMISSIONS_RESPONSE_V1_KEY_PERMISSIONS,
] as const;

export const GET_USERS_BYUSER_ID_ROLES_RESPONSE_V1_KEY_RELATIONS = 'relations' as keyof Get_UsersByuserIdRoles_Response_V1;

export const GET_USERS_BYUSER_ID_ROLES_RESPONSE_V1_KEYS = [
  GET_USERS_BYUSER_ID_ROLES_RESPONSE_V1_KEY_RELATIONS,
] as const;

export const GET_USERS_ME_RESPONSE_V1_KEY_CREATED_ON = 'created_on' as keyof Get_UsersMe_Response_V1;
export const GET_USERS_ME_RESPONSE_V1_KEY_DELETED_ON = 'deleted_on' as keyof Get_UsersMe_Response_V1;
export const GET_USERS_ME_RESPONSE_V1_KEY_EMAIL = 'email' as keyof Get_UsersMe_Response_V1;
export const GET_USERS_ME_RESPONSE_V1_KEY_FIRST_NAME = 'first_name' as keyof Get_UsersMe_Response_V1;
export const GET_USERS_ME_RESPONSE_V1_KEY_LAST_NAME = 'last_name' as keyof Get_UsersMe_Response_V1;
export const GET_USERS_ME_RESPONSE_V1_KEY_LOCALE = 'locale' as keyof Get_UsersMe_Response_V1;
export const GET_USERS_ME_RESPONSE_V1_KEY_ORGANIZATION_ID = 'organization_id' as keyof Get_UsersMe_Response_V1;
export const GET_USERS_ME_RESPONSE_V1_KEY_PERMISSIONS = 'permissions' as keyof Get_UsersMe_Response_V1;
export const GET_USERS_ME_RESPONSE_V1_KEY_PHONE = 'phone' as keyof Get_UsersMe_Response_V1;
export const GET_USERS_ME_RESPONSE_V1_KEY_RELATIONS = 'relations' as keyof Get_UsersMe_Response_V1;
export const GET_USERS_ME_RESPONSE_V1_KEY_STATUS = 'status' as keyof Get_UsersMe_Response_V1;
export const GET_USERS_ME_RESPONSE_V1_KEY_UPDATED_ON = 'updated_on' as keyof Get_UsersMe_Response_V1;
export const GET_USERS_ME_RESPONSE_V1_KEY_USER_ATTRIBUTES = 'user_attributes' as keyof Get_UsersMe_Response_V1;
export const GET_USERS_ME_RESPONSE_V1_KEY_USER_ID = 'user_id' as keyof Get_UsersMe_Response_V1;
export const GET_USERS_ME_RESPONSE_V1_KEY_USERNAME = 'username' as keyof Get_UsersMe_Response_V1;

export const GET_USERS_ME_RESPONSE_V1_KEYS = [
  GET_USERS_ME_RESPONSE_V1_KEY_CREATED_ON,
  GET_USERS_ME_RESPONSE_V1_KEY_DELETED_ON,
  GET_USERS_ME_RESPONSE_V1_KEY_EMAIL,
  GET_USERS_ME_RESPONSE_V1_KEY_FIRST_NAME,
  GET_USERS_ME_RESPONSE_V1_KEY_LAST_NAME,
  GET_USERS_ME_RESPONSE_V1_KEY_LOCALE,
  GET_USERS_ME_RESPONSE_V1_KEY_ORGANIZATION_ID,
  GET_USERS_ME_RESPONSE_V1_KEY_PERMISSIONS,
  GET_USERS_ME_RESPONSE_V1_KEY_PHONE,
  GET_USERS_ME_RESPONSE_V1_KEY_RELATIONS,
  GET_USERS_ME_RESPONSE_V1_KEY_STATUS,
  GET_USERS_ME_RESPONSE_V1_KEY_UPDATED_ON,
  GET_USERS_ME_RESPONSE_V1_KEY_USER_ATTRIBUTES,
  GET_USERS_ME_RESPONSE_V1_KEY_USER_ID,
  GET_USERS_ME_RESPONSE_V1_KEY_USERNAME,
] as const;

export const PATCH_DOMAINS_BYDOMAIN_REFERENCE_RESPONSE_V1_KEY_AUTH_CODE = 'auth_code' as keyof Patch_DomainsBydomainReference_Response_V1;
export const PATCH_DOMAINS_BYDOMAIN_REFERENCE_RESPONSE_V1_KEY_AUTH_CODE_EXPIRES_ON = 'auth_code_expires_on' as keyof Patch_DomainsBydomainReference_Response_V1;
export const PATCH_DOMAINS_BYDOMAIN_REFERENCE_RESPONSE_V1_KEY_CANCELED_ON = 'canceled_on' as keyof Patch_DomainsBydomainReference_Response_V1;
export const PATCH_DOMAINS_BYDOMAIN_REFERENCE_RESPONSE_V1_KEY_CONTACTS = 'contacts' as keyof Patch_DomainsBydomainReference_Response_V1;
export const PATCH_DOMAINS_BYDOMAIN_REFERENCE_RESPONSE_V1_KEY_CREATED_ON = 'created_on' as keyof Patch_DomainsBydomainReference_Response_V1;
export const PATCH_DOMAINS_BYDOMAIN_REFERENCE_RESPONSE_V1_KEY_DELETED_ON = 'deleted_on' as keyof Patch_DomainsBydomainReference_Response_V1;
export const PATCH_DOMAINS_BYDOMAIN_REFERENCE_RESPONSE_V1_KEY_DOMAIN_ID = 'domain_id' as keyof Patch_DomainsBydomainReference_Response_V1;
export const PATCH_DOMAINS_BYDOMAIN_REFERENCE_RESPONSE_V1_KEY_EXPIRES_ON = 'expires_on' as keyof Patch_DomainsBydomainReference_Response_V1;
export const PATCH_DOMAINS_BYDOMAIN_REFERENCE_RESPONSE_V1_KEY_NAME = 'name' as keyof Patch_DomainsBydomainReference_Response_V1;
export const PATCH_DOMAINS_BYDOMAIN_REFERENCE_RESPONSE_V1_KEY_NAMESERVERS = 'nameservers' as keyof Patch_DomainsBydomainReference_Response_V1;
export const PATCH_DOMAINS_BYDOMAIN_REFERENCE_RESPONSE_V1_KEY_OWNER_ID = 'owner_id' as keyof Patch_DomainsBydomainReference_Response_V1;
export const PATCH_DOMAINS_BYDOMAIN_REFERENCE_RESPONSE_V1_KEY_REGISTERED_ON = 'registered_on' as keyof Patch_DomainsBydomainReference_Response_V1;
export const PATCH_DOMAINS_BYDOMAIN_REFERENCE_RESPONSE_V1_KEY_REGISTRY_ACCOUNT_ID = 'registry_account_id' as keyof Patch_DomainsBydomainReference_Response_V1;
export const PATCH_DOMAINS_BYDOMAIN_REFERENCE_RESPONSE_V1_KEY_REGISTRY_STATUSES = 'registry_statuses' as keyof Patch_DomainsBydomainReference_Response_V1;
export const PATCH_DOMAINS_BYDOMAIN_REFERENCE_RESPONSE_V1_KEY_RENEWAL_MODE = 'renewal_mode' as keyof Patch_DomainsBydomainReference_Response_V1;
export const PATCH_DOMAINS_BYDOMAIN_REFERENCE_RESPONSE_V1_KEY_ROID = 'roid' as keyof Patch_DomainsBydomainReference_Response_V1;
export const PATCH_DOMAINS_BYDOMAIN_REFERENCE_RESPONSE_V1_KEY_SLD = 'sld' as keyof Patch_DomainsBydomainReference_Response_V1;
export const PATCH_DOMAINS_BYDOMAIN_REFERENCE_RESPONSE_V1_KEY_TLD = 'tld' as keyof Patch_DomainsBydomainReference_Response_V1;
export const PATCH_DOMAINS_BYDOMAIN_REFERENCE_RESPONSE_V1_KEY_TRANSFER_LOCK = 'transfer_lock' as keyof Patch_DomainsBydomainReference_Response_V1;
export const PATCH_DOMAINS_BYDOMAIN_REFERENCE_RESPONSE_V1_KEY_UPDATED_ON = 'updated_on' as keyof Patch_DomainsBydomainReference_Response_V1;

export const PATCH_DOMAINS_BYDOMAIN_REFERENCE_RESPONSE_V1_KEYS = [
  PATCH_DOMAINS_BYDOMAIN_REFERENCE_RESPONSE_V1_KEY_AUTH_CODE,
  PATCH_DOMAINS_BYDOMAIN_REFERENCE_RESPONSE_V1_KEY_AUTH_CODE_EXPIRES_ON,
  PATCH_DOMAINS_BYDOMAIN_REFERENCE_RESPONSE_V1_KEY_CANCELED_ON,
  PATCH_DOMAINS_BYDOMAIN_REFERENCE_RESPONSE_V1_KEY_CONTACTS,
  PATCH_DOMAINS_BYDOMAIN_REFERENCE_RESPONSE_V1_KEY_CREATED_ON,
  PATCH_DOMAINS_BYDOMAIN_REFERENCE_RESPONSE_V1_KEY_DELETED_ON,
  PATCH_DOMAINS_BYDOMAIN_REFERENCE_RESPONSE_V1_KEY_DOMAIN_ID,
  PATCH_DOMAINS_BYDOMAIN_REFERENCE_RESPONSE_V1_KEY_EXPIRES_ON,
  PATCH_DOMAINS_BYDOMAIN_REFERENCE_RESPONSE_V1_KEY_NAME,
  PATCH_DOMAINS_BYDOMAIN_REFERENCE_RESPONSE_V1_KEY_NAMESERVERS,
  PATCH_DOMAINS_BYDOMAIN_REFERENCE_RESPONSE_V1_KEY_OWNER_ID,
  PATCH_DOMAINS_BYDOMAIN_REFERENCE_RESPONSE_V1_KEY_REGISTERED_ON,
  PATCH_DOMAINS_BYDOMAIN_REFERENCE_RESPONSE_V1_KEY_REGISTRY_ACCOUNT_ID,
  PATCH_DOMAINS_BYDOMAIN_REFERENCE_RESPONSE_V1_KEY_REGISTRY_STATUSES,
  PATCH_DOMAINS_BYDOMAIN_REFERENCE_RESPONSE_V1_KEY_RENEWAL_MODE,
  PATCH_DOMAINS_BYDOMAIN_REFERENCE_RESPONSE_V1_KEY_ROID,
  PATCH_DOMAINS_BYDOMAIN_REFERENCE_RESPONSE_V1_KEY_SLD,
  PATCH_DOMAINS_BYDOMAIN_REFERENCE_RESPONSE_V1_KEY_TLD,
  PATCH_DOMAINS_BYDOMAIN_REFERENCE_RESPONSE_V1_KEY_TRANSFER_LOCK,
  PATCH_DOMAINS_BYDOMAIN_REFERENCE_RESPONSE_V1_KEY_UPDATED_ON,
] as const;

export const PATCH_EMAIL_FORWARDS_BYEMAIL_FORWARD_ID_RESPONSE_V1_KEY_CREATED_ON = 'created_on' as keyof Patch_EmailForwardsByemailForwardId_Response_V1;
export const PATCH_EMAIL_FORWARDS_BYEMAIL_FORWARD_ID_RESPONSE_V1_KEY_EMAIL_FORWARD_ID = 'email_forward_id' as keyof Patch_EmailForwardsByemailForwardId_Response_V1;
export const PATCH_EMAIL_FORWARDS_BYEMAIL_FORWARD_ID_RESPONSE_V1_KEY_SOURCE_ADDRESS = 'source_address' as keyof Patch_EmailForwardsByemailForwardId_Response_V1;
export const PATCH_EMAIL_FORWARDS_BYEMAIL_FORWARD_ID_RESPONSE_V1_KEY_STATUS = 'status' as keyof Patch_EmailForwardsByemailForwardId_Response_V1;
export const PATCH_EMAIL_FORWARDS_BYEMAIL_FORWARD_ID_RESPONSE_V1_KEY_TARGET_ADDRESS = 'target_address' as keyof Patch_EmailForwardsByemailForwardId_Response_V1;
export const PATCH_EMAIL_FORWARDS_BYEMAIL_FORWARD_ID_RESPONSE_V1_KEY_UPDATED_ON = 'updated_on' as keyof Patch_EmailForwardsByemailForwardId_Response_V1;

export const PATCH_EMAIL_FORWARDS_BYEMAIL_FORWARD_ID_RESPONSE_V1_KEYS = [
  PATCH_EMAIL_FORWARDS_BYEMAIL_FORWARD_ID_RESPONSE_V1_KEY_CREATED_ON,
  PATCH_EMAIL_FORWARDS_BYEMAIL_FORWARD_ID_RESPONSE_V1_KEY_EMAIL_FORWARD_ID,
  PATCH_EMAIL_FORWARDS_BYEMAIL_FORWARD_ID_RESPONSE_V1_KEY_SOURCE_ADDRESS,
  PATCH_EMAIL_FORWARDS_BYEMAIL_FORWARD_ID_RESPONSE_V1_KEY_STATUS,
  PATCH_EMAIL_FORWARDS_BYEMAIL_FORWARD_ID_RESPONSE_V1_KEY_TARGET_ADDRESS,
  PATCH_EMAIL_FORWARDS_BYEMAIL_FORWARD_ID_RESPONSE_V1_KEY_UPDATED_ON,
] as const;

export const PATCH_ORGANIZATIONS_BYORGANIZATION_ID_PLAN_RESPONSE_V1_KEY_ADDRESS_1 = 'address_1' as keyof Patch_OrganizationsByorganizationIdPlan_Response_V1;
export const PATCH_ORGANIZATIONS_BYORGANIZATION_ID_PLAN_RESPONSE_V1_KEY_ADDRESS_2 = 'address_2' as keyof Patch_OrganizationsByorganizationIdPlan_Response_V1;
export const PATCH_ORGANIZATIONS_BYORGANIZATION_ID_PLAN_RESPONSE_V1_KEY_ATTRIBUTES = 'attributes' as keyof Patch_OrganizationsByorganizationIdPlan_Response_V1;
export const PATCH_ORGANIZATIONS_BYORGANIZATION_ID_PLAN_RESPONSE_V1_KEY_BUSINESS_NUMBER = 'business_number' as keyof Patch_OrganizationsByorganizationIdPlan_Response_V1;
export const PATCH_ORGANIZATIONS_BYORGANIZATION_ID_PLAN_RESPONSE_V1_KEY_CITY = 'city' as keyof Patch_OrganizationsByorganizationIdPlan_Response_V1;
export const PATCH_ORGANIZATIONS_BYORGANIZATION_ID_PLAN_RESPONSE_V1_KEY_COUNTRY_CODE = 'country_code' as keyof Patch_OrganizationsByorganizationIdPlan_Response_V1;
export const PATCH_ORGANIZATIONS_BYORGANIZATION_ID_PLAN_RESPONSE_V1_KEY_CREATED_ON = 'created_on' as keyof Patch_OrganizationsByorganizationIdPlan_Response_V1;
export const PATCH_ORGANIZATIONS_BYORGANIZATION_ID_PLAN_RESPONSE_V1_KEY_CURRENCY = 'currency' as keyof Patch_OrganizationsByorganizationIdPlan_Response_V1;
export const PATCH_ORGANIZATIONS_BYORGANIZATION_ID_PLAN_RESPONSE_V1_KEY_DEFAULT_LOCALE = 'default_locale' as keyof Patch_OrganizationsByorganizationIdPlan_Response_V1;
export const PATCH_ORGANIZATIONS_BYORGANIZATION_ID_PLAN_RESPONSE_V1_KEY_DELETED_ON = 'deleted_on' as keyof Patch_OrganizationsByorganizationIdPlan_Response_V1;
export const PATCH_ORGANIZATIONS_BYORGANIZATION_ID_PLAN_RESPONSE_V1_KEY_NAME = 'name' as keyof Patch_OrganizationsByorganizationIdPlan_Response_V1;
export const PATCH_ORGANIZATIONS_BYORGANIZATION_ID_PLAN_RESPONSE_V1_KEY_ORGANIZATION_ID = 'organization_id' as keyof Patch_OrganizationsByorganizationIdPlan_Response_V1;
export const PATCH_ORGANIZATIONS_BYORGANIZATION_ID_PLAN_RESPONSE_V1_KEY_PARENT_ORGANIZATION_ID = 'parent_organization_id' as keyof Patch_OrganizationsByorganizationIdPlan_Response_V1;
export const PATCH_ORGANIZATIONS_BYORGANIZATION_ID_PLAN_RESPONSE_V1_KEY_PLAN = 'plan' as keyof Patch_OrganizationsByorganizationIdPlan_Response_V1;
export const PATCH_ORGANIZATIONS_BYORGANIZATION_ID_PLAN_RESPONSE_V1_KEY_POSTAL_CODE = 'postal_code' as keyof Patch_OrganizationsByorganizationIdPlan_Response_V1;
export const PATCH_ORGANIZATIONS_BYORGANIZATION_ID_PLAN_RESPONSE_V1_KEY_STATE = 'state' as keyof Patch_OrganizationsByorganizationIdPlan_Response_V1;
export const PATCH_ORGANIZATIONS_BYORGANIZATION_ID_PLAN_RESPONSE_V1_KEY_STATUS = 'status' as keyof Patch_OrganizationsByorganizationIdPlan_Response_V1;
export const PATCH_ORGANIZATIONS_BYORGANIZATION_ID_PLAN_RESPONSE_V1_KEY_TAX_ID = 'tax_id' as keyof Patch_OrganizationsByorganizationIdPlan_Response_V1;
export const PATCH_ORGANIZATIONS_BYORGANIZATION_ID_PLAN_RESPONSE_V1_KEY_TAX_ID_TYPE = 'tax_id_type' as keyof Patch_OrganizationsByorganizationIdPlan_Response_V1;
export const PATCH_ORGANIZATIONS_BYORGANIZATION_ID_PLAN_RESPONSE_V1_KEY_TAX_RATE = 'tax_rate' as keyof Patch_OrganizationsByorganizationIdPlan_Response_V1;
export const PATCH_ORGANIZATIONS_BYORGANIZATION_ID_PLAN_RESPONSE_V1_KEY_USERS = 'users' as keyof Patch_OrganizationsByorganizationIdPlan_Response_V1;

export const PATCH_ORGANIZATIONS_BYORGANIZATION_ID_PLAN_RESPONSE_V1_KEYS = [
  PATCH_ORGANIZATIONS_BYORGANIZATION_ID_PLAN_RESPONSE_V1_KEY_ADDRESS_1,
  PATCH_ORGANIZATIONS_BYORGANIZATION_ID_PLAN_RESPONSE_V1_KEY_ADDRESS_2,
  PATCH_ORGANIZATIONS_BYORGANIZATION_ID_PLAN_RESPONSE_V1_KEY_ATTRIBUTES,
  PATCH_ORGANIZATIONS_BYORGANIZATION_ID_PLAN_RESPONSE_V1_KEY_BUSINESS_NUMBER,
  PATCH_ORGANIZATIONS_BYORGANIZATION_ID_PLAN_RESPONSE_V1_KEY_CITY,
  PATCH_ORGANIZATIONS_BYORGANIZATION_ID_PLAN_RESPONSE_V1_KEY_COUNTRY_CODE,
  PATCH_ORGANIZATIONS_BYORGANIZATION_ID_PLAN_RESPONSE_V1_KEY_CREATED_ON,
  PATCH_ORGANIZATIONS_BYORGANIZATION_ID_PLAN_RESPONSE_V1_KEY_CURRENCY,
  PATCH_ORGANIZATIONS_BYORGANIZATION_ID_PLAN_RESPONSE_V1_KEY_DEFAULT_LOCALE,
  PATCH_ORGANIZATIONS_BYORGANIZATION_ID_PLAN_RESPONSE_V1_KEY_DELETED_ON,
  PATCH_ORGANIZATIONS_BYORGANIZATION_ID_PLAN_RESPONSE_V1_KEY_NAME,
  PATCH_ORGANIZATIONS_BYORGANIZATION_ID_PLAN_RESPONSE_V1_KEY_ORGANIZATION_ID,
  PATCH_ORGANIZATIONS_BYORGANIZATION_ID_PLAN_RESPONSE_V1_KEY_PARENT_ORGANIZATION_ID,
  PATCH_ORGANIZATIONS_BYORGANIZATION_ID_PLAN_RESPONSE_V1_KEY_PLAN,
  PATCH_ORGANIZATIONS_BYORGANIZATION_ID_PLAN_RESPONSE_V1_KEY_POSTAL_CODE,
  PATCH_ORGANIZATIONS_BYORGANIZATION_ID_PLAN_RESPONSE_V1_KEY_STATE,
  PATCH_ORGANIZATIONS_BYORGANIZATION_ID_PLAN_RESPONSE_V1_KEY_STATUS,
  PATCH_ORGANIZATIONS_BYORGANIZATION_ID_PLAN_RESPONSE_V1_KEY_TAX_ID,
  PATCH_ORGANIZATIONS_BYORGANIZATION_ID_PLAN_RESPONSE_V1_KEY_TAX_ID_TYPE,
  PATCH_ORGANIZATIONS_BYORGANIZATION_ID_PLAN_RESPONSE_V1_KEY_TAX_RATE,
  PATCH_ORGANIZATIONS_BYORGANIZATION_ID_PLAN_RESPONSE_V1_KEY_USERS,
] as const;

export const PATCH_ORGANIZATIONS_IP_RESTRICTIONS_BYIP_RESTRICTION_ID_RESPONSE_V1_KEY_CREATED_ON = 'created_on' as keyof Patch_OrganizationsIpRestrictionsByipRestrictionId_Response_V1;
export const PATCH_ORGANIZATIONS_IP_RESTRICTIONS_BYIP_RESTRICTION_ID_RESPONSE_V1_KEY_IP_NETWORK = 'ip_network' as keyof Patch_OrganizationsIpRestrictionsByipRestrictionId_Response_V1;
export const PATCH_ORGANIZATIONS_IP_RESTRICTIONS_BYIP_RESTRICTION_ID_RESPONSE_V1_KEY_IP_RESTRICTION_ID = 'ip_restriction_id' as keyof Patch_OrganizationsIpRestrictionsByipRestrictionId_Response_V1;
export const PATCH_ORGANIZATIONS_IP_RESTRICTIONS_BYIP_RESTRICTION_ID_RESPONSE_V1_KEY_LAST_USED_ON = 'last_used_on' as keyof Patch_OrganizationsIpRestrictionsByipRestrictionId_Response_V1;
export const PATCH_ORGANIZATIONS_IP_RESTRICTIONS_BYIP_RESTRICTION_ID_RESPONSE_V1_KEY_ORGANIZATION_ID = 'organization_id' as keyof Patch_OrganizationsIpRestrictionsByipRestrictionId_Response_V1;

export const PATCH_ORGANIZATIONS_IP_RESTRICTIONS_BYIP_RESTRICTION_ID_RESPONSE_V1_KEYS = [
  PATCH_ORGANIZATIONS_IP_RESTRICTIONS_BYIP_RESTRICTION_ID_RESPONSE_V1_KEY_CREATED_ON,
  PATCH_ORGANIZATIONS_IP_RESTRICTIONS_BYIP_RESTRICTION_ID_RESPONSE_V1_KEY_IP_NETWORK,
  PATCH_ORGANIZATIONS_IP_RESTRICTIONS_BYIP_RESTRICTION_ID_RESPONSE_V1_KEY_IP_RESTRICTION_ID,
  PATCH_ORGANIZATIONS_IP_RESTRICTIONS_BYIP_RESTRICTION_ID_RESPONSE_V1_KEY_LAST_USED_ON,
  PATCH_ORGANIZATIONS_IP_RESTRICTIONS_BYIP_RESTRICTION_ID_RESPONSE_V1_KEY_ORGANIZATION_ID,
] as const;

export const PATCH_USERS_BYUSER_ID_RESPONSE_V1_KEY_CREATED_ON = 'created_on' as keyof Patch_UsersByuserId_Response_V1;
export const PATCH_USERS_BYUSER_ID_RESPONSE_V1_KEY_DELETED_ON = 'deleted_on' as keyof Patch_UsersByuserId_Response_V1;
export const PATCH_USERS_BYUSER_ID_RESPONSE_V1_KEY_EMAIL = 'email' as keyof Patch_UsersByuserId_Response_V1;
export const PATCH_USERS_BYUSER_ID_RESPONSE_V1_KEY_FIRST_NAME = 'first_name' as keyof Patch_UsersByuserId_Response_V1;
export const PATCH_USERS_BYUSER_ID_RESPONSE_V1_KEY_LAST_NAME = 'last_name' as keyof Patch_UsersByuserId_Response_V1;
export const PATCH_USERS_BYUSER_ID_RESPONSE_V1_KEY_LOCALE = 'locale' as keyof Patch_UsersByuserId_Response_V1;
export const PATCH_USERS_BYUSER_ID_RESPONSE_V1_KEY_ORGANIZATION_ID = 'organization_id' as keyof Patch_UsersByuserId_Response_V1;
export const PATCH_USERS_BYUSER_ID_RESPONSE_V1_KEY_PHONE = 'phone' as keyof Patch_UsersByuserId_Response_V1;
export const PATCH_USERS_BYUSER_ID_RESPONSE_V1_KEY_STATUS = 'status' as keyof Patch_UsersByuserId_Response_V1;
export const PATCH_USERS_BYUSER_ID_RESPONSE_V1_KEY_UPDATED_ON = 'updated_on' as keyof Patch_UsersByuserId_Response_V1;
export const PATCH_USERS_BYUSER_ID_RESPONSE_V1_KEY_USER_ATTRIBUTES = 'user_attributes' as keyof Patch_UsersByuserId_Response_V1;
export const PATCH_USERS_BYUSER_ID_RESPONSE_V1_KEY_USER_ID = 'user_id' as keyof Patch_UsersByuserId_Response_V1;
export const PATCH_USERS_BYUSER_ID_RESPONSE_V1_KEY_USERNAME = 'username' as keyof Patch_UsersByuserId_Response_V1;

export const PATCH_USERS_BYUSER_ID_RESPONSE_V1_KEYS = [
  PATCH_USERS_BYUSER_ID_RESPONSE_V1_KEY_CREATED_ON,
  PATCH_USERS_BYUSER_ID_RESPONSE_V1_KEY_DELETED_ON,
  PATCH_USERS_BYUSER_ID_RESPONSE_V1_KEY_EMAIL,
  PATCH_USERS_BYUSER_ID_RESPONSE_V1_KEY_FIRST_NAME,
  PATCH_USERS_BYUSER_ID_RESPONSE_V1_KEY_LAST_NAME,
  PATCH_USERS_BYUSER_ID_RESPONSE_V1_KEY_LOCALE,
  PATCH_USERS_BYUSER_ID_RESPONSE_V1_KEY_ORGANIZATION_ID,
  PATCH_USERS_BYUSER_ID_RESPONSE_V1_KEY_PHONE,
  PATCH_USERS_BYUSER_ID_RESPONSE_V1_KEY_STATUS,
  PATCH_USERS_BYUSER_ID_RESPONSE_V1_KEY_UPDATED_ON,
  PATCH_USERS_BYUSER_ID_RESPONSE_V1_KEY_USER_ATTRIBUTES,
  PATCH_USERS_BYUSER_ID_RESPONSE_V1_KEY_USER_ID,
  PATCH_USERS_BYUSER_ID_RESPONSE_V1_KEY_USERNAME,
] as const;

export const PATCH_USERS_BYUSER_ID_ROLES_RESPONSE_V1_KEY_RELATIONS = 'relations' as keyof Patch_UsersByuserIdRoles_Response_V1;

export const PATCH_USERS_BYUSER_ID_ROLES_RESPONSE_V1_KEYS = [
  PATCH_USERS_BYUSER_ID_ROLES_RESPONSE_V1_KEY_RELATIONS,
] as const;

export const POST_CONTACTS_RESPONSE_V1_KEY_CITY = 'city' as keyof Post_Contacts_Response_V1;
export const POST_CONTACTS_RESPONSE_V1_KEY_CONTACT_ID = 'contact_id' as keyof Post_Contacts_Response_V1;
export const POST_CONTACTS_RESPONSE_V1_KEY_COUNTRY = 'country' as keyof Post_Contacts_Response_V1;
export const POST_CONTACTS_RESPONSE_V1_KEY_CREATED_ON = 'created_on' as keyof Post_Contacts_Response_V1;
export const POST_CONTACTS_RESPONSE_V1_KEY_DELETED_ON = 'deleted_on' as keyof Post_Contacts_Response_V1;
export const POST_CONTACTS_RESPONSE_V1_KEY_DISCLOSE = 'disclose' as keyof Post_Contacts_Response_V1;
export const POST_CONTACTS_RESPONSE_V1_KEY_EMAIL = 'email' as keyof Post_Contacts_Response_V1;
export const POST_CONTACTS_RESPONSE_V1_KEY_FAX = 'fax' as keyof Post_Contacts_Response_V1;
export const POST_CONTACTS_RESPONSE_V1_KEY_FIRST_NAME = 'first_name' as keyof Post_Contacts_Response_V1;
export const POST_CONTACTS_RESPONSE_V1_KEY_LAST_NAME = 'last_name' as keyof Post_Contacts_Response_V1;
export const POST_CONTACTS_RESPONSE_V1_KEY_ORG = 'org' as keyof Post_Contacts_Response_V1;
export const POST_CONTACTS_RESPONSE_V1_KEY_ORGANIZATION_ID = 'organization_id' as keyof Post_Contacts_Response_V1;
export const POST_CONTACTS_RESPONSE_V1_KEY_PHONE = 'phone' as keyof Post_Contacts_Response_V1;
export const POST_CONTACTS_RESPONSE_V1_KEY_POSTAL_CODE = 'postal_code' as keyof Post_Contacts_Response_V1;
export const POST_CONTACTS_RESPONSE_V1_KEY_STATE = 'state' as keyof Post_Contacts_Response_V1;
export const POST_CONTACTS_RESPONSE_V1_KEY_STREET = 'street' as keyof Post_Contacts_Response_V1;
export const POST_CONTACTS_RESPONSE_V1_KEY_TITLE = 'title' as keyof Post_Contacts_Response_V1;

export const POST_CONTACTS_RESPONSE_V1_KEYS = [
  POST_CONTACTS_RESPONSE_V1_KEY_CITY,
  POST_CONTACTS_RESPONSE_V1_KEY_CONTACT_ID,
  POST_CONTACTS_RESPONSE_V1_KEY_COUNTRY,
  POST_CONTACTS_RESPONSE_V1_KEY_CREATED_ON,
  POST_CONTACTS_RESPONSE_V1_KEY_DELETED_ON,
  POST_CONTACTS_RESPONSE_V1_KEY_DISCLOSE,
  POST_CONTACTS_RESPONSE_V1_KEY_EMAIL,
  POST_CONTACTS_RESPONSE_V1_KEY_FAX,
  POST_CONTACTS_RESPONSE_V1_KEY_FIRST_NAME,
  POST_CONTACTS_RESPONSE_V1_KEY_LAST_NAME,
  POST_CONTACTS_RESPONSE_V1_KEY_ORG,
  POST_CONTACTS_RESPONSE_V1_KEY_ORGANIZATION_ID,
  POST_CONTACTS_RESPONSE_V1_KEY_PHONE,
  POST_CONTACTS_RESPONSE_V1_KEY_POSTAL_CODE,
  POST_CONTACTS_RESPONSE_V1_KEY_STATE,
  POST_CONTACTS_RESPONSE_V1_KEY_STREET,
  POST_CONTACTS_RESPONSE_V1_KEY_TITLE,
] as const;

export const POST_DOMAINS_RESPONSE_V1_KEY_AUTH_CODE = 'auth_code' as keyof Post_Domains_Response_V1;
export const POST_DOMAINS_RESPONSE_V1_KEY_AUTH_CODE_EXPIRES_ON = 'auth_code_expires_on' as keyof Post_Domains_Response_V1;
export const POST_DOMAINS_RESPONSE_V1_KEY_CANCELED_ON = 'canceled_on' as keyof Post_Domains_Response_V1;
export const POST_DOMAINS_RESPONSE_V1_KEY_CONTACTS = 'contacts' as keyof Post_Domains_Response_V1;
export const POST_DOMAINS_RESPONSE_V1_KEY_CREATED_ON = 'created_on' as keyof Post_Domains_Response_V1;
export const POST_DOMAINS_RESPONSE_V1_KEY_DELETED_ON = 'deleted_on' as keyof Post_Domains_Response_V1;
export const POST_DOMAINS_RESPONSE_V1_KEY_DOMAIN_ID = 'domain_id' as keyof Post_Domains_Response_V1;
export const POST_DOMAINS_RESPONSE_V1_KEY_EXPIRES_ON = 'expires_on' as keyof Post_Domains_Response_V1;
export const POST_DOMAINS_RESPONSE_V1_KEY_NAME = 'name' as keyof Post_Domains_Response_V1;
export const POST_DOMAINS_RESPONSE_V1_KEY_NAMESERVERS = 'nameservers' as keyof Post_Domains_Response_V1;
export const POST_DOMAINS_RESPONSE_V1_KEY_OWNER_ID = 'owner_id' as keyof Post_Domains_Response_V1;
export const POST_DOMAINS_RESPONSE_V1_KEY_REGISTERED_ON = 'registered_on' as keyof Post_Domains_Response_V1;
export const POST_DOMAINS_RESPONSE_V1_KEY_REGISTRY_ACCOUNT_ID = 'registry_account_id' as keyof Post_Domains_Response_V1;
export const POST_DOMAINS_RESPONSE_V1_KEY_REGISTRY_STATUSES = 'registry_statuses' as keyof Post_Domains_Response_V1;
export const POST_DOMAINS_RESPONSE_V1_KEY_RENEWAL_MODE = 'renewal_mode' as keyof Post_Domains_Response_V1;
export const POST_DOMAINS_RESPONSE_V1_KEY_ROID = 'roid' as keyof Post_Domains_Response_V1;
export const POST_DOMAINS_RESPONSE_V1_KEY_SLD = 'sld' as keyof Post_Domains_Response_V1;
export const POST_DOMAINS_RESPONSE_V1_KEY_TLD = 'tld' as keyof Post_Domains_Response_V1;
export const POST_DOMAINS_RESPONSE_V1_KEY_TRANSFER_LOCK = 'transfer_lock' as keyof Post_Domains_Response_V1;
export const POST_DOMAINS_RESPONSE_V1_KEY_UPDATED_ON = 'updated_on' as keyof Post_Domains_Response_V1;

export const POST_DOMAINS_RESPONSE_V1_KEYS = [
  POST_DOMAINS_RESPONSE_V1_KEY_AUTH_CODE,
  POST_DOMAINS_RESPONSE_V1_KEY_AUTH_CODE_EXPIRES_ON,
  POST_DOMAINS_RESPONSE_V1_KEY_CANCELED_ON,
  POST_DOMAINS_RESPONSE_V1_KEY_CONTACTS,
  POST_DOMAINS_RESPONSE_V1_KEY_CREATED_ON,
  POST_DOMAINS_RESPONSE_V1_KEY_DELETED_ON,
  POST_DOMAINS_RESPONSE_V1_KEY_DOMAIN_ID,
  POST_DOMAINS_RESPONSE_V1_KEY_EXPIRES_ON,
  POST_DOMAINS_RESPONSE_V1_KEY_NAME,
  POST_DOMAINS_RESPONSE_V1_KEY_NAMESERVERS,
  POST_DOMAINS_RESPONSE_V1_KEY_OWNER_ID,
  POST_DOMAINS_RESPONSE_V1_KEY_REGISTERED_ON,
  POST_DOMAINS_RESPONSE_V1_KEY_REGISTRY_ACCOUNT_ID,
  POST_DOMAINS_RESPONSE_V1_KEY_REGISTRY_STATUSES,
  POST_DOMAINS_RESPONSE_V1_KEY_RENEWAL_MODE,
  POST_DOMAINS_RESPONSE_V1_KEY_ROID,
  POST_DOMAINS_RESPONSE_V1_KEY_SLD,
  POST_DOMAINS_RESPONSE_V1_KEY_TLD,
  POST_DOMAINS_RESPONSE_V1_KEY_TRANSFER_LOCK,
  POST_DOMAINS_RESPONSE_V1_KEY_UPDATED_ON,
] as const;

export const POST_DOMAINS_TRANSFER_RESPONSE_V1_KEY_AUTH_CODE = 'auth_code' as keyof Post_DomainsTransfer_Response_V1;
export const POST_DOMAINS_TRANSFER_RESPONSE_V1_KEY_AUTH_CODE_EXPIRES_ON = 'auth_code_expires_on' as keyof Post_DomainsTransfer_Response_V1;
export const POST_DOMAINS_TRANSFER_RESPONSE_V1_KEY_CANCELED_ON = 'canceled_on' as keyof Post_DomainsTransfer_Response_V1;
export const POST_DOMAINS_TRANSFER_RESPONSE_V1_KEY_CONTACTS = 'contacts' as keyof Post_DomainsTransfer_Response_V1;
export const POST_DOMAINS_TRANSFER_RESPONSE_V1_KEY_CREATED_ON = 'created_on' as keyof Post_DomainsTransfer_Response_V1;
export const POST_DOMAINS_TRANSFER_RESPONSE_V1_KEY_DELETED_ON = 'deleted_on' as keyof Post_DomainsTransfer_Response_V1;
export const POST_DOMAINS_TRANSFER_RESPONSE_V1_KEY_DOMAIN_ID = 'domain_id' as keyof Post_DomainsTransfer_Response_V1;
export const POST_DOMAINS_TRANSFER_RESPONSE_V1_KEY_EXPIRES_ON = 'expires_on' as keyof Post_DomainsTransfer_Response_V1;
export const POST_DOMAINS_TRANSFER_RESPONSE_V1_KEY_NAME = 'name' as keyof Post_DomainsTransfer_Response_V1;
export const POST_DOMAINS_TRANSFER_RESPONSE_V1_KEY_NAMESERVERS = 'nameservers' as keyof Post_DomainsTransfer_Response_V1;
export const POST_DOMAINS_TRANSFER_RESPONSE_V1_KEY_OWNER_ID = 'owner_id' as keyof Post_DomainsTransfer_Response_V1;
export const POST_DOMAINS_TRANSFER_RESPONSE_V1_KEY_REGISTERED_ON = 'registered_on' as keyof Post_DomainsTransfer_Response_V1;
export const POST_DOMAINS_TRANSFER_RESPONSE_V1_KEY_REGISTRY_ACCOUNT_ID = 'registry_account_id' as keyof Post_DomainsTransfer_Response_V1;
export const POST_DOMAINS_TRANSFER_RESPONSE_V1_KEY_REGISTRY_STATUSES = 'registry_statuses' as keyof Post_DomainsTransfer_Response_V1;
export const POST_DOMAINS_TRANSFER_RESPONSE_V1_KEY_RENEWAL_MODE = 'renewal_mode' as keyof Post_DomainsTransfer_Response_V1;
export const POST_DOMAINS_TRANSFER_RESPONSE_V1_KEY_ROID = 'roid' as keyof Post_DomainsTransfer_Response_V1;
export const POST_DOMAINS_TRANSFER_RESPONSE_V1_KEY_SLD = 'sld' as keyof Post_DomainsTransfer_Response_V1;
export const POST_DOMAINS_TRANSFER_RESPONSE_V1_KEY_TLD = 'tld' as keyof Post_DomainsTransfer_Response_V1;
export const POST_DOMAINS_TRANSFER_RESPONSE_V1_KEY_TRANSFER_LOCK = 'transfer_lock' as keyof Post_DomainsTransfer_Response_V1;
export const POST_DOMAINS_TRANSFER_RESPONSE_V1_KEY_UPDATED_ON = 'updated_on' as keyof Post_DomainsTransfer_Response_V1;

export const POST_DOMAINS_TRANSFER_RESPONSE_V1_KEYS = [
  POST_DOMAINS_TRANSFER_RESPONSE_V1_KEY_AUTH_CODE,
  POST_DOMAINS_TRANSFER_RESPONSE_V1_KEY_AUTH_CODE_EXPIRES_ON,
  POST_DOMAINS_TRANSFER_RESPONSE_V1_KEY_CANCELED_ON,
  POST_DOMAINS_TRANSFER_RESPONSE_V1_KEY_CONTACTS,
  POST_DOMAINS_TRANSFER_RESPONSE_V1_KEY_CREATED_ON,
  POST_DOMAINS_TRANSFER_RESPONSE_V1_KEY_DELETED_ON,
  POST_DOMAINS_TRANSFER_RESPONSE_V1_KEY_DOMAIN_ID,
  POST_DOMAINS_TRANSFER_RESPONSE_V1_KEY_EXPIRES_ON,
  POST_DOMAINS_TRANSFER_RESPONSE_V1_KEY_NAME,
  POST_DOMAINS_TRANSFER_RESPONSE_V1_KEY_NAMESERVERS,
  POST_DOMAINS_TRANSFER_RESPONSE_V1_KEY_OWNER_ID,
  POST_DOMAINS_TRANSFER_RESPONSE_V1_KEY_REGISTERED_ON,
  POST_DOMAINS_TRANSFER_RESPONSE_V1_KEY_REGISTRY_ACCOUNT_ID,
  POST_DOMAINS_TRANSFER_RESPONSE_V1_KEY_REGISTRY_STATUSES,
  POST_DOMAINS_TRANSFER_RESPONSE_V1_KEY_RENEWAL_MODE,
  POST_DOMAINS_TRANSFER_RESPONSE_V1_KEY_ROID,
  POST_DOMAINS_TRANSFER_RESPONSE_V1_KEY_SLD,
  POST_DOMAINS_TRANSFER_RESPONSE_V1_KEY_TLD,
  POST_DOMAINS_TRANSFER_RESPONSE_V1_KEY_TRANSFER_LOCK,
  POST_DOMAINS_TRANSFER_RESPONSE_V1_KEY_UPDATED_ON,
] as const;

export const POST_EMAIL_FORWARDS_RESPONSE_V1_KEY_CREATED_ON = 'created_on' as keyof Post_EmailForwards_Response_V1;
export const POST_EMAIL_FORWARDS_RESPONSE_V1_KEY_EMAIL_FORWARD_ID = 'email_forward_id' as keyof Post_EmailForwards_Response_V1;
export const POST_EMAIL_FORWARDS_RESPONSE_V1_KEY_SOURCE_ADDRESS = 'source_address' as keyof Post_EmailForwards_Response_V1;
export const POST_EMAIL_FORWARDS_RESPONSE_V1_KEY_STATUS = 'status' as keyof Post_EmailForwards_Response_V1;
export const POST_EMAIL_FORWARDS_RESPONSE_V1_KEY_TARGET_ADDRESS = 'target_address' as keyof Post_EmailForwards_Response_V1;
export const POST_EMAIL_FORWARDS_RESPONSE_V1_KEY_UPDATED_ON = 'updated_on' as keyof Post_EmailForwards_Response_V1;

export const POST_EMAIL_FORWARDS_RESPONSE_V1_KEYS = [
  POST_EMAIL_FORWARDS_RESPONSE_V1_KEY_CREATED_ON,
  POST_EMAIL_FORWARDS_RESPONSE_V1_KEY_EMAIL_FORWARD_ID,
  POST_EMAIL_FORWARDS_RESPONSE_V1_KEY_SOURCE_ADDRESS,
  POST_EMAIL_FORWARDS_RESPONSE_V1_KEY_STATUS,
  POST_EMAIL_FORWARDS_RESPONSE_V1_KEY_TARGET_ADDRESS,
  POST_EMAIL_FORWARDS_RESPONSE_V1_KEY_UPDATED_ON,
] as const;

export const POST_ORGANIZATIONS_IP_RESTRICTIONS_RESPONSE_V1_KEY_CREATED_ON = 'created_on' as keyof Post_OrganizationsIpRestrictions_Response_V1;
export const POST_ORGANIZATIONS_IP_RESTRICTIONS_RESPONSE_V1_KEY_IP_NETWORK = 'ip_network' as keyof Post_OrganizationsIpRestrictions_Response_V1;
export const POST_ORGANIZATIONS_IP_RESTRICTIONS_RESPONSE_V1_KEY_IP_RESTRICTION_ID = 'ip_restriction_id' as keyof Post_OrganizationsIpRestrictions_Response_V1;
export const POST_ORGANIZATIONS_IP_RESTRICTIONS_RESPONSE_V1_KEY_LAST_USED_ON = 'last_used_on' as keyof Post_OrganizationsIpRestrictions_Response_V1;
export const POST_ORGANIZATIONS_IP_RESTRICTIONS_RESPONSE_V1_KEY_ORGANIZATION_ID = 'organization_id' as keyof Post_OrganizationsIpRestrictions_Response_V1;

export const POST_ORGANIZATIONS_IP_RESTRICTIONS_RESPONSE_V1_KEYS = [
  POST_ORGANIZATIONS_IP_RESTRICTIONS_RESPONSE_V1_KEY_CREATED_ON,
  POST_ORGANIZATIONS_IP_RESTRICTIONS_RESPONSE_V1_KEY_IP_NETWORK,
  POST_ORGANIZATIONS_IP_RESTRICTIONS_RESPONSE_V1_KEY_IP_RESTRICTION_ID,
  POST_ORGANIZATIONS_IP_RESTRICTIONS_RESPONSE_V1_KEY_LAST_USED_ON,
  POST_ORGANIZATIONS_IP_RESTRICTIONS_RESPONSE_V1_KEY_ORGANIZATION_ID,
] as const;

export const DOMAIN_AVAILABILITY_KEY_META = 'meta' as keyof DomainAvailability;
export const DOMAIN_AVAILABILITY_KEY_RESULTS = 'results' as keyof DomainAvailability;

export const DOMAIN_AVAILABILITY_KEYS = [
  DOMAIN_AVAILABILITY_KEY_META,
  DOMAIN_AVAILABILITY_KEY_RESULTS,
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

export const DOMAIN_CHECK_KEY_RESULTS = 'results' as keyof DomainCheck;

export const DOMAIN_CHECK_KEYS = [
  DOMAIN_CHECK_KEY_RESULTS,
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

export const DOMAIN_SEARCH_KEY_META = 'meta' as keyof DomainSearch;
export const DOMAIN_SEARCH_KEY_RESULTS = 'results' as keyof DomainSearch;

export const DOMAIN_SEARCH_KEYS = [
  DOMAIN_SEARCH_KEY_META,
  DOMAIN_SEARCH_KEY_RESULTS,
] as const;

export const DOMAIN_SUMMARY_KEY_DOMAINS = 'domains' as keyof DomainSummary;
export const DOMAIN_SUMMARY_KEY_ORGANIZATION_ID = 'organization_id' as keyof DomainSummary;

export const DOMAIN_SUMMARY_KEYS = [
  DOMAIN_SUMMARY_KEY_DOMAINS,
  DOMAIN_SUMMARY_KEY_ORGANIZATION_ID,
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

export const PERMISSION_SET_KEY_PERMISSIONS = 'permissions' as keyof PermissionSet;

export const PERMISSION_SET_KEYS = [
  PERMISSION_SET_KEY_PERMISSIONS,
] as const;

export const RELATION_SET_KEY_RELATIONS = 'relations' as keyof RelationSet;

export const RELATION_SET_KEYS = [
  RELATION_SET_KEY_RELATIONS,
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
