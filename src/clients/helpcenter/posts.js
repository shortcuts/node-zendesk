// Locales.js: Client for the zendesk API.
const {Client} = require('../client');
const {ApiTypes} = require('../../constants');

class Posts extends Client {
  constructor(options) {
    super(options, ApiTypes.helpcenter);
    this.jsonAPINames = ['posts', 'post'];
  }

  // Listing Posts
  async list(cb) {
    return this.getAll(['posts'], cb);
  }
}

exports.Posts = Posts;
