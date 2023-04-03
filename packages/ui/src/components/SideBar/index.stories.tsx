import React, { ReactElement, useState } from "react";
import { ClipboardDocumentListIcon, CurrencyDollarIcon } from "@heroicons/react/24/solid";
import { Button } from "../Button";
import SideBar from "./SideBar";

export default {
  title: "Molecules/SideBar",
};

interface SideBarItem {
  label: string;
  icon: ReactElement;
  href: string;
  selected?: boolean;
}

const sideBarGroupsInfo: Record<string, Array<SideBarItem>> = {
  dashboard: [
    {
      label: "LMS",
      icon: <CurrencyDollarIcon />,
      href: "/",
      selected: true,
    },
    {
      label: "Sales 1",
      icon: <ClipboardDocumentListIcon />,
      href: "/",
    },
    {
      label: "Sales 2",
      icon: <CurrencyDollarIcon />,
      href: "/",
    },
    {
      label: "Hiring",
      icon: <CurrencyDollarIcon />,
      href: "/",
    },
    {
      label: "Project 1",
      icon: <CurrencyDollarIcon />,
      href: "/",
    },
  ],
  management: [
    {
      label: "LMS",
      icon: <CurrencyDollarIcon />,
      href: "/",
    },
    {
      label: "Sales 1",
      icon: <ClipboardDocumentListIcon />,
      href: "/",
    },
    {
      label: "Sales 2",
      icon: <CurrencyDollarIcon />,
      href: "/",
    },
    {
      label: "Hiring",
      icon: <CurrencyDollarIcon />,
      href: "/",
    },
    {
      label: "Project 1",
      icon: <CurrencyDollarIcon />,
      href: "/",
    },
  ],
};

export const Default = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => setIsOpen(false);

  return (
    <div>
      <div>
        <Button onClick={() => setIsOpen(true)} size="sm">
          Click to open
        </Button>
      </div>
      <SideBar.Root isOpen={isOpen} onClose={onClose}>
        {Object.keys(sideBarGroupsInfo).map((sideBarGroup) => (
          <SideBar.Group title={sideBarGroup}>
            {sideBarGroupsInfo[sideBarGroup].map(({ icon, label, href, selected }) => (
              <SideBar.Item href={href} label={label} icon={icon} selected={selected} key={label} />
            ))}
          </SideBar.Group>
        ))}
      </SideBar.Root>
    </div>
  );
};
