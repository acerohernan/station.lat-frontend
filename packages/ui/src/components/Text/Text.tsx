import React, { ComponentProps, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";
import { cva, VariantProps } from "class-variance-authority";

const textClasses = cva("inline-block", {
  variants: {
    variant: {
      default: "text-gray_dark dark:text-gray_secondary",
      danger: "text-red_danger",
      warning: "text-yellow_warning",
      info: "text-blue_primary",
      success: "text-green_success",
      bold: "text-gray_dark font-semibold dark:text-gray_secondary",
    },
    size: {
      sm: "text-sm",
      xs: "text-xs",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "sm",
  },
});

interface TextProps extends ComponentProps<"span">, PropsWithChildren, VariantProps<typeof textClasses> {}

const Text: React.FC<TextProps> = ({ children, className, variant = "default", size = "sm", ...props }) => (
  <span className={twMerge(className, textClasses({ variant, size }))} {...props}>
    {children}
  </span>
);

export default Text;
