"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = UserMention;
var jsx_runtime_1 = require("react/jsx-runtime");
var vector_icons_1 = require("@expo/vector-icons");
var native_1 = require("@react-navigation/native");
var react_native_1 = require("react-native");
var UserAvatar_1 = __importDefault(require("./UserAvatar"));
function UserMention(_a) {
    var user = _a.user;
    var themeColors = (0, native_1.useTheme)().colors;
    return ((0, jsx_runtime_1.jsxs)(react_native_1.View, { style: {
            flexDirection: "row",
            alignItems: "center",
            gap: user.admin ? 5 : 10,
        }, children: [(0, jsx_runtime_1.jsx)(UserAvatar_1.default, { user: user }), user.admin && (0, jsx_runtime_1.jsx)(vector_icons_1.Ionicons, { name: "flash", color: "#f1c40f", size: 15 }), (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: { color: themeColors.text }, children: user.name })] }));
}
