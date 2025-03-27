import { ProviderBaseSDK } from "../../ProviderBaseSDK";
import { VaultV2SDKOptions } from "../interfaces/vault.v2.interface";
export declare class VaultProviderV2Base extends ProviderBaseSDK {
    private accessToken;
    protected headers: {
        accept: string;
        "content-type": string;
    };
    protected partnerId: number;
    protected partnerClientId: string;
    constructor(options: VaultV2SDKOptions);
    setToken(accessToken: string): this;
    protected getToken(): string;
}
export default VaultProviderV2Base;
