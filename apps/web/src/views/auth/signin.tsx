import { Button, Card, Heading, IconButton, Input, Link, Switch, Text } from "@latinstation/ui";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import React, { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import AuthLayout from "./shared/components/AuthLayout";
import Divisor from "./shared/components/Divisor";
import GoogleAuthButton from "./shared/components/oauth/GoogleSignInButton";
import DiscordAuthButton from "./shared/components/oauth/DiscordSignIn";

interface SignInFormValues {
  email: string;
  password: string;
}

function SignInView() {
  const [watchPassword, setWatchPassword] = useState(false);
  const handleWatchPassword = () => setWatchPassword(!watchPassword);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormValues>();

  const onSubmit = (data: SignInFormValues) => {
    signIn("credentials", {
      ...data,
      redirect: false,
    }).then((response) => {
      if (response?.error) {
        alert(response.error);
      }
      if (response?.ok) {
        alert("Success! Welcome back!");
      }
    });
  };

  return (
    <AuthLayout>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-2xl">
        <Card className="w-full flex flex-col items-center">
          <Heading as="h3">Sign In</Heading>
          <div className="mt-8 w-full grid gap-4 sm:grid-cols-2">
            <GoogleAuthButton label="Sign in with Google" />
            <DiscordAuthButton label="Sign in with Discord" />
          </div>
          <Divisor />
          <div className="flex w-full flex-col gap-4">
            <Input
              id="email-id"
              label="Email"
              {...register("email", {
                required: true,
              })}
            />
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
              {...register("password", {
                required: true,
              })}
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
            <Button type="submit">Sign in</Button>
            <div className="w-full flex items-center justify-center gap-1 mt-4">
              <Text>Don&apos;t have an account?</Text>
              <Link href="/signup">Create an account</Link>
            </div>
          </div>
        </Card>
      </form>
    </AuthLayout>
  );
}

export default SignInView;
