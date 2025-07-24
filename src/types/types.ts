/**
 * @deprecated This file is deprecated and will be removed in a future release.
 * All types have moved to the helpers directory (see src/helpers/schemas.ts and related files). Please update your imports.
 */

import { components, operations } from '../schema';


/** 
 * Response Types
*/
/**
 * @deprecated Use {@link GET_AuthClientCredentials_Response_200} from @/helpers/responses instead.
 */
export type Get_AuthClientCredentials_Response_V1 = components['schemas']['Pagination_OrganizationCredential_'];
/**
 * @deprecated Use {@link GET_Availability_Response_200} from @/helpers/responses instead.
 */
export type Get_Availability_Response_V1 = components['schemas']['common__models__availability__datasource__DomainAvailabilityResponse'];
/**
 * @deprecated Use {@link GET_Contacts_Response_200} from @/helpers/responses instead.
 */
export type Get_Contacts_Response_V1 = components['schemas']['Pagination_ContactSchema_'];
/**
 * @deprecated Use {@link GET_ContactsByContactId_Response_200} from @/helpers/responses instead.
 */
export type Get_ContactsBycontactId_Response_V1 = components['schemas']['ContactSchema'];
/**
 * @deprecated Use {@link GET_ContactsByContactIdVerification_Response_200} from @/helpers/responses instead.
 */
export type Get_ContactsBycontactIdVerification_Response_V1 = components['schemas']['ContactVerificationResponse'];
/**
 * @deprecated Use {@link GET_ContactsVerification_Response_200} from @/helpers/responses instead.
 */
export type Get_ContactsVerification_Response_V1 = components['schemas']['ContactResponse'];
/**
 * @deprecated Use {@link GET_Dns_Response_200} from @/helpers/responses instead.
 */
export type Get_Dns_Response_V1 = components['schemas']['Pagination_DnsZoneResponse_'];
/**
 * @deprecated Use {@link GET_DnsByZoneName_Response_200} from @/helpers/responses instead.
 */
export type Get_DnsByzoneName_Response_V1 = components['schemas']['DnsZoneResponse'];
/**
 * @deprecated Use {@link GET_Domains_Response_200} from @/helpers/responses instead.
 */
export type Get_Domains_Response_V1 = components['schemas']['Pagination_DomainResponse_'];
/**
 * @deprecated Use {@link GET_DomainsByDomainReference_Response_200} from @/helpers/responses instead.
 */
export type Get_DomainsBydomainReference_Response_V1 = components['schemas']['DomainResponse'];
/**
 * @deprecated Use {@link GET_DomainsCheck_Response_200} from @/helpers/responses instead.
 */
export type Get_DomainsCheck_Response_V1 = components['schemas']['DomainCheckResponse'];
/**
 * @deprecated Use {@link GET_DomainSearchSuggest_Response_200} from @/helpers/responses instead.
 */
export type Get_DomainSearchSuggest_Response_V1 = components['schemas']['DomainSearchResponse'];
/**
 * @deprecated Use {@link DomainSummary} from @/helpers/schemas instead.
 */
export type Get_DomainsSummary_Response_V1 = components['schemas']['DomainSummaryResponse'];
/**
 * @deprecated Use {@link GET_EmailForwards_Response_200} from @/helpers/responses instead.
 */
export type Get_EmailForwards_Response_V1 = components['schemas']['Pagination_EmailForward_'];
/**
 * @deprecated Use {@link GET_EmailForwardsByEmailForwardId_Response_200} from @/helpers/responses instead.
 */
export type Get_EmailForwardsByemailForwardId_Response_V1 = components['schemas']['EmailForward'];
/**
 * @deprecated Use {@link GET_Event_Response_200} from @/helpers/responses instead.
 */
export type Get_Event_Response_V1 = components['schemas']['Pagination_EventResponse_'];
/**
 * @deprecated Use {@link GET_EventByEventId_Response_200} from @/helpers/responses instead.
 */
export type Get_EventByeventId_Response_V1 = components['schemas']['EventSchema'];
/**
 * @deprecated Use {@link GET_Notifications_Response_200} from @/helpers/responses instead.
 */
export type Get_Notifications_Response_V1 = components['schemas']['Pagination_UserNotificationSummary_'];
/**
 * @deprecated Use {@link GET_NotificationsByNotificationId_Response_200} from @/helpers/responses instead.
 */
export type Get_NotificationsBynotificationId_Response_V1 = components['schemas']['UserNotification'];
/**
 * @deprecated Use {@link GET_Organizations_Response_200} from @/helpers/responses instead.
 */
export type Get_Organizations_Response_V1 = components['schemas']['Pagination_Organization_'];
/**
 * @deprecated Use {@link GET_OrganizationsByOrganizationId_Response_200} from @/helpers/responses instead.
 */
export type Get_OrganizationsByorganizationId_Response_V1 = components['schemas']['OrganizationWithPlan'];
/**
 * @deprecated Use {@link GET_OrganizationsIpRestrictionsByIpRestrictionId_Response_200} from @/helpers/responses instead.
 */
