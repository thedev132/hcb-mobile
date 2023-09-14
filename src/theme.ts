import { DarkTheme, Theme } from "@react-navigation/native";

export const palette = {
  primary: "#ec3750",
  background: "#17171d",
  muted: "#8492a6",
  slate: "#3c4858",
  darkless: "#252429",
  smoke: "#e0e6ed",
};

export const theme: Theme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: palette.background,
    card: palette.background,
    text: palette.smoke,
    primary: palette.primary,
  },
};