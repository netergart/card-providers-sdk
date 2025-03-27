import { ProviderBaseSDK } from "../../ProviderBaseSDK";
import { VaultV3SDKOptions } from "../interfaces/vault.v3.interface";
export declare class VaultProviderV3Base extends ProviderBaseSDK {
    private accessToken;
    protected headers: {
        accept: string;
        "content-type": string;
    };
    protected partnerId: number;
    protected partnerClientId: string;
    constructor(options: VaultV3SDKOptions);
    setToken(accessToken: string): this;
    protected getToken(): string;
    protected createHeaders(additionalHeaders?: Record<string, string | number>, isTokenNeeded?: boolean): Record<string, string | number>;
}
export default VaultProviderV3Base;
