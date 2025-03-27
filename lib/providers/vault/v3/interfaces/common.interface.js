"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GrantType = exports.CardStatus = exports.CardType = exports.UserType = void 0;
var UserType;
(function (UserType) {
    UserType["CUSTOMER"] = "CUSTOMER";
    UserType["BUSINESS"] = "BUSINESS";
    UserType["APPLICATION"] = "APPLICATION";
})(UserType = exports.UserType || (exports.UserType = {}));
var CardType;
(function (CardType) {
    CardType["VIRTUAL"] = "VIRTUAL";
    CardType["PHYSICAL"] = "PHYSICAL";
})(CardType = exports.CardType || (exports.CardType = {}));
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
var GrantType;
(function (GrantType) {
    GrantType["PASSWORD_EMAIL"] = "password_email";
    GrantType["REFRESH_TOKEN"] = "refresh_token";
})(GrantType = exports.GrantType || (exports.GrantType = {}));
