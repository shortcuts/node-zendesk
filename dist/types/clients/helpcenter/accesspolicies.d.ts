export class AccessPolicies extends Client {
    constructor(options: any);
    jsonAPINames: string[];
    show(sectionID: any): Promise<{
        response: any;
        result: any;
    }>;
    update(sectionID: any, accessPolicy: any): Promise<{
        response: any;
        result: any;
    }>;
}
import { Client } from "../client";
