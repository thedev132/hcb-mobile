"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = GrantCardPage;
var jsx_runtime_1 = require("react/jsx-runtime");
var swr_1 = __importDefault(require("swr"));
var CardSkeleton_1 = __importDefault(require("../../components/cards/CardSkeleton"));
var card_1 = __importDefault(require("./card"));
function GrantCardPage(_a) {
    var route = _a.route, navigation = _a.navigation;
    var grantId = route.params.grantId;
    var grant = (0, swr_1.default)("card_grants/cdg_".concat(grantId)).data;
    if (!grant) {
        return (0, jsx_runtime_1.jsx)(CardSkeleton_1.default, {});
    }
    return ((0, jsx_runtime_1.jsx)(card_1.default, { cardId: grant.card_id, navigation: navigation, grantId: "cdg_".concat(grantId) }));
}
