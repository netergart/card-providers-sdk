import { ProviderBaseSDK } from "../../ProviderBaseSDK";
import {
  IAddEmailRequest,
  IBlockUnblockRequest,
  ICardDeliveryCountriesResponse,
  ICardDetailsRequest,
  ICardDetailsResponse,
  ICardHistoryRequest,
  ICardHistoryResponse,
  ICardItemResponse,
  ICardListResponse,
  ICardNumberResponse,
  ICardOrderOfferResponse,
  ICardPayloadCurrenciesResponse,
  ICardPayloadLimitsRequest,
  ICardPayloadLimitsResponse,
  ICardPayloadOfferRequest,
  ICardPayloadOfferResponse,
  ICardPayoutRequest,
  ICardPersonalInfoRequest,
  ICardPersonalInfoResponse,
  ICardPoyoutDataResponse,
  ICardPricesResponse,
  ICardRequestRequest,
  ICardRequestResponse,
  ICommonResponse,
  IConfirmCardPayloadOfferRequest,
  IConfirmCardPayloadOfferResponse,
  IConfirmEmailRequest,
  IHistoryOperationRequest,
  IHistoryOperationResponse,
  IKyc1FinishRequest,
  IKyc1StartResponse,
  IKycLimitResponse,
  IKycStatusResponse,
  IKycSumSubStartResponse,
  ILoginRequest,
  IPhoneConfirmRequest,
  IPinCodeRequest,
  IProfileInfoResponse,
  IProfileRequest,
  IResendPhoneConfirmRequest,
  ISignUpRequest,
  ISignUpResponse,
  IUpdateAddressCardRequestRequest,
  IUpdateAddressCardRequestV3Request,
  IUpdateCardholderNameRequestRequest,
  IWalletCreateRequest,
  IWalletResponse,
  VaultSDKOptions,
} from "../interfaces/vault.interface";

export class VaultProvider extends ProviderBaseSDK {
  private headers = {
    "X-Version": "1.2",
    accept: "application/json",
    "content-type": "application/json",
  };

  private xMerchantId: string;

  constructor(options: VaultSDKOptions) {
    super(options);
    this.xMerchantId = options.xMerchantId;
  }

  async signUp(body: ISignUpRequest): Promise<ICommonResponse> {
    const path = "/v2/mobile/signup";
    const headers = {
      ...this.headers,
      "X-Merchant-ID": this.xMerchantId,
    };

    return await this.request(path, { method: "POST", headers, data: body });
  }

  async phoneConfirm(body: IPhoneConfirmRequest): Promise<ISignUpResponse> {
    const path = "/v2/mobile/phone/confirm";
    const headers = {
      ...this.headers,
      "X-Merchant-ID": this.xMerchantId,
    };

    return await this.request(path, { method: "POST", data: body, headers });
  }

  async resendPhoneConfirm(
    body: IResendPhoneConfirmRequest
  ): Promise<ICommonResponse> {
    const path = "/v2/mobile/phone/verify/resend";
    const headers = {
      ...this.headers,
      "X-Merchant-ID": this.xMerchantId,
    };

    return await this.request(path, { method: "POST", data: body, headers });
  }

  async addEmail(
    body: IAddEmailRequest,
    accessToken: string
  ): Promise<ICommonResponse> {
    const path = "/v2/mobile/email/add";

    const headers = {
      ...this.headers,
      authorization: `Bearer ${accessToken}`,
    };

    return await this.request(path, { method: "PUT", data: body, headers });
  }

  async confirmEmail(body: IConfirmEmailRequest): Promise<ICommonResponse> {
    const path = "/v2/mobile/email/confirm";

    return await this.request(path, {
      method: "GET",
      headers: this.headers,
      params: body,
    });
  }

  async resendEmailConfirm(accessToken: string): Promise<ICommonResponse> {
    const path = "/v2/mobile/email/verify/resend";

    const headers = {
      ...this.headers,
      authorization: `Bearer ${accessToken}`,
    };

    return await this.request(path, {
      method: "POST",
      headers,
    });
  }

  async login(body: ILoginRequest): Promise<ISignUpResponse> {
    const path = "/oauth/token";

    const headers = {
      ...this.headers,
      "X-Merchant-ID": this.xMerchantId,
      "content-type": "application/x-www-form-urlencoded",
    };

    body.grant_type = "mobile_phone";

    return await this.request(path, { method: "POST", data: body, headers });
  }

  async updateCustomerProfile(
    body: IProfileRequest,
    accessToken: string
  ): Promise<void> {
    const path = "/v2/customer/profile";

    const headers = {
      ...this.headers,
      authorization: `Bearer ${accessToken}`,
    };

    return await this.request(path, { method: "PATCH", data: body, headers });
  }

