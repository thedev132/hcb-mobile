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
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CardSkeleton;
var jsx_runtime_1 = require("react/jsx-runtime");
var native_1 = require("@react-navigation/native");
var react_1 = require("react");
var react_native_1 = require("react-native");
function CardSkeleton() {
    var themeColors = (0, native_1.useTheme)().colors;
    var skeletonAnim = (0, react_1.useRef)(new react_native_1.Animated.Value(0)).current;
    (0, react_1.useEffect)(function () {
        // Create skeleton loading animation
        react_native_1.Animated.loop(react_native_1.Animated.sequence([
            react_native_1.Animated.timing(skeletonAnim, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: false,
            }),
            react_native_1.Animated.timing(skeletonAnim, {
                toValue: 0,
                duration: 1000,
                useNativeDriver: false,
            }),
        ])).start();
    }, [skeletonAnim]);
    // Create the interpolated background color for skeleton animation
    var skeletonBackground = skeletonAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ["rgba(0, 0, 0, 0.03)", "rgba(0, 0, 0, 0.12)"],
    });
    // Create a shared skeleton style for reuse
    var createSkeletonStyle = function (width, height, extraStyles) {
        if (extraStyles === void 0) { extraStyles = {}; }
        return (__assign({ width: width, height: height, backgroundColor: skeletonBackground, borderRadius: 8, overflow: "hidden" }, extraStyles));
    };
    return ((0, jsx_runtime_1.jsxs)(react_native_1.View, { style: { flex: 1, padding: 20 }, children: [(0, jsx_runtime_1.jsx)(react_native_1.Animated.View, { style: {
                    height: 200,
                    borderRadius: 16,
                    marginBottom: 20,
                    backgroundColor: skeletonBackground,
                    overflow: "hidden",
                }, children: (0, jsx_runtime_1.jsxs)(react_native_1.View, { style: {
                        position: "absolute",
                        bottom: 20,
                        left: 20,
                        width: "70%",
                    }, children: [(0, jsx_runtime_1.jsx)(react_native_1.Animated.View, { style: createSkeletonStyle(120, 16, { marginBottom: 10 }) }), (0, jsx_runtime_1.jsx)(react_native_1.Animated.View, { style: createSkeletonStyle(180, 26) })] }) }), (0, jsx_runtime_1.jsxs)(react_native_1.View, { style: {
                    marginBottom: 24,
                    padding: 20,
                    borderRadius: 15,
                    shadowColor: "#000",
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.07,
                    shadowRadius: 8,
                    elevation: 4,
                    backgroundColor: themeColors.card,
                }, children: [(0, jsx_runtime_1.jsxs)(react_native_1.View, { style: {
                            flexDirection: "row",
                            alignItems: "center",
                            marginBottom: 20,
                        }, children: [(0, jsx_runtime_1.jsx)(react_native_1.Animated.View, { style: {
                                    width: 48,
                                    height: 48,
                                    borderRadius: 24,
                                    backgroundColor: skeletonBackground,
                                    marginRight: 16,
                                } }), (0, jsx_runtime_1.jsxs)(react_native_1.View, { children: [(0, jsx_runtime_1.jsx)(react_native_1.Animated.View, { style: createSkeletonStyle(140, 20, { marginBottom: 8 }) }), (0, jsx_runtime_1.jsx)(react_native_1.Animated.View, { style: createSkeletonStyle(90, 14) })] })] }), (0, jsx_runtime_1.jsx)(react_native_1.View, { style: {
                            height: 1,
                            backgroundColor: "rgba(0, 0, 0, 0.05)",
                            marginVertical: 10,
                        } }), (0, jsx_runtime_1.jsxs)(react_native_1.View, { style: { marginTop: 16, gap: 16 }, children: [(0, jsx_runtime_1.jsxs)(react_native_1.View, { style: {
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                }, children: [(0, jsx_runtime_1.jsx)(react_native_1.Text, { style: {
                                            fontSize: 16,
                                            fontWeight: "500",
                                            color: themeColors.text,
                                        }, children: "Card number" }), (0, jsx_runtime_1.jsx)(react_native_1.Animated.View, { style: createSkeletonStyle(140, 22) })] }), (0, jsx_runtime_1.jsxs)(react_native_1.View, { style: {
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                }, children: [(0, jsx_runtime_1.jsx)(react_native_1.Text, { style: {
                                            fontSize: 16,
                                            fontWeight: "500",
                                            color: themeColors.text,
                                        }, children: "Expires" }), (0, jsx_runtime_1.jsx)(react_native_1.Animated.View, { style: createSkeletonStyle(70, 22) })] }), (0, jsx_runtime_1.jsxs)(react_native_1.View, { style: {
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                }, children: [(0, jsx_runtime_1.jsx)(react_native_1.Text, { style: {
                                            fontSize: 16,
                                            fontWeight: "500",
                                            color: themeColors.text,
                                        }, children: "CVC" }), (0, jsx_runtime_1.jsx)(react_native_1.Animated.View, { style: createSkeletonStyle(50, 22) })] })] })] }), (0, jsx_runtime_1.jsxs)(react_native_1.View, { style: {
                    marginBottom: 28,
                    flexDirection: "row",
                    justifyContent: "center",
                    gap: 16,
                }, children: [(0, jsx_runtime_1.jsx)(react_native_1.Animated.View, { style: {
                            flexBasis: 0,
                            flexGrow: 1,
                            height: 50,
                            backgroundColor: skeletonBackground,
                            borderRadius: 12,
                        } }), (0, jsx_runtime_1.jsx)(react_native_1.Animated.View, { style: {
                            flexBasis: 0,
                            flexGrow: 1,
                            height: 50,
                            backgroundColor: skeletonBackground,
                            borderRadius: 12,
                        } })] }), (0, jsx_runtime_1.jsxs)(react_native_1.View, { style: { marginBottom: 20 }, children: [(0, jsx_runtime_1.jsxs)(react_native_1.View, { style: {
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginBottom: 16,
                        }, children: [(0, jsx_runtime_1.jsx)(react_native_1.Animated.View, { style: createSkeletonStyle(160, 22) }), (0, jsx_runtime_1.jsx)(react_native_1.Animated.View, { style: createSkeletonStyle(80, 22) })] }), (0, jsx_runtime_1.jsx)(react_native_1.View, { style: { gap: 12 }, children: [1, 2, 3].map(function (_, index) { return ((0, jsx_runtime_1.jsxs)(react_native_1.View, { style: {
                                flexDirection: "row",
                                backgroundColor: "rgba(0, 0, 0, 0.02)",
                                padding: 16,
                                borderRadius: 12,
                            }, children: [(0, jsx_runtime_1.jsx)(react_native_1.Animated.View, { style: {
                                        width: 40,
                                        height: 40,
                                        borderRadius: 20,
                                        backgroundColor: skeletonBackground,
                                        marginRight: 16,
                                    } }), (0, jsx_runtime_1.jsxs)(react_native_1.View, { style: { flex: 1 }, children: [(0, jsx_runtime_1.jsxs)(react_native_1.View, { style: {
                                                flexDirection: "row",
                                                justifyContent: "space-between",
                                                marginBottom: 6,
                                            }, children: [(0, jsx_runtime_1.jsx)(react_native_1.Animated.View, { style: createSkeletonStyle(120, 16) }), (0, jsx_runtime_1.jsx)(react_native_1.Animated.View, { style: createSkeletonStyle(70, 16) })] }), (0, jsx_runtime_1.jsx)(react_native_1.Animated.View, { style: createSkeletonStyle(100, 12) })] })] }, index)); }) })] })] }));
}
