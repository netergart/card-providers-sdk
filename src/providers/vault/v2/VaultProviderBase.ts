import { ProviderBaseSDK } from "../../ProviderBaseSDK";
import { VaultV2SDKOptions } from "../interfaces/vault.v2.interface";

export class VaultProviderV2Base extends ProviderBaseSDK {
  private accessToken: string;

  protected headers = {
    accept: "application/json",
    "content-type": "application/json",
  };
  protected partnerId: number;
  protected partnerClientId: string;

  constructor(options: VaultV2SDKOptions) {
    super(options);
    this.partnerId = options.partnerId;
    this.partnerClientId = options.partnerClientId;
  }

  setToken(accessToken: string): this {
    this.accessToken = accessToken;

    return this;
  }

  protected getToken(): string {
    if (!this.accessToken) {
      throw new Error(`Set the access token`);
    }
    return this.accessToken;
  }
}

export default VaultProviderV2Base;
