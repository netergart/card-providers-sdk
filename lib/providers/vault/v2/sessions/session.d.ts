import { VaultV2SDKOptions } from "../../interfaces/vault.v2.interface";
import VaultProviderV2Base from "../VaultProviderBase";
export declare class Session extends VaultProviderV2Base {
    constructor(options: VaultV2SDKOptions);
    logout(): Promise<{}>;
}
export default Session;
