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
exports.default = Comment;
var jsx_runtime_1 = require("react/jsx-runtime");
var native_1 = require("@react-navigation/native");
var date_fns_1 = require("date-fns");
var react_native_1 = require("react-native");
var theme_1 = require("../../theme");
var AdminTools_1 = require("../AdminTools");
var UserMention_1 = __importDefault(require("../UserMention"));
function Comment(_a) {
    var comment = _a.comment;
    var themeColors = (0, native_1.useTheme)().colors;
    return ((0, jsx_runtime_1.jsxs)(react_native_1.View, { style: comment.admin_only
            ? __assign(__assign({}, AdminTools_1.AdminToolsStyle), { marginHorizontal: -8 }) : undefined, children: [(0, jsx_runtime_1.jsxs)(react_native_1.View, { style: {
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 10,
                    marginBottom: 2,
                }, children: [(0, jsx_runtime_1.jsx)(UserMention_1.default, { user: comment.user }), (0, jsx_runtime_1.jsxs)(react_native_1.Text, { style: { color: theme_1.palette.muted }, children: [(0, date_fns_1.formatDistanceToNow)((0, date_fns_1.parseISO)(comment.created_at)), " ago"] })] }), (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: { color: themeColors.text }, selectable: true, children: comment.content })] }, comment.id));
}
