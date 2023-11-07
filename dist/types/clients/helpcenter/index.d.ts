/**
 * @private
 */
export class ZendeskClientHelpcenter {
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
    get accesspolicies(): import("./accesspolicies").AccessPolicies;
    get articleattachments(): import("./articleattachments").ArticleAttachments;
    get articlecomments(): import("./articlecomments").ArticleComments;
    get articlelabels(): import("./articlelabels").ArticleLabels;
    get articles(): import("./articles").Articles;
    get categories(): import("./categories").Categories;
    get locales(): import("./locales").Locales;
    get search(): import("./search").Search;
    get sections(): import("./sections").Sections;
    get subscriptions(): import("./subscriptions").Subscriptions;
    get translations(): import("./translations").Translations;
    get usersegments(): import("./usersegments").UserSegments;
    get votes(): import("./votes").Votes;
}
