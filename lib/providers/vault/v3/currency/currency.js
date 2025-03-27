"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Currency = void 0;
const VaultProviderBase_1 = __importDefault(require("../VaultProviderBase"));
class Currency extends VaultProviderBase_1.default {
    constructor(options) {
        super(options);
    }
    info(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = "/currency/token";
            return yield this.request(path, {
                method: "GET",
                headers: this.createHeaders(),
                params: body,
            });
        });
    }
    summaryToken() {
        return __awaiter(this, void 0, void 0, function* () {
            const path = "/currency/token/short";
            return yield this.request(path, {
                method: "GET",
                headers: this.createHeaders(),
            });
        });
    }
    preferredCurrencies(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = `/currency/preferred/${body.accountId}`;
            return yield this.request(path, {
                method: "GET",
                headers: this.createHeaders(),
            });
        });
    }
    setPreferredCurrencies(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = `/currency/preferred/${body.accountId}`;
            return yield this.request(path, {
                method: "POST",
                headers: this.createHeaders(),
                data: body,
            });
        });
    }
    getBlockchainList() {
        return __awaiter(this, void 0, void 0, function* () {
            const path = "/currency/blockchain";
            return yield this.request(path, {
                method: "GET",
                headers: this.createHeaders(),
            });
        });
    }
    getExchangeRate(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = "/currency/exchange-rate";
            return yield this.request(path, {
                method: "GET",
                headers: this.createHeaders(),
                params: body,
            });
        });
    }
    getAllCurrencies() {
        return __awaiter(this, void 0, void 0, function* () {
            const path = "/currency";
            return yield this.request(path, {
                method: "GET",
                headers: this.createHeaders(),
            });
        });
    }
    getCurrencyByName(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = `/currency/${body.name}`;
            return yield this.request(path, {
                method: "GET",
                headers: this.createHeaders(),
            });
        });
    }
}
exports.Currency = Currency;
exports.default = Currency;
