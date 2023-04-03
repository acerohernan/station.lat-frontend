import React, { ComponentProps } from "react";

interface SwitchProps extends ComponentProps<"input"> {
  id: string;
  checked?: boolean;
}

const Switch: React.FC<SwitchProps> = ({ id, checked, ...props }) => (
  <label htmlFor={id} className="relative cursor-pointer">
    <input type="checkbox" id={id} className="sr-only" {...props} checked={checked} />
    <div className="toggle-bg bg-gray_light dark:bg-black_secondary dark:border-black_secondary border-gray-200  border-2 h-6 w-11 rounded-full" />
  </label>
);

export default Switch;
