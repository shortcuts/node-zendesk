/**
 * Represents the Attachments functionality of the Zendesk API.
 * @augments {Client}
 * @see [Zendesk Attachments API]{@link https://developer.zendesk.com/api-reference/ticketing/tickets/ticket-attachments/}
 */
export class Attachments extends Client {
    /**
     * Upload a file to be attached to a ticket comment.
     * @param {Buffer} file - The file data.
     * @param {object} fileOptions - Options for the file.
     * @param {string} fileOptions.filename - Name of the file when attached to the ticket comment.
     * @param {boolean} fileOptions.binary - If the file is binary or not.
     * @param {string} [fileOptions.token] - Token received from previous uploads (if multiple files are being attached).
     * @returns {Promise<object>} Returns the server's response.
     * @async
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/tickets/ticket-attachments/#upload-files}
     * @example
     * const response = await client.attachments.upload(fileBuffer, { filename: "example.png", binary: true });
     */
    upload(file: Buffer, fileOptions: {
        filename: string;
        binary: boolean;
        token?: string;
    }): Promise<object>;
    /**
     * Delete an uploaded file.
     * @param {string} token - The token of the uploaded attachment.
     * @returns {Promise<object>} Returns the server's response.
     * @async
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/tickets/ticket-attachments/#delete-upload}
     * @example
     * const response = await client.attachments.deleteUpload("exampleToken");
     */
    deleteUpload(token: string): Promise<object>;
    /**
     * Retrieve details of a specific attachment.
     * @param {number} attachmentID - The ID of the attachment.
     * @returns {Promise<object>} Returns the details of the attachment.
     * @async
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/tickets/ticket-attachments/#show-attachment}
     * @example
     * const attachmentDetails = await client.attachments.show(12345);
     */
    show(attachmentID: number): Promise<object>;
    /**
     * Redact an attachment from an existing comment on a ticket.
     * @param {number} ticketID - The ID of the ticket.
     * @param {number} commentID - The ID of the comment.
     * @param {number} attachmentID - The ID of the attachment.
     * @returns {Promise<object>} Returns the server's response.
     * @async
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/tickets/ticket-attachments/#redact-comment-attachment}
     * @example
     * const response = await client.attachments.redactAttachmentComment(1, 2, 3);
     */
    redactAttachmentComment(ticketID: number, commentID: number, attachmentID: number): Promise<object>;
    /**
     * Toggles enabling or restricting agent access to attachments with detected malware.
     * @param {number} attachmentID - The ID of the attachment.
     * @param {boolean} malwareAccessOverride - Whether to override malware access. If true, agent can access attachment flagged as malware.
     * @returns {Promise<object>} The response from the Zendesk API.
     * @async
     * @throws {Error} Throws an error if the request fails.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/tickets/ticket-attachments/#update-attachment-for-malware}
     * @example
     * const result = await client.attachments.updateAttachmentForMalware(928374, true);
     * console.log(result);
     */
    updateAttachmentForMalware(attachmentID: number, malwareAccessOverride: boolean): Promise<object>;
}
import { Client } from "../client";
