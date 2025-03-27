import { VaultV2SDKOptions } from "../../interfaces/vault.v2.interface";
import VaultProviderV2Base from "../VaultProviderBase";
import { IPaymentExchangeRequest, IPaymentExchangeResponse, IPaymentExhangeIdRequest, IPaymentPayInIdRequest, IPaymentPayInListRequest, IPaymentPayInRequest, IPaymentPayInResponse, IPaymentWithdrawIdRequest, IPaymentWithdrawRequest, IPaymentWithdrawResponse } from "./interfaces/payment.interface";
export declare class Payment extends VaultProviderV2Base {
    constructor(options: VaultV2SDKOptions);
    payIn(body: IPaymentPayInRequest): Promise<IPaymentPayInResponse>;
    payInInfo(body: IPaymentPayInIdRequest): Promise<IPaymentPayInResponse>;
    payInList(body: IPaymentPayInListRequest): Promise<IPaymentPayInResponse[]>;
    exchange(body: IPaymentExchangeRequest): Promise<IPaymentExchangeResponse>;
    exchangeInfo(body: IPaymentExhangeIdRequest): Promise<IPaymentExchangeResponse>;
    exchangeList(body: IPaymentPayInListRequest): Promise<IPaymentExchangeResponse>;
    withdraw(body: IPaymentWithdrawRequest): Promise<IPaymentWithdrawResponse>;
    withdrawInfo(body: IPaymentWithdrawIdRequest): Promise<IPaymentWithdrawResponse>;
    withdrawList(body: IPaymentPayInListRequest): Promise<IPaymentWithdrawResponse[]>;
}
export default Payment;
