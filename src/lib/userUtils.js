"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nameParts = nameParts;
exports.userInitials = userInitials;
exports.userColor = userColor;
function nameParts(name) {
    var parts = name.split(" ");
    return {
        firstName: parts[0],
        lastName: parts.length > 1 ? parts[parts.length - 1] : null,
    };
}
function userInitials(name) {
    var _a = nameParts(name), firstName = _a.firstName, lastName = _a.lastName;
    return firstName[0] + (lastName ? lastName[0] : "");
}
function userColor(id) {
    var colors = [
        "#ec3750",
        "#ff8c37",
        "#f1c40f",
        "#33d6a6",
        "#5bc0de",
        "#338eda",
    ];
    return colors[id.charCodeAt(4) % colors.length];
}
