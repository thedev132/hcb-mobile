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
exports.default = CardsPage;
var jsx_runtime_1 = require("react/jsx-runtime");
var vector_icons_1 = require("@expo/vector-icons");
var async_storage_1 = __importDefault(require("@react-native-async-storage/async-storage"));
var menu_1 = require("@react-native-menu/menu");
var bottom_tabs_1 = require("@react-navigation/bottom-tabs");
var native_1 = require("@react-navigation/native");
var Haptics = __importStar(require("expo-haptics"));
var hcb_geo_pattern_1 = require("hcb-geo-pattern");
var react_1 = require("react");
var react_native_1 = require("react-native");
var react_native_gesture_handler_1 = require("react-native-gesture-handler");
var react_native_reorderable_list_1 = __importStar(require("react-native-reorderable-list"));
var swr_1 = __importDefault(require("swr"));
var CardListSkeleton_1 = __importDefault(require("../components/CardListSkeleton"));
var PaymentCard_1 = __importDefault(require("../components/PaymentCard"));
var errorUtils_1 = require("../lib/errorUtils");
var theme_1 = require("../theme");
var util_1 = require("../util");
var CardItem = function (_a) {
    var item = _a.item, isActive = _a.isActive, onPress = _a.onPress, pattern = _a.pattern, patternDimensions = _a.patternDimensions;
    var drag = (0, react_native_reorderable_list_1.useReorderableDrag)();
    return ((0, jsx_runtime_1.jsx)(react_native_1.Pressable, { onPress: function () { return onPress(item); }, onLongPress: drag, disabled: isActive, children: (0, jsx_runtime_1.jsx)(PaymentCard_1.default, { card: item, style: { marginHorizontal: 20, marginVertical: 8 }, pattern: pattern, patternDimensions: patternDimensions }) }));
};
function CardsPage(_a) {
    var _this = this;
    var navigation = _a.navigation;
    var _b = (0, swr_1.default)("user/cards"), cards = _b.data, reloadCards = _b.mutate;
    var _c = (0, swr_1.default)("user/card_grants"), grantCards = _c.data, reloadGrantCards = _c.mutate;
    var tabBarHeight = (0, bottom_tabs_1.useBottomTabBarHeight)();
    var scheme = (0, react_native_1.useColorScheme)();
    // Cache for card patterns
    var _d = (0, react_1.useState)({}), patternCache = _d[0], setPatternCache = _d[1];
    (0, react_1.useEffect)(function () {
        var generatePatterns = function () { return __awaiter(_this, void 0, void 0, function () {
            var allCards, newPatternCache, _i, allCards_1, card, patternData, normalizedPattern, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!cards && !grantCards)
                            return [2 /*return*/];
                        allCards = __spreadArray(__spreadArray([], (cards || []), true), (grantCards || []), true);
                        newPatternCache = {};
                        _i = 0, allCards_1 = allCards;
                        _a.label = 1;
                    case 1:
                        if (!(_i < allCards_1.length)) return [3 /*break*/, 6];
                        card = allCards_1[_i];
                        if (card.type !== "virtual")
                            return [3 /*break*/, 5];
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, (0, hcb_geo_pattern_1.generate)({
                                input: card.id,
                                grayScale: card.status !== "active"
                                    ? card.status == "frozen"
                                        ? 0.23
                                        : 1
                                    : 0,
                            })];
                    case 3:
                        patternData = _a.sent();
                        normalizedPattern = (0, util_1.normalizeSvg)(patternData.toSVG(), patternData.width, patternData.height);
                        newPatternCache[card.id] = {
                            pattern: normalizedPattern,
                            dimensions: {
                                width: patternData.width,
                                height: patternData.height,
                            },
                        };
                        return [3 /*break*/, 5];
                    case 4:
                        error_1 = _a.sent();
                        (0, errorUtils_1.logError)("Error generating pattern for card", error_1, {
                            context: { cardId: card.id },
                        });
                        return [3 /*break*/, 5];
                    case 5:
                        _i++;
                        return [3 /*break*/, 1];
                    case 6:
                        setPatternCache(newPatternCache);
                        return [2 /*return*/];
                }
            });
        }); };
        generatePatterns();
    }, [cards, grantCards]);
    (0, native_1.useFocusEffect)((0, react_1.useCallback)(function () {
        // Reload data when screen comes into focus
        var refreshData = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, reloadCards()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, reloadGrantCards()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        refreshData();
    }, [reloadCards, reloadGrantCards]));
    var _e = (0, react_1.useState)(true), canceledCardsShown = _e[0], setCanceledCardsShown = _e[1];
    var _f = (0, react_1.useState)(), allCards = _f[0], setAllCards = _f[1];
    var _g = (0, react_1.useState)(), sortedCards = _g[0], setSortedCards = _g[1];
    var refreshing = (0, react_1.useState)(false)[0];
    var usePanGesture = function () {
        return (0, react_1.useMemo)(function () { return react_native_gesture_handler_1.Gesture.Pan().activateAfterLongPress(520); }, []);
    };
    var panGesture = usePanGesture();
    (0, react_1.useEffect)(function () {
        navigation.setOptions({
            headerRight: function () { return ((0, jsx_runtime_1.jsx)(menu_1.MenuView, { actions: [
                    {
                        id: "showCanceledCards",
                        title: "Show canceled cards",
                        state: canceledCardsShown ? "on" : "off",
                    },
                ], onPressAction: function (_a) {
                    var event = _a.nativeEvent.event;
                    if (event == "showCanceledCards") {
                        setCanceledCardsShown(!canceledCardsShown);
                        async_storage_1.default.setItem("canceledCardsShown", (!canceledCardsShown).toString());
                    }
                }, themeVariant: scheme || undefined, children: (0, jsx_runtime_1.jsx)(vector_icons_1.Ionicons.Button, { name: "ellipsis-horizontal-circle", backgroundColor: "transparent", size: 24, color: theme_1.palette.primary, iconStyle: { marginRight: 0 } }) })); },
        });
    }, [navigation, canceledCardsShown, scheme]);
    var combineCards = (0, react_1.useCallback)(function () {
        // Transform grantCards
        var transformedGrantCards = grantCards === null || grantCards === void 0 ? void 0 : grantCards.map(function (grantCard) {
            var _a;
            return (__assign(__assign({}, grantCard), { grant_id: grantCard.id, id: grantCard.card_id, last4: (_a = cards === null || cards === void 0 ? void 0 : cards.find(function (card) { return card.id === grantCard.card_id; })) === null || _a === void 0 ? void 0 : _a.last4 }));
        }).filter(function (grantCard) { return grantCard.card_id !== null; });
        // Filter out cards that are also grantCards
        var filteredCards = cards === null || cards === void 0 ? void 0 : cards.filter(function (card) {
            return !(transformedGrantCards === null || transformedGrantCards === void 0 ? void 0 : transformedGrantCards.some(function (grantCard) { return grantCard.id === card.id; }));
        });
        // Combine filtered cards and transformed grantCards
        var combinedCards = __spreadArray(__spreadArray([], (filteredCards || []), true), (transformedGrantCards || []), true);
        // Sort cards by status
        combinedCards.sort(function (a, b) {
            if (a.status == "active" && b.status != "active") {
                return -1;
            }
            else if (a.status != "active" && b.status == "active") {
                return 1;
            }
            else {
                return 0;
            }
        });
        // Update state
        // @ts-expect-error both types have the same properties that are used
        setAllCards(combinedCards);
    }, [cards, grantCards]);
    (0, react_1.useEffect)(function () {
        var fetchCanceledCardsShown = function () { return __awaiter(_this, void 0, void 0, function () {
            var isCanceledCardsShown, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        return [4 /*yield*/, async_storage_1.default.getItem("canceledCardsShown")];
                    case 1:
                        isCanceledCardsShown = _a.sent();
                        if (!isCanceledCardsShown) return [3 /*break*/, 3];
                        setCanceledCardsShown(isCanceledCardsShown === "true");
                        return [4 /*yield*/, async_storage_1.default.setItem("canceledCardsShown", (isCanceledCardsShown === "true").toString())];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [3 /*break*/, 5];
                    case 4:
                        error_2 = _a.sent();
                        (0, errorUtils_1.logError)("Error fetching canceled cards shown status", error_2, {
                            context: { action: "fetch_canceled_cards_status" },
                        });
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        }); };
        fetchCanceledCardsShown();
        if (cards && grantCards) {
            combineCards();
        }
    }, [cards, grantCards, combineCards]);
    // Load and apply saved order when allCards changes
    (0, react_1.useEffect)(function () {
        var loadSavedOrder = function () { return __awaiter(_this, void 0, void 0, function () {
            var savedOrder, orderMap_1, sorted, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!allCards)
                            return [2 /*return*/];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, async_storage_1.default.getItem("cardOrder")];
                    case 2:
                        savedOrder = _a.sent();
                        if (savedOrder) {
                            orderMap_1 = JSON.parse(savedOrder);
                            sorted = __spreadArray([], allCards, true).sort(function (a, b) {
                                var _a, _b;
                                var orderA = (_a = orderMap_1[a.id]) !== null && _a !== void 0 ? _a : Number.MAX_SAFE_INTEGER;
                                var orderB = (_b = orderMap_1[b.id]) !== null && _b !== void 0 ? _b : Number.MAX_SAFE_INTEGER;
                                return orderA - orderB;
                            });
                            setSortedCards(sorted);
                        }
                        else {
                            setSortedCards(allCards);
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        error_3 = _a.sent();
                        (0, errorUtils_1.logError)("Error loading saved card order", error_3, {
                            context: { action: "load_card_order" },
                        });
                        setSortedCards(allCards);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        loadSavedOrder();
    }, [allCards]);
    var onRefresh = function () { return __awaiter(_this, void 0, void 0, function () {
        var error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, reloadCards()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, reloadGrantCards()];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    error_4 = _a.sent();
                    (0, errorUtils_1.logError)("Error refreshing cards", error_4, {
                        context: { action: "refresh_cards" },
                    });
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var saveCardOrder = function (newOrder) { return __awaiter(_this, void 0, void 0, function () {
        var orderMap, error_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    orderMap = newOrder.reduce(function (acc, card, index) {
                        acc[card.id] = index;
                        return acc;
                    }, {});
                    return [4 /*yield*/, async_storage_1.default.setItem("cardOrder", JSON.stringify(orderMap))];
                case 1:
                    _a.sent();
                    return [3 /*break*/, 3];
                case 2:
                    error_5 = _a.sent();
                    (0, errorUtils_1.logError)("Error saving card order", error_5, {
                        context: { action: "save_card_order" },
                    });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    if (sortedCards) {
        return ((0, jsx_runtime_1.jsx)(react_native_reorderable_list_1.default, { data: canceledCardsShown
                ? sortedCards
                : sortedCards.filter(function (c) { return c.status != "canceled" && c.status != "expired"; }), keyExtractor: function (item) { return item.id; }, onReorder: function (_a) {
                var from = _a.from, to = _a.to;
                Haptics.selectionAsync();
                var newCards = __spreadArray([], sortedCards, true);
                var removed = newCards.splice(from, 1)[0];
                newCards.splice(to, 0, removed);
                setSortedCards(newCards);
                saveCardOrder(newCards);
            }, contentContainerStyle: {
                paddingBottom: tabBarHeight + 20,
                paddingTop: 20,
                alignItems: "center",
            }, showsVerticalScrollIndicator: false, refreshControl: (0, jsx_runtime_1.jsx)(react_native_1.RefreshControl, { refreshing: refreshing, onRefresh: onRefresh }), panGesture: panGesture, renderItem: function (_a) {
                var _b, _c;
                var item = _a.item;
                return ((0, jsx_runtime_1.jsx)(CardItem, { item: item, isActive: false, onPress: function (card) { return navigation.navigate("Card", { card: card }); }, pattern: (_b = patternCache[item.id]) === null || _b === void 0 ? void 0 : _b.pattern, patternDimensions: (_c = patternCache[item.id]) === null || _c === void 0 ? void 0 : _c.dimensions }));
            }, ListFooterComponent: function () {
                return sortedCards.length > 2 && ((0, jsx_runtime_1.jsx)(react_native_1.Text, { style: {
                        color: theme_1.palette.muted,
                        textAlign: "center",
                        marginTop: 10,
                        marginBottom: 10,
                    }, children: "Drag to reorder cards" }));
            } }));
    }
    else {
        return ((0, jsx_runtime_1.jsx)(react_native_1.View, { style: { flex: 1, justifyContent: "center", alignItems: "center" }, children: (0, jsx_runtime_1.jsx)(CardListSkeleton_1.default, {}) }));
    }
}
