"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomAlert = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var useColorScheme_1 = require("../lib/useColorScheme");
var width = react_native_1.Dimensions.get("window").width;
var CustomAlert = function (_a) {
    var visible = _a.visible, title = _a.title, message = _a.message, _b = _a.buttons, buttons = _b === void 0 ? [{ text: "OK" }] : _b, onDismiss = _a.onDismiss;
    var isDark = (0, useColorScheme_1.useIsDark)();
    var handleButtonPress = function (button) {
        if (button.onPress) {
            button.onPress();
        }
        onDismiss === null || onDismiss === void 0 ? void 0 : onDismiss();
    };
    var getButtonStyle = function (style) {
        switch (style) {
            case "destructive":
                return [styles.button, styles.destructiveButton];
            case "cancel":
                return [styles.button, styles.cancelButton];
            default:
                return [styles.button, styles.defaultButton];
        }
    };
    var getButtonTextStyle = function (style) {
        switch (style) {
            case "destructive":
                return [styles.buttonText, styles.destructiveText];
            case "cancel":
                return [styles.buttonText, styles.cancelText];
            default:
                return [styles.buttonText, styles.defaultText];
        }
    };
    return ((0, jsx_runtime_1.jsx)(react_native_1.Modal, { visible: visible, transparent: true, animationType: "fade", onRequestClose: onDismiss, children: (0, jsx_runtime_1.jsx)(react_native_1.View, { style: styles.overlay, children: (0, jsx_runtime_1.jsxs)(react_native_1.View, { style: [
                    styles.alertContainer,
                    { backgroundColor: isDark ? "#2c2c2e" : "#ffffff" },
                ], children: [title && ((0, jsx_runtime_1.jsx)(react_native_1.Text, { style: [styles.title, { color: isDark ? "#ffffff" : "#000000" }], children: title })), message && ((0, jsx_runtime_1.jsx)(react_native_1.Text, { style: [
                            styles.message,
                            { color: isDark ? "#ffffff" : "#000000" },
                        ], children: message })), (0, jsx_runtime_1.jsx)(react_native_1.View, { style: styles.buttonContainer, children: buttons.map(function (button, index) { return ((0, jsx_runtime_1.jsx)(react_native_1.TouchableOpacity, { style: getButtonStyle(button.style), onPress: function () { return handleButtonPress(button); }, activeOpacity: 0.7, children: (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: getButtonTextStyle(button.style), children: button.text }) }, index)); }) })] }) }) }));
};
exports.CustomAlert = CustomAlert;
var styles = react_native_1.StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        justifyContent: "center",
        alignItems: "center",
    },
    alertContainer: {
        width: width * 0.8,
        maxWidth: 300,
        borderRadius: 13,
        padding: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    title: {
        fontSize: 17,
        fontWeight: "600",
        textAlign: "center",
        marginBottom: 8,
    },
    message: {
        fontSize: 13,
        textAlign: "center",
        marginBottom: 20,
        lineHeight: 18,
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
    },
    button: {
        flex: 1,
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius: 6,
        marginHorizontal: 4,
    },
    defaultButton: {
        backgroundColor: "#007AFF",
    },
    cancelButton: {
        backgroundColor: "transparent",
    },
    destructiveButton: {
        backgroundColor: "#FF3B30",
    },
    buttonText: {
        fontSize: 17,
        fontWeight: "600",
        textAlign: "center",
    },
    defaultText: {
        color: "#ffffff",
    },
    cancelText: {
        color: "#ffffff",
    },
    destructiveText: {
        color: "#ffffff",
    },
});
