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

import { ContactCreate, ContactAttributeSetCreate, ContactAttributeSetUpdate, DnsZoneCreate, DnsZoneRecordsPatchOps, DnsZoneRrsetsPatchOps, DnsZoneRrsetsCreate, DomainForwardPatchOps, DomainForwardCreateRequest, DomainForwardSetCreateRequest, DomainForwardSetRequest, DomainCreate, DomainUpdate, DomainRenewRequest, DomainRestoreRequest, DomainWithdrawRequest, DomainTransitRequest, DomainTransferIn, EmailForwardCreate, EmailForwardAliasCreate, EmailForwardAliasUpdate, OrganizationCreate, IpRestrictionCreate, IpRestrictionUpdate, OrganizationUpdate, ParkingSignupRequest, UserCreate, PasswordUpdate, UserUpdate, SpiceDbRelationshipUpdate } from './schemas.d';

/**
 * Request type for GET ArchiveEmailForwardLogsAliasesEmailForwardAliasId endpoint
 *
 * Retrieve email forward logs by alias
 * Retrieves a paginated list of email forward logs for a specific email forward alias. Only returns logs created after the email forward was created.
 *
 * @remarks
 * This type defines the complete request structure for the GET ArchiveEmailForwardLogsAliasesEmailForwardAliasId endpoint.
 * It includes all parameters (query, path) and request body types as defined in the OpenAPI specification.
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @example
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @path /v1/archive/email-forward-logs/aliases/{email_forward_alias_id}
 *
 * @see {@link GET_ArchiveEmailForwardLogsAliasesEmailForwardAliasId_Request_Query} - Query parameters type
 * @see {@link GET_ArchiveEmailForwardLogsAliasesEmailForwardAliasId_Request_Path} - Path parameters type
 * @see {@link GET_ArchiveEmailForwardLogsAliasesEmailForwardAliasId_Request_Body} - Request body type
 */
export type GET_ArchiveEmailForwardLogsAliasesEmailForwardAliasId_Request = {
  parameters: {
    query: operations['get_email_forward_logs_by_alias_v1_archive_email_forward_logs_aliases__email_forward_alias_id__get']['parameters']['query'];
    path: operations['get_email_forward_logs_by_alias_v1_archive_email_forward_logs_aliases__email_forward_alias_id__get']['parameters']['path'];
  };
}
/**
 * Query parameters for GET /v1/archive/email-forward-logs/aliases/{email_forward_alias_id}
 *
 * @remarks
 * This type defines the query parameters for the GET /v1/archive/email-forward-logs/aliases/{email_forward_alias_id} endpoint.
 * It provides type safety for all query parameters as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for query parameters.
 *
 * @path /v1/archive/email-forward-logs/aliases/{email_forward_alias_id}
 */
export type GET_ArchiveEmailForwardLogsAliasesEmailForwardAliasId_Request_Query = GET_ArchiveEmailForwardLogsAliasesEmailForwardAliasId_Request['parameters']['query'];
/**
 * Path parameters for GET /v1/archive/email-forward-logs/aliases/{email_forward_alias_id}
 *
 * @remarks
 * This type defines the path parameters for the GET /v1/archive/email-forward-logs/aliases/{email_forward_alias_id} endpoint.
 * It provides type safety for all path parameters as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for path parameters.
 *
 * @path /v1/archive/email-forward-logs/aliases/{email_forward_alias_id}
 */
export type GET_ArchiveEmailForwardLogsAliasesEmailForwardAliasId_Request_Path = GET_ArchiveEmailForwardLogsAliasesEmailForwardAliasId_Request['parameters']['path'];

/**
 * Request type for GET ArchiveEmailForwardLogsEmailForwardId endpoint
 *
 * Retrieve email forward logs
 * Retrieves a paginated list of email forward logs for a specific email forward. Only returns logs created after the email forward was created.
 *
 * @remarks
 * This type defines the complete request structure for the GET ArchiveEmailForwardLogsEmailForwardId endpoint.
 * It includes all parameters (query, path) and request body types as defined in the OpenAPI specification.
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @example
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @path /v1/archive/email-forward-logs/{email_forward_id}
 *
 * @see {@link GET_ArchiveEmailForwardLogsEmailForwardId_Request_Query} - Query parameters type
 * @see {@link GET_ArchiveEmailForwardLogsEmailForwardId_Request_Path} - Path parameters type
 * @see {@link GET_ArchiveEmailForwardLogsEmailForwardId_Request_Body} - Request body type
 */
export type GET_ArchiveEmailForwardLogsEmailForwardId_Request = {
  parameters: {
    query: operations['get_email_forward_logs_v1_archive_email_forward_logs__email_forward_id__get']['parameters']['query'];
    path: operations['get_email_forward_logs_v1_archive_email_forward_logs__email_forward_id__get']['parameters']['path'];
  };
}
/**
 * Query parameters for GET /v1/archive/email-forward-logs/{email_forward_id}
 *
 * @remarks
 * This type defines the query parameters for the GET /v1/archive/email-forward-logs/{email_forward_id} endpoint.
 * It provides type safety for all query parameters as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for query parameters.
 *
 * @path /v1/archive/email-forward-logs/{email_forward_id}
 */
export type GET_ArchiveEmailForwardLogsEmailForwardId_Request_Query = GET_ArchiveEmailForwardLogsEmailForwardId_Request['parameters']['query'];
/**
 * Path parameters for GET /v1/archive/email-forward-logs/{email_forward_id}
 *
 * @remarks
 * This type defines the path parameters for the GET /v1/archive/email-forward-logs/{email_forward_id} endpoint.
 * It provides type safety for all path parameters as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for path parameters.
 *
 * @path /v1/archive/email-forward-logs/{email_forward_id}
 */
export type GET_ArchiveEmailForwardLogsEmailForwardId_Request_Path = GET_ArchiveEmailForwardLogsEmailForwardId_Request['parameters']['path'];

/**
 * Request type for GET ArchiveObjectLogs endpoint
 *
 * Retrieve all object history
 * Retrieve all paginated audit logs with optional filtering and sorting
 *
 * @remarks
 * This type defines the complete request structure for the GET ArchiveObjectLogs endpoint.
 * It includes all parameters (query, path) and request body types as defined in the OpenAPI specification.
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @example
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @path /v1/archive/object-logs
 *
 * @see {@link GET_ArchiveObjectLogs_Request_Query} - Query parameters type
 * @see {@link GET_ArchiveObjectLogs_Request_Path} - Path parameters type
 * @see {@link GET_ArchiveObjectLogs_Request_Body} - Request body type
 */
export type GET_ArchiveObjectLogs_Request = {
  parameters: {
    query: operations['get_object_logs_v1_archive_object_logs_get']['parameters']['query'];
  };
}
/**
 * Query parameters for GET /v1/archive/object-logs
 *
 * @remarks
 * This type defines the query parameters for the GET /v1/archive/object-logs endpoint.
 * It provides type safety for all query parameters as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for query parameters.
 *
 * @path /v1/archive/object-logs
 */
export type GET_ArchiveObjectLogs_Request_Query = GET_ArchiveObjectLogs_Request['parameters']['query'];

/**
 * Request type for GET ArchiveObjectLogsObjectId endpoint
 *
 * Retrieve object history
 * Retrieve paginated audit logs for a specific object with optional filtering and sorting
 *
 * @remarks
 * This type defines the complete request structure for the GET ArchiveObjectLogsObjectId endpoint.
 * It includes all parameters (query, path) and request body types as defined in the OpenAPI specification.
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @example
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @path /v1/archive/object-logs/{object_id}
 *
 * @see {@link GET_ArchiveObjectLogsObjectId_Request_Query} - Query parameters type
 * @see {@link GET_ArchiveObjectLogsObjectId_Request_Path} - Path parameters type
 * @see {@link GET_ArchiveObjectLogsObjectId_Request_Body} - Request body type
 */
export type GET_ArchiveObjectLogsObjectId_Request = {
  parameters: {
    query: operations['get_object_logs_by_object_id_v1_archive_object_logs__object_id__get']['parameters']['query'];
    path: operations['get_object_logs_by_object_id_v1_archive_object_logs__object_id__get']['parameters']['path'];
  };
}
/**
 * Query parameters for GET /v1/archive/object-logs/{object_id}
 *
 * @remarks
 * This type defines the query parameters for the GET /v1/archive/object-logs/{object_id} endpoint.
 * It provides type safety for all query parameters as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for query parameters.
 *
 * @path /v1/archive/object-logs/{object_id}
 */
export type GET_ArchiveObjectLogsObjectId_Request_Query = GET_ArchiveObjectLogsObjectId_Request['parameters']['query'];
/**
 * Path parameters for GET /v1/archive/object-logs/{object_id}
 *
 * @remarks
 * This type defines the path parameters for the GET /v1/archive/object-logs/{object_id} endpoint.
 * It provides type safety for all path parameters as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for path parameters.
 *
 * @path /v1/archive/object-logs/{object_id}
 */
export type GET_ArchiveObjectLogsObjectId_Request_Path = GET_ArchiveObjectLogsObjectId_Request['parameters']['path'];

/**
 * Request type for GET ArchiveRequestHistory endpoint
 *
 * Retrieve request history logs
 * Retrieves a paginated list of request history logs
 *
 * @remarks
 * This type defines the complete request structure for the GET ArchiveRequestHistory endpoint.
 * It includes all parameters (query, path) and request body types as defined in the OpenAPI specification.
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @example
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @path /v1/archive/request-history
 *
 * @see {@link GET_ArchiveRequestHistory_Request_Query} - Query parameters type
 * @see {@link GET_ArchiveRequestHistory_Request_Path} - Path parameters type
 * @see {@link GET_ArchiveRequestHistory_Request_Body} - Request body type
 */
export type GET_ArchiveRequestHistory_Request = {
  parameters: {
    query: operations['get_request_history_v1_archive_request_history_get']['parameters']['query'];
  };
}
/**
 * Query parameters for GET /v1/archive/request-history
 *
 * @remarks
 * This type defines the query parameters for the GET /v1/archive/request-history endpoint.
 * It provides type safety for all query parameters as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for query parameters.
 *
 * @path /v1/archive/request-history
 */
export type GET_ArchiveRequestHistory_Request_Query = GET_ArchiveRequestHistory_Request['parameters']['query'];

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
 * Check domain availability
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
 * Stream domain availability results
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
 * List all contacts
 * Retrieves a paginated list of all contacts
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
 * Create a contact
 * Create a new contact object to use for domain registration
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
 * Request type for GET ContactsAttributeSets endpoint
 *
 * List contact attribute sets
 *
 * @remarks
 * This type defines the complete request structure for the GET ContactsAttributeSets endpoint.
 * It includes all parameters (query, path) and request body types as defined in the OpenAPI specification.
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @example
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @path /v1/contacts/attribute-sets
 * @param tld (query) - Filter by TLD (e.g. 'de', '.de', 'DE')
 *
 * @see {@link GET_ContactsAttributeSets_Request_Query} - Query parameters type
 * @see {@link GET_ContactsAttributeSets_Request_Path} - Path parameters type
 * @see {@link GET_ContactsAttributeSets_Request_Body} - Request body type
 */
export type GET_ContactsAttributeSets_Request = {
  parameters: {
    query: operations['list_attribute_sets_v1_contacts_attribute_sets_get']['parameters']['query'];
  };
}
/**
 * Query parameters for GET /v1/contacts/attribute-sets
 *
 * @remarks
 * This type defines the query parameters for the GET /v1/contacts/attribute-sets endpoint.
 * It provides type safety for all query parameters as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for query parameters.
 *
 * @path /v1/contacts/attribute-sets
 * @param tld (query) - Filter by TLD (e.g. 'de', '.de', 'DE')
 */
export type GET_ContactsAttributeSets_Request_Query = GET_ContactsAttributeSets_Request['parameters']['query'];

/**
 * Request type for POST ContactsAttributeSets endpoint
 *
 * Create a contact attribute set
 *
 * @remarks
 * This type defines the complete request structure for the POST ContactsAttributeSets endpoint.
 * It includes all parameters (query, path) and request body types as defined in the OpenAPI specification.
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @example
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @path /v1/contacts/attribute-sets
 *
 * @see {@link POST_ContactsAttributeSets_Request_Query} - Query parameters type
 * @see {@link POST_ContactsAttributeSets_Request_Path} - Path parameters type
 * @see {@link POST_ContactsAttributeSets_Request_Body} - Request body type
 */
export type POST_ContactsAttributeSets_Request = {
  requestBody: ContactAttributeSetCreate;
}
/**
 * Request body for POST /v1/contacts/attribute-sets
 *
 * @remarks
 * This type defines the request body structure for the POST /v1/contacts/attribute-sets endpoint.
 * It provides type safety for the request body as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for request body structure.
 *
 * @path /v1/contacts/attribute-sets
 */
export type POST_ContactsAttributeSets_Request_Body = POST_ContactsAttributeSets_Request['requestBody'];

/**
 * Request type for DELETE ContactsAttributeSetsContactAttributeSetId endpoint
 *
 * Delete a contact attribute set
 *
 * @remarks
 * This type defines the complete request structure for the DELETE ContactsAttributeSetsContactAttributeSetId endpoint.
 * It includes all parameters (query, path) and request body types as defined in the OpenAPI specification.
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @example
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @path /v1/contacts/attribute-sets/{contact_attribute_set_id}
 *
 * @see {@link DELETE_ContactsAttributeSetsContactAttributeSetId_Request_Query} - Query parameters type
 * @see {@link DELETE_ContactsAttributeSetsContactAttributeSetId_Request_Path} - Path parameters type
 * @see {@link DELETE_ContactsAttributeSetsContactAttributeSetId_Request_Body} - Request body type
 */
