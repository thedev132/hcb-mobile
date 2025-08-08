"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatCategoryNames = exports.formatMerchantNames = exports.normalizeSvg = void 0;
exports.renderMoney = renderMoney;
exports.renderDate = renderDate;
exports.statusColor = statusColor;
exports.orgColor = orgColor;
exports.redactedCardNumber = redactedCardNumber;
exports.renderCardNumber = renderCardNumber;
exports.organizationOrderEqual = organizationOrderEqual;
var yellowpages_1 = require("@thedev132/yellowpages");
var words_1 = __importDefault(require("lodash/words"));
var errorUtils_1 = require("./lib/errorUtils");
var theme_1 = require("./theme");
function renderMoney(cents) {
    return ((cents < 0 ? "-" : "") +
        "$" +
        (Math.abs(cents) / 100).toLocaleString(undefined, {
            minimumFractionDigits: 2,
        }));
}
function renderDate(date) {
    return new Date(date).toLocaleDateString("en-US", {
        weekday: "long",
        month: "short",
        day: "numeric",
        year: "numeric",
        timeZone: "UTC", // Prevent JS from doing timezone conversion
    });
}
function statusColor(status) {
    if (status == "deposited" || status == "completed") {
        return theme_1.palette.success;
    }
    else if (status == "in_transit" || status == "issued") {
        return theme_1.palette.info;
    }
    else if (status == "rejected") {
        return theme_1.palette.primary;
    }
    else {
        return theme_1.palette.muted;
    }
}
function orgColor(orgId) {
    var colors = [
        "#ec3750",
        "#ff8c37",
        "#f1c40f",
        "#33d6a6",
        "#5bc0de",
        "#338eda",
        "#a633d6",
    ];
    return colors[Math.floor(orgId.charCodeAt(4) % colors.length)];
}
function redactedCardNumber(last4) {
    return "\u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 ".concat(last4 || "••••");
}
function renderCardNumber(number) {
    return (0, words_1.default)(number, /\d{4}/g).join(" ");
}
var normalizeSvg = function (svg, width, height, scaleFactor) {
    if (scaleFactor === void 0) { scaleFactor = 1.25; }
    return svg.replace("<svg", "<svg preserveAspectRatio=\"xMinYMin slice\" viewBox=\"0 0 ".concat(width / scaleFactor, " ").concat(height / scaleFactor, "\""));
};
exports.normalizeSvg = normalizeSvg;
function organizationOrderEqual(a, b) {
    if (a.length !== b.length)
        return false;
    for (var i = 0; i < a.length; ++i) {
        if (a[i].id !== b[i].id)
            return false;
    }
    return true;
}
var formatMerchantNames = function (merchantIds) {
    if (!merchantIds || merchantIds.length === 0) {
        return "All";
    }
    try {
        var merchantNames_1 = [];
        var validIds = merchantIds.filter(function (id) { return !!id; });
        var unnamedCount = validIds.filter(function (id) {
            var merchant = yellowpages_1.Merchant.lookup({ networkId: id });
            if (merchant.inDataset()) {
                var name_1 = merchant.getName();
                if (name_1 && !merchantNames_1.includes(name_1)) {
                    merchantNames_1.push(name_1);
                }
                return false;
            }
            return true;
        }).length;
        // Add unnamed merchants count if any
        if (unnamedCount > 0) {
            merchantNames_1.push("Unnamed Merchants (".concat(unnamedCount, ")"));
        }
        return merchantNames_1.join(", ");
    }
    catch (error) {
        (0, errorUtils_1.logError)("Error formatting merchant names", error, {
            context: { merchantIds: merchantIds },
        });
        return "Loading...";
    }
};
exports.formatMerchantNames = formatMerchantNames;
var formatCategoryNames = function (categoryIds) {
    if (!categoryIds || categoryIds.length === 0) {
        return "All";
    }
    try {
        var categoryNames_1 = [];
        var validIds = categoryIds.filter(function (id) { return !!id; });
        var unnamedCount = validIds.filter(function (id) {
            var category = yellowpages_1.Category.lookup({ key: id });
            if (category.inDataset()) {
                var name_2 = category.getName();
                if (name_2 && !categoryNames_1.includes(name_2)) {
                    categoryNames_1.push(name_2);
                }
                return false;
            }
            return true;
        }).length;
        if (unnamedCount > 0) {
            categoryNames_1.push("Unnamed Categories (".concat(unnamedCount, ")"));
        }
        return categoryNames_1.join(", ");
    }
    catch (error) {
        (0, errorUtils_1.logError)("Error formatting category names", error, {
            context: { categoryIds: categoryIds },
        });
        return "Loading...";
    }
};
exports.formatCategoryNames = formatCategoryNames;
