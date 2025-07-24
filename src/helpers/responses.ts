/**
 * Response types for OpusDNS API endpoints.
 *
 * This file is auto-generated from the OpenAPI specification.
 * Do not edit manually.
 */

import { components } from '../schema';

/**
 * Response types for GET AuthClientCredentials endpoint
 * 
 * @path /v1/auth/client_credentials
 * @param status (query) - Optional status to filter the results
 */
export type GET_AuthClientCredentials = {
  200: components["schemas"]["Pagination_OrganizationCredential_"]
  401: components["schemas"]["Problem"]
  422: components["schemas"]["HTTPValidationError"]
}

/**
 * 200 response for GET AuthClientCredentials endpoint
 * 
 * @path /v1/auth/client_credentials
 * @param status (query) - Optional status to filter the results
 */
export type GET_AuthClientCredentials_Response_200 = GET_AuthClientCredentials["200"]

/**
 * 401 response for GET AuthClientCredentials endpoint
 * 
 * @path /v1/auth/client_credentials
 * @param status (query) - Optional status to filter the results
 */
export type GET_AuthClientCredentials_Response_401 = GET_AuthClientCredentials["401"]

/**
 * 422 response for GET AuthClientCredentials endpoint
 * 
 * @path /v1/auth/client_credentials
 * @param status (query) - Optional status to filter the results
 */
export type GET_AuthClientCredentials_Response_422 = GET_AuthClientCredentials["422"]

/**
 * Response types for POST AuthClientCredentials endpoint
 * 
 * @path /v1/auth/client_credentials
 */
export type POST_AuthClientCredentials = {
  200: components["schemas"]["OrganizationCredentialCreated"]
  401: components["schemas"]["Problem"]
  422: components["schemas"]["HTTPValidationError"]
}

/**
 * 200 response for POST AuthClientCredentials endpoint
 * 
 * @path /v1/auth/client_credentials
 */
export type POST_AuthClientCredentials_Response_200 = POST_AuthClientCredentials["200"]

/**
 * 401 response for POST AuthClientCredentials endpoint
 * 
 * @path /v1/auth/client_credentials
 */
export type POST_AuthClientCredentials_Response_401 = POST_AuthClientCredentials["401"]

/**
 * 422 response for POST AuthClientCredentials endpoint
 * 
 * @path /v1/auth/client_credentials
 */
export type POST_AuthClientCredentials_Response_422 = POST_AuthClientCredentials["422"]

/**
 * Response types for DELETE AuthClientCredentialsByApiKeyId endpoint
 * 
 * @path /v1/auth/client_credentials/{api_key_id}
 */
export type DELETE_AuthClientCredentialsByApiKeyId = {
  401: components["schemas"]["Problem"]
  404: components["schemas"]["Problem"]
  422: components["schemas"]["HTTPValidationError"]
}

/**
 * 401 response for DELETE AuthClientCredentialsByApiKeyId endpoint
 * 
 * @path /v1/auth/client_credentials/{api_key_id}
 */
export type DELETE_AuthClientCredentialsByApiKeyId_Response_401 = DELETE_AuthClientCredentialsByApiKeyId["401"]

/**
 * 404 response for DELETE AuthClientCredentialsByApiKeyId endpoint
 * 
 * @path /v1/auth/client_credentials/{api_key_id}
 */
export type DELETE_AuthClientCredentialsByApiKeyId_Response_404 = DELETE_AuthClientCredentialsByApiKeyId["404"]

/**
 * 422 response for DELETE AuthClientCredentialsByApiKeyId endpoint
 * 
 * @path /v1/auth/client_credentials/{api_key_id}
 */
export type DELETE_AuthClientCredentialsByApiKeyId_Response_422 = DELETE_AuthClientCredentialsByApiKeyId["422"]

/**
 * Response types for POST AuthLogout endpoint
 * 
 * @path /v1/auth/logout
 */
export type POST_AuthLogout = {
  401: components["schemas"]["Problem"]
}

/**
 * 401 response for POST AuthLogout endpoint
 * 
 * @path /v1/auth/logout
 */
export type POST_AuthLogout_Response_401 = POST_AuthLogout["401"]

/**
 * Response types for POST AuthSignup endpoint
 * 
 * @path /v1/auth/signup
 */
export type POST_AuthSignup = {
  409: components["schemas"]["Problem"]
  422: components["schemas"]["HTTPValidationError"]
}

/**
 * 409 response for POST AuthSignup endpoint
 * 
 * @path /v1/auth/signup
 */
export type POST_AuthSignup_Response_409 = POST_AuthSignup["409"]

/**
 * 422 response for POST AuthSignup endpoint
 * 
 * @path /v1/auth/signup
 */
export type POST_AuthSignup_Response_422 = POST_AuthSignup["422"]

/**
 * Response types for POST AuthToken endpoint
 * 
 * @path /v1/auth/token
 */
export type POST_AuthToken = {
  401: components["schemas"]["Problem"]
  422: components["schemas"]["HTTPValidationError"]
}

/**
 * 401 response for POST AuthToken endpoint
 * 
 * @path /v1/auth/token
 */
export type POST_AuthToken_Response_401 = POST_AuthToken["401"]

/**
 * 422 response for POST AuthToken endpoint
 * 
 * @path /v1/auth/token
 */
export type POST_AuthToken_Response_422 = POST_AuthToken["422"]

/**
 * Response types for GET Availability endpoint
 * 
 * @path /v1/availability
 * @param domains (query) - 
Specify one or more domains to check for availability.

 */
export type GET_Availability = {
  200: components["schemas"]["common__models__availability__datasource__DomainAvailabilityResponse"]
  401: components["schemas"]["Problem"]
  422: components["schemas"]["HTTPValidationError"]
  502: components["schemas"]["Problem"]
}

/**
 * 200 response for GET Availability endpoint
 * 
 * @path /v1/availability
 * @param domains (query) - 
Specify one or more domains to check for availability.

 */
export type GET_Availability_Response_200 = GET_Availability["200"]

/**
 * 401 response for GET Availability endpoint
 * 
 * @path /v1/availability
 * @param domains (query) - 
Specify one or more domains to check for availability.

 */
export type GET_Availability_Response_401 = GET_Availability["401"]

/**
 * 422 response for GET Availability endpoint
 * 
 * @path /v1/availability
 * @param domains (query) - 
Specify one or more domains to check for availability.

 */
export type GET_Availability_Response_422 = GET_Availability["422"]

/**
 * 502 response for GET Availability endpoint
 * 
 * @path /v1/availability
 * @param domains (query) - 
Specify one or more domains to check for availability.

 */
export type GET_Availability_Response_502 = GET_Availability["502"]

/**
 * Response types for GET AvailabilityStream endpoint
 * 
 * @path /v1/availability/stream
 * @param domains (query) - 
Specify one or more domains to check for availability.

 */
export type GET_AvailabilityStream = {
  401: components["schemas"]["Problem"]
  422: components["schemas"]["HTTPValidationError"]
  502: components["schemas"]["Problem"]
}

/**
 * 401 response for GET AvailabilityStream endpoint
 * 
 * @path /v1/availability/stream
 * @param domains (query) - 
Specify one or more domains to check for availability.

 */
export type GET_AvailabilityStream_Response_401 = GET_AvailabilityStream["401"]

/**
 * 422 response for GET AvailabilityStream endpoint
 * 
 * @path /v1/availability/stream
 * @param domains (query) - 
Specify one or more domains to check for availability.

 */
export type GET_AvailabilityStream_Response_422 = GET_AvailabilityStream["422"]

/**
 * 502 response for GET AvailabilityStream endpoint
 * 
 * @path /v1/availability/stream
 * @param domains (query) - 
Specify one or more domains to check for availability.

 */
export type GET_AvailabilityStream_Response_502 = GET_AvailabilityStream["502"]

/**
 * Response types for GET Contacts endpoint
 * 
 * @path /v1/contacts
 */
export type GET_Contacts = {
  200: components["schemas"]["Pagination_ContactSchema_"]
  422: components["schemas"]["HTTPValidationError"]
}

/**
 * 200 response for GET Contacts endpoint
 * 
 * @path /v1/contacts
 */
export type GET_Contacts_Response_200 = GET_Contacts["200"]

/**
 * 422 response for GET Contacts endpoint
 * 
 * @path /v1/contacts
 */
export type GET_Contacts_Response_422 = GET_Contacts["422"]

/**
 * Response types for POST Contacts endpoint
 * 
 * @path /v1/contacts
 */
export type POST_Contacts = {
  201: components["schemas"]["ContactSchema"]
  422: components["schemas"]["HTTPValidationError"]
}

/**
 * 201 response for POST Contacts endpoint
 * 
 * @path /v1/contacts
 */
export type POST_Contacts_Response_201 = POST_Contacts["201"]

/**
 * 422 response for POST Contacts endpoint
 * 
 * @path /v1/contacts
 */
export type POST_Contacts_Response_422 = POST_Contacts["422"]

/**
 * Response types for DELETE ContactsByContactId endpoint
 * 
 * @path /v1/contacts/{contact_id}
 */
export type DELETE_ContactsByContactId = {
  404: components["schemas"]["Problem"]
  409: components["schemas"]["Problem"]
  422: components["schemas"]["HTTPValidationError"]
}

/**
 * 404 response for DELETE ContactsByContactId endpoint
 * 
 * @path /v1/contacts/{contact_id}
 */
export type DELETE_ContactsByContactId_Response_404 = DELETE_ContactsByContactId["404"]

/**
 * 409 response for DELETE ContactsByContactId endpoint
 * 
 * @path /v1/contacts/{contact_id}
 */
export type DELETE_ContactsByContactId_Response_409 = DELETE_ContactsByContactId["409"]

/**
 * 422 response for DELETE ContactsByContactId endpoint
 * 
 * @path /v1/contacts/{contact_id}
 */
export type DELETE_ContactsByContactId_Response_422 = DELETE_ContactsByContactId["422"]

/**
 * Response types for GET ContactsByContactId endpoint
 * 
 * @path /v1/contacts/{contact_id}
 */
export type GET_ContactsByContactId = {
  200: components["schemas"]["ContactSchema"]
  404: components["schemas"]["Problem"]
  422: components["schemas"]["HTTPValidationError"]
}

/**
 * 200 response for GET ContactsByContactId endpoint
 * 
 * @path /v1/contacts/{contact_id}
 */
