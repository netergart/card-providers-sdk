import { IWalletAddressResponse } from "../../wallet/interfaces/wallet.interface";

export interface IBankAccountCreateRequest {
  account_id?: string;
  currency: string;
}

export interface IBankAccountResponse {
  id: string;
  account_id: string;
  currency: string[];
  status: string;
  addresses: IWalletAddressResponse[];
}

export interface IBankAccountIdRequest {
  accountId?: string;
}

export enum BankAccountStatus {
  INIT = "INIT",
  PENDING = "PENDING",
  ACTION_REQUIRED = "ACTION_REQUIRED",
  ACTIVE = "ACTIVE",
  BLOCKING = "BLOCKING",
  BLOCKED = "BLOCKED",
  CLOSING = "CLOSING",
  CLOSED = "CLOSED",
}

export interface IBankAccountInfoRequest {
  accountId?: string;
  status?: BankAccountStatus;
}
