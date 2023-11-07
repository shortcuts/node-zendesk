export = JobMonitor;
declare class JobMonitor {
    constructor(options: any);
    client: import("../index").ZendeskClient;
    /**
     * Checks the status of a job.
     * @param {string} jobID - The ID of the job to monitor.
     * @returns {Promise<object>} - Promise resolving to the job status.
     */
    checkJobStatus(jobID: string): Promise<object>;
    /**
     * Continuously checks the status of a job using intervals and invokes a callback when the job status changes.
     * @param {string} jobID - The ID of the job to monitor.
     * @param {number} [interval=500] - The interval in milliseconds at which to check the job status.
     * @param {number} [maxAttempts=5] - The maximum number of attempts to check the job status.
     * @returns {Promise<object>} - Promise resolving to the job result.
     */
    monitorJobStatus(jobID: string, interval?: number, maxAttempts?: number): Promise<object>;
}