export type GET_ContactsByContactId_Response_200 = GET_ContactsByContactId["200"]

/**
 * 404 response for GET ContactsByContactId endpoint
 * 
 * @path /v1/contacts/{contact_id}
 */
export type GET_ContactsByContactId_Response_404 = GET_ContactsByContactId["404"]

/**
 * 422 response for GET ContactsByContactId endpoint
 * 
 * @path /v1/contacts/{contact_id}
 */
export type GET_ContactsByContactId_Response_422 = GET_ContactsByContactId["422"]

/**
 * Response types for DELETE ContactsByContactIdVerification endpoint
 * 
 * @path /v1/contacts/{contact_id}/verification
 */
export type DELETE_ContactsByContactIdVerification = {
  401: components["schemas"]["Problem"]
  404: components["schemas"]["Problem"]
  422: components["schemas"]["HTTPValidationError"]
}

/**
 * 401 response for DELETE ContactsByContactIdVerification endpoint
 * 
 * @path /v1/contacts/{contact_id}/verification
 */
export type DELETE_ContactsByContactIdVerification_Response_401 = DELETE_ContactsByContactIdVerification["401"]

/**
 * 404 response for DELETE ContactsByContactIdVerification endpoint
 * 
 * @path /v1/contacts/{contact_id}/verification
 */
export type DELETE_ContactsByContactIdVerification_Response_404 = DELETE_ContactsByContactIdVerification["404"]

/**
 * 422 response for DELETE ContactsByContactIdVerification endpoint
 * 
 * @path /v1/contacts/{contact_id}/verification
 */
export type DELETE_ContactsByContactIdVerification_Response_422 = DELETE_ContactsByContactIdVerification["422"]

/**
 * Response types for GET ContactsByContactIdVerification endpoint
 * 
 * @path /v1/contacts/{contact_id}/verification
 */
export type GET_ContactsByContactIdVerification = {
  200: components["schemas"]["ContactVerificationResponse"]
  401: components["schemas"]["Problem"]
  404: components["schemas"]["Problem"]
  422: components["schemas"]["HTTPValidationError"]
}

/**
 * 200 response for GET ContactsByContactIdVerification endpoint
 * 
 * @path /v1/contacts/{contact_id}/verification
 */
export type GET_ContactsByContactIdVerification_Response_200 = GET_ContactsByContactIdVerification["200"]

/**
 * 401 response for GET ContactsByContactIdVerification endpoint
 * 
 * @path /v1/contacts/{contact_id}/verification
 */
export type GET_ContactsByContactIdVerification_Response_401 = GET_ContactsByContactIdVerification["401"]

/**
 * 404 response for GET ContactsByContactIdVerification endpoint
 * 
 * @path /v1/contacts/{contact_id}/verification
 */
export type GET_ContactsByContactIdVerification_Response_404 = GET_ContactsByContactIdVerification["404"]

/**
 * 422 response for GET ContactsByContactIdVerification endpoint
 * 
 * @path /v1/contacts/{contact_id}/verification
 */
export type GET_ContactsByContactIdVerification_Response_422 = GET_ContactsByContactIdVerification["422"]

/**
 * Response types for POST ContactsByContactIdVerification endpoint
 * 
 * @path /v1/contacts/{contact_id}/verification
 */
export type POST_ContactsByContactIdVerification = {
  401: components["schemas"]["Problem"]
  404: components["schemas"]["Problem"]
  405: components["schemas"]["Problem"]
  422: components["schemas"]["HTTPValidationError"]
}

/**
 * 401 response for POST ContactsByContactIdVerification endpoint
 * 
 * @path /v1/contacts/{contact_id}/verification
 */
export type POST_ContactsByContactIdVerification_Response_401 = POST_ContactsByContactIdVerification["401"]

/**
 * 404 response for POST ContactsByContactIdVerification endpoint
 * 
 * @path /v1/contacts/{contact_id}/verification
 */
export type POST_ContactsByContactIdVerification_Response_404 = POST_ContactsByContactIdVerification["404"]

/**
 * 405 response for POST ContactsByContactIdVerification endpoint
 * 
 * @path /v1/contacts/{contact_id}/verification
 */
export type POST_ContactsByContactIdVerification_Response_405 = POST_ContactsByContactIdVerification["405"]

/**
 * 422 response for POST ContactsByContactIdVerification endpoint
 * 
 * @path /v1/contacts/{contact_id}/verification
 */
export type POST_ContactsByContactIdVerification_Response_422 = POST_ContactsByContactIdVerification["422"]

/**
 * Response types for PUT ContactsByContactIdVerification endpoint
 * 
 * @path /v1/contacts/{contact_id}/verification
 */
export type PUT_ContactsByContactIdVerification = {
  400: components["schemas"]["Problem"]
  401: components["schemas"]["Problem"]
  403: components["schemas"]["Problem"]
  404: components["schemas"]["Problem"]
  422: components["schemas"]["HTTPValidationError"]
}

/**
 * 400 response for PUT ContactsByContactIdVerification endpoint
 * 
 * @path /v1/contacts/{contact_id}/verification
 */
export type PUT_ContactsByContactIdVerification_Response_400 = PUT_ContactsByContactIdVerification["400"]

/**
 * 401 response for PUT ContactsByContactIdVerification endpoint
 * 
 * @path /v1/contacts/{contact_id}/verification
 */
export type PUT_ContactsByContactIdVerification_Response_401 = PUT_ContactsByContactIdVerification["401"]

/**
 * 403 response for PUT ContactsByContactIdVerification endpoint
 * 
 * @path /v1/contacts/{contact_id}/verification
 */
export type PUT_ContactsByContactIdVerification_Response_403 = PUT_ContactsByContactIdVerification["403"]

/**
 * 404 response for PUT ContactsByContactIdVerification endpoint
 * 
 * @path /v1/contacts/{contact_id}/verification
 */
export type PUT_ContactsByContactIdVerification_Response_404 = PUT_ContactsByContactIdVerification["404"]

/**
 * 422 response for PUT ContactsByContactIdVerification endpoint
 * 
 * @path /v1/contacts/{contact_id}/verification
 */
export type PUT_ContactsByContactIdVerification_Response_422 = PUT_ContactsByContactIdVerification["422"]

/**
 * Response types for GET ContactsVerification endpoint
 * 
 * @path /v1/contacts/verification
 */
export type GET_ContactsVerification = {
  200: components["schemas"]["ContactResponse"]
  401: components["schemas"]["Problem"]
  404: components["schemas"]["Problem"]
  422: components["schemas"]["HTTPValidationError"]
}

/**
 * 200 response for GET ContactsVerification endpoint
 * 
 * @path /v1/contacts/verification
 */
export type GET_ContactsVerification_Response_200 = GET_ContactsVerification["200"]

/**
 * 401 response for GET ContactsVerification endpoint
 * 
 * @path /v1/contacts/verification
 */
export type GET_ContactsVerification_Response_401 = GET_ContactsVerification["401"]

/**
 * 404 response for GET ContactsVerification endpoint
 * 
 * @path /v1/contacts/verification
 */
export type GET_ContactsVerification_Response_404 = GET_ContactsVerification["404"]

/**
 * 422 response for GET ContactsVerification endpoint
 * 
 * @path /v1/contacts/verification
 */
export type GET_ContactsVerification_Response_422 = GET_ContactsVerification["422"]

/**
 * Response types for PUT ContactsVerification endpoint
 * 
 * @path /v1/contacts/verification
 */
export type PUT_ContactsVerification = {
  400: components["schemas"]["Problem"]
  401: components["schemas"]["Problem"]
  404: components["schemas"]["Problem"]
  422: components["schemas"]["HTTPValidationError"]
}

/**
 * 400 response for PUT ContactsVerification endpoint
 * 
 * @path /v1/contacts/verification
 */
export type PUT_ContactsVerification_Response_400 = PUT_ContactsVerification["400"]

/**
 * 401 response for PUT ContactsVerification endpoint
 * 
 * @path /v1/contacts/verification
 */
export type PUT_ContactsVerification_Response_401 = PUT_ContactsVerification["401"]

/**
 * 404 response for PUT ContactsVerification endpoint
 * 
 * @path /v1/contacts/verification
 */
export type PUT_ContactsVerification_Response_404 = PUT_ContactsVerification["404"]

/**
 * 422 response for PUT ContactsVerification endpoint
 * 
 * @path /v1/contacts/verification
 */
export type PUT_ContactsVerification_Response_422 = PUT_ContactsVerification["422"]

/**
 * Response types for GET ContactsVerify endpoint
 * 
 * @path /v1/contacts/verify
 */
export type GET_ContactsVerify = {
  422: components["schemas"]["HTTPValidationError"]
}

/**
 * 422 response for GET ContactsVerify endpoint
 * 
 * @path /v1/contacts/verify
 */
export type GET_ContactsVerify_Response_422 = GET_ContactsVerify["422"]

/**
 * Response types for GET Dns endpoint
 * 
 * @path /v1/dns
 */
export type GET_Dns = {
  200: components["schemas"]["Pagination_DnsZoneResponse_"]
  422: components["schemas"]["HTTPValidationError"]
}

/**
 * 200 response for GET Dns endpoint
 * 
 * @path /v1/dns
 */
export type GET_Dns_Response_200 = GET_Dns["200"]

/**
 * 422 response for GET Dns endpoint
 * 
 * @path /v1/dns
 */
export type GET_Dns_Response_422 = GET_Dns["422"]

/**
 * Response types for POST Dns endpoint
 * 
 * @path /v1/dns
 */
export type POST_Dns = {
  422: components["schemas"]["HTTPValidationError"]
}

/**
 * 422 response for POST Dns endpoint
 * 
 * @path /v1/dns
 */
export type POST_Dns_Response_422 = POST_Dns["422"]

/**
 * Response types for DELETE DnsByZoneName endpoint
 * 
 * @path /v1/dns/{zone_name}
 * @param zone_name (path) - DNS zone name (trailing dot optional)
 */
export type DELETE_DnsByZoneName = {
  422: components["schemas"]["HTTPValidationError"]
}

/**
 * 422 response for DELETE DnsByZoneName endpoint
 * 
 * @path /v1/dns/{zone_name}
 * @param zone_name (path) - DNS zone name (trailing dot optional)
 */
