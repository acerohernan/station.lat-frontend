import React from "react";
import { Button, Card, Heading, Input, Link, Text } from "@latinstation/ui";
import AuthLayout from "./shared/components/AuthLayout";

function ForgotPasswordView() {
  return (
    <AuthLayout>
      <Card className="w-full max-w-2xl flex flex-col items-center">
        <Heading as="h3">Reset your password</Heading>

        <div className="flex w-full flex-col gap-4 mt-10">
          <Input id="email-id" label="Email" />
        </div>

        <div className="w-full flex flex-col mt-6">
          <Button>Reset</Button>
          <div className="w-full flex items-center justify-center gap-1 mt-4">
            <Text>Don&apos;t have an account?</Text>
            <Link href="/signup">Create an account</Link>
          </div>
        </div>
      </Card>
    </AuthLayout>
  );
}

export default ForgotPasswordView;
