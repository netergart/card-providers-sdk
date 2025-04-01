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
                .catch((err) => {
                // console.error("Error in request:", err);
                return Promise.reject(this.getErrorMessage(err));
            });
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
        if (!err)
            return "Unknown error occurred";
        // Check if error is directly the response object
        if (err.response) {
            err = err.response;
        }
        // Check nested response structure
        if (err.data) {
            err = err.data;
        }
        let message = err.message || "Unknown error occurred";
        if (Array.isArray(err.errors) && err.errors.length > 0) {
            const errorDetails = err.errors
                .map((e) => `${e.key}: ${e.description}`)
                .join("; ");
            message += ` - ${errorDetails}`;
        }
        return message;
    }
}
exports.ProviderBaseSDK = ProviderBaseSDK;