  async customerProfileInfo(
    accessToken: string
  ): Promise<IProfileInfoResponse> {
    const path = "/v2/customer/profile";

    const headers = {
      ...this.headers,
      authorization: `Bearer ${accessToken}`,
    };

    return await this.request(path, { method: "GET", headers });
  }

  async createWallets(
    body: IWalletCreateRequest,
    accessToken: string
  ): Promise<IWalletResponse> {
    const path = "/v2/wallets";

    const headers = {
      ...this.headers,
      authorization: `Bearer ${accessToken}`,
    };

    return await this.request(path, { method: "POST", data: body, headers });
  }

  async getWallets(accessToken: string): Promise<IWalletResponse> {
    const path = "/v2/wallets";

    const headers = {
      ...this.headers,
      authorization: `Bearer ${accessToken}`,
    };

    return await this.request(path, { method: "GET", headers });
  }

  async kycStatus(accessToken: string): Promise<IKycStatusResponse> {
    const path = "/v2/customer/kyc/data";

    const headers = {
      ...this.headers,
      authorization: `Bearer ${accessToken}`,
    };

    return await this.request(path, { method: "GET", headers });
  }

  async limits(accessToken: string): Promise<IKycLimitResponse> {
    const path = "/v1/kyc/limits";

    const headers = {
      ...this.headers,
      authorization: `Bearer ${accessToken}`,
    };

    return await this.request(path, { method: "GET", headers });
  }

  async kyc1Start(accessToken: string): Promise<IKyc1StartResponse> {
    const path = "/v4/kyc/start";

    const headers = {
      ...this.headers,
      authorization: `Bearer ${accessToken}`,
    };

    return await this.request(path, {
      method: "POST",
      headers,
    });
  }

  async kyc1Finish(
    body: IKyc1FinishRequest,
    accessToken: string
  ): Promise<IKyc1StartResponse> {
    const path = "/v4/kyc/ondato/finished";

    const headers = {
      ...this.headers,
      authorization: `Bearer ${accessToken}`,
    };

    return await this.request(path, { method: "POST", data: body, headers });
  }

  async kycSumSubStart(accessToken: string): Promise<IKycSumSubStartResponse> {
    const path = "/v5/kyc/start";

    const headers = {
      ...this.headers,
      authorization: `Bearer ${accessToken}`,
    };

    return await this.request(path, { method: "POST", headers });
  }

  async cardPrices(accessToken: string): Promise<ICardPricesResponse> {
    const path = "/v2/card/prices";

    const headers = {
      ...this.headers,
      authorization: `Bearer ${accessToken}`,
    };

    return await this.request(path, {
      method: "GET",
      headers,
    });
  }

  async cardDeliveryCountries(
    accessToken: string
  ): Promise<ICardDeliveryCountriesResponse> {
    const path = "/v2/card/card-requests/country/plastic-delivery";

    const headers = {
      ...this.headers,
      authorization: `Bearer ${accessToken}`,
    };

    return await this.request(path, {
      method: "GET",
      headers,
      params: { cp: "CP_2" },
    });
  }

  async cardList(accessToken: string): Promise<ICardListResponse> {
    const path = "/v2/card/list";

    const headers = {
      ...this.headers,
      authorization: `Bearer ${accessToken}`,
    };

    return await this.request(path, { method: "GET", headers });
  }

  async cardPoyoutsList(accessToken: string): Promise<ICardPoyoutDataResponse> {
    const path = "/v4/payout/data";

    const headers = {
      ...this.headers,
      authorization: `Bearer ${accessToken}`,
    };

    return await this.request(path, { method: "GET", headers });
  }

  async getPayloadCurrencies(
    accessToken: string
  ): Promise<ICardPayloadCurrenciesResponse> {
    const path = "/v2/card/payload/currencies";

    const headers = {
      ...this.headers,
      authorization: `Bearer ${accessToken}`,
    };

    return await this.request(path, {
      method: "GET",
      headers,
      params: { cp: "CP_2" },
    });
  }

  async getPayloadLimits(
    data: ICardPayloadLimitsRequest
  ): Promise<ICardPayloadLimitsResponse> {
    const path = `/v2/card/${data.cardId}/payload/data`;

    const headers = {
      ...this.headers,
      authorization: `Bearer ${data.accessToken}`,
    };

    return await this.request(path, {
      method: "GET",
      headers,
      params: { cp: "CP_2" },
    });
  }

  async addCardPayout(data: ICardPayoutRequest): Promise<string> {
    const path = "/v4/payout/data";

    const headers = {
      ...this.headers,
      authorization: `Bearer ${data.accessToken}`,
    };

    return await this.request(path, {
      method: "POST",
      data: data.body,
      headers,
    });
  }

