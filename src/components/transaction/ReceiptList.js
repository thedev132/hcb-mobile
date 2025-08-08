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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZoomAndFadeIn = ZoomAndFadeIn;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_native_action_sheet_1 = require("@expo/react-native-action-sheet");
var vector_icons_1 = require("@expo/vector-icons");
var native_1 = require("@react-navigation/native");
var hackclub_icons_rn_1 = __importDefault(require("@thedev132/hackclub-icons-rn"));
var date_fns_1 = require("date-fns");
var expo_image_1 = require("expo-image");
var react_1 = require("react");
var react_native_1 = require("react-native");
var react_native_alert_notification_1 = require("react-native-alert-notification");
var react_native_reanimated_1 = __importStar(require("react-native-reanimated"));
var swr_1 = __importDefault(require("swr"));
var alertUtils_1 = require("../../lib/alertUtils");
var client_1 = __importDefault(require("../../lib/client"));
var errorUtils_1 = require("../../lib/errorUtils");
var useColorScheme_1 = require("../../lib/useColorScheme");
var useOffline_1 = require("../../lib/useOffline");
var theme_1 = require("../../theme");
var ReceiptActionSheet_1 = require("../ReceiptActionSheet");
var ReceiptViewerModal_1 = __importDefault(require("../ReceiptViewerModal"));
function ZoomAndFadeIn() {
    "worklet";
    var animations = {
        opacity: (0, react_native_reanimated_1.withTiming)(1, { duration: 300 }),
        transform: [
            {
                scale: (0, react_native_reanimated_1.withTiming)(1, {
                    duration: 500,
                    easing: react_native_reanimated_1.Easing.out(react_native_reanimated_1.Easing.back(2)),
                }),
            },
        ],
    };
    var initialValues = {
        opacity: 0,
        transform: [{ scale: 0.5 }],
    };
    return {
        initialValues: initialValues,
        animations: animations,
    };
}
var transition = react_native_reanimated_1.Layout.duration(300).easing(react_native_reanimated_1.Easing.out(react_native_reanimated_1.Easing.quad));
function ReceiptList(_a) {
    var _this = this;
    var _b, _c, _d;
    var transaction = _a.transaction;
    var params = (0, native_1.useRoute)().params;
    var orgId = params.orgId ||
        ((_d = (_c = (_b = transaction.card_charge) === null || _b === void 0 ? void 0 : _b.card) === null || _c === void 0 ? void 0 : _c.organization) === null || _d === void 0 ? void 0 : _d.id) ||
        "";
    var _e = (0, swr_1.default)("organizations/".concat(orgId, "/transactions/").concat(transaction.id, "/receipts")), receipts = _e.data, isLoading = _e.isLoading, mutate = _e.mutate;
    var themeColors = (0, native_1.useTheme)().colors;
    var _f = (0, react_1.useState)(false), isImageViewerVisible = _f[0], setIsImageViewerVisible = _f[1];
    var _g = (0, react_1.useState)(null), selectedReceipt = _g[0], setSelectedReceipt = _g[1];
    var _h = (0, react_1.useState)(null), deletingReceiptId = _h[0], setDeletingReceiptId = _h[1];
    var hcb = (0, client_1.default)();
    var isDark = (0, useColorScheme_1.useIsDark)();
    var _j = (0, useOffline_1.useOffline)(), isOnline = _j.isOnline, withOfflineCheck = _j.withOfflineCheck;
    var _k = (0, ReceiptActionSheet_1.useReceiptActionSheet)({
        orgId: orgId,
        transactionId: transaction.id,
        onUploadComplete: mutate,
    }), handleActionSheet = _k.handleActionSheet, actionSheetIsOnline = _k.isOnline;
    var handleDeleteReceipt = withOfflineCheck(function (receipt) { return __awaiter(_this, void 0, void 0, function () {
        var _this = this;
        return __generator(this, function (_a) {
            (0, alertUtils_1.showAlert)("Delete Receipt", "Are you sure you want to delete this receipt? This action cannot be undone.", [
                {
                    text: "Cancel",
                    style: "cancel",
                },
                {
                    text: "Delete",
                    style: "destructive",
                    onPress: function () { return __awaiter(_this, void 0, void 0, function () {
                        var error_1;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    _a.trys.push([0, 2, 3, 4]);
                                    setDeletingReceiptId(receipt.id);
                                    return [4 /*yield*/, hcb.delete("receipts/".concat(receipt.id.replace("rct_", "")))];
                                case 1:
                                    _a.sent();
                                    react_native_alert_notification_1.Toast.show({
                                        type: react_native_alert_notification_1.ALERT_TYPE.SUCCESS,
                                        title: "Receipt Deleted",
                                        textBody: "The receipt has been successfully deleted.",
                                    });
                                    // Refresh the receipts list
                                    mutate();
                                    return [3 /*break*/, 4];
                                case 2:
                                    error_1 = _a.sent();
                                    (0, errorUtils_1.logCriticalError)("Error deleting receipt", error_1, {
                                        receiptId: receipt.id,
                                    });
                                    react_native_alert_notification_1.Toast.show({
                                        type: react_native_alert_notification_1.ALERT_TYPE.DANGER,
                                        title: "Delete Failed",
                                        textBody: "Failed to delete receipt. Please try again later.",
                                    });
                                    return [3 /*break*/, 4];
                                case 3:
                                    setDeletingReceiptId(null);
                                    return [7 /*endfinally*/];
                                case 4: return [2 /*return*/];
                            }
                        });
                    }); },
                },
            ]);
            return [2 /*return*/];
        });
    }); });
    return ((0, jsx_runtime_1.jsxs)(react_native_1.View, { style: { marginBottom: 30 }, children: [(0, jsx_runtime_1.jsx)(react_native_1.Text, { style: {
                    color: theme_1.palette.muted,
                    fontSize: 12,
                    textTransform: "uppercase",
                    marginBottom: 10,
                }, children: "Receipts" }), (0, jsx_runtime_1.jsxs)(react_native_1.View, { style: {
                    display: "flex",
                    flexDirection: "row",
                    gap: 20,
                    flexWrap: "wrap",
                }, children: [receipts === null || receipts === void 0 ? void 0 : receipts.map(function (receipt) { return ((0, jsx_runtime_1.jsx)(react_native_1.TouchableOpacity, { onPress: function () {
                            setSelectedReceipt(receipt);
                            setIsImageViewerVisible(true);
                        }, children: (0, jsx_runtime_1.jsxs)(react_native_reanimated_1.default.View, { entering: ZoomAndFadeIn, children: [(0, jsx_runtime_1.jsxs)(react_native_1.View, { style: { position: "relative" }, children: [receipt.preview_url ? ((0, jsx_runtime_1.jsx)(expo_image_1.Image, { source: { uri: receipt.preview_url }, style: {
                                                width: 150,
                                                height: 200,
                                                backgroundColor: themeColors.card,
                                                borderRadius: 8,
                                            } })) : ((0, jsx_runtime_1.jsx)(react_native_1.View, { style: {
                                                width: 150,
                                                height: 200,
                                                backgroundColor: themeColors.card,
                                                borderRadius: 8,
                                                justifyContent: "center",
                                                alignItems: "center",
                                            }, children: (0, jsx_runtime_1.jsx)(hackclub_icons_rn_1.default, { glyph: "photo", size: 52, color: theme_1.palette.muted }) })), (0, jsx_runtime_1.jsx)(react_native_1.TouchableOpacity, { style: {
                                                position: "absolute",
                                                top: 6,
                                                right: 6,
                                                padding: 4,
                                                backgroundClip: "padding-box",
                                                borderRadius: 100,
                                                backgroundColor: isDark ? "#26181F" : "#ECE0E2",
                                                opacity: 0.8,
                                            }, onPress: function () { return handleDeleteReceipt(receipt); }, disabled: deletingReceiptId === receipt.id || !isOnline, children: deletingReceiptId === receipt.id ? ((0, jsx_runtime_1.jsx)(react_native_1.ActivityIndicator, { size: 20, color: "red" })) : ((0, jsx_runtime_1.jsx)(hackclub_icons_rn_1.default, { glyph: "view-close", size: 20, color: "red" })) })] }), (0, jsx_runtime_1.jsxs)(react_native_1.Text, { style: { color: theme_1.palette.muted, fontSize: 12, marginTop: 5 }, children: ["Added ", (0, date_fns_1.formatDistanceToNowStrict)((0, date_fns_1.parseISO)(receipt.created_at)), " ", "ago"] })] }, receipt.id) }, receipt.id)); }), (0, jsx_runtime_1.jsx)(ReceiptViewerModal_1.default, { receipt: selectedReceipt, visible: isImageViewerVisible, onRequestClose: function () {
                            setIsImageViewerVisible(false);
                            setSelectedReceipt(null);
                        } }), (0, jsx_runtime_1.jsx)(react_native_1.TouchableOpacity, { onPress: handleActionSheet, disabled: !actionSheetIsOnline, children: (0, jsx_runtime_1.jsx)(react_native_reanimated_1.default.View, { style: {
                                width: 150,
                                height: 200,
                                borderRadius: 8,
                                backgroundColor: themeColors.card,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                opacity: actionSheetIsOnline ? 1 : 0.7,
                            }, layout: transition, children: isLoading && !transaction.missing_receipt ? ((0, jsx_runtime_1.jsx)(react_native_1.ActivityIndicator, { color: theme_1.palette.muted })) : ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(vector_icons_1.Ionicons, { name: "add-circle-outline", color: theme_1.palette.muted, size: 36 }), (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: { color: theme_1.palette.muted, marginTop: 10 }, children: "Add Receipt" })] })) }) })] })] }));
}
var connectedApp = (0, react_native_action_sheet_1.connectActionSheet)(ReceiptList);
exports.default = connectedApp;
