/**
 * Request parameter types for OpusDNS API endpoints.
 *
 * Each type is derived from the OpenAPI operation and includes endpoint, summary, and parameter descriptions for better developer understanding.
 *
 * This file is auto-generated from the OpenAPI specification.
 * Do not edit manually.
 */

import { operations, components } from '../schema';

import { OrganizationCredentialExtra, SignupCreate, ContactSortField, ContactCreate, VerificationType, ZoneSortField, DnsZoneCreate, DnsZoneRrsetsCreate, DomainSortField, DomainCreate, DomainUpdate, DomainRenewRequest, DomainTransferIn, EmailForwardCreate, EmailForwardBulkDelete, EmailForwardBulkUpdate, EmailForwardUpdate, NotificationCreate, NotificationUpdate, OrganizationCreate, IpRestrictionCreate, IpRestrictionUpdate, OrganizationUpdate, PlanUpdate, UserCreate, TermsOfServiceAccept, UserUpdate, SpiceDbRelationshipUpdate } from './schemas';

/**
 * Request type for GET AuthClientCredentials endpoint
 * 
 * @path /v1/auth/client_credentials
 * @param status (query) - Optional status to filter the results
 */
export type GET_AuthClientCredentials_V1_Request = {
  parameters: {
    query: operations['list_api_keys_v1_auth_client_credentials_get']['parameters']['query'];
  };
}

export type GET_AuthClientCredentials_V1_Request_Parameters = GET_AuthClientCredentials_V1_Request['parameters'];
export type GET_AuthClientCredentials_V1_Request_Parameters_Query = GET_AuthClientCredentials_V1_Request['parameters']['query'];

/**
 * Request type for POST AuthClientCredentials endpoint
 * 
 * @path /v1/auth/client_credentials
 */
export type POST_AuthClientCredentials_V1_Request = {
  requestBody: OrganizationCredentialExtra;
}
export type POST_AuthClientCredentials_V1_Request_RequestBody = POST_AuthClientCredentials_V1_Request['requestBody'];

/**
 * Request type for DELETE AuthClientCredentialsApiKeyId endpoint
 * 
 * @path /v1/auth/client_credentials/{api_key_id}
 */
export type DELETE_AuthClientCredentialsApiKeyId_V1_Request = {
  parameters: {
    path: operations['delete_api_key_v1_auth_client_credentials__api_key_id__delete']['parameters']['path'];
  };
}

export type DELETE_AuthClientCredentialsApiKeyId_V1_Request_Parameters = DELETE_AuthClientCredentialsApiKeyId_V1_Request['parameters'];
export type DELETE_AuthClientCredentialsApiKeyId_V1_Request_Parameters_Path = DELETE_AuthClientCredentialsApiKeyId_V1_Request['parameters']['path'];

/**
 * Request type for POST AuthLogout endpoint
 * 
 * @path /v1/auth/logout
 */
export type POST_AuthLogout_V1_Request = {
}

/**
 * Request type for POST AuthSignup endpoint
 * 
 * @path /v1/auth/signup
 */
export type POST_AuthSignup_V1_Request = {
  requestBody: SignupCreate;
}
export type POST_AuthSignup_V1_Request_RequestBody = POST_AuthSignup_V1_Request['requestBody'];

/**
 * Request type for POST AuthToken endpoint
 * 
 * @path /v1/auth/token
 */
export type POST_AuthToken_V1_Request = {
}

/**
 * Request type for GET Availability endpoint
 * 
 * @path /v1/availability
 * @param domains (query) - 
Specify one or more domains to check for availability.

 */
export type GET_Availability_V1_Request = {
  parameters: {
    query: operations['bulk_availability_v1_availability_get']['parameters']['query'];
  };
}

export type GET_Availability_V1_Request_Parameters = GET_Availability_V1_Request['parameters'];
export type GET_Availability_V1_Request_Parameters_Query = GET_Availability_V1_Request['parameters']['query'];

/**
 * Request type for GET AvailabilityStream endpoint
 * 
 * @path /v1/availability/stream
 * @param domains (query) - 
Specify one or more domains to check for availability.

 */
export type GET_AvailabilityStream_V1_Request = {
  parameters: {
    query: operations['stream_availability_v1_availability_stream_get']['parameters']['query'];
  };
}

export type GET_AvailabilityStream_V1_Request_Parameters = GET_AvailabilityStream_V1_Request['parameters'];
export type GET_AvailabilityStream_V1_Request_Parameters_Query = GET_AvailabilityStream_V1_Request['parameters']['query'];

/**
 * Request type for GET Contacts endpoint
 * 
 * @path /v1/contacts
 */
export type GET_Contacts_V1_Request = {
  parameters: {
    query: ContactSortField;
  };
}

export type GET_Contacts_V1_Request_Parameters = GET_Contacts_V1_Request['parameters'];
export type GET_Contacts_V1_Request_Parameters_Query = GET_Contacts_V1_Request['parameters']['query'];

/**
 * Request type for POST Contacts endpoint
 * 
 * @path /v1/contacts
 */
export type POST_Contacts_V1_Request = {
  requestBody: ContactCreate;
}
export type POST_Contacts_V1_Request_RequestBody = POST_Contacts_V1_Request['requestBody'];

/**
 * Request type for DELETE ContactsContactId endpoint
 * 
 * @path /v1/contacts/{contact_id}
 */
export type DELETE_ContactsContactId_V1_Request = {
  parameters: {
    path: operations['delete_contact_v1_contacts__contact_id__delete']['parameters']['path'];
  };
}

export type DELETE_ContactsContactId_V1_Request_Parameters = DELETE_ContactsContactId_V1_Request['parameters'];
export type DELETE_ContactsContactId_V1_Request_Parameters_Path = DELETE_ContactsContactId_V1_Request['parameters']['path'];

/**
 * Request type for GET ContactsContactId endpoint
 * 
 * @path /v1/contacts/{contact_id}
 */
export type GET_ContactsContactId_V1_Request = {
  parameters: {
    path: operations['get_contact_v1_contacts__contact_id__get']['parameters']['path'];
  };
}

