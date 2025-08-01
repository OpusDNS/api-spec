/**
 * Request parameter types for OpusDNS API endpoints
 *
 * This file contains TypeScript types for API request parameters, bodies, and path parameters.
 * Each type is derived from the OpenAPI operation specification and provides type safety for API calls.
 * These types ensure that request parameters match the expected API contract.
 *
 * @remarks
 * - Request types follow the pattern: `METHOD_EndpointName_Request`
 * - Parameter types are available as: `METHOD_EndpointName_Request_Query`, `METHOD_EndpointName_Request_Path`
 * - Request body types are available as: `METHOD_EndpointName_Request_Body`
 * - All types include comprehensive parameter descriptions from the OpenAPI specification
 * - These types ensure type safety when making API requests
 *
 * @example
 * ```typescript
 * // Using request types for API calls
 * const params: GET_Domains_Request_Query = {
 *   limit: 10,
 *   offset: 0
 * };
 * 
 * const body: POST_Domains_Request_Body = {
 *   domain: 'example.com',
 *   period: 1
 * };
 * ```
 *
 * This file is auto-generated from the OpenAPI specification.
 * Do not edit manually.
 */

import { operations } from '../schema';

import { DomainDnssecDataCreateArray, OrganizationAttributeUpdateArray } from './schemas-arrays.d';

import { OrganizationCredentialExtra, SignupCreate, ContactCreate, DnsZoneCreate, DnsZoneRecordsPatchOps, DnsZoneRrsetsPatchOps, DnsZoneRrsetsCreate, DomainCreate, DomainUpdate, DomainRenewRequest, DomainTransferIn, EmailForwardCreate, EmailForwardBulkDelete, EmailForwardBulkUpdate, EmailForwardUpdate, NotificationCreate, NotificationUpdate, OrganizationCreate, IpRestrictionCreate, IpRestrictionUpdate, OrganizationUpdate, PlanUpdate, UserCreate, TermsOfServiceAccept, UserUpdate, SpiceDbRelationshipUpdate } from './schemas.d';

/**
 * Request type for GET AuthClientCredentials endpoint
 *
 * List Api Keys
 *
 * @remarks
 * This type defines the complete request structure for the GET AuthClientCredentials endpoint.
 * It includes all parameters (query, path) and request body types as defined in the OpenAPI specification.
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @example
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @path /v1/auth/client_credentials
 * @param status (query) - Optional status to filter the results
 *
 * @see {@link GET_AuthClientCredentials_Request_Query} - Query parameters type
 * @see {@link GET_AuthClientCredentials_Request_Path} - Path parameters type
 * @see {@link GET_AuthClientCredentials_Request_Body} - Request body type
 */
export type GET_AuthClientCredentials_Request = {
  parameters: {
    query: operations['list_api_keys_v1_auth_client_credentials_get']['parameters']['query'];
  };
}
/**
 * Query parameters for GET /v1/auth/client_credentials
 *
 * @remarks
 * This type defines the query parameters for the GET /v1/auth/client_credentials endpoint.
 * It provides type safety for all query parameters as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for query parameters.
 *
 * @path /v1/auth/client_credentials
 * @param status (query) - Optional status to filter the results
 */
export type GET_AuthClientCredentials_Request_Query = GET_AuthClientCredentials_Request['parameters']['query'];

/**
 * Request type for POST AuthClientCredentials endpoint
 *
 * Issue Api Key
 *
 * @remarks
 * This type defines the complete request structure for the POST AuthClientCredentials endpoint.
 * It includes all parameters (query, path) and request body types as defined in the OpenAPI specification.
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @example
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @path /v1/auth/client_credentials
 *
 * @see {@link POST_AuthClientCredentials_Request_Query} - Query parameters type
 * @see {@link POST_AuthClientCredentials_Request_Path} - Path parameters type
 * @see {@link POST_AuthClientCredentials_Request_Body} - Request body type
 */
export type POST_AuthClientCredentials_Request = {
  requestBody: OrganizationCredentialExtra;
}
/**
 * Request body for POST /v1/auth/client_credentials
 *
 * @remarks
 * This type defines the request body structure for the POST /v1/auth/client_credentials endpoint.
 * It provides type safety for the request body as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for request body structure.
 *
 * @path /v1/auth/client_credentials
 */
export type POST_AuthClientCredentials_Request_Body = POST_AuthClientCredentials_Request['requestBody'];

/**
 * Request type for DELETE AuthClientCredentialsApiKeyId endpoint
 *
 * Delete Api Key
 *
 * @remarks
 * This type defines the complete request structure for the DELETE AuthClientCredentialsApiKeyId endpoint.
 * It includes all parameters (query, path) and request body types as defined in the OpenAPI specification.
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @example
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @path /v1/auth/client_credentials/{api_key_id}
 *
 * @see {@link DELETE_AuthClientCredentialsApiKeyId_Request_Query} - Query parameters type
 * @see {@link DELETE_AuthClientCredentialsApiKeyId_Request_Path} - Path parameters type
 * @see {@link DELETE_AuthClientCredentialsApiKeyId_Request_Body} - Request body type
 */
export type DELETE_AuthClientCredentialsApiKeyId_Request = {
  parameters: {
    path: operations['delete_api_key_v1_auth_client_credentials__api_key_id__delete']['parameters']['path'];
  };
}
/**
 * Path parameters for DELETE /v1/auth/client_credentials/{api_key_id}
 *
 * @remarks
 * This type defines the path parameters for the DELETE /v1/auth/client_credentials/{api_key_id} endpoint.
 * It provides type safety for all path parameters as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for path parameters.
 *
 * @path /v1/auth/client_credentials/{api_key_id}
 */
export type DELETE_AuthClientCredentialsApiKeyId_Request_Path = DELETE_AuthClientCredentialsApiKeyId_Request['parameters']['path'];

/**
 * Request type for POST AuthInternalClientCredentials endpoint
 *
 * Issue Opusdns Internal Api Key
 *
 * @remarks
 * This type defines the complete request structure for the POST AuthInternalClientCredentials endpoint.
 * It includes all parameters (query, path) and request body types as defined in the OpenAPI specification.
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @example
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @path /v1/auth/internal_client_credentials
 *
 * @see {@link POST_AuthInternalClientCredentials_Request_Query} - Query parameters type
 * @see {@link POST_AuthInternalClientCredentials_Request_Path} - Path parameters type
 * @see {@link POST_AuthInternalClientCredentials_Request_Body} - Request body type
 */
export type POST_AuthInternalClientCredentials_Request = {
  requestBody: OrganizationCredentialExtra;
}
/**
 * Request body for POST /v1/auth/internal_client_credentials
 *
 * @remarks
 * This type defines the request body structure for the POST /v1/auth/internal_client_credentials endpoint.
 * It provides type safety for the request body as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for request body structure.
 *
 * @path /v1/auth/internal_client_credentials
 */
export type POST_AuthInternalClientCredentials_Request_Body = POST_AuthInternalClientCredentials_Request['requestBody'];

/**
 * Request type for POST AuthLogout endpoint
 *
 * Logout
 *
 * @remarks
 * This type defines the complete request structure for the POST AuthLogout endpoint.
 * It includes all parameters (query, path) and request body types as defined in the OpenAPI specification.
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @example
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @path /v1/auth/logout
 *
 * @see {@link POST_AuthLogout_Request_Query} - Query parameters type
 * @see {@link POST_AuthLogout_Request_Path} - Path parameters type
 * @see {@link POST_AuthLogout_Request_Body} - Request body type
 */
export type POST_AuthLogout_Request = {
}

/**
 * Request type for POST AuthSignup endpoint
 *
 * Signup
 *
 * @remarks
 * This type defines the complete request structure for the POST AuthSignup endpoint.
 * It includes all parameters (query, path) and request body types as defined in the OpenAPI specification.
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @example
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @path /v1/auth/signup
 *
 * @see {@link POST_AuthSignup_Request_Query} - Query parameters type
 * @see {@link POST_AuthSignup_Request_Path} - Path parameters type
 * @see {@link POST_AuthSignup_Request_Body} - Request body type
 */
export type POST_AuthSignup_Request = {
  requestBody: SignupCreate;
}
/**
 * Request body for POST /v1/auth/signup
 *
 * @remarks
 * This type defines the request body structure for the POST /v1/auth/signup endpoint.
 * It provides type safety for the request body as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for request body structure.
 *
 * @path /v1/auth/signup
 */
export type POST_AuthSignup_Request_Body = POST_AuthSignup_Request['requestBody'];

/**
 * Request type for POST AuthToken endpoint
 *
 * Issue Organization Token
 *
 * @remarks
 * This type defines the complete request structure for the POST AuthToken endpoint.
 * It includes all parameters (query, path) and request body types as defined in the OpenAPI specification.
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @example
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @path /v1/auth/token
 *
 * @see {@link POST_AuthToken_Request_Query} - Query parameters type
 * @see {@link POST_AuthToken_Request_Path} - Path parameters type
 * @see {@link POST_AuthToken_Request_Body} - Request body type
 */
export type POST_AuthToken_Request = {
}

/**
 * Request type for GET Availability endpoint
 *
 * Bulk Availability
 * Check the availability of one or more domains.
 *
 * @remarks
 * This type defines the complete request structure for the GET Availability endpoint.
 * It includes all parameters (query, path) and request body types as defined in the OpenAPI specification.
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @example
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @path /v1/availability
 * @param domains (query) - 
Specify one or more domains to check for availability.

 *
 * @see {@link GET_Availability_Request_Query} - Query parameters type
 * @see {@link GET_Availability_Request_Path} - Path parameters type
 * @see {@link GET_Availability_Request_Body} - Request body type
 */
export type GET_Availability_Request = {
  parameters: {
    query: operations['bulk_availability_v1_availability_get']['parameters']['query'];
  };
}
/**
 * Query parameters for GET /v1/availability
 *
 * @remarks
 * This type defines the query parameters for the GET /v1/availability endpoint.
 * It provides type safety for all query parameters as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for query parameters.
 *
 * @path /v1/availability
 * @param domains (query) - 
Specify one or more domains to check for availability.

 */
export type GET_Availability_Request_Query = GET_Availability_Request['parameters']['query'];

/**
 * Request type for GET AvailabilityStream endpoint
 *
 * Stream Availability
 * Stream domain availability results using Server-Sent Events (SSE) until the `done` event is received.
 *
 * @remarks
 * This type defines the complete request structure for the GET AvailabilityStream endpoint.
 * It includes all parameters (query, path) and request body types as defined in the OpenAPI specification.
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @example
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @path /v1/availability/stream
 * @param domains (query) - 
Specify one or more domains to check for availability.

 *
 * @see {@link GET_AvailabilityStream_Request_Query} - Query parameters type
 * @see {@link GET_AvailabilityStream_Request_Path} - Path parameters type
 * @see {@link GET_AvailabilityStream_Request_Body} - Request body type
 */
export type GET_AvailabilityStream_Request = {
  parameters: {
    query: operations['stream_availability_v1_availability_stream_get']['parameters']['query'];
  };
}
/**
 * Query parameters for GET /v1/availability/stream
 *
 * @remarks
 * This type defines the query parameters for the GET /v1/availability/stream endpoint.
 * It provides type safety for all query parameters as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for query parameters.
 *
 * @path /v1/availability/stream
 * @param domains (query) - 
Specify one or more domains to check for availability.

 */
export type GET_AvailabilityStream_Request_Query = GET_AvailabilityStream_Request['parameters']['query'];

/**
 * Request type for GET Contacts endpoint
 *
 * Get Contacts
 * List all contacts
 *
 * @remarks
 * This type defines the complete request structure for the GET Contacts endpoint.
 * It includes all parameters (query, path) and request body types as defined in the OpenAPI specification.
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @example
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @path /v1/contacts
 *
 * @see {@link GET_Contacts_Request_Query} - Query parameters type
 * @see {@link GET_Contacts_Request_Path} - Path parameters type
 * @see {@link GET_Contacts_Request_Body} - Request body type
 */
export type GET_Contacts_Request = {
  parameters: {
    query: operations['get_contacts_v1_contacts_get']['parameters']['query'];
  };
}
/**
 * Query parameters for GET /v1/contacts
 *
 * @remarks
 * This type defines the query parameters for the GET /v1/contacts endpoint.
 * It provides type safety for all query parameters as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for query parameters.
 *
 * @path /v1/contacts
 */
export type GET_Contacts_Request_Query = GET_Contacts_Request['parameters']['query'];

/**
 * Request type for POST Contacts endpoint
 *
 * Create Contact
 * Create a contact
 *
 * @remarks
 * This type defines the complete request structure for the POST Contacts endpoint.
 * It includes all parameters (query, path) and request body types as defined in the OpenAPI specification.
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @example
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @path /v1/contacts
 *
 * @see {@link POST_Contacts_Request_Query} - Query parameters type
 * @see {@link POST_Contacts_Request_Path} - Path parameters type
 * @see {@link POST_Contacts_Request_Body} - Request body type
 */
export type POST_Contacts_Request = {
  requestBody: ContactCreate;
}
/**
 * Request body for POST /v1/contacts
 *
 * @remarks
 * This type defines the request body structure for the POST /v1/contacts endpoint.
 * It provides type safety for the request body as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for request body structure.
 *
 * @path /v1/contacts
 */
export type POST_Contacts_Request_Body = POST_Contacts_Request['requestBody'];

/**
 * Request type for DELETE ContactsContactId endpoint
 *
 * Delete Contact
 * Delete a contact
 *
 * @remarks
 * This type defines the complete request structure for the DELETE ContactsContactId endpoint.
 * It includes all parameters (query, path) and request body types as defined in the OpenAPI specification.
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @example
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @path /v1/contacts/{contact_id}
 *
 * @see {@link DELETE_ContactsContactId_Request_Query} - Query parameters type
 * @see {@link DELETE_ContactsContactId_Request_Path} - Path parameters type
 * @see {@link DELETE_ContactsContactId_Request_Body} - Request body type
 */
export type DELETE_ContactsContactId_Request = {
  parameters: {
    path: operations['delete_contact_v1_contacts__contact_id__delete']['parameters']['path'];
  };
}
/**
 * Path parameters for DELETE /v1/contacts/{contact_id}
 *
 * @remarks
 * This type defines the path parameters for the DELETE /v1/contacts/{contact_id} endpoint.
 * It provides type safety for all path parameters as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for path parameters.
 *
 * @path /v1/contacts/{contact_id}
 */
