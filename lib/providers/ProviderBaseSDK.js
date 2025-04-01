"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProviderBaseSDK = void 0;
const axios_1 = __importDefault(require("axios"));
const dayjs_1 = __importDefault(require("dayjs"));
const utc_1 = __importDefault(require("dayjs/plugin/utc"));
dayjs_1.default.extend(utc_1.default);
class ProviderBaseSDK {
    constructor(options) {
        this.options = {};
        this._request = (options) => {
            return axios_1.default
                .request(options)
                .then(({ data }) => data)
                .catch((err) => Promise.reject(this.getErrorMessage(err)));
        };
        this.request = (path, options) => {
            if (!this.options.url) {
                return Promise.reject("Rest url is required.");
            }
            options.url = `${this.options.url}${path}`;
            return this._request(options);
        };
        if (!options) {
            return;
        }
        this.setOptions(options);
    }
    setOptions(options = {}) {
        const { url } = options;
        Object.assign(this.options, {
            url,
        });
    }
    getErrorMessage(err) {
        var _a;
        if (!err)
            return "Unknown error occurred";
        // Check nested response structure
        if ((_a = err.response) === null || _a === void 0 ? void 0 : _a.data) {
            const data = err.response.data;
            let message = data.message || "Unknown error occurred";
            if (Array.isArray(data.errors) && data.errors.length > 0) {
                const errorDetails = data.errors
                    .map((e) => `${e.key}: ${e.description}`)
                    .join("; ");
                message += ` - ${errorDetails}`;
            }
            return message;
        }
        // Directly check for message
        if (err.message) {
            return err.message;
        }
        return "Unknown error occurred";
    }
}
exports.ProviderBaseSDK = ProviderBaseSDK;
