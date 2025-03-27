import { VaultV3SDKOptions } from "../../interfaces/vault.v3.interface";
import { ErrorResponse } from "../interfaces/common.interface";
import VaultProviderV3Base from "../VaultProviderBase";
import { IBankAccountCreateRequest, IBankAccountIdRequest, IBankAccountInfoRequest, IBankAccountResponse } from "./interfaces/bank.account.interface";
export declare class BankAccount extends VaultProviderV3Base {
    constructor(options: VaultV3SDKOptions);
    create(body: IBankAccountCreateRequest): Promise<IBankAccountResponse[] | ErrorResponse>;
    list(body: IBankAccountInfoRequest): Promise<IBankAccountResponse[] | ErrorResponse>;
    infoById(body: IBankAccountIdRequest): Promise<IBankAccountResponse | ErrorResponse>;
    remove(body: IBankAccountIdRequest): Promise<any | ErrorResponse>;
}
export default BankAccount;
