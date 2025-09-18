/**
 * Response types for OpusDNS API endpoints
 *
 * This file contains TypeScript types for API response structures and status codes.
 * Each type is derived from the OpenAPI operation specification and provides type safety for API responses.
 * These types ensure that response handling matches the expected API contract.
 *
 * @remarks
 * - Response types follow the pattern: `METHOD_EndpointName` for grouped responses
 * - Individual response types follow: `METHOD_EndpointName_Response_STATUSCODE`
 * - All response types include comprehensive descriptions from the OpenAPI specification
 * - These types ensure type safety when handling API responses
 * - Response types cover all possible HTTP status codes for each endpoint
 *
 * @example
 * ```typescript
 * // Using response types for API handling
 * const response: GET_Domains_Response_200 = await api.getDomains();
 * const domains = response.results;
 * 
 * // Handling different status codes
 * if (response.status === 200) {
 *   const data: GET_Domains_Response_200 = response.data;
 * } else if (response.status === 422) {
 *   const error: GET_Domains_Response_422 = response.data;
 * }
 * ```
 *
 * This file is auto-generated from the OpenAPI specification.
 * Do not edit manually.
 */



import { DomainDnssecDataArray, OrganizationAttribute2Array, IpRestrictionArray, TldResponseShortArray } from './schemas-arrays.d';

import { Pagination_OrganizationCredential, Problem, HTTPValidationError, OrganizationCredentialCreated, DomainAvailabilityList, Pagination_ContactSchema, ContactSchema, ContactVerification, Contact, Pagination_DnsZone, DnsZone, DnsChanges, DnsZoneSummary, DomainSearch, Pagination_Domain, Domain, DomainRenew, DomainRestore, DomainCheck, DomainSummary, Pagination_EmailForwardAlias, EmailForwardAlias, Pagination_Event, EventSchema, Pagination_UserNotificationSummary, Notification, UserNotification, Pagination_Organization, Organization, OrganizationWithBillingData, GetCurrentAvailablePlans, GetPrices, IpRestriction, Pagination_User, TldSpecification, User, UserWithAttributes, PermissionSet, RelationSet, UserVerification, UserPasswordResetEmail, UserWithRelationPermissions } from './schemas.d';

/**
 * Response types for GET AuthClientCredentials endpoint
 *
 * List Api Keys
 *
 * @remarks
 * This type defines all possible response structures for the GET AuthClientCredentials endpoint.
 * Each response code maps to a specific response type as defined in the OpenAPI specification.
 * Use this type to ensure type safety when handling API responses from this endpoint.
 *

 *
 * @path /v1/auth/client_credentials
 * @param status (query) - Optional status to filter the results
 *
 * @see {@link GET_AuthClientCredentials_Response_200} - 200 response type
 * @see {@link GET_AuthClientCredentials_Response_401} - 401 response type
 * @see {@link GET_AuthClientCredentials_Response_422} - 422 response type
 *

 */
export type GET_AuthClientCredentials_Response = GET_AuthClientCredentials_Response_200 | GET_AuthClientCredentials_Response_401 | GET_AuthClientCredentials_Response_422;

/**
 * 200 response for GET AuthClientCredentials endpoint
 *
 * @remarks
 * This type defines the response structure for the 200 status code
 * of the GET AuthClientCredentials endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/auth/client_credentials
 * @param status (query) - Optional status to filter the results
 *
 * @see {@link GET_AuthClientCredentials_Response} - The main response type definition
 * @see {@link Pagination_OrganizationCredential} - The actual schema type definition
 */
export type GET_AuthClientCredentials_Response_200 = Pagination_OrganizationCredential

/**
 * 401 response for GET AuthClientCredentials endpoint
 *
 * @remarks
 * This type defines the response structure for the 401 status code
 * of the GET AuthClientCredentials endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/auth/client_credentials
 * @param status (query) - Optional status to filter the results
 *
 * @see {@link GET_AuthClientCredentials_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type GET_AuthClientCredentials_Response_401 = Problem

/**
 * 422 response for GET AuthClientCredentials endpoint
 *
 * @remarks
 * This type defines the response structure for the 422 status code
 * of the GET AuthClientCredentials endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/auth/client_credentials
 * @param status (query) - Optional status to filter the results
 *
 * @see {@link GET_AuthClientCredentials_Response} - The main response type definition
 * @see {@link HTTPValidationError} - The actual schema type definition
 */
export type GET_AuthClientCredentials_Response_422 = HTTPValidationError

/**
 * Response types for POST AuthClientCredentials endpoint
 *
 * Issue Api Key
 *
 * @remarks
 * This type defines all possible response structures for the POST AuthClientCredentials endpoint.
 * Each response code maps to a specific response type as defined in the OpenAPI specification.
 * Use this type to ensure type safety when handling API responses from this endpoint.
 *

 *
 * @path /v1/auth/client_credentials
 *
 * @see {@link POST_AuthClientCredentials_Response_200} - 200 response type
 * @see {@link POST_AuthClientCredentials_Response_401} - 401 response type
 * @see {@link POST_AuthClientCredentials_Response_422} - 422 response type
 *

 */
export type POST_AuthClientCredentials_Response = POST_AuthClientCredentials_Response_200 | POST_AuthClientCredentials_Response_401 | POST_AuthClientCredentials_Response_422;

/**
 * 200 response for POST AuthClientCredentials endpoint
 *
 * @remarks
 * This type defines the response structure for the 200 status code
 * of the POST AuthClientCredentials endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/auth/client_credentials
 *
 * @see {@link POST_AuthClientCredentials_Response} - The main response type definition
 * @see {@link OrganizationCredentialCreated} - The actual schema type definition
 */
export type POST_AuthClientCredentials_Response_200 = OrganizationCredentialCreated

/**
 * 401 response for POST AuthClientCredentials endpoint
 *
 * @remarks
 * This type defines the response structure for the 401 status code
 * of the POST AuthClientCredentials endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/auth/client_credentials
 *
 * @see {@link POST_AuthClientCredentials_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type POST_AuthClientCredentials_Response_401 = Problem

/**
 * 422 response for POST AuthClientCredentials endpoint
 *
 * @remarks
 * This type defines the response structure for the 422 status code
 * of the POST AuthClientCredentials endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/auth/client_credentials
 *
 * @see {@link POST_AuthClientCredentials_Response} - The main response type definition
 * @see {@link HTTPValidationError} - The actual schema type definition
 */
export type POST_AuthClientCredentials_Response_422 = HTTPValidationError

/**
 * Response types for DELETE AuthClientCredentialsByApiKeyId endpoint
 *
 * Delete Api Key
 *
 * @remarks
 * This type defines all possible response structures for the DELETE AuthClientCredentialsByApiKeyId endpoint.
 * Each response code maps to a specific response type as defined in the OpenAPI specification.
 * Use this type to ensure type safety when handling API responses from this endpoint.
 *

 *
 * @path /v1/auth/client_credentials/{api_key_id}
 *
 * @see {@link DELETE_AuthClientCredentialsByApiKeyId_Response_401} - 401 response type
 * @see {@link DELETE_AuthClientCredentialsByApiKeyId_Response_404} - 404 response type
 * @see {@link DELETE_AuthClientCredentialsByApiKeyId_Response_422} - 422 response type
 *

 */
export type DELETE_AuthClientCredentialsByApiKeyId_Response = DELETE_AuthClientCredentialsByApiKeyId_Response_401 | DELETE_AuthClientCredentialsByApiKeyId_Response_404 | DELETE_AuthClientCredentialsByApiKeyId_Response_422;

/**
 * 401 response for DELETE AuthClientCredentialsByApiKeyId endpoint
 *
 * @remarks
 * This type defines the response structure for the 401 status code
 * of the DELETE AuthClientCredentialsByApiKeyId endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/auth/client_credentials/{api_key_id}
 *
 * @see {@link DELETE_AuthClientCredentialsByApiKeyId_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type DELETE_AuthClientCredentialsByApiKeyId_Response_401 = Problem

/**
 * 404 response for DELETE AuthClientCredentialsByApiKeyId endpoint
 *
 * @remarks
 * This type defines the response structure for the 404 status code
 * of the DELETE AuthClientCredentialsByApiKeyId endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/auth/client_credentials/{api_key_id}
 *
 * @see {@link DELETE_AuthClientCredentialsByApiKeyId_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type DELETE_AuthClientCredentialsByApiKeyId_Response_404 = Problem

/**
 * 422 response for DELETE AuthClientCredentialsByApiKeyId endpoint
 *
 * @remarks
 * This type defines the response structure for the 422 status code
 * of the DELETE AuthClientCredentialsByApiKeyId endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/auth/client_credentials/{api_key_id}
 *
 * @see {@link DELETE_AuthClientCredentialsByApiKeyId_Response} - The main response type definition
 * @see {@link HTTPValidationError} - The actual schema type definition
 */
export type DELETE_AuthClientCredentialsByApiKeyId_Response_422 = HTTPValidationError

/**
 * Response types for POST AuthInternalClientCredentials endpoint
 *
 * Issue Opusdns Internal Api Key
 *
 * @remarks
 * This type defines all possible response structures for the POST AuthInternalClientCredentials endpoint.
 * Each response code maps to a specific response type as defined in the OpenAPI specification.
 * Use this type to ensure type safety when handling API responses from this endpoint.
 *

 *
 * @path /v1/auth/internal_client_credentials
 *
 * @see {@link POST_AuthInternalClientCredentials_Response_200} - 200 response type
 * @see {@link POST_AuthInternalClientCredentials_Response_422} - 422 response type
 *

 */
export type POST_AuthInternalClientCredentials_Response = POST_AuthInternalClientCredentials_Response_200 | POST_AuthInternalClientCredentials_Response_422;

/**
 * 200 response for POST AuthInternalClientCredentials endpoint
 *
 * @remarks
 * This type defines the response structure for the 200 status code
 * of the POST AuthInternalClientCredentials endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/auth/internal_client_credentials
 *
 * @see {@link POST_AuthInternalClientCredentials_Response} - The main response type definition
 * @see {@link OrganizationCredentialCreated} - The actual schema type definition
 */
export type POST_AuthInternalClientCredentials_Response_200 = OrganizationCredentialCreated

/**
 * 422 response for POST AuthInternalClientCredentials endpoint
 *
 * @remarks
 * This type defines the response structure for the 422 status code
 * of the POST AuthInternalClientCredentials endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/auth/internal_client_credentials
 *
 * @see {@link POST_AuthInternalClientCredentials_Response} - The main response type definition
 * @see {@link HTTPValidationError} - The actual schema type definition
 */
export type POST_AuthInternalClientCredentials_Response_422 = HTTPValidationError

/**
 * Response types for POST AuthLogout endpoint
 *
 * Logout
 *
 * @remarks
 * This type defines all possible response structures for the POST AuthLogout endpoint.
 * Each response code maps to a specific response type as defined in the OpenAPI specification.
 * Use this type to ensure type safety when handling API responses from this endpoint.
 *

 *
 * @path /v1/auth/logout
 *
 * @see {@link POST_AuthLogout_Response_401} - 401 response type
 *

 */
export type POST_AuthLogout_Response = POST_AuthLogout_Response_401;

/**
 * 401 response for POST AuthLogout endpoint
 *
 * @remarks
 * This type defines the response structure for the 401 status code
 * of the POST AuthLogout endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/auth/logout
 *
 * @see {@link POST_AuthLogout_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type POST_AuthLogout_Response_401 = Problem

/**
 * Response types for POST AuthSignup endpoint
 *
 * Signup
 *
 * @remarks
 * This type defines all possible response structures for the POST AuthSignup endpoint.
 * Each response code maps to a specific response type as defined in the OpenAPI specification.
 * Use this type to ensure type safety when handling API responses from this endpoint.
 *

 *
 * @path /v1/auth/signup
 *
 * @see {@link POST_AuthSignup_Response_409} - 409 response type
 * @see {@link POST_AuthSignup_Response_422} - 422 response type
 *

 */
export type POST_AuthSignup_Response = POST_AuthSignup_Response_409 | POST_AuthSignup_Response_422;

/**
 * 409 response for POST AuthSignup endpoint
 *
 * @remarks
 * This type defines the response structure for the 409 status code
 * of the POST AuthSignup endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/auth/signup
 *
 * @see {@link POST_AuthSignup_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type POST_AuthSignup_Response_409 = Problem

/**
 * 422 response for POST AuthSignup endpoint
 *
 * @remarks
 * This type defines the response structure for the 422 status code
 * of the POST AuthSignup endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/auth/signup
 *
 * @see {@link POST_AuthSignup_Response} - The main response type definition
 * @see {@link HTTPValidationError} - The actual schema type definition
 */
export type POST_AuthSignup_Response_422 = HTTPValidationError

/**
 * Response types for POST AuthToken endpoint
 *
 * Issue Organization Token
 *
 * @remarks
 * This type defines all possible response structures for the POST AuthToken endpoint.
 * Each response code maps to a specific response type as defined in the OpenAPI specification.
 * Use this type to ensure type safety when handling API responses from this endpoint.
 *

 *
 * @path /v1/auth/token
 *
 * @see {@link POST_AuthToken_Response_401} - 401 response type
 * @see {@link POST_AuthToken_Response_422} - 422 response type
 *

 */
export type POST_AuthToken_Response = POST_AuthToken_Response_401 | POST_AuthToken_Response_422;

/**
 * 401 response for POST AuthToken endpoint
 *
 * @remarks
 * This type defines the response structure for the 401 status code
 * of the POST AuthToken endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/auth/token
 *
 * @see {@link POST_AuthToken_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type POST_AuthToken_Response_401 = Problem

/**
 * 422 response for POST AuthToken endpoint
 *
 * @remarks
 * This type defines the response structure for the 422 status code
 * of the POST AuthToken endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/auth/token
 *
 * @see {@link POST_AuthToken_Response} - The main response type definition
 * @see {@link HTTPValidationError} - The actual schema type definition
 */
export type POST_AuthToken_Response_422 = HTTPValidationError

/**
 * Response types for GET Availability endpoint
 *
 * Bulk Availability
 * Check the availability of one or more domains.
 *
 * @remarks
 * This type defines all possible response structures for the GET Availability endpoint.
 * Each response code maps to a specific response type as defined in the OpenAPI specification.
 * Use this type to ensure type safety when handling API responses from this endpoint.
 *

 *
 * @path /v1/availability
 * @param domains (query) - 
Specify one or more domains to check for availability.

 *
 * @see {@link GET_Availability_Response_200} - 200 response type
 * @see {@link GET_Availability_Response_401} - 401 response type
 * @see {@link GET_Availability_Response_422} - 422 response type
 * @see {@link GET_Availability_Response_502} - 502 response type
 *

 */
export type GET_Availability_Response = GET_Availability_Response_200 | GET_Availability_Response_401 | GET_Availability_Response_422 | GET_Availability_Response_502;

/**
 * 200 response for GET Availability endpoint
 *
 * @remarks
 * This type defines the response structure for the 200 status code
 * of the GET Availability endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/availability
 * @param domains (query) - 
Specify one or more domains to check for availability.

 *
 * @see {@link GET_Availability_Response} - The main response type definition
 * @see {@link DomainAvailabilityList} - The actual schema type definition
 */
export type GET_Availability_Response_200 = DomainAvailabilityList

/**
 * 401 response for GET Availability endpoint
 *
 * @remarks
 * This type defines the response structure for the 401 status code
 * of the GET Availability endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/availability
 * @param domains (query) - 
Specify one or more domains to check for availability.

 *
 * @see {@link GET_Availability_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type GET_Availability_Response_401 = Problem

/**
 * 422 response for GET Availability endpoint
 *
 * @remarks
 * This type defines the response structure for the 422 status code
 * of the GET Availability endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/availability
 * @param domains (query) - 
Specify one or more domains to check for availability.

 *
 * @see {@link GET_Availability_Response} - The main response type definition
 * @see {@link HTTPValidationError} - The actual schema type definition
 */
export type GET_Availability_Response_422 = HTTPValidationError

/**
 * 502 response for GET Availability endpoint
 *
 * @remarks
 * This type defines the response structure for the 502 status code
 * of the GET Availability endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/availability
 * @param domains (query) - 
Specify one or more domains to check for availability.

 *
 * @see {@link GET_Availability_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type GET_Availability_Response_502 = Problem

/**
 * Response types for GET AvailabilityStream endpoint
 *
 * Stream Availability
 * Stream domain availability results using Server-Sent Events (SSE) until the `done` event is received.
 *
 * @remarks
 * This type defines all possible response structures for the GET AvailabilityStream endpoint.
 * Each response code maps to a specific response type as defined in the OpenAPI specification.
 * Use this type to ensure type safety when handling API responses from this endpoint.
 *

 *
 * @path /v1/availability/stream
 * @param domains (query) - 
Specify one or more domains to check for availability.

 *
 * @see {@link GET_AvailabilityStream_Response_401} - 401 response type
 * @see {@link GET_AvailabilityStream_Response_422} - 422 response type
 * @see {@link GET_AvailabilityStream_Response_502} - 502 response type
 *

 */
export type GET_AvailabilityStream_Response = GET_AvailabilityStream_Response_401 | GET_AvailabilityStream_Response_422 | GET_AvailabilityStream_Response_502;

/**
 * 401 response for GET AvailabilityStream endpoint
 *
 * @remarks
 * This type defines the response structure for the 401 status code
 * of the GET AvailabilityStream endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/availability/stream
 * @param domains (query) - 
Specify one or more domains to check for availability.

 *
 * @see {@link GET_AvailabilityStream_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type GET_AvailabilityStream_Response_401 = Problem

/**
 * 422 response for GET AvailabilityStream endpoint
 *
 * @remarks
 * This type defines the response structure for the 422 status code
 * of the GET AvailabilityStream endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/availability/stream
 * @param domains (query) - 
Specify one or more domains to check for availability.

 *
 * @see {@link GET_AvailabilityStream_Response} - The main response type definition
 * @see {@link HTTPValidationError} - The actual schema type definition
 */
export type GET_AvailabilityStream_Response_422 = HTTPValidationError

/**
 * 502 response for GET AvailabilityStream endpoint
 *
 * @remarks
 * This type defines the response structure for the 502 status code
 * of the GET AvailabilityStream endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/availability/stream
 * @param domains (query) - 
Specify one or more domains to check for availability.

 *
 * @see {@link GET_AvailabilityStream_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type GET_AvailabilityStream_Response_502 = Problem

/**
 * Response types for GET Contacts endpoint
 *
 * Get Contacts
 * List all contacts
 *
 * @remarks
 * This type defines all possible response structures for the GET Contacts endpoint.
 * Each response code maps to a specific response type as defined in the OpenAPI specification.
 * Use this type to ensure type safety when handling API responses from this endpoint.
 *

 *
 * @path /v1/contacts
 *
 * @see {@link GET_Contacts_Response_200} - 200 response type
 * @see {@link GET_Contacts_Response_422} - 422 response type
 *

 */
export type GET_Contacts_Response = GET_Contacts_Response_200 | GET_Contacts_Response_422;

/**
 * 200 response for GET Contacts endpoint
 *
 * @remarks
 * This type defines the response structure for the 200 status code
 * of the GET Contacts endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/contacts
 *
 * @see {@link GET_Contacts_Response} - The main response type definition
 * @see {@link Pagination_ContactSchema} - The actual schema type definition
 */
export type GET_Contacts_Response_200 = Pagination_ContactSchema

/**
 * 422 response for GET Contacts endpoint
 *
 * @remarks
 * This type defines the response structure for the 422 status code
 * of the GET Contacts endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/contacts
 *
 * @see {@link GET_Contacts_Response} - The main response type definition
 * @see {@link HTTPValidationError} - The actual schema type definition
 */
export type GET_Contacts_Response_422 = HTTPValidationError

/**
 * Response types for POST Contacts endpoint
 *
 * Create Contact
 * Create a contact
 *
 * @remarks
 * This type defines all possible response structures for the POST Contacts endpoint.
 * Each response code maps to a specific response type as defined in the OpenAPI specification.
 * Use this type to ensure type safety when handling API responses from this endpoint.
 *

 *
 * @path /v1/contacts
 *
 * @see {@link POST_Contacts_Response_201} - 201 response type
 * @see {@link POST_Contacts_Response_422} - 422 response type
 *

 */
export type POST_Contacts_Response = POST_Contacts_Response_201 | POST_Contacts_Response_422;

/**
 * 201 response for POST Contacts endpoint
 *
 * @remarks
 * This type defines the response structure for the 201 status code
 * of the POST Contacts endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/contacts
 *
 * @see {@link POST_Contacts_Response} - The main response type definition
 * @see {@link ContactSchema} - The actual schema type definition
 */
export type POST_Contacts_Response_201 = ContactSchema

/**
 * 422 response for POST Contacts endpoint
 *
 * @remarks
 * This type defines the response structure for the 422 status code
 * of the POST Contacts endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/contacts
 *
 * @see {@link POST_Contacts_Response} - The main response type definition
 * @see {@link HTTPValidationError} - The actual schema type definition
 */
export type POST_Contacts_Response_422 = HTTPValidationError

/**
 * Response types for DELETE ContactsByContactId endpoint
 *
 * Delete Contact
 * Delete a contact
 *
 * @remarks
 * This type defines all possible response structures for the DELETE ContactsByContactId endpoint.
 * Each response code maps to a specific response type as defined in the OpenAPI specification.
 * Use this type to ensure type safety when handling API responses from this endpoint.
 *

 *
 * @path /v1/contacts/{contact_id}
 *
 * @see {@link DELETE_ContactsByContactId_Response_404} - 404 response type
 * @see {@link DELETE_ContactsByContactId_Response_409} - 409 response type
 * @see {@link DELETE_ContactsByContactId_Response_422} - 422 response type
 *

 */
export type DELETE_ContactsByContactId_Response = DELETE_ContactsByContactId_Response_404 | DELETE_ContactsByContactId_Response_409 | DELETE_ContactsByContactId_Response_422;

/**
 * 404 response for DELETE ContactsByContactId endpoint
 *
 * @remarks
 * This type defines the response structure for the 404 status code
 * of the DELETE ContactsByContactId endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/contacts/{contact_id}
 *
 * @see {@link DELETE_ContactsByContactId_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type DELETE_ContactsByContactId_Response_404 = Problem

/**
 * 409 response for DELETE ContactsByContactId endpoint
 *
 * @remarks
 * This type defines the response structure for the 409 status code
 * of the DELETE ContactsByContactId endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/contacts/{contact_id}
 *
 * @see {@link DELETE_ContactsByContactId_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type DELETE_ContactsByContactId_Response_409 = Problem

/**
 * 422 response for DELETE ContactsByContactId endpoint
 *
 * @remarks
 * This type defines the response structure for the 422 status code
 * of the DELETE ContactsByContactId endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/contacts/{contact_id}
 *
 * @see {@link DELETE_ContactsByContactId_Response} - The main response type definition
 * @see {@link HTTPValidationError} - The actual schema type definition
 */
