/**
 * The Macros class provides methods for interacting with the Zendesk Macros API.
 * @see {@link https://developer.zendesk.com/api-reference/ticketing/business-rules/macros/} Zendesk Macros API
 */
export class Macros extends Client {
    constructor(options: any);
    jsonAPINames: string[];
    /**
     * Lists all shared and personal macros available to the current user.
     * @returns {Promise<Array>} Returns a promise that resolves to an array of macros.
     * @async
     * @throws {Error} Throws an error if the request fails.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/business-rules/macros/#list-macros} Zendesk List Macros API
     * @example
     * const macros = await client.macros.list();
     */
    list(): Promise<any[]>;
    /**
     * Retrieves details of a specific macro.
     * @param {number} macroID - The ID of the macro to retrieve.
     * @returns {Promise<object>} Returns a promise that resolves to the macro's details.
     * @async
     * @throws {Error} Throws an error if the request fails.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/business-rules/macros/#show-macro} Zendesk Show Macro API
     * @example
     * const macroDetails = await client.macros.show(123);
     */
    show(macroID: number): Promise<object>;
    /**
     * Searches for macros based on provided query.
     * @param {string} query - The search query string.
     * @returns {Promise<Array<object>>} - A promise that resolves to a list of matched macros.
     * @async
     * @throws {Error} Throws an error if the request fails.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/business-rules/macros/#search-macros}
     * @example
     * const matchedMacros = await client.macros.search("priority:urgent");
     */
    search(query: string): Promise<Array<object>>;
    /**
     * Lists all active macros.
     * @returns {Promise<Array<object>>} - A promise that resolves to a list of active macros.
     * @async
     * @throws {Error} Throws an error if the request fails.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/business-rules/macros/#list-active-macros}
     * @example
     * const activeMacros = await client.macros.listActive();
     */
    listActive(): Promise<Array<object>>;
    /**
     * Lists macros based on provided parameters.
     * @param {object} parameters - The filtering parameters.
     * @returns {Promise<object>} - A promise that resolves to a list of macros.
     * @async
     * @throws {Error} Throws an error if the request fails.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/business-rules/macros/#list-macros}
     * @example
     * const macros = await client.macros.listByParams({ active: true });
     */
    listByParams(parameters: object): Promise<object>;
    /**
     * Applies a macro to a ticket.
     * @param {number} macroID - The ID of the macro.
     * @returns {Promise<object>} - A promise that resolves to the applied macro's result.
     * @async
     * @throws {Error} Throws an error if the request fails.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/business-rules/macros/#show-macro-replica}
     * @example
     * const result = await client.macros.apply(12345);
     */
    apply(macroID: number): Promise<object>;
    /**
     * Creates a macro representation derived from a ticket.
     * @param {number} ticketID - The ID of the ticket from which to build a macro replica.
     * @param {number} macroID - The ID of the macro.
     * @returns {Promise<object>} - A promise that resolves to the macro replica.
     * @async
     * @throws {Error} Throws an error if the request fails.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/business-rules/macros/#show-macro-replica}
     * @example
     * const replica = await client.macros.applyTicket(12345, 67890);
     */
    applyTicket(ticketID: number, macroID: number): Promise<object>;
    /**
     * Creates a new macro.
     * @param {object} macro - The macro object containing necessary values.
     * @param {Array<object>} macro.actions - List of actions that the macro will perform.
     * @param {string} macro.title - The title of the macro.
     * @param {boolean} [macro.active] - Whether the macro is active.
     * @param {string} [macro.description] - The description of the macro.
     * @returns {Promise<object>} - A promise that resolves to the created macro.
     * @async
     * @throws {Error} Throws an error if the request fails.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/business-rules/macros/#create-macro}
     * @example
     * const newMacro = await client.macros.create({
     *   title: "Test Macro",
     *   actions: [{ field: "status", value: "solved" }]
     * });
     */
    create(macro: {
        actions: Array<object>;
        title: string;
        active?: boolean;
        description?: string;
    }): Promise<object>;
    /**
     * Lists all macro categories available to the current user.
     * @returns {Promise<object>} - A promise that resolves to a list of macro categories.
     * @async
     * @throws {Error} Throws an error if the request fails.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/business-rules/macros/#list-macro-categories}
     * @example
     * const macroCategories = await client.macros.categories();
     */
    categories(): Promise<object>;
    /**
     * Updates an existing macro.
     * @param {number} macroID - The ID of the macro to update.
     * @param {object} macro - The updates to apply to the macro.
     * @returns {Promise<object>} - A promise that resolves to the updated macro.
     * @async
     * @throws {Error} Throws an error if the request fails.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/business-rules/macros/#update-macro}
     * @example
     * const updatedMacro = await client.macros.update(12345, {
     *   title: "Updated Macro Title"
     * });
     */
    update(macroID: number, macro: object): Promise<object>;
    /**
     * Deletes a specified macro.
     * @param {number} macroID - The ID of the macro to delete.
     * @returns {Promise<void>} - A promise indicating successful deletion.
     * @async
     * @throws {Error} Throws an error if the request fails.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/business-rules/macros/#delete-macro}
     * @example
     * await client.macros.delete(12345);
     */
    delete(macroID: number): Promise<void>;
    /**
     * Updates multiple macros.
     * @param {Array<object>} macrosUpdates - An array of macro update objects.
     * @returns {Promise<Array<object>>} - A promise that resolves to an array of updated macros.
     * @async
     * @throws {Error} Throws an error if the request fails.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/business-rules/macros/#update-many-macros}
     * @example
     * const updatedMacros = await client.macros.updateMany([
     *   { id: 12345, title: "Updated Macro One" },
     *   { id: 67890, title: "Updated Macro Two" }
     * ]);
     */
    updateMany(macrosUpdates: Array<object>): Promise<Array<object>>;
}
import { Client } from "../client";
