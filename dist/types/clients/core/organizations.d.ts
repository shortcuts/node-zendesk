/**
 * @class
 * @description Client for interacting with the Zendesk Organizations API.
 * @see {@link https://developer.zendesk.com/api-reference/ticketing/organizations/organizations/}
 */
export class Organizations extends Client {
    constructor(options: any);
    jsonAPINames: string[];
    /**
     * @description Lists all organizations.
     * @returns {Promise<object>} The list of organizations.
     * @async
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/organizations/organizations/#list-organizations}
     * @example const organizations = await client.organizations.list();
     */
    list(): Promise<object>;
    /**
     * @description Lists organizations associated with a specific user.
     * @param {number} userID - The ID of the user.
     * @returns {Promise<object[]>} List of organizations associated with the user.
     * @async
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/organizations/organizations/#list-organizations}
     * @example const userOrgs = await client.organizations.listByUser(12345);
     */
    listByUser(userID: number): Promise<object[]>;
    /**
     * @description Counts the number of organizations.
     * @returns {Promise<number>} Number of organizations.
     * @async
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/organizations/organizations/#count-organizations}
     * @example const orgCount = await client.organizations.count();
     */
    count(): Promise<number>;
    /**
     * @description Counts the number of organizations associated with a specific user.
     * @param {number} userID - The ID of the user.
     * @returns {Promise<number>} Number of organizations associated with the user.
     * @async
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/organizations/organizations/#count-organizations}
     * @example const userOrgCount = await client.organizations.countByUser(12345);
     */
    countByUser(userID: number): Promise<number>;
    /**
     * @description Retrieves related information for a specific organization.
     * @param {number} organizationID - The ID of the organization.
     * @returns {Promise<object>} Object containing related information of the organization.
     * @async
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/organizations/organizations/#show-organizations-related-information}
     * @example const relatedInfo = await client.organizations.related(12345);
     */
    related(organizationID: number): Promise<object>;
    /**
     * @description Views a specific organization by its ID.
     * @param {number} organizationID - The ID of the organization.
     * @returns {Promise<object>} The organization's details.
     * @async
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/organizations/organizations/#show-organization}
     * @example const organization = await client.organizations.show(12345);
     */
    show(organizationID: number): Promise<object>;
    /**
     * @description Retrieves details of multiple organizations based on their IDs.
     * @param {number[]} organizationIDs - Array of organization IDs.
     * @returns {Promise<object[]>} List of organizations' details.
     * @async
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/organizations/organizations/#show-many-organizations}
     * @example const orgDetails = await client.organizations.showMany([12345, 67890]);
     */
    showMany(organizationIDs: number[]): Promise<object[]>;
    /**
     * @description Retrieves details of multiple organizations based on their External IDs.
     * @param {string[]} externalOrganizationIds - Array of organization IDs.
     * @returns {Promise<object[]>} List of organizations' details.
     * @async
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/organizations/organizations/#show-many-organizations}
     * @example const orgDetails = await client.organizations.showMany(['12345', '67890']);
     */
    showManyByExternalIds(externalOrganizationIds: string[]): Promise<object[]>;
    /**
     * @description Creates a new organization.
     * @param {object} organization - The organization object to create.
     * @returns {Promise<object>} The created organization's details.
     * @async
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/organizations/organizations/#create-organization}
     * @example const newOrganization = await client.organizations.create({ name: 'New Org' });
     */
    create(organization: object): Promise<object>;
    /**
     * @description Creates multiple organizations.
     * @param {object[]} organizations - An array of organization objects to create.
     * @returns {Promise<object>} Details of the created organizations.
     * @async
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/organizations/organizations/#create-many-organizations}
     * @example const newOrganizations = await client.organizations.createMany([{ name: 'Org1' }, { name: 'Org2' }]);
     */
    createMany(organizations: object[]): Promise<object>;
    /**
     * @description Creates or updates an organization.
     * @param {object} organization - The organization object to create or update.
     * @returns {Promise<object>} The created or updated organization's details.
     * @async
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/organizations/organizations/#create-or-update-organization}
     * @example const org = await client.organizations.createOrUpdate({ id: 12345, name: 'Updated Name' });
     */
    createOrUpdate(organization: object): Promise<object>;
    /**
     * @description Updates a specific organization by its ID.
     * @param {number} organizationID - The ID of the organization.
     * @param {object} organization - The updated organization object.
     * @returns {Promise<object>} The updated organization's details.
     * @async
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/organizations/organizations/#update-organization}
     * @example const updatedOrganization = await client.organizations.update(12345, { name: 'New Name' });
     */
    update(organizationID: number, organization: object): Promise<object>;
    /**
     * @description Updates multiple organizations.
     * @param {object[]} organizations - An array of organization objects to update.
     * @returns {Promise<object>} Details of the updated organizations.
     * @async
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/organizations/organizations/#update-many-organizations}
     * @example const updatedOrganizations = await client.organizations.updateMany([{ id: 1, name: 'Updated Org1' }, { id: 2, name: 'Updated Org2' }]);
     */
    updateMany(organizations: object[]): Promise<object>;
    /**
     * @description Creates or updates an organization, similar to `createOrUpdate` method.
     * @param {object} organization - The organization object to upsert.
     * @returns {Promise<object>} The created or updated organization's details.
     * @async
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/organizations/organizations/#create-or-update-organization}
     * @example const org = await client.organizations.upsert({ id: 12345, name: 'Upserted Name' });
     */
    upsert(organization: object): Promise<object>;
    /**
     * @description Deletes a specific organization by its ID.
     * @param {number} organizationID - The ID of the organization to delete.
     * @returns {Promise<void>}
     * @async
     * @throws {Error} Throws an error if deletion fails.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/organizations/organizations/#delete-organization}
     * @example await client.organizations.delete(12345);
     */
    delete(organizationID: number): Promise<void>;
    /**
     * @description Deletes multiple organizations based on their IDs.
     * @param {number[]} organizationIds - Array of organization IDs.
     * @returns {Promise<object>} Returns a job status JSON object.
     * @async
     * @throws {Error} Throws an error if deletion fails.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/organizations/organizations/#bulk-delete-organizations}
     * @example await client.organizations.bulkDelete([12345, 67890]);
     */
    bulkDelete(organizationIds: number[]): Promise<object>;
    /**
     * @description Deletes multiple organizations based on their external IDs.
     * @param {string[]} organizationExternalIds - Array of organization external IDs.
     * @returns {Promise<object>} Returns a job status JSON object.
     * @async
     * @throws {Error} Throws an error if deletion fails.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/organizations/organizations/#bulk-delete-organizations}
     * @example await client.organizations.bulkDeleteByExternalId(['ext-12345', 'ext-67890']);
     */
    bulkDeleteByExternalId(organizationExternalIds: string[]): Promise<object>;
    /**
     * @description Searches organizations based on external ID.
     * @param {number} externalID - Search by externalID.
     * @returns {Promise<object[]>} List of organizations matching the search.
     * @async
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/organizations/organizations/#search-organizations-by-external-id}
     * @example const foundOrganizations = await client.organizations.search(1234);
     */
    search(externalID: number): Promise<object[]>;
    /**
     * @description Autocompletes organization names based on provided parameters.
     * @param {object} parameters - Parameters for autocomplete.
     * @returns {Promise<object[]>} List of organizations matching the autocomplete.
     * @async
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/organizations/organizations/#autocomplete-organizations}
     * @example const autocompleteResults = await client.organizations.autocomplete({ name: 'Test' });
     */
    autocomplete(parameters: object): Promise<object[]>;
    /**
     * @description Incrementally exports organizations with an include parameter.
     * @param {string|Date} startTime - Start time for incremental export.
     * @param {string} include - Data to include in the export.
     * @returns {Promise<object[]>} List of organizations in the incremental export.
     * @async
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/ticket-management/incremental_exports/#incremental-organization-export}
     * @example const exportedOrganizations = await client.organizations.incrementalInclude('2023-01-01T12:00:00Z', 'users');
     */
    incrementalInclude(startTime: string | Date, include: string): Promise<object[]>;
    /**
     * @description Incrementally exports organizations.
     * @param {string|Date} startTime - Start time for incremental export.
     * @returns {Promise<object[]>} List of organizations in the incremental export.
     * @async
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/ticket-management/incremental_exports/#incremental-organization-export}
     * @example const exportedOrganizations = await client.organizations.incremental('2023-01-01T12:00:00Z');
     */
    incremental(startTime: string | Date): Promise<object[]>;
    /**
     * @description Fetches a sample of incremental organization exports.
     * @param {string|Date} startTime - Start time for the sample.
     * @returns {Promise<object[]>} Sample list of organizations in the incremental export.
     * @async
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/ticket-management/incremental_exports/#incremental-sample-export}
     * @example const sampleExportedOrganizations = await client.organizations.incrementalSample('2023-01-01T12:00:00Z');
     */
    incrementalSample(startTime: string | Date): Promise<object[]>;
}
import { Client } from "../client";