export type DELETE_ContactsByContactId_Response_422 = HTTPValidationError

/**
 * Response types for GET ContactsByContactId endpoint
 *
 * Get Contact
 * Retrieve a contact
 *
 * @remarks
 * This type defines all possible response structures for the GET ContactsByContactId endpoint.
 * Each response code maps to a specific response type as defined in the OpenAPI specification.
 * Use this type to ensure type safety when handling API responses from this endpoint.
 *

 *
 * @path /v1/contacts/{contact_id}
 *
 * @see {@link GET_ContactsByContactId_Response_200} - 200 response type
 * @see {@link GET_ContactsByContactId_Response_404} - 404 response type
 * @see {@link GET_ContactsByContactId_Response_422} - 422 response type
 *

 */
export type GET_ContactsByContactId_Response = GET_ContactsByContactId_Response_200 | GET_ContactsByContactId_Response_404 | GET_ContactsByContactId_Response_422;

/**
 * 200 response for GET ContactsByContactId endpoint
 *
 * @remarks
 * This type defines the response structure for the 200 status code
 * of the GET ContactsByContactId endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/contacts/{contact_id}
 *
 * @see {@link GET_ContactsByContactId_Response} - The main response type definition
 * @see {@link ContactSchema} - The actual schema type definition
 */
export type GET_ContactsByContactId_Response_200 = ContactSchema

/**
 * 404 response for GET ContactsByContactId endpoint
 *
 * @remarks
 * This type defines the response structure for the 404 status code
 * of the GET ContactsByContactId endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/contacts/{contact_id}
 *
 * @see {@link GET_ContactsByContactId_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type GET_ContactsByContactId_Response_404 = Problem

/**
 * 422 response for GET ContactsByContactId endpoint
 *
 * @remarks
 * This type defines the response structure for the 422 status code
 * of the GET ContactsByContactId endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/contacts/{contact_id}
 *
 * @see {@link GET_ContactsByContactId_Response} - The main response type definition
 * @see {@link HTTPValidationError} - The actual schema type definition
 */
export type GET_ContactsByContactId_Response_422 = HTTPValidationError

/**
 * Response types for DELETE ContactsByContactIdVerification endpoint
 *
 * Cancel Verification
 * Delete contact verification
 *
 * @remarks
 * This type defines all possible response structures for the DELETE ContactsByContactIdVerification endpoint.
 * Each response code maps to a specific response type as defined in the OpenAPI specification.
 * Use this type to ensure type safety when handling API responses from this endpoint.
 *

 *
 * @path /v1/contacts/{contact_id}/verification
 *
 * @see {@link DELETE_ContactsByContactIdVerification_Response_401} - 401 response type
 * @see {@link DELETE_ContactsByContactIdVerification_Response_404} - 404 response type
 * @see {@link DELETE_ContactsByContactIdVerification_Response_422} - 422 response type
 *

 */
export type DELETE_ContactsByContactIdVerification_Response = DELETE_ContactsByContactIdVerification_Response_401 | DELETE_ContactsByContactIdVerification_Response_404 | DELETE_ContactsByContactIdVerification_Response_422;

/**
 * 401 response for DELETE ContactsByContactIdVerification endpoint
 *
 * @remarks
 * This type defines the response structure for the 401 status code
 * of the DELETE ContactsByContactIdVerification endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/contacts/{contact_id}/verification
 *
 * @see {@link DELETE_ContactsByContactIdVerification_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type DELETE_ContactsByContactIdVerification_Response_401 = Problem

/**
 * 404 response for DELETE ContactsByContactIdVerification endpoint
 *
 * @remarks
 * This type defines the response structure for the 404 status code
 * of the DELETE ContactsByContactIdVerification endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/contacts/{contact_id}/verification
 *
 * @see {@link DELETE_ContactsByContactIdVerification_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type DELETE_ContactsByContactIdVerification_Response_404 = Problem

/**
 * 422 response for DELETE ContactsByContactIdVerification endpoint
 *
 * @remarks
 * This type defines the response structure for the 422 status code
 * of the DELETE ContactsByContactIdVerification endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/contacts/{contact_id}/verification
 *
 * @see {@link DELETE_ContactsByContactIdVerification_Response} - The main response type definition
 * @see {@link HTTPValidationError} - The actual schema type definition
 */
export type DELETE_ContactsByContactIdVerification_Response_422 = HTTPValidationError

/**
 * Response types for GET ContactsByContactIdVerification endpoint
 *
 * Get Verification Status
 * Retrieve contact verification
 *
 * @remarks
 * This type defines all possible response structures for the GET ContactsByContactIdVerification endpoint.
 * Each response code maps to a specific response type as defined in the OpenAPI specification.
 * Use this type to ensure type safety when handling API responses from this endpoint.
 *

 *
 * @path /v1/contacts/{contact_id}/verification
 *
 * @see {@link GET_ContactsByContactIdVerification_Response_200} - 200 response type
 * @see {@link GET_ContactsByContactIdVerification_Response_401} - 401 response type
 * @see {@link GET_ContactsByContactIdVerification_Response_404} - 404 response type
 * @see {@link GET_ContactsByContactIdVerification_Response_422} - 422 response type
 *

 */
export type GET_ContactsByContactIdVerification_Response = GET_ContactsByContactIdVerification_Response_200 | GET_ContactsByContactIdVerification_Response_401 | GET_ContactsByContactIdVerification_Response_404 | GET_ContactsByContactIdVerification_Response_422;

/**
 * 200 response for GET ContactsByContactIdVerification endpoint
 *
 * @remarks
 * This type defines the response structure for the 200 status code
 * of the GET ContactsByContactIdVerification endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/contacts/{contact_id}/verification
 *
 * @see {@link GET_ContactsByContactIdVerification_Response} - The main response type definition
 * @see {@link ContactVerification} - The actual schema type definition
 */
export type GET_ContactsByContactIdVerification_Response_200 = ContactVerification

/**
 * 401 response for GET ContactsByContactIdVerification endpoint
 *
 * @remarks
 * This type defines the response structure for the 401 status code
 * of the GET ContactsByContactIdVerification endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/contacts/{contact_id}/verification
 *
 * @see {@link GET_ContactsByContactIdVerification_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type GET_ContactsByContactIdVerification_Response_401 = Problem

/**
 * 404 response for GET ContactsByContactIdVerification endpoint
 *
 * @remarks
 * This type defines the response structure for the 404 status code
 * of the GET ContactsByContactIdVerification endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/contacts/{contact_id}/verification
 *
 * @see {@link GET_ContactsByContactIdVerification_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type GET_ContactsByContactIdVerification_Response_404 = Problem

/**
 * 422 response for GET ContactsByContactIdVerification endpoint
 *
 * @remarks
 * This type defines the response structure for the 422 status code
 * of the GET ContactsByContactIdVerification endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/contacts/{contact_id}/verification
 *
 * @see {@link GET_ContactsByContactIdVerification_Response} - The main response type definition
 * @see {@link HTTPValidationError} - The actual schema type definition
 */
export type GET_ContactsByContactIdVerification_Response_422 = HTTPValidationError

/**
 * Response types for POST ContactsByContactIdVerification endpoint
 *
 * Start Contact Verification
 * Start contact verification
 *
 * @remarks
 * This type defines all possible response structures for the POST ContactsByContactIdVerification endpoint.
 * Each response code maps to a specific response type as defined in the OpenAPI specification.
 * Use this type to ensure type safety when handling API responses from this endpoint.
 *

 *
 * @path /v1/contacts/{contact_id}/verification
 *
 * @see {@link POST_ContactsByContactIdVerification_Response_401} - 401 response type
 * @see {@link POST_ContactsByContactIdVerification_Response_404} - 404 response type
 * @see {@link POST_ContactsByContactIdVerification_Response_405} - 405 response type
 * @see {@link POST_ContactsByContactIdVerification_Response_422} - 422 response type
 *

 */
export type POST_ContactsByContactIdVerification_Response = POST_ContactsByContactIdVerification_Response_401 | POST_ContactsByContactIdVerification_Response_404 | POST_ContactsByContactIdVerification_Response_405 | POST_ContactsByContactIdVerification_Response_422;

/**
 * 401 response for POST ContactsByContactIdVerification endpoint
 *
 * @remarks
 * This type defines the response structure for the 401 status code
 * of the POST ContactsByContactIdVerification endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/contacts/{contact_id}/verification
 *
 * @see {@link POST_ContactsByContactIdVerification_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type POST_ContactsByContactIdVerification_Response_401 = Problem

/**
 * 404 response for POST ContactsByContactIdVerification endpoint
 *
 * @remarks
 * This type defines the response structure for the 404 status code
 * of the POST ContactsByContactIdVerification endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/contacts/{contact_id}/verification
 *
 * @see {@link POST_ContactsByContactIdVerification_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type POST_ContactsByContactIdVerification_Response_404 = Problem

/**
 * 405 response for POST ContactsByContactIdVerification endpoint
 *
 * @remarks
 * This type defines the response structure for the 405 status code
 * of the POST ContactsByContactIdVerification endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/contacts/{contact_id}/verification
 *
 * @see {@link POST_ContactsByContactIdVerification_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type POST_ContactsByContactIdVerification_Response_405 = Problem

/**
 * 422 response for POST ContactsByContactIdVerification endpoint
 *
 * @remarks
 * This type defines the response structure for the 422 status code
 * of the POST ContactsByContactIdVerification endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/contacts/{contact_id}/verification
 *
 * @see {@link POST_ContactsByContactIdVerification_Response} - The main response type definition
 * @see {@link HTTPValidationError} - The actual schema type definition
 */
export type POST_ContactsByContactIdVerification_Response_422 = HTTPValidationError

/**
 * Response types for PUT ContactsByContactIdVerification endpoint
 *
 * Update Verification
 * Complete contact verification
 *
 * @remarks
 * This type defines all possible response structures for the PUT ContactsByContactIdVerification endpoint.
 * Each response code maps to a specific response type as defined in the OpenAPI specification.
 * Use this type to ensure type safety when handling API responses from this endpoint.
 *

 *
 * @path /v1/contacts/{contact_id}/verification
 *
 * @see {@link PUT_ContactsByContactIdVerification_Response_400} - 400 response type
 * @see {@link PUT_ContactsByContactIdVerification_Response_401} - 401 response type
 * @see {@link PUT_ContactsByContactIdVerification_Response_403} - 403 response type
 * @see {@link PUT_ContactsByContactIdVerification_Response_404} - 404 response type
 * @see {@link PUT_ContactsByContactIdVerification_Response_422} - 422 response type
 *

 */
export type PUT_ContactsByContactIdVerification_Response = PUT_ContactsByContactIdVerification_Response_400 | PUT_ContactsByContactIdVerification_Response_401 | PUT_ContactsByContactIdVerification_Response_403 | PUT_ContactsByContactIdVerification_Response_404 | PUT_ContactsByContactIdVerification_Response_422;

/**
 * 400 response for PUT ContactsByContactIdVerification endpoint
 *
 * @remarks
 * This type defines the response structure for the 400 status code
 * of the PUT ContactsByContactIdVerification endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/contacts/{contact_id}/verification
 *
 * @see {@link PUT_ContactsByContactIdVerification_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type PUT_ContactsByContactIdVerification_Response_400 = Problem

/**
 * 401 response for PUT ContactsByContactIdVerification endpoint
 *
 * @remarks
 * This type defines the response structure for the 401 status code
 * of the PUT ContactsByContactIdVerification endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/contacts/{contact_id}/verification
 *
 * @see {@link PUT_ContactsByContactIdVerification_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type PUT_ContactsByContactIdVerification_Response_401 = Problem

/**
 * 403 response for PUT ContactsByContactIdVerification endpoint
 *
 * @remarks
 * This type defines the response structure for the 403 status code
 * of the PUT ContactsByContactIdVerification endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/contacts/{contact_id}/verification
 *
 * @see {@link PUT_ContactsByContactIdVerification_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type PUT_ContactsByContactIdVerification_Response_403 = Problem

/**
 * 404 response for PUT ContactsByContactIdVerification endpoint
 *
 * @remarks
 * This type defines the response structure for the 404 status code
 * of the PUT ContactsByContactIdVerification endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/contacts/{contact_id}/verification
 *
 * @see {@link PUT_ContactsByContactIdVerification_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type PUT_ContactsByContactIdVerification_Response_404 = Problem

/**
 * 422 response for PUT ContactsByContactIdVerification endpoint
 *
 * @remarks
 * This type defines the response structure for the 422 status code
 * of the PUT ContactsByContactIdVerification endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/contacts/{contact_id}/verification
 *
 * @see {@link PUT_ContactsByContactIdVerification_Response} - The main response type definition
 * @see {@link HTTPValidationError} - The actual schema type definition
 */
export type PUT_ContactsByContactIdVerification_Response_422 = HTTPValidationError

/**
 * Response types for GET ContactsVerification endpoint
 *
 * Get Verification By Token
 * Retrieve contact verification
 *
 * @remarks
 * This type defines all possible response structures for the GET ContactsVerification endpoint.
 * Each response code maps to a specific response type as defined in the OpenAPI specification.
 * Use this type to ensure type safety when handling API responses from this endpoint.
 *

 *
 * @path /v1/contacts/verification
 *
 * @see {@link GET_ContactsVerification_Response_200} - 200 response type
 * @see {@link GET_ContactsVerification_Response_401} - 401 response type
 * @see {@link GET_ContactsVerification_Response_404} - 404 response type
 * @see {@link GET_ContactsVerification_Response_422} - 422 response type
 *

 */
export type GET_ContactsVerification_Response = GET_ContactsVerification_Response_200 | GET_ContactsVerification_Response_401 | GET_ContactsVerification_Response_404 | GET_ContactsVerification_Response_422;

/**
 * 200 response for GET ContactsVerification endpoint
 *
 * @remarks
 * This type defines the response structure for the 200 status code
 * of the GET ContactsVerification endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/contacts/verification
 *
 * @see {@link GET_ContactsVerification_Response} - The main response type definition
 * @see {@link Contact} - The actual schema type definition
 */
export type GET_ContactsVerification_Response_200 = Contact

/**
 * 401 response for GET ContactsVerification endpoint
 *
 * @remarks
 * This type defines the response structure for the 401 status code
 * of the GET ContactsVerification endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/contacts/verification
 *
 * @see {@link GET_ContactsVerification_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type GET_ContactsVerification_Response_401 = Problem

/**
 * 404 response for GET ContactsVerification endpoint
 *
 * @remarks
 * This type defines the response structure for the 404 status code
 * of the GET ContactsVerification endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/contacts/verification
 *
 * @see {@link GET_ContactsVerification_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type GET_ContactsVerification_Response_404 = Problem

/**
 * 422 response for GET ContactsVerification endpoint
 *
 * @remarks
 * This type defines the response structure for the 422 status code
 * of the GET ContactsVerification endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/contacts/verification
 *
 * @see {@link GET_ContactsVerification_Response} - The main response type definition
 * @see {@link HTTPValidationError} - The actual schema type definition
 */
export type GET_ContactsVerification_Response_422 = HTTPValidationError

/**
 * Response types for PUT ContactsVerification endpoint
 *
 * Update Verification By Token
 * Complete contact verification
 *
 * @remarks
 * This type defines all possible response structures for the PUT ContactsVerification endpoint.
 * Each response code maps to a specific response type as defined in the OpenAPI specification.
 * Use this type to ensure type safety when handling API responses from this endpoint.
 *

 *
 * @path /v1/contacts/verification
 *
 * @see {@link PUT_ContactsVerification_Response_400} - 400 response type
 * @see {@link PUT_ContactsVerification_Response_401} - 401 response type
 * @see {@link PUT_ContactsVerification_Response_404} - 404 response type
 * @see {@link PUT_ContactsVerification_Response_422} - 422 response type
 *

 */
export type PUT_ContactsVerification_Response = PUT_ContactsVerification_Response_400 | PUT_ContactsVerification_Response_401 | PUT_ContactsVerification_Response_404 | PUT_ContactsVerification_Response_422;

/**
 * 400 response for PUT ContactsVerification endpoint
 *
 * @remarks
 * This type defines the response structure for the 400 status code
 * of the PUT ContactsVerification endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/contacts/verification
 *
 * @see {@link PUT_ContactsVerification_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type PUT_ContactsVerification_Response_400 = Problem

/**
 * 401 response for PUT ContactsVerification endpoint
 *
 * @remarks
 * This type defines the response structure for the 401 status code
 * of the PUT ContactsVerification endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/contacts/verification
 *
 * @see {@link PUT_ContactsVerification_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type PUT_ContactsVerification_Response_401 = Problem

/**
 * 404 response for PUT ContactsVerification endpoint
 *
 * @remarks
 * This type defines the response structure for the 404 status code
 * of the PUT ContactsVerification endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/contacts/verification
 *
 * @see {@link PUT_ContactsVerification_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type PUT_ContactsVerification_Response_404 = Problem

/**
 * 422 response for PUT ContactsVerification endpoint
 *
 * @remarks
 * This type defines the response structure for the 422 status code
 * of the PUT ContactsVerification endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/contacts/verification
 *
 * @see {@link PUT_ContactsVerification_Response} - The main response type definition
 * @see {@link HTTPValidationError} - The actual schema type definition
 */
export type PUT_ContactsVerification_Response_422 = HTTPValidationError

/**
 * Response types for GET ContactsVerify endpoint
 *
 * Email Verify Contact
 *
 * @remarks
 * This type defines all possible response structures for the GET ContactsVerify endpoint.
 * Each response code maps to a specific response type as defined in the OpenAPI specification.
 * Use this type to ensure type safety when handling API responses from this endpoint.
 *

 *
 * @path /v1/contacts/verify
 *
 * @see {@link GET_ContactsVerify_Response_422} - 422 response type
 *

 */
export type GET_ContactsVerify_Response = GET_ContactsVerify_Response_422;

/**
 * 422 response for GET ContactsVerify endpoint
 *
 * @remarks
 * This type defines the response structure for the 422 status code
 * of the GET ContactsVerify endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/contacts/verify
 *
 * @see {@link GET_ContactsVerify_Response} - The main response type definition
 * @see {@link HTTPValidationError} - The actual schema type definition
 */
export type GET_ContactsVerify_Response_422 = HTTPValidationError

/**
 * Response types for GET Dns endpoint
 *
 * List Zones
 *
 * @remarks
 * This type defines all possible response structures for the GET Dns endpoint.
 * Each response code maps to a specific response type as defined in the OpenAPI specification.
 * Use this type to ensure type safety when handling API responses from this endpoint.
 *

 *
 * @path /v1/dns
 *
 * @see {@link GET_Dns_Response_200} - 200 response type
 * @see {@link GET_Dns_Response_422} - 422 response type
 *

 */
export type GET_Dns_Response = GET_Dns_Response_200 | GET_Dns_Response_422;

/**
 * 200 response for GET Dns endpoint
 *
 * @remarks
 * This type defines the response structure for the 200 status code
 * of the GET Dns endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/dns
 *
 * @see {@link GET_Dns_Response} - The main response type definition
 * @see {@link Pagination_DnsZone} - The actual schema type definition
 */
export type GET_Dns_Response_200 = Pagination_DnsZone

/**
 * 422 response for GET Dns endpoint
 *
 * @remarks
 * This type defines the response structure for the 422 status code
 * of the GET Dns endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/dns
 *
 * @see {@link GET_Dns_Response} - The main response type definition
 * @see {@link HTTPValidationError} - The actual schema type definition
 */
export type GET_Dns_Response_422 = HTTPValidationError

/**
 * Response types for POST Dns endpoint
 *
 * Create Zone
 *
 * @remarks
 * This type defines all possible response structures for the POST Dns endpoint.
 * Each response code maps to a specific response type as defined in the OpenAPI specification.
 * Use this type to ensure type safety when handling API responses from this endpoint.
 *

 *
 * @path /v1/dns
 *
 * @see {@link POST_Dns_Response_400} - 400 response type
 * @see {@link POST_Dns_Response_422} - 422 response type
 *

 */
export type POST_Dns_Response = POST_Dns_Response_400 | POST_Dns_Response_422;

/**
 * 400 response for POST Dns endpoint
 *
 * @remarks
 * This type defines the response structure for the 400 status code
 * of the POST Dns endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/dns
 *
 * @see {@link POST_Dns_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type POST_Dns_Response_400 = Problem

/**
 * 422 response for POST Dns endpoint
 *
 * @remarks
 * This type defines the response structure for the 422 status code
 * of the POST Dns endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/dns
 *
 * @see {@link POST_Dns_Response} - The main response type definition
 * @see {@link HTTPValidationError} - The actual schema type definition
 */
export type POST_Dns_Response_422 = HTTPValidationError

/**
 * Response types for DELETE DnsByZoneName endpoint
 *
 * Delete Zone
 *
 * @remarks
 * This type defines all possible response structures for the DELETE DnsByZoneName endpoint.
 * Each response code maps to a specific response type as defined in the OpenAPI specification.
 * Use this type to ensure type safety when handling API responses from this endpoint.
 *

 *
 * @path /v1/dns/{zone_name}
 * @param zone_name (path) - DNS zone name (trailing dot optional)
 *
 * @see {@link DELETE_DnsByZoneName_Response_422} - 422 response type
 *

 */
export type DELETE_DnsByZoneName_Response = DELETE_DnsByZoneName_Response_422;

/**
 * 422 response for DELETE DnsByZoneName endpoint
 *
 * @remarks
 * This type defines the response structure for the 422 status code
 * of the DELETE DnsByZoneName endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/dns/{zone_name}
 * @param zone_name (path) - DNS zone name (trailing dot optional)
 *
 * @see {@link DELETE_DnsByZoneName_Response} - The main response type definition
 * @see {@link HTTPValidationError} - The actual schema type definition
 */
export type DELETE_DnsByZoneName_Response_422 = HTTPValidationError

/**
 * Response types for GET DnsByZoneName endpoint
 *
 * Get Zone
 *
 * @remarks
 * This type defines all possible response structures for the GET DnsByZoneName endpoint.
 * Each response code maps to a specific response type as defined in the OpenAPI specification.
 * Use this type to ensure type safety when handling API responses from this endpoint.
 *

 *
 * @path /v1/dns/{zone_name}
 * @param zone_name (path) - DNS zone name (trailing dot optional)
 *
 * @see {@link GET_DnsByZoneName_Response_200} - 200 response type
 * @see {@link GET_DnsByZoneName_Response_422} - 422 response type
 *

 */
export type GET_DnsByZoneName_Response = GET_DnsByZoneName_Response_200 | GET_DnsByZoneName_Response_422;

/**
 * 200 response for GET DnsByZoneName endpoint
 *
 * @remarks
 * This type defines the response structure for the 200 status code
 * of the GET DnsByZoneName endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/dns/{zone_name}
 * @param zone_name (path) - DNS zone name (trailing dot optional)
 *
 * @see {@link GET_DnsByZoneName_Response} - The main response type definition
 * @see {@link DnsZone} - The actual schema type definition
 */
