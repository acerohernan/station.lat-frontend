import { Button, Card, Heading, Input, Link, Text } from "@latinstation/ui";
import { signIn } from "next-auth/react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import AuthLayout from "./shared/components/AuthLayout";
import Divisor from "./shared/components/Divisor";
import GoogleAuthButton from "./shared/components/oauth/GoogleSignInButton";
import DiscordAuthButton from "./shared/components/oauth/DiscordSignIn";

interface EmailSignInForm {
  email: string;
}

function SignInView() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<EmailSignInForm>();

  const [loading, setLoading] = useState(false);
  const [emailSended, setEmailSended] = useState(false);

  const handleEmailSignIn = (data: EmailSignInForm) => {
    setLoading(true);
    signIn("email", {
      ...data,
      redirect: false,
      callbackUrl: "/",
    }).then((res) => {
      if (res?.ok) {
        setEmailSended(true);
        setValue("email", "");
      }

      if (res?.error) {
        alert(res.error);
      }
      setLoading(false);
    });
  };

  return (
    <AuthLayout>
      <form className="w-full max-w-2xl" onSubmit={handleSubmit(handleEmailSignIn)}>
        <Card className="w-full flex flex-col items-center">
          <Heading as="h3">Sign In</Heading>
          <div className="mt-8 w-full grid gap-4 sm:grid-cols-2">
            <GoogleAuthButton label="Sign in with Google" />
            <DiscordAuthButton label="Sign in with Discord" />
          </div>
          <Divisor />
          {emailSended && (
            <div className="w-full p-4 bg-green_success/5 border-green_success border mb-4 rounded-md">
              <span className="text-green_success text-sm">Success! We have sended you a magic link to your email</span>
            </div>
          )}
          <div className="w-full">
            <Input
              id="email-id"
              label="Email"
              {...register("email", {
                required: "The field is required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Entered value does not match email format",
                },
              })}
              bottomMessage={errors.email?.message}
              variant={errors.email?.message ? "error" : "default"}
            />
          </div>
          <div className="w-full flex flex-col mt-6">
            <Button type="submit" loading={loading}>
              Sign in with email
            </Button>
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