export type Get_OrganizationsIpRestrictionsByipRestrictionId_Response_V1 = components['schemas']['IpRestrictionResponse'];
/**
 * @deprecated Use {@link GET_OrganizationsUsers_Response_200} from @/helpers/responses instead.
 */
export type Get_OrganizationsUsers_Response_V1 = components['schemas']['Pagination_User_'];
/**
 * @deprecated Use {@link GET_UsersByUserId_Response_200} from @/helpers/responses instead.
 */
export type Get_UsersByuserId_Response_V1 = components['schemas']['UserWithAttributes'];
/**
 * @deprecated Use {@link GET_UsersByUserIdPermissions_Response_200} from @/helpers/responses instead.
 */
export type Get_UsersByuserIdPermissions_Response_V1 = components['schemas']['PermissionSet'];
/**
 * @deprecated Use {@link GET_UsersByUserIdRoles_Response_200} from @/helpers/responses instead.
 */
export type Get_UsersByuserIdRoles_Response_V1 = components['schemas']['RelationSet'];
/**
 * @deprecated Use {@link GET_UsersMe_Response_200} from @/helpers/responses instead.
 */
export type Get_UsersMe_Response_V1 = components['schemas']['UserWithRelationPermissions'];
/**
 * @deprecated Use {@link PATCH_DomainsByDomainReference_Response_200} from @/helpers/responses instead.
 */
export type Patch_DomainsBydomainReference_Response_V1 = components['schemas']['DomainResponse'];
/**
 * @deprecated Use {@link PATCH_EmailForwardsBulkUpdate_Response_200} from @/helpers/responses instead.
 */
export type Patch_EmailForwardsBulkUpdate_Response_V1 = components['schemas']['BulkOperationResponse_EmailForwardBulkUpdateResult_'];
/**
 * @deprecated Use {@link PATCH_EmailForwardsByEmailForwardId_Response_200} from @/helpers/responses instead.
 */
export type Patch_EmailForwardsByemailForwardId_Response_V1 = components['schemas']['EmailForward'];
/**
 * @deprecated Use {@link PATCH_OrganizationsByOrganizationId_Response_200} from @/helpers/responses instead.
 */
export type Patch_OrganizationsByorganizationId_Response_V1 = components['schemas']['Organization'];
/**
 * @deprecated Use {@link PATCH_OrganizationsByOrganizationIdPlan_Response_200} from @/helpers/responses instead.
 */
export type Patch_OrganizationsByorganizationIdPlan_Response_V1 = components['schemas']['OrganizationWithPlan'];
/**
 * @deprecated Use {@link PATCH_OrganizationsIpRestrictionsByIpRestrictionId_Response_200} from @/helpers/responses instead.
 */
export type Patch_OrganizationsIpRestrictionsByipRestrictionId_Response_V1 = components['schemas']['IpRestrictionResponse'];
/**
 * @deprecated Use {@link PATCH_UsersByUserId_Response_200} from @/helpers/responses instead.
 */
export type Patch_UsersByuserId_Response_V1 = components['schemas']['UserWithAttributes'];
/**
 * @deprecated Use {@link PATCH_UsersByUserIdRoles_Response_200} from @/helpers/responses instead.
 */
export type Patch_UsersByuserIdRoles_Response_V1 = components['schemas']['RelationSet'];
/**
 * @deprecated Use {@link POST_AuthClientCredentials_Response_200} from @/helpers/responses instead.
 */
export type Post_AuthClientCredentials_Response_V1 = components['schemas']['OrganizationCredentialCreated'];
/**
 * @deprecated Use {@link POST_Contacts_Response_201} from @/helpers/responses instead.
 */
export type Post_Contacts_Response_V1 = components['schemas']['ContactSchema'];
/**
 * @deprecated Use {@link POST_DnsByZoneNameDnssecDisable_Response_200} from @/helpers/responses instead.
 */
export type Post_DnsByzoneNameDnssecDisable_Response_V1 = components['schemas']['DnsChangesResponse'];
/**
 * @deprecated Use {@link POST_DnsByZoneNameDnssecEnable_Response_200} from @/helpers/responses instead.
 */
export type Post_DnsByzoneNameDnssecEnable_Response_V1 = components['schemas']['DnsChangesResponse'];
/**
 * @deprecated Use {@link POST_Domains_Response_201} from @/helpers/responses instead.
 */
export type Post_Domains_Response_V1 = components['schemas']['DomainResponse'];
/**
 * @deprecated Use {@link POST_DomainsByDomainReferenceRenew_Response_200} from @/helpers/responses instead.
 */
export type Post_DomainsBydomainReferenceRenew_Response_V1 = components['schemas']['DomainRenewResponse'];
/**
 * @deprecated Use {@link POST_DomainsTransfer_Response_201} from @/helpers/responses instead.
 */
export type Post_DomainsTransfer_Response_V1 = components['schemas']['DomainResponse'];
/**
 * @deprecated Use {@link POST_EmailForwards_Response_201} from @/helpers/responses instead.
 */
