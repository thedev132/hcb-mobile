"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TapToPayBanner;
var jsx_runtime_1 = require("react/jsx-runtime");
var vector_icons_1 = require("@expo/vector-icons");
var native_1 = require("@react-navigation/native");
var react_native_1 = require("react-native");
var useColorScheme_1 = require("../../lib/useColorScheme");
var theme_1 = require("../../theme");
function TapToPayBanner(_a) {
    var onDismiss = _a.onDismiss, orgId = _a.orgId;
    var isDark = (0, useColorScheme_1.useIsDark)();
    var navigation = (0, native_1.useNavigation)();
    var handlePress = function () {
        navigation.navigate("OrganizationDonation", {
            orgId: orgId,
        });
    };
    return ((0, jsx_runtime_1.jsxs)(react_native_1.View, { style: {
            backgroundColor: isDark ? "".concat(theme_1.palette.primary, "20") : theme_1.palette.primary,
            borderColor: theme_1.palette.primary,
            borderWidth: 1,
            padding: 16,
            marginBottom: 20,
            borderRadius: 12,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            shadowColor: theme_1.palette.primary,
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.1,
            shadowRadius: 4,
            elevation: 3,
        }, children: [(0, jsx_runtime_1.jsxs)(react_native_1.Pressable, { onPress: handlePress, style: { flex: 1, marginRight: 12 }, children: [(0, jsx_runtime_1.jsxs)(react_native_1.View, { style: {
                            flexDirection: "row",
                            alignItems: "center",
                            marginBottom: 6,
                        }, children: [(0, jsx_runtime_1.jsx)(vector_icons_1.Ionicons, { name: "card-outline", size: 20, color: isDark ? theme_1.palette.primary : theme_1.palette.smoke, style: { marginRight: 8 } }), (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: {
                                    color: isDark ? theme_1.palette.primary : theme_1.palette.smoke,
                                    fontWeight: "bold",
                                    fontSize: 16,
                                }, children: "Accept Payments with Tap to Pay" })] }), (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: {
                            color: isDark ? theme_1.palette.primary : theme_1.palette.smoke,
                            flex: 1,
                            textAlign: "left",
                            opacity: 0.9,
                            fontSize: 14,
                            lineHeight: 20,
                        }, children: "Turn your iPhone into a payment terminal and accept contactless payments." })] }), (0, jsx_runtime_1.jsx)(react_native_1.TouchableOpacity, { onPress: onDismiss, style: {
                    backgroundColor: isDark
                        ? "".concat(theme_1.palette.primary, "20")
                        : "".concat(theme_1.palette.smoke, "20"),
                    borderRadius: 20,
                    padding: 4,
                    marginLeft: 8,
                    zIndex: 1,
                }, children: (0, jsx_runtime_1.jsx)(vector_icons_1.Ionicons, { name: "close", size: 20, color: isDark ? theme_1.palette.primary : theme_1.palette.smoke }) })] }));
}
