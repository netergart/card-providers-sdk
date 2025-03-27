export interface ICardPricesResponse {
  id: string;
  cardType: string;
  allowedCardDesigns: {
    id: string;
    name: string;
    description: string;
    image: string;
    thumbnail: string;
  }[];
  allowUserPrimaryCardname: boolean;
  allowUserSecondaryCardname: boolean;
  priceData: {
    cardLimit: number;
    priceAmount: string;
    priceCurrency: string;
  }[];
  currentPriceAmount: string;
  currentPriceCurrency: string;
}

export interface ICardRequestListResponse {
  id: string;
  provider: string;
  accountId: string;
  status: string;
  createdDate: string;
  cardName: string;
  secondaryCardName: string;
  cardType: string;
  pii: {
    fullName: string;
    entityType: string;
    registeredAddress: {
      id: string;
      country: string;
      postCode: string;
      state: string;
      town: string;
      street: string;
      subStreet: string;
      buildingName: string;
      flatNumber: string;
      buildingNumber: string;
      confirmed: boolean;
    };
    businessName: string;
    businessRegistrationNumber: string;
    businessOperationAddress: {
      id: string;
      country: string;
      postCode: string;
      state: string;
      town: string;
      street: string;
      subStreet: string;
      buildingName: string;
      flatNumber: string;
      buildingNumber: string;
      confirmed: boolean;
    };
    contactEntityPii: {
      firstName: string;
      middleName: string;
      lastName: string;
      dob: string;
      address: {
        id: string;
        country: string;
        postCode: string;
        state: string;
        town: string;
        street: string;
        subStreet: string;
        buildingName: string;
        flatNumber: string;
        buildingNumber: string;
        confirmed: boolean;
      };
      phone: string;
      email: string;
      documentType: string;
      documentNumber: string;
      type: string;
    };
    type: string;
  };
  cardDesign: {
    id: string;
    name: string;
    description: string;
    image: string;
    thumbnail: string;
  };
  deliveryAddress: {
    id: string;
    country: string;
    postCode: string;
    state: string;
    town: string;
    street: string;
    subStreet: string;
    buildingName: string;
    flatNumber: string;
    buildingNumber: string;
    confirmed: boolean;
  };
  invoiceId: string;
}

export enum CardType {
  VIRTUAL = "VIRTUAL",
  PHYSICAL = "PHYSICAL",
}

export enum PiiType {
  UserPII = "UserPII",
  BusinessPII = "BusinessPII",
}

export enum DocumentType {
  Passport = "Passport",
  NationalId = "NationalId",
  DriversLicense = "DriversLicense",
}

export enum ProviderType {
  REAP = "REAP",
}

export interface ICardCreateRequestRequest {
  cardOfferId: string;
  accountId?: string;
  preferredCardname: string;
  secondaryCardname?: string;
  billingAddress: {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    country: string;
    postCode: string;
    state: string;
    town: string;
    street: string;
    subStreet?: string;
    buildingName?: string;
    flatNumber?: string;
    buildingNumber?: string;
  };
  deliveryAddress?: {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    country: string;
    postCode: string;
    state: string;
    town: string;
    street: string;
    subStreet?: string;
    buildingName?: string;
    flatNumber?: string;
    buildingNumber?: string;
  };
  cardDesignId: string;
}

export interface ICardCreateRequestResponse {
  id: string;
  accountId: string;
  status: string;
  createdDate: string;
  cardName: string;
  secondaryCardName: string;
  cardType: string;
  cardDesign: {
    id: string;
    name: string;
    description: string;
    image: string;
    thumbnail: string;
  };
  billingAddress: {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    country: string;
    postCode: string;
    state: string;
    town: string;
    street: string;
    subStreet: string;
    buildingName: string;
    flatNumber: string;
    buildingNumber: string;
    confirmed: boolean;
  };
  deliveryAddress?: {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    country: string;
    postCode: string;
    state: string;
    town: string;
    street: string;
    subStreet: string;
    buildingName: string;
    flatNumber: string;
    buildingNumber: string;
    confirmed: boolean;
  };
  invoiceId: string;
}