export type DELETE_ContactsAttributeSetsContactAttributeSetId_Request = {
  parameters: {
    path: operations['delete_attribute_set_v1_contacts_attribute_sets__contact_attribute_set_id__delete']['parameters']['path'];
  };
}
/**
 * Path parameters for DELETE /v1/contacts/attribute-sets/{contact_attribute_set_id}
 *
 * @remarks
 * This type defines the path parameters for the DELETE /v1/contacts/attribute-sets/{contact_attribute_set_id} endpoint.
 * It provides type safety for all path parameters as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for path parameters.
 *
 * @path /v1/contacts/attribute-sets/{contact_attribute_set_id}
 */
export type DELETE_ContactsAttributeSetsContactAttributeSetId_Request_Path = DELETE_ContactsAttributeSetsContactAttributeSetId_Request['parameters']['path'];

/**
 * Request type for GET ContactsAttributeSetsContactAttributeSetId endpoint
 *
 * Retrieve a contact attribute set
 *
 * @remarks
 * This type defines the complete request structure for the GET ContactsAttributeSetsContactAttributeSetId endpoint.
 * It includes all parameters (query, path) and request body types as defined in the OpenAPI specification.
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @example
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @path /v1/contacts/attribute-sets/{contact_attribute_set_id}
 *
 * @see {@link GET_ContactsAttributeSetsContactAttributeSetId_Request_Query} - Query parameters type
 * @see {@link GET_ContactsAttributeSetsContactAttributeSetId_Request_Path} - Path parameters type
 * @see {@link GET_ContactsAttributeSetsContactAttributeSetId_Request_Body} - Request body type
 */
export type GET_ContactsAttributeSetsContactAttributeSetId_Request = {
  parameters: {
    path: operations['get_attribute_set_v1_contacts_attribute_sets__contact_attribute_set_id__get']['parameters']['path'];
  };
}
/**
 * Path parameters for GET /v1/contacts/attribute-sets/{contact_attribute_set_id}
 *
 * @remarks
 * This type defines the path parameters for the GET /v1/contacts/attribute-sets/{contact_attribute_set_id} endpoint.
 * It provides type safety for all path parameters as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for path parameters.
 *
 * @path /v1/contacts/attribute-sets/{contact_attribute_set_id}
 */
export type GET_ContactsAttributeSetsContactAttributeSetId_Request_Path = GET_ContactsAttributeSetsContactAttributeSetId_Request['parameters']['path'];

/**
 * Request type for PATCH ContactsAttributeSetsContactAttributeSetId endpoint
 *
 * Update a contact attribute set
 *
 * @remarks
 * This type defines the complete request structure for the PATCH ContactsAttributeSetsContactAttributeSetId endpoint.
 * It includes all parameters (query, path) and request body types as defined in the OpenAPI specification.
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @example
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @path /v1/contacts/attribute-sets/{contact_attribute_set_id}
 *
 * @see {@link PATCH_ContactsAttributeSetsContactAttributeSetId_Request_Query} - Query parameters type
 * @see {@link PATCH_ContactsAttributeSetsContactAttributeSetId_Request_Path} - Path parameters type
 * @see {@link PATCH_ContactsAttributeSetsContactAttributeSetId_Request_Body} - Request body type
 */
export type PATCH_ContactsAttributeSetsContactAttributeSetId_Request = {
  parameters: {
    path: operations['update_attribute_set_v1_contacts_attribute_sets__contact_attribute_set_id__patch']['parameters']['path'];
  };
  requestBody: ContactAttributeSetUpdate;
}
/**
 * Path parameters for PATCH /v1/contacts/attribute-sets/{contact_attribute_set_id}
 *
 * @remarks
 * This type defines the path parameters for the PATCH /v1/contacts/attribute-sets/{contact_attribute_set_id} endpoint.
 * It provides type safety for all path parameters as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for path parameters.
 *
 * @path /v1/contacts/attribute-sets/{contact_attribute_set_id}
 */
export type PATCH_ContactsAttributeSetsContactAttributeSetId_Request_Path = PATCH_ContactsAttributeSetsContactAttributeSetId_Request['parameters']['path'];
/**
 * Request body for PATCH /v1/contacts/attribute-sets/{contact_attribute_set_id}
 *
 * @remarks
 * This type defines the request body structure for the PATCH /v1/contacts/attribute-sets/{contact_attribute_set_id} endpoint.
 * It provides type safety for the request body as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for request body structure.
 *
 * @path /v1/contacts/attribute-sets/{contact_attribute_set_id}
 */
export type PATCH_ContactsAttributeSetsContactAttributeSetId_Request_Body = PATCH_ContactsAttributeSetsContactAttributeSetId_Request['requestBody'];

/**
 * Request type for DELETE ContactsContactId endpoint
 *
 * Delete a contact
 * Deletes a contact object; only possible if the contact is not in use
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
 * Request type for PATCH ContactsContactIdLinkContactAttributeSetId endpoint
 *
 * Link a contact to a contact attribute set
 *
 * @remarks
 * This type defines the complete request structure for the PATCH ContactsContactIdLinkContactAttributeSetId endpoint.
 * It includes all parameters (query, path) and request body types as defined in the OpenAPI specification.
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @example
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @path /v1/contacts/{contact_id}/link/{contact_attribute_set_id}
 *
 * @see {@link PATCH_ContactsContactIdLinkContactAttributeSetId_Request_Query} - Query parameters type
 * @see {@link PATCH_ContactsContactIdLinkContactAttributeSetId_Request_Path} - Path parameters type
 * @see {@link PATCH_ContactsContactIdLinkContactAttributeSetId_Request_Body} - Request body type
 */
export type PATCH_ContactsContactIdLinkContactAttributeSetId_Request = {
  parameters: {
    path: operations['create_attribute_link_v1_contacts__contact_id__link__contact_attribute_set_id__patch']['parameters']['path'];
  };
}
/**
 * Path parameters for PATCH /v1/contacts/{contact_id}/link/{contact_attribute_set_id}
 *
 * @remarks
 * This type defines the path parameters for the PATCH /v1/contacts/{contact_id}/link/{contact_attribute_set_id} endpoint.
 * It provides type safety for all path parameters as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for path parameters.
 *
 * @path /v1/contacts/{contact_id}/link/{contact_attribute_set_id}
 */
export type PATCH_ContactsContactIdLinkContactAttributeSetId_Request_Path = PATCH_ContactsContactIdLinkContactAttributeSetId_Request['parameters']['path'];

/**
 * Request type for DELETE ContactsContactIdVerification endpoint
 *
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
 * Retrieve contact verification by contact ID
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
 * Complete contact verification by contact ID
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
 * Retrieve contact verification by token
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
 * Complete contact verification with token
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
 * Request type for GET DnsDomainForwards endpoint
 *
 * List domain forwards by zone
 * Retrieves a paginated list of domain forwards grouped by DNS zones.
 *
 * @remarks
 * This type defines the complete request structure for the GET DnsDomainForwards endpoint.
 * It includes all parameters (query, path) and request body types as defined in the OpenAPI specification.
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @example
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @path /v1/dns/domain-forwards
 *
 * @see {@link GET_DnsDomainForwards_Request_Query} - Query parameters type
 * @see {@link GET_DnsDomainForwards_Request_Path} - Path parameters type
 * @see {@link GET_DnsDomainForwards_Request_Body} - Request body type
 */
export type GET_DnsDomainForwards_Request = {
  parameters: {
    query: operations['list_domain_forwards_by_zone_v1_dns_domain_forwards_get']['parameters']['query'];
  };
}
/**
 * Query parameters for GET /v1/dns/domain-forwards
 *
 * @remarks
 * This type defines the query parameters for the GET /v1/dns/domain-forwards endpoint.
 * It provides type safety for all query parameters as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for query parameters.
 *
 * @path /v1/dns/domain-forwards
 */
export type GET_DnsDomainForwards_Request_Query = GET_DnsDomainForwards_Request['parameters']['query'];

/**
 * Request type for GET DnsEmailForwards endpoint
 *
 * List email forwards by zone
 * Retrieves a paginated list of email forwards grouped by DNS zones.
 *
 * @remarks
 * This type defines the complete request structure for the GET DnsEmailForwards endpoint.
 * It includes all parameters (query, path) and request body types as defined in the OpenAPI specification.
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @example
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @path /v1/dns/email-forwards
 *
 * @see {@link GET_DnsEmailForwards_Request_Query} - Query parameters type
 * @see {@link GET_DnsEmailForwards_Request_Path} - Path parameters type
 * @see {@link GET_DnsEmailForwards_Request_Body} - Request body type
 */
export type GET_DnsEmailForwards_Request = {
  parameters: {
    query: operations['list_email_forwards_by_zone_v1_dns_email_forwards_get']['parameters']['query'];
  };
}
/**
 * Query parameters for GET /v1/dns/email-forwards
 *
 * @remarks
 * This type defines the query parameters for the GET /v1/dns/email-forwards endpoint.
 * It provides type safety for all query parameters as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for query parameters.
 *
 * @path /v1/dns/email-forwards
 */
export type GET_DnsEmailForwards_Request_Query = GET_DnsEmailForwards_Request['parameters']['query'];

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
 * Request type for GET DnsZoneNameDomainForwards endpoint
 *
 * List domain forwards for a zone
 * Retrieves all domain forwards configured for the specified DNS zone, including subdomains.
 *
 * @remarks
 * This type defines the complete request structure for the GET DnsZoneNameDomainForwards endpoint.
 * It includes all parameters (query, path) and request body types as defined in the OpenAPI specification.
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @example
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @path /v1/dns/{zone_name}/domain-forwards
 * @param zone_name (path) - DNS zone name (trailing dot optional)
 *
 * @see {@link GET_DnsZoneNameDomainForwards_Request_Query} - Query parameters type
 * @see {@link GET_DnsZoneNameDomainForwards_Request_Path} - Path parameters type
 * @see {@link GET_DnsZoneNameDomainForwards_Request_Body} - Request body type
 */
export type GET_DnsZoneNameDomainForwards_Request = {
  parameters: {
    path: operations['list_zone_domain_forwards_v1_dns__zone_name__domain_forwards_get']['parameters']['path'];
  };
}
/**
 * Path parameters for GET /v1/dns/{zone_name}/domain-forwards
 *
 * @remarks
 * This type defines the path parameters for the GET /v1/dns/{zone_name}/domain-forwards endpoint.
 * It provides type safety for all path parameters as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for path parameters.
 *
 * @path /v1/dns/{zone_name}/domain-forwards
 * @param zone_name (path) - DNS zone name (trailing dot optional)
 */
export type GET_DnsZoneNameDomainForwards_Request_Path = GET_DnsZoneNameDomainForwards_Request['parameters']['path'];

/**
 * Request type for GET DnsZoneNameEmailForwards endpoint
 *
 * List email forwards for a zone
 * Retrieves all email forwards configured for the specified DNS zone, including subdomains and all aliases.
 *
 * @remarks
 * This type defines the complete request structure for the GET DnsZoneNameEmailForwards endpoint.
 * It includes all parameters (query, path) and request body types as defined in the OpenAPI specification.
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @example
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @path /v1/dns/{zone_name}/email-forwards
 * @param zone_name (path) - DNS zone name (trailing dot optional)
 *
 * @see {@link GET_DnsZoneNameEmailForwards_Request_Query} - Query parameters type
 * @see {@link GET_DnsZoneNameEmailForwards_Request_Path} - Path parameters type
 * @see {@link GET_DnsZoneNameEmailForwards_Request_Body} - Request body type
 */
export type GET_DnsZoneNameEmailForwards_Request = {
  parameters: {
    path: operations['list_zone_email_forwards_v1_dns__zone_name__email_forwards_get']['parameters']['path'];
  };
}
/**
 * Path parameters for GET /v1/dns/{zone_name}/email-forwards
 *
 * @remarks
 * This type defines the path parameters for the GET /v1/dns/{zone_name}/email-forwards endpoint.
 * It provides type safety for all path parameters as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for path parameters.
 *
 * @path /v1/dns/{zone_name}/email-forwards
 * @param zone_name (path) - DNS zone name (trailing dot optional)
 */
export type GET_DnsZoneNameEmailForwards_Request_Path = GET_DnsZoneNameEmailForwards_Request['parameters']['path'];

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
 * Request type for GET DomainForwards endpoint
 *
 * List domain forwards
 * Retrieves a paginated list of domain forwards by hostname for the organization
 *
 * @remarks
 * This type defines the complete request structure for the GET DomainForwards endpoint.
 * It includes all parameters (query, path) and request body types as defined in the OpenAPI specification.
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @example
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @path /v1/domain-forwards
 *
 * @see {@link GET_DomainForwards_Request_Query} - Query parameters type
 * @see {@link GET_DomainForwards_Request_Path} - Path parameters type
 * @see {@link GET_DomainForwards_Request_Body} - Request body type
 */
export type GET_DomainForwards_Request = {
  parameters: {
    query: operations['list_domain_forwards_v1_domain_forwards_get']['parameters']['query'];
  };
}
/**
 * Query parameters for GET /v1/domain-forwards
 *
 * @remarks
 * This type defines the query parameters for the GET /v1/domain-forwards endpoint.
 * It provides type safety for all query parameters as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for query parameters.
 *
 * @path /v1/domain-forwards
 */
export type GET_DomainForwards_Request_Query = GET_DomainForwards_Request['parameters']['query'];

