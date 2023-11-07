/**
 * @private
 */
class ZendeskClientCommunity {
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

  get posts() {
    const {Posts} = require('./posts');
    return this._instantiate(Posts);
  }
}

module.exports = {ZendeskClientCommunity};
