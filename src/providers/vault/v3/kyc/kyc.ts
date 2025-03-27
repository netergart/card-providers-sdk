import { VaultV3SDKOptions } from "../../interfaces/vault.v3.interface";
import VaultProviderV3Base from "../VaultProviderBase";
import {
  IKycStartRequest,
  IKycStartResponse,
  IKycStatusResponse,
} from "./interfaces/kyc.interface";

export class Kyc extends VaultProviderV3Base {
  constructor(options: VaultV3SDKOptions) {
    super(options);
  }

  async status(body): Promise<IKycStatusResponse> {
    const path = "/reg/v1/verification/sumsub/data";

    return await this.request(path, {
      method: "GET",
      headers: this.createHeaders(),
      params: body,
    });
  }

  async start({
    type = "SUMSUB",
  }: IKycStartRequest): Promise<IKycStartResponse> {
    const path = "/reg/v1/verification/sumsub/token";

    return await this.request(path, {
      method: "POST",
      headers: this.createHeaders(),
      data: { type },
    });
  }
}

export default Kyc;