export type GET_DnsByZoneName_Response_200 = DnsZone

/**
 * 422 response for GET DnsByZoneName endpoint
 *
 * @remarks
 * This type defines the response structure for the 422 status code
 * of the GET DnsByZoneName endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/dns/{zone_name}
 * @param zone_name (path) - DNS zone name (trailing dot optional)
 *
 * @see {@link GET_DnsByZoneName_Response} - The main response type definition
 * @see {@link HTTPValidationError} - The actual schema type definition
 */
export type GET_DnsByZoneName_Response_422 = HTTPValidationError

/**
 * Response types for POST DnsByZoneNameDnssecDisable endpoint
 *
 * Disable Dnssec
 *
 * @remarks
 * This type defines all possible response structures for the POST DnsByZoneNameDnssecDisable endpoint.
 * Each response code maps to a specific response type as defined in the OpenAPI specification.
 * Use this type to ensure type safety when handling API responses from this endpoint.
 *

 *
 * @path /v1/dns/{zone_name}/dnssec/disable
 * @param zone_name (path) - DNS zone name (trailing dot optional)
 *
 * @see {@link POST_DnsByZoneNameDnssecDisable_Response_200} - 200 response type
 * @see {@link POST_DnsByZoneNameDnssecDisable_Response_422} - 422 response type
 *

 */
export type POST_DnsByZoneNameDnssecDisable_Response = POST_DnsByZoneNameDnssecDisable_Response_200 | POST_DnsByZoneNameDnssecDisable_Response_422;

/**
 * 200 response for POST DnsByZoneNameDnssecDisable endpoint
 *
 * @remarks
 * This type defines the response structure for the 200 status code
 * of the POST DnsByZoneNameDnssecDisable endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/dns/{zone_name}/dnssec/disable
 * @param zone_name (path) - DNS zone name (trailing dot optional)
 *
 * @see {@link POST_DnsByZoneNameDnssecDisable_Response} - The main response type definition
 * @see {@link DnsChanges} - The actual schema type definition
 */
export type POST_DnsByZoneNameDnssecDisable_Response_200 = DnsChanges

/**
 * 422 response for POST DnsByZoneNameDnssecDisable endpoint
 *
 * @remarks
 * This type defines the response structure for the 422 status code
 * of the POST DnsByZoneNameDnssecDisable endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/dns/{zone_name}/dnssec/disable
 * @param zone_name (path) - DNS zone name (trailing dot optional)
 *
 * @see {@link POST_DnsByZoneNameDnssecDisable_Response} - The main response type definition
 * @see {@link HTTPValidationError} - The actual schema type definition
 */
export type POST_DnsByZoneNameDnssecDisable_Response_422 = HTTPValidationError

/**
 * Response types for POST DnsByZoneNameDnssecEnable endpoint
 *
 * Enable Dnssec
 *
 * @remarks
 * This type defines all possible response structures for the POST DnsByZoneNameDnssecEnable endpoint.
 * Each response code maps to a specific response type as defined in the OpenAPI specification.
 * Use this type to ensure type safety when handling API responses from this endpoint.
 *

 *
 * @path /v1/dns/{zone_name}/dnssec/enable
 * @param zone_name (path) - DNS zone name (trailing dot optional)
 *
 * @see {@link POST_DnsByZoneNameDnssecEnable_Response_200} - 200 response type
 * @see {@link POST_DnsByZoneNameDnssecEnable_Response_422} - 422 response type
 *

 */
export type POST_DnsByZoneNameDnssecEnable_Response = POST_DnsByZoneNameDnssecEnable_Response_200 | POST_DnsByZoneNameDnssecEnable_Response_422;

/**
 * 200 response for POST DnsByZoneNameDnssecEnable endpoint
 *
 * @remarks
 * This type defines the response structure for the 200 status code
 * of the POST DnsByZoneNameDnssecEnable endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/dns/{zone_name}/dnssec/enable
 * @param zone_name (path) - DNS zone name (trailing dot optional)
 *
 * @see {@link POST_DnsByZoneNameDnssecEnable_Response} - The main response type definition
 * @see {@link DnsChanges} - The actual schema type definition
 */
export type POST_DnsByZoneNameDnssecEnable_Response_200 = DnsChanges

/**
 * 422 response for POST DnsByZoneNameDnssecEnable endpoint
 *
 * @remarks
 * This type defines the response structure for the 422 status code
 * of the POST DnsByZoneNameDnssecEnable endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/dns/{zone_name}/dnssec/enable
 * @param zone_name (path) - DNS zone name (trailing dot optional)
 *
 * @see {@link POST_DnsByZoneNameDnssecEnable_Response} - The main response type definition
 * @see {@link HTTPValidationError} - The actual schema type definition
 */
export type POST_DnsByZoneNameDnssecEnable_Response_422 = HTTPValidationError

/**
 * Response types for PATCH DnsByZoneNameRecords endpoint
 *
 * Patch Zone Records
 *
 * @remarks
 * This type defines all possible response structures for the PATCH DnsByZoneNameRecords endpoint.
 * Each response code maps to a specific response type as defined in the OpenAPI specification.
 * Use this type to ensure type safety when handling API responses from this endpoint.
 *

 *
 * @path /v1/dns/{zone_name}/records
 * @param zone_name (path) - DNS zone name (trailing dot optional)
 *
 * @see {@link PATCH_DnsByZoneNameRecords_Response_400} - 400 response type
 * @see {@link PATCH_DnsByZoneNameRecords_Response_422} - 422 response type
 *

 */
export type PATCH_DnsByZoneNameRecords_Response = PATCH_DnsByZoneNameRecords_Response_400 | PATCH_DnsByZoneNameRecords_Response_422;

/**
 * 400 response for PATCH DnsByZoneNameRecords endpoint
 *
 * @remarks
 * This type defines the response structure for the 400 status code
 * of the PATCH DnsByZoneNameRecords endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/dns/{zone_name}/records
 * @param zone_name (path) - DNS zone name (trailing dot optional)
 *
 * @see {@link PATCH_DnsByZoneNameRecords_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type PATCH_DnsByZoneNameRecords_Response_400 = Problem

/**
 * 422 response for PATCH DnsByZoneNameRecords endpoint
 *
 * @remarks
 * This type defines the response structure for the 422 status code
 * of the PATCH DnsByZoneNameRecords endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/dns/{zone_name}/records
 * @param zone_name (path) - DNS zone name (trailing dot optional)
 *
 * @see {@link PATCH_DnsByZoneNameRecords_Response} - The main response type definition
 * @see {@link HTTPValidationError} - The actual schema type definition
 */
export type PATCH_DnsByZoneNameRecords_Response_422 = HTTPValidationError

/**
 * Response types for PATCH DnsByZoneNameRrsets endpoint
 *
 * Patch Zone Rrsets
 *
 * @remarks
 * This type defines all possible response structures for the PATCH DnsByZoneNameRrsets endpoint.
 * Each response code maps to a specific response type as defined in the OpenAPI specification.
 * Use this type to ensure type safety when handling API responses from this endpoint.
 *

 *
 * @path /v1/dns/{zone_name}/rrsets
 * @param zone_name (path) - DNS zone name (trailing dot optional)
 *
 * @see {@link PATCH_DnsByZoneNameRrsets_Response_400} - 400 response type
 * @see {@link PATCH_DnsByZoneNameRrsets_Response_422} - 422 response type
 *

 */
export type PATCH_DnsByZoneNameRrsets_Response = PATCH_DnsByZoneNameRrsets_Response_400 | PATCH_DnsByZoneNameRrsets_Response_422;

/**
 * 400 response for PATCH DnsByZoneNameRrsets endpoint
 *
 * @remarks
 * This type defines the response structure for the 400 status code
 * of the PATCH DnsByZoneNameRrsets endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/dns/{zone_name}/rrsets
 * @param zone_name (path) - DNS zone name (trailing dot optional)
 *
 * @see {@link PATCH_DnsByZoneNameRrsets_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type PATCH_DnsByZoneNameRrsets_Response_400 = Problem

/**
 * 422 response for PATCH DnsByZoneNameRrsets endpoint
 *
 * @remarks
 * This type defines the response structure for the 422 status code
 * of the PATCH DnsByZoneNameRrsets endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/dns/{zone_name}/rrsets
 * @param zone_name (path) - DNS zone name (trailing dot optional)
 *
 * @see {@link PATCH_DnsByZoneNameRrsets_Response} - The main response type definition
 * @see {@link HTTPValidationError} - The actual schema type definition
 */
export type PATCH_DnsByZoneNameRrsets_Response_422 = HTTPValidationError

/**
 * Response types for PUT DnsByZoneNameRrsets endpoint
 *
 * Update Zone Rrsets
 *
 * @remarks
 * This type defines all possible response structures for the PUT DnsByZoneNameRrsets endpoint.
 * Each response code maps to a specific response type as defined in the OpenAPI specification.
 * Use this type to ensure type safety when handling API responses from this endpoint.
 *

 *
 * @path /v1/dns/{zone_name}/rrsets
 * @param zone_name (path) - DNS zone name (trailing dot optional)
 *
 * @see {@link PUT_DnsByZoneNameRrsets_Response_400} - 400 response type
 * @see {@link PUT_DnsByZoneNameRrsets_Response_422} - 422 response type
 *

 */
export type PUT_DnsByZoneNameRrsets_Response = PUT_DnsByZoneNameRrsets_Response_400 | PUT_DnsByZoneNameRrsets_Response_422;

/**
 * 400 response for PUT DnsByZoneNameRrsets endpoint
 *
 * @remarks
 * This type defines the response structure for the 400 status code
 * of the PUT DnsByZoneNameRrsets endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/dns/{zone_name}/rrsets
 * @param zone_name (path) - DNS zone name (trailing dot optional)
 *
 * @see {@link PUT_DnsByZoneNameRrsets_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type PUT_DnsByZoneNameRrsets_Response_400 = Problem

/**
 * 422 response for PUT DnsByZoneNameRrsets endpoint
 *
 * @remarks
 * This type defines the response structure for the 422 status code
 * of the PUT DnsByZoneNameRrsets endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/dns/{zone_name}/rrsets
 * @param zone_name (path) - DNS zone name (trailing dot optional)
 *
 * @see {@link PUT_DnsByZoneNameRrsets_Response} - The main response type definition
 * @see {@link HTTPValidationError} - The actual schema type definition
 */
export type PUT_DnsByZoneNameRrsets_Response_422 = HTTPValidationError

/**
 * Response types for GET DnsSummary endpoint
 *
 * Get Zones Summary
 *
 * @remarks
 * This type defines all possible response structures for the GET DnsSummary endpoint.
 * Each response code maps to a specific response type as defined in the OpenAPI specification.
 * Use this type to ensure type safety when handling API responses from this endpoint.
 *

 *
 * @path /v1/dns/summary
 *
 * @see {@link GET_DnsSummary_Response_200} - 200 response type
 *

 */
export type GET_DnsSummary_Response = GET_DnsSummary_Response_200;

/**
 * 200 response for GET DnsSummary endpoint
 *
 * @remarks
 * This type defines the response structure for the 200 status code
 * of the GET DnsSummary endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/dns/summary
 *
 * @see {@link GET_DnsSummary_Response} - The main response type definition
 * @see {@link DnsZoneSummary} - The actual schema type definition
 */
export type GET_DnsSummary_Response_200 = DnsZoneSummary

/**
 * Response types for GET DomainSearchSuggest endpoint
 *
 * Suggest
 *
 * @remarks
 * This type defines all possible response structures for the GET DomainSearchSuggest endpoint.
 * Each response code maps to a specific response type as defined in the OpenAPI specification.
 * Use this type to ensure type safety when handling API responses from this endpoint.
 *

 *
 * @path /v1/domain-search/suggest
 * @param query (query) - The primary keyword or phrase for the domain search
 * @param tlds (query) - 
Specify one or more TLDs to include in the search.

 * @param limit (query) - The maximum number of domain suggestions to return
 * @param premium (query) - Whether to include premium domains in the suggestions
 *
 * @see {@link GET_DomainSearchSuggest_Response_200} - 200 response type
 * @see {@link GET_DomainSearchSuggest_Response_401} - 401 response type
 * @see {@link GET_DomainSearchSuggest_Response_422} - 422 response type
 * @see {@link GET_DomainSearchSuggest_Response_502} - 502 response type
 *

 */
export type GET_DomainSearchSuggest_Response = GET_DomainSearchSuggest_Response_200 | GET_DomainSearchSuggest_Response_401 | GET_DomainSearchSuggest_Response_422 | GET_DomainSearchSuggest_Response_502;

/**
 * 200 response for GET DomainSearchSuggest endpoint
 *
 * @remarks
 * This type defines the response structure for the 200 status code
 * of the GET DomainSearchSuggest endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/domain-search/suggest
 * @param query (query) - The primary keyword or phrase for the domain search
 * @param tlds (query) - 
Specify one or more TLDs to include in the search.

 * @param limit (query) - The maximum number of domain suggestions to return
 * @param premium (query) - Whether to include premium domains in the suggestions
 *
 * @see {@link GET_DomainSearchSuggest_Response} - The main response type definition
 * @see {@link DomainSearch} - The actual schema type definition
 */
export type GET_DomainSearchSuggest_Response_200 = DomainSearch

/**
 * 401 response for GET DomainSearchSuggest endpoint
 *
 * @remarks
 * This type defines the response structure for the 401 status code
 * of the GET DomainSearchSuggest endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/domain-search/suggest
 * @param query (query) - The primary keyword or phrase for the domain search
 * @param tlds (query) - 
Specify one or more TLDs to include in the search.

 * @param limit (query) - The maximum number of domain suggestions to return
 * @param premium (query) - Whether to include premium domains in the suggestions
 *
 * @see {@link GET_DomainSearchSuggest_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type GET_DomainSearchSuggest_Response_401 = Problem

/**
 * 422 response for GET DomainSearchSuggest endpoint
 *
 * @remarks
 * This type defines the response structure for the 422 status code
 * of the GET DomainSearchSuggest endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/domain-search/suggest
 * @param query (query) - The primary keyword or phrase for the domain search
 * @param tlds (query) - 
Specify one or more TLDs to include in the search.

 * @param limit (query) - The maximum number of domain suggestions to return
 * @param premium (query) - Whether to include premium domains in the suggestions
 *
 * @see {@link GET_DomainSearchSuggest_Response} - The main response type definition
 * @see {@link HTTPValidationError} - The actual schema type definition
 */
export type GET_DomainSearchSuggest_Response_422 = HTTPValidationError

/**
 * 502 response for GET DomainSearchSuggest endpoint
 *
 * @remarks
 * This type defines the response structure for the 502 status code
 * of the GET DomainSearchSuggest endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/domain-search/suggest
 * @param query (query) - The primary keyword or phrase for the domain search
 * @param tlds (query) - 
Specify one or more TLDs to include in the search.

 * @param limit (query) - The maximum number of domain suggestions to return
 * @param premium (query) - Whether to include premium domains in the suggestions
 *
 * @see {@link GET_DomainSearchSuggest_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type GET_DomainSearchSuggest_Response_502 = Problem

/**
 * Response types for GET Domains endpoint
 *
 * List all domains
 * Retrieves a paginated list of all active domains
 *
 * @remarks
 * This type defines all possible response structures for the GET Domains endpoint.
 * Each response code maps to a specific response type as defined in the OpenAPI specification.
 * Use this type to ensure type safety when handling API responses from this endpoint.
 *

 *
 * @path /v1/domains
 *
 * @see {@link GET_Domains_Response_200} - 200 response type
 * @see {@link GET_Domains_Response_422} - 422 response type
 *

 */
export type GET_Domains_Response = GET_Domains_Response_200 | GET_Domains_Response_422;

/**
 * 200 response for GET Domains endpoint
 *
 * @remarks
 * This type defines the response structure for the 200 status code
 * of the GET Domains endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/domains
 *
 * @see {@link GET_Domains_Response} - The main response type definition
 * @see {@link Pagination_Domain} - The actual schema type definition
 */
export type GET_Domains_Response_200 = Pagination_Domain

/**
 * 422 response for GET Domains endpoint
 *
 * @remarks
 * This type defines the response structure for the 422 status code
 * of the GET Domains endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/domains
 *
 * @see {@link GET_Domains_Response} - The main response type definition
 * @see {@link HTTPValidationError} - The actual schema type definition
 */
export type GET_Domains_Response_422 = HTTPValidationError

/**
 * Response types for POST Domains endpoint
 *
 * Create a domain
 * Registers a new domain
 *
 * @remarks
 * This type defines all possible response structures for the POST Domains endpoint.
 * Each response code maps to a specific response type as defined in the OpenAPI specification.
 * Use this type to ensure type safety when handling API responses from this endpoint.
 *

 *
 * @path /v1/domains
 *
 * @see {@link POST_Domains_Response_201} - 201 response type
 * @see {@link POST_Domains_Response_400} - 400 response type
 * @see {@link POST_Domains_Response_404} - 404 response type
 * @see {@link POST_Domains_Response_409} - 409 response type
 * @see {@link POST_Domains_Response_422} - 422 response type
 *

 */
export type POST_Domains_Response = POST_Domains_Response_201 | POST_Domains_Response_400 | POST_Domains_Response_404 | POST_Domains_Response_409 | POST_Domains_Response_422;

/**
 * 201 response for POST Domains endpoint
 *
 * @remarks
 * This type defines the response structure for the 201 status code
 * of the POST Domains endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/domains
 *
 * @see {@link POST_Domains_Response} - The main response type definition
 * @see {@link Domain} - The actual schema type definition
 */
export type POST_Domains_Response_201 = Domain

/**
 * 400 response for POST Domains endpoint
 *
 * @remarks
 * This type defines the response structure for the 400 status code
 * of the POST Domains endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/domains
 *
 * @see {@link POST_Domains_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type POST_Domains_Response_400 = Problem

/**
 * 404 response for POST Domains endpoint
 *
 * @remarks
 * This type defines the response structure for the 404 status code
 * of the POST Domains endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/domains
 *
 * @see {@link POST_Domains_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type POST_Domains_Response_404 = Problem

/**
 * 409 response for POST Domains endpoint
 *
 * @remarks
 * This type defines the response structure for the 409 status code
 * of the POST Domains endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/domains
 *
 * @see {@link POST_Domains_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type POST_Domains_Response_409 = Problem

/**
 * 422 response for POST Domains endpoint
 *
 * @remarks
 * This type defines the response structure for the 422 status code
 * of the POST Domains endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/domains
 *
 * @see {@link POST_Domains_Response} - The main response type definition
 * @see {@link HTTPValidationError} - The actual schema type definition
 */
export type POST_Domains_Response_422 = HTTPValidationError

/**
 * Response types for DELETE DomainsByDomainReference endpoint
 *
 * Delete a domain
 * Initiates the deletion process for a domain. The domain will be marked for deletion
and will enter a redemption period during which it may be restored.
 *
 * @remarks
 * This type defines all possible response structures for the DELETE DomainsByDomainReference endpoint.
 * Each response code maps to a specific response type as defined in the OpenAPI specification.
 * Use this type to ensure type safety when handling API responses from this endpoint.
 *

 *
 * @path /v1/domains/{domain_reference}
 *
 * @see {@link DELETE_DomainsByDomainReference_Response_404} - 404 response type
 * @see {@link DELETE_DomainsByDomainReference_Response_409} - 409 response type
 * @see {@link DELETE_DomainsByDomainReference_Response_422} - 422 response type
 *

 */
export type DELETE_DomainsByDomainReference_Response = DELETE_DomainsByDomainReference_Response_404 | DELETE_DomainsByDomainReference_Response_409 | DELETE_DomainsByDomainReference_Response_422;

/**
 * 404 response for DELETE DomainsByDomainReference endpoint
 *
 * @remarks
 * This type defines the response structure for the 404 status code
 * of the DELETE DomainsByDomainReference endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/domains/{domain_reference}
 *
 * @see {@link DELETE_DomainsByDomainReference_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type DELETE_DomainsByDomainReference_Response_404 = Problem

/**
 * 409 response for DELETE DomainsByDomainReference endpoint
 *
 * @remarks
 * This type defines the response structure for the 409 status code
 * of the DELETE DomainsByDomainReference endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/domains/{domain_reference}
 *
 * @see {@link DELETE_DomainsByDomainReference_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type DELETE_DomainsByDomainReference_Response_409 = Problem

/**
 * 422 response for DELETE DomainsByDomainReference endpoint
 *
 * @remarks
 * This type defines the response structure for the 422 status code
 * of the DELETE DomainsByDomainReference endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/domains/{domain_reference}
 *
 * @see {@link DELETE_DomainsByDomainReference_Response} - The main response type definition
 * @see {@link HTTPValidationError} - The actual schema type definition
 */
export type DELETE_DomainsByDomainReference_Response_422 = HTTPValidationError

/**
 * Response types for GET DomainsByDomainReference endpoint
 *
 * Retrieve a domain
 * Retrieves a single active domain by either its name or id
 *
 * @remarks
 * This type defines all possible response structures for the GET DomainsByDomainReference endpoint.
 * Each response code maps to a specific response type as defined in the OpenAPI specification.
 * Use this type to ensure type safety when handling API responses from this endpoint.
 *

 *
 * @path /v1/domains/{domain_reference}
 *
 * @see {@link GET_DomainsByDomainReference_Response_200} - 200 response type
 * @see {@link GET_DomainsByDomainReference_Response_404} - 404 response type
 * @see {@link GET_DomainsByDomainReference_Response_422} - 422 response type
 *

 */
export type GET_DomainsByDomainReference_Response = GET_DomainsByDomainReference_Response_200 | GET_DomainsByDomainReference_Response_404 | GET_DomainsByDomainReference_Response_422;

/**
 * 200 response for GET DomainsByDomainReference endpoint
 *
 * @remarks
 * This type defines the response structure for the 200 status code
 * of the GET DomainsByDomainReference endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/domains/{domain_reference}
 *
 * @see {@link GET_DomainsByDomainReference_Response} - The main response type definition
 * @see {@link Domain} - The actual schema type definition
 */
export type GET_DomainsByDomainReference_Response_200 = Domain

/**
 * 404 response for GET DomainsByDomainReference endpoint
 *
 * @remarks
 * This type defines the response structure for the 404 status code
 * of the GET DomainsByDomainReference endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/domains/{domain_reference}
 *
 * @see {@link GET_DomainsByDomainReference_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type GET_DomainsByDomainReference_Response_404 = Problem

/**
 * 422 response for GET DomainsByDomainReference endpoint
 *
 * @remarks
 * This type defines the response structure for the 422 status code
 * of the GET DomainsByDomainReference endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/domains/{domain_reference}
 *
 * @see {@link GET_DomainsByDomainReference_Response} - The main response type definition
 * @see {@link HTTPValidationError} - The actual schema type definition
 */
