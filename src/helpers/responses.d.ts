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

import { Pagination_EmailForwardLog, HTTPValidationError, Pagination_ObjectLog, Pagination_RequestHistory, Problem, DomainAvailabilityList, Pagination_ContactSchema, ContactSchema, ContactVerification, Contact, Pagination_DnsZone, DnsZone, DnsChanges, DomainForwardZone, EmailForwardZone, Pagination_DomainForwardZone, Pagination_EmailForwardZone, DnsZoneSummary, Pagination_DomainForward, DomainForward, DomainForwardSet, DomainForwardMetrics, DomainForwardBrowserStats, DomainForwardGeoStats, DomainForwardPlatformStats, DomainForwardReferrerStats, DomainForwardStatusCodeStats, DomainForwardMetricsTimeSeries, DomainForwardUserAgentStats, DomainForwardVisitsByKey, DomainSearch, Pagination_Domain, Domain, DomainRenew, DomainRestore, DomainCheck, DomainSummary, DomainWithdraw, RequestAuthcode, DomainTransit, RequestAuthcode2, Pagination_EmailForward, EmailForward, EmailForwardAlias, EmailForwardMetrics, Pagination_Event, EventSchema, Pagination_Organization, Organization, OrganizationWithBillingData, Pagination_Invoice, GetPrices, Pagination_BillingTransaction, BillingTransaction, IpRestriction, Pagination_UserPublic, Pagination_Parking, ParkingMetrics, TldSpecification, UserPublic, UserPublicWithAttributes, PermissionSet, RelationSet, UserWithRelationPermissions } from './schemas.d';

/**
 * Response types for GET ArchiveEmailForwardLogsAliasesByEmailForwardAliasId endpoint
 *
 * Retrieve email forward logs by alias
 * Retrieves a paginated list of email forward logs for a specific email forward alias. Only returns logs created after the email forward was created.
 *
 * @remarks
 * This type defines all possible response structures for the GET ArchiveEmailForwardLogsAliasesByEmailForwardAliasId endpoint.
 * Each response code maps to a specific response type as defined in the OpenAPI specification.
 * Use this type to ensure type safety when handling API responses from this endpoint.
 *

 *
 * @path /v1/archive/email-forward-logs/aliases/{email_forward_alias_id}
 *
 * @see {@link GET_ArchiveEmailForwardLogsAliasesByEmailForwardAliasId_Response_200} - 200 response type
 * @see {@link GET_ArchiveEmailForwardLogsAliasesByEmailForwardAliasId_Response_422} - 422 response type
 *

 */
export type GET_ArchiveEmailForwardLogsAliasesByEmailForwardAliasId_Response = GET_ArchiveEmailForwardLogsAliasesByEmailForwardAliasId_Response_200 | GET_ArchiveEmailForwardLogsAliasesByEmailForwardAliasId_Response_422;

/**
 * 200 response for GET ArchiveEmailForwardLogsAliasesByEmailForwardAliasId endpoint
 *
 * @remarks
 * This type defines the response structure for the 200 status code
 * of the GET ArchiveEmailForwardLogsAliasesByEmailForwardAliasId endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/archive/email-forward-logs/aliases/{email_forward_alias_id}
 *
 * @see {@link GET_ArchiveEmailForwardLogsAliasesByEmailForwardAliasId_Response} - The main response type definition
 * @see {@link Pagination_EmailForwardLog} - The actual schema type definition
 */
export type GET_ArchiveEmailForwardLogsAliasesByEmailForwardAliasId_Response_200 = Pagination_EmailForwardLog

/**
 * 422 response for GET ArchiveEmailForwardLogsAliasesByEmailForwardAliasId endpoint
 *
 * @remarks
 * This type defines the response structure for the 422 status code
 * of the GET ArchiveEmailForwardLogsAliasesByEmailForwardAliasId endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/archive/email-forward-logs/aliases/{email_forward_alias_id}
 *
 * @see {@link GET_ArchiveEmailForwardLogsAliasesByEmailForwardAliasId_Response} - The main response type definition
 * @see {@link HTTPValidationError} - The actual schema type definition
 */
export type GET_ArchiveEmailForwardLogsAliasesByEmailForwardAliasId_Response_422 = HTTPValidationError

/**
 * Response types for GET ArchiveEmailForwardLogsByEmailForwardId endpoint
 *
 * Retrieve email forward logs
 * Retrieves a paginated list of email forward logs for a specific email forward. Only returns logs created after the email forward was created.
 *
 * @remarks
 * This type defines all possible response structures for the GET ArchiveEmailForwardLogsByEmailForwardId endpoint.
 * Each response code maps to a specific response type as defined in the OpenAPI specification.
 * Use this type to ensure type safety when handling API responses from this endpoint.
 *

 *
 * @path /v1/archive/email-forward-logs/{email_forward_id}
 *
 * @see {@link GET_ArchiveEmailForwardLogsByEmailForwardId_Response_200} - 200 response type
 * @see {@link GET_ArchiveEmailForwardLogsByEmailForwardId_Response_422} - 422 response type
 *

 */
export type GET_ArchiveEmailForwardLogsByEmailForwardId_Response = GET_ArchiveEmailForwardLogsByEmailForwardId_Response_200 | GET_ArchiveEmailForwardLogsByEmailForwardId_Response_422;

/**
 * 200 response for GET ArchiveEmailForwardLogsByEmailForwardId endpoint
 *
 * @remarks
 * This type defines the response structure for the 200 status code
 * of the GET ArchiveEmailForwardLogsByEmailForwardId endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/archive/email-forward-logs/{email_forward_id}
 *
 * @see {@link GET_ArchiveEmailForwardLogsByEmailForwardId_Response} - The main response type definition
 * @see {@link Pagination_EmailForwardLog} - The actual schema type definition
 */
export type GET_ArchiveEmailForwardLogsByEmailForwardId_Response_200 = Pagination_EmailForwardLog

/**
 * 422 response for GET ArchiveEmailForwardLogsByEmailForwardId endpoint
 *
 * @remarks
 * This type defines the response structure for the 422 status code
 * of the GET ArchiveEmailForwardLogsByEmailForwardId endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/archive/email-forward-logs/{email_forward_id}
 *
 * @see {@link GET_ArchiveEmailForwardLogsByEmailForwardId_Response} - The main response type definition
 * @see {@link HTTPValidationError} - The actual schema type definition
 */
export type GET_ArchiveEmailForwardLogsByEmailForwardId_Response_422 = HTTPValidationError

/**
 * Response types for GET ArchiveObjectLogs endpoint
 *
 * Retrieve all object history
 * Retrieve all paginated audit logs with optional filtering and sorting
 *
 * @remarks
 * This type defines all possible response structures for the GET ArchiveObjectLogs endpoint.
 * Each response code maps to a specific response type as defined in the OpenAPI specification.
 * Use this type to ensure type safety when handling API responses from this endpoint.
 *

 *
 * @path /v1/archive/object-logs
 *
 * @see {@link GET_ArchiveObjectLogs_Response_200} - 200 response type
 * @see {@link GET_ArchiveObjectLogs_Response_422} - 422 response type
 *

 */
export type GET_ArchiveObjectLogs_Response = GET_ArchiveObjectLogs_Response_200 | GET_ArchiveObjectLogs_Response_422;

/**
 * 200 response for GET ArchiveObjectLogs endpoint
 *
 * @remarks
 * This type defines the response structure for the 200 status code
 * of the GET ArchiveObjectLogs endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/archive/object-logs
 *
 * @see {@link GET_ArchiveObjectLogs_Response} - The main response type definition
 * @see {@link Pagination_ObjectLog} - The actual schema type definition
 */
export type GET_ArchiveObjectLogs_Response_200 = Pagination_ObjectLog

/**
 * 422 response for GET ArchiveObjectLogs endpoint
 *
 * @remarks
 * This type defines the response structure for the 422 status code
 * of the GET ArchiveObjectLogs endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/archive/object-logs
 *
 * @see {@link GET_ArchiveObjectLogs_Response} - The main response type definition
 * @see {@link HTTPValidationError} - The actual schema type definition
 */
export type GET_ArchiveObjectLogs_Response_422 = HTTPValidationError

/**
 * Response types for GET ArchiveObjectLogsByObjectId endpoint
 *
 * Retrieve object history
 * Retrieve paginated audit logs for a specific object with optional filtering and sorting
 *
 * @remarks
 * This type defines all possible response structures for the GET ArchiveObjectLogsByObjectId endpoint.
 * Each response code maps to a specific response type as defined in the OpenAPI specification.
 * Use this type to ensure type safety when handling API responses from this endpoint.
 *

 *
 * @path /v1/archive/object-logs/{object_id}
 *
 * @see {@link GET_ArchiveObjectLogsByObjectId_Response_200} - 200 response type
 * @see {@link GET_ArchiveObjectLogsByObjectId_Response_422} - 422 response type
 *

 */
export type GET_ArchiveObjectLogsByObjectId_Response = GET_ArchiveObjectLogsByObjectId_Response_200 | GET_ArchiveObjectLogsByObjectId_Response_422;

/**
 * 200 response for GET ArchiveObjectLogsByObjectId endpoint
 *
 * @remarks
 * This type defines the response structure for the 200 status code
 * of the GET ArchiveObjectLogsByObjectId endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/archive/object-logs/{object_id}
 *
 * @see {@link GET_ArchiveObjectLogsByObjectId_Response} - The main response type definition
 * @see {@link Pagination_ObjectLog} - The actual schema type definition
 */
export type GET_ArchiveObjectLogsByObjectId_Response_200 = Pagination_ObjectLog

/**
 * 422 response for GET ArchiveObjectLogsByObjectId endpoint
 *
 * @remarks
 * This type defines the response structure for the 422 status code
 * of the GET ArchiveObjectLogsByObjectId endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/archive/object-logs/{object_id}
 *
 * @see {@link GET_ArchiveObjectLogsByObjectId_Response} - The main response type definition
 * @see {@link HTTPValidationError} - The actual schema type definition
 */
export type GET_ArchiveObjectLogsByObjectId_Response_422 = HTTPValidationError

/**
 * Response types for GET ArchiveRequestHistory endpoint
 *
 * Retrieve request history logs
 * Retrieves a paginated list of request history logs
 *
 * @remarks
 * This type defines all possible response structures for the GET ArchiveRequestHistory endpoint.
 * Each response code maps to a specific response type as defined in the OpenAPI specification.
 * Use this type to ensure type safety when handling API responses from this endpoint.
 *

 *
 * @path /v1/archive/request-history
 *
 * @see {@link GET_ArchiveRequestHistory_Response_200} - 200 response type
 * @see {@link GET_ArchiveRequestHistory_Response_422} - 422 response type
 *

 */
export type GET_ArchiveRequestHistory_Response = GET_ArchiveRequestHistory_Response_200 | GET_ArchiveRequestHistory_Response_422;

/**
 * 200 response for GET ArchiveRequestHistory endpoint
 *
 * @remarks
 * This type defines the response structure for the 200 status code
 * of the GET ArchiveRequestHistory endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/archive/request-history
 *
 * @see {@link GET_ArchiveRequestHistory_Response} - The main response type definition
 * @see {@link Pagination_RequestHistory} - The actual schema type definition
 */
export type GET_ArchiveRequestHistory_Response_200 = Pagination_RequestHistory

/**
 * 422 response for GET ArchiveRequestHistory endpoint
 *
 * @remarks
 * This type defines the response structure for the 422 status code
 * of the GET ArchiveRequestHistory endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/archive/request-history
 *
 * @see {@link GET_ArchiveRequestHistory_Response} - The main response type definition
 * @see {@link HTTPValidationError} - The actual schema type definition
 */
export type GET_ArchiveRequestHistory_Response_422 = HTTPValidationError

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
 * Check domain availability
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
 * Stream domain availability results
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
 * List all contacts
 * Retrieves a paginated list of all contacts
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
 * Create a contact
 * Create a new contact object to use for domain registration
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
 * Delete a contact
 * Deletes a contact object; only possible if the contact is not in use
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
 * Retrieve a contact
 * Retrieves a contact object
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
 * Retrieve contact verification by contact ID
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
 * Complete contact verification by contact ID
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
 * Retrieve contact verification by token
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
 * Complete contact verification with token
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
 * @see {@link POST_DnsByZoneNameDnssecDisable_Response_400} - 400 response type
 * @see {@link POST_DnsByZoneNameDnssecDisable_Response_422} - 422 response type
 *

 */
