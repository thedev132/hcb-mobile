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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
require("expo-dev-client");
var Sentry = __importStar(require("@sentry/react-native"));
var expo_font_1 = require("expo-font");
var expo_share_intent_1 = require("expo-share-intent");
var react_native_1 = require("react-native");
var AppContent_1 = __importDefault(require("./src/AppContent"));
var AuthProvider_1 = require("./src/AuthProvider");
var cacheProvider_1 = require("./src/cacheProvider");
var CustomAlertProvider_1 = require("./src/components/CustomAlertProvider");
var LinkingContext_1 = require("./src/LinkingContext");
var ShareIntentContext_1 = require("./src/ShareIntentContext");
var ThemeContext_1 = require("./src/ThemeContext");
function App() {
    var fontsLoaded = (0, expo_font_1.useFonts)({
        "JetBrainsMono-Regular": require("./assets/fonts/JetBrainsMono-Regular.ttf"),
        "JetBrainsMono-Bold": require("./assets/fonts/JetBrainsMono-Bold.ttf"),
        "Consolas-Bold": require("./assets/fonts/CONSOLAB.ttf"),
        Damion: require("./assets/fonts/Damion-Regular.ttf"),
    })[0];
    var scheme = (0, react_native_1.useColorScheme)();
    var cache = (0, cacheProvider_1.useCache)();
    if (process.env.NODE_ENV === "production") {
        Sentry.init({
            dsn: process.env.EXPO_PUBLIC_SENTRY_DSN,
            debug: false,
            integrations: [
                Sentry.reactNativeTracingIntegration(),
                Sentry.reactNativeErrorHandlersIntegration(),
            ],
            sendDefaultPii: true,
            tracesSampleRate: 1.0,
            profilesSampleRate: 1.0,
        });
    }
    if (!fontsLoaded) {
        return null;
    }
    return ((0, jsx_runtime_1.jsx)(expo_share_intent_1.ShareIntentProvider, { children: (0, jsx_runtime_1.jsx)(ThemeContext_1.ThemeProvider, { children: (0, jsx_runtime_1.jsx)(AuthProvider_1.AuthProvider, { children: (0, jsx_runtime_1.jsx)(ShareIntentContext_1.ShareIntentProvider, { children: (0, jsx_runtime_1.jsx)(LinkingContext_1.LinkingProvider, { children: (0, jsx_runtime_1.jsx)(CustomAlertProvider_1.CustomAlertProvider, { children: (0, jsx_runtime_1.jsx)(AppContent_1.default, { scheme: scheme, cache: cache }) }) }) }) }) }) }));
}
exports.default = Sentry.wrap(App);
