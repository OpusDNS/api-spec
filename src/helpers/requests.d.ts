import type { operations } from '../schema';
import type {
  BulkObjectTagChanges,
  ClaimsNoticesRequest,
  ContactAttestReq,
  ContactAttributeSetCreate,
  ContactAttributeSetUpdate,
  ContactCreate,
  ConversationCreateRequest,
  ConversationPatchRequest,
  CustomRoleCreate,
  CustomRoleUpdate,
  DnsZoneCreate,
  DnsZoneRecordsPatchOps,
  DnsZoneRrsetsCreate,
  DnsZoneRrsetsPatchOps,
  DomainAvailabilityRequest,
  DomainCreate,
  DomainDnssecDataCreate,
  DomainForwardCreateRequest,
  DomainForwardPatchOps,
  DomainForwardSetCreateRequest,
  DomainForwardSetRequest,
  DomainRenewRequest,
  DomainRestoreRequest,
  DomainTransferIn,
  DomainTransitRequest,
  DomainUpdate,
  DomainWithdrawRequest,
  EmailForwardAliasCreate,
  EmailForwardAliasUpdate,
  EmailForwardCreate,
  HostCreate,
  HostUpdate,
  IpRestrictionCreate,
  IpRestrictionUpdate,
  JobBatchRequest,
  MemoryFactCreateRequest,
  MemoryFactPatchRequest,
  MessageCreateRequest,
  NorIdDeclarationConfirmRequest,
  NorIdResellerDeclarationRequest,
  ObjectTagChanges,
  OrganizationAttributeUpdate,
  OrganizationCreate,
  OrganizationUpdate,
  ParkingSignupRequest,
  PreviewMailReq,
  PublicAuthRequestForm,
  PublicRoleAssignmentRequest,
  TagCreate,
  TagUpdate,
  UserCreate,
  UserUpdate,
  VanityNameserverSetCreate,
  VanityNsCheckPublicReq,
  WhitelabelBrandingCreate,
  ZoneVanitySetUpdate,
} from './schemas';

export type GET_AiConciergeContextsByContextId_Request = {
  parameters: operations['get_context_v1_ai_concierge_contexts__context_id__get']['parameters'];
};
export type GET_AiConciergeContextsByContextId_Request_Path = GET_AiConciergeContextsByContextId_Request['parameters']['path'];

export type GET_AiConciergeConversations_Request = {
  parameters: operations['list_conversations_v1_ai_concierge_conversations_get']['parameters'];
};
export type GET_AiConciergeConversations_Request_Query = GET_AiConciergeConversations_Request['parameters']['query'];

export type POST_AiConciergeConversations_Request = {
  requestBody: ConversationCreateRequest;
};
export type POST_AiConciergeConversations_Request_Body = POST_AiConciergeConversations_Request['requestBody'];

export type DELETE_AiConciergeConversationsByConversationId_Request = {
  parameters: operations['delete_conversation_v1_ai_concierge_conversations__conversation_id__delete']['parameters'];
};
export type DELETE_AiConciergeConversationsByConversationId_Request_Path = DELETE_AiConciergeConversationsByConversationId_Request['parameters']['path'];

export type GET_AiConciergeConversationsByConversationId_Request = {
  parameters: operations['get_conversation_v1_ai_concierge_conversations__conversation_id__get']['parameters'];
};
export type GET_AiConciergeConversationsByConversationId_Request_Path = GET_AiConciergeConversationsByConversationId_Request['parameters']['path'];

export type PATCH_AiConciergeConversationsByConversationId_Request = {
  parameters: operations['patch_conversation_v1_ai_concierge_conversations__conversation_id__patch']['parameters'];
  requestBody: ConversationPatchRequest;
};
export type PATCH_AiConciergeConversationsByConversationId_Request_Path = PATCH_AiConciergeConversationsByConversationId_Request['parameters']['path'];
export type PATCH_AiConciergeConversationsByConversationId_Request_Body = PATCH_AiConciergeConversationsByConversationId_Request['requestBody'];

export type GET_AiConciergeConversationsByConversationIdContexts_Request = {
  parameters: operations['list_contexts_v1_ai_concierge_conversations__conversation_id__contexts_get']['parameters'];
};
export type GET_AiConciergeConversationsByConversationIdContexts_Request_Query = GET_AiConciergeConversationsByConversationIdContexts_Request['parameters']['query'];
export type GET_AiConciergeConversationsByConversationIdContexts_Request_Path = GET_AiConciergeConversationsByConversationIdContexts_Request['parameters']['path'];

export type POST_AiConciergeConversationsByConversationIdContexts_Request = {
  parameters: operations['create_context_v1_ai_concierge_conversations__conversation_id__contexts_post']['parameters'];
};
export type POST_AiConciergeConversationsByConversationIdContexts_Request_Path = POST_AiConciergeConversationsByConversationIdContexts_Request['parameters']['path'];

export type GET_AiConciergeConversationsByConversationIdMessages_Request = {
  parameters: operations['list_messages_v1_ai_concierge_conversations__conversation_id__messages_get']['parameters'];
};
export type GET_AiConciergeConversationsByConversationIdMessages_Request_Query = GET_AiConciergeConversationsByConversationIdMessages_Request['parameters']['query'];
export type GET_AiConciergeConversationsByConversationIdMessages_Request_Path = GET_AiConciergeConversationsByConversationIdMessages_Request['parameters']['path'];

export type POST_AiConciergeConversationsByConversationIdMessages_Request = {
  parameters: operations['create_message_v1_ai_concierge_conversations__conversation_id__messages_post']['parameters'];
  requestBody: MessageCreateRequest;
};
export type POST_AiConciergeConversationsByConversationIdMessages_Request_Path = POST_AiConciergeConversationsByConversationIdMessages_Request['parameters']['path'];
export type POST_AiConciergeConversationsByConversationIdMessages_Request_Body = POST_AiConciergeConversationsByConversationIdMessages_Request['requestBody'];

export type GET_AiConciergeConversationsByConversationIdMessagesByMessageId_Request = {
  parameters: operations['get_message_v1_ai_concierge_conversations__conversation_id__messages__message_id__get']['parameters'];
};
export type GET_AiConciergeConversationsByConversationIdMessagesByMessageId_Request_Path = GET_AiConciergeConversationsByConversationIdMessagesByMessageId_Request['parameters']['path'];

export type GET_AiConciergeMemoryFacts_Request = {
  parameters: operations['list_memory_facts_v1_ai_concierge_memory_facts_get']['parameters'];
};
export type GET_AiConciergeMemoryFacts_Request_Query = GET_AiConciergeMemoryFacts_Request['parameters']['query'];

export type POST_AiConciergeMemoryFacts_Request = {
  requestBody: MemoryFactCreateRequest;
};
export type POST_AiConciergeMemoryFacts_Request_Body = POST_AiConciergeMemoryFacts_Request['requestBody'];

export type DELETE_AiConciergeMemoryFactsByFactId_Request = {
  parameters: operations['delete_memory_fact_v1_ai_concierge_memory_facts__fact_id__delete']['parameters'];
};
export type DELETE_AiConciergeMemoryFactsByFactId_Request_Path = DELETE_AiConciergeMemoryFactsByFactId_Request['parameters']['path'];

export type PATCH_AiConciergeMemoryFactsByFactId_Request = {
  parameters: operations['patch_memory_fact_v1_ai_concierge_memory_facts__fact_id__patch']['parameters'];
  requestBody: MemoryFactPatchRequest;
};
export type PATCH_AiConciergeMemoryFactsByFactId_Request_Path = PATCH_AiConciergeMemoryFactsByFactId_Request['parameters']['path'];
export type PATCH_AiConciergeMemoryFactsByFactId_Request_Body = PATCH_AiConciergeMemoryFactsByFactId_Request['requestBody'];

export type GET_ArchiveEmailForwardLogsAliasesByEmailForwardAliasId_Request = {
  parameters: operations['get_email_forward_logs_by_alias_v1_archive_email_forward_logs_aliases__email_forward_alias_id__get']['parameters'];
};
export type GET_ArchiveEmailForwardLogsAliasesByEmailForwardAliasId_Request_Query = GET_ArchiveEmailForwardLogsAliasesByEmailForwardAliasId_Request['parameters']['query'];
export type GET_ArchiveEmailForwardLogsAliasesByEmailForwardAliasId_Request_Path = GET_ArchiveEmailForwardLogsAliasesByEmailForwardAliasId_Request['parameters']['path'];

