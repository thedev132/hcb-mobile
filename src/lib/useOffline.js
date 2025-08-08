"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useOffline = useOffline;
var netinfo_1 = __importDefault(require("@react-native-community/netinfo"));
var react_1 = require("react");
var react_native_alert_notification_1 = require("react-native-alert-notification");
function useOffline() {
    var _a = (0, react_1.useState)(true), isOnline = _a[0], setIsOnline = _a[1];
    (0, react_1.useEffect)(function () {
        var unsubscribe = netinfo_1.default.addEventListener(function (state) {
            var _a;
            setIsOnline((_a = state.isConnected) !== null && _a !== void 0 ? _a : false);
        });
        return function () {
            unsubscribe();
        };
    }, []);
    var showOfflineAlert = function () {
        react_native_alert_notification_1.Toast.show({
            type: react_native_alert_notification_1.ALERT_TYPE.WARNING,
            title: "Offline Mode",
            textBody: "This action requires an internet connection.",
        });
    };
    var withOfflineCheck = function (action, showAlert) {
        if (showAlert === void 0) { showAlert = true; }
        return (function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (!isOnline) {
                if (showAlert) {
                    showOfflineAlert();
                }
                return;
            }
            return action.apply(void 0, args);
        });
    };
    return {
        isOnline: isOnline,
        showOfflineAlert: showOfflineAlert,
        withOfflineCheck: withOfflineCheck,
    };
}