export type POST_DnsByZoneNameDnssecDisable_Response = POST_DnsByZoneNameDnssecDisable_Response_200 | POST_DnsByZoneNameDnssecDisable_Response_400 | POST_DnsByZoneNameDnssecDisable_Response_422;

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
 * 400 response for POST DnsByZoneNameDnssecDisable endpoint
 *
 * @remarks
 * This type defines the response structure for the 400 status code
 * of the POST DnsByZoneNameDnssecDisable endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/dns/{zone_name}/dnssec/disable
 * @param zone_name (path) - DNS zone name (trailing dot optional)
 *
 * @see {@link POST_DnsByZoneNameDnssecDisable_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type POST_DnsByZoneNameDnssecDisable_Response_400 = Problem

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
 * @see {@link POST_DnsByZoneNameDnssecEnable_Response_400} - 400 response type
 * @see {@link POST_DnsByZoneNameDnssecEnable_Response_422} - 422 response type
 *

 */
export type POST_DnsByZoneNameDnssecEnable_Response = POST_DnsByZoneNameDnssecEnable_Response_200 | POST_DnsByZoneNameDnssecEnable_Response_400 | POST_DnsByZoneNameDnssecEnable_Response_422;

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
 * 400 response for POST DnsByZoneNameDnssecEnable endpoint
 *
 * @remarks
 * This type defines the response structure for the 400 status code
 * of the POST DnsByZoneNameDnssecEnable endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/dns/{zone_name}/dnssec/enable
 * @param zone_name (path) - DNS zone name (trailing dot optional)
 *
 * @see {@link POST_DnsByZoneNameDnssecEnable_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type POST_DnsByZoneNameDnssecEnable_Response_400 = Problem

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
 * Response types for GET DnsByZoneNameDomainForwards endpoint
 *
 * List domain forwards for a zone
 * Retrieves all domain forwards configured for the specified DNS zone, including subdomains.
 *
 * @remarks
 * This type defines all possible response structures for the GET DnsByZoneNameDomainForwards endpoint.
 * Each response code maps to a specific response type as defined in the OpenAPI specification.
 * Use this type to ensure type safety when handling API responses from this endpoint.
 *

 *
 * @path /v1/dns/{zone_name}/domain-forwards
 * @param zone_name (path) - DNS zone name (trailing dot optional)
 *
 * @see {@link GET_DnsByZoneNameDomainForwards_Response_200} - 200 response type
 * @see {@link GET_DnsByZoneNameDomainForwards_Response_401} - 401 response type
 * @see {@link GET_DnsByZoneNameDomainForwards_Response_403} - 403 response type
 * @see {@link GET_DnsByZoneNameDomainForwards_Response_422} - 422 response type
 *

 */
export type GET_DnsByZoneNameDomainForwards_Response = GET_DnsByZoneNameDomainForwards_Response_200 | GET_DnsByZoneNameDomainForwards_Response_401 | GET_DnsByZoneNameDomainForwards_Response_403 | GET_DnsByZoneNameDomainForwards_Response_422;

/**
 * 200 response for GET DnsByZoneNameDomainForwards endpoint
 *
 * @remarks
 * This type defines the response structure for the 200 status code
 * of the GET DnsByZoneNameDomainForwards endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/dns/{zone_name}/domain-forwards
 * @param zone_name (path) - DNS zone name (trailing dot optional)
 *
 * @see {@link GET_DnsByZoneNameDomainForwards_Response} - The main response type definition
 * @see {@link DomainForwardZone} - The actual schema type definition
 */
export type GET_DnsByZoneNameDomainForwards_Response_200 = DomainForwardZone

/**
 * 401 response for GET DnsByZoneNameDomainForwards endpoint
 *
 * @remarks
 * This type defines the response structure for the 401 status code
 * of the GET DnsByZoneNameDomainForwards endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/dns/{zone_name}/domain-forwards
 * @param zone_name (path) - DNS zone name (trailing dot optional)
 *
 * @see {@link GET_DnsByZoneNameDomainForwards_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type GET_DnsByZoneNameDomainForwards_Response_401 = Problem

/**
 * 403 response for GET DnsByZoneNameDomainForwards endpoint
 *
 * @remarks
 * This type defines the response structure for the 403 status code
 * of the GET DnsByZoneNameDomainForwards endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/dns/{zone_name}/domain-forwards
 * @param zone_name (path) - DNS zone name (trailing dot optional)
 *
 * @see {@link GET_DnsByZoneNameDomainForwards_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type GET_DnsByZoneNameDomainForwards_Response_403 = Problem

/**
 * 422 response for GET DnsByZoneNameDomainForwards endpoint
 *
 * @remarks
 * This type defines the response structure for the 422 status code
 * of the GET DnsByZoneNameDomainForwards endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/dns/{zone_name}/domain-forwards
 * @param zone_name (path) - DNS zone name (trailing dot optional)
 *
 * @see {@link GET_DnsByZoneNameDomainForwards_Response} - The main response type definition
 * @see {@link HTTPValidationError} - The actual schema type definition
 */
export type GET_DnsByZoneNameDomainForwards_Response_422 = HTTPValidationError

/**
 * Response types for GET DnsByZoneNameEmailForwards endpoint
 *
 * List email forwards for a zone
 * Retrieves all email forwards configured for the specified DNS zone, including subdomains and all aliases.
 *
 * @remarks
 * This type defines all possible response structures for the GET DnsByZoneNameEmailForwards endpoint.
 * Each response code maps to a specific response type as defined in the OpenAPI specification.
 * Use this type to ensure type safety when handling API responses from this endpoint.
 *

 *
 * @path /v1/dns/{zone_name}/email-forwards
 * @param zone_name (path) - DNS zone name (trailing dot optional)
 *
 * @see {@link GET_DnsByZoneNameEmailForwards_Response_200} - 200 response type
 * @see {@link GET_DnsByZoneNameEmailForwards_Response_401} - 401 response type
 * @see {@link GET_DnsByZoneNameEmailForwards_Response_403} - 403 response type
 * @see {@link GET_DnsByZoneNameEmailForwards_Response_422} - 422 response type
 *

 */
export type GET_DnsByZoneNameEmailForwards_Response = GET_DnsByZoneNameEmailForwards_Response_200 | GET_DnsByZoneNameEmailForwards_Response_401 | GET_DnsByZoneNameEmailForwards_Response_403 | GET_DnsByZoneNameEmailForwards_Response_422;

/**
 * 200 response for GET DnsByZoneNameEmailForwards endpoint
 *
 * @remarks
 * This type defines the response structure for the 200 status code
 * of the GET DnsByZoneNameEmailForwards endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/dns/{zone_name}/email-forwards
 * @param zone_name (path) - DNS zone name (trailing dot optional)
 *
 * @see {@link GET_DnsByZoneNameEmailForwards_Response} - The main response type definition
 * @see {@link EmailForwardZone} - The actual schema type definition
 */
export type GET_DnsByZoneNameEmailForwards_Response_200 = EmailForwardZone

/**
 * 401 response for GET DnsByZoneNameEmailForwards endpoint
 *
 * @remarks
 * This type defines the response structure for the 401 status code
 * of the GET DnsByZoneNameEmailForwards endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/dns/{zone_name}/email-forwards
 * @param zone_name (path) - DNS zone name (trailing dot optional)
 *
 * @see {@link GET_DnsByZoneNameEmailForwards_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type GET_DnsByZoneNameEmailForwards_Response_401 = Problem

/**
 * 403 response for GET DnsByZoneNameEmailForwards endpoint
 *
 * @remarks
 * This type defines the response structure for the 403 status code
 * of the GET DnsByZoneNameEmailForwards endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/dns/{zone_name}/email-forwards
 * @param zone_name (path) - DNS zone name (trailing dot optional)
 *
 * @see {@link GET_DnsByZoneNameEmailForwards_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type GET_DnsByZoneNameEmailForwards_Response_403 = Problem

/**
 * 422 response for GET DnsByZoneNameEmailForwards endpoint
 *
 * @remarks
 * This type defines the response structure for the 422 status code
 * of the GET DnsByZoneNameEmailForwards endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/dns/{zone_name}/email-forwards
 * @param zone_name (path) - DNS zone name (trailing dot optional)
 *
 * @see {@link GET_DnsByZoneNameEmailForwards_Response} - The main response type definition
 * @see {@link HTTPValidationError} - The actual schema type definition
 */
export type GET_DnsByZoneNameEmailForwards_Response_422 = HTTPValidationError

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
 * Response types for GET DnsDomainForwards endpoint
 *
 * List domain forwards by zone
 * Retrieves a paginated list of domain forwards grouped by DNS zones.
 *
 * @remarks
 * This type defines all possible response structures for the GET DnsDomainForwards endpoint.
 * Each response code maps to a specific response type as defined in the OpenAPI specification.
 * Use this type to ensure type safety when handling API responses from this endpoint.
 *

 *
 * @path /v1/dns/domain-forwards
 *
 * @see {@link GET_DnsDomainForwards_Response_200} - 200 response type
 * @see {@link GET_DnsDomainForwards_Response_401} - 401 response type
 * @see {@link GET_DnsDomainForwards_Response_403} - 403 response type
 * @see {@link GET_DnsDomainForwards_Response_422} - 422 response type
 *

 */
export type GET_DnsDomainForwards_Response = GET_DnsDomainForwards_Response_200 | GET_DnsDomainForwards_Response_401 | GET_DnsDomainForwards_Response_403 | GET_DnsDomainForwards_Response_422;

/**
 * 200 response for GET DnsDomainForwards endpoint
 *
 * @remarks
 * This type defines the response structure for the 200 status code
 * of the GET DnsDomainForwards endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/dns/domain-forwards
 *
 * @see {@link GET_DnsDomainForwards_Response} - The main response type definition
 * @see {@link Pagination_DomainForwardZone} - The actual schema type definition
 */
export type GET_DnsDomainForwards_Response_200 = Pagination_DomainForwardZone

/**
 * 401 response for GET DnsDomainForwards endpoint
 *
 * @remarks
 * This type defines the response structure for the 401 status code
 * of the GET DnsDomainForwards endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/dns/domain-forwards
 *
 * @see {@link GET_DnsDomainForwards_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type GET_DnsDomainForwards_Response_401 = Problem

/**
 * 403 response for GET DnsDomainForwards endpoint
 *
 * @remarks
 * This type defines the response structure for the 403 status code
 * of the GET DnsDomainForwards endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/dns/domain-forwards
 *
 * @see {@link GET_DnsDomainForwards_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type GET_DnsDomainForwards_Response_403 = Problem

/**
 * 422 response for GET DnsDomainForwards endpoint
 *
 * @remarks
 * This type defines the response structure for the 422 status code
 * of the GET DnsDomainForwards endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/dns/domain-forwards
 *
 * @see {@link GET_DnsDomainForwards_Response} - The main response type definition
 * @see {@link HTTPValidationError} - The actual schema type definition
 */
export type GET_DnsDomainForwards_Response_422 = HTTPValidationError

/**
 * Response types for GET DnsEmailForwards endpoint
 *
 * List email forwards by zone
 * Retrieves a paginated list of email forwards grouped by DNS zones.
 *
 * @remarks
 * This type defines all possible response structures for the GET DnsEmailForwards endpoint.
 * Each response code maps to a specific response type as defined in the OpenAPI specification.
 * Use this type to ensure type safety when handling API responses from this endpoint.
 *

 *
 * @path /v1/dns/email-forwards
 *
 * @see {@link GET_DnsEmailForwards_Response_200} - 200 response type
 * @see {@link GET_DnsEmailForwards_Response_401} - 401 response type
 * @see {@link GET_DnsEmailForwards_Response_403} - 403 response type
 * @see {@link GET_DnsEmailForwards_Response_422} - 422 response type
 *

 */
export type GET_DnsEmailForwards_Response = GET_DnsEmailForwards_Response_200 | GET_DnsEmailForwards_Response_401 | GET_DnsEmailForwards_Response_403 | GET_DnsEmailForwards_Response_422;

/**
 * 200 response for GET DnsEmailForwards endpoint
 *
 * @remarks
 * This type defines the response structure for the 200 status code
 * of the GET DnsEmailForwards endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/dns/email-forwards
 *
 * @see {@link GET_DnsEmailForwards_Response} - The main response type definition
 * @see {@link Pagination_EmailForwardZone} - The actual schema type definition
 */
export type GET_DnsEmailForwards_Response_200 = Pagination_EmailForwardZone

/**
 * 401 response for GET DnsEmailForwards endpoint
 *
 * @remarks
 * This type defines the response structure for the 401 status code
 * of the GET DnsEmailForwards endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/dns/email-forwards
 *
 * @see {@link GET_DnsEmailForwards_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type GET_DnsEmailForwards_Response_401 = Problem

/**
 * 403 response for GET DnsEmailForwards endpoint
 *
 * @remarks
 * This type defines the response structure for the 403 status code
 * of the GET DnsEmailForwards endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/dns/email-forwards
 *
 * @see {@link GET_DnsEmailForwards_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type GET_DnsEmailForwards_Response_403 = Problem

/**
 * 422 response for GET DnsEmailForwards endpoint
 *
 * @remarks
 * This type defines the response structure for the 422 status code
 * of the GET DnsEmailForwards endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/dns/email-forwards
 *
 * @see {@link GET_DnsEmailForwards_Response} - The main response type definition
 * @see {@link HTTPValidationError} - The actual schema type definition
 */
export type GET_DnsEmailForwards_Response_422 = HTTPValidationError

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
 * @see {@link GET_DnsSummary_Response_422} - 422 response type
 *

 */
export type GET_DnsSummary_Response = GET_DnsSummary_Response_200 | GET_DnsSummary_Response_422;

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
 * 422 response for GET DnsSummary endpoint
 *
 * @remarks
 * This type defines the response structure for the 422 status code
 * of the GET DnsSummary endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/dns/summary
 *
 * @see {@link GET_DnsSummary_Response} - The main response type definition
 * @see {@link HTTPValidationError} - The actual schema type definition
 */
export type GET_DnsSummary_Response_422 = HTTPValidationError

/**
 * Response types for GET DomainForwards endpoint
 *
 * List domain forwards
 * Retrieves a paginated list of domain forwards by hostname for the organization
 *
 * @remarks
 * This type defines all possible response structures for the GET DomainForwards endpoint.
 * Each response code maps to a specific response type as defined in the OpenAPI specification.
 * Use this type to ensure type safety when handling API responses from this endpoint.
 *

 *
 * @path /v1/domain-forwards
 *
 * @see {@link GET_DomainForwards_Response_200} - 200 response type
 * @see {@link GET_DomainForwards_Response_401} - 401 response type
 * @see {@link GET_DomainForwards_Response_403} - 403 response type
 * @see {@link GET_DomainForwards_Response_422} - 422 response type
 *

 */
export type GET_DomainForwards_Response = GET_DomainForwards_Response_200 | GET_DomainForwards_Response_401 | GET_DomainForwards_Response_403 | GET_DomainForwards_Response_422;

/**
 * 200 response for GET DomainForwards endpoint
 *
 * @remarks
 * This type defines the response structure for the 200 status code
 * of the GET DomainForwards endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/domain-forwards
 *
 * @see {@link GET_DomainForwards_Response} - The main response type definition
 * @see {@link Pagination_DomainForward} - The actual schema type definition
 */
export type GET_DomainForwards_Response_200 = Pagination_DomainForward

/**
 * 401 response for GET DomainForwards endpoint
 *
 * @remarks
 * This type defines the response structure for the 401 status code
 * of the GET DomainForwards endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/domain-forwards
 *
 * @see {@link GET_DomainForwards_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type GET_DomainForwards_Response_401 = Problem

/**
 * 403 response for GET DomainForwards endpoint
 *
 * @remarks
 * This type defines the response structure for the 403 status code
 * of the GET DomainForwards endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/domain-forwards
 *
 * @see {@link GET_DomainForwards_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type GET_DomainForwards_Response_403 = Problem

/**
 * 422 response for GET DomainForwards endpoint
 *
 * @remarks
 * This type defines the response structure for the 422 status code
 * of the GET DomainForwards endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/domain-forwards
 *
 * @see {@link GET_DomainForwards_Response} - The main response type definition
 * @see {@link HTTPValidationError} - The actual schema type definition
 */
export type GET_DomainForwards_Response_422 = HTTPValidationError

/**
 * Response types for PATCH DomainForwards endpoint
 *
 * Patch domain forward redirects
 * Applies patch operations to update or remove redirects across hostnames and protocols. Raises an error if the domain forward or domain forward set does not exist.
 *
 * @remarks
 * This type defines all possible response structures for the PATCH DomainForwards endpoint.
 * Each response code maps to a specific response type as defined in the OpenAPI specification.
 * Use this type to ensure type safety when handling API responses from this endpoint.
 *

 *
 * @path /v1/domain-forwards
 *
 * @see {@link PATCH_DomainForwards_Response_401} - 401 response type
 * @see {@link PATCH_DomainForwards_Response_403} - 403 response type
 * @see {@link PATCH_DomainForwards_Response_404} - 404 response type
 * @see {@link PATCH_DomainForwards_Response_422} - 422 response type
 *

 */
export type PATCH_DomainForwards_Response = PATCH_DomainForwards_Response_401 | PATCH_DomainForwards_Response_403 | PATCH_DomainForwards_Response_404 | PATCH_DomainForwards_Response_422;

/**
 * 401 response for PATCH DomainForwards endpoint
 *
 * @remarks
 * This type defines the response structure for the 401 status code
 * of the PATCH DomainForwards endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/domain-forwards
 *
 * @see {@link PATCH_DomainForwards_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type PATCH_DomainForwards_Response_401 = Problem

/**
 * 403 response for PATCH DomainForwards endpoint
 *
 * @remarks
 * This type defines the response structure for the 403 status code
 * of the PATCH DomainForwards endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/domain-forwards
 *
 * @see {@link PATCH_DomainForwards_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type PATCH_DomainForwards_Response_403 = Problem

/**
 * 404 response for PATCH DomainForwards endpoint
 *
 * @remarks
 * This type defines the response structure for the 404 status code
 * of the PATCH DomainForwards endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/domain-forwards
 *
 * @see {@link PATCH_DomainForwards_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type PATCH_DomainForwards_Response_404 = Problem

/**
 * 422 response for PATCH DomainForwards endpoint
 *
 * @remarks
 * This type defines the response structure for the 422 status code
 * of the PATCH DomainForwards endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/domain-forwards
 *
 * @see {@link PATCH_DomainForwards_Response} - The main response type definition
 * @see {@link HTTPValidationError} - The actual schema type definition
 */
export type PATCH_DomainForwards_Response_422 = HTTPValidationError

/**
 * Response types for POST DomainForwards endpoint
 *
 * Create a domain forward
 * Creates a new domain forward configuration. Wildcard forwards can be created by using *.hostname (e.g., *.example.com).
 *
 * @remarks
 * This type defines all possible response structures for the POST DomainForwards endpoint.
 * Each response code maps to a specific response type as defined in the OpenAPI specification.
 * Use this type to ensure type safety when handling API responses from this endpoint.
 *

 *
 * @path /v1/domain-forwards
 *
 * @see {@link POST_DomainForwards_Response_201} - 201 response type
 * @see {@link POST_DomainForwards_Response_401} - 401 response type
 * @see {@link POST_DomainForwards_Response_403} - 403 response type
 * @see {@link POST_DomainForwards_Response_404} - 404 response type
 * @see {@link POST_DomainForwards_Response_409} - 409 response type
 * @see {@link POST_DomainForwards_Response_422} - 422 response type
 *

 */
export type POST_DomainForwards_Response = POST_DomainForwards_Response_201 | POST_DomainForwards_Response_401 | POST_DomainForwards_Response_403 | POST_DomainForwards_Response_404 | POST_DomainForwards_Response_409 | POST_DomainForwards_Response_422;

/**
 * 201 response for POST DomainForwards endpoint
 *
 * @remarks
 * This type defines the response structure for the 201 status code
 * of the POST DomainForwards endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/domain-forwards
 *
 * @see {@link POST_DomainForwards_Response} - The main response type definition
 * @see {@link DomainForward} - The actual schema type definition
 */
export type POST_DomainForwards_Response_201 = DomainForward

/**
 * 401 response for POST DomainForwards endpoint
 *
 * @remarks
 * This type defines the response structure for the 401 status code
 * of the POST DomainForwards endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/domain-forwards
 *
 * @see {@link POST_DomainForwards_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type POST_DomainForwards_Response_401 = Problem

/**
 * 403 response for POST DomainForwards endpoint
 *
 * @remarks
 * This type defines the response structure for the 403 status code
 * of the POST DomainForwards endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/domain-forwards
 *
 * @see {@link POST_DomainForwards_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type POST_DomainForwards_Response_403 = Problem

/**
 * 404 response for POST DomainForwards endpoint
 *
 * @remarks
 * This type defines the response structure for the 404 status code
 * of the POST DomainForwards endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/domain-forwards
 *
 * @see {@link POST_DomainForwards_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type POST_DomainForwards_Response_404 = Problem

/**
 * 409 response for POST DomainForwards endpoint
 *
 * @remarks
 * This type defines the response structure for the 409 status code
 * of the POST DomainForwards endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/domain-forwards
 *
 * @see {@link POST_DomainForwards_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type POST_DomainForwards_Response_409 = Problem

/**
 * 422 response for POST DomainForwards endpoint
 *
 * @remarks
 * This type defines the response structure for the 422 status code
 * of the POST DomainForwards endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/domain-forwards
 *
 * @see {@link POST_DomainForwards_Response} - The main response type definition
 * @see {@link HTTPValidationError} - The actual schema type definition
 */
export type POST_DomainForwards_Response_422 = HTTPValidationError

/**
 * Response types for DELETE DomainForwardsByHostname endpoint
 *
 * Delete a domain forward
 * Deletes the domain forward configuration for the specified hostname
 *
 * @remarks
 * This type defines all possible response structures for the DELETE DomainForwardsByHostname endpoint.
 * Each response code maps to a specific response type as defined in the OpenAPI specification.
 * Use this type to ensure type safety when handling API responses from this endpoint.
 *

 *
 * @path /v1/domain-forwards/{hostname}
 * @param hostname (path) - Hostname
 *
 * @see {@link DELETE_DomainForwardsByHostname_Response_401} - 401 response type
 * @see {@link DELETE_DomainForwardsByHostname_Response_403} - 403 response type
 * @see {@link DELETE_DomainForwardsByHostname_Response_404} - 404 response type
 * @see {@link DELETE_DomainForwardsByHostname_Response_422} - 422 response type
 *

 */
export type DELETE_DomainForwardsByHostname_Response = DELETE_DomainForwardsByHostname_Response_401 | DELETE_DomainForwardsByHostname_Response_403 | DELETE_DomainForwardsByHostname_Response_404 | DELETE_DomainForwardsByHostname_Response_422;

/**
 * 401 response for DELETE DomainForwardsByHostname endpoint
 *
 * @remarks
 * This type defines the response structure for the 401 status code
 * of the DELETE DomainForwardsByHostname endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/domain-forwards/{hostname}
 * @param hostname (path) - Hostname
 *
 * @see {@link DELETE_DomainForwardsByHostname_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type DELETE_DomainForwardsByHostname_Response_401 = Problem

/**
 * 403 response for DELETE DomainForwardsByHostname endpoint
 *
 * @remarks
 * This type defines the response structure for the 403 status code
 * of the DELETE DomainForwardsByHostname endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/domain-forwards/{hostname}
 * @param hostname (path) - Hostname
 *
 * @see {@link DELETE_DomainForwardsByHostname_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type DELETE_DomainForwardsByHostname_Response_403 = Problem

/**
 * 404 response for DELETE DomainForwardsByHostname endpoint
 *
 * @remarks
 * This type defines the response structure for the 404 status code
 * of the DELETE DomainForwardsByHostname endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/domain-forwards/{hostname}
 * @param hostname (path) - Hostname
 *
 * @see {@link DELETE_DomainForwardsByHostname_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type DELETE_DomainForwardsByHostname_Response_404 = Problem

/**
 * 422 response for DELETE DomainForwardsByHostname endpoint
 *
 * @remarks
 * This type defines the response structure for the 422 status code
 * of the DELETE DomainForwardsByHostname endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/domain-forwards/{hostname}
 * @param hostname (path) - Hostname
 *
 * @see {@link DELETE_DomainForwardsByHostname_Response} - The main response type definition
 * @see {@link HTTPValidationError} - The actual schema type definition
 */
export type DELETE_DomainForwardsByHostname_Response_422 = HTTPValidationError

/**
 * Response types for GET DomainForwardsByHostname endpoint
 *
 * Get a domain forward
 * Retrieves the domain forward configuration for the specified hostname
 *
 * @remarks
 * This type defines all possible response structures for the GET DomainForwardsByHostname endpoint.
 * Each response code maps to a specific response type as defined in the OpenAPI specification.
 * Use this type to ensure type safety when handling API responses from this endpoint.
 *

 *
 * @path /v1/domain-forwards/{hostname}
 * @param hostname (path) - Hostname
 *
 * @see {@link GET_DomainForwardsByHostname_Response_200} - 200 response type
 * @see {@link GET_DomainForwardsByHostname_Response_401} - 401 response type
 * @see {@link GET_DomainForwardsByHostname_Response_403} - 403 response type
 * @see {@link GET_DomainForwardsByHostname_Response_404} - 404 response type
 * @see {@link GET_DomainForwardsByHostname_Response_422} - 422 response type
 *

 */
export type GET_DomainForwardsByHostname_Response = GET_DomainForwardsByHostname_Response_200 | GET_DomainForwardsByHostname_Response_401 | GET_DomainForwardsByHostname_Response_403 | GET_DomainForwardsByHostname_Response_404 | GET_DomainForwardsByHostname_Response_422;

/**
 * 200 response for GET DomainForwardsByHostname endpoint
 *
 * @remarks
 * This type defines the response structure for the 200 status code
 * of the GET DomainForwardsByHostname endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/domain-forwards/{hostname}
 * @param hostname (path) - Hostname
 *
 * @see {@link GET_DomainForwardsByHostname_Response} - The main response type definition
 * @see {@link DomainForward} - The actual schema type definition
 */
export type GET_DomainForwardsByHostname_Response_200 = DomainForward

/**
 * 401 response for GET DomainForwardsByHostname endpoint
 *
 * @remarks
 * This type defines the response structure for the 401 status code
 * of the GET DomainForwardsByHostname endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/domain-forwards/{hostname}
 * @param hostname (path) - Hostname
 *
 * @see {@link GET_DomainForwardsByHostname_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type GET_DomainForwardsByHostname_Response_401 = Problem

/**
 * 403 response for GET DomainForwardsByHostname endpoint
 *
 * @remarks
 * This type defines the response structure for the 403 status code
 * of the GET DomainForwardsByHostname endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/domain-forwards/{hostname}
 * @param hostname (path) - Hostname
 *
 * @see {@link GET_DomainForwardsByHostname_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type GET_DomainForwardsByHostname_Response_403 = Problem

/**
 * 404 response for GET DomainForwardsByHostname endpoint
 *
 * @remarks
 * This type defines the response structure for the 404 status code
 * of the GET DomainForwardsByHostname endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/domain-forwards/{hostname}
 * @param hostname (path) - Hostname
 *
 * @see {@link GET_DomainForwardsByHostname_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type GET_DomainForwardsByHostname_Response_404 = Problem

/**
 * 422 response for GET DomainForwardsByHostname endpoint
 *
 * @remarks
 * This type defines the response structure for the 422 status code
 * of the GET DomainForwardsByHostname endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/domain-forwards/{hostname}
 * @param hostname (path) - Hostname
 *
 * @see {@link GET_DomainForwardsByHostname_Response} - The main response type definition
 * @see {@link HTTPValidationError} - The actual schema type definition
 */
export type GET_DomainForwardsByHostname_Response_422 = HTTPValidationError

/**
 * Response types for POST DomainForwardsByHostname endpoint
 *
 * Create domain forward set
 * Creates a new domain forward set for a specific protocol (HTTP or HTTPS). Raises an error if the set already exists.
 *
 * @remarks
 * This type defines all possible response structures for the POST DomainForwardsByHostname endpoint.
 * Each response code maps to a specific response type as defined in the OpenAPI specification.
 * Use this type to ensure type safety when handling API responses from this endpoint.
 *

 *
 * @path /v1/domain-forwards/{hostname}
 * @param hostname (path) - Hostname
 *
 * @see {@link POST_DomainForwardsByHostname_Response_201} - 201 response type
 * @see {@link POST_DomainForwardsByHostname_Response_401} - 401 response type
 * @see {@link POST_DomainForwardsByHostname_Response_403} - 403 response type
 * @see {@link POST_DomainForwardsByHostname_Response_404} - 404 response type
 * @see {@link POST_DomainForwardsByHostname_Response_409} - 409 response type
 * @see {@link POST_DomainForwardsByHostname_Response_422} - 422 response type
 *

 */
export type POST_DomainForwardsByHostname_Response = POST_DomainForwardsByHostname_Response_201 | POST_DomainForwardsByHostname_Response_401 | POST_DomainForwardsByHostname_Response_403 | POST_DomainForwardsByHostname_Response_404 | POST_DomainForwardsByHostname_Response_409 | POST_DomainForwardsByHostname_Response_422;

/**
 * 201 response for POST DomainForwardsByHostname endpoint
 *
 * @remarks
 * This type defines the response structure for the 201 status code
 * of the POST DomainForwardsByHostname endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/domain-forwards/{hostname}
 * @param hostname (path) - Hostname
 *
 * @see {@link POST_DomainForwardsByHostname_Response} - The main response type definition
 * @see {@link DomainForwardSet} - The actual schema type definition
 */
export type POST_DomainForwardsByHostname_Response_201 = DomainForwardSet

/**
 * 401 response for POST DomainForwardsByHostname endpoint
 *
 * @remarks
 * This type defines the response structure for the 401 status code
 * of the POST DomainForwardsByHostname endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/domain-forwards/{hostname}
 * @param hostname (path) - Hostname
 *
 * @see {@link POST_DomainForwardsByHostname_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type POST_DomainForwardsByHostname_Response_401 = Problem

/**
 * 403 response for POST DomainForwardsByHostname endpoint
 *
 * @remarks
 * This type defines the response structure for the 403 status code
 * of the POST DomainForwardsByHostname endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/domain-forwards/{hostname}
 * @param hostname (path) - Hostname
 *
 * @see {@link POST_DomainForwardsByHostname_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type POST_DomainForwardsByHostname_Response_403 = Problem

/**
 * 404 response for POST DomainForwardsByHostname endpoint
 *
 * @remarks
 * This type defines the response structure for the 404 status code
 * of the POST DomainForwardsByHostname endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/domain-forwards/{hostname}
 * @param hostname (path) - Hostname
 *
 * @see {@link POST_DomainForwardsByHostname_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type POST_DomainForwardsByHostname_Response_404 = Problem

/**
 * 409 response for POST DomainForwardsByHostname endpoint
 *
 * @remarks
 * This type defines the response structure for the 409 status code
 * of the POST DomainForwardsByHostname endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/domain-forwards/{hostname}
 * @param hostname (path) - Hostname
 *
 * @see {@link POST_DomainForwardsByHostname_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type POST_DomainForwardsByHostname_Response_409 = Problem

/**
 * 422 response for POST DomainForwardsByHostname endpoint
 *
 * @remarks
 * This type defines the response structure for the 422 status code
 * of the POST DomainForwardsByHostname endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/domain-forwards/{hostname}
 * @param hostname (path) - Hostname
 *
 * @see {@link POST_DomainForwardsByHostname_Response} - The main response type definition
 * @see {@link HTTPValidationError} - The actual schema type definition
 */
export type POST_DomainForwardsByHostname_Response_422 = HTTPValidationError

/**
 * Response types for DELETE DomainForwardsByHostnameByProtocol endpoint
 *
 * Delete domain forward set
 * Deletes a domain forward set for a specific protocol (HTTP or HTTPS).
 *
 * @remarks
 * This type defines all possible response structures for the DELETE DomainForwardsByHostnameByProtocol endpoint.
 * Each response code maps to a specific response type as defined in the OpenAPI specification.
 * Use this type to ensure type safety when handling API responses from this endpoint.
 *

 *
 * @path /v1/domain-forwards/{hostname}/{protocol}
 * @param hostname (path) - Hostname
 *
 * @see {@link DELETE_DomainForwardsByHostnameByProtocol_Response_401} - 401 response type
 * @see {@link DELETE_DomainForwardsByHostnameByProtocol_Response_403} - 403 response type
 * @see {@link DELETE_DomainForwardsByHostnameByProtocol_Response_404} - 404 response type
 * @see {@link DELETE_DomainForwardsByHostnameByProtocol_Response_422} - 422 response type
 *

 */
export type DELETE_DomainForwardsByHostnameByProtocol_Response = DELETE_DomainForwardsByHostnameByProtocol_Response_401 | DELETE_DomainForwardsByHostnameByProtocol_Response_403 | DELETE_DomainForwardsByHostnameByProtocol_Response_404 | DELETE_DomainForwardsByHostnameByProtocol_Response_422;

/**
 * 401 response for DELETE DomainForwardsByHostnameByProtocol endpoint
 *
 * @remarks
 * This type defines the response structure for the 401 status code
 * of the DELETE DomainForwardsByHostnameByProtocol endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/domain-forwards/{hostname}/{protocol}
 * @param hostname (path) - Hostname
 *
 * @see {@link DELETE_DomainForwardsByHostnameByProtocol_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type DELETE_DomainForwardsByHostnameByProtocol_Response_401 = Problem

/**
 * 403 response for DELETE DomainForwardsByHostnameByProtocol endpoint
 *
 * @remarks
 * This type defines the response structure for the 403 status code
 * of the DELETE DomainForwardsByHostnameByProtocol endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/domain-forwards/{hostname}/{protocol}
 * @param hostname (path) - Hostname
 *
 * @see {@link DELETE_DomainForwardsByHostnameByProtocol_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type DELETE_DomainForwardsByHostnameByProtocol_Response_403 = Problem

/**
 * 404 response for DELETE DomainForwardsByHostnameByProtocol endpoint
 *
 * @remarks
 * This type defines the response structure for the 404 status code
 * of the DELETE DomainForwardsByHostnameByProtocol endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/domain-forwards/{hostname}/{protocol}
 * @param hostname (path) - Hostname
 *
 * @see {@link DELETE_DomainForwardsByHostnameByProtocol_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type DELETE_DomainForwardsByHostnameByProtocol_Response_404 = Problem

/**
 * 422 response for DELETE DomainForwardsByHostnameByProtocol endpoint
 *
 * @remarks
 * This type defines the response structure for the 422 status code
 * of the DELETE DomainForwardsByHostnameByProtocol endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/domain-forwards/{hostname}/{protocol}
 * @param hostname (path) - Hostname
 *
 * @see {@link DELETE_DomainForwardsByHostnameByProtocol_Response} - The main response type definition
 * @see {@link HTTPValidationError} - The actual schema type definition
 */
export type DELETE_DomainForwardsByHostnameByProtocol_Response_422 = HTTPValidationError

/**
 * Response types for GET DomainForwardsByHostnameByProtocol endpoint
 *
 * Get domain forward set
 * Retrieves all redirects for a specific protocol (HTTP or HTTPS) for the specified hostname
 *
 * @remarks
 * This type defines all possible response structures for the GET DomainForwardsByHostnameByProtocol endpoint.
 * Each response code maps to a specific response type as defined in the OpenAPI specification.
 * Use this type to ensure type safety when handling API responses from this endpoint.
 *

 *
 * @path /v1/domain-forwards/{hostname}/{protocol}
 * @param hostname (path) - Hostname
 *
 * @see {@link GET_DomainForwardsByHostnameByProtocol_Response_200} - 200 response type
 * @see {@link GET_DomainForwardsByHostnameByProtocol_Response_401} - 401 response type
 * @see {@link GET_DomainForwardsByHostnameByProtocol_Response_403} - 403 response type
 * @see {@link GET_DomainForwardsByHostnameByProtocol_Response_404} - 404 response type
 * @see {@link GET_DomainForwardsByHostnameByProtocol_Response_422} - 422 response type
 *

 */
export type GET_DomainForwardsByHostnameByProtocol_Response = GET_DomainForwardsByHostnameByProtocol_Response_200 | GET_DomainForwardsByHostnameByProtocol_Response_401 | GET_DomainForwardsByHostnameByProtocol_Response_403 | GET_DomainForwardsByHostnameByProtocol_Response_404 | GET_DomainForwardsByHostnameByProtocol_Response_422;

/**
 * 200 response for GET DomainForwardsByHostnameByProtocol endpoint
 *
 * @remarks
 * This type defines the response structure for the 200 status code
 * of the GET DomainForwardsByHostnameByProtocol endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/domain-forwards/{hostname}/{protocol}
 * @param hostname (path) - Hostname
 *
 * @see {@link GET_DomainForwardsByHostnameByProtocol_Response} - The main response type definition
 * @see {@link DomainForwardSet} - The actual schema type definition
 */
export type GET_DomainForwardsByHostnameByProtocol_Response_200 = DomainForwardSet

/**
 * 401 response for GET DomainForwardsByHostnameByProtocol endpoint
 *
 * @remarks
 * This type defines the response structure for the 401 status code
 * of the GET DomainForwardsByHostnameByProtocol endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/domain-forwards/{hostname}/{protocol}
 * @param hostname (path) - Hostname
 *
 * @see {@link GET_DomainForwardsByHostnameByProtocol_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type GET_DomainForwardsByHostnameByProtocol_Response_401 = Problem

/**
 * 403 response for GET DomainForwardsByHostnameByProtocol endpoint
 *
 * @remarks
 * This type defines the response structure for the 403 status code
 * of the GET DomainForwardsByHostnameByProtocol endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/domain-forwards/{hostname}/{protocol}
 * @param hostname (path) - Hostname
 *
 * @see {@link GET_DomainForwardsByHostnameByProtocol_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type GET_DomainForwardsByHostnameByProtocol_Response_403 = Problem

/**
 * 404 response for GET DomainForwardsByHostnameByProtocol endpoint
 *
 * @remarks
 * This type defines the response structure for the 404 status code
 * of the GET DomainForwardsByHostnameByProtocol endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/domain-forwards/{hostname}/{protocol}
 * @param hostname (path) - Hostname
 *
 * @see {@link GET_DomainForwardsByHostnameByProtocol_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type GET_DomainForwardsByHostnameByProtocol_Response_404 = Problem

/**
 * 422 response for GET DomainForwardsByHostnameByProtocol endpoint
 *
 * @remarks
 * This type defines the response structure for the 422 status code
 * of the GET DomainForwardsByHostnameByProtocol endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/domain-forwards/{hostname}/{protocol}
 * @param hostname (path) - Hostname
 *
 * @see {@link GET_DomainForwardsByHostnameByProtocol_Response} - The main response type definition
 * @see {@link HTTPValidationError} - The actual schema type definition
 */
export type GET_DomainForwardsByHostnameByProtocol_Response_422 = HTTPValidationError

/**
 * Response types for POST DomainForwardsByHostnameByProtocol endpoint
 *
 * Create domain forward set (deprecated)
 * Deprecated: Use POST /{hostname} with protocol in body instead. Creates a new domain forward set for a specific protocol (HTTP or HTTPS).
 *
 * @remarks
 * This type defines all possible response structures for the POST DomainForwardsByHostnameByProtocol endpoint.
 * Each response code maps to a specific response type as defined in the OpenAPI specification.
 * Use this type to ensure type safety when handling API responses from this endpoint.
 *

 *
 * @path /v1/domain-forwards/{hostname}/{protocol}
 * @param hostname (path) - Hostname
 *
 * @see {@link POST_DomainForwardsByHostnameByProtocol_Response_201} - 201 response type
 * @see {@link POST_DomainForwardsByHostnameByProtocol_Response_401} - 401 response type
 * @see {@link POST_DomainForwardsByHostnameByProtocol_Response_403} - 403 response type
 * @see {@link POST_DomainForwardsByHostnameByProtocol_Response_404} - 404 response type
 * @see {@link POST_DomainForwardsByHostnameByProtocol_Response_409} - 409 response type
 * @see {@link POST_DomainForwardsByHostnameByProtocol_Response_422} - 422 response type
 *

 */
export type POST_DomainForwardsByHostnameByProtocol_Response = POST_DomainForwardsByHostnameByProtocol_Response_201 | POST_DomainForwardsByHostnameByProtocol_Response_401 | POST_DomainForwardsByHostnameByProtocol_Response_403 | POST_DomainForwardsByHostnameByProtocol_Response_404 | POST_DomainForwardsByHostnameByProtocol_Response_409 | POST_DomainForwardsByHostnameByProtocol_Response_422;

/**
 * 201 response for POST DomainForwardsByHostnameByProtocol endpoint
 *
 * @remarks
 * This type defines the response structure for the 201 status code
 * of the POST DomainForwardsByHostnameByProtocol endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/domain-forwards/{hostname}/{protocol}
 * @param hostname (path) - Hostname
 *
 * @see {@link POST_DomainForwardsByHostnameByProtocol_Response} - The main response type definition
 * @see {@link DomainForwardSet} - The actual schema type definition
 */
export type POST_DomainForwardsByHostnameByProtocol_Response_201 = DomainForwardSet

/**
 * 401 response for POST DomainForwardsByHostnameByProtocol endpoint
 *
 * @remarks
 * This type defines the response structure for the 401 status code
 * of the POST DomainForwardsByHostnameByProtocol endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/domain-forwards/{hostname}/{protocol}
 * @param hostname (path) - Hostname
 *
 * @see {@link POST_DomainForwardsByHostnameByProtocol_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type POST_DomainForwardsByHostnameByProtocol_Response_401 = Problem

/**
 * 403 response for POST DomainForwardsByHostnameByProtocol endpoint
 *
 * @remarks
 * This type defines the response structure for the 403 status code
 * of the POST DomainForwardsByHostnameByProtocol endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/domain-forwards/{hostname}/{protocol}
 * @param hostname (path) - Hostname
 *
 * @see {@link POST_DomainForwardsByHostnameByProtocol_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type POST_DomainForwardsByHostnameByProtocol_Response_403 = Problem

/**
 * 404 response for POST DomainForwardsByHostnameByProtocol endpoint
 *
 * @remarks
 * This type defines the response structure for the 404 status code
 * of the POST DomainForwardsByHostnameByProtocol endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/domain-forwards/{hostname}/{protocol}
 * @param hostname (path) - Hostname
 *
 * @see {@link POST_DomainForwardsByHostnameByProtocol_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type POST_DomainForwardsByHostnameByProtocol_Response_404 = Problem

/**
 * 409 response for POST DomainForwardsByHostnameByProtocol endpoint
 *
 * @remarks
 * This type defines the response structure for the 409 status code
 * of the POST DomainForwardsByHostnameByProtocol endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/domain-forwards/{hostname}/{protocol}
 * @param hostname (path) - Hostname
 *
 * @see {@link POST_DomainForwardsByHostnameByProtocol_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type POST_DomainForwardsByHostnameByProtocol_Response_409 = Problem

/**
 * 422 response for POST DomainForwardsByHostnameByProtocol endpoint
 *
 * @remarks
 * This type defines the response structure for the 422 status code
 * of the POST DomainForwardsByHostnameByProtocol endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/domain-forwards/{hostname}/{protocol}
 * @param hostname (path) - Hostname
 *
 * @see {@link POST_DomainForwardsByHostnameByProtocol_Response} - The main response type definition
 * @see {@link HTTPValidationError} - The actual schema type definition
 */
export type POST_DomainForwardsByHostnameByProtocol_Response_422 = HTTPValidationError

/**
 * Response types for PUT DomainForwardsByHostnameByProtocol endpoint
 *
 * Update domain forward set
 * Updates an existing domain forward set for a specific protocol (HTTP or HTTPS). All existing redirects for this protocol are replaced with the provided redirects. Raises an error if the set does not exist.
 *
 * @remarks
 * This type defines all possible response structures for the PUT DomainForwardsByHostnameByProtocol endpoint.
 * Each response code maps to a specific response type as defined in the OpenAPI specification.
 * Use this type to ensure type safety when handling API responses from this endpoint.
 *

 *
 * @path /v1/domain-forwards/{hostname}/{protocol}
 * @param hostname (path) - Hostname
 *
 * @see {@link PUT_DomainForwardsByHostnameByProtocol_Response_200} - 200 response type
 * @see {@link PUT_DomainForwardsByHostnameByProtocol_Response_401} - 401 response type
 * @see {@link PUT_DomainForwardsByHostnameByProtocol_Response_403} - 403 response type
 * @see {@link PUT_DomainForwardsByHostnameByProtocol_Response_404} - 404 response type
 * @see {@link PUT_DomainForwardsByHostnameByProtocol_Response_422} - 422 response type
 *

 */
export type PUT_DomainForwardsByHostnameByProtocol_Response = PUT_DomainForwardsByHostnameByProtocol_Response_200 | PUT_DomainForwardsByHostnameByProtocol_Response_401 | PUT_DomainForwardsByHostnameByProtocol_Response_403 | PUT_DomainForwardsByHostnameByProtocol_Response_404 | PUT_DomainForwardsByHostnameByProtocol_Response_422;

/**
 * 200 response for PUT DomainForwardsByHostnameByProtocol endpoint
 *
 * @remarks
 * This type defines the response structure for the 200 status code
 * of the PUT DomainForwardsByHostnameByProtocol endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/domain-forwards/{hostname}/{protocol}
 * @param hostname (path) - Hostname
 *
 * @see {@link PUT_DomainForwardsByHostnameByProtocol_Response} - The main response type definition
 * @see {@link DomainForwardSet} - The actual schema type definition
 */
export type PUT_DomainForwardsByHostnameByProtocol_Response_200 = DomainForwardSet

/**
 * 401 response for PUT DomainForwardsByHostnameByProtocol endpoint
 *
 * @remarks
 * This type defines the response structure for the 401 status code
 * of the PUT DomainForwardsByHostnameByProtocol endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/domain-forwards/{hostname}/{protocol}
 * @param hostname (path) - Hostname
 *
 * @see {@link PUT_DomainForwardsByHostnameByProtocol_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type PUT_DomainForwardsByHostnameByProtocol_Response_401 = Problem

/**
 * 403 response for PUT DomainForwardsByHostnameByProtocol endpoint
 *
 * @remarks
 * This type defines the response structure for the 403 status code
 * of the PUT DomainForwardsByHostnameByProtocol endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/domain-forwards/{hostname}/{protocol}
 * @param hostname (path) - Hostname
 *
 * @see {@link PUT_DomainForwardsByHostnameByProtocol_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type PUT_DomainForwardsByHostnameByProtocol_Response_403 = Problem

/**
 * 404 response for PUT DomainForwardsByHostnameByProtocol endpoint
 *
 * @remarks
 * This type defines the response structure for the 404 status code
 * of the PUT DomainForwardsByHostnameByProtocol endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/domain-forwards/{hostname}/{protocol}
 * @param hostname (path) - Hostname
 *
 * @see {@link PUT_DomainForwardsByHostnameByProtocol_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type PUT_DomainForwardsByHostnameByProtocol_Response_404 = Problem

/**
 * 422 response for PUT DomainForwardsByHostnameByProtocol endpoint
 *
 * @remarks
 * This type defines the response structure for the 422 status code
 * of the PUT DomainForwardsByHostnameByProtocol endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/domain-forwards/{hostname}/{protocol}
 * @param hostname (path) - Hostname
 *
 * @see {@link PUT_DomainForwardsByHostnameByProtocol_Response} - The main response type definition
 * @see {@link HTTPValidationError} - The actual schema type definition
 */
export type PUT_DomainForwardsByHostnameByProtocol_Response_422 = HTTPValidationError

/**
 * Response types for PATCH DomainForwardsByHostnameDisable endpoint
 *
 * Disable domain forward
 * Disables domain forwarding by removing DNS records. The domain forward configuration is preserved but disabled.
 *
 * @remarks
 * This type defines all possible response structures for the PATCH DomainForwardsByHostnameDisable endpoint.
 * Each response code maps to a specific response type as defined in the OpenAPI specification.
 * Use this type to ensure type safety when handling API responses from this endpoint.
 *

 *
 * @path /v1/domain-forwards/{hostname}/disable
 * @param hostname (path) - Hostname
 *
 * @see {@link PATCH_DomainForwardsByHostnameDisable_Response_401} - 401 response type
 * @see {@link PATCH_DomainForwardsByHostnameDisable_Response_403} - 403 response type
 * @see {@link PATCH_DomainForwardsByHostnameDisable_Response_422} - 422 response type
 *

 */
export type PATCH_DomainForwardsByHostnameDisable_Response = PATCH_DomainForwardsByHostnameDisable_Response_401 | PATCH_DomainForwardsByHostnameDisable_Response_403 | PATCH_DomainForwardsByHostnameDisable_Response_422;

/**
 * 401 response for PATCH DomainForwardsByHostnameDisable endpoint
 *
 * @remarks
 * This type defines the response structure for the 401 status code
 * of the PATCH DomainForwardsByHostnameDisable endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/domain-forwards/{hostname}/disable
 * @param hostname (path) - Hostname
 *
 * @see {@link PATCH_DomainForwardsByHostnameDisable_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type PATCH_DomainForwardsByHostnameDisable_Response_401 = Problem

/**
 * 403 response for PATCH DomainForwardsByHostnameDisable endpoint
 *
 * @remarks
 * This type defines the response structure for the 403 status code
 * of the PATCH DomainForwardsByHostnameDisable endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/domain-forwards/{hostname}/disable
 * @param hostname (path) - Hostname
 *
 * @see {@link PATCH_DomainForwardsByHostnameDisable_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type PATCH_DomainForwardsByHostnameDisable_Response_403 = Problem

/**
 * 422 response for PATCH DomainForwardsByHostnameDisable endpoint
 *
 * @remarks
 * This type defines the response structure for the 422 status code
 * of the PATCH DomainForwardsByHostnameDisable endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/domain-forwards/{hostname}/disable
 * @param hostname (path) - Hostname
 *
 * @see {@link PATCH_DomainForwardsByHostnameDisable_Response} - The main response type definition
 * @see {@link HTTPValidationError} - The actual schema type definition
 */
export type PATCH_DomainForwardsByHostnameDisable_Response_422 = HTTPValidationError

/**
 * Response types for PATCH DomainForwardsByHostnameEnable endpoint
 *
 * Enable domain forward
 * Enables domain forwarding by creating necessary DNS records
 *
 * @remarks
 * This type defines all possible response structures for the PATCH DomainForwardsByHostnameEnable endpoint.
 * Each response code maps to a specific response type as defined in the OpenAPI specification.
 * Use this type to ensure type safety when handling API responses from this endpoint.
 *

 *
 * @path /v1/domain-forwards/{hostname}/enable
 * @param hostname (path) - Hostname
 *
 * @see {@link PATCH_DomainForwardsByHostnameEnable_Response_400} - 400 response type
 * @see {@link PATCH_DomainForwardsByHostnameEnable_Response_401} - 401 response type
 * @see {@link PATCH_DomainForwardsByHostnameEnable_Response_403} - 403 response type
 * @see {@link PATCH_DomainForwardsByHostnameEnable_Response_422} - 422 response type
 *

 */
export type PATCH_DomainForwardsByHostnameEnable_Response = PATCH_DomainForwardsByHostnameEnable_Response_400 | PATCH_DomainForwardsByHostnameEnable_Response_401 | PATCH_DomainForwardsByHostnameEnable_Response_403 | PATCH_DomainForwardsByHostnameEnable_Response_422;

/**
 * 400 response for PATCH DomainForwardsByHostnameEnable endpoint
 *
 * @remarks
 * This type defines the response structure for the 400 status code
 * of the PATCH DomainForwardsByHostnameEnable endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/domain-forwards/{hostname}/enable
 * @param hostname (path) - Hostname
 *
 * @see {@link PATCH_DomainForwardsByHostnameEnable_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type PATCH_DomainForwardsByHostnameEnable_Response_400 = Problem

/**
 * 401 response for PATCH DomainForwardsByHostnameEnable endpoint
 *
 * @remarks
 * This type defines the response structure for the 401 status code
 * of the PATCH DomainForwardsByHostnameEnable endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/domain-forwards/{hostname}/enable
 * @param hostname (path) - Hostname
 *
 * @see {@link PATCH_DomainForwardsByHostnameEnable_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type PATCH_DomainForwardsByHostnameEnable_Response_401 = Problem

/**
 * 403 response for PATCH DomainForwardsByHostnameEnable endpoint
 *
 * @remarks
 * This type defines the response structure for the 403 status code
 * of the PATCH DomainForwardsByHostnameEnable endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/domain-forwards/{hostname}/enable
 * @param hostname (path) - Hostname
 *
 * @see {@link PATCH_DomainForwardsByHostnameEnable_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type PATCH_DomainForwardsByHostnameEnable_Response_403 = Problem

/**
 * 422 response for PATCH DomainForwardsByHostnameEnable endpoint
 *
 * @remarks
 * This type defines the response structure for the 422 status code
 * of the PATCH DomainForwardsByHostnameEnable endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/domain-forwards/{hostname}/enable
 * @param hostname (path) - Hostname
 *
 * @see {@link PATCH_DomainForwardsByHostnameEnable_Response} - The main response type definition
 * @see {@link HTTPValidationError} - The actual schema type definition
 */
export type PATCH_DomainForwardsByHostnameEnable_Response_422 = HTTPValidationError

/**
 * Response types for GET DomainForwardsMetrics endpoint
 *
 * Metrics
 *
 * @remarks
 * This type defines all possible response structures for the GET DomainForwardsMetrics endpoint.
 * Each response code maps to a specific response type as defined in the OpenAPI specification.
 * Use this type to ensure type safety when handling API responses from this endpoint.
 *

 *
 * @path /v1/domain-forwards/metrics
 * @param protocol (query) - Filter by protocol: http or https
 * @param time_range (query) - Time range: 1h, 1d, 7d, or 30d
 *
 * @see {@link GET_DomainForwardsMetrics_Response_200} - 200 response type
 * @see {@link GET_DomainForwardsMetrics_Response_422} - 422 response type
 *

 */
export type GET_DomainForwardsMetrics_Response = GET_DomainForwardsMetrics_Response_200 | GET_DomainForwardsMetrics_Response_422;

/**
 * 200 response for GET DomainForwardsMetrics endpoint
 *
 * @remarks
 * This type defines the response structure for the 200 status code
 * of the GET DomainForwardsMetrics endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/domain-forwards/metrics
 * @param protocol (query) - Filter by protocol: http or https
 * @param time_range (query) - Time range: 1h, 1d, 7d, or 30d
 *
 * @see {@link GET_DomainForwardsMetrics_Response} - The main response type definition
 * @see {@link DomainForwardMetrics} - The actual schema type definition
 */
export type GET_DomainForwardsMetrics_Response_200 = DomainForwardMetrics

/**
 * 422 response for GET DomainForwardsMetrics endpoint
 *
 * @remarks
 * This type defines the response structure for the 422 status code
 * of the GET DomainForwardsMetrics endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/domain-forwards/metrics
 * @param protocol (query) - Filter by protocol: http or https
 * @param time_range (query) - Time range: 1h, 1d, 7d, or 30d
 *
 * @see {@link GET_DomainForwardsMetrics_Response} - The main response type definition
 * @see {@link HTTPValidationError} - The actual schema type definition
 */
export type GET_DomainForwardsMetrics_Response_422 = HTTPValidationError

/**
 * Response types for GET DomainForwardsMetricsBrowser endpoint
 *
 * Browser Stats
 *
 * @remarks
 * This type defines all possible response structures for the GET DomainForwardsMetricsBrowser endpoint.
 * Each response code maps to a specific response type as defined in the OpenAPI specification.
 * Use this type to ensure type safety when handling API responses from this endpoint.
 *

 *
 * @path /v1/domain-forwards/metrics/browser
 * @param protocol (query) - Filter by protocol: http or https
 * @param time_range (query) - Time range: 1h, 1d, 7d, or 30d
 *
 * @see {@link GET_DomainForwardsMetricsBrowser_Response_200} - 200 response type
 * @see {@link GET_DomainForwardsMetricsBrowser_Response_422} - 422 response type
 *

 */
export type GET_DomainForwardsMetricsBrowser_Response = GET_DomainForwardsMetricsBrowser_Response_200 | GET_DomainForwardsMetricsBrowser_Response_422;

/**
 * 200 response for GET DomainForwardsMetricsBrowser endpoint
 *
 * @remarks
 * This type defines the response structure for the 200 status code
 * of the GET DomainForwardsMetricsBrowser endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/domain-forwards/metrics/browser
 * @param protocol (query) - Filter by protocol: http or https
 * @param time_range (query) - Time range: 1h, 1d, 7d, or 30d
 *
 * @see {@link GET_DomainForwardsMetricsBrowser_Response} - The main response type definition
 * @see {@link DomainForwardBrowserStats} - The actual schema type definition
 */
export type GET_DomainForwardsMetricsBrowser_Response_200 = DomainForwardBrowserStats

/**
 * 422 response for GET DomainForwardsMetricsBrowser endpoint
 *
 * @remarks
 * This type defines the response structure for the 422 status code
 * of the GET DomainForwardsMetricsBrowser endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/domain-forwards/metrics/browser
 * @param protocol (query) - Filter by protocol: http or https
 * @param time_range (query) - Time range: 1h, 1d, 7d, or 30d
 *
 * @see {@link GET_DomainForwardsMetricsBrowser_Response} - The main response type definition
 * @see {@link HTTPValidationError} - The actual schema type definition
 */
export type GET_DomainForwardsMetricsBrowser_Response_422 = HTTPValidationError

/**
 * Response types for GET DomainForwardsMetricsGeo endpoint
 *
 * Geo Stats
 *
 * @remarks
 * This type defines all possible response structures for the GET DomainForwardsMetricsGeo endpoint.
 * Each response code maps to a specific response type as defined in the OpenAPI specification.
 * Use this type to ensure type safety when handling API responses from this endpoint.
 *

 *
 * @path /v1/domain-forwards/metrics/geo
 * @param protocol (query) - Filter by protocol: http or https
 * @param time_range (query) - Time range: 1h, 1d, 7d, or 30d
 *
 * @see {@link GET_DomainForwardsMetricsGeo_Response_200} - 200 response type
 * @see {@link GET_DomainForwardsMetricsGeo_Response_422} - 422 response type
 *

 */
export type GET_DomainForwardsMetricsGeo_Response = GET_DomainForwardsMetricsGeo_Response_200 | GET_DomainForwardsMetricsGeo_Response_422;

/**
 * 200 response for GET DomainForwardsMetricsGeo endpoint
 *
 * @remarks
 * This type defines the response structure for the 200 status code
 * of the GET DomainForwardsMetricsGeo endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/domain-forwards/metrics/geo
 * @param protocol (query) - Filter by protocol: http or https
 * @param time_range (query) - Time range: 1h, 1d, 7d, or 30d
 *
 * @see {@link GET_DomainForwardsMetricsGeo_Response} - The main response type definition
 * @see {@link DomainForwardGeoStats} - The actual schema type definition
 */
export type GET_DomainForwardsMetricsGeo_Response_200 = DomainForwardGeoStats

/**
 * 422 response for GET DomainForwardsMetricsGeo endpoint
 *
 * @remarks
 * This type defines the response structure for the 422 status code
 * of the GET DomainForwardsMetricsGeo endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/domain-forwards/metrics/geo
 * @param protocol (query) - Filter by protocol: http or https
 * @param time_range (query) - Time range: 1h, 1d, 7d, or 30d
 *
 * @see {@link GET_DomainForwardsMetricsGeo_Response} - The main response type definition
 * @see {@link HTTPValidationError} - The actual schema type definition
 */
export type GET_DomainForwardsMetricsGeo_Response_422 = HTTPValidationError

/**
 * Response types for GET DomainForwardsMetricsPlatform endpoint
 *
 * Platform Stats
 *
 * @remarks
 * This type defines all possible response structures for the GET DomainForwardsMetricsPlatform endpoint.
 * Each response code maps to a specific response type as defined in the OpenAPI specification.
 * Use this type to ensure type safety when handling API responses from this endpoint.
 *

 *
 * @path /v1/domain-forwards/metrics/platform
 * @param protocol (query) - Filter by protocol: http or https
 * @param time_range (query) - Time range: 1h, 1d, 7d, or 30d
 *
 * @see {@link GET_DomainForwardsMetricsPlatform_Response_200} - 200 response type
 * @see {@link GET_DomainForwardsMetricsPlatform_Response_422} - 422 response type
 *

 */
export type GET_DomainForwardsMetricsPlatform_Response = GET_DomainForwardsMetricsPlatform_Response_200 | GET_DomainForwardsMetricsPlatform_Response_422;

/**
 * 200 response for GET DomainForwardsMetricsPlatform endpoint
 *
 * @remarks
 * This type defines the response structure for the 200 status code
 * of the GET DomainForwardsMetricsPlatform endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/domain-forwards/metrics/platform
 * @param protocol (query) - Filter by protocol: http or https
 * @param time_range (query) - Time range: 1h, 1d, 7d, or 30d
 *
 * @see {@link GET_DomainForwardsMetricsPlatform_Response} - The main response type definition
 * @see {@link DomainForwardPlatformStats} - The actual schema type definition
 */
export type GET_DomainForwardsMetricsPlatform_Response_200 = DomainForwardPlatformStats

/**
 * 422 response for GET DomainForwardsMetricsPlatform endpoint
 *
 * @remarks
 * This type defines the response structure for the 422 status code
 * of the GET DomainForwardsMetricsPlatform endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/domain-forwards/metrics/platform
 * @param protocol (query) - Filter by protocol: http or https
 * @param time_range (query) - Time range: 1h, 1d, 7d, or 30d
 *
 * @see {@link GET_DomainForwardsMetricsPlatform_Response} - The main response type definition
 * @see {@link HTTPValidationError} - The actual schema type definition
 */
export type GET_DomainForwardsMetricsPlatform_Response_422 = HTTPValidationError

/**
 * Response types for GET DomainForwardsMetricsReferrer endpoint
 *
 * Referrer Stats
 *
 * @remarks
 * This type defines all possible response structures for the GET DomainForwardsMetricsReferrer endpoint.
 * Each response code maps to a specific response type as defined in the OpenAPI specification.
 * Use this type to ensure type safety when handling API responses from this endpoint.
 *

 *
 * @path /v1/domain-forwards/metrics/referrer
 * @param protocol (query) - Filter by protocol: http or https
 * @param time_range (query) - Time range: 1h, 1d, 7d, or 30d
 *
 * @see {@link GET_DomainForwardsMetricsReferrer_Response_200} - 200 response type
 * @see {@link GET_DomainForwardsMetricsReferrer_Response_422} - 422 response type
 *

 */
export type GET_DomainForwardsMetricsReferrer_Response = GET_DomainForwardsMetricsReferrer_Response_200 | GET_DomainForwardsMetricsReferrer_Response_422;

/**
 * 200 response for GET DomainForwardsMetricsReferrer endpoint
 *
 * @remarks
 * This type defines the response structure for the 200 status code
 * of the GET DomainForwardsMetricsReferrer endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/domain-forwards/metrics/referrer
 * @param protocol (query) - Filter by protocol: http or https
 * @param time_range (query) - Time range: 1h, 1d, 7d, or 30d
 *
 * @see {@link GET_DomainForwardsMetricsReferrer_Response} - The main response type definition
 * @see {@link DomainForwardReferrerStats} - The actual schema type definition
 */
export type GET_DomainForwardsMetricsReferrer_Response_200 = DomainForwardReferrerStats

/**
 * 422 response for GET DomainForwardsMetricsReferrer endpoint
 *
 * @remarks
 * This type defines the response structure for the 422 status code
 * of the GET DomainForwardsMetricsReferrer endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/domain-forwards/metrics/referrer
 * @param protocol (query) - Filter by protocol: http or https
 * @param time_range (query) - Time range: 1h, 1d, 7d, or 30d
 *
 * @see {@link GET_DomainForwardsMetricsReferrer_Response} - The main response type definition
 * @see {@link HTTPValidationError} - The actual schema type definition
 */
export type GET_DomainForwardsMetricsReferrer_Response_422 = HTTPValidationError

/**
 * Response types for GET DomainForwardsMetricsStatusCode endpoint
 *
 * Status Code Stats
 *
 * @remarks
 * This type defines all possible response structures for the GET DomainForwardsMetricsStatusCode endpoint.
 * Each response code maps to a specific response type as defined in the OpenAPI specification.
 * Use this type to ensure type safety when handling API responses from this endpoint.
 *

 *
 * @path /v1/domain-forwards/metrics/status-code
 * @param protocol (query) - Filter by protocol: http or https
 * @param time_range (query) - Time range: 1h, 1d, 7d, or 30d
 *
 * @see {@link GET_DomainForwardsMetricsStatusCode_Response_200} - 200 response type
 * @see {@link GET_DomainForwardsMetricsStatusCode_Response_422} - 422 response type
 *

 */
export type GET_DomainForwardsMetricsStatusCode_Response = GET_DomainForwardsMetricsStatusCode_Response_200 | GET_DomainForwardsMetricsStatusCode_Response_422;

/**
 * 200 response for GET DomainForwardsMetricsStatusCode endpoint
 *
 * @remarks
 * This type defines the response structure for the 200 status code
 * of the GET DomainForwardsMetricsStatusCode endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/domain-forwards/metrics/status-code
 * @param protocol (query) - Filter by protocol: http or https
 * @param time_range (query) - Time range: 1h, 1d, 7d, or 30d
 *
 * @see {@link GET_DomainForwardsMetricsStatusCode_Response} - The main response type definition
 * @see {@link DomainForwardStatusCodeStats} - The actual schema type definition
 */
export type GET_DomainForwardsMetricsStatusCode_Response_200 = DomainForwardStatusCodeStats

/**
 * 422 response for GET DomainForwardsMetricsStatusCode endpoint
 *
 * @remarks
 * This type defines the response structure for the 422 status code
 * of the GET DomainForwardsMetricsStatusCode endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/domain-forwards/metrics/status-code
 * @param protocol (query) - Filter by protocol: http or https
 * @param time_range (query) - Time range: 1h, 1d, 7d, or 30d
 *
 * @see {@link GET_DomainForwardsMetricsStatusCode_Response} - The main response type definition
 * @see {@link HTTPValidationError} - The actual schema type definition
 */
export type GET_DomainForwardsMetricsStatusCode_Response_422 = HTTPValidationError

/**
 * Response types for GET DomainForwardsMetricsTimeSeries endpoint
 *
 * Time Series
 *
 * @remarks
 * This type defines all possible response structures for the GET DomainForwardsMetricsTimeSeries endpoint.
 * Each response code maps to a specific response type as defined in the OpenAPI specification.
 * Use this type to ensure type safety when handling API responses from this endpoint.
 *

 *
 * @path /v1/domain-forwards/metrics/time-series
 * @param protocol (query) - Filter by protocol: http or https
 * @param time_range (query) - Time range: 1h, 1d, 7d, or 30d
 *
 * @see {@link GET_DomainForwardsMetricsTimeSeries_Response_200} - 200 response type
 * @see {@link GET_DomainForwardsMetricsTimeSeries_Response_422} - 422 response type
 *

 */
export type GET_DomainForwardsMetricsTimeSeries_Response = GET_DomainForwardsMetricsTimeSeries_Response_200 | GET_DomainForwardsMetricsTimeSeries_Response_422;

/**
 * 200 response for GET DomainForwardsMetricsTimeSeries endpoint
 *
 * @remarks
 * This type defines the response structure for the 200 status code
 * of the GET DomainForwardsMetricsTimeSeries endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/domain-forwards/metrics/time-series
 * @param protocol (query) - Filter by protocol: http or https
 * @param time_range (query) - Time range: 1h, 1d, 7d, or 30d
 *
 * @see {@link GET_DomainForwardsMetricsTimeSeries_Response} - The main response type definition
 * @see {@link DomainForwardMetricsTimeSeries} - The actual schema type definition
 */
export type GET_DomainForwardsMetricsTimeSeries_Response_200 = DomainForwardMetricsTimeSeries

/**
 * 422 response for GET DomainForwardsMetricsTimeSeries endpoint
 *
 * @remarks
 * This type defines the response structure for the 422 status code
 * of the GET DomainForwardsMetricsTimeSeries endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/domain-forwards/metrics/time-series
 * @param protocol (query) - Filter by protocol: http or https
 * @param time_range (query) - Time range: 1h, 1d, 7d, or 30d
 *
 * @see {@link GET_DomainForwardsMetricsTimeSeries_Response} - The main response type definition
 * @see {@link HTTPValidationError} - The actual schema type definition
 */
export type GET_DomainForwardsMetricsTimeSeries_Response_422 = HTTPValidationError

/**
 * Response types for GET DomainForwardsMetricsUserAgent endpoint
 *
 * User Agent Stats
 *
 * @remarks
 * This type defines all possible response structures for the GET DomainForwardsMetricsUserAgent endpoint.
 * Each response code maps to a specific response type as defined in the OpenAPI specification.
 * Use this type to ensure type safety when handling API responses from this endpoint.
 *

 *
 * @path /v1/domain-forwards/metrics/user-agent
 * @param protocol (query) - Filter by protocol: http or https
 * @param time_range (query) - Time range: 1h, 1d, 7d, or 30d
 *
 * @see {@link GET_DomainForwardsMetricsUserAgent_Response_200} - 200 response type
 * @see {@link GET_DomainForwardsMetricsUserAgent_Response_422} - 422 response type
 *

 */
export type GET_DomainForwardsMetricsUserAgent_Response = GET_DomainForwardsMetricsUserAgent_Response_200 | GET_DomainForwardsMetricsUserAgent_Response_422;

/**
 * 200 response for GET DomainForwardsMetricsUserAgent endpoint
 *
 * @remarks
 * This type defines the response structure for the 200 status code
 * of the GET DomainForwardsMetricsUserAgent endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/domain-forwards/metrics/user-agent
 * @param protocol (query) - Filter by protocol: http or https
 * @param time_range (query) - Time range: 1h, 1d, 7d, or 30d
 *
 * @see {@link GET_DomainForwardsMetricsUserAgent_Response} - The main response type definition
 * @see {@link DomainForwardUserAgentStats} - The actual schema type definition
 */
export type GET_DomainForwardsMetricsUserAgent_Response_200 = DomainForwardUserAgentStats

/**
 * 422 response for GET DomainForwardsMetricsUserAgent endpoint
 *
 * @remarks
 * This type defines the response structure for the 422 status code
 * of the GET DomainForwardsMetricsUserAgent endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/domain-forwards/metrics/user-agent
 * @param protocol (query) - Filter by protocol: http or https
 * @param time_range (query) - Time range: 1h, 1d, 7d, or 30d
 *
 * @see {@link GET_DomainForwardsMetricsUserAgent_Response} - The main response type definition
 * @see {@link HTTPValidationError} - The actual schema type definition
 */
export type GET_DomainForwardsMetricsUserAgent_Response_422 = HTTPValidationError

/**
 * Response types for GET DomainForwardsMetricsVisitsByKey endpoint
 *
 * Visits By Key
 *
 * @remarks
 * This type defines all possible response structures for the GET DomainForwardsMetricsVisitsByKey endpoint.
 * Each response code maps to a specific response type as defined in the OpenAPI specification.
 * Use this type to ensure type safety when handling API responses from this endpoint.
 *

 *
 * @path /v1/domain-forwards/metrics/visits-by-key
 * @param grouping (query) - Grouping key: url, fqdn, domain, or forward
 * @param protocol (query) - Filter by protocol: http or https
 * @param time_range (query) - Time range: 1h, 1d, 7d, or 30d
 *
 * @see {@link GET_DomainForwardsMetricsVisitsByKey_Response_200} - 200 response type
 * @see {@link GET_DomainForwardsMetricsVisitsByKey_Response_422} - 422 response type
 *

 */
export type GET_DomainForwardsMetricsVisitsByKey_Response = GET_DomainForwardsMetricsVisitsByKey_Response_200 | GET_DomainForwardsMetricsVisitsByKey_Response_422;

/**
 * 200 response for GET DomainForwardsMetricsVisitsByKey endpoint
 *
 * @remarks
 * This type defines the response structure for the 200 status code
 * of the GET DomainForwardsMetricsVisitsByKey endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/domain-forwards/metrics/visits-by-key
 * @param grouping (query) - Grouping key: url, fqdn, domain, or forward
 * @param protocol (query) - Filter by protocol: http or https
 * @param time_range (query) - Time range: 1h, 1d, 7d, or 30d
 *
 * @see {@link GET_DomainForwardsMetricsVisitsByKey_Response} - The main response type definition
 * @see {@link DomainForwardVisitsByKey} - The actual schema type definition
 */
export type GET_DomainForwardsMetricsVisitsByKey_Response_200 = DomainForwardVisitsByKey

/**
 * 422 response for GET DomainForwardsMetricsVisitsByKey endpoint
 *
 * @remarks
 * This type defines the response structure for the 422 status code
 * of the GET DomainForwardsMetricsVisitsByKey endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/domain-forwards/metrics/visits-by-key
 * @param grouping (query) - Grouping key: url, fqdn, domain, or forward
 * @param protocol (query) - Filter by protocol: http or https
 * @param time_range (query) - Time range: 1h, 1d, 7d, or 30d
 *
 * @see {@link GET_DomainForwardsMetricsVisitsByKey_Response} - The main response type definition
 * @see {@link HTTPValidationError} - The actual schema type definition
 */
export type GET_DomainForwardsMetricsVisitsByKey_Response_422 = HTTPValidationError

/**
 * Response types for GET DomainSearchSuggest endpoint
 *
 * Suggest domains
 * Get a list of domain suggestions based on a search query
 *
 * @remarks
 * This type defines all possible response structures for the GET DomainSearchSuggest endpoint.
 * Each response code maps to a specific response type as defined in the OpenAPI specification.
 * Use this type to ensure type safety when handling API responses from this endpoint.
 *

 *
 * @path /v1/domain-search/suggest
 * @param query (query) - The primary keyword or phrase for the domain search
 * @param tlds (query) - The TLDs to include in the search
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
 * @param tlds (query) - The TLDs to include in the search
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
 * @param tlds (query) - The TLDs to include in the search
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
 * @param tlds (query) - The TLDs to include in the search
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
 * @param tlds (query) - The TLDs to include in the search
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
 * @param registry_statuses (query) - Filter domains by registry status. Can be specified multiple times (union of all provided values).
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
 * @param registry_statuses (query) - Filter domains by registry status. Can be specified multiple times (union of all provided values).
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
 * @param registry_statuses (query) - Filter domains by registry status. Can be specified multiple times (union of all provided values).
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
 * Restore an eligible domain (during redemption period)
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
 * @see {@link GET_DomainsSummary_Response_422} - 422 response type
 *

 */
export type GET_DomainsSummary_Response = GET_DomainsSummary_Response_200 | GET_DomainsSummary_Response_422;

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
 * 422 response for GET DomainsSummary endpoint
 *
 * @remarks
 * This type defines the response structure for the 422 status code
 * of the GET DomainsSummary endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/domains/summary
 *
 * @see {@link GET_DomainsSummary_Response} - The main response type definition
 * @see {@link HTTPValidationError} - The actual schema type definition
 */
export type GET_DomainsSummary_Response_422 = HTTPValidationError

/**
 * Response types for POST DomainsTldSpecificAtByDomainReferenceWithdraw endpoint
 *
 * Withdraw a nic.at domain
 *
 * @remarks
 * This type defines all possible response structures for the POST DomainsTldSpecificAtByDomainReferenceWithdraw endpoint.
 * Each response code maps to a specific response type as defined in the OpenAPI specification.
 * Use this type to ensure type safety when handling API responses from this endpoint.
 *

 *
 * @path /v1/domains/tld-specific/at/{domain_reference}/withdraw
 *
 * @see {@link POST_DomainsTldSpecificAtByDomainReferenceWithdraw_Response_200} - 200 response type
 * @see {@link POST_DomainsTldSpecificAtByDomainReferenceWithdraw_Response_404} - 404 response type
 * @see {@link POST_DomainsTldSpecificAtByDomainReferenceWithdraw_Response_422} - 422 response type
 *

 */
export type POST_DomainsTldSpecificAtByDomainReferenceWithdraw_Response = POST_DomainsTldSpecificAtByDomainReferenceWithdraw_Response_200 | POST_DomainsTldSpecificAtByDomainReferenceWithdraw_Response_404 | POST_DomainsTldSpecificAtByDomainReferenceWithdraw_Response_422;

/**
 * 200 response for POST DomainsTldSpecificAtByDomainReferenceWithdraw endpoint
 *
 * @remarks
 * This type defines the response structure for the 200 status code
 * of the POST DomainsTldSpecificAtByDomainReferenceWithdraw endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/domains/tld-specific/at/{domain_reference}/withdraw
 *
 * @see {@link POST_DomainsTldSpecificAtByDomainReferenceWithdraw_Response} - The main response type definition
 * @see {@link DomainWithdraw} - The actual schema type definition
 */
export type POST_DomainsTldSpecificAtByDomainReferenceWithdraw_Response_200 = DomainWithdraw

/**
 * 404 response for POST DomainsTldSpecificAtByDomainReferenceWithdraw endpoint
 *
 * @remarks
 * This type defines the response structure for the 404 status code
 * of the POST DomainsTldSpecificAtByDomainReferenceWithdraw endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/domains/tld-specific/at/{domain_reference}/withdraw
 *
 * @see {@link POST_DomainsTldSpecificAtByDomainReferenceWithdraw_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type POST_DomainsTldSpecificAtByDomainReferenceWithdraw_Response_404 = Problem

/**
 * 422 response for POST DomainsTldSpecificAtByDomainReferenceWithdraw endpoint
 *
 * @remarks
 * This type defines the response structure for the 422 status code
 * of the POST DomainsTldSpecificAtByDomainReferenceWithdraw endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/domains/tld-specific/at/{domain_reference}/withdraw
 *
 * @see {@link POST_DomainsTldSpecificAtByDomainReferenceWithdraw_Response} - The main response type definition
 * @see {@link HTTPValidationError} - The actual schema type definition
 */
export type POST_DomainsTldSpecificAtByDomainReferenceWithdraw_Response_422 = HTTPValidationError

/**
 * Response types for POST DomainsTldSpecificBeByDomainReferenceAuthCodeRequest endpoint
 *
 * Requests your auth code directly from DNS Belgium (registry)
 *
 * @remarks
 * This type defines all possible response structures for the POST DomainsTldSpecificBeByDomainReferenceAuthCodeRequest endpoint.
 * Each response code maps to a specific response type as defined in the OpenAPI specification.
 * Use this type to ensure type safety when handling API responses from this endpoint.
 *

 *
 * @path /v1/domains/tld-specific/be/{domain_reference}/auth_code/request
 *
 * @see {@link POST_DomainsTldSpecificBeByDomainReferenceAuthCodeRequest_Response_200} - 200 response type
 * @see {@link POST_DomainsTldSpecificBeByDomainReferenceAuthCodeRequest_Response_400} - 400 response type
 * @see {@link POST_DomainsTldSpecificBeByDomainReferenceAuthCodeRequest_Response_404} - 404 response type
 * @see {@link POST_DomainsTldSpecificBeByDomainReferenceAuthCodeRequest_Response_422} - 422 response type
 *

 */
export type POST_DomainsTldSpecificBeByDomainReferenceAuthCodeRequest_Response = POST_DomainsTldSpecificBeByDomainReferenceAuthCodeRequest_Response_200 | POST_DomainsTldSpecificBeByDomainReferenceAuthCodeRequest_Response_400 | POST_DomainsTldSpecificBeByDomainReferenceAuthCodeRequest_Response_404 | POST_DomainsTldSpecificBeByDomainReferenceAuthCodeRequest_Response_422;

/**
 * 200 response for POST DomainsTldSpecificBeByDomainReferenceAuthCodeRequest endpoint
 *
 * @remarks
 * This type defines the response structure for the 200 status code
 * of the POST DomainsTldSpecificBeByDomainReferenceAuthCodeRequest endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/domains/tld-specific/be/{domain_reference}/auth_code/request
 *
 * @see {@link POST_DomainsTldSpecificBeByDomainReferenceAuthCodeRequest_Response} - The main response type definition
 * @see {@link RequestAuthcode} - The actual schema type definition
 */
export type POST_DomainsTldSpecificBeByDomainReferenceAuthCodeRequest_Response_200 = RequestAuthcode

/**
 * 400 response for POST DomainsTldSpecificBeByDomainReferenceAuthCodeRequest endpoint
 *
 * @remarks
 * This type defines the response structure for the 400 status code
 * of the POST DomainsTldSpecificBeByDomainReferenceAuthCodeRequest endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/domains/tld-specific/be/{domain_reference}/auth_code/request
 *
 * @see {@link POST_DomainsTldSpecificBeByDomainReferenceAuthCodeRequest_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type POST_DomainsTldSpecificBeByDomainReferenceAuthCodeRequest_Response_400 = Problem

/**
 * 404 response for POST DomainsTldSpecificBeByDomainReferenceAuthCodeRequest endpoint
 *
 * @remarks
 * This type defines the response structure for the 404 status code
 * of the POST DomainsTldSpecificBeByDomainReferenceAuthCodeRequest endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/domains/tld-specific/be/{domain_reference}/auth_code/request
 *
 * @see {@link POST_DomainsTldSpecificBeByDomainReferenceAuthCodeRequest_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type POST_DomainsTldSpecificBeByDomainReferenceAuthCodeRequest_Response_404 = Problem

/**
 * 422 response for POST DomainsTldSpecificBeByDomainReferenceAuthCodeRequest endpoint
 *
 * @remarks
 * This type defines the response structure for the 422 status code
 * of the POST DomainsTldSpecificBeByDomainReferenceAuthCodeRequest endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/domains/tld-specific/be/{domain_reference}/auth_code/request
 *
 * @see {@link POST_DomainsTldSpecificBeByDomainReferenceAuthCodeRequest_Response} - The main response type definition
 * @see {@link HTTPValidationError} - The actual schema type definition
 */
export type POST_DomainsTldSpecificBeByDomainReferenceAuthCodeRequest_Response_422 = HTTPValidationError

/**
 * Response types for POST DomainsTldSpecificDeByDomainReferenceTransit endpoint
 *
 * Transit a DENIC domain
 *
 * @remarks
 * This type defines all possible response structures for the POST DomainsTldSpecificDeByDomainReferenceTransit endpoint.
 * Each response code maps to a specific response type as defined in the OpenAPI specification.
 * Use this type to ensure type safety when handling API responses from this endpoint.
 *

 *
 * @path /v1/domains/tld-specific/de/{domain_reference}/transit
 *
 * @see {@link POST_DomainsTldSpecificDeByDomainReferenceTransit_Response_200} - 200 response type
 * @see {@link POST_DomainsTldSpecificDeByDomainReferenceTransit_Response_404} - 404 response type
 * @see {@link POST_DomainsTldSpecificDeByDomainReferenceTransit_Response_422} - 422 response type
 *

 */
export type POST_DomainsTldSpecificDeByDomainReferenceTransit_Response = POST_DomainsTldSpecificDeByDomainReferenceTransit_Response_200 | POST_DomainsTldSpecificDeByDomainReferenceTransit_Response_404 | POST_DomainsTldSpecificDeByDomainReferenceTransit_Response_422;

/**
 * 200 response for POST DomainsTldSpecificDeByDomainReferenceTransit endpoint
 *
 * @remarks
 * This type defines the response structure for the 200 status code
 * of the POST DomainsTldSpecificDeByDomainReferenceTransit endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/domains/tld-specific/de/{domain_reference}/transit
 *
 * @see {@link POST_DomainsTldSpecificDeByDomainReferenceTransit_Response} - The main response type definition
 * @see {@link DomainTransit} - The actual schema type definition
 */
export type POST_DomainsTldSpecificDeByDomainReferenceTransit_Response_200 = DomainTransit

/**
 * 404 response for POST DomainsTldSpecificDeByDomainReferenceTransit endpoint
 *
 * @remarks
 * This type defines the response structure for the 404 status code
 * of the POST DomainsTldSpecificDeByDomainReferenceTransit endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/domains/tld-specific/de/{domain_reference}/transit
 *
 * @see {@link POST_DomainsTldSpecificDeByDomainReferenceTransit_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type POST_DomainsTldSpecificDeByDomainReferenceTransit_Response_404 = Problem

/**
 * 422 response for POST DomainsTldSpecificDeByDomainReferenceTransit endpoint
 *
 * @remarks
 * This type defines the response structure for the 422 status code
 * of the POST DomainsTldSpecificDeByDomainReferenceTransit endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/domains/tld-specific/de/{domain_reference}/transit
 *
 * @see {@link POST_DomainsTldSpecificDeByDomainReferenceTransit_Response} - The main response type definition
 * @see {@link HTTPValidationError} - The actual schema type definition
 */
export type POST_DomainsTldSpecificDeByDomainReferenceTransit_Response_422 = HTTPValidationError

/**
 * Response types for POST DomainsTldSpecificEuByDomainReferenceAuthCodeRequest endpoint
 *
 * Requests your auth code directly from EURid (registry)
 *
 * @remarks
 * This type defines all possible response structures for the POST DomainsTldSpecificEuByDomainReferenceAuthCodeRequest endpoint.
 * Each response code maps to a specific response type as defined in the OpenAPI specification.
 * Use this type to ensure type safety when handling API responses from this endpoint.
 *

 *
 * @path /v1/domains/tld-specific/eu/{domain_reference}/auth_code/request
 *
 * @see {@link POST_DomainsTldSpecificEuByDomainReferenceAuthCodeRequest_Response_200} - 200 response type
 * @see {@link POST_DomainsTldSpecificEuByDomainReferenceAuthCodeRequest_Response_400} - 400 response type
 * @see {@link POST_DomainsTldSpecificEuByDomainReferenceAuthCodeRequest_Response_404} - 404 response type
 * @see {@link POST_DomainsTldSpecificEuByDomainReferenceAuthCodeRequest_Response_422} - 422 response type
 *

 */
export type POST_DomainsTldSpecificEuByDomainReferenceAuthCodeRequest_Response = POST_DomainsTldSpecificEuByDomainReferenceAuthCodeRequest_Response_200 | POST_DomainsTldSpecificEuByDomainReferenceAuthCodeRequest_Response_400 | POST_DomainsTldSpecificEuByDomainReferenceAuthCodeRequest_Response_404 | POST_DomainsTldSpecificEuByDomainReferenceAuthCodeRequest_Response_422;

/**
 * 200 response for POST DomainsTldSpecificEuByDomainReferenceAuthCodeRequest endpoint
 *
 * @remarks
 * This type defines the response structure for the 200 status code
 * of the POST DomainsTldSpecificEuByDomainReferenceAuthCodeRequest endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/domains/tld-specific/eu/{domain_reference}/auth_code/request
 *
 * @see {@link POST_DomainsTldSpecificEuByDomainReferenceAuthCodeRequest_Response} - The main response type definition
 * @see {@link RequestAuthcode2} - The actual schema type definition
 */
export type POST_DomainsTldSpecificEuByDomainReferenceAuthCodeRequest_Response_200 = RequestAuthcode2

/**
 * 400 response for POST DomainsTldSpecificEuByDomainReferenceAuthCodeRequest endpoint
 *
 * @remarks
 * This type defines the response structure for the 400 status code
 * of the POST DomainsTldSpecificEuByDomainReferenceAuthCodeRequest endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/domains/tld-specific/eu/{domain_reference}/auth_code/request
 *
 * @see {@link POST_DomainsTldSpecificEuByDomainReferenceAuthCodeRequest_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type POST_DomainsTldSpecificEuByDomainReferenceAuthCodeRequest_Response_400 = Problem

/**
 * 404 response for POST DomainsTldSpecificEuByDomainReferenceAuthCodeRequest endpoint
 *
 * @remarks
 * This type defines the response structure for the 404 status code
 * of the POST DomainsTldSpecificEuByDomainReferenceAuthCodeRequest endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/domains/tld-specific/eu/{domain_reference}/auth_code/request
 *
 * @see {@link POST_DomainsTldSpecificEuByDomainReferenceAuthCodeRequest_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type POST_DomainsTldSpecificEuByDomainReferenceAuthCodeRequest_Response_404 = Problem

/**
 * 422 response for POST DomainsTldSpecificEuByDomainReferenceAuthCodeRequest endpoint
 *
 * @remarks
 * This type defines the response structure for the 422 status code
 * of the POST DomainsTldSpecificEuByDomainReferenceAuthCodeRequest endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/domains/tld-specific/eu/{domain_reference}/auth_code/request
 *
 * @see {@link POST_DomainsTldSpecificEuByDomainReferenceAuthCodeRequest_Response} - The main response type definition
 * @see {@link HTTPValidationError} - The actual schema type definition
 */
export type POST_DomainsTldSpecificEuByDomainReferenceAuthCodeRequest_Response_422 = HTTPValidationError

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
 * Response types for GET EmailForwards endpoint
 *
 * List all email forwards
 * Retrieves a paginated list of all email forwards for the organization.
 *
 * @remarks
 * This type defines all possible response structures for the GET EmailForwards endpoint.
 * Each response code maps to a specific response type as defined in the OpenAPI specification.
 * Use this type to ensure type safety when handling API responses from this endpoint.
 *

 *
 * @path /v1/email-forwards
 *
 * @see {@link GET_EmailForwards_Response_200} - 200 response type
 * @see {@link GET_EmailForwards_Response_401} - 401 response type
 * @see {@link GET_EmailForwards_Response_403} - 403 response type
 * @see {@link GET_EmailForwards_Response_422} - 422 response type
 *

 */
export type GET_EmailForwards_Response = GET_EmailForwards_Response_200 | GET_EmailForwards_Response_401 | GET_EmailForwards_Response_403 | GET_EmailForwards_Response_422;

/**
 * 200 response for GET EmailForwards endpoint
 *
 * @remarks
 * This type defines the response structure for the 200 status code
 * of the GET EmailForwards endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/email-forwards
 *
 * @see {@link GET_EmailForwards_Response} - The main response type definition
 * @see {@link Pagination_EmailForward} - The actual schema type definition
 */
export type GET_EmailForwards_Response_200 = Pagination_EmailForward

/**
 * 401 response for GET EmailForwards endpoint
 *
 * @remarks
 * This type defines the response structure for the 401 status code
 * of the GET EmailForwards endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/email-forwards
 *
 * @see {@link GET_EmailForwards_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type GET_EmailForwards_Response_401 = Problem

/**
 * 403 response for GET EmailForwards endpoint
 *
 * @remarks
 * This type defines the response structure for the 403 status code
 * of the GET EmailForwards endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/email-forwards
 *
 * @see {@link GET_EmailForwards_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type GET_EmailForwards_Response_403 = Problem

/**
 * 422 response for GET EmailForwards endpoint
 *
 * @remarks
 * This type defines the response structure for the 422 status code
 * of the GET EmailForwards endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/email-forwards
 *
 * @see {@link GET_EmailForwards_Response} - The main response type definition
 * @see {@link HTTPValidationError} - The actual schema type definition
 */
export type GET_EmailForwards_Response_422 = HTTPValidationError

/**
 * Response types for POST EmailForwards endpoint
 *
 * Create email forward configuration
 * Creates an email forward configuration with optional aliases. Can be created enabled or disabled (default: disabled). Includes created_on and updated_on timestamps.
 *
 * @remarks
 * This type defines all possible response structures for the POST EmailForwards endpoint.
 * Each response code maps to a specific response type as defined in the OpenAPI specification.
 * Use this type to ensure type safety when handling API responses from this endpoint.
 *

 *
 * @path /v1/email-forwards
 *
 * @see {@link POST_EmailForwards_Response_201} - 201 response type
 * @see {@link POST_EmailForwards_Response_401} - 401 response type
 * @see {@link POST_EmailForwards_Response_403} - 403 response type
 * @see {@link POST_EmailForwards_Response_404} - 404 response type
 * @see {@link POST_EmailForwards_Response_409} - 409 response type
 * @see {@link POST_EmailForwards_Response_422} - 422 response type
 *

 */
export type POST_EmailForwards_Response = POST_EmailForwards_Response_201 | POST_EmailForwards_Response_401 | POST_EmailForwards_Response_403 | POST_EmailForwards_Response_404 | POST_EmailForwards_Response_409 | POST_EmailForwards_Response_422;

/**
 * 201 response for POST EmailForwards endpoint
 *
 * @remarks
 * This type defines the response structure for the 201 status code
 * of the POST EmailForwards endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/email-forwards
 *
 * @see {@link POST_EmailForwards_Response} - The main response type definition
 * @see {@link EmailForward} - The actual schema type definition
 */
export type POST_EmailForwards_Response_201 = EmailForward

/**
 * 401 response for POST EmailForwards endpoint
 *
 * @remarks
 * This type defines the response structure for the 401 status code
 * of the POST EmailForwards endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/email-forwards
 *
 * @see {@link POST_EmailForwards_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type POST_EmailForwards_Response_401 = Problem

/**
 * 403 response for POST EmailForwards endpoint
 *
 * @remarks
 * This type defines the response structure for the 403 status code
 * of the POST EmailForwards endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/email-forwards
 *
 * @see {@link POST_EmailForwards_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type POST_EmailForwards_Response_403 = Problem

/**
 * 404 response for POST EmailForwards endpoint
 *
 * @remarks
 * This type defines the response structure for the 404 status code
 * of the POST EmailForwards endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/email-forwards
 *
 * @see {@link POST_EmailForwards_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type POST_EmailForwards_Response_404 = Problem

/**
 * 409 response for POST EmailForwards endpoint
 *
 * @remarks
 * This type defines the response structure for the 409 status code
 * of the POST EmailForwards endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/email-forwards
 *
 * @see {@link POST_EmailForwards_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type POST_EmailForwards_Response_409 = Problem

/**
 * 422 response for POST EmailForwards endpoint
 *
 * @remarks
 * This type defines the response structure for the 422 status code
 * of the POST EmailForwards endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/email-forwards
 *
 * @see {@link POST_EmailForwards_Response} - The main response type definition
 * @see {@link HTTPValidationError} - The actual schema type definition
 */
export type POST_EmailForwards_Response_422 = HTTPValidationError

/**
 * Response types for DELETE EmailForwardsByEmailForwardId endpoint
 *
 * Delete email forward configuration
 * Permanently deletes the email forward configuration including all aliases. If enabled, automatically disables first (removes DNS records and unregisters from ImprovMX).
 *
 * @remarks
 * This type defines all possible response structures for the DELETE EmailForwardsByEmailForwardId endpoint.
 * Each response code maps to a specific response type as defined in the OpenAPI specification.
 * Use this type to ensure type safety when handling API responses from this endpoint.
 *

 *
 * @path /v1/email-forwards/{email_forward_id}
 *
 * @see {@link DELETE_EmailForwardsByEmailForwardId_Response_401} - 401 response type
 * @see {@link DELETE_EmailForwardsByEmailForwardId_Response_403} - 403 response type
 * @see {@link DELETE_EmailForwardsByEmailForwardId_Response_422} - 422 response type
 *

 */
export type DELETE_EmailForwardsByEmailForwardId_Response = DELETE_EmailForwardsByEmailForwardId_Response_401 | DELETE_EmailForwardsByEmailForwardId_Response_403 | DELETE_EmailForwardsByEmailForwardId_Response_422;

/**
 * 401 response for DELETE EmailForwardsByEmailForwardId endpoint
 *
 * @remarks
 * This type defines the response structure for the 401 status code
 * of the DELETE EmailForwardsByEmailForwardId endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/email-forwards/{email_forward_id}
 *
 * @see {@link DELETE_EmailForwardsByEmailForwardId_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type DELETE_EmailForwardsByEmailForwardId_Response_401 = Problem

/**
 * 403 response for DELETE EmailForwardsByEmailForwardId endpoint
 *
 * @remarks
 * This type defines the response structure for the 403 status code
 * of the DELETE EmailForwardsByEmailForwardId endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/email-forwards/{email_forward_id}
 *
 * @see {@link DELETE_EmailForwardsByEmailForwardId_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type DELETE_EmailForwardsByEmailForwardId_Response_403 = Problem

/**
 * 422 response for DELETE EmailForwardsByEmailForwardId endpoint
 *
 * @remarks
 * This type defines the response structure for the 422 status code
 * of the DELETE EmailForwardsByEmailForwardId endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/email-forwards/{email_forward_id}
 *
 * @see {@link DELETE_EmailForwardsByEmailForwardId_Response} - The main response type definition
 * @see {@link HTTPValidationError} - The actual schema type definition
 */
export type DELETE_EmailForwardsByEmailForwardId_Response_422 = HTTPValidationError

/**
 * Response types for GET EmailForwardsByEmailForwardId endpoint
 *
 * Get email forward configuration
 * Retrieves the email forward configuration for the specified zone including all aliases
 *
 * @remarks
 * This type defines all possible response structures for the GET EmailForwardsByEmailForwardId endpoint.
 * Each response code maps to a specific response type as defined in the OpenAPI specification.
 * Use this type to ensure type safety when handling API responses from this endpoint.
 *

 *
 * @path /v1/email-forwards/{email_forward_id}
 *
 * @see {@link GET_EmailForwardsByEmailForwardId_Response_200} - 200 response type
 * @see {@link GET_EmailForwardsByEmailForwardId_Response_401} - 401 response type
 * @see {@link GET_EmailForwardsByEmailForwardId_Response_403} - 403 response type
 * @see {@link GET_EmailForwardsByEmailForwardId_Response_404} - 404 response type
 * @see {@link GET_EmailForwardsByEmailForwardId_Response_422} - 422 response type
 *

 */
export type GET_EmailForwardsByEmailForwardId_Response = GET_EmailForwardsByEmailForwardId_Response_200 | GET_EmailForwardsByEmailForwardId_Response_401 | GET_EmailForwardsByEmailForwardId_Response_403 | GET_EmailForwardsByEmailForwardId_Response_404 | GET_EmailForwardsByEmailForwardId_Response_422;

/**
 * 200 response for GET EmailForwardsByEmailForwardId endpoint
 *
 * @remarks
 * This type defines the response structure for the 200 status code
 * of the GET EmailForwardsByEmailForwardId endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/email-forwards/{email_forward_id}
 *
 * @see {@link GET_EmailForwardsByEmailForwardId_Response} - The main response type definition
 * @see {@link EmailForward} - The actual schema type definition
 */
export type GET_EmailForwardsByEmailForwardId_Response_200 = EmailForward

/**
 * 401 response for GET EmailForwardsByEmailForwardId endpoint
 *
 * @remarks
 * This type defines the response structure for the 401 status code
 * of the GET EmailForwardsByEmailForwardId endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/email-forwards/{email_forward_id}
 *
 * @see {@link GET_EmailForwardsByEmailForwardId_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type GET_EmailForwardsByEmailForwardId_Response_401 = Problem

/**
 * 403 response for GET EmailForwardsByEmailForwardId endpoint
 *
 * @remarks
 * This type defines the response structure for the 403 status code
 * of the GET EmailForwardsByEmailForwardId endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/email-forwards/{email_forward_id}
 *
 * @see {@link GET_EmailForwardsByEmailForwardId_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type GET_EmailForwardsByEmailForwardId_Response_403 = Problem

/**
 * 404 response for GET EmailForwardsByEmailForwardId endpoint
 *
 * @remarks
 * This type defines the response structure for the 404 status code
 * of the GET EmailForwardsByEmailForwardId endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/email-forwards/{email_forward_id}
 *
 * @see {@link GET_EmailForwardsByEmailForwardId_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type GET_EmailForwardsByEmailForwardId_Response_404 = Problem

/**
 * 422 response for GET EmailForwardsByEmailForwardId endpoint
 *
 * @remarks
 * This type defines the response structure for the 422 status code
 * of the GET EmailForwardsByEmailForwardId endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/email-forwards/{email_forward_id}
 *
 * @see {@link GET_EmailForwardsByEmailForwardId_Response} - The main response type definition
 * @see {@link HTTPValidationError} - The actual schema type definition
 */
export type GET_EmailForwardsByEmailForwardId_Response_422 = HTTPValidationError

/**
 * Response types for POST EmailForwardsByEmailForwardIdAliases endpoint
 *
 * Create email forward alias
 * Creates a new email forward alias for the specified hostname.
 *
 * @remarks
 * This type defines all possible response structures for the POST EmailForwardsByEmailForwardIdAliases endpoint.
 * Each response code maps to a specific response type as defined in the OpenAPI specification.
 * Use this type to ensure type safety when handling API responses from this endpoint.
 *

 *
 * @path /v1/email-forwards/{email_forward_id}/aliases
 *
 * @see {@link POST_EmailForwardsByEmailForwardIdAliases_Response_201} - 201 response type
 * @see {@link POST_EmailForwardsByEmailForwardIdAliases_Response_401} - 401 response type
 * @see {@link POST_EmailForwardsByEmailForwardIdAliases_Response_403} - 403 response type
 * @see {@link POST_EmailForwardsByEmailForwardIdAliases_Response_404} - 404 response type
 * @see {@link POST_EmailForwardsByEmailForwardIdAliases_Response_409} - 409 response type
 * @see {@link POST_EmailForwardsByEmailForwardIdAliases_Response_422} - 422 response type
 *

 */
export type POST_EmailForwardsByEmailForwardIdAliases_Response = POST_EmailForwardsByEmailForwardIdAliases_Response_201 | POST_EmailForwardsByEmailForwardIdAliases_Response_401 | POST_EmailForwardsByEmailForwardIdAliases_Response_403 | POST_EmailForwardsByEmailForwardIdAliases_Response_404 | POST_EmailForwardsByEmailForwardIdAliases_Response_409 | POST_EmailForwardsByEmailForwardIdAliases_Response_422;

/**
 * 201 response for POST EmailForwardsByEmailForwardIdAliases endpoint
 *
 * @remarks
 * This type defines the response structure for the 201 status code
 * of the POST EmailForwardsByEmailForwardIdAliases endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/email-forwards/{email_forward_id}/aliases
 *
 * @see {@link POST_EmailForwardsByEmailForwardIdAliases_Response} - The main response type definition
 * @see {@link EmailForwardAlias} - The actual schema type definition
 */
export type POST_EmailForwardsByEmailForwardIdAliases_Response_201 = EmailForwardAlias

/**
 * 401 response for POST EmailForwardsByEmailForwardIdAliases endpoint
 *
 * @remarks
 * This type defines the response structure for the 401 status code
 * of the POST EmailForwardsByEmailForwardIdAliases endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/email-forwards/{email_forward_id}/aliases
 *
 * @see {@link POST_EmailForwardsByEmailForwardIdAliases_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type POST_EmailForwardsByEmailForwardIdAliases_Response_401 = Problem

/**
 * 403 response for POST EmailForwardsByEmailForwardIdAliases endpoint
 *
 * @remarks
 * This type defines the response structure for the 403 status code
 * of the POST EmailForwardsByEmailForwardIdAliases endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/email-forwards/{email_forward_id}/aliases
 *
 * @see {@link POST_EmailForwardsByEmailForwardIdAliases_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type POST_EmailForwardsByEmailForwardIdAliases_Response_403 = Problem

/**
 * 404 response for POST EmailForwardsByEmailForwardIdAliases endpoint
 *
 * @remarks
 * This type defines the response structure for the 404 status code
 * of the POST EmailForwardsByEmailForwardIdAliases endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/email-forwards/{email_forward_id}/aliases
 *
 * @see {@link POST_EmailForwardsByEmailForwardIdAliases_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type POST_EmailForwardsByEmailForwardIdAliases_Response_404 = Problem

/**
 * 409 response for POST EmailForwardsByEmailForwardIdAliases endpoint
 *
 * @remarks
 * This type defines the response structure for the 409 status code
 * of the POST EmailForwardsByEmailForwardIdAliases endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/email-forwards/{email_forward_id}/aliases
 *
 * @see {@link POST_EmailForwardsByEmailForwardIdAliases_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type POST_EmailForwardsByEmailForwardIdAliases_Response_409 = Problem

/**
 * 422 response for POST EmailForwardsByEmailForwardIdAliases endpoint
 *
 * @remarks
 * This type defines the response structure for the 422 status code
 * of the POST EmailForwardsByEmailForwardIdAliases endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/email-forwards/{email_forward_id}/aliases
 *
 * @see {@link POST_EmailForwardsByEmailForwardIdAliases_Response} - The main response type definition
 * @see {@link HTTPValidationError} - The actual schema type definition
 */
export type POST_EmailForwardsByEmailForwardIdAliases_Response_422 = HTTPValidationError

/**
 * Response types for DELETE EmailForwardsByEmailForwardIdAliasesByAliasId endpoint
 *
 * Delete email forward alias
 * Deletes a specific email forward alias for the specified zone
 *
 * @remarks
 * This type defines all possible response structures for the DELETE EmailForwardsByEmailForwardIdAliasesByAliasId endpoint.
 * Each response code maps to a specific response type as defined in the OpenAPI specification.
 * Use this type to ensure type safety when handling API responses from this endpoint.
 *

 *
 * @path /v1/email-forwards/{email_forward_id}/aliases/{alias_id}
 *
 * @see {@link DELETE_EmailForwardsByEmailForwardIdAliasesByAliasId_Response_401} - 401 response type
 * @see {@link DELETE_EmailForwardsByEmailForwardIdAliasesByAliasId_Response_403} - 403 response type
 * @see {@link DELETE_EmailForwardsByEmailForwardIdAliasesByAliasId_Response_404} - 404 response type
 * @see {@link DELETE_EmailForwardsByEmailForwardIdAliasesByAliasId_Response_422} - 422 response type
 *

 */
export type DELETE_EmailForwardsByEmailForwardIdAliasesByAliasId_Response = DELETE_EmailForwardsByEmailForwardIdAliasesByAliasId_Response_401 | DELETE_EmailForwardsByEmailForwardIdAliasesByAliasId_Response_403 | DELETE_EmailForwardsByEmailForwardIdAliasesByAliasId_Response_404 | DELETE_EmailForwardsByEmailForwardIdAliasesByAliasId_Response_422;

/**
 * 401 response for DELETE EmailForwardsByEmailForwardIdAliasesByAliasId endpoint
 *
 * @remarks
 * This type defines the response structure for the 401 status code
 * of the DELETE EmailForwardsByEmailForwardIdAliasesByAliasId endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/email-forwards/{email_forward_id}/aliases/{alias_id}
 *
 * @see {@link DELETE_EmailForwardsByEmailForwardIdAliasesByAliasId_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type DELETE_EmailForwardsByEmailForwardIdAliasesByAliasId_Response_401 = Problem

/**
 * 403 response for DELETE EmailForwardsByEmailForwardIdAliasesByAliasId endpoint
 *
 * @remarks
 * This type defines the response structure for the 403 status code
 * of the DELETE EmailForwardsByEmailForwardIdAliasesByAliasId endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/email-forwards/{email_forward_id}/aliases/{alias_id}
 *
 * @see {@link DELETE_EmailForwardsByEmailForwardIdAliasesByAliasId_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type DELETE_EmailForwardsByEmailForwardIdAliasesByAliasId_Response_403 = Problem

/**
 * 404 response for DELETE EmailForwardsByEmailForwardIdAliasesByAliasId endpoint
 *
 * @remarks
 * This type defines the response structure for the 404 status code
 * of the DELETE EmailForwardsByEmailForwardIdAliasesByAliasId endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/email-forwards/{email_forward_id}/aliases/{alias_id}
 *
 * @see {@link DELETE_EmailForwardsByEmailForwardIdAliasesByAliasId_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type DELETE_EmailForwardsByEmailForwardIdAliasesByAliasId_Response_404 = Problem

/**
 * 422 response for DELETE EmailForwardsByEmailForwardIdAliasesByAliasId endpoint
 *
 * @remarks
 * This type defines the response structure for the 422 status code
 * of the DELETE EmailForwardsByEmailForwardIdAliasesByAliasId endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/email-forwards/{email_forward_id}/aliases/{alias_id}
 *
 * @see {@link DELETE_EmailForwardsByEmailForwardIdAliasesByAliasId_Response} - The main response type definition
 * @see {@link HTTPValidationError} - The actual schema type definition
 */
export type DELETE_EmailForwardsByEmailForwardIdAliasesByAliasId_Response_422 = HTTPValidationError

/**
 * Response types for PUT EmailForwardsByEmailForwardIdAliasesByAliasId endpoint
 *
 * Update email forward alias
 * Updates the forward_to address for a specific email forward alias
 *
 * @remarks
 * This type defines all possible response structures for the PUT EmailForwardsByEmailForwardIdAliasesByAliasId endpoint.
 * Each response code maps to a specific response type as defined in the OpenAPI specification.
 * Use this type to ensure type safety when handling API responses from this endpoint.
 *

 *
 * @path /v1/email-forwards/{email_forward_id}/aliases/{alias_id}
 *
 * @see {@link PUT_EmailForwardsByEmailForwardIdAliasesByAliasId_Response_200} - 200 response type
 * @see {@link PUT_EmailForwardsByEmailForwardIdAliasesByAliasId_Response_401} - 401 response type
 * @see {@link PUT_EmailForwardsByEmailForwardIdAliasesByAliasId_Response_403} - 403 response type
 * @see {@link PUT_EmailForwardsByEmailForwardIdAliasesByAliasId_Response_404} - 404 response type
 * @see {@link PUT_EmailForwardsByEmailForwardIdAliasesByAliasId_Response_422} - 422 response type
 *

 */
export type PUT_EmailForwardsByEmailForwardIdAliasesByAliasId_Response = PUT_EmailForwardsByEmailForwardIdAliasesByAliasId_Response_200 | PUT_EmailForwardsByEmailForwardIdAliasesByAliasId_Response_401 | PUT_EmailForwardsByEmailForwardIdAliasesByAliasId_Response_403 | PUT_EmailForwardsByEmailForwardIdAliasesByAliasId_Response_404 | PUT_EmailForwardsByEmailForwardIdAliasesByAliasId_Response_422;

/**
 * 200 response for PUT EmailForwardsByEmailForwardIdAliasesByAliasId endpoint
 *
 * @remarks
 * This type defines the response structure for the 200 status code
 * of the PUT EmailForwardsByEmailForwardIdAliasesByAliasId endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/email-forwards/{email_forward_id}/aliases/{alias_id}
 *
 * @see {@link PUT_EmailForwardsByEmailForwardIdAliasesByAliasId_Response} - The main response type definition
 * @see {@link EmailForwardAlias} - The actual schema type definition
 */
export type PUT_EmailForwardsByEmailForwardIdAliasesByAliasId_Response_200 = EmailForwardAlias

/**
 * 401 response for PUT EmailForwardsByEmailForwardIdAliasesByAliasId endpoint
 *
 * @remarks
 * This type defines the response structure for the 401 status code
 * of the PUT EmailForwardsByEmailForwardIdAliasesByAliasId endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/email-forwards/{email_forward_id}/aliases/{alias_id}
 *
 * @see {@link PUT_EmailForwardsByEmailForwardIdAliasesByAliasId_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type PUT_EmailForwardsByEmailForwardIdAliasesByAliasId_Response_401 = Problem

/**
 * 403 response for PUT EmailForwardsByEmailForwardIdAliasesByAliasId endpoint
 *
 * @remarks
 * This type defines the response structure for the 403 status code
 * of the PUT EmailForwardsByEmailForwardIdAliasesByAliasId endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/email-forwards/{email_forward_id}/aliases/{alias_id}
 *
 * @see {@link PUT_EmailForwardsByEmailForwardIdAliasesByAliasId_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type PUT_EmailForwardsByEmailForwardIdAliasesByAliasId_Response_403 = Problem

/**
 * 404 response for PUT EmailForwardsByEmailForwardIdAliasesByAliasId endpoint
 *
 * @remarks
 * This type defines the response structure for the 404 status code
 * of the PUT EmailForwardsByEmailForwardIdAliasesByAliasId endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/email-forwards/{email_forward_id}/aliases/{alias_id}
 *
 * @see {@link PUT_EmailForwardsByEmailForwardIdAliasesByAliasId_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type PUT_EmailForwardsByEmailForwardIdAliasesByAliasId_Response_404 = Problem

/**
 * 422 response for PUT EmailForwardsByEmailForwardIdAliasesByAliasId endpoint
 *
 * @remarks
 * This type defines the response structure for the 422 status code
 * of the PUT EmailForwardsByEmailForwardIdAliasesByAliasId endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/email-forwards/{email_forward_id}/aliases/{alias_id}
 *
 * @see {@link PUT_EmailForwardsByEmailForwardIdAliasesByAliasId_Response} - The main response type definition
 * @see {@link HTTPValidationError} - The actual schema type definition
 */
export type PUT_EmailForwardsByEmailForwardIdAliasesByAliasId_Response_422 = HTTPValidationError

/**
 * Response types for PATCH EmailForwardsByEmailForwardIdDisable endpoint
 *
 * Disable email forwarding
 * Disables email forwarding by removing MX and SPF DNS records and unregistering the domain from the email forward provider. The email forward configuration is preserved but disabled.
 *
 * @remarks
 * This type defines all possible response structures for the PATCH EmailForwardsByEmailForwardIdDisable endpoint.
 * Each response code maps to a specific response type as defined in the OpenAPI specification.
 * Use this type to ensure type safety when handling API responses from this endpoint.
 *

 *
 * @path /v1/email-forwards/{email_forward_id}/disable
 *
 * @see {@link PATCH_EmailForwardsByEmailForwardIdDisable_Response_401} - 401 response type
 * @see {@link PATCH_EmailForwardsByEmailForwardIdDisable_Response_403} - 403 response type
 * @see {@link PATCH_EmailForwardsByEmailForwardIdDisable_Response_404} - 404 response type
 * @see {@link PATCH_EmailForwardsByEmailForwardIdDisable_Response_422} - 422 response type
 *

 */
export type PATCH_EmailForwardsByEmailForwardIdDisable_Response = PATCH_EmailForwardsByEmailForwardIdDisable_Response_401 | PATCH_EmailForwardsByEmailForwardIdDisable_Response_403 | PATCH_EmailForwardsByEmailForwardIdDisable_Response_404 | PATCH_EmailForwardsByEmailForwardIdDisable_Response_422;

/**
 * 401 response for PATCH EmailForwardsByEmailForwardIdDisable endpoint
 *
 * @remarks
 * This type defines the response structure for the 401 status code
 * of the PATCH EmailForwardsByEmailForwardIdDisable endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/email-forwards/{email_forward_id}/disable
 *
 * @see {@link PATCH_EmailForwardsByEmailForwardIdDisable_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type PATCH_EmailForwardsByEmailForwardIdDisable_Response_401 = Problem

/**
 * 403 response for PATCH EmailForwardsByEmailForwardIdDisable endpoint
 *
 * @remarks
 * This type defines the response structure for the 403 status code
 * of the PATCH EmailForwardsByEmailForwardIdDisable endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/email-forwards/{email_forward_id}/disable
 *
 * @see {@link PATCH_EmailForwardsByEmailForwardIdDisable_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type PATCH_EmailForwardsByEmailForwardIdDisable_Response_403 = Problem

/**
 * 404 response for PATCH EmailForwardsByEmailForwardIdDisable endpoint
 *
 * @remarks
 * This type defines the response structure for the 404 status code
 * of the PATCH EmailForwardsByEmailForwardIdDisable endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/email-forwards/{email_forward_id}/disable
 *
 * @see {@link PATCH_EmailForwardsByEmailForwardIdDisable_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type PATCH_EmailForwardsByEmailForwardIdDisable_Response_404 = Problem

/**
 * 422 response for PATCH EmailForwardsByEmailForwardIdDisable endpoint
 *
 * @remarks
 * This type defines the response structure for the 422 status code
 * of the PATCH EmailForwardsByEmailForwardIdDisable endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/email-forwards/{email_forward_id}/disable
 *
 * @see {@link PATCH_EmailForwardsByEmailForwardIdDisable_Response} - The main response type definition
 * @see {@link HTTPValidationError} - The actual schema type definition
 */
export type PATCH_EmailForwardsByEmailForwardIdDisable_Response_422 = HTTPValidationError

/**
 * Response types for PATCH EmailForwardsByEmailForwardIdEnable endpoint
 *
 * Enable email forwarding
 * Enables email forwarding by creating necessary MX and SPF DNS records and registering the domain with the email forward provider.
 *
 * @remarks
 * This type defines all possible response structures for the PATCH EmailForwardsByEmailForwardIdEnable endpoint.
 * Each response code maps to a specific response type as defined in the OpenAPI specification.
 * Use this type to ensure type safety when handling API responses from this endpoint.
 *

 *
 * @path /v1/email-forwards/{email_forward_id}/enable
 *
 * @see {@link PATCH_EmailForwardsByEmailForwardIdEnable_Response_401} - 401 response type
 * @see {@link PATCH_EmailForwardsByEmailForwardIdEnable_Response_403} - 403 response type
 * @see {@link PATCH_EmailForwardsByEmailForwardIdEnable_Response_404} - 404 response type
 * @see {@link PATCH_EmailForwardsByEmailForwardIdEnable_Response_422} - 422 response type
 *

 */
export type PATCH_EmailForwardsByEmailForwardIdEnable_Response = PATCH_EmailForwardsByEmailForwardIdEnable_Response_401 | PATCH_EmailForwardsByEmailForwardIdEnable_Response_403 | PATCH_EmailForwardsByEmailForwardIdEnable_Response_404 | PATCH_EmailForwardsByEmailForwardIdEnable_Response_422;

/**
 * 401 response for PATCH EmailForwardsByEmailForwardIdEnable endpoint
 *
 * @remarks
 * This type defines the response structure for the 401 status code
 * of the PATCH EmailForwardsByEmailForwardIdEnable endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/email-forwards/{email_forward_id}/enable
 *
 * @see {@link PATCH_EmailForwardsByEmailForwardIdEnable_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type PATCH_EmailForwardsByEmailForwardIdEnable_Response_401 = Problem

/**
 * 403 response for PATCH EmailForwardsByEmailForwardIdEnable endpoint
 *
 * @remarks
 * This type defines the response structure for the 403 status code
 * of the PATCH EmailForwardsByEmailForwardIdEnable endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/email-forwards/{email_forward_id}/enable
 *
 * @see {@link PATCH_EmailForwardsByEmailForwardIdEnable_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type PATCH_EmailForwardsByEmailForwardIdEnable_Response_403 = Problem

/**
 * 404 response for PATCH EmailForwardsByEmailForwardIdEnable endpoint
 *
 * @remarks
 * This type defines the response structure for the 404 status code
 * of the PATCH EmailForwardsByEmailForwardIdEnable endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/email-forwards/{email_forward_id}/enable
 *
 * @see {@link PATCH_EmailForwardsByEmailForwardIdEnable_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type PATCH_EmailForwardsByEmailForwardIdEnable_Response_404 = Problem

/**
 * 422 response for PATCH EmailForwardsByEmailForwardIdEnable endpoint
 *
 * @remarks
 * This type defines the response structure for the 422 status code
 * of the PATCH EmailForwardsByEmailForwardIdEnable endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/email-forwards/{email_forward_id}/enable
 *
 * @see {@link PATCH_EmailForwardsByEmailForwardIdEnable_Response} - The main response type definition
 * @see {@link HTTPValidationError} - The actual schema type definition
 */
export type PATCH_EmailForwardsByEmailForwardIdEnable_Response_422 = HTTPValidationError

/**
 * Response types for GET EmailForwardsByEmailForwardIdMetrics endpoint
 *
 * Retrieve email forward metrics
 * Retrieves metrics and statistics for a specific email forward, including delivery rates and status counts.
 *
 * @remarks
 * This type defines all possible response structures for the GET EmailForwardsByEmailForwardIdMetrics endpoint.
 * Each response code maps to a specific response type as defined in the OpenAPI specification.
 * Use this type to ensure type safety when handling API responses from this endpoint.
 *

 *
 * @path /v1/email-forwards/{email_forward_id}/metrics
 *
 * @see {@link GET_EmailForwardsByEmailForwardIdMetrics_Response_200} - 200 response type
 * @see {@link GET_EmailForwardsByEmailForwardIdMetrics_Response_401} - 401 response type
 * @see {@link GET_EmailForwardsByEmailForwardIdMetrics_Response_403} - 403 response type
 * @see {@link GET_EmailForwardsByEmailForwardIdMetrics_Response_404} - 404 response type
 * @see {@link GET_EmailForwardsByEmailForwardIdMetrics_Response_422} - 422 response type
 *

 */
export type GET_EmailForwardsByEmailForwardIdMetrics_Response = GET_EmailForwardsByEmailForwardIdMetrics_Response_200 | GET_EmailForwardsByEmailForwardIdMetrics_Response_401 | GET_EmailForwardsByEmailForwardIdMetrics_Response_403 | GET_EmailForwardsByEmailForwardIdMetrics_Response_404 | GET_EmailForwardsByEmailForwardIdMetrics_Response_422;

/**
 * 200 response for GET EmailForwardsByEmailForwardIdMetrics endpoint
 *
 * @remarks
 * This type defines the response structure for the 200 status code
 * of the GET EmailForwardsByEmailForwardIdMetrics endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/email-forwards/{email_forward_id}/metrics
 *
 * @see {@link GET_EmailForwardsByEmailForwardIdMetrics_Response} - The main response type definition
 * @see {@link EmailForwardMetrics} - The actual schema type definition
 */
export type GET_EmailForwardsByEmailForwardIdMetrics_Response_200 = EmailForwardMetrics

/**
 * 401 response for GET EmailForwardsByEmailForwardIdMetrics endpoint
 *
 * @remarks
 * This type defines the response structure for the 401 status code
 * of the GET EmailForwardsByEmailForwardIdMetrics endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/email-forwards/{email_forward_id}/metrics
 *
 * @see {@link GET_EmailForwardsByEmailForwardIdMetrics_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type GET_EmailForwardsByEmailForwardIdMetrics_Response_401 = Problem

/**
 * 403 response for GET EmailForwardsByEmailForwardIdMetrics endpoint
 *
 * @remarks
 * This type defines the response structure for the 403 status code
 * of the GET EmailForwardsByEmailForwardIdMetrics endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/email-forwards/{email_forward_id}/metrics
 *
 * @see {@link GET_EmailForwardsByEmailForwardIdMetrics_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type GET_EmailForwardsByEmailForwardIdMetrics_Response_403 = Problem

/**
 * 404 response for GET EmailForwardsByEmailForwardIdMetrics endpoint
 *
 * @remarks
 * This type defines the response structure for the 404 status code
 * of the GET EmailForwardsByEmailForwardIdMetrics endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/email-forwards/{email_forward_id}/metrics
 *
 * @see {@link GET_EmailForwardsByEmailForwardIdMetrics_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type GET_EmailForwardsByEmailForwardIdMetrics_Response_404 = Problem

/**
 * 422 response for GET EmailForwardsByEmailForwardIdMetrics endpoint
 *
 * @remarks
 * This type defines the response structure for the 422 status code
 * of the GET EmailForwardsByEmailForwardIdMetrics endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/email-forwards/{email_forward_id}/metrics
 *
 * @see {@link GET_EmailForwardsByEmailForwardIdMetrics_Response} - The main response type definition
 * @see {@link HTTPValidationError} - The actual schema type definition
 */
export type GET_EmailForwardsByEmailForwardIdMetrics_Response_422 = HTTPValidationError

/**
 * Response types for GET Events endpoint
 *
 * Get pending events
 * Retrieves a paginated list of events for the organization
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
 * Get event
 * Get an event by its ID
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
 * Acknowledge event
 * Acknowledge an event
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
 * Response types for GET Organizations endpoint
 *
 * List all organizations
 * Retrieves a paginated list of organizations under the current organization
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
 * @see {@link GET_Organizations_Response_401} - 401 response type
 * @see {@link GET_Organizations_Response_403} - 403 response type
 * @see {@link GET_Organizations_Response_422} - 422 response type
 *

 */
export type GET_Organizations_Response = GET_Organizations_Response_200 | GET_Organizations_Response_401 | GET_Organizations_Response_403 | GET_Organizations_Response_422;

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
 * 401 response for GET Organizations endpoint
 *
 * @remarks
 * This type defines the response structure for the 401 status code
 * of the GET Organizations endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/organizations
 *
 * @see {@link GET_Organizations_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type GET_Organizations_Response_401 = Problem

/**
 * 403 response for GET Organizations endpoint
 *
 * @remarks
 * This type defines the response structure for the 403 status code
 * of the GET Organizations endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/organizations
 *
 * @see {@link GET_Organizations_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type GET_Organizations_Response_403 = Problem

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
 * Create an organization
 * Create a new organization under the current organization
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
 * @see {@link POST_Organizations_Response_401} - 401 response type
 * @see {@link POST_Organizations_Response_403} - 403 response type
 * @see {@link POST_Organizations_Response_422} - 422 response type
 *

 */
export type POST_Organizations_Response = POST_Organizations_Response_200 | POST_Organizations_Response_401 | POST_Organizations_Response_403 | POST_Organizations_Response_422;

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
 * 401 response for POST Organizations endpoint
 *
 * @remarks
 * This type defines the response structure for the 401 status code
 * of the POST Organizations endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/organizations
 *
 * @see {@link POST_Organizations_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type POST_Organizations_Response_401 = Problem

/**
 * 403 response for POST Organizations endpoint
 *
 * @remarks
 * This type defines the response structure for the 403 status code
 * of the POST Organizations endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/organizations
 *
 * @see {@link POST_Organizations_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type POST_Organizations_Response_403 = Problem

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
 * List organization attributes
 * Retrieves a list of organization attributes for the current organization
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
 * @see {@link GET_OrganizationsAttributes_Response_401} - 401 response type
 * @see {@link GET_OrganizationsAttributes_Response_403} - 403 response type
 * @see {@link GET_OrganizationsAttributes_Response_422} - 422 response type
 *

 */
export type GET_OrganizationsAttributes_Response = GET_OrganizationsAttributes_Response_200 | GET_OrganizationsAttributes_Response_401 | GET_OrganizationsAttributes_Response_403 | GET_OrganizationsAttributes_Response_422;

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
 * 401 response for GET OrganizationsAttributes endpoint
 *
 * @remarks
 * This type defines the response structure for the 401 status code
 * of the GET OrganizationsAttributes endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/organizations/attributes
 * @param keys (query) - Optional list of attribute keys to filter
 *
 * @see {@link GET_OrganizationsAttributes_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type GET_OrganizationsAttributes_Response_401 = Problem

/**
 * 403 response for GET OrganizationsAttributes endpoint
 *
 * @remarks
 * This type defines the response structure for the 403 status code
 * of the GET OrganizationsAttributes endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/organizations/attributes
 * @param keys (query) - Optional list of attribute keys to filter
 *
 * @see {@link GET_OrganizationsAttributes_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type GET_OrganizationsAttributes_Response_403 = Problem

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
 * Update organization attributes
 * Updates one or more organization attributes for the current organization
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
 * @see {@link PATCH_OrganizationsAttributes_Response_401} - 401 response type
 * @see {@link PATCH_OrganizationsAttributes_Response_403} - 403 response type
 * @see {@link PATCH_OrganizationsAttributes_Response_422} - 422 response type
 *

 */
export type PATCH_OrganizationsAttributes_Response = PATCH_OrganizationsAttributes_Response_200 | PATCH_OrganizationsAttributes_Response_401 | PATCH_OrganizationsAttributes_Response_403 | PATCH_OrganizationsAttributes_Response_422;

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
 * 401 response for PATCH OrganizationsAttributes endpoint
 *
 * @remarks
 * This type defines the response structure for the 401 status code
 * of the PATCH OrganizationsAttributes endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/organizations/attributes
 *
 * @see {@link PATCH_OrganizationsAttributes_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type PATCH_OrganizationsAttributes_Response_401 = Problem

/**
 * 403 response for PATCH OrganizationsAttributes endpoint
 *
 * @remarks
 * This type defines the response structure for the 403 status code
 * of the PATCH OrganizationsAttributes endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/organizations/attributes
 *
 * @see {@link PATCH_OrganizationsAttributes_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type PATCH_OrganizationsAttributes_Response_403 = Problem

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
 * List organization attributes
 * Retrieves a list of organization attributes for the specified organization
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
 * @see {@link GET_OrganizationsAttributesByOrganizationId_Response_401} - 401 response type
 * @see {@link GET_OrganizationsAttributesByOrganizationId_Response_403} - 403 response type
 * @see {@link GET_OrganizationsAttributesByOrganizationId_Response_422} - 422 response type
 *

 */
export type GET_OrganizationsAttributesByOrganizationId_Response = GET_OrganizationsAttributesByOrganizationId_Response_200 | GET_OrganizationsAttributesByOrganizationId_Response_401 | GET_OrganizationsAttributesByOrganizationId_Response_403 | GET_OrganizationsAttributesByOrganizationId_Response_422;

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
 * 401 response for GET OrganizationsAttributesByOrganizationId endpoint
 *
 * @remarks
 * This type defines the response structure for the 401 status code
 * of the GET OrganizationsAttributesByOrganizationId endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/organizations/attributes/{organization_id}
 * @param keys (query) - Optional list of attribute keys to filter
 *
 * @see {@link GET_OrganizationsAttributesByOrganizationId_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type GET_OrganizationsAttributesByOrganizationId_Response_401 = Problem

/**
 * 403 response for GET OrganizationsAttributesByOrganizationId endpoint
 *
 * @remarks
 * This type defines the response structure for the 403 status code
 * of the GET OrganizationsAttributesByOrganizationId endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/organizations/attributes/{organization_id}
 * @param keys (query) - Optional list of attribute keys to filter
 *
 * @see {@link GET_OrganizationsAttributesByOrganizationId_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type GET_OrganizationsAttributesByOrganizationId_Response_403 = Problem

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
 * Update organization attributes
 * Updates one or more organization attributes for the specified organization
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
 * @see {@link PATCH_OrganizationsAttributesByOrganizationId_Response_401} - 401 response type
 * @see {@link PATCH_OrganizationsAttributesByOrganizationId_Response_403} - 403 response type
 * @see {@link PATCH_OrganizationsAttributesByOrganizationId_Response_422} - 422 response type
 *

 */
export type PATCH_OrganizationsAttributesByOrganizationId_Response = PATCH_OrganizationsAttributesByOrganizationId_Response_200 | PATCH_OrganizationsAttributesByOrganizationId_Response_401 | PATCH_OrganizationsAttributesByOrganizationId_Response_403 | PATCH_OrganizationsAttributesByOrganizationId_Response_422;

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
 * 401 response for PATCH OrganizationsAttributesByOrganizationId endpoint
 *
 * @remarks
 * This type defines the response structure for the 401 status code
 * of the PATCH OrganizationsAttributesByOrganizationId endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/organizations/attributes/{organization_id}
 *
 * @see {@link PATCH_OrganizationsAttributesByOrganizationId_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type PATCH_OrganizationsAttributesByOrganizationId_Response_401 = Problem

/**
 * 403 response for PATCH OrganizationsAttributesByOrganizationId endpoint
 *
 * @remarks
 * This type defines the response structure for the 403 status code
 * of the PATCH OrganizationsAttributesByOrganizationId endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/organizations/attributes/{organization_id}
 *
 * @see {@link PATCH_OrganizationsAttributesByOrganizationId_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type PATCH_OrganizationsAttributesByOrganizationId_Response_403 = Problem

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
 * Delete an organization
 * Permanently deletes an organization
 *
 * @remarks
 * This type defines all possible response structures for the DELETE OrganizationsByOrganizationId endpoint.
 * Each response code maps to a specific response type as defined in the OpenAPI specification.
 * Use this type to ensure type safety when handling API responses from this endpoint.
 *

 *
 * @path /v1/organizations/{organization_id}
 *
 * @see {@link DELETE_OrganizationsByOrganizationId_Response_401} - 401 response type
 * @see {@link DELETE_OrganizationsByOrganizationId_Response_403} - 403 response type
 * @see {@link DELETE_OrganizationsByOrganizationId_Response_422} - 422 response type
 *

 */
export type DELETE_OrganizationsByOrganizationId_Response = DELETE_OrganizationsByOrganizationId_Response_401 | DELETE_OrganizationsByOrganizationId_Response_403 | DELETE_OrganizationsByOrganizationId_Response_422;

/**
 * 401 response for DELETE OrganizationsByOrganizationId endpoint
 *
 * @remarks
 * This type defines the response structure for the 401 status code
 * of the DELETE OrganizationsByOrganizationId endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/organizations/{organization_id}
 *
 * @see {@link DELETE_OrganizationsByOrganizationId_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type DELETE_OrganizationsByOrganizationId_Response_401 = Problem

/**
 * 403 response for DELETE OrganizationsByOrganizationId endpoint
 *
 * @remarks
 * This type defines the response structure for the 403 status code
 * of the DELETE OrganizationsByOrganizationId endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/organizations/{organization_id}
 *
 * @see {@link DELETE_OrganizationsByOrganizationId_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type DELETE_OrganizationsByOrganizationId_Response_403 = Problem

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
 * Get organization details
 * Retrieves details for a specific organization
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
 * @see {@link GET_OrganizationsByOrganizationId_Response_401} - 401 response type
 * @see {@link GET_OrganizationsByOrganizationId_Response_403} - 403 response type
 * @see {@link GET_OrganizationsByOrganizationId_Response_422} - 422 response type
 *

 */
export type GET_OrganizationsByOrganizationId_Response = GET_OrganizationsByOrganizationId_Response_200 | GET_OrganizationsByOrganizationId_Response_401 | GET_OrganizationsByOrganizationId_Response_403 | GET_OrganizationsByOrganizationId_Response_422;

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
 * 401 response for GET OrganizationsByOrganizationId endpoint
 *
 * @remarks
 * This type defines the response structure for the 401 status code
 * of the GET OrganizationsByOrganizationId endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/organizations/{organization_id}
 *
 * @see {@link GET_OrganizationsByOrganizationId_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type GET_OrganizationsByOrganizationId_Response_401 = Problem

/**
 * 403 response for GET OrganizationsByOrganizationId endpoint
 *
 * @remarks
 * This type defines the response structure for the 403 status code
 * of the GET OrganizationsByOrganizationId endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/organizations/{organization_id}
 *
 * @see {@link GET_OrganizationsByOrganizationId_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type GET_OrganizationsByOrganizationId_Response_403 = Problem

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
 * Update an organization
 * Updates details for a specific organization
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
 * @see {@link PATCH_OrganizationsByOrganizationId_Response_401} - 401 response type
 * @see {@link PATCH_OrganizationsByOrganizationId_Response_403} - 403 response type
 * @see {@link PATCH_OrganizationsByOrganizationId_Response_422} - 422 response type
 *

 */
export type PATCH_OrganizationsByOrganizationId_Response = PATCH_OrganizationsByOrganizationId_Response_200 | PATCH_OrganizationsByOrganizationId_Response_401 | PATCH_OrganizationsByOrganizationId_Response_403 | PATCH_OrganizationsByOrganizationId_Response_422;

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
 * 401 response for PATCH OrganizationsByOrganizationId endpoint
 *
 * @remarks
 * This type defines the response structure for the 401 status code
 * of the PATCH OrganizationsByOrganizationId endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/organizations/{organization_id}
 *
 * @see {@link PATCH_OrganizationsByOrganizationId_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type PATCH_OrganizationsByOrganizationId_Response_401 = Problem

/**
 * 403 response for PATCH OrganizationsByOrganizationId endpoint
 *
 * @remarks
 * This type defines the response structure for the 403 status code
 * of the PATCH OrganizationsByOrganizationId endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/organizations/{organization_id}
 *
 * @see {@link PATCH_OrganizationsByOrganizationId_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type PATCH_OrganizationsByOrganizationId_Response_403 = Problem

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
 * Response types for GET OrganizationsByOrganizationIdBillingInvoices endpoint
 *
 * List all invoices for the organization
 * Retrieves a paginated list of all invoices for the organization
 *
 * @remarks
 * This type defines all possible response structures for the GET OrganizationsByOrganizationIdBillingInvoices endpoint.
 * Each response code maps to a specific response type as defined in the OpenAPI specification.
 * Use this type to ensure type safety when handling API responses from this endpoint.
 *

 *
 * @path /v1/organizations/{organization_id}/billing/invoices
 *
 * @see {@link GET_OrganizationsByOrganizationIdBillingInvoices_Response_200} - 200 response type
 * @see {@link GET_OrganizationsByOrganizationIdBillingInvoices_Response_422} - 422 response type
 *

 */
export type GET_OrganizationsByOrganizationIdBillingInvoices_Response = GET_OrganizationsByOrganizationIdBillingInvoices_Response_200 | GET_OrganizationsByOrganizationIdBillingInvoices_Response_422;

/**
 * 200 response for GET OrganizationsByOrganizationIdBillingInvoices endpoint
 *
 * @remarks
 * This type defines the response structure for the 200 status code
 * of the GET OrganizationsByOrganizationIdBillingInvoices endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/organizations/{organization_id}/billing/invoices
 *
 * @see {@link GET_OrganizationsByOrganizationIdBillingInvoices_Response} - The main response type definition
 * @see {@link Pagination_Invoice} - The actual schema type definition
 */
export type GET_OrganizationsByOrganizationIdBillingInvoices_Response_200 = Pagination_Invoice

/**
 * 422 response for GET OrganizationsByOrganizationIdBillingInvoices endpoint
 *
 * @remarks
 * This type defines the response structure for the 422 status code
 * of the GET OrganizationsByOrganizationIdBillingInvoices endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/organizations/{organization_id}/billing/invoices
 *
 * @see {@link GET_OrganizationsByOrganizationIdBillingInvoices_Response} - The main response type definition
 * @see {@link HTTPValidationError} - The actual schema type definition
 */
export type GET_OrganizationsByOrganizationIdBillingInvoices_Response_422 = HTTPValidationError

/**
 * Response types for GET OrganizationsByOrganizationIdPricingProductTypeByProductType endpoint
 *
 * List product prices
 * Retrieves pricing data for a specific product type. If a product action/class are specified, only prices for those are returned, if any.
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
 * @see {@link GET_OrganizationsByOrganizationIdPricingProductTypeByProductType_Response_401} - 401 response type
 * @see {@link GET_OrganizationsByOrganizationIdPricingProductTypeByProductType_Response_403} - 403 response type
 * @see {@link GET_OrganizationsByOrganizationIdPricingProductTypeByProductType_Response_422} - 422 response type
 *

 */
export type GET_OrganizationsByOrganizationIdPricingProductTypeByProductType_Response = GET_OrganizationsByOrganizationIdPricingProductTypeByProductType_Response_200 | GET_OrganizationsByOrganizationIdPricingProductTypeByProductType_Response_401 | GET_OrganizationsByOrganizationIdPricingProductTypeByProductType_Response_403 | GET_OrganizationsByOrganizationIdPricingProductTypeByProductType_Response_422;

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
 * 401 response for GET OrganizationsByOrganizationIdPricingProductTypeByProductType endpoint
 *
 * @remarks
 * This type defines the response structure for the 401 status code
 * of the GET OrganizationsByOrganizationIdPricingProductTypeByProductType endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/organizations/{organization_id}/pricing/product-type/{product_type}
 *
 * @see {@link GET_OrganizationsByOrganizationIdPricingProductTypeByProductType_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type GET_OrganizationsByOrganizationIdPricingProductTypeByProductType_Response_401 = Problem

/**
 * 403 response for GET OrganizationsByOrganizationIdPricingProductTypeByProductType endpoint
 *
 * @remarks
 * This type defines the response structure for the 403 status code
 * of the GET OrganizationsByOrganizationIdPricingProductTypeByProductType endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/organizations/{organization_id}/pricing/product-type/{product_type}
 *
 * @see {@link GET_OrganizationsByOrganizationIdPricingProductTypeByProductType_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type GET_OrganizationsByOrganizationIdPricingProductTypeByProductType_Response_403 = Problem

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
 * Response types for GET OrganizationsByOrganizationIdTransactions endpoint
 *
 * List all transactions
 * Retrieves a paginated list of transactions for an organization
 *
 * @remarks
 * This type defines all possible response structures for the GET OrganizationsByOrganizationIdTransactions endpoint.
 * Each response code maps to a specific response type as defined in the OpenAPI specification.
 * Use this type to ensure type safety when handling API responses from this endpoint.
 *

 *
 * @path /v1/organizations/{organization_id}/transactions
 *
 * @see {@link GET_OrganizationsByOrganizationIdTransactions_Response_200} - 200 response type
 * @see {@link GET_OrganizationsByOrganizationIdTransactions_Response_401} - 401 response type
 * @see {@link GET_OrganizationsByOrganizationIdTransactions_Response_403} - 403 response type
 * @see {@link GET_OrganizationsByOrganizationIdTransactions_Response_422} - 422 response type
 *

 */
export type GET_OrganizationsByOrganizationIdTransactions_Response = GET_OrganizationsByOrganizationIdTransactions_Response_200 | GET_OrganizationsByOrganizationIdTransactions_Response_401 | GET_OrganizationsByOrganizationIdTransactions_Response_403 | GET_OrganizationsByOrganizationIdTransactions_Response_422;

/**
 * 200 response for GET OrganizationsByOrganizationIdTransactions endpoint
 *
 * @remarks
 * This type defines the response structure for the 200 status code
 * of the GET OrganizationsByOrganizationIdTransactions endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/organizations/{organization_id}/transactions
 *
 * @see {@link GET_OrganizationsByOrganizationIdTransactions_Response} - The main response type definition
 * @see {@link Pagination_BillingTransaction} - The actual schema type definition
 */
export type GET_OrganizationsByOrganizationIdTransactions_Response_200 = Pagination_BillingTransaction

/**
 * 401 response for GET OrganizationsByOrganizationIdTransactions endpoint
 *
 * @remarks
 * This type defines the response structure for the 401 status code
 * of the GET OrganizationsByOrganizationIdTransactions endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/organizations/{organization_id}/transactions
 *
 * @see {@link GET_OrganizationsByOrganizationIdTransactions_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type GET_OrganizationsByOrganizationIdTransactions_Response_401 = Problem

/**
 * 403 response for GET OrganizationsByOrganizationIdTransactions endpoint
 *
 * @remarks
 * This type defines the response structure for the 403 status code
 * of the GET OrganizationsByOrganizationIdTransactions endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/organizations/{organization_id}/transactions
 *
 * @see {@link GET_OrganizationsByOrganizationIdTransactions_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type GET_OrganizationsByOrganizationIdTransactions_Response_403 = Problem

/**
 * 422 response for GET OrganizationsByOrganizationIdTransactions endpoint
 *
 * @remarks
 * This type defines the response structure for the 422 status code
 * of the GET OrganizationsByOrganizationIdTransactions endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/organizations/{organization_id}/transactions
 *
 * @see {@link GET_OrganizationsByOrganizationIdTransactions_Response} - The main response type definition
 * @see {@link HTTPValidationError} - The actual schema type definition
 */
export type GET_OrganizationsByOrganizationIdTransactions_Response_422 = HTTPValidationError

/**
 * Response types for GET OrganizationsByOrganizationIdTransactionsByTransactionId endpoint
 *
 * Get a specific transaction
 * Retrieves details for a specific transaction for an organization
 *
 * @remarks
 * This type defines all possible response structures for the GET OrganizationsByOrganizationIdTransactionsByTransactionId endpoint.
 * Each response code maps to a specific response type as defined in the OpenAPI specification.
 * Use this type to ensure type safety when handling API responses from this endpoint.
 *

 *
 * @path /v1/organizations/{organization_id}/transactions/{transaction_id}
 *
 * @see {@link GET_OrganizationsByOrganizationIdTransactionsByTransactionId_Response_200} - 200 response type
 * @see {@link GET_OrganizationsByOrganizationIdTransactionsByTransactionId_Response_401} - 401 response type
 * @see {@link GET_OrganizationsByOrganizationIdTransactionsByTransactionId_Response_403} - 403 response type
 * @see {@link GET_OrganizationsByOrganizationIdTransactionsByTransactionId_Response_422} - 422 response type
 *

 */
export type GET_OrganizationsByOrganizationIdTransactionsByTransactionId_Response = GET_OrganizationsByOrganizationIdTransactionsByTransactionId_Response_200 | GET_OrganizationsByOrganizationIdTransactionsByTransactionId_Response_401 | GET_OrganizationsByOrganizationIdTransactionsByTransactionId_Response_403 | GET_OrganizationsByOrganizationIdTransactionsByTransactionId_Response_422;

/**
 * 200 response for GET OrganizationsByOrganizationIdTransactionsByTransactionId endpoint
 *
 * @remarks
 * This type defines the response structure for the 200 status code
 * of the GET OrganizationsByOrganizationIdTransactionsByTransactionId endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/organizations/{organization_id}/transactions/{transaction_id}
 *
 * @see {@link GET_OrganizationsByOrganizationIdTransactionsByTransactionId_Response} - The main response type definition
 * @see {@link BillingTransaction} - The actual schema type definition
 */
export type GET_OrganizationsByOrganizationIdTransactionsByTransactionId_Response_200 = BillingTransaction

/**
 * 401 response for GET OrganizationsByOrganizationIdTransactionsByTransactionId endpoint
 *
 * @remarks
 * This type defines the response structure for the 401 status code
 * of the GET OrganizationsByOrganizationIdTransactionsByTransactionId endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/organizations/{organization_id}/transactions/{transaction_id}
 *
 * @see {@link GET_OrganizationsByOrganizationIdTransactionsByTransactionId_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type GET_OrganizationsByOrganizationIdTransactionsByTransactionId_Response_401 = Problem

/**
 * 403 response for GET OrganizationsByOrganizationIdTransactionsByTransactionId endpoint
 *
 * @remarks
 * This type defines the response structure for the 403 status code
 * of the GET OrganizationsByOrganizationIdTransactionsByTransactionId endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/organizations/{organization_id}/transactions/{transaction_id}
 *
 * @see {@link GET_OrganizationsByOrganizationIdTransactionsByTransactionId_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type GET_OrganizationsByOrganizationIdTransactionsByTransactionId_Response_403 = Problem

/**
 * 422 response for GET OrganizationsByOrganizationIdTransactionsByTransactionId endpoint
 *
 * @remarks
 * This type defines the response structure for the 422 status code
 * of the GET OrganizationsByOrganizationIdTransactionsByTransactionId endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/organizations/{organization_id}/transactions/{transaction_id}
 *
 * @see {@link GET_OrganizationsByOrganizationIdTransactionsByTransactionId_Response} - The main response type definition
 * @see {@link HTTPValidationError} - The actual schema type definition
 */
export type GET_OrganizationsByOrganizationIdTransactionsByTransactionId_Response_422 = HTTPValidationError

/**
 * Response types for GET OrganizationsIpRestrictions endpoint
 *
 * List IP restrictions
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
 * @see {@link GET_OrganizationsIpRestrictions_Response_401} - 401 response type
 * @see {@link GET_OrganizationsIpRestrictions_Response_403} - 403 response type
 * @see {@link GET_OrganizationsIpRestrictions_Response_422} - 422 response type
 *

 */
export type GET_OrganizationsIpRestrictions_Response = GET_OrganizationsIpRestrictions_Response_200 | GET_OrganizationsIpRestrictions_Response_401 | GET_OrganizationsIpRestrictions_Response_403 | GET_OrganizationsIpRestrictions_Response_422;

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
 * 401 response for GET OrganizationsIpRestrictions endpoint
 *
 * @remarks
 * This type defines the response structure for the 401 status code
 * of the GET OrganizationsIpRestrictions endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/organizations/ip-restrictions
 *
 * @see {@link GET_OrganizationsIpRestrictions_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type GET_OrganizationsIpRestrictions_Response_401 = Problem

/**
 * 403 response for GET OrganizationsIpRestrictions endpoint
 *
 * @remarks
 * This type defines the response structure for the 403 status code
 * of the GET OrganizationsIpRestrictions endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/organizations/ip-restrictions
 *
 * @see {@link GET_OrganizationsIpRestrictions_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type GET_OrganizationsIpRestrictions_Response_403 = Problem

/**
 * 422 response for GET OrganizationsIpRestrictions endpoint
 *
 * @remarks
 * This type defines the response structure for the 422 status code
 * of the GET OrganizationsIpRestrictions endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/organizations/ip-restrictions
 *
 * @see {@link GET_OrganizationsIpRestrictions_Response} - The main response type definition
 * @see {@link HTTPValidationError} - The actual schema type definition
 */
export type GET_OrganizationsIpRestrictions_Response_422 = HTTPValidationError

/**
 * Response types for POST OrganizationsIpRestrictions endpoint
 *
 * Create an IP restriction
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
 * @see {@link POST_OrganizationsIpRestrictions_Response_401} - 401 response type
 * @see {@link POST_OrganizationsIpRestrictions_Response_403} - 403 response type
 * @see {@link POST_OrganizationsIpRestrictions_Response_422} - 422 response type
 *

 */
export type POST_OrganizationsIpRestrictions_Response = POST_OrganizationsIpRestrictions_Response_200 | POST_OrganizationsIpRestrictions_Response_401 | POST_OrganizationsIpRestrictions_Response_403 | POST_OrganizationsIpRestrictions_Response_422;

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
 * 401 response for POST OrganizationsIpRestrictions endpoint
 *
 * @remarks
 * This type defines the response structure for the 401 status code
 * of the POST OrganizationsIpRestrictions endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/organizations/ip-restrictions
 *
 * @see {@link POST_OrganizationsIpRestrictions_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type POST_OrganizationsIpRestrictions_Response_401 = Problem

/**
 * 403 response for POST OrganizationsIpRestrictions endpoint
 *
 * @remarks
 * This type defines the response structure for the 403 status code
 * of the POST OrganizationsIpRestrictions endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/organizations/ip-restrictions
 *
 * @see {@link POST_OrganizationsIpRestrictions_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type POST_OrganizationsIpRestrictions_Response_403 = Problem

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
 * Delete an IP restriction
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
 * @see {@link DELETE_OrganizationsIpRestrictionsByIpRestrictionId_Response_401} - 401 response type
 * @see {@link DELETE_OrganizationsIpRestrictionsByIpRestrictionId_Response_403} - 403 response type
 * @see {@link DELETE_OrganizationsIpRestrictionsByIpRestrictionId_Response_422} - 422 response type
 *

 */
export type DELETE_OrganizationsIpRestrictionsByIpRestrictionId_Response = DELETE_OrganizationsIpRestrictionsByIpRestrictionId_Response_401 | DELETE_OrganizationsIpRestrictionsByIpRestrictionId_Response_403 | DELETE_OrganizationsIpRestrictionsByIpRestrictionId_Response_422;

/**
 * 401 response for DELETE OrganizationsIpRestrictionsByIpRestrictionId endpoint
 *
 * @remarks
 * This type defines the response structure for the 401 status code
 * of the DELETE OrganizationsIpRestrictionsByIpRestrictionId endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/organizations/ip-restrictions/{ip_restriction_id}
 *
 * @see {@link DELETE_OrganizationsIpRestrictionsByIpRestrictionId_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type DELETE_OrganizationsIpRestrictionsByIpRestrictionId_Response_401 = Problem

/**
 * 403 response for DELETE OrganizationsIpRestrictionsByIpRestrictionId endpoint
 *
 * @remarks
 * This type defines the response structure for the 403 status code
 * of the DELETE OrganizationsIpRestrictionsByIpRestrictionId endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/organizations/ip-restrictions/{ip_restriction_id}
 *
 * @see {@link DELETE_OrganizationsIpRestrictionsByIpRestrictionId_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type DELETE_OrganizationsIpRestrictionsByIpRestrictionId_Response_403 = Problem

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
 * Get an IP restriction
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
 * @see {@link GET_OrganizationsIpRestrictionsByIpRestrictionId_Response_401} - 401 response type
 * @see {@link GET_OrganizationsIpRestrictionsByIpRestrictionId_Response_403} - 403 response type
 * @see {@link GET_OrganizationsIpRestrictionsByIpRestrictionId_Response_422} - 422 response type
 *

 */
export type GET_OrganizationsIpRestrictionsByIpRestrictionId_Response = GET_OrganizationsIpRestrictionsByIpRestrictionId_Response_200 | GET_OrganizationsIpRestrictionsByIpRestrictionId_Response_401 | GET_OrganizationsIpRestrictionsByIpRestrictionId_Response_403 | GET_OrganizationsIpRestrictionsByIpRestrictionId_Response_422;

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
 * 401 response for GET OrganizationsIpRestrictionsByIpRestrictionId endpoint
 *
 * @remarks
 * This type defines the response structure for the 401 status code
 * of the GET OrganizationsIpRestrictionsByIpRestrictionId endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/organizations/ip-restrictions/{ip_restriction_id}
 *
 * @see {@link GET_OrganizationsIpRestrictionsByIpRestrictionId_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type GET_OrganizationsIpRestrictionsByIpRestrictionId_Response_401 = Problem

/**
 * 403 response for GET OrganizationsIpRestrictionsByIpRestrictionId endpoint
 *
 * @remarks
 * This type defines the response structure for the 403 status code
 * of the GET OrganizationsIpRestrictionsByIpRestrictionId endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/organizations/ip-restrictions/{ip_restriction_id}
 *
 * @see {@link GET_OrganizationsIpRestrictionsByIpRestrictionId_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type GET_OrganizationsIpRestrictionsByIpRestrictionId_Response_403 = Problem

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
 * Update an IP restriction
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
 * @see {@link PATCH_OrganizationsIpRestrictionsByIpRestrictionId_Response_401} - 401 response type
 * @see {@link PATCH_OrganizationsIpRestrictionsByIpRestrictionId_Response_403} - 403 response type
 * @see {@link PATCH_OrganizationsIpRestrictionsByIpRestrictionId_Response_422} - 422 response type
 *

 */
export type PATCH_OrganizationsIpRestrictionsByIpRestrictionId_Response = PATCH_OrganizationsIpRestrictionsByIpRestrictionId_Response_200 | PATCH_OrganizationsIpRestrictionsByIpRestrictionId_Response_401 | PATCH_OrganizationsIpRestrictionsByIpRestrictionId_Response_403 | PATCH_OrganizationsIpRestrictionsByIpRestrictionId_Response_422;

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
 * 401 response for PATCH OrganizationsIpRestrictionsByIpRestrictionId endpoint
 *
 * @remarks
 * This type defines the response structure for the 401 status code
 * of the PATCH OrganizationsIpRestrictionsByIpRestrictionId endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/organizations/ip-restrictions/{ip_restriction_id}
 *
 * @see {@link PATCH_OrganizationsIpRestrictionsByIpRestrictionId_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type PATCH_OrganizationsIpRestrictionsByIpRestrictionId_Response_401 = Problem

/**
 * 403 response for PATCH OrganizationsIpRestrictionsByIpRestrictionId endpoint
 *
 * @remarks
 * This type defines the response structure for the 403 status code
 * of the PATCH OrganizationsIpRestrictionsByIpRestrictionId endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/organizations/ip-restrictions/{ip_restriction_id}
 *
 * @see {@link PATCH_OrganizationsIpRestrictionsByIpRestrictionId_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type PATCH_OrganizationsIpRestrictionsByIpRestrictionId_Response_403 = Problem

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
 * List all roles
 * Retrieves a list of roles for the current organization
 *
 * @remarks
 * This type defines all possible response structures for the GET OrganizationsRoles endpoint.
 * Each response code maps to a specific response type as defined in the OpenAPI specification.
 * Use this type to ensure type safety when handling API responses from this endpoint.
 *

 *
 * @path /v1/organizations/roles
 *
 * @see {@link GET_OrganizationsRoles_Response_401} - 401 response type
 * @see {@link GET_OrganizationsRoles_Response_403} - 403 response type
 * @see {@link GET_OrganizationsRoles_Response_422} - 422 response type
 *

 */
export type GET_OrganizationsRoles_Response = GET_OrganizationsRoles_Response_401 | GET_OrganizationsRoles_Response_403 | GET_OrganizationsRoles_Response_422;

/**
 * 401 response for GET OrganizationsRoles endpoint
 *
 * @remarks
 * This type defines the response structure for the 401 status code
 * of the GET OrganizationsRoles endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/organizations/roles
 *
 * @see {@link GET_OrganizationsRoles_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type GET_OrganizationsRoles_Response_401 = Problem

/**
 * 403 response for GET OrganizationsRoles endpoint
 *
 * @remarks
 * This type defines the response structure for the 403 status code
 * of the GET OrganizationsRoles endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/organizations/roles
 *
 * @see {@link GET_OrganizationsRoles_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type GET_OrganizationsRoles_Response_403 = Problem

/**
 * 422 response for GET OrganizationsRoles endpoint
 *
 * @remarks
 * This type defines the response structure for the 422 status code
 * of the GET OrganizationsRoles endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/organizations/roles
 *
 * @see {@link GET_OrganizationsRoles_Response} - The main response type definition
 * @see {@link HTTPValidationError} - The actual schema type definition
 */
export type GET_OrganizationsRoles_Response_422 = HTTPValidationError

/**
 * Response types for GET OrganizationsUsers endpoint
 *
 * List all users
 * Retrieves a paginated list of users under the current organization
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
 * @see {@link GET_OrganizationsUsers_Response_401} - 401 response type
 * @see {@link GET_OrganizationsUsers_Response_403} - 403 response type
 * @see {@link GET_OrganizationsUsers_Response_422} - 422 response type
 *

 */
export type GET_OrganizationsUsers_Response = GET_OrganizationsUsers_Response_200 | GET_OrganizationsUsers_Response_401 | GET_OrganizationsUsers_Response_403 | GET_OrganizationsUsers_Response_422;

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
 * @see {@link Pagination_UserPublic} - The actual schema type definition
 */
export type GET_OrganizationsUsers_Response_200 = Pagination_UserPublic

/**
 * 401 response for GET OrganizationsUsers endpoint
 *
 * @remarks
 * This type defines the response structure for the 401 status code
 * of the GET OrganizationsUsers endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/organizations/users
 *
 * @see {@link GET_OrganizationsUsers_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type GET_OrganizationsUsers_Response_401 = Problem

/**
 * 403 response for GET OrganizationsUsers endpoint
 *
 * @remarks
 * This type defines the response structure for the 403 status code
 * of the GET OrganizationsUsers endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/organizations/users
 *
 * @see {@link GET_OrganizationsUsers_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type GET_OrganizationsUsers_Response_403 = Problem

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
 * Response types for GET Parking endpoint
 *
 * List parking entries
 * Retrieves a paginated list of parking entries for the organization
 *
 * @remarks
 * This type defines all possible response structures for the GET Parking endpoint.
 * Each response code maps to a specific response type as defined in the OpenAPI specification.
 * Use this type to ensure type safety when handling API responses from this endpoint.
 *

 *
 * @path /v1/parking
 *
 * @see {@link GET_Parking_Response_200} - 200 response type
 * @see {@link GET_Parking_Response_401} - 401 response type
 * @see {@link GET_Parking_Response_403} - 403 response type
 * @see {@link GET_Parking_Response_422} - 422 response type
 *

 */
export type GET_Parking_Response = GET_Parking_Response_200 | GET_Parking_Response_401 | GET_Parking_Response_403 | GET_Parking_Response_422;

/**
 * 200 response for GET Parking endpoint
 *
 * @remarks
 * This type defines the response structure for the 200 status code
 * of the GET Parking endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/parking
 *
 * @see {@link GET_Parking_Response} - The main response type definition
 * @see {@link Pagination_Parking} - The actual schema type definition
 */
export type GET_Parking_Response_200 = Pagination_Parking

/**
 * 401 response for GET Parking endpoint
 *
 * @remarks
 * This type defines the response structure for the 401 status code
 * of the GET Parking endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/parking
 *
 * @see {@link GET_Parking_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type GET_Parking_Response_401 = Problem

/**
 * 403 response for GET Parking endpoint
 *
 * @remarks
 * This type defines the response structure for the 403 status code
 * of the GET Parking endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/parking
 *
 * @see {@link GET_Parking_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type GET_Parking_Response_403 = Problem

/**
 * 422 response for GET Parking endpoint
 *
 * @remarks
 * This type defines the response structure for the 422 status code
 * of the GET Parking endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/parking
 *
 * @see {@link GET_Parking_Response} - The main response type definition
 * @see {@link HTTPValidationError} - The actual schema type definition
 */
export type GET_Parking_Response_422 = HTTPValidationError

/**
 * Response types for GET ParkingByParkingIdMetrics endpoint
 *
 * Get metrics for a parking entry
 * Retrieves metrics for a specific parking entry by ID
 *
 * @remarks
 * This type defines all possible response structures for the GET ParkingByParkingIdMetrics endpoint.
 * Each response code maps to a specific response type as defined in the OpenAPI specification.
 * Use this type to ensure type safety when handling API responses from this endpoint.
 *

 *
 * @path /v1/parking/{parking_id}/metrics
 *
 * @see {@link GET_ParkingByParkingIdMetrics_Response_200} - 200 response type
 * @see {@link GET_ParkingByParkingIdMetrics_Response_401} - 401 response type
 * @see {@link GET_ParkingByParkingIdMetrics_Response_403} - 403 response type
 * @see {@link GET_ParkingByParkingIdMetrics_Response_404} - 404 response type
 * @see {@link GET_ParkingByParkingIdMetrics_Response_422} - 422 response type
 *

 */
export type GET_ParkingByParkingIdMetrics_Response = GET_ParkingByParkingIdMetrics_Response_200 | GET_ParkingByParkingIdMetrics_Response_401 | GET_ParkingByParkingIdMetrics_Response_403 | GET_ParkingByParkingIdMetrics_Response_404 | GET_ParkingByParkingIdMetrics_Response_422;

/**
 * 200 response for GET ParkingByParkingIdMetrics endpoint
 *
 * @remarks
 * This type defines the response structure for the 200 status code
 * of the GET ParkingByParkingIdMetrics endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/parking/{parking_id}/metrics
 *
 * @see {@link GET_ParkingByParkingIdMetrics_Response} - The main response type definition
 * @see {@link ParkingMetrics} - The actual schema type definition
 */
export type GET_ParkingByParkingIdMetrics_Response_200 = ParkingMetrics

/**
 * 401 response for GET ParkingByParkingIdMetrics endpoint
 *
 * @remarks
 * This type defines the response structure for the 401 status code
 * of the GET ParkingByParkingIdMetrics endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/parking/{parking_id}/metrics
 *
 * @see {@link GET_ParkingByParkingIdMetrics_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type GET_ParkingByParkingIdMetrics_Response_401 = Problem

/**
 * 403 response for GET ParkingByParkingIdMetrics endpoint
 *
 * @remarks
 * This type defines the response structure for the 403 status code
 * of the GET ParkingByParkingIdMetrics endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/parking/{parking_id}/metrics
 *
 * @see {@link GET_ParkingByParkingIdMetrics_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type GET_ParkingByParkingIdMetrics_Response_403 = Problem

/**
 * 404 response for GET ParkingByParkingIdMetrics endpoint
 *
 * @remarks
 * This type defines the response structure for the 404 status code
 * of the GET ParkingByParkingIdMetrics endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/parking/{parking_id}/metrics
 *
 * @see {@link GET_ParkingByParkingIdMetrics_Response} - The main response type definition
 * @see {@link Problem} - The actual schema type definition
 */
export type GET_ParkingByParkingIdMetrics_Response_404 = Problem

/**
 * 422 response for GET ParkingByParkingIdMetrics endpoint
 *
 * @remarks
 * This type defines the response structure for the 422 status code
 * of the GET ParkingByParkingIdMetrics endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/parking/{parking_id}/metrics
 *
 * @see {@link GET_ParkingByParkingIdMetrics_Response} - The main response type definition
 * @see {@link HTTPValidationError} - The actual schema type definition
 */
export type GET_ParkingByParkingIdMetrics_Response_422 = HTTPValidationError

/**
 * Response types for GET Tlds endpoint
 *
 * Get list of Specifications for all TLDs we support
 * Retrieves a list of TLD Specifications we have support for
 *
 * @remarks
 * This type defines all possible response structures for the GET Tlds endpoint.
 * Each response code maps to a specific response type as defined in the OpenAPI specification.
 * Use this type to ensure type safety when handling API responses from this endpoint.
 *

 *
 * @path /v1/tlds/
 *
 * @see {@link GET_Tlds_Response_422} - 422 response type
 *

 */
export type GET_Tlds_Response = GET_Tlds_Response_422;

/**
 * 422 response for GET Tlds endpoint
 *
 * @remarks
 * This type defines the response structure for the 422 status code
 * of the GET Tlds endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/tlds/
 *
 * @see {@link GET_Tlds_Response} - The main response type definition
 * @see {@link HTTPValidationError} - The actual schema type definition
 */
export type GET_Tlds_Response_422 = HTTPValidationError

/**
 * Response types for GET TldsByTld endpoint
 *
 * Get the TLD specification
 * Retrieves the TLD specification for a given TLD
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
 * Get the list of TLDs we support
 * Retrieves a list of TLDs we have support for
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
 * @see {@link GET_TldsPortfolio_Response_422} - 422 response type
 *

 */
export type GET_TldsPortfolio_Response = GET_TldsPortfolio_Response_200 | GET_TldsPortfolio_Response_422;

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
 * 422 response for GET TldsPortfolio endpoint
 *
 * @remarks
 * This type defines the response structure for the 422 status code
 * of the GET TldsPortfolio endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path /v1/tlds/portfolio
 *
 * @see {@link GET_TldsPortfolio_Response} - The main response type definition
 * @see {@link HTTPValidationError} - The actual schema type definition
 */
export type GET_TldsPortfolio_Response_422 = HTTPValidationError

/**
 * Response types for POST Users endpoint
 *
 * Create a user
 * Create a new user
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
 * @see {@link UserPublic} - The actual schema type definition
 */
export type POST_Users_Response_200 = UserPublic

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
 * Delete a user
 * Delete a user by ID
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
 * Get a user
 * Get a user by ID
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
 * @see {@link UserPublicWithAttributes} - The actual schema type definition
 */
export type GET_UsersByUserId_Response_200 = UserPublicWithAttributes

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
 * Update a user
 * Update a user by ID
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
 * @see {@link UserPublicWithAttributes} - The actual schema type definition
 */
export type PATCH_UsersByUserId_Response_200 = UserPublicWithAttributes

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
 * Get user permissions
 * Get the permissions for a user
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
 * Get user roles
 * Get the roles for a user
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
 * Update user roles
 * Update the roles for a user
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
 * Response types for GET UsersMe endpoint
 *
 * Get current user
 * Get the current user
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
 * Change Password
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

