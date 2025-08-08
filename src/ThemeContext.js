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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useThemeContext = exports.ThemeProvider = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var async_storage_1 = __importDefault(require("@react-native-async-storage/async-storage"));
var react_1 = require("react");
var errorUtils_1 = require("./lib/errorUtils");
var THEME_KEY = "app_theme";
var ThemeContext = (0, react_1.createContext)({
    theme: "system",
    setTheme: function () { },
    resetTheme: function () { },
});
var ThemeProvider = function (_a) {
    var children = _a.children;
    var _b = (0, react_1.useState)("system"), theme = _b[0], setThemeState = _b[1];
    (0, react_1.useEffect)(function () {
        (function () { return __awaiter(void 0, void 0, void 0, function () {
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
                            setThemeState(storedTheme);
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        (0, errorUtils_1.logError)("Error loading theme from storage", error_1, {
                            context: { action: "theme_load" },
                        });
                        // Default to system theme on error
                        setThemeState("system");
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); })();
    }, []);
    var setTheme = function (newTheme) { return __awaiter(void 0, void 0, void 0, function () {
        var error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setThemeState(newTheme);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, async_storage_1.default.setItem(THEME_KEY, newTheme)];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    error_2 = _a.sent();
                    (0, errorUtils_1.logError)("Error saving theme to storage", error_2, {
                        context: { newTheme: newTheme },
                    });
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var resetTheme = function () { return __awaiter(void 0, void 0, void 0, function () {
        var error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setThemeState("system");
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, async_storage_1.default.setItem(THEME_KEY, "system")];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    error_3 = _a.sent();
                    (0, errorUtils_1.logError)("Error resetting theme in storage", error_3, {
                        context: { action: "theme_reset" },
                    });
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    return ((0, jsx_runtime_1.jsx)(ThemeContext.Provider, { value: { theme: theme, setTheme: setTheme, resetTheme: resetTheme }, children: children }));
};
exports.ThemeProvider = ThemeProvider;
var useThemeContext = function () { return (0, react_1.useContext)(ThemeContext); };
exports.useThemeContext = useThemeContext;