export type GET_ContactsContactId_V1_Request_Parameters = GET_ContactsContactId_V1_Request['parameters'];
export type GET_ContactsContactId_V1_Request_Parameters_Path = GET_ContactsContactId_V1_Request['parameters']['path'];

/**
 * Request type for DELETE ContactsContactIdVerification endpoint
 * 
 * @path /v1/contacts/{contact_id}/verification
 */
export type DELETE_ContactsContactIdVerification_V1_Request = {
  parameters: {
    path: operations['cancel_verification_v1_contacts__contact_id__verification_delete']['parameters']['path'];
  };
}

export type DELETE_ContactsContactIdVerification_V1_Request_Parameters = DELETE_ContactsContactIdVerification_V1_Request['parameters'];
export type DELETE_ContactsContactIdVerification_V1_Request_Parameters_Path = DELETE_ContactsContactIdVerification_V1_Request['parameters']['path'];

/**
 * Request type for GET ContactsContactIdVerification endpoint
 * 
 * @path /v1/contacts/{contact_id}/verification
 */
export type GET_ContactsContactIdVerification_V1_Request = {
  parameters: {
    path: operations['get_verification_status_v1_contacts__contact_id__verification_get']['parameters']['path'];
  };
}

export type GET_ContactsContactIdVerification_V1_Request_Parameters = GET_ContactsContactIdVerification_V1_Request['parameters'];
export type GET_ContactsContactIdVerification_V1_Request_Parameters_Path = GET_ContactsContactIdVerification_V1_Request['parameters']['path'];

/**
 * Request type for POST ContactsContactIdVerification endpoint
 * 
 * @path /v1/contacts/{contact_id}/verification
 */
export type POST_ContactsContactIdVerification_V1_Request = {
  parameters: {
    query: VerificationType;
    path: operations['start_contact_verification_v1_contacts__contact_id__verification_post']['parameters']['path'];
  };
}

export type POST_ContactsContactIdVerification_V1_Request_Parameters = POST_ContactsContactIdVerification_V1_Request['parameters'];
export type POST_ContactsContactIdVerification_V1_Request_Parameters_Query = POST_ContactsContactIdVerification_V1_Request['parameters']['query'];
export type POST_ContactsContactIdVerification_V1_Request_Parameters_Path = POST_ContactsContactIdVerification_V1_Request['parameters']['path'];

/**
 * Request type for PUT ContactsContactIdVerification endpoint
 * 
 * @path /v1/contacts/{contact_id}/verification
 */
export type PUT_ContactsContactIdVerification_V1_Request = {
  parameters: {
    query: operations['update_verification_v1_contacts__contact_id__verification_put']['parameters']['query'];
    path: operations['update_verification_v1_contacts__contact_id__verification_put']['parameters']['path'];
  };
}

export type PUT_ContactsContactIdVerification_V1_Request_Parameters = PUT_ContactsContactIdVerification_V1_Request['parameters'];
export type PUT_ContactsContactIdVerification_V1_Request_Parameters_Query = PUT_ContactsContactIdVerification_V1_Request['parameters']['query'];
export type PUT_ContactsContactIdVerification_V1_Request_Parameters_Path = PUT_ContactsContactIdVerification_V1_Request['parameters']['path'];

/**
 * Request type for GET ContactsVerification endpoint
 * 
 * @path /v1/contacts/verification
 */
export type GET_ContactsVerification_V1_Request = {
  parameters: {
    query: operations['get_verification_by_token_v1_contacts_verification_get']['parameters']['query'];
  };
}

export type GET_ContactsVerification_V1_Request_Parameters = GET_ContactsVerification_V1_Request['parameters'];
export type GET_ContactsVerification_V1_Request_Parameters_Query = GET_ContactsVerification_V1_Request['parameters']['query'];

/**
 * Request type for PUT ContactsVerification endpoint
 * 
 * @path /v1/contacts/verification
 */
export type PUT_ContactsVerification_V1_Request = {
  parameters: {
    query: operations['update_verification_by_token_v1_contacts_verification_put']['parameters']['query'];
  };
}

export type PUT_ContactsVerification_V1_Request_Parameters = PUT_ContactsVerification_V1_Request['parameters'];
export type PUT_ContactsVerification_V1_Request_Parameters_Query = PUT_ContactsVerification_V1_Request['parameters']['query'];

/**
 * Request type for GET ContactsVerify endpoint
 * 
 * @path /v1/contacts/verify
 */
export type GET_ContactsVerify_V1_Request = {
  parameters: {
    query: operations['email_verify_contact_v1_contacts_verify_get']['parameters']['query'];
  };
}

export type GET_ContactsVerify_V1_Request_Parameters = GET_ContactsVerify_V1_Request['parameters'];
export type GET_ContactsVerify_V1_Request_Parameters_Query = GET_ContactsVerify_V1_Request['parameters']['query'];

/**
 * Request type for GET Dns endpoint
 * 
 * @path /v1/dns
 */
export type GET_Dns_V1_Request = {
  parameters: {
    query: ZoneSortField;
  };
}

export type GET_Dns_V1_Request_Parameters = GET_Dns_V1_Request['parameters'];
export type GET_Dns_V1_Request_Parameters_Query = GET_Dns_V1_Request['parameters']['query'];

/**
 * Request type for POST Dns endpoint
 * 
 * @path /v1/dns
 */
export type POST_Dns_V1_Request = {
  requestBody: DnsZoneCreate;
}
export type POST_Dns_V1_Request_RequestBody = POST_Dns_V1_Request['requestBody'];

/**
 * Request type for DELETE DnsZoneName endpoint
 * 
 * @path /v1/dns/{zone_name}
 * @param zone_name (path) - DNS zone name (trailing dot optional)
 */
export type DELETE_DnsZoneName_V1_Request = {
  parameters: {
    path: operations['delete_zone_v1_dns__zone_name__delete']['parameters']['path'];
  };
}

export type DELETE_DnsZoneName_V1_Request_Parameters = DELETE_DnsZoneName_V1_Request['parameters'];
export type DELETE_DnsZoneName_V1_Request_Parameters_Path = DELETE_DnsZoneName_V1_Request['parameters']['path'];

/**
 * Request type for GET DnsZoneName endpoint
 * 
 * @path /v1/dns/{zone_name}
 * @param zone_name (path) - DNS zone name (trailing dot optional)
 */