export type GET_ArchiveEmailForwardLogsByEmailForwardId_Request = {
  parameters: operations['get_email_forward_logs_v1_archive_email_forward_logs__email_forward_id__get']['parameters'];
};
export type GET_ArchiveEmailForwardLogsByEmailForwardId_Request_Query = GET_ArchiveEmailForwardLogsByEmailForwardId_Request['parameters']['query'];
export type GET_ArchiveEmailForwardLogsByEmailForwardId_Request_Path = GET_ArchiveEmailForwardLogsByEmailForwardId_Request['parameters']['path'];

export type GET_ArchiveObjectLogs_Request = {
  parameters: operations['get_object_logs_v1_archive_object_logs_get']['parameters'];
};
export type GET_ArchiveObjectLogs_Request_Query = GET_ArchiveObjectLogs_Request['parameters']['query'];

export type GET_ArchiveObjectLogsByObjectId_Request = {
  parameters: operations['get_object_logs_by_object_id_v1_archive_object_logs__object_id__get']['parameters'];
};
export type GET_ArchiveObjectLogsByObjectId_Request_Query = GET_ArchiveObjectLogsByObjectId_Request['parameters']['query'];
export type GET_ArchiveObjectLogsByObjectId_Request_Path = GET_ArchiveObjectLogsByObjectId_Request['parameters']['path'];

export type GET_ArchiveRequestHistory_Request = {
  parameters: operations['get_request_history_v1_archive_request_history_get']['parameters'];
};
export type GET_ArchiveRequestHistory_Request_Query = GET_ArchiveRequestHistory_Request['parameters']['query'];

export type GET_AuthClientCredentialsIntrospect_Request = {
};

export type POST_AuthToken_Request = {
  requestBody: PublicAuthRequestForm;
};
export type POST_AuthToken_Request_Body = POST_AuthToken_Request['requestBody'];

export type GET_Availability_Request = {
  parameters: operations['bulk_availability_v1_availability_get']['parameters'];
};
export type GET_Availability_Request_Query = GET_Availability_Request['parameters']['query'];

export type GET_AvailabilityStream_Request = {
  parameters: operations['stream_availability_v1_availability_stream_get']['parameters'];
};
export type GET_AvailabilityStream_Request_Query = GET_AvailabilityStream_Request['parameters']['query'];

export type POST_AvailabilityStream_Request = {
  requestBody: DomainAvailabilityRequest;
};
export type POST_AvailabilityStream_Request_Body = POST_AvailabilityStream_Request['requestBody'];

export type GET_Contacts_Request = {
  parameters: operations['get_contacts_v1_contacts_get']['parameters'];
};
export type GET_Contacts_Request_Query = GET_Contacts_Request['parameters']['query'];

export type POST_Contacts_Request = {
  requestBody: ContactCreate;
};
export type POST_Contacts_Request_Body = POST_Contacts_Request['requestBody'];

export type GET_ContactsAttributeSets_Request = {
  parameters: operations['list_attribute_sets_v1_contacts_attribute_sets_get']['parameters'];
};
export type GET_ContactsAttributeSets_Request_Query = GET_ContactsAttributeSets_Request['parameters']['query'];

export type POST_ContactsAttributeSets_Request = {
  requestBody: ContactAttributeSetCreate;
};
export type POST_ContactsAttributeSets_Request_Body = POST_ContactsAttributeSets_Request['requestBody'];

export type DELETE_ContactsAttributeSetsByContactAttributeSetId_Request = {
  parameters: operations['delete_attribute_set_v1_contacts_attribute_sets__contact_attribute_set_id__delete']['parameters'];
};
export type DELETE_ContactsAttributeSetsByContactAttributeSetId_Request_Path = DELETE_ContactsAttributeSetsByContactAttributeSetId_Request['parameters']['path'];

export type GET_ContactsAttributeSetsByContactAttributeSetId_Request = {
  parameters: operations['get_attribute_set_v1_contacts_attribute_sets__contact_attribute_set_id__get']['parameters'];
};
export type GET_ContactsAttributeSetsByContactAttributeSetId_Request_Path = GET_ContactsAttributeSetsByContactAttributeSetId_Request['parameters']['path'];

export type PATCH_ContactsAttributeSetsByContactAttributeSetId_Request = {
  parameters: operations['update_attribute_set_v1_contacts_attribute_sets__contact_attribute_set_id__patch']['parameters'];
  requestBody: ContactAttributeSetUpdate;
};
export type PATCH_ContactsAttributeSetsByContactAttributeSetId_Request_Path = PATCH_ContactsAttributeSetsByContactAttributeSetId_Request['parameters']['path'];
export type PATCH_ContactsAttributeSetsByContactAttributeSetId_Request_Body = PATCH_ContactsAttributeSetsByContactAttributeSetId_Request['requestBody'];

export type DELETE_ContactsByContactId_Request = {
  parameters: operations['delete_contact_v1_contacts__contact_id__delete']['parameters'];
};
export type DELETE_ContactsByContactId_Request_Path = DELETE_ContactsByContactId_Request['parameters']['path'];

export type GET_ContactsByContactId_Request = {
  parameters: operations['get_contact_v1_contacts__contact_id__get']['parameters'];
};
export type GET_ContactsByContactId_Request_Query = GET_ContactsByContactId_Request['parameters']['query'];
export type GET_ContactsByContactId_Request_Path = GET_ContactsByContactId_Request['parameters']['path'];

export type PATCH_ContactsByContactIdLinkByContactAttributeSetId_Request = {
  parameters: operations['create_attribute_link_v1_contacts__contact_id__link__contact_attribute_set_id__patch']['parameters'];
};
export type PATCH_ContactsByContactIdLinkByContactAttributeSetId_Request_Path = PATCH_ContactsByContactIdLinkByContactAttributeSetId_Request['parameters']['path'];

export type DELETE_ContactsByContactIdVerification_Request = {
  parameters: operations['cancel_verification_v1_contacts__contact_id__verification_delete']['parameters'];
};
export type DELETE_ContactsByContactIdVerification_Request_Path = DELETE_ContactsByContactIdVerification_Request['parameters']['path'];

export type GET_ContactsByContactIdVerification_Request = {
  parameters: operations['get_verification_status_v1_contacts__contact_id__verification_get']['parameters'];
};
export type GET_ContactsByContactIdVerification_Request_Path = GET_ContactsByContactIdVerification_Request['parameters']['path'];

export type POST_ContactsByContactIdVerification_Request = {
  parameters: operations['start_contact_verification_v1_contacts__contact_id__verification_post']['parameters'];
};
export type POST_ContactsByContactIdVerification_Request_Query = POST_ContactsByContactIdVerification_Request['parameters']['query'];
export type POST_ContactsByContactIdVerification_Request_Path = POST_ContactsByContactIdVerification_Request['parameters']['path'];

export type PUT_ContactsByContactIdVerification_Request = {
  parameters: operations['update_verification_v1_contacts__contact_id__verification_put']['parameters'];
};
export type PUT_ContactsByContactIdVerification_Request_Query = PUT_ContactsByContactIdVerification_Request['parameters']['query'];
export type PUT_ContactsByContactIdVerification_Request_Path = PUT_ContactsByContactIdVerification_Request['parameters']['path'];

export type GET_ContactsByContactIdVerifications_Request = {
  parameters: operations['get_contact_verification_status_v1_contacts__contact_id__verifications_get']['parameters'];
};
export type GET_ContactsByContactIdVerifications_Request_Path = GET_ContactsByContactIdVerifications_Request['parameters']['path'];

export type POST_ContactsByContactIdVerificationsAttest_Request = {
  parameters: operations['attest_contact_verification_v1_contacts__contact_id__verifications_attest_post']['parameters'];
  requestBody: ContactAttestReq;
};
export type POST_ContactsByContactIdVerificationsAttest_Request_Path = POST_ContactsByContactIdVerificationsAttest_Request['parameters']['path'];
export type POST_ContactsByContactIdVerificationsAttest_Request_Body = POST_ContactsByContactIdVerificationsAttest_Request['requestBody'];

export type GET_ContactsVerification_Request = {
  parameters: operations['get_verification_by_token_v1_contacts_verification_get']['parameters'];
};
export type GET_ContactsVerification_Request_Query = GET_ContactsVerification_Request['parameters']['query'];

export type PUT_ContactsVerification_Request = {
  parameters: operations['update_verification_by_token_v1_contacts_verification_put']['parameters'];
};
export type PUT_ContactsVerification_Request_Query = PUT_ContactsVerification_Request['parameters']['query'];

