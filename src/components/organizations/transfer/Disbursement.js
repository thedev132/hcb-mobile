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
var jsx_runtime_1 = require("react/jsx-runtime");
var native_1 = require("@react-navigation/native");
var react_1 = require("react");
var react_native_1 = require("react-native");
var react_native_picker_select_1 = __importDefault(require("react-native-picker-select"));
var swr_1 = __importDefault(require("swr"));
var auth_1 = __importDefault(require("../../../auth"));
var alertUtils_1 = require("../../../lib/alertUtils");
var errorUtils_1 = require("../../../lib/errorUtils");
var useOffline_1 = require("../../../lib/useOffline");
var theme_1 = require("../../../theme");
var util_1 = require("../../../util");
var DisbursementScreen = function (_a) {
    var organization = _a.organization;
    var _b = (0, react_1.useState)("$0.00"), amount = _b[0], setAmount = _b[1];
    var _c = (0, react_1.useState)(""), chosenOrg = _c[0], setOrganization = _c[1];
    var _d = (0, react_1.useState)(""), reason = _d[0], setReason = _d[1];
    var _e = (0, react_1.useState)(false), isLoading = _e[0], setIsLoading = _e[1];
    var themeColors = (0, native_1.useTheme)().colors;
    var organizations = (0, swr_1.default)("user/organizations").data;
    var tokens = (0, react_1.useContext)(auth_1.default).tokens;
    var _f = (0, useOffline_1.useOffline)(), isOnline = _f.isOnline, withOfflineCheck = _f.withOfflineCheck;
    var validateInputs = function () {
        var numericAmount = Number(amount.replace("$", "").replace(",", ""));
        if (!chosenOrg) {
            (0, alertUtils_1.showAlert)("Error", "Please select an organization to transfer to.");
            return false;
        }
        if (numericAmount <= 0 || isNaN(numericAmount)) {
            (0, alertUtils_1.showAlert)("Error", "Please enter a valid amount greater than $0.");
            return false;
        }
        if (numericAmount * 100 > organization.balance_cents) {
            (0, alertUtils_1.showAlert)("Error", "Insufficient balance for this transfer.");
            return false;
        }
        if (!reason.trim()) {
            (0, alertUtils_1.showAlert)("Error", "Please provide a reason for the transfer.");
            return false;
        }
        return true;
    };
    var handleTransfer = withOfflineCheck(function () { return __awaiter(void 0, void 0, void 0, function () {
        var response, errorData, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!validateInputs())
                        return [2 /*return*/];
                    setIsLoading(true);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 6, 7, 8]);
                    return [4 /*yield*/, fetch(process.env.EXPO_PUBLIC_API_BASE +
                            "/organizations/".concat(organization.id, "/transfers"), {
                            method: "POST",
                            headers: {
                                Authorization: "Bearer ".concat(tokens === null || tokens === void 0 ? void 0 : tokens.accessToken),
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify({
                                event_id: organization.id,
                                to_organization_id: chosenOrg,
                                amount_cents: Number(amount.replace("$", "").replace(",", "")) * 100,
                                name: reason,
                            }),
                        })];
                case 2:
                    response = _a.sent();
                    if (!!response.ok) return [3 /*break*/, 4];
                    return [4 /*yield*/, response.json()];
                case 3:
                    errorData = _a.sent();
                    (0, alertUtils_1.showAlert)("Error", errorData.message ||
                        "Failed to complete the transfer. Please try again.");
                    return [3 /*break*/, 5];
                case 4:
                    (0, alertUtils_1.showAlert)("Success", "Transfer completed successfully!");
                    setOrganization("");
                    setAmount("$0.00");
                    setReason("");
                    _a.label = 5;
                case 5: return [3 /*break*/, 8];
                case 6:
                    error_1 = _a.sent();
                    (0, errorUtils_1.logError)("Transfer operation failed", error_1, {
                        context: {
                            organizationId: organization.id,
                            targetOrgId: chosenOrg,
                            amount: amount,
                            action: "organization_transfer",
                        },
                    });
                    (0, alertUtils_1.showAlert)("Error", "An unexpected error occurred. Please try again.");
                    return [3 /*break*/, 8];
                case 7:
                    setIsLoading(false);
                    return [7 /*endfinally*/];
                case 8: return [2 /*return*/];
            }
        });
    }); });
    (0, react_1.useEffect)(function () {
        if (chosenOrg === "") {
            setAmount("$0.00");
        }
    }, [chosenOrg]);
    if (!organizations) {
        return ((0, jsx_runtime_1.jsx)(react_native_1.View, { style: { flex: 1, justifyContent: "center", alignItems: "center" }, children: (0, jsx_runtime_1.jsx)(react_native_1.ActivityIndicator, { size: "large", color: themeColors.primary }) }));
    }
    return ((0, jsx_runtime_1.jsxs)(react_native_1.View, { style: { flex: 1, backgroundColor: themeColors.background }, children: [(0, jsx_runtime_1.jsx)(react_native_1.Text, { style: {
                    color: themeColors.text,
                    fontSize: 18,
                    marginVertical: 12,
                    fontWeight: "bold",
                }, children: "From" }), (0, jsx_runtime_1.jsx)(react_native_1.View, { style: {
                    backgroundColor: themeColors.card,
                    borderRadius: 8,
                    padding: 15,
                    marginBottom: 15,
                }, children: (0, jsx_runtime_1.jsxs)(react_native_1.Text, { style: { color: themeColors.text, fontSize: 16 }, children: [organization.name, " (", (0, util_1.renderMoney)(organization.balance_cents), ")"] }) }), (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: {
                    color: themeColors.text,
                    fontSize: 18,
                    marginVertical: 12,
                    fontWeight: "bold",
                }, children: "To" }), (0, jsx_runtime_1.jsx)(react_native_1.View, { style: {
                    backgroundColor: themeColors.card,
                    borderRadius: 8,
                    marginBottom: 15,
                }, children: (0, jsx_runtime_1.jsx)(react_native_picker_select_1.default, { placeholder: { label: "Select an organization", value: "" }, onValueChange: function (itemValue) { return setOrganization(itemValue); }, style: {
                        inputIOS: { color: themeColors.text, padding: 15, fontSize: 16 },
                        inputAndroid: {
                            color: themeColors.text,
                            padding: 15,
                            fontSize: 16,
                        },
                    }, items: __spreadArray([], organizations
                        .filter(function (org) { return org.id !== organization.id; })
                        .filter(function (org) { return org.playground_mode === false; })
                        .map(function (org) { return ({ label: org.name, value: org.id }); }), true) }) }), (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: { color: theme_1.palette.muted, fontSize: 14, marginBottom: 20 }, children: "You can transfer to any organization you're a part of." }), (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: {
                    color: themeColors.text,
                    fontSize: 18,
                    marginVertical: 12,
                    fontWeight: "bold",
                }, children: "Amount" }), (0, jsx_runtime_1.jsx)(react_native_1.TextInput, { style: {
                    backgroundColor: themeColors.card,
                    color: themeColors.text,
                    borderRadius: 8,
                    padding: 12,
                    fontSize: 16,
                    marginBottom: 15,
                }, value: amount, onChangeText: function (text) {
                    var sanitizedText = text.replace(/[^\d.]/g, "");
                    // remove 0.00 if user enters a new number
                    if (sanitizedText.startsWith("0.00")) {
                        setAmount(text.replace("0.00", ""));
                        return;
                    }
                    setAmount(sanitizedText ? "$".concat(sanitizedText) : "$0.00");
                }, placeholder: "$0.00", placeholderTextColor: themeColors.text, keyboardType: "numeric" }), (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: {
                    color: themeColors.text,
                    fontSize: 18,
                    marginVertical: 12,
                    fontWeight: "bold",
                }, children: "What is the transfer for?" }), (0, jsx_runtime_1.jsx)(react_native_1.TextInput, { style: {
                    backgroundColor: themeColors.card,
                    color: themeColors.text,
                    borderRadius: 8,
                    padding: 12,
                    fontSize: 16,
                    marginBottom: 10,
                }, value: reason, onChangeText: function (text) { return setReason(text); }, placeholder: "Donating extra funds to another organization", placeholderTextColor: theme_1.palette.muted }), (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: { color: theme_1.palette.muted, fontSize: 14, marginBottom: 20 }, children: "This is to help HCB keep record of our transactions." }), (0, jsx_runtime_1.jsx)(react_native_1.TouchableOpacity, { onPress: handleTransfer, disabled: isLoading || !isOnline, style: {
                    backgroundColor: isOnline
                        ? themeColors.primary
                        : themeColors.primary + "80",
                    padding: 15,
                    borderRadius: 8,
                    alignItems: "center",
                    marginVertical: 20,
                }, children: isLoading ? ((0, jsx_runtime_1.jsx)(react_native_1.ActivityIndicator, { color: "white" })) : ((0, jsx_runtime_1.jsx)(react_native_1.Text, { style: { color: "white", fontSize: 16, fontWeight: "600" }, children: "Submit Transfer" })) })] }));
};
exports.default = DisbursementScreen;
