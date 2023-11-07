export class AccessPolicies extends Client {
    constructor(options: any);
    jsonAPINames: string[];
    show(sectionID: any): Promise<NodeModule>;
    update(sectionID: any, accessPolicy: any): Promise<NodeModule>;
}
import { Client } from "../client";
