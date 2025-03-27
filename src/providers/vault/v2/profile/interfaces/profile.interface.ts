export enum UserType {
  CUSTOMER = "CUSTOMER",
  BUSINESS = "BUSINESS",
  APPLICATION = "APPLICATION",
}

export interface IProfileUpdateInfoRequest {
  firstName?: string;
  lastName?: string;
  residentialAddress?: {
    buildingName?: string;
    buildingNumber?: string;
    country: string;
    flatNumber?: string;
    postCode: string;
    state: string;
    street: string;
    subStreet?: string;
    town: string;
  };
  userType: UserType;
}

export interface IProfileResponse {
  addresses: {
    buildingName: string;
    buildingNumber: string;
    confirmed: boolean;
    country: string;
    flatNumber: string;
    id: string;
    postCode: string;
    state: string;
    street: string;
    subStreet: string;
    town: string;
  }[];
  approved: boolean;
  companyName: string;
  emails: {
    confirmed: boolean;
    email: string;
    id: string;
  }[];
  firstName: string;
  lastName: string;
  personalFeeLimit: {
    currency: string;
    dayLimit: string;
    globalLimit: string;
    group: string;
    groupPriority: number;
    monthLimit: string;
    type: string;
    yearLimit: string;
  };
  phone: string;
  primaryEmail: {
    confirmed: boolean;
    email: string;
    id: string;
  };
  residentialAddress: {
    buildingName: string;
    buildingNumber: string;
    confirmed: boolean;
    country: string;
    flatNumber: string;
    id: string;
    postCode: string;
    state: string;
    street: string;
    subStreet: string;
    town: string;
  };
  userScopes: string[];
  userType: string;
}

export interface IProfileAddAddressRequest {
  buildingName?: string;
  buildingNumber?: string;
  country: string;
  flatNumber?: string;
  postCode: string;
  state: string;
  street: string;
  subStreet?: string;
  town: string;
}

export interface IProfileAddressIdRequest {
  addressId: string;
}

export interface IProfileUpdateAddressRequest extends IProfileAddressIdRequest {
  buildingName?: string;
  buildingNumber?: string;
  country: string;
  flatNumber?: string;
  postCode: string;
  state: string;
  street: string;
  subStreet?: string;
  town: string;
}

export interface IProfileAddAddressResponse {
  buildingName: string;
  buildingNumber: string;
  confirmed: boolean;
  country: string;
  flatNumber: string;
  id: string;
  postCode: string;
  state: string;
  street: string;
  subStreet: string;
  town: string;
}

export interface IProfileLimitResponse {
  depositLimit: {
    currency: string;
    dayLimit: string;
    globalLimit: string;
    group: string;
    groupPriority: number;
    monthLimit: string;
    type: string;
    yearLimit: string;
  };
  feeLimit: {
    currency: string;
    dayLimit: string;
    globalLimit: string;
    group: string;
    groupPriority: number;
    monthLimit: string;
    type: string;
    yearLimit: string;
  };
  withdrawLimit: {
    currency: string;
    dayLimit: string;
    globalLimit: string;
    group: string;
    groupPriority: number;
    monthLimit: string;
    type: string;
    yearLimit: string;
  };
}
