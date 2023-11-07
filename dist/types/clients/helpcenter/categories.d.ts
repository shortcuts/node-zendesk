export class Categories extends Client {
    constructor(options: any);
    jsonAPINames: string[];
    list(): Promise<any[]>;
    listWithLocale(locale: any): Promise<any[]>;
    show(categoryID: any): Promise<NodeModule>;
    create(category: any): Promise<NodeModule>;
    update(categoryID: any, category: any): Promise<NodeModule>;
    updateWithLocale(locale: any, categoryID: any, category: any): Promise<NodeModule>;
    updateSourceLocale(categoryID: any, sourceLocale: any): Promise<NodeModule>;
    delete(categoryID: any): Promise<any>;
}
import { Client } from "../client";
