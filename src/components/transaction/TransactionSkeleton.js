"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TransactionSkeleton;
var jsx_runtime_1 = require("react/jsx-runtime");
var bottom_tabs_1 = require("@react-navigation/bottom-tabs");
var native_1 = require("@react-navigation/native");
var react_1 = require("react");
var react_native_1 = require("react-native");
function SkeletonBox(_a) {
    var style = _a.style;
    var themeColors = (0, native_1.useTheme)().colors;
    var opacity = (0, react_1.useRef)(new react_native_1.Animated.Value(0.3)).current;
    (0, react_1.useEffect)(function () {
        var animation = react_native_1.Animated.loop(react_native_1.Animated.sequence([
            react_native_1.Animated.timing(opacity, {
                toValue: 0.7,
                duration: 800,
                useNativeDriver: true,
            }),
            react_native_1.Animated.timing(opacity, {
                toValue: 0.3,
                duration: 800,
                useNativeDriver: true,
            }),
        ]));
        animation.start();
        return function () { return animation.stop(); };
    }, []);
    return ((0, jsx_runtime_1.jsx)(react_native_1.Animated.View, { style: [
            {
                backgroundColor: themeColors.card,
                opacity: opacity,
                borderRadius: 8,
            },
            style,
        ] }));
}
function TransactionSkeleton() {
    var tabBarHeight = (0, bottom_tabs_1.useBottomTabBarHeight)();
    var themeColors = (0, native_1.useTheme)().colors;
    return ((0, jsx_runtime_1.jsxs)(react_native_1.ScrollView, { contentContainerStyle: { padding: 20, paddingBottom: tabBarHeight + 20 }, scrollIndicatorInsets: { bottom: tabBarHeight - 20 }, children: [(0, jsx_runtime_1.jsx)(react_native_1.View, { style: { marginBottom: 20 }, children: (0, jsx_runtime_1.jsx)(SkeletonBox, { style: { height: 30, width: "100%" } }) }), (0, jsx_runtime_1.jsx)(react_native_1.View, { style: { alignItems: "center", marginBottom: 20 }, children: (0, jsx_runtime_1.jsx)(SkeletonBox, { style: { height: 40, width: "60%", marginBottom: 20 } }) }), (0, jsx_runtime_1.jsx)(react_native_1.View, { style: { marginBottom: 30 }, children: [1, 2, 3].map(function (index) { return ((0, jsx_runtime_1.jsxs)(react_native_1.View, { style: {
                        backgroundColor: themeColors.card,
                        padding: 10,
                        borderTopLeftRadius: index === 1 ? 8 : 0,
                        borderTopRightRadius: index === 1 ? 8 : 0,
                        borderBottomLeftRadius: index === 3 ? 8 : 0,
                        borderBottomRightRadius: index === 3 ? 8 : 0,
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }, children: [(0, jsx_runtime_1.jsx)(SkeletonBox, { style: { height: 20, width: "30%" } }), (0, jsx_runtime_1.jsx)(SkeletonBox, { style: { height: 20, width: "50%" } })] }, index)); }) }), (0, jsx_runtime_1.jsx)(react_native_1.View, { style: { gap: 20 }, children: [1, 2].map(function (index) { return ((0, jsx_runtime_1.jsxs)(react_native_1.View, { style: { gap: 10 }, children: [(0, jsx_runtime_1.jsx)(SkeletonBox, { style: { height: 20, width: "40%" } }), (0, jsx_runtime_1.jsx)(SkeletonBox, { style: { height: 40, width: "100%" } })] }, index)); }) })] }));
}
