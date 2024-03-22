export const colors = {
  black: "#000",
  gray1: "#e6e8eb",
  gray2: "#bdc1c7",
  gray3: "#6f757b",
  background: "#f6f7f8",
  white: "#fff",
  blue1: "#5d6cfa",
  blue2: "#3737cc",
  blue3: "#173cfe",
};

export type Colors = typeof colors;
export type ColorKey = keyof Colors;

export const gradients = {
  hero: `linear-gradient(45deg, #1d5cff 18.46%, #2fd0b3 100%);`,
};
