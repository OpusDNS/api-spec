/**
 * Type definitions for OpusDNS API response objects and parameters.
 *
 * This file is auto-generated from the OpenAPI specification.
 * Do not edit manually.
 */

import { components, operations } from '../schema';


/** 
 * Response Types
*/
export type Get_AuthClientCredentials_Response_V1 = components['schemas']['Pagination_OrganizationCredential_'];
export type Get_Availability_Response_V1 = components['schemas']['common__models__availability__datasource__DomainAvailabilityResponse'];
export type Get_Contacts_Response_V1 = components['schemas']['Pagination_ContactSchema_'];
export type Get_ContactsBycontactId_Response_V1 = components['schemas']['ContactSchema'];
export type Get_ContactsBycontactIdVerification_Response_V1 = components['schemas']['ContactVerificationResponse'];
export type Get_ContactsVerification_Response_V1 = components['schemas']['ContactResponse'];
export type Get_Dns_Response_V1 = components['schemas']['Pagination_DnsZoneResponse_'];
export type Get_DnsByzoneName_Response_V1 = components['schemas']['DnsZoneResponse'];
export type Get_Domains_Response_V1 = components['schemas']['Pagination_DomainResponse_'];
export type Get_DomainsBydomainReference_Response_V1 = components['schemas']['DomainResponse'];
export type Get_DomainsCheck_Response_V1 = components['schemas']['DomainCheckResponse'];
export type Get_DomainSearchSuggest_Response_V1 = components['schemas']['DomainSearchResponse'];
export type Get_DomainsSummary_Response_V1 = components['schemas']['DomainSummaryResponse'];
export type Get_EmailForwards_Response_V1 = components['schemas']['Pagination_EmailForward_'];
export type Get_EmailForwardsByemailForwardId_Response_V1 = components['schemas']['EmailForward'];
export type Get_Event_Response_V1 = components['schemas']['Pagination_EventResponse_'];
export type Get_EventByeventId_Response_V1 = components['schemas']['EventSchema'];
export type Get_Notifications_Response_V1 = components['schemas']['Pagination_UserNotificationSummary_'];
export type Get_NotificationsBynotificationId_Response_V1 = components['schemas']['UserNotification'];
export type Get_Organizations_Response_V1 = components['schemas']['Pagination_Organization_'];
export type Get_OrganizationsByorganizationId_Response_V1 = components['schemas']['OrganizationWithPlan'];
export type Get_OrganizationsIpRestrictionsByipRestrictionId_Response_V1 = components['schemas']['IpRestrictionResponse'];
export type Get_OrganizationsUsers_Response_V1 = components['schemas']['Pagination_User_'];
export type Get_UsersByuserId_Response_V1 = components['schemas']['UserWithAttributes'];
export type Get_UsersByuserIdPermissions_Response_V1 = components['schemas']['PermissionSet'];
export type Get_UsersByuserIdRoles_Response_V1 = components['schemas']['RelationSet'];
export type Get_UsersMe_Response_V1 = components['schemas']['UserWithRelationPermissions'];
export type Patch_DomainsBydomainReference_Response_V1 = components['schemas']['DomainResponse'];
export type Patch_EmailForwardsBulkUpdate_Response_V1 = components['schemas']['BulkOperationResponse_EmailForwardBulkUpdateResult_'];
export type Patch_EmailForwardsByemailForwardId_Response_V1 = components['schemas']['EmailForward'];
export type Patch_OrganizationsByorganizationId_Response_V1 = components['schemas']['Organization'];
export type Patch_OrganizationsByorganizationIdPlan_Response_V1 = components['schemas']['OrganizationWithPlan'];
export type Patch_OrganizationsIpRestrictionsByipRestrictionId_Response_V1 = components['schemas']['IpRestrictionResponse'];
export type Patch_UsersByuserId_Response_V1 = components['schemas']['UserWithAttributes'];
export type Patch_UsersByuserIdRoles_Response_V1 = components['schemas']['RelationSet'];
export type Post_AuthClientCredentials_Response_V1 = components['schemas']['OrganizationCredentialCreated'];
export type Post_Contacts_Response_V1 = components['schemas']['ContactSchema'];
export type Post_DnsByzoneNameDnssecDisable_Response_V1 = components['schemas']['DnsChangesResponse'];
export type Post_DnsByzoneNameDnssecEnable_Response_V1 = components['schemas']['DnsChangesResponse'];
export type Post_Domains_Response_V1 = components['schemas']['DomainResponse'];
export type Post_DomainsBydomainReferenceRenew_Response_V1 = components['schemas']['DomainRenewResponse'];
export type Post_DomainsTransfer_Response_V1 = components['schemas']['DomainResponse'];
export type Post_EmailForwards_Response_V1 = components['schemas']['EmailForward'];
export type Post_EmailForwardsBulkDelete_Response_V1 = components['schemas']['BulkOperationResponse_EmailForwardBulkDeleteResult_'];
export type Post_Notifications_Response_V1 = components['schemas']['Notification'];
export type Post_Organizations_Response_V1 = components['schemas']['Organization'];
export type Post_OrganizationsIpRestrictions_Response_V1 = components['schemas']['IpRestrictionResponse'];
export type Post_Users_Response_V1 = components['schemas']['User'];
export type Put_NotificationsBynotificationId_Response_V1 = components['schemas']['Notification'];
/** 
 * Request Parameter Types
*/
export type Get_AuthClientCredentials_ParamsQuery_V1 = operations['list_api_keys_v1_auth_client_credentials_get']['parameters']['query'];
export type Delete_AuthClientCredentialsByapiKeyId_ParamsPath_V1 = operations['delete_api_key_v1_auth_client_credentials__api_key_id__delete']['parameters']['path'];
export type Get_Availability_ParamsQuery_V1 = operations['bulk_availability_v1_availability_get']['parameters']['query'];
export type Get_AvailabilityStream_ParamsQuery_V1 = operations['stream_availability_v1_availability_stream_get']['parameters']['query'];
export type Get_Contacts_ParamsQuery_V1 = operations['get_contacts_v1_contacts_get']['parameters']['query'];
export type Get_ContactsVerification_ParamsQuery_V1 = operations['get_verification_by_token_v1_contacts_verification_get']['parameters']['query'];
export type Put_ContactsVerification_ParamsQuery_V1 = operations['update_verification_by_token_v1_contacts_verification_put']['parameters']['query'];
export type Get_ContactsVerify_ParamsQuery_V1 = operations['email_verify_contact_v1_contacts_verify_get']['parameters']['query'];
export type Get_ContactsBycontactId_ParamsPath_V1 = operations['get_contact_v1_contacts__contact_id__get']['parameters']['path'];
export type Delete_ContactsBycontactId_ParamsPath_V1 = operations['delete_contact_v1_contacts__contact_id__delete']['parameters']['path'];
export type Get_ContactsBycontactIdVerification_ParamsPath_V1 = operations['get_verification_status_v1_contacts__contact_id__verification_get']['parameters']['path'];
export type Post_ContactsBycontactIdVerification_ParamsPath_V1 = operations['start_contact_verification_v1_contacts__contact_id__verification_post']['parameters']['path'];
export type Post_ContactsBycontactIdVerification_ParamsQuery_V1 = operations['start_contact_verification_v1_contacts__contact_id__verification_post']['parameters']['query'];
export type Put_ContactsBycontactIdVerification_ParamsPath_V1 = operations['update_verification_v1_contacts__contact_id__verification_put']['parameters']['path'];
export type Put_ContactsBycontactIdVerification_ParamsQuery_V1 = operations['update_verification_v1_contacts__contact_id__verification_put']['parameters']['query'];
export type Delete_ContactsBycontactIdVerification_ParamsPath_V1 = operations['cancel_verification_v1_contacts__contact_id__verification_delete']['parameters']['path'];
export type Get_Dns_ParamsQuery_V1 = operations['list_zones_v1_dns_get']['parameters']['query'];
export type Get_DnsByzoneName_ParamsPath_V1 = operations['get_zone_v1_dns__zone_name__get']['parameters']['path'];
export type Delete_DnsByzoneName_ParamsPath_V1 = operations['delete_zone_v1_dns__zone_name__delete']['parameters']['path'];
export type Post_DnsByzoneNameDnssecDisable_ParamsPath_V1 = operations['disable_dnssec_v1_dns__zone_name__dnssec_disable_post']['parameters']['path'];
export type Post_DnsByzoneNameDnssecEnable_ParamsPath_V1 = operations['enable_dnssec_v1_dns__zone_name__dnssec_enable_post']['parameters']['path'];
export type Patch_DnsByzoneNameRecords_ParamsPath_V1 = operations['patch_zone_records_v1_dns__zone_name__records_patch']['parameters']['path'];
export type Put_DnsByzoneNameRrsets_ParamsPath_V1 = operations['update_zone_rrsets_v1_dns__zone_name__rrsets_put']['parameters']['path'];
export type Patch_DnsByzoneNameRrsets_ParamsPath_V1 = operations['patch_zone_rrsets_v1_dns__zone_name__rrsets_patch']['parameters']['path'];
export type Get_DomainSearchSuggest_ParamsQuery_V1 = operations['suggest_v1_domain_search_suggest_get']['parameters']['query'];
export type Get_Domains_ParamsQuery_V1 = operations['get_domains_v1_domains_get']['parameters']['query'];
export type Get_DomainsCheck_ParamsQuery_V1 = operations['epp_check_domain_v1_domains_check_get']['parameters']['query'];
export type Get_DomainsBydomainReference_ParamsPath_V1 = operations['get_domain_v1_domains__domain_reference__get']['parameters']['path'];
export type Patch_DomainsBydomainReference_ParamsPath_V1 = operations['update_domain_v1_domains__domain_reference__patch']['parameters']['path'];
export type Delete_DomainsBydomainReference_ParamsPath_V1 = operations['delete_domain_v1_domains__domain_reference__delete']['parameters']['path'];
export type Get_DomainsBydomainReferenceDnssec_ParamsPath_V1 = operations['get_dnssec_v1_domains__domain_reference__dnssec_get']['parameters']['path'];
export type Put_DomainsBydomainReferenceDnssec_ParamsPath_V1 = operations['create_or_update_dnssec_v1_domains__domain_reference__dnssec_put']['parameters']['path'];
export type Delete_DomainsBydomainReferenceDnssec_ParamsPath_V1 = operations['delete_dnssec_v1_domains__domain_reference__dnssec_delete']['parameters']['path'];
export type Post_DomainsBydomainReferenceRenew_ParamsPath_V1 = operations['renew_domain_v1_domains__domain_reference__renew_post']['parameters']['path'];
export type Delete_DomainsBydomainReferenceTransfer_ParamsPath_V1 = operations['cancel_domain_transfer_v1_domains__domain_reference__transfer_delete']['parameters']['path'];
export type Get_EmailForwards_ParamsQuery_V1 = operations['list_email_forwards_v1_email_forwards_get']['parameters']['query'];
export type Get_EmailForwardsByemailForwardId_ParamsPath_V1 = operations['get_email_forward_v1_email_forwards__email_forward_id__get']['parameters']['path'];
export type Patch_EmailForwardsByemailForwardId_ParamsPath_V1 = operations['update_email_forward_v1_email_forwards__email_forward_id__patch']['parameters']['path'];
export type Delete_EmailForwardsByemailForwardId_ParamsPath_V1 = operations['delete_email_forward_v1_email_forwards__email_forward_id__delete']['parameters']['path'];
export type Get_Event_ParamsQuery_V1 = operations['get_events_v1_event_get']['parameters']['query'];
export type Get_EventByeventId_ParamsPath_V1 = operations['get_event_v1_event__event_id__get']['parameters']['path'];
export type Patch_EventByeventId_ParamsPath_V1 = operations['acknowledge_event_v1_event__event_id__patch']['parameters']['path'];
export type Get_Notifications_ParamsQuery_V1 = operations['list_notifications_v1_notifications_get']['parameters']['query'];
export type Get_NotificationsBynotificationId_ParamsPath_V1 = operations['get_notification_v1_notifications__notification_id__get']['parameters']['path'];
export type Get_NotificationsBynotificationId_ParamsQuery_V1 = operations['get_notification_v1_notifications__notification_id__get']['parameters']['query'];
export type Put_NotificationsBynotificationId_ParamsPath_V1 = operations['update_notification_v1_notifications__notification_id__put']['parameters']['path'];
export type Delete_NotificationsBynotificationId_ParamsPath_V1 = operations['delete_notification_v1_notifications__notification_id__delete']['parameters']['path'];
export type Patch_NotificationsBynotificationIdRead_ParamsPath_V1 = operations['update_notification_read_v1_notifications__notification_id__read_patch']['parameters']['path'];
export type Get_Organizations_ParamsQuery_V1 = operations['list_organizations_v1_organizations_get']['parameters']['query'];
export type Get_OrganizationsAttributes_ParamsQuery_V1 = operations['get_attributes_v1_organizations_attributes_get']['parameters']['query'];
export type Patch_OrganizationsAttributes_ParamsQuery_V1 = operations['update_attributes_v1_organizations_attributes_patch']['parameters']['query'];
export type Get_OrganizationsAttributesByorganizationId_ParamsPath_V1 = operations['get_attributes_v1_organizations_attributes__organization_id__get']['parameters']['path'];
export type Get_OrganizationsAttributesByorganizationId_ParamsQuery_V1 = operations['get_attributes_v1_organizations_attributes__organization_id__get']['parameters']['query'];
export type Patch_OrganizationsAttributesByorganizationId_ParamsPath_V1 = operations['update_attributes_v1_organizations_attributes__organization_id__patch']['parameters']['path'];
export type Get_OrganizationsIpRestrictionsByipRestrictionId_ParamsPath_V1 = operations['get_ip_restriction_v1_organizations_ip_restrictions__ip_restriction_id__get']['parameters']['path'];
export type Patch_OrganizationsIpRestrictionsByipRestrictionId_ParamsPath_V1 = operations['update_ip_restriction_v1_organizations_ip_restrictions__ip_restriction_id__patch']['parameters']['path'];
export type Delete_OrganizationsIpRestrictionsByipRestrictionId_ParamsPath_V1 = operations['delete_ip_restriction_v1_organizations_ip_restrictions__ip_restriction_id__delete']['parameters']['path'];
export type Get_OrganizationsUsers_ParamsQuery_V1 = operations['list_users_v1_organizations_users_get']['parameters']['query'];
export type Get_OrganizationsByorganizationId_ParamsPath_V1 = operations['get_organization_v1_organizations__organization_id__get']['parameters']['path'];
export type Patch_OrganizationsByorganizationId_ParamsPath_V1 = operations['update_organization_v1_organizations__organization_id__patch']['parameters']['path'];
export type Delete_OrganizationsByorganizationId_ParamsPath_V1 = operations['delete_user_v1_organizations__organization_id__delete']['parameters']['path'];
export type Patch_OrganizationsByorganizationIdPlan_ParamsPath_V1 = operations['change_plan_v1_organizations__organization_id__plan_patch']['parameters']['path'];
export type Get_UsersMe_ParamsQuery_V1 = operations['get_current_user_v1_users_me_get']['parameters']['query'];
export type Get_UsersByuserId_ParamsPath_V1 = operations['get_user_v1_users__user_id__get']['parameters']['path'];
export type Get_UsersByuserId_ParamsQuery_V1 = operations['get_user_v1_users__user_id__get']['parameters']['query'];
export type Patch_UsersByuserId_ParamsPath_V1 = operations['update_user_v1_users__user_id__patch']['parameters']['path'];
export type Delete_UsersByuserId_ParamsPath_V1 = operations['delete_user_v1_users__user_id__delete']['parameters']['path'];
export type Get_UsersByuserIdPermissions_ParamsPath_V1 = operations['get_user_permissions_v1_users__user_id__permissions_get']['parameters']['path'];
export type Get_UsersByuserIdRoles_ParamsPath_V1 = operations['list_roles_v1_users__user_id__roles_get']['parameters']['path'];
export type Patch_UsersByuserIdRoles_ParamsPath_V1 = operations['update_user_relations_v1_users__user_id__roles_patch']['parameters']['path'];

