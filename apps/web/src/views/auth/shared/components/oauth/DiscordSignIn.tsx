import { signIn } from "next-auth/react";
import React from "react";
import { useRouter } from "next/router";
import DiscordIcon from "../../icons/DiscordIcon";

interface Props {
  label: string;
}

const DiscordAuthButton: React.FC<Props> = ({ label }) => (
  <button
    type="button"
    className="flex items-center justify-center rounded-md gap-3 py-3 w-full border-blue_light dark:border-white/20 border-2"
    onClick={() => signIn("discord")}
  >
    <DiscordIcon />
    <span className="text-sm text-black_primary  dark:text-white font-semibold">{label}</span>
  </button>
);

export default DiscordAuthButton;
