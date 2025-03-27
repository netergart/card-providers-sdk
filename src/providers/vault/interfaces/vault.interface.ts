import { ProviderBaseSDKOptions } from "../../ProviderBaseSDK";

export interface VaultSDKVersion {
  version: number;
}

export interface VaultSDKOptions
  extends ProviderBaseSDKOptions,
    VaultSDKVersion {
  xMerchantId: string;
}

export interface ISignUpRequest {
  phone: string;
  password: string;
}

export interface IResendPhoneConfirmRequest {
  phone: string;
}

export interface IPhoneConfirmRequest extends IResendPhoneConfirmRequest {
  smsCode: string;
}

export interface IAccessToken {
  accessToken: string;
}

export interface IAddEmailRequest {
  email: string;
}

export interface ISignUpResponse {
  access_token: string;
  token_type: string;
  refresh_token: string;
  expires_in: number;
  scope: string;
}

export interface ICommonResponse {
  result: string;
}

export interface ILoginRequest {
  password: string;
  number: string;
  grant_type?: string;
}

export interface IConfirmEmailRequest {
  email: string;
  event: string;
  token: string;
}

export interface IProfileRequest {
  firstName: string;
  lastName: string;
  primaryCurrency: string;
  citizenshipCountry: string;
  residenceCountry: string;
  residenceCity: string;
  residenceStreet: string;
  residenceZipCode: string;
  dateOfBirth: string;
}

export interface IProfileInfoResponse {
  email: string;
  confirmedEmail: boolean;
  phone: string;
  firstName: string;
  lastName: string;
  primaryCurrency: string;
  citizenshipCountry: string;
  residenceCountry: string;
  residenceCity: string;
  residenceStreet: string;
  residenceZipCode: string;
  pushEnabled: boolean;
  enabled2FA: boolean;
  dateOfBirth: string;
  veroId: string;
  loyaltyLevel: string;
}

export interface IWalletCreateRequest {
  currencies: string[];
}

export interface IWalletResponse {
  wallets: {
    id: number; // identifier of the wallet.
    name: string; // name of the wallet.
    externalId: string; // external identifier of the wallet.
    address: string; // address of the wallet.
    currency: string; // currency of the wallet.
    baseCurrency: string; // base currency of the wallet.
    pattern: string; // pattern of the wallet.
    balance: number; // balance of the wallet.
    limits: {
      additionalProp1: {
        min: number; // minimum limit.
        all: number; // total limit.
      };
      additionalProp2: {
        min: number; // minimum limit.
        all: number; // total limit.
      };
      additionalProp3: {
        min: number; // minimum limit.
        all: number; // total limit.
      };
    };
    balanceString: string; // string representation of the balance.
    availableBalance: number; // available balance of the wallet.
    customerId: number; // identifier of the customer.
    createdAt: string; // date and time of wallet creation.
    isDebit: boolean; // indicates whether the wallet is a debit wallet.
    allowOperations: string[];
    color: string; // color of the wallet.
    fiat: {
      customerCurrency: string; // customer currency.
      amount: number; // amount of fiat currency.
      change: number; // change.
      changePercent: number; // change percentage.
      rate: number; // rate.
    };
    scale: number; // scale.
    stub: boolean; // indicates whether the wallet is a stub.
    walletCreationState: string; // state of wallet creation.
    iconUrl: string; // url of the wallet icon.
    network: string; // network of the wallet.
  }[];
  accounts: {
    name: string; // name of the account.
    availableBalance: number; // available balance of the account.
    availableBalanceInDefaultCurrency: number; // available balance in default currency.
    allowOperations: string[];
    balance: number; // balance of the account.
    color: string; // color of the account.
    currency: string; // currency of the account.
    status: string; // status of the account.
    scale: number; // scale.
    details: {
      // details of the account.
      beneficiary: string; // beneficiary of the account.
      number: string; // number of the account.
      bicCode: string; // bic code of the account.
      beneficiaryBankName: string; // beneficiary bank name.
      paymentDetails: string; // payment details.
      country: string; // country.
      depositFeePercent: number; // deposit fee percentage.
    };
    kyc: {
      status: string; // kyc status.
      additionalStatus: string[];
      rejectReason: string; // reason for rejection.
    };
    createdAt: string; // date and time of account creation.
    iconUrl: string; // url of the account icon.
  }[];
  fiat: {
    customerCurrency: string; // customer currency.
    amount: number; // amount of fiat currency.
    change: number; // change.
    changePercent: number; // change percentage.
    rate: number; // rate.
  };
}

