"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Divider;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_native_1 = require("react-native");
var useColorScheme_1 = require("../lib/useColorScheme");
var theme_1 = require("../theme");
function Divider() {
    var isDark = (0, useColorScheme_1.useIsDark)();
    return ((0, jsx_runtime_1.jsx)(react_native_1.View, { style: {
            backgroundColor: isDark ? theme_1.palette.slate : theme_1.palette.smoke,
            height: 1,
            width: "100%",
            marginBottom: 30,
        } }));
}
