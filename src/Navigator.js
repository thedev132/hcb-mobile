"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Navigator;
var jsx_runtime_1 = require("react/jsx-runtime");
var vector_icons_1 = require("@expo/vector-icons");
var bottom_tabs_1 = require("@react-navigation/bottom-tabs");
var native_1 = require("@react-navigation/native");
var native_stack_1 = require("@react-navigation/native-stack");
var hackclub_icons_rn_1 = __importDefault(require("@thedev132/hackclub-icons-rn"));
var expo_blur_1 = require("expo-blur");
var WebBrowser = __importStar(require("expo-web-browser"));
var react_1 = require("react");
var react_native_1 = require("react-native");
var swr_1 = __importStar(require("swr"));
var useColorScheme_1 = require("./lib/useColorScheme");
var navigationRef_1 = require("./navigationRef");
var card_1 = __importDefault(require("./pages/card"));
var cards_1 = __importDefault(require("./pages/cards"));
var GrantCard_1 = __importDefault(require("./pages/GrantCard"));
var index_1 = __importDefault(require("./pages/index"));
var Invitation_1 = __importDefault(require("./pages/Invitation"));
var organization_1 = __importDefault(require("./pages/organization"));
var AccountNumber_1 = __importDefault(require("./pages/organization/AccountNumber"));
var Donation_1 = __importDefault(require("./pages/organization/Donation"));
var ProcessDonation_1 = __importDefault(require("./pages/organization/ProcessDonation"));
var Team_1 = __importDefault(require("./pages/organization/Team"));
var transfer_1 = __importDefault(require("./pages/organization/transfer"));
var Receipts_1 = __importDefault(require("./pages/Receipts"));
var ReceiptSelectionModal_1 = __importDefault(require("./pages/ReceiptSelectionModal"));
var RenameTransaction_1 = __importDefault(require("./pages/RenameTransaction"));
var About_1 = __importDefault(require("./pages/settings/About"));
var AppIconSelector_1 = __importDefault(require("./pages/settings/AppIconSelector"));
var DeepLinkingSettings_1 = __importDefault(require("./pages/settings/DeepLinkingSettings"));
var Settings_1 = __importDefault(require("./pages/settings/Settings"));
var Tutorials_1 = __importDefault(require("./pages/settings/Tutorials"));
var ShareIntentModal_1 = __importDefault(require("./pages/ShareIntentModal"));
var Transaction_1 = __importDefault(require("./pages/Transaction"));
var ShareIntentContext_1 = require("./ShareIntentContext");
var theme_1 = require("./theme");
var Stack = (0, native_stack_1.createNativeStackNavigator)();
var CardsStack = (0, native_stack_1.createNativeStackNavigator)();
var ReceiptsStack = (0, native_stack_1.createNativeStackNavigator)();
var SettingsStack = (0, native_stack_1.createNativeStackNavigator)();
var Tab = (0, bottom_tabs_1.createBottomTabNavigator)();
function Navigator() {
    var missingReceiptData = (0, swr_1.default)("user/transactions/missing_receipt").data;
    var invitations = (0, swr_1.default)("user/invitations").data;
    var themeColors = (0, native_1.useTheme)().colors;
    var mutate = (0, swr_1.useSWRConfig)().mutate;
    var isDark = (0, useColorScheme_1.useIsDark)();
    var _a = (0, ShareIntentContext_1.useShareIntentContext)(), pendingShareIntent = _a.pendingShareIntent, clearPendingShareIntent = _a.clearPendingShareIntent, hasPendingShareIntent = _a.hasPendingShareIntent;
    (0, react_1.useEffect)(function () {
        if (hasPendingShareIntent &&
            pendingShareIntent &&
            navigationRef_1.navRef.current &&
            navigationRef_1.navRef.current.isReady()) {
            navigationRef_1.navRef.current.navigate("Home", {
                screen: "ShareIntentModal",
                params: pendingShareIntent,
            });
            clearPendingShareIntent();
        }
    }, [hasPendingShareIntent, pendingShareIntent, clearPendingShareIntent]);
    return ((0, jsx_runtime_1.jsxs)(Tab.Navigator, { screenOptions: function (_a) {
            var route = _a.route;
            return (__assign(__assign({ tabBarIcon: function (_a) {
                    var color = _a.color, size = _a.size;
                    var iconName;
                    if (route.name === "Home") {
                        iconName = "home";
                        size = 30;
                    }
                    else if (route.name === "Cards") {
                        iconName = "card";
                        size = 28;
                    }
                    else if (route.name === "Receipts") {
                        iconName = "payment-docs";
                        size = 28;
                    }
                    else if (route.name === "Settings") {
                        iconName = "settings";
                        size = 36;
                    }
                    return (0, jsx_runtime_1.jsx)(hackclub_icons_rn_1.default, { glyph: iconName, size: size, color: color });
                }, 
                // headerStyle: { backgroundColor: themeColors.background },
                headerShown: false }, (react_native_1.Platform.OS === "android"
                ? {
                    tabBarStyle: {
                        position: "absolute",
                        paddingBottom: 5,
                        height: 50,
                    },
                }
                : {
                    tabBarStyle: {
                        position: "absolute",
                    },
                })), { tabBarHideOnKeyboard: true, tabBarBackground: function () {
                    return react_native_1.Platform.OS === "ios" ? ((0, jsx_runtime_1.jsx)(expo_blur_1.BlurView, { tint: isDark ? "dark" : "light", intensity: 100, style: react_native_1.StyleSheet.absoluteFill, experimentalBlurMethod: "dimezisBlurView" })) : null;
                } }));
        }, children: [(0, jsx_runtime_1.jsx)(Tab.Screen, { name: "Home", options: { tabBarBadge: (invitations === null || invitations === void 0 ? void 0 : invitations.length) || undefined }, children: function () { return ((0, jsx_runtime_1.jsxs)(Stack.Navigator, { screenOptions: {
                        headerLargeTitleShadowVisible: false,
                    }, children: [(0, jsx_runtime_1.jsx)(Stack.Screen, { name: "Organizations", component: index_1.default, options: {
                                title: "Home",
                                headerLargeTitle: true,
                                headerRight: function () { return ((0, jsx_runtime_1.jsx)(vector_icons_1.Ionicons.Button, { name: "add-circle-outline", backgroundColor: "transparent", size: 24, underlayColor: themeColors.card, color: theme_1.palette.primary, iconStyle: { marginRight: 0 }, onPress: function () {
                                        WebBrowser.openBrowserAsync("https://hackclub.com/hcb/apply", {
                                            presentationStyle: WebBrowser.WebBrowserPresentationStyle.POPOVER,
                                            controlsColor: theme_1.palette.primary,
                                            dismissButtonStyle: "cancel",
                                        }).then(function () {
                                            mutate("user/organizations");
                                            mutate("user/invitations");
                                        });
                                    } })); },
                            } }), (0, jsx_runtime_1.jsx)(Stack.Screen, { name: "Invitation", component: Invitation_1.default, options: {
                                presentation: "modal",
                                headerShown: false,
                            } }), (0, jsx_runtime_1.jsx)(Stack.Screen, { name: "Event", options: function (_a) {
                                var _b;
                                var route = _a.route;
                                return ({
                                    // headerTitle: () => <OrganizationTitle {...route.params} />,
                                    title: ((_b = route.params.organization) === null || _b === void 0 ? void 0 : _b.name) || "Organization",
                                    headerBackTitle: "Back",
                                });
                            }, component: organization_1.default }), (0, jsx_runtime_1.jsx)(Stack.Screen, { name: "AccountNumber", component: AccountNumber_1.default, options: { presentation: "modal", title: "Account Details" } }), (0, jsx_runtime_1.jsx)(Stack.Screen, { name: "OrganizationTeam", component: Team_1.default, options: {
                                headerBackTitle: "Back",
                                title: "Manage Organization",
                            } }), (0, jsx_runtime_1.jsx)(Stack.Screen, { name: "OrganizationDonation", component: Donation_1.default, options: {
                                headerBackTitle: "Back",
                                title: "Collect Donations",
                            } }), (0, jsx_runtime_1.jsx)(Stack.Screen, { name: "ProcessDonation", component: ProcessDonation_1.default, options: { presentation: "modal", title: "Process Donation" } }), (0, jsx_runtime_1.jsx)(Stack.Screen, { options: { headerBackTitle: "Back" }, name: "Transaction", component: Transaction_1.default }), (0, jsx_runtime_1.jsx)(Stack.Screen, { name: "RenameTransaction", component: RenameTransaction_1.default, options: {
                                presentation: "modal",
                                title: "Edit Transaction Description",
                            } }), (0, jsx_runtime_1.jsx)(Stack.Screen, { name: "Transfer", component: transfer_1.default, options: {
                                presentation: "modal",
                                title: "Send Transfer",
                            } }), (0, jsx_runtime_1.jsx)(Stack.Screen, { name: "GrantCard", component: GrantCard_1.default, options: function () { return ({ title: "Grant Card" }); } }), (0, jsx_runtime_1.jsx)(Stack.Screen, { name: "ShareIntentModal", component: ShareIntentModal_1.default, options: {
                                presentation: "modal",
                                title: "Assign Receipts",
                                headerShown: false,
                                animation: "slide_from_bottom",
                            } })] })); } }), (0, jsx_runtime_1.jsx)(Tab.Screen, { name: "Cards", options: { tabBarLabel: "Cards" }, children: function () { return ((0, jsx_runtime_1.jsxs)(CardsStack.Navigator, { children: [(0, jsx_runtime_1.jsx)(CardsStack.Screen, { name: "CardList", component: cards_1.default, options: { title: "Cards" } }), (0, jsx_runtime_1.jsx)(CardsStack.Screen, { name: "Card", component: card_1.default, options: function () { return ({ title: "Card" }); } }), (0, jsx_runtime_1.jsx)(CardsStack.Screen, { name: "GrantCard", component: GrantCard_1.default, options: function () { return ({ title: "Card" }); } }), (0, jsx_runtime_1.jsx)(Stack.Screen, { options: { headerBackTitle: "Back" }, name: "Transaction", component: Transaction_1.default }), (0, jsx_runtime_1.jsx)(Stack.Screen, { name: "RenameTransaction", component: RenameTransaction_1.default, options: {
                                presentation: "modal",
                                title: "Edit Transaction Description",
                            } })] })); } }), (0, jsx_runtime_1.jsx)(Tab.Screen, { name: "Receipts", options: {
                    tabBarBadge: (missingReceiptData === null || missingReceiptData === void 0 ? void 0 : missingReceiptData.total_count) || undefined,
                }, children: function () { return ((0, jsx_runtime_1.jsxs)(ReceiptsStack.Navigator, { children: [(0, jsx_runtime_1.jsx)(ReceiptsStack.Screen, { name: "MissingReceiptList", options: { title: "Missing Receipts" }, component: Receipts_1.default }), (0, jsx_runtime_1.jsx)(ReceiptsStack.Screen, { name: "ReceiptSelectionModal", component: ReceiptSelectionModal_1.default, options: {
                                presentation: "modal",
                                title: "Select Receipts",
                                headerShown: false,
                                animation: "slide_from_bottom",
                            } })] })); } }), (0, jsx_runtime_1.jsx)(Tab.Screen, { name: "Settings", options: { headerShown: false }, children: function () { return ((0, jsx_runtime_1.jsxs)(SettingsStack.Navigator, { children: [(0, jsx_runtime_1.jsx)(SettingsStack.Screen, { name: "SettingsMain", component: Settings_1.default, options: { title: "Settings" } }), (0, jsx_runtime_1.jsx)(SettingsStack.Screen, { name: "AppIconSelector", component: AppIconSelector_1.default, options: { title: "App Icon" } }), (0, jsx_runtime_1.jsx)(SettingsStack.Screen, { name: "DeepLinkingSettings", component: DeepLinkingSettings_1.default, options: { title: "Deep Linking" } }), (0, jsx_runtime_1.jsx)(SettingsStack.Screen, { name: "Tutorials", component: Tutorials_1.default, options: { title: "Tutorials" } }), (0, jsx_runtime_1.jsx)(SettingsStack.Screen, { name: "About", component: About_1.default, options: { title: "About" } })] })); } })] }));
}
