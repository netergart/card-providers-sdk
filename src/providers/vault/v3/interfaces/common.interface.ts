export enum UserType {
  CUSTOMER = "CUSTOMER",
  BUSINESS = "BUSINESS",
  APPLICATION = "APPLICATION",
}

export enum CardType {
  VIRTUAL = "VIRTUAL",
  PHYSICAL = "PHYSICAL",
}

export enum CardStatus {
  INIT = "INIT",
  PENDING = "PENDING",
  ISSUED = "ISSUED",
  ACTIVE = "ACTIVE",
  FROZEN = "FROZEN",
  LOST = "LOST",
  STOLEN = "STOLEN",
  INACTIVE = "INACTIVE",
  CLOSED = "CLOSED",
  REJECTED = "REJECTED",
}

export interface ErrorItem {
  description: string;
  key: string;
}

export interface ErrorResponse {
  errors: ErrorItem[];
  message: string;
  status: string;
  traceId: string;
}

export enum GrantType {
  PASSWORD_EMAIL = "password_email",
  REFRESH_TOKEN = "refresh_token",
}

export interface IAddress {
  country: string;
  state: string;
  city: string;
  addressLine1: string;
  addressLine2: string;
  postalCode: string;
}

export interface IPaginatedResponse<T> {
  data: T[];
  currentPage: number;
  totalItems: number;
  totalPages: number;
}

export interface IPayment {
  id: string;
  invoiceId: string;
  status: string;
  type: string;
  session?: Record<string, unknown>;
  accountId?: string;
}

export interface IPaginationParams {
  page?: number;
  size?: number;
  sort?: string;
}
