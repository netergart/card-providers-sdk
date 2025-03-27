import { VaultV3SDKOptions } from "../../interfaces/vault.v3.interface";
import { ErrorResponse } from "../interfaces/common.interface";
import VaultProviderV3Base from "../VaultProviderBase";
import { IWalletAccountInfoRequest, IWalletAccountInfoResponse, IWalletAddressRequest, IWalletAddressResponse, IWalletGetBalanceRequest, IWalletBalanceListResponse, IWalletGetBalanceLogReceiptResponse, IWalletGetBalanceLogReceiptRequest, IWalletGetBalanceLogListRequest, IWalletGetBalanceLogListResponse } from "./interfaces/wallet.interface";
export declare class Wallet extends VaultProviderV3Base {
    constructor(options: VaultV3SDKOptions);
    accountInfo(body: IWalletAccountInfoRequest): Promise<IWalletAccountInfoResponse | ErrorResponse>;
    accountList(): Promise<IWalletAccountInfoResponse[] | ErrorResponse>;
    addressByAccount(body: IWalletAddressRequest): Promise<IWalletAddressResponse | ErrorResponse>;
    balance(body: IWalletGetBalanceRequest): Promise<IWalletBalanceListResponse[] | ErrorResponse>;
    getBalanceLogReceipt(body: IWalletGetBalanceLogReceiptRequest): Promise<IWalletGetBalanceLogReceiptResponse | ErrorResponse>;
    getBalanceLogList(body: IWalletGetBalanceLogListRequest): Promise<IWalletGetBalanceLogListResponse | ErrorResponse>;
}
