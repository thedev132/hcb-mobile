"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useColorScheme = useColorScheme;
exports.useIsDark = useIsDark;
var react_native_1 = require("react-native");
var ThemeContext_1 = require("../ThemeContext");
function useColorScheme() {
    var theme = (0, ThemeContext_1.useThemeContext)().theme;
    var systemColorScheme = (0, react_native_1.useColorScheme)();
    return theme === "system" ? systemColorScheme : theme;
}
function useIsDark() {
    var colorScheme = useColorScheme();
    return colorScheme === "dark";
}
