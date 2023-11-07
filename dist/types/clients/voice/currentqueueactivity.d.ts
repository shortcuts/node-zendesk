export class CurrentQueueActivity extends Client {
    constructor(options: any);
    jsonAPINames: string[];
    show(): Promise<{
        response: any;
        result: any;
    }>;
}
import { Client } from "../client";
