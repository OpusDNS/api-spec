/**
 * Response types for OpusDNS API endpoints.
 *
 * Each type is derived from the OpenAPI operation and includes endpoint, summary, and response descriptions for better developer understanding.
 *
 * This file is auto-generated from the OpenAPI specification.
 * Do not edit manually.
 */

import { components } from '../schema';

import { Pagination_OrganizationCredential, Problem, HTTPValidationError, OrganizationCredentialCreated, DomainAvailabilityList, Pagination_ContactSchema, ContactSchema, ContactVerification, Contact, Pagination_DnsZone, DnsZone, DnsChanges, DomainSearch, Pagination_Domain, Domain, DomainRenew, DomainCheck, Pagination_EmailForward, EmailForward, EmailForwardBulkDeleteResult, EmailForwardBulkUpdateResult, Pagination_Event, EventSchema, Pagination_UserNotificationSummary, Notification, UserNotification, Pagination_Organization, Organization, OrganizationWithPlan, IpRestriction, Pagination_User, User, UserWithAttributes, PermissionSet, RelationSet, UserWithRelationPermissions } from './schemas';

/**
 * Response types for GET AuthClientCredentials endpoint
 * 
 * @path /v1/auth/client_credentials
 * @param status (query) - Optional status to filter the results
 */
export type GET_AuthClientCredentials = {
  200: Pagination_OrganizationCredential
  401: Problem
  422: HTTPValidationError
}

/**
 * 200 response for GET AuthClientCredentials endpoint
 * 
 * @path /v1/auth/client_credentials
 * @param status (query) - Optional status to filter the results
 */
export type GET_AuthClientCredentials_Response_200 = Pagination_OrganizationCredential

/**
 * 401 response for GET AuthClientCredentials endpoint
 * 
 * @path /v1/auth/client_credentials
 * @param status (query) - Optional status to filter the results
 */
export type GET_AuthClientCredentials_Response_401 = Problem

/**
 * 422 response for GET AuthClientCredentials endpoint
 * 
 * @path /v1/auth/client_credentials
 * @param status (query) - Optional status to filter the results
 */
export type GET_AuthClientCredentials_Response_422 = HTTPValidationError

/**
 * Response types for POST AuthClientCredentials endpoint
 * 
 * @path /v1/auth/client_credentials
 */
export type POST_AuthClientCredentials = {
  200: OrganizationCredentialCreated
  401: Problem
  422: HTTPValidationError
}

/**
 * 200 response for POST AuthClientCredentials endpoint
 * 
 * @path /v1/auth/client_credentials
 */
export type POST_AuthClientCredentials_Response_200 = OrganizationCredentialCreated

/**
 * 401 response for POST AuthClientCredentials endpoint
 * 
 * @path /v1/auth/client_credentials
 */
export type POST_AuthClientCredentials_Response_401 = Problem

/**
 * 422 response for POST AuthClientCredentials endpoint
 * 
 * @path /v1/auth/client_credentials
 */
export type POST_AuthClientCredentials_Response_422 = HTTPValidationError

/**
 * Response types for DELETE AuthClientCredentialsByApiKeyId endpoint
 * 
 * @path /v1/auth/client_credentials/{api_key_id}
 */
export type DELETE_AuthClientCredentialsByApiKeyId = {
  401: Problem
  404: Problem
  422: HTTPValidationError
}

/**
 * 401 response for DELETE AuthClientCredentialsByApiKeyId endpoint
 * 
 * @path /v1/auth/client_credentials/{api_key_id}
 */
export type DELETE_AuthClientCredentialsByApiKeyId_Response_401 = Problem

/**
 * 404 response for DELETE AuthClientCredentialsByApiKeyId endpoint
 * 
 * @path /v1/auth/client_credentials/{api_key_id}
 */
export type DELETE_AuthClientCredentialsByApiKeyId_Response_404 = Problem

/**
 * 422 response for DELETE AuthClientCredentialsByApiKeyId endpoint
 * 
 * @path /v1/auth/client_credentials/{api_key_id}
 */
export type DELETE_AuthClientCredentialsByApiKeyId_Response_422 = HTTPValidationError

/**
 * Response types for POST AuthLogout endpoint
 * 
 * @path /v1/auth/logout
 */
export type POST_AuthLogout = {
  401: Problem
}

/**
 * 401 response for POST AuthLogout endpoint
 * 
 * @path /v1/auth/logout
 */
export type POST_AuthLogout_Response_401 = Problem

/**
 * Response types for POST AuthSignup endpoint
 * 
 * @path /v1/auth/signup
 */
export type POST_AuthSignup = {
  409: Problem
  422: HTTPValidationError
}

/**
 * 409 response for POST AuthSignup endpoint
 * 
 * @path /v1/auth/signup
 */
export type POST_AuthSignup_Response_409 = Problem

/**
 * 422 response for POST AuthSignup endpoint
 * 
 * @path /v1/auth/signup
 */
export type POST_AuthSignup_Response_422 = HTTPValidationError

/**
 * Response types for POST AuthToken endpoint
 * 
 * @path /v1/auth/token
 */
export type POST_AuthToken = {
  401: Problem
  422: HTTPValidationError
}

/**
 * 401 response for POST AuthToken endpoint
 * 
 * @path /v1/auth/token
 */
export type POST_AuthToken_Response_401 = Problem

/**
 * 422 response for POST AuthToken endpoint
 * 
 * @path /v1/auth/token
 */
export type POST_AuthToken_Response_422 = HTTPValidationError

/**
 * Response types for GET Availability endpoint
 * 
 * @path /v1/availability
 * @param domains (query) - 
Specify one or more domains to check for availability.

 */
export type GET_Availability = {
  200: DomainAvailabilityList
  401: Problem
  422: HTTPValidationError
  502: Problem
}

/**
 * 200 response for GET Availability endpoint
 * 
 * @path /v1/availability
 * @param domains (query) - 
Specify one or more domains to check for availability.

 */
export type GET_Availability_Response_200 = DomainAvailabilityList

/**
 * 401 response for GET Availability endpoint
 * 
 * @path /v1/availability
 * @param domains (query) - 
Specify one or more domains to check for availability.

 */
export type GET_Availability_Response_401 = Problem

/**
 * 422 response for GET Availability endpoint
 * 
 * @path /v1/availability
 * @param domains (query) - 
Specify one or more domains to check for availability.

 */
export type GET_Availability_Response_422 = HTTPValidationError

/**
 * 502 response for GET Availability endpoint
 * 
 * @path /v1/availability
 * @param domains (query) - 
Specify one or more domains to check for availability.

 */
export type GET_Availability_Response_502 = Problem

/**
 * Response types for GET AvailabilityStream endpoint
 * 
 * @path /v1/availability/stream
 * @param domains (query) - 
Specify one or more domains to check for availability.

 */
export type GET_AvailabilityStream = {
  401: Problem
  422: HTTPValidationError
  502: Problem
}

/**
 * 401 response for GET AvailabilityStream endpoint
 * 
 * @path /v1/availability/stream
 * @param domains (query) - 
Specify one or more domains to check for availability.

 */
export type GET_AvailabilityStream_Response_401 = Problem

/**
 * 422 response for GET AvailabilityStream endpoint
 * 
 * @path /v1/availability/stream
 * @param domains (query) - 
Specify one or more domains to check for availability.

 */
export type GET_AvailabilityStream_Response_422 = HTTPValidationError

/**
 * 502 response for GET AvailabilityStream endpoint
 * 
 * @path /v1/availability/stream
 * @param domains (query) - 
Specify one or more domains to check for availability.

 */
