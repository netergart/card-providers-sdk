import { VaultV2SDKOptions } from "../../interfaces/vault.v2.interface";
import VaultProviderV2Base from "../VaultProviderBase";
import {
  ICardActivatePhysicalCardRequest,
  ICardBalanceResponse,
  ICardChangeStatusRequest,
  ICardChangeTypeRequest,
  ICardCreateRequestRequest,
  ICardCreateRequestResponse,
  ICardDetailsInfoResponse,
  ICardIdRequest,
  ICardLimitResponse,
  ICardListResponse,
  ICardPricesResponse,
  ICardRequestListResponse,
  ICardResetPinRequest,
  ICardSensitiveDetailsResponse,
  ICardTopUpInfoResponse,
  ICardTxHistoryRequest,
  ICardTxHistoryResponse,
  ICardUpdateLimitsRequest,
} from "./interfaces/card.interface";

export class Card extends VaultProviderV2Base {
  constructor(options: VaultV2SDKOptions) {
    super(options);
  }

  async prices(): Promise<ICardPricesResponse[]> {
    const path = "/card-holder/cardoffer";

    const headers = {
      ...this.headers,
      authorization: `Bearer ${this.getToken()}`,
    };

    return await this.request(path, { method: "GET", headers });
  }

  async requestList(): Promise<ICardRequestListResponse> {
    const path = "/card-holder/cardrequest";

    const headers = {
      ...this.headers,
      authorization: `Bearer ${this.getToken()}`,
    };

    return await this.request(path, { method: "GET", headers });
  }

  async createRequest(
    body: ICardCreateRequestRequest
  ): Promise<ICardCreateRequestResponse> {
    const path = "/card-holder/cardrequest";

    const headers = {
      ...this.headers,
      authorization: `Bearer ${this.getToken()}`,
    };

    return await this.request(path, { method: "POST", headers, data: body });
  }

  async txHistory(
    body: ICardTxHistoryRequest
  ): Promise<ICardTxHistoryResponse> {
    const path = "/card-holder/transaction";

    const headers = {
      ...this.headers,
      authorization: `Bearer ${this.getToken()}`,
    };

    return await this.request(path, { method: "GET", headers, params: body });
  }

  async list(): Promise<ICardListResponse[]> {
    const path = "/card-holder/cardholder/card";

    const headers = {
      ...this.headers,
      authorization: `Bearer ${this.getToken()}`,
    };

    return await this.request(path, { method: "GET", headers });
  }

  async changePin(body: ICardResetPinRequest): Promise<string> {
    const { cardId, ...otherData } = body;
    const path = `/card-holder/cardholder/card/${cardId}/pin/reset`;

    const headers = {
      ...this.headers,
      authorization: `Bearer ${this.getToken()}`,
    };

    return await this.request(path, {
      method: "POST",
      headers,
      data: otherData,
    });
  }

  async limit(body: ICardIdRequest): Promise<ICardLimitResponse> {
    const path = `/card-holder/cardholder/card/${body.cardId}/limits`;

    const headers = {
      ...this.headers,
      authorization: `Bearer ${this.getToken()}`,
    };

    return await this.request(path, { method: "GET", headers });
  }

  async updateLimits(
    body: ICardUpdateLimitsRequest
  ): Promise<ICardLimitResponse> {
    const { cardId, ...otherData } = body;
    const path = `/card-holder/cardholder/card/${cardId}/limits`;

    const headers = {
      ...this.headers,
      authorization: `Bearer ${this.getToken()}`,
    };

    return await this.request(path, {
      method: "POST",
      headers,
      data: otherData,
    });
  }

  async changeType(body: ICardChangeTypeRequest): Promise<ICardListResponse> {
    const { cardId, ...otherData } = body;
    const path = `/card-holder/cardholder/card/${cardId}/change-type`;

    const headers = {
      ...this.headers,
      authorization: `Bearer ${this.getToken()}`,
    };

    return await this.request(path, {
      method: "POST",
      headers,
      data: otherData,
    });
  }

  async changeStatus(body: ICardChangeStatusRequest) {
    const { cardId, ...otherData } = body;
    const path = `/card-holder/cardholder/card/${cardId}/change-type`;

    const headers = {
      ...this.headers,
      authorization: `Bearer ${this.getToken()}`,
    };

    return await this.request(path, {
      method: "POST",
      headers,
      data: otherData,
    });
  }

  async activatePhysicalCard(
    body: ICardActivatePhysicalCardRequest
  ): Promise<ICardListResponse> {
    const { cardId, ...otherData } = body;
    const path = `/card-holder/cardholder/card/${cardId}/activate`;

    const headers = {
      ...this.headers,
      authorization: `Bearer ${this.getToken()}`,
    };

    return await this.request(path, {
      method: "POST",
      headers,
      data: otherData,
    });
  }

  async info(body: ICardIdRequest): Promise<ICardListResponse> {
    const path = `/card-holder/cardholder/card/${body.cardId}`;

    const headers = {
      ...this.headers,
      authorization: `Bearer ${this.getToken()}`,
    };

    return await this.request(path, { method: "GET", headers });
  }

  async topUpInfo(body: ICardIdRequest): Promise<ICardTopUpInfoResponse[]> {
    const path = `/card-holder/cardholder/card/${body.cardId}/top-up-information`;

    const headers = {
      ...this.headers,
      authorization: `Bearer ${this.getToken()}`,
    };

    return await this.request(path, { method: "GET", headers });
  }

  async sensitiveDetails(
    body: ICardIdRequest
  ): Promise<ICardSensitiveDetailsResponse> {
    const path = `/card-holder/cardholder/card/${body.cardId}/sensitive-details`;

    const headers = {
      ...this.headers,
      authorization: `Bearer ${this.getToken()}`,
    };

    return await this.request(path, { method: "GET", headers });
  }

  async pin(body: ICardIdRequest): Promise<string> {
    const path = `/card-holder/cardholder/card/${body.cardId}/pin`;

    const headers = {
      ...this.headers,
      authorization: `Bearer ${this.getToken()}`,
    };

    return await this.request(path, { method: "GET", headers });
  }

  async details(body: ICardIdRequest): Promise<ICardDetailsInfoResponse> {
    const path = `/card-holder/cardholder/card/${body.cardId}/details`;

    const headers = {
      ...this.headers,
      authorization: `Bearer ${this.getToken()}`,
    };

    return await this.request(path, { method: "GET", headers });
  }

  async balance(body: ICardIdRequest): Promise<ICardBalanceResponse> {
    const path = `/cardholder/card/${body.cardId}/balance`;

    const headers = {
      ...this.headers,
      authorization: `Bearer ${this.getToken()}`,
    };

    return await this.request(path, { method: "GET", headers });
  }
}

export default Card;
