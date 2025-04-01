import { VaultV3SDKOptions } from "../../interfaces/vault.v3.interface";
import VaultProviderV3Base from "../VaultProviderBase";
import {
  IRetrieveCountryListRequest,
  IRetrieveCountryListResponse,
  ISignInRequest,
  ISignInResponse,
  ISignUpConfirmRequest,
  ISignUpConfirmResponse,
  ISignUpRequest,
  ISignUpResponse,
} from "./interfaces/auth.interface";

export class Auth extends VaultProviderV3Base {
  constructor(options: VaultV3SDKOptions) {
    super(options);
  }

  async signUp(body: ISignUpRequest): Promise<ISignUpResponse> {
    const path = "/reg/v1/signup";
    const headers = this.createHeaders({ partnerId: this.partnerId }, false);

    return await this.request(path, { method: "POST", headers, data: body });
  }

  async signUpConfirm(
    body: ISignUpConfirmRequest
  ): Promise<ISignUpConfirmResponse> {
    const path = "/reg/v1/signup/confirm";
    const headers = this.createHeaders({ partnerId: this.partnerId }, false);
    const {
      termsAndConditionsConfirmed = true,
      termsAndConditionsVersion = 1,
      ...data
    } = body;

    return await this.request(path, {
      method: "POST",
      headers,
      data: { termsAndConditionsConfirmed, termsAndConditionsVersion, ...data },
    });
  }

  async signIn(body: ISignInRequest): Promise<ISignInResponse> {
    const path = "/reg/v1/auth/token";
    const headers = this.createHeaders(
      {
        partnerId: this.partnerId,
        grantType: body.grantType,
      },
      false
    );

    return await this.request(path, { method: "POST", headers, data: body });
  }

  async retrieveCountryList(
    body: IRetrieveCountryListRequest
  ): Promise<IRetrieveCountryListResponse[]> {
    const path = "/reg/v1/catalog/countries";
    const { countryFilter = "FULL" } = body;

    return await this.request(path, {
      method: "GET",
      headers: this.createHeaders(),
      params: { countryFilter },
    });
  }
}

export default Auth;
