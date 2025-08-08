"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.descriptionDetail = descriptionDetail;
exports.default = TransactionDetails;
var jsx_runtime_1 = require("react/jsx-runtime");
var vector_icons_1 = require("@expo/vector-icons");
var native_1 = require("@react-navigation/native");
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var theme_1 = require("../../theme");
function descriptionDetail(org, transaction, navigation) {
    return {
        label: "Description",
        value: !transaction.has_custom_memo ? ((0, jsx_runtime_1.jsx)(react_native_1.Text, { style: { color: "#338eda", textAlign: "right", flex: 1 }, children: "Add Description" })) : (transaction.memo),
        onPress: function () {
            navigation.navigate("RenameTransaction", { orgId: org, transaction: transaction });
        },
    };
}
function TransactionDetails(_a) {
    var details = _a.details, title = _a.title;
    var themeColors = (0, native_1.useTheme)().colors;
    return ((0, jsx_runtime_1.jsxs)(react_native_1.View, { style: { marginBottom: 30 }, children: [title && ((0, jsx_runtime_1.jsx)(react_native_1.Text, { style: {
                    color: theme_1.palette.muted,
                    fontSize: 12,
                    textTransform: "uppercase",
                    marginBottom: 5,
                    marginLeft: 10,
                }, children: title })), details.map(function (_a, index) {
                var label = _a.label, value = _a.value, onPress = _a.onPress, _b = _a.pressIconName, pressIconName = _b === void 0 ? "chevron-forward-outline" : _b, fontFamily = _a.fontFamily;
                return ((0, jsx_runtime_1.jsx)(react_native_1.TouchableHighlight, { onPress: onPress, underlayColor: themeColors.background, activeOpacity: 0.7, children: (0, jsx_runtime_1.jsxs)(react_native_1.View, { style: {
                            backgroundColor: themeColors.card,
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "flex-start",
                            padding: 10,
                            borderTopLeftRadius: index == 0 ? 8 : 0,
                            borderTopRightRadius: index == 0 ? 8 : 0,
                            borderBottomLeftRadius: index == details.length - 1 ? 8 : 0,
                            borderBottomRightRadius: index == details.length - 1 ? 8 : 0,
                            maxHeight: 70,
                        }, children: [(0, jsx_runtime_1.jsx)(react_native_1.Text, { style: { color: theme_1.palette.muted, marginRight: 10 }, children: label }), typeof value == "string" ? ((0, jsx_runtime_1.jsx)(react_native_1.Text, { numberOfLines: 2, style: {
                                    color: themeColors.text,
                                    overflow: "hidden",
                                    flex: 1,
                                    textAlign: "right",
                                    fontFamily: fontFamily,
                                }, selectable: true, children: value })) : (value), onPress && ((0, jsx_runtime_1.jsx)(vector_icons_1.Ionicons, { name: pressIconName, size: 18, color: theme_1.palette.muted, style: { marginLeft: 8 } }))] }) }, label));
            })] }));
}
