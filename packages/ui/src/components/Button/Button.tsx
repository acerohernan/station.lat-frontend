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

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant, size, loading, ...props }, forwardedRed) => (
    <button
      ref={forwardedRed}
      className={twMerge(buttonClasses({ variant, size }), "relative", loading && "cursor-wait")}
      disabled={loading}
      // eslint-disable-next-line react/button-has-type
      type={props.type || "button"}
      {...props}
    >
      {loading && (
        <div className="flex items-center justify-center absolute w-full right-0 top-0 bottom-0 rounded-md">
          <div className="dot-flashing" />
        </div>
      )}
      <div className={`${loading && "opacity-0"}`}>{children}</div>
    </button>
  )
);

export default Button;
