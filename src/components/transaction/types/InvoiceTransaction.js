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
exports.default = InvoiceTransaction;
var jsx_runtime_1 = require("react/jsx-runtime");
var date_fns_1 = require("date-fns");
var react_native_1 = require("react-native");
var theme_1 = require("../../../theme");
var util_1 = require("../../../util");
var Badge_1 = __importDefault(require("../../Badge"));
var TransactionDetails_1 = __importStar(require("../TransactionDetails"));
var TransactionTitle_1 = __importStar(require("../TransactionTitle"));
function InvoiceTransaction(_a) {
    var _b = _a.transaction, invoice = _b.invoice, transaction = __rest(_b, ["invoice"]), orgId = _a.orgId, navigation = _a.navigation;
    var isPaid = !!invoice.paid_at;
    var isOverdue = !isPaid && new Date(invoice.due_date) < new Date();
    var badge = transaction.pending ? ((0, jsx_runtime_1.jsx)(Badge_1.default, { icon: "information-circle-outline", color: theme_1.palette.info, children: "Pending" })) : isPaid ? ((0, jsx_runtime_1.jsx)(Badge_1.default, { icon: "checkmark-circle", color: theme_1.palette.success, children: "Paid" })) : isOverdue ? ((0, jsx_runtime_1.jsx)(Badge_1.default, { icon: "alert-circle", color: theme_1.palette.primary, children: "Overdue" })) : null;
    return ((0, jsx_runtime_1.jsxs)(react_native_1.View, { children: [(0, jsx_runtime_1.jsx)(react_native_1.View, { style: { flexDirection: "column", alignItems: "center" }, children: (0, jsx_runtime_1.jsxs)(TransactionTitle_1.default, { badge: badge, children: [(0, util_1.renderMoney)(Math.abs(transaction.amount_cents)), " ", (0, jsx_runtime_1.jsx)(TransactionTitle_1.Muted, { children: "invoice for" }), "\n", invoice.sponsor.name] }) }), (0, jsx_runtime_1.jsx)(TransactionDetails_1.default, { details: __spreadArray([
                    {
                        label: "Invoice ID",
                        value: invoice.id,
                        fontFamily: "JetBrainsMono-Regular",
                    },
                    {
                        label: "Description",
                        value: invoice.description,
                    },
                    {
                        label: "Sponsor",
                        value: invoice.sponsor.name,
                    },
                    {
                        label: "Email",
                        value: invoice.sponsor.email,
                    },
                    (0, TransactionDetails_1.descriptionDetail)(orgId, transaction, navigation),
                    {
                        label: "Sent on",
                        value: (0, date_fns_1.format)(new Date(invoice.sent_at), "MMM d, yyyy 'at' h:mm a"),
                    },
                    {
                        label: "Due date",
                        value: (0, date_fns_1.format)(new Date(invoice.due_date), "MMM d, yyyy"),
                    }
                ], (invoice.paid_at
                    ? [
                        {
                            label: "Paid on",
                            value: (0, date_fns_1.format)(new Date(invoice.paid_at), "MMM d, yyyy 'at' h:mm a"),
                        },
                    ]
                    : []), true) })] }));
}