export type GET_ContactsVerify_Request = {
  parameters: operations['email_verify_contact_v1_contacts_verify_get']['parameters'];
};
export type GET_ContactsVerify_Request_Query = GET_ContactsVerify_Request['parameters']['query'];

export type GET_Dns_Request = {
  parameters: operations['list_zones_v1_dns_get']['parameters'];
};
export type GET_Dns_Request_Query = GET_Dns_Request['parameters']['query'];

export type POST_Dns_Request = {
  requestBody: DnsZoneCreate;
};
export type POST_Dns_Request_Body = POST_Dns_Request['requestBody'];

export type DELETE_DnsByZoneName_Request = {
  parameters: operations['delete_zone_v1_dns__zone_name__delete']['parameters'];
};
export type DELETE_DnsByZoneName_Request_Path = DELETE_DnsByZoneName_Request['parameters']['path'];

export type GET_DnsByZoneName_Request = {
  parameters: operations['get_zone_v1_dns__zone_name__get']['parameters'];
};
export type GET_DnsByZoneName_Request_Query = GET_DnsByZoneName_Request['parameters']['query'];
export type GET_DnsByZoneName_Request_Path = GET_DnsByZoneName_Request['parameters']['path'];

export type POST_DnsByZoneNameDnssecDisable_Request = {
  parameters: operations['disable_dnssec_v1_dns__zone_name__dnssec_disable_post']['parameters'];
};
export type POST_DnsByZoneNameDnssecDisable_Request_Path = POST_DnsByZoneNameDnssecDisable_Request['parameters']['path'];

export type POST_DnsByZoneNameDnssecEnable_Request = {
  parameters: operations['enable_dnssec_v1_dns__zone_name__dnssec_enable_post']['parameters'];
};
export type POST_DnsByZoneNameDnssecEnable_Request_Path = POST_DnsByZoneNameDnssecEnable_Request['parameters']['path'];

export type GET_DnsByZoneNameDomainForwards_Request = {
  parameters: operations['list_zone_domain_forwards_v1_dns__zone_name__domain_forwards_get']['parameters'];
};
export type GET_DnsByZoneNameDomainForwards_Request_Path = GET_DnsByZoneNameDomainForwards_Request['parameters']['path'];

export type GET_DnsByZoneNameEmailForwards_Request = {
  parameters: operations['list_zone_email_forwards_v1_dns__zone_name__email_forwards_get']['parameters'];
};
export type GET_DnsByZoneNameEmailForwards_Request_Path = GET_DnsByZoneNameEmailForwards_Request['parameters']['path'];

export type PATCH_DnsByZoneNameRecords_Request = {
  parameters: operations['patch_zone_records_v1_dns__zone_name__records_patch']['parameters'];
  requestBody: DnsZoneRecordsPatchOps;
};
export type PATCH_DnsByZoneNameRecords_Request_Path = PATCH_DnsByZoneNameRecords_Request['parameters']['path'];
export type PATCH_DnsByZoneNameRecords_Request_Body = PATCH_DnsByZoneNameRecords_Request['requestBody'];

export type PATCH_DnsByZoneNameRrsets_Request = {
  parameters: operations['patch_zone_rrsets_v1_dns__zone_name__rrsets_patch']['parameters'];
  requestBody: DnsZoneRrsetsPatchOps;
};
export type PATCH_DnsByZoneNameRrsets_Request_Path = PATCH_DnsByZoneNameRrsets_Request['parameters']['path'];
export type PATCH_DnsByZoneNameRrsets_Request_Body = PATCH_DnsByZoneNameRrsets_Request['requestBody'];

export type PUT_DnsByZoneNameRrsets_Request = {
  parameters: operations['update_zone_rrsets_v1_dns__zone_name__rrsets_put']['parameters'];
  requestBody: DnsZoneRrsetsCreate;
};
export type PUT_DnsByZoneNameRrsets_Request_Path = PUT_DnsByZoneNameRrsets_Request['parameters']['path'];
export type PUT_DnsByZoneNameRrsets_Request_Body = PUT_DnsByZoneNameRrsets_Request['requestBody'];

export type PATCH_DnsByZoneNameVanitySet_Request = {
  parameters: operations['update_zone_vanity_set_v1_dns__zone_name__vanity_set_patch']['parameters'];
  requestBody: ZoneVanitySetUpdate;
};
export type PATCH_DnsByZoneNameVanitySet_Request_Path = PATCH_DnsByZoneNameVanitySet_Request['parameters']['path'];
export type PATCH_DnsByZoneNameVanitySet_Request_Body = PATCH_DnsByZoneNameVanitySet_Request['requestBody'];

export type GET_DnsDomainForwards_Request = {
  parameters: operations['list_domain_forwards_by_zone_v1_dns_domain_forwards_get']['parameters'];
};
export type GET_DnsDomainForwards_Request_Query = GET_DnsDomainForwards_Request['parameters']['query'];

export type GET_DnsEmailForwards_Request = {
  parameters: operations['list_email_forwards_by_zone_v1_dns_email_forwards_get']['parameters'];
};
export type GET_DnsEmailForwards_Request_Query = GET_DnsEmailForwards_Request['parameters']['query'];

export type GET_DnsSummary_Request = {
};

export type GET_DomainForwards_Request = {
  parameters: operations['list_domain_forwards_v1_domain_forwards_get']['parameters'];
};
export type GET_DomainForwards_Request_Query = GET_DomainForwards_Request['parameters']['query'];

export type PATCH_DomainForwards_Request = {
  requestBody: DomainForwardPatchOps;
};
export type PATCH_DomainForwards_Request_Body = PATCH_DomainForwards_Request['requestBody'];

export type POST_DomainForwards_Request = {
  requestBody: DomainForwardCreateRequest;
};
export type POST_DomainForwards_Request_Body = POST_DomainForwards_Request['requestBody'];

export type DELETE_DomainForwardsByHostname_Request = {
  parameters: operations['delete_domain_forward_v1_domain_forwards__hostname__delete']['parameters'];
};
export type DELETE_DomainForwardsByHostname_Request_Path = DELETE_DomainForwardsByHostname_Request['parameters']['path'];

export type GET_DomainForwardsByHostname_Request = {
  parameters: operations['get_domain_forward_v1_domain_forwards__hostname__get']['parameters'];
};
export type GET_DomainForwardsByHostname_Request_Path = GET_DomainForwardsByHostname_Request['parameters']['path'];

export type POST_DomainForwardsByHostname_Request = {
  parameters: operations['create_domain_forward_set_v1_domain_forwards__hostname__post']['parameters'];
  requestBody: DomainForwardSetCreateRequest;
};
export type POST_DomainForwardsByHostname_Request_Path = POST_DomainForwardsByHostname_Request['parameters']['path'];
export type POST_DomainForwardsByHostname_Request_Body = POST_DomainForwardsByHostname_Request['requestBody'];

export type DELETE_DomainForwardsByHostnameByProtocol_Request = {
  parameters: operations['delete_domain_forward_set_v1_domain_forwards__hostname___protocol__delete']['parameters'];
};
export type DELETE_DomainForwardsByHostnameByProtocol_Request_Path = DELETE_DomainForwardsByHostnameByProtocol_Request['parameters']['path'];

export type GET_DomainForwardsByHostnameByProtocol_Request = {
  parameters: operations['get_domain_forward_set_v1_domain_forwards__hostname___protocol__get']['parameters'];
};
export type GET_DomainForwardsByHostnameByProtocol_Request_Path = GET_DomainForwardsByHostnameByProtocol_Request['parameters']['path'];

export type PUT_DomainForwardsByHostnameByProtocol_Request = {
  parameters: operations['update_domain_forward_set_v1_domain_forwards__hostname___protocol__put']['parameters'];
  requestBody: DomainForwardSetRequest;
};
export type PUT_DomainForwardsByHostnameByProtocol_Request_Path = PUT_DomainForwardsByHostnameByProtocol_Request['parameters']['path'];
export type PUT_DomainForwardsByHostnameByProtocol_Request_Body = PUT_DomainForwardsByHostnameByProtocol_Request['requestBody'];

export type PATCH_DomainForwardsByHostnameDisable_Request = {
  parameters: operations['disable_domain_forward_v1_domain_forwards__hostname__disable_patch']['parameters'];
};
export type PATCH_DomainForwardsByHostnameDisable_Request_Path = PATCH_DomainForwardsByHostnameDisable_Request['parameters']['path'];