export type Post_EmailForwards_Response_V1 = components['schemas']['EmailForward'];
/**
 * @deprecated Use {@link POST_EmailForwardsBulkDelete_Response_200} from @/helpers/responses instead.
 */
export type Post_EmailForwardsBulkDelete_Response_V1 = components['schemas']['BulkOperationResponse_EmailForwardBulkDeleteResult_'];
/**
 * @deprecated Use {@link POST_Notifications_Response_201} from @/helpers/responses instead.
 */
export type Post_Notifications_Response_V1 = components['schemas']['Notification'];
/**
 * @deprecated Use {@link POST_Organizations_Response_200} from @/helpers/responses instead.
 */
export type Post_Organizations_Response_V1 = components['schemas']['Organization'];
/**
 * @deprecated Use {@link POST_OrganizationsIpRestrictions_Response_200} from @/helpers/responses instead.
 */
export type Post_OrganizationsIpRestrictions_Response_V1 = components['schemas']['IpRestrictionResponse'];
/**
 * @deprecated Use {@link POST_Users_Response_200} from @/helpers/responses instead.
 */
export type Post_Users_Response_V1 = components['schemas']['User'];
/**
 * @deprecated Use {@link PUT_NotificationsByNotificationId_Response_200} from @/helpers/responses instead.
 */
export type Put_NotificationsBynotificationId_Response_V1 = components['schemas']['Notification'];
/** 
 * Request Parameter Types
*/
/**
 * @deprecated Use {@link GET_AuthClientCredentials_V1_Request_Parameters_Query} from @/helpers/requests instead.
 */
export type Get_AuthClientCredentials_ParamsQuery_V1 = operations['list_api_keys_v1_auth_client_credentials_get']['parameters']['query'];
/**
 * @deprecated Use {@link DELETE_AuthClientCredentialsApiKeyId_V1_Request_Parameters_Path} from @/helpers/requests instead.
 */
export type Delete_AuthClientCredentialsByapiKeyId_ParamsPath_V1 = operations['delete_api_key_v1_auth_client_credentials__api_key_id__delete']['parameters']['path'];
/**
 * @deprecated Use {@link GET_Availability_V1_Request_Parameters_Query} from @/helpers/requests instead.
 */
export type Get_Availability_ParamsQuery_V1 = operations['bulk_availability_v1_availability_get']['parameters']['query'];
/**
 * @deprecated Use {@link GET_AvailabilityStream_V1_Request_Parameters_Query} from @/helpers/requests instead.
 */
export type Get_AvailabilityStream_ParamsQuery_V1 = operations['stream_availability_v1_availability_stream_get']['parameters']['query'];
/**
 * @deprecated Use {@link GET_Contacts_V1_Request_Parameters_Query} from @/helpers/requests instead.
 */
export type Get_Contacts_ParamsQuery_V1 = operations['get_contacts_v1_contacts_get']['parameters']['query'];
/**
 * @deprecated Use {@link GET_ContactsVerification_V1_Request_Parameters_Query} from @/helpers/requests instead.
 */
export type Get_ContactsVerification_ParamsQuery_V1 = operations['get_verification_by_token_v1_contacts_verification_get']['parameters']['query'];
/**
 * @deprecated Use {@link PUT_ContactsVerification_V1_Request_Parameters_Query} from @/helpers/requests instead.
 */
export type Put_ContactsVerification_ParamsQuery_V1 = operations['update_verification_by_token_v1_contacts_verification_put']['parameters']['query'];
/**
 * @deprecated Use {@link GET_ContactsVerify_V1_Request_Parameters_Query} from @/helpers/requests instead.
 */
export type Get_ContactsVerify_ParamsQuery_V1 = operations['email_verify_contact_v1_contacts_verify_get']['parameters']['query'];
/**
 * @deprecated Use {@link GET_ContactsContactId_V1_Request_Parameters_Path} from @/helpers/requests instead.
 */
export type Get_ContactsBycontactId_ParamsPath_V1 = operations['get_contact_v1_contacts__contact_id__get']['parameters']['path'];
/**
 * @deprecated Use {@link DELETE_ContactsContactId_V1_Request_Parameters_Path} from @/helpers/requests instead.
 */
export type Delete_ContactsBycontactId_ParamsPath_V1 = operations['delete_contact_v1_contacts__contact_id__delete']['parameters']['path'];
/**
 * @deprecated Use {@link GET_ContactsContactIdVerification_V1_Request_Parameters_Path} from @/helpers/requests instead.
 */
export type Get_ContactsBycontactIdVerification_ParamsPath_V1 = operations['get_verification_status_v1_contacts__contact_id__verification_get']['parameters']['path'];
/**
 * @deprecated Use {@link POST_ContactsContactIdVerification_V1_Request_Parameters_Path} from @/helpers/requests instead.
 */
