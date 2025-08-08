"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = DeepLinkingSettings;
var jsx_runtime_1 = require("react/jsx-runtime");
var native_1 = require("@react-navigation/native");
var react_native_1 = require("react-native");
var LinkingContext_1 = require("../../LinkingContext");
var theme_1 = require("../../theme");
function DeepLinkingSettings() {
    var _a = (0, LinkingContext_1.useLinkingPref)(), enabled = _a.enabled, setEnabled = _a.setEnabled;
    var colors = (0, native_1.useTheme)().colors;
    return ((0, jsx_runtime_1.jsx)(react_native_1.View, { style: { backgroundColor: colors.background, padding: 32 }, children: (0, jsx_runtime_1.jsx)(react_native_1.View, { style: { width: "100%" }, children: (0, jsx_runtime_1.jsxs)(react_native_1.View, { style: {
                    width: "100%",
                    backgroundColor: colors.card,
                    padding: 20,
                    borderRadius: 16,
                    shadowColor: "#000",
                    shadowOffset: { width: 0, height: 4 },
                    shadowOpacity: 0.18,
                    shadowRadius: 6.0,
                    elevation: 6,
                    marginVertical: 16,
                }, children: [(0, jsx_runtime_1.jsxs)(react_native_1.View, { style: {
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",
                            marginBottom: 12,
                        }, children: [(0, jsx_runtime_1.jsx)(react_native_1.Text, { style: {
                                    color: theme_1.palette.primary,
                                    fontSize: 18,
                                    fontWeight: "600",
                                    letterSpacing: 0.2,
                                }, children: "Open links in app" }), enabled === null ? ((0, jsx_runtime_1.jsx)(react_native_1.ActivityIndicator, { size: "small", color: theme_1.palette.primary })) : ((0, jsx_runtime_1.jsx)(react_native_1.Switch, { trackColor: { false: "#767577", true: theme_1.palette.primary }, thumbColor: "#f4f3f4", ios_backgroundColor: "#3e3e3e", onValueChange: function () { return setEnabled(!enabled); }, value: enabled }))] }), (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: {
                            color: "#888",
                            fontSize: 14,
                            marginTop: 8,
                            lineHeight: 20,
                        }, children: "Deep links allow you to open supported links directly inside this app, instead of your browser. When enabled, tapping a compatible link will take you straight to the relevant screen here." })] }) }) }));
}