export interface IKycStatusResponse {
  kycLevel: string; // the current KYC level of the customer.
  kyc1ClientData: {
    // KYC level 1 client data.
    status: string; // the status of KYC level 1 verification.
    reason: string; // the reason for the KYC level 1 status.
    rejectFormattedMessage: string; // a formatted message explaining the reason for rejection if applicable.
  };
  kyc2ClientData: {
    // KYC level 2 client data.
    status: string; // the status of KYC level 2 verification.
    reason: string; // the reason for the KYC level 2 status.
    rejectFormattedMessage: string; // a formatted message explaining the reason for rejection if applicable.
  };
  kyc3ClientData: {
    // KYC level 3 client data.
    status: string; // the status of KYC level 3 verification.
    reason: string; // the reason for the KYC level 3 status.
    rejectFormattedMessage: string; // a formatted message explaining the reason for rejection if applicable.
  };
  daysToExpireKyc: number; // the number of days until the current KYC verification expires.
  remainingAmount: {
    // information about the remaining amount allowed for transactions.
    value: number; // the value of the remaining amount.
    currency: string; // the currency of the remaining amount.
  };
  blockedAmount: {
    // information about any blocked amount.
    value: number; // the value of the blocked amount.
    currency: string; // the currency of the blocked amount.
  };
  kyc1AttemptsExceeded: boolean; // a boolean indicating whether the maximum number of KYC level 1 attempts has been exceeded.
}

export interface IKycLimitResponse {
  kycNoneLimit: {
    value: number; // the value of the limit.
    currency: string; // the currency of the limit.
  };
  kycnumberLimit: {
    value: number; // the value of the limit.
    currency: string; // the currency of the limit.
  };
  kyc1Limit: {
    value: number; // the value of the limit.
    currency: string; // the currency of the limit.
  };
  kyc2Limit: {
    value: number; // the value of the limit.
    currency: string; // the currency of the limit.
  };
  kyc3Limit: {
    value: number; // the value of the limit.
    currency: string; // the currency of the limit.
  };
}

export interface IKyc1StartResponse {
  id: string;
}

export interface IKycSumSubStartResponse {
  token: string;
}

export interface IKyc1FinishRequest {
  identificationId: string;
}

export interface ICardPricesResponse {
  prices: {
    cardType: string; // type of the card.
    currency: string; // currency in which the price is stated.
    price: number; // price of the card.
    delivery: number; // delivery fee.
    cardProgram: string; // card program.
    cardDesignId: string; // design ID of the card.
    duration?: number;
  }[];
}

export interface ICardDeliveryCountriesResponse {
  countries: {
    countryIsoCode: string; // ISO 3166-1 alpha-3 code for the country (e.g., "DZA" represents Algeria).
    countryIsoCode2: string; // ISO 3166-1 alpha-2 code for the country (e.g., "DZ" represents Algeria).
    countryName: string; // the name of the country.
    price: {
      value: number; // the cost of delivering to this country.
      currency: string; // the currency in which the delivery cost is specified (e.g., "USD" for US Dollars).
    };
  }[];
}

export interface ICardItemResponse {
  id: number; // unique identifier of the card.
  expired: string; // card expiration date.
  number: string; // masked card number.
  balance: {
    value: number; // card balance value.
    currency: string; // currency of the balance.
  };
  cardholderName: string; // name of the cardholder.
  cardType: string; // type of the card.
  status: string; // current status of the card.
  cardCompany: string; // card provider (e.g., VISA, MasterCard).
  monthlyIncome: {
    value: number; // monthly income associated with the card.
    currency: string; // currency of the monthly income.
  };
  monthlyExpenses: {
    value: number; // monthly expenses associated with the card.
    currency: string; // currency of the monthly expenses.
  };
  cardRequestId: number; // ID of the card request.
  additionalStatuses: string[];
  cardDesignId: string; // design ID of the card.
  cardProgram: string; // card program identifier.
  ibanDetails: {
    ibanId: string; // IBAN ID associated with the card.
    beneficiary: string; // IBAN beneficiary name.
    number: string; // IBAN number.
    bicCode: string; // BIC/SWIFT code of the bank.
    beneficiaryBankName: string; // name of the beneficiary's bank.
    country: string; // country of the IBAN.
    depositFeePercent: number; // deposit fee percentage for the IBAN.
  };
  isPinSet: boolean; // indicates if the card PIN is set.
  plasticCardStatus: string;
}