export type Post_ContactsBycontactIdVerification_ParamsPath_V1 = operations['start_contact_verification_v1_contacts__contact_id__verification_post']['parameters']['path'];
/**
 * @deprecated Use {@link POST_ContactsContactIdVerification_V1_Request_Parameters_Query} from @/helpers/requests instead.
 */
export type Post_ContactsBycontactIdVerification_ParamsQuery_V1 = operations['start_contact_verification_v1_contacts__contact_id__verification_post']['parameters']['query'];
/**
 * @deprecated Use {@link PUT_ContactsContactIdVerification_V1_Request_Parameters_Path} from @/helpers/requests instead.
 */
export type Put_ContactsBycontactIdVerification_ParamsPath_V1 = operations['update_verification_v1_contacts__contact_id__verification_put']['parameters']['path'];
/**
 * @deprecated Use {@link PUT_ContactsContactIdVerification_V1_Request_Parameters_Query} from @/helpers/requests instead.
 */
export type Put_ContactsBycontactIdVerification_ParamsQuery_V1 = operations['update_verification_v1_contacts__contact_id__verification_put']['parameters']['query'];
/**
 * @deprecated Use {@link DELETE_ContactsContactIdVerification_V1_Request_Parameters_Path} from @/helpers/requests instead.
 */
export type Delete_ContactsBycontactIdVerification_ParamsPath_V1 = operations['cancel_verification_v1_contacts__contact_id__verification_delete']['parameters']['path'];
/**
 * @deprecated Use {@link GET_Dns_V1_Request_Parameters_Query} from @/helpers/requests instead.
 */
export type Get_Dns_ParamsQuery_V1 = operations['list_zones_v1_dns_get']['parameters']['query'];
/**
 * @deprecated Use {@link GET_DnsZoneName_V1_Request_Parameters_Path} from @/helpers/requests instead.
 */
export type Get_DnsByzoneName_ParamsPath_V1 = operations['get_zone_v1_dns__zone_name__get']['parameters']['path'];
/**
 * @deprecated Use {@link DELETE_DnsZoneName_V1_Request_Parameters_Path} from @/helpers/requests instead.
 */
export type Delete_DnsByzoneName_ParamsPath_V1 = operations['delete_zone_v1_dns__zone_name__delete']['parameters']['path'];
/**
 * @deprecated Use {@link POST_DnsZoneNameDnssecDisable_V1_Request_Parameters_Path} from @/helpers/requests instead.
 */
export type Post_DnsByzoneNameDnssecDisable_ParamsPath_V1 = operations['disable_dnssec_v1_dns__zone_name__dnssec_disable_post']['parameters']['path'];
/**
 * @deprecated Use {@link POST_DnsZoneNameDnssecEnable_V1_Request_Parameters_Path} from @/helpers/requests instead.
 */
export type Post_DnsByzoneNameDnssecEnable_ParamsPath_V1 = operations['enable_dnssec_v1_dns__zone_name__dnssec_enable_post']['parameters']['path'];
/**
 * @deprecated Use {@link PATCH_DnsZoneNameRecords_V1_Request_Parameters_Path} from @/helpers/requests instead.
 */
export type Patch_DnsByzoneNameRecords_ParamsPath_V1 = operations['patch_zone_records_v1_dns__zone_name__records_patch']['parameters']['path'];
/**
 * @deprecated Use {@link PUT_DnsZoneNameRrsets_V1_Request_Parameters_Path} from @/helpers/requests instead.
 */
export type Put_DnsByzoneNameRrsets_ParamsPath_V1 = operations['update_zone_rrsets_v1_dns__zone_name__rrsets_put']['parameters']['path'];
/**
 * @deprecated Use {@link PATCH_DnsZoneNameRrsets_V1_Request_Parameters_Path} from @/helpers/requests instead.
 */
export type Patch_DnsByzoneNameRrsets_ParamsPath_V1 = operations['patch_zone_rrsets_v1_dns__zone_name__rrsets_patch']['parameters']['path'];
/**
 * @deprecated Use {@link GET_DomainSearchSuggest_V1_Request_Parameters_Query} from @/helpers/requests instead.
 */
export type Get_DomainSearchSuggest_ParamsQuery_V1 = operations['suggest_v1_domain_search_suggest_get']['parameters']['query'];
/**
 * @deprecated Use {@link GET_Domains_V1_Request_Parameters_Query} from @/helpers/requests instead.
 */
export type Get_Domains_ParamsQuery_V1 = operations['get_domains_v1_domains_get']['parameters']['query'];
/**
 * @deprecated Use {@link GET_DomainsCheck_V1_Request_Parameters_Query} from @/helpers/requests instead.
 */
export type Get_DomainsCheck_ParamsQuery_V1 = operations['epp_check_domain_v1_domains_check_get']['parameters']['query'];
/**
 * @deprecated Use {@link GET_DomainsDomainReference_V1_Request_Parameters_Path} from @/helpers/requests instead.
 */
