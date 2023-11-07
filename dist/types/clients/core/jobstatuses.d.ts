/**
 * Represents the Job Statuses in Zendesk. A status record is created when somebody kicks off a job
 * such as updating multiple tickets.
 * @see {@link https://developer.zendesk.com/api-reference/ticketing/ticket-management/job_statuses/} for the API documentation.
 */
export class JobStatuses extends Client {
    constructor(options: any);
    jsonAPINames: string[];
    /**
     * Retrieves a list of job statuses.
     * @returns {Promise<Array<object>>} - A promise that resolves to a list of job statuses.
     * @async
     * @throws {Error} If there's an error in the request.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/ticket-management/job_statuses/#list-job-statuses} for the API endpoint documentation.
     * @example
     * const jobStatusList = await client.jobstatuses.list();
     */
    list(): Promise<Array<object>>;
    /**
     * Retrieves the status of a background job.
     * @param {string} jobStatusID - The ID of the Job status.
     * @returns {Promise<object>} - A promise that resolves to the job status data.
     * @async
     * @throws {Error} If the job status ID is not provided or if there's an error in the request.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/ticket-management/job_statuses/#show-job-status} for the API endpoint documentation.
     * @example
     * const jobStatus = await client.jobstatuses.show("dd9321f29967688b27bc9499ebb4ae8d");
     */
    show(jobStatusID: string): Promise<object>;
    /**
     * Retrieves the statuses of multiple background jobs.
     * @param {Array<string>} jobStatusIDs - An array of job status IDs.
     * @returns {Promise<Array<object>>} - A promise that resolves to a list of job statuses.
     * @async
     * @throws {Error} If the job status IDs are not provided or if there's an error in the request.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/ticket-management/job_statuses/#show-many-job-statuses} for the API endpoint documentation.
     * @example
     * const jobStatuses = await client.jobstatuses.showMany(["dd9321f29967688b27bc9499ebb4ae8d", "82de0b044094f0c67893ac9fe64f1a99"]);
     */
    showMany(jobStatusIDs: Array<string>): Promise<Array<object>>;
    /**
     * Monitors a specific job until it's completed, based on a provided interval and maximum number of attempts.
     * @param {string} jobID - The ID of the job to watch.
     * @param {number} interval - The time (in milliseconds) to wait between each check.
     * @param {number} maxAttempts - The maximum number of attempts to check the job status.
     * @returns {Promise<object>} - A promise that resolves with the job status when the job is completed or the maximum attempts are reached.
     * @async
     * @throws {Error} If there's an error in the request or if the maximum attempts are reached without the job completing.
     * @example
     * await client.jobstatuses.watch("dd9321f29967688b27bc9499ebb4ae8d", 1000, 5);
     */
    watch(jobID: string, interval: number, maxAttempts: number): Promise<object>;
}
import { Client } from "../client";
