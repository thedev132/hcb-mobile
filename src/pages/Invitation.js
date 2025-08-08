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
exports.default = InvitationPage;
var jsx_runtime_1 = require("react/jsx-runtime");
var vector_icons_1 = require("@expo/vector-icons");
var native_1 = require("@react-navigation/native");
var react_1 = require("react");
var react_native_1 = require("react-native");
var swr_1 = __importStar(require("swr"));
var mutation_1 = __importDefault(require("swr/mutation"));
var Button_1 = __importDefault(require("../components/Button"));
var alertUtils_1 = require("../lib/alertUtils");
var client_1 = __importDefault(require("../lib/client"));
var palette_1 = __importDefault(require("../palette"));
var theme_1 = require("../theme");
function InvitationPage(_a) {
    var navigation = _a.navigation, _b = _a.route.params, inviteId = _b.inviteId, _invitation = _b.invitation;
    var hcb = (0, client_1.default)();
    var invitation = (0, swr_1.default)("user/invitations/".concat(inviteId), { fallbackData: _invitation }).data;
    (0, react_1.useEffect)(function () {
        if (invitation === null || invitation === void 0 ? void 0 : invitation.accepted) {
            navigation.goBack(); // Close modal
            navigation.navigate("Event", {
                orgId: invitation.organization.id,
                organization: invitation.organization,
            });
        }
    }, [invitation, navigation]);
    var mutate = (0, swr_1.useSWRConfig)().mutate;
    var themeColors = (0, native_1.useTheme)().colors;
    var _c = (0, mutation_1.default)("user/invitations", function () { return hcb.post("user/invitations/".concat(inviteId, "/accept")).json(); }, {
        populateCache: function (_, invitations) {
            return (invitations === null || invitations === void 0 ? void 0 : invitations.filter(function (i) { return i.id != inviteId; })) || [];
        },
        onSuccess: function () {
            navigation.goBack(); // Close modal
            navigation.navigate("Event", {
                orgId: invitation.organization.id,
                organization: invitation.organization,
            });
            mutate("user/organizations");
        },
        onError: function () {
            (0, alertUtils_1.showAlert)("Failed to Accept Invitation", "You may have to sign the contract. Please contact HCB support if you believe this is an error.", [
                {
                    text: "OK",
                },
            ]);
        },
    }), accept = _c.trigger, acceptIsLoading = _c.isMutating;
    var _d = (0, mutation_1.default)("user/invitations", function () { return hcb.post("user/invitations/".concat(inviteId, "/reject")).json(); }, {
        populateCache: function (_, invitations) {
            return (invitations === null || invitations === void 0 ? void 0 : invitations.filter(function (i) { return i.id != inviteId; })) || [];
        },
        onSuccess: function () { return navigation.goBack(); },
    }), reject = _d.trigger, rejectIsLoading = _d.isMutating;
    return ((0, jsx_runtime_1.jsxs)(react_native_1.View, { style: {
            padding: 20,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flex: 1,
        }, children: [(0, jsx_runtime_1.jsx)(react_native_1.StatusBar, { barStyle: "light-content" }), (0, jsx_runtime_1.jsx)(react_native_1.TouchableHighlight, { onPress: function () { return navigation.goBack(); }, style: { position: "absolute", top: 16, right: 16 }, underlayColor: themeColors.background, children: (0, jsx_runtime_1.jsx)(vector_icons_1.Ionicons, { name: "close-circle", color: theme_1.palette.muted, size: 30 }) }), invitation ? ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(react_native_1.Text, { style: {
                            color: theme_1.palette.muted,
                            fontSize: 12,
                            textTransform: "uppercase",
                            marginBottom: 8,
                        }, children: "You've been invited to join" }), (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: {
                            color: themeColors.text,
                            textAlign: "center",
                            fontSize: 36,
                            fontWeight: "700",
                            marginBottom: 30,
                        }, children: invitation.organization.name }), (0, jsx_runtime_1.jsxs)(react_native_1.View, { style: { flexDirection: "row", gap: 20 }, children: [(0, jsx_runtime_1.jsx)(Button_1.default, { onPress: function () { return accept(); }, style: {
                                    backgroundColor: palette_1.default.emerald["400"],
                                    borderTopColor: palette_1.default.emerald["300"],
                                    minWidth: 100,
                                }, color: palette_1.default.emerald["800"], loading: acceptIsLoading, children: "Join" }), (0, jsx_runtime_1.jsx)(Button_1.default, { style: { minWidth: 100 }, onPress: function () {
                                    return (0, alertUtils_1.showAlert)("Are you sure you want to decline this invitation?", undefined, [
                                        { text: "Cancel" },
                                        {
                                            text: "Decline",
                                            style: "destructive",
                                            onPress: function () { return reject(); },
                                        },
                                    ]);
                                }, loading: rejectIsLoading, children: "Decline" })] })] })) : ((0, jsx_runtime_1.jsx)(react_native_1.ActivityIndicator, {}))] }));
}
