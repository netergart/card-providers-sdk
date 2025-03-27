import { VaultV2SDKOptions } from "../../interfaces/vault.v2.interface";
import VaultProviderV2Base from "../VaultProviderBase";
import { ICreateInvoiceRequest, IInvoiceIdRequest, IInvoiceListRequest, IInvoiceResponse } from "./interfaces/invoice.interface";
export declare class Invoice extends VaultProviderV2Base {
    constructor(options: VaultV2SDKOptions);
    create(body: ICreateInvoiceRequest): Promise<IInvoiceResponse>;
    confirm(body: ICreateInvoiceRequest): Promise<IInvoiceResponse>;
    update(body: ICreateInvoiceRequest): Promise<IInvoiceResponse>;
    info(body: IInvoiceIdRequest): Promise<IInvoiceResponse>;
    list(body: IInvoiceListRequest): Promise<IInvoiceResponse>;
}
