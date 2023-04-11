import React from "react";

import { BellIcon, Bars3Icon, SunIcon } from "@heroicons/react/24/solid";
import type { ComponentMeta } from "@storybook/react";
import type { VariantProps } from "class-variance-authority";

import Button from "./Button";
import { Text } from "../Text";
import { buttonClasses } from "./classes";
import IconButton from "./IconButton";

export default {
  title: "Atoms/Button",
  component: Button,
} satisfies ComponentMeta<typeof Button>;

type ButtonVariant = VariantProps<typeof buttonClasses>["variant"];
const variants: Array<ButtonVariant> = ["primary", "outline"];

const Buttons = ({ variant }: VariantProps<typeof buttonClasses>) => {
  const variantLabel = `${variant?.charAt(0).toUpperCase()}${variant?.slice(1)}`;

  return (
    <div className="flex items-center gap-4">
      <Button size="lg" variant={variant}>
        {variantLabel} LG
      </Button>
      <Button variant={variant}>{variantLabel} MD</Button>
      <Button size="sm" variant={variant}>
        {variantLabel} SM
      </Button>
    </div>
  );
};

export const Default = () => (
  <div className="flex-col flex gap-4">
    {variants.map((variant) => (
      <Buttons key={variant} variant={variant} />
    ))}
  </div>
);

export const Icons = () => (
  <div className="flex gap-2">
    <IconButton icon={<BellIcon className="h-5 w-5 text-gray_secondary" />} />
    <IconButton icon={<Bars3Icon className="h-5 w-5 text-gray_secondary" />} />
    <IconButton icon={<SunIcon className="h-6 w-6 text-yellow_warning" />} />
  </div>
);

export const States = () => (
  <div>
    <Text className="w-full mb-2">Loading</Text>
    <div className="flex gap-4">
      {variants.map((variant) => (
        <Button key={variant} variant={variant} loading>
          Something
        </Button>
      ))}
    </div>
  </div>
);
