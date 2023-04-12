import React from "react";
import { VariantProps } from "class-variance-authority";
import Message, { messageClasses } from "./Message";

export default {
  title: "Atoms/Message",
  component: Message,
};

const variants: Array<VariantProps<typeof messageClasses>["variant"]> = ["danger", "info", "success", "warning"];

export const Default = () => (
  <div className="grid gap-6">
    {variants.map((variant) => (
      <div key={`${variant}-${Math.random()}`} className="grid gap-4">
        <Message variant={variant}>This is a {variant} message</Message>
        <Message variant={variant}>
          <h1>This is an {variant} list</h1>
          <div className="list-disc mt-2">
            <li>Your email is invalid</li>
            <li>Your password is invalid</li>
          </div>
        </Message>
      </div>
    ))}
  </div>
);
