"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TransferTransaction;
var jsx_runtime_1 = require("react/jsx-runtime");
var humanize_string_1 = __importDefault(require("humanize-string"));
var react_native_1 = require("react-native");
var swr_1 = __importDefault(require("swr"));
var util_1 = require("../../../util");
var Badge_1 = __importDefault(require("../../Badge"));
var UserMention_1 = __importDefault(require("../../UserMention"));
var TransactionDetails_1 = __importStar(require("../TransactionDetails"));
var TransactionTitle_1 = __importStar(require("../TransactionTitle"));
function TransferTransaction(_a) {
    var _b = _a.transaction, transfer = _b.transfer, transaction = __rest(_b, ["transfer"]), navigation = _a.navigation, props = __rest(_a, ["transaction", "navigation"]);
    var userOrgs = (0, swr_1.default)("user/organizations").data;
    var user = (0, swr_1.default)("user").data;
    var userInFromOrg = (user === null || user === void 0 ? void 0 : user.admin) || (userOrgs === null || userOrgs === void 0 ? void 0 : userOrgs.some(function (org) { return org.id == transfer.from.id; }));
    var userInToOrg = (user === null || user === void 0 ? void 0 : user.admin) || (userOrgs === null || userOrgs === void 0 ? void 0 : userOrgs.some(function (org) { return org.id == transfer.to.id; }));
    var handleGrantCardNavigation = function () {
        if (transfer.card_grant_id) {
            // Navigate to the GrantCard screen in the same stack
            navigation.navigate("GrantCard", {
                grantId: transfer.card_grant_id,
            });
        }
    };
    return ((0, jsx_runtime_1.jsxs)(react_native_1.View, { children: [(0, jsx_runtime_1.jsxs)(TransactionTitle_1.default, { badge: (0, jsx_runtime_1.jsx)(Badge_1.default, { color: (0, util_1.statusColor)(transfer.status), children: (0, humanize_string_1.default)(transfer.status) }), children: [(0, util_1.renderMoney)(Math.abs(transaction.amount_cents)), " ", props.orgId == transfer.from.id ? ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(TransactionTitle_1.Muted, { children: "transfer to" }), " ", transfer.to.name] })) : ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(TransactionTitle_1.Muted, { children: "transfer from" }), " ", transfer.from.name] }))] }), (0, jsx_runtime_1.jsx)(TransactionDetails_1.default, { details: __spreadArray(__spreadArray([
                    (0, TransactionDetails_1.descriptionDetail)(props.orgId, transaction, navigation),
                    { label: "Reason", value: transfer.memo }
                ], (transfer.sender
                    ? [
                        {
                            label: "Transferred by",
                            value: (0, jsx_runtime_1.jsx)(UserMention_1.default, { user: transfer.sender }),
                        },
                    ]
                    : []), true), (transfer.card_grant_id
                    ? [
                        {
                            label: "Grant Card",
                            value: "View Grant Card",
                            onPress: handleGrantCardNavigation,
                        },
                    ]
                    : []), true) }), (0, jsx_runtime_1.jsx)(TransactionDetails_1.default, { details: [
                    {
                        label: "From",
                        value: transfer.from.name,
                        onPress: userInFromOrg && transfer.from.id != props.orgId
                            ? function () {
                                return navigation.navigate("Event", {
                                    orgId: transfer.from.id,
                                    organization: transfer.from,
                                });
                            }
                            : undefined,
                    },
                    {
                        label: "To",
                        value: transfer.to.name,
                        onPress: userInToOrg && transfer.to.id != props.orgId
                            ? function () {
                                return navigation.navigate("Event", {
                                    orgId: transfer.to.id,
                                    organization: transfer.to,
                                });
                            }
                            : undefined,
                    },
                ] })] }));
}
