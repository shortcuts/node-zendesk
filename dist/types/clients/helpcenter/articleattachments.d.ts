export class ArticleAttachments extends Client {
    constructor(options: any);
    jsonAPINames: string[];
    list(articleID: any): Promise<NodeModule>;
    listInline(articleID: any): Promise<NodeModule>;
    listBlock(articleID: any): Promise<NodeModule>;
    show(attachmentID: any): Promise<NodeModule>;
    create(): Promise<Error>;
    createUnassociated(): Promise<Error>;
    delete(attachmentID: any): Promise<any>;
}
import { Client } from "../client";