export interface ICardListResponse {
  cards: ICardItemResponse[];
}

export interface ICardPersonalInfoRequest {
  taxId: string;
  taxCountry: string;
  isUsRelated: boolean;
  dataCorrectnessConfirmation?: boolean;
}

export interface ICardPersonalInfoResponse {
  taxId: string; // tax identification number.
  taxCountry: string; // country associated with the taxpayer identification number.
  isUsRelated: boolean; // indicates whether the individual is related to the United States.
  usRelatedPerson: string; // name of the related person (if applicable).
  incomeSource: string; // source of income.
  estimatedMonthlyTurnoverRange: string; // estimated monthly turnover range.
  dataCorrectnessConfirmation: boolean; // confirmation of data correctness.
}

export interface ICardRequestRequest {
  cardType: string;
  cardDesignId: string;
}

export interface ICardRequestResponse {
  id: number;
}

export interface IUpdateAddressCardRequestRequest {
  country: string;
  documentCountry: string;
  city: string;
  state: string;
  address: string;
  address2: string;
  postalCode: string;
  cardholderName: string;
}

export interface IUpdateAddressCardRequestV3Request {
  billingAddress: {
    country: string;
    city: string;
    state: string;
    address: string;
    address2: string;
    postalCode: string;
  };
  shippingAddress?: {
    country: string;
    city: string;
    state: string;
    address: string;
    address2: string;
    postalCode: string;
    firstName: string;
    lastName: string;
    phone: string;
  };
}

export interface IUpdateCardholderNameRequestRequest {
  cardholderName: string;
}
export interface ICardOrderOfferResponse {
  offerId: number; // ID of the payment offer.
  cryptoPrice: {
    value: number; // value of the payment offer in cryptocurrency.
    currency: string; // currency of the cryptocurrency.
  };
  cardPrice: {
    value: number; // price of the card in the specified currency.
    currency: string; // currency of the card price.
  };
  deliveryPrice: {
    value: number; // delivery cost in the specified currency.
    currency: string; // currency of the delivery cost.
  };
}

export interface ICardHistoryRequest {
  cardId: string;
  accessToken: string;
  query?: {
    page?: number;
    limit?: number;
  };
}

export enum HistoryOperationType {
  UNKNOWN = "UNKNOWN",
  RECEIVE_CRYPTO = "RECEIVE_CRYPTO",
  PAYIN_CARD = "PAYIN_CARD",
  PAYIN_ADVCASH = "PAYIN_ADVCASH",
  PAYOUT_CARD = "PAYOUT_CARD",
  EXCHANGE = "EXCHANGE",
  SEND_TO_PHONE = "SEND_TO_PHONE",
  SEND_TO_WALLET = "SEND_TO_WALLET",
}

export interface IHistoryOperationRequest {
  accessToken: string;
  query?: {
    currencyFilter?: string;
    typeFilter?: HistoryOperationType;
    page?: number;
    limit?: number;
  };
}

export interface ICardHistoryResponse {
  operationId: number;
  operationDate: string;
  operationStatus: string;
  topUpCardModel: {
    amount: {
      value: number;
      currency: string;
    };
    walletFrom: string;
    exchangeRate: {
      sourceCurrency: string;
      targetCurrency: string;
      rate: number;
      multiplier: number;
    };
    fee: {
      value: number;
      currency: string;
    };
  };
  authorizationModel: {
    originalAmount: {
      value: number;
      currency: string;
    };
    authorizationAmount: {
      value: number;
      currency: string;
    };
    authorizationCreated: string;
    description: string;
  };
  paymentFromCardModel: {
    originalAmount: {
      value: number;
      currency: string;
    };
    authorizationAmount: {
      value: number;
      currency: string;
    };
    transactionAmount: {
      value: number;
      currency: string;
    };
    authorizationCreated: string;
    authorizationUpdated: string;
    description: string;
  };
  feeModel: {
    feeType: string;
    amount: {
      value: number;
      currency: string;
    };
    description: string;
  };
  atmWithdrawalModel: {
    originalAmount: {
      value: number;
      currency: string;
    };
    authorizationAmount: {
      value: number;
      currency: string;
    };
    transactionAmount: {
      value: number;
      currency: string;
    };
    authorizationCreated: string;
    authorizationUpdated: string;
    description: string;
  };
  atmBalanceInquiryModel: {
    amount: {
      value: number;
      currency: string;
    };
    description: string;
  };
  cardTransactionModel: {
    amount: {
      value: number;
      currency: string;
    };
    description: string;
  };
  reversalTransactionModel: {
    amount: {
      value: number;
      currency: string;
    };
    operationName: string;
    description: string;
  };
  defaultTransactionModel: {
    amount: {
      value: number;
      currency: string;
    };
    description: string;
  };
}

