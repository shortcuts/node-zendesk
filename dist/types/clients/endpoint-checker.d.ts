/**
 * A class responsible for checking if given endpoints support cursor pagination.
 *
 * This class provides utility methods to check if certain endpoints
 * are supported based on regex patterns. It prepares and utilizes a
 * set of regex patterns derived from a static list of endpoint strings.
 */
export class EndpointChecker {
    /**
     * @type {Set<string>}
     * A set containing the supported endpoints.
     * @private
     * @see {@link https://support.zendesk.com/hc/en-us/articles/5591904358938-New-limits-for-offset-based-pagination }
     */
    private SUPPORTED_ENDPOINTS;
    /**
     * @type {Set<RegExp>}
     * A set containing the regex patterns derived from the supported endpoints.
     * @private
     */
    private SUPPORTED_REGEXES;
    /**
     * Initializes the SUPPORTED_REGEXES set by converting each endpoint
     * in SUPPORTED_ENDPOINTS into its corresponding regex pattern.
     * @private
     */
    private _initSupportedRegexes;
    /**
     * Checks if the given endpoint supports cursor pagination.
     * @param {string} endpoint - The endpoint string to be checked.
     * @returns {boolean} - Returns true if the endpoint supports cursor pagination, otherwise false.
     */
    supportsCursorPagination(endpoint: string): boolean;
}
