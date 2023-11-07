export type ClientOptions = {
    /**
     * - Subdomain for the Zendesk instance.
     */
    subdomain: string;
    /**
     * - Password for authentication.
     */
    password?: string;
    /**
     * - Token for authentication.
     */
    token?: string;
    /**
     * - Flag to indicate if OAuth is used.
     */
    useOAuth?: boolean;
    /**
     * - Username for authentication.
     */
    username?: string;
    /**
     * - Optional header for making requests on behalf of a user.
     */
    asUser?: string;
    /**
     * - Any additional custom headers for the request.
     */
    customHeaders?: object;
    /**
     * - Flag to enable throttling of requests.
     */
    throttle?: boolean;
    /**
     * - Event target to handle custom events.
     */
    eventTarget: CustomEventTarget;
    /**
     * - Array to handle side-loaded resources.
     */
    sideLoad: any[];
    /**
     * - Array to hold names used in the JSON API.
     */
    jsonAPINames: any[];
};
/**
 * @typedef {object} ClientOptions
 * @property {string} subdomain - Subdomain for the Zendesk instance.
 * @property {string} [password] - Password for authentication.
 * @property {string} [token] - Token for authentication.
 * @property {boolean} [useOAuth] - Flag to indicate if OAuth is used.
 * @property {string} [username] - Username for authentication.
 * @property {string} [asUser] - Optional header for making requests on behalf of a user.
 * @property {object} [customHeaders] - Any additional custom headers for the request.
 * @property {boolean} [throttle] - Flag to enable throttling of requests.
 * @property {CustomEventTarget} eventTarget - Event target to handle custom events.
 * @property {Array} sideLoad - Array to handle side-loaded resources.
 * @property {Array} jsonAPINames - Array to hold names used in the JSON API.
 */
/**
 * Represents a client to interact with the Zendesk API, providing functionalities to make various types of requests.
 * This client handles request construction, response processing, event emission, and more.
 * @class
 * @property {ClientOptions} options - Configuration options for the client.
 * @property {Array} sideLoad - Array to handle side-loaded resources.
 * @property {string} userAgent - User agent for the client.
 * @property {Array} jsonAPINames - Array to hold names used in the JSON API.
 * @property {ApiTypes} apiType - Type of Zendesk API to initialize (e.g., 'core', 'helpcenter').
 * @property {CustomEventTarget} eventTarget - Event target to handle custom events.
 * @property {Transporter} transporter - Transporter for making requests.
 */
export class Client {
    /**
     * @constructs Client
     * @param {ClientOptions} options - Configuration options for the client.
     * @param {ApiTypes} apiType - Type of Zendesk API to initialize (e.g., 'core', 'helpcenter').
     */
    constructor(options: ClientOptions, apiType: ApiTypes);
    options: ClientOptions & {
        get: (key: string) => any;
    };
    sideLoad: any[];
    jsonAPINames: any[];
    userAgent: string;
    eventTarget: CustomEventTarget;
    get transporter(): Transporter;
    _transporter: Transporter;
    emit(eventType: any, eventData: any): void;
    on(eventType: any, callback: any): void;
    /**
     * Helper method to build client options.
     * @param {ClientOptions} options - Client configuration options.
     * @param {ApiTypes} apiType - Type of Zendesk API.
     * @returns {ClientOptions & {get: (key: string) => any}} - Built client options.
     * @private
     */
    private _buildOptions;
    /**
     * Helper method to get the endpoint URI.
     * @param {string} subdomain - The subdomain for the Zendesk instance.
     * @param {ApiTypes} apiType - Type of Zendesk API.
     * @returns {string} - The endpoint URI.
     * @private
     */
    private _getEndpointUri;
    setSideLoad(array: any): void;
    get(resource: any): Promise<{
        response: any;
        result: any;
    }>;
    /**
     * Patches a resource.
     * @param {...any} args - The resources or parts of the resource path followed by the body.
     * @returns {Promise<void|object>} - Either void or response object
     */
    patch(...args: any[]): Promise<void | object>;
    put(resource: any, body: any): Promise<{
        response: any;
        result: any;
    }>;
    post(resource: any, body: any): Promise<{
        response: any;
        result: any;
    }>;
    /**
     * Deletes a resource.
     * @param {...any} args - The resources or parts of the resource path.
     * @returns {Promise<void|object>} - Either void or response object
     */
    delete(...args: any[]): Promise<void | object>;
    getAll(resource: any, cb: any): Promise<any[]>;
    _rawRequest(method: any, uri: any, ...args: any[]): Promise<{
        response: any;
        result: {};
    }>;
    /**
     * @template T
     * @type {object} ApiResponse<T>
     * @property {object} response - Response object from the request.
     * @property {T} result - Result object from the request.
     */
    /**
     * Request method that handles various HTTP methods.
     * @template T
     * @param {string} method - HTTP method (e.g., 'GET', 'POST').
     * @param {string} uri - The URI for the request.
     * @param {...any} args - Additional arguments for the request.
     * @returns {Promise<{response: any, result: T}>} - The API response.
     */
    request<T>(method: string, uri: string, ...args: any[]): Promise<{
        response: any;
        result: T;
    }>;
    requestAll(method: any, uri: any, cb: any, ...args: any[]): Promise<any[]>;
    requestUpload(uri: any, file: any): Promise<any>;
}
import { CustomEventTarget } from "./custom-event-target";
import { Transporter } from "./transporter";
import { ApiTypes } from "../constants";
