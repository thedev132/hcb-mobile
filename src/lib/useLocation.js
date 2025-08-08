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
exports.useLocation = useLocation;
var geolocation_1 = __importDefault(require("@react-native-community/geolocation"));
var native_1 = require("@react-navigation/native");
var Location = __importStar(require("expo-location"));
var react_1 = require("react");
var react_native_1 = require("react-native");
var errorUtils_1 = require("./errorUtils");
function useLocation() {
    var _this = this;
    var _a = (0, react_1.useState)(false), accessDenied = _a[0], setAccessDenied = _a[1];
    var _b = (0, react_1.useState)(null), location = _b[0], setLocation = _b[1];
    function requestLocationPermission() {
        return __awaiter(this, void 0, void 0, function () {
            var granted, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, react_native_1.PermissionsAndroid.request(react_native_1.PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION, {
                                title: "Localização",
                                message: "Permitir que o aplicativo utilize a sua localização.",
                                buttonPositive: "OK",
                            })];
                    case 1:
                        granted = _a.sent();
                        return [2 /*return*/, granted === react_native_1.PermissionsAndroid.RESULTS.GRANTED];
                    case 2:
                        err_1 = _a.sent();
                        (0, errorUtils_1.logError)("Location permission error", err_1, {
                            context: { platform: react_native_1.Platform.OS },
                        });
                        return [2 /*return*/, false]; // Return false when permission request fails
                    case 3: return [2 /*return*/];
                }
            });
        });
    }
    var getAndroidLocation = (0, react_1.useCallback)(function () { return __awaiter(_this, void 0, void 0, function () {
        var granted;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, requestLocationPermission()];
                case 1:
                    granted = _a.sent();
                    if (!granted) {
                        setAccessDenied(true);
                        return [2 /*return*/];
                    }
                    geolocation_1.default.getCurrentPosition(function (position) {
                        var coordinates = {
                            latitude: position.coords.latitude.toString(),
                            longitude: position.coords.longitude.toString(),
                        };
                        setLocation(coordinates);
                    }, function (error) {
                        (0, errorUtils_1.logError)("Error getting location", error, {
                            context: { action: "get_location" },
                        });
                    }, { enableHighAccuracy: true });
                    return [2 /*return*/];
            }
        });
    }); }, []);
    var getIosLocation = (0, react_1.useCallback)(function () { return __awaiter(_this, void 0, void 0, function () {
        var status_1, location_1, coordinates, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, Location.requestForegroundPermissionsAsync()];
                case 1:
                    status_1 = (_a.sent()).status;
                    if (status_1 !== "granted") {
                        setAccessDenied(true);
                        return [2 /*return*/];
                    }
                    return [4 /*yield*/, Location.getCurrentPositionAsync()];
                case 2:
                    location_1 = _a.sent();
                    coordinates = {
                        latitude: location_1.coords.latitude.toString(),
                        longitude: location_1.coords.longitude.toString(),
                    };
                    setLocation(coordinates);
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    (0, errorUtils_1.logError)("Error getting iOS location", error_1, {
                        context: { action: "get_ios_location" },
                    });
                    setAccessDenied(true); // Set access denied on error
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); }, []);
    (0, native_1.useFocusEffect)((0, react_1.useCallback)(function () {
        var getLocation = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(react_native_1.Platform.OS === "android")) return [3 /*break*/, 2];
                        return [4 /*yield*/, getAndroidLocation()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                    case 2: return [4 /*yield*/, getIosLocation()];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        getLocation().catch(function (err) {
            (0, errorUtils_1.logError)("Location access error", err, {
                context: { platform: react_native_1.Platform.OS },
            });
        });
    }, [getAndroidLocation, getIosLocation]));
    return {
        accessDenied: accessDenied,
        location: location,
    };
}
