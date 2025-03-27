import { VaultV3SDKOptions } from "../../interfaces/vault.v3.interface";
import VaultProviderV3Base from "../VaultProviderBase";
import { IProfileResponse } from "./interfaces/profile.interface";

export class Profile extends VaultProviderV3Base {
  constructor(options: VaultV3SDKOptions) {
    super(options);
  }

  async info(): Promise<IProfileResponse> {
    const path = "/reg/user/info";

    return await this.request(path, {
      method: "GET",
      headers: this.createHeaders(),
    });
  }

  // async updateInfo(body: IProfileUpdateInfoRequest): Promise<IProfileResponse> {
  //   const path = "/reg/user/info";

  //   return await this.request(path, {
  //     method: "PATCH",
  //     headers: this.createHeaders(),
  //     data: body,
  //   });
  // }
}

export default Profile;
