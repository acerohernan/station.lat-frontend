import React, { useState } from "react";
import { Button, Card, Heading, IconButton, Input, Link, Switch, Text } from "@latinstation/ui";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import AuthLayout from "./shared/components/AuthLayout";
import Divisor from "./shared/components/Divisor";
import GoogleAuthButton from "./shared/components/oauth/GoogleSignInButton";
import DiscordAuthButton from "./shared/components/oauth/DiscordSignIn";

function SignUpView() {
  return (
    <AuthLayout>
      <Card className="w-full max-w-2xl flex flex-col items-center">
        <Heading as="h3">Welcome to Latin Station!</Heading>
        <div className="mt-8 w-full grid gap-4 sm:grid-cols-2">
          <GoogleAuthButton label="Sign up with Google" />
          <DiscordAuthButton label="Sign up with Discord" />
        </div>
        <Divisor />
        <div className="flex w-full flex-col gap-4">
          <Input id="email-id" label="Email" />
        </div>
        <div className="w-full flex flex-col mt-6">
          <Button>Sign Up with email</Button>
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