export type DELETE_DnsByZoneName_Response_422 = DELETE_DnsByZoneName["422"]

/**
 * Response types for GET DnsByZoneName endpoint
 * 
 * @path /v1/dns/{zone_name}
 * @param zone_name (path) - DNS zone name (trailing dot optional)
 */
export type GET_DnsByZoneName = {
  200: components["schemas"]["DnsZoneResponse"]
  422: components["schemas"]["HTTPValidationError"]
}

/**
 * 200 response for GET DnsByZoneName endpoint
 * 
 * @path /v1/dns/{zone_name}
 * @param zone_name (path) - DNS zone name (trailing dot optional)
 */
export type GET_DnsByZoneName_Response_200 = GET_DnsByZoneName["200"]

/**
 * 422 response for GET DnsByZoneName endpoint
 * 
 * @path /v1/dns/{zone_name}
 * @param zone_name (path) - DNS zone name (trailing dot optional)
 */
export type GET_DnsByZoneName_Response_422 = GET_DnsByZoneName["422"]

/**
 * Response types for POST DnsByZoneNameDnssecDisable endpoint
 * 
 * @path /v1/dns/{zone_name}/dnssec/disable
 * @param zone_name (path) - DNS zone name (trailing dot optional)
 */
export type POST_DnsByZoneNameDnssecDisable = {
  200: components["schemas"]["DnsChangesResponse"]
  422: components["schemas"]["HTTPValidationError"]
}

/**
 * 200 response for POST DnsByZoneNameDnssecDisable endpoint
 * 
 * @path /v1/dns/{zone_name}/dnssec/disable
 * @param zone_name (path) - DNS zone name (trailing dot optional)
 */
export type POST_DnsByZoneNameDnssecDisable_Response_200 = POST_DnsByZoneNameDnssecDisable["200"]

/**
 * 422 response for POST DnsByZoneNameDnssecDisable endpoint
 * 
 * @path /v1/dns/{zone_name}/dnssec/disable
 * @param zone_name (path) - DNS zone name (trailing dot optional)
 */
export type POST_DnsByZoneNameDnssecDisable_Response_422 = POST_DnsByZoneNameDnssecDisable["422"]

/**
 * Response types for POST DnsByZoneNameDnssecEnable endpoint
 * 
 * @path /v1/dns/{zone_name}/dnssec/enable
 * @param zone_name (path) - DNS zone name (trailing dot optional)
 */
export type POST_DnsByZoneNameDnssecEnable = {
  200: components["schemas"]["DnsChangesResponse"]
  422: components["schemas"]["HTTPValidationError"]
}

/**
 * 200 response for POST DnsByZoneNameDnssecEnable endpoint
 * 
 * @path /v1/dns/{zone_name}/dnssec/enable
 * @param zone_name (path) - DNS zone name (trailing dot optional)
 */
export type POST_DnsByZoneNameDnssecEnable_Response_200 = POST_DnsByZoneNameDnssecEnable["200"]

/**
 * 422 response for POST DnsByZoneNameDnssecEnable endpoint
 * 
 * @path /v1/dns/{zone_name}/dnssec/enable
 * @param zone_name (path) - DNS zone name (trailing dot optional)
 */
export type POST_DnsByZoneNameDnssecEnable_Response_422 = POST_DnsByZoneNameDnssecEnable["422"]

/**
 * Response types for PUT DnsByZoneNameRrsets endpoint
 * 
 * @path /v1/dns/{zone_name}/rrsets
 * @param zone_name (path) - DNS zone name (trailing dot optional)
 */
export type PUT_DnsByZoneNameRrsets = {
  422: components["schemas"]["HTTPValidationError"]
}

/**
 * 422 response for PUT DnsByZoneNameRrsets endpoint
 * 
 * @path /v1/dns/{zone_name}/rrsets
 * @param zone_name (path) - DNS zone name (trailing dot optional)
 */
export type PUT_DnsByZoneNameRrsets_Response_422 = PUT_DnsByZoneNameRrsets["422"]

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
  200: components["schemas"]["DomainSearchResponse"]
  401: components["schemas"]["Problem"]
  422: components["schemas"]["HTTPValidationError"]
  502: components["schemas"]["Problem"]
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
export type GET_DomainSearchSuggest_Response_200 = GET_DomainSearchSuggest["200"]

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
export type GET_DomainSearchSuggest_Response_401 = GET_DomainSearchSuggest["401"]

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
export type GET_DomainSearchSuggest_Response_422 = GET_DomainSearchSuggest["422"]

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
export type GET_DomainSearchSuggest_Response_502 = GET_DomainSearchSuggest["502"]

/**
 * Response types for GET Domains endpoint
 * 
 * @path /v1/domains
 */
export type GET_Domains = {
  200: components["schemas"]["Pagination_DomainResponse_"]
  422: components["schemas"]["HTTPValidationError"]
}

/**
 * 200 response for GET Domains endpoint
 * 
 * @path /v1/domains
 */
export type GET_Domains_Response_200 = GET_Domains["200"]

/**
 * 422 response for GET Domains endpoint
 * 
 * @path /v1/domains
 */
export type GET_Domains_Response_422 = GET_Domains["422"]

/**
 * Response types for POST Domains endpoint
 * 
 * @path /v1/domains
 */
export type POST_Domains = {
  201: components["schemas"]["DomainResponse"]
  400: components["schemas"]["Problem"]
  404: components["schemas"]["Problem"]
  409: components["schemas"]["Problem"]
  422: components["schemas"]["HTTPValidationError"]
}

/**
 * 201 response for POST Domains endpoint
 * 
 * @path /v1/domains
 */
export type POST_Domains_Response_201 = POST_Domains["201"]

/**
 * 400 response for POST Domains endpoint
 * 
 * @path /v1/domains
 */
export type POST_Domains_Response_400 = POST_Domains["400"]

/**
 * 404 response for POST Domains endpoint
 * 
 * @path /v1/domains
 */
export type POST_Domains_Response_404 = POST_Domains["404"]

/**
 * 409 response for POST Domains endpoint
 * 
 * @path /v1/domains
 */
export type POST_Domains_Response_409 = POST_Domains["409"]

/**
 * 422 response for POST Domains endpoint
 * 
 * @path /v1/domains
 */
export type POST_Domains_Response_422 = POST_Domains["422"]

/**
 * Response types for DELETE DomainsByDomainReference endpoint
 * 
 * @path /v1/domains/{domain_reference}
 */
export type DELETE_DomainsByDomainReference = {
  404: components["schemas"]["Problem"]
  409: components["schemas"]["Problem"]
  422: components["schemas"]["HTTPValidationError"]
}

/**
 * 404 response for DELETE DomainsByDomainReference endpoint
 * 
 * @path /v1/domains/{domain_reference}
 */
export type DELETE_DomainsByDomainReference_Response_404 = DELETE_DomainsByDomainReference["404"]

/**
 * 409 response for DELETE DomainsByDomainReference endpoint
 * 
 * @path /v1/domains/{domain_reference}
 */
export type DELETE_DomainsByDomainReference_Response_409 = DELETE_DomainsByDomainReference["409"]

/**
 * 422 response for DELETE DomainsByDomainReference endpoint
 * 
 * @path /v1/domains/{domain_reference}
 */
export type DELETE_DomainsByDomainReference_Response_422 = DELETE_DomainsByDomainReference["422"]

/**
 * Response types for GET DomainsByDomainReference endpoint
 * 
 * @path /v1/domains/{domain_reference}
 */
export type GET_DomainsByDomainReference = {
  200: components["schemas"]["DomainResponse"]
  404: components["schemas"]["Problem"]
  422: components["schemas"]["HTTPValidationError"]
}

/**
 * 200 response for GET DomainsByDomainReference endpoint
 * 
 * @path /v1/domains/{domain_reference}
 */
export type GET_DomainsByDomainReference_Response_200 = GET_DomainsByDomainReference["200"]

/**
 * 404 response for GET DomainsByDomainReference endpoint
 * 
 * @path /v1/domains/{domain_reference}
 */
export type GET_DomainsByDomainReference_Response_404 = GET_DomainsByDomainReference["404"]

/**
 * 422 response for GET DomainsByDomainReference endpoint
 * 
 * @path /v1/domains/{domain_reference}
 */
export type GET_DomainsByDomainReference_Response_422 = GET_DomainsByDomainReference["422"]

/**
 * Response types for PATCH DomainsByDomainReference endpoint
 * 
 * @path /v1/domains/{domain_reference}
 */
export type PATCH_DomainsByDomainReference = {
  200: components["schemas"]["DomainResponse"]
  404: components["schemas"]["Problem"]
  422: components["schemas"]["HTTPValidationError"]
}

/**
 * 200 response for PATCH DomainsByDomainReference endpoint
 * 
 * @path /v1/domains/{domain_reference}
 */
export type PATCH_DomainsByDomainReference_Response_200 = PATCH_DomainsByDomainReference["200"]

/**
 * 404 response for PATCH DomainsByDomainReference endpoint
 * 
 * @path /v1/domains/{domain_reference}
 */
export type PATCH_DomainsByDomainReference_Response_404 = PATCH_DomainsByDomainReference["404"]

/**
 * 422 response for PATCH DomainsByDomainReference endpoint
 * 
 * @path /v1/domains/{domain_reference}
 */
export type PATCH_DomainsByDomainReference_Response_422 = PATCH_DomainsByDomainReference["422"]

/**
 * Response types for DELETE DomainsByDomainReferenceDnssec endpoint
 * 
 * @path /v1/domains/{domain_reference}/dnssec
 */
export type DELETE_DomainsByDomainReferenceDnssec = {
  404: components["schemas"]["Problem"]
  422: components["schemas"]["HTTPValidationError"]
}

/**
 * 404 response for DELETE DomainsByDomainReferenceDnssec endpoint
 * 
 * @path /v1/domains/{domain_reference}/dnssec
 */
export type DELETE_DomainsByDomainReferenceDnssec_Response_404 = DELETE_DomainsByDomainReferenceDnssec["404"]

/**
 * 422 response for DELETE DomainsByDomainReferenceDnssec endpoint
 * 
 * @path /v1/domains/{domain_reference}/dnssec
 */
export type DELETE_DomainsByDomainReferenceDnssec_Response_422 = DELETE_DomainsByDomainReferenceDnssec["422"]

