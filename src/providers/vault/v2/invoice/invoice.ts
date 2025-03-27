import { VaultV2SDKOptions } from "../../interfaces/vault.v2.interface";
import VaultProviderV2Base from "../VaultProviderBase";
import {
  ICreateInvoiceRequest,
  IInvoiceIdRequest,
  IInvoiceListRequest,
  IInvoiceResponse,
} from "./interfaces/invoice.interface";

export class Invoice extends VaultProviderV2Base {
  constructor(options: VaultV2SDKOptions) {
    super(options);
  }

  async create(body: ICreateInvoiceRequest): Promise<IInvoiceResponse> {
    const path = "/acquiring/invoice/payment";

    const headers = {
      ...this.headers,
      authorization: `Bearer ${this.getToken()}`,
    };

    return await this.request(path, { method: "POST", headers, data: body });
  }

  async confirm(body: ICreateInvoiceRequest): Promise<IInvoiceResponse> {
    const path = "/acquiring/invoice/payment/pay";

    const headers = {
      ...this.headers,
      authorization: `Bearer ${this.getToken()}`,
    };

    return await this.request(path, { method: "POST", headers, data: body });
  }

  async update(body: ICreateInvoiceRequest): Promise<IInvoiceResponse> {
    const path = "/acquiring/invoice/payment";

    const headers = {
      ...this.headers,
      authorization: `Bearer ${this.getToken()}`,
    };

    return await this.request(path, { method: "PUT", headers, data: body });
  }

  async info(body: IInvoiceIdRequest): Promise<IInvoiceResponse> {
    const path = `/acquiring/invoice/${body.invoiceId}`;

    const headers = {
      ...this.headers,
      authorization: `Bearer ${this.getToken()}`,
    };

    return await this.request(path, { method: "GET", headers });
  }

  async list(body: IInvoiceListRequest): Promise<IInvoiceResponse> {
    const path = `/acquiring/invoice`;

    const headers = {
      ...this.headers,
      authorization: `Bearer ${this.getToken()}`,
    };

    return await this.request(path, { method: "GET", headers, params: body });
  }
}
