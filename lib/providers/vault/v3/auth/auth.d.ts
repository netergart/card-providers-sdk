import { VaultV3SDKOptions } from "../../interfaces/vault.v3.interface";
import VaultProviderV3Base from "../VaultProviderBase";
import { IRetrieveCountryListRequest, IRetrieveCountryListResponse, ISignInRequest, ISignInResponse, ISignUpConfirmRequest, ISignUpConfirmResponse, ISignUpRequest, ISignUpResponse } from "./interfaces/auth.interface";
export declare class Auth extends VaultProviderV3Base {
    constructor(options: VaultV3SDKOptions);
    signUp(body: ISignUpRequest): Promise<ISignUpResponse>;
    signUpConfirm(body: ISignUpConfirmRequest): Promise<ISignUpConfirmResponse>;
    signIn(body: ISignInRequest): Promise<ISignInResponse>;
    retrieveCountryList(body: IRetrieveCountryListRequest): Promise<IRetrieveCountryListResponse[]>;
}
export default Auth;