export type PATCH_DomainForwardsByHostnameEnable_Request = {
  parameters: operations['enable_domain_forward_v1_domain_forwards__hostname__enable_patch']['parameters'];
};
export type PATCH_DomainForwardsByHostnameEnable_Request_Path = PATCH_DomainForwardsByHostnameEnable_Request['parameters']['path'];

export type GET_DomainForwardsMetrics_Request = {
  parameters: operations['metrics_v1_domain_forwards_metrics_get']['parameters'];
};
export type GET_DomainForwardsMetrics_Request_Query = GET_DomainForwardsMetrics_Request['parameters']['query'];

export type GET_DomainForwardsMetricsBrowser_Request = {
  parameters: operations['browser_stats_v1_domain_forwards_metrics_browser_get']['parameters'];
};
export type GET_DomainForwardsMetricsBrowser_Request_Query = GET_DomainForwardsMetricsBrowser_Request['parameters']['query'];

export type GET_DomainForwardsMetricsGeo_Request = {
  parameters: operations['geo_stats_v1_domain_forwards_metrics_geo_get']['parameters'];
};
export type GET_DomainForwardsMetricsGeo_Request_Query = GET_DomainForwardsMetricsGeo_Request['parameters']['query'];

export type GET_DomainForwardsMetricsPlatform_Request = {
  parameters: operations['platform_stats_v1_domain_forwards_metrics_platform_get']['parameters'];
};
export type GET_DomainForwardsMetricsPlatform_Request_Query = GET_DomainForwardsMetricsPlatform_Request['parameters']['query'];

export type GET_DomainForwardsMetricsReferrer_Request = {
  parameters: operations['referrer_stats_v1_domain_forwards_metrics_referrer_get']['parameters'];
};
export type GET_DomainForwardsMetricsReferrer_Request_Query = GET_DomainForwardsMetricsReferrer_Request['parameters']['query'];

export type GET_DomainForwardsMetricsStatusCode_Request = {
  parameters: operations['status_code_stats_v1_domain_forwards_metrics_status_code_get']['parameters'];
};
export type GET_DomainForwardsMetricsStatusCode_Request_Query = GET_DomainForwardsMetricsStatusCode_Request['parameters']['query'];

export type GET_DomainForwardsMetricsTimeSeries_Request = {
  parameters: operations['time_series_v1_domain_forwards_metrics_time_series_get']['parameters'];
};
export type GET_DomainForwardsMetricsTimeSeries_Request_Query = GET_DomainForwardsMetricsTimeSeries_Request['parameters']['query'];

export type GET_DomainForwardsMetricsUserAgent_Request = {
  parameters: operations['user_agent_stats_v1_domain_forwards_metrics_user_agent_get']['parameters'];
};
export type GET_DomainForwardsMetricsUserAgent_Request_Query = GET_DomainForwardsMetricsUserAgent_Request['parameters']['query'];

export type GET_DomainForwardsMetricsVisitsByKey_Request = {
  parameters: operations['visits_by_key_v1_domain_forwards_metrics_visits_by_key_get']['parameters'];
};
export type GET_DomainForwardsMetricsVisitsByKey_Request_Query = GET_DomainForwardsMetricsVisitsByKey_Request['parameters']['query'];

export type GET_Domains_Request = {
  parameters: operations['get_domains_v1_domains_get']['parameters'];
};
export type GET_Domains_Request_Query = GET_Domains_Request['parameters']['query'];

export type POST_Domains_Request = {
  requestBody: DomainCreate;
};
export type POST_Domains_Request_Body = POST_Domains_Request['requestBody'];

export type DELETE_DomainsByDomainReference_Request = {
  parameters: operations['delete_domain_v1_domains__domain_reference__delete']['parameters'];
};
export type DELETE_DomainsByDomainReference_Request_Path = DELETE_DomainsByDomainReference_Request['parameters']['path'];

export type GET_DomainsByDomainReference_Request = {
  parameters: operations['get_domain_v1_domains__domain_reference__get']['parameters'];
};
export type GET_DomainsByDomainReference_Request_Query = GET_DomainsByDomainReference_Request['parameters']['query'];
export type GET_DomainsByDomainReference_Request_Path = GET_DomainsByDomainReference_Request['parameters']['path'];

export type PATCH_DomainsByDomainReference_Request = {
  parameters: operations['update_domain_v1_domains__domain_reference__patch']['parameters'];
  requestBody: DomainUpdate;
};
export type PATCH_DomainsByDomainReference_Request_Path = PATCH_DomainsByDomainReference_Request['parameters']['path'];
export type PATCH_DomainsByDomainReference_Request_Body = PATCH_DomainsByDomainReference_Request['requestBody'];

export type DELETE_DomainsByDomainReferenceDnssec_Request = {
  parameters: operations['delete_dnssec_v1_domains__domain_reference__dnssec_delete']['parameters'];
};
export type DELETE_DomainsByDomainReferenceDnssec_Request_Path = DELETE_DomainsByDomainReferenceDnssec_Request['parameters']['path'];

export type GET_DomainsByDomainReferenceDnssec_Request = {
  parameters: operations['get_dnssec_v1_domains__domain_reference__dnssec_get']['parameters'];
};
export type GET_DomainsByDomainReferenceDnssec_Request_Path = GET_DomainsByDomainReferenceDnssec_Request['parameters']['path'];

export type PUT_DomainsByDomainReferenceDnssec_Request = {
  parameters: operations['create_or_update_dnssec_v1_domains__domain_reference__dnssec_put']['parameters'];
  requestBody: DomainDnssecDataCreate[];
};
export type PUT_DomainsByDomainReferenceDnssec_Request_Path = PUT_DomainsByDomainReferenceDnssec_Request['parameters']['path'];
export type PUT_DomainsByDomainReferenceDnssec_Request_Body = PUT_DomainsByDomainReferenceDnssec_Request['requestBody'];

export type POST_DomainsByDomainReferenceDnssecDisable_Request = {
  parameters: operations['disable_and_unpublish_dnssec_records_v1_domains__domain_reference__dnssec_disable_post']['parameters'];
};
export type POST_DomainsByDomainReferenceDnssecDisable_Request_Path = POST_DomainsByDomainReferenceDnssecDisable_Request['parameters']['path'];

export type POST_DomainsByDomainReferenceDnssecEnable_Request = {
  parameters: operations['enable_and_publish_dnssec_records_v1_domains__domain_reference__dnssec_enable_post']['parameters'];
};
export type POST_DomainsByDomainReferenceDnssecEnable_Request_Path = POST_DomainsByDomainReferenceDnssecEnable_Request['parameters']['path'];

export type POST_DomainsByDomainReferenceRenew_Request = {
  parameters: operations['renew_domain_v1_domains__domain_reference__renew_post']['parameters'];
  requestBody: DomainRenewRequest;
};
export type POST_DomainsByDomainReferenceRenew_Request_Path = POST_DomainsByDomainReferenceRenew_Request['parameters']['path'];
export type POST_DomainsByDomainReferenceRenew_Request_Body = POST_DomainsByDomainReferenceRenew_Request['requestBody'];

export type POST_DomainsByDomainReferenceRestore_Request = {
  parameters: operations['restore_domain_v1_domains__domain_reference__restore_post']['parameters'];
  requestBody: DomainRestoreRequest;
};
export type POST_DomainsByDomainReferenceRestore_Request_Path = POST_DomainsByDomainReferenceRestore_Request['parameters']['path'];
export type POST_DomainsByDomainReferenceRestore_Request_Body = POST_DomainsByDomainReferenceRestore_Request['requestBody'];

export type DELETE_DomainsByDomainReferenceTransfer_Request = {
  parameters: operations['cancel_domain_transfer_v1_domains__domain_reference__transfer_delete']['parameters'];
};
export type DELETE_DomainsByDomainReferenceTransfer_Request_Path = DELETE_DomainsByDomainReferenceTransfer_Request['parameters']['path'];

export type GET_DomainsCheck_Request = {
  parameters: operations['epp_check_domain_v1_domains_check_get']['parameters'];
};
export type GET_DomainsCheck_Request_Query = GET_DomainsCheck_Request['parameters']['query'];

export type POST_DomainsClaimsNotices_Request = {
  requestBody: ClaimsNoticesRequest;
};
export type POST_DomainsClaimsNotices_Request_Body = POST_DomainsClaimsNotices_Request['requestBody'];

