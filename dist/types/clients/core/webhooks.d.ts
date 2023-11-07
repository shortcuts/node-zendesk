/**
 * Webhooks client for interacting with the Zendesk Webhooks API.
 * @see {@link https://developer.zendesk.com/api-reference/webhooks/webhooks-api/webhooks/}
 */
export class Webhooks extends Client {
    constructor(options: any);
    jsonAPINames: string[];
    /**
     * List all webhooks.
     * @returns {Promise<object>} A promise that resolves to the list of webhooks.
     * @async
     * @see {@link https://developer.zendesk.com/api-reference/webhooks/webhooks-api/webhooks/#list-webhooks}
     * @example const webhooks = await client.webhooks.list();
     */
    list(): Promise<object>;
    /**
     * Retrieve a specific webhook by ID.
     * @param {string} webhookID - The ID of the webhook to retrieve.
     * @returns {Promise<object>} A promise that resolves to the specified webhook.
     * @async
     * @see {@link https://developer.zendesk.com/api-reference/webhooks/webhooks-api/webhooks/#show-webhook}
     * @example const webhook = await client.webhooks.show('webhookID123');
     */
    show(webhookID: string): Promise<object>;
    /**
     * Create a new webhook.
     * @param {object} webhook - The webhook data to create.
     * @returns {Promise<object>} A promise that resolves to the created webhook.
     * @async
     * @see {@link https://developer.zendesk.com/api-reference/webhooks/webhooks-api/webhooks/#create-or-clone-webhook}
     * @example
     * const newWebhook = {
     *   // ... webhook data ...
     * };
     * const createdWebhook = await client.webhooks.create(newWebhook);
     */
    create(webhook: object): Promise<object>;
    /**
     * Update a specific webhook by ID.
     * @param {string} webhookID - The ID of the webhook to update.
     * @param {object} webhook - The updated webhook data.
     * @returns {Promise<object>} A promise that resolves to the updated webhook.
     * @async
     * @see {@link https://developer.zendesk.com/api-reference/webhooks/webhooks-api/webhooks/#update-webhook}
     * @example
     * const updatedData = {
     *   // ... updated data ...
     * };
     * const updatedWebhook = await client.webhooks.update('webhookID123', updatedData);
     */
    update(webhookID: string, webhook: object): Promise<object>;
    /**
     * Delete a specific webhook by ID.
     * @param {string} webhookID - The ID of the webhook to delete.
     * @returns {Promise<object>} A promise that resolves when the webhook is deleted.
     * @async
     * @see {@link https://developer.zendesk.com/api-reference/webhooks/webhooks-api/webhooks/#delete-webhook}
     * @example await client.webhooks.delete('webhookID123');
     */
    delete(webhookID: string): Promise<object>;
    /**
     * Test a new or existing webhook.
     * @param {object} request - The request data for testing the webhook.
     * @param {string} [webhookID] - The ID of the webhook to be tested (for existing webhooks).
     * @returns {Promise<object>} A promise that resolves to the test result.
     * @async
     * @see {@link https://developer.zendesk.com/api-reference/webhooks/webhooks-api/webhooks/#test-webhook}
     * @example
     * const requestData = {
     *   // ... request data ...
     * };
     * const testResult = await client.webhooks.test(requestData, 'webhookID123');
     */
    test(request: object, webhookID?: string): Promise<object>;
    /**
     * List invocations for a specific webhook.
     * @param {string} webhookID - The ID of the webhook.
     * @returns {Promise<object>} A promise that resolves to the list of invocations.
     * @async
     * @see {@link https://developer.zendesk.com/api-reference/webhooks/webhooks-api/webhooks/#list-webhook-invocations}
     * @example const invocations = await client.webhooks.listInvocations('webhookID123');
     */
    listInvocations(webhookID: string): Promise<object>;
    /**
     * List invocation attempts for a specific webhook.
     * @param {string} webhookID - The ID of the webhook.
     * @param {string} invocationID - The ID of the webhook invocation.
     * @returns {Promise<object>} A promise that resolves to the list of invocation attempts.
     * @async
     * @see {@link https://developer.zendesk.com/api-reference/webhooks/webhooks-api/webhooks/#list-webhook-invocation-attempts}
     * @example const attempts = await client.webhooks.listInvocationAttempts('webhookID123', 'invocationID123');
     */
    listInvocationAttempts(webhookID: string, invocationID: string): Promise<object>;
    /**
     * Retrieve the signing secret of a specific webhook.
     * @param {string} webhookID - The ID of the webhook.
     * @returns {Promise<object>} A promise that resolves to the signing secret.
     * @async
     * @see {@link https://developer.zendesk.com/api-reference/webhooks/webhooks-api/webhooks/#show-webhook-signing-secret}
     * @example const secret = await client.webhooks.getSigningSecret('webhookID123');
     */
    getSigningSecret(webhookID: string): Promise<object>;
    /**
     * Reset the signing secret for a specific webhook.
     * @param {string} webhookID - The ID of the webhook.
     * @returns {Promise<object>} A promise that resolves to the new signing secret.
     * @async
     * @see {@link https://developer.zendesk.com/api-reference/webhooks/webhooks-api/webhooks/#reset-webhook-signing-secret}
     * @example const newSecret = await client.webhooks.resetSigningSecret('webhookID123');
     */
    resetSigningSecret(webhookID: string): Promise<object>;
    /**
     * Patch a specific webhook by ID.
     * @param {string} webhookID - The ID of the webhook to patch.
     * @param {object} webhook - The data to patch.
     * @returns {Promise<object>} A promise that resolves to the patched webhook.
     * @async
     * @see {@link https://developer.zendesk.com/api-reference/webhooks/webhooks-api/webhooks/#patch-webhook}
     * @example
     * const patchData = {
     *   // ... patch data ...
     * };
     * const patchedWebhook = await client.webhooks.patch('webhookID123', patchData);
     */
    patch(webhookID: string, webhook: object): Promise<object>;
}
import { Client } from "../client";