/**
 * Request type for PATCH DomainForwards endpoint
 *
 * Patch domain forward redirects
 * Applies patch operations to update or remove redirects across hostnames and protocols. Raises an error if the domain forward or domain forward set does not exist.
 *
 * @remarks
 * This type defines the complete request structure for the PATCH DomainForwards endpoint.
 * It includes all parameters (query, path) and request body types as defined in the OpenAPI specification.
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @example
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @path /v1/domain-forwards
 *
 * @see {@link PATCH_DomainForwards_Request_Query} - Query parameters type
 * @see {@link PATCH_DomainForwards_Request_Path} - Path parameters type
 * @see {@link PATCH_DomainForwards_Request_Body} - Request body type
 */
export type PATCH_DomainForwards_Request = {
  requestBody: DomainForwardPatchOps;
}
/**
 * Request body for PATCH /v1/domain-forwards
 *
 * @remarks
 * This type defines the request body structure for the PATCH /v1/domain-forwards endpoint.
 * It provides type safety for the request body as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for request body structure.
 *
 * @path /v1/domain-forwards
 */
export type PATCH_DomainForwards_Request_Body = PATCH_DomainForwards_Request['requestBody'];

/**
 * Request type for POST DomainForwards endpoint
 *
 * Create a domain forward
 * Creates a new domain forward configuration. Wildcard forwards can be created by using *.hostname (e.g., *.example.com).
 *
 * @remarks
 * This type defines the complete request structure for the POST DomainForwards endpoint.
 * It includes all parameters (query, path) and request body types as defined in the OpenAPI specification.
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @example
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @path /v1/domain-forwards
 *
 * @see {@link POST_DomainForwards_Request_Query} - Query parameters type
 * @see {@link POST_DomainForwards_Request_Path} - Path parameters type
 * @see {@link POST_DomainForwards_Request_Body} - Request body type
 */
export type POST_DomainForwards_Request = {
  requestBody: DomainForwardCreateRequest;
}
/**
 * Request body for POST /v1/domain-forwards
 *
 * @remarks
 * This type defines the request body structure for the POST /v1/domain-forwards endpoint.
 * It provides type safety for the request body as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for request body structure.
 *
 * @path /v1/domain-forwards
 */
export type POST_DomainForwards_Request_Body = POST_DomainForwards_Request['requestBody'];

/**
 * Request type for DELETE DomainForwardsHostname endpoint
 *
 * Delete a domain forward
 * Deletes the domain forward configuration for the specified hostname
 *
 * @remarks
 * This type defines the complete request structure for the DELETE DomainForwardsHostname endpoint.
 * It includes all parameters (query, path) and request body types as defined in the OpenAPI specification.
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @example
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @path /v1/domain-forwards/{hostname}
 * @param hostname (path) - Hostname
 *
 * @see {@link DELETE_DomainForwardsHostname_Request_Query} - Query parameters type
 * @see {@link DELETE_DomainForwardsHostname_Request_Path} - Path parameters type
 * @see {@link DELETE_DomainForwardsHostname_Request_Body} - Request body type
 */
export type DELETE_DomainForwardsHostname_Request = {
  parameters: {
    path: operations['delete_domain_forward_v1_domain_forwards__hostname__delete']['parameters']['path'];
  };
}
/**
 * Path parameters for DELETE /v1/domain-forwards/{hostname}
 *
 * @remarks
 * This type defines the path parameters for the DELETE /v1/domain-forwards/{hostname} endpoint.
 * It provides type safety for all path parameters as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for path parameters.
 *
 * @path /v1/domain-forwards/{hostname}
 * @param hostname (path) - Hostname
 */
export type DELETE_DomainForwardsHostname_Request_Path = DELETE_DomainForwardsHostname_Request['parameters']['path'];

/**
 * Request type for GET DomainForwardsHostname endpoint
 *
 * Get a domain forward
 * Retrieves the domain forward configuration for the specified hostname
 *
 * @remarks
 * This type defines the complete request structure for the GET DomainForwardsHostname endpoint.
 * It includes all parameters (query, path) and request body types as defined in the OpenAPI specification.
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @example
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @path /v1/domain-forwards/{hostname}
 * @param hostname (path) - Hostname
 *
 * @see {@link GET_DomainForwardsHostname_Request_Query} - Query parameters type
 * @see {@link GET_DomainForwardsHostname_Request_Path} - Path parameters type
 * @see {@link GET_DomainForwardsHostname_Request_Body} - Request body type
 */
export type GET_DomainForwardsHostname_Request = {
  parameters: {
    path: operations['get_domain_forward_v1_domain_forwards__hostname__get']['parameters']['path'];
  };
}
/**
 * Path parameters for GET /v1/domain-forwards/{hostname}
 *
 * @remarks
 * This type defines the path parameters for the GET /v1/domain-forwards/{hostname} endpoint.
 * It provides type safety for all path parameters as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for path parameters.
 *
 * @path /v1/domain-forwards/{hostname}
 * @param hostname (path) - Hostname
 */
export type GET_DomainForwardsHostname_Request_Path = GET_DomainForwardsHostname_Request['parameters']['path'];

/**
 * Request type for POST DomainForwardsHostname endpoint
 *
 * Create domain forward set
 * Creates a new domain forward set for a specific protocol (HTTP or HTTPS). Raises an error if the set already exists.
 *
 * @remarks
 * This type defines the complete request structure for the POST DomainForwardsHostname endpoint.
 * It includes all parameters (query, path) and request body types as defined in the OpenAPI specification.
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @example
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @path /v1/domain-forwards/{hostname}
 * @param hostname (path) - Hostname
 *
 * @see {@link POST_DomainForwardsHostname_Request_Query} - Query parameters type
 * @see {@link POST_DomainForwardsHostname_Request_Path} - Path parameters type
 * @see {@link POST_DomainForwardsHostname_Request_Body} - Request body type
 */
export type POST_DomainForwardsHostname_Request = {
  parameters: {
    path: operations['create_domain_forward_set_v1_domain_forwards__hostname__post']['parameters']['path'];
  };
  requestBody: DomainForwardSetCreateRequest;
}
/**
 * Path parameters for POST /v1/domain-forwards/{hostname}
 *
 * @remarks
 * This type defines the path parameters for the POST /v1/domain-forwards/{hostname} endpoint.
 * It provides type safety for all path parameters as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for path parameters.
 *
 * @path /v1/domain-forwards/{hostname}
 * @param hostname (path) - Hostname
 */
export type POST_DomainForwardsHostname_Request_Path = POST_DomainForwardsHostname_Request['parameters']['path'];
/**
 * Request body for POST /v1/domain-forwards/{hostname}
 *
 * @remarks
 * This type defines the request body structure for the POST /v1/domain-forwards/{hostname} endpoint.
 * It provides type safety for the request body as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for request body structure.
 *
 * @path /v1/domain-forwards/{hostname}
 */
export type POST_DomainForwardsHostname_Request_Body = POST_DomainForwardsHostname_Request['requestBody'];

/**
 * Request type for PATCH DomainForwardsHostnameDisable endpoint
 *
 * Disable domain forward
 * Disables domain forwarding by removing DNS records. The domain forward configuration is preserved but disabled.
 *
 * @remarks
 * This type defines the complete request structure for the PATCH DomainForwardsHostnameDisable endpoint.
 * It includes all parameters (query, path) and request body types as defined in the OpenAPI specification.
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @example
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @path /v1/domain-forwards/{hostname}/disable
 * @param hostname (path) - Hostname
 *
 * @see {@link PATCH_DomainForwardsHostnameDisable_Request_Query} - Query parameters type
 * @see {@link PATCH_DomainForwardsHostnameDisable_Request_Path} - Path parameters type
 * @see {@link PATCH_DomainForwardsHostnameDisable_Request_Body} - Request body type
 */
export type PATCH_DomainForwardsHostnameDisable_Request = {
  parameters: {
    path: operations['disable_domain_forward_v1_domain_forwards__hostname__disable_patch']['parameters']['path'];
  };
}
/**
 * Path parameters for PATCH /v1/domain-forwards/{hostname}/disable
 *
 * @remarks
 * This type defines the path parameters for the PATCH /v1/domain-forwards/{hostname}/disable endpoint.
 * It provides type safety for all path parameters as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for path parameters.
 *
 * @path /v1/domain-forwards/{hostname}/disable
 * @param hostname (path) - Hostname
 */
export type PATCH_DomainForwardsHostnameDisable_Request_Path = PATCH_DomainForwardsHostnameDisable_Request['parameters']['path'];

/**
 * Request type for PATCH DomainForwardsHostnameEnable endpoint
 *
 * Enable domain forward
 * Enables domain forwarding by creating necessary DNS records
 *
 * @remarks
 * This type defines the complete request structure for the PATCH DomainForwardsHostnameEnable endpoint.
 * It includes all parameters (query, path) and request body types as defined in the OpenAPI specification.
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @example
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @path /v1/domain-forwards/{hostname}/enable
 * @param hostname (path) - Hostname
 *
 * @see {@link PATCH_DomainForwardsHostnameEnable_Request_Query} - Query parameters type
 * @see {@link PATCH_DomainForwardsHostnameEnable_Request_Path} - Path parameters type
 * @see {@link PATCH_DomainForwardsHostnameEnable_Request_Body} - Request body type
 */
export type PATCH_DomainForwardsHostnameEnable_Request = {
  parameters: {
    path: operations['enable_domain_forward_v1_domain_forwards__hostname__enable_patch']['parameters']['path'];
  };
}
/**
 * Path parameters for PATCH /v1/domain-forwards/{hostname}/enable
 *
 * @remarks
 * This type defines the path parameters for the PATCH /v1/domain-forwards/{hostname}/enable endpoint.
 * It provides type safety for all path parameters as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for path parameters.
 *
 * @path /v1/domain-forwards/{hostname}/enable
 * @param hostname (path) - Hostname
 */
export type PATCH_DomainForwardsHostnameEnable_Request_Path = PATCH_DomainForwardsHostnameEnable_Request['parameters']['path'];

/**
 * Request type for DELETE DomainForwardsHostnameProtocol endpoint
 *
 * Delete domain forward set
 * Deletes a domain forward set for a specific protocol (HTTP or HTTPS).
 *
 * @remarks
 * This type defines the complete request structure for the DELETE DomainForwardsHostnameProtocol endpoint.
 * It includes all parameters (query, path) and request body types as defined in the OpenAPI specification.
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @example
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @path /v1/domain-forwards/{hostname}/{protocol}
 * @param hostname (path) - Hostname
 *
 * @see {@link DELETE_DomainForwardsHostnameProtocol_Request_Query} - Query parameters type
 * @see {@link DELETE_DomainForwardsHostnameProtocol_Request_Path} - Path parameters type
 * @see {@link DELETE_DomainForwardsHostnameProtocol_Request_Body} - Request body type
 */
export type DELETE_DomainForwardsHostnameProtocol_Request = {
  parameters: {
    path: operations['delete_domain_forward_set_v1_domain_forwards__hostname___protocol__delete']['parameters']['path'];
  };
}
/**
 * Path parameters for DELETE /v1/domain-forwards/{hostname}/{protocol}
 *
 * @remarks
 * This type defines the path parameters for the DELETE /v1/domain-forwards/{hostname}/{protocol} endpoint.
 * It provides type safety for all path parameters as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for path parameters.
 *
 * @path /v1/domain-forwards/{hostname}/{protocol}
 * @param hostname (path) - Hostname
 */
export type DELETE_DomainForwardsHostnameProtocol_Request_Path = DELETE_DomainForwardsHostnameProtocol_Request['parameters']['path'];

/**
 * Request type for GET DomainForwardsHostnameProtocol endpoint
 *
 * Get domain forward set
 * Retrieves all redirects for a specific protocol (HTTP or HTTPS) for the specified hostname
 *
 * @remarks
 * This type defines the complete request structure for the GET DomainForwardsHostnameProtocol endpoint.
 * It includes all parameters (query, path) and request body types as defined in the OpenAPI specification.
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @example
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @path /v1/domain-forwards/{hostname}/{protocol}
 * @param hostname (path) - Hostname
 *
 * @see {@link GET_DomainForwardsHostnameProtocol_Request_Query} - Query parameters type
 * @see {@link GET_DomainForwardsHostnameProtocol_Request_Path} - Path parameters type
 * @see {@link GET_DomainForwardsHostnameProtocol_Request_Body} - Request body type
 */
export type GET_DomainForwardsHostnameProtocol_Request = {
  parameters: {
    path: operations['get_domain_forward_set_v1_domain_forwards__hostname___protocol__get']['parameters']['path'];
  };
}
/**
 * Path parameters for GET /v1/domain-forwards/{hostname}/{protocol}
 *
 * @remarks
 * This type defines the path parameters for the GET /v1/domain-forwards/{hostname}/{protocol} endpoint.
 * It provides type safety for all path parameters as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for path parameters.
 *
 * @path /v1/domain-forwards/{hostname}/{protocol}
 * @param hostname (path) - Hostname
 */
export type GET_DomainForwardsHostnameProtocol_Request_Path = GET_DomainForwardsHostnameProtocol_Request['parameters']['path'];

/**
 * Request type for POST DomainForwardsHostnameProtocol endpoint
 *
 * Create domain forward set (deprecated)
 * Deprecated: Use POST /{hostname} with protocol in body instead. Creates a new domain forward set for a specific protocol (HTTP or HTTPS).
 *
 * @remarks
 * This type defines the complete request structure for the POST DomainForwardsHostnameProtocol endpoint.
 * It includes all parameters (query, path) and request body types as defined in the OpenAPI specification.
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @example
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @path /v1/domain-forwards/{hostname}/{protocol}
 * @param hostname (path) - Hostname
 *
 * @see {@link POST_DomainForwardsHostnameProtocol_Request_Query} - Query parameters type
 * @see {@link POST_DomainForwardsHostnameProtocol_Request_Path} - Path parameters type
 * @see {@link POST_DomainForwardsHostnameProtocol_Request_Body} - Request body type
 */
