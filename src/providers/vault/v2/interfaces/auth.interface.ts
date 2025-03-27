export interface ISignUpRequest {
  email: string;
  emailConfirmCode?: string;
  phone: string;
  phoneConfirmCode?: string;
  password: string;
  userType?: string;
}

export interface ISignInUpResponse {
  access_token: string;
  error?: string;
  error_description?: string;
  expires_in: number;
  mfa_token?: string;
  refresh_token?: string;
  scope: string;
  token_type: string;
  user_id: string;
}

export enum GrantType {
  client_credentials = "client_credentials",
  refresh_token = "refresh_token",
  password = "password",
}

export interface ISignInRequest {
  audience?: string;
  scope?: string;
  grant_type: GrantType;
  refresh_token?: string;
  client_id: string;
  client_secret?: string;
  username?: string;
  password?: string;
  twoFactorId?: string;
  twoFactorCode?: string;
}
