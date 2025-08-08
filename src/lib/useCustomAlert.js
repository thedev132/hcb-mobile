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
exports.useCustomAlert = void 0;
var react_1 = require("react");
var useCustomAlert = function () {
    var _a = (0, react_1.useState)({
        visible: false,
    }), alertState = _a[0], setAlertState = _a[1];
    var showAlert = (0, react_1.useCallback)(function (title, message, buttons, onDismiss) {
        setAlertState({
            visible: true,
            title: title,
            message: message,
            buttons: buttons,
            onDismiss: onDismiss,
        });
    }, []);
    var hideAlert = (0, react_1.useCallback)(function () {
        setAlertState(function (prev) { return (__assign(__assign({}, prev), { visible: false })); });
    }, []);
    var alert = (0, react_1.useCallback)(function (title, message, buttons, onDismiss) {
        showAlert(title, message, buttons, onDismiss);
    }, [showAlert]);
    return {
        alertState: alertState,
        showAlert: showAlert,
        hideAlert: hideAlert,
        alert: alert,
    };
};
exports.useCustomAlert = useCustomAlert;
