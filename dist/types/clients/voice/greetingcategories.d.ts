export class GreetingCategories extends Client {
    constructor(options: any);
    jsonAPINames: string[];
    list(): Promise<{
        response: any;
        result: any;
    }>;
    show(greetingCategoryID: any): Promise<{
        response: any;
        result: any;
    }>;
}
import { Client } from "../client";