export type GET_DnsZoneName_V1_Request = {
  parameters: {
    path: operations['get_zone_v1_dns__zone_name__get']['parameters']['path'];
  };
}

export type GET_DnsZoneName_V1_Request_Parameters = GET_DnsZoneName_V1_Request['parameters'];
export type GET_DnsZoneName_V1_Request_Parameters_Path = GET_DnsZoneName_V1_Request['parameters']['path'];

/**
 * Request type for POST DnsZoneNameDnssecDisable endpoint
 * 
 * @path /v1/dns/{zone_name}/dnssec/disable
 * @param zone_name (path) - DNS zone name (trailing dot optional)
 */
export type POST_DnsZoneNameDnssecDisable_V1_Request = {
  parameters: {
    path: operations['disable_dnssec_v1_dns__zone_name__dnssec_disable_post']['parameters']['path'];
  };
}

export type POST_DnsZoneNameDnssecDisable_V1_Request_Parameters = POST_DnsZoneNameDnssecDisable_V1_Request['parameters'];
export type POST_DnsZoneNameDnssecDisable_V1_Request_Parameters_Path = POST_DnsZoneNameDnssecDisable_V1_Request['parameters']['path'];

/**
 * Request type for POST DnsZoneNameDnssecEnable endpoint
 * 
 * @path /v1/dns/{zone_name}/dnssec/enable
 * @param zone_name (path) - DNS zone name (trailing dot optional)
 */
export type POST_DnsZoneNameDnssecEnable_V1_Request = {
  parameters: {
    path: operations['enable_dnssec_v1_dns__zone_name__dnssec_enable_post']['parameters']['path'];
  };
}

export type POST_DnsZoneNameDnssecEnable_V1_Request_Parameters = POST_DnsZoneNameDnssecEnable_V1_Request['parameters'];
export type POST_DnsZoneNameDnssecEnable_V1_Request_Parameters_Path = POST_DnsZoneNameDnssecEnable_V1_Request['parameters']['path'];

/**
 * Request type for PUT DnsZoneNameRrsets endpoint
 * 
 * @path /v1/dns/{zone_name}/rrsets
 * @param zone_name (path) - DNS zone name (trailing dot optional)
 */
export type PUT_DnsZoneNameRrsets_V1_Request = {
  parameters: {
    path: operations['update_zone_v1_dns__zone_name__rrsets_put']['parameters']['path'];
  };
  requestBody: DnsZoneRrsetsCreate;
}

export type PUT_DnsZoneNameRrsets_V1_Request_Parameters = PUT_DnsZoneNameRrsets_V1_Request['parameters'];
export type PUT_DnsZoneNameRrsets_V1_Request_Parameters_Path = PUT_DnsZoneNameRrsets_V1_Request['parameters']['path'];
export type PUT_DnsZoneNameRrsets_V1_Request_RequestBody = PUT_DnsZoneNameRrsets_V1_Request['requestBody'];

/**
 * Request type for GET DomainSearchSuggest endpoint
 * 
 * @path /v1/domain-search/suggest
 * @param query (query) - The primary keyword or phrase for the domain search
 * @param tlds (query) - 
Specify one or more TLDs to include in the search.

 * @param limit (query) - The maximum number of domain suggestions to return
 * @param premium (query) - Whether to include premium domains in the suggestions
 */
export type GET_DomainSearchSuggest_V1_Request = {
  parameters: {
    query: operations['suggest_v1_domain_search_suggest_get']['parameters']['query'];
  };
}

export type GET_DomainSearchSuggest_V1_Request_Parameters = GET_DomainSearchSuggest_V1_Request['parameters'];
export type GET_DomainSearchSuggest_V1_Request_Parameters_Query = GET_DomainSearchSuggest_V1_Request['parameters']['query'];

/**
 * Request type for GET Domains endpoint
 * 
 * @path /v1/domains
 */
export type GET_Domains_V1_Request = {
  parameters: {
    query: DomainSortField;
  };
}

export type GET_Domains_V1_Request_Parameters = GET_Domains_V1_Request['parameters'];
export type GET_Domains_V1_Request_Parameters_Query = GET_Domains_V1_Request['parameters']['query'];

/**
 * Request type for POST Domains endpoint
 * 
 * @path /v1/domains
 */
export type POST_Domains_V1_Request = {
  requestBody: DomainCreate;
}
export type POST_Domains_V1_Request_RequestBody = POST_Domains_V1_Request['requestBody'];

/**
 * Request type for GET DomainsCheck endpoint
 * 
 * @path /v1/domains/check
 * @param domains (query) - 
Specify one or more domains to check for availability.

 */
export type GET_DomainsCheck_V1_Request = {
  parameters: {
    query: operations['epp_check_domain_v1_domains_check_get']['parameters']['query'];
  };
}

export type GET_DomainsCheck_V1_Request_Parameters = GET_DomainsCheck_V1_Request['parameters'];
export type GET_DomainsCheck_V1_Request_Parameters_Query = GET_DomainsCheck_V1_Request['parameters']['query'];

/**
 * Request type for DELETE DomainsDomainReference endpoint
 * 
 * @path /v1/domains/{domain_reference}
 */
export type DELETE_DomainsDomainReference_V1_Request = {
  parameters: {
    path: operations['delete_domain_v1_domains__domain_reference__delete']['parameters']['path'];
  };
}

export type DELETE_DomainsDomainReference_V1_Request_Parameters = DELETE_DomainsDomainReference_V1_Request['parameters'];
export type DELETE_DomainsDomainReference_V1_Request_Parameters_Path = DELETE_DomainsDomainReference_V1_Request['parameters']['path'];

/**
 * Request type for GET DomainsDomainReference endpoint
 * 
 * @path /v1/domains/{domain_reference}
 */
export type GET_DomainsDomainReference_V1_Request = {
  parameters: {
    path: operations['get_domain_v1_domains__domain_reference__get']['parameters']['path'];
  };
}

export type GET_DomainsDomainReference_V1_Request_Parameters = GET_DomainsDomainReference_V1_Request['parameters'];
export type GET_DomainsDomainReference_V1_Request_Parameters_Path = GET_DomainsDomainReference_V1_Request['parameters']['path'];

