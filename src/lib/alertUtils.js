"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.showDestructiveAlert = exports.showConfirmAlert = exports.showOKAlert = exports.showAlertUniversal = exports.setGlobalCustomAlert = exports.showAlert = void 0;
var react_native_1 = require("react-native");
var showAlert = function (title, message, buttons, onDismiss) {
    if (react_native_1.Platform.OS === "ios") {
        react_native_1.Alert.alert(title || "", message || "", buttons, { cancelable: true });
    }
    else {
        (0, exports.showAlertUniversal)(title, message, buttons, onDismiss);
    }
};
exports.showAlert = showAlert;
var globalCustomAlert = null;
var setGlobalCustomAlert = function (alertFn) {
    globalCustomAlert = alertFn;
};
exports.setGlobalCustomAlert = setGlobalCustomAlert;
var showAlertUniversal = function (title, message, buttons, onDismiss) {
    if (react_native_1.Platform.OS === "ios") {
        react_native_1.Alert.alert(title || "", message || "", buttons, { cancelable: true });
    }
    else {
        if (globalCustomAlert) {
            globalCustomAlert(title, message, buttons, onDismiss);
        }
        else {
            console.warn("Custom alert not available. Make sure CustomAlertProvider is set up.");
        }
    }
};
exports.showAlertUniversal = showAlertUniversal;
var showOKAlert = function (title, message) {
    (0, exports.showAlertUniversal)(title, message, [{ text: "OK" }]);
};
exports.showOKAlert = showOKAlert;
var showConfirmAlert = function (title, message, onConfirm, onCancel) {
    (0, exports.showAlertUniversal)(title, message, [
        { text: "Cancel", style: "cancel", onPress: onCancel },
        { text: "OK", onPress: onConfirm },
    ]);
};
exports.showConfirmAlert = showConfirmAlert;
var showDestructiveAlert = function (title, message, destructiveText, onConfirm, onCancel) {
    (0, exports.showAlertUniversal)(title, message, [
        { text: "Cancel", style: "cancel", onPress: onCancel },
        { text: destructiveText, style: "destructive", onPress: onConfirm },
    ]);
};
exports.showDestructiveAlert = showDestructiveAlert;
