"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TransferPage;
var jsx_runtime_1 = require("react/jsx-runtime");
var expo_constants_1 = __importDefault(require("expo-constants"));
var react_1 = require("react");
var react_native_1 = require("react-native");
var Disbursement_1 = __importDefault(require("../../components/organizations/transfer/Disbursement"));
var theme_1 = require("../../theme");
function TransferPage(_a) {
    var navigation = _a.navigation, route = _a.route;
    var organization = route.params.organization; // Grab the organization value from the route params
    (0, react_1.useEffect)(function () {
        navigation.setOptions({
            headerLeft: function () {
                var _a;
                return ((0, jsx_runtime_1.jsx)(react_native_1.View, { style: { marginRight: ((_a = expo_constants_1.default.platform) === null || _a === void 0 ? void 0 : _a.android) ? 15 : 0 }, children: (0, jsx_runtime_1.jsx)(react_native_1.Button, { color: theme_1.palette.primary, title: "Cancel", onPress: function () { return navigation.goBack(); } }) }));
            },
        });
    }, [navigation]);
    var transferType = (0, react_1.useState)("hcb")[0];
    return ((0, jsx_runtime_1.jsx)(react_native_1.KeyboardAvoidingView, { style: { flex: 1 }, behavior: react_native_1.Platform.OS === "ios" ? "padding" : "height", children: (0, jsx_runtime_1.jsx)(react_native_1.ScrollView, { contentContainerStyle: { flexGrow: 1, padding: 20 }, children: transferType === "hcb" && ((0, jsx_runtime_1.jsx)(Disbursement_1.default, { organization: organization })) }) }));
}
