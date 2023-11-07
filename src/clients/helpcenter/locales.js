// Locales.js: Client for the zendesk help center API.
const {Client} = require('../client');
const {ApiTypes} = require('../../constants');

class Locales extends Client {
  constructor(options) {
    super(options, ApiTypes.helpcenter);
    this.jsonAPINames = ['locales', 'locale'];
  }

  // Listing Locales
  async list() {
    return this.getAll(['locales']);
  }
}

exports.Locales = Locales;