export type GET_AvailabilityStream_Response_502 = Problem

/**
 * Response types for GET Contacts endpoint
 * 
 * @path /v1/contacts
 */
export type GET_Contacts = {
  200: Pagination_ContactSchema
  422: HTTPValidationError
}

/**
 * 200 response for GET Contacts endpoint
 * 
 * @path /v1/contacts
 */
export type GET_Contacts_Response_200 = Pagination_ContactSchema

/**
 * 422 response for GET Contacts endpoint
 * 
 * @path /v1/contacts
 */
export type GET_Contacts_Response_422 = HTTPValidationError

/**
 * Response types for POST Contacts endpoint
 * 
 * @path /v1/contacts
 */
export type POST_Contacts = {
  201: ContactSchema
  422: HTTPValidationError
}

/**
 * 201 response for POST Contacts endpoint
 * 
 * @path /v1/contacts
 */
export type POST_Contacts_Response_201 = ContactSchema

/**
 * 422 response for POST Contacts endpoint
 * 
 * @path /v1/contacts
 */
export type POST_Contacts_Response_422 = HTTPValidationError

/**
 * Response types for DELETE ContactsByContactId endpoint
 * 
 * @path /v1/contacts/{contact_id}
 */
export type DELETE_ContactsByContactId = {
  404: Problem
  409: Problem
  422: HTTPValidationError
}

/**
 * 404 response for DELETE ContactsByContactId endpoint
 * 
 * @path /v1/contacts/{contact_id}
 */
export type DELETE_ContactsByContactId_Response_404 = Problem

/**
 * 409 response for DELETE ContactsByContactId endpoint
 * 
 * @path /v1/contacts/{contact_id}
 */
export type DELETE_ContactsByContactId_Response_409 = Problem

/**
 * 422 response for DELETE ContactsByContactId endpoint
 * 
 * @path /v1/contacts/{contact_id}
 */
export type DELETE_ContactsByContactId_Response_422 = HTTPValidationError

/**
 * Response types for GET ContactsByContactId endpoint
 * 
 * @path /v1/contacts/{contact_id}
 */
export type GET_ContactsByContactId = {
  200: ContactSchema
  404: Problem
  422: HTTPValidationError
}

/**
 * 200 response for GET ContactsByContactId endpoint
 * 
 * @path /v1/contacts/{contact_id}
 */
export type GET_ContactsByContactId_Response_200 = ContactSchema

/**
 * 404 response for GET ContactsByContactId endpoint
 * 
 * @path /v1/contacts/{contact_id}
 */
export type GET_ContactsByContactId_Response_404 = Problem

/**
 * 422 response for GET ContactsByContactId endpoint
 * 
 * @path /v1/contacts/{contact_id}
 */
export type GET_ContactsByContactId_Response_422 = HTTPValidationError

/**
 * Response types for DELETE ContactsByContactIdVerification endpoint
 * 
 * @path /v1/contacts/{contact_id}/verification
 */
export type DELETE_ContactsByContactIdVerification = {
  401: Problem
  404: Problem
  422: HTTPValidationError
}

/**
 * 401 response for DELETE ContactsByContactIdVerification endpoint
 * 
 * @path /v1/contacts/{contact_id}/verification
 */
export type DELETE_ContactsByContactIdVerification_Response_401 = Problem

/**
 * 404 response for DELETE ContactsByContactIdVerification endpoint
 * 
 * @path /v1/contacts/{contact_id}/verification
 */
export type DELETE_ContactsByContactIdVerification_Response_404 = Problem

/**
 * 422 response for DELETE ContactsByContactIdVerification endpoint
 * 
 * @path /v1/contacts/{contact_id}/verification
 */
export type DELETE_ContactsByContactIdVerification_Response_422 = HTTPValidationError

/**
 * Response types for GET ContactsByContactIdVerification endpoint
 * 
 * @path /v1/contacts/{contact_id}/verification
 */
export type GET_ContactsByContactIdVerification = {
  200: ContactVerification
  401: Problem
  404: Problem
  422: HTTPValidationError
}

/**
 * 200 response for GET ContactsByContactIdVerification endpoint
 * 
 * @path /v1/contacts/{contact_id}/verification
 */
export type GET_ContactsByContactIdVerification_Response_200 = ContactVerification

/**
 * 401 response for GET ContactsByContactIdVerification endpoint
 * 
 * @path /v1/contacts/{contact_id}/verification
 */
export type GET_ContactsByContactIdVerification_Response_401 = Problem

/**
 * 404 response for GET ContactsByContactIdVerification endpoint
 * 
 * @path /v1/contacts/{contact_id}/verification
 */
export type GET_ContactsByContactIdVerification_Response_404 = Problem

/**
 * 422 response for GET ContactsByContactIdVerification endpoint
 * 
 * @path /v1/contacts/{contact_id}/verification
 */
export type GET_ContactsByContactIdVerification_Response_422 = HTTPValidationError

/**
 * Response types for POST ContactsByContactIdVerification endpoint
 * 
 * @path /v1/contacts/{contact_id}/verification
 */
export type POST_ContactsByContactIdVerification = {
  401: Problem
  404: Problem
  405: Problem
  422: HTTPValidationError
}

/**
 * 401 response for POST ContactsByContactIdVerification endpoint
 * 
 * @path /v1/contacts/{contact_id}/verification
 */
export type POST_ContactsByContactIdVerification_Response_401 = Problem

/**
 * 404 response for POST ContactsByContactIdVerification endpoint
 * 
 * @path /v1/contacts/{contact_id}/verification
 */
export type POST_ContactsByContactIdVerification_Response_404 = Problem

/**
 * 405 response for POST ContactsByContactIdVerification endpoint
 * 
 * @path /v1/contacts/{contact_id}/verification
 */
export type POST_ContactsByContactIdVerification_Response_405 = Problem

/**
 * 422 response for POST ContactsByContactIdVerification endpoint
 * 
 * @path /v1/contacts/{contact_id}/verification
 */
export type POST_ContactsByContactIdVerification_Response_422 = HTTPValidationError

/**
 * Response types for PUT ContactsByContactIdVerification endpoint
 * 
 * @path /v1/contacts/{contact_id}/verification
 */
export type PUT_ContactsByContactIdVerification = {
  400: Problem
  401: Problem
  403: Problem
  404: Problem
  422: HTTPValidationError
}

/**
 * 400 response for PUT ContactsByContactIdVerification endpoint
 * 
 * @path /v1/contacts/{contact_id}/verification
 */
export type PUT_ContactsByContactIdVerification_Response_400 = Problem

/**
 * 401 response for PUT ContactsByContactIdVerification endpoint
 * 
 * @path /v1/contacts/{contact_id}/verification
 */
export type PUT_ContactsByContactIdVerification_Response_401 = Problem

/**
 * 403 response for PUT ContactsByContactIdVerification endpoint
 * 
 * @path /v1/contacts/{contact_id}/verification
 */
export type PUT_ContactsByContactIdVerification_Response_403 = Problem

/**
 * 404 response for PUT ContactsByContactIdVerification endpoint
 * 
 * @path /v1/contacts/{contact_id}/verification
 */
export type PUT_ContactsByContactIdVerification_Response_404 = Problem

/**
 * 422 response for PUT ContactsByContactIdVerification endpoint
 * 
 * @path /v1/contacts/{contact_id}/verification
 */
export type PUT_ContactsByContactIdVerification_Response_422 = HTTPValidationError

