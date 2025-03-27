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
            const path = "/card-holder/v1/card-offers";
            return yield this.request(path, {
                method: "GET",
                headers: this.createHeaders(),
            });
        });
    }
    requestList() {
        return __awaiter(this, void 0, void 0, function* () {
            const path = "/card-holder/v1/card-requests";
            return yield this.request(path, {
                method: "GET",
                headers: this.createHeaders(),
            });
        });
    }
    createRequest(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = "/card-holder/v1/card-requests";
            return yield this.request(path, {
                method: "POST",
                headers: this.createHeaders(),
                data: body,
            });
        });
    }
    txHistory(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = "/card-holder/transaction";
            return yield this.request(path, {
                method: "GET",
                headers: this.createHeaders(),
                params: body,
            });
        });
    }
    list() {
        return __awaiter(this, void 0, void 0, function* () {
            const path = "/card-holder/cardholder/card";
            return yield this.request(path, {
                method: "GET",
                headers: this.createHeaders(),
            });
        });
    }
    changePin(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const { cardId } = body, otherData = __rest(body, ["cardId"]);
            const path = `/card-holder/cardholder/card/${cardId}/pin/reset`;
            return yield this.request(path, {
                method: "POST",
                headers: this.createHeaders(),
                data: otherData,
            });
        });
    }
    changeStatus(body) {
        return __awaiter(this, void 0, void 0, function* () {
            // TODO: we don't have response type in the docs
            const { cardId, requiredStatus } = body, data = __rest(body, ["cardId", "requiredStatus"]);
            const path = `/card-holder/cardholder/card/${cardId}/change-status`;
            return yield this.request(path, {
                method: "POST",
                headers: this.createHeaders(),
                data,
                params: { requiredStatus },
            });
        });
    }
    info(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = `/card-holder/cardholder/card/${body.cardId}`;
            return yield this.request(path, {
                method: "GET",
                headers: this.createHeaders(),
            });
        });
    }
    topUpInfo(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = `/card-holder/cardholder/card/${body.cardId}/top-up-information`;
            return yield this.request(path, {
                method: "GET",
                headers: this.createHeaders(),
            });
        });
    }
    sensitiveDetails(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = `/card-holder/cardholder/card/${body.cardId}/sensitive-details`;
            return yield this.request(path, {
                method: "GET",
                headers: this.createHeaders(),
            });
        });
    }
    pin(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = `/card-holder/cardholder/card/${body.cardId}/pin`;
            return yield this.request(path, {
                method: "GET",
                headers: this.createHeaders(),
            });
        });
    }
    details(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = `/card-holder/cardholder/card/${body.cardId}/details`;
            return yield this.request(path, {
                method: "GET",
                headers: this.createHeaders(),
            });
        });
    }
    balance(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = `/cardholder/card/${body.cardId}/balance`;
            return yield this.request(path, {
                method: "GET",
                headers: this.createHeaders(),
            });
        });
    }
    setBillingAddress(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const { cardRequestId } = body, data = __rest(body, ["cardRequestId"]);
            const path = `/card-holder/v1/card-requests/${body.cardRequestId}/billing`;
            return yield this.request(path, {
                method: "POST",
                headers: this.createHeaders(),
                data,
            });
        });
    }
    cancelCardRequest(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = `/card-holder/v1/card-requests/${body.cardId}/cancel`;
            return yield this.request(path, {
                method: "DELETE",
                headers: this.createHeaders(),
            });
        });
    }
    setCardholderName(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = `card-holder/v1/card-requests/${body.cardRequestId}/cardholder-name`;
            return yield this.request(path, {
                method: "POST",
                headers: this.createHeaders(),
                data: body,
            });
        });
    }
}
exports.Card = Card;
exports.default = Card;
