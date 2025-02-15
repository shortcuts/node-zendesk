/**
 * @private
 */
class ZendeskClientHelpcenter {
  /**
   * @param {import('../../index.js').ZendeskClient} client - The Zendesk client instance.
   */
  constructor(client) {
    this.client = client;
  }

  /**
   * @template T
   * @param {new (options: import('../../index.js').ZendeskClientOptions) => T} className - The class to instantiate.
   * @returns {T} An instance of the provided class.
   * @private
   */
  _instantiate(className) {
    return this.client._instantiate(className);
  }

  get accesspolicies() {
    const {AccessPolicies} = require('./accesspolicies');
    return this._instantiate(AccessPolicies);
  }

  get articleattachments() {
    const {ArticleAttachments} = require('./articleattachments');
    return this._instantiate(ArticleAttachments);
  }

  get articlecomments() {
    const {ArticleComments} = require('./articlecomments');
    return this._instantiate(ArticleComments);
  }

  get articlelabels() {
    const {ArticleLabels} = require('./articlelabels');
    return this._instantiate(ArticleLabels);
  }

  get articles() {
    const {Articles} = require('./articles');
    return this._instantiate(Articles);
  }

  get categories() {
    const {Categories} = require('./categories');
    return this._instantiate(Categories);
  }

  get locales() {
    const {Locales} = require('./locales');
    return this._instantiate(Locales);
  }

  get posts() {
    const {Posts} = require('./posts');
    return this._instantiate(Posts);
  }

  get search() {
    const {Search} = require('./search');
    return this._instantiate(Search);
  }

  get sections() {
    const {Sections} = require('./sections');
    return this._instantiate(Sections);
  }

  get subscriptions() {
    const {Subscriptions} = require('./subscriptions');
    return this._instantiate(Subscriptions);
  }

  get translations() {
    const {Translations} = require('./translations');
    return this._instantiate(Translations);
  }

  get usersegments() {
    const {UserSegments} = require('./usersegments');
    return this._instantiate(UserSegments);
  }

  get votes() {
    const {Votes} = require('./votes');
    return this._instantiate(Votes);
  }
}

module.exports = {ZendeskClientHelpcenter};
