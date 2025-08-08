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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CardPage;
var jsx_runtime_1 = require("react/jsx-runtime");
var vector_icons_1 = require("@expo/vector-icons");
var bottom_tabs_1 = require("@react-navigation/bottom-tabs");
var native_1 = require("@react-navigation/native");
var Haptics = __importStar(require("expo-haptics"));
var hcb_geo_pattern_1 = require("hcb-geo-pattern");
var react_1 = require("react");
var react_native_1 = require("react-native");
var swr_1 = __importStar(require("swr"));
var Button_1 = __importDefault(require("../../components/Button"));
var CardSkeleton_1 = __importDefault(require("../../components/cards/CardSkeleton"));
var Divider_1 = __importDefault(require("../../components/Divider"));
var PaymentCard_1 = __importDefault(require("../../components/PaymentCard"));
var Transaction_1 = __importDefault(require("../../components/Transaction"));
var UserAvatar_1 = __importDefault(require("../../components/UserAvatar"));
var alertUtils_1 = require("../../lib/alertUtils");
var client_1 = __importDefault(require("../../lib/client"));
var errorUtils_1 = require("../../lib/errorUtils");
var useStripeCardDetails_1 = __importDefault(require("../../lib/useStripeCardDetails"));
var theme_1 = require("../../utils/theme");
var util_1 = require("../../utils/util");
function CardPage(props) {
    var _this = this;
    var _a, _b, _c, _d, _e, _f;
    var cardId = "route" in props ? props.route.params.cardId : props.cardId;
    var _card = "route" in props ? props.route.params.card : props.card;
    var navigation = "route" in props ? props.navigation : props.navigation;
    var themeColors = (0, native_1.useTheme)().colors;
    var hcb = (0, client_1.default)();
    var grantId = props === null || props === void 0 ? void 0 : props.grantId;
    var _g = (0, swr_1.default)(grantId ? "card_grants/".concat(grantId) : null).data, grantCard = _g === void 0 ? _card : _g;
    var id = (_b = (_a = _card === null || _card === void 0 ? void 0 : _card.id) !== null && _a !== void 0 ? _a : grantCard === null || grantCard === void 0 ? void 0 : grantCard.card_id) !== null && _b !== void 0 ? _b : "crd_".concat(cardId);
    var _h = (0, swr_1.default)("cards/".concat(id), {
        onError: function (err) {
            (0, errorUtils_1.logError)("Error fetching card", err, { context: { cardId: id } });
            setCardError("Unable to load card details. Please try again later.");
        },
    }), card = _h.data, cardFetchError = _h.error;
    var user = (0, swr_1.default)("user").data;
    var organization = (0, swr_1.default)("organizations/".concat(card === null || card === void 0 ? void 0 : card.organization.id)).data;
    var _j = (0, useStripeCardDetails_1.default)(id), details = _j.details, toggleDetailsRevealed = _j.toggle, detailsRevealed = _j.revealed, detailsLoading = _j.loading;
    var isGrantCard = (grantCard === null || grantCard === void 0 ? void 0 : grantCard.amount_cents) != null ||
        (props === null || props === void 0 ? void 0 : props.grantId) != null;
    var isCardholder = (user === null || user === void 0 ? void 0 : user.id) == ((_c = card === null || card === void 0 ? void 0 : card.user) === null || _c === void 0 ? void 0 : _c.id);
    var isManagerOrAdmin = (organization === null || organization === void 0 ? void 0 : organization.users.some(function (orgUser) { return orgUser.id === (user === null || user === void 0 ? void 0 : user.id) && orgUser.role === "manager"; })) || (user === null || user === void 0 ? void 0 : user.admin);
    var _k = (0, react_1.useState)(false), refreshing = _k[0], setRefreshing = _k[1];
    var _l = (0, react_1.useState)(null), cardError = _l[0], setCardError = _l[1];
    var _m = (0, react_1.useState)(null), transactionError = _m[0], setTransactionError = _m[1];
    var _o = (0, react_1.useState)(false), cardExpanded = _o[0], setCardExpanded = _o[1];
    var fadeAnim = (0, react_1.useState)(new react_native_1.Animated.Value(0))[0];
    var _p = (0, react_1.useState)(false), isUpdatingStatus = _p[0], setIsUpdatingStatus = _p[1];
    var skeletonAnim = (0, react_1.useRef)(new react_native_1.Animated.Value(0)).current;
    var _q = (0, react_1.useState)(false), errorDisplayReady = _q[0], setErrorDisplayReady = _q[1];
    var _r = (0, react_1.useState)(false), showActivateModal = _r[0], setShowActivateModal = _r[1];
    var _s = (0, react_1.useState)(false), showTopupModal = _s[0], setShowTopupModal = _s[1];
    var _t = (0, react_1.useState)(""), topupAmount = _t[0], setTopupAmount = _t[1];
    var _u = (0, react_1.useState)(false), isToppingUp = _u[0], setIsToppingUp = _u[1];
    var _v = (0, react_1.useState)(""), last4 = _v[0], setLast4 = _v[1];
    var _w = (0, react_1.useState)(false), activating = _w[0], setActivating = _w[1];
    var _x = (0, react_1.useState)(), pattern = _x[0], setPattern = _x[1];
    var _y = (0, react_1.useState)(), patternDimensions = _y[0], setPatternDimensions = _y[1];
    var _z = (0, react_1.useState)(""), cardName = _z[0], setCardName = _z[1];
    (0, react_1.useEffect)(function () {
        var timer = setTimeout(function () {
            setErrorDisplayReady(true);
        }, 2000);
        return function () { return clearTimeout(timer); };
    }, []);
    (0, react_1.useEffect)(function () {
        if ((cardFetchError || !card) && errorDisplayReady) {
            setCardError("Unable to load card details. Please try again later.");
        }
        else if (!cardFetchError) {
            setCardError(null);
        }
    }, [card, cardFetchError, errorDisplayReady]);
    (0, react_1.useEffect)(function () {
        react_native_1.Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 600,
            useNativeDriver: true,
        }).start();
    }, [fadeAnim]);
    (0, react_1.useEffect)(function () {
        var _a, _b, _c;
        if (card === null || card === void 0 ? void 0 : card.name) {
            setCardName(card.name);
        }
        else if ((_a = card === null || card === void 0 ? void 0 : card.user) === null || _a === void 0 ? void 0 : _a.name) {
            var nameParts = (_b = card === null || card === void 0 ? void 0 : card.user) === null || _b === void 0 ? void 0 : _b.name.split(" ");
            var firstName = nameParts[0] || "";
            var lastInitial = nameParts.length > 1 ? "".concat(((_c = nameParts[1]) === null || _c === void 0 ? void 0 : _c.charAt(0)) || "") : "";
            setCardName(lastInitial
                ? "".concat(firstName, " ").concat(lastInitial, "'s Card")
                : "".concat(firstName, "'s Card"));
        }
    }, [card]);
    (0, react_1.useEffect)(function () {
        navigation.setOptions({ title: cardName });
    }, [cardName, navigation, themeColors.text]);
    var _0 = (0, swr_1.default)("cards/".concat(id, "/transactions")), transactionsData = _0.data, transactionsLoading = _0.isLoading, transactionsError = _0.error;
    var transactions = (transactionsData === null || transactionsData === void 0 ? void 0 : transactionsData.data) || [];
    (0, react_1.useEffect)(function () {
        if (transactionsError && errorDisplayReady) {
            setTransactionError("Unable to load transaction history. Pull down to retry.");
        }
        else if (!transactionsError) {
            setTransactionError(null);
        }
    }, [transactionsError, errorDisplayReady]);
    var mutate = (0, swr_1.useSWRConfig)().mutate;
    var _1 = (0, react_1.useState)(false), cardLoaded = _1[0], setCardLoaded = _1[1];
    var onSuccessfulStatusChange = function (updatedStatus) {
        setIsUpdatingStatus(false);
        var updatedCard = __assign(__assign({}, card), { status: updatedStatus });
        console.log("Updating card ".concat(card === null || card === void 0 ? void 0 : card.id, " status to: ").concat(updatedStatus));
        // Update the specific card cache
        mutate("cards/".concat(card === null || card === void 0 ? void 0 : card.id), updatedCard, false);
        // Update the user/cards list cache
        mutate("user/cards", function (list) {
            return list === null || list === void 0 ? void 0 : list.map(function (c) { return (c.id === updatedCard.id ? updatedCard : c); });
        }, false);
        // Also update grant cards if this is a grant card
        if (grantId) {
            mutate("user/card_grants", function (list) {
                return list === null || list === void 0 ? void 0 : list.map(function (c) {
                    return c.card_id === updatedCard.id ? __assign(__assign({}, c), { status: updatedStatus }) : c;
                });
            }, false);
        }
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
        // Force revalidation
        mutate("cards/".concat(card === null || card === void 0 ? void 0 : card.id));
        mutate("user/cards");
        if (grantId) {
            mutate("user/card_grants");
        }
    };
    var toggleCardFrozen = function () {
        if (!card || !card.id) {
            (0, alertUtils_1.showAlert)("Error", "Cannot update card status. Please try again.");
            return;
        }
        setIsUpdatingStatus(true);
        var newStatus = card.status === "active" ? "frozen" : "active";
        hcb
            .patch("cards/".concat(card.id), {
            json: { status: newStatus },
        })
            .then(function () {
            onSuccessfulStatusChange(newStatus);
        })
            .catch(function (err) {
            (0, errorUtils_1.logCriticalError)("Error updating card status", err, {
                cardId: card.id,
                newStatus: newStatus,
            });
            setIsUpdatingStatus(false);
            Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
            (0, alertUtils_1.showAlert)("Error", "Failed to update card status. Please try again later.", [{ text: "OK" }]);
        });
    };
    var onRefresh = (0, react_1.useCallback)(function () { return __awaiter(_this, void 0, void 0, function () {
        var err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setRefreshing(true);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, 5, 6]);
                    return [4 /*yield*/, mutate("cards/".concat(card === null || card === void 0 ? void 0 : card.id))];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, mutate("cards/".concat(id, "/transactions"))];
                case 3:
                    _a.sent();
                    setCardError(null);
                    setTransactionError(null);
                    return [3 /*break*/, 6];
                case 4:
                    err_1 = _a.sent();
                    (0, errorUtils_1.logError)("Refresh error", err_1, { context: { cardId: card === null || card === void 0 ? void 0 : card.id } });
                    return [3 /*break*/, 6];
                case 5:
                    setRefreshing(false);
                    return [7 /*endfinally*/];
                case 6: return [2 /*return*/];
            }
        });
    }); }, [mutate, card === null || card === void 0 ? void 0 : card.id, id]);
    var tabBarHeight = (0, bottom_tabs_1.useBottomTabBarHeight)();
    (0, react_1.useEffect)(function () {
        // Create skeleton loading animation
        react_native_1.Animated.loop(react_native_1.Animated.sequence([
            react_native_1.Animated.timing(skeletonAnim, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: false,
            }),
            react_native_1.Animated.timing(skeletonAnim, {
                toValue: 0,
                duration: 1000,
                useNativeDriver: false,
            }),
        ])).start();
    }, [skeletonAnim]);
    // Create the interpolated background color for skeleton animation
    var skeletonBackground = skeletonAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ["rgba(0, 0, 0, 0.03)", "rgba(0, 0, 0, 0.12)"],
    });
    // Create a shared skeleton style for reuse
    var createSkeletonStyle = function (width, height, extraStyles) {
        if (extraStyles === void 0) { extraStyles = {}; }
        return (__assign({ width: width, height: height, backgroundColor: skeletonBackground, borderRadius: 8, overflow: "hidden" }, extraStyles));
    };
    var toggleCardDetails = function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!detailsRevealed) {
                        setCardDetailsLoading(true);
                    }
                    return [4 /*yield*/, toggleDetailsRevealed()];
                case 1:
                    _a.sent();
                    if (!detailsRevealed) {
                        setTimeout(function () { return setCardDetailsLoading(false); }, 800);
                    }
                    else {
                        setCardDetailsLoading(false);
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    var _2 = (0, react_1.useState)(false), cardDetailsLoading = _2[0], setCardDetailsLoading = _2[1];
    var _3 = (0, react_1.useState)(false), isReturningGrant = _3[0], setisReturningGrant = _3[1];
    var returnGrant = function () { return __awaiter(_this, void 0, void 0, function () {
        var _this = this;
        var _a;
        return __generator(this, function (_b) {
            if (!card || !card.id) {
                (0, alertUtils_1.showAlert)("Error", "Cannot update card status. Please try again.");
                return [2 /*return*/];
            }
            (0, alertUtils_1.showAlert)("".concat(!isCardholder ? "Cancel and return" : "Return", " ").concat((0, util_1.renderMoney)(grantCard.amount_cents - ((_a = card === null || card === void 0 ? void 0 : card.total_spent_cents) !== null && _a !== void 0 ? _a : 0)), " to ").concat(card.organization.name, "?"), "Caution, returning this grant will render it unusable.", [
                {
                    text: "Cancel",
                    style: "cancel",
                },
                {
                    text: "I understand",
                    style: "destructive",
                    onPress: function () { return __awaiter(_this, void 0, void 0, function () {
                        var err_2;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    _a.trys.push([0, 3, 4, 5]);
                                    setisReturningGrant(true);
                                    return [4 /*yield*/, hcb.post("card_grants/".concat(grantCard.grant_id, "/cancel"))];
                                case 1:
                                    _a.sent();
                                    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
                                    return [4 /*yield*/, mutate("user/cards")];
                                case 2:
                                    _a.sent();
                                    navigation.goBack();
                                    return [3 /*break*/, 5];
                                case 3:
                                    err_2 = _a.sent();
                                    (0, errorUtils_1.logCriticalError)("Error returning grant", err_2, {
                                        cardId: card.id,
                                    });
                                    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
                                    (0, alertUtils_1.showAlert)("Error", "Failed to return grant. Please try again later.", [{ text: "OK" }]);
                                    return [3 /*break*/, 5];
                                case 4:
                                    setisReturningGrant(false);
                                    return [7 /*endfinally*/];
                                case 5: return [2 /*return*/];
                            }
                        });
                    }); },
                },
            ]);
            return [2 /*return*/];
        });
    }); };
    var handleActivate = function () { return __awaiter(_this, void 0, void 0, function () {
        var response, data, err_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!last4 || last4.length !== 4) {
                        (0, alertUtils_1.showAlert)("Error", "Please enter the last 4 digits of your card");
                        return [2 /*return*/];
                    }
                    setActivating(true);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 6, 7, 8]);
                    return [4 /*yield*/, hcb.patch("cards/".concat(card === null || card === void 0 ? void 0 : card.id), {
                            json: { status: "active", last4: last4 },
                        })];
                case 2:
                    response = _a.sent();
                    if (!response.ok) return [3 /*break*/, 3];
                    onSuccessfulStatusChange("active");
                    setShowActivateModal(false);
                    setLast4("");
                    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
                    return [3 /*break*/, 5];
                case 3: return [4 /*yield*/, response.json()];
                case 4:
                    data = (_a.sent());
                    (0, alertUtils_1.showAlert)("Error", data.error || "Failed to activate card");
                    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
                    _a.label = 5;
                case 5: return [3 /*break*/, 8];
                case 6:
                    err_3 = _a.sent();
                    (0, errorUtils_1.logCriticalError)("Error activating card", err_3, { cardId: card === null || card === void 0 ? void 0 : card.id });
                    (0, alertUtils_1.showAlert)("Error", "Failed to activate card. Please try again later.");
                    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
                    return [3 /*break*/, 8];
                case 7:
                    setActivating(false);
                    return [7 /*endfinally*/];
                case 8: return [2 /*return*/];
            }
        });
    }); };
    (0, react_1.useEffect)(function () {
        var generateCardPattern = function () { return __awaiter(_this, void 0, void 0, function () {
            var patternData, normalizedPattern, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!card || card.type !== "virtual")
                            return [2 /*return*/];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, (0, hcb_geo_pattern_1.generate)({
                                input: card.id,
                                grayScale: card.status !== "active"
                                    ? card.status === "frozen"
                                        ? 0.23
                                        : 1
                                    : 0,
                            })];
                    case 2:
                        patternData = _a.sent();
                        normalizedPattern = (0, util_1.normalizeSvg)(patternData.toSVG(), patternData.width, patternData.height);
                        setPattern(normalizedPattern);
                        setPatternDimensions({
                            width: patternData.width,
                            height: patternData.height,
                        });
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        (0, errorUtils_1.logError)("Error generating pattern for card", error_1, {
                            context: { cardId: card.id },
                        });
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        generateCardPattern();
    }, [card]);
    var handleTopup = function () { return __awaiter(_this, void 0, void 0, function () {
        var amountCents, err_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!grantCard || !grantCard.grant_id) {
                        (0, alertUtils_1.showAlert)("Error", "Cannot top up card. Please try again.");
                        return [2 /*return*/];
                    }
                    amountCents = Math.round(parseFloat(topupAmount) * 100);
                    if (isNaN(amountCents) || amountCents <= 0) {
                        (0, alertUtils_1.showAlert)("Error", "Please enter a valid amount.");
                        return [2 /*return*/];
                    }
                    setIsToppingUp(true);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, 5, 6]);
                    return [4 /*yield*/, hcb.post("card_grants/".concat(grantCard.grant_id, "/topup"), {
                            json: { amount_cents: amountCents },
                        })];
                case 2:
                    _a.sent();
                    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
                    return [4 /*yield*/, mutate("card_grants/".concat(grantCard.grant_id))];
                case 3:
                    _a.sent();
                    setShowTopupModal(false);
                    setTopupAmount("");
                    return [3 /*break*/, 6];
                case 4:
                    err_4 = _a.sent();
                    (0, errorUtils_1.logCriticalError)("Error topping up card", err_4, { cardId: card === null || card === void 0 ? void 0 : card.id });
                    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
                    (0, alertUtils_1.showAlert)("Error", "Failed to top up card. Please try again later.", [
                        { text: "OK" },
                    ]);
                    return [3 /*break*/, 6];
                case 5:
                    setIsToppingUp(false);
                    return [7 /*endfinally*/];
                case 6: return [2 /*return*/];
            }
        });
    }); };
    var isValidCardStatus = function (status) {
        return (status === "inactive" ||
            status === "frozen" ||
            status === "active" ||
            status === "canceled" ||
            status === "expired");
    };
    var canTopupCard = function (card) {
        if (!card || !card.status)
            return false;
        return (isValidCardStatus(card.status) &&
            card.status !== "canceled" &&
            card.status !== "expired");
    };
    function getCardActionButtons() {
        var buttons = [];
        // Add activate/freeze button
        if (!isGrantCard || isManagerOrAdmin) {
            if ((card === null || card === void 0 ? void 0 : card.type) === "physical" && (card === null || card === void 0 ? void 0 : card.status) === "inactive") {
                buttons.push((0, jsx_runtime_1.jsx)(Button_1.default, { style: {
                        backgroundColor: theme_1.palette.primary,
                        borderTopWidth: 0,
                        borderRadius: 12,
                    }, color: "white", iconColor: "white", iconSize: 32, icon: "rep", onPress: function () { return setShowActivateModal(true); }, children: "Activate card" }, "activate"));
            }
            else if (isCardholder || isManagerOrAdmin) {
                buttons.push((0, jsx_runtime_1.jsx)(Button_1.default, { style: {
                        backgroundColor: "#71C5E7",
                        borderTopWidth: 0,
                        borderRadius: 12,
                    }, color: "#186177", iconColor: "#186177", icon: "freeze", onPress: function () { return toggleCardFrozen(); }, loading: !!isUpdatingStatus, children: (card === null || card === void 0 ? void 0 : card.status) == "active" ? "Freeze card" : "Defrost card" }, "freeze"));
            }
        }
        // Add top up button
        if (isGrantCard && isManagerOrAdmin && canTopupCard(card)) {
            buttons.push((0, jsx_runtime_1.jsx)(Button_1.default, { style: {
                    backgroundColor: "#3499EE",
                    borderTopWidth: 0,
                    borderRadius: 12,
                }, color: "white", iconColor: "white", icon: "plus", onPress: function () { return setShowTopupModal(true); }, children: "Top up" }, "topup"));
        }
        // Add reveal details button
        if ((card === null || card === void 0 ? void 0 : card.type) == "virtual" &&
            (card === null || card === void 0 ? void 0 : card.status) !== "canceled" &&
            isCardholder) {
            buttons.push((0, jsx_runtime_1.jsx)(Button_1.default, { style: {
                    borderRadius: 12,
                    backgroundColor: theme_1.palette.primary,
                }, color: "white", iconColor: "white", icon: detailsRevealed ? "private-fill" : "view", onPress: toggleCardDetails, loading: !!detailsLoading, children: detailsRevealed ? "Hide details" : "Reveal details" }, "details"));
        }
        // Add grant button
        if (isGrantCard && (_card === null || _card === void 0 ? void 0 : _card.status) != "canceled") {
            buttons.push((0, jsx_runtime_1.jsx)(Button_1.default, { style: {
                    backgroundColor: !isCardholder ? "#db1530" : "#3097ed",
                    borderTopWidth: 0,
                    borderRadius: 12,
                }, color: "white", iconColor: "white", icon: !isCardholder ? "reply" : "support", onPress: returnGrant, loading: !!isReturningGrant, children: !isCardholder ? "Cancel grant" : "Return grant" }, "grant"));
        }
        if (buttons.length === 0)
            return null;
        var rows = [];
        for (var i = 0; i < buttons.length; i += 2) {
            var rowButtons = buttons.slice(i, i + 2);
            rows.push(rowButtons);
        }
        return ((0, jsx_runtime_1.jsx)(react_native_1.View, { style: { marginBottom: 20, gap: 15 }, children: rows.map(function (row, rowIndex) { return ((0, jsx_runtime_1.jsx)(react_native_1.View, { style: { flexDirection: "row", gap: 15 }, children: row.map(function (button) {
                    return (0, react_1.cloneElement)(button, {
                        style: __assign(__assign({}, button.props.style), { flex: 1 }),
                    });
                }) }, rowIndex)); }) }));
    }
    if (!card && !cardLoaded && !cardError) {
        return (0, jsx_runtime_1.jsx)(CardSkeleton_1.default, {});
    }
    var renderCardStatus = function () {
        if ((card === null || card === void 0 ? void 0 : card.status) === "active") {
            return ((0, jsx_runtime_1.jsxs)(react_native_1.View, { style: {
                    position: "absolute",
                    top: 15,
                    right: 15,
                    flexDirection: "row",
                    alignItems: "center",
                    backgroundColor: "rgba(0, 0, 0, 0.05)",
                    borderRadius: 20,
                    paddingHorizontal: 10,
                    paddingVertical: 5,
                }, children: [(0, jsx_runtime_1.jsx)(vector_icons_1.Ionicons, { name: "checkmark-circle", size: 14, color: "#34D399" }), (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: {
                            marginLeft: 5,
                            fontSize: 14,
                            fontWeight: "500",
                            color: "#34D399",
                        }, children: "Active" })] }));
        }
        else if ((card === null || card === void 0 ? void 0 : card.status) === "frozen") {
            return ((0, jsx_runtime_1.jsxs)(react_native_1.View, { style: {
                    position: "absolute",
                    top: 15,
                    right: 15,
                    flexDirection: "row",
                    alignItems: "center",
                    backgroundColor: "rgba(0, 0, 0, 0.05)",
                    borderRadius: 20,
                    paddingHorizontal: 10,
                    paddingVertical: 5,
                }, children: [(0, jsx_runtime_1.jsx)(vector_icons_1.Ionicons, { name: "snow", size: 14, color: "#3B82F6" }), (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: {
                            marginLeft: 5,
                            fontSize: 14,
                            fontWeight: "500",
                            color: "#3B82F6",
                        }, children: "Frozen" })] }));
        }
        else if ((card === null || card === void 0 ? void 0 : card.status) === "canceled") {
            return ((0, jsx_runtime_1.jsxs)(react_native_1.View, { style: {
                    position: "absolute",
                    top: 15,
                    right: 15,
                    flexDirection: "row",
                    alignItems: "center",
                    backgroundColor: "rgba(0, 0, 0, 0.05)",
                    borderRadius: 20,
                    paddingHorizontal: 10,
                    paddingVertical: 5,
                }, children: [(0, jsx_runtime_1.jsx)(vector_icons_1.Ionicons, { name: "close-circle", size: 14, color: "#EF4444" }), (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: {
                            marginLeft: 5,
                            fontSize: 14,
                            fontWeight: "500",
                            color: "#EF4444",
                        }, children: "Canceled" })] }));
        }
        else if ((card === null || card === void 0 ? void 0 : card.status) === "expired") {
            return ((0, jsx_runtime_1.jsxs)(react_native_1.View, { style: {
                    position: "absolute",
                    top: 15,
                    right: 15,
                    flexDirection: "row",
                    alignItems: "center",
                    backgroundColor: "rgba(0, 0, 0, 0.05)",
                    borderRadius: 20,
                    paddingHorizontal: 10,
                    paddingVertical: 5,
                }, children: [(0, jsx_runtime_1.jsx)(vector_icons_1.Ionicons, { name: "time", size: 14, color: "#F59E0B" }), (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: {
                            marginLeft: 5,
                            fontSize: 14,
                            fontWeight: "500",
                            color: "#F59E0B",
                        }, children: "Expired" })] }));
        }
        return null;
    };
    return ((0, jsx_runtime_1.jsxs)(react_native_1.Animated.View, { style: { flex: 1, opacity: fadeAnim }, children: [(0, jsx_runtime_1.jsx)(react_native_1.ScrollView, { contentContainerStyle: {
                    padding: 20,
                    paddingBottom: tabBarHeight + 20,
                }, scrollIndicatorInsets: { bottom: tabBarHeight }, refreshControl: (0, jsx_runtime_1.jsx)(react_native_1.RefreshControl, { refreshing: refreshing, onRefresh: onRefresh, colors: [theme_1.palette.primary], tintColor: theme_1.palette.primary }), children: cardError ? ((0, jsx_runtime_1.jsxs)(react_native_1.View, { style: {
                        padding: 20,
                        backgroundColor: "rgba(239, 68, 68, 0.1)",
                        borderRadius: 10,
                        alignItems: "center",
                        marginBottom: 20,
                    }, children: [(0, jsx_runtime_1.jsx)(vector_icons_1.Ionicons, { name: "alert-circle", size: 24, color: "#EF4444" }), (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: {
                                color: "#EF4444",
                                marginVertical: 10,
                                textAlign: "center",
                            }, children: cardError }), (0, jsx_runtime_1.jsx)(Button_1.default, { onPress: onRefresh, children: "Retry" })] })) : ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)(react_native_1.TouchableOpacity, { style: { alignItems: "center", marginBottom: 20 }, activeOpacity: 0.9, onPress: function () { return setCardExpanded(!cardExpanded); }, children: [(0, jsx_runtime_1.jsx)(PaymentCard_1.default, { details: details, card: card, onCardLoad: function () { return setCardLoaded(true); }, style: { marginBottom: 10 }, pattern: pattern, patternDimensions: patternDimensions }), isGrantCard && ((0, jsx_runtime_1.jsxs)(react_native_1.View, { style: { alignItems: "center", marginTop: 10 }, children: [(0, jsx_runtime_1.jsx)(react_native_1.Text, { style: {
                                                fontSize: 14,
                                                opacity: 0.7,
                                                color: themeColors.text,
                                            }, children: "Available Balance" }), (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: {
                                                fontSize: 24,
                                                fontWeight: "bold",
                                                marginTop: 5,
                                                color: themeColors.text,
                                            }, children: (card === null || card === void 0 ? void 0 : card.status) == "expired" || (card === null || card === void 0 ? void 0 : card.status) == "canceled"
                                                ? "$0"
                                                : (0, util_1.renderMoney)((grantCard === null || grantCard === void 0 ? void 0 : grantCard.amount_cents) -
                                                    ((_d = card === null || card === void 0 ? void 0 : card.total_spent_cents) !== null && _d !== void 0 ? _d : 0)) })] }))] }), (card === null || card === void 0 ? void 0 : card.status) != "canceled" && getCardActionButtons(), (0, jsx_runtime_1.jsxs)(react_native_1.View, { style: {
                                marginBottom: 24,
                                padding: 20,
                                borderRadius: 15,
                                shadowColor: "#000",
                                shadowOffset: { width: 0, height: 1 },
                                shadowOpacity: 0.05,
                                shadowRadius: 3,
                                elevation: 2,
                                backgroundColor: themeColors.card,
                            }, children: [renderCardStatus(), ((_e = card === null || card === void 0 ? void 0 : card.user) === null || _e === void 0 ? void 0 : _e.id) ? ((0, jsx_runtime_1.jsxs)(react_native_1.View, { style: {
                                        flexDirection: "row",
                                        alignItems: "center",
                                        marginBottom: 15,
                                        paddingRight: 90,
                                    }, children: [(0, jsx_runtime_1.jsx)(UserAvatar_1.default, { user: card.user, size: 40, style: { marginRight: 10 } }), (0, jsx_runtime_1.jsxs)(react_native_1.View, { style: { flex: 1, flexShrink: 1 }, children: [(0, jsx_runtime_1.jsx)(react_native_1.Text, { style: {
                                                        fontSize: 18,
                                                        fontWeight: "600",
                                                        color: themeColors.text,
                                                    }, numberOfLines: 2, ellipsizeMode: "tail", children: cardName }), (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: {
                                                        fontSize: 14,
                                                        color: theme_1.palette.muted,
                                                        marginTop: 2,
                                                    }, children: (card === null || card === void 0 ? void 0 : card.type) === "virtual"
                                                        ? "Virtual Card"
                                                        : "Physical Card" })] })] })) : ((0, jsx_runtime_1.jsxs)(react_native_1.View, { style: {
                                        flexDirection: "row",
                                        alignItems: "center",
                                        marginBottom: 15,
                                        paddingRight: 90,
                                    }, children: [(0, jsx_runtime_1.jsx)(react_native_1.View, { style: {
                                                width: 40,
                                                height: 40,
                                                borderRadius: 20,
                                                backgroundColor: theme_1.palette.muted,
                                                marginRight: 10,
                                            } }), (0, jsx_runtime_1.jsxs)(react_native_1.View, { children: [(0, jsx_runtime_1.jsx)(react_native_1.Text, { style: {
                                                        fontSize: 18,
                                                        fontWeight: "600",
                                                        color: themeColors.text,
                                                    }, children: cardName }), (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: {
                                                        fontSize: 14,
                                                        color: theme_1.palette.muted,
                                                        marginTop: 2,
                                                    }, children: (card === null || card === void 0 ? void 0 : card.type) === "virtual"
                                                        ? "Virtual Card"
                                                        : "Physical Card" })] })] })), (0, jsx_runtime_1.jsx)(Divider_1.default, {}), (0, jsx_runtime_1.jsxs)(react_native_1.View, { style: {
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        marginBottom: 12,
                                    }, children: [(0, jsx_runtime_1.jsx)(react_native_1.Text, { style: {
                                                fontSize: 16,
                                                color: themeColors.text,
                                                flexShrink: 1,
                                            }, children: "Card number" }), (0, jsx_runtime_1.jsx)(react_native_1.View, { style: { flex: 1, alignItems: "flex-end" }, children: detailsLoading ||
                                                cardDetailsLoading ||
                                                (detailsRevealed && !details) ? ((0, jsx_runtime_1.jsx)(react_native_1.Animated.View, { style: createSkeletonStyle(120, 22) })) : ((0, jsx_runtime_1.jsx)(react_native_1.Text, { style: {
                                                    color: theme_1.palette.muted,
                                                    fontSize: 16,
                                                    fontWeight: "500",
                                                    fontFamily: "JetBrains Mono",
                                                }, selectable: detailsRevealed && details ? true : false, children: detailsRevealed && details
                                                    ? (0, util_1.renderCardNumber)(details.number)
                                                    : (0, util_1.redactedCardNumber)((_f = card === null || card === void 0 ? void 0 : card.last4) !== null && _f !== void 0 ? _f : grantCard === null || grantCard === void 0 ? void 0 : grantCard.last4) })) })] }), (0, jsx_runtime_1.jsxs)(react_native_1.View, { style: {
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        marginBottom: 12,
                                    }, children: [(0, jsx_runtime_1.jsx)(react_native_1.Text, { style: {
                                                fontSize: 16,
                                                color: themeColors.text,
                                                flexShrink: 1,
                                            }, children: "Expires" }), (0, jsx_runtime_1.jsx)(react_native_1.View, { style: { flex: 1, alignItems: "flex-end" }, children: detailsLoading ||
                                                cardDetailsLoading ||
                                                (detailsRevealed && !details) ? ((0, jsx_runtime_1.jsx)(react_native_1.Animated.View, { style: createSkeletonStyle(70, 22) })) : ((0, jsx_runtime_1.jsx)(react_native_1.Text, { style: {
                                                    color: theme_1.palette.muted,
                                                    fontSize: 16,
                                                    fontWeight: "500",
                                                    fontFamily: "JetBrains Mono",
                                                }, selectable: detailsRevealed && details ? true : false, children: detailsRevealed && details
                                                    ? "".concat(String(details.exp_month).padStart(2, "0"), "/").concat(details.exp_year)
                                                    : "••/••" })) })] }), (0, jsx_runtime_1.jsxs)(react_native_1.View, { style: {
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        marginBottom: 12,
                                    }, children: [(0, jsx_runtime_1.jsx)(react_native_1.Text, { style: {
                                                fontSize: 16,
                                                color: themeColors.text,
                                                flexShrink: 1,
                                            }, children: "CVC" }), (0, jsx_runtime_1.jsx)(react_native_1.View, { style: { flex: 1, alignItems: "flex-end" }, children: detailsLoading ||
                                                cardDetailsLoading ||
                                                (detailsRevealed && !details) ? ((0, jsx_runtime_1.jsx)(react_native_1.Animated.View, { style: createSkeletonStyle(50, 22) })) : ((0, jsx_runtime_1.jsx)(react_native_1.Text, { style: {
                                                    color: theme_1.palette.muted,
                                                    fontSize: 16,
                                                    fontWeight: "500",
                                                    fontFamily: "JetBrains Mono",
                                                }, selectable: detailsRevealed && details ? true : false, children: detailsRevealed && details ? details.cvc : "•••" })) })] })] }), (0, jsx_runtime_1.jsxs)(react_native_1.View, { style: {
                                flexDirection: "row",
                                justifyContent: "space-between",
                                alignItems: "center",
                                marginBottom: 15,
                            }, children: [(0, jsx_runtime_1.jsx)(react_native_1.Text, { style: {
                                        fontSize: 18,
                                        fontWeight: "600",
                                        color: theme_1.palette.muted,
                                    }, children: "Transaction History" }), (card === null || card === void 0 ? void 0 : card.total_spent_cents) != null && ((0, jsx_runtime_1.jsxs)(react_native_1.View, { style: { alignItems: "flex-end" }, children: [(0, jsx_runtime_1.jsx)(react_native_1.Text, { style: {
                                                fontSize: 12,
                                                color: theme_1.palette.muted,
                                                textTransform: "uppercase",
                                            }, children: "Total Spent" }), (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: {
                                                fontSize: 16,
                                                fontWeight: "600",
                                                color: themeColors.text,
                                            }, children: (0, util_1.renderMoney)(card === null || card === void 0 ? void 0 : card.total_spent_cents) })] }))] }), transactionError ? ((0, jsx_runtime_1.jsxs)(react_native_1.View, { style: {
                                padding: 20,
                                backgroundColor: "rgba(239, 68, 68, 0.1)",
                                borderRadius: 10,
                                alignItems: "center",
                                marginBottom: 20,
                            }, children: [(0, jsx_runtime_1.jsx)(vector_icons_1.Ionicons, { name: "alert-circle", size: 24, color: "#EF4444" }), (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: {
                                        color: "#EF4444",
                                        marginVertical: 10,
                                        textAlign: "center",
                                    }, children: transactionError })] })) : transactionsLoading ? ((0, jsx_runtime_1.jsxs)(react_native_1.View, { style: {
                                alignItems: "center",
                                justifyContent: "center",
                                height: 150,
                                backgroundColor: "rgba(0, 0, 0, 0.02)",
                                borderRadius: 15,
                            }, children: [(0, jsx_runtime_1.jsx)(react_native_1.ActivityIndicator, { color: theme_1.palette.primary }), (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: { color: themeColors.text, marginTop: 10 }, children: "Loading transactions..." })] })) : transactions.length === 0 ? ((0, jsx_runtime_1.jsxs)(react_native_1.View, { style: {
                                alignItems: "center",
                                justifyContent: "center",
                                paddingVertical: 60,
                                backgroundColor: "rgba(0, 0, 0, 0.02)",
                                borderRadius: 15,
                            }, children: [(0, jsx_runtime_1.jsx)(vector_icons_1.Ionicons, { name: "receipt-outline", size: 50, color: theme_1.palette.muted }), (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: {
                                        color: theme_1.palette.muted,
                                        fontSize: 18,
                                        fontWeight: "600",
                                        marginTop: 15,
                                    }, children: "No transactions yet" }), (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: {
                                        color: theme_1.palette.muted,
                                        marginTop: 5,
                                        textAlign: "center",
                                        paddingHorizontal: 20,
                                    }, children: "Transactions will appear here once this card is used" })] })) : ((0, jsx_runtime_1.jsx)(react_native_1.View, { style: { borderRadius: 15, overflow: "hidden" }, children: transactions.map(function (transaction, index) {
                                var _a, _b;
                                return ((0, jsx_runtime_1.jsx)(react_native_1.TouchableOpacity, { onPress: function () {
                                        var _a, _b;
                                        navigation.navigate("Transaction", {
                                            orgId: ((_a = card === null || card === void 0 ? void 0 : card.organization) === null || _a === void 0 ? void 0 : _a.id) || ((_b = _card === null || _card === void 0 ? void 0 : _card.organization) === null || _b === void 0 ? void 0 : _b.id),
                                            transaction: transaction,
                                            transactionId: transaction.id,
                                        });
                                    }, style: [
                                        { backgroundColor: "transparent" },
                                        index === 0 && {
                                            borderTopLeftRadius: 15,
                                            borderTopRightRadius: 15,
                                        },
                                        index === transactions.length - 1 && {
                                            borderBottomLeftRadius: 15,
                                            borderBottomRightRadius: 15,
                                        },
                                    ], children: (0, jsx_runtime_1.jsx)(Transaction_1.default, { transaction: transaction, top: index == 0, bottom: index == transactions.length - 1, hideAvatar: true, orgId: ((_a = card === null || card === void 0 ? void 0 : card.organization) === null || _a === void 0 ? void 0 : _a.id) || ((_b = _card === null || _card === void 0 ? void 0 : _card.organization) === null || _b === void 0 ? void 0 : _b.id) || "" }) }, transaction.id));
                            }) }))] })) }), (0, jsx_runtime_1.jsx)(react_native_1.Modal, { visible: showActivateModal, transparent: true, animationType: "fade", onRequestClose: function () { return setShowActivateModal(false); }, children: (0, jsx_runtime_1.jsx)(react_native_1.View, { style: {
                        flex: 1,
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: 20,
                    }, children: (0, jsx_runtime_1.jsxs)(react_native_1.View, { style: {
                            backgroundColor: themeColors.card,
                            borderRadius: 15,
                            padding: 20,
                            width: "100%",
                            maxWidth: 400,
                        }, children: [(0, jsx_runtime_1.jsx)(react_native_1.Text, { style: {
                                    fontSize: 20,
                                    fontWeight: "600",
                                    color: themeColors.text,
                                    marginBottom: 10,
                                }, children: "Activate Physical Card" }), (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: {
                                    fontSize: 16,
                                    color: themeColors.text,
                                    marginBottom: 20,
                                }, children: "Please enter the last 4 digits of your card to activate it." }), (0, jsx_runtime_1.jsx)(react_native_1.TextInput, { style: {
                                    backgroundColor: "rgba(0, 0, 0, 0.05)",
                                    borderRadius: 8,
                                    padding: 12,
                                    fontSize: 16,
                                    color: themeColors.text,
                                    marginBottom: 20,
                                    fontFamily: "JetBrains Mono",
                                }, placeholder: "Last 4 digits", placeholderTextColor: theme_1.palette.muted, keyboardType: "number-pad", maxLength: 4, value: last4, onChangeText: setLast4, autoFocus: true }), (0, jsx_runtime_1.jsxs)(react_native_1.View, { style: { flexDirection: "row", gap: 10 }, children: [(0, jsx_runtime_1.jsx)(Button_1.default, { style: {
                                            flex: 1,
                                            backgroundColor: "rgba(0, 0, 0, 0.05)",
                                        }, color: themeColors.text, onPress: function () {
                                            setShowActivateModal(false);
                                            setLast4("");
                                        }, children: "Cancel" }), (0, jsx_runtime_1.jsx)(Button_1.default, { style: { flex: 1 }, onPress: handleActivate, loading: activating, children: "Activate" })] })] }) }) }), (0, jsx_runtime_1.jsx)(react_native_1.Modal, { visible: showTopupModal, transparent: true, animationType: "fade", onRequestClose: function () { return setShowTopupModal(false); }, children: (0, jsx_runtime_1.jsx)(react_native_1.View, { style: {
                        flex: 1,
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: 20,
                    }, children: (0, jsx_runtime_1.jsxs)(react_native_1.View, { style: {
                            backgroundColor: themeColors.card,
                            borderRadius: 15,
                            padding: 20,
                            width: "100%",
                            maxWidth: 400,
                        }, children: [(0, jsx_runtime_1.jsx)(react_native_1.Text, { style: {
                                    fontSize: 20,
                                    fontWeight: "600",
                                    color: themeColors.text,
                                    marginBottom: 10,
                                }, children: "Topup Grant" }), (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: {
                                    fontSize: 16,
                                    color: themeColors.text,
                                    marginBottom: 8,
                                    fontWeight: "500",
                                }, children: "Amount" }), (0, jsx_runtime_1.jsx)(react_native_1.TextInput, { style: {
                                    backgroundColor: "rgba(0, 0, 0, 0.05)",
                                    borderRadius: 8,
                                    padding: 12,
                                    fontSize: 16,
                                    color: themeColors.text,
                                    marginBottom: 20,
                                    fontFamily: "JetBrains Mono",
                                }, placeholder: "500.00", placeholderTextColor: themeColors.text + "80", keyboardType: "decimal-pad", value: topupAmount, onChangeText: setTopupAmount, autoFocus: true }), (0, jsx_runtime_1.jsxs)(react_native_1.View, { style: { flexDirection: "row", gap: 10 }, children: [(0, jsx_runtime_1.jsx)(Button_1.default, { style: {
                                            flex: 1,
                                            borderRadius: 15,
                                            backgroundColor: "rgba(0, 0, 0, 0.05)",
                                        }, color: themeColors.text, onPress: function () {
                                            setShowTopupModal(false);
                                            setTopupAmount("");
                                        }, children: "Cancel" }), (0, jsx_runtime_1.jsx)(Button_1.default, { style: {
                                            flex: 1,
                                            backgroundColor: "#3499EE",
                                            borderRadius: 15,
                                            paddingVertical: 14,
                                        }, color: "white", onPress: handleTopup, loading: isToppingUp, disabled: !topupAmount || parseFloat(topupAmount) <= 0, children: "Topup" })] })] }) }) })] }));
}
