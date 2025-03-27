import { VaultV3SDKOptions } from "../../interfaces/vault.v3.interface";
import VaultProviderV3Base from "../VaultProviderBase";
import { IProfileResponse, IProfileUpdateInfoRequest } from "./interfaces/profile.interface";
export declare class Profile extends VaultProviderV3Base {
    constructor(options: VaultV3SDKOptions);
    info(): Promise<IProfileResponse>;
    updateInfo(body: IProfileUpdateInfoRequest): Promise<IProfileResponse>;
}
export default Profile;