export type GET_DomainsByDomainReference_Response_422 = HTTPValidationError

/**
 * Response types for PATCH DomainsByDomainReference endpoint
 *
 * Update a domain
 * Updates various attributes of an existing domain. Only the fields provided in the request
will be updated; all other fields will remain unchanged. <br>
Providing `clientTransferProhibited` as a status will set the `transfer_lock` property
 *
 * @remarks
 * This type defines all possible response structures for the PATCH DomainsByDomainReference endpoint.
 * Each response code maps to a specific response type as defined in the OpenAPI specification.
 * Use this type to ensure type safety when handling API responses from this endpoint.
 *

 *
 * @path /v1/domains/{domain_reference}
 *
 * @see {@link PATCH_DomainsByDomainReference_Response_200} - 200 response type
 * @see {@link PATCH_DomainsByDomainReference_Response_404} - 404 response type
 * @see {@link PATCH_DomainsByDomainReference_Response_422} - 422 response type
 *

 */
export type PATCH_DomainsByDomainReference_Response = PATCH_DomainsByDomainReference_Response_200 | PATCH_DomainsByDomainReference_Response_404 | PATCH_DomainsByDomainReference_Response_422;

/**
 * 200 response for PATCH DomainsByDomainReference endpoint
 *
 * @remarks
 * This type defines the response structure for the 200 status code
 * of the PATCH DomainsByDomainReference endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/domains/{domain_reference}
 *
 * @see {@link PATCH_DomainsByDomainReference_Response} - The main response type definition
 * @see {@link Domain} - The actual schema type definition
 */
export type PATCH_DomainsByDomainReference_Response_200 = Domain

/**
 * 404 response for PATCH DomainsByDomainReference endpoint
 *
 * @remarks
 * This type defines the response structure for the 404 status code
 * of the PATCH DomainsByDomainReference endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/domains/{domain_reference}
 *
 * @see {@link PATCH_DomainsByDomainReference_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type PATCH_DomainsByDomainReference_Response_404 = Problem

/**
 * 422 response for PATCH DomainsByDomainReference endpoint
 *
 * @remarks
 * This type defines the response structure for the 422 status code
 * of the PATCH DomainsByDomainReference endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/domains/{domain_reference}
 *
 * @see {@link PATCH_DomainsByDomainReference_Response} - The main response type definition
 * @see {@link HTTPValidationError} - The actual schema type definition
 */
export type PATCH_DomainsByDomainReference_Response_422 = HTTPValidationError

/**
 * Response types for DELETE DomainsByDomainReferenceDnssec endpoint
 *
 * Delete DNSSEC data
 * Removes all DNSSEC data for a domain
 *
 * @remarks
 * This type defines all possible response structures for the DELETE DomainsByDomainReferenceDnssec endpoint.
 * Each response code maps to a specific response type as defined in the OpenAPI specification.
 * Use this type to ensure type safety when handling API responses from this endpoint.
 *

 *
 * @path /v1/domains/{domain_reference}/dnssec
 *
 * @see {@link DELETE_DomainsByDomainReferenceDnssec_Response_404} - 404 response type
 * @see {@link DELETE_DomainsByDomainReferenceDnssec_Response_422} - 422 response type
 *

 */
export type DELETE_DomainsByDomainReferenceDnssec_Response = DELETE_DomainsByDomainReferenceDnssec_Response_404 | DELETE_DomainsByDomainReferenceDnssec_Response_422;

/**
 * 404 response for DELETE DomainsByDomainReferenceDnssec endpoint
 *
 * @remarks
 * This type defines the response structure for the 404 status code
 * of the DELETE DomainsByDomainReferenceDnssec endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/domains/{domain_reference}/dnssec
 *
 * @see {@link DELETE_DomainsByDomainReferenceDnssec_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type DELETE_DomainsByDomainReferenceDnssec_Response_404 = Problem

/**
 * 422 response for DELETE DomainsByDomainReferenceDnssec endpoint
 *
 * @remarks
 * This type defines the response structure for the 422 status code
 * of the DELETE DomainsByDomainReferenceDnssec endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/domains/{domain_reference}/dnssec
 *
 * @see {@link DELETE_DomainsByDomainReferenceDnssec_Response} - The main response type definition
 * @see {@link HTTPValidationError} - The actual schema type definition
 */
export type DELETE_DomainsByDomainReferenceDnssec_Response_422 = HTTPValidationError

/**
 * Response types for GET DomainsByDomainReferenceDnssec endpoint
 *
 * Retrieve DNSSEC data
 * Fetches all DNSSEC records associated with the specified domain.
 *
 * @remarks
 * This type defines all possible response structures for the GET DomainsByDomainReferenceDnssec endpoint.
 * Each response code maps to a specific response type as defined in the OpenAPI specification.
 * Use this type to ensure type safety when handling API responses from this endpoint.
 *

 *
 * @path /v1/domains/{domain_reference}/dnssec
 *
 * @see {@link GET_DomainsByDomainReferenceDnssec_Response_200} - 200 response type
 * @see {@link GET_DomainsByDomainReferenceDnssec_Response_404} - 404 response type
 * @see {@link GET_DomainsByDomainReferenceDnssec_Response_422} - 422 response type
 *

 */
export type GET_DomainsByDomainReferenceDnssec_Response = GET_DomainsByDomainReferenceDnssec_Response_200 | GET_DomainsByDomainReferenceDnssec_Response_404 | GET_DomainsByDomainReferenceDnssec_Response_422;

/**
 * 200 response for GET DomainsByDomainReferenceDnssec endpoint
 *
 * @remarks
 * This type defines the response structure for the 200 status code
 * of the GET DomainsByDomainReferenceDnssec endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/domains/{domain_reference}/dnssec
 *
 * @see {@link GET_DomainsByDomainReferenceDnssec_Response} - The main response type definition
 * @see {@link DomainDnssecData} - The actual schema type definition
 */
export type GET_DomainsByDomainReferenceDnssec_Response_200 = DomainDnssecDataArray

/**
 * 404 response for GET DomainsByDomainReferenceDnssec endpoint
 *
 * @remarks
 * This type defines the response structure for the 404 status code
 * of the GET DomainsByDomainReferenceDnssec endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/domains/{domain_reference}/dnssec
 *
 * @see {@link GET_DomainsByDomainReferenceDnssec_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type GET_DomainsByDomainReferenceDnssec_Response_404 = Problem

/**
 * 422 response for GET DomainsByDomainReferenceDnssec endpoint
 *
 * @remarks
 * This type defines the response structure for the 422 status code
 * of the GET DomainsByDomainReferenceDnssec endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/domains/{domain_reference}/dnssec
 *
 * @see {@link GET_DomainsByDomainReferenceDnssec_Response} - The main response type definition
 * @see {@link HTTPValidationError} - The actual schema type definition
 */
export type GET_DomainsByDomainReferenceDnssec_Response_422 = HTTPValidationError

/**
 * Response types for PUT DomainsByDomainReferenceDnssec endpoint
 *
 * Update DNSSEC data
 * Replaces all existing DNSSEC records for the domain with the provided records.
 *
 * @remarks
 * This type defines all possible response structures for the PUT DomainsByDomainReferenceDnssec endpoint.
 * Each response code maps to a specific response type as defined in the OpenAPI specification.
 * Use this type to ensure type safety when handling API responses from this endpoint.
 *

 *
 * @path /v1/domains/{domain_reference}/dnssec
 *
 * @see {@link PUT_DomainsByDomainReferenceDnssec_Response_200} - 200 response type
 * @see {@link PUT_DomainsByDomainReferenceDnssec_Response_404} - 404 response type
 * @see {@link PUT_DomainsByDomainReferenceDnssec_Response_422} - 422 response type
 *

 */
export type PUT_DomainsByDomainReferenceDnssec_Response = PUT_DomainsByDomainReferenceDnssec_Response_200 | PUT_DomainsByDomainReferenceDnssec_Response_404 | PUT_DomainsByDomainReferenceDnssec_Response_422;

/**
 * 200 response for PUT DomainsByDomainReferenceDnssec endpoint
 *
 * @remarks
 * This type defines the response structure for the 200 status code
 * of the PUT DomainsByDomainReferenceDnssec endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/domains/{domain_reference}/dnssec
 *
 * @see {@link PUT_DomainsByDomainReferenceDnssec_Response} - The main response type definition
 * @see {@link DomainDnssecData} - The actual schema type definition
 */
export type PUT_DomainsByDomainReferenceDnssec_Response_200 = DomainDnssecDataArray

/**
 * 404 response for PUT DomainsByDomainReferenceDnssec endpoint
 *
 * @remarks
 * This type defines the response structure for the 404 status code
 * of the PUT DomainsByDomainReferenceDnssec endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/domains/{domain_reference}/dnssec
 *
 * @see {@link PUT_DomainsByDomainReferenceDnssec_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type PUT_DomainsByDomainReferenceDnssec_Response_404 = Problem

/**
 * 422 response for PUT DomainsByDomainReferenceDnssec endpoint
 *
 * @remarks
 * This type defines the response structure for the 422 status code
 * of the PUT DomainsByDomainReferenceDnssec endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/domains/{domain_reference}/dnssec
 *
 * @see {@link PUT_DomainsByDomainReferenceDnssec_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type PUT_DomainsByDomainReferenceDnssec_Response_422 = Problem

/**
 * Response types for POST DomainsByDomainReferenceDnssecDisable endpoint
 *
 * Disable DNSSEC for domains using our nameservers
 *
 * @remarks
 * This type defines all possible response structures for the POST DomainsByDomainReferenceDnssecDisable endpoint.
 * Each response code maps to a specific response type as defined in the OpenAPI specification.
 * Use this type to ensure type safety when handling API responses from this endpoint.
 *

 *
 * @path /v1/domains/{domain_reference}/dnssec/disable
 *
 * @see {@link POST_DomainsByDomainReferenceDnssecDisable_Response_404} - 404 response type
 * @see {@link POST_DomainsByDomainReferenceDnssecDisable_Response_422} - 422 response type
 *

 */
export type POST_DomainsByDomainReferenceDnssecDisable_Response = POST_DomainsByDomainReferenceDnssecDisable_Response_404 | POST_DomainsByDomainReferenceDnssecDisable_Response_422;

/**
 * 404 response for POST DomainsByDomainReferenceDnssecDisable endpoint
 *
 * @remarks
 * This type defines the response structure for the 404 status code
 * of the POST DomainsByDomainReferenceDnssecDisable endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/domains/{domain_reference}/dnssec/disable
 *
 * @see {@link POST_DomainsByDomainReferenceDnssecDisable_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type POST_DomainsByDomainReferenceDnssecDisable_Response_404 = Problem

/**
 * 422 response for POST DomainsByDomainReferenceDnssecDisable endpoint
 *
 * @remarks
 * This type defines the response structure for the 422 status code
 * of the POST DomainsByDomainReferenceDnssecDisable endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/domains/{domain_reference}/dnssec/disable
 *
 * @see {@link POST_DomainsByDomainReferenceDnssecDisable_Response} - The main response type definition
 * @see {@link HTTPValidationError} - The actual schema type definition
 */
export type POST_DomainsByDomainReferenceDnssecDisable_Response_422 = HTTPValidationError

/**
 * Response types for POST DomainsByDomainReferenceDnssecEnable endpoint
 *
 * Enable DNSSEC for domains using our nameservers
 *
 * @remarks
 * This type defines all possible response structures for the POST DomainsByDomainReferenceDnssecEnable endpoint.
 * Each response code maps to a specific response type as defined in the OpenAPI specification.
 * Use this type to ensure type safety when handling API responses from this endpoint.
 *

 *
 * @path /v1/domains/{domain_reference}/dnssec/enable
 *
 * @see {@link POST_DomainsByDomainReferenceDnssecEnable_Response_200} - 200 response type
 * @see {@link POST_DomainsByDomainReferenceDnssecEnable_Response_404} - 404 response type
 * @see {@link POST_DomainsByDomainReferenceDnssecEnable_Response_422} - 422 response type
 *

 */
export type POST_DomainsByDomainReferenceDnssecEnable_Response = POST_DomainsByDomainReferenceDnssecEnable_Response_200 | POST_DomainsByDomainReferenceDnssecEnable_Response_404 | POST_DomainsByDomainReferenceDnssecEnable_Response_422;

/**
 * 200 response for POST DomainsByDomainReferenceDnssecEnable endpoint
 *
 * @remarks
 * This type defines the response structure for the 200 status code
 * of the POST DomainsByDomainReferenceDnssecEnable endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/domains/{domain_reference}/dnssec/enable
 *
 * @see {@link POST_DomainsByDomainReferenceDnssecEnable_Response} - The main response type definition
 * @see {@link DomainDnssecData} - The actual schema type definition
 */
export type POST_DomainsByDomainReferenceDnssecEnable_Response_200 = DomainDnssecDataArray

/**
 * 404 response for POST DomainsByDomainReferenceDnssecEnable endpoint
 *
 * @remarks
 * This type defines the response structure for the 404 status code
 * of the POST DomainsByDomainReferenceDnssecEnable endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/domains/{domain_reference}/dnssec/enable
 *
 * @see {@link POST_DomainsByDomainReferenceDnssecEnable_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type POST_DomainsByDomainReferenceDnssecEnable_Response_404 = Problem

/**
 * 422 response for POST DomainsByDomainReferenceDnssecEnable endpoint
 *
 * @remarks
 * This type defines the response structure for the 422 status code
 * of the POST DomainsByDomainReferenceDnssecEnable endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/domains/{domain_reference}/dnssec/enable
 *
 * @see {@link POST_DomainsByDomainReferenceDnssecEnable_Response} - The main response type definition
 * @see {@link HTTPValidationError} - The actual schema type definition
 */
export type POST_DomainsByDomainReferenceDnssecEnable_Response_422 = HTTPValidationError

/**
 * Response types for POST DomainsByDomainReferenceRenew endpoint
 *
 * Renew a domain
 * Extends the registration period of an existing domain. The renewal period is added
to the current expiration date of the domain.
 *
 * @remarks
 * This type defines all possible response structures for the POST DomainsByDomainReferenceRenew endpoint.
 * Each response code maps to a specific response type as defined in the OpenAPI specification.
 * Use this type to ensure type safety when handling API responses from this endpoint.
 *

 *
 * @path /v1/domains/{domain_reference}/renew
 *
 * @see {@link POST_DomainsByDomainReferenceRenew_Response_200} - 200 response type
 * @see {@link POST_DomainsByDomainReferenceRenew_Response_422} - 422 response type
 *

 */
export type POST_DomainsByDomainReferenceRenew_Response = POST_DomainsByDomainReferenceRenew_Response_200 | POST_DomainsByDomainReferenceRenew_Response_422;

/**
 * 200 response for POST DomainsByDomainReferenceRenew endpoint
 *
 * @remarks
 * This type defines the response structure for the 200 status code
 * of the POST DomainsByDomainReferenceRenew endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/domains/{domain_reference}/renew
 *
 * @see {@link POST_DomainsByDomainReferenceRenew_Response} - The main response type definition
 * @see {@link DomainRenew} - The actual schema type definition
 */
export type POST_DomainsByDomainReferenceRenew_Response_200 = DomainRenew

/**
 * 422 response for POST DomainsByDomainReferenceRenew endpoint
 *
 * @remarks
 * This type defines the response structure for the 422 status code
 * of the POST DomainsByDomainReferenceRenew endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/domains/{domain_reference}/renew
 *
 * @see {@link POST_DomainsByDomainReferenceRenew_Response} - The main response type definition
 * @see {@link HTTPValidationError} - The actual schema type definition
 */
export type POST_DomainsByDomainReferenceRenew_Response_422 = HTTPValidationError

/**
 * Response types for POST DomainsByDomainReferenceRestore endpoint
 *
 * Restore Domain
 *
 * @remarks
 * This type defines all possible response structures for the POST DomainsByDomainReferenceRestore endpoint.
 * Each response code maps to a specific response type as defined in the OpenAPI specification.
 * Use this type to ensure type safety when handling API responses from this endpoint.
 *

 *
 * @path /v1/domains/{domain_reference}/restore
 *
 * @see {@link POST_DomainsByDomainReferenceRestore_Response_200} - 200 response type
 * @see {@link POST_DomainsByDomainReferenceRestore_Response_422} - 422 response type
 *

 */
export type POST_DomainsByDomainReferenceRestore_Response = POST_DomainsByDomainReferenceRestore_Response_200 | POST_DomainsByDomainReferenceRestore_Response_422;

/**
 * 200 response for POST DomainsByDomainReferenceRestore endpoint
 *
 * @remarks
 * This type defines the response structure for the 200 status code
 * of the POST DomainsByDomainReferenceRestore endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/domains/{domain_reference}/restore
 *
 * @see {@link POST_DomainsByDomainReferenceRestore_Response} - The main response type definition
 * @see {@link DomainRestore} - The actual schema type definition
 */
export type POST_DomainsByDomainReferenceRestore_Response_200 = DomainRestore

/**
 * 422 response for POST DomainsByDomainReferenceRestore endpoint
 *
 * @remarks
 * This type defines the response structure for the 422 status code
 * of the POST DomainsByDomainReferenceRestore endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/domains/{domain_reference}/restore
 *
 * @see {@link POST_DomainsByDomainReferenceRestore_Response} - The main response type definition
 * @see {@link HTTPValidationError} - The actual schema type definition
 */
export type POST_DomainsByDomainReferenceRestore_Response_422 = HTTPValidationError

/**
 * Response types for DELETE DomainsByDomainReferenceTransfer endpoint
 *
 * Cancel a domain transfer
 * This will cancel the in-progress domain transfer and delete the domain object
 *
 * @remarks
 * This type defines all possible response structures for the DELETE DomainsByDomainReferenceTransfer endpoint.
 * Each response code maps to a specific response type as defined in the OpenAPI specification.
 * Use this type to ensure type safety when handling API responses from this endpoint.
 *

 *
 * @path /v1/domains/{domain_reference}/transfer
 *
 * @see {@link DELETE_DomainsByDomainReferenceTransfer_Response_404} - 404 response type
 * @see {@link DELETE_DomainsByDomainReferenceTransfer_Response_409} - 409 response type
 * @see {@link DELETE_DomainsByDomainReferenceTransfer_Response_422} - 422 response type
 *

 */
export type DELETE_DomainsByDomainReferenceTransfer_Response = DELETE_DomainsByDomainReferenceTransfer_Response_404 | DELETE_DomainsByDomainReferenceTransfer_Response_409 | DELETE_DomainsByDomainReferenceTransfer_Response_422;

/**
 * 404 response for DELETE DomainsByDomainReferenceTransfer endpoint
 *
 * @remarks
 * This type defines the response structure for the 404 status code
 * of the DELETE DomainsByDomainReferenceTransfer endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/domains/{domain_reference}/transfer
 *
 * @see {@link DELETE_DomainsByDomainReferenceTransfer_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type DELETE_DomainsByDomainReferenceTransfer_Response_404 = Problem

/**
 * 409 response for DELETE DomainsByDomainReferenceTransfer endpoint
 *
 * @remarks
 * This type defines the response structure for the 409 status code
 * of the DELETE DomainsByDomainReferenceTransfer endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/domains/{domain_reference}/transfer
 *
 * @see {@link DELETE_DomainsByDomainReferenceTransfer_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type DELETE_DomainsByDomainReferenceTransfer_Response_409 = Problem

/**
 * 422 response for DELETE DomainsByDomainReferenceTransfer endpoint
 *
 * @remarks
 * This type defines the response structure for the 422 status code
 * of the DELETE DomainsByDomainReferenceTransfer endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/domains/{domain_reference}/transfer
 *
 * @see {@link DELETE_DomainsByDomainReferenceTransfer_Response} - The main response type definition
 * @see {@link HTTPValidationError} - The actual schema type definition
 */
export type DELETE_DomainsByDomainReferenceTransfer_Response_422 = HTTPValidationError

/**
 * Response types for GET DomainsCheck endpoint
 *
 * Check domain availability
 *
 * @remarks
 * This type defines all possible response structures for the GET DomainsCheck endpoint.
 * Each response code maps to a specific response type as defined in the OpenAPI specification.
 * Use this type to ensure type safety when handling API responses from this endpoint.
 *

 *
 * @path /v1/domains/check
 * @param domains (query) - 
Specify one or more domains to check for availability.

 *
 * @see {@link GET_DomainsCheck_Response_200} - 200 response type
 * @see {@link GET_DomainsCheck_Response_422} - 422 response type
 *

 */
export type GET_DomainsCheck_Response = GET_DomainsCheck_Response_200 | GET_DomainsCheck_Response_422;

/**
 * 200 response for GET DomainsCheck endpoint
 *
 * @remarks
 * This type defines the response structure for the 200 status code
 * of the GET DomainsCheck endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/domains/check
 * @param domains (query) - 
Specify one or more domains to check for availability.

 *
 * @see {@link GET_DomainsCheck_Response} - The main response type definition
 * @see {@link DomainCheck} - The actual schema type definition
 */
export type GET_DomainsCheck_Response_200 = DomainCheck

/**
 * 422 response for GET DomainsCheck endpoint
 *
 * @remarks
 * This type defines the response structure for the 422 status code
 * of the GET DomainsCheck endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/domains/check
 * @param domains (query) - 
Specify one or more domains to check for availability.

 *
 * @see {@link GET_DomainsCheck_Response} - The main response type definition
 * @see {@link HTTPValidationError} - The actual schema type definition
 */
export type GET_DomainsCheck_Response_422 = HTTPValidationError

/**
 * Response types for GET DomainsSummary endpoint
 *
 * Get domain summary
 * Retrieves a summary of domains including counts by status, TLD, and expiration timeframes
 *
 * @remarks
 * This type defines all possible response structures for the GET DomainsSummary endpoint.
 * Each response code maps to a specific response type as defined in the OpenAPI specification.
 * Use this type to ensure type safety when handling API responses from this endpoint.
 *

 *
 * @path /v1/domains/summary
 *
 * @see {@link GET_DomainsSummary_Response_200} - 200 response type
 *

 */
export type GET_DomainsSummary_Response = GET_DomainsSummary_Response_200;

/**
 * 200 response for GET DomainsSummary endpoint
 *
 * @remarks
 * This type defines the response structure for the 200 status code
 * of the GET DomainsSummary endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/domains/summary
 *
 * @see {@link GET_DomainsSummary_Response} - The main response type definition
 * @see {@link DomainSummary} - The actual schema type definition
 */
export type GET_DomainsSummary_Response_200 = DomainSummary

