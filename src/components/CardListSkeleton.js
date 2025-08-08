"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CardListSkeleton;
var jsx_runtime_1 = require("react/jsx-runtime");
var native_1 = require("@react-navigation/native");
var react_1 = require("react");
var react_native_1 = require("react-native");
function CardListSkeleton() {
    var themeColors = (0, native_1.useTheme)().colors;
    var width = (0, react_native_1.useWindowDimensions)().width;
    var shimmerAnim = (0, react_1.useRef)(new react_native_1.Animated.Value(0)).current;
    (0, react_1.useEffect)(function () {
        react_native_1.Animated.loop(react_native_1.Animated.sequence([
            react_native_1.Animated.timing(shimmerAnim, {
                toValue: 1,
                duration: 2000,
                useNativeDriver: true,
            }),
            react_native_1.Animated.timing(shimmerAnim, {
                toValue: 0,
                duration: 2000,
                useNativeDriver: true,
            }),
        ])).start();
    }, []);
    var shimmerOpacity = shimmerAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [0.6, 0.8],
    });
    var cardWidth = width * 0.86;
    var cardHeight = cardWidth / 1.588;
    return ((0, jsx_runtime_1.jsx)(react_native_1.View, { style: { flex: 1, padding: 20 }, children: [1, 2, 3].map(function (index) { return ((0, jsx_runtime_1.jsx)(react_native_1.View, { style: {
                width: cardWidth,
                height: cardHeight,
                borderRadius: 15,
                marginBottom: 16,
                backgroundColor: themeColors.border,
                overflow: "hidden",
                padding: 30,
                justifyContent: "flex-end",
            }, children: (0, jsx_runtime_1.jsxs)(react_native_1.View, { style: { gap: 10 }, children: [(0, jsx_runtime_1.jsx)(react_native_1.Animated.View, { style: {
                            width: 180,
                            height: 18,
                            backgroundColor: themeColors.card,
                            borderRadius: 4,
                            opacity: shimmerOpacity,
                        } }), (0, jsx_runtime_1.jsxs)(react_native_1.View, { style: { flexDirection: "row", alignItems: "center", gap: 10 }, children: [(0, jsx_runtime_1.jsx)(react_native_1.Animated.View, { style: {
                                    width: 180,
                                    height: 18,
                                    backgroundColor: themeColors.card,
                                    borderRadius: 4,
                                    opacity: shimmerOpacity,
                                } }), (0, jsx_runtime_1.jsx)(react_native_1.Animated.View, { style: {
                                    width: 80,
                                    height: 20,
                                    backgroundColor: themeColors.card,
                                    borderRadius: 15,
                                    position: "absolute",
                                    right: 0,
                                    opacity: shimmerOpacity,
                                } })] })] }) }, index)); }) }));
}