  async updatePersonalInfo(
    body: ICardPersonalInfoRequest,
    accessToken: string
  ): Promise<ICommonResponse> {
    const path = "/v3/card/additional-personal-info";

    const headers = {
      ...this.headers,
      authorization: `Bearer ${accessToken}`,
    };

    return await this.request(path, {
      method: "POST",
      data: body,
      headers,
      params: { cp: "CP_2" },
    });
  }

  async personalInfo(accessToken: string): Promise<ICardPersonalInfoResponse> {
    const path = "/v3/card/additional-personal-info";

    const headers = {
      ...this.headers,
      authorization: `Bearer ${accessToken}`,
    };

    return await this.request(path, {
      method: "GET",
      headers,
      params: { cp: "CP_2" },
    });
  }

  async cardRequest(
    body: ICardRequestRequest,
    accessToken: string
  ): Promise<ICardRequestResponse> {
    const path = "/v2/card/card-requests";

    const headers = {
      ...this.headers,
      authorization: `Bearer ${accessToken}`,
    };

    return await this.request(path, {
      method: "POST",
      data: body,
      headers,
      params: { cp: "CP_2" },
    });
  }

  async cancelCardRequest(
    requestId: number,
    accessToken: string
  ): Promise<ICommonResponse> {
    const path = `/v2/card/card-requests/${requestId}/cancel`;

    const headers = {
      ...this.headers,
      authorization: `Bearer ${accessToken}`,
    };

    return await this.request(path, {
      method: "POST",
      headers,
      params: { cp: "CP_2" },
    });
  }

  async updateAddressRequestCard(
    requestId: number,
    body: IUpdateAddressCardRequestRequest,
    accessToken: string
  ): Promise<ICommonResponse> {
    const path = `/v2/card/card-requests/${requestId}/address`;

    const headers = {
      ...this.headers,
      authorization: `Bearer ${accessToken}`,
    };

    return await this.request(path, {
      method: "PUT",
      data: body,
      headers,
      params: { cp: "CP_2" },
    });
  }

  async updateAddressRequestCardV3(
    requestId: number,
    body: IUpdateAddressCardRequestV3Request,
    accessToken: string
  ): Promise<ICommonResponse> {
    const path = `/v3/card/card-requests/${requestId}/address`;

    const headers = {
      ...this.headers,
      authorization: `Bearer ${accessToken}`,
    };

    return await this.request(path, {
      method: "PUT",
      data: body,
      headers,
      params: { cp: "CP_2" },
    });
  }

  async updateCardholderNameRequestCard(
    requestId: number,
    body: IUpdateCardholderNameRequestRequest,
    accessToken: string
  ): Promise<ICommonResponse> {
    const path = `/v2/card/card-requests/${requestId}/cardholder-name`;

    const headers = {
      ...this.headers,
      authorization: `Bearer ${accessToken}`,
    };

    return await this.request(path, {
      method: "PUT",
      data: body,
      headers,
      params: { cp: "CP_2" },
    });
  }

  async createCardOrderOffer(
    requestId: number,
    currency: string,
    accessToken: string
  ): Promise<ICardOrderOfferResponse> {
    const path = `/v2/card/card-requests/${requestId}/payment-offer/${currency}`;

    const headers = {
      ...this.headers,
      authorization: `Bearer ${accessToken}`,
    };

    return await this.request(path, {
      method: "POST",
      headers,
      params: { cp: "CP_2" },
    });
  }

  async activateCard(
    cardId: number,
    code: string,
    accessToken: string
  ): Promise<ICardItemResponse> {
    const path = `/v2/card/plastic/${cardId}/activate`;

    const headers = {
      ...this.headers,
      authorization: `Bearer ${accessToken}`,
    };

    return await this.request(path, {
      method: "POST",
      data: { code },
      headers,
    });
  }

  async payCardOrderOffer(
    requestId: number,
    accessToken: string
  ): Promise<ICommonResponse> {
    const path = `/v2/card/card-requests/payment-offer/${requestId}/confirm`;

    const headers = {
      ...this.headers,
      authorization: `Bearer ${accessToken}`,
    };

    return await this.request(path, {
      method: "POST",
      headers,
      params: { cp: "CP_2" },
    });
  }

  async cardHistory(
    data: ICardHistoryRequest
  ): Promise<ICardHistoryResponse[]> {
    const path = `/v2/history/card/${data.cardId}`;

    const headers = {
      ...this.headers,
      authorization: `Bearer ${data.accessToken}`,
    };

    const limit = data?.query?.limit || 10;
    const page = data?.query?.page || 1;

    const offest = (page - 1) * limit;

    return await this.request(path, {
      method: "GET",
      headers,
      params: { cp: "CP_2", offest, size: limit },
    });
  }