/**
 * Response types for POST DomainsTransfer endpoint
 *
 * Transfer a domain
 * Start the transfer process for a domain <br>
The domain will be in state `pending_transfer` until the transfer is completed.
This process can take up to 5 days, until the transfer is approved
 *
 * @remarks
 * This type defines all possible response structures for the POST DomainsTransfer endpoint.
 * Each response code maps to a specific response type as defined in the OpenAPI specification.
 * Use this type to ensure type safety when handling API responses from this endpoint.
 *

 *
 * @path /v1/domains/transfer
 *
 * @see {@link POST_DomainsTransfer_Response_201} - 201 response type
 * @see {@link POST_DomainsTransfer_Response_400} - 400 response type
 * @see {@link POST_DomainsTransfer_Response_404} - 404 response type
 * @see {@link POST_DomainsTransfer_Response_409} - 409 response type
 * @see {@link POST_DomainsTransfer_Response_422} - 422 response type
 *

 */
export type POST_DomainsTransfer_Response = POST_DomainsTransfer_Response_201 | POST_DomainsTransfer_Response_400 | POST_DomainsTransfer_Response_404 | POST_DomainsTransfer_Response_409 | POST_DomainsTransfer_Response_422;

/**
 * 201 response for POST DomainsTransfer endpoint
 *
 * @remarks
 * This type defines the response structure for the 201 status code
 * of the POST DomainsTransfer endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/domains/transfer
 *
 * @see {@link POST_DomainsTransfer_Response} - The main response type definition
 * @see {@link Domain} - The actual schema type definition
 */
export type POST_DomainsTransfer_Response_201 = Domain

/**
 * 400 response for POST DomainsTransfer endpoint
 *
 * @remarks
 * This type defines the response structure for the 400 status code
 * of the POST DomainsTransfer endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/domains/transfer
 *
 * @see {@link POST_DomainsTransfer_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type POST_DomainsTransfer_Response_400 = Problem

/**
 * 404 response for POST DomainsTransfer endpoint
 *
 * @remarks
 * This type defines the response structure for the 404 status code
 * of the POST DomainsTransfer endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/domains/transfer
 *
 * @see {@link POST_DomainsTransfer_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type POST_DomainsTransfer_Response_404 = Problem

/**
 * 409 response for POST DomainsTransfer endpoint
 *
 * @remarks
 * This type defines the response structure for the 409 status code
 * of the POST DomainsTransfer endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/domains/transfer
 *
 * @see {@link POST_DomainsTransfer_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type POST_DomainsTransfer_Response_409 = Problem

/**
 * 422 response for POST DomainsTransfer endpoint
 *
 * @remarks
 * This type defines the response structure for the 422 status code
 * of the POST DomainsTransfer endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/domains/transfer
 *
 * @see {@link POST_DomainsTransfer_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type POST_DomainsTransfer_Response_422 = Problem

/**
 * Response types for DELETE EmailForwardsByZoneNameAliases endpoint
 *
 * Delete Email Forward Aliases
 *
 * @remarks
 * This type defines all possible response structures for the DELETE EmailForwardsByZoneNameAliases endpoint.
 * Each response code maps to a specific response type as defined in the OpenAPI specification.
 * Use this type to ensure type safety when handling API responses from this endpoint.
 *

 *
 * @path /v1/email-forwards/{zone_name}/aliases
 * @param zone_name (path) - DNS zone name (trailing dot optional)
 *
 * @see {@link DELETE_EmailForwardsByZoneNameAliases_Response_422} - 422 response type
 *

 */
export type DELETE_EmailForwardsByZoneNameAliases_Response = DELETE_EmailForwardsByZoneNameAliases_Response_422;

/**
 * 422 response for DELETE EmailForwardsByZoneNameAliases endpoint
 *
 * @remarks
 * This type defines the response structure for the 422 status code
 * of the DELETE EmailForwardsByZoneNameAliases endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/email-forwards/{zone_name}/aliases
 * @param zone_name (path) - DNS zone name (trailing dot optional)
 *
 * @see {@link DELETE_EmailForwardsByZoneNameAliases_Response} - The main response type definition
 * @see {@link HTTPValidationError} - The actual schema type definition
 */
export type DELETE_EmailForwardsByZoneNameAliases_Response_422 = HTTPValidationError

/**
 * Response types for GET EmailForwardsByZoneNameAliases endpoint
 *
 * Get Email Forward Aliases
 *
 * @remarks
 * This type defines all possible response structures for the GET EmailForwardsByZoneNameAliases endpoint.
 * Each response code maps to a specific response type as defined in the OpenAPI specification.
 * Use this type to ensure type safety when handling API responses from this endpoint.
 *

 *
 * @path /v1/email-forwards/{zone_name}/aliases
 * @param zone_name (path) - DNS zone name (trailing dot optional)
 *
 * @see {@link GET_EmailForwardsByZoneNameAliases_Response_200} - 200 response type
 * @see {@link GET_EmailForwardsByZoneNameAliases_Response_422} - 422 response type
 *

 */
export type GET_EmailForwardsByZoneNameAliases_Response = GET_EmailForwardsByZoneNameAliases_Response_200 | GET_EmailForwardsByZoneNameAliases_Response_422;

/**
 * 200 response for GET EmailForwardsByZoneNameAliases endpoint
 *
 * @remarks
 * This type defines the response structure for the 200 status code
 * of the GET EmailForwardsByZoneNameAliases endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/email-forwards/{zone_name}/aliases
 * @param zone_name (path) - DNS zone name (trailing dot optional)
 *
 * @see {@link GET_EmailForwardsByZoneNameAliases_Response} - The main response type definition
 * @see {@link Pagination_EmailForwardAlias} - The actual schema type definition
 */
export type GET_EmailForwardsByZoneNameAliases_Response_200 = Pagination_EmailForwardAlias

/**
 * 422 response for GET EmailForwardsByZoneNameAliases endpoint
 *
 * @remarks
 * This type defines the response structure for the 422 status code
 * of the GET EmailForwardsByZoneNameAliases endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/email-forwards/{zone_name}/aliases
 * @param zone_name (path) - DNS zone name (trailing dot optional)
 *
 * @see {@link GET_EmailForwardsByZoneNameAliases_Response} - The main response type definition
 * @see {@link HTTPValidationError} - The actual schema type definition
 */
export type GET_EmailForwardsByZoneNameAliases_Response_422 = HTTPValidationError

/**
 * Response types for POST EmailForwardsByZoneNameAliases endpoint
 *
 * Create Email Forward Alias
 *
 * @remarks
 * This type defines all possible response structures for the POST EmailForwardsByZoneNameAliases endpoint.
 * Each response code maps to a specific response type as defined in the OpenAPI specification.
 * Use this type to ensure type safety when handling API responses from this endpoint.
 *

 *
 * @path /v1/email-forwards/{zone_name}/aliases
 * @param zone_name (path) - DNS zone name (trailing dot optional)
 *
 * @see {@link POST_EmailForwardsByZoneNameAliases_Response_422} - 422 response type
 *

 */
export type POST_EmailForwardsByZoneNameAliases_Response = POST_EmailForwardsByZoneNameAliases_Response_422;

/**
 * 422 response for POST EmailForwardsByZoneNameAliases endpoint
 *
 * @remarks
 * This type defines the response structure for the 422 status code
 * of the POST EmailForwardsByZoneNameAliases endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/email-forwards/{zone_name}/aliases
 * @param zone_name (path) - DNS zone name (trailing dot optional)
 *
 * @see {@link POST_EmailForwardsByZoneNameAliases_Response} - The main response type definition
 * @see {@link HTTPValidationError} - The actual schema type definition
 */
export type POST_EmailForwardsByZoneNameAliases_Response_422 = HTTPValidationError

/**
 * Response types for DELETE EmailForwardsByZoneNameAliasesByAlias endpoint
 *
 * Delete Email Forward Alias
 *
 * @remarks
 * This type defines all possible response structures for the DELETE EmailForwardsByZoneNameAliasesByAlias endpoint.
 * Each response code maps to a specific response type as defined in the OpenAPI specification.
 * Use this type to ensure type safety when handling API responses from this endpoint.
 *

 *
 * @path /v1/email-forwards/{zone_name}/aliases/{alias}
 * @param zone_name (path) - DNS zone name (trailing dot optional)
 *
 * @see {@link DELETE_EmailForwardsByZoneNameAliasesByAlias_Response_422} - 422 response type
 *

 */
export type DELETE_EmailForwardsByZoneNameAliasesByAlias_Response = DELETE_EmailForwardsByZoneNameAliasesByAlias_Response_422;

/**
 * 422 response for DELETE EmailForwardsByZoneNameAliasesByAlias endpoint
 *
 * @remarks
 * This type defines the response structure for the 422 status code
 * of the DELETE EmailForwardsByZoneNameAliasesByAlias endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/email-forwards/{zone_name}/aliases/{alias}
 * @param zone_name (path) - DNS zone name (trailing dot optional)
 *
 * @see {@link DELETE_EmailForwardsByZoneNameAliasesByAlias_Response} - The main response type definition
 * @see {@link HTTPValidationError} - The actual schema type definition
 */
export type DELETE_EmailForwardsByZoneNameAliasesByAlias_Response_422 = HTTPValidationError

/**
 * Response types for GET EmailForwardsByZoneNameAliasesByAlias endpoint
 *
 * Get Email Forward Alias
 *
 * @remarks
 * This type defines all possible response structures for the GET EmailForwardsByZoneNameAliasesByAlias endpoint.
 * Each response code maps to a specific response type as defined in the OpenAPI specification.
 * Use this type to ensure type safety when handling API responses from this endpoint.
 *

 *
 * @path /v1/email-forwards/{zone_name}/aliases/{alias}
 * @param zone_name (path) - DNS zone name (trailing dot optional)
 *
 * @see {@link GET_EmailForwardsByZoneNameAliasesByAlias_Response_200} - 200 response type
 * @see {@link GET_EmailForwardsByZoneNameAliasesByAlias_Response_422} - 422 response type
 *

 */
export type GET_EmailForwardsByZoneNameAliasesByAlias_Response = GET_EmailForwardsByZoneNameAliasesByAlias_Response_200 | GET_EmailForwardsByZoneNameAliasesByAlias_Response_422;

/**
 * 200 response for GET EmailForwardsByZoneNameAliasesByAlias endpoint
 *
 * @remarks
 * This type defines the response structure for the 200 status code
 * of the GET EmailForwardsByZoneNameAliasesByAlias endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/email-forwards/{zone_name}/aliases/{alias}
 * @param zone_name (path) - DNS zone name (trailing dot optional)
 *
 * @see {@link GET_EmailForwardsByZoneNameAliasesByAlias_Response} - The main response type definition
 * @see {@link EmailForwardAlias} - The actual schema type definition
 */
export type GET_EmailForwardsByZoneNameAliasesByAlias_Response_200 = EmailForwardAlias

/**
 * 422 response for GET EmailForwardsByZoneNameAliasesByAlias endpoint
 *
 * @remarks
 * This type defines the response structure for the 422 status code
 * of the GET EmailForwardsByZoneNameAliasesByAlias endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/email-forwards/{zone_name}/aliases/{alias}
 * @param zone_name (path) - DNS zone name (trailing dot optional)
 *
 * @see {@link GET_EmailForwardsByZoneNameAliasesByAlias_Response} - The main response type definition
 * @see {@link HTTPValidationError} - The actual schema type definition
 */
export type GET_EmailForwardsByZoneNameAliasesByAlias_Response_422 = HTTPValidationError

/**
 * Response types for PUT EmailForwardsByZoneNameAliasesByAlias endpoint
 *
 * Update Email Forward Alias
 *
 * @remarks
 * This type defines all possible response structures for the PUT EmailForwardsByZoneNameAliasesByAlias endpoint.
 * Each response code maps to a specific response type as defined in the OpenAPI specification.
 * Use this type to ensure type safety when handling API responses from this endpoint.
 *

 *
 * @path /v1/email-forwards/{zone_name}/aliases/{alias}
 * @param zone_name (path) - DNS zone name (trailing dot optional)
 *
 * @see {@link PUT_EmailForwardsByZoneNameAliasesByAlias_Response_422} - 422 response type
 *

 */
export type PUT_EmailForwardsByZoneNameAliasesByAlias_Response = PUT_EmailForwardsByZoneNameAliasesByAlias_Response_422;

/**
 * 422 response for PUT EmailForwardsByZoneNameAliasesByAlias endpoint
 *
 * @remarks
 * This type defines the response structure for the 422 status code
 * of the PUT EmailForwardsByZoneNameAliasesByAlias endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/email-forwards/{zone_name}/aliases/{alias}
 * @param zone_name (path) - DNS zone name (trailing dot optional)
 *
 * @see {@link PUT_EmailForwardsByZoneNameAliasesByAlias_Response} - The main response type definition
 * @see {@link HTTPValidationError} - The actual schema type definition
 */
export type PUT_EmailForwardsByZoneNameAliasesByAlias_Response_422 = HTTPValidationError

/**
 * Response types for PATCH EmailForwardsByZoneNameDisable endpoint
 *
 * Disable Email Forward
 *
 * @remarks
 * This type defines all possible response structures for the PATCH EmailForwardsByZoneNameDisable endpoint.
 * Each response code maps to a specific response type as defined in the OpenAPI specification.
 * Use this type to ensure type safety when handling API responses from this endpoint.
 *

 *
 * @path /v1/email-forwards/{zone_name}/disable
 * @param zone_name (path) - DNS zone name (trailing dot optional)
 *
 * @see {@link PATCH_EmailForwardsByZoneNameDisable_Response_422} - 422 response type
 *

 */
export type PATCH_EmailForwardsByZoneNameDisable_Response = PATCH_EmailForwardsByZoneNameDisable_Response_422;

/**
 * 422 response for PATCH EmailForwardsByZoneNameDisable endpoint
 *
 * @remarks
 * This type defines the response structure for the 422 status code
 * of the PATCH EmailForwardsByZoneNameDisable endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/email-forwards/{zone_name}/disable
 * @param zone_name (path) - DNS zone name (trailing dot optional)
 *
 * @see {@link PATCH_EmailForwardsByZoneNameDisable_Response} - The main response type definition
 * @see {@link HTTPValidationError} - The actual schema type definition
 */
export type PATCH_EmailForwardsByZoneNameDisable_Response_422 = HTTPValidationError

/**
 * Response types for PATCH EmailForwardsByZoneNameEnable endpoint
 *
 * Enable Email Forward
 *
 * @remarks
 * This type defines all possible response structures for the PATCH EmailForwardsByZoneNameEnable endpoint.
 * Each response code maps to a specific response type as defined in the OpenAPI specification.
 * Use this type to ensure type safety when handling API responses from this endpoint.
 *

 *
 * @path /v1/email-forwards/{zone_name}/enable
 * @param zone_name (path) - DNS zone name (trailing dot optional)
 *
 * @see {@link PATCH_EmailForwardsByZoneNameEnable_Response_422} - 422 response type
 *

 */
export type PATCH_EmailForwardsByZoneNameEnable_Response = PATCH_EmailForwardsByZoneNameEnable_Response_422;

/**
 * 422 response for PATCH EmailForwardsByZoneNameEnable endpoint
 *
 * @remarks
 * This type defines the response structure for the 422 status code
 * of the PATCH EmailForwardsByZoneNameEnable endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/email-forwards/{zone_name}/enable
 * @param zone_name (path) - DNS zone name (trailing dot optional)
 *
 * @see {@link PATCH_EmailForwardsByZoneNameEnable_Response} - The main response type definition
 * @see {@link HTTPValidationError} - The actual schema type definition
 */
export type PATCH_EmailForwardsByZoneNameEnable_Response_422 = HTTPValidationError

/**
 * Response types for GET Events endpoint
 *
 * Get Events
 *
 * @remarks
 * This type defines all possible response structures for the GET Events endpoint.
 * Each response code maps to a specific response type as defined in the OpenAPI specification.
 * Use this type to ensure type safety when handling API responses from this endpoint.
 *

 *
 * @path /v1/events
 *
 * @see {@link GET_Events_Response_200} - 200 response type
 * @see {@link GET_Events_Response_401} - 401 response type
 * @see {@link GET_Events_Response_422} - 422 response type
 *

 */
export type GET_Events_Response = GET_Events_Response_200 | GET_Events_Response_401 | GET_Events_Response_422;

/**
 * 200 response for GET Events endpoint
 *
 * @remarks
 * This type defines the response structure for the 200 status code
 * of the GET Events endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/events
 *
 * @see {@link GET_Events_Response} - The main response type definition
 * @see {@link Pagination_Event} - The actual schema type definition
 */
export type GET_Events_Response_200 = Pagination_Event

/**
 * 401 response for GET Events endpoint
 *
 * @remarks
 * This type defines the response structure for the 401 status code
 * of the GET Events endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/events
 *
 * @see {@link GET_Events_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type GET_Events_Response_401 = Problem

/**
 * 422 response for GET Events endpoint
 *
 * @remarks
 * This type defines the response structure for the 422 status code
 * of the GET Events endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/events
 *
 * @see {@link GET_Events_Response} - The main response type definition
 * @see {@link HTTPValidationError} - The actual schema type definition
 */
export type GET_Events_Response_422 = HTTPValidationError

/**
 * Response types for GET EventsByEventId endpoint
 *
 * Get Event
 *
 * @remarks
 * This type defines all possible response structures for the GET EventsByEventId endpoint.
 * Each response code maps to a specific response type as defined in the OpenAPI specification.
 * Use this type to ensure type safety when handling API responses from this endpoint.
 *

 *
 * @path /v1/events/{event_id}
 *
 * @see {@link GET_EventsByEventId_Response_200} - 200 response type
 * @see {@link GET_EventsByEventId_Response_401} - 401 response type
 * @see {@link GET_EventsByEventId_Response_404} - 404 response type
 * @see {@link GET_EventsByEventId_Response_422} - 422 response type
 *

 */
export type GET_EventsByEventId_Response = GET_EventsByEventId_Response_200 | GET_EventsByEventId_Response_401 | GET_EventsByEventId_Response_404 | GET_EventsByEventId_Response_422;

/**
 * 200 response for GET EventsByEventId endpoint
 *
 * @remarks
 * This type defines the response structure for the 200 status code
 * of the GET EventsByEventId endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/events/{event_id}
 *
 * @see {@link GET_EventsByEventId_Response} - The main response type definition
 * @see {@link EventSchema} - The actual schema type definition
 */
export type GET_EventsByEventId_Response_200 = EventSchema

/**
 * 401 response for GET EventsByEventId endpoint
 *
 * @remarks
 * This type defines the response structure for the 401 status code
 * of the GET EventsByEventId endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/events/{event_id}
 *
 * @see {@link GET_EventsByEventId_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type GET_EventsByEventId_Response_401 = Problem

/**
 * 404 response for GET EventsByEventId endpoint
 *
 * @remarks
 * This type defines the response structure for the 404 status code
 * of the GET EventsByEventId endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/events/{event_id}
 *
 * @see {@link GET_EventsByEventId_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type GET_EventsByEventId_Response_404 = Problem

/**
 * 422 response for GET EventsByEventId endpoint
 *
 * @remarks
 * This type defines the response structure for the 422 status code
 * of the GET EventsByEventId endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/events/{event_id}
 *
 * @see {@link GET_EventsByEventId_Response} - The main response type definition
 * @see {@link HTTPValidationError} - The actual schema type definition
 */
export type GET_EventsByEventId_Response_422 = HTTPValidationError

/**
 * Response types for PATCH EventsByEventId endpoint
 *
 * Acknowledge Event
 *
 * @remarks
 * This type defines all possible response structures for the PATCH EventsByEventId endpoint.
 * Each response code maps to a specific response type as defined in the OpenAPI specification.
 * Use this type to ensure type safety when handling API responses from this endpoint.
 *

 *
 * @path /v1/events/{event_id}
 *
 * @see {@link PATCH_EventsByEventId_Response_401} - 401 response type
 * @see {@link PATCH_EventsByEventId_Response_404} - 404 response type
 * @see {@link PATCH_EventsByEventId_Response_422} - 422 response type
 *

 */
export type PATCH_EventsByEventId_Response = PATCH_EventsByEventId_Response_401 | PATCH_EventsByEventId_Response_404 | PATCH_EventsByEventId_Response_422;

/**
 * 401 response for PATCH EventsByEventId endpoint
 *
 * @remarks
 * This type defines the response structure for the 401 status code
 * of the PATCH EventsByEventId endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/events/{event_id}
 *
 * @see {@link PATCH_EventsByEventId_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type PATCH_EventsByEventId_Response_401 = Problem

/**
 * 404 response for PATCH EventsByEventId endpoint
 *
 * @remarks
 * This type defines the response structure for the 404 status code
 * of the PATCH EventsByEventId endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/events/{event_id}
 *
 * @see {@link PATCH_EventsByEventId_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type PATCH_EventsByEventId_Response_404 = Problem

/**
 * 422 response for PATCH EventsByEventId endpoint
 *
 * @remarks
 * This type defines the response structure for the 422 status code
 * of the PATCH EventsByEventId endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/events/{event_id}
 *
 * @see {@link PATCH_EventsByEventId_Response} - The main response type definition
 * @see {@link HTTPValidationError} - The actual schema type definition
 */
export type PATCH_EventsByEventId_Response_422 = HTTPValidationError

/**
 * Response types for GET Notifications endpoint
 *
 * List Notifications
 *
 * @remarks
 * This type defines all possible response structures for the GET Notifications endpoint.
 * Each response code maps to a specific response type as defined in the OpenAPI specification.
 * Use this type to ensure type safety when handling API responses from this endpoint.
 *

 *
 * @path /v1/notifications
 *
 * @see {@link GET_Notifications_Response_200} - 200 response type
 * @see {@link GET_Notifications_Response_422} - 422 response type
 *

 */
export type GET_Notifications_Response = GET_Notifications_Response_200 | GET_Notifications_Response_422;

/**
 * 200 response for GET Notifications endpoint
 *
 * @remarks
 * This type defines the response structure for the 200 status code
 * of the GET Notifications endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/notifications
 *
 * @see {@link GET_Notifications_Response} - The main response type definition
 * @see {@link Pagination_UserNotificationSummary} - The actual schema type definition
 */
export type GET_Notifications_Response_200 = Pagination_UserNotificationSummary

/**
 * 422 response for GET Notifications endpoint
 *
 * @remarks
 * This type defines the response structure for the 422 status code
 * of the GET Notifications endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/notifications
 *
 * @see {@link GET_Notifications_Response} - The main response type definition
 * @see {@link HTTPValidationError} - The actual schema type definition
 */
export type GET_Notifications_Response_422 = HTTPValidationError

/**
 * Response types for POST Notifications endpoint
 *
 * Create Notification
 *
 * @remarks
 * This type defines all possible response structures for the POST Notifications endpoint.
 * Each response code maps to a specific response type as defined in the OpenAPI specification.
 * Use this type to ensure type safety when handling API responses from this endpoint.
 *

 *
 * @path /v1/notifications
 *
 * @see {@link POST_Notifications_Response_201} - 201 response type
 * @see {@link POST_Notifications_Response_422} - 422 response type
 *

 */
export type POST_Notifications_Response = POST_Notifications_Response_201 | POST_Notifications_Response_422;