export type Get_DomainsBydomainReference_ParamsPath_V1 = operations['get_domain_v1_domains__domain_reference__get']['parameters']['path'];
/**
 * @deprecated Use {@link PATCH_DomainsDomainReference_V1_Request_Parameters_Path} from @/helpers/requests instead.
 */
export type Patch_DomainsBydomainReference_ParamsPath_V1 = operations['update_domain_v1_domains__domain_reference__patch']['parameters']['path'];
/**
 * @deprecated Use {@link DELETE_DomainsDomainReference_V1_Request_Parameters_Path} from @/helpers/requests instead.
 */
export type Delete_DomainsBydomainReference_ParamsPath_V1 = operations['delete_domain_v1_domains__domain_reference__delete']['parameters']['path'];
/**
 * @deprecated Use {@link GET_DomainsDomainReferenceDnssec_V1_Request_Parameters_Path} from @/helpers/requests instead.
 */
export type Get_DomainsBydomainReferenceDnssec_ParamsPath_V1 = operations['get_dnssec_v1_domains__domain_reference__dnssec_get']['parameters']['path'];
/**
 * @deprecated Use {@link PUT_DomainsDomainReferenceDnssec_V1_Request_Parameters_Path} from @/helpers/requests instead.
 */
export type Put_DomainsBydomainReferenceDnssec_ParamsPath_V1 = operations['create_or_update_dnssec_v1_domains__domain_reference__dnssec_put']['parameters']['path'];
/**
 * @deprecated Use {@link DELETE_DomainsDomainReferenceDnssec_V1_Request_Parameters_Path} from @/helpers/requests instead.
 */
export type Delete_DomainsBydomainReferenceDnssec_ParamsPath_V1 = operations['delete_dnssec_v1_domains__domain_reference__dnssec_delete']['parameters']['path'];
/**
 * @deprecated Use {@link POST_DomainsDomainReferenceRenew_V1_Request_Parameters_Path} from @/helpers/requests instead.
 */
export type Post_DomainsBydomainReferenceRenew_ParamsPath_V1 = operations['renew_domain_v1_domains__domain_reference__renew_post']['parameters']['path'];
/**
 * @deprecated Use {@link DELETE_DomainsDomainReferenceTransfer_V1_Request_Parameters_Path} from @/helpers/requests instead.
 */
export type Delete_DomainsBydomainReferenceTransfer_ParamsPath_V1 = operations['cancel_domain_transfer_v1_domains__domain_reference__transfer_delete']['parameters']['path'];
/**
 * @deprecated Use {@link GET_EmailForwards_V1_Request_Parameters_Query} from @/helpers/requests instead.
 */
export type Get_EmailForwards_ParamsQuery_V1 = operations['list_email_forwards_v1_email_forwards_get']['parameters']['query'];
/**
 * @deprecated Use {@link GET_EmailForwardsEmailForwardId_V1_Request_Parameters_Path} from @/helpers/requests instead.
 */
export type Get_EmailForwardsByemailForwardId_ParamsPath_V1 = operations['get_email_forward_v1_email_forwards__email_forward_id__get']['parameters']['path'];
/**
 * @deprecated Use {@link PATCH_EmailForwardsEmailForwardId_V1_Request_Parameters_Path} from @/helpers/requests instead.
 */
export type Patch_EmailForwardsByemailForwardId_ParamsPath_V1 = operations['update_email_forward_v1_email_forwards__email_forward_id__patch']['parameters']['path'];
/**
 * @deprecated Use {@link DELETE_EmailForwardsEmailForwardId_V1_Request_Parameters_Path} from @/helpers/requests instead.
 */
export type Delete_EmailForwardsByemailForwardId_ParamsPath_V1 = operations['delete_email_forward_v1_email_forwards__email_forward_id__delete']['parameters']['path'];
/**
 * @deprecated Use {@link GET_Event_V1_Request_Parameters_Query} from @/helpers/requests instead.
 */
export type Get_Event_ParamsQuery_V1 = operations['get_events_v1_event_get']['parameters']['query'];
/**
 * @deprecated Use {@link GET_EventEventId_V1_Request_Parameters_Path} from @/helpers/requests instead.
 */
export type Get_EventByeventId_ParamsPath_V1 = operations['get_event_v1_event__event_id__get']['parameters']['path'];
/**
 * @deprecated Use {@link PATCH_EventEventId_V1_Request_Parameters_Path} from @/helpers/requests instead.
 */
export type Patch_EventByeventId_ParamsPath_V1 = operations['acknowledge_event_v1_event__event_id__patch']['parameters']['path'];
/**
 * @deprecated Use {@link GET_Notifications_V1_Request_Parameters_Query} from @/helpers/requests instead.
 */
export type Get_Notifications_ParamsQuery_V1 = operations['list_notifications_v1_notifications_get']['parameters']['query'];
/**
 * @deprecated Use {@link GET_NotificationsNotificationId_V1_Request_Parameters_Path} from @/helpers/requests instead.
 */