export type POST_DomainForwardsHostnameProtocol_Request = {
  parameters: {
    path: operations['create_domain_forward_set_deprecated_v1_domain_forwards__hostname___protocol__post']['parameters']['path'];
  };
  requestBody: DomainForwardSetRequest;
}
/**
 * Path parameters for POST /v1/domain-forwards/{hostname}/{protocol}
 *
 * @remarks
 * This type defines the path parameters for the POST /v1/domain-forwards/{hostname}/{protocol} endpoint.
 * It provides type safety for all path parameters as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for path parameters.
 *
 * @path /v1/domain-forwards/{hostname}/{protocol}
 * @param hostname (path) - Hostname
 */
export type POST_DomainForwardsHostnameProtocol_Request_Path = POST_DomainForwardsHostnameProtocol_Request['parameters']['path'];
/**
 * Request body for POST /v1/domain-forwards/{hostname}/{protocol}
 *
 * @remarks
 * This type defines the request body structure for the POST /v1/domain-forwards/{hostname}/{protocol} endpoint.
 * It provides type safety for the request body as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for request body structure.
 *
 * @path /v1/domain-forwards/{hostname}/{protocol}
 */
export type POST_DomainForwardsHostnameProtocol_Request_Body = POST_DomainForwardsHostnameProtocol_Request['requestBody'];

/**
 * Request type for PUT DomainForwardsHostnameProtocol endpoint
 *
 * Update domain forward set
 * Updates an existing domain forward set for a specific protocol (HTTP or HTTPS). All existing redirects for this protocol are replaced with the provided redirects. Raises an error if the set does not exist.
 *
 * @remarks
 * This type defines the complete request structure for the PUT DomainForwardsHostnameProtocol endpoint.
 * It includes all parameters (query, path) and request body types as defined in the OpenAPI specification.
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @example
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @path /v1/domain-forwards/{hostname}/{protocol}
 * @param hostname (path) - Hostname
 *
 * @see {@link PUT_DomainForwardsHostnameProtocol_Request_Query} - Query parameters type
 * @see {@link PUT_DomainForwardsHostnameProtocol_Request_Path} - Path parameters type
 * @see {@link PUT_DomainForwardsHostnameProtocol_Request_Body} - Request body type
 */
export type PUT_DomainForwardsHostnameProtocol_Request = {
  parameters: {
    path: operations['update_domain_forward_set_v1_domain_forwards__hostname___protocol__put']['parameters']['path'];
  };
  requestBody: DomainForwardSetRequest;
}
/**
 * Path parameters for PUT /v1/domain-forwards/{hostname}/{protocol}
 *
 * @remarks
 * This type defines the path parameters for the PUT /v1/domain-forwards/{hostname}/{protocol} endpoint.
 * It provides type safety for all path parameters as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for path parameters.
 *
 * @path /v1/domain-forwards/{hostname}/{protocol}
 * @param hostname (path) - Hostname
 */
export type PUT_DomainForwardsHostnameProtocol_Request_Path = PUT_DomainForwardsHostnameProtocol_Request['parameters']['path'];
/**
 * Request body for PUT /v1/domain-forwards/{hostname}/{protocol}
 *
 * @remarks
 * This type defines the request body structure for the PUT /v1/domain-forwards/{hostname}/{protocol} endpoint.
 * It provides type safety for the request body as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for request body structure.
 *
 * @path /v1/domain-forwards/{hostname}/{protocol}
 */
export type PUT_DomainForwardsHostnameProtocol_Request_Body = PUT_DomainForwardsHostnameProtocol_Request['requestBody'];

/**
 * Request type for GET DomainForwardsMetrics endpoint
 *
 * Metrics
 *
 * @remarks
 * This type defines the complete request structure for the GET DomainForwardsMetrics endpoint.
 * It includes all parameters (query, path) and request body types as defined in the OpenAPI specification.
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @example
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @path /v1/domain-forwards/metrics
 * @param protocol (query) - Filter by protocol: http or https
 * @param time_range (query) - Time range: 1h, 1d, 7d, or 30d
 * @param exclude_bots (query) - Exclude platform values: Unknown, Bot
 *
 * @see {@link GET_DomainForwardsMetrics_Request_Query} - Query parameters type
 * @see {@link GET_DomainForwardsMetrics_Request_Path} - Path parameters type
 * @see {@link GET_DomainForwardsMetrics_Request_Body} - Request body type
 */
export type GET_DomainForwardsMetrics_Request = {
  parameters: {
    query: operations['metrics_v1_domain_forwards_metrics_get']['parameters']['query'];
  };
}
/**
 * Query parameters for GET /v1/domain-forwards/metrics
 *
 * @remarks
 * This type defines the query parameters for the GET /v1/domain-forwards/metrics endpoint.
 * It provides type safety for all query parameters as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for query parameters.
 *
 * @path /v1/domain-forwards/metrics
 * @param protocol (query) - Filter by protocol: http or https
 * @param time_range (query) - Time range: 1h, 1d, 7d, or 30d
 * @param exclude_bots (query) - Exclude platform values: Unknown, Bot
 */
export type GET_DomainForwardsMetrics_Request_Query = GET_DomainForwardsMetrics_Request['parameters']['query'];

/**
 * Request type for GET DomainForwardsMetricsBrowser endpoint
 *
 * Browser Stats
 *
 * @remarks
 * This type defines the complete request structure for the GET DomainForwardsMetricsBrowser endpoint.
 * It includes all parameters (query, path) and request body types as defined in the OpenAPI specification.
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @example
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @path /v1/domain-forwards/metrics/browser
 * @param protocol (query) - Filter by protocol: http or https
 * @param time_range (query) - Time range: 1h, 1d, 7d, or 30d
 * @param exclude_bots (query) - Exclude platform values: Unknown, Bot
 *
 * @see {@link GET_DomainForwardsMetricsBrowser_Request_Query} - Query parameters type
 * @see {@link GET_DomainForwardsMetricsBrowser_Request_Path} - Path parameters type
 * @see {@link GET_DomainForwardsMetricsBrowser_Request_Body} - Request body type
 */
export type GET_DomainForwardsMetricsBrowser_Request = {
  parameters: {
    query: operations['browser_stats_v1_domain_forwards_metrics_browser_get']['parameters']['query'];
  };
}
/**
 * Query parameters for GET /v1/domain-forwards/metrics/browser
 *
 * @remarks
 * This type defines the query parameters for the GET /v1/domain-forwards/metrics/browser endpoint.
 * It provides type safety for all query parameters as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for query parameters.
 *
 * @path /v1/domain-forwards/metrics/browser
 * @param protocol (query) - Filter by protocol: http or https
 * @param time_range (query) - Time range: 1h, 1d, 7d, or 30d
 * @param exclude_bots (query) - Exclude platform values: Unknown, Bot
 */
export type GET_DomainForwardsMetricsBrowser_Request_Query = GET_DomainForwardsMetricsBrowser_Request['parameters']['query'];

/**
 * Request type for GET DomainForwardsMetricsGeo endpoint
 *
 * Geo Stats
 *
 * @remarks
 * This type defines the complete request structure for the GET DomainForwardsMetricsGeo endpoint.
 * It includes all parameters (query, path) and request body types as defined in the OpenAPI specification.
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @example
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @path /v1/domain-forwards/metrics/geo
 * @param protocol (query) - Filter by protocol: http or https
 * @param time_range (query) - Time range: 1h, 1d, 7d, or 30d
 * @param exclude_bots (query) - Exclude platform values: Unknown, Bot
 *
 * @see {@link GET_DomainForwardsMetricsGeo_Request_Query} - Query parameters type
 * @see {@link GET_DomainForwardsMetricsGeo_Request_Path} - Path parameters type
 * @see {@link GET_DomainForwardsMetricsGeo_Request_Body} - Request body type
 */
export type GET_DomainForwardsMetricsGeo_Request = {
  parameters: {
    query: operations['geo_stats_v1_domain_forwards_metrics_geo_get']['parameters']['query'];
  };
}
/**
 * Query parameters for GET /v1/domain-forwards/metrics/geo
 *
 * @remarks
 * This type defines the query parameters for the GET /v1/domain-forwards/metrics/geo endpoint.
 * It provides type safety for all query parameters as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for query parameters.
 *
 * @path /v1/domain-forwards/metrics/geo
 * @param protocol (query) - Filter by protocol: http or https
 * @param time_range (query) - Time range: 1h, 1d, 7d, or 30d
 * @param exclude_bots (query) - Exclude platform values: Unknown, Bot
 */
export type GET_DomainForwardsMetricsGeo_Request_Query = GET_DomainForwardsMetricsGeo_Request['parameters']['query'];

/**
 * Request type for GET DomainForwardsMetricsPlatform endpoint
 *
 * Platform Stats
 *
 * @remarks
 * This type defines the complete request structure for the GET DomainForwardsMetricsPlatform endpoint.
 * It includes all parameters (query, path) and request body types as defined in the OpenAPI specification.
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @example
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @path /v1/domain-forwards/metrics/platform
 * @param protocol (query) - Filter by protocol: http or https
 * @param time_range (query) - Time range: 1h, 1d, 7d, or 30d
 * @param exclude_bots (query) - Exclude platform values: Unknown, Bot
 *
 * @see {@link GET_DomainForwardsMetricsPlatform_Request_Query} - Query parameters type
 * @see {@link GET_DomainForwardsMetricsPlatform_Request_Path} - Path parameters type
 * @see {@link GET_DomainForwardsMetricsPlatform_Request_Body} - Request body type
 */
export type GET_DomainForwardsMetricsPlatform_Request = {
  parameters: {
    query: operations['platform_stats_v1_domain_forwards_metrics_platform_get']['parameters']['query'];
  };
}
/**
 * Query parameters for GET /v1/domain-forwards/metrics/platform
 *
 * @remarks
 * This type defines the query parameters for the GET /v1/domain-forwards/metrics/platform endpoint.
 * It provides type safety for all query parameters as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for query parameters.
 *
 * @path /v1/domain-forwards/metrics/platform
 * @param protocol (query) - Filter by protocol: http or https
 * @param time_range (query) - Time range: 1h, 1d, 7d, or 30d
 * @param exclude_bots (query) - Exclude platform values: Unknown, Bot
 */
export type GET_DomainForwardsMetricsPlatform_Request_Query = GET_DomainForwardsMetricsPlatform_Request['parameters']['query'];

/**
 * Request type for GET DomainForwardsMetricsReferrer endpoint
 *
 * Referrer Stats
 *
 * @remarks
 * This type defines the complete request structure for the GET DomainForwardsMetricsReferrer endpoint.
 * It includes all parameters (query, path) and request body types as defined in the OpenAPI specification.
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @example
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @path /v1/domain-forwards/metrics/referrer
 * @param protocol (query) - Filter by protocol: http or https
 * @param time_range (query) - Time range: 1h, 1d, 7d, or 30d
 * @param exclude_bots (query) - Exclude platform values: Unknown, Bot
 *
 * @see {@link GET_DomainForwardsMetricsReferrer_Request_Query} - Query parameters type
 * @see {@link GET_DomainForwardsMetricsReferrer_Request_Path} - Path parameters type
 * @see {@link GET_DomainForwardsMetricsReferrer_Request_Body} - Request body type
 */
export type GET_DomainForwardsMetricsReferrer_Request = {
  parameters: {
    query: operations['referrer_stats_v1_domain_forwards_metrics_referrer_get']['parameters']['query'];
  };
}
/**
 * Query parameters for GET /v1/domain-forwards/metrics/referrer
 *
 * @remarks
 * This type defines the query parameters for the GET /v1/domain-forwards/metrics/referrer endpoint.
 * It provides type safety for all query parameters as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for query parameters.
 *
 * @path /v1/domain-forwards/metrics/referrer
 * @param protocol (query) - Filter by protocol: http or https
 * @param time_range (query) - Time range: 1h, 1d, 7d, or 30d
 * @param exclude_bots (query) - Exclude platform values: Unknown, Bot
 */
export type GET_DomainForwardsMetricsReferrer_Request_Query = GET_DomainForwardsMetricsReferrer_Request['parameters']['query'];

/**
 * Request type for GET DomainForwardsMetricsStatusCode endpoint
 *
 * Status Code Stats
 *
 * @remarks
 * This type defines the complete request structure for the GET DomainForwardsMetricsStatusCode endpoint.
 * It includes all parameters (query, path) and request body types as defined in the OpenAPI specification.
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @example
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @path /v1/domain-forwards/metrics/status-code
 * @param protocol (query) - Filter by protocol: http or https
 * @param time_range (query) - Time range: 1h, 1d, 7d, or 30d
 * @param exclude_bots (query) - Exclude platform values: Unknown, Bot
 *
 * @see {@link GET_DomainForwardsMetricsStatusCode_Request_Query} - Query parameters type
 * @see {@link GET_DomainForwardsMetricsStatusCode_Request_Path} - Path parameters type
 * @see {@link GET_DomainForwardsMetricsStatusCode_Request_Body} - Request body type
 */
export type GET_DomainForwardsMetricsStatusCode_Request = {
  parameters: {
    query: operations['status_code_stats_v1_domain_forwards_metrics_status_code_get']['parameters']['query'];
  };
}
/**
 * Query parameters for GET /v1/domain-forwards/metrics/status-code
 *
 * @remarks
 * This type defines the query parameters for the GET /v1/domain-forwards/metrics/status-code endpoint.
 * It provides type safety for all query parameters as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for query parameters.
 *
 * @path /v1/domain-forwards/metrics/status-code
 * @param protocol (query) - Filter by protocol: http or https
 * @param time_range (query) - Time range: 1h, 1d, 7d, or 30d
 * @param exclude_bots (query) - Exclude platform values: Unknown, Bot
 */
