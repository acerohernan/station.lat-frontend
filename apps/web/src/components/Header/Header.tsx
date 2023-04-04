import { IconButton } from "@latinstation/ui";
import React from "react";
import { MagnifyingGlassIcon, Bars3Icon } from "@heroicons/react/24/solid";
import ThemeButton from "./ThemeButton";
import UserMenuButton from "./UserMenuButton";

interface HeaderProps {
  openSideBar: () => void;
}

const Header: React.FC<HeaderProps> = ({ openSideBar }) => (
  <div className="flex items-center justify-between py-4">
    <div className="md:hidden">
      <IconButton icon={<Bars3Icon className="w-6 h-6 text-blue_primary" />} onClick={openSideBar} />
    </div>
    <IconButton
      icon={<MagnifyingGlassIcon className="hidden w-6 h-6 text-gray_dark dark:text-gray_secondary md:block" />}
    />
    <div className="flex items-center">
      <IconButton
        icon={<MagnifyingGlassIcon className="w-6 h-6 text-gray_dark dark:text-gray_secondary md:hidden" />}
      />
      <ThemeButton />
      <UserMenuButton />
    </div>
  </div>
);

export default Header;