export type DELETE_ContactsContactId_Request_Path = DELETE_ContactsContactId_Request['parameters']['path'];

/**
 * Request type for GET ContactsContactId endpoint
 *
 * Get Contact
 * Retrieve a contact
 *
 * @remarks
 * This type defines the complete request structure for the GET ContactsContactId endpoint.
 * It includes all parameters (query, path) and request body types as defined in the OpenAPI specification.
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @example
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @path /v1/contacts/{contact_id}
 *
 * @see {@link GET_ContactsContactId_Request_Query} - Query parameters type
 * @see {@link GET_ContactsContactId_Request_Path} - Path parameters type
 * @see {@link GET_ContactsContactId_Request_Body} - Request body type
 */
export type GET_ContactsContactId_Request = {
  parameters: {
    path: operations['get_contact_v1_contacts__contact_id__get']['parameters']['path'];
  };
}
/**
 * Path parameters for GET /v1/contacts/{contact_id}
 *
 * @remarks
 * This type defines the path parameters for the GET /v1/contacts/{contact_id} endpoint.
 * It provides type safety for all path parameters as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for path parameters.
 *
 * @path /v1/contacts/{contact_id}
 */
export type GET_ContactsContactId_Request_Path = GET_ContactsContactId_Request['parameters']['path'];

/**
 * Request type for DELETE ContactsContactIdVerification endpoint
 *
 * Cancel Verification
 * Delete contact verification
 *
 * @remarks
 * This type defines the complete request structure for the DELETE ContactsContactIdVerification endpoint.
 * It includes all parameters (query, path) and request body types as defined in the OpenAPI specification.
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @example
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @path /v1/contacts/{contact_id}/verification
 *
 * @see {@link DELETE_ContactsContactIdVerification_Request_Query} - Query parameters type
 * @see {@link DELETE_ContactsContactIdVerification_Request_Path} - Path parameters type
 * @see {@link DELETE_ContactsContactIdVerification_Request_Body} - Request body type
 */
export type DELETE_ContactsContactIdVerification_Request = {
  parameters: {
    path: operations['cancel_verification_v1_contacts__contact_id__verification_delete']['parameters']['path'];
  };
}
/**
 * Path parameters for DELETE /v1/contacts/{contact_id}/verification
 *
 * @remarks
 * This type defines the path parameters for the DELETE /v1/contacts/{contact_id}/verification endpoint.
 * It provides type safety for all path parameters as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for path parameters.
 *
 * @path /v1/contacts/{contact_id}/verification
 */
export type DELETE_ContactsContactIdVerification_Request_Path = DELETE_ContactsContactIdVerification_Request['parameters']['path'];

/**
 * Request type for GET ContactsContactIdVerification endpoint
 *
 * Get Verification Status
 * Retrieve contact verification
 *
 * @remarks
 * This type defines the complete request structure for the GET ContactsContactIdVerification endpoint.
 * It includes all parameters (query, path) and request body types as defined in the OpenAPI specification.
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @example
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @path /v1/contacts/{contact_id}/verification
 *
 * @see {@link GET_ContactsContactIdVerification_Request_Query} - Query parameters type
 * @see {@link GET_ContactsContactIdVerification_Request_Path} - Path parameters type
 * @see {@link GET_ContactsContactIdVerification_Request_Body} - Request body type
 */
export type GET_ContactsContactIdVerification_Request = {
  parameters: {
    path: operations['get_verification_status_v1_contacts__contact_id__verification_get']['parameters']['path'];
  };
}
/**
 * Path parameters for GET /v1/contacts/{contact_id}/verification
 *
 * @remarks
 * This type defines the path parameters for the GET /v1/contacts/{contact_id}/verification endpoint.
 * It provides type safety for all path parameters as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for path parameters.
 *
 * @path /v1/contacts/{contact_id}/verification
 */
export type GET_ContactsContactIdVerification_Request_Path = GET_ContactsContactIdVerification_Request['parameters']['path'];

/**
 * Request type for POST ContactsContactIdVerification endpoint
 *
 * Start Contact Verification
 * Start contact verification
 *
 * @remarks
 * This type defines the complete request structure for the POST ContactsContactIdVerification endpoint.
 * It includes all parameters (query, path) and request body types as defined in the OpenAPI specification.
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @example
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @path /v1/contacts/{contact_id}/verification
 *
 * @see {@link POST_ContactsContactIdVerification_Request_Query} - Query parameters type
 * @see {@link POST_ContactsContactIdVerification_Request_Path} - Path parameters type
 * @see {@link POST_ContactsContactIdVerification_Request_Body} - Request body type
 */
export type POST_ContactsContactIdVerification_Request = {
  parameters: {
    query: operations['start_contact_verification_v1_contacts__contact_id__verification_post']['parameters']['query'];
    path: operations['start_contact_verification_v1_contacts__contact_id__verification_post']['parameters']['path'];
  };
}
/**
 * Query parameters for POST /v1/contacts/{contact_id}/verification
 *
 * @remarks
 * This type defines the query parameters for the POST /v1/contacts/{contact_id}/verification endpoint.
 * It provides type safety for all query parameters as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for query parameters.
 *
 * @path /v1/contacts/{contact_id}/verification
 */
export type POST_ContactsContactIdVerification_Request_Query = POST_ContactsContactIdVerification_Request['parameters']['query'];
/**
 * Path parameters for POST /v1/contacts/{contact_id}/verification
 *
 * @remarks
 * This type defines the path parameters for the POST /v1/contacts/{contact_id}/verification endpoint.
 * It provides type safety for all path parameters as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for path parameters.
 *
 * @path /v1/contacts/{contact_id}/verification
 */
export type POST_ContactsContactIdVerification_Request_Path = POST_ContactsContactIdVerification_Request['parameters']['path'];

/**
 * Request type for PUT ContactsContactIdVerification endpoint
 *
 * Update Verification
 * Complete contact verification
 *
 * @remarks
 * This type defines the complete request structure for the PUT ContactsContactIdVerification endpoint.
 * It includes all parameters (query, path) and request body types as defined in the OpenAPI specification.
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @example
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @path /v1/contacts/{contact_id}/verification
 *
 * @see {@link PUT_ContactsContactIdVerification_Request_Query} - Query parameters type
 * @see {@link PUT_ContactsContactIdVerification_Request_Path} - Path parameters type
 * @see {@link PUT_ContactsContactIdVerification_Request_Body} - Request body type
 */
export type PUT_ContactsContactIdVerification_Request = {
  parameters: {
    query: operations['update_verification_v1_contacts__contact_id__verification_put']['parameters']['query'];
    path: operations['update_verification_v1_contacts__contact_id__verification_put']['parameters']['path'];
  };
}
/**
 * Query parameters for PUT /v1/contacts/{contact_id}/verification
 *
 * @remarks
 * This type defines the query parameters for the PUT /v1/contacts/{contact_id}/verification endpoint.
 * It provides type safety for all query parameters as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for query parameters.
 *
 * @path /v1/contacts/{contact_id}/verification
 */
export type PUT_ContactsContactIdVerification_Request_Query = PUT_ContactsContactIdVerification_Request['parameters']['query'];
/**
 * Path parameters for PUT /v1/contacts/{contact_id}/verification
 *
 * @remarks
 * This type defines the path parameters for the PUT /v1/contacts/{contact_id}/verification endpoint.
 * It provides type safety for all path parameters as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for path parameters.
 *
 * @path /v1/contacts/{contact_id}/verification
 */
export type PUT_ContactsContactIdVerification_Request_Path = PUT_ContactsContactIdVerification_Request['parameters']['path'];

/**
 * Request type for GET ContactsVerification endpoint
 *
 * Get Verification By Token
 * Retrieve contact verification
 *
 * @remarks
 * This type defines the complete request structure for the GET ContactsVerification endpoint.
 * It includes all parameters (query, path) and request body types as defined in the OpenAPI specification.
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @example
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @path /v1/contacts/verification
 *
 * @see {@link GET_ContactsVerification_Request_Query} - Query parameters type
 * @see {@link GET_ContactsVerification_Request_Path} - Path parameters type
 * @see {@link GET_ContactsVerification_Request_Body} - Request body type
 */
export type GET_ContactsVerification_Request = {
  parameters: {
    query: operations['get_verification_by_token_v1_contacts_verification_get']['parameters']['query'];
  };
}
/**
 * Query parameters for GET /v1/contacts/verification
 *
 * @remarks
 * This type defines the query parameters for the GET /v1/contacts/verification endpoint.
 * It provides type safety for all query parameters as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for query parameters.
 *
 * @path /v1/contacts/verification
 */
export type GET_ContactsVerification_Request_Query = GET_ContactsVerification_Request['parameters']['query'];

/**
 * Request type for PUT ContactsVerification endpoint
 *
 * Update Verification By Token
 * Complete contact verification
 *
 * @remarks
 * This type defines the complete request structure for the PUT ContactsVerification endpoint.
 * It includes all parameters (query, path) and request body types as defined in the OpenAPI specification.
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @example
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @path /v1/contacts/verification
 *
 * @see {@link PUT_ContactsVerification_Request_Query} - Query parameters type
 * @see {@link PUT_ContactsVerification_Request_Path} - Path parameters type
 * @see {@link PUT_ContactsVerification_Request_Body} - Request body type
 */
export type PUT_ContactsVerification_Request = {
  parameters: {
    query: operations['update_verification_by_token_v1_contacts_verification_put']['parameters']['query'];
  };
}
/**
 * Query parameters for PUT /v1/contacts/verification
 *
 * @remarks
 * This type defines the query parameters for the PUT /v1/contacts/verification endpoint.
 * It provides type safety for all query parameters as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for query parameters.
 *
 * @path /v1/contacts/verification
 */
export type PUT_ContactsVerification_Request_Query = PUT_ContactsVerification_Request['parameters']['query'];

/**
 * Request type for GET ContactsVerify endpoint
 *
 * Email Verify Contact
 *
 * @remarks
 * This type defines the complete request structure for the GET ContactsVerify endpoint.
 * It includes all parameters (query, path) and request body types as defined in the OpenAPI specification.
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @example
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @path /v1/contacts/verify
 *
 * @see {@link GET_ContactsVerify_Request_Query} - Query parameters type
 * @see {@link GET_ContactsVerify_Request_Path} - Path parameters type
 * @see {@link GET_ContactsVerify_Request_Body} - Request body type
 */
export type GET_ContactsVerify_Request = {
  parameters: {
    query: operations['email_verify_contact_v1_contacts_verify_get']['parameters']['query'];
  };
}
/**
 * Query parameters for GET /v1/contacts/verify
 *
 * @remarks
 * This type defines the query parameters for the GET /v1/contacts/verify endpoint.
 * It provides type safety for all query parameters as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for query parameters.
 *
 * @path /v1/contacts/verify
 */
export type GET_ContactsVerify_Request_Query = GET_ContactsVerify_Request['parameters']['query'];

/**
 * Request type for GET Dns endpoint
 *
 * List Zones
 *
 * @remarks
 * This type defines the complete request structure for the GET Dns endpoint.
 * It includes all parameters (query, path) and request body types as defined in the OpenAPI specification.
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @example
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @path /v1/dns
 *
 * @see {@link GET_Dns_Request_Query} - Query parameters type
 * @see {@link GET_Dns_Request_Path} - Path parameters type
 * @see {@link GET_Dns_Request_Body} - Request body type
 */
export type GET_Dns_Request = {
  parameters: {
    query: operations['list_zones_v1_dns_get']['parameters']['query'];
  };
}
/**
 * Query parameters for GET /v1/dns
 *
 * @remarks
 * This type defines the query parameters for the GET /v1/dns endpoint.
 * It provides type safety for all query parameters as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for query parameters.
 *
 * @path /v1/dns
 */
export type GET_Dns_Request_Query = GET_Dns_Request['parameters']['query'];

/**
 * Request type for POST Dns endpoint
 *
 * Create Zone
 *
 * @remarks
 * This type defines the complete request structure for the POST Dns endpoint.
 * It includes all parameters (query, path) and request body types as defined in the OpenAPI specification.
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @example
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @path /v1/dns
 *
 * @see {@link POST_Dns_Request_Query} - Query parameters type
 * @see {@link POST_Dns_Request_Path} - Path parameters type
 * @see {@link POST_Dns_Request_Body} - Request body type
 */
export type POST_Dns_Request = {
  requestBody: DnsZoneCreate;
}
/**
 * Request body for POST /v1/dns
 *
 * @remarks
 * This type defines the request body structure for the POST /v1/dns endpoint.
 * It provides type safety for the request body as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for request body structure.
 *
 * @path /v1/dns
 */
export type POST_Dns_Request_Body = POST_Dns_Request['requestBody'];

/**
 * Request type for GET DnsSummary endpoint
 *
 * Get Zones Summary
 *
 * @remarks
 * This type defines the complete request structure for the GET DnsSummary endpoint.
 * It includes all parameters (query, path) and request body types as defined in the OpenAPI specification.
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @example
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @path /v1/dns/summary
 *
 * @see {@link GET_DnsSummary_Request_Query} - Query parameters type
 * @see {@link GET_DnsSummary_Request_Path} - Path parameters type
 * @see {@link GET_DnsSummary_Request_Body} - Request body type
 */
export type GET_DnsSummary_Request = {
}

/**
 * Request type for DELETE DnsZoneName endpoint
 *
 * Delete Zone
 *
 * @remarks
 * This type defines the complete request structure for the DELETE DnsZoneName endpoint.
 * It includes all parameters (query, path) and request body types as defined in the OpenAPI specification.
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @example
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @path /v1/dns/{zone_name}
 * @param zone_name (path) - DNS zone name (trailing dot optional)
 *
 * @see {@link DELETE_DnsZoneName_Request_Query} - Query parameters type
 * @see {@link DELETE_DnsZoneName_Request_Path} - Path parameters type
 * @see {@link DELETE_DnsZoneName_Request_Body} - Request body type
 */
export type DELETE_DnsZoneName_Request = {
  parameters: {
    path: operations['delete_zone_v1_dns__zone_name__delete']['parameters']['path'];
  };
}
/**
 * Path parameters for DELETE /v1/dns/{zone_name}
 *
 * @remarks
 * This type defines the path parameters for the DELETE /v1/dns/{zone_name} endpoint.
 * It provides type safety for all path parameters as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for path parameters.
 *
 * @path /v1/dns/{zone_name}
 * @param zone_name (path) - DNS zone name (trailing dot optional)
 */
