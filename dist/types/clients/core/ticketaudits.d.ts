/**
 * Client for the Zendesk Ticket Audits API.
 * @see {@link https://developer.zendesk.com/api-reference/ticketing/tickets/ticket_audits/}
 */
export class TicketAudits extends Client {
    constructor(options: any);
    jsonAPINames: string[];
    sideLoadMap: {
        field: string;
        name: string;
        dataset: string;
    }[];
    /**
     * List all ticket audits. Note: Archived tickets are not included.
     * @returns {Promise<Array<object>>} Returns an array of ticket audit objects.
     * @async
     * @throws {Error} Throws an error if request fails.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/tickets/ticket_audits/#list-all-ticket-audits}
     * @example
     * const client = createClient({...});
     * const allAudits = await client.ticketaudits.listAll();
     */
    listAll(): Promise<Array<object>>;
    /**
     * List all audits for a specified ticket.
     * @param {number} ticketID - The ID of the ticket.
     * @returns {Promise<Array<object>>} Returns an array of ticket audit objects.
     * @async
     * @throws {Error} Throws an error if request fails.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/tickets/ticket_audits/#list-audits-for-a-ticket}
     * @example
     * const client = createClient({...});
     * const audits = await client.ticketaudits.list(12345);
     */
    list(ticketID: number): Promise<Array<object>>;
    /**
     * Get an approximate count of audits for a specified ticket.
     * @param {number} ticketID - The ID of the ticket.
     * @returns {Promise<number>} Returns an approximate count of audits.
     * @async
     * @throws {Error} Throws an error if request fails.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/tickets/ticket_audits/#count-audits-for-a-ticket}
     * @example
     * const client = createClient({...});
     * const auditCount = await client.ticketaudits.count(12345);
     */
    count(ticketID: number): Promise<number>;
    /**
     * Show details of a specific ticket audit.
     * @param {number} ticketID - The ID of the ticket.
     * @param {number} auditID - The ID of the ticket audit.
     * @returns {Promise<object>} Returns details of the ticket audit.
     * @async
     * @throws {Error} Throws an error if request fails.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/tickets/ticket_audits/#show-audit}
     * @example
     * const client = createClient({...});
     * const auditDetails = await client.ticketaudits.show(12345, 67890);
     */
    show(ticketID: number, auditID: number): Promise<object>;
    /**
     * Change a comment from public to private for a specific ticket audit.
     * @param {number} ticketID - The ID of the ticket.
     * @param {number} auditID - The ID of the ticket audit.
     * @returns {Promise<object>} Returns the updated ticket audit details.
     * @async
     * @throws {Error} Throws an error if request fails.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/tickets/ticket_audits/#change-a-comment-from-public-to-private}
     * @example
     * const client = createClient({...});
     * await client.ticketaudits.makePrivate(12345, 67890);
     */
    makePrivate(ticketID: number, auditID: number): Promise<object>;
}
import { Client } from "../client";
