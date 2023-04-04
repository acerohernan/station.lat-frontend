import React, { ComponentProps, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";
import { cva, VariantProps } from "class-variance-authority";

const textClasses = cva("inline-block", {
  variants: {
    variant: {
      primary: "text-black_primary dark:text-white",
      secondary: "text-gray_dark dark:text-gray_secondary",
      danger: "text-red_danger",
      warning: "text-yellow_warning",
      info: "text-blue_primary",
      success: "text-green_success",
    },
    size: {
      sm: "text-sm",
      xs: "text-xs",
    },
  },
  defaultVariants: {
    variant: "secondary",
    size: "sm",
  },
});

interface TextProps extends ComponentProps<"span">, PropsWithChildren, VariantProps<typeof textClasses> {
  bold?: boolean;
}

const Text: React.FC<TextProps> = ({ children, className, variant, size, bold, ...props }) => (
  <span className={twMerge(className, textClasses({ variant, size }), bold ? "font-semibold" : "")} {...props}>
    {children}
  </span>
);

export default Text;
