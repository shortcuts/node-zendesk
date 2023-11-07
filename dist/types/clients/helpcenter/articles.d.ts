export class Articles extends Client {
    constructor(options: any);
    jsonAPINames: string[];
    sideLoadMap: {
        field: string;
        name: string;
        dataset: string;
    }[];
    list(): Promise<any[]>;
    listByLocale(locale: any): Promise<any[]>;
    listBySection(sectionID: any): Promise<any[]>;
    listBySectionByLocale(locale: any, sectionID: any): Promise<any[]>;
    listByCategory(categoryID: any): Promise<any[]>;
    listByCategoryByLocale(locale: any, categoryID: any): Promise<any[]>;
    listByUser(userID: any): Promise<any[]>;
    listSinceStartTime(startTime: any): Promise<any[]>;
    listByLabelNames(labelNames: any): Promise<any[]>;
    show(articleID: any): Promise<NodeModule>;
    showWithLocale(locale: any, articleID: any): Promise<NodeModule>;
    create(sectionID: any, article: any): Promise<NodeModule>;
    createWithLocale(locale: any, sectionID: any, article: any): Promise<NodeModule>;
    update(articleID: any, article: any): Promise<NodeModule>;
    updateWithLocale(locale: any, articleID: any, article: any): Promise<NodeModule>;
    associateAttachmentsInBulk(articleID: any, attachmentIDsInBulk: any): Promise<NodeModule>;
    delete(articleID: any): Promise<any>;
}
import { Client } from "../client";
