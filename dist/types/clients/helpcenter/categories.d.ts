export class Categories extends Client {
    constructor(options: any);
    jsonAPINames: string[];
    list(): Promise<any[]>;
    listWithLocale(locale: any): Promise<any[]>;
    show(categoryID: any): Promise<{
        response: any;
        result: any;
    }>;
    create(category: any): Promise<{
        response: any;
        result: any;
    }>;
    update(categoryID: any, category: any): Promise<{
        response: any;
        result: any;
    }>;
    updateWithLocale(locale: any, categoryID: any, category: any): Promise<{
        response: any;
        result: any;
    }>;
    updateSourceLocale(categoryID: any, sourceLocale: any): Promise<{
        response: any;
        result: any;
    }>;
    delete(categoryID: any): Promise<any>;
}
import { Client } from "../client";