export type Get_NotificationsBynotificationId_ParamsPath_V1 = operations['get_notification_v1_notifications__notification_id__get']['parameters']['path'];
/**
 * @deprecated Use {@link GET_NotificationsNotificationId_V1_Request_Parameters_Query} from @/helpers/requests instead.
 */
export type Get_NotificationsBynotificationId_ParamsQuery_V1 = operations['get_notification_v1_notifications__notification_id__get']['parameters']['query'];
/**
 * @deprecated Use {@link PUT_NotificationsNotificationId_V1_Request_Parameters_Path} from @/helpers/requests instead.
 */
export type Put_NotificationsBynotificationId_ParamsPath_V1 = operations['update_notification_v1_notifications__notification_id__put']['parameters']['path'];
/**
 * @deprecated Use {@link DELETE_NotificationsNotificationId_V1_Request_Parameters_Path} from @/helpers/requests instead.
 */
export type Delete_NotificationsBynotificationId_ParamsPath_V1 = operations['delete_notification_v1_notifications__notification_id__delete']['parameters']['path'];
/**
 * @deprecated Use {@link PATCH_NotificationsNotificationIdRead_V1_Request_Parameters_Path} from @/helpers/requests instead.
 */
export type Patch_NotificationsBynotificationIdRead_ParamsPath_V1 = operations['update_notification_read_v1_notifications__notification_id__read_patch']['parameters']['path'];
/**
 * @deprecated Use {@link GET_Organizations_V1_Request_Parameters_Query} from @/helpers/requests instead.
 */
export type Get_Organizations_ParamsQuery_V1 = operations['list_organizations_v1_organizations_get']['parameters']['query'];
/**
 * @deprecated Use {@link GET_OrganizationsAttributes_V1_Request_Parameters_Query} from @/helpers/requests instead.
 */
export type Get_OrganizationsAttributes_ParamsQuery_V1 = operations['get_attributes_v1_organizations_attributes_get']['parameters']['query'];
/**
 * @deprecated Use {@link PATCH_OrganizationsAttributes_V1_Request_Parameters_Query} from @/helpers/requests instead.
 */
export type Patch_OrganizationsAttributes_ParamsQuery_V1 = operations['update_attributes_v1_organizations_attributes_patch']['parameters']['query'];
/**
 * @deprecated Use {@link GET_OrganizationsAttributesOrganizationId_V1_Request_Parameters_Path} from @/helpers/requests instead.
 */
export type Get_OrganizationsAttributesByorganizationId_ParamsPath_V1 = operations['get_attributes_v1_organizations_attributes__organization_id__get']['parameters']['path'];
/**
 * @deprecated Use {@link GET_OrganizationsAttributesOrganizationId_V1_Request_Parameters_Query} from @/helpers/requests instead.
 */
export type Get_OrganizationsAttributesByorganizationId_ParamsQuery_V1 = operations['get_attributes_v1_organizations_attributes__organization_id__get']['parameters']['query'];
/**
 * @deprecated Use {@link PATCH_OrganizationsAttributesOrganizationId_V1_Request_Parameters_Path} from @/helpers/requests instead.
 */
export type Patch_OrganizationsAttributesByorganizationId_ParamsPath_V1 = operations['update_attributes_v1_organizations_attributes__organization_id__patch']['parameters']['path'];
/**
 * @deprecated Use {@link GET_OrganizationsIpRestrictionsByIpRestrictionId_V1_Request_Parameters_Path} from @/helpers/requests instead.
 */
export type Get_OrganizationsIpRestrictionsByipRestrictionId_ParamsPath_V1 = operations['get_ip_restriction_v1_organizations_ip_restrictions__ip_restriction_id__get']['parameters']['path'];
/**
 * @deprecated Use {@link PATCH_OrganizationsIpRestrictionsByIpRestrictionId_V1_Request_Parameters_Path} from @/helpers/requests instead.
 */
export type Patch_OrganizationsIpRestrictionsByipRestrictionId_ParamsPath_V1 = operations['update_ip_restriction_v1_organizations_ip_restrictions__ip_restriction_id__patch']['parameters']['path'];
/**
 * @deprecated Use {@link DELETE_OrganizationsIpRestrictionsIpRestrictionId_V1_Request_Parameters_Path} from @/helpers/requests instead.
 */
export type Delete_OrganizationsIpRestrictionsByipRestrictionId_ParamsPath_V1 = operations['delete_ip_restriction_v1_organizations_ip_restrictions__ip_restriction_id__delete']['parameters']['path'];
/**
 * @deprecated Use {@link GET_OrganizationsUsers_V1_Request_Parameters_Query} from @/helpers/requests instead.
 */
export type Get_OrganizationsUsers_ParamsQuery_V1 = operations['list_users_v1_organizations_users_get']['parameters']['query'];
/**
 * @deprecated Use {@link GET_OrganizationsOrganizationId_V1_Request_Parameters_Path} from @/helpers/requests instead.
 */
export type Get_OrganizationsByorganizationId_ParamsPath_V1 = operations['get_organization_v1_organizations__organization_id__get']['parameters']['path'];
/**
 * @deprecated Use {@link PATCH_OrganizationsOrganizationId_V1_Request_Parameters_Path} from @/helpers/requests instead.
 */
