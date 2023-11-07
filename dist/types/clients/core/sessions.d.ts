/**
 * Client class for interacting with Zendesk's Sessions API.
 * @see {@link https://developer.zendesk.com/api-reference/ticketing/account-configuration/sessions/}
 */
export class Sessions extends Client {
    constructor(options: any);
    jsonAPINames: string[];
    /**
     * List all sessions.
     * @returns {Promise<object[]>} Array of sessions.
     * @async
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/account-configuration/sessions/#list-sessions}
     * @example
     * const sessions = await client.sessions.get();
     */
    list(): Promise<object[]>;
    /**
     * List sessions by user ID.
     * @param {number} userId - The ID of the user.
     * @returns {Promise<object[]>} Array of sessions.
     * @async
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/account-configuration/sessions/#list-sessions}
     * @example
     * const sessions = await client.sessions.getByUserId(12345);
     */
    getByUserId(userId: number): Promise<object[]>;
    /**
     * Retrieve a specific session by user ID and session ID.
     * @param {number} userId - The ID of the user.
     * @param {number} sessionId - The ID of the session.
     * @returns {Promise<object>} Session details.
     * @async
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/account-configuration/sessions/#show-session}
     * @example
     * const session = await client.sessions.getByUserIdBySessionId(12345, 67890);
     */
    getByUserIdBySessionId(userId: number, sessionId: number): Promise<object>;
    /**
     * Retrieve details of the currently authenticated session.
     * @returns {Promise<object>} Session details.
     * @async
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/account-configuration/sessions/#show-the-currently-authenticated-session}
     * @example
     * const session = await client.sessions.getMyAuthenticatedSession();
     */
    getMyAuthenticatedSession(): Promise<object>;
    /**
     * Delete a specific session by user ID and session ID.
     * @param {number} userId - The ID of the user.
     * @param {number} sessionId - The ID of the session.
     * @returns {Promise<void>}
     * @async
     * @throws Will throw an error if the request fails.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/account-configuration/sessions/#delete-session}
     * @example
     * await client.sessions.deleteByUserIdBySessionId(12345, 67890);
     */
    deleteByUserIdBySessionId(userId: number, sessionId: number): Promise<void>;
    /**
     * Delete all sessions for a specific user by user ID.
     * @param {number} userId - The ID of the user.
     * @returns {Promise<void>}
     * @async
     * @throws Will throw an error if the request fails.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/account-configuration/sessions/#bulk-delete-sessions}
     * @example
     * await client.sessions.bulkDeleteByUserId(12345);
     */
    bulkDeleteByUserId(userId: number): Promise<void>;
    /**
     * Logs out the current authenticated user.
     * @returns {Promise<void>}
     * @async
     * @throws Will throw an error if the request fails.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/account-configuration/sessions/#delete-the-authenticated-session}
     * @example
     * await client.sessions.logMeOut();
     */
    logMeOut(): Promise<void>;
}
import { Client } from "../client";
