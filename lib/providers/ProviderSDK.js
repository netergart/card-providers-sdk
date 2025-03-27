"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProviderSDK = void 0;
const VaultProvider_1 = __importDefault(require("./vault/v1/VaultProvider"));
const VaultProvider_2 = __importDefault(require("./vault/v2/VaultProvider"));
const VaultProvider_3 = __importDefault(require("./vault/v3/VaultProvider"));
class ProviderSDK {
    vault(options) {
        switch (options.version) {
            case 1:
                return new VaultProvider_1.default(options);
            case 2:
                return new VaultProvider_2.default(options);
            case 3:
                return new VaultProvider_3.default(options);
        }
    }
}
exports.ProviderSDK = ProviderSDK;
exports.default = ProviderSDK;
