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
exports.AdminToolsStyle = void 0;
exports.default = AdminTools;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_native_1 = require("react-native");
var swr_1 = __importDefault(require("swr"));
exports.AdminToolsStyle = {
    backgroundColor: "#ff8c3710",
    borderColor: "#ff8c37",
    borderStyle: "dashed",
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
};
function AdminTools(props) {
    var user = (0, swr_1.default)("user").data;
    if (!(user === null || user === void 0 ? void 0 : user.admin))
        return null;
    return ((0, jsx_runtime_1.jsx)(react_native_1.Pressable, { onPress: props.onPress, children: (0, jsx_runtime_1.jsx)(react_native_1.View, { style: __assign(__assign({}, exports.AdminToolsStyle), props.style), children: props.children }) }));
}
