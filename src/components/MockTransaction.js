"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var free_brands_svg_icons_1 = require("@fortawesome/free-brands-svg-icons");
var react_native_fontawesome_1 = require("@fortawesome/react-native-fontawesome");
var native_1 = require("@react-navigation/native");
var hackclub_icons_rn_1 = __importDefault(require("@thedev132/hackclub-icons-rn"));
var react_1 = require("react");
var react_native_1 = require("react-native");
var useColorScheme_1 = require("../lib/useColorScheme");
var theme_1 = require("../theme");
var util_1 = require("../util");
function mockTransactionIcon(transaction) {
    var _a;
    if ((_a = transaction === null || transaction === void 0 ? void 0 : transaction.localHcbCode) === null || _a === void 0 ? void 0 : _a.isDonation) {
        return "support";
    }
    else if (transaction === null || transaction === void 0 ? void 0 : transaction.feePayment) {
        return "bank-circle";
    }
    else {
        return "payment-docs";
    }
}
function MockTransactionIcon(_a) {
    var transaction = _a.transaction, hideIcon = _a.hideIcon;
    if (hideIcon)
        return null;
    var icon = mockTransactionIcon(transaction);
    if (icon === "paypal") {
        return (0, jsx_runtime_1.jsx)(react_native_fontawesome_1.FontAwesomeIcon, { color: theme_1.palette.muted, icon: free_brands_svg_icons_1.faPaypal, size: 20 });
    }
    else {
        return ((0, jsx_runtime_1.jsx)(hackclub_icons_rn_1.default
        // @ts-expect-error workaround for hackclub-icons-rn
        , { 
            // @ts-expect-error workaround for hackclub-icons-rn
            glyph: icon, color: theme_1.palette.muted, size: 20 }));
    }
}
function MockTransactionComponent(_a) {
    var _b, _c, _d;
    var transaction = _a.transaction, _e = _a.top, top = _e === void 0 ? false : _e, _f = _a.bottom, bottom = _f === void 0 ? false : _f, hideIcon = _a.hideIcon, hideMissingReceipt = _a.hideMissingReceipt, style = _a.style;
    var themeColors = (0, native_1.useTheme)().colors;
    var isDark = (0, useColorScheme_1.useIsDark)();
    var hasMissingReceipt = ((_b = transaction === null || transaction === void 0 ? void 0 : transaction.localHcbCode) === null || _b === void 0 ? void 0 : _b.receipts.length) === 0 &&
        transaction.amount.cents < 0 &&
        !transaction.feePayment;
    return ((0, jsx_runtime_1.jsxs)(react_native_1.View, { style: react_native_1.StyleSheet.compose({
            padding: 10,
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
            backgroundColor: transaction.feePayment || transaction.amount.cents < 0
                ? isDark
                    ? "#351921"
                    : "#F9E3E7"
                : transaction.amount.cents > 0
                    ? isDark
                        ? "#234740"
                        : "#d7f7ee"
                    : themeColors.card,
            borderTopLeftRadius: top ? 8 : 0,
            borderTopRightRadius: top ? 8 : 0,
            borderBottomLeftRadius: bottom ? 8 : 0,
            borderBottomRightRadius: bottom ? 8 : 0,
            overflow: "hidden",
        }, style), children: [(0, jsx_runtime_1.jsx)(MockTransactionIcon, { transaction: transaction, hideIcon: hideIcon }), (0, jsx_runtime_1.jsx)(react_native_1.Text, { numberOfLines: 1, style: {
                    fontSize: 14,
                    color: themeColors.text,
                    overflow: "hidden",
                    flex: 1,
                }, children: ((_d = (_c = transaction === null || transaction === void 0 ? void 0 : transaction.localHcbCode) === null || _c === void 0 ? void 0 : _c.memo) === null || _d === void 0 ? void 0 : _d.replaceAll(/\s{2,}/g, " ")) || "" }), hasMissingReceipt && !hideMissingReceipt && ((0, jsx_runtime_1.jsxs)(react_native_1.View, { style: {
                    flexDirection: "row",
                    alignItems: "center",
                    borderWidth: 1,
                    borderColor: "#ff8c37",
                    borderRadius: 20,
                    paddingHorizontal: 5,
                    paddingVertical: 2,
                    marginRight: 4,
                    backgroundColor: isDark ? "#2E161D" : "#FBEAED",
                }, children: [(0, jsx_runtime_1.jsx)(hackclub_icons_rn_1.default, { glyph: "payment-docs", color: "#ff8c37", size: 18 }), (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: {
                            color: "#ff8c37",
                            fontSize: 12,
                            fontFamily: "monospace",
                            fontWeight: "bold",
                        }, children: "0" })] })), (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: {
                    color: themeColors.text,
                }, children: (0, util_1.renderMoney)(transaction === null || transaction === void 0 ? void 0 : transaction.amount.cents) })] }));
}
exports.default = (0, react_1.memo)(MockTransactionComponent);
