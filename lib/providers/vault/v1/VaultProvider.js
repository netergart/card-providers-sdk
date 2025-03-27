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
Object.defineProperty(exports, "__esModule", { value: true });
exports.VaultProvider = void 0;
const ProviderBaseSDK_1 = require("../../ProviderBaseSDK");
class VaultProvider extends ProviderBaseSDK_1.ProviderBaseSDK {
    constructor(options) {
        super(options);
        this.headers = {
            "X-Version": "1.2",
            accept: "application/json",
            "content-type": "application/json",
        };
        this.xMerchantId = options.xMerchantId;
    }
    signUp(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = "/v2/mobile/signup";
            const headers = Object.assign(Object.assign({}, this.headers), { "X-Merchant-ID": this.xMerchantId });
            return yield this.request(path, { method: "POST", headers, data: body });
        });
    }
    phoneConfirm(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = "/v2/mobile/phone/confirm";
            const headers = Object.assign(Object.assign({}, this.headers), { "X-Merchant-ID": this.xMerchantId });
            return yield this.request(path, { method: "POST", data: body, headers });
        });
    }
    resendPhoneConfirm(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = "/v2/mobile/phone/verify/resend";
            const headers = Object.assign(Object.assign({}, this.headers), { "X-Merchant-ID": this.xMerchantId });
            return yield this.request(path, { method: "POST", data: body, headers });
        });
    }
    addEmail(body, accessToken) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = "/v2/mobile/email/add";
            const headers = Object.assign(Object.assign({}, this.headers), { authorization: `Bearer ${accessToken}` });
            return yield this.request(path, { method: "PUT", data: body, headers });
        });
    }
    confirmEmail(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = "/v2/mobile/email/confirm";
            return yield this.request(path, {
                method: "GET",
                headers: this.headers,
                params: body,
            });
        });
    }
    resendEmailConfirm(accessToken) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = "/v2/mobile/email/verify/resend";
            const headers = Object.assign(Object.assign({}, this.headers), { authorization: `Bearer ${accessToken}` });
            return yield this.request(path, {
                method: "POST",
                headers,
            });
        });
    }
    login(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = "/oauth/token";
            const headers = Object.assign(Object.assign({}, this.headers), { "X-Merchant-ID": this.xMerchantId, "content-type": "application/x-www-form-urlencoded" });
            body.grant_type = "mobile_phone";
            return yield this.request(path, { method: "POST", data: body, headers });
        });
    }
    updateCustomerProfile(body, accessToken) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = "/v2/customer/profile";
            const headers = Object.assign(Object.assign({}, this.headers), { authorization: `Bearer ${accessToken}` });
            return yield this.request(path, { method: "PATCH", data: body, headers });
        });
    }
    customerProfileInfo(accessToken) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = "/v2/customer/profile";
            const headers = Object.assign(Object.assign({}, this.headers), { authorization: `Bearer ${accessToken}` });
            return yield this.request(path, { method: "GET", headers });
        });
    }
    createWallets(body, accessToken) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = "/v2/wallets";
            const headers = Object.assign(Object.assign({}, this.headers), { authorization: `Bearer ${accessToken}` });
            return yield this.request(path, { method: "POST", data: body, headers });
        });
    }
    getWallets(accessToken) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = "/v2/wallets";
            const headers = Object.assign(Object.assign({}, this.headers), { authorization: `Bearer ${accessToken}` });
            return yield this.request(path, { method: "GET", headers });
        });
    }
    kycStatus(accessToken) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = "/v2/customer/kyc/data";
            const headers = Object.assign(Object.assign({}, this.headers), { authorization: `Bearer ${accessToken}` });
            return yield this.request(path, { method: "GET", headers });
        });
    }
    limits(accessToken) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = "/v1/kyc/limits";
            const headers = Object.assign(Object.assign({}, this.headers), { authorization: `Bearer ${accessToken}` });
            return yield this.request(path, { method: "GET", headers });
        });
    }
    kyc1Start(accessToken) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = "/v4/kyc/start";
            const headers = Object.assign(Object.assign({}, this.headers), { authorization: `Bearer ${accessToken}` });
            return yield this.request(path, {
                method: "POST",
                headers,
            });
        });
    }
    kyc1Finish(body, accessToken) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = "/v4/kyc/ondato/finished";
            const headers = Object.assign(Object.assign({}, this.headers), { authorization: `Bearer ${accessToken}` });
            return yield this.request(path, { method: "POST", data: body, headers });
        });
    }
    kycSumSubStart(accessToken) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = "/v5/kyc/start";
            const headers = Object.assign(Object.assign({}, this.headers), { authorization: `Bearer ${accessToken}` });
            return yield this.request(path, { method: "POST", headers });
        });
    }
    cardPrices(accessToken) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = "/v2/card/prices";
            const headers = Object.assign(Object.assign({}, this.headers), { authorization: `Bearer ${accessToken}` });
            return yield this.request(path, {
                method: "GET",
                headers,
            });
        });
    }
    cardDeliveryCountries(accessToken) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = "/v2/card/card-requests/country/plastic-delivery";
            const headers = Object.assign(Object.assign({}, this.headers), { authorization: `Bearer ${accessToken}` });
            return yield this.request(path, {
                method: "GET",
                headers,
                params: { cp: "CP_2" },
            });
        });
    }
    cardList(accessToken) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = "/v2/card/list";
            const headers = Object.assign(Object.assign({}, this.headers), { authorization: `Bearer ${accessToken}` });
            return yield this.request(path, { method: "GET", headers });
        });
    }
    cardPoyoutsList(accessToken) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = "/v4/payout/data";
            const headers = Object.assign(Object.assign({}, this.headers), { authorization: `Bearer ${accessToken}` });
            return yield this.request(path, { method: "GET", headers });
        });
    }
    getPayloadCurrencies(accessToken) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = "/v2/card/payload/currencies";
            const headers = Object.assign(Object.assign({}, this.headers), { authorization: `Bearer ${accessToken}` });
            return yield this.request(path, {
                method: "GET",
                headers,
                params: { cp: "CP_2" },
            });
        });
    }
    getPayloadLimits(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = `/v2/card/${data.cardId}/payload/data`;
            const headers = Object.assign(Object.assign({}, this.headers), { authorization: `Bearer ${data.accessToken}` });
            return yield this.request(path, {
                method: "GET",
                headers,
                params: { cp: "CP_2" },
            });
        });
    }
    addCardPayout(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = "/v4/payout/data";
            const headers = Object.assign(Object.assign({}, this.headers), { authorization: `Bearer ${data.accessToken}` });
            return yield this.request(path, {
                method: "POST",
                data: data.body,
                headers,
            });
        });
    }
    updatePersonalInfo(body, accessToken) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = "/v3/card/additional-personal-info";
            const headers = Object.assign(Object.assign({}, this.headers), { authorization: `Bearer ${accessToken}` });
            return yield this.request(path, {
                method: "POST",
                data: body,
                headers,
                params: { cp: "CP_2" },
            });
        });
    }
    personalInfo(accessToken) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = "/v3/card/additional-personal-info";
            const headers = Object.assign(Object.assign({}, this.headers), { authorization: `Bearer ${accessToken}` });
            return yield this.request(path, {
                method: "GET",
                headers,
                params: { cp: "CP_2" },
            });
        });
    }
    cardRequest(body, accessToken) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = "/v2/card/card-requests";
            const headers = Object.assign(Object.assign({}, this.headers), { authorization: `Bearer ${accessToken}` });
            return yield this.request(path, {
                method: "POST",
                data: body,
                headers,
                params: { cp: "CP_2" },
            });
        });
    }
    cancelCardRequest(requestId, accessToken) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = `/v2/card/card-requests/${requestId}/cancel`;
            const headers = Object.assign(Object.assign({}, this.headers), { authorization: `Bearer ${accessToken}` });
            return yield this.request(path, {
                method: "POST",
                headers,
                params: { cp: "CP_2" },
            });
        });
    }
    updateAddressRequestCard(requestId, body, accessToken) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = `/v2/card/card-requests/${requestId}/address`;
            const headers = Object.assign(Object.assign({}, this.headers), { authorization: `Bearer ${accessToken}` });
            return yield this.request(path, {
                method: "PUT",
                data: body,
                headers,
                params: { cp: "CP_2" },
            });
        });
    }
    updateAddressRequestCardV3(requestId, body, accessToken) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = `/v3/card/card-requests/${requestId}/address`;
            const headers = Object.assign(Object.assign({}, this.headers), { authorization: `Bearer ${accessToken}` });
            return yield this.request(path, {
                method: "PUT",
                data: body,
                headers,
                params: { cp: "CP_2" },
            });
        });
    }
    updateCardholderNameRequestCard(requestId, body, accessToken) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = `/v2/card/card-requests/${requestId}/cardholder-name`;
            const headers = Object.assign(Object.assign({}, this.headers), { authorization: `Bearer ${accessToken}` });
            return yield this.request(path, {
                method: "PUT",
                data: body,
                headers,
                params: { cp: "CP_2" },
            });
        });
    }
    createCardOrderOffer(requestId, currency, accessToken) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = `/v2/card/card-requests/${requestId}/payment-offer/${currency}`;
            const headers = Object.assign(Object.assign({}, this.headers), { authorization: `Bearer ${accessToken}` });
            return yield this.request(path, {
                method: "POST",
                headers,
                params: { cp: "CP_2" },
            });
        });
    }
    activateCard(cardId, code, accessToken) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = `/v2/card/plastic/${cardId}/activate`;
            const headers = Object.assign(Object.assign({}, this.headers), { authorization: `Bearer ${accessToken}` });
            return yield this.request(path, {
                method: "POST",
                data: { code },
                headers,
            });
        });
    }
    payCardOrderOffer(requestId, accessToken) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = `/v2/card/card-requests/payment-offer/${requestId}/confirm`;
            const headers = Object.assign(Object.assign({}, this.headers), { authorization: `Bearer ${accessToken}` });
            return yield this.request(path, {
                method: "POST",
                headers,
                params: { cp: "CP_2" },
            });
        });
    }
    cardHistory(data) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            const path = `/v2/history/card/${data.cardId}`;
            const headers = Object.assign(Object.assign({}, this.headers), { authorization: `Bearer ${data.accessToken}` });
            const limit = ((_a = data === null || data === void 0 ? void 0 : data.query) === null || _a === void 0 ? void 0 : _a.limit) || 10;
            const page = ((_b = data === null || data === void 0 ? void 0 : data.query) === null || _b === void 0 ? void 0 : _b.page) || 1;
            const offest = (page - 1) * limit;
            return yield this.request(path, {
                method: "GET",
                headers,
                params: { cp: "CP_2", offest, size: limit },
            });
        });
    }
    historyOperations(data) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            const path = `/v2/history/operations`;
            const headers = Object.assign(Object.assign({}, this.headers), { authorization: `Bearer ${data.accessToken}` });
            const limit = ((_a = data === null || data === void 0 ? void 0 : data.query) === null || _a === void 0 ? void 0 : _a.limit) || 10;
            const page = ((_b = data === null || data === void 0 ? void 0 : data.query) === null || _b === void 0 ? void 0 : _b.page) || 1;
            const offest = (page - 1) * limit;
            const query = {
                offest,
                size: limit,
            };
            if (data.query.currencyFilter) {
                Object.assign(query, { currencyFilter: data.query.currencyFilter });
            }
            if (data.query.typeFilter) {
                Object.assign(query, { typeFilter: data.query.typeFilter });
            }
            return yield this.request(path, {
                method: "GET",
                headers,
                params: query,
            });
        });
    }
    getSoftBlockCodeByCard(cardId, accessToken) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = `/v2/card/${cardId}/soft-block/code`;
            const headers = Object.assign(Object.assign({}, this.headers), { authorization: `Bearer ${accessToken}` });
            return yield this.request(path, {
                method: "GET",
                headers,
                params: { cp: "CP_2" },
            });
        });
    }
    softBlockCard(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = `/v2/card/${data.cardId}/soft-block`;
            const headers = Object.assign(Object.assign({}, this.headers), { authorization: `Bearer ${data.accessToken}` });
            return yield this.request(path, {
                method: "POST",
                data: data.body,
                headers,
                params: { cp: "CP_2" },
            });
        });
    }
    getSoftUnBlockCodeByCard(cardId, accessToken) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = `/v2/card/${cardId}/soft-unblock/code`;
            const headers = Object.assign(Object.assign({}, this.headers), { authorization: `Bearer ${accessToken}` });
            return yield this.request(path, {
                method: "GET",
                headers,
                params: { cp: "CP_2" },
            });
        });
    }
    softUnBlockCard(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = `/v2/card/${data.cardId}/soft-unblock`;
            const headers = Object.assign(Object.assign({}, this.headers), { authorization: `Bearer ${data.accessToken}` });
            return yield this.request(path, {
                method: "POST",
                data: data.body,
                headers,
                params: { cp: "CP_2" },
            });
        });
    }
    setPinCode(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = `/v2/card/${data.cardId}/pin`;
            const headers = Object.assign(Object.assign({}, this.headers), { authorization: `Bearer ${data.accessToken}` });
            return yield this.request(path, {
                method: "POST",
                data: data.body,
                headers,
                params: { cp: "CP_2" },
            });
        });
    }
    getCardDetailsCode(cardId, accessToken) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = `/v2/card/${cardId}/details/code`;
            const headers = Object.assign(Object.assign({}, this.headers), { authorization: `Bearer ${accessToken}` });
            return yield this.request(path, {
                method: "GET",
                headers,
                params: { cp: "CP_2" },
            });
        });
    }
    getCardDetails(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = `/v2/card/${data.cardId}/details`;
            const headers = Object.assign(Object.assign({}, this.headers), { authorization: `Bearer ${data.accessToken}` });
            return yield this.request(path, {
                method: "POST",
                headers,
                data: data.body,
                params: { cp: "CP_2" },
            });
        });
    }
    getCardNumber(cardId, accessToken, publicKey) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = `/v2/card/${cardId}/number`;
            const headers = Object.assign(Object.assign({}, this.headers), { authorization: `Bearer ${accessToken}` });
            return yield this.request(path, {
                method: "POST",
                data: { publicKey },
                headers,
                params: { cp: "CP_2" },
            });
        });
    }
    createCardPayloadOffer(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = `/v2/card/${data.cardId}/payload/offers`;
            const headers = Object.assign(Object.assign({}, this.headers), { authorization: `Bearer ${data.accessToken}` });
            return yield this.request(path, {
                method: "POST",
                data: {
                    fromCurrency: data.fromCurrency,
                    toCurrency: data.toCurrency,
                    fromAmount: data.fromAmount,
                },
                headers,
                params: { cp: "CP_2" },
            });
        });
    }
    confirmCardPayloadOffer(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = `/v2/card/${data.cardId}/payload/offers/${data.offerId}/confirm`;
            const headers = Object.assign(Object.assign({}, this.headers), { authorization: `Bearer ${data.accessToken}` });
            return yield this.request(path, {
                method: "POST",
                headers,
                params: { cp: "CP_2" },
            });
        });
    }
}
exports.VaultProvider = VaultProvider;
exports.default = VaultProvider;
