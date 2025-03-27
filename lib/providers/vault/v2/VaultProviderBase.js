"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VaultProviderV2Base = void 0;
const ProviderBaseSDK_1 = require("../../ProviderBaseSDK");
class VaultProviderV2Base extends ProviderBaseSDK_1.ProviderBaseSDK {
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
}
exports.VaultProviderV2Base = VaultProviderV2Base;
exports.default = VaultProviderV2Base;