export type Patch_OrganizationsByorganizationId_ParamsPath_V1 = operations['update_organization_v1_organizations__organization_id__patch']['parameters']['path'];
/**
 * @deprecated Use {@link DELETE_OrganizationsOrganizationId_V1_Request_Parameters_Path} from @/helpers/requests instead.
 */
export type Delete_OrganizationsByorganizationId_ParamsPath_V1 = operations['delete_user_v1_organizations__organization_id__delete']['parameters']['path'];
/**
 * @deprecated Use {@link PATCH_OrganizationsOrganizationIdPlan_V1_Request_Parameters_Path} from @/helpers/requests instead.
 */
export type Patch_OrganizationsByorganizationIdPlan_ParamsPath_V1 = operations['change_plan_v1_organizations__organization_id__plan_patch']['parameters']['path'];
/**
 * @deprecated Use {@link GET_UsersMe_V1_Request_Parameters_Query} from @/helpers/requests instead.
 */
export type Get_UsersMe_ParamsQuery_V1 = operations['get_current_user_v1_users_me_get']['parameters']['query'];
/**
 * @deprecated Use {@link GET_UsersUserId_V1_Request_Parameters_Path} from @/helpers/requests instead.
 */
export type Get_UsersByuserId_ParamsPath_V1 = operations['get_user_v1_users__user_id__get']['parameters']['path'];
/**
 * @deprecated Use {@link GET_UsersUserId_V1_Request_Parameters_Query} from @/helpers/requests instead.
 */
export type Get_UsersByuserId_ParamsQuery_V1 = operations['get_user_v1_users__user_id__get']['parameters']['query'];
/**
 * @deprecated Use {@link PATCH_UsersUserId_V1_Request_Parameters_Path} from @/helpers/requests instead.
 */
export type Patch_UsersByuserId_ParamsPath_V1 = operations['update_user_v1_users__user_id__patch']['parameters']['path'];
/**
 * @deprecated Use {@link DELETE_UsersUserId_V1_Request_Parameters_Path} from @/helpers/requests instead.
 */
export type Delete_UsersByuserId_ParamsPath_V1 = operations['delete_user_v1_users__user_id__delete']['parameters']['path'];
/**
 * @deprecated Use {@link GET_UsersUserIdPermissions_V1_Request_Parameters_Path} from @/helpers/requests instead.
 */
export type Get_UsersByuserIdPermissions_ParamsPath_V1 = operations['get_user_permissions_v1_users__user_id__permissions_get']['parameters']['path'];
/**
 * @deprecated Use {@link GET_UsersUserIdRoles_V1_Request_Parameters_Path} from @/helpers/requests instead.
 */
export type Get_UsersByuserIdRoles_ParamsPath_V1 = operations['list_roles_v1_users__user_id__roles_get']['parameters']['path'];
/**
 * @deprecated Use {@link PATCH_UsersUserIdRoles_V1_Request_Parameters_Path} from @/helpers/requests instead.
 */
export type Patch_UsersByuserIdRoles_ParamsPath_V1 = operations['update_user_relations_v1_users__user_id__roles_patch']['parameters']['path'];

/** 
 * Response Data Types
*/
/**
 * @deprecated Use {@link DomainAvailabilityList} from @/helpers/schemas instead.
 */
export type DomainAvailability = components['schemas']['common__models__availability__datasource__DomainAvailabilityResponse'];
export type DomainAvailabilityResultsArray = DomainAvailability['results'];
/**
 * @deprecated Use {@link Contact} from @/helpers/schemas instead.
 */
export type Contact = components['schemas']['ContactResponse'];
/**
 * @deprecated Use {@link ContactSchema} from @/helpers/schemas instead.
 */
export type ContactSchema = components['schemas']['ContactSchema'];
/**
 * @deprecated Use {@link ContactVerification} from @/helpers/schemas instead.
 */
export type ContactVerification = components['schemas']['ContactVerificationResponse'];
/**
 * @deprecated Use {@link DnsZone} from @/helpers/schemas instead.
 */
export type DnsZone = components['schemas']['DnsZoneResponse'];
/**
 * @deprecated Use {@link DnsZoneRrsetsArray} from @/helpers/schemas-arrays instead.
 */
export type DnsZoneRrsetsArray = DnsZone['rrsets'];
/**
 * @deprecated Use {@link DomainCheck} from @/helpers/schemas instead.
 */
export type DomainCheck = components['schemas']['DomainCheckResponse'];
/**
 * @deprecated Use {@link DomainCheckResultsArray} from @/helpers/schemas-arrays instead.
 */
export type DomainCheckResultsArray = DomainCheck['results'];
/**
 * @deprecated Use {@link Domain} from @/helpers/schemas instead.
 */
export type Domain = components['schemas']['DomainResponse'];
/**
 * @deprecated Use {@link DomainContactsArray} from @/helpers/schemas-arrays instead.
 */