/**
 * 201 response for POST Notifications endpoint
 *
 * @remarks
 * This type defines the response structure for the 201 status code
 * of the POST Notifications endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/notifications
 *
 * @see {@link POST_Notifications_Response} - The main response type definition
 * @see {@link Notification} - The actual schema type definition
 */
export type POST_Notifications_Response_201 = Notification

/**
 * 422 response for POST Notifications endpoint
 *
 * @remarks
 * This type defines the response structure for the 422 status code
 * of the POST Notifications endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/notifications
 *
 * @see {@link POST_Notifications_Response} - The main response type definition
 * @see {@link HTTPValidationError} - The actual schema type definition
 */
export type POST_Notifications_Response_422 = HTTPValidationError

/**
 * Response types for DELETE NotificationsByNotificationId endpoint
 *
 * Delete Notification
 *
 * @remarks
 * This type defines all possible response structures for the DELETE NotificationsByNotificationId endpoint.
 * Each response code maps to a specific response type as defined in the OpenAPI specification.
 * Use this type to ensure type safety when handling API responses from this endpoint.
 *

 *
 * @path /v1/notifications/{notification_id}
 *
 * @see {@link DELETE_NotificationsByNotificationId_Response_422} - 422 response type
 *

 */
export type DELETE_NotificationsByNotificationId_Response = DELETE_NotificationsByNotificationId_Response_422;

/**
 * 422 response for DELETE NotificationsByNotificationId endpoint
 *
 * @remarks
 * This type defines the response structure for the 422 status code
 * of the DELETE NotificationsByNotificationId endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/notifications/{notification_id}
 *
 * @see {@link DELETE_NotificationsByNotificationId_Response} - The main response type definition
 * @see {@link HTTPValidationError} - The actual schema type definition
 */
export type DELETE_NotificationsByNotificationId_Response_422 = HTTPValidationError

/**
 * Response types for GET NotificationsByNotificationId endpoint
 *
 * Get Notification
 *
 * @remarks
 * This type defines all possible response structures for the GET NotificationsByNotificationId endpoint.
 * Each response code maps to a specific response type as defined in the OpenAPI specification.
 * Use this type to ensure type safety when handling API responses from this endpoint.
 *

 *
 * @path /v1/notifications/{notification_id}
 *
 * @see {@link GET_NotificationsByNotificationId_Response_200} - 200 response type
 * @see {@link GET_NotificationsByNotificationId_Response_422} - 422 response type
 *

 */
export type GET_NotificationsByNotificationId_Response = GET_NotificationsByNotificationId_Response_200 | GET_NotificationsByNotificationId_Response_422;

/**
 * 200 response for GET NotificationsByNotificationId endpoint
 *
 * @remarks
 * This type defines the response structure for the 200 status code
 * of the GET NotificationsByNotificationId endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/notifications/{notification_id}
 *
 * @see {@link GET_NotificationsByNotificationId_Response} - The main response type definition
 * @see {@link UserNotification} - The actual schema type definition
 */
export type GET_NotificationsByNotificationId_Response_200 = UserNotification

/**
 * 422 response for GET NotificationsByNotificationId endpoint
 *
 * @remarks
 * This type defines the response structure for the 422 status code
 * of the GET NotificationsByNotificationId endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/notifications/{notification_id}
 *
 * @see {@link GET_NotificationsByNotificationId_Response} - The main response type definition
 * @see {@link HTTPValidationError} - The actual schema type definition
 */
export type GET_NotificationsByNotificationId_Response_422 = HTTPValidationError

/**
 * Response types for PUT NotificationsByNotificationId endpoint
 *
 * Update Notification
 *
 * @remarks
 * This type defines all possible response structures for the PUT NotificationsByNotificationId endpoint.
 * Each response code maps to a specific response type as defined in the OpenAPI specification.
 * Use this type to ensure type safety when handling API responses from this endpoint.
 *

 *
 * @path /v1/notifications/{notification_id}
 *
 * @see {@link PUT_NotificationsByNotificationId_Response_200} - 200 response type
 * @see {@link PUT_NotificationsByNotificationId_Response_422} - 422 response type
 *

 */
export type PUT_NotificationsByNotificationId_Response = PUT_NotificationsByNotificationId_Response_200 | PUT_NotificationsByNotificationId_Response_422;

/**
 * 200 response for PUT NotificationsByNotificationId endpoint
 *
 * @remarks
 * This type defines the response structure for the 200 status code
 * of the PUT NotificationsByNotificationId endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/notifications/{notification_id}
 *
 * @see {@link PUT_NotificationsByNotificationId_Response} - The main response type definition
 * @see {@link Notification} - The actual schema type definition
 */
export type PUT_NotificationsByNotificationId_Response_200 = Notification

/**
 * 422 response for PUT NotificationsByNotificationId endpoint
 *
 * @remarks
 * This type defines the response structure for the 422 status code
 * of the PUT NotificationsByNotificationId endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/notifications/{notification_id}
 *
 * @see {@link PUT_NotificationsByNotificationId_Response} - The main response type definition
 * @see {@link HTTPValidationError} - The actual schema type definition
 */
export type PUT_NotificationsByNotificationId_Response_422 = HTTPValidationError

/**
 * Response types for PATCH NotificationsByNotificationIdRead endpoint
 *
 * Update Notification Read
 *
 * @remarks
 * This type defines all possible response structures for the PATCH NotificationsByNotificationIdRead endpoint.
 * Each response code maps to a specific response type as defined in the OpenAPI specification.
 * Use this type to ensure type safety when handling API responses from this endpoint.
 *

 *
 * @path /v1/notifications/{notification_id}/read
 *
 * @see {@link PATCH_NotificationsByNotificationIdRead_Response_422} - 422 response type
 *

 */
export type PATCH_NotificationsByNotificationIdRead_Response = PATCH_NotificationsByNotificationIdRead_Response_422;

/**
 * 422 response for PATCH NotificationsByNotificationIdRead endpoint
 *
 * @remarks
 * This type defines the response structure for the 422 status code
 * of the PATCH NotificationsByNotificationIdRead endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/notifications/{notification_id}/read
 *
 * @see {@link PATCH_NotificationsByNotificationIdRead_Response} - The main response type definition
 * @see {@link HTTPValidationError} - The actual schema type definition
 */
export type PATCH_NotificationsByNotificationIdRead_Response_422 = HTTPValidationError

/**
 * Response types for GET Organizations endpoint
 *
 * List Organizations
 *
 * @remarks
 * This type defines all possible response structures for the GET Organizations endpoint.
 * Each response code maps to a specific response type as defined in the OpenAPI specification.
 * Use this type to ensure type safety when handling API responses from this endpoint.
 *

 *
 * @path /v1/organizations
 *
 * @see {@link GET_Organizations_Response_200} - 200 response type
 * @see {@link GET_Organizations_Response_422} - 422 response type
 *

 */
export type GET_Organizations_Response = GET_Organizations_Response_200 | GET_Organizations_Response_422;

/**
 * 200 response for GET Organizations endpoint
 *
 * @remarks
 * This type defines the response structure for the 200 status code
 * of the GET Organizations endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/organizations
 *
 * @see {@link GET_Organizations_Response} - The main response type definition
 * @see {@link Pagination_Organization} - The actual schema type definition
 */
export type GET_Organizations_Response_200 = Pagination_Organization

/**
 * 422 response for GET Organizations endpoint
 *
 * @remarks
 * This type defines the response structure for the 422 status code
 * of the GET Organizations endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/organizations
 *
 * @see {@link GET_Organizations_Response} - The main response type definition
 * @see {@link HTTPValidationError} - The actual schema type definition
 */
export type GET_Organizations_Response_422 = HTTPValidationError

/**
 * Response types for POST Organizations endpoint
 *
 * Create Organization
 *
 * @remarks
 * This type defines all possible response structures for the POST Organizations endpoint.
 * Each response code maps to a specific response type as defined in the OpenAPI specification.
 * Use this type to ensure type safety when handling API responses from this endpoint.
 *

 *
 * @path /v1/organizations
 *
 * @see {@link POST_Organizations_Response_200} - 200 response type
 * @see {@link POST_Organizations_Response_422} - 422 response type
 *

 */
export type POST_Organizations_Response = POST_Organizations_Response_200 | POST_Organizations_Response_422;

/**
 * 200 response for POST Organizations endpoint
 *
 * @remarks
 * This type defines the response structure for the 200 status code
 * of the POST Organizations endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/organizations
 *
 * @see {@link POST_Organizations_Response} - The main response type definition
 * @see {@link Organization} - The actual schema type definition
 */
export type POST_Organizations_Response_200 = Organization

/**
 * 422 response for POST Organizations endpoint
 *
 * @remarks
 * This type defines the response structure for the 422 status code
 * of the POST Organizations endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/organizations
 *
 * @see {@link POST_Organizations_Response} - The main response type definition
 * @see {@link HTTPValidationError} - The actual schema type definition
 */
export type POST_Organizations_Response_422 = HTTPValidationError

/**
 * Response types for GET OrganizationsAttributes endpoint
 *
 * Get Attributes
 *
 * @remarks
 * This type defines all possible response structures for the GET OrganizationsAttributes endpoint.
 * Each response code maps to a specific response type as defined in the OpenAPI specification.
 * Use this type to ensure type safety when handling API responses from this endpoint.
 *

 *
 * @path /v1/organizations/attributes
 * @param keys (query) - Optional list of attribute keys to filter
 *
 * @see {@link GET_OrganizationsAttributes_Response_200} - 200 response type
 * @see {@link GET_OrganizationsAttributes_Response_422} - 422 response type
 *

 */
export type GET_OrganizationsAttributes_Response = GET_OrganizationsAttributes_Response_200 | GET_OrganizationsAttributes_Response_422;

/**
 * 200 response for GET OrganizationsAttributes endpoint
 *
 * @remarks
 * This type defines the response structure for the 200 status code
 * of the GET OrganizationsAttributes endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/organizations/attributes
 * @param keys (query) - Optional list of attribute keys to filter
 *
 * @see {@link GET_OrganizationsAttributes_Response} - The main response type definition
 * @see {@link OrganizationAttribute2} - The actual schema type definition
 */
export type GET_OrganizationsAttributes_Response_200 = OrganizationAttribute2Array

/**
 * 422 response for GET OrganizationsAttributes endpoint
 *
 * @remarks
 * This type defines the response structure for the 422 status code
 * of the GET OrganizationsAttributes endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/organizations/attributes
 * @param keys (query) - Optional list of attribute keys to filter
 *
 * @see {@link GET_OrganizationsAttributes_Response} - The main response type definition
 * @see {@link HTTPValidationError} - The actual schema type definition
 */
export type GET_OrganizationsAttributes_Response_422 = HTTPValidationError

/**
 * Response types for PATCH OrganizationsAttributes endpoint
 *
 * Update Attributes
 *
 * @remarks
 * This type defines all possible response structures for the PATCH OrganizationsAttributes endpoint.
 * Each response code maps to a specific response type as defined in the OpenAPI specification.
 * Use this type to ensure type safety when handling API responses from this endpoint.
 *

 *
 * @path /v1/organizations/attributes
 *
 * @see {@link PATCH_OrganizationsAttributes_Response_200} - 200 response type
 * @see {@link PATCH_OrganizationsAttributes_Response_422} - 422 response type
 *

 */
export type PATCH_OrganizationsAttributes_Response = PATCH_OrganizationsAttributes_Response_200 | PATCH_OrganizationsAttributes_Response_422;

/**
 * 200 response for PATCH OrganizationsAttributes endpoint
 *
 * @remarks
 * This type defines the response structure for the 200 status code
 * of the PATCH OrganizationsAttributes endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/organizations/attributes
 *
 * @see {@link PATCH_OrganizationsAttributes_Response} - The main response type definition
 * @see {@link OrganizationAttribute2} - The actual schema type definition
 */
export type PATCH_OrganizationsAttributes_Response_200 = OrganizationAttribute2Array

/**
 * 422 response for PATCH OrganizationsAttributes endpoint
 *
 * @remarks
 * This type defines the response structure for the 422 status code
 * of the PATCH OrganizationsAttributes endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/organizations/attributes
 *
 * @see {@link PATCH_OrganizationsAttributes_Response} - The main response type definition
 * @see {@link HTTPValidationError} - The actual schema type definition
 */
export type PATCH_OrganizationsAttributes_Response_422 = HTTPValidationError

/**
 * Response types for GET OrganizationsAttributesByOrganizationId endpoint
 *
 * Get Attributes
 *
 * @remarks
 * This type defines all possible response structures for the GET OrganizationsAttributesByOrganizationId endpoint.
 * Each response code maps to a specific response type as defined in the OpenAPI specification.
 * Use this type to ensure type safety when handling API responses from this endpoint.
 *

 *
 * @path /v1/organizations/attributes/{organization_id}
 * @param keys (query) - Optional list of attribute keys to filter
 *
 * @see {@link GET_OrganizationsAttributesByOrganizationId_Response_200} - 200 response type
 * @see {@link GET_OrganizationsAttributesByOrganizationId_Response_422} - 422 response type
 *

 */
export type GET_OrganizationsAttributesByOrganizationId_Response = GET_OrganizationsAttributesByOrganizationId_Response_200 | GET_OrganizationsAttributesByOrganizationId_Response_422;

/**
 * 200 response for GET OrganizationsAttributesByOrganizationId endpoint
 *
 * @remarks
 * This type defines the response structure for the 200 status code
 * of the GET OrganizationsAttributesByOrganizationId endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/organizations/attributes/{organization_id}
 * @param keys (query) - Optional list of attribute keys to filter
 *
 * @see {@link GET_OrganizationsAttributesByOrganizationId_Response} - The main response type definition
 * @see {@link OrganizationAttribute2} - The actual schema type definition
 */
export type GET_OrganizationsAttributesByOrganizationId_Response_200 = OrganizationAttribute2Array

/**
 * 422 response for GET OrganizationsAttributesByOrganizationId endpoint
 *
 * @remarks
 * This type defines the response structure for the 422 status code
 * of the GET OrganizationsAttributesByOrganizationId endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/organizations/attributes/{organization_id}
 * @param keys (query) - Optional list of attribute keys to filter
 *
 * @see {@link GET_OrganizationsAttributesByOrganizationId_Response} - The main response type definition
 * @see {@link HTTPValidationError} - The actual schema type definition
 */
export type GET_OrganizationsAttributesByOrganizationId_Response_422 = HTTPValidationError

/**
 * Response types for PATCH OrganizationsAttributesByOrganizationId endpoint
 *
 * Update Attributes
 *
 * @remarks
 * This type defines all possible response structures for the PATCH OrganizationsAttributesByOrganizationId endpoint.
 * Each response code maps to a specific response type as defined in the OpenAPI specification.
 * Use this type to ensure type safety when handling API responses from this endpoint.
 *

 *
 * @path /v1/organizations/attributes/{organization_id}
 *
 * @see {@link PATCH_OrganizationsAttributesByOrganizationId_Response_200} - 200 response type
 * @see {@link PATCH_OrganizationsAttributesByOrganizationId_Response_422} - 422 response type
 *

 */
export type PATCH_OrganizationsAttributesByOrganizationId_Response = PATCH_OrganizationsAttributesByOrganizationId_Response_200 | PATCH_OrganizationsAttributesByOrganizationId_Response_422;

/**
 * 200 response for PATCH OrganizationsAttributesByOrganizationId endpoint
 *
 * @remarks
 * This type defines the response structure for the 200 status code
 * of the PATCH OrganizationsAttributesByOrganizationId endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/organizations/attributes/{organization_id}
 *
 * @see {@link PATCH_OrganizationsAttributesByOrganizationId_Response} - The main response type definition
 * @see {@link OrganizationAttribute2} - The actual schema type definition
 */
export type PATCH_OrganizationsAttributesByOrganizationId_Response_200 = OrganizationAttribute2Array

/**
 * 422 response for PATCH OrganizationsAttributesByOrganizationId endpoint
 *
 * @remarks
 * This type defines the response structure for the 422 status code
 * of the PATCH OrganizationsAttributesByOrganizationId endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/organizations/attributes/{organization_id}
 *
 * @see {@link PATCH_OrganizationsAttributesByOrganizationId_Response} - The main response type definition
 * @see {@link HTTPValidationError} - The actual schema type definition
 */
export type PATCH_OrganizationsAttributesByOrganizationId_Response_422 = HTTPValidationError

/**
 * Response types for DELETE OrganizationsByOrganizationId endpoint
 *
 * Delete User
 *
 * @remarks
 * This type defines all possible response structures for the DELETE OrganizationsByOrganizationId endpoint.
 * Each response code maps to a specific response type as defined in the OpenAPI specification.
 * Use this type to ensure type safety when handling API responses from this endpoint.
 *

 *
 * @path /v1/organizations/{organization_id}
 *
 * @see {@link DELETE_OrganizationsByOrganizationId_Response_422} - 422 response type
 *

 */
export type DELETE_OrganizationsByOrganizationId_Response = DELETE_OrganizationsByOrganizationId_Response_422;

/**
 * 422 response for DELETE OrganizationsByOrganizationId endpoint
 *
 * @remarks
 * This type defines the response structure for the 422 status code
 * of the DELETE OrganizationsByOrganizationId endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/organizations/{organization_id}
 *
 * @see {@link DELETE_OrganizationsByOrganizationId_Response} - The main response type definition
 * @see {@link HTTPValidationError} - The actual schema type definition
 */
export type DELETE_OrganizationsByOrganizationId_Response_422 = HTTPValidationError

/**
 * Response types for GET OrganizationsByOrganizationId endpoint
 *
 * Get Organization
 *
 * @remarks
 * This type defines all possible response structures for the GET OrganizationsByOrganizationId endpoint.
 * Each response code maps to a specific response type as defined in the OpenAPI specification.
 * Use this type to ensure type safety when handling API responses from this endpoint.
 *

 *
 * @path /v1/organizations/{organization_id}
 *
 * @see {@link GET_OrganizationsByOrganizationId_Response_200} - 200 response type
 * @see {@link GET_OrganizationsByOrganizationId_Response_422} - 422 response type
 *

 */
export type GET_OrganizationsByOrganizationId_Response = GET_OrganizationsByOrganizationId_Response_200 | GET_OrganizationsByOrganizationId_Response_422;

/**
 * 200 response for GET OrganizationsByOrganizationId endpoint
 *
 * @remarks
 * This type defines the response structure for the 200 status code
 * of the GET OrganizationsByOrganizationId endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/organizations/{organization_id}
 *
 * @see {@link GET_OrganizationsByOrganizationId_Response} - The main response type definition
 * @see {@link OrganizationWithBillingData} - The actual schema type definition
 */
export type GET_OrganizationsByOrganizationId_Response_200 = OrganizationWithBillingData

/**
 * 422 response for GET OrganizationsByOrganizationId endpoint
 *
 * @remarks
 * This type defines the response structure for the 422 status code
 * of the GET OrganizationsByOrganizationId endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/organizations/{organization_id}
 *
 * @see {@link GET_OrganizationsByOrganizationId_Response} - The main response type definition
 * @see {@link HTTPValidationError} - The actual schema type definition
 */
export type GET_OrganizationsByOrganizationId_Response_422 = HTTPValidationError

/**
 * Response types for PATCH OrganizationsByOrganizationId endpoint
 *
 * Update Organization
 *
 * @remarks
 * This type defines all possible response structures for the PATCH OrganizationsByOrganizationId endpoint.
 * Each response code maps to a specific response type as defined in the OpenAPI specification.
 * Use this type to ensure type safety when handling API responses from this endpoint.
 *

 *
 * @path /v1/organizations/{organization_id}
 *
 * @see {@link PATCH_OrganizationsByOrganizationId_Response_200} - 200 response type
 * @see {@link PATCH_OrganizationsByOrganizationId_Response_422} - 422 response type
 *

 */
export type PATCH_OrganizationsByOrganizationId_Response = PATCH_OrganizationsByOrganizationId_Response_200 | PATCH_OrganizationsByOrganizationId_Response_422;

/**
 * 200 response for PATCH OrganizationsByOrganizationId endpoint
 *
 * @remarks
 * This type defines the response structure for the 200 status code
 * of the PATCH OrganizationsByOrganizationId endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/organizations/{organization_id}
 *
 * @see {@link PATCH_OrganizationsByOrganizationId_Response} - The main response type definition
 * @see {@link Organization} - The actual schema type definition
 */
export type PATCH_OrganizationsByOrganizationId_Response_200 = Organization

/**
 * 422 response for PATCH OrganizationsByOrganizationId endpoint
 *
 * @remarks
 * This type defines the response structure for the 422 status code
 * of the PATCH OrganizationsByOrganizationId endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/organizations/{organization_id}
 *
 * @see {@link PATCH_OrganizationsByOrganizationId_Response} - The main response type definition
 * @see {@link HTTPValidationError} - The actual schema type definition
 */
export type PATCH_OrganizationsByOrganizationId_Response_422 = HTTPValidationError

/**
 * Response types for GET OrganizationsByOrganizationIdPlans endpoint
 *
 * Get Current Available Plans
 *
 * @remarks
 * This type defines all possible response structures for the GET OrganizationsByOrganizationIdPlans endpoint.
 * Each response code maps to a specific response type as defined in the OpenAPI specification.
 * Use this type to ensure type safety when handling API responses from this endpoint.
 *

 *
 * @path /v1/organizations/{organization_id}/plans
 *
 * @see {@link GET_OrganizationsByOrganizationIdPlans_Response_200} - 200 response type
 * @see {@link GET_OrganizationsByOrganizationIdPlans_Response_422} - 422 response type
 *

 */
export type GET_OrganizationsByOrganizationIdPlans_Response = GET_OrganizationsByOrganizationIdPlans_Response_200 | GET_OrganizationsByOrganizationIdPlans_Response_422;

/**
 * 200 response for GET OrganizationsByOrganizationIdPlans endpoint
 *
 * @remarks
 * This type defines the response structure for the 200 status code
 * of the GET OrganizationsByOrganizationIdPlans endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/organizations/{organization_id}/plans
 *
 * @see {@link GET_OrganizationsByOrganizationIdPlans_Response} - The main response type definition
 * @see {@link GetCurrentAvailablePlans} - The actual schema type definition
 */
export type GET_OrganizationsByOrganizationIdPlans_Response_200 = GetCurrentAvailablePlans

/**
 * 422 response for GET OrganizationsByOrganizationIdPlans endpoint
 *
 * @remarks
 * This type defines the response structure for the 422 status code
 * of the GET OrganizationsByOrganizationIdPlans endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/organizations/{organization_id}/plans
 *
 * @see {@link GET_OrganizationsByOrganizationIdPlans_Response} - The main response type definition
 * @see {@link HTTPValidationError} - The actual schema type definition
 */
export type GET_OrganizationsByOrganizationIdPlans_Response_422 = HTTPValidationError