export type DELETE_DnsZoneName_Request_Path = DELETE_DnsZoneName_Request['parameters']['path'];

/**
 * Request type for GET DnsZoneName endpoint
 *
 * Get Zone
 *
 * @remarks
 * This type defines the complete request structure for the GET DnsZoneName endpoint.
 * It includes all parameters (query, path) and request body types as defined in the OpenAPI specification.
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @example
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @path /v1/dns/{zone_name}
 * @param zone_name (path) - DNS zone name (trailing dot optional)
 *
 * @see {@link GET_DnsZoneName_Request_Query} - Query parameters type
 * @see {@link GET_DnsZoneName_Request_Path} - Path parameters type
 * @see {@link GET_DnsZoneName_Request_Body} - Request body type
 */
export type GET_DnsZoneName_Request = {
  parameters: {
    path: operations['get_zone_v1_dns__zone_name__get']['parameters']['path'];
  };
}
/**
 * Path parameters for GET /v1/dns/{zone_name}
 *
 * @remarks
 * This type defines the path parameters for the GET /v1/dns/{zone_name} endpoint.
 * It provides type safety for all path parameters as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for path parameters.
 *
 * @path /v1/dns/{zone_name}
 * @param zone_name (path) - DNS zone name (trailing dot optional)
 */
export type GET_DnsZoneName_Request_Path = GET_DnsZoneName_Request['parameters']['path'];

/**
 * Request type for POST DnsZoneNameDnssecDisable endpoint
 *
 * Disable Dnssec
 *
 * @remarks
 * This type defines the complete request structure for the POST DnsZoneNameDnssecDisable endpoint.
 * It includes all parameters (query, path) and request body types as defined in the OpenAPI specification.
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @example
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @path /v1/dns/{zone_name}/dnssec/disable
 * @param zone_name (path) - DNS zone name (trailing dot optional)
 *
 * @see {@link POST_DnsZoneNameDnssecDisable_Request_Query} - Query parameters type
 * @see {@link POST_DnsZoneNameDnssecDisable_Request_Path} - Path parameters type
 * @see {@link POST_DnsZoneNameDnssecDisable_Request_Body} - Request body type
 */
export type POST_DnsZoneNameDnssecDisable_Request = {
  parameters: {
    path: operations['disable_dnssec_v1_dns__zone_name__dnssec_disable_post']['parameters']['path'];
  };
}
/**
 * Path parameters for POST /v1/dns/{zone_name}/dnssec/disable
 *
 * @remarks
 * This type defines the path parameters for the POST /v1/dns/{zone_name}/dnssec/disable endpoint.
 * It provides type safety for all path parameters as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for path parameters.
 *
 * @path /v1/dns/{zone_name}/dnssec/disable
 * @param zone_name (path) - DNS zone name (trailing dot optional)
 */
export type POST_DnsZoneNameDnssecDisable_Request_Path = POST_DnsZoneNameDnssecDisable_Request['parameters']['path'];

/**
 * Request type for POST DnsZoneNameDnssecEnable endpoint
 *
 * Enable Dnssec
 *
 * @remarks
 * This type defines the complete request structure for the POST DnsZoneNameDnssecEnable endpoint.
 * It includes all parameters (query, path) and request body types as defined in the OpenAPI specification.
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @example
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @path /v1/dns/{zone_name}/dnssec/enable
 * @param zone_name (path) - DNS zone name (trailing dot optional)
 *
 * @see {@link POST_DnsZoneNameDnssecEnable_Request_Query} - Query parameters type
 * @see {@link POST_DnsZoneNameDnssecEnable_Request_Path} - Path parameters type
 * @see {@link POST_DnsZoneNameDnssecEnable_Request_Body} - Request body type
 */
export type POST_DnsZoneNameDnssecEnable_Request = {
  parameters: {
    path: operations['enable_dnssec_v1_dns__zone_name__dnssec_enable_post']['parameters']['path'];
  };
}
/**
 * Path parameters for POST /v1/dns/{zone_name}/dnssec/enable
 *
 * @remarks
 * This type defines the path parameters for the POST /v1/dns/{zone_name}/dnssec/enable endpoint.
 * It provides type safety for all path parameters as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for path parameters.
 *
 * @path /v1/dns/{zone_name}/dnssec/enable
 * @param zone_name (path) - DNS zone name (trailing dot optional)
 */
export type POST_DnsZoneNameDnssecEnable_Request_Path = POST_DnsZoneNameDnssecEnable_Request['parameters']['path'];

/**
 * Request type for PATCH DnsZoneNameRecords endpoint
 *
 * Patch Zone Records
 *
 * @remarks
 * This type defines the complete request structure for the PATCH DnsZoneNameRecords endpoint.
 * It includes all parameters (query, path) and request body types as defined in the OpenAPI specification.
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @example
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @path /v1/dns/{zone_name}/records
 * @param zone_name (path) - DNS zone name (trailing dot optional)
 *
 * @see {@link PATCH_DnsZoneNameRecords_Request_Query} - Query parameters type
 * @see {@link PATCH_DnsZoneNameRecords_Request_Path} - Path parameters type
 * @see {@link PATCH_DnsZoneNameRecords_Request_Body} - Request body type
 */
export type PATCH_DnsZoneNameRecords_Request = {
  parameters: {
    path: operations['patch_zone_records_v1_dns__zone_name__records_patch']['parameters']['path'];
  };
  requestBody: DnsZoneRecordsPatchOps;
}
/**
 * Path parameters for PATCH /v1/dns/{zone_name}/records
 *
 * @remarks
 * This type defines the path parameters for the PATCH /v1/dns/{zone_name}/records endpoint.
 * It provides type safety for all path parameters as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for path parameters.
 *
 * @path /v1/dns/{zone_name}/records
 * @param zone_name (path) - DNS zone name (trailing dot optional)
 */
export type PATCH_DnsZoneNameRecords_Request_Path = PATCH_DnsZoneNameRecords_Request['parameters']['path'];
/**
 * Request body for PATCH /v1/dns/{zone_name}/records
 *
 * @remarks
 * This type defines the request body structure for the PATCH /v1/dns/{zone_name}/records endpoint.
 * It provides type safety for the request body as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for request body structure.
 *
 * @path /v1/dns/{zone_name}/records
 */
export type PATCH_DnsZoneNameRecords_Request_Body = PATCH_DnsZoneNameRecords_Request['requestBody'];

/**
 * Request type for PATCH DnsZoneNameRrsets endpoint
 *
 * Patch Zone Rrsets
 *
 * @remarks
 * This type defines the complete request structure for the PATCH DnsZoneNameRrsets endpoint.
 * It includes all parameters (query, path) and request body types as defined in the OpenAPI specification.
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @example
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @path /v1/dns/{zone_name}/rrsets
 * @param zone_name (path) - DNS zone name (trailing dot optional)
 *
 * @see {@link PATCH_DnsZoneNameRrsets_Request_Query} - Query parameters type
 * @see {@link PATCH_DnsZoneNameRrsets_Request_Path} - Path parameters type
 * @see {@link PATCH_DnsZoneNameRrsets_Request_Body} - Request body type
 */
export type PATCH_DnsZoneNameRrsets_Request = {
  parameters: {
    path: operations['patch_zone_rrsets_v1_dns__zone_name__rrsets_patch']['parameters']['path'];
  };
  requestBody: DnsZoneRrsetsPatchOps;
}
/**
 * Path parameters for PATCH /v1/dns/{zone_name}/rrsets
 *
 * @remarks
 * This type defines the path parameters for the PATCH /v1/dns/{zone_name}/rrsets endpoint.
 * It provides type safety for all path parameters as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for path parameters.
 *
 * @path /v1/dns/{zone_name}/rrsets
 * @param zone_name (path) - DNS zone name (trailing dot optional)
 */
export type PATCH_DnsZoneNameRrsets_Request_Path = PATCH_DnsZoneNameRrsets_Request['parameters']['path'];
/**
 * Request body for PATCH /v1/dns/{zone_name}/rrsets
 *
 * @remarks
 * This type defines the request body structure for the PATCH /v1/dns/{zone_name}/rrsets endpoint.
 * It provides type safety for the request body as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for request body structure.
 *
 * @path /v1/dns/{zone_name}/rrsets
 */
export type PATCH_DnsZoneNameRrsets_Request_Body = PATCH_DnsZoneNameRrsets_Request['requestBody'];

/**
 * Request type for PUT DnsZoneNameRrsets endpoint
 *
 * Update Zone Rrsets
 *
 * @remarks
 * This type defines the complete request structure for the PUT DnsZoneNameRrsets endpoint.
 * It includes all parameters (query, path) and request body types as defined in the OpenAPI specification.
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @example
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @path /v1/dns/{zone_name}/rrsets
 * @param zone_name (path) - DNS zone name (trailing dot optional)
 *
 * @see {@link PUT_DnsZoneNameRrsets_Request_Query} - Query parameters type
 * @see {@link PUT_DnsZoneNameRrsets_Request_Path} - Path parameters type
 * @see {@link PUT_DnsZoneNameRrsets_Request_Body} - Request body type
 */
export type PUT_DnsZoneNameRrsets_Request = {
  parameters: {
    path: operations['update_zone_rrsets_v1_dns__zone_name__rrsets_put']['parameters']['path'];
  };
  requestBody: DnsZoneRrsetsCreate;
}
/**
 * Path parameters for PUT /v1/dns/{zone_name}/rrsets
 *
 * @remarks
 * This type defines the path parameters for the PUT /v1/dns/{zone_name}/rrsets endpoint.
 * It provides type safety for all path parameters as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for path parameters.
 *
 * @path /v1/dns/{zone_name}/rrsets
 * @param zone_name (path) - DNS zone name (trailing dot optional)
 */
export type PUT_DnsZoneNameRrsets_Request_Path = PUT_DnsZoneNameRrsets_Request['parameters']['path'];
/**
 * Request body for PUT /v1/dns/{zone_name}/rrsets
 *
 * @remarks
 * This type defines the request body structure for the PUT /v1/dns/{zone_name}/rrsets endpoint.
 * It provides type safety for the request body as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for request body structure.
 *
 * @path /v1/dns/{zone_name}/rrsets
 */
export type PUT_DnsZoneNameRrsets_Request_Body = PUT_DnsZoneNameRrsets_Request['requestBody'];

/**
 * Request type for GET DomainSearchSuggest endpoint
 *
 * Suggest
 *
 * @remarks
 * This type defines the complete request structure for the GET DomainSearchSuggest endpoint.
 * It includes all parameters (query, path) and request body types as defined in the OpenAPI specification.
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @example
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @path /v1/domain-search/suggest
 * @param query (query) - The primary keyword or phrase for the domain search
 * @param tlds (query) - 
Specify one or more TLDs to include in the search.

 * @param limit (query) - The maximum number of domain suggestions to return
 * @param premium (query) - Whether to include premium domains in the suggestions
 *
 * @see {@link GET_DomainSearchSuggest_Request_Query} - Query parameters type
 * @see {@link GET_DomainSearchSuggest_Request_Path} - Path parameters type
 * @see {@link GET_DomainSearchSuggest_Request_Body} - Request body type
 */
export type GET_DomainSearchSuggest_Request = {
  parameters: {
    query: operations['suggest_v1_domain_search_suggest_get']['parameters']['query'];
  };
}
/**
 * Query parameters for GET /v1/domain-search/suggest
 *
 * @remarks
 * This type defines the query parameters for the GET /v1/domain-search/suggest endpoint.
 * It provides type safety for all query parameters as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for query parameters.
 *
 * @path /v1/domain-search/suggest
 * @param query (query) - The primary keyword or phrase for the domain search
 * @param tlds (query) - 
Specify one or more TLDs to include in the search.

 * @param limit (query) - The maximum number of domain suggestions to return
 * @param premium (query) - Whether to include premium domains in the suggestions
 */
export type GET_DomainSearchSuggest_Request_Query = GET_DomainSearchSuggest_Request['parameters']['query'];

/**
 * Request type for GET Domains endpoint
 *
 * List all domains
 * Retrieves a paginated list of all domains
 *
 * @remarks
 * This type defines the complete request structure for the GET Domains endpoint.
 * It includes all parameters (query, path) and request body types as defined in the OpenAPI specification.
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @example
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @path /v1/domains
 *
 * @see {@link GET_Domains_Request_Query} - Query parameters type
 * @see {@link GET_Domains_Request_Path} - Path parameters type
 * @see {@link GET_Domains_Request_Body} - Request body type
 */
export type GET_Domains_Request = {
  parameters: {
    query: operations['get_domains_v1_domains_get']['parameters']['query'];
  };
}
/**
 * Query parameters for GET /v1/domains
 *
 * @remarks
 * This type defines the query parameters for the GET /v1/domains endpoint.
 * It provides type safety for all query parameters as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for query parameters.
 *
 * @path /v1/domains
 */
export type GET_Domains_Request_Query = GET_Domains_Request['parameters']['query'];

/**
 * Request type for POST Domains endpoint
 *
 * Create a domain
 * Registers a new domain
 *
 * @remarks
 * This type defines the complete request structure for the POST Domains endpoint.
 * It includes all parameters (query, path) and request body types as defined in the OpenAPI specification.
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @example
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @path /v1/domains
 *
 * @see {@link POST_Domains_Request_Query} - Query parameters type
 * @see {@link POST_Domains_Request_Path} - Path parameters type
 * @see {@link POST_Domains_Request_Body} - Request body type
 */
export type POST_Domains_Request = {
  requestBody: DomainCreate;
}
/**
 * Request body for POST /v1/domains
 *
 * @remarks
 * This type defines the request body structure for the POST /v1/domains endpoint.
 * It provides type safety for the request body as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for request body structure.
 *
 * @path /v1/domains
 */
export type POST_Domains_Request_Body = POST_Domains_Request['requestBody'];

/**
 * Request type for GET DomainsCheck endpoint
 *
 * Check domain availability
 *
 * @remarks
 * This type defines the complete request structure for the GET DomainsCheck endpoint.
 * It includes all parameters (query, path) and request body types as defined in the OpenAPI specification.
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @example
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @path /v1/domains/check
 * @param domains (query) - 
Specify one or more domains to check for availability.

 *
 * @see {@link GET_DomainsCheck_Request_Query} - Query parameters type
 * @see {@link GET_DomainsCheck_Request_Path} - Path parameters type
 * @see {@link GET_DomainsCheck_Request_Body} - Request body type
 */
