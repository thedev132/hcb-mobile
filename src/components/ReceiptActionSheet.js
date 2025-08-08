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
exports.useReceiptActionSheet = useReceiptActionSheet;
var react_native_action_sheet_1 = require("@expo/react-native-action-sheet");
var DocumentPicker = __importStar(require("expo-document-picker"));
var ImagePicker = __importStar(require("expo-image-picker"));
var react_native_alert_notification_1 = require("react-native-alert-notification");
var client_1 = __importDefault(require("../lib/client"));
var useColorScheme_1 = require("../lib/useColorScheme");
var useOffline_1 = require("../lib/useOffline");
function useReceiptActionSheet(_a) {
    var _this = this;
    var _b = _a.transactionId, transactionId = _b === void 0 ? "" : _b, onUploadComplete = _a.onUploadComplete;
    var showActionSheetWithOptions = (0, react_native_action_sheet_1.useActionSheet)().showActionSheetWithOptions;
    var _c = (0, useOffline_1.useOffline)(), isOnline = _c.isOnline, withOfflineCheck = _c.withOfflineCheck;
    var hcb = (0, client_1.default)();
    var isDark = (0, useColorScheme_1.useIsDark)();
    var uploadFile = withOfflineCheck(function (file) { return __awaiter(_this, void 0, void 0, function () {
        var body, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    body = new FormData();
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    //@ts-ignore
                    body.append("file", {
                        uri: file === null || file === void 0 ? void 0 : file.uri,
                        name: (file === null || file === void 0 ? void 0 : file.fileName) || "receipt.jpg",
                        type: (file === null || file === void 0 ? void 0 : file.mimeType) || "image/jpeg",
                    });
                    if (transactionId) {
                        body.append("transaction_id", transactionId);
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, hcb.post("receipts", {
                            body: body,
                        })];
                case 2:
                    _a.sent();
                    onUploadComplete === null || onUploadComplete === void 0 ? void 0 : onUploadComplete();
                    react_native_alert_notification_1.Toast.show({
                        type: react_native_alert_notification_1.ALERT_TYPE.SUCCESS,
                        title: "Receipt Uploaded!",
                        textBody: "Your receipt has been uploaded successfully.",
                    });
                    return [3 /*break*/, 4];
                case 3:
                    e_1 = _a.sent();
                    react_native_alert_notification_1.Toast.show({
                        type: react_native_alert_notification_1.ALERT_TYPE.DANGER,
                        title: "Failed to upload receipt",
                        textBody: "Please try again later.",
                    });
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); });
    var uploadMultipleFiles = withOfflineCheck(function (files) { return __awaiter(_this, void 0, void 0, function () {
        var _i, files_1, file, fileName;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _i = 0, files_1 = files;
                    _a.label = 1;
                case 1:
                    if (!(_i < files_1.length)) return [3 /*break*/, 4];
                    file = files_1[_i];
                    fileName = "name" in file ? file.name : file.fileName;
                    return [4 /*yield*/, uploadFile({
                            uri: file.uri,
                            fileName: fileName || undefined,
                            mimeType: file.mimeType || undefined,
                        })];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3:
                    _i++;
                    return [3 /*break*/, 1];
                case 4: return [2 /*return*/];
            }
        });
    }); });
    var handleActionSheet = withOfflineCheck(function () {
        var options = ["Camera", "Photo Library", "Document", "Cancel"];
        var cancelButtonIndex = 3;
        showActionSheetWithOptions({
            options: options,
            cancelButtonIndex: cancelButtonIndex,
            userInterfaceStyle: isDark ? "dark" : "light",
            containerStyle: {
                backgroundColor: isDark ? "#252429" : "white",
            },
            textStyle: {
                color: isDark ? "white" : "black",
            },
        }, function (buttonIndex) { return __awaiter(_this, void 0, void 0, function () {
            var result, result, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(buttonIndex === 0)) return [3 /*break*/, 4];
                        // Take a photo
                        ImagePicker.requestCameraPermissionsAsync();
                        return [4 /*yield*/, ImagePicker.launchCameraAsync({
                                mediaTypes: "images",
                                quality: 1,
                            })];
                    case 1:
                        result = _a.sent();
                        if (!!result.canceled) return [3 /*break*/, 3];
                        return [4 /*yield*/, uploadFile({
                                uri: result.assets[0].uri,
                                fileName: result.assets[0].fileName || undefined,
                            })];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [3 /*break*/, 11];
                    case 4:
                        if (!(buttonIndex === 1)) return [3 /*break*/, 8];
                        // Pick from photo library
                        ImagePicker.requestMediaLibraryPermissionsAsync();
                        return [4 /*yield*/, ImagePicker.launchImageLibraryAsync({
                                quality: 1,
                                allowsMultipleSelection: true,
                                selectionLimit: 10,
                            })];
                    case 5:
                        result = _a.sent();
                        if (!(!result.canceled && result.assets.length > 0)) return [3 /*break*/, 7];
                        return [4 /*yield*/, uploadMultipleFiles(result.assets)];
                    case 6:
                        _a.sent();
                        _a.label = 7;
                    case 7: return [3 /*break*/, 11];
                    case 8:
                        if (!(buttonIndex === 2)) return [3 /*break*/, 11];
                        return [4 /*yield*/, DocumentPicker.getDocumentAsync({
                                type: ["application/pdf", "image/*"],
                                copyToCacheDirectory: true,
                                multiple: true,
                            })];
                    case 9:
                        result = _a.sent();
                        if (!(!result.canceled && result.assets.length > 0)) return [3 /*break*/, 11];
                        return [4 /*yield*/, uploadMultipleFiles(result.assets)];
                    case 10:
                        _a.sent();
                        _a.label = 11;
                    case 11: return [2 /*return*/];
                }
            });
        }); });
    });
    return {
        handleActionSheet: handleActionSheet,
        isOnline: isOnline,
    };
}
