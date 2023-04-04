import { Button, Card, Heading, IconButton, Input, Link, Switch, Text } from "@latinstation/ui";
import React, { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import AuthLayout from "./shared/components/AuthLayout";
import Divisor from "./shared/components/Divisor";
import GoogleAuthButton from "./shared/components/oauth/GoogleSignInButton";

function SignInView() {
  const [watchPassword, setWatchPassword] = useState(false);
  const handleWatchPassword = () => setWatchPassword(!watchPassword);

  return (
    <AuthLayout>
      <Card className="w-full max-w-2xl flex flex-col items-center">
        <Heading as="h3">Sign In</Heading>
        <div className="mt-8 w-full">
          <GoogleAuthButton label="Sign in with Google" />
        </div>
        <Divisor />
        <div className="flex w-full flex-col gap-4">
          <Input id="email-id" label="Email" />
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
        <div className="mt-5 grid grid-cols-2 justify-between items-center w-full gap-2">
          <div className="flex gap-2 items-center">
            <Switch id="swith-id" />
            <Text>Remember me</Text>
          </div>

          <Link href="/forgot-password" className="text-end">
            Forgot password?
          </Link>
        </div>
        <div className="w-full flex flex-col mt-8">
          <Button>Sign in</Button>
          <div className="w-full flex items-center justify-center gap-1 mt-4">
            <Text>Don&apos;t have an account?</Text>
            <Link href="/signup">Create an account</Link>
          </div>
        </div>
      </Card>
    </AuthLayout>
  );
}

export default SignInView;
