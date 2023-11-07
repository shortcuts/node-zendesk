/**
 * @private
 */
export class ZendeskClientCommunity {
    /**
     * @param {import('../../index.js').ZendeskClient} client - The Zendesk client instance.
     */
    constructor(client: import('../../index.js').ZendeskClient);
    client: import("../../index.js").ZendeskClient;
    /**
     * @template T
     * @param {new (options: import('../../index.js').ZendeskClientOptions) => T} className - The class to instantiate.
     * @returns {T} An instance of the provided class.
     * @private
     */
    private _instantiate;
    get posts(): import("./posts").Posts;
}