/**
 * Request type for PATCH DomainsDomainReference endpoint
 * 
 * @path /v1/domains/{domain_reference}
 */
export type PATCH_DomainsDomainReference_V1_Request = {
  parameters: {
    path: operations['update_domain_v1_domains__domain_reference__patch']['parameters']['path'];
  };
  requestBody: DomainUpdate;
}

export type PATCH_DomainsDomainReference_V1_Request_Parameters = PATCH_DomainsDomainReference_V1_Request['parameters'];
export type PATCH_DomainsDomainReference_V1_Request_Parameters_Path = PATCH_DomainsDomainReference_V1_Request['parameters']['path'];
export type PATCH_DomainsDomainReference_V1_Request_RequestBody = PATCH_DomainsDomainReference_V1_Request['requestBody'];

/**
 * Request type for DELETE DomainsDomainReferenceDnssec endpoint
 * 
 * @path /v1/domains/{domain_reference}/dnssec
 */
export type DELETE_DomainsDomainReferenceDnssec_V1_Request = {
  parameters: {
    path: operations['delete_dnssec_v1_domains__domain_reference__dnssec_delete']['parameters']['path'];
  };
}

export type DELETE_DomainsDomainReferenceDnssec_V1_Request_Parameters = DELETE_DomainsDomainReferenceDnssec_V1_Request['parameters'];
export type DELETE_DomainsDomainReferenceDnssec_V1_Request_Parameters_Path = DELETE_DomainsDomainReferenceDnssec_V1_Request['parameters']['path'];

/**
 * Request type for GET DomainsDomainReferenceDnssec endpoint
 * 
 * @path /v1/domains/{domain_reference}/dnssec
 */
export type GET_DomainsDomainReferenceDnssec_V1_Request = {
  parameters: {
    path: operations['get_dnssec_v1_domains__domain_reference__dnssec_get']['parameters']['path'];
  };
}

export type GET_DomainsDomainReferenceDnssec_V1_Request_Parameters = GET_DomainsDomainReferenceDnssec_V1_Request['parameters'];
export type GET_DomainsDomainReferenceDnssec_V1_Request_Parameters_Path = GET_DomainsDomainReferenceDnssec_V1_Request['parameters']['path'];

/**
 * Request type for PUT DomainsDomainReferenceDnssec endpoint
 * 
 * @path /v1/domains/{domain_reference}/dnssec
 */
export type PUT_DomainsDomainReferenceDnssec_V1_Request = {
  parameters: {
    path: operations['create_or_update_dnssec_v1_domains__domain_reference__dnssec_put']['parameters']['path'];
  };
  requestBody: unknown;
}

export type PUT_DomainsDomainReferenceDnssec_V1_Request_Parameters = PUT_DomainsDomainReferenceDnssec_V1_Request['parameters'];
export type PUT_DomainsDomainReferenceDnssec_V1_Request_Parameters_Path = PUT_DomainsDomainReferenceDnssec_V1_Request['parameters']['path'];
export type PUT_DomainsDomainReferenceDnssec_V1_Request_RequestBody = PUT_DomainsDomainReferenceDnssec_V1_Request['requestBody'];

/**
 * Request type for POST DomainsDomainReferenceRenew endpoint
 * 
 * @path /v1/domains/{domain_reference}/renew
 */
export type POST_DomainsDomainReferenceRenew_V1_Request = {
  parameters: {
    path: operations['renew_domain_v1_domains__domain_reference__renew_post']['parameters']['path'];
  };
  requestBody: DomainRenewRequest;
}

export type POST_DomainsDomainReferenceRenew_V1_Request_Parameters = POST_DomainsDomainReferenceRenew_V1_Request['parameters'];
export type POST_DomainsDomainReferenceRenew_V1_Request_Parameters_Path = POST_DomainsDomainReferenceRenew_V1_Request['parameters']['path'];
export type POST_DomainsDomainReferenceRenew_V1_Request_RequestBody = POST_DomainsDomainReferenceRenew_V1_Request['requestBody'];

/**
 * Request type for DELETE DomainsDomainReferenceTransfer endpoint
 * 
 * @path /v1/domains/{domain_reference}/transfer
 */
export type DELETE_DomainsDomainReferenceTransfer_V1_Request = {
  parameters: {
    path: operations['cancel_domain_transfer_v1_domains__domain_reference__transfer_delete']['parameters']['path'];
  };
}

export type DELETE_DomainsDomainReferenceTransfer_V1_Request_Parameters = DELETE_DomainsDomainReferenceTransfer_V1_Request['parameters'];
export type DELETE_DomainsDomainReferenceTransfer_V1_Request_Parameters_Path = DELETE_DomainsDomainReferenceTransfer_V1_Request['parameters']['path'];

/**
 * Request type for POST DomainsTransfer endpoint
 * 
 * @path /v1/domains/transfer
 */
export type POST_DomainsTransfer_V1_Request = {
  requestBody: DomainTransferIn;
}
export type POST_DomainsTransfer_V1_Request_RequestBody = POST_DomainsTransfer_V1_Request['requestBody'];

/**
 * Request type for GET EmailForwards endpoint
 * 
 * @path /v1/email-forwards
 * @param status (query) - Optional status to filter the results
 * @param source_address (query) - Optional source address to filter the results
 * @param target_address (query) - Optional target address to filter the results
 */
export type GET_EmailForwards_V1_Request = {
  parameters: {
    query: operations['list_email_forwards_v1_email_forwards_get']['parameters']['query'];
  };
}

export type GET_EmailForwards_V1_Request_Parameters = GET_EmailForwards_V1_Request['parameters'];
export type GET_EmailForwards_V1_Request_Parameters_Query = GET_EmailForwards_V1_Request['parameters']['query'];

/**
 * Request type for POST EmailForwards endpoint
 * 
 * @path /v1/email-forwards
 */
export type POST_EmailForwards_V1_Request = {
  requestBody: EmailForwardCreate;
}
export type POST_EmailForwards_V1_Request_RequestBody = POST_EmailForwards_V1_Request['requestBody'];

