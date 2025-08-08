"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = PlaygroundBanner;
var jsx_runtime_1 = require("react/jsx-runtime");
var native_1 = require("@react-navigation/native");
var react_native_1 = require("react-native");
function PlaygroundBanner() {
    var colors = (0, native_1.useTheme)().colors;
    return ((0, jsx_runtime_1.jsx)(react_native_1.View, { style: {
            backgroundColor: colors.card,
            borderColor: colors.primary,
            borderWidth: 2,
            borderStyle: "dotted",
            padding: 10,
            marginBottom: 20,
            borderRadius: 8,
        }, children: (0, jsx_runtime_1.jsxs)(react_native_1.View, { style: {
                alignItems: "center",
                justifyContent: "center",
            }, children: [(0, jsx_runtime_1.jsx)(react_native_1.Text, { style: { color: colors.text, fontWeight: "bold", marginBottom: 5 }, children: "Playground Mode" }), (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: { color: colors.text, flex: 1, textAlign: "center" }, children: "To raise & spend money, wait for your organization's account to be activated by a staff member." })] }) }));
}
