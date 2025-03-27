import { VaultV3SDKOptions } from "../../interfaces/vault.v3.interface";
import { ErrorResponse } from "../interfaces/common.interface";
import VaultProviderV3Base from "../VaultProviderBase";
import { ICreateInvoiceRequest, IInvoiceDiscountRequest, IInvoiceIdRequest, IInvoiceInfoResponse, IInvoiceListRequest, IInvoiceListResponse, IInvoiceResponse } from "./interfaces/invoice.interface";
export declare class Invoice extends VaultProviderV3Base {
    constructor(options: VaultV3SDKOptions);
    create(body: ICreateInvoiceRequest): Promise<IInvoiceResponse | ErrorResponse>;
    confirm(body: ICreateInvoiceRequest): Promise<IInvoiceResponse | ErrorResponse>;
    update(body: ICreateInvoiceRequest): Promise<IInvoiceResponse | ErrorResponse>;
    info(body: IInvoiceIdRequest): Promise<IInvoiceInfoResponse | ErrorResponse>;
    list(body: IInvoiceListRequest): Promise<IInvoiceListResponse | ErrorResponse>;
    discount(body: IInvoiceDiscountRequest): Promise<Record<any, any> | ErrorResponse>;
}
