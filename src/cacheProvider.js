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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CacheProvider = void 0;
exports.useCache = useCache;
var FileSystem = __importStar(require("expo-file-system"));
var react_1 = require("react");
var react_native_1 = require("react-native");
var use_debounce_1 = require("use-debounce");
var errorUtils_1 = require("./lib/errorUtils");
var CacheProvider = /** @class */ (function () {
    function CacheProvider() {
        this.isInitialized = false;
        this.map = new Map();
        this.cacheDir = FileSystem.cacheDirectory + "app-cache/";
        this.cacheFile = "".concat(this.cacheDir, "cache.json");
    }
    CacheProvider.prototype.initialize = function () {
        return __awaiter(this, void 0, void 0, function () {
            var appCache, fileInfo, data, entries, error_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.isInitialized)
                            return [2 /*return*/];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 7, , 8]);
                        if (!(react_native_1.Platform.OS === "web")) return [3 /*break*/, 2];
                        appCache = localStorage.getItem("app-cache");
                        if (appCache) {
                            JSON.parse(appCache).forEach(function (_a) {
                                var key = _a[0], value = _a[1];
                                _this.map.set(key, value);
                            });
                        }
                        return [3 /*break*/, 6];
                    case 2: return [4 /*yield*/, this.ensureCacheDirectory()];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, FileSystem.getInfoAsync(this.cacheFile)];
                    case 4:
                        fileInfo = _a.sent();
                        if (!fileInfo.exists) return [3 /*break*/, 6];
                        return [4 /*yield*/, FileSystem.readAsStringAsync(this.cacheFile)];
                    case 5:
                        data = _a.sent();
                        entries = JSON.parse(data);
                        entries.forEach(function (_a) {
                            var key = _a[0], value = _a[1];
                            _this.map.set(key, value);
                        });
                        _a.label = 6;
                    case 6:
                        this.isInitialized = true;
                        return [3 /*break*/, 8];
                    case 7:
                        error_1 = _a.sent();
                        (0, errorUtils_1.logError)("Error initializing cache", error_1, {
                            context: { cacheSize: this.map.size },
                        });
                        return [3 /*break*/, 8];
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    CacheProvider.prototype.ensureCacheDirectory = function () {
        return __awaiter(this, void 0, void 0, function () {
            var dirInfo, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        return [4 /*yield*/, FileSystem.getInfoAsync(this.cacheDir)];
                    case 1:
                        dirInfo = _a.sent();
                        if (!!dirInfo.exists) return [3 /*break*/, 3];
                        return [4 /*yield*/, FileSystem.makeDirectoryAsync(this.cacheDir, {
                                intermediates: true,
                            })];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [3 /*break*/, 5];
                    case 4:
                        error_2 = _a.sent();
                        (0, errorUtils_1.logError)("Error ensuring cache directory", error_2, {
                            context: { cacheDir: this.cacheDir },
                        });
                        throw error_2; // Re-throw as this is critical for cache functionality
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    CacheProvider.prototype.save = function () {
        return __awaiter(this, void 0, void 0, function () {
            var appCache, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.map.size === 0)
                            return [2 /*return*/];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 6, , 7]);
                        if (!(react_native_1.Platform.OS === "web")) return [3 /*break*/, 2];
                        appCache = JSON.stringify(Array.from(this.map.entries()));
                        localStorage.setItem("app-cache", appCache);
                        return [3 /*break*/, 5];
                    case 2: return [4 /*yield*/, this.ensureCacheDirectory()];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, FileSystem.writeAsStringAsync(this.cacheFile, JSON.stringify(Array.from(this.map.entries())))];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        error_3 = _a.sent();
                        (0, errorUtils_1.logError)("Error saving cache", error_3, {
                            context: { cacheSize: this.map.size },
                        });
                        return [3 /*break*/, 7];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    CacheProvider.prototype.get = function (key) {
        return this.map.get(key);
    };
    CacheProvider.prototype.set = function (key, value) {
        this.map.set(key, value);
    };
    CacheProvider.prototype.delete = function (key) {
        return this.map.delete(key);
    };
    CacheProvider.prototype.clear = function () {
        this.map.clear();
    };
    // SWR Cache interface implementation
    CacheProvider.prototype.keys = function () {
        return this.map.keys();
    };
    return CacheProvider;
}());
exports.CacheProvider = CacheProvider;
// Create a singleton instance
var cacheProvider = new CacheProvider();
// Initialize cache when the app starts
(function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, cacheProvider.initialize()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); })();
// Set up app state listeners for saving cache
react_native_1.AppState.addEventListener("change", function (nextAppState) {
    if (nextAppState === "background" || nextAppState === "inactive") {
        react_native_1.InteractionManager.runAfterInteractions(function () {
            cacheProvider.save();
        });
    }
});
// Export a hook for using the cache
function useCache() {
    var saveCache = (0, use_debounce_1.useDebouncedCallback)(function () {
        cacheProvider.save();
    }, 10000);
    // Set up automatic saving
    (0, react_1.useEffect)(function () {
        var subscription = react_native_1.AppState.addEventListener("change", function (nextAppState) {
            if (nextAppState === "background" || nextAppState === "inactive") {
                saveCache();
            }
        });
        return function () {
            subscription.remove();
        };
    }, [saveCache]);
    return cacheProvider;
}
exports.default = cacheProvider;
