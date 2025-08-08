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
var _a, _b, _c, _d, _e, _f, _g, _h;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = AppIconSelector;
var jsx_runtime_1 = require("react/jsx-runtime");
var vector_icons_1 = require("@expo/vector-icons");
var native_1 = require("@react-navigation/native");
var expo_alternate_app_icons_1 = require("expo-alternate-app-icons");
var expo_constants_1 = __importDefault(require("expo-constants"));
var react_1 = require("react");
var react_native_1 = require("react-native");
var swr_1 = __importDefault(require("swr"));
var icons = {
    default: require("../../../assets/icons/default.png"),
    "default dark": require("../../../assets/icons/default-dark.png"),
    cashmoney: require("../../../assets/icons/cash-money.png"),
    testflight: ((_a = expo_constants_1.default.platform) === null || _a === void 0 ? void 0 : _a.ios)
        ? require("../../../assets/icons/testflight.png")
        : null,
    hacknight: ((_b = expo_constants_1.default.platform) === null || _b === void 0 ? void 0 : _b.ios)
        ? require("../../../assets/icons/hack-night.png")
        : null,
    "admin light": ((_c = expo_constants_1.default.platform) === null || _c === void 0 ? void 0 : _c.ios)
        ? require("../../../assets/icons/admin.png")
        : null,
    "admin dark": ((_d = expo_constants_1.default.platform) === null || _d === void 0 ? void 0 : _d.ios)
        ? require("../../../assets/icons/admin-dark.png")
        : null,
    platinum: ((_e = expo_constants_1.default.platform) === null || _e === void 0 ? void 0 : _e.ios)
        ? require("../../../assets/icons/platinum.png")
        : null,
    hackathongrant: ((_f = expo_constants_1.default.platform) === null || _f === void 0 ? void 0 : _f.ios)
        ? require("../../../assets/icons/hackathongrant.png")
        : null,
    christmas: ((_g = expo_constants_1.default.platform) === null || _g === void 0 ? void 0 : _g.ios)
        ? require("../../../assets/icons/christmas.png")
        : null,
    frc: ((_h = expo_constants_1.default.platform) === null || _h === void 0 ? void 0 : _h.ios)
        ? require("../../../assets/icons/frc.png")
        : null,
};
var iconKeyMap = {
    frc: "frc",
    admin: "admin light",
    platinum: "platinum",
    testflight: "testflight",
    hackathon_grant: "hackathongrant",
};
var getDisplayName = function (key) {
    var nameMap = {
        default: "Default",
        "default dark": "Default Dark",
        hackathongrant: "Hackathon Grant",
        cashmoney: "Cash Money",
        christmas: "Christmas",
        frc: "FRC",
        "admin light": "Admin Light",
        "admin dark": "Admin Dark",
        platinum: "Platinum",
        testflight: "Testflight",
        hacknight: "Hacknight",
    };
    return nameMap[key] || key.charAt(0).toUpperCase() + key.slice(1);
};
var isChristmasSeason = function () {
    var now = new Date();
    var month = now.getMonth();
    return month === 11; // December
};
function AppIconSelector() {
    var _this = this;
    var colors = (0, native_1.useTheme)().colors;
    var _a = (0, react_1.useState)("default"), currentIcon = _a[0], setCurrentIcon = _a[1];
    var availableIcons = (0, swr_1.default)("user/available_icons").data;
    (0, react_1.useEffect)(function () {
        var iconName = (0, expo_alternate_app_icons_1.getAppIconName)();
        if (!iconName || iconName === "Default") {
            setCurrentIcon("default");
        }
        else if (iconName === "DefaultDark") {
            setCurrentIcon("default dark");
        }
        else if (iconName === "Admin") {
            setCurrentIcon("admin light");
        }
        else if (iconName === "AdminDark") {
            setCurrentIcon("admin dark");
        }
        else {
            setCurrentIcon(iconName.toLowerCase());
        }
    }, []);
    var handleSelect = function (iconName) { return __awaiter(_this, void 0, void 0, function () {
        var configIconName, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    configIconName = iconName;
                    if (iconName === "default") {
                        configIconName = null;
                    }
                    else if (iconName === "default dark") {
                        configIconName = "DefaultDark";
                    }
                    else if (iconName === "admin light") {
                        configIconName = "Admin";
                    }
                    else if (iconName === "admin dark") {
                        configIconName = "AdminDark";
                    }
                    else {
                        configIconName = iconName.charAt(0).toUpperCase() + iconName.slice(1);
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, (0, expo_alternate_app_icons_1.setAlternateAppIcon)(configIconName)];
                case 2:
                    _a.sent();
                    setCurrentIcon(iconName);
                    console.log("Successfully set icon to: ".concat(configIconName));
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.error("Failed to set icon:", error_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var getAvailableIcons = function () {
        if (!availableIcons) {
            return Object.entries(icons)
                .filter(function (_a) {
                var key = _a[0], value = _a[1];
                if (value === null)
                    return false;
                if (key === "christmas")
                    return isChristmasSeason();
                if (key === "admin light" || key === "admin dark")
                    return false;
                return true;
            })
                .map(function (_a) {
                var key = _a[0], value = _a[1];
                return ({
                    key: key,
                    value: value,
                });
            });
        }
        return Object.entries(icons)
            .filter(function (_a) {
            var _b;
            var key = _a[0], value = _a[1];
            if (value === null)
                return false;
            if (key.startsWith("default"))
                return true;
            if (key === "christmas")
                return isChristmasSeason();
            if (key === "admin light" || key === "admin dark") {
                return availableIcons["admin"];
            }
            var mappedApiKey = (_b = Object.entries(iconKeyMap).find(function (_a) {
                var _ = _a[0], localKey = _a[1];
                return localKey === key;
            })) === null || _b === void 0 ? void 0 : _b[0];
            if (!mappedApiKey)
                return true;
            return availableIcons[mappedApiKey];
        })
            .map(function (_a) {
            var key = _a[0], value = _a[1];
            return ({
                key: key,
                value: value,
            });
        });
    };
    var iconList = getAvailableIcons();
    return ((0, jsx_runtime_1.jsx)(react_native_1.ScrollView, { style: { flex: 1, backgroundColor: colors.background }, contentContainerStyle: { padding: 20, paddingBottom: 100 }, children: (0, jsx_runtime_1.jsxs)(react_native_1.View, { style: { gap: 12 }, children: [(0, jsx_runtime_1.jsx)(react_native_1.Text, { style: {
                        fontSize: 20,
                        fontWeight: "bold",
                        color: colors.text,
                        marginBottom: 14,
                        marginTop: 10,
                    }, children: "Choose App Icon" }), (0, jsx_runtime_1.jsx)(react_native_1.View, { style: { gap: 12 }, children: iconList.map(function (_a) {
                        var key = _a.key, value = _a.value;
                        return ((0, jsx_runtime_1.jsxs)(react_native_1.Pressable, { style: {
                                backgroundColor: colors.card,
                                borderRadius: 16,
                                padding: 18,
                                flexDirection: "row",
                                alignItems: "center",
                                borderWidth: 2,
                                borderColor: currentIcon === key ? colors.primary : "transparent",
                            }, onPress: function () { return handleSelect(key); }, children: [(0, jsx_runtime_1.jsx)(react_native_1.Image, { source: value, style: {
                                        width: 40,
                                        height: 40,
                                        borderRadius: 8,
                                        marginRight: 12,
                                    } }), (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: { color: colors.text, fontSize: 16, flex: 1 }, children: getDisplayName(key) }), currentIcon === key && ((0, jsx_runtime_1.jsx)(vector_icons_1.Ionicons, { name: "checkmark-circle", size: 24, color: colors.primary }))] }, key));
                    }) })] }) }));
}