/**
 * Request type for POST EmailForwardsBulkDelete endpoint
 * 
 * @path /v1/email-forwards/bulk-delete
 */
export type POST_EmailForwardsBulkDelete_V1_Request = {
  requestBody: EmailForwardBulkDelete;
}
export type POST_EmailForwardsBulkDelete_V1_Request_RequestBody = POST_EmailForwardsBulkDelete_V1_Request['requestBody'];

/**
 * Request type for PATCH EmailForwardsBulkUpdate endpoint
 * 
 * @path /v1/email-forwards/bulk-update
 */
export type PATCH_EmailForwardsBulkUpdate_V1_Request = {
  requestBody: EmailForwardBulkUpdate;
}
export type PATCH_EmailForwardsBulkUpdate_V1_Request_RequestBody = PATCH_EmailForwardsBulkUpdate_V1_Request['requestBody'];

/**
 * Request type for DELETE EmailForwardsEmailForwardId endpoint
 * 
 * @path /v1/email-forwards/{email_forward_id}
 */
export type DELETE_EmailForwardsEmailForwardId_V1_Request = {
  parameters: {
    path: operations['delete_email_forward_v1_email_forwards__email_forward_id__delete']['parameters']['path'];
  };
}

export type DELETE_EmailForwardsEmailForwardId_V1_Request_Parameters = DELETE_EmailForwardsEmailForwardId_V1_Request['parameters'];
export type DELETE_EmailForwardsEmailForwardId_V1_Request_Parameters_Path = DELETE_EmailForwardsEmailForwardId_V1_Request['parameters']['path'];

/**
 * Request type for GET EmailForwardsEmailForwardId endpoint
 * 
 * @path /v1/email-forwards/{email_forward_id}
 */
export type GET_EmailForwardsEmailForwardId_V1_Request = {
  parameters: {
    path: operations['get_email_forward_v1_email_forwards__email_forward_id__get']['parameters']['path'];
  };
}

export type GET_EmailForwardsEmailForwardId_V1_Request_Parameters = GET_EmailForwardsEmailForwardId_V1_Request['parameters'];
export type GET_EmailForwardsEmailForwardId_V1_Request_Parameters_Path = GET_EmailForwardsEmailForwardId_V1_Request['parameters']['path'];

/**
 * Request type for PATCH EmailForwardsEmailForwardId endpoint
 * 
 * @path /v1/email-forwards/{email_forward_id}
 */
export type PATCH_EmailForwardsEmailForwardId_V1_Request = {
  parameters: {
    path: operations['update_email_forward_v1_email_forwards__email_forward_id__patch']['parameters']['path'];
  };
  requestBody: EmailForwardUpdate;
}

export type PATCH_EmailForwardsEmailForwardId_V1_Request_Parameters = PATCH_EmailForwardsEmailForwardId_V1_Request['parameters'];
export type PATCH_EmailForwardsEmailForwardId_V1_Request_Parameters_Path = PATCH_EmailForwardsEmailForwardId_V1_Request['parameters']['path'];
export type PATCH_EmailForwardsEmailForwardId_V1_Request_RequestBody = PATCH_EmailForwardsEmailForwardId_V1_Request['requestBody'];

/**
 * Request type for GET Event endpoint
 * 
 * @path /v1/event
 */
export type GET_Event_V1_Request = {
  parameters: {
    query: operations['get_events_v1_event_get']['parameters']['query'];
  };
}

export type GET_Event_V1_Request_Parameters = GET_Event_V1_Request['parameters'];
export type GET_Event_V1_Request_Parameters_Query = GET_Event_V1_Request['parameters']['query'];

/**
 * Request type for GET EventEventId endpoint
 * 
 * @path /v1/event/{event_id}
 */
export type GET_EventEventId_V1_Request = {
  parameters: {
    path: operations['get_event_v1_event__event_id__get']['parameters']['path'];
  };
}

export type GET_EventEventId_V1_Request_Parameters = GET_EventEventId_V1_Request['parameters'];
export type GET_EventEventId_V1_Request_Parameters_Path = GET_EventEventId_V1_Request['parameters']['path'];

/**
 * Request type for PATCH EventEventId endpoint
 * 
 * @path /v1/event/{event_id}
 */
export type PATCH_EventEventId_V1_Request = {
  parameters: {
    path: operations['acknowledge_event_v1_event__event_id__patch']['parameters']['path'];
  };
}

export type PATCH_EventEventId_V1_Request_Parameters = PATCH_EventEventId_V1_Request['parameters'];
export type PATCH_EventEventId_V1_Request_Parameters_Path = PATCH_EventEventId_V1_Request['parameters']['path'];

/**
 * Request type for GET Notifications endpoint
 * 
 * @path /v1/notifications
 */
export type GET_Notifications_V1_Request = {
  parameters: {
    query: operations['list_notifications_v1_notifications_get']['parameters']['query'];
  };
}

export type GET_Notifications_V1_Request_Parameters = GET_Notifications_V1_Request['parameters'];
export type GET_Notifications_V1_Request_Parameters_Query = GET_Notifications_V1_Request['parameters']['query'];

/**
 * Request type for POST Notifications endpoint
 * 
 * @path /v1/notifications
 */
export type POST_Notifications_V1_Request = {
  requestBody: NotificationCreate;
}
export type POST_Notifications_V1_Request_RequestBody = POST_Notifications_V1_Request['requestBody'];

/**
 * Request type for DELETE NotificationsNotificationId endpoint
 * 
 * @path /v1/notifications/{notification_id}
 */
export type DELETE_NotificationsNotificationId_V1_Request = {
  parameters: {
    path: operations['delete_notification_v1_notifications__notification_id__delete']['parameters']['path'];
  };
}

export type DELETE_NotificationsNotificationId_V1_Request_Parameters = DELETE_NotificationsNotificationId_V1_Request['parameters'];
export type DELETE_NotificationsNotificationId_V1_Request_Parameters_Path = DELETE_NotificationsNotificationId_V1_Request['parameters']['path'];

/**
 * Request type for GET NotificationsNotificationId endpoint
 * 
 * @path /v1/notifications/{notification_id}
 */