/**
 * Response types for GET ContactsVerification endpoint
 * 
 * @path /v1/contacts/verification
 */
export type GET_ContactsVerification = {
  200: Contact
  401: Problem
  404: Problem
  422: HTTPValidationError
}

/**
 * 200 response for GET ContactsVerification endpoint
 * 
 * @path /v1/contacts/verification
 */
export type GET_ContactsVerification_Response_200 = Contact

/**
 * 401 response for GET ContactsVerification endpoint
 * 
 * @path /v1/contacts/verification
 */
export type GET_ContactsVerification_Response_401 = Problem

/**
 * 404 response for GET ContactsVerification endpoint
 * 
 * @path /v1/contacts/verification
 */
export type GET_ContactsVerification_Response_404 = Problem

/**
 * 422 response for GET ContactsVerification endpoint
 * 
 * @path /v1/contacts/verification
 */
export type GET_ContactsVerification_Response_422 = HTTPValidationError

/**
 * Response types for PUT ContactsVerification endpoint
 * 
 * @path /v1/contacts/verification
 */
export type PUT_ContactsVerification = {
  400: Problem
  401: Problem
  404: Problem
  422: HTTPValidationError
}

/**
 * 400 response for PUT ContactsVerification endpoint
 * 
 * @path /v1/contacts/verification
 */
export type PUT_ContactsVerification_Response_400 = Problem

/**
 * 401 response for PUT ContactsVerification endpoint
 * 
 * @path /v1/contacts/verification
 */
export type PUT_ContactsVerification_Response_401 = Problem

/**
 * 404 response for PUT ContactsVerification endpoint
 * 
 * @path /v1/contacts/verification
 */
export type PUT_ContactsVerification_Response_404 = Problem

/**
 * 422 response for PUT ContactsVerification endpoint
 * 
 * @path /v1/contacts/verification
 */
export type PUT_ContactsVerification_Response_422 = HTTPValidationError

/**
 * Response types for GET ContactsVerify endpoint
 * 
 * @path /v1/contacts/verify
 */
export type GET_ContactsVerify = {
  422: HTTPValidationError
}

/**
 * 422 response for GET ContactsVerify endpoint
 * 
 * @path /v1/contacts/verify
 */
export type GET_ContactsVerify_Response_422 = HTTPValidationError

/**
 * Response types for GET Dns endpoint
 * 
 * @path /v1/dns
 */
export type GET_Dns = {
  200: Pagination_DnsZone
  422: HTTPValidationError
}

/**
 * 200 response for GET Dns endpoint
 * 
 * @path /v1/dns
 */
export type GET_Dns_Response_200 = Pagination_DnsZone

/**
 * 422 response for GET Dns endpoint
 * 
 * @path /v1/dns
 */
export type GET_Dns_Response_422 = HTTPValidationError

/**
 * Response types for POST Dns endpoint
 * 
 * @path /v1/dns
 */
export type POST_Dns = {
  422: HTTPValidationError
}

/**
 * 422 response for POST Dns endpoint
 * 
 * @path /v1/dns
 */
export type POST_Dns_Response_422 = HTTPValidationError

/**
 * Response types for DELETE DnsByZoneName endpoint
 * 
 * @path /v1/dns/{zone_name}
 * @param zone_name (path) - DNS zone name (trailing dot optional)
 */
export type DELETE_DnsByZoneName = {
  422: HTTPValidationError
}

/**
 * 422 response for DELETE DnsByZoneName endpoint
 * 
 * @path /v1/dns/{zone_name}
 * @param zone_name (path) - DNS zone name (trailing dot optional)
 */
export type DELETE_DnsByZoneName_Response_422 = HTTPValidationError

/**
 * Response types for GET DnsByZoneName endpoint
 * 
 * @path /v1/dns/{zone_name}
 * @param zone_name (path) - DNS zone name (trailing dot optional)
 */
export type GET_DnsByZoneName = {
  200: DnsZone
  422: HTTPValidationError
}

/**
 * 200 response for GET DnsByZoneName endpoint
 * 
 * @path /v1/dns/{zone_name}
 * @param zone_name (path) - DNS zone name (trailing dot optional)
 */
export type GET_DnsByZoneName_Response_200 = DnsZone

/**
 * 422 response for GET DnsByZoneName endpoint
 * 
 * @path /v1/dns/{zone_name}
 * @param zone_name (path) - DNS zone name (trailing dot optional)
 */
export type GET_DnsByZoneName_Response_422 = HTTPValidationError

/**
 * Response types for POST DnsByZoneNameDnssecDisable endpoint
 * 
 * @path /v1/dns/{zone_name}/dnssec/disable
 * @param zone_name (path) - DNS zone name (trailing dot optional)
 */
export type POST_DnsByZoneNameDnssecDisable = {
  200: DnsChanges
  422: HTTPValidationError
}

/**
 * 200 response for POST DnsByZoneNameDnssecDisable endpoint
 * 
 * @path /v1/dns/{zone_name}/dnssec/disable
 * @param zone_name (path) - DNS zone name (trailing dot optional)
 */
export type POST_DnsByZoneNameDnssecDisable_Response_200 = DnsChanges

/**
 * 422 response for POST DnsByZoneNameDnssecDisable endpoint
 * 
 * @path /v1/dns/{zone_name}/dnssec/disable
 * @param zone_name (path) - DNS zone name (trailing dot optional)
 */
export type POST_DnsByZoneNameDnssecDisable_Response_422 = HTTPValidationError

/**
 * Response types for POST DnsByZoneNameDnssecEnable endpoint
 * 
 * @path /v1/dns/{zone_name}/dnssec/enable
 * @param zone_name (path) - DNS zone name (trailing dot optional)
 */
export type POST_DnsByZoneNameDnssecEnable = {
  200: DnsChanges
  422: HTTPValidationError
}

/**
 * 200 response for POST DnsByZoneNameDnssecEnable endpoint
 * 
 * @path /v1/dns/{zone_name}/dnssec/enable
 * @param zone_name (path) - DNS zone name (trailing dot optional)
 */
export type POST_DnsByZoneNameDnssecEnable_Response_200 = DnsChanges

/**
 * 422 response for POST DnsByZoneNameDnssecEnable endpoint
 * 
 * @path /v1/dns/{zone_name}/dnssec/enable
 * @param zone_name (path) - DNS zone name (trailing dot optional)
 */
export type POST_DnsByZoneNameDnssecEnable_Response_422 = HTTPValidationError

/**
 * Response types for PUT DnsByZoneNameRrsets endpoint
 * 
 * @path /v1/dns/{zone_name}/rrsets
 * @param zone_name (path) - DNS zone name (trailing dot optional)
 */
export type PUT_DnsByZoneNameRrsets = {
  422: HTTPValidationError
}

/**
 * 422 response for PUT DnsByZoneNameRrsets endpoint
 * 
 * @path /v1/dns/{zone_name}/rrsets
 * @param zone_name (path) - DNS zone name (trailing dot optional)
 */
export type PUT_DnsByZoneNameRrsets_Response_422 = HTTPValidationError

/**
 * Response types for GET DomainSearchSuggest endpoint
 * 
 * @path /v1/domain-search/suggest
 * @param query (query) - The primary keyword or phrase for the domain search
 * @param tlds (query) - 
Specify one or more TLDs to include in the search.

 * @param limit (query) - The maximum number of domain suggestions to return
 * @param premium (query) - Whether to include premium domains in the suggestions
 */
export type GET_DomainSearchSuggest = {
  200: DomainSearch
  401: Problem
  422: HTTPValidationError
  502: Problem
}

