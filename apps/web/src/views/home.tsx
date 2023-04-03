import { Card, Heading, Text } from "@latinstation/ui";
import React from "react";

const HomeView = () => (
  <main className="flex flex-col gap-4">
    {Array.from("1234567890").map((index) => (
      <Card key={index}>
        <Heading as="h4">Costumer name</Heading>
        <Text className="mt-2">This is an example text</Text>
      </Card>
    ))}
  </main>
);

export default HomeView;
