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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Subscription = void 0;
const VaultProviderBase_1 = require("../VaultProviderBase");
class Subscription extends VaultProviderBase_1.VaultProviderV3Base {
    constructor(options) {
        super(options);
    }
    getSubscriptions() {
        return __awaiter(this, void 0, void 0, function* () {
            const path = "/reg/subscription";
            return yield this.request(path, {
                method: "GET",
                headers: this.createHeaders(),
            });
        });
    }
    createSubscription(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = "/reg/subscription";
            return yield this.request(path, {
                method: "POST",
                headers: this.createHeaders(),
                data: body,
            });
        });
    }
    getAvailableSubscriptionDetails() {
        return __awaiter(this, void 0, void 0, function* () {
            const path = "/reg/subscription/details/available";
            return yield this.request(path, {
                method: "GET",
                headers: this.createHeaders(),
            });
        });
    }
}
exports.Subscription = Subscription;
