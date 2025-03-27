import {
  IPayment,
  IPaginatedResponse,
  IPaginationParams,
} from "../../interfaces/common.interface";

export enum InvoiceType {
  PLATFORM = "PLATFORM",
  CHECKOUT = "CHECKOUT",
  EXTERNAL = "EXTERNAL",
}

interface BaseInvoiceRequest {
  invoiceId: string;
  type: InvoiceType;
  paymentId?: string;
  accountId?: string;
  currency?: string;
  anyCurrency?: boolean;
  someData?: string;
}

interface IPlatformInvoiceRequest extends BaseInvoiceRequest {
  type: InvoiceType.PLATFORM;
  accountId: string;
  anyCurrency: boolean;
}

interface ICheckoutInvoiceRequest extends BaseInvoiceRequest {
  type: InvoiceType.CHECKOUT;
}

interface IPExternalInvoiceRequest extends BaseInvoiceRequest {
  type: InvoiceType.EXTERNAL;
  someData: string;
}

export type ICreateInvoiceRequest =
  | ICheckoutInvoiceRequest
  | IPExternalInvoiceRequest
  | IPlatformInvoiceRequest;

export interface IInvoiceResponse {
  id: string;
  invoiceId: string;
  status: string;
  type: string;
  session: Record<any, unknown>;
}

export interface IInvoiceIdRequest {
  invoiceId: string;
}

export interface IInvoiceListRequest extends IPaginationParams {
  status?: string;
  type?: string;
  search?: string;
}

export interface IInvoiceInfoResponse {
  externalClientId: string;
  id: string;
  amount: number;
  currency: string;
  paymentDate: number;
  type: string;
  status: string;
  payments: IPayment[];
  discountCode: string;
  AmountBeforeDiscount: number;
}

export interface IInvoiceList {
  externalClientId: string;
  id: string;
  amount: number;
  currency: string;
  paymentDate: number;
  type: string;
  status: string;
  payments: IPayment[];
  discountCode: string;
  AmountBeforeDiscount: number;
  nextPaymentDate?: number;
  initialPaymentAmount?: number;
  linkedInvoices?: IInvoiceInfoResponse[];
  recurrentInvoiceInterval?: string;
}

export interface IInvoiceListResponse
  extends IPaginatedResponse<IInvoiceList> {}

export interface IInvoiceDiscountRequest {
  invoiceId: string;
  discountCode: string;
}
