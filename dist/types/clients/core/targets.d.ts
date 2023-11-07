/**
 * Represents a client for the Zendesk Targets API.
 * @see {@link https://developer.zendesk.com/api-reference/ticketing/targets/targets/}
 */
export class Targets extends Client {
    constructor(options: any);
    jsonAPINames: string[];
    /**
     * Lists all targets.
     * @returns {Promise<object>} A promise that resolves to the list of targets.
     * @async
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/targets/targets/#list-targets}
     * @example
     * const targets = await client.targets.list();
     */
    list(): Promise<object>;
    /**
     * Retrieves details of a specific target.
     * @param {number} targetId - The ID of the target to retrieve.
     * @returns {Promise<object>} A promise that resolves to the target details.
     * @async
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/targets/targets/#show-target}
     * @example
     * const target = await client.targets.show(12345);
     */
    show(targetId: number): Promise<object>;
    /**
     * Creates a new target.
     * @param {object} target - The target data.
     * @returns {Promise<object>} A promise that resolves to the created target's details.
     * @async
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/targets/targets/#create-target}
     * @example
     * const target = {
     *   type: 'email_target',
     *   title: 'Test Email Target',
     *   email: 'hello@example.com',
     *   subject: 'Test Target'
     * };
     * const response = await client.targets.create(target);
     */
    create(target: object): Promise<object>;
    /**
     * Updates a specific target.
     * @param {number} targetId - The ID of the target to update.
     * @param {object} target - The updated target data.
     * @returns {Promise<object>} A promise that resolves to the updated target's details.
     * @async
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/targets/targets/#update-target}
     * @example
     * const updatedData = { email: 'updated@example.com' };
     * const response = await client.targets.update(12345, updatedData);
     */
    update(targetId: number, target: object): Promise<object>;
    /**
     * Deletes a specific target.
     * @param {number} targetId - The ID of the target to delete.
     * @returns {Promise<void>} A promise that resolves once the target has been deleted.
     * @async
     * @throws {Error} Throws an error if deletion fails.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/targets/targets/#delete-target}
     * @example
     * await client.targets.delete(12345);
     */
    delete(targetId: number): Promise<void>;
}
import { Client } from "../client";