export type GET_NotificationsNotificationId_V1_Request = {
  parameters: {
    query: operations['get_notification_v1_notifications__notification_id__get']['parameters']['query'];
    path: operations['get_notification_v1_notifications__notification_id__get']['parameters']['path'];
  };
}

export type GET_NotificationsNotificationId_V1_Request_Parameters = GET_NotificationsNotificationId_V1_Request['parameters'];
export type GET_NotificationsNotificationId_V1_Request_Parameters_Query = GET_NotificationsNotificationId_V1_Request['parameters']['query'];
export type GET_NotificationsNotificationId_V1_Request_Parameters_Path = GET_NotificationsNotificationId_V1_Request['parameters']['path'];

/**
 * Request type for PUT NotificationsNotificationId endpoint
 * 
 * @path /v1/notifications/{notification_id}
 */
export type PUT_NotificationsNotificationId_V1_Request = {
  parameters: {
    path: operations['update_notification_v1_notifications__notification_id__put']['parameters']['path'];
  };
  requestBody: NotificationUpdate;
}

export type PUT_NotificationsNotificationId_V1_Request_Parameters = PUT_NotificationsNotificationId_V1_Request['parameters'];
export type PUT_NotificationsNotificationId_V1_Request_Parameters_Path = PUT_NotificationsNotificationId_V1_Request['parameters']['path'];
export type PUT_NotificationsNotificationId_V1_Request_RequestBody = PUT_NotificationsNotificationId_V1_Request['requestBody'];

/**
 * Request type for PATCH NotificationsNotificationIdRead endpoint
 * 
 * @path /v1/notifications/{notification_id}/read
 */
export type PATCH_NotificationsNotificationIdRead_V1_Request = {
  parameters: {
    path: operations['update_notification_read_v1_notifications__notification_id__read_patch']['parameters']['path'];
  };
}

export type PATCH_NotificationsNotificationIdRead_V1_Request_Parameters = PATCH_NotificationsNotificationIdRead_V1_Request['parameters'];
export type PATCH_NotificationsNotificationIdRead_V1_Request_Parameters_Path = PATCH_NotificationsNotificationIdRead_V1_Request['parameters']['path'];

/**
 * Request type for GET Organizations endpoint
 * 
 * @path /v1/organizations
 */
export type GET_Organizations_V1_Request = {
  parameters: {
    query: operations['list_organizations_v1_organizations_get']['parameters']['query'];
  };
}

export type GET_Organizations_V1_Request_Parameters = GET_Organizations_V1_Request['parameters'];
export type GET_Organizations_V1_Request_Parameters_Query = GET_Organizations_V1_Request['parameters']['query'];

/**
 * Request type for POST Organizations endpoint
 * 
 * @path /v1/organizations
 */
export type POST_Organizations_V1_Request = {
  requestBody: OrganizationCreate;
}
export type POST_Organizations_V1_Request_RequestBody = POST_Organizations_V1_Request['requestBody'];

/**
 * Request type for GET OrganizationsAttributes endpoint
 * 
 * @path /v1/organizations/attributes
 * @param keys (query) - Optional list of attribute keys to filter
 */
export type GET_OrganizationsAttributes_V1_Request = {
  parameters: {
    query: operations['get_attributes_v1_organizations_attributes_get']['parameters']['query'];
  };
}

export type GET_OrganizationsAttributes_V1_Request_Parameters = GET_OrganizationsAttributes_V1_Request['parameters'];
export type GET_OrganizationsAttributes_V1_Request_Parameters_Query = GET_OrganizationsAttributes_V1_Request['parameters']['query'];

/**
 * Request type for PATCH OrganizationsAttributes endpoint
 * 
 * @path /v1/organizations/attributes
 */
export type PATCH_OrganizationsAttributes_V1_Request = {
  parameters: {
    query: operations['update_attributes_v1_organizations_attributes_patch']['parameters']['query'];
  };
  requestBody: unknown;
}

export type PATCH_OrganizationsAttributes_V1_Request_Parameters = PATCH_OrganizationsAttributes_V1_Request['parameters'];
export type PATCH_OrganizationsAttributes_V1_Request_Parameters_Query = PATCH_OrganizationsAttributes_V1_Request['parameters']['query'];
export type PATCH_OrganizationsAttributes_V1_Request_RequestBody = PATCH_OrganizationsAttributes_V1_Request['requestBody'];

/**
 * Request type for GET OrganizationsAttributesOrganizationId endpoint
 * 
 * @path /v1/organizations/attributes/{organization_id}
 * @param keys (query) - Optional list of attribute keys to filter
 */
export type GET_OrganizationsAttributesOrganizationId_V1_Request = {
  parameters: {
    query: operations['get_attributes_v1_organizations_attributes__organization_id__get']['parameters']['query'];
    path: operations['get_attributes_v1_organizations_attributes__organization_id__get']['parameters']['path'];
  };
}

export type GET_OrganizationsAttributesOrganizationId_V1_Request_Parameters = GET_OrganizationsAttributesOrganizationId_V1_Request['parameters'];
export type GET_OrganizationsAttributesOrganizationId_V1_Request_Parameters_Query = GET_OrganizationsAttributesOrganizationId_V1_Request['parameters']['query'];
export type GET_OrganizationsAttributesOrganizationId_V1_Request_Parameters_Path = GET_OrganizationsAttributesOrganizationId_V1_Request['parameters']['path'];

/**
 * Request type for PATCH OrganizationsAttributesOrganizationId endpoint
 * 
 * @path /v1/organizations/attributes/{organization_id}
 */
export type PATCH_OrganizationsAttributesOrganizationId_V1_Request = {
  parameters: {
    path: operations['update_attributes_v1_organizations_attributes__organization_id__patch']['parameters']['path'];
  };
  requestBody: unknown;
}

export type PATCH_OrganizationsAttributesOrganizationId_V1_Request_Parameters = PATCH_OrganizationsAttributesOrganizationId_V1_Request['parameters'];
export type PATCH_OrganizationsAttributesOrganizationId_V1_Request_Parameters_Path = PATCH_OrganizationsAttributesOrganizationId_V1_Request['parameters']['path'];
export type PATCH_OrganizationsAttributesOrganizationId_V1_Request_RequestBody = PATCH_OrganizationsAttributesOrganizationId_V1_Request['requestBody'];