/**
 * Response types for GET DomainsByDomainReferenceDnssec endpoint
 * 
 * @path /v1/domains/{domain_reference}/dnssec
 */
export type GET_DomainsByDomainReferenceDnssec = {
  404: components["schemas"]["Problem"]
  422: components["schemas"]["HTTPValidationError"]
}

/**
 * 404 response for GET DomainsByDomainReferenceDnssec endpoint
 * 
 * @path /v1/domains/{domain_reference}/dnssec
 */
export type GET_DomainsByDomainReferenceDnssec_Response_404 = GET_DomainsByDomainReferenceDnssec["404"]

/**
 * 422 response for GET DomainsByDomainReferenceDnssec endpoint
 * 
 * @path /v1/domains/{domain_reference}/dnssec
 */
export type GET_DomainsByDomainReferenceDnssec_Response_422 = GET_DomainsByDomainReferenceDnssec["422"]

/**
 * Response types for PUT DomainsByDomainReferenceDnssec endpoint
 * 
 * @path /v1/domains/{domain_reference}/dnssec
 */
export type PUT_DomainsByDomainReferenceDnssec = {
  404: components["schemas"]["Problem"]
  422: components["schemas"]["HTTPValidationError"]
}

/**
 * 404 response for PUT DomainsByDomainReferenceDnssec endpoint
 * 
 * @path /v1/domains/{domain_reference}/dnssec
 */
export type PUT_DomainsByDomainReferenceDnssec_Response_404 = PUT_DomainsByDomainReferenceDnssec["404"]

/**
 * 422 response for PUT DomainsByDomainReferenceDnssec endpoint
 * 
 * @path /v1/domains/{domain_reference}/dnssec
 */
export type PUT_DomainsByDomainReferenceDnssec_Response_422 = PUT_DomainsByDomainReferenceDnssec["422"]

/**
 * Response types for POST DomainsByDomainReferenceRenew endpoint
 * 
 * @path /v1/domains/{domain_reference}/renew
 */
export type POST_DomainsByDomainReferenceRenew = {
  200: components["schemas"]["DomainRenewResponse"]
  422: components["schemas"]["HTTPValidationError"]
}

/**
 * 200 response for POST DomainsByDomainReferenceRenew endpoint
 * 
 * @path /v1/domains/{domain_reference}/renew
 */
export type POST_DomainsByDomainReferenceRenew_Response_200 = POST_DomainsByDomainReferenceRenew["200"]

/**
 * 422 response for POST DomainsByDomainReferenceRenew endpoint
 * 
 * @path /v1/domains/{domain_reference}/renew
 */
export type POST_DomainsByDomainReferenceRenew_Response_422 = POST_DomainsByDomainReferenceRenew["422"]

/**
 * Response types for DELETE DomainsByDomainReferenceTransfer endpoint
 * 
 * @path /v1/domains/{domain_reference}/transfer
 */
export type DELETE_DomainsByDomainReferenceTransfer = {
  404: components["schemas"]["Problem"]
  409: components["schemas"]["Problem"]
  422: components["schemas"]["HTTPValidationError"]
}

/**
 * 404 response for DELETE DomainsByDomainReferenceTransfer endpoint
 * 
 * @path /v1/domains/{domain_reference}/transfer
 */
export type DELETE_DomainsByDomainReferenceTransfer_Response_404 = DELETE_DomainsByDomainReferenceTransfer["404"]

/**
 * 409 response for DELETE DomainsByDomainReferenceTransfer endpoint
 * 
 * @path /v1/domains/{domain_reference}/transfer
 */
export type DELETE_DomainsByDomainReferenceTransfer_Response_409 = DELETE_DomainsByDomainReferenceTransfer["409"]

/**
 * 422 response for DELETE DomainsByDomainReferenceTransfer endpoint
 * 
 * @path /v1/domains/{domain_reference}/transfer
 */
export type DELETE_DomainsByDomainReferenceTransfer_Response_422 = DELETE_DomainsByDomainReferenceTransfer["422"]

/**
 * Response types for GET DomainsCheck endpoint
 * 
 * @path /v1/domains/check
 * @param domains (query) - 
Specify one or more domains to check for availability.

 */
export type GET_DomainsCheck = {
  200: components["schemas"]["DomainCheckResponse"]
  422: components["schemas"]["HTTPValidationError"]
}

/**
 * 200 response for GET DomainsCheck endpoint
 * 
 * @path /v1/domains/check
 * @param domains (query) - 
Specify one or more domains to check for availability.

 */
export type GET_DomainsCheck_Response_200 = GET_DomainsCheck["200"]

/**
 * 422 response for GET DomainsCheck endpoint
 * 
 * @path /v1/domains/check
 * @param domains (query) - 
Specify one or more domains to check for availability.

 */
export type GET_DomainsCheck_Response_422 = GET_DomainsCheck["422"]

/**
 * Response types for POST DomainsTransfer endpoint
 * 
 * @path /v1/domains/transfer
 */
export type POST_DomainsTransfer = {
  201: components["schemas"]["DomainResponse"]
  400: components["schemas"]["Problem"]
  404: components["schemas"]["Problem"]
  409: components["schemas"]["Problem"]
  422: components["schemas"]["Problem"]
}

/**
 * 201 response for POST DomainsTransfer endpoint
 * 
 * @path /v1/domains/transfer
 */
export type POST_DomainsTransfer_Response_201 = POST_DomainsTransfer["201"]

/**
 * 400 response for POST DomainsTransfer endpoint
 * 
 * @path /v1/domains/transfer
 */
export type POST_DomainsTransfer_Response_400 = POST_DomainsTransfer["400"]

/**
 * 404 response for POST DomainsTransfer endpoint
 * 
 * @path /v1/domains/transfer
 */
export type POST_DomainsTransfer_Response_404 = POST_DomainsTransfer["404"]

/**
 * 409 response for POST DomainsTransfer endpoint
 * 
 * @path /v1/domains/transfer
 */
export type POST_DomainsTransfer_Response_409 = POST_DomainsTransfer["409"]

/**
 * 422 response for POST DomainsTransfer endpoint
 * 
 * @path /v1/domains/transfer
 */
export type POST_DomainsTransfer_Response_422 = POST_DomainsTransfer["422"]

/**
 * Response types for GET EmailForwards endpoint
 * 
 * @path /v1/email-forwards
 * @param status (query) - Optional status to filter the results
 * @param source_address (query) - Optional source address to filter the results
 * @param target_address (query) - Optional target address to filter the results
 */
export type GET_EmailForwards = {
  200: components["schemas"]["Pagination_EmailForward_"]
  422: components["schemas"]["HTTPValidationError"]
}

/**
 * 200 response for GET EmailForwards endpoint
 * 
 * @path /v1/email-forwards
 * @param status (query) - Optional status to filter the results
 * @param source_address (query) - Optional source address to filter the results
 * @param target_address (query) - Optional target address to filter the results
 */
export type GET_EmailForwards_Response_200 = GET_EmailForwards["200"]

/**
 * 422 response for GET EmailForwards endpoint
 * 
 * @path /v1/email-forwards
 * @param status (query) - Optional status to filter the results
 * @param source_address (query) - Optional source address to filter the results
 * @param target_address (query) - Optional target address to filter the results
 */
export type GET_EmailForwards_Response_422 = GET_EmailForwards["422"]

/**
 * Response types for POST EmailForwards endpoint
 * 
 * @path /v1/email-forwards
 */
export type POST_EmailForwards = {
  201: components["schemas"]["EmailForward"]
  422: components["schemas"]["HTTPValidationError"]
}

/**
 * 201 response for POST EmailForwards endpoint
 * 
 * @path /v1/email-forwards
 */
export type POST_EmailForwards_Response_201 = POST_EmailForwards["201"]

/**
 * 422 response for POST EmailForwards endpoint
 * 
 * @path /v1/email-forwards
 */
export type POST_EmailForwards_Response_422 = POST_EmailForwards["422"]

/**
 * Response types for POST EmailForwardsBulkDelete endpoint
 * 
 * @path /v1/email-forwards/bulk-delete
 */
export type POST_EmailForwardsBulkDelete = {
  200: components["schemas"]["BulkOperationResponse_EmailForwardBulkDeleteResult_"]
  422: components["schemas"]["HTTPValidationError"]
}

/**
 * 200 response for POST EmailForwardsBulkDelete endpoint
 * 
 * @path /v1/email-forwards/bulk-delete
 */
export type POST_EmailForwardsBulkDelete_Response_200 = POST_EmailForwardsBulkDelete["200"]

/**
 * 422 response for POST EmailForwardsBulkDelete endpoint
 * 
 * @path /v1/email-forwards/bulk-delete
 */
export type POST_EmailForwardsBulkDelete_Response_422 = POST_EmailForwardsBulkDelete["422"]

/**
 * Response types for PATCH EmailForwardsBulkUpdate endpoint
 * 
 * @path /v1/email-forwards/bulk-update
 */
export type PATCH_EmailForwardsBulkUpdate = {
  200: components["schemas"]["BulkOperationResponse_EmailForwardBulkUpdateResult_"]
  422: components["schemas"]["HTTPValidationError"]
}

/**
 * 200 response for PATCH EmailForwardsBulkUpdate endpoint
 * 
 * @path /v1/email-forwards/bulk-update
 */
export type PATCH_EmailForwardsBulkUpdate_Response_200 = PATCH_EmailForwardsBulkUpdate["200"]

/**
 * 422 response for PATCH EmailForwardsBulkUpdate endpoint
 * 
 * @path /v1/email-forwards/bulk-update
 */
export type PATCH_EmailForwardsBulkUpdate_Response_422 = PATCH_EmailForwardsBulkUpdate["422"]

/**
 * Response types for DELETE EmailForwardsByEmailForwardId endpoint
 * 
 * @path /v1/email-forwards/{email_forward_id}
 */
export type DELETE_EmailForwardsByEmailForwardId = {
  422: components["schemas"]["HTTPValidationError"]
}

/**
 * 422 response for DELETE EmailForwardsByEmailForwardId endpoint
 * 
 * @path /v1/email-forwards/{email_forward_id}
 */
export type DELETE_EmailForwardsByEmailForwardId_Response_422 = DELETE_EmailForwardsByEmailForwardId["422"]

/**
 * Response types for GET EmailForwardsByEmailForwardId endpoint
 * 
 * @path /v1/email-forwards/{email_forward_id}
 */