export type GET_DomainsCheck_Request = {
  parameters: {
    query: operations['epp_check_domain_v1_domains_check_get']['parameters']['query'];
  };
}
/**
 * Query parameters for GET /v1/domains/check
 *
 * @remarks
 * This type defines the query parameters for the GET /v1/domains/check endpoint.
 * It provides type safety for all query parameters as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for query parameters.
 *
 * @path /v1/domains/check
 * @param domains (query) - 
Specify one or more domains to check for availability.

 */
export type GET_DomainsCheck_Request_Query = GET_DomainsCheck_Request['parameters']['query'];

/**
 * Request type for DELETE DomainsDomainReference endpoint
 *
 * Delete a domain
 * Initiates the deletion process for a domain. The domain will be marked for deletion
and will enter a redemption period during which it may be restored.
 *
 * @remarks
 * This type defines the complete request structure for the DELETE DomainsDomainReference endpoint.
 * It includes all parameters (query, path) and request body types as defined in the OpenAPI specification.
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @example
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @path /v1/domains/{domain_reference}
 *
 * @see {@link DELETE_DomainsDomainReference_Request_Query} - Query parameters type
 * @see {@link DELETE_DomainsDomainReference_Request_Path} - Path parameters type
 * @see {@link DELETE_DomainsDomainReference_Request_Body} - Request body type
 */
export type DELETE_DomainsDomainReference_Request = {
  parameters: {
    path: operations['delete_domain_v1_domains__domain_reference__delete']['parameters']['path'];
  };
}
/**
 * Path parameters for DELETE /v1/domains/{domain_reference}
 *
 * @remarks
 * This type defines the path parameters for the DELETE /v1/domains/{domain_reference} endpoint.
 * It provides type safety for all path parameters as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for path parameters.
 *
 * @path /v1/domains/{domain_reference}
 */
export type DELETE_DomainsDomainReference_Request_Path = DELETE_DomainsDomainReference_Request['parameters']['path'];

/**
 * Request type for GET DomainsDomainReference endpoint
 *
 * Retrieve a domain
 * Retrieves a single domain by either its name or id
 *
 * @remarks
 * This type defines the complete request structure for the GET DomainsDomainReference endpoint.
 * It includes all parameters (query, path) and request body types as defined in the OpenAPI specification.
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @example
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @path /v1/domains/{domain_reference}
 *
 * @see {@link GET_DomainsDomainReference_Request_Query} - Query parameters type
 * @see {@link GET_DomainsDomainReference_Request_Path} - Path parameters type
 * @see {@link GET_DomainsDomainReference_Request_Body} - Request body type
 */
export type GET_DomainsDomainReference_Request = {
  parameters: {
    path: operations['get_domain_v1_domains__domain_reference__get']['parameters']['path'];
  };
}
/**
 * Path parameters for GET /v1/domains/{domain_reference}
 *
 * @remarks
 * This type defines the path parameters for the GET /v1/domains/{domain_reference} endpoint.
 * It provides type safety for all path parameters as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for path parameters.
 *
 * @path /v1/domains/{domain_reference}
 */
export type GET_DomainsDomainReference_Request_Path = GET_DomainsDomainReference_Request['parameters']['path'];

/**
 * Request type for PATCH DomainsDomainReference endpoint
 *
 * Update a domain
 * Updates various attributes of an existing domain. Only the fields provided in the request
will be updated; all other fields will remain unchanged. <br>
Providing `clientTransferProhibited` as a status will set the `transfer_lock` property
 *
 * @remarks
 * This type defines the complete request structure for the PATCH DomainsDomainReference endpoint.
 * It includes all parameters (query, path) and request body types as defined in the OpenAPI specification.
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @example
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @path /v1/domains/{domain_reference}
 *
 * @see {@link PATCH_DomainsDomainReference_Request_Query} - Query parameters type
 * @see {@link PATCH_DomainsDomainReference_Request_Path} - Path parameters type
 * @see {@link PATCH_DomainsDomainReference_Request_Body} - Request body type
 */
export type PATCH_DomainsDomainReference_Request = {
  parameters: {
    path: operations['update_domain_v1_domains__domain_reference__patch']['parameters']['path'];
  };
  requestBody: DomainUpdate;
}
/**
 * Path parameters for PATCH /v1/domains/{domain_reference}
 *
 * @remarks
 * This type defines the path parameters for the PATCH /v1/domains/{domain_reference} endpoint.
 * It provides type safety for all path parameters as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for path parameters.
 *
 * @path /v1/domains/{domain_reference}
 */
export type PATCH_DomainsDomainReference_Request_Path = PATCH_DomainsDomainReference_Request['parameters']['path'];
/**
 * Request body for PATCH /v1/domains/{domain_reference}
 *
 * @remarks
 * This type defines the request body structure for the PATCH /v1/domains/{domain_reference} endpoint.
 * It provides type safety for the request body as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for request body structure.
 *
 * @path /v1/domains/{domain_reference}
 */
export type PATCH_DomainsDomainReference_Request_Body = PATCH_DomainsDomainReference_Request['requestBody'];

/**
 * Request type for DELETE DomainsDomainReferenceDnssec endpoint
 *
 * Delete DNSSEC data
 * Removes all DNSSEC data for a domain
 *
 * @remarks
 * This type defines the complete request structure for the DELETE DomainsDomainReferenceDnssec endpoint.
 * It includes all parameters (query, path) and request body types as defined in the OpenAPI specification.
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @example
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @path /v1/domains/{domain_reference}/dnssec
 *
 * @see {@link DELETE_DomainsDomainReferenceDnssec_Request_Query} - Query parameters type
 * @see {@link DELETE_DomainsDomainReferenceDnssec_Request_Path} - Path parameters type
 * @see {@link DELETE_DomainsDomainReferenceDnssec_Request_Body} - Request body type
 */
export type DELETE_DomainsDomainReferenceDnssec_Request = {
  parameters: {
    path: operations['delete_dnssec_v1_domains__domain_reference__dnssec_delete']['parameters']['path'];
  };
}
/**
 * Path parameters for DELETE /v1/domains/{domain_reference}/dnssec
 *
 * @remarks
 * This type defines the path parameters for the DELETE /v1/domains/{domain_reference}/dnssec endpoint.
 * It provides type safety for all path parameters as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for path parameters.
 *
 * @path /v1/domains/{domain_reference}/dnssec
 */
export type DELETE_DomainsDomainReferenceDnssec_Request_Path = DELETE_DomainsDomainReferenceDnssec_Request['parameters']['path'];

/**
 * Request type for GET DomainsDomainReferenceDnssec endpoint
 *
 * Retrieve DNSSEC data
 * Fetches all DNSSEC records associated with the specified domain.
 *
 * @remarks
 * This type defines the complete request structure for the GET DomainsDomainReferenceDnssec endpoint.
 * It includes all parameters (query, path) and request body types as defined in the OpenAPI specification.
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @example
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @path /v1/domains/{domain_reference}/dnssec
 *
 * @see {@link GET_DomainsDomainReferenceDnssec_Request_Query} - Query parameters type
 * @see {@link GET_DomainsDomainReferenceDnssec_Request_Path} - Path parameters type
 * @see {@link GET_DomainsDomainReferenceDnssec_Request_Body} - Request body type
 */
export type GET_DomainsDomainReferenceDnssec_Request = {
  parameters: {
    path: operations['get_dnssec_v1_domains__domain_reference__dnssec_get']['parameters']['path'];
  };
}
/**
 * Path parameters for GET /v1/domains/{domain_reference}/dnssec
 *
 * @remarks
 * This type defines the path parameters for the GET /v1/domains/{domain_reference}/dnssec endpoint.
 * It provides type safety for all path parameters as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for path parameters.
 *
 * @path /v1/domains/{domain_reference}/dnssec
 */
export type GET_DomainsDomainReferenceDnssec_Request_Path = GET_DomainsDomainReferenceDnssec_Request['parameters']['path'];

/**
 * Request type for PUT DomainsDomainReferenceDnssec endpoint
 *
 * Update DNSSEC data
 * Replaces all existing DNSSEC records for the domain with the provided records.
 *
 * @remarks
 * This type defines the complete request structure for the PUT DomainsDomainReferenceDnssec endpoint.
 * It includes all parameters (query, path) and request body types as defined in the OpenAPI specification.
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @example
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @path /v1/domains/{domain_reference}/dnssec
 *
 * @see {@link PUT_DomainsDomainReferenceDnssec_Request_Query} - Query parameters type
 * @see {@link PUT_DomainsDomainReferenceDnssec_Request_Path} - Path parameters type
 * @see {@link PUT_DomainsDomainReferenceDnssec_Request_Body} - Request body type
 */
export type PUT_DomainsDomainReferenceDnssec_Request = {
  parameters: {
    path: operations['create_or_update_dnssec_v1_domains__domain_reference__dnssec_put']['parameters']['path'];
  };
  requestBody: DomainDnssecDataCreateArray;
}
/**
 * Path parameters for PUT /v1/domains/{domain_reference}/dnssec
 *
 * @remarks
 * This type defines the path parameters for the PUT /v1/domains/{domain_reference}/dnssec endpoint.
 * It provides type safety for all path parameters as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for path parameters.
 *
 * @path /v1/domains/{domain_reference}/dnssec
 */
export type PUT_DomainsDomainReferenceDnssec_Request_Path = PUT_DomainsDomainReferenceDnssec_Request['parameters']['path'];
/**
 * Request body for PUT /v1/domains/{domain_reference}/dnssec
 *
 * @remarks
 * This type defines the request body structure for the PUT /v1/domains/{domain_reference}/dnssec endpoint.
 * It provides type safety for the request body as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for request body structure.
 *
 * @path /v1/domains/{domain_reference}/dnssec
 */
export type PUT_DomainsDomainReferenceDnssec_Request_Body = PUT_DomainsDomainReferenceDnssec_Request['requestBody'];

/**
 * Request type for POST DomainsDomainReferenceRenew endpoint
 *
 * Renew a domain
 * Extends the registration period of an existing domain. The renewal period is added
to the current expiration date of the domain.
 *
 * @remarks
 * This type defines the complete request structure for the POST DomainsDomainReferenceRenew endpoint.
 * It includes all parameters (query, path) and request body types as defined in the OpenAPI specification.
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @example
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @path /v1/domains/{domain_reference}/renew
 *
 * @see {@link POST_DomainsDomainReferenceRenew_Request_Query} - Query parameters type
 * @see {@link POST_DomainsDomainReferenceRenew_Request_Path} - Path parameters type
 * @see {@link POST_DomainsDomainReferenceRenew_Request_Body} - Request body type
 */
export type POST_DomainsDomainReferenceRenew_Request = {
  parameters: {
    path: operations['renew_domain_v1_domains__domain_reference__renew_post']['parameters']['path'];
  };
  requestBody: DomainRenewRequest;
}
/**
 * Path parameters for POST /v1/domains/{domain_reference}/renew
 *
 * @remarks
 * This type defines the path parameters for the POST /v1/domains/{domain_reference}/renew endpoint.
 * It provides type safety for all path parameters as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for path parameters.
 *
 * @path /v1/domains/{domain_reference}/renew
 */
export type POST_DomainsDomainReferenceRenew_Request_Path = POST_DomainsDomainReferenceRenew_Request['parameters']['path'];
/**
 * Request body for POST /v1/domains/{domain_reference}/renew
 *
 * @remarks
 * This type defines the request body structure for the POST /v1/domains/{domain_reference}/renew endpoint.
 * It provides type safety for the request body as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for request body structure.
 *
 * @path /v1/domains/{domain_reference}/renew
 */
export type POST_DomainsDomainReferenceRenew_Request_Body = POST_DomainsDomainReferenceRenew_Request['requestBody'];

/**
 * Request type for DELETE DomainsDomainReferenceTransfer endpoint
 *
 * Cancel a domain transfer
 * This will cancel the in-progress domain transfer and delete the domain object
 *
 * @remarks
 * This type defines the complete request structure for the DELETE DomainsDomainReferenceTransfer endpoint.
 * It includes all parameters (query, path) and request body types as defined in the OpenAPI specification.
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @example
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @path /v1/domains/{domain_reference}/transfer
 *
 * @see {@link DELETE_DomainsDomainReferenceTransfer_Request_Query} - Query parameters type
 * @see {@link DELETE_DomainsDomainReferenceTransfer_Request_Path} - Path parameters type
 * @see {@link DELETE_DomainsDomainReferenceTransfer_Request_Body} - Request body type
 */
export type DELETE_DomainsDomainReferenceTransfer_Request = {
  parameters: {
    path: operations['cancel_domain_transfer_v1_domains__domain_reference__transfer_delete']['parameters']['path'];
  };
}
/**
 * Path parameters for DELETE /v1/domains/{domain_reference}/transfer
 *
 * @remarks
 * This type defines the path parameters for the DELETE /v1/domains/{domain_reference}/transfer endpoint.
 * It provides type safety for all path parameters as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for path parameters.
 *
 * @path /v1/domains/{domain_reference}/transfer
 */
export type DELETE_DomainsDomainReferenceTransfer_Request_Path = DELETE_DomainsDomainReferenceTransfer_Request['parameters']['path'];

/**
 * Request type for GET DomainsSummary endpoint
 *
 * Get domain summary
 * Retrieves a summary of domains including counts by status, TLD, and expiration timeframes
 *
 * @remarks
 * This type defines the complete request structure for the GET DomainsSummary endpoint.
 * It includes all parameters (query, path) and request body types as defined in the OpenAPI specification.
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @example
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @path /v1/domains/summary
 *
 * @see {@link GET_DomainsSummary_Request_Query} - Query parameters type
 * @see {@link GET_DomainsSummary_Request_Path} - Path parameters type
 * @see {@link GET_DomainsSummary_Request_Body} - Request body type
 */
export type GET_DomainsSummary_Request = {
}

/**
 * Request type for POST DomainsTransfer endpoint
 *
 * Transfer a domain
 * Start the transfer process for a domain <br>
The domain will be in state `pending_transfer` until the transfer is completed.
This process can take up to 5 days, until the transfer is approved
 *
 * @remarks
 * This type defines the complete request structure for the POST DomainsTransfer endpoint.
 * It includes all parameters (query, path) and request body types as defined in the OpenAPI specification.
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @example
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @path /v1/domains/transfer
 *
 * @see {@link POST_DomainsTransfer_Request_Query} - Query parameters type
 * @see {@link POST_DomainsTransfer_Request_Path} - Path parameters type
 * @see {@link POST_DomainsTransfer_Request_Body} - Request body type
 */