export type GET_DomainSearchSuggest_Request = {
  parameters: operations['suggest_v1_domain_search_suggest_get']['parameters'];
};
export type GET_DomainSearchSuggest_Request_Query = GET_DomainSearchSuggest_Request['parameters']['query'];

export type GET_DomainsSummary_Request = {
};

export type POST_DomainsTldSpecificAtByDomainReferenceWithdraw_Request = {
  parameters: operations['withdraw_domain_v1_domains_tld_specific_at__domain_reference__withdraw_post']['parameters'];
  requestBody: DomainWithdrawRequest;
};
export type POST_DomainsTldSpecificAtByDomainReferenceWithdraw_Request_Path = POST_DomainsTldSpecificAtByDomainReferenceWithdraw_Request['parameters']['path'];
export type POST_DomainsTldSpecificAtByDomainReferenceWithdraw_Request_Body = POST_DomainsTldSpecificAtByDomainReferenceWithdraw_Request['requestBody'];

export type POST_DomainsTldSpecificBeByDomainReferenceAuthCodeRequest_Request = {
  parameters: operations['request_auth_code_v1_domains_tld_specific_be__domain_reference__auth_code_request_post']['parameters'];
};
export type POST_DomainsTldSpecificBeByDomainReferenceAuthCodeRequest_Request_Path = POST_DomainsTldSpecificBeByDomainReferenceAuthCodeRequest_Request['parameters']['path'];

export type POST_DomainsTldSpecificDeByDomainReferenceTransit_Request = {
  parameters: operations['transit_domain_v1_domains_tld_specific_de__domain_reference__transit_post']['parameters'];
  requestBody: DomainTransitRequest;
};
export type POST_DomainsTldSpecificDeByDomainReferenceTransit_Request_Path = POST_DomainsTldSpecificDeByDomainReferenceTransit_Request['parameters']['path'];
export type POST_DomainsTldSpecificDeByDomainReferenceTransit_Request_Body = POST_DomainsTldSpecificDeByDomainReferenceTransit_Request['requestBody'];

export type POST_DomainsTldSpecificEuByDomainReferenceAuthCodeRequest_Request = {
  parameters: operations['request_auth_code_v1_domains_tld_specific_eu__domain_reference__auth_code_request_post']['parameters'];
};
export type POST_DomainsTldSpecificEuByDomainReferenceAuthCodeRequest_Request_Path = POST_DomainsTldSpecificEuByDomainReferenceAuthCodeRequest_Request['parameters']['path'];

export type POST_DomainsTldSpecificLtByDomainReferenceAuthCodeRequest_Request = {
  parameters: operations['request_auth_code_v1_domains_tld_specific_lt__domain_reference__auth_code_request_post']['parameters'];
};
export type POST_DomainsTldSpecificLtByDomainReferenceAuthCodeRequest_Request_Path = POST_DomainsTldSpecificLtByDomainReferenceAuthCodeRequest_Request['parameters']['path'];

export type GET_DomainsTldSpecificNoApplicantDeclaration_Request = {
  parameters: operations['get_norid_declaration_by_token_v1_domains_tld_specific_no_applicant_declaration_get']['parameters'];
};
export type GET_DomainsTldSpecificNoApplicantDeclaration_Request_Query = GET_DomainsTldSpecificNoApplicantDeclaration_Request['parameters']['query'];

export type PUT_DomainsTldSpecificNoApplicantDeclaration_Request = {
  parameters: operations['confirm_norid_declaration_by_token_v1_domains_tld_specific_no_applicant_declaration_put']['parameters'];
  requestBody: NorIdDeclarationConfirmRequest;
};
export type PUT_DomainsTldSpecificNoApplicantDeclaration_Request_Query = PUT_DomainsTldSpecificNoApplicantDeclaration_Request['parameters']['query'];
export type PUT_DomainsTldSpecificNoApplicantDeclaration_Request_Body = PUT_DomainsTldSpecificNoApplicantDeclaration_Request['requestBody'];

export type POST_DomainsTldSpecificNoByDomainReferenceApplicantDeclaration_Request = {
  parameters: operations['submit_norid_declaration_v1_domains_tld_specific_no__domain_reference__applicant_declaration_post']['parameters'];
  requestBody: NorIdResellerDeclarationRequest;
};
export type POST_DomainsTldSpecificNoByDomainReferenceApplicantDeclaration_Request_Path = POST_DomainsTldSpecificNoByDomainReferenceApplicantDeclaration_Request['parameters']['path'];
export type POST_DomainsTldSpecificNoByDomainReferenceApplicantDeclaration_Request_Body = POST_DomainsTldSpecificNoByDomainReferenceApplicantDeclaration_Request['requestBody'];

export type POST_DomainsTldSpecificNoByDomainReferenceResendDeclarationEmail_Request = {
  parameters: operations['resend_norid_declaration_email_v1_domains_tld_specific_no__domain_reference__resend_declaration_email_post']['parameters'];
};
export type POST_DomainsTldSpecificNoByDomainReferenceResendDeclarationEmail_Request_Path = POST_DomainsTldSpecificNoByDomainReferenceResendDeclarationEmail_Request['parameters']['path'];

export type POST_DomainsTransfer_Request = {
  requestBody: DomainTransferIn;
};
export type POST_DomainsTransfer_Request_Body = POST_DomainsTransfer_Request['requestBody'];

export type GET_EmailForwards_Request = {
  parameters: operations['list_email_forwards_v1_email_forwards_get']['parameters'];
};
export type GET_EmailForwards_Request_Query = GET_EmailForwards_Request['parameters']['query'];

export type POST_EmailForwards_Request = {
  requestBody: EmailForwardCreate;
};
export type POST_EmailForwards_Request_Body = POST_EmailForwards_Request['requestBody'];

export type DELETE_EmailForwardsByEmailForwardId_Request = {
  parameters: operations['delete_email_forward_v1_email_forwards__email_forward_id__delete']['parameters'];
};
export type DELETE_EmailForwardsByEmailForwardId_Request_Path = DELETE_EmailForwardsByEmailForwardId_Request['parameters']['path'];

export type GET_EmailForwardsByEmailForwardId_Request = {
  parameters: operations['get_email_forward_v1_email_forwards__email_forward_id__get']['parameters'];
};
export type GET_EmailForwardsByEmailForwardId_Request_Path = GET_EmailForwardsByEmailForwardId_Request['parameters']['path'];

export type POST_EmailForwardsByEmailForwardIdAliases_Request = {
  parameters: operations['create_email_forward_alias_v1_email_forwards__email_forward_id__aliases_post']['parameters'];
  requestBody: EmailForwardAliasCreate;
};
export type POST_EmailForwardsByEmailForwardIdAliases_Request_Path = POST_EmailForwardsByEmailForwardIdAliases_Request['parameters']['path'];
export type POST_EmailForwardsByEmailForwardIdAliases_Request_Body = POST_EmailForwardsByEmailForwardIdAliases_Request['requestBody'];

export type DELETE_EmailForwardsByEmailForwardIdAliasesByAliasId_Request = {
  parameters: operations['delete_email_forward_alias_v1_email_forwards__email_forward_id__aliases__alias_id__delete']['parameters'];
};
export type DELETE_EmailForwardsByEmailForwardIdAliasesByAliasId_Request_Path = DELETE_EmailForwardsByEmailForwardIdAliasesByAliasId_Request['parameters']['path'];

export type PUT_EmailForwardsByEmailForwardIdAliasesByAliasId_Request = {
  parameters: operations['update_email_forward_alias_v1_email_forwards__email_forward_id__aliases__alias_id__put']['parameters'];
  requestBody: EmailForwardAliasUpdate;
};
export type PUT_EmailForwardsByEmailForwardIdAliasesByAliasId_Request_Path = PUT_EmailForwardsByEmailForwardIdAliasesByAliasId_Request['parameters']['path'];
export type PUT_EmailForwardsByEmailForwardIdAliasesByAliasId_Request_Body = PUT_EmailForwardsByEmailForwardIdAliasesByAliasId_Request['requestBody'];

export type PATCH_EmailForwardsByEmailForwardIdDisable_Request = {
  parameters: operations['disable_email_forward_v1_email_forwards__email_forward_id__disable_patch']['parameters'];
};
export type PATCH_EmailForwardsByEmailForwardIdDisable_Request_Path = PATCH_EmailForwardsByEmailForwardIdDisable_Request['parameters']['path'];

