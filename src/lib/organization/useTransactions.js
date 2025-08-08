"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getKey = getKey;
exports.default = useTransactions;
var react_1 = require("react");
var infinite_1 = __importDefault(require("swr/infinite"));
var PAGE_SIZE = 35;
function getKey(orgId) {
    return function (index, previousPageData) {
        if ((previousPageData === null || previousPageData === void 0 ? void 0 : previousPageData.has_more) === false)
            return null;
        if (index === 0)
            return "organizations/".concat(orgId, "/transactions?limit=").concat(PAGE_SIZE);
        return "organizations/".concat(orgId, "/transactions?limit=").concat(PAGE_SIZE, "&after=").concat(previousPageData.data[previousPageData.data.length - 1].id);
    };
}
function useTransactions(orgId) {
    var _a;
    var _b = (0, infinite_1.default)(getKey(orgId)), data = _b.data, size = _b.size, setSize = _b.setSize, isLoading = _b.isLoading;
    var transactions = (0, react_1.useMemo)(function () { return (data === null || data === void 0 ? void 0 : data.flatMap(function (d) { return d === null || d === void 0 ? void 0 : d.data; })) || []; }, [data]);
    var isLoadingMore = isLoading || (size > 0 && data && typeof data[size - 1] === "undefined");
    var isEmpty = transactions.length == 0;
    var isReachingEnd = isEmpty || (data && ((_a = data[data.length - 1]) === null || _a === void 0 ? void 0 : _a.has_more) === false);
    return {
        transactions: transactions,
        isLoading: isLoading,
        isLoadingMore: isLoadingMore,
        isReachingEnd: isReachingEnd,
        loadMore: function () {
            if (isLoadingMore || isReachingEnd)
                return;
            setSize(function (s) { return s + 1; });
        },
    };
}
