import { ProviderBaseSDKOptions } from "../../ProviderBaseSDK";
import { VaultSDKVersion } from "./vault.interface";

export interface VaultV2SDKOptions
  extends ProviderBaseSDKOptions,
    VaultSDKVersion {
  partnerId: number;
  partnerClientId: string;
}