/**
 * 200 response for GET DomainSearchSuggest endpoint
 * 
 * @path /v1/domain-search/suggest
 * @param query (query) - The primary keyword or phrase for the domain search
 * @param tlds (query) - 
Specify one or more TLDs to include in the search.

 * @param limit (query) - The maximum number of domain suggestions to return
 * @param premium (query) - Whether to include premium domains in the suggestions
 */
export type GET_DomainSearchSuggest_Response_200 = DomainSearch

/**
 * 401 response for GET DomainSearchSuggest endpoint
 * 
 * @path /v1/domain-search/suggest
 * @param query (query) - The primary keyword or phrase for the domain search
 * @param tlds (query) - 
Specify one or more TLDs to include in the search.

 * @param limit (query) - The maximum number of domain suggestions to return
 * @param premium (query) - Whether to include premium domains in the suggestions
 */
export type GET_DomainSearchSuggest_Response_401 = Problem

/**
 * 422 response for GET DomainSearchSuggest endpoint
 * 
 * @path /v1/domain-search/suggest
 * @param query (query) - The primary keyword or phrase for the domain search
 * @param tlds (query) - 
Specify one or more TLDs to include in the search.

 * @param limit (query) - The maximum number of domain suggestions to return
 * @param premium (query) - Whether to include premium domains in the suggestions
 */
export type GET_DomainSearchSuggest_Response_422 = HTTPValidationError

/**
 * 502 response for GET DomainSearchSuggest endpoint
 * 
 * @path /v1/domain-search/suggest
 * @param query (query) - The primary keyword or phrase for the domain search
 * @param tlds (query) - 
Specify one or more TLDs to include in the search.

 * @param limit (query) - The maximum number of domain suggestions to return
 * @param premium (query) - Whether to include premium domains in the suggestions
 */
export type GET_DomainSearchSuggest_Response_502 = Problem

/**
 * Response types for GET Domains endpoint
 * 
 * @path /v1/domains
 */
export type GET_Domains = {
  200: Pagination_Domain
  422: HTTPValidationError
}

/**
 * 200 response for GET Domains endpoint
 * 
 * @path /v1/domains
 */
export type GET_Domains_Response_200 = Pagination_Domain

/**
 * 422 response for GET Domains endpoint
 * 
 * @path /v1/domains
 */
export type GET_Domains_Response_422 = HTTPValidationError

/**
 * Response types for POST Domains endpoint
 * 
 * @path /v1/domains
 */
export type POST_Domains = {
  201: Domain
  400: Problem
  404: Problem
  409: Problem
  422: HTTPValidationError
}

/**
 * 201 response for POST Domains endpoint
 * 
 * @path /v1/domains
 */
export type POST_Domains_Response_201 = Domain

/**
 * 400 response for POST Domains endpoint
 * 
 * @path /v1/domains
 */
export type POST_Domains_Response_400 = Problem

/**
 * 404 response for POST Domains endpoint
 * 
 * @path /v1/domains
 */
export type POST_Domains_Response_404 = Problem

/**
 * 409 response for POST Domains endpoint
 * 
 * @path /v1/domains
 */
export type POST_Domains_Response_409 = Problem

/**
 * 422 response for POST Domains endpoint
 * 
 * @path /v1/domains
 */
export type POST_Domains_Response_422 = HTTPValidationError

/**
 * Response types for DELETE DomainsByDomainReference endpoint
 * 
 * @path /v1/domains/{domain_reference}
 */
export type DELETE_DomainsByDomainReference = {
  404: Problem
  409: Problem
  422: HTTPValidationError
}

/**
 * 404 response for DELETE DomainsByDomainReference endpoint
 * 
 * @path /v1/domains/{domain_reference}
 */
export type DELETE_DomainsByDomainReference_Response_404 = Problem

/**
 * 409 response for DELETE DomainsByDomainReference endpoint
 * 
 * @path /v1/domains/{domain_reference}
 */
export type DELETE_DomainsByDomainReference_Response_409 = Problem

/**
 * 422 response for DELETE DomainsByDomainReference endpoint
 * 
 * @path /v1/domains/{domain_reference}
 */
export type DELETE_DomainsByDomainReference_Response_422 = HTTPValidationError

/**
 * Response types for GET DomainsByDomainReference endpoint
 * 
 * @path /v1/domains/{domain_reference}
 */
export type GET_DomainsByDomainReference = {
  200: Domain
  404: Problem
  422: HTTPValidationError
}

/**
 * 200 response for GET DomainsByDomainReference endpoint
 * 
 * @path /v1/domains/{domain_reference}
 */
export type GET_DomainsByDomainReference_Response_200 = Domain

/**
 * 404 response for GET DomainsByDomainReference endpoint
 * 
 * @path /v1/domains/{domain_reference}
 */
export type GET_DomainsByDomainReference_Response_404 = Problem

/**
 * 422 response for GET DomainsByDomainReference endpoint
 * 
 * @path /v1/domains/{domain_reference}
 */
export type GET_DomainsByDomainReference_Response_422 = HTTPValidationError

/**
 * Response types for PATCH DomainsByDomainReference endpoint
 * 
 * @path /v1/domains/{domain_reference}
 */
export type PATCH_DomainsByDomainReference = {
  200: Domain
  404: Problem
  422: HTTPValidationError
}

/**
 * 200 response for PATCH DomainsByDomainReference endpoint
 * 
 * @path /v1/domains/{domain_reference}
 */
export type PATCH_DomainsByDomainReference_Response_200 = Domain

/**
 * 404 response for PATCH DomainsByDomainReference endpoint
 * 
 * @path /v1/domains/{domain_reference}
 */
export type PATCH_DomainsByDomainReference_Response_404 = Problem

/**
 * 422 response for PATCH DomainsByDomainReference endpoint
 * 
 * @path /v1/domains/{domain_reference}
 */
export type PATCH_DomainsByDomainReference_Response_422 = HTTPValidationError

/**
 * Response types for DELETE DomainsByDomainReferenceDnssec endpoint
 * 
 * @path /v1/domains/{domain_reference}/dnssec
 */
export type DELETE_DomainsByDomainReferenceDnssec = {
  404: Problem
  422: HTTPValidationError
}

/**
 * 404 response for DELETE DomainsByDomainReferenceDnssec endpoint
 * 
 * @path /v1/domains/{domain_reference}/dnssec
 */
export type DELETE_DomainsByDomainReferenceDnssec_Response_404 = Problem

/**
 * 422 response for DELETE DomainsByDomainReferenceDnssec endpoint
 * 
 * @path /v1/domains/{domain_reference}/dnssec
 */
export type DELETE_DomainsByDomainReferenceDnssec_Response_422 = HTTPValidationError

/**
 * Response types for GET DomainsByDomainReferenceDnssec endpoint
 * 
 * @path /v1/domains/{domain_reference}/dnssec
 */
export type GET_DomainsByDomainReferenceDnssec = {
  404: Problem
  422: HTTPValidationError
}

/**
 * 404 response for GET DomainsByDomainReferenceDnssec endpoint
 * 
 * @path /v1/domains/{domain_reference}/dnssec
 */
export type GET_DomainsByDomainReferenceDnssec_Response_404 = Problem

/**
 * 422 response for GET DomainsByDomainReferenceDnssec endpoint
 * 
 * @path /v1/domains/{domain_reference}/dnssec
 */
export type GET_DomainsByDomainReferenceDnssec_Response_422 = HTTPValidationError

/**
 * Response types for PUT DomainsByDomainReferenceDnssec endpoint
 * 
 * @path /v1/domains/{domain_reference}/dnssec
 */
