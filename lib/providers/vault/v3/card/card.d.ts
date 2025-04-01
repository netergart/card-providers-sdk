import { VaultV3SDKOptions } from "../../interfaces/vault.v3.interface";
import VaultProviderV3Base from "../VaultProviderBase";
import { ICardBalanceResponse, ICardChangeStatusRequest, ICardCreateRequestRequest, ICardCreateRequestResponse, ICardDetailsInfoResponse, ICardIdRequest, ICardListResponse, ICardPricesResponse, ICardRequestListResponse, ICardResetPinRequest, ICardSensitiveDetailsResponse, ICardSetBillingAddressRequest, ICardSetBillingAddressResponse, ICardSetCardholderNameRequest, ICardSetCardholderNameResponse, ICardTopUpInfoResponse, ICardTxHistoryRequest, ICardTxHistoryResponse } from "./interfaces/card.interface";
export declare class Card extends VaultProviderV3Base {
    constructor(options: VaultV3SDKOptions);
    prices(): Promise<ICardPricesResponse[]>;
    requestList(): Promise<ICardRequestListResponse[]>;
    createRequest(body: ICardCreateRequestRequest): Promise<ICardCreateRequestResponse>;
    txHistory(body: ICardTxHistoryRequest): Promise<ICardTxHistoryResponse>;
    list(): Promise<ICardListResponse[]>;
    changePin(body: ICardResetPinRequest): Promise<string>;
    changeStatus(body: ICardChangeStatusRequest): Promise<ICardListResponse>;
    info(body: ICardIdRequest): Promise<ICardListResponse>;
    topUpInfo(body: ICardIdRequest): Promise<ICardTopUpInfoResponse[]>;
    sensitiveDetails(body: ICardIdRequest): Promise<ICardSensitiveDetailsResponse>;
    pin(body: ICardIdRequest): Promise<string>;
    details(body: ICardIdRequest): Promise<ICardDetailsInfoResponse>;
    balance(body: ICardIdRequest): Promise<ICardBalanceResponse>;
    setBillingAddress(body: ICardSetBillingAddressRequest): Promise<ICardSetBillingAddressResponse>;
    cancelCardRequest(body: ICardIdRequest): Promise<any>;
    setCardholderName(body: ICardSetCardholderNameRequest): Promise<ICardSetCardholderNameResponse>;
}
export default Card;
