export class GreetingCategories extends Client {
    constructor(options: any);
    jsonAPINames: string[];
    list(): Promise<NodeModule>;
    show(greetingCategoryID: any): Promise<NodeModule>;
}
import { Client } from "../client";
