import { VaultV3SDKOptions } from "../../interfaces/vault.v3.interface";
import VaultProviderV3Base from "../VaultProviderBase";
import { IBankAccountCreateRequest, IBankAccountIdRequest, IBankAccountInfoRequest, IBankAccountResponse } from "./interfaces/bank.account.interface";
export declare class BankAccount extends VaultProviderV3Base {
    constructor(options: VaultV3SDKOptions);
    create(body: IBankAccountCreateRequest): Promise<IBankAccountResponse[]>;
    list(body: IBankAccountInfoRequest): Promise<IBankAccountResponse[]>;
    infoById(body: IBankAccountIdRequest): Promise<IBankAccountResponse>;
    remove(body: IBankAccountIdRequest): Promise<any>;
}
export default BankAccount;
