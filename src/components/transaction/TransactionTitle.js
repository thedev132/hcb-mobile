"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Muted = Muted;
exports.default = TransactionTitle;
var jsx_runtime_1 = require("react/jsx-runtime");
var native_1 = require("@react-navigation/native");
var react_native_1 = require("react-native");
var theme_1 = require("../../theme");
function Muted(_a) {
    var children = _a.children;
    return ((0, jsx_runtime_1.jsx)(react_native_1.Text, { style: { color: theme_1.palette.muted, fontWeight: "400" }, children: children }));
}
function TransactionTitle(_a) {
    var children = _a.children, badge = _a.badge;
    var themeColors = (0, native_1.useTheme)().colors;
    return ((0, jsx_runtime_1.jsxs)(react_native_1.View, { style: { alignItems: "center" }, children: [badge && (0, jsx_runtime_1.jsx)(react_native_1.View, { style: { marginBottom: 5 }, children: badge }), (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: {
                    color: themeColors.text,
                    textAlign: "center",
                    fontSize: 30,
                    fontWeight: "700",
                    marginBottom: 20,
                }, children: children })] }));
}