export interface IBlockUnblockRequest {
  cardId: string;
  accessToken: string;
  body: {
    code: string;
  };
}

export interface IPinCodeRequest {
  cardId: string;
  accessToken: string;
  body: {
    pin: string;
  };
}

export interface ICardDetailsRequest {
  cardId: string;
  accessToken: string;
  body: {
    code: string;
    publicKey?: string;
  };
}

export interface ICardDetailsResponse {
  number: string;
  cvv: string;
  expiry: string;
  cardholderName: string;
}

export interface ICardNumberResponse {
  number: string;
  cardholderName: string;
}

export interface ICardPoyoutDataResponse {
  cards: {
    maskedPan: string;
    cardId: number;
    cardType: string;
    pairsLimits: {
      currencyFrom: string;
      currencyTo: string;
      minAmountFrom: number;
      maxAmountFrom: number;
      allAmountFrom: number;
    }[];
    validationStatus: string;
  }[];
  validSeconds: number;
  pairs: {
    rate: number;
    currencyFrom: string;
    currencyTo: string;
    amountScaleFrom: number;
    amountScaleTo: number;
    defaultMinAmountFrom: number;
    defaultMaxAmountFrom: number;
    defaultMaxAmountAll: number;
  }[];
  fees: {
    rate: number;
    transactionFee: number;
    additionalFee: number;
    crypteriumGas: number;
    partnerFee: number;
    fixFee: number;
  };
}

export interface ICardPayoutRequest {
  accessToken: string;
  body: {
    cardNumber: string;
    cardHolder: string;
    cardExpirationYear: string;
    cardExpirationMonth: string;
  };
}

export interface ICardPayloadCurrenciesResponse {
  currencies: string[];
}

export interface ICardPayloadLimitsRequest {
  accessToken: string;
  cardId: string;
}

export interface ICardPayloadLimitsResponse {
  card: {
    cardId: number;
    maskedPan: string;
    cardCompany: string;
    cardBalance: {
      value: number;
      currency: string;
    };
  };
  fees: {
    transactionFee: number;
    additionalFee: number;
    vaultFee: number;
    supplierFee: number;
    clientMarkUpFee: number;
  };
  pairs: {
    rate: number;
    currencyFrom: string;
    currencyTo: string;
    amountScaleFrom: number;
    amountScaleTo: number;
    fromLimits: {
      min: number;
      max: number;
      all: number;
    };
    toLimits: {
      min: number;
      max: number;
      all: number;
    };
  }[];
}

