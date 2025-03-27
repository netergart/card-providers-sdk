"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardStatus = exports.ProviderType = exports.DocumentType = exports.PiiType = exports.CardType = void 0;
var CardType;
(function (CardType) {
    CardType["VIRTUAL"] = "VIRTUAL";
    CardType["PHYSICAL"] = "PHYSICAL";
})(CardType = exports.CardType || (exports.CardType = {}));
var PiiType;
(function (PiiType) {
    PiiType["UserPII"] = "UserPII";
    PiiType["BusinessPII"] = "BusinessPII";
})(PiiType = exports.PiiType || (exports.PiiType = {}));
var DocumentType;
(function (DocumentType) {
    DocumentType["Passport"] = "Passport";
    DocumentType["NationalId"] = "NationalId";
    DocumentType["DriversLicense"] = "DriversLicense";
})(DocumentType = exports.DocumentType || (exports.DocumentType = {}));
var ProviderType;
(function (ProviderType) {
    ProviderType["REAP"] = "REAP";
})(ProviderType = exports.ProviderType || (exports.ProviderType = {}));
var CardStatus;
(function (CardStatus) {
    CardStatus["INIT"] = "INIT";
    CardStatus["PENDING"] = "PENDING";
    CardStatus["ISSUED"] = "ISSUED";
    CardStatus["ACTIVE"] = "ACTIVE";
    CardStatus["FROZEN"] = "FROZEN";
    CardStatus["LOST"] = "LOST";
    CardStatus["STOLEN"] = "STOLEN";
    CardStatus["INACTIVE"] = "INACTIVE";
    CardStatus["CLOSED"] = "CLOSED";
    CardStatus["REJECTED"] = "REJECTED";
})(CardStatus = exports.CardStatus || (exports.CardStatus = {}));
