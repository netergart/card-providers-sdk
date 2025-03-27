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
exports.Card = void 0;
const VaultProviderBase_1 = __importDefault(require("../VaultProviderBase"));
class Card extends VaultProviderBase_1.default {
    constructor(options) {
        super(options);
    }
    prices() {
        return __awaiter(this, void 0, void 0, function* () {
            const path = "/card-holder/cardoffer";
            const headers = Object.assign(Object.assign({}, this.headers), { authorization: `Bearer ${this.getToken()}` });
            return yield this.request(path, { method: "GET", headers });
        });
    }
    requestList() {
        return __awaiter(this, void 0, void 0, function* () {
            const path = "/card-holder/cardrequest";
            const headers = Object.assign(Object.assign({}, this.headers), { authorization: `Bearer ${this.getToken()}` });
            return yield this.request(path, { method: "GET", headers });
        });
    }
    createRequest(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = "/card-holder/cardrequest";
            const headers = Object.assign(Object.assign({}, this.headers), { authorization: `Bearer ${this.getToken()}` });
            return yield this.request(path, { method: "POST", headers, data: body });
        });
    }
    txHistory(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = "/card-holder/transaction";
            const headers = Object.assign(Object.assign({}, this.headers), { authorization: `Bearer ${this.getToken()}` });
            return yield this.request(path, { method: "GET", headers, params: body });
        });
    }
    list() {
        return __awaiter(this, void 0, void 0, function* () {
            const path = "/card-holder/cardholder/card";
            const headers = Object.assign(Object.assign({}, this.headers), { authorization: `Bearer ${this.getToken()}` });
            return yield this.request(path, { method: "GET", headers });
        });
    }
    changePin(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const { cardId } = body, otherData = __rest(body, ["cardId"]);
            const path = `/card-holder/cardholder/card/${cardId}/pin/reset`;
            const headers = Object.assign(Object.assign({}, this.headers), { authorization: `Bearer ${this.getToken()}` });
            return yield this.request(path, {
                method: "POST",
                headers,
                data: otherData,
            });
        });
    }
    limit(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = `/card-holder/cardholder/card/${body.cardId}/limits`;
            const headers = Object.assign(Object.assign({}, this.headers), { authorization: `Bearer ${this.getToken()}` });
            return yield this.request(path, { method: "GET", headers });
        });
    }
    updateLimits(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const { cardId } = body, otherData = __rest(body, ["cardId"]);
            const path = `/card-holder/cardholder/card/${cardId}/limits`;
            const headers = Object.assign(Object.assign({}, this.headers), { authorization: `Bearer ${this.getToken()}` });
            return yield this.request(path, {
                method: "POST",
                headers,
                data: otherData,
            });
        });
    }
    changeType(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const { cardId } = body, otherData = __rest(body, ["cardId"]);
            const path = `/card-holder/cardholder/card/${cardId}/change-type`;
            const headers = Object.assign(Object.assign({}, this.headers), { authorization: `Bearer ${this.getToken()}` });
            return yield this.request(path, {
                method: "POST",
                headers,
                data: otherData,
            });
        });
    }
    changeStatus(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const { cardId } = body, otherData = __rest(body, ["cardId"]);
            const path = `/card-holder/cardholder/card/${cardId}/change-type`;
            const headers = Object.assign(Object.assign({}, this.headers), { authorization: `Bearer ${this.getToken()}` });
            return yield this.request(path, {
                method: "POST",
                headers,
                data: otherData,
            });
        });
    }
    activatePhysicalCard(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const { cardId } = body, otherData = __rest(body, ["cardId"]);
            const path = `/card-holder/cardholder/card/${cardId}/activate`;
            const headers = Object.assign(Object.assign({}, this.headers), { authorization: `Bearer ${this.getToken()}` });
            return yield this.request(path, {
                method: "POST",
                headers,
                data: otherData,
            });
        });
    }
    info(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = `/card-holder/cardholder/card/${body.cardId}`;
            const headers = Object.assign(Object.assign({}, this.headers), { authorization: `Bearer ${this.getToken()}` });
            return yield this.request(path, { method: "GET", headers });
        });
    }
    topUpInfo(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = `/card-holder/cardholder/card/${body.cardId}/top-up-information`;
            const headers = Object.assign(Object.assign({}, this.headers), { authorization: `Bearer ${this.getToken()}` });
            return yield this.request(path, { method: "GET", headers });
        });
    }
    sensitiveDetails(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = `/card-holder/cardholder/card/${body.cardId}/sensitive-details`;
            const headers = Object.assign(Object.assign({}, this.headers), { authorization: `Bearer ${this.getToken()}` });
            return yield this.request(path, { method: "GET", headers });
        });
    }
    pin(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = `/card-holder/cardholder/card/${body.cardId}/pin`;
            const headers = Object.assign(Object.assign({}, this.headers), { authorization: `Bearer ${this.getToken()}` });
            return yield this.request(path, { method: "GET", headers });
        });
    }
    details(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = `/card-holder/cardholder/card/${body.cardId}/details`;
            const headers = Object.assign(Object.assign({}, this.headers), { authorization: `Bearer ${this.getToken()}` });
            return yield this.request(path, { method: "GET", headers });
        });
    }
    balance(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = `/cardholder/card/${body.cardId}/balance`;
            const headers = Object.assign(Object.assign({}, this.headers), { authorization: `Bearer ${this.getToken()}` });
            return yield this.request(path, { method: "GET", headers });
        });
    }
}
exports.Card = Card;
exports.default = Card;