export type GET_DomainForwardsMetricsStatusCode_Request_Query = GET_DomainForwardsMetricsStatusCode_Request['parameters']['query'];

/**
 * Request type for GET DomainForwardsMetricsTimeSeries endpoint
 *
 * Time Series
 *
 * @remarks
 * This type defines the complete request structure for the GET DomainForwardsMetricsTimeSeries endpoint.
 * It includes all parameters (query, path) and request body types as defined in the OpenAPI specification.
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @example
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @path /v1/domain-forwards/metrics/time-series
 * @param protocol (query) - Filter by protocol: http or https
 * @param time_range (query) - Time range: 1h, 1d, 7d, or 30d
 * @param exclude_bots (query) - Exclude platform values: Unknown, Bot
 *
 * @see {@link GET_DomainForwardsMetricsTimeSeries_Request_Query} - Query parameters type
 * @see {@link GET_DomainForwardsMetricsTimeSeries_Request_Path} - Path parameters type
 * @see {@link GET_DomainForwardsMetricsTimeSeries_Request_Body} - Request body type
 */
export type GET_DomainForwardsMetricsTimeSeries_Request = {
  parameters: {
    query: operations['time_series_v1_domain_forwards_metrics_time_series_get']['parameters']['query'];
  };
}
/**
 * Query parameters for GET /v1/domain-forwards/metrics/time-series
 *
 * @remarks
 * This type defines the query parameters for the GET /v1/domain-forwards/metrics/time-series endpoint.
 * It provides type safety for all query parameters as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for query parameters.
 *
 * @path /v1/domain-forwards/metrics/time-series
 * @param protocol (query) - Filter by protocol: http or https
 * @param time_range (query) - Time range: 1h, 1d, 7d, or 30d
 * @param exclude_bots (query) - Exclude platform values: Unknown, Bot
 */
export type GET_DomainForwardsMetricsTimeSeries_Request_Query = GET_DomainForwardsMetricsTimeSeries_Request['parameters']['query'];

/**
 * Request type for GET DomainForwardsMetricsUserAgent endpoint
 *
 * User Agent Stats
 *
 * @remarks
 * This type defines the complete request structure for the GET DomainForwardsMetricsUserAgent endpoint.
 * It includes all parameters (query, path) and request body types as defined in the OpenAPI specification.
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @example
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @path /v1/domain-forwards/metrics/user-agent
 * @param protocol (query) - Filter by protocol: http or https
 * @param time_range (query) - Time range: 1h, 1d, 7d, or 30d
 * @param exclude_bots (query) - Exclude platform values: Unknown, Bot
 *
 * @see {@link GET_DomainForwardsMetricsUserAgent_Request_Query} - Query parameters type
 * @see {@link GET_DomainForwardsMetricsUserAgent_Request_Path} - Path parameters type
 * @see {@link GET_DomainForwardsMetricsUserAgent_Request_Body} - Request body type
 */
export type GET_DomainForwardsMetricsUserAgent_Request = {
  parameters: {
    query: operations['user_agent_stats_v1_domain_forwards_metrics_user_agent_get']['parameters']['query'];
  };
}
/**
 * Query parameters for GET /v1/domain-forwards/metrics/user-agent
 *
 * @remarks
 * This type defines the query parameters for the GET /v1/domain-forwards/metrics/user-agent endpoint.
 * It provides type safety for all query parameters as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for query parameters.
 *
 * @path /v1/domain-forwards/metrics/user-agent
 * @param protocol (query) - Filter by protocol: http or https
 * @param time_range (query) - Time range: 1h, 1d, 7d, or 30d
 * @param exclude_bots (query) - Exclude platform values: Unknown, Bot
 */
export type GET_DomainForwardsMetricsUserAgent_Request_Query = GET_DomainForwardsMetricsUserAgent_Request['parameters']['query'];

/**
 * Request type for GET DomainForwardsMetricsVisitsByKey endpoint
 *
 * Visits By Key
 *
 * @remarks
 * This type defines the complete request structure for the GET DomainForwardsMetricsVisitsByKey endpoint.
 * It includes all parameters (query, path) and request body types as defined in the OpenAPI specification.
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @example
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @path /v1/domain-forwards/metrics/visits-by-key
 * @param grouping (query) - Grouping key: url, fqdn, domain, or forward
 * @param protocol (query) - Filter by protocol: http or https
 * @param time_range (query) - Time range: 1h, 1d, 7d, or 30d
 * @param exclude_bots (query) - Exclude platform values: Unknown, Bot
 *
 * @see {@link GET_DomainForwardsMetricsVisitsByKey_Request_Query} - Query parameters type
 * @see {@link GET_DomainForwardsMetricsVisitsByKey_Request_Path} - Path parameters type
 * @see {@link GET_DomainForwardsMetricsVisitsByKey_Request_Body} - Request body type
 */
export type GET_DomainForwardsMetricsVisitsByKey_Request = {
  parameters: {
    query: operations['visits_by_key_v1_domain_forwards_metrics_visits_by_key_get']['parameters']['query'];
  };
}
/**
 * Query parameters for GET /v1/domain-forwards/metrics/visits-by-key
 *
 * @remarks
 * This type defines the query parameters for the GET /v1/domain-forwards/metrics/visits-by-key endpoint.
 * It provides type safety for all query parameters as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for query parameters.
 *
 * @path /v1/domain-forwards/metrics/visits-by-key
 * @param grouping (query) - Grouping key: url, fqdn, domain, or forward
 * @param protocol (query) - Filter by protocol: http or https
 * @param time_range (query) - Time range: 1h, 1d, 7d, or 30d
 * @param exclude_bots (query) - Exclude platform values: Unknown, Bot
 */
export type GET_DomainForwardsMetricsVisitsByKey_Request_Query = GET_DomainForwardsMetricsVisitsByKey_Request['parameters']['query'];

/**
 * Request type for GET DomainSearchSuggest endpoint
 *
 * Suggest domains
 * Get a list of domain suggestions based on a search query
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
 * @param tlds (query) - The TLDs to include in the search
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
 * @param tlds (query) - The TLDs to include in the search
 * @param limit (query) - The maximum number of domain suggestions to return
 * @param premium (query) - Whether to include premium domains in the suggestions
 */
export type GET_DomainSearchSuggest_Request_Query = GET_DomainSearchSuggest_Request['parameters']['query'];

/**
 * Request type for GET Domains endpoint
 *
 * List all domains
 * Retrieves a paginated list of all active domains
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
 * @param registry_statuses (query) - Filter domains by registry status. Can be specified multiple times (union of all provided values).
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
 * @param registry_statuses (query) - Filter domains by registry status. Can be specified multiple times (union of all provided values).
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
 * Retrieves a single active domain by either its name or id
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
 * Request type for POST DomainsDomainReferenceDnssecDisable endpoint
 *
 * Disable DNSSEC for domains using our nameservers
 *
 * @remarks
 * This type defines the complete request structure for the POST DomainsDomainReferenceDnssecDisable endpoint.
 * It includes all parameters (query, path) and request body types as defined in the OpenAPI specification.
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @example
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @path /v1/domains/{domain_reference}/dnssec/disable
 *
 * @see {@link POST_DomainsDomainReferenceDnssecDisable_Request_Query} - Query parameters type
 * @see {@link POST_DomainsDomainReferenceDnssecDisable_Request_Path} - Path parameters type
 * @see {@link POST_DomainsDomainReferenceDnssecDisable_Request_Body} - Request body type
 */
export type POST_DomainsDomainReferenceDnssecDisable_Request = {
  parameters: {
    path: operations['disable_and_unpublish_dnssec_records_v1_domains__domain_reference__dnssec_disable_post']['parameters']['path'];
  };
}
/**
 * Path parameters for POST /v1/domains/{domain_reference}/dnssec/disable
 *
 * @remarks
 * This type defines the path parameters for the POST /v1/domains/{domain_reference}/dnssec/disable endpoint.
 * It provides type safety for all path parameters as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for path parameters.
 *
 * @path /v1/domains/{domain_reference}/dnssec/disable
 */
export type POST_DomainsDomainReferenceDnssecDisable_Request_Path = POST_DomainsDomainReferenceDnssecDisable_Request['parameters']['path'];

/**
 * Request type for POST DomainsDomainReferenceDnssecEnable endpoint
 *
 * Enable DNSSEC for domains using our nameservers
 *
 * @remarks
 * This type defines the complete request structure for the POST DomainsDomainReferenceDnssecEnable endpoint.
 * It includes all parameters (query, path) and request body types as defined in the OpenAPI specification.
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @example
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @path /v1/domains/{domain_reference}/dnssec/enable
 *
 * @see {@link POST_DomainsDomainReferenceDnssecEnable_Request_Query} - Query parameters type
 * @see {@link POST_DomainsDomainReferenceDnssecEnable_Request_Path} - Path parameters type
 * @see {@link POST_DomainsDomainReferenceDnssecEnable_Request_Body} - Request body type
 */
export type POST_DomainsDomainReferenceDnssecEnable_Request = {
  parameters: {
    path: operations['enable_and_publish_dnssec_records_v1_domains__domain_reference__dnssec_enable_post']['parameters']['path'];
  };
}
/**
 * Path parameters for POST /v1/domains/{domain_reference}/dnssec/enable
 *
 * @remarks
 * This type defines the path parameters for the POST /v1/domains/{domain_reference}/dnssec/enable endpoint.
 * It provides type safety for all path parameters as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for path parameters.
 *
 * @path /v1/domains/{domain_reference}/dnssec/enable
 */
export type POST_DomainsDomainReferenceDnssecEnable_Request_Path = POST_DomainsDomainReferenceDnssecEnable_Request['parameters']['path'];

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
 * Request type for POST DomainsDomainReferenceRestore endpoint
 *
 * Restore an eligible domain (during redemption period)
 *
 * @remarks
 * This type defines the complete request structure for the POST DomainsDomainReferenceRestore endpoint.
 * It includes all parameters (query, path) and request body types as defined in the OpenAPI specification.
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @example
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @path /v1/domains/{domain_reference}/restore
 *
 * @see {@link POST_DomainsDomainReferenceRestore_Request_Query} - Query parameters type
 * @see {@link POST_DomainsDomainReferenceRestore_Request_Path} - Path parameters type
 * @see {@link POST_DomainsDomainReferenceRestore_Request_Body} - Request body type
 */
export type POST_DomainsDomainReferenceRestore_Request = {
  parameters: {
    path: operations['restore_domain_v1_domains__domain_reference__restore_post']['parameters']['path'];
  };
  requestBody: DomainRestoreRequest;
}
/**
 * Path parameters for POST /v1/domains/{domain_reference}/restore
 *
 * @remarks
 * This type defines the path parameters for the POST /v1/domains/{domain_reference}/restore endpoint.
 * It provides type safety for all path parameters as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for path parameters.
 *
 * @path /v1/domains/{domain_reference}/restore
 */
export type POST_DomainsDomainReferenceRestore_Request_Path = POST_DomainsDomainReferenceRestore_Request['parameters']['path'];
/**
 * Request body for POST /v1/domains/{domain_reference}/restore
 *
 * @remarks
 * This type defines the request body structure for the POST /v1/domains/{domain_reference}/restore endpoint.
 * It provides type safety for the request body as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for request body structure.
 *
 * @path /v1/domains/{domain_reference}/restore
 */
export type POST_DomainsDomainReferenceRestore_Request_Body = POST_DomainsDomainReferenceRestore_Request['requestBody'];

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
 * Request type for POST DomainsTldSpecificAtDomainReferenceWithdraw endpoint
 *
 * Withdraw a nic.at domain
 *
 * @remarks
 * This type defines the complete request structure for the POST DomainsTldSpecificAtDomainReferenceWithdraw endpoint.
 * It includes all parameters (query, path) and request body types as defined in the OpenAPI specification.
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @example
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @path /v1/domains/tld-specific/at/{domain_reference}/withdraw
 *
 * @see {@link POST_DomainsTldSpecificAtDomainReferenceWithdraw_Request_Query} - Query parameters type
 * @see {@link POST_DomainsTldSpecificAtDomainReferenceWithdraw_Request_Path} - Path parameters type
 * @see {@link POST_DomainsTldSpecificAtDomainReferenceWithdraw_Request_Body} - Request body type
 */
export type POST_DomainsTldSpecificAtDomainReferenceWithdraw_Request = {
  parameters: {
    path: operations['withdraw_domain_v1_domains_tld_specific_at__domain_reference__withdraw_post']['parameters']['path'];
  };
  requestBody: DomainWithdrawRequest;
}
/**
 * Path parameters for POST /v1/domains/tld-specific/at/{domain_reference}/withdraw
 *
 * @remarks
 * This type defines the path parameters for the POST /v1/domains/tld-specific/at/{domain_reference}/withdraw endpoint.
 * It provides type safety for all path parameters as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for path parameters.
 *
 * @path /v1/domains/tld-specific/at/{domain_reference}/withdraw
 */
export type POST_DomainsTldSpecificAtDomainReferenceWithdraw_Request_Path = POST_DomainsTldSpecificAtDomainReferenceWithdraw_Request['parameters']['path'];
/**
 * Request body for POST /v1/domains/tld-specific/at/{domain_reference}/withdraw
 *
 * @remarks
 * This type defines the request body structure for the POST /v1/domains/tld-specific/at/{domain_reference}/withdraw endpoint.
 * It provides type safety for the request body as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for request body structure.
 *
 * @path /v1/domains/tld-specific/at/{domain_reference}/withdraw
 */
