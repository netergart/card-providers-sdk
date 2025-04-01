import { VaultV3SDKOptions } from "../../interfaces/vault.v3.interface";
import VaultProviderV3Base from "../VaultProviderBase";
import { IPaymentExchangeIdRequest, IPaymentExchangeRequest, IPaymentExchangeResponse, IPaymentPayInIdRequest, IPaymentPayInListRequest, IPaymentPayInResponse, IPaymentWithdrawIdRequest, IPaymentWithdrawRequest, IPaymentWithdrawResponse, IWalletPayInRequest, IWalletPayInResponse } from "./interfaces/payment.interface";
export declare class Payment extends VaultProviderV3Base {
    constructor(options: VaultV3SDKOptions);
    payIn(body: IWalletPayInRequest): Promise<IWalletPayInResponse>;
    payInInfo(body: IPaymentPayInIdRequest): Promise<IPaymentPayInResponse>;
    payInList(body: IPaymentPayInListRequest): Promise<IPaymentPayInResponse[]>;
    exchange(body: IPaymentExchangeRequest): Promise<IPaymentExchangeResponse>;
    exchangeInfo(body: IPaymentExchangeIdRequest): Promise<IPaymentExchangeResponse>;
    exchangeList(body: IPaymentPayInListRequest): Promise<IPaymentExchangeResponse[]>;
    withdraw(body: IPaymentWithdrawRequest): Promise<IPaymentWithdrawResponse>;
    withdrawInfo(body: IPaymentWithdrawIdRequest): Promise<IPaymentWithdrawResponse>;
    withdrawList(body: IPaymentPayInListRequest): Promise<IPaymentWithdrawResponse[]>;
}
export default Payment;
