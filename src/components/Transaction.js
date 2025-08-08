"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var free_brands_svg_icons_1 = require("@fortawesome/free-brands-svg-icons");
var react_native_fontawesome_1 = require("@fortawesome/react-native-fontawesome");
var native_1 = require("@react-navigation/native");
var hackclub_icons_rn_1 = __importDefault(require("@thedev132/hackclub-icons-rn"));
var expo_linear_gradient_1 = require("expo-linear-gradient");
var react_1 = require("react");
var react_native_1 = require("react-native");
var react_native_svg_1 = require("react-native-svg");
var ts_pattern_1 = require("ts-pattern");
var Transaction_1 = require("../lib/types/Transaction");
var useColorScheme_1 = require("../lib/useColorScheme");
var useMerchantIcon_1 = require("../lib/useMerchantIcon");
var theme_1 = require("../theme");
var util_1 = require("../util");
var UserAvatar_1 = __importDefault(require("./UserAvatar"));
function transactionIcon(_a) {
    var code = _a.code, transaction = __rest(_a, ["code"]);
    switch (code) {
        case Transaction_1.TransactionType.Donation:
        case Transaction_1.TransactionType.PartnerDonation:
            return "support";
        case Transaction_1.TransactionType.Check:
        case Transaction_1.TransactionType.IncreaseCheck:
            return "email";
        case Transaction_1.TransactionType.CheckDeposit:
            return "briefcase";
        case Transaction_1.TransactionType.Disbursement:
            if (transaction.memo.startsWith("Grant to")) {
                return "purse-fill";
            }
            else if (transaction.memo == "💰 Hackathon grant from Hack Club") {
                return "purse";
            }
            if (transaction.amount_cents > 0) {
                return "door-enter";
            }
            else {
                return "door-leave";
            }
        case Transaction_1.TransactionType.StripeCard:
        case Transaction_1.TransactionType.StripeForceCapture:
            if (transaction.amount_cents > 0) {
                return "view-reload";
            }
            return "card";
        case Transaction_1.TransactionType.BankFee:
            return "minus";
        case Transaction_1.TransactionType.FeeRevenue:
            return "plus";
        case Transaction_1.TransactionType.Invoice:
            return "briefcase";
        case Transaction_1.TransactionType.ExpensePayout:
            return "attachment";
        case Transaction_1.TransactionType.Wire:
            return "web";
        case Transaction_1.TransactionType.Paypal:
            return "paypal";
        case Transaction_1.TransactionType.AchTransfer:
            return "payment-transfer";
        default:
            return "payment-docs";
    }
}
function TransactionIcon(_a) {
    var transaction = _a.transaction, hideAvatar = _a.hideAvatar, hideIcon = _a.hideIcon;
    if (hideIcon)
        return null;
    if (!hideAvatar && transaction.code == Transaction_1.TransactionType.StripeCard) {
        return ((0, jsx_runtime_1.jsx)(UserAvatar_1.default, { user: transaction.card_charge.card.user, size: 20 }));
    }
    else {
        if (transactionIcon(transaction) == "paypal") {
            return ((0, jsx_runtime_1.jsx)(react_native_fontawesome_1.FontAwesomeIcon, { color: theme_1.palette.muted, icon: free_brands_svg_icons_1.faPaypal, size: 20 }));
        }
        else {
            return ((0, jsx_runtime_1.jsx)(hackclub_icons_rn_1.default
            // @ts-expect-error it is checked above
            , { 
                // @ts-expect-error it is checked above
                glyph: transactionIcon(transaction), color: transaction.appearance == "hackathon_grant"
                    ? theme_1.palette.black
                    : theme_1.palette.muted, size: 20 }));
        }
    }
}
function Transaction(_a) {
    var _b, _c;
    var transaction = _a.transaction, 
    // orgId,
    _d = _a.top, 
    // orgId,
    top = _d === void 0 ? false : _d, _e = _a.bottom, bottom = _e === void 0 ? false : _e, hideAvatar = _a.hideAvatar, hideIcon = _a.hideIcon, hidePendingLabel = _a.hidePendingLabel, hideMissingReceipt = _a.hideMissingReceipt, showMerchantIcon = _a.showMerchantIcon, style = _a.style;
    var themeColors = (0, native_1.useTheme)().colors;
    var isDark = (0, useColorScheme_1.useIsDark)();
    var networkId = transaction.code === Transaction_1.TransactionType.StripeCard
        ? (_c = (_b = transaction.card_charge) === null || _b === void 0 ? void 0 : _b.merchant) === null || _c === void 0 ? void 0 : _c.network_id
        : undefined;
    var autoMerchantIcon = (0, useMerchantIcon_1.useMerchantIcon)(networkId);
    var finalMerchantIcon = showMerchantIcon ? autoMerchantIcon : null;
    return ((0, jsx_runtime_1.jsx)(react_native_1.View, { children: (0, jsx_runtime_1.jsxs)(react_native_1.View, { style: react_native_1.StyleSheet.compose({
                padding: 10,
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
                backgroundColor: transaction.declined || transaction.amount_cents < 0
                    ? isDark
                        ? "#351921"
                        : "#F9E3E7"
                    : transaction.amount_cents > 0
                        ? isDark
                            ? "#234740"
                            : "#d7f7ee"
                        : themeColors.card,
                borderTopLeftRadius: top ? 8 : 0,
                borderTopRightRadius: top ? 8 : 0,
                borderBottomLeftRadius: bottom ? 8 : 0,
                borderBottomRightRadius: bottom ? 8 : 0,
                overflow: "hidden",
            }, style), children: [transaction.appearance == "hackathon_grant" && ((0, jsx_runtime_1.jsx)(expo_linear_gradient_1.LinearGradient, { colors: ["#e2b142", "#fbe87a", "#e2b142", "#fbe87a"], style: {
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                    }, start: { x: 0, y: 0 }, end: { x: 1, y: 0 } })), finalMerchantIcon ? ((0, jsx_runtime_1.jsx)(react_native_svg_1.SvgXml, { xml: finalMerchantIcon, width: 20, height: 20, fill: theme_1.palette.muted })) : ((0, jsx_runtime_1.jsx)(TransactionIcon, { transaction: transaction, hideAvatar: hideAvatar, hideIcon: hideIcon })), !hidePendingLabel && (transaction.declined || transaction.pending) && ((0, jsx_runtime_1.jsx)(react_native_1.View, { style: transaction.declined
                        ? {
                            backgroundColor: isDark ? "#401A23" : "#891A2A",
                            borderWidth: 1,
                            borderColor: isDark ? "#401A23" : "#891A2A",
                            borderRadius: 10,
                            paddingHorizontal: 8,
                            paddingVertical: 2,
                            marginRight: 4,
                        }
                        : {
                            borderWidth: 1,
                            borderStyle: "dashed",
                            borderColor: "#8492a6",
                            borderRadius: 10,
                            paddingHorizontal: 8,
                            paddingVertical: 2,
                            marginRight: 4,
                        }, children: (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: transaction.declined
                            ? {
                                color: isDark ? "#891A2A" : "#fff",
                                fontSize: 12,
                                fontWeight: "bold",
                            }
                            : { color: "#8492a6", fontSize: 12, fontWeight: "bold" }, children: transaction.declined ? "Declined" : "Pending" }) })), (0, jsx_runtime_1.jsx)(react_native_1.Text, { numberOfLines: 1, style: {
                        fontSize: 14,
                        color: transaction.appearance == "hackathon_grant"
                            ? theme_1.palette.black
                            : transaction.pending
                                ? theme_1.palette.muted
                                : themeColors.text,
                        overflow: "hidden",
                        flex: 1,
                    }, children: (0, ts_pattern_1.match)(transaction)
                        .with({ appearance: "hackathon_grant", has_custom_memo: false }, function () { return "💰 Hackathon grant"; })
                        // .with(
                        //   {
                        //     card_charge: { merchant: { smart_name: P.string } },
                        //     has_custom_memo: false,
                        //   },
                        //   (tx) => tx.card_charge.merchant.smart_name,
                        // )
                        .otherwise(function (tx) { return tx.memo; })
                        .replaceAll(/\s{2,}/g, " ") }), transaction.missing_receipt && !hideMissingReceipt && ((0, jsx_runtime_1.jsxs)(react_native_1.View, { style: {
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
                        color: transaction.appearance == "hackathon_grant"
                            ? theme_1.palette.black
                            : themeColors.text,
                    }, children: (0, util_1.renderMoney)(transaction.amount_cents) })] }) }));
}
exports.default = (0, react_1.memo)(Transaction);
