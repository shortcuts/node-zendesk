/**
 * Represents the UserFields client for the Zendesk API.
 * @see {@link https://developer.zendesk.com/api-reference/ticketing/users/user_fields/}
 */
export class UserFields extends Client {
    constructor(options: any);
    jsonAPINames: string[];
    /**
     * Lists all custom user fields in the account.
     * @returns {Promise<object>} The list of user fields.
     * @async
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/users/user_fields/#list-user-fields}
     * @example const userFields = await client.userfields.list();
     */
    list(): Promise<object>;
    /**
     * Retrieves details of a specific user field.
     * @param {number} userFieldID - The ID of the user field.
     * @returns {Promise<object>} Details of the user field.
     * @async
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/users/user_fields/#show-user-field}
     * @example const userField = await client.userfields.show(12345);
     */
    show(userFieldID: number): Promise<object>;
    /**
     * Creates a new user field.
     * @param {object} userField - The user field data.
     * @returns {Promise<object>} The created user field.
     * @async
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/users/user_fields/#create-user-field}
     * @example const newUserField = await client.userfields.create({ type: 'text', title: 'Support description' });
     */
    create(userField: object): Promise<object>;
    /**
     * Updates an existing user field.
     * @param {number} userFieldID - The ID of the user field.
     * @param {object} userField - The updated user field data.
     * @returns {Promise<object>} The updated user field.
     * @async
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/users/user_fields/#update-user-field}
     * @example await client.userfields.update(12345, { title: 'Updated Support description' });
     */
    update(userFieldID: number, userField: object): Promise<object>;
    /**
     * Deletes a user field.
     * @param {number} userFieldID - The ID of the user field.
     * @returns {Promise<object>} The response from the delete operation.
     * @async
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/users/user_fields/#delete-user-field}
     * @example await client.userfields.delete(12345);
     */
    delete(userFieldID: number): Promise<object>;
    /**
     * Reorders the user fields based on the provided IDs.
     * @param {Array<number>} userFieldIDs - An array of user field IDs in the desired order.
     * @returns {Promise<object>} The reordered user fields.
     * @async
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/users/user_fields/#reorder-user-field}
     * @example await client.userfields.reorder([3, 4]);
     */
    reorder(userFieldIDs: Array<number>): Promise<object>;
    /**
     * Lists options for a specific dropdown user field.
     * @param {number} userFieldID - The ID of the user field.
     * @returns {Promise<object>} The list of user field options.
     * @async
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/users/user_fields/#list-user-field-options}
     * @example const options = await client.userfields.listOptions(12345);
     */
    listOptions(userFieldID: number): Promise<object>;
    /**
     * Retrieves details of a specific user field option.
     * @param {number} userFieldID - The ID of the user field.
     * @param {number} userFieldOptionID - The ID of the user field option.
     * @returns {Promise<object>} Details of the user field option.
     * @async
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/users/user_fields/#show-a-user-field-option}
     * @example const option = await client.userfields.showOption(12345, 67890);
     */
    showOption(userFieldID: number, userFieldOptionID: number): Promise<object>;
    /**
     * Creates or updates a user field option.
     * @param {number} userFieldID - The ID of the user field.
     * @param {object} customFieldOption - The user field option data.
     * @returns {Promise<object>} The created or updated user field option.
     * @async
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/users/user_fields/#create-or-update-a-user-field-option}
     * @example await client.userfields.createOrUpdateOption(12345, { name: 'Grapes', position: 2, value: 'grape' });
     */
    createOrUpdateOption(userFieldID: number, customFieldOption: object): Promise<object>;
    /**
     * Deletes a user field option.
     * @param {number} userFieldID - The ID of the user field.
     * @param {number} userFieldOptionID - The ID of the user field option.
     * @returns {Promise<object>} The response from the delete operation.
     * @async
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/users/user_fields/#delete-user-field-option}
     * @example await client.userfields.deleteOption(12345, 67890);
     */
    deleteOption(userFieldID: number, userFieldOptionID: number): Promise<object>;
}
import { Client } from "../client";
