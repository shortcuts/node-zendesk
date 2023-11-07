export class Posts extends Client {
    constructor(options: any);
    jsonAPINames: string[];
    sideLoadMap: {
        field: string;
        name: string;
        dataset: string;
    }[];
    list(cb: any): Promise<any[]>;
}
import { Client } from "../client";
