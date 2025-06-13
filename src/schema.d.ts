import { TypeID } from "typeid-js";
export interface paths {
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
    "/v1/availability/dns": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Bulk Dns Check Domain Availability */
        post: operations["bulk_dns_check_domain_availability_v1_availability_dns_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/availability/rdap": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Bulk Rdap Check Domain Availability */
        post: operations["bulk_rdap_check_domain_availability_v1_availability_rdap_post"];
        delete?: never;
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
    "/v1/rdap/host/{name}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Not Found */
        get: operations["not_found_v1_rdap_host__name__get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/rdap/contact/{name}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Not Found */
        get: operations["not_found_v1_rdap_contact__name__get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/rdap/domain/{name}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Not Found */
        get: operations["not_found_v1_rdap_domain__name__get"];
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
    "/v1/users/verify": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Redirect Verify User */
        get: operations["redirect_verify_user_v1_users_verify_get"];
        put?: never;
        post?: never;
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
    "/v1/users/me/verification": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Verification Status Me */
        get: operations["get_verification_status_me_v1_users_me_verification_get"];
        /** Update Verification Me */
        put: operations["update_verification_me_v1_users_me_verification_put"];
        /** Create Verification Me */
        post: operations["create_verification_me_v1_users_me_verification_post"];
        /** Cancel Verification Me */
        delete: operations["cancel_verification_me_v1_users_me_verification_delete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/users/{user_id}/verification": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Verification Status */
        get: operations["get_verification_status_v1_users__user_id__verification_get"];
        /** Update Verification */
        put: operations["update_verification_v1_users__user_id__verification_put"];
        /** Create Verification */
        post: operations["create_verification_v1_users__user_id__verification_post"];
        /** Cancel Verification */
        delete: operations["cancel_verification_v1_users__user_id__verification_delete"];
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
    "/v1/domains/check": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Check Domain */
        post: operations["check_domain_v1_domains_check_post"];
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
        /** Get Domain */
        get: operations["get_domain_v1_domains__domain_reference__get"];
        put?: never;
        post?: never;
        /** Delete Domain */
        delete: operations["delete_domain_v1_domains__domain_reference__delete"];
        options?: never;
        head?: never;
        /** Update Domain */
        patch: operations["update_domain_v1_domains__domain_reference__patch"];
        trace?: never;
    };
    "/v1/domains": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Domains */
        get: operations["get_domains_v1_domains_get"];
        put?: never;
        /** Create Domain */
        post: operations["create_domain_v1_domains_post"];
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
        /** Renew Domain */
        post: operations["renew_domain_v1_domains__domain_reference__renew_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/domains/{domain_name}/restore": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Restore Domain */
        post: operations["restore_domain_v1_domains__domain_name__restore_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/domains/{domain_name}/transfer": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Transfer Domain */
        get: operations["transfer_domain_v1_domains__domain_name__transfer_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/domains/{domain_reference}/dnssec": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Dnssec */
        get: operations["get_dnssec_v1_domains__domain_reference__dnssec_get"];
        /** Create Or Update Dnssec */
        put: operations["create_or_update_dnssec_v1_domains__domain_reference__dnssec_put"];
        post?: never;
        /** Delete Dnssec */
        delete: operations["delete_dnssec_v1_domains__domain_reference__dnssec_delete"];
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
        /** Get Contacts */
        get: operations["get_contacts_v1_contacts_get"];
        put?: never;
        /** Create Contact */
        post: operations["create_contact_v1_contacts_post"];
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
        /** Get Contact */
        get: operations["get_contact_v1_contacts__contact_id__get"];
        /** Update Contact */
        put: operations["update_contact_v1_contacts__contact_id__put"];
        post?: never;
        /** Delete Contact */
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
        /** Get Verification Status */
        get: operations["get_verification_status_v1_contacts__contact_id__verification_get"];
        /** Update Verification */
        put: operations["update_verification_v1_contacts__contact_id__verification_put"];
        /** Start Contact Verification */
        post: operations["start_contact_verification_v1_contacts__contact_id__verification_post"];
        /** Cancel Verification */
        delete: operations["cancel_verification_v1_contacts__contact_id__verification_delete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/contacts/{contact_id}/verify": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Email Verify Contact */
        get: operations["email_verify_contact_v1_contacts__contact_id__verify_get"];
        put?: never;
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
        /** Suggest Domains */
        get: operations["suggest_domains_v1_domain_search_suggest_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        /** Body_issue_organization_token_v1_auth_token_post */
        Body_issue_organization_token_v1_auth_token_post: {
            /** @description The grant type for the authentication request. */
            grant_type?: components["schemas"]["GrantType"];
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
            /**
             * Username
             * @description Username for authentication.
             */
            username?: string | null;
            /**
             * Password
             * @description Password for the user.
             */
            password?: string | null;
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
            /** @description Status of performed operation */
            status: components["schemas"]["BulkOperationStatus"];
            /**
             * Error Message
             * @description Error message if operation failed
             */
            error_message?: string | null;
        };
        /**
         * BulkOperationStatus
         * @enum {string}
         */
        BulkOperationStatus: "success" | "failed";
        /** ContactCreate */
        ContactCreate: {
            /**
             * Title
             * @description The title of the contact
             */
            title: string | null;
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
            org: string | null;
            /**
             * Email
             * Format: email
             * @description The email of the contact
             */
            email: string;
            /**
             * Phone
             * @description The contact'sphone number
             */
            phone?: string | null;
            /**
             * Fax
             * @description The contacts's fax number
             */
            fax?: string | null;
            /**
             * Street
             * @description The address of the contact
             */
            street: string;
            /**
             * City
             * @description The city of the contact
             */
            city: string;
            /**
             * State
             * @description The state of the contact
             */
            state: string | null;
            /**
             * Postal Code
             * @description The postal code of the contact
             */
            postal_code: string;
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
        };
        /** ContactSchema */
        ContactSchema: {
            /**
             * Deleted On
             * @description The date/time the entry was deleted on
             */
            deleted_on?: Date | null;
            /**
             * Created On
             * Format: date-time
             * @description The date/time the entry was created on
             */
            created_on?: Date;
            /**
             * Title
             * @description The title of the contact
             */
            title: string | null;
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
            org: string | null;
            /**
             * Email
             * Format: email
             * @description The email of the contact
             */
            email: string;
            /**
             * Phone
             * @description The contact'sphone number
             */
            phone?: string | null;
            /**
             * Fax
             * @description The contacts's fax number
             */
            fax?: string | null;
            /**
             * Street
             * @description The address of the contact
             */
            street: string;
            /**
             * City
             * @description The city of the contact
             */
            city: string;
            /**
             * State
             * @description The state of the contact
             */
            state: string | null;
            /**
             * Postal Code
             * @description The postal code of the contact
             */
            postal_code: string;
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
             * Contact Id
             * Format: typeid
             */
            contact_id?: TypeID<"contact">;
            /**
             * Organization Id
             * Format: typeid
             * @description The organization that owns the domain
             * @default None
             */
            organization_id: TypeID<"organization">;
        };
        /** ContactUpdate */
        ContactUpdate: {
            /**
             * Title
             * @description The title of the contact
             */
            title?: string | null;
            /**
             * First Name
             * @description The first name of the contact
             */
            first_name?: string | null;
            /**
             * Last Name
             * @description The last name of the contact
             */
            last_name?: string | null;
            /**
             * Org
             * @description The organization of the contact
             */
            org?: string | null;
            /**
             * Email
             * @description The email of the contact
             */
            email?: string | null;
            /**
             * Phone
             * @description The contact's phone number
             */
            phone?: string | null;
            /**
             * Fax
             * @description The contact's fax number
             */
            fax?: string | null;
            /**
             * Street
             * @description The address of the contact
             */
            street?: string | null;
            /**
             * City
             * @description The city of the contact
             */
            city?: string | null;
            /**
             * State
             * @description The state of the contact
             */
            state?: string | null;
            /**
             * Postal Code
             * @description The postal code of the contact
             */
            postal_code?: string | null;
            /**
             * Country
             * @description The country of the contact
             */
            country?: string | null;
        };
        /** ContactVerificationApiResponse */
        ContactVerificationApiResponse: {
            /**
             * Token
             * @description The token to verify the email address
             */
            token: string;
            /**
             * Updated On
             * Format: date-time
             * @description The date/time the entry was last updated on
             */
            updated_on?: Date;
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
             * Verified On
             * @description The date the verification was verified
             */
            verified_on?: Date | null;
            /**
             * Canceled On
             * @description The date the verification was cancelled
             */
            canceled_on?: Date | null;
            /**
             * Contact Verification Id
             * Format: typeid
             */
            contact_verification_id?: TypeID<"contact_verification">;
            /**
             * Contact Id
             * Format: typeid
             * @description The contact that is being verified
             * @default None
             */
            contact_id: TypeID<"contact">;
        };
        /** ContactVerificationEmailResponse */
        ContactVerificationEmailResponse: {
            /**
             * Updated On
             * Format: date-time
             * @description The date/time the entry was last updated on
             */
            updated_on?: Date;
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
             * Verified On
             * @description The date the verification was verified
             */
            verified_on?: Date | null;
            /**
             * Canceled On
             * @description The date the verification was cancelled
             */
            canceled_on?: Date | null;
            /**
             * Contact Verification Id
             * Format: typeid
             */
            contact_verification_id?: TypeID<"contact_verification">;
            /**
             * Contact Id
             * Format: typeid
             * @description The contact that is being verified
             * @default None
             */
            contact_id: TypeID<"contact">;
        };
        /** ContactVerificationResponse */
        ContactVerificationResponse: {
            /**
             * Updated On
             * Format: date-time
             * @description The date/time the entry was last updated on
             */
            updated_on?: Date;
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
             * Verified On
             * @description The date the verification was verified
             */
            verified_on?: Date | null;
            /**
             * Canceled On
             * @description The date the verification was cancelled
             */
            canceled_on?: Date | null;
            /**
             * Contact Verification Id
             * Format: typeid
             */
            contact_verification_id?: TypeID<"contact_verification">;
            /**
             * Contact Id
             * Format: typeid
             * @description The contact that is being verified
             * @default None
             */
            contact_id: TypeID<"contact">;
        };
        /**
         * Currency
         * @enum {string}
         */
        Currency: "USD" | "EUR";
        /**
         * DnsChangeAction
         * @enum {string}
         */
        DnsChangeAction: "create_zone" | "delete_zone" | "create_record" | "delete_record" | "enable_dnssec" | "disable_dnssec";
        /** DnsChangeResponse */
        DnsChangeResponse: {
            action: components["schemas"]["DnsChangeAction"];
            /** Rrset Name */
            rrset_name: string | null;
            rrset_type: components["schemas"]["DnsRrsetType"] | null;
            /** Record Data */
            record_data: string | null;
            /** Ttl */
            ttl: number | null;
        };
        /** DnsChangesResponse */
        DnsChangesResponse: {
            /** Zone Name */
            zone_name: string;
            /** Changeset Id */
            changeset_id: string | null;
            /** Num Changes */
            num_changes: number;
            /** Changes */
            changes: components["schemas"]["DnsChangeResponse"][];
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
            type: components["schemas"]["DnsRrsetType"];
            /** Ttl */
            ttl: number;
            /**
             * Records
             * @default []
             */
            records: components["schemas"]["DnsRecordCreate"][];
        };
        /** DnsRrsetResponse */
        DnsRrsetResponse: {
            /** Name */
            name: string;
            type: components["schemas"]["DnsRrsetType"];
            /** Ttl */
            ttl: number;
            /**
             * Records
             * @default []
             */
            records: components["schemas"]["DnsRecordResponse"][];
        };
        /**
         * DnsRrsetType
         * @enum {string}
         */
        DnsRrsetType: "A" | "AAAA" | "ALIAS" | "CAA" | "CNAME" | "DNSKEY" | "DS" | "MX" | "NS" | "PTR" | "TXT" | "SOA" | "SRV";
        /** DnsZoneCreate */
        DnsZoneCreate: {
            /**
             * Rrsets
             * @default []
             */
            rrsets: components["schemas"]["DnsRrsetCreate"][];
            /** @default disabled */
            dnssec_status: components["schemas"]["DnssecStatus"];
            /** Name */
            name: string;
        };
        /** DnsZoneResponse */
        DnsZoneResponse: {
            /** @default disabled */
            dnssec_status: components["schemas"]["DnssecStatus"];
            /** Name */
            name: string;
            /** @default {} */
            domain_parts: components["schemas"]["DomainNameParts"];
            /**
             * Rrsets
             * @default []
             */
            rrsets: components["schemas"]["DnsRrsetResponse"][];
        };
        /** DnsZoneRrsetsCreate */
        DnsZoneRrsetsCreate: {
            /**
             * Rrsets
             * @default []
             */
            rrsets: components["schemas"]["DnsRrsetCreate"][];
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
        /** DomainAvailabilityData */
        DomainAvailabilityData: {
            /** Domain */
            domain: string;
            available: components["schemas"]["DomainAvailabilityStatus"];
            error?: components["schemas"]["ErrorResponse"] | null;
            /** Source */
            source?: string | null;
        };
        /** DomainAvailabilityResponse */
        DomainAvailabilityResponse: {
            /** Domain Name */
            domain_name: string;
            /** Available */
            available: boolean;
            /** Reason */
            reason: string | null;
        };
        /**
         * DomainAvailabilityStatus
         * @enum {string}
         */
        DomainAvailabilityStatus: "available" | "unavailable" | "error";
        /** DomainCheck */
        DomainCheck: {
            /** Domain Names */
            domain_names: string[];
        };
        /** DomainCheckResponse */
        DomainCheckResponse: {
            /** Results */
            results: components["schemas"]["DomainAvailabilityResponse"][];
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
            /**
             * Registry Handle Id
             * @description The registry handle id of the contact
             */
            registry_handle_id?: string | null;
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
             * Name
             * @description The domain to be created
             */
            name: string;
            /** @description How long the domain should be registered for */
            period: components["schemas"]["DomainPeriod"];
            /**
             * Contacts
             * @description The contacts of the domain
             */
            contacts: {
                [key: string]: TypeID<"contact">;
            };
            /**
             * Nameservers
             * @description The name servers for the domain
             */
            nameservers?: components["schemas"]["Nameserver"][] | null;
            /** @description The renewal mode of the domain */
            renewal_mode?: components["schemas"]["RenewalMode"];
        };
        /** DomainDnssecDataCreate */
        DomainDnssecDataCreate: {
            /**
             * Flags
             * @description DNSKEY flags for key records
             */
            flags?: number | null;
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
            /**
             * Key Tag
             * @description Key tag for DS records
             */
            key_tag?: number | null;
            /** @description Digest type for DS records */
            digest_type?: components["schemas"]["DnssecDigestType"] | null;
            /**
             * Digest
             * @description Digest value for DS records
             */
            digest?: string | null;
            /** @description Type of DNSSEC record (DS or Key) */
            record_type: components["schemas"]["DnssecRecordType"];
            /** @description DNSSEC algorithm used */
            algorithm: components["schemas"]["DnssecAlgorithm"];
        };
        /** DomainDnssecDataResponse */
        DomainDnssecDataResponse: {
            /**
             * Updated On
             * Format: date-time
             * @description The date/time the entry was last updated on
             */
            updated_on?: Date;
            /**
             * Created On
             * Format: date-time
             * @description The date/time the entry was created on
             */
            created_on?: Date;
            /**
             * Flags
             * @description DNSKEY flags for key records
             */
            flags?: number | null;
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
            /**
             * Key Tag
             * @description Key tag for DS records
             */
            key_tag?: number | null;
            /** @description Digest type for DS records */
            digest_type?: components["schemas"]["DnssecDigestType"] | null;
            /**
             * Digest
             * @description Digest value for DS records
             */
            digest?: string | null;
            /** @description Type of DNSSEC record (DS or Key) */
            record_type: components["schemas"]["DnssecRecordType"];
            /** @description DNSSEC algorithm used */
            algorithm: components["schemas"]["DnssecAlgorithm"];
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
        };
        /** DomainNameParts */
        DomainNameParts: {
            /** Subdomain */
            subdomain?: string | null;
            /** Domain */
            domain?: string | null;
            /** Suffix */
            suffix?: string | null;
        };
        /** DomainPeriod */
        DomainPeriod: {
            /**
             * Value
             * @description The period of the domain
             */
            value: number;
            /** @description The unit of the period */
            unit: components["schemas"]["DomainPeriodUnit"];
        };
        /**
         * DomainPeriodUnit
         * @enum {string}
         */
        DomainPeriodUnit: "y" | "m" | "d";
        /** DomainResponse */
        DomainResponse: {
            /**
             * Updated On
             * Format: date-time
             * @description The date/time the entry was last updated on
             */
            updated_on?: Date;
            /**
             * Created On
             * Format: date-time
             * @description The date/time the entry was created on
             */
            created_on?: Date;
            /**
             * Name
             * @description The domain name
             */
            name: string;
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
             * Roid
             * @description The registry object id of the domain
             */
            roid: string;
            /** @description The renewal mode of the domain */
            renewal_mode?: components["schemas"]["RenewalMode"];
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
             * Transfer Lock
             * @description Whether the domain is locked for transfer
             * @default false
             */
            transfer_lock: boolean;
            /**
             * Canceled On
             * @description When the domain was deleted
             */
            canceled_on?: Date | null;
            /**
             * Expires On
             * @description When the domain expires
             */
            expires_on?: Date | null;
            /**
             * Registered On
             * @description When the domain was registered
             */
            registered_on?: Date | null;
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
             * Owner Id
             * Format: typeid
             * @description The organization that owns the domain
             * @default None
             */
            owner_id: TypeID<"organization">;
            /**
             * Registry Account Id
             * Format: typeid
             * @default None
             */
            registry_account_id: TypeID<"registry_account">;
            /**
             * Contacts
             * @default []
             */
            contacts: components["schemas"]["DomainContactResponse"][];
            /**
             * Registry Statuses
             * @default []
             */
            registry_statuses: components["schemas"]["DomainStatus"][];
            /**
             * Nameservers
             * @default []
             */
            nameservers: components["schemas"]["HostResponse"][];
        };
        /**
         * DomainStatus
         * @enum {string}
         */
        DomainStatus: "ok" | "serverTransferProhibited" | "serverUpdateProhibited" | "serverDeleteProhibited" | "serverRenewProhibited" | "serverHold" | "transferPeriod" | "renewPeriod" | "redemptionPeriod" | "pendingUpdate" | "pendingTransfer" | "pendingRestore" | "pendingRenew" | "pendingDelete" | "pendingCreate" | "inactive" | "autoRenewPeriod" | "addPeriod" | "clientTransferProhibited" | "clientUpdateProhibited" | "clientDeleteProhibited" | "clientRenewProhibited" | "clientHold";
        /** DomainSuggestionBase */
        DomainSuggestionBase: {
            /**
             * Domain
             * @description The domain name suggestion
             */
            domain: string;
            /**
             * Score
             * @description The score of the domain
             */
            score: number;
        };
        /** DomainUpdate */
        DomainUpdate: {
            /**
             * Statuses
             * @description The new statuses of the domain
             */
            statuses?: components["schemas"]["DomainClientStatus"][] | null;
            /**
             * Nameservers
             * @description The new name servers for the domain
             */
            nameservers?: components["schemas"]["Nameserver"][] | null;
            /**
             * Contacts
             * @description The new contacts of the domain
             */
            contacts?: {
                [key: string]: TypeID<"contact">;
            } | null;
            /**
             * Auth Code
             * @description The new auth code for the domain
             */
            auth_code?: string | null;
        };
        /** DomainsRequest */
        DomainsRequest: {
            /** Domains */
            domains: string[];
        };
        /** EmailForward */
        EmailForward: {
            /**
             * Updated On
             * Format: date-time
             * @description The date/time the entry was last updated on
             */
            updated_on?: Date;
            /**
             * Created On
             * Format: date-time
             * @description The date/time the entry was created on
             */
            created_on?: Date;
            /**
             * Source Address
             * Format: email
             * @description The source email address to forward from
             */
            source_address: string;
            /**
             * Target Address
             * Format: email
             * @description The target email address to forward to
             */
            target_address: string;
            /**
             * @description Current status of the email forward rule
             * @default active
             */
            status: components["schemas"]["EmailForwardStatus"];
            /**
             * Email Forward Id
             * Format: typeid
             */
            email_forward_id?: TypeID<"email_forward">;
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
             * Source Address
             * @description The source email address to forward from
             */
            source_address?: string | null;
            /**
             * Target Address
             * @description The target email address to forward to
             */
            target_address?: string | null;
            /** @description Current status of the email forward rule */
            status?: components["schemas"]["EmailForwardStatus"] | null;
            /**
             * Email Forward Id
             * Format: typeid
             * @description Unique identifier for the email forward
             */
            email_forward_id: TypeID<"email_forward">;
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
             * Target Address
             * Format: email
             * @description The target email address to forward to
             */
            target_address: string;
            /**
             * @description Current status of the email forward rule
             * @default active
             */
            status: components["schemas"]["EmailForwardStatus"];
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
            /**
             * Target Address
             * @description The target email address to forward to
             */
            target_address?: string | null;
            /** @description Current status of the email forward rule */
            status?: components["schemas"]["EmailForwardStatus"] | null;
        };
        /**
         * EmailVerificationStatus
         * @enum {string}
         */
        EmailVerificationStatus: "verified" | "pending" | "canceled";
        /** ErrorResponse */
        ErrorResponse: {
            /** Error Type */
            error_type: string;
            /** Message */
            message?: string | null;
            /** Details */
            details?: string | null;
        };
        /**
         * GrantType
         * @enum {string}
         */
        GrantType: "client_credentials" | "password" | "refresh_token";
        /** RequestValidationError */
        HTTPValidationError: {
            /** Problem Title */
            title: string;
            /** Problem type */
            type: string;
            /** Status code */
            status: number;
            errors: components["schemas"]["ValidationError"][];
        };
        /** HostIpResponse */
        HostIpResponse: {
            /**
             * Address
             * Format: ipvanyaddress
             */
            address: string;
            type: components["schemas"]["IPAddressType"];
        };
        /** HostResponse */
        HostResponse: {
            /**
             * Hostname
             * @description The hostname of the associated nameserver
             */
            hostname: string;
            /**
             * Host Ips
             * @description The ip addresses of the nameserver
             */
            host_ips?: components["schemas"]["HostIpResponse"][];
        };
        /**
         * IPAddressType
         * @enum {string}
         */
        IPAddressType: "v4" | "v6";
        /** IpRestrictionCreate */
        IpRestrictionCreate: {
            /**
             * Organization Id
             * Format: typeid
             */
            organization_id?: TypeID<"organization">;
            /**
             * Ip Network
             * Format: ipvanynetwork
             * @description IP address or CIDR range for the restriction.
             */
            ip_network: string;
        };
        /** IpRestrictionResponse */
        IpRestrictionResponse: {
            /** Ip Restriction Id */
            ip_restriction_id: number;
            /**
             * Organization Id
             * Format: typeid
             */
            organization_id: TypeID<"organization">;
            /**
             * Ip Network
             * Format: ipvanynetwork
             */
            ip_network: string;
            /**
             * Created On
             * Format: date-time
             */
            created_on: Date;
            /** Last Used On */
            last_used_on?: Date | null;
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
             * Updated On
             * Format: date-time
             * @description The date/time the entry was last updated on
             */
            updated_on?: Date;
            /**
             * Created On
             * Format: date-time
             * @description The date/time the entry was created on
             */
            created_on?: Date;
            /**
             * Subject
             * @description The subject of the notification
             */
            subject: string;
            /**
             * Publish Date
             * Format: date-time
             * @description The date/time the notification is to be published
             */
            publish_date?: Date;
            /**
             * Type
             * @description The type of notification
             */
            type: string;
            /**
             * Source
             * @description Source of the notification
             */
            source: string;
            /**
             * Message
             * @description The message content of the notification
             */
            message: string;
            /**
             * Author
             * @description The user or system that created the notification
             */
            author: string;
            /**
             * Target
             * @description Target audience (broadcast, account, user)
             */
            target: string;
            /**
             * Notification Id
             * Format: typeid
             */
            notification_id?: TypeID<"notification">;
        };
        /** NotificationCreate */
        NotificationCreate: {
            /**
             * Subject
             * @description The subject of the notification
             */
            subject: string;
            /**
             * Publish Date
             * Format: date-time
             * @description The date/time the notification is to be published
             */
            publish_date?: Date;
            /**
             * Type
             * @description The type of notification
             */
            type: string;
            /**
             * Source
             * @description Source of the notification
             */
            source: string;
            /**
             * Message
             * @description The message content of the notification
             */
            message: string;
            /**
             * Author
             * @description The user or system that created the notification
             */
            author: string;
            /**
             * Target
             * @description Target audience (broadcast, account, user)
             */
            target: string;
        };
        /** NotificationSummary */
        NotificationSummary: {
            /**
             * Subject
             * @description The subject of the notification
             */
            subject: string;
            /**
             * Publish Date
             * Format: date-time
             * @description The date/time the notification is to be published
             */
            publish_date?: Date;
            /**
             * Type
             * @description The type of notification
             */
            type: string;
            /**
             * Source
             * @description Source of the notification
             */
            source: string;
            /**
             * Message
             * @description The message content of the notification
             */
            message: string;
            /**
             * Author
             * @description The user or system that created the notification
             */
            author: string;
            /**
             * Target
             * @description Target audience (broadcast, account, user)
             */
            target: string;
            /**
             * Notification Id
             * Format: typeid
             */
            notification_id?: TypeID<"notification">;
        };
        /** NotificationUpdate */
        NotificationUpdate: {
            /**
             * Subject
             * @description The subject of the notification
             */
            subject: string;
            /**
             * Publish Date
             * Format: date-time
             * @description The date/time the notification is to be published
             */
            publish_date?: Date;
            /**
             * Type
             * @description The type of notification
             */
            type: string;
            /**
             * Source
             * @description Source of the notification
             */
            source: string;
            /**
             * Message
             * @description The message content of the notification
             */
            message: string;
            /**
             * Author
             * @description The user or system that created the notification
             */
            author: string;
            /**
             * Target
             * @description Target audience (broadcast, account, user)
             */
            target: string;
        };
        /** Organization */
        Organization: {
            /**
             * Deleted On
             * @description The date/time the entry was deleted on
             */
            deleted_on?: Date | null;
            /**
             * Created On
             * Format: date-time
             * @description The date/time the entry was created on
             */
            created_on?: Date;
            /**
             * Organization Name
             * @description Name of the organization.
             */
            organization_name: string;
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
             * City
             * @description City of the organization's address.
             */
            city?: string | null;
            /**
             * State Or Province
             * @description State or province of the organization's address.
             */
            state_or_province?: string | null;
            /**
             * Postal Code
             * @description Postal code of the organization's address.
             */
            postal_code?: string | null;
            /**
             * Country Code
             * @description ISO 3166-1 alpha-2 country code.
             */
            country_code?: string | null;
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
             * Business Number
             * @description Government issued business identifier for the organization issued.
             */
            business_number?: string | null;
            /**
             * Tax Rate
             * @description Tax rate for the organization.
             */
            tax_rate?: string | null;
            /** @description The currency used by the organization. */
            currency?: components["schemas"]["Currency"] | null;
            /**
             * Default Locale
             * @description Default locale for the organization.
             */
            default_locale?: string | null;
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
             * @description Status of the organization.
             * @default active
             */
            status: components["schemas"]["OrganizationStatus"];
            /**
             * Users
             * @default []
             */
            users: components["schemas"]["User"][];
            /**
             * Attributes
             * @default []
             */
            attributes: components["schemas"]["OrganizationAttribute"][];
        };
        /** OrganizationAttribute */
        OrganizationAttribute: {
            /**
             * Private
             * @description When true, the attribute is private and not visible to users.
             * @default false
             */
            private: boolean;
            /**
             * Key
             * @description Key of the attribute.
             */
            key: string;
            /** @description Value of the attribute. */
            value?: components["schemas"]["JsonValue"] | null;
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
            /**
             * Created On
             * Format: date-time
             * @description The date/time the entry was created on
             */
            created_on?: Date;
            /** Organization Attribute Id */
            organization_attribute_id: number;
        };
        /** OrganizationAttributeCreate */
        OrganizationAttributeCreate: {
            /**
             * Private
             * @description When true, the attribute is private and not visible to users.
             * @default false
             */
            private: boolean;
            /**
             * Key
             * @description Key of the attribute.
             */
            key: string;
            /** @description Value of the attribute. */
            value?: components["schemas"]["JsonValue"] | null;
            /**
             * Protected
             * @description When true, the attribute is protected and cannot be modified by users.
             * @default false
             */
            protected: boolean;
        };
        /** OrganizationAttributeResponse */
        OrganizationAttributeResponse: {
            /**
             * Key
             * @description Key of the attribute.
             */
            key: string;
            /** @description Value of the attribute. */
            value?: components["schemas"]["JsonValue"] | null;
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
            /**
             * Created On
             * Format: date-time
             * @description The date/time the entry was created on
             */
            created_on?: Date;
            /** Organization Attribute Id */
            organization_attribute_id: number;
        };
        /** OrganizationAttributeUpdate */
        OrganizationAttributeUpdate: {
            /**
             * Private
             * @description When true, the attribute is private and not visible to users.
             * @default false
             */
            private: boolean;
            /**
             * Key
             * @description Key of the attribute.
             */
            key: string;
            /** @description Value of the attribute. */
            value?: components["schemas"]["JsonValue"] | null;
            /**
             * Protected
             * @description When true, the attribute is protected and cannot be modified by users.
             * @default false
             */
            protected: boolean;
        };
        /** OrganizationCreate */
        OrganizationCreate: {
            /**
             * Organization Name
             * @description Name of the organization.
             */
            organization_name: string;
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
             * City
             * @description City of the organization's address.
             */
            city?: string | null;
            /**
             * State Or Province
             * @description State or province of the organization's address.
             */
            state_or_province?: string | null;
            /**
             * Postal Code
             * @description Postal code of the organization's address.
             */
            postal_code?: string | null;
            /**
             * Country Code
             * @description ISO 3166-1 alpha-2 country code.
             */
            country_code?: string | null;
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
             * Business Number
             * @description Government issued business identifier for the organization issued.
             */
            business_number?: string | null;
            /**
             * Tax Rate
             * @description Tax rate for the organization.
             */
            tax_rate?: number | string | null;
            /** @description The currency used by the organization. */
            currency?: components["schemas"]["Currency"] | null;
            /**
             * Default Locale
             * @description Default locale for the organization.
             */
            default_locale?: string | null;
            /**
             * Parent Organization Id
             * @description ID of the parent organization.
             */
            parent_organization_id?: TypeID<"organization"> | null;
            /**
             * Users
             * @description List of users that needs to be created with the organization.
             * @default []
             */
            users: components["schemas"]["UserCreate"][];
            /**
             * Attributes
             * @description List of attributes for the organization.
             * @default []
             */
            attributes: components["schemas"]["OrganizationAttributeCreate"][];
        };
        /** OrganizationCredential */
        OrganizationCredential: {
            /**
             * Api Key Name
             * @description Name of the organization credential. Only a-z, A-Z, 0-9, underscore, and hyphen are allowed.
             */
            api_key_name?: string | null;
            /**
             * Api Key Description
             * @description Description of the organization credential.
             */
            api_key_description?: string | null;
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
             * Created On
             * Format: date-time
             * @description The date/time the entry was created on
             */
            created_on?: Date;
            /**
             * Organization Id
             * Format: typeid
             * @default None
             */
            organization_id: TypeID<"organization">;
            /**
             * Api Key Id
             * Format: typeid
             * @description Unique identifier of the organization credential.
             */
            api_key_id: TypeID<"api_key">;
            /** @description The status of the organization credential. */
            readonly status: components["schemas"]["OrganizationCredentialStatus"];
        };
        /** OrganizationCredentialCreated */
        OrganizationCredentialCreated: {
            /**
             * Api Key Name
             * @description Name of the organization credential. Only a-z, A-Z, 0-9, underscore, and hyphen are allowed.
             */
            api_key_name?: string | null;
            /**
             * Api Key Description
             * @description Description of the organization credential.
             */
            api_key_description?: string | null;
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
             * Created On
             * Format: date-time
             * @description The date/time the entry was created on
             */
            created_on?: Date;
            /**
             * Client Id
             * Format: typeid
             * @default None
             */
            client_id: TypeID<"organization">;
            /**
             * Api Key
             * Format: typeid
             * @description Unique identifier of the organization credential.
             */
            api_key: TypeID<"api_key">;
            /**
             * Client Secret
             * @description Plaintext secret to be hashed (not stored directly in the DB).
             */
            client_secret?: string | null;
            /** @description The status of the organization credential. */
            readonly status: components["schemas"]["OrganizationCredentialStatus"];
        };
        /** OrganizationCredentialExtra */
        OrganizationCredentialExtra: {
            /**
             * Api Key Name
             * @description Name of the organization credential. Only a-z, A-Z, 0-9, underscore, and hyphen are allowed.
             */
            api_key_name?: string | null;
            /**
             * Api Key Description
             * @description Description of the organization credential.
             */
            api_key_description?: string | null;
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
            /**
             * Token Type
             * @default Bearer
             */
            token_type: string;
            /** Expires In */
            expires_in: number;
        };
        /** OrganizationUpdate */
        OrganizationUpdate: {
            /**
             * Organization Name
             * @description Name of the organization.
             */
            organization_name?: string | null;
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
             * City
             * @description City of the organization's address.
             */
            city?: string | null;
            /**
             * State Or Province
             * @description State or province of the organization's address.
             */
            state_or_province?: string | null;
            /**
             * Postal Code
             * @description Postal code of the organization's address.
             */
            postal_code?: string | null;
            /** Country Code */
            country_code?: string | null;
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
             * Business Number
             * @description Government issued business identifier for the organization issued.
             */
            business_number?: string | null;
            /** @description The currency used by the organization. */
            currency?: components["schemas"]["Currency"] | null;
            /**
             * Default Locale
             * @description Default locale for the organization.
             */
            default_locale?: string | null;
        };
        /** PaginationMetadata */
        PaginationMetadata: {
            /** Total Pages */
            total_pages: number;
            /** Total Items */
            total_items: number;
            /** Current Page */
            current_page: number;
            /** Page Size */
            page_size: number;
            /** Has Next Page */
            has_next_page: boolean;
            /** Has Previous Page */
            has_previous_page: boolean;
        };
        /** Pagination[ContactSchema] */
        Pagination_ContactSchema_: {
            /** Results */
            results: components["schemas"]["ContactSchema"][];
            pagination: components["schemas"]["PaginationMetadata"];
        };
        /** Pagination[DnsZoneResponse] */
        Pagination_DnsZoneResponse_: {
            /** Results */
            results: components["schemas"]["DnsZoneResponse"][];
            pagination: components["schemas"]["PaginationMetadata"];
        };
        /** Pagination[DomainResponse] */
        Pagination_DomainResponse_: {
            /** Results */
            results: components["schemas"]["DomainResponse"][];
            pagination: components["schemas"]["PaginationMetadata"];
        };
        /** Pagination[EmailForward] */
        Pagination_EmailForward_: {
            /** Results */
            results: components["schemas"]["EmailForward"][];
            pagination: components["schemas"]["PaginationMetadata"];
        };
        /** Pagination[OrganizationCredential] */
        Pagination_OrganizationCredential_: {
            /** Results */
            results: components["schemas"]["OrganizationCredential"][];
            pagination: components["schemas"]["PaginationMetadata"];
        };
        /** Pagination[Organization] */
        Pagination_Organization_: {
            /** Results */
            results: components["schemas"]["Organization"][];
            pagination: components["schemas"]["PaginationMetadata"];
        };
        /** Pagination[UserNotificationSummary] */
        Pagination_UserNotificationSummary_: {
            /** Results */
            results: components["schemas"]["UserNotificationSummary"][];
            pagination: components["schemas"]["PaginationMetadata"];
        };
        /** Pagination[User] */
        Pagination_User_: {
            /** Results */
            results: components["schemas"]["User"][];
            pagination: components["schemas"]["PaginationMetadata"];
        };
        /**
         * Permission
         * @enum {string}
         */
        Permission: "acknowledge" | "bulk_create" | "bulk_delete" | "bulk_renew_expire" | "bulk_transfer_trade" | "bulk_update" | "create" | "delete" | "manage_api_keys" | "manage_billing" | "manage_cms_content" | "manage_contacts" | "manage_dns_zones" | "manage_domains" | "manage_email_forwards" | "manage_products" | "manage_reseller" | "manage_user_relations" | "manage_users" | "premium_reseller" | "renew_expire" | "sign_org_tos" | "transfer_trade" | "update" | "verify" | "view" | "view_audit_logs";
        /** PermissionSet */
        PermissionSet: {
            /**
             * Permissions
             * @default []
             */
            permissions: components["schemas"]["Permission"][];
        };
        /**
         * Relation
         * @enum {string}
         */
        Relation: "accepted_tos" | "admin" | "api_admin" | "billing_manager" | "client_api_key" | "cms_content_editor" | "contact_manager" | "domain_manager" | "email_forward_manager" | "member" | "organization_manager" | "owner" | "parent" | "product_manager" | "recipient" | "reseller_manager" | "self" | "special_relation";
        /** RelationSet */
        RelationSet: {
            /**
             * Relations
             * @default []
             */
            relations: components["schemas"]["Relation"][];
        };
        /**
         * RenewalMode
         * @enum {string}
         */
        RenewalMode: "renew" | "expire" | "delete";
        /** SignupCreate */
        SignupCreate: {
            /** @description User signup to platform. */
            user: components["schemas"]["UserCreate"];
            /** @description Organization signup. */
            organization: components["schemas"]["OrganizationCreate"];
            /** @description Optional terms of service acceptance. */
            terms_of_service?: components["schemas"]["TermsOfServiceAccept"] | null;
        };
        /** SpiceDbRelationshipUpdate */
        SpiceDbRelationshipUpdate: {
            /** Add */
            add?: components["schemas"]["Relation"][] | null;
            /** Remove */
            remove?: components["schemas"]["Relation"][] | null;
        };
        /** SuggestResponse */
        SuggestResponse: {
            /**
             * Domains
             * @default []
             */
            domains: components["schemas"]["DomainSuggestionBase"][];
        };
        /** TermsOfServiceAccept */
        TermsOfServiceAccept: {
            /** Accepted */
            accepted: boolean;
        };
        /** User */
        User: {
            /**
             * Deleted On
             * @description The date/time the entry was deleted on
             */
            deleted_on?: Date | null;
            /**
             * Updated On
             * Format: date-time
             * @description The date/time the entry was last updated on
             */
            updated_on?: Date;
            /**
             * Created On
             * Format: date-time
             * @description The date/time the entry was created on
             */
            created_on?: Date;
            /**
             * Username
             * @description The user's unique username
             */
            username: string;
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
             * Email
             * Format: email
             * @description The user's email address
             */
            email: string;
            /**
             * Phone
             * @description The user's phone number
             */
            phone?: string | null;
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
             * User Id
             * Format: typeid
             */
            user_id?: TypeID<"user">;
            readonly status: components["schemas"]["UserStatus"];
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
             * Username
             * @description The user's unique username
             */
            username: string;
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
             * Email
             * Format: email
             * @description The user's email address
             */
            email: string;
            /**
             * Phone
             * @description The user's phone number
             */
            phone?: string | null;
            /** Locale */
            locale: string;
            /**
             * Password
             * @description Plaintext password for hashing during creation
             */
            password: string;
        };
        /** UserNotification */
        UserNotification: {
            /**
             * Updated On
             * Format: date-time
             * @description The date/time the entry was last updated on
             */
            updated_on?: Date;
            /**
             * Created On
             * Format: date-time
             * @description The date/time the entry was created on
             */
            created_on?: Date;
            /**
             * User Notification Id
             * Format: typeid
             */
            user_notification_id?: TypeID<"user_notification">;
            /**
             * @description Whether the user has read the notification
             * @default unread
             */
            status: components["schemas"]["UserNotificationStatus"];
            /**
             * User Id
             * Format: typeid
             * @default None
             */
            user_id: TypeID<"user">;
            /**
             * Notification Id
             * Format: typeid
             * @description Unique identifier for the notification
             * @default None
             */
            notification_id: TypeID<"notification">;
            notification: components["schemas"]["Notification"];
        };
        /**
         * UserNotificationStatus
         * @enum {string}
         */
        UserNotificationStatus: "read" | "unread";
        /** UserNotificationSummary */
        UserNotificationSummary: {
            /**
             * User Notification Id
             * Format: typeid
             */
            user_notification_id?: TypeID<"user_notification">;
            /**
             * @description Whether the user has read the notification
             * @default unread
             */
            status: components["schemas"]["UserNotificationStatus"];
            notification: components["schemas"]["NotificationSummary"];
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
            /**
             * Token Type
             * @default Bearer
             */
            token_type: string;
            /** Expires In */
            expires_in: number;
            /** Refresh Token */
            refresh_token: string;
            /** Refresh Expires In */
            refresh_expires_in: number;
        };
        /** UserUpdate */
        UserUpdate: {
            /**
             * Username
             * @description The user's unique username
             */
            username?: string | null;
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
             * Email
             * @description The user's email address
             */
            email?: string | null;
            /**
             * Phone
             * @description The user's phone number
             */
            phone?: string | null;
            /**
             * Locale
             * @description The user's locale
             */
            locale?: string | null;
            /**
             * User Attributes
             * @description User attributes
             */
            user_attributes?: components["schemas"]["UserAttributeUpdate"][] | null;
        };
        /** UserVerificationApiResponse */
        UserVerificationApiResponse: {
            /**
             * Token
             * @description The token to verify the email address
             */
            token: string;
            /**
             * Updated On
             * Format: date-time
             * @description The date/time the entry was last updated on
             */
            updated_on?: Date;
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
             * Verified On
             * @description The date the verification was verified
             */
            verified_on?: Date | null;
            /**
             * Canceled On
             * @description The date the verification was cancelled
             */
            canceled_on?: Date | null;
            /**
             * User Verification Id
             * Format: typeid
             */
            user_verification_id?: TypeID<"user_verification">;
            /**
             * User Id
             * Format: typeid
             * @description The user's id
             * @default None
             */
            user_id: TypeID<"user">;
        };
        /** UserVerificationEmailResponse */
        UserVerificationEmailResponse: {
            /**
             * Updated On
             * Format: date-time
             * @description The date/time the entry was last updated on
             */
            updated_on?: Date;
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
             * Verified On
             * @description The date the verification was verified
             */
            verified_on?: Date | null;
            /**
             * Canceled On
             * @description The date the verification was cancelled
             */
            canceled_on?: Date | null;
            /**
             * User Verification Id
             * Format: typeid
             */
            user_verification_id?: TypeID<"user_verification">;
            /**
             * User Id
             * Format: typeid
             * @description The user's id
             * @default None
             */
            user_id: TypeID<"user">;
        };
        /** UserVerificationResponse */
        UserVerificationResponse: {
            /**
             * Updated On
             * Format: date-time
             * @description The date/time the entry was last updated on
             */
            updated_on?: Date;
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
             * Verified On
             * @description The date the verification was verified
             */
            verified_on?: Date | null;
            /**
             * Canceled On
             * @description The date the verification was cancelled
             */
            canceled_on?: Date | null;
            /**
             * User Verification Id
             * Format: typeid
             */
            user_verification_id?: TypeID<"user_verification">;
            /**
             * User Id
             * Format: typeid
             * @description The user's id
             * @default None
             */
            user_id: TypeID<"user">;
        };
        /** UserWithAttributes */
        UserWithAttributes: {
            /**
             * Deleted On
             * @description The date/time the entry was deleted on
             */
            deleted_on?: Date | null;
            /**
             * Updated On
             * Format: date-time
             * @description The date/time the entry was last updated on
             */
            updated_on?: Date;
            /**
             * Created On
             * Format: date-time
             * @description The date/time the entry was created on
             */
            created_on?: Date;
            /**
             * Username
             * @description The user's unique username
             */
            username: string;
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
             * Email
             * Format: email
             * @description The user's email address
             */
            email: string;
            /**
             * Phone
             * @description The user's phone number
             */
            phone?: string | null;
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
             * User Id
             * Format: typeid
             */
            user_id?: TypeID<"user">;
            /**
             * User Attributes
             * @default {}
             */
            user_attributes: {
                [key: string]: components["schemas"]["JsonValue"];
            };
            readonly status: components["schemas"]["UserStatus"];
        };
        /** UserWithRelationPermissions */
        UserWithRelationPermissions: {
            /**
             * Deleted On
             * @description The date/time the entry was deleted on
             */
            deleted_on?: Date | null;
            /**
             * Updated On
             * Format: date-time
             * @description The date/time the entry was last updated on
             */
            updated_on?: Date;
            /**
             * Created On
             * Format: date-time
             * @description The date/time the entry was created on
             */
            created_on?: Date;
            /**
             * Username
             * @description The user's unique username
             */
            username: string;
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
             * Email
             * Format: email
             * @description The user's email address
             */
            email: string;
            /**
             * Phone
             * @description The user's phone number
             */
            phone?: string | null;
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
             * User Id
             * Format: typeid
             */
            user_id?: TypeID<"user">;
            /**
             * User Attributes
             * @default {}
             */
            user_attributes: {
                [key: string]: components["schemas"]["JsonValue"];
            };
            /** Relations */
            relations?: components["schemas"]["Relation"][] | null;
            /** Permissions */
            permissions?: components["schemas"]["Permission"][] | null;
            readonly status: components["schemas"]["UserStatus"];
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
        /** Problem */
        Problem: {
            /** Problem Title */
            title: string;
            /** Problem type */
            type: string;
            /** Status code */
            status: number;
            /** Problem detail */
            detail: string | null;
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
    list_api_keys_v1_auth_client_credentials_get: {
        parameters: {
            query?: {
                /** @description Optional status to filter the results */
                status?: components["schemas"]["OrganizationCredentialStatus"] | null;
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
    bulk_dns_check_domain_availability_v1_availability_dns_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["DomainsRequest"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["DomainAvailabilityData"][];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    bulk_rdap_check_domain_availability_v1_availability_rdap_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["DomainsRequest"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["DomainAvailabilityData"][];
                };
            };
            /** @description Validation Error */
            422: {
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
    update_zone_v1_dns__zone_name__rrsets_put: {
        parameters: {
            query?: never;
            header?: never;
            path: {
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
    enable_dnssec_v1_dns__zone_name__dnssec_enable_post: {
        parameters: {
            query?: never;
            header?: never;
            path: {
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
    disable_dnssec_v1_dns__zone_name__dnssec_disable_post: {
        parameters: {
            query?: never;
            header?: never;
            path: {
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
    list_email_forwards_v1_email_forwards_get: {
        parameters: {
            query?: {
                /** @description Optional status to filter the results */
                status?: components["schemas"]["EmailForwardStatus"] | null;
                /** @description Optional source address to filter the results */
                source_address?: string | null;
                /** @description Optional target address to filter the results */
                target_address?: string | null;
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
    list_notifications_v1_notifications_get: {
        parameters: {
            query: {
                user_id: TypeID<"user">;
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
                    "application/json": components["schemas"]["Pagination_Organization_"];
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
    list_users_v1_organizations_users_get: {
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
                    "application/json": components["schemas"]["Pagination_User_"];
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
    not_found_v1_rdap_host__name__get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                name: string;
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
    not_found_v1_rdap_contact__name__get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                name: string;
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
    not_found_v1_rdap_domain__name__get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                name: string;
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
    redirect_verify_user_v1_users_verify_get: {
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
    get_verification_status_me_v1_users_me_verification_get: {
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
                    "application/json": components["schemas"]["UserVerificationResponse"];
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
        };
    };
    update_verification_me_v1_users_me_verification_put: {
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
    create_verification_me_v1_users_me_verification_post: {
        parameters: {
            query: {
                type: components["schemas"]["VerificationType"];
            };
            header?: never;
            path?: never;
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
                    "application/json": components["schemas"]["UserVerificationEmailResponse"] | components["schemas"]["UserVerificationApiResponse"];
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
    cancel_verification_me_v1_users_me_verification_delete: {
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
    get_verification_status_v1_users__user_id__verification_get: {
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
                    "application/json": components["schemas"]["UserVerificationResponse"];
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
    update_verification_v1_users__user_id__verification_put: {
        parameters: {
            query: {
                token: string;
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
    create_verification_v1_users__user_id__verification_post: {
        parameters: {
            query: {
                type: components["schemas"]["VerificationType"];
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
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UserVerificationEmailResponse"] | components["schemas"]["UserVerificationApiResponse"];
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
    cancel_verification_v1_users__user_id__verification_delete: {
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
            /** @description Validation Error */
            422: {
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
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_domains_v1_domains_get: {
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
                    "application/json": components["schemas"]["Pagination_DomainResponse_"];
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
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["DomainResponse"];
                };
            };
            /** @description Validation Error */
            422: {
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
    restore_domain_v1_domains__domain_name__restore_post: {
        parameters: {
            query: {
                domain_reference: TypeID<"domain"> | string;
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
    transfer_domain_v1_domains__domain_name__transfer_get: {
        parameters: {
            query: {
                domain_reference: TypeID<"domain"> | string;
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
            /** @description Validation Error */
            422: {
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
            /** @description Validation Error */
            422: {
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
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_contacts_v1_contacts_get: {
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
                    "application/json": components["schemas"]["Pagination_ContactSchema_"];
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
    update_contact_v1_contacts__contact_id__put: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                contact_id: TypeID<"contact">;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ContactUpdate"];
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
            /** @description Validation Error */
            422: {
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
    email_verify_contact_v1_contacts__contact_id__verify_get: {
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
    suggest_domains_v1_domain_search_suggest_get: {
        parameters: {
            query: {
                /** @description The primary keyword or phrase for the domain search */
                query: string;
                /** @description The TLDs to include in the search */
                tlds?: string[] | null;
                /** @description The maximum number of domain suggestions to return */
                limit?: number | null;
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
                    "application/json": components["schemas"]["SuggestResponse"];
                };
            };
            /** @description Validation Error */
            422: {
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
