import { VaultV2SDKOptions } from "../../interfaces/vault.v2.interface";
import VaultProviderV2Base from "../VaultProviderBase";
import { IProfileAddAddressRequest, IProfileAddAddressResponse, IProfileAddressIdRequest, IProfileLimitResponse, IProfileResponse, IProfileUpdateAddressRequest, IProfileUpdateInfoRequest } from "./interfaces/profile.interface";
export declare class Profile extends VaultProviderV2Base {
    constructor(options: VaultV2SDKOptions);
    info(): Promise<IProfileResponse>;
    updateInfo(body: IProfileUpdateInfoRequest): Promise<IProfileResponse>;
    addAddress(body: IProfileAddAddressRequest): Promise<IProfileAddAddressResponse>;
    updateAddress(body: IProfileUpdateAddressRequest): Promise<IProfileAddAddressResponse>;
    setAddressAsPrimary(body: IProfileAddressIdRequest): Promise<IProfileAddAddressResponse>;
    limit(): Promise<IProfileLimitResponse>;
}
export default Profile;
