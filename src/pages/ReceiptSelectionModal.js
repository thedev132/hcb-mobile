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
exports.default = ReceiptSelectionModal;
var jsx_runtime_1 = require("react/jsx-runtime");
var vector_icons_1 = require("@expo/vector-icons");
var native_1 = require("@react-navigation/native");
var expo_image_1 = require("expo-image");
var react_1 = require("react");
var react_native_1 = require("react-native");
var react_native_alert_notification_1 = require("react-native-alert-notification");
var react_native_safe_area_context_1 = require("react-native-safe-area-context");
var swr_1 = __importStar(require("swr"));
var alertUtils_1 = require("../lib/alertUtils");
var client_1 = __importDefault(require("../lib/client"));
var errorUtils_1 = require("../lib/errorUtils");
var theme_1 = require("../theme");
function ReceiptSelectionModal(_a) {
    var _this = this;
    var transaction = _a.route.params.transaction, navigation = _a.navigation;
    var themeColors = (0, native_1.useTheme)().colors;
    var hcb = (0, client_1.default)();
    var receipts = (0, swr_1.default)("receipts").data;
    var _b = (0, react_1.useState)(new Set()), selectedReceipts = _b[0], setSelectedReceipts = _b[1];
    var _c = (0, react_1.useState)(false), uploading = _c[0], setUploading = _c[1];
    var _d = (0, react_1.useState)(new Set()), deletingReceipts = _d[0], setDeletingReceipts = _d[1];
    var uploadFile = function (receipt) { return __awaiter(_this, void 0, void 0, function () {
        var body;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    body = new FormData();
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    //@ts-ignore
                    body.append("file", {
                        uri: receipt.url,
                        name: receipt.filename || "receipt.jpg",
                        type: "image/jpeg",
                    });
                    if (transaction) {
                        body.append("transaction_id", transaction.id);
                    }
                    return [4 /*yield*/, hcb.post("receipts", {
                            body: body,
                        })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    var deleteReceipt = function (receiptId) { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, hcb.delete("receipts/".concat(receiptId.replace("rct_", "")))];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    var handleUpload = function () { return __awaiter(_this, void 0, void 0, function () {
        var selectedReceiptList, _i, selectedReceiptList_1, receipt, _a, selectedReceipts_1, receiptId, error_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (selectedReceipts.size === 0) {
                        (0, alertUtils_1.showAlert)("No Receipts Selected", "Please select at least one receipt to upload.");
                        return [2 /*return*/];
                    }
                    setUploading(true);
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 12, 13, 14]);
                    selectedReceiptList = (receipts === null || receipts === void 0 ? void 0 : receipts.filter(function (receipt) { return selectedReceipts.has(receipt.id); })) || [];
                    _i = 0, selectedReceiptList_1 = selectedReceiptList;
                    _b.label = 2;
                case 2:
                    if (!(_i < selectedReceiptList_1.length)) return [3 /*break*/, 5];
                    receipt = selectedReceiptList_1[_i];
                    return [4 /*yield*/, uploadFile(receipt)];
                case 3:
                    _b.sent();
                    _b.label = 4;
                case 4:
                    _i++;
                    return [3 /*break*/, 2];
                case 5:
                    // Delete all uploaded receipts from receipt bin
                    setDeletingReceipts(new Set(selectedReceipts));
                    _a = 0, selectedReceipts_1 = selectedReceipts;
                    _b.label = 6;
                case 6:
                    if (!(_a < selectedReceipts_1.length)) return [3 /*break*/, 9];
                    receiptId = selectedReceipts_1[_a];
                    return [4 /*yield*/, deleteReceipt(receiptId)];
                case 7:
                    _b.sent();
                    _b.label = 8;
                case 8:
                    _a++;
                    return [3 /*break*/, 6];
                case 9: 
                // Refresh the receipt bin data
                return [4 /*yield*/, (0, swr_1.mutate)("user/receipt_bin")];
                case 10:
                    // Refresh the receipt bin data
                    _b.sent();
                    return [4 /*yield*/, (0, swr_1.mutate)("user/transactions/missing_receipt")];
                case 11:
                    _b.sent();
                    react_native_alert_notification_1.Toast.show({
                        type: react_native_alert_notification_1.ALERT_TYPE.SUCCESS,
                        title: "Receipts Uploaded!",
                        textBody: "Successfully uploaded ".concat(selectedReceipts.size, " receipt(s) and removed them from receipt bin."),
                    });
                    navigation.goBack();
                    return [3 /*break*/, 14];
                case 12:
                    error_1 = _b.sent();
                    (0, errorUtils_1.logCriticalError)("Upload error", error_1, {
                        transactionId: transaction.id,
                        receiptCount: selectedReceipts.size,
                    });
                    react_native_alert_notification_1.Toast.show({
                        type: react_native_alert_notification_1.ALERT_TYPE.DANGER,
                        title: "Upload Failed",
                        textBody: "Some receipts failed to upload. Please try again.",
                    });
                    return [3 /*break*/, 14];
                case 13:
                    setUploading(false);
                    setDeletingReceipts(new Set());
                    return [7 /*endfinally*/];
                case 14: return [2 /*return*/];
            }
        });
    }); };
    var toggleReceiptSelection = function (receiptId) {
        var newSelected = new Set(selectedReceipts);
        if (newSelected.has(receiptId)) {
            newSelected.delete(receiptId);
        }
        else {
            newSelected.add(receiptId);
        }
        setSelectedReceipts(newSelected);
    };
    var selectAllReceipts = function () {
        if (receipts) {
            setSelectedReceipts(new Set(receipts.map(function (receipt) { return receipt.id; })));
        }
    };
    var clearSelection = function () {
        setSelectedReceipts(new Set());
    };
    if (!receipts || receipts.length === 0) {
        return ((0, jsx_runtime_1.jsx)(react_native_safe_area_context_1.SafeAreaView, { style: { flex: 1, backgroundColor: themeColors.background }, children: (0, jsx_runtime_1.jsxs)(react_native_1.View, { style: {
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    padding: 20,
                }, children: [(0, jsx_runtime_1.jsx)(vector_icons_1.Ionicons, { name: "receipt-outline", color: theme_1.palette.muted, size: 60 }), (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: {
                            color: themeColors.text,
                            fontSize: 18,
                            fontWeight: "600",
                            marginTop: 16,
                            marginBottom: 8,
                        }, children: "Receipt Bin is Empty" }), (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: {
                            color: theme_1.palette.muted,
                            textAlign: "center",
                            lineHeight: 20,
                        }, children: "No receipts available in your receipt bin to upload to this transaction." }), (0, jsx_runtime_1.jsx)(react_native_1.TouchableOpacity, { onPress: function () { return navigation.goBack(); }, style: {
                            backgroundColor: theme_1.palette.primary,
                            paddingHorizontal: 24,
                            paddingVertical: 12,
                            borderRadius: 8,
                            marginTop: 24,
                        }, children: (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: { color: "white", fontSize: 16, fontWeight: "600" }, children: "Go Back" }) })] }) }));
    }
    return ((0, jsx_runtime_1.jsxs)(react_native_safe_area_context_1.SafeAreaView, { style: { flex: 1, backgroundColor: themeColors.background }, children: [(0, jsx_runtime_1.jsxs)(react_native_1.View, { style: {
                    padding: 20,
                    borderBottomWidth: 1,
                    borderBottomColor: themeColors.border,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                }, children: [(0, jsx_runtime_1.jsxs)(react_native_1.View, { style: { flexDirection: "row", alignItems: "center", flex: 1 }, children: [react_native_1.Platform.OS === "android" && ((0, jsx_runtime_1.jsx)(react_native_1.TouchableOpacity, { onPress: function () { return navigation.goBack(); }, style: {
                                    marginRight: 16,
                                    padding: 8,
                                }, children: (0, jsx_runtime_1.jsx)(vector_icons_1.Ionicons, { name: "close", size: 24, color: themeColors.text }) })), (0, jsx_runtime_1.jsxs)(react_native_1.View, { style: { flex: 1 }, children: [(0, jsx_runtime_1.jsx)(react_native_1.Text, { style: {
                                            fontSize: 20,
                                            fontWeight: "bold",
                                            color: themeColors.text,
                                        }, children: "Select Receipts" }), (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: { color: theme_1.palette.muted, fontSize: 14, marginTop: 2 }, children: transaction.memo })] })] }), (0, jsx_runtime_1.jsxs)(react_native_1.TouchableOpacity, { onPress: handleUpload, disabled: uploading || selectedReceipts.size === 0, style: {
                            backgroundColor: uploading || selectedReceipts.size === 0
                                ? theme_1.palette.muted
                                : theme_1.palette.primary,
                            paddingHorizontal: 20,
                            paddingVertical: 10,
                            borderRadius: 8,
                            flexDirection: "row",
                            alignItems: "center",
                            gap: 8,
                        }, children: [uploading ? ((0, jsx_runtime_1.jsx)(react_native_1.ActivityIndicator, { color: "white", size: "small" })) : ((0, jsx_runtime_1.jsx)(vector_icons_1.Ionicons, { name: "cloud-upload-outline", color: "white", size: 20 })), !uploading && ((0, jsx_runtime_1.jsxs)(react_native_1.Text, { style: { color: "white", fontWeight: "600" }, children: ["Upload (", selectedReceipts.size, ")"] }))] })] }), (0, jsx_runtime_1.jsxs)(react_native_1.View, { style: {
                    padding: 16,
                    borderBottomWidth: 1,
                    borderBottomColor: themeColors.border,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                }, children: [(0, jsx_runtime_1.jsxs)(react_native_1.Text, { style: { color: theme_1.palette.muted, fontSize: 14 }, children: [selectedReceipts.size, " of ", receipts.length, " selected"] }), (0, jsx_runtime_1.jsxs)(react_native_1.View, { style: { flexDirection: "row", gap: 8 }, children: [(0, jsx_runtime_1.jsx)(react_native_1.TouchableOpacity, { onPress: selectAllReceipts, style: {
                                    backgroundColor: theme_1.palette.info,
                                    paddingHorizontal: 12,
                                    paddingVertical: 6,
                                    borderRadius: 6,
                                }, children: (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: { color: "white", fontSize: 12, fontWeight: "600" }, children: "Select All" }) }), (0, jsx_runtime_1.jsx)(react_native_1.TouchableOpacity, { onPress: clearSelection, style: {
                                    backgroundColor: theme_1.palette.muted,
                                    paddingHorizontal: 12,
                                    paddingVertical: 6,
                                    borderRadius: 6,
                                }, children: (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: { color: "white", fontSize: 12, fontWeight: "600" }, children: "Clear" }) })] })] }), (0, jsx_runtime_1.jsx)(react_native_1.ScrollView, { style: { flex: 1, padding: 16 }, children: (0, jsx_runtime_1.jsx)(react_native_1.View, { style: {
                        flexDirection: "row",
                        flexWrap: "wrap",
                        justifyContent: "space-between",
                        gap: 12,
                    }, children: receipts.map(function (receipt) {
                        var isSelected = selectedReceipts.has(receipt.id);
                        var isDeleting = deletingReceipts.has(receipt.id);
                        var isUploading = uploading && isSelected;
                        return ((0, jsx_runtime_1.jsxs)(react_native_1.TouchableOpacity, { onPress: function () { return toggleReceiptSelection(receipt.id); }, disabled: isUploading || isDeleting, style: {
                                width: "48%",
                                opacity: isUploading || isDeleting ? 0.6 : 1,
                            }, children: [(0, jsx_runtime_1.jsxs)(react_native_1.View, { style: { position: "relative" }, children: [(0, jsx_runtime_1.jsx)(expo_image_1.Image, { source: { uri: receipt.preview_url || receipt.url }, style: {
                                                width: "100%",
                                                height: 200,
                                                borderRadius: 8,
                                                backgroundColor: themeColors.card,
                                                borderWidth: isSelected ? 3 : 0,
                                                borderColor: theme_1.palette.primary,
                                            }, contentFit: "cover" }), isSelected && ((0, jsx_runtime_1.jsx)(react_native_1.View, { style: {
                                                position: "absolute",
                                                top: 8,
                                                right: 8,
                                                backgroundColor: theme_1.palette.primary,
                                                borderRadius: 12,
                                                width: 24,
                                                height: 24,
                                                justifyContent: "center",
                                                alignItems: "center",
                                            }, children: (0, jsx_runtime_1.jsx)(vector_icons_1.Ionicons, { name: "checkmark", color: "white", size: 16 }) })), (isUploading || isDeleting) && ((0, jsx_runtime_1.jsx)(react_native_1.View, { style: {
                                                position: "absolute",
                                                top: 0,
                                                left: 0,
                                                right: 0,
                                                bottom: 0,
                                                backgroundColor: "rgba(0,0,0,0.5)",
                                                borderRadius: 8,
                                                justifyContent: "center",
                                                alignItems: "center",
                                            }, children: (0, jsx_runtime_1.jsx)(react_native_1.ActivityIndicator, { color: "white", size: "small" }) }))] }), (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: {
                                        color: theme_1.palette.muted,
                                        fontSize: 12,
                                        marginTop: 4,
                                        textAlign: "center",
                                    }, numberOfLines: 1, children: receipt.filename })] }, receipt.id));
                    }) }) })] }));
}
