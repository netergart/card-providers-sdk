import {
  IFeeConfig,
  IRateRequest,
  ISignedRate,
  ISignedRateWithFee,
} from "../../currency/interfaces/currency.interface";
import {
  IPaginatedResponse,
  IPaginationParams,
} from "../../interfaces/common.interface";

export enum AccountType {
  CHECKING = "CHECKING",
  CARD_PREPAID = "CARD_PREPAID",
  BANK_ACCOUNT_VIRTUAL = "BANK_ACCOUNT_VIRTUAL",
}

export interface IWalletBalance {
  account: string;
  balance: string;
  currency: string;
  lastUpdated: string;
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

export interface IWalletAddressRequest {
  accountId: string;
  addressIndex?: number;
  blockchain?: string;
  currency?: string;
}

export interface IWalletGetBalanceRequest {
  accountId: string;
  currency?: string;
  byDate?: string;
}

export interface IWalletBalanceListResponse {
  balances: IWalletBalance[];
  total: number;
}

export interface IReceiptOriginatorInfo {
  originator_name: string;
  originator_address: string;
  originator_blockchain_address: string;
  originator_blockchain_network: string;
  originator_account_number: string;
  originator_routing_number: string;
  originator_swift_bic: string;
  originator_institution_name: string;
  originator_institution_address: string;
}

export interface IReceiptCounterpartyInfo {
  counterparty_name: string;
  counterparty_address: string;
  counterparty_blockchain_address: string;
  counterparty_blockchain_network: string;
  counterparty_account_number: string;
  counterparty_routing_number: string;
  counterparty_swift_bic: string;
  counterparty_institution_name: string;
  counterparty_institution_address: string;
}

export interface IReceiptExchangeInfo {
  exchange_type: string;
  exchange_source_account_id: string;
  exchange_destination_account_id: string;
  exchange_amount_debit: string;
  exchange_amount_credit: string;
}

export interface IReceiptTransferInfo {
  tranfer_source_account_id: string;
  tranfer_destination_account_id: string;
  tranfer_amount_debit: string;
  tranfer_amount_credit: string;
}

export interface IReceipt
  extends IReceiptOriginatorInfo,
    IReceiptCounterpartyInfo,
    IReceiptExchangeInfo,
    IReceiptTransferInfo {
  note: string;
  rail: string;
  rail_reference: string;
  purpose: string;
  memo: string;
}

export interface IWalletGetBalanceLogReceiptResponse {
  id: string;
  account: string;
  change: string;
  currency: string;
  createdAt: string;
  reasonId: string;
  reasonType: string;
  note: string;
  receipt: IReceipt;
}

export interface IWalletGetBalanceLogReceiptRequest {
  logId: string;
}

export interface IWalletRateRequest extends IRateRequest {}

export interface IWalletSignedRate extends ISignedRate {}

export interface IWalletFeeConfig extends IFeeConfig {}

export interface IWalletSignedRateResponse extends ISignedRateWithFee {}

export interface IWalletGetBalanceLogListRequest
  extends Omit<IPaginationParams, "sort"> {
  accountIds?: string[];
  currency?: string;
  from?: string;
  to?: string;
  direction?: "CREDIT" | "DEBIT";
  reasonType?: string;
  search?: string;
}

export interface IWalletBalanceLog {
  id: string;
  account: string;
  change: string;
  currency: string;
  createdAt: string;
  reasonId: string;
  reasonType: string;
  note: string;
}

export interface IWalletGetBalanceLogListResponse
  extends IPaginatedResponse<IWalletBalanceLog> {}

export interface IWalletAddressListRequest {
  accountId: string;
  blockchain: string;
  currency: string;
  addressIndex?: number;
}

export interface IWalletAddressResponse {
  type: string;
  memo?: string;
  addressIndex?: number;
  blockchain?: string;
  address?: string;
  accountHolderName?: string;
  accountNumber?: string;
  accountRoutingNumber?: string;
  accountHolderAddress?: string;
  swiftBic?: string;
  bic?: string;
  institutionNumber?: string;
  transitNumber?: string;
  bankName?: string;
  bankAddress?: string;
  iban?: string;
}

export interface IWalletAccountCreateRequest {
  shortName: string;
  accountType: string;
  currency: string;
  blockchain: string;
}

export interface IWalletAccountCreateResponse {
  account: string;
  accountType: string;
  shortName: string;
  status: string;
  currency: string;
  blockchain: string;
}