/**
 * Response types for GET OrganizationsByOrganizationIdPricingProductTypeByProductType endpoint
 *
 * Get Pricing Plans
 *
 * @remarks
 * This type defines all possible response structures for the GET OrganizationsByOrganizationIdPricingProductTypeByProductType endpoint.
 * Each response code maps to a specific response type as defined in the OpenAPI specification.
 * Use this type to ensure type safety when handling API responses from this endpoint.
 *

 *
 * @path /v1/organizations/{organization_id}/pricing/product-type/{product_type}
 *
 * @see {@link GET_OrganizationsByOrganizationIdPricingProductTypeByProductType_Response_200} - 200 response type
 * @see {@link GET_OrganizationsByOrganizationIdPricingProductTypeByProductType_Response_422} - 422 response type
 *

 */
export type GET_OrganizationsByOrganizationIdPricingProductTypeByProductType_Response = GET_OrganizationsByOrganizationIdPricingProductTypeByProductType_Response_200 | GET_OrganizationsByOrganizationIdPricingProductTypeByProductType_Response_422;

/**
 * 200 response for GET OrganizationsByOrganizationIdPricingProductTypeByProductType endpoint
 *
 * @remarks
 * This type defines the response structure for the 200 status code
 * of the GET OrganizationsByOrganizationIdPricingProductTypeByProductType endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/organizations/{organization_id}/pricing/product-type/{product_type}
 *
 * @see {@link GET_OrganizationsByOrganizationIdPricingProductTypeByProductType_Response} - The main response type definition
 * @see {@link GetPrices} - The actual schema type definition
 */
export type GET_OrganizationsByOrganizationIdPricingProductTypeByProductType_Response_200 = GetPrices

/**
 * 422 response for GET OrganizationsByOrganizationIdPricingProductTypeByProductType endpoint
 *
 * @remarks
 * This type defines the response structure for the 422 status code
 * of the GET OrganizationsByOrganizationIdPricingProductTypeByProductType endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/organizations/{organization_id}/pricing/product-type/{product_type}
 *
 * @see {@link GET_OrganizationsByOrganizationIdPricingProductTypeByProductType_Response} - The main response type definition
 * @see {@link HTTPValidationError} - The actual schema type definition
 */
export type GET_OrganizationsByOrganizationIdPricingProductTypeByProductType_Response_422 = HTTPValidationError

/**
 * Response types for GET OrganizationsIpRestrictions endpoint
 *
 * List Ip Restrictions
 * List all IP restrictions for the organization.

Returns a list of all IP restrictions configured for your organization.
Single IP addresses are returned with CIDR notation (/32 for IPv4, /128 for IPv6).
 *
 * @remarks
 * This type defines all possible response structures for the GET OrganizationsIpRestrictions endpoint.
 * Each response code maps to a specific response type as defined in the OpenAPI specification.
 * Use this type to ensure type safety when handling API responses from this endpoint.
 *

 *
 * @path /v1/organizations/ip-restrictions
 *
 * @see {@link GET_OrganizationsIpRestrictions_Response_200} - 200 response type
 *

 */
export type GET_OrganizationsIpRestrictions_Response = GET_OrganizationsIpRestrictions_Response_200;

/**
 * 200 response for GET OrganizationsIpRestrictions endpoint
 *
 * @remarks
 * This type defines the response structure for the 200 status code
 * of the GET OrganizationsIpRestrictions endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/organizations/ip-restrictions
 *
 * @see {@link GET_OrganizationsIpRestrictions_Response} - The main response type definition
 * @see {@link IpRestriction} - The actual schema type definition
 */
export type GET_OrganizationsIpRestrictions_Response_200 = IpRestrictionArray

/**
 * Response types for POST OrganizationsIpRestrictions endpoint
 *
 * Create Ip Restriction
 * Create a new IP restriction for the organization.

Accepts either a single IP address or a CIDR network range.
Individual IP addresses are stored and returned with CIDR notation (/32 for IPv4, /128 for IPv6).
 *
 * @remarks
 * This type defines all possible response structures for the POST OrganizationsIpRestrictions endpoint.
 * Each response code maps to a specific response type as defined in the OpenAPI specification.
 * Use this type to ensure type safety when handling API responses from this endpoint.
 *

 *
 * @path /v1/organizations/ip-restrictions
 *
 * @see {@link POST_OrganizationsIpRestrictions_Response_200} - 200 response type
 * @see {@link POST_OrganizationsIpRestrictions_Response_422} - 422 response type
 *

 */
export type POST_OrganizationsIpRestrictions_Response = POST_OrganizationsIpRestrictions_Response_200 | POST_OrganizationsIpRestrictions_Response_422;

/**
 * 200 response for POST OrganizationsIpRestrictions endpoint
 *
 * @remarks
 * This type defines the response structure for the 200 status code
 * of the POST OrganizationsIpRestrictions endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/organizations/ip-restrictions
 *
 * @see {@link POST_OrganizationsIpRestrictions_Response} - The main response type definition
 * @see {@link IpRestriction} - The actual schema type definition
 */
export type POST_OrganizationsIpRestrictions_Response_200 = IpRestriction

/**
 * 422 response for POST OrganizationsIpRestrictions endpoint
 *
 * @remarks
 * This type defines the response structure for the 422 status code
 * of the POST OrganizationsIpRestrictions endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/organizations/ip-restrictions
 *
 * @see {@link POST_OrganizationsIpRestrictions_Response} - The main response type definition
 * @see {@link HTTPValidationError} - The actual schema type definition
 */
export type POST_OrganizationsIpRestrictions_Response_422 = HTTPValidationError

/**
 * Response types for DELETE OrganizationsIpRestrictionsByIpRestrictionId endpoint
 *
 * Delete Ip Restriction
 * Delete an IP restriction.

Permanently removes the specified IP restriction from your organization.
 *
 * @remarks
 * This type defines all possible response structures for the DELETE OrganizationsIpRestrictionsByIpRestrictionId endpoint.
 * Each response code maps to a specific response type as defined in the OpenAPI specification.
 * Use this type to ensure type safety when handling API responses from this endpoint.
 *

 *
 * @path /v1/organizations/ip-restrictions/{ip_restriction_id}
 *
 * @see {@link DELETE_OrganizationsIpRestrictionsByIpRestrictionId_Response_422} - 422 response type
 *

 */
export type DELETE_OrganizationsIpRestrictionsByIpRestrictionId_Response = DELETE_OrganizationsIpRestrictionsByIpRestrictionId_Response_422;

/**
 * 422 response for DELETE OrganizationsIpRestrictionsByIpRestrictionId endpoint
 *
 * @remarks
 * This type defines the response structure for the 422 status code
 * of the DELETE OrganizationsIpRestrictionsByIpRestrictionId endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/organizations/ip-restrictions/{ip_restriction_id}
 *
 * @see {@link DELETE_OrganizationsIpRestrictionsByIpRestrictionId_Response} - The main response type definition
 * @see {@link HTTPValidationError} - The actual schema type definition
 */
export type DELETE_OrganizationsIpRestrictionsByIpRestrictionId_Response_422 = HTTPValidationError

/**
 * Response types for GET OrganizationsIpRestrictionsByIpRestrictionId endpoint
 *
 * Get Ip Restriction
 * Get a specific IP restriction by ID.

Returns the details of a specific IP restriction if it exists and belongs to your organization.
Single IP addresses are returned with CIDR notation (/32 for IPv4, /128 for IPv6).
 *
 * @remarks
 * This type defines all possible response structures for the GET OrganizationsIpRestrictionsByIpRestrictionId endpoint.
 * Each response code maps to a specific response type as defined in the OpenAPI specification.
 * Use this type to ensure type safety when handling API responses from this endpoint.
 *

 *
 * @path /v1/organizations/ip-restrictions/{ip_restriction_id}
 *
 * @see {@link GET_OrganizationsIpRestrictionsByIpRestrictionId_Response_200} - 200 response type
 * @see {@link GET_OrganizationsIpRestrictionsByIpRestrictionId_Response_422} - 422 response type
 *

 */
export type GET_OrganizationsIpRestrictionsByIpRestrictionId_Response = GET_OrganizationsIpRestrictionsByIpRestrictionId_Response_200 | GET_OrganizationsIpRestrictionsByIpRestrictionId_Response_422;

/**
 * 200 response for GET OrganizationsIpRestrictionsByIpRestrictionId endpoint
 *
 * @remarks
 * This type defines the response structure for the 200 status code
 * of the GET OrganizationsIpRestrictionsByIpRestrictionId endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/organizations/ip-restrictions/{ip_restriction_id}
 *
 * @see {@link GET_OrganizationsIpRestrictionsByIpRestrictionId_Response} - The main response type definition
 * @see {@link IpRestriction} - The actual schema type definition
 */
export type GET_OrganizationsIpRestrictionsByIpRestrictionId_Response_200 = IpRestriction

/**
 * 422 response for GET OrganizationsIpRestrictionsByIpRestrictionId endpoint
 *
 * @remarks
 * This type defines the response structure for the 422 status code
 * of the GET OrganizationsIpRestrictionsByIpRestrictionId endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/organizations/ip-restrictions/{ip_restriction_id}
 *
 * @see {@link GET_OrganizationsIpRestrictionsByIpRestrictionId_Response} - The main response type definition
 * @see {@link HTTPValidationError} - The actual schema type definition
 */
export type GET_OrganizationsIpRestrictionsByIpRestrictionId_Response_422 = HTTPValidationError

/**
 * Response types for PATCH OrganizationsIpRestrictionsByIpRestrictionId endpoint
 *
 * Update Ip Restriction
 * Update an existing IP restriction.

You can update the IP network range or the last usage timestamp.
Individual IP addresses are stored and returned with CIDR notation (/32 for IPv4, /128 for IPv6).
 *
 * @remarks
 * This type defines all possible response structures for the PATCH OrganizationsIpRestrictionsByIpRestrictionId endpoint.
 * Each response code maps to a specific response type as defined in the OpenAPI specification.
 * Use this type to ensure type safety when handling API responses from this endpoint.
 *

 *
 * @path /v1/organizations/ip-restrictions/{ip_restriction_id}
 *
 * @see {@link PATCH_OrganizationsIpRestrictionsByIpRestrictionId_Response_200} - 200 response type
 * @see {@link PATCH_OrganizationsIpRestrictionsByIpRestrictionId_Response_422} - 422 response type
 *

 */
export type PATCH_OrganizationsIpRestrictionsByIpRestrictionId_Response = PATCH_OrganizationsIpRestrictionsByIpRestrictionId_Response_200 | PATCH_OrganizationsIpRestrictionsByIpRestrictionId_Response_422;

/**
 * 200 response for PATCH OrganizationsIpRestrictionsByIpRestrictionId endpoint
 *
 * @remarks
 * This type defines the response structure for the 200 status code
 * of the PATCH OrganizationsIpRestrictionsByIpRestrictionId endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/organizations/ip-restrictions/{ip_restriction_id}
 *
 * @see {@link PATCH_OrganizationsIpRestrictionsByIpRestrictionId_Response} - The main response type definition
 * @see {@link IpRestriction} - The actual schema type definition
 */
export type PATCH_OrganizationsIpRestrictionsByIpRestrictionId_Response_200 = IpRestriction

/**
 * 422 response for PATCH OrganizationsIpRestrictionsByIpRestrictionId endpoint
 *
 * @remarks
 * This type defines the response structure for the 422 status code
 * of the PATCH OrganizationsIpRestrictionsByIpRestrictionId endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/organizations/ip-restrictions/{ip_restriction_id}
 *
 * @see {@link PATCH_OrganizationsIpRestrictionsByIpRestrictionId_Response} - The main response type definition
 * @see {@link HTTPValidationError} - The actual schema type definition
 */
export type PATCH_OrganizationsIpRestrictionsByIpRestrictionId_Response_422 = HTTPValidationError

/**
 * Response types for GET OrganizationsRoles endpoint
 *
 * List Roles
 *
 * @remarks
 * This type defines all possible response structures for the GET OrganizationsRoles endpoint.
 * Each response code maps to a specific response type as defined in the OpenAPI specification.
 * Use this type to ensure type safety when handling API responses from this endpoint.
 *

 *
 * @path /v1/organizations/roles
 *

 *

 */
export type GET_OrganizationsRoles_Response = unknown;

/**
 * Response types for GET OrganizationsUsers endpoint
 *
 * List Users
 *
 * @remarks
 * This type defines all possible response structures for the GET OrganizationsUsers endpoint.
 * Each response code maps to a specific response type as defined in the OpenAPI specification.
 * Use this type to ensure type safety when handling API responses from this endpoint.
 *

 *
 * @path /v1/organizations/users
 *
 * @see {@link GET_OrganizationsUsers_Response_200} - 200 response type
 * @see {@link GET_OrganizationsUsers_Response_422} - 422 response type
 *

 */
export type GET_OrganizationsUsers_Response = GET_OrganizationsUsers_Response_200 | GET_OrganizationsUsers_Response_422;

/**
 * 200 response for GET OrganizationsUsers endpoint
 *
 * @remarks
 * This type defines the response structure for the 200 status code
 * of the GET OrganizationsUsers endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/organizations/users
 *
 * @see {@link GET_OrganizationsUsers_Response} - The main response type definition
 * @see {@link Pagination_User} - The actual schema type definition
 */
export type GET_OrganizationsUsers_Response_200 = Pagination_User

/**
 * 422 response for GET OrganizationsUsers endpoint
 *
 * @remarks
 * This type defines the response structure for the 422 status code
 * of the GET OrganizationsUsers endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/organizations/users
 *
 * @see {@link GET_OrganizationsUsers_Response} - The main response type definition
 * @see {@link HTTPValidationError} - The actual schema type definition
 */
export type GET_OrganizationsUsers_Response_422 = HTTPValidationError

/**
 * Response types for GET TldsByTld endpoint
 *
 * Get Tld Spec
 *
 * @remarks
 * This type defines all possible response structures for the GET TldsByTld endpoint.
 * Each response code maps to a specific response type as defined in the OpenAPI specification.
 * Use this type to ensure type safety when handling API responses from this endpoint.
 *

 *
 * @path /v1/tlds/{tld}
 *
 * @see {@link GET_TldsByTld_Response_200} - 200 response type
 * @see {@link GET_TldsByTld_Response_404} - 404 response type
 * @see {@link GET_TldsByTld_Response_422} - 422 response type
 *

 */
export type GET_TldsByTld_Response = GET_TldsByTld_Response_200 | GET_TldsByTld_Response_404 | GET_TldsByTld_Response_422;

/**
 * 200 response for GET TldsByTld endpoint
 *
 * @remarks
 * This type defines the response structure for the 200 status code
 * of the GET TldsByTld endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/tlds/{tld}
 *
 * @see {@link GET_TldsByTld_Response} - The main response type definition
 * @see {@link TldSpecification} - The actual schema type definition
 */
export type GET_TldsByTld_Response_200 = TldSpecification

/**
 * 404 response for GET TldsByTld endpoint
 *
 * @remarks
 * This type defines the response structure for the 404 status code
 * of the GET TldsByTld endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/tlds/{tld}
 *
 * @see {@link GET_TldsByTld_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type GET_TldsByTld_Response_404 = Problem

/**
 * 422 response for GET TldsByTld endpoint
 *
 * @remarks
 * This type defines the response structure for the 422 status code
 * of the GET TldsByTld endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/tlds/{tld}
 *
 * @see {@link GET_TldsByTld_Response} - The main response type definition
 * @see {@link HTTPValidationError} - The actual schema type definition
 */
export type GET_TldsByTld_Response_422 = HTTPValidationError

/**
 * Response types for GET TldsPortfolio endpoint
 *
 * Get Tld Portfolio
 *
 * @remarks
 * This type defines all possible response structures for the GET TldsPortfolio endpoint.
 * Each response code maps to a specific response type as defined in the OpenAPI specification.
 * Use this type to ensure type safety when handling API responses from this endpoint.
 *

 *
 * @path /v1/tlds/portfolio
 *
 * @see {@link GET_TldsPortfolio_Response_200} - 200 response type
 *

 */
export type GET_TldsPortfolio_Response = GET_TldsPortfolio_Response_200;

/**
 * 200 response for GET TldsPortfolio endpoint
 *
 * @remarks
 * This type defines the response structure for the 200 status code
 * of the GET TldsPortfolio endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/tlds/portfolio
 *
 * @see {@link GET_TldsPortfolio_Response} - The main response type definition
 * @see {@link TldResponseShort} - The actual schema type definition
 */
export type GET_TldsPortfolio_Response_200 = TldResponseShortArray

/**
 * Response types for POST Users endpoint
 *
 * Create User
 *
 * @remarks
 * This type defines all possible response structures for the POST Users endpoint.
 * Each response code maps to a specific response type as defined in the OpenAPI specification.
 * Use this type to ensure type safety when handling API responses from this endpoint.
 *

 *
 * @path /v1/users
 *
 * @see {@link POST_Users_Response_200} - 200 response type
 * @see {@link POST_Users_Response_422} - 422 response type
 *

 */
export type POST_Users_Response = POST_Users_Response_200 | POST_Users_Response_422;

/**
 * 200 response for POST Users endpoint
 *
 * @remarks
 * This type defines the response structure for the 200 status code
 * of the POST Users endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/users
 *
 * @see {@link POST_Users_Response} - The main response type definition
 * @see {@link User} - The actual schema type definition
 */
export type POST_Users_Response_200 = User

/**
 * 422 response for POST Users endpoint
 *
 * @remarks
 * This type defines the response structure for the 422 status code
 * of the POST Users endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/users
 *
 * @see {@link POST_Users_Response} - The main response type definition
 * @see {@link HTTPValidationError} - The actual schema type definition
 */
export type POST_Users_Response_422 = HTTPValidationError

/**
 * Response types for DELETE UsersByUserId endpoint
 *
 * Delete User
 *
 * @remarks
 * This type defines all possible response structures for the DELETE UsersByUserId endpoint.
 * Each response code maps to a specific response type as defined in the OpenAPI specification.
 * Use this type to ensure type safety when handling API responses from this endpoint.
 *

 *
 * @path /v1/users/{user_id}
 *
 * @see {@link DELETE_UsersByUserId_Response_409} - 409 response type
 * @see {@link DELETE_UsersByUserId_Response_422} - 422 response type
 *

 */
export type DELETE_UsersByUserId_Response = DELETE_UsersByUserId_Response_409 | DELETE_UsersByUserId_Response_422;

/**
 * 409 response for DELETE UsersByUserId endpoint
 *
 * @remarks
 * This type defines the response structure for the 409 status code
 * of the DELETE UsersByUserId endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/users/{user_id}
 *
 * @see {@link DELETE_UsersByUserId_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type DELETE_UsersByUserId_Response_409 = Problem

/**
 * 422 response for DELETE UsersByUserId endpoint
 *
 * @remarks
 * This type defines the response structure for the 422 status code
 * of the DELETE UsersByUserId endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/users/{user_id}
 *
 * @see {@link DELETE_UsersByUserId_Response} - The main response type definition
 * @see {@link HTTPValidationError} - The actual schema type definition
 */
export type DELETE_UsersByUserId_Response_422 = HTTPValidationError

/**
 * Response types for GET UsersByUserId endpoint
 *
 * Get User
 *
 * @remarks
 * This type defines all possible response structures for the GET UsersByUserId endpoint.
 * Each response code maps to a specific response type as defined in the OpenAPI specification.
 * Use this type to ensure type safety when handling API responses from this endpoint.
 *

 *
 * @path /v1/users/{user_id}
 *
 * @see {@link GET_UsersByUserId_Response_200} - 200 response type
 * @see {@link GET_UsersByUserId_Response_422} - 422 response type
 *

 */
export type GET_UsersByUserId_Response = GET_UsersByUserId_Response_200 | GET_UsersByUserId_Response_422;

/**
 * 200 response for GET UsersByUserId endpoint
 *
 * @remarks
 * This type defines the response structure for the 200 status code
 * of the GET UsersByUserId endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/users/{user_id}
 *
 * @see {@link GET_UsersByUserId_Response} - The main response type definition
 * @see {@link UserWithAttributes} - The actual schema type definition
 */
export type GET_UsersByUserId_Response_200 = UserWithAttributes

/**
 * 422 response for GET UsersByUserId endpoint
 *
 * @remarks
 * This type defines the response structure for the 422 status code
 * of the GET UsersByUserId endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/users/{user_id}
 *
 * @see {@link GET_UsersByUserId_Response} - The main response type definition
 * @see {@link HTTPValidationError} - The actual schema type definition
 */
export type GET_UsersByUserId_Response_422 = HTTPValidationError

/**
 * Response types for PATCH UsersByUserId endpoint
 *
 * Update User
 *
 * @remarks
 * This type defines all possible response structures for the PATCH UsersByUserId endpoint.
 * Each response code maps to a specific response type as defined in the OpenAPI specification.
 * Use this type to ensure type safety when handling API responses from this endpoint.
 *

 *
 * @path /v1/users/{user_id}
 *
 * @see {@link PATCH_UsersByUserId_Response_200} - 200 response type
 * @see {@link PATCH_UsersByUserId_Response_422} - 422 response type
 *

 */
export type PATCH_UsersByUserId_Response = PATCH_UsersByUserId_Response_200 | PATCH_UsersByUserId_Response_422;

/**
 * 200 response for PATCH UsersByUserId endpoint
 *
 * @remarks
 * This type defines the response structure for the 200 status code
 * of the PATCH UsersByUserId endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/users/{user_id}
 *
 * @see {@link PATCH_UsersByUserId_Response} - The main response type definition
 * @see {@link UserWithAttributes} - The actual schema type definition
 */
export type PATCH_UsersByUserId_Response_200 = UserWithAttributes

/**
 * 422 response for PATCH UsersByUserId endpoint
 *
 * @remarks
 * This type defines the response structure for the 422 status code
 * of the PATCH UsersByUserId endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/users/{user_id}
 *
 * @see {@link PATCH_UsersByUserId_Response} - The main response type definition
 * @see {@link HTTPValidationError} - The actual schema type definition
 */
export type PATCH_UsersByUserId_Response_422 = HTTPValidationError

/**
 * Response types for GET UsersByUserIdPermissions endpoint
 *
 * Get User Permissions
 *
 * @remarks
 * This type defines all possible response structures for the GET UsersByUserIdPermissions endpoint.
 * Each response code maps to a specific response type as defined in the OpenAPI specification.
 * Use this type to ensure type safety when handling API responses from this endpoint.
 *

 *
 * @path /v1/users/{user_id}/permissions
 *
 * @see {@link GET_UsersByUserIdPermissions_Response_200} - 200 response type
 * @see {@link GET_UsersByUserIdPermissions_Response_422} - 422 response type
 *

 */
export type GET_UsersByUserIdPermissions_Response = GET_UsersByUserIdPermissions_Response_200 | GET_UsersByUserIdPermissions_Response_422;