export type GET_EmailForwardsByEmailForwardId = {
  200: components["schemas"]["EmailForward"]
  422: components["schemas"]["HTTPValidationError"]
}

/**
 * 200 response for GET EmailForwardsByEmailForwardId endpoint
 * 
 * @path /v1/email-forwards/{email_forward_id}
 */
export type GET_EmailForwardsByEmailForwardId_Response_200 = GET_EmailForwardsByEmailForwardId["200"]

/**
 * 422 response for GET EmailForwardsByEmailForwardId endpoint
 * 
 * @path /v1/email-forwards/{email_forward_id}
 */
export type GET_EmailForwardsByEmailForwardId_Response_422 = GET_EmailForwardsByEmailForwardId["422"]

/**
 * Response types for PATCH EmailForwardsByEmailForwardId endpoint
 * 
 * @path /v1/email-forwards/{email_forward_id}
 */
export type PATCH_EmailForwardsByEmailForwardId = {
  200: components["schemas"]["EmailForward"]
  422: components["schemas"]["HTTPValidationError"]
}

/**
 * 200 response for PATCH EmailForwardsByEmailForwardId endpoint
 * 
 * @path /v1/email-forwards/{email_forward_id}
 */
export type PATCH_EmailForwardsByEmailForwardId_Response_200 = PATCH_EmailForwardsByEmailForwardId["200"]

/**
 * 422 response for PATCH EmailForwardsByEmailForwardId endpoint
 * 
 * @path /v1/email-forwards/{email_forward_id}
 */
export type PATCH_EmailForwardsByEmailForwardId_Response_422 = PATCH_EmailForwardsByEmailForwardId["422"]

/**
 * Response types for GET Event endpoint
 * 
 * @path /v1/event
 */
export type GET_Event = {
  200: components["schemas"]["Pagination_EventResponse_"]
  401: components["schemas"]["Problem"]
  422: components["schemas"]["HTTPValidationError"]
}

/**
 * 200 response for GET Event endpoint
 * 
 * @path /v1/event
 */
export type GET_Event_Response_200 = GET_Event["200"]

/**
 * 401 response for GET Event endpoint
 * 
 * @path /v1/event
 */
export type GET_Event_Response_401 = GET_Event["401"]

/**
 * 422 response for GET Event endpoint
 * 
 * @path /v1/event
 */
export type GET_Event_Response_422 = GET_Event["422"]

/**
 * Response types for GET EventByEventId endpoint
 * 
 * @path /v1/event/{event_id}
 */
export type GET_EventByEventId = {
  200: components["schemas"]["EventSchema"]
  401: components["schemas"]["Problem"]
  404: components["schemas"]["Problem"]
  422: components["schemas"]["HTTPValidationError"]
}

/**
 * 200 response for GET EventByEventId endpoint
 * 
 * @path /v1/event/{event_id}
 */
export type GET_EventByEventId_Response_200 = GET_EventByEventId["200"]

/**
 * 401 response for GET EventByEventId endpoint
 * 
 * @path /v1/event/{event_id}
 */
export type GET_EventByEventId_Response_401 = GET_EventByEventId["401"]

/**
 * 404 response for GET EventByEventId endpoint
 * 
 * @path /v1/event/{event_id}
 */
export type GET_EventByEventId_Response_404 = GET_EventByEventId["404"]

/**
 * 422 response for GET EventByEventId endpoint
 * 
 * @path /v1/event/{event_id}
 */
export type GET_EventByEventId_Response_422 = GET_EventByEventId["422"]

/**
 * Response types for PATCH EventByEventId endpoint
 * 
 * @path /v1/event/{event_id}
 */
export type PATCH_EventByEventId = {
  401: components["schemas"]["Problem"]
  404: components["schemas"]["Problem"]
  422: components["schemas"]["HTTPValidationError"]
}

/**
 * 401 response for PATCH EventByEventId endpoint
 * 
 * @path /v1/event/{event_id}
 */
export type PATCH_EventByEventId_Response_401 = PATCH_EventByEventId["401"]

/**
 * 404 response for PATCH EventByEventId endpoint
 * 
 * @path /v1/event/{event_id}
 */
export type PATCH_EventByEventId_Response_404 = PATCH_EventByEventId["404"]

/**
 * 422 response for PATCH EventByEventId endpoint
 * 
 * @path /v1/event/{event_id}
 */
export type PATCH_EventByEventId_Response_422 = PATCH_EventByEventId["422"]

/**
 * Response types for GET Notifications endpoint
 * 
 * @path /v1/notifications
 */
export type GET_Notifications = {
  200: components["schemas"]["Pagination_UserNotificationSummary_"]
  422: components["schemas"]["HTTPValidationError"]
}

/**
 * 200 response for GET Notifications endpoint
 * 
 * @path /v1/notifications
 */
export type GET_Notifications_Response_200 = GET_Notifications["200"]

/**
 * 422 response for GET Notifications endpoint
 * 
 * @path /v1/notifications
 */
export type GET_Notifications_Response_422 = GET_Notifications["422"]

/**
 * Response types for POST Notifications endpoint
 * 
 * @path /v1/notifications
 */
export type POST_Notifications = {
  201: components["schemas"]["Notification"]
  422: components["schemas"]["HTTPValidationError"]
}

/**
 * 201 response for POST Notifications endpoint
 * 
 * @path /v1/notifications
 */
export type POST_Notifications_Response_201 = POST_Notifications["201"]

/**
 * 422 response for POST Notifications endpoint
 * 
 * @path /v1/notifications
 */
export type POST_Notifications_Response_422 = POST_Notifications["422"]

/**
 * Response types for DELETE NotificationsByNotificationId endpoint
 * 
 * @path /v1/notifications/{notification_id}
 */
export type DELETE_NotificationsByNotificationId = {
  422: components["schemas"]["HTTPValidationError"]
}

/**
 * 422 response for DELETE NotificationsByNotificationId endpoint
 * 
 * @path /v1/notifications/{notification_id}
 */
export type DELETE_NotificationsByNotificationId_Response_422 = DELETE_NotificationsByNotificationId["422"]

/**
 * Response types for GET NotificationsByNotificationId endpoint
 * 
 * @path /v1/notifications/{notification_id}
 */
export type GET_NotificationsByNotificationId = {
  200: components["schemas"]["UserNotification"]
  422: components["schemas"]["HTTPValidationError"]
}

/**
 * 200 response for GET NotificationsByNotificationId endpoint
 * 
 * @path /v1/notifications/{notification_id}
 */
export type GET_NotificationsByNotificationId_Response_200 = GET_NotificationsByNotificationId["200"]

/**
 * 422 response for GET NotificationsByNotificationId endpoint
 * 
 * @path /v1/notifications/{notification_id}
 */
export type GET_NotificationsByNotificationId_Response_422 = GET_NotificationsByNotificationId["422"]

/**
 * Response types for PUT NotificationsByNotificationId endpoint
 * 
 * @path /v1/notifications/{notification_id}
 */
export type PUT_NotificationsByNotificationId = {
  200: components["schemas"]["Notification"]
  422: components["schemas"]["HTTPValidationError"]
}

/**
 * 200 response for PUT NotificationsByNotificationId endpoint
 * 
 * @path /v1/notifications/{notification_id}
 */
export type PUT_NotificationsByNotificationId_Response_200 = PUT_NotificationsByNotificationId["200"]

/**
 * 422 response for PUT NotificationsByNotificationId endpoint
 * 
 * @path /v1/notifications/{notification_id}
 */
export type PUT_NotificationsByNotificationId_Response_422 = PUT_NotificationsByNotificationId["422"]

/**
 * Response types for PATCH NotificationsByNotificationIdRead endpoint
 * 
 * @path /v1/notifications/{notification_id}/read
 */
export type PATCH_NotificationsByNotificationIdRead = {
  422: components["schemas"]["HTTPValidationError"]
}

/**
 * 422 response for PATCH NotificationsByNotificationIdRead endpoint
 * 
 * @path /v1/notifications/{notification_id}/read
 */
export type PATCH_NotificationsByNotificationIdRead_Response_422 = PATCH_NotificationsByNotificationIdRead["422"]

/**
 * Response types for GET Organizations endpoint
 * 
 * @path /v1/organizations
 */
export type GET_Organizations = {
  200: components["schemas"]["Pagination_Organization_"]
  422: components["schemas"]["HTTPValidationError"]
}

/**
 * 200 response for GET Organizations endpoint
 * 
 * @path /v1/organizations
 */
export type GET_Organizations_Response_200 = GET_Organizations["200"]

/**
 * 422 response for GET Organizations endpoint
 * 
 * @path /v1/organizations
 */
export type GET_Organizations_Response_422 = GET_Organizations["422"]

/**
 * Response types for POST Organizations endpoint
 * 
 * @path /v1/organizations
 */
export type POST_Organizations = {
  200: components["schemas"]["Organization"]
  422: components["schemas"]["HTTPValidationError"]
}

/**
 * 200 response for POST Organizations endpoint
 * 
 * @path /v1/organizations
 */
export type POST_Organizations_Response_200 = POST_Organizations["200"]

/**
 * 422 response for POST Organizations endpoint
 * 
 * @path /v1/organizations
 */
export type POST_Organizations_Response_422 = POST_Organizations["422"]

/**
 * Response types for GET OrganizationsAttributes endpoint
 * 
 * @path /v1/organizations/attributes
 * @param keys (query) - Optional list of attribute keys to filter
 */
export type GET_OrganizationsAttributes = {
  422: components["schemas"]["HTTPValidationError"]
}

/**
 * 422 response for GET OrganizationsAttributes endpoint
 * 
 * @path /v1/organizations/attributes
 * @param keys (query) - Optional list of attribute keys to filter
 */
export type GET_OrganizationsAttributes_Response_422 = GET_OrganizationsAttributes["422"]

/**
 * Response types for PATCH OrganizationsAttributes endpoint
 * 
 * @path /v1/organizations/attributes
 */
export type PATCH_OrganizationsAttributes = {
  422: components["schemas"]["HTTPValidationError"]
}

/**
 * 422 response for PATCH OrganizationsAttributes endpoint
 * 
 * @path /v1/organizations/attributes
 */
export type PATCH_OrganizationsAttributes_Response_422 = PATCH_OrganizationsAttributes["422"]

