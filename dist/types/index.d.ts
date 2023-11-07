export type ZendeskClientOptions = {
    /**
     * - Authentication token.
     */
    token?: string;
    /**
     * - Username for authentication.
     */
    username?: string;
    /**
     * - Subdomain for the Zendesk account (e.g., 'mycompany' for 'mycompany.zendesk.com'). If `endpointUri` is provided, this is ignored.
     */
    subdomain?: string;
    /**
     * - Type of Zendesk API (e.g., 'core', 'helpcenter'). Determines the sub-client to use.
     */
    apiType?: string[];
    /**
     * - Base URI for the Zendesk API. Overrides `subdomain` if provided.
     */
    endpointUri?: string;
    /**
     * - Function to retrieve specific options. Defaults to accessing properties from the options.
     */
    get?: Function;
    /**
     * - Indicates if OAuth is used.
     */
    oauth?: boolean;
    /**
     * - Optional header for requests on behalf of a user.
     */
    asUser?: string;
    /**
     * - Additional custom headers for the request.
     */
    customHeaders?: object;
    /**
     * - Enables request throttling.
     */
    throttle?: boolean;
    /**
     * - Enables or disables debug logging.
     */
    debug?: boolean;
    /**
     * - Logger for logging. Defaults to a basic console logger.
     */
    logger?: object;
    /**
     * - Configuration for custom transport.
     */
    transportConfig?: {
        transportFn?: Function;
        responseAdapter?: Function;
    };
};
/**
 * @typedef {object} ZendeskClientOptions
 * @property {string} [token] - Authentication token.
 * @property {string} [username] - Username for authentication.
 * @property {string} [subdomain] - Subdomain for the Zendesk account (e.g., 'mycompany' for 'mycompany.zendesk.com'). If `endpointUri` is provided, this is ignored.
 * @property {string[]} [apiType=['core']] - Type of Zendesk API (e.g., 'core', 'helpcenter'). Determines the sub-client to use.
 * @property {string} [endpointUri] - Base URI for the Zendesk API. Overrides `subdomain` if provided.
 * @property {Function} [get] - Function to retrieve specific options. Defaults to accessing properties from the options.
 * @property {boolean} [oauth] - Indicates if OAuth is used.
 * @property {string} [asUser] - Optional header for requests on behalf of a user.
 * @property {object} [customHeaders] - Additional custom headers for the request.
 * @property {boolean} [throttle] - Enables request throttling.
 * @property {boolean} [debug=false] - Enables or disables debug logging.
 * @property {object} [logger=ConsoleLogger] - Logger for logging. Defaults to a basic console logger.
 * @property {object} [transportConfig] - Configuration for custom transport.
 * @property {Function} [transportConfig.transportFn] - Custom request function. Defaults to `fetch`.
 * @property {Function} [transportConfig.responseAdapter] - Adapts the response from `transportFn`. Defaults to adapting for `fetch`.
 */
/**
 * Represents the main client to interface with the Zendesk API.
 * This class acts as a high-level interface, making it easier to interact with specific Zendesk APIs.
 * @class
 * @property {ZendeskClientOptions} config - Configuration options for the client.
 * @property {ConsoleLogger} logger - Logger for logging.
 */
