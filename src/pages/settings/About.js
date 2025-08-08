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
exports.default = About;
var jsx_runtime_1 = require("react/jsx-runtime");
var vector_icons_1 = require("@expo/vector-icons");
var native_1 = require("@react-navigation/native");
var hackclub_icons_rn_1 = __importDefault(require("@thedev132/hackclub-icons-rn"));
var expo_constants_1 = __importDefault(require("expo-constants"));
var Device = __importStar(require("expo-device"));
var react_native_1 = require("react-native");
var ThemeContext_1 = require("../../ThemeContext");
function isTapToPayEnabled() {
    var _a;
    if (((_a = expo_constants_1.default.platform) === null || _a === void 0 ? void 0 : _a.ios) && Device.osVersion) {
        return parseInt(Device.osVersion, 10) >= 17;
    }
    return false;
}
function About() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
    var colors = (0, native_1.useTheme)().colors;
    var theme = (0, ThemeContext_1.useThemeContext)().theme;
    var version = ((_a = expo_constants_1.default.expoConfig) === null || _a === void 0 ? void 0 : _a.version) || "1.0.0";
    var buildNumber = ((_c = (_b = expo_constants_1.default.expoConfig) === null || _b === void 0 ? void 0 : _b.ios) === null || _c === void 0 ? void 0 : _c.buildNumber) ||
        ((_e = (_d = expo_constants_1.default.expoConfig) === null || _d === void 0 ? void 0 : _d.android) === null || _e === void 0 ? void 0 : _e.versionCode) ||
        "1";
    var appName = ((_f = expo_constants_1.default.expoConfig) === null || _f === void 0 ? void 0 : _f.name) || "HCB Mobile";
    var appId = ((_h = (_g = expo_constants_1.default.expoConfig) === null || _g === void 0 ? void 0 : _g.ios) === null || _h === void 0 ? void 0 : _h.bundleIdentifier) ||
        ((_k = (_j = expo_constants_1.default.expoConfig) === null || _j === void 0 ? void 0 : _j.android) === null || _k === void 0 ? void 0 : _k.package) ||
        "";
    var apiBase = process.env.EXPO_PUBLIC_API_BASE || "N/A";
    var deviceModel = expo_constants_1.default.deviceName || "Unknown";
    var os = react_native_1.Platform.OS;
    var osVersion = react_native_1.Platform.Version;
    var tapToPayEnabled = isTapToPayEnabled();
    var debugRows = [
        { label: "App Name", value: appName },
        { label: "Version", value: "".concat(version, " (Build ").concat(buildNumber, ")") },
        { label: "App ID", value: appId },
        { label: "Device", value: deviceModel },
        { label: "OS", value: "".concat(os, " ").concat(osVersion) },
        { label: "Theme", value: theme },
        { label: "API Base", value: apiBase },
    ];
    return ((0, jsx_runtime_1.jsx)(react_native_1.ScrollView, { style: { flex: 1, backgroundColor: colors.background }, contentContainerStyle: { paddingBottom: 80 }, showsVerticalScrollIndicator: false, children: (0, jsx_runtime_1.jsxs)(react_native_1.View, { style: { padding: 24 }, children: [(0, jsx_runtime_1.jsxs)(react_native_1.View, { style: { alignItems: "center", marginBottom: 40 }, children: [(0, jsx_runtime_1.jsx)(hackclub_icons_rn_1.default, { glyph: "card", size: 48, color: colors.primary }), (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: {
                                color: colors.text,
                                fontSize: 28,
                                fontWeight: "bold",
                                marginVertical: 8,
                            }, children: "HCB" }), (0, jsx_runtime_1.jsxs)(react_native_1.Text, { style: { color: colors.text, fontSize: 16, opacity: 0.7 }, children: ["Version ", version, " (Build ", buildNumber, ")"] })] }), (0, jsx_runtime_1.jsxs)(react_native_1.View, { style: { gap: 12 }, children: [debugRows.map(function (row, idx) { return ((0, jsx_runtime_1.jsxs)(react_native_1.View, { style: {
                                borderRadius: 14,
                                paddingVertical: 16,
                                paddingHorizontal: 18,
                                marginTop: idx === 0 ? 0 : 0,
                                borderWidth: 1,
                                borderColor: colors.border,
                                backgroundColor: colors.card,
                                shadowColor: colors.text + "22",
                                shadowOffset: { width: 0, height: 2 },
                                shadowOpacity: 0.08,
                                shadowRadius: 6,
                                elevation: 2,
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between",
                            }, children: [(0, jsx_runtime_1.jsx)(react_native_1.Text, { style: {
                                        fontSize: 15,
                                        fontWeight: "600",
                                        opacity: 0.7,
                                        color: colors.text,
                                    }, children: row.label }), (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: {
                                        fontSize: 15,
                                        fontWeight: "400",
                                        textAlign: "right",
                                        flexShrink: 1,
                                        marginLeft: 16,
                                        opacity: 0.95,
                                        color: colors.text,
                                    }, children: row.value })] }, row.label)); }), (0, jsx_runtime_1.jsxs)(react_native_1.View, { style: {
                                borderRadius: 14,
                                paddingVertical: 16,
                                paddingHorizontal: 18,
                                borderWidth: 1,
                                borderColor: colors.border,
                                backgroundColor: colors.card,
                                shadowColor: colors.text + "22",
                                shadowOffset: { width: 0, height: 2 },
                                shadowOpacity: 0.08,
                                shadowRadius: 6,
                                elevation: 2,
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between",
                            }, children: [(0, jsx_runtime_1.jsx)(react_native_1.Text, { style: {
                                        fontSize: 15,
                                        fontWeight: "600",
                                        opacity: 0.7,
                                        color: colors.text,
                                    }, children: "Tap to Pay" }), tapToPayEnabled ? ((0, jsx_runtime_1.jsxs)(react_native_1.View, { style: { flexDirection: "row", alignItems: "center" }, children: [(0, jsx_runtime_1.jsx)(vector_icons_1.Ionicons, { name: "checkmark-circle", size: 18, color: colors.primary, style: { marginRight: 6 } }), (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: {
                                                color: colors.primary,
                                                fontWeight: "600",
                                                fontSize: 15,
                                            }, children: "Enabled" })] })) : ((0, jsx_runtime_1.jsx)(react_native_1.Text, { style: { color: colors.text, opacity: 0.6, fontSize: 15 }, children: "Not Available" }))] })] }), (0, jsx_runtime_1.jsxs)(react_native_1.Text, { style: {
                        color: colors.text,
                        fontSize: 14,
                        marginTop: 32,
                        textAlign: "center",
                        opacity: 0.5,
                    }, children: ["\u00A9 ", new Date().getFullYear(), " Hack Club. All rights reserved."] })] }) }));
}
