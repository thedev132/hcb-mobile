"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ReceiptViewerModal;
var jsx_runtime_1 = require("react/jsx-runtime");
var vector_icons_1 = require("@expo/vector-icons");
var react_1 = require("react");
var react_native_1 = require("react-native");
var react_native_image_viewing_1 = __importDefault(require("react-native-image-viewing"));
var react_native_safe_area_context_1 = require("react-native-safe-area-context");
var react_native_webview_1 = require("react-native-webview");
var theme_1 = require("../theme");
function ReceiptViewerModal(_a) {
    var receipt = _a.receipt, visible = _a.visible, onRequestClose = _a.onRequestClose;
    var _b = (0, react_1.useState)(true), webViewLoading = _b[0], setWebViewLoading = _b[1];
    var insets = (0, react_native_safe_area_context_1.useSafeAreaInsets)();
    if (!receipt) {
        return null;
    }
    var isImage = /\.(jpeg|jpg|png|gif|webp|bmp|tiff)$/i.test(receipt.url || "");
    if (isImage) {
        return ((0, jsx_runtime_1.jsx)(react_native_image_viewing_1.default, { images: [{ uri: receipt.url }], imageIndex: 0, visible: visible, onRequestClose: onRequestClose }));
    }
    return ((0, jsx_runtime_1.jsx)(react_native_1.Modal, { visible: visible, animationType: "fade", presentationStyle: "fullScreen", onRequestClose: onRequestClose, children: (0, jsx_runtime_1.jsxs)(react_native_1.View, { style: {
                flex: 1,
                backgroundColor: theme_1.palette.background,
                paddingTop: insets.top,
            }, children: [(0, jsx_runtime_1.jsxs)(react_native_1.View, { style: {
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        paddingHorizontal: 20,
                        paddingVertical: 15,
                    }, children: [(0, jsx_runtime_1.jsx)(react_native_1.TouchableOpacity, { onPress: onRequestClose, children: (0, jsx_runtime_1.jsx)(vector_icons_1.Ionicons, { name: "close", size: 28, color: "white" }) }), (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: {
                                color: "white",
                                fontSize: 16,
                                fontWeight: "500",
                                flex: 1,
                                textAlign: "center",
                                marginHorizontal: 10,
                            }, numberOfLines: 1, ellipsizeMode: "middle", children: receipt.filename }), (0, jsx_runtime_1.jsx)(react_native_1.View, { style: { width: 28 } })] }), (0, jsx_runtime_1.jsxs)(react_native_1.View, { style: { flex: 1, backgroundColor: "white" }, children: [webViewLoading && ((0, jsx_runtime_1.jsxs)(react_native_1.View, { style: {
                                position: "absolute",
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                justifyContent: "center",
                                alignItems: "center",
                                backgroundColor: "white",
                                zIndex: 1,
                            }, children: [(0, jsx_runtime_1.jsx)(react_native_1.ActivityIndicator, { size: "large", color: theme_1.palette.primary }), (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: {
                                        marginTop: 10,
                                        color: theme_1.palette.muted,
                                        fontSize: 16,
                                    }, children: "Loading receipt..." })] })), (0, jsx_runtime_1.jsx)(react_native_webview_1.WebView, { source: { uri: receipt.url }, style: { flex: 1 }, onLoadStart: function () { return setWebViewLoading(true); }, onLoadEnd: function () { return setWebViewLoading(false); }, onError: function () { return setWebViewLoading(false); }, startInLoadingState: true, scalesPageToFit: true, showsVerticalScrollIndicator: true, showsHorizontalScrollIndicator: true })] })] }) }));
}
