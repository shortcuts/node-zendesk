/**
 * @class
 * @description Represents the Locales endpoint of the Zendesk REST API wrapper.
 * @see {@link https://developer.zendesk.com/api-reference/ticketing/account-configuration/locales/}
 */
export class Locales extends Client {
    constructor(options: any);
    jsonAPINames: string[];
    /**
     * Lists all the translation locales available for the account.
     * @returns {Promise<object[]>} List of locales.
     * @async
     * @throws {Error} Throws an error if the API request fails.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/account-configuration/locales/#list-locales}
     * @example
     * const client = createClient({...});
     * const locales = await client.locales.list();
     */
    list(): Promise<object[]>;
    /**
     * Retrieves information about a specific locale based on the localeID.
     * @param {number|string} localeID - The ID or the BCP-47 code of the locale (e.g., 'en-US', 'es-419').
     * @returns {Promise<object>} Details of the specified locale.
     * @async
     * @throws {Error} Throws an error if the API request fails.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/account-configuration/locales/#show-locale}
     * @example
     * const client = createClient({...});
     * const locale = await client.locales.show('en-US');
     */
    show(localeID: number | string): Promise<object>;
    /**
     * Retrieves the locale information of the currently logged-in user.
     * @returns {Promise<object>} Details of the current user's locale.
     * @async
     * @throws {Error} Throws an error if the API request fails.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/account-configuration/locales/#show-current-locale}
     * @example
     * const client = createClient({...});
     * const currentLocale = await client.locales.showCurrent();
     */
    showCurrent(): Promise<object>;
    /**
     * Alias for showCurrent. Retrieves the locale information of the currently logged-in user.
     * @returns {Promise<object>} Details of the current user's locale.
     * @async
     * @throws {Error} Throws an error if the API request fails.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/account-configuration/locales/#show-current-locale}
     * @example
     * const client = createClient({...});
     * const currentLocale = await client.locales.current();
     */
    current(): Promise<object>;
    /**
     * Lists the translation locales that have been localized for agents on a specific account.
     * @returns {Promise<object[]>} List of locales available for agents.
     * @async
     * @throws {Error} Throws an error if the API request fails.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/account-configuration/locales/#list-locales-for-agent}
     * @example
     * const client = createClient({...});
     * const agentLocales = await client.locales.listForAgent();
     */
    listForAgent(): Promise<object[]>;
    /**
     * Lists the translation locales that are available to all accounts.
     * @returns {Promise<object[]>} List of public locales available to all accounts.
     * @async
     * @throws {Error} Throws an error if the API request fails.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/account-configuration/locales/#list-available-public-locales}
     * @example
     * const client = createClient({...});
     * const publicLocales = await client.locales.listPublicLocales();
     */
    listPublicLocales(): Promise<object[]>;
    /**
     * Detects the best language/locale for the user based on provided available locales.
     * @param {string[]} availableLocales - Array of available locales e.g., ['es', 'ja', 'en-uk'].
     * @returns {Promise<object>} Best detected locale for the user.
     * @async
     * @throws {Error} Throws an error if the API request fails.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/account-configuration/locales/#detect-best-language-for-user}
     * @example
     * const client = createClient({...});
     * const bestLocale = await client.locales.detectBestLocale(['es', 'ja', 'en-uk']);
     */
    detectBestLocale(availableLocales: string[]): Promise<object>;
}
import { Client } from "../client";