/**
 * Request type for GET OrganizationsIpRestrictions endpoint
 * 
 * @path /v1/organizations/ip-restrictions
 */
export type GET_OrganizationsIpRestrictions_V1_Request = {
}

/**
 * Request type for POST OrganizationsIpRestrictions endpoint
 * 
 * @path /v1/organizations/ip-restrictions
 */
export type POST_OrganizationsIpRestrictions_V1_Request = {
  requestBody: IpRestrictionCreate;
}
export type POST_OrganizationsIpRestrictions_V1_Request_RequestBody = POST_OrganizationsIpRestrictions_V1_Request['requestBody'];

/**
 * Request type for DELETE OrganizationsIpRestrictionsIpRestrictionId endpoint
 * 
 * @path /v1/organizations/ip-restrictions/{ip_restriction_id}
 */
export type DELETE_OrganizationsIpRestrictionsIpRestrictionId_V1_Request = {
  parameters: {
    path: operations['delete_ip_restriction_v1_organizations_ip_restrictions__ip_restriction_id__delete']['parameters']['path'];
  };
}

export type DELETE_OrganizationsIpRestrictionsIpRestrictionId_V1_Request_Parameters = DELETE_OrganizationsIpRestrictionsIpRestrictionId_V1_Request['parameters'];
export type DELETE_OrganizationsIpRestrictionsIpRestrictionId_V1_Request_Parameters_Path = DELETE_OrganizationsIpRestrictionsIpRestrictionId_V1_Request['parameters']['path'];

/**
 * Request type for GET OrganizationsIpRestrictionsIpRestrictionId endpoint
 * 
 * @path /v1/organizations/ip-restrictions/{ip_restriction_id}
 */
export type GET_OrganizationsIpRestrictionsIpRestrictionId_V1_Request = {
  parameters: {
    path: operations['get_ip_restriction_v1_organizations_ip_restrictions__ip_restriction_id__get']['parameters']['path'];
  };
}

export type GET_OrganizationsIpRestrictionsIpRestrictionId_V1_Request_Parameters = GET_OrganizationsIpRestrictionsIpRestrictionId_V1_Request['parameters'];
export type GET_OrganizationsIpRestrictionsIpRestrictionId_V1_Request_Parameters_Path = GET_OrganizationsIpRestrictionsIpRestrictionId_V1_Request['parameters']['path'];

/**
 * Request type for PATCH OrganizationsIpRestrictionsIpRestrictionId endpoint
 * 
 * @path /v1/organizations/ip-restrictions/{ip_restriction_id}
 */
export type PATCH_OrganizationsIpRestrictionsIpRestrictionId_V1_Request = {
  parameters: {
    path: operations['update_ip_restriction_v1_organizations_ip_restrictions__ip_restriction_id__patch']['parameters']['path'];
  };
  requestBody: IpRestrictionUpdate;
}

export type PATCH_OrganizationsIpRestrictionsIpRestrictionId_V1_Request_Parameters = PATCH_OrganizationsIpRestrictionsIpRestrictionId_V1_Request['parameters'];
export type PATCH_OrganizationsIpRestrictionsIpRestrictionId_V1_Request_Parameters_Path = PATCH_OrganizationsIpRestrictionsIpRestrictionId_V1_Request['parameters']['path'];
export type PATCH_OrganizationsIpRestrictionsIpRestrictionId_V1_Request_RequestBody = PATCH_OrganizationsIpRestrictionsIpRestrictionId_V1_Request['requestBody'];

/**
 * Request type for DELETE OrganizationsOrganizationId endpoint
 * 
 * @path /v1/organizations/{organization_id}
 */
export type DELETE_OrganizationsOrganizationId_V1_Request = {
  parameters: {
    path: operations['delete_user_v1_organizations__organization_id__delete']['parameters']['path'];
  };
}

export type DELETE_OrganizationsOrganizationId_V1_Request_Parameters = DELETE_OrganizationsOrganizationId_V1_Request['parameters'];
export type DELETE_OrganizationsOrganizationId_V1_Request_Parameters_Path = DELETE_OrganizationsOrganizationId_V1_Request['parameters']['path'];

/**
 * Request type for GET OrganizationsOrganizationId endpoint
 * 
 * @path /v1/organizations/{organization_id}
 */
export type GET_OrganizationsOrganizationId_V1_Request = {
  parameters: {
    path: operations['get_organization_v1_organizations__organization_id__get']['parameters']['path'];
  };
}

export type GET_OrganizationsOrganizationId_V1_Request_Parameters = GET_OrganizationsOrganizationId_V1_Request['parameters'];
export type GET_OrganizationsOrganizationId_V1_Request_Parameters_Path = GET_OrganizationsOrganizationId_V1_Request['parameters']['path'];

/**
 * Request type for PATCH OrganizationsOrganizationId endpoint
 * 
 * @path /v1/organizations/{organization_id}
 */
export type PATCH_OrganizationsOrganizationId_V1_Request = {
  parameters: {
    path: operations['update_organization_v1_organizations__organization_id__patch']['parameters']['path'];
  };
  requestBody: OrganizationUpdate;
}

export type PATCH_OrganizationsOrganizationId_V1_Request_Parameters = PATCH_OrganizationsOrganizationId_V1_Request['parameters'];
export type PATCH_OrganizationsOrganizationId_V1_Request_Parameters_Path = PATCH_OrganizationsOrganizationId_V1_Request['parameters']['path'];
export type PATCH_OrganizationsOrganizationId_V1_Request_RequestBody = PATCH_OrganizationsOrganizationId_V1_Request['requestBody'];

/**
 * Request type for PATCH OrganizationsOrganizationIdPlan endpoint
 * 
 * @path /v1/organizations/{organization_id}/plan
 */
export type PATCH_OrganizationsOrganizationIdPlan_V1_Request = {
  parameters: {
    path: operations['change_plan_v1_organizations__organization_id__plan_patch']['parameters']['path'];
  };
  requestBody: PlanUpdate;
}

