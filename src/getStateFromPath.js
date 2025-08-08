"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStateFromPath = void 0;
var native_1 = require("@react-navigation/native");
var react_native_1 = require("react-native");
var getStateFromPath = function (path, options) {
    var state = (0, native_1.getStateFromPath)(path, options);
    if (state)
        return state;
    var extractedOrg = extractOrgName(path);
    var routes = [];
    if (extractedOrg) {
        routes.push({ name: "Organizations" });
        routes.push({ name: "Event", params: { orgId: extractedOrg.orgId } });
        if (extractedOrg.transactionId) {
            routes.push({
                name: "Transaction",
                params: {
                    transactionId: extractedOrg.transactionId,
                    orgId: extractedOrg.orgId,
                },
            });
        }
    }
    var match = path.match(/([^/]+)\/transactions/);
    if (match) {
        var orgId = match[1];
        routes.push({
            name: "Event",
            params: { orgId: orgId },
        });
    }
    if (routes.length > 0) {
        return {
            routes: [
                {
                    name: "Home",
                    state: {
                        routes: routes,
                    },
                },
            ],
        };
    }
    react_native_1.Linking.openURL(new URL(path, "https://hcb.hackclub.com").toString());
};
exports.getStateFromPath = getStateFromPath;
function extractOrgName(path) {
    var match = path.match(/^\/?([^/#]+)(?:#([a-zA-Z0-9]+))?$/);
    if (!match)
        return undefined;
    if (match.length == 3) {
        return { orgId: match[1], transactionId: match[2] };
    }
    else {
        return { orgId: match[1] };
    }
}
