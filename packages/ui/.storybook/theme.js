import { create } from "@storybook/theming";

const base = {
  colorPrimary: "#196BA7",
  colorSecondary: "#196BA7",
};

export const dark = create({
  ...base,
  base: "dark",
  appBg: "#171C24",
  barBg: "#171C24",
  appContentBg: "#171C24",
});

export const light = create({
  ...base,
  base: "light",
  appContentBg: "#fafafa",
  appBg: "#f4f4f5",
  barBg: "#f4f4f5",
});
