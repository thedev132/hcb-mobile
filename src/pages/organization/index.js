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
exports.default = OrganizationPage;
var jsx_runtime_1 = require("react/jsx-runtime");
var vector_icons_1 = require("@expo/vector-icons");
var async_storage_1 = __importDefault(require("@react-native-async-storage/async-storage"));
var menu_1 = require("@react-native-menu/menu");
var bottom_tabs_1 = require("@react-navigation/bottom-tabs");
var native_1 = require("@react-navigation/native");
var stripe_terminal_react_native_1 = require("@stripe/stripe-terminal-react-native");
var Device = __importStar(require("expo-device"));
var groupBy_1 = __importDefault(require("lodash/groupBy"));
var react_1 = require("react");
var react_native_1 = require("react-native");
var react_native_alert_notification_1 = require("react-native-alert-notification");
var swr_1 = __importStar(require("swr"));
var Button_1 = __importDefault(require("../../components/Button"));
var MockTransaction_1 = __importDefault(require("../../components/MockTransaction"));
var EmptyState_1 = require("../../components/organizations/EmptyState");
var LoadingSkeleton_1 = require("../../components/organizations/LoadingSkeleton");
var PlaygroundBanner_1 = __importDefault(require("../../components/organizations/PlaygroundBanner"));
var TapToPayBanner_1 = __importDefault(require("../../components/organizations/TapToPayBanner"));
var Transaction_1 = __importDefault(require("../../components/Transaction"));
var errorUtils_1 = require("../../lib/errorUtils");
var useMockTransactionEngine_1 = __importDefault(require("../../lib/organization/useMockTransactionEngine"));
var useTransactions_1 = __importDefault(require("../../lib/organization/useTransactions"));
var Transaction_2 = require("../../lib/types/Transaction");
var useOffline_1 = require("../../lib/useOffline");
var theme_1 = require("../../theme");
var util_1 = require("../../util");
function addPendingFeeToTransactions(transactions, organization) {
    if (transactions.length > 0 &&
        organization &&
        "fee_balance_cents" in organization &&
        organization.fee_balance_cents > 0) {
        return __spreadArray([
            {
                amount_cents: -organization.fee_balance_cents,
                code: Transaction_2.TransactionType.BankFee,
                date: "",
                pending: true,
                memo: "FISCAL SPONSORSHIP",
                has_custom_memo: false,
                declined: false,
                missing_receipt: false,
            }
        ], transactions, true);
    }
    else {
        return transactions;
    }
}
function OrganizationPage(_a) {
    var _this = this;
    var _b = _a.route.params, orgId = _b.orgId, _organization = _b.organization, navigation = _a.navigation;
    var scheme = (0, react_native_1.useColorScheme)();
    var _c = (0, swr_1.default)("organizations/".concat(orgId), {
        fallbackData: _organization,
    }), organization = _c.data, organizationError = _c.error, organizationLoading = _c.isLoading;
    var _d = (0, swr_1.default)("user"), user = _d.data, userLoading = _d.isLoading;
    var _e = (0, react_1.useState)(false), showMockData = _e[0], setShowMockData = _e[1];
    var _f = (0, react_1.useState)(false), showTapToPayBanner = _f[0], setShowTapToPayBanner = _f[1];
    var terminal = (0, stripe_terminal_react_native_1.useStripeTerminal)();
    var _g = (0, react_1.useState)(false), supportsTapToPay = _g[0], setSupportsTapToPay = _g[1];
    var _h = (0, react_1.useState)(false), terminalInitialized = _h[0], setTerminalInitialized = _h[1];
    var _j = (0, useTransactions_1.default)(orgId), _transactions = _j.transactions, isLoadingMore = _j.isLoadingMore, loadMore = _j.loadMore, isLoading = _j.isLoading;
    var refreshing = (0, react_1.useState)(false)[0];
    var isOnline = (0, useOffline_1.useOffline)().isOnline;
    (0, react_1.useEffect)(function () {
        if (organizationError || !organization) {
            navigation.setOptions({
                title: "Access Denied",
            });
        }
    }, [organizationError, organization, navigation]);
    (0, react_1.useEffect)(function () {
        var checkTapToPayBanner = function () { return __awaiter(_this, void 0, void 0, function () {
            var hasSeenBanner, _a, major, minor, error_1;
            var _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, async_storage_1.default.getItem("hasSeenTapToPayBanner")];
                    case 1:
                        hasSeenBanner = _c.sent();
                        if (!hasSeenBanner && react_native_1.Platform.OS === "ios") {
                            _a = ((_b = Device.osVersion) !== null && _b !== void 0 ? _b : "0.0")
                                .split(".")
                                .map(Number), major = _a[0], minor = _a[1];
                            // iOS 16.4 and later
                            if (major > 16 || (major === 16 && minor >= 4)) {
                                setShowTapToPayBanner(true);
                            }
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _c.sent();
                        (0, errorUtils_1.logError)("Error checking tap to pay banner status", error_1, {
                            context: { action: "check_ttp_banner" },
                        });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        checkTapToPayBanner();
    }, []);
    (0, react_1.useEffect)(function () {
        // Reset initialization when organization changes
        setTerminalInitialized(false);
    }, [organization]);
    (0, react_1.useEffect)(function () {
        (function () { return __awaiter(_this, void 0, void 0, function () {
            var supported, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(organization &&
                            !organization.playground_mode &&
                            !terminalInitialized)) return [3 /*break*/, 6];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, terminal.initialize()];
                    case 2:
                        _a.sent();
                        setTerminalInitialized(true);
                        return [4 /*yield*/, terminal.supportsReadersOfType({
                                deviceType: "tapToPay",
                                discoveryMethod: "tapToPay",
                            })];
                    case 3:
                        supported = _a.sent();
                        setSupportsTapToPay(!!supported);
                        return [3 /*break*/, 5];
                    case 4:
                        error_2 = _a.sent();
                        (0, errorUtils_1.logError)("Stripe Terminal initialization error", error_2, {
                            context: { organizationId: organization === null || organization === void 0 ? void 0 : organization.id },
                        });
                        setSupportsTapToPay(false);
                        return [3 /*break*/, 5];
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        if (!organization || organization.playground_mode) {
                            setSupportsTapToPay(false);
                        }
                        _a.label = 7;
                    case 7: return [2 /*return*/];
                }
            });
        }); })();
    }, [organization, terminal, terminalInitialized]);
    var handleDismissTapToPayBanner = function () { return __awaiter(_this, void 0, void 0, function () {
        var error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, async_storage_1.default.setItem("hasSeenTapToPayBanner", "true")];
                case 1:
                    _a.sent();
                    setShowTapToPayBanner(false);
                    return [3 /*break*/, 3];
                case 2:
                    error_3 = _a.sent();
                    (0, errorUtils_1.logError)("Error saving tap to pay banner dismiss status", error_3, {
                        context: { action: "dismiss_ttp_banner" },
                    });
                    // Still hide the banner even if saving fails
                    setShowTapToPayBanner(false);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    (0, react_1.useEffect)(function () {
        if (organization && user) {
            var isManager = "users" in organization &&
                organization.users.some(function (u) { return u.id === (user === null || user === void 0 ? void 0 : user.id) && u.role === "manager"; });
            navigation.setOptions({
                title: organization.name,
                // headerTitle: () => <OrganizationTitle organization={organization} />,
            });
            var menuActions_1 = [];
            if ("users" in organization &&
                organization.users.some(function (u) { return u.id === (user === null || user === void 0 ? void 0 : user.id); })) {
                if ("account_number" in organization &&
                    organization.account_number !== null) {
                    menuActions_1.push({
                        id: "accountNumber",
                        title: "View Account Details",
                        image: "creditcard.and.123",
                    });
                }
                if (isManager && !organization.playground_mode) {
                    menuActions_1.push({
                        id: "transfer",
                        title: "Transfer Money",
                        image: "dollarsign.circle",
                    });
                }
                menuActions_1.push({
                    id: "team",
                    title: "Manage Team",
                    image: "person.2.badge.gearshape",
                });
                if (!organization.playground_mode && supportsTapToPay) {
                    menuActions_1.push({
                        id: "donation",
                        title: "Collect Donations",
                        image: "dollarsign.circle",
                    });
                }
                navigation.setOptions({
                    headerRight: function () { return ((0, jsx_runtime_1.jsx)(menu_1.MenuView, { actions: menuActions_1, themeVariant: scheme || undefined, onPressAction: function (_a) {
                            var event = _a.nativeEvent.event;
                            if (event == "accountNumber") {
                                navigation.navigate("AccountNumber", {
                                    orgId: organization.id,
                                });
                            }
                            else if (event == "team") {
                                navigation.navigate("OrganizationTeam", {
                                    orgId: organization.id,
                                });
                            }
                            else if (event == "donation") {
                                if (supportsTapToPay) {
                                    navigation.navigate("OrganizationDonation", {
                                        orgId: organization.id,
                                    });
                                }
                                else {
                                    react_native_alert_notification_1.Dialog.show({
                                        type: react_native_alert_notification_1.ALERT_TYPE.DANGER,
                                        title: "Unsupported Device",
                                        textBody: "Collecting donations is only supported on iOS 16.4 and later. Please update your device to use this feature.",
                                        button: "Ok",
                                    });
                                }
                            }
                            else if (event == "transfer") {
                                navigation.navigate("Transfer", {
                                    organization: organization,
                                });
                            }
                        }, children: (0, jsx_runtime_1.jsx)(vector_icons_1.Ionicons.Button, { name: "ellipsis-horizontal-circle", backgroundColor: "transparent", size: 24, color: theme_1.palette.primary, iconStyle: { marginRight: 0 } }) })); },
                });
            }
        }
    }, [organization, scheme, navigation, user, supportsTapToPay]);
    var tabBarSize = (0, bottom_tabs_1.useBottomTabBarHeight)();
    var themeColors = (0, native_1.useTheme)().colors;
    var transactions = (0, react_1.useMemo)(function () { return addPendingFeeToTransactions(_transactions, organization); }, [_transactions, organization]);
    var sections = (0, react_1.useMemo)(function () {
        return Object.entries((0, groupBy_1.default)(transactions, function (t) {
            return (t === null || t === void 0 ? void 0 : t.pending) ? "Pending" : (0, util_1.renderDate)(t === null || t === void 0 ? void 0 : t.date);
        })).map(function (_a) {
            var title = _a[0], data = _a[1];
            return ({
                title: title,
                data: data,
            });
        });
    }, [transactions]);
    var mock = new useMockTransactionEngine_1.default();
    var mockTransactions = mock.generateMockTransactionList();
    var mockSections = (0, react_1.useMemo)(function () {
        return Object.entries((0, groupBy_1.default)(mockTransactions, function (t) { return t.date; }))
            .sort(function (_a, _b) {
            var dateA = _a[0];
            var dateB = _b[0];
            return dateB.localeCompare(dateA);
        })
            .map(function (_a) {
            var title = _a[0], data = _a[1];
            return ({
                title: (0, util_1.renderDate)(title),
                data: data,
            });
        });
    }, [mockTransactions]);
    var onRefresh = function () {
        (0, swr_1.mutate)("organizations/".concat(orgId));
        (0, swr_1.mutate)("organizations/".concat(orgId, "/transactions"));
    };
    if (organizationLoading || userLoading) {
        return (0, jsx_runtime_1.jsx)(LoadingSkeleton_1.LoadingSkeleton, {});
    }
    if (organizationError || !organization) {
        return ((0, jsx_runtime_1.jsx)(react_native_1.View, { style: {
                flex: 1,
                backgroundColor: themeColors.background,
                justifyContent: "center",
                alignItems: "center",
                padding: 24,
            }, children: (0, jsx_runtime_1.jsxs)(react_native_1.View, { style: {
                    backgroundColor: themeColors.card,
                    borderRadius: 20,
                    padding: 32,
                    width: "100%",
                    maxWidth: 400,
                    alignItems: "center",
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 4,
                    },
                    shadowOpacity: 0.08,
                    shadowRadius: 12,
                    elevation: 8,
                }, children: [(0, jsx_runtime_1.jsx)(react_native_1.View, { style: {
                            width: 96,
                            height: 96,
                            borderRadius: 48,
                            backgroundColor: "".concat(theme_1.palette.primary, "15"),
                            justifyContent: "center",
                            alignItems: "center",
                            marginBottom: 32,
                        }, children: (0, jsx_runtime_1.jsx)(vector_icons_1.Ionicons, { name: "lock-closed", size: 48, color: theme_1.palette.primary }) }), (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: {
                            color: themeColors.text,
                            fontSize: 28,
                            fontWeight: "700",
                            marginBottom: 16,
                            textAlign: "center",
                            letterSpacing: -0.5,
                        }, children: "Access Denied" }), (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: {
                            color: theme_1.palette.muted,
                            fontSize: 17,
                            lineHeight: 24,
                            textAlign: "center",
                            marginBottom: 32,
                            paddingHorizontal: 8,
                        }, children: "You don't have permission to view this organization. Please contact the organization's manager for access." }), (0, jsx_runtime_1.jsx)(Button_1.default, { style: {
                            width: "100%",
                            backgroundColor: themeColors.primary,
                            borderRadius: 12,
                            height: 50,
                        }, color: "#fff", onPress: function () { return navigation.goBack(); }, children: "Go Back" })] }) }));
    }
    return ((0, jsx_runtime_1.jsx)(react_native_1.View, { style: { flex: 1, backgroundColor: themeColors.background }, children: organization !== undefined ? ((0, jsx_runtime_1.jsx)(react_native_1.SectionList, { initialNumToRender: 20, ListFooterComponent: function () {
                return isLoadingMore && !isLoading && !organization.playground_mode ? ((0, jsx_runtime_1.jsx)(react_native_1.View, { style: { padding: 20, alignItems: "center" }, children: (0, jsx_runtime_1.jsx)(react_native_1.ActivityIndicator, { size: "small", color: themeColors.primary }) })) : null;
            }, onEndReachedThreshold: 0.2, onEndReached: function () { return loadMore(); }, refreshing: refreshing, onRefresh: function () { return onRefresh(); }, ListHeaderComponent: function () { return ((0, jsx_runtime_1.jsxs)(react_native_1.View, { children: [showTapToPayBanner && ((0, jsx_runtime_1.jsx)(TapToPayBanner_1.default, { onDismiss: handleDismissTapToPayBanner, orgId: orgId })), (organization === null || organization === void 0 ? void 0 : organization.playground_mode) && (0, jsx_runtime_1.jsx)(PlaygroundBanner_1.default, {}), (0, jsx_runtime_1.jsxs)(react_native_1.View, { style: {
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",
                            flexWrap: "wrap",
                            marginBottom: 32,
                            gap: 10,
                        }, children: [(0, jsx_runtime_1.jsxs)(react_native_1.View, { children: [(0, jsx_runtime_1.jsx)(react_native_1.Text, { style: {
                                            color: theme_1.palette.muted,
                                            fontSize: 12,
                                            textTransform: "uppercase",
                                        }, children: "Balance" }), (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: { color: themeColors.text, fontSize: 36 }, children: "balance_cents" in organization &&
                                            (0, util_1.renderMoney)(organization.balance_cents) })] }), (organization === null || organization === void 0 ? void 0 : organization.playground_mode) && ((0, jsx_runtime_1.jsx)(Button_1.default, { style: {
                                    backgroundColor: "#3F9CEE",
                                    borderTopWidth: 0,
                                }, color: "#fff", onPress: function () { return setShowMockData(function (prev) { return !prev; }); }, children: showMockData ? "Hide Mock Data" : "Show Mock Data" }))] }), isLoading && (0, jsx_runtime_1.jsx)(LoadingSkeleton_1.LoadingSkeleton, {}), !isLoading && sections.length === 0 && !showMockData && ((0, jsx_runtime_1.jsx)(EmptyState_1.EmptyState, { isOnline: isOnline }))] })); }, 
            // @ts-expect-error workaround for mock data
            sections: (organization === null || organization === void 0 ? void 0 : organization.playground_mode) && showMockData
                ? mockSections
                : sections, 
            // stickySectionHeadersEnabled={false}
            style: { flexGrow: 1 }, contentContainerStyle: {
                padding: 20,
                paddingBottom: tabBarSize + 20,
            }, scrollIndicatorInsets: { bottom: tabBarSize }, renderSectionHeader: function (_a) {
                var title = _a.section.title;
                return ((0, jsx_runtime_1.jsx)(react_native_1.Text, { style: {
                        color: theme_1.palette.muted,
                        backgroundColor: themeColors.background,
                        paddingTop: 10,
                        paddingBottom: 5,
                        paddingHorizontal: 10,
                        fontSize: 10,
                        textTransform: "uppercase",
                    }, children: title }));
            }, renderItem: function (_a) {
                var item = _a.item, index = _a.index, data = _a.section.data;
                return (organization === null || organization === void 0 ? void 0 : organization.playground_mode) ? ((0, jsx_runtime_1.jsx)(MockTransaction_1.default, { transaction: item, top: index == 0, bottom: index == data.length - 1 })) : ((0, jsx_runtime_1.jsx)(react_native_1.TouchableHighlight, { onPress: item.id &&
                        "users" in organization &&
                        organization.users.some(function (u) { return u.id === (user === null || user === void 0 ? void 0 : user.id); })
                        ? function () {
                            var _a;
                            if (item.code === Transaction_2.TransactionType.Disbursement &&
                                "transfer" in item &&
                                ((_a = item.transfer) === null || _a === void 0 ? void 0 : _a.card_grant_id)) {
                                navigation.navigate("GrantCard", {
                                    grantId: item.transfer.card_grant_id,
                                });
                            }
                            else {
                                navigation.navigate("Transaction", {
                                    transactionId: item.id,
                                    orgId: orgId,
                                    transaction: item,
                                });
                            }
                        }
                        : undefined, underlayColor: themeColors.background, activeOpacity: 0.7, children: (0, jsx_runtime_1.jsx)(Transaction_1.default, { orgId: orgId, transaction: item, top: index == 0, bottom: index == data.length - 1 }) }));
            } })) : ((0, jsx_runtime_1.jsx)(LoadingSkeleton_1.LoadingSkeleton, {})) }));
}
