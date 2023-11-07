/**
 * TicketEvents class to handle operations related to the Zendesk Ticket Events API.
 * @see {@link https://developer.zendesk.com/api-reference/ticketing/ticket-management/incremental_exports/}
 */
export class TicketEvents extends Client {
    constructor(options: any);
    jsonAPINames: string[];
    /**
     * Fetches incremental ticket events with optional inclusion.
     * @param {number} startTime - The time to start the incremental export from.
     * @param {string} include - Additional entities to include in the response.
     * @returns {Promise<object>} Returns the result of the API call.
     * @async
     * @throws {Error} Throws an error if the API call fails.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/ticket-management/incremental_exports/#incremental-ticket-event-export}
     * @example const result = await client.ticketevents.incrementalInclude(1632505559, 'comment_events');
     */
    incrementalInclude(startTime: number, include: string): Promise<object>;
    /**
     * Fetches incremental ticket events.
     * @param {number} startTime - The time to start the incremental export from.
     * @returns {Promise<object>} Returns the result of the API call.
     * @async
     * @throws {Error} Throws an error if the API call fails.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/ticket-management/incremental_exports/#incremental-ticket-event-export}
     * @example const result = await client.ticketevents.incremental(1632505559);
     */
    incremental(startTime: number): Promise<object>;
    /**
     * Fetches a sample of ticket events for testing purposes.
     * @param {number} startTime - The time to start the incremental export from.
     * @returns {Promise<object>} Returns the result of the API call.
     * @async
     * @throws {Error} Throws an error if the API call fails.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/ticket-management/incremental_exports/#incremental-sample-export}
     * @example const result = await client.ticketevents.incrementalSample(1632505559);
     */
    incrementalSample(startTime: number): Promise<object>;
}
import { Client } from "../client";
