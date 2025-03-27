export enum AccountType {
  CHECKING = "CHECKING",
  CARD_PREPAID = "CARD_PREPAID",
  BANK_ACCOUNT_VIRTUAL = "BANK_ACCOUNT_VIRTUAL",
}
export interface IWalletCreateAccountRequest {
  shortName: string;
  accountType: AccountType;
  currency?: string;
  blockchain?: string;
}

export interface IWalletAccountInfoResponse {
  account: string;
  accountType: string;
  shortName: string;
  status: string;
  currency: string;
  blockchain: string;
}

export interface IWalletAccountInfoRequest {
  accountId: string;
}

export interface IWalletAddressRequest extends IWalletAccountInfoRequest {
  addressIndex?: number;
  blockchain: string;
  currency: string;
}

export interface IWalletAddressResponse {
  type: string;
  addressIndex: number;
  blockchain: string;
  address: string | number;
  accountHolderName: string;
  accountNumber: string;
  accountRoutingNumber: string;
  memo: string;
  bankName: string;
  accountHolderAddress: string;
  swiftBic: string;
  bankAddress: string;
  institutionNumber: string;
  transitNumber: string;
  iban: string;
  bic: string;
}

export interface IWalletGetBalanceRequest extends IWalletAccountInfoRequest {
  accountIds?: string[];
  currency?: string;
  byDate?: string;
}

export interface IWalletUpdateBalanceRequest extends IWalletAccountInfoRequest {
  currency: string;
}

export interface IWalletBalanceListResponse {
  account: string;
  balance: string;
  currency: string;
  lastUpdated: string;
}