/**
 * Response types for GET OrganizationsAttributesByOrganizationId endpoint
 * 
 * @path /v1/organizations/attributes/{organization_id}
 * @param keys (query) - Optional list of attribute keys to filter
 */
export type GET_OrganizationsAttributesByOrganizationId = {
  422: components["schemas"]["HTTPValidationError"]
}

/**
 * 422 response for GET OrganizationsAttributesByOrganizationId endpoint
 * 
 * @path /v1/organizations/attributes/{organization_id}
 * @param keys (query) - Optional list of attribute keys to filter
 */
export type GET_OrganizationsAttributesByOrganizationId_Response_422 = GET_OrganizationsAttributesByOrganizationId["422"]

/**
 * Response types for PATCH OrganizationsAttributesByOrganizationId endpoint
 * 
 * @path /v1/organizations/attributes/{organization_id}
 */
export type PATCH_OrganizationsAttributesByOrganizationId = {
  422: components["schemas"]["HTTPValidationError"]
}

/**
 * 422 response for PATCH OrganizationsAttributesByOrganizationId endpoint
 * 
 * @path /v1/organizations/attributes/{organization_id}
 */
export type PATCH_OrganizationsAttributesByOrganizationId_Response_422 = PATCH_OrganizationsAttributesByOrganizationId["422"]

/**
 * Response types for DELETE OrganizationsByOrganizationId endpoint
 * 
 * @path /v1/organizations/{organization_id}
 */
export type DELETE_OrganizationsByOrganizationId = {
  422: components["schemas"]["HTTPValidationError"]
}

/**
 * 422 response for DELETE OrganizationsByOrganizationId endpoint
 * 
 * @path /v1/organizations/{organization_id}
 */
export type DELETE_OrganizationsByOrganizationId_Response_422 = DELETE_OrganizationsByOrganizationId["422"]

/**
 * Response types for GET OrganizationsByOrganizationId endpoint
 * 
 * @path /v1/organizations/{organization_id}
 */
export type GET_OrganizationsByOrganizationId = {
  200: components["schemas"]["OrganizationWithPlan"]
  422: components["schemas"]["HTTPValidationError"]
}

/**
 * 200 response for GET OrganizationsByOrganizationId endpoint
 * 
 * @path /v1/organizations/{organization_id}
 */
export type GET_OrganizationsByOrganizationId_Response_200 = GET_OrganizationsByOrganizationId["200"]

/**
 * 422 response for GET OrganizationsByOrganizationId endpoint
 * 
 * @path /v1/organizations/{organization_id}
 */
export type GET_OrganizationsByOrganizationId_Response_422 = GET_OrganizationsByOrganizationId["422"]

/**
 * Response types for PATCH OrganizationsByOrganizationId endpoint
 * 
 * @path /v1/organizations/{organization_id}
 */
export type PATCH_OrganizationsByOrganizationId = {
  200: components["schemas"]["Organization"]
  422: components["schemas"]["HTTPValidationError"]
}

/**
 * 200 response for PATCH OrganizationsByOrganizationId endpoint
 * 
 * @path /v1/organizations/{organization_id}
 */
export type PATCH_OrganizationsByOrganizationId_Response_200 = PATCH_OrganizationsByOrganizationId["200"]

/**
 * 422 response for PATCH OrganizationsByOrganizationId endpoint
 * 
 * @path /v1/organizations/{organization_id}
 */
export type PATCH_OrganizationsByOrganizationId_Response_422 = PATCH_OrganizationsByOrganizationId["422"]

/**
 * Response types for PATCH OrganizationsByOrganizationIdPlan endpoint
 * 
 * @path /v1/organizations/{organization_id}/plan
 */
export type PATCH_OrganizationsByOrganizationIdPlan = {
  200: components["schemas"]["OrganizationWithPlan"]
  422: components["schemas"]["HTTPValidationError"]
}

/**
 * 200 response for PATCH OrganizationsByOrganizationIdPlan endpoint
 * 
 * @path /v1/organizations/{organization_id}/plan
 */
export type PATCH_OrganizationsByOrganizationIdPlan_Response_200 = PATCH_OrganizationsByOrganizationIdPlan["200"]

/**
 * 422 response for PATCH OrganizationsByOrganizationIdPlan endpoint
 * 
 * @path /v1/organizations/{organization_id}/plan
 */
export type PATCH_OrganizationsByOrganizationIdPlan_Response_422 = PATCH_OrganizationsByOrganizationIdPlan["422"]

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
  200: components["schemas"]["IpRestrictionResponse"]
  422: components["schemas"]["HTTPValidationError"]
}

/**
 * 200 response for POST OrganizationsIpRestrictions endpoint
 * 
 * @path /v1/organizations/ip-restrictions
 */
export type POST_OrganizationsIpRestrictions_Response_200 = POST_OrganizationsIpRestrictions["200"]

/**
 * 422 response for POST OrganizationsIpRestrictions endpoint
 * 
 * @path /v1/organizations/ip-restrictions
 */
export type POST_OrganizationsIpRestrictions_Response_422 = POST_OrganizationsIpRestrictions["422"]

/**
 * Response types for DELETE OrganizationsIpRestrictionsByIpRestrictionId endpoint
 * 
 * @path /v1/organizations/ip-restrictions/{ip_restriction_id}
 */
export type DELETE_OrganizationsIpRestrictionsByIpRestrictionId = {
  422: components["schemas"]["HTTPValidationError"]
}

/**
 * 422 response for DELETE OrganizationsIpRestrictionsByIpRestrictionId endpoint
 * 
 * @path /v1/organizations/ip-restrictions/{ip_restriction_id}
 */
export type DELETE_OrganizationsIpRestrictionsByIpRestrictionId_Response_422 = DELETE_OrganizationsIpRestrictionsByIpRestrictionId["422"]

/**
 * Response types for GET OrganizationsIpRestrictionsByIpRestrictionId endpoint
 * 
 * @path /v1/organizations/ip-restrictions/{ip_restriction_id}
 */
export type GET_OrganizationsIpRestrictionsByIpRestrictionId = {
  200: components["schemas"]["IpRestrictionResponse"]
  422: components["schemas"]["HTTPValidationError"]
}

/**
 * 200 response for GET OrganizationsIpRestrictionsByIpRestrictionId endpoint
 * 
 * @path /v1/organizations/ip-restrictions/{ip_restriction_id}
 */
export type GET_OrganizationsIpRestrictionsByIpRestrictionId_Response_200 = GET_OrganizationsIpRestrictionsByIpRestrictionId["200"]

/**
 * 422 response for GET OrganizationsIpRestrictionsByIpRestrictionId endpoint
 * 
 * @path /v1/organizations/ip-restrictions/{ip_restriction_id}
 */
export type GET_OrganizationsIpRestrictionsByIpRestrictionId_Response_422 = GET_OrganizationsIpRestrictionsByIpRestrictionId["422"]

/**
 * Response types for PATCH OrganizationsIpRestrictionsByIpRestrictionId endpoint
 * 
 * @path /v1/organizations/ip-restrictions/{ip_restriction_id}
 */
export type PATCH_OrganizationsIpRestrictionsByIpRestrictionId = {
  200: components["schemas"]["IpRestrictionResponse"]
  422: components["schemas"]["HTTPValidationError"]
}

/**
 * 200 response for PATCH OrganizationsIpRestrictionsByIpRestrictionId endpoint
 * 
 * @path /v1/organizations/ip-restrictions/{ip_restriction_id}
 */
export type PATCH_OrganizationsIpRestrictionsByIpRestrictionId_Response_200 = PATCH_OrganizationsIpRestrictionsByIpRestrictionId["200"]

/**
 * 422 response for PATCH OrganizationsIpRestrictionsByIpRestrictionId endpoint
 * 
 * @path /v1/organizations/ip-restrictions/{ip_restriction_id}
 */
export type PATCH_OrganizationsIpRestrictionsByIpRestrictionId_Response_422 = PATCH_OrganizationsIpRestrictionsByIpRestrictionId["422"]

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
  200: components["schemas"]["Pagination_User_"]
  422: components["schemas"]["HTTPValidationError"]
}

/**
 * 200 response for GET OrganizationsUsers endpoint
 * 
 * @path /v1/organizations/users
 */
export type GET_OrganizationsUsers_Response_200 = GET_OrganizationsUsers["200"]

/**
 * 422 response for GET OrganizationsUsers endpoint
 * 
 * @path /v1/organizations/users
 */
export type GET_OrganizationsUsers_Response_422 = GET_OrganizationsUsers["422"]

/**
 * Response types for POST Users endpoint
 * 
 * @path /v1/users
 */
export type POST_Users = {
  200: components["schemas"]["User"]
  422: components["schemas"]["HTTPValidationError"]
}

/**
 * 200 response for POST Users endpoint
 * 
 * @path /v1/users
 */
export type POST_Users_Response_200 = POST_Users["200"]

/**
 * 422 response for POST Users endpoint
 * 
 * @path /v1/users
 */
export type POST_Users_Response_422 = POST_Users["422"]

/**
 * Response types for POST UsersAcceptTos endpoint
 * 
 * @path /v1/users/accept-tos
 */
export type POST_UsersAcceptTos = {
  422: components["schemas"]["HTTPValidationError"]
}

/**
 * 422 response for POST UsersAcceptTos endpoint
 * 
 * @path /v1/users/accept-tos
 */
export type POST_UsersAcceptTos_Response_422 = POST_UsersAcceptTos["422"]

/**
 * Response types for DELETE UsersByUserId endpoint
 * 
 * @path /v1/users/{user_id}
 */
export type DELETE_UsersByUserId = {
  422: components["schemas"]["HTTPValidationError"]
}

/**
 * 422 response for DELETE UsersByUserId endpoint
 * 
 * @path /v1/users/{user_id}
 */
export type DELETE_UsersByUserId_Response_422 = DELETE_UsersByUserId["422"]

/**
 * Response types for GET UsersByUserId endpoint
 * 
 * @path /v1/users/{user_id}
 */
export type GET_UsersByUserId = {
  200: components["schemas"]["UserWithAttributes"]
  422: components["schemas"]["HTTPValidationError"]
}

/**
 * 200 response for GET UsersByUserId endpoint
 * 
 * @path /v1/users/{user_id}
 */