export type POST_DomainsTransfer_Request = {
  requestBody: DomainTransferIn;
}
/**
 * Request body for POST /v1/domains/transfer
 *
 * @remarks
 * This type defines the request body structure for the POST /v1/domains/transfer endpoint.
 * It provides type safety for the request body as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for request body structure.
 *
 * @path /v1/domains/transfer
 */
export type POST_DomainsTransfer_Request_Body = POST_DomainsTransfer_Request['requestBody'];

/**
 * Request type for GET EmailForwards endpoint
 *
 * List Email Forwards
 *
 * @remarks
 * This type defines the complete request structure for the GET EmailForwards endpoint.
 * It includes all parameters (query, path) and request body types as defined in the OpenAPI specification.
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @example
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @path /v1/email-forwards
 * @param status (query) - Optional status to filter the results
 * @param source_address (query) - Optional source address to filter the results
 * @param target_address (query) - Optional target address to filter the results
 *
 * @see {@link GET_EmailForwards_Request_Query} - Query parameters type
 * @see {@link GET_EmailForwards_Request_Path} - Path parameters type
 * @see {@link GET_EmailForwards_Request_Body} - Request body type
 */
export type GET_EmailForwards_Request = {
  parameters: {
    query: operations['list_email_forwards_v1_email_forwards_get']['parameters']['query'];
  };
}
/**
 * Query parameters for GET /v1/email-forwards
 *
 * @remarks
 * This type defines the query parameters for the GET /v1/email-forwards endpoint.
 * It provides type safety for all query parameters as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for query parameters.
 *
 * @path /v1/email-forwards
 * @param status (query) - Optional status to filter the results
 * @param source_address (query) - Optional source address to filter the results
 * @param target_address (query) - Optional target address to filter the results
 */
export type GET_EmailForwards_Request_Query = GET_EmailForwards_Request['parameters']['query'];

/**
 * Request type for POST EmailForwards endpoint
 *
 * Create Email Forward
 *
 * @remarks
 * This type defines the complete request structure for the POST EmailForwards endpoint.
 * It includes all parameters (query, path) and request body types as defined in the OpenAPI specification.
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @example
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @path /v1/email-forwards
 *
 * @see {@link POST_EmailForwards_Request_Query} - Query parameters type
 * @see {@link POST_EmailForwards_Request_Path} - Path parameters type
 * @see {@link POST_EmailForwards_Request_Body} - Request body type
 */
export type POST_EmailForwards_Request = {
  requestBody: EmailForwardCreate;
}
/**
 * Request body for POST /v1/email-forwards
 *
 * @remarks
 * This type defines the request body structure for the POST /v1/email-forwards endpoint.
 * It provides type safety for the request body as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for request body structure.
 *
 * @path /v1/email-forwards
 */
export type POST_EmailForwards_Request_Body = POST_EmailForwards_Request['requestBody'];

/**
 * Request type for POST EmailForwardsBulkDelete endpoint
 *
 * Bulk Delete Email Forwards
 *
 * @remarks
 * This type defines the complete request structure for the POST EmailForwardsBulkDelete endpoint.
 * It includes all parameters (query, path) and request body types as defined in the OpenAPI specification.
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @example
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @path /v1/email-forwards/bulk-delete
 *
 * @see {@link POST_EmailForwardsBulkDelete_Request_Query} - Query parameters type
 * @see {@link POST_EmailForwardsBulkDelete_Request_Path} - Path parameters type
 * @see {@link POST_EmailForwardsBulkDelete_Request_Body} - Request body type
 */
export type POST_EmailForwardsBulkDelete_Request = {
  requestBody: EmailForwardBulkDelete;
}
/**
 * Request body for POST /v1/email-forwards/bulk-delete
 *
 * @remarks
 * This type defines the request body structure for the POST /v1/email-forwards/bulk-delete endpoint.
 * It provides type safety for the request body as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for request body structure.
 *
 * @path /v1/email-forwards/bulk-delete
 */
export type POST_EmailForwardsBulkDelete_Request_Body = POST_EmailForwardsBulkDelete_Request['requestBody'];

/**
 * Request type for PATCH EmailForwardsBulkUpdate endpoint
 *
 * Bulk Update Email Forwards
 *
 * @remarks
 * This type defines the complete request structure for the PATCH EmailForwardsBulkUpdate endpoint.
 * It includes all parameters (query, path) and request body types as defined in the OpenAPI specification.
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @example
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @path /v1/email-forwards/bulk-update
 *
 * @see {@link PATCH_EmailForwardsBulkUpdate_Request_Query} - Query parameters type
 * @see {@link PATCH_EmailForwardsBulkUpdate_Request_Path} - Path parameters type
 * @see {@link PATCH_EmailForwardsBulkUpdate_Request_Body} - Request body type
 */
export type PATCH_EmailForwardsBulkUpdate_Request = {
  requestBody: EmailForwardBulkUpdate;
}
/**
 * Request body for PATCH /v1/email-forwards/bulk-update
 *
 * @remarks
 * This type defines the request body structure for the PATCH /v1/email-forwards/bulk-update endpoint.
 * It provides type safety for the request body as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for request body structure.
 *
 * @path /v1/email-forwards/bulk-update
 */
export type PATCH_EmailForwardsBulkUpdate_Request_Body = PATCH_EmailForwardsBulkUpdate_Request['requestBody'];

/**
 * Request type for DELETE EmailForwardsEmailForwardId endpoint
 *
 * Delete Email Forward
 *
 * @remarks
 * This type defines the complete request structure for the DELETE EmailForwardsEmailForwardId endpoint.
 * It includes all parameters (query, path) and request body types as defined in the OpenAPI specification.
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @example
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @path /v1/email-forwards/{email_forward_id}
 *
 * @see {@link DELETE_EmailForwardsEmailForwardId_Request_Query} - Query parameters type
 * @see {@link DELETE_EmailForwardsEmailForwardId_Request_Path} - Path parameters type
 * @see {@link DELETE_EmailForwardsEmailForwardId_Request_Body} - Request body type
 */
export type DELETE_EmailForwardsEmailForwardId_Request = {
  parameters: {
    path: operations['delete_email_forward_v1_email_forwards__email_forward_id__delete']['parameters']['path'];
  };
}
/**
 * Path parameters for DELETE /v1/email-forwards/{email_forward_id}
 *
 * @remarks
 * This type defines the path parameters for the DELETE /v1/email-forwards/{email_forward_id} endpoint.
 * It provides type safety for all path parameters as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for path parameters.
 *
 * @path /v1/email-forwards/{email_forward_id}
 */
export type DELETE_EmailForwardsEmailForwardId_Request_Path = DELETE_EmailForwardsEmailForwardId_Request['parameters']['path'];

/**
 * Request type for GET EmailForwardsEmailForwardId endpoint
 *
 * Get Email Forward
 *
 * @remarks
 * This type defines the complete request structure for the GET EmailForwardsEmailForwardId endpoint.
 * It includes all parameters (query, path) and request body types as defined in the OpenAPI specification.
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @example
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @path /v1/email-forwards/{email_forward_id}
 *
 * @see {@link GET_EmailForwardsEmailForwardId_Request_Query} - Query parameters type
 * @see {@link GET_EmailForwardsEmailForwardId_Request_Path} - Path parameters type
 * @see {@link GET_EmailForwardsEmailForwardId_Request_Body} - Request body type
 */
export type GET_EmailForwardsEmailForwardId_Request = {
  parameters: {
    path: operations['get_email_forward_v1_email_forwards__email_forward_id__get']['parameters']['path'];
  };
}
/**
 * Path parameters for GET /v1/email-forwards/{email_forward_id}
 *
 * @remarks
 * This type defines the path parameters for the GET /v1/email-forwards/{email_forward_id} endpoint.
 * It provides type safety for all path parameters as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for path parameters.
 *
 * @path /v1/email-forwards/{email_forward_id}
 */
export type GET_EmailForwardsEmailForwardId_Request_Path = GET_EmailForwardsEmailForwardId_Request['parameters']['path'];

/**
 * Request type for PATCH EmailForwardsEmailForwardId endpoint
 *
 * Update Email Forward
 *
 * @remarks
 * This type defines the complete request structure for the PATCH EmailForwardsEmailForwardId endpoint.
 * It includes all parameters (query, path) and request body types as defined in the OpenAPI specification.
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @example
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @path /v1/email-forwards/{email_forward_id}
 *
 * @see {@link PATCH_EmailForwardsEmailForwardId_Request_Query} - Query parameters type
 * @see {@link PATCH_EmailForwardsEmailForwardId_Request_Path} - Path parameters type
 * @see {@link PATCH_EmailForwardsEmailForwardId_Request_Body} - Request body type
 */
export type PATCH_EmailForwardsEmailForwardId_Request = {
  parameters: {
    path: operations['update_email_forward_v1_email_forwards__email_forward_id__patch']['parameters']['path'];
  };
  requestBody: EmailForwardUpdate;
}
/**
 * Path parameters for PATCH /v1/email-forwards/{email_forward_id}
 *
 * @remarks
 * This type defines the path parameters for the PATCH /v1/email-forwards/{email_forward_id} endpoint.
 * It provides type safety for all path parameters as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for path parameters.
 *
 * @path /v1/email-forwards/{email_forward_id}
 */
export type PATCH_EmailForwardsEmailForwardId_Request_Path = PATCH_EmailForwardsEmailForwardId_Request['parameters']['path'];
/**
 * Request body for PATCH /v1/email-forwards/{email_forward_id}
 *
 * @remarks
 * This type defines the request body structure for the PATCH /v1/email-forwards/{email_forward_id} endpoint.
 * It provides type safety for the request body as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for request body structure.
 *
 * @path /v1/email-forwards/{email_forward_id}
 */
export type PATCH_EmailForwardsEmailForwardId_Request_Body = PATCH_EmailForwardsEmailForwardId_Request['requestBody'];

/**
 * Request type for GET Event endpoint
 *
 * Get Events
 *
 * @remarks
 * This type defines the complete request structure for the GET Event endpoint.
 * It includes all parameters (query, path) and request body types as defined in the OpenAPI specification.
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @example
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @path /v1/event
 *
 * @see {@link GET_Event_Request_Query} - Query parameters type
 * @see {@link GET_Event_Request_Path} - Path parameters type
 * @see {@link GET_Event_Request_Body} - Request body type
 */
export type GET_Event_Request = {
  parameters: {
    query: operations['get_events_v1_event_get']['parameters']['query'];
  };
}
/**
 * Query parameters for GET /v1/event
 *
 * @remarks
 * This type defines the query parameters for the GET /v1/event endpoint.
 * It provides type safety for all query parameters as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for query parameters.
 *
 * @path /v1/event
 */
export type GET_Event_Request_Query = GET_Event_Request['parameters']['query'];

/**
 * Request type for GET EventEventId endpoint
 *
 * Get Event
 *
 * @remarks
 * This type defines the complete request structure for the GET EventEventId endpoint.
 * It includes all parameters (query, path) and request body types as defined in the OpenAPI specification.
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @example
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @path /v1/event/{event_id}
 *
 * @see {@link GET_EventEventId_Request_Query} - Query parameters type
 * @see {@link GET_EventEventId_Request_Path} - Path parameters type
 * @see {@link GET_EventEventId_Request_Body} - Request body type
 */
export type GET_EventEventId_Request = {
  parameters: {
    path: operations['get_event_v1_event__event_id__get']['parameters']['path'];
  };
}
/**
 * Path parameters for GET /v1/event/{event_id}
 *
 * @remarks
 * This type defines the path parameters for the GET /v1/event/{event_id} endpoint.
 * It provides type safety for all path parameters as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for path parameters.
 *
 * @path /v1/event/{event_id}
 */
export type GET_EventEventId_Request_Path = GET_EventEventId_Request['parameters']['path'];

/**
 * Request type for PATCH EventEventId endpoint
 *
 * Acknowledge Event
 *
 * @remarks
 * This type defines the complete request structure for the PATCH EventEventId endpoint.
 * It includes all parameters (query, path) and request body types as defined in the OpenAPI specification.
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @example
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @path /v1/event/{event_id}
 *
 * @see {@link PATCH_EventEventId_Request_Query} - Query parameters type
 * @see {@link PATCH_EventEventId_Request_Path} - Path parameters type
 * @see {@link PATCH_EventEventId_Request_Body} - Request body type
 */
export type PATCH_EventEventId_Request = {
  parameters: {
    path: operations['acknowledge_event_v1_event__event_id__patch']['parameters']['path'];
  };
}
/**
 * Path parameters for PATCH /v1/event/{event_id}
 *
 * @remarks
 * This type defines the path parameters for the PATCH /v1/event/{event_id} endpoint.
 * It provides type safety for all path parameters as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for path parameters.
 *
 * @path /v1/event/{event_id}
 */
export type PATCH_EventEventId_Request_Path = PATCH_EventEventId_Request['parameters']['path'];

/**
 * Request type for GET Notifications endpoint
 *
 * List Notifications
 *
 * @remarks
 * This type defines the complete request structure for the GET Notifications endpoint.
 * It includes all parameters (query, path) and request body types as defined in the OpenAPI specification.
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @example
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @path /v1/notifications
 *
 * @see {@link GET_Notifications_Request_Query} - Query parameters type
 * @see {@link GET_Notifications_Request_Path} - Path parameters type
 * @see {@link GET_Notifications_Request_Body} - Request body type
 */
export type GET_Notifications_Request = {
  parameters: {
    query: operations['list_notifications_v1_notifications_get']['parameters']['query'];
  };
}
/**
 * Query parameters for GET /v1/notifications
 *
 * @remarks
 * This type defines the query parameters for the GET /v1/notifications endpoint.
 * It provides type safety for all query parameters as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for query parameters.
 *
 * @path /v1/notifications
 */
export type GET_Notifications_Request_Query = GET_Notifications_Request['parameters']['query'];

/**
 * Request type for POST Notifications endpoint
 *
 * Create Notification
 *
 * @remarks
 * This type defines the complete request structure for the POST Notifications endpoint.
 * It includes all parameters (query, path) and request body types as defined in the OpenAPI specification.
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @example
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @path /v1/notifications
 *
 * @see {@link POST_Notifications_Request_Query} - Query parameters type
 * @see {@link POST_Notifications_Request_Path} - Path parameters type
 * @see {@link POST_Notifications_Request_Body} - Request body type
 */
