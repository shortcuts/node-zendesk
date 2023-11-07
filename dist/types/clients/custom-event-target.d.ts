export class CustomEventTarget {
    listeners: Map<any, any>;
    addEventListener(type: any, callback: any): void;
    removeEventListener(type: any, callback: any): void;
    dispatchEvent(event: any): void;
}
