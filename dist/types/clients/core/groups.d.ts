/**
 * A client for interfacing with the Zendesk Groups API.
 * @see {@link https://developer.zendesk.com/api-reference/ticketing/groups/groups/}
 */
export class Groups extends Client {
    constructor(options: any);
    jsonAPINames: string[];
    sideLoadMap: {
        field: string;
        name: string;
        dataset: string;
        all: boolean;
    }[];
    /**
     * Retrieves a list of all groups.
     * @returns {Promise<object>} A promise that resolves to the list of groups.
     * @throws {Error} Throws an error if the request fails.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/groups/groups/#list-groups}
     * @example
     * const allGroups = await client.groups.list();
     */
    list(): Promise<object>;
    /**
     * Retrieves an approximate count of groups.
     * If the count exceeds 100,000, it is updated every 24 hours.
     * @returns {Promise<object>} A promise that resolves to the group count data.
     * @throws {Error} Throws an error if the request fails.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/groups/groups/#count-groups}
     * @example
     * const count = await client.groups.count();
     */
    count(): Promise<object>;
    /**
     * Retrieves the approximate count of groups for a specified user.
     * @param {number} userID - The ID of the user for whom to count the groups.
     * @returns {Promise<object>} A promise that resolves to the approximate count of groups for the user.
     * @throws {Error} Throws an error if the request fails.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/groups/groups/#count-groups}
     * @example
     * const groupCount = await client.groups.countByUser(12345);
     */
    countByUser(userID: number): Promise<object>;
    /**
     * Retrieves a list of all assignable groups.
     * @returns {Promise<object>} A promise that resolves to the list of assignable groups.
     * @throws {Error} Throws an error if the request fails.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/groups/groups/#list-assignable-groups}
     * @example
     * const assignableGroups = await client.groups.assignable();
     */
    assignable(): Promise<object>;
    /**
     * Retrieves details of a specific group by its ID.
     * @param {number} groupID - The ID of the group.
     * @returns {Promise<object>} A promise that resolves to the group's details.
     * @throws {Error} Throws an error if the request fails.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/groups/groups/#show-group}
     * @example
     * const groupDetails = await client.groups.show(12345);
     */
    show(groupID: number): Promise<object>;
    /**
     * Creates a new group.
     * @param {object} group - The group details to create.
     * @param {string} group.name - The name of the group (mandatory).
     * @param {string} [group.description] - The description of the group.
     * @returns {Promise<object>} A promise that resolves to the details of the created group.
     * @throws {Error} Throws an error if the request fails.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/groups/groups/#create-group}
     * @example
     * const newGroup = {
     *   name: "Support Team",
     *   description: "Handles support tickets"
     * };
     * const createdGroup = await client.groups.create(newGroup);
     */
    create(group: {
        name: string;
        description?: string;
    }): Promise<object>;
    /**
     * Updates a specified group.
     * @param {number} groupID - The ID of the group to update.
     * @param {object} group - The updated group details.
     * @param {string} [group.name] - The updated name of the group.
     * @param {string} [group.description] - The updated description of the group.
     * @returns {Promise<object>} A promise that resolves to the details of the updated group.
     * @throws {Error} Throws an error if the request fails.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/groups/groups/#update-group}
     * @example
     * const updatedInfo = {
     *   name: "Updated Support Team"
     * };
     * const updatedGroup = await client.groups.update(12345, updatedInfo);
     */
    update(groupID: number, group: {
        name?: string;
        description?: string;
    }): Promise<object>;
    /**
     * Deletes a specified group by its ID.
     * @param {number} groupID - The ID of the group to delete.
     * @returns {Promise<object>} A promise that resolves to the response data (might be empty or a confirmation).
     * @throws {Error} Throws an error if the request fails.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/groups/groups/#delete-group}
     * @example
     * await client.groups.delete(12345);
     */
    delete(groupID: number): Promise<object>;
}
import { Client } from "../client";
