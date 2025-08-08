"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShareIntentProvider = ShareIntentProvider;
exports.useShareIntentContext = useShareIntentContext;
var jsx_runtime_1 = require("react/jsx-runtime");
var expo_share_intent_1 = require("expo-share-intent");
var react_1 = require("react");
var swr_1 = __importDefault(require("swr"));
var auth_1 = __importDefault(require("./auth"));
var ShareIntentContext = (0, react_1.createContext)(undefined);
function ShareIntentProvider(_a) {
    var children = _a.children;
    var _b = (0, expo_share_intent_1.useShareIntentContext)(), hasShareIntent = _b.hasShareIntent, shareIntent = _b.shareIntent, resetShareIntent = _b.resetShareIntent;
    var _c = (0, react_1.useState)(null), pendingShareIntent = _c[0], setPendingShareIntent = _c[1];
    var _d = (0, react_1.useState)(false), shareIntentProcessed = _d[0], setShareIntentProcessed = _d[1];
    var _e = (0, react_1.useState)([]), pendingImages = _e[0], setPendingImages = _e[1];
    var tokens = (0, react_1.useContext)(auth_1.default).tokens;
    // Fetch missing receipt data only when authenticated and has pending images
    var _f = (0, swr_1.default)((tokens === null || tokens === void 0 ? void 0 : tokens.accessToken) && pendingImages.length > 0
        ? "user/transactions/missing_receipt"
        : null), missingReceiptData = _f.data, missingReceiptError = _f.error;
    // Add timeout to show modal if missing receipt data takes too long
    (0, react_1.useEffect)(function () {
        if (pendingImages.length > 0 && (tokens === null || tokens === void 0 ? void 0 : tokens.accessToken)) {
            var timeout_1 = setTimeout(function () {
                setPendingShareIntent({
                    images: pendingImages,
                    missingTransactions: [],
                });
                setPendingImages([]);
            }, 5000); // 5 second timeout
            return function () { return clearTimeout(timeout_1); };
        }
    }, [pendingImages.length, tokens === null || tokens === void 0 ? void 0 : tokens.accessToken]);
    (0, react_1.useEffect)(function () {
        var _a;
        if (hasShareIntent && shareIntent && !shareIntentProcessed) {
            var imageUrls = ((_a = shareIntent.files) === null || _a === void 0 ? void 0 : _a.map(function (file) { return file.path; })) || [];
            if (imageUrls.length > 0) {
                if (tokens === null || tokens === void 0 ? void 0 : tokens.accessToken) {
                    // User is already authenticated, fetch missing receipt data
                    setPendingImages(imageUrls);
                }
                else {
                    // User is not authenticated, store images for later
                    setPendingImages(imageUrls);
                    setShareIntentProcessed(true);
                    resetShareIntent();
                }
            }
        }
    }, [
        hasShareIntent,
        shareIntent,
        shareIntentProcessed,
        resetShareIntent,
        tokens === null || tokens === void 0 ? void 0 : tokens.accessToken,
    ]);
    // Handle missing receipt data when it loads
    (0, react_1.useEffect)(function () {
        if (pendingImages.length > 0 && (tokens === null || tokens === void 0 ? void 0 : tokens.accessToken)) {
            if ((missingReceiptData === null || missingReceiptData === void 0 ? void 0 : missingReceiptData.data) && missingReceiptData.data.length > 0) {
                setPendingShareIntent({
                    images: pendingImages,
                    missingTransactions: missingReceiptData.data,
                });
                setPendingImages([]);
            }
            else if (missingReceiptError) {
                setPendingShareIntent({
                    images: pendingImages,
                    missingTransactions: [],
                });
                setPendingImages([]);
            }
            else if (!missingReceiptData && !missingReceiptError) {
                // Still loading, wait
            }
            else {
                // No missing receipts, show modal for receipt bin upload
                setPendingShareIntent({
                    images: pendingImages,
                    missingTransactions: [],
                });
                setPendingImages([]);
            }
        }
    }, [
        pendingImages,
        missingReceiptData,
        missingReceiptError,
        tokens === null || tokens === void 0 ? void 0 : tokens.accessToken,
    ]);
    // Reset share intent processed flag when share intent changes
    (0, react_1.useEffect)(function () {
        if (hasShareIntent) {
            setShareIntentProcessed(false);
        }
    }, [hasShareIntent]);
    var clearPendingShareIntent = function () {
        setPendingShareIntent(null);
    };
    return ((0, jsx_runtime_1.jsx)(ShareIntentContext.Provider, { value: {
            pendingShareIntent: pendingShareIntent,
            clearPendingShareIntent: clearPendingShareIntent,
            hasPendingShareIntent: pendingShareIntent !== null,
        }, children: children }));
}
function useShareIntentContext() {
    var context = (0, react_1.useContext)(ShareIntentContext);
    if (context === undefined) {
        throw new Error("useShareIntentContext must be used within a ShareIntentProvider");
    }
    return context;
}
