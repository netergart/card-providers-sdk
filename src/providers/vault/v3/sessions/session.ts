import { VaultV3SDKOptions } from "../../interfaces/vault.v3.interface";
import VaultProviderV3Base from "../VaultProviderBase";
import { ISession } from "./interfaces/sessions.interface";

export class Session extends VaultProviderV3Base {
  constructor(options: VaultV3SDKOptions) {
    super(options);
  }

  async getActiveSession(): Promise<ISession[]> {
    const path = "/reg/user/session/current";

    return await this.request(path, {
      method: "GET",
      headers: this.createHeaders(),
    });
  }

  async logout(): Promise<{}> {
    const path = "/reg/user/session/logout/current";

    return await this.request(path, {
      method: "DELETE",
      headers: this.createHeaders(),
    });
  }

  async logoutFromAllDevices(): Promise<{}> {
    const path = "/reg/user/session/logout";

    return await this.request(path, {
      method: "PUT",
      headers: this.createHeaders(),
    });
  }
}

export default Session;
