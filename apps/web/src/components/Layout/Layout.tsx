import React, { PropsWithChildren, useState } from "react";
import { usePathname } from "next/navigation";
import { SideBar } from "@latinstation/ui";
import { HomeModernIcon, UserGroupIcon } from "@heroicons/react/24/solid";
import Header from "../Header/Header";
import { routes } from "./routes";

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => setIsOpen(false);

  const pathname = usePathname();

  return (
    <div className="grid grid-cols-1 md:grid-cols-[280px_1fr]">
      <SideBar.Root isOpen={isOpen} onClose={onClose}>
        <SideBar.Group title="general">
          {routes.map(({ label, icon, path }) => (
            <SideBar.Item key={path} label={label} href={path} icon={icon} selected={path === pathname} />
          ))}
        </SideBar.Group>
      </SideBar.Root>
      <div />
      <div className="max-w-[1200px] w-full mx-auto px-6 pb-6">
        <Header openSideBar={() => setIsOpen(true)} />
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
