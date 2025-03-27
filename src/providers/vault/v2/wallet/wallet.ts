import { VaultV2SDKOptions } from "../../interfaces/vault.v2.interface";
import VaultProviderV2Base from "../VaultProviderBase";
import {
  IWalletAccountInfoRequest,
  IWalletCreateAccountRequest,
  IWalletAccountInfoResponse,
  IWalletAddressRequest,
  IWalletAddressResponse,
  IWalletGetBalanceRequest,
  IWalletUpdateBalanceRequest,
  IWalletBalanceListResponse,
} from "./interfaces/wallet.interface";

export class Wallet extends VaultProviderV2Base {
  constructor(options: VaultV2SDKOptions) {
    super(options);
  }

  async createAccount(
    body: IWalletCreateAccountRequest
  ): Promise<IWalletAccountInfoResponse> {
    const path = "/wallet/account";

    const headers = {
      ...this.headers,
      authorization: `Bearer ${this.getToken()}`,
    };

    return await this.request(path, { method: "POST", headers, params: body });
  }

  async accountInfo(
    body: IWalletAccountInfoRequest
  ): Promise<IWalletAccountInfoResponse> {
    const path = `/wallet/account/${body.accountId}`;

    const headers = {
      ...this.headers,
      authorization: `Bearer ${this.getToken()}`,
    };

    return await this.request(path, { method: "GET", headers });
  }

  async accountList(): Promise<IWalletAccountInfoResponse[]> {
    const path = `/wallet/account`;

    const headers = {
      ...this.headers,
      authorization: `Bearer ${this.getToken()}`,
    };

    return await this.request(path, { method: "GET", headers });
  }

  async addressByAccount(
    body: IWalletAddressRequest
  ): Promise<IWalletAddressResponse> {
    const path = `/wallet/v2/address/list`;

    const headers = {
      ...this.headers,
      authorization: `Bearer ${this.getToken()}`,
    };

    return await this.request(path, { method: "GET", headers, params: body });
  }

  async balance(
    body: IWalletGetBalanceRequest
  ): Promise<IWalletBalanceListResponse[]> {
    const path = `/wallet/balance`;

    const headers = {
      ...this.headers,
      authorization: `Bearer ${this.getToken()}`,
    };

    return await this.request(path, { method: "GET", headers, params: body });
  }

  async updateBalance(
    body: IWalletUpdateBalanceRequest
  ): Promise<IWalletBalanceListResponse> {
    const path = `/wallet/balance`;

    const headers = {
      ...this.headers,
      authorization: `Bearer ${this.getToken()}`,
    };

    return await this.request(path, { method: "POST", headers, params: body });
  }
}
