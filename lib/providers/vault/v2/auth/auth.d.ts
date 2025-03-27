import { VaultV2SDKOptions } from "../../interfaces/vault.v2.interface";
import { ISignInRequest, ISignInUpResponse, ISignUpRequest } from "../interfaces/auth.interface";
import VaultProviderV2Base from "../VaultProviderBase";
export declare class Auth extends VaultProviderV2Base {
    constructor(options: VaultV2SDKOptions);
    signUp(body: ISignUpRequest): Promise<ISignInUpResponse | {}>;
    signIn(body: ISignInRequest): Promise<ISignInUpResponse>;
}
export default Auth;