export class ZendeskClient {
    /**
     * @constructs ZendeskClient
     * @param {ZendeskClientOptions} options - Configuration options for the client.
     * @example
     * const zendeskOptions = {
     *     username: 'exampleUser',
     *     token: 'exampleToken',
     *     subdomain: 'mycompany'
     * };
     * const zendeskClient = createClient(zendeskOptions);
     * const data = await zendeskClient.someResource.someMethod();
     */
    constructor(options?: ZendeskClientOptions);
    config: ZendeskClientOptions;
    logger: any;
    helpcenter: ZendeskClientHelpcenter;
    services: ZendeskClientServices;
    voice: ZendeskClientVoice;
    /**
     * @template {T} [T=import('./client/client.js').Client]
     * @param {new(options: ZendeskClientOptions) => T} ServiceClass - The service class to instantiate.
     * @returns {T} An instance of the service class.
     * @private
     */
    private _instantiate;
    /**
     * @private
     */
    private instances;
    get accountsettings(): import("./clients/core/accountsettings").AccountSettings;
    get activitystream(): import("./clients/core/activitystream").ActivityStream;
    get attachments(): import("./clients/core/attachments").Attachments;
    get automations(): import("./clients/core/automations").Automations;
    get brand(): import("./clients/core/brand").Brand;
    get customagentroles(): import("./clients/core/customagentroles").CustomAgentRoles;
    get dynamiccontent(): import("./clients/core/dynamiccontent").DynamicContent;
    get dynamiccontentvariants(): import("./clients/core/dynamiccontentvariants").DynamicContentVariants;
    get groupmemberships(): import("./clients/core/groupmemberships").GroupMemberships;
    get groups(): import("./clients/core/groups").Groups;
    get imports(): import("./clients/core/imports").Imports;
    get installations(): import("./clients/core/installations").Installations;
    get jobstatuses(): import("./clients/core/jobstatuses").JobStatuses;
    get locales(): import("./clients/core/locales").Locales;
    get macros(): import("./clients/core/macros").Macros;
    get oauthtokens(): import("./clients/core/oauthtokens").OauthTokens;
    get organizationfields(): import("./clients/core/organizationfields").OrganizationFields;
    get organizationmemberships(): import("./clients/core/organizationmemberships").OrganizationMemberships;
    get organizations(): import("./clients/core/organizations").Organizations;
    get permissiongroups(): import("./clients/core/permissiongroups").PermissionGroups;
    get policies(): import("./clients/core/policies").Policies;
    get requests(): import("./clients/core/requests").Requests;
    get satisfactionratings(): import("./clients/core/satisfactionratings").SatisfactionRatings;
    get search(): import("./clients/core/search").Search;
    get sessions(): import("./clients/core/sessions").Sessions;
    get sharingagreement(): import("./clients/core/sharingagreement").SharingAgreement;
    get suspendedtickets(): import("./clients/core/suspendedtickets").SuspendedTickets;
    get tags(): import("./clients/core/tags").Tags;
    get targets(): import("./clients/core/targets").Targets;
    get ticketaudits(): import("./clients/core/ticketaudits").TicketAudits;
    get ticketevents(): import("./clients/core/ticketevents").TicketEvents;
    get ticketexport(): import("./clients/core/ticketexport").TicketExport;
    get ticketfields(): import("./clients/core/ticketfields").TicketFields;
    get ticketforms(): import("./clients/core/ticketforms").TicketForms;
    get ticketimport(): import("./clients/core/ticketimport").TicketImport;
    get ticketmetrics(): import("./clients/core/ticketmetrics").TicketMetrics;
    get tickets(): import("./clients/core/tickets").Tickets;
    get triggers(): import("./clients/core/triggers").Triggers;
    get userfields(): import("./clients/core/userfields").UserFields;
    get useridentities(): import("./clients/core/useridentities").UserIdentities;
    get users(): import("./clients/core/users").Users;
    get views(): import("./clients/core/views").Views;
    get webhooks(): import("./clients/core/webhooks").Webhooks;
    get agentactivity(): import("./clients/voice/agentactivity").AgentActivity;
    get availabilities(): import("./clients/voice/availabilities").Availabilities;
    /**
     * @param {object} args - Arguments for debugging.
     * @private
     */
    private _debug;
}
/**
 * Creates and returns an instance of the ZendeskClient class.
 * @function
 * @param {ZendeskClientOptions} options - Configuration options for the Zendesk client.
 * @returns {ZendeskClient} An instance of the ZendeskClient class.
 */
export function createClient(options: ZendeskClientOptions): ZendeskClient;
import { ZendeskClientHelpcenter } from "./clients/helpcenter";
import { ZendeskClientServices } from "./clients/services";
import { ZendeskClientVoice } from "./clients/voice";
