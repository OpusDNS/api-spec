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
    "/v1/organizations/roles/{user_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List User Roles */
        get: operations["list_user_roles_v1_organizations_roles__user_id__get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /** Update User Relations */
        patch: operations["update_user_relations_v1_organizations_roles__user_id__patch"];
        trace?: never;
    };
    "/v1/organizations/roles/{organization_id}/{user_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List User Roles For Org */
        get: operations["list_user_roles_for_org_v1_organizations_roles__organization_id___user_id__get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /** Update User Org Relations */
        patch: operations["update_user_org_relations_v1_organizations_roles__organization_id___user_id__patch"];
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
    "/v1/users/roles": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List Roles */
        get: operations["list_roles_v1_users_roles_get"];
        put?: never;
        post?: never;
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
    "/v1/domains/{domain_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Domain */
        get: operations["get_domain_v1_domains__domain_id__get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/domains/{domain}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /** Delete Domain */
        delete: operations["delete_domain_v1_domains__domain__delete"];
        options?: never;
        head?: never;
        /** Update Domain */
        patch: operations["update_domain_v1_domains__domain__patch"];
        trace?: never;
    };
    "/v1/domains/{domain_name}/renew": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Renew Domain */
        post: operations["renew_domain_v1_domains__domain_name__renew_post"];
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
    "/v1/domains/{domain_name}/push": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Push Domain */
        post: operations["push_domain_v1_domains__domain_name__push_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/domains/{domain_name}/dnssec": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Dnssec */
        get: operations["get_dnssec_v1_domains__domain_name__dnssec_get"];
        /** Create Or Update Dnssec */
        put: operations["create_or_update_dnssec_v1_domains__domain_name__dnssec_put"];
        post?: never;
        /** Delete Dnssec */
        delete: operations["delete_dnssec_v1_domains__domain_name__dnssec_delete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/domains/system-status": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get System Status */
        get: operations["get_system_status_v1_domains_system_status_get"];
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
        };
        /**
         * DomainAvailabilityStatus
         * @enum {string}
         */
        DomainAvailabilityStatus: "available" | "unavailable" | "error";
        /**
         * DomainContactType
         * @enum {string}
         */
        DomainContactType: "registrant" | "admin" | "tech" | "billing";
        /** DomainCreate */
        DomainCreate: {
            /**
             * Domain
             * @description The domain to be created
             */
            domain: string;
            /** @description How long the domain should be registered for */
            period: components["schemas"]["DomainPeriod"];
            /**
             * Registrant Contact
             * Format: typeid
             * @description The contact id of the registrant
             */
            registrant_contact: TypeID<"contact">;
            /**
             * Contacts
             * @description The contacts of the domain
             */
            contacts: {
                [key: string]: TypeID<"contact">;
            };
            /**
             * Name Servers
             * @description The name servers for the domain
             */
            name_servers?: components["schemas"]["NameServer"][] | null;
            /** @description The renewal mode of the domain */
            renewal_mode?: components["schemas"]["RenewalMode"];
        };
        /** DomainModel */
        DomainModel: {
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
             * Sld
             * @description The subdomain of the domain
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
             * Expires On
             * @description When the domain expires
             */
            expires_on?: Date | null;
            /**
             * Created Registry
             * @description When the domain was registered
             */
            created_registry?: Date | null;
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
             * Registrant Contact Id
             * @description The contact id of the registrant
             */
            registrant_contact_id?: TypeID<"contact"> | null;
            /**
             * Admin Contact Id
             * @description The contact id of the admin
             */
            admin_contact_id?: TypeID<"contact"> | null;
            /**
             * Tech Contact Id
             * @description The contact id of the tech
             */
            tech_contact_id?: TypeID<"contact"> | null;
            /**
             * Billing Contact Id
             * @description The contact id of the billing
             */
            billing_contact_id?: TypeID<"contact"> | null;
            /**
             * Name Servers
             * @description The name servers for the domain
             */
            name_servers?: components["schemas"]["NameServer"][] | null;
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
        JsonValue: unknown;
        /** NameServer */
        NameServer: {
            /**
             * Name Server
             * @description The name server of the domain
             */
            name_server: string;
            /**
             * Ip Address
             * Format: ipvanyaddress
             * @description The ip address of the name server
             */
            ip_address: string;
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
         * Relation
         * @enum {string}
         */
        Relation: "accepted_tos" | "admin" | "api_admin" | "billing_manager" | "client_api_key" | "cms_content_editor" | "domain_manager" | "email_forward_manager" | "member" | "organization_manager" | "owner" | "parent" | "product_manager" | "recipient" | "reseller_manager" | "self" | "special_relation";
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
        /** SpiceDbRelationSet */
        SpiceDbRelationSet: {
            /**
             * Relation Set
             * @default []
             */
            relation_set: components["schemas"]["Relation"][];
        };
        /** SpiceDbRelationshipUpdate */
        SpiceDbRelationshipUpdate: {
            add: components["schemas"]["SpiceDbRelationSet"];
            remove: components["schemas"]["SpiceDbRelationSet"];
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
            /**
             * @description The user's status
             * @default active
             */
            status: components["schemas"]["UserStatus"];
            /**
             * Locale
             * @description The locale
             */
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
            /**
             * @description The user's status
             * @default active
             */
            status: components["schemas"]["UserStatus"];
            /**
             * Locale
             * @description The locale
             */
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
            /** @description The user's status */
            status?: components["schemas"]["UserStatus"] | null;
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
            /**
             * @description The user's status
             * @default active
             */
            status: components["schemas"]["UserStatus"];
            /**
             * Locale
             * @description The locale
             */
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
                user_id?: TypeID<"user"> | null;
                organization_id?: TypeID<"organization"> | null;
                api_key_id?: TypeID<"api_key"> | null;
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
            query?: {
                user_id?: TypeID<"user"> | null;
                organization_id?: TypeID<"organization"> | null;
                api_key_id?: TypeID<"api_key"> | null;
            };
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
            query?: {
                user_id?: TypeID<"user"> | null;
                organization_id?: TypeID<"organization"> | null;
            };
            header?: never;
            path: {
                api_key_id: TypeID<"api_key"> | null;
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
            query?: {
                user_id?: TypeID<"user"> | null;
                organization_id?: TypeID<"organization"> | null;
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
            query?: {
                user_id?: TypeID<"user"> | null;
                organization_id?: TypeID<"organization"> | null;
            };
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
            query?: {
                user_id?: TypeID<"user"> | null;
                organization_id?: TypeID<"organization"> | null;
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
    get_attributes_v1_organizations_attributes__organization_id__get: {
        parameters: {
            query?: {
                /** @description Optional list of attribute keys to filter */
                keys?: string[] | null;
                user_id?: TypeID<"user"> | null;
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
            query?: {
                user_id?: TypeID<"user"> | null;
            };
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
                user_id?: TypeID<"user"> | null;
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
                user_id?: TypeID<"user"> | null;
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
            query?: {
                user_id?: TypeID<"user"> | null;
                organization_id?: TypeID<"organization"> | null;
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
    get_organization_v1_organizations__organization_id__get: {
        parameters: {
            query?: {
                user_id?: TypeID<"user"> | null;
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
            query?: {
                user_id?: TypeID<"user"> | null;
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
            query?: {
                user_id?: TypeID<"user"> | null;
            };
            header?: never;
            path: {
                organization_id: TypeID<"organization"> | null;
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
    list_user_roles_v1_organizations_roles__user_id__get: {
        parameters: {
            query?: {
                organization_id?: TypeID<"organization"> | null;
            };
            header?: never;
            path: {
                user_id: TypeID<"user"> | null;
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
    update_user_relations_v1_organizations_roles__user_id__patch: {
        parameters: {
            query?: {
                organization_id?: TypeID<"organization"> | null;
            };
            header?: never;
            path: {
                user_id: TypeID<"user"> | null;
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
    list_user_roles_for_org_v1_organizations_roles__organization_id___user_id__get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                organization_id: TypeID<"organization"> | null;
                user_id: TypeID<"user"> | null;
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
    update_user_org_relations_v1_organizations_roles__organization_id___user_id__patch: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                organization_id: TypeID<"organization"> | null;
                user_id: TypeID<"user"> | null;
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
    not_found_v1_rdap_host__name__get: {
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
    not_found_v1_rdap_contact__name__get: {
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
    not_found_v1_rdap_domain__name__get: {
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
    create_user_v1_users_post: {
        parameters: {
            query?: {
                user_id?: TypeID<"user"> | null;
                organization_id?: TypeID<"organization"> | null;
            };
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
    list_roles_v1_users_roles_get: {
        parameters: {
            query?: {
                user_id?: TypeID<"user"> | null;
                organization_id?: TypeID<"organization"> | null;
                api_key_id?: TypeID<"api_key"> | null;
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
    get_current_user_v1_users_me_get: {
        parameters: {
            query?: {
                attributes?: string[] | null;
                user_id?: TypeID<"user"> | null;
                organization_id?: TypeID<"organization"> | null;
                api_key_id?: TypeID<"api_key"> | null;
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
            query?: {
                user_id?: TypeID<"user"> | null;
                organization_id?: TypeID<"organization"> | null;
                api_key_id?: TypeID<"api_key"> | null;
            };
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
                organization_id?: TypeID<"organization"> | null;
            };
            header?: never;
            path: {
                user_id: TypeID<"user"> | null;
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
            query?: {
                organization_id?: TypeID<"organization"> | null;
            };
            header?: never;
            path: {
                user_id: TypeID<"user"> | null;
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
            query?: {
                organization_id?: TypeID<"organization"> | null;
            };
            header?: never;
            path: {
                user_id: TypeID<"user"> | null;
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
                    "application/json": unknown;
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
                    "application/json": components["schemas"]["DomainModel"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_domain_v1_domains__domain_id__get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                domain_id: TypeID<"domain">;
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
                    "application/json": components["schemas"]["DomainModel"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    delete_domain_v1_domains__domain__delete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                domain: string;
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
    update_domain_v1_domains__domain__patch: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                domain: string;
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
    renew_domain_v1_domains__domain_name__renew_post: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                domain_name: string;
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
            query?: never;
            header?: never;
            path: {
                domain_name: string;
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
    transfer_domain_v1_domains__domain_name__transfer_get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                domain_name: string;
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
    push_domain_v1_domains__domain_name__push_post: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                domain_name: string;
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
    get_dnssec_v1_domains__domain_name__dnssec_get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                domain_name: string;
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
    create_or_update_dnssec_v1_domains__domain_name__dnssec_put: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                domain_name: string;
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
    delete_dnssec_v1_domains__domain_name__dnssec_delete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                domain_name: string;
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
    get_system_status_v1_domains_system_status_get: {
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
