export class PhoneNumbers extends Client {
    constructor(options: any);
    jsonAPINames: string[];
    search(searchTerm: any): Promise<{
        response: any;
        result: any;
    }>;
    list(): Promise<{
        response: any;
        result: any;
    }>;
    create(phone_number: any): Promise<{
        response: any;
        result: any;
    }>;
    update(phoneID: any, phone_number: any): Promise<{
        response: any;
        result: any;
    }>;
    show(phoneID: any): Promise<{
        response: any;
        result: any;
    }>;
    delete(phoneID: any): Promise<any>;
}
import { Client } from "../client";
