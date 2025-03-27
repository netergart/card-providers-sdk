import { VaultV3SDKOptions } from "../../interfaces/vault.v3.interface";
import VaultProviderV3Base from "../VaultProviderBase";
import { IKycStartRequest, IKycStartResponse, IKycStatusRequest, IKycStatusResponse } from "./interfaces/kyc.interface";
export declare class Kyc extends VaultProviderV3Base {
    constructor(options: VaultV3SDKOptions);
    status(body: IKycStatusRequest): Promise<IKycStatusResponse>;
    start({ type, }: IKycStartRequest): Promise<IKycStartResponse>;
}
export default Kyc;
