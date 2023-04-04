import React from "react";
import Text from "./Text";

export default {
  title: "Atoms/Text",
  component: Text,
};

export const Default = () => (
  <div className="flex-col flex gap-1">
    <Text variant="primary">Primary</Text>
    <Text variant="secondary">Secondary</Text>
    <Text variant="danger">Danger</Text>
    <Text variant="warning">Warning</Text>
    <Text variant="success">Success</Text>
    <Text variant="info">Info</Text>
    <Text bold>Info</Text>
  </div>
);
