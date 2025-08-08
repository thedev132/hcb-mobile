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
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Badge;
var jsx_runtime_1 = require("react/jsx-runtime");
var vector_icons_1 = require("@expo/vector-icons");
var react_native_1 = require("react-native");
var theme_1 = require("../theme");
function Badge(_a) {
    var children = _a.children, icon = _a.icon, _b = _a.color, color = _b === void 0 ? theme_1.palette.muted : _b, style = _a.style;
    return ((0, jsx_runtime_1.jsxs)(react_native_1.View, { style: __assign({ backgroundColor: "".concat(color, "40"), paddingVertical: 4, paddingHorizontal: 12, borderRadius: 8, flexDirection: "row", alignItems: "center", gap: 5 }, style), children: [icon && (0, jsx_runtime_1.jsx)(vector_icons_1.Ionicons, { name: icon, color: color, size: 20 }), (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: {
                    color: color,
                    textTransform: "uppercase",
                }, children: children })] }));
}
