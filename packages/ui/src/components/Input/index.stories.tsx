import React, { ChangeEvent, useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import Input from "./Input";
import { IconButton } from "../Button";

export default {
  title: "Atoms/Input",
  component: Input,
};

export const Default = () => {
  const [password, setPassword] = useState("password");
  const [watchPassword, setWatchPassword] = useState(false);

  const handlePassword = (e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);

  const handleWatchhPassword = () => setWatchPassword(!watchPassword);

  return (
    <div className="flex flex-col gap-4">
      <Input id="some-id" label="Email" bottomMessage="Your password need to contain at least 8 caracters" />
      <Input id="some-id" label="Email" variant="error" bottomMessage="Please enter a valid email address" />
      <Input id="some-id" label="Email" variant="success" bottomMessage="Good email" />
      <Input
        id="some-id"
        label="Password"
        value={password}
        type={watchPassword ? "text" : "password"}
        onChange={handlePassword}
        rightElement={
          watchPassword ? (
            <IconButton
              icon={
                <EyeSlashIcon className="h-6 w-6 text-black_primary dark:text-white" onClick={handleWatchhPassword} />
              }
            />
          ) : (
            <IconButton
              icon={<EyeIcon className="h-6 w-6 text-black_primary dark:text-white" onClick={handleWatchhPassword} />}
            />
          )
        }
      />
    </div>
  );
};
