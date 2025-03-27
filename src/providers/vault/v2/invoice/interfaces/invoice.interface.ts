export enum InvoiceType {
  PLATFORM = "PLATFORM",
  CHECKOUT = "CHECKOUT",
  EXTERNAL = "EXTERNAL",
}

export interface ICreateInvoiceRequest {
  paymentId?: string;
  invoiceId: string;
  type: InvoiceType;
  accountId: string;
  currency?: string;
  anyCurrency?: boolean;
  someData?: string;
}

export interface IInvoiceResponse {
  id: string;
  invoiceId: string;
  status: string;
  type: string;
  session: any;
}

export interface IInvoiceIdRequest {
  invoiceId: string;
}

export interface IInvoiceListRequest {
  status?: string;
  type?: string;
  search?: string;
  page?: number;
  size?: number;
}
