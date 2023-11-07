/**
 * Flattens a nested array to a single-level array.
 * @param {Array} array - The array to be flattened.
 * @returns {Array} - A new array containing all elements from the input array,
 *                   with any nested arrays recursively flattened to a single level.
 */
export function flatten(array: any[]): any[];
/**
 * Constructs a URL based on the provided `method`, `uri`, and pre-defined settings within the context.
 *
 * The function prioritizes query parameters from `self.options.get('query')` over other sources.
 * If `uri` is an array, the last element can be an object representing query parameters or a query string.
 * If the `uri` is a string, it's treated as the URL's endpoint path.
 *
 * The function also utilizes `self.sideLoad` to include side-loaded resources if available.
 * Any conflict in query parameters is resolved with `query` taking the highest priority, followed by `sideLoad`, and then the provided `uri`.
 * @param {object} self - The context containing options and side-loading settings.
 * @param {string} method - The HTTP method. Can be "GET", "PATCH", "POST", "PUT", or "DELETE".
 * @param {Array<string | object>} [uri] - An array representing the URL segments. The last element can be an object of query parameters or a query string.
 *   @property {Map} options - A map-like object with settings. Specifically used to retrieve 'endpointUri' and 'query'.
 *   @property {Array<string>} [sideLoad] - An array of resources to side-load. It gets converted into a query parameter format.
 * @returns {string} The assembled URL.
 * @throws Will throw an error if `self.options` does not implement the 'get' method.
 * @example
 * const context = {
 *   options: new Map([['endpointUri', 'http://api.example.com'], ['query', { page: { size: 100 } }]]),
 *   sideLoad: ['comments', 'likes']
 * };
 * assembleUrl(context, 'GET', ['users', 'list', '?foo=bar']);
 * // Expected: "http://api.example.com/users/list.json?foo=bar&include=comments,likes&page[size]=100"
 */
export function assembleUrl(self: object, method: string, uri?: Array<string | object>): string;
/**
 * Checks the response and result from a request and returns an error or the result.
 * @param {object} response - The HTTP response object.
 * @param {object} result - The result data from the request.
 * @returns {object} - The result or an error object.
 */
export function checkRequestResponse(response: object, result: object): object;
/**
 * Processes the body of the response based on the result and context.
 * @param {object} result_ - The result data.
 * @param {object} self - The context containing additional settings.
 * @returns {object} - The processed body of the response.
 */
export function processResponseBody(result_: object, self: object): object;
/**
 * Generates a user agent string based on the package version and node version.
 * @returns {string} - The generated user agent string.
 */
export function generateUserAgent(): string;
