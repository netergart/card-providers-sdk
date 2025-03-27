import {
  ICurrencyExchange,
  IFeeConfig,
  ISignedRate,
} from "../../currency/interfaces/currency.interface";
import {
  IWalletSignedRate,
  IWalletSignedRateResponse,
} from "../../wallet/interfaces/wallet.interface";

interface SignedRate extends ISignedRate {}

export interface IPaymentPayInRequest extends ICurrencyExchange {
  dryRun?: boolean;
  account: string;
}

export interface IPaymentPayInResponse extends ICurrencyExchange {
  id: string;
  invoiceId: string;
  account: string;
  signedRate: SignedRate & { feeConfig: IFeeConfig };
  status: string;
  createdAt: string;
  updatedAt: string;
}

export interface IPaymentExchangeRequest extends ICurrencyExchange {
  dryRun?: boolean;
  id?: string;
  fromAccount: string;
  toAccount?: string;
}

export interface IPaymentExchangeResponse extends ICurrencyExchange {
  id: string;
  fromAccount: string;
  toAccount: string;
  signedRate: SignedRate;
  feeAmount: string;
  feeCurrency: string;
  status: string;
  note: string;
  createdAt: string;
  updatedAt: string;
}

export enum WithdrawType {
  ATM = "ATM",
  BANK_TRANSFER = "BANK_TRANSFER",
  CRYPTO = "CRYPTO",
  PAY_SPOT = "PAY_SPOT",
  COUNTERPARTY = "COUNTERPARTY",
}

interface BaseWithdrawRequest {
  dryRun?: boolean;
  autoConversion?: boolean;
  type: WithdrawType;
  meta: Record<string, any>;
  currency: string;
  amount: string;
  conversion: {
    rate: SignedRate;
    amount: string;
    currency: string;
  }[];
  fromAccount: string;
  externalTransactionId: string;
}

interface ATMWithdrawRequest extends BaseWithdrawRequest {
  type: WithdrawType.ATM;
  atmId: string;
  creditorAccountId: string;
}

interface BankTransferWithdrawRequest extends BaseWithdrawRequest {
  type: WithdrawType.BANK_TRANSFER;
  iban?: string;
  bicOrSwiftCode?: string;
}

interface CryptoWithdrawRequest extends BaseWithdrawRequest {
  type: WithdrawType.CRYPTO;
  to: string;
  blockchain: string;
}

interface PaySpotWithdrawRequest extends BaseWithdrawRequest {
  type: WithdrawType.PAY_SPOT;
  beneficiaryAccountNumber: string;
  beneficiaryName: string;
  paymentCode: number;
  paymentPurpose: string;
  modul: string;
}

interface CounterpartyWithdrawRequest extends BaseWithdrawRequest {
  type: WithdrawType.COUNTERPARTY;
  counterPartyId: string;
}

export type IPaymentWithdrawRequest =
  | ATMWithdrawRequest
  | BankTransferWithdrawRequest
  | CryptoWithdrawRequest
  | PaySpotWithdrawRequest
  | CounterpartyWithdrawRequest;

export interface IPaymentWithdrawResponse {
  id: string;
  currency: string;
  amount: string;
  conversion: {
    amount: string;
    currency: string;
    rate: SignedRate;
  }[];
  type: string;
  meta: any;
  fromAccount: string;
  feeAmount: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  externalTransactionId: string;
  atmId: string;
  creditorAccountId: string;
}

export interface IWalletPayInRequest extends Partial<ICurrencyExchange> {
  dryRun?: boolean;
  account?: string;
  signedRate?: IWalletSignedRate;
}

export interface IWalletPayInResponse extends ICurrencyExchange {
  id: string;
  invoiceId: string;
  account: string;
  signedRate: IWalletSignedRateResponse;
  status: string;
  createdAt: string;
  updatedAt: string;
}

export interface IPaymentPayInIdRequest {
  payIn: string;
}

export interface IPaymentPayInListRequest {
  accountId: string;
}

export interface IPaymentExchangeIdRequest {
  exchangeId: string;
}

export interface IPaymentWithdrawIdRequest {
  withdrawId: string;
}
