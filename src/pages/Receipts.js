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
exports.default = ReceiptsPage;
var jsx_runtime_1 = require("react/jsx-runtime");
var vector_icons_1 = require("@expo/vector-icons");
var native_1 = require("@react-navigation/native");
var hackclub_icons_rn_1 = __importDefault(require("@thedev132/hackclub-icons-rn"));
var date_fns_1 = require("date-fns");
var ImagePicker = __importStar(require("expo-image-picker"));
var react_1 = require("react");
var react_native_1 = require("react-native");
var react_native_alert_notification_1 = require("react-native-alert-notification");
var react_native_reanimated_1 = __importDefault(require("react-native-reanimated"));
var react_native_safe_area_context_1 = require("react-native-safe-area-context");
var swr_1 = __importDefault(require("swr"));
var UploadIcon_1 = __importDefault(require("../components/icons/UploadIcon"));
var ReceiptActionSheet_1 = require("../components/ReceiptActionSheet");
var ReceiptViewerModal_1 = __importDefault(require("../components/ReceiptViewerModal"));
var ReceiptList_1 = require("../components/transaction/ReceiptList");
var alertUtils_1 = require("../lib/alertUtils");
var client_1 = __importDefault(require("../lib/client"));
var errorUtils_1 = require("../lib/errorUtils");
var useColorScheme_1 = require("../lib/useColorScheme");
var palette_1 = __importDefault(require("../palette"));
var theme_1 = require("../theme");
var util_1 = require("../util");
function Transaction(_a) {
    var transaction = _a.transaction, onComplete = _a.onComplete, _onUpload = _a._onUpload, onSelect = _a.onSelect;
    var themeColors = (0, native_1.useTheme)().colors;
    var _b = (0, react_1.useState)(false), loading = _b[0], setLoading = _b[1];
    var _c = (0, ReceiptActionSheet_1.useReceiptActionSheet)({
        orgId: transaction.organization.id,
        transactionId: transaction.id,
        onUploadComplete: function () {
            setLoading(false);
            onComplete();
        },
    }), handleActionSheet = _c.handleActionSheet, isOnline = _c.isOnline;
    return ((0, jsx_runtime_1.jsx)(react_native_1.View, { style: {
            backgroundColor: themeColors.card,
            borderRadius: 8,
            marginBottom: 12,
            overflow: "hidden",
        }, children: (0, jsx_runtime_1.jsxs)(react_native_1.View, { style: {
                flexDirection: "row",
                alignItems: "center",
                padding: 16,
            }, children: [(0, jsx_runtime_1.jsxs)(react_native_1.View, { style: { flex: 1 }, children: [(0, jsx_runtime_1.jsx)(react_native_1.Text, { style: {
                                color: themeColors.text,
                                fontSize: 16,
                                fontWeight: "500",
                                marginBottom: 4,
                            }, children: transaction.memo }), (0, jsx_runtime_1.jsxs)(react_native_1.View, { style: { flexDirection: "row", alignItems: "center", gap: 8 }, children: [(0, jsx_runtime_1.jsx)(react_native_1.Text, { style: { color: theme_1.palette.muted, fontSize: 14 }, children: (0, util_1.renderMoney)(Math.abs(transaction.amount_cents)) }), (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: { color: theme_1.palette.muted, fontSize: 14 }, children: "\u2022" }), (0, jsx_runtime_1.jsxs)(react_native_1.Text, { style: { color: theme_1.palette.muted, fontSize: 14 }, children: [(0, date_fns_1.formatDistanceToNow)(new Date(transaction.card_charge.spent_at)), " ", "ago"] })] })] }), (0, jsx_runtime_1.jsxs)(react_native_1.View, { style: { flexDirection: "row", gap: 12, marginLeft: 16 }, children: [(0, jsx_runtime_1.jsx)(react_native_1.TouchableOpacity, { style: {
                                backgroundColor: palette_1.default.sky["500"],
                                borderRadius: 20,
                                width: 36,
                                height: 36,
                                alignItems: "center",
                                justifyContent: "center",
                            }, onPress: handleActionSheet, disabled: !isOnline || loading, children: loading ? ((0, jsx_runtime_1.jsx)(react_native_1.ActivityIndicator, { color: "white", size: "small" })) : ((0, jsx_runtime_1.jsx)(UploadIcon_1.default, { size: 26, color: "white" })) }), (0, jsx_runtime_1.jsx)(react_native_1.TouchableOpacity, { style: {
                                backgroundColor: palette_1.default.rose["500"],
                                borderRadius: 20,
                                width: 36,
                                height: 36,
                                alignItems: "center",
                                justifyContent: "center",
                            }, onPress: function () { return onSelect(transaction); }, disabled: !isOnline || loading, children: (0, jsx_runtime_1.jsx)(hackclub_icons_rn_1.default, { glyph: "payment-docs", size: 24, color: "white" }) })] })] }) }));
}
function OrganizationSection(_a) {
    var organization = _a.organization, transactions = _a.transactions, onComplete = _a.onComplete, onUpload = _a.onUpload, onSelect = _a.onSelect;
    var themeColors = (0, native_1.useTheme)().colors;
    return ((0, jsx_runtime_1.jsxs)(react_native_1.View, { style: { marginBottom: 24 }, children: [(0, jsx_runtime_1.jsxs)(react_native_1.View, { style: {
                    flexDirection: "row",
                    alignItems: "center",
                    marginBottom: 12,
                    paddingHorizontal: 4,
                }, children: [(0, jsx_runtime_1.jsx)(react_native_1.Text, { style: {
                            fontSize: 18,
                            fontWeight: "600",
                            color: themeColors.text,
                            flex: 1,
                        }, children: organization.name }), (0, jsx_runtime_1.jsx)(react_native_1.View, { style: {
                            backgroundColor: themeColors.card,
                            paddingHorizontal: 8,
                            paddingVertical: 4,
                            borderRadius: 12,
                        }, children: (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: { color: theme_1.palette.muted, fontSize: 14 }, children: transactions.length }) })] }), transactions.map(function (transaction) { return ((0, jsx_runtime_1.jsx)(Transaction, { transaction: transaction, onComplete: onComplete, _onUpload: onUpload, onSelect: onSelect }, transaction.id)); })] }));
}
function ReceiptsPage(_a) {
    var _this = this;
    var _b;
    var navigation = _a.navigation;
    var themeColors = (0, native_1.useTheme)().colors;
    var _c = (0, swr_1.default)("user/transactions/missing_receipt"), data = _c.data, mutate = _c.mutate, isLoading = _c.isLoading;
    var _d = (0, swr_1.default)("receipts"), receipts = _d.data, refreshReceipts = _d.mutate;
    var _e = (0, react_1.useState)(null), selectedReceipt = _e[0], setSelectedReceipt = _e[1];
    var _f = (0, react_1.useState)(false), isImageViewerVisible = _f[0], setIsImageViewerVisible = _f[1];
    var _g = (0, react_1.useState)(false), refreshing = _g[0], setRefreshing = _g[1];
    var _h = (0, react_1.useState)(null), deletingReceiptId = _h[0], setDeletingReceiptId = _h[1];
    var isDark = (0, useColorScheme_1.useIsDark)();
    var hcb = (0, client_1.default)();
    console.log(receipts);
    // Set navigation title
    (0, react_1.useLayoutEffect)(function () {
        navigation.setOptions({
            title: "My receipts",
        });
    }, [navigation]);
    (0, native_1.useFocusEffect)(function () {
        mutate();
    });
    // Group transactions by organization
    var groupedTransactions = (0, react_1.useMemo)(function () {
        if (!(data === null || data === void 0 ? void 0 : data.data))
            return [];
        var groups = data.data.reduce(function (acc, transaction) {
            var orgId = transaction.organization.id;
            if (!acc[orgId]) {
                acc[orgId] = {
                    organization: transaction.organization,
                    transactions: [],
                };
            }
            acc[orgId].transactions.push(transaction);
            return acc;
        }, {});
        return Object.values(groups);
    }, [data === null || data === void 0 ? void 0 : data.data]);
    var onRefresh = function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setRefreshing(true);
                    return [4 /*yield*/, mutate()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, refreshReceipts()];
                case 2:
                    _a.sent();
                    setRefreshing(false);
                    return [2 /*return*/];
            }
        });
    }); };
    var handleActionSheet = (0, ReceiptActionSheet_1.useReceiptActionSheet)({
        orgId: "",
        transactionId: "",
        onUploadComplete: function () {
            refreshReceipts();
        },
    }).handleActionSheet;
    var handleReceiptUpload = function () {
        handleActionSheet();
    };
    var handleDeleteReceipt = function (receiptId) { return __awaiter(_this, void 0, void 0, function () {
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
                                    setDeletingReceiptId(receiptId);
                                    return [4 /*yield*/, hcb.delete("receipts/".concat(receiptId.replace("rct_", "")))];
                                case 1:
                                    _a.sent();
                                    react_native_alert_notification_1.Toast.show({
                                        type: react_native_alert_notification_1.ALERT_TYPE.SUCCESS,
                                        title: "Receipt Deleted",
                                        textBody: "The receipt has been successfully deleted.",
                                    });
                                    // Refresh the receipts list
                                    refreshReceipts();
                                    return [3 /*break*/, 4];
                                case 2:
                                    error_1 = _a.sent();
                                    (0, errorUtils_1.logCriticalError)("Error deleting receipt", error_1, { receiptId: receiptId });
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
    }); };
    var handleTransactionUpload = function (transaction) { return __awaiter(_this, void 0, void 0, function () {
        var result, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, ImagePicker.launchImageLibraryAsync({
                            mediaTypes: ImagePicker.MediaTypeOptions.Images,
                            allowsMultipleSelection: true,
                            quality: 1,
                        })];
                case 1:
                    result = _a.sent();
                    if (!result.canceled && result.assets.length > 0) {
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        navigation.navigate("ShareIntentModal", {
                            images: result.assets.map(function (asset) { return asset.uri; }),
                            missingTransactions: [transaction],
                        });
                    }
                    return [3 /*break*/, 3];
                case 2:
                    error_2 = _a.sent();
                    react_native_alert_notification_1.Toast.show({
                        type: react_native_alert_notification_1.ALERT_TYPE.DANGER,
                        title: "Upload Failed",
                        textBody: "Failed to select receipts from device",
                    });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    var handleTransactionSelect = function (transaction) {
        // Navigate to ReceiptSelectionModal
        navigation.navigate("ReceiptSelectionModal", {
            transaction: transaction,
        });
    };
    if (isLoading) {
        return ((0, jsx_runtime_1.jsx)(react_native_safe_area_context_1.SafeAreaView, { style: { flex: 1, backgroundColor: themeColors.background }, children: (0, jsx_runtime_1.jsx)(react_native_1.View, { style: { flex: 1, alignItems: "center", justifyContent: "center" }, children: (0, jsx_runtime_1.jsx)(react_native_1.ActivityIndicator, { size: "large" }) }) }));
    }
    return ((0, jsx_runtime_1.jsxs)(react_native_1.ScrollView, { style: { flex: 1 }, contentContainerStyle: { padding: 20 }, refreshControl: (0, jsx_runtime_1.jsx)(react_native_1.RefreshControl, { refreshing: refreshing, onRefresh: onRefresh }), children: [(0, jsx_runtime_1.jsx)(react_native_1.ScrollView, { horizontal: true, style: { marginBottom: 20, gap: 20 }, contentContainerStyle: { gap: 20 }, showsHorizontalScrollIndicator: false, children: receipts === null || receipts === void 0 ? void 0 : receipts.sort(function (a, b) {
                    return new Date(b.created_at).getTime() -
                        new Date(a.created_at).getTime();
                }).map(function (receipt) { return ((0, jsx_runtime_1.jsx)(react_native_reanimated_1.default.View, { entering: ReceiptList_1.ZoomAndFadeIn, children: (0, jsx_runtime_1.jsx)(react_native_1.TouchableOpacity, { onPress: function () {
                            setSelectedReceipt(receipt);
                            setIsImageViewerVisible(true);
                        }, children: (0, jsx_runtime_1.jsxs)(react_native_1.View, { children: [(0, jsx_runtime_1.jsxs)(react_native_1.View, { style: { position: "relative" }, children: [receipt.preview_url ? ((0, jsx_runtime_1.jsx)(react_native_1.Image, { source: { uri: receipt.preview_url }, style: {
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
                                            }, onPress: function () { return handleDeleteReceipt(receipt.id); }, disabled: deletingReceiptId === receipt.id, children: deletingReceiptId === receipt.id ? ((0, jsx_runtime_1.jsx)(react_native_1.ActivityIndicator, { size: 20, color: "red" })) : ((0, jsx_runtime_1.jsx)(hackclub_icons_rn_1.default, { glyph: "view-close", size: 20, color: "red" })) })] }), (0, jsx_runtime_1.jsxs)(react_native_1.Text, { style: { color: theme_1.palette.muted, fontSize: 12, marginTop: 5 }, children: ["Added", " ", (0, date_fns_1.formatDistanceToNowStrict)((0, date_fns_1.parseISO)(receipt.created_at)), " ", "ago"] })] }, receipt.id) }, receipt.id) }, receipt.id)); }) }), (0, jsx_runtime_1.jsx)(ReceiptViewerModal_1.default, { receipt: selectedReceipt, visible: isImageViewerVisible, onRequestClose: function () {
                    setIsImageViewerVisible(false);
                    setSelectedReceipt(null);
                } }), (0, jsx_runtime_1.jsxs)(react_native_1.View, { style: {
                    backgroundColor: themeColors.card,
                    borderRadius: 12,
                    padding: 20,
                    alignItems: "center",
                    marginBottom: 32,
                }, children: [(0, jsx_runtime_1.jsxs)(react_native_1.TouchableOpacity, { style: {
                            backgroundColor: palette_1.default.sky["500"],
                            paddingHorizontal: 24,
                            paddingVertical: 12,
                            borderRadius: 8,
                            flexDirection: "row",
                            alignItems: "center",
                            gap: 8,
                            marginBottom: 12,
                        }, onPress: handleReceiptUpload, children: [(0, jsx_runtime_1.jsx)(UploadIcon_1.default, { size: 28, color: "white" }), (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: { color: "white", fontSize: 16, fontWeight: "600" }, children: "Upload receipt" })] }), (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: { color: theme_1.palette.muted, textAlign: "center", fontSize: 14 }, children: "Select photos from your device" })] }), groupedTransactions.length > 0 && ((0, jsx_runtime_1.jsxs)(react_native_1.View, { style: { marginBottom: 20 }, children: [(0, jsx_runtime_1.jsxs)(react_native_1.View, { style: {
                            flexDirection: "row",
                            alignItems: "center",
                            marginBottom: 16,
                        }, children: [(0, jsx_runtime_1.jsx)(react_native_1.Text, { style: {
                                    fontSize: 20,
                                    fontWeight: "600",
                                    color: themeColors.text,
                                }, children: "Transactions" }), (0, jsx_runtime_1.jsx)(react_native_1.View, { style: {
                                    backgroundColor: themeColors.card,
                                    paddingHorizontal: 8,
                                    paddingVertical: 4,
                                    borderRadius: 12,
                                    marginLeft: 8,
                                }, children: (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: { color: theme_1.palette.muted, fontSize: 14 }, children: ((_b = data === null || data === void 0 ? void 0 : data.data) === null || _b === void 0 ? void 0 : _b.length) || 0 }) })] }), groupedTransactions.map(function (_a) {
                        var organization = _a.organization, transactions = _a.transactions;
                        return ((0, jsx_runtime_1.jsx)(OrganizationSection, { organization: organization, transactions: transactions, onComplete: function () { return mutate(); }, onUpload: handleTransactionUpload, onSelect: handleTransactionSelect }, organization.id));
                    })] })), groupedTransactions.length === 0 && ((0, jsx_runtime_1.jsxs)(react_native_1.View, { style: {
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: 20,
                }, children: [(0, jsx_runtime_1.jsx)(react_native_1.View, { style: { alignItems: "center", marginBottom: 20 }, children: (0, jsx_runtime_1.jsxs)(react_native_1.View, { style: { position: "relative" }, children: [(0, jsx_runtime_1.jsx)(vector_icons_1.Ionicons, { name: "receipt-outline", color: theme_1.palette.muted, size: 60 }), (0, jsx_runtime_1.jsx)(react_native_1.View, { style: {
                                        position: "absolute",
                                        top: -8,
                                        right: -8,
                                        backgroundColor: palette_1.default.emerald["400"],
                                        borderRadius: 12,
                                        width: 24,
                                        height: 24,
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }, children: (0, jsx_runtime_1.jsx)(vector_icons_1.Ionicons, { name: "checkmark", color: "white", size: 16 }) })] }) }), (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: {
                            color: themeColors.text,
                            fontSize: 18,
                            fontWeight: "600",
                            marginBottom: 8,
                        }, children: "Receipt Bin is empty" }), (0, jsx_runtime_1.jsxs)(react_native_1.Text, { style: {
                            color: theme_1.palette.muted,
                            textAlign: "center",
                            lineHeight: 20,
                        }, children: ["All your transactions have receipts attached.", "\n", "Great job staying organized!"] })] }))] }));
}
