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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = PaymentCard;
var jsx_runtime_1 = require("react/jsx-runtime");
var native_1 = require("@react-navigation/native");
var hackclub_icons_rn_1 = __importDefault(require("@thedev132/hackclub-icons-rn"));
var expo_image_1 = require("expo-image");
var react_1 = require("react");
var react_native_1 = require("react-native");
var react_native_svg_1 = require("react-native-svg");
var theme_1 = require("../theme");
var util_1 = require("../util");
var CardChip_1 = __importDefault(require("./cards/CardChip"));
function PaymentCard(_a) {
    var _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
    var card = _a.card, details = _a.details, onCardLoad = _a.onCardLoad, pattern = _a.pattern, patternDimensions = _a.patternDimensions, props = __rest(_a, ["card", "details", "onCardLoad", "pattern", "patternDimensions"]);
    var _p = (0, native_1.useTheme)(), themeColors = _p.colors, dark = _p.dark;
    var appState = (0, react_1.useRef)(react_native_1.AppState.currentState);
    var _q = (0, react_1.useState)(appState.current), isAppInBackground = _q[0], setisAppInBackground = _q[1];
    var width = (0, react_native_1.useWindowDimensions)().width;
    var _r = (0, react_1.useState)(80), logoWidth = _r[0], setLogoWidth = _r[1];
    var _s = (0, react_1.useState)(40), logoHeight = _s[0], setLogoHeight = _s[1];
    var isCardDataValid = card && card.id;
    (0, react_1.useEffect)(function () {
        if (onCardLoad && isCardDataValid && patternDimensions) {
            onCardLoad(card.id, patternDimensions);
        }
    }, [card === null || card === void 0 ? void 0 : card.id, onCardLoad, patternDimensions, isCardDataValid]);
    (0, react_1.useEffect)(function () {
        var _a;
        if ((_a = card.personalization) === null || _a === void 0 ? void 0 : _a.logo_url) {
            react_native_1.Image.getSize(card.personalization.logo_url, function (width, height) {
                setLogoWidth(width);
                setLogoHeight(height);
            });
        }
        var subscription = react_native_1.AppState.addEventListener("change", function (nextAppState) {
            appState.current = nextAppState;
            setisAppInBackground(appState.current);
        });
        return function () { return subscription.remove(); };
    }, []);
    if (card === null || card === void 0 ? void 0 : card.amount_cents) {
        card.type = "virtual";
    }
    if (!isCardDataValid) {
        return ((0, jsx_runtime_1.jsx)(react_native_1.View, { style: __assign({ backgroundColor: dark ? "#222" : "#eee", padding: 30, width: width * 0.86, height: (width * 0.86) / 1.588, borderRadius: 15, justifyContent: "center", alignItems: "center" }, props.style), children: (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: { color: dark ? "#999" : "#666" }, children: "Loading card..." }) }));
    }
    return ((0, jsx_runtime_1.jsxs)(react_native_1.View, { style: __assign(__assign({ backgroundColor: card.type == "physical"
                ? ((_b = card.personalization) === null || _b === void 0 ? void 0 : _b.color) == "black"
                    ? "black"
                    : "white"
                : themeColors.card, padding: 30, width: width * 0.86, height: (width * 0.86) / 1.588, borderRadius: 15, flexDirection: "column", justifyContent: "flex-end", alignItems: "stretch", position: "relative", borderWidth: 0, borderColor: dark ? theme_1.palette.slate : theme_1.palette.muted }, props.style), { overflow: "hidden" }), children: [card.type == "virtual" && pattern && ((0, jsx_runtime_1.jsx)(react_native_1.View, { style: {
                    position: "absolute",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    width: width * 0.86,
                    height: (width * 0.86) / 1.5,
                }, children: (0, jsx_runtime_1.jsx)(react_native_svg_1.SvgXml, { xml: pattern, width: "100%", height: "100%" }) })), card.type == "physical" && !((_c = card.personalization) === null || _c === void 0 ? void 0 : _c.logo_url) && ((0, jsx_runtime_1.jsx)(react_native_1.View, { style: {
                    position: "absolute",
                    top: 15,
                    right: 0,
                    width: 100,
                    height: 40,
                    alignItems: "flex-end",
                    justifyContent: "center",
                    overflow: "hidden",
                }, children: (0, jsx_runtime_1.jsx)(hackclub_icons_rn_1.default, { glyph: "bank-account", size: 40, color: ((_d = card.personalization) === null || _d === void 0 ? void 0 : _d.color) == "black" ? "white" : "black" }) })), card.type == "physical" && ((_e = card.personalization) === null || _e === void 0 ? void 0 : _e.logo_url) && ((0, jsx_runtime_1.jsx)(react_native_1.View, { style: {
                    position: "absolute",
                    top: 15,
                    right: 15,
                    width: "100%",
                    height: 40,
                    overflow: "hidden",
                    alignItems: "flex-end",
                }, children: (0, jsx_runtime_1.jsx)(expo_image_1.Image, { contentFit: "contain", cachePolicy: "memory-disk", source: { uri: (_f = card.personalization) === null || _f === void 0 ? void 0 : _f.logo_url }, style: {
                        width: "auto",
                        height: 40,
                        tintColor: ((_g = card.personalization) === null || _g === void 0 ? void 0 : _g.color) == "black" ? "white" : undefined,
                        aspectRatio: logoWidth / logoHeight,
                    } }) })), card.status == "frozen" && ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(expo_image_1.Image, { source: require("../../assets/card-frost.png"), style: {
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: width * 0.86,
                            height: (width * 0.86) / 1.588,
                            resizeMode: "cover",
                            opacity: 0.32,
                            borderRadius: 15,
                        } }), (0, jsx_runtime_1.jsx)(react_native_1.View, { style: { top: 25, left: 25, position: "absolute" }, children: (0, jsx_runtime_1.jsx)(hackclub_icons_rn_1.default, { glyph: "freeze", size: 32, color: ((_h = card.personalization) === null || _h === void 0 ? void 0 : _h.color) == "black" ? "white" : "black", opacity: 0.5 }) })] })), card.type == "physical" && (0, jsx_runtime_1.jsx)(CardChip_1.default, {}), (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: {
                    color: ((_j = card.personalization) === null || _j === void 0 ? void 0 : _j.color) == "white" ? "black" : "white",
                    fontSize: 18,
                    marginBottom: 4,
                    fontFamily: "Consolas-Bold",
                }, children: details && isAppInBackground === "active"
                    ? (0, util_1.renderCardNumber)(details.number)
                    : (0, util_1.redactedCardNumber)(card.last4) }), (0, jsx_runtime_1.jsxs)(react_native_1.View, { style: { flexDirection: "row", alignItems: "center", gap: 10 }, children: [(0, jsx_runtime_1.jsx)(react_native_1.View, { children: (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: {
                                color: ((_k = card.personalization) === null || _k === void 0 ? void 0 : _k.color) == "white" ? "black" : "white",
                                fontFamily: "Consolas-Bold",
                                fontSize: 18,
                                width: 180,
                                textTransform: "uppercase",
                            }, numberOfLines: 1, ellipsizeMode: "tail", children: ((_l = card.user) === null || _l === void 0 ? void 0 : _l.name) || ((_m = card.organization) === null || _m === void 0 ? void 0 : _m.name) || "Card Holder" }) }), (0, jsx_runtime_1.jsx)(react_native_1.View, { style: { position: "absolute", right: 0 }, children: (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: {
                                color: ((_o = card.personalization) === null || _o === void 0 ? void 0 : _o.color) == "white" ? "black" : "white",
                                fontSize: 14,
                                fontFamily: "Consolas-Bold",
                                fontWeight: 700,
                                textTransform: "uppercase",
                                backgroundColor: card.type == "virtual"
                                    ? "rgba(255, 255, 255, 0.05)"
                                    : "rgba(255, 255, 255, 0.08)",
                                borderRadius: 15,
                                paddingHorizontal: 10,
                                paddingVertical: 3,
                                overflow: "hidden",
                            }, children: card.status === "expired" ? "canceled" : card.status }) })] })] }));
}
