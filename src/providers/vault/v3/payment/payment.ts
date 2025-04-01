import { VaultV3SDKOptions } from "../../interfaces/vault.v3.interface";
import VaultProviderV3Base from "../VaultProviderBase";
import {
  IPaymentExchangeIdRequest,
  IPaymentExchangeRequest,
  IPaymentExchangeResponse,
  IPaymentPayInIdRequest,
  IPaymentPayInListRequest,
  IPaymentPayInResponse,
  IPaymentWithdrawIdRequest,
  IPaymentWithdrawRequest,
  IPaymentWithdrawResponse,
  IWalletPayInRequest,
  IWalletPayInResponse,
} from "./interfaces/payment.interface";

export class Payment extends VaultProviderV3Base {
  constructor(options: VaultV3SDKOptions) {
    super(options);
  }

  async payIn(body: IWalletPayInRequest): Promise<IWalletPayInResponse> {
    const path = "/wallet/payin";
    const { dryRun = false, ...data } = body;

    return await this.request(path, {
      method: "POST",
      headers: this.createHeaders(),
      data,
      params: { dryRun },
    });
  }

  async payInInfo(
    body: IPaymentPayInIdRequest
  ): Promise<IPaymentPayInResponse> {
    const path = `/wallet/payin/${body.payIn}`;

    return await this.request(path, {
      method: "GET",
      headers: this.createHeaders(),
    });
  }

  async payInList(
    body: IPaymentPayInListRequest
  ): Promise<IPaymentPayInResponse[]> {
    const path = `/wallet/payin`;

    return await this.request(path, {
      method: "GET",
      headers: this.createHeaders(),
      params: body,
    });
  }

  async exchange(
    body: IPaymentExchangeRequest
  ): Promise<IPaymentExchangeResponse> {
    const { dryRun = false, ...data } = body;
    const path = `/wallet/direct-exchange`;

    return await this.request(path, {
      method: "POST",
      headers: this.createHeaders(),
      data,
      params: { dryRun },
    });
  }

  async exchangeInfo(
    body: IPaymentExchangeIdRequest
  ): Promise<IPaymentExchangeResponse> {
    const path = `/wallet/direct-exchange/${body.exchangeId}`;

    return await this.request(path, {
      method: "GET",
      headers: this.createHeaders(),
    });
  }

  async exchangeList(
    body: IPaymentPayInListRequest
  ): Promise<IPaymentExchangeResponse[]> {
    const path = `/wallet/direct-exchange`;

    return await this.request(path, {
      method: "GET",
      headers: this.createHeaders(),
      params: body,
    });
  }

  async withdraw(
    body: IPaymentWithdrawRequest
  ): Promise<IPaymentWithdrawResponse> {
    const { dryRun = false, autoConversion = false, ...data } = body;
    const path = `/wallet/withdraw`;

    return await this.request(path, {
      method: "POST",
      headers: this.createHeaders(),
      data,
      params: { dryRun, autoConversion },
    });
  }

  async withdrawInfo(
    body: IPaymentWithdrawIdRequest
  ): Promise<IPaymentWithdrawResponse> {
    const path = `/wallet/withdraw/${body.withdrawId}`;

    return await this.request(path, {
      method: "GET",
      headers: this.createHeaders(),
    });
  }

  async withdrawList(
    body: IPaymentPayInListRequest
  ): Promise<IPaymentWithdrawResponse[]> {
    const path = `/wallet/withdraw`;

    return await this.request(path, {
      method: "GET",
      headers: this.createHeaders(),
      params: body,
    });
  }
}

export default Payment;
