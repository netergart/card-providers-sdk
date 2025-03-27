import { VaultV3SDKOptions } from "../../interfaces/vault.v3.interface";
import VaultProviderV3Base from "../VaultProviderBase";
import { IProfileResponse } from "./interfaces/profile.interface";
export declare class Profile extends VaultProviderV3Base {
    constructor(options: VaultV3SDKOptions);
    info(): Promise<IProfileResponse>;
}
export default Profile;
