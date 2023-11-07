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
    show(sectionID: any): Promise<{
        response: any;
        result: any;
    }>;
    showWithLocale(locale: any, sectionID: any): Promise<{
        response: any;
        result: any;
    }>;
    create(categoryId: any, section: any): Promise<{
        response: any;
        result: any;
    }>;
    createWithLocale(locale: any, categoryId: any, section: any): Promise<{
        response: any;
        result: any;
    }>;
    update(sectionID: any, section: any): Promise<{
        response: any;
        result: any;
    }>;
    updateWithLocale(locale: any, sectionID: any, section: any): Promise<{
        response: any;
        result: any;
    }>;
    updateSourceLocale(sectionID: any, sourceLocale: any): Promise<{
        response: any;
        result: any;
    }>;
    delete(sectionID: any): Promise<any>;
}
import { Client } from "../client";
