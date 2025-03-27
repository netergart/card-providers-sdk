import { VaultV2SDKOptions } from "../../interfaces/vault.v2.interface";
import VaultProviderV2Base from "../VaultProviderBase";
import { IWalletAccountInfoRequest, IWalletCreateAccountRequest, IWalletAccountInfoResponse, IWalletAddressRequest, IWalletAddressResponse, IWalletGetBalanceRequest, IWalletUpdateBalanceRequest, IWalletBalanceListResponse } from "./interfaces/wallet.interface";
export declare class Wallet extends VaultProviderV2Base {
    constructor(options: VaultV2SDKOptions);
    createAccount(body: IWalletCreateAccountRequest): Promise<IWalletAccountInfoResponse>;
    accountInfo(body: IWalletAccountInfoRequest): Promise<IWalletAccountInfoResponse>;
    accountList(): Promise<IWalletAccountInfoResponse[]>;
    addressByAccount(body: IWalletAddressRequest): Promise<IWalletAddressResponse>;
    balance(body: IWalletGetBalanceRequest): Promise<IWalletBalanceListResponse[]>;
    updateBalance(body: IWalletUpdateBalanceRequest): Promise<IWalletBalanceListResponse>;
}
