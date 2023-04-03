import React, { ComponentProps, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

interface CardProps extends ComponentProps<"div">, PropsWithChildren {}

const Card: React.FC<CardProps> = ({ children, className, ...props }) => (
  <div {...props} className={twMerge(className, "p-6 rounded-md shadow-card bg-white dark:bg-black_tertiary")}>
    {children}
  </div>
);

export default Card;
