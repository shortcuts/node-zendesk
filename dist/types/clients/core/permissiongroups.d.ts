/**
 * Client for the Zendesk Permission Groups API.
 * @see {@link https://developer.zendesk.com/api-reference/help_center/help-center-api/permission_groups/}
 */
export class PermissionGroups extends Client {
    constructor(options: any);
    jsonAPINames: string[];
    /**
     * List all permission groups.
     * @returns {Promise<object[]>} Array of permission group objects.
     * @async
     * @throws {Error} Throws an error if the API call fails.
     * @see {@link https://developer.zendesk.com/api-reference/help_center/help-center-api/permission_groups/#list-permission-groups}
     * @example
     * const groups = await client.permissiongroups.list();
     */
    list(): Promise<object[]>;
    /**
     * Retrieve details of a specific permission group.
     * @param {number} groupID - The ID of the permission group.
     * @returns {Promise<object>} Permission group object.
     * @async
     * @throws {Error} Throws an error if the API call fails.
     * @see {@link https://developer.zendesk.com/api-reference/help_center/help-center-api/permission_groups/#show-permission-group}
     * @example
     * const group = await client.permissiongroups.show(42);
     */
    show(groupID: number): Promise<object>;
    /**
     * Create a new permission group.
     * @param {object} group - The permission group details.
     * @param {string} group.name - Name of the permission group.
     * @param {number[]} [group.edit] - Array of user segments that have edit privileges.
     * @param {number[]} [group.publish] - Array of user segments that have publish privileges.
     * @returns {Promise<object>} Newly created permission group object.
     * @async
     * @throws {Error} Throws an error if the API call fails.
     * @see {@link https://developer.zendesk.com/api-reference/help_center/help-center-api/permission_groups/#create-permission-group}
     * @example
     * const newGroup = await client.permissiongroups.create({
     *   name: "Printer Experts",
     *   edit: [12],
     *   publish: [34]
     * });
     */
    create(group: {
        name: string;
        edit?: number[];
        publish?: number[];
    }): Promise<object>;
    /**
     * Update an existing permission group.
     * @param {number} groupID - The ID of the permission group.
     * @param {object} group - The permission group details to update.
     * @param {string} [group.name] - Name of the permission group.
     * @param {number[]} [group.edit] - Array of user segments that have edit privileges.
     * @param {number[]} [group.publish] - Array of user segments that have publish privileges.
     * @returns {Promise<object>} Updated permission group object.
     * @async
     * @throws {Error} Throws an error if the API call fails.
     * @see {@link https://developer.zendesk.com/api-reference/help_center/help-center-api/permission_groups/#update-permission-group}
     * @example
     * const updatedGroup = await client.permissiongroups.update(42, {
     *   name: "Super Printer Experts"
     * });
     */
    update(groupID: number, group: {
        name?: string;
        edit?: number[];
        publish?: number[];
    }): Promise<object>;
    /**
     * Delete a permission group.
     * @param {number} groupID - The ID of the permission group.
     * @returns {Promise<void>}
     * @async
     * @throws {Error} Throws an error if the API call fails.
     * @see {@link https://developer.zendesk.com/api-reference/help_center/help-center-api/permission_groups/#delete-permission-group}
     * @example
     * await client.permissiongroups.delete(42);
     */
    delete(groupID: number): Promise<void>;
}
import { Client } from "../client";
