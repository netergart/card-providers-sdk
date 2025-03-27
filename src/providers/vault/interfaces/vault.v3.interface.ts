import { ProviderBaseSDKOptions } from "../../ProviderBaseSDK";
import { VaultSDKVersion } from "./vault.interface";

export interface VaultV3SDKOptions
  extends ProviderBaseSDKOptions,
    VaultSDKVersion {
  partnerId: number;
  partnerClientId: string;
}
