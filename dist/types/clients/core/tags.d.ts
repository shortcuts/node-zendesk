/**
 * Client for the Zendesk Tags API.
 * @see {@link https://developer.zendesk.com/api-reference/sales-crm/resources/tags/}
 */
export class Tags extends Client {
    constructor(options: any);
    jsonAPINames: string[];
    /**
     * Retrieves all tags available to the user.
     * @returns {Promise<object[]>} A promise that resolves with the list of tags.
     * @async
     * @see {@link https://developer.zendesk.com/api-reference/sales-crm/resources/tags/#retrieve-all-tags}
     * @example
     * const client = createClient({...});
     * const tags = await client.tags.list();
     */
    list(): Promise<object[]>;
    /**
     * Creates a new tag.
     * @param {object} tagData - Data for the new tag.
     * @param {string} tagData.name - Name of the tag.
     * @param {string} tagData.resource_type - Type of resource the tag is attached to (lead, contact, deal).
     * @returns {Promise<object>} A promise that resolves with the created tag.
     * @async
     * @throws Will throw an error if the API call fails.
     * @see {@link https://developer.zendesk.com/api-reference/sales-crm/resources/tags/#create-a-tag}
     * @example
     * const client = createClient({...});
     * const newTag = await client.tags.create({ name: 'important', resource_type: 'contact' });
     */
    create(tagData: {
        name: string;
        resource_type: string;
    }): Promise<object>;
    /**
     * Retrieves a single tag by its ID.
     * @param {number} id - Unique identifier of the tag.
     * @returns {Promise<object>} A promise that resolves with the retrieved tag.
     * @async
     * @throws Will throw an error if the API call fails.
     * @see {@link https://developer.zendesk.com/api-reference/sales-crm/resources/tags/#retrieve-a-single-tag}
     * @example
     * const client = createClient({...});
     * const tag = await client.tags.show(5);
     */
    show(id: number): Promise<object>;
    /**
     * Updates a tag's information.
     * @param {number} id - Unique identifier of the tag.
     * @param {object} updatedData - Data to update.
     * @returns {Promise<object>} A promise that resolves with the updated tag.
     * @async
     * @throws Will throw an error if the API call fails.
     * @see {@link https://developer.zendesk.com/api-reference/sales-crm/resources/tags/#update-a-tag}
     * @example
     * const client = createClient({...});
     * const updatedTag = await client.tags.update(5, { name: 'super important' });
     */
    update(id: number, updatedData: object): Promise<object>;
    /**
     * Deletes a tag by its ID.
     * @param {number} id - Unique identifier of the tag.
     * @returns {Promise<void>} A promise that resolves when the tag has been deleted.
     * @async
     * @throws Will throw an error if the API call fails.
     * @see {@link https://developer.zendesk.com/api-reference/sales-crm/resources/tags/#delete-a-tag}
     * @example
     * const client = createClient({...});
     * await client.tags.delete(1);
     */
    delete(id: number): Promise<void>;
}
import { Client } from "../client";
