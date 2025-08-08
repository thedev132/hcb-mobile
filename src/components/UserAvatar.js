"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = UserAvatar;
var jsx_runtime_1 = require("react/jsx-runtime");
var expo_image_1 = require("expo-image");
var react_native_1 = require("react-native");
var userUtils_1 = require("../lib/userUtils");
function UserAvatar(_a) {
    var user = _a.user, _b = _a.size, size = _b === void 0 ? 25 : _b, style = _a.style;
    if (user.avatar) {
        return ((0, jsx_runtime_1.jsx)(expo_image_1.Image, { source: user.avatar, placeholder: require("../../assets/placeholder.png"), cachePolicy: "disk", style: react_native_1.StyleSheet.compose({ width: size, height: size, borderRadius: 400 }, style) }));
    }
    else {
        return ((0, jsx_runtime_1.jsx)(react_native_1.View, { style: react_native_1.StyleSheet.compose({
                width: size,
                height: size,
                backgroundColor: (0, userUtils_1.userColor)(user.id),
                borderRadius: 999,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }, style), children: (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: { color: "white", fontSize: size * 0.5 }, children: (0, userUtils_1.userInitials)(user.name) }) }));
    }
}