/** 
 * Response Data Types
*/
export type DomainAvailability = components['schemas']['common__models__availability__datasource__DomainAvailabilityResponse'];
export type DomainAvailabilityResultsArray = DomainAvailability['results'];
export type Contact = components['schemas']['ContactResponse'];
export type ContactSchema = components['schemas']['ContactSchema'];
export type ContactVerification = components['schemas']['ContactVerificationResponse'];
export type DnsZone = components['schemas']['DnsZoneResponse'];
export type DnsZoneRrsetsArray = DnsZone['rrsets'];
export type DomainCheck = components['schemas']['DomainCheckResponse'];
export type DomainCheckResultsArray = DomainCheck['results'];
export type Domain = components['schemas']['DomainResponse'];
export type DomainContactsArray = Domain['contacts'];
export type DomainNameserversArray = Domain['nameservers'];
export type DomainRegistry_statusesArray = Domain['registry_statuses'];
export type DomainSearch = components['schemas']['DomainSearchResponse'];
export type DomainSearchResultsArray = DomainSearch['results'];
export type DomainSummary = components['schemas']['DomainSummaryResponse'];
export type EmailForward = components['schemas']['EmailForward'];
export type EventSchema = components['schemas']['EventSchema'];
export type IpRestriction = components['schemas']['IpRestrictionResponse'];
export type OrganizationWithPlan = components['schemas']['OrganizationWithPlan'];
export type OrganizationWithPlanAttributesArray = OrganizationWithPlan['attributes'];
export type OrganizationWithPlanUsersArray = OrganizationWithPlan['users'];
export type ContactSchemaArray = Get_Contacts_Response_V1['results'];
export type DnsZoneArray = Get_Dns_Response_V1['results'];
export type DomainArray = Get_Domains_Response_V1['results'];
export type EmailForwardArray = Get_EmailForwards_Response_V1['results'];
export type EventArray = Get_Event_Response_V1['results'];
export type OrganizationArray = Get_Organizations_Response_V1['results'];
export type OrganizationCredentialArray = Get_AuthClientCredentials_Response_V1['results'];
export type UserArray = Get_OrganizationsUsers_Response_V1['results'];
export type UserNotificationSummaryArray = Get_Notifications_Response_V1['results'];
export type PermissionSet = components['schemas']['PermissionSet'];
export type PermissionSetPermissionsArray = PermissionSet['permissions'];
export type RelationSet = components['schemas']['RelationSet'];
export type RelationSetRelationsArray = RelationSet['relations'];
export type UserNotification = components['schemas']['UserNotification'];
export type UserWithAttributes = components['schemas']['UserWithAttributes'];
export type UserWithRelationPermissions = components['schemas']['UserWithRelationPermissions'];