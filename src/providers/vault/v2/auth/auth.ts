import { VaultV2SDKOptions } from "../../interfaces/vault.v2.interface";
import {
  ISignInRequest,
  ISignInUpResponse,
  ISignUpRequest,
} from "../interfaces/auth.interface";
import VaultProviderV2Base from "../VaultProviderBase";

export class Auth extends VaultProviderV2Base {
  constructor(options: VaultV2SDKOptions) {
    super(options);
  }

  async signUp(body: ISignUpRequest): Promise<ISignInUpResponse | {}> {
    const path = "/reg/user";
    const headers = {
      ...this.headers,
      partnerId: this.partnerId,
    };

    return await this.request(path, { method: "POST", headers, data: body });
  }

  async signIn(body: ISignInRequest): Promise<ISignInUpResponse> {
    const path = "/reg/auth/token";
    const headers = {
      ...this.headers,
      appClientId: this.partnerId,
    };

    return await this.request(path, { method: "POST", headers, data: body });
  }
}

export default Auth;