export interface IHistoryOperationResponse {
  operationId: string; // identifier of the operation.
  operationDate: string; // date and time of the operation in ISO 86number1 format.
  operationStatus: string; // status of the operation.
  sequenceId: string; // unique sequence identifier linking this operation to wallet transactions.
  exchangeModel: {
    // details of the exchange operation, if applicable.
    fromAddress: string; // source address for the exchange.
    toAddress: string; // target address for the exchange.
    debitAmount: {
      // amount debited from the source.
      value: number; // value of the debited amount.
      currency: string; // currency of the debited amount.
    };
    creditAmount: {
      // amount credited to the target.
      value: number; // value of the credited amount.
      currency: string; // currency of the credited amount.
    };
    exchangeRate: {
      // exchange rate details.
      sourceCurrency: string; // source currency for the exchange.
      targetCurrency: string; // target currency for the exchange.
      rate: number; // exchange rate value.
      multiplier: number; // exchange rate multiplier.
    };
  };
  receiveCryptoModel: {
    // details of cryptocurrency received, if applicable.
    toAddress: string; // recipient address.
    fromAddress: string; // sender address.
    amount: {
      // amount of cryptocurrency received.
      value: number; // value of the received amount.
      currency: string; // currency of the received amount.
    };
    txHash: string; // transaction hash.
  };
  payinAdvcashModel: {
    // details of funding via ADVCASH, if applicable.
    email: string; // email associated with the ADVCASH account.
    toAddress: string; // cryptocurrency wallet address to which funds were credited.
    debitAmount: {
      // amount debited from the ADVCASH account.
      value: number; // value of the debited amount.
      currency: string; // currency of the debited amount.
    };
    creditAmount: {
      // amount credited to the cryptocurrency wallet.
      value: number; // value of the credited amount.
      currency: string; // currency of the credited amount.
    };
    feeAmount: {
      // fee amount, if any.
      value: number; // value of the fee.
      currency: string; // currency of the fee.
    };
    exchangeRate: {
      // exchange rate details, if applicable.
      sourceCurrency: string; // source currency for the exchange.
      targetCurrency: string; // target currency for the exchange.
      rate: number; // exchange rate value.
      multiplier: number; // exchange rate multiplier.
    };
  };
  payinCardModel: {
    // details of funding via card, if applicable.
    fromCardPAN: string; // masked card number from which funds were debited.
    toAddress: string; // cryptocurrency wallet address to which funds were credited.
    debitAmount: {
      // amount debited from the card.
      value: number; // value of the debited amount.
      currency: string; // currency of the debited amount.
    };
    creditAmount: {
      // amount credited to the cryptocurrency wallet.
      value: number; // value of the credited amount.
      currency: string; // currency of the credited amount.
    };
    feeAmount: {
      // fee amount, if any.
      value: number; // value of the fee.
      currency: string; // currency of the fee.
    };
    exchangeRate: {
      // exchange rate details, if applicable.
      sourceCurrency: string; // source currency for the exchange.
      targetCurrency: string; // target currency for the exchange.
      rate: number; // exchange rate value.
      multiplier: number; // exchange rate multiplier.
    };
  };
  payoutCardModel: {
    // details of fiat withdrawal to a card, if applicable.
    fromAddress: string; // cryptocurrency wallet address from which funds were debited.
    toCardPAN: string; // masked card number to which funds were credited.
    debitAmount: {
      // amount debited from the cryptocurrency wallet.
      value: number; // value of the debited amount.
      currency: string; // currency of the debited amount.
    };
    creditAmount: {
      // amount credited to the card.
      value: number; // value of the credited amount.
      currency: string; // currency of the credited amount.
    };
    feeAmount: {
      // fee amount, if any.
      value: number; // value of the fee.
      currency: string; // currency of the fee.
    };
    exchangeRate: {
      // exchange rate details, if applicable.
      sourceCurrency: string; // source currency for the exchange.
      targetCurrency: string; // target currency for the exchange.
      rate: number; // exchange rate value.
      multiplier: number; // exchange rate multiplier.
    };
  };
  sendToWalletModel: {
    // details of transfer to another wallet, if applicable.
    fromAddress: string; // sender address.
    toAddress: string; // recipient address.
    debitAmount: {
      // amount debited from the sender's wallet.
      value: number; // value of the debited amount.
      currency: string; // currency of the debited amount.
    };
    creditAmount: {
      // amount credited to the recipient's wallet.
      value: number; // value of the credited amount.
      currency: string; // currency of the credited amount.
    };
    feeAmount: {
      // fee amount, if any.
      value: number; // value of the fee.
      currency: string; // currency of the fee.
    };
    txHash: string; // transaction hash.
  };
  sendToPhoneModel: {
    // details of transfer to a phone number, if applicable.
    fromAddress: string; // sender address.
    toPhone: string; // recipient phone number.
    amount: {
      // amount transferred.
      value: number; // value of the transferred amount.
      currency: string; // currency of the transferred amount.
    };
  };
}

export interface ICardPayloadOfferRequest {
  cardId: number;
  fromCurrency: string;
  toCurrency: string;
  fromAmount: number;
  accessToken: string;
}

export interface IConfirmCardPayloadOfferRequest {
  cardId: number;
  offerId: number;
  accessToken: string;
}

export interface ICardPayloadOfferResponse {
  offerId: number;
  expirationTime: string;
  from: {
    value: number;
    currency: string;
  };
  to: {
    value: number;
    currency: string;
  };
  fees: {
    transactionFee: number;
    additionalFee: number;
    vaultFee: number;
    supplierFee: number;
    clientMarkUpFee: number;
  };
  rate: {
    value: number;
    currency: string;
  };
  possibleToExecute: boolean;
  limit: {
    value: number;
    currency: string;
  };
}

export interface IConfirmCardPayloadOfferResponse {
  cardNumber: string;
  amount: {
    value: number;
    currency: string;
  };
  status: string;
}
