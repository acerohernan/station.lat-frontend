import { cva } from "class-variance-authority";

// eslint-disable-next-line import/prefer-default-export
export const buttonClasses = cva("px-6 rounded-md font-semibold transition-all ease-in-out", {
  variants: {
    variant: {
      primary: "text-white bg-blue_primary hover:bg-blue_secondary",
      outline: "border border-blue_light hover:border-blue_primary hover:bg-blue_primary/10 dark:text-white",
    },
    size: {
      sm: "text-xs py-3",
      md: "text-sm py-4",
      lg: "text-lg py-5",
    },
  },
  defaultVariants: {
    size: "md",
    variant: "primary",
  },
});
