import { VaultV3SDKOptions } from "../../interfaces/vault.v3.interface";
import VaultProviderV3Base from "../VaultProviderBase";
import { IBlockchainListResponse, ICurrencyListResponse, IExchangeRateRequest, IExchangeRateResponse, IGetCurrencyByNameRequest, IPreferredCurrenciesRequest, IPreferredCurrenciesResponse, ITokenInfoRequest, ITokenInfoResponse, ITokenSummaryResponse } from "./interfaces/currency.interface";
export declare class Currency extends VaultProviderV3Base {
    constructor(options: VaultV3SDKOptions);
    info(body: ITokenInfoRequest): Promise<ITokenInfoResponse>;
    summaryToken(): Promise<ITokenSummaryResponse[]>;
    preferredCurrencies(body: IPreferredCurrenciesRequest): Promise<IPreferredCurrenciesResponse>;
    setPreferredCurrencies(body: IPreferredCurrenciesRequest): Promise<IPreferredCurrenciesResponse>;
    getBlockchainList(): Promise<IBlockchainListResponse[]>;
    getExchangeRate(body: IExchangeRateRequest): Promise<IExchangeRateResponse>;
    getAllCurrencies(): Promise<ICurrencyListResponse[]>;
    getCurrencyByName(body: IGetCurrencyByNameRequest): Promise<ICurrencyListResponse>;
}
export default Currency;
