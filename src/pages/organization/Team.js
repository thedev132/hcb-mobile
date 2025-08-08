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
exports.default = OrganizationTeamPage;
var jsx_runtime_1 = require("react/jsx-runtime");
var bottom_tabs_1 = require("@react-navigation/bottom-tabs");
var native_1 = require("@react-navigation/native");
var date_fns_1 = require("date-fns");
var lodash_1 = require("lodash");
var react_native_1 = require("react-native");
var swr_1 = __importStar(require("swr"));
var Button_1 = __importDefault(require("../../components/Button"));
var UserAvatar_1 = __importDefault(require("../../components/UserAvatar"));
var theme_1 = require("../../theme");
function MemberRole(props) {
    return ((0, jsx_runtime_1.jsx)(react_native_1.Text, { style: {
            fontSize: 16,
            color: props.role == "manager" ? theme_1.palette.warning : theme_1.palette.info,
            marginLeft: "auto",
        }, children: (0, lodash_1.capitalize)(props.role) }));
}
function OrganizationTeamPage(_a) {
    var _b;
    var orgId = _a.route.params.orgId;
    var cache = (0, swr_1.useSWRConfig)().cache;
    var organization = (0, swr_1.default)("organizations/".concat(orgId, "?avatar_size=50"), { fallbackData: (_b = cache.get("organizations/".concat(orgId))) === null || _b === void 0 ? void 0 : _b.data }).data;
    var tabBarHeight = (0, bottom_tabs_1.useBottomTabBarHeight)();
    var themeColors = (0, native_1.useTheme)().colors;
    if (!organization)
        return null;
    return ((0, jsx_runtime_1.jsxs)(react_native_1.ScrollView, { contentContainerStyle: { padding: 20, paddingBottom: tabBarHeight + 20 }, scrollIndicatorInsets: { bottom: tabBarHeight - 20 }, children: [(0, jsx_runtime_1.jsxs)(react_native_1.View, { style: {
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: 8,
                }, children: [(0, jsx_runtime_1.jsx)(react_native_1.Text, { style: { color: themeColors.text, fontSize: 18 }, children: "Members" }), (0, jsx_runtime_1.jsx)(Button_1.default, { icon: "member-add", iconSize: 28, iconOffset: 2, onPress: function () {
                            return react_native_1.Linking.openURL("https://hcb.hackclub.com/".concat(organization.slug, "/invites/new"));
                        }, children: "Invite" })] }), (0, jsx_runtime_1.jsx)(react_native_1.View, { style: {
                    borderRadius: 8,
                    overflow: "hidden",
                    padding: 8,
                    backgroundColor: themeColors.card,
                }, children: organization.users.map(function (user) { return ((0, jsx_runtime_1.jsxs)(react_native_1.View, { style: {
                        flexDirection: "row",
                        gap: 10,
                        padding: 8,
                    }, children: [(0, jsx_runtime_1.jsx)(UserAvatar_1.default, { user: user, size: 50 }), (0, jsx_runtime_1.jsxs)(react_native_1.View, { style: {
                                flex: 1,
                                justifyContent: "space-around",
                            }, children: [(0, jsx_runtime_1.jsxs)(react_native_1.View, { style: {
                                        flexDirection: "row",
                                        alignItems: "center",
                                        gap: 4,
                                    }, children: [(0, jsx_runtime_1.jsx)(react_native_1.Text, { style: {
                                                color: themeColors.text,
                                                fontSize: 18,
                                                flexShrink: 1,
                                            }, numberOfLines: 1, children: user.name }), user.role && (0, jsx_runtime_1.jsx)(MemberRole, { role: user.role })] }), (0, jsx_runtime_1.jsxs)(react_native_1.Text, { style: { color: theme_1.palette.muted }, children: ["Added ", (0, date_fns_1.formatDistanceToNowStrict)((0, date_fns_1.parseISO)(user.joined_at)), " ago"] })] })] }, user.id)); }) })] }));
}