export type PATCH_OrganizationsOrganizationIdPlan_V1_Request_Parameters = PATCH_OrganizationsOrganizationIdPlan_V1_Request['parameters'];
export type PATCH_OrganizationsOrganizationIdPlan_V1_Request_Parameters_Path = PATCH_OrganizationsOrganizationIdPlan_V1_Request['parameters']['path'];
export type PATCH_OrganizationsOrganizationIdPlan_V1_Request_RequestBody = PATCH_OrganizationsOrganizationIdPlan_V1_Request['requestBody'];

/**
 * Request type for GET OrganizationsRoles endpoint
 * 
 * @path /v1/organizations/roles
 */
export type GET_OrganizationsRoles_V1_Request = {
}

/**
 * Request type for GET OrganizationsUsers endpoint
 * 
 * @path /v1/organizations/users
 */
export type GET_OrganizationsUsers_V1_Request = {
  parameters: {
    query: operations['list_users_v1_organizations_users_get']['parameters']['query'];
  };
}

export type GET_OrganizationsUsers_V1_Request_Parameters = GET_OrganizationsUsers_V1_Request['parameters'];
export type GET_OrganizationsUsers_V1_Request_Parameters_Query = GET_OrganizationsUsers_V1_Request['parameters']['query'];

/**
 * Request type for POST Users endpoint
 * 
 * @path /v1/users
 */
export type POST_Users_V1_Request = {
  requestBody: UserCreate;
}
export type POST_Users_V1_Request_RequestBody = POST_Users_V1_Request['requestBody'];

/**
 * Request type for POST UsersAcceptTos endpoint
 * 
 * @path /v1/users/accept-tos
 */
export type POST_UsersAcceptTos_V1_Request = {
  requestBody: TermsOfServiceAccept;
}
export type POST_UsersAcceptTos_V1_Request_RequestBody = POST_UsersAcceptTos_V1_Request['requestBody'];

/**
 * Request type for GET UsersMe endpoint
 * 
 * @path /v1/users/me
 */
export type GET_UsersMe_V1_Request = {
  parameters: {
    query: operations['get_current_user_v1_users_me_get']['parameters']['query'];
  };
}

export type GET_UsersMe_V1_Request_Parameters = GET_UsersMe_V1_Request['parameters'];
export type GET_UsersMe_V1_Request_Parameters_Query = GET_UsersMe_V1_Request['parameters']['query'];

/**
 * Request type for DELETE UsersUserId endpoint
 * 
 * @path /v1/users/{user_id}
 */
export type DELETE_UsersUserId_V1_Request = {
  parameters: {
    path: operations['delete_user_v1_users__user_id__delete']['parameters']['path'];
  };
}

export type DELETE_UsersUserId_V1_Request_Parameters = DELETE_UsersUserId_V1_Request['parameters'];
export type DELETE_UsersUserId_V1_Request_Parameters_Path = DELETE_UsersUserId_V1_Request['parameters']['path'];

/**
 * Request type for GET UsersUserId endpoint
 * 
 * @path /v1/users/{user_id}
 */
export type GET_UsersUserId_V1_Request = {
  parameters: {
    query: operations['get_user_v1_users__user_id__get']['parameters']['query'];
    path: operations['get_user_v1_users__user_id__get']['parameters']['path'];
  };
}

export type GET_UsersUserId_V1_Request_Parameters = GET_UsersUserId_V1_Request['parameters'];
export type GET_UsersUserId_V1_Request_Parameters_Query = GET_UsersUserId_V1_Request['parameters']['query'];
export type GET_UsersUserId_V1_Request_Parameters_Path = GET_UsersUserId_V1_Request['parameters']['path'];

/**
 * Request type for PATCH UsersUserId endpoint
 * 
 * @path /v1/users/{user_id}
 */
export type PATCH_UsersUserId_V1_Request = {
  parameters: {
    path: operations['update_user_v1_users__user_id__patch']['parameters']['path'];
  };
  requestBody: UserUpdate;
}

export type PATCH_UsersUserId_V1_Request_Parameters = PATCH_UsersUserId_V1_Request['parameters'];
export type PATCH_UsersUserId_V1_Request_Parameters_Path = PATCH_UsersUserId_V1_Request['parameters']['path'];
export type PATCH_UsersUserId_V1_Request_RequestBody = PATCH_UsersUserId_V1_Request['requestBody'];

/**
 * Request type for GET UsersUserIdPermissions endpoint
 * 
 * @path /v1/users/{user_id}/permissions
 */
export type GET_UsersUserIdPermissions_V1_Request = {
  parameters: {
    path: operations['get_user_permissions_v1_users__user_id__permissions_get']['parameters']['path'];
  };
}

export type GET_UsersUserIdPermissions_V1_Request_Parameters = GET_UsersUserIdPermissions_V1_Request['parameters'];
export type GET_UsersUserIdPermissions_V1_Request_Parameters_Path = GET_UsersUserIdPermissions_V1_Request['parameters']['path'];

/**
 * Request type for GET UsersUserIdRoles endpoint
 * 
 * @path /v1/users/{user_id}/roles
 */
export type GET_UsersUserIdRoles_V1_Request = {
  parameters: {
    path: operations['list_roles_v1_users__user_id__roles_get']['parameters']['path'];
  };
}

export type GET_UsersUserIdRoles_V1_Request_Parameters = GET_UsersUserIdRoles_V1_Request['parameters'];
export type GET_UsersUserIdRoles_V1_Request_Parameters_Path = GET_UsersUserIdRoles_V1_Request['parameters']['path'];

/**
 * Request type for PATCH UsersUserIdRoles endpoint
 * 
 * @path /v1/users/{user_id}/roles
 */
export type PATCH_UsersUserIdRoles_V1_Request = {
  parameters: {
    path: operations['update_user_relations_v1_users__user_id__roles_patch']['parameters']['path'];
  };
  requestBody: SpiceDbRelationshipUpdate;
}

export type PATCH_UsersUserIdRoles_V1_Request_Parameters = PATCH_UsersUserIdRoles_V1_Request['parameters'];
export type PATCH_UsersUserIdRoles_V1_Request_Parameters_Path = PATCH_UsersUserIdRoles_V1_Request['parameters']['path'];
export type PATCH_UsersUserIdRoles_V1_Request_RequestBody = PATCH_UsersUserIdRoles_V1_Request['requestBody'];

