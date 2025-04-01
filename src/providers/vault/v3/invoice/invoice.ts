import { VaultV3SDKOptions } from "../../interfaces/vault.v3.interface";
import VaultProviderV3Base from "../VaultProviderBase";
import {
  ICreateInvoiceRequest,
  IInvoiceDiscountRequest,
  IInvoiceIdRequest,
  IInvoiceInfoResponse,
  IInvoiceListRequest,
  IInvoiceListResponse,
  IInvoiceResponse,
} from "./interfaces/invoice.interface";

export class Invoice extends VaultProviderV3Base {
  constructor(options: VaultV3SDKOptions) {
    super(options);
  }

  async create(body: ICreateInvoiceRequest): Promise<IInvoiceResponse> {
    const path = "/acquiring/invoice/payment";

    return await this.request(path, {
      method: "POST",
      headers: this.createHeaders(),
      data: body,
    });
  }

  async confirm(body: ICreateInvoiceRequest): Promise<IInvoiceResponse> {
    const path = "/acquiring/invoice/payment/pay";

    return await this.request(path, {
      method: "POST",
      headers: this.createHeaders(),
      data: body,
    });
  }

  async update(body: ICreateInvoiceRequest): Promise<IInvoiceResponse> {
    const path = "/acquiring/invoice/payment";

    return await this.request(path, {
      method: "PUT",
      headers: this.createHeaders(),
      data: body,
    });
  }

  async info(body: IInvoiceIdRequest): Promise<IInvoiceInfoResponse> {
    const path = `/acquiring/invoice/${body.invoiceId}`;

    return await this.request(path, {
      method: "GET",
      headers: this.createHeaders(),
    });
  }

  async list(body: IInvoiceListRequest): Promise<IInvoiceListResponse> {
    const path = `/acquiring/invoice`;

    return await this.request(path, {
      method: "GET",
      headers: this.createHeaders(),
      params: body,
    });
  }

  async discount(body: IInvoiceDiscountRequest): Promise<Record<any, any>> {
    const path = "/acquiring/invoice/payment/discount";

    return await this.request(path, {
      method: "PUT",
      headers: this.createHeaders(),
      data: body,
    });
  }
}
