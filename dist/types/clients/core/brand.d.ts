/**
 * Class representing the Brand API endpoints.
 * @see {@link https://developer.zendesk.com/api-reference/ticketing/account-configuration/brands/}
 */
export class Brand extends Client {
    constructor(options: any);
    jsonAPINames: string[];
    /**
     * List all brands.
     * @returns {Promise<object>} The list of brands.
     * @async
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/account-configuration/brands/#list-brands}
     * @example const brands = await client.brands.list();
     */
    list(): Promise<object>;
    /**
     * Show a specific brand by ID.
     * @param {number} brandId - The ID of the brand.
     * @returns {Promise<object>} The brand details.
     * @async
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/account-configuration/brands/#show-a-brand}
     * @example const brand = await client.brands.show(47);
     */
    show(brandId: number): Promise<object>;
    /**
     * Create a new brand.
     * @param {object} brand - The brand data.
     * @returns {Promise<object>} The created brand details.
     * @async
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/account-configuration/brands/#create-brand}
     * @example const newBrand = await client.brands.create({name: "Brand 1", subdomain: "Brand1"});
     */
    create(brand: object): Promise<object>;
    /**
     * Update an existing brand.
     * @param {object} brand - The updated brand data.
     * @param {number} brandId - The ID of the brand to update.
     * @returns {Promise<object>} The updated brand details.
     * @async
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/account-configuration/brands/#update-a-brand}
     * @example const updatedBrand = await client.brands.update({name: "Updated Brand"}, 47);
     */
    update(brand: object, brandId: number): Promise<object>;
    /**
     * Delete a brand.
     * @param {number} brandId - The ID of the brand to delete.
     * @returns {Promise<object>} The deletion status.
     * @async
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/account-configuration/brands/#delete-a-brand}
     * @example await client.brands.delete(47);
     */
    delete(brandId: number): Promise<object>;
    /**
     * Check host mapping validity for a given subdomain and host mapping.
     * @param {string} hostMapping - The host mapping to check.
     * @param {string} subdomain - The subdomain to check.
     * @returns {Promise<object>} The check result.
     * @async
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/account-configuration/brands/#check-host-mapping-validity}
     * @example await client.brands.checkHostMapping("brand1.com", "brand1");
     */
    checkHostMapping(hostMapping: string, subdomain: string): Promise<object>;
    /**
     * Check host mapping validity for an existing brand.
     * @param {number} brandId - The ID of the brand to check.
     * @returns {Promise<object>} The check result.
     * @async
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/account-configuration/brands/#check-host-mapping-validity-for-an-existing-brand}
     * @example await client.brands.checkHostMappingForExistingBrand(47);
     */
    checkHostMappingForExistingBrand(brandId: number): Promise<object>;
}
import { Client } from "../client";
