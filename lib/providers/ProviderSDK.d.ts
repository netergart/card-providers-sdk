import { VaultSDKOptions } from "./vault/interfaces/vault.interface";
import { VaultV2SDKOptions } from "./vault/interfaces/vault.v2.interface";
import { VaultV3SDKOptions } from "./vault/interfaces/vault.v3.interface";
import VaultProvider from "./vault/v1/VaultProvider";
import VaultProviderV2 from "./vault/v2/VaultProvider";
import VaultProviderV3 from "./vault/v3/VaultProvider";
export declare class ProviderSDK {
    vault(options: VaultSDKOptions & {
        version: 1;
    }): VaultProvider;
    vault(options: VaultV2SDKOptions & {
        version: 2;
    }): VaultProviderV2;
    vault(options: VaultV3SDKOptions & {
        version: 3;
    }): VaultProviderV3;
}
export default ProviderSDK;
