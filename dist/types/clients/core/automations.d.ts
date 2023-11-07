/**
 * Client for interacting with the Zendesk Automation API.
 */
/**
 * The Automations class provides methods for interacting with the Zendesk Automation API.
 * {@link https://developer.zendesk.com/api-reference/ticketing/business-rules/automations/| See the Zendesk API documentation for more details}.
 * @augments Client
 */
export class Automations extends Client {
    constructor(options: any);
    jsonAPINames: string[];
    /**
     * List all automations.
     * @returns {Promise<Array>} Returns a list of automations.
     * @async
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/business-rules/automations/#list-automations}
     * @example const automations = await client.automations.list();
     */
    list(): Promise<any[]>;
    /**
     * List all active automations.
     * @returns {Promise<Array>} Returns a list of active automations.
     * @async
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/business-rules/automations/#list-active-automations}
     * @example const activeAutomations = await client.automations.listActive();
     */
    listActive(): Promise<any[]>;
    /**
     * Get details of a specific automation by ID.
     * @param {number} automationID - The ID of the automation.
     * @returns {Promise<object>} Returns details of the automation.
     * @async
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/business-rules/automations/#show-automation}
     * @example const automationDetails = await client.automations.show(123456);
     */
    show(automationID: number): Promise<object>;
    /**
     * Create a new automation.
     * @param {object} automationData - Data for the new automation.
     * @returns {Promise<object>} Returns the created automation.
     * @async
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/business-rules/automations/#create-automation}
     * @example
     * const automation = await client.automations.create({
     *   title: "Roger Wilco",
     *   conditions: { ... },
     *   actions: { ... }
     * });
     */
    create(automationData: object): Promise<object>;
    /**
     * Update an existing automation.
     * @param {number} automationID - ID of the automation to update.
     * @param {object} updatedData - Updated data for the automation.
     * @returns {Promise<object>} Returns the updated automation.
     * @async
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/business-rules/automations/#update-automation}
     * @example
     * const updatedAutomation = await client.automations.update(12345, {
     *   title: "Updated Automation"
     * });
     */
    update(automationID: number, updatedData: object): Promise<object>;
    /**
     * Update many automations in bulk.
     * @param {Array<object>} automations - Array of automation data with their IDs to be updated.
     * @returns {Promise<object>} Returns the status of the bulk update.
     * @async
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/business-rules/automations/#update-many-automation}
     * @example
     * const status = await client.automations.updateMany([{id: 123, position: 1}, {id: 124, position: 2}]);
     */
    updateMany(automations: Array<object>): Promise<object>;
    /**
     * Delete an automation.
     * @param {number} automationID - ID of the automation to be deleted.
     * @returns {Promise<void>}
     * @async
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/business-rules/automations/#delete-automation}
     * @example
     * await client.automations.delete(12345);
     */
    delete(automationID: number): Promise<void>;
    /**
     * Bulk delete automations.
     * @param {Array<number>} ids - Array of automation IDs to be deleted.
     * @returns {Promise<void>}
     * @async
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/business-rules/automations/#bulk-delete-automation}
     * @example
     * await client.automations.bulkDelete([12345, 67890]);
     */
    bulkDelete(ids: Array<number>): Promise<void>;
    /**
     * Search automations by with query.
     * @param {object} searchQuery - The parameters to search for ['active', 'include', 'query', 'sort_by', 'sort_order'].
     * @returns {Promise<Array>} Returns automations matching the search query.
     * @async
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/business-rules/automations/#search-automation}
     * @example const foundAutomations = await client.automations.search('close');
     */
    search(searchQuery: object): Promise<any[]>;
    /**
     * Reorder the list of automations.
     * @param {Array<number>} automationIDs - Array of automation IDs in the desired order.
     * @returns {Promise<object>} Returns the status of the reorder.
     * @async
     * @example
     * const status = await client.automations.reorder([67890, 12345]);
     * @deprecated This may now be deprecated, please notify developers if you find this to be the case.
     */
    reorder(automationIDs: Array<number>): Promise<object>;
}
import { Client } from "../client";
