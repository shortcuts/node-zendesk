export class Sections extends Client {
    constructor(options: any);
    jsonAPINames: string[];
    sideLoadMap: {
        field: string;
        name: string;
        dataset: string;
    }[];
    list(): Promise<any[]>;
    listByCategory(categoryID: any): Promise<any[]>;
    listWithLocale(locale: any): Promise<any[]>;
    listByCategoryByLocale(locale: any, categoryID: any): Promise<any[]>;
    show(sectionID: any): Promise<NodeModule>;
    showWithLocale(locale: any, sectionID: any): Promise<NodeModule>;
    create(categoryId: any, section: any): Promise<NodeModule>;
    createWithLocale(locale: any, categoryId: any, section: any): Promise<NodeModule>;
    update(sectionID: any, section: any): Promise<NodeModule>;
    updateWithLocale(locale: any, sectionID: any, section: any): Promise<NodeModule>;
    updateSourceLocale(sectionID: any, sourceLocale: any): Promise<NodeModule>;
    delete(sectionID: any): Promise<any>;
}
import { Client } from "../client";
