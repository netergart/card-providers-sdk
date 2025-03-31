"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VaultProviderV3 = void 0;
const auth_1 = __importDefault(require("./auth/auth"));
const bank_account_1 = __importDefault(require("./bank.account/bank.account"));
const card_1 = __importDefault(require("./card/card"));
const currency_1 = require("./currency/currency");
const invoice_1 = require("./invoice/invoice");
const kyc_1 = __importDefault(require("./kyc/kyc"));
const payment_1 = require("./payment/payment");
const profile_1 = require("./profile/profile");
const session_1 = require("./sessions/session");
const subscription_1 = require("./subscription/subscription");
const wallet_1 = require("./wallet/wallet");
class VaultProviderV3 {
    constructor(options) {
        this.auth = new auth_1.default(options);
        this.session = new session_1.Session(options);
        this.kyc = new kyc_1.default(options);
        this.profile = new profile_1.Profile(options);
        this.wallet = new wallet_1.Wallet(options);
        this.card = new card_1.default(options);
        this.payment = new payment_1.Payment(options);
        this.bankAccount = new bank_account_1.default(options);
        this.invoice = new invoice_1.Invoice(options);
        this.currency = new currency_1.Currency(options);
        this.subscription = new subscription_1.Subscription(options);
    }
}
exports.VaultProviderV3 = VaultProviderV3;
exports.default = VaultProviderV3;
