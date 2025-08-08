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
exports.default = SettingsPage;
var jsx_runtime_1 = require("react/jsx-runtime");
var vector_icons_1 = require("@expo/vector-icons");
var async_storage_1 = __importDefault(require("@react-native-async-storage/async-storage"));
var native_1 = require("@react-navigation/native");
var expo_constants_1 = __importDefault(require("expo-constants"));
var Device = __importStar(require("expo-device"));
var SystemUI = __importStar(require("expo-system-ui"));
var react_1 = require("react");
var react_native_1 = require("react-native");
var swr_1 = __importDefault(require("swr"));
var auth_1 = __importDefault(require("../../auth"));
var cacheProvider_1 = require("../../cacheProvider");
var Button_1 = __importDefault(require("../../components/Button"));
var errorUtils_1 = require("../../lib/errorUtils");
var useColorScheme_1 = require("../../lib/useColorScheme");
var theme_1 = require("../../theme");
var ThemeContext_1 = require("../../ThemeContext");
var TOS_URL = "https://hcb.hackclub.com/tos";
var PRIVACY_URL = "https://hcb.hackclub.com/privacy";
var THEME_KEY = "app_theme";
var themeOptions = [
    {
        key: "light",
        label: "Light",
        icon: "sunny",
    },
    {
        key: "system",
        label: "System",
        icon: "phone-portrait",
    },
    {
        key: "dark",
        label: "Dark",
        icon: "moon",
    },
];
function isTapToPaySupported() {
    var _a;
    if (((_a = expo_constants_1.default.platform) === null || _a === void 0 ? void 0 : _a.ios) && Device.osVersion) {
        return parseInt(Device.osVersion, 10) >= 17;
    }
    return false;
}
function SettingsPage(_a) {
    var _this = this;
    var navigation = _a.navigation;
    var setTokens = (0, react_1.useContext)(auth_1.default).setTokens;
    var user = (0, swr_1.default)("user").data;
    var colors = (0, native_1.useTheme)().colors;
    var cache = (0, cacheProvider_1.useCache)();
    var _b = (0, ThemeContext_1.useThemeContext)(), theme = _b.theme, setTheme = _b.setTheme, resetTheme = _b.resetTheme;
    var animation = (0, react_1.useRef)(new react_native_1.Animated.Value(0)).current;
    var scheme = (0, react_native_1.useColorScheme)();
    var isDark = (0, useColorScheme_1.useIsDark)();
    (0, react_1.useEffect)(function () {
        (function () { return __awaiter(_this, void 0, void 0, function () {
            var storedTheme, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, async_storage_1.default.getItem(THEME_KEY)];
                    case 1:
                        storedTheme = _a.sent();
                        if (storedTheme === "light" ||
                            storedTheme === "dark" ||
                            storedTheme === "system") {
                            setTheme(storedTheme);
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        (0, errorUtils_1.logError)("Error loading theme in settings", error_1, {
                            context: { action: "settings_theme_load" },
                        });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); })();
        console.log(user);
    }, [setTheme]);
    (0, react_1.useEffect)(function () {
        react_native_1.Animated.timing(animation, {
            toValue: 1,
            duration: 600,
            useNativeDriver: true,
        }).start();
    }, [animation]);
    var handleThemeChange = function (value) { return __awaiter(_this, void 0, void 0, function () {
        var error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setTheme(value);
                    if (!(react_native_1.Platform.OS === "android")) return [3 /*break*/, 4];
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, SystemUI.setBackgroundColorAsync(value == "dark" || (value == "system" && scheme == "dark")
                            ? "#252429"
                            : "white")];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    error_2 = _a.sent();
                    (0, errorUtils_1.logError)("Error setting system UI background color", error_2, {
                        context: { theme: value },
                    });
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var handleSignOut = function () { return __awaiter(_this, void 0, void 0, function () {
        var error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    resetTheme();
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, async_storage_1.default.multiRemove([
                            THEME_KEY,
                            "organizationOrder",
                            "canceledCardsShown",
                            "ttpDidOnboarding",
                            "hasSeenTapToPayBanner",
                            "cardOrder",
                        ])];
                case 2:
                    _a.sent();
                    cache.clear();
                    setTokens(null);
                    return [3 /*break*/, 4];
                case 3:
                    error_3 = _a.sent();
                    (0, errorUtils_1.logError)("Error clearing storage during sign out", error_3, {
                        context: { action: "sign_out" },
                    });
                    // Still clear cache and tokens even if storage clearing fails
                    cache.clear();
                    setTokens(null);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var dividerColor = isDark ? theme_1.palette.slate : colors.border;
    var showTutorials = isTapToPaySupported();
    return ((0, jsx_runtime_1.jsx)(react_native_1.ScrollView, { contentContainerStyle: { paddingBottom: 40 }, style: { backgroundColor: colors.background }, children: (0, jsx_runtime_1.jsxs)(react_native_1.View, { style: { padding: 20 }, children: [(0, jsx_runtime_1.jsxs)(react_native_1.View, { style: {
                        flexDirection: "row",
                        alignItems: "center",
                        backgroundColor: colors.card,
                        borderRadius: 18,
                        padding: 18,
                        marginBottom: 12,
                    }, children: [(0, jsx_runtime_1.jsx)(react_native_1.Animated.Image, { source: { uri: user === null || user === void 0 ? void 0 : user.avatar }, style: {
                                width: 54,
                                height: 54,
                                borderRadius: 27,
                                marginRight: 16,
                                opacity: animation,
                                transform: [
                                    {
                                        scale: animation.interpolate({
                                            inputRange: [0, 1],
                                            outputRange: [0.8, 1],
                                        }),
                                    },
                                ],
                            } }), (0, jsx_runtime_1.jsxs)(react_native_1.View, { children: [(0, jsx_runtime_1.jsx)(react_native_1.Text, { style: {
                                        fontWeight: "bold",
                                        fontSize: 20,
                                        color: colors.text,
                                        marginBottom: 2,
                                    }, children: (user === null || user === void 0 ? void 0 : user.name) || " " }), (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: { color: theme_1.palette.muted, fontSize: 15 }, children: (user === null || user === void 0 ? void 0 : user.email) || " " })] })] }), (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: {
                        fontSize: 20,
                        fontWeight: "bold",
                        color: colors.text,
                        marginBottom: 14,
                        marginTop: 10,
                    }, children: "Theme" }), (0, jsx_runtime_1.jsx)(react_native_1.View, { style: {
                        backgroundColor: colors.card,
                        borderRadius: 16,
                        flexDirection: "row",
                        alignItems: "center",
                        padding: 18,
                        marginBottom: 24,
                    }, children: (0, jsx_runtime_1.jsx)(react_native_1.View, { style: {
                            flexDirection: "row",
                            backgroundColor: colors.card,
                            borderRadius: 16,
                            overflow: "hidden",
                            flex: 1,
                            justifyContent: "space-between",
                        }, children: themeOptions.map(function (opt, idx) { return ((0, jsx_runtime_1.jsxs)(react_native_1.Pressable, { style: [
                                {
                                    flex: 1,
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    paddingVertical: 10,
                                    backgroundColor: "transparent",
                                },
                                theme === opt.key && {
                                    backgroundColor: colors.primary,
                                    borderRadius: 16,
                                },
                                idx === 1 && { marginHorizontal: 2 },
                            ], onPress: function () {
                                return handleThemeChange(opt.key);
                            }, children: [(0, jsx_runtime_1.jsx)(vector_icons_1.Ionicons, { name: opt.icon, size: 18, color: theme === opt.key ? "#fff" : theme_1.palette.muted, style: { marginRight: 6 } }), (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: {
                                        color: theme === opt.key ? "#fff" : theme_1.palette.muted,
                                        fontWeight: "600",
                                        fontSize: 16,
                                    }, children: opt.label })] }, opt.key)); }) }) }), (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: {
                        fontSize: 20,
                        fontWeight: "bold",
                        color: colors.text,
                        marginBottom: 14,
                        marginTop: 10,
                    }, children: "App Settings" }), (0, jsx_runtime_1.jsxs)(react_native_1.View, { style: {
                        backgroundColor: colors.card,
                        borderRadius: 16,
                        marginBottom: 24,
                    }, children: [(0, jsx_runtime_1.jsxs)(react_native_1.Pressable, { style: { flexDirection: "row", alignItems: "center", padding: 18 }, onPress: function () { return navigation.navigate("AppIconSelector"); }, children: [(0, jsx_runtime_1.jsx)(vector_icons_1.Ionicons, { name: "color-palette-outline", size: 22, color: theme_1.palette.muted, style: { marginRight: 12 } }), (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: { color: colors.text, fontSize: 16 }, children: "Change App Icon" }), (0, jsx_runtime_1.jsx)(vector_icons_1.Ionicons, { name: "chevron-forward", size: 20, color: theme_1.palette.muted, style: { marginLeft: "auto" } })] }), (0, jsx_runtime_1.jsx)(react_native_1.View, { style: {
                                height: 1,
                                backgroundColor: dividerColor,
                                marginLeft: 20,
                                marginRight: 20,
                            } }), (0, jsx_runtime_1.jsxs)(react_native_1.Pressable, { style: { flexDirection: "row", alignItems: "center", padding: 18 }, onPress: function () { return navigation.navigate("DeepLinkingSettings"); }, children: [(0, jsx_runtime_1.jsx)(vector_icons_1.Ionicons, { name: "link", size: 22, color: theme_1.palette.muted, style: { marginRight: 12 } }), (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: { color: colors.text, fontSize: 16 }, children: "Deep linking" }), (0, jsx_runtime_1.jsx)(vector_icons_1.Ionicons, { name: "chevron-forward", size: 20, color: theme_1.palette.muted, style: { marginLeft: "auto" } })] }), showTutorials && ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(react_native_1.View, { style: {
                                        height: 1,
                                        backgroundColor: dividerColor,
                                        marginLeft: 20,
                                        marginRight: 20,
                                    } }), (0, jsx_runtime_1.jsxs)(react_native_1.Pressable, { style: {
                                        flexDirection: "row",
                                        alignItems: "center",
                                        padding: 18,
                                    }, onPress: function () { return navigation.navigate("Tutorials"); }, children: [(0, jsx_runtime_1.jsx)(vector_icons_1.Ionicons, { name: "book-outline", size: 22, color: theme_1.palette.muted, style: { marginRight: 12 } }), (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: { color: colors.text, fontSize: 16 }, children: "Tutorials" }), (0, jsx_runtime_1.jsx)(vector_icons_1.Ionicons, { name: "chevron-forward", size: 20, color: theme_1.palette.muted, style: { marginLeft: "auto" } })] })] }))] }), (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: {
                        fontSize: 20,
                        fontWeight: "bold",
                        color: colors.text,
                        marginBottom: 14,
                        marginTop: 10,
                    }, children: "Legal & Info" }), (0, jsx_runtime_1.jsxs)(react_native_1.View, { style: {
                        backgroundColor: colors.card,
                        borderRadius: 16,
                        paddingVertical: 0,
                        paddingHorizontal: 0,
                        marginBottom: 24,
                    }, children: [(0, jsx_runtime_1.jsxs)(react_native_1.Pressable, { style: {
                                flexDirection: "row",
                                alignItems: "center",
                                paddingVertical: 18,
                                paddingHorizontal: 18,
                            }, onPress: function () { return react_native_1.Linking.openURL(TOS_URL); }, children: [(0, jsx_runtime_1.jsx)(vector_icons_1.Ionicons, { name: "document-text-outline", size: 22, color: theme_1.palette.muted, style: { marginRight: 12 } }), (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: { color: colors.text, fontSize: 16 }, children: "Terms & Conditions" }), (0, jsx_runtime_1.jsx)(vector_icons_1.Ionicons, { name: "chevron-forward", size: 20, color: theme_1.palette.muted, style: { marginLeft: "auto" } })] }), (0, jsx_runtime_1.jsx)(react_native_1.View, { style: {
                                height: 1,
                                backgroundColor: dividerColor,
                                marginLeft: 20,
                                marginRight: 20,
                            } }), (0, jsx_runtime_1.jsxs)(react_native_1.Pressable, { style: {
                                flexDirection: "row",
                                alignItems: "center",
                                paddingVertical: 18,
                                paddingHorizontal: 18,
                            }, onPress: function () { return react_native_1.Linking.openURL(PRIVACY_URL); }, children: [(0, jsx_runtime_1.jsx)(vector_icons_1.Ionicons, { name: "shield-outline", size: 22, color: theme_1.palette.muted, style: { marginRight: 12 } }), (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: { color: colors.text, fontSize: 16 }, children: "Privacy Policy" }), (0, jsx_runtime_1.jsx)(vector_icons_1.Ionicons, { name: "chevron-forward", size: 20, color: theme_1.palette.muted, style: { marginLeft: "auto" } })] }), (0, jsx_runtime_1.jsx)(react_native_1.View, { style: {
                                height: 1,
                                backgroundColor: dividerColor,
                                marginLeft: 20,
                                marginRight: 20,
                            } }), (0, jsx_runtime_1.jsxs)(react_native_1.Pressable, { style: {
                                flexDirection: "row",
                                alignItems: "center",
                                paddingVertical: 18,
                                paddingHorizontal: 18,
                            }, onPress: function () { return navigation.navigate("About"); }, children: [(0, jsx_runtime_1.jsx)(vector_icons_1.Ionicons, { name: "information-circle-outline", size: 22, color: theme_1.palette.muted, style: { marginRight: 12 } }), (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: { color: colors.text, fontSize: 16 }, children: "Info / About" }), (0, jsx_runtime_1.jsx)(vector_icons_1.Ionicons, { name: "chevron-forward", size: 20, color: theme_1.palette.muted, style: { marginLeft: "auto" } })] })] }), (0, jsx_runtime_1.jsx)(Button_1.default, { style: {
                        marginTop: 12,
                        marginBottom: 32,
                        backgroundColor: colors.primary,
                        borderRadius: 16,
                        paddingVertical: 16,
                        alignItems: "center",
                    }, onPress: function () { return handleSignOut(); }, children: "Sign Out" })] }) }));
}
