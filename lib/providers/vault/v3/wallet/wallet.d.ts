import { VaultV3SDKOptions } from "../../interfaces/vault.v3.interface";
import VaultProviderV3Base from "../VaultProviderBase";
import { IWalletAccountCreateRequest, IWalletAccountCreateResponse, IWalletAccountInfoRequest, IWalletAccountInfoResponse, IWalletAddressByAccountResponse, IWalletAddressListRequest, IWalletAddressRequest, IWalletAddressResponse, IWalletBalanceListResponse, IWalletGetBalanceLogListRequest, IWalletGetBalanceLogListResponse, IWalletGetBalanceLogReceiptRequest, IWalletGetBalanceLogReceiptResponse } from "./interfaces/wallet.interface";
export declare class Wallet extends VaultProviderV3Base {
    constructor(options: VaultV3SDKOptions);
    accountInfo(body: IWalletAccountInfoRequest): Promise<IWalletAccountInfoResponse>;
    accountList(): Promise<IWalletAccountInfoResponse[]>;
    balance(): Promise<IWalletBalanceListResponse[]>;
    getBalanceLogReceipt(body: IWalletGetBalanceLogReceiptRequest): Promise<IWalletGetBalanceLogReceiptResponse>;
    getBalanceLogList(body: IWalletGetBalanceLogListRequest): Promise<IWalletGetBalanceLogListResponse>;
    addressByAccount(body: IWalletAddressRequest): Promise<IWalletAddressByAccountResponse>;
    addressList(body: IWalletAddressListRequest): Promise<IWalletAddressResponse[]>;
    createAccount(body: IWalletAccountCreateRequest): Promise<IWalletAccountCreateResponse>;
}
