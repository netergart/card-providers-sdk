import { VaultV3SDKOptions } from "../../interfaces/vault.v3.interface";
import VaultProviderV3Base from "../VaultProviderBase";
import { ErrorResponse } from "../interfaces/common.interface";
import { IRetrieveCountryListRequest, IRetrieveCountryListResponse, ISignInRequest, ISignInResponse, ISignUpConfirmRequest, ISignUpConfirmResponse, ISignUpRequest, ISignUpResponse } from "./interfaces/auth.interface";
export declare class Auth extends VaultProviderV3Base {
    constructor(options: VaultV3SDKOptions);
    signUp(body: ISignUpRequest): Promise<ISignUpResponse | ErrorResponse>;
    signUpConfirm(body: ISignUpConfirmRequest): Promise<ISignUpConfirmResponse | ErrorResponse>;
    signIn(body: ISignInRequest): Promise<ISignInResponse | ErrorResponse>;
    retrieveCountryList(body: IRetrieveCountryListRequest): Promise<IRetrieveCountryListResponse[] | ErrorResponse>;
}
export default Auth;
