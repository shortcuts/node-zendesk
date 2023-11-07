/**
 * The AccountSettings class provides methods for interacting with account settings in the Zendesk JSON API.
 * {@link https://developer.zendesk.com/api-reference/ticketing/account-configuration/account_settings/ | See the Zendesk API documentation for more details}.
 * @augments Client
 */
export class AccountSettings extends Client {
    constructor(options: any);
    jsonAPINames: string[];
    /**
     * Retrieves the account settings.
     * @returns {Promise<object>} A promise that resolves to the account settings.
     * {@link https://developer.zendesk.com/api-reference/ticketing/account-configuration/account_settings/#show-settings | See the Zendesk API documentation for more details}.
     * @async
     * @example
     * const settings = await client.accountsettings.show();
     */
    show(): Promise<object>;
    /**
     * Updates the account settings.
     * @param {object} settings - The settings to update.
     * @returns {Promise<object>} A promise that resolves to the updated account settings.
     * {@link https://developer.zendesk.com/api-reference/ticketing/account-configuration/account_settings/#update-account-settings | See the Zendesk API documentation for more details}.
     * @async
     * @example
     * const settings = await client.accountsettings.update({ "settings": { "active_features": { "customer_satisfaction": false }}});
     */
    update(settings: object): Promise<object>;
}
import { Client } from "../client";
