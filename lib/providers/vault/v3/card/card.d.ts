import { VaultV3SDKOptions } from "../../interfaces/vault.v3.interface";
import { ErrorResponse } from "../interfaces/common.interface";
import VaultProviderV3Base from "../VaultProviderBase";
import { ICardBalanceResponse, ICardChangeStatusRequest, ICardCreateRequestRequest, ICardCreateRequestResponse, ICardDetailsInfoResponse, ICardIdRequest, ICardListResponse, ICardPricesResponse, ICardRequestListResponse, ICardResetPinRequest, ICardSensitiveDetailsResponse, ICardSetBillingAddressRequest, ICardSetBillingAddressResponse, ICardSetCardholderNameRequest, ICardSetCardholderNameResponse, ICardTopUpInfoResponse, ICardTxHistoryRequest, ICardTxHistoryResponse } from "./interfaces/card.interface";
export declare class Card extends VaultProviderV3Base {
    constructor(options: VaultV3SDKOptions);
    prices(): Promise<ICardPricesResponse[] | ErrorResponse>;
    requestList(): Promise<ICardRequestListResponse[] | ErrorResponse>;
    createRequest(body: ICardCreateRequestRequest): Promise<ICardCreateRequestResponse | ErrorResponse>;
    txHistory(body: ICardTxHistoryRequest): Promise<ICardTxHistoryResponse | ErrorResponse>;
    list(): Promise<ICardListResponse[] | ErrorResponse>;
    changePin(body: ICardResetPinRequest): Promise<string | ErrorResponse>;
    changeStatus(body: ICardChangeStatusRequest): Promise<ICardListResponse | ErrorResponse>;
    info(body: ICardIdRequest): Promise<ICardListResponse | ErrorResponse>;
    topUpInfo(body: ICardIdRequest): Promise<ICardTopUpInfoResponse[] | ErrorResponse>;
    sensitiveDetails(body: ICardIdRequest): Promise<ICardSensitiveDetailsResponse | ErrorResponse>;
    pin(body: ICardIdRequest): Promise<string | ErrorResponse>;
    details(body: ICardIdRequest): Promise<ICardDetailsInfoResponse | ErrorResponse>;
    balance(body: ICardIdRequest): Promise<ICardBalanceResponse | ErrorResponse>;
    setBillingAddress(body: ICardSetBillingAddressRequest): Promise<ICardSetBillingAddressResponse | ErrorResponse>;
    cancelCardRequest(body: ICardIdRequest): Promise<any | ErrorResponse>;
    setCardholderName(body: ICardSetCardholderNameRequest): Promise<ICardSetCardholderNameResponse | ErrorResponse>;
}
export default Card;