export type POST_DomainsTldSpecificAtDomainReferenceWithdraw_Request_Body = POST_DomainsTldSpecificAtDomainReferenceWithdraw_Request['requestBody'];

/**
 * Request type for POST DomainsTldSpecificBeDomainReferenceAuthCodeRequest endpoint
 *
 * Requests your auth code directly from DNS Belgium (registry)
 *
 * @remarks
 * This type defines the complete request structure for the POST DomainsTldSpecificBeDomainReferenceAuthCodeRequest endpoint.
 * It includes all parameters (query, path) and request body types as defined in the OpenAPI specification.
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @example
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @path /v1/domains/tld-specific/be/{domain_reference}/auth_code/request
 *
 * @see {@link POST_DomainsTldSpecificBeDomainReferenceAuthCodeRequest_Request_Query} - Query parameters type
 * @see {@link POST_DomainsTldSpecificBeDomainReferenceAuthCodeRequest_Request_Path} - Path parameters type
 * @see {@link POST_DomainsTldSpecificBeDomainReferenceAuthCodeRequest_Request_Body} - Request body type
 */
export type POST_DomainsTldSpecificBeDomainReferenceAuthCodeRequest_Request = {
  parameters: {
    path: operations['request_auth_code_v1_domains_tld_specific_be__domain_reference__auth_code_request_post']['parameters']['path'];
  };
}
/**
 * Path parameters for POST /v1/domains/tld-specific/be/{domain_reference}/auth_code/request
 *
 * @remarks
 * This type defines the path parameters for the POST /v1/domains/tld-specific/be/{domain_reference}/auth_code/request endpoint.
 * It provides type safety for all path parameters as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for path parameters.
 *
 * @path /v1/domains/tld-specific/be/{domain_reference}/auth_code/request
 */
export type POST_DomainsTldSpecificBeDomainReferenceAuthCodeRequest_Request_Path = POST_DomainsTldSpecificBeDomainReferenceAuthCodeRequest_Request['parameters']['path'];

/**
 * Request type for POST DomainsTldSpecificDeDomainReferenceTransit endpoint
 *
 * Transit a DENIC domain
 *
 * @remarks
 * This type defines the complete request structure for the POST DomainsTldSpecificDeDomainReferenceTransit endpoint.
 * It includes all parameters (query, path) and request body types as defined in the OpenAPI specification.
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @example
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @path /v1/domains/tld-specific/de/{domain_reference}/transit
 *
 * @see {@link POST_DomainsTldSpecificDeDomainReferenceTransit_Request_Query} - Query parameters type
 * @see {@link POST_DomainsTldSpecificDeDomainReferenceTransit_Request_Path} - Path parameters type
 * @see {@link POST_DomainsTldSpecificDeDomainReferenceTransit_Request_Body} - Request body type
 */
export type POST_DomainsTldSpecificDeDomainReferenceTransit_Request = {
  parameters: {
    path: operations['transit_domain_v1_domains_tld_specific_de__domain_reference__transit_post']['parameters']['path'];
  };
  requestBody: DomainTransitRequest;
}
/**
 * Path parameters for POST /v1/domains/tld-specific/de/{domain_reference}/transit
 *
 * @remarks
 * This type defines the path parameters for the POST /v1/domains/tld-specific/de/{domain_reference}/transit endpoint.
 * It provides type safety for all path parameters as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for path parameters.
 *
 * @path /v1/domains/tld-specific/de/{domain_reference}/transit
 */
export type POST_DomainsTldSpecificDeDomainReferenceTransit_Request_Path = POST_DomainsTldSpecificDeDomainReferenceTransit_Request['parameters']['path'];
/**
 * Request body for POST /v1/domains/tld-specific/de/{domain_reference}/transit
 *
 * @remarks
 * This type defines the request body structure for the POST /v1/domains/tld-specific/de/{domain_reference}/transit endpoint.
 * It provides type safety for the request body as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for request body structure.
 *
 * @path /v1/domains/tld-specific/de/{domain_reference}/transit
 */
export type POST_DomainsTldSpecificDeDomainReferenceTransit_Request_Body = POST_DomainsTldSpecificDeDomainReferenceTransit_Request['requestBody'];

/**
 * Request type for POST DomainsTldSpecificEuDomainReferenceAuthCodeRequest endpoint
 *
 * Requests your auth code directly from EURid (registry)
 *
 * @remarks
 * This type defines the complete request structure for the POST DomainsTldSpecificEuDomainReferenceAuthCodeRequest endpoint.
 * It includes all parameters (query, path) and request body types as defined in the OpenAPI specification.
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @example
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @path /v1/domains/tld-specific/eu/{domain_reference}/auth_code/request
 *
 * @see {@link POST_DomainsTldSpecificEuDomainReferenceAuthCodeRequest_Request_Query} - Query parameters type
 * @see {@link POST_DomainsTldSpecificEuDomainReferenceAuthCodeRequest_Request_Path} - Path parameters type
 * @see {@link POST_DomainsTldSpecificEuDomainReferenceAuthCodeRequest_Request_Body} - Request body type
 */
export type POST_DomainsTldSpecificEuDomainReferenceAuthCodeRequest_Request = {
  parameters: {
    path: operations['request_auth_code_v1_domains_tld_specific_eu__domain_reference__auth_code_request_post']['parameters']['path'];
  };
}
/**
 * Path parameters for POST /v1/domains/tld-specific/eu/{domain_reference}/auth_code/request
 *
 * @remarks
 * This type defines the path parameters for the POST /v1/domains/tld-specific/eu/{domain_reference}/auth_code/request endpoint.
 * It provides type safety for all path parameters as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for path parameters.
 *
 * @path /v1/domains/tld-specific/eu/{domain_reference}/auth_code/request
 */
export type POST_DomainsTldSpecificEuDomainReferenceAuthCodeRequest_Request_Path = POST_DomainsTldSpecificEuDomainReferenceAuthCodeRequest_Request['parameters']['path'];

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
 * List all email forwards
 * Retrieves a paginated list of all email forwards for the organization.
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
 */
export type GET_EmailForwards_Request_Query = GET_EmailForwards_Request['parameters']['query'];

/**
 * Request type for POST EmailForwards endpoint
 *
 * Create email forward configuration
 * Creates an email forward configuration with optional aliases. Can be created enabled or disabled (default: disabled). Includes created_on and updated_on timestamps.
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
 * Request type for DELETE EmailForwardsEmailForwardId endpoint
 *
 * Delete email forward configuration
 * Permanently deletes the email forward configuration including all aliases. If enabled, automatically disables first (removes DNS records and unregisters from the email forwarding provider).
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
 * Get email forward configuration
 * Retrieves the email forward configuration for the specified email forward including all aliases
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
 * Request type for POST EmailForwardsEmailForwardIdAliases endpoint
 *
 * Create email forward alias
 * Creates a new email forward alias for the specified email forward. Use '*' as the alias name to configure a catch-all alias that forwards all unmatched emails for the domain.
 *
 * @remarks
 * This type defines the complete request structure for the POST EmailForwardsEmailForwardIdAliases endpoint.
 * It includes all parameters (query, path) and request body types as defined in the OpenAPI specification.
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @example
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @path /v1/email-forwards/{email_forward_id}/aliases
 *
 * @see {@link POST_EmailForwardsEmailForwardIdAliases_Request_Query} - Query parameters type
 * @see {@link POST_EmailForwardsEmailForwardIdAliases_Request_Path} - Path parameters type
 * @see {@link POST_EmailForwardsEmailForwardIdAliases_Request_Body} - Request body type
 */
export type POST_EmailForwardsEmailForwardIdAliases_Request = {
  parameters: {
    path: operations['create_email_forward_alias_v1_email_forwards__email_forward_id__aliases_post']['parameters']['path'];
  };
  requestBody: EmailForwardAliasCreate;
}
/**
 * Path parameters for POST /v1/email-forwards/{email_forward_id}/aliases
 *
 * @remarks
 * This type defines the path parameters for the POST /v1/email-forwards/{email_forward_id}/aliases endpoint.
 * It provides type safety for all path parameters as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for path parameters.
 *
 * @path /v1/email-forwards/{email_forward_id}/aliases
 */
export type POST_EmailForwardsEmailForwardIdAliases_Request_Path = POST_EmailForwardsEmailForwardIdAliases_Request['parameters']['path'];
/**
 * Request body for POST /v1/email-forwards/{email_forward_id}/aliases
 *
 * @remarks
 * This type defines the request body structure for the POST /v1/email-forwards/{email_forward_id}/aliases endpoint.
 * It provides type safety for the request body as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for request body structure.
 *
 * @path /v1/email-forwards/{email_forward_id}/aliases
 */
export type POST_EmailForwardsEmailForwardIdAliases_Request_Body = POST_EmailForwardsEmailForwardIdAliases_Request['requestBody'];

/**
 * Request type for DELETE EmailForwardsEmailForwardIdAliasesAliasId endpoint
 *
 * Delete email forward alias
 * Deletes a specific email forward alias specified by email_forward_alias_id for the specified email forward
 *
 * @remarks
 * This type defines the complete request structure for the DELETE EmailForwardsEmailForwardIdAliasesAliasId endpoint.
 * It includes all parameters (query, path) and request body types as defined in the OpenAPI specification.
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @example
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @path /v1/email-forwards/{email_forward_id}/aliases/{alias_id}
 *
 * @see {@link DELETE_EmailForwardsEmailForwardIdAliasesAliasId_Request_Query} - Query parameters type
 * @see {@link DELETE_EmailForwardsEmailForwardIdAliasesAliasId_Request_Path} - Path parameters type
 * @see {@link DELETE_EmailForwardsEmailForwardIdAliasesAliasId_Request_Body} - Request body type
 */
export type DELETE_EmailForwardsEmailForwardIdAliasesAliasId_Request = {
  parameters: {
    path: operations['delete_email_forward_alias_v1_email_forwards__email_forward_id__aliases__alias_id__delete']['parameters']['path'];
  };
}
/**
 * Path parameters for DELETE /v1/email-forwards/{email_forward_id}/aliases/{alias_id}
 *
 * @remarks
 * This type defines the path parameters for the DELETE /v1/email-forwards/{email_forward_id}/aliases/{alias_id} endpoint.
 * It provides type safety for all path parameters as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for path parameters.
 *
 * @path /v1/email-forwards/{email_forward_id}/aliases/{alias_id}
 */
export type DELETE_EmailForwardsEmailForwardIdAliasesAliasId_Request_Path = DELETE_EmailForwardsEmailForwardIdAliasesAliasId_Request['parameters']['path'];

/**
 * Request type for PUT EmailForwardsEmailForwardIdAliasesAliasId endpoint
 *
 * Update email forward alias
 * Updates the forward_to address for a specific email forward alias specified by email_forward_alias_id
 *
 * @remarks
 * This type defines the complete request structure for the PUT EmailForwardsEmailForwardIdAliasesAliasId endpoint.
 * It includes all parameters (query, path) and request body types as defined in the OpenAPI specification.
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @example
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @path /v1/email-forwards/{email_forward_id}/aliases/{alias_id}
 *
 * @see {@link PUT_EmailForwardsEmailForwardIdAliasesAliasId_Request_Query} - Query parameters type
 * @see {@link PUT_EmailForwardsEmailForwardIdAliasesAliasId_Request_Path} - Path parameters type
 * @see {@link PUT_EmailForwardsEmailForwardIdAliasesAliasId_Request_Body} - Request body type
 */
export type PUT_EmailForwardsEmailForwardIdAliasesAliasId_Request = {
  parameters: {
    path: operations['update_email_forward_alias_v1_email_forwards__email_forward_id__aliases__alias_id__put']['parameters']['path'];
  };
  requestBody: EmailForwardAliasUpdate;
}
/**
 * Path parameters for PUT /v1/email-forwards/{email_forward_id}/aliases/{alias_id}
 *
 * @remarks
 * This type defines the path parameters for the PUT /v1/email-forwards/{email_forward_id}/aliases/{alias_id} endpoint.
 * It provides type safety for all path parameters as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for path parameters.
 *
 * @path /v1/email-forwards/{email_forward_id}/aliases/{alias_id}
 */
export type PUT_EmailForwardsEmailForwardIdAliasesAliasId_Request_Path = PUT_EmailForwardsEmailForwardIdAliasesAliasId_Request['parameters']['path'];
/**
 * Request body for PUT /v1/email-forwards/{email_forward_id}/aliases/{alias_id}
 *
 * @remarks
 * This type defines the request body structure for the PUT /v1/email-forwards/{email_forward_id}/aliases/{alias_id} endpoint.
 * It provides type safety for the request body as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for request body structure.
 *
 * @path /v1/email-forwards/{email_forward_id}/aliases/{alias_id}
 */
export type PUT_EmailForwardsEmailForwardIdAliasesAliasId_Request_Body = PUT_EmailForwardsEmailForwardIdAliasesAliasId_Request['requestBody'];

/**
 * Request type for PATCH EmailForwardsEmailForwardIdDisable endpoint
 *
 * Disable email forwarding
 * Disables email forwarding by removing MX and SPF DNS records and unregistering the domain from the email forwarding provider. The email forward configuration is preserved but disabled.
 *
 * @remarks
 * This type defines the complete request structure for the PATCH EmailForwardsEmailForwardIdDisable endpoint.
 * It includes all parameters (query, path) and request body types as defined in the OpenAPI specification.
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @example
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @path /v1/email-forwards/{email_forward_id}/disable
 *
 * @see {@link PATCH_EmailForwardsEmailForwardIdDisable_Request_Query} - Query parameters type
 * @see {@link PATCH_EmailForwardsEmailForwardIdDisable_Request_Path} - Path parameters type
 * @see {@link PATCH_EmailForwardsEmailForwardIdDisable_Request_Body} - Request body type
 */
