import { VaultV3SDKOptions } from "../interfaces/vault.v3.interface";
import Auth from "./auth/auth";
import BankAccount from "./bank.account/bank.account";
import Card from "./card/card";
import { Invoice } from "./invoice/invoice";
import Kyc from "./kyc/kyc";
import { Payment } from "./payment/payment";
import { Profile } from "./profile/profile";
import { Session } from "./sessions/session";
import { Wallet } from "./wallet/wallet";

export class VaultProviderV3 {
  constructor(options: VaultV3SDKOptions) {
    this.auth = new Auth(options);
    this.session = new Session(options);
    this.kyc = new Kyc(options);
    this.profile = new Profile(options);
    this.wallet = new Wallet(options);
    this.card = new Card(options);
    this.payment = new Payment(options);
    this.bankAccount = new BankAccount(options);
    this.invoice = new Invoice(options);
  }

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

export default VaultProviderV3;
