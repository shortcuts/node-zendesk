/**
 * @class SuspendedTickets
 * @description A thin wrapper around the Zendesk Suspended Tickets API
 * @augments Client
 * @see {@link https://developer.zendesk.com/api-reference/ticketing/tickets/suspended_tickets/}
 */
export class SuspendedTickets extends Client {
    constructor(options: any);
    jsonAPINames: string[];
    /**
     * List all suspended tickets
     * @returns {Promise} Returns a promise that resolves to a list of suspended tickets
     * @async
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/tickets/suspended_tickets/#list-suspended-tickets}
     * @example const tickets = await client.suspendedtickets.list();
     */
    list(): Promise<any>;
    /**
     * Get details of a specific suspended ticket by ID
     * @param {number} suspendedTicketID - ID of the suspended ticket
     * @returns {Promise} Returns a promise that resolves to the details of the suspended ticket
     * @async
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/tickets/suspended_tickets/#show-suspended-ticket}
     * @example const ticket = await client.suspendedtickets.show(12345);
     */
    show(suspendedTicketID: number): Promise<any>;
    /**
     * Recover a specific suspended ticket by ID
     * @param {number} suspendedTicketID - ID of the suspended ticket to recover
     * @returns {Promise} Returns a promise that resolves once the ticket has been recovered
     * @async
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/tickets/suspended_tickets/#recover-suspended-ticket}
     * @example await client.suspendedtickets.recover(12345);
     */
    recover(suspendedTicketID: number): Promise<any>;
    /**
     * Recover multiple suspended tickets by their IDs
     * @param {Array<number>} suspendedTicketIDs - An array of suspended ticket IDs to recover
     * @returns {Promise} Returns a promise that resolves once the tickets have been recovered
     * @async
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/tickets/suspended_tickets/#recover-multiple-suspended-tickets}
     * @example await client.suspendedtickets.recoverMany([12345, 67890]);
     */
    recoverMany(suspendedTicketIDs: Array<number>): Promise<any>;
    /**
     * Delete a specific suspended ticket by ID
     * @param {number} suspendedTicketID - ID of the suspended ticket to delete
     * @returns {Promise} Returns a promise that resolves once the ticket has been deleted
     * @async
     * @throws Will throw an error if the request fails
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/tickets/suspended_tickets/#delete-suspended-ticket}
     * @example await client.suspendedtickets.delete(12345);
     */
    delete(suspendedTicketID: number): Promise<any>;
    /**
     * Deletes multiple suspended tickets by their IDs
     * @param {Array<number>} suspendedTicketIDs - An array of suspended ticket IDs to delete
     * @returns {Promise} Returns a promise that resolves once the tickets have been deleted
     * @async
     * @throws Will throw an error if the request fails
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/tickets/suspended_tickets/#delete-multiple-suspended-tickets}
     * @example await client.suspendedtickets.destroyMany([12345, 67890]);
     */
    destroyMany(suspendedTicketIDs: Array<number>): Promise<any>;
    /**
     * @param {Array<number>} suspendedTicketIDs - An array of suspended ticket IDs to delete
     * @returns {Promise} Returns a promise that resolves once the tickets have been deleted
     * @async
     * @throws Will throw an error if the request fails
     * @example await client.suspendedtickets.deleteMany([12345, 67890]);
     * @deprecated Use `destroyMany` method instead.
     * Deletes multiple suspended tickets by their IDs. This method is deprecated.
     */
    deleteMany(suspendedTicketIDs: Array<number>): Promise<any>;
    /**
     * Get attachments for a specific suspended ticket by ID
     * @param {number} suspendedTicketID - ID of the suspended ticket to get attachments from
     * @returns {Promise} Returns a promise that resolves to the attachments of the suspended ticket
     * @async
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/tickets/suspended_tickets/#suspended-ticket-attachments}
     * @example const attachments = await client.suspendedtickets.attachments(12345);
     */
    attachments(suspendedTicketID: number): Promise<any>;
    /**
     * Export suspended tickets for the Zendesk Support instance
     * @returns {Promise} Returns a promise that resolves once the export request has been initiated
     * @async
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/tickets/suspended_tickets/#export-suspended-tickets}
     * @example await client.suspendedtickets.exportTickets();
     */
    exportTickets(): Promise<any>;
}
import { Client } from "../client";
