import { signIn } from "next-auth/react";
import React from "react";
import GoogleIcon from "../../icons/GoogleIcon";

interface Props {
  label: string;
}

const GoogleAuthButton: React.FC<Props> = ({ label }) => (
  <button
    type="button"
    className="flex items-center justify-center rounded-md gap-3 py-3 w-full border-blue_light dark:border-white/20 border-2"
    onClick={() => signIn("google")}
  >
    <GoogleIcon />
    <span className="text-sm text-black_primary  dark:text-white font-semibold">{label}</span>
  </button>
);

export default GoogleAuthButton;
