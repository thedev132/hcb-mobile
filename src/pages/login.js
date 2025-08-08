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
exports.discovery = void 0;
exports.default = Login;
var jsx_runtime_1 = require("react/jsx-runtime");
var expo_auth_session_1 = require("expo-auth-session");
var Haptics = __importStar(require("expo-haptics"));
var SystemUI = __importStar(require("expo-system-ui"));
var react_1 = require("react");
var react_native_1 = require("react-native");
var auth_1 = __importDefault(require("../auth"));
var Button_1 = __importDefault(require("../components/Button"));
var errorUtils_1 = require("../lib/errorUtils");
var useColorScheme_1 = require("../lib/useColorScheme");
var theme_1 = require("../theme");
exports.discovery = {
    authorizationEndpoint: "".concat(process.env.EXPO_PUBLIC_API_BASE, "/oauth/authorize"),
    tokenEndpoint: "".concat(process.env.EXPO_PUBLIC_API_BASE, "/oauth/token"),
    revocationEndpoint: "".concat(process.env.EXPO_PUBLIC_API_BASE, "/oauth/revoke"),
};
var clientId = process.env.EXPO_PUBLIC_CLIENT_ID;
var redirectUri = (0, expo_auth_session_1.makeRedirectUri)({ scheme: "hcb" });
function Login() {
    var _this = this;
    var scheme = (0, react_native_1.useColorScheme)();
    var _a = (0, react_1.useState)(false), isProcessing = _a[0], setIsProcessing = _a[1];
    var processedResponseRef = (0, react_1.useRef)(null);
    var _b = (0, expo_auth_session_1.useAuthRequest)({
        clientId: clientId,
        redirectUri: redirectUri,
        scopes: ["read", "write"],
        usePKCE: true,
        responseType: "code",
        extraParams: {
            no_app_shell: "true",
            theme: scheme || "",
        },
    }, exports.discovery), request = _b[0], response = _b[1], promptAsync = _b[2];
    var _c = (0, react_1.useState)(false), loading = _c[0], setLoading = _c[1];
    var setTokens = (0, react_1.useContext)(auth_1.default).setTokens;
    var isDark = (0, useColorScheme_1.useIsDark)();
    var theme = isDark ? theme_1.theme : theme_1.lightTheme;
    (0, react_1.useEffect)(function () {
        var _a;
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
        if (!response || isProcessing)
            return;
        var responseKey = response.type +
            (response.type === "success" ? (_a = response.params) === null || _a === void 0 ? void 0 : _a.code : "");
        if (processedResponseRef.current === responseKey)
            return;
        if (response.type === "success") {
            processedResponseRef.current = responseKey;
            setIsProcessing(true);
            setLoading(true);
            (0, expo_auth_session_1.exchangeCodeAsync)({
                clientId: clientId,
                redirectUri: redirectUri,
                code: response.params.code,
                extraParams: { code_verifier: request.codeVerifier },
            }, exports.discovery)
                .then(function (r) { return __awaiter(_this, void 0, void 0, function () {
                var expiresAt, tokens;
                return __generator(this, function (_a) {
                    console.log("Token exchange successful");
                    if (!r.refreshToken) {
                        console.warn("No refresh token received from authorization server");
                    }
                    expiresAt = Date.now() + (r.expiresIn || 7200) * 1000;
                    tokens = {
                        accessToken: r.accessToken,
                        refreshToken: r.refreshToken || "",
                        expiresAt: expiresAt,
                        createdAt: Date.now(),
                        codeVerifier: request === null || request === void 0 ? void 0 : request.codeVerifier,
                    };
                    setTokens(tokens);
                    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
                    setLoading(false);
                    setIsProcessing(false);
                    return [2 /*return*/];
                });
            }); })
                .catch(function (error) {
                (0, errorUtils_1.logCriticalError)("Error exchanging code for token", error, {
                    authCode: request === null || request === void 0 ? void 0 : request.codeChallenge,
                });
                setLoading(false);
                setIsProcessing(false);
                processedResponseRef.current = null;
            });
        }
        return function () {
            if (response.type === "success") {
                processedResponseRef.current = responseKey;
            }
        };
    }, [response, request, setTokens, isProcessing, isDark]);
    var animation = (0, react_1.useRef)(new react_native_1.Animated.Value(0)).current;
    (0, react_1.useEffect)(function () {
        react_native_1.Animated.timing(animation, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
        }).start();
    }, [animation]);
    return ((0, jsx_runtime_1.jsxs)(react_native_1.SafeAreaView, { style: {
            backgroundColor: theme.colors.background,
            flex: 1,
            flexDirection: "column",
        }, children: [(0, jsx_runtime_1.jsxs)(react_native_1.View, { style: { flexGrow: 1, alignItems: "center", justifyContent: "center" }, children: [(0, jsx_runtime_1.jsx)(react_native_1.Animated.Image, { source: isDark
                            ? require("../../assets/icon.png")
                            : require("../../assets/icon-light.png"), style: {
                            width: 100,
                            height: 100,
                            marginBottom: 20,
                            opacity: animation,
                            transform: [
                                {
                                    scale: animation.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: [0.8, 1],
                                    }),
                                },
                            ],
                        } }), (0, jsx_runtime_1.jsxs)(react_native_1.Text, { style: { color: theme_1.palette.muted, textAlign: "center", fontSize: 20 }, children: ["Welcome to ", (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: { color: theme_1.palette.primary }, children: "HCB" }), "."] })] }), (0, jsx_runtime_1.jsx)(react_native_1.View, { style: { marginBottom: 30 }, children: (0, jsx_runtime_1.jsx)(Button_1.default, { onPress: function () { return promptAsync(); }, loading: loading, style: { marginHorizontal: 20 }, children: "Log in" }) })] }));
}
