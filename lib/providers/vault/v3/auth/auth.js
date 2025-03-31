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
exports.Auth = void 0;
const VaultProviderBase_1 = __importDefault(require("../VaultProviderBase"));
class Auth extends VaultProviderBase_1.default {
    constructor(options) {
        super(options);
    }
    signUp(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = "/reg/v1/signup";
            const headers = this.createHeaders({ partnerId: this.partnerId }, false);
            return yield this.request(path, { method: "POST", headers, data: body });
        });
    }
    signUpConfirm(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = "/reg/v1/signup/confirm";
            const headers = this.createHeaders({ partnerId: this.partnerId }, false);
            const { termsAndConditionsConfirmed = true, termsAndConditionsVersion = 1 } = body, data = __rest(body, ["termsAndConditionsConfirmed", "termsAndConditionsVersion"]);
            return yield this.request(path, {
                method: "POST",
                headers,
                data: Object.assign({ termsAndConditionsConfirmed, termsAndConditionsVersion }, data),
            });
        });
    }
    signIn(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = "/reg/v1/auth/token";
            const headers = this.createHeaders({
                partnerId: this.partnerId,
                grantType: body.grantType,
            }, false);
            return yield this.request(path, { method: "POST", headers, data: body });
        });
    }
    retrieveCountryList(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = "/reg/v1/catalog/countries";
            const { countryFilter = "FULL" } = body;
            return yield this.request(path, {
                method: "GET",
                headers: this.createHeaders(),
                params: { countryFilter },
            });
        });
    }
}
exports.Auth = Auth;
exports.default = Auth;
