/**
 * @private
 */
export class ZendeskClientVoice {
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
    get currentqueueactivity(): import("./currentqueueactivity").CurrentQueueActivity;
    get greetingcategories(): import("./greetingcategories").GreetingCategories;
    get greetings(): import("./greetings").Greetings;
    get historicalqueueactivity(): import("./historicalqueueactivity").HistoricalQueueActivity;
    get phonenumbers(): import("./phonenumbers").PhoneNumbers;
}
