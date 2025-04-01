import { VaultV3SDKOptions } from "../../interfaces/vault.v3.interface";
import VaultProviderV3Base from "../VaultProviderBase";
import { ICreateInvoiceRequest, IInvoiceDiscountRequest, IInvoiceIdRequest, IInvoiceInfoResponse, IInvoiceListRequest, IInvoiceListResponse, IInvoiceResponse } from "./interfaces/invoice.interface";
export declare class Invoice extends VaultProviderV3Base {
    constructor(options: VaultV3SDKOptions);
    create(body: ICreateInvoiceRequest): Promise<IInvoiceResponse>;
    confirm(body: ICreateInvoiceRequest): Promise<IInvoiceResponse>;
    update(body: ICreateInvoiceRequest): Promise<IInvoiceResponse>;
    info(body: IInvoiceIdRequest): Promise<IInvoiceInfoResponse>;
    list(body: IInvoiceListRequest): Promise<IInvoiceListResponse>;
    discount(body: IInvoiceDiscountRequest): Promise<Record<any, any>>;
}
