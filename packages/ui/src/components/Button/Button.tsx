import React, { ComponentProps, forwardRef } from "react";
import type { VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import { buttonClasses } from "./classes";

interface ButtonBaseProps {
  loading?: boolean;
  href?: string;
}

interface ButtonProps
  extends VariantProps<typeof buttonClasses>,
    ButtonBaseProps,
    Omit<ComponentProps<"button">, "ref"> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ children, variant, size, ...props }, forwardedRed) => (
  <button
    ref={forwardedRed}
    className={twMerge(buttonClasses({ variant, size }))}
    // eslint-disable-next-line react/button-has-type
    type={props.type || "button"}
    {...props}
  >
    {children}
  </button>
));

export default Button;
