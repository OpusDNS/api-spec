import { TypeID } from "typeid-js";
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
    "/v1/dns/{zone_name}/rrsets": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /** Update Zone */
        put: operations["update_zone_v1_dns__zone_name__rrsets_put"];
        post?: never;
        delete?: never;
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
         * @description Retrieves a paginated list of all domains
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
        get?: never;
        put?: never;
        /** Check domain availability */
        post: operations["check_domain_v1_domains_check_post"];
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
         * @description Retrieves a single domain by either its name or id
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
        /** List Email Forwards */
        get: operations["list_email_forwards_v1_email_forwards_get"];
        put?: never;
        /** Create Email Forward */
        post: operations["create_email_forward_v1_email_forwards_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/email-forwards/bulk-delete": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Bulk Delete Email Forwards */
        post: operations["bulk_delete_email_forwards_v1_email_forwards_bulk_delete_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/email-forwards/bulk-update": {
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
        /** Bulk Update Email Forwards */
        patch: operations["bulk_update_email_forwards_v1_email_forwards_bulk_update_patch"];
        trace?: never;
    };
    "/v1/email-forwards/{email_forward_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Email Forward */
        get: operations["get_email_forward_v1_email_forwards__email_forward_id__get"];
        put?: never;
        post?: never;
        /** Delete Email Forward */
        delete: operations["delete_email_forward_v1_email_forwards__email_forward_id__delete"];
        options?: never;
        head?: never;
        /** Update Email Forward */
        patch: operations["update_email_forward_v1_email_forwards__email_forward_id__patch"];
        trace?: never;
    };
    "/v1/event": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Events */
        get: operations["get_events_v1_event_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/event/{event_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Event */
        get: operations["get_event_v1_event__event_id__get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /** Acknowledge Event */
        patch: operations["acknowledge_event_v1_event__event_id__patch"];
        trace?: never;
    };
    "/v1/notifications": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List Notifications */
        get: operations["list_notifications_v1_notifications_get"];
        put?: never;
        /** Create Notification */
        post: operations["create_notification_v1_notifications_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/notifications/{notification_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Notification */
        get: operations["get_notification_v1_notifications__notification_id__get"];
        /** Update Notification */
        put: operations["update_notification_v1_notifications__notification_id__put"];
        post?: never;
        /** Delete Notification */
        delete: operations["delete_notification_v1_notifications__notification_id__delete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/notifications/{notification_id}/read": {
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
        /** Update Notification Read */
        patch: operations["update_notification_read_v1_notifications__notification_id__read_patch"];
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
         * @description Get all IP restrictions for the organization
         */
        get: operations["list_ip_restrictions_v1_organizations_ip_restrictions_get"];
        put?: never;
        /**
         * Create Ip Restriction
         * @description Create a new IP restriction for the organization
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
         * @description Get a specific IP restriction by ID
         */
        get: operations["get_ip_restriction_v1_organizations_ip_restrictions__ip_restriction_id__get"];
        put?: never;
        post?: never;
        /**
         * Delete Ip Restriction
         * @description Delete an IP restriction
         */
        delete: operations["delete_ip_restriction_v1_organizations_ip_restrictions__ip_restriction_id__delete"];
        options?: never;
        head?: never;
        /**
         * Update Ip Restriction
         * @description Update an IP restriction
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
    "/v1/users/accept-tos": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Tos Sign */
        post: operations["tos_sign_v1_users_accept_tos_post"];
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
        /** Body_issue_organization_token_v1_auth_token_post */
        Body_issue_organization_token_v1_auth_token_post: {
            /**
             * Client Id
             * @description The organization ID associated with the credentials.
             */
            client_id?: TypeID<"organization"> | null;
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
        /** BulkOperationResponse[EmailForwardBulkDeleteResult] */
        BulkOperationResponse_EmailForwardBulkDeleteResult_: {
            /** Results */
            results: components["schemas"]["BulkOperationResult"][];
        };
        /** BulkOperationResponse[EmailForwardBulkUpdateResult] */
        BulkOperationResponse_EmailForwardBulkUpdateResult_: {
            /** Results */
            results: components["schemas"]["BulkOperationResult"][];
        };
        /** BulkOperationResult */
        BulkOperationResult: {
            /**
             * Error Message
             * @description Error message if operation failed
             */
            error_message?: string | null;
            /** @description Status of performed operation */
            status: components["schemas"]["BulkOperationStatus"];
        };
        /**
         * BulkOperationStatus
         * @enum {string}
         */
        BulkOperationStatus: "success" | "failed";
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
        ContactIdList: {
            [key: string]: TypeID<"contact">;
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
            contact_id?: TypeID<"contact">;
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
            organization_id: TypeID<"organization">;
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
            contact_id: TypeID<"contact">;
            /**
             * Contact Verification Id
             * Format: typeid
             */
            contact_verification_id?: TypeID<"contact_verification">;
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
            contact_id: TypeID<"contact">;
            /**
             * Contact Verification Id
             * Format: typeid
             */
            contact_verification_id?: TypeID<"contact_verification">;
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
            contact_id: TypeID<"contact">;
            /**
             * Contact Verification Id
             * Format: typeid
             */
            contact_verification_id?: TypeID<"contact_verification">;
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
        /**
         * Currency
         * @enum {string}
         */
        Currency: "USD" | "EUR";
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
        /** DnsRecordCreate */
        DnsRecordCreate: {
            /** Rdata */
            rdata: string;
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
            records?: components["schemas"]["DnsRecordCreate"][];
            /** Ttl */
            ttl: number;
            type: components["schemas"]["DnsRrsetType"];
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
        DnsRrsetType: "A" | "AAAA" | "ALIAS" | "CAA" | "CNAME" | "DNSKEY" | "DS" | "MX" | "NS" | "PTR" | "TXT" | "SOA" | "SRV";
        /** DnsZoneCreate */
        DnsZoneCreate: {
            /** @default disabled */
            dnssec_status: components["schemas"]["DnssecStatus"];
            /** Name */
            name: string;
            /** Rrsets */
            rrsets?: components["schemas"]["DnsRrsetCreate"][];
        };
        /** DnsZoneResponse */
        DnsZoneResponse: {
            /** @default disabled */
            dnssec_status: components["schemas"]["DnssecStatus"];
            domain_parts?: components["schemas"]["DomainNameParts"];
            /** Name */
            name: string;
            /** Rrsets */
            rrsets?: components["schemas"]["DnsRrsetResponse"][];
        };
        /** DnsZoneRrsetsCreate */
        DnsZoneRrsetsCreate: {
            /** Rrsets */
            rrsets?: components["schemas"]["DnsRrsetCreate"][];
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
        /** DomainCheck */
        DomainCheck: {
            /**
             * Domain Names
             * @description The domain names to check for
             */
            domain_names?: string[];
        };
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
        /** DomainContactResponse */
        DomainContactResponse: {
            /**
             * Contact Id
             * Format: typeid
             * @description The contact id of the contact
             */
            contact_id: TypeID<"contact">;
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
            /** @description The contacts of the domain */
            contacts: components["schemas"]["ContactIdList"];
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
            domain_dnssec_data_id?: TypeID<"domain_dnssec">;
            /**
             * Domain Id
             * Format: typeid
             * @description The domain this DNSSEC record belongs to
             * @default None
             */
            domain_id: TypeID<"domain">;
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
            domain_id?: TypeID<"domain">;
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
             * @description The nameservers of the domain
             */
            nameservers?: components["schemas"]["HostResponse"][];
            /**
             * Owner Id
             * Format: typeid
             * @description The organization that owns the domain
             * @default None
             */
            owner_id: TypeID<"organization">;
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
            registry_account_id: TypeID<"registry_account">;
            /**
             * Registry Statuses
             * @description All the domain statuses
             */
            registry_statuses?: components["schemas"]["DomainStatus"][];
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
        /** DomainSearchMeta */
        DomainSearchMeta: {
            /** Processing Time Ms */
            processing_time_ms: number;
            /** Total */
            total: number;
        };
        /** DomainSearchResponse */
        DomainSearchResponse: {
            /** Data */
            data: components["schemas"]["DomainSearchSuggestion"][];
            meta: components["schemas"]["DomainSearchMeta"];
        };
        /** DomainSearchSuggestion */
        DomainSearchSuggestion: {
            /** Available */
            available: boolean;
            /** Domain */
            domain: string;
            /** Premium */
            premium: boolean;
        };
        /**
         * DomainStatus
         * @enum {string}
         */
        DomainStatus: "ok" | "serverTransferProhibited" | "serverUpdateProhibited" | "serverDeleteProhibited" | "serverRenewProhibited" | "serverHold" | "transferPeriod" | "renewPeriod" | "redemptionPeriod" | "pendingUpdate" | "pendingTransfer" | "pendingRestore" | "pendingRenew" | "pendingDelete" | "pendingCreate" | "inactive" | "autoRenewPeriod" | "addPeriod" | "deleted" | "clientTransferProhibited" | "clientUpdateProhibited" | "clientDeleteProhibited" | "clientRenewProhibited" | "clientHold";
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
            contacts?: {
                [key: string]: TypeID<"contact">;
            };
            /**
             * Name
             * @description The domain name
             */
            name: string;
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
            contacts?: {
                [key: string]: TypeID<"contact">;
            } | null;
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
        /** EmailForward */
        EmailForward: {
            /**
             * Created On
             * Format: date-time
             * @description The date/time the entry was created on
             */
            created_on?: Date;
            /**
             * Email Forward Id
             * Format: typeid
             */
            email_forward_id?: TypeID<"email_forward">;
            /**
             * Source Address
             * Format: email
             * @description The source email address to forward from
             */
            source_address: string;
            /**
             * @description Current status of the email forward rule
             * @default active
             */
            status: components["schemas"]["EmailForwardStatus"];
            /**
             * Target Address
             * Format: email
             * @description The target email address to forward to
             */
            target_address: string;
            /**
             * Updated On
             * Format: date-time
             * @description The date/time the entry was last updated on
             */
            updated_on?: Date;
        };
        /** EmailForwardBulkDelete */
        EmailForwardBulkDelete: {
            /**
             * Email Forward Ids
             * @description List of email forward ids to delete
             */
            email_forward_ids: TypeID<"email_forward">[];
        };
        /** EmailForwardBulkUpdate */
        EmailForwardBulkUpdate: {
            /**
             * Email Forwards
             * @description List of email forwards data to update
             */
            email_forwards: components["schemas"]["EmailForwardBulkUpdateItem"][];
        };
        /** EmailForwardBulkUpdateItem */
        EmailForwardBulkUpdateItem: {
            /**
             * Email Forward Id
             * Format: typeid
             * @description Unique identifier for the email forward
             */
            email_forward_id: TypeID<"email_forward">;
            /**
             * Source Address
             * @description The source email address to forward from
             */
            source_address?: string | null;
            /** @description Current status of the email forward rule */
            status?: components["schemas"]["EmailForwardStatus"] | null;
            /**
             * Target Address
             * @description The target email address to forward to
             */
            target_address?: string | null;
        };
        /** EmailForwardCreate */
        EmailForwardCreate: {
            /**
             * Source Address
             * Format: email
             * @description The source email address to forward from
             */
            source_address: string;
            /**
             * @description Current status of the email forward rule
             * @default active
             */
            status: components["schemas"]["EmailForwardStatus"];
            /**
             * Target Address
             * Format: email
             * @description The target email address to forward to
             */
            target_address: string;
        };
        /**
         * EmailForwardStatus
         * @enum {string}
         */
        EmailForwardStatus: "active" | "inactive";
        /** EmailForwardUpdate */
        EmailForwardUpdate: {
            /**
             * Source Address
             * @description The source email address to forward from
             */
            source_address?: string | null;
            /** @description Current status of the email forward rule */
            status?: components["schemas"]["EmailForwardStatus"] | null;
            /**
             * Target Address
             * @description The target email address to forward to
             */
            target_address?: string | null;
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
            event_data: components["schemas"]["TransferEvent"] | components["schemas"]["DeletedEvent"];
            /**
             * Event Id
             * Format: typeid
             */
            event_id?: TypeID<"epp_event">;
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
            event_id?: TypeID<"epp_event">;
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
            source_event_id?: TypeID<"epp_event"> | null;
            /** @description The specific type/result of operation (considering the type property), more detailed (e.g., 'NOTIFICATION' with the 'DOMAIN_MODIFICATION' class) */
            subtype?: components["schemas"]["EventSubtype"] | null;
            /**
             * Target
             * @description The target of the event
             */
            target?: TypeID<"organization"> | null;
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
        /** HostIpResponse */
        HostIpResponse: {
            /**
             * Address
             * Format: ipvanyaddress
             * @description The ip address of the host
             */
            address: string;
            /** @description The type of the ip address */
            type: components["schemas"]["IPAddressType"];
        };
        /** HostResponse */
        HostResponse: {
            /**
             * Host Ips
             * @description The ip addresses of the nameserver
             */
            host_ips?: components["schemas"]["HostIpResponse"][];
            /**
             * Hostname
             * @description The hostname of the associated nameserver
             */
            hostname: string;
        };
        /**
         * IPAddressType
         * @enum {string}
         */
        IPAddressType: "v4" | "v6";
        /** IpRestrictionCreate */
        IpRestrictionCreate: {
            /**
             * Ip Network
             * Format: ipvanynetwork
             * @description IP address or CIDR range for the restriction.
             */
            ip_network: string;
            /**
             * Organization Id
             * Format: typeid
             */
            organization_id?: TypeID<"organization">;
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
             * @description IP address or CIDR range for the restriction.
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
            organization_id: TypeID<"organization">;
        };
        /** IpRestrictionUpdate */
        IpRestrictionUpdate: {
            /**
             * Ip Network
             * @description IP address or CIDR range for the restriction.
             */
            ip_network?: string | null;
            /**
             * Last Used On
             * @description Timestamp of the last usage.
             */
            last_used_on?: Date | null;
        };
        JsonValue: unknown;
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
        /** Notification */
        Notification: {
            /**
             * Author
             * @description The user or system that created the notification
             */
            author: string;
            /**
             * Created On
             * Format: date-time
             * @description The date/time the entry was created on
             */
            created_on?: Date;
            /**
             * Message
             * @description The message content of the notification
             */
            message: string;
            /**
             * Notification Id
             * Format: typeid
             */
            notification_id?: TypeID<"notification">;
            /**
             * Publish Date
             * Format: date-time
             * @description The date/time the notification is to be published
             */
            publish_date?: Date;
            /**
             * Source
             * @description Source of the notification
             */
            source: string;
            /**
             * Subject
             * @description The subject of the notification
             */
            subject: string;
            /**
             * Target
             * @description Target audience (broadcast, account, user)
             */
            target: string;
            /**
             * Type
             * @description The type of notification
             */
            type: string;
            /**
             * Updated On
             * Format: date-time
             * @description The date/time the entry was last updated on
             */
            updated_on?: Date;
        };
        /** NotificationCreate */
        NotificationCreate: {
            /**
             * Author
             * @description The user or system that created the notification
             */
            author: string;
            /**
             * Message
             * @description The message content of the notification
             */
            message: string;
            /**
             * Publish Date
             * Format: date-time
             * @description The date/time the notification is to be published
             */
            publish_date?: Date;
            /**
             * Source
             * @description Source of the notification
             */
            source: string;
            /**
             * Subject
             * @description The subject of the notification
             */
            subject: string;
            /**
             * Target
             * @description Target audience (broadcast, account, user)
             */
            target: string;
            /**
             * Type
             * @description The type of notification
             */
            type: string;
        };
        /** NotificationSummary */
        NotificationSummary: {
            /**
             * Author
             * @description The user or system that created the notification
             */
            author: string;
            /**
             * Message
             * @description The message content of the notification
             */
            message: string;
            /**
             * Notification Id
             * Format: typeid
             */
            notification_id?: TypeID<"notification">;
            /**
             * Publish Date
             * Format: date-time
             * @description The date/time the notification is to be published
             */
            publish_date?: Date;
            /**
             * Source
             * @description Source of the notification
             */
            source: string;
            /**
             * Subject
             * @description The subject of the notification
             */
            subject: string;
            /**
             * Target
             * @description Target audience (broadcast, account, user)
             */
            target: string;
            /**
             * Type
             * @description The type of notification
             */
            type: string;
        };
        /** NotificationUpdate */
        NotificationUpdate: {
            /**
             * Author
             * @description The user or system that created the notification
             */
            author: string;
            /**
             * Message
             * @description The message content of the notification
             */
            message: string;
            /**
             * Publish Date
             * Format: date-time
             * @description The date/time the notification is to be published
             */
            publish_date?: Date;
            /**
             * Source
             * @description Source of the notification
             */
            source: string;
            /**
             * Subject
             * @description The subject of the notification
             */
            subject: string;
            /**
             * Target
             * @description Target audience (broadcast, account, user)
             */
            target: string;
            /**
             * Type
             * @description The type of notification
             */
            type: string;
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
            organization_id?: TypeID<"organization">;
            /**
             * Parent Organization Id
             * @description ID of the parent organization.
             */
            parent_organization_id?: TypeID<"organization"> | null;
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
            parent_organization_id?: TypeID<"organization"> | null;
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
            api_key_id: TypeID<"api_key">;
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
            organization_id: TypeID<"organization">;
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
            api_key: TypeID<"api_key">;
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
            client_id: TypeID<"organization">;
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
        /** OrganizationWithPlan */
        OrganizationWithPlan: {
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
            organization_id?: TypeID<"organization">;
            /**
             * Parent Organization Id
             * @description ID of the parent organization.
             */
            parent_organization_id?: TypeID<"organization"> | null;
            /** @default basic_plan */
            plan: components["schemas"]["PlanRelation"];
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
        /** Pagination[EmailForward] */
        Pagination_EmailForward_: {
            pagination: components["schemas"]["PaginationMetadata"];
            /** Results */
            results: components["schemas"]["EmailForward"][];
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
        /** Pagination[UserNotificationSummary] */
        Pagination_UserNotificationSummary_: {
            pagination: components["schemas"]["PaginationMetadata"];
            /** Results */
            results: components["schemas"]["UserNotificationSummary"][];
        };
        /** Pagination[User] */
        Pagination_User_: {
            pagination: components["schemas"]["PaginationMetadata"];
            /** Results */
            results: components["schemas"]["User"][];
        };
        /**
         * PeriodUnit
         * @enum {string}
         */
        PeriodUnit: "y" | "m" | "d";
        /**
         * Permission
         * @enum {string}
         */
        Permission: "acknowledge" | "bulk_create" | "bulk_delete" | "bulk_renew_expire" | "bulk_transfer_trade" | "bulk_update" | "create" | "delete" | "enterprise" | "manage_api_keys" | "manage_billing" | "manage_cms_content" | "manage_contacts" | "manage_dns_zones" | "manage_domains" | "manage_email_forwards" | "manage_opusdns_api_keys" | "manage_products" | "manage_reseller" | "manage_user_relations" | "manage_users" | "plan_manager" | "premium" | "premium_reseller" | "renew_expire" | "sign_org_tos" | "starter" | "transfer_trade" | "update" | "verify" | "view" | "view_audit_logs";
        /** PermissionSet */
        PermissionSet: {
            /** Permissions */
            permissions?: components["schemas"]["Permission"][];
        };
        /**
         * PlanRelation
         * @enum {string}
         */
        PlanRelation: "basic_plan" | "enterprise_plan" | "premium_plan" | "starter_plan";
        /** PlanUpdate */
        PlanUpdate: {
            /** @default basic_plan */
            plan: components["schemas"]["PlanRelation"];
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
        /**
         * Relation
         * @enum {string}
         */
        Relation: "accepted_tos" | "admin" | "api_admin" | "billing_manager" | "client_api_key" | "cms_content_editor" | "contact_manager" | "domain_manager" | "email_forward_manager" | "member" | "opusdns_internal_api_key" | "organization_manager" | "owner" | "parent" | "product_manager" | "recipient" | "reseller_manager" | "root_admin" | "self";
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
        /** SignupCreate */
        SignupCreate: {
            /** @description Organization signup. */
            organization: components["schemas"]["OrganizationCreate"];
            /** @description Optional terms of service acceptance. */
            terms_of_service?: components["schemas"]["TermsOfServiceAccept"] | null;
            /** @description User signup to platform. */
            user: components["schemas"]["UserCreate"];
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
        /** TermsOfServiceAccept */
        TermsOfServiceAccept: {
            /** Accepted */
            accepted: boolean;
        };
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
            organization_id: TypeID<"organization">;
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
            user_id?: TypeID<"user">;
            /**
             * Username
             * @description The user's unique username
             */
            username: string;
        };
        /** UserAttributeUpdate */
        UserAttributeUpdate: {
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
             * Username
             * @description The user's unique username
             */
            username: string;
        };
        /** UserNotification */
        UserNotification: {
            /**
             * Created On
             * Format: date-time
             * @description The date/time the entry was created on
             */
            created_on?: Date;
            notification: components["schemas"]["Notification"];
            /**
             * Notification Id
             * Format: typeid
             * @description Unique identifier for the notification
             * @default None
             */
            notification_id: TypeID<"notification">;
            /**
             * @description Whether the user has read the notification
             * @default unread
             */
            status: components["schemas"]["UserNotificationStatus"];
            /**
             * Updated On
             * Format: date-time
             * @description The date/time the entry was last updated on
             */
            updated_on?: Date;
            /**
             * User Id
             * Format: typeid
             * @default None
             */
            user_id: TypeID<"user">;
            /**
             * User Notification Id
             * Format: typeid
             */
            user_notification_id?: TypeID<"user_notification">;
        };
        /**
         * UserNotificationStatus
         * @enum {string}
         */
        UserNotificationStatus: "read" | "unread";
        /** UserNotificationSummary */
        UserNotificationSummary: {
            notification: components["schemas"]["NotificationSummary"];
            /**
             * @description Whether the user has read the notification
             * @default unread
             */
            status: components["schemas"]["UserNotificationStatus"];
            /**
             * User Notification Id
             * Format: typeid
             */
            user_notification_id?: TypeID<"user_notification">;
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
            user_attributes?: components["schemas"]["UserAttributeUpdate"][] | null;
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
            organization_id: TypeID<"organization">;
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
            user_id?: TypeID<"user">;
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
            organization_id: TypeID<"organization">;
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
            user_id?: TypeID<"user">;
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
        /**
         * ZoneSortField
         * @enum {string}
         */
        ZoneSortField: "name" | "created_on" | "updated_on" | "dnssec_status";
        /** DomainAvailabilityResponse */
        common__models__availability__datasource__DomainAvailabilityResponse: {
            /** Data */
            data: components["schemas"]["DomainAvailability"][];
            meta: components["schemas"]["DomainAvailabilityMeta"];
        };
        /** DomainAvailabilityResponse */
        common__models__domain__domain__DomainAvailabilityResponse: {
            /** Available */
            available: boolean;
            /**
             * Domain Name
             * @description The domain name
             */
            domain_name: string;
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
                api_key_id: TypeID<"api_key">;
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
                    "application/problem+json": components["schemas"]["Problem"];
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
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
        };
    };
    get_contacts_v1_contacts_get: {
        parameters: {
            query?: {
                page?: number;
                page_size?: number;
                sort_by?: components["schemas"]["ContactSortField"];
                sort_order?: components["schemas"]["SortOrder"];
                first_name?: string | null;
                last_name?: string | null;
                email?: string | null;
                search?: string | null;
                country?: string | null;
                created_after?: Date | null;
                created_before?: Date | null;
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
                    "application/problem+json": components["schemas"]["Problem"];
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
                    "application/problem+json": components["schemas"]["Problem"];
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
                contact_id: TypeID<"contact">;
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
                contact_id: TypeID<"contact">;
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
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Conflict */
            409: {
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
    get_verification_status_v1_contacts__contact_id__verification_get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                contact_id: TypeID<"contact">;
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
                    "application/problem+json": components["schemas"]["Problem"];
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
    update_verification_v1_contacts__contact_id__verification_put: {
        parameters: {
            query: {
                token: string;
            };
            header?: never;
            path: {
                contact_id: TypeID<"contact">;
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
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Forbidden */
            403: {
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
                contact_id: TypeID<"contact">;
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
                    "application/problem+json": components["schemas"]["Problem"];
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
            /** @description Method Not Allowed */
            405: {
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
    cancel_verification_v1_contacts__contact_id__verification_delete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                contact_id: TypeID<"contact">;
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
                    "application/problem+json": components["schemas"]["Problem"];
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
    list_zones_v1_dns_get: {
        parameters: {
            query?: {
                page?: number;
                page_size?: number;
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
    update_zone_v1_dns__zone_name__rrsets_put: {
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
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
        };
    };
    get_domains_v1_domains_get: {
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
                    "application/problem+json": components["schemas"]["Problem"];
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
            /** @description Conflict */
            409: {
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
    check_domain_v1_domains_check_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["DomainCheck"];
            };
        };
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
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Conflict */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Unprocessable Content */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
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
                domain_reference: TypeID<"domain"> | string;
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
                domain_reference: TypeID<"domain"> | string;
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
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Conflict */
            409: {
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
    update_domain_v1_domains__domain_reference__patch: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                domain_reference: TypeID<"domain"> | string;
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
                domain_reference: TypeID<"domain"> | string;
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
                domain_reference: TypeID<"domain"> | string;
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
    delete_dnssec_v1_domains__domain_reference__dnssec_delete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                domain_reference: TypeID<"domain"> | string;
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
                domain_reference: TypeID<"domain"> | string;
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
    cancel_domain_transfer_v1_domains__domain_reference__transfer_delete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                domain_reference: TypeID<"domain"> | string;
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
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
            /** @description Bad Request */
            409: {
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
    list_email_forwards_v1_email_forwards_get: {
        parameters: {
            query?: {
                /** @description Optional status to filter the results */
                status?: components["schemas"]["EmailForwardStatus"] | null;
                /** @description Optional source address to filter the results */
                source_address?: string | null;
                /** @description Optional target address to filter the results */
                target_address?: string | null;
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
                    "application/json": components["schemas"]["Pagination_EmailForward_"];
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
                    "application/json": components["schemas"]["EmailForward"];
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
    bulk_delete_email_forwards_v1_email_forwards_bulk_delete_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["EmailForwardBulkDelete"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["BulkOperationResponse_EmailForwardBulkDeleteResult_"];
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
    bulk_update_email_forwards_v1_email_forwards_bulk_update_patch: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["EmailForwardBulkUpdate"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["BulkOperationResponse_EmailForwardBulkUpdateResult_"];
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
                email_forward_id: TypeID<"email_forward">;
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
                    "application/json": components["schemas"]["EmailForward"];
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
                email_forward_id: TypeID<"email_forward">;
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
    update_email_forward_v1_email_forwards__email_forward_id__patch: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                email_forward_id: TypeID<"email_forward">;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["EmailForwardUpdate"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["EmailForward"];
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
    get_events_v1_event_get: {
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
    get_event_v1_event__event_id__get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                event_id: TypeID<"epp_event">;
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
                    "application/problem+json": components["schemas"]["Problem"];
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
    acknowledge_event_v1_event__event_id__patch: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                event_id: TypeID<"epp_event">;
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
                    "application/problem+json": components["schemas"]["Problem"];
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
    list_notifications_v1_notifications_get: {
        parameters: {
            query: {
                user_id: TypeID<"user">;
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
                    "application/json": components["schemas"]["Pagination_UserNotificationSummary_"];
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
    create_notification_v1_notifications_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["NotificationCreate"];
            };
        };
        responses: {
            /** @description Successful Response */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Notification"];
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
    get_notification_v1_notifications__notification_id__get: {
        parameters: {
            query: {
                user_id: TypeID<"user">;
            };
            header?: never;
            path: {
                notification_id: TypeID<"notification">;
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
                    "application/json": components["schemas"]["UserNotification"];
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
    update_notification_v1_notifications__notification_id__put: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                notification_id: TypeID<"notification">;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["NotificationUpdate"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Notification"];
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
    delete_notification_v1_notifications__notification_id__delete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                notification_id: TypeID<"notification">;
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
    update_notification_read_v1_notifications__notification_id__read_patch: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                notification_id: TypeID<"notification">;
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
                organization_id?: TypeID<"organization"> | null;
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
                organization_id?: TypeID<"organization"> | null;
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
                organization_id: TypeID<"organization"> | null;
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
                organization_id: TypeID<"organization"> | null;
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
                organization_id: TypeID<"organization">;
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
                    "application/json": components["schemas"]["OrganizationWithPlan"];
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
                organization_id: TypeID<"organization">;
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
                organization_id: TypeID<"organization">;
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
    change_plan_v1_organizations__organization_id__plan_patch: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                organization_id: TypeID<"organization">;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["PlanUpdate"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["OrganizationWithPlan"];
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
    tos_sign_v1_users_accept_tos_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["TermsOfServiceAccept"];
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
    get_user_v1_users__user_id__get: {
        parameters: {
            query?: {
                attributes?: string[] | null;
            };
            header?: never;
            path: {
                user_id: TypeID<"user">;
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
                user_id: TypeID<"user">;
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
    update_user_v1_users__user_id__patch: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                user_id: TypeID<"user">;
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
                user_id: TypeID<"user">;
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
                user_id: TypeID<"user">;
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
                user_id: TypeID<"user">;
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
