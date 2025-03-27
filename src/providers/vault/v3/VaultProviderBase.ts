import { AxiosRequestConfig } from "axios";
import { ProviderBaseSDK } from "../../ProviderBaseSDK";
import { VaultV3SDKOptions } from "../interfaces/vault.v3.interface";

export class VaultProviderV3Base extends ProviderBaseSDK {
  private accessToken: string;

  protected headers = {
    accept: "application/json",
    "content-type": "application/json",
  };
  protected partnerId: number;
  protected partnerClientId: string;

  constructor(options: VaultV3SDKOptions) {
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

  protected createHeaders(
    additionalHeaders: Record<string, string | number> = {},
    isTokenNeeded = true
  ): Record<string, string | number> {
    return {
      ...this.headers,
      ...additionalHeaders,
      ...(isTokenNeeded ? { authorization: `Bearer ${this.getToken()}` } : {}),
    };
  }
}

export default VaultProviderV3Base;
