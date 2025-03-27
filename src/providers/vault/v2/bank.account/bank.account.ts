import { VaultV2SDKOptions } from "../../interfaces/vault.v2.interface";
import VaultProviderV2Base from "../VaultProviderBase";
import {
  IBankAccountCreateRequest,
  IBankAccountIdRequest,
  IBankAccountInfoRequest,
  IBankAccountResponse,
} from "./interfaces/bank.account.interface";

export class BankAccount extends VaultProviderV2Base {
  constructor(options: VaultV2SDKOptions) {
    super(options);
  }

  async create(
    body: IBankAccountCreateRequest
  ): Promise<IBankAccountResponse[]> {
    const path = "/bank/bank-account";

    const headers = {
      ...this.headers,
      authorization: `Bearer ${this.getToken()}`,
    };

    return await this.request(path, { method: "POST", headers, data: body });
  }

  async list(body: IBankAccountInfoRequest): Promise<IBankAccountResponse[]> {
    const path = "/bank/bank-account";

    const headers = {
      ...this.headers,
      authorization: `Bearer ${this.getToken()}`,
    };

    return await this.request(path, { method: "GET", headers, params: body });
  }

  async infoById(body: IBankAccountIdRequest): Promise<IBankAccountResponse> {
    const path = `/bank/bank-account/${body.accountId}`;

    const headers = {
      ...this.headers,
      authorization: `Bearer ${this.getToken()}`,
    };

    return await this.request(path, { method: "GET", headers });
  }

  async remove(body: IBankAccountIdRequest): Promise<any> {
    const path = `/bank/bank-account/${body.accountId}`;

    const headers = {
      ...this.headers,
      authorization: `Bearer ${this.getToken()}`,
    };

    return await this.request(path, { method: "DELETE", headers });
  }
}

export default BankAccount;
