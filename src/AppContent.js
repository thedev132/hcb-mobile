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
exports.default = AppContent;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_native_action_sheet_1 = require("@expo/react-native-action-sheet");
var vector_icons_1 = require("@expo/vector-icons");
var native_1 = require("@react-navigation/native");
var stripe_terminal_react_native_1 = require("@stripe/stripe-terminal-react-native");
var Linking = __importStar(require("expo-linking"));
var LocalAuthentication = __importStar(require("expo-local-authentication"));
var SplashScreen = __importStar(require("expo-splash-screen"));
var expo_status_bar_1 = require("expo-status-bar");
var SystemUI = __importStar(require("expo-system-ui"));
var react_1 = require("react");
var react_native_1 = require("react-native");
var react_native_alert_notification_1 = require("react-native-alert-notification");
var react_native_gesture_handler_1 = require("react-native-gesture-handler");
var react_native_safe_area_context_1 = require("react-native-safe-area-context");
var swr_1 = require("swr");
var auth_1 = __importDefault(require("./auth"));
var getStateFromPath_1 = require("./getStateFromPath");
var client_1 = __importDefault(require("./lib/client"));
var errorUtils_1 = require("./lib/errorUtils");
var useColorScheme_1 = require("./lib/useColorScheme");
var useOffline_1 = require("./lib/useOffline");
var LinkingContext_1 = require("./LinkingContext");
var navigationRef_1 = require("./navigationRef");
var Navigator_1 = __importDefault(require("./Navigator"));
var login_1 = __importDefault(require("./pages/login"));
var theme_1 = require("./theme");
var ThemeContext_1 = require("./ThemeContext");
function OfflineBanner() {
    var insets = (0, react_native_safe_area_context_1.useSafeAreaInsets)();
    var isOnline = (0, useOffline_1.useOffline)().isOnline;
    if (isOnline)
        return null;
    return ((0, jsx_runtime_1.jsx)(react_native_1.View, { style: {
            position: "absolute",
            zIndex: 999,
            width: "100%",
            alignItems: "center",
            pointerEvents: "none",
            top: insets.top + 6,
        }, children: (0, jsx_runtime_1.jsxs)(react_native_1.View, { style: {
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: theme_1.theme.dark
                    ? theme_1.palette.darkless
                    : theme_1.lightTheme.colors.card,
                paddingVertical: 8,
                paddingHorizontal: 16,
                borderRadius: 20,
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 3,
                },
                shadowOpacity: 0.2,
                shadowRadius: 5,
                elevation: 6,
            }, children: [(0, jsx_runtime_1.jsx)(vector_icons_1.Ionicons, { name: "cloud-offline-outline", size: 18, color: theme_1.palette.primary }), (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: {
                        color: theme_1.palette.primary,
                        fontWeight: "bold",
                        marginLeft: 8,
                        fontSize: 15,
                    }, children: "Offline Mode" })] }) }));
}
SplashScreen.preventAutoHideAsync();
SplashScreen.setOptions({
    duration: 500,
    fade: true,
});
function AppContent(_a) {
    var _this = this;
    var scheme = _a.scheme, cache = _a.cache;
    var _b = (0, react_1.useContext)(auth_1.default), tokens = _b.tokens, refreshAccessToken = _b.refreshAccessToken;
    var themePref = (0, ThemeContext_1.useThemeContext)().theme;
    var isUniversalLinkingEnabled = (0, LinkingContext_1.useLinkingPref)().enabled;
    var _c = (0, react_1.useState)(false), isAuthenticated = _c[0], setIsAuthenticated = _c[1];
    var _d = (0, react_1.useState)(false), appIsReady = _d[0], setAppIsReady = _d[1];
    var isDark = (0, useColorScheme_1.useIsDark)();
    var navigationRef = (0, react_1.useRef)(null);
    var hcb = (0, client_1.default)();
    var fetchTokenProvider = function () { return __awaiter(_this, void 0, void 0, function () {
        var token;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, hcb
                        .get("stripe_terminal_connection_token")
                        .json()];
                case 1:
                    token = (_a.sent());
                    return [2 /*return*/, token.terminal_connection_token.secret];
            }
        });
    }); };
    (0, react_1.useEffect)(function () {
        navigationRef_1.navRef.current = navigationRef.current;
    }, [navigationRef.current]);
    var onNavigationReady = (0, react_1.useCallback)(function () {
        navigationRef_1.navRef.current = navigationRef.current;
    }, []);
    (0, react_1.useEffect)(function () {
        var setStatusBar = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, SystemUI.setBackgroundColorAsync(isDark ? "#252429" : "#F6F6F6")];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        setStatusBar();
        var checkAuth = function () { return __awaiter(_this, void 0, void 0, function () {
            var hasHardware, isEnrolled, result, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(tokens === null || tokens === void 0 ? void 0 : tokens.accessToken)) return [3 /*break*/, 8];
                        return [4 /*yield*/, process.env.EXPO_PUBLIC_APP_VARIANT];
                    case 1:
                        if ((_a.sent()) === "development") {
                            // bypass auth for development
                            setIsAuthenticated(true);
                            setAppIsReady(true);
                            return [2 /*return*/];
                        }
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 6, , 7]);
                        return [4 /*yield*/, LocalAuthentication.hasHardwareAsync()];
                    case 3:
                        hasHardware = _a.sent();
                        return [4 /*yield*/, LocalAuthentication.isEnrolledAsync()];
                    case 4:
                        isEnrolled = _a.sent();
                        if (!hasHardware || !isEnrolled) {
                            console.log("Biometric authentication not available, bypassing...");
                            setIsAuthenticated(true);
                            setAppIsReady(true);
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, LocalAuthentication.authenticateAsync({
                                promptMessage: "Authenticate to access HCB",
                                cancelLabel: "Cancel",
                                fallbackLabel: "Use passcode",
                                disableDeviceFallback: false,
                            })];
                    case 5:
                        result = _a.sent();
                        if (result.success) {
                            setIsAuthenticated(true);
                        }
                        else {
                            (0, errorUtils_1.logError)("Biometric authentication failed", new Error(result.error || "Authentication failed"), {
                                context: { action: "biometric_auth", errorType: result.error },
                            });
                            setIsAuthenticated(false);
                        }
                        return [3 /*break*/, 7];
                    case 6:
                        error_1 = _a.sent();
                        (0, errorUtils_1.logError)("Biometric authentication error", error_1, {
                            context: { action: "biometric_auth" },
                        });
                        setIsAuthenticated(false);
                        return [3 /*break*/, 7];
                    case 7: return [3 /*break*/, 9];
                    case 8:
                        console.log("No access token, skipping biometric authentication");
                        setIsAuthenticated(true);
                        _a.label = 9;
                    case 9:
                        setAppIsReady(true);
                        return [2 /*return*/];
                }
            });
        }); };
        checkAuth();
    }, []);
    (0, react_1.useEffect)(function () {
        if (tokens) {
            var now = Date.now();
            if (tokens.expiresAt <= now + 5 * 60 * 1000) {
                refreshAccessToken().catch(function (error) {
                    (0, errorUtils_1.logError)("Failed to preemptively refresh token", error, {
                        shouldReportToSentry: true,
                    });
                });
            }
        }
        else {
            console.log("Token state updated - user is logged out");
        }
    }, [refreshAccessToken, tokens]);
    var onLayoutRootView = (0, react_1.useCallback)(function () {
        if (appIsReady) {
            SplashScreen.hide();
        }
    }, [appIsReady]);
    var linking = (0, react_1.useMemo)(function () { return ({
        prefixes: [
            Linking.createURL("/"),
            "https://bank.hackclub.com",
            "https://hcb.hackclub.com",
            "http://bank.hackclub.com",
            "http://hcb.hackclub.com",
        ],
        config: {
            screens: {
                Home: {
                    initialRouteName: "Organizations",
                    screens: {
                        Invitation: "invites/:inviteId",
                        Transaction: {
                            path: "hcb/:transactionId",
                            parse: {
                                transactionId: function (id) { return "txn_".concat(id); },
                            },
                        },
                        Event: ":orgId",
                    },
                },
                Cards: {
                    initialRouteName: "CardList",
                    screens: {
                        CardList: "my/cards",
                        Card: {
                            path: "stripe_cards/:cardId",
                            parse: { cardId: function (id) { return id; } },
                        },
                        GrantCard: {
                            path: "grants/:grantId",
                            parse: { grantId: function (id) { return id; } },
                        },
                    },
                },
                Receipts: "my/inbox",
            },
        },
        getStateFromPath: function (path, options) {
            if (path.includes("dataUrl=hcbShareKey")) {
                return undefined;
            }
            if (path.startsWith("/branding") ||
                path.startsWith("/security") ||
                path.startsWith("/roles")) {
                Linking.openURL(new URL(path, "https://hcb.hackclub.com").toString());
                return undefined;
            }
            return (0, getStateFromPath_1.getStateFromPath)(path, options);
        },
        getInitialURL: function () { return __awaiter(_this, void 0, void 0, function () {
            var url;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(isUniversalLinkingEnabled === null)) return [3 /*break*/, 2];
                        return [4 /*yield*/, new Promise(function (resolve) {
                                var check = setInterval(function () {
                                    if (isUniversalLinkingEnabled !== null) {
                                        clearInterval(check);
                                        resolve(undefined);
                                    }
                                }, 50);
                            })];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [4 /*yield*/, Linking.getInitialURL()];
                    case 3:
                        url = _a.sent();
                        if (url && isUniversalLinkingEnabled === false) {
                            Linking.openURL(url).catch(function (err) {
                                return (0, errorUtils_1.logError)("Failed to open URL in browser", err, {
                                    context: { url: url },
                                });
                            });
                            return [2 /*return*/, null];
                        }
                        return [2 /*return*/, url];
                }
            });
        }); },
        subscribe: function (listener) {
            var subscription = Linking.addEventListener("url", function (_a) {
                var url = _a.url;
                if (url && !isUniversalLinkingEnabled) {
                    Linking.openURL(url).catch(function (err) {
                        return (0, errorUtils_1.logError)("Failed to open URL in browser", err, {
                            context: { url: url },
                        });
                    });
                }
                else {
                    listener(url);
                }
            });
            return function () {
                subscription.remove();
            };
        },
    }); }, [isUniversalLinkingEnabled]);
    var fetcher = function (url, options) {
        return hcb(url, options).json();
    };
    var navTheme = theme_1.lightTheme;
    if (themePref === "dark")
        navTheme = theme_1.theme;
    else if (themePref === "system")
        navTheme = scheme === "dark" ? theme_1.theme : theme_1.lightTheme;
    if (isUniversalLinkingEnabled === null) {
        return (0, jsx_runtime_1.jsx)(react_native_1.ActivityIndicator, { color: "white" });
    }
    if (!appIsReady) {
        return null;
    }
    return ((0, jsx_runtime_1.jsx)(stripe_terminal_react_native_1.StripeTerminalProvider, { tokenProvider: fetchTokenProvider, children: (0, jsx_runtime_1.jsx)(react_native_1.View, { onLayout: onLayoutRootView, style: { flex: 1 }, children: (0, jsx_runtime_1.jsxs)(react_native_gesture_handler_1.GestureHandlerRootView, { children: [(0, jsx_runtime_1.jsx)(expo_status_bar_1.StatusBar, { style: isDark ? "light" : "dark" }), (0, jsx_runtime_1.jsx)(swr_1.SWRConfig, { value: {
                            provider: function () { return cache; },
                            fetcher: fetcher,
                            revalidateOnFocus: true,
                            revalidateOnReconnect: true,
                            dedupingInterval: 2000,
                        }, children: (0, jsx_runtime_1.jsx)(react_native_safe_area_context_1.SafeAreaProvider, { children: (0, jsx_runtime_1.jsx)(react_native_action_sheet_1.ActionSheetProvider, { children: (0, jsx_runtime_1.jsx)(react_native_alert_notification_1.AlertNotificationRoot, { theme: isDark ? "dark" : "light", children: (0, jsx_runtime_1.jsxs)(native_1.NavigationContainer, { ref: navigationRef, theme: navTheme, linking: linking, onReady: onNavigationReady, children: [(0, jsx_runtime_1.jsx)(OfflineBanner, {}), (tokens === null || tokens === void 0 ? void 0 : tokens.accessToken) && isAuthenticated ? ((0, jsx_runtime_1.jsx)(Navigator_1.default, {})) : ((0, jsx_runtime_1.jsx)(login_1.default, {}))] }) }) }) }) })] }) }) }));
}
