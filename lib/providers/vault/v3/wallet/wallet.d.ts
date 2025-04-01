import { VaultV3SDKOptions } from "../../interfaces/vault.v3.interface";
import { ErrorResponse } from "../interfaces/common.interface";
import VaultProviderV3Base from "../VaultProviderBase";
import { IWalletAccountInfoRequest, IWalletAccountInfoResponse, IWalletAddressListRequest, IWalletAddressRequest, IWalletAddressResponse, IWalletBalanceListResponse, IWalletGetBalanceLogListRequest, IWalletGetBalanceLogListResponse, IWalletGetBalanceLogReceiptRequest, IWalletGetBalanceLogReceiptResponse } from "./interfaces/wallet.interface";
export declare class Wallet extends VaultProviderV3Base {
    constructor(options: VaultV3SDKOptions);
    accountInfo(body: IWalletAccountInfoRequest): Promise<IWalletAccountInfoResponse | ErrorResponse>;
    accountList(): Promise<IWalletAccountInfoResponse[] | ErrorResponse>;
    balance(): Promise<IWalletBalanceListResponse[] | ErrorResponse>;
    getBalanceLogReceipt(body: IWalletGetBalanceLogReceiptRequest): Promise<IWalletGetBalanceLogReceiptResponse | ErrorResponse>;
    getBalanceLogList(body: IWalletGetBalanceLogListRequest): Promise<IWalletGetBalanceLogListResponse | ErrorResponse>;
    addressByAccount(body: IWalletAddressRequest): Promise<IWalletAddressResponse[] | ErrorResponse>;
    addressList(body: IWalletAddressListRequest): Promise<IWalletAddressResponse[] | ErrorResponse>;
}
