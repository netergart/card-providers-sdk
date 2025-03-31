import { VaultV3SDKOptions } from "../../interfaces/vault.v3.interface";
import VaultProviderV3Base from "../VaultProviderBase";
import {
  IProfileExtendedResponse,
  IProfileResponse,
} from "./interfaces/profile.interface";

export class Profile extends VaultProviderV3Base {
  constructor(options: VaultV3SDKOptions) {
    super(options);
  }

  async info(): Promise<IProfileResponse> {
    const path = "/reg/v1/user/info";

    return await this.request(path, {
      method: "GET",
      headers: this.createHeaders(),
    });
  }

  async extendedInfo(): Promise<IProfileExtendedResponse> {
    const path = "/reg/user/info";

    return await this.request(path, {
      method: "GET",
      headers: this.createHeaders(),
    });
  }
}

export default Profile;
