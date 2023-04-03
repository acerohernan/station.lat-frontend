import React, { type ComponentProps, forwardRef, type ReactNode } from "react";

interface IconButtonProps extends ComponentProps<"button"> {
  icon: ReactNode;
}

const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(({ icon, ...props }, forwardedRef) => (
  <button
    className="p-2 rounded-full hover:bg-black_primary/5 dark:hover:bg-white/5 transition-all ease-in-out"
    ref={forwardedRef}
    // eslint-disable-next-line react/button-has-type
    type={props.type || "button"}
    {...props}
  >
    {icon}
  </button>
));

export default IconButton;