export type PATCH_EmailForwardsByEmailForwardIdEnable_Request = {
  parameters: operations['enable_email_forward_v1_email_forwards__email_forward_id__enable_patch']['parameters'];
};
export type PATCH_EmailForwardsByEmailForwardIdEnable_Request_Path = PATCH_EmailForwardsByEmailForwardIdEnable_Request['parameters']['path'];

export type GET_EmailForwardsByEmailForwardIdMetrics_Request = {
  parameters: operations['get_email_forward_metrics_v1_email_forwards__email_forward_id__metrics_get']['parameters'];
};
export type GET_EmailForwardsByEmailForwardIdMetrics_Request_Query = GET_EmailForwardsByEmailForwardIdMetrics_Request['parameters']['query'];
export type GET_EmailForwardsByEmailForwardIdMetrics_Request_Path = GET_EmailForwardsByEmailForwardIdMetrics_Request['parameters']['path'];

export type GET_Events_Request = {
  parameters: operations['get_events_v1_events_get']['parameters'];
};
export type GET_Events_Request_Query = GET_Events_Request['parameters']['query'];

export type GET_EventsByEventId_Request = {
  parameters: operations['get_event_v1_events__event_id__get']['parameters'];
};
export type GET_EventsByEventId_Request_Path = GET_EventsByEventId_Request['parameters']['path'];

export type PATCH_EventsByEventId_Request = {
  parameters: operations['acknowledge_event_v1_events__event_id__patch']['parameters'];
};
export type PATCH_EventsByEventId_Request_Path = PATCH_EventsByEventId_Request['parameters']['path'];

export type POST_Hosts_Request = {
  requestBody: HostCreate;
};
export type POST_Hosts_Request_Body = POST_Hosts_Request['requestBody'];

export type DELETE_HostsByHostReference_Request = {
  parameters: operations['delete_host_v1_hosts__host_reference__delete']['parameters'];
};
export type DELETE_HostsByHostReference_Request_Path = DELETE_HostsByHostReference_Request['parameters']['path'];

export type GET_HostsByHostReference_Request = {
  parameters: operations['get_host_v1_hosts__host_reference__get']['parameters'];
};
export type GET_HostsByHostReference_Request_Path = GET_HostsByHostReference_Request['parameters']['path'];

export type PUT_HostsByHostReference_Request = {
  parameters: operations['update_host_v1_hosts__host_reference__put']['parameters'];
  requestBody: HostUpdate;
};
export type PUT_HostsByHostReference_Request_Path = PUT_HostsByHostReference_Request['parameters']['path'];
export type PUT_HostsByHostReference_Request_Body = PUT_HostsByHostReference_Request['requestBody'];

export type DELETE_JobByJobId_Request = {
  parameters: operations['delete_job_v1_job__job_id__delete']['parameters'];
};
export type DELETE_JobByJobId_Request_Path = DELETE_JobByJobId_Request['parameters']['path'];

export type GET_JobByJobId_Request = {
  parameters: operations['get_job_v1_job__job_id__get']['parameters'];
};
export type GET_JobByJobId_Request_Path = GET_JobByJobId_Request['parameters']['path'];

export type POST_JobByJobIdPause_Request = {
  parameters: operations['pause_job_v1_job__job_id__pause_post']['parameters'];
};
export type POST_JobByJobIdPause_Request_Path = POST_JobByJobIdPause_Request['parameters']['path'];

export type POST_JobByJobIdResume_Request = {
  parameters: operations['resume_job_v1_job__job_id__resume_post']['parameters'];
};
export type POST_JobByJobIdResume_Request_Path = POST_JobByJobIdResume_Request['parameters']['path'];

export type POST_JobByJobIdRetry_Request = {
  parameters: operations['retry_job_v1_job__job_id__retry_post']['parameters'];
};
export type POST_JobByJobIdRetry_Request_Path = POST_JobByJobIdRetry_Request['parameters']['path'];

export type GET_Jobs_Request = {
  parameters: operations['list_batches_v1_jobs_get']['parameters'];
};
export type GET_Jobs_Request_Query = GET_Jobs_Request['parameters']['query'];

export type POST_Jobs_Request = {
  requestBody: JobBatchRequest;
};
export type POST_Jobs_Request_Body = POST_Jobs_Request['requestBody'];

export type DELETE_JobsByBatchId_Request = {
  parameters: operations['delete_batch_v1_jobs__batch_id__delete']['parameters'];
};
export type DELETE_JobsByBatchId_Request_Path = DELETE_JobsByBatchId_Request['parameters']['path'];

export type GET_JobsByBatchId_Request = {
  parameters: operations['get_batch_v1_jobs__batch_id__get']['parameters'];
};
export type GET_JobsByBatchId_Request_Path = GET_JobsByBatchId_Request['parameters']['path'];

export type GET_JobsByBatchIdJobs_Request = {
  parameters: operations['get_batch_jobs_v1_jobs__batch_id__jobs_get']['parameters'];
};
export type GET_JobsByBatchIdJobs_Request_Query = GET_JobsByBatchIdJobs_Request['parameters']['query'];
export type GET_JobsByBatchIdJobs_Request_Path = GET_JobsByBatchIdJobs_Request['parameters']['path'];

export type POST_JobsByBatchIdPause_Request = {
  parameters: operations['pause_batch_v1_jobs__batch_id__pause_post']['parameters'];
};
export type POST_JobsByBatchIdPause_Request_Path = POST_JobsByBatchIdPause_Request['parameters']['path'];

export type POST_JobsByBatchIdResume_Request = {
  parameters: operations['resume_batch_v1_jobs__batch_id__resume_post']['parameters'];
};
export type POST_JobsByBatchIdResume_Request_Path = POST_JobsByBatchIdResume_Request['parameters']['path'];

export type POST_JobsByBatchIdRetry_Request = {
  parameters: operations['retry_batch_v1_jobs__batch_id__retry_post']['parameters'];
};
export type POST_JobsByBatchIdRetry_Request_Query = POST_JobsByBatchIdRetry_Request['parameters']['query'];
export type POST_JobsByBatchIdRetry_Request_Path = POST_JobsByBatchIdRetry_Request['parameters']['path'];

export type GET_Organizations_Request = {
  parameters: operations['list_organizations_v1_organizations_get']['parameters'];
};
export type GET_Organizations_Request_Query = GET_Organizations_Request['parameters']['query'];

export type POST_Organizations_Request = {
  requestBody: OrganizationCreate;
};
export type POST_Organizations_Request_Body = POST_Organizations_Request['requestBody'];

export type GET_OrganizationsAiUsage_Request = {
  parameters: operations['get_ai_usage_series_v1_organizations_ai_usage_get']['parameters'];
};
export type GET_OrganizationsAiUsage_Request_Query = GET_OrganizationsAiUsage_Request['parameters']['query'];

export type GET_OrganizationsAiUsageSummary_Request = {
  parameters: operations['get_ai_usage_summary_v1_organizations_ai_usage_summary_get']['parameters'];
};
export type GET_OrganizationsAiUsageSummary_Request_Query = GET_OrganizationsAiUsageSummary_Request['parameters']['query'];

export type GET_OrganizationsAttributes_Request = {
  parameters: operations['get_current_organization_attributes_v1_organizations_attributes_get']['parameters'];
};
export type GET_OrganizationsAttributes_Request_Query = GET_OrganizationsAttributes_Request['parameters']['query'];

export type PATCH_OrganizationsAttributes_Request = {
  requestBody: OrganizationAttributeUpdate[];
};
export type PATCH_OrganizationsAttributes_Request_Body = PATCH_OrganizationsAttributes_Request['requestBody'];

export type DELETE_OrganizationsByOrganizationId_Request = {
  parameters: operations['delete_organization_v1_organizations__organization_id__delete']['parameters'];
};
export type DELETE_OrganizationsByOrganizationId_Request_Path = DELETE_OrganizationsByOrganizationId_Request['parameters']['path'];

export type GET_OrganizationsByOrganizationId_Request = {
  parameters: operations['get_organization_v1_organizations__organization_id__get']['parameters'];
};
export type GET_OrganizationsByOrganizationId_Request_Path = GET_OrganizationsByOrganizationId_Request['parameters']['path'];

export type PATCH_OrganizationsByOrganizationId_Request = {
  parameters: operations['update_organization_v1_organizations__organization_id__patch']['parameters'];
  requestBody: OrganizationUpdate;
};
export type PATCH_OrganizationsByOrganizationId_Request_Path = PATCH_OrganizationsByOrganizationId_Request['parameters']['path'];
export type PATCH_OrganizationsByOrganizationId_Request_Body = PATCH_OrganizationsByOrganizationId_Request['requestBody'];

