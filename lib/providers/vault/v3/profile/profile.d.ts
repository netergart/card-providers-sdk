import { VaultV3SDKOptions } from "../../interfaces/vault.v3.interface";
import VaultProviderV3Base from "../VaultProviderBase";
import { IProfileExtendedResponse, IProfileResponse } from "./interfaces/profile.interface";
export declare class Profile extends VaultProviderV3Base {
    constructor(options: VaultV3SDKOptions);
    info(): Promise<IProfileResponse>;
    extendedInfo(): Promise<IProfileExtendedResponse>;
}
export default Profile;
