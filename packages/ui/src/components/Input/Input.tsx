/* eslint-disable jsx-a11y/label-has-associated-control */
import { VariantProps, cva } from "class-variance-authority";
import React, { forwardRef, type ComponentProps, ReactElement } from "react";
import { twMerge } from "tailwind-merge";

const inputClasses = cva("", {
  variants: {
    variant: {
      default:
        "text-gray_dark dark:text-gray_secondary group-focus-within:!text-blue_primary border-blue_light group-hover:border-blue_primary/50 dark:border-white/30 dark:group-hover:border-white/50 group-focus-within:!border-blue_primary",
      error:
        "text-red_danger group-focus-within:!text-red_danger border-red_danger/60 group-hover:border-red_danger group-focus-within:!border-red_danger",
      success:
        "text-green_success group-focus-within:!text-green_success border-green_success/60 group-hover:border-green-500 group-focus-within:!border-green_success",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

interface InputProps extends Omit<ComponentProps<"input">, "ref" | "placeholder">, VariantProps<typeof inputClasses> {
  id: string;
  label?: string;
  bottomMessage?: string;
  rightElement?: ReactElement;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ id, label, variant, bottomMessage, rightElement, ...props }, forwardedRef) => (
    <div>
      <div className="group relative w-full">
        <input
          className="peer w-full bg-transparent px-3 py-3 outline-none transition-colors dark:text-white"
          placeholder=" "
          ref={forwardedRef}
          id={id}
          {...props}
        />

        <label
          className={twMerge(
            "pointer-events-none absolute left-[9px] top-px -translate-y-1/2 transform px-1 text-sm transition-all duration-300 group-focus-within:!top-px group-focus-within:!text-sm  peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base",
            inputClasses({ variant })
          )}
          htmlFor={id}
        >
          {label}
        </label>

        <fieldset
          className={twMerge(
            "pointer-events-none invisible absolute inset-0 mt-[-9px] rounded-md border border-black_primary transition-colors group-focus-within:border-2   peer-placeholder-shown:visible",
            inputClasses({ variant })
          )}
        >
          <legend className="invisible ml-2 max-w-[0.01px] whitespace-nowrap px-0 text-sm transition-all duration-300 group-focus-within:max-w-full group-focus-within:px-1">
            {label}
          </legend>
        </fieldset>

        <fieldset
          className={twMerge(
            "pointer-events-none visible absolute inset-0 mt-[-9px] rounded-md border transition-colors group-focus-within:border-2    peer-placeholder-shown:invisible",
            inputClasses({ variant })
          )}
        >
          <legend className="invisible ml-2 max-w-full whitespace-nowrap px-1 text-sm">{label}</legend>
        </fieldset>
        {Boolean(rightElement) && (
          <div className="absolute flex top-0 bottom-0 right-0 items-center justify-center mr-1">{rightElement}</div>
        )}
      </div>

      {Boolean(bottomMessage) && (
        <span className={`text-sm block mt-1 ${inputClasses({ variant })}`}>{bottomMessage}</span>
      )}
    </div>
  )
);

export default Input;
