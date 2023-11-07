export class Subscriptions extends Client {
    constructor(options: any);
    jsonAPINames: string[];
    listByUser(userID: any): Promise<any[]>;
    listByArticle(articleID: any): Promise<any[]>;
    listBySection(sectionID: any): Promise<any[]>;
    showbyArticle(articleID: any, subscriptionID: any): Promise<NodeModule>;
    showbySection(sectionID: any, subscriptionID: any): Promise<NodeModule>;
    createbyArticle(articleID: any, subscription: any): Promise<NodeModule>;
    createbySection(sectionID: any, subscription: any): Promise<NodeModule>;
    deletebyArticle(articleID: any, subscriptionID: any): Promise<any>;
    deletebySection(sectionID: any, subscriptionID: any): Promise<any>;
}
import { Client } from "../client";