export type PUT_DomainsByDomainReferenceDnssec = {
  404: Problem
  422: HTTPValidationError
}

/**
 * 404 response for PUT DomainsByDomainReferenceDnssec endpoint
 * 
 * @path /v1/domains/{domain_reference}/dnssec
 */
export type PUT_DomainsByDomainReferenceDnssec_Response_404 = Problem

/**
 * 422 response for PUT DomainsByDomainReferenceDnssec endpoint
 * 
 * @path /v1/domains/{domain_reference}/dnssec
 */
export type PUT_DomainsByDomainReferenceDnssec_Response_422 = HTTPValidationError

/**
 * Response types for POST DomainsByDomainReferenceRenew endpoint
 * 
 * @path /v1/domains/{domain_reference}/renew
 */
export type POST_DomainsByDomainReferenceRenew = {
  200: DomainRenew
  422: HTTPValidationError
}

/**
 * 200 response for POST DomainsByDomainReferenceRenew endpoint
 * 
 * @path /v1/domains/{domain_reference}/renew
 */
export type POST_DomainsByDomainReferenceRenew_Response_200 = DomainRenew

/**
 * 422 response for POST DomainsByDomainReferenceRenew endpoint
 * 
 * @path /v1/domains/{domain_reference}/renew
 */
export type POST_DomainsByDomainReferenceRenew_Response_422 = HTTPValidationError

/**
 * Response types for DELETE DomainsByDomainReferenceTransfer endpoint
 * 
 * @path /v1/domains/{domain_reference}/transfer
 */
export type DELETE_DomainsByDomainReferenceTransfer = {
  404: Problem
  409: Problem
  422: HTTPValidationError
}

/**
 * 404 response for DELETE DomainsByDomainReferenceTransfer endpoint
 * 
 * @path /v1/domains/{domain_reference}/transfer
 */
export type DELETE_DomainsByDomainReferenceTransfer_Response_404 = Problem

/**
 * 409 response for DELETE DomainsByDomainReferenceTransfer endpoint
 * 
 * @path /v1/domains/{domain_reference}/transfer
 */
export type DELETE_DomainsByDomainReferenceTransfer_Response_409 = Problem

/**
 * 422 response for DELETE DomainsByDomainReferenceTransfer endpoint
 * 
 * @path /v1/domains/{domain_reference}/transfer
 */
export type DELETE_DomainsByDomainReferenceTransfer_Response_422 = HTTPValidationError

/**
 * Response types for GET DomainsCheck endpoint
 * 
 * @path /v1/domains/check
 * @param domains (query) - 
Specify one or more domains to check for availability.

 */
export type GET_DomainsCheck = {
  200: DomainCheck
  422: HTTPValidationError
}

/**
 * 200 response for GET DomainsCheck endpoint
 * 
 * @path /v1/domains/check
 * @param domains (query) - 
Specify one or more domains to check for availability.

 */
export type GET_DomainsCheck_Response_200 = DomainCheck

/**
 * 422 response for GET DomainsCheck endpoint
 * 
 * @path /v1/domains/check
 * @param domains (query) - 
Specify one or more domains to check for availability.

 */
export type GET_DomainsCheck_Response_422 = HTTPValidationError

/**
 * Response types for POST DomainsTransfer endpoint
 * 
 * @path /v1/domains/transfer
 */
export type POST_DomainsTransfer = {
  201: Domain
  400: Problem
  404: Problem
  409: Problem
  422: Problem
}

/**
 * 201 response for POST DomainsTransfer endpoint
 * 
 * @path /v1/domains/transfer
 */
export type POST_DomainsTransfer_Response_201 = Domain

/**
 * 400 response for POST DomainsTransfer endpoint
 * 
 * @path /v1/domains/transfer
 */
export type POST_DomainsTransfer_Response_400 = Problem

/**
 * 404 response for POST DomainsTransfer endpoint
 * 
 * @path /v1/domains/transfer
 */
export type POST_DomainsTransfer_Response_404 = Problem

/**
 * 409 response for POST DomainsTransfer endpoint
 * 
 * @path /v1/domains/transfer
 */
export type POST_DomainsTransfer_Response_409 = Problem

/**
 * 422 response for POST DomainsTransfer endpoint
 * 
 * @path /v1/domains/transfer
 */
export type POST_DomainsTransfer_Response_422 = Problem

/**
 * Response types for GET EmailForwards endpoint
 * 
 * @path /v1/email-forwards
 * @param status (query) - Optional status to filter the results
 * @param source_address (query) - Optional source address to filter the results
 * @param target_address (query) - Optional target address to filter the results
 */
export type GET_EmailForwards = {
  200: Pagination_EmailForward
  422: HTTPValidationError
}

/**
 * 200 response for GET EmailForwards endpoint
 * 
 * @path /v1/email-forwards
 * @param status (query) - Optional status to filter the results
 * @param source_address (query) - Optional source address to filter the results
 * @param target_address (query) - Optional target address to filter the results
 */
export type GET_EmailForwards_Response_200 = Pagination_EmailForward

/**
 * 422 response for GET EmailForwards endpoint
 * 
 * @path /v1/email-forwards
 * @param status (query) - Optional status to filter the results
 * @param source_address (query) - Optional source address to filter the results
 * @param target_address (query) - Optional target address to filter the results
 */
export type GET_EmailForwards_Response_422 = HTTPValidationError

/**
 * Response types for POST EmailForwards endpoint
 * 
 * @path /v1/email-forwards
 */
export type POST_EmailForwards = {
  201: EmailForward
  422: HTTPValidationError
}

/**
 * 201 response for POST EmailForwards endpoint
 * 
 * @path /v1/email-forwards
 */
export type POST_EmailForwards_Response_201 = EmailForward

/**
 * 422 response for POST EmailForwards endpoint
 * 
 * @path /v1/email-forwards
 */
export type POST_EmailForwards_Response_422 = HTTPValidationError

/**
 * Response types for POST EmailForwardsBulkDelete endpoint
 * 
 * @path /v1/email-forwards/bulk-delete
 */
export type POST_EmailForwardsBulkDelete = {
  200: EmailForwardBulkDeleteResult
  422: HTTPValidationError
}

/**
 * 200 response for POST EmailForwardsBulkDelete endpoint
 * 
 * @path /v1/email-forwards/bulk-delete
 */
export type POST_EmailForwardsBulkDelete_Response_200 = EmailForwardBulkDeleteResult

/**
 * 422 response for POST EmailForwardsBulkDelete endpoint
 * 
 * @path /v1/email-forwards/bulk-delete
 */
export type POST_EmailForwardsBulkDelete_Response_422 = HTTPValidationError

/**
 * Response types for PATCH EmailForwardsBulkUpdate endpoint
 * 
 * @path /v1/email-forwards/bulk-update
 */
export type PATCH_EmailForwardsBulkUpdate = {
  200: EmailForwardBulkUpdateResult
  422: HTTPValidationError
}

/**
 * 200 response for PATCH EmailForwardsBulkUpdate endpoint
 * 
 * @path /v1/email-forwards/bulk-update
 */
export type PATCH_EmailForwardsBulkUpdate_Response_200 = EmailForwardBulkUpdateResult

/**
 * 422 response for PATCH EmailForwardsBulkUpdate endpoint
 * 
 * @path /v1/email-forwards/bulk-update
 */
export type PATCH_EmailForwardsBulkUpdate_Response_422 = HTTPValidationError

