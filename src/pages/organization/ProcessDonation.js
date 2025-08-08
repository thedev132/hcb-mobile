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
exports.default = ProcessDonationPage;
var jsx_runtime_1 = require("react/jsx-runtime");
var vector_icons_1 = require("@expo/vector-icons");
var native_1 = require("@react-navigation/native");
var Clipboard = __importStar(require("expo-clipboard"));
var Haptics = __importStar(require("expo-haptics"));
var react_1 = require("react");
var react_native_1 = require("react-native");
// @ts-expect-error no types
var react_native_qrcode_styled_1 = __importDefault(require("react-native-qrcode-styled"));
var Button_1 = __importDefault(require("../../components/Button"));
var theme_1 = require("../../theme");
function ProcessDonationPage(_a) {
    var _this = this;
    var navigation = _a.navigation, _b = _a.route.params, payment = _b.payment, collectPayment = _b.collectPayment, email = _b.email, name = _b.name, slug = _b.slug;
    var _c = (0, react_1.useState)("ready"), status = _c[0], setStatus = _c[1];
    var _d = (0, react_1.useState)(false), showQR = _d[0], setShowQR = _d[1];
    var theme = (0, native_1.useTheme)();
    var donationUrl = "https://hcb.hackclub.com/donations/start/".concat(slug, "?name=").concat(encodeURIComponent(name), "&email=").concat(encodeURIComponent(email), "&amount=").concat(payment === null || payment === void 0 ? void 0 : payment.amount);
    (0, react_1.useEffect)(function () {
        if (showQR) {
            navigation.setOptions({
                title: "Donation Link",
            });
        }
    }, [showQR, navigation]);
    (0, react_1.useEffect)(function () {
        navigation.setOptions({
            headerLeft: function () { return ((0, jsx_runtime_1.jsx)(react_native_1.Button, { title: status == "ready" || status == "loading" ? "Cancel" : "Done", color: theme_1.palette.primary, onPress: function () { return navigation.goBack(); } })); },
        });
    }, [status, navigation]);
    return ((0, jsx_runtime_1.jsxs)(react_native_1.View, { style: {
            padding: 20,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flex: 1,
        }, children: [(0, jsx_runtime_1.jsx)(react_native_1.StatusBar, { barStyle: "light-content" }), status == "ready" ? (showQR ? ((0, jsx_runtime_1.jsxs)(react_native_1.View, { style: {
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                }, children: [(0, jsx_runtime_1.jsxs)(react_native_1.View, { style: {
                            marginBottom: 0,
                            alignItems: "center",
                            backgroundColor: theme.colors.card,
                            padding: 20,
                            borderRadius: 12,
                            borderWidth: 1,
                            borderColor: theme.colors.border,
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 2,
                            },
                            shadowOpacity: 0.1,
                            shadowRadius: 4,
                            elevation: 3,
                        }, children: [(0, jsx_runtime_1.jsx)(react_native_qrcode_styled_1.default, { data: donationUrl, style: { backgroundColor: theme.colors.card }, padding: 20, pieceSize: 5, pieceCornerType: "rounded", isPiecesGlued: true, pieceBorderRadius: 1, color: theme.colors.text }), (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: {
                                    color: theme.colors.text,
                                    marginTop: 15,
                                    textAlign: "center",
                                    fontSize: 14,
                                    opacity: 0.8,
                                }, children: "Scan to complete donation" })] }), (0, jsx_runtime_1.jsxs)(react_native_1.View, { style: { position: "absolute", bottom: 30, width: "100%" }, children: [(0, jsx_runtime_1.jsx)(Button_1.default, { onPress: function () { return __awaiter(_this, void 0, void 0, function () {
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0: return [4 /*yield*/, Clipboard.setStringAsync(donationUrl)];
                                            case 1:
                                                _a.sent();
                                                react_native_1.Alert.alert("Copied!", "Donation link copied to clipboard.");
                                                return [2 /*return*/];
                                        }
                                    });
                                }); }, style: {
                                    marginTop: 10,
                                    alignSelf: "center",
                                    width: "100%",
                                }, children: "Copy Link" }), (0, jsx_runtime_1.jsx)(Button_1.default, { onPress: function () { return setShowQR(false); }, style: {
                                    marginTop: 20,
                                    alignSelf: "center",
                                    width: "100%",
                                }, children: "Back" })] })] })) : ((0, jsx_runtime_1.jsxs)(react_native_1.View, { style: {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flex: 1,
                    paddingBottom: 40,
                }, children: [(0, jsx_runtime_1.jsx)(react_native_1.Text, { style: { color: theme_1.palette.muted, fontSize: 24 }, children: "Donation amount" }), (0, jsx_runtime_1.jsxs)(react_native_1.Text, { style: {
                            fontSize: 50,
                            color: theme.colors.text,
                        }, children: ["$", ((payment === null || payment === void 0 ? void 0 : payment.amount) / 100).toFixed(2)] }), (0, jsx_runtime_1.jsxs)(react_native_1.View, { style: { position: "absolute", bottom: 30, width: "100%" }, children: [(0, jsx_runtime_1.jsx)(Button_1.default, { onPress: function () { return setShowQR(true); }, style: {
                                    marginTop: 10,
                                    alignSelf: "center",
                                    width: "100%",
                                }, children: "Show Donation QR Code" }), (0, jsx_runtime_1.jsxs)(Button_1.default, { onPress: function () { return __awaiter(_this, void 0, void 0, function () {
                                    var success;
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0:
                                                setStatus("loading");
                                                return [4 /*yield*/, collectPayment()];
                                            case 1:
                                                success = _a.sent();
                                                setStatus(success ? "success" : "error");
                                                Haptics.notificationAsync(success
                                                    ? Haptics.NotificationFeedbackType.Success
                                                    : Haptics.NotificationFeedbackType.Error);
                                                return [2 /*return*/];
                                        }
                                    });
                                }); }, style: {
                                    marginBottom: 10,
                                    marginTop: 20,
                                    alignSelf: "center",
                                    width: "100%",
                                }, children: ["Use Tap to Pay ", react_native_1.Platform.OS === "ios" ? "on iPhone" : null] })] })] }))) : status == "success" ? ((0, jsx_runtime_1.jsxs)(react_native_1.View, { style: {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flex: 1,
                    paddingBottom: 100,
                }, children: [(0, jsx_runtime_1.jsx)(vector_icons_1.Ionicons, { name: "checkmark-circle-outline", size: 100, color: theme_1.palette.success }), (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: {
                            fontSize: 20,
                            fontWeight: "600",
                            marginBottom: 10,
                            color: theme.colors.text,
                        }, children: name ? "Thank you, ".concat(name, "!") : "Thank you!" }), (0, jsx_runtime_1.jsxs)(react_native_1.Text, { style: {
                            fontSize: 16,
                            color: theme.colors.text,
                        }, children: ["$" + ((payment === null || payment === void 0 ? void 0 : payment.amount) / 100).toFixed(2), " donation completed successfully"] }), email && ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(react_native_1.Text, { style: {
                                    fontSize: 16,
                                    color: theme.colors.text,
                                    marginTop: 10,
                                }, children: "A receipt has been sent to the email address:" }), (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: {
                                    fontSize: 16,
                                    color: theme.colors.text,
                                }, children: email })] })), (0, jsx_runtime_1.jsx)(Button_1.default, { onPress: navigation.goBack, style: {
                            position: "absolute",
                            bottom: 30,
                            width: "100%",
                        }, children: "Done" })] })) : status == "loading" ? ((0, jsx_runtime_1.jsxs)(react_native_1.View, { style: {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flex: 1,
                    paddingBottom: 40,
                }, children: [(0, jsx_runtime_1.jsx)(react_native_1.ActivityIndicator, { size: "large", style: {
                            margin: 20,
                        } }), (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: {
                            fontSize: 20,
                            fontWeight: "600",
                            paddingBottom: 10,
                            color: theme.colors.text,
                        }, children: "Processing" }), (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: {
                            fontSize: 16,
                            color: theme.colors.text,
                        }, children: "Please wait..." })] })) : ((0, jsx_runtime_1.jsxs)(react_native_1.View, { style: {
                    flex: 1,
                    justifyContent: "center",
                    paddingHorizontal: 20,
                    paddingBottom: 30,
                    backgroundColor: theme.colors.background,
                }, children: [(0, jsx_runtime_1.jsxs)(react_native_1.View, { style: { width: "100%", flex: 1, justifyContent: "center" }, children: [!showQR && ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(vector_icons_1.Ionicons, { name: "close-circle-outline", size: 100, color: theme_1.palette.warning, style: { marginBottom: 16, alignSelf: "center" } }), (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: {
                                            fontSize: 20,
                                            fontWeight: "600",
                                            color: theme.colors.text,
                                            marginBottom: 8,
                                            textAlign: "center",
                                        }, children: "Error" }), (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: {
                                            fontSize: 16,
                                            color: theme.colors.text,
                                            textAlign: "center",
                                            marginBottom: 24,
                                        }, children: "An error occurred while processing the donation. Please try again." })] })), showQR ? ((0, jsx_runtime_1.jsxs)(react_native_1.View, { style: {
                                    marginBottom: 0,
                                    alignItems: "center",
                                    backgroundColor: theme.colors.card,
                                    padding: 20,
                                    borderRadius: 12,
                                    borderWidth: 1,
                                    borderColor: theme.colors.border,
                                    shadowColor: "#000",
                                    shadowOffset: {
                                        width: 0,
                                        height: 2,
                                    },
                                    shadowOpacity: 0.1,
                                    shadowRadius: 4,
                                    elevation: 3,
                                }, children: [(0, jsx_runtime_1.jsx)(react_native_qrcode_styled_1.default, { data: donationUrl, style: { backgroundColor: theme.colors.card }, padding: 20, pieceSize: 5, pieceCornerType: "rounded", isPiecesGlued: true, pieceBorderRadius: 1, color: theme.colors.text }), (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: {
                                            color: theme.colors.text,
                                            marginTop: 15,
                                            textAlign: "center",
                                            fontSize: 14,
                                            opacity: 0.8,
                                        }, children: "Scan to complete donation" })] })) : null] }), (0, jsx_runtime_1.jsxs)(react_native_1.View, { style: { width: "100%", position: "absolute", bottom: 30 }, children: [(0, jsx_runtime_1.jsx)(Button_1.default, { onPress: function () { return __awaiter(_this, void 0, void 0, function () {
                                    var success;
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0:
                                                setStatus("loading");
                                                return [4 /*yield*/, collectPayment()];
                                            case 1:
                                                success = _a.sent();
                                                setStatus(success ? "success" : "error");
                                                Haptics.notificationAsync(success
                                                    ? Haptics.NotificationFeedbackType.Success
                                                    : Haptics.NotificationFeedbackType.Error);
                                                return [2 /*return*/];
                                        }
                                    });
                                }); }, style: { marginBottom: 10 }, children: "Retry" }), !showQR && ((0, jsx_runtime_1.jsx)(Button_1.default, { onPress: function () { return setShowQR(true); }, style: { marginBottom: 10 }, children: "Show Donation QR Code" })), (0, jsx_runtime_1.jsx)(Button_1.default, { onPress: navigation.goBack, style: {
                                    width: "100%",
                                    alignSelf: "center",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }, children: "Close" })] })] }))] }));
}
