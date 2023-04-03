import React, { ComponentProps, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";
import { cva, VariantProps } from "class-variance-authority";

const headingClasses = cva("font-semibold text-black_primary dark:text-white", {
  variants: {
    as: {
      h1: "text-h1",
      h2: "text-h2",
      h3: "text-h3",
      h4: "text-h4",
      h5: "text-h5",
      h6: "text-h6",
    },
  },
});

interface HeadingProps extends ComponentProps<"h1">, PropsWithChildren, VariantProps<typeof headingClasses> {}

const Heading: React.FC<HeadingProps> = ({ children, className, as = "h1" }) => {
  const elementType = as ?? "h1";
  const element = React.createElement(elementType, { className: twMerge(headingClasses({ as }), className) }, children);

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{element}</>;
};

export default Heading;
