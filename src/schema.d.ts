import { TypeId } from "typeid-js";
export interface paths {
    "/v1/archive/email-forward-logs/aliases/{email_forward_alias_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Retrieve email forward logs by alias
         * @description Retrieves a paginated list of email forward logs for a specific email forward alias. Only returns logs created after the email forward was created.
         */
        get: operations["get_email_forward_logs_by_alias_v1_archive_email_forward_logs_aliases__email_forward_alias_id__get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/archive/email-forward-logs/{email_forward_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Retrieve email forward logs
         * @description Retrieves a paginated list of email forward logs for a specific email forward. Only returns logs created after the email forward was created.
         */
        get: operations["get_email_forward_logs_v1_archive_email_forward_logs__email_forward_id__get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/archive/object-logs": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Retrieve all object history
         * @description Retrieve all paginated audit logs with optional filtering and sorting
         */
        get: operations["get_object_logs_v1_archive_object_logs_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/archive/object-logs/{object_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Retrieve object history
         * @description Retrieve paginated audit logs for a specific object with optional filtering and sorting
         */
        get: operations["get_object_logs_by_object_id_v1_archive_object_logs__object_id__get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/archive/request-history": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Retrieve request history logs
         * @description Retrieves a paginated list of request history logs
         */
        get: operations["get_request_history_v1_archive_request_history_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/auth/token": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Issue Organization Token */
        post: operations["issue_organization_token_v1_auth_token_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/availability": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Check domain availability
         * @description Check the availability of one or more domains.
         */
        get: operations["bulk_availability_v1_availability_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/availability/stream": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Stream domain availability results
         * @description Stream domain availability results using Server-Sent Events (SSE) until the `done` event is received.
         */
        get: operations["stream_availability_v1_availability_stream_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/contacts": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List all contacts
         * @description Retrieves a paginated list of all contacts
         */
        get: operations["get_contacts_v1_contacts_get"];
        put?: never;
        /**
         * Create a contact
         * @description Create a new contact object to use for domain registration
         */
        post: operations["create_contact_v1_contacts_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/contacts/verification": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Retrieve contact verification by token */
        get: operations["get_verification_by_token_v1_contacts_verification_get"];
        /** Complete contact verification with token */
        put: operations["update_verification_by_token_v1_contacts_verification_put"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/contacts/verify": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Email Verify Contact */
        get: operations["email_verify_contact_v1_contacts_verify_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/contacts/{contact_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Retrieve a contact
         * @description Retrieves a contact object
         */
        get: operations["get_contact_v1_contacts__contact_id__get"];
        put?: never;
        post?: never;
        /**
         * Delete a contact
         * @description Deletes a contact object; only possible if the contact is not in use
         */
        delete: operations["delete_contact_v1_contacts__contact_id__delete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/contacts/{contact_id}/verification": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Retrieve contact verification by contact ID */
        get: operations["get_verification_status_v1_contacts__contact_id__verification_get"];
        /** Complete contact verification by contact ID */
        put: operations["update_verification_v1_contacts__contact_id__verification_put"];
        /** Start contact verification */
        post: operations["start_contact_verification_v1_contacts__contact_id__verification_post"];
        /** Delete contact verification */
        delete: operations["cancel_verification_v1_contacts__contact_id__verification_delete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/dns": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List Zones */
        get: operations["list_zones_v1_dns_get"];
        put?: never;
        /** Create Zone */
        post: operations["create_zone_v1_dns_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/dns/domain-forwards": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List domain forwards by zone
         * @description Retrieves a paginated list of domain forwards grouped by DNS zones.
         */
        get: operations["list_domain_forwards_by_zone_v1_dns_domain_forwards_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/dns/email-forwards": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List email forwards by zone
         * @description Retrieves a paginated list of email forwards grouped by DNS zones.
         */
        get: operations["list_email_forwards_by_zone_v1_dns_email_forwards_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/dns/summary": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Zones Summary */
        get: operations["get_zones_summary_v1_dns_summary_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/dns/{zone_name}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Zone */
        get: operations["get_zone_v1_dns__zone_name__get"];
        put?: never;
        post?: never;
        /** Delete Zone */
        delete: operations["delete_zone_v1_dns__zone_name__delete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/dns/{zone_name}/dnssec/disable": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Disable Dnssec */
        post: operations["disable_dnssec_v1_dns__zone_name__dnssec_disable_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/dns/{zone_name}/dnssec/enable": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Enable Dnssec */
        post: operations["enable_dnssec_v1_dns__zone_name__dnssec_enable_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/dns/{zone_name}/domain-forwards": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List domain forwards for a zone
         * @description Retrieves all domain forwards configured for the specified DNS zone, including subdomains.
         */
        get: operations["list_zone_domain_forwards_v1_dns__zone_name__domain_forwards_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/dns/{zone_name}/email-forwards": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List email forwards for a zone
         * @description Retrieves all email forwards configured for the specified DNS zone, including subdomains and all aliases.
         */
        get: operations["list_zone_email_forwards_v1_dns__zone_name__email_forwards_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/dns/{zone_name}/records": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /** Patch Zone Records */
        patch: operations["patch_zone_records_v1_dns__zone_name__records_patch"];
        trace?: never;
    };
    "/v1/dns/{zone_name}/rrsets": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /** Update Zone Rrsets */
        put: operations["update_zone_rrsets_v1_dns__zone_name__rrsets_put"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /** Patch Zone Rrsets */
        patch: operations["patch_zone_rrsets_v1_dns__zone_name__rrsets_patch"];
        trace?: never;
    };
    "/v1/domain-forwards": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List domain forwards
         * @description Retrieves a paginated list of domain forwards by hostname for the organization
         */
        get: operations["list_domain_forwards_v1_domain_forwards_get"];
        put?: never;
        /**
         * Create a domain forward
         * @description Creates a new domain forward configuration. Wildcard forwards can be created by using *.hostname (e.g., *.example.com).
         */
        post: operations["create_domain_forward_v2_v1_domain_forwards_post"];
        delete?: never;
        options?: never;
        head?: never;
        /**
         * Patch domain forward redirects
         * @description Applies patch operations to update or remove redirects across hostnames and protocols. Raises an error if the domain forward or domain forward set does not exist.
         */
        patch: operations["patch_redirects_v1_domain_forwards_patch"];
        trace?: never;
    };
    "/v1/domain-forwards/metrics": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Metrics */
        get: operations["metrics_v1_domain_forwards_metrics_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/domain-forwards/metrics/browser": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Browser Stats */
        get: operations["browser_stats_v1_domain_forwards_metrics_browser_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/domain-forwards/metrics/geo": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Geo Stats */
        get: operations["geo_stats_v1_domain_forwards_metrics_geo_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/domain-forwards/metrics/platform": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Platform Stats */
        get: operations["platform_stats_v1_domain_forwards_metrics_platform_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/domain-forwards/metrics/referrer": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Referrer Stats */
        get: operations["referrer_stats_v1_domain_forwards_metrics_referrer_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/domain-forwards/metrics/status-code": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Status Code Stats */
        get: operations["status_code_stats_v1_domain_forwards_metrics_status_code_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/domain-forwards/metrics/time-series": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Time Series */
        get: operations["time_series_v1_domain_forwards_metrics_time_series_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/domain-forwards/metrics/user-agent": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** User Agent Stats */
        get: operations["user_agent_stats_v1_domain_forwards_metrics_user_agent_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/domain-forwards/metrics/visits-by-key": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Visits By Key */
        get: operations["visits_by_key_v1_domain_forwards_metrics_visits_by_key_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/domain-forwards/{hostname}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get a domain forward
         * @description Retrieves the domain forward configuration for the specified hostname
         */
        get: operations["get_domain_forward_v1_domain_forwards__hostname__get"];
        put?: never;
        /**
         * Create domain forward set
         * @description Creates a new domain forward set for a specific protocol (HTTP or HTTPS). Raises an error if the set already exists.
         */
        post: operations["create_domain_forward_set_v1_domain_forwards__hostname__post"];
        /**
         * Delete a domain forward
         * @description Deletes the domain forward configuration for the specified hostname
         */
        delete: operations["delete_domain_forward_v1_domain_forwards__hostname__delete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/domain-forwards/{hostname}/disable": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /**
         * Disable domain forward
         * @description Disables domain forwarding by removing DNS records. The domain forward configuration is preserved but disabled.
         */
        patch: operations["disable_domain_forward_v1_domain_forwards__hostname__disable_patch"];
        trace?: never;
    };
    "/v1/domain-forwards/{hostname}/enable": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /**
         * Enable domain forward
         * @description Enables domain forwarding by creating necessary DNS records
         */
        patch: operations["enable_domain_forward_v1_domain_forwards__hostname__enable_patch"];
        trace?: never;
    };
    "/v1/domain-forwards/{hostname}/{protocol}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get domain forward set
         * @description Retrieves all redirects for a specific protocol (HTTP or HTTPS) for the specified hostname
         */
        get: operations["get_domain_forward_set_v1_domain_forwards__hostname___protocol__get"];
        /**
         * Update domain forward set
         * @description Updates an existing domain forward set for a specific protocol (HTTP or HTTPS). All existing redirects for this protocol are replaced with the provided redirects. Raises an error if the set does not exist.
         */
        put: operations["update_domain_forward_set_v1_domain_forwards__hostname___protocol__put"];
        /**
         * Create domain forward set (deprecated)
         * @deprecated
         * @description Deprecated: Use POST /{hostname} with protocol in body instead. Creates a new domain forward set for a specific protocol (HTTP or HTTPS).
         */
        post: operations["create_domain_forward_set_deprecated_v1_domain_forwards__hostname___protocol__post"];
        /**
         * Delete domain forward set
         * @description Deletes a domain forward set for a specific protocol (HTTP or HTTPS).
         */
        delete: operations["delete_domain_forward_set_v1_domain_forwards__hostname___protocol__delete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/domain-search/suggest": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Suggest domains
         * @description Get a list of domain suggestions based on a search query
         */
        get: operations["suggest_v1_domain_search_suggest_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/domains": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List all domains
         * @description Retrieves a paginated list of all active domains
         */
        get: operations["get_domains_v1_domains_get"];
        put?: never;
        /**
         * Create a domain
         * @description Registers a new domain
         */
        post: operations["create_domain_v1_domains_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/domains/check": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Check domain availability */
        get: operations["epp_check_domain_v1_domains_check_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/domains/summary": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get domain summary
         * @description Retrieves a summary of domains including counts by status, TLD, and expiration timeframes
         */
        get: operations["get_domain_summary_v1_domains_summary_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/domains/tld-specific/at/{domain_reference}/withdraw": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Withdraw a nic.at domain */
        post: operations["withdraw_domain_v1_domains_tld_specific_at__domain_reference__withdraw_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/domains/tld-specific/be/{domain_reference}/auth_code/request": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Requests your auth code directly from DNS Belgium (registry) */
        post: operations["request_auth_code_v1_domains_tld_specific_be__domain_reference__auth_code_request_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/domains/tld-specific/de/{domain_reference}/transit": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Transit a DENIC domain */
        post: operations["transit_domain_v1_domains_tld_specific_de__domain_reference__transit_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/domains/tld-specific/eu/{domain_reference}/auth_code/request": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Requests your auth code directly from EURid (registry) */
        post: operations["request_auth_code_v1_domains_tld_specific_eu__domain_reference__auth_code_request_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/domains/transfer": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Transfer a domain
         * @description Start the transfer process for a domain <br>
         *     The domain will be in state `pending_transfer` until the transfer is completed.
         *     This process can take up to 5 days, until the transfer is approved
         */
        post: operations["transfer_domain_v1_domains_transfer_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/domains/{domain_reference}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Retrieve a domain
         * @description Retrieves a single active domain by either its name or id
         */
        get: operations["get_domain_v1_domains__domain_reference__get"];
        put?: never;
        post?: never;
        /**
         * Delete a domain
         * @description Initiates the deletion process for a domain. The domain will be marked for deletion
         *     and will enter a redemption period during which it may be restored.
         */
        delete: operations["delete_domain_v1_domains__domain_reference__delete"];
        options?: never;
        head?: never;
        /**
         * Update a domain
         * @description Updates various attributes of an existing domain. Only the fields provided in the request
         *     will be updated; all other fields will remain unchanged. <br>
         *     Providing `clientTransferProhibited` as a status will set the `transfer_lock` property
         */
        patch: operations["update_domain_v1_domains__domain_reference__patch"];
        trace?: never;
    };
    "/v1/domains/{domain_reference}/dnssec": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Retrieve DNSSEC data
         * @description Fetches all DNSSEC records associated with the specified domain.
         */
        get: operations["get_dnssec_v1_domains__domain_reference__dnssec_get"];
        /**
         * Update DNSSEC data
         * @description Replaces all existing DNSSEC records for the domain with the provided records.
         */
        put: operations["create_or_update_dnssec_v1_domains__domain_reference__dnssec_put"];
        post?: never;
        /**
         * Delete DNSSEC data
         * @description Removes all DNSSEC data for a domain
         */
        delete: operations["delete_dnssec_v1_domains__domain_reference__dnssec_delete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/domains/{domain_reference}/dnssec/disable": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Disable DNSSEC for domains using our nameservers */
        post: operations["disable_and_unpublish_dnssec_records_v1_domains__domain_reference__dnssec_disable_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/domains/{domain_reference}/dnssec/enable": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Enable DNSSEC for domains using our nameservers */
        post: operations["enable_and_publish_dnssec_records_v1_domains__domain_reference__dnssec_enable_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/domains/{domain_reference}/renew": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Renew a domain
         * @description Extends the registration period of an existing domain. The renewal period is added
         *     to the current expiration date of the domain.
         */
        post: operations["renew_domain_v1_domains__domain_reference__renew_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/domains/{domain_reference}/restore": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Restore an eligible domain (during redemption period) */
        post: operations["restore_domain_v1_domains__domain_reference__restore_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/domains/{domain_reference}/transfer": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /**
         * Cancel a domain transfer
         * @description This will cancel the in-progress domain transfer and delete the domain object
         */
        delete: operations["cancel_domain_transfer_v1_domains__domain_reference__transfer_delete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/email-forwards": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List all email forwards
         * @description Retrieves a paginated list of all email forwards for the organization.
         */
        get: operations["list_email_forwards_v1_email_forwards_get"];
        put?: never;
        /**
         * Create email forward configuration
         * @description Creates an email forward configuration with optional aliases. Can be created enabled or disabled (default: disabled). Includes created_on and updated_on timestamps.
         */
        post: operations["create_email_forward_v1_email_forwards_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/email-forwards/{email_forward_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get email forward configuration
         * @description Retrieves the email forward configuration for the specified zone including all aliases
         */
        get: operations["get_email_forward_v1_email_forwards__email_forward_id__get"];
        put?: never;
        post?: never;
        /**
         * Delete email forward configuration
         * @description Permanently deletes the email forward configuration including all aliases. If enabled, automatically disables first (removes DNS records and unregisters from ImprovMX).
         */
        delete: operations["delete_email_forward_v1_email_forwards__email_forward_id__delete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/email-forwards/{email_forward_id}/aliases": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Create email forward alias
         * @description Creates a new email forward alias for the specified hostname.
         */
        post: operations["create_email_forward_alias_v1_email_forwards__email_forward_id__aliases_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/email-forwards/{email_forward_id}/aliases/{alias_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /**
         * Update email forward alias
         * @description Updates the forward_to address for a specific email forward alias
         */
        put: operations["update_email_forward_alias_v1_email_forwards__email_forward_id__aliases__alias_id__put"];
        post?: never;
        /**
         * Delete email forward alias
         * @description Deletes a specific email forward alias for the specified zone
         */
        delete: operations["delete_email_forward_alias_v1_email_forwards__email_forward_id__aliases__alias_id__delete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/email-forwards/{email_forward_id}/disable": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /**
         * Disable email forwarding
         * @description Disables email forwarding by removing MX and SPF DNS records and unregistering the domain from the email forward provider. The email forward configuration is preserved but disabled.
         */
        patch: operations["disable_email_forward_v1_email_forwards__email_forward_id__disable_patch"];
        trace?: never;
    };
    "/v1/email-forwards/{email_forward_id}/enable": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /**
         * Enable email forwarding
         * @description Enables email forwarding by creating necessary MX and SPF DNS records and registering the domain with the email forward provider.
         */
        patch: operations["enable_email_forward_v1_email_forwards__email_forward_id__enable_patch"];
        trace?: never;
    };
    "/v1/email-forwards/{email_forward_id}/metrics": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Retrieve email forward metrics
         * @description Retrieves metrics and statistics for a specific email forward, including delivery rates and status counts.
         */
        get: operations["get_email_forward_metrics_v1_email_forwards__email_forward_id__metrics_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/events": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get pending events
         * @description Retrieves a paginated list of events for the organization
         */
        get: operations["get_events_v1_events_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/events/{event_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get event
         * @description Get an event by its ID
         */
        get: operations["get_event_v1_events__event_id__get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /**
         * Acknowledge event
         * @description Acknowledge an event
         */
        patch: operations["acknowledge_event_v1_events__event_id__patch"];
        trace?: never;
    };
    "/v1/organizations": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List all organizations
         * @description Retrieves a paginated list of organizations under the current organization
         */
        get: operations["list_organizations_v1_organizations_get"];
        put?: never;
        /**
         * Create an organization
         * @description Create a new organization under the current organization
         */
        post: operations["create_organization_v1_organizations_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/organizations/attributes": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List organization attributes
         * @description Retrieves a list of organization attributes for the current organization
         */
        get: operations["get_attributes_v1_organizations_attributes_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /**
         * Update organization attributes
         * @description Updates one or more organization attributes for the current organization
         */
        patch: operations["update_attributes_v1_organizations_attributes_patch"];
        trace?: never;
    };
    "/v1/organizations/attributes/{organization_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List organization attributes
         * @description Retrieves a list of organization attributes for the specified organization
         */
        get: operations["get_attributes_v1_organizations_attributes__organization_id__get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /**
         * Update organization attributes
         * @description Updates one or more organization attributes for the specified organization
         */
        patch: operations["update_attributes_v1_organizations_attributes__organization_id__patch"];
        trace?: never;
    };
    "/v1/organizations/ip-restrictions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List IP restrictions
         * @description List all IP restrictions for the organization.
         *
         *     Returns a list of all IP restrictions configured for your organization.
         *     Single IP addresses are returned with CIDR notation (/32 for IPv4, /128 for IPv6).
         */
        get: operations["list_ip_restrictions_v1_organizations_ip_restrictions_get"];
        put?: never;
        /**
         * Create an IP restriction
         * @description Create a new IP restriction for the organization.
         *
         *     Accepts either a single IP address or a CIDR network range.
         *     Individual IP addresses are stored and returned with CIDR notation (/32 for IPv4, /128 for IPv6).
         */
        post: operations["create_ip_restriction_v1_organizations_ip_restrictions_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/organizations/ip-restrictions/{ip_restriction_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get an IP restriction
         * @description Get a specific IP restriction by ID.
         *
         *     Returns the details of a specific IP restriction if it exists and belongs to your organization.
         *     Single IP addresses are returned with CIDR notation (/32 for IPv4, /128 for IPv6).
         */
        get: operations["get_ip_restriction_v1_organizations_ip_restrictions__ip_restriction_id__get"];
        put?: never;
        post?: never;
        /**
         * Delete an IP restriction
         * @description Delete an IP restriction.
         *
         *     Permanently removes the specified IP restriction from your organization.
         */
        delete: operations["delete_ip_restriction_v1_organizations_ip_restrictions__ip_restriction_id__delete"];
        options?: never;
        head?: never;
        /**
         * Update an IP restriction
         * @description Update an existing IP restriction.
         *
         *     You can update the IP network range or the last usage timestamp.
         *     Individual IP addresses are stored and returned with CIDR notation (/32 for IPv4, /128 for IPv6).
         */
        patch: operations["update_ip_restriction_v1_organizations_ip_restrictions__ip_restriction_id__patch"];
        trace?: never;
    };
    "/v1/organizations/roles": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List all roles
         * @description Retrieves a list of roles for the current organization
         */
        get: operations["list_roles_v1_organizations_roles_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/organizations/users": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List all users
         * @description Retrieves a paginated list of users under the current organization
         */
        get: operations["list_users_v1_organizations_users_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/organizations/{organization_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get organization details
         * @description Retrieves details for a specific organization
         */
        get: operations["get_organization_v1_organizations__organization_id__get"];
        put?: never;
        post?: never;
        /**
         * Delete an organization
         * @description Permanently deletes an organization
         */
        delete: operations["delete_organization_v1_organizations__organization_id__delete"];
        options?: never;
        head?: never;
        /**
         * Update an organization
         * @description Updates details for a specific organization
         */
        patch: operations["update_organization_v1_organizations__organization_id__patch"];
        trace?: never;
    };
    "/v1/organizations/{organization_id}/billing/invoices": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List all invoices for the organization
         * @description Retrieves a paginated list of all invoices for the organization
         */
        get: operations["list_invoices_v1_organizations__organization_id__billing_invoices_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/organizations/{organization_id}/pricing/product-type/{product_type}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List product prices
         * @description Retrieves pricing data for a specific product type. If a product action/class are specified, only prices for those are returned, if any.
         */
        get: operations["get_pricing_plans_v1_organizations__organization_id__pricing_product_type__product_type__get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/organizations/{organization_id}/transactions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List all transactions
         * @description Retrieves a paginated list of transactions for an organization
         */
        get: operations["get_transactions_v1_organizations__organization_id__transactions_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/organizations/{organization_id}/transactions/{transaction_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get a specific transaction
         * @description Retrieves details for a specific transaction for an organization
         */
        get: operations["get_transaction_v1_organizations__organization_id__transactions__transaction_id__get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/parking": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List parking entries
         * @description Retrieves a paginated list of parking entries for the organization
         */
        get: operations["list_parking_v1_parking_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/parking/metrics": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get total metrics for all parking entries
         * @description Retrieves aggregated metrics for all parking entries of the organization.
         */
        get: operations["get_total_parking_metrics_v1_parking_metrics_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/parking/signup": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Sign up for parking
         * @description Accept the parking agreement to enable parking features for your organization.
         */
        post: operations["signup_for_parking_v1_parking_signup_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/parking/signup/status": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get parking signup status
         * @description Check if your organization has accepted the parking agreement.
         */
        get: operations["get_parking_signup_status_v1_parking_signup_status_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/parking/{parking_id}/metrics": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get metrics for a parking entry
         * @description Retrieves metrics for a specific parking entry by ID.
         */
        get: operations["get_parking_metrics_v1_parking__parking_id__metrics_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/tlds/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get list of Specifications for all TLDs we support
         * @description Retrieves a list of TLD Specifications we have support for
         */
        get: operations["get_tld_specifications_v1_tlds__get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/tlds/portfolio": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get the list of TLDs we support
         * @description Retrieves a list of TLDs we have support for
         */
        get: operations["get_tld_portfolio_v1_tlds_portfolio_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/tlds/{tld}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get the TLD specification
         * @description Retrieves the TLD specification for a given TLD
         */
        get: operations["get_tld_spec_v1_tlds__tld__get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/users": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Create a user
         * @description Create a new user
         */
        post: operations["create_user_v1_users_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/users/me": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get current user
         * @description Get the current user
         */
        get: operations["get_current_user_v1_users_me_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/users/me/password-reset": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /** Change Password */
        patch: operations["change_password_v1_users_me_password_reset_patch"];
        trace?: never;
    };
    "/v1/users/{user_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get a user
         * @description Get a user by ID
         */
        get: operations["get_user_v1_users__user_id__get"];
        put?: never;
        post?: never;
        /**
         * Delete a user
         * @description Delete a user by ID
         */
        delete: operations["delete_user_v1_users__user_id__delete"];
        options?: never;
        head?: never;
        /**
         * Update a user
         * @description Update a user by ID
         */
        patch: operations["update_user_v1_users__user_id__patch"];
        trace?: never;
    };
    "/v1/users/{user_id}/permissions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get user permissions
         * @description Get the permissions for a user
         */
        get: operations["get_user_permissions_v1_users__user_id__permissions_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/users/{user_id}/roles": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get user roles
         * @description Get the roles for a user
         */
        get: operations["list_roles_v1_users__user_id__roles_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /**
         * Update user roles
         * @description Update the roles for a user
         */
        patch: operations["update_user_relations_v1_users__user_id__roles_patch"];
        trace?: never;
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        /**
         * AllocationMethodType
         * @enum {string}
         */
        AllocationMethodType: "fcfs" | "auction" | "lottery";
        /** AllowedNumberOfNameserverBase */
        AllowedNumberOfNameserverBase: {
            /**
             * Max
             * @description Maximum number of nameserver per domain name
             */
            max: number;
            /**
             * Min
             * @description Minimum number of nameserver per domain name
             */
            min: number;
        };
        /**
         * AttributeType
         * @enum {string}
         */
        AttributeType: "enum" | "string" | "boolean" | "datetime" | "integer";
        /** BillingMetadata */
        BillingMetadata: {
            /**
             * Billing Model
             * @description Payment terms for the organization.
             */
            billing_model?: string | null;
            /**
             * Credit Limit
             * @description Credit limit for the organization.
             */
            credit_limit?: number | null;
            /**
             * Customer Number
             * @description Customer account number for the organization.
             */
            customer_number?: number | null;
        };
        /** BillingPlan */
        BillingPlan: {
            /**
             * Amount
             * @description Price of the billing plan.
             */
            amount?: string;
            /** @description Currency of the billing plan. */
            currency?: components["schemas"]["Currency"] | null;
            /**
             * Name
             * @description Name of the billing plan.
             */
            name?: string | null;
            /**
             * Plan Id
             * @description Billing plan ID for the organization.
             */
            plan_id?: string | null;
            /**
             * Plan Level
             * @description Plan level such as 'basic', 'premium' or 'enterprise'.
             */
            plan_level?: string | null;
            /**
             * Type
             * @description Plan type or billing interval.
             */
            type?: string | null;
        };
        /**
         * BillingTransactionAction
         * @enum {string}
         */
        BillingTransactionAction: "create" | "transfer" | "renew" | "restore" | "trade" | "application" | "service_fee" | "wallet_top_up";
        /**
         * BillingTransactionProductType
         * @enum {string}
         */
        BillingTransactionProductType: "domain" | "zones" | "email_forward" | "domain_forward" | "account_wallet";
        /** BillingTransactionResponse */
        BillingTransactionResponse: {
            /** @description The action performed in the transaction */
            action: components["schemas"]["BillingTransactionAction"];
            /**
             * Amount
             * @description The amount of the transaction including VAT
             */
            amount: string;
            /**
             * Billing Transaction Id
             * Format: typeid
             * @example billing_transaction_01h45ytscbebyvny4gc8cr8ma2
             */
            billing_transaction_id?: TypeId<"billing_transaction">;
            /**
             * Completed On
             * @description The date/time the transaction completed
             */
            completed_on?: Date | null;
            /**
             * Created On
             * Format: date-time
             * @description The date/time the transaction was created
             */
            created_on?: Date;
            /** @description The currency of the transaction */
            currency?: components["schemas"]["Currency"];
            /**
             * Price
             * @description The price of the product without sales tax
             */
            price: string;
            /**
             * Product Reference
             * @description The reference of the product
             */
            product_reference: string | null;
            /** @description The type of product */
            product_type: components["schemas"]["BillingTransactionProductType"];
            /**
             * @description The status of the transaction
             * @default pending
             */
            status: components["schemas"]["BillingTransactionStatus"];
            /**
             * Tax Amount
             * @description The tax amount of the transaction
             */
            tax_amount: string;
            /**
             * Tax Rate
             * @description The tax rate of the transaction
             */
            tax_rate: string;
            /**
             * Updated On
             * Format: date-time
             * @description The date/time the transaction was updated
             */
            updated_on?: Date;
        };
        /**
         * BillingTransactionSortField
         * @enum {string}
         */
        BillingTransactionSortField: "product_type" | "action" | "status" | "created_on" | "completed_on";
        /**
         * BillingTransactionStatus
         * @enum {string}
         */
        BillingTransactionStatus: "pending" | "succeeded" | "failed" | "canceled";
        /** BrowserStatsBucket */
        BrowserStatsBucket: {
            /** Key */
            key: string;
            /** Total */
            total: number;
            /** Unique */
            unique: number;
        };
        /**
         * ComplianceStatus
         * @enum {string}
         */
        ComplianceStatus: "preparing" | "pending" | "approved" | "disapproved";
        /**
         * ContactAttributeDefinition
         * @description Definition of a possible attribute for a TLD.
         */
        ContactAttributeDefinition: {
            /** @description Unique identifier for the attribute */
            key: components["schemas"]["RegistryHandleAttributeType"];
            /** @description Type of the attribute (e.g., 'enum', 'string', 'boolean') */
            type: components["schemas"]["AttributeType"];
            /**
             * Values
             * @description Allowed values for enum types
             */
            values?: string[] | null;
        };
        /** ContactConfigBase */
        ContactConfigBase: {
            /**
             * Max
             * @description Maximum contacts per domain name
             */
            max: number;
            /**
             * Min
             * @description Minimum contacts per domain name
             */
            min: number;
            /** @description The type of contact */
            type: components["schemas"]["DomainContactType"];
        };
        /** ContactCreate */
        ContactCreate: {
            /**
             * City
             * @description The city of the contact
             */
            city: string;
            /**
             * Country
             * @description The country of the contact
             */
            country: string;
            /**
             * Disclose
             * @description Whether the contact details should be disclosed. The Disclose function may not work with all TLDs. Some registries still display the data in Whois if, for example, the organization field is filled in.
             */
            disclose: boolean;
            /**
             * Email
             * Format: email
             * @description The email of the contact
             */
            email: string;
            /**
             * Fax
             * @description The contacts's fax number
             */
            fax?: string | null;
            /**
             * First Name
             * @description The first name of the contact
             */
            first_name: string;
            /**
             * Last Name
             * @description The last name of the contact
             */
            last_name: string;
            /**
             * Org
             * @description The organization of the contact
             */
            org?: string | null;
            /**
             * Phone
             * Format: phone
             * @description The contact's phone number
             * @example +1.2125552368
             */
            phone: string;
            /**
             * Postal Code
             * @description The postal code of the contact
             */
            postal_code: string;
            /**
             * State
             * @description The state of the contact
             */
            state?: string | null;
            /**
             * Street
             * @description The address of the contact
             */
            street: string;
            /**
             * Title
             * @description The title of the contact
             */
            title?: string | null;
        };
        /** ContactHandle */
        ContactHandle: {
            /**
             * Attributes
             * @description Additional attributes related to the contact
             */
            attributes?: {
                [key: string]: string;
            } | null;
            /**
             * Contact Id
             * Format: typeid
             * @description The contact id of the contact
             * @example contact_01h45ytscbebyvny4gc8cr8ma2
             */
            contact_id: TypeId<"contact">;
        };
        /** @description The contacts of the domain */
        ContactIdList: {
            [key: string]: TypeId<"contact">;
        };
        /** ContactResponse */
        ContactResponse: {
            /**
             * City
             * @description The city of the contact
             */
            city: string;
            /**
             * Country
             * @description The country of the contact
             */
            country: string;
            /**
             * Disclose
             * @description Whether the contact details should be disclosed. The Disclose function may not work with all TLDs. Some registries still display the data in Whois if, for example, the organization field is filled in.
             */
            disclose: boolean;
            /**
             * Email
             * Format: email
             * @description The email of the contact
             */
            email: string;
            /**
             * Fax
             * @description The contacts's fax number
             */
            fax?: string | null;
            /**
             * First Name
             * @description The first name of the contact
             */
            first_name: string;
            /**
             * Last Name
             * @description The last name of the contact
             */
            last_name: string;
            /**
             * Org
             * @description The organization of the contact
             */
            org?: string | null;
            /**
             * Phone
             * Format: phone
             * @description The contact's phone number
             * @example +1.2125552368
             */
            phone: string;
            /**
             * Postal Code
             * @description The postal code of the contact
             */
            postal_code: string;
            /**
             * State
             * @description The state of the contact
             */
            state?: string | null;
            /**
             * Street
             * @description The address of the contact
             */
            street: string;
            /**
             * Title
             * @description The title of the contact
             */
            title?: string | null;
        };
        /**
         * ContactRoleAttributeRequirement
         * @description Attribute requirements for a specific contact role.
         */
        ContactRoleAttributeRequirement: {
            /**
             * Attributes
             * @description List of required attribute keys for this role
             */
            attributes: components["schemas"]["RegistryHandleAttributeType"][];
            /** @description The role this requirement applies to */
            role: components["schemas"]["DomainContactType"];
        };
        /** ContactSchema */
        ContactSchema: {
            /**
             * City
             * @description The city of the contact
             */
            city: string;
            /**
             * Contact Id
             * Format: typeid
             * @example contact_01h45ytscbebyvny4gc8cr8ma2
             */
            contact_id?: TypeId<"contact">;
            /**
             * Country
             * @description The country of the contact
             */
            country: string;
            /**
             * Created On
             * Format: date-time
             * @description The date/time the entry was created on
             */
            created_on?: Date;
            /**
             * Deleted On
             * @description The date/time the entry was deleted on
             */
            deleted_on?: Date | null;
            /**
             * Disclose
             * @description Whether the contact details should be disclosed. The Disclose function may not work with all TLDs. Some registries still display the data in Whois if, for example, the organization field is filled in.
             */
            disclose: boolean;
            /**
             * Email
             * Format: email
             * @description The email of the contact
             */
            email: string;
            /**
             * Fax
             * @description The contacts's fax number
             */
            fax?: string | null;
            /**
             * First Name
             * @description The first name of the contact
             */
            first_name: string;
            /**
             * Last Name
             * @description The last name of the contact
             */
            last_name: string;
            /**
             * Org
             * @description The organization of the contact
             */
            org?: string | null;
            /**
             * Organization Id
             * Format: typeid
             * @description The organization that owns the domain
             * @default None
             * @example organization_01h45ytscbebyvny4gc8cr8ma2
             */
            organization_id: TypeId<"organization">;
            /**
             * Phone
             * Format: phone
             * @description The contact's phone number
             * @example +1.2125552368
             */
            phone: string;
            /**
             * Postal Code
             * @description The postal code of the contact
             */
            postal_code: string;
            /**
             * State
             * @description The state of the contact
             */
            state?: string | null;
            /**
             * Street
             * @description The address of the contact
             */
            street: string;
            /**
             * Title
             * @description The title of the contact
             */
            title?: string | null;
        };
        /**
         * ContactSortField
         * @enum {string}
         */
        ContactSortField: "first_name" | "last_name" | "email" | "created_on";
        /** ContactVerificationApiResponse */
        ContactVerificationApiResponse: {
            /**
             * Canceled On
             * @description The date the verification was cancelled
             */
            canceled_on?: Date | null;
            /**
             * Contact Id
             * Format: typeid
             * @description The contact that is being verified
             * @default None
             * @example contact_01h45ytscbebyvny4gc8cr8ma2
             */
            contact_id: TypeId<"contact">;
            /**
             * Contact Verification Id
             * Format: typeid
             * @example contact_verification_01h45ytscbebyvny4gc8cr8ma2
             */
            contact_verification_id?: TypeId<"contact_verification">;
            /**
             * Created On
             * Format: date-time
             * @description The date/time the entry was created on
             */
            created_on?: Date;
            /**
             * @description Current status of the email verification
             * @default pending
             */
            status: components["schemas"]["EmailVerificationStatus"];
            /**
             * Token
             * @description The token to verify the email address
             */
            token: string;
            /** @description The type of verification: 'api' for retrieving token via API, 'email' for retrieving via email */
            type: components["schemas"]["VerificationType"];
            /**
             * Updated On
             * Format: date-time
             * @description The date/time the entry was last updated on
             */
            updated_on?: Date;
            /**
             * Verified On
             * @description The date the verification was verified
             */
            verified_on?: Date | null;
        };
        /** ContactVerificationEmailResponse */
        ContactVerificationEmailResponse: {
            /**
             * Canceled On
             * @description The date the verification was cancelled
             */
            canceled_on?: Date | null;
            /**
             * Contact Id
             * Format: typeid
             * @description The contact that is being verified
             * @default None
             * @example contact_01h45ytscbebyvny4gc8cr8ma2
             */
            contact_id: TypeId<"contact">;
            /**
             * Contact Verification Id
             * Format: typeid
             * @example contact_verification_01h45ytscbebyvny4gc8cr8ma2
             */
            contact_verification_id?: TypeId<"contact_verification">;
            /**
             * Created On
             * Format: date-time
             * @description The date/time the entry was created on
             */
            created_on?: Date;
            /**
             * @description Current status of the email verification
             * @default pending
             */
            status: components["schemas"]["EmailVerificationStatus"];
            /** @description The type of verification: 'api' for retrieving token via API, 'email' for retrieving via email */
            type: components["schemas"]["VerificationType"];
            /**
             * Updated On
             * Format: date-time
             * @description The date/time the entry was last updated on
             */
            updated_on?: Date;
            /**
             * Verified On
             * @description The date the verification was verified
             */
            verified_on?: Date | null;
        };
        /** ContactVerificationResponse */
        ContactVerificationResponse: {
            /**
             * Canceled On
             * @description The date the verification was cancelled
             */
            canceled_on?: Date | null;
            /**
             * Contact Id
             * Format: typeid
             * @description The contact that is being verified
             * @default None
             * @example contact_01h45ytscbebyvny4gc8cr8ma2
             */
            contact_id: TypeId<"contact">;
            /**
             * Contact Verification Id
             * Format: typeid
             * @example contact_verification_01h45ytscbebyvny4gc8cr8ma2
             */
            contact_verification_id?: TypeId<"contact_verification">;
            /**
             * Created On
             * Format: date-time
             * @description The date/time the entry was created on
             */
            created_on?: Date;
            /**
             * @description Current status of the email verification
             * @default pending
             */
            status: components["schemas"]["EmailVerificationStatus"];
            /** @description The type of verification: 'api' for retrieving token via API, 'email' for retrieving via email */
            type: components["schemas"]["VerificationType"];
            /**
             * Updated On
             * Format: date-time
             * @description The date/time the entry was last updated on
             */
            updated_on?: Date;
            /**
             * Verified On
             * @description The date the verification was verified
             */
            verified_on?: Date | null;
        };
        /** ContactsBase */
        ContactsBase: {
            /**
             * Authinfo Required
             * @description Whether the registry requires authinfo for contact creation
             */
            authinfo_required?: boolean | null;
            /**
             * Is Thick
             * @description Whether the registry supports thick contacts
             */
            is_thick?: boolean | null;
            /**
             * Possible Attributes
             * @description List of possible attributes that can be set for this TLD
             */
            possible_attributes?: components["schemas"]["ContactAttributeDefinition"][];
            /**
             * Privacy Proxy
             * @description Whether a privacy service is allowed
             */
            privacy_proxy?: boolean | null;
            /** @description Whether the registrant can change through update or trade */
            registrant_change?: components["schemas"]["RegistrantChangeType"] | null;
            /**
             * Required Attributes
             * @description List of attribute requirements by role
             */
            required_attributes?: components["schemas"]["ContactRoleAttributeRequirement"][];
            /**
             * Support Check
             * @description Whether the registry supports contact checks
             */
            support_check?: boolean | null;
            /**
             * Support Client Contact Id
             * @description Whether the registry supports client defined contact ID
             */
            support_client_contact_id?: boolean | null;
            /**
             * Support Transfer
             * @description Whether the registry supports contact transfer
             */
            support_transfer?: boolean | null;
            /**
             * Supported Postal Types
             * @description Supported postal address types
             */
            supported_postal_types?: components["schemas"]["PostalAddressType"][] | null;
            /**
             * Supported Roles
             * @description Supported contact roles
             */
            supported_roles?: components["schemas"]["ContactConfigBase"][] | null;
            /**
             * Transfer Supported Roles
             * @description Supported contact roles for transfer operations. Falls back to supported_roles if not specified.
             */
            transfer_supported_roles?: components["schemas"]["ContactConfigBase"][] | null;
            /**
             * Update Supported Roles
             * @description Supported contact roles for update operations. Falls back to supported_roles if not specified.
             */
            update_supported_roles?: components["schemas"]["ContactConfigBase"][] | null;
        };
        /**
         * Currency
         * @enum {string}
         */
        Currency: "USD" | "EUR";
        /**
         * DeletePolicyType
         * @enum {string}
         */
        DeletePolicyType: "immediate" | "expiration";
        /** DeletedEvent */
        DeletedEvent: {
            date: components["schemas"]["EppDateTime"];
        };
        /**
         * DnsChangeAction
         * @enum {string}
         */
        DnsChangeAction: "create_zone" | "delete_zone" | "create_record" | "delete_record" | "enable_dnssec" | "disable_dnssec";
        /** DnsChangeResponse */
        DnsChangeResponse: {
            action: components["schemas"]["DnsChangeAction"];
            /** Record Data */
            record_data: string | null;
            /** Rrset Name */
            rrset_name: string | null;
            rrset_type: components["schemas"]["DnsRrsetType"] | null;
            /** Ttl */
            ttl: number | null;
        };
        /** DnsChangesResponse */
        DnsChangesResponse: {
            /** Changes */
            changes: components["schemas"]["DnsChangeResponse"][];
            /** Changeset Id */
            changeset_id: string | null;
            /** Num Changes */
            num_changes: number;
            /** Zone Name */
            zone_name: string;
        };
        /** DnsConfigurationBase */
        DnsConfigurationBase: {
            allowed_number_of_nameserver: components["schemas"]["AllowedNumberOfNameserverBase"];
            /**
             * Czds Available
             * @description Whether the zone is available in CZDS
             */
            czds_available?: boolean | null;
            /**
             * Dnssec Allowed
             * @description Whether the registry supports DNSSEC
             */
            dnssec_allowed: boolean;
            /**
             * Dnssec Mandatory
             * @description Whether DNSSEC is mandatory for a domain name
             */
            dnssec_mandatory?: boolean | null;
            /** @description DNSSEC mode */
            dnssec_mode?: components["schemas"]["DnssecModeType"] | null;
            /**
             * Host Objects
             * @description Whether the registry supports host objects or use attributes
             */
            host_objects: boolean;
            /**
             * Host Parent Check Tlds
             * @description TLDs that require parent-host checks (ns1.example.com => example.com)
             */
            host_parent_check_tlds?: string[] | null;
            /**
             * Registry Nameserver Check
             * @description Whether the registry checks the nameserver configuration
             */
            registry_nameserver_check: boolean;
            /**
             * Registry Root Nameserver Update
             * @description Number of hours until the root zone is updated, 0 = real-time
             */
            registry_root_nameserver_update: number;
        };
        /** DnsRecordCreate */
        DnsRecordCreate: {
            /** Rdata */
            rdata: string;
        };
        /** DnsRecordPatchOp */
        DnsRecordPatchOp: {
            op: components["schemas"]["PatchOp"];
            record: components["schemas"]["DnsRrsetWithOneRecordPatch"];
        };
        /** DnsRecordResponse */
        DnsRecordResponse: {
            /**
             * Protected
             * @description Whether the record is protected
             * @default false
             */
            protected: boolean;
            /** Rdata */
            rdata: string;
        };
        /** DnsRrsetCreate */
        DnsRrsetCreate: {
            /** Name */
            name: string;
            /** Records */
            records: components["schemas"]["DnsRecordCreate"][];
            /** Ttl */
            ttl: number;
            type: components["schemas"]["DnsRrsetType"];
        };
        /** DnsRrsetPatch */
        DnsRrsetPatch: {
            /** Name */
            name: string;
            /** Records */
            records: components["schemas"]["DnsRecordCreate"][];
            /** Ttl */
            ttl: number;
            type: components["schemas"]["DnsRrsetType"];
        };
        /** DnsRrsetPatchOp */
        DnsRrsetPatchOp: {
            op: components["schemas"]["PatchOp"];
            rrset: components["schemas"]["DnsRrsetPatch"];
        };
        /** DnsRrsetResponse */
        DnsRrsetResponse: {
            /** Name */
            name: string;
            /** Records */
            records?: components["schemas"]["DnsRecordResponse"][];
            /** Ttl */
            ttl: number;
            type: components["schemas"]["DnsRrsetType"];
        };
        /**
         * DnsRrsetType
         * @enum {string}
         */
        DnsRrsetType: "A" | "AAAA" | "ALIAS" | "CAA" | "CNAME" | "DNSKEY" | "DS" | "MX" | "NS" | "PTR" | "TXT" | "SOA" | "SRV" | "SMIMEA" | "TLSA" | "URI";
        /** DnsRrsetWithOneRecordPatch */
        DnsRrsetWithOneRecordPatch: {
            /** Name */
            name: string;
            /** Rdata */
            rdata: string;
            /** Ttl */
            ttl: number;
            type: components["schemas"]["DnsRrsetType"];
        };
        /** DnsZoneCreate */
        DnsZoneCreate: {
            /** @default disabled */
            dnssec_status: components["schemas"]["DnssecStatus"];
            /** Name */
            name: string;
            /** Rrsets */
            rrsets?: components["schemas"]["DnsRrsetCreate"][];
        };
        /** DnsZoneRecordsPatchOps */
        DnsZoneRecordsPatchOps: {
            /** Ops */
            ops: components["schemas"]["DnsRecordPatchOp"][];
        };
        /** DnsZoneResponse */
        DnsZoneResponse: {
            /**
             * Created On
             * Format: date-time
             * @description The date/time the entry was created on
             */
            created_on?: Date;
            /** @default disabled */
            dnssec_status: components["schemas"]["DnssecStatus"];
            domain_parts?: components["schemas"]["DomainNameParts"];
            /** Name */
            name: string;
            /** Rrsets */
            rrsets?: components["schemas"]["DnsRrsetResponse"][];
            /**
             * Updated On
             * Format: date-time
             * @description The date/time the entry was last updated on
             */
            updated_on?: Date;
        };
        /** DnsZoneRrsetsCreate */
        DnsZoneRrsetsCreate: {
            /** Rrsets */
            rrsets?: components["schemas"]["DnsRrsetCreate"][];
        };
        /** DnsZoneRrsetsPatchOps */
        DnsZoneRrsetsPatchOps: {
            /** Ops */
            ops: components["schemas"]["DnsRrsetPatchOp"][];
        };
        /** DnsZoneSummary */
        DnsZoneSummary: {
            /**
             * Total Zones
             * @description Total number of DNS zones
             */
            total_zones: number;
            /**
             * Zones By Dnssec
             * @description Count of zones by DNSSEC status
             */
            zones_by_dnssec?: {
                [key: string]: number;
            };
        };
        /**
         * DnssecAlgorithm
         * @enum {integer}
         */
        DnssecAlgorithm: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 10 | 12 | 13 | 14 | 15 | 16 | 17 | 23;
        /**
         * DnssecDigestType
         * @enum {integer}
         */
        DnssecDigestType: 1 | 2 | 3 | 4 | 5 | 6;
        /**
         * DnssecModeType
         * @enum {string}
         */
        DnssecModeType: "DS" | "DNSKEY";
        /**
         * DnssecRecordType
         * @enum {string}
         */
        DnssecRecordType: "ds_data" | "key_data";
        /**
         * DnssecStatus
         * @enum {string}
         */
        DnssecStatus: "enabled" | "disabled";
        /**
         * DomainAttributeKey
         * @enum {string}
         */
        DomainAttributeKey: "auto_renew_period";
        /** DomainAvailability */
        DomainAvailability: {
            /** Domain */
            domain: string;
            status: components["schemas"]["DomainAvailabilityStatus"];
        };
        /** DomainAvailabilityMeta */
        DomainAvailabilityMeta: {
            /** Processing Time Ms */
            processing_time_ms: number;
            /** Total */
            total: number;
        };
        /**
         * DomainAvailabilityStatus
         * @enum {string}
         */
        DomainAvailabilityStatus: "available" | "unavailable" | "market_available" | "tmch_claim" | "error";
        /** DomainCheckResponse */
        DomainCheckResponse: {
            /** Results */
            results: components["schemas"]["common__models__domain__domain__DomainAvailabilityResponse"][];
        };
        /**
         * DomainClientStatus
         * @enum {string}
         */
        DomainClientStatus: "clientTransferProhibited" | "clientUpdateProhibited" | "clientDeleteProhibited" | "clientRenewProhibited" | "clientHold";
        /** @description The contacts of the domain */
        DomainContactHandles: {
            [key: string]: components["schemas"]["ContactHandle"][];
        };
        /** DomainContactResponse */
        DomainContactResponse: {
            /**
             * Contact Id
             * Format: typeid
             * @description The contact id of the contact
             * @example contact_01h45ytscbebyvny4gc8cr8ma2
             */
            contact_id: TypeId<"contact">;
            /** @description The type of contact */
            contact_type: components["schemas"]["DomainContactType"];
        };
        /**
         * DomainContactType
         * @enum {string}
         */
        DomainContactType: "registrant" | "admin" | "tech" | "billing";
        /** DomainCreate */
        DomainCreate: {
            /**
             * Auth Code
             * @description The auth code used for the domain
             */
            auth_code?: string | null;
            /**
             * Contacts
             * @description The contacts of the domain
             */
            contacts: components["schemas"]["DomainContactHandles"] | components["schemas"]["ContactIdList"];
            /**
             * Create Zone
             * @description Create a zone for the domain on OpusDNS nameserver infrastructure
             * @default false
             */
            create_zone: boolean;
            /**
             * Name
             * @description The domain to be created
             */
            name: string;
            /**
             * Nameservers
             * @description The name servers for the domain
             */
            nameservers?: components["schemas"]["Nameserver"][] | null;
            /** @description The registration period of the domain */
            period: components["schemas"]["DomainPeriod"];
            /** @description The renewal mode of the domain */
            renewal_mode: components["schemas"]["RenewalMode"];
        };
        /** DomainDnssecDataCreate */
        DomainDnssecDataCreate: {
            /** @description DNSSEC algorithm used */
            algorithm: components["schemas"]["DnssecAlgorithm"];
            /**
             * Digest
             * @description Digest value for DS records
             */
            digest?: string | null;
            /** @description Digest type for DS records */
            digest_type?: components["schemas"]["DnssecDigestType"] | null;
            /**
             * Flags
             * @description DNSKEY flags for key records
             */
            flags?: number | null;
            /**
             * Key Tag
             * @description Key tag for DS records
             */
            key_tag?: number | null;
            /**
             * Protocol
             * @description Protocol field for key records (typically 3)
             */
            protocol?: number | null;
            /**
             * Public Key
             * @description Base64-encoded public key for key records
             */
            public_key?: string | null;
            /** @description Type of DNSSEC record (DS or Key) */
            record_type: components["schemas"]["DnssecRecordType"];
        };
        /** DomainDnssecDataResponse */
        DomainDnssecDataResponse: {
            /** @description DNSSEC algorithm used */
            algorithm: components["schemas"]["DnssecAlgorithm"];
            /**
             * Created On
             * Format: date-time
             * @description The date/time the entry was created on
             */
            created_on?: Date;
            /**
             * Digest
             * @description Digest value for DS records
             */
            digest?: string | null;
            /** @description Digest type for DS records */
            digest_type?: components["schemas"]["DnssecDigestType"] | null;
            /**
             * Domain Dnssec Data Id
             * Format: typeid
             * @example domain_dnssec_01h45ytscbebyvny4gc8cr8ma2
             */
            domain_dnssec_data_id?: TypeId<"domain_dnssec">;
            /**
             * Domain Id
             * Format: typeid
             * @description The domain this DNSSEC record belongs to
             * @default None
             * @example domain_01h45ytscbebyvny4gc8cr8ma2
             */
            domain_id: TypeId<"domain">;
            /**
             * Flags
             * @description DNSKEY flags for key records
             */
            flags?: number | null;
            /**
             * Key Tag
             * @description Key tag for DS records
             */
            key_tag?: number | null;
            /**
             * Protocol
             * @description Protocol field for key records (typically 3)
             */
            protocol?: number | null;
            /**
             * Public Key
             * @description Base64-encoded public key for key records
             */
            public_key?: string | null;
            /** @description Type of DNSSEC record (DS or Key) */
            record_type: components["schemas"]["DnssecRecordType"];
            /**
             * Updated On
             * Format: date-time
             * @description The date/time the entry was last updated on
             */
            updated_on?: Date;
        };
        /** DomainForward */
        DomainForward: {
            /**
             * Created On
             * Format: date-time
             */
            created_on: Date;
            /**
             * Domain Forward Id
             * Format: typeid
             * @example domain_forward_01h45ytscbebyvny4gc8cr8ma2
             */
            domain_forward_id: TypeId<"domain_forward">;
            /** Enabled */
            enabled: boolean;
            /** Hostname */
            hostname: string;
            http?: components["schemas"]["DomainForwardProtocolSetResponse"] | null;
            https?: components["schemas"]["DomainForwardProtocolSetResponse"] | null;
            /** Parking Id */
            parking_id: TypeId<"parking"> | null;
            /**
             * Updated On
             * Format: date-time
             */
            updated_on: Date;
        };
        /** DomainForwardBrowserStatsResponse */
        DomainForwardBrowserStatsResponse: {
            /** Results */
            results: components["schemas"]["BrowserStatsBucket"][];
        };
        /** DomainForwardCreateRequest */
        DomainForwardCreateRequest: {
            /**
             * Enabled
             * @default false
             */
            enabled: boolean;
            /** Hostname */
            hostname: string;
            http?: components["schemas"]["DomainForwardProtocolSetRequest"] | null;
            https?: components["schemas"]["DomainForwardProtocolSetRequest"] | null;
        };
        /** DomainForwardGeoStatsResponse */
        DomainForwardGeoStatsResponse: {
            /** Results */
            results: components["schemas"]["GeoStatsBucket"][];
        };
        /** DomainForwardMetricsResponse */
        DomainForwardMetricsResponse: {
            /** Configured Forwards */
            configured_forwards: number;
            /** Invoked Forwards */
            invoked_forwards: number;
            /** Total Visits */
            total_visits: number;
            /** Unique Visits */
            unique_visits: number;
        };
        /** DomainForwardMetricsTimeSeriesResponse */
        DomainForwardMetricsTimeSeriesResponse: {
            /** Results */
            results: components["schemas"]["TimeSeriesBucket"][];
        };
        /** DomainForwardPatchOp */
        DomainForwardPatchOp: {
            op: components["schemas"]["PatchOp"];
            /** Redirect */
            redirect: components["schemas"]["HttpRedirectUpsert"] | components["schemas"]["HttpRedirectRemove"];
        };
        /** DomainForwardPatchOps */
        DomainForwardPatchOps: {
            /** Ops */
            ops: components["schemas"]["DomainForwardPatchOp"][];
        };
        /** DomainForwardPlatformStatsResponse */
        DomainForwardPlatformStatsResponse: {
            /** Results */
            results: components["schemas"]["PlatformStatsBucket"][];
        };
        /** DomainForwardProtocolSetRequest */
        DomainForwardProtocolSetRequest: {
            /** Redirects */
            redirects: (components["schemas"]["HttpRedirectRequest"] | components["schemas"]["WildcardHttpRedirectRequest"])[];
        };
        /** DomainForwardProtocolSetResponse */
        DomainForwardProtocolSetResponse: {
            /**
             * Created On
             * Format: date-time
             */
            created_on: Date;
            /** Redirects */
            redirects: components["schemas"]["HttpRedirectListResponse"][];
            /**
             * Updated On
             * Format: date-time
             */
            updated_on: Date;
        };
        /** DomainForwardReferrerStatsResponse */
        DomainForwardReferrerStatsResponse: {
            /** Results */
            results: components["schemas"]["ReferrerStatsBucket"][];
        };
        /** DomainForwardSetCreateRequest */
        DomainForwardSetCreateRequest: {
            protocol: components["schemas"]["HttpProtocol"];
            /** Redirects */
            redirects: (components["schemas"]["HttpRedirectRequest"] | components["schemas"]["WildcardHttpRedirectRequest"])[];
        };
        /** DomainForwardSetRequest */
        DomainForwardSetRequest: {
            /** Redirects */
            redirects: (components["schemas"]["HttpRedirectRequest"] | components["schemas"]["WildcardHttpRedirectRequest"])[];
        };
        /** DomainForwardSetResponse */
        DomainForwardSetResponse: {
            /**
             * Created On
             * Format: date-time
             */
            created_on: Date;
            /** Hostname */
            hostname: string;
            protocol: components["schemas"]["HttpProtocol"];
            /** Redirects */
            redirects: components["schemas"]["HttpRedirectListResponse"][];
            /**
             * Updated On
             * Format: date-time
             */
            updated_on: Date;
        };
        /**
         * DomainForwardSortField
         * @enum {string}
         */
        DomainForwardSortField: "hostname" | "enabled" | "created_on" | "updated_on";
        /** DomainForwardStatusCodeStatsResponse */
        DomainForwardStatusCodeStatsResponse: {
            /** Results */
            results: components["schemas"]["StatusCodeStatsBucket"][];
        };
        /** DomainForwardUserAgentStatsResponse */
        DomainForwardUserAgentStatsResponse: {
            /** Results */
            results: components["schemas"]["UserAgentStatsBucket"][];
        };
        /** DomainForwardVisitsByKeyResponse */
        DomainForwardVisitsByKeyResponse: {
            /** Results */
            results: components["schemas"]["VisitsByKeyBucket"][];
        };
        /** DomainForwardZone */
        DomainForwardZone: {
            /** Domain Forwards */
            domain_forwards: components["schemas"]["DomainForward"][];
            /**
             * Zone Id
             * Format: typeid
             * @example zone_01h45ytscbebyvny4gc8cr8ma2
             */
            zone_id: TypeId<"zone">;
            /** Zone Name */
            zone_name: string;
        };
        /**
         * DomainForwardZoneSortField
         * @enum {string}
         */
        DomainForwardZoneSortField: "name" | "created_on" | "updated_on";
        /** DomainHostResponse */
        DomainHostResponse: {
            /**
             * Host Id
             * Format: typeid
             * @description The host id of the host
             * @example host_01h45ytscbebyvny4gc8cr8ma2
             */
            host_id: TypeId<"host">;
        };
        /** DomainLifecycleBase */
        DomainLifecycleBase: {
            /**
             * Add Grace Period
             * @description Add grace period in days after registration in ISO 8601 format (e.g., 5D, 3D)
             */
            add_grace_period?: string | null;
            /**
             * Auto Renew Before Expiration
             * @description Time before expiration to auto-renew a domain in ISO 8601 format (e.g., 5D, -7D)
             */
            auto_renew_before_expiration?: string | null;
            /** @description Default period for transfer if no transfer_renewal_period is specified */
            default_transfer_renewal_period: components["schemas"]["PeriodStr"];
            /**
             * Delete Before Expiration
             * @description Time before expiration to delete a domain in ISO 8601 format (e.g., 5D, -7D)
             */
            delete_before_expiration?: string | null;
            /**
             * Delete Policy
             * @description How a domain can be deleted
             */
            delete_policy?: components["schemas"]["DeletePolicyType"][] | null;
            /**
             * Explicit Renew
             * @description Whether an explicit renewal is possible
             */
            explicit_renew?: boolean | null;
            /**
             * Grace Period
             * @description Grace period after expiration in ISO 8601 format (e.g., 5D, -7D)
             * @example P5D
             * @example P30D
             */
            grace_period?: string | null;
            /**
             * Pending Delete
             * @description Pending delete period in ISO 8601 format (e.g., 5D, 10D) after redemption_period
             */
            pending_delete?: string | null;
            /**
             * Redemption Period
             * @description Redemption period for domain recovery after grace period in ISO 8601 format (e.g., 5D, -7D)
             */
            redemption_period?: string | null;
            /** @description List of allowed registration periods (e.g., '1y' or ['1y', '2y', '5y']) */
            registration_periods?: components["schemas"]["PeriodList"];
            /**
             * Registry Auto Renew
             * @description Does the registry enforce auto-renewal
             */
            registry_auto_renew?: boolean | null;
            /** @description List of allowed renewal periods (e.g., '1y' or ['1y', '2y', '5y']) */
            renewal_periods?: components["schemas"]["PeriodList"];
            /** @description RGP operations supported by the registry */
            rgp_operations?: components["schemas"]["RgpOperations"] | null;
            /**
             * Sync After Operations
             * @description Operations that trigger a sync with the registry
             */
            sync_after_operations?: components["schemas"]["SyncOperationType"][] | null;
            /** @description List of allowed transfer renewal periods (eg. '1y') */
            transfer_renewal_periods?: components["schemas"]["PeriodList"];
        };
        /** DomainNameParts */
        DomainNameParts: {
            /**
             * Domain
             * @example example
             */
            domain?: string | null;
            /**
             * Subdomain
             * @example foo
             */
            subdomain?: string | null;
            /**
             * Suffix
             * @example com
             */
            suffix?: string | null;
        };
        /** DomainPeriod */
        DomainPeriod: {
            /** @description The unit of the period */
            unit: components["schemas"]["PeriodUnit"];
            /**
             * Value
             * @description Amount of time in the unit
             */
            value: number;
        };
        /** DomainRenewRequest */
        DomainRenewRequest: {
            /**
             * Current Expiry Date
             * Format: date-time
             * @description Current expiration date of the domain for validation
             */
            current_expiry_date: Date;
            /** @description How long to extend the domain registration */
            period: components["schemas"]["DomainPeriod"];
        };
        /** DomainRenewResponse */
        DomainRenewResponse: {
            /**
             * Name
             * @description The domain name that was renewed
             */
            name: string;
            /**
             * New Expiry Date
             * Format: date-time
             * @description New expiration date after renewal
             */
            new_expiry_date: Date;
            /** @description The period by which the domain was extended */
            period_extended: components["schemas"]["DomainPeriod"];
        };
        /** DomainResponse */
        DomainResponse: {
            /**
             * Auth Code
             * @description The auth code for the domain
             */
            auth_code?: string | null;
            /**
             * Auth Code Expires On
             * @description When the auth code expires
             */
            auth_code_expires_on?: Date | null;
            /**
             * Canceled On
             * @description When the domain was deleted
             */
            canceled_on?: Date | null;
            /**
             * Contacts
             * @description The contacts of the domain
             */
            contacts?: components["schemas"]["DomainContactResponse"][];
            /**
             * Created On
             * Format: date-time
             * @description The date/time the entry was created on
             */
            created_on?: Date;
            /**
             * Deleted On
             * @description When the domain will be deleted
             */
            deleted_on?: Date | null;
            /**
             * Domain Id
             * Format: typeid
             * @example domain_01h45ytscbebyvny4gc8cr8ma2
             */
            domain_id?: TypeId<"domain">;
            /**
             * Expires On
             * @description When the domain expires
             */
            expires_on?: Date | null;
            /**
             * Hosts
             * @description The subordinate hosts of the domain
             */
            hosts?: components["schemas"]["DomainHostResponse"][];
            /**
             * Name
             * @description The domain name
             * @example example.com
             */
            name: string;
            /**
             * Nameservers
             * @description The nameservers of the domain
             */
            nameservers?: components["schemas"]["Nameserver"][];
            /**
             * Owner Id
             * Format: typeid
             * @description The organization that owns the domain
             * @default None
             * @example organization_01h45ytscbebyvny4gc8cr8ma2
             */
            owner_id: TypeId<"organization">;
            /**
             * Registered On
             * @description When the domain was registered
             */
            registered_on?: Date | null;
            /**
             * Registry Account Id
             * Format: typeid
             * @default None
             * @example registry_account_01h45ytscbebyvny4gc8cr8ma2
             */
            registry_account_id: TypeId<"registry_account">;
            /**
             * Registry Statuses
             * @description All the domain statuses
             */
            registry_statuses?: string[];
            /** @description The renewal mode of the domain */
            renewal_mode?: components["schemas"]["RenewalMode"];
            /**
             * Roid
             * @description The registry object id of the domain
             * @example D123456789-EXAMPLE-TEST
             */
            roid: string;
            /**
             * Sld
             * @description The second level domain
             * @example example
             */
            sld: string;
            /**
             * Tld
             * @description The top level domain of the domain
             * @example com
             */
            tld: string;
            /**
             * Transfer Lock
             * @description Whether the domain is locked for transfer
             * @default false
             */
            transfer_lock: boolean;
            /**
             * Updated On
             * Format: date-time
             * @description The date/time the entry was last updated on
             */
            updated_on?: Date;
        };
        /** DomainRestoreRequest */
        DomainRestoreRequest: {
            /**
             * Additional Info
             * @description Additional information to include in the restore operation
             */
            additional_info?: string | null;
            /**
             * Reason
             * @description Reason for restoring the domain
             */
            reason?: string | null;
        };
        /** DomainRestoreResponse */
        DomainRestoreResponse: {
            /**
             * Domain Id
             * Format: typeid
             * @description The ID of the restored domain
             * @example domain_01h45ytscbebyvny4gc8cr8ma2
             */
            domain_id: TypeId<"domain">;
            /**
             * Name
             * @description The name of the restored domain
             */
            name: string;
            /**
             * Restored At
             * Format: date-time
             * @description When the domain restore operation was completed
             */
            restored_at: Date;
        };
        /** DomainSearchMeta */
        DomainSearchMeta: {
            /** Processing Time Ms */
            processing_time_ms: number;
            /** Total */
            total: number;
        };
        /** DomainSearchResponse */
        DomainSearchResponse: {
            meta: components["schemas"]["DomainSearchMeta"];
            /** Results */
            results: components["schemas"]["DomainSearchSuggestionWithPrice"][];
        };
        /** DomainSearchSuggestionPriceData */
        DomainSearchSuggestionPriceData: {
            /** Amount */
            amount: string | null;
            /** Currency */
            currency: string;
            period: components["schemas"]["DomainPeriod"];
        };
        /** DomainSearchSuggestionWithPrice */
        DomainSearchSuggestionWithPrice: {
            /** Available */
            available: boolean;
            /** Domain */
            domain: string;
            /** Premium */
            premium: boolean;
            price: components["schemas"]["DomainSearchSuggestionPriceData"];
        };
        /**
         * DomainSortField
         * @enum {string}
         */
        DomainSortField: "name" | "created_on" | "updated_on" | "expires_on" | "registered_on";
        /**
         * DomainStatus
         * @enum {string}
         */
        DomainStatus: "ok" | "serverTransferProhibited" | "serverUpdateProhibited" | "serverDeleteProhibited" | "serverRenewProhibited" | "serverRestoreProhibited" | "serverHold" | "transferPeriod" | "renewPeriod" | "redemptionPeriod" | "pendingUpdate" | "pendingTransfer" | "pendingRestore" | "pendingRenew" | "pendingDelete" | "pendingCreate" | "inactive" | "autoRenewPeriod" | "addPeriod" | "deleted" | "clientTransferProhibited" | "clientUpdateProhibited" | "clientDeleteProhibited" | "clientRenewProhibited" | "clientHold" | "free" | "connect" | "failed" | "invalid";
        /** DomainStatusResponse */
        DomainStatusResponse: {
            /**
             * Status
             * @description The status of the domain
             */
            status: string;
        };
        /** DomainStatusesBase */
        DomainStatusesBase: {
            /**
             * Default
             * @description The default status for an active domain with no restrictions
             */
            default: string[];
            /**
             * Status Mapping
             * @description Mapping of registry-specific statuses to their equivalent default ones, if any
             */
            status_mapping?: {
                [key: string]: components["schemas"]["DomainStatus"][];
            } | null;
            /**
             * Supported Statuses
             * @description Supported domain statuses
             */
            supported_statuses: string[];
        };
        /** DomainSummaryData */
        DomainSummaryData: {
            /**
             * By Status
             * @description Domain counts by status (status: count)
             */
            by_status: {
                [key: string]: number;
            };
            /**
             * By Tld
             * @description Domain counts by TLD (tld: count)
             */
            by_tld: {
                [key: string]: number;
            };
            /** @description Domains expiring soon */
            expiring_soon: components["schemas"]["DomainsExpiringSoon"];
            /**
             * Total Count
             * @description Total number of domains
             */
            total_count: number;
        };
        /** DomainSummaryResponse */
        DomainSummaryResponse: {
            /** @description Domain summary data */
            domains: components["schemas"]["DomainSummaryData"];
            /**
             * Organization Id
             * Format: typeid
             * @description The organization ID
             * @example organization_01h45ytscbebyvny4gc8cr8ma2
             */
            organization_id: TypeId<"organization">;
        };
        /** DomainTransferIn */
        DomainTransferIn: {
            /**
             * Attributes
             * @description Additional attributes of the domain
             */
            attributes?: {
                [key: string]: string;
            } | null;
            /**
             * Auth Code
             * @description The auth code for the domain
             */
            auth_code: string;
            /**
             * Contacts
             * @description The contacts of the domain
             */
            contacts: components["schemas"]["DomainContactHandles"] | components["schemas"]["ContactIdList"];
            /**
             * Create Zone
             * @description Create a zone for the domain on OpusDNS nameserver infrastructure
             * @default false
             */
            create_zone: boolean;
            /**
             * Name
             * @description The domain to be created
             */
            name: string;
            /**
             * Nameservers
             * @description The name servers for the domain
             */
            nameservers?: components["schemas"]["Nameserver"][] | null;
            /** @description Additional registration period to add to the domain upon transfer completion. If omitted, the registry default policy will be applied. */
            period?: components["schemas"]["DomainPeriod"] | null;
            /** @description The renewal mode of the domain */
            renewal_mode: components["schemas"]["RenewalMode"];
        };
        /** DomainTransitRequest */
        DomainTransitRequest: {
            /**
             * Disconnect
             * @description Disconnect the domain from current nameserver and update to DENIC nameserver
             */
            disconnect: boolean;
        };
        /** DomainTransitResponse */
        DomainTransitResponse: {
            /**
             * Name
             * @description The domain name that was transited
             */
            name: string;
            /**
             * Success
             * @description Whether the transit operation was successful
             */
            success: boolean;
        };
        /** DomainUpdate */
        DomainUpdate: {
            /**
             * Auth Code
             * @description The new auth code for the domain
             */
            auth_code?: string | null;
            /**
             * Contacts
             * @description The new contacts of the domain
             * @example {
             *       "admin": "contact_01h45ytscbebyvny4gc8cr8ma2",
             *       "billing": "contact_01h45ytscbebyvny4gc8cr8ma2",
             *       "registrant": "contact_01h45ytscbebyvny4gc8cr8ma2",
             *       "tech": "contact_01h45ytscbebyvny4gc8cr8ma2"
             *     }
             */
            contacts?: components["schemas"]["DomainContactHandles"] | components["schemas"]["ContactIdList"] | null;
            /**
             * Nameservers
             * @description The new name servers for the domain
             */
            nameservers?: components["schemas"]["Nameserver"][] | null;
            /** @description The new renewal mode of the domain */
            renewal_mode?: components["schemas"]["RenewalMode"] | null;
            /**
             * Statuses
             * @description The new statuses of the domain
             */
            statuses?: components["schemas"]["DomainClientStatus"][] | null;
        };
        /** DomainWithdrawRequest */
        DomainWithdrawRequest: {
            /**
             * Zone Delete
             * @description Informs the registry whether the zone for that domain has been already deleted - as took from the docs: "(...) the registrar informs the registry that he has stopped the nameservice for the specified domain"
             */
            zone_delete: boolean;
        };
        /** DomainWithdrawResponse */
        DomainWithdrawResponse: {
            /**
             * Name
             * @description The domain name that was withdrawn
             */
            name: string;
            /**
             * Success
             * @description Whether the withdraw operation was successful
             */
            success: boolean;
        };
        /** DomainsExpiringSoon */
        DomainsExpiringSoon: {
            /**
             * Next 30 Days
             * @description Number of domains expiring in the next 30 days
             */
            next_30_days: number;
            /**
             * Next 60 Days
             * @description Number of domains expiring in the next 60 days
             */
            next_60_days: number;
            /**
             * Next 90 Days
             * @description Number of domains expiring in the next 90 days
             */
            next_90_days: number;
        };
        /** EmailForwardAlias */
        EmailForwardAlias: {
            /** Alias */
            alias: string;
            /**
             * Email Forward Alias Id
             * Format: typeid
             * @example email_forward_alias_01h45ytscbebyvny4gc8cr8ma2
             */
            email_forward_alias_id: TypeId<"email_forward_alias">;
            /** Forward To */
            forward_to: string[];
        };
        /** EmailForwardAliasCreate */
        EmailForwardAliasCreate: {
            /** Alias */
            alias: string;
            /** Forward To */
            forward_to: string[];
        };
        /** EmailForwardAliasMetrics */
        EmailForwardAliasMetrics: {
            /**
             * Alias
             * @description Email alias address
             */
            alias: string;
            /**
             * By Status
             * @description Log counts grouped by status
             */
            by_status: {
                [key: string]: number;
            };
            /**
             * Total Logs
             * @description Total number of logs for this alias
             */
            total_logs: number;
        };
        /** EmailForwardAliasUpdate */
        EmailForwardAliasUpdate: {
            /** Forward To */
            forward_to: string[];
        };
        /** EmailForwardCreate */
        EmailForwardCreate: {
            /**
             * Aliases
             * @default []
             */
            aliases: components["schemas"]["EmailForwardAliasCreate"][];
            /**
             * Enabled
             * @default false
             */
            enabled: boolean;
            /** Hostname */
            hostname: string;
        };
        /** EmailForwardLog */
        EmailForwardLog: {
            /**
             * Created On
             * Format: date-time
             * @description Timestamp when email was received by ImprovMX
             */
            created_on: Date;
            /**
             * Domain
             * @description Domain name
             */
            domain: string;
            /**
             * Events
             * @description List of processing events
             */
            events?: components["schemas"]["EmailForwardLogEvent"][];
            /** @description Final status of the email (QUEUED, DELIVERED, REFUSED, SOFT-BOUNCE, HARD-BOUNCE) */
            final_status: components["schemas"]["EmailForwardLogStatus"];
            /**
             * Forward Email
             * @description Forward destination email address
             */
            forward_email: string;
            /**
             * Forward Name
             * @description Forward destination name
             */
            forward_name?: string | null;
            /**
             * Hostname
             * @description Hostname that received the email
             */
            hostname: string;
            /**
             * Log Id
             * @description Unique ID of the log from ImprovMX
             */
            log_id: string;
            /**
             * Message Id
             * @description Email message ID
             */
            message_id: string;
            /**
             * Recipient Email
             * @description Recipient email address (the alias)
             */
            recipient_email: string;
            /**
             * Recipient Name
             * @description Recipient name
             */
            recipient_name?: string | null;
            /**
             * Sender Email
             * @description Sender email address
             */
            sender_email: string;
            /**
             * Sender Name
             * @description Sender name
             */
            sender_name?: string | null;
            /**
             * Subject
             * @description Email subject
             */
            subject: string;
            /**
             * Synced On
             * Format: date-time
             * @description Timestamp when record was synced to ClickHouse
             */
            synced_on: Date;
            /**
             * Transport
             * @description Transport method (mx or smtp)
             */
            transport: string;
        };
        /** EmailForwardLogEvent */
        EmailForwardLogEvent: {
            /**
             * Code
             * @description Event status code
             */
            code: number;
            /**
             * Created
             * Format: date-time
             * @description Timestamp when the event occurred
             */
            created: Date;
            /**
             * Id
             * @description Event ID
             */
            id: string;
            /**
             * Local
             * @description ImprovMX server that processed the event
             */
            local: string;
            /**
             * Message
             * @description Event message
             */
            message: string;
            /**
             * Server
             * @description Server that processed the event
             */
            server: string;
            /**
             * Status
             * @description Event status (QUEUED, DELIVERED, REFUSED, SOFT-BOUNCE, HARD-BOUNCE)
             */
            status: string;
        };
        /**
         * EmailForwardLogSortField
         * @enum {string}
         */
        EmailForwardLogSortField: "log_id" | "sender_email" | "recipient_email" | "forward_email" | "final_status" | "created_on" | "synced_on";
        /**
         * EmailForwardLogStatus
         * @enum {string}
         */
        EmailForwardLogStatus: "UNKNOWN" | "QUEUED" | "DELIVERED" | "REFUSED" | "SOFT-BOUNCE" | "HARD-BOUNCE";
        /** EmailForwardMetrics */
        EmailForwardMetrics: {
            /**
             * Alias Count
             * @description Number of aliases
             */
            alias_count?: number | null;
            /**
             * By Alias
             * @description Metrics breakdown per alias
             */
            by_alias?: components["schemas"]["EmailForwardAliasMetrics"][] | null;
            /**
             * By Status
             * @description Log counts grouped by status (QUEUED, DELIVERED, REFUSED, SOFT-BOUNCE, HARD-BOUNCE)
             */
            by_status: {
                [key: string]: number;
            };
            /** @description Applied filters */
            filters: components["schemas"]["EmailForwardMetricsFilters"];
            /** @description Rate percentages for each status */
            rates: components["schemas"]["EmailForwardMetricsRates"];
            /**
             * Total Logs
             * @description Total number of email forward logs
             */
            total_logs: number;
        };
        /** EmailForwardMetricsFilters */
        EmailForwardMetricsFilters: {
            /**
             * Domain
             * @description Domain name
             */
            domain: string;
            /**
             * End Time
             * @description End time filter (RFC3339)
             */
            end_time?: string | null;
            /**
             * Include Aliases
             * @description Whether alias breakdown is included
             */
            include_aliases?: boolean | null;
            /**
             * Start Time
             * @description Start time filter (RFC3339)
             */
            start_time?: string | null;
        };
        /** EmailForwardMetricsRates */
        EmailForwardMetricsRates: {
            /**
             * Bounce Rate
             * @description Bounce rate percentage
             */
            bounce_rate: number;
            /**
             * Delivery Rate
             * @description Delivery rate percentage
             */
            delivery_rate: number;
            /**
             * Queued Rate
             * @description Queued rate percentage
             */
            queued_rate: number;
            /**
             * Refused Rate
             * @description Refused rate percentage
             */
            refused_rate: number;
        };
        /** EmailForwardResponse */
        EmailForwardResponse: {
            /** Aliases */
            aliases: components["schemas"]["EmailForwardAlias"][];
            /**
             * Created On
             * Format: date-time
             */
            created_on: Date;
            /**
             * Email Forward Id
             * Format: typeid
             * @example email_forward_01h45ytscbebyvny4gc8cr8ma2
             */
            email_forward_id: TypeId<"email_forward">;
            /** Enabled */
            enabled: boolean;
            /** Hostname */
            hostname: string;
            /**
             * Updated On
             * Format: date-time
             */
            updated_on: Date;
        };
        /**
         * EmailForwardSortField
         * @enum {string}
         */
        EmailForwardSortField: "hostname" | "enabled" | "created_on" | "updated_on";
        /** EmailForwardZone */
        EmailForwardZone: {
            /** Email Forwards */
            email_forwards: components["schemas"]["EmailForwardResponse"][];
            /**
             * Zone Id
             * Format: typeid
             * @example zone_01h45ytscbebyvny4gc8cr8ma2
             */
            zone_id: TypeId<"zone">;
            /** Zone Name */
            zone_name: string;
        };
        /**
         * EmailForwardZoneSortField
         * @enum {string}
         */
        EmailForwardZoneSortField: "name" | "created_on" | "updated_on";
        /**
         * EmailVerificationStatus
         * @enum {string}
         */
        EmailVerificationStatus: "verified" | "pending" | "canceled";
        /** EmptyEvent */
        EmptyEvent: Record<string, never>;
        EppDateTime: Date | string;
        /**
         * EventObjectType
         * @enum {string}
         */
        EventObjectType: "DOMAIN" | "CONTACT" | "HOST" | "RAW" | "UNKNOWN";
        /** EventResponse */
        EventResponse: {
            /**
             * Acknowledged On
             * @description When the event was acknowledged
             */
            acknowledged_on?: Date | null;
            /**
             * Created On
             * Format: date-time
             * @description When the event was created
             */
            created_on: Date;
            /** Event Data */
            event_data: {
                [key: string]: unknown;
            };
            /**
             * Event Id
             * Format: typeid
             * @example epp_event_01h45ytscbebyvny4gc8cr8ma2
             */
            event_id?: TypeId<"epp_event">;
            /**
             * Object Id
             * @description The id of the object that the event is about
             */
            object_id?: string | null;
            /**
             * @description The type of object that the event is about
             * @default RAW
             */
            object_type: components["schemas"]["EventObjectType"];
            /** @description The specific type/result of operation (considering the type property), more detailed (e.g., 'NOTIFICATION' with the 'DOMAIN_MODIFICATION' class) */
            subtype?: components["schemas"]["EventSubtype"] | null;
            /** @description The type of the event - indicates the kind of operation occurring (e.g., 'ACCOUNT_CREATE', 'DOMAIN_MODIFICATION') */
            type?: components["schemas"]["EventType"] | null;
        };
        /** EventSchema */
        EventSchema: {
            /**
             * Acknowledged On
             * @description The date/time the event was acknowledged
             */
            acknowledged_on?: Date | null;
            /**
             * Created On
             * Format: date-time
             * @description The date/time the entry was created on
             */
            created_on?: Date;
            /** @description Additional details about the action */
            event_data: components["schemas"]["JsonValue"];
            /**
             * Event Id
             * Format: typeid
             * @example epp_event_01h45ytscbebyvny4gc8cr8ma2
             */
            event_id?: TypeId<"epp_event">;
            /**
             * Message Queue Id
             * @description A composite key with the registry account + message queue ID from the poll operation.
             */
            message_queue_id?: string | null;
            /**
             * Object Id
             * @description The id of the object that the event is about
             */
            object_id?: string | null;
            /**
             * @description The type of object that the event is about
             * @default RAW
             */
            object_type: components["schemas"]["EventObjectType"];
            /**
             * Source
             * @description The source of the event
             */
            source: string;
            /**
             * Source Event Id
             * @description The reference of the original registry event (if any) that triggered this customer-facing event
             */
            source_event_id?: TypeId<"epp_event"> | null;
            /** @description The specific type/result of operation (considering the type property), more detailed (e.g., 'NOTIFICATION' with the 'DOMAIN_MODIFICATION' class) */
            subtype?: components["schemas"]["EventSubtype"] | null;
            /**
             * Target
             * @description The target of the event
             */
            target?: TypeId<"organization"> | null;
            /** @description The type of the event - indicates the kind of operation occurring (e.g., 'ACCOUNT_CREATE', 'DOMAIN_MODIFICATION') */
            type?: components["schemas"]["EventType"] | null;
        };
        /**
         * EventSortField
         * @enum {string}
         */
        EventSortField: "object_id" | "created_on";
        /**
         * EventSubtype
         * @enum {string}
         */
        EventSubtype: "NOTIFICATION" | "SUCCESS" | "FAILURE" | "CANCELED";
        /**
         * EventType
         * @enum {string}
         */
        EventType: "REGISTRATION" | "RENEWAL" | "MODIFICATION" | "DELETION" | "INBOUND_TRANSFER" | "OUTBOUND_TRANSFER" | "VERIFICATION";
        /**
         * ExecutingEntity
         * @enum {string}
         */
        ExecutingEntity: "user" | "organization" | "system";
        /** GeneralAvailabilityBase */
        GeneralAvailabilityBase: {
            /**
             * Start Date
             * Format: date-time
             * @description Start date of general availability
             */
            start_date: Date;
        };
        /** GeoStatsBucket */
        GeoStatsBucket: {
            /** Key */
            key: string;
            /** Total */
            total: number;
        };
        /** GetPricesResponse */
        GetPricesResponse: {
            /**
             * Prices
             * @description List of prices
             */
            prices: components["schemas"]["PriceInfo"][];
        };
        /**
         * GrantType
         * @enum {string}
         */
        GrantType: "client_credentials" | "password" | "refresh_token";
        /**
         * HTTPMethod
         * @description HTTP methods and descriptions
         *
         *     Methods from the following RFCs are all observed:
         *
         *         * RFC 9110: HTTP Semantics, obsoletes 7231, which obsoleted 2616
         *         * RFC 5789: PATCH Method for HTTP
         * @enum {string}
         */
        HTTPMethod: "CONNECT" | "DELETE" | "GET" | "HEAD" | "OPTIONS" | "PATCH" | "POST" | "PUT" | "TRACE";
        /** RequestValidationError */
        HTTPValidationError: {
            errors: components["schemas"]["ValidationError"][];
            /** Status code */
            status: number;
            /** Problem title */
            title: string;
            /** Problem type */
            type: string;
        };
        /** HostSchema */
        HostSchema: {
            /**
             * Created On
             * Format: date-time
             * @description The date/time the entry was created on
             */
            created_on?: Date;
            /**
             * Domain Id
             * Format: typeid
             * @description The domain that the host object belongs to
             * @default None
             * @example domain_01h45ytscbebyvny4gc8cr8ma2
             */
            domain_id: TypeId<"domain">;
            /**
             * Host Id
             * Format: typeid
             * @example host_01h45ytscbebyvny4gc8cr8ma2
             */
            host_id?: TypeId<"host">;
            /**
             * Hostname
             * @description Hostname of the host object
             */
            hostname: string;
            /**
             * Registry Account Id
             * @description The registry account that the host object belongs to
             */
            registry_account_id?: TypeId<"registry_account"> | null;
            /**
             * @description Status of the host object
             * @default inactive
             */
            status: components["schemas"]["HostStatus"];
            /**
             * Updated On
             * Format: date-time
             * @description The date/time the entry was last updated on
             */
            updated_on?: Date;
        };
        /**
         * HostStatus
         * @enum {string}
         */
        HostStatus: "requested_create" | "pending_create" | "active" | "inactive" | "pending_delete";
        /**
         * HttpProtocol
         * @enum {string}
         */
        HttpProtocol: "http" | "https";
        /** HttpRedirectListResponse */
        HttpRedirectListResponse: {
            /**
             * Protected
             * @default false
             */
            protected: boolean;
            redirect_code: components["schemas"]["RedirectCode"];
            /** Request Hostname */
            request_hostname: string;
            /** Request Path */
            request_path: string;
            request_protocol: components["schemas"]["HttpProtocol"];
            /** Request Subdomain */
            request_subdomain?: string | null;
            /** Target Hostname */
            target_hostname: string;
            /** Target Path */
            target_path: string;
            target_protocol: components["schemas"]["HttpProtocol"];
        };
        /** HttpRedirectRemove */
        HttpRedirectRemove: {
            /** Request Hostname */
            request_hostname: string;
            /** Request Path */
            request_path: string;
            request_protocol: components["schemas"]["HttpProtocol"];
            /** Request Subdomain */
            request_subdomain?: string | null;
        };
        /** HttpRedirectRequest */
        HttpRedirectRequest: {
            redirect_code: components["schemas"]["RedirectCode"];
            /** Request Path */
            request_path: string;
            /** Target Hostname */
            target_hostname: string;
            /** Target Path */
            target_path: string;
            target_protocol: components["schemas"]["HttpProtocol"];
        };
        /** HttpRedirectUpsert */
        HttpRedirectUpsert: {
            redirect_code: components["schemas"]["RedirectCode"];
            /** Request Hostname */
            request_hostname: string;
            /** Request Path */
            request_path: string;
            request_protocol: components["schemas"]["HttpProtocol"];
            /** Request Subdomain */
            request_subdomain?: string | null;
            /** Target Hostname */
            target_hostname: string;
            /** Target Path */
            target_path: string;
            target_protocol: components["schemas"]["HttpProtocol"];
        };
        /** IdnBase */
        IdnBase: {
            /**
             * Idn Capable
             * @description IDN allowed
             */
            idn_capable: boolean;
            /**
             * Idn Tables
             * @description Allowed IDN characters, file with the IDN codes
             */
            idn_tables?: string[] | null;
        };
        /** InvoiceResponse */
        InvoiceResponse: {
            /**
             * Amount
             * @description Total invoice amount
             */
            amount: string;
            /** @description Invoice currency */
            currency: components["schemas"]["Currency"];
            /**
             * External Id
             * @description Lago ID (external) for this invoice
             */
            external_id: string;
            /**
             * Fees Amount
             * @description Fees amount
             */
            fees_amount: string;
            /**
             * File Url
             * @description URL to invoice PDF file
             */
            file_url: string | null;
            /** @description Invoice type */
            invoice_type: components["schemas"]["InvoiceResponseType"];
            /**
             * Issuing Date
             * Format: date-time
             * @description Invoice issuing date
             */
            issuing_date: Date;
            /**
             * Number
             * @description Invoice number
             */
            number: string;
            /**
             * Payment Due Date
             * Format: date-time
             * @description Payment due date
             */
            payment_due_date: Date;
            /**
             * Payment Overdue
             * @description Whether payment is overdue
             */
            payment_overdue: boolean;
            /** @description Payment status */
            payment_status: components["schemas"]["InvoiceResponsePaymentStatus"];
            /** @description Invoice status */
            status: components["schemas"]["InvoiceResponseStatus"];
            /**
             * Taxes Amount
             * @description Taxes amount
             */
            taxes_amount: string;
        };
        /**
         * InvoiceResponsePaymentStatus
         * @enum {string}
         */
        InvoiceResponsePaymentStatus: "pending" | "failed" | "succeeded";
        /**
         * InvoiceResponseStatus
         * @enum {string}
         */
        InvoiceResponseStatus: "draft" | "finalized" | "failed" | "pending" | "voided";
        /**
         * InvoiceResponseType
         * @enum {string}
         */
        InvoiceResponseType: "subscription" | "add_on" | "credit" | "one_off" | "advance_charges" | "progressive_billing";
        /**
         * IpRestrictionCreate
         * @description Create an IP restriction for an organization.
         *
         *     Accepts either a single IP address or a CIDR network range.
         *     Individual IP addresses are stored and returned with CIDR notation (/32 for IPv4, /128 for IPv6).
         */
        IpRestrictionCreate: {
            /**
             * Ip Network
             * Format: ipvanynetwork
             * @description IP address or CIDR network range. Individual IPs can be specified without CIDR notation.
             * @example 192.0.2.1
             * @example 192.0.2.0/24
             * @example 2001:db8::1
             * @example 2001:db8::/32
             */
            ip_network: string;
            /**
             * Organization Id
             * Format: typeid
             * @example organization_01h45ytscbebyvny4gc8cr8ma2
             */
            organization_id?: TypeId<"organization">;
        };
        /** IpRestrictionResponse */
        IpRestrictionResponse: {
            /**
             * Created On
             * Format: date-time
             */
            created_on: Date;
            /**
             * Ip Network
             * Format: ipvanynetwork
             * @description IP address or CIDR network range. Single IPs are returned with /32 (IPv4) or /128 (IPv6) notation.
             * @example 192.0.2.1/32
             * @example 192.0.2.0/24
             * @example 2001:db8::1/128
             * @example 2001:db8::/32
             */
            ip_network: string;
            /** Ip Restriction Id */
            ip_restriction_id: number;
            /** Last Used On */
            last_used_on?: Date | null;
            /**
             * Organization Id
             * Format: typeid
             * @example organization_01h45ytscbebyvny4gc8cr8ma2
             */
            organization_id: TypeId<"organization">;
        };
        /**
         * IpRestrictionUpdate
         * @description Update an existing IP restriction.
         *
         *     You can update the IP network range or the last usage timestamp.
         */
        IpRestrictionUpdate: {
            /**
             * Ip Network
             * @description IP address or CIDR network range to replace the existing restriction.
             * @example 192.0.2.1
             * @example 192.0.2.0/24
             * @example 2001:db8::1
             * @example 2001:db8::/32
             */
            ip_network?: string | null;
            /**
             * Last Used On
             * @description Timestamp of the last usage.
             */
            last_used_on?: Date | null;
        };
        JsonValue: unknown;
        /** LaunchPhaseBase */
        LaunchPhaseBase: {
            /** @description Allocation method */
            allocation?: components["schemas"]["AllocationMethodType"] | null;
            /**
             * End Date
             * @description End date of the phase
             */
            end_date?: Date | null;
            /**
             * Smd Required
             * @description Whether an SMD file is required for participation
             */
            smd_required?: boolean | null;
            /**
             * Start Date
             * @description Start date of the phase
             */
            start_date?: Date | null;
            /**
             * Supported
             * @description Whether this phase is supported
             */
            supported: boolean;
            /** @description Type of launch phase */
            type: components["schemas"]["LaunchPhaseType"];
        };
        /**
         * LaunchPhaseType
         * @enum {string}
         */
        LaunchPhaseType: "sunrise" | "landrush" | "eap";
        /** LaunchPhasesBase */
        LaunchPhasesBase: {
            general_availability: components["schemas"]["GeneralAvailabilityBase"];
            /**
             * Phases
             * @default []
             */
            phases: components["schemas"]["LaunchPhaseBase"][];
            trademark_claims?: components["schemas"]["TrademarkClaimsBase"] | null;
        };
        /** LocalPresenceBase */
        LocalPresenceBase: {
            /**
             * Eligible Countries
             * @description ISO 3166-1 Alpha-2 country code
             */
            eligible_countries?: string[] | null;
            /**
             * Required
             * @description Whether a local presence is required to register and maintain a domain name
             */
            required: boolean;
            /**
             * Requirement
             * @description Type of local presence requirement
             */
            requirement?: components["schemas"]["LocalPresenceRequirementType"][] | null;
            /**
             * Type
             * @description Who must meet the requirement
             */
            type?: components["schemas"]["DomainContactType"][] | null;
        };
        /**
         * LocalPresenceRequirementType
         * @enum {string}
         */
        LocalPresenceRequirementType: "physical_address" | "business_entity";
        /**
         * MetricsGrouping
         * @enum {string}
         */
        MetricsGrouping: "url" | "fqdn" | "domain" | "forward";
        /** Nameserver */
        Nameserver: {
            /**
             * Hostname
             * @description The name server of the domain
             * @example ns1.example.com
             */
            hostname: string;
            /**
             * Ip Addresses
             * @description The ip addresses of the name server
             * @example [
             *       "0.0.0.0",
             *       "127.0.0.1"
             *     ]
             * @example [
             *       "2001:db8::1",
             *       "2001:db8::2"
             *     ]
             */
            ip_addresses?: string[];
        };
        /**
         * ObjectEventType
         * @enum {string}
         */
        ObjectEventType: "CREATED" | "UPDATED" | "DELETED" | "TRANSFER_STARTED" | "TRANSFER_COMPLETED" | "TRANSFER_OUT_STARTED" | "TRANSFER_OUT_COMPLETED" | "RENEWED" | "RESTORED" | "BILLING_TRANSACTION_RESERVED" | "BILLING_TRANSACTION_SUCCEEDED" | "BILLING_TRANSACTION_FAILED" | "BILLING_TRANSACTION_CANCELLED";
        /** ObjectLog */
        ObjectLog: {
            /** @description Action performed */
            action: components["schemas"]["ObjectEventType"];
            /**
             * Created On
             * Format: date-time
             * @description Timestamp when the log was created
             */
            created_on: Date;
            /**
             * Details
             * @description Changes made to the object
             */
            details?: {
                [key: string]: unknown;
            } | null;
            /**
             * Object Id
             * @description ID of the object
             */
            object_id: string;
            /**
             * Object Log Id
             * @description Unique ID of the log
             */
            object_log_id: string;
            /**
             * Object Type
             * @description Type of the object
             */
            object_type: string;
            /**
             * Performed By Id
             * @description ID of the actor who performed the action
             */
            performed_by_id?: string | null;
            /** @description Type of the actor who performed the action */
            performed_by_type?: components["schemas"]["ExecutingEntity"] | null;
            /**
             * Server Request Id
             * @description Server request ID
             */
            server_request_id?: string | null;
        };
        /**
         * ObjectLogSortField
         * @enum {string}
         */
        ObjectLogSortField: "object_log_id" | "object_id" | "object_type" | "action" | "created_on" | "server_request_id" | "performed_by_type" | "performed_by_id";
        /** Organization */
        Organization: {
            /**
             * Address 1
             * @description First line of the organization's address.
             */
            address_1?: string | null;
            /**
             * Address 2
             * @description Second line of the organization's address.
             */
            address_2?: string | null;
            /** Attributes */
            attributes?: components["schemas"]["OrganizationAttribute"][];
            /**
             * Business Number
             * @description Government issued business identifier for the organization issued.
             */
            business_number?: string | null;
            /**
             * City
             * @description City of the organization's address.
             */
            city?: string | null;
            /**
             * Country Code
             * @description ISO 3166-1 alpha-2 country code.
             */
            country_code?: string | null;
            /**
             * Created On
             * Format: date-time
             * @description The date/time the entry was created on
             */
            created_on?: Date;
            /** @description The currency used by the organization. */
            currency?: components["schemas"]["Currency"] | null;
            /**
             * Default Locale
             * @description Default locale for the organization.
             */
            default_locale?: string | null;
            /**
             * Deleted On
             * @description The date/time the entry was deleted on
             */
            deleted_on?: Date | null;
            /**
             * Name
             * @description Name of the organization.
             */
            name: string;
            /**
             * Organization Id
             * Format: typeid
             * @description Unique identifier for the organization.
             * @example organization_01h45ytscbebyvny4gc8cr8ma2
             */
            organization_id?: TypeId<"organization">;
            /**
             * Parent Organization Id
             * @description ID of the parent organization.
             */
            parent_organization_id?: TypeId<"organization"> | null;
            /**
             * Postal Code
             * @description Postal code of the organization's address.
             */
            postal_code?: string | null;
            /**
             * State
             * @description State or province of the organization's address.
             */
            state?: string | null;
            /**
             * @description Status of the organization.
             * @default active
             */
            status: components["schemas"]["OrganizationStatus"];
            /**
             * Tax Id
             * @description Tax ID of the organization.
             */
            tax_id?: string | null;
            /**
             * Tax Id Type
             * @description Type of tax ID for the organization.
             */
            tax_id_type?: string | null;
            /**
             * Tax Rate
             * @description Tax rate for the organization.
             */
            tax_rate?: string | null;
            /** Users */
            users?: components["schemas"]["User"][];
        };
        /** OrganizationAttribute */
        OrganizationAttribute: {
            /**
             * Created On
             * Format: date-time
             * @description The date/time the entry was created on
             */
            created_on?: Date;
            /**
             * Key
             * @description Key of the attribute.
             */
            key: string;
            /** Organization Attribute Id */
            organization_attribute_id: number;
            /**
             * Private
             * @description When true, the attribute is private and not visible to users.
             * @default false
             */
            private: boolean;
            /**
             * Protected
             * @description When true, the attribute is protected and cannot be modified by users.
             * @default false
             */
            protected: boolean;
            /**
             * Updated On
             * Format: date-time
             * @description The date/time the entry was last updated on
             */
            updated_on?: Date;
            /** @description Value of the attribute. */
            value?: components["schemas"]["JsonValue"] | null;
        };
        /** OrganizationAttributeCreate */
        OrganizationAttributeCreate: {
            /**
             * Key
             * @description Key of the attribute.
             */
            key: string;
            /**
             * Private
             * @description When true, the attribute is private and not visible to users.
             * @default false
             */
            private: boolean;
            /**
             * Protected
             * @description When true, the attribute is protected and cannot be modified by users.
             * @default false
             */
            protected: boolean;
            /** @description Value of the attribute. */
            value?: components["schemas"]["JsonValue"] | null;
        };
        /** OrganizationAttributeResponse */
        OrganizationAttributeResponse: {
            /**
             * Created On
             * Format: date-time
             * @description The date/time the entry was created on
             */
            created_on?: Date;
            /**
             * Key
             * @description Key of the attribute.
             */
            key: string;
            /** Organization Attribute Id */
            organization_attribute_id: number;
            /**
             * Protected
             * @description When true, the attribute is protected and cannot be modified by users.
             * @default false
             */
            protected: boolean;
            /**
             * Updated On
             * Format: date-time
             * @description The date/time the entry was last updated on
             */
            updated_on?: Date;
            /** @description Value of the attribute. */
            value?: components["schemas"]["JsonValue"] | null;
        };
        /** OrganizationAttributeUpdate */
        OrganizationAttributeUpdate: {
            /**
             * Key
             * @description Key of the attribute.
             */
            key: string;
            /**
             * Private
             * @description When true, the attribute is private and not visible to users.
             * @default false
             */
            private: boolean;
            /**
             * Protected
             * @description When true, the attribute is protected and cannot be modified by users.
             * @default false
             */
            protected: boolean;
            /** @description Value of the attribute. */
            value?: components["schemas"]["JsonValue"] | null;
        };
        /** OrganizationCreate */
        OrganizationCreate: {
            /**
             * Address 1
             * @description First line of the organization's address.
             */
            address_1?: string | null;
            /**
             * Address 2
             * @description Second line of the organization's address.
             */
            address_2?: string | null;
            /**
             * Attributes
             * @description List of attributes for the organization.
             */
            attributes?: components["schemas"]["OrganizationAttributeCreate"][];
            /**
             * Business Number
             * @description Government issued business identifier for the organization issued.
             */
            business_number?: string | null;
            /**
             * City
             * @description City of the organization's address.
             */
            city?: string | null;
            /**
             * Country Code
             * @description ISO 3166-1 alpha-2 country code.
             */
            country_code?: string | null;
            /** @description The currency used by the organization. */
            currency?: components["schemas"]["Currency"] | null;
            /**
             * Default Locale
             * @description Default locale for the organization.
             */
            default_locale?: string | null;
            /**
             * Name
             * @description Name of the organization.
             */
            name: string;
            /**
             * Parent Organization Id
             * @description ID of the parent organization.
             */
            parent_organization_id?: TypeId<"organization"> | null;
            /**
             * Postal Code
             * @description Postal code of the organization's address.
             */
            postal_code?: string | null;
            /**
             * State
             * @description State or province of the organization's address.
             */
            state?: string | null;
            /**
             * Tax Id
             * @description Tax ID of the organization.
             */
            tax_id?: string | null;
            /**
             * Tax Id Type
             * @description Type of tax ID for the organization.
             */
            tax_id_type?: string | null;
            /**
             * Tax Rate
             * @description Tax rate for the organization.
             */
            tax_rate?: number | string | null;
            /**
             * Users
             * @description List of users that needs to be created with the organization.
             */
            users?: components["schemas"]["UserCreate"][];
        };
        /**
         * OrganizationStatus
         * @enum {string}
         */
        OrganizationStatus: "active" | "inactive";
        /** OrganizationTokenResponse */
        OrganizationTokenResponse: {
            /** Access Token */
            access_token: string;
            /** Expires In */
            expires_in: number;
            /**
             * Token Type
             * @default Bearer
             */
            token_type: string;
        };
        /** OrganizationUpdate */
        OrganizationUpdate: {
            /**
             * Address 1
             * @description First line of the organization's address.
             */
            address_1?: string | null;
            /**
             * Address 2
             * @description Second line of the organization's address.
             */
            address_2?: string | null;
            /**
             * Business Number
             * @description Government issued business identifier for the organization issued.
             */
            business_number?: string | null;
            /**
             * City
             * @description City of the organization's address.
             */
            city?: string | null;
            /** Country Code */
            country_code?: string | null;
            /**
             * Default Locale
             * @description Default locale for the organization.
             */
            default_locale?: string | null;
            /**
             * Name
             * @description Name of the organization.
             */
            name?: string | null;
            /**
             * Postal Code
             * @description Postal code of the organization's address.
             */
            postal_code?: string | null;
            /**
             * State
             * @description State or province of the organization's address.
             */
            state?: string | null;
            /**
             * Tax Id
             * @description Tax ID of the organization.
             */
            tax_id?: string | null;
            /**
             * Tax Id Type
             * @description Type of tax ID for the organization.
             */
            tax_id_type?: string | null;
            /**
             * Tax Rate
             * @description Tax rate for the organization.
             */
            tax_rate?: number | string | null;
        };
        /** OrganizationWithBillingData */
        OrganizationWithBillingData: {
            /** Account Balance */
            account_balance?: string | null;
            active_plan?: components["schemas"]["BillingPlan"];
            /**
             * Address 1
             * @description First line of the organization's address.
             */
            address_1?: string | null;
            /**
             * Address 2
             * @description Second line of the organization's address.
             */
            address_2?: string | null;
            /** Attributes */
            attributes?: components["schemas"]["OrganizationAttribute"][];
            billing_metadata?: components["schemas"]["BillingMetadata"];
            /**
             * Business Number
             * @description Government issued business identifier for the organization issued.
             */
            business_number?: string | null;
            /**
             * City
             * @description City of the organization's address.
             */
            city?: string | null;
            /**
             * Country Code
             * @description ISO 3166-1 alpha-2 country code.
             */
            country_code?: string | null;
            /**
             * Created On
             * Format: date-time
             * @description The date/time the entry was created on
             */
            created_on?: Date;
            /** @description The currency used by the organization. */
            currency?: components["schemas"]["Currency"] | null;
            /**
             * Default Locale
             * @description Default locale for the organization.
             */
            default_locale?: string | null;
            /**
             * Deleted On
             * @description The date/time the entry was deleted on
             */
            deleted_on?: Date | null;
            /**
             * Name
             * @description Name of the organization.
             */
            name: string;
            /**
             * Organization Id
             * Format: typeid
             * @description Unique identifier for the organization.
             * @example organization_01h45ytscbebyvny4gc8cr8ma2
             */
            organization_id?: TypeId<"organization">;
            /**
             * Parent Organization Id
             * @description ID of the parent organization.
             */
            parent_organization_id?: TypeId<"organization"> | null;
            /**
             * Postal Code
             * @description Postal code of the organization's address.
             */
            postal_code?: string | null;
            /**
             * State
             * @description State or province of the organization's address.
             */
            state?: string | null;
            /**
             * @description Status of the organization.
             * @default active
             */
            status: components["schemas"]["OrganizationStatus"];
            /**
             * Tax Id
             * @description Tax ID of the organization.
             */
            tax_id?: string | null;
            /**
             * Tax Id Type
             * @description Type of tax ID for the organization.
             */
            tax_id_type?: string | null;
            /**
             * Tax Rate
             * @description Tax rate for the organization.
             */
            tax_rate?: string | null;
            /** Users */
            users?: components["schemas"]["User"][];
        };
        /** PaginationMetadata */
        PaginationMetadata: {
            /** Current Page */
            current_page: number;
            /** Has Next Page */
            has_next_page: boolean;
            /** Has Previous Page */
            has_previous_page: boolean;
            /** Page Size */
            page_size: number;
            /** Total Items */
            total_items: number;
            /** Total Pages */
            total_pages: number;
        };
        /** Pagination[BillingTransactionResponse] */
        Pagination_BillingTransactionResponse_: {
            pagination: components["schemas"]["PaginationMetadata"];
            /** Results */
            results: components["schemas"]["BillingTransactionResponse"][];
        };
        /** Pagination[ContactSchema] */
        Pagination_ContactSchema_: {
            pagination: components["schemas"]["PaginationMetadata"];
            /** Results */
            results: components["schemas"]["ContactSchema"][];
        };
        /** Pagination[DnsZoneResponse] */
        Pagination_DnsZoneResponse_: {
            pagination: components["schemas"]["PaginationMetadata"];
            /** Results */
            results: components["schemas"]["DnsZoneResponse"][];
        };
        /** Pagination[DomainForwardZone] */
        Pagination_DomainForwardZone_: {
            pagination: components["schemas"]["PaginationMetadata"];
            /** Results */
            results: components["schemas"]["DomainForwardZone"][];
        };
        /** Pagination[DomainForward] */
        Pagination_DomainForward_: {
            pagination: components["schemas"]["PaginationMetadata"];
            /** Results */
            results: components["schemas"]["DomainForward"][];
        };
        /** Pagination[DomainResponse] */
        Pagination_DomainResponse_: {
            pagination: components["schemas"]["PaginationMetadata"];
            /** Results */
            results: components["schemas"]["DomainResponse"][];
        };
        /** Pagination[EmailForwardLog] */
        Pagination_EmailForwardLog_: {
            pagination: components["schemas"]["PaginationMetadata"];
            /** Results */
            results: components["schemas"]["EmailForwardLog"][];
        };
        /** Pagination[EmailForwardResponse] */
        Pagination_EmailForwardResponse_: {
            pagination: components["schemas"]["PaginationMetadata"];
            /** Results */
            results: components["schemas"]["EmailForwardResponse"][];
        };
        /** Pagination[EmailForwardZone] */
        Pagination_EmailForwardZone_: {
            pagination: components["schemas"]["PaginationMetadata"];
            /** Results */
            results: components["schemas"]["EmailForwardZone"][];
        };
        /** Pagination[EventResponse] */
        Pagination_EventResponse_: {
            pagination: components["schemas"]["PaginationMetadata"];
            /** Results */
            results: components["schemas"]["EventResponse"][];
        };
        /** Pagination[InvoiceResponse] */
        Pagination_InvoiceResponse_: {
            pagination: components["schemas"]["PaginationMetadata"];
            /** Results */
            results: components["schemas"]["InvoiceResponse"][];
        };
        /** Pagination[ObjectLog] */
        Pagination_ObjectLog_: {
            pagination: components["schemas"]["PaginationMetadata"];
            /** Results */
            results: components["schemas"]["ObjectLog"][];
        };
        /** Pagination[Organization] */
        Pagination_Organization_: {
            pagination: components["schemas"]["PaginationMetadata"];
            /** Results */
            results: components["schemas"]["Organization"][];
        };
        /** Pagination[ParkingResponse] */
        Pagination_ParkingResponse_: {
            pagination: components["schemas"]["PaginationMetadata"];
            /** Results */
            results: components["schemas"]["ParkingResponse"][];
        };
        /** Pagination[RequestHistory] */
        Pagination_RequestHistory_: {
            pagination: components["schemas"]["PaginationMetadata"];
            /** Results */
            results: components["schemas"]["RequestHistory"][];
        };
        /** Pagination[UserPublic] */
        Pagination_UserPublic_: {
            pagination: components["schemas"]["PaginationMetadata"];
            /** Results */
            results: components["schemas"]["UserPublic"][];
        };
        /**
         * ParkingAgreementAcceptance
         * @description Parking agreement acceptance details.
         */
        ParkingAgreementAcceptance: {
            /**
             * Accepted
             * @description Whether the agreement has been accepted
             */
            accepted: boolean;
            /**
             * Url
             * Format: uri
             * @description URL where the parking agreement can be found
             */
            url: string;
            /**
             * Version
             * @description Version of the parking agreement being accepted
             */
            version: string;
        };
        /** ParkingMetricsResponse */
        ParkingMetricsResponse: {
            /** @description Metrics for the parking entry */
            metrics: components["schemas"]["ParkingStatistics"];
            /**
             * Renewal Cost
             * @description Yearly renewal cost for the parked domain
             */
            renewal_cost: string;
            /** @description Currency code for renewal cost (e.g., USD, EUR) */
            renewal_cost_currency: components["schemas"]["Currency"];
            /**
             * Revenue Progress
             * @description Revenue progress percentage towards covering renewal cost
             */
            revenue_progress: string;
        };
        /** ParkingResponse */
        ParkingResponse: {
            /** @description The compliance status of the parking ad */
            compliance_status?: components["schemas"]["ComplianceStatus"] | null;
            /**
             * Content Language
             * @description The primary language code for the ad content
             */
            content_language?: string | null;
            /**
             * Content Url
             * @description The content URL for approved parking ads
             */
            content_url?: string | null;
            /**
             * Created On
             * Format: date-time
             * @description When the parking entry was created
             */
            created_on: Date;
            /**
             * Domain
             * @description The domain name for the parking ad
             */
            domain: string;
            /**
             * Enabled
             * @description Whether parking is enabled
             */
            enabled: boolean;
            /**
             * Note
             * @description Additional notes about the parking ad
             */
            note?: string | null;
            /**
             * Parking Id
             * Format: typeid
             * @description Unique identifier for the parking entry
             * @example parking_01h45ytscbebyvny4gc8cr8ma2
             */
            parking_id: TypeId<"parking">;
            /**
             * Updated On
             * Format: date-time
             * @description When the parking entry was last updated
             */
            updated_on: Date;
        };
        /**
         * ParkingSignupRequest
         * @description Request to sign up for parking (accept parking agreement).
         */
        ParkingSignupRequest: {
            /** @description Parking agreement acceptance */
            agreement: components["schemas"]["ParkingAgreementAcceptance"];
        };
        /**
         * ParkingSignupResponse
         * @description Response after parking signup.
         */
        ParkingSignupResponse: {
            /**
             * Agreement Stored
             * @description Whether the agreement acceptance was stored
             */
            agreement_stored: boolean;
            /**
             * Success
             * @description Whether the signup was successful
             */
            success: boolean;
        };
        /**
         * ParkingSignupStatusResponse
         * @description Response for checking parking signup status.
         */
        ParkingSignupStatusResponse: {
            /**
             * Accepted At
             * @description When the agreement was accepted
             */
            accepted_at?: Date | null;
            /**
             * Agreement Version
             * @description Version of the accepted agreement
             */
            agreement_version?: string | null;
            /**
             * Has Accepted Agreement
             * @description Whether the organization has accepted the parking agreement
             */
            has_accepted_agreement: boolean;
        };
        /**
         * ParkingSortField
         * @enum {string}
         */
        ParkingSortField: "domain" | "created_on" | "updated_on";
        /** ParkingStatistics */
        ParkingStatistics: {
            /**
             * Conversions
             * @description Number of conversions
             */
            conversions: number;
            /**
             * Revenue
             * @description Total revenue
             */
            revenue: string;
            /** @description Currency code for revenue (e.g., USD, EUR) */
            revenue_currency: components["schemas"]["Currency"];
            /**
             * Rpc
             * @description Revenue per click
             */
            rpc: string;
            /**
             * Rpm
             * @description Revenue per mille (thousand views)
             */
            rpm: string;
            /**
             * Views
             * @description Number of views
             */
            views: number;
        };
        /** ParkingTotalMetricsResponse */
        ParkingTotalMetricsResponse: {
            /**
             * Total Count
             * @description Total number of parking entries
             */
            total_count: number;
            /** @description Aggregated metrics for all parking entries */
            total_metrics: components["schemas"]["ParkingStatistics"];
        };
        /** PasswordUpdate */
        PasswordUpdate: {
            /**
             * New Password
             * @example correcthorsebatterystaple
             */
            new_password: string;
        };
        /**
         * PatchOp
         * @enum {string}
         */
        PatchOp: "upsert" | "remove";
        /** Period */
        Period: {
            /** @description The unit of the period */
            unit: components["schemas"]["PeriodUnit"];
            /**
             * Value
             * @description Amount of time in the unit
             */
            value: number;
        };
        PeriodList: components["schemas"]["Period"][] | null;
        PeriodStr: components["schemas"]["Period"] | null;
        /**
         * PeriodUnit
         * @enum {string}
         */
        PeriodUnit: "y" | "m" | "d";
        /**
         * Permission
         * @enum {string}
         */
        Permission: "bulk_create" | "bulk_delete" | "bulk_renew_expire" | "bulk_transfer_trade" | "bulk_update" | "corporate_plan" | "create" | "delete" | "delete_domain_forwards" | "enterprise_plan" | "has_accepted_tos" | "manage_api_keys" | "manage_billing" | "manage_cms_content" | "manage_contacts" | "manage_dns_zones" | "manage_domains" | "manage_domain_forwards" | "manage_email_forwards" | "manage_events" | "manage_hosts" | "manage_jobs" | "manage_opusdns_api_keys" | "manage_products" | "manage_reseller" | "manage_sub_zones" | "manage_users" | "manage_user_relations" | "plan_manager" | "premium_plan" | "renew_expire" | "starter_plan" | "transfer_trade" | "update" | "update_domain_forwards" | "verify" | "view" | "view_audit_logs" | "view_domain_forwards" | "view_email_forwards" | "view_events" | "view_parking" | "manage_parking";
        /** PermissionSet */
        PermissionSet: {
            /** Permissions */
            permissions?: components["schemas"]["Permission"][];
        };
        /** PlatformStatsBucket */
        PlatformStatsBucket: {
            /** Key */
            key: string;
            /** Total */
            total: number;
            /** Unique */
            unique: number;
        };
        /**
         * PostTransferRequirements
         * @enum {string}
         */
        PostTransferRequirements: "update_contacts" | "tld_specific";
        /**
         * PostalAddressType
         * @enum {string}
         */
        PostalAddressType: "loc" | "int";
        /**
         * PremiumAffectsType
         * @enum {string}
         */
        PremiumAffectsType: "registration" | "renewal";
        /** PremiumDomainsBase */
        PremiumDomainsBase: {
            /**
             * Affects
             * @description What operations are affected by premium status
             */
            affects?: components["schemas"]["PremiumAffectsType"][] | null;
            /** @description Source of premium domain information */
            source?: components["schemas"]["PremiumSourceType"] | null;
            /**
             * Supported
             * @description Whether the registry has premium domains
             */
            supported: boolean;
        };
        /**
         * PremiumSourceType
         * @enum {string}
         */
        PremiumSourceType: "EPP" | "API" | "CSV" | "manual";
        /** PriceInfo */
        PriceInfo: {
            /** Currency */
            currency: string;
            /** @description Pricing period (e.g., 1 year, 2 months) */
            period?: components["schemas"]["PricingPeriod"] | null;
            /** Price */
            price: string;
            /** Product Action */
            product_action?: string | null;
            /** Product Class */
            product_class?: string | null;
            /** Product Type */
            product_type: string;
        };
        /** PricingPeriod */
        PricingPeriod: {
            /** @description The unit of the period */
            unit: components["schemas"]["PeriodUnit"];
            /**
             * Value
             * @description Amount of time in the unit
             */
            value: number;
        };
        /** Problem */
        Problem: {
            /** Problem detail */
            detail?: string | null;
            /** Status code */
            status: number;
            /** Problem title */
            title: string;
            /** Problem type */
            type: string;
        };
        /**
         * Protocol
         * @enum {string}
         */
        Protocol: "http" | "https";
        /** PublicAuthRequestForm */
        PublicAuthRequestForm: {
            /**
             * Client Id
             * Format: typeid
             * @description The organization ID associated with the credentials.
             * @example organization_01h45ytscbebyvny4gc8cr8ma2
             */
            client_id: TypeId<"organization">;
            /**
             * Client Secret
             * @description Client secret for authentication.
             */
            client_secret: string;
            /**
             * Grant Type
             * @description The grant type for the authentication request (should always be 'client_credentials').
             */
            grant_type: string;
        };
        /** RdapBase */
        RdapBase: {
            /**
             * Rdap Server
             * @description RDAP server URL
             */
            rdap_server?: string | null;
        };
        /**
         * RedirectCode
         * @enum {integer}
         */
        RedirectCode: 301 | 302 | 307 | 308;
        /** ReferrerStatsBucket */
        ReferrerStatsBucket: {
            /** Key */
            key: string;
            /** Total */
            total: number;
            /** Unique */
            unique: number;
        };
        /**
         * RegistrantChangeType
         * @enum {string}
         */
        RegistrantChangeType: "update" | "trade";
        /**
         * RegistryHandleAttributeType
         * @description Registry handle attribute types for type-safe attribute key access.
         * @enum {string}
         */
        RegistryHandleAttributeType: "at-ext-contact:type" | "DE_CONTACT_TYPE" | "dnsbe:type" | "eurid:type" | "AFNIC_CONTACT_TYPE" | "AFNIC_PP_FIRST_NAME" | "AFNIC_PM_LEGAL_STATUS" | "AFNIC_PM_SIREN" | "AFNIC_PM_VAT" | "AFNIC_PM_TRADEMARK" | "AFNIC_PM_ASSOC_WALDEC" | "AFNIC_PM_ASSOC_PUBL_DATE" | "AFNIC_PM_ASSOC_PUBL_ANNOUNCE" | "AFNIC_PM_ASSOC_PUBL_PAGE" | "AFNIC_PM_ASSOC_DECL" | "AFNIC_PM_DUNS" | "AFNIC_PM_LOCAL" | "AFNIC_ID_STATUS" | "AFNIC_REACHABLE_MEDIA" | "AFNIC_REACHABLE_STATUS" | "AFNIC_RESTRICTED_PUBLICATION" | "ROTLD_CONTACT_TYPE" | "ROTLD_FISCAL_CODE" | "ROTLD_REGISTRATION_NUMBER" | "ROTLD_DOMAIN_NAME" | "NOMINET_CONTACT_TYPE" | "NOMINET_CO_NO" | "NOMINET_TRAD_NAME";
        /** RegistryLockBase */
        RegistryLockBase: {
            /**
             * Prevents
             * @description What operations are prevented by registry lock
             */
            prevents?: string[] | null;
            /**
             * Removal Process
             * @description Process for unlocking the domain
             */
            removal_process?: string | null;
            /**
             * Requires Manual Request
             * @description Whether a manual request is required
             */
            requires_manual_request?: boolean | null;
            /**
             * Supported
             * @description Whether the registry provides a Registry Lock feature
             */
            supported: boolean;
        };
        /**
         * Relation
         * @enum {string}
         */
        Relation: "accepted_tos" | "admin" | "api_admin" | "billing_manager" | "client_api_key" | "cms_content_editor" | "contact_manager" | "domain_forward_manager" | "domain_manager" | "email_forward_manager" | "events_manager" | "host_manager" | "member" | "opusdns_internal_api_key" | "organization_manager" | "owner" | "parent" | "product_manager" | "reseller_manager" | "root_admin" | "self";
        /** RelationSet */
        RelationSet: {
            /** Relations */
            relations?: components["schemas"]["Relation"][];
        };
        /** RenewalEvent */
        RenewalEvent: {
            /**
             * Registration Expiration Date
             * Format: date-time
             * @description The new expiration date/time after the domain has been renewed
             */
            registration_expiration_date: Date;
        };
        /**
         * RenewalMode
         * @enum {string}
         */
        RenewalMode: "renew" | "expire";
        /** RequestHistory */
        RequestHistory: {
            /**
             * Client Ip
             * Format: ipvanyaddress
             * @description Client IP address
             */
            client_ip: string;
            /**
             * Duration
             * @description Request duration in milliseconds
             */
            duration: number;
            /** @description HTTP method */
            method: components["schemas"]["HTTPMethod"];
            /**
             * Path
             * @description Request path
             */
            path: string;
            /**
             * Performed By Id
             * @description ID of the actor who performed the request
             */
            performed_by_id?: string | null;
            /** @description Type of the actor who performed the request */
            performed_by_type?: components["schemas"]["ExecutingEntity"] | null;
            /**
             * Request Body
             * @description Request body
             */
            request_body?: {
                [key: string]: unknown;
            } | null;
            /**
             * Request Completed At
             * Format: date-time
             * @description Timestamp when the request completed
             */
            request_completed_at: Date;
            /**
             * Request Started At
             * Format: date-time
             * @description Timestamp when the request started
             */
            request_started_at: Date;
            /**
             * Response Body
             * @description Response body
             */
            response_body?: {
                [key: string]: unknown;
            } | null;
            /**
             * Server Request Id
             * @description Unique ID of the request
             */
            server_request_id: string;
            /**
             * Status Code
             * @description HTTP status code
             */
            status_code: number;
        };
        /**
         * RequestHistorySortField
         * @enum {string}
         */
        RequestHistorySortField: "method" | "path" | "status_code" | "duration" | "server_request_id" | "performed_by_type" | "performed_by_id" | "created_on" | "request_started_at" | "request_completed_at";
        /** ReservedDomainsBase */
        ReservedDomainsBase: {
            /** @description Source of reserved domain information */
            source?: components["schemas"]["ReservedSourceType"] | null;
            /**
             * Supported
             * @description Registry provides a reserved list
             */
            supported: boolean;
            /**
             * Url
             * @description Link to reserved list
             */
            url?: string | null;
        };
        /**
         * ReservedSourceType
         * @enum {string}
         */
        ReservedSourceType: "API" | "CSV" | "manual";
        /** RgpOperations */
        RgpOperations: {
            /**
             * Report
             * @description Whether registry supports RGP restore report
             * @default true
             */
            report: boolean;
            /**
             * Request
             * @description Whether registry supports RGP restore request
             * @default true
             */
            request: boolean;
        };
        /** SldLength */
        SldLength: {
            /**
             * Max
             * @description Maximum length of a domain name
             */
            max: number;
            /**
             * Min
             * @description Minimum length of a domain name
             */
            min: number;
        };
        /**
         * SortOrder
         * @enum {string}
         */
        SortOrder: "asc" | "desc";
        /** SpiceDbRelationshipUpdate */
        SpiceDbRelationshipUpdate: {
            /** Add */
            add?: components["schemas"]["Relation"][] | null;
            /** Remove */
            remove?: components["schemas"]["Relation"][] | null;
        };
        /** StatusCodeStatsBucket */
        StatusCodeStatsBucket: {
            /** Key */
            key: string;
            /** Total */
            total: number;
        };
        /**
         * SyncOperationType
         * @enum {string}
         */
        SyncOperationType: "registration" | "renewal" | "transfer";
        /**
         * TLDType
         * @enum {string}
         */
        TLDType: "gTLD" | "ccTLD";
        /**
         * TimeRange
         * @enum {string}
         */
        TimeRange: "1h" | "1d" | "7d" | "30d";
        /** TimeSeriesBucket */
        TimeSeriesBucket: {
            /**
             * Timestamp
             * Format: date-time
             */
            timestamp: Date;
            /** Total */
            total: number;
        };
        /** TldBase */
        TldBase: {
            /**
             * Name
             * @description The TLD being configured
             */
            name: string;
            /**
             * Third Level Structure
             * @description Name of the third levels (name and overrides)
             * @default []
             */
            third_level_structure: string[];
            /** @description The type of the TLD (e.g., gTLD, ccTLD) */
            type: components["schemas"]["TLDType"];
        };
        /** TldResponseShort */
        TldResponseShort: {
            /**
             * Tld
             * @example com
             * @example org
             * @example net
             */
            tld: string;
            /**
             * @example gTLD
             * @example ccTLD
             */
            type: components["schemas"]["TLDType"];
        };
        /** TldSpecificationResponse */
        TldSpecificationResponse: {
            /** @description Character limits for domain names */
            characters: components["schemas"]["SldLength"];
            /** @description Contacts configuration */
            contacts?: components["schemas"]["ContactsBase"] | null;
            /** @description DNS configuration */
            dns_configuration: components["schemas"]["DnsConfigurationBase"];
            /** @description Domain lifecycle configuration */
            domain_lifecycle: components["schemas"]["DomainLifecycleBase"];
            /** @description Domain statuses configuration */
            domain_statuses: components["schemas"]["DomainStatusesBase"];
            /** @description IDN configuration */
            idn: components["schemas"]["IdnBase"];
            /** @description Launch phases configuration */
            launch_phases?: components["schemas"]["LaunchPhasesBase"] | null;
            /** @description Local presence requirements */
            local_presence?: components["schemas"]["LocalPresenceBase"] | null;
            /**
             * Parking Enabled
             * @description Whether parking is enabled for this TLD
             * @default false
             */
            parking_enabled: boolean;
            /** @description Premium domains configuration */
            premium_domains?: components["schemas"]["PremiumDomainsBase"] | null;
            /** @description RDAP configuration */
            rdap?: components["schemas"]["RdapBase"] | null;
            /** @description Registry lock configuration */
            registry_lock?: components["schemas"]["RegistryLockBase"] | null;
            /** @description Reserved domains configuration */
            reserved_domains?: components["schemas"]["ReservedDomainsBase"] | null;
            /**
             * Tlds
             * @description List of TLDs being configured
             */
            tlds: components["schemas"]["TldBase"][];
            /** @description Transfer policies configuration */
            transfer_policies: components["schemas"]["TransferPoliciesBase"];
            /** @description WHOIS configuration */
            whois?: components["schemas"]["WhoisBase"] | null;
        };
        /** TrademarkClaimsBase */
        TrademarkClaimsBase: {
            /**
             * End Date
             * @description End date of trademark claims
             */
            end_date?: Date | null;
            /**
             * Start Date
             * @description Start date of trademark claims
             */
            start_date?: Date | null;
            /**
             * Supported
             * @description Whether trademark claims are supported
             */
            supported: boolean;
            /**
             * Tmch Required
             * @description If true, claim notifications are mandatory within the timeframe
             */
            tmch_required?: boolean | null;
        };
        /**
         * TransferAckType
         * @enum {string}
         */
        TransferAckType: "none" | "registrar" | "registrant" | "both";
        /** TransferEvent */
        TransferEvent: {
            /** Current Registrar */
            current_registrar: string;
            execution_date: components["schemas"]["EppDateTime"];
            expiration_date: components["schemas"]["EppDateTime"] | null;
            /** Message */
            message: string;
            /** Requesting Registrar */
            requesting_registrar: string;
        };
        /** TransferLockPolicyBase */
        TransferLockPolicyBase: {
            /**
             * Supported By Registrar
             * @description Whether the registrar supports transfer locks
             */
            supported_by_registrar: boolean;
            /**
             * Supported By Registry
             * @description Whether the registry supports transfer locks
             */
            supported_by_registry: boolean;
        };
        /** TransferPoliciesBase */
        TransferPoliciesBase: {
            /**
             * Authinfo Max Length
             * @description Maximum length of the auth info
             */
            authinfo_max_length?: number | null;
            /**
             * Authinfo Min Length
             * @description Minimum length of the auth info
             */
            authinfo_min_length?: number | null;
            /**
             * Authinfo Required
             * @description Whether an auth info is required for transfers
             */
            authinfo_required: boolean;
            /**
             * Authinfo Time Limited
             * @description Whether an auth info has a time limit
             */
            authinfo_time_limited?: boolean | null;
            /**
             * Authinfo Validity Period
             * @description Validity period of the auth info (e.g., '5D' for 5 days)
             */
            authinfo_validity_period?: string | null;
            /**
             * Info Contact Authinfo
             * @description Whether querying a foreign contact with authinfo is possible
             */
            info_contact_authinfo?: boolean | null;
            /**
             * Info Domain Authinfo
             * @description Whether querying a foreign domain with authinfo is possible
             */
            info_domain_authinfo?: boolean | null;
            /**
             * Post Transfer Requirements
             * @description Post-transfer requirements: lists the behaviors, as in ['update_contacts', 'set_transfer_lock'] or [ 'tld_specific' ] for specific behavior
             */
            post_transfer_requirements?: components["schemas"]["PostTransferRequirements"][] | null;
            /** @description Whether a transfer can be approved */
            transfer_ack?: components["schemas"]["TransferAckType"] | null;
            /**
             * Transfer Email Required
             * @description Whether an email confirmation is required to perform the transfer
             */
            transfer_email_required?: boolean | null;
            /** @description Transfer lock policy */
            transfer_lock_policy: components["schemas"]["TransferLockPolicyBase"];
            /** @description Whether a transfer can be denied */
            transfer_nack?: components["schemas"]["TransferAckType"] | null;
            /**
             * Transfer Renewal Period
             * @description If transfer_renews_domain is true, the renewal period (e.g., '1Y' for 1 year)
             */
            transfer_renewal_period?: string | null;
            /**
             * Transfer Renews Domain
             * @description Whether a transfer triggers a domain renewal
             */
            transfer_renews_domain?: boolean | null;
            /**
             * Transfer Time
             * @description Time duration of transfers in ISO 8601 format (e.g., 5D, -7D) according to the policy, 0 = real-time
             */
            transfer_time?: string | null;
        };
        /** User */
        User: {
            /**
             * Created On
             * Format: date-time
             * @description The date/time the entry was created on
             */
            created_on?: Date;
            /**
             * Deleted On
             * @description The date/time the entry was deleted on
             */
            deleted_on?: Date | null;
            /**
             * Email
             * Format: email
             * @description The user's email address
             */
            email: string;
            /**
             * First Name
             * @description The user's first name
             */
            first_name: string;
            /**
             * Keycloak User Id
             * @description Keycloak user id
             */
            keycloak_user_id?: string | null;
            /**
             * Last Name
             * @description The user's last name
             */
            last_name: string;
            /**
             * Locale
             * @example en_US
             */
            locale: string;
            /**
             * Organization Id
             * Format: typeid
             * @description The user's organization id
             * @default None
             * @example organization_01h45ytscbebyvny4gc8cr8ma2
             */
            organization_id: TypeId<"organization">;
            /**
             * Phone
             * @description The user's phone number
             * @example +1.2125552368
             */
            phone?: string | null;
            readonly status: components["schemas"]["UserStatus"];
            /**
             * Updated On
             * Format: date-time
             * @description The date/time the entry was last updated on
             */
            updated_on?: Date;
            /**
             * User Id
             * Format: typeid
             * @example user_01h45ytscbebyvny4gc8cr8ma2
             */
            user_id?: TypeId<"user">;
            /**
             * Username
             * @description The user's unique username
             */
            username: string;
        };
        /** UserAgentStatsBucket */
        UserAgentStatsBucket: {
            /** Key */
            key: string;
            /** Total */
            total: number;
            /** Unique */
            unique: number;
        };
        /** UserAttributeBase */
        UserAttributeBase: {
            /**
             * Key
             * @description Key of the attribute.
             */
            key: string;
            /** @description Value of the attribute. */
            value?: components["schemas"]["JsonValue"] | null;
        };
        /** UserAttributeResponse */
        UserAttributeResponse: {
            /**
             * Key
             * @description Key of the attribute.
             */
            key: string;
            /** @description Value of the attribute. */
            value?: components["schemas"]["JsonValue"] | null;
        };
        /** UserCreate */
        UserCreate: {
            /**
             * Email
             * Format: email
             * @description The user's email address
             */
            email: string;
            /**
             * First Name
             * @description The user's first name
             */
            first_name: string;
            /**
             * Last Name
             * @description The user's last name
             */
            last_name: string;
            /**
             * Locale
             * @example en_US
             */
            locale: string;
            /**
             * Password
             * @description Plaintext password for hashing during creation
             * @example correcthorsebatterystaple
             */
            password: string;
            /**
             * Phone
             * @description The user's phone number
             * @example +1.2125552368
             */
            phone?: string | null;
            /**
             * User Attributes
             * @description User attributes
             */
            user_attributes?: components["schemas"]["UserAttributeBase"][] | null;
            /**
             * Username
             * @description The user's unique username
             */
            username: string;
        };
        /** UserPublic */
        UserPublic: {
            /**
             * Created On
             * Format: date-time
             * @description The date/time the entry was created on
             */
            created_on?: Date;
            /**
             * Deleted On
             * @description The date/time the entry was deleted on
             */
            deleted_on?: Date | null;
            /**
             * Email
             * Format: email
             * @description The user's email address
             */
            email: string;
            /**
             * First Name
             * @description The user's first name
             */
            first_name: string;
            /**
             * Last Name
             * @description The user's last name
             */
            last_name: string;
            /**
             * Locale
             * @example en_US
             */
            locale: string;
            /**
             * Organization Id
             * Format: typeid
             * @description The user's organization id
             * @default None
             * @example organization_01h45ytscbebyvny4gc8cr8ma2
             */
            organization_id: TypeId<"organization">;
            /**
             * Phone
             * @description The user's phone number
             * @example +1.2125552368
             */
            phone?: string | null;
            readonly status: components["schemas"]["UserStatus"];
            /**
             * Updated On
             * Format: date-time
             * @description The date/time the entry was last updated on
             */
            updated_on?: Date;
            /**
             * User Id
             * Format: typeid
             * @example user_01h45ytscbebyvny4gc8cr8ma2
             */
            user_id?: TypeId<"user">;
            /**
             * Username
             * @description The user's unique username
             */
            username: string;
        };
        /** UserPublicWithAttributes */
        UserPublicWithAttributes: {
            /**
             * Created On
             * Format: date-time
             * @description The date/time the entry was created on
             */
            created_on?: Date;
            /**
             * Deleted On
             * @description The date/time the entry was deleted on
             */
            deleted_on?: Date | null;
            /**
             * Email
             * Format: email
             * @description The user's email address
             */
            email: string;
            /**
             * First Name
             * @description The user's first name
             */
            first_name: string;
            /**
             * Last Name
             * @description The user's last name
             */
            last_name: string;
            /**
             * Locale
             * @example en_US
             */
            locale: string;
            /**
             * Organization Id
             * Format: typeid
             * @description The user's organization id
             * @default None
             * @example organization_01h45ytscbebyvny4gc8cr8ma2
             */
            organization_id: TypeId<"organization">;
            /**
             * Phone
             * @description The user's phone number
             * @example +1.2125552368
             */
            phone?: string | null;
            readonly status: components["schemas"]["UserStatus"];
            /**
             * Updated On
             * Format: date-time
             * @description The date/time the entry was last updated on
             */
            updated_on?: Date;
            /**
             * User Attributes
             * @description All of the user attributes
             * @example {
             *       "array": [
             *         1,
             *         2,
             *         3
             *       ],
             *       "bool": true,
             *       "number": 1,
             *       "string": "value2"
             *     }
             */
            user_attributes?: {
                [key: string]: components["schemas"]["JsonValue"];
            };
            /**
             * User Id
             * Format: typeid
             * @example user_01h45ytscbebyvny4gc8cr8ma2
             */
            user_id?: TypeId<"user">;
            /**
             * Username
             * @description The user's unique username
             */
            username: string;
        };
        /**
         * UserStatus
         * @enum {string}
         */
        UserStatus: "active" | "inactive";
        /** UserTokenResponse */
        UserTokenResponse: {
            /** Access Token */
            access_token: string;
            /** Expires In */
            expires_in: number;
            /** Refresh Expires In */
            refresh_expires_in: number;
            /** Refresh Token */
            refresh_token: string;
            /**
             * Token Type
             * @default Bearer
             */
            token_type: string;
        };
        /** UserUpdate */
        UserUpdate: {
            /**
             * Email
             * @description The user's email address
             */
            email?: string | null;
            /**
             * First Name
             * @description The user's first name
             */
            first_name?: string | null;
            /**
             * Last Name
             * @description The user's last name
             */
            last_name?: string | null;
            /**
             * Locale
             * @description The user's locale
             */
            locale?: string | null;
            /**
             * Phone
             * @description The user's phone number
             */
            phone?: string | null;
            /**
             * User Attributes
             * @description User attributes
             */
            user_attributes?: components["schemas"]["UserAttributeBase"][] | null;
            /**
             * Username
             * @description The user's unique username
             */
            username?: string | null;
        };
        /** UserWithRelationPermissions */
        UserWithRelationPermissions: {
            /**
             * Created On
             * Format: date-time
             * @description The date/time the entry was created on
             */
            created_on?: Date;
            /**
             * Deleted On
             * @description The date/time the entry was deleted on
             */
            deleted_on?: Date | null;
            /**
             * Email
             * Format: email
             * @description The user's email address
             */
            email: string;
            /**
             * First Name
             * @description The user's first name
             */
            first_name: string;
            /**
             * Last Name
             * @description The user's last name
             */
            last_name: string;
            /**
             * Locale
             * @example en_US
             */
            locale: string;
            /**
             * Organization Id
             * Format: typeid
             * @description The user's organization id
             * @default None
             * @example organization_01h45ytscbebyvny4gc8cr8ma2
             */
            organization_id: TypeId<"organization">;
            /** Permissions */
            permissions?: components["schemas"]["Permission"][] | null;
            /**
             * Phone
             * @description The user's phone number
             * @example +1.2125552368
             */
            phone?: string | null;
            /** Relations */
            relations?: components["schemas"]["Relation"][] | null;
            readonly status: components["schemas"]["UserStatus"];
            /**
             * Updated On
             * Format: date-time
             * @description The date/time the entry was last updated on
             */
            updated_on?: Date;
            /**
             * User Attributes
             * @description All of the user attributes
             * @example {
             *       "array": [
             *         1,
             *         2,
             *         3
             *       ],
             *       "bool": true,
             *       "number": 1,
             *       "string": "value2"
             *     }
             */
            user_attributes?: {
                [key: string]: components["schemas"]["JsonValue"];
            };
            /**
             * User Id
             * Format: typeid
             * @example user_01h45ytscbebyvny4gc8cr8ma2
             */
            user_id?: TypeId<"user">;
            /**
             * Username
             * @description The user's unique username
             */
            username: string;
        };
        /** ValidationError */
        ValidationError: {
            /** Location */
            loc: (string | number)[];
            /** Message */
            msg: string;
            /** Error Type */
            type: string;
        };
        /**
         * VerificationType
         * @enum {string}
         */
        VerificationType: "api" | "email";
        /** VisitsByKeyBucket */
        VisitsByKeyBucket: {
            /** Key */
            key: string;
            /** Total */
            total: number;
            /** Unique */
            unique: number;
        };
        /** WhoisBase */
        WhoisBase: {
            /**
             * Whois Server
             * @description WHOIS server
             */
            whois_server?: string | null;
        };
        /** WildcardHttpRedirectRequest */
        WildcardHttpRedirectRequest: {
            redirect_code: components["schemas"]["RedirectCode"];
            /** Request Path */
            request_path: string;
            /** Request Subdomain */
            request_subdomain: string;
            /** Target Hostname */
            target_hostname: string;
            /** Target Path */
            target_path: string;
            target_protocol: components["schemas"]["HttpProtocol"];
        };
        /**
         * ZoneSortField
         * @enum {string}
         */
        ZoneSortField: "name" | "created_on" | "updated_on" | "dnssec_status";
        /** RequestAuthcodeResponse */
        api__domain__tld_specific__be__models__RequestAuthcodeResponse: {
            /**
             * Detail
             * @description Additional information about the result in case of failure
             */
            detail?: string | null;
            /**
             * Name
             * @description The domain name that had the auth code requested
             */
            name: string;
            /**
             * Success
             * @description Whether the request had a successful result from DNS Belgium
             */
            success: boolean;
        };
        /** RequestAuthcodeResponse */
        api__domain__tld_specific__eu__models__RequestAuthcodeResponse: {
            /**
             * Auth Code
             * @description The auth code returned by EURid
             */
            auth_code?: string | null;
            /**
             * Auth Code Expires On
             * @description The expiry date of the auth code
             */
            auth_code_expires_on?: Date | null;
            /**
             * Detail
             * @description Additional information about the result in case of failure
             */
            detail?: string | null;
            /**
             * Name
             * @description The domain name that had the auth code requested
             */
            name: string;
            /**
             * Success
             * @description Whether the request had a successful result from EURid
             */
            success: boolean;
        };
        /** DomainAvailabilityResponse */
        common__models__availability__datasource__DomainAvailabilityResponse: {
            meta: components["schemas"]["DomainAvailabilityMeta"];
            /** Results */
            results: components["schemas"]["DomainAvailability"][];
        };
        /** DomainAvailabilityResponse */
        common__models__domain__domain__DomainAvailabilityResponse: {
            /** Available */
            available: boolean;
            /**
             * Domain
             * @description The domain name
             * @example example.com
             */
            domain: string;
            /** Reason */
            reason: string | null;
        };
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
    get_email_forward_logs_by_alias_v1_archive_email_forward_logs_aliases__email_forward_alias_id__get: {
        parameters: {
            query: {
                email_forward_id: TypeId<"email_forward">;
                sort_by?: components["schemas"]["EmailForwardLogSortField"];
                sort_order?: components["schemas"]["SortOrder"];
                page_size?: number;
                page?: number;
                final_status?: components["schemas"]["EmailForwardLogStatus"] | null;
                start_time?: Date | null;
                end_time?: Date | null;
            };
            header?: never;
            path: {
                email_forward_alias_id: TypeId<"email_forward_alias">;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Pagination_EmailForwardLog_"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_email_forward_logs_v1_archive_email_forward_logs__email_forward_id__get: {
        parameters: {
            query?: {
                sort_by?: components["schemas"]["EmailForwardLogSortField"];
                sort_order?: components["schemas"]["SortOrder"];
                page_size?: number;
                page?: number;
                final_status?: components["schemas"]["EmailForwardLogStatus"] | null;
                start_time?: Date | null;
                end_time?: Date | null;
            };
            header?: never;
            path: {
                email_forward_id: TypeId<"email_forward">;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Pagination_EmailForwardLog_"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_object_logs_v1_archive_object_logs_get: {
        parameters: {
            query?: {
                sort_by?: components["schemas"]["ObjectLogSortField"];
                sort_order?: components["schemas"]["SortOrder"];
                page_size?: number;
                page?: number;
                object_log_id?: string | null;
                object_type?: string | null;
                action?: components["schemas"]["ObjectEventType"] | null;
                server_request_id?: string | null;
                performed_by_type?: components["schemas"]["ExecutingEntity"] | null;
                performed_by_id?: string | null;
                created_before?: Date | null;
                created_after?: Date | null;
                object_id?: string | null;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Pagination_ObjectLog_"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_object_logs_by_object_id_v1_archive_object_logs__object_id__get: {
        parameters: {
            query?: {
                sort_by?: components["schemas"]["ObjectLogSortField"];
                sort_order?: components["schemas"]["SortOrder"];
                page_size?: number;
                page?: number;
                object_log_id?: string | null;
                object_type?: string | null;
                action?: components["schemas"]["ObjectEventType"] | null;
                server_request_id?: string | null;
                performed_by_type?: components["schemas"]["ExecutingEntity"] | null;
                performed_by_id?: string | null;
                created_before?: Date | null;
                created_after?: Date | null;
            };
            header?: never;
            path: {
                object_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Pagination_ObjectLog_"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_request_history_v1_archive_request_history_get: {
        parameters: {
            query?: {
                sort_by?: components["schemas"]["RequestHistorySortField"];
                sort_order?: components["schemas"]["SortOrder"];
                page_size?: number;
                page?: number;
                method?: components["schemas"]["HTTPMethod"] | null;
                path?: string | null;
                status_code?: number | null;
                min_status_code?: number | null;
                max_status_code?: number | null;
                min_duration?: number | null;
                max_duration?: number | null;
                client_ip?: string | null;
                server_request_id?: string | null;
                performed_by_type?: components["schemas"]["ExecutingEntity"] | null;
                performed_by_id?: string | null;
                request_started_before?: Date | null;
                request_started_after?: Date | null;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Pagination_RequestHistory_"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    issue_organization_token_v1_auth_token_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/x-www-form-urlencoded": components["schemas"]["PublicAuthRequestForm"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["OrganizationTokenResponse"] | components["schemas"]["UserTokenResponse"];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_AUTHENTICATION",
                     *       "detail": "Additional error context.",
                     *       "status": 401,
                     *       "title": "Authentication Error",
                     *       "type": "authentication"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    bulk_availability_v1_availability_get: {
        parameters: {
            query: {
                /** @description
                 *     Specify one or more domains to check for availability.
                 *      */
                domains: string[];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["common__models__availability__datasource__DomainAvailabilityResponse"];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_AUTHENTICATION",
                     *       "detail": "Additional error context.",
                     *       "status": 401,
                     *       "title": "Authentication Error",
                     *       "type": "authentication"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["HTTPValidationError"];
                };
            };
            /** @description Bad Gateway */
            502: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_AVAILABILITY_PROVIDER",
                     *       "detail": "Additional error context.",
                     *       "status": 502,
                     *       "title": "Availability Error",
                     *       "type": "availability-provider"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
        };
    };
    stream_availability_v1_availability_stream_get: {
        parameters: {
            query: {
                /** @description
                 *     Specify one or more domains to check for availability.
                 *      */
                domains: string[];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/event-stream": string;
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_AUTHENTICATION",
                     *       "detail": "Additional error context.",
                     *       "status": 401,
                     *       "title": "Authentication Error",
                     *       "type": "authentication"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["HTTPValidationError"];
                };
            };
            /** @description Bad Gateway */
            502: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_AVAILABILITY_PROVIDER",
                     *       "detail": "Additional error context.",
                     *       "status": 502,
                     *       "title": "Availability Error",
                     *       "type": "availability-provider"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
        };
    };
    get_contacts_v1_contacts_get: {
        parameters: {
            query?: {
                sort_by?: components["schemas"]["ContactSortField"];
                sort_order?: components["schemas"]["SortOrder"];
                first_name?: string | null;
                last_name?: string | null;
                email?: string | null;
                search?: string | null;
                country?: string | null;
                created_after?: Date | null;
                created_before?: Date | null;
                page?: number;
                page_size?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Pagination_ContactSchema_"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    create_contact_v1_contacts_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ContactCreate"];
            };
        };
        responses: {
            /** @description Successful Response */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ContactSchema"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_verification_by_token_v1_contacts_verification_get: {
        parameters: {
            query: {
                token: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ContactResponse"];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_AUTHENTICATION",
                     *       "detail": "Additional error context.",
                     *       "status": 401,
                     *       "title": "Authentication Error",
                     *       "type": "authentication"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_CONTACT_VERIFICATION_NOT_FOUND",
                     *       "detail": "No contact verification found",
                     *       "status": 404,
                     *       "title": "Contact Management Error",
                     *       "token": "Additional error context.",
                     *       "type": "contact-verification-not-found"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    update_verification_by_token_v1_contacts_verification_put: {
        parameters: {
            query: {
                token: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_AUTHENTICATION",
                     *       "detail": "Additional error context.",
                     *       "status": 401,
                     *       "title": "Authentication Error",
                     *       "type": "authentication"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_CONTACT_VERIFICATION_NOT_FOUND",
                     *       "detail": "No contact verification found",
                     *       "status": 404,
                     *       "title": "Contact Management Error",
                     *       "token": "Additional error context.",
                     *       "type": "contact-verification-not-found"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    email_verify_contact_v1_contacts_verify_get: {
        parameters: {
            query: {
                token: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_contact_v1_contacts__contact_id__get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                contact_id: TypeId<"contact">;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ContactSchema"];
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_CONTACT_NOT_FOUND",
                     *       "contact_id": "Additional error context.",
                     *       "detail": "Contact not found",
                     *       "status": 404,
                     *       "title": "Contact Management Error",
                     *       "type": "contact-not-found"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    delete_contact_v1_contacts__contact_id__delete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                contact_id: TypeId<"contact">;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_CONTACT_NOT_FOUND",
                     *       "contact_id": "Additional error context.",
                     *       "detail": "Contact not found",
                     *       "status": 404,
                     *       "title": "Contact Management Error",
                     *       "type": "contact-not-found"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Conflict */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_CONTACT_IN_USE",
                     *       "detail": "Contact is linked to one or more domains",
                     *       "domain_ids": [
                     *         "A",
                     *         "d",
                     *         "d",
                     *         "i",
                     *         "t",
                     *         "i",
                     *         "o",
                     *         "n",
                     *         "a",
                     *         "l",
                     *         " ",
                     *         "e",
                     *         "r",
                     *         "r",
                     *         "o",
                     *         "r",
                     *         " ",
                     *         "c",
                     *         "o",
                     *         "n",
                     *         "t",
                     *         "e",
                     *         "x",
                     *         "t",
                     *         "."
                     *       ],
                     *       "status": 409,
                     *       "title": "Contact Management Error",
                     *       "type": "contact-in-use"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_verification_status_v1_contacts__contact_id__verification_get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                contact_id: TypeId<"contact">;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ContactVerificationResponse"];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_AUTHENTICATION",
                     *       "detail": "Additional error context.",
                     *       "status": 401,
                     *       "title": "Authentication Error",
                     *       "type": "authentication"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_CONTACT_VERIFICATION_NOT_FOUND",
                     *       "detail": "No contact verification found",
                     *       "status": 404,
                     *       "title": "Contact Management Error",
                     *       "token": "Additional error context.",
                     *       "type": "contact-verification-not-found"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    update_verification_v1_contacts__contact_id__verification_put: {
        parameters: {
            query: {
                token: string;
            };
            header?: never;
            path: {
                contact_id: TypeId<"contact">;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_AUTHENTICATION",
                     *       "detail": "Additional error context.",
                     *       "status": 401,
                     *       "title": "Authentication Error",
                     *       "type": "authentication"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_CONTACT_VERIFICATION_MISSING_PERMISSIONS",
                     *       "detail": "Missing permissions to verify contact as type Additional error context.",
                     *       "status": 403,
                     *       "title": "Contact Management Error",
                     *       "type": "contact-verification-type-missing-permissions"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_CONTACT_VERIFICATION_NOT_FOUND",
                     *       "detail": "No contact verification found",
                     *       "status": 404,
                     *       "title": "Contact Management Error",
                     *       "token": "Additional error context.",
                     *       "type": "contact-verification-not-found"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    start_contact_verification_v1_contacts__contact_id__verification_post: {
        parameters: {
            query: {
                type: components["schemas"]["VerificationType"];
            };
            header?: never;
            path: {
                contact_id: TypeId<"contact">;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ContactVerificationEmailResponse"] | components["schemas"]["ContactVerificationApiResponse"];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_AUTHENTICATION",
                     *       "detail": "Additional error context.",
                     *       "status": 401,
                     *       "title": "Authentication Error",
                     *       "type": "authentication"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_CONTACT_NOT_FOUND",
                     *       "contact_id": "Additional error context.",
                     *       "detail": "Contact not found",
                     *       "status": 404,
                     *       "title": "Contact Management Error",
                     *       "type": "contact-not-found"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Method Not Allowed */
            405: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_CONTACT_VERIFICATION_INVALID_TYPE",
                     *       "detail": "Invalid verification type: Additional error context.",
                     *       "status": 405,
                     *       "title": "Contact Management Error",
                     *       "type": "contact-verification-type-invalid"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    cancel_verification_v1_contacts__contact_id__verification_delete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                contact_id: TypeId<"contact">;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_AUTHENTICATION",
                     *       "detail": "Additional error context.",
                     *       "status": 401,
                     *       "title": "Authentication Error",
                     *       "type": "authentication"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_CONTACT_VERIFICATION_NOT_FOUND",
                     *       "detail": "No contact verification found",
                     *       "status": 404,
                     *       "title": "Contact Management Error",
                     *       "token": "Additional error context.",
                     *       "type": "contact-verification-not-found"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    list_zones_v1_dns_get: {
        parameters: {
            query?: {
                sort_by?: components["schemas"]["ZoneSortField"];
                sort_order?: components["schemas"]["SortOrder"];
                dnssec_status?: components["schemas"]["DnssecStatus"] | null;
                name?: string | null;
                search?: string | null;
                suffix?: string | null;
                created_after?: Date | null;
                created_before?: Date | null;
                updated_after?: Date | null;
                updated_before?: Date | null;
                page?: number;
                page_size?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description List of DNS zones retrieved successfully */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Pagination_DnsZoneResponse_"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    create_zone_v1_dns_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["DnsZoneCreate"];
            };
        };
        responses: {
            /** @description Zone created successfully */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["DnsChangesResponse"] | null;
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_DNS",
                     *       "detail": "Additional error context.",
                     *       "status": 400,
                     *       "title": "DNS Error",
                     *       "type": "dns"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Invalid request parameters */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    list_domain_forwards_by_zone_v1_dns_domain_forwards_get: {
        parameters: {
            query?: {
                search?: string | null;
                sort_by?: components["schemas"]["DomainForwardZoneSortField"];
                sort_order?: components["schemas"]["SortOrder"];
                page?: number;
                page_size?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description List of domain forwards grouped by DNS zones */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Pagination_DomainForwardZone_"];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_AUTHENTICATION",
                     *       "detail": "Additional error context.",
                     *       "status": 401,
                     *       "title": "Authentication Error",
                     *       "type": "authentication"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_PERMISSION_DENIED",
                     *       "detail": "Insufficient permissions to perform this action",
                     *       "status": 403,
                     *       "title": "Permission Denied",
                     *       "type": "permission-denied"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    list_email_forwards_by_zone_v1_dns_email_forwards_get: {
        parameters: {
            query?: {
                search?: string | null;
                sort_by?: components["schemas"]["EmailForwardZoneSortField"];
                sort_order?: components["schemas"]["SortOrder"];
                page?: number;
                page_size?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Pagination_EmailForwardZone_"];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_AUTHENTICATION",
                     *       "detail": "Additional error context.",
                     *       "status": 401,
                     *       "title": "Authentication Error",
                     *       "type": "authentication"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_PERMISSION_DENIED",
                     *       "detail": "Insufficient permissions to perform this action",
                     *       "status": 403,
                     *       "title": "Permission Denied",
                     *       "type": "permission-denied"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_zones_summary_v1_dns_summary_get: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description DNS zones summary retrieved successfully */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["DnsZoneSummary"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_zone_v1_dns__zone_name__get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description DNS zone name (trailing dot optional) */
                zone_name: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["DnsZoneResponse"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    delete_zone_v1_dns__zone_name__delete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description DNS zone name (trailing dot optional) */
                zone_name: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    disable_dnssec_v1_dns__zone_name__dnssec_disable_post: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description DNS zone name (trailing dot optional) */
                zone_name: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description DNSSEC disabled successfully */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["DnsChangesResponse"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_DNS",
                     *       "detail": "Additional error context.",
                     *       "status": 400,
                     *       "title": "DNS Error",
                     *       "type": "dns"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    enable_dnssec_v1_dns__zone_name__dnssec_enable_post: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description DNS zone name (trailing dot optional) */
                zone_name: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description DNSSEC enabled successfully */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["DnsChangesResponse"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_DNS",
                     *       "detail": "Additional error context.",
                     *       "status": 400,
                     *       "title": "DNS Error",
                     *       "type": "dns"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    list_zone_domain_forwards_v1_dns__zone_name__domain_forwards_get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description DNS zone name (trailing dot optional) */
                zone_name: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Domain forwards for the specified zone retrieved successfully */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["DomainForwardZone"];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_AUTHENTICATION",
                     *       "detail": "Additional error context.",
                     *       "status": 401,
                     *       "title": "Authentication Error",
                     *       "type": "authentication"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_PERMISSION_DENIED",
                     *       "detail": "Insufficient permissions to perform this action",
                     *       "status": 403,
                     *       "title": "Permission Denied",
                     *       "type": "permission-denied"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    list_zone_email_forwards_v1_dns__zone_name__email_forwards_get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description DNS zone name (trailing dot optional) */
                zone_name: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["EmailForwardZone"];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_AUTHENTICATION",
                     *       "detail": "Additional error context.",
                     *       "status": 401,
                     *       "title": "Authentication Error",
                     *       "type": "authentication"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_PERMISSION_DENIED",
                     *       "detail": "Insufficient permissions to perform this action",
                     *       "status": 403,
                     *       "title": "Permission Denied",
                     *       "type": "permission-denied"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    patch_zone_records_v1_dns__zone_name__records_patch: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description DNS zone name (trailing dot optional) */
                zone_name: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["DnsZoneRecordsPatchOps"];
            };
        };
        responses: {
            /** @description Successful Response */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_DNS",
                     *       "detail": "Additional error context.",
                     *       "status": 400,
                     *       "title": "DNS Error",
                     *       "type": "dns"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    update_zone_rrsets_v1_dns__zone_name__rrsets_put: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description DNS zone name (trailing dot optional) */
                zone_name: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["DnsZoneRrsetsCreate"];
            };
        };
        responses: {
            /** @description Successful Response */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_DNS",
                     *       "detail": "Additional error context.",
                     *       "status": 400,
                     *       "title": "DNS Error",
                     *       "type": "dns"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    patch_zone_rrsets_v1_dns__zone_name__rrsets_patch: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description DNS zone name (trailing dot optional) */
                zone_name: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["DnsZoneRrsetsPatchOps"];
            };
        };
        responses: {
            /** @description Successful Response */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_DNS",
                     *       "detail": "Additional error context.",
                     *       "status": 400,
                     *       "title": "DNS Error",
                     *       "type": "dns"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    list_domain_forwards_v1_domain_forwards_get: {
        parameters: {
            query?: {
                search?: string | null;
                sort_by?: components["schemas"]["DomainForwardSortField"];
                sort_order?: components["schemas"]["SortOrder"];
                page?: number;
                page_size?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Pagination_DomainForward_"];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_AUTHENTICATION",
                     *       "detail": "Additional error context.",
                     *       "status": 401,
                     *       "title": "Authentication Error",
                     *       "type": "authentication"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_PERMISSION_DENIED",
                     *       "detail": "Insufficient permissions to perform this action",
                     *       "status": 403,
                     *       "title": "Permission Denied",
                     *       "type": "permission-denied"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    create_domain_forward_v2_v1_domain_forwards_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["DomainForwardCreateRequest"];
            };
        };
        responses: {
            /** @description Domain forward created successfully */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["DomainForward"];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_AUTHENTICATION",
                     *       "detail": "Additional error context.",
                     *       "status": 401,
                     *       "title": "Authentication Error",
                     *       "type": "authentication"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_PERMISSION_DENIED",
                     *       "detail": "Insufficient permissions to perform this action",
                     *       "status": 403,
                     *       "title": "Permission Denied",
                     *       "type": "permission-denied"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description DNS zone was not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_ZONE_NOT_FOUND",
                     *       "detail": "Zone not found",
                     *       "status": 404,
                     *       "title": "DNS Error",
                     *       "type": "dns-zone-not-found",
                     *       "zone_name": "Zone example.com. not found"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Domain forward already exists */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_DOMAIN_FORWARD_ALREADY_EXISTS",
                     *       "detail": "Domain forward already exists for example.com.",
                     *       "status": 409,
                     *       "title": "Domain Forward Error",
                     *       "type": "domain-forward-already-exists"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    patch_redirects_v1_domain_forwards_patch: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["DomainForwardPatchOps"];
            };
        };
        responses: {
            /** @description Successful Response */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_AUTHENTICATION",
                     *       "detail": "Additional error context.",
                     *       "status": 401,
                     *       "title": "Authentication Error",
                     *       "type": "authentication"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_PERMISSION_DENIED",
                     *       "detail": "Insufficient permissions to perform this action",
                     *       "status": 403,
                     *       "title": "Permission Denied",
                     *       "type": "permission-denied"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_DOMAIN_FORWARD_NOT_EXISTS",
                     *       "detail": "Domain forward not found for Additional error context.",
                     *       "status": 404,
                     *       "title": "Domain Forward Error",
                     *       "type": "domain-forward-not-found"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    metrics_v1_domain_forwards_metrics_get: {
        parameters: {
            query?: {
                hostname?: string | null;
                domain?: string | null;
                /** @description Filter by protocol: http or https */
                protocol?: components["schemas"]["Protocol"] | null;
                /** @description Time range: 1h, 1d, 7d, or 30d */
                time_range?: components["schemas"]["TimeRange"];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["DomainForwardMetricsResponse"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    browser_stats_v1_domain_forwards_metrics_browser_get: {
        parameters: {
            query?: {
                hostname?: string | null;
                domain?: string | null;
                /** @description Filter by protocol: http or https */
                protocol?: components["schemas"]["Protocol"] | null;
                /** @description Time range: 1h, 1d, 7d, or 30d */
                time_range?: components["schemas"]["TimeRange"];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["DomainForwardBrowserStatsResponse"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    geo_stats_v1_domain_forwards_metrics_geo_get: {
        parameters: {
            query?: {
                hostname?: string | null;
                domain?: string | null;
                /** @description Filter by protocol: http or https */
                protocol?: components["schemas"]["Protocol"] | null;
                /** @description Time range: 1h, 1d, 7d, or 30d */
                time_range?: components["schemas"]["TimeRange"];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["DomainForwardGeoStatsResponse"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    platform_stats_v1_domain_forwards_metrics_platform_get: {
        parameters: {
            query?: {
                hostname?: string | null;
                domain?: string | null;
                /** @description Filter by protocol: http or https */
                protocol?: components["schemas"]["Protocol"] | null;
                /** @description Time range: 1h, 1d, 7d, or 30d */
                time_range?: components["schemas"]["TimeRange"];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["DomainForwardPlatformStatsResponse"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    referrer_stats_v1_domain_forwards_metrics_referrer_get: {
        parameters: {
            query?: {
                hostname?: string | null;
                domain?: string | null;
                /** @description Filter by protocol: http or https */
                protocol?: components["schemas"]["Protocol"] | null;
                /** @description Time range: 1h, 1d, 7d, or 30d */
                time_range?: components["schemas"]["TimeRange"];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["DomainForwardReferrerStatsResponse"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    status_code_stats_v1_domain_forwards_metrics_status_code_get: {
        parameters: {
            query?: {
                hostname?: string | null;
                domain?: string | null;
                /** @description Filter by protocol: http or https */
                protocol?: components["schemas"]["Protocol"] | null;
                /** @description Time range: 1h, 1d, 7d, or 30d */
                time_range?: components["schemas"]["TimeRange"];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["DomainForwardStatusCodeStatsResponse"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    time_series_v1_domain_forwards_metrics_time_series_get: {
        parameters: {
            query?: {
                hostname?: string | null;
                domain?: string | null;
                /** @description Filter by protocol: http or https */
                protocol?: components["schemas"]["Protocol"] | null;
                /** @description Time range: 1h, 1d, 7d, or 30d */
                time_range?: components["schemas"]["TimeRange"];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["DomainForwardMetricsTimeSeriesResponse"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    user_agent_stats_v1_domain_forwards_metrics_user_agent_get: {
        parameters: {
            query?: {
                hostname?: string | null;
                domain?: string | null;
                /** @description Filter by protocol: http or https */
                protocol?: components["schemas"]["Protocol"] | null;
                /** @description Time range: 1h, 1d, 7d, or 30d */
                time_range?: components["schemas"]["TimeRange"];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["DomainForwardUserAgentStatsResponse"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    visits_by_key_v1_domain_forwards_metrics_visits_by_key_get: {
        parameters: {
            query?: {
                /** @description Grouping key: url, fqdn, domain, or forward */
                grouping?: components["schemas"]["MetricsGrouping"];
                hostname?: string | null;
                domain?: string | null;
                /** @description Filter by protocol: http or https */
                protocol?: components["schemas"]["Protocol"] | null;
                /** @description Time range: 1h, 1d, 7d, or 30d */
                time_range?: components["schemas"]["TimeRange"];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["DomainForwardVisitsByKeyResponse"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_domain_forward_v1_domain_forwards__hostname__get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Hostname */
                hostname: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["DomainForward"];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_AUTHENTICATION",
                     *       "detail": "Additional error context.",
                     *       "status": 401,
                     *       "title": "Authentication Error",
                     *       "type": "authentication"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_PERMISSION_DENIED",
                     *       "detail": "Insufficient permissions to perform this action",
                     *       "status": 403,
                     *       "title": "Permission Denied",
                     *       "type": "permission-denied"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_DOMAIN_FORWARD_NOT_EXISTS",
                     *       "detail": "Domain forward not found for Additional error context.",
                     *       "status": 404,
                     *       "title": "Domain Forward Error",
                     *       "type": "domain-forward-not-found"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    create_domain_forward_set_v1_domain_forwards__hostname__post: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Hostname */
                hostname: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["DomainForwardSetCreateRequest"];
            };
        };
        responses: {
            /** @description Successful Response */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["DomainForwardSetResponse"];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_AUTHENTICATION",
                     *       "detail": "Additional error context.",
                     *       "status": 401,
                     *       "title": "Authentication Error",
                     *       "type": "authentication"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_PERMISSION_DENIED",
                     *       "detail": "Insufficient permissions to perform this action",
                     *       "status": 403,
                     *       "title": "Permission Denied",
                     *       "type": "permission-denied"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_DOMAIN_FORWARD_NOT_EXISTS",
                     *       "detail": "Domain forward not found for Additional error context.",
                     *       "status": 404,
                     *       "title": "Domain Forward Error",
                     *       "type": "domain-forward-not-found"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Conflict */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_DOMAIN_FORWARD_ALREADY_EXISTS",
                     *       "detail": "Domain forward already exists for Additional error context.",
                     *       "status": 409,
                     *       "title": "Domain Forward Error",
                     *       "type": "domain-forward-already-exists"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    delete_domain_forward_v1_domain_forwards__hostname__delete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Hostname */
                hostname: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_AUTHENTICATION",
                     *       "detail": "Additional error context.",
                     *       "status": 401,
                     *       "title": "Authentication Error",
                     *       "type": "authentication"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_PERMISSION_DENIED",
                     *       "detail": "Insufficient permissions to perform this action",
                     *       "status": 403,
                     *       "title": "Permission Denied",
                     *       "type": "permission-denied"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_DOMAIN_FORWARD_NOT_EXISTS",
                     *       "detail": "Domain forward not found for Additional error context.",
                     *       "status": 404,
                     *       "title": "Domain Forward Error",
                     *       "type": "domain-forward-not-found"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    disable_domain_forward_v1_domain_forwards__hostname__disable_patch: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Hostname */
                hostname: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_AUTHENTICATION",
                     *       "detail": "Additional error context.",
                     *       "status": 401,
                     *       "title": "Authentication Error",
                     *       "type": "authentication"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_PERMISSION_DENIED",
                     *       "detail": "Insufficient permissions to perform this action",
                     *       "status": 403,
                     *       "title": "Permission Denied",
                     *       "type": "permission-denied"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    enable_domain_forward_v1_domain_forwards__hostname__enable_patch: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Hostname */
                hostname: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_AUTHENTICATION",
                     *       "detail": "Additional error context.",
                     *       "status": 401,
                     *       "title": "Authentication Error",
                     *       "type": "authentication"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_PERMISSION_DENIED",
                     *       "detail": "Insufficient permissions to perform this action",
                     *       "status": 403,
                     *       "title": "Permission Denied",
                     *       "type": "permission-denied"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_domain_forward_set_v1_domain_forwards__hostname___protocol__get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                protocol: components["schemas"]["HttpProtocol"];
                /** @description Hostname */
                hostname: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["DomainForwardSetResponse"];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_AUTHENTICATION",
                     *       "detail": "Additional error context.",
                     *       "status": 401,
                     *       "title": "Authentication Error",
                     *       "type": "authentication"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_PERMISSION_DENIED",
                     *       "detail": "Insufficient permissions to perform this action",
                     *       "status": 403,
                     *       "title": "Permission Denied",
                     *       "type": "permission-denied"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_DOMAIN_FORWARD_NOT_EXISTS",
                     *       "detail": "Domain forward not found for Additional error context.",
                     *       "status": 404,
                     *       "title": "Domain Forward Error",
                     *       "type": "domain-forward-not-found"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    update_domain_forward_set_v1_domain_forwards__hostname___protocol__put: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                protocol: components["schemas"]["HttpProtocol"];
                /** @description Hostname */
                hostname: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["DomainForwardSetRequest"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["DomainForwardSetResponse"];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_AUTHENTICATION",
                     *       "detail": "Additional error context.",
                     *       "status": 401,
                     *       "title": "Authentication Error",
                     *       "type": "authentication"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_PERMISSION_DENIED",
                     *       "detail": "Insufficient permissions to perform this action",
                     *       "status": 403,
                     *       "title": "Permission Denied",
                     *       "type": "permission-denied"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_DOMAIN_FORWARD_NOT_EXISTS",
                     *       "detail": "Domain forward not found for Additional error context.",
                     *       "status": 404,
                     *       "title": "Domain Forward Error",
                     *       "type": "domain-forward-not-found"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    create_domain_forward_set_deprecated_v1_domain_forwards__hostname___protocol__post: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                protocol: components["schemas"]["HttpProtocol"];
                /** @description Hostname */
                hostname: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["DomainForwardSetRequest"];
            };
        };
        responses: {
            /** @description Successful Response */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["DomainForwardSetResponse"];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_AUTHENTICATION",
                     *       "detail": "Additional error context.",
                     *       "status": 401,
                     *       "title": "Authentication Error",
                     *       "type": "authentication"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_PERMISSION_DENIED",
                     *       "detail": "Insufficient permissions to perform this action",
                     *       "status": 403,
                     *       "title": "Permission Denied",
                     *       "type": "permission-denied"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_DOMAIN_FORWARD_NOT_EXISTS",
                     *       "detail": "Domain forward not found for Additional error context.",
                     *       "status": 404,
                     *       "title": "Domain Forward Error",
                     *       "type": "domain-forward-not-found"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Conflict */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_DOMAIN_FORWARD_ALREADY_EXISTS",
                     *       "detail": "Domain forward already exists for Additional error context.",
                     *       "status": 409,
                     *       "title": "Domain Forward Error",
                     *       "type": "domain-forward-already-exists"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    delete_domain_forward_set_v1_domain_forwards__hostname___protocol__delete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                protocol: components["schemas"]["HttpProtocol"];
                /** @description Hostname */
                hostname: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_AUTHENTICATION",
                     *       "detail": "Additional error context.",
                     *       "status": 401,
                     *       "title": "Authentication Error",
                     *       "type": "authentication"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_PERMISSION_DENIED",
                     *       "detail": "Insufficient permissions to perform this action",
                     *       "status": 403,
                     *       "title": "Permission Denied",
                     *       "type": "permission-denied"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_DOMAIN_FORWARD_NOT_EXISTS",
                     *       "detail": "Domain forward not found for Additional error context.",
                     *       "status": 404,
                     *       "title": "Domain Forward Error",
                     *       "type": "domain-forward-not-found"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    suggest_v1_domain_search_suggest_get: {
        parameters: {
            query: {
                /** @description The primary keyword or phrase for the domain search */
                query: string;
                /** @description The TLDs to include in the search */
                tlds?: string[] | null;
                /** @description The maximum number of domain suggestions to return */
                limit?: number | null;
                /** @description Whether to include premium domains in the suggestions */
                premium?: boolean | null;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["DomainSearchResponse"];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_AUTHENTICATION",
                     *       "detail": "Additional error context.",
                     *       "status": 401,
                     *       "title": "Authentication Error",
                     *       "type": "authentication"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["HTTPValidationError"];
                };
            };
            /** @description Bad Gateway */
            502: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_DOMAIN_SEARCH_PROVIDER",
                     *       "detail": "Additional error context.",
                     *       "status": 502,
                     *       "title": "Domain Search Error",
                     *       "type": "domain-search-provider"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
        };
    };
    get_domains_v1_domains_get: {
        parameters: {
            query?: {
                sort_by?: components["schemas"]["DomainSortField"];
                sort_order?: components["schemas"]["SortOrder"];
                name?: string | null;
                search?: string | null;
                tld?: string | null;
                sld?: string | null;
                transfer_lock?: boolean | null;
                created_after?: Date | null;
                created_before?: Date | null;
                updated_after?: Date | null;
                updated_before?: Date | null;
                expires_after?: Date | null;
                expires_before?: Date | null;
                expires_in_30_days?: boolean | null;
                expires_in_60_days?: boolean | null;
                expires_in_90_days?: boolean | null;
                registered_after?: Date | null;
                registered_before?: Date | null;
                /** @description Filter domains by registry status. Can be specified multiple times (union of all provided values). */
                registry_statuses?: string[] | null;
                page?: number;
                page_size?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Pagination_DomainResponse_"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    create_domain_v1_domains_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["DomainCreate"];
            };
        };
        responses: {
            /** @description Successful Response */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["DomainResponse"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_TLD_NOT_AVAILABLE",
                     *       "detail": "This TLD is not available",
                     *       "status": 400,
                     *       "title": "Domain Management Error",
                     *       "tld": "Additional error context.",
                     *       "type": "domain-tld-not-available"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_CONTACT_NOT_FOUND",
                     *       "contact_id": "Additional error context.",
                     *       "detail": "Contact not found",
                     *       "status": 404,
                     *       "title": "Contact Management Error",
                     *       "type": "contact-not-found"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Conflict */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_DOMAIN_EXISTS",
                     *       "detail": "Domain already exists",
                     *       "domain_name": "Additional error context.",
                     *       "status": 409,
                     *       "title": "Domain Management Error",
                     *       "type": "domain-exists"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    epp_check_domain_v1_domains_check_get: {
        parameters: {
            query: {
                /** @description
                 *     Specify one or more domains to check for availability.
                 *      */
                domains: string[];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["DomainCheckResponse"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_domain_summary_v1_domains_summary_get: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["DomainSummaryResponse"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    withdraw_domain_v1_domains_tld_specific_at__domain_reference__withdraw_post: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                domain_reference: TypeId<"domain"> | string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["DomainWithdrawRequest"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["DomainWithdrawResponse"];
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_DOMAIN_NOT_FOUND",
                     *       "detail": "Domain not found",
                     *       "domain_name": "Additional error context.",
                     *       "status": 404,
                     *       "title": "Domain Management Error",
                     *       "type": "domain-not-found"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    request_auth_code_v1_domains_tld_specific_be__domain_reference__auth_code_request_post: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                domain_reference: TypeId<"domain"> | string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["api__domain__tld_specific__be__models__RequestAuthcodeResponse"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_DOMAIN_TRANSFER",
                     *       "detail": "There was an error transferring the domain",
                     *       "domain_name": "Additional error context.",
                     *       "reason": "An unspecified error occurred",
                     *       "status": 400,
                     *       "title": "Domain Transfer Error",
                     *       "type": "domain-transfer"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_DOMAIN_NOT_FOUND",
                     *       "detail": "Domain not found",
                     *       "domain_name": "Additional error context.",
                     *       "status": 404,
                     *       "title": "Domain Management Error",
                     *       "type": "domain-not-found"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    transit_domain_v1_domains_tld_specific_de__domain_reference__transit_post: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                domain_reference: TypeId<"domain"> | string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["DomainTransitRequest"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["DomainTransitResponse"];
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_DOMAIN_NOT_FOUND",
                     *       "detail": "Domain not found",
                     *       "domain_name": "Additional error context.",
                     *       "status": 404,
                     *       "title": "Domain Management Error",
                     *       "type": "domain-not-found"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    request_auth_code_v1_domains_tld_specific_eu__domain_reference__auth_code_request_post: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                domain_reference: TypeId<"domain"> | string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["api__domain__tld_specific__eu__models__RequestAuthcodeResponse"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_DOMAIN_TRANSFER",
                     *       "detail": "There was an error transferring the domain",
                     *       "domain_name": "Additional error context.",
                     *       "reason": "An unspecified error occurred",
                     *       "status": 400,
                     *       "title": "Domain Transfer Error",
                     *       "type": "domain-transfer"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_DOMAIN_NOT_FOUND",
                     *       "detail": "Domain not found",
                     *       "domain_name": "Additional error context.",
                     *       "status": 404,
                     *       "title": "Domain Management Error",
                     *       "type": "domain-not-found"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    transfer_domain_v1_domains_transfer_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["DomainTransferIn"];
            };
        };
        responses: {
            /** @description Successful Response */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["DomainResponse"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_CONTACT_NOT_FOUND",
                     *       "contact_id": "Additional error context.",
                     *       "detail": "Contact not found",
                     *       "status": 404,
                     *       "title": "Contact Management Error",
                     *       "type": "contact-not-found"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Conflict */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_DOMAIN_EXISTS",
                     *       "detail": "Domain already exists",
                     *       "domain_name": "Additional error context.",
                     *       "status": 409,
                     *       "title": "Domain Management Error",
                     *       "type": "domain-exists"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Unprocessable Content */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "detail": "Additional error context.",
                     *       "status": 422,
                     *       "title": "Policy Validation Error",
                     *       "type": "policy-validation-error"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
        };
    };
    get_domain_v1_domains__domain_reference__get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                domain_reference: TypeId<"domain"> | string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["DomainResponse"];
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_DOMAIN_NOT_FOUND",
                     *       "detail": "Domain not found",
                     *       "domain_name": "Additional error context.",
                     *       "status": 404,
                     *       "title": "Domain Management Error",
                     *       "type": "domain-not-found"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    delete_domain_v1_domains__domain_reference__delete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                domain_reference: TypeId<"domain"> | string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_DOMAIN_NOT_FOUND",
                     *       "detail": "Domain not found",
                     *       "domain_name": "Additional error context.",
                     *       "status": 404,
                     *       "title": "Domain Management Error",
                     *       "type": "domain-not-found"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Conflict */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_DOMAIN_DELETE_PROHIBITED",
                     *       "detail": "Domain deletion is prohibited due to current status: ",
                     *       "domain_name": "Additional error context.",
                     *       "prohibiting_statuses": [],
                     *       "status": 409,
                     *       "title": "Domain Management Error",
                     *       "type": "domain-delete-prohibited"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    update_domain_v1_domains__domain_reference__patch: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                domain_reference: TypeId<"domain"> | string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["DomainUpdate"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["DomainResponse"];
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_dnssec_v1_domains__domain_reference__dnssec_get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                domain_reference: TypeId<"domain"> | string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["DomainDnssecDataResponse"][];
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_DOMAIN_NOT_FOUND",
                     *       "detail": "Domain not found",
                     *       "domain_name": "Additional error context.",
                     *       "status": 404,
                     *       "title": "Domain Management Error",
                     *       "type": "domain-not-found"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    create_or_update_dnssec_v1_domains__domain_reference__dnssec_put: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                domain_reference: TypeId<"domain"> | string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["DomainDnssecDataCreate"][];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["DomainDnssecDataResponse"][];
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_DOMAIN_NOT_FOUND",
                     *       "detail": "Domain not found",
                     *       "domain_name": "Additional error context.",
                     *       "status": 404,
                     *       "title": "Domain Management Error",
                     *       "type": "domain-not-found"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Unprocessable Content */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "detail": "Additional error context.",
                     *       "status": 422,
                     *       "title": "Policy Validation Error",
                     *       "type": "policy-validation-error"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
        };
    };
    delete_dnssec_v1_domains__domain_reference__dnssec_delete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                domain_reference: TypeId<"domain"> | string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_DOMAIN_NOT_FOUND",
                     *       "detail": "Domain not found",
                     *       "domain_name": "Additional error context.",
                     *       "status": 404,
                     *       "title": "Domain Management Error",
                     *       "type": "domain-not-found"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    disable_and_unpublish_dnssec_records_v1_domains__domain_reference__dnssec_disable_post: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                domain_reference: TypeId<"domain"> | string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_DOMAIN_NOT_FOUND",
                     *       "detail": "Domain not found",
                     *       "domain_name": "Additional error context.",
                     *       "status": 404,
                     *       "title": "Domain Management Error",
                     *       "type": "domain-not-found"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    enable_and_publish_dnssec_records_v1_domains__domain_reference__dnssec_enable_post: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                domain_reference: TypeId<"domain"> | string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["DomainDnssecDataResponse"][];
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_DOMAIN_NOT_FOUND",
                     *       "detail": "Domain not found",
                     *       "domain_name": "Additional error context.",
                     *       "status": 404,
                     *       "title": "Domain Management Error",
                     *       "type": "domain-not-found"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    renew_domain_v1_domains__domain_reference__renew_post: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                domain_reference: TypeId<"domain"> | string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["DomainRenewRequest"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["DomainRenewResponse"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    restore_domain_v1_domains__domain_reference__restore_post: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                domain_reference: TypeId<"domain"> | string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["DomainRestoreRequest"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["DomainRestoreResponse"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    cancel_domain_transfer_v1_domains__domain_reference__transfer_delete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                domain_reference: TypeId<"domain"> | string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_DOMAIN_NOT_FOUND",
                     *       "detail": "Domain not found",
                     *       "domain_name": "Additional error context.",
                     *       "status": 404,
                     *       "title": "Domain Management Error",
                     *       "type": "domain-not-found"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Bad Request */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_DOMAIN_TRANSFER",
                     *       "detail": "There was an error transferring the domain",
                     *       "domain_name": "Additional error context.",
                     *       "reason": "An unspecified error occurred",
                     *       "status": 400,
                     *       "title": "Domain Transfer Error",
                     *       "type": "domain-transfer"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    list_email_forwards_v1_email_forwards_get: {
        parameters: {
            query?: {
                search?: string | null;
                enabled?: boolean | null;
                sort_by?: components["schemas"]["EmailForwardSortField"];
                sort_order?: components["schemas"]["SortOrder"];
                page?: number;
                page_size?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Pagination_EmailForwardResponse_"];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_AUTHENTICATION",
                     *       "detail": "Additional error context.",
                     *       "status": 401,
                     *       "title": "Authentication Error",
                     *       "type": "authentication"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_PERMISSION_DENIED",
                     *       "detail": "Insufficient permissions to perform this action",
                     *       "status": 403,
                     *       "title": "Permission Denied",
                     *       "type": "permission-denied"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    create_email_forward_v1_email_forwards_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["EmailForwardCreate"];
            };
        };
        responses: {
            /** @description Successful Response */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["EmailForwardResponse"];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_AUTHENTICATION",
                     *       "detail": "Additional error context.",
                     *       "status": 401,
                     *       "title": "Authentication Error",
                     *       "type": "authentication"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_PERMISSION_DENIED",
                     *       "detail": "Insufficient permissions to perform this action",
                     *       "status": 403,
                     *       "title": "Permission Denied",
                     *       "type": "permission-denied"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_EMAIL_FORWARD_NOT_FOUND",
                     *       "detail": "Email forward not found for hostname: Additional error context.",
                     *       "status": 404,
                     *       "title": "Email Forward Error",
                     *       "type": "email-forward-not-found"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Conflict */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_EMAIL_FORWARD_DOMAIN_ALREADY_ENABLED",
                     *       "detail": "Email forward already exists for hostname: Additional error context.",
                     *       "status": 409,
                     *       "title": "Email Forward Error",
                     *       "type": "email-forward-already-exists"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_email_forward_v1_email_forwards__email_forward_id__get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                email_forward_id: TypeId<"email_forward">;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["EmailForwardResponse"];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_AUTHENTICATION",
                     *       "detail": "Additional error context.",
                     *       "status": 401,
                     *       "title": "Authentication Error",
                     *       "type": "authentication"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_PERMISSION_DENIED",
                     *       "detail": "Insufficient permissions to perform this action",
                     *       "status": 403,
                     *       "title": "Permission Denied",
                     *       "type": "permission-denied"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_EMAIL_FORWARD_NOT_FOUND",
                     *       "detail": "Email forward not found for hostname: Additional error context.",
                     *       "status": 404,
                     *       "title": "Email Forward Error",
                     *       "type": "email-forward-not-found"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    delete_email_forward_v1_email_forwards__email_forward_id__delete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                email_forward_id: TypeId<"email_forward">;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_AUTHENTICATION",
                     *       "detail": "Additional error context.",
                     *       "status": 401,
                     *       "title": "Authentication Error",
                     *       "type": "authentication"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_PERMISSION_DENIED",
                     *       "detail": "Insufficient permissions to perform this action",
                     *       "status": 403,
                     *       "title": "Permission Denied",
                     *       "type": "permission-denied"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    create_email_forward_alias_v1_email_forwards__email_forward_id__aliases_post: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                email_forward_id: TypeId<"email_forward">;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["EmailForwardAliasCreate"];
            };
        };
        responses: {
            /** @description Successful Response */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["EmailForwardAlias"];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_AUTHENTICATION",
                     *       "detail": "Additional error context.",
                     *       "status": 401,
                     *       "title": "Authentication Error",
                     *       "type": "authentication"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_PERMISSION_DENIED",
                     *       "detail": "Insufficient permissions to perform this action",
                     *       "status": 403,
                     *       "title": "Permission Denied",
                     *       "type": "permission-denied"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_EMAIL_FORWARD_NOT_FOUND",
                     *       "detail": "Email forward not found for hostname: Additional error context.",
                     *       "status": 404,
                     *       "title": "Email Forward Error",
                     *       "type": "email-forward-not-found"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Conflict */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_EMAIL_FORWARD_ALIAS_ALREADY_EXISTS",
                     *       "detail": "Additional error context.",
                     *       "status": 409,
                     *       "title": "Email Forward Error",
                     *       "type": "email-forward-alias-already-exists"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    update_email_forward_alias_v1_email_forwards__email_forward_id__aliases__alias_id__put: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                email_forward_id: TypeId<"email_forward">;
                alias_id: TypeId<"email_forward_alias">;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["EmailForwardAliasUpdate"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["EmailForwardAlias"];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_AUTHENTICATION",
                     *       "detail": "Additional error context.",
                     *       "status": 401,
                     *       "title": "Authentication Error",
                     *       "type": "authentication"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_PERMISSION_DENIED",
                     *       "detail": "Insufficient permissions to perform this action",
                     *       "status": 403,
                     *       "title": "Permission Denied",
                     *       "type": "permission-denied"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_EMAIL_FORWARD_NOT_FOUND",
                     *       "detail": "Email forward not found for hostname: Additional error context.",
                     *       "status": 404,
                     *       "title": "Email Forward Error",
                     *       "type": "email-forward-not-found"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    delete_email_forward_alias_v1_email_forwards__email_forward_id__aliases__alias_id__delete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                email_forward_id: TypeId<"email_forward">;
                alias_id: TypeId<"email_forward_alias">;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_AUTHENTICATION",
                     *       "detail": "Additional error context.",
                     *       "status": 401,
                     *       "title": "Authentication Error",
                     *       "type": "authentication"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_PERMISSION_DENIED",
                     *       "detail": "Insufficient permissions to perform this action",
                     *       "status": 403,
                     *       "title": "Permission Denied",
                     *       "type": "permission-denied"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_EMAIL_FORWARD_NOT_FOUND",
                     *       "detail": "Email forward not found for hostname: Additional error context.",
                     *       "status": 404,
                     *       "title": "Email Forward Error",
                     *       "type": "email-forward-not-found"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    disable_email_forward_v1_email_forwards__email_forward_id__disable_patch: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                email_forward_id: TypeId<"email_forward">;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_AUTHENTICATION",
                     *       "detail": "Additional error context.",
                     *       "status": 401,
                     *       "title": "Authentication Error",
                     *       "type": "authentication"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_PERMISSION_DENIED",
                     *       "detail": "Insufficient permissions to perform this action",
                     *       "status": 403,
                     *       "title": "Permission Denied",
                     *       "type": "permission-denied"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_EMAIL_FORWARD_NOT_FOUND",
                     *       "detail": "Email forward not found for hostname: Additional error context.",
                     *       "status": 404,
                     *       "title": "Email Forward Error",
                     *       "type": "email-forward-not-found"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    enable_email_forward_v1_email_forwards__email_forward_id__enable_patch: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                email_forward_id: TypeId<"email_forward">;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_AUTHENTICATION",
                     *       "detail": "Additional error context.",
                     *       "status": 401,
                     *       "title": "Authentication Error",
                     *       "type": "authentication"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_PERMISSION_DENIED",
                     *       "detail": "Insufficient permissions to perform this action",
                     *       "status": 403,
                     *       "title": "Permission Denied",
                     *       "type": "permission-denied"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_EMAIL_FORWARD_NOT_FOUND",
                     *       "detail": "Email forward not found for hostname: Additional error context.",
                     *       "status": 404,
                     *       "title": "Email Forward Error",
                     *       "type": "email-forward-not-found"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_email_forward_metrics_v1_email_forwards__email_forward_id__metrics_get: {
        parameters: {
            query?: {
                start_time?: Date | null;
                end_time?: Date | null;
            };
            header?: never;
            path: {
                email_forward_id: TypeId<"email_forward">;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["EmailForwardMetrics"];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_AUTHENTICATION",
                     *       "detail": "Additional error context.",
                     *       "status": 401,
                     *       "title": "Authentication Error",
                     *       "type": "authentication"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_PERMISSION_DENIED",
                     *       "detail": "Insufficient permissions to perform this action",
                     *       "status": 403,
                     *       "title": "Permission Denied",
                     *       "type": "permission-denied"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_EMAIL_FORWARD_NOT_FOUND",
                     *       "detail": "Email forward not found for hostname: Additional error context.",
                     *       "status": 404,
                     *       "title": "Email Forward Error",
                     *       "type": "email-forward-not-found"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_events_v1_events_get: {
        parameters: {
            query?: {
                sort_by?: components["schemas"]["EventSortField"];
                sort_order?: components["schemas"]["SortOrder"];
                object_type?: components["schemas"]["EventObjectType"] | null;
                object_id?: string | null;
                type?: components["schemas"]["EventType"] | null;
                subtype?: components["schemas"]["EventSubtype"] | null;
                acknowledged?: boolean | null;
                page?: number;
                page_size?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Pagination_EventResponse_"];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_AUTHENTICATION",
                     *       "detail": "Additional error context.",
                     *       "status": 401,
                     *       "title": "Authentication Error",
                     *       "type": "authentication"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_event_v1_events__event_id__get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                event_id: TypeId<"epp_event">;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["EventSchema"];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_AUTHENTICATION",
                     *       "detail": "Additional error context.",
                     *       "status": 401,
                     *       "title": "Authentication Error",
                     *       "type": "authentication"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_EVENT_NOT_FOUND",
                     *       "detail": "Event not found",
                     *       "event_id": "Additional error context.",
                     *       "status": 404,
                     *       "title": "Event Error",
                     *       "type": "event-not-found"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    acknowledge_event_v1_events__event_id__patch: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                event_id: TypeId<"epp_event">;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_AUTHENTICATION",
                     *       "detail": "Additional error context.",
                     *       "status": 401,
                     *       "title": "Authentication Error",
                     *       "type": "authentication"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_EVENT_NOT_FOUND",
                     *       "detail": "Event not found",
                     *       "event_id": "Additional error context.",
                     *       "status": 404,
                     *       "title": "Event Error",
                     *       "type": "event-not-found"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    list_organizations_v1_organizations_get: {
        parameters: {
            query?: {
                page?: number;
                page_size?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Pagination_Organization_"];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_AUTHENTICATION",
                     *       "detail": "Additional error context.",
                     *       "status": 401,
                     *       "title": "Authentication Error",
                     *       "type": "authentication"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_PERMISSION_DENIED",
                     *       "detail": "Insufficient permissions to perform this action",
                     *       "status": 403,
                     *       "title": "Permission Denied",
                     *       "type": "permission-denied"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    create_organization_v1_organizations_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["OrganizationCreate"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Organization"];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_AUTHENTICATION",
                     *       "detail": "Additional error context.",
                     *       "status": 401,
                     *       "title": "Authentication Error",
                     *       "type": "authentication"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_PERMISSION_DENIED",
                     *       "detail": "Insufficient permissions to perform this action",
                     *       "status": 403,
                     *       "title": "Permission Denied",
                     *       "type": "permission-denied"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_attributes_v1_organizations_attributes_get: {
        parameters: {
            query?: {
                organization_id?: TypeId<"organization"> | null;
                /** @description Optional list of attribute keys to filter */
                keys?: string[] | null;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["OrganizationAttributeResponse"][];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_AUTHENTICATION",
                     *       "detail": "Additional error context.",
                     *       "status": 401,
                     *       "title": "Authentication Error",
                     *       "type": "authentication"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_PERMISSION_DENIED",
                     *       "detail": "Insufficient permissions to perform this action",
                     *       "status": 403,
                     *       "title": "Permission Denied",
                     *       "type": "permission-denied"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    update_attributes_v1_organizations_attributes_patch: {
        parameters: {
            query?: {
                organization_id?: TypeId<"organization"> | null;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["OrganizationAttributeUpdate"][];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["OrganizationAttributeResponse"][];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_AUTHENTICATION",
                     *       "detail": "Additional error context.",
                     *       "status": 401,
                     *       "title": "Authentication Error",
                     *       "type": "authentication"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_PERMISSION_DENIED",
                     *       "detail": "Insufficient permissions to perform this action",
                     *       "status": 403,
                     *       "title": "Permission Denied",
                     *       "type": "permission-denied"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_attributes_v1_organizations_attributes__organization_id__get: {
        parameters: {
            query?: {
                /** @description Optional list of attribute keys to filter */
                keys?: string[] | null;
            };
            header?: never;
            path: {
                organization_id: TypeId<"organization"> | null;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["OrganizationAttributeResponse"][];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_AUTHENTICATION",
                     *       "detail": "Additional error context.",
                     *       "status": 401,
                     *       "title": "Authentication Error",
                     *       "type": "authentication"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_PERMISSION_DENIED",
                     *       "detail": "Insufficient permissions to perform this action",
                     *       "status": 403,
                     *       "title": "Permission Denied",
                     *       "type": "permission-denied"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    update_attributes_v1_organizations_attributes__organization_id__patch: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                organization_id: TypeId<"organization"> | null;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["OrganizationAttributeUpdate"][];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["OrganizationAttributeResponse"][];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_AUTHENTICATION",
                     *       "detail": "Additional error context.",
                     *       "status": 401,
                     *       "title": "Authentication Error",
                     *       "type": "authentication"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_PERMISSION_DENIED",
                     *       "detail": "Insufficient permissions to perform this action",
                     *       "status": 403,
                     *       "title": "Permission Denied",
                     *       "type": "permission-denied"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    list_ip_restrictions_v1_organizations_ip_restrictions_get: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["IpRestrictionResponse"][];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_AUTHENTICATION",
                     *       "detail": "Additional error context.",
                     *       "status": 401,
                     *       "title": "Authentication Error",
                     *       "type": "authentication"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_PERMISSION_DENIED",
                     *       "detail": "Insufficient permissions to perform this action",
                     *       "status": 403,
                     *       "title": "Permission Denied",
                     *       "type": "permission-denied"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    create_ip_restriction_v1_organizations_ip_restrictions_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["IpRestrictionCreate"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["IpRestrictionResponse"];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_AUTHENTICATION",
                     *       "detail": "Additional error context.",
                     *       "status": 401,
                     *       "title": "Authentication Error",
                     *       "type": "authentication"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_PERMISSION_DENIED",
                     *       "detail": "Insufficient permissions to perform this action",
                     *       "status": 403,
                     *       "title": "Permission Denied",
                     *       "type": "permission-denied"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_ip_restriction_v1_organizations_ip_restrictions__ip_restriction_id__get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                ip_restriction_id: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["IpRestrictionResponse"];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_AUTHENTICATION",
                     *       "detail": "Additional error context.",
                     *       "status": 401,
                     *       "title": "Authentication Error",
                     *       "type": "authentication"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_PERMISSION_DENIED",
                     *       "detail": "Insufficient permissions to perform this action",
                     *       "status": 403,
                     *       "title": "Permission Denied",
                     *       "type": "permission-denied"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    delete_ip_restriction_v1_organizations_ip_restrictions__ip_restriction_id__delete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                ip_restriction_id: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_AUTHENTICATION",
                     *       "detail": "Additional error context.",
                     *       "status": 401,
                     *       "title": "Authentication Error",
                     *       "type": "authentication"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_PERMISSION_DENIED",
                     *       "detail": "Insufficient permissions to perform this action",
                     *       "status": 403,
                     *       "title": "Permission Denied",
                     *       "type": "permission-denied"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    update_ip_restriction_v1_organizations_ip_restrictions__ip_restriction_id__patch: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                ip_restriction_id: number;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["IpRestrictionUpdate"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["IpRestrictionResponse"];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_AUTHENTICATION",
                     *       "detail": "Additional error context.",
                     *       "status": 401,
                     *       "title": "Authentication Error",
                     *       "type": "authentication"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_PERMISSION_DENIED",
                     *       "detail": "Insufficient permissions to perform this action",
                     *       "status": 403,
                     *       "title": "Permission Denied",
                     *       "type": "permission-denied"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    list_roles_v1_organizations_roles_get: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_AUTHENTICATION",
                     *       "detail": "Additional error context.",
                     *       "status": 401,
                     *       "title": "Authentication Error",
                     *       "type": "authentication"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_PERMISSION_DENIED",
                     *       "detail": "Insufficient permissions to perform this action",
                     *       "status": 403,
                     *       "title": "Permission Denied",
                     *       "type": "permission-denied"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    list_users_v1_organizations_users_get: {
        parameters: {
            query?: {
                page?: number;
                page_size?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Pagination_UserPublic_"];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_AUTHENTICATION",
                     *       "detail": "Additional error context.",
                     *       "status": 401,
                     *       "title": "Authentication Error",
                     *       "type": "authentication"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_PERMISSION_DENIED",
                     *       "detail": "Insufficient permissions to perform this action",
                     *       "status": 403,
                     *       "title": "Permission Denied",
                     *       "type": "permission-denied"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_organization_v1_organizations__organization_id__get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                organization_id: TypeId<"organization">;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["OrganizationWithBillingData"];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_AUTHENTICATION",
                     *       "detail": "Additional error context.",
                     *       "status": 401,
                     *       "title": "Authentication Error",
                     *       "type": "authentication"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_PERMISSION_DENIED",
                     *       "detail": "Insufficient permissions to perform this action",
                     *       "status": 403,
                     *       "title": "Permission Denied",
                     *       "type": "permission-denied"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    delete_organization_v1_organizations__organization_id__delete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                organization_id: TypeId<"organization">;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_AUTHENTICATION",
                     *       "detail": "Additional error context.",
                     *       "status": 401,
                     *       "title": "Authentication Error",
                     *       "type": "authentication"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_PERMISSION_DENIED",
                     *       "detail": "Insufficient permissions to perform this action",
                     *       "status": 403,
                     *       "title": "Permission Denied",
                     *       "type": "permission-denied"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    update_organization_v1_organizations__organization_id__patch: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                organization_id: TypeId<"organization">;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["OrganizationUpdate"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Organization"];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_AUTHENTICATION",
                     *       "detail": "Additional error context.",
                     *       "status": 401,
                     *       "title": "Authentication Error",
                     *       "type": "authentication"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_PERMISSION_DENIED",
                     *       "detail": "Insufficient permissions to perform this action",
                     *       "status": 403,
                     *       "title": "Permission Denied",
                     *       "type": "permission-denied"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    list_invoices_v1_organizations__organization_id__billing_invoices_get: {
        parameters: {
            query?: {
                page?: number;
                page_size?: number;
            };
            header?: never;
            path: {
                organization_id: TypeId<"organization">;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Pagination_InvoiceResponse_"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_pricing_plans_v1_organizations__organization_id__pricing_product_type__product_type__get: {
        parameters: {
            query?: {
                product_action?: components["schemas"]["BillingTransactionAction"] | null;
                product_class?: string | null;
            };
            header?: never;
            path: {
                organization_id: TypeId<"organization">;
                product_type: components["schemas"]["BillingTransactionProductType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GetPricesResponse"];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_AUTHENTICATION",
                     *       "detail": "Additional error context.",
                     *       "status": 401,
                     *       "title": "Authentication Error",
                     *       "type": "authentication"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_PERMISSION_DENIED",
                     *       "detail": "Insufficient permissions to perform this action",
                     *       "status": 403,
                     *       "title": "Permission Denied",
                     *       "type": "permission-denied"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_transactions_v1_organizations__organization_id__transactions_get: {
        parameters: {
            query?: {
                sort_by?: components["schemas"]["BillingTransactionSortField"];
                sort_order?: components["schemas"]["SortOrder"];
                product_reference?: string | null;
                product_type?: components["schemas"]["BillingTransactionProductType"] | null;
                action?: components["schemas"]["BillingTransactionAction"] | null;
                status?: components["schemas"]["BillingTransactionStatus"] | null;
                created_after?: Date | null;
                created_before?: Date | null;
                completed_after?: Date | null;
                completed_before?: Date | null;
                page?: number;
                page_size?: number;
            };
            header?: never;
            path: {
                organization_id: TypeId<"organization">;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Pagination_BillingTransactionResponse_"];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_AUTHENTICATION",
                     *       "detail": "Additional error context.",
                     *       "status": 401,
                     *       "title": "Authentication Error",
                     *       "type": "authentication"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_PERMISSION_DENIED",
                     *       "detail": "Insufficient permissions to perform this action",
                     *       "status": 403,
                     *       "title": "Permission Denied",
                     *       "type": "permission-denied"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_transaction_v1_organizations__organization_id__transactions__transaction_id__get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                organization_id: TypeId<"organization">;
                transaction_id: TypeId<"billing_transaction">;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["BillingTransactionResponse"];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_AUTHENTICATION",
                     *       "detail": "Additional error context.",
                     *       "status": 401,
                     *       "title": "Authentication Error",
                     *       "type": "authentication"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_PERMISSION_DENIED",
                     *       "detail": "Insufficient permissions to perform this action",
                     *       "status": 403,
                     *       "title": "Permission Denied",
                     *       "type": "permission-denied"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    list_parking_v1_parking_get: {
        parameters: {
            query?: {
                page?: number;
                page_size?: number;
                sort_by?: components["schemas"]["ParkingSortField"];
                sort_order?: components["schemas"]["SortOrder"];
                search?: string | null;
                enabled?: boolean | null;
                compliance_status?: components["schemas"]["ComplianceStatus"] | null;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Pagination_ParkingResponse_"];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_AUTHENTICATION",
                     *       "detail": "Additional error context.",
                     *       "status": 401,
                     *       "title": "Authentication Error",
                     *       "type": "authentication"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_PERMISSION_DENIED",
                     *       "detail": "Insufficient permissions to perform this action",
                     *       "status": 403,
                     *       "title": "Permission Denied",
                     *       "type": "permission-denied"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_total_parking_metrics_v1_parking_metrics_get: {
        parameters: {
            query?: {
                start_time?: Date | null;
                end_time?: Date | null;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ParkingTotalMetricsResponse"];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_AUTHENTICATION",
                     *       "detail": "Additional error context.",
                     *       "status": 401,
                     *       "title": "Authentication Error",
                     *       "type": "authentication"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_PERMISSION_DENIED",
                     *       "detail": "Insufficient permissions to perform this action",
                     *       "status": 403,
                     *       "title": "Permission Denied",
                     *       "type": "permission-denied"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    signup_for_parking_v1_parking_signup_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ParkingSignupRequest"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ParkingSignupResponse"];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_AUTHENTICATION",
                     *       "detail": "Additional error context.",
                     *       "status": 401,
                     *       "title": "Authentication Error",
                     *       "type": "authentication"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_PERMISSION_DENIED",
                     *       "detail": "Insufficient permissions to perform this action",
                     *       "status": 403,
                     *       "title": "Permission Denied",
                     *       "type": "permission-denied"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_parking_signup_status_v1_parking_signup_status_get: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ParkingSignupStatusResponse"];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_AUTHENTICATION",
                     *       "detail": "Additional error context.",
                     *       "status": 401,
                     *       "title": "Authentication Error",
                     *       "type": "authentication"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_PERMISSION_DENIED",
                     *       "detail": "Insufficient permissions to perform this action",
                     *       "status": 403,
                     *       "title": "Permission Denied",
                     *       "type": "permission-denied"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_parking_metrics_v1_parking__parking_id__metrics_get: {
        parameters: {
            query?: {
                start_time?: Date | null;
                end_time?: Date | null;
            };
            header?: never;
            path: {
                parking_id: TypeId<"parking">;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ParkingMetricsResponse"];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_AUTHENTICATION",
                     *       "detail": "Additional error context.",
                     *       "status": 401,
                     *       "title": "Authentication Error",
                     *       "type": "authentication"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_PERMISSION_DENIED",
                     *       "detail": "Insufficient permissions to perform this action",
                     *       "status": 403,
                     *       "title": "Permission Denied",
                     *       "type": "permission-denied"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_PARKING_NOT_FOUND",
                     *       "detail": "Parking not found for domain: parking_abc123",
                     *       "status": 404,
                     *       "title": "Parking Error",
                     *       "type": "parking-not-found"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_tld_specifications_v1_tlds__get: {
        parameters: {
            query?: {
                fields?: string | null;
                tlds?: string | null;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        [key: string]: {
                            [key: string]: unknown;
                        }[];
                    };
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_tld_portfolio_v1_tlds_portfolio_get: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["TldResponseShort"][];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_tld_spec_v1_tlds__tld__get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                tld: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["TldSpecificationResponse"];
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_TLD_NOT_FOUND",
                     *       "detail": "Unknown TLD",
                     *       "status": 404,
                     *       "title": "TLD ERROR",
                     *       "type": "tld-not-found"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    create_user_v1_users_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UserCreate"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UserPublic"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_current_user_v1_users_me_get: {
        parameters: {
            query?: {
                attributes?: string[] | null;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UserWithRelationPermissions"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    change_password_v1_users_me_password_reset_patch: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["PasswordUpdate"];
            };
        };
        responses: {
            /** @description Successful Response */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_AUTHENTICATION",
                     *       "detail": "Additional error context.",
                     *       "status": 401,
                     *       "title": "Authentication Error",
                     *       "type": "authentication"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_user_v1_users__user_id__get: {
        parameters: {
            query?: {
                attributes?: string[] | null;
            };
            header?: never;
            path: {
                user_id: TypeId<"user">;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UserPublicWithAttributes"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    delete_user_v1_users__user_id__delete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                user_id: TypeId<"user">;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Conflict */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_USER_IS_LAST_ADMIN",
                     *       "detail": "User is the last admin for the organization",
                     *       "status": 409,
                     *       "title": "User Management Error",
                     *       "type": "user-is-last-admin"
                     *     } */
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    update_user_v1_users__user_id__patch: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                user_id: TypeId<"user">;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UserUpdate"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UserPublicWithAttributes"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_user_permissions_v1_users__user_id__permissions_get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                user_id: TypeId<"user">;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PermissionSet"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    list_roles_v1_users__user_id__roles_get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                user_id: TypeId<"user">;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["RelationSet"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    update_user_relations_v1_users__user_id__roles_patch: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                user_id: TypeId<"user">;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["SpiceDbRelationshipUpdate"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["RelationSet"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
}
