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
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CardChip;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_native_1 = require("react-native");
var react_native_svg_1 = __importStar(require("react-native-svg"));
function CardChip() {
    return ((0, jsx_runtime_1.jsx)(react_native_1.View, { style: { marginBottom: 10 }, children: (0, jsx_runtime_1.jsxs)(react_native_svg_1.default, { width: "49", height: "33", fill: "none", viewBox: "0 0 197 131", children: [(0, jsx_runtime_1.jsx)(react_native_svg_1.Mask, { id: "mask0", width: "197", height: "131", x: "0", y: "0", "mask-type": "alpha", maskUnits: "userSpaceOnUse" }), (0, jsx_runtime_1.jsx)(react_native_svg_1.Mask, { id: "mask0", width: "197", height: "131", x: "0", y: "0", maskUnits: "userSpaceOnUse", children: (0, jsx_runtime_1.jsx)(react_native_svg_1.Rect, { width: "197", height: "131", fill: "#D1CAB9", rx: "26" }) }), (0, jsx_runtime_1.jsxs)(react_native_svg_1.G, { mask: "url(#mask0)", children: [(0, jsx_runtime_1.jsx)(react_native_svg_1.Rect, { width: "197", height: "131", fill: "#D1CAB9", rx: "26" }), (0, jsx_runtime_1.jsx)(react_native_svg_1.Rect, { width: "128.206", height: "75", x: "-57", y: "26", fill: "#D1CAB9", stroke: "#6F6666", strokeWidth: "4", rx: "24" }), (0, jsx_runtime_1.jsx)(react_native_svg_1.Rect, { width: "128.206", height: "75", x: "252.206", y: "104", fill: "#D1CAB9", stroke: "#6F6666", strokeWidth: "4", rx: "24", transform: "rotate(-180 252.206 104)" }), (0, jsx_runtime_1.jsx)(react_native_svg_1.Rect, { width: "77.206", height: "50", x: "-6", y: "-3", fill: "#D1CAB9", stroke: "#6F6666", strokeWidth: "4", rx: "24" }), (0, jsx_runtime_1.jsx)(react_native_svg_1.Rect, { width: "77.206", height: "50", x: "201.206", y: "133", fill: "#D1CAB9", stroke: "#6F6666", strokeWidth: "4", rx: "24", transform: "rotate(-180 201.206 133)" }), (0, jsx_runtime_1.jsx)(react_native_svg_1.Rect, { width: "77.206", height: "50", x: "-6", y: "83", fill: "#D1CAB9", stroke: "#6F6666", strokeWidth: "4", rx: "24" }), (0, jsx_runtime_1.jsx)(react_native_svg_1.Rect, { width: "77.206", height: "50", x: "201.206", y: "47", fill: "#D1CAB9", stroke: "#6F6666", strokeWidth: "4", rx: "24", transform: "rotate(-180 201.206 47)" })] })] }) }));
}
