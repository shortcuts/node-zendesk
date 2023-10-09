// Locales.js: Client for the zendesk API.
const {Client} = require('../client');

class Locales extends Client {
  constructor(options) {
    super(options);
    this.jsonAPINames = ['locales', 'locale'];
  }

  // Listing Locales
  async list() {
    return this.getAll(['locales']);
  }
}

exports.Locales = Locales;
