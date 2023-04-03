import React, { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import { Heading } from "../components/Heading";
import { Card } from "../components/Card";
import { Input } from "../components/Input";
import GoogleIcon from "./shared/GoogleIcon";
import FacebookIcon from "./shared/FacebookIcon";
import { Button, IconButton } from "../components/Button";
import { Text } from "../components/Text";
import { Switch } from "../components/Switch";
import { Link } from "../components/Link";

export default {
  title: "Templates/SignUp",
};

const Divisor = () => (
  <div className="flex w-full gap-2 items-center my-5">
    <div className="w-full bg-gray_tertiary dark:bg-white/10 h-[2px]" />
    <Text>Or</Text>
    <div className="w-full bg-gray_tertiary dark:bg-white/10 h-[2px]" />
  </div>
);

export const Default = () => {
  const [watchPassword, setWatchPassword] = useState(false);
  const handleWatchPassword = () => setWatchPassword(!watchPassword);

  return (
    <div className="flex items-center justify-content">
      <Card className="w-full max-w-2xl flex flex-col items-center">
        <Heading as="h3">Get started with Latin Station</Heading>
        <div className="grid mt-8 w-full gap-4 sm:grid-cols-2">
          <button
            type="button"
            className="flex items-center justify-center rounded-md gap-3 py-3 w-full border-blue_light dark:border-white/20 border-2"
          >
            <GoogleIcon />
            <span className="text-sm text-black_primary  dark:text-white font-semibold">Sign up with Google</span>
          </button>
          <button
            type="button"
            className="flex items-center justify-center rounded-md gap-3 py-3 w-full border-blue_light dark:border-white/20 border-2"
          >
            <FacebookIcon />
            <span className="text-sm text-black_primary  dark:text-white font-semibold">Sign up with Facebook</span>
          </button>
        </div>
        <Divisor />
        <div className="flex w-full flex-col gap-4">
          <Input id="email-id" label="Email" />
          <Input id="phone-id" label="Phone" type="number" />
          <Input
            id="password-id"
            label="Password"
            type={watchPassword ? "text" : "password"}
            rightElement={
              watchPassword ? (
                <IconButton
                  icon={
                    <EyeSlashIcon
                      className="h-6 w-6 text-gray_secondary dark:text-white"
                      onClick={handleWatchPassword}
                    />
                  }
                />
              ) : (
                <IconButton
                  icon={
                    <EyeIcon className="h-6 w-6 text-gray_secondary dark:text-white" onClick={handleWatchPassword} />
                  }
                />
              )
            }
          />
        </div>
        <div className="mt-5 flex justify-between items-center w-full">
          <div className="flex gap-2 items-center">
            <Switch id="swith-id" />
            <Text>I agree with the terms and conditions</Text>
          </div>
        </div>
        <div className="w-full flex flex-col mt-8">
          <Button>Sign Up</Button>
          <div className="w-full flex items-center justify-center gap-1 mt-4">
            <Text>Do you have an account?</Text>
            <Link href="/signup">Sign In</Link>
          </div>
        </div>
      </Card>
    </div>
  );
};
