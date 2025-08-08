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
exports.default = AchTransferTransaction;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_native_1 = require("react-native");
var theme_1 = require("../../../theme");
var util_1 = require("../../../util");
var Badge_1 = __importDefault(require("../../Badge"));
var UserMention_1 = __importDefault(require("../../UserMention"));
var TransactionDetails_1 = __importStar(require("../TransactionDetails"));
var TransactionTitle_1 = __importStar(require("../TransactionTitle"));
function AchTransferTransaction(_a) {
    var _b = _a.transaction, ach_transfer = _b.ach_transfer, transaction = __rest(_b, ["ach_transfer"]), orgId = _a.orgId, navigation = _a.navigation;
    var isIncoming = transaction.amount_cents > 0;
    var badge = transaction.pending ? ((0, jsx_runtime_1.jsx)(Badge_1.default, { icon: "information-circle-outline", color: theme_1.palette.info, children: "Pending" })) : transaction.declined ? ((0, jsx_runtime_1.jsx)(Badge_1.default, { icon: "information-circle-outline", color: theme_1.palette.primary, children: "Declined" })) : null;
    return ((0, jsx_runtime_1.jsxs)(react_native_1.View, { children: [(0, jsx_runtime_1.jsx)(react_native_1.View, { style: { flexDirection: "column", alignItems: "center" }, children: (0, jsx_runtime_1.jsxs)(TransactionTitle_1.default, { badge: badge, children: [(0, util_1.renderMoney)(Math.abs(transaction.amount_cents)), " ", (0, jsx_runtime_1.jsx)(TransactionTitle_1.Muted, { children: isIncoming ? "received via" : "sent via" }), "\n", "ACH Transfer"] }) }), (0, jsx_runtime_1.jsx)(TransactionDetails_1.default, { details: __spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray([
                    {
                        label: "Recipient",
                        value: ach_transfer.recipient_name,
                    }
                ], (ach_transfer.recipient_email
                    ? [
                        {
                            label: "Email",
                            value: ach_transfer.recipient_email,
                        },
                    ]
                    : []), true), [
                    {
                        label: "Bank",
                        value: ach_transfer.bank_name,
                    }
                ], false), (ach_transfer.account_number_last4
                    ? [
                        {
                            label: "Account",
                            value: "\u2022\u2022\u2022\u2022 ".concat(ach_transfer.account_number_last4),
                            fontFamily: "JetBrainsMono-Regular",
                        },
                    ]
                    : []), true), (ach_transfer.routing_number
                    ? [
                        {
                            label: "Routing",
                            value: ach_transfer.routing_number,
                            fontFamily: "JetBrainsMono-Regular",
                        },
                    ]
                    : []), true), [
                    {
                        label: "Purpose",
                        value: ach_transfer.payment_for,
                    },
                    (0, TransactionDetails_1.descriptionDetail)(orgId, transaction, navigation),
                    {
                        label: isIncoming ? "Received on" : "Sent on",
                        value: (0, util_1.renderDate)(transaction.date),
                    }
                ], false), (ach_transfer.sender
                    ? [
                        {
                            label: isIncoming ? "Received by" : "Sent by",
                            value: (0, jsx_runtime_1.jsx)(UserMention_1.default, { user: ach_transfer.sender }),
                        },
                    ]
                    : []), true) })] }));
}
