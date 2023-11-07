export class Greetings extends Client {
    constructor(options: any);
    jsonAPINames: string[];
    list(): Promise<NodeModule>;
    show(greetingID: any): Promise<NodeModule>;
    create(greeting: any): Promise<NodeModule>;
    update(greeting: any, greetingID: any): Promise<NodeModule>;
    delete(greetingID: any): Promise<any>;
}
import { Client } from "../client";
