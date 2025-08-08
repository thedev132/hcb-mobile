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
Object.defineProperty(exports, "__esModule", { value: true });
exports.logInfo = exports.logWarning = exports.logCriticalError = exports.logError = void 0;
var Sentry = __importStar(require("@sentry/react-native"));
var logError = function (message, error, options) {
    if (options === void 0) { options = {}; }
    var context = options.context, _a = options.shouldReportToSentry, shouldReportToSentry = _a === void 0 ? false : _a, _b = options.tags, tags = _b === void 0 ? {} : _b, _c = options.level, level = _c === void 0 ? "error" : _c;
    // Always log to console for debugging
    console.error(message, error);
    // Only send to Sentry for critical errors
    if (shouldReportToSentry) {
        var sentryError = error instanceof Error ? error : new Error(String(error));
        Sentry.captureException(sentryError, {
            tags: __assign({ context: message }, tags),
            extra: context,
            level: level,
        });
    }
};
exports.logError = logError;
// Convenience functions for common error patterns
var logCriticalError = function (message, error, context, tags) {
    (0, exports.logError)(message, error, {
        context: context,
        shouldReportToSentry: true,
        tags: tags,
        level: "fatal",
    });
};
exports.logCriticalError = logCriticalError;
var logWarning = function (message, error, context) {
    (0, exports.logError)(message, error, {
        context: context,
        shouldReportToSentry: false,
        level: "warning",
    });
};
exports.logWarning = logWarning;
var logInfo = function (message, error, context) {
    (0, exports.logError)(message, error, {
        context: context,
        shouldReportToSentry: false,
        level: "info",
    });
};
exports.logInfo = logInfo;
