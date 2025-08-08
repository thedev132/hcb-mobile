"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomAlertProvider = exports.useCustomAlertContext = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = __importStar(require("react"));
var react_native_1 = require("react-native");
var alertUtils_1 = require("../lib/alertUtils");
var useCustomAlert_1 = require("../lib/useCustomAlert");
var CustomAlert_1 = require("./CustomAlert");
var CustomAlertContext = (0, react_1.createContext)(null);
var useCustomAlertContext = function () {
    var context = (0, react_1.useContext)(CustomAlertContext);
    if (!context) {
        throw new Error("useCustomAlertContext must be used within a CustomAlertProvider");
    }
    return context;
};
exports.useCustomAlertContext = useCustomAlertContext;
var CustomAlertProvider = function (_a) {
    var children = _a.children;
    var _b = (0, useCustomAlert_1.useCustomAlert)(), alertState = _b.alertState, alert = _b.alert, hideAlert = _b.hideAlert;
    // Register the global alert function for Android
    (0, react_1.useEffect)(function () {
        if (react_native_1.Platform.OS === "android") {
            (0, alertUtils_1.setGlobalCustomAlert)(alert);
        }
    }, [alert]);
    // Only render the provider and alert on Android
    if (react_native_1.Platform.OS === "ios") {
        return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: children });
    }
    return ((0, jsx_runtime_1.jsxs)(CustomAlertContext.Provider, { value: { alert: alert }, children: [children, (0, jsx_runtime_1.jsx)(CustomAlert_1.CustomAlert, { visible: alertState.visible, title: alertState.title, message: alertState.message, buttons: alertState.buttons, onDismiss: function () {
                    var _a;
                    (_a = alertState.onDismiss) === null || _a === void 0 ? void 0 : _a.call(alertState);
                    hideAlert();
                } })] }));
};
exports.CustomAlertProvider = CustomAlertProvider;
