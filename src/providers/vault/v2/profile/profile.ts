import { VaultV2SDKOptions } from "../../interfaces/vault.v2.interface";
import VaultProviderV2Base from "../VaultProviderBase";
import {
  IProfileAddAddressRequest,
  IProfileAddAddressResponse,
  IProfileAddressIdRequest,
  IProfileLimitResponse,
  IProfileResponse,
  IProfileUpdateAddressRequest,
  IProfileUpdateInfoRequest,
} from "./interfaces/profile.interface";

export class Profile extends VaultProviderV2Base {
  constructor(options: VaultV2SDKOptions) {
    super(options);
  }

  async info(): Promise<IProfileResponse> {
    const path = "/reg/user/info";

    const headers = {
      ...this.headers,
      authorization: `Bearer ${this.getToken()}`,
    };

    return await this.request(path, { method: "GET", headers });
  }

  async updateInfo(body: IProfileUpdateInfoRequest): Promise<IProfileResponse> {
    const path = "/reg/user/info";

    const headers = {
      ...this.headers,
      authorization: `Bearer ${this.getToken()}`,
    };

    return await this.request(path, { method: "PATCH", headers, data: body });
  }

  async addAddress(
    body: IProfileAddAddressRequest
  ): Promise<IProfileAddAddressResponse> {
    const path = "/reg/user/address";

    const headers = {
      ...this.headers,
      authorization: `Bearer ${this.getToken()}`,
    };

    return await this.request(path, { method: "POST", headers, data: body });
  }

  async updateAddress(
    body: IProfileUpdateAddressRequest
  ): Promise<IProfileAddAddressResponse> {
    const { addressId, ...otherData } = body;
    const path = `/reg/user/address/${addressId}`;

    const headers = {
      ...this.headers,
      authorization: `Bearer ${this.getToken()}`,
    };

    return await this.request(path, {
      method: "PUT",
      headers,
      data: otherData,
    });
  }

  async setAddressAsPrimary(
    body: IProfileAddressIdRequest
  ): Promise<IProfileAddAddressResponse> {
    const path = `/reg/user/address/${body.addressId}/residential`;

    const headers = {
      ...this.headers,
      authorization: `Bearer ${this.getToken()}`,
    };

    return await this.request(path, { method: "POST", headers, data: body });
  }

  async limit(): Promise<IProfileLimitResponse> {
    const path = "/reg/user/limits";

    const headers = {
      ...this.headers,
      authorization: `Bearer ${this.getToken()}`,
    };

    return await this.request(path, { method: "GET", headers });
  }
}

export default Profile;