export type POST_Notifications_Request = {
  requestBody: NotificationCreate;
}
/**
 * Request body for POST /v1/notifications
 *
 * @remarks
 * This type defines the request body structure for the POST /v1/notifications endpoint.
 * It provides type safety for the request body as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for request body structure.
 *
 * @path /v1/notifications
 */
export type POST_Notifications_Request_Body = POST_Notifications_Request['requestBody'];

/**
 * Request type for DELETE NotificationsNotificationId endpoint
 *
 * Delete Notification
 *
 * @remarks
 * This type defines the complete request structure for the DELETE NotificationsNotificationId endpoint.
 * It includes all parameters (query, path) and request body types as defined in the OpenAPI specification.
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @example
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @path /v1/notifications/{notification_id}
 *
 * @see {@link DELETE_NotificationsNotificationId_Request_Query} - Query parameters type
 * @see {@link DELETE_NotificationsNotificationId_Request_Path} - Path parameters type
 * @see {@link DELETE_NotificationsNotificationId_Request_Body} - Request body type
 */
export type DELETE_NotificationsNotificationId_Request = {
  parameters: {
    path: operations['delete_notification_v1_notifications__notification_id__delete']['parameters']['path'];
  };
}
/**
 * Path parameters for DELETE /v1/notifications/{notification_id}
 *
 * @remarks
 * This type defines the path parameters for the DELETE /v1/notifications/{notification_id} endpoint.
 * It provides type safety for all path parameters as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for path parameters.
 *
 * @path /v1/notifications/{notification_id}
 */
export type DELETE_NotificationsNotificationId_Request_Path = DELETE_NotificationsNotificationId_Request['parameters']['path'];

/**
 * Request type for GET NotificationsNotificationId endpoint
 *
 * Get Notification
 *
 * @remarks
 * This type defines the complete request structure for the GET NotificationsNotificationId endpoint.
 * It includes all parameters (query, path) and request body types as defined in the OpenAPI specification.
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @example
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @path /v1/notifications/{notification_id}
 *
 * @see {@link GET_NotificationsNotificationId_Request_Query} - Query parameters type
 * @see {@link GET_NotificationsNotificationId_Request_Path} - Path parameters type
 * @see {@link GET_NotificationsNotificationId_Request_Body} - Request body type
 */
export type GET_NotificationsNotificationId_Request = {
  parameters: {
    query: operations['get_notification_v1_notifications__notification_id__get']['parameters']['query'];
    path: operations['get_notification_v1_notifications__notification_id__get']['parameters']['path'];
  };
}
/**
 * Query parameters for GET /v1/notifications/{notification_id}
 *
 * @remarks
 * This type defines the query parameters for the GET /v1/notifications/{notification_id} endpoint.
 * It provides type safety for all query parameters as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for query parameters.
 *
 * @path /v1/notifications/{notification_id}
 */
export type GET_NotificationsNotificationId_Request_Query = GET_NotificationsNotificationId_Request['parameters']['query'];
/**
 * Path parameters for GET /v1/notifications/{notification_id}
 *
 * @remarks
 * This type defines the path parameters for the GET /v1/notifications/{notification_id} endpoint.
 * It provides type safety for all path parameters as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for path parameters.
 *
 * @path /v1/notifications/{notification_id}
 */
export type GET_NotificationsNotificationId_Request_Path = GET_NotificationsNotificationId_Request['parameters']['path'];

/**
 * Request type for PUT NotificationsNotificationId endpoint
 *
 * Update Notification
 *
 * @remarks
 * This type defines the complete request structure for the PUT NotificationsNotificationId endpoint.
 * It includes all parameters (query, path) and request body types as defined in the OpenAPI specification.
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @example
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @path /v1/notifications/{notification_id}
 *
 * @see {@link PUT_NotificationsNotificationId_Request_Query} - Query parameters type
 * @see {@link PUT_NotificationsNotificationId_Request_Path} - Path parameters type
 * @see {@link PUT_NotificationsNotificationId_Request_Body} - Request body type
 */
export type PUT_NotificationsNotificationId_Request = {
  parameters: {
    path: operations['update_notification_v1_notifications__notification_id__put']['parameters']['path'];
  };
  requestBody: NotificationUpdate;
}
/**
 * Path parameters for PUT /v1/notifications/{notification_id}
 *
 * @remarks
 * This type defines the path parameters for the PUT /v1/notifications/{notification_id} endpoint.
 * It provides type safety for all path parameters as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for path parameters.
 *
 * @path /v1/notifications/{notification_id}
 */
export type PUT_NotificationsNotificationId_Request_Path = PUT_NotificationsNotificationId_Request['parameters']['path'];
/**
 * Request body for PUT /v1/notifications/{notification_id}
 *
 * @remarks
 * This type defines the request body structure for the PUT /v1/notifications/{notification_id} endpoint.
 * It provides type safety for the request body as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for request body structure.
 *
 * @path /v1/notifications/{notification_id}
 */
export type PUT_NotificationsNotificationId_Request_Body = PUT_NotificationsNotificationId_Request['requestBody'];

/**
 * Request type for PATCH NotificationsNotificationIdRead endpoint
 *
 * Update Notification Read
 *
 * @remarks
 * This type defines the complete request structure for the PATCH NotificationsNotificationIdRead endpoint.
 * It includes all parameters (query, path) and request body types as defined in the OpenAPI specification.
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @example
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @path /v1/notifications/{notification_id}/read
 *
 * @see {@link PATCH_NotificationsNotificationIdRead_Request_Query} - Query parameters type
 * @see {@link PATCH_NotificationsNotificationIdRead_Request_Path} - Path parameters type
 * @see {@link PATCH_NotificationsNotificationIdRead_Request_Body} - Request body type
 */
export type PATCH_NotificationsNotificationIdRead_Request = {
  parameters: {
    path: operations['update_notification_read_v1_notifications__notification_id__read_patch']['parameters']['path'];
  };
}
/**
 * Path parameters for PATCH /v1/notifications/{notification_id}/read
 *
 * @remarks
 * This type defines the path parameters for the PATCH /v1/notifications/{notification_id}/read endpoint.
 * It provides type safety for all path parameters as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for path parameters.
 *
 * @path /v1/notifications/{notification_id}/read
 */
export type PATCH_NotificationsNotificationIdRead_Request_Path = PATCH_NotificationsNotificationIdRead_Request['parameters']['path'];

/**
 * Request type for GET Organizations endpoint
 *
 * List Organizations
 *
 * @remarks
 * This type defines the complete request structure for the GET Organizations endpoint.
 * It includes all parameters (query, path) and request body types as defined in the OpenAPI specification.
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @example
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @path /v1/organizations
 *
 * @see {@link GET_Organizations_Request_Query} - Query parameters type
 * @see {@link GET_Organizations_Request_Path} - Path parameters type
 * @see {@link GET_Organizations_Request_Body} - Request body type
 */
export type GET_Organizations_Request = {
  parameters: {
    query: operations['list_organizations_v1_organizations_get']['parameters']['query'];
  };
}
/**
 * Query parameters for GET /v1/organizations
 *
 * @remarks
 * This type defines the query parameters for the GET /v1/organizations endpoint.
 * It provides type safety for all query parameters as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for query parameters.
 *
 * @path /v1/organizations
 */
export type GET_Organizations_Request_Query = GET_Organizations_Request['parameters']['query'];

/**
 * Request type for POST Organizations endpoint
 *
 * Create Organization
 *
 * @remarks
 * This type defines the complete request structure for the POST Organizations endpoint.
 * It includes all parameters (query, path) and request body types as defined in the OpenAPI specification.
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @example
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @path /v1/organizations
 *
 * @see {@link POST_Organizations_Request_Query} - Query parameters type
 * @see {@link POST_Organizations_Request_Path} - Path parameters type
 * @see {@link POST_Organizations_Request_Body} - Request body type
 */
export type POST_Organizations_Request = {
  requestBody: OrganizationCreate;
}
/**
 * Request body for POST /v1/organizations
 *
 * @remarks
 * This type defines the request body structure for the POST /v1/organizations endpoint.
 * It provides type safety for the request body as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for request body structure.
 *
 * @path /v1/organizations
 */
export type POST_Organizations_Request_Body = POST_Organizations_Request['requestBody'];

/**
 * Request type for GET OrganizationsAttributes endpoint
 *
 * Get Attributes
 *
 * @remarks
 * This type defines the complete request structure for the GET OrganizationsAttributes endpoint.
 * It includes all parameters (query, path) and request body types as defined in the OpenAPI specification.
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @example
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @path /v1/organizations/attributes
 * @param keys (query) - Optional list of attribute keys to filter
 *
 * @see {@link GET_OrganizationsAttributes_Request_Query} - Query parameters type
 * @see {@link GET_OrganizationsAttributes_Request_Path} - Path parameters type
 * @see {@link GET_OrganizationsAttributes_Request_Body} - Request body type
 */
export type GET_OrganizationsAttributes_Request = {
  parameters: {
    query: operations['get_attributes_v1_organizations_attributes_get']['parameters']['query'];
  };
}
/**
 * Query parameters for GET /v1/organizations/attributes
 *
 * @remarks
 * This type defines the query parameters for the GET /v1/organizations/attributes endpoint.
 * It provides type safety for all query parameters as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for query parameters.
 *
 * @path /v1/organizations/attributes
 * @param keys (query) - Optional list of attribute keys to filter
 */
export type GET_OrganizationsAttributes_Request_Query = GET_OrganizationsAttributes_Request['parameters']['query'];

/**
 * Request type for PATCH OrganizationsAttributes endpoint
 *
 * Update Attributes
 *
 * @remarks
 * This type defines the complete request structure for the PATCH OrganizationsAttributes endpoint.
 * It includes all parameters (query, path) and request body types as defined in the OpenAPI specification.
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @example
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @path /v1/organizations/attributes
 *
 * @see {@link PATCH_OrganizationsAttributes_Request_Query} - Query parameters type
 * @see {@link PATCH_OrganizationsAttributes_Request_Path} - Path parameters type
 * @see {@link PATCH_OrganizationsAttributes_Request_Body} - Request body type
 */
export type PATCH_OrganizationsAttributes_Request = {
  parameters: {
    query: operations['update_attributes_v1_organizations_attributes_patch']['parameters']['query'];
  };
  requestBody: OrganizationAttributeUpdateArray;
}
/**
 * Query parameters for PATCH /v1/organizations/attributes
 *
 * @remarks
 * This type defines the query parameters for the PATCH /v1/organizations/attributes endpoint.
 * It provides type safety for all query parameters as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for query parameters.
 *
 * @path /v1/organizations/attributes
 */
export type PATCH_OrganizationsAttributes_Request_Query = PATCH_OrganizationsAttributes_Request['parameters']['query'];
/**
 * Request body for PATCH /v1/organizations/attributes
 *
 * @remarks
 * This type defines the request body structure for the PATCH /v1/organizations/attributes endpoint.
 * It provides type safety for the request body as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for request body structure.
 *
 * @path /v1/organizations/attributes
 */
export type PATCH_OrganizationsAttributes_Request_Body = PATCH_OrganizationsAttributes_Request['requestBody'];

/**
 * Request type for GET OrganizationsAttributesOrganizationId endpoint
 *
 * Get Attributes
 *
 * @remarks
 * This type defines the complete request structure for the GET OrganizationsAttributesOrganizationId endpoint.
 * It includes all parameters (query, path) and request body types as defined in the OpenAPI specification.
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @example
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @path /v1/organizations/attributes/{organization_id}
 * @param keys (query) - Optional list of attribute keys to filter
 *
 * @see {@link GET_OrganizationsAttributesOrganizationId_Request_Query} - Query parameters type
 * @see {@link GET_OrganizationsAttributesOrganizationId_Request_Path} - Path parameters type
 * @see {@link GET_OrganizationsAttributesOrganizationId_Request_Body} - Request body type
 */
export type GET_OrganizationsAttributesOrganizationId_Request = {
  parameters: {
    query: operations['get_attributes_v1_organizations_attributes__organization_id__get']['parameters']['query'];
    path: operations['get_attributes_v1_organizations_attributes__organization_id__get']['parameters']['path'];
  };
}
/**
 * Query parameters for GET /v1/organizations/attributes/{organization_id}
 *
 * @remarks
 * This type defines the query parameters for the GET /v1/organizations/attributes/{organization_id} endpoint.
 * It provides type safety for all query parameters as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for query parameters.
 *
 * @path /v1/organizations/attributes/{organization_id}
 * @param keys (query) - Optional list of attribute keys to filter
 */
export type GET_OrganizationsAttributesOrganizationId_Request_Query = GET_OrganizationsAttributesOrganizationId_Request['parameters']['query'];
/**
 * Path parameters for GET /v1/organizations/attributes/{organization_id}
 *
 * @remarks
 * This type defines the path parameters for the GET /v1/organizations/attributes/{organization_id} endpoint.
 * It provides type safety for all path parameters as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for path parameters.
 *
 * @path /v1/organizations/attributes/{organization_id}
 */
export type GET_OrganizationsAttributesOrganizationId_Request_Path = GET_OrganizationsAttributesOrganizationId_Request['parameters']['path'];

/**
 * Request type for PATCH OrganizationsAttributesOrganizationId endpoint
 *
 * Update Attributes
 *
 * @remarks
 * This type defines the complete request structure for the PATCH OrganizationsAttributesOrganizationId endpoint.
 * It includes all parameters (query, path) and request body types as defined in the OpenAPI specification.
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @example
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @path /v1/organizations/attributes/{organization_id}
 *
 * @see {@link PATCH_OrganizationsAttributesOrganizationId_Request_Query} - Query parameters type
 * @see {@link PATCH_OrganizationsAttributesOrganizationId_Request_Path} - Path parameters type
 * @see {@link PATCH_OrganizationsAttributesOrganizationId_Request_Body} - Request body type
 */
export type PATCH_OrganizationsAttributesOrganizationId_Request = {
  parameters: {
    path: operations['update_attributes_v1_organizations_attributes__organization_id__patch']['parameters']['path'];
  };
  requestBody: OrganizationAttributeUpdateArray;
}
/**
 * Path parameters for PATCH /v1/organizations/attributes/{organization_id}
 *
 * @remarks
 * This type defines the path parameters for the PATCH /v1/organizations/attributes/{organization_id} endpoint.
 * It provides type safety for all path parameters as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for path parameters.
 *
 * @path /v1/organizations/attributes/{organization_id}
 */
