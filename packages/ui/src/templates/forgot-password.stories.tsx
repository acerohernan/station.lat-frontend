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
  title: "Templates/ForgotPassword",
};

export const Default = () => {
  const [watchPassword, setWatchPassword] = useState(false);
  const handleWatchPassword = () => setWatchPassword(!watchPassword);

  return (
    <div className="flex items-center justify-content">
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
    </div>
  );
};
