interface IMessageApi {
    warning(content: string, duration?: number): void;
    success(content: string, duration?: number): void;
    error(content: string, duration?: number): void;
}
declare const MessageApi: IMessageApi;
export default MessageApi;
