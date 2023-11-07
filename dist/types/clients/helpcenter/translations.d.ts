export class Translations extends Client {
    constructor(options: any);
    jsonAPINames: string[];
    show(articleID: any, locale: any): Promise<NodeModule>;
    listByArticle(articleID: any, filterParameters: any): Promise<any[]>;
    listBySection(sectionID: any): Promise<any[]>;
    listByCategory(categoryID: any): Promise<any[]>;
    listMissingLocalesByArticle(articleID: any): Promise<NodeModule>;
    listMissingLocalesBySection(sectionID: any): Promise<NodeModule>;
    listMissingLocalesByCategory(categoryID: any): Promise<NodeModule>;
    createForArticle(articleID: any, translation: any): Promise<NodeModule>;
    createForSection(sectionID: any, translation: any): Promise<NodeModule>;
    createForCategory(categoryID: any, translation: any): Promise<NodeModule>;
    updateForArticle(articleID: any, locale: any, translation: any): Promise<NodeModule>;
    updateForSection(sectionID: any, locale: any, translation: any): Promise<NodeModule>;
    updateForCategory(categoryID: any, locale: any, translation: any): Promise<NodeModule>;
    delete(translationID: any): Promise<any>;
    listLocales(): Promise<NodeModule>;
}
import { Client } from "../client";
