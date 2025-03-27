import { VaultV2SDKOptions } from "../../interfaces/vault.v2.interface";
import VaultProviderV2Base from "../VaultProviderBase";
import { ICardActivatePhysicalCardRequest, ICardBalanceResponse, ICardChangeStatusRequest, ICardChangeTypeRequest, ICardCreateRequestRequest, ICardCreateRequestResponse, ICardDetailsInfoResponse, ICardIdRequest, ICardLimitResponse, ICardListResponse, ICardPricesResponse, ICardRequestListResponse, ICardResetPinRequest, ICardSensitiveDetailsResponse, ICardTopUpInfoResponse, ICardTxHistoryRequest, ICardTxHistoryResponse, ICardUpdateLimitsRequest } from "./interfaces/card.interface";
export declare class Card extends VaultProviderV2Base {
    constructor(options: VaultV2SDKOptions);
    prices(): Promise<ICardPricesResponse[]>;
    requestList(): Promise<ICardRequestListResponse>;
    createRequest(body: ICardCreateRequestRequest): Promise<ICardCreateRequestResponse>;
    txHistory(body: ICardTxHistoryRequest): Promise<ICardTxHistoryResponse>;
    list(): Promise<ICardListResponse[]>;
    changePin(body: ICardResetPinRequest): Promise<string>;
    limit(body: ICardIdRequest): Promise<ICardLimitResponse>;
    updateLimits(body: ICardUpdateLimitsRequest): Promise<ICardLimitResponse>;
    changeType(body: ICardChangeTypeRequest): Promise<ICardListResponse>;
    changeStatus(body: ICardChangeStatusRequest): Promise<unknown>;
    activatePhysicalCard(body: ICardActivatePhysicalCardRequest): Promise<ICardListResponse>;
    info(body: ICardIdRequest): Promise<ICardListResponse>;
    topUpInfo(body: ICardIdRequest): Promise<ICardTopUpInfoResponse[]>;
    sensitiveDetails(body: ICardIdRequest): Promise<ICardSensitiveDetailsResponse>;
    pin(body: ICardIdRequest): Promise<string>;
    details(body: ICardIdRequest): Promise<ICardDetailsInfoResponse>;
    balance(body: ICardIdRequest): Promise<ICardBalanceResponse>;
}
export default Card;
