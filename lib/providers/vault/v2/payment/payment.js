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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Payment = void 0;
const VaultProviderBase_1 = __importDefault(require("../VaultProviderBase"));
class Payment extends VaultProviderBase_1.default {
    constructor(options) {
        super(options);
    }
    payIn(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const { dryRun = false } = body, othderData = __rest(body, ["dryRun"]);
            const path = `/wallet/payin`;
            const headers = Object.assign(Object.assign({}, this.headers), { authorization: `Bearer ${this.getToken()}` });
            return yield this.request(path, {
                method: "POST",
                headers,
                data: othderData,
                params: { dryRun },
            });
        });
    }
    payInInfo(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = `/wallet/payin/${body.payIn}`;
            const headers = Object.assign(Object.assign({}, this.headers), { authorization: `Bearer ${this.getToken()}` });
            return yield this.request(path, {
                method: "GET",
                headers,
            });
        });
    }
    payInList(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = `/wallet/payin`;
            const headers = Object.assign(Object.assign({}, this.headers), { authorization: `Bearer ${this.getToken()}` });
            return yield this.request(path, {
                method: "GET",
                headers,
                params: body,
            });
        });
    }
    exchange(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const { dryRun = false } = body, othderData = __rest(body, ["dryRun"]);
            const path = `/wallet/direct-exchange`;
            const headers = Object.assign(Object.assign({}, this.headers), { authorization: `Bearer ${this.getToken()}` });
            return yield this.request(path, {
                method: "POST",
                headers,
                data: othderData,
                params: { dryRun },
            });
        });
    }
    exchangeInfo(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = `/wallet/direct-exchange/${body.exchangeId}`;
            const headers = Object.assign(Object.assign({}, this.headers), { authorization: `Bearer ${this.getToken()}` });
            return yield this.request(path, {
                method: "GET",
                headers,
            });
        });
    }
    exchangeList(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = `/wallet/direct-exchange`;
            const headers = Object.assign(Object.assign({}, this.headers), { authorization: `Bearer ${this.getToken()}` });
            return yield this.request(path, {
                method: "GET",
                headers,
                params: body,
            });
        });
    }
    withdraw(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const { dryRun = false, autoConversion = false } = body, othderData = __rest(body, ["dryRun", "autoConversion"]);
            const path = `/wallet/withdraw`;
            const headers = Object.assign(Object.assign({}, this.headers), { authorization: `Bearer ${this.getToken()}` });
            return yield this.request(path, {
                method: "POST",
                headers,
                data: othderData,
                params: { dryRun, autoConversion },
            });
        });
    }
    withdrawInfo(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = `/wallet/withdraw/${body.withdrawId}`;
            const headers = Object.assign(Object.assign({}, this.headers), { authorization: `Bearer ${this.getToken()}` });
            return yield this.request(path, {
                method: "GET",
                headers,
            });
        });
    }
    withdrawList(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = `/wallet/withdraw`;
            const headers = Object.assign(Object.assign({}, this.headers), { authorization: `Bearer ${this.getToken()}` });
            return yield this.request(path, {
                method: "GET",
                headers,
                params: body,
            });
        });
    }
}
exports.Payment = Payment;
exports.default = Payment;
