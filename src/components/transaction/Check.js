"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CheckComponent;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_native_1 = require("react-native");
var swr_1 = __importDefault(require("swr"));
var to_words_1 = require("to-words");
var palette_1 = __importDefault(require("../../palette"));
var screenWidth = react_native_1.Dimensions.get("window").width;
var checkRatio = 3.2 / 6;
var checkWidth = screenWidth * 0.9;
var checkHeight = checkWidth * checkRatio;
function CheckComponent(_a) {
    var _b;
    var checkNumber = _a.checkNumber, date = _a.date, recipientName = _a.recipientName, amount = _a.amount, memo = _a.memo, orgId = _a.orgId;
    amount = Math.abs(amount);
    date = new Date(date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
    });
    var organization = (0, swr_1.default)("organizations/".concat(orgId)).data;
    var scheme = (0, react_native_1.useColorScheme)() || "light"; // Detects the color scheme (light or dark)
    var renderMoneyAmount = function (amount) { return "$".concat(amount.toFixed(2)); };
    var toWords = new to_words_1.ToWords({
        localeCode: "en-US",
        converterOptions: {
            ignoreDecimal: false,
            ignoreZeroCurrency: false,
        },
    });
    var amountInWords = toWords.convert(amount);
    // Dynamic styles based on the color scheme
    var styles = getStyles(scheme);
    return ((0, jsx_runtime_1.jsxs)(react_native_1.View, { style: styles.container, children: [(0, jsx_runtime_1.jsxs)(react_native_1.View, { style: styles.headerContainer, children: [(0, jsx_runtime_1.jsx)(react_native_1.Text, { style: styles.checkNumber, children: checkNumber || "----" }), (0, jsx_runtime_1.jsxs)(react_native_1.View, { style: { flexDirection: "row", alignItems: "center" }, children: [(0, jsx_runtime_1.jsx)(react_native_1.Text, { style: styles.label, children: "Date:" }), (0, jsx_runtime_1.jsx)(react_native_1.View, { style: {
                                    borderBottomWidth: 2,
                                    borderBottomColor: scheme === "dark" ? palette_1.default.slate[500] : palette_1.default.slate[400],
                                }, children: (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: [styles.dateText, styles.handwriting], children: date }) })] })] }), (0, jsx_runtime_1.jsxs)(react_native_1.View, { style: [styles.row, { gap: 10 }], children: [(0, jsx_runtime_1.jsxs)(react_native_1.Text, { style: [styles.label, { fontSize: 10, marginRight: 0 }], children: ["Pay to the", "\n", "order of"] }), (0, jsx_runtime_1.jsx)(react_native_1.View, { style: [
                            styles.flexGrow,
                            {
                                borderBottomWidth: 2,
                                borderBottomColor: scheme === "dark" ? palette_1.default.slate[500] : palette_1.default.slate[400],
                            },
                        ], children: (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: styles.handwriting, children: recipientName }) }), (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: styles.amountInput, children: "$" }), (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: styles.amount, children: renderMoneyAmount(amount).replace("$", "") })] }), (0, jsx_runtime_1.jsxs)(react_native_1.View, { style: [styles.row, { gap: 12 }], children: [(0, jsx_runtime_1.jsx)(react_native_1.View, { style: [
                            styles.flexGrow,
                            {
                                borderBottomWidth: 2,
                                borderBottomColor: scheme === "dark" ? palette_1.default.slate[500] : palette_1.default.slate[400],
                            },
                        ], children: (0, jsx_runtime_1.jsx)(react_native_1.Text, { numberOfLines: 1, style: styles.handwriting, children: amountInWords }) }), (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: styles.label, children: "Dollars" })] }), (0, jsx_runtime_1.jsxs)(react_native_1.View, { style: [styles.row, styles.memoContainer, { marginBottom: 0 }], children: [(0, jsx_runtime_1.jsx)(react_native_1.Text, { style: styles.label, children: "Memo" }), (0, jsx_runtime_1.jsx)(react_native_1.View, { style: [
                            styles.flexGrow,
                            {
                                borderBottomWidth: 2,
                                borderBottomColor: scheme === "dark" ? palette_1.default.slate[500] : palette_1.default.slate[400],
                            },
                        ], children: (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: styles.handwriting, children: memo }) }), (0, jsx_runtime_1.jsx)(react_native_1.Image, { source: require("../../../assets/zach-signature.png"), style: styles.signature })] }), (0, jsx_runtime_1.jsx)(react_native_1.View, { style: { flexDirection: "row" }, children: (0, jsx_runtime_1.jsxs)(react_native_1.Text, { style: styles.accountDetails, children: ["\u2446", (checkNumber === null || checkNumber === void 0 ? void 0 : checkNumber.padStart(10, "0")) || "0000000000", " \u2446", (organization === null || organization === void 0 ? void 0 : organization.routing_number) || "111111111", " \u2446", ((_b = organization === null || organization === void 0 ? void 0 : organization.account_number) === null || _b === void 0 ? void 0 : _b.slice(0, 3)) || "123", "[HIDDEN] \u2446"] }) })] }));
}
var getStyles = function (scheme) {
    return react_native_1.StyleSheet.create({
        container: {
            width: checkWidth,
            height: checkHeight,
            backgroundColor: scheme === "dark" ? "#193046" : "#E2ECF5",
            padding: 12,
            marginVertical: 12,
            shadowColor: scheme === "dark" ? "#000" : "#888",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 6,
            borderWidth: 1,
            borderColor: scheme === "dark" ? "#ccc" : "#bbb",
            overflow: "visible",
        },
        headerContainer: {
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 12,
        },
        checkNumber: {
            fontFamily: "check-font",
            fontSize: 14,
            textAlign: "right",
            marginBottom: 8,
            color: scheme === "dark" ? palette_1.default.slate[300] : palette_1.default.slate[700],
        },
        dateText: {
            fontSize: 16,
            color: scheme === "dark" ? palette_1.default.slate[300] : palette_1.default.slate[700],
            fontFamily: "Damion",
        },
        row: {
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 8,
        },
        label: {
            fontSize: 12,
            fontWeight: "bold",
            textTransform: "uppercase",
            marginRight: 4,
            color: scheme === "dark" ? palette_1.default.slate[300] : palette_1.default.slate[700],
        },
        handwriting: {
            fontFamily: "Damion",
            fontSize: 16,
            borderBottomWidth: 2,
            borderBottomColor: scheme === "dark" ? palette_1.default.slate[500] : palette_1.default.slate[400],
            paddingRight: 8,
            color: scheme === "dark" ? "#fff" : "#000",
            textDecorationColor: scheme === "dark" ? palette_1.default.slate[500] : palette_1.default.slate[400],
        },
        amountInput: {
            fontFamily: "Damion",
            fontSize: 18,
            maxWidth: 120,
            color: scheme === "dark" ? "#fff" : "#000",
            textAlign: "right",
        },
        amount: {
            fontFamily: "Damion",
            fontSize: 18,
            maxWidth: 120,
            color: scheme === "dark" ? "#fff" : "#000",
            textAlign: "right",
            borderWidth: 1,
            borderColor: scheme === "dark" ? palette_1.default.slate[500] : palette_1.default.slate[400],
            paddingHorizontal: 4,
        },
        memoContainer: {
            gap: 8,
            alignItems: "center",
        },
        flexGrow: {
            flexGrow: 1,
            maxWidth: "75%",
        },
        signature: {
            height: 40,
            width: 60,
            tintColor: scheme === "dark" ? palette_1.default.slate[100] : palette_1.default.slate[500],
        },
        accountDetails: {
            fontFamily: "check-font",
            fontSize: 12,
            color: scheme === "dark" ? palette_1.default.slate[300] : palette_1.default.slate[700],
            textAlign: "left",
            flex: 1,
        },
    });
};
