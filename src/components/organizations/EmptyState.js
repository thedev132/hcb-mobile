"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmptyState = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var vector_icons_1 = require("@expo/vector-icons");
var native_1 = require("@react-navigation/native");
var hackclub_icons_rn_1 = __importDefault(require("@thedev132/hackclub-icons-rn"));
var react_native_1 = require("react-native");
var theme_1 = require("../../theme");
var EmptyState = function (_a) {
    var isOnline = _a.isOnline;
    var themeColors = (0, native_1.useTheme)().colors;
    return ((0, jsx_runtime_1.jsx)(react_native_1.View, { style: {
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            padding: 20,
        }, children: !isOnline ? ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(vector_icons_1.Ionicons, { name: "cloud-offline", size: 48, color: theme_1.palette.muted, style: { marginBottom: 16 } }), (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: {
                        color: themeColors.text,
                        fontSize: 18,
                        fontWeight: "600",
                        marginBottom: 8,
                    }, children: "You're Offline" }), (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: { color: theme_1.palette.muted, textAlign: "center", fontSize: 14 }, children: "Please check your internet connection and try again" })] })) : ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(hackclub_icons_rn_1.default, { glyph: "sad", color: theme_1.palette.muted, size: 48, style: { marginBottom: 16 } }), (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: {
                        color: themeColors.text,
                        fontSize: 18,
                        fontWeight: "600",
                        marginBottom: 8,
                    }, children: "No Transactions Yet" }), (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: { color: theme_1.palette.muted, textAlign: "center", fontSize: 14 }, children: "Your transaction history will appear here" })] })) }));
};
exports.EmptyState = EmptyState;
