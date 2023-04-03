import React from "react";
import { Heading } from "../Heading";
import { Text } from "../Text";
import Card from "./Card";

export default { title: "Atoms/Card", component: Card };

export const Default = () => (
  <Card>
    <Heading className="mb-2" as="h3">
      Welcome Back! Watson
    </Heading>
    <Text>
      You have done <Text variant="info">76%</Text> more sales today. Check your inventory and update your stocks.
    </Text>
  </Card>
);