export type GET_UsersByUserId_Response_200 = GET_UsersByUserId["200"]

/**
 * 422 response for GET UsersByUserId endpoint
 * 
 * @path /v1/users/{user_id}
 */
export type GET_UsersByUserId_Response_422 = GET_UsersByUserId["422"]

/**
 * Response types for PATCH UsersByUserId endpoint
 * 
 * @path /v1/users/{user_id}
 */
export type PATCH_UsersByUserId = {
  200: components["schemas"]["UserWithAttributes"]
  422: components["schemas"]["HTTPValidationError"]
}

/**
 * 200 response for PATCH UsersByUserId endpoint
 * 
 * @path /v1/users/{user_id}
 */
export type PATCH_UsersByUserId_Response_200 = PATCH_UsersByUserId["200"]

/**
 * 422 response for PATCH UsersByUserId endpoint
 * 
 * @path /v1/users/{user_id}
 */
export type PATCH_UsersByUserId_Response_422 = PATCH_UsersByUserId["422"]

/**
 * Response types for GET UsersByUserIdPermissions endpoint
 * 
 * @path /v1/users/{user_id}/permissions
 */
export type GET_UsersByUserIdPermissions = {
  200: components["schemas"]["PermissionSet"]
  422: components["schemas"]["HTTPValidationError"]
}

/**
 * 200 response for GET UsersByUserIdPermissions endpoint
 * 
 * @path /v1/users/{user_id}/permissions
 */
export type GET_UsersByUserIdPermissions_Response_200 = GET_UsersByUserIdPermissions["200"]

/**
 * 422 response for GET UsersByUserIdPermissions endpoint
 * 
 * @path /v1/users/{user_id}/permissions
 */
export type GET_UsersByUserIdPermissions_Response_422 = GET_UsersByUserIdPermissions["422"]

/**
 * Response types for GET UsersByUserIdRoles endpoint
 * 
 * @path /v1/users/{user_id}/roles
 */
export type GET_UsersByUserIdRoles = {
  200: components["schemas"]["RelationSet"]
  422: components["schemas"]["HTTPValidationError"]
}

/**
 * 200 response for GET UsersByUserIdRoles endpoint
 * 
 * @path /v1/users/{user_id}/roles
 */
export type GET_UsersByUserIdRoles_Response_200 = GET_UsersByUserIdRoles["200"]

/**
 * 422 response for GET UsersByUserIdRoles endpoint
 * 
 * @path /v1/users/{user_id}/roles
 */
export type GET_UsersByUserIdRoles_Response_422 = GET_UsersByUserIdRoles["422"]

/**
 * Response types for PATCH UsersByUserIdRoles endpoint
 * 
 * @path /v1/users/{user_id}/roles
 */
export type PATCH_UsersByUserIdRoles = {
  200: components["schemas"]["RelationSet"]
  422: components["schemas"]["HTTPValidationError"]
}

/**
 * 200 response for PATCH UsersByUserIdRoles endpoint
 * 
 * @path /v1/users/{user_id}/roles
 */
export type PATCH_UsersByUserIdRoles_Response_200 = PATCH_UsersByUserIdRoles["200"]

/**
 * 422 response for PATCH UsersByUserIdRoles endpoint
 * 
 * @path /v1/users/{user_id}/roles
 */
export type PATCH_UsersByUserIdRoles_Response_422 = PATCH_UsersByUserIdRoles["422"]

/**
 * Response types for GET UsersMe endpoint
 * 
 * @path /v1/users/me
 */
export type GET_UsersMe = {
  200: components["schemas"]["UserWithRelationPermissions"]
  422: components["schemas"]["HTTPValidationError"]
}

/**
 * 200 response for GET UsersMe endpoint
 * 
 * @path /v1/users/me
 */
export type GET_UsersMe_Response_200 = GET_UsersMe["200"]

/**
 * 422 response for GET UsersMe endpoint
 * 
 * @path /v1/users/me
 */
export type GET_UsersMe_Response_422 = GET_UsersMe["422"]



/**
 * Grouped response types by endpoint
 */

/**
 * Response types for AuthClientCredentials
 */
export type AuthClientCredentials_V1_Responses = {
  GET: {
    200: components["schemas"]["Pagination_OrganizationCredential_"]
    401: components["schemas"]["Problem"]
    422: components["schemas"]["HTTPValidationError"]
  }
  POST: {
    200: components["schemas"]["OrganizationCredentialCreated"]
    401: components["schemas"]["Problem"]
    422: components["schemas"]["HTTPValidationError"]
  }
}

/**
 * Response types for AuthClientCredentialsByApiKeyId
 */
export type AuthClientCredentialsByApiKeyId_V1_Responses = {
  DELETE: {
    401: components["schemas"]["Problem"]
    404: components["schemas"]["Problem"]
    422: components["schemas"]["HTTPValidationError"]
  }
}

/**
 * Response types for AuthLogout
 */
export type AuthLogout_V1_Responses = {
  POST: {
    401: components["schemas"]["Problem"]
  }
}

/**
 * Response types for AuthSignup
 */
export type AuthSignup_V1_Responses = {
  POST: {
    409: components["schemas"]["Problem"]
    422: components["schemas"]["HTTPValidationError"]
  }
}

/**
 * Response types for AuthToken
 */
export type AuthToken_V1_Responses = {
  POST: {
    401: components["schemas"]["Problem"]
    422: components["schemas"]["HTTPValidationError"]
  }
}

/**
 * Response types for Availability
 */
export type Availability_V1_Responses = {
  GET: {
    200: components["schemas"]["common__models__availability__datasource__DomainAvailabilityResponse"]
    401: components["schemas"]["Problem"]
    422: components["schemas"]["HTTPValidationError"]
    502: components["schemas"]["Problem"]
  }
}

/**
 * Response types for AvailabilityStream
 */
export type AvailabilityStream_V1_Responses = {
  GET: {
    401: components["schemas"]["Problem"]
    422: components["schemas"]["HTTPValidationError"]
    502: components["schemas"]["Problem"]
  }
}

/**
 * Response types for Contacts
 */
export type Contacts_V1_Responses = {
  GET: {
    200: components["schemas"]["Pagination_ContactSchema_"]
    422: components["schemas"]["HTTPValidationError"]
  }
  POST: {
    201: components["schemas"]["ContactSchema"]
    422: components["schemas"]["HTTPValidationError"]
  }
}

/**
 * Response types for ContactsVerification
 */
export type ContactsVerification_V1_Responses = {
  GET: {
    200: components["schemas"]["ContactResponse"]
    401: components["schemas"]["Problem"]
    404: components["schemas"]["Problem"]
    422: components["schemas"]["HTTPValidationError"]
  }
  PUT: {
    400: components["schemas"]["Problem"]
    401: components["schemas"]["Problem"]
    404: components["schemas"]["Problem"]
    422: components["schemas"]["HTTPValidationError"]
  }
}

/**
 * Response types for ContactsVerify
 */
export type ContactsVerify_V1_Responses = {
  GET: {
    422: components["schemas"]["HTTPValidationError"]
  }
}

/**
 * Response types for ContactsByContactId
 */
export type ContactsByContactId_V1_Responses = {
  GET: {
    200: components["schemas"]["ContactSchema"]
    404: components["schemas"]["Problem"]
    422: components["schemas"]["HTTPValidationError"]
  }
  DELETE: {
    404: components["schemas"]["Problem"]
    409: components["schemas"]["Problem"]
    422: components["schemas"]["HTTPValidationError"]
  }
}

/**
 * Response types for ContactsByContactIdVerification
 */
export type ContactsByContactIdVerification_V1_Responses = {
  GET: {
    200: components["schemas"]["ContactVerificationResponse"]
    401: components["schemas"]["Problem"]
    404: components["schemas"]["Problem"]
    422: components["schemas"]["HTTPValidationError"]
  }
  POST: {
    401: components["schemas"]["Problem"]
    404: components["schemas"]["Problem"]
    405: components["schemas"]["Problem"]
    422: components["schemas"]["HTTPValidationError"]
  }
  PUT: {
    400: components["schemas"]["Problem"]
    401: components["schemas"]["Problem"]
    403: components["schemas"]["Problem"]
    404: components["schemas"]["Problem"]
    422: components["schemas"]["HTTPValidationError"]
  }
  DELETE: {
    401: components["schemas"]["Problem"]
    404: components["schemas"]["Problem"]
    422: components["schemas"]["HTTPValidationError"]
  }
}

/**
 * Response types for Dns
 */
export type Dns_V1_Responses = {
  GET: {
    200: components["schemas"]["Pagination_DnsZoneResponse_"]
    422: components["schemas"]["HTTPValidationError"]
  }
  POST: {
    422: components["schemas"]["HTTPValidationError"]
  }
}

/**
 * Response types for DnsByZoneName
 */
export type DnsByZoneName_V1_Responses = {
  GET: {
    200: components["schemas"]["DnsZoneResponse"]
    422: components["schemas"]["HTTPValidationError"]
  }
  DELETE: {
    422: components["schemas"]["HTTPValidationError"]
  }
}

/**
 * Response types for DnsByZoneNameDnssecDisable
 */
export type DnsByZoneNameDnssecDisable_V1_Responses = {
  POST: {
    200: components["schemas"]["DnsChangesResponse"]
    422: components["schemas"]["HTTPValidationError"]
  }
}

/**
 * Response types for DnsByZoneNameDnssecEnable
 */
export type DnsByZoneNameDnssecEnable_V1_Responses = {
  POST: {
    200: components["schemas"]["DnsChangesResponse"]
    422: components["schemas"]["HTTPValidationError"]
  }
}

/**
 * Response types for DnsByZoneNameRrsets
 */
export type DnsByZoneNameRrsets_V1_Responses = {
  PUT: {
    422: components["schemas"]["HTTPValidationError"]
  }
}

/**
 * Response types for DomainSearchSuggest
 */
export type DomainSearchSuggest_V1_Responses = {
  GET: {
    200: components["schemas"]["DomainSearchResponse"]
    401: components["schemas"]["Problem"]
    422: components["schemas"]["HTTPValidationError"]
    502: components["schemas"]["Problem"]
  }
}

/**
 * Response types for Domains
 */
