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
exports.default = AccountNumberPage;
var jsx_runtime_1 = require("react/jsx-runtime");
var vector_icons_1 = require("@expo/vector-icons");
var native_1 = require("@react-navigation/native");
var Clipboard = __importStar(require("expo-clipboard"));
var expo_constants_1 = __importDefault(require("expo-constants"));
var react_1 = require("react");
var react_native_1 = require("react-native");
var swr_1 = __importDefault(require("swr"));
var theme_1 = require("../../theme");
function AccountDetail(_a) {
    var title = _a.title, value = _a.value;
    var themeColors = (0, native_1.useTheme)().colors;
    var _b = (0, react_1.useState)(false), copied = _b[0], setCopied = _b[1];
    (0, react_1.useEffect)(function () {
        if (copied) {
            var timeout_1 = setTimeout(function () { return setCopied(false); }, 2000);
            return function () { return clearTimeout(timeout_1); };
        }
    }, [copied]);
    return ((0, jsx_runtime_1.jsxs)(react_native_1.View, { children: [(0, jsx_runtime_1.jsx)(react_native_1.Text, { style: { color: theme_1.palette.muted, fontSize: 16 }, children: title }), (0, jsx_runtime_1.jsxs)(react_native_1.View, { style: { flexDirection: "row", alignItems: "center", marginBottom: 20 }, children: [(0, jsx_runtime_1.jsx)(react_native_1.Text, { style: {
                            color: themeColors.text,
                            fontFamily: "JetBrains Mono",
                            fontSize: 30,
                        }, children: value }), (0, jsx_runtime_1.jsx)(vector_icons_1.Ionicons.Button, { name: copied ? "checkmark" : "copy-outline", iconStyle: { marginRight: 0 }, color: copied ? theme_1.palette.success : theme_1.palette.primary, backgroundColor: "transparent", underlayColor: themeColors.background, onPress: function () {
                            if (value) {
                                Clipboard.setStringAsync(value);
                                setCopied(true);
                            }
                        } })] })] }));
}
function AccountNumberPage(_a) {
    var navigation = _a.navigation, orgId = _a.route.params.orgId;
    var organization = (0, swr_1.default)("organizations/".concat(orgId)).data;
    (0, react_1.useEffect)(function () {
        navigation.setOptions({
            headerLeft: function () {
                var _a;
                return ((0, jsx_runtime_1.jsx)(react_native_1.View, { style: { marginRight: ((_a = expo_constants_1.default.platform) === null || _a === void 0 ? void 0 : _a.android) ? 15 : 0 }, children: (0, jsx_runtime_1.jsx)(react_native_1.Button, { title: "Done", color: theme_1.palette.primary, onPress: function () { return navigation.goBack(); } }) }));
            },
        });
    }, [navigation]);
    return ((0, jsx_runtime_1.jsxs)(react_native_1.View, { style: {
            padding: 20,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flex: 1,
        }, children: [(0, jsx_runtime_1.jsx)(react_native_1.StatusBar, { barStyle: "light-content" }), (0, jsx_runtime_1.jsxs)(react_native_1.View, { style: { flexDirection: "column" }, children: [(0, jsx_runtime_1.jsx)(AccountDetail, { title: "Routing number", value: organization === null || organization === void 0 ? void 0 : organization.routing_number }), (0, jsx_runtime_1.jsx)(AccountDetail, { title: "Account number", value: organization === null || organization === void 0 ? void 0 : organization.account_number }), (0, jsx_runtime_1.jsx)(AccountDetail, { title: "SWIFT BIC code", value: organization === null || organization === void 0 ? void 0 : organization.swift_bic_code }), (0, jsx_runtime_1.jsxs)(react_native_1.View, { style: { flexDirection: "row" }, children: [(0, jsx_runtime_1.jsx)(vector_icons_1.Ionicons, { name: "information-circle-outline", color: theme_1.palette.muted, size: 20, style: { marginRight: 10 } }), (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: { alignSelf: "center", color: theme_1.palette.muted }, children: "Use these details to receive ACH and wire transfers." })] })] })] }));
}
