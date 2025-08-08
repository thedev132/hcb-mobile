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
var react_1 = __importDefault(require("react"));
var react_native_svg_1 = __importStar(require("react-native-svg"));
var UploadIcon = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 24 : _b, _c = _a.color, color = _c === void 0 ? "white" : _c;
    return ((0, jsx_runtime_1.jsx)(react_native_svg_1.default, { width: size, height: size, viewBox: "0 0 32 32", fill: "none", children: (0, jsx_runtime_1.jsx)(react_native_svg_1.Path, { d: "M17 7C19.4194 7 21.4374 8.71837 21.9002 11.0012C24.1171 10.9472 26 12.7809 26 15C26 17.2091 24.2091 19 22 19C21.4477 19 21 18.5523 21 18C21 17.4477 21.4477 17 22 17C23.1046 17 24 16.1046 24 15C24 13.8954 23.1046 13 22 13C21.7137 13 21.4301 13.0367 21.1499 13.0962C20.6068 13.2113 20 12.5551 20 12C20 10.3432 18.6569 9 17 9C15.2449 9 14.1626 10.151 13.7245 11.534C13.5099 12.2114 12.7936 12.6737 12.1486 12.3754C11.6937 12.1651 11.282 12 11 12C10.4477 12 10 12.4477 10 13C10.254 14.0159 9.48563 15 8.43845 15H8C7.44772 15 7 15.4477 7 16C7 16.5523 7.44772 17 8 17H10C10.5523 17 11 17.4477 11 18C11 18.5523 10.5523 19 10 19H8C6.34314 19 5 17.6569 5 16C5 14.3431 6.34314 13 8 13C8 11.3431 9.34314 10 11 10C11.4651 10 11.9055 10.1058 12.2983 10.2947C12.9955 8.37292 14.8374 7 17 7ZM19.7071 19.2929L16.7071 16.2929C16.3166 15.9024 15.6834 15.9024 15.2929 16.2929L12.2929 19.2929C11.9024 19.6834 11.9024 20.3166 12.2929 20.7071C12.6834 21.0976 13.3166 21.0976 13.7071 20.7071L15 19.4142V25C15 25.5523 15.4477 26 16 26C16.5523 26 17 25.5523 17 25V19.4142L18.2929 20.7071C18.6834 21.0976 19.3166 21.0976 19.7071 20.7071C20.0976 20.3166 20.0976 19.6834 19.7071 19.2929Z", fill: color }) }));
};
exports.default = UploadIcon;
