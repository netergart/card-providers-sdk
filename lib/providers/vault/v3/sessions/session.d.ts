import { VaultV3SDKOptions } from "../../interfaces/vault.v3.interface";
import VaultProviderV3Base from "../VaultProviderBase";
import { ISession } from "./interfaces/sessions.interface";
export declare class Session extends VaultProviderV3Base {
    constructor(options: VaultV3SDKOptions);
    getActiveSession(): Promise<ISession[]>;
    logout(): Promise<{}>;
    logoutFromAllDevices(): Promise<{}>;
}
export default Session;
