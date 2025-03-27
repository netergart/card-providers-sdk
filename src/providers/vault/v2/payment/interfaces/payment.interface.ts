export interface IPaymentPayInRequest {
  dryRun?: boolean;
  account: string;
  fromCurrency: string;
  toCurrency: string;
  fromAmount: string;
}

export interface IPaymentPayInResponse {
  id: string;
  invoiceId: string;
  account: string;
  fromCurrency: string;
  toCurrency: string;
  fromAmount: string;
  toAmount: string;
  signedRate: {
    rateRequest: {
      fromCurrency: string;
      toCurrency: string;
      amount: string;
      account: string;
      partner: string;
    };
    rate: string;
    feeConfig: {
      feePercent: number;
      feeFixed: number;
      feeMin: number;
      feeMax: number;
    };
    validUntil: string;
    signature: string;
  };
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

export interface IPaymentExchangeRequest {
  dryRun?: boolean;
  id?: string;
  fromAccount: string;
  toAccount: string;
  fromCurrency: string;
  toCurrency: string;
  fromAmount?: string;
  toAmount?: string;
}

export interface IPaymentExchangeResponse {
  id: string;
  fromAccount: string;
  toAccount: string;
  fromCurrency: string;
  toCurrency: string;
  fromAmount: string;
  toAmount: string;
  signedRate: {
    rateRequest: {
      fromCurrency: string;
      toCurrency: string;
      amount: string;
      account: string;
      partner: string;
    };
    rate: string;
    validUntil: string;
    signature: string;
  };
  feeAmount: string;
  feeCurrency: string;
  status: string;
  note: string;
  createdAt: string;
  updatedAt: string;
}

export interface IPaymentExhangeIdRequest {
  exchangeId: string;
}

export enum WithdrawType {
  ATM = "ATM",
  BANK_TRANSFER = "BANK_TRANSFER",
  CRYPTO = "CRYPTO",
  PAY_SPOT = "PAY_SPOT",
  COUNTERPARTY = "COUNTERPARTY",
}

export interface IPaymentWithdrawRequest {
  dryRun?: boolean;
  autoConversion?: boolean;
  type: WithdrawType;
  currency: string;
  amount: string;
  fromAccount: string;
  externalTransactionId?: string;
  atmId?: string;
  creditorAccountId?: string;
  iban?: string;
  bicOrSwiftCode?: string;
  to?: string;
  blockchain?: string;
  beneficiaryAccountNumber?: string;
  beneficiaryName?: string;
  paymentCode?: number;
  paymentPurpose?: string;
  modul?: string;
  counterPartyId?: string;
}

export interface IPaymentWithdrawResponse {
  id: string;
  currency: string;
  amount: string;
  conversion: {
    amount: string;
    currency: string;
    rate: {
      rateRequest: {
        fromCurrency: string;
        toCurrency: string;
        amount: string;
        account: string;
        partner: string;
      };
      rate: string;
      validUntil: string;
      signature: string;
    };
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

export interface IPaymentWithdrawIdRequest {
  withdrawId: string;
}
