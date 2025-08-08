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
exports.lightTheme = exports.theme = exports.palette = void 0;
var native_1 = require("@react-navigation/native");
exports.palette = {
    primary: "#ec3750",
    background: "#17171d",
    muted: "#8492a6",
    slate: "#3c4858",
    darkless: "#252429",
    smoke: "#e0e6ed",
    info: "#338eda",
    success: "#33d6a6",
    warning: "#ff8c37",
    black: "#1f2d3d",
};
exports.theme = __assign(__assign({}, native_1.DarkTheme), { colors: __assign(__assign({}, native_1.DarkTheme.colors), { background: exports.palette.background, card: exports.palette.darkless, text: exports.palette.smoke, primary: exports.palette.primary, notification: exports.palette.primary }) });
exports.lightTheme = __assign(__assign({}, native_1.DefaultTheme), { colors: __assign(__assign({}, native_1.DefaultTheme.colors), { text: "#1f2d3d", card: "#fff", primary: exports.palette.primary, notification: exports.palette.primary }) });
