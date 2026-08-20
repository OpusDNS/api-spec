export const AI_CONCIERGE_CONTEXTS_BY_CONTEXT_ID_ENDPOINT = '/v1/ai-concierge/contexts/{context_id}';
export const AI_CONCIERGE_CONVERSATIONS_ENDPOINT = '/v1/ai-concierge/conversations';
export const AI_CONCIERGE_CONVERSATIONS_BY_CONVERSATION_ID_ENDPOINT = '/v1/ai-concierge/conversations/{conversation_id}';
export const AI_CONCIERGE_CONVERSATIONS_BY_CONVERSATION_ID_CONTEXTS_ENDPOINT = '/v1/ai-concierge/conversations/{conversation_id}/contexts';
export const AI_CONCIERGE_CONVERSATIONS_BY_CONVERSATION_ID_MESSAGES_ENDPOINT = '/v1/ai-concierge/conversations/{conversation_id}/messages';
export const AI_CONCIERGE_CONVERSATIONS_BY_CONVERSATION_ID_MESSAGES_BY_MESSAGE_ID_ENDPOINT = '/v1/ai-concierge/conversations/{conversation_id}/messages/{message_id}';
export const AI_CONCIERGE_MEMORY_FACTS_ENDPOINT = '/v1/ai-concierge/memory/facts';
export const AI_CONCIERGE_MEMORY_FACTS_BY_FACT_ID_ENDPOINT = '/v1/ai-concierge/memory/facts/{fact_id}';
export const ARCHIVE_EMAIL_FORWARD_LOGS_ALIASES_BY_EMAIL_FORWARD_ALIAS_ID_ENDPOINT = '/v1/archive/email-forward-logs/aliases/{email_forward_alias_id}';
export const ARCHIVE_EMAIL_FORWARD_LOGS_BY_EMAIL_FORWARD_ID_ENDPOINT = '/v1/archive/email-forward-logs/{email_forward_id}';
export const ARCHIVE_OBJECT_LOGS_ENDPOINT = '/v1/archive/object-logs';
export const ARCHIVE_OBJECT_LOGS_BY_OBJECT_ID_ENDPOINT = '/v1/archive/object-logs/{object_id}';
export const ARCHIVE_REQUEST_HISTORY_ENDPOINT = '/v1/archive/request-history';
export const AUTH_CLIENT_CREDENTIALS_INTROSPECT_ENDPOINT = '/v1/auth/client_credentials/introspect';
export const AUTH_TOKEN_ENDPOINT = '/v1/auth/token';
export const AVAILABILITY_ENDPOINT = '/v1/availability';
export const AVAILABILITY_STREAM_ENDPOINT = '/v1/availability/stream';
export const CONTACTS_ENDPOINT = '/v1/contacts';
export const CONTACTS_ATTRIBUTE_SETS_ENDPOINT = '/v1/contacts/attribute-sets';
export const CONTACTS_ATTRIBUTE_SETS_BY_CONTACT_ATTRIBUTE_SET_ID_ENDPOINT = '/v1/contacts/attribute-sets/{contact_attribute_set_id}';
export const CONTACTS_VERIFICATION_ENDPOINT = '/v1/contacts/verification';
export const CONTACTS_VERIFY_ENDPOINT = '/v1/contacts/verify';
export const CONTACTS_BY_CONTACT_ID_ENDPOINT = '/v1/contacts/{contact_id}';
export const CONTACTS_BY_CONTACT_ID_LINK_BY_CONTACT_ATTRIBUTE_SET_ID_ENDPOINT = '/v1/contacts/{contact_id}/link/{contact_attribute_set_id}';
export const CONTACTS_BY_CONTACT_ID_VERIFICATION_ENDPOINT = '/v1/contacts/{contact_id}/verification';
export const CONTACTS_BY_CONTACT_ID_VERIFICATIONS_ENDPOINT = '/v1/contacts/{contact_id}/verifications';
export const CONTACTS_BY_CONTACT_ID_VERIFICATIONS_ATTEST_ENDPOINT = '/v1/contacts/{contact_id}/verifications/attest';
export const DNS_ENDPOINT = '/v1/dns';
export const DNS_DOMAIN_FORWARDS_ENDPOINT = '/v1/dns/domain-forwards';
export const DNS_EMAIL_FORWARDS_ENDPOINT = '/v1/dns/email-forwards';
export const DNS_SUMMARY_ENDPOINT = '/v1/dns/summary';
export const DNS_BY_ZONE_NAME_ENDPOINT = '/v1/dns/{zone_name}';
export const DNS_BY_ZONE_NAME_DNSSEC_DISABLE_ENDPOINT = '/v1/dns/{zone_name}/dnssec/disable';
export const DNS_BY_ZONE_NAME_DNSSEC_ENABLE_ENDPOINT = '/v1/dns/{zone_name}/dnssec/enable';
export const DNS_BY_ZONE_NAME_DOMAIN_FORWARDS_ENDPOINT = '/v1/dns/{zone_name}/domain-forwards';
export const DNS_BY_ZONE_NAME_EMAIL_FORWARDS_ENDPOINT = '/v1/dns/{zone_name}/email-forwards';
export const DNS_BY_ZONE_NAME_RECORDS_ENDPOINT = '/v1/dns/{zone_name}/records';
export const DNS_BY_ZONE_NAME_RRSETS_ENDPOINT = '/v1/dns/{zone_name}/rrsets';
export const DNS_BY_ZONE_NAME_VANITY_SET_ENDPOINT = '/v1/dns/{zone_name}/vanity-set';
export const DOMAIN_FORWARDS_ENDPOINT = '/v1/domain-forwards';
export const DOMAIN_FORWARDS_METRICS_ENDPOINT = '/v1/domain-forwards/metrics';
export const DOMAIN_FORWARDS_METRICS_BROWSER_ENDPOINT = '/v1/domain-forwards/metrics/browser';
export const DOMAIN_FORWARDS_METRICS_GEO_ENDPOINT = '/v1/domain-forwards/metrics/geo';
export const DOMAIN_FORWARDS_METRICS_PLATFORM_ENDPOINT = '/v1/domain-forwards/metrics/platform';
export const DOMAIN_FORWARDS_METRICS_REFERRER_ENDPOINT = '/v1/domain-forwards/metrics/referrer';
export const DOMAIN_FORWARDS_METRICS_STATUS_CODE_ENDPOINT = '/v1/domain-forwards/metrics/status-code';
export const DOMAIN_FORWARDS_METRICS_TIME_SERIES_ENDPOINT = '/v1/domain-forwards/metrics/time-series';
export const DOMAIN_FORWARDS_METRICS_USER_AGENT_ENDPOINT = '/v1/domain-forwards/metrics/user-agent';
export const DOMAIN_FORWARDS_METRICS_VISITS_BY_KEY_ENDPOINT = '/v1/domain-forwards/metrics/visits-by-key';
export const DOMAIN_FORWARDS_BY_HOSTNAME_ENDPOINT = '/v1/domain-forwards/{hostname}';
export const DOMAIN_FORWARDS_BY_HOSTNAME_DISABLE_ENDPOINT = '/v1/domain-forwards/{hostname}/disable';
export const DOMAIN_FORWARDS_BY_HOSTNAME_ENABLE_ENDPOINT = '/v1/domain-forwards/{hostname}/enable';
export const DOMAIN_FORWARDS_BY_HOSTNAME_BY_PROTOCOL_ENDPOINT = '/v1/domain-forwards/{hostname}/{protocol}';
export const DOMAIN_SEARCH_SUGGEST_ENDPOINT = '/v1/domain-search/suggest';
export const DOMAINS_ENDPOINT = '/v1/domains';
export const DOMAINS_CHECK_ENDPOINT = '/v1/domains/check';
export const DOMAINS_CLAIMS_NOTICES_ENDPOINT = '/v1/domains/claims-notices';
export const DOMAINS_SUMMARY_ENDPOINT = '/v1/domains/summary';
export const DOMAINS_TLD_SPECIFIC_AT_BY_DOMAIN_REFERENCE_WITHDRAW_ENDPOINT = '/v1/domains/tld-specific/at/{domain_reference}/withdraw';
export const DOMAINS_TLD_SPECIFIC_BE_BY_DOMAIN_REFERENCE_AUTH_CODE_REQUEST_ENDPOINT = '/v1/domains/tld-specific/be/{domain_reference}/auth_code/request';
export const DOMAINS_TLD_SPECIFIC_CYMRU_BY_DOMAIN_REFERENCE_AUTH_CODE_REQUEST_ENDPOINT = '/v1/domains/tld-specific/cymru/{domain_reference}/auth_code/request';
export const DOMAINS_TLD_SPECIFIC_CZ_BY_DOMAIN_REFERENCE_AUTH_CODE_REQUEST_ENDPOINT = '/v1/domains/tld-specific/cz/{domain_reference}/auth_code/request';
export const DOMAINS_TLD_SPECIFIC_DE_BY_DOMAIN_REFERENCE_TRANSIT_ENDPOINT = '/v1/domains/tld-specific/de/{domain_reference}/transit';
export const DOMAINS_TLD_SPECIFIC_EU_BY_DOMAIN_REFERENCE_AUTH_CODE_REQUEST_ENDPOINT = '/v1/domains/tld-specific/eu/{domain_reference}/auth_code/request';
export const DOMAINS_TLD_SPECIFIC_LT_BY_DOMAIN_REFERENCE_AUTH_CODE_REQUEST_ENDPOINT = '/v1/domains/tld-specific/lt/{domain_reference}/auth_code/request';
export const DOMAINS_TLD_SPECIFIC_NO_APPLICANT_DECLARATION_ENDPOINT = '/v1/domains/tld-specific/no/applicant-declaration';
export const DOMAINS_TLD_SPECIFIC_NO_BY_DOMAIN_REFERENCE_APPLICANT_DECLARATION_ENDPOINT = '/v1/domains/tld-specific/no/{domain_reference}/applicant-declaration';
export const DOMAINS_TLD_SPECIFIC_NO_BY_DOMAIN_REFERENCE_RESEND_DECLARATION_EMAIL_ENDPOINT = '/v1/domains/tld-specific/no/{domain_reference}/resend-declaration-email';
export const DOMAINS_TLD_SPECIFIC_SE_BY_DOMAIN_REFERENCE_AUTH_CODE_REQUEST_ENDPOINT = '/v1/domains/tld-specific/se/{domain_reference}/auth_code/request';
export const DOMAINS_TLD_SPECIFIC_WALES_BY_DOMAIN_REFERENCE_AUTH_CODE_REQUEST_ENDPOINT = '/v1/domains/tld-specific/wales/{domain_reference}/auth_code/request';
export const DOMAINS_TRANSFER_ENDPOINT = '/v1/domains/transfer';
export const DOMAINS_BY_DOMAIN_REFERENCE_ENDPOINT = '/v1/domains/{domain_reference}';
export const DOMAINS_BY_DOMAIN_REFERENCE_DNSSEC_ENDPOINT = '/v1/domains/{domain_reference}/dnssec';
export const DOMAINS_BY_DOMAIN_REFERENCE_DNSSEC_DISABLE_ENDPOINT = '/v1/domains/{domain_reference}/dnssec/disable';
export const DOMAINS_BY_DOMAIN_REFERENCE_DNSSEC_ENABLE_ENDPOINT = '/v1/domains/{domain_reference}/dnssec/enable';
export const DOMAINS_BY_DOMAIN_REFERENCE_RENEW_ENDPOINT = '/v1/domains/{domain_reference}/renew';
export const DOMAINS_BY_DOMAIN_REFERENCE_RESTORE_ENDPOINT = '/v1/domains/{domain_reference}/restore';
export const DOMAINS_BY_DOMAIN_REFERENCE_TRANSFER_ENDPOINT = '/v1/domains/{domain_reference}/transfer';
export const DOMAINS_BY_DOMAIN_REFERENCE_TRANSFER_OUTBOUND_ENDPOINT = '/v1/domains/{domain_reference}/transfer/outbound';
export const EMAIL_FORWARDS_ENDPOINT = '/v1/email-forwards';
export const EMAIL_FORWARDS_BY_EMAIL_FORWARD_ID_ENDPOINT = '/v1/email-forwards/{email_forward_id}';
export const EMAIL_FORWARDS_BY_EMAIL_FORWARD_ID_ALIASES_ENDPOINT = '/v1/email-forwards/{email_forward_id}/aliases';
export const EMAIL_FORWARDS_BY_EMAIL_FORWARD_ID_ALIASES_BY_ALIAS_ID_ENDPOINT = '/v1/email-forwards/{email_forward_id}/aliases/{alias_id}';
export const EMAIL_FORWARDS_BY_EMAIL_FORWARD_ID_DISABLE_ENDPOINT = '/v1/email-forwards/{email_forward_id}/disable';
export const EMAIL_FORWARDS_BY_EMAIL_FORWARD_ID_ENABLE_ENDPOINT = '/v1/email-forwards/{email_forward_id}/enable';
export const EMAIL_FORWARDS_BY_EMAIL_FORWARD_ID_METRICS_ENDPOINT = '/v1/email-forwards/{email_forward_id}/metrics';
export const EVENTS_ENDPOINT = '/v1/events';
export const EVENTS_BY_EVENT_ID_ENDPOINT = '/v1/events/{event_id}';
export const HOSTS_ENDPOINT = '/v1/hosts';
export const HOSTS_BY_HOST_REFERENCE_ENDPOINT = '/v1/hosts/{host_reference}';
export const JOB_BY_JOB_ID_ENDPOINT = '/v1/job/{job_id}';
export const JOB_BY_JOB_ID_PAUSE_ENDPOINT = '/v1/job/{job_id}/pause';
export const JOB_BY_JOB_ID_RESUME_ENDPOINT = '/v1/job/{job_id}/resume';
export const JOB_BY_JOB_ID_RETRY_ENDPOINT = '/v1/job/{job_id}/retry';
export const JOBS_ENDPOINT = '/v1/jobs';
export const JOBS_BY_BATCH_ID_ENDPOINT = '/v1/jobs/{batch_id}';
export const JOBS_BY_BATCH_ID_JOBS_ENDPOINT = '/v1/jobs/{batch_id}/jobs';
export const JOBS_BY_BATCH_ID_PAUSE_ENDPOINT = '/v1/jobs/{batch_id}/pause';
export const JOBS_BY_BATCH_ID_RESUME_ENDPOINT = '/v1/jobs/{batch_id}/resume';
export const JOBS_BY_BATCH_ID_RETRY_ENDPOINT = '/v1/jobs/{batch_id}/retry';
export const ORGANIZATIONS_ENDPOINT = '/v1/organizations';
export const ORGANIZATIONS_ATTRIBUTES_ENDPOINT = '/v1/organizations/attributes';
export const ORGANIZATIONS_IP_RESTRICTIONS_ENDPOINT = '/v1/organizations/ip-restrictions';
export const ORGANIZATIONS_IP_RESTRICTIONS_BY_IP_RESTRICTION_ID_ENDPOINT = '/v1/organizations/ip-restrictions/{ip_restriction_id}';
export const ORGANIZATIONS_ROLE_PERMISSIONS_ENDPOINT = '/v1/organizations/role-permissions';
export const ORGANIZATIONS_ROLES_ENDPOINT = '/v1/organizations/roles';
export const ORGANIZATIONS_ROLES_BY_LABEL_ENDPOINT = '/v1/organizations/roles/{label}';
export const ORGANIZATIONS_USERS_ENDPOINT = '/v1/organizations/users';
export const ORGANIZATIONS_BY_ORGANIZATION_ID_ENDPOINT = '/v1/organizations/{organization_id}';
export const ORGANIZATIONS_BY_ORGANIZATION_ID_ATTRIBUTES_ENDPOINT = '/v1/organizations/{organization_id}/attributes';
export const ORGANIZATIONS_BY_ORGANIZATION_ID_BILLING_INVOICES_ENDPOINT = '/v1/organizations/{organization_id}/billing/invoices';
export const ORGANIZATIONS_BY_ORGANIZATION_ID_PRICING_PRODUCT_TYPE_BY_PRODUCT_TYPE_ENDPOINT = '/v1/organizations/{organization_id}/pricing/product-type/{product_type}';
export const ORGANIZATIONS_BY_ORGANIZATION_ID_TRANSACTIONS_ENDPOINT = '/v1/organizations/{organization_id}/transactions';
export const ORGANIZATIONS_BY_ORGANIZATION_ID_TRANSACTIONS_BY_TRANSACTION_ID_ENDPOINT = '/v1/organizations/{organization_id}/transactions/{transaction_id}';
export const ORGANIZATIONS_BY_ORGANIZATION_ID_USAGE_BY_PRODUCT_ENDPOINT = '/v1/organizations/{organization_id}/usage/{product}';
export const ORGANIZATIONS_BY_ORGANIZATION_ID_USAGE_BY_PRODUCT_SUMMARY_ENDPOINT = '/v1/organizations/{organization_id}/usage/{product}/summary';
export const PARKING_ENDPOINT = '/v1/parking';
export const PARKING_METRICS_ENDPOINT = '/v1/parking/metrics';
export const PARKING_SIGNUP_ENDPOINT = '/v1/parking/signup';
export const PARKING_SIGNUP_STATUS_ENDPOINT = '/v1/parking/signup/status';
export const PARKING_BY_PARKING_REFERENCE_METRICS_ENDPOINT = '/v1/parking/{parking_reference}/metrics';
export const REPORTS_ENDPOINT = '/v1/reports';
export const REPORTS_BY_REPORT_ID_ENDPOINT = '/v1/reports/{report_id}';
export const REPORTS_BY_REPORT_ID_DOWNLOAD_ENDPOINT = '/v1/reports/{report_id}/download';
export const TAGS_ENDPOINT = '/v1/tags';
export const TAGS_OBJECTS_ENDPOINT = '/v1/tags/objects';
export const TAGS_BY_TAG_ID_ENDPOINT = '/v1/tags/{tag_id}';
export const TAGS_BY_TAG_ID_OBJECTS_ENDPOINT = '/v1/tags/{tag_id}/objects';
export const TLDS_ENDPOINT = '/v1/tlds/';
export const TLDS_PORTFOLIO_ENDPOINT = '/v1/tlds/portfolio';
export const TLDS_BY_TLD_ENDPOINT = '/v1/tlds/{tld}';
export const USERS_ENDPOINT = '/v1/users';
export const USERS_ME_ENDPOINT = '/v1/users/me';
export const USERS_BY_USER_ID_ENDPOINT = '/v1/users/{user_id}';
export const USERS_BY_USER_ID_PERMISSIONS_ENDPOINT = '/v1/users/{user_id}/permissions';
export const USERS_BY_USER_ID_ROLE_ENDPOINT = '/v1/users/{user_id}/role';
export const VANITY_NAMESERVER_SETS_ENDPOINT = '/v1/vanity-nameserver-sets';
export const VANITY_NAMESERVER_SETS_CHECK_ENDPOINT = '/v1/vanity-nameserver-sets/check';
export const VANITY_NAMESERVER_SETS_DEFAULT_ENDPOINT = '/v1/vanity-nameserver-sets/default';
export const VANITY_NAMESERVER_SETS_BY_SET_ID_ENDPOINT = '/v1/vanity-nameserver-sets/{set_id}';
export const VANITY_NAMESERVER_SETS_BY_SET_ID_DEFAULT_ENDPOINT = '/v1/vanity-nameserver-sets/{set_id}/default';
export const VANITY_NAMESERVER_SETS_BY_SET_ID_RESTORE_ENDPOINT = '/v1/vanity-nameserver-sets/{set_id}/restore';
export const VANITY_NAMESERVER_SETS_BY_SET_ID_RETRY_ENDPOINT = '/v1/vanity-nameserver-sets/{set_id}/retry';
export const VANITY_NAMESERVER_SETS_BY_SET_ID_ZONES_ENDPOINT = '/v1/vanity-nameserver-sets/{set_id}/zones';
export const WHITELABEL_BRANDING_ENDPOINT = '/v1/whitelabel-branding';
export const WHITELABEL_BRANDING_EMAIL_PREVIEW_ENDPOINT = '/v1/whitelabel-branding/email/preview';
export const WHITELABEL_BRANDING_EMAIL_TEMPLATES_ENDPOINT = '/v1/whitelabel-branding/email/templates';
export const WHITELABEL_BRANDING_RECHECK_ENDPOINT = '/v1/whitelabel-branding/recheck';
export const WHITELABEL_BRANDING_RESTORE_ENDPOINT = '/v1/whitelabel-branding/restore';
export const WHITELABEL_BRANDING_TIER_ENDPOINT = '/v1/whitelabel-branding/tier';

