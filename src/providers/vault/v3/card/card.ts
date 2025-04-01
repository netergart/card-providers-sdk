import { VaultV3SDKOptions } from "../../interfaces/vault.v3.interface";
import { ErrorResponse } from "../interfaces/common.interface";
import VaultProviderV3Base from "../VaultProviderBase";
import {
  ICardBalanceResponse,
  ICardChangeStatusRequest,
  ICardCreateRequestRequest,
  ICardCreateRequestResponse,
  ICardDetailsInfoResponse,
  ICardIdRequest,
  ICardListResponse,
  ICardPricesResponse,
  ICardRequestListResponse,
  ICardResetPinRequest,
  ICardSensitiveDetailsResponse,
  ICardSetBillingAddressRequest,
  ICardSetBillingAddressResponse,
  ICardSetCardholderNameRequest,
  ICardSetCardholderNameResponse,
  ICardTopUpInfoResponse,
  ICardTxHistoryRequest,
  ICardTxHistoryResponse,
} from "./interfaces/card.interface";

export class Card extends VaultProviderV3Base {
  constructor(options: VaultV3SDKOptions) {
    super(options);
  }

  async prices(): Promise<ICardPricesResponse[] | ErrorResponse> {
    const path = "/card-holder/v1/card-offers";

    return await this.request(path, {
      method: "GET",
      headers: this.createHeaders({
        "x-request-id": `/card-holder/v1/card-offers-${this.partnerClientId}`,
      }),
    });
  }

  async requestList(): Promise<ICardRequestListResponse[] | ErrorResponse> {
    const path = "/card-holder/v1/card-requests";

    return await this.request(path, {
      method: "GET",
      headers: this.createHeaders(),
    });
  }

  async createRequest(
    body: ICardCreateRequestRequest
  ): Promise<ICardCreateRequestResponse | ErrorResponse> {
    const path = "/card-holder/v1/card-requests";

    return await this.request(path, {
      method: "POST",
      headers: this.createHeaders(),
      data: body,
    });
  }

  async txHistory(
    body: ICardTxHistoryRequest
  ): Promise<ICardTxHistoryResponse | ErrorResponse> {
    const path = "/card-holder/transaction";

    return await this.request(path, {
      method: "GET",
      headers: this.createHeaders(),
      params: body,
    });
  }

  async list(): Promise<ICardListResponse[] | ErrorResponse> {
    const path = "/card-holder/cardholder/card";

    return await this.request(path, {
      method: "GET",
      headers: this.createHeaders(),
    });
  }

  async changePin(body: ICardResetPinRequest): Promise<string | ErrorResponse> {
    const { cardId, ...otherData } = body;
    const path = `/card-holder/cardholder/card/${cardId}/pin/reset`;

    return await this.request(path, {
      method: "POST",
      headers: this.createHeaders(),
      data: otherData,
    });
  }

  async changeStatus(
    body: ICardChangeStatusRequest
  ): Promise<ICardListResponse | ErrorResponse> {
    // TODO: we don't have response type in the docs
    const { cardId, requiredStatus, ...data } = body;
    const path = `/card-holder/cardholder/card/${cardId}/change-status`;

    return await this.request(path, {
      method: "POST",
      headers: this.createHeaders(),
      data,
      params: { requiredStatus },
    });
  }

  async info(body: ICardIdRequest): Promise<ICardListResponse | ErrorResponse> {
    const path = `/card-holder/cardholder/card/${body.cardId}`;

    return await this.request(path, {
      method: "GET",
      headers: this.createHeaders(),
    });
  }

  async topUpInfo(
    body: ICardIdRequest
  ): Promise<ICardTopUpInfoResponse[] | ErrorResponse> {
    const path = `/card-holder/cardholder/card/${body.cardId}/top-up-information`;

    return await this.request(path, {
      method: "GET",
      headers: this.createHeaders(),
    });
  }

  async sensitiveDetails(
    body: ICardIdRequest
  ): Promise<ICardSensitiveDetailsResponse | ErrorResponse> {
    const path = `/card-holder/cardholder/card/${body.cardId}/sensitive-details`;

    return await this.request(path, {
      method: "GET",
      headers: this.createHeaders(),
    });
  }

  async pin(body: ICardIdRequest): Promise<string | ErrorResponse> {
    const path = `/card-holder/cardholder/card/${body.cardId}/pin`;

    return await this.request(path, {
      method: "GET",
      headers: this.createHeaders(),
    });
  }

  async details(
    body: ICardIdRequest
  ): Promise<ICardDetailsInfoResponse | ErrorResponse> {
    const path = `/card-holder/cardholder/card/${body.cardId}/details`;

    return await this.request(path, {
      method: "GET",
      headers: this.createHeaders(),
    });
  }

  async balance(
    body: ICardIdRequest
  ): Promise<ICardBalanceResponse | ErrorResponse> {
    const path = `/cardholder/card/${body.cardId}/balance`;

    return await this.request(path, {
      method: "GET",
      headers: this.createHeaders(),
    });
  }

  async setBillingAddress(
    body: ICardSetBillingAddressRequest
  ): Promise<ICardSetBillingAddressResponse | ErrorResponse> {
    const { cardRequestId, ...data } = body;
    const path = `/card-holder/v1/card-requests/${body.cardRequestId}/billing`;

    return await this.request(path, {
      method: "POST",
      headers: this.createHeaders(),
      data,
    });
  }

  async cancelCardRequest(body: ICardIdRequest): Promise<any | ErrorResponse> {
    const path = `/card-holder/v1/card-requests/${body.cardId}/cancel`;

    return await this.request(path, {
      method: "DELETE",
      headers: this.createHeaders(),
    });
  }

  async setCardholderName(
    body: ICardSetCardholderNameRequest
  ): Promise<ICardSetCardholderNameResponse | ErrorResponse> {
    const path = `card-holder/v1/card-requests/${body.cardRequestId}/cardholder-name`;

    return await this.request(path, {
      method: "POST",
      headers: this.createHeaders(),
      data: body,
    });
  }
}

export default Card;
