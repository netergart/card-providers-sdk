import { VaultV3SDKOptions } from "../../interfaces/vault.v3.interface";
import { ErrorResponse } from "../interfaces/common.interface";
import VaultProviderV3Base from "../VaultProviderBase";
import { IBlockchainListResponse, ICurrencyListResponse, IExchangeRateRequest, IExchangeRateResponse, IGetCurrencyByNameRequest, IPreferredCurrenciesRequest, IPreferredCurrenciesResponse, ITokenInfoRequest, ITokenInfoResponse, ITokenSummaryResponse } from "./interfaces/currency.interface";
export declare class Currency extends VaultProviderV3Base {
    constructor(options: VaultV3SDKOptions);
    info(body: ITokenInfoRequest): Promise<ITokenInfoResponse | ErrorResponse>;
    summaryToken(): Promise<ITokenSummaryResponse[] | ErrorResponse>;
    preferredCurrencies(body: IPreferredCurrenciesRequest): Promise<IPreferredCurrenciesResponse | ErrorResponse>;
    setPreferredCurrencies(body: IPreferredCurrenciesRequest): Promise<IPreferredCurrenciesResponse | ErrorResponse>;
    getBlockchainList(): Promise<IBlockchainListResponse[] | ErrorResponse>;
    getExchangeRate(body: IExchangeRateRequest): Promise<IExchangeRateResponse | ErrorResponse>;
    getAllCurrencies(): Promise<ICurrencyListResponse[] | ErrorResponse>;
    getCurrencyByName(body: IGetCurrencyByNameRequest): Promise<ICurrencyListResponse | ErrorResponse>;
}
export default Currency;
