import { VaultV2SDKOptions } from "../../interfaces/vault.v2.interface";
import VaultProviderV2Base from "../VaultProviderBase";

export class Session extends VaultProviderV2Base {
  constructor(options: VaultV2SDKOptions) {
    super(options);
  }

  async logout(): Promise<{}> {
    const path = "/reg/user/session/logout/current";

    const headers = {
      ...this.headers,
      authorization: `Bearer ${this.getToken()}`,
    };

    return await this.request(path, { method: "DELETE", headers });
  }
}

export default Session;
