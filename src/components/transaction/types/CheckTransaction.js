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
exports.default = CheckTransaction;
var jsx_runtime_1 = require("react/jsx-runtime");
var humanize_string_1 = __importDefault(require("humanize-string"));
var react_native_1 = require("react-native");
var util_1 = require("../../../util");
var Badge_1 = __importDefault(require("../../Badge"));
var UserMention_1 = __importDefault(require("../../UserMention"));
var Check_1 = __importDefault(require("../Check"));
var TransactionDetails_1 = __importStar(require("../TransactionDetails"));
var TransactionTitle_1 = __importStar(require("../TransactionTitle"));
function CheckTransaction(_a) {
    var _b, _c, _d, _e, _f, _g, _h;
    var _j = _a.transaction, check = _j.check, transaction = __rest(_j, ["check"]), navigation = _a.navigation, props = __rest(_a, ["transaction", "navigation"]);
    return ((0, jsx_runtime_1.jsxs)(react_native_1.View, { children: [(0, jsx_runtime_1.jsxs)(TransactionTitle_1.default, { badge: check.status && ((0, jsx_runtime_1.jsx)(Badge_1.default, { color: (0, util_1.statusColor)(check.status), children: (0, humanize_string_1.default)(check.status) })), children: [(0, util_1.renderMoney)(Math.abs(transaction.amount_cents)), " ", (0, jsx_runtime_1.jsx)(TransactionTitle_1.Muted, { children: "check to" }), " ", check.recipient_name] }), (0, jsx_runtime_1.jsx)(react_native_1.View, { style: {
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: 20,
                }, children: (0, jsx_runtime_1.jsx)(Check_1.default, { date: transaction.date, recipientName: check.recipient_name, amount: transaction.amount_cents / 100, memo: check.memo, orgId: props.orgId }) }), (0, jsx_runtime_1.jsx)(TransactionDetails_1.default, { details: __spreadArray([
                    (0, TransactionDetails_1.descriptionDetail)(props.orgId, transaction, navigation)
                ], (check.sender
                    ? __spreadArray(__spreadArray(__spreadArray([
                        {
                            label: "Sent by",
                            value: (0, jsx_runtime_1.jsx)(UserMention_1.default, { user: check.sender }),
                        },
                        { label: "Sent to", value: check.recipient_name },
                        {
                            label: "Recipient email",
                            value: (_b = check.recipient_email) !== null && _b !== void 0 ? _b : "",
                        }
                    ], (check.check_number
                        ? [{ label: "Check number", value: check.check_number }]
                        : []), true), (check.payment_for
                        ? [{ label: "Payment Purpose", value: check.payment_for }]
                        : []), true), [
                        { label: "Memo", value: (_c = check.memo) !== null && _c !== void 0 ? _c : "" },
                        {
                            label: "Addressed to",
                            value: "".concat((_d = check.address_line1) !== null && _d !== void 0 ? _d : "", " ").concat((_e = check.address_line2) !== null && _e !== void 0 ? _e : "", ", ").concat((_f = check.address_city) !== null && _f !== void 0 ? _f : "", ", ").concat((_g = check.address_state) !== null && _g !== void 0 ? _g : "", " ").concat((_h = check.address_zip) !== null && _h !== void 0 ? _h : ""),
                        },
                    ], false) : []), true) })] }));
}
