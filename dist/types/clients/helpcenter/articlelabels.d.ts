export class ArticleLabels extends Client {
    constructor(options: any);
    jsonAPINames: string[];
    list(): Promise<NodeModule>;
    listByArticle(articleID: any): Promise<NodeModule>;
    show(labelID: any): Promise<NodeModule>;
    create(articleID: any, label: any): Promise<NodeModule>;
    delete(articleID: any, labelID: any): Promise<any>;
}
import { Client } from "../client";
