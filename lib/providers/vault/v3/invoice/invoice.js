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
exports.Invoice = void 0;
const VaultProviderBase_1 = __importDefault(require("../VaultProviderBase"));
class Invoice extends VaultProviderBase_1.default {
    constructor(options) {
        super(options);
    }
    create(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = "/acquiring/invoice/payment";
            return yield this.request(path, {
                method: "POST",
                headers: this.createHeaders(),
                data: body,
            });
        });
    }
    confirm(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = "/acquiring/invoice/payment/pay";
            return yield this.request(path, {
                method: "POST",
                headers: this.createHeaders(),
                data: body,
            });
        });
    }
    update(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = "/acquiring/invoice/payment";
            return yield this.request(path, {
                method: "PUT",
                headers: this.createHeaders(),
                data: body,
            });
        });
    }
    info(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = `/acquiring/invoice/${body.invoiceId}`;
            return yield this.request(path, {
                method: "GET",
                headers: this.createHeaders(),
            });
        });
    }
    list(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = `/acquiring/invoice`;
            return yield this.request(path, {
                method: "GET",
                headers: this.createHeaders(),
                params: body,
            });
        });
    }
    discount(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = "/acquiring/invoice/payment/discount";
            return yield this.request(path, {
                method: "PUT",
                headers: this.createHeaders(),
                data: body,
            });
        });
    }
}
exports.Invoice = Invoice;
