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
exports.default = useClient;
var ky_1 = __importDefault(require("ky"));
var react_1 = require("react");
var auth_1 = __importDefault(require("../auth"));
var errorUtils_1 = require("./errorUtils");
function useClient() {
    var _this = this;
    var _a = (0, react_1.useContext)(auth_1.default), tokens = _a.tokens, refreshAccessToken = _a.refreshAccessToken;
    return (0, react_1.useMemo)(function () {
        var pendingRetries = new Set();
        var refreshInProgress = false;
        var refreshPromise = null;
        var queuedRequests = [];
        var processQueuedRequests = function () { return __awaiter(_this, void 0, void 0, function () {
            var requests;
            var _this = this;
            return __generator(this, function (_a) {
                requests = __spreadArray([], queuedRequests, true);
                queuedRequests = [];
                return [2 /*return*/, Promise.all(requests.map(function (retry) { return __awaiter(_this, void 0, void 0, function () {
                        var error_1;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    _a.trys.push([0, 2, , 3]);
                                    return [4 /*yield*/, retry()];
                                case 1: return [2 /*return*/, _a.sent()];
                                case 2:
                                    error_1 = _a.sent();
                                    (0, errorUtils_1.logCriticalError)("Failed to process queued request", error_1, {
                                        context: "queue_processing",
                                    });
                                    throw error_1;
                                case 3: return [2 /*return*/];
                            }
                        });
                    }); }))];
            });
        }); };
        var client = ky_1.default.create({
            prefixUrl: process.env.EXPO_PUBLIC_API_BASE,
            retry: {
                limit: 0,
            },
            headers: {
                "User-Agent": "HCB-Mobile",
            },
            timeout: 30000,
            hooks: {
                beforeRequest: [
                    function (request) { return __awaiter(_this, void 0, void 0, function () {
                        var _this = this;
                        return __generator(this, function (_a) {
                            if (refreshInProgress) {
                                // If refresh is in progress, queue this request
                                return [2 /*return*/, new Promise(function () {
                                        queuedRequests.push(function () { return __awaiter(_this, void 0, void 0, function () {
                                            var url, apiBase, path, newResponse, error_2;
                                            return __generator(this, function (_a) {
                                                switch (_a.label) {
                                                    case 0:
                                                        _a.trys.push([0, 2, , 3]);
                                                        url = request.url.toString();
                                                        apiBase = process.env.EXPO_PUBLIC_API_BASE;
                                                        path = url.startsWith(apiBase)
                                                            ? url.substring(apiBase.length)
                                                            : url;
                                                        if (path.startsWith("/")) {
                                                            path = path.substring(1);
                                                        }
                                                        return [4 /*yield*/, client(path, {
                                                                method: request.method,
                                                                headers: {
                                                                    Authorization: "Bearer ".concat(tokens === null || tokens === void 0 ? void 0 : tokens.accessToken),
                                                                },
                                                                body: request.body,
                                                            })];
                                                    case 1:
                                                        newResponse = _a.sent();
                                                        return [2 /*return*/, newResponse];
                                                    case 2:
                                                        error_2 = _a.sent();
                                                        (0, errorUtils_1.logCriticalError)("Failed to process queued request", error_2, { context: "auth_retry" });
                                                        throw error_2;
                                                    case 3: return [2 /*return*/];
                                                }
                                            });
                                        }); });
                                    })];
                            }
                            if (tokens === null || tokens === void 0 ? void 0 : tokens.accessToken) {
                                request.headers.set("Authorization", "Bearer ".concat(tokens.accessToken));
                            }
                            return [2 /*return*/];
                        });
                    }); },
                ],
                afterResponse: [
                    function (request, options, response) { return __awaiter(_this, void 0, void 0, function () {
                        var requestKey, result, url, apiBase, path, latestAccessToken, newResponse, innerError_1, refreshError_1;
                        var _this = this;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    if (response.ok)
                                        return [2 /*return*/, response];
                                    requestKey = "".concat(request.method, ":").concat(request.url);
                                    if (pendingRetries.has(requestKey)) {
                                        console.log("Request already being retried, returning response as-is to avoid loop");
                                        pendingRetries.delete(requestKey);
                                        return [2 /*return*/, response];
                                    }
                                    if (!(response.status === 401)) return [3 /*break*/, 10];
                                    console.log("Received 401 response, attempting token refresh...");
                                    if (refreshInProgress) {
                                        return [2 /*return*/, new Promise(function () {
                                                queuedRequests.push(function () { return __awaiter(_this, void 0, void 0, function () {
                                                    var url, apiBase, path, newResponse, error_3;
                                                    return __generator(this, function (_a) {
                                                        switch (_a.label) {
                                                            case 0:
                                                                _a.trys.push([0, 2, , 3]);
                                                                url = request.url.toString();
                                                                apiBase = process.env.EXPO_PUBLIC_API_BASE;
                                                                path = url.startsWith(apiBase)
                                                                    ? url.substring(apiBase.length)
                                                                    : url;
                                                                if (path.startsWith("/")) {
                                                                    path = path.substring(1);
                                                                }
                                                                return [4 /*yield*/, client(path, {
                                                                        method: request.method,
                                                                        headers: {
                                                                            Authorization: "Bearer ".concat(tokens === null || tokens === void 0 ? void 0 : tokens.accessToken),
                                                                        },
                                                                        body: request.body,
                                                                    })];
                                                            case 1:
                                                                newResponse = _a.sent();
                                                                return [2 /*return*/, newResponse];
                                                            case 2:
                                                                error_3 = _a.sent();
                                                                (0, errorUtils_1.logCriticalError)("Failed to process queued request", error_3, { context: "token_refresh_retry" });
                                                                throw error_3;
                                                            case 3: return [2 /*return*/];
                                                        }
                                                    });
                                                }); });
                                            })];
                                    }
                                    refreshInProgress = true;
                                    _a.label = 1;
                                case 1:
                                    _a.trys.push([1, 8, 9, 10]);
                                    if (!refreshPromise) {
                                        refreshPromise = refreshAccessToken();
                                    }
                                    return [4 /*yield*/, refreshPromise];
                                case 2:
                                    result = _a.sent();
                                    if (!(result.success && result.newTokens)) return [3 /*break*/, 7];
                                    if (!(result.newTokens.accessToken !== (tokens === null || tokens === void 0 ? void 0 : tokens.accessToken))) return [3 /*break*/, 7];
                                    console.log("Token refreshed, processing all queued requests");
                                    return [4 /*yield*/, processQueuedRequests()];
                                case 3:
                                    _a.sent();
                                    url = request.url.toString();
                                    apiBase = process.env.EXPO_PUBLIC_API_BASE;
                                    path = url.startsWith(apiBase)
                                        ? url.substring(apiBase.length)
                                        : url;
                                    if (path.startsWith("/")) {
                                        path = path.substring(1);
                                    }
                                    console.log("Retrying path: ".concat(path));
                                    latestAccessToken = result.newTokens.accessToken;
                                    console.log("Using directly returned token (first 10 chars): ".concat(latestAccessToken.substring(0, 10), "..."));
                                    _a.label = 4;
                                case 4:
                                    _a.trys.push([4, 6, , 7]);
                                    return [4 /*yield*/, client(path, {
                                            method: request.method,
                                            headers: {
                                                Authorization: "Bearer ".concat(latestAccessToken),
                                            },
                                            body: request.body,
                                        })];
                                case 5:
                                    newResponse = _a.sent();
                                    console.log("Retry succeeded with status: ".concat(newResponse.status));
                                    pendingRetries.delete(requestKey);
                                    return [2 /*return*/, newResponse];
                                case 6:
                                    innerError_1 = _a.sent();
                                    (0, errorUtils_1.logCriticalError)("Inner retry request failed", innerError_1, { context: "inner_retry" });
                                    pendingRetries.delete(requestKey);
                                    return [2 /*return*/, response];
                                case 7: return [3 /*break*/, 10];
                                case 8:
                                    refreshError_1 = _a.sent();
                                    (0, errorUtils_1.logCriticalError)("Error during token refresh - user will be logged out", refreshError_1, { context: "token_refresh" });
                                    return [3 /*break*/, 10];
                                case 9:
                                    refreshInProgress = false;
                                    refreshPromise = null;
                                    return [7 /*endfinally*/];
                                case 10: return [2 /*return*/, response];
                            }
                        });
                    }); },
                ],
            },
        });
        return client;
    }, [tokens, refreshAccessToken]);
}