/**
 * Response types for DELETE EmailForwardsByEmailForwardId endpoint
 * 
 * @path /v1/email-forwards/{email_forward_id}
 */
export type DELETE_EmailForwardsByEmailForwardId = {
  422: HTTPValidationError
}

/**
 * 422 response for DELETE EmailForwardsByEmailForwardId endpoint
 * 
 * @path /v1/email-forwards/{email_forward_id}
 */
export type DELETE_EmailForwardsByEmailForwardId_Response_422 = HTTPValidationError

/**
 * Response types for GET EmailForwardsByEmailForwardId endpoint
 * 
 * @path /v1/email-forwards/{email_forward_id}
 */
export type GET_EmailForwardsByEmailForwardId = {
  200: EmailForward
  422: HTTPValidationError
}

/**
 * 200 response for GET EmailForwardsByEmailForwardId endpoint
 * 
 * @path /v1/email-forwards/{email_forward_id}
 */
export type GET_EmailForwardsByEmailForwardId_Response_200 = EmailForward

/**
 * 422 response for GET EmailForwardsByEmailForwardId endpoint
 * 
 * @path /v1/email-forwards/{email_forward_id}
 */
export type GET_EmailForwardsByEmailForwardId_Response_422 = HTTPValidationError

/**
 * Response types for PATCH EmailForwardsByEmailForwardId endpoint
 * 
 * @path /v1/email-forwards/{email_forward_id}
 */
export type PATCH_EmailForwardsByEmailForwardId = {
  200: EmailForward
  422: HTTPValidationError
}

/**
 * 200 response for PATCH EmailForwardsByEmailForwardId endpoint
 * 
 * @path /v1/email-forwards/{email_forward_id}
 */
export type PATCH_EmailForwardsByEmailForwardId_Response_200 = EmailForward

/**
 * 422 response for PATCH EmailForwardsByEmailForwardId endpoint
 * 
 * @path /v1/email-forwards/{email_forward_id}
 */
export type PATCH_EmailForwardsByEmailForwardId_Response_422 = HTTPValidationError

/**
 * Response types for GET Event endpoint
 * 
 * @path /v1/event
 */
export type GET_Event = {
  200: Pagination_Event
  401: Problem
  422: HTTPValidationError
}

/**
 * 200 response for GET Event endpoint
 * 
 * @path /v1/event
 */
export type GET_Event_Response_200 = Pagination_Event

/**
 * 401 response for GET Event endpoint
 * 
 * @path /v1/event
 */
export type GET_Event_Response_401 = Problem

/**
 * 422 response for GET Event endpoint
 * 
 * @path /v1/event
 */
export type GET_Event_Response_422 = HTTPValidationError

/**
 * Response types for GET EventByEventId endpoint
 * 
 * @path /v1/event/{event_id}
 */
export type GET_EventByEventId = {
  200: EventSchema
  401: Problem
  404: Problem
  422: HTTPValidationError
}

/**
 * 200 response for GET EventByEventId endpoint
 * 
 * @path /v1/event/{event_id}
 */
export type GET_EventByEventId_Response_200 = EventSchema

/**
 * 401 response for GET EventByEventId endpoint
 * 
 * @path /v1/event/{event_id}
 */
export type GET_EventByEventId_Response_401 = Problem

/**
 * 404 response for GET EventByEventId endpoint
 * 
 * @path /v1/event/{event_id}
 */
export type GET_EventByEventId_Response_404 = Problem

/**
 * 422 response for GET EventByEventId endpoint
 * 
 * @path /v1/event/{event_id}
 */
export type GET_EventByEventId_Response_422 = HTTPValidationError

/**
 * Response types for PATCH EventByEventId endpoint
 * 
 * @path /v1/event/{event_id}
 */
export type PATCH_EventByEventId = {
  401: Problem
  404: Problem
  422: HTTPValidationError
}

/**
 * 401 response for PATCH EventByEventId endpoint
 * 
 * @path /v1/event/{event_id}
 */
export type PATCH_EventByEventId_Response_401 = Problem

/**
 * 404 response for PATCH EventByEventId endpoint
 * 
 * @path /v1/event/{event_id}
 */
export type PATCH_EventByEventId_Response_404 = Problem

/**
 * 422 response for PATCH EventByEventId endpoint
 * 
 * @path /v1/event/{event_id}
 */
export type PATCH_EventByEventId_Response_422 = HTTPValidationError

/**
 * Response types for GET Notifications endpoint
 * 
 * @path /v1/notifications
 */
export type GET_Notifications = {
  200: Pagination_UserNotificationSummary
  422: HTTPValidationError
}

/**
 * 200 response for GET Notifications endpoint
 * 
 * @path /v1/notifications
 */
export type GET_Notifications_Response_200 = Pagination_UserNotificationSummary

/**
 * 422 response for GET Notifications endpoint
 * 
 * @path /v1/notifications
 */
export type GET_Notifications_Response_422 = HTTPValidationError

/**
 * Response types for POST Notifications endpoint
 * 
 * @path /v1/notifications
 */
export type POST_Notifications = {
  201: Notification
  422: HTTPValidationError
}

/**
 * 201 response for POST Notifications endpoint
 * 
 * @path /v1/notifications
 */
export type POST_Notifications_Response_201 = Notification

/**
 * 422 response for POST Notifications endpoint
 * 
 * @path /v1/notifications
 */
export type POST_Notifications_Response_422 = HTTPValidationError

/**
 * Response types for DELETE NotificationsByNotificationId endpoint
 * 
 * @path /v1/notifications/{notification_id}
 */
export type DELETE_NotificationsByNotificationId = {
  422: HTTPValidationError
}

/**
 * 422 response for DELETE NotificationsByNotificationId endpoint
 * 
 * @path /v1/notifications/{notification_id}
 */
export type DELETE_NotificationsByNotificationId_Response_422 = HTTPValidationError

/**
 * Response types for GET NotificationsByNotificationId endpoint
 * 
 * @path /v1/notifications/{notification_id}
 */
export type GET_NotificationsByNotificationId = {
  200: UserNotification
  422: HTTPValidationError
}

/**
 * 200 response for GET NotificationsByNotificationId endpoint
 * 
 * @path /v1/notifications/{notification_id}
 */
export type GET_NotificationsByNotificationId_Response_200 = UserNotification

/**
 * 422 response for GET NotificationsByNotificationId endpoint
 * 
 * @path /v1/notifications/{notification_id}
 */
export type GET_NotificationsByNotificationId_Response_422 = HTTPValidationError

/**
 * Response types for PUT NotificationsByNotificationId endpoint
 * 
 * @path /v1/notifications/{notification_id}
 */
export type PUT_NotificationsByNotificationId = {
  200: Notification
  422: HTTPValidationError
}

/**
 * 200 response for PUT NotificationsByNotificationId endpoint
 * 
 * @path /v1/notifications/{notification_id}
 */
export type PUT_NotificationsByNotificationId_Response_200 = Notification

/**
 * 422 response for PUT NotificationsByNotificationId endpoint
 * 
 * @path /v1/notifications/{notification_id}
 */
export type PUT_NotificationsByNotificationId_Response_422 = HTTPValidationError

/**
 * Response types for PATCH NotificationsByNotificationIdRead endpoint
 * 
 * @path /v1/notifications/{notification_id}/read
 */
export type PATCH_NotificationsByNotificationIdRead = {
  422: HTTPValidationError
}

/**
 * 422 response for PATCH NotificationsByNotificationIdRead endpoint
 * 
 * @path /v1/notifications/{notification_id}/read
 */
