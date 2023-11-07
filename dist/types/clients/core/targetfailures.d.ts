/**
 * A class for interacting with the Zendesk Target Failures API.
 * @see {@link https://developer.zendesk.com/api-reference/ticketing/targets/target_failures/}
 */
export class TargetFailures extends Client {
    constructor(options: any);
    jsonAPINames: string[];
    /**
     * Lists the 25 most recent target failures, per target.
     * @returns {Array} An array of target failures.
     * @async
     * @throws {Error} Throws an error if the request fails.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/targets/target_failures/#list-target-failures}
     * @example
     * const client = createClient({...});
     * const failures = await client.targetfailures.list();
     */
    list(): any[];
    /**
     * Retrieves the details of a specific target failure by its ID.
     * @param {number} targetFailureID - The ID of the target failure.
     * @returns {object} The target failure details.
     * @async
     * @throws {Error} Throws an error if the request fails or if the target failure ID is not found.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/targets/target_failures/#show-target-failure}
     * @example
     * const client = createClient({...});
     * const failureDetails = await client.targetfailures.show(6001326);
     */
    show(targetFailureID: number): object;
}
import { Client } from "../client";
