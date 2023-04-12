import { VariantProps, cva } from "class-variance-authority";
import React, { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

export const messageClasses = cva("p-4 border rounded-md text-sm", {
  variants: {
    variant: {
      info: "border-blue_primary text-blue_primary bg-blue_primary/5",
      danger: "border-red_danger text-red_danger bg-red_danger/5",
      success: "border-green_success text-green_success bg-green_success/5",
      warning: "border-yellow_warning text-yellow_warning bg-yellow_warning/5",
    },
  },
  defaultVariants: {
    variant: "info",
  },
});

interface MessageProps extends VariantProps<typeof messageClasses>, ComponentProps<"div"> {}

const Message: React.FC<MessageProps> = ({ variant, className, children, ...props }) => (
  <div className={twMerge(messageClasses({ variant }), className)} {...props}>
    {children}
  </div>
);

export default Message;
