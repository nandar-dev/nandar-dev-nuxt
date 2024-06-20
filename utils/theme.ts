
export enum theme {
  dark = "dark",
  light = "light",
}

export const switchTheme = (val: theme) => {
  useColorMode().preference = val;
};
