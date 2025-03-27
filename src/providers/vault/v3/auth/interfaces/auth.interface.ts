import { GrantType, UserType } from "../../interfaces/common.interface";

export interface ISignUpConfirmRequest {
  email: string;
  emailConfirmCode: string;
  password: string;
  termsAndConditionsConfirmed: string;
  termsAndConditionsVersion: number;
  userType: UserType;
}

export interface ISignUpConfirmResponse {
  access_token: string;
  error: string;
  error_description: string;
  expires_in: number;
  mfa_token: string;
  refresh_token: string;
  scope: string;
  token_type: string;
  user_id: string;
}

export interface ISignUpResponse {
  result: string;
}

export interface ISignUpRequest {
  email: string;
  password: string;
}

export interface ISignInRequest {
  email?: string;
  password?: string;
  refreshToken?: string;
  grantType: GrantType;
}

export interface ISignInResponse {
  access_token: string;
  error: string;
  error_description: string;
  expires_in: number;
  mfa_token: string;
  refresh_token: string;
  scope: string;
  token_type: string;
  user_id: string;
}

export interface IRetrieveCountryListRequest {
  countryFilter: "ALL" | "FULL" | "FORBIDDEN_FOR_REGISTRATION";
}

export interface IRetrieveCountryListResponse {
  isoCode2: string;
  isoCode3: string;
  name: string;
}
