import {
  CardStatus,
  CardType,
  IAddress,
  IPaginatedResponse,
  IPaginationParams,
} from "../../interfaces/common.interface";

export interface ICardDesign {
  id: string;
  name: string;
  description: string;
  image: string;
  thumbnail: string;
}

export interface ICardPricesResponse {
  id: string;
  cardType: CardType;
  currentPriceAmount: number;
  currentPriceCurrency: string;
  allowedCardDesigns: ICardDesign[];
}

export interface ICardRequestListResponse {
  id: string;
  cardType: CardType;
  status: string;
  additionalStatuses: string[];
  invoiceId: string;
  cardholderName: string;
  billingAddress: IAddress;
}

export interface ICardCreateRequestRequest {
  cardOfferId: string;
  cardDesignId: string;
}

export interface ICardCreateRequestResponse {
  id: string;
  cardType: CardType;
  status: string;
  additionalStatuses: string[];
  invoiceId: string;
  cardholderName: string;
  billingAddress: IAddress;
}

export interface ICardIdRequest {
  cardId: string;
}

export interface ICardTxHistoryRequest extends IPaginationParams {
  cardId: string;
  status?: string;
  startDate?: string;
  endDate?: string;
}

interface IMerchantData {
  mcc_category: string;
  mcc_code: string;
  city: string;
  country: string;
  name: string;
  network_id: string;
  postal_code: string;
  state: string;
}
interface ISpecificData {
  type: string;
  thirdPartyInfo: string;
}
export interface ICardTxHistoryResponseData {
  id: string;
  amount: number;
  currency: string;
  billAmount: number;
  billCurrency: string;
  transactionType: string;
  fee: number;
  creationDate: string;
  processingDate: string;
  status: string;
  merchantData: IMerchantData;
  specificData: ISpecificData;
  card: ICardListResponse;
}

export interface ICardTxHistoryResponse
  extends IPaginatedResponse<ICardTxHistoryResponseData> {}

export interface ICardListResponse {
  id: string;
  userId: string;
  accountId: string;
  additionalCardInfo: Record<string, any>;
  status: CardStatus;
  cardDesign: ICardDesign;
}

export interface ICardResetPinRequest {
  cardId: string;
  secretQuestion?: string;
  secretQuestionAnswer?: string;
  pin: string;
}

export interface ICardChangeStatusRequest {
  cardId: string;
  requiredStatus: CardStatus;
}

export interface ICardTopUpInfoResponse {
  type: string;
}

export interface ICardSensitiveDetailsResponse {
  type: string;
}

export interface ICardDetailsInfoResponse {
  last4: string;
  cardName: string;
  secondaryCardName: string;
  cardDesignId: string;
}

export interface ICardBalanceResponse {
  amount: string;
  currency: string;
}

export interface ICardSetCardholderNameResponse {
  id: string;
  cardType: CardType;
  status: CardStatus;
  additionalStatuses: string[];
  invoiceId: string;
  cardholderName: string;
  billingAddress: IAddress;
}

export interface ICardSetCardholderNameRequest {
  cardholderName: string;
  cardRequestId: string;
}

export interface ICardSetBillingAddressRequest {
  cardRequestId: string;
  billingAddress: IAddress;
}

export interface ICardSetBillingAddressResponse {
  id: string;
  cardType: string;
  status: string;
  additionalStatuses: string[];
  invoiceId: string;
  cardholderName: string;
  billingAddress: IAddress;
}
