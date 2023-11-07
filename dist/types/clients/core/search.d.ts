/**
 * Client for the Zendesk Search API.
 * @see {@link https://developer.zendesk.com/api-reference/ticketing/ticket-management/search/}
 */
export class Search extends Client {
    constructor(options: any);
    jsonAPINames: string[];
    /**
     * Search for the given term and retrieve results.
     * @param {string} searchTerm - The term to search for.
     * @returns {Promise<object>} A JSON object with the search results.
     * @async
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/ticket-management/search/#list-search-results}
     * @example
     * const results = await client.search.query('open tickets');
     */
    query(searchTerm: string): Promise<object>;
    /**
     * Search for the given term and retrieve all results.
     * @param {string} searchTerm - The term to search for.
     * @returns {Promise<Array>} An array of search results.
     * @async
     * @example
     * const allResults = await client.search.queryAll('open tickets');
     */
    queryAll(searchTerm: string): Promise<any[]>;
    /**
     * Anonymous search for the given term and retrieve results.
     * @param {string} searchTerm - The term to search for.
     * @returns {Promise<object>} A JSON object with the search results.
     * @async
     * @example
     * const anonResults = await client.search.queryAnonymous('open tickets');
     */
    queryAnonymous(searchTerm: string): Promise<object>;
    /**
     * Anonymous search for the given term and retrieve all results.
     * @param {string} searchTerm - The term to search for.
     * @returns {Promise<Array>} An array of search results.
     * @async
     * @example
     * const allAnonResults = await client.search.queryAnonymousAll('open tickets');
     */
    queryAnonymousAll(searchTerm: string): Promise<any[]>;
    /**
     * Retrieve the count of search results for the given term.
     * @param {string} searchTerm - The term to search for.
     * @returns {Promise<object>} An Object with the number of items matching the query.
     * @async
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/ticket-management/search/#show-results-count}
     * @example
     * const { count } = await client.search.showResultsCount('open tickets');
     */
    showResultsCount(searchTerm: string): Promise<object>;
    /**
     * Export the search results for the given term.
     * @param {string} searchTerm - The term to search for.
     * @param {string} objectType - The type of object to return (ticket, organization, user, or group).
     * @param {number} [pageSize=100] - The number of results per page.
     * @returns {Promise<Array>} An array of search results.
     * @async
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/ticket-management/search/#export-search-results}
     * @example
     * const { results } = await client.search.exportResults('open tickets', 'ticket');
     */
    exportResults(searchTerm: string, objectType: string, pageSize?: number): Promise<any[]>;
}
import { Client } from "../client";
