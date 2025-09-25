import { TypeId } from "typeid-js";
export interface paths {
    "/v1/auth/client_credentials": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List Api Keys */
        get: operations["list_api_keys_v1_auth_client_credentials_get"];
        put?: never;
        /** Issue Api Key */
        post: operations["issue_api_key_v1_auth_client_credentials_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/auth/client_credentials/{api_key_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /** Delete Api Key */
        delete: operations["delete_api_key_v1_auth_client_credentials__api_key_id__delete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/auth/logout": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Logout */
        post: operations["logout_v1_auth_logout_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/auth/signup": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Signup */
        post: operations["signup_v1_auth_signup_post"];
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
         * Bulk Availability
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
         * Stream Availability
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
         * Get Contacts
         * @description List all contacts
         */
        get: operations["get_contacts_v1_contacts_get"];
        put?: never;
        /**
         * Create Contact
         * @description Create a contact
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
        /**
         * Get Verification By Token
         * @description Retrieve contact verification
         */
        get: operations["get_verification_by_token_v1_contacts_verification_get"];
        /**
         * Update Verification By Token
         * @description Complete contact verification
         */
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
         * Get Contact
         * @description Retrieve a contact
         */
        get: operations["get_contact_v1_contacts__contact_id__get"];
        put?: never;
        post?: never;
        /**
         * Delete Contact
         * @description Delete a contact
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
        /**
         * Get Verification Status
         * @description Retrieve contact verification
         */
        get: operations["get_verification_status_v1_contacts__contact_id__verification_get"];
        /**
         * Update Verification
         * @description Complete contact verification
         */
        put: operations["update_verification_v1_contacts__contact_id__verification_put"];
        /**
         * Start Contact Verification
         * @description Start contact verification
         */
        post: operations["start_contact_verification_v1_contacts__contact_id__verification_post"];
        /**
         * Cancel Verification
         * @description Delete contact verification
         */
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
    "/v1/domain-search/suggest": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Suggest */
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
        /** Restore Domain */
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
    "/v1/email-forwards/{zone_name}/aliases": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Email Forward Aliases */
        get: operations["get_email_forward_aliases_v1_email_forwards__zone_name__aliases_get"];
        put?: never;
        /** Create Email Forward Alias */
        post: operations["create_email_forward_alias_v1_email_forwards__zone_name__aliases_post"];
        /** Delete Email Forward Aliases */
        delete: operations["delete_email_forward_aliases_v1_email_forwards__zone_name__aliases_delete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/email-forwards/{zone_name}/aliases/{alias}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Email Forward Alias */
        get: operations["get_email_forward_alias_v1_email_forwards__zone_name__aliases__alias__get"];
        /** Update Email Forward Alias */
        put: operations["update_email_forward_alias_v1_email_forwards__zone_name__aliases__alias__put"];
        post?: never;
        /** Delete Email Forward Alias */
        delete: operations["delete_email_forward_alias_v1_email_forwards__zone_name__aliases__alias__delete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/email-forwards/{zone_name}/disable": {
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
        /** Disable Email Forward */
        patch: operations["disable_email_forward_v1_email_forwards__zone_name__disable_patch"];
        trace?: never;
    };
    "/v1/email-forwards/{zone_name}/enable": {
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
        /** Enable Email Forward */
        patch: operations["enable_email_forward_v1_email_forwards__zone_name__enable_patch"];
        trace?: never;
    };
    "/v1/events": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Events */
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
        /** Get Event */
        get: operations["get_event_v1_events__event_id__get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /** Acknowledge Event */
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
        /** List Organizations */
        get: operations["list_organizations_v1_organizations_get"];
        put?: never;
        /** Create Organization */
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
        /** Get Attributes */
        get: operations["get_attributes_v1_organizations_attributes_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /** Update Attributes */
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
        /** Get Attributes */
        get: operations["get_attributes_v1_organizations_attributes__organization_id__get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /** Update Attributes */
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
         * List Ip Restrictions
         * @description List all IP restrictions for the organization.
         *
         *     Returns a list of all IP restrictions configured for your organization.
         *     Single IP addresses are returned with CIDR notation (/32 for IPv4, /128 for IPv6).
         */
        get: operations["list_ip_restrictions_v1_organizations_ip_restrictions_get"];
        put?: never;
        /**
         * Create Ip Restriction
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
         * Get Ip Restriction
         * @description Get a specific IP restriction by ID.
         *
         *     Returns the details of a specific IP restriction if it exists and belongs to your organization.
         *     Single IP addresses are returned with CIDR notation (/32 for IPv4, /128 for IPv6).
         */
        get: operations["get_ip_restriction_v1_organizations_ip_restrictions__ip_restriction_id__get"];
        put?: never;
        post?: never;
        /**
         * Delete Ip Restriction
         * @description Delete an IP restriction.
         *
         *     Permanently removes the specified IP restriction from your organization.
         */
        delete: operations["delete_ip_restriction_v1_organizations_ip_restrictions__ip_restriction_id__delete"];
        options?: never;
        head?: never;
        /**
         * Update Ip Restriction
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
        /** List Roles */
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
        /** List Users */
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
        /** Get Organization */
        get: operations["get_organization_v1_organizations__organization_id__get"];
        put?: never;
        post?: never;
        /** Delete User */
        delete: operations["delete_user_v1_organizations__organization_id__delete"];
        options?: never;
        head?: never;
        /** Update Organization */
        patch: operations["update_organization_v1_organizations__organization_id__patch"];
        trace?: never;
    };
    "/v1/organizations/{organization_id}/billing/checkout-sessions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Get Checkout Session */
        post: operations["get_checkout_session_v1_organizations__organization_id__billing_checkout_sessions_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/organizations/{organization_id}/billing/payment-methods": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List Payment Methods */
        get: operations["list_payment_methods_v1_organizations__organization_id__billing_payment_methods_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/organizations/{organization_id}/billing/payment-methods/{payment_method_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /** Delete Payment Method */
        delete: operations["delete_payment_method_v1_organizations__organization_id__billing_payment_methods__payment_method_id__delete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/organizations/{organization_id}/billing/payment-methods/{payment_method_id}/default": {
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
        /** Update Default Payment Method */
        patch: operations["update_default_payment_method_v1_organizations__organization_id__billing_payment_methods__payment_method_id__default_patch"];
        trace?: never;
    };
    "/v1/organizations/{organization_id}/billing/wallet/credits": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Credit Wallet */
        post: operations["credit_wallet_v1_organizations__organization_id__billing_wallet_credits_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/organizations/{organization_id}/plan": {
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
        /** Change Plan */
        patch: operations["change_plan_v1_organizations__organization_id__plan_patch"];
        trace?: never;
    };
    "/v1/organizations/{organization_id}/plans": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Current Available Plans */
        get: operations["get_current_available_plans_v1_organizations__organization_id__plans_get"];
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
        /** Get Pricing Plans */
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
        /** Get transactions for an organization */
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
        /** Get a specific transaction for an organization */
        get: operations["get_transaction_v1_organizations__organization_id__transactions__transaction_id__get"];
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
        /** Get Tld Portfolio */
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
        /** Get Tld Spec */
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
        /** Create User */
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
        /** Get Current User */
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
        /** Get User */
        get: operations["get_user_v1_users__user_id__get"];
        put?: never;
        post?: never;
        /** Delete User */
        delete: operations["delete_user_v1_users__user_id__delete"];
        options?: never;
        head?: never;
        /** Update User */
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
        /** Get User Permissions */
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
        /** List Roles */
        get: operations["list_roles_v1_users__user_id__roles_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /** Update User Relations */
        patch: operations["update_user_relations_v1_users__user_id__roles_patch"];
        trace?: never;
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        /**
         * AgreementType
         * @enum {string}
         */
        AgreementType: "terms_and_conditions" | "master_service_agreement" | "acting_as_trader";
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
        /** BillingMetadata */
        BillingMetadata: {
            /**
             * Billing Model
             * @description Payment terms for the organization.
             */
            billing_model?: string | null;
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
        BillingTransactionAction: "create" | "transfer" | "renew" | "restore" | "trade" | "application";
        /**
         * BillingTransactionProductType
         * @enum {string}
         */
        BillingTransactionProductType: "domain" | "zones" | "email_forward" | "domain_forward";
        /** BillingTransactionResponse */
        BillingTransactionResponse: {
            /** @description The action performed in the transaction */
            action: components["schemas"]["BillingTransactionAction"];
            /**
             * Billing Transaction Id
             * Format: typeid
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
        /** Body_issue_organization_token_v1_auth_token_post */
        Body_issue_organization_token_v1_auth_token_post: {
            /**
             * Client Id
             * @description The organization ID associated with the credentials.
             */
            client_id?: TypeId<"organization"> | null;
            /**
             * Client Secret
             * @description Client secret for authentication.
             */
            client_secret?: string | null;
            /** @description The grant type for the authentication request. */
            grant_type?: components["schemas"]["GrantType"];
            /**
             * Password
             * @description Password for the user.
             */
            password?: string | null;
            /**
             * Username
             * @description Username for authentication.
             */
            username?: string | null;
        };
        /** CheckoutSessionRequest */
        CheckoutSessionRequest: {
            /**
             * Return Url
             * @description Return URL that will be used
             */
            return_url: string;
        };
        /** CheckoutSessionResponse */
        CheckoutSessionResponse: {
            /**
             * Session Client Secret
             * @description Checkout session client secret - meant to be used in the embedded checkout
             */
            session_client_secret: string;
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
            type: components["schemas"]["ContactRoleType"];
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
             * @description Whether the contact should be disclosed
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
             */
            contact_id: TypeId<"contact">;
        };
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
             * @description Whether the contact should be disclosed
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
         * ContactRoleType
         * @enum {string}
         */
        ContactRoleType: "registrant" | "admin" | "tech" | "billing";
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
             * @description Whether the contact should be disclosed
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
             */
            organization_id: TypeId<"organization">;
            /**
             * Phone
             * Format: phone
             * @description The contact's phone number
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
             */
            contact_id: TypeId<"contact">;
            /**
             * Contact Verification Id
             * Format: typeid
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
             */
            contact_id: TypeId<"contact">;
            /**
             * Contact Verification Id
             * Format: typeid
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
             */
            contact_id: TypeId<"contact">;
            /**
             * Contact Verification Id
             * Format: typeid
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
             * Privacy Proxy
             * @description Whether a privacy service is allowed
             */
            privacy_proxy?: boolean | null;
            /** @description Whether the registrant can change through update or trade */
            registrant_change?: components["schemas"]["RegistrantChangeType"] | null;
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
        };
        /**
         * Currency
         * @enum {string}
         */
        Currency: "USD" | "EUR";
        /** CustomerCreditCardPaymentMethod */
        CustomerCreditCardPaymentMethod: {
            /**
             * Brand
             * @description Card brand
             */
            brand: string;
            /**
             * Country
             * @description Country code
             */
            country?: string | null;
            /**
             * Exp Month
             * @description Expiration month
             */
            exp_month: number;
            /**
             * Exp Year
             * @description Expiration year
             */
            exp_year: number;
            /**
             * Id
             * @description Payment method ID
             */
            id: string;
            /**
             * Is Default
             * @description Whether this is the default payment method
             */
            is_default: boolean;
            /**
             * Last4
             * @description Last four digits of the card
             */
            last4: string;
        };
        /**
         * DeletePolicyType
         * @enum {string}
         */
        DeletePolicyType: "immediate" | "expiration";
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
        DomainContactHandles: {
            [key: string]: components["schemas"]["ContactHandle"][];
        };
        /** DomainContactResponse */
        DomainContactResponse: {
            /**
             * Contact Id
             * Format: typeid
             * @description The contact id of the contact
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
            /** @description How long the domain should be registered for */
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
             */
            domain_dnssec_data_id?: TypeId<"domain_dnssec">;
            /**
             * Domain Id
             * Format: typeid
             * @description The domain this DNSSEC record belongs to
             * @default None
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
        };
        /** DomainNameParts */
        DomainNameParts: {
            /** Domain */
            domain?: string | null;
            /** Subdomain */
            subdomain?: string | null;
            /** Suffix */
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
             */
            domain_id?: TypeId<"domain">;
            /**
             * Expires On
             * @description When the domain expires
             */
            expires_on?: Date | null;
            /**
             * Name
             * @description The domain name
             */
            name: string;
            /**
             * Nameservers
             * @description All the domain statuses
             */
            nameservers?: components["schemas"]["Nameserver"][];
            /**
             * Owner Id
             * Format: typeid
             * @description The organization that owns the domain
             * @default None
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
             */
            roid: string;
            /**
             * Sld
             * @description The second level domain
             */
            sld: string;
            /**
             * Tld
             * @description The top level domain of the domain
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
             * Auto Renew
             * @description Whether to automatically renew the domain after restore
             * @default true
             */
            auto_renew: boolean;
            /**
             * Reason
             * @description Reason for restoring the domain
             */
            reason: string;
        };
        /** DomainRestoreResponse */
        DomainRestoreResponse: {
            /**
             * Domain Id
             * Format: typeid
             * @description The ID of the restored domain
             */
            domain_id: TypeId<"domain">;
            /**
             * Expiration Date
             * Format: date-time
             * @description The new expiration date after restore
             */
            expiration_date: Date;
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
             */
            organization_id: TypeId<"organization">;
        };
        /** DomainTransferIn */
        DomainTransferIn: {
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
            /** @description The renewal mode of the domain */
            renewal_mode: components["schemas"]["RenewalMode"];
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
             * Forward To
             * Format: email
             */
            forward_to: string;
        };
        /** EmailForwardAliasUpdate */
        EmailForwardAliasUpdate: {
            /**
             * Forward To
             * Format: email
             */
            forward_to: string;
        };
        /**
         * EmailVerificationStatus
         * @enum {string}
         */
        EmailVerificationStatus: "verified" | "pending" | "canceled";
        EppDateTime: Date | string;
        /**
         * EventObjectType
         * @enum {string}
         */
        EventObjectType: "DOMAIN" | "CONTACT" | "HOST" | "RAW" | "UNKNOWN";
        /** EventResponse */
        EventResponse: {
            /** Event Data */
            event_data: Record<string, never>;
            /**
             * Event Id
             * Format: typeid
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
         * EventSubtype
         * @enum {string}
         */
        EventSubtype: "NOTIFICATION" | "SUCCESS" | "FAILURE" | "CANCELED";
        /**
         * EventType
         * @enum {string}
         */
        EventType: "REGISTRATION" | "RENEWAL" | "MODIFICATION" | "DELETION" | "INBOUND_TRANSFER" | "OUTBOUND_TRANSFER";
        /** GeneralAvailabilityBase */
        GeneralAvailabilityBase: {
            /**
             * Start Date
             * Format: date-time
             * @description Start date of general availability
             */
            start_date: Date;
        };
        /** GetCurrentAvailablePlansResponse */
        GetCurrentAvailablePlansResponse: {
            /** @description Current active plan for the customer */
            current_plan?: components["schemas"]["PlanInfo"] | null;
            /**
             * Plans
             * @description List of available plans
             */
            plans: components["schemas"]["PlanInfo"][];
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
        /** RequestValidationError */
        HTTPValidationError: {
            errors: components["schemas"]["ValidationError"][];
            /** Status code */
            status: number;
            /** Problem Title */
            title: string;
            /** Problem type */
            type: string;
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
             */
            ip_network: string;
            /**
             * Organization Id
             * Format: typeid
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
             */
            ip_network: string;
            /** Ip Restriction Id */
            ip_restriction_id: number;
            /** Last Used On */
            last_used_on?: Date | null;
            /**
             * Organization Id
             * Format: typeid
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
            type?: components["schemas"]["ContactRoleType"][] | null;
        };
        /**
         * LocalPresenceRequirementType
         * @enum {string}
         */
        LocalPresenceRequirementType: "physical_address" | "business_entity";
        /** Nameserver */
        Nameserver: {
            /**
             * Hostname
             * @description The name server of the domain
             */
            hostname: string;
            /**
             * Ip Addresses
             * @description The ip addresses of the name server
             */
            ip_addresses?: string[];
        };
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
        /** OrganizationCredential */
        OrganizationCredential: {
            /**
             * Api Key Description
             * @description Description of the organization credential.
             */
            api_key_description?: string | null;
            /**
             * Api Key Id
             * Format: typeid
             * @description Unique identifier of the organization credential.
             */
            api_key_id: TypeId<"api_key">;
            /**
             * Api Key Name
             * @description Name of the organization credential. Only a-z, A-Z, 0-9, underscore, and hyphen are allowed.
             */
            api_key_name?: string | null;
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
             * Last Used On
             * @description The date/time the entry was deleted on
             */
            last_used_on?: Date | null;
            /**
             * Organization Id
             * Format: typeid
             * @default None
             */
            organization_id: TypeId<"organization">;
            /** @description The status of the organization credential. */
            readonly status: components["schemas"]["OrganizationCredentialStatus"];
        };
        /** OrganizationCredentialCreated */
        OrganizationCredentialCreated: {
            /**
             * Api Key
             * Format: typeid
             * @description Unique identifier of the organization credential.
             */
            api_key: TypeId<"api_key">;
            /**
             * Api Key Description
             * @description Description of the organization credential.
             */
            api_key_description?: string | null;
            /**
             * Api Key Name
             * @description Name of the organization credential. Only a-z, A-Z, 0-9, underscore, and hyphen are allowed.
             */
            api_key_name?: string | null;
            /**
             * Client Id
             * Format: typeid
             * @default None
             */
            client_id: TypeId<"organization">;
            /**
             * Client Secret
             * @description Plaintext secret to be hashed (not stored directly in the DB).
             */
            client_secret?: string | null;
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
             * Last Used On
             * @description The date/time the entry was deleted on
             */
            last_used_on?: Date | null;
            /** @description The status of the organization credential. */
            readonly status: components["schemas"]["OrganizationCredentialStatus"];
        };
        /** OrganizationCredentialExtra */
        OrganizationCredentialExtra: {
            /**
             * Api Key Description
             * @description Description of the organization credential.
             */
            api_key_description?: string | null;
            /**
             * Api Key Name
             * @description Name of the organization credential. Only a-z, A-Z, 0-9, underscore, and hyphen are allowed.
             */
            api_key_name?: string | null;
            /**
             * Expires At
             * @description The date and time the credential expiration.
             */
            expires_at?: Date | null;
        };
        /**
         * OrganizationCredentialStatus
         * @enum {string}
         */
        OrganizationCredentialStatus: "active" | "revoked";
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
        /** Pagination[DomainResponse] */
        Pagination_DomainResponse_: {
            pagination: components["schemas"]["PaginationMetadata"];
            /** Results */
            results: components["schemas"]["DomainResponse"][];
        };
        /** Pagination[EmailForwardAlias] */
        Pagination_EmailForwardAlias_: {
            pagination: components["schemas"]["PaginationMetadata"];
            /** Results */
            results: components["schemas"]["EmailForwardAlias"][];
        };
        /** Pagination[EventResponse] */
        Pagination_EventResponse_: {
            pagination: components["schemas"]["PaginationMetadata"];
            /** Results */
            results: components["schemas"]["EventResponse"][];
        };
        /** Pagination[OrganizationCredential] */
        Pagination_OrganizationCredential_: {
            pagination: components["schemas"]["PaginationMetadata"];
            /** Results */
            results: components["schemas"]["OrganizationCredential"][];
        };
        /** Pagination[Organization] */
        Pagination_Organization_: {
            pagination: components["schemas"]["PaginationMetadata"];
            /** Results */
            results: components["schemas"]["Organization"][];
        };
        /** Pagination[User] */
        Pagination_User_: {
            pagination: components["schemas"]["PaginationMetadata"];
            /** Results */
            results: components["schemas"]["User"][];
        };
        /** PasswordUpdate */
        PasswordUpdate: {
            /** New Password */
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
        /**
         * PeriodUnit
         * @enum {string}
         */
        PeriodUnit: "y" | "m" | "d";
        /**
         * Permission
         * @enum {string}
         */
        Permission: "acknowledge" | "bulk_create" | "bulk_delete" | "bulk_renew_expire" | "bulk_transfer_trade" | "bulk_update" | "corporate_plan" | "create" | "delete" | "enterprise_plan" | "has_accepted_tos" | "manage_api_keys" | "manage_billing" | "manage_cms_content" | "manage_contacts" | "manage_dns_zones" | "manage_domains" | "manage_email_forwards" | "manage_events" | "manage_opusdns_api_keys" | "manage_products" | "manage_reseller" | "manage_users" | "manage_user_relations" | "plan_manager" | "premium_plan" | "renew_expire" | "starter_plan" | "transfer_trade" | "update" | "verify" | "view" | "view_audit_logs" | "view_events";
        /** PermissionSet */
        PermissionSet: {
            /** Permissions */
            permissions?: components["schemas"]["Permission"][];
        };
        /** PlanIdRequest */
        PlanIdRequest: {
            /**
             * Plan Id
             * @description Plan ID from available plans
             */
            plan_id: string;
        };
        /** PlanInfo */
        PlanInfo: {
            /**
             * Amount
             * @description Base price
             */
            amount: string;
            /**
             * Currency
             * @description Currency code
             */
            currency: string;
            /**
             * Name
             * @description Plan display name
             */
            name?: string | null;
            /**
             * Plan Id
             * @description Unique plan identifier
             */
            plan_id: string;
            /**
             * Plan Level
             * @description Plan level such as 'premium' or 'starter'
             */
            plan_level?: string | null;
            /**
             * Plan Type
             * @description Plan type or billing interval
             */
            plan_type?: string | null;
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
            detail: string | null;
            /** Status code */
            status: number;
            /** Problem Title */
            title: string;
            /** Problem type */
            type: string;
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
         * RegistrantChangeType
         * @enum {string}
         */
        RegistrantChangeType: "update" | "trade";
        /**
         * RegistryHandleAttributeType
         * @description Registry handle attribute types for type-safe attribute key access.
         * @enum {string}
         */
        RegistryHandleAttributeType: "at-ext-contact:type" | "DE_CONTACT_TYPE";
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
        Relation: "accepted_tos" | "admin" | "api_admin" | "billing_manager" | "client_api_key" | "cms_content_editor" | "contact_manager" | "domain_manager" | "email_forward_manager" | "events_manager" | "member" | "opusdns_internal_api_key" | "organization_manager" | "owner" | "parent" | "product_manager" | "recipient" | "reseller_manager" | "root_admin" | "self";
        /** RelationSet */
        RelationSet: {
            /** Relations */
            relations?: components["schemas"]["Relation"][];
        };
        /**
         * RenewalMode
         * @enum {string}
         */
        RenewalMode: "renew" | "expire" | "delete";
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
        /** SignupCreate */
        SignupCreate: {
            /**
             * Agreements
             * @description User agreement acceptances.
             */
            agreements?: components["schemas"]["UserAgreementAcceptance"][] | null;
            /** @description Organization signup. */
            organization: components["schemas"]["OrganizationCreate"];
            /** @description Terms of service acceptance (legacy). */
            terms_of_service?: components["schemas"]["TermsOfServiceAccept"] | null;
            /** @description User signup to platform. */
            user: components["schemas"]["UserCreate"];
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
        /** TermsOfServiceAccept */
        TermsOfServiceAccept: {
            /**
             * Accepted
             * @description The organization accepts Terms of Service.
             */
            accepted: boolean;
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
            /** Tld */
            tld: string;
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
            /**
             * Transfer Lock Enabled
             * @description Whether transfers are locked by default in our system
             */
            transfer_lock_enabled: boolean;
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
             * Last Name
             * @description The user's last name
             */
            last_name: string;
            /** Locale */
            locale: string;
            /**
             * Organization Id
             * Format: typeid
             * @description The user's organization id
             * @default None
             */
            organization_id: TypeId<"organization">;
            /**
             * Phone
             * @description The user's phone number
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
             */
            user_id?: TypeId<"user">;
            /**
             * Username
             * @description The user's unique username
             */
            username: string;
        };
        /** UserAgreementAcceptance */
        UserAgreementAcceptance: {
            /**
             * Accepted
             * @description Whether the agreement has been accepted.
             */
            accepted: boolean;
            /** @description Type of agreement being accepted. */
            type: components["schemas"]["AgreementType"];
            /**
             * Url
             * @description URL where the agreement can be found.
             */
            url?: string | null;
            /**
             * Version
             * @description Version of the agreement being accepted.
             */
            version?: string | null;
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
            /** Locale */
            locale: string;
            /**
             * Password
             * @description Plaintext password for hashing during creation
             */
            password: string;
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
        /** UserWithAttributes */
        UserWithAttributes: {
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
            /** Locale */
            locale: string;
            /**
             * Organization Id
             * Format: typeid
             * @description The user's organization id
             * @default None
             */
            organization_id: TypeId<"organization">;
            /**
             * Phone
             * @description The user's phone number
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
             */
            user_attributes?: {
                [key: string]: components["schemas"]["JsonValue"];
            };
            /**
             * User Id
             * Format: typeid
             */
            user_id?: TypeId<"user">;
            /**
             * Username
             * @description The user's unique username
             */
            username: string;
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
            /** Locale */
            locale: string;
            /**
             * Organization Id
             * Format: typeid
             * @description The user's organization id
             * @default None
             */
            organization_id: TypeId<"organization">;
            /** Permissions */
            permissions?: components["schemas"]["Permission"][] | null;
            /**
             * Phone
             * @description The user's phone number
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
             */
            user_attributes?: {
                [key: string]: components["schemas"]["JsonValue"];
            };
            /**
             * User Id
             * Format: typeid
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
        /** WalletCreditRequest */
        WalletCreditRequest: {
            /**
             * Amount
             * @description Amount to credit the customer wallet
             */
            amount: number | string;
            /**
             * Payment Method Id
             * @description Payment method ID that should be used
             */
            payment_method_id: string;
        };
        /**
         * WalletCreditResponseStatus
         * @enum {string}
         */
        WalletCreditResponseStatus: "success" | "failed";
        /** WalletCreditResponseWithBalance */
        WalletCreditResponseWithBalance: {
            /**
             * Amount
             * @description Amount credited to the customer wallet
             */
            amount: string;
            /**
             * Balance
             * @description Updated wallet balance after the credit
             */
            balance: string;
            /**
             * Credit Id
             * @description Unique identifier of the wallet credit transaction
             */
            credit_id: string;
            /**
             * Message
             * @description Optional human-readable message describing the result
             */
            message?: string | null;
            /** @description Status of the credit operation */
            status: components["schemas"]["WalletCreditResponseStatus"];
        };
        /** WhoisBase */
        WhoisBase: {
            /**
             * Whois Server
             * @description WHOIS server
             */
            whois_server?: string | null;
        };
        /**
         * ZoneSortField
         * @enum {string}
         */
        ZoneSortField: "name" | "created_on" | "updated_on" | "dnssec_status";
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
    list_api_keys_v1_auth_client_credentials_get: {
        parameters: {
            query?: {
                /** @description Optional status to filter the results */
                status?: components["schemas"]["OrganizationCredentialStatus"] | null;
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
                    "application/json": components["schemas"]["Pagination_OrganizationCredential_"];
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
    issue_api_key_v1_auth_client_credentials_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["OrganizationCredentialExtra"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["OrganizationCredentialCreated"];
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
    delete_api_key_v1_auth_client_credentials__api_key_id__delete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                api_key_id: TypeId<"api_key">;
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
                     *       "code": "ERROR_ORGANIZATION_CREDENTIAL_NOT_FOUND",
                     *       "credential_id": "Additional error context.",
                     *       "detail": "Organization credential with ID Additional error context. not found",
                     *       "status": 404,
                     *       "title": "Organization Management Error",
                     *       "type": "organization-credential-not-found"
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
    logout_v1_auth_logout_post: {
        parameters: {
            query?: never;
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
        };
    };
    signup_v1_auth_signup_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["SignupCreate"];
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
            /** @description Conflict */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example {
                     *       "code": "ERROR_USER_EXISTS",
                     *       "detail": "User with username or email already exists",
                     *       "status": 409,
                     *       "title": "User Management Error",
                     *       "type": "user-already-present",
                     *       "user": "Additional error context."
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
    issue_organization_token_v1_auth_token_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/x-www-form-urlencoded": components["schemas"]["Body_issue_organization_token_v1_auth_token_post"];
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
            /** @description Successful Response */
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
            /** @description Successful Response */
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
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["DnsZoneSummary"];
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
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["DnsChangesResponse"];
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
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["DnsChangesResponse"];
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
    suggest_v1_domain_search_suggest_get: {
        parameters: {
            query: {
                /** @description The primary keyword or phrase for the domain search */
                query: string;
                /** @description
                 *     Specify one or more TLDs to include in the search.
                 *      */
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
                     *       "detail": "An unspecified error occurred",
                     *       "domain_name": "Additional error context.",
                     *       "reason": "There was an error transferring the domain",
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
    get_email_forward_aliases_v1_email_forwards__zone_name__aliases_get: {
        parameters: {
            query?: {
                page?: number;
                page_size?: number;
            };
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
                    "application/json": components["schemas"]["Pagination_EmailForwardAlias_"];
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
    create_email_forward_alias_v1_email_forwards__zone_name__aliases_post: {
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
                "application/json": components["schemas"]["EmailForwardAlias"];
            };
        };
        responses: {
            /** @description Successful Response */
            201: {
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
    delete_email_forward_aliases_v1_email_forwards__zone_name__aliases_delete: {
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
    get_email_forward_alias_v1_email_forwards__zone_name__aliases__alias__get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                alias: string;
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
                    "application/json": components["schemas"]["EmailForwardAlias"];
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
    update_email_forward_alias_v1_email_forwards__zone_name__aliases__alias__put: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                alias: string;
                /** @description DNS zone name (trailing dot optional) */
                zone_name: string;
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
            201: {
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
    delete_email_forward_alias_v1_email_forwards__zone_name__aliases__alias__delete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                alias: string;
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
    disable_email_forward_v1_email_forwards__zone_name__disable_patch: {
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
    enable_email_forward_v1_email_forwards__zone_name__enable_patch: {
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
    get_events_v1_events_get: {
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
                    "application/json": components["schemas"]["Pagination_User_"];
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
    delete_user_v1_organizations__organization_id__delete: {
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
    get_checkout_session_v1_organizations__organization_id__billing_checkout_sessions_post: {
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
                "application/json": components["schemas"]["CheckoutSessionRequest"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CheckoutSessionResponse"];
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
    list_payment_methods_v1_organizations__organization_id__billing_payment_methods_get: {
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
                    "application/json": components["schemas"]["CustomerCreditCardPaymentMethod"][];
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
    delete_payment_method_v1_organizations__organization_id__billing_payment_methods__payment_method_id__delete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                payment_method_id: string;
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
    update_default_payment_method_v1_organizations__organization_id__billing_payment_methods__payment_method_id__default_patch: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                payment_method_id: string;
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
                    "application/json": components["schemas"]["CustomerCreditCardPaymentMethod"][];
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
    credit_wallet_v1_organizations__organization_id__billing_wallet_credits_post: {
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
                "application/json": components["schemas"]["WalletCreditRequest"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["WalletCreditResponseWithBalance"];
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
    change_plan_v1_organizations__organization_id__plan_patch: {
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
                "application/json": components["schemas"]["PlanIdRequest"];
            };
        };
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
    get_current_available_plans_v1_organizations__organization_id__plans_get: {
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
                    "application/json": components["schemas"]["GetCurrentAvailablePlansResponse"];
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
                    "application/json": components["schemas"]["User"];
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
                    "application/json": components["schemas"]["UserWithAttributes"];
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
                    "application/json": components["schemas"]["UserWithAttributes"];
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