export type Domains_V1_Responses = {
  GET: {
    200: components["schemas"]["Pagination_DomainResponse_"]
    422: components["schemas"]["HTTPValidationError"]
  }
  POST: {
    201: components["schemas"]["DomainResponse"]
    400: components["schemas"]["Problem"]
    404: components["schemas"]["Problem"]
    409: components["schemas"]["Problem"]
    422: components["schemas"]["HTTPValidationError"]
  }
}

/**
 * Response types for DomainsCheck
 */
export type DomainsCheck_V1_Responses = {
  GET: {
    200: components["schemas"]["DomainCheckResponse"]
    422: components["schemas"]["HTTPValidationError"]
  }
}

/**
 * Response types for DomainsTransfer
 */
export type DomainsTransfer_V1_Responses = {
  POST: {
    201: components["schemas"]["DomainResponse"]
    400: components["schemas"]["Problem"]
    404: components["schemas"]["Problem"]
    409: components["schemas"]["Problem"]
    422: components["schemas"]["Problem"]
  }
}

/**
 * Response types for DomainsByDomainReference
 */
export type DomainsByDomainReference_V1_Responses = {
  GET: {
    200: components["schemas"]["DomainResponse"]
    404: components["schemas"]["Problem"]
    422: components["schemas"]["HTTPValidationError"]
  }
  PATCH: {
    200: components["schemas"]["DomainResponse"]
    404: components["schemas"]["Problem"]
    422: components["schemas"]["HTTPValidationError"]
  }
  DELETE: {
    404: components["schemas"]["Problem"]
    409: components["schemas"]["Problem"]
    422: components["schemas"]["HTTPValidationError"]
  }
}

/**
 * Response types for DomainsByDomainReferenceDnssec
 */
export type DomainsByDomainReferenceDnssec_V1_Responses = {
  GET: {
    404: components["schemas"]["Problem"]
    422: components["schemas"]["HTTPValidationError"]
  }
  PUT: {
    404: components["schemas"]["Problem"]
    422: components["schemas"]["HTTPValidationError"]
  }
  DELETE: {
    404: components["schemas"]["Problem"]
    422: components["schemas"]["HTTPValidationError"]
  }
}

/**
 * Response types for DomainsByDomainReferenceRenew
 */
export type DomainsByDomainReferenceRenew_V1_Responses = {
  POST: {
    200: components["schemas"]["DomainRenewResponse"]
    422: components["schemas"]["HTTPValidationError"]
  }
}

/**
 * Response types for DomainsByDomainReferenceTransfer
 */
export type DomainsByDomainReferenceTransfer_V1_Responses = {
  DELETE: {
    404: components["schemas"]["Problem"]
    409: components["schemas"]["Problem"]
    422: components["schemas"]["HTTPValidationError"]
  }
}

/**
 * Response types for EmailForwards
 */
export type EmailForwards_V1_Responses = {
  GET: {
    200: components["schemas"]["Pagination_EmailForward_"]
    422: components["schemas"]["HTTPValidationError"]
  }
  POST: {
    201: components["schemas"]["EmailForward"]
    422: components["schemas"]["HTTPValidationError"]
  }
}

/**
 * Response types for EmailForwardsBulkDelete
 */
export type EmailForwardsBulkDelete_V1_Responses = {
  POST: {
    200: components["schemas"]["BulkOperationResponse_EmailForwardBulkDeleteResult_"]
    422: components["schemas"]["HTTPValidationError"]
  }
}

/**
 * Response types for EmailForwardsBulkUpdate
 */
export type EmailForwardsBulkUpdate_V1_Responses = {
  PATCH: {
    200: components["schemas"]["BulkOperationResponse_EmailForwardBulkUpdateResult_"]
    422: components["schemas"]["HTTPValidationError"]
  }
}

/**
 * Response types for EmailForwardsByEmailForwardId
 */
export type EmailForwardsByEmailForwardId_V1_Responses = {
  GET: {
    200: components["schemas"]["EmailForward"]
    422: components["schemas"]["HTTPValidationError"]
  }
  PATCH: {
    200: components["schemas"]["EmailForward"]
    422: components["schemas"]["HTTPValidationError"]
  }
  DELETE: {
    422: components["schemas"]["HTTPValidationError"]
  }
}

/**
 * Response types for Event
 */
export type Event_V1_Responses = {
  GET: {
    200: components["schemas"]["Pagination_EventResponse_"]
    401: components["schemas"]["Problem"]
    422: components["schemas"]["HTTPValidationError"]
  }
}

/**
 * Response types for EventByEventId
 */
export type EventByEventId_V1_Responses = {
  GET: {
    200: components["schemas"]["EventSchema"]
    401: components["schemas"]["Problem"]
    404: components["schemas"]["Problem"]
    422: components["schemas"]["HTTPValidationError"]
  }
  PATCH: {
    401: components["schemas"]["Problem"]
    404: components["schemas"]["Problem"]
    422: components["schemas"]["HTTPValidationError"]
  }
}

/**
 * Response types for Notifications
 */
export type Notifications_V1_Responses = {
  GET: {
    200: components["schemas"]["Pagination_UserNotificationSummary_"]
    422: components["schemas"]["HTTPValidationError"]
  }
  POST: {
    201: components["schemas"]["Notification"]
    422: components["schemas"]["HTTPValidationError"]
  }
}

/**
 * Response types for NotificationsByNotificationId
 */
export type NotificationsByNotificationId_V1_Responses = {
  GET: {
    200: components["schemas"]["UserNotification"]
    422: components["schemas"]["HTTPValidationError"]
  }
  PUT: {
    200: components["schemas"]["Notification"]
    422: components["schemas"]["HTTPValidationError"]
  }
  DELETE: {
    422: components["schemas"]["HTTPValidationError"]
  }
}

/**
 * Response types for NotificationsByNotificationIdRead
 */
export type NotificationsByNotificationIdRead_V1_Responses = {
  PATCH: {
    422: components["schemas"]["HTTPValidationError"]
  }
}

/**
 * Response types for Organizations
 */
export type Organizations_V1_Responses = {
  GET: {
    200: components["schemas"]["Pagination_Organization_"]
    422: components["schemas"]["HTTPValidationError"]
  }
  POST: {
    200: components["schemas"]["Organization"]
    422: components["schemas"]["HTTPValidationError"]
  }
}

/**
 * Response types for OrganizationsAttributes
 */
export type OrganizationsAttributes_V1_Responses = {
  GET: {
    422: components["schemas"]["HTTPValidationError"]
  }
  PATCH: {
    422: components["schemas"]["HTTPValidationError"]
  }
}

/**
 * Response types for OrganizationsAttributesByOrganizationId
 */
export type OrganizationsAttributesByOrganizationId_V1_Responses = {
  GET: {
    422: components["schemas"]["HTTPValidationError"]
  }
  PATCH: {
    422: components["schemas"]["HTTPValidationError"]
  }
}

/**
 * Response types for OrganizationsIpRestrictions
 */
export type OrganizationsIpRestrictions_V1_Responses = {
  GET: {
  }
  POST: {
    200: components["schemas"]["IpRestrictionResponse"]
    422: components["schemas"]["HTTPValidationError"]
  }
}

/**
 * Response types for OrganizationsIpRestrictionsByIpRestrictionId
 */
export type OrganizationsIpRestrictionsByIpRestrictionId_V1_Responses = {
  GET: {
    200: components["schemas"]["IpRestrictionResponse"]
    422: components["schemas"]["HTTPValidationError"]
  }
  PATCH: {
    200: components["schemas"]["IpRestrictionResponse"]
    422: components["schemas"]["HTTPValidationError"]
  }
  DELETE: {
    422: components["schemas"]["HTTPValidationError"]
  }
}

/**
 * Response types for OrganizationsRoles
 */
export type OrganizationsRoles_V1_Responses = {
  GET: {
  }
}

/**
 * Response types for OrganizationsUsers
 */
export type OrganizationsUsers_V1_Responses = {
  GET: {
    200: components["schemas"]["Pagination_User_"]
    422: components["schemas"]["HTTPValidationError"]
  }
}

/**
 * Response types for OrganizationsByOrganizationId
 */
export type OrganizationsByOrganizationId_V1_Responses = {
  GET: {
    200: components["schemas"]["OrganizationWithPlan"]
    422: components["schemas"]["HTTPValidationError"]
  }
  PATCH: {
    200: components["schemas"]["Organization"]
    422: components["schemas"]["HTTPValidationError"]
  }
  DELETE: {
    422: components["schemas"]["HTTPValidationError"]
  }
}

/**
 * Response types for OrganizationsByOrganizationIdPlan
 */
export type OrganizationsByOrganizationIdPlan_V1_Responses = {
  PATCH: {
    200: components["schemas"]["OrganizationWithPlan"]
    422: components["schemas"]["HTTPValidationError"]
  }
}

/**
 * Response types for Users
 */
export type Users_V1_Responses = {
  POST: {
    200: components["schemas"]["User"]
    422: components["schemas"]["HTTPValidationError"]
  }
}

/**
 * Response types for UsersAcceptTos
 */
export type UsersAcceptTos_V1_Responses = {
  POST: {
    422: components["schemas"]["HTTPValidationError"]
  }
}

/**
 * Response types for UsersMe
 */
export type UsersMe_V1_Responses = {
  GET: {
    200: components["schemas"]["UserWithRelationPermissions"]
    422: components["schemas"]["HTTPValidationError"]
  }
}

/**
 * Response types for UsersByUserId
 */
export type UsersByUserId_V1_Responses = {
  GET: {
    200: components["schemas"]["UserWithAttributes"]
    422: components["schemas"]["HTTPValidationError"]
  }
  PATCH: {
    200: components["schemas"]["UserWithAttributes"]
    422: components["schemas"]["HTTPValidationError"]
  }
  DELETE: {
    422: components["schemas"]["HTTPValidationError"]
  }
}

/**
 * Response types for UsersByUserIdPermissions
 */
export type UsersByUserIdPermissions_V1_Responses = {
  GET: {
    200: components["schemas"]["PermissionSet"]
    422: components["schemas"]["HTTPValidationError"]
  }
}

/**
 * Response types for UsersByUserIdRoles
 */
export type UsersByUserIdRoles_V1_Responses = {
  GET: {
    200: components["schemas"]["RelationSet"]
    422: components["schemas"]["HTTPValidationError"]
  }
  PATCH: {
    200: components["schemas"]["RelationSet"]
    422: components["schemas"]["HTTPValidationError"]
  }
}


