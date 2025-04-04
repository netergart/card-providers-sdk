import { VaultV3SDKOptions } from "../interfaces/vault.v3.interface";
import Auth from "./auth/auth";
import BankAccount from "./bank.account/bank.account";
import Card from "./card/card";
import { Currency } from "./currency/currency";
import { Invoice } from "./invoice/invoice";
import Kyc from "./kyc/kyc";
import { Payment } from "./payment/payment";
import { Profile } from "./profile/profile";
import { Session } from "./sessions/session";
import { Subscription } from "./subscription/subscription";
import { Wallet } from "./wallet/wallet";
export declare class VaultProviderV3 {
    constructor(options: VaultV3SDKOptions);
    auth: Auth;
    session: Session;
    kyc: Kyc;
    profile: Profile;
    wallet: Wallet;
    card: Card;
    payment: Payment;
    bankAccount: BankAccount;
    invoice: Invoice;
    currency: Currency;
    subscription: Subscription;
}
export default VaultProviderV3;