export type PATCH_EmailForwardsEmailForwardIdDisable_Request = {
  parameters: {
    path: operations['disable_email_forward_v1_email_forwards__email_forward_id__disable_patch']['parameters']['path'];
  };
}
/**
 * Path parameters for PATCH /v1/email-forwards/{email_forward_id}/disable
 *
 * @remarks
 * This type defines the path parameters for the PATCH /v1/email-forwards/{email_forward_id}/disable endpoint.
 * It provides type safety for all path parameters as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for path parameters.
 *
 * @path /v1/email-forwards/{email_forward_id}/disable
 */
export type PATCH_EmailForwardsEmailForwardIdDisable_Request_Path = PATCH_EmailForwardsEmailForwardIdDisable_Request['parameters']['path'];

/**
 * Request type for PATCH EmailForwardsEmailForwardIdEnable endpoint
 *
 * Enable email forwarding
 * Enables email forwarding by creating necessary MX and SPF DNS records and registering the domain with the email forwarding provider.
 *
 * @remarks
 * This type defines the complete request structure for the PATCH EmailForwardsEmailForwardIdEnable endpoint.
 * It includes all parameters (query, path) and request body types as defined in the OpenAPI specification.
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @example
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @path /v1/email-forwards/{email_forward_id}/enable
 *
 * @see {@link PATCH_EmailForwardsEmailForwardIdEnable_Request_Query} - Query parameters type
 * @see {@link PATCH_EmailForwardsEmailForwardIdEnable_Request_Path} - Path parameters type
 * @see {@link PATCH_EmailForwardsEmailForwardIdEnable_Request_Body} - Request body type
 */
export type PATCH_EmailForwardsEmailForwardIdEnable_Request = {
  parameters: {
    path: operations['enable_email_forward_v1_email_forwards__email_forward_id__enable_patch']['parameters']['path'];
  };
}
/**
 * Path parameters for PATCH /v1/email-forwards/{email_forward_id}/enable
 *
 * @remarks
 * This type defines the path parameters for the PATCH /v1/email-forwards/{email_forward_id}/enable endpoint.
 * It provides type safety for all path parameters as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for path parameters.
 *
 * @path /v1/email-forwards/{email_forward_id}/enable
 */
export type PATCH_EmailForwardsEmailForwardIdEnable_Request_Path = PATCH_EmailForwardsEmailForwardIdEnable_Request['parameters']['path'];

/**
 * Request type for GET EmailForwardsEmailForwardIdMetrics endpoint
 *
 * Retrieve email forward metrics
 * Retrieves metrics and statistics for a specific email forward, including delivery rates and status counts.
 *
 * @remarks
 * This type defines the complete request structure for the GET EmailForwardsEmailForwardIdMetrics endpoint.
 * It includes all parameters (query, path) and request body types as defined in the OpenAPI specification.
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @example
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @path /v1/email-forwards/{email_forward_id}/metrics
 *
 * @see {@link GET_EmailForwardsEmailForwardIdMetrics_Request_Query} - Query parameters type
 * @see {@link GET_EmailForwardsEmailForwardIdMetrics_Request_Path} - Path parameters type
 * @see {@link GET_EmailForwardsEmailForwardIdMetrics_Request_Body} - Request body type
 */
export type GET_EmailForwardsEmailForwardIdMetrics_Request = {
  parameters: {
    query: operations['get_email_forward_metrics_v1_email_forwards__email_forward_id__metrics_get']['parameters']['query'];
    path: operations['get_email_forward_metrics_v1_email_forwards__email_forward_id__metrics_get']['parameters']['path'];
  };
}
/**
 * Query parameters for GET /v1/email-forwards/{email_forward_id}/metrics
 *
 * @remarks
 * This type defines the query parameters for the GET /v1/email-forwards/{email_forward_id}/metrics endpoint.
 * It provides type safety for all query parameters as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for query parameters.
 *
 * @path /v1/email-forwards/{email_forward_id}/metrics
 */
export type GET_EmailForwardsEmailForwardIdMetrics_Request_Query = GET_EmailForwardsEmailForwardIdMetrics_Request['parameters']['query'];
/**
 * Path parameters for GET /v1/email-forwards/{email_forward_id}/metrics
 *
 * @remarks
 * This type defines the path parameters for the GET /v1/email-forwards/{email_forward_id}/metrics endpoint.
 * It provides type safety for all path parameters as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for path parameters.
 *
 * @path /v1/email-forwards/{email_forward_id}/metrics
 */
export type GET_EmailForwardsEmailForwardIdMetrics_Request_Path = GET_EmailForwardsEmailForwardIdMetrics_Request['parameters']['path'];

/**
 * Request type for GET Events endpoint
 *
 * Get pending events
 * Retrieves a paginated list of events for the organization
 *
 * @remarks
 * This type defines the complete request structure for the GET Events endpoint.
 * It includes all parameters (query, path) and request body types as defined in the OpenAPI specification.
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @example
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @path /v1/events
 *
 * @see {@link GET_Events_Request_Query} - Query parameters type
 * @see {@link GET_Events_Request_Path} - Path parameters type
 * @see {@link GET_Events_Request_Body} - Request body type
 */
export type GET_Events_Request = {
  parameters: {
    query: operations['get_events_v1_events_get']['parameters']['query'];
  };
}
/**
 * Query parameters for GET /v1/events
 *
 * @remarks
 * This type defines the query parameters for the GET /v1/events endpoint.
 * It provides type safety for all query parameters as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for query parameters.
 *
 * @path /v1/events
 */
export type GET_Events_Request_Query = GET_Events_Request['parameters']['query'];

/**
 * Request type for GET EventsEventId endpoint
 *
 * Get event
 * Get an event by its ID
 *
 * @remarks
 * This type defines the complete request structure for the GET EventsEventId endpoint.
 * It includes all parameters (query, path) and request body types as defined in the OpenAPI specification.
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @example
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @path /v1/events/{event_id}
 *
 * @see {@link GET_EventsEventId_Request_Query} - Query parameters type
 * @see {@link GET_EventsEventId_Request_Path} - Path parameters type
 * @see {@link GET_EventsEventId_Request_Body} - Request body type
 */
export type GET_EventsEventId_Request = {
  parameters: {
    path: operations['get_event_v1_events__event_id__get']['parameters']['path'];
  };
}
/**
 * Path parameters for GET /v1/events/{event_id}
 *
 * @remarks
 * This type defines the path parameters for the GET /v1/events/{event_id} endpoint.
 * It provides type safety for all path parameters as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for path parameters.
 *
 * @path /v1/events/{event_id}
 */
export type GET_EventsEventId_Request_Path = GET_EventsEventId_Request['parameters']['path'];

/**
 * Request type for PATCH EventsEventId endpoint
 *
 * Acknowledge event
 * Acknowledge an event
 *
 * @remarks
 * This type defines the complete request structure for the PATCH EventsEventId endpoint.
 * It includes all parameters (query, path) and request body types as defined in the OpenAPI specification.
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @example
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @path /v1/events/{event_id}
 *
 * @see {@link PATCH_EventsEventId_Request_Query} - Query parameters type
 * @see {@link PATCH_EventsEventId_Request_Path} - Path parameters type
 * @see {@link PATCH_EventsEventId_Request_Body} - Request body type
 */
export type PATCH_EventsEventId_Request = {
  parameters: {
    path: operations['acknowledge_event_v1_events__event_id__patch']['parameters']['path'];
  };
}
/**
 * Path parameters for PATCH /v1/events/{event_id}
 *
 * @remarks
 * This type defines the path parameters for the PATCH /v1/events/{event_id} endpoint.
 * It provides type safety for all path parameters as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for path parameters.
 *
 * @path /v1/events/{event_id}
 */
export type PATCH_EventsEventId_Request_Path = PATCH_EventsEventId_Request['parameters']['path'];

/**
 * Request type for GET Organizations endpoint
 *
 * List all organizations
 * Retrieves a paginated list of organizations under the current organization
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
 * Create an organization
 * Create a new organization under the current organization
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
 * List organization attributes
 * Retrieves a list of organization attributes for the current organization
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
 * Update organization attributes
 * Updates one or more organization attributes for the current organization
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
 * List organization attributes
 * Retrieves a list of organization attributes for the specified organization
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
 * Update organization attributes
 * Updates one or more organization attributes for the specified organization
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
 * List IP restrictions
 * List all IP restrictions for the organization.

Returns a list of all IP restrictions configured for your organization.
Single IP addresses are returned with CIDR notation (/32 for IPv4, /128 for IPv6).
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
 * Create an IP restriction
 * Create a new IP restriction for the organization.

Accepts either a single IP address or a CIDR network range.
Individual IP addresses are stored and returned with CIDR notation (/32 for IPv4, /128 for IPv6).
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
 * Delete an IP restriction
 * Delete an IP restriction.

Permanently removes the specified IP restriction from your organization.
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
 * Get an IP restriction
 * Get a specific IP restriction by ID.

Returns the details of a specific IP restriction if it exists and belongs to your organization.
Single IP addresses are returned with CIDR notation (/32 for IPv4, /128 for IPv6).
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
 * Update an IP restriction
 * Update an existing IP restriction.

You can update the IP network range or the last usage timestamp.
Individual IP addresses are stored and returned with CIDR notation (/32 for IPv4, /128 for IPv6).
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
 * Delete an organization
 * Permanently deletes an organization
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
    path: operations['delete_organization_v1_organizations__organization_id__delete']['parameters']['path'];
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
 * Get organization details
 * Retrieves details for a specific organization
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
 * Update an organization
 * Updates details for a specific organization
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
 * Request type for GET OrganizationsOrganizationIdBillingInvoices endpoint
 *
 * List all invoices for the organization
 * Retrieves a paginated list of all invoices for the organization
 *
 * @remarks
 * This type defines the complete request structure for the GET OrganizationsOrganizationIdBillingInvoices endpoint.
 * It includes all parameters (query, path) and request body types as defined in the OpenAPI specification.
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @example
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @path /v1/organizations/{organization_id}/billing/invoices
 *
 * @see {@link GET_OrganizationsOrganizationIdBillingInvoices_Request_Query} - Query parameters type
 * @see {@link GET_OrganizationsOrganizationIdBillingInvoices_Request_Path} - Path parameters type
 * @see {@link GET_OrganizationsOrganizationIdBillingInvoices_Request_Body} - Request body type
 */
export type GET_OrganizationsOrganizationIdBillingInvoices_Request = {
  parameters: {
    query: operations['list_invoices_v1_organizations__organization_id__billing_invoices_get']['parameters']['query'];
    path: operations['list_invoices_v1_organizations__organization_id__billing_invoices_get']['parameters']['path'];
  };
}
/**
 * Query parameters for GET /v1/organizations/{organization_id}/billing/invoices
 *
 * @remarks
 * This type defines the query parameters for the GET /v1/organizations/{organization_id}/billing/invoices endpoint.
 * It provides type safety for all query parameters as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for query parameters.
 *
 * @path /v1/organizations/{organization_id}/billing/invoices
 */
export type GET_OrganizationsOrganizationIdBillingInvoices_Request_Query = GET_OrganizationsOrganizationIdBillingInvoices_Request['parameters']['query'];
/**
 * Path parameters for GET /v1/organizations/{organization_id}/billing/invoices
 *
 * @remarks
 * This type defines the path parameters for the GET /v1/organizations/{organization_id}/billing/invoices endpoint.
 * It provides type safety for all path parameters as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for path parameters.
 *
 * @path /v1/organizations/{organization_id}/billing/invoices
 */
export type GET_OrganizationsOrganizationIdBillingInvoices_Request_Path = GET_OrganizationsOrganizationIdBillingInvoices_Request['parameters']['path'];

/**
 * Request type for GET OrganizationsOrganizationIdPricingProductTypeProductType endpoint
 *
 * List product prices
 * Retrieves pricing data for a specific product type. If a product action/class are specified, only prices for those are returned, if any.
 *
 * @remarks
 * This type defines the complete request structure for the GET OrganizationsOrganizationIdPricingProductTypeProductType endpoint.
 * It includes all parameters (query, path) and request body types as defined in the OpenAPI specification.
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @example
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @path /v1/organizations/{organization_id}/pricing/product-type/{product_type}
 *
 * @see {@link GET_OrganizationsOrganizationIdPricingProductTypeProductType_Request_Query} - Query parameters type
 * @see {@link GET_OrganizationsOrganizationIdPricingProductTypeProductType_Request_Path} - Path parameters type
 * @see {@link GET_OrganizationsOrganizationIdPricingProductTypeProductType_Request_Body} - Request body type
 */
export type GET_OrganizationsOrganizationIdPricingProductTypeProductType_Request = {
  parameters: {
    query: operations['get_pricing_plans_v1_organizations__organization_id__pricing_product_type__product_type__get']['parameters']['query'];
    path: operations['get_pricing_plans_v1_organizations__organization_id__pricing_product_type__product_type__get']['parameters']['path'];
  };
}
/**
 * Query parameters for GET /v1/organizations/{organization_id}/pricing/product-type/{product_type}
 *
 * @remarks
 * This type defines the query parameters for the GET /v1/organizations/{organization_id}/pricing/product-type/{product_type} endpoint.
 * It provides type safety for all query parameters as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for query parameters.
 *
 * @path /v1/organizations/{organization_id}/pricing/product-type/{product_type}
 */
