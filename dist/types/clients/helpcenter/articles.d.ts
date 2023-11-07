export class Articles extends Client {
    constructor(options: any);
    jsonAPINames: string[];
    sideLoadMap: {
        field: string;
        name: string;
        dataset: string;
    }[];
    list(cb: any): Promise<any[]>;
    listByLocale(locale: any): Promise<any[]>;
    listBySection(sectionID: any): Promise<any[]>;
    listBySectionByLocale(locale: any, sectionID: any): Promise<any[]>;
    listByCategory(categoryID: any): Promise<any[]>;
    listByCategoryByLocale(locale: any, categoryID: any): Promise<any[]>;
    listByUser(userID: any): Promise<any[]>;
    listSinceStartTime(startTime: any): Promise<any[]>;
    listByLabelNames(labelNames: any): Promise<any[]>;
    show(articleID: any): Promise<{
        response: any;
        result: any;
    }>;
    showWithLocale(locale: any, articleID: any): Promise<{
        response: any;
        result: any;
    }>;
    create(sectionID: any, article: any): Promise<{
        response: any;
        result: any;
    }>;
    createWithLocale(locale: any, sectionID: any, article: any): Promise<{
        response: any;
        result: any;
    }>;
    update(articleID: any, article: any): Promise<{
        response: any;
        result: any;
    }>;
    updateWithLocale(locale: any, articleID: any, article: any): Promise<{
        response: any;
        result: any;
    }>;
    associateAttachmentsInBulk(articleID: any, attachmentIDsInBulk: any): Promise<{
        response: any;
        result: any;
    }>;
    delete(articleID: any): Promise<any>;
}
import { Client } from "../client";
