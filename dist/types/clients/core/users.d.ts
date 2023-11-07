/**
 * Client for the Zendesk Users API.
 * @see {@link https://developer.zendesk.com/api-reference/ticketing/users/users/}
 */
export class Users extends Client {
    constructor(options: any);
    jsonAPINames: string[];
    sideLoadMap: ({
        field: string;
        name: string;
        dataset: string;
        all: boolean;
        array?: undefined;
        dataKey?: undefined;
    } | {
        field: string;
        name: string;
        dataset: string;
        array: boolean;
        dataKey: string;
        all?: undefined;
    } | {
        field: string;
        name: string;
        dataset: string;
        all?: undefined;
        array?: undefined;
        dataKey?: undefined;
    })[];
    /**
     * Authenticates the current user.
     * @returns {Promise<object>} The authenticated user's details.
     * @async
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/users/users/#show-the-currently-authenticated-user}
     * @example
     * const user = await client.users.auth();
     */
    auth(): Promise<object>;
    /**
     * Lists all users.
     * @returns {Promise<Array<object>>} An array of user objects.
     * @async
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/users/users/#list-users}
     * @example
     * const users = await client.users.list();
     */
    list(): Promise<Array<object>>;
    /**
     * Lists users with a specific filter.
     * @param {string} type - The type of filter.
     * @param {string|number} value - The value for the filter.
     * @returns {Promise<Array<object>>} An array of user objects.
     * @async
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/users/users/#list-users}
     * @example
     * const users = await client.users.listWithFilter('type', 'value');
     */
    listWithFilter(type: string, value: string | number): Promise<Array<object>>;
    /**
     * Lists users by group ID.
     * @param {number} id - The ID of the group.
     * @returns {Promise<Array<object>>} An array of user objects.
     * @async
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/users/users/#list-users}
     * @example
     * const users = await client.users.listByGroup(12345);
     */
    listByGroup(id: number): Promise<Array<object>>;
    /**
     * Lists users by organization ID.
     * @param {number} id - The ID of the organization.
     * @returns {Promise<Array<object>>} An array of user objects.
     * @async
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/users/users/#list-users}
     * @example
     * const users = await client.users.listByOrganization(12345);
     */
    listByOrganization(id: number): Promise<Array<object>>;
    /**
     * Shows details of a user by ID.
     * @param {number} id - The ID of the user.
     * @returns {Promise<object>} The user's details.
     * @async
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/users/users/#show-user}
     * @example
     * const user = await client.users.show(12345);
     */
    show(id: number): Promise<object>;
    /**
     * Shows details of multiple users by their IDs.
     * @param {Array<number>} userIds - An array of user IDs.
     * @returns {Promise<Array<object>>} An array of user details.
     * @async
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/users/users/#show-many-users}
     * @example
     * const users = await client.users.showMany([12345, 67890]);
     */
    showMany(userIds: Array<number>): Promise<Array<object>>;
    /**
     * Creates a new user.
     * @param {object} user - The user details.
     * @returns {Promise<object>} The created user's details.
     * @async
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/users/users/#create-user}
     * @example
     * const newUser = await client.users.create({name: 'John Doe', email: 'john@example.com'});
     */
    create(user: object): Promise<object>;
    /**
     * Creates multiple users.
     * @param {Array<object>} users - An array of user details.
     * @returns {Promise<Array<object>>} An array of created user details.
     * @async
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/users/users/#create-many-users}
     * @example
     * const newUsers = await client.users.createMany([{name: 'John Doe', email: 'john@example.com'}, {name: 'Jane Smith', email: 'jane@example.com'}]);
     */
    createMany(users: Array<object>): Promise<Array<object>>;
    /**
     * Creates or updates a user.
     * @param {object} user - The user details.
     * @returns {Promise<object>} The created or updated user's details.
     * @async
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/users/users/#create-or-update-user}
     * @example
     * const user = await client.users.createOrUpdate({name: 'John Doe', email: 'john@example.com'});
     */
    createOrUpdate(user: object): Promise<object>;
    /**
     * Creates or updates multiple users.
     * @param {Array<object>} users - An array of user details.
     * @returns {Promise<Array<object>>} An array of created or updated user details.
     * @async
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/users/users/#create-or-update-many-users}
     * @example
     * const users = await client.users.createOrUpdateMany([{name: 'John Doe', email: 'john@example.com'}, {name: 'Jane Smith', email: 'jane@example.com'}]);
     */
    createOrUpdateMany(users: Array<object>): Promise<Array<object>>;
    /**
     * Updates a user by ID.
     * @param {number} id - The ID of the user.
     * @param {object} user - The updated user details.
     * @returns {Promise<object>} The updated user's details.
     * @async
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/users/users/#update-user}
     * @example
     * const updatedUser = await client.users.update(12345, {name: 'Johnathan Doe'});
     */
    update(id: number, user: object): Promise<object>;
    /**
     * Updates multiple users.
     * @param {...*} args - Arguments including optional IDs and user details.
     * @returns {Promise<Array<object>>} An array of updated user details.
     * @async
     * @throws {Error} Throws an error if not enough arguments are provided.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/users/users/#update-many-users}
     * @example
     * const updatedUsers = await client.users.updateMany([12345, 67890], [{name: 'John Doe'}, {name: 'Jane Smith'}]);
     */
    updateMany(...args: any[]): Promise<Array<object>>;
    /**
     * Suspends a user by ID.
     * @param {number} id - The ID of the user to suspend.
     * @returns {Promise<object>} The suspended user's details.
     * @async
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/users/users/#suspend-user}
     * @example
     * await client.users.suspend(12345);
     */
    suspend(id: number): Promise<object>;
    /**
     * Unsuspends a user by ID.
     * @param {number} id - The ID of the user to unsuspend.
     * @returns {Promise<object>} The unsuspended user's details.
     * @async
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/users/users/#unsuspend-user}
     * @example
     * await client.users.unsuspend(12345);
     */
    unsuspend(id: number): Promise<object>;
    /**
     * Deletes a user by ID.
     * @param {number} id - The ID of the user to delete.
     * @returns {Promise<void>}
     * @async
     * @throws {Error} Throws an error if the user cannot be deleted.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/users/users/#delete-user}
     * @example
     * await client.users.delete(12345);
     */
    delete(id: number): Promise<void>;
    /**
     * Deletes multiple users.
     * @param {...*} args - Arguments including optional IDs and user details.
     * @returns {Promise<void>}
     * @async
     * @throws {Error} Throws an error if not enough arguments are provided.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/users/users/#delete-many-users}
     * @example
     * await client.users.destroyMany([12345, 67890]);
     */
    destroyMany(...args: any[]): Promise<void>;
    /**
     * Searches for users based on specific parameters.
     * @param {object} parameters - The search parameters.
     * @returns {Promise<Array<object>>} An array of user objects that match the search criteria.
     * @async
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/users/users/#search-users}
     * @example
     * const users = await client.users.search({query: 'john@example.com'});
     */
    search(parameters: object): Promise<Array<object>>;
    /**
     * Retrieves details of the currently authenticated user.
     * @returns {Promise<object>} The user's details.The authenticated user's details.
     * @async
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/users/users/#show-the-currently-authenticated-user}
     * @example
     * const user = await client.users.me();
     */
    me(): Promise<object>;
    /**
     * Merges a user into another user.
     * @param {number} id - The ID of the user to be merged.
     * @param {number} targetId - The ID of the user into which the first user will be merged.
     * @returns {Promise<object>} The details of the merged user.
     * @async
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/users/users/#merge-user-into-another-user}
     * @example
     * await client.users.merge(12345, 67890);
     */
    merge(id: number, targetId: number): Promise<object>;
    /**
     * Changes the password of a user.
     * @param {number} userId - The ID of the user whose password is to be changed.
     * @param {string} oldPassword - The current password of the user.
     * @param {string} newPassword - The new password for the user.
     * @returns {Promise<object>} The user's details after the password change.
     * @async
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/users/users/#change-password}
     * @example
     * await client.users.password(12345, 'oldPassword123', 'newPassword456');
     */
    password(userId: number, oldPassword: string, newPassword: string): Promise<object>;
    /**
     * Retrieves users incrementally with included related data.
     * @param {number} startTime - The start time for the incremental export.
     * @param {string} include - The related data to include.
     * @returns {Promise<Array<object>>} An array of user objects with included data.
     * @async
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/users/users/#incremental-export-users}
     * @example
     * const users = await client.users.incrementalInclude(1632614395, 'relatedData');
     */
    incrementalInclude(startTime: number, include: string): Promise<Array<object>>;
    /**
     * Retrieves users incrementally.
     * @param {number} startTime - The start time for the incremental export.
     * @returns {Promise<Array<object>>} An array of user objects.
     * @async
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/users/users/#incremental-export-users}
     * @example
     * const users = await client.users.incremental(1632614395);
     */
    incremental(startTime: number): Promise<Array<object>>;
    /**
     * Retrieves a sample of users incrementally.
     * @param {number} startTime - The start time for the incremental export.
     * @returns {Promise<Array<object>>} A sample array of user objects.
     * @async
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/users/users/#incremental-sample-export-users}
     * @example
     * const usersSample = await client.users.incrementalSample(1632614395);
     */
    incrementalSample(startTime: number): Promise<Array<object>>;
    /**
     * Lists tags associated with a user.
     * @param {number} userId - The ID of the user.
     * @returns {Promise<Array<string>>} An array of tags associated with the user.
     * @async
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/users/user-tags/#list-tags}
     * @example
     * const tags = await client.users.listTags(12345);
     */
    listTags(userId: number): Promise<Array<string>>;
    /**
     * Sets tags for a user.
     * @param {number} userId - The ID of the user.
     * @param {Array<string>} tags - An array of tags to set for the user.
     * @returns {Promise<object>} The user's details with the updated tags.
     * @async
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/users/user-tags/#set-tags}
     * @example
     * await client.users.setTags(12345, ['tag1', 'tag2']);
     */
    setTags(userId: number, tags: Array<string>): Promise<object>;
    /**
     * Adds tags to a user.
     * @param {number} userId - The ID of the user.
     * @param {Array<string>} tags - An array of tags to add to the user.
     * @returns {Promise<object>} The user's details with the added tags.
     * @async
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/users/user-tags/#add-tags}
     * @example
     * await client.users.addTags(12345, ['tag3', 'tag4']);
     */
    addTags(userId: number, tags: Array<string>): Promise<object>;
    /**
     * Removes tags from a user.
     * @param {number} userId - The ID of the user.
     * @param {Array<string>} tags - An array of tags to remove from the user.
     * @returns {Promise<void>}
     * @async
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/users/user-tags/#remove-tags}
     * @example
     * await client.users.removeTags(12345, ['tag3', 'tag4']);
     */
    removeTags(userId: number, tags: Array<string>): Promise<void>;
}
import { Client } from "../client";
