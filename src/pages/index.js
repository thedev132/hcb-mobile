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
exports.default = App;
var jsx_runtime_1 = require("react/jsx-runtime");
var vector_icons_1 = require("@expo/vector-icons");
var netinfo_1 = __importDefault(require("@react-native-community/netinfo"));
var bottom_tabs_1 = require("@react-navigation/bottom-tabs");
var native_1 = require("@react-navigation/native");
var stripe_terminal_react_native_1 = require("@stripe/stripe-terminal-react-native");
var Haptics = __importStar(require("expo-haptics"));
var expo_image_1 = require("expo-image");
var expo_share_intent_1 = require("expo-share-intent");
var react_1 = require("react");
var react_native_1 = require("react-native");
var react_native_gesture_handler_1 = require("react-native-gesture-handler");
var react_native_reanimated_1 = require("react-native-reanimated");
var react_native_reorderable_list_1 = __importStar(require("react-native-reorderable-list"));
var swr_1 = __importStar(require("swr"));
var Transaction_1 = __importDefault(require("../components/Transaction"));
var errorUtils_1 = require("../lib/errorUtils");
var useReorderedOrgs_1 = __importDefault(require("../lib/organization/useReorderedOrgs"));
var useColorScheme_1 = require("../lib/useColorScheme");
var theme_1 = require("../theme");
var util_1 = require("../util");
function EventBalance(_a) {
    var balance_cents = _a.balance_cents;
    return balance_cents !== undefined ? ((0, jsx_runtime_1.jsx)(react_native_1.Text, { style: { color: theme_1.palette.muted, fontSize: 16, marginTop: 5 }, children: (0, util_1.renderMoney)(balance_cents) })) : ((0, jsx_runtime_1.jsxs)(react_native_1.View, { style: {
            flexDirection: "row",
            alignItems: "center",
            marginTop: 5,
            gap: 1,
        }, children: [(0, jsx_runtime_1.jsx)(react_native_1.Text, { style: { color: theme_1.palette.muted, fontSize: 16 }, children: "$" }), (0, jsx_runtime_1.jsx)(react_native_1.View, { style: {
                    backgroundColor: theme_1.palette.slate,
                    width: 100,
                    height: 12,
                    borderRadius: 4,
                } })] }));
}
var Event = (0, react_1.memo)(function Event(_a) {
    var event = _a.event, _b = _a.hideBalance, hideBalance = _b === void 0 ? false : _b, onPress = _a.onPress, drag = _a.drag, isActive = _a.isActive, style = _a.style, invitation = _a.invitation, _c = _a.showTransactions, showTransactions = _c === void 0 ? false : _c;
    var data = (0, swr_1.default)(hideBalance ? null : "organizations/".concat(event.id)).data;
    var _d = (0, swr_1.default)(showTransactions ? "organizations/".concat(event.id, "/transactions?limit=5") : null), transactions = _d.data, transactionsIsLoading = _d.isLoading;
    var themeColors = (0, native_1.useTheme)().colors;
    var initialize = (0, stripe_terminal_react_native_1.useStripeTerminal)({}).initialize;
    (0, react_1.useEffect)(function () {
        initialize();
    }, []);
    var color = (0, util_1.orgColor)(event.id);
    var isDark = (0, useColorScheme_1.useIsDark)();
    var contentView = ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)(react_native_1.View, { style: { flexDirection: "row", alignItems: "center", padding: 16 }, children: [event.icon ? ((0, jsx_runtime_1.jsx)(expo_image_1.Image, { source: { uri: event.icon }, cachePolicy: "memory-disk", style: {
                            width: 40,
                            height: 40,
                            borderRadius: 8,
                            marginRight: 16,
                        } })) : ((0, jsx_runtime_1.jsx)(react_native_1.View, { style: {
                            borderRadius: 8,
                            width: 40,
                            height: 40,
                            backgroundColor: color,
                            marginRight: 16,
                        } })), (0, jsx_runtime_1.jsxs)(react_native_1.View, { style: {
                            flexDirection: "column",
                            flex: 1,
                        }, children: [invitation && invitation.sender && ((0, jsx_runtime_1.jsxs)(react_native_1.Text, { style: { color: theme_1.palette.muted, marginBottom: 3 }, children: [(0, jsx_runtime_1.jsx)(react_native_1.Text, { style: { fontWeight: "600" }, children: invitation.sender.name }), " ", "invited you to"] })), (0, jsx_runtime_1.jsx)(react_native_1.Text, { numberOfLines: 2, style: {
                                    color: themeColors.text,
                                    fontSize: 20,
                                    fontWeight: "600",
                                }, children: event.name }), (data === null || data === void 0 ? void 0 : data.playground_mode) && ((0, jsx_runtime_1.jsx)(react_native_1.View, { style: {
                                    backgroundColor: isDark ? "#283140" : "#348EDA",
                                    paddingVertical: 4,
                                    paddingHorizontal: 12,
                                    borderRadius: 20,
                                    alignSelf: "flex-start",
                                    marginVertical: 4,
                                }, children: (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: {
                                        color: isDark ? "#248EDA" : "white",
                                        fontSize: 12,
                                        fontWeight: "bold",
                                    }, children: "Playground Mode" }) })), !hideBalance && (0, jsx_runtime_1.jsx)(EventBalance, { balance_cents: data === null || data === void 0 ? void 0 : data.balance_cents })] }), (0, jsx_runtime_1.jsx)(vector_icons_1.Ionicons, { name: "chevron-forward-outline", size: 24, color: theme_1.palette.muted })] }), (transactions === null || transactions === void 0 ? void 0 : transactions.data) && transactions.data.length >= 1 ? ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [transactions.data.map(function (tx, index) { return ((0, jsx_runtime_1.jsx)(Transaction_1.default, { transaction: tx, orgId: event.id, bottom: index == transactions.data.length - 1, hideMissingReceipt: true }, tx.id)); }), transactions.has_more && ((0, jsx_runtime_1.jsxs)(react_native_1.View, { style: {
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",
                            padding: 10,
                        }, children: [(0, jsx_runtime_1.jsx)(react_native_1.Text, { style: { color: theme_1.palette.info }, children: "See more activity" }), (0, jsx_runtime_1.jsx)(vector_icons_1.Ionicons, { name: "chevron-forward", color: theme_1.palette.info, size: 18 })] }))] })) : transactionsIsLoading ? ((0, jsx_runtime_1.jsx)(react_native_1.ActivityIndicator, { style: { marginVertical: 20 } })) : null] }));
    return ((0, jsx_runtime_1.jsx)(react_native_1.TouchableHighlight, { onPress: onPress, onLongPress: drag, disabled: isActive, underlayColor: isActive ? "transparent" : themeColors.background, activeOpacity: isActive ? 1 : 0.7, children: event.background_image ? ((0, jsx_runtime_1.jsx)(expo_image_1.Image, { source: { uri: event.background_image }, cachePolicy: "memory-disk", style: {
                backgroundColor: themeColors.card,
                borderRadius: 10,
                overflow: "hidden",
            }, contentFit: "cover", children: (0, jsx_runtime_1.jsx)(react_native_1.View, { style: {
                    backgroundColor: isDark
                        ? "rgba(37, 36, 41, 0.85)"
                        : "rgba(255, 255, 255, 0.7)",
                    borderRadius: 10,
                }, children: contentView }) })) : ((0, jsx_runtime_1.jsx)(react_native_1.View, { style: react_native_1.StyleSheet.compose({
                backgroundColor: themeColors.card,
                borderRadius: 10,
                overflow: "hidden",
            }, style), children: contentView })) }));
});
/* eslint-disable react/prop-types */
function App(_a) {
    var navigation = _a.navigation;
    var _b = (0, react_1.useState)(true), isOnline = _b[0], setIsOnline = _b[1];
    var lastFetchTime = (0, react_1.useRef)(0);
    var FETCH_COOLDOWN_MS = 10000;
    var _c = (0, expo_share_intent_1.useShareIntentContext)(), hasShareIntent = _c.hasShareIntent, shareIntent = _c.shareIntent, resetShareIntent = _c.resetShareIntent;
    var _d = (0, swr_1.default)(hasShareIntent ? "user/transactions/missing_receipt" : null), missingReceiptData = _d.data, missingReceiptError = _d.error, refetchMissingReceipts = _d.mutate;
    var _e = (0, react_1.useState)(true), refreshEnabled = _e[0], setRefreshEnabled = _e[1];
    var _f = (0, react_1.useState)(false), shareIntentProcessed = _f[0], setShareIntentProcessed = _f[1];
    var refreshing = (0, react_1.useState)(false)[0];
    var handleDragStart = (0, react_1.useCallback)(function () {
        "worklet";
        // NOTE: If it's refreshing we don't want the refresh control to disappear
        // and we can keep it enabled since it won't conflict with the drag.
        if (react_native_1.Platform.OS === "android" && !refreshing) {
            (0, react_native_reanimated_1.runOnJS)(setRefreshEnabled)(false);
        }
    }, [refreshing]);
    var handleDragEnd = (0, react_1.useCallback)(function () {
        "worklet";
        if (react_native_1.Platform.OS === "android") {
            (0, react_native_reanimated_1.runOnJS)(setRefreshEnabled)(true);
        }
    }, []);
    (0, react_1.useEffect)(function () {
        var _a;
        if (hasShareIntent && shareIntent && !shareIntentProcessed) {
            var imageUrls = ((_a = shareIntent.files) === null || _a === void 0 ? void 0 : _a.map(function (file) { return file.path; })) || [];
            if (imageUrls.length > 0) {
                // If we have missing receipt data, show the modal with transactions
                if ((missingReceiptData === null || missingReceiptData === void 0 ? void 0 : missingReceiptData.data) && missingReceiptData.data.length > 0) {
                    navigation.navigate("ShareIntentModal", {
                        images: imageUrls,
                        missingTransactions: missingReceiptData.data,
                    });
                    setShareIntentProcessed(true);
                    resetShareIntent();
                }
                // If we don't have missing receipt data yet, but also no error, wait a bit more
                else if (!missingReceiptError && !missingReceiptData) {
                    // Don't process yet, wait for data to load
                }
                // If we have an error or no missing receipts, still show the modal for receipt bin upload
                else {
                    if (missingReceiptError) {
                        (0, errorUtils_1.logError)("Error fetching missing receipts, retrying", missingReceiptError, { context: { action: "missing_receipts_fetch" } });
                        // Retry fetching missing receipts
                        refetchMissingReceipts();
                    }
                    else {
                        // No missing receipts, but still show modal for receipt bin upload
                        navigation.navigate("ShareIntentModal", {
                            images: imageUrls,
                            missingTransactions: [],
                        });
                        setShareIntentProcessed(true);
                        resetShareIntent();
                    }
                }
            }
        }
    }, [
        hasShareIntent,
        shareIntent,
        missingReceiptData,
        missingReceiptError,
        navigation,
        resetShareIntent,
        shareIntentProcessed,
        refetchMissingReceipts,
    ]);
    // Reset share intent processed flag when share intent changes
    (0, react_1.useEffect)(function () {
        if (hasShareIntent) {
            setShareIntentProcessed(false);
        }
    }, [hasShareIntent]);
    // Cleanup share intent on unmount or when component reinitializes
    (0, react_1.useEffect)(function () {
        return function () {
            // Reset share intent when component unmounts to prevent conflicts
            if (hasShareIntent) {
                resetShareIntent();
            }
        };
    }, [hasShareIntent, resetShareIntent]);
    (0, react_1.useEffect)(function () {
        var unsubscribe = netinfo_1.default.addEventListener(function (state) {
            var _a;
            setIsOnline((_a = state.isConnected) !== null && _a !== void 0 ? _a : false);
        });
        return function () {
            unsubscribe();
        };
    }, []);
    var shouldFetch = function () {
        var now = Date.now();
        if (!isOnline)
            return false;
        if (now - lastFetchTime.current < FETCH_COOLDOWN_MS)
            return false;
        lastFetchTime.current = now;
        return true;
    };
    var _g = (0, swr_1.default)(isOnline ? "user/organizations" : null, {
        fallbackData: [],
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
        dedupingInterval: 2000,
        shouldRetryOnError: false,
        keepPreviousData: true,
        onError: function (err) {
            if (err.name !== "AbortError" && err.name !== "NetworkError") {
                (0, errorUtils_1.logError)("Error fetching organizations:", err);
            }
        },
    }), organizations = _g.data, error = _g.error, reloadOrganizations = _g.mutate;
    var _h = (0, useReorderedOrgs_1.default)(organizations), sortedOrgs = _h[0], setSortedOrgs = _h[1];
    var _j = (0, swr_1.default)(isOnline ? "user/invitations" : null, {
        fallbackData: [],
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
        dedupingInterval: 2000,
        shouldRetryOnError: false,
        keepPreviousData: true,
        onError: function (err) {
            if (err.name !== "AbortError" && err.name !== "NetworkError") {
                (0, errorUtils_1.logError)("Error fetching invitations:", err);
            }
        },
    }), invitations = _j.data, reloadInvitations = _j.mutate;
    var _k = (0, swr_1.useSWRConfig)(), fetcher = _k.fetcher, mutate = _k.mutate;
    var tabBarHeight = (0, bottom_tabs_1.useBottomTabBarHeight)();
    var scheme = (0, react_native_1.useColorScheme)();
    var usePanGesture = function () {
        return (0, react_1.useMemo)(function () { return react_native_gesture_handler_1.Gesture.Pan().activateAfterLongPress(520); }, []);
    };
    var panGesture = usePanGesture();
    (0, react_1.useEffect)(function () {
        if (!shouldFetch())
            return;
        try {
            if (isOnline) {
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                (0, swr_1.preload)("user", fetcher);
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                (0, swr_1.preload)("user/cards", fetcher);
                // prefetch all user organization details
                for (var _i = 0, _a = organizations || []; _i < _a.length; _i++) {
                    var org = _a[_i];
                    (0, swr_1.preload)("organizations/".concat(org.id), fetcher);
                }
            }
        }
        catch (err) {
            if (err.name !== "AbortError" && err.name !== "NetworkError") {
                (0, errorUtils_1.logError)("Error preloading data:", err);
            }
        }
    }, [organizations, fetcher, isOnline, shouldFetch]);
    var onRefresh = function () {
        if (!shouldFetch())
            return;
        try {
            reloadOrganizations();
            reloadInvitations();
            mutate(function (k) { return typeof k === "string" && k.startsWith("organizations"); });
        }
        catch (err) {
            if (err.name !== "AbortError" && err.name !== "NetworkError") {
                (0, errorUtils_1.logError)("Error refreshing data:", err);
            }
        }
    };
    (0, native_1.useFocusEffect)(function () {
        if (!shouldFetch())
            return;
        try {
            reloadOrganizations();
            reloadInvitations();
            mutate(function (k) { return typeof k === "string" && k.startsWith("organizations"); });
        }
        catch (err) {
            if (err.name !== "AbortError" && err.name !== "NetworkError") {
                (0, errorUtils_1.logError)("Error reloading data on focus:", err);
            }
        }
    });
    var renderItem = (0, react_1.useCallback)(function (_a) {
        var organization = _a.item;
        return ((0, jsx_runtime_1.jsx)(EventItem, { organization: organization, navigation: navigation }));
    }, [navigation]);
    var EventItem = (0, react_1.memo)(function (_a) {
        var organization = _a.organization, navigation = _a.navigation;
        var drag = (0, react_native_reorderable_list_1.useReorderableDrag)();
        var handlePress = (0, react_1.useCallback)(function () {
            navigation.navigate("Event", {
                orgId: organization.id,
                organization: organization,
            });
        }, [navigation, organization.id, organization]);
        return ((0, jsx_runtime_1.jsx)(Event, { event: organization, drag: drag, isActive: false, showTransactions: organizations ? organizations.length <= 2 : false, onPress: handlePress }));
    });
    EventItem.displayName = "EventItem";
    // Show cached data even if there's an error
    if (error && !(organizations === null || organizations === void 0 ? void 0 : organizations.length)) {
        return ((0, jsx_runtime_1.jsxs)(react_native_1.View, { style: { flex: 1, justifyContent: "center", alignItems: "center" }, children: [(0, jsx_runtime_1.jsx)(vector_icons_1.Ionicons, { name: "cloud-offline-outline", color: theme_1.palette.muted, size: 60 }), (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: { color: theme_1.palette.muted }, children: "Offline mode" }), (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: { color: theme_1.palette.muted, marginTop: 10 }, children: "Using cached data" })] }));
    }
    if (organizations === undefined) {
        return ((0, jsx_runtime_1.jsx)(react_native_1.View, { style: { flex: 1, justifyContent: "center", alignItems: "center" }, children: (0, jsx_runtime_1.jsx)(react_native_1.ActivityIndicator, {}) }));
    }
    if ((organizations === null || organizations === void 0 ? void 0 : organizations.length) == 0 && (invitations === null || invitations === void 0 ? void 0 : invitations.length) == 0) {
        return ((0, jsx_runtime_1.jsxs)(react_native_1.View, { style: { flex: 1, justifyContent: "center", alignItems: "center" }, children: [(0, jsx_runtime_1.jsx)(vector_icons_1.Ionicons, { name: "people-outline", color: theme_1.palette.muted, size: 60 }), (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: { color: theme_1.palette.muted }, children: "Nothing here, yet." })] }));
    }
    return ((0, jsx_runtime_1.jsx)(react_native_reorderable_list_1.default, { keyExtractor: function (item) { var _a, _b; return (_b = (_a = item.id) === null || _a === void 0 ? void 0 : _a.toString()) !== null && _b !== void 0 ? _b : Math.random().toString(); }, onReorder: function (_a) {
            var from = _a.from, to = _a.to;
            Haptics.selectionAsync();
            var newOrgs = __spreadArray([], sortedOrgs, true);
            var removed = newOrgs.splice(from, 1)[0];
            newOrgs.splice(to, 0, removed);
            if (!(0, util_1.organizationOrderEqual)(newOrgs, sortedOrgs)) {
                setSortedOrgs(newOrgs);
            }
        }, scrollIndicatorInsets: { bottom: tabBarHeight }, contentContainerStyle: {
            padding: 20,
            paddingBottom: tabBarHeight,
        }, contentInsetAdjustmentBehavior: "automatic", data: sortedOrgs, refreshControl: (0, jsx_runtime_1.jsx)(react_native_1.RefreshControl, { refreshing: refreshing, onRefresh: onRefresh, enabled: refreshEnabled }), panGesture: panGesture, onDragStart: handleDragStart, onDragEnd: handleDragEnd, ListHeaderComponent: function () {
            return invitations &&
                invitations.length > 0 && ((0, jsx_runtime_1.jsxs)(react_native_1.View, { style: {
                    marginTop: 10,
                    marginBottom: 20,
                    borderRadius: 10,
                }, children: [(0, jsx_runtime_1.jsx)(react_native_1.Text, { style: {
                            color: theme_1.palette.muted,
                            fontSize: 12,
                            textTransform: "uppercase",
                            marginBottom: 10,
                        }, children: "Pending invitations" }), invitations.map(function (invitation) { return ((0, jsx_runtime_1.jsx)(Event, { invitation: invitation, style: {
                            borderWidth: 2,
                            borderColor: scheme == "dark" ? theme_1.palette.primary : theme_1.palette.muted,
                            marginBottom: 10,
                        }, event: invitation.organization, onPress: function () {
                            return navigation.navigate("Invitation", {
                                inviteId: invitation.id,
                                invitation: invitation,
                            });
                        }, hideBalance: true }, invitation.id)
                    // <TouchableHighlight key={invitation.id}>
                    //   <Text
                    //     style={{
                    //       color: palette.smoke,
                    //       backgroundColor: palette.darkless,
                    //       padding: 10,
                    //       borderRadius: 10,
                    //       overflow: "hidden",
                    //     }}
                    //   >
                    //     {invitation.organization.name}
                    //   </Text>
                    // </TouchableHighlight>
                    ); })] }));
        }, renderItem: renderItem, ListFooterComponent: function () {
            return organizations.length > 2 && ((0, jsx_runtime_1.jsx)(react_native_1.Text, { style: {
                    color: theme_1.palette.muted,
                    textAlign: "center",
                    marginTop: 10,
                    marginBottom: 10,
                }, children: "Drag to reorder organizations" }));
        }, ItemSeparatorComponent: function () { return (0, jsx_runtime_1.jsx)(react_native_1.View, { style: { height: 16 } }); } }));
}
