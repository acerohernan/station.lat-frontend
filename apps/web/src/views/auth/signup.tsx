import React, { useState } from "react";
import { Button, Card, Heading, IconButton, Input, Link, Switch, Text } from "@latinstation/ui";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import AuthLayout from "./shared/components/AuthLayout";
import Divisor from "./shared/components/Divisor";
import GoogleAuthButton from "./shared/components/oauth/GoogleSignInButton";

function SignUpView() {
  const [watchPassword, setWatchPassword] = useState(false);
  const handleWatchPassword = () => setWatchPassword(!watchPassword);

  return (
    <AuthLayout>
      <Card className="w-full max-w-2xl flex flex-col items-center">
        <Heading as="h3">Get started with Latin Station</Heading>
        <div className="mt-8 w-full">
          <GoogleAuthButton label="Sign up with Google" />
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
            <Link href="/signin">Sign In</Link>
          </div>
        </div>
      </Card>
    </AuthLayout>
  );
}

export default SignUpView;
