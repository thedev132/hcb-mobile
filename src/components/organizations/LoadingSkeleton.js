"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadingSkeleton = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var native_1 = require("@react-navigation/native");
var react_native_1 = require("react-native");
var LoadingSkeleton = function () {
    var themeColors = (0, native_1.useTheme)().colors;
    return ((0, jsx_runtime_1.jsx)(react_native_1.View, { style: { flex: 1, backgroundColor: themeColors.background }, children: [1, 2, 3, 4, 5].map(function (section) { return ((0, jsx_runtime_1.jsxs)(react_native_1.View, { style: { marginBottom: 24 }, children: [(0, jsx_runtime_1.jsx)(react_native_1.View, { style: {
                        height: 14,
                        backgroundColor: themeColors.border,
                        borderRadius: 4,
                        width: "25%",
                        marginBottom: 12,
                        marginLeft: 10,
                    } }), [1, 2].map(function (item) { return ((0, jsx_runtime_1.jsxs)(react_native_1.View, { style: {
                        marginBottom: 1,
                        backgroundColor: themeColors.card,
                        padding: 10,
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 10,
                        borderRadius: item === 1 ? 8 : 0,
                        borderBottomLeftRadius: item === 2 ? 8 : 0,
                        borderBottomRightRadius: item === 2 ? 8 : 0,
                        borderTopLeftRadius: item === 1 ? 8 : 0,
                        borderTopRightRadius: item === 1 ? 8 : 0,
                    }, children: [(0, jsx_runtime_1.jsx)(react_native_1.View, { style: {
                                width: 20,
                                height: 20,
                                backgroundColor: themeColors.border,
                                borderRadius: 10,
                            } }), (0, jsx_runtime_1.jsx)(react_native_1.View, { style: { flex: 1 }, children: (0, jsx_runtime_1.jsx)(react_native_1.View, { style: {
                                    height: 14,
                                    backgroundColor: themeColors.border,
                                    borderRadius: 4,
                                    width: "80%",
                                } }) }), (0, jsx_runtime_1.jsx)(react_native_1.View, { style: {
                                height: 14,
                                backgroundColor: themeColors.border,
                                borderRadius: 4,
                                width: "15%",
                            } })] }, item)); })] }, section)); }) }));
};
exports.LoadingSkeleton = LoadingSkeleton;
