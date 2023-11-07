/**
 * TicketExport class for interacting with the Zendesk Ticket Export API.
 * @see {@link https://developer.zendesk.com/api-reference/ticketing/ticket-management/incremental_exports/}
 */
export class TicketExport extends Client {
    constructor(options: any);
    jsonAPINames: string[];
    /**
     * Export tickets that changed since the provided start time using the time-based approach.
     * @param {number} start_time - The time to start the incremental export from.
     * @returns {Promise<object>} Returns the response from the Zendesk API.
     * @async
     * @throws Will throw an error if the request fails.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/ticket-management/incremental_exports/#incremental-ticket-export-time-based}
     * @example const tickets = await client.ticketexport.export(1332034771);
     */
    export(start_time: number): Promise<object>;
    /**
     * Export tickets with associated users and groups since the provided start time.
     * @param {number} start_time - The time to start the incremental export from.
     * @returns {Promise<object>} Returns the response from the Zendesk API with users and groups included.
     * @async
     * @throws Will throw an error if the request fails.
     * @example const ticketsWithUsers = await client.ticketexport.exportWithUser(1332034771);
     */
    exportWithUser(start_time: number): Promise<object>;
    /**
     *
     *Export incremental tickets based on a specified start time and optional include parameters.
     * @param {string} startTime - The start time for exporting incremental tickets.
     * @param {string} include - Optional parameters to include in the export.
     * @returns {Promise<Array>} A promise that resolves with an array of exported incremental tickets.
     * @async
     * @throws {Error} If `startTime` is not a valid string.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/tickets/tickets/#ticket-export-incremental-include}
     * @example
     * // Export incremental tickets based on a start time with optional include parameters
     * const startTime = '2023-01-01T00:00:00Z';
     * const include = 'users,groups';
     * const incrementalTickets = await client.tickets.ticketexport(startTime, include);
     */
    exportWithInclude(startTime: string, include: string): Promise<any[]>;
    /**
     * Export tickets using the cursor-based approach.
     * @param {number} start_time - The time to start the incremental export from.
     * @param {string} [cursor] - The cursor pointer for subsequent requests.
     * @returns {Promise<object>} Returns the response from the Zendesk API.
     * @async
     * @throws Will throw an error if the request fails.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/ticket-management/incremental_exports/#incremental-ticket-export-cursor-based}
     * @example const cursorTickets = await client.ticketexport.exportCursor(1332034771, 'MTU3NjYxMzUzOS4wfHw0NTF8');
     */
    exportCursor(start_time: number, cursor?: string): Promise<object>;
    /**
     * @param {number} ticketID - The ID of the ticket.
     * @returns {Promise<object>} Returns the list of audits for the ticket.
     * @async
     * @throws Will throw an error if the request fails.
     * @example const ticketAudits = await client.ticketexport.exportAudit(12345);
     * @deprecated Use the `list` method from the `TicketAudits` class instead.
     * Retrieve all audits for a specific ticket.
     */
    exportAudit(ticketID: number): Promise<object>;
    /**
     
     Export a sample of tickets based on a specified start time.
     * @param {string} startTime - The start time for exporting the sample of tickets.
     * @returns {Promise<object>} A promise that resolves with the exported sample of tickets.
     * @async
     * @throws {Error} If `startTime` is not a valid string.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/ticket-management/incremental_exports/#incremental-sample-export}
     * @example
     * // Export a sample of tickets based on a start time
     * const startTime = '2023-01-01T00:00:00Z';
     * const exportedSample = await client.ticketexport.sample(startTime);
     */
    sample(startTime: string): Promise<object>;
}
import { Client } from "../client";
