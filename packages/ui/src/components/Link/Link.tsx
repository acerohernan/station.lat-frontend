import React, { ComponentProps, PropsWithChildren } from "react";
import NextLink from "next/link";
import { twMerge } from "tailwind-merge";

interface LinkProps extends PropsWithChildren, Omit<ComponentProps<"a">, "ref"> {
  href: string;
}

const Link: React.FC<LinkProps> = ({ children, className, href, ...props }) => (
  <NextLink {...props} className={twMerge("text-sm text-blue_primary hover:underline", className)} href={href}>
    {children}
  </NextLink>
);

export default Link;
