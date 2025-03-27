import { VaultSDKOptions } from "./vault/interfaces/vault.interface";
import { VaultV2SDKOptions } from "./vault/interfaces/vault.v2.interface";
import { VaultV3SDKOptions } from "./vault/interfaces/vault.v3.interface";
import VaultProvider from "./vault/v1/VaultProvider";
import VaultProviderV2 from "./vault/v2/VaultProvider";
import VaultProviderV3 from "./vault/v3/VaultProvider";

export class ProviderSDK {
  public vault(options: VaultSDKOptions & { version: 1 }): VaultProvider;
  public vault(options: VaultV2SDKOptions & { version: 2 }): VaultProviderV2;
  public vault(options: VaultV3SDKOptions & { version: 3 }): VaultProviderV3;

  public vault(
    options: VaultSDKOptions | VaultV2SDKOptions | VaultV3SDKOptions
  ): VaultProvider | VaultProviderV2 | VaultProviderV3 {
    switch (options.version) {
      case 1:
        return new VaultProvider(options as VaultSDKOptions);
      case 2:
        return new VaultProviderV2(options as VaultV2SDKOptions);
      case 3:
        return new VaultProviderV3(options as VaultV3SDKOptions);
    }
  }
}

export default ProviderSDK;