/**
 * 200 response for GET UsersByUserIdPermissions endpoint
 *
 * @remarks
 * This type defines the response structure for the 200 status code
 * of the GET UsersByUserIdPermissions endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/users/{user_id}/permissions
 *
 * @see {@link GET_UsersByUserIdPermissions_Response} - The main response type definition
 * @see {@link PermissionSet} - The actual schema type definition
 */
export type GET_UsersByUserIdPermissions_Response_200 = PermissionSet

/**
 * 422 response for GET UsersByUserIdPermissions endpoint
 *
 * @remarks
 * This type defines the response structure for the 422 status code
 * of the GET UsersByUserIdPermissions endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/users/{user_id}/permissions
 *
 * @see {@link GET_UsersByUserIdPermissions_Response} - The main response type definition
 * @see {@link HTTPValidationError} - The actual schema type definition
 */
export type GET_UsersByUserIdPermissions_Response_422 = HTTPValidationError

/**
 * Response types for GET UsersByUserIdRoles endpoint
 *
 * List Roles
 *
 * @remarks
 * This type defines all possible response structures for the GET UsersByUserIdRoles endpoint.
 * Each response code maps to a specific response type as defined in the OpenAPI specification.
 * Use this type to ensure type safety when handling API responses from this endpoint.
 *

 *
 * @path /v1/users/{user_id}/roles
 *
 * @see {@link GET_UsersByUserIdRoles_Response_200} - 200 response type
 * @see {@link GET_UsersByUserIdRoles_Response_422} - 422 response type
 *

 */
export type GET_UsersByUserIdRoles_Response = GET_UsersByUserIdRoles_Response_200 | GET_UsersByUserIdRoles_Response_422;

/**
 * 200 response for GET UsersByUserIdRoles endpoint
 *
 * @remarks
 * This type defines the response structure for the 200 status code
 * of the GET UsersByUserIdRoles endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/users/{user_id}/roles
 *
 * @see {@link GET_UsersByUserIdRoles_Response} - The main response type definition
 * @see {@link RelationSet} - The actual schema type definition
 */
export type GET_UsersByUserIdRoles_Response_200 = RelationSet

/**
 * 422 response for GET UsersByUserIdRoles endpoint
 *
 * @remarks
 * This type defines the response structure for the 422 status code
 * of the GET UsersByUserIdRoles endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/users/{user_id}/roles
 *
 * @see {@link GET_UsersByUserIdRoles_Response} - The main response type definition
 * @see {@link HTTPValidationError} - The actual schema type definition
 */
export type GET_UsersByUserIdRoles_Response_422 = HTTPValidationError

/**
 * Response types for PATCH UsersByUserIdRoles endpoint
 *
 * Update User Relations
 *
 * @remarks
 * This type defines all possible response structures for the PATCH UsersByUserIdRoles endpoint.
 * Each response code maps to a specific response type as defined in the OpenAPI specification.
 * Use this type to ensure type safety when handling API responses from this endpoint.
 *

 *
 * @path /v1/users/{user_id}/roles
 *
 * @see {@link PATCH_UsersByUserIdRoles_Response_200} - 200 response type
 * @see {@link PATCH_UsersByUserIdRoles_Response_422} - 422 response type
 *

 */
export type PATCH_UsersByUserIdRoles_Response = PATCH_UsersByUserIdRoles_Response_200 | PATCH_UsersByUserIdRoles_Response_422;

/**
 * 200 response for PATCH UsersByUserIdRoles endpoint
 *
 * @remarks
 * This type defines the response structure for the 200 status code
 * of the PATCH UsersByUserIdRoles endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/users/{user_id}/roles
 *
 * @see {@link PATCH_UsersByUserIdRoles_Response} - The main response type definition
 * @see {@link RelationSet} - The actual schema type definition
 */
export type PATCH_UsersByUserIdRoles_Response_200 = RelationSet

/**
 * 422 response for PATCH UsersByUserIdRoles endpoint
 *
 * @remarks
 * This type defines the response structure for the 422 status code
 * of the PATCH UsersByUserIdRoles endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/users/{user_id}/roles
 *
 * @see {@link PATCH_UsersByUserIdRoles_Response} - The main response type definition
 * @see {@link HTTPValidationError} - The actual schema type definition
 */
export type PATCH_UsersByUserIdRoles_Response_422 = HTTPValidationError

/**
 * Response types for GET UsersByUserIdVerification endpoint
 *
 * Get Verification Status
 *
 * @remarks
 * This type defines all possible response structures for the GET UsersByUserIdVerification endpoint.
 * Each response code maps to a specific response type as defined in the OpenAPI specification.
 * Use this type to ensure type safety when handling API responses from this endpoint.
 *

 *
 * @path /v1/users/{user_id}/verification
 *
 * @see {@link GET_UsersByUserIdVerification_Response_200} - 200 response type
 * @see {@link GET_UsersByUserIdVerification_Response_401} - 401 response type
 * @see {@link GET_UsersByUserIdVerification_Response_422} - 422 response type
 *

 */
export type GET_UsersByUserIdVerification_Response = GET_UsersByUserIdVerification_Response_200 | GET_UsersByUserIdVerification_Response_401 | GET_UsersByUserIdVerification_Response_422;

/**
 * 200 response for GET UsersByUserIdVerification endpoint
 *
 * @remarks
 * This type defines the response structure for the 200 status code
 * of the GET UsersByUserIdVerification endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/users/{user_id}/verification
 *
 * @see {@link GET_UsersByUserIdVerification_Response} - The main response type definition
 * @see {@link UserVerification} - The actual schema type definition
 */
export type GET_UsersByUserIdVerification_Response_200 = UserVerification

/**
 * 401 response for GET UsersByUserIdVerification endpoint
 *
 * @remarks
 * This type defines the response structure for the 401 status code
 * of the GET UsersByUserIdVerification endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/users/{user_id}/verification
 *
 * @see {@link GET_UsersByUserIdVerification_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type GET_UsersByUserIdVerification_Response_401 = Problem

/**
 * 422 response for GET UsersByUserIdVerification endpoint
 *
 * @remarks
 * This type defines the response structure for the 422 status code
 * of the GET UsersByUserIdVerification endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/users/{user_id}/verification
 *
 * @see {@link GET_UsersByUserIdVerification_Response} - The main response type definition
 * @see {@link HTTPValidationError} - The actual schema type definition
 */
export type GET_UsersByUserIdVerification_Response_422 = HTTPValidationError

/**
 * Response types for PATCH UsersByUserIdVerification endpoint
 *
 * Update Verification
 *
 * @remarks
 * This type defines all possible response structures for the PATCH UsersByUserIdVerification endpoint.
 * Each response code maps to a specific response type as defined in the OpenAPI specification.
 * Use this type to ensure type safety when handling API responses from this endpoint.
 *

 *
 * @path /v1/users/{user_id}/verification
 *
 * @see {@link PATCH_UsersByUserIdVerification_Response_400} - 400 response type
 * @see {@link PATCH_UsersByUserIdVerification_Response_401} - 401 response type
 * @see {@link PATCH_UsersByUserIdVerification_Response_404} - 404 response type
 * @see {@link PATCH_UsersByUserIdVerification_Response_422} - 422 response type
 *

 */
export type PATCH_UsersByUserIdVerification_Response = PATCH_UsersByUserIdVerification_Response_400 | PATCH_UsersByUserIdVerification_Response_401 | PATCH_UsersByUserIdVerification_Response_404 | PATCH_UsersByUserIdVerification_Response_422;

/**
 * 400 response for PATCH UsersByUserIdVerification endpoint
 *
 * @remarks
 * This type defines the response structure for the 400 status code
 * of the PATCH UsersByUserIdVerification endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/users/{user_id}/verification
 *
 * @see {@link PATCH_UsersByUserIdVerification_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type PATCH_UsersByUserIdVerification_Response_400 = Problem

/**
 * 401 response for PATCH UsersByUserIdVerification endpoint
 *
 * @remarks
 * This type defines the response structure for the 401 status code
 * of the PATCH UsersByUserIdVerification endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/users/{user_id}/verification
 *
 * @see {@link PATCH_UsersByUserIdVerification_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type PATCH_UsersByUserIdVerification_Response_401 = Problem

/**
 * 404 response for PATCH UsersByUserIdVerification endpoint
 *
 * @remarks
 * This type defines the response structure for the 404 status code
 * of the PATCH UsersByUserIdVerification endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/users/{user_id}/verification
 *
 * @see {@link PATCH_UsersByUserIdVerification_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type PATCH_UsersByUserIdVerification_Response_404 = Problem

/**
 * 422 response for PATCH UsersByUserIdVerification endpoint
 *
 * @remarks
 * This type defines the response structure for the 422 status code
 * of the PATCH UsersByUserIdVerification endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/users/{user_id}/verification
 *
 * @see {@link PATCH_UsersByUserIdVerification_Response} - The main response type definition
 * @see {@link HTTPValidationError} - The actual schema type definition
 */
export type PATCH_UsersByUserIdVerification_Response_422 = HTTPValidationError

/**
 * Response types for POST UsersByUserIdVerification endpoint
 *
 * Create Verification
 *
 * @remarks
 * This type defines all possible response structures for the POST UsersByUserIdVerification endpoint.
 * Each response code maps to a specific response type as defined in the OpenAPI specification.
 * Use this type to ensure type safety when handling API responses from this endpoint.
 *

 *
 * @path /v1/users/{user_id}/verification
 *
 * @see {@link POST_UsersByUserIdVerification_Response_401} - 401 response type
 * @see {@link POST_UsersByUserIdVerification_Response_404} - 404 response type
 * @see {@link POST_UsersByUserIdVerification_Response_405} - 405 response type
 * @see {@link POST_UsersByUserIdVerification_Response_422} - 422 response type
 *

 */
export type POST_UsersByUserIdVerification_Response = POST_UsersByUserIdVerification_Response_401 | POST_UsersByUserIdVerification_Response_404 | POST_UsersByUserIdVerification_Response_405 | POST_UsersByUserIdVerification_Response_422;

/**
 * 401 response for POST UsersByUserIdVerification endpoint
 *
 * @remarks
 * This type defines the response structure for the 401 status code
 * of the POST UsersByUserIdVerification endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/users/{user_id}/verification
 *
 * @see {@link POST_UsersByUserIdVerification_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type POST_UsersByUserIdVerification_Response_401 = Problem

/**
 * 404 response for POST UsersByUserIdVerification endpoint
 *
 * @remarks
 * This type defines the response structure for the 404 status code
 * of the POST UsersByUserIdVerification endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/users/{user_id}/verification
 *
 * @see {@link POST_UsersByUserIdVerification_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type POST_UsersByUserIdVerification_Response_404 = Problem

/**
 * 405 response for POST UsersByUserIdVerification endpoint
 *
 * @remarks
 * This type defines the response structure for the 405 status code
 * of the POST UsersByUserIdVerification endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/users/{user_id}/verification
 *
 * @see {@link POST_UsersByUserIdVerification_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type POST_UsersByUserIdVerification_Response_405 = Problem

/**
 * 422 response for POST UsersByUserIdVerification endpoint
 *
 * @remarks
 * This type defines the response structure for the 422 status code
 * of the POST UsersByUserIdVerification endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/users/{user_id}/verification
 *
 * @see {@link POST_UsersByUserIdVerification_Response} - The main response type definition
 * @see {@link HTTPValidationError} - The actual schema type definition
 */
export type POST_UsersByUserIdVerification_Response_422 = HTTPValidationError

/**
 * Response types for POST UsersEmailPasswordReset endpoint
 *
 * Create User Password Reset
 *
 * @remarks
 * This type defines all possible response structures for the POST UsersEmailPasswordReset endpoint.
 * Each response code maps to a specific response type as defined in the OpenAPI specification.
 * Use this type to ensure type safety when handling API responses from this endpoint.
 *

 *
 * @path /v1/users/email/password-reset
 *
 * @see {@link POST_UsersEmailPasswordReset_Response_201} - 201 response type
 * @see {@link POST_UsersEmailPasswordReset_Response_422} - 422 response type
 *

 */
export type POST_UsersEmailPasswordReset_Response = POST_UsersEmailPasswordReset_Response_201 | POST_UsersEmailPasswordReset_Response_422;

/**
 * 201 response for POST UsersEmailPasswordReset endpoint
 *
 * @remarks
 * This type defines the response structure for the 201 status code
 * of the POST UsersEmailPasswordReset endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/users/email/password-reset
 *
 * @see {@link POST_UsersEmailPasswordReset_Response} - The main response type definition
 * @see {@link UserPasswordResetEmail} - The actual schema type definition
 */
export type POST_UsersEmailPasswordReset_Response_201 = UserPasswordResetEmail

/**
 * 422 response for POST UsersEmailPasswordReset endpoint
 *
 * @remarks
 * This type defines the response structure for the 422 status code
 * of the POST UsersEmailPasswordReset endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/users/email/password-reset
 *
 * @see {@link POST_UsersEmailPasswordReset_Response} - The main response type definition
 * @see {@link HTTPValidationError} - The actual schema type definition
 */
export type POST_UsersEmailPasswordReset_Response_422 = HTTPValidationError

/**
 * Response types for GET UsersEmailVerify endpoint
 *
 * Redirect Verify User
 *
 * @remarks
 * This type defines all possible response structures for the GET UsersEmailVerify endpoint.
 * Each response code maps to a specific response type as defined in the OpenAPI specification.
 * Use this type to ensure type safety when handling API responses from this endpoint.
 *

 *
 * @path /v1/users/email/verify
 *
 * @see {@link GET_UsersEmailVerify_Response_422} - 422 response type
 *

 */
export type GET_UsersEmailVerify_Response = GET_UsersEmailVerify_Response_422;

/**
 * 422 response for GET UsersEmailVerify endpoint
 *
 * @remarks
 * This type defines the response structure for the 422 status code
 * of the GET UsersEmailVerify endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/users/email/verify
 *
 * @see {@link GET_UsersEmailVerify_Response} - The main response type definition
 * @see {@link HTTPValidationError} - The actual schema type definition
 */
export type GET_UsersEmailVerify_Response_422 = HTTPValidationError

/**
 * Response types for GET UsersMe endpoint
 *
 * Get Current User
 *
 * @remarks
 * This type defines all possible response structures for the GET UsersMe endpoint.
 * Each response code maps to a specific response type as defined in the OpenAPI specification.
 * Use this type to ensure type safety when handling API responses from this endpoint.
 *

 *
 * @path /v1/users/me
 *
 * @see {@link GET_UsersMe_Response_200} - 200 response type
 * @see {@link GET_UsersMe_Response_422} - 422 response type
 *

 */
export type GET_UsersMe_Response = GET_UsersMe_Response_200 | GET_UsersMe_Response_422;

/**
 * 200 response for GET UsersMe endpoint
 *
 * @remarks
 * This type defines the response structure for the 200 status code
 * of the GET UsersMe endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/users/me
 *
 * @see {@link GET_UsersMe_Response} - The main response type definition
 * @see {@link UserWithRelationPermissions} - The actual schema type definition
 */
export type GET_UsersMe_Response_200 = UserWithRelationPermissions

/**
 * 422 response for GET UsersMe endpoint
 *
 * @remarks
 * This type defines the response structure for the 422 status code
 * of the GET UsersMe endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/users/me
 *
 * @see {@link GET_UsersMe_Response} - The main response type definition
 * @see {@link HTTPValidationError} - The actual schema type definition
 */
export type GET_UsersMe_Response_422 = HTTPValidationError

/**
 * Response types for PATCH UsersMePasswordReset endpoint
 *
 * Confirm User Password Reset Me
 *
 * @remarks
 * This type defines all possible response structures for the PATCH UsersMePasswordReset endpoint.
 * Each response code maps to a specific response type as defined in the OpenAPI specification.
 * Use this type to ensure type safety when handling API responses from this endpoint.
 *

 *
 * @path /v1/users/me/password-reset
 *
 * @see {@link PATCH_UsersMePasswordReset_Response_401} - 401 response type
 * @see {@link PATCH_UsersMePasswordReset_Response_422} - 422 response type
 *

 */
export type PATCH_UsersMePasswordReset_Response = PATCH_UsersMePasswordReset_Response_401 | PATCH_UsersMePasswordReset_Response_422;

/**
 * 401 response for PATCH UsersMePasswordReset endpoint
 *
 * @remarks
 * This type defines the response structure for the 401 status code
 * of the PATCH UsersMePasswordReset endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/users/me/password-reset
 *
 * @see {@link PATCH_UsersMePasswordReset_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type PATCH_UsersMePasswordReset_Response_401 = Problem

/**
 * 422 response for PATCH UsersMePasswordReset endpoint
 *
 * @remarks
 * This type defines the response structure for the 422 status code
 * of the PATCH UsersMePasswordReset endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/users/me/password-reset
 *
 * @see {@link PATCH_UsersMePasswordReset_Response} - The main response type definition
 * @see {@link HTTPValidationError} - The actual schema type definition
 */
export type PATCH_UsersMePasswordReset_Response_422 = HTTPValidationError

/**
 * Response types for GET UsersMeVerification endpoint
 *
 * Get Verification Status Me
 *
 * @remarks
 * This type defines all possible response structures for the GET UsersMeVerification endpoint.
 * Each response code maps to a specific response type as defined in the OpenAPI specification.
 * Use this type to ensure type safety when handling API responses from this endpoint.
 *

 *
 * @path /v1/users/me/verification
 *
 * @see {@link GET_UsersMeVerification_Response_200} - 200 response type
 * @see {@link GET_UsersMeVerification_Response_401} - 401 response type
 *

 */
export type GET_UsersMeVerification_Response = GET_UsersMeVerification_Response_200 | GET_UsersMeVerification_Response_401;

/**
 * 200 response for GET UsersMeVerification endpoint
 *
 * @remarks
 * This type defines the response structure for the 200 status code
 * of the GET UsersMeVerification endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/users/me/verification
 *
 * @see {@link GET_UsersMeVerification_Response} - The main response type definition
 * @see {@link UserVerification} - The actual schema type definition
 */
export type GET_UsersMeVerification_Response_200 = UserVerification

/**
 * 401 response for GET UsersMeVerification endpoint
 *
 * @remarks
 * This type defines the response structure for the 401 status code
 * of the GET UsersMeVerification endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/users/me/verification
 *
 * @see {@link GET_UsersMeVerification_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type GET_UsersMeVerification_Response_401 = Problem

/**
 * Response types for PATCH UsersMeVerification endpoint
 *
 * Update Verification Me
 *
 * @remarks
 * This type defines all possible response structures for the PATCH UsersMeVerification endpoint.
 * Each response code maps to a specific response type as defined in the OpenAPI specification.
 * Use this type to ensure type safety when handling API responses from this endpoint.
 *

 *
 * @path /v1/users/me/verification
 *
 * @see {@link PATCH_UsersMeVerification_Response_400} - 400 response type
 * @see {@link PATCH_UsersMeVerification_Response_401} - 401 response type
 * @see {@link PATCH_UsersMeVerification_Response_404} - 404 response type
 * @see {@link PATCH_UsersMeVerification_Response_422} - 422 response type
 *

 */
export type PATCH_UsersMeVerification_Response = PATCH_UsersMeVerification_Response_400 | PATCH_UsersMeVerification_Response_401 | PATCH_UsersMeVerification_Response_404 | PATCH_UsersMeVerification_Response_422;

/**
 * 400 response for PATCH UsersMeVerification endpoint
 *
 * @remarks
 * This type defines the response structure for the 400 status code
 * of the PATCH UsersMeVerification endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/users/me/verification
 *
 * @see {@link PATCH_UsersMeVerification_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type PATCH_UsersMeVerification_Response_400 = Problem

/**
 * 401 response for PATCH UsersMeVerification endpoint
 *
 * @remarks
 * This type defines the response structure for the 401 status code
 * of the PATCH UsersMeVerification endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/users/me/verification
 *
 * @see {@link PATCH_UsersMeVerification_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type PATCH_UsersMeVerification_Response_401 = Problem

/**
 * 404 response for PATCH UsersMeVerification endpoint
 *
 * @remarks
 * This type defines the response structure for the 404 status code
 * of the PATCH UsersMeVerification endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/users/me/verification
 *
 * @see {@link PATCH_UsersMeVerification_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type PATCH_UsersMeVerification_Response_404 = Problem

/**
 * 422 response for PATCH UsersMeVerification endpoint
 *
 * @remarks
 * This type defines the response structure for the 422 status code
 * of the PATCH UsersMeVerification endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/users/me/verification
 *
 * @see {@link PATCH_UsersMeVerification_Response} - The main response type definition
 * @see {@link HTTPValidationError} - The actual schema type definition
 */
export type PATCH_UsersMeVerification_Response_422 = HTTPValidationError

/**
 * Response types for POST UsersMeVerification endpoint
 *
 * Create Verification Me
 *
 * @remarks
 * This type defines all possible response structures for the POST UsersMeVerification endpoint.
 * Each response code maps to a specific response type as defined in the OpenAPI specification.
 * Use this type to ensure type safety when handling API responses from this endpoint.
 *

 *
 * @path /v1/users/me/verification
 *
 * @see {@link POST_UsersMeVerification_Response_401} - 401 response type
 * @see {@link POST_UsersMeVerification_Response_404} - 404 response type
 * @see {@link POST_UsersMeVerification_Response_405} - 405 response type
 * @see {@link POST_UsersMeVerification_Response_422} - 422 response type
 *

 */
export type POST_UsersMeVerification_Response = POST_UsersMeVerification_Response_401 | POST_UsersMeVerification_Response_404 | POST_UsersMeVerification_Response_405 | POST_UsersMeVerification_Response_422;

/**
 * 401 response for POST UsersMeVerification endpoint
 *
 * @remarks
 * This type defines the response structure for the 401 status code
 * of the POST UsersMeVerification endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/users/me/verification
 *
 * @see {@link POST_UsersMeVerification_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type POST_UsersMeVerification_Response_401 = Problem

/**
 * 404 response for POST UsersMeVerification endpoint
 *
 * @remarks
 * This type defines the response structure for the 404 status code
 * of the POST UsersMeVerification endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/users/me/verification
 *
 * @see {@link POST_UsersMeVerification_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type POST_UsersMeVerification_Response_404 = Problem

/**
 * 405 response for POST UsersMeVerification endpoint
 *
 * @remarks
 * This type defines the response structure for the 405 status code
 * of the POST UsersMeVerification endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/users/me/verification
 *
 * @see {@link POST_UsersMeVerification_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type POST_UsersMeVerification_Response_405 = Problem

/**
 * 422 response for POST UsersMeVerification endpoint
 *
 * @remarks
 * This type defines the response structure for the 422 status code
 * of the POST UsersMeVerification endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/users/me/verification
 *
 * @see {@link POST_UsersMeVerification_Response} - The main response type definition
 * @see {@link HTTPValidationError} - The actual schema type definition
 */
export type POST_UsersMeVerification_Response_422 = HTTPValidationError

