export class ArticleAttachments extends Client {
    constructor(options: any);
    jsonAPINames: string[];
    list(articleID: any): Promise<{
        response: any;
        result: any;
    }>;
    listInline(articleID: any): Promise<{
        response: any;
        result: any;
    }>;
    listBlock(articleID: any): Promise<{
        response: any;
        result: any;
    }>;
    show(attachmentID: any): Promise<{
        response: any;
        result: any;
    }>;
    create(): Promise<Error>;
    createUnassociated(): Promise<Error>;
    delete(attachmentID: any): Promise<any>;
}
import { Client } from "../client";