export type GET_OrganizationsOrganizationIdPricingProductTypeProductType_Request_Query = GET_OrganizationsOrganizationIdPricingProductTypeProductType_Request['parameters']['query'];
/**
 * Path parameters for GET /v1/organizations/{organization_id}/pricing/product-type/{product_type}
 *
 * @remarks
 * This type defines the path parameters for the GET /v1/organizations/{organization_id}/pricing/product-type/{product_type} endpoint.
 * It provides type safety for all path parameters as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for path parameters.
 *
 * @path /v1/organizations/{organization_id}/pricing/product-type/{product_type}
 */
export type GET_OrganizationsOrganizationIdPricingProductTypeProductType_Request_Path = GET_OrganizationsOrganizationIdPricingProductTypeProductType_Request['parameters']['path'];

/**
 * Request type for GET OrganizationsOrganizationIdTransactions endpoint
 *
 * List all transactions
 * Retrieves a paginated list of transactions for an organization
 *
 * @remarks
 * This type defines the complete request structure for the GET OrganizationsOrganizationIdTransactions endpoint.
 * It includes all parameters (query, path) and request body types as defined in the OpenAPI specification.
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @example
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @path /v1/organizations/{organization_id}/transactions
 *
 * @see {@link GET_OrganizationsOrganizationIdTransactions_Request_Query} - Query parameters type
 * @see {@link GET_OrganizationsOrganizationIdTransactions_Request_Path} - Path parameters type
 * @see {@link GET_OrganizationsOrganizationIdTransactions_Request_Body} - Request body type
 */
export type GET_OrganizationsOrganizationIdTransactions_Request = {
  parameters: {
    query: operations['get_transactions_v1_organizations__organization_id__transactions_get']['parameters']['query'];
    path: operations['get_transactions_v1_organizations__organization_id__transactions_get']['parameters']['path'];
  };
}
/**
 * Query parameters for GET /v1/organizations/{organization_id}/transactions
 *
 * @remarks
 * This type defines the query parameters for the GET /v1/organizations/{organization_id}/transactions endpoint.
 * It provides type safety for all query parameters as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for query parameters.
 *
 * @path /v1/organizations/{organization_id}/transactions
 */
export type GET_OrganizationsOrganizationIdTransactions_Request_Query = GET_OrganizationsOrganizationIdTransactions_Request['parameters']['query'];
/**
 * Path parameters for GET /v1/organizations/{organization_id}/transactions
 *
 * @remarks
 * This type defines the path parameters for the GET /v1/organizations/{organization_id}/transactions endpoint.
 * It provides type safety for all path parameters as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for path parameters.
 *
 * @path /v1/organizations/{organization_id}/transactions
 */
export type GET_OrganizationsOrganizationIdTransactions_Request_Path = GET_OrganizationsOrganizationIdTransactions_Request['parameters']['path'];

/**
 * Request type for GET OrganizationsOrganizationIdTransactionsTransactionId endpoint
 *
 * Get a specific transaction
 * Retrieves details for a specific transaction for an organization
 *
 * @remarks
 * This type defines the complete request structure for the GET OrganizationsOrganizationIdTransactionsTransactionId endpoint.
 * It includes all parameters (query, path) and request body types as defined in the OpenAPI specification.
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @example
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @path /v1/organizations/{organization_id}/transactions/{transaction_id}
 *
 * @see {@link GET_OrganizationsOrganizationIdTransactionsTransactionId_Request_Query} - Query parameters type
 * @see {@link GET_OrganizationsOrganizationIdTransactionsTransactionId_Request_Path} - Path parameters type
 * @see {@link GET_OrganizationsOrganizationIdTransactionsTransactionId_Request_Body} - Request body type
 */
export type GET_OrganizationsOrganizationIdTransactionsTransactionId_Request = {
  parameters: {
    path: operations['get_transaction_v1_organizations__organization_id__transactions__transaction_id__get']['parameters']['path'];
  };
}
/**
 * Path parameters for GET /v1/organizations/{organization_id}/transactions/{transaction_id}
 *
 * @remarks
 * This type defines the path parameters for the GET /v1/organizations/{organization_id}/transactions/{transaction_id} endpoint.
 * It provides type safety for all path parameters as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for path parameters.
 *
 * @path /v1/organizations/{organization_id}/transactions/{transaction_id}
 */
export type GET_OrganizationsOrganizationIdTransactionsTransactionId_Request_Path = GET_OrganizationsOrganizationIdTransactionsTransactionId_Request['parameters']['path'];

/**
 * Request type for GET OrganizationsRoles endpoint
 *
 * List all roles
 * Retrieves a list of roles for the current organization
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
 * List all users
 * Retrieves a paginated list of users under the current organization
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
 * Request type for GET Parking endpoint
 *
 * List parking entries
 * Retrieves a paginated list of parking entries for the organization
 *
 * @remarks
 * This type defines the complete request structure for the GET Parking endpoint.
 * It includes all parameters (query, path) and request body types as defined in the OpenAPI specification.
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @example
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @path /v1/parking
 *
 * @see {@link GET_Parking_Request_Query} - Query parameters type
 * @see {@link GET_Parking_Request_Path} - Path parameters type
 * @see {@link GET_Parking_Request_Body} - Request body type
 */
export type GET_Parking_Request = {
  parameters: {
    query: operations['list_parking_v1_parking_get']['parameters']['query'];
  };
}
/**
 * Query parameters for GET /v1/parking
 *
 * @remarks
 * This type defines the query parameters for the GET /v1/parking endpoint.
 * It provides type safety for all query parameters as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for query parameters.
 *
 * @path /v1/parking
 */
export type GET_Parking_Request_Query = GET_Parking_Request['parameters']['query'];

/**
 * Request type for GET ParkingMetrics endpoint
 *
 * Get total metrics for all parking entries
 * Retrieves aggregated metrics for all parking entries of the organization.
 *
 * @remarks
 * This type defines the complete request structure for the GET ParkingMetrics endpoint.
 * It includes all parameters (query, path) and request body types as defined in the OpenAPI specification.
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @example
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @path /v1/parking/metrics
 *
 * @see {@link GET_ParkingMetrics_Request_Query} - Query parameters type
 * @see {@link GET_ParkingMetrics_Request_Path} - Path parameters type
 * @see {@link GET_ParkingMetrics_Request_Body} - Request body type
 */
export type GET_ParkingMetrics_Request = {
  parameters: {
    query: operations['get_total_parking_metrics_v1_parking_metrics_get']['parameters']['query'];
  };
}
/**
 * Query parameters for GET /v1/parking/metrics
 *
 * @remarks
 * This type defines the query parameters for the GET /v1/parking/metrics endpoint.
 * It provides type safety for all query parameters as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for query parameters.
 *
 * @path /v1/parking/metrics
 */
export type GET_ParkingMetrics_Request_Query = GET_ParkingMetrics_Request['parameters']['query'];

/**
 * Request type for GET ParkingParkingIdMetrics endpoint
 *
 * Get metrics for a parking entry
 * Retrieves metrics for a specific parking entry by ID.
 *
 * @remarks
 * This type defines the complete request structure for the GET ParkingParkingIdMetrics endpoint.
 * It includes all parameters (query, path) and request body types as defined in the OpenAPI specification.
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @example
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @path /v1/parking/{parking_id}/metrics
 *
 * @see {@link GET_ParkingParkingIdMetrics_Request_Query} - Query parameters type
 * @see {@link GET_ParkingParkingIdMetrics_Request_Path} - Path parameters type
 * @see {@link GET_ParkingParkingIdMetrics_Request_Body} - Request body type
 */
export type GET_ParkingParkingIdMetrics_Request = {
  parameters: {
    query: operations['get_parking_metrics_v1_parking__parking_id__metrics_get']['parameters']['query'];
    path: operations['get_parking_metrics_v1_parking__parking_id__metrics_get']['parameters']['path'];
  };
}
/**
 * Query parameters for GET /v1/parking/{parking_id}/metrics
 *
 * @remarks
 * This type defines the query parameters for the GET /v1/parking/{parking_id}/metrics endpoint.
 * It provides type safety for all query parameters as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for query parameters.
 *
 * @path /v1/parking/{parking_id}/metrics
 */
export type GET_ParkingParkingIdMetrics_Request_Query = GET_ParkingParkingIdMetrics_Request['parameters']['query'];
/**
 * Path parameters for GET /v1/parking/{parking_id}/metrics
 *
 * @remarks
 * This type defines the path parameters for the GET /v1/parking/{parking_id}/metrics endpoint.
 * It provides type safety for all path parameters as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for path parameters.
 *
 * @path /v1/parking/{parking_id}/metrics
 */
export type GET_ParkingParkingIdMetrics_Request_Path = GET_ParkingParkingIdMetrics_Request['parameters']['path'];

/**
 * Request type for POST ParkingSignup endpoint
 *
 * Sign up for parking
 * Accept the parking agreement to enable parking features for your organization.
 *
 * @remarks
 * This type defines the complete request structure for the POST ParkingSignup endpoint.
 * It includes all parameters (query, path) and request body types as defined in the OpenAPI specification.
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @example
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @path /v1/parking/signup
 *
 * @see {@link POST_ParkingSignup_Request_Query} - Query parameters type
 * @see {@link POST_ParkingSignup_Request_Path} - Path parameters type
 * @see {@link POST_ParkingSignup_Request_Body} - Request body type
 */
export type POST_ParkingSignup_Request = {
  requestBody: ParkingSignupRequest;
}
/**
 * Request body for POST /v1/parking/signup
 *
 * @remarks
 * This type defines the request body structure for the POST /v1/parking/signup endpoint.
 * It provides type safety for the request body as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for request body structure.
 *
 * @path /v1/parking/signup
 */
export type POST_ParkingSignup_Request_Body = POST_ParkingSignup_Request['requestBody'];

/**
 * Request type for GET ParkingSignupStatus endpoint
 *
 * Get parking signup status
 * Check if your organization has accepted the parking agreement.
 *
 * @remarks
 * This type defines the complete request structure for the GET ParkingSignupStatus endpoint.
 * It includes all parameters (query, path) and request body types as defined in the OpenAPI specification.
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @example
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @path /v1/parking/signup/status
 *
 * @see {@link GET_ParkingSignupStatus_Request_Query} - Query parameters type
 * @see {@link GET_ParkingSignupStatus_Request_Path} - Path parameters type
 * @see {@link GET_ParkingSignupStatus_Request_Body} - Request body type
 */
export type GET_ParkingSignupStatus_Request = {
}

/**
 * Request type for GET Tlds endpoint
 *
 * Get list of Specifications for all TLDs we support
 * Retrieves a list of TLD Specifications we have support for
 *
 * @remarks
 * This type defines the complete request structure for the GET Tlds endpoint.
 * It includes all parameters (query, path) and request body types as defined in the OpenAPI specification.
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @example
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @path /v1/tlds/
 *
 * @see {@link GET_Tlds_Request_Query} - Query parameters type
 * @see {@link GET_Tlds_Request_Path} - Path parameters type
 * @see {@link GET_Tlds_Request_Body} - Request body type
 */
export type GET_Tlds_Request = {
  parameters: {
    query: operations['get_tld_specifications_v1_tlds__get']['parameters']['query'];
  };
}
/**
 * Query parameters for GET /v1/tlds/
 *
 * @remarks
 * This type defines the query parameters for the GET /v1/tlds/ endpoint.
 * It provides type safety for all query parameters as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for query parameters.
 *
 * @path /v1/tlds/
 */
export type GET_Tlds_Request_Query = GET_Tlds_Request['parameters']['query'];

/**
 * Request type for GET TldsPortfolio endpoint
 *
 * Get the list of TLDs we support
 * Retrieves a list of TLDs we have support for
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
 * Get the TLD specification
 * Retrieves the TLD specification for a given TLD
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
 * Create a user
 * Create a new user
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
 * Request type for GET UsersMe endpoint
 *
 * Get current user
 * Get the current user
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
 * Request type for PATCH UsersMePasswordReset endpoint
 *
 * Change Password
 *
 * @remarks
 * This type defines the complete request structure for the PATCH UsersMePasswordReset endpoint.
 * It includes all parameters (query, path) and request body types as defined in the OpenAPI specification.
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @example
 * Use this type to ensure type safety when making API requests to this endpoint.
 *
 * @path /v1/users/me/password-reset
 *
 * @see {@link PATCH_UsersMePasswordReset_Request_Query} - Query parameters type
 * @see {@link PATCH_UsersMePasswordReset_Request_Path} - Path parameters type
 * @see {@link PATCH_UsersMePasswordReset_Request_Body} - Request body type
 */
export type PATCH_UsersMePasswordReset_Request = {
  requestBody: PasswordUpdate;
}
/**
 * Request body for PATCH /v1/users/me/password-reset
 *
 * @remarks
 * This type defines the request body structure for the PATCH /v1/users/me/password-reset endpoint.
 * It provides type safety for the request body as defined in the OpenAPI specification.
 *
 * @example
 * Use this type to ensure type safety for request body structure.
 *
 * @path /v1/users/me/password-reset
 */
export type PATCH_UsersMePasswordReset_Request_Body = PATCH_UsersMePasswordReset_Request['requestBody'];

/**
 * Request type for DELETE UsersUserId endpoint
 *
 * Delete a user
 * Delete a user by ID
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
 * Get a user
 * Get a user by ID
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
 * Update a user
 * Update a user by ID
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
 * Get user permissions
 * Get the permissions for a user
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
 * Get user roles
 * Get the roles for a user
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
 * Update user roles
 * Update the roles for a user
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

