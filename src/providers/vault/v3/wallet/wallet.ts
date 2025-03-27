import { VaultV3SDKOptions } from "../../interfaces/vault.v3.interface";
import { ErrorResponse } from "../interfaces/common.interface";
import VaultProviderV3Base from "../VaultProviderBase";
import {
  IWalletAccountInfoRequest,
  IWalletAccountInfoResponse,
  IWalletAddressRequest,
  IWalletAddressResponse,
  IWalletGetBalanceRequest,
  IWalletBalanceListResponse,
  IWalletGetBalanceLogReceiptResponse,
  IWalletGetBalanceLogReceiptRequest,
  IWalletGetBalanceLogListRequest,
  IWalletGetBalanceLogListResponse,
} from "./interfaces/wallet.interface";

export class Wallet extends VaultProviderV3Base {
  constructor(options: VaultV3SDKOptions) {
    super(options);
  }

  async accountInfo(
    body: IWalletAccountInfoRequest
  ): Promise<IWalletAccountInfoResponse | ErrorResponse> {
    const path = `/wallet/account/${body.accountId}`;

    return await this.request(path, {
      method: "GET",
      headers: this.createHeaders(),
    });
  }

  async accountList(): Promise<IWalletAccountInfoResponse[] | ErrorResponse> {
    const path = "/wallet/account";

    return await this.request(path, {
      method: "GET",
      headers: this.createHeaders(),
    });
  }

  async addressByAccount(
    body: IWalletAddressRequest
  ): Promise<IWalletAddressResponse | ErrorResponse> {
    const path = `/wallet/v3/address/list`;

    return await this.request(path, {
      method: "GET",
      headers: this.createHeaders(),
      params: body,
    });
  }

  async balance(
    body: IWalletGetBalanceRequest
  ): Promise<IWalletBalanceListResponse[] | ErrorResponse> {
    const path = `/wallet/v1/balance`;

    return await this.request(path, {
      method: "GET",
      headers: this.createHeaders(),
      params: body,
    });
  }

  async getBalanceLogReceipt(
    body: IWalletGetBalanceLogReceiptRequest
  ): Promise<IWalletGetBalanceLogReceiptResponse | ErrorResponse> {
    const path = `/wallet/balance/log/${body.logId}`;

    return await this.request(path, {
      method: "GET",
      headers: this.createHeaders(),
      params: body,
    });
  }

  async getBalanceLogList(
    body: IWalletGetBalanceLogListRequest
  ): Promise<IWalletGetBalanceLogListResponse | ErrorResponse> {
    const path = `/wallet/balance/log`;

    return await this.request(path, {
      method: "GET",
      headers: this.createHeaders(),
      params: body,
    });
  }
}
