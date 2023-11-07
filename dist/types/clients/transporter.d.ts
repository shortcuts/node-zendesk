export class Transporter {
    constructor(options: any, sideLoad?: any[]);
    options: any;
    sideLoad: any[];
    authHandler: AuthorizationHandler;
    eventTarget: CustomEventTarget;
    endpointChecker: EndpointChecker;
    transportFn: any;
    responseAdapter: any;
    emit(eventType: any, eventData: any): void;
    on(eventType: any, callback: any): void;
    request(method: any, uri: any, body?: any): Promise<{
        response: any;
        result: {};
    }>;
    upload(uri: any, file: any): Promise<{
        response: any;
        result: {};
    }>;
    sendRequest(options: any): Promise<{
        response: any;
        result: {};
    }>;
    prepareOptionsForRequest(method: string, uri: any, body: any, isBinary?: boolean): any;
    getHeadersForRequest(): any;
    getBodyForRequest(method: any, body: any): string;
    getJSONBody(body: any): string;
    setSideLoad(array: any): void;
}
import { AuthorizationHandler } from "./authorization-handler";
import { CustomEventTarget } from "./custom-event-target";
import { EndpointChecker } from "./endpoint-checker";
