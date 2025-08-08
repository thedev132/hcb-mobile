"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = OrganizationTitle;
var jsx_runtime_1 = require("react/jsx-runtime");
var native_1 = require("@react-navigation/native");
var expo_image_1 = require("expo-image");
var react_native_1 = require("react-native");
function OrganizationTitle(_a) {
    var organization = _a.organization;
    var themeColors = (0, native_1.useTheme)().colors;
    return ((0, jsx_runtime_1.jsxs)(react_native_1.View, { style: { flexDirection: "row", alignItems: "center" }, children: [(organization === null || organization === void 0 ? void 0 : organization.icon) && ((0, jsx_runtime_1.jsx)(expo_image_1.Image, { source: { uri: organization.icon }, cachePolicy: "disk", style: { width: 25, height: 25, marginRight: 10, borderRadius: 4 } })), (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: {
                    color: themeColors.text,
                    fontWeight: "600",
                    fontSize: 17,
                }, children: (organization === null || organization === void 0 ? void 0 : organization.name) || "Loading..." })] }));
}
