/**
 * Class representing the OrganizationFields API endpoints.
 * @see {@link https://developer.zendesk.com/api-reference/ticketing/organizations/organization_fields/}
 */
export class OrganizationFields extends Client {
    constructor(options: any);
    jsonAPINames: string[];
    /**
     * List all organization fields.
     * @returns {Promise<object>} The organization fields.
     * @async
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/organizations/organization_fields/#list-organization-fields}
     * @example const orgFields = await client.organizationfields.list();
     */
    list(): Promise<object>;
    /**
     * Show a specific organization field.
     * @param {number} organizationFieldID - The ID of the organization field.
     * @returns {Promise<object>} The organization field details.
     * @async
     * @throws {Error} Throws an error if the organization field is not found.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/organizations/organization_fields/#show-organization-field}
     * @example const orgField = await client.organizationfields.show(12345);
     */
    show(organizationFieldID: number): Promise<object>;
    /**
     * Create a new organization field.
     * @param {object} organizationField - The organization field object.
     * @returns {Promise<object>} The newly created organization field.
     * @async
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/organizations/organization_fields/#create-organization-field}
     * @example const newOrgField = await client.organizationfields.create({ type: 'text', title: 'Support description' });
     */
    create(organizationField: object): Promise<object>;
    /**
     * Update an existing organization field.
     * @param {number} organizationFieldID - The ID of the organization field to update.
     * @param {object} organizationField - The updated organization field object.
     * @returns {Promise<object>} The updated organization field.
     * @async
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/organizations/organization_fields/#update-organization-field}
     * @example const updatedOrgField = await client.organizationfields.update(12345, { title: 'New title' });
     */
    update(organizationFieldID: number, organizationField: object): Promise<object>;
    /**
     * Delete an organization field.
     * @param {number} organizationFieldID - The ID of the organization field to delete.
     * @returns {Promise<object>} Response indicating the deletion status.
     * @async
     * @throws {Error} Throws an error if the deletion fails.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/organizations/organization_fields/#delete-organization-field}
     * @example await client.organizationfields.delete(12345);
     */
    delete(organizationFieldID: number): Promise<object>;
    /**
     * Reorder the organization fields.
     * @param {Array<number>} organizationFieldIds - An array of organization field IDs in the desired order.
     * @returns {Promise<object>} The reordered organization fields.
     * @async
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/organizations/organization_fields/#reorder-organization-field}
     * @example await client.organizationfields.reorder([3, 4]);
     */
    reorder(organizationFieldIds: Array<number>): Promise<object>;
}
import { Client } from "../client";
