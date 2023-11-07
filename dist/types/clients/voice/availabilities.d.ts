export class Availabilities extends Client {
    constructor(options: any);
    jsonAPINames: string[];
    update(agentID: any, availability: any): Promise<{
        response: any;
        result: any;
    }>;
    show(agentID: any): Promise<{
        response: any;
        result: any;
    }>;
}
import { Client } from "../client";
