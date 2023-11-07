export class ArticleComments extends Client {
    constructor(options: any);
    jsonAPINames: string[];
    sideLoadMap: {
        field: string;
        name: string;
        dataset: string;
    }[];
    listByUser(userID: any): Promise<any[]>;
    listByArticle(articleID: any): Promise<any[]>;
    show(articleID: any, commentID: any): Promise<NodeModule>;
    create(articleID: any, comment: any): Promise<NodeModule>;
    update(articleID: any, commentID: any, comment: any): Promise<NodeModule>;
    delete(articleID: any, commentID: any): Promise<any>;
}
import { Client } from "../client";
