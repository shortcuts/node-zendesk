/**
 * @class
 * @classdesc Client for interacting with the Zendesk TicketForms API.
 * @see {@link https://developer.zendesk.com/rest_api/docs/support#ticket-forms}
 */
export class TicketForms extends Client {
    constructor(options: any);
    jsonAPINames: string[];
    /**
     * List ticket forms based on the provided query parameters.
     * @param {object} [options] - Optional query parameters.
     * @param {boolean} [options.active] - true returns active ticket forms; false returns inactive ticket forms. If not present, returns both.
     * @param {boolean} [options.associated_to_brand] - true returns the ticket forms of the brand specified by the url's subdomain.
     * @param {boolean} [options.end_user_visible] - true returns ticket forms where end_user_visible; false returns ticket forms that are not end-user visible. If not present, returns both.
     * @param {boolean} [options.fallback_to_default] - true returns the default ticket form when the criteria defined by the parameters results in a set without active and end-user visible ticket forms.
     * @returns {Promise<Array>} An array of ticket forms.
     * @async
     * @throws {Error} Throws an error if there is an issue with the API call.
     * @see {@link https://developer.zendesk.com/rest_api/docs/support#list-ticket-forms}
     * @example
     * const client = createClient({...});
     * const activeTicketForms = await client.ticketforms.list({ active: true });
     * const allTicketForms = await client.ticketforms.list();
     */
    list(options?: {
        active?: boolean;
        associated_to_brand?: boolean;
        end_user_visible?: boolean;
        fallback_to_default?: boolean;
    }): Promise<any[]>;
    /**
     * Retrieve a specific ticket form by its ID.
     * @param {number} ticketFormID - The ID of the ticket form to retrieve.
     * @returns {Promise<object>} The requested ticket form.
     * @async
     * @throws {Error} Throws an error if there is an issue with the API call.
     * @see {@link https://developer.zendesk.com/rest_api/docs/support#show-ticket-form}
     * @example
     * const client = createClient({...});
     * const ticketForm = await client.ticketforms.show(12345);
     */
    show(ticketFormID: number): Promise<object>;
    /**
     * Creates a new Ticket Form.
     * @param {object} ticketForm - The ticket form object to be created.
     * @returns {Promise<object>} - A promise that resolves to the created ticket form.
     * @async
     * @throws {Error} - Throws an error if the API call fails.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/tickets/ticket_forms/#create-ticket-form}
     * @example
     * const ticketFormData = {
     *   name: "Snowboard Problem",
     *   end_user_visible: true,
     *   // ... other properties ...
     * };
     * const newTicketForm = await client.ticketforms.create(ticketFormData);
     */
    create(ticketForm: object): Promise<object>;
    /**
     * Update a specific ticket form by its ID.
     * @param {number} ticketFormID - The ID of the ticket form to update.
     * @param {object} ticketForm - The updated ticket form object.
     * @returns {Promise<object>} The updated ticket form.
     * @async
     * @throws {Error} Throws an error if there is an issue with the API call.
     * @see {@link https://developer.zendesk.com/rest_api/docs/support#update-ticket-form}
     * @example
     * const client = createClient({...});
     * const updatedForm = await client.ticketforms.update(12345, {name: 'Updated Form'});
     */
    update(ticketFormID: number, ticketForm: object): Promise<object>;
    /**
     * Deletes a Ticket Form by its ID.
     * @param {number} ticketFormID - The ID of the ticket form to be deleted.
     * @returns {Promise<void>} - A promise that resolves when the ticket form is deleted.
     * @async
     * @throws {Error} - Throws an error if the API call fails.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/tickets/ticket_forms/#delete-ticket-form}
     * @example
     * await client.ticketforms.delete(12345); // Replace 12345 with the actual ticket form ID.
     */
    delete(ticketFormID: number): Promise<void>;
    /**
     * Clones an already existing Ticket Form by its ID.
     * @param {number} ticketFormID - The ID of the ticket form to be cloned.
     * @param {boolean} [prependCloneTitle=false] - Whether to prepend the title with "Clone of" or not.
     * @returns {Promise<object>} - A promise that resolves to the cloned ticket form details.
     * @async
     * @throws {Error} - Throws an error if the API call fails.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/tickets/ticket_forms/#clone-an-already-existing-ticket-form}
     * @example
     * const clonedForm = await client.ticketforms.clone(12345, true); // Replace 12345 with the actual ticket form ID.
     */
    clone(ticketFormID: number, prependCloneTitle?: boolean): Promise<object>;
    /**
     * Reorders the specified Ticket Forms based on the provided array of IDs.
     * @param {number[]} ticketFormIDs - An array of ticket form IDs in the desired order.
     * @returns {Promise<object>} - A promise that resolves to the reordered ticket forms' details.
     * @async
     * @throws {Error} - Throws an error if the API call fails.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/tickets/ticket_forms/#reorder-ticket-forms}
     * @example
     * const reorderedForms = await client.ticketforms.reorder([2, 23, 46, 50]);
     */
    reorder(ticketFormIDs: number[]): Promise<object>;
}
import { Client } from "../client";
