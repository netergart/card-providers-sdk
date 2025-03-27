import { VaultV2SDKOptions } from "../interfaces/vault.v2.interface";
import Auth from "./auth/auth";
import BankAccount from "./bank.account/bank.account";
import Card from "./card/card";
import { Invoice } from "./invoice/invoice";
import Kyc from "./kyc/kyc";
import { Payment } from "./payment/payment";
import { Profile } from "./profile/profile";
import { Session } from "./sessions/session";
import { Wallet } from "./wallet/wallet";
export declare class VaultProviderV2 {
    constructor(options: VaultV2SDKOptions);
    auth: Auth;
    session: Session;
    kyc: Kyc;
    profile: Profile;
    wallet: Wallet;
    card: Card;
    payment: Payment;
    bankAccount: BankAccount;
    invoice: Invoice;
}
export default VaultProviderV2;
