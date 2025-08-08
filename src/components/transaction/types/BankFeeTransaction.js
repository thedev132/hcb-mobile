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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = BankFeeTransaction;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_native_1 = require("react-native");
var swr_1 = __importDefault(require("swr"));
var theme_1 = require("../../../theme");
var util_1 = require("../../../util");
var TransactionDetails_1 = __importStar(require("../TransactionDetails"));
var TransactionTitle_1 = __importStar(require("../TransactionTitle"));
function BankFeeTransaction(_a) {
    var transaction = _a.transaction, orgId = _a.orgId, navigation = _a.navigation;
    var organization = (0, swr_1.default)("organizations/".concat(orgId)).data;
    return ((0, jsx_runtime_1.jsxs)(react_native_1.View, { children: [(0, jsx_runtime_1.jsxs)(TransactionTitle_1.default, { children: [(0, jsx_runtime_1.jsx)(TransactionTitle_1.Muted, { children: "Fee payment of" }), " ", (0, util_1.renderMoney)(Math.abs(transaction.amount_cents))] }), (0, jsx_runtime_1.jsx)(TransactionDetails_1.default, { details: [
                    (0, TransactionDetails_1.descriptionDetail)(orgId, transaction, navigation),
                    { label: "Charged on", value: (0, util_1.renderDate)(transaction.date) },
                ] }), organization && organization.fee_percentage > 0 && ((0, jsx_runtime_1.jsxs)(react_native_1.Text, { style: { color: theme_1.palette.muted, textAlign: "center" }, children: ["HCB charges a ", Math.round(organization.fee_percentage * 100), "% fiscal sponsorship fee on incoming funds."] }))] }));
}
