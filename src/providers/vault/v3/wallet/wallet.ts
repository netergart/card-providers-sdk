import { VaultV3SDKOptions } from "../../interfaces/vault.v3.interface";
import VaultProviderV3Base from "../VaultProviderBase";
import {
  IWalletAccountCreateRequest,
  IWalletAccountCreateResponse,
  IWalletAccountInfoRequest,
  IWalletAccountInfoResponse,
  IWalletAddressListRequest,
  IWalletAddressRequest,
  IWalletAddressResponse,
  IWalletBalanceListResponse,
  IWalletGetBalanceLogListRequest,
  IWalletGetBalanceLogListResponse,
  IWalletGetBalanceLogReceiptRequest,
  IWalletGetBalanceLogReceiptResponse,
} from "./interfaces/wallet.interface";

export class Wallet extends VaultProviderV3Base {
  constructor(options: VaultV3SDKOptions) {
    super(options);
  }

  async accountInfo(
    body: IWalletAccountInfoRequest
  ): Promise<IWalletAccountInfoResponse> {
    const path = `/wallet/account/${body.accountId}`;

    return await this.request(path, {
      method: "GET",
      headers: this.createHeaders(),
    });
  }

  async accountList(): Promise<IWalletAccountInfoResponse[]> {
    const path = "/wallet/account";

    return await this.request(path, {
      method: "GET",
      headers: this.createHeaders(),
    });
  }

  async balance(): Promise<IWalletBalanceListResponse[]> {
    const path = `/wallet/v1/balance`;

    return await this.request(path, {
      method: "GET",
      headers: this.createHeaders(),
    });
  }

  async getBalanceLogReceipt(
    body: IWalletGetBalanceLogReceiptRequest
  ): Promise<IWalletGetBalanceLogReceiptResponse> {
    const path = `/wallet/balance/log/${body.logId}`;

    return await this.request(path, {
      method: "GET",
      headers: this.createHeaders(),
      params: body,
    });
  }

  async getBalanceLogList(
    body: IWalletGetBalanceLogListRequest
  ): Promise<IWalletGetBalanceLogListResponse> {
    const path = `/wallet/balance/log`;

    return await this.request(path, {
      method: "GET",
      headers: this.createHeaders(),
      params: body,
    });
  }

  async addressByAccount(
    body: IWalletAddressRequest
  ): Promise<IWalletAddressResponse[]> {
    const path = `/wallet/v2/address/`;

    return await this.request(path, {
      method: "GET",
      headers: this.createHeaders(),
      params: body,
    });
  }

  async addressList(
    body: IWalletAddressListRequest
  ): Promise<IWalletAddressResponse[]> {
    const path = `/wallet/v2/address/list`;

    return await this.request(path, {
      method: "GET",
      headers: this.createHeaders(),
      params: body,
    });
  }

  async createAccount(
    body: IWalletAccountCreateRequest
  ): Promise<IWalletAccountCreateResponse> {
    const path = `/wallet/account`;

    return await this.request(path, {
      method: "POST",
      headers: this.createHeaders(),
      data: body,
    });
  }
}
