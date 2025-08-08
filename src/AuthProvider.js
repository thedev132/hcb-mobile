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
exports.AuthProvider = AuthProvider;
var jsx_runtime_1 = require("react/jsx-runtime");
var Sentry = __importStar(require("@sentry/react-native"));
var expo_auth_session_1 = require("expo-auth-session");
var SecureStore = __importStar(require("expo-secure-store"));
var react_1 = __importStar(require("react"));
var auth_1 = __importDefault(require("./auth"));
var errorUtils_1 = require("./lib/errorUtils");
var ACCESS_TOKEN_KEY = "auth_access_token";
var REFRESH_TOKEN_KEY = "auth_refresh_token";
var EXPIRES_AT_KEY = "auth_expires_at";
var CODE_VERIFIER_KEY = "auth_code_verifier";
var TOKEN_CREATED_AT_KEY = "auth_token_created_at";
var redirectUri = (0, expo_auth_session_1.makeRedirectUri)({ scheme: "hcb" });
var lastSuccessfulRefreshTime = 0;
var MIN_REFRESH_INTERVAL_MS = 1000;
var refreshPromise = null;
function AuthProvider(_a) {
    var _this = this;
    var children = _a.children;
    var _b = (0, react_1.useState)(null), tokens = _b[0], setTokensState = _b[1];
    var _c = (0, react_1.useState)(true), isLoading = _c[0], setIsLoading = _c[1];
    (0, react_1.useEffect)(function () {
        var loadTokens = function () { return __awaiter(_this, void 0, void 0, function () {
            var accessToken, refreshToken, expiresAtStr, createdAtStr, codeVerifier, expiresAt, createdAt, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 6, 7, 8]);
                        return [4 /*yield*/, SecureStore.getItemAsync(ACCESS_TOKEN_KEY)];
                    case 1:
                        accessToken = _a.sent();
                        return [4 /*yield*/, SecureStore.getItemAsync(REFRESH_TOKEN_KEY)];
                    case 2:
                        refreshToken = _a.sent();
                        return [4 /*yield*/, SecureStore.getItemAsync(EXPIRES_AT_KEY)];
                    case 3:
                        expiresAtStr = _a.sent();
                        return [4 /*yield*/, SecureStore.getItemAsync(TOKEN_CREATED_AT_KEY)];
                    case 4:
                        createdAtStr = _a.sent();
                        return [4 /*yield*/, SecureStore.getItemAsync(CODE_VERIFIER_KEY)];
                    case 5:
                        codeVerifier = _a.sent();
                        if (accessToken && refreshToken && expiresAtStr) {
                            expiresAt = parseInt(expiresAtStr, 10);
                            createdAt = createdAtStr
                                ? parseInt(createdAtStr, 10)
                                : Date.now();
                            setTokensState({
                                accessToken: accessToken,
                                refreshToken: refreshToken,
                                expiresAt: expiresAt,
                                createdAt: createdAt,
                                codeVerifier: codeVerifier || undefined,
                            });
                        }
                        return [3 /*break*/, 8];
                    case 6:
                        error_1 = _a.sent();
                        (0, errorUtils_1.logCriticalError)("Failed to load auth tokens", error_1, {
                            action: "token_load",
                        });
                        return [3 /*break*/, 8];
                    case 7:
                        setIsLoading(false);
                        return [7 /*endfinally*/];
                    case 8: return [2 /*return*/];
                }
            });
        }); };
        loadTokens();
    }, []);
    var setTokens = function (newTokens) { return __awaiter(_this, void 0, void 0, function () {
        var error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 14, , 15]);
                    if (!newTokens) return [3 /*break*/, 7];
                    return [4 /*yield*/, SecureStore.setItemAsync(ACCESS_TOKEN_KEY, newTokens.accessToken)];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, SecureStore.setItemAsync(REFRESH_TOKEN_KEY, newTokens.refreshToken)];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, SecureStore.setItemAsync(EXPIRES_AT_KEY, newTokens.expiresAt.toString())];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, SecureStore.setItemAsync(TOKEN_CREATED_AT_KEY, newTokens.createdAt.toString())];
                case 4:
                    _a.sent();
                    if (!newTokens.codeVerifier) return [3 /*break*/, 6];
                    return [4 /*yield*/, SecureStore.setItemAsync(CODE_VERIFIER_KEY, newTokens.codeVerifier)];
                case 5:
                    _a.sent();
                    _a.label = 6;
                case 6:
                    setTokensState(newTokens);
                    return [3 /*break*/, 13];
                case 7: return [4 /*yield*/, SecureStore.deleteItemAsync(ACCESS_TOKEN_KEY)];
                case 8:
                    _a.sent();
                    return [4 /*yield*/, SecureStore.deleteItemAsync(REFRESH_TOKEN_KEY)];
                case 9:
                    _a.sent();
                    return [4 /*yield*/, SecureStore.deleteItemAsync(EXPIRES_AT_KEY)];
                case 10:
                    _a.sent();
                    return [4 /*yield*/, SecureStore.deleteItemAsync(TOKEN_CREATED_AT_KEY)];
                case 11:
                    _a.sent();
                    return [4 /*yield*/, SecureStore.deleteItemAsync(CODE_VERIFIER_KEY)];
                case 12:
                    _a.sent();
                    setTokensState(null);
                    _a.label = 13;
                case 13: return [3 /*break*/, 15];
                case 14:
                    error_2 = _a.sent();
                    (0, errorUtils_1.logCriticalError)("Failed to save auth tokens", error_2, {
                        action: "token_save",
                    });
                    return [3 /*break*/, 15];
                case 15: return [2 /*return*/];
            }
        });
    }); };
    // Force logout - ensure all tokens are cleared and state is consistent
    var forceLogout = function () { return __awaiter(_this, void 0, void 0, function () {
        var error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("Forcing logout due to auth failure");
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 7, , 8]);
                    return [4 /*yield*/, SecureStore.deleteItemAsync(ACCESS_TOKEN_KEY)];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, SecureStore.deleteItemAsync(REFRESH_TOKEN_KEY)];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, SecureStore.deleteItemAsync(EXPIRES_AT_KEY)];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, SecureStore.deleteItemAsync(TOKEN_CREATED_AT_KEY)];
                case 5:
                    _a.sent();
                    return [4 /*yield*/, SecureStore.deleteItemAsync(CODE_VERIFIER_KEY)];
                case 6:
                    _a.sent();
                    setTokensState(null);
                    lastSuccessfulRefreshTime = 0;
                    refreshPromise = null;
                    return [3 /*break*/, 8];
                case 7:
                    error_3 = _a.sent();
                    (0, errorUtils_1.logError)("Error during forced logout", error_3, {
                        context: { action: "forced_logout" },
                    });
                    return [3 /*break*/, 8];
                case 8: return [2 /*return*/];
            }
        });
    }); };
    var refreshAccessToken = function () { return __awaiter(_this, void 0, void 0, function () {
        var now, timeSinceLastRefresh, tokenAge, isTokenExpired, error_4;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 5, , 7]);
                    if (refreshPromise) {
                        console.log("Token refresh already in progress, using existing promise");
                        return [2 /*return*/, refreshPromise];
                    }
                    if (!!(tokens === null || tokens === void 0 ? void 0 : tokens.refreshToken)) return [3 /*break*/, 2];
                    console.warn("Cannot refresh token: No refresh token available");
                    return [4 /*yield*/, forceLogout()];
                case 1:
                    _a.sent();
                    return [2 /*return*/, { success: false }];
                case 2:
                    if (!!process.env.EXPO_PUBLIC_CLIENT_ID) return [3 /*break*/, 4];
                    (0, errorUtils_1.logCriticalError)("Cannot refresh token: EXPO_PUBLIC_CLIENT_ID environment variable is not set", new Error("Missing CLIENT_ID"), { action: "token_refresh", missing_env: "EXPO_PUBLIC_CLIENT_ID" });
                    return [4 /*yield*/, forceLogout()];
                case 3:
                    _a.sent();
                    return [2 /*return*/, { success: false }];
                case 4:
                    now = Date.now();
                    timeSinceLastRefresh = now - lastSuccessfulRefreshTime;
                    if (timeSinceLastRefresh < MIN_REFRESH_INTERVAL_MS) {
                        console.log("Skipping token refresh - last refresh was ".concat(timeSinceLastRefresh, "ms ago (minimum interval: ").concat(MIN_REFRESH_INTERVAL_MS, "ms)"));
                        return [2 /*return*/, { success: true, newTokens: tokens }];
                    }
                    console.log("Client ID:", process.env.EXPO_PUBLIC_CLIENT_ID);
                    console.log("Redirect URI:", redirectUri);
                    tokenAge = now - (tokens.createdAt || 0);
                    isTokenExpired = tokens.expiresAt <= now + 2 * 60 * 1000;
                    if (tokenAge < 5000 && !isTokenExpired) {
                        console.log("Token was just created ".concat(tokenAge, "ms ago and isn't expired, skipping refresh"));
                        return [2 /*return*/, { success: true, newTokens: tokens }];
                    }
                    if (tokens.expiresAt > now + 2 * 60 * 1000) {
                        console.log("Token is still valid, no need to refresh");
                        return [2 /*return*/, { success: true, newTokens: tokens }];
                    }
                    console.log("Refreshing access token...");
                    refreshPromise = (function () { return __awaiter(_this, void 0, void 0, function () {
                        var formBody, response, errorBody, errorJson, e_1, data, expiresAt, newTokens, error_5;
                        var _a;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    _b.trys.push([0, 12, 14, 15]);
                                    formBody = "grant_type=refresh_token&client_id=".concat(encodeURIComponent(process.env.EXPO_PUBLIC_CLIENT_ID), "&refresh_token=").concat(encodeURIComponent(tokens.refreshToken), "&redirect_uri=").concat(encodeURIComponent(redirectUri), "&code_verifier=").concat(encodeURIComponent((_a = tokens.codeVerifier) !== null && _a !== void 0 ? _a : ""));
                                    console.log("Attempting refresh with body:", formBody);
                                    return [4 /*yield*/, fetch("".concat(process.env.EXPO_PUBLIC_API_BASE, "/oauth/token"), {
                                            method: "POST",
                                            headers: {
                                                "Content-Type": "application/x-www-form-urlencoded",
                                            },
                                            body: formBody,
                                        })];
                                case 1:
                                    response = _b.sent();
                                    if (!!response.ok) return [3 /*break*/, 9];
                                    return [4 /*yield*/, response.text()];
                                case 2:
                                    errorBody = _b.sent();
                                    (0, errorUtils_1.logCriticalError)("Token refresh failed with status ".concat(response.status), new Error(errorBody), { action: "token_refresh", status: response.status, errorBody: errorBody });
                                    _b.label = 3;
                                case 3:
                                    _b.trys.push([3, 6, , 7]);
                                    errorJson = JSON.parse(errorBody);
                                    (0, errorUtils_1.logCriticalError)("Token refresh error details", new Error(errorJson.error), {
                                        action: "token_refresh",
                                        errorDetails: errorJson,
                                    });
                                    if (!(errorJson.error === "invalid_grant")) return [3 /*break*/, 5];
                                    console.log("Refresh token is invalid or already used - forcing logout");
                                    return [4 /*yield*/, forceLogout()];
                                case 4:
                                    _b.sent();
                                    _b.label = 5;
                                case 5: return [3 /*break*/, 7];
                                case 6:
                                    e_1 = _b.sent();
                                    Sentry.captureException(e_1);
                                    return [3 /*break*/, 7];
                                case 7: return [4 /*yield*/, forceLogout()];
                                case 8:
                                    _b.sent();
                                    throw new Error("Failed to refresh token: ".concat(response.status, " ").concat(response.statusText));
                                case 9: return [4 /*yield*/, response.json()];
                                case 10:
                                    data = _b.sent();
                                    if (!data.access_token || !data.refresh_token) {
                                        (0, errorUtils_1.logCriticalError)("Invalid token response from server", new Error("Missing tokens"), {
                                            action: "token_refresh",
                                            response_data: data,
                                        });
                                        throw new Error("Invalid token response from server");
                                    }
                                    expiresAt = Date.now() + (data.expires_in || 7200) * 1000;
                                    newTokens = {
                                        accessToken: data.access_token,
                                        refreshToken: data.refresh_token,
                                        expiresAt: expiresAt,
                                        createdAt: Date.now(),
                                        codeVerifier: tokens.codeVerifier,
                                    };
                                    return [4 /*yield*/, setTokens(newTokens)];
                                case 11:
                                    _b.sent();
                                    console.log("Token refreshed successfully");
                                    lastSuccessfulRefreshTime = Date.now();
                                    return [2 /*return*/, { success: true, newTokens: newTokens }];
                                case 12:
                                    error_5 = _b.sent();
                                    (0, errorUtils_1.logCriticalError)("Token refresh failed", error_5, {
                                        action: "token_refresh",
                                    });
                                    return [4 /*yield*/, forceLogout()];
                                case 13:
                                    _b.sent();
                                    return [2 /*return*/, { success: false }];
                                case 14:
                                    refreshPromise = null;
                                    return [7 /*endfinally*/];
                                case 15: return [2 /*return*/];
                            }
                        });
                    }); })();
                    return [2 /*return*/, refreshPromise];
                case 5:
                    error_4 = _a.sent();
                    (0, errorUtils_1.logCriticalError)("Error initiating token refresh", error_4, {
                        action: "token_refresh_init",
                    });
                    refreshPromise = null;
                    return [4 /*yield*/, forceLogout()];
                case 6:
                    _a.sent();
                    return [2 /*return*/, { success: false }];
                case 7: return [2 /*return*/];
            }
        });
    }); };
    if (isLoading) {
        return null;
    }
    return ((0, jsx_runtime_1.jsx)(auth_1.default.Provider, { value: {
            tokens: tokens,
            setTokens: setTokens,
            refreshAccessToken: refreshAccessToken,
        }, children: children }));
}
