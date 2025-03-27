"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VaultProviderV3Base = void 0;
const ProviderBaseSDK_1 = require("../../ProviderBaseSDK");
class VaultProviderV3Base extends ProviderBaseSDK_1.ProviderBaseSDK {
    constructor(options) {
        super(options);
        this.headers = {
            accept: "application/json",
            "content-type": "application/json",
        };
        this.partnerId = options.partnerId;
        this.partnerClientId = options.partnerClientId;
    }
    setToken(accessToken) {
        this.accessToken = accessToken;
        return this;
    }
    getToken() {
        if (!this.accessToken) {
            throw new Error(`Set the access token`);
        }
        return this.accessToken;
    }
    createHeaders(additionalHeaders = {}, isTokenNeeded = true) {
        return Object.assign(Object.assign(Object.assign({}, this.headers), additionalHeaders), (isTokenNeeded ? { authorization: `Bearer ${this.getToken()}` } : {}));
    }
}
exports.VaultProviderV3Base = VaultProviderV3Base;
exports.default = VaultProviderV3Base;
