/**
 * Client class for interacting with the Zendesk Organization Memberships API.
 * @see {@link https://developer.zendesk.com/api-reference/ticketing/organizations/organization_memberships/}
 */
export class OrganizationMemberships extends Client {
    constructor(options: any);
    jsonAPINames: string[];
    /**
     * List all organization memberships.
     * @returns {Promise<object[]>} A promise resolving to an array of organization memberships.
     * @async
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/organizations/organization_memberships/#list-memberships}
     * @example
     * const memberships = await client.organizationmemberships.list();
     */
    list(): Promise<object[]>;
    /**
     * List organization memberships by a specific user ID.
     * @param {number} userID - The user ID.
     * @returns {Promise<object[]>} A promise resolving to an array of organization memberships for the user.
     * @async
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/organizations/organization_memberships/#list-memberships}
     * @example
     * const memberships = await client.organizationmemberships.listByUser(123);
     */
    listByUser(userID: number): Promise<object[]>;
    /**
     * List organization memberships by a specific organization ID.
     * @param {number} organiationID - The organization ID.
     * @returns {Promise<object[]>} A promise resolving to an array of organization memberships for the organization.
     * @async
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/organizations/organization_memberships/#list-memberships}
     * @example
     * const memberships = await client.organizationmemberships.listByOrganization(456);
     */
    listByOrganization(organiationID: number): Promise<object[]>;
    /**
     * Retrieve a specific organization membership by its ID.
     * @param {number} organizationMembershipID - The organization membership ID.
     * @returns {Promise<object>} A promise resolving to the organization membership.
     * @async
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/organizations/organization_memberships/#show-membership}
     * @example
     * const membership = await client.organizationmemberships.show(789);
     */
    show(organizationMembershipID: number): Promise<object>;
    /**
     * Retrieve a specific organization membership by user ID and membership ID.
     * @param {number} userID - The user ID.
     * @param {number} organizationMembershipID - The organization membership ID.
     * @returns {Promise<object>} A promise resolving to the organization membership.
     * @async
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/organizations/organization_memberships/#show-membership}
     * @example
     * const membership = await client.organizationmemberships.showByUser(123, 789);
     */
    showByUser(userID: number, organizationMembershipID: number): Promise<object>;
    /**
     * Create a new organization membership.
     * @param {object} organizationMembership - The organization membership data.
     * @returns {Promise<object>} A promise resolving to the created organization membership.
     * @async
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/organizations/organization_memberships/#create-membership}
     * @example
     * const newMembership = await client.organizationmemberships.create({ user_id: 123, organization_id: 456 });
     */
    create(organizationMembership: object): Promise<object>;
    /**
     * Create a new organization membership for a specific user.
     * @param {number} userID - The user ID.
     * @param {object} organizationMembership - The organization membership data.
     * @returns {Promise<object>} A promise resolving to the created organization membership.
     * @async
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/organizations/organization_memberships/#create-membership}
     * @example
     * const newMembership = await client.organizationmemberships.createByUser(123, { organization_id: 456 });
     */
    createByUser(userID: number, organizationMembership: object): Promise<object>;
    /**
     * An object that relates a Zendesk user to a Zendesk organization.
     * @typedef {object} OrganizationMembership
     * @property {number} user_id The Zendesk identifier of the user.
     * @property {number} organization_id The Zendesk identifier of the
     *   organization.
     */
    /**
     * Create multiple organization memberships at once.
     * @param {OrganizationMembership[]} organizationMemberships - An array of organization membership data.
     * @returns {Promise<object>} A promise resolving to a job status.
     * @async
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/organizations/organization_memberships/#create-many-memberships}
     * @example
     * const jobStatus = await client.organizationmemberships.createMany([{ user_id: 123, organization_id: 456 }, ...]);
     */
    createMany(organizationMemberships: {
        /**
         * The Zendesk identifier of the user.
         */
        user_id: number;
        /**
         * The Zendesk identifier of the
         * organization.
         */
        organization_id: number;
    }[]): Promise<object>;
    /**
     * Delete a specific organization membership by its ID.
     * @param {number} organizationMembershipID - The organization membership ID.
     * @returns {Promise<void>} A promise indicating the completion of the delete operation.
     * @async
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/organizations/organization_memberships/#delete-membership}
     * @example
     * await client.organizationmemberships.delete(789);
     */
    delete(organizationMembershipID: number): Promise<void>;
    /**
     * Delete a specific organization membership by user ID and membership ID.
     * @param {number} userID - The user ID.
     * @param {number} organizationMembershipID - The organization membership ID.
     * @returns {Promise<void>} A promise indicating the completion of the delete operation.
     * @async
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/organizations/organization_memberships/#delete-membership}
     * @example
     * await client.organizationmemberships.deleteByUser(123, 789);
     */
    deleteByUser(userID: number, organizationMembershipID: number): Promise<void>;
    /**
     * Delete multiple organization memberships by their IDs.
     * @param {number[]} organizationMembershipIDs - An array of organization membership IDs.
     * @returns {Promise<object>} A promise resolving to a job status.
     * @async
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/organizations/organization_memberships/#bulk-delete-memberships}
     * @example
     * const jobStatus = await client.organizationmemberships.deleteMany([789, 790, 791]);
     */
    deleteMany(organizationMembershipIDs: number[]): Promise<object>;
    /**
     * Set a specific organization membership as the default for a user.
     * @param {number} userID - The user ID.
     * @param {number} organizationMembershipID - The organization membership ID.
     * @returns {Promise<object>} A promise resolving to the updated organization membership.
     * @async
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/organizations/organization_memberships/#set-membership-as-default}
     * @example
     * const updatedMembership = await client.organizationmemberships.setDefault(123, 789);
     */
    makeDefault(userID: number, organizationMembershipID: number): Promise<object>;
}
import { Client } from "../client";
