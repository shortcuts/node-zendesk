export class Links extends Client {
    constructor(options: any);
    jsonAPINames: string[];
    sideLoadMap: {
        field: string;
        name: string;
        dataset: string;
    }[];
    list(): Promise<void>;
    show(ticket_ids: any): Promise<void>;
}
import { Client } from "../client";
