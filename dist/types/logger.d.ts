export = ConsoleLogger;
declare class ConsoleLogger extends LoggerInterface {
}
declare class LoggerInterface {
    fatal(message: any): void;
    error(message: any): void;
    warn(message: any): void;
    info(message: any): void;
    debug(message: any): void;
    trace(message: any): void;
}
