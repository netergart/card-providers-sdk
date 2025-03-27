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
exports.Profile = void 0;
const VaultProviderBase_1 = __importDefault(require("../VaultProviderBase"));
class Profile extends VaultProviderBase_1.default {
    constructor(options) {
        super(options);
    }
    info() {
        return __awaiter(this, void 0, void 0, function* () {
            const path = "/reg/user/info";
            const headers = Object.assign(Object.assign({}, this.headers), { authorization: `Bearer ${this.getToken()}` });
            return yield this.request(path, { method: "GET", headers });
        });
    }
    updateInfo(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = "/reg/user/info";
            const headers = Object.assign(Object.assign({}, this.headers), { authorization: `Bearer ${this.getToken()}` });
            return yield this.request(path, { method: "PATCH", headers, data: body });
        });
    }
    addAddress(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = "/reg/user/address";
            const headers = Object.assign(Object.assign({}, this.headers), { authorization: `Bearer ${this.getToken()}` });
            return yield this.request(path, { method: "POST", headers, data: body });
        });
    }
    updateAddress(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const { addressId } = body, otherData = __rest(body, ["addressId"]);
            const path = `/reg/user/address/${addressId}`;
            const headers = Object.assign(Object.assign({}, this.headers), { authorization: `Bearer ${this.getToken()}` });
            return yield this.request(path, {
                method: "PUT",
                headers,
                data: otherData,
            });
        });
    }
    setAddressAsPrimary(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = `/reg/user/address/${body.addressId}/residential`;
            const headers = Object.assign(Object.assign({}, this.headers), { authorization: `Bearer ${this.getToken()}` });
            return yield this.request(path, { method: "POST", headers, data: body });
        });
    }
    limit() {
        return __awaiter(this, void 0, void 0, function* () {
            const path = "/reg/user/limits";
            const headers = Object.assign(Object.assign({}, this.headers), { authorization: `Bearer ${this.getToken()}` });
            return yield this.request(path, { method: "GET", headers });
        });
    }
}
exports.Profile = Profile;
exports.default = Profile;
