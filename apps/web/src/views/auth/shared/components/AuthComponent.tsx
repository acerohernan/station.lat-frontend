import { Button, Card, Heading, Input, Link, Message, Text } from "@latinstation/ui";
import { signIn } from "next-auth/react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import AuthLayout from "./AuthLayout";
import Divisor from "./Divisor";
import GoogleAuthButton from "./oauth/GoogleSignInButton";
import DiscordAuthButton from "./oauth/DiscordSignIn";

interface EmailSignInForm {
  email: string;
}

interface AuthComponentProps {
  page: "signin" | "signup";
}

function AuthComponent({ page }: AuthComponentProps) {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors: formErrors },
  } = useForm<EmailSignInForm>();

  const router = useRouter();
  const { error: authServerError } = router.query;

  const [loading, setLoading] = useState(false);
  const [emailSended, setEmailSended] = useState(false);
  const [errors, setErrors] = useState<Array<string>>(() => {
    if (authServerError === "Callback") return ["Something went wrong with the auth provider, please try again later"];

    return [];
  });

  const handleEmailSignIn = (data: EmailSignInForm) => {
    setLoading(true);
    signIn("email", {
      ...data,
      redirect: false,
      callbackUrl: "/",
    })
      .then((res) => {
        if (res?.ok) {
          setEmailSended(true);
          setValue("email", "");
        }
        setLoading(false);
      })
      .catch(() => {
        setErrors(["Something went wrong with the email auth, please try again later"]);
        setLoading(false);
      });
  };

  return (
    <AuthLayout>
      <form className="w-full max-w-2xl" onSubmit={handleSubmit(handleEmailSignIn)}>
        <Card className="w-full flex flex-col items-center">
          <Heading as="h3">{page === "signin" ? "Sign In" : "Sign up"}</Heading>
          {errors.length > 0 && (
            <Message variant="danger" className="mt-4 w-full">
              <div>
                {errors.map((error) => (
                  <li key={error}>{error}</li>
                ))}
              </div>
            </Message>
          )}
          <div className="mt-8 w-full grid gap-4 sm:grid-cols-2">
            <GoogleAuthButton label={page === "signin" ? "Sign in with Google" : "Sign up with Google"} />
            <DiscordAuthButton label={page === "signin" ? "Sign in with Discord" : "Sign up with Discord"} />
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
              bottomMessage={formErrors.email?.message}
              variant={formErrors.email?.message ? "error" : "default"}
            />
          </div>
          <div className="w-full flex flex-col mt-6">
            <Button type="submit" loading={loading}>
              Sign in with email
            </Button>
            {page === "signin" && (
              <div className="w-full flex items-center justify-center gap-1 mt-4">
                <Text>Don&apos;t have an account?</Text>
                <Link href="/signup">Create an account</Link>
              </div>
            )}
            {page === "signup" && (
              <div className="w-full flex items-center justify-center gap-1 mt-4">
                <Text>Do you have an account?</Text>
                <Link href="signin">Sign in</Link>
              </div>
            )}
          </div>
        </Card>
      </form>
    </AuthLayout>
  );
}

export default AuthComponent;
