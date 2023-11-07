export class Translations extends Client {
    constructor(options: any);
    jsonAPINames: string[];
    show(articleID: any, locale: any): Promise<{
        response: any;
        result: any;
    }>;
    listByArticle(articleID: any, filterParameters: any): Promise<any[]>;
    listBySection(sectionID: any): Promise<any[]>;
    listByCategory(categoryID: any): Promise<any[]>;
    listMissingLocalesByArticle(articleID: any): Promise<{
        response: any;
        result: any;
    }>;
    listMissingLocalesBySection(sectionID: any): Promise<{
        response: any;
        result: any;
    }>;
    listMissingLocalesByCategory(categoryID: any): Promise<{
        response: any;
        result: any;
    }>;
    createForArticle(articleID: any, translation: any): Promise<{
        response: any;
        result: any;
    }>;
    createForSection(sectionID: any, translation: any): Promise<{
        response: any;
        result: any;
    }>;
    createForCategory(categoryID: any, translation: any): Promise<{
        response: any;
        result: any;
    }>;
    updateForArticle(articleID: any, locale: any, translation: any): Promise<{
        response: any;
        result: any;
    }>;
    updateForSection(sectionID: any, locale: any, translation: any): Promise<{
        response: any;
        result: any;
    }>;
    updateForCategory(categoryID: any, locale: any, translation: any): Promise<{
        response: any;
        result: any;
    }>;
    delete(translationID: any): Promise<any>;
    listLocales(): Promise<{
        response: any;
        result: any;
    }>;
}
import { Client } from "../client";
