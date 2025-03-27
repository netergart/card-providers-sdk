import { ProviderBaseSDKOptions } from "../../ProviderBaseSDK";
export interface VaultSDKVersion {
    version: number;
}
export interface VaultSDKOptions extends ProviderBaseSDKOptions, VaultSDKVersion {
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
        id: number;
        name: string;
        externalId: string;
        address: string;
        currency: string;
        baseCurrency: string;
        pattern: string;
        balance: number;
        limits: {
            additionalProp1: {
                min: number;
                all: number;
            };
            additionalProp2: {
                min: number;
                all: number;
            };
            additionalProp3: {
                min: number;
                all: number;
            };
        };
        balanceString: string;
        availableBalance: number;
        customerId: number;
        createdAt: string;
        isDebit: boolean;
        allowOperations: string[];
        color: string;
        fiat: {
            customerCurrency: string;
            amount: number;
            change: number;
            changePercent: number;
            rate: number;
        };
        scale: number;
        stub: boolean;
        walletCreationState: string;
        iconUrl: string;
        network: string;
    }[];
    accounts: {
        name: string;
        availableBalance: number;
        availableBalanceInDefaultCurrency: number;
        allowOperations: string[];
        balance: number;
        color: string;
        currency: string;
        status: string;
        scale: number;
        details: {
            beneficiary: string;
            number: string;
            bicCode: string;
            beneficiaryBankName: string;
            paymentDetails: string;
            country: string;
            depositFeePercent: number;
        };
        kyc: {
            status: string;
            additionalStatus: string[];
            rejectReason: string;
        };
        createdAt: string;
        iconUrl: string;
    }[];
    fiat: {
        customerCurrency: string;
        amount: number;
        change: number;
        changePercent: number;
        rate: number;
    };
}
export interface IKycStatusResponse {
    kycLevel: string;
    kyc1ClientData: {
        status: string;
        reason: string;
        rejectFormattedMessage: string;
    };
    kyc2ClientData: {
        status: string;
        reason: string;
        rejectFormattedMessage: string;
    };
    kyc3ClientData: {
        status: string;
        reason: string;
        rejectFormattedMessage: string;
    };
    daysToExpireKyc: number;
    remainingAmount: {
        value: number;
        currency: string;
    };
    blockedAmount: {
        value: number;
        currency: string;
    };
    kyc1AttemptsExceeded: boolean;
}
export interface IKycLimitResponse {
    kycNoneLimit: {
        value: number;
        currency: string;
    };
    kycnumberLimit: {
        value: number;
        currency: string;
    };
    kyc1Limit: {
        value: number;
        currency: string;
    };
    kyc2Limit: {
        value: number;
        currency: string;
    };
    kyc3Limit: {
        value: number;
        currency: string;
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
        cardType: string;
        currency: string;
        price: number;
        delivery: number;
        cardProgram: string;
        cardDesignId: string;
        duration?: number;
    }[];
}
export interface ICardDeliveryCountriesResponse {
    countries: {
        countryIsoCode: string;
        countryIsoCode2: string;
        countryName: string;
        price: {
            value: number;
            currency: string;
        };
    }[];
}
export interface ICardItemResponse {
    id: number;
    expired: string;
    number: string;
    balance: {
        value: number;
        currency: string;
    };
    cardholderName: string;
    cardType: string;
    status: string;
    cardCompany: string;
    monthlyIncome: {
        value: number;
        currency: string;
    };
    monthlyExpenses: {
        value: number;
        currency: string;
    };
    cardRequestId: number;
    additionalStatuses: string[];
    cardDesignId: string;
    cardProgram: string;
    ibanDetails: {
        ibanId: string;
        beneficiary: string;
        number: string;
        bicCode: string;
        beneficiaryBankName: string;
        country: string;
        depositFeePercent: number;
    };
    isPinSet: boolean;
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
    taxId: string;
    taxCountry: string;
    isUsRelated: boolean;
    usRelatedPerson: string;
    incomeSource: string;
    estimatedMonthlyTurnoverRange: string;
    dataCorrectnessConfirmation: boolean;
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
    offerId: number;
    cryptoPrice: {
        value: number;
        currency: string;
    };
    cardPrice: {
        value: number;
        currency: string;
    };
    deliveryPrice: {
        value: number;
        currency: string;
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
export declare enum HistoryOperationType {
    UNKNOWN = "UNKNOWN",
    RECEIVE_CRYPTO = "RECEIVE_CRYPTO",
    PAYIN_CARD = "PAYIN_CARD",
    PAYIN_ADVCASH = "PAYIN_ADVCASH",
    PAYOUT_CARD = "PAYOUT_CARD",
    EXCHANGE = "EXCHANGE",
    SEND_TO_PHONE = "SEND_TO_PHONE",
    SEND_TO_WALLET = "SEND_TO_WALLET"
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
    operationId: string;
    operationDate: string;
    operationStatus: string;
    sequenceId: string;
    exchangeModel: {
        fromAddress: string;
        toAddress: string;
        debitAmount: {
            value: number;
            currency: string;
        };
        creditAmount: {
            value: number;
            currency: string;
        };
        exchangeRate: {
            sourceCurrency: string;
            targetCurrency: string;
            rate: number;
            multiplier: number;
        };
    };
    receiveCryptoModel: {
        toAddress: string;
        fromAddress: string;
        amount: {
            value: number;
            currency: string;
        };
        txHash: string;
    };
    payinAdvcashModel: {
        email: string;
        toAddress: string;
        debitAmount: {
            value: number;
            currency: string;
        };
        creditAmount: {
            value: number;
            currency: string;
        };
        feeAmount: {
            value: number;
            currency: string;
        };
        exchangeRate: {
            sourceCurrency: string;
            targetCurrency: string;
            rate: number;
            multiplier: number;
        };
    };
    payinCardModel: {
        fromCardPAN: string;
        toAddress: string;
        debitAmount: {
            value: number;
            currency: string;
        };
        creditAmount: {
            value: number;
            currency: string;
        };
        feeAmount: {
            value: number;
            currency: string;
        };
        exchangeRate: {
            sourceCurrency: string;
            targetCurrency: string;
            rate: number;
            multiplier: number;
        };
    };
    payoutCardModel: {
        fromAddress: string;
        toCardPAN: string;
        debitAmount: {
            value: number;
            currency: string;
        };
        creditAmount: {
            value: number;
            currency: string;
        };
        feeAmount: {
            value: number;
            currency: string;
        };
        exchangeRate: {
            sourceCurrency: string;
            targetCurrency: string;
            rate: number;
            multiplier: number;
        };
    };
    sendToWalletModel: {
        fromAddress: string;
        toAddress: string;
        debitAmount: {
            value: number;
            currency: string;
        };
        creditAmount: {
            value: number;
            currency: string;
        };
        feeAmount: {
            value: number;
            currency: string;
        };
        txHash: string;
    };
    sendToPhoneModel: {
        fromAddress: string;
        toPhone: string;
        amount: {
            value: number;
            currency: string;
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
