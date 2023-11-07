/**
 * Represents the Dynamic Content section of the Zendesk API.
 * Provides methods to interact with the Dynamic Content Items.
 * @see {@link https://developer.zendesk.com/api-reference/ticketing/ticket-management/dynamic_content/}
 */
export class DynamicContent extends Client {
    /**
     * Creates an instance of the DynamicContent.
     * @param {object} options - The options for the client.
     */
    constructor(options: object);
    jsonAPINames: string[];
    /**
     * Lists the dynamic content items.
     * @returns {Promise<object>} The dynamic content items.
     * @async
     * @throws {Error} Throws an error if the request fails.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/ticket-management/dynamic_content/#list-items}
     * @example const items = await client.dynamiccontent.listItems();
     */
    listItems(): Promise<object>;
    /**
     * Lists all dynamic content items.
     * @returns {Promise<object>} All the dynamic content items.
     * @async
     * @throws {Error} Throws an error if the request fails.
     * @example const allItems = await client.dynamiccontent.listAllItems();
     */
    listAllItems(): Promise<object>;
    /**
     * Shows a specific dynamic content item.
     * @param {number} itemID - The ID of the dynamic content item.
     * @returns {Promise<object>} The specified dynamic content item.
     * @async
     * @throws {Error} Throws an error if the request fails.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/ticket-management/dynamic_content/#show-item}
     * @example const item = await client.dynamiccontent.showItem(12345);
     */
    showItem(itemID: number): Promise<object>;
    /**
     * Retrieves multiple dynamic content items using their identifiers.
     * @param {string[]} identifiers - An array of identifiers for the dynamic content items.
     * @returns {Promise<object>} Returns the fetched dynamic content items.
     * @async
     * @throws {Error} Throws an error if the provided identifiers parameter is not a valid array or is empty.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/ticket-management/dynamic_content/#show-many-items}
     * @example
     * const items = await client.dynamiccontent.showManyItems(['item_one', 'item_two']);
     */
    showManyItems(identifiers: string[]): Promise<object>;
    /**
     * Creates a new dynamic content item.
     * @param {object} item - The item to create.
     * @returns {Promise<object>} The created dynamic content item.
     * @async
     * @throws {Error} Throws an error if the request fails.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/ticket-management/dynamic_content/#create-item}
     * @example const newItem = await client.dynamiccontent.createItem({name: "Sample Item", default_locale_id: 1, variants: [...]});
     */
    createItem(item: object): Promise<object>;
    /**
     * Updates a specific dynamic content item.
     * @param {number} itemID - The ID of the dynamic content item.
     * @param {object} item - The updated item details.
     * @returns {Promise<object>} The updated dynamic content item.
     * @async
     * @throws {Error} Throws an error if the request fails.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/ticket-management/dynamic_content/#update-item}
     * @example const updatedItem = await client.dynamiccontent.updateItem(12345, {name: "Updated Name"});
     */
    updateItem(itemID: number, item: object): Promise<object>;
    /**
     * Deletes a specific dynamic content item.
     * @param {number} itemID - The ID of the dynamic content item.
     * @returns {Promise<object>} The response after deletion.
     * @async
     * @throws {Error} Throws an error if the request fails.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/ticket-management/dynamic_content/#delete-item}
     * @example await client.dynamiccontent.deleteItem(12345);
     */
    deleteItem(itemID: number): Promise<object>;
}
import { Client } from "../client";
