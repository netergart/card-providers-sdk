import { VaultV3SDKOptions } from "../../interfaces/vault.v3.interface";
import VaultProviderV3Base from "../VaultProviderBase";
import {
  IBlockchainListResponse,
  ICurrencyListResponse,
  IExchangeRateRequest,
  IExchangeRateResponse,
  IGetCurrencyByNameRequest,
  IPreferredCurrenciesRequest,
  IPreferredCurrenciesResponse,
  ITokenInfoRequest,
  ITokenInfoResponse,
  ITokenSummaryResponse,
} from "./interfaces/currency.interface";

export class Currency extends VaultProviderV3Base {
  constructor(options: VaultV3SDKOptions) {
    super(options);
  }

  async info(body: ITokenInfoRequest): Promise<ITokenInfoResponse> {
    const path = "/currency/token";

    return await this.request(path, {
      method: "GET",
      headers: this.createHeaders(),
      params: body,
    });
  }

  async summaryToken(): Promise<ITokenSummaryResponse[]> {
    const path = "/currency/token/short";

    return await this.request(path, {
      method: "GET",
      headers: this.createHeaders(),
    });
  }

  async preferredCurrencies(
    body: IPreferredCurrenciesRequest
  ): Promise<IPreferredCurrenciesResponse> {
    const path = `/currency/preferred/${body.accountId}`;

    return await this.request(path, {
      method: "GET",
      headers: this.createHeaders(),
    });
  }

  async setPreferredCurrencies(
    body: IPreferredCurrenciesRequest
  ): Promise<IPreferredCurrenciesResponse> {
    const path = `/currency/preferred/${body.accountId}`;

    return await this.request(path, {
      method: "POST",
      headers: this.createHeaders(),
      data: body,
    });
  }

  async getBlockchainList(): Promise<IBlockchainListResponse[]> {
    const path = "/currency/blockchain";

    return await this.request(path, {
      method: "GET",
      headers: this.createHeaders(),
    });
  }

  async getExchangeRate(
    body: IExchangeRateRequest
  ): Promise<IExchangeRateResponse> {
    const path = "/currency/exchange-rate";

    return await this.request(path, {
      method: "GET",
      headers: this.createHeaders(),
      params: body,
    });
  }

  async getAllCurrencies(): Promise<ICurrencyListResponse[]> {
    const path = "/currency";

    return await this.request(path, {
      method: "GET",
      headers: this.createHeaders(),
    });
  }

  async getCurrencyByName(
    body: IGetCurrencyByNameRequest
  ): Promise<ICurrencyListResponse> {
    const path = `/currency/${body.name}`;

    return await this.request(path, {
      method: "GET",
      headers: this.createHeaders(),
    });
  }
}

export default Currency;
