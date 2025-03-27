import { VaultV2SDKOptions } from "../../interfaces/vault.v2.interface";
import VaultProviderV2Base from "../VaultProviderBase";
import {
  IPaymentExchangeRequest,
  IPaymentExchangeResponse,
  IPaymentExhangeIdRequest,
  IPaymentPayInIdRequest,
  IPaymentPayInListRequest,
  IPaymentPayInRequest,
  IPaymentPayInResponse,
  IPaymentWithdrawIdRequest,
  IPaymentWithdrawRequest,
  IPaymentWithdrawResponse,
} from "./interfaces/payment.interface";

export class Payment extends VaultProviderV2Base {
  constructor(options: VaultV2SDKOptions) {
    super(options);
  }

  async payIn(body: IPaymentPayInRequest): Promise<IPaymentPayInResponse> {
    const { dryRun = false, ...othderData } = body;
    const path = `/wallet/payin`;

    const headers = {
      ...this.headers,
      authorization: `Bearer ${this.getToken()}`,
    };

    return await this.request(path, {
      method: "POST",
      headers,
      data: othderData,
      params: { dryRun },
    });
  }

  async payInInfo(
    body: IPaymentPayInIdRequest
  ): Promise<IPaymentPayInResponse> {
    const path = `/wallet/payin/${body.payIn}`;

    const headers = {
      ...this.headers,
      authorization: `Bearer ${this.getToken()}`,
    };

    return await this.request(path, {
      method: "GET",
      headers,
    });
  }

  async payInList(
    body: IPaymentPayInListRequest
  ): Promise<IPaymentPayInResponse[]> {
    const path = `/wallet/payin`;

    const headers = {
      ...this.headers,
      authorization: `Bearer ${this.getToken()}`,
    };

    return await this.request(path, {
      method: "GET",
      headers,
      params: body,
    });
  }

  async exchange(
    body: IPaymentExchangeRequest
  ): Promise<IPaymentExchangeResponse> {
    const { dryRun = false, ...othderData } = body;
    const path = `/wallet/direct-exchange`;

    const headers = {
      ...this.headers,
      authorization: `Bearer ${this.getToken()}`,
    };

    return await this.request(path, {
      method: "POST",
      headers,
      data: othderData,
      params: { dryRun },
    });
  }

  async exchangeInfo(
    body: IPaymentExhangeIdRequest
  ): Promise<IPaymentExchangeResponse> {
    const path = `/wallet/direct-exchange/${body.exchangeId}`;

    const headers = {
      ...this.headers,
      authorization: `Bearer ${this.getToken()}`,
    };

    return await this.request(path, {
      method: "GET",
      headers,
    });
  }

  async exchangeList(
    body: IPaymentPayInListRequest
  ): Promise<IPaymentExchangeResponse> {
    const path = `/wallet/direct-exchange`;

    const headers = {
      ...this.headers,
      authorization: `Bearer ${this.getToken()}`,
    };

    return await this.request(path, {
      method: "GET",
      headers,
      params: body,
    });
  }

  async withdraw(
    body: IPaymentWithdrawRequest
  ): Promise<IPaymentWithdrawResponse> {
    const { dryRun = false, autoConversion = false, ...othderData } = body;
    const path = `/wallet/withdraw`;

    const headers = {
      ...this.headers,
      authorization: `Bearer ${this.getToken()}`,
    };

    return await this.request(path, {
      method: "POST",
      headers,
      data: othderData,
      params: { dryRun, autoConversion },
    });
  }

  async withdrawInfo(
    body: IPaymentWithdrawIdRequest
  ): Promise<IPaymentWithdrawResponse> {
    const path = `/wallet/withdraw/${body.withdrawId}`;

    const headers = {
      ...this.headers,
      authorization: `Bearer ${this.getToken()}`,
    };

    return await this.request(path, {
      method: "GET",
      headers,
    });
  }

  async withdrawList(
    body: IPaymentPayInListRequest
  ): Promise<IPaymentWithdrawResponse[]> {
    const path = `/wallet/withdraw`;

    const headers = {
      ...this.headers,
      authorization: `Bearer ${this.getToken()}`,
    };

    return await this.request(path, {
      method: "GET",
      headers,
      params: body,
    });
  }
}

export default Payment;
