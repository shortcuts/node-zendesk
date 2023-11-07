/**
 * Represents the Views API methods.
 * @see {@link https://developer.zendesk.com/api-reference/ticketing/business-rules/views/}
 */
export class Views extends Client {
    constructor(options: any);
    jsonAPINames: string[];
    /**
     * Lists shared and personal views available to the current user.
     * @returns {Promise<object>} A promise that resolves to the list of views.
     * @async
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/business-rules/views/#list-views}
     * @example
     * const views = await client.views.list();
     */
    list(): Promise<object>;
    /**
     * Lists active shared and personal views available to the current user.
     * @returns {Promise<object>} A promise that resolves to the list of active views.
     * @async
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/business-rules/views/#list-active-views}
     * @example
     * const activeViews = await client.views.listActive();
     */
    listActive(): Promise<object>;
    /**
     * A compacted list of shared and personal views available to the current user.
     * @returns {Promise<object>} A promise that resolves to the compact list of views.
     * @async
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/business-rules/views/#list-views-compact}
     * @example
     * const compactViews = await client.views.listCompact();
     */
    listCompact(): Promise<object>;
    /**
     * Shows details of a specific view.
     * @param {number} viewID - The ID of the view to retrieve.
     * @returns {Promise<object>} A promise that resolves to the details of the view.
     * @async
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/business-rules/views/#show-view}
     * @example
     * const viewDetails = await client.views.show(12345);
     */
    show(viewID: number): Promise<object>;
    /**
     * Creates a new view.
     * @param {object} view - The view data to create.
     * @returns {Promise<object>} A promise that resolves to the created view details.
     * @async
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/business-rules/views/#create-view}
     * @example
     * const newView = {
     *   title: "My New View",
     *   conditions: {...}
     * };
     * const createdView = await client.views.create(newView);
     */
    create(view: object): Promise<object>;
    /**
     * Updates an existing view by its ID.
     * @param {number} viewID - The ID of the view to update.
     * @param {object} viewData - The updated view data.
     * @returns {Promise<object>} A promise that resolves to the updated view details.
     * @async
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/business-rules/views/#update-view}
     * @example
     * const updatedData = {
     *   title: "Updated View Title"
     * };
     * const updatedView = await client.views.update(12345, updatedData);
     */
    update(viewID: number, viewData: object): Promise<object>;
    /**
     * Executes a specific view by its ID.
     * @param {number} viewID - The ID of the view to execute.
     * @param {object} parameters - Additional parameters for execution.
     * @returns {Promise<object>} A promise that resolves to the executed view results.
     * @async
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/business-rules/views/#execute-view}
     * @example const executedView = await client.views.execute(12345, {sort_by: 'status'});
     */
    execute(viewID: number, parameters: object): Promise<object>;
    /**
     * Retrieves tickets from a specific view by its ID.
     * @param {number} viewID - The ID of the view.
     * @returns {Promise<object>} A promise that resolves to the list of tickets from the view.
     * @async
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/business-rules/views/#list-tickets-from-a-view}
     * @example const ticketsFromView = await client.views.tickets(12345);
     */
    tickets(viewID: number): Promise<object>;
    /**
     * Previews a new view without saving it.
     * @param {object} parameters - Additional parameters for execution.
     * @returns {Promise<object>} A promise that resolves to the previewed view results.
     * @async
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/business-rules/views/#preview-view}
     * @example
     * const viewData = {
     *   title: "Preview View",
     *   conditions: {...}
     * };
     * const previewResults = await client.views.preview(viewData);
     */
    preview(parameters: object): Promise<object>;
    /**
     * Retrieves the count of tickets for a specific view.
     * @param {number} viewID - The ID of the view to count tickets for.
     * @returns {Promise<object>} A promise that resolves to the ticket count for the view.
     * @async
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/business-rules/views/#show-view-count}
     * @example const ticketCount = await client.views.showCount(12345);
     */
    showCount(viewID: number): Promise<object>;
    /**
     * Retrieves the ticket counts for multiple views.
     * @param {Array<number>} viewIDs - An array of view IDs to count tickets for.
     * @returns {Promise<object>} A promise that resolves to the ticket counts for the specified views.
     * @async
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/business-rules/views/#show-multiple-view-counts}
     * @example const ticketCounts = await client.views.showCounts([12345, 67890]);
     */
    showCounts(viewIDs: Array<number>): Promise<object>;
    /**
     * Exports views to a JSON file.
     * @param {number} viewID - The ID of the view to export.
     * @returns {Promise<object>} A promise that resolves to the exported views in JSON format.
     * @async
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/business-rules/views/#export-view}
     * @example const exportedViews = await client.views.export([12345, 67890]);
     */
    export(viewID: number): Promise<object>;
    /**
     * Retrieves all active shared views.
     * @returns {Promise<object>} A promise that resolves to the list of all active shared views.
     * @async
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/business-rules/views/#list-active-shared-views}
     */
    listActiveShared(): Promise<object>;
    /**
     * Retrieves the view's execution status.
     * @param {number} viewID - The ID of the view to check the execution status for.
     * @returns {Promise<object>} A promise that resolves to the execution status of the view.
     * @async
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/business-rules/views/#show-view-execution-status}
     */
    showExecutionStatus(viewID: number): Promise<object>;
    /**
     * Retrieves the view's recent ticket IDs.
     * @param {number} viewID - The ID of the view to retrieve recent ticket IDs for.
     * @returns {Promise<object>} A promise that resolves to the recent ticket IDs of the view.
     * @async
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/business-rules/views/#show-view-recent-ticket-ids}
     */
    showRecentTicketIDs(viewID: number): Promise<object>;
    /**
     * Deletes a specific view by its ID.
     * @param {number} viewID - The ID of the view to delete.
     * @returns {Promise<object>} A promise that resolves when the view is deleted.
     * @async
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/business-rules/views/#delete-view}
     */
    delete(viewID: number): Promise<object>;
    /**
     * Reorders views based on the provided order.
     * @param {Array<number>} viewOrder - An array of view IDs in the desired order.
     * @returns {Promise<object>} A promise that resolves when the views are reordered.
     * @async
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/business-rules/views/#reorder-views}
     */
    reorder(viewOrder: Array<number>): Promise<object>;
}
import { Client } from "../client";
