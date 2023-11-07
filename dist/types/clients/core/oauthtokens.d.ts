/**
 * Represents a client for Zendesk OAuth Tokens API.
 * @see {@link https://developer.zendesk.com/api-reference/ticketing/oauth/oauth_tokens/}
 */
export class OauthTokens extends Client {
    constructor(options: any);
    jsonAPINames: string[];
    /**
     * Retrieves a specific OAuth token by ID.
     * @param {number|string} id - The ID of the OAuth token or "current" for the currently authenticated token.
     * @returns {Promise<object>} The OAuth token details.
     * @async
     * @throws {Error} Throws an error if the request fails.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/oauth/oauth_tokens/#show-token}
     * @example const tokenDetails = await client.oauthtokens.show(1234);
     */
    show(id: number | string): Promise<object>;
    /**
     * Retrieves the details of the currently authenticated OAuth token.
     * @returns {Promise<object>} The details of the currently authenticated OAuth token.
     * @async
     * @throws {Error} Throws an error if the request fails.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/oauth/oauth_tokens/#show-token}
     * @example const currentTokenDetails = await client.oauthtokens.current();
     */
    current(): Promise<object>;
    /**
     * Lists all available OAuth tokens.
     * @returns {Promise<Array>} A list of OAuth tokens.
     * @async
     * @throws {Error} Throws an error if the request fails.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/oauth/oauth_tokens/#list-tokens}
     * @example const tokensList = await client.oauthtokens.list();
     */
    list(): Promise<any[]>;
    /**
     * Revokes a specific OAuth token by ID.
     * @param {number} id - The ID of the OAuth token.
     * @returns {Promise<void>}
     * @async
     * @throws {Error} Throws an error if the request fails.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/oauth/oauth_tokens/#revoke-token}
     * @example await client.oauthtokens.revoke(1234);
     */
    revoke(id: number): Promise<void>;
    /**
     * Creates a new OAuth token with the provided details.
     * @param {object} token - The details of the token to be created. Must include client_id and scopes.
     * @returns {Promise<object>} The details of the created OAuth token.
     * @async
     * @throws {Error} Throws an error if the request fails.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/oauth/oauth_tokens/#create-token}
     * @example const createdToken = await client.oauthtokens.create({client_id: 1234, scopes: ["read", "write"]});
     */
    create(token: object): Promise<object>;
}
import { Client } from "../client";
