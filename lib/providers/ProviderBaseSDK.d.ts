import { AxiosRequestConfig } from "axios";
export interface ProviderBaseSDKOptions {
    url: string;
}
export declare class ProviderBaseSDK {
    protected options: Required<ProviderBaseSDKOptions>;
    constructor(options?: Partial<ProviderBaseSDKOptions>);
    protected setOptions(options?: Partial<ProviderBaseSDKOptions>): void;
    private getErrorMessage;
    private _request;
    protected request: <T>(path: string, options: AxiosRequestConfig) => Promise<T>;
}
