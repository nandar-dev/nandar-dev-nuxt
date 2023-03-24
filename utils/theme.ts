import { useLocalStorage, usePreferredDark } from "@vueuse/core";

const themeLocalName = "theme";

export enum theme {
  dark = "dark",
  light = "light",
}

const getSystemDefaultTheme = () => {
  const isDark = usePreferredDark();
  if (isDark) {
    return theme.dark;
  } else {
    return theme.light;
  }
};

export const switchTheme = (val: string) => {
  localStorage.setItem(themeLocalName, val);
};

export const getTheme = (): string => {
  return localStorage.getItem(themeLocalName) || getSystemDefaultTheme();
};