export type DomainContactsArray = Domain['contacts'];
/**
 * @deprecated Use {@link DomainNameserversArray} from @/helpers/schemas-arrays instead.
 */
export type DomainNameserversArray = Domain['nameservers'];
/**
 * @deprecated Use {@link DomainRegistry_statusesArray} from @/helpers/schemas-arrays instead.
 */
export type DomainRegistry_statusesArray = Domain['registry_statuses'];
/**
 * @deprecated Use {@link DomainSearch} from @/helpers/schemas instead.
 */
export type DomainSearch = components['schemas']['DomainSearchResponse'];
/**
 * @deprecated Use {@link DomainSearchResultsArray} from @/helpers/schemas-arrays instead.
 */
export type DomainSearchResultsArray = DomainSearch['results'];
/**
 * @deprecated Use {@link DomainSummary} from @/helpers/schemas instead.
 */
export type DomainSummary = components['schemas']['DomainSummaryResponse'];
/**
 * @deprecated Use {@link EmailForward} from @/helpers/schemas instead.
 */
export type EmailForward = components['schemas']['EmailForward'];
/**
 * @deprecated Use {@link EventSchema} from @/helpers/schemas instead.
 */
export type EventSchema = components['schemas']['EventSchema'];
/**
 * @deprecated Use {@link IpRestriction} from @/helpers/schemas instead.
 */
export type IpRestriction = components['schemas']['IpRestrictionResponse'];
/**
 * @deprecated Use {@link OrganizationWithPlan} from @/helpers/schemas instead.
 */
export type OrganizationWithPlan = components['schemas']['OrganizationWithPlan'];
/**
 * @deprecated Use {@link OrganizationWithPlanAttributesArray} from @/helpers/schemas-arrays instead.
 */
export type OrganizationWithPlanAttributesArray = OrganizationWithPlan['attributes'];
/**
 * @deprecated Use {@link OrganizationWithPlanUsersArray} from @/helpers/schemas-arrays instead.
 */
export type OrganizationWithPlanUsersArray = OrganizationWithPlan['users'];
/**
 * @deprecated Use {@link ContactSchemaArray} from @/helpers/schemas-arrays instead.
 */
export type ContactSchemaArray = Get_Contacts_Response_V1['results'];
/**
 * @deprecated Use {@link DnsZoneArray} from @/helpers/schemas-arrays instead.
 */
export type DnsZoneArray = Get_Dns_Response_V1['results'];
/**
 * @deprecated Use {@link DomainArray} from @/helpers/schemas-arrays instead.
 */
export type DomainArray = Get_Domains_Response_V1['results'];
/**
 * @deprecated Use {@link EmailForwardArray} from @/helpers/schemas-arrays instead.
 */
export type EmailForwardArray = Get_EmailForwards_Response_V1['results'];
/**
 * @deprecated Use {@link EventResponseArray} from @/helpers/schemas-arrays instead.
 */
export type EventArray = Get_Event_Response_V1['results'];
/**
 * @deprecated Use {@link OrganizationArray} from @/helpers/schemas-arrays instead.
 */
export type OrganizationArray = Get_Organizations_Response_V1['results'];
/**
 * @deprecated Use {@link OrganizationCredentialArray} from @/helpers/schemas-arrays instead.
 */
export type OrganizationCredentialArray = Get_AuthClientCredentials_Response_V1['results'];
/**
 * @deprecated Use {@link UserArray} from @/helpers/schemas-arrays instead.
 */
export type UserArray = Get_OrganizationsUsers_Response_V1['results'];
/**
 * @deprecated Use {@link UserNotificationSummaryArray} from @/helpers/schemas-arrays instead.
 */
export type UserNotificationSummaryArray = Get_Notifications_Response_V1['results'];
/**
 * @deprecated Use {@link PermissionSet} from @/helpers/schemas instead.
 */
export type PermissionSet = components['schemas']['PermissionSet'];
/**
 * @deprecated Use {@link PermissionSetPermissionsArray} from @/helpers/schemas-arrays instead.
 */
export type PermissionSetPermissionsArray = PermissionSet['permissions'];
/**
 * @deprecated Use {@link RelationSet} from @/helpers/schemas instead.
 */
export type RelationSet = components['schemas']['RelationSet'];
/**
 * @deprecated Use {@link RelationSetRelationsArray} from @/helpers/schemas-arrays instead.
 */
export type RelationSetRelationsArray = RelationSet['relations'];
/**
 * @deprecated Use {@link UserNotification} from @/helpers/schemas instead.
 */
export type UserNotification = components['schemas']['UserNotification'];
/**
 * @deprecated Use {@link UserWithAttributes} from @/helpers/schemas instead.
 */
export type UserWithAttributes = components['schemas']['UserWithAttributes'];
/**
 * @deprecated Use {@link UserWithRelationPermissions} from @/helpers/schemas instead.
 */
export type UserWithRelationPermissions = components['schemas']['UserWithRelationPermissions'];