import React, { PropsWithChildren, ReactElement } from "react";
import NextLink from "next/link";
import { Heading } from "../Heading";
import { Text } from "../Text";

interface SideBarRootProps extends PropsWithChildren {
  isOpen?: boolean;
  onClose?: () => void;
}
interface OverlayProps {
  onClick?: () => void;
}

interface SideBarGroupProps extends PropsWithChildren {
  title?: string;
}

interface SideBarItemProps {
  selected?: boolean;
  icon: ReactElement;
  label: string;
  href: string;
}

const Overlay: React.FC<OverlayProps> = ({ onClick }) => (
  <div
    className="h-screen w-screen top-0 bottom-0 left-0 right-0 fixed bg-black/10 z-overlay md:hidden"
    onClick={onClick}
    aria-hidden
  />
);

const Group: React.FC<SideBarGroupProps> = ({ title, children }) => (
  <div>
    {Boolean(title) && (
      <Text className="ml-3" variant="bold" size="xs">
        {title?.toUpperCase()}
      </Text>
    )}
    <div className="flex flex-col gap-1 mt-2">{children}</div>
  </div>
);

const Item: React.FC<SideBarItemProps> = ({ selected, href, icon, label }) => {
  const iconElement = React.cloneElement(icon, {
    className: `w-5 h-5 ${selected ? "text-blue_primary" : "text-gray_dark dark:text-gray_secondary"}`,
  });

  return (
    <NextLink
      className={`transition-all ease-in-out hover:bg-blue_dark/5 dark:hover:bg-white/5 rounded-md px-4 h-[44px] flex items-center gap-3 ${
        selected ? "bg-blue_light/20 dark:bg-blue_primary/10" : "bg-white dark:bg-black_tertiary"
      }`}
      href={href}
    >
      {iconElement}
      <Text variant={selected ? "info" : "default"}>{label}</Text>
    </NextLink>
  );
};

const Root: React.FC<SideBarRootProps> = ({ isOpen, onClose, children }) => (
  <>
    <div
      className={`bg-white dark:bg-black_tertiary w-[280px] fixed md:block top-0 left-0 z-sidebar h-screen transition-all max-h-screen overflow-auto ${
        isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
      }`}
    >
      <div className="p-4">
        <Heading as="h4" className="ml-3 mt-2">
          Latin Station
        </Heading>
      </div>
      <div className="px-4 pt-5 gap-5 flex flex-col">{children}</div>
    </div>
    {isOpen ? <Overlay onClick={onClose} /> : null}
  </>
);

const Sidebar = { Root, Group, Item };
export default Sidebar;