export type PATCH_NotificationsByNotificationIdRead_Response_422 = HTTPValidationError

/**
 * Response types for GET Organizations endpoint
 * 
 * @path /v1/organizations
 */
export type GET_Organizations = {
  200: Pagination_Organization
  422: HTTPValidationError
}

/**
 * 200 response for GET Organizations endpoint
 * 
 * @path /v1/organizations
 */
export type GET_Organizations_Response_200 = Pagination_Organization

/**
 * 422 response for GET Organizations endpoint
 * 
 * @path /v1/organizations
 */
export type GET_Organizations_Response_422 = HTTPValidationError

/**
 * Response types for POST Organizations endpoint
 * 
 * @path /v1/organizations
 */
export type POST_Organizations = {
  200: Organization
  422: HTTPValidationError
}

/**
 * 200 response for POST Organizations endpoint
 * 
 * @path /v1/organizations
 */
export type POST_Organizations_Response_200 = Organization

/**
 * 422 response for POST Organizations endpoint
 * 
 * @path /v1/organizations
 */
export type POST_Organizations_Response_422 = HTTPValidationError

/**
 * Response types for GET OrganizationsAttributes endpoint
 * 
 * @path /v1/organizations/attributes
 * @param keys (query) - Optional list of attribute keys to filter
 */
export type GET_OrganizationsAttributes = {
  422: HTTPValidationError
}

/**
 * 422 response for GET OrganizationsAttributes endpoint
 * 
 * @path /v1/organizations/attributes
 * @param keys (query) - Optional list of attribute keys to filter
 */
export type GET_OrganizationsAttributes_Response_422 = HTTPValidationError

/**
 * Response types for PATCH OrganizationsAttributes endpoint
 * 
 * @path /v1/organizations/attributes
 */
export type PATCH_OrganizationsAttributes = {
  422: HTTPValidationError
}

/**
 * 422 response for PATCH OrganizationsAttributes endpoint
 * 
 * @path /v1/organizations/attributes
 */
export type PATCH_OrganizationsAttributes_Response_422 = HTTPValidationError

/**
 * Response types for GET OrganizationsAttributesByOrganizationId endpoint
 * 
 * @path /v1/organizations/attributes/{organization_id}
 * @param keys (query) - Optional list of attribute keys to filter
 */
export type GET_OrganizationsAttributesByOrganizationId = {
  422: HTTPValidationError
}

/**
 * 422 response for GET OrganizationsAttributesByOrganizationId endpoint
 * 
 * @path /v1/organizations/attributes/{organization_id}
 * @param keys (query) - Optional list of attribute keys to filter
 */
export type GET_OrganizationsAttributesByOrganizationId_Response_422 = HTTPValidationError

/**
 * Response types for PATCH OrganizationsAttributesByOrganizationId endpoint
 * 
 * @path /v1/organizations/attributes/{organization_id}
 */
export type PATCH_OrganizationsAttributesByOrganizationId = {
  422: HTTPValidationError
}

/**
 * 422 response for PATCH OrganizationsAttributesByOrganizationId endpoint
 * 
 * @path /v1/organizations/attributes/{organization_id}
 */
export type PATCH_OrganizationsAttributesByOrganizationId_Response_422 = HTTPValidationError

/**
 * Response types for DELETE OrganizationsByOrganizationId endpoint
 * 
 * @path /v1/organizations/{organization_id}
 */
export type DELETE_OrganizationsByOrganizationId = {
  422: HTTPValidationError
}

/**
 * 422 response for DELETE OrganizationsByOrganizationId endpoint
 * 
 * @path /v1/organizations/{organization_id}
 */
export type DELETE_OrganizationsByOrganizationId_Response_422 = HTTPValidationError

/**
 * Response types for GET OrganizationsByOrganizationId endpoint
 * 
 * @path /v1/organizations/{organization_id}
 */
export type GET_OrganizationsByOrganizationId = {
  200: OrganizationWithPlan
  422: HTTPValidationError
}

/**
 * 200 response for GET OrganizationsByOrganizationId endpoint
 * 
 * @path /v1/organizations/{organization_id}
 */
export type GET_OrganizationsByOrganizationId_Response_200 = OrganizationWithPlan

/**
 * 422 response for GET OrganizationsByOrganizationId endpoint
 * 
 * @path /v1/organizations/{organization_id}
 */
export type GET_OrganizationsByOrganizationId_Response_422 = HTTPValidationError

/**
 * Response types for PATCH OrganizationsByOrganizationId endpoint
 * 
 * @path /v1/organizations/{organization_id}
 */
export type PATCH_OrganizationsByOrganizationId = {
  200: Organization
  422: HTTPValidationError
}

/**
 * 200 response for PATCH OrganizationsByOrganizationId endpoint
 * 
 * @path /v1/organizations/{organization_id}
 */
export type PATCH_OrganizationsByOrganizationId_Response_200 = Organization

/**
 * 422 response for PATCH OrganizationsByOrganizationId endpoint
 * 
 * @path /v1/organizations/{organization_id}
 */
export type PATCH_OrganizationsByOrganizationId_Response_422 = HTTPValidationError

/**
 * Response types for PATCH OrganizationsByOrganizationIdPlan endpoint
 * 
 * @path /v1/organizations/{organization_id}/plan
 */
export type PATCH_OrganizationsByOrganizationIdPlan = {
  200: OrganizationWithPlan
  422: HTTPValidationError
}

/**
 * 200 response for PATCH OrganizationsByOrganizationIdPlan endpoint
 * 
 * @path /v1/organizations/{organization_id}/plan
 */
export type PATCH_OrganizationsByOrganizationIdPlan_Response_200 = OrganizationWithPlan

/**
 * 422 response for PATCH OrganizationsByOrganizationIdPlan endpoint
 * 
 * @path /v1/organizations/{organization_id}/plan
 */
export type PATCH_OrganizationsByOrganizationIdPlan_Response_422 = HTTPValidationError

/**
 * Response types for GET OrganizationsIpRestrictions endpoint
 * 
 * @path /v1/organizations/ip-restrictions
 */
export type GET_OrganizationsIpRestrictions = {
}

/**
 * Response types for POST OrganizationsIpRestrictions endpoint
 * 
 * @path /v1/organizations/ip-restrictions
 */
export type POST_OrganizationsIpRestrictions = {
  200: IpRestriction
  422: HTTPValidationError
}

/**
 * 200 response for POST OrganizationsIpRestrictions endpoint
 * 
 * @path /v1/organizations/ip-restrictions
 */
export type POST_OrganizationsIpRestrictions_Response_200 = IpRestriction

/**
 * 422 response for POST OrganizationsIpRestrictions endpoint
 * 
 * @path /v1/organizations/ip-restrictions
 */
export type POST_OrganizationsIpRestrictions_Response_422 = HTTPValidationError

/**
 * Response types for DELETE OrganizationsIpRestrictionsByIpRestrictionId endpoint
 * 
 * @path /v1/organizations/ip-restrictions/{ip_restriction_id}
 */
export type DELETE_OrganizationsIpRestrictionsByIpRestrictionId = {
  422: HTTPValidationError
}

/**
 * 422 response for DELETE OrganizationsIpRestrictionsByIpRestrictionId endpoint
 * 
 * @path /v1/organizations/ip-restrictions/{ip_restriction_id}
 */
export type DELETE_OrganizationsIpRestrictionsByIpRestrictionId_Response_422 = HTTPValidationError

/**
 * Response types for GET OrganizationsIpRestrictionsByIpRestrictionId endpoint
 * 
 * @path /v1/organizations/ip-restrictions/{ip_restriction_id}
 */
