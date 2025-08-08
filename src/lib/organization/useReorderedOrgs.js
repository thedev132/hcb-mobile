"use strict";
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
exports.default = useReorderedOrgs;
var async_storage_1 = __importDefault(require("@react-native-async-storage/async-storage"));
var react_1 = require("react");
var STORAGE_KEY = "organizationOrder";
function useReorderedOrgs(organizations) {
    var _a = (0, react_1.useState)({}), orderMap = _a[0], setOrderMap = _a[1];
    (0, react_1.useEffect)(function () {
        async_storage_1.default.getItem(STORAGE_KEY).then(function (savedOrder) {
            if (savedOrder) {
                setOrderMap(JSON.parse(savedOrder));
            }
        });
    }, []);
    var orderedOrgs = (0, react_1.useMemo)(function () {
        if (!organizations)
            return [];
        if (!orderMap || Object.keys(orderMap).length === 0)
            return organizations;
        return __spreadArray([], organizations, true).sort(function (a, b) {
            var _a, _b;
            var aIndex = (_a = orderMap[a.id]) !== null && _a !== void 0 ? _a : Number.MAX_SAFE_INTEGER;
            var bIndex = (_b = orderMap[b.id]) !== null && _b !== void 0 ? _b : Number.MAX_SAFE_INTEGER;
            return aIndex - bIndex;
        });
    }, [organizations, orderMap]);
    var setOrder = function (orgs) {
        var newOrderMap = orgs.reduce(function (acc, org, idx) {
            acc[org.id] = idx;
            return acc;
        }, {});
        setOrderMap(newOrderMap);
        async_storage_1.default.setItem(STORAGE_KEY, JSON.stringify(newOrderMap));
    };
    return [orderedOrgs, setOrder];
}