export type GET_OrganizationsByOrganizationIdAttributes_Request = {
  parameters: operations['get_organization_attributes_v1_organizations__organization_id__attributes_get']['parameters'];
};
export type GET_OrganizationsByOrganizationIdAttributes_Request_Query = GET_OrganizationsByOrganizationIdAttributes_Request['parameters']['query'];
export type GET_OrganizationsByOrganizationIdAttributes_Request_Path = GET_OrganizationsByOrganizationIdAttributes_Request['parameters']['path'];

export type PATCH_OrganizationsByOrganizationIdAttributes_Request = {
  parameters: operations['update_organization_attributes_v1_organizations__organization_id__attributes_patch']['parameters'];
  requestBody: OrganizationAttributeUpdate[];
};
export type PATCH_OrganizationsByOrganizationIdAttributes_Request_Path = PATCH_OrganizationsByOrganizationIdAttributes_Request['parameters']['path'];
export type PATCH_OrganizationsByOrganizationIdAttributes_Request_Body = PATCH_OrganizationsByOrganizationIdAttributes_Request['requestBody'];

export type GET_OrganizationsByOrganizationIdBillingInvoices_Request = {
  parameters: operations['list_invoices_v1_organizations__organization_id__billing_invoices_get']['parameters'];
};
export type GET_OrganizationsByOrganizationIdBillingInvoices_Request_Query = GET_OrganizationsByOrganizationIdBillingInvoices_Request['parameters']['query'];
export type GET_OrganizationsByOrganizationIdBillingInvoices_Request_Path = GET_OrganizationsByOrganizationIdBillingInvoices_Request['parameters']['path'];

export type GET_OrganizationsByOrganizationIdPricingProductTypeByProductType_Request = {
  parameters: operations['get_pricing_plans_v1_organizations__organization_id__pricing_product_type__product_type__get']['parameters'];
};
export type GET_OrganizationsByOrganizationIdPricingProductTypeByProductType_Request_Query = GET_OrganizationsByOrganizationIdPricingProductTypeByProductType_Request['parameters']['query'];
export type GET_OrganizationsByOrganizationIdPricingProductTypeByProductType_Request_Path = GET_OrganizationsByOrganizationIdPricingProductTypeByProductType_Request['parameters']['path'];

export type GET_OrganizationsByOrganizationIdTransactions_Request = {
  parameters: operations['get_transactions_v1_organizations__organization_id__transactions_get']['parameters'];
};
export type GET_OrganizationsByOrganizationIdTransactions_Request_Query = GET_OrganizationsByOrganizationIdTransactions_Request['parameters']['query'];
export type GET_OrganizationsByOrganizationIdTransactions_Request_Path = GET_OrganizationsByOrganizationIdTransactions_Request['parameters']['path'];

export type GET_OrganizationsByOrganizationIdTransactionsByTransactionId_Request = {
  parameters: operations['get_transaction_v1_organizations__organization_id__transactions__transaction_id__get']['parameters'];
};
export type GET_OrganizationsByOrganizationIdTransactionsByTransactionId_Request_Path = GET_OrganizationsByOrganizationIdTransactionsByTransactionId_Request['parameters']['path'];

export type GET_OrganizationsIpRestrictions_Request = {
};

export type POST_OrganizationsIpRestrictions_Request = {
  requestBody: IpRestrictionCreate;
};
export type POST_OrganizationsIpRestrictions_Request_Body = POST_OrganizationsIpRestrictions_Request['requestBody'];

export type DELETE_OrganizationsIpRestrictionsByIpRestrictionId_Request = {
  parameters: operations['delete_ip_restriction_v1_organizations_ip_restrictions__ip_restriction_id__delete']['parameters'];
};
export type DELETE_OrganizationsIpRestrictionsByIpRestrictionId_Request_Path = DELETE_OrganizationsIpRestrictionsByIpRestrictionId_Request['parameters']['path'];

export type GET_OrganizationsIpRestrictionsByIpRestrictionId_Request = {
  parameters: operations['get_ip_restriction_v1_organizations_ip_restrictions__ip_restriction_id__get']['parameters'];
};
export type GET_OrganizationsIpRestrictionsByIpRestrictionId_Request_Path = GET_OrganizationsIpRestrictionsByIpRestrictionId_Request['parameters']['path'];

export type PATCH_OrganizationsIpRestrictionsByIpRestrictionId_Request = {
  parameters: operations['update_ip_restriction_v1_organizations_ip_restrictions__ip_restriction_id__patch']['parameters'];
  requestBody: IpRestrictionUpdate;
};
export type PATCH_OrganizationsIpRestrictionsByIpRestrictionId_Request_Path = PATCH_OrganizationsIpRestrictionsByIpRestrictionId_Request['parameters']['path'];
export type PATCH_OrganizationsIpRestrictionsByIpRestrictionId_Request_Body = PATCH_OrganizationsIpRestrictionsByIpRestrictionId_Request['requestBody'];

export type GET_OrganizationsRolePermissions_Request = {
};

export type GET_OrganizationsRoles_Request = {
};

export type POST_OrganizationsRoles_Request = {
  requestBody: CustomRoleCreate;
};
export type POST_OrganizationsRoles_Request_Body = POST_OrganizationsRoles_Request['requestBody'];

export type DELETE_OrganizationsRolesByLabel_Request = {
  parameters: operations['delete_role_v1_organizations_roles__label__delete']['parameters'];
};
export type DELETE_OrganizationsRolesByLabel_Request_Path = DELETE_OrganizationsRolesByLabel_Request['parameters']['path'];

export type GET_OrganizationsRolesByLabel_Request = {
  parameters: operations['get_role_v1_organizations_roles__label__get']['parameters'];
};
export type GET_OrganizationsRolesByLabel_Request_Path = GET_OrganizationsRolesByLabel_Request['parameters']['path'];

export type PATCH_OrganizationsRolesByLabel_Request = {
  parameters: operations['update_role_v1_organizations_roles__label__patch']['parameters'];
  requestBody: CustomRoleUpdate;
};
export type PATCH_OrganizationsRolesByLabel_Request_Path = PATCH_OrganizationsRolesByLabel_Request['parameters']['path'];
export type PATCH_OrganizationsRolesByLabel_Request_Body = PATCH_OrganizationsRolesByLabel_Request['requestBody'];

export type GET_OrganizationsUsers_Request = {
  parameters: operations['list_users_v1_organizations_users_get']['parameters'];
};
export type GET_OrganizationsUsers_Request_Query = GET_OrganizationsUsers_Request['parameters']['query'];

export type GET_Parking_Request = {
  parameters: operations['list_parking_v1_parking_get']['parameters'];
};
export type GET_Parking_Request_Query = GET_Parking_Request['parameters']['query'];

export type GET_ParkingByParkingReferenceMetrics_Request = {
  parameters: operations['get_parking_metrics_v1_parking__parking_reference__metrics_get']['parameters'];
};
export type GET_ParkingByParkingReferenceMetrics_Request_Query = GET_ParkingByParkingReferenceMetrics_Request['parameters']['query'];
export type GET_ParkingByParkingReferenceMetrics_Request_Path = GET_ParkingByParkingReferenceMetrics_Request['parameters']['path'];

export type GET_ParkingMetrics_Request = {
  parameters: operations['get_total_parking_metrics_v1_parking_metrics_get']['parameters'];
};
export type GET_ParkingMetrics_Request_Query = GET_ParkingMetrics_Request['parameters']['query'];

export type POST_ParkingSignup_Request = {
  requestBody: ParkingSignupRequest;
};
export type POST_ParkingSignup_Request_Body = POST_ParkingSignup_Request['requestBody'];

export type GET_ParkingSignupStatus_Request = {
};

export type GET_Reports_Request = {
  parameters: operations['list_reports_v1_reports_get']['parameters'];
};
export type GET_Reports_Request_Query = GET_Reports_Request['parameters']['query'];

export type POST_Reports_Request = {
};

export type GET_ReportsByReportId_Request = {
  parameters: operations['get_report_v1_reports__report_id__get']['parameters'];
};
export type GET_ReportsByReportId_Request_Path = GET_ReportsByReportId_Request['parameters']['path'];

export type GET_ReportsByReportIdDownload_Request = {
  parameters: operations['download_report_v1_reports__report_id__download_get']['parameters'];
};
export type GET_ReportsByReportIdDownload_Request_Path = GET_ReportsByReportIdDownload_Request['parameters']['path'];

