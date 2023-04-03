import React from "react";
import Switch from "./Switch";
import { Text } from "../Text";

export default {
  component: Switch,
  title: "Atoms/Switch",
};

export const Default = () => (
  <div>
    <Switch id="switch-id" />
    <div className="flex mt-4 gap-2 items-center">
      <Switch id="switch-id-2" />
      <Text>Accept the terms and conditions</Text>
    </div>
  </div>
);
