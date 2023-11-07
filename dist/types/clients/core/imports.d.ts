/**
 * Client for the Zendesk Ticket Import API.
 * @see {@link https://developer.zendesk.com/api-reference/ticketing/tickets/ticket_import/}
 */
export class Imports extends Client {
    constructor(options: any);
    jsonAPINames: string[];
    /**
     * Imports a single ticket to Zendesk.
     * @param {object} ticket - The ticket data to be imported.
     * @returns {Promise<object>} The response from the Zendesk API.
     * @async
     * @throws {Error} Throws an error if the request fails.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/tickets/ticket_import/#ticket-import}
     * @example
     * const ticketData = {
     *   ticket: {
     *     assignee_id: 19,
     *     comments: [{
     *       author_id: 827,
     *       created_at: "2009-06-25T10:15:18Z",
     *       value: "This is a comment"
     *     }],
     *     description: "A description",
     *     requester_id: 827,
     *     subject: "Help"
     *   }
     * };
     * const response = await client.imports.ticket(ticketData);
     */
    ticket(ticket: object): Promise<object>;
    /**
     * Imports multiple tickets to Zendesk in bulk.
     * @param {object[]} tickets - An array of ticket data to be imported.
     * @returns {Promise<object>} The response from the Zendesk API.
     * @async
     * @throws {Error} Throws an error if the request fails.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/tickets/ticket_import/#ticket-bulk-import}
     * @example
     * const ticketsData = [{
     *   assignee_id: 19,
     *   comments: [{
     *     author_id: 827,
     *     created_at: "2009-06-25T10:15:18Z",
     *     value: "This is a comment"
     *   }],
     *   description: "A description",
     *   requester_id: 827,
     *   subject: "Help"
     * }];
     * const response = await client.imports.ticketMany(ticketsData);
     */
    ticketMany(tickets: object[]): Promise<object>;
}
import { Client } from "../client";
