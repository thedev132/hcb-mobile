"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
exports.default = RenameTransactionPage;
var jsx_runtime_1 = require("react/jsx-runtime");
var native_1 = require("@react-navigation/native");
var react_1 = require("react");
var react_native_1 = require("react-native");
var swr_1 = __importStar(require("swr"));
var infinite_1 = require("swr/infinite");
var mutation_1 = __importDefault(require("swr/mutation"));
var client_1 = __importDefault(require("../lib/client"));
var useTransactions_1 = require("../lib/organization/useTransactions");
var theme_1 = require("../theme");
function RenameTransactionPage(_a) {
    var _b = _a.route.params, transaction = _b.transaction, orgId = _b.orgId, navigation = _a.navigation;
    var themeColors = (0, native_1.useTheme)().colors;
    var mutate = (0, swr_1.useSWRConfig)().mutate;
    var hcb = (0, client_1.default)();
    var _c = (0, swr_1.default)("organizations/".concat(orgId, "/transactions/").concat(transaction.id, "/memo_suggestions"), { revalidateOnMount: true }), memoSuggestions = _c.data, isLoading = _c.isLoading, isValidating = _c.isValidating;
    var _d = (0, react_1.useState)(transaction.has_custom_memo ? transaction.memo : ""), memo = _d[0], setMemo = _d[1];
    var trigger = (0, mutation_1.default)("organizations/".concat(orgId, "/transactions/").concat(transaction.id), function () {
        return hcb
            .patch("organizations/".concat(orgId, "/transactions/").concat(transaction.id), {
            json: { memo: memo },
        })
            .json();
    }, {
        optimisticData: function (currentData) {
            return __assign(__assign({}, currentData), { memo: memo });
        },
        populateCache: true,
        onSuccess: function () {
            mutate((0, infinite_1.unstable_serialize)((0, useTransactions_1.getKey)(orgId)));
        },
    }).trigger;
    return ((0, jsx_runtime_1.jsxs)(react_native_1.View, { style: { padding: 20 }, children: [(0, jsx_runtime_1.jsx)(react_native_1.StatusBar, { barStyle: "light-content" }), (0, jsx_runtime_1.jsx)(react_native_1.TextInput, { style: {
                    color: themeColors.text,
                    backgroundColor: themeColors.card,
                    padding: 10,
                    borderRadius: 8,
                }, placeholderTextColor: theme_1.palette.muted, selectTextOnFocus: true, autoFocus: true, enablesReturnKeyAutomatically: true, clearButtonMode: "while-editing", value: memo, onChangeText: setMemo, placeholder: transaction.memo, returnKeyType: "done", onSubmitEditing: function () {
                    trigger();
                    navigation.goBack();
                } }), (0, jsx_runtime_1.jsx)(react_native_1.View, { style: { marginTop: 20 }, children: isLoading || isValidating ? ((0, jsx_runtime_1.jsxs)(react_native_1.View, { style: {
                        paddingVertical: 30,
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 8,
                    }, children: [(0, jsx_runtime_1.jsx)(react_native_1.ActivityIndicator, { color: theme_1.palette.muted }), (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: { textAlign: "center", color: theme_1.palette.muted }, children: "Thinking..." })] })) : (Array.isArray(memoSuggestions) &&
                    memoSuggestions.length > 0 && ((0, jsx_runtime_1.jsxs)(react_native_1.View, { children: [(0, jsx_runtime_1.jsx)(react_native_1.Text, { style: {
                                color: theme_1.palette.muted,
                                fontSize: 12,
                                textTransform: "uppercase",
                            }, children: "\u2728 Suggestions" }), __spreadArray([], new Set(memoSuggestions), true).map(function (suggestion, index) { return ((0, jsx_runtime_1.jsx)(react_native_1.Text, { style: { color: themeColors.text, marginVertical: 10 }, onPress: function () { return setMemo(suggestion); }, numberOfLines: 1, children: suggestion }, index)); })] }))) })] }));
}
