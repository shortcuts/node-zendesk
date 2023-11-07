/**
 * Client for interacting with the Zendesk User Identities API.
 * @see {@link https://developer.zendesk.com/api-reference/ticketing/users/user_identities/}
 */
export class UserIdentities extends Client {
    constructor(options: any);
    jsonAPINames: string[];
    /**
     * List all identities for a given user.
     * @param {number} userId - The ID of the user.
     * @returns {Promise<object[]>} A list of user identities.
     * @async
     * @throws {Error} Throws an error if the request fails.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/users/user_identities/#list-identities}
     * @example const identities = await client.useridentities.list(12345);
     */
    list(userId: number): Promise<object[]>;
    /**
     * Show a specific identity for a given user.
     * @param {number} userId - The ID of the user.
     * @param {number} userIdentityId - The ID of the user identity to show.
     * @returns {Promise<object>} The user identity details.
     * @async
     * @throws {Error} Throws an error if the request fails.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/users/user_identities/#show-identity}
     * @example const identity = await client.useridentities.show(12345, 67890);
     */
    show(userId: number, userIdentityId: number): Promise<object>;
    /**
     * Create a new identity for a given user.
     * @param {number} userId - The ID of the user.
     * @param {object} userIdentity - The user identity details to create.
     * @returns {Promise<object>} The created user identity.
     * @async
     * @throws {Error} Throws an error if the request fails.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/users/user_identities/#create-identity}
     * @example const newIdentity = await client.useridentities.create(12345, {type: 'email', value: 'test@example.com'});
     */
    create(userId: number, userIdentity: object): Promise<object>;
    /**
     * Update a specific identity for a given user.
     * @param {number} userId - The ID of the user.
     * @param {number} userIdentityId - The ID of the user identity to update.
     * @param {object} identity - The updated identity details.
     * @returns {Promise<object>} The updated user identity.
     * @async
     * @throws {Error} Throws an error if the request fails.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/users/user_identities/#update-identity}
     * @example const updatedIdentity = await client.useridentities.update(12345, 67890, {verified: true});
     */
    update(userId: number, userIdentityId: number, identity: object): Promise<object>;
    /**
     * Make a specific identity the primary identity for a given user.
     * @param {number} userId - The ID of the user.
     * @param {number} userIdentityId - The ID of the user identity to make primary.
     * @returns {Promise<object>} The updated user identity.
     * @async
     * @throws {Error} Throws an error if the request fails.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/users/user_identities/#make-identity-primary}
     * @example await client.useridentities.makePrimary(12345, 67890);
     */
    makePrimary(userId: number, userIdentityId: number): Promise<object>;
    /**
     * Verify a specific identity for a given user.
     * @param {number} userId - The ID of the user.
     * @param {number} userIdentityId - The ID of the user identity to verify.
     * @returns {Promise<object>} The verified user identity.
     * @async
     * @throws {Error} Throws an error if the request fails.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/users/user_identities/#verify-identity}
     * @example await client.useridentities.verify(12345, 67890);
     */
    verify(userId: number, userIdentityId: number): Promise<object>;
    /**
     * Request verification for a specific identity for a given user.
     * @param {number} userId - The ID of the user.
     * @param {number} userIdentityId - The ID of the user identity to request verification for.
     * @returns {Promise<object>} The user identity verification request details.
     * @async
     * @throws {Error} Throws an error if the request fails.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/users/user_identities/#request-user-verification}
     * @example await client.useridentities.requestVerification(12345, 67890);
     */
    requestVerification(userId: number, userIdentityId: number): Promise<object>;
    /**
     * Delete a specific identity for a given user.
     * @param {number} userId - The ID of the user.
     * @param {number} userIdentityId - The ID of the user identity to delete.
     * @returns {Promise<void>}
     * @async
     * @throws {Error} Throws an error if the request fails.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/users/user_identities/#delete-identity}
     * @example await client.useridentities.delete(12345, 67890);
     */
    delete(userId: number, userIdentityId: number): Promise<void>;
}
import { Client } from "../client";