export type PATCH_OrganizationsAttributesOrganizationId_Request_Path = PATCH_OrganizationsAttributesOrganizationId_Request['parameters']['path'];
/**
 * Request body for PATCH /v1/organizations/attributes/{organization_id}
 *
 * @remarks
 * This type defines the request body structure for the PATCH /v1/organizations/attributes/{organization_id} endpoint.
 * It provides type safety for the request body as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for request body structure.
 *
 * @path /v1/organizations/attributes/{organization_id}
 */
export type PATCH_OrganizationsAttributesOrganizationId_Request_Body = PATCH_OrganizationsAttributesOrganizationId_Request['requestBody'];

/**
 * Request type for GET OrganizationsIpRestrictions endpoint
 *
 * List Ip Restrictions
 * Get all IP restrictions for the organization
 *
 * @remarks
 * This type defines the complete request structure for the GET OrganizationsIpRestrictions endpoint.
 * It includes all parameters (query, path) and request body types as defined in the OpenAPI specification.
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @example
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @path /v1/organizations/ip-restrictions
 *
 * @see {@link GET_OrganizationsIpRestrictions_Request_Query} - Query parameters type
 * @see {@link GET_OrganizationsIpRestrictions_Request_Path} - Path parameters type
 * @see {@link GET_OrganizationsIpRestrictions_Request_Body} - Request body type
 */
export type GET_OrganizationsIpRestrictions_Request = {
}

/**
 * Request type for POST OrganizationsIpRestrictions endpoint
 *
 * Create Ip Restriction
 * Create a new IP restriction for the organization
 *
 * @remarks
 * This type defines the complete request structure for the POST OrganizationsIpRestrictions endpoint.
 * It includes all parameters (query, path) and request body types as defined in the OpenAPI specification.
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @example
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @path /v1/organizations/ip-restrictions
 *
 * @see {@link POST_OrganizationsIpRestrictions_Request_Query} - Query parameters type
 * @see {@link POST_OrganizationsIpRestrictions_Request_Path} - Path parameters type
 * @see {@link POST_OrganizationsIpRestrictions_Request_Body} - Request body type
 */
export type POST_OrganizationsIpRestrictions_Request = {
  requestBody: IpRestrictionCreate;
}
/**
 * Request body for POST /v1/organizations/ip-restrictions
 *
 * @remarks
 * This type defines the request body structure for the POST /v1/organizations/ip-restrictions endpoint.
 * It provides type safety for the request body as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for request body structure.
 *
 * @path /v1/organizations/ip-restrictions
 */
export type POST_OrganizationsIpRestrictions_Request_Body = POST_OrganizationsIpRestrictions_Request['requestBody'];

/**
 * Request type for DELETE OrganizationsIpRestrictionsIpRestrictionId endpoint
 *
 * Delete Ip Restriction
 * Delete an IP restriction
 *
 * @remarks
 * This type defines the complete request structure for the DELETE OrganizationsIpRestrictionsIpRestrictionId endpoint.
 * It includes all parameters (query, path) and request body types as defined in the OpenAPI specification.
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @example
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @path /v1/organizations/ip-restrictions/{ip_restriction_id}
 *
 * @see {@link DELETE_OrganizationsIpRestrictionsIpRestrictionId_Request_Query} - Query parameters type
 * @see {@link DELETE_OrganizationsIpRestrictionsIpRestrictionId_Request_Path} - Path parameters type
 * @see {@link DELETE_OrganizationsIpRestrictionsIpRestrictionId_Request_Body} - Request body type
 */
export type DELETE_OrganizationsIpRestrictionsIpRestrictionId_Request = {
  parameters: {
    path: operations['delete_ip_restriction_v1_organizations_ip_restrictions__ip_restriction_id__delete']['parameters']['path'];
  };
}
/**
 * Path parameters for DELETE /v1/organizations/ip-restrictions/{ip_restriction_id}
 *
 * @remarks
 * This type defines the path parameters for the DELETE /v1/organizations/ip-restrictions/{ip_restriction_id} endpoint.
 * It provides type safety for all path parameters as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for path parameters.
 *
 * @path /v1/organizations/ip-restrictions/{ip_restriction_id}
 */
export type DELETE_OrganizationsIpRestrictionsIpRestrictionId_Request_Path = DELETE_OrganizationsIpRestrictionsIpRestrictionId_Request['parameters']['path'];

/**
 * Request type for GET OrganizationsIpRestrictionsIpRestrictionId endpoint
 *
 * Get Ip Restriction
 * Get a specific IP restriction by ID
 *
 * @remarks
 * This type defines the complete request structure for the GET OrganizationsIpRestrictionsIpRestrictionId endpoint.
 * It includes all parameters (query, path) and request body types as defined in the OpenAPI specification.
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @example
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @path /v1/organizations/ip-restrictions/{ip_restriction_id}
 *
 * @see {@link GET_OrganizationsIpRestrictionsIpRestrictionId_Request_Query} - Query parameters type
 * @see {@link GET_OrganizationsIpRestrictionsIpRestrictionId_Request_Path} - Path parameters type
 * @see {@link GET_OrganizationsIpRestrictionsIpRestrictionId_Request_Body} - Request body type
 */
export type GET_OrganizationsIpRestrictionsIpRestrictionId_Request = {
  parameters: {
    path: operations['get_ip_restriction_v1_organizations_ip_restrictions__ip_restriction_id__get']['parameters']['path'];
  };
}
/**
 * Path parameters for GET /v1/organizations/ip-restrictions/{ip_restriction_id}
 *
 * @remarks
 * This type defines the path parameters for the GET /v1/organizations/ip-restrictions/{ip_restriction_id} endpoint.
 * It provides type safety for all path parameters as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for path parameters.
 *
 * @path /v1/organizations/ip-restrictions/{ip_restriction_id}
 */
export type GET_OrganizationsIpRestrictionsIpRestrictionId_Request_Path = GET_OrganizationsIpRestrictionsIpRestrictionId_Request['parameters']['path'];

/**
 * Request type for PATCH OrganizationsIpRestrictionsIpRestrictionId endpoint
 *
 * Update Ip Restriction
 * Update an IP restriction
 *
 * @remarks
 * This type defines the complete request structure for the PATCH OrganizationsIpRestrictionsIpRestrictionId endpoint.
 * It includes all parameters (query, path) and request body types as defined in the OpenAPI specification.
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @example
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @path /v1/organizations/ip-restrictions/{ip_restriction_id}
 *
 * @see {@link PATCH_OrganizationsIpRestrictionsIpRestrictionId_Request_Query} - Query parameters type
 * @see {@link PATCH_OrganizationsIpRestrictionsIpRestrictionId_Request_Path} - Path parameters type
 * @see {@link PATCH_OrganizationsIpRestrictionsIpRestrictionId_Request_Body} - Request body type
 */
export type PATCH_OrganizationsIpRestrictionsIpRestrictionId_Request = {
  parameters: {
    path: operations['update_ip_restriction_v1_organizations_ip_restrictions__ip_restriction_id__patch']['parameters']['path'];
  };
  requestBody: IpRestrictionUpdate;
}
/**
 * Path parameters for PATCH /v1/organizations/ip-restrictions/{ip_restriction_id}
 *
 * @remarks
 * This type defines the path parameters for the PATCH /v1/organizations/ip-restrictions/{ip_restriction_id} endpoint.
 * It provides type safety for all path parameters as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for path parameters.
 *
 * @path /v1/organizations/ip-restrictions/{ip_restriction_id}
 */
export type PATCH_OrganizationsIpRestrictionsIpRestrictionId_Request_Path = PATCH_OrganizationsIpRestrictionsIpRestrictionId_Request['parameters']['path'];
/**
 * Request body for PATCH /v1/organizations/ip-restrictions/{ip_restriction_id}
 *
 * @remarks
 * This type defines the request body structure for the PATCH /v1/organizations/ip-restrictions/{ip_restriction_id} endpoint.
 * It provides type safety for the request body as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for request body structure.
 *
 * @path /v1/organizations/ip-restrictions/{ip_restriction_id}
 */
export type PATCH_OrganizationsIpRestrictionsIpRestrictionId_Request_Body = PATCH_OrganizationsIpRestrictionsIpRestrictionId_Request['requestBody'];

/**
 * Request type for DELETE OrganizationsOrganizationId endpoint
 *
 * Delete User
 *
 * @remarks
 * This type defines the complete request structure for the DELETE OrganizationsOrganizationId endpoint.
 * It includes all parameters (query, path) and request body types as defined in the OpenAPI specification.
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @example
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @path /v1/organizations/{organization_id}
 *
 * @see {@link DELETE_OrganizationsOrganizationId_Request_Query} - Query parameters type
 * @see {@link DELETE_OrganizationsOrganizationId_Request_Path} - Path parameters type
 * @see {@link DELETE_OrganizationsOrganizationId_Request_Body} - Request body type
 */
export type DELETE_OrganizationsOrganizationId_Request = {
  parameters: {
    path: operations['delete_user_v1_organizations__organization_id__delete']['parameters']['path'];
  };
}
/**
 * Path parameters for DELETE /v1/organizations/{organization_id}
 *
 * @remarks
 * This type defines the path parameters for the DELETE /v1/organizations/{organization_id} endpoint.
 * It provides type safety for all path parameters as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for path parameters.
 *
 * @path /v1/organizations/{organization_id}
 */
export type DELETE_OrganizationsOrganizationId_Request_Path = DELETE_OrganizationsOrganizationId_Request['parameters']['path'];

/**
 * Request type for GET OrganizationsOrganizationId endpoint
 *
 * Get Organization
 *
 * @remarks
 * This type defines the complete request structure for the GET OrganizationsOrganizationId endpoint.
 * It includes all parameters (query, path) and request body types as defined in the OpenAPI specification.
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @example
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @path /v1/organizations/{organization_id}
 *
 * @see {@link GET_OrganizationsOrganizationId_Request_Query} - Query parameters type
 * @see {@link GET_OrganizationsOrganizationId_Request_Path} - Path parameters type
 * @see {@link GET_OrganizationsOrganizationId_Request_Body} - Request body type
 */
export type GET_OrganizationsOrganizationId_Request = {
  parameters: {
    path: operations['get_organization_v1_organizations__organization_id__get']['parameters']['path'];
  };
}
/**
 * Path parameters for GET /v1/organizations/{organization_id}
 *
 * @remarks
 * This type defines the path parameters for the GET /v1/organizations/{organization_id} endpoint.
 * It provides type safety for all path parameters as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for path parameters.
 *
 * @path /v1/organizations/{organization_id}
 */
export type GET_OrganizationsOrganizationId_Request_Path = GET_OrganizationsOrganizationId_Request['parameters']['path'];

/**
 * Request type for PATCH OrganizationsOrganizationId endpoint
 *
 * Update Organization
 *
 * @remarks
 * This type defines the complete request structure for the PATCH OrganizationsOrganizationId endpoint.
 * It includes all parameters (query, path) and request body types as defined in the OpenAPI specification.
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @example
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @path /v1/organizations/{organization_id}
 *
 * @see {@link PATCH_OrganizationsOrganizationId_Request_Query} - Query parameters type
 * @see {@link PATCH_OrganizationsOrganizationId_Request_Path} - Path parameters type
 * @see {@link PATCH_OrganizationsOrganizationId_Request_Body} - Request body type
 */
export type PATCH_OrganizationsOrganizationId_Request = {
  parameters: {
    path: operations['update_organization_v1_organizations__organization_id__patch']['parameters']['path'];
  };
  requestBody: OrganizationUpdate;
}
/**
 * Path parameters for PATCH /v1/organizations/{organization_id}
 *
 * @remarks
 * This type defines the path parameters for the PATCH /v1/organizations/{organization_id} endpoint.
 * It provides type safety for all path parameters as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for path parameters.
 *
 * @path /v1/organizations/{organization_id}
 */
export type PATCH_OrganizationsOrganizationId_Request_Path = PATCH_OrganizationsOrganizationId_Request['parameters']['path'];
/**
 * Request body for PATCH /v1/organizations/{organization_id}
 *
 * @remarks
 * This type defines the request body structure for the PATCH /v1/organizations/{organization_id} endpoint.
 * It provides type safety for the request body as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for request body structure.
 *
 * @path /v1/organizations/{organization_id}
 */
export type PATCH_OrganizationsOrganizationId_Request_Body = PATCH_OrganizationsOrganizationId_Request['requestBody'];

/**
 * Request type for PATCH OrganizationsOrganizationIdPlan endpoint
 *
 * Change Plan
 *
 * @remarks
 * This type defines the complete request structure for the PATCH OrganizationsOrganizationIdPlan endpoint.
 * It includes all parameters (query, path) and request body types as defined in the OpenAPI specification.
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @example
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @path /v1/organizations/{organization_id}/plan
 *
 * @see {@link PATCH_OrganizationsOrganizationIdPlan_Request_Query} - Query parameters type
 * @see {@link PATCH_OrganizationsOrganizationIdPlan_Request_Path} - Path parameters type
 * @see {@link PATCH_OrganizationsOrganizationIdPlan_Request_Body} - Request body type
 */
export type PATCH_OrganizationsOrganizationIdPlan_Request = {
  parameters: {
    path: operations['change_plan_v1_organizations__organization_id__plan_patch']['parameters']['path'];
  };
  requestBody: PlanUpdate;
}
/**
 * Path parameters for PATCH /v1/organizations/{organization_id}/plan
 *
 * @remarks
 * This type defines the path parameters for the PATCH /v1/organizations/{organization_id}/plan endpoint.
 * It provides type safety for all path parameters as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for path parameters.
 *
 * @path /v1/organizations/{organization_id}/plan
 */
export type PATCH_OrganizationsOrganizationIdPlan_Request_Path = PATCH_OrganizationsOrganizationIdPlan_Request['parameters']['path'];
/**
 * Request body for PATCH /v1/organizations/{organization_id}/plan
 *
 * @remarks
 * This type defines the request body structure for the PATCH /v1/organizations/{organization_id}/plan endpoint.
 * It provides type safety for the request body as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for request body structure.
 *
 * @path /v1/organizations/{organization_id}/plan
 */
export type PATCH_OrganizationsOrganizationIdPlan_Request_Body = PATCH_OrganizationsOrganizationIdPlan_Request['requestBody'];

