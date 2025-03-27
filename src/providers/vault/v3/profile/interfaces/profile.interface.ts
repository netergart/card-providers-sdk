export enum UserType {
  CUSTOMER = "CUSTOMER",
  BUSINESS = "BUSINESS",
  APPLICATION = "APPLICATION",
}

export interface Address {
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

export interface ConfirmableAddress extends Address {
  confirmed: boolean;
  id: string;
}

export interface Limit {
  currency: string;
  dayLimit: string;
  globalLimit: string;
  group: string;
  groupPriority: number;
  monthLimit: string;
  type: string;
  yearLimit: string;
}

export interface Email {
  confirmed: boolean;
  email: string;
  id: string;
}

export interface IProfileUpdateInfoRequest {
  firstName?: string;
  lastName?: string;
  residentialAddress?: Address;
  userType: UserType;
}

export interface IProfileResponse {
  addresses: ConfirmableAddress[];
  approved: boolean;
  companyName: string;
  emails: Email[];
  firstName: string;
  lastName: string;
  personalFeeLimit: Limit;
  phone: string;
  primaryEmail: Email;
  residentialAddress: ConfirmableAddress;
  status: string;
  userScopes: string[];
  userType: string;
}
