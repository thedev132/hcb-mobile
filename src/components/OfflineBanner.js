"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = OfflineBanner;
var jsx_runtime_1 = require("react/jsx-runtime");
var vector_icons_1 = require("@expo/vector-icons");
var react_native_1 = require("react-native");
var react_native_safe_area_context_1 = require("react-native-safe-area-context");
var useOffline_1 = require("../lib/useOffline");
var theme_1 = require("../utils/theme");
function OfflineBanner() {
    var insets = (0, react_native_safe_area_context_1.useSafeAreaInsets)();
    var isOnline = (0, useOffline_1.useOffline)().isOnline;
    if (isOnline)
        return null;
    return ((0, jsx_runtime_1.jsx)(react_native_1.View, { style: {
            position: "absolute",
            zIndex: 999,
            width: "100%",
            alignItems: "center",
            pointerEvents: "none",
            top: insets.top + 6,
        }, children: (0, jsx_runtime_1.jsxs)(react_native_1.View, { style: {
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: theme_1.theme.dark
                    ? theme_1.palette.darkless
                    : theme_1.lightTheme.colors.card,
                paddingVertical: 8,
                paddingHorizontal: 16,
                borderRadius: 20,
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 3,
                },
                shadowOpacity: 0.2,
                shadowRadius: 5,
                elevation: 6,
            }, children: [(0, jsx_runtime_1.jsx)(vector_icons_1.Ionicons, { name: "cloud-offline-outline", size: 18, color: theme_1.palette.primary }), (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: {
                        color: theme_1.palette.primary,
                        fontWeight: "bold",
                        marginLeft: 8,
                        fontSize: 15,
                    }, children: "Offline Mode" })] }) }));
}
