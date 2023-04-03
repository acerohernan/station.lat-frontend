import React from "react";
import Heading from "./Heading";

export default {
  title: "Atoms/Heading",
  component: Heading,
};

export const Default = () => (
  <div>
    <Heading>Heading H1</Heading>
    <Heading as="h2">Heading H2</Heading>
    <Heading as="h3">Heading H3</Heading>
    <Heading as="h4">Heading H4</Heading>
    <Heading as="h5">Heading H5</Heading>
    <Heading as="h6">Heading H6</Heading>
  </div>
);