export type GET_OrganizationsIpRestrictionsByIpRestrictionId = {
  200: IpRestriction
  422: HTTPValidationError
}

/**
 * 200 response for GET OrganizationsIpRestrictionsByIpRestrictionId endpoint
 * 
 * @path /v1/organizations/ip-restrictions/{ip_restriction_id}
 */
export type GET_OrganizationsIpRestrictionsByIpRestrictionId_Response_200 = IpRestriction

/**
 * 422 response for GET OrganizationsIpRestrictionsByIpRestrictionId endpoint
 * 
 * @path /v1/organizations/ip-restrictions/{ip_restriction_id}
 */
export type GET_OrganizationsIpRestrictionsByIpRestrictionId_Response_422 = HTTPValidationError

/**
 * Response types for PATCH OrganizationsIpRestrictionsByIpRestrictionId endpoint
 * 
 * @path /v1/organizations/ip-restrictions/{ip_restriction_id}
 */
export type PATCH_OrganizationsIpRestrictionsByIpRestrictionId = {
  200: IpRestriction
  422: HTTPValidationError
}

/**
 * 200 response for PATCH OrganizationsIpRestrictionsByIpRestrictionId endpoint
 * 
 * @path /v1/organizations/ip-restrictions/{ip_restriction_id}
 */
export type PATCH_OrganizationsIpRestrictionsByIpRestrictionId_Response_200 = IpRestriction

/**
 * 422 response for PATCH OrganizationsIpRestrictionsByIpRestrictionId endpoint
 * 
 * @path /v1/organizations/ip-restrictions/{ip_restriction_id}
 */
export type PATCH_OrganizationsIpRestrictionsByIpRestrictionId_Response_422 = HTTPValidationError

/**
 * Response types for GET OrganizationsRoles endpoint
 * 
 * @path /v1/organizations/roles
 */
export type GET_OrganizationsRoles = {
}

/**
 * Response types for GET OrganizationsUsers endpoint
 * 
 * @path /v1/organizations/users
 */
export type GET_OrganizationsUsers = {
  200: Pagination_User
  422: HTTPValidationError
}

/**
 * 200 response for GET OrganizationsUsers endpoint
 * 
 * @path /v1/organizations/users
 */
export type GET_OrganizationsUsers_Response_200 = Pagination_User

/**
 * 422 response for GET OrganizationsUsers endpoint
 * 
 * @path /v1/organizations/users
 */
export type GET_OrganizationsUsers_Response_422 = HTTPValidationError

/**
 * Response types for POST Users endpoint
 * 
 * @path /v1/users
 */
export type POST_Users = {
  200: User
  422: HTTPValidationError
}

/**
 * 200 response for POST Users endpoint
 * 
 * @path /v1/users
 */
export type POST_Users_Response_200 = User

/**
 * 422 response for POST Users endpoint
 * 
 * @path /v1/users
 */
export type POST_Users_Response_422 = HTTPValidationError

/**
 * Response types for POST UsersAcceptTos endpoint
 * 
 * @path /v1/users/accept-tos
 */
export type POST_UsersAcceptTos = {
  422: HTTPValidationError
}

/**
 * 422 response for POST UsersAcceptTos endpoint
 * 
 * @path /v1/users/accept-tos
 */
export type POST_UsersAcceptTos_Response_422 = HTTPValidationError

/**
 * Response types for DELETE UsersByUserId endpoint
 * 
 * @path /v1/users/{user_id}
 */
export type DELETE_UsersByUserId = {
  422: HTTPValidationError
}

/**
 * 422 response for DELETE UsersByUserId endpoint
 * 
 * @path /v1/users/{user_id}
 */
export type DELETE_UsersByUserId_Response_422 = HTTPValidationError

/**
 * Response types for GET UsersByUserId endpoint
 * 
 * @path /v1/users/{user_id}
 */
export type GET_UsersByUserId = {
  200: UserWithAttributes
  422: HTTPValidationError
}

/**
 * 200 response for GET UsersByUserId endpoint
 * 
 * @path /v1/users/{user_id}
 */
export type GET_UsersByUserId_Response_200 = UserWithAttributes

/**
 * 422 response for GET UsersByUserId endpoint
 * 
 * @path /v1/users/{user_id}
 */
export type GET_UsersByUserId_Response_422 = HTTPValidationError

/**
 * Response types for PATCH UsersByUserId endpoint
 * 
 * @path /v1/users/{user_id}
 */
export type PATCH_UsersByUserId = {
  200: UserWithAttributes
  422: HTTPValidationError
}

/**
 * 200 response for PATCH UsersByUserId endpoint
 * 
 * @path /v1/users/{user_id}
 */
export type PATCH_UsersByUserId_Response_200 = UserWithAttributes

/**
 * 422 response for PATCH UsersByUserId endpoint
 * 
 * @path /v1/users/{user_id}
 */
export type PATCH_UsersByUserId_Response_422 = HTTPValidationError

/**
 * Response types for GET UsersByUserIdPermissions endpoint
 * 
 * @path /v1/users/{user_id}/permissions
 */
export type GET_UsersByUserIdPermissions = {
  200: PermissionSet
  422: HTTPValidationError
}

/**
 * 200 response for GET UsersByUserIdPermissions endpoint
 * 
 * @path /v1/users/{user_id}/permissions
 */
export type GET_UsersByUserIdPermissions_Response_200 = PermissionSet

/**
 * 422 response for GET UsersByUserIdPermissions endpoint
 * 
 * @path /v1/users/{user_id}/permissions
 */
export type GET_UsersByUserIdPermissions_Response_422 = HTTPValidationError

/**
 * Response types for GET UsersByUserIdRoles endpoint
 * 
 * @path /v1/users/{user_id}/roles
 */
export type GET_UsersByUserIdRoles = {
  200: RelationSet
  422: HTTPValidationError
}

/**
 * 200 response for GET UsersByUserIdRoles endpoint
 * 
 * @path /v1/users/{user_id}/roles
 */
export type GET_UsersByUserIdRoles_Response_200 = RelationSet

/**
 * 422 response for GET UsersByUserIdRoles endpoint
 * 
 * @path /v1/users/{user_id}/roles
 */
export type GET_UsersByUserIdRoles_Response_422 = HTTPValidationError

/**
 * Response types for PATCH UsersByUserIdRoles endpoint
 * 
 * @path /v1/users/{user_id}/roles
 */
export type PATCH_UsersByUserIdRoles = {
  200: RelationSet
  422: HTTPValidationError
}

/**
 * 200 response for PATCH UsersByUserIdRoles endpoint
 * 
 * @path /v1/users/{user_id}/roles
 */
export type PATCH_UsersByUserIdRoles_Response_200 = RelationSet

/**
 * 422 response for PATCH UsersByUserIdRoles endpoint
 * 
 * @path /v1/users/{user_id}/roles
 */
export type PATCH_UsersByUserIdRoles_Response_422 = HTTPValidationError

/**
 * Response types for GET UsersMe endpoint
 * 
 * @path /v1/users/me
 */
export type GET_UsersMe = {
  200: UserWithRelationPermissions
  422: HTTPValidationError
}

/**
 * 200 response for GET UsersMe endpoint
 * 
 * @path /v1/users/me
 */
export type GET_UsersMe_Response_200 = UserWithRelationPermissions

/**
 * 422 response for GET UsersMe endpoint
 * 
 * @path /v1/users/me
 */
export type GET_UsersMe_Response_422 = HTTPValidationError

