export class UserSegments extends Client {
    constructor(options: any);
    jsonAPINames: string[];
    list(): Promise<any[]>;
    listApplicable(): Promise<any[]>;
    listByUser(userID: any): Promise<any[]>;
    show(userSegmentID: any): Promise<NodeModule>;
    listSections(userSegmentID: any): Promise<any[]>;
    listTopics(userSegmentID: any): Promise<any[]>;
    create(userSegment: any): Promise<NodeModule>;
    update(userSegmentID: any, userSegment: any): Promise<NodeModule>;
    delete(userSegmentID: any): Promise<any>;
}
import { Client } from "../client";