export interface ICardIdRequest {
  cardId: string;
}

export interface ICardTxHistoryRequest extends ICardIdRequest {
  status?: string;
  startDate?: string;
  endDate?: string;
  size?: number;
  page?: number;
  sort?: string;
}

export interface ICardTxHistoryResponse {
  currentPage: number;
  totalItems: number;
  totalPages: number;
  data: {
    id: string;
    amount: string;
    currency: string;
    billAmount: string;
    billCurrency: string;
    transactionType: string;
    fee: string;
    creationDate: string;
    processingDate: string;
    status: string;
    merchantData: {
      mcc_category: string;
      mcc_code: string;
      city: string;
      country: string;
      name: string;
      network_id: string;
      postal_code: string;
      state: string;
    };
    specificData: {
      mcc: string;
      mti: string;
      arn: string;
      stn: string;
      termId: string;
      authNum: string;
      recType: string;
      availableBalance: string;
      ledgerBalance: string;
      issuerFee: string;
      clientId: string;
      termNameLocation: string;
      termOwner: string;
      termCity: string;
      termState: string;
      termCountry: string;
      surcharge: string;
      rspCode: string;
      origHoldAmt: string;
      termCurrency: string;
      origTransAmt: string;
      atmFee: string;
      type: string;
    };
    card: {
      id: string;
      userId: string;
      accountId: string;
      additionalCardInfo: {};
      status: string;
      cardDesign: {
        id: string;
        name: string;
        description: string;
        image: string;
        thumbnail: string;
      };
    };
  }[];
}

export interface ICardListResponse {
  id: string;
  userId: string;
  accountId: string;
  additionalCardInfo: {};
  status: string;
  cardDesign: {
    id: string;
    name: string;
    description: string;
    image: string;
    thumbnail: string;
  };
}

export interface ICardResetPinRequest extends ICardIdRequest {
  secretQuestion?: string;
  secretQuestionAnswer?: string;
  pin: string;
}

export interface ICardLimitResponse {
  cap: {
    transaction: string;
    daily: string;
    weekly: string;
    monthly: string;
    yearly: string;
    allTime: string;
  };
  current: {
    transaction: string;
    daily: string;
    weekly: string;
    monthly: string;
    yearly: string;
    allTime: string;
  };
}

export interface ICardUpdateLimitsRequest extends ICardIdRequest {
  transaction?: string;
  daily?: string;
  weekly?: string;
  monthly?: string;
  yearly?: string;
  allTime?: string;
}

export interface ICardChangeTypeRequest extends ICardIdRequest {
  cardType: CardType;
  address: {
    country?: string;
    postCode?: string;
    state?: string;
    town?: string;
    street?: string;
    subStreet?: string;
    buildingName?: string;
    flatNumber?: string;
    buildingNumber?: string;
  };
}

export enum CardStatus {
  INIT = "INIT",
  PENDING = "PENDING",
  ISSUED = "ISSUED",
  ACTIVE = "ACTIVE",
  FROZEN = "FROZEN",
  LOST = "LOST",
  STOLEN = "STOLEN",
  INACTIVE = "INACTIVE",
  CLOSED = "CLOSED",
  REJECTED = "REJECTED",
}

export interface ICardChangeStatusRequest extends ICardIdRequest {
  requiredStatus: CardStatus;
}

export interface ICardActivatePhysicalCardRequest extends ICardIdRequest {
  activationCode: string;
}

export interface ICardTopUpInfoResponse {
  address: string;
  blockchain: string;
  token: string;
  type: string;
  iban: string;
  bank_name: string;
  account_holder: string;
  reference: string;
}

export interface ICardSensitiveDetailsResponse {
  type: string;
  cardNumber: string;
  cardName: string;
  secondaryCardName: string;
  expDate: string;
  cvc: string;
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
