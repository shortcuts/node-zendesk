export class Requests extends Client {
    constructor(options: any);
    jsonAPINames: string[];
    sideLoadMap: {
        field: string;
        name: string;
        dataset: string;
    }[];
    /**
     * List all ticket requests.
     * @param {object} [parameters] - Optional parameters.
     * @param {string} [parameters.sort_by] - Sort by "updated_at" or "created_at".
     * @param {string} [parameters.sort_order] - Sort order: "asc" or "desc".
     * @returns {Promise<object[]>} List of ticket requests.
     * @async
     * @throws {Error} Throws an error if request fails.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/tickets/ticket-requests/#list-requests}
     * @example const requests = await client.requests.list({ sort_by: 'updated_at', sort_order: 'desc' });
     */
    list(parameters?: {
        sort_by?: string;
        sort_order?: string;
    }): Promise<object[]>;
    /**
     * List all ticket requests that are open.
     * @param {object} [parameters] - Optional parameters.
     * @param {string} [parameters.sort_by] - Sort by "updated_at" or "created_at".
     * @param {string} [parameters.sort_order] - Sort order: "asc" or "desc".
     * @returns {Promise<object[]>} List of open ticket requests.
     * @async
     * @throws {Error} Throws an error if request fails.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/tickets/ticket-requests/#list-requests}
     * @example const openRequests = await client.requests.listOpen();
     */
    listOpen(parameters?: {
        sort_by?: string;
        sort_order?: string;
    }): Promise<object[]>;
    /**
     * List all ticket requests that are solved.
     * @param {object} [parameters] - Optional parameters.
     * @param {string} [parameters.sort_by] - Sort by "updated_at" or "created_at".
     * @param {string} [parameters.sort_order] - Sort order: "asc" or "desc".
     * @returns {Promise<object[]>} List of solved ticket requests.
     * @async
     * @throws {Error} Throws an error if request fails.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/tickets/ticket-requests/#list-requests}
     * @example const solvedRequests = await client.requests.listSolved();
     */
    listSolved(parameters?: {
        sort_by?: string;
        sort_order?: string;
    }): Promise<object[]>;
    /**
     * List all CCD ticket requests.
     * @param {object} [parameters] - Optional parameters.
     * @param {string} [parameters.sort_by] - Sort by "updated_at" or "created_at".
     * @param {string} [parameters.sort_order] - Sort order: "asc" or "desc".
     * @returns {Promise<object[]>} List of CCD ticket requests.
     * @async
     * @throws {Error} Throws an error if request fails.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/tickets/ticket-requests/#list-requests}
     * @example const ccdRequests = await client.requests.listCCD();
     */
    listCCD(parameters?: {
        sort_by?: string;
        sort_order?: string;
    }): Promise<object[]>;
    /**
     * List all ticket requests by a specific user.
     * @param {number} userID - The ID of the user.
     * @param {object} [parameters] - Optional parameters.
     * @param {string} [parameters.sort_by] - Sort by "updated_at" or "created_at".
     * @param {string} [parameters.sort_order] - Sort order: "asc" or "desc".
     * @returns {Promise<object[]>} List of ticket requests for the specified user.
     * @async
     * @throws {Error} Throws an error if request fails.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/tickets/ticket-requests/#list-requests}
     * @example const userRequests = await client.requests.listByUser(12345);
     */
    listByUser(userID: number, parameters?: {
        sort_by?: string;
        sort_order?: string;
    }): Promise<object[]>;
    /**
     * List all ticket requests by a specific organization.
     * @param {number} orgID - The ID of the organization.
     * @param {object} [parameters] - Optional parameters.
     * @param {string} [parameters.sort_by] - Sort by "updated_at" or "created_at".
     * @param {string} [parameters.sort_order] - Sort order: "asc" or "desc".
     * @returns {Promise<object[]>} List of ticket requests for the specified organization.
     * @async
     * @throws {Error} Throws an error if request fails.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/tickets/ticket-requests/#list-requests}
     * @example const orgRequests = await client.requests.listByOrganization(6789);
     */
    listByOrganization(orgID: number, parameters?: {
        sort_by?: string;
        sort_order?: string;
    }): Promise<object[]>;
    /**
     * Search for ticket requests.
     * @param {object} parameters - Search parameters.
     * @param {string} parameters.query - The query string.
     * @returns {Promise<object[]>} List of matching ticket requests.
     * @async
     * @throws {Error} Throws an error if request fails.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/tickets/ticket-requests/#search-requests}
     * @example const searchResults = await client.requests.search({ query: 'printer' });
     */
    search(parameters: {
        query: string;
    }): Promise<object[]>;
    /**
     * Retrieve a specific ticket request.
     * @param {number} requestId - The ID of the ticket request.
     * @returns {Promise<object>} The ticket request details.
     * @async
     * @throws {Error} Throws an error if request fails.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/tickets/ticket-requests/#show-request}
     * @example const requestDetails = await client.requests.show(1234);
     */
    show(requestId: number): Promise<object>;
    /**
     * Retrieve a specific ticket request.
     * @param {number} requestId - The ID of the ticket request.
     * @returns {Promise<object>} The ticket request details.
     * @async
     * @throws {Error} Throws an error if request fails.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/tickets/ticket-requests/#show-request}
     * @example const requestDetails = await client.requests.show(1234);
     * @deprecated Use show instead
     */
    getRequest(requestId: number): Promise<object>;
    /**
     * Create a new ticket request.
     * @param {object} requestDetails - Details of the ticket request to be created.
     * @returns {Promise<object>} The created ticket request details.
     * @async
     * @throws {Error} Throws an error if request fails.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/tickets/ticket-requests/#create-request}
     * @example
     * const newRequest = {
     *   subject: 'Help!',
     *   comment: {
     *     body: 'My printer is on fire!'
     *   }
     * };
     * const createdRequest = await client.requests.create(newRequest);
     */
    create(requestDetails: object): Promise<object>;
    /**
     * Update an existing ticket request.
     * @param {number} requestId - The ID of the ticket request.
     * @param {object} updateDetails - Details to update.
     * @returns {Promise<object>} The updated ticket request details.
     * @async
     * @throws {Error} Throws an error if request fails.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/tickets/ticket-requests/#update-request}
     * @example
     * const updatedInfo = {
     *   comment: {
     *     body: 'Thanks!'
     *   }
     * };
     * const updatedRequest = await client.requests.update(1234, updatedInfo);
     */
    update(requestId: number, updateDetails: object): Promise<object>;
    /**
     * List all comments for a specific ticket request.
     * @param {number} requestId - The ID of the ticket request.
     * @returns {Promise<object[]>} List of comments for the ticket request.
     * @async
     * @throws {Error} Throws an error if request fails.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/tickets/ticket-requests/#listing-comments}
     * @example const comments = await client.requests.listComments(1234);
     */
    listComments(requestId: number): Promise<object[]>;
    /**
     * Retrieve a specific comment from a ticket request.
     * @param {number} requestId - The ID of the ticket request.
     * @param {number} commentId - The ID of the comment to retrieve.
     * @returns {Promise<object>} The comment details for the specified ticket request.
     * @async
     * @throws {Error} Throws an error if request fails.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/tickets/ticket-requests/#listing-comments}
     * @example const comment = await client.requests.getComment(1234, 5678);
     */
    getComment(requestId: number, commentId: number): Promise<object>;
}
import { Client } from "../client";
