/**
 * @readonly
 * @enum {string}
 */
const ApiTypes = {
  community: 'community',
  core: 'core',
  helpcenter: 'helpcenter',
  services: 'services',
  voice: 'voice',
};

/**
 * @type {Record<ApiTypes, string>}
 * @readonly
 */
const Endpoints = {
  community: '.zendesk.com/api/v2/community',
  core: '.zendesk.com/api/v2',
  helpcenter: '.zendesk.com/api/v2/help_center',
  services: '.zendesk.com/api/services/jira',
  voice: '.zendesk.com/api/v2/channels/voice',
};

module.exports = {ApiTypes, Endpoints};
