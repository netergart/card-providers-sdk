import { VaultV2SDKOptions } from "../../interfaces/vault.v2.interface";
import VaultProviderV2Base from "../VaultProviderBase";
import { IBankAccountCreateRequest, IBankAccountIdRequest, IBankAccountInfoRequest, IBankAccountResponse } from "./interfaces/bank.account.interface";
export declare class BankAccount extends VaultProviderV2Base {
    constructor(options: VaultV2SDKOptions);
    create(body: IBankAccountCreateRequest): Promise<IBankAccountResponse[]>;
    list(body: IBankAccountInfoRequest): Promise<IBankAccountResponse[]>;
    infoById(body: IBankAccountIdRequest): Promise<IBankAccountResponse>;
    remove(body: IBankAccountIdRequest): Promise<any>;
}
export default BankAccount;
