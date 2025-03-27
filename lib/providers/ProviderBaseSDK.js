"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProviderBaseSDK = void 0;
const dayjs_1 = __importDefault(require("dayjs"));
const utc_1 = __importDefault(require("dayjs/plugin/utc"));
const axios_1 = __importDefault(require("axios"));
dayjs_1.default.extend(utc_1.default);
class ProviderBaseSDK {
    constructor(options) {
        this.options = {};
        this._request = (options) => {
            return axios_1.default
                .request(options)
                .then(({ data }) => data)
                .catch((err) => { var _a, _b; return Promise.reject(((_b = (_a = err === null || err === void 0 ? void 0 : err.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.message) || (err === null || err === void 0 ? void 0 : err.message)); });
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
}
exports.ProviderBaseSDK = ProviderBaseSDK;
