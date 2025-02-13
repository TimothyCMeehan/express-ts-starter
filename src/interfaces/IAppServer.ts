export interface IAppServer {
    listen(port: number, callback?: () => void): any;
    close(callback?: () => void): void;
}