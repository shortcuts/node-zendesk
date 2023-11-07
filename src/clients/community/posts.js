// Posts.js: Client for the zendesk help center API.
const {Client} = require('../client');
const {ApiTypes} = require('../../constants');

class Posts extends Client {
  constructor(options) {
    super(options, ApiTypes.community);
    this.jsonAPINames = ['posts', 'post'];

    this.sideLoadMap = [{field: 'topic_id', name: 'topic', dataset: 'topics'}];
  }

  // Listing Posts
  async list(cb) {
    return this.getAll(['posts'], cb);
  }
}

exports.Posts = Posts;