export type GET_Tags_Request = {
  parameters: operations['list_tags_v1_tags_get']['parameters'];
};
export type GET_Tags_Request_Query = GET_Tags_Request['parameters']['query'];

export type POST_Tags_Request = {
  requestBody: TagCreate;
};
export type POST_Tags_Request_Body = POST_Tags_Request['requestBody'];

export type DELETE_TagsByTagId_Request = {
  parameters: operations['delete_tag_v1_tags__tag_id__delete']['parameters'];
};
export type DELETE_TagsByTagId_Request_Path = DELETE_TagsByTagId_Request['parameters']['path'];

export type GET_TagsByTagId_Request = {
  parameters: operations['get_tag_v1_tags__tag_id__get']['parameters'];
};
export type GET_TagsByTagId_Request_Path = GET_TagsByTagId_Request['parameters']['path'];

export type PATCH_TagsByTagId_Request = {
  parameters: operations['update_tag_v1_tags__tag_id__patch']['parameters'];
  requestBody: TagUpdate;
};
export type PATCH_TagsByTagId_Request_Path = PATCH_TagsByTagId_Request['parameters']['path'];
export type PATCH_TagsByTagId_Request_Body = PATCH_TagsByTagId_Request['requestBody'];

export type POST_TagsByTagIdObjects_Request = {
  parameters: operations['update_tag_objects_v1_tags__tag_id__objects_post']['parameters'];
  requestBody: ObjectTagChanges;
};
export type POST_TagsByTagIdObjects_Request_Path = POST_TagsByTagIdObjects_Request['parameters']['path'];
export type POST_TagsByTagIdObjects_Request_Body = POST_TagsByTagIdObjects_Request['requestBody'];

export type POST_TagsObjects_Request = {
  requestBody: BulkObjectTagChanges;
};
export type POST_TagsObjects_Request_Body = POST_TagsObjects_Request['requestBody'];

export type GET_Tlds_Request = {
  parameters: operations['get_tld_specifications_v1_tlds__get']['parameters'];
};
export type GET_Tlds_Request_Query = GET_Tlds_Request['parameters']['query'];

export type GET_TldsByTld_Request = {
  parameters: operations['get_tld_spec_v1_tlds__tld__get']['parameters'];
};
export type GET_TldsByTld_Request_Path = GET_TldsByTld_Request['parameters']['path'];

export type GET_TldsPortfolio_Request = {
};

export type POST_Users_Request = {
  requestBody: UserCreate;
};
export type POST_Users_Request_Body = POST_Users_Request['requestBody'];

export type DELETE_UsersByUserId_Request = {
  parameters: operations['delete_user_v1_users__user_id__delete']['parameters'];
};
export type DELETE_UsersByUserId_Request_Path = DELETE_UsersByUserId_Request['parameters']['path'];

export type GET_UsersByUserId_Request = {
  parameters: operations['get_user_v1_users__user_id__get']['parameters'];
};
export type GET_UsersByUserId_Request_Query = GET_UsersByUserId_Request['parameters']['query'];
export type GET_UsersByUserId_Request_Path = GET_UsersByUserId_Request['parameters']['path'];

export type PATCH_UsersByUserId_Request = {
  parameters: operations['update_user_v1_users__user_id__patch']['parameters'];
  requestBody: UserUpdate;
};
export type PATCH_UsersByUserId_Request_Path = PATCH_UsersByUserId_Request['parameters']['path'];
export type PATCH_UsersByUserId_Request_Body = PATCH_UsersByUserId_Request['requestBody'];

export type GET_UsersByUserIdPermissions_Request = {
  parameters: operations['get_user_permissions_v1_users__user_id__permissions_get']['parameters'];
};
export type GET_UsersByUserIdPermissions_Request_Path = GET_UsersByUserIdPermissions_Request['parameters']['path'];

export type GET_UsersByUserIdRole_Request = {
  parameters: operations['get_role_v1_users__user_id__role_get']['parameters'];
};
export type GET_UsersByUserIdRole_Request_Path = GET_UsersByUserIdRole_Request['parameters']['path'];

export type PUT_UsersByUserIdRole_Request = {
  parameters: operations['set_user_role_v1_users__user_id__role_put']['parameters'];
  requestBody: PublicRoleAssignmentRequest;
};
export type PUT_UsersByUserIdRole_Request_Path = PUT_UsersByUserIdRole_Request['parameters']['path'];
export type PUT_UsersByUserIdRole_Request_Body = PUT_UsersByUserIdRole_Request['requestBody'];

export type GET_UsersMe_Request = {
  parameters: operations['get_current_user_v1_users_me_get']['parameters'];
};
export type GET_UsersMe_Request_Query = GET_UsersMe_Request['parameters']['query'];

export type GET_VanityNameserverSets_Request = {
  parameters: operations['list_vanity_nameserver_sets_v1_vanity_nameserver_sets_get']['parameters'];
};
export type GET_VanityNameserverSets_Request_Query = GET_VanityNameserverSets_Request['parameters']['query'];

export type POST_VanityNameserverSets_Request = {
  requestBody: VanityNameserverSetCreate;
};
export type POST_VanityNameserverSets_Request_Body = POST_VanityNameserverSets_Request['requestBody'];

export type DELETE_VanityNameserverSetsBySetId_Request = {
  parameters: operations['delete_vanity_nameserver_set_v1_vanity_nameserver_sets__set_id__delete']['parameters'];
};
export type DELETE_VanityNameserverSetsBySetId_Request_Path = DELETE_VanityNameserverSetsBySetId_Request['parameters']['path'];

export type GET_VanityNameserverSetsBySetId_Request = {
  parameters: operations['get_vanity_nameserver_set_v1_vanity_nameserver_sets__set_id__get']['parameters'];
};
export type GET_VanityNameserverSetsBySetId_Request_Path = GET_VanityNameserverSetsBySetId_Request['parameters']['path'];

export type PATCH_VanityNameserverSetsBySetIdDefault_Request = {
  parameters: operations['set_vanity_nameserver_set_default_v1_vanity_nameserver_sets__set_id__default_patch']['parameters'];
};
export type PATCH_VanityNameserverSetsBySetIdDefault_Request_Path = PATCH_VanityNameserverSetsBySetIdDefault_Request['parameters']['path'];

export type POST_VanityNameserverSetsBySetIdRestore_Request = {
  parameters: operations['restore_vanity_nameserver_set_v1_vanity_nameserver_sets__set_id__restore_post']['parameters'];
};
export type POST_VanityNameserverSetsBySetIdRestore_Request_Path = POST_VanityNameserverSetsBySetIdRestore_Request['parameters']['path'];

export type POST_VanityNameserverSetsBySetIdRetry_Request = {
  parameters: operations['retry_vanity_nameserver_set_v1_vanity_nameserver_sets__set_id__retry_post']['parameters'];
};
export type POST_VanityNameserverSetsBySetIdRetry_Request_Path = POST_VanityNameserverSetsBySetIdRetry_Request['parameters']['path'];

export type GET_VanityNameserverSetsBySetIdZones_Request = {
  parameters: operations['list_zones_referencing_vanity_nameserver_set_v1_vanity_nameserver_sets__set_id__zones_get']['parameters'];
};
export type GET_VanityNameserverSetsBySetIdZones_Request_Query = GET_VanityNameserverSetsBySetIdZones_Request['parameters']['query'];
export type GET_VanityNameserverSetsBySetIdZones_Request_Path = GET_VanityNameserverSetsBySetIdZones_Request['parameters']['path'];

export type POST_VanityNameserverSetsCheck_Request = {
  requestBody: VanityNsCheckPublicReq;
};
export type POST_VanityNameserverSetsCheck_Request_Body = POST_VanityNameserverSetsCheck_Request['requestBody'];

export type DELETE_VanityNameserverSetsDefault_Request = {
};

export type GET_WhitelabelBranding_Request = {
};

export type POST_WhitelabelBranding_Request = {
  requestBody: WhitelabelBrandingCreate;
};
export type POST_WhitelabelBranding_Request_Body = POST_WhitelabelBranding_Request['requestBody'];

export type POST_WhitelabelBrandingEmailPreview_Request = {
  requestBody: PreviewMailReq;
};
export type POST_WhitelabelBrandingEmailPreview_Request_Body = POST_WhitelabelBrandingEmailPreview_Request['requestBody'];

export type GET_WhitelabelBrandingEmailTemplates_Request = {
};

export type POST_WhitelabelBrandingRecheck_Request = {
};
