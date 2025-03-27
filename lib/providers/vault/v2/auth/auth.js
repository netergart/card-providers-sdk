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
exports.Auth = void 0;
const VaultProviderBase_1 = __importDefault(require("../VaultProviderBase"));
class Auth extends VaultProviderBase_1.default {
    constructor(options) {
        super(options);
    }
    signUp(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = "/reg/user";
            const headers = Object.assign(Object.assign({}, this.headers), { partnerId: this.partnerId });
            return yield this.request(path, { method: "POST", headers, data: body });
        });
    }
    signIn(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = "/reg/auth/token";
            const headers = Object.assign(Object.assign({}, this.headers), { appClientId: this.partnerId });
            return yield this.request(path, { method: "POST", headers, data: body });
        });
    }
}
exports.Auth = Auth;
exports.default = Auth;
