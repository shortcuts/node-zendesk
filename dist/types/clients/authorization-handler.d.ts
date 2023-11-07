/**
 * Handles the creation of authorization headers based on the provided configuration.
 * Supports both OAuth and Basic Authentication methods.
 */
export class AuthorizationHandler {
    /**
     * Creates a new instance of the AuthorizationHandler.
     * @param {Map} options - A Map object containing the necessary configuration options.
     */
    constructor(options: Map<any, any>);
    options: Map<any, any>;
    /**
     * Determines the authentication method and creates the appropriate authorization header.
     * @returns {string} The resulting authorization header string.
     */
    createAuthorizationHeader(): string;
    /**
     * Checks if OAuth should be used for authentication.
     * @returns {boolean} True if OAuth is the chosen method; false otherwise.
     */
    isOAuth(): boolean;
    /**
     * Creates the OAuth authorization header.
     * @returns {string} The OAuth authorization header.
     * @throws {Error} When the token is missing in the options.
     */
    createOAuthHeader(): string;
    /**
     * Creates the Basic Authentication authorization header.
     * @returns {string} The Basic Authentication header.
     * @throws {Error} When username or password/token is missing in the options.
     */
    createBasicAuthHeader(): string;
    /**
     * Retrieves the password or token for Basic Authentication.
     * The method first checks for a password and if none is found, it fetches the token.
     * @returns {string} The password or token prefixed with the appropriate separator.
     */
    getPasswordOrToken(): string;
    /**
     * Encodes the provided credentials using base64 encoding.
     * @param {string} credentials - The credentials to be encoded.
     * @returns {string} The base64 encoded string of the provided credentials.
     */
    encodeCredentials(credentials: string): string;
}
