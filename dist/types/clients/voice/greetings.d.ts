export class Greetings extends Client {
    constructor(options: any);
    jsonAPINames: string[];
    list(): Promise<{
        response: any;
        result: any;
    }>;
    show(greetingID: any): Promise<{
        response: any;
        result: any;
    }>;
    create(greeting: any): Promise<{
        response: any;
        result: any;
    }>;
    update(greeting: any, greetingID: any): Promise<{
        response: any;
        result: any;
    }>;
    delete(greetingID: any): Promise<any>;
}
import { Client } from "../client";
