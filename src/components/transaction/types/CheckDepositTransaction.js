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
exports.default = CheckDepositTransaction;
var jsx_runtime_1 = require("react/jsx-runtime");
var native_1 = require("@react-navigation/native");
var expo_image_1 = require("expo-image");
var react_native_1 = require("react-native");
var util_1 = require("../../../util");
var Badge_1 = __importDefault(require("../../Badge"));
var UserMention_1 = __importDefault(require("../../UserMention"));
var TransactionDetails_1 = __importStar(require("../TransactionDetails"));
var TransactionTitle_1 = __importStar(require("../TransactionTitle"));
function CheckDepositTransaction(props) {
    var themeColors = (0, native_1.useTheme)().colors;
    return ((0, jsx_runtime_1.jsxs)(react_native_1.View, { children: [(0, jsx_runtime_1.jsxs)(TransactionTitle_1.default, { badge: (0, jsx_runtime_1.jsx)(Badge_1.default, { color: (0, util_1.statusColor)(props.transaction.check_deposit.status), children: props.transaction.check_deposit.status }), children: ["Check deposit ", (0, jsx_runtime_1.jsx)(TransactionTitle_1.Muted, { children: "of" }), " ", (0, util_1.renderMoney)(props.transaction.amount_cents)] }), (0, jsx_runtime_1.jsx)(expo_image_1.Image, { source: { uri: props.transaction.check_deposit.front_url }, style: {
                    width: "100%",
                    height: 150,
                    borderRadius: 8,
                    marginBottom: 30,
                    backgroundColor: themeColors.card,
                }, contentFit: "cover" }), (0, jsx_runtime_1.jsx)(TransactionDetails_1.default, { details: [
                    (0, TransactionDetails_1.descriptionDetail)(props.orgId, props.transaction, props.navigation),
                    {
                        label: "Deposited by",
                        value: ((0, jsx_runtime_1.jsx)(UserMention_1.default, { user: props.transaction.check_deposit.submitter })),
                    },
                ] })] }));
}