  async historyOperations(
    data: IHistoryOperationRequest
  ): Promise<IHistoryOperationResponse[]> {
    const path = `/v2/history/operations`;

    const headers = {
      ...this.headers,
      authorization: `Bearer ${data.accessToken}`,
    };

    const limit = data?.query?.limit || 10;
    const page = data?.query?.page || 1;

    const offest = (page - 1) * limit;

    const query = {
      offest,
      size: limit,
    };
    if (data.query.currencyFilter) {
      Object.assign(query, { currencyFilter: data.query.currencyFilter });
    }
    if (data.query.typeFilter) {
      Object.assign(query, { typeFilter: data.query.typeFilter });
    }

    return await this.request(path, {
      method: "GET",
      headers,
      params: query,
    });
  }

  async getSoftBlockCodeByCard(
    cardId: string,
    accessToken: string
  ): Promise<ICommonResponse> {
    const path = `/v2/card/${cardId}/soft-block/code`;

    const headers = {
      ...this.headers,
      authorization: `Bearer ${accessToken}`,
    };

    return await this.request(path, {
      method: "GET",
      headers,
      params: { cp: "CP_2" },
    });
  }

  async softBlockCard(data: IBlockUnblockRequest): Promise<ICommonResponse> {
    const path = `/v2/card/${data.cardId}/soft-block`;

    const headers = {
      ...this.headers,
      authorization: `Bearer ${data.accessToken}`,
    };

    return await this.request(path, {
      method: "POST",
      data: data.body,
      headers,
      params: { cp: "CP_2" },
    });
  }

  async getSoftUnBlockCodeByCard(
    cardId: string,
    accessToken: string
  ): Promise<ICommonResponse> {
    const path = `/v2/card/${cardId}/soft-unblock/code`;

    const headers = {
      ...this.headers,
      authorization: `Bearer ${accessToken}`,
    };

    return await this.request(path, {
      method: "GET",
      headers,
      params: { cp: "CP_2" },
    });
  }

  async softUnBlockCard(data: IBlockUnblockRequest): Promise<ICommonResponse> {
    const path = `/v2/card/${data.cardId}/soft-unblock`;

    const headers = {
      ...this.headers,
      authorization: `Bearer ${data.accessToken}`,
    };

    return await this.request(path, {
      method: "POST",
      data: data.body,
      headers,
      params: { cp: "CP_2" },
    });
  }

  async setPinCode(data: IPinCodeRequest): Promise<ICommonResponse> {
    const path = `/v2/card/${data.cardId}/pin`;

    const headers = {
      ...this.headers,
      authorization: `Bearer ${data.accessToken}`,
    };

    return await this.request(path, {
      method: "POST",
      data: data.body,
      headers,
      params: { cp: "CP_2" },
    });
  }

  async getCardDetailsCode(
    cardId: string,
    accessToken: string
  ): Promise<ICommonResponse> {
    const path = `/v2/card/${cardId}/details/code`;

    const headers = {
      ...this.headers,
      authorization: `Bearer ${accessToken}`,
    };

    return await this.request(path, {
      method: "GET",
      headers,
      params: { cp: "CP_2" },
    });
  }

  async getCardDetails(
    data: ICardDetailsRequest
  ): Promise<ICardDetailsResponse> {
    const path = `/v2/card/${data.cardId}/details`;

    const headers = {
      ...this.headers,
      authorization: `Bearer ${data.accessToken}`,
    };

    return await this.request(path, {
      method: "POST",
      headers,
      data: data.body,
      params: { cp: "CP_2" },
    });
  }

  async getCardNumber(
    cardId: string,
    accessToken: string,
    publicKey: string
  ): Promise<ICardNumberResponse> {
    const path = `/v2/card/${cardId}/number`;

    const headers = {
      ...this.headers,
      authorization: `Bearer ${accessToken}`,
    };

    return await this.request(path, {
      method: "POST",
      data: { publicKey },
      headers,
      params: { cp: "CP_2" },
    });
  }

  async createCardPayloadOffer(
    data: ICardPayloadOfferRequest
  ): Promise<ICardPayloadOfferResponse> {
    const path = `/v2/card/${data.cardId}/payload/offers`;

    const headers = {
      ...this.headers,
      authorization: `Bearer ${data.accessToken}`,
    };

    return await this.request(path, {
      method: "POST",
      data: {
        fromCurrency: data.fromCurrency,
        toCurrency: data.toCurrency,
        fromAmount: data.fromAmount,
      },
      headers,
      params: { cp: "CP_2" },
    });
  }

  async confirmCardPayloadOffer(
    data: IConfirmCardPayloadOfferRequest
  ): Promise<IConfirmCardPayloadOfferResponse> {
    const path = `/v2/card/${data.cardId}/payload/offers/${data.offerId}/confirm`;

    const headers = {
      ...this.headers,
      authorization: `Bearer ${data.accessToken}`,
    };

    return await this.request(path, {
      method: "POST",
      headers,
      params: { cp: "CP_2" },
    });
  }
}

export default VaultProvider;
