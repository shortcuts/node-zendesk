// Locales.js: Client for the zendesk API.
const {Client} = require('../client');
const {ApiTypes} = require('../../constants');

class Locales extends Client {
  constructor(options) {
    super(options, ApiTypes.helpcenter);
    this.jsonAPINames = ['locales', 'locale'];
  }

  // Listing Locales
  async list(cb) {
    return this.getAll(['locales'], cb);
  }
}

exports.Locales = Locales;
