import { HomeModernIcon, UserGroupIcon } from "@heroicons/react/24/solid";
import { ReactElement } from "react";

interface Route {
  path: string;
  icon: ReactElement;
  label: string;
}

export const routes: Array<Route> = [
  {
    path: "/",
    icon: <HomeModernIcon />,
    label: "Home",
  },
  {
    path: "/costumers",
    icon: <UserGroupIcon />,
    label: "Costumers",
  },
];
