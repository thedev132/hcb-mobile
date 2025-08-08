"use strict";
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
exports.default = ShareIntentModal;
var jsx_runtime_1 = require("react/jsx-runtime");
var vector_icons_1 = require("@expo/vector-icons");
var native_1 = require("@react-navigation/native");
var expo_image_1 = require("expo-image");
var react_1 = require("react");
var react_native_1 = require("react-native");
var react_native_alert_notification_1 = require("react-native-alert-notification");
var react_native_safe_area_context_1 = require("react-native-safe-area-context");
var alertUtils_1 = require("../lib/alertUtils");
var client_1 = __importDefault(require("../lib/client"));
var errorUtils_1 = require("../lib/errorUtils");
var theme_1 = require("../theme");
var util_1 = require("../util");
function ShareIntentModal(_a) {
    var _this = this;
    var _b = _a.route.params, images = _b.images, missingTransactions = _b.missingTransactions, navigation = _a.navigation;
    var themeColors = (0, native_1.useTheme)().colors;
    var hcb = (0, client_1.default)();
    var validImages = (images === null || images === void 0 ? void 0 : images.filter(function (img) { return img && typeof img === "string"; })) || [];
    var transactionsRef = (0, react_1.useRef)([]);
    (0, react_1.useEffect)(function () {
        if (missingTransactions && missingTransactions.length > 0) {
            transactionsRef.current = missingTransactions.filter(function (t) { return t && t.id; });
            setTransactionsInitialized(true);
        }
    }, [missingTransactions]);
    var validTransactions = transactionsRef.current;
    var _c = (0, react_1.useState)(validImages.map(function (uri) { return ({
        imageUri: uri,
        transactionId: null,
        orgId: null,
    }); })), assignments = _c[0], setAssignments = _c[1];
    var _d = (0, react_1.useState)(false), uploading = _d[0], setUploading = _d[1];
    var _e = (0, react_1.useState)(null), selectedImageIndex = _e[0], setSelectedImageIndex = _e[1];
    var _f = (0, react_1.useState)(false), transactionsInitialized = _f[0], setTransactionsInitialized = _f[1];
    (0, react_1.useEffect)(function () {
        if (validImages.length > 0 && assignments.length !== validImages.length) {
            console.log("Syncing assignments array with validImages:", {
                validImagesLength: validImages.length,
                assignmentsLength: assignments.length,
            });
            setAssignments(validImages.map(function (uri) { return ({
                imageUri: uri,
                transactionId: null,
                orgId: null,
            }); }));
        }
    }, [validImages, assignments.length]);
    (0, react_1.useEffect)(function () {
        console.log("=== SHARE INTENT MODAL DEBUG ===");
        console.log("Modal opened with params:", {
            imagesCount: validImages.length,
            images: validImages,
            missingTransactionsCount: validTransactions.length,
            transactionsInitialized: transactionsInitialized,
            missingTransactions: validTransactions.map(function (t) { return ({
                id: t.id,
                memo: t.memo,
                amount: t.amount_cents,
                org: t.organization.name,
            }); }),
        });
        if (validImages.length === 0) {
            console.warn("No valid images provided to ShareIntentModal");
            (0, alertUtils_1.showAlert)("Invalid Share Intent", "No valid images were provided. Please try sharing again.", [{ text: "OK", onPress: function () { return navigation.goBack(); } }]);
        }
    }, [validImages, validTransactions, navigation, transactionsInitialized]);
    var handleImageSelect = function (imageIndex, transaction) {
        setAssignments(function (prev) {
            return prev.map(function (assignment, index) {
                return index === imageIndex
                    ? {
                        imageUri: assignment.imageUri,
                        transactionId: transaction.id,
                        orgId: transaction.organization.id,
                    }
                    : assignment;
            });
        });
        setSelectedImageIndex(null);
    };
    var handleSelectAll = function (transaction) {
        setAssignments(function (prev) {
            return prev.map(function (assignment) { return ({
                imageUri: assignment.imageUri,
                transactionId: transaction.id,
                orgId: transaction.organization.id,
                isReceiptBin: false,
            }); });
        });
        setSelectedImageIndex(null);
    };
    var handleReceiptBinSelect = function (imageIndex) {
        setAssignments(function (prev) {
            return prev.map(function (assignment, index) {
                return index === imageIndex
                    ? {
                        imageUri: assignment.imageUri,
                        transactionId: null,
                        orgId: null,
                        isReceiptBin: true,
                    }
                    : assignment;
            });
        });
        setSelectedImageIndex(null);
    };
    var handleReceiptBinSelectAll = function () {
        setAssignments(function (prev) {
            return prev.map(function (assignment) { return ({
                imageUri: assignment.imageUri,
                transactionId: null,
                orgId: null,
                isReceiptBin: true,
            }); });
        });
        setSelectedImageIndex(null);
    };
    var handleUnassignImage = function (imageIndex) {
        setAssignments(function (prev) {
            return prev.map(function (assignment, index) {
                return index === imageIndex
                    ? {
                        imageUri: assignment.imageUri,
                        transactionId: null,
                        orgId: null,
                        isReceiptBin: false,
                    }
                    : assignment;
            });
        });
    };
    var uploadFile = function (file, orgId, transactionId) { return __awaiter(_this, void 0, void 0, function () {
        var body;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    body = new FormData();
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    //@ts-ignore
                    body.append("file", {
                        uri: file.uri,
                        name: file.fileName || "receipt.jpg",
                        type: file.mimeType || "image/jpeg",
                    });
                    // Only append transaction_id if it's provided (for receipt bin uploads, it won't be)
                    if (transactionId && transactionId.trim() !== "") {
                        body.append("transaction_id", transactionId);
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
    var handleUpload = function () { return __awaiter(_this, void 0, void 0, function () {
        var transactionAssignments, receiptBinAssignments, _i, transactionAssignments_1, assignment, _a, receiptBinAssignments_1, assignment, totalUploaded, transactionCount, receiptBinCount, message, error_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    transactionAssignments = assignments.filter(function (a) { return a.transactionId && a.orgId && !a.isReceiptBin; });
                    receiptBinAssignments = assignments.filter(function (a) { return a.isReceiptBin; });
                    // If no assignments at all, show error
                    if (transactionAssignments.length === 0 &&
                        receiptBinAssignments.length === 0) {
                        (0, alertUtils_1.showAlert)("No Assignments", "Please assign at least one image to a transaction or receipt bin before uploading.");
                        return [2 /*return*/];
                    }
                    setUploading(true);
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 10, 11, 12]);
                    _i = 0, transactionAssignments_1 = transactionAssignments;
                    _b.label = 2;
                case 2:
                    if (!(_i < transactionAssignments_1.length)) return [3 /*break*/, 5];
                    assignment = transactionAssignments_1[_i];
                    if (!assignment.transactionId || !assignment.orgId)
                        return [3 /*break*/, 4];
                    return [4 /*yield*/, uploadFile({
                            uri: assignment.imageUri,
                            fileName: "receipt_".concat(Date.now(), ".jpg"),
                            mimeType: "image/jpeg",
                        }, assignment.orgId, assignment.transactionId)];
                case 3:
                    _b.sent();
                    _b.label = 4;
                case 4:
                    _i++;
                    return [3 /*break*/, 2];
                case 5:
                    _a = 0, receiptBinAssignments_1 = receiptBinAssignments;
                    _b.label = 6;
                case 6:
                    if (!(_a < receiptBinAssignments_1.length)) return [3 /*break*/, 9];
                    assignment = receiptBinAssignments_1[_a];
                    return [4 /*yield*/, uploadFile({
                            uri: assignment.imageUri,
                            fileName: "receipt_".concat(Date.now(), ".jpg"),
                            mimeType: "image/jpeg",
                        }, "", // No org ID for receipt bin upload
                        "")];
                case 7:
                    _b.sent();
                    _b.label = 8;
                case 8:
                    _a++;
                    return [3 /*break*/, 6];
                case 9:
                    totalUploaded = transactionAssignments.length + receiptBinAssignments.length;
                    transactionCount = transactionAssignments.length;
                    receiptBinCount = receiptBinAssignments.length;
                    message = "Successfully uploaded ".concat(totalUploaded, " receipt(s).");
                    if (transactionCount > 0 && receiptBinCount > 0) {
                        message = "Successfully uploaded ".concat(transactionCount, " receipt(s) to transactions and ").concat(receiptBinCount, " receipt(s) to receipt bin.");
                    }
                    else if (transactionCount > 0) {
                        message = "Successfully uploaded ".concat(transactionCount, " receipt(s) to transactions.");
                    }
                    else if (receiptBinCount > 0) {
                        message = "Successfully uploaded ".concat(receiptBinCount, " receipt(s) to receipt bin.");
                    }
                    react_native_alert_notification_1.Toast.show({
                        type: react_native_alert_notification_1.ALERT_TYPE.SUCCESS,
                        title: "Receipts Uploaded!",
                        textBody: message,
                    });
                    navigation.goBack();
                    return [3 /*break*/, 12];
                case 10:
                    error_1 = _b.sent();
                    (0, errorUtils_1.logCriticalError)("Upload error", error_1, {
                        action: "share_intent_upload",
                    });
                    react_native_alert_notification_1.Toast.show({
                        type: react_native_alert_notification_1.ALERT_TYPE.DANGER,
                        title: "Upload Failed",
                        textBody: "Some receipts failed to upload. Please try again.",
                    });
                    return [3 /*break*/, 12];
                case 11:
                    setUploading(false);
                    return [7 /*endfinally*/];
                case 12: return [2 /*return*/];
            }
        });
    }); };
    var getAssignmentForImage = function (imageUri) {
        return assignments.find(function (a) { return a.imageUri === imageUri; });
    };
    var getTransactionForAssignment = function (assignment) {
        if (!assignment) {
            (0, errorUtils_1.logError)("getTransactionForAssignment called with undefined assignment", new Error("Undefined assignment"), {
                context: { action: "transaction_assignment" },
            });
            return null;
        }
        if (assignment.isReceiptBin)
            return { memo: "Receipt Bin", id: "receipt-bin" };
        if (!assignment.transactionId)
            return null;
        return validTransactions.find(function (t) { return t.id === assignment.transactionId; });
    };
    if (validImages.length === 0) {
        return ((0, jsx_runtime_1.jsx)(react_native_1.View, { style: {
                flex: 1,
                backgroundColor: themeColors.background,
                justifyContent: "center",
                alignItems: "center",
            }, children: (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: { color: themeColors.text, fontSize: 16 }, children: "No valid images to process" }) }));
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
                                }, children: (0, jsx_runtime_1.jsx)(vector_icons_1.Ionicons, { name: "close", size: 24, color: themeColors.text }) })), (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: {
                                    fontSize: 24,
                                    fontWeight: "bold",
                                    color: themeColors.text,
                                }, children: "Assign Receipts" })] }), (0, jsx_runtime_1.jsxs)(react_native_1.TouchableOpacity, { onPress: handleUpload, disabled: uploading, style: {
                            backgroundColor: uploading ? theme_1.palette.muted : theme_1.palette.primary,
                            paddingHorizontal: 20,
                            paddingVertical: 10,
                            borderRadius: 8,
                            flexDirection: "row",
                            alignItems: "center",
                            gap: 8,
                        }, children: [uploading ? ((0, jsx_runtime_1.jsx)(react_native_1.ActivityIndicator, { color: "white", size: "small" })) : ((0, jsx_runtime_1.jsx)(vector_icons_1.Ionicons, { name: "cloud-upload-outline", color: "white", size: 20 })), !uploading && ((0, jsx_runtime_1.jsx)(react_native_1.Text, { style: { color: "white", fontWeight: "600" }, children: "Upload" }))] })] }), (0, jsx_runtime_1.jsxs)(react_native_1.ScrollView, { style: { flex: 1, padding: 20 }, children: [(0, jsx_runtime_1.jsxs)(react_native_1.View, { style: { marginBottom: 30 }, children: [(0, jsx_runtime_1.jsxs)(react_native_1.Text, { style: {
                                    color: theme_1.palette.muted,
                                    fontSize: 16,
                                    fontWeight: "600",
                                    marginBottom: 15,
                                }, children: ["Shared Images (", validImages.length, ")"] }), (0, jsx_runtime_1.jsx)(react_native_1.ScrollView, { horizontal: true, showsHorizontalScrollIndicator: false, style: { marginBottom: 20 }, children: validImages.map(function (imageUri, index) {
                                    var assignment = getAssignmentForImage(imageUri);
                                    if (!assignment) {
                                        console.warn("No assignment found for image ".concat(index, ": ").concat(imageUri));
                                        return null;
                                    }
                                    var assignedTransaction = getTransactionForAssignment(assignment);
                                    var isSelected = selectedImageIndex === index;
                                    return ((0, jsx_runtime_1.jsxs)(react_native_1.TouchableOpacity, { style: {
                                            marginRight: 15,
                                            alignItems: "center",
                                        }, onPress: function () {
                                            if (isSelected) {
                                                setSelectedImageIndex(null);
                                            }
                                            else if (assignedTransaction) {
                                                // If image is already assigned, unassign it and select it
                                                handleUnassignImage(index);
                                                setSelectedImageIndex(index);
                                            }
                                            else {
                                                setSelectedImageIndex(index);
                                            }
                                        }, children: [(0, jsx_runtime_1.jsxs)(react_native_1.View, { style: { position: "relative" }, children: [(0, jsx_runtime_1.jsx)(expo_image_1.Image, { source: { uri: imageUri }, style: {
                                                            width: 120,
                                                            height: 160,
                                                            borderRadius: 8,
                                                            backgroundColor: themeColors.card,
                                                            borderWidth: isSelected ? 3 : 0,
                                                            borderColor: isSelected ? "#ef4444" : theme_1.palette.primary,
                                                        }, contentFit: "cover" }), assignedTransaction && ((0, jsx_runtime_1.jsx)(react_native_1.View, { style: {
                                                            position: "absolute",
                                                            top: 5,
                                                            right: 5,
                                                            backgroundColor: theme_1.palette.success,
                                                            borderRadius: 12,
                                                            width: 24,
                                                            height: 24,
                                                            justifyContent: "center",
                                                            alignItems: "center",
                                                        }, children: (0, jsx_runtime_1.jsx)(vector_icons_1.Ionicons, { name: "checkmark", color: "white", size: 16 }) })), isSelected && ((0, jsx_runtime_1.jsx)(react_native_1.View, { style: {
                                                            position: "absolute",
                                                            top: 5,
                                                            left: 5,
                                                            backgroundColor: "#ef4444",
                                                            borderRadius: 12,
                                                            width: 24,
                                                            height: 24,
                                                            justifyContent: "center",
                                                            alignItems: "center",
                                                        }, children: (0, jsx_runtime_1.jsx)(vector_icons_1.Ionicons, { name: "arrow-forward", color: "white", size: 16 }) }))] }), assignedTransaction && ((0, jsx_runtime_1.jsx)(react_native_1.Text, { style: {
                                                    color: theme_1.palette.success,
                                                    fontSize: 12,
                                                    marginTop: 5,
                                                    textAlign: "center",
                                                    maxWidth: 120,
                                                }, numberOfLines: 2, children: assignedTransaction.memo }))] }, imageUri));
                                }) })] }), (0, jsx_runtime_1.jsxs)(react_native_1.View, { children: [(0, jsx_runtime_1.jsx)(react_native_1.Text, { style: {
                                    color: theme_1.palette.muted,
                                    fontSize: 16,
                                    fontWeight: "600",
                                    marginBottom: 15,
                                }, children: validTransactions.length > 0 ? ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: ["Missing Receipts (", validTransactions.length, ")", selectedImageIndex !== null && ((0, jsx_runtime_1.jsxs)(react_native_1.Text, { style: { color: theme_1.palette.primary, fontSize: 14 }, children: [" ", "\u2022 Tap a transaction or receipt bin to assign the selected image"] })), validImages.length >= 2 && ((0, jsx_runtime_1.jsxs)(react_native_1.Text, { style: { color: theme_1.palette.info, fontSize: 14 }, children: [" ", "\u2022 Use \"Select All\" to assign all images to one transaction"] }))] })) : ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: ["Receipt Bin Upload", (0, jsx_runtime_1.jsxs)(react_native_1.Text, { style: { color: theme_1.palette.info, fontSize: 14 }, children: [" ", "\u2022 Images will be uploaded to your receipt bin"] })] })) }), (function () {
                                var receiptBinAssignments = assignments.filter(function (a) { return a.isReceiptBin; });
                                var isSelected = selectedImageIndex !== null;
                                var showSelectAll = validImages.length >= 2;
                                return ((0, jsx_runtime_1.jsxs)(react_native_1.TouchableOpacity, { onPress: function () {
                                        if (isSelected && selectedImageIndex !== null) {
                                            handleReceiptBinSelect(selectedImageIndex);
                                        }
                                    }, disabled: !isSelected, style: {
                                        opacity: isSelected ? 1 : 0.7,
                                    }, children: [(0, jsx_runtime_1.jsxs)(react_native_1.View, { style: {
                                                backgroundColor: themeColors.card,
                                                borderRadius: 12,
                                                padding: 16,
                                                marginBottom: 12,
                                                borderWidth: 1,
                                                borderColor: receiptBinAssignments.length > 0
                                                    ? theme_1.palette.success
                                                    : themeColors.border,
                                                flexDirection: "row",
                                                alignItems: "center",
                                            }, children: [(0, jsx_runtime_1.jsxs)(react_native_1.View, { style: { flex: 1 }, children: [(0, jsx_runtime_1.jsx)(react_native_1.Text, { style: {
                                                                color: themeColors.text,
                                                                fontSize: 16,
                                                                fontWeight: "600",
                                                                marginBottom: 4,
                                                            }, children: "Receipt Bin" }), (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: { color: theme_1.palette.muted, fontSize: 14 }, children: "Upload to receipt bin" })] }), (0, jsx_runtime_1.jsxs)(react_native_1.View, { style: {
                                                        flexDirection: "row",
                                                        alignItems: "center",
                                                        gap: 8,
                                                    }, children: [receiptBinAssignments.length > 0 && ((0, jsx_runtime_1.jsx)(react_native_1.View, { style: {
                                                                backgroundColor: theme_1.palette.success,
                                                                borderRadius: 12,
                                                                paddingHorizontal: 8,
                                                                paddingVertical: 4,
                                                            }, children: (0, jsx_runtime_1.jsxs)(react_native_1.Text, { style: {
                                                                    color: "white",
                                                                    fontSize: 12,
                                                                    fontWeight: "600",
                                                                }, children: [receiptBinAssignments.length, " receipt", receiptBinAssignments.length > 1 ? "s" : ""] }) })), showSelectAll && ((0, jsx_runtime_1.jsx)(react_native_1.TouchableOpacity, { onPress: function () { return handleReceiptBinSelectAll(); }, style: {
                                                                backgroundColor: theme_1.palette.info,
                                                                borderRadius: 8,
                                                                paddingHorizontal: 12,
                                                                paddingVertical: 6,
                                                            }, children: (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: {
                                                                    color: "white",
                                                                    fontSize: 12,
                                                                    fontWeight: "600",
                                                                }, children: "Select All" }) }))] })] }), receiptBinAssignments.length > 0 && ((0, jsx_runtime_1.jsx)(react_native_1.ScrollView, { horizontal: true, showsHorizontalScrollIndicator: false, style: { marginTop: 8, marginBottom: 12 }, children: receiptBinAssignments.map(function (assignment) { return ((0, jsx_runtime_1.jsx)(expo_image_1.Image, { source: { uri: assignment.imageUri }, style: {
                                                    width: 60,
                                                    height: 80,
                                                    borderRadius: 6,
                                                    marginRight: 8,
                                                    backgroundColor: themeColors.background,
                                                }, contentFit: "cover" }, assignment.imageUri)); }) }))] }));
                            })(), validTransactions.map(function (transaction) {
                                var assignedImages = assignments.filter(function (a) { return a.transactionId === transaction.id; });
                                var isSelected = selectedImageIndex !== null;
                                var showSelectAll = validImages.length >= 2;
                                return ((0, jsx_runtime_1.jsxs)(react_native_1.TouchableOpacity, { onPress: function () {
                                        if (isSelected && selectedImageIndex !== null) {
                                            handleImageSelect(selectedImageIndex, transaction);
                                        }
                                    }, disabled: !isSelected, style: {
                                        opacity: isSelected ? 1 : 0.7,
                                    }, children: [(0, jsx_runtime_1.jsxs)(react_native_1.View, { style: {
                                                backgroundColor: themeColors.card,
                                                borderRadius: 12,
                                                padding: 16,
                                                marginBottom: 12,
                                                borderWidth: 1,
                                                borderColor: assignedImages.length > 0
                                                    ? theme_1.palette.success
                                                    : themeColors.border,
                                                flexDirection: "row",
                                                alignItems: "center",
                                            }, children: [(0, jsx_runtime_1.jsxs)(react_native_1.View, { style: { flex: 1 }, children: [(0, jsx_runtime_1.jsx)(react_native_1.Text, { style: {
                                                                color: themeColors.text,
                                                                fontSize: 16,
                                                                fontWeight: "600",
                                                                marginBottom: 4,
                                                            }, children: transaction.memo }), (0, jsx_runtime_1.jsxs)(react_native_1.Text, { style: { color: theme_1.palette.muted, fontSize: 14 }, children: [(0, util_1.renderMoney)(Math.abs(transaction.amount_cents)), " \u2022", " ", transaction.organization.name] })] }), (0, jsx_runtime_1.jsxs)(react_native_1.View, { style: {
                                                        flexDirection: "row",
                                                        alignItems: "center",
                                                        gap: 8,
                                                    }, children: [assignedImages.length > 0 && ((0, jsx_runtime_1.jsx)(react_native_1.View, { style: {
                                                                backgroundColor: theme_1.palette.success,
                                                                borderRadius: 12,
                                                                paddingHorizontal: 8,
                                                                paddingVertical: 4,
                                                            }, children: (0, jsx_runtime_1.jsxs)(react_native_1.Text, { style: {
                                                                    color: "white",
                                                                    fontSize: 12,
                                                                    fontWeight: "600",
                                                                }, children: [assignedImages.length, " receipt", assignedImages.length > 1 ? "s" : ""] }) })), showSelectAll && ((0, jsx_runtime_1.jsx)(react_native_1.TouchableOpacity, { onPress: function () { return handleSelectAll(transaction); }, style: {
                                                                backgroundColor: theme_1.palette.info,
                                                                borderRadius: 8,
                                                                paddingHorizontal: 12,
                                                                paddingVertical: 6,
                                                            }, children: (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: {
                                                                    color: "white",
                                                                    fontSize: 12,
                                                                    fontWeight: "600",
                                                                }, children: "Select All" }) }))] })] }), assignedImages.length > 0 && ((0, jsx_runtime_1.jsx)(react_native_1.ScrollView, { horizontal: true, showsHorizontalScrollIndicator: false, style: { marginTop: 8, marginBottom: 12 }, children: assignedImages.map(function (assignment) { return ((0, jsx_runtime_1.jsx)(expo_image_1.Image, { source: { uri: assignment.imageUri }, style: {
                                                    width: 60,
                                                    height: 80,
                                                    borderRadius: 6,
                                                    marginRight: 8,
                                                    backgroundColor: themeColors.background,
                                                }, contentFit: "cover" }, assignment.imageUri)); }) }))] }, transaction.id));
                            })] })] })] }));
}
