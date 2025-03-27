export interface ICurrency {
  id: number;
  slug: string;
  shortName: string;
  description: string;
  type: string;
  decimals: number;
  iconUrl: string;
  totalsPrecision: number;
  roundingPrecision: number;
  eurPrice: string;
  settings: ICurrencySettings;
}

export interface ICurrencySettings {
  enabled: boolean;
  partner: string;
  group: string;
  walletEnabled: boolean;
  transferEnabled: boolean;
  transferFeePercent: number;
  transferFeeFixed: number;
  transferFeeMin: number;
  transferFeeMax: number;
}

export interface IBlockchain {
  id: number;
  name: string;
  slug: string;
  explorer: string;
}

export interface IFeeConfig {
  feePercent: number;
  feeFixed: number;
  feeMin: number;
  feeMax: number;
}

export interface ITransactionResponse {
  id: string;
  status: string;
  createdAt: string;
  updatedAt: string;
}

export interface IRateRequest {
  fromCurrency: string;
  toCurrency: string;
  amount: string;
  account?: string;
  partner?: string;
}

export interface IExchangeRateRequest extends IRateRequest {
  group?: string;
}

export interface ISignedRate {
  rateRequest: IRateRequest;
  rate: string;
  validUntil?: string;
  signature?: string;
}

export interface ISignedRateWithFee extends ISignedRate {
  feeConfig: IFeeConfig;
  validUntil: string;
  signature: string;
}

export interface IExchangeRateResponse {
  rateRequest: IRateRequest;
  rate: string;
  validUntil: string;
  signature: string;
}

export interface ICurrencyExchange {
  fromCurrency: string;
  toCurrency: string;
  fromAmount?: string;
  toAmount?: string;
  signedRate?: ISignedRate;
}

export interface IToken {
  id: number;
  name: string;
  slug: string;
  address: string;
  decimals: number;
  nativeSign: boolean;
  minConsolidation: number;
  blockchain: IBlockchain;
  settings: ITokenSettings;
}

export interface ITokenSettings {
  partner: string;
  group: string;
  depositEnabled: boolean;
  depositFeePercent: number;
  depositFeeFixed: number;
  depositFeeMin: number;
  depositFeeMax: number;
  withdrawEnabled: boolean;
  withdrawFeePercent: number;
  withdrawFeeFixed: number;
  withdrawFeeMin: number;
  withdrawFeeMax: number;
}

export interface ITokenInfoRequest {
  currency?: string;
  blockchain?: string;
  overrideGroup?: string;
}

export interface ITokenInfoResponse {
  tokenInfo: IToken & { currency: ICurrency };
}

export interface ITokenSummaryResponse {
  id: number;
  name: string;
  slug: string;
  address: string;
  decimals: number;
  nativeSign: boolean;
  minConsolidation: number;
}

export interface ICurrencyListResponse extends ICurrency {
  tokens: IToken[];
}

export interface IBlockchainListResponse extends IBlockchain {}

export interface IPreferredCurrenciesRequest {
  accountId: string;
  currencies?: string[];
}

export type IPreferredCurrenciesResponse = string[];

export interface IGetCurrencyByNameRequest {
  name: string;
}
