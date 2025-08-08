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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Button;
var jsx_runtime_1 = require("react/jsx-runtime");
var hackclub_icons_rn_1 = __importDefault(require("@thedev132/hackclub-icons-rn"));
var react_native_1 = require("react-native");
var theme_1 = require("../theme");
var styles = react_native_1.StyleSheet.create({
    button: {
        backgroundColor: theme_1.palette.primary,
        borderColor: "#e85d6f",
        color: "white",
        paddingVertical: 10,
        paddingHorizontal: 16,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 6,
    },
    buttonText: {
        color: "white",
        fontSize: 17,
        textAlign: "center",
        fontWeight: "600",
    },
});
function Button(props) {
    return ((0, jsx_runtime_1.jsxs)(react_native_1.Pressable, { style: __assign(__assign(__assign({}, styles.button), props.style), (props.disabled
            ? {
                backgroundColor: theme_1.palette.muted,
                borderColor: theme_1.palette.muted,
                opacity: 0.6,
            }
            : {})), onPress: function () { return props.onPress && props.onPress(); }, disabled: props.loading || props.disabled, children: [props.icon && ((0, jsx_runtime_1.jsx)(react_native_1.View, { style: {
                    width: 24,
                    height: 24,
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                    paddingBottom: props.iconOffset || 0,
                }, children: (0, jsx_runtime_1.jsx)(hackclub_icons_rn_1.default, { size: props.iconSize || 24, glyph: props.icon, style: {
                        color: props.iconColor || props.color || styles.buttonText.color,
                        opacity: props.loading ? 0 : 1,
                    } }) })), (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: __assign(__assign({}, styles.buttonText), { color: props.color || styles.buttonText.color, fontSize: props.fontSize || styles.buttonText.fontSize, fontWeight: props.fontWeight || styles.buttonText.fontWeight, opacity: props.loading ? 0 : 1 }), children: props.children }), props.loading && ((0, jsx_runtime_1.jsx)(react_native_1.View, { style: {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }, children: (0, jsx_runtime_1.jsx)(react_native_1.ActivityIndicator, { color: props.color || "white" }) }))] }));
}
