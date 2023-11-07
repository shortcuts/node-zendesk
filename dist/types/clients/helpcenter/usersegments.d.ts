export class UserSegments extends Client {
    constructor(options: any);
    jsonAPINames: string[];
    list(): Promise<any[]>;
    listApplicable(): Promise<any[]>;
    listByUser(userID: any): Promise<any[]>;
    show(userSegmentID: any): Promise<{
        response: any;
        result: any;
    }>;
    listSections(userSegmentID: any): Promise<any[]>;
    listTopics(userSegmentID: any): Promise<any[]>;
    create(userSegment: any): Promise<{
        response: any;
        result: any;
    }>;
    update(userSegmentID: any, userSegment: any): Promise<{
        response: any;
        result: any;
    }>;
    delete(userSegmentID: any): Promise<any>;
}
import { Client } from "../client";
