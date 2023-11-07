export class Availabilities extends Client {
    constructor(options: any);
    jsonAPINames: string[];
    update(agentID: any, availability: any): Promise<NodeModule>;
    show(agentID: any): Promise<NodeModule>;
}
import { Client } from "../client";