export type Endpoint =
  | typeof AI_CONCIERGE_CONTEXTS_BY_CONTEXT_ID_ENDPOINT
  | typeof AI_CONCIERGE_CONVERSATIONS_ENDPOINT
  | typeof AI_CONCIERGE_CONVERSATIONS_BY_CONVERSATION_ID_ENDPOINT
  | typeof AI_CONCIERGE_CONVERSATIONS_BY_CONVERSATION_ID_CONTEXTS_ENDPOINT
  | typeof AI_CONCIERGE_CONVERSATIONS_BY_CONVERSATION_ID_MESSAGES_ENDPOINT
  | typeof AI_CONCIERGE_CONVERSATIONS_BY_CONVERSATION_ID_MESSAGES_BY_MESSAGE_ID_ENDPOINT
  | typeof AI_CONCIERGE_MEMORY_FACTS_ENDPOINT
  | typeof AI_CONCIERGE_MEMORY_FACTS_BY_FACT_ID_ENDPOINT
  | typeof ARCHIVE_EMAIL_FORWARD_LOGS_ALIASES_BY_EMAIL_FORWARD_ALIAS_ID_ENDPOINT
  | typeof ARCHIVE_EMAIL_FORWARD_LOGS_BY_EMAIL_FORWARD_ID_ENDPOINT
  | typeof ARCHIVE_OBJECT_LOGS_ENDPOINT
  | typeof ARCHIVE_OBJECT_LOGS_BY_OBJECT_ID_ENDPOINT
  | typeof ARCHIVE_REQUEST_HISTORY_ENDPOINT
  | typeof AUTH_CLIENT_CREDENTIALS_INTROSPECT_ENDPOINT
  | typeof AUTH_TOKEN_ENDPOINT
  | typeof AVAILABILITY_ENDPOINT
  | typeof AVAILABILITY_STREAM_ENDPOINT
  | typeof CONTACTS_ENDPOINT
  | typeof CONTACTS_ATTRIBUTE_SETS_ENDPOINT
  | typeof CONTACTS_ATTRIBUTE_SETS_BY_CONTACT_ATTRIBUTE_SET_ID_ENDPOINT
  | typeof CONTACTS_VERIFICATION_ENDPOINT
  | typeof CONTACTS_VERIFY_ENDPOINT
  | typeof CONTACTS_BY_CONTACT_ID_ENDPOINT
  | typeof CONTACTS_BY_CONTACT_ID_LINK_BY_CONTACT_ATTRIBUTE_SET_ID_ENDPOINT
  | typeof CONTACTS_BY_CONTACT_ID_VERIFICATION_ENDPOINT
  | typeof CONTACTS_BY_CONTACT_ID_VERIFICATIONS_ENDPOINT
  | typeof CONTACTS_BY_CONTACT_ID_VERIFICATIONS_ATTEST_ENDPOINT
  | typeof DNS_ENDPOINT
  | typeof DNS_DOMAIN_FORWARDS_ENDPOINT
  | typeof DNS_EMAIL_FORWARDS_ENDPOINT
  | typeof DNS_SUMMARY_ENDPOINT
  | typeof DNS_BY_ZONE_NAME_ENDPOINT
  | typeof DNS_BY_ZONE_NAME_DNSSEC_DISABLE_ENDPOINT
  | typeof DNS_BY_ZONE_NAME_DNSSEC_ENABLE_ENDPOINT
  | typeof DNS_BY_ZONE_NAME_DOMAIN_FORWARDS_ENDPOINT
  | typeof DNS_BY_ZONE_NAME_EMAIL_FORWARDS_ENDPOINT
  | typeof DNS_BY_ZONE_NAME_RECORDS_ENDPOINT
  | typeof DNS_BY_ZONE_NAME_RRSETS_ENDPOINT
  | typeof DNS_BY_ZONE_NAME_VANITY_SET_ENDPOINT
  | typeof DOMAIN_FORWARDS_ENDPOINT
  | typeof DOMAIN_FORWARDS_METRICS_ENDPOINT
  | typeof DOMAIN_FORWARDS_METRICS_BROWSER_ENDPOINT
  | typeof DOMAIN_FORWARDS_METRICS_GEO_ENDPOINT
  | typeof DOMAIN_FORWARDS_METRICS_PLATFORM_ENDPOINT
  | typeof DOMAIN_FORWARDS_METRICS_REFERRER_ENDPOINT
  | typeof DOMAIN_FORWARDS_METRICS_STATUS_CODE_ENDPOINT
  | typeof DOMAIN_FORWARDS_METRICS_TIME_SERIES_ENDPOINT
  | typeof DOMAIN_FORWARDS_METRICS_USER_AGENT_ENDPOINT
  | typeof DOMAIN_FORWARDS_METRICS_VISITS_BY_KEY_ENDPOINT
  | typeof DOMAIN_FORWARDS_BY_HOSTNAME_ENDPOINT
  | typeof DOMAIN_FORWARDS_BY_HOSTNAME_DISABLE_ENDPOINT
  | typeof DOMAIN_FORWARDS_BY_HOSTNAME_ENABLE_ENDPOINT
  | typeof DOMAIN_FORWARDS_BY_HOSTNAME_BY_PROTOCOL_ENDPOINT
  | typeof DOMAIN_SEARCH_SUGGEST_ENDPOINT
  | typeof DOMAINS_ENDPOINT
  | typeof DOMAINS_CHECK_ENDPOINT
  | typeof DOMAINS_CLAIMS_NOTICES_ENDPOINT
  | typeof DOMAINS_SUMMARY_ENDPOINT
  | typeof DOMAINS_TLD_SPECIFIC_AT_BY_DOMAIN_REFERENCE_WITHDRAW_ENDPOINT
  | typeof DOMAINS_TLD_SPECIFIC_BE_BY_DOMAIN_REFERENCE_AUTH_CODE_REQUEST_ENDPOINT
  | typeof DOMAINS_TLD_SPECIFIC_CYMRU_BY_DOMAIN_REFERENCE_AUTH_CODE_REQUEST_ENDPOINT
  | typeof DOMAINS_TLD_SPECIFIC_CZ_BY_DOMAIN_REFERENCE_AUTH_CODE_REQUEST_ENDPOINT
  | typeof DOMAINS_TLD_SPECIFIC_DE_BY_DOMAIN_REFERENCE_TRANSIT_ENDPOINT
  | typeof DOMAINS_TLD_SPECIFIC_EU_BY_DOMAIN_REFERENCE_AUTH_CODE_REQUEST_ENDPOINT
  | typeof DOMAINS_TLD_SPECIFIC_LT_BY_DOMAIN_REFERENCE_AUTH_CODE_REQUEST_ENDPOINT
  | typeof DOMAINS_TLD_SPECIFIC_NO_APPLICANT_DECLARATION_ENDPOINT
  | typeof DOMAINS_TLD_SPECIFIC_NO_BY_DOMAIN_REFERENCE_APPLICANT_DECLARATION_ENDPOINT
  | typeof DOMAINS_TLD_SPECIFIC_NO_BY_DOMAIN_REFERENCE_RESEND_DECLARATION_EMAIL_ENDPOINT
  | typeof DOMAINS_TLD_SPECIFIC_SE_BY_DOMAIN_REFERENCE_AUTH_CODE_REQUEST_ENDPOINT
  | typeof DOMAINS_TLD_SPECIFIC_WALES_BY_DOMAIN_REFERENCE_AUTH_CODE_REQUEST_ENDPOINT
  | typeof DOMAINS_TRANSFER_ENDPOINT
  | typeof DOMAINS_BY_DOMAIN_REFERENCE_ENDPOINT
  | typeof DOMAINS_BY_DOMAIN_REFERENCE_DNSSEC_ENDPOINT
  | typeof DOMAINS_BY_DOMAIN_REFERENCE_DNSSEC_DISABLE_ENDPOINT
  | typeof DOMAINS_BY_DOMAIN_REFERENCE_DNSSEC_ENABLE_ENDPOINT
  | typeof DOMAINS_BY_DOMAIN_REFERENCE_RENEW_ENDPOINT
  | typeof DOMAINS_BY_DOMAIN_REFERENCE_RESTORE_ENDPOINT
  | typeof DOMAINS_BY_DOMAIN_REFERENCE_TRANSFER_ENDPOINT
  | typeof DOMAINS_BY_DOMAIN_REFERENCE_TRANSFER_OUTBOUND_ENDPOINT
  | typeof EMAIL_FORWARDS_ENDPOINT
  | typeof EMAIL_FORWARDS_BY_EMAIL_FORWARD_ID_ENDPOINT
  | typeof EMAIL_FORWARDS_BY_EMAIL_FORWARD_ID_ALIASES_ENDPOINT
  | typeof EMAIL_FORWARDS_BY_EMAIL_FORWARD_ID_ALIASES_BY_ALIAS_ID_ENDPOINT
  | typeof EMAIL_FORWARDS_BY_EMAIL_FORWARD_ID_DISABLE_ENDPOINT
  | typeof EMAIL_FORWARDS_BY_EMAIL_FORWARD_ID_ENABLE_ENDPOINT
  | typeof EMAIL_FORWARDS_BY_EMAIL_FORWARD_ID_METRICS_ENDPOINT
  | typeof EVENTS_ENDPOINT
  | typeof EVENTS_BY_EVENT_ID_ENDPOINT
  | typeof HOSTS_ENDPOINT
  | typeof HOSTS_BY_HOST_REFERENCE_ENDPOINT
  | typeof JOB_BY_JOB_ID_ENDPOINT
  | typeof JOB_BY_JOB_ID_PAUSE_ENDPOINT
  | typeof JOB_BY_JOB_ID_RESUME_ENDPOINT
  | typeof JOB_BY_JOB_ID_RETRY_ENDPOINT
  | typeof JOBS_ENDPOINT
  | typeof JOBS_BY_BATCH_ID_ENDPOINT
  | typeof JOBS_BY_BATCH_ID_JOBS_ENDPOINT
  | typeof JOBS_BY_BATCH_ID_PAUSE_ENDPOINT
  | typeof JOBS_BY_BATCH_ID_RESUME_ENDPOINT
  | typeof JOBS_BY_BATCH_ID_RETRY_ENDPOINT
  | typeof ORGANIZATIONS_ENDPOINT
  | typeof ORGANIZATIONS_ATTRIBUTES_ENDPOINT
  | typeof ORGANIZATIONS_IP_RESTRICTIONS_ENDPOINT
  | typeof ORGANIZATIONS_IP_RESTRICTIONS_BY_IP_RESTRICTION_ID_ENDPOINT
  | typeof ORGANIZATIONS_ROLE_PERMISSIONS_ENDPOINT
  | typeof ORGANIZATIONS_ROLES_ENDPOINT
  | typeof ORGANIZATIONS_ROLES_BY_LABEL_ENDPOINT
  | typeof ORGANIZATIONS_USERS_ENDPOINT
  | typeof ORGANIZATIONS_BY_ORGANIZATION_ID_ENDPOINT
  | typeof ORGANIZATIONS_BY_ORGANIZATION_ID_ATTRIBUTES_ENDPOINT
  | typeof ORGANIZATIONS_BY_ORGANIZATION_ID_BILLING_INVOICES_ENDPOINT
  | typeof ORGANIZATIONS_BY_ORGANIZATION_ID_PRICING_PRODUCT_TYPE_BY_PRODUCT_TYPE_ENDPOINT
  | typeof ORGANIZATIONS_BY_ORGANIZATION_ID_TRANSACTIONS_ENDPOINT
  | typeof ORGANIZATIONS_BY_ORGANIZATION_ID_TRANSACTIONS_BY_TRANSACTION_ID_ENDPOINT
  | typeof ORGANIZATIONS_BY_ORGANIZATION_ID_USAGE_BY_PRODUCT_ENDPOINT
  | typeof ORGANIZATIONS_BY_ORGANIZATION_ID_USAGE_BY_PRODUCT_SUMMARY_ENDPOINT
  | typeof PARKING_ENDPOINT
  | typeof PARKING_METRICS_ENDPOINT
  | typeof PARKING_SIGNUP_ENDPOINT
  | typeof PARKING_SIGNUP_STATUS_ENDPOINT
  | typeof PARKING_BY_PARKING_REFERENCE_METRICS_ENDPOINT
  | typeof REPORTS_ENDPOINT
  | typeof REPORTS_BY_REPORT_ID_ENDPOINT
  | typeof REPORTS_BY_REPORT_ID_DOWNLOAD_ENDPOINT
  | typeof TAGS_ENDPOINT
  | typeof TAGS_OBJECTS_ENDPOINT
  | typeof TAGS_BY_TAG_ID_ENDPOINT
  | typeof TAGS_BY_TAG_ID_OBJECTS_ENDPOINT
  | typeof TLDS_ENDPOINT
  | typeof TLDS_PORTFOLIO_ENDPOINT
  | typeof TLDS_BY_TLD_ENDPOINT
  | typeof USERS_ENDPOINT
  | typeof USERS_ME_ENDPOINT
  | typeof USERS_BY_USER_ID_ENDPOINT
  | typeof USERS_BY_USER_ID_PERMISSIONS_ENDPOINT
  | typeof USERS_BY_USER_ID_ROLE_ENDPOINT
  | typeof VANITY_NAMESERVER_SETS_ENDPOINT
  | typeof VANITY_NAMESERVER_SETS_CHECK_ENDPOINT
  | typeof VANITY_NAMESERVER_SETS_DEFAULT_ENDPOINT
  | typeof VANITY_NAMESERVER_SETS_BY_SET_ID_ENDPOINT
  | typeof VANITY_NAMESERVER_SETS_BY_SET_ID_DEFAULT_ENDPOINT
  | typeof VANITY_NAMESERVER_SETS_BY_SET_ID_RESTORE_ENDPOINT
  | typeof VANITY_NAMESERVER_SETS_BY_SET_ID_RETRY_ENDPOINT
  | typeof VANITY_NAMESERVER_SETS_BY_SET_ID_ZONES_ENDPOINT
  | typeof WHITELABEL_BRANDING_ENDPOINT
  | typeof WHITELABEL_BRANDING_EMAIL_PREVIEW_ENDPOINT
  | typeof WHITELABEL_BRANDING_EMAIL_TEMPLATES_ENDPOINT
  | typeof WHITELABEL_BRANDING_RECHECK_ENDPOINT
  | typeof WHITELABEL_BRANDING_RESTORE_ENDPOINT
  | typeof WHITELABEL_BRANDING_TIER_ENDPOINT;
