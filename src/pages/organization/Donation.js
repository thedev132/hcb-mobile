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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = OrganizationDonationPage;
var jsx_runtime_1 = require("react/jsx-runtime");
var vector_icons_1 = require("@expo/vector-icons");
var async_storage_1 = __importDefault(require("@react-native-async-storage/async-storage"));
var native_1 = require("@react-navigation/native");
var stripe_terminal_react_native_1 = require("@stripe/stripe-terminal-react-native");
var expo_checkbox_1 = __importDefault(require("expo-checkbox"));
var react_1 = require("react");
var react_native_1 = require("react-native");
var Progress = __importStar(require("react-native-progress"));
var swr_1 = __importDefault(require("swr"));
var ExpoTtpEdu = react_native_1.Platform.OS === "ios" ? require("expo-ttp-edu") : null;
var Button_1 = __importDefault(require("../../components/Button"));
var alertUtils_1 = require("../../lib/alertUtils");
var client_1 = __importDefault(require("../../lib/client"));
var errorUtils_1 = require("../../lib/errorUtils");
var useColorScheme_1 = require("../../lib/useColorScheme");
var useLocation_1 = require("../../lib/useLocation");
var theme_1 = require("../../theme");
function OrganizationDonationPage(_a) {
    var _this = this;
    var orgId = _a.route.params.orgId, navigation = _a.navigation;
    var isDark = (0, useColorScheme_1.useIsDark)();
    (0, react_1.useEffect)(function () {
        var getDidOnboarding = function () { return __awaiter(_this, void 0, void 0, function () {
            var didOnboarding, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        return [4 /*yield*/, async_storage_1.default.getItem("ttpDidOnboarding")];
                    case 1:
                        didOnboarding = _a.sent();
                        if (!(didOnboarding !== "true")) return [3 /*break*/, 4];
                        return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, 1000); })];
                    case 2:
                        _a.sent();
                        ExpoTtpEdu.showTapToPayEducation({
                            uiMode: isDark ? "dark" : "light",
                        });
                        return [4 /*yield*/, async_storage_1.default.setItem("ttpDidOnboarding", "true")];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        error_1 = _a.sent();
                        (0, errorUtils_1.logError)("Error in tap-to-pay onboarding", error_1, {
                            context: { action: "ttp_onboarding" },
                        });
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        }); };
        if (react_native_1.Platform.OS === "ios") {
            getDidOnboarding();
        }
    }, [isDark]);
    return (0, jsx_runtime_1.jsx)(PageWrapper, { orgId: orgId, navigation: navigation });
}
function PageWrapper(_a) {
    var orgId = _a.orgId, navigation = _a.navigation;
    return (0, jsx_runtime_1.jsx)(PageContent, { orgId: orgId, navigation: navigation });
}
var SectionHeader = function (_a) {
    var title = _a.title, subtitle = _a.subtitle;
    var colors = (0, native_1.useTheme)().colors;
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(react_native_1.Text, { style: {
                    fontSize: 24,
                    fontWeight: "bold",
                    marginBottom: subtitle ? 10 : 16,
                    color: colors.text,
                }, children: title }), subtitle && ((0, jsx_runtime_1.jsx)(react_native_1.Text, { style: { color: theme_1.palette.muted, fontSize: 16, marginBottom: 16 }, children: subtitle }))] }));
};
var SettingsModal = function (_a) {
    var visible = _a.visible, onClose = _a.onClose, isTaxDeductable = _a.isTaxDeductable, setIsTaxDeductable = _a.setIsTaxDeductable;
    var colors = (0, native_1.useTheme)().colors;
    return ((0, jsx_runtime_1.jsx)(react_native_1.Modal, { visible: visible, animationType: "slide", presentationStyle: "pageSheet", onRequestClose: onClose, children: (0, jsx_runtime_1.jsxs)(react_native_1.View, { style: { flex: 1, backgroundColor: colors.background }, children: [(0, jsx_runtime_1.jsxs)(react_native_1.View, { style: {
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: 20,
                        borderBottomWidth: 1,
                        borderBottomColor: colors.border,
                    }, children: [(0, jsx_runtime_1.jsx)(react_native_1.Text, { style: { fontSize: 18, fontWeight: "600", color: colors.text }, children: "Donation Settings" }), (0, jsx_runtime_1.jsx)(react_native_1.TouchableOpacity, { onPress: onClose, children: (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: { fontSize: 16, color: theme_1.palette.primary }, children: "Done" }) })] }), (0, jsx_runtime_1.jsx)(react_native_1.View, { style: {
                        flex: 1,
                        padding: 20,
                        marginHorizontal: 10,
                        alignItems: "center",
                    }, children: (0, jsx_runtime_1.jsxs)(react_native_1.View, { style: { flexDirection: "row", alignItems: "center", gap: 20 }, children: [(0, jsx_runtime_1.jsxs)(react_native_1.View, { children: [(0, jsx_runtime_1.jsx)(react_native_1.Text, { style: { color: colors.text, fontSize: 16 }, children: "I'm receiving goods for this donation." }), (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: { color: theme_1.palette.muted, fontSize: 14, marginTop: 8 }, children: "Check this if the donor is receiving goods or services in exchange for their donation." })] }), (0, jsx_runtime_1.jsx)(expo_checkbox_1.default, { color: colors.primary, style: {
                                    borderRadius: 5,
                                    width: 25,
                                    height: 25,
                                    marginHorizontal: 10,
                                }, value: isTaxDeductable, onValueChange: setIsTaxDeductable })] }) })] }) }));
};
function PageContent(_a) {
    var _this = this;
    var orgId = _a.orgId, navigation = _a.navigation;
    var colors = (0, native_1.useTheme)().colors;
    var _b = (0, swr_1.default)("organizations/".concat(orgId)), organization = _b.data, organizationLoading = _b.isLoading;
    var accessDenied = (0, useLocation_1.useLocation)().accessDenied;
    var _c = (0, react_1.useState)("$"), amount = _c[0], setAmount = _c[1];
    var value = parseFloat(amount.replace("$", "0"));
    var _d = (0, react_1.useState)(undefined), reader = _d[0], setReader = _d[1];
    var readerRef = (0, react_1.useRef)(reader);
    (0, react_1.useEffect)(function () {
        readerRef.current = reader;
    }, [reader]);
    var _e = (0, react_1.useState)(false), loadingConnectingReader = _e[0], setLoadingConnectingReader = _e[1];
    var _f = (0, react_1.useState)(null), currentProgress = _f[0], setCurrentProgress = _f[1];
    var locationIdStripeMock = "tml_FWRkngENcVS5Pd";
    var _g = (0, stripe_terminal_react_native_1.useStripeTerminal)({
        onUpdateDiscoveredReaders: function (readers) {
            setReader(readers[0]);
        },
        onDidReportReaderSoftwareUpdateProgress: function (progress) {
            setCurrentProgress(progress);
        },
    }), discoverReaders = _g.discoverReaders, connectReaderTapToPay = _g.connectReader, disconnectReader = _g.disconnectReader, createPaymentIntent = _g.createPaymentIntent, collectPaymentMethod = _g.collectPaymentMethod, confirmPaymentIntent = _g.confirmPaymentIntent, connectedReader = _g.connectedReader;
    var _h = (0, react_1.useState)(""), name = _h[0], setName = _h[1];
    var _j = (0, react_1.useState)(""), email = _j[0], setEmail = _j[1];
    var _k = (0, react_1.useState)(false), isTaxDeductable = _k[0], setIsTaxDeductable = _k[1];
    var _l = (0, react_1.useState)(false), showSettingsModal = _l[0], setShowSettingsModal = _l[1];
    var emailRef = (0, react_1.useRef)(null);
    var _m = (0, react_1.useState)(true), orgCheckLoading = _m[0], setOrgCheckLoading = _m[1];
    var hcb = (0, client_1.default)();
    // Load tax deductible setting from AsyncStorage
    (0, react_1.useEffect)(function () {
        var loadTaxDeductibleSetting = function () { return __awaiter(_this, void 0, void 0, function () {
            var saved, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, async_storage_1.default.getItem("donationTaxDeductible")];
                    case 1:
                        saved = _a.sent();
                        if (saved !== null) {
                            setIsTaxDeductable(JSON.parse(saved));
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        error_2 = _a.sent();
                        (0, errorUtils_1.logError)("Error loading tax deductible setting", error_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        loadTaxDeductibleSetting();
    }, []);
    // Save tax deductible setting to AsyncStorage when it changes
    (0, react_1.useEffect)(function () {
        var saveTaxDeductibleSetting = function () { return __awaiter(_this, void 0, void 0, function () {
            var error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, async_storage_1.default.setItem("donationTaxDeductible", JSON.stringify(isTaxDeductable))];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_3 = _a.sent();
                        (0, errorUtils_1.logError)("Error saving tax deductible setting", error_3);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        saveTaxDeductibleSetting();
    }, [isTaxDeductable]);
    // Set up navigation header with settings icon when connected
    (0, react_1.useLayoutEffect)(function () {
        if (connectedReader && !orgCheckLoading) {
            navigation.setOptions({
                headerRight: function () { return ((0, jsx_runtime_1.jsx)(react_native_1.TouchableOpacity, { onPress: function () { return setShowSettingsModal(true); }, style: { padding: 4 }, children: (0, jsx_runtime_1.jsx)(vector_icons_1.Ionicons, { name: "settings-outline", size: 24, color: colors.text }) })); },
            });
        }
        else {
            navigation.setOptions({
                headerRight: undefined,
            });
        }
    }, [navigation, connectedReader, orgCheckLoading, colors.text]);
    // Disconnect the reader as soon as the page loads if the last connected org id is different from the current org id
    (0, react_1.useEffect)(function () {
        (function () { return __awaiter(_this, void 0, void 0, function () {
            var storedOrgId, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, async_storage_1.default.getItem("lastConnectedOrgId")];
                    case 1:
                        storedOrgId = _a.sent();
                        if (!(connectedReader && storedOrgId !== orgId)) return [3 /*break*/, 5];
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        setLoadingConnectingReader(false);
                        setCurrentProgress(null);
                        return [4 /*yield*/, disconnectReader()];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        e_1 = _a.sent();
                        (0, errorUtils_1.logError)("Error disconnecting reader on page load", e_1, {
                            context: { orgId: orgId, action: "disconnect_reader" },
                        });
                        return [3 /*break*/, 5];
                    case 5:
                        setOrgCheckLoading(false);
                        return [2 /*return*/];
                }
            });
        }); })();
        // Only run on mount
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    // useEffect for discoverReaders (must be before early return)
    (0, react_1.useEffect)(function () {
        (function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, discoverReaders({
                            discoveryMethod: "tapToPay",
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); })();
    }, [discoverReaders]);
    // useEffect for accessDenied (must be before early return)
    function handleRequestLocation() {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, react_native_1.Linking.openSettings()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    }
    (0, react_1.useEffect)(function () {
        if (accessDenied) {
            (0, alertUtils_1.showAlert)("Access to location", "To use the app, you need to allow the use of your device location.", [
                {
                    text: "Activate",
                    onPress: handleRequestLocation,
                },
            ]);
        }
    }, [accessDenied]);
    // Block UI until organization is loaded
    if (organizationLoading || !organization) {
        return ((0, jsx_runtime_1.jsx)(react_native_1.View, { style: { flex: 1, justifyContent: "center", alignItems: "center" }, children: (0, jsx_runtime_1.jsx)(react_native_1.ActivityIndicator, { size: "large", color: theme_1.palette.primary }) }));
    }
    var orgName = organization.name;
    var orgSlug = organization.slug;
    var createDonation = function () { return __awaiter(_this, void 0, void 0, function () {
        var response, data, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, hcb.post("organizations/".concat(orgId, "/donations"), {
                            json: {
                                amount_cents: value * 100,
                                name: name,
                                email: email,
                                tax_deductable: isTaxDeductable,
                            },
                        })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = (_a.sent());
                    return [2 /*return*/, data.id];
                case 3:
                    error_4 = _a.sent();
                    (0, errorUtils_1.logCriticalError)("Error creating donation", error_4, {
                        orgId: orgId,
                        amount: value * 100,
                    });
                    throw error_4; // Re-throw to let calling code handle it
                case 4: return [2 /*return*/];
            }
        });
    }); };
    function connectReader(selectedReader) {
        return __awaiter(this, void 0, void 0, function () {
            var error, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        setLoadingConnectingReader(true);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, 5, 6]);
                        return [4 /*yield*/, connectReaderTapToPay({
                                reader: selectedReader,
                                locationId: locationIdStripeMock,
                                merchantDisplayName: orgName,
                            }, "tapToPay")];
                    case 2:
                        error = (_a.sent()).error;
                        setCurrentProgress(null);
                        if (error) {
                            (0, errorUtils_1.logCriticalError)("connectReader error", error, {
                                context: { orgId: orgId, action: "connect_reader" },
                            });
                            if (error.message == "You must provide a reader object") {
                                discoverReaders({
                                    discoveryMethod: "tapToPay",
                                    simulated: false,
                                });
                            }
                            return [2 /*return*/, false];
                        }
                        // Update AsyncStorage with the new org id after successful connection
                        return [4 /*yield*/, async_storage_1.default.setItem("lastConnectedOrgId", orgId)];
                    case 3:
                        // Update AsyncStorage with the new org id after successful connection
                        _a.sent();
                        setCurrentProgress(null);
                        return [3 /*break*/, 6];
                    case 4:
                        error_5 = _a.sent();
                        (0, errorUtils_1.logError)("connectReader error", error_5, {
                            context: { orgId: orgId, action: "connect_reader" },
                        });
                        return [3 /*break*/, 6];
                    case 5:
                        setLoadingConnectingReader(false);
                        return [7 /*endfinally*/];
                    case 6: return [2 /*return*/];
                }
            });
        });
    }
    function paymentIntent(_a) {
        return __awaiter(this, arguments, void 0, function (_b) {
            var _c, error, paymentIntent_1, error_6;
            var _this = this;
            var donation_id = _b.donation_id;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _d.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, createPaymentIntent({
                                amount: Number((value * 100).toFixed()),
                                currency: "usd",
                                paymentMethodTypes: ["card_present"],
                                offlineBehavior: "prefer_online",
                                captureMethod: "automatic",
                                metadata: {
                                    donation_id: donation_id,
                                    donation: "true",
                                },
                                statementDescriptor: "HCB ".concat(orgName.replace(/[<>\\'"*]/g, "") || "DONATION").substring(0, 22),
                            })];
                    case 1:
                        _c = _d.sent(), error = _c.error, paymentIntent_1 = _c.paymentIntent;
                        if (error) {
                            (0, errorUtils_1.logCriticalError)("createPaymentIntent error", error, {
                                context: { orgId: orgId, donation_id: donation_id, action: "payment_intent" },
                            });
                            return [2 /*return*/, false];
                        }
                        navigation.navigate("ProcessDonation", {
                            orgId: orgId,
                            payment: paymentIntent_1,
                            collectPayment: function () { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, collectPayment(paymentIntent_1)];
                                        case 1: return [2 /*return*/, _a.sent()];
                                    }
                                });
                            }); },
                            name: name,
                            email: email,
                            slug: orgSlug || "",
                        });
                        return [2 /*return*/, paymentIntent_1];
                    case 2:
                        error_6 = _d.sent();
                        (0, errorUtils_1.logError)("paymentIntent error", error_6, {
                            context: { orgId: orgId, donation_id: donation_id, action: "payment_intent" },
                        });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    }
    function collectPayment(localPayment) {
        return __awaiter(this, void 0, void 0, function () {
            var output, error, error_7;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, collectPaymentMethod({
                                paymentIntent: localPayment,
                            })];
                    case 1:
                        error = (_b.sent()).error;
                        if (error) {
                            if (error.code != "Canceled") {
                                (0, alertUtils_1.showAlert)("Error collecting payment", error.message);
                            }
                            return [2 /*return*/, false];
                        }
                        return [4 /*yield*/, confirmPayment(localPayment)];
                    case 2:
                        output = (_a = (_b.sent())) !== null && _a !== void 0 ? _a : false;
                        return [3 /*break*/, 4];
                    case 3:
                        error_7 = _b.sent();
                        (0, errorUtils_1.logError)("collectPayment error", error_7, {
                            context: { orgId: orgId, action: "collect_payment" },
                        });
                        output = false;
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/, output];
                }
            });
        });
    }
    function confirmPayment(localPayment) {
        return __awaiter(this, void 0, void 0, function () {
            var success, error, error_8;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, confirmPaymentIntent({
                                paymentIntent: localPayment,
                            })];
                    case 1:
                        error = (_a.sent()).error;
                        if (error) {
                            return [2 /*return*/];
                        }
                        success = true;
                        return [3 /*break*/, 3];
                    case 2:
                        error_8 = _a.sent();
                        (0, errorUtils_1.logError)("confirmPayment error", error_8, {
                            context: { orgId: orgId, action: "confirm_payment" },
                        });
                        success = false;
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/, success];
                }
            });
        });
    }
    if (!connectedReader || orgCheckLoading) {
        // centered view that says "connect reader"
        return ((0, jsx_runtime_1.jsx)(react_native_1.View, { style: {
                padding: 20,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flex: 1,
            }, children: (0, jsx_runtime_1.jsxs)(react_native_1.View, { style: {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flex: 1,
                    paddingBottom: 100,
                }, children: [(0, jsx_runtime_1.jsx)(vector_icons_1.Ionicons, { name: "card-outline", size: 100, color: theme_1.palette.primary }), (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: {
                            fontSize: 20,
                            fontWeight: "600",
                            marginBottom: 10,
                            marginTop: 10,
                            color: colors.text,
                        }, children: "Collect Donations" }), (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: {
                            fontSize: 16,
                            color: colors.text,
                            marginBottom: 20,
                        }, children: "Receive donations using Tap to Pay" }), currentProgress ? ((0, jsx_runtime_1.jsx)(react_native_1.View, { style: {
                            marginTop: 8,
                            marginBottom: 8,
                        }, children: (0, jsx_runtime_1.jsx)(Progress.Bar, { progress: parseFloat(currentProgress), width: 200, height: 20 }) })) : null, (0, jsx_runtime_1.jsx)(Button_1.default, { onPress: function () { return __awaiter(_this, void 0, void 0, function () {
                            var waitForReader, readers, found;
                            var _this = this;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        setLoadingConnectingReader(true);
                                        waitForReader = function () {
                                            var args_1 = [];
                                            for (var _i = 0; _i < arguments.length; _i++) {
                                                args_1[_i] = arguments[_i];
                                            }
                                            return __awaiter(_this, __spreadArray([], args_1, true), void 0, function (timeoutMs, pollInterval) {
                                                var maxAttempts, attempts;
                                                if (timeoutMs === void 0) { timeoutMs = 10000; }
                                                if (pollInterval === void 0) { pollInterval = 300; }
                                                return __generator(this, function (_a) {
                                                    switch (_a.label) {
                                                        case 0:
                                                            maxAttempts = Math.ceil(timeoutMs / pollInterval);
                                                            attempts = 0;
                                                            _a.label = 1;
                                                        case 1:
                                                            if (!(attempts < maxAttempts)) return [3 /*break*/, 3];
                                                            return [4 /*yield*/, new Promise(function (res) { return setTimeout(res, pollInterval); })];
                                                        case 2:
                                                            _a.sent();
                                                            if (readerRef.current) {
                                                                return [2 /*return*/, true];
                                                            }
                                                            attempts++;
                                                            return [3 /*break*/, 1];
                                                        case 3: return [2 /*return*/, false];
                                                    }
                                                });
                                            });
                                        };
                                        if (!reader) return [3 /*break*/, 2];
                                        return [4 /*yield*/, connectReader(reader)];
                                    case 1:
                                        _a.sent();
                                        setLoadingConnectingReader(false);
                                        return [2 /*return*/];
                                    case 2:
                                        (0, errorUtils_1.logCriticalError)("No reader found " + JSON.stringify(reader), {
                                            context: { orgId: orgId, action: "connect_reader" },
                                        });
                                        _a.label = 3;
                                    case 3: return [4 /*yield*/, discoverReaders({
                                            discoveryMethod: "tapToPay",
                                        })];
                                    case 4:
                                        readers = _a.sent();
                                        return [4 /*yield*/, waitForReader()];
                                    case 5:
                                        found = _a.sent();
                                        if (!(found && readerRef.current)) return [3 /*break*/, 7];
                                        return [4 /*yield*/, connectReader(readerRef.current)];
                                    case 6:
                                        _a.sent();
                                        return [3 /*break*/, 8];
                                    case 7:
                                        (0, errorUtils_1.logCriticalError)("No reader found " + JSON.stringify(readers), {
                                            context: { orgId: orgId, action: "connect_reader" },
                                        });
                                        (0, alertUtils_1.showAlert)("No reader found", "No Tap to Pay reader was found nearby. Please make sure your device is ready.");
                                        _a.label = 8;
                                    case 8:
                                        setLoadingConnectingReader(false);
                                        return [2 /*return*/];
                                }
                            });
                        }); }, style: {
                            marginBottom: 10,
                            position: "absolute",
                            bottom: 72,
                            width: "100%",
                        }, loading: loadingConnectingReader, children: "Collect donations" })] }) }));
    }
    return ((0, jsx_runtime_1.jsx)(react_native_1.TouchableWithoutFeedback, { onPress: function () { return react_native_1.Keyboard.dismiss(); }, children: (0, jsx_runtime_1.jsxs)(react_native_1.ScrollView, { style: { flex: 1 }, bounces: false, children: [(0, jsx_runtime_1.jsxs)(react_native_1.View, { style: {
                        padding: 20,
                        display: "flex",
                        alignItems: "flex-start",
                        justifyContent: "space-between",
                        flex: 1,
                        width: "100%",
                        height: "100%",
                    }, children: [(0, jsx_runtime_1.jsx)(SectionHeader, { title: "Capture Donation", subtitle: "Collect donations for your organization right from your mobile device." }), (0, jsx_runtime_1.jsxs)(react_native_1.View, { style: {
                                flexDirection: "column",
                                display: "flex",
                                alignItems: "flex-start",
                                justifyContent: "center",
                                marginBottom: 10,
                            }, children: [(0, jsx_runtime_1.jsxs)(react_native_1.View, { style: {
                                        flexDirection: "row",
                                        alignItems: "center",
                                        justifyContent: "flex-start",
                                        gap: 20,
                                    }, children: [(0, jsx_runtime_1.jsx)(react_native_1.View, { style: { flexBasis: 70 }, children: (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: { color: colors.text, fontSize: 20 }, children: "Name" }) }), (0, jsx_runtime_1.jsx)(react_native_1.TextInput, { style: {
                                                color: colors.text,
                                                backgroundColor: colors.card,
                                                padding: 12,
                                                borderRadius: 8,
                                                fontSize: 16,
                                                flex: 1,
                                            }, selectTextOnFocus: true, autoFocus: true, clearButtonMode: "while-editing", value: name, autoCapitalize: "words", onChangeText: setName, autoComplete: "off", autoCorrect: false, placeholder: "Full name (optional)", placeholderTextColor: theme_1.palette.muted, returnKeyType: "next", onSubmitEditing: function () {
                                                var _a;
                                                (_a = emailRef.current) === null || _a === void 0 ? void 0 : _a.focus();
                                            } })] }), (0, jsx_runtime_1.jsxs)(react_native_1.View, { style: {
                                        flexDirection: "row",
                                        alignItems: "center",
                                        justifyContent: "flex-start",
                                        gap: 20,
                                        marginTop: 10,
                                    }, children: [(0, jsx_runtime_1.jsx)(react_native_1.View, { style: { flexBasis: 70 }, children: (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: { color: colors.text, fontSize: 20 }, children: "Email" }) }), (0, jsx_runtime_1.jsx)(react_native_1.TextInput, { style: {
                                                color: colors.text,
                                                backgroundColor: colors.card,
                                                padding: 12,
                                                borderRadius: 8,
                                                fontSize: 16,
                                                flex: 1,
                                            }, selectTextOnFocus: true, clearButtonMode: "while-editing", placeholder: "Email (optional)", placeholderTextColor: theme_1.palette.muted, autoCapitalize: "none", value: email, onChangeText: setEmail, ref: emailRef })] })] }), (0, jsx_runtime_1.jsx)(react_native_1.View, { style: { flex: 1, width: "100%", marginVertical: 15 }, children: (0, jsx_runtime_1.jsx)(Keyboard, { amount: amount, setAmount: setAmount }) }), connectedReader ? ((0, jsx_runtime_1.jsx)(Button_1.default, { onPress: function () { return __awaiter(_this, void 0, void 0, function () {
                                var donation_id, error_9;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            _a.trys.push([0, 3, , 4]);
                                            return [4 /*yield*/, createDonation()];
                                        case 1:
                                            donation_id = _a.sent();
                                            return [4 /*yield*/, paymentIntent({ donation_id: donation_id })];
                                        case 2:
                                            _a.sent();
                                            return [3 /*break*/, 4];
                                        case 3:
                                            error_9 = _a.sent();
                                            (0, errorUtils_1.logCriticalError)("createDonation error", error_9, {
                                                context: {
                                                    orgId: orgId,
                                                    amount: value * 100,
                                                    action: "create_donation",
                                                },
                                            });
                                            (0, alertUtils_1.showAlert)("Error creating donation", "Please try again.");
                                            return [3 /*break*/, 4];
                                        case 4: return [2 /*return*/];
                                    }
                                });
                            }); }, style: {
                                width: "100%",
                            }, children: "Create donation" })) : ((0, jsx_runtime_1.jsx)(Button_1.default, { onPress: function () { return reader && connectReader(reader); }, children: "Reconnect reader" }))] }), (0, jsx_runtime_1.jsx)(SettingsModal, { visible: showSettingsModal, onClose: function () { return setShowSettingsModal(false); }, isTaxDeductable: isTaxDeductable, setIsTaxDeductable: setIsTaxDeductable })] }) }));
}
var Keyboard = function (_a) {
    var amount = _a.amount, setAmount = _a.setAmount;
    var _b = (0, react_1.useState)(false), error = _b[0], setError = _b[1];
    var theme = (0, native_1.useTheme)();
    function pressNumber(amount, number) {
        if (parseFloat(amount.replace("$", "0") + number) > 9999.99 ||
            (amount == "$" && number == 0) ||
            amount[amount.length - 3] == ".") {
            setError(true);
            setTimeout(function () { return setError(false); }, 200);
        }
        else {
            setAmount(amount + number);
        }
    }
    function pressDecimal(amount) {
        if (amount.includes(".") || amount == "$") {
            setError(true);
            setTimeout(function () { return setError(false); }, 200);
        }
        else {
            setAmount(amount + ".");
        }
    }
    function pressBackspace(amount) {
        if (amount == "$") {
            setError(true);
            setTimeout(function () { return setError(false); }, 200);
        }
        else {
            setAmount(amount.slice(0, amount.length - 1));
        }
    }
    var Number = function (_a) {
        var number = _a.number, symbol = _a.symbol, onPress = _a.onPress;
        return ((0, jsx_runtime_1.jsxs)(react_native_1.Text, { style: {
                color: theme.colors.text,
                fontSize: 24,
                textAlign: "center",
                fontFamily: "JetBrains Mono",
                flexGrow: 1,
            }, onPress: function () {
                if (onPress) {
                    onPress();
                }
                else if (number !== undefined) {
                    pressNumber(amount, number);
                }
            }, children: [number, symbol] }));
    };
    return ((0, jsx_runtime_1.jsxs)(react_native_1.View, { style: {
            width: "100%",
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "stretch",
            justifyContent: "space-around",
        }, children: [(0, jsx_runtime_1.jsxs)(react_native_1.Text, { style: {
                    color: error ? theme_1.palette.primary : theme.colors.text,
                    paddingBottom: 10,
                    paddingHorizontal: 10,
                    fontSize: 72,
                    textTransform: "uppercase",
                    textAlign: "center",
                }, children: [amount, amount == "$" && (0, jsx_runtime_1.jsx)(react_native_1.Text, { children: "0" }), amount[amount.length - 1] == "." && ((0, jsx_runtime_1.jsx)(react_native_1.Text, { style: { color: theme_1.palette.muted }, children: "00" })), amount[amount.length - 2] == "." && ((0, jsx_runtime_1.jsx)(react_native_1.Text, { style: { color: theme_1.palette.muted }, children: "0" }))] }), (0, jsx_runtime_1.jsxs)(react_native_1.View, { children: [(0, jsx_runtime_1.jsxs)(react_native_1.View, { style: { flexDirection: "row", paddingBottom: 16 }, children: [(0, jsx_runtime_1.jsx)(Number, { number: 1 }), (0, jsx_runtime_1.jsx)(Number, { number: 2 }), (0, jsx_runtime_1.jsx)(Number, { number: 3 })] }), (0, jsx_runtime_1.jsxs)(react_native_1.View, { style: { flexDirection: "row", paddingTop: 24, paddingBottom: 16 }, children: [(0, jsx_runtime_1.jsx)(Number, { number: 4 }), (0, jsx_runtime_1.jsx)(Number, { number: 5 }), (0, jsx_runtime_1.jsx)(Number, { number: 6 })] }), (0, jsx_runtime_1.jsxs)(react_native_1.View, { style: { flexDirection: "row", paddingTop: 24, paddingBottom: 16 }, children: [(0, jsx_runtime_1.jsx)(Number, { number: 7 }), (0, jsx_runtime_1.jsx)(Number, { number: 8 }), (0, jsx_runtime_1.jsx)(Number, { number: 9 })] }), (0, jsx_runtime_1.jsxs)(react_native_1.View, { style: { flexDirection: "row", paddingTop: 24, paddingBottom: 16 }, children: [(0, jsx_runtime_1.jsx)(Number, { symbol: ".", onPress: function () { return pressDecimal(amount); } }), (0, jsx_runtime_1.jsx)(Number, { number: 0 }), (0, jsx_runtime_1.jsx)(Number, { symbol: "←", onPress: function () { return pressBackspace(amount); } })] })] })] }));
};
