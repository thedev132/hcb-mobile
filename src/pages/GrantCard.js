"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = GrantCardPage;
var jsx_runtime_1 = require("react/jsx-runtime");
var native_1 = require("@react-navigation/native");
var react_native_1 = require("react-native");
var swr_1 = __importDefault(require("swr"));
var CardSkeleton_1 = __importDefault(require("../components/CardSkeleton"));
var theme_1 = require("../theme");
var util_1 = require("../util");
var card_1 = __importDefault(require("./card"));
function GrantCardPage(_a) {
    var _b;
    var route = _a.route, navigation = _a.navigation;
    var grantId = route.params.grantId;
    var grant = (0, swr_1.default)("card_grants/cdg_".concat(grantId)).data;
    var themeColors = (0, native_1.useTheme)().colors;
    if (!grant) {
        return (0, jsx_runtime_1.jsx)(CardSkeleton_1.default, {});
    }
    if (!grant.card_id) {
        return ((0, jsx_runtime_1.jsxs)(react_native_1.View, { style: {
                flex: 1,
                alignItems: "center",
                justifyContent: "space-between",
                padding: 20,
            }, children: [(0, jsx_runtime_1.jsxs)(react_native_1.View, { style: { alignItems: "center", marginTop: 10 }, children: [(0, jsx_runtime_1.jsx)(react_native_1.Text, { style: {
                                fontSize: 24,
                                fontWeight: "bold",
                                color: theme_1.palette.muted,
                                borderBlockColor: theme_1.palette.muted,
                                borderWidth: 2,
                                borderColor: theme_1.palette.muted,
                                paddingVertical: 30,
                                paddingHorizontal: 40,
                                borderRadius: 10,
                                marginBottom: 20,
                                textAlign: "center",
                            }, children: "Sorry, this grant was cancelled!" }), (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: {
                                fontSize: 14,
                                opacity: 0.7,
                                color: themeColors.text,
                            }, children: "Available Balance" }), (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: {
                                fontSize: 24,
                                fontWeight: "bold",
                                marginTop: 5,
                                color: themeColors.text,
                            }, children: "$0" })] }), (0, jsx_runtime_1.jsxs)(react_native_1.View, { style: {
                        marginBottom: 24,
                        padding: 20,
                        borderRadius: 15,
                        shadowColor: "#000",
                        shadowOffset: { width: 0, height: 1 },
                        shadowOpacity: 0.05,
                        shadowRadius: 3,
                        elevation: 2,
                        backgroundColor: themeColors.card,
                    }, children: [(0, jsx_runtime_1.jsxs)(react_native_1.View, { style: {
                                flexDirection: "row",
                                justifyContent: "space-between",
                                marginBottom: 12,
                            }, children: [(0, jsx_runtime_1.jsx)(react_native_1.Text, { style: {
                                        fontSize: 16,
                                        color: themeColors.text,
                                        flexShrink: 1,
                                    }, children: "Grant status" }), (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: {
                                        color: theme_1.palette.muted,
                                        fontSize: 16,
                                        fontWeight: "500",
                                        fontFamily: "JetBrains Mono",
                                    }, children: (grant === null || grant === void 0 ? void 0 : grant.status.charAt(0).toUpperCase()) + (grant === null || grant === void 0 ? void 0 : grant.status.slice(1)) })] }), (0, jsx_runtime_1.jsxs)(react_native_1.View, { style: {
                                flexDirection: "row",
                                justifyContent: "space-between",
                                marginBottom: 12,
                            }, children: [(0, jsx_runtime_1.jsx)(react_native_1.Text, { style: {
                                        fontSize: 16,
                                        color: themeColors.text,
                                        flexShrink: 1,
                                    }, children: "One time use?" }), (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: {
                                        color: theme_1.palette.muted,
                                        fontSize: 16,
                                        fontWeight: "500",
                                        fontFamily: "JetBrains Mono",
                                    }, children: (grant === null || grant === void 0 ? void 0 : grant.one_time_use) ? "Yes" : "No" })] }), (0, jsx_runtime_1.jsxs)(react_native_1.View, { style: {
                                flexDirection: "row",
                                justifyContent: "space-between",
                                marginBottom: 12,
                            }, children: [(0, jsx_runtime_1.jsx)(react_native_1.Text, { style: {
                                        fontSize: 16,
                                        color: themeColors.text,
                                        flexShrink: 1,
                                    }, children: "Grant amount" }), (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: {
                                        color: theme_1.palette.muted,
                                        fontSize: 16,
                                        fontWeight: "500",
                                        fontFamily: "JetBrains Mono",
                                    }, children: (0, util_1.renderMoney)(grant === null || grant === void 0 ? void 0 : grant.amount_cents) })] }), (0, jsx_runtime_1.jsxs)(react_native_1.View, { style: {
                                flexDirection: "row",
                                justifyContent: "space-between",
                                marginBottom: 12,
                            }, children: [(0, jsx_runtime_1.jsx)(react_native_1.Text, { style: {
                                        fontSize: 16,
                                        color: themeColors.text,
                                        flexShrink: 1,
                                    }, children: "Grant sent to" }), (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: {
                                        color: theme_1.palette.muted,
                                        fontSize: 16,
                                        fontWeight: "500",
                                        fontFamily: "JetBrains Mono",
                                    }, onPress: function () { var _a; return react_native_1.Linking.openURL("mailto:".concat((_a = grant === null || grant === void 0 ? void 0 : grant.user) === null || _a === void 0 ? void 0 : _a.email)); }, children: (_b = grant === null || grant === void 0 ? void 0 : grant.user) === null || _b === void 0 ? void 0 : _b.email })] }), (0, jsx_runtime_1.jsxs)(react_native_1.View, { style: {
                                flexDirection: "row",
                                justifyContent: "space-between",
                                marginBottom: 12,
                                flexWrap: "wrap",
                            }, children: [(0, jsx_runtime_1.jsx)(react_native_1.Text, { style: {
                                        fontSize: 16,
                                        color: themeColors.text,
                                    }, children: "Allowed Merchants" }), (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: {
                                        color: theme_1.palette.muted,
                                        fontSize: 16,
                                        fontWeight: "500",
                                        fontFamily: "JetBrains Mono",
                                    }, children: (0, util_1.formatMerchantNames)(grant === null || grant === void 0 ? void 0 : grant.allowed_merchants) })] }), (0, jsx_runtime_1.jsxs)(react_native_1.View, { style: {
                                flexDirection: "row",
                                justifyContent: "space-between",
                                marginBottom: 12,
                                flexWrap: "wrap",
                            }, children: [(0, jsx_runtime_1.jsx)(react_native_1.Text, { style: {
                                        fontSize: 16,
                                        color: themeColors.text,
                                        flexShrink: 1,
                                    }, children: "Allowed Categories" }), (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: {
                                        color: theme_1.palette.muted,
                                        fontSize: 16,
                                        fontWeight: "500",
                                        fontFamily: "JetBrains Mono",
                                    }, children: (0, util_1.formatCategoryNames)(grant === null || grant === void 0 ? void 0 : grant.allowed_categories) })] }), (grant === null || grant === void 0 ? void 0 : grant.purpose) && ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(react_native_1.Text, { style: {
                                        fontSize: 16,
                                        color: themeColors.text,
                                        flexShrink: 1,
                                    }, children: "Purpose" }), (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: {
                                        color: theme_1.palette.muted,
                                        fontSize: 16,
                                        fontWeight: "500",
                                        fontFamily: "JetBrains Mono",
                                    }, children: grant === null || grant === void 0 ? void 0 : grant.purpose })] }))] }), (0, jsx_runtime_1.jsxs)(react_native_1.View, { style: {
                        flexDirection: "row",
                        justifyContent: "space-between",
                        marginBottom: 12,
                    }, children: [(0, jsx_runtime_1.jsx)(react_native_1.Text, { style: {
                                fontSize: 16,
                                color: themeColors.text,
                                flexShrink: 1,
                            }, children: "One time use?" }), (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: {
                                color: theme_1.palette.muted,
                                fontSize: 16,
                                fontWeight: "500",
                                fontFamily: "JetBrains Mono",
                            }, children: (grant === null || grant === void 0 ? void 0 : grant.one_time_use) ? "Yes" : "No" })] })] }));
    }
    return ((0, jsx_runtime_1.jsx)(card_1.default, { cardId: grant.card_id, navigation: navigation, grantId: "cdg_".concat(grantId) }));
}
