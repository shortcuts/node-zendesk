export class PhoneNumbers extends Client {
    constructor(options: any);
    jsonAPINames: string[];
    search(searchTerm: any): Promise<NodeModule>;
    list(): Promise<NodeModule>;
    create(phone_number: any): Promise<NodeModule>;
    update(phoneID: any, phone_number: any): Promise<NodeModule>;
    show(phoneID: any): Promise<NodeModule>;
    delete(phoneID: any): Promise<any>;
}
import { Client } from "../client";
