/**
 * @class
 * @classdesc Client for Zendesk's Custom Agent Roles API.
 * @see {@link https://developer.zendesk.com/api-reference/ticketing/account-configuration/custom_roles/}
 */
export class CustomAgentRoles extends Client {
    constructor(options: any);
    jsonAPINames: string[];
    /**
     * List all Custom Agent Roles.
     * @returns {Promise<object[]>} Returns a promise that resolves with the list of custom agent roles.
     * @async
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/account-configuration/custom_roles/#list-custom-roles}
     * @example
     * const client = createClient({...});
     * const roles = await client.customagentroles.list();
     */
    list(): Promise<object[]>;
    /**
     * Retrieve a specific Custom Agent Role by its ID.
     * @param {number} roleId The ID of the custom agent role to retrieve.
     * @returns {Promise<object>} Returns a promise that resolves with the specified custom agent role.
     * @async
     * @throws Will throw an error if unable to retrieve the role.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/account-configuration/custom_roles/#show-custom-role}
     * @example
     * const client = createClient({...});
     * const role = await client.customagentroles.show(12345);
     */
    show(roleId: number): Promise<object>;
    /**
     * Creates a new custom agent role.
     * @param {object} roleData - The data for the new custom agent role.
     * @returns {Promise<object>} The created custom agent role.
     * @async
     * @throws Will throw an error if creation fails.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/account-configuration/custom_roles/#create-custom-role}
     * @example
     * const newRole = {
     *   name: "Sample Role",
     *   description: "Description here",
     *   configuration: { chat_access: true }
     * };
     * const role = await client.customagentroles.create(newRole);
     */
    create(roleData: object): Promise<object>;
    /**
     * Updates an existing custom agent role.
     * @param {number} customRoleId - The ID of the custom agent role to update.
     * @param {object} updatedData - The updated data for the custom agent role.
     * @returns {Promise<object>} The updated custom agent role.
     * @async
     * @throws Will throw an error if the update fails or custom agent role ID is not found.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/account-configuration/custom_roles/#update-custom-role}
     * @example
     * const updatedData = { name: "Updated Role", description: "Updated Description" };
     * const updatedRole = await client.customagentroles.update(12345, updatedData);
     */
    update(customRoleId: number, updatedData: object): Promise<object>;
    /**
     * Delete a specific Custom Agent Role by its ID.
     * @param {number} roleId The ID of the custom agent role to delete.
     * @returns {Promise<void>} Returns a promise that resolves when the role is deleted.
     * @async
     * @throws Will throw an error if unable to delete the role.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/account-configuration/custom_roles/#delete-custom-role}
     * @example
     * const client = createClient({...});
     * await client.customagentroles.delete(12345);
     */
    delete(roleId: number): Promise<void>;
}
import { Client } from "../client";
