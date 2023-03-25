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
let themeStorage = useLocalStorage(themeLocalName, getSystemDefaultTheme());

export const getTheme = (): string => {
  return themeStorage.value || getSystemDefaultTheme();
};

export const switchTheme = (val: theme) => {
  themeStorage.value = val;
  useColorMode().preference = val;
};
