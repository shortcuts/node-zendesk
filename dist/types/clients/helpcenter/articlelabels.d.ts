export class ArticleLabels extends Client {
    constructor(options: any);
    jsonAPINames: string[];
    list(): Promise<{
        response: any;
        result: any;
    }>;
    listByArticle(articleID: any): Promise<{
        response: any;
        result: any;
    }>;
    show(labelID: any): Promise<{
        response: any;
        result: any;
    }>;
    create(articleID: any, label: any): Promise<{
        response: any;
        result: any;
    }>;
    delete(articleID: any, labelID: any): Promise<any>;
}
import { Client } from "../client";
