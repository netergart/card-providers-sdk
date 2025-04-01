import { VaultV3SDKOptions } from "../../interfaces/vault.v3.interface";
import VaultProviderV3Base from "../VaultProviderBase";
import {
  IBankAccountCreateRequest,
  IBankAccountIdRequest,
  IBankAccountInfoRequest,
  IBankAccountResponse,
} from "./interfaces/bank.account.interface";

export class BankAccount extends VaultProviderV3Base {
  constructor(options: VaultV3SDKOptions) {
    super(options);
  }

  async create(
    body: IBankAccountCreateRequest
  ): Promise<IBankAccountResponse[]> {
    const path = "/bank/bank-account";

    return await this.request(path, {
      method: "POST",
      headers: this.createHeaders(),
      data: body,
    });
  }

  async list(body: IBankAccountInfoRequest): Promise<IBankAccountResponse[]> {
    const path = "/bank/bank-account";

    return await this.request(path, {
      method: "GET",
      headers: this.createHeaders(),
      params: body,
    });
  }

  async infoById(body: IBankAccountIdRequest): Promise<IBankAccountResponse> {
    const path = `/bank/bank-account/${body.accountId}`;

    return await this.request(path, {
      method: "GET",
      headers: this.createHeaders(),
    });
  }

  async remove(body: IBankAccountIdRequest): Promise<any> {
    const path = `/bank/bank-account/${body.accountId}`;

    return await this.request(path, {
      method: "DELETE",
      headers: this.createHeaders(),
    });
  }
}

export default BankAccount;