/**
 * Request type for GET OrganizationsRoles endpoint
 *
 * List Roles
 *
 * @remarks
 * This type defines the complete request structure for the GET OrganizationsRoles endpoint.
 * It includes all parameters (query, path) and request body types as defined in the OpenAPI specification.
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @example
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @path /v1/organizations/roles
 *
 * @see {@link GET_OrganizationsRoles_Request_Query} - Query parameters type
 * @see {@link GET_OrganizationsRoles_Request_Path} - Path parameters type
 * @see {@link GET_OrganizationsRoles_Request_Body} - Request body type
 */
export type GET_OrganizationsRoles_Request = {
}

/**
 * Request type for GET OrganizationsUsers endpoint
 *
 * List Users
 *
 * @remarks
 * This type defines the complete request structure for the GET OrganizationsUsers endpoint.
 * It includes all parameters (query, path) and request body types as defined in the OpenAPI specification.
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @example
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @path /v1/organizations/users
 *
 * @see {@link GET_OrganizationsUsers_Request_Query} - Query parameters type
 * @see {@link GET_OrganizationsUsers_Request_Path} - Path parameters type
 * @see {@link GET_OrganizationsUsers_Request_Body} - Request body type
 */
export type GET_OrganizationsUsers_Request = {
  parameters: {
    query: operations['list_users_v1_organizations_users_get']['parameters']['query'];
  };
}
/**
 * Query parameters for GET /v1/organizations/users
 *
 * @remarks
 * This type defines the query parameters for the GET /v1/organizations/users endpoint.
 * It provides type safety for all query parameters as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for query parameters.
 *
 * @path /v1/organizations/users
 */
export type GET_OrganizationsUsers_Request_Query = GET_OrganizationsUsers_Request['parameters']['query'];

/**
 * Request type for GET TldsPortfolio endpoint
 *
 * Get Tld Portfolio
 *
 * @remarks
 * This type defines the complete request structure for the GET TldsPortfolio endpoint.
 * It includes all parameters (query, path) and request body types as defined in the OpenAPI specification.
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @example
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @path /v1/tlds/portfolio
 *
 * @see {@link GET_TldsPortfolio_Request_Query} - Query parameters type
 * @see {@link GET_TldsPortfolio_Request_Path} - Path parameters type
 * @see {@link GET_TldsPortfolio_Request_Body} - Request body type
 */
export type GET_TldsPortfolio_Request = {
}

/**
 * Request type for GET TldsTld endpoint
 *
 * Get Tld Spec
 *
 * @remarks
 * This type defines the complete request structure for the GET TldsTld endpoint.
 * It includes all parameters (query, path) and request body types as defined in the OpenAPI specification.
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @example
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @path /v1/tlds/{tld}
 *
 * @see {@link GET_TldsTld_Request_Query} - Query parameters type
 * @see {@link GET_TldsTld_Request_Path} - Path parameters type
 * @see {@link GET_TldsTld_Request_Body} - Request body type
 */
export type GET_TldsTld_Request = {
  parameters: {
    path: operations['get_tld_spec_v1_tlds__tld__get']['parameters']['path'];
  };
}
/**
 * Path parameters for GET /v1/tlds/{tld}
 *
 * @remarks
 * This type defines the path parameters for the GET /v1/tlds/{tld} endpoint.
 * It provides type safety for all path parameters as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for path parameters.
 *
 * @path /v1/tlds/{tld}
 */
export type GET_TldsTld_Request_Path = GET_TldsTld_Request['parameters']['path'];

/**
 * Request type for POST Users endpoint
 *
 * Create User
 *
 * @remarks
 * This type defines the complete request structure for the POST Users endpoint.
 * It includes all parameters (query, path) and request body types as defined in the OpenAPI specification.
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @example
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @path /v1/users
 *
 * @see {@link POST_Users_Request_Query} - Query parameters type
 * @see {@link POST_Users_Request_Path} - Path parameters type
 * @see {@link POST_Users_Request_Body} - Request body type
 */
export type POST_Users_Request = {
  requestBody: UserCreate;
}
/**
 * Request body for POST /v1/users
 *
 * @remarks
 * This type defines the request body structure for the POST /v1/users endpoint.
 * It provides type safety for the request body as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for request body structure.
 *
 * @path /v1/users
 */
export type POST_Users_Request_Body = POST_Users_Request['requestBody'];

/**
 * Request type for POST UsersAcceptTos endpoint
 *
 * Tos Sign
 *
 * @remarks
 * This type defines the complete request structure for the POST UsersAcceptTos endpoint.
 * It includes all parameters (query, path) and request body types as defined in the OpenAPI specification.
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @example
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @path /v1/users/accept-tos
 *
 * @see {@link POST_UsersAcceptTos_Request_Query} - Query parameters type
 * @see {@link POST_UsersAcceptTos_Request_Path} - Path parameters type
 * @see {@link POST_UsersAcceptTos_Request_Body} - Request body type
 */
export type POST_UsersAcceptTos_Request = {
  requestBody: TermsOfServiceAccept;
}
/**
 * Request body for POST /v1/users/accept-tos
 *
 * @remarks
 * This type defines the request body structure for the POST /v1/users/accept-tos endpoint.
 * It provides type safety for the request body as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for request body structure.
 *
 * @path /v1/users/accept-tos
 */
export type POST_UsersAcceptTos_Request_Body = POST_UsersAcceptTos_Request['requestBody'];

/**
 * Request type for GET UsersMe endpoint
 *
 * Get Current User
 *
 * @remarks
 * This type defines the complete request structure for the GET UsersMe endpoint.
 * It includes all parameters (query, path) and request body types as defined in the OpenAPI specification.
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @example
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @path /v1/users/me
 *
 * @see {@link GET_UsersMe_Request_Query} - Query parameters type
 * @see {@link GET_UsersMe_Request_Path} - Path parameters type
 * @see {@link GET_UsersMe_Request_Body} - Request body type
 */
export type GET_UsersMe_Request = {
  parameters: {
    query: operations['get_current_user_v1_users_me_get']['parameters']['query'];
  };
}
/**
 * Query parameters for GET /v1/users/me
 *
 * @remarks
 * This type defines the query parameters for the GET /v1/users/me endpoint.
 * It provides type safety for all query parameters as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for query parameters.
 *
 * @path /v1/users/me
 */
export type GET_UsersMe_Request_Query = GET_UsersMe_Request['parameters']['query'];

/**
 * Request type for DELETE UsersUserId endpoint
 *
 * Delete User
 *
 * @remarks
 * This type defines the complete request structure for the DELETE UsersUserId endpoint.
 * It includes all parameters (query, path) and request body types as defined in the OpenAPI specification.
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @example
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @path /v1/users/{user_id}
 *
 * @see {@link DELETE_UsersUserId_Request_Query} - Query parameters type
 * @see {@link DELETE_UsersUserId_Request_Path} - Path parameters type
 * @see {@link DELETE_UsersUserId_Request_Body} - Request body type
 */
export type DELETE_UsersUserId_Request = {
  parameters: {
    path: operations['delete_user_v1_users__user_id__delete']['parameters']['path'];
  };
}
/**
 * Path parameters for DELETE /v1/users/{user_id}
 *
 * @remarks
 * This type defines the path parameters for the DELETE /v1/users/{user_id} endpoint.
 * It provides type safety for all path parameters as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for path parameters.
 *
 * @path /v1/users/{user_id}
 */
export type DELETE_UsersUserId_Request_Path = DELETE_UsersUserId_Request['parameters']['path'];

/**
 * Request type for GET UsersUserId endpoint
 *
 * Get User
 *
 * @remarks
 * This type defines the complete request structure for the GET UsersUserId endpoint.
 * It includes all parameters (query, path) and request body types as defined in the OpenAPI specification.
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @example
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @path /v1/users/{user_id}
 *
 * @see {@link GET_UsersUserId_Request_Query} - Query parameters type
 * @see {@link GET_UsersUserId_Request_Path} - Path parameters type
 * @see {@link GET_UsersUserId_Request_Body} - Request body type
 */
export type GET_UsersUserId_Request = {
  parameters: {
    query: operations['get_user_v1_users__user_id__get']['parameters']['query'];
    path: operations['get_user_v1_users__user_id__get']['parameters']['path'];
  };
}
/**
 * Query parameters for GET /v1/users/{user_id}
 *
 * @remarks
 * This type defines the query parameters for the GET /v1/users/{user_id} endpoint.
 * It provides type safety for all query parameters as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for query parameters.
 *
 * @path /v1/users/{user_id}
 */
export type GET_UsersUserId_Request_Query = GET_UsersUserId_Request['parameters']['query'];
/**
 * Path parameters for GET /v1/users/{user_id}
 *
 * @remarks
 * This type defines the path parameters for the GET /v1/users/{user_id} endpoint.
 * It provides type safety for all path parameters as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for path parameters.
 *
 * @path /v1/users/{user_id}
 */
export type GET_UsersUserId_Request_Path = GET_UsersUserId_Request['parameters']['path'];

/**
 * Request type for PATCH UsersUserId endpoint
 *
 * Update User
 *
 * @remarks
 * This type defines the complete request structure for the PATCH UsersUserId endpoint.
 * It includes all parameters (query, path) and request body types as defined in the OpenAPI specification.
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @example
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @path /v1/users/{user_id}
 *
 * @see {@link PATCH_UsersUserId_Request_Query} - Query parameters type
 * @see {@link PATCH_UsersUserId_Request_Path} - Path parameters type
 * @see {@link PATCH_UsersUserId_Request_Body} - Request body type
 */
export type PATCH_UsersUserId_Request = {
  parameters: {
    path: operations['update_user_v1_users__user_id__patch']['parameters']['path'];
  };
  requestBody: UserUpdate;
}
/**
 * Path parameters for PATCH /v1/users/{user_id}
 *
 * @remarks
 * This type defines the path parameters for the PATCH /v1/users/{user_id} endpoint.
 * It provides type safety for all path parameters as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for path parameters.
 *
 * @path /v1/users/{user_id}
 */
export type PATCH_UsersUserId_Request_Path = PATCH_UsersUserId_Request['parameters']['path'];
/**
 * Request body for PATCH /v1/users/{user_id}
 *
 * @remarks
 * This type defines the request body structure for the PATCH /v1/users/{user_id} endpoint.
 * It provides type safety for the request body as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for request body structure.
 *
 * @path /v1/users/{user_id}
 */
export type PATCH_UsersUserId_Request_Body = PATCH_UsersUserId_Request['requestBody'];

/**
 * Request type for GET UsersUserIdPermissions endpoint
 *
 * Get User Permissions
 *
 * @remarks
 * This type defines the complete request structure for the GET UsersUserIdPermissions endpoint.
 * It includes all parameters (query, path) and request body types as defined in the OpenAPI specification.
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @example
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @path /v1/users/{user_id}/permissions
 *
 * @see {@link GET_UsersUserIdPermissions_Request_Query} - Query parameters type
 * @see {@link GET_UsersUserIdPermissions_Request_Path} - Path parameters type
 * @see {@link GET_UsersUserIdPermissions_Request_Body} - Request body type
 */
export type GET_UsersUserIdPermissions_Request = {
  parameters: {
    path: operations['get_user_permissions_v1_users__user_id__permissions_get']['parameters']['path'];
  };
}
/**
 * Path parameters for GET /v1/users/{user_id}/permissions
 *
 * @remarks
 * This type defines the path parameters for the GET /v1/users/{user_id}/permissions endpoint.
 * It provides type safety for all path parameters as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for path parameters.
 *
 * @path /v1/users/{user_id}/permissions
 */
export type GET_UsersUserIdPermissions_Request_Path = GET_UsersUserIdPermissions_Request['parameters']['path'];

/**
 * Request type for GET UsersUserIdRoles endpoint
 *
 * List Roles
 *
 * @remarks
 * This type defines the complete request structure for the GET UsersUserIdRoles endpoint.
 * It includes all parameters (query, path) and request body types as defined in the OpenAPI specification.
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @example
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @path /v1/users/{user_id}/roles
 *
 * @see {@link GET_UsersUserIdRoles_Request_Query} - Query parameters type
 * @see {@link GET_UsersUserIdRoles_Request_Path} - Path parameters type
 * @see {@link GET_UsersUserIdRoles_Request_Body} - Request body type
 */
export type GET_UsersUserIdRoles_Request = {
  parameters: {
    path: operations['list_roles_v1_users__user_id__roles_get']['parameters']['path'];
  };
}
/**
 * Path parameters for GET /v1/users/{user_id}/roles
 *
 * @remarks
 * This type defines the path parameters for the GET /v1/users/{user_id}/roles endpoint.
 * It provides type safety for all path parameters as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for path parameters.
 *
 * @path /v1/users/{user_id}/roles
 */
export type GET_UsersUserIdRoles_Request_Path = GET_UsersUserIdRoles_Request['parameters']['path'];

/**
 * Request type for PATCH UsersUserIdRoles endpoint
 *
 * Update User Relations
 *
 * @remarks
 * This type defines the complete request structure for the PATCH UsersUserIdRoles endpoint.
 * It includes all parameters (query, path) and request body types as defined in the OpenAPI specification.
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @example
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @path /v1/users/{user_id}/roles
 *
 * @see {@link PATCH_UsersUserIdRoles_Request_Query} - Query parameters type
 * @see {@link PATCH_UsersUserIdRoles_Request_Path} - Path parameters type
 * @see {@link PATCH_UsersUserIdRoles_Request_Body} - Request body type
 */
export type PATCH_UsersUserIdRoles_Request = {
  parameters: {
    path: operations['update_user_relations_v1_users__user_id__roles_patch']['parameters']['path'];
  };
  requestBody: SpiceDbRelationshipUpdate;
}
/**
 * Path parameters for PATCH /v1/users/{user_id}/roles
 *
 * @remarks
 * This type defines the path parameters for the PATCH /v1/users/{user_id}/roles endpoint.
 * It provides type safety for all path parameters as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for path parameters.
 *
 * @path /v1/users/{user_id}/roles
 */
export type PATCH_UsersUserIdRoles_Request_Path = PATCH_UsersUserIdRoles_Request['parameters']['path'];
/**
 * Request body for PATCH /v1/users/{user_id}/roles
 *
 * @remarks
 * This type defines the request body structure for the PATCH /v1/users/{user_id}/roles endpoint.
 * It provides type safety for the request body as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for request body structure.
 *
 * @path /v1/users/{user_id}/roles
 */
export type PATCH_UsersUserIdRoles_Request_Body = PATCH_UsersUserIdRoles_Request['requestBody'];

